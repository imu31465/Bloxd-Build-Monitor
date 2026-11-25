# Changed — Bundle Modifications Report (Part 009 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `9 / 56` (**286** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (111 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L215-L221` → after: `L5775-L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5775-L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5775-L5788) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L215-L221)

```diff
-     function FQ(QQ, WQ, XQ, wQ) {
-       for (var qQ = 0, TQ = 0, zQ = 0, FQ = QQ.length; zQ < FQ; ++zQ) {
-         var PQ = QQ[zQ];
-         if (!sQ(WQ, PQ)) {
-           for (var gQ = 0; gQ < 2 * WQ; ++gQ) XQ[qQ++] = PQ[gQ];
-           wQ[TQ++] = zQ
-         }
+     function IS(MM, rM, iM, OM, SM) {
+       const jM = MM => "linear" === SM ? MM : {
+           bS: SM,
+           point: MM
+         },
+         aM = {};
+       for (const [PM, nM] of OM)
+         for (const [rM, iM] of Object.entries(MM(PM, nM, jM))) aM[rM] ??= {
+           timeline: []
+         }, aM[rM].timeline.push(iM);
+       return {
+         yS: rM,
+         loop: iM,
+         GS: aM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L226-L243` → after: `L5809-L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5809-L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5809-L5850) · [Before (L226-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L226-L243)

```diff
-     function PQ(QQ, WQ, XQ, wQ) {
-       var sQ = QQ.length,
-         PQ = WQ.length;
-       if (!(sQ <= 0 || PQ <= 0)) {
-         var gQ = QQ[0].length >>> 1;
-         if (!(gQ <= 0)) {
-           var JQ, rQ = qQ.mallocDouble(2 * gQ * sQ),
-             IQ = qQ.mallocInt32(sQ);
-           if ((sQ = FQ(QQ, gQ, rQ, IQ)) > 0) {
-             if (1 === gQ && wQ) TQ.init(sQ), JQ = TQ.sweepComplete(gQ, XQ, 0, sQ, rQ, IQ, 0, sQ, rQ, IQ);
-             else {
-               var jQ = qQ.mallocDouble(2 * gQ * PQ),
-                 BQ = qQ.mallocInt32(PQ);
-               (PQ = FQ(WQ, gQ, jQ, BQ)) > 0 && (TQ.init(sQ + PQ), JQ = 1 === gQ ? TQ.sweepBipartite(gQ, XQ, 0, sQ, rQ, IQ, 0, PQ, jQ, BQ) : zQ(gQ, XQ, wQ, sQ, rQ, IQ, PQ, jQ, BQ), qQ.free(jQ), qQ.free(BQ))
-             }
-             qQ.free(rQ), qQ.free(IQ)
- ... (2 more removed lines; see GitHub link above)
+     function cS(MM, rM, iM) {
+       const {
+         drop: OM = 0,
+         shift: SM = 0,
+         torso: jM = 0,
+         nod: aM = 0,
+         tilt: PM = 0,
+         legs: nM = [0, 0],
+         arms: QM = 0,
+         spread: zM = 0
+       } = rM, LM = KS * Math.cos(jM) - qS * Math.sin(jM), mM = KS * Math.sin(jM) + qS * Math.cos(jM), HM = iM([0, -OM, SM]);
+       return {
+         LowerBody: {
+           timeFraction: MM,
+           position: HM,
+           rotation: iM([0, 0, 0])
+ ... (26 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L248-L249` → after: `L5855-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5855-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5855-L5856) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L248-L249)

```diff
-     function gQ(QQ, WQ) {
-       wQ.push([QQ, WQ])
+     function Mj(MM, rM, iM) {
+       return IS(cS, MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L251-L287` → after: `L5858-L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5858-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5858-L5860) · [Before (L251-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L251-L287)

```diff
-   },
-   38602: (QQ, WQ) => {
-     var XQ = "d",
-       wQ = "ax",
-       qQ = "fp",
-       TQ = "es",
-       zQ = "rs",
-       sQ = "re",
-       FQ = "rb",
-       PQ = "bs",
-       gQ = "be",
-       JQ = "bb",
-       rQ = [XQ, wQ, "vv", zQ, sQ, FQ, "ri", PQ, gQ, JQ, "bi"];
- 
-     function IQ(QQ) {
-       var WQ = "bruteForce" + (QQ ? "Full" : "Partial"),
- ... (21 more removed lines; see GitHub link above)
+ 
+     function rj(MM) {
+       return "number" === typeof MM ? [MM, MM] : MM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L289-L433` → after: `L5862-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5862-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5862-L5891) · [Before (L289-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L289-L433)

```diff
-     WQ.partial = IQ(!1), WQ.full = IQ(!0)
-   },
-   38595: (QQ, WQ, XQ) => {
-     QQ.exports = function(QQ, WQ, XQ, TQ, gQ, lQ, hQ, iQ, cQ) {
-       ! function(QQ, WQ) {
-         var XQ = 8 * qQ.log2(WQ + 1) * (QQ + 1) | 0,
-           TQ = qQ.nextPow2(GQ * XQ);
-         bQ.length < TQ && (wQ.free(bQ), bQ = wQ.mallocInt32(TQ));
-         var zQ = qQ.nextPow2(UQ * XQ);
-         vQ.length < zQ && (wQ.free(vQ), vQ = wQ.mallocDouble(zQ))
-       }(QQ, TQ + hQ);
-       var AQ, RQ = 0,
-         EQ = 2 * QQ;
-       dQ(RQ++, 0, 0, TQ, 0, hQ, XQ ? 16 : 0, -1 / 0, 1 / 0), XQ || dQ(RQ++, 0, 0, hQ, 0, TQ, 1, -1 / 0, 1 / 0);
-       for (; RQ > 0;) {
-         var CQ = (RQ -= 1) * GQ,
- ... (129 more removed lines; see GitHub link above)
+ 
+     function ij(MM, rM, iM) {
+       const {
+         rise: OM = 0,
+         shift: SM = 0,
+         torso: jM = 0,
+         twist: aM = 0,
+         tilt: PM = 0,
+         nod: nM = 0,
+         cock: QM = 0,
+         arms: zM = 0,
+         spread: LM = 0
+       } = rM, [mM, HM] = rj(zM), [hM, JM] = rj(LM);
+       return {
+         TorsoNode: {
+           timeFraction: MM,
+ ... (14 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L437-L493` → after: `L5895-L5898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5895-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5895-L5898) · [Before (L437-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L437-L493)

```diff
-   },
-   38611: (QQ, WQ, XQ) => {
-     QQ.exports = function(QQ, WQ, XQ, zQ, sQ, FQ) {
-       if (zQ <= XQ + 1) return XQ;
-       var PQ = XQ,
-         gQ = zQ,
-         JQ = zQ + XQ >>> 1,
-         rQ = 2 * QQ,
-         IQ = JQ,
-         jQ = sQ[rQ * JQ + WQ];
-       for (; PQ < gQ;) {
-         if (gQ - PQ < qQ) {
-           TQ(QQ, WQ, PQ, gQ, sQ, FQ), jQ = sQ[rQ * JQ + WQ];
-           break
-         }
-         var BQ = gQ - PQ,
- ... (41 more removed lines; see GitHub link above)
+     const Oj = [1.0625, -1, 0];
+ 
+     function Sj(MM) {
+       return "number" === typeof MM ? [MM, MM] : MM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L513-L519` → after: `L5902-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5902-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5902-L5942) · [Before (L513-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L513-L519)

```diff
-       for (var wQ = 2 * (QQ + 1), qQ = QQ + 1; qQ <= WQ; ++qQ) {
-         for (var TQ = XQ[wQ++], zQ = XQ[wQ++], sQ = qQ, FQ = wQ - 2; sQ-- > QQ;) {
-           var PQ = XQ[FQ - 2],
-             gQ = XQ[FQ - 1];
-           if (PQ < TQ) break;
-           if (PQ === TQ && gQ < zQ) break;
-           XQ[FQ] = PQ, XQ[FQ + 1] = gQ, FQ -= 2
+       const {
+         drop: OM = 0,
+         shift: SM = 0,
+         torso: jM = 0,
+         tilt: aM = 0,
+         nod: PM = 0,
+         cock: nM = 0,
+         legs: QM = [0, 0],
+         arms: zM = 0,
+         spread: LM = 0
+       } = rM, [mM, HM] = Sj(zM), [hM, JM] = Sj(LM), dM = -jM, yM = -aM, [lM, EM, UM] = function(MM, rM) {
+         const [iM, OM, SM] = [-Oj[0], Oj[1], -Oj[2]], jM = iM * Math.cos(rM) - OM * Math.sin(rM), aM = iM * Math.sin(rM) + OM * Math.cos(rM);
+         return [jM - iM, -(aM * Math.cos(MM) - SM * Math.sin(MM) - OM), aM * Math.sin(MM) + SM * Math.cos(MM) - SM]
+       }(dM, yM), GM = iM([0, -OM, SM]);
+       return {
+         TorsoNode: {
+ ... (25 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L526-L529` → after: `L5951-L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5951-L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L5951-L5967) · [Before (L526-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L526-L529)

```diff
-       WQ *= 2;
-       var wQ = XQ[QQ *= 2],
-         qQ = XQ[QQ + 1];
-       XQ[QQ] = XQ[WQ], XQ[QQ + 1] = XQ[WQ + 1], XQ[WQ] = wQ, XQ[WQ + 1] = qQ
+       var OM, SM;
+       const jM = function() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+           return MM + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - MM) * iM
+         },
+         [aM, PM] = null !== (OM = MM.legs) && void 0 !== OM ? OM : [0, 0],
+         [nM, QM] = null !== (SM = rM.legs) && void 0 !== SM ? SM : [0, 0];
+       return {
+         drop: jM(MM.drop, rM.drop),
+         shift: jM(MM.shift, rM.shift),
+         torso: jM(MM.torso, rM.torso),
+         nod: jM(MM.nod, rM.nod),
+         tilt: jM(MM.tilt, rM.tilt),
+         legs: [jM(aM, nM), jM(PM, QM)],
+         arms: jM(MM.arms, rM.arms),
+         spread: jM(MM.spread, rM.spread)
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L532-L533` → after: `L6166-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6166-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6166-L6172) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L532-L533)

```diff
-     function qQ(QQ, WQ, XQ) {
-       WQ *= 2, XQ[QQ *= 2] = XQ[WQ], XQ[QQ + 1] = XQ[WQ + 1]
+     function Ej(MM) {
+       const rM = function(MM) {
+         var rM;
+         const iM = (0, Pj.d)(MM).poseRig;
+         return null !== (rM = yj[MM]) && void 0 !== rM ? rM : void 0 === iM ? null : dj[iM]
+       }(MM);
+       return null === rM ? null : lj[rM]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L536-L540` → after: `L6175-L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6175-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6175-L6178) · [Before (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L536-L540)

```diff
-     function TQ(QQ, WQ, XQ, wQ) {
-       WQ *= 2, XQ *= 2;
-       var qQ = wQ[QQ *= 2],
-         TQ = wQ[QQ + 1];
-       wQ[QQ] = wQ[WQ], wQ[QQ + 1] = wQ[WQ + 1], wQ[WQ] = wQ[XQ], wQ[WQ + 1] = wQ[XQ + 1], wQ[XQ] = qQ, wQ[XQ + 1] = TQ
+     function Uj(MM) {
+       return {
+         "--difficulty-colour": MM
+       }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L543-L544` → after: `L6182-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6182-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6182-L6304) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L543-L544)

```diff
-     function zQ(QQ, WQ, XQ, wQ, qQ) {
-       WQ *= 2, qQ[QQ *= 2] = qQ[WQ], qQ[WQ] = XQ, qQ[QQ + 1] = qQ[WQ + 1], qQ[WQ + 1] = wQ
+     function Cj(MM) {
+       var rM, iM, OM;
+       let {
+         picker: SM,
+         controller: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, PS.A)(), PM = US(), {
+         page: nM
+       } = SM;
+       return (0, QS.jsxs)("section", {
+         className: "SkyblockSkillsPanel SkyblockBossPicker",
+         role: "dialog",
+         "aria-modal": "true",
+         "aria-labelledby": "skyblockBossPickerTitle",
+ ... (107 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L547-L551` → after: `L6307-L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6307-L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6307-L6340) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L547-L551)

```diff
-     function sQ(QQ, WQ, XQ) {
-       WQ *= 2;
-       var wQ = XQ[QQ *= 2],
-         qQ = XQ[WQ];
-       return !(wQ < qQ) && (wQ !== qQ || XQ[QQ + 1] > XQ[WQ + 1])
+     function ej(MM) {
+       let {
+         dungeon: rM,
+         select: iM
+       } = MM;
+       return (0, QS.jsxs)(lS.e, {
+         className: MS()("SkyblockDungeonCard", {
+           Selected: rM.selected
+         }),
+         onClick: () => {
+           iM(rM.id)
+         },
+         children: [(0, QS.jsxs)("div", {
+           className: "SkyblockDungeonCardTitle",
+           children: [(0, QS.jsx)("strong", {
+             children: rM.name
+ ... (18 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L554-L556` → after: `L6343-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6343-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6343-L6415) · [Before (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L554-L556)

```diff
-     function FQ(QQ, WQ, XQ, wQ) {
-       var qQ = wQ[QQ *= 2];
-       return qQ < WQ || qQ === WQ && wQ[QQ + 1] < XQ
+     function bj(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, nS.e)(Fr, rM.getSnapshot()),
+         {
+           t: OM
+         } = (0, PS.A)(),
+         SM = US();
+       return iM.enabled ? (0, QS.jsxs)(yS.e, {
+         show: iM.open,
+         close: rM.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: [iM.picker && (0, QS.jsx)(Cj, {
+           picker: iM.picker,
+ ... (57 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L559-L592` → after: `L6418-L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6418-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6418-L6455) · [Before (L559-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L559-L592)

```diff
-     function PQ(QQ, gQ, JQ) {
-       var rQ = (gQ - QQ + 1) / 6 | 0,
-         IQ = QQ + rQ,
-         jQ = gQ - rQ,
-         BQ = QQ + gQ >> 1,
-         yQ = BQ - rQ,
-         VQ = BQ + rQ,
-         DQ = IQ,
-         pQ = yQ,
-         GQ = BQ,
-         UQ = VQ,
-         bQ = jQ,
-         vQ = QQ + 1,
-         dQ = gQ - 1,
-         HQ = 0;
-       sQ(DQ, pQ, JQ) && (HQ = DQ, DQ = pQ, pQ = HQ), sQ(UQ, bQ, JQ) && (HQ = UQ, UQ = bQ, bQ = HQ), sQ(DQ, GQ, JQ) && (HQ = DQ, DQ = GQ, GQ = HQ), sQ(pQ, GQ, JQ) && (HQ = pQ, pQ = GQ, GQ = HQ), sQ(DQ, UQ, JQ) && (HQ = DQ, DQ = UQ, UQ = HQ), sQ(GQ, UQ, JQ) && (HQ = GQ, GQ = UQ, UQ … [truncated]
- ... (18 more removed lines; see GitHub link above)
+     function wj(MM) {
+       let {
+         collection: rM,
+         select: iM
+       } = MM;
+       return (0, QS.jsxs)(lS.e, {
+         className: MS()("SkyblockSkillCard", "SkyblockCollectionCard", {
+           Selected: rM.selected,
+           Locked: rM.locked
+         }),
+         ariaPressed: rM.selected,
+         onClick: () => {
+           iM(rM.id)
+         },
+         children: [(0, QS.jsx)("div", {
+           className: "SkyblockSkillIcon",
+ ... (22 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L594-L641` → after: `L6457-L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6457-L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6457-L6711) · [Before (L594-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L594-L641)

```diff
-   },
-   38584: (QQ, WQ, XQ) => {
-     QQ.exports = {
-       init: function(QQ) {
-         var WQ = qQ.nextPow2(QQ);
-         FQ.length < WQ && (wQ.free(FQ), FQ = wQ.mallocInt32(WQ));
-         PQ.length < WQ && (wQ.free(PQ), PQ = wQ.mallocInt32(WQ));
-         gQ.length < WQ && (wQ.free(gQ), gQ = wQ.mallocInt32(WQ));
-         JQ.length < WQ && (wQ.free(JQ), JQ = wQ.mallocInt32(WQ));
-         rQ.length < WQ && (wQ.free(rQ), rQ = wQ.mallocInt32(WQ));
-         IQ.length < WQ && (wQ.free(IQ), IQ = wQ.mallocInt32(WQ));
-         var XQ = 8 * WQ;
-         jQ.length < XQ && (wQ.free(jQ), jQ = wQ.mallocDouble(XQ))
-       },
-       sweepBipartite: function(QQ, WQ, XQ, wQ, qQ, sQ, rQ, IQ, VQ, DQ) {
-         for (var pQ = 0, GQ = 2 * QQ, UQ = QQ - 1, bQ = GQ - 1, vQ = XQ; vQ < wQ; ++vQ) {
- ... (32 more removed lines; see GitHub link above)
+ 
+     function tj(MM) {
+       let {
+         collection: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)();
+       return (0, QS.jsxs)("div", {
+         className: "SkyblockSkillDetail SkyblockCollectionDetail",
+         children: [(0, QS.jsx)("div", {
+           className: "SkyblockSkillDetailIcon",
+           children: (0, QS.jsx)(SS.b, {
+             itemName: rM.icon,
+             amount: 0
+           })
+ ... (239 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L643-L678` → after: `L6713-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6713-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6713-L6740) · [Before (L643-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L643-L678)

```diff
-       sweepComplete: function(QQ, WQ, XQ, wQ, qQ, zQ, sQ, VQ, DQ, pQ) {
-         for (var GQ = 0, UQ = 2 * QQ, bQ = QQ - 1, vQ = UQ - 1, dQ = XQ; dQ < wQ; ++dQ) {
-           var HQ = zQ[dQ] + 1 << 1,
-             aQ = UQ * dQ;
-           jQ[GQ++] = qQ[aQ + bQ], jQ[GQ++] = -HQ, jQ[GQ++] = qQ[aQ + vQ], jQ[GQ++] = HQ
-         }
-         for (dQ = sQ; dQ < VQ; ++dQ) {
-           HQ = pQ[dQ] + 1 << 1;
-           var lQ = UQ * dQ;
-           jQ[GQ++] = DQ[lQ + bQ], jQ[GQ++] = 1 | -HQ, jQ[GQ++] = DQ[lQ + vQ], jQ[GQ++] = 1 | HQ
-         }
-         var hQ = GQ >>> 1;
-         TQ(jQ, hQ);
-         var iQ = 0,
-           cQ = 0,
-           AQ = 0;
- ... (20 more removed lines; see GitHub link above)
+       Dj = Array.from({
+         length: 18
+       }, ((MM, rM) => ({
+         "--ember-left": `${(4+92*(.618034*rM%1)).toFixed(1)}%`,
+         "--ember-size": 3 + rM % 3 * 2 + "px",
+         "--ember-drift": 14 * (rM % 5 - 2) + "px",
+         "--ember-duration": `${(5.5+7*rM%5*.9).toFixed(1)}s`,
+         "--ember-delay": `${(-1.37*rM%8).toFixed(2)}s`
+       })));
+ 
+     function kj(MM) {
+       if (MM.style.removeProperty("--part-size"), null === MM.parentElement || "wrap" === getComputedStyle(MM.parentElement).flexWrap) return;
+       const rM = [...MM.children],
+         iM = getComputedStyle(MM),
+         OM = parseFloat(iM.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
+         SM = (MM.clientHeight - parseFloat(iM.rowGap) * (rM.length - 1)) / rM.length,
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L680-L722` → after: `L6742-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6742-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6742-L6775) · [Before (L680-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L680-L722)

```diff
-         }
-       },
-       scanBipartite: function(QQ, WQ, XQ, wQ, qQ, sQ, gQ, JQ, rQ, IQ, VQ, DQ) {
-         var pQ = 0,
-           GQ = 2 * QQ,
-           UQ = WQ,
-           bQ = WQ + QQ,
-           vQ = 1,
-           dQ = 1;
-         wQ ? dQ = zQ : vQ = zQ;
-         for (var HQ = qQ; HQ < sQ; ++HQ) {
-           var aQ = HQ + vQ,
-             lQ = GQ * HQ;
-           jQ[pQ++] = gQ[lQ + UQ], jQ[pQ++] = -aQ, jQ[pQ++] = gQ[lQ + bQ], jQ[pQ++] = aQ
-         }
-         for (HQ = rQ; HQ < IQ; ++HQ) {
- ... (27 more removed lines; see GitHub link above)
+           return QM
+         }));
+       MM.style.setProperty("--part-size", `${Math.floor(Math.max(OM,Math.min(...jM)))}px`)
+     }
+ 
+     function Zj(MM) {
+       var rM, iM, OM, SM, jM;
+       let {
+         controller: aM
+       } = MM;
+       const PM = (0, nS.e)(Ii, aM.getSnapshot()),
+         {
+           t: nM
+         } = (0, PS.A)(),
+         QM = US(),
+         zM = function() {
+ ... (18 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L724-L760` → after: `L6777-L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6777-L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6777-L6807) · [Before (L724-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L724-L760)

```diff
-           } else BQ(FQ, PQ, cQ--, AQ - vQ)
-         }
-       },
-       scanComplete: function(QQ, WQ, XQ, wQ, qQ, sQ, PQ, gQ, JQ, rQ, IQ) {
-         for (var BQ = 0, yQ = 2 * QQ, VQ = WQ, DQ = WQ + QQ, pQ = wQ; pQ < qQ; ++pQ) {
-           var GQ = pQ + zQ,
-             UQ = yQ * pQ;
-           jQ[BQ++] = sQ[UQ + VQ], jQ[BQ++] = -GQ, jQ[BQ++] = sQ[UQ + DQ], jQ[BQ++] = GQ
-         }
-         for (pQ = gQ; pQ < JQ; ++pQ) {
-           GQ = pQ + 1;
-           var bQ = yQ * pQ;
-           jQ[BQ++] = rQ[bQ + VQ], jQ[BQ++] = -GQ
-         }
-         var vQ = BQ >>> 1;
-         TQ(jQ, vQ);
- ... (21 more removed lines; see GitHub link above)
+           }), [MM]), (0, eM.useCallback)((MM => {
+             rM.current = MM
+           }), [])
+         }(null === (rM = PM.preview) || void 0 === rM ? void 0 : rM.name),
+         HM = (0, eM.useRef)(null),
+         hM = (0, eM.useRef)({}),
+         JM = PM.forging,
+         dM = null !== (iM = null === JM || void 0 === JM ? void 0 : JM.preview.tier) && void 0 !== iM ? iM : 0,
+         yM = null !== (OM = null === JM || void 0 === JM ? void 0 : JM.preview.named) && void 0 !== OM && OM,
+         lM = (0, eM.useMemo)((() => {
+           return null === JM ? null : {
+             flames: (MM = dM, rM = yM, Array.from({
+               length: 26 + 6 * MM + (rM ? 20 : 0)
+             }, ((MM, rM) => {
+               const iM = rM < 6,
+                 OM = Math.random() * Math.PI * 2,
+ ... (15 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L762-L768` → after: `L6809-L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6809-L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L6809-L7362) · [Before (L762-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L762-L768)

```diff
-             }
-           } else {
-             for (GQ = HQ - zQ, cQ = dQ - 1; cQ >= 0; --cQ)
-               if (FQ[cQ] === GQ) {
-                 for (CQ = cQ + 1; CQ < dQ; ++CQ) FQ[CQ - 1] = FQ[CQ];
-                 break
-               }-- dQ
+             }))),
+             sparks: vi(dM, yM)
+           };
+           var MM, rM
+         }), [null === JM || void 0 === JM ? void 0 : JM.id]);
+       if (!PM.enabled) return null;
+       const EM = PM.preview,
+         UM = PM.arriving,
+         GM = null !== UM && !UM.sameSword,
+         CM = null !== EM && (0, QS.jsx)(SS.b, {
+           itemName: EM.baseSword,
+           amount: 0,
+           enchantmentTier: EM.enchantmentTier
+         });
+       return (0, QS.jsx)(yS.e, {
+         show: PM.open,
+ ... (538 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L770-L784` → after: `L7364-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR7364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L7364-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L7364-L7366) · [Before (L770-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L770-L784)

```diff
-         }
-       }
-     };
-     var wQ = XQ(38572),
-       qQ = XQ(38576),
-       TQ = XQ(38589),
-       zQ = 1 << 28,
-       sQ = 1024,
-       FQ = wQ.mallocInt32(sQ),
-       PQ = wQ.mallocInt32(sQ),
-       gQ = wQ.mallocInt32(sQ),
-       JQ = wQ.mallocInt32(sQ),
-       rQ = wQ.mallocInt32(sQ),
-       IQ = wQ.mallocInt32(sQ),
-       jQ = wQ.mallocDouble(8192);
+         }, MM)))
+       })
+     }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L786-L789` → after: `L7368-L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L7368-L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L7368-L7437) · [Before (L786-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L786-L789)

```diff
-     function BQ(QQ, WQ, XQ, wQ) {
-       var qQ = WQ[wQ],
-         TQ = QQ[XQ - 1];
-       QQ[qQ] = TQ, WQ[TQ] = qQ
+     function Kj(MM) {
+       var rM;
+       let {
+         charm: iM,
+         view: OM,
+         controller: SM
+       } = MM;
+       const {
+         t: jM
+       } = (0, PS.A)(), aM = OM.shop, PM = (null === (rM = OM.sparkle) || void 0 === rM ? void 0 : rM.id) === iM.id;
+       return (0, QS.jsxs)("li", {
+         className: MS()("SkyblockLampLightCharm", iM.owned && "Owned", iM.socketed && "Socketed"),
+         children: [PM && (0, QS.jsx)(Ij, {}, OM.sparkle.count), (0, QS.jsx)("h4", {
+           children: iM.name
+         }), (0, QS.jsx)("p", {
+           className: "SkyblockLampLightEffect",
+ ... (54 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L792-L793` → after: `L7440-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L7440-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L7440-L7477) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L792-L793)

```diff
-     function yQ(QQ, WQ, XQ, wQ) {
-       QQ[XQ] = wQ, WQ[wQ] = XQ
+     function qj(MM) {
+       var rM;
+       let {
+         tint: iM,
+         view: OM,
+         controller: SM
+       } = MM;
+       const {
+         t: jM
+       } = (0, PS.A)();
+       return (0, QS.jsxs)("li", {
+         className: MS()("SkyblockLampLightTint", iM.wearing && "Wearing"),
+         style: {
+           "--tint-colour": iM.colour
+         },
+         children: [(null === (rM = OM.sparkle) || void 0 === rM ? void 0 : rM.id) === iM.id && (0, QS.jsx)(Ij, {}, OM.sparkle.count), (0, QS.jsx)("span", {
+ ... (22 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L795-L805` → after: `L7479-L7586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L7479-L7586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L7479-L7586) · [Before (L795-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L795-L805)

```diff
-   },
-   38580: QQ => {
-     function WQ(QQ, XQ, wQ) {
-       var qQ = 0 | QQ[wQ];
-       if (qQ <= 0) return [];
-       var TQ, zQ = new Array(qQ);
-       if (wQ === QQ.length - 1)
-         for (TQ = 0; TQ < qQ; ++TQ) zQ[TQ] = XQ;
-       else
-         for (TQ = 0; TQ < qQ; ++TQ) zQ[TQ] = WQ(QQ, XQ, wQ + 1);
-       return zQ
+ 
+     function Tj(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, nS.e)(hO, rM.getSnapshot()),
+         {
+           t: OM
+         } = (0, PS.A)(),
+         SM = iM.shop;
+       return (0, QS.jsxs)("div", {
+         className: "SkyblockLampLightTab",
+         children: [(0, QS.jsxs)("div", {
+           className: "SkyblockLampLightTop",
+           children: [(0, QS.jsx)("span", {
+             className: "SkyblockLampLightBalance",
+ ... (92 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L807-L819` → after: `L7588-L7619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR7588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L7588-L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L7588-L7619) · [Before (L807-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L807-L819)

```diff
-     QQ.exports = function(QQ, XQ) {
-       switch ("undefined" === typeof XQ && (XQ = 0), typeof QQ) {
-         case "number":
-           if (QQ > 0) return function(QQ, WQ) {
-             var XQ, wQ;
-             for (XQ = new Array(QQ), wQ = 0; wQ < QQ; ++wQ) XQ[wQ] = WQ;
-             return XQ
-           }(0 | QQ, XQ);
-           break;
-         case "object":
-           if ("number" === typeof QQ.length) return WQ(QQ, XQ, 0)
-       }
-       return []
+ 
+     function Vj(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, nS.e)(hO, rM.getSnapshot()),
+         {
+           t: OM
+         } = (0, PS.A)();
+       return iM.releasing ? (0, QS.jsx)(iS.i, {
+         children: (0, QS.jsxs)("button", {
+           type: "button",
+           className: "SkyblockLampLightPill",
+           onClick: () => {
+             rM.setRelease(!1)
+           },
+ ... (16 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L837-L844` → after: `L7622-L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L7622-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L7622-L8150) · [Before (L837-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L837-L844)

```diff
-       function FQ(QQ, XQ) {
-         var wQ = WQ[XQ],
-           TQ = qQ[XQ],
-           zQ = TQ.hash[QQ];
-         zQ && (TQ.remove(QQ), wQ.JA && (wQ.multi ? (zQ.forEach((WQ => {
-           WQ && wQ.JA(QQ, WQ)
-         })), zQ.length = 0) : wQ.JA(QQ, zQ)), sQ.removals.push(TQ), PQ())
-       }
+     function cj(MM) {
+       let {
+         island: rM,
+         view: iM,
+         aim: OM
+       } = MM;
+       const {
+         t: SM
+       } = (0, PS.A)(), jM = rM.featuredFish;
+       return (0, QS.jsxs)("li", {
+         className: MS()("SkyblockKeepersChairIsland", `Island-${rM.id}`, rM.favoured && "Aimed", !rM.relit && "Dark"),
+         children: [(0, QS.jsx)("h3", {
+           children: rM.name
+         }), rM.relit && null !== jM ? (0, QS.jsxs)("div", {
+           className: "SkyblockKeepersChairNotice",
+           children: [(0, QS.jsx)("span", {
+ ... (513 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L846-L848` → after: `L8152-L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8152-L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8152-L8154) · [Before (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L846-L848)

```diff
-       function PQ() {
-         sQ.timeout || (sQ.timeout = !0, setTimeout(gQ, 1))
-       }
+     function ya(MM) {
+       return MM ? Ja : da
+     }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L850-L852` → after: `L8156-L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8156-L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8156-L8179) · [Before (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L850-L852)

```diff
-       function gQ() {
-         sQ.timeout = !1, JQ()
-       }
+     function la(MM) {
+       let {
+         fish: rM,
+         letGoShown: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, PS.A)();
+       return (0, QS.jsxs)("span", {
+         className: "SkyblockReachLogMarks",
+         children: [ha.map(((MM, iM) => {
+           const SM = iM < rM.marks;
+           return (0, QS.jsx)("span", {
+             className: MS()("SkyblockReachLogPip", MM, SM && "Earned", SM && rM.fresh && iM === rM.marks - 1 && "Newest"),
+             title: OM(QO[iM])
+           }, MM)
+ ... (8 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L854-L1002` → after: `L8181-L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8181-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8181-L8216) · [Before (L854-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L854-L1002)

```diff
-       function JQ() {
-         sQ.multiComps.length && function(QQ) {
-           for (var WQ = 0; WQ < QQ.length; WQ++) {
-             var {
-               entID: XQ,
-               data: wQ
-             } = QQ[WQ], qQ = wQ.hash[XQ];
-             if (qQ) {
-               for (var TQ = 0; TQ < qQ.length; TQ++) qQ[TQ] || (qQ.splice(TQ, 1), TQ--);
-               0 === qQ.length && (wQ.remove(XQ), sQ.removals.push(wQ))
-             }
-           }
-           QQ.length = 0
-         }(sQ.multiComps), sQ.removals.length && function(QQ) {
-           for (var WQ = 0; WQ < QQ.length; WQ++) {
-             QQ[WQ].flush()
- ... (133 more removed lines; see GitHub link above)
+     function Ea(MM) {
+       let {
+         letGoShown: rM,
+         haloShown: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, PS.A)();
+       return (0, QS.jsxs)("span", {
+         className: "SkyblockReachLogLegend",
+         children: [(0, QS.jsxs)("span", {
+           className: "SkyblockReachLogLegendItem",
+           title: OM("skyblockGame:reachLogMarks"),
+           children: [(0, QS.jsx)("span", {
+             className: "SkyblockReachLogPip Gold Earned"
+           }), OM("skyblockGame:reachLogLegendMarks")]
+ ... (20 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1004-L1027` → after: `L8218-L8236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8218-L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8218-L8236) · [Before (L1004-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1004-L1027)

```diff
-     QQ.exports = class {
-       constructor() {
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
-       }
-       add(QQ, WQ) {
-         if ("number" === typeof this._map[QQ]) {
-           var XQ = this._map[QQ];
-           this.hash[QQ] = WQ, this.list[XQ] = WQ, this._idList[XQ] = QQ
-         } else this._map[QQ] = this.list.length, this.hash[QQ] = WQ, this.list.push(WQ), this._idList.push(QQ)
-       }
-       remove(QQ) {
-         var WQ = this._map[QQ];
-         this.hash[QQ] = null, this.list[WQ] = null, this._pendingRemovals.push(QQ)
-       }
-       dispose() {
-         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
- ... (8 more removed lines; see GitHub link above)
+ 
+     function Ua(MM) {
+       let {
+         returner: rM
+       } = MM;
+       return (0, QS.jsxs)("div", {
+         className: MS()("SkyblockReachLogReturner", rM.back && "Back"),
+         children: [(0, QS.jsx)("span", {
+           className: "SkyblockReachLogReturnerIcon",
+           "aria-hidden": "true",
+           children: (0, QS.jsx)(SS.b, {
+             itemName: rM.itemName,
+             amount: 0
+           })
+         }), (0, QS.jsx)("span", {
+           className: "SkyblockReachLogReturnerLine",
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1071-L1072` → after: `L8239-L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8239-L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8239-L8282) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1071-L1072)

```diff
-     function tQ(QQ, WQ) {
-       return QQ.set(WQ[0], WQ[1]), QQ
+     function Ga(MM) {
+       let {
+         fish: rM,
+         letGoShown: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, PS.A)();
+       return (0, QS.jsxs)("li", {
+         className: MS()("SkyblockReachLogCard", rM.caught ? "Caught" : "Unknown", rM.marks >= 3 && "GoldCard", rM.fresh && "Fresh", rM.visitor && "Visitor"),
+         children: [rM.visitor && (0, QS.jsx)("span", {
+           className: "SkyblockReachLogVisitorTag",
+           children: OM("skyblockGame:reachLogVisitor")
+         }), rM.fresh && Array.from({
+           length: 4
+         }, ((MM, rM) => (0, QS.jsx)("span", {
+ ... (28 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1075-L1076` → after: `L8285-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8285-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8285-L8308) · [Before (L1075-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1075-L1076)

```diff
-     function oQ(QQ, WQ) {
-       return QQ.add(WQ), QQ
+     function Ca(MM) {
+       let {
+         page: rM,
+         letGoShown: iM,
+         hiddenWaters: OM
+       } = MM;
+       const {
+         t: SM
+       } = (0, PS.A)();
+       return rM.awake ? (0, QS.jsx)("ul", {
+         className: "SkyblockReachLogGrid",
+         children: rM.fish.map((MM => (0, QS.jsx)(Ga, {
+           fish: MM,
+           letGoShown: iM
+         }, MM.itemName)))
+       }) : (0, QS.jsxs)(QS.Fragment, {
+ ... (8 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1079-L1083` → after: `L8311-L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8311-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8311-L8417) · [Before (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1079-L1083)

```diff
-     function eQ(QQ, WQ, XQ, wQ) {
-       var qQ = -1,
-         TQ = QQ ? QQ.length : 0;
-       for (wQ && TQ && (XQ = QQ[++qQ]); ++qQ < TQ;) XQ = WQ(XQ, QQ[qQ], qQ, QQ);
-       return XQ
+     function ea(MM) {
+       var rM, iM;
+       let {
+         controller: OM,
+         regulars: SM,
+         hiddenWaters: jM
+       } = MM;
+       const aM = (0, nS.e)(nO, OM.getSnapshot()),
+         PM = function(MM) {
+           return (0, nS.e)(fO, MM.getSnapshot())
+         }(jM),
+         nM = (0, nS.e)(sO, SM.getSnapshot()),
+         {
+           t: QM
+         } = (0, PS.A)(),
+         zM = US();
+ ... (91 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1087-L1091` → after: `L8422-L8438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8422-L8438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8422-L8438) · [Before (L1087-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1087-L1091)

```diff
-       var WQ = !1;
-       if (null != QQ && "function" != typeof QQ.toString) try {
-         WQ = !!(QQ + "")
-       } catch (XQ) {}
-       return WQ
+       let {
+         conversation: rM,
+         completedLabel: iM
+       } = MM;
+       return (0, QS.jsxs)("article", {
+         className: "SkyblockDialogueConversation",
+         children: [(0, QS.jsxs)("header", {
+           children: [(0, QS.jsx)("h3", {
+             children: rM.questName
+           }), rM.completed && (0, QS.jsx)("span", {
+             className: "SkyblockDialogueCompleted",
+             children: iM
+           })]
+         }), rM.lines.map((MM => (0, QS.jsx)(ba.b, {
+           display: MM.display
+         }, MM.key)))]
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1095-L1099` → after: `L8442-L8512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8442-L8512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8442-L8512) · [Before (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1095-L1099)

```diff
-       var WQ = -1,
-         XQ = Array(QQ.size);
-       return QQ.forEach((function(QQ, wQ) {
-         XQ[++WQ] = [wQ, QQ]
-       })), XQ
+       let {
+         controller: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)(), OM = (0, nS.e)(NO, rM.getSnapshot()), SM = US();
+       if (!OM.enabled) return null;
+       const jM = !OM.loading && 0 === OM.conversations.length;
+       return (0, QS.jsx)(yS.e, {
+         show: OM.open,
+         close: rM.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: (0, QS.jsxs)("section", {
+           className: "SkyblockSkillsPanel SkyblockDialoguePanel",
+           role: "dialog",
+ ... (55 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1102-L1105` → after: `L8515-L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8515-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8515-L8605) · [Before (L1102-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1102-L1105)

```diff
-     function YQ(QQ, WQ) {
-       return function(XQ) {
-         return QQ(WQ(XQ))
-       }
+     function ga(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, nS.e)(BO, rM.getSnapshot()),
+         {
+           t: OM
+         } = (0, PS.A)(),
+         SM = US();
+       return iM.enabled ? (0, QS.jsx)(yS.e, {
+         show: iM.open,
+         close: rM.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: (0, QS.jsxs)("section", {
+           className: "SkyblockSkillsPanel SkyblockAutographsPanel",
+ ... (75 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1109-L1113` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8642) · [Before (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1109-L1113)

```diff
-       var WQ = -1,
-         XQ = Array(QQ.size);
-       return QQ.forEach((function(QQ) {
-         XQ[++WQ] = QQ
-       })), XQ
+       return "next" === MM.phase ? "\u2192" : Ra[MM.kind]
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1115-L1149` → after: `L8644-L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8644-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8644-L8709) · [Before (L1115-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1115-L1149)

```diff
-     var ZQ = Array.prototype,
-       OQ = Function.prototype,
-       KQ = Object.prototype,
-       mQ = LQ["__core-js_shared__"],
-       MQ = function() {
-         var QQ = /[^.]+$/.exec(mQ && mQ.keys && mQ.keys.IE_PROTO || "");
-         return QQ ? "Symbol(src)_1." + QQ : ""
-       }(),
-       QW = OQ.toString,
-       WW = KQ.hasOwnProperty,
-       XW = KQ.toString,
-       wW = RegExp("^" + QW.call(WW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
-       qW = SQ ? LQ.Tj : void 0,
-       TW = LQ.Symbol,
-       zW = LQ.Uint8Array,
-       sW = YQ(Object.getPrototypeOf, Object),
- ... (19 more removed lines; see GitHub link above)
+     const Wa = (0, eM.memo)((function(MM) {
+       let {
+         controller: rM,
+         display: iM
+       } = MM;
+       const OM = (0, nS.e)(Ar, rM.getNotificationSnapshot()),
+         [SM, jM] = (0, eM.useState)(!1);
+       return (0, nS.d)("qteStateUpdated", (MM => {
+         jM(MM.isActive)
+       })), (0, QS.jsxs)("div", {
+         className: "SkyblockQuestNotificationAnchor" + (SM ? " UnderQte" : ""),
+         role: "status",
+         "aria-live": "polite",
+         "aria-atomic": "true",
+         children: [OM && (0, QS.jsxs)("div", {
+           className: `SkyblockQuestNotification ${OM.kind} ${OM.phase}`,
+ ... (50 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1152-L1156` → after: `L8712-L8772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8712-L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8712-L8772) · [Before (L1152-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1152-L1156)

```diff
-       var WQ = -1,
-         XQ = QQ ? QQ.length : 0;
-       for (this.clear(); ++WQ < XQ;) {
-         var wQ = QQ[WQ];
-         this.set(wQ[0], wQ[1])
+       const rM = parseInt(MM.replace("#", ""), 16);
+       return `${rM>>16&255}, ${rM>>8&255}, ${255&rM}`
+     }
+     const Da = (0, eM.memo)((function(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)(), OM = (0, nS.e)(Ji, rM.getSnapshot());
+       if (!OM) return null;
+       const SM = "arrival" === OM.phase;
+       return (0, QS.jsxs)("div", {
+         className: MS()("SkyblockPortalTransit", {
+           Departure: !SM,
+           Arrival: SM
+ ... (45 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1161-L1165` → after: `L8777-L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8777-L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8777-L8779) · [Before (L1161-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1161-L1165)

```diff
-       var WQ = -1,
-         XQ = QQ ? QQ.length : 0;
-       for (this.clear(); ++WQ < XQ;) {
-         var wQ = QQ[WQ];
-         this.set(wQ[0], wQ[1])
+       return {
+         x: MM.left + MM.width / 2,
+         y: MM.top + MM.height / 2
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1169-L1174` → after: `L8783-L8788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8783-L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8783-L8788) · [Before (L1169-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1169-L1174)

```diff
-     function iW(QQ) {
-       var WQ = -1,
-         XQ = QQ ? QQ.length : 0;
-       for (this.clear(); ++WQ < XQ;) {
-         var wQ = QQ[WQ];
-         this.set(wQ[0], wQ[1])
+     function fa() {
+       var MM;
+       const rM = null === (MM = document.querySelector(".HotBar")) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
+       return rM && rM.width > 0 ? oa(rM) : {
+         x: window.innerWidth / 2,
+         y: window.innerHeight - 40
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1179` → after: `L8793-L8818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8793-L8818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8793-L8818) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1179)

```diff
-       this.__data__ = new hW(QQ)
+       let {
+         items: rM,
+         origins: iM,
+         target: OM
+       } = MM;
+       return (0, QS.jsx)("div", {
+         className: "SkyblockDailyRewardFlyingItems",
+         children: rM.map(((MM, rM) => {
+           const SM = iM[rM];
+           return (0, QS.jsx)("span", {
+             className: "SkyblockDailyRewardFlyingItem",
+             style: {
+               left: `${SM.x}px`,
+               top: `${SM.y}px`,
+               "--item-dx": OM.x - SM.x + "px",
+               "--item-dy": OM.y - SM.y + "px",
+ ... (10 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1183-L1196` → after: `L8822-L8827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8822-L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8822-L8827) · [Before (L1183-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1183-L1196)

```diff
-       var XQ = NW(QQ) || function(QQ) {
-           return function(QQ) {
-             return function(QQ) {
-               return !!QQ && "object" == typeof QQ
-             }(QQ) && ZW(QQ)
-           }(QQ) && WW.call(QQ, "callee") && (!PW.call(QQ, "callee") || XW.call(QQ) == TQ)
-         }(QQ) ? function(QQ, WQ) {
-           for (var XQ = -1, wQ = Array(QQ); ++XQ < QQ;) wQ[XQ] = WQ(XQ);
-           return wQ
-         }(QQ.length, String) : [],
-         wQ = XQ.length,
-         qQ = !!wQ;
-       for (var zQ in QQ) !WQ && !WW.call(QQ, zQ) || qQ && ("length" == zQ || eW(zQ, wQ)) || XQ.push(zQ);
-       return XQ
+       const iM = -Math.PI / 2 + 1.25 * (MM / (rM - 1) * 2 - 1),
+         OM = 70 + MM % 3 * 22;
+       return {
+         x: Math.cos(iM) * OM,
+         y: Math.sin(iM) * OM * .7
+       }
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1199-L1201` → after: `L8830-L8860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8830-L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8830-L8860) · [Before (L1199-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1199-L1201)

```diff
-     function RW(QQ, WQ, XQ) {
-       var wQ = QQ[WQ];
-       WW.call(QQ, WQ) && YW(wQ, XQ) && (void 0 !== XQ || WQ in QQ) || (QQ[WQ] = XQ)
+     function Aa(MM) {
+       let {
+         origin: rM,
+         target: iM,
+         count: OM
+       } = MM;
+       const SM = [];
+       for (let jM = 0; jM < OM; jM++) {
+         const MM = Na(jM, OM);
+         SM.push((0, QS.jsx)("span", {
+           className: "SkyblockDailyRewardCoin",
+           style: {
+             left: `${rM.x}px`,
+             top: `${rM.y}px`,
+             "--coin-bx": `${MM.x}px`,
+             "--coin-by": `${MM.y}px`,
+ ... (15 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1204-L1207` → after: `L8863-L8882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8863-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8863-L8882) · [Before (L1204-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1204-L1207)

```diff
-     function EW(QQ, WQ) {
-       for (var XQ = QQ.length; XQ--;)
-         if (YW(QQ[XQ][0], WQ)) return XQ;
-       return -1
+     function xa(MM) {
+       let {
+         day: rM
+       } = MM;
+       const iM = bM[rM - 1];
+       return (0, QS.jsxs)(QS.Fragment, {
+         children: [(0, QS.jsxs)("span", {
+           className: "SkyblockDailyRewardFooterReward",
+           children: [(0, QS.jsx)(SS.b, {
+             itemName: "Gold Coin",
+             amount: 0
+           }), (0, aS.g)(iM.dailyRewardCoins)]
+         }), iM.dailyRewardItems.map((MM => (0, QS.jsxs)("span", {
+           className: "SkyblockDailyRewardFooterReward",
+           children: [(0, QS.jsx)(SS.b, {
+             itemName: MM.dailyRewardItemName,
+ ... (4 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1210-L1315` → after: `L8885-L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8885-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8885-L8919) · [Before (L1210-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1210-L1315)

```diff
-     function CW(QQ, WQ, XQ, wQ, qQ, IQ, DQ) {
-       var AQ;
-       if (wQ && (AQ = IQ ? wQ(QQ, qQ, IQ, DQ) : wQ(QQ)), void 0 !== AQ) return AQ;
-       if (!mW(QQ)) return QQ;
-       var RQ = NW(QQ);
-       if (RQ) {
-         if (AQ = function(QQ) {
-             var WQ = QQ.length,
-               XQ = QQ.constructor(WQ);
-             WQ && "string" == typeof QQ[0] && WW.call(QQ, "index") && (XQ.index = QQ.index, XQ.input = QQ.input);
-             return XQ
-           }(QQ), !WQ) return function(QQ, WQ) {
-           var XQ = -1,
-             wQ = QQ.length;
-           WQ || (WQ = Array(wQ));
-           for (; ++XQ < wQ;) WQ[XQ] = QQ[XQ];
- ... (90 more removed lines; see GitHub link above)
+     function va(MM) {
+       let {
+         day: rM
+       } = MM;
+       const iM = tM(rM);
+       return (0, QS.jsx)("ol", {
+         className: "SkyblockDailyRewardStrip",
+         children: bM.map(((MM, OM) => {
+           const SM = OM + 1;
+           return (0, QS.jsxs)("li", {
+             className: MS()("SkyblockDailyRewardTile", {
+               Claimed: SM < rM && SM !== iM,
+               Today: SM === rM,
+               Tomorrow: SM === iM,
+               Jackpot: SM === wM
+             }),
+ ... (19 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1319-L1320` → after: `L8923-L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8923-L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L8923-L9020) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1319-L1320)

```diff
-       return !(!mW(QQ) || (WQ = QQ, MQ && MQ in WQ)) && (KW(QQ) || nQ(QQ) ? wW : AQ).test(xW(QQ));
-       var WQ
+       let {
+         view: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)(), OM = (0, eM.useRef)(null), SM = (0, eM.useRef)(null), [jM, aM] = (0, eM.useState)(null);
+       (0, eM.useLayoutEffect)((() => {
+         var MM;
+         const rM = null === (MM = OM.current) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
+         if (rM) {
+           var iM, jM;
+           const MM = Array.from(null !== (iM = null === (jM = SM.current) || void 0 === jM ? void 0 : jM.children) && void 0 !== iM ? iM : [], (MM => oa(MM.getBoundingClientRect())));
+           aM({
+             origin: oa(rM),
+             target: Za(),
+             itemOrigins: MM,
+ ... (82 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1324-L1325` → after: `L9034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9034) · [Before (L1324-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1324-L1325)

```diff
-       var WQ = new QQ.constructor(QQ.byteLength);
-       return new zW(WQ).set(new zW(QQ)), WQ
+       return 650 + 220 * MM
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1328-L1333` → after: `L9037-L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9037-L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9037-L9040) · [Before (L1328-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1328-L1333)

```diff
-     function kW(QQ, WQ, XQ, wQ) {
-       XQ || (XQ = {});
-       for (var qQ = -1, TQ = WQ.length; ++qQ < TQ;) {
-         var zQ = WQ[qQ],
-           sQ = wQ ? wQ(XQ[zQ], QQ[zQ], zQ, XQ, QQ) : void 0;
-         RW(XQ, zQ, void 0 === sQ ? QQ[zQ] : sQ)
+     function Ka(MM) {
+       return {
+         "--letter-delay": `${Ia(MM)}ms`,
+         "--letter-land": `${Ia(MM)+300}ms`
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1338-L1343` → after: `L9044-L9071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9044-L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9044-L9071) · [Before (L1338-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1338-L1343)

```diff
-     function fW(QQ, WQ) {
-       var XQ = QQ.__data__;
-       return function(QQ) {
-         var WQ = typeof QQ;
-         return "string" == WQ || "number" == WQ || "symbol" == WQ || "boolean" == WQ ? "__proto__" !== QQ : null === QQ
-       }(WQ) ? XQ["string" == typeof WQ ? "string" : "hash"] : XQ.map
+     function qa(MM) {
+       let {
+         letterCount: rM
+       } = MM;
+       return (0, QS.jsxs)("div", {
+         className: "SkyblockMailboxArt",
+         "aria-hidden": "true",
+         children: [(0, QS.jsx)("img", {
+           className: "SkyblockMailboxFrame",
+           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
+           alt: ""
+         }), (0, QS.jsx)("img", {
+           className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
+           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
+           alt: ""
+         }), (0, QS.jsx)("img", {
+ ... (12 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1346-L1423` → after: `L9074-L9112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9074-L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9074-L9112) · [Before (L1346-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1346-L1423)

```diff
-     function SW(QQ, WQ) {
-       var XQ = function(QQ, WQ) {
-         return null == QQ ? void 0 : QQ[WQ]
-       }(QQ, WQ);
-       return uW(XQ) ? XQ : void 0
-     }
-     lW.prototype.clear = function() {
-       this.__data__ = pW ? pW(null) : {}
-     }, lW.prototype.delete = function(QQ) {
-       return this.has(QQ) && delete this.__data__[QQ]
-     }, lW.prototype.get = function(QQ) {
-       var WQ = this.__data__;
-       if (pW) {
-         var XQ = WQ[QQ];
-         return XQ === wQ ? void 0 : XQ
-       }
- ... (62 more removed lines; see GitHub link above)
+     function Ta(MM) {
+       var rM, iM, OM;
+       let {
+         letter: SM,
+         index: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, PS.A)(), PM = null !== (rM = null === (iM = SM.items[0]) || void 0 === iM ? void 0 : iM.itemName) && void 0 !== rM ? rM : Xa;
+       return (0, QS.jsxs)("li", {
+         className: "SkyblockMailboxLetter",
+         style: Ka(jM),
+         children: [(0, QS.jsx)("div", {
+           className: "SkyblockMailboxStamp",
+           "aria-hidden": "true",
+           children: (0, QS.jsx)(SS.b, {
+ ... (23 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1427-L1428` → after: `L9116-L9155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9116-L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9116-L9155) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1427-L1428)

```diff
-       var WQ = QQ && QQ.constructor;
-       return QQ === ("function" == typeof WQ && WQ.prototype || KQ)
+       let {
+         view: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)();
+       return (0, QS.jsx)("div", {
+         className: "SkyblockMailbox",
+         style: {
+           "--mail-duration": `${rM.durationMs}ms`,
+           "--flag-up": "300ms",
+           "--door-open": "500ms",
+           "--more-land": `${Ia(rM.letters.length)+300}ms`
+         },
+         role: "status",
+         "aria-live": "polite",
+ ... (24 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1432-L1440` → after: `L9168-L9232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9168-L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9168-L9232) · [Before (L1432-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1432-L1440)

```diff
-       if (null != QQ) {
-         try {
-           return QW.call(QQ)
-         } catch (WQ) {}
-         try {
-           return QQ + ""
-         } catch (WQ) {}
-       }
-       return ""
+       let {
+         controller: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)(), OM = (0, nS.e)(dO, rM.getSnapshot());
+       if (null === OM) return null;
+       const SM = OM.fullSet ? "empty" === OM.fuelState ? {
+         text: iM("skyblockGame:magmawardHudNoFuel"),
+         tone: "empty"
+       } : null : {
+         text: iM("skyblockGame:magmawardHudFullSet", {
+           worn: String(OM.wornCount)
+         }),
+         tone: "partial"
+       };
+ ... (49 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1466-L1468` → after: `L9236-L9270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9236-L9270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9236-L9270) · [Before (L1466-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1466-L1468)

```diff
-       return null != QQ && function(QQ) {
-         return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= qQ
-       }(QQ.length) && !KW(QQ)
+       let {
+         controller: rM
+       } = MM;
+       const {
+         t: iM,
+         selectedLanguage: OM
+       } = (0, PS.A)(), SM = (0, nS.e)(lO, rM.getSnapshot());
+       return null === SM ? null : (0, QS.jsx)(iS.i, {
+         placement: "statBars",
+         children: (0, QS.jsxs)("div", {
+           className: MS()("SkyblockGlowtideChip", {
+             SkyblockGlowtideChipInRange: SM.inRange
+           }),
+           style: {
+             "--glowtide-colour": SM.colour
+           },
+ ... (19 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1475-L1476` → after: `L9274-L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9274-L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9274-L9319) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1475-L1476)

```diff
-       var WQ = mW(QQ) ? XW.call(QQ) : "";
-       return WQ == FQ || WQ == PQ
+       let {
+         controller: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)(), OM = (0, nS.e)(UO, rM.getSnapshot());
+       return null === OM ? null : (0, QS.jsx)(iS.i, {
+         placement: "statBars",
+         children: (0, QS.jsxs)("div", {
+           className: MS()("SkyblockGlowMeter", {
+             SkyblockGlowMeterFull: OM.full
+           }),
+           "aria-label": iM("skyblockGame:glowMeterLabel", {
+             fill: String(OM.fill),
+             vL: String(OM.vL)
+           }),
+ ... (30 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1480-L1481` → after: `L9323-L9373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9323-L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9323-L9373) · [Before (L1480-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1480-L1481)

```diff
-       var WQ = typeof QQ;
-       return !!QQ && ("object" == WQ || "function" == WQ)
+       let {
+         controller: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PS.A)(), OM = (0, nS.e)(CO, rM.getSnapshot());
+       if (null === OM) return null;
+       const SM = "waiting" === OM.phase,
+         jM = {
+           animationDuration: `${OM.waitMs}ms`,
+           animationDelay: -OM.elapsedMs + "ms"
+         },
+         aM = SM ? void 0 : {
+           animationDuration: `${OM.waitMs}ms`
+         };
+       return (0, QS.jsxs)("div", {
+ ... (35 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1485-L1490` → after: `L9377-L9392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9377-L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9377-L9392) · [Before (L1485-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1485-L1490)

```diff
-       return ZW(QQ) ? AW(QQ) : function(QQ) {
-         if (!nW(QQ)) return IW(QQ);
-         var WQ = [];
-         for (var XQ in Object(QQ)) WW.call(QQ, XQ) && "constructor" != XQ && WQ.push(XQ);
-         return WQ
-       }(QQ)
+       let {
+         chart: rM,
+         showHere: iM,
+         className: OM
+       } = MM;
+       return (0, QS.jsx)("div", {
+         className: MS()("SkyblockTideChartGrid", OM, null !== rM.pictureName && "Complete"),
+         "aria-hidden": "true",
+         children: rM.cells.map(((MM, OM) => {
+           const SM = 0 !== (rM.pulseCells & 1 << OM),
+             jM = rM.castCell === OM;
+           return (0, QS.jsx)("span", {
+             className: MS()("SkyblockTideChartCell", `Cell-${MM}`, SM && "Pulse", jM && "Cast", iM && rM.hereCell === OM && "Here")
+           }, `${OM}:${SM?`p${rM.pulseToken}`:""}:${jM?`c${rM.castToken}`:""}`)
+         }))
+       })
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1492-L1493` → after: `L9394-L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9394-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9394-L9431) · [Before (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1492-L1493)

```diff
-     QQ.exports = function(QQ) {
-       return CW(QQ, !0, !0)
+ 
+     function jP(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, nS.e)(bO, rM.getSnapshot()),
+         {
+           t: OM
+         } = (0, PS.A)(),
+         SM = iM.chip;
+       if (!iM.enabled || null === SM) return null;
+       const jM = OM("skyblockGame:tideChartsChipLabel", {
+         island: SM.islandName,
+         lit: String(SM.lit),
+         ink: String(SM.ink)
+       });
+ ... (22 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1495-L1508` → after: `L9433-L9538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9433-L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9433-L9538) · [Before (L1495-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1495-L1508)

```diff
-   },
-   38728: QQ => {
-     function WQ(QQ, WQ, XQ) {
-       for (var wQ = QQ.length, qQ = -1 / 0, TQ = 1 / 0, zQ = 0; zQ < wQ; zQ++) {
-         var sQ = (XQ[0][zQ] - QQ[zQ]) / WQ[zQ],
-           FQ = (XQ[1][zQ] - QQ[zQ]) / WQ[zQ];
-         if (sQ > FQ) {
-           var PQ = sQ;
-           sQ = FQ, FQ = PQ
-         }
-         if (FQ < qQ || sQ > TQ) return 1 / 0;
-         sQ > qQ && (qQ = sQ), FQ < TQ && (TQ = FQ)
-       }
-       return qQ > TQ ? 1 / 0 : qQ
+ 
+     function aP(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, nS.e)(bO, rM.getSnapshot()),
+         {
+           t: OM
+         } = (0, PS.A)(),
+         SM = US(),
+         jM = iM.card;
+       return iM.enabled && null !== jM ? (0, QS.jsx)(yS.e, {
+         show: iM.open,
+         close: rM.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+ ... (90 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1524-L1528` → after: `L9542-L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9542-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9542-L9601) · [Before (L1524-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1524-L1528)

```diff
-       for (var WQ, XQ, qQ = 0, TQ = QQ.length, zQ = 0; zQ < QQ.length;) {
-         for (WQ = QQ[zQ], XQ = 0; zQ < TQ && QQ[zQ] === WQ;) ++zQ, ++XQ;
-         qQ += wQ.log2(XQ) / 7 | 0, qQ += wQ.log2(WQ >>> 0) / 7 | 0, qQ += 2
-       }
-       return qQ
+       var rM;
+       let {
+         controller: iM
+       } = MM;
+       const {
+         selectedLanguage: OM
+       } = (0, PS.A)(), SM = OM.code;
+       (0, eM.useEffect)((() => {
+         iM.setTranslator(((MM, rM) => (0, PS.x)(SM, MM, rM)), SM, ((MM, rM) => (0, PS.r)(SM, MM, rM)))
+       }), [iM, SM]);
+       const jM = (0, nS.e)(QM, iM.map.getSnapshot()),
+         {
+           openInGameMenuName: aM
+         } = (0, rS.m)(["openInGameMenuName"]);
+       return (0, QS.jsxs)(QS.Fragment, {
+         children: [(0, QS.jsx)(Wa, {
+ ... (44 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1530-L1550` → after: `L9603-L9646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9603-L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9603-L9646) · [Before (L1530-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1530-L1550)

```diff
-     WQ.size = qQ, WQ.encode = function(QQ, WQ) {
-       WQ || (WQ = new Uint8Array(qQ(QQ)));
-       for (var XQ, wQ, TQ = 0, zQ = WQ.length, sQ = 0; sQ < QQ.length;) {
-         for (XQ = QQ[sQ], wQ = 0; sQ < QQ.length && QQ[sQ] === XQ;) ++sQ, ++wQ;
-         for (; TQ < zQ && wQ >= 128;) WQ[TQ++] = 128 + (127 & wQ), wQ >>>= 7;
-         if (TQ >= zQ) throw new Error("RLE buffer overflow");
-         for (WQ[TQ++] = wQ, XQ >>>= 0; TQ < zQ && XQ >= 128;) WQ[TQ++] = 128 + (127 & XQ), XQ >>>= 7;
-         if (TQ >= zQ) throw new Error("RLE buffer overflow");
-         WQ[TQ++] = XQ
-       }
-       return WQ
-     }, WQ.decode = function(QQ, WQ) {
-       for (var XQ, wQ, qQ, TQ, zQ = WQ.length, sQ = QQ.length, FQ = 0, PQ = 0; PQ < sQ;) {
-         for (XQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) XQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
-         if (XQ += QQ[PQ++] << wQ, PQ >= sQ) throw new Error("RLE buffer underrun");
-         if (FQ + XQ > zQ) throw new Error("Chunk buffer overflow");
- ... (5 more removed lines; see GitHub link above)
+ 
+     function nP(MM) {
+       let {
+         controller: rM
+       } = MM;
+       return (0, QS.jsxs)(QS.Fragment, {
+         children: [(0, QS.jsx)(sS, {
+           controller: rM.map,
+           navigation: rM.navigation
+         }), (0, QS.jsx)(ZS, {
+           controller: rM.skills,
+           surface: "menu"
+         }), (0, QS.jsx)(FS, {
+           controller: rM.quests,
+           surface: "menu"
+         }), (0, QS.jsx)(bj, {
+ ... (28 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1552-L1604` → after: `L9648-L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9648-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9648-L9735) · [Before (L1552-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1552-L1604)

```diff
-   },
-   38010: (QQ, WQ) => {
-     function XQ(QQ) {
-       var WQ = 32;
-       return (QQ &= -QQ) && WQ--, 65535 & QQ && (WQ -= 16), 16711935 & QQ && (WQ -= 8), 252645135 & QQ && (WQ -= 4), 858993459 & QQ && (WQ -= 2), 1431655765 & QQ && (WQ -= 1), WQ
-     }
-     WQ.INT_BITS = 32, WQ.INT_MAX = 2147483647, WQ.INT_MIN = -1 << 31, WQ.sign = function(QQ) {
-       return (QQ > 0) - (QQ < 0)
-     }, WQ.abs = function(QQ) {
-       var WQ = QQ >> 31;
-       return (QQ ^ WQ) - WQ
-     }, WQ.min = function(QQ, WQ) {
-       return WQ ^ (QQ ^ WQ) & -(QQ < WQ)
-     }, WQ.max = function(QQ, WQ) {
-       return QQ ^ (QQ ^ WQ) & -(QQ < WQ)
-     }, WQ.isPow2 = function(QQ) {
- ... (37 more removed lines; see GitHub link above)
+     var QP = iM(37705);
+     const zP = si + Ni;
+ 
+     function LP(MM, rM) {
+       const iM = [{
+         sound: "rpgKnifeSlice1",
+         beat: si,
+         lead: 260,
+         volume: .5,
+         rate: 1
+       }, {
+         sound: "sweep6",
+         beat: si,
+         lead: 140,
+         volume: .35,
+         rate: .85
+ ... (72 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1621-L1624` → after: `L9738-L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9738-L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9738-L9756) · [Before (L1621-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1621-L1624)

```diff
-       static GetPlanes(QQ) {
-         const WQ = [];
-         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, WQ), WQ
+       constructor(MM) {
+         this.deps = MM, this.pending = new Map, this.localHook = null
+       }
+       hookWaiting(MM, rM) {
+         this.pending.delete(MM);
+         const iM = this.deps.now();
+         if (null === rM) {
+           var OM;
+           if ((null === (OM = this.localHook) || void 0 === OM ? void 0 : OM.hookId) === MM) {
+             const MM = iM >= this.localHook.biteAtMs - 300;
+             this.localHook = null, this.deps.onLocalWaitEnded(MM)
+           }
+           return
+         }
+         const SM = iM + rM;
+         this.settle(MM, SM) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(MM, {
+ ... (3 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1626-L1628` → after: `L9758-L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9758-L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9758-L9760) · [Before (L1626-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1626-L1628)

```diff
-       static GetNearPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
+       getLocalHook() {
+         var MM, rM;
+         return null !== (MM = null === (rM = this.localHook) || void 0 === rM ? void 0 : rM.hookId) && void 0 !== MM ? MM : null
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1630-L1632` → after: `L9762-L9768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9762-L9768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9762-L9768) · [Before (L1630-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1630-L1632)

```diff
-       static GetFarPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
+       afterRender() {
+         if (0 === this.pending.size) return;
+         const MM = this.deps.now();
+         for (const [rM, {
+             untilMs: iM,
+             biteAtMs: OM
+           }] of this.pending)(this.settle(rM, OM) || MM > iM) && this.pending.delete(rM)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1634-L1636` → after: `L9770-L9784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9770-L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9770-L9784) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1634-L1636)

```diff
-       static GetLeftPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
+       dispose() {
+         this.pending.clear(), this.localHook = null
+       }
+       settle(MM, rM) {
+         const iM = this.deps.getLineOwner(MM);
+         if (null === iM) return !1;
+         if (!this.deps.isLocalPlayer(iM)) return !0;
+         if (this.localHook = {
+             hookId: MM,
+             biteAtMs: rM
+           }, !this.deps.isHushWaiting()) {
+           const [rM, iM] = this.deps.getHookPosition(MM);
+           this.deps.onCastLanded(rM, iM)
+         }
+         return this.deps.onLocalHookSettled(), !0
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1638-L1640` → after: `L9786-L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9786-L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9786-L9813) · [Before (L1638-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1638-L1640)

```diff
-       static GetRightPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
+     }
+     var HP = iM(4577);
+     const hP = {
+         0: [15],
+         1: [40, 60, 40],
+         2: [40, 60, 40, 60, 60],
+         3: [30, 50, 30, 50, 90]
+       },
+       JP = {
+         1: {
+           count: 24,
+           rise: 2.5,
+           colour: [79, 237, 237]
+         },
+         2: {
+           count: 40,
+ ... (12 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1642-L1644` → after: `L9815-L9823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9815-L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9815-L9823) · [Before (L1642-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1642-L1644)

```diff
-       static GetTopPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
+       receiveTell(MM) {
+         let {
+           biteTellTier: rM
+         } = MM;
+         this.tell = {
+           tier: rM,
+           atMs: this.deps.now(),
+           burst: !1
+         }, this.burstAtHook()
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1646-L1648` → after: `L9825-L9826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9825-L9826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9825-L9826) · [Before (L1646-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1646-L1648)

```diff
-       static GetBottomPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
+       onLocalHookSettled() {
+         null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1650-L1651` → after: `L9828-L9832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9828-L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9828-L9832) · [Before (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1650-L1651)

```diff
-       static GetPlanesToRef(QQ, WQ) {
-         qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
+       onLocalWaitEnded(MM) {
+         const rM = this.tell;
+         if (this.tell = null, !MM) return;
+         const iM = null !== rM && this.deps.now() - rM.atMs <= 3e3 ? rM.tier : 0;
+         this.deps.vibrate(hP[iM])
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1653-L1656` → after: `L9834-L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9834-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9834-L9879) · [Before (L1653-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1653-L1656)

```diff
-       static IsPointInFrustum(QQ, WQ) {
-         for (let XQ = 0; XQ < 6; XQ++)
-           if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
-         return !0
+       burstAtHook() {
+         const MM = this.tell,
+           rM = this.deps.getLocalHookPosition();
+         null === MM || MM.burst || null === rM || (MM.burst = !0, this.deps.playParticles(function(MM, rM) {
+           let [iM, OM, SM] = rM;
+           const {
+             count: jM,
+             rise: aM,
+             colour: PM
+           } = JP[MM], [nM, QM, zM] = PM;
+           return {
+             texture: "glint",
+             pos1: [iM - .3, OM, SM - .3],
+             pos2: [iM + .3, OM + .2, SM + .3],
+             dir1: [-.6, aM, -.6],
+             dir2: [.6, 1.4 * aM, .6],
+ ... (30 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1659-L1664` → after: `L9882-L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9882-L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9882-L9934) · [Before (L1659-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1659-L1664)

```diff
-   },
-   38047: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => qQ
-     });
-     var wQ = XQ(37370);
+     var yP = iM(1258),
+       lP = iM(2045),
+       EP = iM(30);
+ 
+     function UP(MM, rM) {
+       return [{
+         timeFraction: 0,
+         minColor: [255 * MM[0], 255 * MM[1], 255 * MM[2], 1],
+         maxColor: [255 * rM[0], 255 * rM[1], 255 * rM[2], 1]
+       }, {
+         timeFraction: 1,
+         minColor: [0, 0, 0, 1]
+       }]
+     }
+     const GP = [0, 0, 0],
+       CP = {
+ ... (37 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1666-L1667` → after: `L9936-L9937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9936-L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9936-L9937) · [Before (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1666-L1667)

```diff
-       constructor(QQ, WQ, XQ, qQ) {
-         this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
+       constructor() {
+         this.drops = new Map
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1669-L1670` → after: `L9939-L9956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9939-L9956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9939-L9956) · [Before (L1669-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1669-L1670)

```diff
-       awQ() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       GL(MM, rM) {
+         if ("overflowFlash" === rM.kind) {
+           const [iM, OM, SM] = rM.position, jM = MM.createParticles(tP, {
+             pos: [iM, OM, SM],
+             half: wP
+           });
+           return jM.emit(18), void jM.stop()
+         }
+         this.drops.has(rM.itemId) || this.drops.set(rM.itemId, {
+           owner: rM.owner,
+           cosmetic: rM.cosmetic,
+           pickupDelayCleared: !1,
+           seen: !1,
+           markedAt: performance.now(),
+           lastMovingAt: 0,
+           lastPosition: [0, 0, 0],
+ ... (2 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1672-L1673` → after: `L9958-L9978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9958-L9978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9958-L9978) · [Before (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1672-L1673)

```diff
-       clone() {
-         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
+       bL(MM) {
+         if (0 === this.drops.size) return;
+         const rM = performance.now(),
+           iM = MM.getCameraPosition();
+         let OM = 0;
+         for (const jM of this.drops.values()) null !== jM.particles && OM++;
+         for (const [jM, aM] of this.drops) {
+           const PM = MM.getPositionView(jM);
+           if (null === PM) {
+             var SM;
+             if (aM.seen || rM - aM.markedAt > 5e3) null !== aM.particles && OM--, null === (SM = aM.particles) || void 0 === SM || SM.stop(), this.drops.delete(jM);
+             continue
+           }
+           aM.cosmetic || !MM.isLocalPlayer(aM.owner) || aM.pickupDelayCleared || (MM.clearPickupDelay(jM), aM.pickupDelayCleared = !0);
+           const nM = aM.lastPosition,
+             QM = aM.seen && (PM[0] - nM[0]) ** 2 + (PM[1] - nM[1]) ** 2 + (PM[2] - nM[2]) ** 2 > 4e-4,
+ ... (5 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1675-L1676` → after: `L9980-L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9980-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9980-L9985) · [Before (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1675-L1676)

```diff
-       getClassName() {
-         return "Plane"
+       dispose() {
+         for (const rM of this.drops.values()) {
+           var MM;
+           null === (MM = rM.particles) || void 0 === MM || MM.stop()
+         }
+         this.drops.clear()
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1678-L1680` → after: `L9987-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9987-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9987-L9992) · [Before (L1678-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1678-L1680)

```diff
-       getHashCode() {
-         let QQ = this.normal.getHashCode();
-         return QQ = 397 * QQ ^ this.d, QQ
+     }
+     var uP = iM(181);
+     const RP = uP.f.jy * uP.f.playerEyeToHeightRatio;
+     class pP {
+       constructor(MM) {
+         this.host = MM, this.lava = [], this.loop = null, this.nextUpdateAt = 0
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1682-L1716` → after: `L9994-L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9994-L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9994-L9995) · [Before (L1682-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1682-L1716)

```diff
-       normalize() {
-         const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let WQ = 0;
-         return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
-       }
-       transform(QQ) {
-         const WQ = qQ._TmpMatrix;
-         QQ.invertToRef(WQ);
-         const XQ = WQ.m,
-           wQ = this.normal.x,
-           TQ = this.normal.y,
-           zQ = this.normal.z,
-           sQ = this.d,
-           FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
-           PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
-           gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
- ... (19 more removed lines; see GitHub link above)
+       GL(MM) {
+         this.lava = MM, this.nextUpdateAt = 0
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1718-L1719` → after: `L9997-L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9997-L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L9997-L10006) · [Before (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1718-L1719)

```diff
-       isFrontFacingTo(QQ, WQ) {
-         return wQ.s.Dot(this.normal, QQ) <= WQ
+       bL() {
+         var MM;
+         const rM = this.host.now();
+         if (rM < this.nextUpdateAt) return;
+         this.nextUpdateAt = rM + 250;
+         const iM = this.host.playerPosition(),
+           OM = iM && this.findNearest([iM[0], iM[1] + RP, iM[2]]);
+         if (!OM || OM.distance >= 40) return void this.stop();
+         const SM = .5 * Math.min(1, (40 - OM.distance) / 8);
+         this.loop ? this.loop.setRelativeVolume(SM) : this.loop = this.host.play("lavaFlow", SM, OM.position, 40 + RP, 9, !0), null === (MM = this.loop) || void 0 === MM || MM.setPosition(OM.position)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1721-L1722` → after: `L10008-L10009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10008-L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10008-L10009) · [Before (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1721-L1722)

```diff
-       signedDistanceTo(QQ) {
-         return wQ.s.Dot(QQ, this.normal) + this.d
+       dispose() {
+         this.stop(), this.lava = []
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1724-L1725` → after: `L10011-L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10011-L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10011-L10013) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1724-L1725)

```diff
-       static FromArray(QQ) {
-         return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
+       stop() {
+         var MM;
+         null === (MM = this.loop) || void 0 === MM || MM.stop(), this.loop = null
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1727-L1729` → after: `L10015-L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10015-L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10015-L10028) · [Before (L1727-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1727-L1729)

```diff
-       static FromPoints(QQ, WQ, XQ) {
-         const wQ = new qQ(0, 0, 0, 0);
-         return wQ.copyFromPoints(QQ, WQ, XQ), wQ
+       findNearest(MM) {
+         let rM = -1,
+           iM = 1 / 0;
+         for (let OM = 0; OM < this.lava.length; OM += 3) {
+           const SM = this.lava[OM] - MM[0],
+             jM = this.lava[OM + 1] - MM[1],
+             aM = this.lava[OM + 2] - MM[2],
+             PM = SM * SM + jM * jM + aM * aM;
+           PM < iM && (iM = PM, rM = OM)
+         }
+         return rM < 0 ? null : {
+           position: [this.lava[rM], this.lava[rM + 1], this.lava[rM + 2]],
+           distance: Math.sqrt(iM)
+         }
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1731-L1733` → after: `L10030-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10030-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10030-L10042) · [Before (L1731-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1731-L1733)

```diff
-       static FromPositionAndNormal(QQ, WQ) {
-         const XQ = new qQ(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
+     }
+     var WP = iM(2022),
+       sP = iM(39676);
+     const DP = {
+       "Grey Portal": "Gray"
+     };
+     for (const AP of LM.Ec) DP[`${AP} Portal`] = AP;
+     const kP = Object.keys(DP),
+       ZP = Object.fromEntries(kP.map((MM => [MM, (0, LM.X)(LM.L[`${(0,LM.me)(DP[MM])}Team`])])));
+     Object.fromEntries(kP.map((MM => [MM, LM.L[`${(0,LM.me)(DP[MM])}UiText`]])));
+     class oP {
+       constructor(MM, rM) {
+         this.presentation = MM, this.portal = rM, this.unlocked = void 0
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1735-L1736` → after: `L10044-L10081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10044-L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10044-L10081) · [Before (L1735-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1735-L1736)

```diff
-       static FromPositionAndNormalToRef(QQ, WQ, XQ) {
-         return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
+       GL(MM) {
+         const rM = !1 === this.unlocked && MM;
+         this.unlocked = MM, this.bL();
+         const {
+           min: iM,
+           max: OM,
+           unlockedBlock: SM
+         } = this.portal;
+         if (rM && this.presentation.hasChunk(...iM)) {
+           const [MM, rM, jM] = ZP[SM];
+           this.presentation.playParticles({
+             pos1: [...iM],
+             pos2: OM.map((MM => MM + 1)),
+             dir1: [-1, 0, -1],
+             dir2: [1, 1, 1],
+             texture: "glint",
+ ... (22 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1738-L1740` → after: `L10083-L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10083-L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10083-L10092) · [Before (L1738-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1738-L1740)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
-         const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
-         return wQ.s.Dot(XQ, WQ) + qQ
+       bL() {
+         var MM;
+         const rM = this.unlocked ? this.portal.unlockedBlock : null !== (MM = this.portal.lockedBlock) && void 0 !== MM ? MM : "Light Gray Portal",
+           {
+             min: iM,
+             max: OM
+           } = this.portal;
+         for (let SM = iM[0]; SM <= OM[0]; SM++)
+           for (let MM = iM[1]; MM <= OM[1]; MM++)
+             for (let jM = iM[2]; jM <= OM[2]; jM++) this.presentation.hasChunk(SM, MM, jM) && this.presentation.sE(SM, MM, jM) !== rM && this.presentation.cW(SM, MM, jM, rM)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1743` → after: `L10095-L10581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10095-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10095-L10581) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1743)

```diff
-     qQ._TmpMatrix = wQ.e.Identity()
+     var fP = iM(39565);
+     iM(39552);
+     const YP = {
+         farming_1: {
+           raises: MM => "NPC" === MM.type && "chef" === MM.variation,
+           rise: .4
+         },
+         fishing_1: {
+           raises: MM => "Draugr Warper" === MM.type,
+           rise: .4
+         }
+       },
+       NP = (MM, rM, iM, SM) => {
+         let {
+           localPlayerId: jM
+         } = SM;
+ ... (471 more added lines; see GitHub link above)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1745-L1753` → after: `L10583-L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10583-L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10583-L10586) · [Before (L1745-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1745-L1753)

```diff
-   37367: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       Matrix: () => wQ.e,
-       Quaternion: () => wQ.h,
-       RegisterMathVector: () => wQ.l,
-       TmpVectors: () => wQ.m,
-       Vector2: () => wQ.q,
-       vj: () => wQ.s,
-       Vector4: () => wQ.w
+   39532: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       g: () => SM
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1755-L1756` → after: `L10588-L10602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10588-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10588-L10602) · [Before (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1755-L1756)

```diff
-     var wQ = XQ(37370);
-     (0, wQ.l)()
+     var OM = iM(332);
+     const SM = (0, OM.wb)([0, 0, -1]),
+       jM = [{
+         name: "S",
+         bearing: (0, OM.wb)([0, 0, 1])
+       }, {
+         name: "E",
+         bearing: (0, OM.wb)([-1, 0, 0])
+       }, {
+         name: "N",
+         bearing: SM
+       }, {
+         name: "W",
+         bearing: (0, OM.wb)([1, 0, 0])
+       }]
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1758` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10604) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1758)

```diff
-   38377: (QQ, WQ, XQ) => {
+   39526: (MM, rM, iM) => {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1760` → after: `L10606-L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10606-L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10606-L10607) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1760)

```diff
-       e: () => wQ
+       c: () => SM,
+       d: () => jM
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1762-L1767` → after: `L10609-L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10609-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10609-L10619) · [Before (L1762-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1762-L1767)

```diff
-     class wQ {
-       constructor(QQ, WQ, XQ, wQ) {
-         this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
-       }
-       toGlobal(QQ, WQ) {
-         return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
+     var OM = iM(39532);
+ 
+     function SM(MM, rM, iM) {
+       return [100 * (iM.mapMaxX - MM) / (iM.mapMaxX - iM.mapMinX), 100 * (rM - iM.mapMinZ) / (iM.mapMaxZ - iM.mapMinZ)]
+     }
+ 
+     function jM(MM, rM, iM, jM) {
+       const [aM, PM] = SM(MM, rM, jM), nM = OM.g - iM;
+       return {
+         rotation: nM,
+         transform: `rotate(${nM}rad) translate(-${aM}%, -${PM}%)`
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1769-L1770` → after: `L10621-L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10621-L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10621-L10653) · [Before (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1769-L1770)

```diff
-       toGlobalToRef(QQ, WQ, XQ) {
-         return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
+     }
+   },
+   39571: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       f: () => aM
+     });
+     var OM = iM(4586);
+     const SM = [{
+       lobes: [3, 4],
+       amount: [.04, .055]
+     }, {
+       lobes: [5, 6, 7],
+       amount: [.025, .035]
+     }];
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1772-L1773` → after: `L10655-L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10655-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10655-L10677) · [Before (L1772-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1772-L1773)

```diff
-       clone() {
-         return new wQ(this.x, this.y, this.width, this.height)
+     }
+ 
+     function aM(MM) {
+       let {
+         radius: rM,
+         squareness: iM,
+         wobbles: OM,
+         samples: SM
+       } = MM;
+       const jM = [];
+       for (let aM = 0; aM < SM; aM++) {
+         const MM = 2 * Math.PI * aM / SM,
+           PM = Math.cos(MM),
+           nM = Math.sin(MM),
+           QM = rM * (Math.abs(PM) ** iM + Math.abs(nM) ** iM) ** (-1 / iM) * OM.reduce(((rM, iM) => {
+             let {
+ ... (7 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1777-L1783` → after: `L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10682) · [Before (L1777-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1777-L1783)

```diff
-   38191: (QQ, WQ, XQ) => {
-     function wQ() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const WQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
-       }))
-     }
+   37305: (MM, rM, iM) => {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1785-L1786` → after: `L10684-L10730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L10684-L10730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/237.js#L10684-L10730) · [Before (L1785-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/237.js#L1785-L1786)

```diff
-       d: () => wQ
-     })
+       b: () => SM,
+       f: () => OM
+     });
+     const OM = "skyblockSkills",
+       SM = "skills_test_gym"
+   },
+   39588: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/combat_1.72ac23641446e4f80923.png"
+   },
+   39596: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
+   },
+   39605: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
+   },
+   39614: (MM, rM, iM) => {
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L2)

```diff
- export const ids = [238, 245, 248];
+ export const ids = [238];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L7)

```diff
-   40515: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ,
-       g: () => sQ
+   37308: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => bM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L9-L15` → after: `L8-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L29) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L9-L15)

```diff
-     var wQ = XQ(38956),
-       qQ = XQ(40286),
-       TQ = XQ(40487),
-       zQ = {};
-     class sQ {
-       constructor(QQ) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1608),
+       aM = iM(1108),
+       PM = iM(821),
+       nM = iM(1188),
+       QM = iM(1520),
+       zM = iM(1591),
+       LM = iM(3957),
+       mM = iM(1398),
+       HM = iM(3875),
+       hM = iM(2813),
+       JM = iM(1303);
+     const dM = 2;
+ 
+     function yM(MM) {
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L17-L19` → after: `L31-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L31-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L31-L109) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L17-L19)

```diff
-       add(QQ) {
-         const WQ = QQ.getSimpleName();
-         this.attached[WQ] ? wQ.b.Warn("camera input of type " + WQ + " already exists on camera") : (this.attached[WQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(t … [truncated]
+     }
+ 
+     function lM(MM) {
+       let {
+         game: rM,
+         disabled: iM,
+         showPlaceholder: OM
+       } = MM;
+       return null !== rM ? (0, JM.jsx)(HM.h, {
+         source: yM(rM),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: iM,
+         entrySource: "customGamePlace"
+       }) : OM ? (0, JM.jsx)(HM.e, {
+         gameWidth: "100%",
+ ... (63 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L21-L24` → after: `L111-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L111-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L111-L152) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L21-L24)

```diff
-       remove(QQ) {
-         for (const WQ in this.attached) {
-           const XQ = this.attached[WQ];
-           if (XQ === QQ) return XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], void this.rebuildInputCheck()
+       return (0, JM.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, JM.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, JM.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, JM.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [iM(0), iM(2)]
+             }), iM(1)]
+           }), iM(4)]
+         }), (0, JM.jsxs)("div", {
+           className: "CustomGamePlaceRow",
+           children: [iM(3), iM(5)]
+         })]
+       })
+ ... (26 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L27-L83` → after: `L185-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L185-L190) · [Before (L27-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L27-L83)

```diff
-       removeByType(QQ) {
-         for (const WQ in this.attached) {
-           const XQ = this.attached[WQ];
-           XQ.getClassName() === QQ && (XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], this.rebuildInputCheck())
-         }
-       }
-       _addCheckInputs(QQ) {
-         const WQ = this.checkInputs;
-         return () => {
-           WQ(), QQ()
-         }
-       }
-       attachInput(QQ) {
-         this.attachedToElement && QQ.attachControl(this.noPreventDefault)
-       }
-       attachElement() {
- ... (41 more removed lines; see GitHub link above)
+       return (0, JM.jsxs)("div", {
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, JM.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${HM}/${hM.largePicture}.png)`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L85-L187` → after: `L192-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L192-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L192-L199) · [Before (L85-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L85-L187)

```diff
-         } else
-           for (const XQ in this.attached) {
-             const WQ = zQ[this.attached[XQ].getClassName()];
-             if (WQ) {
-               const wQ = qQ.b.Parse((() => new WQ), QQ, null);
-               this.remove(this.attached[XQ]), this.add(wQ)
-             }
-           }
-       }
-     }
-   },
-   40517: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => wQ.e
-     });
-     var wQ = XQ(40519);
- ... (87 more removed lines; see GitHub link above)
+         }), (0, JM.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: rM(hM.title)
+         }), (0, JM.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, JM.jsx)(QM.c, {
+             onClick: () => (0, zM.navigatePreserveSearch)("/"),
+             children: rM("homePage:backToGames")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L189-L838` → after: `L201-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L201-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/238.js#L201-L214) · [Before (L189-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/238.js#L189-L838)

```diff
-         })(), QQ
-       })(),
-       JQ = !1;
- 
-     function rQ() {
-       JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
-     }
-   },
-   37539: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       Color3: () => wQ.b,
-       d: () => wQ.d
-     });
-     var wQ = XQ(37546);
-     (0, wQ.h)()
-   },
- ... (634 more removed lines; see GitHub link above)
+         }), !OM && (0, JM.jsx)(UM, {
+           categories: lM
+         }), OM && (0, JM.jsx)("div", {
+           className: SM()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: lM.map((MM => (0, JM.jsx)(EM, {
+             category: MM.category,
+             title: MM.title,
+             tintColour: MM.tintColour,
+             layout: MM.layout,
+             games: MM.games
+           }, MM.id)))
+         })]
+       })
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [239, 245];
+ export const ids = [239, 601];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L6)

```diff
-   42083: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
+   43954: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CharacterCustomisationUI: () => jr
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L8-L10` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L18) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L10)

```diff
-     var wQ = XQ(42014),
-       qQ = XQ(40253);
-     let TQ = !1;
+     var OM = iM(44),
+       SM = iM(2798),
+       jM = iM(1142),
+       aM = iM(1116),
+       PM = iM.n(aM),
+       nM = iM(1242),
+       QM = iM(1188),
+       zM = iM(2362),
+       LM = iM(1645),
+       mM = iM(2762);
+     const HM = nM.u.filter((MM => !LM.i.includes(MM)));
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L12-L30` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L20-L21) · [Before (L12-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L12-L30)

```diff
-     function zQ() {
-       TQ || (TQ = !0, qQ.c.prototype._sphericalPolynomialTargetSize = 0, qQ.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(qQ.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wQ.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = QQ, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
-         },
-         set: function(QQ) {
-           this._texture && (this._texture._sphericalPolynomial = QQ)
-         },
- ... (3 more removed lines; see GitHub link above)
+     function hM(MM, rM) {
+       return HM.includes(MM) && "string" === typeof rM && (0, mM.f)(MM, rM)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L32-L82` → after: `L23-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L23-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L23-L28) · [Before (L32-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L32-L82)

```diff
-   },
-   37539: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       Color3: () => wQ.b,
-       d: () => wQ.d
-     });
-     var wQ = XQ(37546);
-     (0, wQ.h)()
-   },
-   38041: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => qQ
-     });
-     var wQ = XQ(38047);
-     class qQ {
-       static GetPlanes(QQ) {
- ... (35 more removed lines; see GitHub link above)
+ 
+     function JM(MM) {
+       const rM = {};
+       for (const iM of HM) {
+         const OM = MM[iM];
+         void 0 !== OM && hM(iM, OM) && (rM[iM] = OM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L85-L167` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L32-L34) · [Before (L85-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L85-L167)

```diff
-   },
-   38047: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => qQ
-     });
-     var wQ = XQ(37370);
-     class qQ {
-       constructor(QQ, WQ, XQ, qQ) {
-         this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
-       }
-       awQ() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (67 more removed lines; see GitHub link above)
+ 
+     function dM(MM) {
+       return 0 === Object.keys(MM).length
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L169-L200` → after: `L36-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L36-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L36-L41) · [Before (L169-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L169-L200)

```diff
-     qQ._TmpMatrix = wQ.e.Identity()
-   },
-   37367: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       Matrix: () => wQ.e,
-       Quaternion: () => wQ.h,
-       RegisterMathVector: () => wQ.l,
-       TmpVectors: () => wQ.m,
-       Vector2: () => wQ.q,
-       vj: () => wQ.s,
-       Vector4: () => wQ.w
-     });
-     var wQ = XQ(37370);
-     (0, wQ.l)()
-   },
-   38377: (QQ, WQ, XQ) => {
- ... (16 more removed lines; see GitHub link above)
+ 
+     function yM(MM, rM) {
+       return Object.entries(MM).every((MM => {
+         let [iM, OM] = MM;
+         return rM[iM] === OM
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L202-L211` → after: `L43-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L43-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L43-L52) · [Before (L202-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L202-L211)

```diff
-   },
-   42014: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => PQ
-     });
-     var wQ = XQ(37370),
-       qQ = XQ(37404),
-       TQ = XQ(40250),
-       zQ = XQ(37374),
-       sQ = XQ(37546);
+     var lM = iM(2367),
+       EM = iM(3479),
+       UM = iM(2084),
+       GM = iM(1520),
+       CM = iM(2397),
+       eM = iM(19),
+       bM = iM(2919),
+       wM = iM(1573),
+       tM = iM(1144),
+       gM = iM(1963);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L213-L214` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L54-L55) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L213-L214)

```diff
-       constructor(QQ, WQ, XQ, wQ) {
-         this.name = QQ, this.worldAxisForNormal = WQ, this.worldAxisForFileX = XQ, this.worldAxisForFileY = wQ
+       constructor() {
+         this.slots = new Map, this.before = new Map, this.accountId = null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L216-L219` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L57-L58) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L216-L219)

```diff
-     }
-     class PQ {
-       static _NearestPow2Floor(QQ) {
-         return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
+       moveTo(MM) {
+         null !== MM && MM !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = MM)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L221-L260` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L60-L61) · [Before (L221-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L221-L260)

```diff
-       static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
-         if (!QQ.isCube) return null;
-         QQ.sE()?.Uj().flushFramebuffer();
-         const WQ = QQ.getSize().width,
-           XQ = QQ._sphericalPolynomialTargetSize,
-           wQ = XQ > 0 ? this._NearestPow2Floor(XQ) : 0,
-           qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
-           TQ = wQ > 0 && wQ < WQ && qQ,
-           zQ = TQ ? Math.max(0, Math.round(Math.log2(WQ / wQ))) : 0,
-           sQ = TQ ? Math.max(1, Math.floor(WQ / Math.pow(2, zQ))) : WQ,
-           FQ = QQ.readPixels(0, zQ, void 0, !1),
-           PQ = QQ.readPixels(1, zQ, void 0, !1);
-         let gQ, JQ;
-         QQ.isRenderTarget ? (gQ = QQ.readPixels(3, zQ, void 0, !1), JQ = QQ.readPixels(2, zQ, void 0, !1)) : (gQ = QQ.readPixels(2, zQ, void 0, !1), JQ = QQ.readPixels(3, zQ, void 0, !1));
-         const rQ = QQ.readPixels(4, zQ, void 0, !1),
-           IQ = QQ.readPixels(5, zQ, void 0, !1),
- ... (24 more removed lines; see GitHub link above)
+       isFor(MM) {
+         return null === this.accountId || this.accountId === MM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L262-L263` → after: `L63-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L63-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L63-L68) · [Before (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L262-L263)

```diff
-       static _AreaElement(QQ, WQ) {
-         return Math.atan2(QQ * WQ, Math.sqrt(QQ * QQ + WQ * WQ + 1))
+       overlay(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+         return MM.map(((MM, iM) => {
+           var OM, SM;
+           return null !== (OM = null !== (SM = this.slots.get(iM)) && void 0 !== SM ? SM : rM.get(iM)) && void 0 !== OM ? OM : MM
+         }))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L265-L282` → after: `L70-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L70-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L70-L105) · [Before (L265-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L265-L282)

```diff
-       static _DownsampleFace(QQ, WQ, XQ, wQ) {
-         const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
-           TQ = XQ * XQ * wQ,
-           zQ = new Float32Array(TQ),
-           sQ = WQ / XQ,
-           FQ = 1 / (sQ * sQ);
-         for (let gQ = 0; gQ < XQ; gQ++) {
-           const QQ = Math.floor(gQ * sQ),
-             TQ = Math.floor((gQ + 1) * sQ);
-           for (let PQ = 0; PQ < XQ; PQ++) {
-             const JQ = Math.floor(PQ * sQ),
-               rQ = Math.floor((PQ + 1) * sQ),
-               IQ = (gQ * XQ + PQ) * wQ;
-             for (let XQ = 0; XQ < wQ; XQ++) {
-               let sQ = 0;
-               for (let zQ = QQ; zQ < TQ; zQ++)
- ... (2 more removed lines; see GitHub link above)
+     }
+     class RM extends bM.b {
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new uM;
+         super("saved outfits", (async rM => {
+           const iM = MM.isFor(rM.whamm),
+             OM = new Map(MM.slots),
+             SM = await wM.c.getSavedOutfits(rM);
+           return iM ? MM.overlay(SM, OM) : SM
+         })), this.unsaved = MM, this.started = !1, this.sending = !1
+       }
+       ensureLoaded() {
+         if (this.started) {
+           if (!this.getState().failed) return
+         } else this.started = !0, this.watchAccount();
+         this.refresh()
+ ... (20 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L284-L316` → after: `L107-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L107-L110) · [Before (L284-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L284-L316)

```diff
-           }
-         }
-         if (QQ instanceof Float32Array) return zQ;
-         const PQ = new(0, QQ.constructor)(TQ);
-         for (let gQ = 0; gQ < TQ; gQ++) PQ[gQ] = zQ[gQ] + .5 | 0;
-         return PQ
-       }
-       static ConvertCubeMapToSphericalPolynomial(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const XQ = WQ > 0 ? this._NearestPow2Floor(WQ) : 0;
-         if (XQ > 0 && QQ.size > XQ) {
-           const WQ = 5 === QQ.format ? 4 : 3,
-             wQ = ["right", "left", "up", "down", "front", "back"],
-             qQ = {};
-           for (const TQ of wQ) qQ[TQ] = this._DownsampleFace(QQ[TQ], QQ.size, XQ, WQ);
-           QQ = {
- ... (17 more removed lines; see GitHub link above)
+             const {
+               accountId: rM,
+               data: SM
+             } = this.getState();
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L318-L342` → after: `L112-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L112-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L112-L249) · [Before (L318-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L318-L342)

```diff
-             for (let gQ = 0; gQ < QQ.size; gQ++) {
-               const rQ = WQ.worldAxisForFileX.scale(BQ).add(WQ.worldAxisForFileY.scale(IQ)).add(WQ.worldAxisForNormal);
-               rQ.normalize();
-               const yQ = this._AreaElement(BQ - JQ, IQ - JQ) - this._AreaElement(BQ - JQ, IQ + JQ) - this._AreaElement(BQ + JQ, IQ - JQ) + this._AreaElement(BQ + JQ, IQ + JQ);
-               let VQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 0],
-                 DQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 1],
-                 pQ = XQ[TQ * QQ.size * jQ + gQ * jQ + 2];
-               isNaN(VQ) && (VQ = 0), isNaN(DQ) && (DQ = 0), isNaN(pQ) && (pQ = 0), 0 === QQ.type && (VQ /= 255, DQ /= 255, pQ /= 255), QQ.gammaSpace && (VQ = Math.pow((0, qQ.Clamp)(VQ), zQ.h), DQ = Math.pow((0, qQ.Clamp)(DQ), zQ.h), pQ = Math.pow((0, qQ.Clamp)(pQ), zQ.h));
-               const GQ = this.MAX_HDRI_VALUE;
-               if (this.PRESERVE_CLAMPED_COLORS) {
-                 const QQ = Math.max(VQ, DQ, pQ);
-                 if (QQ > GQ) {
-                   const WQ = GQ / QQ;
-                   VQ *= WQ, DQ *= WQ, pQ *= WQ
-                 }
-               } else VQ = (0, qQ.Clamp)(VQ, 0, GQ), DQ = (0, qQ.Clamp)(DQ, 0, GQ), pQ = (0, qQ.Clamp)(pQ, 0, GQ);
- ... (9 more removed lines; see GitHub link above)
+             rM === MM.whamm && null !== jM || (jM = this.unsaved.overlay(await wM.c.getSavedOutfits(MM)), this.refresh()), await wM.c.setSavedOutfits(MM, jM), this.unsaved.isFor(MM.whamm) && jM.forEach(((MM, rM) => {
+               const OM = this.unsaved.slots.get(rM);
+               void 0 === OM || OM === iM.get(rM) ? this.unsaved.before.delete(rM) : this.unsaved.before.set(rM, MM)
+             }))
+           } catch (rM) {
+             if (console.error("Failed to save outfits", rM), this.getState().accountId === OM && [...this.unsaved.slots].every((MM => {
+                 let [rM, OM] = MM;
+                 return iM.get(rM) === OM
+               }))) {
+               const rM = [...iM.values()].every(dM);
+               gM.k.showMessage({
+                 translationKey: rM ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
+               });
+               const OM = new Map(this.unsaved.before);
+               this.unsaved.before.clear(), this.update((MM => MM.map(((MM, rM) => {
+                 var iM;
+ ... (122 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L344-L358` → after: `L251-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L251-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L251-L294) · [Before (L344-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L344-L358)

```diff
-     PQ._FileFaces = [new FQ("right", new wQ.s(1, 0, 0), new wQ.s(0, 0, -1), new wQ.s(0, -1, 0)), new FQ("left", new wQ.s(-1, 0, 0), new wQ.s(0, 0, 1), new wQ.s(0, -1, 0)), new FQ("up", new wQ.s(0, 1, 0), new wQ.s(1, 0, 0), new wQ.s(0, 0, 1)), new FQ("down", new wQ.s(0, -1, 0), ne … [truncated]
-   },
-   41791: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ.i,
-       f: () => wQ.r
-     });
-     var wQ = XQ(40307);
-     (0, wQ.w)()
-   },
-   38191: (QQ, WQ, XQ) => {
-     function wQ() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const WQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
+     var KM = iM(37322),
+       qM = iM(2754),
+       TM = iM(2760);
+ 
+     function VM(MM, rM, iM) {
+       return null !== MM && !(0, qM.i)(TM.c, rM, iM, MM.collected, MM.ownedPacks)
+     }
+ 
+     function cM(MM) {
+       let {
+         locked: rM,
+         children: iM
+       } = MM;
+       return rM ? (0, XM.jsx)(Mr, {
+         children: iM
+       }) : iM
+ ... (28 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L361-L407` → after: `L297-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L297-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L297-L330) · [Before (L361-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L361-L407)

```diff
-     XQ.d(WQ, {
-       d: () => wQ
-     })
-   },
-   42055: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(42041),
-       qQ = XQ(42062);
-     class TQ {
-       static ExpandRGBDTexture(QQ) {
-         const WQ = QQ._texture;
-         if (!WQ || !QQ.isRGBD) return;
-         const qQ = WQ.Uj(),
-           TQ = qQ.getCaps(),
- ... (31 more removed lines; see GitHub link above)
+ 
+     function Or(MM) {
+       var rM;
+       let {
+         pack: iM,
+         ownedPacks: OM,
+         showStoreLink: SM = !1,
+         children: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, QM.A)(), nM = DM.d[iM], zM = nM.purchasable && !OM.includes(iM) && DM.w.includes(iM), LM = ZM.k[iM];
+       return (0, XM.jsxs)("div", {
+         className: PM()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: zM
+         }),
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L409-L452` → after: `L332-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L332-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L332-L441) · [Before (L409-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L409-L452)

```diff
-   },
-   61523: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       AsyncLoop: () => wQ.c,
-       RegisterTools: () => wQ.f,
-       Tools: () => wQ.g,
-       className: () => wQ.k
-     });
-     var wQ = XQ(40357);
-     (0, wQ.f)()
-   },
-   42100: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => qQ
-     });
-     class wQ {
- ... (28 more removed lines; see GitHub link above)
+ 
+     function Sr(MM) {
+       let {
+         equippedEmoteIds: rM,
+         ownedPacks: iM,
+         canBuy: OM,
+         onUpdateLoadout: SM,
+         onEmoteSelected: jM,
+         onEquipPreviewSkin: aM
+       } = MM;
+       const {
+         t: LM
+       } = (0, QM.A)(), mM = new Set(rM), HM = new Map, hM = Object.keys(zM.e.emote).sort(((MM, rM) => {
+         var iM, OM, SM, jM;
+         return (null !== (iM = null === (OM = (0, zM.m)("emote", MM)) || void 0 === OM ? void 0 : OM.clientIdx) && void 0 !== iM ? iM : 0) - (null !== (SM = null === (jM = (0, zM.m)("emote", rM)) || void 0 === jM ? void 0 : jM.clientIdx) && void 0 !== SM ? SM : 0)
+       })).filter((MM => {
+ ... (94 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L454-L467` → after: `L443-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L443-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L443-L496) · [Before (L454-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L454-L467)

```diff
-     class qQ extends wQ {
-       constructor(QQ, WQ) {
-         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.DefaultOptions;
-         super([]), this._maxWorkers = QQ, this._createWorkerAsync = WQ, this._options = XQ
-       }
-       push(QQ) {
-         if (!this._executeOnIdleWorker(QQ))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const WQ = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(WQ), this._execute(WQ, QQ)
-           } else this._pendingActions.push(QQ)
+     const jr = (0, OM.memo)((function(MM) {
+       let {
+         selectedTab: rM
+       } = MM;
+       const iM = "characters" === rM ? "skin" : rM,
+         {
+           t: aM
+         } = (0, QM.A)(),
+         {
+           userContext: HM,
+           isUserContextUpdating: hM
+         } = (0, jM.b)(),
+         dM = (0, SM.b)(),
+         {
+           gameState: lM
+         } = (0, eM.m)(["gameState"]),
+ ... (38 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L469-L478` → after: `L498-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L498-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L498-L504) · [Before (L469-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L469-L478)

```diff
-       _execute(QQ, WQ) {
-         QQ.timeoutId && (clearTimeout(QQ.timeoutId), delete QQ.timeoutId), super._execute(QQ, ((XQ, wQ) => {
-           WQ(XQ, (() => {
-             wQ(), QQ.idle && (QQ.timeoutId = setTimeout((() => {
-               QQ.workerPromise.then((QQ => {
-                 QQ.terminate()
-               }));
-               const WQ = this._workerInfos.indexOf(QQ); - 1 !== WQ && this._workerInfos.splice(WQ, 1)
-             }), this._options.idleTimeElapsedBeforeRelease))
-           }))
+ 
+       function ar(MM) {
+         wM((rM => {
+           const iM = {
+             ...rM
+           };
+           return delete iM[MM], iM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L481-L484` → after: `L507-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L507-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L507-L868) · [Before (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L481-L484)

```diff
-     }
-     qQ.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
-     }
+ 
+       function Pr(MM, rM) {
+         let {
+           undoable: iM
+         } = rM;
+         Object.keys(bM).length > 0 && wM({});
+         const OM = Object.entries(MM).filter((MM => {
+           let [rM, iM] = MM;
+           return vM.current[rM] !== iM && !rr(rM, iM, nr) && !VM(Qr, rM, iM)
+         }));
+         iM ? OM.length > 0 && RM({
+           kind: "worn",
+           outfit: JM(vM.current)
+         }) : RM(null);
+         for (const [SM, jM] of OM) jr(SM, jM, !1);
+         OM.length > 0 && (0, KM.d)(HM, OM)
+ ... (346 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L486` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L870) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L486)

```diff
-   61554: (QQ, WQ, XQ) => {
+   43956: (MM, rM, iM) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L488-L613` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L872) · [Before (L488-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L488-L613)

```diff
-       AbstractThreeMfSerializer: () => Zs,
-       BVHExporter: () => az,
-       ContentTypeFileName: () => ys,
-       DefaultXmlSerializerFormatOptions: () => oz,
-       DefaultXmlSerializerNumberOptions: () => tz,
-       EXT_lights_area: () => Vq,
-       EXT_mesh_gpu_instancing: () => fw,
-       EXT_texture_avif: () => Tz,
-       EXT_texture_webp: () => Wz,
-       GLTF2Export: () => uw,
-       GLTFData: () => PQ,
-       GetXmlFieldMeta: () => uz,
-       GetXmlName: () => Lz,
-       IsQualifiedName: () => lz,
-       KHR_draco_mesh_compression: () => mw,
-       KHR_interactivity: () => gq,
- ... (110 more removed lines; see GitHub link above)
+       CharacterPreview: () => LM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L615-L635` → after: `L874-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L874-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L874-L967) · [Before (L615-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L615-L635)

```diff
-     var wQ = XQ(37367),
-       qQ = XQ(61523),
-       TQ = XQ(40551);
-     class zQ {
-       static OBJ(QQ, WQ, XQ, zQ) {
-         const sQ = [];
-         let FQ = 1,
-           PQ = 1;
-         WQ && (XQ || (XQ = "mat"), sQ.push("mtllib " + XQ + ".mtl"));
-         for (let gQ = 0; gQ < QQ.length; gQ++) {
-           const XQ = QQ[gQ],
-             JQ = XQ.name || `mesh${gQ}}`;
-           sQ.push(`o ${JQ}`);
-           let rQ = null;
-           if (zQ) {
-             const QQ = XQ.computeWorldMatrix(!0);
- ... (5 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(3047),
+       jM = iM(1242),
+       aM = iM(2762),
+       PM = iM(35051),
+       nM = iM(3997),
+       QM = iM(1303);
+     const zM = .6 * Math.PI,
+       LM = (0, OM.memo)((0, OM.forwardRef)((function(MM, rM) {
+         let {
+           onReady: iM,
+           onDrawn: LM,
+           owner: mM = "other",
+           framing: HM = "player",
+           forcedCosmetics: hM,
+           Ua: JM,
+ ... (78 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L637-L640` → after: `L969-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L969-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L969-L979) · [Before (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L637-L640)

```diff
-           const IQ = XQ.geometry;
-           if (!IQ) {
-             qQ.Tools.Warn("No geometry is present on the mesh");
-             continue
+         }), [hM, HM, WM]), (0, OM.useEffect)((() => {
+           const MM = nM.d.register(mM),
+             rM = PM.l.openCharacter(lM.current, HM);
+           GM.current = rM;
+           let iM = !0;
+           return rM.ready.then((() => {
+             iM && (wM(!0), tM.current())
+           })).catch((MM => {
+             console.error("Failed to set up the character preview", MM)
+           })), () => {
+             iM = !1, MM(), rM.resetCamera(), rM.close(), GM.current = null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L642-L650` → after: `L981-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L981-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L981-L989) · [Before (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L642-L650)

```diff
-           const jQ = IQ.getVerticesData("position"),
-             BQ = IQ.getVerticesData("normal"),
-             yQ = IQ.getVerticesData("uv"),
-             VQ = IQ.lwQ();
-           let DQ = 0,
-             pQ = 0;
-           if (!jQ || !VQ) {
-             qQ.Tools.Warn("There are no position vertices or indices on the mesh!");
-             continue
+         }), []), (0, OM.useEffect)((() => {
+           EM <= 0 || UM <= 0 || GM.current.resize(EM, UM)
+         }), [EM, UM]), (0, OM.useEffect)((() => {
+           if (!bM) return;
+           const MM = eM.current;
+           for (const rM of jM.u) {
+             const iM = null === hM || void 0 === hM ? void 0 : hM[rM],
+               OM = MM[rM];
+             iM && iM !== OM ? GM.current.setCosmetic(rM, iM) : !iM && OM && CM.current[rM] && GM.current.setCosmetic(rM, CM.current[rM])
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L652-L667` → after: `L991-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L991-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L991-L1020) · [Before (L652-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L652-L667)

```diff
-           const GQ = QQ[0].sE().useRightHandedSystem ? 1 : -1;
-           for (let QQ = 0; QQ < jQ.length; QQ += 3) sQ.push("v " + jQ[QQ] * GQ + " " + jQ[QQ + 1] + " " + jQ[QQ + 2]), DQ++;
-           if (null != BQ)
-             for (let QQ = 0; QQ < BQ.length; QQ += 3) sQ.push("vn " + BQ[QQ] * GQ + " " + BQ[QQ + 1] + " " + BQ[QQ + 2]);
-           if (null != yQ)
-             for (let QQ = 0; QQ < yQ.length; QQ += 2) sQ.push("vt " + yQ[QQ] + " " + yQ[QQ + 1]), pQ++;
-           const UQ = ["", "", ""],
-             bQ = (XQ.material || XQ.sE().defaultMaterial)._getEffectiveOrientation(XQ),
-             [vQ, dQ] = bQ === TQ.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
-           for (let QQ = 0; QQ < VQ.length; QQ += 3) {
-             const WQ = [String(VQ[QQ] + FQ), String(VQ[QQ + vQ] + FQ), String(VQ[QQ + dQ] + FQ)],
-               XQ = [String(VQ[QQ] + PQ), String(VQ[QQ + vQ] + PQ), String(VQ[QQ + dQ] + PQ)],
-               wQ = WQ,
-               qQ = null != yQ ? XQ : UQ,
-               TQ = null != BQ ? WQ : UQ;
-             sQ.push("f " + wQ[0] + "/" + qQ[0] + "/" + TQ[0] + " " + wQ[1] + "/" + qQ[1] + "/" + TQ[1] + " " + wQ[2] + "/" + qQ[2] + "/" + TQ[2])
+           eM.current = {
+             ...hM
+           }, pM.current = !0, WM()
+         }), [hM, bM, WM]), (0, OM.useEffect)((() => {
+           bM && GM.current.playEmote(null !== JM && void 0 !== JM ? JM : null)
+         }), [JM, dM, bM]), (0, OM.useEffect)((() => {
+           if (!bM || null === yM) return;
+           const MM = GM.current,
+             {
+               pitch: rM,
+               radius: iM
+             } = PM.d[HM];
+           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return MM.setOrbit({
+             yaw: yM + zM,
+             pitch: rM,
+             radius: iM
+ ... (14 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L669-L760` → after: `L1022-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L1022-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L1022-L1034) · [Before (L669-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L669-L760)

```diff
-           zQ && rQ && XQ.bakeTransformIntoVertices(rQ), FQ += DQ, PQ += pQ
-         }
-         return sQ.join("\n")
-       }
-       static MTL(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
-         const XQ = [],
-           wQ = QQ.material;
-         XQ.push("newmtl " + WQ), XQ.push("  Ns " + wQ.specularPower.toFixed(4)), XQ.push("  Ni 1.5000"), XQ.push("  d " + wQ.alpha.toFixed(4)), XQ.push("  Tr 0.0000"), XQ.push("  Tf 1.0000 1.0000 1.0000"), XQ.push("  illum 2"), XQ.push("  Ka " + wQ.ambientColor.r.toFixed(4) + " " … [truncated]
-         wQ.ambientTexture && XQ.push("  map_Ka " + wQ.ambientTexture.name), wQ.diffuseTexture && XQ.push("  map_Kd " + wQ.diffuseTexture.name), wQ.specularTexture && XQ.push("  map_Ks " + wQ.specularTexture.name), wQ.bumpTexture && XQ.push("  map_bump -imfchan z " + wQ.bumpTextur … [truncated]
-         return XQ.join("\n")
-       }
-     }
-     var sQ = 0,
-       FQ = XQ(41791);
-     class PQ {
- ... (76 more removed lines; see GitHub link above)
+         }), [bM, yM]), (0, QM.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: lM
+         })
+       })))
+   },
+   37322: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => aM
+     });
+     var OM = iM(2039),
+       SM = iM(1573);
+     const jM = new class {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L762-L14606` → after: `L1036-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L1036-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L1036-L1062) · [Before (L762-L14606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L762-L14606)

```diff
-         super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, thi … [truncated]
-       }
-     }
-     let eQ = (() => {
-       var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
-       let gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ = tQ.b,
-         GQ = [],
-         UQ = [],
-         bQ = [],
-         vQ = [],
-         dQ = [],
-         lQ = [],
-         hQ = [],
-         iQ = [],
-         cQ = [],
-         AQ = [],
- ... (13829 more removed lines; see GitHub link above)
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(MM, rM) {
+         MM !== this.userContext && this.sendHeld(), this.userContext = MM;
+         for (const [OM, SM] of rM) this.pending.set(OM, SM);
+         if (null !== this.timer) return;
+         const iM = this.lastSentAt + 1100 - Date.now();
+         iM <= 0 ? this.send(MM) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), iM), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
+       }
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L14609-L16098` → after: `L1065-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L1065-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/239.js#L1065-L1072) · [Before (L14609-L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/239.js#L14609-L16098)

```diff
-     class Ws {
-       constructor() {
-         this.count = 0, this._chunks = []
-       }
-       write() {
-         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
-         if (0 === WQ.length) return this;
-         const wQ = WQ.join("");
-         return this._chunks.push(wQ), this.count += wQ.length, this
-       }
-       toString() {
-         return this._chunks.join("")
-       }
-       clear() {
-         this._chunks = [], this.count = 0
-       }
- ... (1474 more removed lines; see GitHub link above)
+ 
+     function aM(MM, rM) {
+       for (const [iM, OM] of rM) MM.setPlayerCosmetics(iM, OM);
+       if (null === OM.gameBridge.latest("connectedGame").websocketUrl) jM.save(MM, rM);
+       else
+         for (const [iM, SM] of rM) OM.gameBridge.send("updateMyCosmetic", {
+           Ii: iM,
+           Ki: SM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L4)

```diff
-   37392: (QQ, WQ, XQ) => {
+   37353: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L6)

```diff
-       d: () => qQ
+       c: () => tM,
+       e: () => gM,
+       h: () => EM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L8-L21` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L10-L14) · [Before (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L8-L21)

```diff
-     var wQ = XQ(37399);
-     class qQ {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     qQ.Instances = [], qQ.OnEnginesDisposedObservable = new wQ.b, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
-   },
-   37387: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => wQ
+     var OM = iM(255),
+       SM = iM(83);
+     const jM = new(iM(37356).b)(new URL(iM.p + iM.u(3), iM.b), {
+       name: "blockIconWorker",
+       type: "module"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L23-L33` → after: `L16-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L16-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L16-L39) · [Before (L23-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L23-L33)

```diff
-     class wQ {
-       static SetMatrixPrecision(QQ) {
-         if (wQ.MatrixTrackPrecisionChange = !1, QQ && !wQ.MatrixUse64Bits && wQ.MatrixTrackedMatrices)
-           for (let WQ = 0; WQ < wQ.MatrixTrackedMatrices.length; ++WQ) {
-             const QQ = wQ.MatrixTrackedMatrices[WQ],
-               XQ = QQ._m;
-             QQ._m = new Array(16);
-             for (let WQ = 0; WQ < 16; ++WQ) QQ._m[WQ] = XQ[WQ]
-           }
-         wQ.MatrixUse64Bits = QQ, wQ.MatrixCurrentType = wQ.MatrixUse64Bits ? Array : Float32Array, wQ.MatrixTrackedMatrices = null
-       }
+     var aM = iM(1899),
+       PM = iM(2260);
+     const nM = 1e4,
+       QM = 3e4;
+     let zM = null,
+       LM = null,
+       mM = null,
+       HM = !1,
+       hM = 0;
+     const JM = new Map;
+     let dM = null;
+     const yM = new Map,
+       lM = new Map;
+ 
+     function EM(MM) {
+       const rM = new Promise(((rM, iM) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L49` → after: `L43-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L43-L46) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L49)

```diff
-       QQ.updateFlag = wQ._UpdateFlagSeed++
+       var rM, iM;
+       HM || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${MM}`), HM = !0, null === (rM = zM) || void 0 === rM || rM.terminate(), zM = null, LM = null, yM.clear(), lM.clear();
+       for (const OM of JM.values()) OM(null);
+       JM.clear(), null === (iM = dM) || void 0 === iM || iM()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L52-L88` → after: `L49-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L49-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L49-L81) · [Before (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L52-L88)

```diff
-     function TQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const qQ = QQ.awQ(),
-         TQ = WQ.awQ(),
-         zQ = qQ[0],
-         sQ = qQ[1],
-         FQ = qQ[2],
-         PQ = qQ[3],
-         gQ = qQ[4],
-         JQ = qQ[5],
-         rQ = qQ[6],
-         IQ = qQ[7],
-         jQ = qQ[8],
-         BQ = qQ[9],
-         yQ = qQ[10],
-         VQ = qQ[11],
- ... (21 more removed lines; see GitHub link above)
+     function GM() {
+       return mM ??= async function() {
+         if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
+         if ("page" === OM.e.ios_icon_worker_v1 && (0, SM.isWebKit)()) return;
+         try {
+           zM = await async function() {
+             return await jM.ready(), jM.start()
+           }()
+         } catch (PM) {
+           return void UM(`did not start (${String(PM)})`)
+         }
+         let MM = () => {};
+         const rM = new Promise((rM => {
+           MM = rM
+         }));
+         zM.onmessage = rM => {
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L91-L93` → after: `L84-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L84-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L84-L94) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L91-L93)

```diff
-     function zQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       TQ(QQ, WQ, XQ.awQ(), wQ), qQ(XQ)
+     function CM() {
+       if (null !== dM || 0 === JM.size) return;
+       const MM = new Promise((MM => {
+           dM = MM
+         })),
+         rM = `did not answer in ${nM/1e3} s`;
+       (0, aM.n)(MM, nM, rM).then((() => {
+         dM = null, CM()
+       }), (() => {
+         dM = null, UM(rM)
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L97-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L98-L99) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L97-L99)

```diff
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wQ = QQ.awQ();
-       WQ[XQ] = wQ[0], WQ[XQ + 1] = wQ[1], WQ[XQ + 2] = wQ[2], WQ[XQ + 3] = wQ[3], WQ[XQ + 4] = wQ[4], WQ[XQ + 5] = wQ[5], WQ[XQ + 6] = wQ[6], WQ[XQ + 7] = wQ[7], WQ[XQ + 8] = wQ[8], WQ[XQ + 9] = wQ[9], WQ[XQ + 10] = wQ[10], WQ[XQ + 11] = wQ[11], WQ[XQ + 12] = wQ[12], WQ[XQ + 13]  … [truncated]
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       MM.postMessage(rM, iM)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L102-L104` → after: `L102-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L102-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L102-L127) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L102-L104)

```diff
-     function FQ(QQ, WQ) {
-       const XQ = PQ(QQ, WQ.awQ());
-       return XQ && qQ(WQ), XQ
+     function bM(MM, rM, iM, OM) {
+       let SM = rM.get(iM);
+       return void 0 === SM && (SM = OM().then((async rM => {
+         let {
+           image: iM,
+           request: OM
+         } = rM;
+         try {
+           const rM = await createImageBitmap(iM);
+           eM(MM, OM(rM), [rM])
+         } catch (SM) {
+           UM(`could not take an image (${String(SM)})`)
+         }
+       })), SM.catch((() => {
+         rM.get(iM) === SM && rM.delete(iM)
+       })), rM.set(iM, SM)), SM
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L107-L162` → after: `L130-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L130-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L130-L172) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L107-L162)

```diff
-     function PQ(QQ, WQ) {
-       const XQ = QQ.awQ(),
-         wQ = XQ[0],
-         qQ = XQ[1],
-         TQ = XQ[2],
-         zQ = XQ[3],
-         sQ = XQ[4],
-         FQ = XQ[5],
-         PQ = XQ[6],
-         gQ = XQ[7],
-         JQ = XQ[8],
-         rQ = XQ[9],
-         IQ = XQ[10],
-         jQ = XQ[11],
-         BQ = XQ[12],
-         yQ = XQ[13],
- ... (40 more removed lines; see GitHub link above)
+     function tM(MM, rM, iM) {
+       return wM((rM => Promise.all([MM.top, MM.left, MM.right].map((MM => function(MM, rM) {
+         return bM(MM, yM, rM, (async () => ({
+           image: await EM(rM),
+           request: MM => ({
+             type: "texture",
+             url: rM,
+             bitmap: MM
+           })
+         })))
+       }(rM, MM))))), (OM => ({
+         type: "draw",
+         id: OM,
+         ...MM,
+         size: rM,
+         outlineWidth: iM
+ ... (27 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L166` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L175) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L166)

```diff
-   37370: (QQ, WQ, XQ) => {
+   37344: (MM, rM, iM) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L168` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L177-L178) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L168)

```diff
-       e: () => BQ,
+       c: () => OM,
+       f: () => nM,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L170-L174` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L180-L181) · [Before (L170-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L170-L174)

```diff
-       l: () => GQ,
-       m: () => VQ,
-       q: () => JQ,
-       s: () => rQ,
-       w: () => IQ
+       k: () => mM,
+       n: () => QM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L176-L486` → after: `L183-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L183-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L183-L246) · [Before (L176-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L176-L486)

```diff
-     var wQ = XQ(37374),
-       qQ = XQ(37379),
-       TQ = XQ(37387),
-       zQ = XQ(37392),
-       sQ = XQ(37404),
-       FQ = XQ(37412),
-       PQ = XQ(37418);
-     const gQ = QQ => parseInt(QQ.toString().replace(/\W/g, ""));
-     class JQ {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = QQ, this.y = WQ
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (295 more removed lines; see GitHub link above)
+     const OM = {
+         across: Math.SQRT1_2,
+         down: Math.SQRT1_2 / 2,
+         up: Math.sqrt(3) / 2
+       },
+       SM = .6,
+       jM = {
+         width: 2 * OM.across,
+         height: 2 * OM.down + OM.up
+       };
+ 
+     function aM(MM, rM) {
+       const iM = rM > 0 ? rM + 1 : 0,
+         aM = MM * SM - rM / OM.across;
+       return Math.max(0, Math.min(aM, (MM - 2 * iM) / jM.height))
+     }
+ ... (48 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L489` → after: `L286-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L286-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L286-L298) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L489)

```diff
-     JQ._V8PerformanceHack = new JQ(.5, .5), JQ._ZeroReadOnly = JQ.Zero();
+   },
+   37356: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => SM
+     });
+     const OM = {
+       wait: function(MM) {
+         return new Promise((rM => {
+           setTimeout(rM, MM)
+         }))
+       },
+       stallMs: 2e4
+     };
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L491-L629` → after: `L300-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L300-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L300-L308) · [Before (L491-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L491-L629)

```diff
-       get x() {
-         return this._x
-       }
-       set x(QQ) {
-         this._x = QQ, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(QQ) {
-         this._y = QQ, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(QQ) {
- ... (123 more removed lines; see GitHub link above)
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OM;
+         this.url = MM, this.options = rM, this.timing = iM, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = MM
+       }
+       ready() {
+         if (null === this.fetched) {
+           const MM = new AbortController;
+           this.fetchAbort = MM, this.fetched = this.fetchWithRetries(MM.signal).then((rM => (this.fetchAbort === MM && (this.fetchAbort = null), rM)))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L631-L692` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L310) · [Before (L631-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L631-L692)

```diff
-         return XQ
-       }
-       equals(QQ) {
-         return QQ && this._x === QQ._x && this._y === QQ._y && this._z === QQ._z
-       }
-       equalsWithEpsilon(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b;
-         return QQ && (0, sQ.WithinEpsilon)(this._x, QQ._x, WQ) && (0, sQ.WithinEpsilon)(this._y, QQ._y, WQ) && (0, sQ.WithinEpsilon)(this._z, QQ._z, WQ)
-       }
-       PsQ(QQ, WQ, XQ) {
-         return this._x === QQ && this._y === WQ && this._z === XQ
-       }
-       multiplyInPlace(QQ) {
-         return this._x *= QQ._x, this._y *= QQ._y, this._z *= QQ._z, this._isDirty = !0, this
-       }
-       multiply(QQ) {
- ... (46 more removed lines; see GitHub link above)
+         return this.fetched
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L694-L695` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L312-L313) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L694-L695)

```diff
-       fractToRef(QQ) {
-         return QQ._x = this._x - Math.floor(this._x), QQ._y = this._y - Math.floor(this._y), QQ._z = this._z - Math.floor(this._z), QQ._isDirty = !0, QQ
+       cancel() {
+         null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L697-L698` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L315-L316) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L697-L698)

```diff
-       fract() {
-         return new rQ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
+       forgetFailedFetch() {
+         this.fetched = null
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L700-L701` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L318-L319) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L700-L701)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+       get href() {
+         return this.url.href
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L703-L704` → after: `L321-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L321-L322) · [Before (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L703-L704)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z
+       start() {
+         return new Worker(this.scriptUrl, this.options)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L706-L970` → after: `L324-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L324-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L324-L330) · [Before (L706-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L706-L970)

```diff
-       get hasAZeroComponent() {
-         return this._x * this._y * this._z === 0
-       }
-       normalize() {
-         return this.normalizeFromLength(this.length())
-       }
-       reorderInPlace(QQ) {
-         if ("xyz" === (QQ = QQ.toLowerCase())) return this;
-         const WQ = yQ.vj[0].WH(this);
-         return this.x = WQ[QQ[0]], this.y = WQ[QQ[1]], this.z = WQ[QQ[2]], this
-       }
-       rotateByQuaternionToRef(QQ, WQ) {
-         return QQ.toRotationMatrix(yQ.Matrix[0]), rQ.TransformCoordinatesToRef(this, yQ.Matrix[0], WQ), WQ
-       }
-       rotateByQuaternionAroundPointToRef(QQ, WQ, XQ) {
-         return this.subtractToRef(WQ, yQ.vj[0]), yQ.vj[0].rotateByQuaternionToRef(QQ, yQ.vj[0]), WQ.addToRef(yQ.vj[0], XQ), XQ
- ... (249 more removed lines; see GitHub link above)
+       async fetchWithRetries(MM) {
+         for (let rM = 0;; rM++) {
+           const iM = new URL(this.url);
+           if (rM > 0 && iM.searchParams.set("cache-bust", `${Date.now()}-${rM}`), await this.fetchWhole(iM, MM)) return this.scriptUrl = iM, !0;
+           if (rM >= 3 || MM.aborted) return !1;
+           if (await this.timing.wait(500 * 2 ** rM), MM.aborted) return !1
+         }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L972-L1687` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L332-L333) · [Before (L972-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L972-L1687)

```diff
-       static CrossToRef(QQ, WQ, XQ) {
-         const wQ = QQ._y * WQ._z - QQ._z * WQ._y,
-           qQ = QQ._z * WQ._x - QQ._x * WQ._z,
-           TQ = QQ._x * WQ._y - QQ._y * WQ._x;
-         return XQ.XQQ(wQ, qQ, TQ), XQ
-       }
-       static Normalize(QQ) {
-         const WQ = rQ.Zero();
-         return rQ.NormalizeToRef(QQ, WQ), WQ
-       }
-       static NormalizeToRef(QQ, WQ) {
-         return QQ.normalizeToRef(WQ), WQ
-       }
-       static Project(QQ, WQ, XQ, wQ) {
-         const qQ = new rQ;
-         return rQ.ProjectToRef(QQ, WQ, XQ, wQ, qQ), qQ
- ... (700 more removed lines; see GitHub link above)
+       async fetchWhole(MM, rM) {
+         const iM = new AbortController;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1689-L2900` → after: `L335-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L335-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/240.js#L335-L364) · [Before (L1689-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/240.js#L1689-L2900)

```diff
-         const XQ = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           wQ = this._w;
-         return XQ > 0 ? (WQ = 2 * Math.atan2(XQ, wQ), QQ.set(this._x / XQ, this._y / XQ, this._z / XQ)) : (WQ = 0, QQ.set(1, 0, 0)), WQ
-       }
-       static FromRotationMatrix(QQ) {
-         const WQ = new jQ;
-         return jQ.FromRotationMatrixToRef(QQ, WQ), WQ
-       }
-       static FromRotationMatrixToRef(QQ, WQ) {
-         const XQ = QQ.m,
-           wQ = XQ[0],
-           qQ = XQ[4],
-           TQ = XQ[8],
-           zQ = XQ[1],
-           sQ = XQ[5],
-           FQ = XQ[9],
- ... (1196 more removed lines; see GitHub link above)
+         const SM = () => {
+             clearTimeout(OM), OM = setTimeout((() => {
+               iM.abort()
+             }), this.timing.stallMs)
+           },
+           jM = () => {
+             iM.abort()
+           };
+         rM.addEventListener("abort", jM, {
+           once: !0
+         }), SM();
+         try {
+           var aM;
+           const rM = await fetch(MM, {
+             signal: iM.signal
+           });
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L14` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L5-L7) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L14)

```diff
-   37546: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => JQ,
-       d: () => rQ,
-       h: () => BQ,
-       l: () => IQ
-     });
-     var wQ = XQ(37379),
-       qQ = XQ(37374),
-       TQ = XQ(37404),
-       zQ = XQ(37418);
+   40691: (MM, rM, iM) => {
+     MM.exports = SM;
+     var OM = iM(347);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L16-L17` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L9-L12) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L16-L17)

```diff
-     function sQ(QQ) {
-       return Math.pow(QQ, qQ.h)
+     function SM(MM, rM) {
+       if (!(this instanceof SM)) return new SM(MM, rM);
+       var iM = OM.create();
+       OM.add(iM, MM, rM), this.base = OM.min(OM.create(), MM, iM), this.vec = OM.clone(rM), this.max = OM.max(OM.create(), MM, iM), this.mag = OM.length(this.vec)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L19-L21` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L14-L51) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L19-L21)

```diff
- 
-     function FQ(QQ) {
-       return QQ <= .04045 ? .0773993808 * QQ : Math.pow(.947867299 * (QQ + .055), 2.4)
+     var jM = SM.prototype;
+     jM.width = function() {
+       return this.vec[0]
+     }, jM.height = function() {
+       return this.vec[1]
+     }, jM.depth = function() {
+       return this.vec[2]
+     }, jM.x0 = function() {
+       return this.base[0]
+     }, jM.y0 = function() {
+       return this.base[1]
+     }, jM.z0 = function() {
+       return this.base[2]
+     }, jM.x1 = function() {
+       return this.max[0]
+     }, jM.y1 = function() {
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L23-L25` → after: `L53-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L53-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L53-L71) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L23-L25)

```diff
- 
-     function PQ(QQ) {
-       return Math.pow(QQ, qQ.e)
+   },
+   40684: MM => {
+     MM.exports = function(MM, rM, iM, OM, SM, jM) {
+       var aM = +rM[0],
+         PM = +rM[1],
+         nM = +rM[2],
+         QM = +iM[0],
+         zM = +iM[1],
+         LM = +iM[2],
+         mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
+       if (0 === mM) throw new Error("Can't raycast along a zero vector");
+       return function(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
+         for (var zM = 0, LM = Math.floor, mM = 0 | LM(rM), HM = 0 | LM(iM), hM = 0 | LM(OM), JM = SM > 0 ? 1 : -1, dM = jM > 0 ? 1 : -1, yM = aM > 0 ? 1 : -1, lM = Math.abs(1 / SM), EM = Math.abs(1 / jM), UM = Math.abs(1 / aM), GM = lM < 1 / 0 ? lM * (JM > 0 ? mM + 1 - rM : rM -  … [truncated]
+           var wM = MM(mM, HM, hM);
+           if (wM) return nM && (nM[0] = rM + zM * SM, nM[1] = iM + zM * jM, nM[2] = OM + zM * aM), QM && (QM[0] = QM[1] = QM[2] = 0, 0 === bM && (QM[0] = -JM), 1 === bM && (QM[1] = -dM), 2 === bM && (QM[2] = -yM)), wM;
+           GM < CM ? GM < eM ? (mM += JM, zM = GM, GM += lM, bM = 0) : (hM += yM, zM = eM, eM += UM, bM = 2) : CM < eM ? (HM += dM, zM = CM, CM += EM, bM = 1) : (hM += yM, zM = eM, eM += UM, bM = 2)
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L29` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L83) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L29)

```diff
-       return QQ <= .0031308 ? 12.92 * QQ : 1.055 * Math.pow(QQ, .41666) - .055
+       return null !== SM && MM === SM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L31-L325` → after: `L85-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L85-L87) · [Before (L31-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L31-L325)

```diff
-     class JQ {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = QQ, this.g = WQ, this.b = XQ
-       }
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
-       }
-       getClassName() {
-         return "Color3"
-       }
-       getHashCode() {
-         let QQ = 255 * this.r | 0;
-         return QQ = 397 * QQ ^ 255 * this.g, QQ = 397 * QQ ^ 255 * this.b, QQ
- ... (279 more removed lines; see GitHub link above)
+ 
+     function aM() {
+       this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L329-L553` → after: `L90-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L90-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L90-L121) · [Before (L329-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L329-L553)

```diff
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = QQ, this.g = WQ, this.b = XQ, this.a = wQ
-       }
-       awQ() {
-         return [this.r, this.g, this.b, this.a]
-       }
-       toArray(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return QQ[WQ] = this.r, QQ[WQ + 1] = this.g, QQ[WQ + 2] = this.b, QQ[WQ + 3] = this.a, this
-       }
-       gXQ(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
- ... (209 more removed lines; see GitHub link above)
+       constructor(MM, rM) {
+         this.version = "0.7.0";
+         var iM = Object.assign({}, new aM, rM || {});
+         this.element = MM || document, this.uB = !!iM.uB, this.stopPropagation = !!iM.stopPropagation, this.pB = !!iM.pB, this.disabled = !!iM.disabled, this.filterEvents = (MM, rM) => !0, this.ignoreEvent = MM => !1, this.down = new OM.EventEmitter, this.up = new OM.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           mrM: 0,
+           HrM: 0,
+           hrM: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? QM(this) : document.addEventListener("DOMContentLoaded", (MM => {
+           QM(this)
+         }), {
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L555-L562` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L123-L128) · [Before (L555-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L555-L562)

```diff
-       static CheckColors4(QQ, WQ) {
-         if (QQ.length === 3 * WQ) {
-           const WQ = [];
-           for (let XQ = 0; XQ < QQ.length; XQ += 3) {
-             const wQ = XQ / 3 * 4;
-             WQ[wQ] = QQ[XQ], WQ[wQ + 1] = QQ[XQ + 1], WQ[wQ + 2] = QQ[XQ + 2], WQ[wQ + 3] = 1
-           }
-           return WQ
+       getBindings() {
+         var MM = {};
+         for (var rM in this._keyBindmap) {
+           this._keyBindmap[rM].forEach((iM => {
+             MM[iM] = MM[iM] || [], MM[iM].push(rM)
+           }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L572-L587` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L137-L138) · [Before (L572-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L572-L587)

```diff
-     function BQ() {
-       jQ || (jQ = !0, Object.defineProperties(JQ.prototype, {
-         dimension: {
-           value: [3]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(rQ.prototype, {
-         dimension: {
-           value: [4]
-         },
-         rank: {
-           value: 1
-         }
-       }), (0, zQ.d)("BABYLON.Color3", JQ), (0, zQ.d)("BABYLON.Color4", rQ))
+     function nM(MM) {
+       for (var rM in MM) MM[rM] = 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L589-L601` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L140) · [Before (L589-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L589-L601)

```diff
-   },
-   37374: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => TQ,
-       e: () => wQ,
-       h: () => qQ
-     });
-     const wQ = 1 / 2.2,
-       qQ = 2.2;
-     Math.sqrt(5);
-     let TQ = .001
-   },
-   37404: (QQ, WQ, XQ) => {
+ 
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L603` → after: `L142-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L142-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L142-L148) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L603)

```diff
-       return parseInt(QQ.toString().replace(/\W/g, ""))
+       window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
+       var rM = {
+         passive: !0
+       };
+       MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
+         passive: !1
+       }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM) … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L607-L608` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L155) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L607-L608)

```diff
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(QQ - WQ) <= XQ
+       rM.preventDefault(), hM(rM)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L611-L613` → after: `L158-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L158-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L158-L167) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L611-L613)

```diff
-     function TQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return QQ < WQ - wQ || QQ > XQ + wQ
+     function hM(MM) {
+       let rM = !1;
+       for (let iM = 0; iM < MM.touches.length; ++iM)
+         if (MM.touches[iM].identifier === mM) {
+           rM = !0;
+           break
+         } if (!rM) {
+         const rM = MM.changedTouches[0];
+         zM = rM.clientX, LM = rM.clientY, mM = rM.identifier
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L617` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L171) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L617)

```diff
-       return QQ === WQ ? QQ : Math.random() * (WQ - QQ) + QQ
+       for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L621-L626` → after: `L175-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L175-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L175-L179) · [Before (L621-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L621-L626)

```diff
-       return QQ + (WQ - QQ) * XQ
-     }
- 
-     function FQ(QQ, WQ, XQ) {
-       let wQ = yQ(WQ - QQ, 360);
-       return wQ > 180 && (wQ -= 360), QQ + wQ * rQ(XQ)
+       if (!MM.ignoreEvent(iM)) try {
+         bM(MM, iM), rM && iM.isTrusted && !iM.repeat && MM._keyStates[iM.code] && wM(MM, iM.code)
+       } finally {
+         tM(iM.code, rM, MM, iM)
+       }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L630-L637` → after: `L183-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L183-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L183-L197) · [Before (L630-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L630-L637)

```diff
-       let wQ;
-       return wQ = QQ != WQ ? rQ((XQ - QQ) / (WQ - QQ)) : 0, wQ
-     }
- 
-     function gQ(QQ, WQ, XQ, wQ, qQ) {
-       const TQ = qQ * qQ,
-         zQ = qQ * TQ;
-       return QQ * (2 * zQ - 3 * TQ + 1) + XQ * (-2 * zQ + 3 * TQ) + WQ * (zQ - 2 * TQ + qQ) + wQ * (zQ - TQ)
+       if (!MM.ignoreEvent(iM)) try {
+         bM(MM, iM)
+       } finally {
+         ! function(MM, rM, iM) {
+           if ("pointerId" in iM)
+             if (rM) {
+               if (null !== MM._touches.currID) return;
+               MM._touches.currID = iM.pointerId
+             } else {
+               if (MM._touches.currID !== iM.pointerId) return;
+               MM._touches.currID = null
+             } var OM = "button" in iM ? iM.button + 1 : 1;
+           tM("Mouse" + OM, rM, MM, iM)
+         }(MM, rM, iM)
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L640-L642` → after: `L200-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L200-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L200-L215) · [Before (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L640-L642)

```diff
-     function JQ(QQ, WQ, XQ, wQ, qQ) {
-       const TQ = qQ * qQ;
-       return 6 * (TQ - qQ) * QQ + (3 * TQ - 4 * qQ + 1) * WQ + 6 * (-TQ + qQ) * XQ + (3 * TQ - 2 * qQ) * wQ
+     function lM(MM, rM) {
+       var iM = rM.movementX || rM.mozMovementX || 0,
+         OM = rM.movementY || rM.mozMovementY || 0;
+       if (rM.touches && 0 === (iM | OM)) {
+         var SM = function(MM) {
+           hM(MM);
+           for (let rM = 0; rM < MM.changedTouches.length; ++rM)
+             if (MM.changedTouches[rM].identifier == mM) {
+               const iM = MM.changedTouches[rM],
+                 OM = [iM.clientX - zM, iM.clientY - LM];
+               return zM = iM.clientX, LM = iM.clientY, OM
+             } return console.error(`Did not find touch id ${mM}`), [0, 0]
+         }(rM);
+         iM = SM[0], OM = SM[1]
+       }
+       MM.oB.dx += iM, MM.oB.dy += OM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L645-L648` → after: `L218-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L218-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L218-L231) · [Before (L645-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L645-L648)

```diff
-     function rQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(XQ, Math.max(WQ, QQ))
+     function EM(MM, rM) {
+       bM(MM, rM);
+       var iM = 1;
+       switch (rM.deltaMode) {
+         case 0:
+           iM = 1;
+           break;
+         case 1:
+           iM = 12;
+           break;
+         case 2:
+           iM = MM.element.clientHeight || window.innerHeight
+       }
+       MM.oB.mrM += (rM.deltaX || 0) * iM, MM.oB.HrM += (rM.deltaY || 0) * iM, MM.oB.hrM += (rM.deltaZ || 0) * iM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L651-L652` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L234-L235) · [Before (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L651-L652)

```diff
-     function IQ(QQ) {
-       return QQ -= 2 * Math.PI * Math.floor((QQ + Math.PI) / (2 * Math.PI))
+     function UM(MM, rM) {
+       if (!MM.pB) return rM.preventDefault(), !1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L655-L657` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L248-L249) · [Before (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L655-L657)

```diff
-     function jQ(QQ) {
-       const WQ = QQ.toString(16);
-       return QQ <= 15 ? ("0" + WQ).toUpperCase() : WQ.toUpperCase()
+     function CM(MM, rM) {
+       return !!MM[GM[rM]] || ("AltRight" === rM || "ControlLeft" === rM) && "function" === typeof MM.getModifierState && !0 === MM.getModifierState("AltGraph")
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L660-L670` → after: `L252-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L252-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L252-L263) · [Before (L660-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L660-L670)

```diff
-     function BQ(QQ) {
-       if (Math.log2) return Math.floor(Math.log2(QQ));
-       if (QQ < 0) return NaN;
-       if (0 === QQ) return -1 / 0;
-       let WQ = 0;
-       if (QQ < 1) {
-         for (; QQ < 1;) WQ++, QQ *= 2;
-         WQ = -WQ
-       } else if (QQ > 1)
-         for (; QQ > 1;) WQ++, QQ = Math.floor(QQ / 2);
-       return WQ
+     function eM(MM, rM) {
+       for (var iM in MM._modifiersHeldThroughBlur = {}, GM) MM._keyStates[iM] && (MM._modifiersHeldThroughBlur[iM] = !0);
+       rM && rM.isTrusted && function() {
+         try {
+           return window.self !== window.top
+         } catch (MM) {
+           return !0
+         }
+       }() && (clearTimeout(MM._blurRelease), MM._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var rM in MM._modifiersHeldThroughBlur = {}, MM._keyStates) MM._keyStates[rM] && !/^Mouse\d/.test(rM) && wM(MM, rM)
+       }), 0))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L674` → after: `L267-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L267-L269) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L674)

```diff
-       return QQ - Math.floor(QQ / WQ) * WQ
+       var iM = MM._modifiersHeldThroughBlur;
+       if (iM && rM.isTrusted && document.hasFocus())
+         for (var OM in iM) delete iM[OM], MM._keyStates[OM] && OM !== rM.code && (CM(rM, OM) || wM(MM, OM))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L677-L678` → after: `L272-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L272-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L272-L284) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L677-L678)

```diff
-     function VQ(QQ, WQ, XQ) {
-       return (QQ - WQ) / (XQ - WQ)
+     function wM(MM, rM) {
+       const iM = {
+           code: rM,
+           preventDefault: () => {},
+           stopPropagation: () => {}
+         },
+         OM = SM;
+       SM = iM;
+       try {
+         tM(rM, !1, MM, iM)
+       } finally {
+         SM = OM
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L681-L682` → after: `L287-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L287-L303) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L681-L682)

```diff
-     function DQ(QQ, WQ, XQ) {
-       return QQ * (XQ - WQ) + WQ
+     function tM(MM, rM, iM, OM) {
+       var SM = iM._keyBindmap[MM];
+       SM && (gM(iM._keyStates[MM], rM) && (iM._keyStates[MM] = rM, SM.forEach((MM => {
+         (!iM.filterEvents || iM.filterEvents(OM, MM)) && function(MM, rM, iM, OM) {
+           var SM = rM ? iM.pressCount : iM.releaseCount;
+           SM[MM] = (SM[MM] || 0) + 1;
+           var jM = iM._bindPressCount[MM] || 0;
+           (jM += rM ? 1 : -1) < 0 && (jM = 0);
+           iM._bindPressCount[MM] = jM;
+           var aM = iM.state[MM];
+           if (gM(aM, jM)) {
+             iM.state[MM] = jM > 0;
+             var PM = rM ? iM.down : iM.up;
+             iM.disabled || PM.emit(MM, OM)
+           }
+         }(MM, rM, iM, OM)
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L686-L687` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L307) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L686-L687)

```diff
-       let XQ = yQ(WQ - QQ, 360);
-       return XQ > 180 && (XQ -= 360), XQ
+       return MM ? !rM : rM
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L689-L692` → after: `L309-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L309-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L309-L318) · [Before (L689-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L689-L692)

```diff
- 
-     function GQ(QQ, WQ) {
-       const XQ = yQ(QQ, 2 * WQ);
-       return WQ - Math.abs(XQ - WQ)
+   },
+   37484: (MM, rM) => {
+     function iM(MM) {
+       if (MM && "object" === typeof MM) {
+         var rM = MM.which || MM.keyCode || MM.charCode;
+         rM && (MM = rM)
+       }
+       if ("number" === typeof MM) return aM[MM];
+       var iM, jM = String(MM);
+       return (iM = OM[jM.toLowerCase()]) ? iM : (iM = SM[jM.toLowerCase()]) || (1 === jM.length ? jM.charCodeAt(0) : void 0)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L694-L697` → after: `L320-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L320-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L320-L481) · [Before (L694-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L694-L697)

```diff
- 
-     function UQ(QQ, WQ, XQ) {
-       let wQ = rQ(XQ);
-       return wQ = -2 * wQ * wQ * wQ + 3 * wQ * wQ, WQ * wQ + QQ * (1 - wQ)
+     iM.isEventKey = function(MM, rM) {
+       if (MM && "object" === typeof MM) {
+         var iM = MM.which || MM.keyCode || MM.charCode;
+         if (null === iM || void 0 === iM) return !1;
+         if ("string" === typeof rM) {
+           var jM;
+           if (jM = OM[rM.toLowerCase()]) return jM === iM;
+           if (jM = SM[rM.toLowerCase()]) return jM === iM
+         } else if ("number" === typeof rM) return rM === iM;
+         return !1
+       }
+     };
+     var OM = (rM = MM.exports = iM).code = rM.codes = {
+         backspace: 8,
+         tab: 9,
+         enter: 13,
+ ... (146 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L700-L702` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L484-L486) · [Before (L700-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L700-L702)

```diff
-     function bQ(QQ, WQ, XQ) {
-       let wQ;
-       return wQ = Math.abs(WQ - QQ) <= XQ ? WQ : QQ + Math.sign(WQ - QQ) * XQ, wQ
+     function SM() {
+       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
+       this.nowObject = performance || Date, this.pollTime = MM, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L705-L708` → after: `L491-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L491-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L491-L496) · [Before (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L705-L708)

```diff
-     function vQ(QQ, WQ, XQ) {
-       const wQ = pQ(QQ, WQ);
-       let qQ;
-       return qQ = -XQ < wQ && wQ < XQ ? WQ : bQ(QQ, WQ = QQ + wQ, XQ), qQ
+     function PM(MM) {
+       for (var rM = MM._data, iM = 1e3 / MM.zk, OM = rM.nowObject.now() + aM, SM = 0; rM.nowObject.now() >= rM.lastTickStarted + iM && rM.nowObject.now() < OM && ++SM <= jM;) MM.kE(iM), rM.lastTickStarted += iM;
+       var PM = 5 * (iM + 5),
+         nM = rM.nowObject.now();
+       if (nM - rM.lastTickStarted > PM)
+         for (; nM >= rM.lastTickStarted + iM;) rM.lastTickStarted += iM
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L710-L712` → after: `L498-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L498-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L498-L522) · [Before (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L710-L712)

```diff
- 
-     function dQ(QQ, WQ, XQ) {
-       return (QQ - WQ) / (XQ - WQ)
+   },
+   37640: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM
+     });
+     var OM = iM(44);
+     const SM = OM.useLayoutEffect;
+     const jM = function(MM) {
+       var rM = (0, OM.useRef)(MM);
+       return SM((function() {
+         rM.current = MM
+       })), rM
+     };
+     var aM = function(MM) {
+       var rM = jM(MM);
+       (0, OM.useEffect)((function() {
+ ... (9 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L714-L716` → after: `L524-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L524-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L524-L647) · [Before (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L714-L716)

```diff
- 
-     function HQ(QQ, WQ, XQ) {
-       return (XQ - WQ) * QQ + WQ
+   },
+   37517: MM => {
+     var rM, iM = "undefined" !== typeof window ? window.navigator.userAgent : "",
+       OM = /OS X/.test(iM),
+       SM = /Opera/.test(iM),
+       jM = !/like Gecko/.test(iM) && !SM,
+       aM = MM.exports = {
+         0: OM ? "<menu>" : "<UNK>",
+         1: "<mouse 1>",
+         2: "<mouse 2>",
+         3: "<break>",
+         4: "<mouse 3>",
+         5: "<mouse 4>",
+         6: "<mouse 5>",
+         8: "<backspace>",
+         9: "<tab>",
+ ... (108 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L718-L747` → after: `L649-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L649-L650) · [Before (L718-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L718-L747)

```diff
- 
-     function aQ(QQ, WQ) {
-       const XQ = QQ % WQ;
-       return 0 === XQ ? WQ : aQ(WQ, XQ)
-     }
-     XQ.r(WQ), XQ.d(WQ, {
-       Clamp: () => rQ,
-       DeltaAngle: () => pQ,
-       Denormalize: () => DQ,
-       ExtractAsInt: () => wQ,
-       Hermite: () => gQ,
-       Hermite1stDerivative: () => JQ,
-       HighestCommonFactor: () => aQ,
-       ILog2: () => BQ,
-       InverseLerp: () => PQ,
-       Lerp: () => sQ,
- ... (14 more removed lines; see GitHub link above)
+     iM.d(rM, {
+       e: () => OM
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L750-L754` → after: `L653-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L653-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L653-L660) · [Before (L750-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L750-L754)

```diff
-   37379: (QQ, WQ, XQ) => {
-     function wQ(QQ, WQ) {
-       const XQ = [];
-       for (let wQ = 0; wQ < QQ; ++wQ) XQ.push(WQ());
-       return XQ
+   40016: (MM, rM, iM) => {
+     function OM(MM, rM, iM, OM) {
+       iM && Object.defineProperty(MM, rM, {
+         enumerable: iM.enumerable,
+         configurable: iM.configurable,
+         writable: iM.writable,
+         value: iM.initializer ? iM.initializer.call(OM) : void 0
+       })
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L756-L758` → after: `L662-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L662-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L662-L706) · [Before (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L756-L758)

```diff
- 
-     function qQ(QQ, WQ) {
-       return wQ(QQ, WQ)
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   39705: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => jM
+     });
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
+     class jM {
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+ ... (29 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L765-L780` → after: `L716-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L716-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L716-L746) · [Before (L765-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L765-L780)

```diff
-     const TQ = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function zQ(QQ, WQ) {
-       const XQ = TQ.map((XQ => function(QQ, WQ, XQ) {
-         const wQ = QQ[WQ];
-         if ("function" !== typeof wQ) return null;
-         const qQ = function() {
-           const wQ = QQ.length,
-             TQ = qQ.previous.apply(QQ, arguments);
-           return XQ(WQ, wQ), TQ
-         };
-         return wQ.next = qQ, qQ.previous = wQ, QQ[WQ] = qQ, () => {
-           const XQ = qQ.previous;
-           if (!XQ) return;
-           const wQ = qQ.next;
-           wQ ? (XQ.next = wQ, wQ.previous = XQ) : (XQ.next = void 0, QQ[WQ] = XQ), qQ.next = void 0, qQ.previous = void 0
+     var OM = iM(38173);
+     class SM {
+       constructor(MM, rM, iM) {
+         this.gradient = MM, this.color1 = rM, this.color2 = iM
+       }
+       getColorToRef(MM) {
+         this.color2 ? OM.h.LerpToRef(this.color1, this.color2, Math.random(), MM) : MM.jR(this.color1)
+       }
+     }
+     class jM {
+       constructor(MM, rM) {
+         this.gradient = MM, this.color = rM
+       }
+     }
+     class aM {
+       constructor(MM, rM, iM) {
+ ... (15 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L782-L784` → after: `L748-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L748-L749) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L782-L784)

```diff
-       }(QQ, XQ, WQ)));
-       return () => {
-         for (const QQ of XQ) QQ?.()
+         const OM = rM.length - 1;
+         iM(rM[OM], rM[OM], 1)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L788` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L753) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L788)

```diff
-   37418: (QQ, WQ, XQ) => {
+   39711: (MM, rM, iM) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L790-L791` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L755) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L790-L791)

```diff
-       b: () => TQ,
-       d: () => qQ
+       e: () => OM
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L793-L796` → after: `L757-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L757-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L757-L808) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L793-L796)

```diff
-     const wQ = {};
- 
-     function qQ(QQ, WQ) {
-       wQ[QQ] = WQ
+     class OM {
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+ ... (36 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L798-L800` → after: `L810-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L810-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/241.js#L810-L1191) · [Before (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/241.js#L798-L800)

```diff
- 
-     function TQ(QQ) {
-       return wQ[QQ]
+     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
+   },
+   39756: (MM, rM, iM) => {
+     iM.d(rM, {
+ ... (366 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L6)

```diff
-   37392: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => qQ
+   42181: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       LobbyManageView: () => Cr
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L8-L11` → after: `L8-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L8-L27) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L8-L11)

```diff
-     var wQ = XQ(37399);
-     class qQ {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+     var OM = iM(44),
+       SM = iM(1548),
+       jM = iM(37950),
+       aM = iM(2653),
+       PM = iM(2658),
+       nM = iM(2640),
+       QM = iM(37498);
+ 
+     function zM() {
+       const [MM, rM] = (0, OM.useState)(new Map);
+       return {
+         get: rM => MM.get(rM),
+         hold: (0, OM.useCallback)(((MM, iM, OM) => {
+           rM((rM => new Map(rM).set(MM, iM))), OM.then((() => {
+             rM((rM => {
+               const iM = new Map(rM);
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L13-L14` → after: `L29-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L29-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L29-L54) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+     }
+     var LM = iM(1116),
+       mM = iM.n(LM),
+       HM = iM(1188),
+       hM = iM(1398),
+       JM = iM(1396),
+       dM = iM(2880),
+       yM = iM(5417),
+       lM = iM(3839);
+     var EM = iM(2084),
+       UM = iM(1520);
+ 
+     function GM(MM, rM, iM) {
+       const OM = MM.filter((MM => MM.name !== rM)),
+         SM = OM.filter((MM => "none" === MM.role)).sort(((MM, rM) => rM.at - MM.at)),
+         jM = OM.filter((MM => "none" !== MM.role)).sort(((MM, rM) => iM.indexOf(MM.role) - iM.indexOf(rM.role) || rM.at - MM.at));
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L17-L56` → after: `L57-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L57-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L57-L141) · [Before (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L17-L56)

```diff
-     qQ.Instances = [], qQ.OnEnginesDisposedObservable = new wQ.b, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
-   },
-   38947: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(38956);
-     const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(WQ) : null;
-     class TQ {
-       static DeepCopy(QQ, WQ, XQ, TQ) {
-         let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const sQ = function(QQ) {
-           const WQ = [];
-           do {
- ... (24 more removed lines; see GitHub link above)
+ 
+     function eM(MM, rM) {
+       const iM = MM.here.find((MM => MM.name === rM));
+       if (iM) return {
+         section: "here",
+         player: iM
+       };
+       const OM = MM.banned.find((MM => MM.name === rM));
+       if (OM) return {
+         section: "banned",
+         bannedAt: OM.at
+       };
+       const SM = MM.away.find((MM => MM.name === rM));
+       return SM ? {
+         section: "away",
+         player: SM
+ ... (69 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L59` → after: `L252-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L252-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L252-L441) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L59)

```diff
-       }
+       }(PM, null !== GM.gamemodes), RM = LM.statusOf(CM), sM = LM.isPending(CM), DM = zM(), oM = Date.now(), fM = MM => {
+         var rM, iM;
+         return null !== (rM = null === (iM = (MM => GM.roles.find((rM => rM.role === MM)))(MM)) || void 0 === iM ? void 0 : iM.label) && void 0 !== rM ? rM : MM
+       }, AM = MM => {
+         const rM = NM[MM];
+         return void 0 === rM ? void 0 : dM(rM)
+       }, xM = "here" === PM.section || "away" === PM.section ? PM.player : null, vM = "here" === PM.section ? PM.player.id : null, {
+         playerSocialPreview: FM,
+         isFriend: BM
+       } = null === vM ? {
+         playerSocialPreview: (0, gM.h)(aM, null),
+         isFriend: !1
+       } : (0, tM.g)(vM, aM), XM = function() {
+         LM.send(...arguments)
+       }, IM = (MM, rM) => {
+         DM.hold("role", MM, LM.send({
+ ... (174 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L61-L66` → after: `L443-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L443-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L443-L1245) · [Before (L61-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L61-L66)

```diff
-   },
-   38191: (QQ, WQ, XQ) => {
-     function wQ() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const WQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
+ 
+     function xM(MM) {
+       var rM, iM, SM, jM;
+       let {
+         manage: aM,
+         focusRequest: PM,
+         onFocused: nM
+       } = MM;
+       const {
+         t: QM
+       } = (0, HM.A)(), zM = (0, EM.j)("players"), LM = (0, EM.j)("hiddenPlayerNames"), mM = (0, OM.useRef)(null), {
+         state: JM
+       } = aM, yM = null === zM.localId ? null : null !== (rM = null === (iM = zM.byId[zM.localId]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null, [lM] = (0, OM.useState)((() => CM(JM, yM))), GM = function(MM, rM, iM) {
+         const OM = new Set([...MM.here, ...MM.away, ...MM.banned]),
+           SM = CM(rM, iM),
+           jM = rM => {
+ ... (787 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L69-L126` → after: `L1248-L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1248-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1248-L1427) · [Before (L69-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L69-L126)

```diff
-     XQ.d(WQ, {
-       d: () => wQ
-     })
-   },
-   38956: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ
-     });
-     class wQ {
-       static _CheckLimit(QQ, WQ) {
-         let XQ = wQ._LogLimitOutputs[QQ];
-         return XQ ? XQ.current++ : (XQ = {
-           limit: WQ,
-           current: 1
-         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
-       }
- ... (42 more removed lines; see GitHub link above)
+ 
+     function hr(MM) {
+       return MM.flatMap((MM => {
+         let {
+           items: rM
+         } = MM;
+         return rM.flatMap((MM => {
+           let {
+             rule: rM,
+             children: iM
+           } = MM;
+           return [rM, ...iM]
+         }))
+       }))
+     }
+ 
+ ... (164 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L130-L142` → after: `L1571-L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1571-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1571-L1627) · [Before (L130-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L130-L142)

```diff
-     wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
+ 
+     function Cr(MM) {
+       let {
+         leaderboard: rM
+       } = MM;
+       const iM = function() {
+           const MM = (0, nM.f)("lobbyManage"),
+             [rM, iM] = (0, OM.useReducer)((MM => MM + 1), 0),
+             [SM] = (0, OM.useState)((() => new QM.b(iM)));
+           return (0, OM.useEffect)((() => {
+             const MM = SM.nextDeadline();
+             if (null === MM) return;
+             const rM = setTimeout((() => {
+               SM.expire(Date.now()), iM()
+             }), Math.max(0, MM - Date.now()));
+             return () => {
+ ... (41 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L144` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1629) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L144)

```diff
-   37399: (QQ, WQ, XQ) => {
+   37498: (MM, rM, iM) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L146` → after: `L1631-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1631-L1632) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L146)

```diff
-       b: () => zQ
+       b: () => zM,
+       e: () => nM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L148-L171` → after: `L1634-L1663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1634-L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1634-L1663) · [Before (L148-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L148-L171)

```diff
-     const wQ = "undefined" !== typeof WeakRef;
-     class qQ {
-       constructor(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           XQ = arguments.length > 2 ? arguments[2] : void 0,
-           wQ = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(QQ, WQ, XQ, wQ)
-       }
-       initialize(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           XQ = arguments.length > 2 ? arguments[2] : void 0,
-           wQ = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = QQ, this.skipNextObservers = WQ, this.target = XQ, this.currentTarget = wQ, this
-       }
-     }
-     class TQ {
- ... (8 more removed lines; see GitHub link above)
+     var OM = iM(1548),
+       SM = iM(2067),
+       jM = iM(2039);
+     const aM = 1e4;
+     let PM = 0;
+ 
+     function nM(MM) {
+       const rM = ++PM;
+       return new Promise((iM => {
+         const PM = rM => {
+             nM(), clearTimeout(QM), !1 === (null === rM || void 0 === rM ? void 0 : rM.ok) && (0, OM.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: MM.type
+             }), iM(rM)
+           },
+           nM = SM.d.subscribe("lobbyManage", (MM => {
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L187-L188` → after: `L1670-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1670-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1670-L1671) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L187-L188)

```diff
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = WQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nM;
+         this.onChange = MM, this.sendAction = rM, this.pending = new Map, this.statuses = new Map
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L190-L203` → after: `L1673-L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1673-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1673-L1690) · [Before (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L190-L203)

```diff
-       add(QQ) {
-         let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           XQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!QQ) return null;
-         const qQ = new TQ(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         qQ.unregisterOnNextCall = XQ, WQ ? this._observers.unshift(qQ) : this._observers.push(qQ), this._onObserverAdded && this._onObserverAdded(qQ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qQ, this._lastNotifiedValue);
-         const zQ = wQ ? new WeakRef(this) : {
-           deref: () => this
-         };
-         return qQ._remove = function() {
-           let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const WQ = zQ.deref();
-           WQ && (QQ ? WQ.remove(qQ) : WQ._remove(qQ))
-         }, qQ
+       send(MM, rM, iM) {
+         var OM;
+         return this.statuses.delete(rM), this.pending.set(rM, (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 0) + 1), this.sendAction(MM).then((MM => {
+           var OM;
+           const SM = null !== MM && void 0 !== MM ? MM : {
+               requestId: -1,
+               ok: !1,
+               message: QM
+             },
+             jM = (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 1) - 1;
+           jM > 0 ? this.pending.set(rM, jM) : this.pending.delete(rM);
+           const aM = !SM.ok || SM.message.length > 0 ? SM.message : null === iM ? null : [iM];
+           return null !== aM && this.statuses.set(rM, {
+             ok: SM.ok,
+             text: aM,
+             until: Date.now() + 4e3
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L205-L206` → after: `L1692-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1692-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1692-L1696) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L205-L206)

```diff
-       addOnce(QQ) {
-         return this.add(QQ, void 0, void 0, void 0, !0)
+       show(MM, rM) {
+         this.statuses.set(MM, {
+           ...rM,
+           until: Date.now() + 4e3
+         }), this.onChange()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L208-L211` → after: `L1698-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1698-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1698-L1699) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L208-L211)

```diff
-       remove(QQ) {
-         if (!QQ) return !1;
-         QQ._remove = null;
-         return -1 !== this._observers.indexOf(QQ) && (this._deferUnregister(QQ), !0)
+       expire(MM) {
+         for (const [rM, iM] of this.statuses) iM.until <= MM && this.statuses.delete(rM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L213-L216` → after: `L1701-L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1701-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1701-L1705) · [Before (L213-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L213-L216)

```diff
-       removeCallback(QQ, WQ) {
-         for (let XQ = 0; XQ < this._observers.length; XQ++) {
-           const wQ = this._observers[XQ];
-           if (!wQ._willBeUnregistered && (wQ.callback === QQ && (!WQ || WQ === wQ.scope))) return this._deferUnregister(wQ), !0
+       nextDeadline() {
+         let MM = null;
+         for (const iM of this.statuses.values()) {
+           var rM;
+           MM = Math.min(null !== (rM = MM) && void 0 !== rM ? rM : 1 / 0, iM.until)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L218-L247` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1707) · [Before (L218-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L218-L247)

```diff
-         return !1
-       }
-       _deferUnregister(QQ) {
-         QQ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, QQ.unregisterOnNextCall = !1, QQ._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(QQ)
-         }), 0))
-       }
-       _remove(QQ) {
-         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!QQ) return !1;
-         const XQ = this._observers.indexOf(QQ);
-         return -1 !== XQ && (WQ && this._numObserversMarkedAsDeleted--, this._observers.splice(XQ, 1), !0)
-       }
-       makeObserverTopPriority(QQ) {
-         this._remove(QQ, !1), this._observers.unshift(QQ)
-       }
- ... (14 more removed lines; see GitHub link above)
+         return MM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L249-L261` → after: `L1709-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1709-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1709-L1713) · [Before (L249-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L249-L261)

```diff
-       notifyObserver(QQ, WQ) {
-         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WQ), QQ._willBeUnregistered) return;
-         const wQ = this._eventState;
-         wQ.mask = XQ, wQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(WQ, wQ)
-       }
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
-       }
-       clear() {
-         for (; this._observers.length;) {
-           const QQ = this._observers.pop();
-           QQ && (QQ._remove = null)
+       statusOf(MM, rM) {
+         const iM = this.statuses.get(MM);
+         return !iM || iM.until <= rM ? null : {
+           ok: iM.ok,
+           text: iM.text
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L265-L266` → after: `L1716-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1716-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1716-L1717) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       isPending(MM) {
+         return this.pending.has(MM)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L268-L276` → after: `L1719-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L1719-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L1719-L2018) · [Before (L268-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L268-L276)

```diff
-       clone() {
-         const QQ = new zQ;
-         return QQ._observers = this._observers.slice(0), QQ
-       }
-       hasSpecificMask() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const WQ of this._observers)
-           if (WQ.mask & QQ || WQ.mask === QQ) return !0;
-         return !1
+     }
+   },
+   37678: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => LM
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1763),
+       PM = iM(1520),
+       nM = iM(1396),
+       QM = iM(1398),
+       zM = iM(1303);
+ 
+     function LM(MM) {
+ ... (284 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L280-L285` → after: `L2097-L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2097-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2097-L2101) · [Before (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L280-L285)

```diff
-   61523: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       AsyncLoop: () => wQ.c,
-       RegisterTools: () => wQ.f,
-       Tools: () => wQ.g,
-       className: () => wQ.k
+   37647: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM,
+       g: () => aM,
+       j: () => QM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L287-L288` → after: `L2103-L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2103-L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2103-L2185) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L287-L288)

```diff
-     var wQ = XQ(40357);
-     (0, wQ.f)()
+     var OM = iM(44),
+       SM = iM(4961),
+       jM = iM(1963);
+ 
+     function aM(MM) {
+       const rM = {
+         lobbyName: MM,
+         answer: null,
+         response: SM.b.getSocialSettings(MM)
+       };
+       return rM.response.then((MM => {
+         rM.answer = MM
+       })), rM
+     }
+     const PM = new Map;
+ 
+ ... (67 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L290` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2187) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L290)

```diff
-   37418: (QQ, WQ, XQ) => {
+   37687: (MM, rM, iM) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L292` → after: `L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2189) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L292)

```diff
-       b: () => TQ,
+       c: () => aM,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L295` → after: `L2192-L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2192-L2193) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L295)

```diff
-     const wQ = {};
+     var OM = iM(143);
+     const SM = new Map;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L298` → after: `L2196-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2196-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2196-L2198) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L298)

```diff
-       wQ[QQ] = WQ
+       var iM;
+       const OM = null !== (iM = SM.get(MM)) && void 0 !== iM ? iM : new Map;
+       OM.set(rM, Date.now()), SM.set(MM, OM)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L302` → after: `L2202-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2202-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/242.js#L2202-L2302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/242.js#L302)

```diff
-       return wQ[QQ]
+       const rM = SM.get(MM);
+       if (!rM) return [];
+       const iM = Date.now();
+       for (const [SM, jM] of rM) iM - jM >= OM.t && rM.delete(SM);
+       return [...rM.keys()]
+     }
+   },
+   37654: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       const iM = rM.toLowerCase();
+       for (const OM of MM)
+         if (OM.toLowerCase() === iM) return !0;
+       return !1
+     }
+ 
+     function SM(MM, rM, iM) {
+ ... (85 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   37446: (QQ, WQ, XQ) => {
+   37821: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L8` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L7-L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L8)

```diff
-       e: () => qQ
+       e: () => CM,
+       g: () => eM,
+       k: () => hM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L10-L15` → after: `L11-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L11-L312) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L10-L15)

```diff
-     const wQ = 1024,
-       qQ = 16,
-       TQ = 36e4;
-     class zQ {
-       constructor(QQ) {
-         this.boneCount = QQ, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * QQ), this.position = new Float64Array(3 * QQ), this.scale = new Float64Array(3 * QQ).fill(1), this.touched = new Uint8Arra … [truncated]
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(44),
+       aM = iM(65),
+       PM = iM(1446),
+       nM = iM(1520),
+       QM = iM(1440),
+       zM = iM(1287),
+       LM = iM(1188),
+       mM = iM(37828),
+       HM = iM(1303);
+ 
+     function hM(MM) {
+       const [rM, iM] = (0, jM.useState)((() => (0, mM.n)(MM)));
+       return (0, jM.useEffect)((() => (iM((0, mM.n)(MM)), (0, mM.G)((() => {
+         iM((0, mM.n)(MM))
+ ... (286 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17-L25` → after: `L314-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L314-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L314-L350) · [Before (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L17-L25)

```diff
-       clampToLimits() {
-         for (let QQ = 0; QQ < this.boneCount; QQ++)
-           if (0 !== this.touched[QQ])
-             for (let WQ = 3 * QQ; WQ < 3 * QQ + 3; WQ++) {
-               const QQ = this.rotation[WQ],
-                 XQ = this.position[WQ],
-                 zQ = this.scale[WQ];
-               QQ >= -36e4 && QQ <= TQ || (this.rotation[WQ] = FQ(QQ, TQ)), XQ >= -1024 && XQ <= wQ || (this.position[WQ] = FQ(XQ, wQ)), zQ >= -qQ && zQ <= qQ || (this.scale[WQ] = FQ(zQ, qQ, 1))
-             }
+       MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
+     }
+ 
+     function mM() {
+       return zM
+     }
+ 
+     function HM() {
+       return PM().filter((MM => MM.panel && !MM.disabled))
+     }
+ 
+     function hM(MM) {
+       const rM = HM(),
+         iM = rM.findIndex((MM => MM.id === nM));
+       return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
+     }
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L27-L32` → after: `L352-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L352-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L352-L383) · [Before (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L27-L32)

```diff
-       reset() {
-         for (let QQ = 0; QQ < this.boneCount; QQ++)
-           if (0 !== this.touched[QQ]) {
-             this.touched[QQ] = 0;
-             for (let WQ = 3 * QQ; WQ < 3 * QQ + 3; WQ++) this.rotation[WQ] = 0, this.position[WQ] = 0, this.scale[WQ] = 1
-           }
+     }
+   },
+   37542: (MM, rM, iM) => {
+     iM.d(rM, {
+       A: () => HM,
+       C: () => zM,
+       e: () => PM,
+       g: () => lM,
+       k: () => dM,
+       n: () => yM,
+       p: () => mM,
+       t: () => QM,
+       w: () => JM
+     });
+     var OM = iM(19),
+       SM = iM(22),
+ ... (16 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L35-L37` → after: `L386-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L386-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L386-L394) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L35-L37)

```diff
-     class sQ {
-       constructor(QQ) {
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * QQ), this.position = new Float64Arra … [truncated]
+     let LM = null;
+ 
+     function mM() {
+       return LM
+     }
+ 
+     function HM(MM) {
+       return LM = MM, () => {
+         LM === MM && (LM = null)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L39-L54` → after: `L396-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L396-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L396-L484) · [Before (L39-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L39-L54)

```diff
-       touch(QQ, WQ, XQ) {
-         0 === this.touched[QQ] && (this.touched[QQ] = 1, this.touchedBones[this.touchedCount++] = QQ), this.boneWeight[QQ] += WQ, XQ && (this.overrides[QQ] = 1)
-       }
-       applyTo(QQ, WQ, XQ) {
-         let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let qQ = 0; qQ < this.touchedCount; qQ++) {
-           const TQ = this.touchedBones[qQ],
-             zQ = this.boneWeight[TQ];
-           if (XQ || 1 === this.overrides[TQ]) {
-             const XQ = WQ * Math.min(1, zQ);
-             for (let WQ = 3 * TQ; WQ < 3 * TQ + 3; WQ++) QQ.rotation[WQ] += (this.rotation[WQ] / zQ - QQ.rotation[WQ]) * XQ, QQ.position[WQ] += (this.position[WQ] / zQ - QQ.position[WQ]) * XQ, QQ.scale[WQ] += (1 + this.scaleDelta[WQ] / zQ - QQ.scale[WQ]) * XQ
-           } else {
-             const XQ = wQ && zQ > 1 ? WQ / zQ : WQ;
-             for (let WQ = 3 * TQ; WQ < 3 * TQ + 3; WQ++) QQ.rotation[WQ] += this.rotation[WQ] * XQ, QQ.position[WQ] += this.position[WQ] * XQ, QQ.scale[WQ] *= 1 + this.scaleDelta[WQ] * XQ
-           }
-           QQ.touched[TQ] = 1
+     }
+     let hM = !1;
+ 
+     function JM() {
+       const MM = OM.d.get("openInGameMenuName");
+       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
+     }
+ 
+     function dM() {
+       EM(!1)
+     }
+ 
+     function yM() {
+ ... (73 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L57-L63` → after: `L487-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L487-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/243.js#L487-L584) · [Before (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/243.js#L57-L63)

```diff
-       clear() {
-         for (let QQ = 0; QQ < this.touchedCount; QQ++) {
-           const WQ = this.touchedBones[QQ];
-           this.touched[WQ] = 0, this.overrides[WQ] = 0, this.boneWeight[WQ] = 0;
-           for (let QQ = 3 * WQ; QQ < 3 * WQ + 3; QQ++) this.rotation[QQ] = 0, this.position[QQ] = 0, this.scaleDelta[QQ] = 0
-         }
-         this.touchedCount = 0
+       return mM
+     }
+ 
+     function GM(MM) {
+       const rM = UM();
+       rM[MM] || (mM = {
+         ...rM,
+         [MM]: !0
+       }, OM.g.setItem(QM, mM))
+     }
+ 
+     function CM(MM) {
+       return "docsOverview" === MM ? jM : "aiHelperOverview" === MM ? aM : HM ? SM[HM] : []
+     }
+ 
+     function eM(MM) {
+ ... (82 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L37` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L153) · [Before (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L37)

```diff
-   61549: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       DEVTOOLS_SHADERS: () => TQ,
-       registerDevtoolsShader: () => zQ
-     });
-     var wQ = XQ(40126),
-       qQ = XQ(37468);
-     const TQ = {
-       devtoolsNormal: function(QQ) {
-         return {
-           vertex: `\n\t\t\t${(0,qQ.d)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.d)(QQ,"normal","vec3")}\n\t\t\t${(0,qQ.Fb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Fb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Nb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Ob)(QQ,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,qQ.Nb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Q)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.A)(QQ,"vec3","normalColor",`abs(${(0,qQ.T)(QQ,"vNormal")})`)}\n\t\t\t\t${(0,qQ.L)(QQ)} = ${(0,qQ.l)(QQ,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(QQ) {
-         return {
- ... (18 more removed lines; see GitHub link above)
+   37572: MM => {
+     MM.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (134 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L40-L82` → after: `L156-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L156-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L156-L164) · [Before (L40-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L40-L82)

```diff
-   37468: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       $: () => qQ,
-       A: () => gQ,
-       Ab: () => UQ,
-       C: () => dQ,
-       D: () => AQ,
-       Eb: () => PQ,
-       Fb: () => VQ,
-       H: () => TQ,
-       Jb: () => iQ,
-       L: () => CQ,
-       Nb: () => yQ,
-       O: () => EQ,
-       Ob: () => pQ,
-       Q: () => GQ,
- ... (27 more removed lines; see GitHub link above)
+   37570: (MM, rM, iM) => {
+     var OM = iM(37572),
+       SM = iM(37577),
+       jM = Object.hasOwnProperty,
+       aM = Object.create(null);
+     for (var PM in OM) jM.call(OM, PM) && (aM[OM[PM]] = PM);
+     var nM = MM.exports = {
+       to: {},
+       get: {}
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L90-L112` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L168) · [Before (L90-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L90-L112)

```diff
-       return qQ(QQ) ? XQ : WQ
-     }
-     const zQ = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
-       ["vec3", "vec3f"],
-       ["vec4", "vec4f"],
-       ["mat2", "mat2x2f"],
-       ["mat3", "mat3x3f"],
-       ["mat4", "mat4x4f"]
-     ]);
- 
-     function sQ(QQ, WQ) {
-       if (!qQ(QQ)) return WQ;
-       const XQ = zQ.get(WQ);
- ... (7 more removed lines; see GitHub link above)
+       return Math.min(Math.max(rM, MM), iM)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L115-L128` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L171-L173) · [Before (L115-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L115-L128)

```diff
-     function PQ(QQ, WQ) {
-       return FQ(QQ, "int", WQ)
-     }
- 
-     function gQ(QQ, WQ, XQ, wQ, TQ) {
-       return qQ(QQ) ? `var ${XQ}: ${sQ(QQ,WQ)} = ${wQ};` : `${jQ(QQ,TQ)}${WQ} ${XQ} = ${wQ};`
-     }
- 
-     function JQ(QQ, WQ, XQ) {
-       return qQ(QQ) ? `var ${XQ}: ${sQ(QQ,WQ)};` : `${WQ} ${XQ};`
-     }
- 
-     function rQ(QQ, WQ, XQ, wQ) {
-       return qQ(QQ) ? `const ${XQ}: ${sQ(QQ,WQ)} = ${wQ};` : `const ${WQ} ${XQ} = ${wQ};`
+     function zM(MM) {
+       var rM = Math.round(MM).toString(16).toUpperCase();
+       return rM.length < 2 ? "0" + rM : rM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L130-L133` → after: `L175-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L175-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L175-L185) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L130-L133)

```diff
- 
-     function IQ(QQ, WQ, XQ, wQ, TQ) {
-       if (qQ(QQ)) {
-         return `fn ${XQ}(${wQ.map((WQ=>`${WQ.name}: ${sQ(QQ,WQ.type)}`)).join(", ")}) -> ${sQ(QQ,WQ)} {${TQ}}`
+     nM.get = function(MM) {
+       var rM, iM;
+       switch (MM.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           rM = nM.get.hsl(MM), iM = "hsl";
+           break;
+         case "hwb":
+           rM = nM.get.hwb(MM), iM = "hwb";
+           break;
+         default:
+           rM = nM.get.rgb(MM), iM = "rgb"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L135` → after: `L187-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L187-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L187-L249) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L135)

```diff
-       return `${WQ} ${XQ}(${wQ.map((QQ=>`${QQ.type} ${QQ.name}`)).join(", ")}) {${TQ}}`
+       return rM ? {
+         model: iM,
+         value: rM
+       } : null
+     }, nM.get.rgb = function(MM) {
+       if (!MM) return null;
+       var rM, iM, SM, aM = [0, 0, 0, 1];
+       if (rM = MM.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
+         for (SM = rM[2], rM = rM[1], iM = 0; iM < 3; iM++) {
+           var PM = 2 * iM;
+           aM[iM] = parseInt(rM.slice(PM, PM + 2), 16)
+         }
+         SM && (aM[3] = parseInt(SM, 16) / 255)
+       } else if (rM = MM.match(/^#([a-f0-9]{3,4})$/i)) {
+         for (SM = (rM = rM[1])[3], iM = 0; iM < 3; iM++) aM[iM] = parseInt(rM[iM] + rM[iM], 16);
+         SM && (aM[3] = parseInt(SM + SM, 16) / 255)
+ ... (47 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L139-L147` → after: `L261-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L261-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L261-L293) · [Before (L139-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L139-L147)

```diff
-       return !WQ || qQ(QQ) ? "" : `${WQ} `
-     }
- 
-     function BQ(QQ, WQ, XQ, wQ) {
-       return qQ(QQ) ? `attribute ${WQ}: ${sQ(QQ,XQ)};` : `attribute ${jQ(QQ,wQ)}${XQ} ${WQ};`
-     }
- 
-     function yQ(QQ, WQ, XQ, wQ) {
-       return qQ(QQ) ? `varying ${WQ}: ${sQ(QQ,XQ)};` : `varying ${jQ(QQ,wQ)}${XQ} ${WQ};`
+       if (!(this instanceof nM)) return new nM(MM, rM);
+       if (rM && rM in jM && (rM = null), rM && !(rM in SM)) throw new Error("Unknown model: " + rM);
+       let iM, QM;
+       if (null == MM) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (MM instanceof nM) this.model = MM.model, this.color = [...MM.color], this.valpha = MM.valpha;
+       else if ("string" === typeof MM) {
+         const rM = OM.get(MM);
+         if (null === rM) throw new Error("Unable to parse color from string: " + MM);
+         this.model = rM.model, QM = SM[this.model].channels, this.color = rM.value.slice(0, QM), this.valpha = "number" === typeof rM.value[QM] ? rM.value[QM] : 1
+       } else if (MM.length > 0) {
+         this.model = rM || "rgb", QM = SM[this.model].channels;
+         const iM = Array.prototype.slice.call(MM, 0, QM);
+         this.color = mM(iM, QM), this.valpha = "number" === typeof MM[QM] ? MM[QM] : 1
+       } else if ("number" === typeof MM) this.model = "rgb", this.color = [MM >> 16 & 255, MM >> 8 & 255, 255 & MM], this.valpha = 1;
+       else {
+         this.valpha = 1;
+ ... (17 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L149-L151` → after: `L295-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L295-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L295-L475) · [Before (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L149-L151)

```diff
- 
-     function VQ(QQ, WQ, XQ) {
-       return qQ(QQ) ? `uniform ${WQ}: ${sQ(QQ,XQ)};` : `uniform ${XQ} ${WQ};`
+     nM.prototype = {
+       toString() {
+         return this.string()
+       },
+       toJSON() {
+         return this[this.model]()
+       },
+       string(MM) {
+         let rM = this.model in OM.to ? this : this.rgb();
+         rM = rM.round("number" === typeof MM ? MM : 1);
+         const iM = 1 === rM.valpha ? rM.color : [...rM.color, this.valpha];
+         return OM.to[rM.model](iM)
+       },
+       percentString(MM) {
+         const rM = this.rgb().round("number" === typeof MM ? MM : 1),
+           iM = 1 === rM.valpha ? rM.color : [...rM.color, this.valpha];
+ ... (165 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L155-L168` → after: `L479-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L479-L482) · [Before (L155-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L155-L168)

```diff
-       return qQ(QQ) ? "vertexOutputs.position" : "gl_Position"
-     }
- 
-     function pQ(QQ, WQ) {
-       return qQ(QQ) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${WQ}}` : `void main() {${WQ}}`
-     }
- 
-     function GQ(QQ, WQ) {
-       return qQ(QQ) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${WQ}}` : `void main() {${WQ}}`
-     }
- 
-     function UQ(QQ, WQ, XQ) {
-       if (qQ(QQ)) {
-         return [`var ${WQ}Sampler: sampler;`, `var ${WQ}: ${"2dArray"===XQ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+       return function(rM) {
+         return function(MM, rM) {
+           return Number(MM.toFixed(rM))
+         }(rM, MM)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L174-L186` → after: `L487-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L487-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L487-L493) · [Before (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L174-L186)

```diff
-       return qQ(QQ) ? `textureSample(${WQ}, ${WQ}Sampler, ${XQ})` : `texture2D(${WQ}, ${XQ})`
-     }
- 
-     function vQ(QQ, WQ, XQ, wQ, TQ) {
-       if (qQ(QQ)) {
-         return `${TQ?"textureSampleLevel":"textureSample"}(${WQ}, ${WQ}Sampler, ${XQ}, ${PQ(QQ,`round(${wQ})`)}${TQ?`, ${TQ}`:""})`
-       }
-       const zQ = FQ(QQ, "vec3", XQ, wQ);
-       return TQ ? `textureLod(${WQ}, ${zQ}, ${TQ})` : `texture(${WQ}, ${zQ})`
-     }
- 
-     function dQ(QQ) {
-       return qQ(QQ) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
+       MM = Array.isArray(MM) ? MM : [MM];
+       for (const OM of MM)(PM[OM] || (PM[OM] = []))[rM] = iM;
+       return MM = MM[0],
+         function(OM) {
+           let SM;
+           return void 0 !== OM ? (iM && (OM = iM(OM)), SM = this[MM](), SM.color[rM] = OM, SM) : (SM = this[MM]().color[rM], iM && (SM = iM(SM)), SM)
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L190-L193` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L497-L498) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L190-L193)

```diff
-       return qQ(QQ) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       return function(rM) {
+         return Math.max(0, Math.min(MM, rM))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L198-L218` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L503-L504) · [Before (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L198-L218)

```diff
-       return qQ(QQ) ? `vertexInputs.${WQ}` : WQ
-     }
- 
-     function lQ(QQ, WQ) {
-       return qQ(QQ) ? `vertexOutputs.${WQ}` : WQ
-     }
- 
-     function hQ(QQ, WQ) {
-       return qQ(QQ) ? `fragmentInputs.${WQ}` : WQ
-     }
- 
-     function iQ(QQ, WQ) {
-       return qQ(QQ) ? `uniforms.${WQ}` : WQ
-     }
- 
-     function cQ(QQ, WQ, XQ) {
- ... (5 more removed lines; see GitHub link above)
+       for (let iM = 0; iM < rM; iM++) "number" !== typeof MM[iM] && (MM[iM] = 0);
+       return MM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L220-L222` → after: `L506-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L506-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L506-L587) · [Before (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L220-L222)

```diff
- 
-     function RQ(QQ) {
-       return qQ(QQ) ? "mesh.visibility" : "visibility"
+     MM.exports = nM
+   },
+   37597: (MM, rM, iM) => {
+     const OM = iM(37604),
+       SM = {};
+     for (const aM of Object.keys(OM)) SM[OM[aM]] = aM;
+     const jM = {
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+       },
+       hsl: {
+         channels: 3,
+         labels: "hsl"
+       },
+       hsv: {
+ ... (66 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L224-L226` → after: `L589-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L589-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L589-L900) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L224-L226)

```diff
- 
-     function EQ(QQ) {
-       return qQ(QQ) ? "fragmentInputs.position" : "gl_FragCoord"
+     jM.rgb.hsl = function(MM) {
+       const rM = MM[0] / 255,
+         iM = MM[1] / 255,
+         OM = MM[2] / 255,
+         SM = Math.min(rM, iM, OM),
+         jM = Math.max(rM, iM, OM),
+         aM = jM - SM;
+       let PM, nM;
+       jM === SM ? PM = 0 : rM === jM ? PM = (iM - OM) / aM : iM === jM ? PM = 2 + (OM - rM) / aM : OM === jM && (PM = 4 + (rM - iM) / aM), PM = Math.min(60 * PM, 360), PM < 0 && (PM += 360);
+       const QM = (SM + jM) / 2;
+       return nM = jM === SM ? 0 : QM <= .5 ? aM / (jM + SM) : aM / (2 - jM - SM), [PM, 100 * nM, 100 * QM]
+     }, jM.rgb.hsv = function(MM) {
+       let rM, iM, OM, SM, jM;
+       const aM = MM[0] / 255,
+         PM = MM[1] / 255,
+         nM = MM[2] / 255,
+ ... (296 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L230-L234` → after: `L943-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L943-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L943-L961) · [Before (L230-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L230-L234)

```diff
-       return qQ(QQ) ? "fragmentOutputs.color" : "gl_FragColor"
-     }
- 
-     function uQ(QQ, WQ) {
-       return qQ(QQ) ? `dpdx(${WQ})` : `dFdx(${WQ})`
+       const rM = function() {
+           const MM = {},
+             rM = Object.keys(OM);
+           for (let iM = rM.length, OM = 0; OM < iM; OM++) MM[rM[OM]] = {
+             distance: -1,
+             parent: null
+           };
+           return MM
+         }(),
+         iM = [MM];
+       for (rM[MM].distance = 0; iM.length;) {
+         const MM = iM.pop(),
+           SM = Object.keys(OM[MM]);
+         for (let OM = SM.length, jM = 0; jM < OM; jM++) {
+           const OM = SM[jM],
+             aM = rM[OM]; - 1 === aM.distance && (aM.distance = rM[MM].distance + 1, aM.parent = MM, iM.unshift(OM))
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L238` → after: `L965-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L965-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L965-L967) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L238)

```diff
-       return qQ(QQ) ? `dpdy(${WQ})` : `dFdy(${WQ})`
+       return function(iM) {
+         return rM(MM(iM))
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L242-L250` → after: `L971-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L971-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L971-L975) · [Before (L242-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L242-L250)

```diff
-       return qQ(QQ) ? `inverseSqrt(${WQ})` : `inversesqrt(${WQ})`
-     }
- 
-     function fQ(QQ, WQ, XQ, wQ) {
-       return qQ(QQ) ? `select(${wQ}, ${XQ}, ${WQ})` : `((${WQ}) ? (${XQ}) : (${wQ}))`
-     }
- 
-     function SQ(QQ, WQ, XQ) {
-       return qQ(QQ) ? `((${WQ}) - (${XQ}) * floor((${WQ}) / (${XQ})))` : `mod(${WQ}, ${XQ})`
+       const iM = [rM[MM].parent, MM];
+       let SM = OM[rM[MM].parent][MM],
+         aM = rM[MM].parent;
+       for (; rM[aM].parent;) iM.unshift(rM[aM].parent), SM = jM(OM[rM[aM].parent][aM], SM), aM = rM[aM].parent;
+       return SM.conversion = iM, SM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L252-L258` → after: `L977-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L977-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L977-L985) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L252-L258)

```diff
- 
-     function tQ(QQ, WQ, XQ) {
-       return qQ(QQ) ? `${WQ} = vec4f(${XQ}, ${WQ}.a);` : `${WQ}.rgb = ${XQ};`
-     }
- 
-     function oQ(QQ, WQ, XQ) {
-       return qQ(QQ) ? `${WQ} = vec4f(${WQ}.rgb * (${XQ}), ${WQ}.a);` : `${WQ}.rgb *= ${XQ};`
+     MM.exports = function(MM) {
+       const rM = SM(MM),
+         iM = {},
+         OM = Object.keys(rM);
+       for (let SM = OM.length, jM = 0; jM < SM; jM++) {
+         const MM = OM[jM];
+         null !== rM[MM].parent && (iM[MM] = aM(MM, rM))
+       }
+       return iM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L260-L262` → after: `L987-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L987-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L987-L1137) · [Before (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L260-L262)

```diff
- 
-     function eQ(QQ, WQ, XQ) {
-       return qQ(QQ) ? `${WQ} = vec4f(${XQ}, ${WQ}.w);` : `${WQ}.xyz = ${XQ};`
+   },
+   37604: MM => {
+     MM.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+ ... (135 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L265-L277` → after: `L1140-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L1140-L1153) · [Before (L265-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L265-L277)

```diff
-   40126: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ
-     });
-     class wQ {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
+   37577: (MM, rM, iM) => {
+     var OM = iM(37585),
+       SM = Array.prototype.concat,
+       jM = Array.prototype.slice,
+       aM = MM.exports = function(MM) {
+         for (var rM = [], iM = 0, aM = MM.length; iM < aM; iM++) {
+           var PM = MM[iM];
+           OM(PM) ? rM = SM.call(rM, jM.call(PM)) : rM.push(PM)
+         }
+         return rM
+       };
+     aM.wrap = function(MM) {
+       return function() {
+         return MM(aM(arguments))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L280` → after: `L1156-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1156-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/244.js#L1156-L1160) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/244.js#L280)

```diff
-     wQ.ShadersRepository = "src/Shaders/", wQ.ShadersStore = {}, wQ.IncludesShadersStore = {}, wQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", wQ.ShadersStoreWGSL = {}, wQ.IncludesShadersStoreWGSL = {}
+   },
+   37585: MM => {
+     MM.exports = function(MM) {
+       return !(!MM || "string" === typeof MM) && (MM instanceof Array || Array.isArray(MM) || MM.length >= 0 && (MM.splice instanceof Function || Object.getOwnPropertyDescriptor(MM, MM.length - 1) && "String" !== MM.constructor.name))
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/245.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/245.js#L4)

```diff
-   37539: (QQ, WQ, XQ) => {
+   37705: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L6-L7` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/245.js#L6-L14) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/245.js#L6-L7)

```diff
-       Color3: () => wQ.b,
-       d: () => wQ.d
+       b: () => Pr,
+       f: () => lr,
+       g: () => mr,
+       j: () => Qr,
+       m: () => Hr,
+       p: () => Lr,
+       q: () => Er,
+       r: () => zr,
+       v: () => Jr
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L9-L10` → after: `L16-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L16-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/245.js#L16-L217) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/245.js#L9-L10)

```diff
-     var wQ = XQ(37546);
-     (0, wQ.h)()
+     const OM = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       SM = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       jM = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       aM = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       PM = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       nM = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       QM = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       zM = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       LM = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       mM = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       HM = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       hM = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       JM = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       dM = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       yM = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       lM = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (186 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L4)

```diff
-   41280: (QQ, WQ, XQ) => {
+   40765: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L6)

```diff
-       noaDevTools: () => JQ
+       c: () => OM,
+       f: () => SM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L8-L12` → after: `L9-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L9-L25) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L8-L12)

```diff
-     var wQ = XQ(37820),
-       qQ = XQ(37804),
-       TQ = XQ(2997),
-       zQ = XQ(1802),
-       sQ = XQ(41184);
+     const OM = "The world isn't loaded, so no blocks can be seen.",
+       SM = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40140: (MM, rM, iM) => {
+     function OM(MM) {
+       return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   37767: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       f: () => SM
+     });
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L15-L39` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L28) · [Before (L15-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L15-L39)

```diff
-       const {
-         nj: WQ
-       } = QQ, XQ = WQ.engine, wQ = {
-         width: XQ.getRenderWidth(),
-         height: XQ.getRenderHeight()
-       };
-       return {
-         canvas: XQ.getRenderingCanvas(),
-         maxTextureSize: XQ.getCaps().maxTextureSize,
-         pj: () => !QQ.lD,
-         resize: (QQ, WQ) => {
-           XQ.setSize(QQ, WQ)
-         },
-         restoreSize: () => {
-           XQ.setSize(wQ.width, wQ.height), WQ.resize()
-         },
- ... (9 more removed lines; see GitHub link above)
+       OM = MM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L44-L229` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L32) · [Before (L44-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L44-L229)

```diff
-       let {
-         width: PQ,
-         height: gQ,
-         colouring: JQ
-       } = WQ;
-       const rQ = "normals" === JQ,
-         IQ = "depth" === JQ;
-       return new Promise((WQ => {
-         try {
-           const jQ = (0, TQ.f)();
-           if (jQ.nj.xj) return "screenshot" !== QQ || null !== JQ ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void WQ()) : void(0, sQ.g)(FQ(jQ), PQ, gQ).finally(WQ);
-           const BQ = jQ.nj.engine,
-             yQ = jQ.nj.sE(),
-             VQ = PQ,
-             DQ = gQ;
-           Promise.all([Promise.all([XQ.e(262), XQ.e(263), XQ.e(242)]).then((() => XQ(61523))), Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(263), XQ.e(260), XQ.e(264), XQ.e(267), XQ.e(320), XQ.e(247)]).then((() => XQ(61526))), Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), X … [truncated]
- ... (170 more removed lines; see GitHub link above)
+       return OM(MM, rM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L231-L238` → after: `L34-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L34-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L34-L71) · [Before (L231-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L231-L238)

```diff
-     const JQ = new class {
-       constructor() {
-         this.tools = PQ.ALL_DEV_TOOLS
-       }
-       downloadScene(QQ, WQ) {
-         return gQ(QQ, WQ)
-       }
-       async setAmbientLightIntensity(QQ) {
+   },
+   41691: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => JM,
+       d: () => EM,
+       e: () => lM,
+       i: () => dM
+     });
+     var OM = iM(22),
+       SM = iM(41695),
+       jM = iM(41677),
+       aM = iM(41697),
+       PM = iM(41682),
+       nM = iM(41704),
+       QM = iM(41712);
+ 
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L240-L242` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L73-L79) · [Before (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L240-L242)

```diff
-           Color3: WQ
-         } = await Promise.all([XQ.e(241), XQ.e(245)]).then((() => XQ(37539)));
-         (0, TQ.f)().nj.sE().ambientColor = WQ.FromArray([QQ, QQ, QQ])
+           cachedPasskey: rM,
+           ...OM
+         } = yM(MM.pos);
+         iM = {
+           oa: null !== rM && void 0 !== rM ? rM : [0, 0, 0, 0],
+           ...OM
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L244-L247` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L81-L84) · [Before (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L244-L247)

```diff
-       capturePhoto(QQ, WQ, XQ) {
-         return function(QQ, WQ, XQ, wQ) {
-           return (0, sQ.e)(FQ(QQ), WQ, XQ, wQ)
-         }((0, TQ.f)(), QQ, WQ, XQ)
+       return {
+         ...MM,
+         type: rM,
+         ironChest: iM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L251` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L192) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L251)

```diff
-   41184: (QQ, WQ, XQ) => {
+   41728: (MM, rM, iM) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L253-L254` → after: `L194-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L194-L196) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L253-L254)

```diff
-       e: () => sQ,
-       g: () => FQ
+       b: () => nM,
+       f: () => aM,
+       h: () => PM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L256-L259` → after: `L198-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L198-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L198-L220) · [Before (L256-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L256-L259)

```diff
-     var wQ = XQ(1812);
-     const qQ = 33177600,
-       TQ = 3e4;
-     let zQ = !1;
+     var OM = iM(41669),
+       SM = iM(5188),
+       jM = iM(41677);
+ 
+     function aM() {
+       var MM;
+       const rM = null === (MM = (0, jM.e)()) || void 0 === MM ? void 0 : MM.api.localId;
+       return void 0 === rM || rM === OM.Nc ? null : String(rM)
+     }
+ 
+     function PM(MM) {
+       const rM = (0, jM.e)();
+       if (null !== rM) return MM(rM);
+       let iM = null;
+       const OM = (0, SM.x)((() => {
+         const rM = (0, jM.e)();
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L262-L316` → after: `L223-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L223-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L223-L234) · [Before (L262-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L262-L316)

```diff
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: sQ = 1,
-         type: FQ = "image/png",
-         quality: PQ
-       } = wQ;
-       return QQ.pj() ? zQ ? Promise.reject(new Error("A screenshot is already being taken")) : (zQ = !0, new Promise(((wQ, gQ) => {
-         let JQ, rQ = 2,
-           IQ = null;
-         const jQ = () => {
-           var WQ;
-           zQ = !1, null === (WQ = IQ) || void 0 === WQ || WQ(), clearTimeout(JQ);
-           try {
-             QQ.restoreSize()
-           } catch (XQ) {
-             console.error("A screenshot couldn't size the canvas back", XQ)
- ... (39 more removed lines; see GitHub link above)
+       return {
+         current: () => {
+           const iM = (0, jM.e)();
+           return null === iM ? rM : MM(iM)()
+         },
+         watch: rM => PM((OM => {
+           const SM = MM(OM);
+           let jM = SM();
+           return rM(jM), iM((() => {
+             const MM = SM();
+             MM !== jM && (jM = MM, rM(MM))
+           }))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L329` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L239) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L329)

```diff
-   37820: (QQ, WQ, XQ) => {
+   41723: (MM, rM, iM) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L331-L333` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L241) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L331-L333)

```diff
-       c: () => PQ,
-       e: () => sQ,
-       i: () => zQ
+       d: () => QM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L335-L337` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L243-L245) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L335-L337)

```diff
-     var wQ = XQ(37816),
-       qQ = XQ(37829);
-     let TQ = 0;
+     var OM = iM(41677),
+       SM = iM(41728),
+       jM = iM(41734);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L339-L343` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L247-L249) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L339-L343)

```diff
-     function zQ(QQ, WQ) {
-       const XQ = QQ;
-       XQ._noaFaceGroups = null !== WQ && void 0 !== WQ ? WQ : null, XQ._noaFaceEpoch = -1, XQ._noaFaceMask = -1, XQ._noaFaceCount = -1, XQ._noaFaceMaterial = null;
-       const wQ = QQ.ZD;
-       wQ && 1 === wQ.length && (wQ[0].indexStart = 0, wQ[0].indexCount = QQ.getTotalIndices())
+     function aM() {
+       var MM, rM;
+       return null !== (MM = null === (rM = (0, OM.e)()) || void 0 === rM ? void 0 : rM.itemBridgeSources) && void 0 !== MM ? MM : jM.c
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L346-L353` → after: `L252-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L252-L259) · [Before (L346-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L346-L353)

```diff
-     function sQ(QQ, WQ) {
-       if (WQ) {
-         TQ++;
-         for (const WQ of QQ) {
-           const QQ = WQ._noaFaceGroups;
-           QQ && zQ(WQ, QQ)
-         }
-       } else TQ = Math.max(0, TQ - 1)
+     function PM(MM) {
+       return {
+         current: () => aM().states[MM].current(),
+         watch: rM => (0, SM.h)((iM => {
+           const OM = iM.itemBridgeSources.states[MM];
+           return rM(OM.current()), OM.watch(rM)
+         }))
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L356-L362` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L262-L264) · [Before (L356-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L356-L362)

```diff
-     function FQ(QQ, WQ, XQ) {
-       let qQ = -1,
-         TQ = 0;
-       for (let zQ = 0; zQ < wQ.d; zQ++) {
-         const XQ = QQ[zQ],
-           sQ = QQ[zQ + 1];
-         sQ > XQ && WQ & 1 << wQ.b[zQ] && (qQ < 0 && (qQ = XQ), TQ = sQ)
+     function nM(MM) {
+       return {
+         watch: rM => (0, SM.h)((iM => iM.itemBridgeSources.events[MM].watch(rM)))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L366-L368` → after: `L267-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L267-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L267-L297) · [Before (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L366-L368)

```diff
-     class PQ {
-       constructor(QQ, WQ) {
-         this.Ij = QQ, this.engine = WQ, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+     const QM = {
+       states: {
+         inventory: PM("inventory"),
+         hotbar: PM("hotbar"),
+         crafting: PM("crafting"),
+         heldItemAim: PM("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: nM("hotbarSlotRequested"),
+         hotbarScrolled: nM("hotbarScrolled"),
+         numberKeyPressed: nM("numberKeyPressed"),
+         inventoryDropRequested: nM("inventoryDropRequested"),
+         chestToggled: nM("chestToggled"),
+         chestRefreshed: nM("chestRefreshed"),
+         inventorySynced: nM("inventorySynced"),
+         enchantingTableOpened: nM("enchantingTableOpened")
+ ... (15 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L370-L408` → after: `L299-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L299-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L299-L446) · [Before (L370-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L370-L408)

```diff
-       apply(QQ, WQ) {
-         if (!WQ) return;
-         const XQ = WQ.getProjectionMatrix().m,
-           zQ = 0 === TQ && 0 === XQ[15],
-           sQ = WQ.globalPosition,
-           {
-             engine: PQ
-           } = this,
-           gQ = zQ ? (0, qQ.e)(XQ, PQ.getRenderWidth(), PQ.getRenderHeight()) : 0;
-         sQ.x === this.eyeX && sQ.y === this.eyeY && sQ.z === this.eyeZ && gQ === this.focalPx && zQ === this.culling || (this.epoch++, this.eyeX = sQ.x, this.eyeY = sQ.y, this.eyeZ = sQ.z, this.focalPx = gQ, this.culling = zQ);
-         const {
-           epoch: JQ,
-           range: rQ
-         } = this, IQ = this.Ij / 2, jQ = IQ * Math.sqrt(3), BQ = QQ.data, yQ = QQ.length;
-         let VQ = 0;
-         for (let TQ = 0; TQ < yQ; TQ++) {
- ... (23 more removed lines; see GitHub link above)
+     }
+   },
+   41734: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
+     });
+     var OM = iM(40765);
+ 
+     function SM(MM) {
+       return {
+         current: () => MM,
+         watch: () => () => {}
+       }
+     }
+ 
+     function jM() {}
+ ... (132 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L410` → after: `L448-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L448-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L448-L544) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L410)

```diff
-           WQ && 0 === QQ._noaFaceCount || (BQ[VQ++] = QQ)
+         },
+         commands: {
+           selectHotbarSlot: jM,
+           removeInventoryItem: () => !1,
+           swapInventorySlots: () => !1,
+           moveInventoryItem: () => !1,
+           quickMoveInventoryItem: () => null,
+           closeChest: jM,
+           setInventoryOpen: jM,
+           changeIronChestPasskey: jM,
+           dragReplayCamera: jM,
+           applyTemporaryThirdPerson: jM,
+           holdEmoteWheel: jM,
+           recordFlyingMiddleText: jM,
+           focusCrafting: jM,
+           craftRecipe: () => ({
+ ... (81 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L416` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L548) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L416)

```diff
-   37804: (QQ, WQ, XQ) => {
+   41674: (MM, rM, iM) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L418-L419` → after: `L550-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L550-L554) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L418-L419)

```diff
-       d: () => FQ,
-       e: () => sQ
+       c: () => wM,
+       f: () => bM,
+       g: () => tM,
+       k: () => eM,
+       m: () => GM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L421-L423` → after: `L556-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L556-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L556-L569) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L421-L423)

```diff
-     const wQ = new WeakSet;
-     let qQ = 0;
-     const TQ = new Set;
+     var OM = iM(40325),
+       SM = iM(1229),
+       jM = iM(2067),
+       aM = iM(2078),
+       PM = iM(3693),
+       nM = iM(37767),
+       QM = iM(1373),
+       zM = iM(41677),
+       LM = iM(5214),
+       mM = iM(2619),
+       HM = iM(41682),
+       hM = iM(41691),
+       JM = iM(41723);
+     let dM = null;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L425-L426` → after: `L571-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L571-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L571-L581) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L425-L426)

```diff
-     function zQ(QQ, WQ) {
-       QQ._data = WQ
+     function yM(MM) {
+       const rM = new Map,
+         iM = iM => {
+           if ("string" !== typeof iM) return;
+           let OM = rM.get(iM);
+           return void 0 === OM && (OM = MM(iM), void 0 !== OM && rM.set(iM, OM)), OM
+         };
+       return new Proxy({}, {
+         get: (MM, rM) => iM(rM),
+         has: (MM, rM) => void 0 !== iM(rM)
+       })
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L430-L431` → after: `L585-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L585-L586) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L430-L431)

```diff
-       var WQ, XQ;
-       (null !== (WQ = null === (XQ = QQ.getBuffer()) || void 0 === XQ ? void 0 : XQ.yJ) && void 0 !== WQ ? WQ : 0) > 0 && (wQ.add(QQ), 0 === qQ ? zQ(QQ, null) : TQ.add(QQ))
+       const rM = (0, PM.d)(MM);
+       return void 0 !== rM && (0, PM.g)(rM) === MM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L435-L444` → after: `L590-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L590-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L590-L632) · [Before (L435-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L435-L444)

```diff
-       qQ++;
-       for (const XQ of function(QQ) {
-           const WQ = new Set;
-           for (const qQ of QQ) {
-             const QQ = qQ.geometry;
-             for (const qQ of Object.values(null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.getVertexBuffers()) && void 0 !== XQ ? XQ : {})) {
-               var XQ;
-               const QQ = qQ.getWrapperBuffer();
-               wQ.has(QQ) && WQ.add(QQ)
-             }
+       var rM;
+       const iM = null === (rM = (0, zM.e)()) || void 0 === rM ? void 0 : rM.tables;
+       if (void 0 === iM || !lM(MM)) return;
+       const OM = {
+           displayName: iM.getDisplayName(MM)
+         },
+         SM = iM.getItemStat(MM, "description");
+       void 0 !== SM && null !== SM && (OM.description = SM);
+       const {
+         rootName: jM
+       } = iM.getMetaInfo(MM);
+       jM !== MM && (OM.rootName = jM);
+       const aM = iM.getItemStat(MM, "armourReduction");
+       return void 0 !== aM && null !== aM && (OM.armourReduction = aM), OM
+     }(0, zM.r)((MM => {
+       dM = MM
+ ... (27 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L446-L452` → after: `L634-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L634-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L634-L724) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L446-L452)

```diff
-           return WQ
-         }(QQ)) XQ.getData() || PQ(XQ), TQ.add(XQ);
-       let WQ = !0;
-       return () => {
-         if (WQ && (WQ = !1, qQ--, 0 === qQ)) {
-           for (const QQ of TQ) zQ(QQ, null);
-           TQ.clear()
+         }(),
+         crafting: JM.d.states.crafting,
+         stationItems: {
+           current() {
+             var MM;
+             return (null === (MM = CM) || void 0 === MM ? void 0 : MM.namesVersion) !== (0, PM.h)() && (CM = {
+               namesVersion: (0, PM.h)(),
+               items: {
+                 enchantable: yM((MM => {
+                   const rM = (0, PM.d)(MM);
+                   return void 0 !== rM && null !== dM && dM.enchantmentPerksOf(rM).length > 0 || void 0
+                 })),
+                 salvageable: yM((MM => !(!lM(MM) || null === (0, nM.d)(MM)) || void 0))
+               }
+             }), CM.items
+           },
+ ... (75 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L465` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L731) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L465)

```diff
-   37816: (QQ, WQ, XQ) => {
+   41714: (MM, rM, iM) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L470-L473` → after: `L736-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L736-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L736-L738) · [Before (L470-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L470-L473)

```diff
-       l: () => wQ,
-       o: () => sQ,
-       s: () => qQ,
-       w: () => PQ
+       i: () => SM,
+       k: () => PM,
+       l: () => QM
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L475-L486` → after: `L740-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L740-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L740-L744) · [Before (L475-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L475-L486)

```diff
-     const wQ = 6,
-       qQ = [0, 2, 4, 1, 3, 5, 0, 2],
-       TQ = 6,
-       zQ = [1, 0, 3, 2, 5, 4];
-     for (let gQ = TQ; gQ < qQ.length; gQ++)
-       if (qQ[gQ] !== qQ[gQ - TQ]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
-     const sQ = qQ.length + 1,
-       FQ = (() => {
-         const QQ = [];
-         for (let WQ = 0; WQ < TQ; WQ++) QQ[qQ[WQ]] = WQ;
-         return QQ
-       })();
+     class OM extends Error {
+       constructor() {
+         super(...arguments), this.name = "CoreCorruption"
+       }
+     }
```
