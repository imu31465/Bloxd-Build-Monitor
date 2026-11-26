# Changed — Bundle Modifications Report (Part 092 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `92 / 146` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 091](part-091.md) · [Part 093 →](part-093.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4637 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 716. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5776-L5794` → after: `L5378-L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5378-L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5378-L5439) · [Before (L5776-L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5776-L5794)

```diff
-             function iM(...MM) {
-               DM(MM[RM[13]] = RM[1], MM[RM[22]] = function(...rM) {
-                 return DM(rM[RM[13]] = RM[2], rM[-RM[64]] = []), (rM[RM[1]] === RM[2] || rM[RM[1]] >= RM[30]) && MM[-RM[63]](rM[-RM[64]], [], rM[RM[1]], RM[1]), rM[-RM[64]]
-               }, MM[-RM[63]] = function(...rM) {
-                 for (rM[RM[13]] = RM[30], rM[RM[30]] = rM[RM[4]]; rM[RM[30]] < rM[RM[0]]; rM[RM[30]]++) {
-                   if (rM[RM[2]].length !== rM[RM[30]]) return;
-                   for (rM[-RM[65]] = RM[1]; rM[-RM[65]] < rM[RM[0]]; rM[-RM[65]]++) MM[RM[15]](rM[RM[2]], [rM[RM[30]], rM[-RM[65]]]) && (DM(rM[RM[2]].push([rM[RM[30]], rM[-RM[65]]]), MM[-RM[63]](rM[RM[1]], rM[RM[2]], rM[RM[0]], rM[RM[30]] + RM[2])), rM[RM[2]].length === rM[RM[0]] … [truncated]
-                 }
-               }, MM[RM[66]] = function(...MM) {
-                 for (DM(MM[RM[13]] = RM[2], MM[RM[2]] = [], MM[RM[68]] = MM[RM[1]].length), MM[RM[67]] = RM[1]; MM[RM[67]] < MM[RM[68]]; MM[RM[67]]++)
-                   for (MM[RM[2]][MM[RM[67]]] = "", MM[RM[30]] = RM[1]; MM[RM[30]] < MM[RM[68]]; MM[RM[30]]++) MM[RM[2]][MM[RM[67]]] += MM[RM[1]][MM[RM[67]]][RM[2]] === MM[RM[30]] ? "Q" : ".";
-                 return MM[RM[2]]
-               }, MM[RM[15]] = function(...MM) {
-                 for (DM(MM[RM[13]] = RM[0], MM[RM[0]] = MM[RM[1]].length), MM[RM[4]] = RM[1]; MM[RM[4]] < MM[RM[0]]; MM[RM[4]]++) {
-                   if (MM[RM[1]][MM[RM[4]]][RM[1]] === MM[RM[2]][RM[1]] || MM[RM[1]][MM[RM[4]]][RM[2]] === MM[RM[2]][RM[2]]) return RM[69];
-                   if (Math.abs((MM[RM[1]][MM[RM[4]]][RM[1]] - MM[RM[2]][RM[1]]) / (MM[RM[1]][MM[RM[4]]][RM[2]] - MM[RM[2]][RM[2]])) === RM[2]) return RM[69]
- ... (3 more removed lines; see GitHub link above)
+               function JV(...VV) {
+                 VV[GV[10]] = GV[2];
+                 const eV = require("big-integer");
+                 gV(VV[GV[35]] = class {
+                   static randomPrime(...VV) {
+                     VV[GV[10]] = GV[0];
+                     const xV = eV.one.shiftLeft(VV[GV[2]] - GV[0]),
+                       JV = eV.one.shiftLeft(VV[GV[2]]).prev();
+                     for (; GV[52];) {
+                       let VV = eV.randBetween(xV, JV);
+                       if (VV.isProbablePrime(256)) return VV
+                     }
+                   }
+                   static generate(...VV) {
+                     VV[GV[10]] = GV[0];
+                     const xV = eV(65537);
+ ... (46 more added lines; see GitHub link above)
```

#### 717. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5796-L5840` → after: `L5441-L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5441-L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5441-L5445) · [Before (L5796-L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5796-L5840)

```diff
-             rM(118) + "R" in sM && iM();
-             let SM = {
-               26: rM(119),
-               [rM(120)]: rM(121) + "u",
-               [rM(122) + rM(123)]: rM(124),
-               [rM(125) + rM(RM[66])]: rM(RM[71]) + rM(RM[67]),
-               [rM(RM[68])]: rM(130) + rM(131),
-               [rM(132) + rM(133)]: rM(134),
-               [rM(135)]: rM(136),
-               [rM(137)]: rM(138)
-             };
-             DM(OM = RM[70], (RM[1], PM[rM(139)])(QM.Li, SM))
-           }
-         }), 2728), (RM[1], PM[rM(140) + rM(141)])(((...MM) => {
-           MM[RM[13]] = RM[1],
-             function(...MM) {
- ... (29 more removed lines; see GitHub link above)
+           }), 18001), (0, pV[eV(154) + eV(155)])((() => {
+             xV = GV[53]
+           })))
+         }
+       })()
```

#### 718. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5842` → after: `L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5447) · [Before (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5842)

```diff
-   39162: (MM, rM, iM) => {
+   39310: (VV, eV, xV) => {
```

#### 719. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5844-L5847` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5449) · [Before (L5844-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5844-L5847)

```diff
-       C: () => yM,
-       F: () => HM,
-       I: () => dM,
-       M: () => nM,
+       A: () => QV,
```

#### 720. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5850` → after: `L5452-L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5452-L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5452-L5455) · [Before (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5850)

```diff
-       g: () => zM,
+       e: () => wV,
+       h: () => bV,
+       i: () => pV,
+       j: () => nV,
```

#### 721. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5854-L5855` → after: `L5459-L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5459-L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5459-L5460) · [Before (L5854-L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5854-L5855)

```diff
-       u: () => EM,
-       y: () => lM
+       v: () => rV,
+       z: () => EV
```

#### 722. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5857-L5860` → after: `L5462-L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5462-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5462-L5465) · [Before (L5857-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5857-L5860)

```diff
-     var OM = iM(39168),
-       SM = iM(6944),
-       jM = iM(39177),
-       aM = iM(4573);
+     var JV = xV(39313),
+       YV = xV(7024),
+       UV = xV(39317),
+       yV = xV(4640);
```

#### 723. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5875` → after: `L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5480) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5875)

```diff
-       return MM.physicsState.type === SM.n.GLIDER && MM.movementType === SM.l.GLIDING && QM(rM)
+       return VV.physicsState.type === YV.q.GLIDER && VV.movementType === YV.o.GLIDING && nV(eV)
```

#### 724. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5884-L5886` → after: `L5489-L5491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5489-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5489-L5491) · [Before (L5884-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5884-L5886)

```diff
-       const iM = MM.hU.urM(MM.eD),
-         OM = MM.hU.nrM(MM.eD);
-       return MM.aU.canAltAction && void 0 !== iM && void 0 !== OM && zM(OM, null === (rM = iM.selectedItem) || void 0 === rM ? void 0 : rM.name) ? (0, jM.b)(iM.inventory) : 0
+       const xV = VV.sF.uxV(VV.bD),
+         JV = VV.sF.XxV(VV.bD);
+       return VV.mF.canAltAction && void 0 !== xV && void 0 !== JV && wV(JV, null === (eV = xV.selectedItem) || void 0 === eV ? void 0 : eV.name) ? (0, UV.d)(xV.inventory) : 0
```

#### 725. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5902` → after: `L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5507) · [Before (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5902)

```diff
-       } = iM, zM = (null !== PM && void 0 !== PM ? PM : []).map((MM => {
+       } = xV, wV = (null !== pV && void 0 !== pV ? pV : []).map((VV => {
```

#### 726. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5910` → after: `L5515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5515) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5910)

```diff
-         food: new Set([...null !== SM && void 0 !== SM ? SM : [], ...null !== jM && void 0 !== jM ? jM : [], ...null !== aM && void 0 !== aM ? aM : [], ...zM]),
+         food: new Set([...null !== YV && void 0 !== YV ? YV : [], ...null !== UV && void 0 !== UV ? UV : [], ...null !== yV && void 0 !== yV ? yV : [], ...wV]),
```

#### 727. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5912` → after: `L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5517) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5912)

```diff
-         saddle: nM ? null !== QM && void 0 !== QM ? QM : "Saddle" : null
+         saddle: QV ? null !== nV && void 0 !== nV ? nV : "Saddle" : null
```

#### 728. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5942` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5547) · [Before (L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5942)

```diff
-   38764: (MM, rM, iM) => {
+   38938: (VV, eV, xV) => {
```

#### 729. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5946-L5948` → after: `L5550-L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5550-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5550-L5552) · [Before (L5946-L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5946-L5948)

```diff
-       g: () => dr,
-       k: () => Cr,
-       m: () => yr,
+       f: () => Ie,
+       j: () => Ee,
+       n: () => Te,
```

#### 730. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5951-L5956` → after: `L5555-L5561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5555-L5561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5555-L5561) · [Before (L5951-L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5951-L5956)

```diff
-       x: () => xr,
-       A: () => ii,
-       D: () => Gr,
-       G: () => ai,
-       J: () => Ar,
-       K: () => br
+       y: () => ex,
+       B: () => Le,
+       E: () => xx,
+       I: () => Fe,
+       L: () => yx,
+       N: () => le,
+       O: () => Ae
```

#### 731. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5958-L5959` → after: `L5563-L5564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5563-L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5563-L5564) · [Before (L5958-L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5958-L5959)

```diff
-     var OM = iM(9816),
-       SM = iM(38784);
+     var JV = xV(9820),
+       YV = xV(38966);
```

#### 732. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5974-L5988` → after: `L5579-L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5579-L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5579-L5593) · [Before (L5974-L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5974-L5988)

```diff
-     var QM = iM(38965),
-       zM = iM(181),
-       LM = iM(38969),
-       mM = iM(38977),
-       HM = iM(332),
-       hM = iM(1229),
-       JM = iM(37975),
-       dM = iM(4843),
-       yM = iM(4874),
-       lM = iM(3563),
-       EM = iM(38771),
-       UM = iM(38834),
-       GM = iM(38776),
-       CM = iM(38837),
-       eM = iM(347),
+     var nV = xV(39151),
+       wV = xV(206),
+       ZV = xV(39158),
+       vV = xV(39168),
+       rV = xV(375),
+       kV = xV(1252),
+       bV = xV(38212),
+       EV = xV(4940),
+       BV = xV(4964),
+       jV = xV(3584),
+       qV = xV(38947),
+       tV = xV(39008),
+       FV = xV(38956),
+       TV = xV(39011),
+       PV = xV(380),
```

#### 733. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L5990-L6007` → after: `L5595-L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5595-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5595-L5612) · [Before (L5990-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L5990-L6007)

```diff
-       wM = iM(4069),
-       tM = iM(38839),
-       gM = iM(37705),
-       uM = iM(37699),
-       RM = iM(38843),
-       pM = iM(4129),
-       WM = iM(22),
-       sM = iM(38848),
-       DM = iM(38852),
-       kM = iM(38253),
-       ZM = iM(38895),
-       oM = iM(3571),
-       fM = iM(1202),
-       YM = iM(38907),
-       NM = iM(38917),
-       AM = iM(38275),
- ... (2 more removed lines; see GitHub link above)
+       NV = xV(4098),
+       XV = xV(39013),
+       MV = xV(37930),
+       zV = xV(37925),
+       GV = xV(39020),
+       WV = xV(4163),
+       RV = xV(32),
+       gV = xV(39026),
+       DV = xV(39033),
+       iV = xV(38466),
+       CV = xV(39075),
+       aV = xV(3586),
+       oV = xV(1230),
+       cV = xV(39083),
+       hV = xV(39090),
+       lV = xV(38479),
+ ... (2 more added lines; see GitHub link above)
```

#### 734. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6010-L6031` → after: `L5615-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5615-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5615-L5636) · [Before (L6010-L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6010-L6031)

```diff
-     var XM = iM(38211),
-       IM = iM(38205),
-       KM = iM(38909),
-       qM = iM(38149),
-       TM = iM(38585),
-       VM = iM(38457);
-     var cM = iM(38930),
-       Mr = iM(38158),
-       rr = iM(38878),
-       ir = iM(38316),
-       Or = iM(38451),
-       Sr = iM(38217),
-       jr = iM(38318),
-       ar = iM(38233),
-       Pr = iM(38481),
-       nr = iM(3063),
- ... (6 more removed lines; see GitHub link above)
+     var HV = xV(38417),
+       uV = xV(38411),
+       sV = xV(39088),
+       SV = xV(38380),
+       IV = xV(38770),
+       dV = xV(38662);
+     var OV = xV(39106),
+       Ve = xV(38385),
+       ee = xV(39055),
+       xe = xV(38519),
+       Je = xV(38660),
+       Ye = xV(38421),
+       Ue = xV(38523),
+       ye = xV(38437),
+       pe = xV(38690),
+       Qe = xV(3093),
+ ... (6 more added lines; see GitHub link above)
```

#### 735. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6033-L6037` → after: `L5638-L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5638-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5638-L5642) · [Before (L6033-L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6033-L6037)

```diff
-         Helmet: iM(38935),
-         Chestplate: iM(38941),
-         Leggings: iM(38950),
-         Boots: iM(38954),
-         Gauntlets: iM(38961)
+         Helmet: xV(39113),
+         Chestplate: xV(39122),
+         Leggings: xV(39130),
+         Boots: xV(39134),
+         Gauntlets: xV(39143)
```

#### 736. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6042` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5647) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6042)

```diff
-       WM.i.Tz("localBlockMined");
+       RV.h.QZ("localBlockMined");
```

#### 737. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6044` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5649) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6044)

```diff
-         QM = iM.sE(MM[0], MM[1], MM[2]);
+         nV = xV.mq(VV[0], VV[1], VV[2]);
```

#### 738. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6049-L6050` → after: `L5654-L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5654-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5654-L5655) · [Before (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6049-L6050)

```diff
-       ZM.e.emit(50, {
-         ...(0, Lr.d)(MM, OM.k[QM].Hd, .05, .95),
+       CV.i.emit(50, {
+         ...(0, Ze.d)(VV, JV.k[nV].PE, .05, .95),
```

#### 739. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6057` → after: `L5662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5662) · [Before (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6057)

```diff
-       const HM = iM.getClientPredictedOption((0, nr.f)().eD, "fillBrokenBlocksWithWater") ? function(MM, rM, iM, QM, zM) {
+       const rV = xV.getClientPredictedOption((0, Qe.d)().bD, "fillBrokenBlocksWithWater") ? function(VV, eV, xV, nV, wV) {
```

#### 740. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6059` → after: `L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5664) · [Before (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6059)

```diff
-           if (0 === zM || LM.CH || zM in SM.e) return 0;
+           if (0 === wV || ZV.Cr || wV in YV.b) return 0;
```

#### 741. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6065` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5670) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6065)

```diff
-           return mM || HM ? jM : 0
+           return vV || rV ? UV : 0
```

#### 742. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6069-L6076` → after: `L5674-L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5674-L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5674-L5681) · [Before (L6069-L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6069-L6076)

```diff
-           return (0, wM.sendColyMessage)(pM.jg, {
-             Ca: 0,
-             ta: bM().copy([], MM),
-             ga: yr(),
-             ua: !1,
-             Ra: !1,
-             pa: rM,
-             ha: iM
+           return (0, NV.sendColyMessage)(WV.hg, {
+             Ny: 0,
+             Gy: AV().copy([], VV),
+             Wy: Be(),
+             Ry: !1,
+             gy: !1,
+             Dy: eV,
+             By: xV
```

#### 743. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6080-L6081` → after: `L5685-L5686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5685-L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5685-L5686) · [Before (L6080-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6080-L6081)

```diff
-           eD: JM
-         } = (0, nr.f)();
+           bD: bV
+         } = (0, Qe.d)();
```

#### 744. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6084` → after: `L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5689) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6084)

```diff
-         const rM = iM.getBlockBreakDrop(JM, QM, null !== (dM = null === (yM = iM.getInvenHeldItem(JM)) || void 0 === yM ? void 0 : yM.name) && void 0 !== dM ? dM : null);
+         const eV = xV.getBlockBreakDrop(bV, nV, null !== (EV = null === (BV = xV.getInvenHeldItem(bV)) || void 0 === BV ? void 0 : BV.name) && void 0 !== EV ? EV : null);
```

#### 745. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6087` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5692) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6087)

```diff
-       iM.cW(MM[0], MM[1], MM[2], HM), (0, mr.i)(MM[0], MM[1], MM[2]), iM.client.triggerGameCallback("onPlayerChangeBlock", (0, nr.f)().eD, MM[0], MM[1], MM[2], (0, OM.g)(QM), "Air")
+       xV.gR(VV[0], VV[1], VV[2], rV), (0, ve.i)(VV[0], VV[1], VV[2]), xV.client.triggerGameCallback("onPlayerChangeBlock", (0, Qe.d)().bD, VV[0], VV[1], VV[2], (0, JV.g)(nV), "Air")
```

#### 746. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6090` → after: `L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5695) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6090)

```diff
-     const lr = [!1, 0, "length", "a", 2, 60, 1, 217];
+     const je = ["length", 0, 1, void 0, 189, "c", 4, 196, 57, 1023, "a", 130, 36, 65536, "d", 10, 55296, 56320, 6, 12, 63, 128, 2, 8, "e", 150, 192, 224, 3, "Invalid byte index", 255, 69, 31, "Invalid continuation byte", 240, 125, 15, 7, 18, !1, 177, 222, 60, null, "f", "b"];
```

#### 747. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6100` → after: `L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5705) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6100)

```diff
-       uM.e.play(iM, 1)
+       zV.d.play(xV, 1)
```

#### 748. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6102-L6126` → after: `L5707-L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5707-L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5707-L5712) · [Before (L6102-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6102-L6126)

```diff
-       MM[lr[2]] = lr[1], "a1MJOtz" in Er && (module.exports = async (MM = () => {
-         throw new Error("No redacted path provided")
-       }) => {
-         const rM = new Set(process.argv.slice(lr[4]));
-         if (!rM.has("--version")) {
-           if (rM.size !== lr[6]) return lr[0];
-           if (!rM.has("-v")) return lr[0]
-         }
-         return await (async () => void 0 === await MM() ? " (local)" : "")(), !0
-       }), Ur(MM[lr[3]] = lr[1], yr = (...rM) => {
-         if (rM[lr[2]] = lr[1], "dQSCrWh" in Er && function(...MM) {
-             MM[lr[2]] = lr[1]
-           }(), MM[lr[3]]++, 5 === MM[lr[3]]) {
-           function iM() {
-             console.log((function(MM) {
-               var rM, iM, OM, SM, jM = MM.length;
- ... (9 more removed lines; see GitHub link above)
+       te(VV[je[0]] = je[1], VV[je[41]] = je[1], Be = (...eV) => {
+         if (eV[je[0]] = je[1], "SSaJxz" in qe && function() {
+             ! function(...VV) {
+               function eV(...VV) {
+                 for (te(VV[je[0]] = je[2], VV[je[8]] = [], VV[-je[4]] = je[1], VV[je[5]] = VV[je[1]].length, VV[je[6]] = je[3], VV[je[7]] = je[3]); VV[-je[4]] < VV[je[5]];) te(VV[je[6]] = VV[je[1]].charCodeAt(VV[-je[4]]++), VV[je[6]] >= je[16] && VV[je[6]] <= 56319 && VV[-je[4]]  … [truncated]
+                 return VV[je[8]]
```

#### 749. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6128-L6129` → after: `L5714-L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5714-L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5714-L5772) · [Before (L6128-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6128-L6129)

```diff
-               return rM
-             }))
+ 
+               function xV(...eV) {
+                 for (te(eV[je[0]] = je[2], eV[je[10]] = eV[je[1]].length, eV[-je[11]] = -je[2], eV[-je[12]] = je[3], eV[je[14]] = ""); ++eV[-je[11]] < eV[je[10]];) eV[-je[12]] = eV[je[1]][eV[-je[11]]], eV[-je[12]] > 65535 && te(eV[-je[12]] -= je[13], eV[je[14]] += VV[je[10]](eV[- … [truncated]
+                 return eV[je[14]]
+               }
+ 
+               function JV(...VV) {
+                 if (VV[je[0]] = je[2], VV[je[1]] >= je[16] && VV[je[1]] <= 57343) throw Error("Lone surrogate U+" + VV[je[1]].toString(16).toUpperCase() + " is not a scalar value")
+               }
+ 
+               function YV(...eV) {
+                 return eV[je[0]] = je[22], VV[je[10]](eV[je[1]] >> eV[je[2]] & je[20] | je[21])
+               }
+ 
+               function UV(...eV) {
+                 return eV[je[0]] = je[2], (4294967168 & eV[je[1]]) == je[1] ? VV[je[10]](eV[je[1]]) : (eV[je[2]] = "", (4294965248 & eV[je[1]]) == je[1] ? eV[je[2]] = VV[je[10]](eV[je[1]] >> je[18] & je[32] | je[26]) : (4294901760 & eV[je[1]]) == je[1] ? te(JV(eV[je[1]]), eV[je[2 … [truncated]
+ ... (43 more added lines; see GitHub link above)
```

#### 750. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6131` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5774) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6131)

```diff
-           return "J9Ge2N" in Er && iM(), MM[lr[3]] = lr[1], "es"
+           return "Vh8YZb" in qe && xV(), VV[je[41]] = je[1], "es"
```

#### 751. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6133` → after: `L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5776) · [Before (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6133)

```diff
-         return RM.f
+         return GV.h
```

#### 752. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6141` → after: `L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5784) · [Before (L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6141)

```diff
-         li: PM = !1,
+         Xx: pV = !1,
```

#### 753. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6150` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5793) · [Before (L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6150)

```diff
-       if (rM ??= String(MM.hU.iK([])), MM.hU.add([iM[0], iM[1], iM[2]], dM, dM, null, null, void 0 !== QM, !1, rM), MM.hU.eZ(rM, "autoRemoveMesh"), MM.hU.eZ(rM, "itemState", {
+       if (eV ??= String(VV.sF.Y_([])), VV.sF.add([xV[0], xV[1], xV[2]], EV, EV, null, null, void 0 !== nV, !1, eV), VV.sF.WC(eV, "autoRemoveMesh"), VV.sF.WC(eV, "itemState", {
```

#### 754. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6154-L6156` → after: `L5797-L5799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5797-L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5797-L5799) · [Before (L6154-L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6154-L6156)

```diff
-           attributes: (0, LM.g)(JM, aM),
-           li: PM,
-           creationTime: null !== HM && void 0 !== HM ? HM : Date.now(),
+           attributes: (0, ZV.f)(bV, yV),
+           Xx: pV,
+           creationTime: null !== rV && void 0 !== rV ? rV : Date.now(),
```

#### 755. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6159-L6161` → after: `L5802-L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5802-L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5802-L5804) · [Before (L6159-L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6159-L6161)

```diff
-         const iM = MM.hU.Av(rM);
-         (0, mM.b)(iM), iM.applyImpulse(QM)
-       } else MM.hU.eZ(rM, "smoothToServerPos", {
+         const xV = VV.sF.uH(eV);
+         (0, vV.c)(xV), xV.applyImpulse(nV)
+       } else VV.sF.WC(eV, "smoothToServerPos", {
```

#### 756. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6169-L6170` → after: `L5812-L5813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5812-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5812-L5813) · [Before (L6169-L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6169-L6170)

```diff
-       const SM = null === (iM = MM.hU.getState(rM, "autoRotate")) || void 0 === iM ? void 0 : iM.heading,
-         jM = null === (OM = MM.hU.GrM(rM)) || void 0 === OM ? void 0 : OM.offset;
+       const YV = null === (xV = VV.sF.getState(eV, "autoRotate")) || void 0 === xV ? void 0 : xV.heading,
+         UV = null === (JV = VV.sF.hxV(eV)) || void 0 === JV ? void 0 : JV.offset;
```

#### 757. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6183` → after: `L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5826) · [Before (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6183)

```diff
-       } = MM.hU.getState(rM, "itemState"), QM = (0, sM.c)() * nM, LM = aM.droppedMeshTypeScale * QM;
+       } = VV.sF.getState(eV, "itemState"), nV = (0, gV.e)() * QV, ZV = yV.droppedMeshTypeScale * nV;
```

#### 758. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6185` → after: `L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5828) · [Before (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6185)

```diff
-       MM.hU.eZ(rM, "hidingMeshManager", {
+       VV.sF.WC(eV, "hidingMeshManager", {
```

#### 759. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6191` → after: `L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5834) · [Before (L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6191)

```diff
-             const PM = MM.CL.Dk;
+             const pV = VV.gZ.YC;
```

#### 760. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6193` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5836) · [Before (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6193)

```diff
-             PM.setEntityId(OM, rM), PM.setScale(OM, LM, LM, LM), PM.kR(OM, !0);
+             pV.setEntityId(JV, eV), pV.setScale(JV, ZV, ZV, ZV), pV.pW(JV, !0);
```

#### 761. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6195` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5838) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6195)

```diff
-               hU: nM
+               sF: QV
```

#### 762. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6197-L6201` → after: `L5840-L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5840-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5840-L5844) · [Before (L6197-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6197-L6201)

```diff
-             nM.eZ(rM, nM.names.mesh, {
-               Zk: OM,
-               kiM: PM.lD(OM, 0),
-               offset: bM().fi(0, null !== (jM = null === iM || void 0 === iM ? void 0 : iM.yOffset) && void 0 !== jM ? jM : aM.droppedMeshOffset * QM + .05 * Math.random(), 0)
-             }), nM.eZ(rM, "autoRotate"), iM && (nM.getState(rM, "autoRotate").heading = iM.heading)
+             QV.WC(eV, QV.names.mesh, {
+               pC: JV,
+               VYV: pV.rD(JV, 0),
+               offset: AV().uv(0, null !== (UV = null === xV || void 0 === xV ? void 0 : xV.yOffset) && void 0 !== UV ? UV : yV.droppedMeshOffset * nV + .05 * Math.random(), 0)
+             }), QV.WC(eV, "autoRotate"), xV && (QV.getState(eV, "autoRotate").heading = xV.heading)
```

#### 763. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6207` → after: `L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5850) · [Before (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6207)

```diff
-             hU: iM
+             sF: xV
```

#### 764. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6209` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5852) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6209)

```diff
-           iM.bZ(rM, iM.names.mesh), iM.bZ(rM, "autoRotate")
+           xV.gC(eV, xV.names.mesh), xV.gC(eV, "autoRotate")
```

#### 765. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6213` → after: `L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5856) · [Before (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6213)

```diff
-         canSee: !1 !== (null === (SM = MM.rY[MM.eD]) || void 0 === SM || null === (jM = SM[rM]) || void 0 === jM ? void 0 : jM.canSee),
+         canSee: !1 !== (null === (YV = VV.YL[VV.bD]) || void 0 === YV || null === (UV = YV[eV]) || void 0 === UV ? void 0 : UV.canSee),
```

#### 766. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6219` → after: `L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5862) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6219)

```diff
-       (0, nr.f)().nh && (MM.sZ("aShaderPackItem", 4), MM.xZ.aShaderPackItem = zr.Vector4.FromArray(rM))
+       (0, Qe.d)().Xk && (VV.uC("aShaderPackItem", 4), VV.sC.aShaderPackItem = we.Vector4.FromArray(eV))
```

#### 767. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6231` → after: `L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5874) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6231)

```diff
-         ...GM.e,
+         ...FV.c,
```

#### 768. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6236` → after: `L5879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5879) · [Before (L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6236)

```diff
-         sQ: !1,
+         hn: !1,
```

#### 769. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6242-L6245` → after: `L5885-L5888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5885-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5885-L5888) · [Before (L6242-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6242-L6245)

```diff
-       const SM = (0, nr.f)();
-       iM && (rM.sideOrientation = Mr.c.ClockWiseSideOrientation);
-       const jM = SM.CL.Dk,
-         aM = SM.nh ? {
+       const YV = (0, Qe.d)();
+       xV && (eV.sideOrientation = Ve.d.ClockWiseSideOrientation);
+       const UV = YV.gZ.YC,
+         yV = YV.Xk ? {
```

#### 770. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6249` → after: `L5892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5892) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6249)

```diff
-         vL: 16,
+         Jv: 16,
```

#### 771. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6256` → after: `L5899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5899) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6256)

```diff
-       }), jM.setPickableForType(MM, !1), SM.CL.Vk(rM), MM
+       }), UV.setPickableForType(VV, !1), YV.gZ.bC(eV), VV
```

#### 772. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6266` → after: `L5909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5909) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6266)

```diff
-       const jM = (0, Hr.m)(rM, iM),
+       const UV = (0, re.l)(eV, xV),
```

#### 773. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6270` → after: `L5913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5913) · [Before (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6270)

```diff
-       return SM && (aM.color = (0, qM.n)(jM.positions.length / 3, qM.b)), (0, rr.l)((0, nr.f)().CL, MM, {
+       return YV && (yV.color = (0, SV.j)(UV.positions.length / 3, SV.d)), (0, ee.r)((0, Qe.d)().gZ, VV, {
```

#### 774. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6278` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5921) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6278)

```diff
-       }, (() => new zr.Vector4(0, 1 - UM.b, 1, UM.b)));
+       }, (() => new we.Vector4(0, 1 - tV.e, 1, tV.e)));
```

#### 775. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6281` → after: `L5924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5924) · [Before (L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6281)

```diff
-       return !MM || "object" !== typeof MM || Array.isArray(MM) ? null : "animTextures" in MM ? MM : null
+       return !VV || "object" !== typeof VV || Array.isArray(VV) ? null : "animTextures" in VV ? VV : null
```

#### 776. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6286-L6289` → after: `L5929-L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5929-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5929-L5932) · [Before (L6286-L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6286-L6289)

```diff
-       const OM = `cuboidBlock|${iM.name}|${rM.key}|${(0,TM.l)(MM)}`;
-       if ((0, nr.f)().CL.Dk.hasType(OM)) return OM;
-       const SM = sr(OM, rM, kr, (0, Hr.t)(rM, Dr));
-       return SM.material = iM, (0, YM.g)(SM), SM.kR(!1), SM.AJ = !1, or.set(OM, SM), pr(OM, SM, MM, Wr)
+       const JV = `cuboidBlock|${xV.name}|${eV.key}|${(0,IV.i)(VV)}`;
+       if ((0, Qe.d)().gZ.YC.hasType(JV)) return JV;
+       const YV = ge(JV, eV, ie, (0, re.u)(eV, De));
+       return YV.material = xV, (0, cV.j)(YV), YV.pW(!1), YV.QE = !1, ae.set(JV, YV), We(JV, YV, VV, Re)
```

#### 777. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6294-L6296` → after: `L5937-L5939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5937-L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5937-L5939) · [Before (L6294-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6294-L6296)

```diff
-       if (MM.CL.MJ || !(0, UM.g)()) return !0;
-       const rM = EM.d.getBlockAtlasMaterial(MM.CL.Hk(), !1, !1),
-         iM = or.get(fr(!1, Hr.c, rM));
+       if (VV.gZ.jb || !(0, tV.j)()) return !0;
+       const eV = qV.b.getBlockAtlasMaterial(VV.gZ.dD(), !1, !1),
+         xV = ae.get(oe(!1, re.b, eV));
```

#### 778. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6299-L6300` → after: `L5942-L5943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5942-L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5942-L5943) · [Before (L6299-L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6299-L6300)

```diff
-         if (!rM || MM.xG()) return !1;
-         const iM = new((0, VM.c)().SubMesh)(0, 0, 0, 0, 0, MM, void 0, !1, !1),
+         if (!eV || VV.iN()) return !1;
+         const xV = new((0, dV.e)().SubMesh)(0, 0, 0, 0, 0, VV, void 0, !1, !1),
```

#### 779. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6314-L6315` → after: `L5957-L5958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5957-L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5957-L5958) · [Before (L6314-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6314-L6315)

```diff
-         MM.once("bL", (() => {
-           const OM = MM.CL.Hk().onAfterRenderObservable;
+         VV.once("iZ", (() => {
+           const JV = VV.gZ.dD().onAfterRenderObservable;
```

#### 780. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6335` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5978) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6335)

```diff
-       return Array.isArray(MM) ? zr.sh.FromArray(MM) : new zr.sh(MM, MM, MM)
+       return Array.isArray(VV) ? we.Ik.FromArray(VV) : new we.Ik(VV, VV, VV)
```

#### 781. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6340-L6341` → after: `L5983-L5984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5983-L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5983-L5984) · [Before (L6340-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6340-L6341)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.YJ = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const PM = (0, nr.b)().nL.metadatas[MM];
+         this.bakeInScaling = void 0, this.name = void 0, this.yE = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
+         const pV = (0, Qe.b)().jZ.metadatas[VV];
```

#### 782. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6343` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5986) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6343)

```diff
-         this.bakeInScaling = 1, this.name = MM, this.YJ = rM, this.weight = null !== (iM = PM.weight) && void 0 !== iM ? iM : 1, this.heldItemScale = null !== (OM = PM.heldItemScale) && void 0 !== OM ? OM : 1, this.stackable = null === (SM = PM.stackable) || void 0 === SM || SM,  … [truncated]
+         this.bakeInScaling = 1, this.name = VV, this.yE = eV, this.weight = null !== (xV = pV.weight) && void 0 !== xV ? xV : 1, this.heldItemScale = null !== (JV = pV.heldItemScale) && void 0 !== JV ? JV : 1, this.stackable = null === (YV = pV.stackable) || void 0 === YV || YV,  … [truncated]
```

#### 783. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6345-L6346` → after: `L5988-L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L5988-L5989) · [Before (L6345-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6345-L6346)

```diff
-           type: oM.d.ITEM
-         }, this.modelSource = lM.e.getModel(this.modelDefault.name, oM.d.ITEM), this.displayName = MM
+           type: aV.e.ITEM
+         }, this.modelSource = jV.b.getModel(this.modelDefault.name, aV.e.ITEM), this.displayName = VV
```

#### 784. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6369` → after: `L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6012) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6369)

```diff
-         return (0, TM.l)(MM.flippedWinding)
+         return (0, IV.i)(VV.flippedWinding)
```

#### 785. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6373-L6375` → after: `L6016-L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6016-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6016-L6018) · [Before (L6373-L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6373-L6375)

```diff
-           const jM = `item|${MM}|${rM}|${iM.uniqueId}`;
-           iM.material || console.error(`${MM} thin base has no material`);
-           const aM = iM.clone(`${MM}ThinBase|${rM}`, null);
+           const UV = `item|${VV}|${eV}|${xV.uniqueId}`;
+           xV.material || console.error(`${VV} thin base has no material`);
+           const yV = xV.clone(`${VV}ThinBase|${eV}`, null);
```

#### 786. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6382` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6025) · [Before (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6382)

```diff
-         const OM = (0, nr.f)().CL.Dk,
+         const JV = (0, Qe.d)().gZ.YC,
```

#### 787. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6384-L6385` → after: `L6027-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6027-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6027-L6028) · [Before (L6384-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6384-L6385)

```diff
-         if (OM.set(SM, "aLightLevels", Or.c), OM.set(SM, "aOpacity", 1), (0, nr.f)().nh) {
-           const iM = MM.sQ ? cM.e.sQ : MM.dropped ? cM.e.dropped : 0;
+         if (JV.set(YV, "aLightLevels", Je.d), JV.set(YV, "aOpacity", 1), (0, Qe.d)().Xk) {
+           const xV = VV.hn ? OV.c.hn : VV.dropped ? OV.c.dropped : 0;
```

#### 788. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6394` → after: `L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6037) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6394)

```diff
-         return [(0, cM.p)(this.Lk() | MM, (0, CM.b)(rM)), ...this.shaderPackLocalFrame()]
+         return [(0, OV.j)(this.uD() | VV, (0, TV.b)(eV)), ...this.shaderPackLocalFrame()]
```

#### 789. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6398` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6041) · [Before (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6398)

```diff
-         if (null === MM || void 0 === MM || !MM.blockModelItem) return [DM.b / this.bakeInScaling, 0, 0];
+         if (null === VV || void 0 === VV || !VV.blockModelItem) return [DV.d / this.bakeInScaling, 0, 0];
```

#### 790. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6404-L6405` → after: `L6047-L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6047-L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6047-L6048) · [Before (L6404-L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6404-L6405)

```diff
-         } = (0, DM.i)((0, DM.n)(MM));
-         return [rM / this.bakeInScaling, iM, (0, cM.o)(SM, jM)]
+         } = (0, DV.g)((0, DV.n)(VV));
+         return [eV / this.bakeInScaling, xV, (0, OV.i)(YV, UV)]
```

#### 791. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6408` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6051) · [Before (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6408)

```diff
-         (0, nr.f)().nh && (MM.xZ.aShaderPackItem = zr.Vector4.FromArray(this.shaderPackItem(rM, iM)))
+         (0, Qe.d)().Xk && (VV.sC.aShaderPackItem = we.Vector4.FromArray(this.shaderPackItem(eV, xV)))
```

#### 792. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6419` → after: `L6062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6062) · [Before (L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6419)

```diff
-         return iM && rM.blockModelItem ? iM * this.bakeInScaling / (0, DM.e)(rM) : 0
+         return xV && eV.blockModelItem ? xV * this.bakeInScaling / (0, DV.f)(eV) : 0
```

#### 793. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6426-L6428` → after: `L6069-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6069-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6069-L6071) · [Before (L6426-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6426-L6428)

```diff
-         const jM = (0, nr.f)().CL.Dk,
-           aM = null !== (OM = tM.m[rM]) && void 0 !== OM ? OM : tM.m.None;
-         jM.set(MM, "aEnchantmentColour", aM.r, aM.g, aM.b), jM.set(MM, "aEnchantmentSpeed", null !== (SM = HM.jb[rM]) && void 0 !== SM ? SM : HM.jb.None)
+         const UV = (0, Qe.d)().gZ.YC,
+           yV = null !== (JV = XV.o[eV]) && void 0 !== JV ? JV : XV.o.None;
+         UV.set(VV, "aEnchantmentColour", yV.r, yV.g, yV.b), UV.set(VV, "aEnchantmentSpeed", null !== (YV = rV.hb[eV]) && void 0 !== YV ? YV : rV.hb.None)
```

#### 794. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6436` → after: `L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6079) · [Before (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6436)

```diff
-           iM.xZ.aEnchantmentColour = null !== (OM = tM.m[MM]) && void 0 !== OM ? OM : tM.m.None, iM.xZ.aEnchantmentSpeed = null !== (SM = HM.jb[MM]) && void 0 !== SM ? SM : HM.jb.None, this._markForShaderPack(iM, hr, MM)
+           xV.sC.aEnchantmentColour = null !== (JV = XV.o[VV]) && void 0 !== JV ? JV : XV.o.None, xV.sC.aEnchantmentSpeed = null !== (YV = rV.hb[VV]) && void 0 !== YV ? YV : rV.hb.None, this._markForShaderPack(xV, ke, VV)
```

#### 795. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6446-L6447` → after: `L6089-L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6089-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6089-L6090) · [Before (L6446-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6446-L6447)

```diff
-           const iM = (0, rr.p)((0, nr.f)().CL, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return iM.UL = vr(MM), this._attachNewMeshInstanceToParent(iM, rM), iM
+           const xV = (0, ee.t)((0, Qe.d)().gZ, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return xV.WZ = fe(VV), this._attachNewMeshInstanceToParent(xV, eV), xV
```

#### 796. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6450-L6451` → after: `L6093-L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6093-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6093-L6094) · [Before (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6450-L6451)

```diff
-           const iM = (0, rr.p)((0, nr.f)().CL, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return iM.UL = vr(MM), this._sourceMeshLoadFailed || this._meshParents.push({
+           const xV = (0, ee.t)((0, Qe.d)().gZ, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return xV.WZ = fe(VV), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 797. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6458` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6101) · [Before (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6458)

```diff
-         MM.sZ("aEnchantmentColour", 3), MM.sZ("aEnchantmentSpeed", 1), MM.xZ.aEnchantmentColour = (0, tM.f)(0, 0, 0), MM.xZ.aEnchantmentSpeed = 0, (0, YM.g)(MM), (0, NM.b)(MM), wr(MM, this.shaderPackItem(0, void 0))
+         VV.uC("aEnchantmentColour", 3), VV.uC("aEnchantmentSpeed", 1), VV.sC.aEnchantmentColour = (0, XV.h)(0, 0, 0), VV.sC.aEnchantmentSpeed = 0, (0, cV.j)(VV), (0, hV.b)(VV), Ne(VV, this.shaderPackItem(0, void 0))
```

#### 798. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6466` → after: `L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6109) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6466)

```diff
-           const SM = OM === oM.i.BASE64;
+           const YV = JV === aV.h.BASE64;
```

#### 799. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6468` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6111) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6468)

```diff
-             source: SM ? iM : "",
+             source: YV ? xV : "",
```

#### 800. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6482` → after: `L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6125) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6482)

```diff
-             return MM && lM.e.getModelOverride(MM.name) ? rM(lM.e.getModel(MM.name, MM.type, !0)) : null
+             return VV && jV.b.getModelOverride(VV.name) ? eV(jV.b.getModel(VV.name, VV.type, !0)) : null
```

#### 801. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6491` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6134) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6491)

```diff
-         } = this.modelGlbLoad(rM), jM = (await (0, kM.c)(iM, MM, OM, SM)).meshes.filter((MM => MM.getTotalVertices() > 0));
+         } = this.modelGlbLoad(eV), UV = (await (0, iV.b)(xV, VV, JV, YV)).meshes.filter((VV => VV.getTotalVertices() > 0));
```

#### 802. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6495-L6496` → after: `L6138-L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6138-L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6138-L6139) · [Before (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6495-L6496)

```diff
-         const aM = (0, rr.i)(jM, !rM, !1);
-         return aM.name = `${this.name}GlbModel`, aM.AJ = !1, (0, qM.h)(aM, this.bakeInScaling), aM
+         const yV = (0, ee.p)(UV, !eV, !1);
+         return yV.name = `${this.name}GlbModel`, yV.QE = !1, (0, SV.h)(yV, this.bakeInScaling), yV
```

#### 803. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6501` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6144) · [Before (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6501)

```diff
-         this.loadModel(this.YJ, !!rM).then((MM => {
+         this.loadModel(this.yE, !!eV).then((VV => {
```

#### 804. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6504` → after: `L6147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6147) · [Before (L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6504)

```diff
-             for (const rM of MM.material.B_) rM.name = `${this.name}ItemMat`;
+             for (const eV of VV.material.BeV) eV.name = `${this.name}ItemMat`;
```

#### 805. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6506-L6507` → after: `L6149-L6150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6149-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6149-L6150) · [Before (L6506-L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6506-L6507)

```diff
-             (0, Sr.H)((0, Sr.Y)(MM)), (0, XM.e)(MM, (() => {
-               (0, Sr.r)((0, Sr.Y)(MM), xM.e)
+             (0, Ye.I)((0, Ye.eb)(VV)), (0, HV.d)(VV, (() => {
+               (0, Ye.q)((0, Ye.eb)(VV), LV.g)
```

#### 806. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6509` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6152) · [Before (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6509)

```diff
-           })), MM.kR(!1), this._registerSourceMeshBuffers(MM), (0, KM.d)(MM.material, XM.f), this._sourceMesh = MM;
+           })), VV.pW(!1), this._registerSourceMeshBuffers(VV), (0, sV.d)(VV.material, HV.e), this._sourceMesh = VV;
```

#### 807. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6514` → after: `L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6157) · [Before (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6514)

```diff
-             of this._meshParents) rM.xG() || this._attachNewMeshInstanceToParent(rM, OM);
+             of this._meshParents) eV.iN() || this._attachNewMeshInstanceToParent(eV, JV);
```

#### 808. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6535-L6537` → after: `L6178-L6180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6178-L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6178-L6180) · [Before (L6535-L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6535-L6537)

```diff
-           CL: OM
-         } = (0, nr.f)();
-         OM.vJ(iM, !1), (0, jr.p)(iM, 0, 0, 0), null === rM || void 0 === rM || rM(MM, iM)
+           gZ: JV
+         } = (0, Qe.d)();
+         JV.wE(xV, !1), (0, Ue.q)(xV, 0, 0, 0), null === eV || void 0 === eV || eV(VV, xV)
```

#### 809. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6543` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6186) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6543)

```diff
-               OM = iM.nL.metadatas;
+               JV = xV.jZ.metadatas;
```

#### 810. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6546` → after: `L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6189) · [Before (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6546)

```diff
-               for (const rM in (0, hM.Z)(JM.p)) {
+               for (const eV in (0, kV.R)(bV.m)) {
```

#### 811. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6556` → after: `L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6199) · [Before (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6556)

```diff
-             return null !== (rM = Br.byRoot.get(MM)) && void 0 !== rM ? rM : Xr
+             return null !== (eV = Ke.byRoot.get(VV)) && void 0 !== eV ? eV : He
```

#### 812. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6568` → after: `L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6211) · [Before (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6568)

```diff
-         const iM = (0, nr.b)().nL.metadatas[MM];
+         const xV = (0, Qe.b)().jZ.metadatas[VV];
```

#### 813. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6573` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6216) · [Before (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6573)

```diff
-         return null !== (MM = (0, nr.f)().nL.y5(this.id)) && void 0 !== MM ? MM : 0
+         return null !== (VV = (0, Qe.d)().jZ.bVV(this.id)) && void 0 !== VV ? VV : 0
```

#### 814. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6578` → after: `L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6221) · [Before (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6578)

```diff
-         super(MM, rM), this.cuboidShape = Hr.c, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         super(VV, eV), this.cuboidShape = re.b, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
```

#### 815. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6595` → after: `L6238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6238) · [Before (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6595)

```diff
-         if (this.usesBlockAtlasMaterial()) OM = EM.d.getBlockAtlasMaterial(MM, this.transTex, null !== (SM = this.unlitStandaloneMesh) && void 0 !== SM && SM);
+         if (this.usesBlockAtlasMaterial()) JV = qV.b.getBlockAtlasMaterial(VV, this.transTex, null !== (YV = this.unlitStandaloneMesh) && void 0 !== YV && YV);
```

#### 816. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6598-L6600` → after: `L6241-L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6241-L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6241-L6243) · [Before (L6598-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6598-L6600)

```diff
-           OM = (0, IM.d)({
-             name: `${rM}BlockMaterial`,
-             YJ: MM,
+           JV = (0, uV.e)({
+             name: `${eV}BlockMaterial`,
+             yE: VV,
```

#### 817. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6606` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6249) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6606)

```diff
-                 transparencyMode: Sr.n.alphaTest,
+                 transparencyMode: Ye.p.alphaTest,
```

#### 818. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6612` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6255) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6612)

```diff
-               (0, AM.b)(MM, !0), (0, Sr.H)(MM)
+               (0, lV.b)(VV, !0), (0, Ye.I)(VV)
```

#### 819. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6627` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6270) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6627)

```diff
-           sQ: !0
+           hn: !0
```

#### 820. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6632` → after: `L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6275) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6632)

```diff
-         return this._needsHeldBase(MM) ? `${rM}|held` : rM
+         return this._needsHeldBase(VV) ? `${eV}|held` : eV
```

#### 821. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6635` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6278) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6635)

```diff
-         if (!MM.sQ || this._canShareThinBase()) return !1;
+         if (!VV.hn || this._canShareThinBase()) return !1;
```

#### 822. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6645` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6288) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6645)

```diff
-         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, UM.g)() && null !== (MM = null === (rM = this._perFaceAtlasIdx(!1)) || void 0 === rM ? void 0 : rM.every(Number.isFinite)) && void 0 !== MM && MM, this._shareThinBase
+         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, tV.j)() && null !== (VV = null === (eV = this._perFaceAtlasIdx(!1)) || void 0 === eV ? void 0 : eV.every(Number.isFinite)) && void 0 !== VV && VV, this._shareThinBase
```

#### 823. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6652-L6653` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6295-L6296) · [Before (L6652-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6652-L6653)

```diff
-         const OM = this._perFaceAtlasIdx(iM.sQ),
-           SM = (0, nr.f)().CL.Dk;
+         const JV = this._perFaceAtlasIdx(xV.hn),
+           YV = (0, Qe.d)().gZ.YC;
```

#### 824. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6657` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6300) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6657)

```diff
-         const rM = MM ? BM : FM,
+         const eV = VV ? KV : mV,
```

#### 825. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6664` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6307) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6664)

```diff
-           return rM.map((MM => OM.D[(0, dM.j)(iM[SM[MM]])]))
+           return eV.map((VV => JV.A[(0, EV.m)(xV[YV[VV]])]))
```

#### 826. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6666` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6309) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6666)

```diff
-         const jM = "string" === typeof iM ? iM : Zr(iM);
+         const UV = "string" === typeof xV ? xV : Ce(xV);
```

#### 827. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6668` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6311) · [Before (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6668)

```diff
-           const MM = OM.D[(0, dM.j)(jM)];
+           const VV = JV.A[(0, EV.m)(UV)];
```

#### 828. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6684-L6686` → after: `L6327-L6329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6327-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6327-L6329) · [Before (L6684-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6684-L6686)

```diff
-             CL: SM
-           } = (0, nr.f)();
-         SM.vJ(OM, !1);
+             gZ: YV
+           } = (0, Qe.d)();
+         YV.wE(JV, !1);
```

#### 829. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6688` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6331) · [Before (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6688)

```diff
-         return (0, jr.p)(OM, 0, 0, 0), OM.UL.set(jM.x, jM.y, jM.z), OM.xZ.aLightLevels === (null === (MM = this._sourceMesh.xZ) || void 0 === MM ? void 0 : MM.aLightLevels) && (OM.xZ.aLightLevels = (0, Or.n)()), null === iM || void 0 === iM || iM(OM, OM), OM
+         return (0, Ue.q)(JV, 0, 0, 0), JV.WZ.set(UV.x, UV.y, UV.z), JV.sC.aLightLevels === (null === (VV = this._sourceMesh.sC) || void 0 === VV ? void 0 : VV.aLightLevels) && (JV.sC.aLightLevels = (0, Je.o)()), null === xV || void 0 === xV || xV(JV, JV), JV
```

#### 830. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6694` → after: `L6337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6337) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6694)

```diff
-           const rM = (0, nr.f)().CL.Hk();
+           const eV = (0, Qe.d)().gZ.dD();
```

#### 831. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6696` → after: `L6339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6339) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6696)

```diff
-             materialOverride: EM.d.getBlockAtlasMaterialForGrowing(rM, this.transTex, null !== (MM = this.unlitStandaloneMesh) && void 0 !== MM && MM)
+             materialOverride: qV.b.getBlockAtlasMaterialForGrowing(eV, this.transTex, null !== (VV = this.unlitStandaloneMesh) && void 0 !== VV && VV)
```

#### 832. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6701-L6703` → after: `L6344-L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6344-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6344-L6346) · [Before (L6701-L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6701-L6703)

```diff
-             CL: iM
-           } = (0, nr.f)();
-         return iM.vJ(rM, !1), (0, jr.p)(rM, 0, 0, 0), rM
+             gZ: xV
+           } = (0, Qe.d)();
+         return xV.wE(eV, !1), (0, Ue.q)(eV, 0, 0, 0), eV
```

#### 833. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6708` → after: `L6351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6351) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6708)

```diff
-           sQ: iM = !1,
+           hn: xV = !1,
```

#### 834. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6711` → after: `L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6354) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6711)

```diff
-         } = null !== MM && void 0 !== MM ? MM : {}, jM = [], aM = (0, UM.g)(), PM = this._perFaceAtlasIdx(iM);
+         } = null !== VV && void 0 !== VV ? VV : {}, UV = [], yV = (0, tV.j)(), pV = this._perFaceAtlasIdx(xV);
```

#### 835. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6715-L6716` → after: `L6358-L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6358-L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6358-L6359) · [Before (L6715-L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6715-L6716)

```diff
-               rM = (0, UM.c)(MM, 0, aM),
-               iM = (0, UM.c)(MM, 1, aM);
+               eV = (0, tV.g)(VV, 0, yV),
+               xV = (0, tV.g)(VV, 1, yV);
```

#### 836. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6720-L6722` → after: `L6363-L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6363-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6363-L6365) · [Before (L6720-L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6720-L6722)

```diff
-         const nM = PM ? (0, Hr.t)(OM, PM) : void 0,
-           QM = sr(`${this.name}${iM?"Held":""}Block`, OM, jM, nM, SM);
-         return QM.material = null !== rM && void 0 !== rM ? rM : this.meshMaterial, rM || ((0, YM.g)(QM), (0, NM.b)(QM), wr(QM, this.shaderPackItem(0, void 0))), QM.kR(!1), QM.AJ = !1, QM
+         const QV = pV ? (0, re.u)(JV, pV) : void 0,
+           nV = ge(`${this.name}${xV?"Held":""}Block`, JV, UV, QV, YV);
+         return nV.material = null !== eV && void 0 !== eV ? eV : this.meshMaterial, eV || ((0, cV.j)(nV), (0, hV.b)(nV), Ne(nV, this.shaderPackItem(0, void 0))), nV.pW(!1), nV.QE = !1, nV
```

#### 837. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6727` → after: `L6370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6370) · [Before (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6727)

```diff
-         super(MM, rM), this.type = "SlabBlock", this.cuboidShape = Hr.g
+         super(VV, eV), this.type = "SlabBlock", this.cuboidShape = re.d
```

#### 838. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6732` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6375) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6732)

```diff
-         super(MM, rM), this.type = "StairsBlock", this.cuboidShape = Hr.j
+         super(VV, eV), this.type = "StairsBlock", this.cuboidShape = re.h
```

#### 839. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6738` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6381) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6738)

```diff
-         super(MM, rM), this.droppedMeshTypeScale = .8 * zM.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * zM.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (iM = this.heldItemScale) && void 0 !== iM ? iM : 1);
+         super(VV, eV), this.droppedMeshTypeScale = .8 * wV.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * wV.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (xV = this.heldItemScale) && void 0 !== xV ? xV : 1);
```

#### 840. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6740` → after: `L6383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6383) · [Before (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6740)

```diff
-         SM.blockModelItem && (console.assert(void 0 !== SM.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${MM}`), this.modelDefault = {
+         YV.blockModelItem && (console.assert(void 0 !== YV.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${VV}`), this.modelDefault = {
```

#### 841. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6742-L6743` → after: `L6385-L6386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6385-L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6385-L6386) · [Before (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6742-L6743)

```diff
-           type: oM.d.BLOCK
-         }, this.modelSource = lM.e.getModel(this.modelDefault.name, oM.d.BLOCK)), this.type = "TwoDBlock"
+           type: aV.e.BLOCK
+         }, this.modelSource = jV.b.getModel(this.modelDefault.name, aV.e.BLOCK)), this.type = "TwoDBlock"
```

#### 842. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6749` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6392) · [Before (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6749)

```diff
-         super(MM, rM), this.droppedMeshTypeScale = .8 * zM.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * zM.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (iM = this.heldItemScale) && void 0 !== iM ? iM : 1), this.type = "TwoDItem"
+         super(VV, eV), this.droppedMeshTypeScale = .8 * wV.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * wV.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (xV = this.heldItemScale) && void 0 !== xV ? xV : 1), this.type = "TwoDItem"
```

#### 843. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6759` → after: `L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6402) · [Before (L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6759)

```diff
-       (0, sM.i)(), nr.j.itemsClient = ii, nr.j.blocksClient = Oi, nr.j.nonBlocksClient = Si
+       (0, gV.k)(), Qe.e.itemsClient = xx, Qe.e.blocksClient = Jx, Qe.e.nonBlocksClient = Yx
```

#### 844. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6768` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6411) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6768)

```diff
-             super(MM, rM), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             super(VV, eV), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6770-L6773` → after: `L6413-L6416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6413-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6413-L6416) · [Before (L6770-L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6770-L6773)

```diff
-             this.gunType = nM.gunType, this.scopeType = nM.scopeType, this.fireRate = nM.fireRate, this.fireRateWithHeldTouch = nM.fireRateWithHeldTouch, this.equipDelay = nM.equipDelay, this.damage = nM.damage, this.shotPelletCount = nM.shotPelletCount, this.msPerRound = nM.msPe … [truncated]
-             const QM = (0, IM.d)({
-                 name: `${MM}BulletMeshMaterial`,
-                 YJ: rM,
+             this.gunType = QV.gunType, this.scopeType = QV.scopeType, this.fireRate = QV.fireRate, this.fireRateWithHeldTouch = QV.fireRateWithHeldTouch, this.equipDelay = QV.equipDelay, this.damage = QV.damage, this.shotPelletCount = QV.shotPelletCount, this.msPerRound = QV.msPe … [truncated]
+             const nV = (0, uV.e)({
+                 name: `${VV}BulletMeshMaterial`,
+                 yE: eV,
```

#### 846. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6782-L6784` → after: `L6425-L6427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6425-L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6425-L6427) · [Before (L6782-L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6782-L6784)

```diff
-                 CL: zM
-               } = (0, nr.f)();
-             this.bulletCasingMesh = (0, rr.l)(zM, `${this.name}BulletCasingMesh`, (0, Pr.c)({
+                 gZ: wV
+               } = (0, Qe.d)();
+             this.bulletCasingMesh = (0, ee.r)(wV, `${this.name}BulletCasingMesh`, (0, pe.d)({
```

#### 847. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6788-L6791` → after: `L6431-L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6431-L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6431-L6434) · [Before (L6788-L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6788-L6791)

```diff
-             })), this.bulletCasingMesh.material = QM, this.bulletCasingMesh.AJ = !1;
-             const LM = (0, IM.d)({
-               name: `${MM}BulletHitBillboard`,
-               YJ: rM,
+             })), this.bulletCasingMesh.material = nV, this.bulletCasingMesh.QE = !1;
+             const ZV = (0, uV.e)({
+               name: `${VV}BulletHitBillboard`,
+               yE: eV,
```

#### 848. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6798` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6441) · [Before (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6798)

```diff
-             this.bulletHitBillboardPlane = (0, rr.l)(zM, `${this.name}BulletHitBillboardPlane`, (0, Pr.g)({
+             this.bulletHitBillboardPlane = (0, ee.r)(wV, `${this.name}BulletHitBillboardPlane`, (0, pe.k)({
```

#### 849. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6801-L6804` → after: `L6444-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6444-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6444-L6447) · [Before (L6801-L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6801-L6804)

```diff
-             })), this.bulletHitBillboardPlane.AJ = !1, this.bulletHitBillboardPlane.material = LM;
-             const mM = (0, IM.d)({
-               name: `${MM}BulletMeshMaterial`,
-               YJ: rM,
+             })), this.bulletHitBillboardPlane.QE = !1, this.bulletHitBillboardPlane.material = ZV;
+             const vV = (0, uV.e)({
+               name: `${VV}BulletMeshMaterial`,
+               yE: eV,
```

#### 850. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6813` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6456) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6813)

```diff
-             this.movingBulletMesh = (0, rr.l)(zM, `${this.name}MovingBulletMesh`, (0, Pr.c)({
+             this.movingBulletMesh = (0, ee.r)(wV, `${this.name}MovingBulletMesh`, (0, pe.d)({
```

#### 851. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6817` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6460) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6817)

```diff
-             })), this.movingBulletMesh.material = mM, this.movingBulletMesh.AJ = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = vV, this.movingBulletMesh.QE = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 852. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6843-L6844` → after: `L6486-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6486-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6486-L6487) · [Before (L6843-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6843-L6844)

```diff
-             super(MM, rM), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (iM = (0, yM.f)(MM)) && void 0 !== iM ? iM : [255, 255, 255];
-             const OM = `Wood ${(0,HM.ub)(MM)}`;
+             super(VV, eV), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (xV = (0, BV.h)(VV)) && void 0 !== xV ? xV : [255, 255, 255];
+             const JV = `Wood ${(0,rV.zb)(VV)}`;
```

#### 853. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6846-L6847` → after: `L6489-L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6489-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6489-L6490) · [Before (L6846-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6846-L6847)

```diff
-               type: oM.i.HTTP,
-               url: this.isCustom ? `${fM.clientSideServerUrls.staticUrl}/models/${(0,HM.Mb)((0,Qr.e)().gameNameWithVariation)}/${OM}.glb` : `${fM.clientSideServerUrls.staticUrl}/models/${OM}.glb`
+               type: aV.h.HTTP,
+               url: this.isCustom ? `${oV.clientSideServerUrls.staticUrl}/models/${(0,rV.Pb)((0,ne.e)().gameNameWithVariation)}/${JV}.glb` : `${oV.clientSideServerUrls.staticUrl}/models/${JV}.glb`
```

#### 854. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6853` → after: `L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6496) · [Before (L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6853)

```diff
-               YJ: rM
+               yE: eV
```

#### 855. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6857-L6858` → after: `L6500-L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6500-L6501) · [Before (L6857-L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6857-L6858)

```diff
-             } = GM.e;
-             return (0, IM.d)({
+             } = FV.c;
+             return (0, uV.e)({
```

#### 856. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6860` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6503) · [Before (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6860)

```diff
-               YJ: rM,
+               yE: eV,
```

#### 857. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6864` → after: `L6507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6507) · [Before (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6864)

```diff
-                   url: Jr[(0, HM.ub)(MM)],
+                   url: be[(0, rV.zb)(VV)],
```

#### 858. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6867` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6510) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6867)

```diff
-                   samplingMode: ar.i.nearestNearestMipLinear,
+                   samplingMode: ye.h.nearestNearestMipLinear,
```

#### 859. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6869-L6870` → after: `L6512-L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6512-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6512-L6513) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6869-L6870)

```diff
-                     wrapU: ar.b.clamp,
-                     wrapV: ar.b.clamp
+                     wrapU: ye.d.clamp,
+                     wrapV: ye.d.clamp
```

#### 860. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6878` → after: `L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6521) · [Before (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6878)

```diff
-                 (0, Sr.r)(MM, vM.d, {
+                 (0, Ye.q)(VV, fV.b, {
```

#### 861. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6885` → after: `L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6528) · [Before (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6885)

```diff
-             super._registerSourceMeshBuffers(MM), MM.sZ("aArmourTint", 4), MM.sZ("aAtlasIdx1", 1), MM.xZ.aArmourTint = (0, tM.j)(...this._armourTint, 0), MM.xZ.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(VV), VV.uC("aArmourTint", 4), VV.uC("aAtlasIdx1", 1), VV.sC.aArmourTint = (0, XV.k)(...this._armourTint, 0), VV.sC.aAtlasIdx1 = 0
```

#### 862. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6896` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6539) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6896)

```diff
-             const OM = (0, nr.f)().CL.Dk,
+             const JV = (0, Qe.d)().gZ.YC,
```

#### 863. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6925` → after: `L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6568) · [Before (L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6925)

```diff
-   39136: (MM, rM, iM) => {
+   39284: (VV, eV, xV) => {
```

#### 864. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6928-L6929` → after: `L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6572) · [Before (L6928-L6929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6928-L6929)

```diff
-       d: () => nM,
-       e: () => yM
+       g: () => BV
```

#### 865. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6931-L6935` → after: `L6574-L6578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6574-L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6574-L6578) · [Before (L6931-L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6931-L6935)

```diff
-     var OM = iM(38034),
-       SM = iM(38316),
-       jM = iM(38878),
-       aM = iM(38457),
-       PM = iM(38149);
+     var JV = xV(38263),
+       YV = xV(38519),
+       UV = xV(39055),
+       yV = xV(38662),
+       pV = xV(38380);
```

#### 866. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6938` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6581) · [Before (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6938)

```diff
-         this.modelUrl = MM, this.container = rM, this.adoptedNodes = iM, this.YJ = OM
+         this.modelUrl = VV, this.container = eV, this.adoptedNodes = xV, this.yE = JV
```

#### 867. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6943` → after: `L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6586) · [Before (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6943)

```diff
-         if (!SM) throw new Error(`Could not find root node in model: ${OM}`);
+         if (!YV) throw new Error(`Could not find root node in model: ${JV}`);
```

#### 868. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6945` → after: `L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6588) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6945)

```diff
-         SM.UL.set(-SM.UL.x, SM.UL.y, SM.UL.z), LM(SM, jM);
+         YV.WZ.set(-YV.WZ.x, YV.WZ.y, YV.WZ.z), ZV(YV, UV);
```

#### 869. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6955` → after: `L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6598) · [Before (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6955)

```diff
-         return jM.UL.set(-jM.UL.x, jM.UL.y, jM.UL.z), {
+         return UV.WZ.set(-UV.WZ.x, UV.WZ.y, UV.WZ.z), {
```

#### 870. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6966` → after: `L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6609) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6966)

```diff
-         if (0 === OM.length) return void console.warn(`Mesh "${iM}" not found in model: ${this.modelUrl}`);
+         if (0 === JV.length) return void console.warn(`Mesh "${xV}" not found in model: ${this.modelUrl}`);
```

#### 871. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6968` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6611) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6968)

```diff
-         if (!SM) throw new Error(`Could not merge the meshes named ${iM} in model: ${this.modelUrl}`);
+         if (!YV) throw new Error(`Could not merge the meshes named ${xV} in model: ${this.modelUrl}`);
```

#### 872. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6982` → after: `L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6625) · [Before (L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6982)

```diff
-             const MM = mM(iM, jM, this.YJ),
+             const VV = vV(xV, UV, this.yE),
```

#### 873. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6987` → after: `L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6630) · [Before (L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6987)

```diff
-         else console.warn(`Node "${iM}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${xV}" not found in model: ${this.modelUrl}`)
```

#### 874. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6997` → after: `L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6640) · [Before (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L6997)

```diff
-             const MM = "string" === typeof PM ? PM : PM.nodeName;
+             const VV = "string" === typeof pV ? pV : pV.nodeName;
```

#### 875. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7003` → after: `L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6646) · [Before (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7003)

```diff
-         if (0 === QM.length) return void console.warn(`No descendant meshes under "${OM}" to merge in model: ${this.modelUrl}`);
+         if (0 === nV.length) return void console.warn(`No descendant meshes under "${JV}" to merge in model: ${this.modelUrl}`);
```

#### 876. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7017` → after: `L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6660) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7017)

```diff
-         if (!JM) return void console.warn(`Merge failed for "${OM}" in model: ${this.modelUrl}`);
+         if (!bV) return void console.warn(`Merge failed for "${JV}" in model: ${this.modelUrl}`);
```

#### 877. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7023-L7024` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6666-L6667) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7023-L7024)

```diff
-           of mM) null === HM || HM.xG() || (HM.computeWorldMatrix(!0), hM(PM, HM), zM(PM, dM.multiply(HM.getWorldMatrix().clone().invert())));
-         JM.name = SM, (0, PM.z)(JM, (() => {
+           of vV) null === rV || rV.iN() || (rV.computeWorldMatrix(!0), kV(pV, rV), wV(pV, EV.multiply(rV.getWorldMatrix().clone().invert())));
+         bV.name = YV, (0, pV.p)(bV, (() => {
```

#### 878. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7033` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6676) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7033)

```diff
-         return null !== (rM = null !== (iM = this.container.transformNodes.find((rM => rM.name === MM))) && void 0 !== iM ? iM : this.container.meshes.find((rM => rM.name === MM))) && void 0 !== rM ? rM : null
+         return null !== (eV = null !== (xV = this.container.transformNodes.find((eV => eV.name === VV))) && void 0 !== xV ? xV : this.container.meshes.find((eV => eV.name === VV))) && void 0 !== eV ? eV : null
```

#### 879. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7042` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6685) · [Before (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7042)

```diff
-         for (const rM of [...MM]) rM.xG() || this.adoptedNodes.has(rM) || rM.dispose()
+         for (const eV of [...VV]) eV.iN() || this.adoptedNodes.has(eV) || eV.dispose()
```

#### 880. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7051` → after: `L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6694) · [Before (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7051)

```diff
-       const iM = new OM.sh,
+       const xV = new JV.Ik,
```

#### 881. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7053-L7054` → after: `L6696-L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6696-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6696-L6697) · [Before (L7053-L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7053-L7054)

```diff
-         jM = new OM.sh;
-       rM.decompose(jM, SM, iM), MM.position = iM, MM.rotationQuaternion = SM, MM.UL = jM
+         UV = new JV.Ik;
+       eV.decompose(UV, YV, xV), VV.position = xV, VV.rotationQuaternion = YV, VV.WZ = UV
```

#### 882. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7059` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6702) · [Before (L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7059)

```diff
-       rM.position = MM.position.clone(), iM ? rM.rotationQuaternion = new OM.Quaternion(iM.x, iM.y, iM.z, iM.w) : rM.rotation = MM.rotation.clone(), rM.UL = MM.UL.clone()
+       eV.position = VV.position.clone(), xV ? eV.rotationQuaternion = new JV.Quaternion(xV.x, xV.y, xV.z, xV.w) : eV.rotation = VV.rotation.clone(), eV.WZ = VV.WZ.clone()
```

#### 883. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7063` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6706) · [Before (L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7063)

```diff
-       return (0, SM.f)(rM) ? (0, jM.p)(rM.CL, MM) : new((0, aM.c)().TransformNode)(MM, iM)
+       return (0, YV.f)(eV) ? (0, UV.t)(eV.gZ, VV) : new((0, yV.e)().TransformNode)(VV, xV)
```

#### 884. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7067` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6710) · [Before (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7067)

```diff
-       return (0, SM.f)(MM[0]) ? (0, jM.i)(MM, !1) : (0, PM.C)(MM)
+       return (0, YV.f)(VV[0]) ? (0, UV.p)(VV, !1) : (0, pV.r)(VV)
```

#### 885. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7075` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6718) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7075)

```diff
-       return ["Mesh", "LiteMesh"].includes(MM.getClassName()) && MM.getTotalVertices() > 0 ? MM : null
+       return ["Mesh", "LiteMesh"].includes(VV.getClassName()) && VV.getTotalVertices() > 0 ? VV : null
```

#### 886. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7095` → after: `L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6738) · [Before (L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7095)

```diff
-   38895: (MM, rM, iM) => {
+   39075: (VV, eV, xV) => {
```

#### 887. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7100` → after: `L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6743) · [Before (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7100)

```diff
-       g: () => sM,
+       i: () => MV,
```

#### 888. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7102-L7103` → after: `L6745-L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6745-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6745-L6746) · [Before (L7102-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7102-L7103)

```diff
-       n: () => tM,
-       r: () => kM,
+       l: () => oV,
+       p: () => XV,
```

#### 889. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7105-L7106` → after: `L6748-L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6748-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6748-L6749) · [Before (L7105-L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7105-L7106)

```diff
-       w: () => pM,
-       z: () => bM
+       u: () => CV,
+       y: () => WV
```

#### 890. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7108-L7114` → after: `L6751-L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6751-L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6751-L6757) · [Before (L7108-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7108-L7114)

```diff
-     var OM = iM(4577),
-       SM = iM(9816),
-       jM = iM(181),
-       aM = iM(1242),
-       PM = iM(2e3),
-       nM = iM(3563),
-       QM = iM(347),
+     var JV = xV(4642),
+       YV = xV(9820),
+       UV = xV(206),
+       yV = xV(1269),
+       pV = xV(2014),
+       QV = xV(3584),
+       nV = xV(380),
```

#### 891. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7116-L7121` → after: `L6759-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6759-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6759-L6764) · [Before (L7116-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7116-L7121)

```diff
-       LM = iM(3063),
-       mM = iM(38839),
-       HM = iM(38233),
-       hM = iM(38034),
-       JM = iM(625),
-       dM = iM(38900);
+       ZV = xV(3093),
+       vV = xV(39013),
+       rV = xV(38437),
+       kV = xV(38263),
+       bV = xV(657),
+       EV = xV(39081);
```

#### 892. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7125` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6768) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7125)

```diff
-       UM = (0, nM.f)("square_particle"),
+       tV = (0, QV.e)("square_particle"),
```

#### 893. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7129-L7131` → after: `L6772-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6772-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6772-L6774) · [Before (L7129-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7129-L7131)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.Cm = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.Cm = MM;
-         const rM = MM.CL.uZ("breakingParticles", 430);
-         this.pSystem = rM, rM.texture = (0, HM.t)(MM.CL.Hk(), UM), rM.blendMode = OM.d.Standard, this.pSystem.addColorGradient(1, (0, mM.j)(255, 255, 255, GM), (0, mM.j)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, GM, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.iv = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.iv = VV;
+         const eV = VV.gZ.fC("breakingParticles", 430);
+         this.pSystem = eV, eV.texture = (0, rV.u)(VV.gZ.dD(), tV), eV.blendMode = JV.g.Standard, this.pSystem.addColorGradient(1, (0, vV.k)(255, 255, 255, FV), (0, vV.k)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, FV, 1), this.pSy … [truncated]
```

#### 894. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7134-L7135` → after: `L6777-L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6777-L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6777-L6778) · [Before (L7134-L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7134-L7135)

```diff
-         if (!MM || null === this.Cm.kMM) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const rM = this.Cm.kMM,
+         if (!VV || null === this.iv.exV) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const eV = this.iv.exV,
```

#### 895. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7139-L7140` → after: `L6782-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6782-L6783) · [Before (L7139-L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7139-L7140)

```diff
-           } = (0, dM.d)(rM.position, SM.k[rM.VV].Hd, 0, this.boxWidth);
-         (0, mM.n)(this.pSystem, iM, OM), this.updateParticleSystemColour();
+           } = (0, EV.d)(eV.position, YV.k[eV.VVV].PE, 0, this.boxWidth);
+         (0, vV.p)(this.pSystem, xV, JV), this.updateParticleSystemColour();
```

#### 896. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7143` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6786) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7143)

```diff
-         jM.x = this.Cm.kMM.normal[0] + 1, jM.y = this.Cm.kMM.normal[1] + 1, jM.z = this.Cm.kMM.normal[2] + 1, aM.x = this.Cm.kMM.normal[0] - 1, aM.y = this.Cm.kMM.normal[1] - 1, aM.z = this.Cm.kMM.normal[2] - 1, 0 !== this.Cm.kMM.normal[0] ? (jM.x = this.Cm.kMM.normal[0], aM.x =  … [truncated]
+         UV.x = this.iv.exV.normal[0] + 1, UV.y = this.iv.exV.normal[1] + 1, UV.z = this.iv.exV.normal[2] + 1, yV.x = this.iv.exV.normal[0] - 1, yV.y = this.iv.exV.normal[1] - 1, yV.z = this.iv.exV.normal[2] - 1, 0 !== this.iv.exV.normal[0] ? (UV.x = this.iv.exV.normal[0], yV.x =  … [truncated]
```

#### 897. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7146` → after: `L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6789) · [Before (L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7146)

```diff
-         const MM = this.Cm.sE(this.Cm.kMM.position);
+         const VV = this.iv.mq(this.iv.exV.position);
```

#### 898. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7148` → after: `L6791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6791) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7148)

```diff
-         const rM = CM.getUniqueColoursForParticleSystem(this.Cm.kMM.position);
+         const eV = TV.getUniqueColoursForParticleSystem(this.iv.exV.position);
```

#### 899. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7158` → after: `L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6801) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7158)

```diff
-         MM.addRampGradient(0, (0, mM.e)(OM));
+         VV.addRampGradient(0, (0, vV.d)(JV));
```

#### 900. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7162` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6805) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7162)

```diff
-           MM.addRampGradient(jM / rM.length - 1e-4, (0, mM.e)(iM)), MM.addRampGradient(jM / rM.length, (0, mM.e)(OM))
+           VV.addRampGradient(UV / eV.length - 1e-4, (0, vV.d)(xV)), VV.addRampGradient(UV / eV.length, (0, vV.d)(JV))
```

#### 901. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7165` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6808) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7165)

```diff
-         MM.addRampGradient(1, (0, mM.e)(SM))
+         VV.addRampGradient(1, (0, vV.d)(YV))
```

#### 902. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7168-L7170` → after: `L6811-L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6811-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6811-L6813) · [Before (L7168-L7170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7168-L7170)

```diff
-         const rM = (0, LM.f)().sE(MM);
-         if (0 !== rM) return nM.e.getAverageColours((0, LM.b)().getMetaInfo(rM).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(MM)}`).stack)
+         const eV = (0, ZV.d)().mq(VV);
+         if (0 !== eV) return QV.b.getAverageColours((0, ZV.b)().getMetaInfo(eV).rootName);
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(VV)}`).stack)
```

#### 903. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7173` → after: `L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6816) · [Before (L7173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7173)

```diff
-     const eM = (0, nM.f)("generic_2");
+     const PV = (0, QV.e)("generic_2");
```

#### 904. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7175` → after: `L6818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6818) · [Before (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7175)

```diff
-     const wM = (0, nM.f)("critical_hit");
+     const NV = (0, QV.e)("critical_hit");
```

#### 905. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7179-L7184` → after: `L6822-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6822-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6822-L6827) · [Before (L7179-L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7179-L7184)

```diff
-       const rM = MM.CL.uZ("sprintParticles", 50);
-       rM.texture = (0, HM.t)(MM.CL.Hk(), eM), rM.blendMode = OM.d.Standard, rM.addColorGradient(0, (0, mM.j)(213, 237, 255, 1), (0, mM.j)(109, 170, 238, 1)), rM.addColorGradient(.2, (0, mM.j)(213, 237, 255, 1), (0, mM.j)(109, 170, 238, 1)), rM.addColorGradient(1, (0, mM.j)(213, 2 … [truncated]
-       rM.minLifeTime = .2, rM.maxLifeTime = .4, rM.minEmitPower = 30, rM.maxEmitPower = 50, rM.emitRate = 5, rM.gravity = new hM.sh(0, -100, 0), rM.minSize = .15, rM.maxSize = .3, rM.addVelocityGradient(0, .075, .15), rM.addVelocityGradient(1, .075, .15), (0, mM.t)(MM, rM), rM.cr … [truncated]
-       const iM = MM.CL.uZ("kj", 50);
-       iM.texture = (0, HM.t)(MM.CL.Hk(), wM), iM.blendMode = OM.d.Standard, iM.addColorGradient(0, (0, mM.j)(255, 167, 0, 1), (0, mM.j)(255, 103, 0, 1)), iM.addColorGradient(.2, (0, mM.j)(255, 167, 0, 1), (0, mM.j)(255, 103, 0, 1)), iM.addColorGradient(1, (0, mM.j)(255, 167, 0, 0 … [truncated]
-       iM.minLifeTime = .15, iM.maxLifeTime = .3, iM.minEmitPower = 30, iM.maxEmitPower = 50, iM.emitRate = 5, iM.gravity = new hM.sh(0, -100, 0), iM.minSize = .15, iM.maxSize = .3, iM.addVelocityGradient(0, .075, .15), iM.addVelocityGradient(1, .075, .15), (0, mM.t)(MM, iM), iM.c … [truncated]
+       const eV = VV.gZ.fC("sprintParticles", 50);
+       eV.texture = (0, rV.u)(VV.gZ.dD(), PV), eV.blendMode = JV.g.Standard, eV.addColorGradient(0, (0, vV.k)(213, 237, 255, 1), (0, vV.k)(109, 170, 238, 1)), eV.addColorGradient(.2, (0, vV.k)(213, 237, 255, 1), (0, vV.k)(109, 170, 238, 1)), eV.addColorGradient(1, (0, vV.k)(213, 2 … [truncated]
+       eV.minLifeTime = .2, eV.maxLifeTime = .4, eV.minEmitPower = 30, eV.maxEmitPower = 50, eV.emitRate = 5, eV.gravity = new kV.Ik(0, -100, 0), eV.minSize = .15, eV.maxSize = .3, eV.addVelocityGradient(0, .075, .15), eV.addVelocityGradient(1, .075, .15), (0, vV.u)(VV, eV), eV.cr … [truncated]
+       const xV = VV.gZ.fC("CU", 50);
+       xV.texture = (0, rV.u)(VV.gZ.dD(), NV), xV.blendMode = JV.g.Standard, xV.addColorGradient(0, (0, vV.k)(255, 167, 0, 1), (0, vV.k)(255, 103, 0, 1)), xV.addColorGradient(.2, (0, vV.k)(255, 167, 0, 1), (0, vV.k)(255, 103, 0, 1)), xV.addColorGradient(1, (0, vV.k)(255, 167, 0, 0 … [truncated]
+       xV.minLifeTime = .15, xV.maxLifeTime = .3, xV.minEmitPower = 30, xV.maxEmitPower = 50, xV.emitRate = 5, xV.gravity = new kV.Ik(0, -100, 0), xV.minSize = .15, xV.maxSize = .3, xV.addVelocityGradient(0, .075, .15), xV.addVelocityGradient(1, .075, .15), (0, vV.u)(VV, xV), xV.c … [truncated]
```

#### 906. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7206` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6849) · [Before (L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7206)

```diff
-         blendMode: OM.d.Standard
+         blendMode: JV.g.Standard
```

#### 907. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7243` → after: `L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6886) · [Before (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7243)

```diff
-         blendMode: OM.d.Standard
+         blendMode: JV.g.Standard
```

#### 908. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7280` → after: `L6923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6923) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7280)

```diff
-         blendMode: OM.d.Standard
+         blendMode: JV.g.Standard
```

#### 909. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7285` → after: `L6928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6928) · [Before (L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7285)

```diff
-         this.pSystem = MM, this.maxLifetimeSecs = rM, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.dh = !1, MM.manualEmitCount = 0
+         this.pSystem = VV, this.maxLifetimeSecs = eV, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.ik = !1, VV.manualEmitCount = 0
```

#### 910. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7288` → after: `L6931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6931) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7288)

```diff
-         this.dh || (this.pSystem.manualEmitCount = MM, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.ik || (this.pSystem.manualEmitCount = VV, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 911. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7291` → after: `L6934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6934) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7291)

```diff
-         this.dh = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.ik = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 912. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7303` → after: `L6946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6946) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7303)

```diff
-       (0, mM.t)(MM, rM.pSystem), (0, mM.q)(rM.pSystem, iM), rM.emitAmount(OM)
+       (0, vV.u)(VV, eV.pSystem), (0, vV.r)(eV.pSystem, xV), eV.emitAmount(JV)
```

#### 913. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7305` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6948) · [Before (L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7305)

```diff
-     const DM = (0, SM.l)("Fat Brown Mushroom");
+     const DV = (0, YV.n)("Fat Brown Mushroom");
```

#### 914. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7309` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6952) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7309)

```diff
-       ZM(MM, rM === DM ? aM.g.BounceBrownMushroom : aM.g.BounceRedMushroom, iM)
+       CV(VV, eV === DV ? yV.f.BounceBrownMushroom : yV.f.BounceRedMushroom, xV)
```

#### 915. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7313` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6956) · [Before (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7313)

```diff
-       const OM = rM === aM.g.Bunnyhop || rM === aM.g.JumpPad;
+       const JV = eV === yV.f.Bunnyhop || eV === yV.f.JumpPad;
```

#### 916. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7315-L7316` → after: `L6958-L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6958-L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6958-L6959) · [Before (L7315-L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7315-L7316)

```diff
-       rM === aM.g.Bunnyhop ? (SM = [213, 237, 255], PM = [109, 170, 238]) : rM === aM.g.BounceRedMushroom ? (SM = [196, 63, 63], PM = [148, 53, 53]) : rM === aM.g.BounceBrownMushroom ? (SM = [186, 132, 91], PM = [153, 107, 72]) : rM === aM.g.BunnyhopBounce ? (SM = [217, 170, 2],  … [truncated]
-       const nM = MM.hU.XE(MM.eD);
+       eV === yV.f.Bunnyhop ? (YV = [213, 237, 255], pV = [109, 170, 238]) : eV === yV.f.BounceRedMushroom ? (YV = [196, 63, 63], pV = [148, 53, 53]) : eV === yV.f.BounceBrownMushroom ? (YV = [186, 132, 91], pV = [153, 107, 72]) : eV === yV.f.BunnyhopBounce ? (YV = [217, 170, 2],  … [truncated]
+       const QV = VV.sF.YF(VV.bD);
```

#### 917. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7319` → after: `L6962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6962) · [Before (L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7319)

```diff
-         const MM = 1 === iM[1] ? jM.f.jy - .4 : 0;
+         const VV = 1 === xV[1] ? UV.f.nB - .4 : 0;
```

#### 918. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7327` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6970) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7327)

```diff
-       const LM = OM ? uM : RM;
+       const ZV = JV ? zV : GV;
```

#### 919. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7348` → after: `L6991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L6991) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7348)

```diff
-         this.Cm = MM, this.cfg = iM, this.pool = [], this.currentIndex = 0;
+         this.iv = VV, this.cfg = xV, this.pool = [], this.currentIndex = 0;
```

#### 920. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7359` → after: `L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7002) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7359)

```diff
-         const hM = this.Cm.camera.XE();
+         const kV = this.iv.camera.YF();
```

#### 921. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7361` → after: `L7004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7004) · [Before (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7361)

```diff
-         const JM = null !== (iM = rM.hideDist) && void 0 !== iM ? iM : this.cfg.hideDist;
+         const bV = null !== (xV = eV.hideDist) && void 0 !== xV ? xV : this.cfg.hideDist;
```

#### 922. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7366` → after: `L7009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7009) · [Before (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7366)

```diff
-         (0, mM.n)(UM, lM, EM), UM.minEmitPower = null !== (OM = rM.minEmitPower) && void 0 !== OM ? OM : UM.minEmitPower, UM.maxEmitPower = null !== (SM = rM.maxEmitPower) && void 0 !== SM ? SM : UM.maxEmitPower, UM.minSize = null !== (jM = rM.minSize) && void 0 !== jM ? jM : UM. … [truncated]
+         (0, vV.p)(tV, jV, qV), tV.minEmitPower = null !== (JV = eV.minEmitPower) && void 0 !== JV ? JV : tV.minEmitPower, tV.maxEmitPower = null !== (YV = eV.maxEmitPower) && void 0 !== YV ? YV : tV.maxEmitPower, tV.minSize = null !== (UV = eV.minSize) && void 0 !== UV ? UV : tV. … [truncated]
```

#### 923. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7370-L7372` → after: `L7013-L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7013-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7013-L7015) · [Before (L7370-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7370-L7372)

```diff
-           iM = this.Cm.CL.uZ(`particlePool_${MM}`, 50),
-           OM = rM.texture.includes("/") ? rM.texture : (0, nM.f)(rM.texture);
-         iM.texture = (0, HM.t)(this.Cm.CL.Hk(), OM), iM.blendMode = rM.blendMode, iM.minLifeTime = rM.minLifeTime, iM.maxLifeTime = rM.maxLifeTime, iM.minEmitPower = rM.minEmitPower, iM.maxEmitPower = rM.maxEmitPower, iM.minSize = rM.minSize, iM.maxSize = rM.maxSize, iM.gravity = … [truncated]
+           xV = this.iv.gZ.fC(`particlePool_${VV}`, 50),
+           JV = eV.texture.includes("/") ? eV.texture : (0, QV.e)(eV.texture);
+         xV.texture = (0, rV.u)(this.iv.gZ.dD(), JV), xV.blendMode = eV.blendMode, xV.minLifeTime = eV.minLifeTime, xV.maxLifeTime = eV.maxLifeTime, xV.minEmitPower = eV.minEmitPower, xV.maxEmitPower = eV.maxEmitPower, xV.minSize = eV.minSize, xV.maxSize = eV.maxSize, xV.gravity = … [truncated]
```

#### 924. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7374` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7017) · [Before (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7374)

```diff
-         this.applyColorGradients(iM, rM.colorGradients), (0, mM.t)(this.Cm, iM), iM.createBoxEmitter(new hM.sh(Math.min(rM.dir1[0], rM.dir2[0]), Math.min(rM.dir1[1], rM.dir2[1]), Math.min(rM.dir1[2], rM.dir2[2])), new hM.sh(Math.max(rM.dir1[0], rM.dir2[0]), Math.max(rM.dir1[1], r … [truncated]
+         this.applyColorGradients(xV, eV.colorGradients), (0, vV.u)(this.iv, xV), xV.createBoxEmitter(new kV.Ik(Math.min(eV.dir1[0], eV.dir2[0]), Math.min(eV.dir1[1], eV.dir2[1]), Math.min(eV.dir1[2], eV.dir2[2])), new kV.Ik(Math.max(eV.dir1[0], eV.dir2[0]), Math.max(eV.dir1[1], e … [truncated]
```

#### 925. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7384` → after: `L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7027) · [Before (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7384)

```diff
-             const rM = (0, mM.j)(jM.color[0], jM.color[1], jM.color[2], 1);
+             const eV = (0, vV.k)(UV.color[0], UV.color[1], UV.color[2], 1);
```

#### 926. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7388-L7389` → after: `L7031-L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7031-L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7031-L7032) · [Before (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7388-L7389)

```diff
-             const rM = (0, mM.j)(jM.minColor[0], jM.minColor[1], jM.minColor[2], null !== (OM = jM.minColor[3]) && void 0 !== OM ? OM : 1),
-               iM = (0, mM.j)(jM.maxColor[0], jM.maxColor[1], jM.maxColor[2], null !== (SM = jM.maxColor[3]) && void 0 !== SM ? SM : 1);
+             const eV = (0, vV.k)(UV.minColor[0], UV.minColor[1], UV.minColor[2], null !== (JV = UV.minColor[3]) && void 0 !== JV ? JV : 1),
+               xV = (0, vV.k)(UV.maxColor[0], UV.maxColor[1], UV.maxColor[2], null !== (YV = UV.maxColor[3]) && void 0 !== YV ? YV : 1);
```

#### 927. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7398-L7399` → after: `L7041-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7041-L7042) · [Before (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7398-L7399)

```diff
-         for (let MM = 0; MM < 3; MM++) iM.push((0, PM.B)(rM.pos1[MM], rM.pos2[MM], .5));
-         const OM = MM.hU.XE(MM.eD),
+         for (let VV = 0; VV < 3; VV++) xV.push((0, pV.A)(eV.pos1[VV], eV.pos2[VV], .5));
+         const JV = VV.sF.YF(VV.bD),
```

#### 928. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7406` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7049) · [Before (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7406)

```diff
-   38771: (MM, rM, iM) => {
+   38947: (VV, eV, xV) => {
```

#### 929. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7408` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7051) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7408)

```diff
-       d: () => yM
+       b: () => BV
```

#### 930. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7410-L7422` → after: `L7053-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7053-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7053-L7065) · [Before (L7410-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7410-L7422)

```diff
-     var OM = iM(38217),
-       SM = iM(38791),
-       jM = iM(38829),
-       aM = iM(38294),
-       PM = iM(38809),
-       nM = iM(38832),
-       QM = iM(3563),
-       zM = iM(38782),
-       LM = iM(38776),
-       mM = iM(38275),
-       HM = iM(38205),
-       hM = iM(38235),
-       JM = iM(3063);
+     var JV = xV(38421),
+       YV = xV(38968),
+       UV = xV(38994),
+       yV = xV(38497),
+       pV = xV(38985),
+       QV = xV(39003),
+       nV = xV(3584),
+       wV = xV(38961),
+       ZV = xV(38956),
+       vV = xV(38479),
+       rV = xV(38411),
+       kV = xV(38445),
+       bV = xV(3093);
```

#### 931. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7433-L7434` → after: `L7076-L7077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7076-L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7076-L7077) · [Before (L7433-L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7433-L7434)

```diff
-           ambientLevel: LM.e.ambient,
-           diffuseLevel: LM.e.diffuse
+           ambientLevel: ZV.c.ambient,
+           diffuseLevel: ZV.c.diffuse
```

#### 932. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7455` → after: `L7098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7098) · [Before (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7455)

```diff
-           alpha: zM.h
+           alpha: wV.k
```

#### 933. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7472-L7474` → after: `L7115-L7117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7115-L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7115-L7117) · [Before (L7472-L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7472-L7474)

```diff
-         } = (0, HM.d)({
-           name: `${CM}${LM}`,
-           YJ: rM,
+         } = (0, rV.e)({
+           name: `${TV}${ZV}`,
+           yE: eV,
```

#### 934. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7477-L7478` → after: `L7120-L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7120-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7120-L7121) · [Before (L7477-L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7477-L7478)

```diff
-         dM && (0, OM.H)(eM);
-         const wM = QM.e.getBlockAtlasArr().map((MM => (0, SM.g)(MM, rM, iM)));
+         EV && (0, JV.I)(PV);
+         const NV = nV.b.getBlockAtlasArr().map((VV => (0, YV.d)(VV, eV, xV)));
```

#### 935. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7481` → after: `L7124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7124) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7481)

```diff
-               transparencyMode: OM.n.alphaTest,
+               transparencyMode: JV.p.alphaTest,
```

#### 936. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7495` → after: `L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7138) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7495)

```diff
-               transparencyMode: OM.n.alphaBlend
+               transparencyMode: JV.p.alphaBlend
```

#### 937. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7497` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7140) · [Before (L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7497)

```diff
-           }), yM && (0, aM.b)(eM, (0, JM.f)().CL), lM && (0, mM.b)(eM, !0), wM.length > 0) {
+           }), BV && (0, yV.e)(PV, (0, bV.d)().gZ), jV && (0, vV.b)(PV, !0), NV.length > 0) {
```

#### 938. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7499-L7501` → after: `L7142-L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7142-L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7142-L7144) · [Before (L7499-L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7499-L7501)

```diff
-             urls: QM.e.getBlockAtlasArr(),
-             pixels: QM.e.getBlockAtlasPixels(),
-             layerWidth: QM.e.getBlockAtlasWidth()
+             urls: nV.b.getBlockAtlasArr(),
+             pixels: nV.b.getBlockAtlasPixels(),
+             layerWidth: nV.b.getBlockAtlasWidth()
```

#### 939. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7503` → after: `L7146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7146) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7503)

```diff
-           (0, OM.r)(eM, PM.g, (0, jM.h)(MM, wM, void 0, this.aJ(), !1))
+           (0, JV.q)(PV, pV.h, (0, UV.d)(VV, NV, void 0, this.Ab(), !1))
```

#### 940. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7505` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7148) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7505)

```diff
-         return (0, hM.q)(bM), MM[CM] = bM, bM
+         return (0, kV.l)(AV), VV[TV] = AV, AV
```

#### 941. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7514` → after: `L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7157) · [Before (L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7514)

```diff
-     (0, nM.g)(dM);
+     (0, QV.j)(EV);
```

#### 942. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7517` → after: `L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7160) · [Before (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7517)

```diff
-   39064: (MM, rM, iM) => {
+   39227: (VV, eV, xV) => {
```

#### 943. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7519-L7520` → after: `L7162-L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7162-L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7162-L7163) · [Before (L7519-L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7519-L7520)

```diff
-       e: () => oM,
-       i: () => YM
+       c: () => aV,
+       d: () => cV
```

#### 944. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7522` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7165) · [Before (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7522)

```diff
-     var OM = iM(38540);
+     var JV = xV(38735);
```

#### 945. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7543` → after: `L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7186) · [Before (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7543)

```diff
-     var aM = iM(38090);
+     var yV = xV(38323);
```

#### 946. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7571-L7572` → after: `L7214-L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7214-L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7214-L7215) · [Before (L7571-L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7571-L7572)

```diff
-             OM = Number.isNaN(OM) ? MM : OM, rM += this.childWeights[SM], iM += this.childWeights[SM] * MM
-           } return rM > 0 ? iM / rM : Number.isNaN(OM) ? 0 : OM
+             JV = Number.isNaN(JV) ? VV : JV, eV += this.childWeights[YV], xV += this.childWeights[YV] * VV
+           } return eV > 0 ? xV / eV : Number.isNaN(JV) ? 0 : JV
```

#### 947. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7584` → after: `L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7227) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7584)

```diff
-         OM = iM > 0 ? OM / iM : 1 / SM;
+         JV = xV > 0 ? JV / xV : 1 / YV;
```

#### 948. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7599` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7242) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7599)

```diff
-           const MM = this.gaitPhase + this.restGap() * (0, aM.j)(8 * iM, rM);
+           const VV = this.gaitPhase + this.restGap() * (0, yV.r)(8 * xV, eV);
```

#### 949. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7616` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7259) · [Before (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7616)

```diff
-         aM !== (null !== (OM = null === (SM = this.current) || void 0 === SM ? void 0 : SM.state) && void 0 !== OM ? OM : null) && (this.current = null === aM ? null : this.enter(aM, jM)), this.updateWeights(rM, iM)
+         yV !== (null !== (JV = null === (YV = this.current) || void 0 === YV ? void 0 : YV.state) && void 0 !== JV ? JV : null) && (this.current = null === yV ? null : this.enter(yV, UV)), this.updateWeights(eV, xV)
```

#### 950. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7631` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7274) · [Before (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7631)

```diff
-           const MM = this.instances.reduce(((MM, rM) => rM !== OM && (MM === OM || rM.weight < MM.weight) ? rM : MM));
+           const VV = this.instances.reduce(((VV, eV) => eV !== JV && (VV === JV || eV.weight < VV.weight) ? eV : VV));
```

#### 951. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7646` → after: `L7289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7289) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7646)

```diff
-         for (const LM of this.instances) LM.weight = LM === OM ? aM : LM.weight * QM, (LM === OM || LM.weight > PM) && (this.instances[zM++] = LM);
+         for (const ZV of this.instances) ZV.weight = ZV === JV ? yV : ZV.weight * nV, (ZV === JV || ZV.weight > pV) && (this.instances[wV++] = ZV);
```

#### 952. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7653` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7296) · [Before (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7653)

```diff
-         this.inputs = new Float64Array(OM.g.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(JV.h.Count), this.states = [], this.sleptSeconds = 0
```

#### 953. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7656` → after: `L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7299) · [Before (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7656)

```diff
-         for (let iM = 0; iM < OM.g.Count; iM++) this.inputs[iM] = MM[iM];
+         for (let xV = 0; xV < JV.h.Count; xV++) this.inputs[xV] = VV[xV];
```

#### 954. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7701-L7702` → after: `L7344-L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7344-L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7344-L7345) · [Before (L7701-L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7701-L7702)

```diff
-     var dM = iM(38497),
-       yM = iM(38547);
+     var EV = xV(38701),
+       BV = xV(38743);
```

#### 955. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7720` → after: `L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7363) · [Before (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7720)

```diff
-         return null !== (rM = this.indexByLowerName.get(MM.toLowerCase())) && void 0 !== rM ? rM : -1
+         return null !== (eV = this.indexByLowerName.get(VV.toLowerCase())) && void 0 !== eV ? eV : -1
```

#### 956. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7723-L7724` → after: `L7366-L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7366-L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7366-L7367) · [Before (L7723-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7723-L7724)

```diff
-     var UM = iM(38506),
-       GM = iM(38515);
+     var tV = xV(38706),
+       FV = xV(38718);
```

#### 957. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7729` → after: `L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7372) · [Before (L7729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7729)

```diff
-         this.name = MM, this.clip = rM, this.pool = iM, this.mode = SM, this.mask = jM, this.fadeInSeconds = aM, this.fadeOutSeconds = PM, this.speed = nM, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(OM.d.length), this.elapsed =  … [truncated]
+         this.name = VV, this.clip = eV, this.pool = xV, this.mode = YV, this.mask = UV, this.fadeInSeconds = yV, this.fadeOutSeconds = pV, this.speed = QV, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(JV.b.length), this.elapsed =  … [truncated]
```

#### 958. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7737` → after: `L7380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7380) · [Before (L7737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7737)

```diff
-         return MM === GM.h.Once && (iM > 0 ? this.elapsed >= OM : this.elapsed > OM)
+         return VV === FV.i.Once && (xV > 0 ? this.elapsed >= JV : this.elapsed > JV)
```

#### 959. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7768` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7411) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7768)

```diff
-           iM.elapsed < rM.startDelaySeconds || (iM.weight = iM.fadeInSeconds > 0 ? Math.min(1, iM.weight + MM / iM.fadeInSeconds) : 1, rM.loop === GM.h.Once && iM.weight >= 1 && iM.elapsed >= rM.startDelaySeconds + rM.lengthSeconds - iM.fadeOutSeconds * iM.speed && (iM.stopping = … [truncated]
+           xV.elapsed < eV.startDelaySeconds || (xV.weight = xV.fadeInSeconds > 0 ? Math.min(1, xV.weight + VV / xV.fadeInSeconds) : 1, eV.loop === FV.i.Once && xV.weight >= 1 && xV.elapsed >= eV.startDelaySeconds + eV.lengthSeconds - xV.fadeOutSeconds * xV.speed && (xV.stopping = … [truncated]
```

#### 960. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7780-L7783` → after: `L7423-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7423-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7423-L7426) · [Before (L7780-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7780-L7783)

```diff
-     var bM = iM(38530),
-       wM = iM(38555),
-       tM = iM(38116),
-       gM = iM(38524);
+     var AV = xV(38725),
+       NV = xV(38748),
+       XV = xV(38349),
+       MV = xV(38723);
```

#### 961. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7790-L7791` → after: `L7433-L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7433-L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7433-L7434) · [Before (L7790-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7790-L7791)

```diff
-         this.pose = new tM.g(iM), this.accumulator = new tM.d(iM), this.inputs = new Float64Array(OM.g.Count + rM.filters.length), this.layers = rM.layers.map(((rM, iM) => new QM(rM, MM.layerMasks[iM]))), this.runtimes = rM.pools.map((MM => ({
-           queries: new Float64Array(gM.h.Count),
+         this.pose = new XV.f(xV), this.accumulator = new XV.b(xV), this.inputs = new Float64Array(JV.h.Count + eV.filters.length), this.layers = eV.layers.map(((eV, xV) => new nV(eV, VV.layerMasks[xV]))), this.runtimes = eV.pools.map((VV => ({
+           queries: new Float64Array(MV.f.Count),
```

#### 962. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7795` → after: `L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7438) · [Before (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7795)

```diff
-           return null !== (iM = MM.variables.slots.get(rM.name)) && void 0 !== iM ? iM : -1
+           return null !== (xV = VV.variables.slots.get(eV.name)) && void 0 !== xV ? xV : -1
```

#### 963. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7799` → after: `L7442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7442) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7799)

```diff
-             const jM = OM.d.indexOf(rM.variables[SM].input);
+             const UV = JV.b.indexOf(eV.variables[YV].input);
```

#### 964. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7811` → after: `L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7454) · [Before (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7811)

```diff
-         this.inputs[MM] = Number.isFinite(rM) ? rM : 0
+         this.inputs[VV] = Number.isFinite(eV) ? eV : 0
```

#### 965. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7829` → after: `L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7472) · [Before (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7829)

```diff
-         for (let rM = 0; rM < OM.d.length; rM++) MM.heldInputs[rM] = this.inputs[OM.d[rM]];
+         for (let eV = 0; eV < JV.b.length; eV++) VV.heldInputs[eV] = this.inputs[JV.b[eV]];
```

#### 966. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7838` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7481) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7838)

```diff
-           PM = (0, bM.i)(this.rigged.binding.pools, MM);
+           pV = (0, AV.h)(this.rigged.binding.pools, VV);
```

#### 967. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7843` → after: `L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7486) · [Before (L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7843)

```diff
-         } = PM, zM = sM(iM, 0, 1), LM = (zM > 0 || 0 === aM ? nM.startDelaySeconds + zM * nM.lengthSeconds : 0) + sM(SM, 0, WM) * aM, mM = new CM(uM + nM.id, nM, QM, UM.h.Add, null, jM, jM, aM, LM);
+         } = pV, wV = gV(xV, 0, 1), ZV = (wV > 0 || 0 === yV ? QV.startDelaySeconds + wV * QV.lengthSeconds : 0) + gV(YV, 0, RV) * yV, vV = new TV(zV + QV.id, QV, nV, tV.k.Add, null, UV, UV, yV, ZV);
```

#### 968. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7847` → after: `L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7490) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7847)

```diff
-         const rM = (0, bM.i)(this.rigged.binding.pools, MM);
+         const eV = (0, AV.h)(this.rigged.binding.pools, VV);
```

#### 969. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7851` → after: `L7494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7494) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7851)

```diff
-         const rM = (0, bM.i)(this.rigged.binding.pools, MM);
+         const eV = (0, AV.h)(this.rigged.binding.pools, VV);
```

#### 970. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7862` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7505) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7862)

```diff
-         const iM = Math.max(0, Number.isFinite(MM) ? MM : 0);
+         const xV = Math.max(0, Number.isFinite(VV) ? VV : 0);
```

#### 971. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7869` → after: `L7512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7512) · [Before (L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7869)

```diff
-         const jM = this.travelBacklog * (0, aM.j)(20, iM);
+         const UV = this.travelBacklog * (0, yV.r)(20, xV);
```

#### 972. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7877` → after: `L7520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7520) · [Before (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7877)

```diff
-               for (let iM = 0; iM < MM.length; iM++) rM[OM.g.Count + iM] = (0, OM.k)(MM[iM], rM)
+               for (let xV = 0; xV < VV.length; xV++) eV[JV.h.Count + xV] = (0, JV.l)(VV[xV], eV)
```

#### 973. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7895-L7896` → after: `L7538-L7539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7538-L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7538-L7539) · [Before (L7895-L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7895-L7896)

```diff
-               const SM = (0, OM.k)(MM[iM], rM);
-               if (Math.abs(rM[OM.g.Count + iM] - SM) > 1e-6 * Math.max(1, Math.abs(SM))) return !1
+               const YV = (0, JV.l)(VV[xV], eV);
+               if (Math.abs(eV[JV.h.Count + xV] - YV) > 1e-6 * Math.max(1, Math.abs(YV))) return !1
```

#### 974. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7909-L7910` → after: `L7552-L7553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7552-L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7552-L7553) · [Before (L7909-L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7909-L7910)

```diff
-             PM = (0, OM.k)(jM, this.inputs),
-             nM = OM.g.Count + SM,
+             pV = (0, JV.l)(UV, this.inputs),
+             QV = JV.h.Count + YV,
```

#### 975. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7913` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7556) · [Before (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7913)

```diff
-           this.inputs[nM] = rM ? PM : QM + (PM - QM) * (0, aM.j)(zM, MM)
+           this.inputs[QV] = eV ? pV : nV + (pV - nV) * (0, yV.r)(wV, VV)
```

#### 976. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7950` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7593) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7950)

```diff
-         nM && this.accumulator.applyTo(this.pose, MM.weight, jM.mode === UM.h.Override), this.accumulator.clear()
+         QV && this.accumulator.applyTo(this.pose, VV.weight, UV.mode === tV.k.Override), this.accumulator.clear()
```

#### 977. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7963` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7606) · [Before (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7963)

```diff
-           OM.strideBlocks > 0 ? HM = MM.gaitPhase * jM.lengthSeconds : (MM.elapsed[QM] = mM ? pM(jM, MM.elapsed[QM], iM * nM, zM) : MM.elapsed[QM] + iM * nM, HM = (0, wM.e)(jM, MM.elapsed[QM])), MM.childTimes[QM] = HM, mM && !Number.isNaN(HM) && this.sampleClip(jM, zM, HM, LM, rM … [truncated]
+           JV.strideBlocks > 0 ? rV = VV.gaitPhase * UV.lengthSeconds : (VV.elapsed[nV] = vV ? WV(UV, VV.elapsed[nV], xV * QV, wV) : VV.elapsed[nV] + xV * QV, rV = (0, NV.d)(UV, VV.elapsed[nV])), VV.childTimes[nV] = rV, vV && !Number.isNaN(rV) && this.sampleClip(UV, wV, rV, ZV, eV … [truncated]
```

#### 978. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7975` → after: `L7618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7618) · [Before (L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7975)

```diff
-               SM = (0, wM.e)(OM.clip, OM.elapsed);
+               YV = (0, NV.d)(JV.clip, JV.elapsed);
```

#### 979. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7983` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7626) · [Before (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7983)

```diff
-           this.accumulator.applyTo(this.pose, 1, MM.mode === UM.h.Override, !0), this.accumulator.clear()
+           this.accumulator.applyTo(this.pose, 1, VV.mode === tV.k.Override, !0), this.accumulator.clear()
```

#### 980. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7987` → after: `L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7630) · [Before (L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7987)

```diff
-         rM.queries[gM.h.AnimTime] = iM;
+         eV.queries[MV.f.AnimTime] = xV;
```

#### 981. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L7991` → after: `L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7634) · [Before (L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L7991)

```diff
-           nM = MM.loop === GM.h.Loop,
+           QV = VV.loop === FV.i.Loop,
```

#### 982. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8000` → after: `L7643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7643) · [Before (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8000)

```diff
-             (0, wM.g)(LM.rotation, iM, nM, rM, zM);
+             (0, NV.h)(ZV.rotation, xV, QV, eV, wV);
```

#### 983. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8004` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7647) · [Before (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8004)

```diff
-             (0, wM.g)(LM.position, iM, nM, rM, zM);
+             (0, NV.h)(ZV.position, xV, QV, eV, wV);
```

#### 984. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8008` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7651) · [Before (L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8008)

```diff
-             (0, wM.g)(LM.scale, iM, nM, rM, zM);
+             (0, NV.h)(ZV.scale, xV, QV, eV, wV);
```

#### 985. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8019` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7662) · [Before (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8019)

```diff
-         return iM < 0 ? MM.constant : iM < OM.g.Count ? rM[iM] : this.inputs[iM]
+         return xV < 0 ? VV.constant : xV < JV.h.Count ? eV[xV] : this.inputs[xV]
```

#### 986. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8042-L8043` → after: `L7685-L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7685-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7685-L7686) · [Before (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8042-L8043)

```diff
-             raw: (0, OM.k)(MM, this.inputs),
-             value: this.inputs[OM.g.Count + rM]
+             raw: (0, JV.l)(VV, this.inputs),
+             value: this.inputs[JV.h.Count + eV]
```

#### 987. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8073-L8074` → after: `L7716-L7717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7716-L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7716-L7717) · [Before (L8073-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8073-L8074)

```diff
-       const SM = OM.queries[gM.h.DeltaTime];
-       OM.queries[gM.h.AnimTime] = rM, OM.queries[gM.h.DeltaTime] = iM;
+       const YV = JV.queries[MV.f.DeltaTime];
+       JV.queries[MV.f.AnimTime] = eV, JV.queries[MV.f.DeltaTime] = xV;
```

#### 988. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8076` → after: `L7719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7719) · [Before (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8076)

```diff
-       return OM.queries[gM.h.DeltaTime] = SM, jM
+       return JV.queries[MV.f.DeltaTime] = YV, UV
```

#### 989. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8082` → after: `L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7725) · [Before (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8082)

```diff
-       return Number.isNaN(MM) ? OM : Math.min(iM, Math.max(rM, MM))
+       return Number.isNaN(VV) ? JV : Math.min(xV, Math.max(eV, VV))
```

#### 990. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8084-L8085` → after: `L7727-L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7727-L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7727-L7728) · [Before (L8084-L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8084-L8085)

```diff
-     var DM = iM(38502),
-       kM = iM(3682);
+     var DV = xV(38703),
+       iV = xV(3706);
```

#### 991. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8091` → after: `L7734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7734) · [Before (L8091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8091)

```diff
-         (iM.severity === GM.e.Error ? console.error : console.warn)(`Animation for ${MM}: ${iM.source}: ${iM.message}`)
+         (xV.severity === FV.e.Error ? console.error : console.warn)(`Animation for ${VV}: ${xV.source}: ${xV.message}`)
```

#### 992. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8096` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7739) · [Before (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8096)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.vx = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.WH = 0
```

#### 993. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8099` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7742) · [Before (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8099)

```diff
-           return this.vx
+           return this.WH
```

#### 994. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8102` → after: `L7745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7745) · [Before (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8102)

```diff
-           this.vx++
+           this.WH++
```

#### 995. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8135` → after: `L7778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7778) · [Before (L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8135)

```diff
-             for (const MM of null === SM ? [] : (0, yM.i)(SM)) OM.add(MM);
+             for (const VV of null === YV ? [] : (0, BV.g)(YV)) JV.add(VV);
```

#### 996. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8151` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7794) · [Before (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8151)

```diff
-               OM = Array.from(SM, (MM => null !== MM && void 0 !== MM ? MM : "")), NM.set(iM, OM)
+               JV = Array.from(YV, (VV => null !== VV && void 0 !== VV ? VV : "")), hV.set(xV, JV)
```

#### 997. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8170` → after: `L7813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7813) · [Before (L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8170)

```diff
-             fM(jM ? `${MM} (texture pack)` : MM, SM.diagnostics), jM && !SM.animatesAnyBone && console.error(`Animation for ${MM} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), OM.set(iM, SM)
+             oV(UV ? `${VV} (texture pack)` : VV, YV.diagnostics), UV && !YV.animatesAnyBone && console.error(`Animation for ${VV} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), JV.set(xV, YV)
```

#### 998. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8179-L8181` → after: `L7822-L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7822-L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7822-L7824) · [Before (L8179-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8179-L8181)

```diff
-           const rM = (0, dM.e)(),
-             iM = DM.c.has(MM) || this.drawnWithPlayerRig(MM),
-             OM = (0, DM.j)(rM, iM ? oM : MM, []);
+           const eV = (0, EV.c)(),
+             xV = DV.f.has(VV) || this.drawnWithPlayerRig(VV),
+             JV = (0, DV.k)(eV, xV ? aV : VV, []);
```

#### 999. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8185-L8186` → after: `L7828-L7829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7828-L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7828-L7829) · [Before (L8185-L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8185-L8186)

```diff
-             const iM = (0, DM.k)(this.getPack(), rM, MM);
-             fM(`${MM} (texture pack)`, iM.diagnostics), SM = iM.binding
+             const xV = (0, DV.l)(this.getPack(), eV, VV);
+             oV(`${VV} (texture pack)`, xV.diagnostics), YV = xV.binding
```

#### 1000. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8194` → after: `L7837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7837) · [Before (L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8194)

```diff
-           null === this.pack && (this.pack = (0, DM.q)(null !== null ? null : (0, kM.b)(), "texturePack"), fM("the texture pack", this.pack.diagnostics));
+           null === this.pack && (this.pack = (0, DV.s)(null !== null ? null : (0, iV.e)(), "texturePack"), oV("the texture pack", this.pack.diagnostics));
```

#### 1001. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8200` → after: `L7843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7843) · [Before (L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8200)

```diff
-   38490: (MM, rM, iM) => {
+   38698: (VV, eV, xV) => {
```

#### 1002. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8202-L8203` → after: `L7845-L7847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7845-L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7845-L7847) · [Before (L8202-L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8202-L8203)

```diff
-       c: () => hM,
-       f: () => JM,
+       b: () => kV,
+       d: () => bV,
+       h: () => ZV,
```

#### 1003. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8206-L8207` → after: `L7850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7850) · [Before (L8206-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8206-L8207)

```diff
-       n: () => HM,
-       q: () => mM
+       n: () => vV
```

#### 1004. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8209-L8213` → after: `L7852-L7856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7852-L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7852-L7856) · [Before (L8209-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8209-L8213)

```diff
-     var OM = iM(38497),
-       SM = iM(38555),
-       jM = iM(38515),
-       aM = iM(38090),
-       PM = iM(38524);
+     var JV = xV(38701),
+       YV = xV(38748),
+       UV = xV(38718),
+       yV = xV(38323),
+       pV = xV(38723);
```

#### 1005. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8222` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7865) · [Before (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8222)

```diff
-           null !== rM ? (OM.push(aM), SM.push(rM)) : console.warn(`${MM.id} animates ${aM.name}, which the model has no node for`)
+           null !== eV ? (JV.push(yV), YV.push(eV)) : console.warn(`${VV.id} animates ${yV.name}, which the model has no node for`)
```

#### 1006. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8230` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7873) · [Before (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8230)

```diff
-           (0, aM.e)(MM.x, MM.y, MM.z, MM.w, jM), this.restEuler.set(jM, 3 * PM)
+           (0, yV.f)(VV.x, VV.y, VV.z, VV.w, UV), this.restEuler.set(UV, 3 * pV)
```

#### 1007. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8233` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7876) · [Before (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8233)

```diff
-           queries: new Float64Array(PM.h.Count),
+           queries: new Float64Array(pV.f.Count),
```

#### 1008. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8261-L8263` → after: `L7904-L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7904-L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7904-L7906) · [Before (L8261-L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8261-L8263)

```diff
-         } = this, JM = (0, SM.e)(rM, MM);
-         iM.queries[PM.h.AnimTime] = JM, iM.queries[PM.h.LifeTime] = MM;
-         const dM = rM.loop === jM.h.Loop,
+         } = this, bV = (0, YV.d)(eV, VV);
+         xV.queries[pV.f.AnimTime] = bV, xV.queries[pV.f.LifeTime] = VV;
+         const EV = eV.loop === UV.i.Loop,
```

#### 1009. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8271` → after: `L7914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7914) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8271)

```diff
-           if (null !== MM && (yM ? OM.fill(0) : (0, SM.g)(MM, JM, dM, iM, OM), (0, aM.h)(zM[lM] + OM[0], zM[lM + 1] + OM[1], zM[lM + 2] + OM[2], this.trigs[jM], QM), LM.set(QM, 4 * jM)), null !== rM) {
+           if (null !== VV && (BV ? JV.fill(0) : (0, YV.h)(VV, bV, EV, xV, JV), (0, yV.m)(wV[jV] + JV[0], wV[jV + 1] + JV[1], wV[jV + 2] + JV[2], this.trigs[UV], nV), ZV.set(nV, 4 * UV)), null !== eV) {
```

#### 1010. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8275` → after: `L7918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7918) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8275)

```diff
-             yM ? OM.fill(0) : (0, SM.g)(rM, JM, dM, iM, OM), mM[lM] = MM.x + OM[0] * nM, mM[lM + 1] = MM.y + OM[1] * nM, mM[lM + 2] = MM.z + OM[2] * nM
+             BV ? JV.fill(0) : (0, YV.h)(eV, bV, EV, xV, JV), vV[jV] = VV.x + JV[0] * QV, vV[jV + 1] = VV.y + JV[1] * QV, vV[jV + 2] = VV.z + JV[2] * QV
```

#### 1011. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8281` → after: `L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7924) · [Before (L8281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8281)

```diff
-             yM ? OM.fill(1) : (0, SM.g)(PM, JM, dM, iM, OM), HM[lM] = MM.x * OM[0], HM[lM + 1] = MM.y * OM[1], HM[lM + 2] = MM.z * OM[2]
+             BV ? JV.fill(1) : (0, YV.h)(pV, bV, EV, xV, JV), rV[jV] = VV.x * JV[0], rV[jV + 1] = VV.y * JV[1], rV[jV + 2] = VV.z * JV[2]
```

#### 1012. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8290-L8291` → after: `L7933-L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7933-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7933-L7934) · [Before (L8290-L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8290-L8291)

```diff
-       } = (0, OM.e)(), SM = iM.find(MM);
-       return null === SM ? (console.warn(`Cosmetic clip ${MM} is not a built-in clip`), null) : new QM(SM, iM.variables.createValues(), rM)
+       } = (0, JV.c)(), YV = xV.find(VV);
+       return null === YV ? (console.warn(`Cosmetic clip ${VV} is not a built-in clip`), null) : new nV(YV, xV.variables.createValues(), eV)
```

#### 1013. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8298` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7941) · [Before (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8298)

```diff
-         scale: MM.UL.clone()
+         scale: VV.WZ.clone()
```

#### 1014. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8312` → after: `L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7955) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8312)

```diff
-         PM.rotationQuaternion.set(iM[MM], iM[MM + 1], iM[MM + 2], iM[MM + 3]), PM.position.set(OM[aM], OM[aM + 1], OM[aM + 2]), PM.UL.set(SM[aM], SM[aM + 1], SM[aM + 2])
+         pV.rotationQuaternion.set(xV[VV], xV[VV + 1], xV[VV + 2], xV[VV + 3]), pV.position.set(JV[yV], JV[yV + 1], JV[yV + 2]), pV.WZ.set(YV[yV], YV[yV + 1], YV[yV + 2])
```

#### 1015. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8335` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L7978) · [Before (L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8335)

```diff
-           return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
+           return null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : null
```

#### 1016. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8371` → after: `L8014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8014) · [Before (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8371)

```diff
-   39105: (MM, rM, iM) => {
+   39260: (VV, eV, xV) => {
```

#### 1017. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8375-L8376` → after: `L8018-L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8018-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8018-L8019) · [Before (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8375-L8376)

```diff
-     var OM = iM(38034),
-       SM = iM(38025);
+     var JV = xV(38263),
+       YV = xV(38256);
```

#### 1018. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8379` → after: `L8022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8022) · [Before (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8379)

```diff
-       PM = new OM.sh;
+       pV = new JV.Ik;
```

#### 1019. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8383` → after: `L8026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8026) · [Before (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8383)

```diff
-       const QM = MM.hU.getState(rM, "animator");
+       const nV = VV.sF.getState(eV, "animator");
```

#### 1020. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8387` → after: `L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8030) · [Before (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8387)

```diff
-         Zk: LM
+         pC: ZV
```

#### 1021. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8390` → after: `L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8033) · [Before (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8390)

```diff
-       const mM = null !== (nM = QM.getDrawnNode(jM)) && void 0 !== nM ? nM : QM.getDrawnNode(aM);
+       const vV = null !== (QV = nV.getDrawnNode(UV)) && void 0 !== QV ? QV : nV.getDrawnNode(yV);
```

#### 1022. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8393` → after: `L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8036) · [Before (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8393)

```diff
-       null !== HM && (OM.sh.TransformNormalFromFloatsToRef(mM.currentPosX, mM.currentPosY, mM.currentPosZ, zM.getNodeWorldMatrix(LM, HM), PM), iM[0] += PM.x, iM[1] += PM.y, iM[2] += PM.z)
+       null !== rV && (JV.Ik.TransformNormalFromFloatsToRef(vV.currentPosX, vV.currentPosY, vV.currentPosZ, wV.getNodeWorldMatrix(ZV, rV), pV), xV[0] += pV.x, xV[1] += pV.y, xV[2] += pV.z)
```

#### 1023. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8396` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8039) · [Before (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8396)

```diff
-   38834: (MM, rM, iM) => {
+   39008: (VV, eV, xV) => {
```

#### 1024. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8398-L8400` → after: `L8041-L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8041-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8041-L8043) · [Before (L8398-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8398-L8400)

```diff
-       b: () => jM,
-       c: () => PM,
-       g: () => aM
+       e: () => UV,
+       g: () => pV,
+       j: () => yV
```

#### 1025. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8402-L8403` → after: `L8045-L8046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8045-L8046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8045-L8046) · [Before (L8402-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8402-L8403)

```diff
-     var OM = iM(3563),
-       SM = iM(38771);
+     var JV = xV(3584),
+       YV = xV(38947);
```

#### 1026. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8407` → after: `L8050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8050) · [Before (L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8407)

```diff
-       return OM.e.getImagesPerAtlas().length > 1 && SM.d.aJ()
+       return JV.b.getImagesPerAtlas().length > 1 && YV.b.Ab()
```

#### 1027. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8412` → after: `L8055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8055) · [Before (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8412)

```diff
-       return iM ? SM : (MM + SM) / OM.e.getImagesPerAtlas()[0]
+       return xV ? YV : (VV + YV) / JV.b.getImagesPerAtlas()[0]
```

#### 1028. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8415` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8058) · [Before (L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8415)

```diff
-   38852: (MM, rM, iM) => {
+   39033: (VV, eV, xV) => {
```

#### 1029. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8417-L8420` → after: `L8060-L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8060-L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8060-L8063) · [Before (L8417-L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8417-L8420)

```diff
-       b: () => sM,
-       i: () => kM,
-       e: () => DM,
-       l: () => FM,
+       d: () => gV,
+       g: () => iV,
+       f: () => DV,
+       j: () => mV,
```

#### 1030. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8423-L8437` → after: `L8066-L8080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8066-L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8066-L8080) · [Before (L8423-L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8423-L8437)

```diff
-     var OM = iM(38034),
-       SM = iM(4843),
-       jM = iM(9816),
-       aM = iM(625),
-       PM = iM(38158),
-       nM = iM(38235),
-       QM = iM(38878),
-       zM = iM(38217),
-       LM = iM(38797),
-       mM = iM(38869),
-       HM = iM(3614),
-       hM = iM(38859),
-       JM = iM(38149),
-       dM = iM(3563),
-       yM = iM(3571);
+     var JV = xV(38263),
+       YV = xV(4940),
+       UV = xV(9820),
+       yV = xV(657),
+       pV = xV(38385),
+       QV = xV(38445),
+       nV = xV(39055),
+       wV = xV(38421),
+       ZV = xV(38977),
+       vV = xV(39053),
+       rV = xV(3630),
+       kV = xV(39042),
+       bV = xV(38380),
+       EV = xV(3584),
+       BV = xV(3586);
```

#### 1031. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8455` → after: `L8098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8098) · [Before (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8455)

```diff
-               const OM = [...null !== (rM = MM.extensionsUsed) && void 0 !== rM ? rM : [], ...null !== (iM = MM.extensionsRequired) && void 0 !== iM ? iM : []];
+               const JV = [...null !== (eV = VV.extensionsUsed) && void 0 !== eV ? eV : [], ...null !== (xV = VV.extensionsRequired) && void 0 !== xV ? xV : []];
```

#### 1032. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8458-L8459` → after: `L8101-L8102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8101-L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8101-L8102) · [Before (L8458-L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8458-L8459)

```diff
-           const HM = null !== (rM = LM.materials) && void 0 !== rM ? rM : [],
-             hM = null !== (iM = LM.meshes) && void 0 !== iM ? iM : [];
+           const rV = null !== (eV = ZV.materials) && void 0 !== eV ? eV : [],
+             kV = null !== (xV = ZV.meshes) && void 0 !== xV ? xV : [];
```

#### 1033. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8461` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8104) · [Before (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8461)

```diff
-           const JM = null !== (OM = hM[0].primitives) && void 0 !== OM ? OM : [];
+           const bV = null !== (JV = kV[0].primitives) && void 0 !== JV ? JV : [];
```

#### 1034. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8465` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8108) · [Before (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8465)

```diff
-               const iM = null !== (rM = MM.nodes) && void 0 !== rM ? rM : [];
+               const xV = null !== (eV = VV.nodes) && void 0 !== eV ? eV : [];
```

#### 1035. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8469` → after: `L8112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8112) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8469)

```diff
-             yM = null !== (SM = dM.pbrMetallicRoughness) && void 0 !== SM ? SM : {},
+             BV = null !== (YV = EV.pbrMetallicRoughness) && void 0 !== YV ? YV : {},
```

#### 1036. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8473` → after: `L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8116) · [Before (L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8473)

```diff
-           return JSON.stringify([lM, EM, null !== (jM = yM.baseColorFactor) && void 0 !== jM ? jM : [1, 1, 1, 1], null !== (aM = dM.emissiveFactor) && void 0 !== aM ? aM : [0, 0, 0], null !== (PM = dM.doubleSided) && void 0 !== PM && PM, null !== (nM = dM.alphaMode) && void 0 !== … [truncated]
+           return JSON.stringify([jV, qV, null !== (UV = BV.baseColorFactor) && void 0 !== UV ? UV : [1, 1, 1, 1], null !== (yV = EV.emissiveFactor) && void 0 !== yV ? yV : [0, 0, 0], null !== (pV = EV.doubleSided) && void 0 !== pV && pV, null !== (QV = EV.alphaMode) && void 0 !== … [truncated]
```

#### 1037. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8502` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8145) · [Before (L8502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8502)

```diff
-         if ("extensions" === rM && Object.keys(null !== iM && void 0 !== iM ? iM : {}).some((MM => !eM.has(MM))) || wM(iM)) return !0
+         if ("extensions" === eV && Object.keys(null !== xV && void 0 !== xV ? xV : {}).some((VV => !PV.has(VV))) || NV(xV)) return !0
```

#### 1038. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8514` → after: `L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8157) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8514)

```diff
-       const JM = null !== (aM = hM.byteOffset) && void 0 !== aM ? aM : 0,
+       const bV = null !== (yV = kV.byteOffset) && void 0 !== yV ? yV : 0,
```

#### 1039. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8520` → after: `L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8163) · [Before (L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8520)

```diff
-       return [(EM = rM.subarray(JM, JM + dM), `${gM(EM,2166136261).toString(16)}-${gM(EM,1867293075).toString(16)}-${EM.length}`), HM.mimeType, null !== (PM = iM.texCoord) && void 0 !== PM ? PM : 0, null !== (nM = yM.wrapS) && void 0 !== nM ? nM : GM, null !== (QM = yM.wrapT) &&  … [truncated]
+       return [(qV = eV.subarray(bV, bV + EV), `${MV(qV,2166136261).toString(16)}-${MV(qV,1867293075).toString(16)}-${qV.length}`), rV.mimeType, null !== (pV = xV.texCoord) && void 0 !== pV ? pV : 0, null !== (QV = BV.wrapS) && void 0 !== QV ? QV : FV, null !== (nV = BV.wrapT) &&  … [truncated]
```

#### 1040. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8528-L8531` → after: `L8171-L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8171-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8171-L8174) · [Before (L8528-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8528-L8531)

```diff
-     var uM = iM(38864),
-       RM = iM(38253),
-       pM = iM(38205),
-       WM = iM(3063);
+     var zV = xV(39045),
+       GV = xV(38466),
+       WV = xV(38411),
+       RV = xV(3093);
```

#### 1041. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8536` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8179) · [Before (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8536)

```diff
-       return sM * (null !== (rM = MM.modelScale) && void 0 !== rM ? rM : 1)
+       return gV * (null !== (eV = VV.modelScale) && void 0 !== eV ? eV : 1)
```

#### 1042. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8545` → after: `L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8188) · [Before (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8545)

```diff
-       } = null !== (rM = MM.customModelInfo) && void 0 !== rM ? rM : {}, nM = null !== (iM = null === (OM = MM.model) || void 0 === OM ? void 0 : OM.split("|")) && void 0 !== iM ? iM : [], QM = nM.includes("rotatable") && SM.g.includes(nM[0]), zM = QM || "CustomModel" === nM[0];
+       } = null !== (eV = VV.customModelInfo) && void 0 !== eV ? eV : {}, QV = null !== (xV = null === (JV = VV.model) || void 0 === JV ? void 0 : JV.split("|")) && void 0 !== xV ? xV : [], nV = QV.includes("rotatable") && YV.f.includes(QV[0]), wV = nV || "CustomModel" === QV[0];
```

#### 1043. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8548-L8550` → after: `L8191-L8193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8191-L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8191-L8193) · [Before (L8548-L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8548-L8550)

```diff
-         yOffset: zM ? jM : 0,
-         yRotation: QM ? aM : 0,
-         xRotation: QM ? PM : 0
+         yOffset: wV ? UV : 0,
+         yRotation: nV ? yV : 0,
+         xRotation: nV ? pV : 0
```

#### 1044. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8556` → after: `L8199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8199) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8556)

```diff
-       return (0, aM.J)(MM.blockModel) || MM.blockModel === rM.blockModel ? rM : MM
+       return (0, yV.J)(VV.blockModel) || VV.blockModel === eV.blockModel ? eV : VV
```

#### 1045. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8583-L8584` → after: `L8226-L8227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8226-L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8226-L8227) · [Before (L8583-L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8583-L8584)

```diff
-         emissiveColor: null !== (rM = null === (iM = MM.emissiveColor) || void 0 === iM ? void 0 : iM.join(",")) && void 0 !== rM ? rM : "",
-         textureAnimation: MM.textureAnimation ? `${MM.textureAnimation.frames}x${MM.textureAnimation.animationInterval}` : ""
+         emissiveColor: null !== (eV = null === (xV = VV.emissiveColor) || void 0 === xV ? void 0 : xV.join(",")) && void 0 !== eV ? eV : "",
+         textureAnimation: VV.textureAnimation ? `${VV.textureAnimation.frames}x${VV.textureAnimation.animationInterval}` : ""
```

#### 1046. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8595` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8238) · [Before (L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8595)

```diff
-       if (dM.e.getModelOverride(rM)) return null;
+       if (EV.b.getModelOverride(eV)) return null;
```

#### 1047. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8599` → after: `L8242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8242) · [Before (L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8599)

```diff
-         const iM = (0, HM.g)(dM.e.getModel(MM, yM.d.BLOCK).url);
+         const xV = (0, rV.h)(EV.b.getModel(VV, BV.e.BLOCK).url);
```

#### 1048. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8602` → after: `L8245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8245) · [Before (L8602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8602)

```diff
-           OM = bM((0, HM.e)(iM.base64))
+           JV = AV((0, rV.b)(xV.base64))
```

#### 1049. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8608` → after: `L8251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8251) · [Before (L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8608)

```diff
-       return null === OM ? null : `${OM}|${AM(iM)}`
+       return null === JV ? null : `${JV}|${lV(xV)}`
```

#### 1050. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8612` → after: `L8255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8255) · [Before (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8612)

```diff
-       if ((0, hM.d)(MM), !rM.blockModel) throw new Error(`"${rM.name}" has a GLB model type ("${rM.model}") but no blockModel`);
+       if ((0, kV.b)(VV), !eV.blockModel) throw new Error(`"${eV.name}" has a GLB model type ("${eV.model}") but no blockModel`);
```

#### 1051. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8650-L8653` → after: `L8293-L8296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8293-L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8293-L8296) · [Before (L8650-L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8650-L8653)

```diff
-           await dM.e.requiredAssetsAreGenerated();
-           const hM = dM.e.getModelOverride(jM) ? void 0 : HM.textureAnimation,
-             lM = dM.e.getModel(jM, yM.d.BLOCK).url,
-             EM = () => dM.e.getModelOverride(jM) ? {
+           await EV.b.requiredAssetsAreGenerated();
+           const kV = EV.b.getModelOverride(UV) ? void 0 : rV.textureAnimation,
+             jV = EV.b.getModel(UV, BV.e.BLOCK).url,
+             qV = () => EV.b.getModelOverride(UV) ? {
```

#### 1052. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8656` → after: `L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8299) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8656)

```diff
-                 rootUrl: dM.e.getModel(jM, yM.d.BLOCK, !0).url
+                 rootUrl: EV.b.getModel(UV, BV.e.BLOCK, !0).url
```

#### 1053. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8660` → after: `L8303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8303) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8660)

```diff
-           const GM = await (0, RM.j)("", MM, lM, EM, (async rM => {
+           const FV = await (0, GV.h)("", VV, jV, qV, (async eV => {
```

#### 1054. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8674-L8676` → after: `L8317-L8319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8317-L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8317-L8319) · [Before (L8674-L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8674-L8676)

```diff
-                 } = (0, pM.d)({
-                   name: `${jM}BlockModelMeshMat`,
-                   YJ: MM,
+                 } = (0, WV.e)({
+                   name: `${UV}BlockModelMeshMat`,
+                   yE: VV,
```

#### 1055. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8678` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8321) · [Before (L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8678)

```diff
-                     ...(0, uM.d)(rM, SM, BM, !!HM.unlit),
+                     ...(0, zV.b)(eV, YV, KV, !!rV.unlit),
```

#### 1056. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8685` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8328) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8685)

```diff
-                     fillMode: 0 === OM.primitive.mode ? PM.c.PointListDrawMode : PM.c.TriangleFillMode
+                     fillMode: 0 === JV.primitive.mode ? pV.d.PointListDrawMode : pV.d.TriangleFillMode
```

#### 1057. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8688` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8331) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8688)

```diff
-                     (0, zM.r)(MM, LM.b, (0, LM.g)(hM.frames, hM.animationInterval))
+                     (0, wV.q)(VV, ZV.b, (0, ZV.g)(kV.frames, kV.animationInterval))
```

#### 1058. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8695` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8338) · [Before (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8695)

```diff
-             const mM = (await Promise.allSettled([rM.decodeGeometries(), QM && (0, nM.y)(QM)])).find((MM => "rejected" === MM.status));
+             const vV = (await Promise.allSettled([eV.decodeGeometries(), nV && (0, QV.s)(nV)])).find((VV => "rejected" === VV.status));
```

#### 1059. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8705` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8348) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8705)

```diff
-           if (!UM) throw new Error(`"${jM}" imported no renderable mesh`);
+           if (!tV) throw new Error(`"${UV}" imported no renderable mesh`);
```

#### 1060. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8709` → after: `L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8352) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8709)

```diff
-           } = UM, bM = null !== (SM = UM.material) && void 0 !== SM ? SM : await iM, wM = (0, JM.r)(GM, CM);
+           } = tV, AV = null !== (YV = tV.material) && void 0 !== YV ? YV : await xV, NV = (0, bV.k)(FV, TV);
```

#### 1061. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8712` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8355) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8712)

```diff
-           (0, mM.l)(wM, GM.worldMatrix(CM, !0, aM.scale), !0);
+           (0, vV.f)(NV, FV.worldMatrix(TV, !0, yV.scale), !0);
```

#### 1062. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8721` → after: `L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8364) · [Before (L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8721)

```diff
-           tM.isIdentity() || (0, mM.l)(wM, tM.m, !0);
+           XV.isIdentity() || (0, vV.f)(NV, XV.m, !0);
```

#### 1063. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8723-L8725` → after: `L8366-L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8366-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8366-L8368) · [Before (L8723-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8723-L8725)

```diff
-           HM.unlit || eM || (wM.named.color = (0, JM.n)(wM.positions.length / 3, JM.b, wM.named.color));
-           const gM = (0, QM.l)((0, WM.f)().CL, `${jM}blockGlbMesh`, wM);
-           return gM.sideOrientation = PM.c.ClockWiseSideOrientation, gM.rotationQuaternion = CM.part ? null : OM.Quaternion.Identity(), gM.hasVertexAlpha = !CM.primitive.draco && (0, uM.g)(CM.primitive), gM.material = bM, gM.AJ = !1, gM
+           rV.unlit || PV || (NV.named.color = (0, bV.j)(NV.positions.length / 3, bV.d, NV.named.color));
+           const MV = (0, nV.r)((0, RV.d)().gZ, `${UV}blockGlbMesh`, NV);
+           return MV.sideOrientation = pV.d.ClockWiseSideOrientation, MV.rotationQuaternion = TV.part ? null : JV.Quaternion.Identity(), MV.hasVertexAlpha = !TV.primitive.draco && (0, zV.f)(TV.primitive), MV.material = AV, MV.QE = !1, MV
```

#### 1064. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8744` → after: `L8387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8387) · [Before (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8744)

```diff
-   38859: (MM, rM, iM) => {
+   39042: (VV, eV, xV) => {
```

#### 1065. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8746` → after: `L8389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8389) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8746)

```diff
-       d: () => OM
+       b: () => JV
```

#### 1066. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8751` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8394) · [Before (L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8751)

```diff
-   38900: (MM, rM, iM) => {
+   39081: (VV, eV, xV) => {
```

#### 1067. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8755` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8398) · [Before (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8755)

```diff
-     var OM = iM(38367);
+     var JV = xV(38564);
```

#### 1068. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8772` → after: `L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8415) · [Before (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8772)

```diff
-   39033: (MM, rM, iM) => {
+   39209: (VV, eV, xV) => {
```

#### 1069. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8774-L8775` → after: `L8417-L8418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8417-L8418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8417-L8418) · [Before (L8774-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8774-L8775)

```diff
-       e: () => PM,
-       f: () => nM
+       d: () => pV,
+       e: () => QV
```

#### 1070. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8777-L8779` → after: `L8420-L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8420-L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8420-L8422) · [Before (L8777-L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8777-L8779)

```diff
-     var OM = iM(38367),
-       SM = iM(38318),
-       jM = iM(38149);
+     var JV = xV(38564),
+       YV = xV(38523),
+       UV = xV(38380);
```

#### 1071. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8783-L8785` → after: `L8426-L8428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8426-L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8426-L8428) · [Before (L8783-L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8783-L8785)

```diff
-       const PM = MM.CL.XPM[iM];
-       PM.kR(!0);
-       const nM = MM.nL.Xx(MM.sE(rM)),
+       const pV = VV.gZ.nnV[xV];
+       pV.pW(!0);
+       const QV = VV.jZ.DH(VV.mq(eV)),
```

#### 1072. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8787-L8788` → after: `L8430-L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8430-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8430-L8431) · [Before (L8787-L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8787-L8788)

```diff
-         zM = rM.map(((rM, iM) => rM + (QM[iM] + QM[iM + 3]) / 2 - MM.Am[iM]));
-       PM.UL.set(QM[3] - QM[0], QM[4] - QM[1], QM[5] - QM[2]);
+         wV = eV.map(((eV, xV) => eV + (nV[xV] + nV[xV + 3]) / 2 - VV.Vr[xV]));
+       pV.WZ.set(nV[3] - nV[0], nV[4] - nV[1], nV[5] - nV[2]);
```

#### 1073. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8796-L8798` → after: `L8439-L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8439-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8439-L8441) · [Before (L8796-L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8796-L8798)

```diff
-             jM = OM ? PM.UL.y : SM ? PM.UL.z : PM.UL.x,
-             aM = OM ? PM.UL.z : SM ? PM.UL.x : PM.UL.y;
-           return .5 + (MM - .5) * (rM % 2 === 0 ? jM : aM)
+             UV = JV ? pV.WZ.y : YV ? pV.WZ.z : pV.WZ.x,
+             yV = JV ? pV.WZ.z : YV ? pV.WZ.x : pV.WZ.y;
+           return .5 + (VV - .5) * (eV % 2 === 0 ? UV : yV)
```

#### 1074. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8800` → after: `L8443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8443) · [Before (L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8800)

```diff
-       return (0, jM.z)(PM, (() => {
+       return (0, UV.p)(pV, (() => {
```

#### 1075. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8802` → after: `L8445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8445) · [Before (L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8802)

```diff
-       })), (0, SM.p)(PM, zM[0], zM[1], zM[2]), PM
+       })), (0, YV.q)(pV, wV[0], wV[1], wV[2]), pV
```

#### 1076. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8810` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8453) · [Before (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8810)

```diff
-           UL: iM
+           WZ: xV
```

#### 1077. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8812` → after: `L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8455) · [Before (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8812)

```diff
-         rM[nM].UL.set(iM.x, 1 / OM, iM.z), (0, SM.p)(rM[nM], MM.x, (0 === nM ? 1 : -1) * (jM - aM / (2 * OM)), MM.z)
+         eV[QV].WZ.set(xV.x, 1 / JV, xV.z), (0, YV.q)(eV[QV], VV.x, (0 === QV ? 1 : -1) * (UV - yV / (2 * JV)), VV.z)
```

#### 1078. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8817` → after: `L8460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8460) · [Before (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8817)

```diff
-           UL: QM
+           WZ: nV
```

#### 1079. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8819` → after: `L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8462) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8819)

```diff
-         rM[nM].UL.set(1 / iM, (PM * OM - 2 * aM) / ((PM - 2 * aM) * OM), QM.z), (0, SM.p)(rM[nM], (2 === nM ? -1 : 1) * (jM - aM / (2 * iM)), MM.y, MM.z)
+         eV[QV].WZ.set(1 / xV, (pV * JV - 2 * yV) / ((pV - 2 * yV) * JV), nV.z), (0, YV.q)(eV[QV], (2 === QV ? -1 : 1) * (UV - yV / (2 * xV)), VV.y, VV.z)
```

#### 1080. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8823` → after: `L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8466) · [Before (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8823)

```diff
-   38025: (MM, rM, iM) => {
+   38256: (VV, eV, xV) => {
```

#### 1081. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8831-L8836` → after: `L8474-L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8474-L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8474-L8479) · [Before (L8831-L8836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8831-L8836)

```diff
-     var OM = iM(332),
-       SM = iM(2e3),
-       jM = iM(38097),
-       aM = iM(38122),
-       PM = iM(38034),
-       nM = iM(38090);
+     var JV = xV(375),
+       YV = xV(2014),
+       UV = xV(38328),
+       yV = xV(38358),
+       pV = xV(38263),
+       QV = xV(38323);
```

#### 1082. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8881` → after: `L8524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8524) · [Before (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8881)

```diff
-         this.restQuat.set([rM, iM, OM, SM]), (0, nM.e)(rM, iM, OM, SM, this.restEuler)
+         this.restQuat.set([eV, xV, JV, YV]), (0, QV.f)(eV, xV, JV, YV, this.restEuler)
```

#### 1083. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8903` → after: `L8546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8546) · [Before (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8903)

```diff
-           } = zM, mM = LM.currentAnimationType, hM = null !== mM && mM !== jM.e.Movement;
+           } = wV, vV = ZV.currentAnimationType, kV = null !== vV && vV !== UV.h.Movement;
```

#### 1084. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8927` → after: `L8570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8570) · [Before (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8927)

```diff
-         GM || (0, nM.h)(aM[0] + HM, aM[1] + dM, aM[2] + EM, MM.eulerTrig, yM);
+         FV || (0, QV.m)(yV[0] + rV, yV[1] + EV, yV[2] + qV, VV.eulerTrig, BV);
```

#### 1085. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8934` → after: `L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8577) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8934)

```diff
-             lM[0] = -mM[0], lM[1] = -mM[1], lM[2] = -mM[2], lM[3] = mM[3], MM.takeoverRotation.set([rM.x, rM.y, rM.z, rM.w]), (0, nM.f)(lM, MM.takeoverRotation, MM.takeoverRotation), MM.takeoverPosition.set([jM.currentPosX, jM.currentPosY, jM.currentPosZ]);
+             jV[0] = -vV[0], jV[1] = -vV[1], jV[2] = -vV[2], jV[3] = vV[3], VV.takeoverRotation.set([eV.x, eV.y, eV.z, eV.w]), (0, QV.i)(jV, VV.takeoverRotation, VV.takeoverRotation), VV.takeoverPosition.set([UV.currentPosX, UV.currentPosY, UV.currentPosZ]);
```

#### 1086. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8938` → after: `L8581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8581) · [Before (L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8938)

```diff
-           if (MM.takeover += (1 - MM.takeover) * (0, nM.j)(12, SM), MM.takeover > .999) MM.takeover = 1;
+           if (VV.takeover += (1 - VV.takeover) * (0, QV.r)(12, YV), VV.takeover > .999) VV.takeover = 1;
```

#### 1087. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8961` → after: `L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8604) · [Before (L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8961)

```diff
-           (0, nM.f)(mM, yM, yM);
+           (0, QV.i)(vV, BV, BV);
```

#### 1088. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8978` → after: `L8621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8621) · [Before (L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L8978)

```diff
-         return (OM[0] !== rM.baseRotX || OM[1] !== rM.baseRotY || OM[2] !== rM.baseRotZ) && (OM[0] = rM.baseRotX, OM[1] = rM.baseRotY, OM[2] = rM.baseRotZ, PM.Quaternion.RotationYawPitchRollToRef(rM.baseRotY, rM.baseRotX, rM.baseRotZ, EM), iM[0] = EM.x, iM[1] = EM.y, iM[2] = EM.z … [truncated]
+         return (JV[0] !== eV.baseRotX || JV[1] !== eV.baseRotY || JV[2] !== eV.baseRotZ) && (JV[0] = eV.baseRotX, JV[1] = eV.baseRotY, JV[2] = eV.baseRotZ, pV.Quaternion.RotationYawPitchRollToRef(eV.baseRotY, eV.baseRotX, eV.baseRotZ, qV), xV[0] = qV.x, xV[1] = qV.y, xV[2] = qV.z … [truncated]
```

#### 1089. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9003-L9004` → after: `L8646-L8647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8646-L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8646-L8647) · [Before (L9003-L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9003-L9004)

```diff
-         const [aM, PM, nM] = OM.d.eulerYXZFromQuaternion(jM.thinNode.rotationQuat);
-         jM.currentRotX = OM.d.computeShortestRotation(jM.baseRotX, aM), jM.currentRotY = OM.d.computeShortestRotation(jM.baseRotY, PM), jM.currentRotZ = OM.d.computeShortestRotation(jM.baseRotZ, nM), SM ? (MM.heldForClip = !0, jM.rotX = jM.currentRotX, jM.rotY = jM.currentRotY, j … [truncated]
+         const [yV, pV, QV] = JV.b.eulerYXZFromQuaternion(UV.thinNode.rotationQuat);
+         UV.currentRotX = JV.b.computeShortestRotation(UV.baseRotX, yV), UV.currentRotY = JV.b.computeShortestRotation(UV.baseRotY, pV), UV.currentRotZ = JV.b.computeShortestRotation(UV.baseRotZ, QV), YV ? (VV.heldForClip = !0, UV.rotX = UV.currentRotX, UV.rotY = UV.currentRotY, U … [truncated]
```

#### 1090. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9025` → after: `L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8668) · [Before (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9025)

```diff
-     var bM = iM(38104);
+     var AV = xV(38332);
```

#### 1091. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9029` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8672) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9029)

```diff
-       const jM = MM.CL.Dk,
+       const UV = VV.gZ.YC,
```

#### 1092. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9031` → after: `L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8674) · [Before (L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9031)

```diff
-           eD: aM
+           bD: yV
```

#### 1093. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9033` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8676) · [Before (L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9033)

```diff
-       return jM.has(iM) && jM.getCulledForEntity(iM, rM) && rM !== aM && (null === (OM = MM.hU.ziM(rM)) || void 0 === OM ? void 0 : OM.zh) !== aM && (null === (SM = MM.hU.ziM(aM)) || void 0 === SM ? void 0 : SM.zh) !== rM
+       return UV.has(xV) && UV.getCulledForEntity(xV, eV) && eV !== yV && (null === (JV = VV.sF.zJV(eV)) || void 0 === JV ? void 0 : JV.zk) !== yV && (null === (YV = VV.sF.zJV(yV)) || void 0 === YV ? void 0 : YV.zk) !== eV
```

#### 1094. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9037` → after: `L8680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8680) · [Before (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9037)

```diff
-         this.HZ = void 0, this.Cm = void 0, this.thinInstMgr = void 0, this.Zk = null, this.kiM = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = MM => {
+         this.zC = void 0, this.iv = void 0, this.thinInstMgr = void 0, this.pC = null, this.VYV = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = VV => {
```

#### 1095. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9047` → after: `L8690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8690) · [Before (L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9047)

```diff
-           GS: SM
+           NY: YV
```

#### 1096. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9049` → after: `L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8692) · [Before (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9049)

```diff
-         SM && this.updateNodeAnimations(SM, rM, jM.b.Start)
+         YV && this.updateNodeAnimations(YV, eV, UV.e.Start)
```

#### 1097. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9056` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8699) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9056)

```diff
-           GS: OM
+           NY: JV
```

#### 1098. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9058` → after: `L8701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8701) · [Before (L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9058)

```diff
-         rM.reset(), OM && this.updateNodeAnimations(OM, MM, jM.b.Stop)
+         eV.reset(), JV && this.updateNodeAnimations(JV, VV, UV.e.Stop)
```

#### 1099. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9068` → after: `L8711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8711) · [Before (L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9068)

```diff
-         (null === (rM = this.rigPose) || void 0 === rM ? void 0 : rM.controller) !== MM && (null === (iM = this.rigPose) || void 0 === iM || iM.releaseAll(this.thinInstMgr, this.Zk), this.rigPose = null === MM ? null : new GM(MM, ((MM, rM) => this.getRigNodeTransform(MM, rM)), (( … [truncated]
+         (null === (eV = this.rigPose) || void 0 === eV ? void 0 : eV.controller) !== VV && (null === (xV = this.rigPose) || void 0 === xV || xV.releaseAll(this.thinInstMgr, this.pC), this.rigPose = null === VV ? null : new FV(VV, ((VV, eV) => this.getRigNodeTransform(VV, eV)), (( … [truncated]
```

#### 1100. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9074` → after: `L8717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8717) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9074)

```diff
-         return null !== (MM = null === (rM = this.rigPose) || void 0 === rM ? void 0 : rM.controller) && void 0 !== MM ? MM : null
+         return null !== (VV = null === (eV = this.rigPose) || void 0 === eV ? void 0 : eV.controller) && void 0 !== VV ? VV : null
```

#### 1101. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9078` → after: `L8721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8721) · [Before (L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9078)

```diff
-         return null !== (rM = this.nodeTransforms[this.getAliasedNodeName(MM)]) && void 0 !== rM ? rM : null
+         return null !== (eV = this.nodeTransforms[this.getAliasedNodeName(VV)]) && void 0 !== eV ? eV : null
```

#### 1102. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9082-L9083` → after: `L8725-L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8725-L8726) · [Before (L9082-L9083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9082-L9083)

```diff
-           if (this.thinInstMgr.getNamedNodeOrNull(this.Zk, DM) !== rM) return null;
-           const MM = `${DM}#${rM}`;
+           if (this.thinInstMgr.getNamedNodeOrNull(this.pC, DV) !== eV) return null;
+           const VV = `${DV}#${eV}`;
```

#### 1103. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9086-L9087` → after: `L8729-L8730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8729-L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8729-L8730) · [Before (L9086-L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9086-L9087)

```diff
-         const iM = this.getOrCreateTransformIfNodeExists(rM === kM ? DM : MM);
-         return (null === iM || void 0 === iM ? void 0 : iM.thinNodeIndex) === rM ? iM : null
+         const xV = this.getOrCreateTransformIfNodeExists(eV === iV ? DV : VV);
+         return (null === xV || void 0 === xV ? void 0 : xV.thinNodeIndex) === eV ? xV : null
```

#### 1104. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9090` → after: `L8733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8733) · [Before (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9090)

```diff
-         if (this.thinInstMgr.has(this.Zk))
+         if (this.thinInstMgr.has(this.pC))
```

#### 1105. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9102` → after: `L8745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8745) · [Before (L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9102)

```diff
-             iM || this.thinInstMgr.setNodePosition(this.Zk, rM, OM, SM, jM), this.thinInstMgr.setNodeRotationEuler(this.Zk, rM, aM, PM, nM), HM(MM, this.thinInstMgr, this.Zk)
+             xV || this.thinInstMgr.setNodePosition(this.pC, eV, JV, YV, UV), this.thinInstMgr.setNodeRotationEuler(this.pC, eV, yV, pV, QV), rV(VV, this.thinInstMgr, this.pC)
```

#### 1106. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9119` → after: `L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8762) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9119)

```diff
-         null !== SM && void 0 !== SM && SM.scaleBase ? (SM.scaleBase = [rM, iM, OM], mM(SM, this.thinInstMgr, this.Zk)) : this.thinInstMgr.setNodeScale(this.Zk, MM, rM, iM, OM)
+         null !== YV && void 0 !== YV && YV.scaleBase ? (YV.scaleBase = [eV, xV, JV], vV(YV, this.thinInstMgr, this.pC)) : this.thinInstMgr.setNodeScale(this.pC, VV, eV, xV, JV)
```

#### 1107. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9124` → after: `L8767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8767) · [Before (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9124)

```diff
-           if (!this.kiM.ZiM) return;
+           if (!this.VYV.eYV) return;
```

#### 1108. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9128` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8771) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9128)

```diff
-         if (!this.kiM.ZiM) return;
+         if (!this.VYV.eYV) return;
```

#### 1109. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9132` → after: `L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8775) · [Before (L9132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9132)

```diff
-         null !== jM && (this.rigFrame++, aM = jM.apply((MM + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.Zk, this.writeRigNodePosition, rM)), this.paused = !1, this.pausedDt = 0;
+         null !== UV && (this.rigFrame++, yV = UV.apply((VV + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.pC, this.writeRigNodePosition, eV)), this.paused = !1, this.pausedDt = 0;
```

#### 1110. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9136` → after: `L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8779) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9136)

```diff
-           if (!SM.thinNode.ZiM) {
+           if (!YV.thinNode.eYV) {
```

#### 1111. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9143` → after: `L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8786) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9143)

```diff
-           null !== MM && 0 !== MM.rotation.length ? this.renderNodeAnimatedRotation(SM, OM) : SM.isRotDirty && this.flushNodeRotation(SM, OM), null !== MM && 0 !== MM.position.length ? this.renderNodeAnimatedPosition(SM, OM) : SM.isPosDirty && this.flushNodePosition(SM, OM), null … [truncated]
+           null !== VV && 0 !== VV.rotation.length ? this.renderNodeAnimatedRotation(YV, JV) : YV.isRotDirty && this.flushNodeRotation(YV, JV), null !== VV && 0 !== VV.position.length ? this.renderNodeAnimatedPosition(YV, JV) : YV.isPosDirty && this.flushNodePosition(YV, JV), null … [truncated]
```

#### 1112. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9157` → after: `L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8800) · [Before (L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9157)

```diff
-           if (OM.bL(MM), !OM.hasCurrentAnimationFinished()) {
+           if (JV.iZ(VV), !JV.hasCurrentAnimationFinished()) {
```

#### 1113. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9162` → after: `L8805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8805) · [Before (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9162)

```diff
-           SM.lS !== jM.h.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(SM, iM), this.stopAnimation(iM)) : (OM.rewindPastLoops(), this.rewindNodeAnimationTimelines(SM, iM), rM = !0)
+           YV.AY !== UV.n.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(YV, xV), this.stopAnimation(xV)) : (JV.rewindPastLoops(), this.rewindNodeAnimationTimelines(YV, xV), eV = !0)
```

#### 1114. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9168` → after: `L8811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8811) · [Before (L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9168)

```diff
-           GS: iM
+           NY: xV
```

#### 1115. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9178` → after: `L8821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8821) · [Before (L9178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9178)

```diff
-           GS: iM
+           NY: xV
```

#### 1116. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9200` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8843) · [Before (L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9200)

```diff
-               MM[0] = rM[0], MM[1] = rM[1], MM[2] = rM[2], mM(SM, this.thinInstMgr, this.Zk)
+               VV[0] = eV[0], VV[1] = eV[1], VV[2] = eV[2], vV(YV, this.thinInstMgr, this.pC)
```

#### 1117. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9206` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8849) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9206)

```diff
-           iM = rM ? DM : this.getAliasedNodeName(MM);
+           xV = eV ? DV : this.getAliasedNodeName(VV);
```

#### 1118. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9210` → after: `L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8853) · [Before (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9210)

```diff
-         const SM = rM ? kM : this.thinInstMgr.getNamedNodeOrNull(this.Zk, iM);
+         const YV = eV ? iV : this.thinInstMgr.getNamedNodeOrNull(this.pC, xV);
```

#### 1119. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9222` → after: `L8865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8865) · [Before (L9222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9222)

```diff
-             return [aM, null === OM ? null : null !== (rM = null === PM || void 0 === PM || null === (iM = PM.GS) || void 0 === iM ? void 0 : iM[OM]) && void 0 !== rM ? rM : null]
+             return [yV, null === JV ? null : null !== (eV = null === pV || void 0 === pV || null === (xV = pV.NY) || void 0 === xV ? void 0 : xV[JV]) && void 0 !== eV ? eV : null]
```

#### 1120. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9224` → after: `L8867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8867) · [Before (L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9224)

```diff
-           aM = this.thinInstMgr.lD(this.Zk, rM),
+           yV = this.thinInstMgr.rD(this.pC, eV),
```

#### 1121. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9230` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8873) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9230)

```diff
-           restRotation: this.thinInstMgr.getRestRotation(this.Zk, rM),
+           restRotation: this.thinInstMgr.getRestRotation(this.pC, eV),
```

#### 1122. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9266` → after: `L8909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8909) · [Before (L9266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9266)

```diff
-         return null !== (rM = null === (iM = this.nodeNameAliases) || void 0 === iM ? void 0 : iM[MM]) && void 0 !== rM ? rM : MM
+         return null !== (eV = null === (xV = this.nodeNameAliases) || void 0 === xV ? void 0 : xV[VV]) && void 0 !== eV ? eV : VV
```

#### 1123. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9272` → after: `L8915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8915) · [Before (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9272)

```diff
-           null !== aM && (aM.animationByType[rM] = iM === jM.b.Start && null !== (OM = MM[SM]) && void 0 !== OM ? OM : null, this.updateCurrentNodeAnimation(aM), aM.currentAnimationType === rM && (aM.rotAnimationIndex = 0, aM.posAnimationIndex = 0, aM.scaleAnimationIndex = 0))
+           null !== yV && (yV.animationByType[eV] = xV === UV.e.Start && null !== (JV = VV[YV]) && void 0 !== JV ? JV : null, this.updateCurrentNodeAnimation(yV), yV.currentAnimationType === eV && (yV.rotAnimationIndex = 0, yV.posAnimationIndex = 0, yV.scaleAnimationIndex = 0))
```

#### 1124. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9313` → after: `L8956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8956) · [Before (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9313)

```diff
-             QM = aM.tS,
+             nV = yV.WY,
```

#### 1125. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9315-L9317` → after: `L8958-L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8958-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8958-L8960) · [Before (L9315-L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9315-L9317)

```diff
-             LM = aM.wS;
-           switch (aM.bS) {
-             case jM.f.Linear: {
+             ZV = yV.GY;
+           switch (yV.zY) {
+             case UV.k.Linear: {
```

#### 1126. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9327` → after: `L8970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8970) · [Before (L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9327)

```diff
-             case jM.f.CatmullRomSpline: {
+             case UV.k.CatmullRomSpline: {
```

#### 1127. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9341-L9343` → after: `L8984-L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8984-L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8984-L8986) · [Before (L9341-L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9341-L9343)

```diff
-                   uS: aM,
-                   RS: PM
-                 } = QM[jM], zM = Number.isFinite(aM) ? aM : 0, LM = Number.isFinite(PM) ? PM : 0;
+                   gY: yV,
+                   DY: pV
+                 } = nV[UV], wV = Number.isFinite(yV) ? yV : 0, ZV = Number.isFinite(pV) ? pV : 0;
```

#### 1128. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9349-L9350` → after: `L8992-L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8992-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L8992-L8993) · [Before (L9349-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9349-L9350)

```diff
-               const MM = aM.bS;
-               throw new Error(`Unimplemented lerp mode: ${MM}`)
+               const VV = yV.zY;
+               throw new Error(`Unimplemented lerp mode: ${VV}`)
```
