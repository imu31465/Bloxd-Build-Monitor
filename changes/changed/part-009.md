# Changed — Bundle Modifications Report (Part 009 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `9 / 47` (**301** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L266-L287` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L610) · [Before (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L266-L287)

```diff
-       var FQ = "bruteForce" + (QQ ? "Full" : "Partial"),
-         LQ = [],
-         DQ = bQ.slice();
-       QQ || DQ.splice(3, 0, qQ);
-       var kQ = ["function " + FQ + "(" + DQ.join() + "){"];
- 
-       function vQ(FQ, qQ) {
-         var DQ = function(QQ, FQ, LQ) {
-           var qQ = "bruteForce" + (QQ ? "Red" : "Blue") + (FQ ? "Flip" : "") + (LQ ? "Full" : ""),
-             DQ = ["function ", qQ, "(", bQ.join(), "){", "var ", oQ, "=2*", wQ, ";"],
-             kQ = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
-             vQ = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (LQ ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
-           return QQ ? DQ.push(kQ, "Q", ":", vQ) : DQ.push(vQ, "Q", ":", kQ), LQ ? DQ.push("if(y1<x0||x1<y0)continue;") : FQ ? DQ.push("if(y0<=x0||x1<y0)continue;") : DQ.push("if(y0<x0||x1<y0)continue;"), DQ.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
-             name: qQ,
-             code: DQ.join("")
-           }
- ... (6 more removed lines; see GitHub link above)
+       return nk[kk]
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L291-L363` → after: `L613-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L613-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L613-L716) · [Before (L291-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L291-L363)

```diff
-   37856: (QQ, FQ, wQ) => {
-     QQ.exports = function(QQ, FQ, wQ, oQ, uQ, OQ, sQ, rQ, IQ) {
-       ! function(QQ, FQ) {
-         var wQ = 8 * qQ.log2(FQ + 1) * (QQ + 1) | 0,
-           oQ = qQ.nextPow2(pQ * wQ);
-         CQ.length < oQ && (LQ.free(CQ), CQ = LQ.mallocInt32(oQ));
-         var DQ = qQ.nextPow2(cQ * wQ);
-         SQ.length < DQ && (LQ.free(SQ), SQ = LQ.mallocDouble(DQ))
-       }(QQ, oQ + sQ);
-       var UQ, NQ = 0,
-         TQ = 2 * QQ;
-       iQ(NQ++, 0, 0, oQ, 0, sQ, wQ ? 16 : 0, -1 / 0, 1 / 0), wQ || iQ(NQ++, 0, 0, sQ, 0, oQ, 1, -1 / 0, 1 / 0);
-       for (; NQ > 0;) {
-         var KQ = (NQ -= 1) * pQ,
-           zQ = CQ[KQ],
-           lQ = CQ[KQ + 1],
- ... (57 more removed lines; see GitHub link above)
+   36668: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Dk
+     });
+     const Dk = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+ ... (88 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L365-L410` → after: `L718-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L718-L733) · [Before (L365-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L365-L410)

```diff
-       }
-     };
-     var LQ = wQ(37824),
-       qQ = wQ(37832),
-       oQ = wQ(37860),
-       DQ = oQ.partial,
-       kQ = oQ.full,
-       vQ = wQ(37848),
-       mQ = wQ(37864),
-       uQ = wQ(37868),
-       HQ = 128,
-       bQ = 1 << 22,
-       YQ = 1 << 22,
-       xQ = uQ("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
-       AQ = uQ("lo===p0", ["p0"]),
-       tQ = uQ("lo<p0", ["p0"]),
- ... (30 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L412-L433` → after: `L735-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L735-L744) · [Before (L412-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L412-L433)

```diff
-       }
-     }
- 
-     function RQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
-       var uQ = 2 * QQ,
-         HQ = kQ * uQ,
-         bQ = vQ[HQ + FQ];
-       QQ: for (var YQ = LQ, xQ = LQ * uQ; YQ < qQ; ++YQ, xQ += uQ) {
-         var AQ = DQ[YQ];
-         if (AQ !== mQ) {
-           var tQ = oQ[xQ + FQ],
-             eQ = oQ[xQ + FQ + QQ];
-           if (!(bQ < tQ || eQ < bQ)) {
-             for (var MQ = FQ + 1; MQ < QQ; ++MQ) {
-               tQ = oQ[xQ + MQ], eQ = oQ[xQ + MQ + QQ];
-               var GQ = vQ[HQ + MQ],
- ... (6 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L438-L468` → after: `L777-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L777-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L777-L831) · [Before (L438-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L438-L468)

```diff
-   37864: (QQ, FQ, wQ) => {
-     QQ.exports = function(QQ, FQ, wQ, DQ, kQ, vQ) {
-       if (DQ <= wQ + 1) return wQ;
-       var mQ = wQ,
-         uQ = DQ,
-         HQ = DQ + wQ >>> 1,
-         bQ = 2 * QQ,
-         YQ = HQ,
-         xQ = kQ[bQ * HQ + FQ];
-       for (; mQ < uQ;) {
-         if (uQ - mQ < qQ) {
-           oQ(QQ, FQ, mQ, uQ, kQ, vQ), xQ = kQ[bQ * HQ + FQ];
-           break
-         }
-         var AQ = uQ - mQ,
-           tQ = Math.random() * AQ + mQ | 0,
- ... (15 more removed lines; see GitHub link above)
+   37258: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(330),
+       fk = ik.n(Dk),
+       Sk = ik(1850);
+     let bk;
+     var rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk;
+     const wk = [1, 139, 0, 8, 11, "i", 17, "e", "f", "d", 255, "length", "b", 129, 201, "undefined", void 0, "c", 224, 3, "a", 63, 6, "fromCodePoint", 7, 12, "push", 102, 59, 94, 2, 22, 9, 159, 91, 200, 8191, 88, 13, 14, !1, !0, 203, "g", 4, 60, 210, 103, 115, 116, 117, null, 111 … [truncated]
+ 
+     function lk(...kk) {
+       return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
+         for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'PRUGCqKyY]t#cI.lmEX:bFw6)hQT7p2i!>r?O}o;NMZe~+{4BnJLsdWD|<=`5&AjVSaf,z3gH08ux"9%_v@(/[^$*1k', kk[-wk[1]] = "" + (kk[wk[2]] || ""), kk[-wk[4]] = kk[-wk[1]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[wk[6]] = -w … [truncated]
+           if (kk[wk[5]] = kk[wk[0]].indexOf(kk[-wk[1]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
+             if (kk[wk[6]] < wk[2]) kk[wk[6]] = kk[wk[5]];
+ ... (39 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L470-L476` → after: `L833-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L833-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L833-L854) · [Before (L470-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L470-L476)

```diff
-         RQ = vQ[uQ - 1];
-         if (vQ[uQ - 1] = vQ[YQ], vQ[YQ] = RQ, HQ < YQ) {
-           for (uQ = YQ - 1; mQ < uQ && kQ[bQ * (uQ - 1) + FQ] === xQ;) uQ -= 1;
-           uQ += 1
-         } else {
-           if (!(YQ < HQ)) break;
-           for (mQ = YQ + 1; mQ < uQ && kQ[bQ * mQ + FQ] === xQ;) mQ += 1
+     }());
+     const Yk = fk()[lk(wk[29])](),
+       Lk = fk()[lk(wk[29])](),
+       Ck = fk()[lk(wk[29])](),
+       Ak = fk()[lk(wk[29])](),
+       jk = fk()[lk(wk[29])](),
+       sk = fk()[lk(wk[29])](),
+       dk = fk()[lk(wk[29])](),
+       Vk = (...kk) => {
+         function ek(...kk) {
+           return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
+             for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = ';0v_[%(}1+)"MK/z!@UERdBc7guC]`Yf{DX9#oTV5tnIwA*xy4Fk$L63G2NZ~=.>ir:|q^bl<pS8m,Whe&?OjHJaQsP', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[-wk[31]] = kk[wk[30]].length, kk[wk[9]] = [], kk[-wk[35]] = wk[2], kk[wk[22]] = wk[2], kk[-w … [truncated]
+               if (kk[wk[32]] = kk[wk[20]].indexOf(kk[wk[30]][kk[wk[3]]]), kk[wk[32]] !== -wk[0])
+                 if (kk[-wk[33]] < wk[2]) kk[-wk[33]] = kk[wk[32]];
+                 else {
+                   Fk(kk[-wk[33]] += kk[wk[32]] * wk[34], kk[-wk[35]] |= kk[-wk[33]] << kk[wk[22]], kk[wk[22]] += (kk[-wk[33]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L478-L482` → after: `L856-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L856-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L856-L873) · [Before (L478-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L478-L482)

```diff
-       }
-       return LQ(QQ, FQ, wQ, HQ, kQ, vQ, kQ[bQ * HQ + FQ])
-     };
-     var LQ = wQ(37868)("lo<p0", ["p0"]),
-       qQ = 8;
+         kk[wk[11]] = wk[19], ek(95) + "R" in yk && function(...kk) {
+           Fk(kk[wk[11]] = wk[2], kk[-wk[42]] = function(...ek) {
+             return ek[wk[11]] = wk[30], kk[wk[12]]({}, ek[wk[2]], ek[wk[0]])
+           }, kk[wk[12]] = function(ek, ik, Dk) {
+             var fk, Sk, bk, rk = {};
+             if (ek[ik + Dk] !== wk[16]) return ek[ik + Dk];
+             if (ik === Dk) return wk[41];
+             for (fk = wk[2]; fk < ik.length; fk++) rk[ik[fk]] === wk[16] && (rk[ik[fk]] = wk[2]), rk[Dk[fk]] === wk[16] && (rk[Dk[fk]] = wk[2]), Fk(rk[ik[fk]]++, rk[Dk[fk]]--);
+             for (Sk in rk)
+               if (rk[Sk] !== wk[2]) return ek[ik + Dk] = wk[40], wk[40];
+             for (bk = wk[0]; bk < ik.length; bk++)
+               if (kk[wk[12]](ek, ik.substr(wk[2], bk), Dk.substr(wk[2], bk)) && kk[wk[12]](ek, ik.substr(bk), Dk.substr(bk)) || kk[wk[12]](ek, ik.substr(wk[2], bk), Dk.substr(Dk.length - bk)) && kk[wk[12]](ek, ik.substr(bk), Dk.substr(wk[2], Dk.length - bk))) return ek[ik + Dk] = … [truncated]
+             return ek[ik + Dk] = wk[40], wk[40]
+           }, console.log(kk[-wk[42]]))
+         }();
+         const ik = sk;
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L484-L489` → after: `L875-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L875-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L875-L892) · [Before (L484-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L484-L489)

```diff
-     function oQ(QQ, FQ, wQ, LQ, qQ, oQ) {
-       for (var DQ = 2 * QQ, kQ = DQ * (wQ + 1) + FQ, vQ = wQ + 1; vQ < LQ; ++vQ, kQ += DQ)
-         for (var mQ = qQ[kQ], uQ = vQ, HQ = DQ * (vQ - 1); uQ > wQ && qQ[HQ + FQ] > mQ; --uQ, HQ -= DQ) {
-           for (var bQ = HQ, YQ = HQ + DQ, xQ = 0; xQ < DQ; ++xQ, ++bQ, ++YQ) {
-             var AQ = qQ[bQ];
-             qQ[bQ] = qQ[YQ], qQ[YQ] = AQ
+     function Fk() {
+       Fk = function() {}
+     }
+     bk = (...kk) => {
+       function ek(...kk) {
+         return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(kk) {
+           var ek, ik, Dk, fk, Sk, bk, rk;
+           for (Fk(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = wk[2], Sk = wk[2], bk = -wk[0]), rk = wk[2]; rk < ik; rk++) {
+             var Pk = '~KOfC%u#&N"^z@h1.Xr}s;j?n+`5eEUqa{!/o,lZYvwFxgJdc3Mm7G8)S]*y6LP4QBkb0A$p=T>:HiV_(IW2<9R|[Dt'.indexOf(ek[rk]);
+             if (Pk !== -wk[0])
+               if (bk < wk[2]) bk = Pk;
+               else {
+                 Fk(bk += Pk * wk[34], fk |= bk << Sk, Sk += (bk & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                 do {
+                   Fk(Dk.push(fk & wk[10]), fk >>= wk[3], Sk -= wk[3])
+                 } while (Sk > wk[24]);
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L491-L492` → after: `L894-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L894-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L894-L917) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L491-L492)

```diff
-           var tQ = oQ[uQ];
-           oQ[uQ] = oQ[uQ - 1], oQ[uQ - 1] = tQ
+           return bk > -wk[0] && Dk.push((fk | bk << Sk) & wk[10]), pk(Dk)
+         }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
+       }
+       kk[wk[11]] = wk[3], ek(100) in yk && function(...kk) {
+         kk[wk[11]] = wk[2]
+       }();
+       const ik = kk[wk[2]][ek(wk[47])][ek(104) + ek(wk[95]) + ek(106)](kk[wk[0]]);
+       kk[wk[3]] = kk[wk[2]][ek(wk[47])][ek(wk[59]) + ek(wk[60]) + ek(wk[61]) + ek(wk[62])](ik);
+       const Dk = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[48]) + ek(wk[49]) + ek(wk[50]) + wk[7]) : kk[wk[3]][ek(wk[48]) + ek(wk[49]) + ek(wk[50]) + wk[7]],
+         bk = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[56]) + ek(wk[57]) + ek(wk[58])) : kk[wk[3]][ek(wk[56]) + ek(wk[57]) + ek(wk[58])];
+       Fk(fk()[ek(121)](Yk, wk[2], wk[2], kk[wk[73]]), fk().ei(Yk, Yk, fk()[ek(122)], kk[wk[19]].heading), fk()[ek(123)](dk, kk[wk[44]].Cw), dk[wk[0]] = wk[2]);
+       const mk = kk[wk[30]][ek(124) + ek(wk[70])]();
+       if (Fk(kk[wk[3]] = kk[wk[2]][ek(wk[47])][ek(wk[59]) + ek(wk[60]) + ek(wk[61]) + ek(wk[62])](ik), kk[wk[32]] = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(126) + ek(wk[63]) + ek(wk[64])](kk[wk[0]], ek(wk[13]) + ek(wk[65])) : kk[wk[3]][ek(wk[13]) + ek(wk[65])]), !mk && fk … [truncated]
+         function Uk(...kk) {
+           for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'Hd3pKN/muYJ^+n)]WZv#wE4BgQ%R`2!ej[h$&GF?VIf(_.zr:L8@l9XPD>xbcqi~U{AsktCMa,T";7S<5=|o0}61y*O', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[-wk[71]] = kk[wk[12]].length, kk[wk[44]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[wk[24]] … [truncated]
+             if (kk[wk[72]] = kk[wk[0]].indexOf(kk[wk[12]][kk[-wk[70]]]), kk[wk[72]] !== -wk[0])
+ ... (8 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L512-L519` → after: `L920-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L920-L921) · [Before (L512-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L512-L519)

```diff
-     function wQ(QQ, FQ, wQ) {
-       for (var LQ = 2 * (QQ + 1), qQ = QQ + 1; qQ <= FQ; ++qQ) {
-         for (var oQ = wQ[LQ++], DQ = wQ[LQ++], kQ = qQ, vQ = LQ - 2; kQ-- > QQ;) {
-           var mQ = wQ[vQ - 2],
-             uQ = wQ[vQ - 1];
-           if (mQ < oQ) break;
-           if (mQ === oQ && uQ < DQ) break;
-           wQ[vQ] = mQ, wQ[vQ + 1] = uQ, vQ -= 2
+         function Hk(kk) {
+           return typeof rk[kk] === wk[15] ? rk[kk] = Uk(Pk[kk]) : rk[kk]
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L521-L588` → after: `L923-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L923-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L923-L938) · [Before (L521-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L521-L588)

```diff
-         wQ[vQ] = oQ, wQ[vQ + 1] = DQ
-       }
-     }
- 
-     function LQ(QQ, FQ, wQ) {
-       FQ *= 2;
-       var LQ = wQ[QQ *= 2],
-         qQ = wQ[QQ + 1];
-       wQ[QQ] = wQ[FQ], wQ[QQ + 1] = wQ[FQ + 1], wQ[FQ] = LQ, wQ[FQ + 1] = qQ
-     }
- 
-     function qQ(QQ, FQ, wQ) {
-       FQ *= 2, wQ[QQ *= 2] = wQ[FQ], wQ[QQ + 1] = wQ[FQ + 1]
-     }
- 
-     function oQ(QQ, FQ, wQ, LQ) {
- ... (52 more removed lines; see GitHub link above)
+         Fk(Vk(Lk, Yk, dk), Vk(Ck, dk, Yk), fk()[Hk(135)](Ak, dk, Ck));
+         const lk = fk()[Hk(136)](dk),
+           sk = fk()[Hk(137)](Yk, dk) / kk[wk[73]] / lk,
+           uk = Math[Hk(wk[81])](sk, wk[2]) + wk[0];
+         if (kk[wk[73]] * kk[wk[73]] < fk()[wk[74]](Ck)) {
+           function qk(...kk) {
+             for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = 'wYNFRWiKZCMJPnTc16Ue3G49+fg5S7~#$:BXHd"hvjrxVDo=L;/0*(uy@asA{mOqI!?E<tz`b%lQ,k|2&^]>p}[8_).', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[wk[30]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[-wk[78]] = wk[2], kk[wk[7 … [truncated]
+               if (kk[-wk[76]] = kk[wk[20]].indexOf(kk[wk[30]][kk[wk[75]]]), kk[-wk[76]] !== -wk[0])
+                 if (kk[wk[77]] < wk[2]) kk[wk[77]] = kk[-wk[76]];
+                 else {
+                   Fk(kk[wk[77]] += kk[-wk[76]] * wk[34], kk[wk[7]] |= kk[wk[77]] << kk[-wk[78]], kk[-wk[78]] += (kk[wk[77]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                   do {
+                     Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[-wk[78]] -= wk[3])
+                   } while (kk[-wk[78]] > wk[24]);
+                   kk[wk[77]] = -wk[0]
+                 } return kk[wk[77]] > -wk[0] && kk[wk[9]].push((kk[wk[7]] | kk[wk[77]] << kk[-wk[78]]) & wk[10]), pk(kk[wk[9]])
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L590-L639` → after: `L940-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L940-L942) · [Before (L590-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L590-L639)

```diff
-           if (--iQ < fQ) break
-         }
-       DQ(QQ, SQ - 1, RQ, OQ, HQ), DQ(uQ, iQ + 1, sQ, rQ, HQ), SQ - 2 - QQ <= FQ ? wQ(QQ, SQ - 2, HQ) : mQ(QQ, SQ - 2, HQ), uQ - (iQ + 2) <= FQ ? wQ(iQ + 2, uQ, HQ) : mQ(iQ + 2, uQ, HQ), iQ - SQ <= FQ ? wQ(SQ, iQ, HQ) : mQ(SQ, iQ, HQ)
-     }
-   },
-   37848: (QQ, FQ, wQ) => {
-     QQ.exports = {
-       init: function(QQ) {
-         var FQ = qQ.nextPow2(QQ);
-         vQ.length < FQ && (LQ.free(vQ), vQ = LQ.mallocInt32(FQ));
-         mQ.length < FQ && (LQ.free(mQ), mQ = LQ.mallocInt32(FQ));
-         uQ.length < FQ && (LQ.free(uQ), uQ = LQ.mallocInt32(FQ));
-         HQ.length < FQ && (LQ.free(HQ), HQ = LQ.mallocInt32(FQ));
-         bQ.length < FQ && (LQ.free(bQ), bQ = LQ.mallocInt32(FQ));
-         YQ.length < FQ && (LQ.free(YQ), YQ = LQ.mallocInt32(FQ));
-         var wQ = 8 * FQ;
- ... (34 more removed lines; see GitHub link above)
+ 
+           function Ik(kk) {
+             return typeof rk[kk] === wk[15] ? rk[kk] = qk(Pk[kk]) : rk[kk]
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L642-L647` → after: `L946-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L946-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L946-L960) · [Before (L642-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L642-L647)

```diff
-       },
-       sweepComplete: function(QQ, FQ, wQ, LQ, qQ, DQ, kQ, eQ, MQ, GQ) {
-         for (var pQ = 0, cQ = 2 * QQ, CQ = QQ - 1, SQ = cQ - 1, iQ = wQ; iQ < LQ; ++iQ) {
-           var WQ = DQ[iQ] + 1 << 1,
-             RQ = cQ * iQ;
-           xQ[pQ++] = qQ[RQ + CQ], xQ[pQ++] = -WQ, xQ[pQ++] = qQ[RQ + SQ], xQ[pQ++] = WQ
+         Fk(kk[wk[32]] = (0, Sk.v)(kk[wk[32]], 1, Math[Hk(wk[81])](wk[0], Math[Hk(wk[84])](wk[2], -sk, wk[0] - lk / kk[wk[73]]))), fk()[Hk(142)](Yk, Yk, Ak))
+       }
+       const Mk = jk;
+       if (Fk(fk()[ek(143)](Mk, Yk, dk), Mk[wk[0]] = wk[2], kk[wk[18]] = fk()[ek(144)](Mk)), !mk) {
+         function zk(...kk) {
+           for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = '1w`/)"#@]~+65430.?LzgTREjhFI|GJYip&}d:DeU$tkv_;bH^9C%c<M!r(snmaZS=q,X[PfBOyWolxN>u8A*7KQ{V2', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[73]] = wk[2], kk[-wk[82]] = wk[2], kk[wk[24 … [truncated]
+             if (kk[wk[5]] = kk[wk[20]].indexOf(kk[wk[12]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
+               if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[5]];
+               else {
+                 Fk(kk[wk[24]] += kk[wk[5]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[-wk[82]], kk[-wk[82]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                 do {
+                   Fk(kk[wk[9]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[-wk[82]] -= wk[3])
+                 } while (kk[-wk[82]] > wk[24]);
+                 kk[wk[24]] = -wk[0]
+               } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[73]] | kk[wk[24]] << kk[-wk[82]]) & wk[10]), pk(kk[wk[9]])
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L649-L652` → after: `L962-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L962-L964) · [Before (L649-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L649-L652)

```diff
-         for (iQ = kQ; iQ < eQ; ++iQ) {
-           WQ = GQ[iQ] + 1 << 1;
-           var OQ = cQ * iQ;
-           xQ[pQ++] = MQ[OQ + CQ], xQ[pQ++] = 1 | -WQ, xQ[pQ++] = MQ[OQ + SQ], xQ[pQ++] = 1 | WQ
+ 
+         function Qk(...kk) {
+           return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = zk(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L654-L664` → after: `L966-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L966-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L966-L987) · [Before (L654-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L654-L664)

```diff
-         var sQ = pQ >>> 1;
-         oQ(xQ, sQ);
-         var rQ = 0,
-           IQ = 0,
-           UQ = 0;
-         for (iQ = 0; iQ < sQ; ++iQ) {
-           var NQ = 0 | xQ[2 * iQ + 1],
-             TQ = 1 & NQ;
-           if (iQ < sQ - 1 && NQ >> 1 === xQ[2 * iQ + 3] >> 1 && (TQ = 2, iQ += 1), NQ < 0) {
-             for (var KQ = -(NQ >> 1) - 1, zQ = 0; zQ < UQ; ++zQ) {
-               if (void 0 !== (lQ = FQ(bQ[zQ], KQ))) return lQ
+ 
+         function vk() {
+           module.exports = async (kk = (...kk) => {
+             throw kk[wk[11]] = wk[2], new Error(function(...kk) {
+               return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
+                 for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = '6;^/2)x{,04#"!}v:AfDYOt[~hEBy|%R9_CZab`Lw.5M=ugcUrNWQSeHjPIVm+s]K(*X?noJ3&F8q$7<T>d1lz@ikpG', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[wk[83]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[73]] = wk[2], kk[wk[22]] = wk[2], kk[w … [truncated]
+                   if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[12]][kk[wk[3]]]), kk[wk[32]] !== -wk[0])
+                     if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[32]];
+                     else {
+                       Fk(kk[wk[24]] += kk[wk[32]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[wk[22]], kk[wk[22]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                       do {
+                         Fk(kk[wk[9]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[wk[22]] -= wk[3])
+                       } while (kk[wk[22]] > wk[24]);
+                       kk[wk[24]] = -wk[0]
+                     } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[73]] | kk[wk[24]] << kk[wk[22]]) & wk[10]), pk(kk[wk[9]])
+               }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L666-L668` → after: `L989-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L989-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L989-L1002) · [Before (L666-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L666-L668)

```diff
-             if (0 !== TQ)
-               for (zQ = 0; zQ < rQ; ++zQ) {
-                 if (void 0 !== (lQ = FQ(vQ[zQ], KQ))) return lQ
+             return await (async () => {
+               function ek(...kk) {
+                 return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
+                   for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'L,8jn.e3^(Z&T$9CMP1YDV|]!Qy%wlWmo/HiXvOBNp*6sh+gdFtR~>E7@[_G)kux=zU"5I?J24cKbA`0;a#fqS<}{:r', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[-wk[84]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[wk[22]] = wk[2], kk … [truncated]
+                     if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[12]][kk[-wk[85]]]), kk[wk[32]] !== -wk[0])
+                       if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[32]];
+                       else {
+                         Fk(kk[wk[24]] += kk[wk[32]] * wk[34], kk[wk[7]] |= kk[wk[24]] << kk[wk[22]], kk[wk[22]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                         do {
+                           Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[22]] -= wk[3])
+                         } while (kk[wk[22]] > wk[24]);
+                         kk[wk[24]] = -wk[0]
+                       } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[7]] | kk[wk[24]] << kk[wk[22]]) & wk[10]), pk(kk[wk[9]])
+                 }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L670-L678` → after: `L1004-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1004-L1005) · [Before (L670-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L670-L678)

```diff
-             if (1 !== TQ)
-               for (zQ = 0; zQ < IQ; ++zQ) {
-                 var lQ;
-                 if (void 0 !== (lQ = FQ(uQ[zQ], KQ))) return lQ
-               }
-             0 === TQ ? tQ(vQ, mQ, rQ++, KQ) : 1 === TQ ? tQ(uQ, HQ, IQ++, KQ) : 2 === TQ && tQ(bQ, YQ, UQ++, KQ)
-           } else {
-             KQ = (NQ >> 1) - 1;
-             0 === TQ ? AQ(vQ, mQ, rQ--, KQ) : 1 === TQ ? AQ(uQ, HQ, IQ--, KQ) : 2 === TQ && AQ(bQ, YQ, UQ--, KQ)
+               return void 0 === await kk() ? ek(150) + wk[98] : ""
+             })(), wk[41]
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L681-L698` → after: `L1008-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1008-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1008-L1025) · [Before (L681-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L681-L698)

```diff
-       },
-       scanBipartite: function(QQ, FQ, wQ, LQ, qQ, kQ, uQ, HQ, bQ, YQ, eQ, MQ) {
-         var GQ = 0,
-           pQ = 2 * QQ,
-           cQ = FQ,
-           CQ = FQ + QQ,
-           SQ = 1,
-           iQ = 1;
-         LQ ? iQ = DQ : SQ = DQ;
-         for (var WQ = qQ; WQ < kQ; ++WQ) {
-           var RQ = WQ + SQ,
-             OQ = pQ * WQ;
-           xQ[GQ++] = uQ[OQ + cQ], xQ[GQ++] = -RQ, xQ[GQ++] = uQ[OQ + CQ], xQ[GQ++] = RQ
-         }
-         for (WQ = bQ; WQ < YQ; ++WQ) {
-           RQ = WQ + iQ;
- ... (2 more removed lines; see GitHub link above)
+         Qk(145) + "J" in yk && vk(), kk[wk[18]] *= kk[wk[32]]
+       }
+       const Kk = kk[wk[22]][ek(151) + ek(152) + ek(153)],
+         xk = Kk ? Math[ek(154)](Kk, kk[wk[18]]) : kk[wk[18]];
+       fk()[ek(155) + ek(156)](Mk, Mk);
+       const nk = kk[wk[24]] !== wk[51] && void 0 !== kk[wk[24]] ? kk[wk[24]] : kk[wk[22]][ek(wk[78]) + ek(158) + ek(wk[33]) + ek(160)];
+       if (xk > wk[2]) {
+         function Ek(...kk) {
+           for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = '1NAkTtdoGBZXqafpCFIjMgRlmSWHbDnVKhsJPQEeYiU.cr6LOu;>~97*,+{)#|%?/(5}[yv@:8_!w2]^`="$34<0xz&', kk[wk[86]] = "" + (kk[wk[2]] || ""), kk[wk[88]] = kk[wk[86]].length, kk[wk[38]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[-wk[13] … [truncated]
+             if (kk[wk[5]] = kk[wk[20]].indexOf(kk[wk[86]][kk[wk[87]]]), kk[wk[5]] !== -wk[0])
+               if (kk[-wk[13]] < wk[2]) kk[-wk[13]] = kk[wk[5]];
+               else {
+                 Fk(kk[-wk[13]] += kk[wk[5]] * wk[34], kk[wk[7]] |= kk[-wk[13]] << kk[wk[8]], kk[wk[8]] += (kk[-wk[13]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                 do {
+                   Fk(kk[wk[38]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[8]] -= wk[3])
+                 } while (kk[wk[8]] > wk[24]);
+ ... (2 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L700-L736` → after: `L1027-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1027-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1027-L1029) · [Before (L700-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L700-L736)

```diff
-         var rQ = GQ >>> 1;
-         oQ(xQ, rQ);
-         var IQ = 0;
-         for (WQ = 0; WQ < rQ; ++WQ) {
-           var UQ = 0 | xQ[2 * WQ + 1];
-           if (UQ < 0) {
-             var NQ = !1;
-             if ((RQ = -UQ) >= DQ ? (NQ = !LQ, RQ -= DQ) : (NQ = !!LQ, RQ -= 1), NQ) tQ(vQ, mQ, IQ++, RQ);
-             else {
-               var TQ = MQ[RQ],
-                 KQ = pQ * RQ,
-                 zQ = eQ[KQ + FQ + 1],
-                 lQ = eQ[KQ + FQ + 1 + QQ];
-               QQ: for (var jQ = 0; jQ < IQ; ++jQ) {
-                 var aQ = vQ[jQ],
-                   XQ = pQ * aQ;
- ... (21 more removed lines; see GitHub link above)
+ 
+         function hk(...kk) {
+           return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = Ek(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L738-L768` → after: `L1031-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1031-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1031-L1067) · [Before (L738-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L738-L768)

```diff
-         var SQ = AQ >>> 1;
-         oQ(xQ, SQ);
-         var iQ = 0;
-         for (GQ = 0; GQ < SQ; ++GQ) {
-           var WQ = 0 | xQ[2 * GQ + 1];
-           if (WQ < 0) {
-             if ((pQ = -WQ) >= DQ) vQ[iQ++] = pQ - DQ;
-             else {
-               var RQ = YQ[pQ -= 1],
-                 OQ = tQ * pQ,
-                 sQ = bQ[OQ + FQ + 1],
-                 rQ = bQ[OQ + FQ + 1 + QQ];
-               QQ: for (var IQ = 0; IQ < iQ; ++IQ) {
-                 var UQ = vQ[IQ],
-                   NQ = mQ[UQ];
-                 if (NQ === RQ) break;
- ... (15 more removed lines; see GitHub link above)
+         hk(161) in yk && (module.exports = async (kk = (...kk) => {
+           throw kk[wk[11]] = wk[2], new Error(function(...kk) {
+             if (kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15]) return rk[kk[wk[2]]] = function(...kk) {
+               for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = ',PDrKBHd01l)<5;t@9%Va4>bv+JEQsW:uLc_FnS2z]"XkAwTYmx7Zi|^=.jIU/*3Ny#&p6{GeC}Oh[f$Mqo!~8`g?R(', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[wk[17]] = kk[wk[30]].length, kk[wk[44]] = [], kk[wk[90]] = wk[2], kk[wk[22]] = wk[2], kk[wk … [truncated]
+                 if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[30]][kk[-wk[89]]]), kk[wk[32]] !== -wk[0])
+                   if (kk[wk[76]] < wk[2]) kk[wk[76]] = kk[wk[32]];
+                   else {
+                     Fk(kk[wk[76]] += kk[wk[32]] * wk[34], kk[wk[90]] |= kk[wk[76]] << kk[wk[22]], kk[wk[22]] += (kk[wk[76]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                     do {
+                       Fk(kk[wk[44]].push(kk[wk[90]] & wk[10]), kk[wk[90]] >>= wk[3], kk[wk[22]] -= wk[3])
+                     } while (kk[wk[22]] > wk[24]);
+                     kk[wk[76]] = -wk[0]
+                   } kk[wk[76]] > -wk[0] && kk[wk[44]].push((kk[wk[90]] | kk[wk[76]] << kk[wk[22]]) & wk[10]);
+               return pk(kk[wk[44]])
+             }(Pk[kk[wk[2]]]);
+             return rk[kk[wk[2]]]
+ ... (21 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L770-L863` → after: `L1069-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1069-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1069-L1083) · [Before (L770-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L770-L863)

```diff
-         }
-       }
-     };
-     var LQ = wQ(37824),
-       qQ = wQ(37832),
-       oQ = wQ(37851),
-       DQ = 1 << 28,
-       kQ = 1024,
-       vQ = LQ.mallocInt32(kQ),
-       mQ = LQ.mallocInt32(kQ),
-       uQ = LQ.mallocInt32(kQ),
-       HQ = LQ.mallocInt32(kQ),
-       bQ = LQ.mallocInt32(kQ),
-       YQ = LQ.mallocInt32(kQ),
-       xQ = LQ.mallocDouble(8192);
- 
- ... (78 more removed lines; see GitHub link above)
+           return await (async () => {
+             function ek(kk) {
+               return typeof rk[kk] === wk[15] ? rk[kk] = function(...kk) {
+                 for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = ']CosGVaYTMZjp!|uLS}B`>dv$_JbrlQH/I9"#mtE[7%,<0=2w@(xi^*D~8K?)UAhFf6yRPqNk4W.5egO3Xz;c&1n+{:', kk[-wk[95]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[-wk[95]].length, kk[wk[44]] = [], kk[wk[73]] = wk[2], kk[wk[3]] = wk[2], k … [truncated]
+                   if (kk[wk[5]] = kk[wk[20]].indexOf(kk[-wk[95]][kk[-wk[96]]]), kk[wk[5]] !== -wk[0])
+                     if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[5]];
+                     else {
+                       Fk(kk[wk[24]] += kk[wk[5]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[wk[3]], kk[wk[3]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
+                       do {
+                         Fk(kk[wk[44]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[wk[3]] -= wk[3])
+                       } while (kk[wk[3]] > wk[24]);
+                       kk[wk[24]] = -wk[0]
+                     } kk[wk[24]] > -wk[0] && kk[wk[44]].push((kk[wk[73]] | kk[wk[24]] << kk[wk[3]]) & wk[10]);
+                 return pk(kk[wk[44]])
+               }(Pk[kk]) : rk[kk]
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L866-L869` → after: `L1102-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1102-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1102-L1104) · [Before (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L866-L869)

```diff
-           QQ.length = 0
-         }(kQ.multiComps), kQ.removals.length && function(QQ) {
-           for (var FQ = 0; FQ < QQ.length; FQ++) {
-             QQ[FQ].flush()
+ 
+           function Xk(kk) {
+             return typeof rk[kk] === wk[15] ? rk[kk] = tk(Pk[kk]) : rk[kk]
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L871-L971` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1106) · [Before (L871-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L871-L971)

```diff
-           QQ.length = 0
-         }(kQ.removals)
-       }
-       this.AA = qQ, this._systems = oQ, this._renderSystems = DQ, this.XE = function(FQ) {
-         var LQ = wQ++;
-         return Array.isArray(FQ) && FQ.forEach((FQ => QQ.pT(LQ, FQ))), LQ
-       }, this.deleteEntity = function(FQ) {
-         return Object.keys(qQ).forEach((QQ => {
-           qQ[QQ].hash[FQ] && vQ(FQ, QQ)
-         })), QQ
-       }, this.wwQ = function(QQ) {
-         if (!QQ) throw new Error("Missing component definition");
-         var wQ = QQ.name;
-         if (!wQ) throw new Error("Component definition must have a name property.");
-         if ("string" !== typeof wQ) throw new Error("Component name must be a string.");
-         if ("" === wQ) throw new Error("Component name must be a non-empty string.");
- ... (85 more removed lines; see GitHub link above)
+           ak *= kk[wk[30]][Xk(169) + Xk(170)]
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L973-L986` → after: `L1108-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1108-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1108-L1116) · [Before (L973-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L973-L986)

```diff
-         return QQ
-       }, this.removeMultiComponent = function(wQ, LQ, oQ) {
-         var DQ = FQ[LQ],
-           vQ = qQ[LQ];
-         if (!vQ) throw new Error(`Unknown component: ${LQ}.`);
-         if (!DQ.multi) throw new Error("removeMultiComponent called on non-multi component");
-         return function(QQ, FQ, wQ, LQ) {
-           var qQ = wQ.hash[QQ];
-           if (qQ) {
-             var oQ = qQ[LQ];
-             oQ && (qQ[LQ] = null, FQ.rU && FQ.rU(QQ, oQ), kQ.multiComps.push({
-               entID: QQ,
-               data: wQ
-             }), mQ())
+         let Wk = kk[wk[30]][hk(171) + hk(172) + "ss"] * xk;
+         if (xk < .3) {
+           function Bk(...kk) {
+             Fk(kk[wk[11]] = wk[2], kk[wk[12]] = function(kk) {
+               var ek, ik, Dk, fk, Sk = kk.length;
+               for (Fk(ek = [], ik = wk[2]), Dk = wk[2]; Dk < Sk; Dk++) ek.push(Dk !== wk[2] && kk[Dk] > kk[Dk - wk[0]] ? ek[Dk - wk[0]] + wk[0] : wk[0]);
+               for (fk = Sk - wk[0]; fk >= wk[2]; fk--) fk !== Sk - wk[0] && kk[fk] > kk[fk + wk[0]] && (ek[fk] = Math.max(ek[fk], ek[fk + wk[0]] + wk[0])), ik += ek[fk];
+               return ik
+             }, console.log(kk[wk[12]]))
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L988-L1024` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1118) · [Before (L988-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L988-L1024)

```diff
-         }(wQ, DQ, vQ, oQ), QQ
-       }
-     };
-     var LQ = wQ(37790)
-   },
-   37790: QQ => {
-     function FQ(QQ, FQ) {
-       var wQ = QQ._map[FQ];
-       if (delete QQ.hash[FQ], delete QQ._map[FQ], wQ === QQ.list.length - 1) QQ.list.pop(), QQ._idList.pop();
-       else {
-         var LQ = QQ.list.pop();
-         QQ.list[wQ] = LQ;
-         var qQ = QQ._idList.pop();
-         QQ._idList[wQ] = qQ, QQ._map[qQ] = wQ
-       }
-     }
- ... (21 more removed lines; see GitHub link above)
+           hk(wk[89]) in yk && Bk(), Wk *= xk
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1026` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1120) · [Before (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L1026)

```diff
-         this._pendingRemovals.length = 0
+         ak > Wk && (ak = Wk), Fk(fk()[hk(174)](Mk, Mk, ak), kk[wk[44]][hk(175) + hk(176)](Mk))
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1030-L1607` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1125) · [Before (L1030-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L1030-L1607)

```diff
-   37579: (QQ, FQ, wQ) => {
-     QQ = wQ.nmd(QQ);
-     var LQ = "__lodash_hash_undefined__",
-       qQ = 9007199254740991,
-       oQ = "[object Arguments]",
-       DQ = "[object Boolean]",
-       kQ = "[object Date]",
-       vQ = "[object Function]",
-       mQ = "[object GeneratorFunction]",
-       uQ = "[object Map]",
-       HQ = "[object Number]",
-       bQ = "[object Object]",
-       YQ = "[object Promise]",
-       xQ = "[object RegExp]",
-       AQ = "[object Set]",
-       tQ = "[object String]",
- ... (562 more removed lines; see GitHub link above)
+   37253: (kk, ek, ik) => {
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1609-L1610` → after: `L1127-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1127-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1127-L1128) · [Before (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L1609-L1610)

```diff
-       Color3: () => LQ.b,
-       b: () => LQ.e
+       d: () => Pk,
+       f: () => rk
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1612-L1782` → after: `L1130-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1130-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L1130-L1184) · [Before (L1612-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L1612-L1782)

```diff
-     var LQ = wQ(36873);
-     (0, LQ.h)()
-   },
-   37320: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => qQ
-     });
-     var LQ = wQ(37324);
-     class qQ {
-       static GetPlanes(QQ) {
-         const FQ = [];
-         for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, FQ), FQ
-       }
-       static GetNearPlaneToRef(QQ, FQ) {
-         const wQ = QQ.m;
- ... (155 more removed lines; see GitHub link above)
+     var Dk = ik(37258),
+       fk = ik(1850);
+     const Sk = 2,
+       bk = 1,
+       rk = {
+         Or: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L2)

```diff
- export const ids = [224, 230, 233];
+ export const ids = [224];
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L4-L7)

```diff
-   39676: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ,
-       e: () => kQ
+   39356: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       getBlockFaces: () => xk,
+       getIngameIconUrl: () => Hk,
+       getItemIconUrl: () => Uk,
+       getItemTextureUrl: () => nk,
+       getParticleTextureUrl: () => wk
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L9-L15` → after: `L12-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L12-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L12-L30) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L9-L15)

```diff
-     var LQ = wQ(38203),
-       qQ = wQ(39426),
-       oQ = wQ(39642),
-       DQ = {};
-     class kQ {
-       constructor(QQ) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
+     var Dk = ik(4409),
+       fk = ik(36630),
+       Sk = ik(9011),
+       bk = ik(3128);
+     const rk = new Set,
+       Pk = new Set;
+     let mk = null;
+ 
+     function Mk(kk) {
+       rk.has(kk) || (rk.add(kk), Pk.add(kk), mk ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${Pk.size} names`, [...Pk]), Pk.clear(), mk = null
+       }), 1e3))
+     }
+ 
+     function Kk(kk, ek) {
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L17-L19` → after: `L32-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L32-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L32-L71) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L17-L19)

```diff
-       add(QQ) {
-         const FQ = QQ.getSimpleName();
-         this.attached[FQ] ? LQ.c.Warn("camera input of type " + FQ + " already exists on camera") : (this.attached[FQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(t … [truncated]
+     }
+ 
+     function xk(kk) {
+       var ek, ik;
+       const Sk = fk.q[kk];
+       if (!Sk || Sk.itemTexture || !Sk.textureInfo) return null;
+       const {
+         textureInfo: rk,
+         texturePerSide: Pk
+       } = Sk, mk = kk => {
+         return "string" === typeof(ek = Pk && Array.isArray(rk) ? rk[Pk[kk]] : rk) ? Kk(ek, bk.g.BLOCK) : ek && "object" === typeof ek && "animTextures" in ek ? Kk((0, Dk.n)(ek), bk.g.BLOCK) : null;
+         var ek
+       }, Mk = mk(2);
+       return Mk ? {
+         top: Mk,
+         left: null !== (ek = mk(4)) && void 0 !== ek ? ek : Mk,
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L96-L446` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L75) · [Before (L96-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L96-L446)

```diff
-   39678: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => LQ.c
-     });
-     var LQ = wQ(39686);
-     (0, LQ.e)()
-   },
-   39686: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => uQ,
-       e: () => bQ
-     });
-     var LQ = wQ(39402),
-       qQ = wQ(39409),
-       oQ = wQ(36696),
-       DQ = wQ(36873),
- ... (335 more removed lines; see GitHub link above)
+   36668: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L450-L482` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L79-L178) · [Before (L450-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L450-L482)

```diff
-     var LQ = wQ(36696),
-       qQ = wQ(39829),
-       oQ = wQ(39835),
-       DQ = wQ(39881),
-       kQ = wQ(39561),
-       vQ = wQ(38203);
- 
-     function mQ(QQ) {
-       const FQ = [],
-         wQ = [],
-         LQ = QQ.lines,
-         qQ = QQ.colors,
-         DQ = [];
-       let kQ = 0;
-       for (let oQ = 0; oQ < LQ.length; oQ++) {
-         const QQ = LQ[oQ];
- ... (17 more removed lines; see GitHub link above)
+     const Dk = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L485-L838` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/224.js#L237) · [Before (L485-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/224.js#L485-L838)

```diff
-       const vQ = new oQ.c;
-       return vQ.indices = FQ, vQ.positions = wQ, qQ && (vQ.colors = DQ), vQ
-     }
- 
-     function uQ(QQ) {
-       const FQ = QQ.dashSize || 3,
-         wQ = QQ.gapSize || 1,
-         qQ = QQ.dashNb || 200,
-         DQ = QQ.points,
-         kQ = [],
-         vQ = [],
-         mQ = LQ.p.Zero();
-       let uQ, HQ, bQ, YQ = 0,
-         xQ = 0;
-       for (bQ = 0; bQ < DQ.length - 1; bQ++) DQ[bQ + 1].subtractToRef(DQ[bQ], mQ), YQ += mQ.length();
-       const AQ = YQ / qQ,
- ... (338 more removed lines; see GitHub link above)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L2)

```diff
- export const ids = [225, 230];
+ export const ids = [225];
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   41239: (QQ, FQ, wQ) => {
+   36703: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L6)

```diff
-       c: () => DQ
+       d: () => Sk,
+       e: () => Dk,
+       i: () => fk
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8-L13836` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L10-L15) · [Before (L8-L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L8-L13836)

```diff
-     var LQ = wQ(41169),
-       qQ = wQ(39397);
-     let oQ = !1;
- 
-     function DQ() {
-       oQ || (oQ = !0, qQ.b.prototype._sphericalPolynomialTargetSize = 0, qQ.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(qQ.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = LQ.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = QQ, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
- ... (13813 more removed lines; see GitHub link above)
+     const Dk = 1 / 2.2,
+       fk = 2.2;
+     Math.sqrt(5);
+     let Sk = .001
+   },
+   36729: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13838-L13843` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L17) · [Before (L13838-L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13838-L13843)

```diff
-       const FQ = QQ.m;
-       return `( ${eD(FQ,0)}, ${eD(FQ,4)}, ${eD(FQ,8)}, ${eD(FQ,12)} )`
-     }
- 
-     function eD(QQ, FQ) {
-       return `(${QQ[FQ+0]}, ${QQ[FQ+1]}, ${QQ[FQ+2]}, ${QQ[FQ+3]})`
+       return parseInt(kk.toString().replace(/\W/g, ""))
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13847-L13849` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L21-L22) · [Before (L13847-L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13847-L13849)

```diff
-       const wQ = "Object_" + QQ.uniqueId,
-         LQ = tD(FQ);
-       return `def Xform "${wQ}" (\n\tprepend references = @./geometries/Geometry_${QQ.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${LQ}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(kk - ek) <= ik
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13852-L13869` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L25-L27) · [Before (L13852-L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13852-L13869)

```diff
-     function GD(QQ) {
-       switch (QQ) {
-         case SQ.d.TEXTURE_CLAMP_ADDRESSMODE:
-           return "clamp";
-         case SQ.d.TEXTURE_MIRROR_ADDRESSMODE:
-           return "mirror";
-         case SQ.d.TEXTURE_WRAP_ADDRESSMODE:
-         default:
-           return "repeat"
-       }
-     }
- 
-     function pD(QQ) {
-       return `(${QQ.x}, ${QQ.y})`
-     }
- 
- ... (2 more removed lines; see GitHub link above)
+     function Sk(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return kk < ek - Dk || kk > ik + Dk
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13872-L13873` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L30-L31) · [Before (L13872-L13873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13872-L13873)

```diff
-     function CD(QQ) {
-       return "image/jpeg" === QQ || "image/png" === QQ
+     function bk(kk, ek) {
+       return kk === ek ? kk : Math.random() * (ek - kk) + kk
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13876-L13892` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L34-L35) · [Before (L13876-L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13876-L13892)

```diff
-     function SD(QQ, FQ, wQ, qQ, oQ, DQ) {
-       const kQ = QQ.getInternalTexture().uniqueId + "_" + QQ.invertY,
-         mQ = QQ.mimeType || (0, vQ.d)(QQ.getInternalTexture()?.url ?? ""),
-         uQ = CD(mQ) ? mQ : "image/png",
-         HQ = "image/jpeg" === uQ ? "jpg" : "png";
-       oQ[kQ] = {
-         texture: QQ,
-         mimeType: uQ,
-         ext: HQ
-       };
-       const bQ = QQ.coordinatesIndex > 0 ? "st" + QQ.coordinatesIndex : "st",
-         YQ = new LQ.Vector2(QQ.uScale, QQ.vScale),
-         xQ = new LQ.Vector2(QQ.uOffset, QQ.vOffset),
-         AQ = QQ.wAng,
-         tQ = Math.sin(AQ),
-         eQ = Math.cos(AQ);
- ... (1 more removed lines; see GitHub link above)
+     function rk(kk, ek, ik) {
+       return kk + (ek - kk) * ik
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13896-L13982` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L39-L40) · [Before (L13896-L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13896-L13982)

```diff
-       const LQ = "\t\t\t",
-         qQ = [],
-         oQ = [],
-         {
-           diffuseMap: DQ,
-           diffuse: kQ,
-           alphaCutOff: vQ,
-           emissiveMap: mQ,
-           emissive: uQ,
-           normalMap: HQ,
-           roughnessMap: bQ,
-           roughnessChannel: YQ,
-           roughness: xQ,
-           metalnessMap: AQ,
-           metalnessChannel: eQ,
-           metalness: MQ,
- ... (71 more removed lines; see GitHub link above)
+       let Dk = wk(ek - kk, 360);
+       return Dk > 180 && (Dk -= 360), kk + Dk * xk(ik)
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13985-L14213` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L43-L45) · [Before (L13985-L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L13985-L14213)

```diff
-     function WD(QQ) {
-       QQ.computeWorldMatrix(!0);
-       const FQ = QQ.getWorldMatrix().clone(),
-         wQ = QQ.iN().useRightHandedSystem;
-       let LQ = QQ.material?._getEffectiveOrientation(QQ) ?? QQ.sideOrientation,
-         DQ = !wQ,
-         kQ = QQ.parent;
-       for (; kQ;) {
-         if (zw(kQ, wQ) && null === kQ.parent) {
-           wQ || (FQ.multiplyToRef(kQ.getWorldMatrix().invert(), FQ), LQ = LQ === oQ.d.ClockWiseSideOrientation ? oQ.d.CounterClockWiseSideOrientation : oQ.d.ClockWiseSideOrientation), DQ = !1;
-           break
-         }
-         kQ = kQ.parent
-       }
-       return FQ.determinant() < 0 && qQ.Tools.Warn(`Mesh ${QQ.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
-         matrix: FQ,
- ... (213 more removed lines; see GitHub link above)
+     function mk(kk, ek, ik) {
+       let Dk;
+       return Dk = kk != ek ? xk((ik - kk) / (ek - kk)) : 0, Dk
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14216-L14217` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L48-L51) · [Before (L14216-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14216-L14217)

```diff
-     function rD(QQ) {
-       return "string" === typeof QQ?.name
+     function Mk(kk, ek, ik, Dk, fk) {
+       const Sk = fk * fk,
+         bk = fk * Sk;
+       return kk * (2 * bk - 3 * Sk + 1) + ik * (-2 * bk + 3 * Sk) + ek * (bk - 2 * Sk + fk) + Dk * (bk - Sk)
```

#### 13. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14222-L14223` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L54-L56) · [Before (L14222-L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14222-L14223)

```diff
-     function ND(QQ, FQ) {
-       Object.prototype.hasOwnProperty.call(QQ.metadata, ID) || (QQ.metadata[ID] = []), QQ.metadata[ID].push(FQ)
+     function Kk(kk, ek, ik, Dk, fk) {
+       const Sk = fk * fk;
+       return 6 * (Sk - fk) * kk + (3 * Sk - 4 * fk + 1) * ek + 6 * (-Sk + fk) * ik + (3 * Sk - 2 * fk) * Dk
```

#### 14. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14227-L14237` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L60-L62) · [Before (L14227-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14227-L14237)

```diff
-       return (FQ, wQ) => {
-         FQ[UD] = QQ
-       }
-     }
- 
-     function KD() {
-       return (QQ, FQ) => ND(FQ, {
-         kind: "none",
-         prop: String(FQ.name),
-         ignore: !0
-       })
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(ik, Math.max(ek, kk))
```

#### 15. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14241-L14245` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L66) · [Before (L14241-L14245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14241-L14245)

```diff
-       return (FQ, wQ) => ND(wQ, {
-         kind: "attr",
-         prop: String(wQ.name),
-         ...QQ
-       })
+       return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
```

#### 16. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14249-L14253` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L70-L71) · [Before (L14249-L14253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14249-L14253)

```diff
-       return (FQ, wQ) => ND(wQ, {
-         kind: "elem",
-         prop: String(wQ.name),
-         ...QQ
-       })
+       const ek = kk.toString(16);
+       return kk <= 15 ? ("0" + ek).toUpperCase() : ek.toUpperCase()
```

#### 17. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14257-L14262` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L75-L83) · [Before (L14257-L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14257-L14262)

```diff
-       const FQ = "function" === typeof QQ ? QQ : QQ?.constructor,
-         wQ = FQ?.[Symbol.metadata];
-       if (!wQ) return [];
-       const LQ = [];
-       let qQ = wQ;
-       for (; qQ;) Object.prototype.hasOwnProperty.call(qQ, ID) && LQ.push(...qQ[ID]), qQ = Object.getPrototypeOf(qQ);
+       if (Math.log2) return Math.floor(Math.log2(kk));
+       if (kk < 0) return NaN;
+       if (0 === kk) return -1 / 0;
+       let ek = 0;
+       if (kk < 1) {
+         for (; kk < 1;) ek++, kk *= 2;
+         ek = -ek
+       } else if (kk > 1)
+         for (; kk > 1;) ek++, kk = Math.floor(kk / 2);
```

#### 18. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14266-L14268` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L87-L88) · [Before (L14266-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14266-L14268)

```diff
-     function aD(QQ) {
-       const FQ = QQ?.constructor?.[UD];
-       return FQ || void 0
+     function wk(kk, ek) {
+       return kk - Math.floor(kk / ek) * ek
```

#### 19. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14271-L14272` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L91-L92) · [Before (L14271-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14271-L14272)

```diff
-     function XD(QQ) {
-       return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(QQ)
+     function lk(kk, ek, ik) {
+       return (kk - ek) / (ik - ek)
```

#### 20. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14275-L14295` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L95-L96) · [Before (L14275-L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14275-L14295)

```diff
-     function fD(QQ) {
-       if (rD(QQ)) return QQ;
-       const FQ = (QQ ?? "").trim();
-       if (!FQ) return {
-         name: ""
-       };
-       const wQ = FQ.indexOf(":");
-       if (-1 === wQ) return {
-         name: FQ
-       };
-       if (-1 !== FQ.indexOf(":", wQ + 1)) return {
-         name: FQ
-       };
-       const LQ = FQ.slice(0, wQ),
-         qQ = FQ.slice(wQ + 1);
-       return XD(LQ) && XD(qQ) ? {
- ... (5 more removed lines; see GitHub link above)
+     function pk(kk, ek, ik) {
+       return kk * (ik - ek) + ek
```

#### 21. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14299` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L100-L101) · [Before (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14299)

```diff
-       return FQ ? `${FQ}:${QQ}` : QQ
+       let ik = wk(ek - kk, 360);
+       return ik > 180 && (ik -= 360), ik
```

#### 22. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14312-L14323` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L104-L106) · [Before (L14312-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14312-L14323)

```diff
-     function ED(QQ) {
-       const FQ = QQ?.eps ?? hD.eps;
-       return {
-         eps: FQ,
-         maxDecimalsCap: QQ?.maxDecimalsCap ?? hD.maxDecimalsCap,
-         trimTrailingZeros: QQ?.trimTrailingZeros ?? hD.trimTrailingZeros,
-         fixedDecimals: QQ?.fixedDecimals,
-         allowScientific: QQ?.allowScientific ?? hD.allowScientific,
-         snapNearZero: QQ?.snapNearZero ?? hD.snapNearZero,
-         zeroThreshold: QQ?.zeroThreshold ?? FQ,
-         perAttributeEps: QQ?.perAttributeEps
-       }
+     function Yk(kk, ek) {
+       const ik = wk(kk, 2 * ek);
+       return ek - Math.abs(ik - ek)
```

#### 23. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14326-L14351` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L109-L111) · [Before (L14326-L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14326-L14351)

```diff
-     function nD(QQ) {
-       return {
-         number: ED(QQ?.number)
-       }
-     }
-     class gD {
-       constructor(QQ) {
-         if (this.o = QQ, this._o = QQ.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
-       }
-       toString(QQ) {
-         if (!Number.isFinite(QQ)) throw new Error(`Cannot format non-finite number: ${QQ}`);
-         const FQ = this._o,
-           wQ = this._clampInt(FQ.maxDecimalsCap ?? 15, 0, 20),
-           LQ = FQ.trimTrailingZeros ?? !0,
-           qQ = FQ.snapNearZero ?? !0,
-           oQ = FQ.zeroThreshold ?? FQ.eps,
- ... (10 more removed lines; see GitHub link above)
+     function Lk(kk, ek, ik) {
+       let Dk = xk(ik);
+       return Dk = -2 * Dk * Dk * Dk + 3 * Dk * Dk, ek * Dk + kk * (1 - Dk)
```

#### 24. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14354-L14355` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L114-L116) · [Before (L14354-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14354-L14355)

```diff
-     function PD(QQ) {
-       return QQ instanceof Date
+     function Ck(kk, ek, ik) {
+       let Dk;
+       return Dk = Math.abs(ek - kk) <= ik ? ek : kk + Math.sign(ek - kk) * ik, Dk
```

#### 25. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14358-L14359` → after: `L119-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L119-L122) · [Before (L14358-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14358-L14359)

```diff
-     function ZD(QQ) {
-       return "string" === typeof QQ
+     function Ak(kk, ek, ik) {
+       const Dk = yk(kk, ek);
+       let fk;
+       return fk = -ik < Dk && Dk < ik ? ek : Ck(kk, ek = kk + Dk, ik), fk
```

#### 26. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14362-L14363` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L125-L126) · [Before (L14362-L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14362-L14363)

```diff
-     function yD(QQ) {
-       return "string" === typeof QQ || "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || PD(QQ)
+     function jk(kk, ek, ik) {
+       return (kk - ek) / (ik - ek)
```

#### 27. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14366-L15896` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L129-L130) · [Before (L14366-L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L14366-L15896)

```diff
-     function BD(QQ) {
-       return "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || PD(QQ)
-     }
-     class dD {
-       constructor(QQ, FQ) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = QQ, this._format = nD(FQ), this._nFmt = new gD(this._format)
-       }
-       withNamespace() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         for (const LQ of FQ) this._assignNamespace(LQ);
-         return this
-       }
-       serialize(QQ, FQ) {
-         if (!(FQ = FQ ?? aD(QQ))) throw new Error("can not find name for given object");
-         const wQ = fD(FQ);
-         wQ.ns && this._assignNamespace(wQ.ns, "xmlns"), this._gatherNamespaces(QQ, new WeakSet);
- ... (1515 more removed lines; see GitHub link above)
+     function sk(kk, ek, ik) {
+       return (ik - ek) * kk + ek
```

#### 28. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15898-L15939` → after: `L132-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L132-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L132-L135) · [Before (L15898-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L15898-L15939)

```diff
-     class Ek extends hk {
-       constructor(QQ) {
-         super(QQ, mk.model)
-       }
-       withPostProcessHandlers(QQ, FQ) {
-         return this._vh = QQ, this._th = FQ, this
-       }
-       withData(QQ) {
-         return this._object.content = this._buildMesh(QQ), this
-       }
-       withMaterial(QQ, FQ) {
-         return this._object.pid = QQ, this._object.pindex = FQ, this
-       }
-       _buildMesh(QQ) {
-         const FQ = this._buildVertices(QQ.positions),
-           wQ = this._buildTriangle(QQ.indices);
- ... (26 more removed lines; see GitHub link above)
+ 
+     function dk(kk, ek) {
+       const ik = kk % ek;
+       return 0 === ik ? ek : dk(ek, ik)
```

#### 29. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15941-L15962` → after: `L137-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L137-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L137-L181) · [Before (L15941-L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L15941-L15962)

```diff
-     class nk {
-       constructor(QQ) {
-         this._m = new ak(QQ)
-       }
-       withColor(QQ, FQ) {
-         this._m.base = this._m.base ?? [];
-         let wQ = this._m.base.find((FQ => FQ.name.toLowerCase() === QQ.toLowerCase()));
-         return wQ ? (wQ.displaycolor = this._rgbaToHex(FQ), this) : (wQ = new Xk(QQ, this._rgbaToHex(FQ)), this._m.base.push(wQ), this)
-       }
-       build() {
-         return this._m
-       }
-       _rgbaToHex(QQ) {
-         const FQ = QQ => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(QQ, 1 / 2.2)))),
-           wQ = FQ(QQ.r).toString(16).padStart(2, "0").toUpperCase(),
-           LQ = FQ(QQ.g).toString(16).padStart(2, "0").toUpperCase(),
- ... (6 more removed lines; see GitHub link above)
+     ik.r(ek), ik.d(ek, {
+       Clamp: () => xk,
+       DeltaAngle: () => yk,
+       Denormalize: () => pk,
+       ExtractAsInt: () => Dk,
+       Hermite: () => Mk,
+       Hermite1stDerivative: () => Kk,
+       HighestCommonFactor: () => dk,
+       ILog2: () => Hk,
+       InverseLerp: () => mk,
+       Lerp: () => rk,
+       LerpAngle: () => Pk,
+       MoveTowards: () => Ck,
+       MoveTowardsAngle: () => Ak,
+       Normalize: () => lk,
+       NormalizeRadians: () => nk,
+ ... (29 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15964-L15993` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L183-L185) · [Before (L15964-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L15964-L15993)

```diff
-     class gk {
-       constructor() {
-         this._model = new Rk, this._objects = new Map
-       }
-       withMetaData(QQ, FQ, wQ, LQ) {
-         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Ok(QQ, FQ, wQ, LQ)), this
-       }
-       withMaterial(QQ) {
-         return QQ instanceof nk && (QQ = QQ.build()), QQ && (this._model.resources = this._model.resources ?? new rk, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(QQ)), this
-       }
-       withMesh(QQ) {
-         return QQ instanceof Ek && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new rk, this._model.resources.object.push(QQ), this
-       }
-       withComponents(QQ) {
-         return QQ instanceof Jk && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new rk, this._model.resources.object.push(QQ), this
-       }
- ... (14 more removed lines; see GitHub link above)
+ 
+     function fk(kk, ek) {
+       return Dk(kk, ek)
```

#### 31. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15995-L16015` → after: `L187-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L187-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L187-L207) · [Before (L15995-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L15995-L16015)

```diff
-     gk.KnownMetaSet = new Set(Rk.KnownMeta.map((QQ => QQ.toLowerCase())));
-     class Pk {
-       withContentType(QQ) {
-         this._cts || (this._cts = new Gk);
-         const FQ = this._cts.items;
-         return FQ.some((FQ => FQ.ext === QQ.ext && FQ.ct === QQ.ct)) || FQ.push(QQ), this
-       }
-       withRelationship(QQ) {
-         this._rs || (this._rs = new ck);
-         const FQ = this._rs.items;
-         return FQ.some((FQ => FQ.id === QQ.id)) || FQ.push(QQ), this.withContentType(new pk("rels", bk.Relationships)), this
-       }
-       withModel(QQ) {
-         return QQ instanceof gk && (QQ = QQ.build()), this._m = QQ, this.withContentType(new pk("model", bk.Model)), this
-       }
-       build() {
- ... (5 more removed lines; see GitHub link above)
+     ik.d(ek, {
+       c: () => Dk,
+       e: () => fk,
+       h: () => bk
+     });
+     const Sk = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function bk(kk, ek) {
+       const ik = Sk.map((ik => function(kk, ek, ik) {
+         const Dk = kk[ek];
+         if ("function" !== typeof Dk) return null;
+         const fk = function() {
+           const Dk = kk.length,
+             Sk = fk.previous.apply(kk, arguments);
+           return ik(ek, Dk), Sk
+         };
+ ... (5 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16017-L16058` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L209-L211) · [Before (L16017-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L16017-L16058)

```diff
-         return new Sk(this._cts, this._rs, this._m)
-       }
-     }
-     class Zk {
-       constructor(QQ) {
-         this._o = QQ
-       }
-       get options() {
-         return this._o
-       }
-       async serializeAsync(QQ) {
-         const FQ = await this.ensureZipLibReadyAsync();
-         if (!FQ) return;
-         const wQ = FQ.Zip,
-           LQ = FQ.ZipDeflate;
-         if (!wQ || !LQ) throw new Error("fflate Zip / ZipDeflate not available");
- ... (26 more removed lines; see GitHub link above)
+       }(kk, ik, ek)));
+       return () => {
+         for (const kk of ik) kk?.()
```

#### 33. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16061-L16091` → after: `L214-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L214-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L214-L223) · [Before (L16061-L16091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L16061-L16091)

```diff
-     class yk {
-       static async SerializeToMemoryAsync(QQ) {
-         const FQ = new Array;
-         let wQ = 0;
-         for (var LQ = arguments.length, qQ = new Array(LQ > 1 ? LQ - 1 : 0), oQ = 1; oQ < LQ; oQ++) qQ[oQ - 1] = arguments[oQ];
-         if (await QQ.serializeAsync((function(QQ, LQ, qQ) {
-             FQ.push(LQ), wQ += LQ.length
-           }), ...qQ), !wQ) return;
-         const DQ = new Uint8Array(wQ);
-         let kQ = 0;
-         for (const vQ of FQ) DQ.set(vQ, kQ), kQ += vQ.length;
-         return DQ
-       }
-     }
-     class Bk {}
-     Bk.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
- ... (15 more removed lines; see GitHub link above)
+   },
+   36734: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Sk,
+       h: () => fk
+     });
+     const Dk = {};
+ 
+     function fk(kk, ek) {
+       Dk[kk] = ek
```

#### 34. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16093-L16192` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/225.js#L225-L227) · [Before (L16093-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/225.js#L16093-L16192)

```diff
-     class Qv extends Zk {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         super({
-           ...Qv.DefaultOptions,
-           ...QQ
-         })
-       }
-       toModel(QQ) {
-         for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
-         wQ = wQ.filter((QQ => QQ instanceof uL.c || QQ instanceof YQ.e));
-         const qQ = new dk,
-           oQ = QQ,
-           DQ = new Map,
-           kQ = this.options.exportInstances ? [] : null;
-         for (let vQ = 0; vQ < wQ.length; vQ++) {
- ... (84 more removed lines; see GitHub link above)
+ 
+     function Sk(kk) {
+       return Dk[kk]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2)

```diff
- export const ids = [226];
+ export const ids = [226, 233];
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4-L15` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L5-L7) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L4-L15)

```diff
-   36720: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ
-     });
-     var LQ = wQ(36722);
-     class qQ {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+   37881: kk => {
+     kk.exports = function(kk) {
+       return null != kk && null != kk.constructor && "function" === typeof kk.constructor.isBuffer && kk.constructor.isBuffer(kk)
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L19-L21` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L10-L25) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L19-L21)

```diff
-   36717: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ
+   37867: (kk, ek, ik) => {
+     var Dk = ik(37871),
+       fk = ik(37877),
+       Sk = ik(37881);
+     ik.g.__TYPEDARRAY_POOL || (ik.g.__TYPEDARRAY_POOL = {
+       UINT8: fk([32, 0]),
+       UINT16: fk([32, 0]),
+       UINT32: fk([32, 0]),
+       INT8: fk([32, 0]),
+       INT16: fk([32, 0]),
+       INT32: fk([32, 0]),
+       FLOAT: fk([32, 0]),
+       DOUBLE: fk([32, 0]),
+       DATA: fk([32, 0]),
+       UINT8C: fk([32, 0]),
+       BUFFER: fk([32, 0])
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L23-L32` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L27-L37) · [Before (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L23-L32)

```diff
-     class LQ {
-       static SetMatrixPrecision(QQ) {
-         if (LQ.MatrixTrackPrecisionChange = !1, QQ && !LQ.MatrixUse64Bits && LQ.MatrixTrackedMatrices)
-           for (let FQ = 0; FQ < LQ.MatrixTrackedMatrices.length; ++FQ) {
-             const QQ = LQ.MatrixTrackedMatrices[FQ],
-               wQ = QQ._m;
-             QQ._m = new Array(16);
-             for (let FQ = 0; FQ < 16; ++FQ) QQ._m[FQ] = wQ[FQ]
-           }
-         LQ.MatrixUse64Bits = QQ, LQ.MatrixCurrentType = LQ.MatrixUse64Bits ? Array : Float32Array, LQ.MatrixTrackedMatrices = null
+     var bk = "undefined" !== typeof Uint8ClampedArray,
+       rk = ik.g.__TYPEDARRAY_POOL;
+     rk.UINT8C || (rk.UINT8C = fk([32, 0])), rk.BUFFER || (rk.BUFFER = fk([32, 0]));
+     var Pk = rk.DATA,
+       mk = rk.BUFFER;
+ 
+     function Mk(kk) {
+       if (kk) {
+         var ek = kk.length || kk.byteLength,
+           ik = Dk.log2(ek);
+         Pk[ik].push(kk)
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L49` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L42-L45) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L49)

```diff
-       QQ.updateFlag = LQ._UpdateFlagSeed++
+       kk = Dk.nextPow2(kk);
+       var ek = Dk.log2(kk),
+         ik = Pk[ek];
+       return ik.length > 0 ? ik.pop() : new ArrayBuffer(kk)
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L52-L88` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L48-L49) · [Before (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L52-L88)

```diff
-     function oQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const qQ = QQ.RLQ(),
-         oQ = FQ.RLQ(),
-         DQ = qQ[0],
-         kQ = qQ[1],
-         vQ = qQ[2],
-         mQ = qQ[3],
-         uQ = qQ[4],
-         HQ = qQ[5],
-         bQ = qQ[6],
-         YQ = qQ[7],
-         xQ = qQ[8],
-         AQ = qQ[9],
-         tQ = qQ[10],
-         eQ = qQ[11],
- ... (21 more removed lines; see GitHub link above)
+     function xk(kk) {
+       return new Uint8Array(Kk(kk), 0, kk)
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L91-L93` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L52-L53) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L91-L93)

```diff
-     function DQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       oQ(QQ, FQ, wQ.RLQ(), LQ), qQ(wQ)
+     function nk(kk) {
+       return new Uint16Array(Kk(2 * kk), 0, kk)
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L96-L99` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L56-L57) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L96-L99)

```diff
-     function kQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const LQ = QQ.RLQ();
-       FQ[wQ] = LQ[0], FQ[wQ + 1] = LQ[1], FQ[wQ + 2] = LQ[2], FQ[wQ + 3] = LQ[3], FQ[wQ + 4] = LQ[4], FQ[wQ + 5] = LQ[5], FQ[wQ + 6] = LQ[6], FQ[wQ + 7] = LQ[7], FQ[wQ + 8] = LQ[8], FQ[wQ + 9] = LQ[9], FQ[wQ + 10] = LQ[10], FQ[wQ + 11] = LQ[11], FQ[wQ + 12] = LQ[12], FQ[wQ + 13]  … [truncated]
+     function Uk(kk) {
+       return new Uint32Array(Kk(4 * kk), 0, kk)
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L102-L104` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L60-L61) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L102-L104)

```diff
-     function vQ(QQ, FQ) {
-       const wQ = mQ(QQ, FQ.RLQ());
-       return wQ && qQ(FQ), wQ
+     function Hk(kk) {
+       return new Int8Array(Kk(kk), 0, kk)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L107-L164` → after: `L64-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L64-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L64-L133) · [Before (L107-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L107-L164)

```diff
-     function mQ(QQ, FQ) {
-       const wQ = QQ.RLQ(),
-         LQ = wQ[0],
-         qQ = wQ[1],
-         oQ = wQ[2],
-         DQ = wQ[3],
-         kQ = wQ[4],
-         vQ = wQ[5],
-         mQ = wQ[6],
-         uQ = wQ[7],
-         HQ = wQ[8],
-         bQ = wQ[9],
-         YQ = wQ[10],
-         xQ = wQ[11],
-         AQ = wQ[12],
-         tQ = wQ[13],
- ... (42 more removed lines; see GitHub link above)
+     function wk(kk) {
+       return new Int16Array(Kk(2 * kk), 0, kk)
+     }
+ 
+     function lk(kk) {
+       return new Int32Array(Kk(4 * kk), 0, kk)
+     }
+ 
+     function pk(kk) {
+       return new Float32Array(Kk(4 * kk), 0, kk)
+     }
+ 
+     function yk(kk) {
+       return new Float64Array(Kk(8 * kk), 0, kk)
+     }
+ 
+ ... (54 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L166-L397` → after: `L135-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L135-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L135-L221) · [Before (L166-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L166-L397)

```diff
-   36696: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => AQ,
-       e: () => xQ,
-       i: () => pQ,
-       k: () => eQ,
-       n: () => HQ,
-       p: () => bQ,
-       t: () => YQ
-     });
-     var LQ = wQ(36705),
-       qQ = wQ(36709),
-       oQ = wQ(36717),
-       DQ = wQ(36720),
-       kQ = wQ(36729),
-       vQ = wQ(36732),
- ... (216 more removed lines; see GitHub link above)
+   37871: (kk, ek) => {
+     function ik(kk) {
+       var ek = 32;
+       return (kk &= -kk) && ek--, 65535 & kk && (ek -= 16), 16711935 & kk && (ek -= 8), 252645135 & kk && (ek -= 4), 858993459 & kk && (ek -= 2), 1431655765 & kk && (ek -= 1), ek
+     }
+     ek.INT_BITS = 32, ek.INT_MAX = 2147483647, ek.INT_MIN = -1 << 31, ek.sign = function(kk) {
+       return (kk > 0) - (kk < 0)
+     }, ek.abs = function(kk) {
+       var ek = kk >> 31;
+       return (kk ^ ek) - ek
+     }, ek.min = function(kk, ek) {
+       return ek ^ (kk ^ ek) & -(kk < ek)
+     }, ek.max = function(kk, ek) {
+       return kk ^ (kk ^ ek) & -(kk < ek)
+     }, ek.isPow2 = function(kk) {
+       return !(kk & kk - 1) && !!kk
+ ... (71 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L399-L400` → after: `L223-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L223-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L223-L244) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L399-L400)

```diff
-       static ClampToRef(QQ, FQ, wQ, LQ) {
-         return LQ.x = (0, kQ.Clamp)(QQ.x, FQ.x, wQ.x), LQ.y = (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y), LQ
+       return Sk
+     }
+ 
+     function mk(kk, ek, ik, Dk) {
+       var rk = kk.length,
+         mk = ek.length;
+       if (!(rk <= 0 || mk <= 0)) {
+         var Mk = kk[0].length >>> 1;
+         if (!(Mk <= 0)) {
+           var Kk, xk = fk.mallocDouble(2 * Mk * rk),
+             nk = fk.mallocInt32(rk);
+           if ((rk = Pk(kk, Mk, xk, nk)) > 0) {
+             if (1 === Mk && Dk) Sk.init(rk), Kk = Sk.sweepComplete(Mk, ik, 0, rk, xk, nk, 0, rk, xk, nk);
+             else {
+               var Uk = fk.mallocDouble(2 * Mk * mk),
+                 Hk = fk.mallocInt32(mk);
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L402-L405` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L246-L283) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L402-L405)

```diff
-       static Clamp(QQ, FQ, wQ) {
-         const LQ = (0, kQ.Clamp)(QQ.x, FQ.x, wQ.x),
-           qQ = (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y);
-         return new HQ(LQ, qQ)
+     }
+ 
+     function Mk(kk, ek) {
+       Dk.push([kk, ek])
+     }
+   },
+   37902: (kk, ek) => {
+     var ik = "d",
+       Dk = "ax",
+       fk = "fp",
+       Sk = "es",
+       bk = "rs",
+       rk = "re",
+       Pk = "rb",
+       mk = "bs",
+       Mk = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L407-L408` → after: `L285-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L285-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L285-L310) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L407-L408)

```diff
-       static Hermite(QQ, FQ, wQ, LQ, qQ) {
-         const oQ = qQ * qQ,
+       rk.push("if(re-rs>be-bs){"), kk ? (Pk(!0, !1), rk.push("}else{"), Pk(!1, !1)) : (rk.push("if(fp){"), Pk(!0, !0), rk.push("}else{"), Pk(!0, !1), rk.push("}}else{if(fp){"), Pk(!1, !0), rk.push("}else{"), Pk(!1, !1), rk.push("}")), rk.push("}}return " + ek);
+       var mk = Dk.join("") + rk.join("");
+       return new Function(mk)()
+     }
+     ek.partial = nk(!1), ek.full = nk(!0)
+   },
+   37895: (kk, ek, ik) => {
+     kk.exports = function(kk, ek, ik, Sk, Mk, Vk, Fk, uk, qk) {
+       ! function(kk, ek) {
+         var ik = 8 * fk.log2(ek + 1) * (kk + 1) | 0,
+           Sk = fk.nextPow2(Yk * ik);
+         Ck.length < Sk && (Dk.free(Ck), Ck = Dk.mallocInt32(Sk));
+         var bk = fk.nextPow2(Lk * ik);
+         Ak.length < bk && (Dk.free(Ak), Ak = Dk.mallocDouble(bk))
+       }(kk, Sk + Fk);
+       var Ik, zk = 0,
+ ... (10 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L410-L486` → after: `L312-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L312-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L312-L364) · [Before (L410-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L410-L486)

```diff
-           kQ = 2 * DQ - 3 * oQ + 1,
-           vQ = -2 * DQ + 3 * oQ,
-           mQ = DQ - 2 * oQ + qQ,
-           uQ = DQ - oQ,
-           bQ = QQ.x * kQ + wQ.x * vQ + FQ.x * mQ + LQ.x * uQ,
-           YQ = QQ.y * kQ + wQ.y * vQ + FQ.y * mQ + LQ.y * uQ;
-         return new HQ(bQ, YQ)
-       }
-       static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
-         return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, new HQ)
-       }
-       static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
-         const DQ = qQ * qQ;
-         return oQ.x = 6 * (DQ - qQ) * QQ.x + (3 * DQ - 4 * qQ + 1) * FQ.x + 6 * (-DQ + qQ) * wQ.x + (3 * DQ - 2 * qQ) * LQ.x, oQ.y = 6 * (DQ - qQ) * QQ.y + (3 * DQ - 4 * qQ + 1) * FQ.y + 6 * (-DQ + qQ) * wQ.y + (3 * DQ - 2 * qQ) * LQ.y, oQ
-       }
-       static Lerp(QQ, FQ, wQ) {
- ... (61 more removed lines; see GitHub link above)
+           ck = Ak[Bk],
+           Tk = Ak[Bk + 1],
+           Zk = 1 & Xk,
+           Ok = !!(16 & Xk),
+           gk = Mk,
+           Gk = Vk,
+           Nk = uk,
+           Rk = qk;
+         if (Zk && (gk = uk, Gk = qk, Nk = Mk, Rk = Vk), !(2 & Xk && hk >= (ak = wk(kk, Ek, hk, ak, gk, Gk, Tk))) && !(4 & Xk && (hk = lk(kk, Ek, hk, ak, gk, Gk, ck)) >= ak)) {
+           var Jk = ak - hk,
+             ke = tk - Wk;
+           if (Ok) {
+             if (kk * Jk * (Jk + ke) < nk) {
+               if (void 0 !== (Ik = Pk.scanComplete(kk, Ek, ek, hk, ak, gk, Gk, Wk, tk, Nk, Rk))) return Ik;
+               continue
+             }
+ ... (37 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L489-L629` → after: `L395-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L395-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L395-L410) · [Before (L489-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L489-L629)

```diff
-     HQ._V8PerformanceHack = new HQ(.5, .5), HQ._ZeroReadOnly = HQ.Zero();
-     class bQ {
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
- ... (125 more removed lines; see GitHub link above)
+ 
+     function sk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
+       var Kk = 2 * kk,
+         xk = Pk * Kk,
+         nk = mk[xk + ek];
+       kk: for (var Uk = fk, Hk = fk * Kk; Uk < Sk; ++Uk, Hk += Kk) {
+         var wk = bk[Hk + ek],
+           lk = bk[Hk + ek + kk];
+         if (!(nk < wk || lk < nk) && (!Dk || nk !== wk)) {
+           for (var pk, yk = rk[Uk], Yk = ek + 1; Yk < kk; ++Yk) {
+             wk = bk[Hk + Yk], lk = bk[Hk + Yk + kk];
+             var Lk = mk[xk + Yk],
+               Ck = mk[xk + Yk + kk];
+             if (lk < Lk || Ck < wk) continue kk
+           }
+           if (void 0 !== (pk = Dk ? ik(Mk, yk) : ik(yk, Mk))) return pk
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L658-L862` → after: `L413-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L413-L434) · [Before (L658-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L658-L862)

```diff
-       divideToRef(QQ, FQ) {
-         return FQ._x = this._x / QQ._x, FQ._y = this._y / QQ._y, FQ._z = this._z / QQ._z, FQ._isDirty = !0, FQ
-       }
-       divideInPlace(QQ) {
-         return this._x = this._x / QQ._x, this._y = this._y / QQ._y, this._z = this._z / QQ._z, this._isDirty = !0, this
-       }
-       minimizeInPlace(QQ) {
-         return this.minimizeInPlaceFromFloats(QQ._x, QQ._y, QQ._z)
-       }
-       maximizeInPlace(QQ) {
-         return this.maximizeInPlaceFromFloats(QQ._x, QQ._y, QQ._z)
-       }
-       minimizeInPlaceFromFloats(QQ, FQ, wQ) {
-         return QQ < this._x && (this.x = QQ), FQ < this._y && (this.y = FQ), wQ < this._z && (this.z = wQ), this
-       }
-       maximizeInPlaceFromFloats(QQ, FQ, wQ) {
- ... (189 more removed lines; see GitHub link above)
+     }
+ 
+     function dk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
+       var Mk = 2 * kk,
+         Kk = rk * Mk,
+         xk = Pk[Kk + ek];
+       kk: for (var nk = Dk, Uk = Dk * Mk; nk < fk; ++nk, Uk += Mk) {
+         var Hk = bk[nk];
+         if (Hk !== mk) {
+           var wk = Sk[Uk + ek],
+             lk = Sk[Uk + ek + kk];
+           if (!(xk < wk || lk < xk)) {
+             for (var pk = ek + 1; pk < kk; ++pk) {
+               wk = Sk[Uk + pk], lk = Sk[Uk + pk + kk];
+               var yk = Pk[Kk + pk],
+                 Yk = Pk[Kk + pk + kk];
+ ... (6 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L864-L865` → after: `L436-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L436-L477) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L864-L865)

```diff
-       static Forward() {
-         return new bQ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
+     }
+   },
+   37905: (kk, ek, ik) => {
+     kk.exports = function(kk, ek, ik, bk, rk, Pk) {
+       if (bk <= ik + 1) return ik;
+       var mk = ik,
+         Mk = bk,
+         Kk = bk + ik >>> 1,
+         xk = 2 * kk,
+         nk = Kk,
+         Uk = rk[xk * Kk + ek];
+       for (; mk < Mk;) {
+         if (Mk - mk < fk) {
+           Sk(kk, ek, mk, Mk, rk, Pk), Uk = rk[xk * Kk + ek];
+           break
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L867-L1412` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L479-L521) · [Before (L867-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L867-L1412)

```diff
-       static Backward() {
-         return new bQ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
-       }
-       static Right() {
-         return new bQ(1, 0, 0)
-       }
-       static Left() {
-         return new bQ(-1, 0, 0)
-       }
-       static Random() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new bQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
-       }
-       static RandomToRef() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (530 more removed lines; see GitHub link above)
+       return Dk(kk, ek, ik, Kk, rk, Pk, rk[xk * Kk + ek])
+     };
+     var Dk = ik(37909)("lo<p0", ["p0"]),
+       fk = 8;
+ 
+     function Sk(kk, ek, ik, Dk, fk, Sk) {
+       for (var bk = 2 * kk, rk = bk * (ik + 1) + ek, Pk = ik + 1; Pk < Dk; ++Pk, rk += bk)
+         for (var mk = fk[rk], Mk = Pk, Kk = bk * (Pk - 1); Mk > ik && fk[Kk + ek] > mk; --Mk, Kk -= bk) {
+           for (var xk = Kk, nk = Kk + bk, Uk = 0; Uk < bk; ++Uk, ++xk, ++nk) {
+             var Hk = fk[xk];
+             fk[xk] = fk[nk], fk[nk] = Hk
+           }
+           var wk = Sk[Mk];
+           Sk[Mk] = Sk[Mk - 1], Sk[Mk - 1] = wk
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1415-L1651` → after: `L524-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L524-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L524-L610) · [Before (L1415-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1415-L1651)

```diff
-     YQ._V8PerformanceHack = new YQ(.5, .5, .5, .5), YQ._ZeroReadOnly = YQ.Zero();
-     class xQ {
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
- ... (221 more removed lines; see GitHub link above)
+ 
+     function Dk(kk, ek, ik) {
+       ek *= 2;
+       var Dk = ik[kk *= 2],
+         fk = ik[kk + 1];
+       ik[kk] = ik[ek], ik[kk + 1] = ik[ek + 1], ik[ek] = Dk, ik[ek + 1] = fk
+     }
+ 
+     function fk(kk, ek, ik) {
+       ek *= 2, ik[kk *= 2] = ik[ek], ik[kk + 1] = ik[ek + 1]
+     }
+ 
+     function Sk(kk, ek, ik, Dk) {
+       ek *= 2, ik *= 2;
+       var fk = Dk[kk *= 2],
+         Sk = Dk[kk + 1];
+ ... (71 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1653` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L612) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1653)

```diff
-           QQ._z = Math.atan2(2 * (wQ * LQ + FQ * qQ), -kQ - vQ + mQ + DQ), QQ._x = Math.asin(-2 * oQ), QQ._y = Math.atan2(2 * (FQ * wQ + LQ * qQ), kQ - vQ - mQ + DQ), QQ._isDirty = !0
+           Uk[yk++] = fk[sk + Lk], Uk[yk++] = -(jk + 1), Uk[yk++] = fk[sk + Ck], Uk[yk++] = jk
```

#### 22. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1655-L1684` → after: `L614-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L614-L617) · [Before (L1655-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1655-L1684)

```diff
-         return QQ
-       }
-       toAlphaBetaGammaToRef(QQ) {
-         const FQ = this._z,
-           wQ = this._x,
-           LQ = this._y,
-           qQ = this._w,
-           oQ = Math.sqrt(wQ * wQ + LQ * LQ),
-           DQ = Math.sqrt(FQ * FQ + qQ * qQ),
-           kQ = 2 * Math.atan2(oQ, DQ),
-           vQ = 2 * Math.atan2(FQ, qQ),
-           mQ = 2 * Math.atan2(LQ, wQ),
-           uQ = (vQ + mQ) / 2,
-           HQ = (vQ - mQ) / 2;
-         return QQ.set(HQ, kQ, uQ), QQ
-       }
- ... (14 more removed lines; see GitHub link above)
+         for (Ak = xk; Ak < nk; ++Ak) {
+           jk = pk[Ak] + bk;
+           var dk = Yk * Ak;
+           Uk[yk++] = lk[dk + Lk], Uk[yk++] = -jk, Uk[yk++] = lk[dk + Ck], Uk[yk++] = jk
```

#### 23. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1686-L1836` → after: `L619-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L619-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L619-L769) · [Before (L1686-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1686-L1836)

```diff
-       }
-       toAxisAngleToRef(QQ) {
-         let FQ;
-         const wQ = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           LQ = this._w;
-         return wQ > 0 ? (FQ = 2 * Math.atan2(wQ, LQ), QQ.set(this._x / wQ, this._y / wQ, this._z / wQ)) : (FQ = 0, QQ.set(1, 0, 0)), FQ
-       }
-       static FromRotationMatrix(QQ) {
-         const FQ = new xQ;
-         return xQ.FromRotationMatrixToRef(QQ, FQ), FQ
-       }
-       static FromRotationMatrixToRef(QQ, FQ) {
-         const wQ = QQ.m,
-           LQ = wQ[0],
-           qQ = wQ[4],
-           oQ = wQ[8],
- ... (135 more removed lines; see GitHub link above)
+         var Vk = yk >>> 1;
+         Sk(Uk, Vk);
+         var Fk = 0,
+           uk = 0;
+         for (Ak = 0; Ak < Vk; ++Ak) {
+           var qk = 0 | Uk[2 * Ak + 1];
+           if (qk >= bk) Hk(Mk, Kk, uk--, qk = qk - bk | 0);
+           else if (qk >= 0) Hk(Pk, mk, Fk--, qk);
+           else if (qk <= -bk) {
+             qk = -qk - bk | 0;
+             for (var Ik = 0; Ik < Fk; ++Ik) {
+               if (void 0 !== (zk = ek(Pk[Ik], qk))) return zk
+             }
+             wk(Mk, Kk, uk++, qk)
+           } else {
+             qk = -qk - 1 | 0;
+ ... (135 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1868-L1889` → after: `L772-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L772-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L772-L843) · [Before (L1868-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1868-L1889)

```diff
-       static Clamp(QQ, FQ, wQ) {
-         const LQ = new xQ;
-         return xQ.ClampToRef(QQ, FQ, wQ, LQ), LQ
-       }
-       static ClampToRef(QQ, FQ, wQ, LQ) {
-         return LQ.vQQ((0, kQ.Clamp)(QQ.x, FQ.x, wQ.x), (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y), (0, kQ.Clamp)(QQ.z, FQ.z, wQ.z), (0, kQ.Clamp)(QQ.w, FQ.w, wQ.w))
-       }
-       static Random() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new xQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
-       }
-       static RandomToRef() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return (arguments.length > 2 ? arguments[2] : void 0).vQQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
- ... (6 more removed lines; see GitHub link above)
+     };
+     var Dk = ik(37867),
+       fk = ik(37871),
+       Sk = ik(37893),
+       bk = 1 << 28,
+       rk = 1024,
+       Pk = Dk.mallocInt32(rk),
+       mk = Dk.mallocInt32(rk),
+       Mk = Dk.mallocInt32(rk),
+       Kk = Dk.mallocInt32(rk),
+       xk = Dk.mallocInt32(rk),
+       nk = Dk.mallocInt32(rk),
+       Uk = Dk.mallocDouble(8192);
+ 
+     function Hk(kk, ek, ik, Dk) {
+       var fk = ek[Dk],
+ ... (56 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1891-L1892` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L845-L847) · [Before (L1891-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1891-L1892)

```diff
-       static Distance(QQ, FQ) {
-         return Math.sqrt(xQ.DistanceSquared(QQ, FQ))
+ 
+       function mk() {
+         rk.timeout || (rk.timeout = !0, setTimeout(Mk, 1))
```

#### 26. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1894-L1899` → after: `L849-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L849-L851) · [Before (L1894-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1894-L1899)

```diff
-       static DistanceSquared(QQ, FQ) {
-         const wQ = QQ.x - FQ.x,
-           LQ = QQ.y - FQ.y,
-           qQ = QQ.z - FQ.z,
-           oQ = QQ.w - FQ.w;
-         return wQ * wQ + LQ * LQ + qQ * qQ + oQ * oQ
+ 
+       function Mk() {
+         rk.timeout = !1, Kk()
```

#### 27. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1901-L1902` → after: `L853-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L853-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L853-L988) · [Before (L1901-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1901-L1902)

```diff
-       static Center(QQ, FQ) {
-         return xQ.CenterToRef(QQ, FQ, xQ.Zero())
+ 
+       function Kk() {
+         rk.multiComps.length && function(kk) {
+           for (var ek = 0; ek < kk.length; ek++) {
+             var {
+               entID: ik,
+               data: Dk
+             } = kk[ek], fk = Dk.hash[ik];
+             if (fk) {
+               for (var Sk = 0; Sk < fk.length; Sk++) fk[Sk] || (fk.splice(Sk, 1), Sk--);
+               0 === fk.length && (Dk.remove(ik), rk.removals.push(Dk))
+             }
+           }
+           kk.length = 0
+         }(rk.multiComps), rk.removals.length && function(kk) {
+           for (var ek = 0; ek < kk.length; ek++) {
+ ... (120 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1904-L1905` → after: `L990-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L990-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L990-L1001) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1904-L1905)

```diff
-       static CenterToRef(QQ, FQ, wQ) {
-         return wQ.vQQ((QQ.x + FQ.x) / 2, (QQ.y + FQ.y) / 2, (QQ.z + FQ.z) / 2, (QQ.w + FQ.w) / 2)
+     };
+     var Dk = ik(37834)
+   },
+   37834: kk => {
+     function ek(kk, ek) {
+       var ik = kk._map[ek];
+       if (delete kk.hash[ek], delete kk._map[ek], ik === kk.list.length - 1) kk.list.pop(), kk._idList.pop();
+       else {
+         var Dk = kk.list.pop();
+         kk.list[ik] = Dk;
+         var fk = kk._idList.pop();
+         kk._idList[ik] = fk, kk._map[fk] = ik
```

#### 29. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1908-L1914` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1004-L1006) · [Before (L1908-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1908-L1914)

```diff
-     xQ._V8PerformanceHack = new xQ(.5, .5, .5, .5);
-     class AQ {
-       static get Use64Bits() {
-         return oQ.e.MatrixUse64Bits
-       }
-       get m() {
-         return this._m
+     kk.exports = class {
+       constructor() {
+         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
```

#### 30. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1916-L1917` → after: `L1008-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1008-L1012) · [Before (L1916-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1916-L1917)

```diff
-       markAsUpdated() {
-         this.updateFlag = vQ.l._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+       add(kk, ek) {
+         if ("number" === typeof this._map[kk]) {
+           var ik = this._map[kk];
+           this.hash[kk] = ek, this.list[ik] = ek, this._idList[ik] = kk
+         } else this._map[kk] = this.list.length, this.hash[kk] = ek, this.list.push(ek), this._idList.push(kk)
```

#### 31. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1919-L1923` → after: `L1014-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1014-L1016) · [Before (L1919-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1919-L1923)

```diff
-       _updateIdentityStatus(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._isIdentity = QQ, this._isIdentity3x2 = QQ || wQ, this._isIdentityDirty = !this._isIdentity && FQ, this._isIdentity3x2Dirty = !this._isIdentity3x2 && LQ
+       remove(kk) {
+         var ek = this._map[kk];
+         this.hash[kk] = null, this.list[ek] = null, this._pendingRemovals.push(kk)
```

#### 32. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1925-L1926` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1018-L1019) · [Before (L1925-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1925-L1926)

```diff
-       constructor() {
-         this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, oQ.e.MatrixTrackPrecisionChange && oQ.e.MatrixTrackedMatrices.push(this), this._m = new oQ.e.MatrixCurrentType(16), this.markAsUpdated()
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
```

#### 33. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1928-L1932` → after: `L1021-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1021-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1021-L1024) · [Before (L1928-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1928-L1932)

```diff
-       isIdentity() {
-         if (this._isIdentityDirty) {
-           this._isIdentityDirty = !1;
-           const QQ = this._m;
-           this._isIdentity = 1 === QQ[0] && 0 === QQ[1] && 0 === QQ[2] && 0 === QQ[3] && 0 === QQ[4] && 1 === QQ[5] && 0 === QQ[6] && 0 === QQ[7] && 0 === QQ[8] && 0 === QQ[9] && 1 === QQ[10] && 0 === QQ[11] && 0 === QQ[12] && 0 === QQ[13] && 0 === QQ[14] && 1 === QQ[15]
+       flush() {
+         for (var kk = 0; kk < this._pendingRemovals.length; kk++) {
+           var ik = this._pendingRemovals[kk];
+           null === this.hash[ik] && ek(this, ik)
```

#### 34. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1934-L2061` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1026) · [Before (L1934-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L1934-L2061)

```diff
-         return this._isIdentity
-       }
-       isIdentityAs3x2() {
-         return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 != … [truncated]
-       }
-       determinant() {
-         if (!0 === this._isIdentity) return 1;
-         const QQ = this._m,
-           FQ = QQ[0],
-           wQ = QQ[1],
-           LQ = QQ[2],
-           qQ = QQ[3],
-           oQ = QQ[4],
-           DQ = QQ[5],
-           kQ = QQ[6],
-           vQ = QQ[7],
- ... (112 more removed lines; see GitHub link above)
+         this._pendingRemovals.length = 0
```

#### 35. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2063-L2064` → after: `L1028-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1028-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1028-L1104) · [Before (L2063-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2063-L2064)

```diff
-       invertToRef(QQ) {
-         return !0 === this._isIdentity ? (AQ.IdentityToRef(QQ), QQ) : ((0, vQ.f)(this, QQ.RLQ()) ? QQ.markAsUpdated() : QQ.Qs(this), QQ)
+     }
+   },
+   37634: (kk, ek, ik) => {
+     kk = ik.nmd(kk);
+     var Dk = "__lodash_hash_undefined__",
+       fk = 9007199254740991,
+       Sk = "[object Arguments]",
+       bk = "[object Boolean]",
+       rk = "[object Date]",
+       Pk = "[object Function]",
+       mk = "[object GeneratorFunction]",
+       Mk = "[object Map]",
+       Kk = "[object Number]",
+       xk = "[object Object]",
+       nk = "[object Promise]",
+       Uk = "[object RegExp]",
+ ... (61 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2066-L2067` → after: `L1106-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1106-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1106-L1156) · [Before (L2066-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2066-L2067)

```diff
-       addAtIndex(QQ, FQ) {
-         return this._m[QQ] += FQ, this.markAsUpdated(), this
+     }
+ 
+     function gk(kk) {
+       var ek = -1,
+         ik = Array(kk.size);
+       return kk.forEach((function(kk) {
+         ik[++ek] = kk
+       })), ik
+     }
+     var Gk = Array.prototype,
+       Nk = Function.prototype,
+       Rk = Object.prototype,
+       Jk = hk["__core-js_shared__"],
+       ke = function() {
+         var kk = /[^.]+$/.exec(Jk && Jk.keys && Jk.keys.IE_PROTO || "");
+         return kk ? "Symbol(src)_1." + kk : ""
+ ... (35 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2069-L2070` → after: `L1158-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1158-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1158-L1165) · [Before (L2069-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2069-L2070)

```diff
-       multiplyAtIndex(QQ, FQ) {
-         return this._m[QQ] *= FQ, this.markAsUpdated(), this
+     }
+ 
+     function ue(kk) {
+       var ek = -1,
+         ik = kk ? kk.length : 0;
+       for (this.clear(); ++ek < ik;) {
+         var Dk = kk[ek];
+         this.set(Dk[0], Dk[1])
```

#### 38. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2072-L2073` → after: `L1167-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1167-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1167-L1174) · [Before (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2072-L2073)

```diff
-       setTranslationFromFloats(QQ, FQ, wQ) {
-         return this._m[12] = QQ, this._m[13] = FQ, this._m[14] = wQ, this.markAsUpdated(), this
+     }
+ 
+     function qe(kk) {
+       var ek = -1,
+         ik = kk ? kk.length : 0;
+       for (this.clear(); ++ek < ik;) {
+         var Dk = kk[ek];
+         this.set(Dk[0], Dk[1])
```

#### 39. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2075-L2076` → after: `L1176-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1176-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1176-L1297) · [Before (L2075-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2075-L2076)

```diff
-       addTranslationFromFloats(QQ, FQ, wQ) {
-         return this._m[12] += QQ, this._m[13] += FQ, this._m[14] += wQ, this.markAsUpdated(), this
+     }
+ 
+     function Ie(kk) {
+       this.__data__ = new ue(kk)
+     }
+ 
+     function ze(kk, ek) {
+       var ik = ge(kk) || function(kk) {
+           return function(kk) {
+             return function(kk) {
+               return !!kk && "object" == typeof kk
+             }(kk) && Ge(kk)
+           }(kk) && ie.call(kk, "callee") && (!Me.call(kk, "callee") || De.call(kk) == Sk)
+         }(kk) ? function(kk, ek) {
+           for (var ik = -1, Dk = Array(kk); ++ik < kk;) Dk[ik] = ek(ik);
+           return Dk
+ ... (106 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2078-L2079` → after: `L1299-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1299-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1299-L1506) · [Before (L2078-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2078-L2079)

```diff
-       setTranslation(QQ) {
-         return this.setTranslationFromFloats(QQ._x, QQ._y, QQ._z)
+       pk || (pk = new Ie);
+       var hk = pk.get(kk);
+       if (hk) return hk;
+       if (pk.set(kk, Ik), !zk) var ak = ik ? function(kk) {
+         return function(kk, ek, ik) {
+           var Dk = ek(kk);
+           return ge(kk) ? Dk : function(kk, ek) {
+             for (var ik = -1, Dk = ek.length, fk = kk.length; ++ik < Dk;) kk[fk + ik] = ek[ik];
+             return kk
+           }(Dk, ik(kk))
+         }(kk, ki, Be)
+       }(kk) : ki(kk);
+       return function(kk, ek) {
+         for (var ik = -1, Dk = kk ? kk.length : 0; ++ik < Dk && !1 !== ek(kk[ik], ik, kk););
+       }(ak || kk, (function(fk, Sk) {
+         ak && (fk = kk[Sk = fk]), Qe(Ik, Sk, Ee(fk, ek, ik, Dk, Sk, kk, pk))
+ ... (192 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2081-L2082` → after: `L1508-L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1508-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1508-L1526) · [Before (L2081-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2081-L2082)

```diff
-       getTranslation() {
-         return new bQ(this._m[12], this._m[13], this._m[14])
+       return fk > Sk ? 1 / 0 : fk
+     }
+     kk.exports = function(kk, ik, Dk, fk) {
+       var Sk = ek(ik, Dk, fk);
+       if (Sk === 1 / 0) kk = null;
+       else {
+         kk = kk || [];
+         for (var bk = 0; bk < ik.length; bk++) kk[bk] = ik[bk] + Dk[bk] * Sk
+       }
+       return kk
+     }, kk.exports.distance = ek
+   },
+   37327: (kk, ek, ik) => {
+     var Dk = ik(37335);
+ 
+     function fk(kk) {
+ ... (3 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2084-L2085` → after: `L1528-L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1528-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1528-L1624) · [Before (L2084-L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2084-L2085)

```diff
-       getTranslationToRef(QQ) {
-         return QQ.x = this._m[12], QQ.y = this._m[13], QQ.z = this._m[14], QQ
+       return fk
+     }
+     ek.size = fk, ek.encode = function(kk, ek) {
+       ek || (ek = new Uint8Array(fk(kk)));
+       for (var ik, Dk, Sk = 0, bk = ek.length, rk = 0; rk < kk.length;) {
+         for (ik = kk[rk], Dk = 0; rk < kk.length && kk[rk] === ik;) ++rk, ++Dk;
+         for (; Sk < bk && Dk >= 128;) ek[Sk++] = 128 + (127 & Dk), Dk >>>= 7;
+         if (Sk >= bk) throw new Error("RLE buffer overflow");
+         for (ek[Sk++] = Dk, ik >>>= 0; Sk < bk && ik >= 128;) ek[Sk++] = 128 + (127 & ik), ik >>>= 7;
+         if (Sk >= bk) throw new Error("RLE buffer overflow");
+         ek[Sk++] = ik
+       }
+       return ek
+     }, ek.decode = function(kk, ek) {
+       for (var ik, Dk, fk, Sk, bk = ek.length, rk = kk.length, Pk = 0, mk = 0; mk < rk;) {
+         for (ik = 0, Dk = 0; mk < rk && kk[mk] >= 128;) ik += (127 & kk[mk++]) << Dk, Dk += 7;
+ ... (81 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2087-L2089` → after: `L1626-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1626-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1626-L1628) · [Before (L2087-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2087-L2089)

```diff
-       removeRotationAndScaling() {
-         const QQ = this.m;
-         return AQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, QQ[12], QQ[13], QQ[14], QQ[15], this), this._updateIdentityStatus(0 === QQ[12] && 0 === QQ[13] && 0 === QQ[14] && 1 === QQ[15]), this
+       static GetNearPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
```

#### 44. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2091-L2094` → after: `L1630-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1630-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1630-L1632) · [Before (L2091-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2091-L2094)

```diff
-       Qs(QQ) {
-         QQ.copyToArray(this._m);
-         const FQ = QQ;
-         return this.updateFlag = FQ.updateFlag, this._updateIdentityStatus(FQ._isIdentity, FQ._isIdentityDirty, FQ._isIdentity3x2, FQ._isIdentity3x2Dirty), this
+       static GetFarPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
```

#### 45. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2096-L2098` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1634-L1636) · [Before (L2096-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2096-L2098)

```diff
-       copyToArray(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return (0, vQ.b)(this, QQ, FQ), this
+       static GetLeftPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
```

#### 46. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2100-L2102` → after: `L1638-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1638-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1638-L1640) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2100-L2102)

```diff
-       multiply(QQ) {
-         const FQ = new AQ;
-         return this.multiplyToRef(QQ, FQ), FQ
+       static GetRightPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
```

#### 47. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2104-L2108` → after: `L1642-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1642-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1642-L1644) · [Before (L2104-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2104-L2108)

```diff
-       multiplyInPlace(QQ) {
-         const FQ = this._m,
-           wQ = QQ.m;
-         for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] *= wQ[LQ];
-         return this.markAsUpdated(), this
+       static GetTopPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
```

#### 48. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2110-L2113` → after: `L1646-L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1646-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1646-L1648) · [Before (L2110-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2110-L2113)

```diff
-       multiplyByFloats() {
-         const QQ = this._m;
-         for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] *= FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ];
-         return this.markAsUpdated(), this
+       static GetBottomPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
```

#### 49. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2115-L2196` → after: `L1650-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1650-L1651) · [Before (L2115-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2115-L2196)

```diff
-       multiplyByFloatsToRef() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         const LQ = FQ.pop(),
-           qQ = this._m,
-           oQ = LQ._m,
-           DQ = FQ;
-         for (let kQ = 0; kQ < 16; kQ++) oQ[kQ] = qQ[kQ] * DQ[kQ];
-         return LQ.markAsUpdated(), LQ
-       }
-       multiplyToRef(QQ, FQ) {
-         return this._isIdentity ? (FQ.Qs(QQ), FQ) : QQ._isIdentity ? (FQ.Qs(this), FQ) : (this.multiplyToArray(QQ, FQ._m, 0), FQ.markAsUpdated(), FQ)
-       }
-       multiplyToArray(QQ, FQ, wQ) {
-         return (0, vQ.m)(this, QQ, FQ, wQ), this
-       }
-       divide(QQ) {
- ... (66 more removed lines; see GitHub link above)
+       static GetPlanesToRef(kk, ek) {
+         fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
```

#### 50. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2198-L2201` → after: `L1653-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1653-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1653-L1655) · [Before (L2198-L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2198-L2201)

```diff
-       LkQ() {
-         const QQ = this._m;
-         for (let FQ = 0; FQ < 16; FQ++)
-           if (QQ[FQ] != (FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ])) return !1;
+       static IsPointInFrustum(kk, ek) {
+         for (let ik = 0; ik < 6; ik++)
+           if (ek[ik].dotCoordinate(kk) < 0) return !1;
```

#### 51. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2204-L2214` → after: `L1658-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1658-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1658-L1667) · [Before (L2204-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2204-L2214)

```diff
-       floor() {
-         return this.floorToRef(new AQ)
-       }
-       floorToRef(QQ) {
-         const FQ = this._m,
-           wQ = QQ._m;
-         for (let LQ = 0; LQ < 16; LQ++) wQ[LQ] = Math.floor(FQ[LQ]);
-         return QQ.markAsUpdated(), QQ
-       }
-       fract() {
-         return this.fractToRef(new AQ)
+     }
+   },
+   37372: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => fk
+     });
+     var Dk = ik(36698);
+     class fk {
+       constructor(kk, ek, ik, fk) {
+         this.normal = new Dk.o(kk, ek, ik), this.d = fk
```

#### 52. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2216-L2220` → after: `L1669-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1669-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1669-L1670) · [Before (L2216-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2216-L2220)

```diff
-       fractToRef(QQ) {
-         const FQ = this._m,
-           wQ = QQ._m;
-         for (let LQ = 0; LQ < 16; LQ++) wQ[LQ] = FQ[LQ] - Math.floor(FQ[LQ]);
-         return QQ.markAsUpdated(), QQ
+       Tik() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 53. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2223-L2224` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1673) · [Before (L2223-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2223-L2224)

```diff
-         const QQ = new AQ;
-         return QQ.Qs(this), QQ
+         return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 54. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2227` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1676) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2227)

```diff
-         return "Matrix"
+         return "Plane"
```

#### 55. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2230-L2232` → after: `L1679-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1679-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1679-L1680) · [Before (L2230-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2230-L2232)

```diff
-         let QQ = uQ(this._m[0]);
-         for (let FQ = 1; FQ < 16; FQ++) QQ = 397 * QQ ^ uQ(this._m[FQ]);
-         return QQ
+         let kk = this.normal.getHashCode();
+         return kk = 397 * kk ^ this.d, kk
```

#### 56. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2234-L2293` → after: `L1682-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1682-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1682-L1685) · [Before (L2234-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2234-L2293)

```diff
-       decomposeToTransformNode(QQ) {
-         return QQ.rotationQuaternion = QQ.rotationQuaternion || new xQ, this.decompose(QQ.ck, QQ.rotationQuaternion, QQ.position)
-       }
-       decompose(QQ, FQ, wQ, LQ) {
-         let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         if (this._isIdentity) return wQ && wQ.K3(0), QQ && QQ.K3(1), FQ && FQ.vQQ(0, 0, 0, 1), !0;
-         const oQ = this._m;
-         if (wQ && wQ.vQQ(oQ[12], oQ[13], oQ[14]), (QQ = QQ || tQ.Ox[0]).x = Math.sqrt(oQ[0] * oQ[0] + oQ[1] * oQ[1] + oQ[2] * oQ[2]), QQ.y = Math.sqrt(oQ[4] * oQ[4] + oQ[5] * oQ[5] + oQ[6] * oQ[6]), QQ.z = Math.sqrt(oQ[8] * oQ[8] + oQ[9] * oQ[9] + oQ[10] * oQ[10]), LQ) {
-           const FQ = (qQ ? LQ.absoluteScaling.x : LQ.ck.x) < 0 ? -1 : 1,
-             wQ = (qQ ? LQ.absoluteScaling.y : LQ.ck.y) < 0 ? -1 : 1,
-             oQ = (qQ ? LQ.absoluteScaling.z : LQ.ck.z) < 0 ? -1 : 1;
-           QQ.x *= FQ, QQ.y *= wQ, QQ.z *= oQ
-         } else this.determinant() <= 0 && (QQ.y *= -1);
-         if (0 === QQ._x || 0 === QQ._y || 0 === QQ._z) return FQ && FQ.vQQ(0, 0, 0, 1), !1;
-         if (FQ) {
-           const wQ = 1 / QQ._x,
- ... (44 more removed lines; see GitHub link above)
+       normalize() {
+         const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ek = 0;
+         return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
```

#### 57. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2295-L2298` → after: `L1687-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1687-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1687-L1699) · [Before (L2295-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2295-L2298)

```diff
-       scaleInPlace(QQ) {
-         const FQ = this._m;
-         for (let wQ = 0; wQ < 16; wQ++) FQ[wQ] *= QQ;
-         return this.markAsUpdated(), this
+       transform(kk) {
+         const ek = fk._TmpMatrix;
+         kk.invertToRef(ek);
+         const ik = ek.m,
+           Dk = this.normal.x,
+           Sk = this.normal.y,
+           bk = this.normal.z,
+           rk = this.d,
+           Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
+           mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
+           Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
+           Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
+         return new fk(Pk, mk, Mk, Kk)
```

#### 58. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2300-L2304` → after: `L1701-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1701-L1702) · [Before (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2300-L2304)

```diff
-       toNormalMatrix(QQ) {
-         const FQ = tQ.Matrix[0];
-         this.invertToRef(FQ), FQ.transposeToRef(QQ);
-         const wQ = QQ._m;
-         return AQ.FromValuesToRef(wQ[0], wQ[1], wQ[2], 0, wQ[4], wQ[5], wQ[6], 0, wQ[8], wQ[9], wQ[10], 0, 0, 0, 0, 1, QQ), QQ
+       dotCoordinate(kk) {
+         return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
```

#### 59. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2306-L2308` → after: `L1704-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1704-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1704-L1716) · [Before (L2306-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2306-L2308)

```diff
-       getRotationMatrix() {
-         const QQ = new AQ;
-         return this.getRotationMatrixToRef(QQ), QQ
+       copyFromPoints(kk, ek, ik) {
+         const Dk = ek.x - kk.x,
+           fk = ek.y - kk.y,
+           Sk = ek.z - kk.z,
+           bk = ik.x - kk.x,
+           rk = ik.y - kk.y,
+           Pk = ik.z - kk.z,
+           mk = fk * Pk - Sk * rk,
+           Mk = Sk * bk - Dk * Pk,
+           Kk = Dk * rk - fk * bk,
+           xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
+         let nk;
+         return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
```

#### 60. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2310-L2317` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1718-L1719) · [Before (L2310-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2310-L2317)

```diff
-       getRotationMatrixToRef(QQ) {
-         const FQ = tQ.Ox[0];
-         if (!this.decompose(FQ)) return AQ.IdentityToRef(QQ), QQ;
-         const wQ = this._m,
-           LQ = 1 / FQ._x,
-           qQ = 1 / FQ._y,
-           oQ = 1 / FQ._z;
-         return AQ.FromValuesToRef(wQ[0] * LQ, wQ[1] * LQ, wQ[2] * LQ, 0, wQ[4] * qQ, wQ[5] * qQ, wQ[6] * qQ, 0, wQ[8] * oQ, wQ[9] * oQ, wQ[10] * oQ, 0, 0, 0, 0, 1, QQ), QQ
+       isFrontFacingTo(kk, ek) {
+         return Dk.o.Dot(this.normal, kk) <= ek
```

#### 61. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2319-L2321` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1721-L1722) · [Before (L2319-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2319-L2321)

```diff
-       toggleModelMatrixHandInPlace() {
-         const QQ = this._m;
-         return QQ[2] *= -1, QQ[6] *= -1, QQ[8] *= -1, QQ[9] *= -1, QQ[14] *= -1, this.markAsUpdated(), this
+       signedDistanceTo(kk) {
+         return Dk.o.Dot(kk, this.normal) + this.d
```

#### 62. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2323-L2325` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1724-L1725) · [Before (L2323-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2323-L2325)

```diff
-       toggleProjectionMatrixHandInPlace() {
-         const QQ = this._m;
-         return QQ[8] *= -1, QQ[9] *= -1, QQ[10] *= -1, QQ[11] *= -1, this.markAsUpdated(), this
+       static FromArray(kk) {
+         return new fk(kk[0], kk[1], kk[2], kk[3])
```

#### 63. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2327-L2328` → after: `L1727-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1727-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1727-L1729) · [Before (L2327-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2327-L2328)

```diff
-       _convertProjectionToHalfZRangeInPlace() {
-         return this.multiplyToRef(MQ, this), this
+       static FromPoints(kk, ek, ik) {
+         const Dk = new fk(0, 0, 0, 0);
+         return Dk.copyFromPoints(kk, ek, ik), Dk
```

#### 64. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2330-L2674` → after: `L1731-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1731-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1731-L1733) · [Before (L2330-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2330-L2674)

```diff
-       static FromArray(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wQ = new AQ;
-         return AQ.FromArrayToRef(QQ, FQ, wQ), wQ
-       }
-       static FromArrayToRef(QQ, FQ, wQ) {
-         for (let LQ = 0; LQ < 16; LQ++) wQ._m[LQ] = QQ[LQ + FQ];
-         return wQ.markAsUpdated(), wQ
-       }
-       static FromFloat32ArrayToRefScaled(QQ, FQ, wQ, LQ) {
-         return LQ._m[0] = QQ[0 + FQ] * wQ, LQ._m[1] = QQ[1 + FQ] * wQ, LQ._m[2] = QQ[2 + FQ] * wQ, LQ._m[3] = QQ[3 + FQ] * wQ, LQ._m[4] = QQ[4 + FQ] * wQ, LQ._m[5] = QQ[5 + FQ] * wQ, LQ._m[6] = QQ[6 + FQ] * wQ, LQ._m[7] = QQ[7 + FQ] * wQ, LQ._m[8] = QQ[8 + FQ] * wQ, LQ._m[9] = QQ … [truncated]
-       }
-       static get IdentityReadOnly() {
-         return AQ._IdentityReadOnly
-       }
-       static FromValuesToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ) {
- ... (329 more removed lines; see GitHub link above)
+       static FromPositionAndNormal(kk, ek) {
+         const ik = new fk(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(kk, ek, ik)
```

#### 65. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2676-L2679` → after: `L1735-L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1735-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1735-L1736) · [Before (L2676-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2676-L2679)

```diff
-       static GetAsMatrix3x3(QQ) {
-         const FQ = QQ.m,
-           wQ = [FQ[0], FQ[1], FQ[2], FQ[4], FQ[5], FQ[6], FQ[8], FQ[9], FQ[10]];
-         return oQ.e.MatrixUse64Bits ? wQ : new Float32Array(wQ)
+       static FromPositionAndNormalToRef(kk, ek, ik) {
+         return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
```

#### 66. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2681-L2683` → after: `L1738-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1738-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1738-L1740) · [Before (L2681-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2681-L2683)

```diff
-       static Transpose(QQ) {
-         const FQ = new AQ;
-         return AQ.TransposeToRef(QQ, FQ), FQ
+       static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
+         const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
+         return Dk.o.Dot(ik, ek) + fk
```

#### 67. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2783` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1758) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2783)

```diff
-   36722: (QQ, FQ, wQ) => {
+   37679: (kk, ek, ik) => {
```

#### 68. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2785` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1760) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2785)

```diff
-       e: () => DQ
+       b: () => Dk
```

#### 69. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2813-L2886` → after: `L1763-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1763-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1763-L1764) · [Before (L2813-L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2813-L2886)

```diff
-       static FromPromise(QQ, FQ) {
-         const wQ = new DQ;
-         return QQ.then((QQ => {
-           wQ.notifyObservers(QQ)
-         })).catch((QQ => {
-           if (!FQ) throw QQ;
-           FQ.notifyObservers(QQ)
-         })), wQ
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = FQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
-       }
- ... (58 more removed lines; see GitHub link above)
+       constructor(kk, ek, ik, Dk) {
+         this.x = kk, this.y = ek, this.width = ik, this.height = Dk
```

#### 70. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2888-L2892` → after: `L1766-L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1766-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1766-L1767) · [Before (L2888-L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2888-L2892)

```diff
-       notifyObserver(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = FQ), QQ._willBeUnregistered) return;
-         const LQ = this._eventState;
-         LQ.mask = wQ, LQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(FQ, LQ)
+       toGlobal(kk, ek) {
+         return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
```

#### 71. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2894-L2905` → after: `L1769-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1769-L1770) · [Before (L2894-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2894-L2905)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
-       }
-       clear() {
-         for (; this._observers.length;) {
-           const QQ = this._observers.pop();
-           QQ && (QQ._remove = null)
-         }
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
-       }
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       toGlobalToRef(kk, ek, ik) {
+         return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
```

#### 72. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2908-L2915` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/226.js#L1773) · [Before (L2908-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/226.js#L2908-L2915)

```diff
-         const QQ = new DQ;
-         return QQ._observers = this._observers.slice(0), QQ
-       }
-       hasSpecificMask() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const FQ of this._observers)
-           if (FQ.mask & QQ || FQ.mask === QQ) return !0;
-         return !1
+         return new Dk(this.x, this.y, this.width, this.height)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L2)

```diff
- export const ids = [227];
+ export const ids = [227, 233, 236];
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   36873: (QQ, FQ, wQ) => {
+   39804: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L11-L30` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L9-L12) · [Before (L11-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L11-L30)

```diff
-     var LQ = wQ(36709),
-       qQ = wQ(36705),
-       oQ = wQ(36729),
-       DQ = wQ(36741);
- 
-     function kQ(QQ) {
-       return Math.pow(QQ, qQ.g)
-     }
- 
-     function vQ(QQ) {
-       return QQ <= .04045 ? .0773993808 * QQ : Math.pow(.947867299 * (QQ + .055), 2.4)
-     }
- 
-     function mQ(QQ) {
-       return Math.pow(QQ, qQ.d)
-     }
- ... (4 more removed lines; see GitHub link above)
+     var Dk = ik(38272),
+       fk = ik(39585),
+       Sk = ik(39782),
+       bk = {};
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L32-L149` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L14-L15) · [Before (L32-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L32-L149)

```diff
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = QQ, this.g = FQ, this.b = wQ
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
-       }
- ... (102 more removed lines; see GitHub link above)
+       constructor(kk) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L152-L179` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L18-L19) · [Before (L152-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L152-L179)

```diff
-         return new HQ(this.r + QQ.r, this.g + QQ.g, this.b + QQ.b)
-       }
-       addInPlace(QQ) {
-         return this.r += QQ.r, this.g += QQ.g, this.b += QQ.b, this
-       }
-       addInPlaceFromFloats(QQ, FQ, wQ) {
-         return this.r += QQ, this.g += FQ, this.b += wQ, this
-       }
-       addToRef(QQ, FQ) {
-         return FQ.r = this.r + QQ.r, FQ.g = this.g + QQ.g, FQ.b = this.b + QQ.b, FQ
-       }
-       subtract(QQ) {
-         return new HQ(this.r - QQ.r, this.g - QQ.g, this.b - QQ.b)
-       }
-       subtractToRef(QQ, FQ) {
-         return FQ.r = this.r - QQ.r, FQ.g = this.g - QQ.g, FQ.b = this.b - QQ.b, FQ
- ... (12 more removed lines; see GitHub link above)
+         const ek = kk.getSimpleName();
+         this.attached[ek] ? Dk.b.Warn("camera input of type " + ek + " already exists on camera") : (this.attached[ek] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(t … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L181-L197` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L21-L25) · [Before (L181-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L181-L197)

```diff
-       Qs(QQ) {
-         return this.r = QQ.r, this.g = QQ.g, this.b = QQ.b, this
-       }
-       vQQ(QQ, FQ, wQ) {
-         return this.r = QQ, this.g = FQ, this.b = wQ, this
-       }
-       set(QQ, FQ, wQ) {
-         return this.vQQ(QQ, FQ, wQ)
-       }
-       K3(QQ) {
-         return this.r = this.g = this.b = QQ, this
-       }
-       toHexString() {
-         const QQ = Math.round(255 * this.r),
-           FQ = Math.round(255 * this.g),
-           wQ = Math.round(255 * this.b);
- ... (1 more removed lines; see GitHub link above)
+       remove(kk) {
+         for (const ek in this.attached) {
+           const ik = this.attached[ek];
+           if (ik === kk) return ik.detachControl(), ik.camera = null, delete this.attached[ek], void this.rebuildInputCheck()
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L199-L200` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L27-L31) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L199-L200)

```diff
-       fromHexString(QQ) {
-         return "#" !== QQ.substring(0, 1) || 7 !== QQ.length || (this.r = parseInt(QQ.substring(1, 3), 16) / 255, this.g = parseInt(QQ.substring(3, 5), 16) / 255, this.b = parseInt(QQ.substring(5, 7), 16) / 255), this
+       removeByType(kk) {
+         for (const ek in this.attached) {
+           const ik = this.attached[ek];
+           ik.getClassName() === kk && (ik.detachControl(), ik.camera = null, delete this.attached[ek], this.rebuildInputCheck())
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L202-L203` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L33-L37) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L202-L203)

```diff
-       toHSV() {
-         return this.toHSVToRef(new HQ)
+       _addCheckInputs(kk) {
+         const ek = this.checkInputs;
+         return () => {
+           ek(), kk()
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L205-L215` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L39-L40) · [Before (L205-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L205-L215)

```diff
-       toHSVToRef(QQ) {
-         const FQ = this.r,
-           wQ = this.g,
-           LQ = this.b,
-           qQ = Math.max(FQ, wQ, LQ),
-           oQ = Math.min(FQ, wQ, LQ);
-         let DQ = 0,
-           kQ = 0;
-         const vQ = qQ,
-           mQ = qQ - oQ;
-         return 0 !== qQ && (kQ = mQ / qQ), qQ != oQ && (qQ == FQ ? (DQ = (wQ - LQ) / mQ, wQ < LQ && (DQ += 6)) : qQ == wQ ? DQ = (LQ - FQ) / mQ + 2 : qQ == LQ && (DQ = (FQ - wQ) / mQ + 4), DQ *= 60), QQ.r = DQ, QQ.g = kQ, QQ.b = vQ, QQ
+       attachInput(kk) {
+         this.attachedToElement && kk.attachControl(this.noPreventDefault)
```

#### 10. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L217` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L42) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L217)

```diff
-       toLinearSpace() {
+       attachElement() {
```

#### 11. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L219-L223` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L44-L47) · [Before (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L219-L223)

```diff
-         const FQ = new HQ;
-         return this.toLinearSpaceToRef(FQ, QQ), FQ
-       }
-       toLinearSpaceToRef(QQ) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = vQ(this.r), QQ.g = vQ(this.g), QQ.b = vQ(this.b)) : (QQ.r = kQ(this.r), QQ.g = kQ(this.g), QQ.b = kQ(this.b)), this
+         if (!this.attachedToElement) {
+           kk = !Sk.e.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
+           for (const ek in this.attached) this.attached[ek].attachControl(kk)
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L225` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L49) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L225)

```diff
-       toGammaSpace() {
+       detachElement() {
```

#### 13. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L227-L318` → after: `L51-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L51-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L51-L59) · [Before (L227-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L227-L318)

```diff
-         const FQ = new HQ;
-         return this.toGammaSpaceToRef(FQ, QQ), FQ
-       }
-       toGammaSpaceToRef(QQ) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = uQ(this.r), QQ.g = uQ(this.g), QQ.b = uQ(this.b)) : (QQ.r = mQ(this.r), QQ.g = mQ(this.g), QQ.b = mQ(this.b)), this
-       }
-       static HSVtoRGBToRef(QQ, FQ, wQ, LQ) {
-         const qQ = wQ * FQ,
-           oQ = QQ / 60,
-           DQ = qQ * (1 - Math.abs(oQ % 2 - 1));
-         let kQ = 0,
-           vQ = 0,
-           mQ = 0;
-         oQ >= 0 && oQ <= 1 ? (kQ = qQ, vQ = DQ) : oQ >= 1 && oQ <= 2 ? (kQ = DQ, vQ = qQ) : oQ >= 2 && oQ <= 3 ? (vQ = qQ, mQ = DQ) : oQ >= 3 && oQ <= 4 ? (vQ = DQ, mQ = qQ) : oQ >= 4 && oQ <= 5 ? (kQ = DQ, mQ = qQ) : oQ >= 5 && oQ <= 6 && (kQ = qQ, mQ = DQ);
-         const uQ = wQ - qQ;
-         return LQ.r = kQ + uQ, LQ.g = vQ + uQ, LQ.b = mQ + uQ, LQ
- ... (76 more removed lines; see GitHub link above)
+         for (const ek in this.attached) this.attached[ek].detachControl(), kk && (this.attached[ek].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const kk in this.attached) {
+           const ek = this.attached[kk];
+           ek.checkInputs && (this.checkInputs = this._addCheckInputs(ek.checkInputs.bind(ek)))
+         }
```

#### 14. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L320-L321` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L61-L62) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L320-L321)

```diff
-       static Teal() {
-         return new HQ(0, 1, 1)
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 15. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L323-L324` → after: `L64-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L64-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L64-L92) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L323-L324)

```diff
-       static Random() {
-         return new HQ(Math.random(), Math.random(), Math.random())
+       serialize(kk) {
+         const ek = {};
+         for (const ik in this.attached) {
+           const kk = this.attached[ik],
+             Dk = fk.b.Serialize(kk);
+           ek[kk.getClassName()] = Dk
+         }
+         kk.inputsmgr = ek
+       }
+       parse(kk) {
+         const ek = kk.inputsmgr;
+         if (ek) {
+           this.clear();
+           for (const kk in ek) {
+             const ik = bk[kk];
+             if (ik) {
+ ... (13 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L327` → after: `L95-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L95-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L95-L209) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L327)

```diff
-     HQ._V8PerformanceHack = new HQ(.5, .5, .5), HQ._BlackReadOnly = HQ.Black();
+   },
+   39813: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk.b
+     });
+     var Dk = ik(39818);
+     (0, Dk.c)()
+   },
+   39818: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Mk,
+       c: () => xk
+     });
+     var Dk = ik(39566),
+       fk = ik(39570),
+       Sk = ik(36698),
+ ... (99 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L329-L372` → after: `L211-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L211-L214) · [Before (L329-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L329-L372)

```diff
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = QQ, this.g = FQ, this.b = wQ, this.a = LQ
-       }
-       RLQ() {
-         return [this.r, this.g, this.b, this.a]
-       }
-       toArray(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return QQ[FQ] = this.r, QQ[FQ + 1] = this.g, QQ[FQ + 2] = this.b, QQ[FQ + 3] = this.a, this
-       }
-       bwQ(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
- ... (28 more removed lines; see GitHub link above)
+       static GetPlanes(kk) {
+         const ek = [];
+         for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
+         return fk.GetPlanesToRef(kk, ek), ek
```

#### 18. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L374-L375` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L216-L218) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L374-L375)

```diff
-       subtractFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
-         return qQ.r = this.r - QQ, qQ.g = this.g - FQ, qQ.b = this.b - wQ, qQ.a = this.a - LQ, qQ
+       static GetNearPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
```

#### 19. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L377-L378` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L220-L222) · [Before (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L377-L378)

```diff
-       scale(QQ) {
-         return new bQ(this.r * QQ, this.g * QQ, this.b * QQ, this.a * QQ)
+       static GetFarPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
```

#### 20. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L380-L381` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L224-L226) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L380-L381)

```diff
-       scaleInPlace(QQ) {
-         return this.r *= QQ, this.g *= QQ, this.b *= QQ, this.a *= QQ, this
+       static GetLeftPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
```

#### 21. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L383-L384` → after: `L228-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L228-L230) · [Before (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L383-L384)

```diff
-       scaleToRef(QQ, FQ) {
-         return FQ.r = this.r * QQ, FQ.g = this.g * QQ, FQ.b = this.b * QQ, FQ.a = this.a * QQ, FQ
+       static GetRightPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
```

#### 22. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L386-L387` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L232-L234) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L386-L387)

```diff
-       scaleAndAddToRef(QQ, FQ) {
-         return FQ.r += this.r * QQ, FQ.g += this.g * QQ, FQ.b += this.b * QQ, FQ.a += this.a * QQ, FQ
+       static GetTopPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
```

#### 23. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L389-L420` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L236-L238) · [Before (L389-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L389-L420)

```diff
-       clampToRef() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           wQ = arguments.length > 2 ? arguments[2] : void 0;
-         return wQ.r = (0, oQ.Clamp)(this.r, QQ, FQ), wQ.g = (0, oQ.Clamp)(this.g, QQ, FQ), wQ.b = (0, oQ.Clamp)(this.b, QQ, FQ), wQ.a = (0, oQ.Clamp)(this.a, QQ, FQ), wQ
-       }
-       multiply(QQ) {
-         return new bQ(this.r * QQ.r, this.g * QQ.g, this.b * QQ.b, this.a * QQ.a)
-       }
-       multiplyToRef(QQ, FQ) {
-         return FQ.r = this.r * QQ.r, FQ.g = this.g * QQ.g, FQ.b = this.b * QQ.b, FQ.a = this.a * QQ.a, FQ
-       }
-       multiplyInPlace(QQ) {
-         return this.r *= QQ.r, this.g *= QQ.g, this.b *= QQ.b, this.a *= QQ.a, this
-       }
-       multiplyByFloats(QQ, FQ, wQ, LQ) {
- ... (16 more removed lines; see GitHub link above)
+       static GetBottomPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
```

#### 24. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L422-L423` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L240-L241) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L422-L423)

```diff
-       minimizeInPlaceFromFloats(QQ, FQ, wQ, LQ) {
-         return this.r = Math.min(QQ, this.r), this.g = Math.min(FQ, this.g), this.b = Math.min(wQ, this.b), this.a = Math.min(LQ, this.a), this
+       static GetPlanesToRef(kk, ek) {
+         fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
```

#### 25. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L425-L426` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L243-L246) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L425-L426)

```diff
-       maximizeInPlaceFromFloats(QQ, FQ, wQ, LQ) {
-         return this.r = Math.max(QQ, this.r), this.g = Math.max(FQ, this.g), this.b = Math.max(wQ, this.b), this.a = Math.max(LQ, this.a), this
+       static IsPointInFrustum(kk, ek) {
+         for (let ik = 0; ik < 6; ik++)
+           if (ek[ik].dotCoordinate(kk) < 0) return !1;
+         return !0
```

#### 26. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L428-L451` → after: `L248-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L248-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L248-L257) · [Before (L428-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L428-L451)

```diff
-       floorToRef(QQ) {
-         throw new ReferenceError("Can not floor a color")
-       }
-       floor() {
-         throw new ReferenceError("Can not floor a color")
-       }
-       fractToRef(QQ) {
-         throw new ReferenceError("Can not fract a color")
-       }
-       fract() {
-         throw new ReferenceError("Can not fract a color")
-       }
-       mo() {
-         throw new ReferenceError("Can not negate a color")
-       }
-       negateInPlace() {
- ... (8 more removed lines; see GitHub link above)
+     }
+   },
+   37372: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => fk
+     });
+     var Dk = ik(36698);
+     class fk {
+       constructor(kk, ek, ik, fk) {
+         this.normal = new Dk.o(kk, ek, ik), this.d = fk
```

#### 27. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L453-L454` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L259-L260) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L453-L454)

```diff
-       LkQ(QQ, FQ, wQ, LQ) {
-         return this.r === QQ && this.g === FQ && this.b === wQ && this.a === LQ
+       Tik() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 28. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L456-L457` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L262-L263) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L456-L457)

```diff
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
+       clone() {
+         return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 29. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L460` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L266) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L460)

```diff
-         return "Color4"
+         return "Plane"
```

#### 30. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L463-L491` → after: `L269-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L269-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L269-L289) · [Before (L463-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L463-L491)

```diff
-         let QQ = 255 * this.r | 0;
-         return QQ = 397 * QQ ^ 255 * this.g, QQ = 397 * QQ ^ 255 * this.b, QQ = 397 * QQ ^ 255 * this.a, QQ
-       }
-       clone() {
-         return (new bQ).Qs(this)
-       }
-       Qs(QQ) {
-         return this.r = QQ.r, this.g = QQ.g, this.b = QQ.b, this.a = QQ.a, this
-       }
-       vQQ(QQ, FQ, wQ, LQ) {
-         return this.r = QQ, this.g = FQ, this.b = wQ, this.a = LQ, this
-       }
-       set(QQ, FQ, wQ, LQ) {
-         return this.vQQ(QQ, FQ, wQ, LQ)
-       }
-       K3(QQ) {
- ... (13 more removed lines; see GitHub link above)
+         let kk = this.normal.getHashCode();
+         return kk = 397 * kk ^ this.d, kk
+       }
+       normalize() {
+         const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ek = 0;
+         return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
+       }
+       transform(kk) {
+         const ek = fk._TmpMatrix;
+         kk.invertToRef(ek);
+         const ik = ek.m,
+           Dk = this.normal.x,
+           Sk = this.normal.y,
+           bk = this.normal.z,
+           rk = this.d,
+ ... (5 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L493-L496` → after: `L291-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L291-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L291-L312) · [Before (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L493-L496)

```diff
-       toLinearSpace() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const FQ = new bQ;
-         return this.toLinearSpaceToRef(FQ, QQ), FQ
+       dotCoordinate(kk) {
+         return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
+       }
+       copyFromPoints(kk, ek, ik) {
+         const Dk = ek.x - kk.x,
+           fk = ek.y - kk.y,
+           Sk = ek.z - kk.z,
+           bk = ik.x - kk.x,
+           rk = ik.y - kk.y,
+           Pk = ik.z - kk.z,
+           mk = fk * Pk - Sk * rk,
+           Mk = Sk * bk - Dk * Pk,
+           Kk = Dk * rk - fk * bk,
+           xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
+         let nk;
+         return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L498-L499` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L314-L315) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L498-L499)

```diff
-       toLinearSpaceToRef(QQ) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = vQ(this.r), QQ.g = vQ(this.g), QQ.b = vQ(this.b)) : (QQ.r = kQ(this.r), QQ.g = kQ(this.g), QQ.b = kQ(this.b)), QQ.a = this.a, this
+       static FromArray(kk) {
+         return new fk(kk[0], kk[1], kk[2], kk[3])
```

#### 33. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L501-L529` → after: `L317-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L317-L319) · [Before (L501-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L501-L529)

```diff
-       toGammaSpace() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const FQ = new bQ;
-         return this.toGammaSpaceToRef(FQ, QQ), FQ
-       }
-       toGammaSpaceToRef(QQ) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = uQ(this.r), QQ.g = uQ(this.g), QQ.b = uQ(this.b)) : (QQ.r = mQ(this.r), QQ.g = mQ(this.g), QQ.b = mQ(this.b)), QQ.a = this.a, this
-       }
-       static FromHexString(QQ) {
-         return "#" !== QQ.substring(0, 1) || 9 !== QQ.length && 7 !== QQ.length ? new bQ(0, 0, 0, 0) : new bQ(0, 0, 0, 1).fromHexString(QQ)
-       }
-       static Lerp(QQ, FQ, wQ) {
-         return bQ.LerpToRef(QQ, FQ, wQ, new bQ)
-       }
-       static LerpToRef(QQ, FQ, wQ, LQ) {
-         return LQ.r = QQ.r + (FQ.r - QQ.r) * wQ, LQ.g = QQ.g + (FQ.g - QQ.g) * wQ, LQ.b = QQ.b + (FQ.b - QQ.b) * wQ, LQ.a = QQ.a + (FQ.a - QQ.a) * wQ, LQ
- ... (13 more removed lines; see GitHub link above)
+       static FromPoints(kk, ek, ik) {
+         const Dk = new fk(0, 0, 0, 0);
+         return Dk.copyFromPoints(kk, ek, ik), Dk
```

#### 34. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L531-L533` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L321-L323) · [Before (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L531-L533)

```diff
-       static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
-         const oQ = new bQ;
-         return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ), oQ
+       static FromPositionAndNormal(kk, ek) {
+         const ik = new fk(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(kk, ek, ik)
```

#### 35. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L535-L537` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L325-L326) · [Before (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L535-L537)

```diff
-       static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
-         const DQ = qQ * qQ;
-         oQ.r = 6 * (DQ - qQ) * QQ.r + (3 * DQ - 4 * qQ + 1) * FQ.r + 6 * (-DQ + qQ) * wQ.r + (3 * DQ - 2 * qQ) * LQ.r, oQ.g = 6 * (DQ - qQ) * QQ.g + (3 * DQ - 4 * qQ + 1) * FQ.g + 6 * (-DQ + qQ) * wQ.g + (3 * DQ - 2 * qQ) * LQ.g, oQ.b = 6 * (DQ - qQ) * QQ.b + (3 * DQ - 4 * qQ + 1 … [truncated]
+       static FromPositionAndNormalToRef(kk, ek, ik) {
+         return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
```

#### 36. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L539-L541` → after: `L328-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L328-L330) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L539-L541)

```diff
-       static FromColor3(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new bQ(QQ.r, QQ.g, QQ.b, FQ)
+       static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
+         const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
+         return Dk.o.Dot(ik, ek) + fk
```

#### 37. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L543-L545` → after: `L332-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L332-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L332-L354) · [Before (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L543-L545)

```diff
-       static FromArray(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new bQ(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2], QQ[FQ + 3])
+     }
+     fk._TmpMatrix = Dk.b.Identity()
+   },
+   36690: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       Matrix: () => Dk.b,
+       Quaternion: () => Dk.c,
+       RegisterMathVector: () => Dk.g,
+       TmpVectors: () => Dk.j,
+       Vector2: () => Dk.l,
+       eH: () => Dk.o,
+       Vector4: () => Dk.p
+     });
+     var Dk = ik(36698);
+     (0, Dk.g)()
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L547-L550` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L356-L357) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L547-L550)

```diff
-       static FromArrayToRef(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           wQ = arguments.length > 2 ? arguments[2] : void 0;
-         wQ.r = QQ[FQ], wQ.g = QQ[FQ + 1], wQ.b = QQ[FQ + 2], wQ.a = QQ[FQ + 3]
+       toGlobal(kk, ek) {
+         return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
```

#### 39. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L552-L553` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L359-L360) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L552-L553)

```diff
-       static FromInts(QQ, FQ, wQ, LQ) {
-         return new bQ(QQ / 255, FQ / 255, wQ / 255, LQ / 255)
+       toGlobalToRef(kk, ek, ik) {
+         return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
```

#### 40. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L555-L564` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L362-L363) · [Before (L555-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L555-L564)

```diff
-       static CheckColors4(QQ, FQ) {
-         if (QQ.length === 3 * FQ) {
-           const FQ = [];
-           for (let wQ = 0; wQ < QQ.length; wQ += 3) {
-             const LQ = wQ / 3 * 4;
-             FQ[LQ] = QQ[wQ], FQ[LQ + 1] = QQ[wQ + 1], FQ[LQ + 2] = QQ[wQ + 2], FQ[LQ + 3] = 1
-           }
-           return FQ
-         }
-         return QQ
+       clone() {
+         return new Dk(this.x, this.y, this.width, this.height)
```

#### 41. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L590` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L367) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L590)

```diff
-   36705: (QQ, FQ, wQ) => {
+   39995: (kk, ek, ik) => {
```

#### 42. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L592-L594` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L369) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L592-L594)

```diff
-       b: () => oQ,
-       d: () => LQ,
-       g: () => qQ
+       e: () => mk
```

#### 43. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L596-L643` → after: `L371-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L371-L375) · [Before (L596-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L596-L643)

```diff
-     const LQ = 1 / 2.2,
-       qQ = 2.2;
-     Math.sqrt(5);
-     let oQ = .001
-   },
-   36729: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return parseInt(QQ.toString().replace(/\W/g, ""))
-     }
- 
-     function qQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(QQ - FQ) <= wQ
-     }
- 
-     function oQ(QQ, FQ, wQ) {
- ... (32 more removed lines; see GitHub link above)
+     var Dk = ik(36698),
+       fk = ik(36874),
+       Sk = ik(39997),
+       bk = ik(40001),
+       rk = ik(40014);
```

#### 44. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L646-L648` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L378-L427) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L646-L648)

```diff
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(wQ, Math.max(FQ, QQ))
+       let ek = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const ik = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         Sk = [],
+         Pk = kk.width || kk.size || 1,
+         mk = kk.height || kk.size || 1,
+         Mk = kk.depth || kk.size || 1,
+         Kk = kk.wrap || !1;
+       let xk = void 0 === kk.topBaseAt ? 1 : kk.topBaseAt,
+         nk = void 0 === kk.bottomBaseAt ? 0 : kk.bottomBaseAt;
+       xk = (xk + 4) % 4, nk = (nk + 4) % 4;
+       let Uk = [2, 0, 3, 1][xk],
+         Hk = [2, 0, 1, 3][nk],
+         wk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (Kk) {
+         ek = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], wk = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let kk = [
+ ... (34 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L652` → after: `L431-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L431-L435) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L652)

```diff
-       return QQ -= 2 * Math.PI * Math.floor((QQ + Math.PI) / (2 * Math.PI))
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Dk = new Sk.e(kk, ik);
+       ek.sideOrientation = Sk.e._GetDefaultSideOrientation(ek.sideOrientation), Dk._originalBuilderSideOrientation = ek.sideOrientation;
+       return Pk(ek).applyToMesh(Dk, ek.updatable), Dk
```

#### 46. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L656-L657` → after: `L458-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L458-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L458-L486) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L656-L657)

```diff
-       const FQ = QQ.toString(16);
-       return QQ <= 15 ? ("0" + FQ).toUpperCase() : FQ.toUpperCase()
+       const ek = [],
+         ik = [],
+         Dk = kk.lines,
+         fk = kk.colors,
+         bk = [];
+       let rk = 0;
+       for (let Sk = 0; Sk < Dk.length; Sk++) {
+         const kk = Dk[Sk];
+         for (let Dk = 0; Dk < kk.length; Dk++) {
+           const {
+             x: Pk,
+             y: mk,
+             z: Mk
+           } = kk[Dk];
+           if (ik.push(Pk, mk, Mk), fk) {
+             const kk = fk[Sk],
+ ... (13 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L661-L670` → after: `L490-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L490-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L490-L507) · [Before (L661-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L661-L670)

```diff
-       if (Math.log2) return Math.floor(Math.log2(QQ));
-       if (QQ < 0) return NaN;
-       if (0 === QQ) return -1 / 0;
-       let FQ = 0;
-       if (QQ < 1) {
-         for (; QQ < 1;) FQ++, QQ *= 2;
-         FQ = -FQ
-       } else if (QQ > 1)
-         for (; QQ > 1;) FQ++, QQ = Math.floor(QQ / 2);
-       return FQ
+       const ek = kk.dashSize || 3,
+         ik = kk.gapSize || 1,
+         fk = kk.dashNb || 200,
+         bk = kk.points,
+         rk = [],
+         Pk = [],
+         mk = Dk.o.Zero();
+       let Mk, Kk, xk, nk = 0,
+         Uk = 0;
+       for (xk = 0; xk < bk.length - 1; xk++) bk[xk + 1].subtractToRef(bk[xk], mk), nk += mk.length();
+       const Hk = nk / fk,
+         wk = ek * Hk / (ek + ik);
+       for (xk = 0; xk < bk.length - 1; xk++) {
+         bk[xk + 1].subtractToRef(bk[xk], mk), Mk = Math.floor(mk.length() / Hk), mk.normalize();
+         for (let kk = 0; kk < Mk; kk++) Kk = Hk * kk, rk.push(bk[xk].x + Kk * mk.x, bk[xk].y + Kk * mk.y, bk[xk].z + Kk * mk.z), rk.push(bk[xk].x + (Kk + wk) * mk.x, bk[xk].y + (Kk + wk) * mk.y, bk[xk].z + (Kk + wk) * mk.z), Pk.push(Uk, Uk + 1), Uk += 2
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L674-L682` → after: `L511-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L511-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L511-L529) · [Before (L674-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L674-L682)

```diff
-       return QQ - Math.floor(QQ / FQ) * FQ
-     }
- 
-     function eQ(QQ, FQ, wQ) {
-       return (QQ - FQ) / (wQ - FQ)
-     }
- 
-     function MQ(QQ, FQ, wQ) {
-       return QQ * (wQ - FQ) + FQ
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Dk = ek.instance,
+         fk = ek.lines,
+         Sk = ek.colors;
+       if (Dk) {
+         const kk = Dk.getVerticesData(rk.e.PositionKind);
+         let ek, ik;
+         Sk && (ek = Dk.getVerticesData(rk.e.ColorKind));
+         let bk = 0,
+           Pk = 0;
+         for (let Dk = 0; Dk < fk.length; Dk++) {
+           const rk = fk[Dk];
+           for (let fk = 0; fk < rk.length; fk++) kk[bk] = rk[fk].x, kk[bk + 1] = rk[fk].y, kk[bk + 2] = rk[fk].z, Sk && ek && (ik = Sk[Dk], ek[Pk] = ik[fk].r, ek[Pk + 1] = ik[fk].g, ek[Pk + 2] = ik[fk].b, ek[Pk + 3] = ik[fk].a, Pk += 4), bk += 3
+         }
+         return Dk.updateVerticesData(rk.e.PositionKind, kk, !1, !1), Sk && ek && Dk.updateVerticesData(rk.e.ColorKind, ek, !1, !1), Dk.refreshBoundingInfo(), Dk
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L686-L687` → after: `L533-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L533-L542) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L686-L687)

```diff
-       let wQ = tQ(FQ - QQ, 360);
-       return wQ > 180 && (wQ -= 360), wQ
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Dk = ek.colors ? [ek.colors] : null;
+       return Kk(kk, {
+         lines: [ek.points],
+         updatable: ek.updatable,
+         instance: ek.instance,
+         colors: Dk,
+         useVertexAlpha: ek.useVertexAlpha,
+         material: ek.material
+       }, ik)
```

#### 50. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L691-L702` → after: `L546-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L546-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L546-L568) · [Before (L691-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L691-L702)

```diff
-       const wQ = tQ(QQ, 2 * FQ);
-       return FQ - Math.abs(wQ - FQ)
-     }
- 
-     function cQ(QQ, FQ, wQ) {
-       let LQ = bQ(wQ);
-       return LQ = -2 * LQ * LQ * LQ + 3 * LQ * LQ, FQ * LQ + QQ * (1 - LQ)
-     }
- 
-     function CQ(QQ, FQ, wQ) {
-       let LQ;
-       return LQ = Math.abs(FQ - QQ) <= wQ ? FQ : QQ + Math.sign(FQ - QQ) * wQ, LQ
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Sk = ek.points,
+         rk = ek.instance,
+         mk = ek.gapSize || 1,
+         Kk = ek.dashSize || 3;
+       if (rk) {
+         const kk = kk => {
+           const ek = Dk.o.Zero(),
+             ik = kk.length / 6;
+           let fk, bk, Pk, mk, Mk = 0,
+             Kk = 0;
+           for (Pk = 0; Pk < Sk.length - 1; Pk++) Sk[Pk + 1].subtractToRef(Sk[Pk], ek), Mk += ek.length();
+           const xk = Mk / ik,
+             nk = rk._creationDataStorage.dashSize,
+             Uk = nk * xk / (nk + rk._creationDataStorage.gapSize);
+           for (Pk = 0; Pk < Sk.length - 1; Pk++)
+ ... (7 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L704-L708` → after: `L570-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L570-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L570-L691) · [Before (L704-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L704-L708)

```diff
- 
-     function SQ(QQ, FQ, wQ) {
-       const LQ = GQ(QQ, FQ);
-       let qQ;
-       return qQ = -wQ < LQ && LQ < wQ ? FQ : CQ(QQ, FQ = QQ + LQ, wQ), qQ
+     let Uk = !1;
+     Uk || (Uk = !0, Sk.b.CreateLineSystem = mk, Sk.b.CreateDashedLines = Mk, fk.e.CreateLines = function(kk, ek) {
+       return xk(kk, {
+         points: ek,
+         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     }, fk.e.CreateDashedLines = function(kk, ek, ik, Dk, fk) {
+       return nk(kk, {
+         points: ek,
+         dashSize: ik,
+         gapSize: Dk,
+         dashNb: fk,
+         updatable: arguments.length > 6 ? arguments[6] : void 0,
+         instance: arguments.length > 7 ? arguments[7] : void 0
+       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
+ ... (106 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L710-L712` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L693-L700) · [Before (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L710-L712)

```diff
- 
-     function iQ(QQ, FQ, wQ) {
-       return (QQ - FQ) / (wQ - FQ)
+     xk.ForceGLSL = !1;
+     class nk extends Pk.b {
+       constructor(kk, ek) {
+         super(kk, ek), this.intersectionThreshold = ek.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 53. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L715-L716` → after: `L704-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L704-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L704-L748) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L715-L716)

```diff
-     function WQ(QQ, FQ, wQ) {
-       return (wQ - FQ) * QQ + FQ
+     function Hk() {
+       Uk || (Uk = !0, rk.e._LinesMeshParser = (kk, ek) => xk.Parse(kk, ek))
+     }(Dk = xk.prototype).enableEdgesRendering ?? (Dk.enableEdgesRendering = (0, Kk.i)("LinesMesh", "enableEdgesRendering")), (fk = nk.prototype).enableEdgesRendering ?? (fk.enableEdgesRendering = (0, Kk.i)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   38265: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk
+     });
+     var Dk = ik(38272);
+     const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
+       ...kk
+     } : null : kk.clone(ek) : null;
+     class Sk {
+       static DeepCopy(kk, ek, ik, Sk) {
+         let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const rk = function(kk) {
+ ... (29 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L718-L721` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L750-L756) · [Before (L718-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L718-L721)

```diff
- 
-     function RQ(QQ, FQ) {
-       const wQ = QQ % FQ;
-       return 0 === wQ ? FQ : RQ(FQ, wQ)
+   },
+   37497: (kk, ek, ik) => {
+     function Dk() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
+         const ek = 16 * Math.random() | 0;
+         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
+       }))
```

#### 55. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L723-L747` → after: `L758-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L758-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L758-L759) · [Before (L723-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L723-L747)

```diff
-     wQ.r(FQ), wQ.d(FQ, {
-       Clamp: () => bQ,
-       DeltaAngle: () => GQ,
-       Denormalize: () => MQ,
-       ExtractAsInt: () => LQ,
-       Hermite: () => uQ,
-       Hermite1stDerivative: () => HQ,
-       HighestCommonFactor: () => RQ,
-       ILog2: () => AQ,
-       InverseLerp: () => mQ,
-       Lerp: () => kQ,
-       LerpAngle: () => vQ,
-       MoveTowards: () => CQ,
-       MoveTowardsAngle: () => SQ,
-       Normalize: () => eQ,
-       NormalizeRadians: () => YQ,
- ... (9 more removed lines; see GitHub link above)
+     ik.d(ek, {
+       b: () => Dk
```

#### 56. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L750-L759` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L762) · [Before (L750-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L750-L759)

```diff
-   36709: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ) {
-       const wQ = [];
-       for (let LQ = 0; LQ < QQ; ++LQ) wQ.push(FQ());
-       return wQ
-     }
- 
-     function qQ(QQ, FQ) {
-       return LQ(QQ, FQ)
-     }
+   38272: (kk, ek, ik) => {
```

#### 57. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L761-L763` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L764) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L761-L763)

```diff
-       b: () => LQ,
-       f: () => qQ,
-       h: () => DQ
+       b: () => Dk
```

#### 58. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L765-L784` → after: `L766-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L766-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L766-L816) · [Before (L765-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L765-L784)

```diff
-     const oQ = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function DQ(QQ, FQ) {
-       const wQ = oQ.map((wQ => function(QQ, FQ, wQ) {
-         const LQ = QQ[FQ];
-         if ("function" !== typeof LQ) return null;
-         const qQ = function() {
-           const LQ = QQ.length,
-             oQ = qQ.previous.apply(QQ, arguments);
-           return wQ(FQ, LQ), oQ
-         };
-         return LQ.next = qQ, qQ.previous = LQ, QQ[FQ] = qQ, () => {
-           const wQ = qQ.previous;
-           if (!wQ) return;
-           const LQ = qQ.next;
-           LQ ? (wQ.next = LQ, LQ.previous = wQ) : (wQ.next = void 0, QQ[FQ] = wQ), qQ.next = void 0, qQ.previous = void 0
- ... (4 more removed lines; see GitHub link above)
+     class Dk {
+       static _CheckLimit(kk, ek) {
+         let ik = Dk._LogLimitOutputs[kk];
+         return ik ? ik.current++ : (ik = {
+           limit: ek,
+           current: 1
+         }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
+       }
+       static _GenerateLimitMessage(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ik = Dk._LogLimitOutputs[kk];
+         if (!ik || !Dk.MessageLimitReached) return;
+         const fk = this._Levels[ek];
+         ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
+       }
+       static _AddLogEntry(kk) {
+ ... (35 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L788` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L833) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L788)

```diff
-   36741: (QQ, FQ, wQ) => {
+   39651: (kk, ek, ik) => {
```

#### 60. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L790-L791` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L835) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L790-L791)

```diff
-       b: () => oQ,
-       e: () => qQ
+       d: () => Dk.f
```

#### 61. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L793-L801` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/227.js#L837-L838) · [Before (L793-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/227.js#L793-L801)

```diff
-     const LQ = {};
- 
-     function qQ(QQ, FQ) {
-       LQ[QQ] = FQ
-     }
- 
-     function oQ(QQ) {
-       return LQ[QQ]
-     }
+     var Dk = ik(39653);
+     (0, Dk.b)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L2)

```diff
- export const ids = [228];
+ export const ids = [228, 233];
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L4)

```diff
-   36720: (QQ, FQ, wQ) => {
+   41420: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L8` → after: `L8-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L8-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L8-L90) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L8)

```diff
-     var LQ = wQ(36722);
+     var Dk = ik(41347),
+       fk = ik(39564);
+     let Sk = !1;
+ 
+     function bk() {
+       Sk || (Sk = !0, fk.b.prototype._sphericalPolynomialTargetSize = 0, fk.b.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(fk.b.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Dk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = kk, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (67 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L10-L11` → after: `L92-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L92-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L92-L102) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L10-L11)

```diff
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       constructor(kk, ek, ik, fk) {
+         this.normal = new Dk.o(kk, ek, ik), this.d = fk
+       }
+       Tik() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
```

#### 5. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13-L14` → after: `L104-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L104-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L104-L166) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+       getHashCode() {
+         let kk = this.normal.getHashCode();
+         return kk = 397 * kk ^ this.d, kk
+       }
+       normalize() {
+         const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ek = 0;
+         return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
+       }
+       transform(kk) {
+         const ek = fk._TmpMatrix;
+         kk.invertToRef(ek);
+         const ik = ek.m,
+           Dk = this.normal.x,
+           Sk = this.normal.y,
+           bk = this.normal.z,
+ ... (47 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L17` → after: `L169-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L169-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L169-L182) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L17)

```diff
-     qQ.Instances = [], qQ.OnEnginesDisposedObservable = new LQ.e, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
+     fk._TmpMatrix = Dk.b.Identity()
+   },
+   36690: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       Matrix: () => Dk.b,
+       Quaternion: () => Dk.c,
+       RegisterMathVector: () => Dk.g,
+       TmpVectors: () => Dk.j,
+       Vector2: () => Dk.l,
+       eH: () => Dk.o,
+       Vector4: () => Dk.p
+     });
+     var Dk = ik(36698);
+     (0, Dk.g)()
```

#### 7. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L19` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L184) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L19)

```diff
-   38200: (QQ, FQ, wQ) => {
+   37679: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L28-L56` → after: `L189-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L189-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L189-L337) · [Before (L28-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L28-L56)

```diff
-       static DeepCopy(QQ, FQ, wQ, oQ) {
-         let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kQ = function(QQ) {
-           const FQ = [];
-           do {
-             const wQ = Object.getOwnPropertyNames(QQ);
-             for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
-           } while (QQ = Object.getPrototypeOf(QQ));
-           return FQ
-         }(QQ);
-         for (const mQ of kQ) {
-           if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
-           if (mQ.endsWith("Observable")) continue;
-           if (wQ && -1 !== wQ.indexOf(mQ)) continue;
-           const kQ = QQ[mQ],
-             uQ = typeof kQ;
- ... (13 more removed lines; see GitHub link above)
+       constructor(kk, ek, ik, Dk) {
+         this.x = kk, this.y = ek, this.width = ik, this.height = Dk
+       }
+       toGlobal(kk, ek) {
+         return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
+       }
+       toGlobalToRef(kk, ek, ik) {
+         return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
+       }
+       clone() {
+         return new Dk(this.x, this.y, this.width, this.height)
+       }
+     }
+   },
+   41347: (kk, ek, ik) => {
+     ik.d(ek, {
+ ... (133 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L62` → after: `L346-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L346-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L346-L354) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L62)

```diff
-   37452: (QQ, FQ, wQ) => {
+   41109: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Dk.f,
+       e: () => Dk.o
+     });
+     var Dk = ik(39607);
+     (0, Dk.s)()
+   },
+   37497: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L66` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L358) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L66)

```diff
-         return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
+         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
```

#### 11. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L70` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L362) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L70)

```diff
-       d: () => LQ
+       b: () => Dk
```

#### 12. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L73` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L365) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L73)

```diff
-   38203: (QQ, FQ, wQ) => {
+   41393: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L75` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L367) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L75)

```diff
-       c: () => LQ
+       e: () => Sk
```

#### 14. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L78-L142` → after: `L372-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L372-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L372-L418) · [Before (L78-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L78-L142)

```diff
-       static _CheckLimit(QQ, FQ) {
-         let wQ = LQ._LogLimitOutputs[QQ];
-         return wQ ? wQ.current++ : (wQ = {
-           limit: FQ,
-           current: 1
-         }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
-       }
-       static _GenerateLimitMessage(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const wQ = LQ._LogLimitOutputs[QQ];
-         if (!wQ || !LQ.MessageLimitReached) return;
-         const qQ = this._Levels[FQ];
-         wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
-       }
-       static _AddLogEntry(QQ) {
-         LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
- ... (49 more removed lines; see GitHub link above)
+       static ExpandRGBDTexture(kk) {
+         const ek = kk._texture;
+         if (!ek || !kk.isRGBD) return;
+         const fk = ek.JU(),
+           Sk = fk.getCaps(),
+           bk = ek.isReady;
+         let rk = !1;
+         Sk.textureHalfFloatRender && Sk.textureHalfFloatLinearFiltering ? (rk = !0, ek.type = 2) : Sk.textureFloatRender && Sk.textureFloatLinearFiltering && (rk = !0, ek.type = 1), rk && (ek.isReady = !1, ek._isRGBD = !1, ek.invertY = !1);
+         const Pk = async () => {
+           const Sk = fk.isWebGPU,
+             bk = Sk ? 1 : 0;
+           ek.isReady = !1, Sk ? await ik.e(341).then((() => ik(60794))) : await ik.e(323).then((() => ik(60800)));
+           const rk = new Dk.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fk, !1, void 0, ek.type, void 0, null, !1, void 0, bk);
+           rk.externalTextureSamplerBinding = !0;
+           const Pk = fk.createRenderTargetTexture(ek.width, {
+             generateDepthBuffer: !1,
+ ... (31 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L144` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L420) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L144)

```diff
-   36722: (QQ, FQ, wQ) => {
+   41430: (kk, ek, ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L146` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L422) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L146)

```diff
-       e: () => DQ
+       c: () => fk
```

#### 17. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L151-L154` → after: `L426-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L426-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L426-L429) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L151-L154)

```diff
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wQ = arguments.length > 2 ? arguments[2] : void 0,
-           LQ = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(QQ, FQ, wQ, LQ)
+         this._pendingActions = new Array, this._workerInfos = kk.map((kk => ({
+           workerPromise: Promise.resolve(kk),
+           idle: !0
+         })))
```

#### 18. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L156-L160` → after: `L431-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L431-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L431-L451) · [Before (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L156-L160)

```diff
-       initialize(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wQ = arguments.length > 2 ? arguments[2] : void 0,
-           LQ = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = QQ, this.skipNextObservers = FQ, this.target = wQ, this.currentTarget = LQ, this
+       dispose() {
+         for (const kk of this._workerInfos) kk.workerPromise.then((kk => {
+           kk.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(kk) {
+         this._executeOnIdleWorker(kk) || this._pendingActions.push(kk)
+       }
+       _executeOnIdleWorker(kk) {
+         for (const ek of this._workerInfos)
+           if (ek.idle) return this._execute(ek, kk), !0;
+         return !1
+       }
+       _execute(kk, ek) {
+         kk.idle = !1, kk.workerPromise.then((ik => {
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L163` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L454) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L163)

```diff
-     class oQ {
+     class fk extends Dk {
```

#### 20. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L165-L166` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L456-L457) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L165-L166)

```diff
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = QQ, this.mask = FQ, this.scope = wQ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.DefaultOptions;
+         super([]), this._maxWorkers = kk, this._createWorkerAsync = ek, this._options = ik
```

#### 21. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L168-L170` → after: `L459-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L459-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L459-L479) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L168-L170)

```diff
-       remove() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(QQ)
+       push(kk) {
+         if (!this._executeOnIdleWorker(kk))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const ek = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(ek), this._execute(ek, kk)
+           } else this._pendingActions.push(kk)
+       }
+       _execute(kk, ek) {
+         kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((ik, Dk) => {
+           ek(ik, (() => {
+             Dk(), kk.idle && (kk.timeoutId = setTimeout((() => {
+               kk.workerPromise.then((kk => {
+                 kk.terminate()
+ ... (5 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L174-L216` → after: `L619-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L619-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L619-L669) · [Before (L174-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L174-L216)

```diff
-       static FromPromise(QQ, FQ) {
-         const wQ = new DQ;
-         return QQ.then((QQ => {
-           wQ.notifyObservers(QQ)
-         })).catch((QQ => {
-           if (!FQ) throw QQ;
-           FQ.notifyObservers(QQ)
-         })), wQ
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = FQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
-       }
- ... (27 more removed lines; see GitHub link above)
+       static OBJ(kk, ek, ik, bk) {
+         const rk = [];
+         let Pk = 1,
+           mk = 1;
+         ek && (ik || (ik = "mat"), rk.push("mtllib " + ik + ".mtl"));
+         for (let Mk = 0; Mk < kk.length; Mk++) {
+           const ik = kk[Mk],
+             Kk = ik.name || `mesh${Mk}}`;
+           rk.push(`o ${Kk}`);
+           let xk = null;
+           if (bk) {
+             const kk = ik.computeWorldMatrix(!0);
+             xk = new Dk.Matrix, kk.invertToRef(xk), ik.bakeTransformIntoVertices(kk)
+           }
+           if (ek) {
+             const kk = ik.material;
+ ... (35 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L218-L229` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L671) · [Before (L218-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L218-L229)

```diff
-         return !1
-       }
-       _deferUnregister(QQ) {
-         QQ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, QQ.unregisterOnNextCall = !1, QQ._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(QQ)
-         }), 0))
-       }
-       _remove(QQ) {
-         let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!QQ) return !1;
-         const wQ = this._observers.indexOf(QQ);
-         return -1 !== wQ && (FQ && this._numObserversMarkedAsDeleted--, this._observers.splice(wQ, 1), !0)
+         return rk.join("\n")
```

#### 24. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L231-L232` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L673-L679) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L231-L232)

```diff
-       makeObserverTopPriority(QQ) {
-         this._remove(QQ, !1), this._observers.unshift(QQ)
+       static MTL(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
+         const ik = [],
+           Dk = kk.material;
+         ik.push("newmtl " + ek), ik.push("  Ns " + Dk.specularPower.toFixed(4)), ik.push("  Ni 1.5000"), ik.push("  d " + Dk.alpha.toFixed(4)), ik.push("  Tr 0.0000"), ik.push("  Tf 1.0000 1.0000 1.0000"), ik.push("  illum 2"), ik.push("  Ka " + Dk.ambientColor.r.toFixed(4) + " " … [truncated]
+         Dk.ambientTexture && ik.push("  map_Ka " + Dk.ambientTexture.name), Dk.diffuseTexture && ik.push("  map_Kd " + Dk.diffuseTexture.name), Dk.specularTexture && ik.push("  map_Ks " + Dk.specularTexture.name), Dk.bumpTexture && ik.push("  map_bump -imfchan z " + Dk.bumpTextur … [truncated]
+         return ik.join("\n")
```

#### 25. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L234-L247` → after: `L681-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L681-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L681-L686) · [Before (L234-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L234-L247)

```diff
-       makeObserverBottomPriority(QQ) {
-         this._remove(QQ, !1), this._observers.push(QQ)
-       }
-       notifyObservers(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
-           wQ = arguments.length > 2 ? arguments[2] : void 0,
-           LQ = arguments.length > 3 ? arguments[3] : void 0,
-           qQ = arguments.length > 4 ? arguments[4] : void 0;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = QQ), !this._observers.length) return !0;
-         const oQ = this._eventState;
-         oQ.mask = FQ, oQ.target = wQ, oQ.currentTarget = LQ, oQ.skipNextObservers = !1, oQ.lastReturnValue = QQ, oQ.userInfo = qQ;
-         for (const DQ of this._observers)
-           if (!DQ._willBeUnregistered && (DQ.mask & FQ && (DQ.unregisterOnNextCall && this._deferUnregister(DQ), DQ.scope ? oQ.lastReturnValue = DQ.callback.apply(DQ.scope, [QQ, oQ]) : oQ.lastReturnValue = DQ.callback(QQ, oQ)), oQ.skipNextObservers)) return !1;
-         return !0
+     }
+     var rk = 0,
+       Pk = ik(41109);
+     class mk {
+       constructor() {
+         this.files = {}
```

#### 26. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L249-L253` → after: `L688-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L688-L689) · [Before (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L249-L253)

```diff
-       notifyObserver(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = FQ), QQ._willBeUnregistered) return;
-         const LQ = this._eventState;
-         LQ.mask = wQ, LQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(FQ, LQ)
+       get glTFFiles() {
+         return this.files
```

#### 27. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L255-L256` → after: `L691-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L691-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L691-L698) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L255-L256)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
+       downloadFiles() {
+         for (const kk in this.files) {
+           const ek = this.files[kk],
+             ik = new Blob([ek], {
+               type: (0, Pk.d)(kk)
+             });
+           fk.Tools.Download(ik, kk)
+         }
```

#### 28. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L258-L261` → after: `L700-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L700-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L700-L748) · [Before (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L258-L261)

```diff
-       clear() {
-         for (; this._observers.length;) {
-           const QQ = this._observers.pop();
-           QQ && (QQ._remove = null)
+     }
+     var Mk = ik(40729),
+       Kk = ik(40693),
+       xk = ik(41196),
+       nk = ik(40701),
+       Uk = ik(39377),
+       Hk = ik(36722),
+       wk = ik(36868),
+       lk = ik(36729);
+     const pk = lk.HighestCommonFactor,
+       yk = {
+         ...lk,
+         TwoPi: 2 * Math.PI,
+         Sign: Math.sign,
+         Log2: Math.log2,
+         HCF: pk
+ ... (33 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L263` → after: `L750-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L750-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L750-L762) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L263)

```diff
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+         return kk[ik]
+       },
+       Qk = kk => zk(kk, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5 … [truncated]
+       vk = kk => zk(kk, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT9 … [truncated]
+       Ek = kk => zk(kk, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABGSklEQVR42u3cx4tb6brvcf0DmmpUoxrUoAY1KCgwFAZjME1jjGmMTWNs2tjY2MY2DjjinHPOOeec3dXOOeecU2VlaSksSc/9aq1X0pJKqmD3Dn3upvnCSe197v38nlfS2fscW1x+kbCMloAsFY/skEY5KbVySb7JXfkoT+WtvJGX8ol/67s8lDr+o … [truncated]
+     var hk = ik(39653),
+       ak = ik(36698),
+       Wk = ik(39708),
+       tk = ik(39853),
+       Xk = ik(39956);
+     class Bk extends tk.d {
+       constructor() {
+         super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, thi … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L265-L266` → after: `L764-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L764-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L764-L994) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+     }
+     let ck = (() => {
+       var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
+       let Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk = Xk.e,
+         Yk = [],
+         Lk = [],
+         Ck = [],
+         Ak = [],
+         jk = [],
+         Vk = [],
+         Fk = [],
+         uk = [],
+         qk = [],
+         Ik = [],
+         zk = [],
+         Qk = [],
+ ... (215 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L268-L270` → after: `L996-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L996-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L996-L1392) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L268-L270)

```diff
-       clone() {
-         const QQ = new DQ;
-         return QQ._observers = this._observers.slice(0), QQ
+     }
+     let ee = (() => {
+       var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
+       let Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk = Xk.e,
+         Vk = [],
+         Fk = [],
+         uk = [],
+         qk = [],
+         Ik = [],
+         zk = [],
+         Qk = [],
+         vk = [],
+         Ek = [],
+         hk = [],
+         ak = [],
+         Wk = [],
+ ... (381 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L272-L276` → after: `L1394-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1394-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L1394-L1602) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const FQ of this._observers)
-           if (FQ.mask & QQ || FQ.mask === QQ) return !0;
-         return !1
+     }
+     let De = (() => {
+       var kk, ek, ik, Dk;
+       let fk, Sk, bk, rk, Pk, mk, Mk, Kk = Xk.e,
+         xk = [],
+         nk = [],
+         Uk = [],
+         Hk = [],
+         wk = [],
+         lk = [],
+         pk = [],
+         yk = [],
+         Yk = [],
+         Lk = [],
+         Ck = [],
+         Ak = [],
+ ... (193 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L279-L298` → after: `L1605-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1605-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L1605-L1786) · [Before (L279-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L279-L298)

```diff
-   },
-   60631: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       AsyncLoop: () => LQ.d,
-       RegisterTools: () => LQ.e,
-       Tools: () => LQ.g,
-       className: () => LQ.k
-     });
-     var LQ = wQ(39505);
-     (0, LQ.e)()
-   },
-   36741: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ,
-       e: () => qQ
-     });
- ... (4 more removed lines; see GitHub link above)
+     let Se = (() => {
+       var kk, ek, ik, Dk;
+       let fk, Sk, bk, rk, Pk, mk = Xk.e,
+         Mk = [],
+         Kk = [],
+         xk = [],
+         nk = [],
+         Uk = [],
+         Hk = [],
+         wk = [],
+         lk = [],
+         pk = [],
+         yk = [];
+       return kk = class extends mk {
+         get isEnabled() {
+           return (0, sk.b)(this, ek, "f")
+ ... (166 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L300-L302` → after: `L1788-L16192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1788-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/228.js#L1788-L16192) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/228.js#L300-L302)

```diff
- 
-     function oQ(QQ) {
-       return LQ[QQ]
+     let re = (() => {
+       var kk, ek, ik, Dk, fk, Sk, bk, rk;
+       let Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk = Xk.e,
+         pk = [],
+         yk = [],
+         Yk = [],
+         Lk = [],
+         Ck = [],
+         Ak = [],
+         jk = [],
+         Vk = [],
+         Fk = [],
+         uk = [],
+         qk = [],
+         Ik = [],
+         zk = [],
+ ... (14389 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L4-L7)

```diff
-   60660: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       DEVTOOLS_SHADERS: () => oQ,
-       registerDevtoolsShader: () => DQ
+   36722: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => fk
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L28` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L8-L14) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L9-L28)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(36795);
-     const oQ = {
-       devtoolsNormal: function(QQ) {
-         return {
-           vertex: `\n\t\t\t${(0,qQ.h)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.h)(QQ,"normal","vec3")}\n\t\t\t${(0,qQ.Lb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Lb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Sb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Tb)(QQ,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,qQ.Sb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.$)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.I)(QQ,"vec3","normalColor",`abs(${(0,qQ.bb)(QQ,"vNormal")})`)}\n\t\t\t\t${(0,qQ.V)(QQ)} = ${(0,qQ.q)(QQ,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(QQ) {
-         return {
-           vertex: `\n\t\t\t${(0,qQ.h)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.Lb)(QQ,"worldViewProjection","mat4")}\n\n\t\t\t${(0,qQ.Tb)(QQ,`\n\t\t\t\t${(0,qQ.n)(QQ)} = ${(0,qQ.Pb)(QQ,"worldViewProjection")} * ${(0,qQ.q)(QQ,"vec4",(0,qQ.Vb)(QQ,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,qQ.$)(QQ,`\n\t\t\t\t${(0,qQ.V)(QQ)} = ${(0,qQ.q)(QQ,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(QQ) {
- ... (4 more removed lines; see GitHub link above)
+     var Dk = ik(36726);
+     class fk {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L40` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L19) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L40)

```diff
-   36795: (QQ, FQ, wQ) => {
+   36713: (kk, ek, ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L42-L78` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L21) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L42-L78)

```diff
-       $: () => pQ,
-       B: () => bQ,
-       Bb: () => fQ,
-       Cb: () => hQ,
-       E: () => YQ,
-       F: () => HQ,
-       Gb: () => aQ,
-       I: () => uQ,
-       Jb: () => cQ,
-       Kb: () => mQ,
-       L: () => iQ,
-       Lb: () => eQ,
-       P: () => UQ,
-       Pb: () => rQ,
-       Sb: () => tQ,
-       T: () => oQ,
- ... (21 more removed lines; see GitHub link above)
+       c: () => Dk
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L80-L133` → after: `L23-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L23-L32) · [Before (L80-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L80-L133)

```diff
-     const LQ = {
-       GLSL: 0,
-       WGSL: 1
-     };
- 
-     function qQ(QQ) {
-       return QQ === LQ.WGSL
-     }
- 
-     function oQ(QQ, FQ, wQ) {
-       return qQ(QQ) ? wQ : FQ
-     }
-     const DQ = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
- ... (38 more removed lines; see GitHub link above)
+     class Dk {
+       static SetMatrixPrecision(kk) {
+         if (Dk.MatrixTrackPrecisionChange = !1, kk && !Dk.MatrixUse64Bits && Dk.MatrixTrackedMatrices)
+           for (let ek = 0; ek < Dk.MatrixTrackedMatrices.length; ++ek) {
+             const kk = Dk.MatrixTrackedMatrices[ek],
+               ik = kk._m;
+             kk._m = new Array(16);
+             for (let ek = 0; ek < 16; ++ek) kk._m[ek] = ik[ek]
+           }
+         Dk.MatrixUse64Bits = kk, Dk.MatrixCurrentType = Dk.MatrixUse64Bits ? Array : Float32Array, Dk.MatrixTrackedMatrices = null
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L155-L170` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L49) · [Before (L155-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L155-L170)

```diff
-       return qQ(QQ) ? "vertexOutputs.position" : "gl_Position"
-     }
- 
-     function GQ(QQ, FQ) {
-       return qQ(QQ) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${FQ}}` : `void main() {${FQ}}`
-     }
- 
-     function pQ(QQ, FQ) {
-       return qQ(QQ) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${FQ}}` : `void main() {${FQ}}`
-     }
- 
-     function cQ(QQ, FQ, wQ) {
-       if (qQ(QQ)) {
-         return [`var ${FQ}Sampler: sampler;`, `var ${FQ}: ${"2dArray"===wQ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
-       }
-       return `uniform highp ${"2dArray"===wQ?"sampler2DArray":"sampler2D"} ${FQ};`
+       kk.updateFlag = Dk._UpdateFlagSeed++
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L174-L210` → after: `L53-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L53-L88) · [Before (L174-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L174-L210)

```diff
-       return qQ(QQ) ? `textureSample(${FQ}, ${FQ}Sampler, ${wQ})` : `texture2D(${FQ}, ${wQ})`
-     }
- 
-     function SQ(QQ, FQ, wQ, LQ, oQ) {
-       if (qQ(QQ)) {
-         return `${oQ?"textureSampleLevel":"textureSample"}(${FQ}, ${FQ}Sampler, ${wQ}, ${mQ(QQ,`round(${LQ})`)}${oQ?`, ${oQ}`:""})`
-       }
-       const DQ = vQ(QQ, "vec3", wQ, LQ);
-       return oQ ? `textureLod(${FQ}, ${DQ}, ${oQ})` : `texture(${FQ}, ${DQ})`
-     }
- 
-     function iQ(QQ) {
-       return qQ(QQ) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function WQ(QQ) {
- ... (21 more removed lines; see GitHub link above)
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const fk = kk.Tik(),
+         Sk = ek.Tik(),
+         bk = fk[0],
+         rk = fk[1],
+         Pk = fk[2],
+         mk = fk[3],
+         Mk = fk[4],
+         Kk = fk[5],
+         xk = fk[6],
+         nk = fk[7],
+         Uk = fk[8],
+         Hk = fk[9],
+         wk = fk[10],
+         lk = fk[11],
+         pk = fk[12],
+ ... (20 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L214-L230` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L92-L93) · [Before (L214-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L214-L230)

```diff
-       return qQ(QQ) ? `frame.${FQ}` : wQ
-     }
- 
-     function UQ(QQ) {
-       return qQ(QQ) ? "scene.vEyePosition" : "vEyePosition"
-     }
- 
-     function NQ(QQ) {
-       return qQ(QQ) ? "mesh.visibility" : "visibility"
-     }
- 
-     function TQ(QQ) {
-       return qQ(QQ) ? "fragmentInputs.position" : "gl_FragCoord"
-     }
- 
-     function KQ(QQ) {
- ... (1 more removed lines; see GitHub link above)
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Sk(kk, ek, ik.Tik(), Dk), fk(ik)
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L234` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L97-L99) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L234)

```diff
-       return qQ(QQ) ? `dpdx(${FQ})` : `dFdx(${FQ})`
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Dk = kk.Tik();
+       ek[ik] = Dk[0], ek[ik + 1] = Dk[1], ek[ik + 2] = Dk[2], ek[ik + 3] = Dk[3], ek[ik + 4] = Dk[4], ek[ik + 5] = Dk[5], ek[ik + 6] = Dk[6], ek[ik + 7] = Dk[7], ek[ik + 8] = Dk[8], ek[ik + 9] = Dk[9], ek[ik + 10] = Dk[10], ek[ik + 11] = Dk[11], ek[ik + 12] = Dk[12], ek[ik + 13]  … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L238` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L103-L104) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L238)

```diff
-       return qQ(QQ) ? `dpdy(${FQ})` : `dFdy(${FQ})`
+       const ik = mk(kk, ek.Tik());
+       return ik && fk(ek), ik
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L242-L262` → after: `L108-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L108-L162) · [Before (L242-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L242-L262)

```diff
-       return qQ(QQ) ? `inverseSqrt(${FQ})` : `inversesqrt(${FQ})`
-     }
- 
-     function aQ(QQ, FQ, wQ, LQ) {
-       return qQ(QQ) ? `select(${LQ}, ${wQ}, ${FQ})` : `((${FQ}) ? (${wQ}) : (${LQ}))`
-     }
- 
-     function XQ(QQ, FQ, wQ) {
-       return qQ(QQ) ? `((${FQ}) - (${wQ}) * floor((${FQ}) / (${wQ})))` : `mod(${FQ}, ${wQ})`
-     }
- 
-     function fQ(QQ, FQ, wQ) {
-       return qQ(QQ) ? `${FQ} = vec4f(${wQ}, ${FQ}.a);` : `${FQ}.rgb = ${wQ};`
-     }
- 
-     function VQ(QQ, FQ, wQ) {
- ... (5 more removed lines; see GitHub link above)
+       const ik = kk.Tik(),
+         Dk = ik[0],
+         fk = ik[1],
+         Sk = ik[2],
+         bk = ik[3],
+         rk = ik[4],
+         Pk = ik[5],
+         mk = ik[6],
+         Mk = ik[7],
+         Kk = ik[8],
+         xk = ik[9],
+         nk = ik[10],
+         Uk = ik[11],
+         Hk = ik[12],
+         wk = ik[13],
+         lk = ik[14],
+ ... (39 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L265` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L166) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L265)

```diff
-   39251: (QQ, FQ, wQ) => {
+   36698: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L267` → after: `L168-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L168-L174) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L267)

```diff
-       c: () => LQ
+       b: () => Hk,
+       c: () => Uk,
+       g: () => Yk,
+       j: () => lk,
+       l: () => Kk,
+       o: () => xk,
+       p: () => nk
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L270-L271` → after: `L491-L2905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L491-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L491-L2905) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersRepository : LQ.ShadersRepositoryWGSL
+       get x() {
+         return this._x
+       }
+       set x(kk) {
+         this._x = kk, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(kk) {
+         this._y = kk, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+       }
+       set z(kk) {
+ ... (2399 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L273-L274` → after: `L2907-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L2907-L2909) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersStore : LQ.ShadersStoreWGSL
+       clone() {
+         const kk = new bk;
+         return kk._observers = this._observers.slice(0), kk
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L276-L277` → after: `L2911-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/229.js#L2911-L2915) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/229.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.IncludesShadersStore : LQ.IncludesShadersStoreWGSL
+       hasSpecificMask() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const ek of this._observers)
+           if (ek.mask & kk || ek.mask === kk) return !0;
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   36870: (QQ, FQ, wQ) => {
+   36874: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/230.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/230.js#L6-L7)

```diff
-       Color3: () => LQ.b,
-       b: () => LQ.e
+       e: () => Kk,
+       f: () => xk,
+       h: () => Hk,
+       k: () => nk
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L9-L10` → after: `L11-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L11-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/230.js#L11-L801) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/230.js#L9-L10)

```diff
-     var LQ = wQ(36873);
-     (0, LQ.h)()
+     var Dk = ik(36707),
+       fk = ik(36703),
+       Sk = ik(36729),
+       bk = ik(36734);
+ 
+     function rk(kk) {
+       return Math.pow(kk, fk.i)
+     }
+ 
+     function Pk(kk) {
+       return kk <= .04045 ? .0773993808 * kk : Math.pow(.947867299 * (kk + .055), 2.4)
+     }
+ 
+     function mk(kk) {
+       return Math.pow(kk, fk.e)
+     }
+ ... (775 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L11` → after: `L4-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/231.js#L4-L299) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/231.js#L4-L11)

```diff
-   40475: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       noaDevTools: () => HQ
-     });
-     var LQ = wQ(37129),
-       qQ = wQ(37118),
-       oQ = wQ(2676),
-       DQ = wQ(1725);
+   36722: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => fk
+     });
+     var Dk = ik(36726);
+     class fk {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     fk.Instances = [], fk.OnEnginesDisposedObservable = new Dk.c, fk._LastCreatedScene = null, fk.UseFallbackTexture = !0, fk.FallbackTexture = ""
+   },
+   38265: (kk, ek, ik) => {
+ ... (280 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L14-L554` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/231.js#L302) · [Before (L14-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/231.js#L14-L554)

```diff
-       const {
-         Zx: FQ
-       } = QQ, wQ = FQ.engine, LQ = {
-         width: wQ.getRenderWidth(),
-         height: wQ.getRenderHeight()
-       };
-       return {
-         canvas: wQ.getRenderingCanvas(),
-         maxTextureSize: wQ.getCaps().maxTextureSize,
-         drawing: () => !QQ.WC,
-         resize: (QQ, FQ) => {
-           wQ.setSize(QQ, FQ)
-         },
-         restoreSize: () => {
-           wQ.setSize(LQ.width, LQ.height), FQ.resize()
-         },
- ... (525 more removed lines; see GitHub link above)
+       return Dk[kk]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L2)

```diff
- export const ids = [232, 233];
+ export const ids = [232];
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L4-L7)

```diff
-   39686: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => uQ,
-       e: () => bQ
+   60682: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       DEVTOOLS_SHADERS: () => Sk,
+       registerDevtoolsShader: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L9-L92` → after: `L9-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L9-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L9-L30) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L9-L92)

```diff
-     var LQ = wQ(39402),
-       qQ = wQ(39409),
-       oQ = wQ(36696),
-       DQ = wQ(36873),
-       kQ = wQ(39690),
-       vQ = wQ(39650),
-       mQ = wQ(36741);
-     let uQ = (() => {
-         var QQ;
-         let FQ, wQ, vQ = kQ.c,
-           mQ = [],
-           uQ = [],
-           HQ = [],
-           bQ = [];
-         return QQ = class extends vQ {
-           constructor(QQ, FQ, wQ, qQ) {
- ... (68 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(36773);
+     const Sk = {
+       devtoolsNormal: function(kk) {
+         return {
+           vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.e)(kk,"normal","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,fk.Db)(kk,"world","mat4")}\n\t\t\t${(0,fk.Kb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,fk.Kb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,fk.F)(kk,"vec3","normalColor",`abs(${(0,fk.T)(kk,"vNormal")})`)}\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(kk) {
+         return {
+           vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${(0,fk.m)(kk)} = ${(0,fk.Hb)(kk,"worldViewProjection")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsDepth: function(kk) {
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L94-L95` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L32-L37) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L94-L95)

```diff
-     function bQ() {
-       HQ || (HQ = !0, vQ.c.AddNodeConstructor("Light_Type_3", ((QQ, FQ) => () => new uQ(QQ, oQ.p.Zero(), FQ))), (0, mQ.e)("BABYLON.HemisphericLight", uQ))
+     function bk(kk, ek) {
+       const {
+         vertex: ik,
+         fragment: fk
+       } = Sk[kk](ek), bk = Dk.d.GetShadersStore(ek);
+       bk[`${kk}VertexShader`] = ik, bk[`${kk}FragmentShader`] = fk
```

#### 5. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L98` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L40) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L98)

```diff
-   37320: (QQ, FQ, wQ) => {
+   36773: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L100` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L42-L78) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L100)

```diff
-       c: () => qQ
+       $: () => fk,
+       A: () => nk,
+       Ab: () => mk,
+       Db: () => lk,
+       E: () => Kk,
+       F: () => Mk,
+       Hb: () => uk,
+       I: () => jk,
+       Kb: () => wk,
+       L: () => Ik,
+       N: () => Sk,
+       Nb: () => yk,
+       O: () => vk,
+       Q: () => Qk,
+       Rb: () => dk,
+       S: () => Yk,
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L102-L140` → after: `L80-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L80-L86) · [Before (L102-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L102-L140)

```diff
-     var LQ = wQ(37324);
-     class qQ {
-       static GetPlanes(QQ) {
-         const FQ = [];
-         for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, FQ), FQ
-       }
-       static GetNearPlaneToRef(QQ, FQ) {
-         const wQ = QQ.m;
-         FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
-       }
-       static GetFarPlaneToRef(QQ, FQ) {
-         const wQ = QQ.m;
-         FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
-       }
-       static GetLeftPlaneToRef(QQ, FQ) {
- ... (23 more removed lines; see GitHub link above)
+     const Dk = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function fk(kk) {
+       return kk === Dk.WGSL
```

#### 8. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L142-L224` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L88-L90) · [Before (L142-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L142-L224)

```diff
-   },
-   37324: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ
-     });
-     var LQ = wQ(36696);
-     class qQ {
-       constructor(QQ, FQ, wQ, qQ) {
-         this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
-       }
-       RLQ() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (67 more removed lines; see GitHub link above)
+ 
+     function Sk(kk, ek, ik) {
+       return fk(kk) ? ik : ek
```

#### 9. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L226-L244` → after: `L92-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L92-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L92-L107) · [Before (L226-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L226-L244)

```diff
-     qQ._TmpMatrix = LQ.c.Identity()
-   },
-   37631: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ
-     });
-     class LQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         this.x = QQ, this.y = FQ, this.width = wQ, this.height = LQ
-       }
-       toGlobal(QQ, FQ) {
-         return new LQ(this.x * QQ, this.y * FQ, this.width * QQ, this.height * FQ)
-       }
-       toGlobalToRef(QQ, FQ, wQ) {
-         return wQ.x = this.x * QQ, wQ.y = this.y * FQ, wQ.width = this.width * QQ, wQ.height = this.height * FQ, this
-       }
- ... (3 more removed lines; see GitHub link above)
+     const bk = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+       ["vec3", "vec3f"],
+       ["vec4", "vec4f"],
+       ["mat2", "mat2x2f"],
+       ["mat3", "mat3x3f"],
+       ["mat4", "mat4x4f"]
+     ]);
+ 
+     function rk(kk, ek) {
+       if (!fk(kk)) return ek;
+       const ik = bk.get(ek);
+       if (!ik) throw new Error(`No WGSL name for shader type "${ek}"`);
+       return ik
```

#### 10. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L246-L287` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L109-L112) · [Before (L246-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L246-L287)

```diff
-   },
-   38200: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ
-     });
-     var LQ = wQ(38203);
-     const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(FQ) : null;
-     class oQ {
-       static DeepCopy(QQ, FQ, wQ, oQ) {
-         let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kQ = function(QQ) {
-           const FQ = [];
-           do {
-             const wQ = Object.getOwnPropertyNames(QQ);
- ... (26 more removed lines; see GitHub link above)
+ 
+     function Pk(kk, ek) {
+       for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
+       return `${rk(kk,ek)}(${Dk.join(", ")})`
```

#### 11. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L289-L295` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L114-L116) · [Before (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L289-L295)

```diff
-   },
-   37452: (QQ, FQ, wQ) => {
-     function LQ() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const FQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
-       }))
+ 
+     function mk(kk, ek) {
+       return Pk(kk, "int", ek)
```

#### 12. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L297-L356` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L118-L120) · [Before (L297-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L297-L356)

```diff
-     wQ.d(FQ, {
-       d: () => LQ
-     })
-   },
-   38203: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ
-     });
-     class LQ {
-       static _CheckLimit(QQ, FQ) {
-         let wQ = LQ._LogLimitOutputs[QQ];
-         return wQ ? wQ.current++ : (wQ = {
-           limit: FQ,
-           current: 1
-         }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
-       }
- ... (44 more removed lines; see GitHub link above)
+ 
+     function Mk(kk, ek, ik, Dk, Sk) {
+       return fk(kk) ? `var ${ik}: ${rk(kk,ek)} = ${Dk};` : `${Uk(kk,Sk)}${ek} ${ik} = ${Dk};`
```

#### 13. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L358-L417` → after: `L122-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L122-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L122-L124) · [Before (L358-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L358-L417)

```diff
-     LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels =  … [truncated]
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
-     }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
-   },
-   60637: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
- ... (44 more removed lines; see GitHub link above)
+ 
+     function Kk(kk, ek, ik) {
+       return fk(kk) ? `var ${ik}: ${rk(kk,ek)};` : `${ek} ${ik};`
```

#### 14. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L419-L449` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L126-L128) · [Before (L419-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L419-L449)

```diff
-     uQ.VertexUrl = "fxaa", uQ.FragmentUrl = "fxaa", uQ.Uniforms = ["texelSize"];
-     class HQ extends oQ.d {
-       getClassName() {
-         return "FxaaPostProcess"
-       }
-       constructor(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           qQ = arguments.length > 3 ? arguments[3] : void 0,
-           oQ = arguments.length > 4 ? arguments[4] : void 0,
-           DQ = arguments.length > 5 ? arguments[5] : void 0,
-           kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         const vQ = {
-           uniforms: uQ.Uniforms,
-           size: "number" === typeof FQ ? FQ : void 0,
-           camera: wQ,
-           samplingMode: qQ || LQ.e.BILINEAR_SAMPLINGMODE,
- ... (15 more removed lines; see GitHub link above)
+ 
+     function xk(kk, ek, ik, Dk) {
+       return fk(kk) ? `const ${ik}: ${rk(kk,ek)} = ${Dk};` : `const ${ek} ${ik} = ${Dk};`
```

#### 15. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L451-L474` → after: `L130-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L130-L133) · [Before (L451-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L451-L474)

```diff
-     var bQ = wQ(38203),
-       YQ = wQ(39505),
-       xQ = wQ(41235),
-       AQ = wQ(41214),
-       tQ = wQ(39289);
-     const eQ = 0;
-     class MQ {
-       constructor(QQ, FQ, wQ) {
-         this.name = QQ, this._parentTask = FQ, this._context = wQ, this.disabled = !1
-       }
-       setInitializeFunc(QQ) {
-         this._initFunc = QQ
-       }
-       setExecuteFunc(QQ) {
-         this._executeFunc = QQ
-       }
- ... (8 more removed lines; see GitHub link above)
+ 
+     function nk(kk, ek, ik, Dk, Sk) {
+       if (fk(kk)) {
+         return `fn ${ik}(${Dk.map((ek=>`${ek.name}: ${rk(kk,ek.type)}`)).join(", ")}) -> ${rk(kk,ek)} {${Sk}}`
```

#### 16. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L476` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L135) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L476)

```diff
-       _dispose() {}
+       return `${ek} ${ik}(${Dk.map((kk=>`${kk.type} ${kk.name}`)).join(", ")}) {${Sk}}`
```

#### 17. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L478-L494` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L137-L139) · [Before (L478-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L478-L494)

```diff
-     class GQ extends MQ {
-       static IsObjectListPass(QQ) {
-         return void 0 !== QQ.setObjectList
-       }
-       get objectList() {
-         return this._objectList
-       }
-       setObjectList(QQ) {
-         this._objectList = QQ
-       }
-       constructor(QQ, FQ, wQ, LQ) {
-         super(QQ, FQ, wQ), this._engine = LQ
-       }
-       _isValid() {
-         const QQ = super._isValid();
-         return QQ || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
- ... (1 more removed lines; see GitHub link above)
+ 
+     function Uk(kk, ek) {
+       return !ek || fk(kk) ? "" : `${ek} `
```

#### 18. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L496-L550` → after: `L141-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L141-L143) · [Before (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L496-L550)

```diff
-     class pQ extends MQ {
-       static IsRenderPass(QQ) {
-         return void 0 !== QQ.setRenderTarget
-       }
-       get renderTarget() {
-         return this._renderTarget
-       }
-       get renderTargetDepth() {
-         return this._renderTargetDepth
-       }
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
-       }
-       constructor(QQ, FQ, wQ, LQ) {
-         super(QQ, FQ, wQ), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = LQ
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function Hk(kk, ek, ik, Dk) {
+       return fk(kk) ? `attribute ${ek}: ${rk(kk,ik)};` : `attribute ${Uk(kk,Dk)}${ik} ${ek};`
```

#### 19. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L552-L659` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L145-L147) · [Before (L552-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L552-L659)

```diff
-     var cQ = wQ(36722);
-     class CQ {
-       get name() {
-         return this._name
-       }
-       set name(QQ) {
-         this._name = QQ
-       }
-       get disabled() {
-         return this._disabled
-       }
-       set disabled(QQ) {
-         this._disabled = QQ
-       }
-       get passes() {
-         return this._passes
- ... (92 more removed lines; see GitHub link above)
+ 
+     function wk(kk, ek, ik, Dk) {
+       return fk(kk) ? `varying ${ek}: ${rk(kk,ik)};` : `varying ${Uk(kk,Dk)}${ik} ${ek};`
```

#### 20. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L661-L707` → after: `L149-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L149-L151) · [Before (L661-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L661-L707)

```diff
-     class SQ extends CQ {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(QQ) {
-         this.postProcess.alphaMode = QQ
-       }
-       get drawWrapper() {
-         return this._postProcessDrawWrapper
-       }
-       constructor(QQ, FQ, wQ) {
-         super(QQ, FQ), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = wQ, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
-       }
-       isReady() {
-         return this.postProcess.isReady()
-       }
- ... (31 more removed lines; see GitHub link above)
+ 
+     function lk(kk, ek, ik) {
+       return fk(kk) ? `uniform ${ek}: ${rk(kk,ik)};` : `uniform ${ik} ${ek};`
```

#### 21. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L709-L722` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L153-L155) · [Before (L709-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L709-L722)

```diff
-     class iQ extends SQ {
-       constructor(QQ, FQ, wQ) {
-         super(QQ, FQ, wQ || new uQ(QQ, FQ.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           FQ = arguments.length > 1 ? arguments[1] : void 0,
-           wQ = arguments.length > 2 ? arguments[2] : void 0;
-         const LQ = super.record(QQ, FQ, wQ);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, LQ
-       }
+ 
+     function pk(kk) {
+       return fk(kk) ? "vertexOutputs.position" : "gl_Position"
```

#### 22. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L724-L731` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L157-L159) · [Before (L724-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L724-L731)

```diff
-     var WQ = wQ(41226);
-     class RQ extends SQ {
-       constructor(QQ, FQ, wQ) {
-         super(QQ, FQ, wQ || new WQ.f(QQ, FQ.engine))
-       }
-       getClassName() {
-         return "FrameGraphPassTask"
-       }
+ 
+     function yk(kk, ek) {
+       return fk(kk) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ek}}` : `void main() {${ek}}`
```

#### 23. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L733-L819` → after: `L161-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L161-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L161-L168) · [Before (L733-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L733-L819)

```diff
-     var OQ = wQ(39496),
-       sQ = wQ(39595),
-       rQ = wQ(39552),
-       IQ = wQ(39686),
-       UQ = wQ(36873);
-     class NQ {
-       getRenderCamera(QQ) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let FQ;
-           return FQ = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, QQ && FQ && FQ.isRigCamera ? FQ.rigParent : FQ
-         }
-       }
-       setRenderCamera(QQ) {
-         this._renderCamera = QQ
-       }
- ... (71 more removed lines; see GitHub link above)
+ 
+     function Yk(kk, ek) {
+       return fk(kk) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ek}}` : `void main() {${ek}}`
+     }
+ 
+     function Lk(kk, ek, ik) {
+       if (fk(kk)) {
+         return [`var ${ek}Sampler: sampler;`, `var ${ek}: ${"2dArray"===ik?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 24. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L822-L842` → after: `L172-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L172-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L172-L179) · [Before (L822-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L822-L842)

```diff
-     NQ._DefaultUtilityLayer = null, NQ._DefaultKeepDepthUtilityLayer = null;
-     const TQ = {
-       FindMainCamera: function(QQ) {
-         return QQ.findMainCamera()
-       },
-       FindMainObjectRenderer: function(QQ) {
-         return QQ.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(QQ) {
-         let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const wQ = QQ.lA,
-           LQ = new NQ(wQ, FQ, !0);
-         LQ.utilityLayerScene.activeCamera = wQ.activeCamera;
-         let qQ = TQ.FindMainCamera(wQ.frameGraph);
-         !qQ && wQ.cameras.length > 0 && (qQ = wQ.cameras[0]), qQ && (LQ.setRenderCamera(qQ), LQ.utilityLayerScene.activeCamera = qQ);
-         const oQ = wQ.onAfterRenderObservable.add((() => {
- ... (5 more removed lines; see GitHub link above)
+ 
+     function Ck(kk, ek, ik) {
+       return fk(kk) ? `textureSample(${ek}, ${ek}Sampler, ${ik})` : `texture2D(${ek}, ${ik})`
+     }
+ 
+     function Ak(kk, ek, ik, Dk, Sk) {
+       if (fk(kk)) {
+         return `${Sk?"textureSampleLevel":"textureSample"}(${ek}, ${ek}Sampler, ${ik}, ${mk(kk,`round(${Dk})`)}${Sk?`, ${Sk}`:""})`
```

#### 25. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L844-L845` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L181-L183) · [Before (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L844-L845)

```diff
-     };
-     let KQ = null;
+       const bk = Pk(kk, "vec3", ik, Dk);
+       return Sk ? `textureLod(${ek}, ${bk}, ${Sk})` : `texture(${ek}, ${bk})`
+     }
```

#### 26. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L847-L862` → after: `L185-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L185-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L185-L193) · [Before (L847-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L847-L862)

```diff
-     function zQ(QQ, FQ, wQ, LQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         DQ = arguments.length > 6 ? arguments[6] : void 0,
-         kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: mQ,
-         width: uQ
-       } = VQ(QQ, FQ, wQ);
-       if (!mQ || !uQ) return void bQ.c.Error("Invalid 'size' parameter !");
-       const HQ = FQ.iN();
-       let xQ = HQ.activeCamera !== FQ;
-       if (HQ.frameGraph) {
-         const QQ = TQ.FindMainObjectRenderer(HQ.frameGraph);
-         QQ && (xQ = QQ.camera !== FQ)
+     function jk(kk) {
+       return fk(kk) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
+     }
+ 
+     function sk(kk) {
+       return fk(kk) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 27. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L888-L898` → after: `L196-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L196-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L196-L234) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L888-L898)

```diff
-     async function lQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         qQ = arguments.length > 4 ? arguments[4] : void 0,
-         oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((vQ, mQ) => {
-         zQ(QQ, FQ, wQ, (QQ => {
-           "undefined" !== typeof QQ ? vQ(QQ) : mQ(new Error("Data is undefined"))
-         }), LQ, kQ, qQ, oQ, DQ)
-       }))
+ 
+     function dk(kk, ek) {
+       return fk(kk) ? `vertexInputs.${ek}` : ek
+     }
+ 
+     function Vk(kk, ek) {
+       return fk(kk) ? `vertexOutputs.${ek}` : ek
+     }
+ 
+     function Fk(kk, ek) {
+       return fk(kk) ? `fragmentInputs.${ek}` : ek
+     }
+ 
+     function uk(kk, ek) {
+       return fk(kk) ? `uniforms.${ek}` : ek
+     }
+ ... (23 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L900-L911` → after: `L236-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L236-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L236-L242) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L900-L911)

```diff
-     async function jQ(QQ, FQ, wQ, LQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         oQ = arguments.length > 5 ? arguments[5] : void 0,
-         DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((kQ => {
-         zQ(QQ, FQ, {
-           width: wQ,
-           height: LQ
-         }, (() => {
-           kQ()
-         }), qQ, !0, oQ, DQ)
-       }))
+ 
+     function hk(kk, ek) {
+       return fk(kk) ? `dpdy(${ek})` : `dFdy(${ek})`
+     }
+ 
+     function ak(kk, ek) {
+       return fk(kk) ? `inverseSqrt(${ek})` : `inversesqrt(${ek})`
```

#### 29. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L915-L986` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L246) · [Before (L915-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L915-L986)

```diff
-       let kQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         vQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         mQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         uQ = arguments.length > 7 ? arguments[7] : void 0,
-         YQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         eQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         MQ = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         GQ = arguments.length > 11 ? arguments[11] : void 0,
-         pQ = arguments.length > 12 ? arguments[12] : void 0,
-         cQ = arguments.length > 13 ? arguments[13] : void 0,
-         CQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         SQ = arguments.length > 15 ? arguments[15] : void 0;
-       const iQ = FQ.iN();
-       if (iQ.frameGraph) return void fQ(iQ.frameGraph, FQ, oQ, kQ, vQ, mQ, uQ, GQ, cQ, !DQ).then((QQ => {
-         DQ && DQ(QQ)
-       }));
- ... (56 more removed lines; see GitHub link above)
+       return fk(kk) ? `select(${Dk}, ${ik}, ${ek})` : `((${ek}) ? (${ik}) : (${Dk}))`
```

#### 30. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L988-L1003` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L248-L250) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L988-L1003)

```diff
-     async function XQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         DQ = arguments.length > 6 ? arguments[6] : void 0,
-         kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         mQ = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         uQ = arguments.length > 10 ? arguments[10] : void 0,
-         HQ = arguments.length > 11 ? arguments[11] : void 0,
-         bQ = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((YQ, xQ) => {
-         aQ(QQ, FQ, wQ, (QQ => {
-           "undefined" !== typeof QQ ? YQ(QQ) : xQ(new Error("Data is undefined"))
-         }), LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ)
-       }))
+ 
+     function tk(kk, ek, ik) {
+       return fk(kk) ? `((${ek}) - (${ik}) * floor((${ek}) / (${ik})))` : `mod(${ek}, ${ik})`
```

#### 31. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L1005-L1092` → after: `L252-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L252-L254) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L1005-L1092)

```diff
-     async function fQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         DQ = arguments.length > 6 ? arguments[6] : void 0,
-         kQ = arguments.length > 7 ? arguments[7] : void 0,
-         vQ = arguments.length > 8 ? arguments[8] : void 0,
-         mQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         uQ = arguments.length > 10 ? arguments[10] : void 0;
-       const HQ = QQ.engine,
-         bQ = QQ.textureManager,
-         {
-           height: YQ,
-           width: AQ,
-           finalWidth: tQ,
-           finalHeight: MQ
- ... (72 more removed lines; see GitHub link above)
+ 
+     function Xk(kk, ek, ik) {
+       return fk(kk) ? `${ek} = vec4f(${ik}, ${ek}.a);` : `${ek}.rgb = ${ik};`
```

#### 32. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L1096-L1109` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L258) · [Before (L1096-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L1096-L1109)

```diff
-       let LQ = 0,
-         qQ = 0,
-         oQ = 0,
-         DQ = 0;
-       if ("object" === typeof wQ) {
-         const kQ = wQ.precision ? Math.abs(wQ.precision) : 1;
-         wQ.width && wQ.height ? (LQ = wQ.height * kQ, qQ = wQ.width * kQ) : wQ.width && !wQ.height ? (qQ = wQ.width * kQ, LQ = Math.round(qQ / QQ.getAspectRatio(FQ))) : wQ.height && !wQ.width ? (LQ = wQ.height * kQ, qQ = Math.round(LQ * QQ.getAspectRatio(FQ))) : (qQ = Math.round( … [truncated]
-       } else isNaN(wQ) || (LQ = wQ, qQ = wQ, oQ = wQ, DQ = wQ);
-       return qQ && (qQ = Math.floor(qQ)), LQ && (LQ = Math.floor(LQ)), oQ && (oQ = Math.floor(oQ)), DQ && (DQ = Math.floor(DQ)), {
-         height: 0 | LQ,
-         width: 0 | qQ,
-         finalWidth: 0 | oQ,
-         finalHeight: 0 | DQ
-       }
+       return fk(kk) ? `${ek} = vec4f(${ek}.rgb * (${ik}), ${ek}.a);` : `${ek}.rgb *= ${ik};`
```

#### 33. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L1121-L1124` → after: `L261-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L261-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L261-L278) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L1121-L1124)

```diff
-     function EQ() {
-       if (JQ) return;
-       JQ = !0;
-       YQ.g.CreateScreenshot = zQ, YQ.g.CreateScreenshotAsync = lQ, YQ.g.CreateScreenshotUsingRenderTarget = aQ, YQ.g.CreateScreenshotUsingRenderTargetAsync = XQ
+     function ck(kk, ek, ik) {
+       return fk(kk) ? `${ek} = vec4f(${ik}, ${ek}.w);` : `${ek}.xyz = ${ik};`
+     }
+   },
+   39412: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Dk
+     });
+     class Dk {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersRepository : Dk.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersStore : Dk.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+ ... (2 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L1126` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/232.js#L280) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/232.js#L1126)

```diff
-     EQ()
+     Dk.ShadersRepository = "src/Shaders/", Dk.ShadersStore = {}, Dk.IncludesShadersStore = {}, Dk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Dk.ShadersStoreWGSL = {}, Dk.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/233.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/233.js#L4)

```diff
-   37320: (QQ, FQ, wQ) => {
+   36868: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/233.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/233.js#L6)

```diff
-       c: () => qQ
+       Color3: () => Dk.e,
+       e: () => Dk.f
```

#### 3. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L8-L257` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/233.js#L9-L10) · [Before (L8-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/233.js#L8-L257)

```diff
-     var LQ = wQ(37324);
-     class qQ {
-       static GetPlanes(QQ) {
-         const FQ = [];
-         for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, FQ), FQ
-       }
-       static GetNearPlaneToRef(QQ, FQ) {
-         const wQ = QQ.m;
-         FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
-       }
-       static GetFarPlaneToRef(QQ, FQ) {
-         const wQ = QQ.m;
-         FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
-       }
-       static GetLeftPlaneToRef(QQ, FQ) {
- ... (234 more removed lines; see GitHub link above)
+     var Dk = ik(36874);
+     (0, Dk.h)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 1. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L2)

```diff
- export const ids = [233, 234];
+ export const ids = [234];
```

#### 2. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L4-L11` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L4-L6) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L4-L11)

```diff
-   60642: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       RegisterShaderMaterial: () => LQ.d,
-       ShaderMaterial: () => LQ.q,
-       ShaderMaterialCreateFromSnippetAsync: () => LQ.h,
-       ShaderMaterialParse: () => LQ.p,
-       ShaderMaterialParseFromFileAsync: () => LQ.k,
-       ShaderMaterialParseFromSnippetAsync: () => LQ.o
+   40655: (kk, ek, ik) => {
+     ik.d(ek, {
+       noaDevTools: () => Kk
```

#### 3. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L13-L14` → after: `L8-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L8-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L8-L239) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L13-L14)

```diff
-     var LQ = wQ(39892);
-     (0, LQ.d)()
+     var Dk = ik(37160),
+       fk = ik(37135),
+       Sk = ik(2704),
+       bk = ik(1688);
+ 
+     function rk(kk) {
+       const {
+         yH: ek
+       } = kk, ik = ek.engine, Dk = {
+         width: ik.getRenderWidth(),
+         height: ik.getRenderHeight()
+       };
+       return {
+         canvas: ik.getRenderingCanvas(),
+         maxTextureSize: ik.getCaps().maxTextureSize,
+         drawing: () => !kk.FY,
+ ... (216 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L16-L61` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L241) · [Before (L16-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L16-L61)

```diff
-   37320: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => qQ
-     });
-     var LQ = wQ(37324);
-     class qQ {
-       static GetPlanes(QQ) {
-         const FQ = [];
-         for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, FQ), FQ
-       }
-       static GetNearPlaneToRef(QQ, FQ) {
-         const wQ = QQ.m;
-         FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
-       }
-       static GetFarPlaneToRef(QQ, FQ) {
- ... (30 more removed lines; see GitHub link above)
+   40569: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L65` → after: `L245-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L245-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L245-L340) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L65)

```diff
-     var LQ = wQ(36696);
+     var Dk = ik(1706);
+     const fk = 33177600,
+       Sk = 3e4;
+     let bk = !1;
+ 
+     function rk(kk, ek, ik) {
+       if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
+       if (bk) return Promise.reject(new Error("A screenshot is already being taken"));
+       bk = !0;
+       const Dk = function(kk, ek, ik) {
+         const Dk = Math.max(1, kk),
+           Sk = Math.max(1, ek),
+           bk = Math.min(1, ik / Math.max(Dk, Sk), Math.sqrt(fk / (Dk * Sk)));
+         return {
+           width: Math.max(1, Math.floor(Dk * bk)),
+           height: Math.max(1, Math.floor(Sk * bk))
+ ... (80 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L67-L84` → after: `L342-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L342-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L342-L358) · [Before (L67-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L67-L84)

```diff
-       constructor(QQ, FQ, wQ, qQ) {
-         this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
-       }
-       RLQ() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let QQ = this.normal.getHashCode();
-         return QQ = 397 * QQ ^ this.d, QQ
-       }
- ... (2 more removed lines; see GitHub link above)
+       constructor(kk, ek) {
+         this.oU = kk, this.engine = ek, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(kk, ek) {
+         if (!ek) return;
+         const ik = ek.getProjectionMatrix().m,
+           bk = 0 === Sk && 0 === ik[15],
+           rk = ek.globalPosition,
+           {
+             engine: mk
+           } = this,
+           Mk = bk ? (0, fk.d)(ik, mk.getRenderWidth(), mk.getRenderHeight()) : 0;
+         rk.x === this.eyeX && rk.y === this.eyeY && rk.z === this.eyeZ && Mk === this.focalPx && bk === this.culling || (this.epoch++, this.eyeX = rk.x, this.eyeY = rk.y, this.eyeZ = rk.z, this.focalPx = Mk, this.culling = bk);
+         const {
+           epoch: Kk,
+           range: xk
+ ... (1 more added lines; see GitHub link above)
```
