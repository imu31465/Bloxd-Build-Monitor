# Changed — Bundle Modifications Report (Part 104 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `104 / 141` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 103](part-103.md) · [Part 105 →](part-105.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3947 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 2346. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21267-L21278` → after: `L21376-L21394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21376-L21394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21376-L21394) · [Before (L21267-L21278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21267-L21278)

```diff
-                       ut(tt[bt[56]].push(tt[bt[33]] & bt[10]), tt[bt[33]] >>= bt[3], tt[bt[8]] -= bt[3])
-                     } while (tt[bt[8]] > bt[6]);
-                     tt[bt[55]] = -bt[0]
-                   } return tt[bt[55]] > -bt[0] && tt[bt[56]].push((tt[bt[33]] | tt[bt[55]] << tt[bt[8]]) & bt[10]), Jt(tt[bt[56]])
-             }(qt[tt[bt[2]]]) : Ot[tt[bt[2]]]
-           }(125) in Ct && function(...tt) {
-             function et() {}
-             tt[bt[11]] = bt[2], ut(tt[bt[59]] = function(tt, Vt) {
-               var Ot, qt, Dt, mt, dt, jt = bt[2];
-               for (ut(Ot = bt[2], qt = new et(bt[2]), Dt = qt, mt = tt, dt = Vt); mt !== bt[57] || dt !== bt[57];) ut(Ot = (mt ? mt.val : bt[2]) + (dt ? dt.val : bt[2]) + jt, jt = Math.floor(Ot / bt[58]), Dt.next = new et(Ot % bt[58]), Dt = Dt.next, mt = mt ? mt.next : bt[57], dt … [truncated]
-               return jt && (Dt.next = new et(jt)), qt.next
-             }, console.log(tt[bt[59]]))
+                       sB(BB[WB[60]].push(BB[WB[31]] & WB[12]), BB[WB[31]] >>= WB[11], BB[WB[19]] -= WB[11])
+                     } while (BB[WB[19]] > WB[7]);
+                     BB[WB[59]] = -WB[2]
+                   } return BB[WB[59]] > -WB[2] && BB[WB[60]].push((BB[WB[31]] | BB[WB[59]] << BB[WB[19]]) & WB[12]), CB(BB[WB[60]])
+             }(JB[BB]) : TB[BB]
+           }(WB[6]) + "2" in QB && function(...BB) {
+             sB(BB[WB[13]] = WB[1], BB[WB[5]] = function(...BB) {
+               for (sB(BB[WB[13]] = WB[2], BB[WB[62]] = BB[WB[1]].length, BB[WB[61]] = [], BB[-WB[47]] = WB[1], BB[WB[33]] = WB[1], BB[WB[1]].sort(((BB, IB) => BB - IB))), BB[WB[31]] = WB[1]; BB[WB[31]] < BB[WB[62]]; BB[WB[31]]++)
+                 if (!(BB[WB[31]] > WB[1] && BB[WB[1]][BB[WB[31]]] === BB[WB[1]][BB[WB[31]] - WB[2]]))
+                   for (sB(BB[-WB[47]] = BB[WB[31]] + WB[2], BB[WB[33]] = BB[WB[62]] - WB[2]); BB[-WB[47]] < BB[WB[33]];)
+                     if (BB[WB[1]][BB[WB[31]]] + BB[WB[1]][BB[-WB[47]]] + BB[WB[1]][BB[WB[33]]] < WB[1]) BB[-WB[47]]++;
+                     else if (BB[WB[1]][BB[WB[31]]] + BB[WB[1]][BB[-WB[47]]] + BB[WB[1]][BB[WB[33]]] > WB[1]) BB[WB[33]]--;
+               else {
+                 for (BB[WB[61]].push([BB[WB[1]][BB[WB[31]]], BB[WB[1]][BB[-WB[47]]], BB[WB[1]][BB[WB[33]]]]); BB[-WB[47]] < BB[WB[33]] && BB[WB[1]][BB[-WB[47]]] === BB[WB[1]][BB[-WB[47]] + WB[2]];) BB[-WB[47]]++;
+                 for (; BB[-WB[47]] < BB[WB[33]] && BB[WB[1]][BB[WB[33]]] === BB[WB[1]][BB[WB[33]] - WB[2]];) BB[WB[33]]--;
+                 sB(BB[-WB[47]]++, BB[WB[33]]--)
+ ... (3 more added lines; see GitHub link above)
```

#### 2347. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21283` → after: `L21399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21399) · [Before (L21283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21283)

```diff
-   39006: (tt, et, Vt) => {
+   38836: (BB, IB, ZB) => {
```

#### 2348. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21289` → after: `L21405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21405) · [Before (L21289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21289)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2349. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21291-L21310` → after: `L21407-L21426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21407-L21426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21407-L21426) · [Before (L21291-L21310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21291-L21310)

```diff
-       Dt = Vt(39010),
-       mt = Vt(38347),
-       dt = Vt(31),
-       jt = Vt(2848),
-       Ht = Vt(37323),
-       Xt = Vt(37891),
-       Qt = Vt(38005),
-       lt = Vt(37997),
-       Et = Vt(391),
-       ft = Vt(1993),
-       wt = Vt(697),
-       yt = Vt(38184),
-       Nt = Vt(37658),
-       Mt = Vt(37454),
-       bt = Vt(37467),
-       Jt = Vt(39019),
- ... (4 more removed lines; see GitHub link above)
+       oB = ZB(38844),
+       GB = ZB(38159),
+       vB = ZB(24),
+       kB = ZB(2912),
+       cB = ZB(37108),
+       nB = ZB(37685),
+       hB = ZB(37814),
+       zB = ZB(37812),
+       FB = ZB(360),
+       NB = ZB(1956),
+       gB = ZB(650),
+       qB = ZB(37990),
+       yB = ZB(37462),
+       UB = ZB(37243),
+       WB = ZB(37253),
+       dB = ZB(38851),
+ ... (4 more added lines; see GitHub link above)
```

#### 2350. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21351` → after: `L21467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21467) · [Before (L21351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21351)

```diff
-           cape: wt.e,
+           cape: gB.h,
```

#### 2351. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21359` → after: `L21475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21475) · [Before (L21359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21359)

```diff
-         qJ: (et, Vt) => {
+         cW: (IB, ZB) => {
```

#### 2352. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21368-L21369` → after: `L21484-L21485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21484-L21485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21484-L21485) · [Before (L21368-L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21368-L21369)

```diff
-             if (tt.cape = et, et === wt.e) return tt.mesh && Gt(tt), !1;
-             const Vt = (0, jt.e)();
+             if (BB.cape = IB, IB === gB.h) return BB.mesh && mB(BB), !1;
+             const ZB = (0, kB.h)();
```

#### 2353. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21371` → after: `L21487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21487) · [Before (L21371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21371)

```diff
-               (0, Kt.h)(tt.mesh.material, {
+               (0, sB.f)(BB.mesh.material, {
```

#### 2354. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21375` → after: `L21491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21491) · [Before (L21375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21375)

```diff
-             Wt || (Wt = mt.b.Player.capeMesh, St = Wt.fL().boundingBox, ct = 1 + St.maximum.y - St.minimum.y);
+             YB || (YB = GB.d.Player.capeMesh, iB = YB.qm().boundingBox, pB = 1 + iB.maximum.y - iB.minimum.y);
```

#### 2355. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21378` → after: `L21494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21494) · [Before (L21378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21378)

```diff
-               tt.mesh = Wt.clone(`Cape|${tt.uZ}`, null);
+               BB.mesh = YB.clone(`Cape|${BB.bR}`, null);
```

#### 2356. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21380-L21383` → after: `L21496-L21499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21496-L21499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21496-L21499) · [Before (L21380-L21383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21380-L21383)

```diff
-               tt.defaultPosition = new ht.uf(0, (qt - St.maximum.y + St.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), tt.mesh.position = tt.defaultPosition.clone();
-               const Dt = et.dL[et.lL][tt.uZ];
-               tt.mesh.isVisible = !(null !== Dt && void 0 !== Dt && Dt._invisibleEffect) && !(null !== (Vt = et.mJ.aVt(tt.uZ)) && void 0 !== Vt && Vt.drawnHidden);
-               const mt = et.Bf.xI,
+               BB.defaultPosition = new wB.rN(0, (JB - iB.maximum.y + iB.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), BB.mesh.position = BB.defaultPosition.clone();
+               const oB = IB.Tm[IB.Jm][BB.bR];
+               BB.mesh.isVisible = !(null !== oB && void 0 !== oB && oB._invisibleEffect) && !(null !== (ZB = IB.zW.hZB(BB.bR)) && void 0 !== ZB && ZB.drawnHidden);
+               const GB = IB.Ig.kR,
```

#### 2357. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21385-L21386` → after: `L21501-L21502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21501-L21502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21501-L21502) · [Before (L21385-L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21385-L21386)

```diff
-                   RP: dt
-                 } = et.mJ.CVt(tt.uZ),
+                   gR: vB
+                 } = IB.zW.gZB(BB.bR),
```

#### 2358. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21389` → after: `L21505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21505) · [Before (L21389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21389)

```diff
-                 RP: dt,
+                 gR: vB,
```

#### 2359. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21401` → after: `L21517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21517) · [Before (L21401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21401)

```diff
-                 Fw: et.Bf.vI(),
+                 lg: IB.Ig.JR(),
```

#### 2360. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21410` → after: `L21526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21526) · [Before (L21410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21410)

```diff
-                   (0, Ct.d)(tt), (0, ut.d)(tt, et.Bf), (0, Mt.p)(tt, Jt.b, Ht, ct, St.maximum.y), (0, Mt.G)(tt), tt.castsSunShadow = !1
+                   (0, CB.e)(BB), (0, QB.c)(BB, IB.Ig), (0, UB.r)(BB, dB.b, cB, pB, iB.maximum.y), (0, UB.K)(BB), BB.castsSunShadow = !1
```

#### 2361. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21413` → after: `L21529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21529) · [Before (L21413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21413)

```diff
-               }).mirror, tt.mesh.tL("aOpacity", 1), tt.mesh.qL.aOpacity = null !== (Ot = null === Dt || void 0 === Dt ? void 0 : Dt.opacity) && void 0 !== Ot ? Ot : 1, (0, yt.f)(tt.mesh), tt.bones = Ht, tt.paused = !1, (0, Qt.getSmoothedPosition)(et, tt.uZ, tt.lastPos), et.Bf.ow( … [truncated]
+               }).mirror, BB.mesh.Im("aOpacity", 1), BB.mesh.Zm.aOpacity = null !== (TB = null === oB || void 0 === oB ? void 0 : oB.opacity) && void 0 !== TB ? TB : 1, (0, qB.g)(BB.mesh), BB.bones = cB, BB.paused = !1, (0, hB.getSmoothedPosition)(IB, BB.bR, BB.lastPos), IB.Ig.xg( … [truncated]
```

#### 2362. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21415` → after: `L21531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21531) · [Before (L21415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21415)

```diff
-           }(Vt, tt), Vt.invisibleSub = dt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|_invisibleEffect`, (Ot => {
+           }(ZB, BB), ZB.invisibleSub = vB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|_invisibleEffect`, (TB => {
```

#### 2363. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21417` → after: `L21533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21533) · [Before (L21417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21417)

```diff
-             Vt.mesh && !Vt.mesh.bC() && (Vt.mesh.isVisible = !Ot && !(null !== (qt = tt.mJ.aVt(et)) && void 0 !== qt && qt.drawnHidden))
+             ZB.mesh && !ZB.mesh.mC() && (ZB.mesh.isVisible = !TB && !(null !== (JB = BB.zW.hZB(IB)) && void 0 !== JB && JB.drawnHidden))
```

#### 2364. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21420-L21421` → after: `L21536-L21537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21536-L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21536-L21537) · [Before (L21420-L21421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21420-L21421)

```diff
-         nS: (tt, et) => {
-           dt.j.unsubscribe(et.playerRankSub), et.playerRankSub = null, Gt(et), dt.j.unsubscribe(et.invisibleSub)
+         nH: (BB, IB) => {
+           vB.l.unsubscribe(IB.playerRankSub), IB.playerRankSub = null, mB(IB), vB.l.unsubscribe(IB.invisibleSub)
```

#### 2365. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21423-L21424` → after: `L21539-L21540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21539-L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21539-L21540) · [Before (L21423-L21424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21423-L21424)

```diff
-         dJ: (et, Vt) => {
-           const Ot = Math.min((null !== et && void 0 !== et ? et : 1 / 0) / 1e3, Ft.maxDeltaTime),
+         FW: (IB, ZB) => {
+           const TB = Math.min((null !== IB && void 0 !== IB ? IB : 1 / 0) / 1e3, RB.maxDeltaTime),
```

#### 2366. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21426-L21427` → after: `L21542-L21543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21542-L21543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21542-L21543) · [Before (L21426-L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21426-L21427)

```diff
-             Dt = tt.Jtt / 1e3,
-             mt = ft.b.lerpWeight(Ft.lerpSpeed * Ot);
+             oB = BB.MBB / 1e3,
+             GB = NB.c.lerpWeight(RB.lerpSpeed * TB);
```

#### 2367. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21429-L21431` → after: `L21545-L21547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21545-L21547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21545-L21547) · [Before (L21429-L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21429-L21431)

```diff
-             if (dt.mesh && ((0, Ht.pausesOutOfView)(tt, dt.uZ, dt.attachedTo.RP) ? dt.paused = !0 : (dt.paused && (dt.paused = !1, (0, Qt.getSmoothedPosition)(tt, dt.uZ, dt.lastPos)), ot(dt, Ot, qt, Dt, mt, tt)), tt.Bf.Rw)) {
-               const et = tt.mJ.EVt(dt.uZ)._lightLevels;
-               (0, Nt.v)(dt.mesh, et)
+             if (vB.mesh && ((0, cB.pausesOutOfView)(BB, vB.bR, vB.attachedTo.gR) ? vB.paused = !0 : (vB.paused && (vB.paused = !1, (0, hB.getSmoothedPosition)(BB, vB.bR, vB.lastPos)), LB(vB, TB, JB, oB, GB, BB)), BB.Ig.Xg)) {
+               const IB = BB.zW.oZB(vB.bR)._lightLevels;
+               (0, yB.n)(vB.mesh, IB)
```

#### 2368. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21439` → after: `L21555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21555) · [Before (L21439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21439)

```diff
-       tt.mesh && tt.attachedTo && !tt.mesh.bC() && (0, jt.e)().Bf.xI.detachTransformNodeIfFound(tt.mesh, tt.attachedTo.RP, tt.attachedTo.nodeIndex), null === (et = tt.mesh) || void 0 === et || null === (Vt = et.material) || void 0 === Vt || Vt.dispose(), null === (Ot = tt.mesh) | … [truncated]
+       BB.mesh && BB.attachedTo && !BB.mesh.mC() && (0, kB.h)().Ig.kR.detachTransformNodeIfFound(BB.mesh, BB.attachedTo.gR, BB.attachedTo.nodeIndex), null === (IB = BB.mesh) || void 0 === IB || null === (ZB = IB.material) || void 0 === ZB || ZB.dispose(), null === (TB = BB.mesh) | … [truncated]
```

#### 2369. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21446` → after: `L21562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21562) · [Before (L21446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21446)

```diff
-           url: Vt(39024)(`./cape_${tt}.png`),
+           url: ZB(38857)(`./cape_${BB}.png`),
```

#### 2370. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21449` → after: `L21565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21565) · [Before (L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21449)

```diff
-           samplingMode: bt.k.nearestNearestMipLinear
+           samplingMode: WB.j.nearestNearestMipLinear
```

#### 2371. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21451` → after: `L21567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21567) · [Before (L21451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21451)

```diff
-         et = (0, bt.A)((0, jt.e)().Bf.vI(), Ot), (0, bt.Y)(et), Rt.set(tt, et)
+         IB = (0, WB.v)((0, kB.h)().Ig.JR(), TB), (0, WB.S)(IB), aB.set(BB, IB)
```

#### 2372. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21460` → after: `L21576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21576) · [Before (L21460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21460)

```diff
-       const Ht = tt.uZ;
+       const cB = BB.bR;
```

#### 2373. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21462` → after: `L21578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21578) · [Before (L21462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21462)

```diff
-       const wt = mt.mJ.getState(Ht, "updateWalkingState"),
+       const gB = GB.zW.getState(cB, "updateWalkingState"),
```

#### 2374. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21465` → after: `L21581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21581) · [Before (L21465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21465)

```diff
-       const Mt = mt.mJ.xet(Ht);
+       const UB = GB.zW.uIB(cB);
```

#### 2375. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21470` → after: `L21586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21586) · [Before (L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21470)

```diff
-           const tt = jt[0] * ft.b.friction(Ft.friction.exp * et),
+           const BB = kB[0] * NB.c.friction(RB.friction.exp * IB),
```

#### 2376. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21472` → after: `L21588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21588) · [Before (L21472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21472)

```diff
-           Math.abs(tt) > Math.abs(Vt) ? jt[0] = tt : jt[0] = Vt, jt[0] += Ft.angle.def
+           Math.abs(BB) > Math.abs(ZB) ? kB[0] = BB : kB[0] = ZB, kB[0] += RB.angle.def
```

#### 2377. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21476-L21478` → after: `L21592-L21594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21592-L21594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21592-L21594) · [Before (L21476-L21478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21476-L21478)

```diff
-           const Dt = mt.mJ.getState(Ht, "meshRotation"),
-             dt = Dt.NJ ? (0, Xt.getRemoteTargetHeading)(mt, Dt) : Dt.renderRotation[1],
-             lt = (0, Et.Rb)(dt);
+           const oB = GB.zW.getState(cB, "meshRotation"),
+             vB = oB.iW ? (0, nB.getRemoteTargetHeading)(GB, oB) : oB.renderRotation[1],
+             zB = (0, FB.Kb)(vB);
```

#### 2378. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21481` → after: `L21597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21597) · [Before (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21481)

```diff
-             yt = mt.mJ.YG(Ht);
+             qB = GB.zW.vx(cB);
```

#### 2379. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21483` → after: `L21599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21599) · [Before (L21483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21483)

```diff
-           if (yt ? Nt = yt.Dy : (qt().sub(It, wt, tt.lastPos), qt().scale(It, It, Vt > 0 ? 1 / Vt : 0), Nt = It), Ot = qt().dot(Nt, lt) * Ft.vel.self * et, jt[0] > Ft.angle.softMax && jt.at(-3) > Ft.angle.softMax) {
+           if (qB ? yB = qB.zq : (JB().sub(HB, gB, BB.lastPos), JB().scale(HB, HB, ZB > 0 ? 1 / ZB : 0), yB = HB), TB = JB().dot(yB, zB) * RB.vel.self * IB, kB[0] > RB.angle.softMax && kB.at(-3) > RB.angle.softMax) {
```

#### 2380. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21488` → after: `L21604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21604) · [Before (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21488)

```diff
-           Ot = (0, ft.e)(Ot, -Mt, Mt), jt[0] += Ot
+           TB = (0, NB.f)(TB, -UB, UB), kB[0] += TB
```

#### 2381. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21490-L21492` → after: `L21606-L21608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21606-L21608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21606-L21608) · [Before (L21490-L21492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21490-L21492)

```diff
-         const Dt = 2 * (0, ft.e)(jt[0] - Ft.angle.def, 0, .5),
-           dt = (0, ft.e)(Ot, 0, 1) + Dt;
-         Nt = (0, ft.A)(Zt / tt.bones.skeleLen, 0, dt)
+         const oB = 2 * (0, NB.f)(kB[0] - RB.angle.def, 0, .5),
+           vB = (0, NB.f)(TB, 0, 1) + oB;
+         yB = (0, NB.C)(jB / BB.bones.skeleLen, 0, vB)
```

#### 2382. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21494-L21495` → after: `L21610-L21611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21610-L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21610-L21611) · [Before (L21494-L21495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21494-L21495)

```diff
-       jt[0] += vt.noise2D(tt.windX, Ot) * Ft.vel.wind * et, jt[0] = (0, ft.e)(jt[0], Ft.angle.min, Ft.angle.max);
-       for (let qt = jt.length - 3; qt > 0; qt -= 3) jt[qt] = (0, ft.A)(jt[qt], jt[qt - 3] - Nt, Dt);
+       kB[0] += OB.noise2D(BB.windX, TB) * RB.vel.wind * IB, kB[0] = (0, NB.f)(kB[0], RB.angle.min, RB.angle.max);
+       for (let JB = kB.length - 3; JB > 0; JB -= 3) kB[JB] = (0, NB.C)(kB[JB], kB[JB - 3] - yB, oB);
```

#### 2383. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21503` → after: `L21619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21619) · [Before (L21503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21503)

```diff
-       const Ot = tt.mJ.getState(et, "cape"),
+       const TB = BB.zW.getState(IB, "cape"),
```

#### 2384. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21509` → after: `L21625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21625) · [Before (L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21509)

```diff
-       } = tt.mJ.xet(et), mt = "gliding" === Dt || "sleeping" === Dt, dt = mt ? 0 : Ft.angle.def, jt = mt ? 0 : Zt / Ot.bones.skeleLen, Ht = mt ? 0 : Math.sin(Math.abs(tt.mJ.getState(et, "updateWalkingState").walkingAngle)) * Lt;
+       } = BB.zW.uIB(IB), GB = "gliding" === oB || "sleeping" === oB, vB = GB ? 0 : RB.angle.def, kB = GB ? 0 : jB / TB.bones.skeleLen, cB = GB ? 0 : Math.sin(Math.abs(BB.zW.getState(IB, "updateWalkingState").walkingAngle)) * PB;
```

#### 2385. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21520` → after: `L21636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21636) · [Before (L21520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21520)

```diff
-   39060: (tt, et, Vt) => {
+   38896: (BB, IB, ZB) => {
```

#### 2386. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21524-L21525` → after: `L21640-L21641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21640-L21641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21640-L21641) · [Before (L21524-L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21524-L21525)

```diff
-     var Ot = Vt(38035),
-       qt = Vt(3751);
+     var TB = ZB(37837),
+       JB = ZB(3854);
```

#### 2387. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21534-L21535` → after: `L21650-L21651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21650-L21651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21650-L21651) · [Before (L21534-L21535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21534-L21535)

```diff
-         qJ: function(tt, et) {},
-         nS: null,
+         cW: function(BB, IB) {},
+         nH: null,
```

#### 2388. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21538-L21540` → after: `L21654-L21656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21654-L21656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21654-L21656) · [Before (L21538-L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21538-L21540)

```diff
-             const et = Dt.uZ,
-               Vt = tt.mJ.YG(et);
-             Vt.preventFallOffEdge && !Dt._preventFallOffLastTick && (0, qt.Qv)();
+             const IB = oB.bR,
+               ZB = BB.zW.vx(IB);
+             ZB.preventFallOffEdge && !oB._preventFallOffLastTick && (0, JB.hY)();
```

#### 2389. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21545` → after: `L21661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21661) · [Before (L21545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21545)

```diff
-             } = tt.mJ.xet(et), Ht = (0, Ot.j)(mt, dt, jt, Dt._preventFallOffLastTick);
+             } = BB.zW.uIB(IB), cB = (0, TB.f)(GB, vB, kB, oB._preventFallOffLastTick);
```

#### 2390. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21552` → after: `L21668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21668) · [Before (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21552)

```diff
-   39049: (tt, et, Vt) => {
+   38888: (BB, IB, ZB) => {
```

#### 2391. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21557` → after: `L21673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21673) · [Before (L21557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21557)

```diff
-     var Ot = Vt(39052);
+     var TB = ZB(38892);
```

#### 2392. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21567-L21568` → after: `L21683-L21684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21683-L21684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21683-L21684) · [Before (L21567-L21568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21567-L21568)

```diff
-         qJ: function(tt, et) {},
-         nS: function(tt, et) {},
+         cW: function(BB, IB) {},
+         nH: function(BB, IB) {},
```

#### 2393. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21572` → after: `L21688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21688) · [Before (L21572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21572)

```diff
-             Ot.length && tt.mJ.ZZ(Ot[0].uZ, "doOnFirstTick")
+             TB.length && BB.zW.Qr(TB[0].bR, "doOnFirstTick")
```

#### 2394. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21582` → after: `L21698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21698) · [Before (L21582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21582)

```diff
-   39063: (tt, et, Vt) => {
+   38905: (BB, IB, ZB) => {
```

#### 2395. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21586-L21597` → after: `L21702-L21713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21702-L21713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21702-L21713) · [Before (L21586-L21597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21586-L21597)

```diff
-     var Ot = Vt(31),
-       qt = Vt(9050),
-       Dt = Vt(37032),
-       mt = Vt(377),
-       dt = Vt(37545),
-       jt = Vt(39065),
-       Ht = Vt(38906),
-       Xt = Vt(38915),
-       Qt = Vt(39068),
-       lt = Vt(37480),
-       Et = Vt(26),
-       ft = Vt(39070);
+     var TB = ZB(24),
+       JB = ZB(8935),
+       oB = ZB(36829),
+       GB = ZB(342),
+       vB = ZB(37336),
+       kB = ZB(38914),
+       cB = ZB(38721),
+       nB = ZB(38734),
+       hB = ZB(38919),
+       zB = ZB(37270),
+       FB = ZB(20),
+       NB = ZB(38926);
```

#### 2396. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21606` → after: `L21722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21722) · [Before (L21606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21606)

```diff
-             for (const tt of Dt.items)(0, jt.q)(tt.content, tt.sizeCache.x, Dt.y, Dt.height, Ot, tt.sizeCache.width, qt);
+             for (const BB of oB.items)(0, kB.p)(BB.content, BB.sizeCache.x, oB.y, oB.height, TB, BB.sizeCache.width, JB);
```

#### 2397. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21610-L21611` → after: `L21726-L21727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21726-L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21726-L21727) · [Before (L21610-L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21610-L21611)

```diff
-             tt.items.length > 0 && (0, jt.t)(tt.items.map((tt => tt.content)), 0, tt.y, tt.height, Ot, qt)
-           }(0, Ht.k)(Ot)
+             BB.items.length > 0 && (0, kB.q)(BB.items.map((BB => BB.content)), 0, BB.y, BB.height, TB, JB)
+           }(0, cB.g)(TB)
```

#### 2398. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21615` → after: `L21731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21731) · [Before (L21615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21615)

```diff
-         tt.mJ.oet(et.planeEId) || function(et) {
+         BB.zW.RIB(IB.planeEId) || function(IB) {
```

#### 2399. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21620` → after: `L21736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21736) · [Before (L21620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21620)

```diff
-           } = (0, jt.o)(tt, et.uZ, `${et.uZ}MultilineText`);
+           } = (0, kB.o)(BB, IB.bR, `${IB.bR}MultilineText`);
```

#### 2400. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21625` → after: `L21741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21741) · [Before (L21625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21625)

```diff
-             Vt = jt.h.VERTICAL_PADDING;
+             ZB = kB.g.VERTICAL_PADDING;
```

#### 2401. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21628-L21629` → after: `L21744-L21745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21744-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21744-L21745) · [Before (L21628-L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21628-L21629)

```diff
-               Dt = qt.width + 2 * jt.h.HORIZONTAL_PADDING;
-             et = Math.max(et, Dt), Vt += qt.height + jt.h.LINE_SPACING
+               oB = JB.width + 2 * kB.g.HORIZONTAL_PADDING;
+             IB = Math.max(IB, oB), ZB += JB.height + kB.g.LINE_SPACING
```

#### 2402. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21636` → after: `L21752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21752) · [Before (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21636)

```diff
-         (0, dt.H)(et.texture, Ot.width, Ot.height), et.plane.cj.set(Ot.width * jt.h.TEXT_PLANE_RATIO, Ot.height * jt.h.TEXT_PLANE_RATIO, 1), bt(et, Ot), et.sizeCache = Ot
+         (0, vB.D)(IB.texture, TB.width, TB.height), IB.plane.ek.set(TB.width * kB.g.TEXT_PLANE_RATIO, TB.height * kB.g.TEXT_PLANE_RATIO, 1), WB(IB, TB), IB.sizeCache = TB
```

#### 2403. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21663-L21664` → after: `L21779-L21780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21779-L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21779-L21780) · [Before (L21663-L21664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21663-L21664)

```diff
-               const et = (0, jt.z)(tt.content).substring(0, Vt - qt),
-                 Dt = (0, jt.A)(tt.content) ? {
+               const IB = (0, kB.x)(BB.content).substring(0, ZB - JB),
+                 oB = (0, kB.z)(BB.content) ? {
```

#### 2404. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21683` → after: `L21799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21799) · [Before (L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21683)

```diff
-         if ((0, Xt.b)(tt)) return void(et.newMessageWhileLost ||= !qt);
+         if ((0, nB.c)(BB)) return void(IB.newMessageWhileLost ||= !JB);
```

#### 2405. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21691-L21692` → after: `L21807-L21808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21807-L21808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21807-L21808) · [Before (L21691-L21692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21691-L21692)

```diff
-           const et = (0, jt.x)(tt.content, jt.h.DEFAULT_FONT_SIZE),
-             Vt = (0, jt.B)(),
+           const IB = (0, kB.u)(BB.content, kB.g.DEFAULT_FONT_SIZE),
+             ZB = (0, kB.A)(),
```

#### 2406. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21700-L21701` → after: `L21816-L21817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21816-L21817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21816-L21817) · [Before (L21700-L21701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21700-L21701)

```diff
-             if ((0, jt.A)(Dt)) {
-               const tt = (0, jt.z)(Dt);
+             if ((0, kB.z)(oB)) {
+               const BB = (0, kB.x)(oB);
```

#### 2407. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21714-L21715` → after: `L21830-L21831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21830-L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21830-L21831) · [Before (L21714-L21715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21714-L21715)

```diff
-                 Vt = Ot[Ot.length - 1].items.reduce(((tt, et) => tt + ((0, jt.A)(et.content) ? (0, ft.e)((0, jt.z)(et.content)) : et.numCharacters)), 0),
-                 qt = (0, ft.i)(tt, Vt);
+                 ZB = TB[TB.length - 1].items.reduce(((BB, IB) => BB + ((0, kB.z)(IB.content) ? (0, NB.c)((0, kB.x)(IB.content)) : IB.numCharacters)), 0),
+                 JB = (0, NB.f)(BB, ZB);
```

#### 2408. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21734` → after: `L21850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21850) · [Before (L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21734)

```diff
-           let qt = jt.h.VERTICAL_PADDING / 2;
+           let JB = kB.g.VERTICAL_PADDING / 2;
```

#### 2409. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21743` → after: `L21859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21859) · [Before (L21743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21743)

```diff
-               Dt.width = tt, Dt.height = et, Dt.y = qt, qt += et + jt.h.LINE_SPACING
+               oB.width = BB, oB.height = IB, oB.y = JB, JB += IB + kB.g.LINE_SPACING
```

#### 2410. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21748` → after: `L21864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21864) · [Before (L21748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21748)

```diff
-             animateInDelay: jt.h.ANIMATE_IN_DELAY
+             animateInDelay: kB.g.ANIMATE_IN_DELAY
```

#### 2411. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21753` → after: `L21869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21869) · [Before (L21753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21753)

```diff
-             for (const tt of Vt.items)(0, jt.A)(tt.content) ? et += (0, jt.z)(tt.content).length : et += 1;
+             for (const BB of ZB.items)(0, kB.z)(BB.content) ? IB += (0, kB.x)(BB.content).length : IB += 1;
```

#### 2412. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21756-L21757` → after: `L21872-L21873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21872-L21873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21872-L21873) · [Before (L21756-L21757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21756-L21757)

```diff
-         const Ht = (0, dt.h)(et.texture);
-         Ht.clearRect(0, 0, et.sizeCache.width, et.sizeCache.height), Ht.fillStyle = null !== (Ot = et.processedTextBox.backgroundColor) && void 0 !== Ot ? Ot : "#22283b", Ht.fillRect(0, 0, et.sizeCache.width, et.sizeCache.height), et.drawnCharCount > 0 ? Vt(et, Nt(et.processedTex … [truncated]
+         const cB = (0, vB.g)(IB.texture);
+         cB.clearRect(0, 0, IB.sizeCache.width, IB.sizeCache.height), cB.fillStyle = null !== (TB = IB.processedTextBox.backgroundColor) && void 0 !== TB ? TB : "#22283b", cB.fillRect(0, 0, IB.sizeCache.width, IB.sizeCache.height), IB.drawnCharCount > 0 ? ZB(IB, yB(IB.processedTex … [truncated]
```

#### 2413. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21762-L21765` → after: `L21878-L21881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21878-L21881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21878-L21881) · [Before (L21762-L21765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21762-L21765)

```diff
-         const lt = tt.mJ.ZVt(et.planeEId);
-         let Et = null !== (Ot = et.yOffset) && void 0 !== Ot ? Ot : 2.1;
-         const ft = tt.mJ.YM(et.uZ),
-           wt = tt.mJ.YM(tt.lL);
+         const zB = BB.zW.YZB(IB.planeEId);
+         let FB = null !== (TB = IB.yOffset) && void 0 !== TB ? TB : 2.1;
+         const NB = BB.zW.aU(IB.bR),
+           gB = BB.zW.aU(BB.Jm);
```

#### 2414. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21769` → after: `L21885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21885) · [Before (L21769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21769)

```diff
-           const et = tt.camera.zp();
+           const IB = BB.camera.XV();
```

#### 2415. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21775` → after: `L21891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21891) · [Before (L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21775)

```diff
-           Ct = null !== (qt = et.xOffset) && void 0 !== qt ? qt : .6;
+           CB = null !== (JB = IB.xOffset) && void 0 !== JB ? JB : .6;
```

#### 2416. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21779` → after: `L21895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21895) · [Before (L21779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21779)

```diff
-           const tt = Ct + Vt.width * jt.h.TEXT_PLANE_RATIO / 2;
+           const BB = CB + ZB.width * kB.g.TEXT_PLANE_RATIO / 2;
```

#### 2417. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21782-L21784` → after: `L21898-L21900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21898-L21900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21898-L21900) · [Before (L21782-L21784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21782-L21784)

```diff
-         const ht = tt.mJ.xet(et.uZ);
-         Et += null !== (Dt = null === ht || void 0 === ht || null === (mt = ht.meshOffset) || void 0 === mt ? void 0 : mt[1]) && void 0 !== Dt ? Dt : 0, ut += null !== (dt = null === ht || void 0 === ht || null === (Ht = ht.meshOffset) || void 0 === Ht ? void 0 : Ht[0]) && void 0 … [truncated]
-         Et -= Vt.height * jt.h.TEXT_PLANE_RATIO / 2, tt.mJ.oet(et.planeEId) && (lt.offset[1] = Et, lt.offset[0] = ut, lt.offset[2] = Kt)
+         const wB = BB.zW.uIB(IB.bR);
+         FB += null !== (oB = null === wB || void 0 === wB || null === (GB = wB.meshOffset) || void 0 === GB ? void 0 : GB[1]) && void 0 !== oB ? oB : 0, QB += null !== (vB = null === wB || void 0 === wB || null === (cB = wB.meshOffset) || void 0 === cB ? void 0 : cB[0]) && void 0 … [truncated]
+         FB -= ZB.height * kB.g.TEXT_PLANE_RATIO / 2, BB.zW.RIB(IB.planeEId) && (zB.offset[1] = FB, zB.offset[0] = QB, zB.offset[2] = sB)
```

#### 2418. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21788` → after: `L21904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21904) · [Before (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21788)

```diff
-         return tt.mJ.oet(et.planeEId) ? (et.missingPlaneLogged = !1, et.plane) : (et.missingPlaneLogged || (0, Xt.b)(tt) || (et.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
+         return BB.zW.RIB(IB.planeEId) ? (IB.missingPlaneLogged = !1, IB.plane) : (IB.missingPlaneLogged || (0, nB.c)(BB) || (IB.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
```

#### 2419. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21792` → after: `L21908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21908) · [Before (L21792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21792)

```diff
-         const Vt = tt.mJ.getState(et.uZ, "hidingMeshManager");
+         const ZB = BB.zW.getState(IB.bR, "hidingMeshManager");
```

#### 2420. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21795-L21796` → after: `L21911-L21912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21911-L21912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21911-L21912) · [Before (L21795-L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21795-L21796)

```diff
-       return (0, Xt.c)(tt.Bf.vI(), (() => {
-         for (const Vt of tt.mJ.bZ(et)) {
+       return (0, nB.d)(BB.Ig.JR(), (() => {
+         for (const ZB of BB.zW.fR(IB)) {
```

#### 2421. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21826-L21827` → after: `L21942-L21943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21942-L21943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21942-L21943) · [Before (L21826-L21827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21826-L21827)

```diff
-         qJ: function(et, Vt) {
-           Vt._visibilityCombinator = new Dt.b((et => {
+         cW: function(IB, ZB) {
+           ZB._visibilityCombinator = new oB.d((IB => {
```

#### 2422. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21829` → after: `L21945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21945) · [Before (L21829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21829)

```diff
-           })), Vt.hideNametagSub = Ot.j.subscribe("appManagerUpdated|areNametagsHidden", (tt => {
+           })), ZB.hideNametagSub = TB.l.subscribe("appManagerUpdated|areNametagsHidden", (BB => {
```

#### 2423. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21831` → after: `L21947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21947) · [Before (L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21831)

```diff
-           })), Vt._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !Et.b.get("areNametagsHidden")), Ct(Vt), Vt.textBoxSub = Ot.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|multilineTextBox`, (tt => {
+           })), ZB._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !FB.d.get("areNametagsHidden")), CB(ZB), ZB.textBoxSub = TB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|multilineTextBox`, (BB => {
```

#### 2424. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21834` → after: `L21950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21950) · [Before (L21834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21834)

```diff
-           Vt.unsubscribeKeyPromptChanges = (0, qt.n)((() => {
+           ZB.unsubscribeKeyPromptChanges = (0, JB.r)((() => {
```

#### 2425. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21836-L21837` → after: `L21952-L21953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21952-L21953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21952-L21953) · [Before (L21836-L21837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21836-L21837)

```diff
-             null !== (tt = Vt.textBox) && void 0 !== tt && null !== (et = tt.content) && void 0 !== et && et.some(mt.ib) && Mt(Vt, !0)
-           })), tt.lL in tt.dL && et in tt.dL[tt.lL] && "multilineTextBox" in tt.dL[tt.lL][et] && (Vt.textBox = tt.dL[tt.lL][et].multilineTextBox), Mt(Vt)
+             null !== (BB = ZB.textBox) && void 0 !== BB && null !== (IB = BB.content) && void 0 !== IB && IB.some(GB.Bb) && UB(ZB, !0)
+           })), BB.Jm in BB.Tm && IB in BB.Tm[BB.Jm] && "multilineTextBox" in BB.Tm[BB.Jm][IB] && (ZB.textBox = BB.Tm[BB.Jm][IB].multilineTextBox), UB(ZB)
```

#### 2426. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21843` → after: `L21959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21959) · [Before (L21843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21843)

```diff
-             Vt && ((0, jt.C)(Vt, (0, Qt.s)(null === (Ot = qt.textBox) || void 0 === Ot ? void 0 : Ot.visibleThroughWalls, tt.OJ.canSeeNametagsThroughWalls)), Ct(qt), null !== qt.timeSinceAnimationStart && qt.textBox && (qt.timeSinceAnimationStart += et, qt.toDrawCharCount = Math. … [truncated]
+             ZB && ((0, kB.B)(ZB, (0, hB.x)(null === (TB = JB.textBox) || void 0 === TB ? void 0 : TB.visibleThroughWalls, BB.vW.canSeeNametagsThroughWalls)), CB(JB), null !== JB.timeSinceAnimationStart && JB.textBox && (JB.timeSinceAnimationStart += IB, JB.toDrawCharCount = Math. … [truncated]
```

#### 2427. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21846` → after: `L21962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21962) · [Before (L21846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21846)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2428. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21852-L21854` → after: `L21968-L21970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21968-L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21968-L21970) · [Before (L21852-L21854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21852-L21854)

```diff
-               const Vt = (0, jt.C)(et, (0, Qt.s)(null === (Ot = qt.textBox) || void 0 === Ot ? void 0 : Ot.visibleThroughWalls, tt.OJ.canSeeNametagsThroughWalls)),
-                 Dt = (0, Qt.v)(tt, qt.uZ, qt.planeEId, Vt);
-               (0, Qt.k)(tt, qt.planeEId), et.cj.set(qt.sizeCache.width * jt.h.TEXT_PLANE_RATIO * Dt, qt.sizeCache.height * jt.h.TEXT_PLANE_RATIO * Dt, 1)
+               const ZB = (0, kB.B)(IB, (0, hB.x)(null === (TB = JB.textBox) || void 0 === TB ? void 0 : TB.visibleThroughWalls, BB.vW.canSeeNametagsThroughWalls)),
+                 oB = (0, hB.z)(BB, JB.bR, JB.planeEId, ZB);
+               (0, hB.m)(BB, JB.planeEId), IB.ek.set(JB.sizeCache.width * kB.g.TEXT_PLANE_RATIO * oB, JB.sizeCache.height * kB.g.TEXT_PLANE_RATIO * oB, 1)
```

#### 2429. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21858` → after: `L21974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21974) · [Before (L21858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21858)

```diff
-         nS: function(et, Vt) {
+         nH: function(IB, ZB) {
```

#### 2430. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21860` → after: `L21976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21976) · [Before (L21860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21860)

```diff
-           tt.mJ.deleteEntity(Vt.planeEId), Ot.j.unsubscribe(Vt.textBoxSub), Ot.j.unsubscribe(Vt.hideNametagSub), null === (qt = Vt.unsubscribeKeyPromptChanges) || void 0 === qt || qt.call(Vt)
+           BB.zW.deleteEntity(ZB.planeEId), TB.l.unsubscribe(ZB.textBoxSub), TB.l.unsubscribe(ZB.hideNametagSub), null === (JB = ZB.unsubscribeKeyPromptChanges) || void 0 === JB || JB.call(ZB)
```

#### 2431. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21865` → after: `L21981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21981) · [Before (L21865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21865)

```diff
-   39079: (tt, et, Vt) => {
+   38929: (BB, IB, ZB) => {
```

#### 2432. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21869` → after: `L21985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21985) · [Before (L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21869)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2433. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21871-L21897` → after: `L21987-L22013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21987-L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21987-L22013) · [Before (L21871-L21897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21871-L21897)

```diff
-       Dt = Vt(37545),
-       mt = Vt(38600),
-       dt = Vt(37663),
-       jt = Vt(39068),
-       Ht = Vt(38613),
-       Xt = Vt(31),
-       Qt = Vt(9050),
-       lt = Vt(377),
-       Et = Vt(697),
-       ft = Vt(2848),
-       wt = Vt(106),
-       yt = Vt(37002),
-       Nt = Vt(38690),
-       Mt = Vt(37032),
-       bt = Vt(36932),
-       Jt = Vt(39065),
- ... (11 more removed lines; see GitHub link above)
+       oB = ZB(37336),
+       GB = ZB(38423),
+       vB = ZB(37469),
+       kB = ZB(38919),
+       cB = ZB(38433),
+       nB = ZB(24),
+       hB = ZB(8935),
+       zB = ZB(342),
+       FB = ZB(650),
+       NB = ZB(2912),
+       gB = ZB(105),
+       qB = ZB(36794),
+       yB = ZB(38504),
+       UB = ZB(36829),
+       WB = ZB(36706),
+       dB = ZB(38914),
+ ... (11 more added lines; see GitHub link above)
```

#### 2434. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21914` → after: `L22030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22030) · [Before (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21914)

```diff
-         return Number.isFinite(Vt) && Vt > 0 ? Vt : et
+         return Number.isFinite(ZB) && ZB > 0 ? ZB : IB
```

#### 2435. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21928` → after: `L22044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22044) · [Before (L21928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21928)

```diff
-         const Ot = null !== (Vt = tt.applyTo) && void 0 !== Vt ? Vt : "both";
+         const TB = null !== (ZB = BB.applyTo) && void 0 !== ZB ? ZB : "both";
```

#### 2436. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21934` → after: `L22050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22050) · [Before (L21934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21934)

```diff
-         return "glow" === tt.style ? 3 * et : Math.ceil(et / 2) + 1
+         return "glow" === BB.style ? 3 * IB : Math.ceil(IB / 2) + 1
```

#### 2437. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21948` → after: `L22064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22064) · [Before (L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21948)

```diff
-         return Math.round(qt().pm(tt.mJ.YM(tt.lL), tt.mJ.YM(et)))
+         return Math.round(JB().uG(BB.zW.aU(BB.Jm), BB.zW.aU(IB)))
```

#### 2438. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21952` → after: `L22068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22068) · [Before (L21952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21952)

```diff
-         const et = At(tt.uZ),
+         const IB = fB(BB.bR),
```

#### 2439. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21958-L21959` → after: `L22074-L22075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22074-L22075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22074-L22075) · [Before (L21958-L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21958-L21959)

```diff
-         const Vt = (0, ft.c)();
-         return et !== tt.lL && "Player" === Vt.getLifeformType(et) && (0, Ct.e)(Vt.getRawEntityName(et), ut.d.shown)
+         const ZB = (0, NB.d)();
+         return IB !== BB.Jm && "Player" === ZB.getLifeformType(IB) && (0, CB.c)(ZB.getRawEntityName(IB), QB.b.shown)
```

#### 2440. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21965-L21967` → after: `L22081-L22083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22081-L22083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22081-L22083) · [Before (L21965-L21967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21965-L21967)

```diff
-         const Vt = (0, Jt.k)(tt.content, (0, Jt.B)()),
-           qt = (0, Jt.k)(tt.subtitle, (0, Jt.B)()),
-           Dt = (0, Jt.l)(et),
+         const ZB = (0, dB.k)(BB.content, (0, dB.A)()),
+           JB = (0, dB.k)(BB.subtitle, (0, dB.A)()),
+           oB = (0, dB.m)(IB),
```

#### 2441. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21970` → after: `L22086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22086) · [Before (L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21970)

```diff
-           jt = Math.max(Jt.h.VERTICAL_PADDING, function(tt) {
+           kB = Math.max(dB.g.VERTICAL_PADDING, function(BB) {
```

#### 2442. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21972` → after: `L22088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22088) · [Before (L21972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21972)

```diff
-             return "never" === (null !== (et = null === (Vt = tt.healthbar) || void 0 === Vt ? void 0 : Vt.display) && void 0 !== et ? et : "onDamage") ? 0 : Ot(tt) + rt(tt)
+             return "never" === (null !== (IB = null === (ZB = BB.healthbar) || void 0 === ZB ? void 0 : ZB.display) && void 0 !== IB ? IB : "onDamage") ? 0 : TB(BB) + eB(BB)
```

#### 2443. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21977` → after: `L22093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22093) · [Before (L21977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21977)

```diff
-           return et ? ot(et) + Jt.h.HORIZONTAL_PADDING / 2 : 0
+           return IB ? LB(IB) + dB.g.HORIZONTAL_PADDING / 2 : 0
```

#### 2444. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21980` → after: `L22096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22096) · [Before (L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21980)

```diff
-           const tt = Math.max(Vt.width, qt.width) + Jt.h.HORIZONTAL_PADDING;
+           const BB = Math.max(ZB.width, JB.width) + dB.g.HORIZONTAL_PADDING;
```

#### 2445. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21991` → after: `L22107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22107) · [Before (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21991)

```diff
-           Ht = (0, Dt.h)(jt),
+           cB = (0, oB.g)(kB),
```

#### 2446. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22002` → after: `L22118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22118) · [Before (L22002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22002)

```diff
-               Qt = vt.e.getTexture(dt, Wt.k.ICON).url,
+               hB = OB.e.getTexture(vB, YB.m.ICON).url,
```

#### 2447. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22005` → after: `L22121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22121) · [Before (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22005)

```diff
-               Vt.nameTagId === Xt && (Ht.imageSmoothingEnabled = !1, Ht.drawImage(lt, Ot, Dt, 64, 64), (0, Kt.k)(jt))
+               ZB.nameTagId === nB && (cB.imageSmoothingEnabled = !1, cB.drawImage(zB, TB, oB, 64, 64), (0, sB.g)(kB))
```

#### 2448. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22016-L22017` → after: `L22132-L22133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22132-L22133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22132-L22133) · [Before (L22016-L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22016-L22017)

```diff
-         const yt = (dt.width.full - dt.width.content) / 2 + Jt.h.HORIZONTAL_PADDING / 2;
-         if ((0, Jt.t)(tt.content, yt, wt, dt.height.content, jt, Qt), tt.subtitle) {
+         const qB = (vB.width.full - vB.width.content) / 2 + dB.g.HORIZONTAL_PADDING / 2;
+         if ((0, dB.q)(BB.content, qB, gB, vB.height.content, kB, hB), BB.subtitle) {
```

#### 2449. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22019-L22020` → after: `L22135-L22136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22135-L22136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22135-L22136) · [Before (L22019-L22020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22019-L22020)

```diff
-           const et = (dt.width.full - dt.width.subtitle) / 2 + Jt.h.HORIZONTAL_PADDING / 2;
-           Ht.fillStyle = tt.subtitleBackgroundColor, Ht.fillRect(Et, wt, lt, dt.height.subtitle), (0, Jt.t)(tt.subtitle, et, wt, dt.height.subtitle, jt, Qt)
+           const IB = (vB.width.full - vB.width.subtitle) / 2 + dB.g.HORIZONTAL_PADDING / 2;
+           cB.fillStyle = BB.subtitleBackgroundColor, cB.fillRect(FB, gB, zB, vB.height.subtitle), (0, dB.q)(BB.subtitle, IB, gB, vB.height.subtitle, kB, hB)
```

#### 2450. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22037` → after: `L22153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22153) · [Before (L22037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22037)

```diff
-             const Dt = [...qt && qt.length > 0 ? qt : et].sort(((tt, et) => tt.healthFraction - et.healthFraction)),
+             const oB = [...JB && JB.length > 0 ? JB : IB].sort(((BB, IB) => BB.healthFraction - IB.healthFraction)),
```

#### 2451. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22039` → after: `L22155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22155) · [Before (L22039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22039)

```diff
-             return (null !== mt && void 0 !== mt ? mt : Dt[Dt.length - 1]).colour
+             return (null !== GB && void 0 !== GB ? GB : oB[oB.length - 1]).colour
```

#### 2452. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22095` → after: `L22211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22211) · [Before (L22095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22095)

```diff
-         }(0, Kt.k)(jt)
+         }(0, sB.g)(kB)
```

#### 2453. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22099` → after: `L22215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22215) · [Before (L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22099)

```diff
-         null !== et.planeEId && (tt.mJ.deleteEntity(et.planeEId), et.planeEId = null, et._planeMesh = null, et._planeTexture = null, et._lightState = null, et._scaleX = NaN, et._scaleY = NaN, et._offsetY = NaN)
+         null !== IB.planeEId && (BB.zW.deleteEntity(IB.planeEId), IB.planeEId = null, IB._planeMesh = null, IB._planeTexture = null, IB._lightState = null, IB._scaleX = NaN, IB._scaleY = NaN, IB._offsetY = NaN)
```

#### 2454. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22109-L22110` → after: `L22225-L22226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22225-L22226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22225-L22226) · [Before (L22109-L22110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22109-L22110)

```diff
-           } = (0, Jt.o)(tt, et.uZ, `${et.uZ}NameTag`, 1, 1, !0);
-           et.planeEId = Vt, et._planeMesh = Ot, et._planeTexture = Dt, et._lightState = mt, tt.mJ.ZVt(Vt).oVt = (Vt, Ot) => {
+           } = (0, dB.o)(BB, IB.bR, `${IB.bR}NameTag`, 1, 1, !0);
+           IB.planeEId = ZB, IB._planeMesh = TB, IB._planeTexture = oB, IB._lightState = GB, BB.zW.YZB(ZB).PZB = (ZB, TB) => {
```

#### 2455. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22113` → after: `L22229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22229) · [Before (L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22113)

```diff
-               const Ht = null !== (Vt = null === (Ot = tt.dL[tt.lL][et.uZ]) || void 0 === Ot ? void 0 : Ot.meshScaling) && void 0 !== Vt ? Vt : {},
+               const cB = null !== (ZB = null === (TB = BB.Tm[BB.Jm][IB.bR]) || void 0 === TB ? void 0 : TB.meshScaling) && void 0 !== ZB ? ZB : {},
```

#### 2456. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22116-L22119` → after: `L22232-L22235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22232-L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22232-L22235) · [Before (L22116-L22119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22116-L22119)

```diff
-                 lt = Qe(et.uZ),
-                 Et = (0, ft.c)().YB(et.uZ);
-               let wt = (null !== (Dt = et.nameYOffset) && void 0 !== Dt ? Dt : Pt.b) * Et;
-               const yt = tt.mJ.xet(et.uZ);
+                 zB = nI(IB.bR),
+                 FB = (0, NB.d)().sV(IB.bR);
+               let gB = (null !== (oB = IB.nameYOffset) && void 0 !== oB ? oB : MB.c) * FB;
+               const qB = BB.zW.uIB(IB.bR);
```

#### 2457. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22121` → after: `L22237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22237) · [Before (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22121)

```diff
-                 const tt = (0, ft.c)().getLifeformType(et.uZ);
+                 const BB = (0, NB.d)().getLifeformType(IB.bR);
```

#### 2458. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22123` → after: `L22239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22239) · [Before (L22123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22123)

```diff
-                 if (null !== tt) wt += (null !== (Mt = null === (bt = (0, Nt.c)(tt).poseNameRise) || void 0 === bt ? void 0 : bt[yt.pose]) && void 0 !== Mt ? Mt : 0) * Et
+                 if (null !== BB) gB += (null !== (UB = null === (WB = (0, yB.c)(BB).poseNameRise) || void 0 === WB ? void 0 : WB[qB.pose]) && void 0 !== UB ? UB : 0) * FB
```

#### 2459. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22125-L22126` → after: `L22241-L22242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22241-L22242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22241-L22242) · [Before (L22125-L22126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22125-L22126)

```diff
-               if (wt += null !== (mt = null === yt || void 0 === yt || null === (dt = yt.meshOffset) || void 0 === dt ? void 0 : dt[1]) && void 0 !== mt ? mt : 0, lt) {
-                 const Vt = .23 * (qt().pm(tt.mJ.YM(tt.lL), tt.mJ.YM(et.uZ)) - jt.d) / jt.d;
+               if (gB += null !== (GB = null === qB || void 0 === qB || null === (vB = qB.meshOffset) || void 0 === vB ? void 0 : vB[1]) && void 0 !== GB ? GB : 0, zB) {
+                 const ZB = .23 * (JB().uG(BB.zW.aU(BB.Jm), BB.zW.aU(IB.bR)) - kB.g) / kB.g;
```

#### 2460. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22135-L22138` → after: `L22251-L22254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22251-L22254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22251-L22254) · [Before (L22135-L22138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22135-L22138)

```diff
-         (0, Dt.H)(Ot, mt.width, mt.height), te(et, Jt.h.TEXT_PLANE_RATIO * mt.width, Jt.h.TEXT_PLANE_RATIO * mt.height), et._layoutHeight = Jt.h.TEXT_PLANE_RATIO * mt.height;
-         const dt = (0, Jt.k)(Vt.content, (0, Jt.B)()),
-           Ht = (0, Jt.k)(Vt.subtitle, (0, Jt.B)()),
-           Xt = (0, Jt.l)(et.effects);
+         (0, oB.D)(TB, GB.width, GB.height), SB(IB, dB.g.TEXT_PLANE_RATIO * GB.width, dB.g.TEXT_PLANE_RATIO * GB.height), IB._layoutHeight = dB.g.TEXT_PLANE_RATIO * GB.height;
+         const vB = (0, dB.k)(ZB.content, (0, dB.A)()),
+           cB = (0, dB.k)(ZB.subtitle, (0, dB.A)()),
+           nB = (0, dB.m)(IB.effects);
```

#### 2461. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22142-L22143` → after: `L22258-L22259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22258-L22259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22258-L22259) · [Before (L22142-L22143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22142-L22143)

```diff
-             content: dt.width + Jt.h.HORIZONTAL_PADDING,
-             subtitle: Ht.width + Jt.h.HORIZONTAL_PADDING,
+             content: vB.width + dB.g.HORIZONTAL_PADDING,
+             subtitle: cB.width + dB.g.HORIZONTAL_PADDING,
```

#### 2462. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22156` → after: `L22272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22272) · [Before (L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22156)

```diff
-         const Ot = Ee(tt.uZ, et),
+         const TB = zI(BB.bR, IB),
```

#### 2463. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22160-L22161` → after: `L22276-L22277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22276-L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22276-L22277) · [Before (L22160-L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22160-L22161)

```diff
-           Dt = Ot * Jt.h.TEXT_PLANE_RATIO * qt.height.full;
-         return te(tt, Ot * Jt.h.TEXT_PLANE_RATIO * qt.width.full * Vt, Dt * Vt), Dt
+           oB = TB * dB.g.TEXT_PLANE_RATIO * JB.height.full;
+         return SB(BB, TB * dB.g.TEXT_PLANE_RATIO * JB.width.full * ZB, oB * ZB), oB
```

#### 2464. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22165` → after: `L22281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22281) · [Before (L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22165)

```diff
-         tt._scaleX === et && tt._scaleY === Vt || (tt._scaleX = et, tt._scaleY = Vt, tt._planeMesh.cj.set(et, Vt, 1))
+         BB._scaleX === IB && BB._scaleY === ZB || (BB._scaleX = IB, BB._scaleY = ZB, BB._planeMesh.ek.set(IB, ZB, 1))
```

#### 2465. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22170` → after: `L22286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22286) · [Before (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22170)

```diff
-         return null !== (et = tt.name) && void 0 !== et ? et : (0, ft.c)().getEntityName(tt.uZ, !wt.featureFlags.canSeeRealPlayerNames)
+         return null !== (IB = BB.name) && void 0 !== IB ? IB : (0, NB.d)().getEntityName(BB.bR, !gB.featureFlags.canSeeRealPlayerNames)
```

#### 2466. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22179` → after: `L22295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22295) · [Before (L22179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22179)

```diff
-         if ((0, ht.b)(tt)) return;
+         if ((0, wB.c)(BB)) return;
```

#### 2467. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22184` → after: `L22300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22300) · [Before (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22184)

```diff
-           (et = et ? JSON.parse(JSON.stringify(et)) : {}).content ? et.content = (0, Jt.x)(et.content, Jt.h.DEFAULT_FONT_SIZE) : et.content = [{
+           (IB = IB ? JSON.parse(JSON.stringify(IB)) : {}).content ? IB.content = (0, dB.u)(IB.content, dB.g.DEFAULT_FONT_SIZE) : IB.content = [{
```

#### 2468. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22187` → after: `L22303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22303) · [Before (L22187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22187)

```diff
-           const mt = (0, ft.c)().getPlayerRanks(tt).map((tt => Et.j[tt])).filter((tt => tt.nameTag && tt.visible));
+           const GB = (0, NB.d)().getPlayerRanks(BB).map((BB => FB.m[BB])).filter((BB => BB.nameTag && BB.visible));
```

#### 2469. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22189` → after: `L22305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22305) · [Before (L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22189)

```diff
-           const dt = Et.o[Ot];
+           const vB = FB.t[TB];
```

#### 2470. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22191` → after: `L22307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22307) · [Before (L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22191)

```diff
-             for (const jt of et.content)(0, Jt.A)(jt) && (jt.style ? (0, lt.Ib)(jt.style) || (jt.style.color = dt) : jt.style = {
+             for (const kB of IB.content)(0, dB.z)(kB) && (kB.style ? (0, zB.gc)(kB.style) || (kB.style.color = vB) : kB.style = {
```

#### 2471. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22194` → after: `L22310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22310) · [Before (L22194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22194)

```diff
-           if (Yt(tt) ? (et.content.push(Jt.d), Bt.add(tt)) : Bt.delete(tt), Qe(tt)) {
+           if (AB(BB) ? (IB.content.push(dB.c), tB.add(BB)) : tB.delete(BB), nI(BB)) {
```

#### 2472. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22197` → after: `L22313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22313) · [Before (L22197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22197)

```diff
-               str: ` ${Vt}m`,
+               str: ` ${ZB}m`,
```

#### 2473. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22203-L22204` → after: `L22319-L22320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22319-L22320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22319-L22320) · [Before (L22203-L22204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22203-L22204)

```diff
-           return et.subtitle && (et.subtitle = (0, Jt.x)(et.subtitle, Jt.h.DEFAULT_SUBTITLE_FONT_SIZE)), et.backgroundColor = null !== (qt = et.backgroundColor) && void 0 !== qt ? qt : "#22283b", et.subtitleBackgroundColor = null !== (Dt = et.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(et.uZ, et.nameTagInfo, Vt, et.nameColour);
+           return IB.subtitle && (IB.subtitle = (0, dB.u)(IB.subtitle, dB.g.DEFAULT_SUBTITLE_FONT_SIZE)), IB.backgroundColor = null !== (JB = IB.backgroundColor) && void 0 !== JB ? JB : "#22283b", IB.subtitleBackgroundColor = null !== (oB = IB.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(IB.bR, IB.nameTagInfo, ZB, IB.nameColour);
```

#### 2474. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22207` → after: `L22323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22323) · [Before (L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22207)

```diff
-             const Vt = (0, Dt.h)(tt._planeTexture);
+             const ZB = (0, oB.g)(BB._planeTexture);
```

#### 2475. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22210-L22211` → after: `L22326-L22327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22326-L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22326-L22327) · [Before (L22210-L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22210-L22211)

```diff
-               const qt = null !== (Vt = null === (Ot = et.healthbar) || void 0 === Ot ? void 0 : Ot.display) && void 0 !== Vt ? Vt : "onDamage";
-               return "never" === qt ? null : "always" === qt ? null !== (Dt = tt.Lt) && void 0 !== Dt ? Dt : 1 : tt.healthTimeout ? tt.Lt : null;
+               const JB = null !== (ZB = null === (TB = IB.healthbar) || void 0 === TB ? void 0 : TB.display) && void 0 !== ZB ? ZB : "onDamage";
+               return "never" === JB ? null : "always" === JB ? null !== (oB = BB.jB) && void 0 !== oB ? oB : 1 : BB.healthTimeout ? BB.jB : null;
```

#### 2476. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22215-L22217` → after: `L22331-L22333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22331-L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22331-L22333) · [Before (L22215-L22217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22215-L22217)

```diff
-       }(0, Ct.d)((() => {
-         for (const tt of pt) Yt(tt.uZ) !== Bt.has(tt.uZ) && De(tt)
-       })), (0, ht.c)(tt.Bf.vI(), (() => {
+       }(0, CB.b)((() => {
+         for (const BB of bB) AB(BB.bR) !== tB.has(BB.bR) && JI(BB)
+       })), (0, wB.d)(BB.Ig.JR(), (() => {
```

#### 2477. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22231` → after: `L22347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22347) · [Before (L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22231)

```diff
-         const Ot = (0, ft.c)().getLifeformType(et);
+         const TB = (0, NB.d)().getLifeformType(IB);
```

#### 2478. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22233` → after: `L22349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22349) · [Before (L22233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22233)

```diff
-         return !!(null === (Vt = tt.mJ.ZVt(et)) || void 0 === Vt ? void 0 : Vt.nE)
+         return !!(null === (ZB = BB.zW.YZB(IB)) || void 0 === ZB ? void 0 : ZB.zN)
```

#### 2479. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22241` → after: `L22357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22357) · [Before (L22241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22241)

```diff
-             tt.yw("Error updating a nametag", et)
+             BB.wg("Error updating a nametag", IB)
```

#### 2480. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22253` → after: `L22369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22369) · [Before (L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22253)

```diff
-         return null !== (Vt = tt.lL !== et && (null === (Ot = tt.dL[tt.lL][et]) || void 0 === Ot ? void 0 : Ot.hasPriorityNametag)) && void 0 !== Vt && Vt
+         return null !== (ZB = BB.Jm !== IB && (null === (TB = BB.Tm[BB.Jm][IB]) || void 0 === TB ? void 0 : TB.hasPriorityNametag)) && void 0 !== ZB && ZB
```

#### 2481. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22264` → after: `L22380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22380) · [Before (L22264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22264)

```diff
-         if (qt === Dt && !vt.e.getTexture(Dt, Wt.k.ICON).notFound) {
+         if (JB === oB && !OB.e.getTexture(oB, YB.m.ICON).notFound) {
```

#### 2482. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22269` → after: `L22385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22385) · [Before (L22269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22269)

```diff
-             !mt || null !== (dt = (0, ft.c)().client) && void 0 !== dt && dt.isReplayMode() || (et = setTimeout((() => {
+             !GB || null !== (vB = (0, NB.d)().client) && void 0 !== vB && vB.isReplayMode() || (IB = setTimeout((() => {
```

#### 2483. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22282` → after: `L22398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22398) · [Before (L22282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22282)

```diff
-         Qe(et) && Vt > jt.d && (Ot = jt.d);
+         nI(IB) && ZB > kB.g && (TB = kB.g);
```

#### 2484. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22289` → after: `L22405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22405) · [Before (L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22289)

```diff
-         const Dt = tt.Bf.engine.getRenderWidth();
+         const oB = BB.Ig.engine.getRenderWidth();
```

#### 2485. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22296-L22304` → after: `L22412-L22420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22412-L22420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22412-L22420) · [Before (L22296-L22304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22296-L22304)

```diff
-         const Ot = tt.mJ.xet(et.uZ),
-           Dt = Qe(et.uZ),
-           Xt = (0, Jt.C)(et._planeMesh, tt.OJ.canSeeNametagsThroughWalls, null === Ot || void 0 === Ot ? void 0 : Ot.crouching, Dt),
-           Qt = tt.mJ.RY(et.planeEId).zB,
-           lt = tt.camera.oB(),
-           Et = qt().pm(Qt, lt),
-           ft = tt.mJ.oet(et.planeEId).offset,
-           wt = Vt ? (0, jt.v)(tt, et.uZ, et.planeEId, Xt) : 1;
-         if (Dt && Xt && Et > jt.d) {
+         const TB = BB.zW.uIB(IB.bR),
+           oB = nI(IB.bR),
+           nB = (0, dB.B)(IB._planeMesh, BB.vW.canSeeNametagsThroughWalls, null === TB || void 0 === TB ? void 0 : TB.crouching, oB),
+           hB = BB.zW.zK(IB.planeEId).qV,
+           zB = BB.camera.yV(),
+           FB = JB().uG(hB, zB),
+           NB = BB.zW.RIB(IB.planeEId).offset,
+           gB = ZB ? (0, kB.z)(BB, IB.bR, IB.planeEId, nB) : 1;
+         if (oB && nB && FB > kB.g) {
```

#### 2486. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22307` → after: `L22423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22423) · [Before (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22307)

```diff
-           const et = qt().scale(tt, tt, jt.d),
+           const IB = JB().scale(BB, BB, kB.g),
```

#### 2487. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22311-L22312` → after: `L22427-L22428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22427-L22428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22427-L22428) · [Before (L22311-L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22311-L22312)

```diff
-         Vt && (0, jt.k)(tt, et.planeEId);
-         const yt = (0, jt.r)(Et, Dt, Xt) * wt,
+         ZB && (0, kB.m)(BB, IB.planeEId);
+         const qB = (0, kB.t)(FB, oB, nB) * gB,
```

#### 2488. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22314` → after: `L22430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22430) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22314)

```diff
-         if (et._layoutHeight = Nt, tt.Bf.Rw && et._planeMesh.isEnabled() && et._planeMesh.isVisible) {
+         if (IB._layoutHeight = yB, BB.Ig.Xg && IB._planeMesh.isEnabled() && IB._planeMesh.isVisible) {
```

#### 2489. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22316` → after: `L22432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22432) · [Before (L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22316)

```diff
-           const Vt = (0, mt.e)(tt, et.uZ),
+           const ZB = (0, GB.e)(BB, IB.bR),
```

#### 2490. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22321` → after: `L22437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22437) · [Before (L22321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22321)

```diff
-             Xt = St.e.lerp(null !== (bt = Dt) && void 0 !== bt ? bt : de, je, jt);
+             nB = iB.e.lerp(null !== (WB = oB) && void 0 !== WB ? WB : GI, vI, kB);
```

#### 2491. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22323-L22324` → after: `L22439-L22440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22439-L22440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22439-L22440) · [Before (L22323-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22323-L22324)

```diff
-           const Qt = (0, Ht.applyHeldLightTint)(tt, et.uZ, Vt, Gt);
-           Gt[0] = Math.max(Qt[0], Dt), Gt[1] = Math.max(Qt[1], Dt), Gt[2] = Math.max(Qt[2], Dt), Gt[3] = Math.max(Qt[3], Dt), (0, dt.m)(et._lightState, Gt)
+           const hB = (0, cB.applyHeldLightTint)(BB, IB.bR, ZB, mB);
+           mB[0] = Math.max(hB[0], oB), mB[1] = Math.max(hB[1], oB), mB[2] = Math.max(hB[2], oB), mB[3] = Math.max(hB[3], oB), (0, vB.h)(IB._lightState, mB)
```

#### 2492. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22338` → after: `L22454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22454) · [Before (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22338)

```diff
-           Lt: null,
+           jB: null,
```

#### 2493. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22370-L22371` → after: `L22486-L22487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22486-L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22486-L22487) · [Before (L22370-L22371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22370-L22371)

```diff
-         qJ: function(et, Vt) {
-           Vt.effects = {}, pt.add(Vt), Vt._lightId = `nt_${et}`, Vt._visibilityCombinator = new Mt.b((et => {
+         cW: function(IB, ZB) {
+           ZB.effects = {}, bB.add(ZB), ZB._lightId = `nt_${IB}`, ZB._visibilityCombinator = new UB.d((IB => {
```

#### 2494. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22373` → after: `L22489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22489) · [Before (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22373)

```diff
-             const Ot = tt.mJ.aVt(Vt.uZ);
+             const TB = BB.zW.hZB(ZB.bR);
```

#### 2495. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22375` → after: `L22491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22491) · [Before (L22375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22375)

```diff
-           })), Vt.entityMeshScalingSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|meshScaling`, (tt => {
+           })), ZB.entityMeshScalingSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|meshScaling`, (BB => {
```

#### 2496. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22377` → after: `L22493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22493) · [Before (L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22377)

```diff
-           })), Vt.nameTagInfoSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|nameTagInfo`, (tt => {
+           })), ZB.nameTagInfoSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|nameTagInfo`, (BB => {
```

#### 2497. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22379` → after: `L22495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22495) · [Before (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22379)

```diff
-           })), Vt.priorityNametagSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|hasPriorityNametag`, (tt => {
+           })), ZB.priorityNametagSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|hasPriorityNametag`, (BB => {
```

#### 2498. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22381` → after: `L22497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22497) · [Before (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22381)

```diff
-           })), Vt.rankUpdateSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|ranks`, (tt => {
+           })), ZB.rankUpdateSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|ranks`, (BB => {
```

#### 2499. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22383` → after: `L22499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22499) · [Before (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22383)

```diff
-           })), Vt.hideNameSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|hideNameSeed`, (tt => {
+           })), ZB.hideNameSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|hideNameSeed`, (BB => {
```

#### 2500. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22385` → after: `L22501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22501) · [Before (L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22385)

```diff
-           })), Vt.nameChangedSub = Xt.j.subscribe(`entityNameChanged|${et}`, (() => {
+           })), ZB.nameChangedSub = nB.l.subscribe(`entityNameChanged|${IB}`, (() => {
```

#### 2501. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22387` → after: `L22503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22503) · [Before (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22387)

```diff
-           })), Vt.nameColourSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|nameColour`, (tt => {
+           })), ZB.nameColourSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|nameColour`, (BB => {
```

#### 2502. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22389` → after: `L22505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22505) · [Before (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22389)

```diff
-           })), Vt.effectInfoSub = Xt.j.subscribe("EffectUpdate", (tt => {
+           })), ZB.effectInfoSub = nB.l.subscribe("EffectUpdate", (BB => {
```

#### 2503. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22391-L22392` → after: `L22507-L22508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22507-L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22507-L22508) · [Before (L22391-L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22391-L22392)

```diff
-             (null === (Ot = tt.showInNametag) || void 0 === Ot || Ot) && (0, yt.c)(tt.Ft) === et && le(Vt, tt)
-           })), Vt.removeEffectSub = Xt.j.subscribe("RemoveEffect", (tt => {
+             (null === (TB = BB.showInNametag) || void 0 === TB || TB) && (0, qB.e)(BB.PB) === IB && hI(ZB, BB)
+           })), ZB.removeEffectSub = nB.l.subscribe("RemoveEffect", (BB => {
```

#### 2504. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22394-L22395` → after: `L22510-L22511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22510-L22511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22510-L22511) · [Before (L22394-L22395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22394-L22395)

```diff
-             (0, yt.c)(tt.Ft) === et && (clearTimeout(null === (Ot = Vt.effects[tt.name]) || void 0 === Ot ? void 0 : Ot.timeout), delete Vt.effects[tt.name], De(Vt))
-           })), Vt.leaveGameSub = Xt.j.subscribe("leaveGame", (() => {
+             (0, qB.e)(BB.PB) === IB && (clearTimeout(null === (TB = ZB.effects[BB.name]) || void 0 === TB ? void 0 : TB.timeout), delete ZB.effects[BB.name], JI(ZB))
+           })), ZB.leaveGameSub = nB.l.subscribe("leaveGame", (() => {
```

#### 2505. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22398` → after: `L22514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22514) · [Before (L22398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22398)

```diff
-           })), Vt.lifeformHurtSub = Xt.j.subscribe("lifeformHurt", (tt => {
+           })), ZB.lifeformHurtSub = nB.l.subscribe("lifeformHurt", (BB => {
```

#### 2506. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22401` → after: `L22517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22517) · [Before (L22401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22401)

```diff
-               Lt: qt
+               jB: JB
```

#### 2507. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22403` → after: `L22519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22519) · [Before (L22403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22403)

```diff
-             (0, yt.c)(Ot) === et && (clearTimeout(Vt.healthTimeout), Vt.healthTimeout = setTimeout((() => {
+             (0, qB.e)(TB) === IB && (clearTimeout(ZB.healthTimeout), ZB.healthTimeout = setTimeout((() => {
```

#### 2508. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22405-L22406` → after: `L22521-L22522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22521-L22522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22521-L22522) · [Before (L22405-L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22405-L22406)

```diff
-             }), 2e3), Vt.Lt = qt, De(Vt))
-           })), Vt.lifeformHealthChangedSub = Xt.j.subscribe("lifeformHealthChanged", (Ot => {
+             }), 2e3), ZB.jB = JB, JI(ZB))
+           })), ZB.lifeformHealthChangedSub = nB.l.subscribe("lifeformHealthChanged", (TB => {
```

#### 2509. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22409-L22410` → after: `L22525-L22526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22525-L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22525-L22526) · [Before (L22409-L22410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22409-L22410)

```diff
-               Fe: Dt,
-               ke: mt
+               OI: oB,
+               YI: GB
```

#### 2510. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22412` → after: `L22528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22528) · [Before (L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22412)

```diff
-             if ((0, yt.c)(qt) !== et || null === mt) return;
+             if ((0, qB.e)(JB) !== IB || null === GB) return;
```

#### 2511. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22415-L22416` → after: `L22531-L22532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22531-L22532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22531-L22532) · [Before (L22415-L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22415-L22416)

```diff
-             }), 2e3)), Vt.Lt = mt, tt.bloxd.client.gameRecorder.recordLifeformHealth(qt, Dt, mt), De(Vt)
-           })), Vt.hideNametagSub = Xt.j.subscribe("appManagerUpdated|areNametagsHidden", (tt => {
+             }), 2e3)), ZB.jB = GB, BB.bloxd.client.gameRecorder.recordLifeformHealth(JB, oB, GB), JI(ZB)
+           })), ZB.hideNametagSub = nB.l.subscribe("appManagerUpdated|areNametagsHidden", (BB => {
```

#### 2512. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22419` → after: `L22535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22535) · [Before (L22419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22419)

```diff
-           Vt.unsubscribeKeyPromptChanges = (0, Qt.n)((() => {
+           ZB.unsubscribeKeyPromptChanges = (0, hB.r)((() => {
```

#### 2513. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22421-L22424` → after: `L22537-L22540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22537-L22540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22537-L22540) · [Before (L22421-L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22421-L22424)

```diff
-             (null !== (tt = Vt.nameTagInfo) && void 0 !== tt && null !== (et = tt.content) && void 0 !== et && et.some(lt.ib) || null !== (Ot = Vt.nameTagInfo) && void 0 !== Ot && null !== (qt = Ot.subtitle) && void 0 !== qt && qt.some(lt.ib)) && De(Vt)
-           })), Vt._visibilityCombinator.setBooleanType("nametagEnabled", !ct.b.get("areNametagsHidden"));
-           const Ot = (0, It.e)(tt);
-           Vt.Lt = Ot.getHealthFrac(et);
+             (null !== (BB = ZB.nameTagInfo) && void 0 !== BB && null !== (IB = BB.content) && void 0 !== IB && IB.some(zB.Bb) || null !== (TB = ZB.nameTagInfo) && void 0 !== TB && null !== (JB = TB.subtitle) && void 0 !== JB && JB.some(zB.Bb)) && JI(ZB)
+           })), ZB._visibilityCombinator.setBooleanType("nametagEnabled", !pB.d.get("areNametagsHidden"));
+           const TB = (0, HB.c)(BB);
+           ZB.jB = TB.getHealthFrac(IB);
```

#### 2514. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22434` → after: `L22550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22550) · [Before (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22434)

```diff
-           tt.lL in tt.dL && et in tt.dL[tt.lL] && ("nameTagInfo" in tt.dL[tt.lL][et] && (Vt.nameTagInfo = tt.dL[tt.lL][et].nameTagInfo), "nameColour" in tt.dL[tt.lL][et] && (Vt.nameColour = tt.dL[tt.lL][et].nameColour)), De(Vt)
+           BB.Jm in BB.Tm && IB in BB.Tm[BB.Jm] && ("nameTagInfo" in BB.Tm[BB.Jm][IB] && (ZB.nameTagInfo = BB.Tm[BB.Jm][IB].nameTagInfo), "nameColour" in BB.Tm[BB.Jm][IB] && (ZB.nameColour = BB.Tm[BB.Jm][IB].nameColour)), JI(ZB)
```

#### 2515. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22439` → after: `L22555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22555) · [Before (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22439)

```diff
-             const tt = me(Vt.uZ);
+             const BB = oI(ZB.bR);
```

#### 2516. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22445` → after: `L22561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22561) · [Before (L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22445)

```diff
-             Qe(Vt.uZ) && it(Vt) && De(Vt)
+             nI(ZB.bR) && lB(ZB) && JI(ZB)
```

#### 2517. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22448` → after: `L22564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22564) · [Before (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22448)

```diff
-         dJ: function(tt, et) {
+         FW: function(BB, IB) {
```

#### 2518. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22451` → after: `L22567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22567) · [Before (L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22451)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2519. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22453` → after: `L22569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22569) · [Before (L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22453)

```diff
-           gt(et), pt.delete(et), Bt.delete(et.uZ), Xt.j.unsubscribe(et.entityMeshScalingSub), Xt.j.unsubscribe(et.nameTagInfoSub), Xt.j.unsubscribe(et.priorityNametagSub), Xt.j.unsubscribe(et.rankUpdateSub), Xt.j.unsubscribe(et.hideNameSub), Xt.j.unsubscribe(et.nameChangedSub), X … [truncated]
+           DB(IB), bB.delete(IB), tB.delete(IB.bR), nB.l.unsubscribe(IB.entityMeshScalingSub), nB.l.unsubscribe(IB.nameTagInfoSub), nB.l.unsubscribe(IB.priorityNametagSub), nB.l.unsubscribe(IB.rankUpdateSub), nB.l.unsubscribe(IB.hideNameSub), nB.l.unsubscribe(IB.nameChangedSub), n … [truncated]
```

#### 2520. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22464` → after: `L22580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22580) · [Before (L22464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22464)

```diff
-   39085: (tt, et, Vt) => {
+   38943: (BB, IB, ZB) => {
```

#### 2521. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22468-L22471` → after: `L22584-L22587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22584-L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22584-L22587) · [Before (L22468-L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22468-L22471)

```diff
-     var Ot = Vt(38157),
-       qt = Vt(37875),
-       Dt = Vt(37699),
-       mt = Vt(404),
+     var TB = ZB(37956),
+       JB = ZB(37671),
+       oB = ZB(37504),
+       GB = ZB(364),
```

#### 2522. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22473-L22475` → after: `L22589-L22591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22589-L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22589-L22591) · [Before (L22473-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22473-L22475)

```diff
-       jt = Vt(37891),
-       Ht = Vt(37531);
-     const Xt = Vt(39091).d,
+       kB = ZB(37685),
+       cB = ZB(37328);
+     const nB = ZB(38948).d,
```

#### 2523. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22480-L22481` → after: `L22596-L22597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22596-L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22596-L22597) · [Before (L22480-L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22480-L22481)

```diff
-       const et = tt.Bf.vI(),
-         Vt = (0, Ot.q)(tt.Bf, "phBox", (0, qt.c)({
+       const IB = BB.Ig.JR(),
+         ZB = (0, TB.n)(BB.Ig, "phBox", (0, JB.b)({
```

#### 2524. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22488` → after: `L22604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22604) · [Before (L22488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22488)

```diff
-         Fw: et,
+         lg: IB,
```

#### 2525. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22496` → after: `L22612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22612) · [Before (L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22496)

```diff
-       }).mirror, Vt.visibility = .5, Vt.Av(!1);
+       }).mirror, ZB.visibility = .5, ZB.qY(!1);
```

#### 2526. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22506` → after: `L22622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22622) · [Before (L22506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22506)

```diff
-         qJ: function(et, Ot) {
+         cW: function(IB, TB) {
```

#### 2527. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22508` → after: `L22624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22624) · [Before (L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22508)

```diff
-           Ot.instance = Vt.createInstance(`mesh overlay ${et}`), tt.Bf.ow(Ot.instance, !1, null), Ot.lastFlash = Date.now(), null === (qt = tt.mJ.aVt(et)) || void 0 === qt || qt.meshEnabledCombinator.forceUpdate()
+           TB.instance = ZB.createInstance(`mesh overlay ${IB}`), BB.Ig.xg(TB.instance, !1, null), TB.lastFlash = Date.now(), null === (JB = BB.zW.hZB(IB)) || void 0 === JB || JB.meshEnabledCombinator.forceUpdate()
```

#### 2528. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22510` → after: `L22626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22626) · [Before (L22510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22510)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2529. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22513` → after: `L22629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22629) · [Before (L22513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22513)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2530. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22516-L22517` → after: `L22632-L22633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22632-L22633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22632-L22633) · [Before (L22516-L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22516-L22517)

```diff
-             const et = (0, jt.getCaughtUpMeshRotation)(tt, mt.uZ).renderRotation,
-               Vt = tt.mJ.RY(mt.uZ).zB;
+             const IB = (0, kB.getCaughtUpMeshRotation)(BB, GB.bR).renderRotation,
+               ZB = BB.zW.zK(GB.bR).qV;
```

#### 2531. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22519` → after: `L22635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22635) · [Before (L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22519)

```diff
-             if (dt().set(ft, Vt[0], Vt[1] + Xt.playerHitboxHeights.head / 2, Vt[2] + .1), dt().gd(ft, ft, Vt, et[2]), dt().sq(ft, ft, Vt, et[0]), dt().tm(ft, ft, Vt, et[1]), (0, Dt.s)(mt.instance, ft[0], ft[1], ft[2]), mt.instance.rotation.set(et[0], et[1], et[2]), Ot > mt.lastFl … [truncated]
+             if (vB().set(NB, ZB[0], ZB[1] + nB.playerHitboxHeights.head / 2, ZB[2] + .1), vB().pk(NB, NB, ZB, IB[2]), vB().uv(NB, NB, ZB, IB[0]), vB().ck(NB, NB, ZB, IB[1]), (0, oB.q)(GB.instance, NB[0], NB[1], NB[2]), GB.instance.rotation.set(IB[0], IB[1], IB[2]), TB > GB.lastFl … [truncated]
```

#### 2532. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22526` → after: `L22642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22642) · [Before (L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22526)

```diff
-   39098: (tt, et, Vt) => {
+   38955: (BB, IB, ZB) => {
```

#### 2533. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22530-L22531` → after: `L22646-L22647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22646-L22647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22646-L22647) · [Before (L22530-L22531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22530-L22531)

```diff
-     var Ot = Vt(736),
-       qt = Vt(37699);
+     var TB = ZB(694),
+       JB = ZB(37504);
```

#### 2534. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22542` → after: `L22658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22658) · [Before (L22542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22542)

```diff
-           AV: null,
+           jZ: null,
```

#### 2535. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22546` → after: `L22662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22662) · [Before (L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22546)

```diff
-         qJ: function(tt, et) {
+         cW: function(BB, IB) {
```

#### 2536. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22549` → after: `L22665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22665) · [Before (L22549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22549)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2537. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22552` → after: `L22668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22668) · [Before (L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22552)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2538. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22558` → after: `L22674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22674) · [Before (L22558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22558)

```diff
-             const et = null === Ot.AV ? 0 : Xt(tt, tt.mJ.RY(Ot.uZ).OOt, Ot.AV);
+             const IB = null === TB.jZ ? 0 : nB(BB, BB.zW.zK(TB.bR).KZB, TB.jZ);
```

#### 2539. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22560` → after: `L22676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22676) · [Before (L22560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22560)

```diff
-               for (let Vt = 0; Vt < Dt; Vt++) Ot.meshes.push(lt(tt, Ot.uZ));
+               for (let ZB = 0; ZB < oB; ZB++) TB.meshes.push(zB(BB, TB.bR));
```

#### 2540. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22563` → after: `L22679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22679) · [Before (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22563)

```diff
-               qt && Et(tt, Ot, Vt, mt[Vt], Ot.AV, dt[Vt]), Ot._shown[Vt] !== qt && (Ot._shown[Vt] = qt, Ot.meshes[Vt].Av(qt))
+               JB && FB(BB, TB, ZB, GB[ZB], TB.jZ, vB[ZB]), TB._shown[ZB] !== JB && (TB._shown[ZB] = JB, TB.meshes[ZB].qY(JB))
```

#### 2541. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22576` → after: `L22692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22692) · [Before (L22576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22576)

```diff
-       const Ot = tt.bl;
+       const TB = BB.Mz;
```

#### 2542. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22581` → after: `L22697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22697) · [Before (L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22581)

```diff
-         Qt(Dt, et, Ot, jt, Ht) || tt.sQ.HA(jt, Vt, Ht) || (mt[qt] = jt, dt[qt] = Ht, qt++)
+         hB(oB, IB, TB, kB, cB) || BB.vz.qD(kB, ZB, cB) || (GB[JB] = kB, vB[JB] = cB, JB++)
```

#### 2543. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22593-L22594` → after: `L22709-L22710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22709-L22710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22709-L22710) · [Before (L22593-L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22593-L22594)

```diff
-       const Vt = tt.Bf.qOt.createInstance(`floatingMesh_${et}_${(0,Ot.b)()}`);
-       return tt.Bf.ow(Vt), Vt.Av(!1), Vt
+       const ZB = BB.Ig.VZB.createInstance(`floatingMesh_${IB}_${(0,TB.d)()}`);
+       return BB.Ig.xg(ZB), ZB.qY(!1), ZB
```

#### 2544. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22598` → after: `L22714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22714) · [Before (L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22598)

```diff
-       const dt = tt.bl,
+       const vB = BB.Mz,
```

#### 2545. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22603` → after: `L22719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22719) · [Before (L22603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22603)

```diff
-       Qt[3 * Vt] === jt && Qt[3 * Vt + 1] === Ht && Qt[3 * Vt + 2] === Xt || (Qt[3 * Vt] = jt, Qt[3 * Vt + 1] = Ht, Qt[3 * Vt + 2] = Xt, (0, qt.s)(et.meshes[Vt], jt, Ht, Xt))
+       hB[3 * ZB] === kB && hB[3 * ZB + 1] === cB && hB[3 * ZB + 2] === nB || (hB[3 * ZB] = kB, hB[3 * ZB + 1] = cB, hB[3 * ZB + 2] = nB, (0, JB.q)(IB.meshes[ZB], kB, cB, nB))
```

#### 2546. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22606` → after: `L22722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22722) · [Before (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22606)

```diff
-   39102: (tt, et, Vt) => {
+   38961: (BB, IB, ZB) => {
```

#### 2547. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22610-L22612` → after: `L22726-L22728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22726-L22728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22726-L22728) · [Before (L22610-L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22610-L22612)

```diff
-     var Ot = Vt(2043),
-       qt = Vt(3751),
-       Dt = Vt(37654);
+     var TB = ZB(2029),
+       JB = ZB(3854),
+       oB = ZB(37454);
```

#### 2548. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22631-L22632` → after: `L22747-L22748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22747-L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22747-L22748) · [Before (L22631-L22632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22631-L22632)

```diff
-         qJ: function(et, Vt) {
-           const jt = [Ot.b.subscribe("forcedCameraDirection", (et => {
+         cW: function(IB, ZB) {
+           const kB = [TB.c.subscribe("forcedCameraDirection", (IB => {
```

#### 2549. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22634-L22635` → after: `L22750-L22751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22750-L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22750-L22751) · [Before (L22634-L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22634-L22635)

```diff
-               if (tt.OJ.forcedCameraDirectionTransitionMs <= 0 || null === et) {
-                 if (null === et) tt.camera.jB = null, tt.camera.XB = null;
+               if (BB.vW.forcedCameraDirectionTransitionMs <= 0 || null === IB) {
+                 if (null === IB) BB.camera.VK = null, BB.camera.JV = null;
```

#### 2550. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22638-L22641` → after: `L22754-L22757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22754-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22754-L22757) · [Before (L22638-L22641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22638-L22641)

```diff
-                     nX: Vt,
-                     RVt: Ot
-                   } = (0, Dt.d)(et);
-                   tt.camera.jB = Ot, tt.camera.XB = Vt
+                     rc: ZB,
+                     sZB: TB
+                   } = (0, oB.c)(IB);
+                   BB.camera.VK = TB, BB.camera.JV = ZB
```

#### 2551. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22651-L22653` → after: `L22767-L22769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22767-L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22767-L22769) · [Before (L22651-L22653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22651-L22653)

```diff
-                 nX: qt,
-                 RVt: mt
-               } = (0, Dt.d)(et);
+                 rc: JB,
+                 sZB: GB
+               } = (0, oB.c)(IB);
```

#### 2552. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22659` → after: `L22775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22775) · [Before (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22659)

```diff
-               Vt.directionTransitionStart = dt, Vt.directionTransitionEnd = dt + tt.OJ.forcedCameraDirectionTransitionMs, tt.camera.jB = Ot.pitch, tt.camera.XB = Ot.heading
+               ZB.directionTransitionStart = vB, ZB.directionTransitionEnd = vB + BB.vW.forcedCameraDirectionTransitionMs, BB.camera.VK = TB.pitch, BB.camera.JV = TB.heading
```

#### 2553. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22661` → after: `L22777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22777) · [Before (L22661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22661)

```diff
-           })), Ot.b.subscribe("cameraRoll", (et => {
+           })), TB.c.subscribe("cameraRoll", (IB => {
```

#### 2554. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22663-L22664` → after: `L22779-L22780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22779-L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22779-L22780) · [Before (L22663-L22664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22663-L22664)

```diff
-               if (tt.OJ.cameraRollTransitionMs <= 0) return tt.camera.nf = et, Vt.rollTransitionFrom = null, Vt.rollTransitionTo = null, Vt.rollTransitionStart = null, void(Vt.rollTransitionEnd = null);
-               Vt.rollTransitionFrom = tt.camera.nf, Vt.rollTransitionTo = et;
+               if (BB.vW.cameraRollTransitionMs <= 0) return BB.camera.Iq = IB, ZB.rollTransitionFrom = null, ZB.rollTransitionTo = null, ZB.rollTransitionStart = null, void(ZB.rollTransitionEnd = null);
+               ZB.rollTransitionFrom = BB.camera.Iq, ZB.rollTransitionTo = IB;
```

#### 2555. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22666` → after: `L22782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22782) · [Before (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22666)

```diff
-               Vt.rollTransitionStart = Ot, Vt.rollTransitionEnd = Ot + tt.OJ.cameraRollTransitionMs
+               ZB.rollTransitionStart = TB, ZB.rollTransitionEnd = TB + BB.vW.cameraRollTransitionMs
```

#### 2556. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22668` → after: `L22784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22784) · [Before (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22668)

```diff
-           })), Ot.b.subscribe("forcedCameraDirectionTransitionMs", (tt => {
+           })), TB.c.subscribe("forcedCameraDirectionTransitionMs", (BB => {
```

#### 2557. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22675` → after: `L22791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22791) · [Before (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22675)

```diff
-           })), Ot.b.subscribe("cameraRollTransitionMs", (tt => {
+           })), TB.c.subscribe("cameraRollTransitionMs", (BB => {
```

#### 2558. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22682` → after: `L22798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22798) · [Before (L22682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22682)

```diff
-           })), Ot.b.subscribe("cameraRotationOffset", (tt => {
+           })), TB.c.subscribe("cameraRotationOffset", (BB => {
```

#### 2559. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22684` → after: `L22800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22800) · [Before (L22684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22684)

```diff
-           })), Ot.b.subscribe("cameraPositionOffset", (tt => {
+           })), TB.c.subscribe("cameraPositionOffset", (BB => {
```

#### 2560. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22697-L22698` → after: `L22813-L22814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22813-L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22813-L22814) · [Before (L22697-L22698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22697-L22698)

```diff
-           }, Ht(tt.OJ.cameraRotationOffset), Xt(tt.OJ.cameraPositionOffset), (0, qt.onGameReset)((() => {
-             tt.camera.jB = null, tt.camera.XB = null, tt.camera.nf = 0, Ht(mt), Xt(dt), Vt.directionTransitionFrom = null, Vt.directionTransitionTo = null, Vt.directionTransitionStart = null, Vt.directionTransitionEnd = null, Vt.rollTransitionFrom = null, Vt.rollTransitionTo = nu … [truncated]
+           }, cB(BB.vW.cameraRotationOffset), nB(BB.vW.cameraPositionOffset), (0, JB.onGameReset)((() => {
+             BB.camera.VK = null, BB.camera.JV = null, BB.camera.Iq = 0, cB(GB), nB(vB), ZB.directionTransitionFrom = null, ZB.directionTransitionTo = null, ZB.directionTransitionStart = null, ZB.directionTransitionEnd = null, ZB.rollTransitionFrom = null, ZB.rollTransitionTo = nu … [truncated]
```

#### 2561. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22701` → after: `L22817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22817) · [Before (L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22701)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2562. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22704` → after: `L22820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22820) · [Before (L22704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22704)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2563. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22713` → after: `L22829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22829) · [Before (L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22713)

```diff
-             Dt >= 1 ? (tt.camera.jB = Vt.pitch, tt.camera.XB = Xt(Vt.heading), Ot.directionTransitionFrom = null, Ot.directionTransitionTo = null, Ot.directionTransitionStart = null, Ot.directionTransitionEnd = null) : (tt.camera.jB = et.pitch + (Vt.pitch - et.pitch) * mt, tt.cam … [truncated]
+             oB >= 1 ? (BB.camera.VK = ZB.pitch, BB.camera.JV = nB(ZB.heading), TB.directionTransitionFrom = null, TB.directionTransitionTo = null, TB.directionTransitionStart = null, TB.directionTransitionEnd = null) : (BB.camera.VK = IB.pitch + (ZB.pitch - IB.pitch) * GB, BB.cam … [truncated]
```

#### 2564. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22718` → after: `L22834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22834) · [Before (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22718)

```diff
-             et >= 1 ? (tt.camera.nf = Ot.rollTransitionTo, Ot.rollTransitionFrom = null, Ot.rollTransitionTo = null, Ot.rollTransitionStart = null, Ot.rollTransitionEnd = null) : tt.camera.nf = Ot.rollTransitionFrom + (Ot.rollTransitionTo - Ot.rollTransitionFrom) * Vt
+             IB >= 1 ? (BB.camera.Iq = TB.rollTransitionTo, TB.rollTransitionFrom = null, TB.rollTransitionTo = null, TB.rollTransitionStart = null, TB.rollTransitionEnd = null) : BB.camera.Iq = TB.rollTransitionFrom + (TB.rollTransitionTo - TB.rollTransitionFrom) * ZB
```

#### 2565. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22725` → after: `L22841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22841) · [Before (L22725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22725)

```diff
-       return tt < .5 ? 4 * tt * tt * tt : 1 - Math.pow(-2 * tt + 2, 3) / 2
+       return BB < .5 ? 4 * BB * BB * BB : 1 - Math.pow(-2 * BB + 2, 3) / 2
```

#### 2566. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22737` → after: `L22853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22853) · [Before (L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22737)

```diff
-       return qt > Math.PI ? qt -= Vt : qt < -Math.PI && (qt += Vt), tt + qt
+       return JB > Math.PI ? JB -= ZB : JB < -Math.PI && (JB += ZB), BB + JB
```

#### 2567. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22744` → after: `L22860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22860) · [Before (L22744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22744)

```diff
-       }(tt) ? tt : Vt;
+       }(BB) ? BB : ZB;
```

#### 2568. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22748` → after: `L22864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22864) · [Before (L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22748)

```diff
-   38992: (tt, et, Vt) => {
+   38827: (BB, IB, ZB) => {
```

#### 2569. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22754-L22755` → after: `L22870-L22871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22870-L22871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22870-L22871) · [Before (L22754-L22755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22754-L22755)

```diff
-     var Ot = Vt(37323),
-       qt = Vt(38316);
+     var TB = ZB(37108),
+       JB = ZB(38136);
```

#### 2570. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22758` → after: `L22874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22874) · [Before (L22758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22758)

```diff
-         this.RP = null, this.DOt = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.uZ = void 0
+         this.gR = null, this.SZB = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.bR = void 0
```

#### 2571. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22767-L22768` → after: `L22883-L22884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22883-L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22883-L22884) · [Before (L22767-L22768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22767-L22768)

```diff
-         dJ: function(et, Vt) {
-           for (const qt of Vt) qt.DOt.mOt && ((0, Ot.pausesOutOfView)(tt, qt.uZ, qt.RP) ? qt._posePaused = !0 : jt(tt, qt))
+         FW: function(IB, ZB) {
+           for (const JB of ZB) JB.SZB.BTB && ((0, TB.pausesOutOfView)(BB, JB.bR, JB.gR) ? JB._posePaused = !0 : kB(BB, JB))
```

#### 2572. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22774` → after: `L22890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22890) · [Before (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22774)

```diff
-       const Vt = tt.mJ.uVt(et);
+       const ZB = BB.zW.qZB(IB);
```

#### 2573. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22780` → after: `L22896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22896) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22780)

```diff
-       const Vt = et.uZ;
+       const ZB = IB.bR;
```

#### 2574. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22784` → after: `L22900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22900) · [Before (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22784)

```diff
-       } = tt.mJ.getState(Vt, "updateWalkingState");
+       } = BB.zW.getState(ZB, "updateWalkingState");
```

#### 2575. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22787` → after: `L22903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22903) · [Before (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22787)

```diff
-       const Dt = tt.mJ.getState(Vt, "animator");
+       const oB = BB.zW.getState(ZB, "animator");
```

#### 2576. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22791` → after: `L22907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22907) · [Before (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22791)

```diff
-   39107: (tt, et, Vt) => {
+   38969: (BB, IB, ZB) => {
```

#### 2577. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22795-L22799` → after: `L22911-L22915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22911-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22911-L22915) · [Before (L22795-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22795-L22799)

```diff
-     var Ot = Vt(37032),
-       qt = Vt(31),
-       Dt = Vt(38406),
-       mt = Vt(37480),
-       dt = Vt(38356);
+     var TB = ZB(36829),
+       JB = ZB(24),
+       oB = ZB(38227),
+       GB = ZB(37270),
+       vB = ZB(38166);
```

#### 2578. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22815` → after: `L22931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22931) · [Before (L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22815)

```diff
-         qJ: function(et, Vt) {
+         cW: function(IB, ZB) {
```

#### 2579. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22817-L22819` → after: `L22933-L22935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22933-L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22933-L22935) · [Before (L22817-L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22817-L22819)

```diff
-           Vt.isAlive = (0, dt.b)("_isAlive", null === (Ht = tt.dL[tt.lL]) || void 0 === Ht || null === (Xt = Ht[Vt.uZ]) || void 0 === Xt ? void 0 : Xt._isAlive), Vt._isAliveSub = qt.j.subscribe(`otherEntitySettingsClientifiedEId|${Vt.uZ}|_isAlive`, (tt => {
-             Vt.isAlive = (0, dt.b)("_isAlive", tt), (0, Dt.updateLocalPlayerHeldItem)()
-           })), Vt.addedTime = Date.now(), Vt._hasPriorityNametagSub = qt.j.subscribe(`otherEntitySettingsClientifiedEId|${Vt.uZ}|hasPriorityNametag`, (tt => {
+           ZB.isAlive = (0, vB.c)("_isAlive", null === (cB = BB.Tm[BB.Jm]) || void 0 === cB || null === (nB = cB[ZB.bR]) || void 0 === nB ? void 0 : nB._isAlive), ZB._isAliveSub = JB.l.subscribe(`otherEntitySettingsClientifiedEId|${ZB.bR}|_isAlive`, (BB => {
+             ZB.isAlive = (0, vB.c)("_isAlive", BB), (0, oB.updateLocalPlayerHeldItem)()
+           })), ZB.addedTime = Date.now(), ZB._hasPriorityNametagSub = JB.l.subscribe(`otherEntitySettingsClientifiedEId|${ZB.bR}|hasPriorityNametag`, (BB => {
```

#### 2580. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22823` → after: `L22939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22939) · [Before (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22823)

```diff
-             mJ: Qt
+             zW: hB
```

#### 2581. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22825` → after: `L22941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22941) · [Before (L22825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22825)

```diff
-           Vt.meshEnabledCombinator = new Ot.b(((Ot, Dt) => {
+           ZB.meshEnabledCombinator = new TB.d(((TB, oB) => {
```

#### 2582. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22829` → after: `L22945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22945) · [Before (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22829)

```diff
-               Xt = Qt.JVt(et),
+               nB = hB.NZB(IB),
```

#### 2583. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22835` → after: `L22951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22951) · [Before (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22835)

```diff
-               if (null !== (ft = null === (wt = tt.dL[tt.lL][Vt.uZ]) || void 0 === wt ? void 0 : wt.hasPriorityNametag) && void 0 !== ft && ft)
+               if (null !== (NB = null === (gB = BB.Tm[BB.Jm][ZB.bR]) || void 0 === gB ? void 0 : gB.hasPriorityNametag) && void 0 !== NB && NB)
```

#### 2584. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22842-L22844` → after: `L22958-L22960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22958-L22960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22958-L22960) · [Before (L22842-L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22842-L22844)

```diff
-             yt && (yt.forceSetEnabled = !!Ht && null, yt.instance.Av(null !== (Nt = yt.forceSetEnabled) && void 0 !== Nt ? Nt : yt.isEnabled));
-             Vt.uZ !== tt.lL && (Ot ? Qt.ptt(et, "collideTerrain") || Qt.RZ(et, "collideTerrain") : Qt.ptt(et, "collideTerrain") && Qt.ZZ(et, "collideTerrain")), et === tt.lL && qt.j.sw("clientPlayerModelVisible", Ht)
-           })), Qt.getState(et, Qt.names.BE).enabledCombinator = new Ot.b
+             qB && (qB.forceSetEnabled = !!cB && null, qB.instance.qY(null !== (yB = qB.forceSetEnabled) && void 0 !== yB ? yB : qB.isEnabled));
+             ZB.bR !== BB.Jm && (TB ? hB.TIB(IB, "collideTerrain") || hB.xR(IB, "collideTerrain") : hB.TIB(IB, "collideTerrain") && hB.Qr(IB, "collideTerrain")), IB === BB.Jm && JB.l.Gq("clientPlayerModelVisible", cB)
+           })), hB.getState(IB, hB.names.GN).enabledCombinator = new TB.d
```

#### 2585. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22846-L22847` → after: `L22962-L22963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22962-L22963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22962-L22963) · [Before (L22846-L22847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22846-L22847)

```diff
-         nS: function(tt, et) {
-           qt.j.unsubscribe(et._isAliveSub), qt.j.unsubscribe(et._hasPriorityNametagSub)
+         nH: function(BB, IB) {
+           JB.l.unsubscribe(IB._isAliveSub), JB.l.unsubscribe(IB._hasPriorityNametagSub)
```

#### 2586. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22852` → after: `L22968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22968) · [Before (L22852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22852)

```diff
-   39112: (tt, et, Vt) => {
+   38972: (BB, IB, ZB) => {
```

#### 2587. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22856-L22857` → after: `L22972-L22973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22972-L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22972-L22973) · [Before (L22856-L22857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22856-L22857)

```diff
-     var Ot = Vt(38054),
-       qt = Vt(38285);
+     var TB = ZB(37853),
+       JB = ZB(38099);
```

#### 2588. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22870` → after: `L22986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22986) · [Before (L22870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22870)

```diff
-           qt.e.dropExpired(Date.now())
+           JB.c.dropExpired(Date.now())
```

#### 2589. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22872` → after: `L22988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22988) · [Before (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22872)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2590. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22875` → after: `L22991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22991) · [Before (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22875)

```diff
-             const et = tt.mJ.oet(Dt.uZ);
+             const IB = BB.zW.RIB(oB.bR);
```

#### 2591. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22877-L22878` → after: `L22993-L22994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22993-L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L22993-L22994) · [Before (L22877-L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22877-L22878)

```diff
-             const Vt = (0, Ot.h)(Dt.startedAtMs, Dt.endsAtMs, qt);
-             et.mesh.cj.set(Vt, Vt, Vt), et.offset[1] = Dt.centreOffsetY + Dt.halfHeight * (Vt - Ot.l)
+             const ZB = (0, TB.g)(oB.startedAtMs, oB.endsAtMs, JB);
+             IB.mesh.ek.set(ZB, ZB, ZB), IB.offset[1] = oB.centreOffsetY + oB.halfHeight * (ZB - TB.k)
```

#### 2592. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22884` → after: `L23000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23000) · [Before (L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22884)

```diff
-   39117: (tt, et, Vt) => {
+   38980: (BB, IB, ZB) => {
```

#### 2593. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22889-L22890` → after: `L23005-L23006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23005-L23006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23005-L23006) · [Before (L22889-L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22889-L22890)

```diff
-     var Ot = Vt(229),
-       qt = Vt(404),
+     var TB = ZB(201),
+       JB = ZB(364),
```

#### 2594. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22892-L22894` → after: `L23008-L23010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23008-L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23008-L23010) · [Before (L22892-L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22892-L22894)

```diff
-       mt = Vt(37032),
-       dt = Vt(2848),
-       jt = Vt(37314);
+       GB = ZB(36829),
+       vB = ZB(2912),
+       kB = ZB(37101);
```

#### 2595. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22898` → after: `L23014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23014) · [Before (L22898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22898)

```diff
-       lt = Ot.e.ff,
+       zB = TB.f.YN,
```

#### 2596. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22914` → after: `L23030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23030) · [Before (L22914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22914)

```diff
-       let Ct = new Float64Array(2 * Ot.e.maxNumVisibleEntitiesOfSingleType);
+       let CB = new Float64Array(2 * TB.f.maxNumVisibleEntitiesOfSingleType);
```

#### 2597. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22921` → after: `L23037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23037) · [Before (L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22921)

```diff
-         const Ot = `${tt}|${et}|${Vt}`,
+         const TB = `${BB}|${IB}|${ZB}`,
```

#### 2598. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22939` → after: `L23055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23055) · [Before (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22939)

```diff
-           mj: null,
+           Ev: null,
```

#### 2599. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22949-L22952` → after: `L23065-L23068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23065-L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23065-L23068) · [Before (L22949-L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22949-L22952)

```diff
-         qJ: function(Vt, Ot) {
-           if (!Ot.addMeshComponent || !Ot.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${Ot.addMeshComponent} ${Ot.removeMeshComponent}`);
-           if (Ot._lastPos = Dt().create(), Dt().copy(Ot._lastPos, tt.mJ.YM(Vt)), null !== Ot.movingHideDist && qt.add(Ot), 0 === et.size && (Dt().set(Kt, 1 / 0, 1 / 0, 1 / 0), Dt().copy(ut, Kt)), Pt(Ot), It(Ot, Ot._competesForCap), Ot.immediatelyUpdate) {
-             ct(Ot, tt.mJ.YM(tt.lL))
+         cW: function(ZB, TB) {
+           if (!TB.addMeshComponent || !TB.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${TB.addMeshComponent} ${TB.removeMeshComponent}`);
+           if (TB._lastPos = oB().create(), oB().copy(TB._lastPos, BB.zW.aU(ZB)), null !== TB.movingHideDist && JB.add(TB), 0 === IB.size && (oB().set(sB, 1 / 0, 1 / 0, 1 / 0), oB().copy(QB, sB)), MB(TB), HB(TB, TB._competesForCap), TB.immediatelyUpdate) {
+             pB(TB, BB.zW.aU(BB.Jm))
```

#### 2600. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22955` → after: `L23071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23071) · [Before (L22955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22955)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2601. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22959` → after: `L23075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23075) · [Before (L22959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22959)

```diff
-           const jt = tt.camera.YM(),
+           const kB = BB.camera.aU(),
```

#### 2602. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22972` → after: `L23088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23088) · [Before (L22972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22972)

```diff
-                 if (qt.size < Ot.e.maxNumVisibleEntitiesOfSingleType) {
+                 if (JB.size < TB.f.maxNumVisibleEntitiesOfSingleType) {
```

#### 2603. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22978-L22979` → after: `L23094-L23095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23094-L23095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23094-L23095) · [Before (L22978-L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22978-L22979)

```diff
-                 for (const Vt of qt) Ct[mt++] = Dt().sqrDist(et, tt.mJ.YM(Vt.uZ));
-                 Jt.set(Vt, yt(Ct, mt, Ot.e.maxNumVisibleEntitiesOfSingleType - 1))
+                 for (const ZB of JB) CB[GB++] = oB().sqrDist(IB, BB.zW.aU(ZB.bR));
+                 dB.set(ZB, qB(CB, GB, TB.f.maxNumVisibleEntitiesOfSingleType - 1))
```

#### 2604. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22983` → after: `L23099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23099) · [Before (L22983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22983)

```diff
-             const Vt = tt.mJ.YM(et.uZ);
+             const ZB = BB.zW.aU(IB.bR);
```

#### 2605. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22988` → after: `L23104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23104) · [Before (L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L22988)

```diff
-           if (!Wt) tt: for (const tt of Vt)
+           if (!YB) BB: for (const BB of ZB)
```

#### 2606. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23002-L23003` → after: `L23118-L23119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23118-L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23118-L23119) · [Before (L23002-L23003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23002-L23003)

```diff
-           mJ: qt
-         } = tt, Xt = et.uZ, Qt = qt.YM(Xt);
+           zW: JB
+         } = BB, nB = IB.bR, hB = JB.aU(nB);
```

#### 2607. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23011` → after: `L23127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23127) · [Before (L23011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23011)

```diff
-           ft = Math.max(lt, null !== (Ot = et.movingHideDist) && void 0 !== Ot ? Ot : 0),
+           NB = Math.max(zB, null !== (TB = IB.movingHideDist) && void 0 !== TB ? TB : 0),
```

#### 2608. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23013` → after: `L23129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23129) · [Before (L23013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23013)

```diff
-           yt = wt && (et.displayOutsideLoadedChunk || (0, dt.c)().hA(Math.floor(Qt[0]), Math.floor(Qt[1]), Math.floor(Qt[2])));
+           qB = gB && (IB.displayOutsideLoadedChunk || (0, vB.d)().pD(Math.floor(hB[0]), Math.floor(hB[1]), Math.floor(hB[2])));
```

#### 2609. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23015` → after: `L23131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23131) · [Before (L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23015)

```diff
-         const Nt = Jt.get(et.mj),
+         const yB = dB.get(IB.Ev),
```

#### 2610. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23017` → after: `L23133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23133) · [Before (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23017)

```diff
-         et.isMeshShown !== Mt && (Mt ? (qt.oet(Xt) || (et.addMeshComponent(), (0, jt.i)(tt, Xt)), et.addShadow && !qt.getState(Xt, qt.names.BE) && (qt.RZ(Xt, qt.names.BE, {
+         IB.isMeshShown !== UB && (UB ? (JB.RIB(nB) || (IB.addMeshComponent(), (0, kB.k)(BB, nB)), IB.addShadow && !JB.getState(nB, JB.names.GN) && (JB.xR(nB, JB.names.GN, {
```

#### 2611. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23019` → after: `L23135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23135) · [Before (L23019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23019)

```diff
-         }), qt.getState(Xt, qt.names.BE).enabledCombinator = new mt.b)) : (et.removeMeshComponent(), et.addShadow && qt.getState(Xt, qt.names.BE) && qt.ZZ(Xt, qt.names.BE)), et.isMeshShown = Mt)
+         }), JB.getState(nB, JB.names.GN).enabledCombinator = new GB.d)) : (IB.removeMeshComponent(), IB.addShadow && JB.getState(nB, JB.names.GN) && JB.Qr(nB, JB.names.GN)), IB.isMeshShown = UB)
```

#### 2612. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23037-L23039` → after: `L23153-L23155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23153-L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23153-L23155) · [Before (L23037-L23039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23037-L23039)

```diff
-         if (tt._competesForCap = et, !tt.mj) return;
-         let Vt = bt.get(tt.mj);
-         et ? (Vt || (Vt = new Set, bt.set(tt.mj, Vt)), Vt.add(tt)) : Vt && (Vt.delete(tt), 0 === Vt.size && (bt.delete(tt.mj), Jt.delete(tt.mj)))
+         if (BB._competesForCap = IB, !BB.Ev) return;
+         let ZB = WB.get(BB.Ev);
+         IB ? (ZB || (ZB = new Set, WB.set(BB.Ev, ZB)), ZB.add(BB)) : ZB && (ZB.delete(BB), 0 === ZB.size && (WB.delete(BB.Ev), dB.delete(BB.Ev)))
```

#### 2613. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23043` → after: `L23159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23159) · [Before (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23043)

```diff
-         let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.mJ.YM(Vt.uZ);
+         let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.zW.aU(ZB.bR);
```

#### 2614. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23050` → after: `L23166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23166) · [Before (L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23050)

```diff
-         const jt = `${qt}|${Dt}|${mt}`,
+         const kB = `${JB}|${oB}|${GB}`,
```

#### 2615. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23115` → after: `L23231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23231) · [Before (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23115)

```diff
-       return Math.max(tt.hideDist, null !== (et = tt.movingHideDist) && void 0 !== et ? et : 0)
+       return Math.max(BB.hideDist, null !== (IB = BB.movingHideDist) && void 0 !== IB ? IB : 0)
```

#### 2616. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23121` → after: `L23237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23237) · [Before (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23121)

```diff
-       return et < Vt ? Vt - et : et > Ot ? et - Ot : 0
+       return IB < ZB ? ZB - IB : IB > TB ? IB - TB : 0
```

#### 2617. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23124` → after: `L23240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23240) · [Before (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23124)

```diff
-   38989: (tt, et, Vt) => {
+   38820: (BB, IB, ZB) => {
```

#### 2618. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23129-L23135` → after: `L23245-L23251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23245-L23251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23245-L23251) · [Before (L23129-L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23129-L23135)

```diff
-     var Ot = Vt(37584),
-       qt = Vt(37323),
-       Dt = Vt(37403),
-       mt = Vt(37398),
-       dt = Vt(37647),
-       jt = Vt(38316),
-       Ht = Vt(38327);
+     var TB = ZB(37385),
+       JB = ZB(37108),
+       oB = ZB(37194),
+       GB = ZB(37188),
+       vB = ZB(37448),
+       kB = ZB(38136),
+       cB = ZB(38143);
```

#### 2619. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23142-L23143` → after: `L23258-L23259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23258-L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23258-L23259) · [Before (L23142-L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23142-L23143)

```diff
-           RP: null,
-           DOt: null,
+           gR: null,
+           SZB: null,
```

#### 2620. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23159-L23160` → after: `L23275-L23276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23275-L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23275-L23276) · [Before (L23159-L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23159-L23160)

```diff
-         dJ: function(et, Vt) {
-           for (const Ot of Vt) Ot.DOt.mOt && ((0, qt.pausesOutOfView)(tt, Ot.uZ, Ot.RP) ? (Ot._posePaused = !0, lt(tt, Ot, et)) : ft(tt, Ot, et))
+         FW: function(IB, ZB) {
+           for (const TB of ZB) TB.SZB.BTB && ((0, JB.pausesOutOfView)(BB, TB.bR, TB.gR) ? (TB._posePaused = !0, zB(BB, TB, IB)) : NB(BB, TB, IB))
```

#### 2621. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23166` → after: `L23282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23282) · [Before (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23166)

```diff
-       const Vt = tt.mJ.CVt(et);
+       const ZB = BB.zW.gZB(IB);
```

#### 2622. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23171` → after: `L23287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23287) · [Before (L23171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23171)

```diff
-       const Ot = tt.mJ.xet(et.uZ);
+       const TB = BB.zW.uIB(IB.bR);
```

#### 2623. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23174` → after: `L23290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23290) · [Before (L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23174)

```diff
-       (0, Ht.e)(tt, et.uZ) || "gliding" === qt || "driving" === qt || (Mt(tt, et) ? bt(tt, et, Ot) : "zombie" !== qt && Jt(tt, et, Ot, Et(tt, et), Vt))
+       (0, cB.c)(BB, IB.bR) || "gliding" === JB || "driving" === JB || (UB(BB, IB) ? WB(BB, IB, TB) : "zombie" !== JB && dB(BB, IB, TB, FB(BB, IB), ZB))
```

#### 2624. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23178` → after: `L23294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23294) · [Before (L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23178)

```diff
-       return tt.mJ.getState(et.uZ, "animator")
+       return BB.zW.getState(IB.bR, "animator")
```

#### 2625. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23184` → after: `L23300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23300) · [Before (L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23184)

```diff
-       const qt = tt.mJ.xet(et.uZ),
+       const JB = BB.zW.uIB(IB.bR),
```

#### 2626. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23188-L23189` → after: `L23304-L23305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23304-L23305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23304-L23305) · [Before (L23188-L23189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23188-L23189)

```diff
-         Qt = et.uZ === tt.lL ? dt.c.getPlayerFacingPitch(tt) : qt.cameraPitch,
-         lt = null === (Ot = tt.mJ.MVt(et.uZ)) || void 0 === Ot ? void 0 : Ot.LJ,
+         hB = IB.bR === BB.Jm ? vB.c.getPlayerFacingPitch(BB) : JB.cameraPitch,
+         zB = null === (TB = BB.zW.zZB(IB.bR)) || void 0 === TB ? void 0 : TB.JC,
```

#### 2627. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23191` → after: `L23307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23307) · [Before (L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23191)

```diff
-         yt = (0, Ht.e)(tt, et.uZ),
+         qB = (0, cB.c)(BB, IB.bR),
```

#### 2628. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23193` → after: `L23309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23309) · [Before (L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23193)

```diff
-         ct = (0, jt.getRigController)(tt, et.uZ),
+         pB = (0, kB.getRigController)(BB, IB.bR),
```

#### 2629. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23221` → after: `L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23337) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23221)

```diff
-         Ht = dt ? tt.mJ.getState(et.uZ, "updateWalkingState").walkingAngle : 0;
+         cB = vB ? BB.zW.getState(IB.bR, "updateWalkingState").walkingAngle : 0;
```

#### 2630. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23234` → after: `L23350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23350) · [Before (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23234)

```diff
-       return (0, jt.rigHasAction)(tt, et.uZ, Ot.m)
+       return (0, kB.rigHasAction)(BB, IB.bR, TB.s)
```

#### 2631. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23238` → after: `L23354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23354) · [Before (L23238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23238)

```diff
-       (!et.consumedNetworkArmSwing || Vt.armSwinging && !(0, jt.rigActionPlaying)(tt, et.uZ, Ot.m)) && (0, jt.playRigAction)(tt, et.uZ, Ot.m), et.consumedNetworkArmSwing = !0, et._queuedSwing = !1
+       (!IB.consumedNetworkArmSwing || ZB.armSwinging && !(0, kB.rigActionPlaying)(BB, IB.bR, TB.s)) && (0, kB.playRigAction)(BB, IB.bR, TB.s), IB.consumedNetworkArmSwing = !0, IB._queuedSwing = !1
```

#### 2632. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23243` → after: `L23359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23359) · [Before (L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23243)

```diff
-       const dt = tt.Jtt,
+       const vB = BB.MBB,
```

#### 2633. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23246` → after: `L23362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23362) · [Before (L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23246)

```diff
-           eq: Ht
+           lT: cB
```

#### 2634. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23248` → after: `L23364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23364) · [Before (L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23248)

```diff
-       Vt.armSwinging || !et.consumedNetworkArmSwing ? (et.consumedNetworkArmSwing = !0, jt >= Ht ? (Dt = qt / Ht, et._queuedSwing = !1) : jt >= .65 * Ht && !et._queuedSwing && (et._queuedSwing = !0)) : et._queuedSwing && jt >= Ht && (Dt = Math.min(qt, jt - Ht) / Ht, et._queuedSwi … [truncated]
+       ZB.armSwinging || !IB.consumedNetworkArmSwing ? (IB.consumedNetworkArmSwing = !0, kB >= cB ? (oB = JB / cB, IB._queuedSwing = !1) : kB >= .65 * cB && !IB._queuedSwing && (IB._queuedSwing = !0)) : IB._queuedSwing && kB >= cB && (oB = Math.min(JB, kB - cB) / cB, IB._queuedSwi … [truncated]
```

#### 2635. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23262-L23263` → after: `L23378-L23379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23378-L23379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23378-L23379) · [Before (L23262-L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23262-L23263)

```diff
-       const Vt = tt.mJ.xet(et.uZ),
-         Ot = et.uZ === tt.lL ? dt.c.getPlayerFacingPitch(tt) : Vt.cameraPitch,
+       const ZB = BB.zW.uIB(IB.bR),
+         TB = IB.bR === BB.Jm ? vB.c.getPlayerFacingPitch(BB) : ZB.cameraPitch,
```

#### 2636. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23271` → after: `L23387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23387) · [Before (L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23271)

```diff
-       } = tt.mJ.getState(et.uZ, "updateWalkingState"), qt = Et(tt, et);
+       } = BB.zW.getState(IB.bR, "updateWalkingState"), JB = FB(BB, IB);
```

#### 2637. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23282-L23284` → after: `L23398-L23400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23398-L23400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23398-L23400) · [Before (L23282-L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23282-L23284)

```diff
-     const St = (0, Dt.e)({
-       eq: 250,
-       Oq: {
+     const iB = (0, oB.d)({
+       lT: 250,
+       tT: {
```

#### 2638. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23289` → after: `L23405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23405) · [Before (L23289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23289)

```diff
-               mq: "catmull-rom-spline",
+               ET: "catmull-rom-spline",
```

#### 2639. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23295` → after: `L23411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23411) · [Before (L23295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23295)

```diff
-               mq: "catmull-rom-spline",
+               ET: "catmull-rom-spline",
```

#### 2640. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23301` → after: `L23417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23417) · [Before (L23301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23301)

```diff
-               mq: "catmull-rom-spline",
+               ET: "catmull-rom-spline",
```

#### 2641. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23307` → after: `L23423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23423) · [Before (L23307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23307)

```diff
-               mq: "catmull-rom-spline",
+               ET: "catmull-rom-spline",
```

#### 2642. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23313` → after: `L23429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23429) · [Before (L23313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23313)

```diff
-               mq: "catmull-rom-spline",
+               ET: "catmull-rom-spline",
```

#### 2643. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23321` → after: `L23437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23437) · [Before (L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23321)

```diff
-   39119: (tt, et, Vt) => {
+   38984: (BB, IB, ZB) => {
```

#### 2644. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23325` → after: `L23441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23441) · [Before (L23325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23325)

```diff
-     var Ot = Vt(2848);
+     var TB = ZB(2912);
```

#### 2645. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23337` → after: `L23453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23453) · [Before (L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23337)

```diff
-         qJ: function(tt, Vt) {
+         cW: function(BB, ZB) {
```

#### 2646. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23346-L23347` → after: `L23462-L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23462-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23462-L23463) · [Before (L23346-L23347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23346-L23347)

```diff
-         const Vt = tt.mJ.YM(et.uZ),
-           qt = (0, Ot.c)().hA(Vt[0], Vt[1], Vt[2]);
+         const ZB = BB.zW.aU(IB.bR),
+           JB = (0, TB.d)().pD(ZB[0], ZB[1], ZB[2]);
```

#### 2647. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23352` → after: `L23468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23468) · [Before (L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23352)

```diff
-   39030: (tt, et, Vt) => {
+   38861: (BB, IB, ZB) => {
```

#### 2648. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23357-L23364` → after: `L23473-L23480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23473-L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23473-L23480) · [Before (L23357-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23357-L23364)

```diff
-     var Ot = Vt(37510),
-       qt = Vt(37002),
-       Dt = Vt(37331),
-       mt = Vt(38157),
-       dt = Vt(37699);
-     const jt = Dt.uf.Up(),
-       Ht = new Dt.uf(0, -.5, .5),
-       Xt = new Dt.uf(.16, .01, .1).scaleInPlace(1.4),
+     var TB = ZB(37304),
+       JB = ZB(36794),
+       oB = ZB(37113),
+       GB = ZB(37956),
+       vB = ZB(37504);
+     const kB = oB.rN.Up(),
+       cB = new oB.rN(0, -.5, .5),
+       nB = new oB.rN(.16, .01, .1).scaleInPlace(1.4),
```

#### 2649. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23391-L23393` → after: `L23507-L23509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23507-L23509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23507-L23509) · [Before (L23391-L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23391-L23393)

```diff
-         qJ: function(et, Vt) {
-           if (Vt._targetEId = (0, qt.c)(Vt.lineToEId), !tt.mJ.RY(Vt.uZ)) return console.warn(`Skipping line from entity ${Vt.uZ}, which has no position`), void tt.mJ.ZZ(Vt.uZ, "lineToEntity");
-           Vt._thisPos = Dt.uf.Zero(), Vt._targetPos = Dt.uf.Zero(), Vt._forward = Dt.uf.Zero(), Vt._right = Dt.uf.Zero(), Vt._up = Dt.uf.Zero(), Vt._quat = Dt.Quaternion.Zero(), Vt._displacement = Dt.uf.Zero(), Vt._cameraOffset = Dt.uf.Zero(), Vt._initialCameraOffset = Dt.uf.Zero … [truncated]
+         cW: function(IB, ZB) {
+           if (ZB._targetEId = (0, JB.e)(ZB.lineToEId), !BB.zW.zK(ZB.bR)) return console.warn(`Skipping line from entity ${ZB.bR}, which has no position`), void BB.zW.Qr(ZB.bR, "lineToEntity");
+           ZB._thisPos = oB.rN.Zero(), ZB._targetPos = oB.rN.Zero(), ZB._forward = oB.rN.Zero(), ZB._right = oB.rN.Zero(), ZB._up = oB.rN.Zero(), ZB._quat = oB.Quaternion.Zero(), ZB._displacement = oB.rN.Zero(), ZB._cameraOffset = oB.rN.Zero(), ZB._initialCameraOffset = oB.rN.Zero … [truncated]
```

#### 2650. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23404` → after: `L23520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23520) · [Before (L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23404)

```diff
-           }()), Vt._line.color = lt, Vt._line.Gw = !1, tt.Bf.ow(Vt._line)
+           }()), ZB._line.color = zB, ZB._line.tg = !1, BB.Ig.xg(ZB._line)
```

#### 2651. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23406` → after: `L23522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23522) · [Before (L23406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23406)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2652. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23409` → after: `L23525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23525) · [Before (L23409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23409)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2653. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23416-L23419` → after: `L23532-L23535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23532-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23532-L23535) · [Before (L23416-L23419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23416-L23419)

```diff
-       const Vt = tt.mJ.RY(et._targetEId);
-       if (!Vt) return et._line.Av(!1), void(et._enabled = null);
-       const Ot = et._thisPos.vVt(tt.mJ.RY(et.uZ).zB);
-       (0, dt.s)(et._line, Ot.x, Ot.y, Ot.z);
+       const ZB = BB.zW.zK(IB._targetEId);
+       if (!ZB) return IB._line.qY(!1), void(IB._enabled = null);
+       const TB = IB._thisPos.WZB(BB.zW.zK(IB.bR).qV);
+       (0, vB.q)(IB._line, TB.x, TB.y, TB.z);
```

#### 2654. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23423-L23425` → after: `L23539-L23541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23539-L23541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23539-L23541) · [Before (L23423-L23425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23423-L23425)

```diff
-               mt = tt.mJ.CVt(et._targetEId);
-             if (!mt) return qt.vVt(Ot.zB), bt.NON_HUMANOID;
-             const dt = tt.Bf.xI,
+               GB = BB.zW.gZB(IB._targetEId);
+             if (!GB) return JB.WZB(TB.qV), WB.NON_HUMANOID;
+             const vB = BB.Ig.kR,
```

#### 2655. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23427` → after: `L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23543) · [Before (L23427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23427)

```diff
-                 RP: jt
+                 gR: kB
```

#### 2656. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23432` → after: `L23548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23548) · [Before (L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23432)

```diff
-               return Dt.uf.TransformCoordinatesToRef(Ht, tt, qt), bt.THIRD_PERSON_HUMANOID
+               return oB.rN.TransformCoordinatesToRef(cB, BB, JB), WB.THIRD_PERSON_HUMANOID
```

#### 2657. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23434-L23437` → after: `L23550-L23553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23550-L23553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23550-L23553) · [Before (L23434-L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23434-L23437)

```diff
-             if (et._targetEId !== tt.lL) return qt.vVt(Ot.zB), qt.y += .8, bt.THIRD_PERSON_HUMANOID;
-             const lt = tt.camera.pitch + tt.camera.Tw[0],
-               Et = tt.camera.heading + tt.camera.Tw[1],
-               ft = tt.camera.nf + tt.camera.Tw[2];
+             if (IB._targetEId !== BB.Jm) return JB.WZB(TB.qV), JB.y += .8, WB.THIRD_PERSON_HUMANOID;
+             const zB = BB.camera.pitch + BB.camera.Jq[0],
+               FB = BB.camera.heading + BB.camera.Jq[1],
+               NB = BB.camera.Iq + BB.camera.Jq[2];
```

#### 2658. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23439` → after: `L23555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23555) · [Before (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23439)

```diff
-             const wt = tt.mJ.RY(tt.camera.hY).zB;
+             const gB = BB.zW.zK(BB.camera.IK).qV;
```

#### 2659. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23443` → after: `L23559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23559) · [Before (L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23443)

```diff
-           et._targetPos.subtractToRef(Vt, et._displacement), null === et._enabled ? qt === bt.FIRST_PERSON_HUMANOID ? (et._initialCameraOffset.rK(et._cameraOffset), et._enabled = !1, et._line.Av(!1)) : (et._enabled = !0, et._line.Av(!0)) : !1 !== et._enabled || qt === bt.FIRST_PE … [truncated]
+           IB._targetPos.subtractToRef(ZB, IB._displacement), null === IB._enabled ? JB === WB.FIRST_PERSON_HUMANOID ? (IB._initialCameraOffset.TY(IB._cameraOffset), IB._enabled = !1, IB._line.qY(!1)) : (IB._enabled = !0, IB._line.qY(!0)) : !1 !== IB._enabled || JB === WB.FIRST_PE … [truncated]
```

#### 2660. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23448-L23449` → after: `L23564-L23565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23564-L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23564-L23565) · [Before (L23448-L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23448-L23449)

```diff
-         yt = Dt.uf.CrossToRef(jt, lt, et._right).normalizeToRef(et._right),
-         Nt = Dt.uf.CrossToRef(lt, yt, et._up),
+         qB = oB.rN.CrossToRef(kB, zB, IB._right).normalizeToRef(IB._right),
+         yB = oB.rN.CrossToRef(zB, qB, IB._up),
```

#### 2661. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23451` → after: `L23567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23567) · [Before (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23451)

```diff
-       (0, dt.v)(et._line, Mt.x, Mt.y, Mt.z, Mt.w);
+       (0, vB.t)(IB._line, UB.x, UB.y, UB.z, UB.w);
```

#### 2662. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23453` → after: `L23569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23569) · [Before (L23453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23453)

```diff
-       et._line.cj.set(1, Jt, mt)
+       IB._line.ek.set(1, dB, GB)
```

#### 2663. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23459` → after: `L23575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23575) · [Before (L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23459)

```diff
-   39121: (tt, et, Vt) => {
+   38993: (BB, IB, ZB) => {
```

#### 2664. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23464-L23466` → after: `L23580-L23582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23580-L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23580-L23582) · [Before (L23464-L23466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23464-L23466)

```diff
-     var Ot = Vt(3751),
-       qt = Vt(37032),
-       Dt = Vt(404),
+     var TB = ZB(3854),
+       JB = ZB(36829),
+       oB = ZB(364),
```

#### 2665. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23468-L23476` → after: `L23584-L23592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23584-L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23584-L23592) · [Before (L23468-L23476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23468-L23476)

```diff
-       dt = Vt(31),
-       jt = Vt(2043),
-       Ht = Vt(1993),
-       Xt = Vt(6667),
-       Qt = Vt(26),
-       lt = Vt(809),
-       Et = Vt(2848),
-       ft = Vt(1308),
-       wt = Vt(391);
+       vB = ZB(24),
+       kB = ZB(2029),
+       cB = ZB(1956),
+       nB = ZB(6635),
+       hB = ZB(20),
+       zB = ZB(760),
+       FB = ZB(2912),
+       NB = ZB(1281),
+       gB = ZB(360);
```

#### 2666. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23481` → after: `L23597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23597) · [Before (L23481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23481)

```diff
-       return (0, lt.o)(Qt.b.get("clientEscMenuOptions").cameraFOV)
+       return (0, zB.h)(hB.d.get("clientEscMenuOptions").cameraFOV)
```

#### 2667. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23486-L23487` → after: `L23602-L23603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23602-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23602-L23603) · [Before (L23486-L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23486-L23487)

```diff
-       return jt.b.subscribe("movementBasedFovScale", (tt => {
-         et = "number" === typeof tt && isFinite(tt) ? tt : 1
+       return kB.c.subscribe("movementBasedFovScale", (BB => {
+         IB = "number" === typeof BB && isFinite(BB) ? BB : 1
```

#### 2668. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23490-L23492` → after: `L23606-L23608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23606-L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23606-L23608) · [Before (L23490-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23490-L23492)

```diff
-       })), dt.j.subscribe(`entityScale|${tt.lL}`, (function() {
-         const et = tt.mJ.ZVt(tt.camera.hY);
-         et && ((0, Et.c)().removeFromEyeHeightCache(tt.lL), et.offset[1] = (0, Et.c)().getLifeformEyeHeight(tt.lL))
+       })), vB.l.subscribe(`entityScale|${BB.Jm}`, (function() {
+         const IB = BB.zW.YZB(BB.camera.IK);
+         IB && ((0, FB.d)().removeFromEyeHeightCache(BB.Jm), IB.offset[1] = (0, FB.d)().getLifeformEyeHeight(BB.Jm))
```

#### 2669. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23498` → after: `L23614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23614) · [Before (L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23498)

```diff
-           fovMultiplier: new qt.g,
+           fovMultiplier: new JB.k,
```

#### 2670. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23505` → after: `L23621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23621) · [Before (L23505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23505)

```diff
-         dJ: function(Vt, Ot) {
+         FW: function(ZB, TB) {
```

#### 2671. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23507-L23511` → after: `L23623-L23627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23623-L23627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23623-L23627) · [Before (L23507-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23507-L23511)

```diff
-             const Ot = tt.mJ.ZVt(tt.camera.hY),
-               Dt = tt.mJ.getState(qt.uZ, "movement"),
-               dt = tt.mJ.fet(qt.uZ).physicsState,
-               jt = tt.mJ.YG(qt.uZ);
-             mt().set(yt, jt.Dy[0], dt.type === Xt.n.GLIDER ? jt.Dy[1] : 0, jt.Dy[2]);
+             const TB = BB.zW.YZB(BB.camera.IK),
+               oB = BB.zW.getState(JB.bR, "movement"),
+               vB = BB.zW.dIB(JB.bR).physicsState,
+               kB = BB.zW.vx(JB.bR);
+             GB().set(qB, kB.zq[0], vB.type === nB.o.GLIDER ? kB.zq[1] : 0, kB.zq[2]);
```

#### 2672. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23513-L23519` → after: `L23629-L23635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23629-L23635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23629-L23635) · [Before (L23513-L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23513-L23519)

```diff
-               bt = 4 * (Dt._flying ? tt.OJ.flySpeedMultiplier : 1);
-             let Jt = lt.k;
-             Mt > bt && (Jt += Math.min(.033 * (Mt - 4), .5) * et), Jt *= qt.fovMultiplier.getTotalMultipliedVal(), qt.zoomKeyPressed && tt.OJ.canUseZoomKey && (Jt *= .2), Jt *= Qt.b.get("clientEscMenuOptions").cameraFOV / 100, Jt = Math.min(Jt, lt.g), qt.movementBasedFov = qt.mov … [truncated]
-             const Ct = (0, Et.c)().getLifeformEyeHeight(qt.uZ);
-             if (Nt[1] += Ct, !1 === Qt.b.get("clientEscMenuOptions").disableBobbing) {
-               const et = (0, Et.c)().getIsStoodOnBlock(qt.uZ);
-               0 === Mt || !1 === et || 0 !== tt.camera.ZY ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += Vt / (140 - 2 * (0, Ht.e)(Mt, 1, 100));
+               WB = 4 * (oB._flying ? BB.vW.flySpeedMultiplier : 1);
+             let dB = zB.f;
+             UB > WB && (dB += Math.min(.033 * (UB - 4), .5) * IB), dB *= JB.fovMultiplier.getTotalMultipliedVal(), JB.zoomKeyPressed && BB.vW.canUseZoomKey && (dB *= .2), dB *= hB.d.get("clientEscMenuOptions").cameraFOV / 100, dB = Math.min(dB, zB.e), JB.movementBasedFov = JB.mov … [truncated]
+             const CB = (0, FB.d)().getLifeformEyeHeight(JB.bR);
+             if (yB[1] += CB, !1 === hB.d.get("clientEscMenuOptions").disableBobbing) {
+               const IB = (0, FB.d)().getIsStoodOnBlock(JB.bR);
+               0 === UB || !1 === IB || 0 !== BB.camera.NK ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += ZB / (140 - 2 * (0, cB.f)(UB, 1, 100));
```

#### 2673. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23521` → after: `L23637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23637) · [Before (L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23521)

```diff
-               this.state.bobbleValue = (0, ft.xb)(this.state.bobbleValue, Ot, .1);
+               this.state.bobbleValue = (0, NB.mb)(this.state.bobbleValue, TB, .1);
```

#### 2674. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23525` → after: `L23641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23641) · [Before (L23525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23525)

```diff
-             const ut = (0, Et.c)().YB(qt.uZ),
+             const QB = (0, FB.d)().sV(JB.bR),
```

#### 2675. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23528` → after: `L23644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23644) · [Before (L23528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23528)

```diff
-               for (let tt = 0; tt < 3; tt++) Ot.offset[tt] = (0, ft.xb)(Ot.offset[tt], Nt[tt], Kt);
+               for (let BB = 0; BB < 3; BB++) TB.offset[BB] = (0, NB.mb)(TB.offset[BB], yB[BB], sB);
```

#### 2676. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23535` → after: `L23651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23651) · [Before (L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23535)

```diff
-   39127: (tt, et, Vt) => {
+   39001: (BB, IB, ZB) => {
```

#### 2677. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23539-L23540` → after: `L23655-L23656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23655-L23656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23655-L23656) · [Before (L23539-L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23539-L23540)

```diff
-     var Ot = Vt(5030),
-       qt = Vt(229);
+     var TB = ZB(5028),
+       JB = ZB(201);
```

#### 2678. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23566-L23569` → after: `L23682-L23685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23682-L23685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23682-L23685) · [Before (L23566-L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23566-L23569)

```diff
-           const Ht = tt.mJ.YM(tt.lL),
-             Xt = tt.camera.zp(),
-             Qt = tt.camera.Qp();
-           et[0] = Ht[2], et[1] = Ht[1] + qt.e.Yy * qt.e.playerEyeToHeightRatio, et[2] = Ht[0], et[3] = Xt[2], et[4] = Xt[1], et[5] = Xt[0], et[6] = Qt[2], et[7] = Qt[1], et[8] = Qt[0];
+           const cB = BB.zW.aU(BB.Jm),
+             nB = BB.camera.XV(),
+             hB = BB.camera.RV();
+           IB[0] = cB[2], IB[1] = cB[1] + JB.f.fq * JB.f.playerEyeToHeightRatio, IB[2] = cB[0], IB[3] = nB[2], IB[4] = nB[1], IB[5] = nB[0], IB[6] = hB[2], IB[7] = hB[1], IB[8] = hB[0];
```

#### 2679. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23575` → after: `L23691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23691) · [Before (L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23575)

```diff
-         dJ: null
+         FW: null
```

#### 2680. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23579` → after: `L23695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23695) · [Before (L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23579)

```diff
-   39134: (tt, et, Vt) => {
+   39008: (BB, IB, ZB) => {
```

#### 2681. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23583` → after: `L23699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23699) · [Before (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23583)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2682. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23585` → after: `L23701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23701) · [Before (L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23585)

```diff
-       Dt = Vt(31);
+       oB = ZB(24);
```

#### 2683. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23602-L23603` → after: `L23718-L23719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23718-L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23718-L23719) · [Before (L23602-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23602-L23603)

```diff
-         qJ: function(et, Vt) {
-           Vt.thisPlayerTeleportSub = Dt.j.subscribe(`otherPlayerTeleported|${et}`, (et => {
+         cW: function(IB, ZB) {
+           ZB.thisPlayerTeleportSub = oB.l.subscribe(`otherPlayerTeleported|${IB}`, (IB => {
```

#### 2684. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23607` → after: `L23723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23723) · [Before (L23607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23607)

```diff
-             const qt = tt.mJ.YM(tt.lL);
+             const JB = BB.zW.aU(BB.Jm);
```

#### 2685. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23609` → after: `L23725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23725) · [Before (L23609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23609)

```diff
-           })), Vt.localPlayerTeleportSub = Dt.j.subscribe("localPlayerTeleported", (Ot => {
+           })), ZB.localPlayerTeleportSub = oB.l.subscribe("localPlayerTeleported", (TB => {
```

#### 2686. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23615` → after: `L23731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23731) · [Before (L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23615)

```diff
-             const mt = tt.mJ.getState(et, "smoothToServerPos");
+             const GB = BB.zW.getState(IB, "smoothToServerPos");
```

#### 2687. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23619-L23620` → after: `L23735-L23736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23735-L23736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23735-L23736) · [Before (L23619-L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23619-L23620)

```diff
-         nS: function(et, Vt) {
-           Dt.j.unsubscribe(Vt.thisPlayerTeleportSub), Dt.j.unsubscribe(Vt.localPlayerTeleportSub);
+         nH: function(IB, ZB) {
+           oB.l.unsubscribe(ZB.thisPlayerTeleportSub), oB.l.unsubscribe(ZB.localPlayerTeleportSub);
```

#### 2688. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23622-L23623` → after: `L23738-L23739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23738-L23739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23738-L23739) · [Before (L23622-L23623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23622-L23623)

```diff
-             mJ: Ot
-           } = tt, qt = Ot.aVt(et);
+             zW: TB
+           } = BB, JB = TB.hZB(IB);
```

#### 2689. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23625` → after: `L23741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23741) · [Before (L23625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23625)

```diff
-           const mt = Ot.getState(et, Ot.names.BE);
+           const GB = TB.getState(IB, TB.names.GN);
```

#### 2690. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23629` → after: `L23745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23745) · [Before (L23629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23629)

```diff
-           const Ot = tt.mJ.YM(tt.lL);
+           const TB = BB.zW.aU(BB.Jm);
```

#### 2691. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23636` → after: `L23752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23752) · [Before (L23636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23636)

```diff
-             const et = tt.mJ.getState(qt.uZ, "smoothToServerPos");
+             const IB = BB.zW.getState(JB.bR, "smoothToServerPos");
```

#### 2692. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23647-L23648` → after: `L23763-L23764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23763-L23764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23763-L23764) · [Before (L23647-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23647-L23648)

```diff
-         mJ: Ot
-       } = tt, qt = Ot.aVt(et.uZ);
+         zW: TB
+       } = BB, JB = TB.hZB(IB.bR);
```

#### 2693. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23650` → after: `L23766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23766) · [Before (L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23650)

```diff
-       const Dt = Ot.getState(et.uZ, Ot.names.BE);
+       const oB = TB.getState(IB.bR, TB.names.GN);
```

#### 2694. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23665-L23666` → after: `L23781-L23782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23781-L23782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23781-L23782) · [Before (L23665-L23666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23665-L23666)

```diff
-       const qt = null === (Vt = tt.mJ.xet(tt.lL)) || void 0 === Vt ? void 0 : Vt.ridingVehicleEId;
-       return !!qt && qt === (null === (Ot = tt.mJ.xet(et.uZ)) || void 0 === Ot ? void 0 : Ot.ridingVehicleEId)
+       const JB = null === (ZB = BB.zW.uIB(BB.Jm)) || void 0 === ZB ? void 0 : ZB.ridingVehicleEId;
+       return !!JB && JB === (null === (TB = BB.zW.uIB(IB.bR)) || void 0 === TB ? void 0 : TB.ridingVehicleEId)
```

#### 2695. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23677` → after: `L23793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23793) · [Before (L23677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23677)

```diff
-   39138: (tt, et, Vt) => {
+   39014: (BB, IB, ZB) => {
```

#### 2696. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23683` → after: `L23799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23799) · [Before (L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23683)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2697. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23685-L23690` → after: `L23801-L23806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23801-L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23801-L23806) · [Before (L23685-L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23685-L23690)

```diff
-       Dt = Vt(36996),
-       mt = Vt(36992),
-       dt = Vt(9425),
-       jt = Vt(2848),
-       Ht = Vt(38244),
-       Xt = Vt(38316);
+       oB = ZB(36783),
+       GB = ZB(36780),
+       vB = ZB(9296),
+       kB = ZB(2912),
+       cB = ZB(38048),
+       nB = ZB(38136);
```

#### 2698. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23703` → after: `L23819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23819) · [Before (L23703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23703)

```diff
-         qJ: (tt, et) => {
+         cW: (BB, IB) => {
```

#### 2699. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23706` → after: `L23822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23822) · [Before (L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23706)

```diff
-         nS: null,
+         nH: null,
```

#### 2700. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23708` → after: `L23824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23824) · [Before (L23708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23708)

```diff
-           const Ot = (0, jt.c)();
+           const TB = (0, kB.d)();
```

#### 2701. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23710-L23711` → after: `L23826-L23827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23826-L23827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23826-L23827) · [Before (L23710-L23711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23710-L23711)

```diff
-             if (!tt.mJ.aVt(jt.uZ).isAlive) continue;
-             const et = tt.mJ.fet(jt.uZ);
+             if (!BB.zW.hZB(kB.bR).isAlive) continue;
+             const IB = BB.zW.dIB(kB.bR);
```

#### 2702. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23714-L23716` → after: `L23830-L23832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23830-L23832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23830-L23832) · [Before (L23714-L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23714-L23716)

```diff
-             if (tt.bloxd.getResolvedPhysicsSettings(jt.uZ, Vt).disableFootstepSounds) continue;
-             const lt = tt.mJ.YM(jt.uZ);
-             let ft = Ot.XM(Math.floor(lt[0]), Math.ceil(lt[1]) - 1, Math.floor(lt[2]));
+             if (BB.bloxd.getResolvedPhysicsSettings(kB.bR, ZB).disableFootstepSounds) continue;
+             const zB = BB.zW.aU(kB.bR);
+             let NB = TB.WU(Math.floor(zB[0]), Math.ceil(zB[1]) - 1, Math.floor(zB[2]));
```

#### 2703. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23721` → after: `L23837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23837) · [Before (L23721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23721)

```diff
-             const wt = qt().pm(jt.lastPos, lt);
+             const gB = JB().uG(kB.lastPos, zB);
```

#### 2704. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23723` → after: `L23839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23839) · [Before (L23723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23723)

```diff
-             const yt = (0, Xt.getRigFootfallPhase)(tt, jt.uZ);
+             const qB = (0, nB.getRigFootfallPhase)(BB, kB.bR);
```

#### 2705. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23725-L23728` → after: `L23841-L23844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23841-L23844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23841-L23844) · [Before (L23725-L23728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23725-L23728)

```diff
-             const Nt = Number.isNaN(yt) ? jt.distSinceLastSound > Qt : jt.stepPending;
-             if (et.isOnGround() && 0 !== ft && (Nt && !dt.h[ft].OE)) {
-               const tt = (0, Dt.g)(`step_${(0,Ht.e)(ft,!1)}`);
-               mt.e.play(tt, .15), jt.distSinceLastSound = 0, jt.stepPending = !1
+             const yB = Number.isNaN(qB) ? kB.distSinceLastSound > hB : kB.stepPending;
+             if (IB.isOnGround() && 0 !== NB && (yB && !vB.f[NB].gF)) {
+               const BB = (0, oB.f)(`step_${(0,cB.b)(NB,!1)}`);
+               GB.d.play(BB, .15), kB.distSinceLastSound = 0, kB.stepPending = !1
```

#### 2706. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23741` → after: `L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23857) · [Before (L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23741)

```diff
-   39147: (tt, et, Vt) => {
+   39019: (BB, IB, ZB) => {
```

#### 2707. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23747-L23748` → after: `L23863-L23864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23863-L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23863-L23864) · [Before (L23747-L23748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23747-L23748)

```diff
-         qJ: function(tt, et) {},
-         nS: function(tt, et) {},
+         cW: function(BB, IB) {},
+         nH: function(BB, IB) {},
```

#### 2708. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23756` → after: `L23872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23872) · [Before (L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23756)

```diff
-   39052: (tt, et, Vt) => {
+   38892: (BB, IB, ZB) => {
```

#### 2709. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23761-L23762` → after: `L23877-L23878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23877-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23877-L23878) · [Before (L23761-L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23761-L23762)

```diff
-     var Ot = Vt(3751),
-       qt = Vt(404),
+     var TB = ZB(3854),
+       JB = ZB(364),
```

#### 2710. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23764-L23768` → after: `L23880-L23884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23880-L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23880-L23884) · [Before (L23764-L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23764-L23768)

```diff
-       mt = Vt(3820),
-       dt = Vt(39039),
-       jt = Vt(1345),
-       Ht = Vt(37909),
-       Xt = Vt(37647);
+       GB = ZB(3911),
+       vB = ZB(38873),
+       kB = ZB(1317),
+       cB = ZB(37696),
+       nB = ZB(37448);
```

#### 2711. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23777` → after: `L23893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23893) · [Before (L23777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23777)

```diff
-           if (console.assert(1 === Vt.length, "There should only be one entity with updateServerOfMovement."), tt.mJ.aVt(tt.lL).isAlive)
+           if (console.assert(1 === ZB.length, "There should only be one entity with updateServerOfMovement."), BB.zW.hZB(BB.Jm).isAlive)
```

#### 2712. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23780` → after: `L23896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23896) · [Before (L23780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23780)

```diff
-               const et = tt.mJ.RY(tt.lL).Qet;
+               const IB = BB.zW.zK(BB.Jm).UIB;
```

#### 2713. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23782-L23783` → after: `L23898-L23899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23898-L23899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23898-L23899) · [Before (L23782-L23783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23782-L23783)

```diff
-               const Vt = tt.mJ.xet(dt.uZ),
-                 lt = tt.mJ.fet(dt.uZ),
+               const ZB = BB.zW.uIB(vB.bR),
+                 zB = BB.zW.dIB(vB.bR),
```

#### 2714. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23785-L23802` → after: `L23901-L23918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23901-L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23901-L23918) · [Before (L23785-L23802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23785-L23802)

```diff
-                   fm: et[0],
-                   wm: et[1],
-                   ym: et[2],
-                   am: (0, Ht.p)(tt.bloxd.getResolvedPhysicsSettings(dt.uZ, lt.physicsState), lt.steeringHeading, Xt.c.getPlayerFacingHeading(tt)),
-                   Nm: Vt.heading,
-                   Mm: Vt.speed,
-                   bm: Vt.jumping,
-                   Jm: Vt.crouching,
-                   Cm: Vt.cameraPitch,
-                   um: Vt.armSwinging,
-                   Km: null !== (qt = tt.stt) && void 0 !== qt ? qt : Dt().copy(Qt, tt.camera.zp()),
-                   hm: Vt.cameraDirection,
-                   Wm: (0, Ot.getLastReceivedPacketId)(),
-                   Sm: tt.bl,
-                   Rm: Vt.bunnyHopDisabled,
-                   Im: Vt.toggleFly,
- ... (2 more removed lines; see GitHub link above)
+                   cG: IB[0],
+                   nG: IB[1],
+                   hG: IB[2],
+                   FG: (0, cB.u)(BB.bloxd.getResolvedPhysicsSettings(vB.bR, zB.physicsState), zB.steeringHeading, nB.c.getPlayerFacingHeading(BB)),
+                   zG: ZB.heading,
+                   NG: ZB.speed,
+                   gG: ZB.jumping,
+                   qG: ZB.crouching,
+                   yG: ZB.cameraPitch,
+                   UG: ZB.armSwinging,
+                   WG: null !== (JB = BB.kIB) && void 0 !== JB ? JB : oB().copy(hB, BB.camera.XV()),
+                   dG: ZB.cameraDirection,
+                   CG: (0, TB.getLastReceivedPacketId)(),
+                   QG: BB.Mz,
+                   sG: ZB.bunnyHopDisabled,
+                   wG: ZB.toggleFly,
+ ... (2 more added lines; see GitHub link above)
```

#### 2715. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23804` → after: `L23920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23920) · [Before (L23804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23804)

```diff
-               isNaN(Et.Mm) && (console.error("speed was NaN! Setting to 0"), Et.Mm = 0);
+               isNaN(FB.NG) && (console.error("speed was NaN! Setting to 0"), FB.NG = 0);
```

#### 2716. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23818` → after: `L23934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23934) · [Before (L23818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23818)

```diff
-               ft.pitch = tt.camera.pitch, wt.speed = Vt.speed, 0 === ft.pitch && (wt.speed *= 1.3), (0, Ot.sendColyMessage)(mt.Xh, Et)
+               NB.pitch = BB.camera.pitch, gB.speed = ZB.speed, 0 === NB.pitch && (gB.speed *= 1.3), (0, TB.sendColyMessage)(GB.Zh, FB)
```

#### 2717. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23828` → after: `L23944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23944) · [Before (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23828)

```diff
-   38949: (tt, et, Vt) => {
+   38779: (BB, IB, ZB) => {
```

#### 2718. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23830-L23834` → after: `L23946-L23950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23946-L23950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23946-L23950) · [Before (L23830-L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23830-L23834)

```diff
-       d: () => bt,
-       e: () => Jt,
-       h: () => ut,
-       l: () => Kt,
-       p: () => Mt
+       b: () => WB,
+       c: () => dB,
+       f: () => QB,
+       i: () => sB,
+       j: () => UB
```

#### 2719. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23836-L23849` → after: `L23952-L23965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23952-L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23952-L23965) · [Before (L23836-L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23836-L23849)

```diff
-     var Ot = Vt(377),
-       qt = Vt(38967),
-       Dt = Vt(2857),
-       mt = Vt(2865),
-       dt = Vt(38951),
-       jt = Vt(38958),
-       Ht = Vt(26),
-       Xt = Vt(121),
-       Qt = Vt(2984),
-       lt = Vt(106),
-       Et = Vt(146),
-       ft = Vt(39),
-       wt = Vt(3643),
-       yt = Vt(133);
+     var TB = ZB(342),
+       JB = ZB(38804),
+       oB = ZB(2929),
+       GB = ZB(2935),
+       vB = ZB(38786),
+       kB = ZB(38795),
+       cB = ZB(20),
+       nB = ZB(118),
+       hB = ZB(3071),
+       zB = ZB(105),
+       FB = ZB(138),
+       NB = ZB(36),
+       gB = ZB(3733),
+       qB = ZB(129);
```

#### 2720. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23857` → after: `L23973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23973) · [Before (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23857)

```diff
-       const Vt = null !== (et = Xt.currentUrl.getSearchParam(tt)) && void 0 !== et ? et : ft.e.getItem(tt);
+       const ZB = null !== (IB = nB.currentUrl.getSearchParam(BB)) && void 0 !== IB ? IB : NB.m.getItem(BB);
```

#### 2721. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23861-L23862` → after: `L23977-L23978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23977-L23978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23977-L23978) · [Before (L23861-L23862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23861-L23862)

```diff
-       (0, Dt.B)(null);
-       const Vt = (0, mt.p)((0, mt.n)(et.useWebGpu, !0));
+       (0, oB.F)(null);
+       const ZB = (0, GB.l)((0, GB.j)(IB.useWebGpu, !0));
```

#### 2722. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23864-L23865` → after: `L23980-L23981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23980-L23981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23980-L23981) · [Before (L23864-L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23864-L23865)

```diff
-       const dt = (0, mt.i)(Vt.source);
-       null !== dt && console.info(`Renderer: ${Vt.requested} from ${dt}`), null !== Vt.fallbackReason && console.warn(`Renderer: ${Vt.fallbackReason}`);
+       const vB = (0, GB.d)(ZB.source);
+       null !== vB && console.info(`Renderer: ${ZB.requested} from ${vB}`), null !== ZB.fallbackReason && console.warn(`Renderer: ${ZB.fallbackReason}`);
```

#### 2723. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23871` → after: `L23987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23987) · [Before (L23871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23871)

```diff
-           if (Vt && !0 === ft.e.getItem(yt.F) && !0 !== ft.e.getItem(Ot.Rb)) return (0, lt.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), yt.b;
+           if (ZB && !0 === NB.m.getItem(qB.H) && !0 !== NB.m.getItem(TB.wc)) return (0, zB.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), qB.b;
```

#### 2724. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23876` → after: `L23992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23992) · [Before (L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23876)

```diff
-             } = await (0, Dt.p)(mt).load();
+             } = await (0, oB.u)(GB).load();
```

#### 2725. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23878-L23880` → after: `L23994-L23996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23994-L23996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L23994-L23996) · [Before (L23878-L23880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23878-L23880)

```diff
-             const Ot = Ht.b.antiAliasingOnWebGpuAdapter((0, Et.p)()),
-               qt = (0, jt.e)(tt),
-               dt = (0, jt.d)(qt, {
+             const TB = cB.d.antiAliasingOnWebGpuAdapter((0, FB.l)()),
+               JB = (0, kB.i)(BB),
+               vB = (0, kB.e)(JB, {
```

#### 2726. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23884` → after: `L24000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24000) · [Before (L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23884)

```diff
-               xVt: Ot,
+               fZB: TB,
```

#### 2727. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23890` → after: `L24006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24006) · [Before (L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23890)

```diff
-             const tt = (0, qt.e)(wt);
+             const BB = (0, JB.d)(gB);
```

#### 2728. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23893` → after: `L24009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24009) · [Before (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23893)

```diff
-             return "string" === typeof et ? (console.warn(`Lite could not start, falling back to WebGL: ${String(wt)}`), et) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", wt), "it failed to start (see the console)")
+             return "string" === typeof IB ? (console.warn(`Lite could not start, falling back to WebGL: ${String(gB)}`), IB) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", gB), "it failed to start (see the console)")
```

#### 2729. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23896` → after: `L24012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24012) · [Before (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23896)

```diff
-         if ("lite" === Vt.choice && ft.e.setItem(yt.p, "string" === typeof dt), "string" !== typeof dt) return Ht.b.followGameGpu((0, Et.p)()), (0, lt.setWebGpuFallbackReason)("none"), (0, mt.s)(Vt), (0, Dt.B)(dt), {
+         if ("lite" === ZB.choice && NB.m.setItem(qB.u, "string" === typeof vB), "string" !== typeof vB) return cB.d.followGameGpu((0, FB.l)()), (0, zB.setWebGpuFallbackReason)("none"), (0, GB.o)(ZB), (0, oB.F)(vB), {
```

#### 2730. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23899` → after: `L24015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24015) · [Before (L23899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23899)

```diff
-         Xt = (0, mt.e)(Vt.choice, [dt]), tt.replaceWith(tt.cloneNode(!1))
+         nB = (0, GB.c)(ZB.choice, [vB]), BB.replaceWith(BB.cloneNode(!1))
```

#### 2731. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23901` → after: `L24017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24017) · [Before (L23901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23901)

```diff
-       return (0, mt.s)({
+       return (0, GB.o)({
```

#### 2732. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23905` → after: `L24021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24021) · [Before (L23905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23905)

```diff
-       }), Ht.b.followGameGpu(null), {
+       }), cB.d.followGameGpu(null), {
```

#### 2733. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23910` → after: `L24026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24026) · [Before (L23910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23910)

```diff
-       Promise.all([Vt.e(258), Vt.e(307)]).then((() => Vt(41793))).then((tt => {
+       Promise.all([ZB.e(258), ZB.e(307)]).then((() => ZB(41568))).then((BB => {
```

#### 2734. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23913-L23914` → after: `L24029-L24030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24029-L24030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24029-L24030) · [Before (L23913-L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23913-L23914)

```diff
-       const [tt, et] = await Promise.all([Promise.all([Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(268), Vt.e(279), Vt.e(267), Vt.e(261), Vt.e(262), Vt.e(308), Vt.e(0)]).then((() => Vt(41802))), Promise.all([Vt.e(258), Vt.e(259), V … [truncated]
-       return (0, dt.f)(et.SkyMaterial), tt.default
+       const [BB, IB] = await Promise.all([Promise.all([ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(268), ZB.e(279), ZB.e(267), ZB.e(261), ZB.e(262), ZB.e(308), ZB.e(0)]).then((() => ZB(41580))), Promise.all([ZB.e(258), ZB.e(259), Z … [truncated]
+       return (0, vB.e)(IB.SkyMaterial), BB.default
```

#### 2735. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23918` → after: `L24034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24034) · [Before (L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23918)

```diff
-       return "lite" === (0, mt.p)((0, mt.n)(tt, !1)).choice && (0, lt.getWebGpuSupported)() && !ft.e.getItem(yt.p)
+       return "lite" === (0, GB.l)((0, GB.j)(BB, !1)).choice && (0, zB.getWebGpuSupported)() && !NB.m.getItem(qB.u)
```

#### 2736. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23928-L23929` → after: `L24044-L24045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24044-L24045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24044-L24045) · [Before (L23928-L23929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23928-L23929)

```diff
-       (0, wt.e)((() => {
-         Ct(tt) ? (0, Dt.n)().load().catch((tt => {
+       (0, gB.c)((() => {
+         CB(BB) ? (0, oB.r)().load().catch((BB => {
```

#### 2737. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23935` → after: `L24051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24051) · [Before (L23935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23935)

```diff
-   38958: (tt, et, Vt) => {
+   38795: (BB, IB, ZB) => {
```

#### 2738. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23937-L23938` → after: `L24053-L24054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24053-L24054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24053-L24054) · [Before (L23937-L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23937-L23938)

```diff
-       d: () => dt,
-       e: () => mt
+       e: () => vB,
+       i: () => GB
```

#### 2739. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23940-L23942` → after: `L24056-L24058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24056-L24058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24056-L24058) · [Before (L23940-L23942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23940-L23942)

```diff
-     var Ot = Vt(26),
-       qt = Vt(34326),
-       Dt = Vt(2984);
+     var TB = ZB(20),
+       JB = ZB(34126),
+       oB = ZB(3071);
```

#### 2740. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23946` → after: `L24062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24062) · [Before (L23946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23946)

```diff
-       return null !== (et = tt.parentElement) && void 0 !== et ? et : tt
+       return null !== (IB = BB.parentElement) && void 0 !== IB ? IB : BB
```

#### 2741. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23950-L23951` → after: `L24066-L24067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24066-L24067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24066-L24067) · [Before (L23950-L23951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23950-L23951)

```diff
-       if (tt.clientWidth <= 0 || tt.clientHeight <= 0 || qt.e.isHeld()) return null;
-       const Vt = (0, Dt.m)(),
+       if (BB.clientWidth <= 0 || BB.clientHeight <= 0 || JB.c.isHeld()) return null;
+       const ZB = (0, oB.o)(),
```

#### 2742. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23953` → after: `L24069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24069) · [Before (L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23953)

```diff
-       return (0, Dt.p)(mt, dt, Vt, Ot.b.get("clientEscMenuOptions").pixelScale)
+       return (0, oB.w)(GB, vB, ZB, TB.d.get("clientEscMenuOptions").pixelScale)
```

#### 2743. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23956` → after: `L24072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24072) · [Before (L23956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23956)

```diff
-   39325: (tt, et, Vt) => {
+   39184: (BB, IB, ZB) => {
```

#### 2744. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23958-L23959` → after: `L24074-L24075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24074-L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24074-L24075) · [Before (L23958-L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23958-L23959)

```diff
-       e: () => Jt,
-       g: () => bt
+       b: () => dB,
+       d: () => WB
```

#### 2745. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23961-L23972` → after: `L24077-L24088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24077-L24088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24077-L24088) · [Before (L23961-L23972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23961-L23972)

```diff
-     var Ot = Vt(229),
-       qt = Vt(2961),
-       Dt = Vt(1167),
-       mt = Vt(3015),
-       dt = Vt(36487),
-       jt = Vt(4637),
-       Ht = Vt(3772),
-       Xt = Vt(3643),
-       Qt = Vt(36498),
-       lt = Vt(36720),
-       Et = Vt(36729),
-       ft = Vt(31);
+     var TB = ZB(201),
+       JB = ZB(3036),
+       oB = ZB(1125),
+       GB = ZB(3110),
+       vB = ZB(36283),
+       kB = ZB(4682),
+       cB = ZB(3875),
+       nB = ZB(3733),
+       hB = ZB(36294),
+       zB = ZB(36506),
+       FB = ZB(36509),
+       NB = ZB(24);
```

#### 2746. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23995` → after: `L24111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24111) · [Before (L23995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23995)

```diff
-           (0, Ht.g)("memory", tt)
+           (0, cB.f)("memory", BB)
```

#### 2747. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23999` → after: `L24115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24115) · [Before (L23999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L23999)

```diff
-           const [et, Vt] = tt.sQ.rW, qt = Math.max(Ot.e.defaultChunkHorizAddDistance, et - wt);
+           const [IB, ZB] = BB.vz.Ip, JB = Math.max(TB.f.defaultChunkHorizAddDistance, IB - gB);
```

#### 2748. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24005` → after: `L24121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24121) · [Before (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24005)

```diff
-           return (0, jt.o)(qt), (0, jt.e)(tt.sQ, Dt), (0, lt.o)(...(0, jt.i)(Dt))
+           return (0, kB.p)(JB), (0, kB.c)(BB.vz, oB), (0, zB.u)(...(0, kB.g)(oB))
```

#### 2749. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24007` → after: `L24123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24123) · [Before (L24007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24007)

```diff
-         return null === Vt ? dt = et : Dt = -1 / 0, Vt
+         return null === ZB ? vB = IB : oB = -1 / 0, ZB
```

#### 2750. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24009-L24010` → after: `L24125-L24126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24125-L24126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24125-L24126) · [Before (L24009-L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24009-L24010)

```diff
-         1 === Vt ? Ct("shed", tt, Ot, et.memoryBytes()) : console.warn(`wasm memory: shed again (${tt}): shed ${Vt}`, Ot.wasmMemoryShed)
-       }), (() => tt.sQ.rW[0])), (0, qt.$)((() => {
+         1 === ZB ? CB("shed", BB, TB, IB.memoryBytes()) : console.warn(`wasm memory: shed again (${BB}): shed ${ZB}`, TB.wasmMemoryShed)
+       }), (() => BB.vz.Ip[0])), (0, JB.S)((() => {
```

#### 2751. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24017-L24019` → after: `L24133-L24135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24133-L24135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24133-L24135) · [Before (L24017-L24019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24017-L24019)

```diff
-       const Jt = ft.j.subscribe("appManagerUpdated|gameState", (tt => {
-         "inGame" === tt && (ft.j.unsubscribe(Jt), (0, Xt.e)((() => {
-           bt.reserveAtJoin((0, Et.j)(et.memoryBytes())), Qt()
+       const dB = NB.l.subscribe("appManagerUpdated|gameState", (BB => {
+         "inGame" === BB && (NB.l.unsubscribe(dB), (0, nB.c)((() => {
+           WB.reserveAtJoin((0, FB.i)(IB.memoryBytes())), hB()
```

#### 2752. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24041-L24043` → after: `L24157-L24159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24157-L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24157-L24159) · [Before (L24041-L24043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24041-L24043)

```diff
-       const qt = `wasm memory was refused (${et}): ${"shed"===tt?"the JS client lowered its view distance":"the JS client's view distance is at its floor"}`,
-         jt = `wasm_memory_${tt}_${et}_m${(0,Qt.j)(Ot)}`;
-       (0, Dt.Nw)(new Error(qt), {
+       const JB = `wasm memory was refused (${IB}): ${"shed"===BB?"the JS client lowered its view distance":"the JS client's view distance is at its floor"}`,
+         kB = `wasm_memory_${BB}_${IB}_m${(0,hB.e)(TB)}`;
+       (0, oB.Og)(new Error(JB), {
```

#### 2753. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24051` → after: `L24167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24167) · [Before (L24051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24051)

```diff
-   39081: (tt, et, Vt) => {
+   38934: (BB, IB, ZB) => {
```

#### 2754. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24053` → after: `L24169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24169) · [Before (L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24053)

```diff
-       b: () => Ot
+       c: () => TB
```

#### 2755. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24057` → after: `L24173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24173) · [Before (L24057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24057)

```diff
-   39068: (tt, et, Vt) => {
+   38919: (BB, IB, ZB) => {
```

#### 2756. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24061` → after: `L24176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24176) · [Before (L24061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24061)

```diff
-       h: () => Dt,
+       g: () => vB,
```

#### 2757. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24063-L24066` → after: `L24178-L24182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24178-L24182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24178-L24182) · [Before (L24063-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24063-L24066)

```diff
-       o: () => jt,
-       r: () => Xt,
-       s: () => Ht,
-       v: () => lt
+       m: () => FB,
+       p: () => kB,
+       t: () => nB,
+       x: () => cB,
+       z: () => zB
```

#### 2758. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24068-L24069` → after: `L24184-L24185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24184-L24185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24184-L24185) · [Before (L24068-L24069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24068-L24069)

```diff
-     var Ot = Vt(37331),
-       qt = Vt(37699);
+     var TB = ZB(37113),
+       JB = ZB(37504);
```

#### 2759. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24079` → after: `L24195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24195) · [Before (L24079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L24079)

```diff
-       return null !== tt && void 0 !== tt ? tt : et
+       return null !== BB && void 0 !== BB ? BB : IB
```
