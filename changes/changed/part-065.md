# Changed — Bundle Modifications Report (Part 065 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `65 / 133` (**404** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 064](part-064.md) · [Part 066 →](part-066.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/74.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/74.js` (4747 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28)

#### 781. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5933` → after: `L5567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5567) · [Before (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5933)

```diff
-           hitResult: ev.c.HIT_NOTHING,
+           hitResult: KT.e.HIT_NOTHING,
```

#### 782. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5937` → after: `L5571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5571) · [Before (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5937)

```diff
-           WU: null,
+           nG: null,
```

#### 783. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5944-L5949` → after: `L5578-L5583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5578-L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5578-L5583) · [Before (L5944-L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5944-L5949)

```diff
-         const pv = new Wv.fa(vv[0], vv[1], vv[2]),
-           dv = new Wv.fa(zv[0], zv[1], zv[2]),
-           Nv = new wv.f(pv, dv, Pv),
-           lv = (0, av.d)(this.vW.Ma, Nv),
-           Tv = null !== (hv = null === (Sv = lv.pickedMesh) || void 0 === Sv || null === (ev = Sv.metadata) || void 0 === ev ? void 0 : ev.eId) && void 0 !== hv ? hv : null,
-           sv = this.vW.Ma.hK.HW(pv, dv, null !== (gv = null !== lv && void 0 !== lv && lv.hit ? lv.distance : null) && void 0 !== gv ? gv : Pv);
+         const yT = new CT.Fv(TT[0], TT[1], TT[2]),
+           fT = new CT.Fv(kT[0], kT[1], kT[2]),
+           xT = new jT.g(yT, fT, cT),
+           IT = (0, vT.e)(this.cC.gv, xT),
+           AT = null !== (lT = null === (MT = IT.pickedMesh) || void 0 === MT || null === (KT = MT.metadata) || void 0 === KT ? void 0 : KT.eId) && void 0 !== lT ? lT : null,
+           tT = this.cC.gv.PJ.gC(yT, fT, null !== (OT = null !== IT && void 0 !== IT && IT.hit ? IT.distance : null) && void 0 !== OT ? OT : cT);
```

#### 784. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5956-L5957` → after: `L5590-L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5590-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5590-L5591) · [Before (L5956-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5956-L5957)

```diff
-         const hv = this.vW.oT;
-         return this.vW.uR(vv, zv, Pv, ((vv, zv, Pv, Sv) => hv.eZ(zv, Pv, Sv)))
+         const lT = this.cC.pA;
+         return this.cC.zV(TT, kT, cT, ((TT, kT, cT, MT) => lT.iZ(kT, cT, MT)))
```

#### 785. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5964-L5965` → after: `L5598-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5598-L5599) · [Before (L5964-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5964-L5965)

```diff
-         const Sv = new Wv.fa(vv[0], vv[1], vv[2]),
-           ev = new Wv.fa(zv[0], zv[1], zv[2]);
+         const MT = new CT.Fv(TT[0], TT[1], TT[2]),
+           KT = new CT.Fv(kT[0], kT[1], kT[2]);
```

#### 786. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5969-L5970` → after: `L5603-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5603-L5604) · [Before (L5969-L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5969-L5970)

```diff
-           pv = (0, sv.k)(this.vW.Ma, "gunRaycastTrace_" + cv++, {
-             positions: [...Sv.pPv(), ...gv.pPv()],
+           yT = (0, tT.n)(this.cC.gv, "gunRaycastTrace_" + QT++, {
+             positions: [...MT.acT(), ...OT.acT()],
```

#### 787. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5973-L5974` → after: `L5607-L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5607-L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5607-L5608) · [Before (L5973-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5973-L5974)

```diff
-         pv.color = hv, pv.ja = !0, pv.Zs = !1, this.vW.Ma.Hs(pv, !1, this.vW.iW), setTimeout((() => {
-           pv.mzv() || pv.dispose()
+         yT.color = lT, yT.av = !0, yT.Vt = !1, this.cC.gv.Zt(yT, !1, this.cC.QC), setTimeout((() => {
+           yT.VkT() || yT.dispose()
```

#### 788. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5979` → after: `L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5613) · [Before (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5979)

```diff
-     const Vv = [10, 0, 1, 167, 237, 101, 151, "g", 5, 6, 28, 8, 255, "length", "c", 2, "e", 197, 4, "undefined", void 0, 73, 63, "fromCodePoint", 7, 12, "push", "a", 25, "b", "h", 157, "i", 91, 8191, 88, 13, 14, 37, 27, 123, 228, 181, "d", 23, 144, 113, 3, 46, 242, 230, 92, !0, ! … [truncated]
+     const JT = [1, 102, 0, 65, "c", "i", 7, 138, 6, 56, 8, 255, "length", "b", 189, "a", 46, "undefined", void 0, 114, 3, 2, 63, "fromCodePoint", 12, "push", 91, 8191, 88, 13, 14, 67, "g", 126, 205, 216, 143, 41, "f", "d", 16, "3", 512, 148, "h", 218, 9, 191, 206, 4, 120, 90, 15, … [truncated]
```

#### 789. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5982-L5986` → after: `L5616-L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5616-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5616-L5656) · [Before (L5982-L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5982-L5986)

```diff
-       return vv[Vv[13]] = Vv[2], typeof Fv !== Vv[19] && Fv ? (new Fv).decode(new Yv(vv[Vv[1]])) : typeof nv !== Vv[19] && nv ? nv.from(vv[Vv[1]]).toString("utf-8") : Kv(vv[Vv[1]])
-     }
- 
-     function Rv() {}
- 
+       return TT[JT[12]] = JT[0], typeof DT[TT[JT[2]]] === JT[17] ? DT[TT[JT[2]]] = function(...TT) {
+         for (VT(TT[JT[12]] = JT[0], TT[JT[0]] = '0c1!C#Yle5TrJfb",:P*wx?>ih3~[Gtp)$FvL+62{sOkBaEVMu&q}Hd^|N<S%m]Wjy/U`;XK(Ig@zR_.DZ8AnQ47o9=', TT[JT[1]] = "" + (TT[JT[2]] || ""), TT[JT[4]] = TT[JT[1]].length, TT[JT[9]] = [], TT[-JT[7]] = JT[2], TT[JT[8]] = JT[2], TT[JT[6]] = -JT[ … [truncated]
+           if (TT[JT[5]] = TT[JT[0]].indexOf(TT[JT[1]][TT[JT[3]]]), TT[JT[5]] !== -JT[0])
+             if (TT[JT[6]] < JT[2]) TT[JT[6]] = TT[JT[5]];
+             else {
+               VT(TT[JT[6]] += TT[JT[5]] * JT[26], TT[-JT[7]] |= TT[JT[6]] << TT[JT[8]], TT[JT[8]] += (TT[JT[6]] & JT[27]) > JT[28] ? JT[29] : JT[30]);
+               do {
+                 VT(TT[JT[9]].push(TT[-JT[7]] & JT[11]), TT[-JT[7]] >>= JT[10], TT[JT[8]] -= JT[10])
+               } while (TT[JT[8]] > JT[6]);
+               TT[JT[6]] = -JT[0]
+             } return TT[JT[6]] > -JT[0] && TT[JT[9]].push((TT[-JT[7]] | TT[JT[6]] << TT[JT[8]]) & JT[11]), HT(TT[JT[9]])
+       }(aT[TT[JT[2]]]) : DT[TT[JT[2]]]
+     }
+ 
+     function HT(...TT) {
+       return TT[JT[12]] = JT[0], typeof rT !== JT[17] && rT ? (new rT).decode(new PT(TT[JT[2]])) : typeof wT !== JT[17] && wT ? wT.from(TT[JT[2]]).toString("utf-8") : zT(TT[JT[2]])
+ ... (25 more added lines; see GitHub link above)
```

#### 790. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5990-L5991` → after: `L5660-L5661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5660-L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5660-L5661) · [Before (L5990-L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5990-L5991)

```diff
-     xv(mv = {}, jv = ["1k#MvF9T9LTW+*K|p:I%E?/iJg6m9#uC+F6NLON;3hVwL?hKsF<J5(tVjt", "1}WpPnqvMyyjNC;^%<KY#TO+f7p)>*q;", "f}7dujN%l7gF$Jezep.QnX9.*2GX[", "NDM`RT>)ktS44QYtVG9%,a~%2Lw<bV9(l1>", "Yk)`CP%Tn8Qp[", "4^^=M_p7X9Xf@j1^hkxMU0ii!ntFcQ", 'uJRYLjIi*2GXD?*i7B"vVB)V$ZACiBAqq,0` … [truncated]
-       xv(vv[Vv[13]] = Vv[1], vv[Vv[17]] = [function() {
+     VT(DT = {}, aT = ['FqO(,}aN9:i<}~3OqF~(j(:V[S_u"8ciud%^n&2@C', 'dyP~]M=EDNdv/+M~;>Xl0LGN0W"(SSw~.:!', "qa_C9KI@Bb{bN%FPvNMIuqplv*DhRC56w{6lmM`4z]jvNL@6", "5Wv)C]PXLdUD]fpLnhtp|F8EW|V/r3{Ppgu~}|Wv8*u[O+[L4q4C7Q0", "1Jg)p_QNtP)w{~526NBR=_xf%]_XGuPFzpVC", "]5?p?_!;P%DCC2=?A2K}>V … [truncated]
+       VT(TT[JT[12]] = JT[2], TT[JT[15]] = [function() {
```

#### 791. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L5999` → after: `L5669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5669) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L5999)

```diff
-       }], vv[Vv[14]] = Vv[20], vv[Vv[15]] = []);
+       }], TT[JT[13]] = JT[18], TT[JT[4]] = []);
```

#### 792. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6001` → after: `L5671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5671) · [Before (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6001)

```diff
-         xv(vv[Vv[14]] = Object, vv[Vv[15]][Vv[26]]("".__proto__.constructor.name))
+         VT(TT[JT[13]] = Object, TT[JT[4]][JT[25]]("".__proto__.constructor.name))
```

#### 793. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6003-L6006` → after: `L5673-L5676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5673-L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5673-L5676) · [Before (L6003-L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6003-L6006)

```diff
-       vv: for (vv[Vv[16]] = Vv[1]; vv[Vv[16]] < vv[Vv[17]][Vv[13]]; vv[Vv[16]]++) try {
-         for (vv[Vv[14]] = vv[Vv[17]][vv[Vv[16]]](), vv[Vv[18]] = Vv[1]; vv[Vv[18]] < vv[Vv[15]][Vv[13]]; vv[Vv[18]]++)
-           if (typeof vv[Vv[14]][vv[Vv[15]][vv[Vv[18]]]] === Vv[19]) continue vv;
-         return vv[Vv[14]]
+       TT: for (TT[-JT[14]] = JT[2]; TT[-JT[14]] < TT[JT[15]][JT[12]]; TT[-JT[14]]++) try {
+         for (TT[JT[13]] = TT[JT[15]][TT[-JT[14]]](), TT[JT[16]] = JT[2]; TT[JT[16]] < TT[JT[4]][JT[12]]; TT[JT[16]]++)
+           if (typeof TT[JT[13]][TT[JT[4]][TT[JT[16]]]] === JT[17]) continue TT;
+         return TT[JT[13]]
```

#### 794. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6008-L6010` → after: `L5678-L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5678-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5678-L5680) · [Before (L6008-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6008-L6010)

```diff
-       return vv[Vv[14]] || this
-     }() || {}, Fv = fv.TextDecoder, Yv = fv.Uint8Array, nv = fv.Sa, Ov = fv.String || String, Dv = fv.Array || Array, Kv = function(...vv) {
-       return xv(vv[Vv[13]] = Vv[1], vv[Vv[27]] = new Dv(Vv[54]), vv[-Vv[28]] = Ov[Vv[23]] || Ov.fromCharCode, vv[-Vv[21]] = []),
+       return TT[JT[13]] || this
+     }() || {}, rT = FT.TextDecoder, PT = FT.Uint8Array, wT = FT.Ov, mT = FT.String || String, bT = FT.Array || Array, zT = function(...TT) {
+       return VT(TT[JT[12]] = JT[2], TT[JT[15]] = new bT(JT[65]), TT[JT[0]] = mT[JT[23]] || mT.fromCharCode, TT[JT[4]] = []),
```

#### 795. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6012-L6013` → after: `L5682-L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5682-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5682-L5683) · [Before (L6012-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6012-L6013)

```diff
-           for (xv(zv[Vv[13]] = Vv[2], zv[Vv[2]] = Vv[20], zv[Vv[4]] = Vv[20], zv[Vv[14]] = zv[Vv[1]][Vv[13]], vv[-Vv[21]][Vv[13]] = Vv[1]), zv[Vv[18]] = Vv[1]; zv[Vv[18]] < zv[Vv[14]];) xv(zv[Vv[4]] = zv[Vv[1]][zv[Vv[18]]++], zv[Vv[4]] <= 127 ? zv[Vv[2]] = zv[Vv[4]] : zv[Vv[4]] < … [truncated]
-           return vv[-Vv[21]].join("")
+           for (VT(kT[JT[12]] = JT[0], kT[JT[15]] = JT[18], kT[JT[21]] = JT[18], kT[JT[20]] = kT[JT[2]][JT[12]], TT[JT[4]][JT[12]] = JT[2]), kT[JT[19]] = JT[2]; kT[JT[19]] < kT[JT[20]];) VT(kT[JT[21]] = kT[JT[2]][kT[JT[19]]++], kT[JT[21]] <= JT[63] ? kT[JT[15]] = kT[JT[21]] : kT[J … [truncated]
+           return TT[JT[4]].join("")
```

#### 796. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6015` → after: `L5685-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L5685-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L5685-L6152) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6015)

```diff
-     }()), (() => {
+     }()), oT(100) in GT && function(...TT) {
+       VT(TT[JT[12]] = JT[2], TT[JT[15]] = function() {
+         var TT, kT, cT = JT[2];
+ 
+         function lT(...TT) {
+           return TT[JT[12]] = JT[0], xT(yT(CT(TT[JT[2]])))
+         }
+ 
+         function MT(...TT) {
+           return TT[JT[12]] = JT[21], xT(fT(CT(TT[JT[2]]), CT(TT[JT[0]])))
+         }
+ 
+         function KT(TT, kT) {
+           return IT(fT(CT(TT), CT(kT)))
+         }
+ 
+ ... (452 more added lines; see GitHub link above)
```

#### 797. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6017-L6020` → after: `L6154-L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6154-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6154-L6157) · [Before (L6017-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6017-L6020)

```diff
-         return vv[Vv[13]] = Vv[2], typeof mv[vv[Vv[1]]] === Vv[19] ? mv[vv[Vv[1]]] = function(...vv) {
-           for (xv(vv[Vv[13]] = Vv[2], vv[-Vv[31]] = '2v;|x5K9o1+Ay%cTl4~iBtL7"I$baNM8<HzF#_*Gdq}XEu?rn3YCe.&RfZ]wsgO!@=>)(:UPh0^QSD/6,kWmJ{[`pVj', vv[Vv[29]] = "" + (vv[Vv[1]] || ""), vv[Vv[14]] = vv[Vv[29]].length, vv[-Vv[38]] = [], vv[Vv[8]] = Vv[1], vv[Vv[9]] = Vv[1], vv[Vv[7] … [truncated]
-             if (vv[Vv[32]] = vv[-Vv[31]].indexOf(vv[Vv[29]][vv[Vv[30]]]), vv[Vv[32]] !== -Vv[2])
-               if (vv[Vv[7]] < Vv[1]) vv[Vv[7]] = vv[Vv[32]];
+         return TT[JT[12]] = JT[0], typeof DT[TT[JT[2]]] === JT[17] ? DT[TT[JT[2]]] = function(...TT) {
+           for (VT(TT[JT[12]] = JT[0], TT[JT[15]] = 'JHkPXYnAaMgBlqLoCyUDEOKpmcWFdsNtrQjGIeTbZSRhxwi~f87V3.]z|+^>_}(!@?{5)`v#=1*u$4[&,"<0%:;6/29', TT[JT[13]] = "" + (TT[JT[2]] || ""), TT[JT[20]] = TT[JT[13]].length, TT[JT[49]] = [], TT[-JT[191]] = JT[2], TT[JT[8]] = JT[2], TT[JT[3 … [truncated]
+             if (TT[-JT[63]] = TT[JT[15]].indexOf(TT[JT[13]][TT[JT[10]]]), TT[-JT[63]] !== -JT[0])
+               if (TT[JT[32]] < JT[2]) TT[JT[32]] = TT[-JT[63]];
```

#### 798. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6022` → after: `L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6159) · [Before (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6022)

```diff
-                 xv(vv[Vv[7]] += vv[Vv[32]] * Vv[33], vv[Vv[8]] |= vv[Vv[7]] << vv[Vv[9]], vv[Vv[9]] += (vv[Vv[7]] & Vv[34]) > Vv[35] ? Vv[36] : Vv[37]);
+                 VT(TT[JT[32]] += TT[-JT[63]] * JT[26], TT[-JT[191]] |= TT[JT[32]] << TT[JT[8]], TT[JT[8]] += (TT[JT[32]] & JT[27]) > JT[28] ? JT[29] : JT[30]);
```

#### 799. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6024-L6028` → after: `L6161-L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6161-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6161-L6165) · [Before (L6024-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6024-L6028)

```diff
-                   xv(vv[-Vv[38]].push(vv[Vv[8]] & Vv[12]), vv[Vv[8]] >>= Vv[11], vv[Vv[9]] -= Vv[11])
-                 } while (vv[Vv[9]] > Vv[24]);
-                 vv[Vv[7]] = -Vv[2]
-               } return vv[Vv[7]] > -Vv[2] && vv[-Vv[38]].push((vv[Vv[8]] | vv[Vv[7]] << vv[Vv[9]]) & Vv[12]), Uv(vv[-Vv[38]])
-         }(jv[vv[Vv[1]]]) : mv[vv[Vv[1]]]
+                   VT(TT[JT[49]].push(TT[-JT[191]] & JT[11]), TT[-JT[191]] >>= JT[10], TT[JT[8]] -= JT[10])
+                 } while (TT[JT[8]] > JT[6]);
+                 TT[JT[32]] = -JT[0]
+               } return TT[JT[32]] > -JT[0] && TT[JT[49]].push((TT[-JT[191]] | TT[JT[32]] << TT[JT[8]]) & JT[11]), HT(TT[JT[49]])
+         }(aT[TT[JT[2]]]) : DT[TT[JT[2]]]
```

#### 800. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6030` → after: `L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6167) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6030)

```diff
-       if ([][Vv[13]] = Vv[1], vv(Vv[68]) in Rv && function(...zv) {
+       if ([][JT[12]] = JT[2], TT(165) + "0" in GT && function(...kT) {
```

#### 801. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6032-L6034` → after: `L6169-L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6169-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6169-L6171) · [Before (L6032-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6032-L6034)

```diff
-             for (xv(vv[Vv[13]] = Vv[2], vv[Vv[2]] = '^CHDGJf41(Mm<5wL!T~eO@jN:`}W,+xE>BKX7Ylk*$#&/z]hPI8syvSb2Z[0U3c)%up=d;FqtganR.V9o?{6|Ai"_rQ', vv[-Vv[39]] = "" + (vv[Vv[1]] || ""), vv[-Vv[41]] = vv[-Vv[39]].length, vv[Vv[43]] = [], vv[Vv[16]] = Vv[1], vv[-Vv[42]] = Vv[1], vv[ … [truncated]
-               if (vv[Vv[32]] = vv[Vv[2]].indexOf(vv[-Vv[39]][vv[Vv[40]]]), vv[Vv[32]] !== -Vv[2])
-                 if (vv[Vv[7]] < Vv[1]) vv[Vv[7]] = vv[Vv[32]];
+             for (VT(TT[JT[12]] = JT[0], TT[JT[192]] = 'zlGUKLSdImgieRNDsVtrqQocACWbBhEMkTFpJaYZfXHP}160#(O3j2$+n8=|`:4~.)/;{95<*@,w_!>&["xu7^?%v]y', TT[JT[193]] = "" + (TT[JT[2]] || ""), TT[JT[4]] = TT[JT[193]].length, TT[JT[39]] = [], TT[-JT[194]] = JT[2], TT[-JT[195]] = JT[2],  … [truncated]
+               if (TT[JT[46]] = TT[JT[192]].indexOf(TT[JT[193]][TT[JT[10]]]), TT[JT[46]] !== -JT[0])
+                 if (TT[JT[32]] < JT[2]) TT[JT[32]] = TT[JT[46]];
```

#### 802. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6036` → after: `L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6173) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6036)

```diff
-                   xv(vv[Vv[7]] += vv[Vv[32]] * Vv[33], vv[Vv[16]] |= vv[Vv[7]] << vv[-Vv[42]], vv[-Vv[42]] += (vv[Vv[7]] & Vv[34]) > Vv[35] ? Vv[36] : Vv[37]);
+                   VT(TT[JT[32]] += TT[JT[46]] * JT[26], TT[-JT[194]] |= TT[JT[32]] << TT[-JT[195]], TT[-JT[195]] += (TT[JT[32]] & JT[27]) > JT[28] ? JT[29] : JT[30]);
```

#### 803. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6038-L6041` → after: `L6175-L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6175-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6175-L6178) · [Before (L6038-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6038-L6041)

```diff
-                     xv(vv[Vv[43]].push(vv[Vv[16]] & Vv[12]), vv[Vv[16]] >>= Vv[11], vv[-Vv[42]] -= Vv[11])
-                   } while (vv[-Vv[42]] > Vv[24]);
-                   vv[Vv[7]] = -Vv[2]
-                 } return vv[Vv[7]] > -Vv[2] && vv[Vv[43]].push((vv[Vv[16]] | vv[Vv[7]] << vv[-Vv[42]]) & Vv[12]), Uv(vv[Vv[43]])
+                     VT(TT[JT[39]].push(TT[-JT[194]] & JT[11]), TT[-JT[194]] >>= JT[10], TT[-JT[195]] -= JT[10])
+                   } while (TT[-JT[195]] > JT[6]);
+                   TT[JT[32]] = -JT[0]
+                 } return TT[JT[32]] > -JT[0] && TT[JT[39]].push((TT[-JT[194]] | TT[JT[32]] << TT[-JT[195]]) & JT[11]), HT(TT[JT[39]])
```

#### 804. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6045` → after: `L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6182) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6045)

```diff
-             return vv[Vv[13]] = Vv[2], typeof mv[vv[Vv[1]]] === Vv[19] ? mv[vv[Vv[1]]] = Pv(jv[vv[Vv[1]]]) : mv[vv[Vv[1]]]
+             return TT[JT[12]] = JT[0], typeof DT[TT[JT[2]]] === JT[17] ? DT[TT[JT[2]]] = cT(aT[TT[JT[2]]]) : DT[TT[JT[2]]]
```

#### 805. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6047` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6184) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6047)

```diff
-           zv[Vv[13]] = Vv[1];
+           kT[JT[12]] = JT[2];
```

#### 806. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6061-L6062` → after: `L6198-L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6198-L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6198-L6199) · [Before (L6061-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6061-L6062)

```diff
-           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Sv.resolve(__dirname, vv(78) + hv(79) + "js")
-         }(), Vv[52]) {
+           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), MT.resolve(__dirname, TT(166) + lT(167) + "js")
+         }(), JT[187]) {
```

#### 807. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6064-L6066` → after: `L6201-L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6201-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6201-L6203) · [Before (L6064-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6064-L6066)

```diff
-           for (xv(vv[Vv[13]] = Vv[2], vv[Vv[2]] = ')QVZsWmCgaUl0G6L{B$zJ[j}]EH|wcD(Y9Inb#e.dF?v_@=>/^1M:ki7qxo8*Nyh;tfT%SR`!3<&+~"OXK,5Pu4A2pr', vv[Vv[15]] = "" + (vv[Vv[1]] || ""), vv[Vv[44]] = vv[Vv[15]].length, vv[Vv[43]] = [], vv[-Vv[45]] = Vv[1], vv[Vv[46]] = Vv[1], vv[Vv[24 … [truncated]
-             if (vv[Vv[32]] = vv[Vv[2]].indexOf(vv[Vv[15]][vv[Vv[22]]]), vv[Vv[32]] !== -Vv[2])
-               if (vv[Vv[24]] < Vv[1]) vv[Vv[24]] = vv[Vv[32]];
+           for (VT(TT[JT[12]] = JT[0], TT[JT[15]] = 'aHjimrghDcQtRCTYWFMJfUPN,V{lK;_.sB0qA5#|eLdnOoE%I!`2Sp7=G^Z/+k4:8X(9)&1@?[*>w]3x6v}u~$yzb<"', TT[-JT[47]] = "" + (TT[JT[2]] || ""), TT[-JT[196]] = TT[-JT[47]].length, TT[JT[49]] = [], TT[JT[197]] = JT[2], TT[-JT[198]] = JT[2], T … [truncated]
+             if (TT[JT[46]] = TT[JT[15]].indexOf(TT[-JT[47]][TT[JT[10]]]), TT[JT[46]] !== -JT[0])
+               if (TT[JT[6]] < JT[2]) TT[JT[6]] = TT[JT[46]];
```

#### 808. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6068` → after: `L6205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6205) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6068)

```diff
-                 xv(vv[Vv[24]] += vv[Vv[32]] * Vv[33], vv[-Vv[45]] |= vv[Vv[24]] << vv[Vv[46]], vv[Vv[46]] += (vv[Vv[24]] & Vv[34]) > Vv[35] ? Vv[36] : Vv[37]);
+                 VT(TT[JT[6]] += TT[JT[46]] * JT[26], TT[JT[197]] |= TT[JT[6]] << TT[-JT[198]], TT[-JT[198]] += (TT[JT[6]] & JT[27]) > JT[28] ? JT[29] : JT[30]);
```

#### 809. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6070-L6073` → after: `L6207-L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6207-L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6207-L6210) · [Before (L6070-L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6070-L6073)

```diff
-                   xv(vv[Vv[43]].push(vv[-Vv[45]] & Vv[12]), vv[-Vv[45]] >>= Vv[11], vv[Vv[46]] -= Vv[11])
-                 } while (vv[Vv[46]] > Vv[24]);
-                 vv[Vv[24]] = -Vv[2]
-               } return vv[Vv[24]] > -Vv[2] && vv[Vv[43]].push((vv[-Vv[45]] | vv[Vv[24]] << vv[Vv[46]]) & Vv[12]), Uv(vv[Vv[43]])
+                   VT(TT[JT[49]].push(TT[JT[197]] & JT[11]), TT[JT[197]] >>= JT[10], TT[-JT[198]] -= JT[10])
+                 } while (TT[-JT[198]] > JT[6]);
+                 TT[JT[6]] = -JT[0]
+               } return TT[JT[6]] > -JT[0] && TT[JT[49]].push((TT[JT[197]] | TT[JT[6]] << TT[-JT[198]]) & JT[11]), HT(TT[JT[49]])
```

#### 810. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6077` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6214) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6077)

```diff
-           return vv[Vv[13]] = Vv[2], typeof mv[vv[Vv[1]]] === Vv[19] ? mv[vv[Vv[1]]] = zv(jv[vv[Vv[1]]]) : mv[vv[Vv[1]]]
+           return TT[JT[12]] = JT[0], typeof DT[TT[JT[2]]] === JT[17] ? DT[TT[JT[2]]] = kT(aT[TT[JT[2]]]) : DT[TT[JT[2]]]
```

#### 811. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6081-L6093` → after: `L6218-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6218-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6218-L6236) · [Before (L6081-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6081-L6093)

```diff
-           xv(vv[Vv[13]] = Vv[1], vv[Vv[51]] = function(...vv) {
-             for (xv(vv[Vv[13]] = Vv[2], vv[Vv[27]] = Vv[1], vv[Vv[15]] = {}, vv[Vv[47]] = Vv[1], vv[Vv[18]] = Vv[1], vv[-Vv[50]] = Vv[1], vv[Vv[9]] = vv[Vv[1]].length), vv[-Vv[48]] = Vv[1]; vv[-Vv[48]] < vv[Vv[9]]; vv[-Vv[48]]++) {
-               for (xv(vv[Vv[15]] = {}, vv[Vv[47]] = Vv[1], vv[Vv[18]] = Vv[2]), vv[Vv[49]] = vv[-Vv[48]] + Vv[2]; vv[Vv[49]] < vv[Vv[9]]; vv[Vv[49]]++) vv[Vv[1]][vv[-Vv[48]]].x !== vv[Vv[1]][vv[Vv[49]]].x || vv[Vv[1]][vv[-Vv[48]]].y !== vv[Vv[1]][vv[Vv[49]]].y ? (vv[Vv[1]][vv[-Vv … [truncated]
-               xv(vv[Vv[47]] += vv[Vv[18]], vv[Vv[27]] = Math.max(vv[Vv[27]], vv[Vv[47]]))
-             }
-             return vv[Vv[27]]
-           }, console.log(vv[Vv[51]]))
-         }
-         Pv(80) in Rv && hv();
-         let Sv = Vv[53];
-         xv(setInterval((() => {
-           if (!Sv && (0, gv[Vv[7]])()) {
-             function vv(vv) {
+           var kT;
+           VT(TT[JT[12]] = JT[2], kT = function(...TT) {
+             VT(TT[JT[12]] = JT[0], this.DA = TT[JT[2]], this.length = JT[2], this.map = {}, this.head = JT[183], this.tail = JT[183])
+           }, kT.prototype.get = function(...TT) {
+             var kT;
+             return VT(TT[JT[12]] = JT[0], kT = this.map[TT[JT[2]]]), kT ? (this.remove(kT), this.insert(kT.key, kT.val), kT.val) : -JT[0]
+           }, kT.prototype.put = function(...TT) {
+             VT(TT[JT[12]] = JT[21], this.map[TT[JT[2]]] ? (this.remove(this.map[TT[JT[2]]]), this.insert(TT[JT[2]], TT[JT[0]])) : this.length === this.DA ? (this.remove(this.head), this.insert(TT[JT[2]], TT[JT[0]])) : (this.insert(TT[JT[2]], TT[JT[0]]), this.length++))
+           }, kT.prototype.remove = function(...TT) {
+             VT(TT[JT[12]] = JT[0], TT[JT[15]] = TT[JT[2]].prev, TT[JT[199]] = TT[JT[2]].next), TT[JT[199]] && (TT[JT[199]].prev = TT[JT[15]]), TT[JT[15]] && (TT[JT[15]].next = TT[JT[199]]), this.head === TT[JT[2]] && (this.head = TT[JT[199]]), this.tail === TT[JT[2]] && (this.tai … [truncated]
+           }, kT.prototype.insert = function(...TT) {
+             VT(TT[JT[12]] = JT[21], TT[JT[24]] = new List(TT[JT[2]], TT[JT[0]]), this.tail ? (this.tail.next = TT[JT[24]], TT[JT[24]].prev = this.tail, this.tail = TT[JT[24]]) : (this.tail = TT[JT[24]], this.head = TT[JT[24]]), this.map[TT[JT[2]]] = TT[JT[24]])
+           }, console.log(kT))
+         }
+         TT(168) in GT && lT();
+         let MT = JT[190];
+ ... (3 more added lines; see GitHub link above)
```

#### 812. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6095-L6098` → after: `L6238-L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6238-L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6238-L6241) · [Before (L6095-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6095-L6098)

```diff
-               for (xv(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Vv[1], ev = Vv[1], gv = -Vv[2]), pv = Vv[1]; pv < Pv; pv++) {
-                 var dv = 'FWGet0aj:T)u"C2^Kn`|f1}sRLIPUkXAbhSNBcgYEmHoVJMpZid>DO4qQ5/w?yl;$~=_v@+(!{8*3%9<,.x#z&]67r['.indexOf(zv[pv]);
-                 if (dv !== -Vv[2])
-                   if (gv < Vv[1]) gv = dv;
+               for (VT(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = JT[2], KT = JT[2], OT = -JT[0]), yT = JT[2]; yT < cT; yT++) {
+                 var fT = 'aZvTf5dx]pt$C9UP?nDXV`uyFI{l&qJS;7%Rs~r^3|WMOhc<AgB>NjbiGLE1mHK2Q8@:_Y.eo/)(w640z!#[=,}"+k*'.indexOf(kT[yT]);
+                 if (fT !== -JT[0])
+                   if (OT < JT[2]) OT = fT;
```

#### 813. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6100` → after: `L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6243) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6100)

```diff
-                     xv(gv += dv * Vv[33], Sv |= gv << ev, ev += (gv & Vv[34]) > Vv[35] ? Vv[36] : Vv[37]);
+                     VT(OT += fT * JT[26], MT |= OT << KT, KT += (OT & JT[27]) > JT[28] ? JT[29] : JT[30]);
```

#### 814. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6102-L6104` → after: `L6245-L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6245-L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6245-L6247) · [Before (L6102-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6102-L6104)

```diff
-                       xv(hv.push(Sv & Vv[12]), Sv >>= Vv[11], ev -= Vv[11])
-                     } while (ev > Vv[24]);
-                     gv = -Vv[2]
+                       VT(lT.push(MT & JT[11]), MT >>= JT[10], KT -= JT[10])
+                     } while (KT > JT[6]);
+                     OT = -JT[0]
```

#### 815. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6107-L6122` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6250-L6251) · [Before (L6107-L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6107-L6122)

```diff
-               return gv > -Vv[2] && hv.push((Sv | gv << ev) & Vv[12]), Uv(hv)
-             }
- 
-             function zv(...zv) {
-               return zv[Vv[13]] = Vv[2], typeof mv[zv[Vv[1]]] === Vv[19] ? mv[zv[Vv[1]]] = vv(jv[zv[Vv[1]]]) : mv[zv[Vv[1]]]
-             }
-             let Pv = {
-               [zv(81)]: zv(82),
-               [zv(83) + zv(Vv[61])]: zv(85) + zv(86),
-               [zv(87)]: zv(Vv[35]),
-               [zv(89)]: "p4",
-               [zv(90) + zv(Vv[33])]: zv(Vv[51]),
-               [zv(93) + zv(94)]: "1n",
-               [zv(95) + zv(96)]: zv(97) + "s"
-             };
-             xv(Sv = Vv[52], (0, pv[zv(98)])(Nv.ni, Pv))
+               return OT > -JT[0] && lT.push((MT | OT << KT) & JT[11]), HT(lT)
+             }(aT[TT[JT[2]]]) : DT[TT[JT[2]]]
```

#### 816. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6124-L6153` → after: `L6253-L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6253-L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6253-L6259) · [Before (L6124-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6124-L6153)

```diff
-         }), 4044), (0, pv[Pv(99) + Pv(100)])((() => {
-           Sv = Vv[53]
-         })))
-       }
-     })(), (() => {
-       if (Vv[52]) {
-         function vv(...vv) {
-           for (xv(vv[Vv[13]] = Vv[2], vv[Vv[54]] = 'Q1`ZBUW9~}]z/?.^ofK"<3:;$*pTAgudJ>XYkvD#[E+n&!|(NwjCba7qPSe4isM%,GhLyc5_Ol)R6mH=x@IVt2r0{F8', vv[Vv[29]] = "" + (vv[Vv[1]] || ""), vv[-Vv[18]] = vv[Vv[29]].length, vv[-Vv[56]] = [], vv[Vv[8]] = Vv[1], vv[Vv[9]] = Vv[1], vv[Vv[24 … [truncated]
-             if (vv[Vv[32]] = vv[Vv[54]].indexOf(vv[Vv[29]][vv[Vv[55]]]), vv[Vv[32]] !== -Vv[2])
-               if (vv[Vv[24]] < Vv[1]) vv[Vv[24]] = vv[Vv[32]];
-               else {
-                 xv(vv[Vv[24]] += vv[Vv[32]] * Vv[33], vv[Vv[8]] |= vv[Vv[24]] << vv[Vv[9]], vv[Vv[9]] += (vv[Vv[24]] & Vv[34]) > Vv[35] ? Vv[36] : Vv[37]);
-                 do {
-                   xv(vv[-Vv[56]].push(vv[Vv[8]] & Vv[12]), vv[Vv[8]] >>= Vv[11], vv[Vv[9]] -= Vv[11])
-                 } while (vv[Vv[9]] > Vv[24]);
-                 vv[Vv[24]] = -Vv[2]
- ... (14 more removed lines; see GitHub link above)
+           if (TT[JT[12]] = JT[2], kT(169) in GT && function(...TT) {
+               VT(TT[JT[12]] = JT[2], TT[-JT[200]] = function(...kT) {
+                 return VT(kT[JT[12]] = JT[20], kT[JT[15]] = {}), kT[JT[21]].length !== kT[JT[2]].length + kT[JT[0]].length ? JT[190] : TT[JT[4]](kT[JT[2]], kT[JT[0]], kT[JT[21]], JT[2], JT[2], JT[2], kT[JT[15]])
+               }, TT[JT[4]] = function(...kT) {
+                 return VT(kT[JT[12]] = JT[6], kT[JT[201]] = JT[190]), kT[JT[60]] >= kT[JT[21]].length ? JT[187] : kT[JT[8]]["" + kT[JT[20]] + kT[JT[49]] + kT[JT[60]]] !== JT[18] ? kT[JT[8]]["" + kT[JT[20]] + kT[JT[49]] + kT[JT[60]]] : (kT[JT[21]][kT[JT[60]]] === kT[JT[2]][kT[JT[2 … [truncated]
+               }, console.log(TT[-JT[200]]))
+             }(), !MT && (0, OT[JT[38]])()) {
```

#### 817. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6155-L6157` → after: `L6261-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6261-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6261-L6263) · [Before (L6155-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6155-L6157)

```diff
-               for (xv(vv[Vv[13]] = Vv[2], vv[Vv[29]] = 'Y).[,:K"2;SDQZ3uN/c(?_tJe}x$Aa*O%vUi#8&Vw]^7rsdz9`my!|FB<>Rb56M@0~1{Hqp=Tf4+WXlhIPLknCojEGg', vv[Vv[71]] = "" + (vv[Vv[1]] || ""), vv[Vv[43]] = vv[Vv[71]].length, vv[Vv[16]] = [], vv[-Vv[74]] = Vv[1], vv[Vv[9]] = Vv[1], vv[V … [truncated]
-                 if (vv[-Vv[72]] = vv[Vv[29]].indexOf(vv[Vv[71]][vv[Vv[11]]]), vv[-Vv[72]] !== -Vv[2])
-                   if (vv[Vv[73]] < Vv[1]) vv[Vv[73]] = vv[-Vv[72]];
+               for (VT(TT[JT[12]] = JT[0], TT[-JT[203]] = '6HNcAJGWsYnMQ,>DB#r&PzV(;U}kZ{I)"=5?lu+iF|1y~Oqj_:8K.%43vo^ECp<d!2[S/hm@T*0feX]a`RL$xtwg97b', TT[JT[202]] = "" + (TT[JT[2]] || ""), TT[JT[4]] = TT[JT[202]].length, TT[JT[49]] = [], TT[-JT[70]] = JT[2], TT[JT[71]] = JT[2],  … [truncated]
+                 if (TT[JT[46]] = TT[-JT[203]].indexOf(TT[JT[202]][TT[JT[181]]]), TT[JT[46]] !== -JT[0])
+                   if (TT[JT[204]] < JT[2]) TT[JT[204]] = TT[JT[46]];
```

#### 818. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6159` → after: `L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6265) · [Before (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6159)

```diff
-                     xv(vv[Vv[73]] += vv[-Vv[72]] * Vv[33], vv[-Vv[74]] |= vv[Vv[73]] << vv[Vv[9]], vv[Vv[9]] += (vv[Vv[73]] & Vv[34]) > Vv[35] ? Vv[36] : Vv[37]);
+                     VT(TT[JT[204]] += TT[JT[46]] * JT[26], TT[-JT[70]] |= TT[JT[204]] << TT[JT[71]], TT[JT[71]] += (TT[JT[204]] & JT[27]) > JT[28] ? JT[29] : JT[30]);
```

#### 819. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6161-L6164` → after: `L6267-L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6267-L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6267-L6270) · [Before (L6161-L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6161-L6164)

```diff
-                       xv(vv[Vv[16]].push(vv[-Vv[74]] & Vv[12]), vv[-Vv[74]] >>= Vv[11], vv[Vv[9]] -= Vv[11])
-                     } while (vv[Vv[9]] > Vv[24]);
-                     vv[Vv[73]] = -Vv[2]
-                   } return vv[Vv[73]] > -Vv[2] && vv[Vv[16]].push((vv[-Vv[74]] | vv[Vv[73]] << vv[Vv[9]]) & Vv[12]), Uv(vv[Vv[16]])
+                       VT(TT[JT[49]].push(TT[-JT[70]] & JT[11]), TT[-JT[70]] >>= JT[10], TT[JT[71]] -= JT[10])
+                     } while (TT[JT[71]] > JT[6]);
+                     TT[JT[204]] = -JT[0]
+                   } return TT[JT[204]] > -JT[0] && TT[JT[49]].push((TT[-JT[70]] | TT[JT[204]] << TT[JT[71]]) & JT[11]), HT(TT[JT[49]])
```

#### 820. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6168` → after: `L6274-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6274-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6274-L6278) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6168)

```diff
-               return zv[Vv[13]] = Vv[2], typeof mv[zv[Vv[1]]] === Vv[19] ? mv[zv[Vv[1]]] = vv(jv[zv[Vv[1]]]) : mv[zv[Vv[1]]]
+               return TT[JT[12]] = JT[0], typeof DT[TT[JT[2]]] === JT[17] ? DT[TT[JT[2]]] = cT(aT[TT[JT[2]]]) : DT[TT[JT[2]]]
+             }
+ 
+             function KT(...TT) {
+               TT[JT[12]] = JT[2]
```

#### 821. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6170-L6171` → after: `L6280-L6282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6280-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6280-L6282) · [Before (L6170-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6170-L6171)

```diff
-             let Pv = Vv[20];
-             xv(hv = Vv[52], (0, pv[zv(107)])(Nv.qi, Pv))
+             kT(170) + "R" in GT && KT();
+             let fT = JT[18];
+             VT(MT = JT[187], (0, yT[lT(173)])(xT.Ci, fT))
```

#### 822. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6173-L6174` → after: `L6284-L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6284-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6284-L6285) · [Before (L6173-L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6173-L6174)

```diff
-         }), 16127), (0, pv[zv(108) + zv(109)])((() => {
-           hv = Vv[53]
+         }), 10803), (0, yT[TT(174) + cT(175)])((() => {
+           MT = JT[190]
```

#### 823. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6179` → after: `L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6290) · [Before (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6179)

```diff
-   37703: (vv, zv, Pv) => {
+   38020: (TT, kT, cT) => {
```

#### 824. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6181` → after: `L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6292) · [Before (L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6181)

```diff
-       B: () => dv,
+       C: () => fT,
```

#### 825. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6185-L6186` → after: `L6296-L6297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6296-L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6296-L6297) · [Before (L6185-L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6185-L6186)

```diff
-       l: () => sv,
-       o: () => pv,
+       j: () => tT,
+       m: () => yT,
```

#### 826. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6189-L6192` → after: `L6300-L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6300-L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6300-L6303) · [Before (L6189-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6189-L6192)

```diff
-       u: () => cv,
-       w: () => iv,
-       y: () => wv,
-       z: () => Cv
+       r: () => QT,
+       s: () => NT,
+       v: () => jT,
+       y: () => hT
```

#### 827. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6194-L6197` → after: `L6305-L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6305-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6305-L6308) · [Before (L6194-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6194-L6197)

```diff
-     var hv = Pv(37712),
-       Sv = Pv(6192),
-       ev = Pv(37715),
-       gv = Pv(4013);
+     var lT = cT(38028),
+       MT = cT(6486),
+       KT = cT(38034),
+       OT = cT(4233);
```

#### 828. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6200` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6311) · [Before (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6200)

```diff
-       return hv.d.includes(vv)
+       return lT.c.includes(TT)
```

#### 829. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6212` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6323) · [Before (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6212)

```diff
-       return vv.physicsState.type === Sv.s.GLIDER && vv.movementType === Sv.p.GLIDING && Nv(zv)
+       return TT.physicsState.type === MT.v.GLIDER && TT.movementType === MT.s.GLIDING && xT(kT)
```

#### 830. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6221-L6223` → after: `L6332-L6334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6332-L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6332-L6334) · [Before (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6221-L6223)

```diff
-       const Pv = vv.Rm.Cvv(vv.sV),
-         hv = vv.Rm.I3(vv.sV);
-       return vv.Om.canAltAction && void 0 !== Pv && void 0 !== hv && lv(hv, null === (zv = Pv.selectedItem) || void 0 === zv ? void 0 : zv.name) ? (0, ev.b)(Pv.inventory) : 0
+       const cT = TT.oN.HTT(TT.jH),
+         lT = TT.oN.ITT(TT.jH);
+       return TT.lD.canAltAction && void 0 !== cT && void 0 !== lT && IT(lT, null === (kT = cT.selectedItem) || void 0 === kT ? void 0 : kT.name) ? (0, KT.b)(cT.inventory) : 0
```

#### 831. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6229` → after: `L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6340) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6229)

```diff
-     const av = new Map(Object.entries(gv.e).map((vv => {
+     const vT = new Map(Object.entries(OT.g).map((TT => {
```

#### 832. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6239` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6350) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6239)

```diff
-       } = Pv, lv = (null !== pv && void 0 !== pv ? pv : []).map((vv => {
+       } = cT, IT = (null !== yT && void 0 !== yT ? yT : []).map((TT => {
```

#### 833. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6247` → after: `L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6358) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6247)

```diff
-         food: new Set([...null !== Sv && void 0 !== Sv ? Sv : [], ...null !== ev && void 0 !== ev ? ev : [], ...null !== gv && void 0 !== gv ? gv : [], ...lv]),
+         food: new Set([...null !== MT && void 0 !== MT ? MT : [], ...null !== KT && void 0 !== KT ? KT : [], ...null !== OT && void 0 !== OT ? OT : [], ...IT]),
```

#### 834. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6249` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6360) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6249)

```diff
-         saddle: dv ? null !== Nv && void 0 !== Nv ? Nv : "Saddle" : null
+         saddle: fT ? null !== xT && void 0 !== xT ? xT : "Saddle" : null
```

#### 835. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6279` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6390) · [Before (L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6279)

```diff
-   37304: (vv, zv, Pv) => {
+   37650: (TT, kT, cT) => {
```

#### 836. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6283-L6285` → after: `L6395-L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6395-L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6395-L6397) · [Before (L6283-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6283-L6285)

```diff
-       h: () => Cz,
-       k: () => jz,
-       m: () => iz,
+       j: () => Fk,
+       l: () => Nk,
+       n: () => rk,
```

#### 837. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6287-L6290` → after: `L6399-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6399-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6399-L6402) · [Before (L6287-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6287-L6290)

```diff
-       s: () => zP,
-       u: () => Ez,
-       v: () => Hz,
-       w: () => PP,
+       p: () => nk,
+       t: () => gk,
+       x: () => Mc,
+       z: () => ak,
```

#### 838. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6293-L6294` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6405) · [Before (L6293-L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6293-L6294)

```diff
-       G: () => Lz,
-       H: () => Fz
+       E: () => Pk
```

#### 839. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6296-L6299` → after: `L6407-L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6407-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6407-L6410) · [Before (L6296-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6296-L6299)

```diff
-     var hv = Pv(9101),
-       Sv = Pv(37330);
-     const ev = hv.g.Water.id,
-       gv = hv.g.Ice.id,
+     var lT = cT(9447),
+       MT = cT(37669);
+     const KT = lT.i.Water.id,
+       OT = lT.i.Ice.id,
```

#### 840. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6310` → after: `L6421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6421) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6310)

```diff
-       return (null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.meta.rootId) === ev
+       return (null === (kT = lT.i[TT]) || void 0 === kT ? void 0 : kT.meta.rootId) === KT
```

#### 841. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6312-L6326` → after: `L6423-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6423-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6423-L6437) · [Before (L6312-L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6312-L6326)

```diff
-     var Nv = Pv(37515),
-       lv = Pv(185),
-       Tv = Pv(37522),
-       Wv = Pv(37533),
-       wv = Pv(312),
-       av = Pv(1209),
-       sv = Pv(36542),
-       Cv = Pv(4209),
-       iv = Pv(4247),
-       cv = Pv(2934),
-       Gv = Pv(37312),
-       mv = Pv(37392),
-       jv = Pv(37319),
-       fv = Pv(37395),
-       Fv = Pv(327),
+     var xT = cT(37847),
+       IT = cT(218),
+       AT = cT(37849),
+       CT = cT(37866),
+       jT = cT(339),
+       vT = cT(1226),
+       tT = cT(36845),
+       hT = cT(4445),
+       NT = cT(4472),
+       QT = cT(3081),
+       ST = cT(37658),
+       DT = cT(37712),
+       aT = cT(37661),
+       FT = cT(37717),
+       rT = cT(350),
```

#### 842. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6328-L6345` → after: `L6439-L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6439-L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6439-L6456) · [Before (L6328-L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6328-L6345)

```diff
-       nv = Pv(3438),
-       Ov = Pv(37397),
-       Dv = Pv(36271),
-       Kv = Pv(36269),
-       Vv = Pv(37402),
-       Uv = Pv(3539),
-       Rv = Pv(26),
-       xv = Pv(1903),
-       tv = Pv(37410),
-       qv = Pv(36783),
-       Iv = Pv(37441),
-       Qv = Pv(2940),
-       Zv = Pv(1184),
-       Av = Pv(37454),
-       Lv = Pv(37463),
-       Hv = Pv(36659),
- ... (2 more removed lines; see GitHub link above)
+       wT = cT(3644),
+       mT = cT(37725),
+       bT = cT(36580),
+       zT = cT(36573),
+       JT = cT(37732),
+       oT = cT(3732),
+       HT = cT(36),
+       eT = cT(1974),
+       GT = cT(37734),
+       VT = cT(37143),
+       ET = cT(37767),
+       ZT = cT(3089),
+       uT = cT(1202),
+       XT = cT(37774),
+       dT = cT(37790),
+       LT = cT(36985),
+ ... (2 more added lines; see GitHub link above)
```

#### 843. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6348-L6351` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6459) · [Before (L6348-L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6348-L6351)

```diff
-     var Ev = Pv(36768),
-       ov = Pv(36764),
-       bv = Pv(37461),
-       rv = Pv(36738),
+     var BT = cT(37121),
```

#### 844. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6353-L6369` → after: `L6461-L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6461-L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6461-L6480) · [Before (L6353-L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6353-L6369)

```diff
-       Xv = Pv(37086);
-     var uv = Pv(37475),
-       vz = Pv(36743),
-       zz = Pv(37428),
-       Pz = Pv(36918),
-       hz = Pv(36884),
-       Sz = Pv(36685),
-       ez = Pv(36926),
-       gz = Pv(36705),
-       pz = Pv(37106),
-       dz = Pv(2599),
-       Nz = Pv(1306),
-       lz = Pv(36591),
-       Tz = Pv(37445),
-       Wz = Pv(37465),
-       wz = Pv(37470);
- ... (1 more removed lines; see GitHub link above)
+       nT = cT(37781),
+       pT = cT(37074),
+       iT = cT(37474),
+       qT = cT(37442);
+     var sT = cT(37807),
+       Tk = cT(37080),
+       kk = cT(37754),
+       ck = cT(37275),
+       lk = cT(37239),
+       Mk = cT(37016),
+       Kk = cT(37282),
+       Ok = cT(37041),
+       yk = cT(37470),
+       fk = cT(2790),
+       xk = cT(1327),
+       Ik = cT(36885),
+ ... (4 more added lines; see GitHub link above)
```

#### 845. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6371-L6375` → after: `L6482-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6482-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6482-L6486) · [Before (L6371-L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6371-L6375)

```diff
-         Helmet: Pv(37482),
-         Chestplate: Pv(37487),
-         Leggings: Pv(37496),
-         Boots: Pv(37503),
-         Gauntlets: Pv(37511)
+         Helmet: cT(37816),
+         Chestplate: cT(37825),
+         Leggings: cT(37834),
+         Boots: cT(37837),
+         Gauntlets: cT(37843)
```

#### 846. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6380-L6382` → after: `L6491-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6491-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6491-L6493) · [Before (L6380-L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6380-L6382)

```diff
-       Rv.j.zC("localBlockMined");
-       const Pv = (0, dz.d)(),
-         Nv = Pv.nG(vv[0], vv[1], vv[2]);
+       HT.k.nt("localBlockMined");
+       const cT = (0, fk.c)(),
+         xT = cT.Tm(TT[0], TT[1], TT[2]);
```

#### 847. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6385` → after: `L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6496) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6385)

```diff
-         Tv = null === (zv = hv.g[lv].solid) || void 0 === zv || zv,
+         AT = null === (kT = lT.i[IT].solid) || void 0 === kT || kT,
```

#### 848. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6387-L6388` → after: `L6498-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6498-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6498-L6499) · [Before (L6387-L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6387-L6388)

```diff
-       Iv.g.emit(50, {
-         ...(0, Tz.b)(vv, hv.g[Nv].SC, .05, .95),
+       ET.k.emit(50, {
+         ...(0, Ak.d)(TT, lT.i[xT].kh, .05, .95),
```

#### 849. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6395-L6397` → after: `L6506-L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6506-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6506-L6508) · [Before (L6395-L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6395-L6397)

```diff
-       const wv = Pv.getClientPredictedOption((0, dz.g)().sV, "fillBrokenBlocksWithWater") ? function(vv, zv, Pv, Nv, lv) {
-           const Tv = hv.g[lv];
-           if (0 === lv || Tv.zw || lv in Sv.c) return 0;
+       const jT = cT.getClientPredictedOption((0, fk.f)().jH, "fillBrokenBlocksWithWater") ? function(TT, kT, cT, xT, IT) {
+           const AT = lT.i[IT];
+           if (0 === IT || AT.lj || IT in MT.c) return 0;
```

#### 850. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6403` → after: `L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6514) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6403)

```diff
-           return Wv || wv ? ev : 0
+           return CT || jT ? KT : 0
```

#### 851. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6406-L6414` → after: `L6517-L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6517-L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6517-L6525) · [Before (L6406-L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6406-L6414)

```diff
-           const Pv = (0, dz.d)().client.inventoryPrediction.record(null);
-           return (0, nv.sendColyMessage)(Uv.Xf, {
-             Wg: 0,
-             Np: Yv().copy([], vv),
-             lp: iz(),
-             Tp: !1,
-             Wp: !1,
-             wp: zv,
-             lg: Pv
+           const cT = (0, fk.c)().client.inventoryPrediction.record(null);
+           return (0, wT.sendColyMessage)(oT.dg, {
+             sK: 0,
+             WO: PT().copy([], TT),
+             nO: Nk(),
+             pO: !1,
+             iO: !1,
+             qO: kT,
+             iK: cT
```

#### 852. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6418-L6419` → after: `L6529-L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6529-L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6529-L6530) · [Before (L6418-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6418-L6419)

```diff
-           sV: sv
-         } = (0, dz.g)();
+           jH: tT
+         } = (0, fk.f)();
```

#### 853. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6422` → after: `L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6533) · [Before (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6422)

```diff
-         const zv = Pv.getBlockBreakDrop(sv, Nv, null !== (Cv = null === (iv = Pv.getInvenHeldItem(sv)) || void 0 === iv ? void 0 : iv.name) && void 0 !== Cv ? Cv : null);
+         const kT = cT.getBlockBreakDrop(tT, xT, null !== (hT = null === (NT = cT.getInvenHeldItem(tT)) || void 0 === NT ? void 0 : NT.name) && void 0 !== hT ? hT : null);
```

#### 854. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6425` → after: `L6536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6536) · [Before (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6425)

```diff
-       Pv.eD(vv[0], vv[1], vv[2], wv), (0, Wz.h)(vv[0], vv[1], vv[2]), Pv.client.triggerGameCallback("onPlayerChangeBlock", (0, dz.g)().sV, vv[0], vv[1], vv[2], (0, hv.d)(Nv), "Air")
+       cT.Qm(TT[0], TT[1], TT[2], jT), (0, Ck.i)(TT[0], TT[1], TT[2]), cT.client.triggerGameCallback("onPlayerChangeBlock", (0, fk.f)().jH, TT[0], TT[1], TT[2], (0, lT.g)(xT), "Air")
```

#### 855. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6428` → after: `L6539-L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6539-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6539-L6541) · [Before (L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6428)

```diff
-     const cz = ["length", 0, 2, 152, "c", "e", 1, 213, 151];
+     const Qk = [0, 1, 68, "length", 2, "a"];
+ 
+     function Sk() {}
```

#### 856. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6435-L6438` → after: `L6548-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6548-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6548-L6561) · [Before (L6435-L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6435-L6438)

```diff
-       const Pv = (0, Dv.e)((0, Nv.e)(vv, zv));
-       Kv.c.play(Pv, 1)
-     }((...vv) => {
-       Gz(vv[cz[0]] = cz[1], vv[cz[8]] = cz[1], iz = () => (vv[cz[8]]++, 5 === vv[cz[8]] ? (vv[cz[8]] = cz[1], "es") : Vv.f))
+       const cT = (0, bT.h)((0, xT.b)(TT, kT));
+       zT.d.play(cT, 1)
+     }
+     "PY1f3Cb" in Sk && function(...TT) {
+       Dk(TT[Qk[3]] = Qk[0], TT[-Qk[2]] = function(TT) {
+         var kT, cT, lT, MT, KT = TT.length;
+         for (Dk(kT = [], cT = Qk[0]), lT = Qk[0]; lT < KT; lT++) kT.push(lT !== Qk[0] && TT[lT] > TT[lT - Qk[1]] ? kT[lT - Qk[1]] + Qk[1] : Qk[1]);
+         for (MT = KT - Qk[1]; MT >= Qk[0]; MT--) MT !== KT - Qk[1] && TT[MT] > TT[MT + Qk[1]] && (kT[MT] = Math.max(kT[MT], kT[MT + Qk[1]] + Qk[1])), cT += kT[MT];
+         return cT
+       }, console.log(TT[-Qk[2]]))
+     }(), ((...TT) => {
+       Dk(TT[Qk[3]] = Qk[0], TT[Qk[5]] = Qk[0], Nk = (...kT) => (kT[Qk[3]] = Qk[0], "qeDFC7" in Sk && function(...TT) {
+         TT[Qk[3]] = Qk[0]
+       }(), TT[Qk[5]]++, 5 === TT[Qk[5]] ? (TT[Qk[5]] = Qk[0], "es") : JT.e))
```

#### 857. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6445` → after: `L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6568) · [Before (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6445)

```diff
-         kh: pv = !1,
+         Wl: yT = !1,
```

#### 858. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6454` → after: `L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6577) · [Before (L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6454)

```diff
-       if (zv ??= String(vv.Rm.JA([])), vv.Rm.add([Pv[0], Pv[1], Pv[2]], Cv, Cv, null, null, void 0 !== Nv, !1, zv), vv.Rm.IK(zv, "autoRemoveMesh"), vv.Rm.IK(zv, "itemState", {
+       if (kT ??= String(TT.oN.tL([])), TT.oN.add([cT[0], cT[1], cT[2]], hT, hT, null, null, void 0 !== xT, !1, kT), TT.oN.dJ(kT, "autoRemoveMesh"), TT.oN.dJ(kT, "itemState", {
```

#### 859. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6459-L6460` → after: `L6582-L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6582-L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6582-L6583) · [Before (L6459-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6459-L6460)

```diff
-           kh: pv,
-           creationTime: null !== wv && void 0 !== wv ? wv : Date.now(),
+           Wl: yT,
+           creationTime: null !== jT && void 0 !== jT ? jT : Date.now(),
```

#### 860. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6463-L6465` → after: `L6586-L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6586-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6586-L6588) · [Before (L6463-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6463-L6465)

```diff
-         const Pv = vv.Rm.vx(zv);
-         (0, Wv.e)(Pv), Pv.applyImpulse(Nv)
-       } else vv.Rm.IK(zv, "smoothToServerPos", {
+         const cT = TT.oN.JV(kT);
+         (0, CT.b)(cT), cT.applyImpulse(xT)
+       } else TT.oN.dJ(kT, "smoothToServerPos", {
```

#### 861. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6473-L6474` → after: `L6596-L6597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6596-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6596-L6597) · [Before (L6473-L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6473-L6474)

```diff
-       const Sv = null === (Pv = vv.Rm.getState(zv, "autoRotate")) || void 0 === Pv ? void 0 : Pv.heading,
-         ev = null === (hv = vv.Rm.Nvv(zv)) || void 0 === hv ? void 0 : hv.offset;
+       const MT = null === (cT = TT.oN.getState(kT, "autoRotate")) || void 0 === cT ? void 0 : cT.heading,
+         KT = null === (lT = TT.oN.PTT(kT)) || void 0 === lT ? void 0 : lT.offset;
```

#### 862. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6487` → after: `L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6610) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6487)

```diff
-       } = vv.Rm.getState(zv, "itemState"), Nv = gv.droppedItemScale * dv, Tv = gv.droppedMeshTypeScale * Nv;
+       } = TT.oN.getState(kT, "itemState"), xT = OT.droppedItemScale * fT, AT = OT.droppedMeshTypeScale * xT;
```

#### 863. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6489` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6612) · [Before (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6489)

```diff
-       vv.Rm.IK(zv, "hidingMeshManager", {
+       TT.oN.dJ(kT, "hidingMeshManager", {
```

#### 864. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6495` → after: `L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6618) · [Before (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6495)

```diff
-             const pv = vv.Ma.hK;
+             const yT = TT.gv.PJ;
```

#### 865. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6497` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6620) · [Before (L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6497)

```diff
-             pv.setEntityId(hv, zv), pv.setScale(hv, Tv, Tv, Tv), pv.uF(hv, !0);
+             yT.setEntityId(lT, kT), yT.setScale(lT, AT, AT, AT), yT.PD(lT, !0);
```

#### 866. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6499` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6622) · [Before (L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6499)

```diff
-               Rm: dv
+               oN: fT
```

#### 867. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6501-L6505` → after: `L6624-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6624-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6624-L6628) · [Before (L6501-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6501-L6505)

```diff
-             dv.IK(zv, dv.names.mesh, {
-               NK: hv,
-               Ozv: pv.ePv(hv, 0),
-               offset: Yv().dv(0, null !== (ev = null === Pv || void 0 === Pv ? void 0 : Pv.yOffset) && void 0 !== ev ? ev : gv.droppedMeshOffset * Nv + .05 * Math.random(), 0)
-             }), dv.IK(zv, "autoRotate"), Pv && (dv.getState(zv, "autoRotate").heading = Pv.heading)
+             fT.dJ(kT, fT.names.mesh, {
+               mJ: lT,
+               RkT: yT.ScT(lT, 0),
+               offset: PT().ck(0, null !== (KT = null === cT || void 0 === cT ? void 0 : cT.yOffset) && void 0 !== KT ? KT : OT.droppedMeshOffset * xT + .05 * Math.random(), 0)
+             }), fT.dJ(kT, "autoRotate"), cT && (fT.getState(kT, "autoRotate").heading = cT.heading)
```

#### 868. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6511` → after: `L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6634) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6511)

```diff
-             Rm: Pv
+             oN: cT
```

#### 869. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6513` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6636) · [Before (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6513)

```diff
-           Pv.bK(zv, Pv.names.mesh), Pv.bK(zv, "autoRotate")
+           cT.LJ(kT, cT.names.mesh), cT.LJ(kT, "autoRotate")
```

#### 870. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6517` → after: `L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6640) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6517)

```diff
-         canSee: !1 !== (null === (Sv = vv.wV[vv.sV]) || void 0 === Sv || null === (ev = Sv[zv]) || void 0 === ev ? void 0 : ev.canSee),
+         canSee: !1 !== (null === (MT = TT.IH[TT.jH]) || void 0 === MT || null === (KT = MT[kT]) || void 0 === KT ? void 0 : KT.canSee),
```

#### 871. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6523` → after: `L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6646) · [Before (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6523)

```diff
-       (0, dz.g)().Bw && (vv.hV("aShaderPackItem", 4), vv.lV.aShaderPackItem = lz.Vector4.FromArray(zv))
+       (0, fk.f)().Bj && (TT.lH("aShaderPackItem", 4), TT.xH.aShaderPackItem = Ik.Vector4.FromArray(kT))
```

#### 872. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6535` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6658) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6535)

```diff
-         ...jv.c,
+         ...aT.b,
```

#### 873. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6540` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6663) · [Before (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6540)

```diff
-         Vp: !1,
+         ty: !1,
```

#### 874. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6546-L6549` → after: `L6669-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6669-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6669-L6672) · [Before (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6546-L6549)

```diff
-       const Sv = (0, dz.g)();
-       Pv && (zv.sideOrientation = vz.c.ClockWiseSideOrientation);
-       const ev = Sv.Ma.hK,
-         gv = Sv.Bw ? {
+       const MT = (0, fk.f)();
+       cT && (kT.sideOrientation = Tk.d.ClockWiseSideOrientation);
+       const KT = MT.gv.PJ,
+         OT = MT.Bj ? {
```

#### 875. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6553` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6676) · [Before (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6553)

```diff
-         GT: 16,
+         DA: 16,
```

#### 876. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6560` → after: `L6683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6683) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6560)

```diff
-       }), ev.setPickableForType(vv, !1), Sv.Ma.iK(zv), vv
+       }), KT.setPickableForType(TT, !1), MT.gv.GJ(kT), TT
```

#### 877. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6570` → after: `L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6693) · [Before (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6570)

```diff
-       const ev = (0, wz.o)(zv, Pv),
+       const KT = (0, jk.k)(kT, cT),
```

#### 878. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6574` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6697) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6574)

```diff
-       return Sv && (gv.color = (0, rv.p)(ev.positions.length / 3, rv.e)), (0, zz.r)((0, dz.g)().Ma, vv, {
+       return MT && (OT.color = (0, pT.m)(KT.positions.length / 3, pT.d)), (0, kk.q)((0, fk.f)().gv, TT, {
```

#### 879. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6585` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6708) · [Before (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6585)

```diff
-       return !vv || "object" !== typeof vv || Array.isArray(vv) ? null : "animTextures" in vv ? vv : null
+       return !TT || "object" !== typeof TT || Array.isArray(TT) ? null : "animTextures" in TT ? TT : null
```

#### 880. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6590-L6593` → after: `L6713-L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6713-L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6713-L6716) · [Before (L6590-L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6590-L6593)

```diff
-       const hv = `cuboidBlock|${Pv.name}|${zv.key}|${(0,kv.j)(vv)}`;
-       if ((0, dz.g)().Ma.hK.hasType(hv)) return hv;
-       const Sv = Rz(hv, zv, tz, (0, wz.w)(zv, xz));
-       return Sv.material = Pv, (0, Av.e)(Sv), Sv.uF(!1), Sv.Zs = !1, Iz.set(hv, Sv), Vz(hv, Sv, vv, Uz)
+       const lT = `cuboidBlock|${cT.name}|${kT.key}|${(0,iT.l)(TT)}`;
+       if ((0, fk.f)().gv.PJ.hasType(lT)) return lT;
+       const MT = Gk(lT, kT, Ek, (0, jk.q)(kT, Vk));
+       return MT.material = cT, (0, XT.i)(MT), MT.PD(!1), MT.Vt = !1, uk.set(lT, MT), Hk(lT, MT, TT, ek)
```

#### 881. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6598-L6600` → after: `L6721-L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6721-L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6721-L6723) · [Before (L6598-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6598-L6600)

```diff
-       if (vv.Ma.ya || !(0, mv.h)()) return !0;
-       const zv = Gv.b.getBlockAtlasMaterial(vv.Ma.rD(), !1, !1),
-         Pv = Iz.get(Qz(!1, wz.e, zv));
+       if (TT.gv.Uv || !(0, DT.h)()) return !0;
+       const kT = ST.c.getBlockAtlasMaterial(TT.gv.NJ(), !1, !1),
+         cT = uk.get(Xk(!1, jk.d, kT));
```

#### 882. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6603-L6604` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6726-L6727) · [Before (L6603-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6603-L6604)

```diff
-         if (!zv || vv.mzv()) return !1;
-         const Pv = new((0, Xv.c)().SubMesh)(0, 0, 0, 0, 0, vv, void 0, !1, !1),
+         if (!kT || TT.VkT()) return !1;
+         const cT = new((0, qT.e)().SubMesh)(0, 0, 0, 0, 0, TT, void 0, !1, !1),
```

#### 883. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6618-L6619` → after: `L6741-L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6741-L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6741-L6742) · [Before (L6618-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6618-L6619)

```diff
-         vv.once("MT", (() => {
-           const hv = vv.Ma.rD().onAfterRenderObservable;
+         TT.once("UA", (() => {
+           const lT = TT.gv.NJ().onAfterRenderObservable;
```

#### 884. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6639` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6762) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6639)

```diff
-       return Array.isArray(vv) ? lz.fa.FromArray(vv) : new lz.fa(vv, vv, vv)
+       return Array.isArray(TT) ? Ik.Fv.FromArray(TT) : new Ik.Fv(TT, TT, TT)
```

#### 885. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6644-L6645` → after: `L6767-L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6767-L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6767-L6768) · [Before (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6644-L6645)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.id = void 0, this.Is = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.drop … [truncated]
-         const pv = (0, dz.d)().kW.metadatas[vv];
+         this.bakeInScaling = void 0, this.name = void 0, this.id = void 0, this.et = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.drop … [truncated]
+         const yT = (0, fk.c)().sC.metadatas[TT];
```

#### 886. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6647` → after: `L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6770) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6647)

```diff
-         this.bakeInScaling = 1, this.name = vv, this.Is = zv, this.weight = null !== (Pv = pv.weight) && void 0 !== Pv ? Pv : 1, this.heldItemScale = null !== (hv = pv.heldItemScale) && void 0 !== hv ? hv : 1, this.stackable = null === (Sv = pv.stackable) || void 0 === Sv || Sv,  … [truncated]
+         this.bakeInScaling = 1, this.name = TT, this.et = kT, this.weight = null !== (cT = yT.weight) && void 0 !== cT ? cT : 1, this.heldItemScale = null !== (lT = yT.heldItemScale) && void 0 !== lT ? lT : 1, this.stackable = null === (MT = yT.stackable) || void 0 === MT || MT,  … [truncated]
```

#### 887. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6650` → after: `L6773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6773) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6650)

```diff
-         }, this.modelSource = cv.b.getModel(this.modelDefault.name, Qv.e.ITEM), this._setupListeners()
+         }, this.modelSource = QT.e.getModel(this.modelDefault.name, ZT.e.ITEM), this._setupListeners()
```

#### 888. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6653` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6776) · [Before (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6653)

```diff
-         this.displayName = this.name, xv.c.subscribe(`${this.name}DisplayName`, (vv => {
+         this.displayName = this.name, eT.b.subscribe(`${this.name}DisplayName`, (TT => {
```

#### 889. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6656-L6657` → after: `L6779-L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6779-L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6779-L6780) · [Before (L6656-L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6656-L6657)

```diff
-         this.droppedItemScale = 1, xv.c.subscribe("droppedItemScale", (vv => {
-           "number" === typeof vv && isFinite(vv) ? this.droppedItemScale = vv : this.droppedItemScale = 1
+         this.droppedItemScale = 1, eT.b.subscribe("droppedItemScale", (TT => {
+           "number" === typeof TT && isFinite(TT) ? this.droppedItemScale = TT : this.droppedItemScale = 1
```

#### 890. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6683` → after: `L6806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6806) · [Before (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6683)

```diff
-         return (0, kv.j)(vv.flippedWinding)
+         return (0, iT.l)(TT.flippedWinding)
```

#### 891. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6687-L6689` → after: `L6810-L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6810-L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6810-L6812) · [Before (L6687-L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6687-L6689)

```diff
-           const ev = `item|${vv}|${zv}|${Pv.uniqueId}`;
-           Pv.material || console.error(`${vv} thin base has no material`);
-           const gv = Pv.clone(`${vv}ThinBase|${zv}`, null);
+           const KT = `item|${TT}|${kT}|${cT.uniqueId}`;
+           cT.material || console.error(`${TT} thin base has no material`);
+           const OT = cT.clone(`${TT}ThinBase|${kT}`, null);
```

#### 892. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6696` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6819) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6696)

```diff
-         const hv = (0, dz.g)().Ma.hK,
+         const lT = (0, fk.f)().gv.PJ,
```

#### 893. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6698-L6699` → after: `L6821-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6821-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6821-L6822) · [Before (L6698-L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6698-L6699)

```diff
-         if (hv.set(Sv, "aLightLevels", hz.d), hv.set(Sv, "aOpacity", 1), (0, dz.g)().Bw) {
-           const Pv = vv.Vp ? uv.c.Vp : vv.dropped ? uv.c.dropped : 0;
+         if (lT.set(MT, "aLightLevels", lk.d), lT.set(MT, "aOpacity", 1), (0, fk.f)().Bj) {
+           const cT = TT.ty ? sT.e.ty : TT.dropped ? sT.e.dropped : 0;
```

#### 894. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6708` → after: `L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6831) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6708)

```diff
-         return [(0, uv.l)(this.bD() | vv, (0, fv.e)(zv)), ...this.shaderPackLocalFrame()]
+         return [(0, sT.o)(this.vJ() | TT, (0, FT.b)(kT)), ...this.shaderPackLocalFrame()]
```

#### 895. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6711-L6712` → after: `L6834-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6834-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6834-L6835) · [Before (L6711-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6711-L6712)

```diff
-         const vv = hv.g[this.name];
-         if (null === vv || void 0 === vv || !vv.blockModelItem) return [tv.e / this.bakeInScaling, 0, 0];
+         const TT = lT.i[this.name];
+         if (null === TT || void 0 === TT || !TT.blockModelItem) return [GT.c / this.bakeInScaling, 0, 0];
```

#### 896. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6718-L6719` → after: `L6841-L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6841-L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6841-L6842) · [Before (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6718-L6719)

```diff
-         } = (0, tv.j)((0, tv.n)(vv));
-         return [zv / this.bakeInScaling, Pv, (0, uv.h)(Sv, ev)]
+         } = (0, GT.h)((0, GT.o)(TT));
+         return [kT / this.bakeInScaling, cT, (0, sT.k)(MT, KT)]
```

#### 897. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6722` → after: `L6845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6845) · [Before (L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6722)

```diff
-         (0, dz.g)().Bw && (vv.lV.aShaderPackItem = lz.Vector4.FromArray(this.shaderPackItem(zv, Pv)))
+         (0, fk.f)().Bj && (TT.xH.aShaderPackItem = Ik.Vector4.FromArray(this.shaderPackItem(kT, cT)))
```

#### 898. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6731` → after: `L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6854) · [Before (L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6731)

```diff
-         const zv = hv.g[this.name],
+         const kT = lT.i[this.name],
```

#### 899. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6733` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6856) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6733)

```diff
-         return Pv && zv.blockModelItem ? Pv * this.bakeInScaling / (0, tv.h)(zv) : 0
+         return cT && kT.blockModelItem ? cT * this.bakeInScaling / (0, GT.g)(kT) : 0
```

#### 900. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6740-L6742` → after: `L6863-L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6863-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6863-L6865) · [Before (L6740-L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6740-L6742)

```diff
-         const ev = (0, dz.g)().Ma.hK,
-           gv = null !== (hv = Ov.r[zv]) && void 0 !== hv ? hv : Ov.r.None;
-         ev.set(vv, "aEnchantmentColour", gv.r, gv.g, gv.b), ev.set(vv, "aEnchantmentSpeed", null !== (Sv = wv.mb[zv]) && void 0 !== Sv ? Sv : wv.mb.None)
+         const KT = (0, fk.f)().gv.PJ,
+           OT = null !== (lT = mT.p[kT]) && void 0 !== lT ? lT : mT.p.None;
+         KT.set(TT, "aEnchantmentColour", OT.r, OT.g, OT.b), KT.set(TT, "aEnchantmentSpeed", null !== (MT = jT.eb[kT]) && void 0 !== MT ? MT : jT.eb.None)
```

#### 901. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6750` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6873) · [Before (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6750)

```diff
-           Pv.lV.aEnchantmentColour = null !== (hv = Ov.r[vv]) && void 0 !== hv ? hv : Ov.r.None, Pv.lV.aEnchantmentSpeed = null !== (Sv = wv.mb[vv]) && void 0 !== Sv ? Sv : wv.mb.None, this._markForShaderPack(Pv, az, vv)
+           cT.xH.aEnchantmentColour = null !== (lT = mT.p[TT]) && void 0 !== lT ? lT : mT.p.None, cT.xH.aEnchantmentSpeed = null !== (MT = jT.eb[TT]) && void 0 !== MT ? MT : jT.eb.None, this._markForShaderPack(cT, vk, TT)
```

#### 902. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6760-L6761` → after: `L6883-L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6883-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6883-L6884) · [Before (L6760-L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6760-L6761)

```diff
-           const Pv = (0, zz.s)((0, dz.g)().Ma, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return Pv.pp = Mz(vv), this._attachNewMeshInstanceToParent(Pv, zv), Pv
+           const cT = (0, kk.u)((0, fk.f)().gv, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return cT.GA = Uk(TT), this._attachNewMeshInstanceToParent(cT, kT), cT
```

#### 903. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6764-L6765` → after: `L6887-L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6887-L6888) · [Before (L6764-L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6764-L6765)

```diff
-           const Pv = (0, zz.s)((0, dz.g)().Ma, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return Pv.pp = Mz(vv), this._sourceMeshLoadFailed || this._meshParents.push({
+           const cT = (0, kk.u)((0, fk.f)().gv, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return cT.GA = Uk(TT), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 904. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6772` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6895) · [Before (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6772)

```diff
-         vv.hV("aEnchantmentColour", 3), vv.hV("aEnchantmentSpeed", 1), vv.lV.aEnchantmentColour = (0, Ov.k)(0, 0, 0), vv.lV.aEnchantmentSpeed = 0, (0, Av.e)(vv), (0, Lv.d)(vv), Yz(vv, this.shaderPackItem(0, void 0))
+         TT.lH("aEnchantmentColour", 3), TT.lH("aEnchantmentSpeed", 1), TT.xH.aEnchantmentColour = (0, mT.g)(0, 0, 0), TT.xH.aEnchantmentSpeed = 0, (0, XT.i)(TT), (0, dT.b)(TT), wk(TT, this.shaderPackItem(0, void 0))
```

#### 905. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6780` → after: `L6903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6903) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6780)

```diff
-           const Sv = hv === Qv.g.BASE64;
+           const MT = lT === ZT.j.BASE64;
```

#### 906. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6782` → after: `L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6905) · [Before (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6782)

```diff
-             source: Sv ? Pv : "",
+             source: MT ? cT : "",
```

#### 907. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6796` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6919) · [Before (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6796)

```diff
-             return vv && cv.b.getModelOverride(vv.name) ? zv(cv.b.getModel(vv.name, vv.type, !0)) : null
+             return TT && QT.e.getModelOverride(TT.name) ? kT(QT.e.getModel(TT.name, TT.type, !0)) : null
```

#### 908. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6809-L6810` → after: `L6932-L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6932-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6932-L6933) · [Before (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6809-L6810)

```diff
-         const gv = (0, zz.n)(ev, !zv, !1);
-         return gv.name = `${this.name}GlbModel`, gv.Zs = !1, (0, rv.j)(gv, this.bakeInScaling), gv
+         const OT = (0, kk.o)(KT, !kT, !1);
+         return OT.name = `${this.name}GlbModel`, OT.Vt = !1, (0, pT.h)(OT, this.bakeInScaling), OT
```

#### 909. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6815` → after: `L6938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6938) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6815)

```diff
-         this.loadModel(this.Is, !!zv).then((vv => {
+         this.loadModel(this.et, !!kT).then((TT => {
```

#### 910. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6818-L6821` → after: `L6941-L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6941-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6941-L6944) · [Before (L6818-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6818-L6821)

```diff
-             for (const zv of vv.material.T_) zv.name = `${this.name}ItemMat`;
-           (0, bv.e)(vv.material, (vv => {
-             (0, Sz.M)((0, Sz.bb)(vv)), (0, Ev.b)(vv, (() => {
-               (0, Sz.q)((0, Sz.bb)(vv), Mv.e)
+             for (const kT of TT.material.o4) kT.name = `${this.name}ItemMat`;
+           (0, nT.c)(TT.material, (TT => {
+             (0, Mk.O)((0, Mk.cb)(TT)), (0, BT.e)(TT, (() => {
+               (0, Mk.t)((0, Mk.cb)(TT), RT.e)
```

#### 911. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6823` → after: `L6946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6946) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6823)

```diff
-           })), vv.uF(!1), this._registerSourceMeshBuffers(vv), (0, bv.e)(vv.material, Ev.f), this._sourceMesh = vv;
+           })), TT.PD(!1), this._registerSourceMeshBuffers(TT), (0, nT.c)(TT.material, BT.g), this._sourceMesh = TT;
```

#### 912. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6828` → after: `L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6951) · [Before (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6828)

```diff
-             of this._meshParents) zv.mzv() || this._attachNewMeshInstanceToParent(zv, hv);
+             of this._meshParents) kT.VkT() || this._attachNewMeshInstanceToParent(kT, lT);
```

#### 913. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6849-L6851` → after: `L6972-L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6972-L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6972-L6974) · [Before (L6849-L6851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6849-L6851)

```diff
-           Ma: hv
-         } = (0, dz.g)();
-         hv.Hs(Pv, !1), (0, ez.m)(Pv, 0, 0, 0), null === zv || void 0 === zv || zv(vv, Pv)
+           gv: lT
+         } = (0, fk.f)();
+         lT.Zt(cT, !1), (0, Kk.r)(cT, 0, 0, 0), null === kT || void 0 === kT || kT(TT, cT)
```

#### 914. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6856-L6857` → after: `L6979-L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6979-L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6979-L6980) · [Before (L6856-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6856-L6857)

```diff
-             const Pv = (0, dz.d)(),
-               hv = Pv.kW.metadatas;
+             const cT = (0, fk.c)(),
+               lT = cT.sC.metadatas;
```

#### 915. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6860` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6983) · [Before (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6860)

```diff
-               for (const zv in (0, av.bb)(sv.v)) {
+               for (const kT in (0, vT._)(tT.v)) {
```

#### 916. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6870` → after: `L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R6993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L6993) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6870)

```diff
-             return null !== (zv = Bz.byRoot.get(vv)) && void 0 !== zv ? zv : Jz
+             return null !== (kT = Bk.byRoot.get(TT)) && void 0 !== kT ? kT : Wk
```

#### 917. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6882-L6883` → after: `L7005-L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7005-L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7005-L7006) · [Before (L6882-L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6882-L6883)

```diff
-         super(vv, zv), this.harvestType = void 0, this.ttb = void 0, this.drops = void 0, this.modelScale = void 0, this.averageColour = void 0, this.zw = void 0, this.specialToolDrop = void 0, this.stoodOnSpeedMultiplier = void 0, this.soundType = void 0, this.customPlanesInfo = … [truncated]
-         const Pv = (0, dz.d)().kW.metadatas[vv];
+         super(TT, kT), this.harvestType = void 0, this.ttb = void 0, this.drops = void 0, this.modelScale = void 0, this.averageColour = void 0, this.lj = void 0, this.specialToolDrop = void 0, this.stoodOnSpeedMultiplier = void 0, this.soundType = void 0, this.customPlanesInfo = … [truncated]
+         const cT = (0, fk.c)().sC.metadatas[TT];
```

#### 918. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6892` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7015) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6892)

```diff
-         xv.c.subscribe("creative", (vv => {
+         eT.b.subscribe("creative", (TT => {
```

#### 919. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6894` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7017) · [Before (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6894)

```diff
-         })), xv.c.subscribe(`${this.name}Ttb`, (ev => {
+         })), eT.b.subscribe(`${this.name}Ttb`, (KT => {
```

#### 920. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6896` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7019) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6896)

```diff
-         })), xv.c.subscribe("ttbMultiplier", (vv => {
+         })), eT.b.subscribe("ttbMultiplier", (TT => {
```

#### 921. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6898` → after: `L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7021) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6898)

```diff
-         })), Rv.j.subscribe("ttbEffectMultiplier", (vv => {
+         })), HT.k.subscribe("ttbEffectMultiplier", (TT => {
```

#### 922. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6906` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7029) · [Before (L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6906)

```diff
-         return null !== (vv = (0, dz.g)().kW.ZJ(this.id)) && void 0 !== vv ? vv : 0
+         return null !== (TT = (0, fk.f)().sC.UW(this.id)) && void 0 !== TT ? TT : 0
```

#### 923. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6911-L6912` → after: `L7034-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7034-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7034-L7035) · [Before (L6911-L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6911-L6912)

```diff
-         super(vv, zv), this.cuboidShape = wz.e, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const Pv = hv.g[vv];
+         super(TT, kT), this.cuboidShape = jk.d, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         const cT = lT.i[TT];
```

#### 924. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6928` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7051) · [Before (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6928)

```diff
-         if (this.usesBlockAtlasMaterial()) hv = Gv.b.getBlockAtlasMaterial(vv, this.transTex, null !== (Sv = this.unlitStandaloneMesh) && void 0 !== Sv && Sv);
+         if (this.usesBlockAtlasMaterial()) lT = ST.c.getBlockAtlasMaterial(TT, this.transTex, null !== (MT = this.unlitStandaloneMesh) && void 0 !== MT && MT);
```

#### 925. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6931-L6933` → after: `L7054-L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7054-L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7054-L7056) · [Before (L6931-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6931-L6933)

```diff
-           hv = (0, ov.c)({
-             name: `${zv}BlockMaterial`,
-             Is: vv,
+           lT = (0, WT.e)({
+             name: `${kT}BlockMaterial`,
+             et: TT,
```

#### 926. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6945` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7068) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6945)

```diff
-               (0, Hv.e)(vv, !0), (0, Sz.M)(vv)
+               (0, LT.d)(TT, !0), (0, Mk.O)(TT)
```

#### 927. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6960` → after: `L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7083) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6960)

```diff
-           Vp: !0
+           ty: !0
```

#### 928. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6965` → after: `L7088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7088) · [Before (L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6965)

```diff
-         return this._needsHeldBase(vv) ? `${zv}|held` : zv
+         return this._needsHeldBase(TT) ? `${kT}|held` : kT
```

#### 929. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6968` → after: `L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7091) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6968)

```diff
-         if (!vv.Vp || this._canShareThinBase()) return !1;
+         if (!TT.ty || this._canShareThinBase()) return !1;
```

#### 930. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6985-L6986` → after: `L7108-L7109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7108-L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7108-L7109) · [Before (L6985-L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6985-L6986)

```diff
-         const hv = this._perFaceAtlasIdx(Pv.Vp),
-           Sv = (0, dz.g)().Ma.hK;
+         const lT = this._perFaceAtlasIdx(cT.ty),
+           MT = (0, fk.f)().gv.PJ;
```

#### 931. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6990` → after: `L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7113) · [Before (L6990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6990)

```diff
-         const zv = vv ? Jv : Bv,
+         const kT = TT ? YT : UT,
```

#### 932. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6997` → after: `L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7120) · [Before (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6997)

```diff
-           return zv.map((vv => hv.r[(0, Cv.h)(Pv[Sv[vv]])]))
+           return kT.map((TT => lT.w[(0, hT.j)(cT[MT[TT]])]))
```

#### 933. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L6999` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7122) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L6999)

```diff
-         const ev = "string" === typeof Pv ? Pv : qz(Pv);
+         const KT = "string" === typeof cT ? cT : Zk(cT);
```

#### 934. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7001` → after: `L7124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7124) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7001)

```diff
-           const vv = hv.r[(0, Cv.h)(ev)];
+           const TT = lT.w[(0, hT.j)(KT)];
```

#### 935. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7017-L7019` → after: `L7140-L7142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7140-L7142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7140-L7142) · [Before (L7017-L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7017-L7019)

```diff
-             Ma: Sv
-           } = (0, dz.g)();
-         Sv.Hs(hv, !1);
+             gv: MT
+           } = (0, fk.f)();
+         MT.Zt(lT, !1);
```

#### 936. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7021` → after: `L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7144) · [Before (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7021)

```diff
-         return (0, ez.m)(hv, 0, 0, 0), hv.pp.set(ev.x, ev.y, ev.z), hv.lV.aLightLevels === (null === (vv = this._sourceMesh.lV) || void 0 === vv ? void 0 : vv.aLightLevels) && (hv.lV.aLightLevels = (0, hz.p)()), null === Pv || void 0 === Pv || Pv(hv, hv), hv
+         return (0, Kk.r)(lT, 0, 0, 0), lT.GA.set(KT.x, KT.y, KT.z), lT.xH.aLightLevels === (null === (TT = this._sourceMesh.xH) || void 0 === TT ? void 0 : TT.aLightLevels) && (lT.xH.aLightLevels = (0, lk.m)()), null === cT || void 0 === cT || cT(lT, lT), lT
```

#### 937. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7027` → after: `L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7150) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7027)

```diff
-           const zv = (0, dz.g)().Ma.rD();
+           const kT = (0, fk.f)().gv.NJ();
```

#### 938. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7029` → after: `L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7152) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7029)

```diff
-             materialOverride: Gv.b.getBlockAtlasMaterialForGrowing(zv, this.transTex, null !== (vv = this.unlitStandaloneMesh) && void 0 !== vv && vv)
+             materialOverride: ST.c.getBlockAtlasMaterialForGrowing(kT, this.transTex, null !== (TT = this.unlitStandaloneMesh) && void 0 !== TT && TT)
```

#### 939. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7034-L7036` → after: `L7157-L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7157-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7157-L7159) · [Before (L7034-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7034-L7036)

```diff
-             Ma: Pv
-           } = (0, dz.g)();
-         return Pv.Hs(zv, !1), (0, ez.m)(zv, 0, 0, 0), zv
+             gv: cT
+           } = (0, fk.f)();
+         return cT.Zt(kT, !1), (0, Kk.r)(kT, 0, 0, 0), kT
```

#### 940. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7041` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7164) · [Before (L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7041)

```diff
-           Vp: Pv = !1,
+           ty: cT = !1,
```

#### 941. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7044` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7167) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7044)

```diff
-         } = null !== vv && void 0 !== vv ? vv : {}, ev = [], gv = (0, mv.h)(), pv = this._perFaceAtlasIdx(Pv);
+         } = null !== TT && void 0 !== TT ? TT : {}, KT = [], OT = (0, DT.h)(), yT = this._perFaceAtlasIdx(cT);
```

#### 942. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7048-L7049` → after: `L7171-L7172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7171-L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7171-L7172) · [Before (L7048-L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7048-L7049)

```diff
-               zv = (0, mv.f)(vv, 0, gv),
-               Pv = (0, mv.f)(vv, 1, gv);
+               kT = (0, DT.g)(TT, 0, OT),
+               cT = (0, DT.g)(TT, 1, OT);
```

#### 943. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7053-L7055` → after: `L7176-L7178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7176-L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7176-L7178) · [Before (L7053-L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7053-L7055)

```diff
-         const dv = pv ? (0, wz.w)(hv, pv) : void 0,
-           Nv = Rz(`${this.name}${Pv?"Held":""}Block`, hv, ev, dv, Sv);
-         return Nv.material = null !== zv && void 0 !== zv ? zv : this.meshMaterial, zv || ((0, Av.e)(Nv), (0, Lv.d)(Nv), Yz(Nv, this.shaderPackItem(0, void 0))), Nv.uF(!1), Nv.Zs = !1, Nv
+         const fT = yT ? (0, jk.q)(lT, yT) : void 0,
+           xT = Gk(`${this.name}${cT?"Held":""}Block`, lT, KT, fT, MT);
+         return xT.material = null !== kT && void 0 !== kT ? kT : this.meshMaterial, kT || ((0, XT.i)(xT), (0, dT.b)(xT), wk(xT, this.shaderPackItem(0, void 0))), xT.PD(!1), xT.Vt = !1, xT
```

#### 944. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7060` → after: `L7183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7183) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7060)

```diff
-         super(vv, zv), this.type = "SlabBlock", this.cuboidShape = wz.i
+         super(TT, kT), this.type = "SlabBlock", this.cuboidShape = jk.g
```

#### 945. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7065` → after: `L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7188) · [Before (L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7065)

```diff
-         super(vv, zv), this.type = "StairsBlock", this.cuboidShape = wz.k
+         super(TT, kT), this.type = "StairsBlock", this.cuboidShape = jk.i
```

#### 946. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7071-L7073` → after: `L7194-L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7194-L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7194-L7196) · [Before (L7071-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7071-L7073)

```diff
-         super(vv, zv), this.droppedMeshTypeScale = .8 * lv.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * lv.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (Pv = this.heldItemScale) && void 0 !== Pv ? Pv : 1);
-         const Sv = hv.g[vv];
-         Sv.blockModelItem && (console.assert(void 0 !== Sv.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${vv}`), this.modelDefault = {
+         super(TT, kT), this.droppedMeshTypeScale = .8 * IT.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * IT.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (cT = this.heldItemScale) && void 0 !== cT ? cT : 1);
+         const MT = lT.i[TT];
+         MT.blockModelItem && (console.assert(void 0 !== MT.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${TT}`), this.modelDefault = {
```

#### 947. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7076` → after: `L7199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7199) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7076)

```diff
-         }, this.modelSource = cv.b.getModel(this.modelDefault.name, Qv.e.BLOCK)), this.type = "TwoDBlock"
+         }, this.modelSource = QT.e.getModel(this.modelDefault.name, ZT.e.BLOCK)), this.type = "TwoDBlock"
```

#### 948. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7082` → after: `L7205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7205) · [Before (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7082)

```diff
-         super(vv, zv), this.droppedMeshTypeScale = .8 * lv.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * lv.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (Pv = this.heldItemScale) && void 0 !== Pv ? Pv : 1), this.type = "TwoDItem"
+         super(TT, kT), this.droppedMeshTypeScale = .8 * IT.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * IT.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (cT = this.heldItemScale) && void 0 !== cT ? cT : 1), this.type = "TwoDItem"
```

#### 949. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7087` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7210) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7087)

```diff
-         super(vv, zv), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = sv.r[vv].armourReduction
+         super(TT, kT), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = tT.o[TT].armourReduction
```

#### 950. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7101-L7106` → after: `L7224-L7229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7224-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7224-L7229) · [Before (L7101-L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7101-L7106)

```diff
-             super(vv, zv), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
-             const dv = sv.r[vv];
-             this.gunType = dv.gunType, this.scopeType = dv.scopeType, this.fireRate = dv.fireRate, this.fireRateWithHeldTouch = dv.fireRateWithHeldTouch, this.equipDelay = dv.equipDelay, this.damage = dv.damage, this.shotPelletCount = dv.shotPelletCount, this.msPerRound = dv.msPe … [truncated]
-             const Nv = (0, ov.c)({
-                 name: `${vv}BulletMeshMaterial`,
-                 Is: zv,
+             super(TT, kT), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             const fT = tT.o[TT];
+             this.gunType = fT.gunType, this.scopeType = fT.scopeType, this.fireRate = fT.fireRate, this.fireRateWithHeldTouch = fT.fireRateWithHeldTouch, this.equipDelay = fT.equipDelay, this.damage = fT.damage, this.shotPelletCount = fT.shotPelletCount, this.msPerRound = fT.msPe … [truncated]
+             const xT = (0, WT.e)({
+                 name: `${TT}BulletMeshMaterial`,
+                 et: kT,
```

#### 951. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7115-L7117` → after: `L7238-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7238-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7238-L7240) · [Before (L7115-L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7115-L7117)

```diff
-                 Ma: lv
-               } = (0, dz.g)();
-             this.bulletCasingMesh = (0, zz.r)(lv, `${this.name}BulletCasingMesh`, (0, pz.b)({
+                 gv: IT
+               } = (0, fk.f)();
+             this.bulletCasingMesh = (0, kk.q)(IT, `${this.name}BulletCasingMesh`, (0, yk.b)({
```

#### 952. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7121-L7124` → after: `L7244-L7247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7244-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7244-L7247) · [Before (L7121-L7124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7121-L7124)

```diff
-             })), this.bulletCasingMesh.material = Nv, this.bulletCasingMesh.Zs = !1;
-             const Tv = (0, ov.c)({
-               name: `${vv}BulletHitBillboard`,
-               Is: zv,
+             })), this.bulletCasingMesh.material = xT, this.bulletCasingMesh.Vt = !1;
+             const AT = (0, WT.e)({
+               name: `${TT}BulletHitBillboard`,
+               et: kT,
```

#### 953. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7131` → after: `L7254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7254) · [Before (L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7131)

```diff
-             this.bulletHitBillboardPlane = (0, zz.r)(lv, `${this.name}BulletHitBillboardPlane`, (0, pz.g)({
+             this.bulletHitBillboardPlane = (0, kk.q)(IT, `${this.name}BulletHitBillboardPlane`, (0, yk.f)({
```

#### 954. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7134-L7137` → after: `L7257-L7260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7257-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7257-L7260) · [Before (L7134-L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7134-L7137)

```diff
-             })), this.bulletHitBillboardPlane.Zs = !1, this.bulletHitBillboardPlane.material = Tv;
-             const Wv = (0, ov.c)({
-               name: `${vv}BulletMeshMaterial`,
-               Is: zv,
+             })), this.bulletHitBillboardPlane.Vt = !1, this.bulletHitBillboardPlane.material = AT;
+             const CT = (0, WT.e)({
+               name: `${TT}BulletMeshMaterial`,
+               et: kT,
```

#### 955. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7146` → after: `L7269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7269) · [Before (L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7146)

```diff
-             this.movingBulletMesh = (0, zz.r)(lv, `${this.name}MovingBulletMesh`, (0, pz.b)({
+             this.movingBulletMesh = (0, kk.q)(IT, `${this.name}MovingBulletMesh`, (0, yk.b)({
```

#### 956. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7150` → after: `L7273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7273) · [Before (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7150)

```diff
-             })), this.movingBulletMesh.material = Wv, this.movingBulletMesh.Zs = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = CT, this.movingBulletMesh.Vt = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 957. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7169` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7292) · [Before (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7169)

```diff
-             super(vv, zv), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = sv.r[vv].harvests, this.multiplier = sv.r[vv].multiplier, this.level = sv.r[vv].level
+             super(TT, kT), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = tT.o[TT].harvests, this.multiplier = tT.o[TT].multiplier, this.level = tT.o[TT].level
```

#### 958. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7176-L7177` → after: `L7299-L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7299-L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7299-L7300) · [Before (L7176-L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7176-L7177)

```diff
-             super(vv, zv), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (Pv = (0, iv.g)(vv)) && void 0 !== Pv ? Pv : [255, 255, 255];
-             const hv = `Wood ${(0,wv.yb)(vv)}`;
+             super(TT, kT), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (cT = (0, NT.f)(TT)) && void 0 !== cT ? cT : [255, 255, 255];
+             const lT = `Wood ${(0,jT.sb)(TT)}`;
```

#### 959. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7179-L7180` → after: `L7302-L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7302-L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7302-L7303) · [Before (L7179-L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7179-L7180)

```diff
-               type: Qv.g.HTTP,
-               url: this.isCustom ? `${Zv.clientSideServerUrls.staticUrl}/models/${(0,wv.Pb)((0,Nz.c)().gameNameWithVariation)}/${hv}.glb` : `${Zv.clientSideServerUrls.staticUrl}/models/${hv}.glb`
+               type: ZT.j.HTTP,
+               url: this.isCustom ? `${uT.clientSideServerUrls.staticUrl}/models/${(0,jT.Lb)((0,xk.b)().gameNameWithVariation)}/${lT}.glb` : `${uT.clientSideServerUrls.staticUrl}/models/${lT}.glb`
```

#### 960. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7186` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7309) · [Before (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7186)

```diff
-               Is: zv
+               et: kT
```

#### 961. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7190-L7191` → after: `L7313-L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7313-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7313-L7314) · [Before (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7190-L7191)

```diff
-             } = jv.c;
-             return (0, ov.c)({
+             } = aT.b;
+             return (0, WT.e)({
```

#### 962. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7193` → after: `L7316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7316) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7193)

```diff
-               Is: zv,
+               et: kT,
```

#### 963. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7197` → after: `L7320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7320) · [Before (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7197)

```diff
-                   url: sz[(0, wv.yb)(vv)],
+                   url: tk[(0, jT.sb)(TT)],
```

#### 964. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7211` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7334) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7211)

```diff
-                 (0, Sz.q)(vv, yv.b, {
+                 (0, Mk.t)(TT, gT.b, {
```

#### 965. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7218` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7341) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7218)

```diff
-             super._registerSourceMeshBuffers(vv), vv.hV("aArmourTint", 4), vv.hV("aAtlasIdx1", 1), vv.lV.aArmourTint = (0, Ov.n)(...this._armourTint, 0), vv.lV.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(TT), TT.lH("aArmourTint", 4), TT.lH("aAtlasIdx1", 1), TT.xH.aArmourTint = (0, mT.l)(...this._armourTint, 0), TT.xH.aAtlasIdx1 = 0
```

#### 966. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7229` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7352) · [Before (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7229)

```diff
-             const hv = (0, dz.g)().Ma.hK,
+             const lT = (0, fk.f)().gv.PJ,
```

#### 967. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7250` → after: `L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7373) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7250)

```diff
-       if (vv in hv.g) {
+       if (TT in lT.i) {
```

#### 968. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7252-L7253` → after: `L7375-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7375-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7375-L7376) · [Before (L7252-L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7252-L7253)

```diff
-         const Sv = null === (gv = hv.g[vv].model) || void 0 === gv ? void 0 : gv.split("|")[0];
-         ev = hv.g[vv].model || hv.g[vv].twoDBlockItem ? eP[Sv] ? new eP[Sv](vv, Pv) : new Xz(vv, Pv) : new bz(vv, Pv), hP[vv] = ev, hP[zv] = ev
+         const MT = null === (OT = lT.i[TT].model) || void 0 === OT ? void 0 : OT.split("|")[0];
+         KT = lT.i[TT].model || lT.i[TT].twoDBlockItem ? yc[MT] ? new yc[MT](TT, cT) : new Tc(TT, cT) : new ik(TT, cT), Kc[TT] = KT, Kc[kT] = KT
```

#### 969. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7258` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7381) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7258)

```diff
-   37672: (vv, zv, Pv) => {
+   37997: (TT, kT, cT) => {
```

#### 970. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7261-L7262` → after: `L7384-L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7384-L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7384-L7385) · [Before (L7261-L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7261-L7262)

```diff
-       i: () => dv,
-       j: () => iv
+       h: () => fT,
+       k: () => NT
```

#### 971. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7264-L7268` → after: `L7387-L7391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7387-L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7387-L7391) · [Before (L7264-L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7264-L7268)

```diff
-     var hv = Pv(36591),
-       Sv = Pv(36918),
-       ev = Pv(37428),
-       gv = Pv(37086),
-       pv = Pv(36738);
+     var lT = cT(36885),
+       MT = cT(37275),
+       KT = cT(37754),
+       OT = cT(37442),
+       yT = cT(37074);
```

#### 972. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7271` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7394) · [Before (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7271)

```diff
-         this.modelUrl = vv, this.container = zv, this.adoptedNodes = Pv, this.Is = hv
+         this.modelUrl = TT, this.container = kT, this.adoptedNodes = cT, this.et = lT
```

#### 973. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7276` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7399) · [Before (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7276)

```diff
-         if (!Sv) throw new Error(`Could not find root node in model: ${hv}`);
+         if (!MT) throw new Error(`Could not find root node in model: ${lT}`);
```

#### 974. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7278` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7401) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7278)

```diff
-         Sv.pp.set(-Sv.pp.x, Sv.pp.y, Sv.pp.z), Tv(Sv, ev);
+         MT.GA.set(-MT.GA.x, MT.GA.y, MT.GA.z), AT(MT, KT);
```

#### 975. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7288` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7411) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7288)

```diff
-         return ev.pp.set(-ev.pp.x, ev.pp.y, ev.pp.z), {
+         return KT.GA.set(-KT.GA.x, KT.GA.y, KT.GA.z), {
```

#### 976. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7299` → after: `L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7422) · [Before (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7299)

```diff
-         if (0 === hv.length) return void console.warn(`Mesh "${Pv}" not found in model: ${this.modelUrl}`);
+         if (0 === lT.length) return void console.warn(`Mesh "${cT}" not found in model: ${this.modelUrl}`);
```

#### 977. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7301` → after: `L7424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7424) · [Before (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7301)

```diff
-         if (!Sv) throw new Error(`Could not merge the meshes named ${Pv} in model: ${this.modelUrl}`);
+         if (!MT) throw new Error(`Could not merge the meshes named ${cT} in model: ${this.modelUrl}`);
```

#### 978. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7315` → after: `L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7438) · [Before (L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7315)

```diff
-             const vv = Wv(Pv, ev, this.Is),
+             const TT = CT(cT, KT, this.et),
```

#### 979. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7320` → after: `L7443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7443) · [Before (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7320)

```diff
-         else console.warn(`Node "${Pv}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${cT}" not found in model: ${this.modelUrl}`)
```

#### 980. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7330` → after: `L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7453) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7330)

```diff
-             const vv = "string" === typeof pv ? pv : pv.nodeName;
+             const TT = "string" === typeof yT ? yT : yT.nodeName;
```

#### 981. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7336` → after: `L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7459) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7336)

```diff
-         if (0 === Nv.length) return void console.warn(`No descendant meshes under "${hv}" to merge in model: ${this.modelUrl}`);
+         if (0 === xT.length) return void console.warn(`No descendant meshes under "${lT}" to merge in model: ${this.modelUrl}`);
```

#### 982. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7350` → after: `L7473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7473) · [Before (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7350)

```diff
-         if (!sv) return void console.warn(`Merge failed for "${hv}" in model: ${this.modelUrl}`);
+         if (!tT) return void console.warn(`Merge failed for "${lT}" in model: ${this.modelUrl}`);
```

#### 983. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7356-L7357` → after: `L7479-L7480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7479-L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7479-L7480) · [Before (L7356-L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7356-L7357)

```diff
-           of Wv) null === wv || wv.mzv() || (wv.computeWorldMatrix(!0), av(pv, wv), lv(pv, Cv.multiply(wv.getWorldMatrix().clone().invert())));
-         sv.name = Sv, (0, pv.y)(sv, (() => {
+           of CT) null === jT || jT.VkT() || (jT.computeWorldMatrix(!0), vT(yT, jT), IT(yT, hT.multiply(jT.getWorldMatrix().clone().invert())));
+         tT.name = MT, (0, yT.t)(tT, (() => {
```

#### 984. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7366` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7489) · [Before (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7366)

```diff
-         return null !== (zv = null !== (Pv = this.container.transformNodes.find((zv => zv.name === vv))) && void 0 !== Pv ? Pv : this.container.meshes.find((zv => zv.name === vv))) && void 0 !== zv ? zv : null
+         return null !== (kT = null !== (cT = this.container.transformNodes.find((kT => kT.name === TT))) && void 0 !== cT ? cT : this.container.meshes.find((kT => kT.name === TT))) && void 0 !== kT ? kT : null
```

#### 985. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7375` → after: `L7498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7498) · [Before (L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7375)

```diff
-         for (const zv of [...vv]) zv.mzv() || this.adoptedNodes.has(zv) || zv.dispose()
+         for (const kT of [...TT]) kT.VkT() || this.adoptedNodes.has(kT) || kT.dispose()
```

#### 986. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7384` → after: `L7507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7507) · [Before (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7384)

```diff
-       const Pv = new hv.fa,
+       const cT = new lT.Fv,
```

#### 987. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7386-L7387` → after: `L7509-L7510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7509-L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7509-L7510) · [Before (L7386-L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7386-L7387)

```diff
-         ev = new hv.fa;
-       zv.decompose(ev, Sv, Pv), vv.position = Pv, vv.rotationQuaternion = Sv, vv.pp = ev
+         KT = new lT.Fv;
+       kT.decompose(KT, MT, cT), TT.position = cT, TT.rotationQuaternion = MT, TT.GA = KT
```

#### 988. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7392` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7515) · [Before (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7392)

```diff
-       zv.position = vv.position.clone(), Pv ? zv.rotationQuaternion = new hv.Quaternion(Pv.x, Pv.y, Pv.z, Pv.w) : zv.rotation = vv.rotation.clone(), zv.pp = vv.pp.clone()
+       kT.position = TT.position.clone(), cT ? kT.rotationQuaternion = new lT.Quaternion(cT.x, cT.y, cT.z, cT.w) : kT.rotation = TT.rotation.clone(), kT.GA = TT.GA.clone()
```

#### 989. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7396` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7519) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7396)

```diff
-       return (0, Sv.f)(zv) ? (0, ev.s)(zv.Ma, vv) : new((0, gv.c)().TransformNode)(vv, Pv)
+       return (0, MT.f)(kT) ? (0, KT.u)(kT.gv, TT) : new((0, OT.e)().TransformNode)(TT, cT)
```

#### 990. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7400` → after: `L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7523) · [Before (L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7400)

```diff
-       return (0, Sv.f)(vv[0]) ? (0, ev.n)(vv, !1) : (0, pv.A)(vv)
+       return (0, MT.f)(TT[0]) ? (0, KT.o)(TT, !1) : (0, yT.u)(TT)
```

#### 991. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7408` → after: `L7531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7531) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7408)

```diff
-       return ["Mesh", "LiteMesh"].includes(vv.getClassName()) && vv.getTotalVertices() > 0 ? vv : null
+       return ["Mesh", "LiteMesh"].includes(TT.getClassName()) && TT.getTotalVertices() > 0 ? TT : null
```

#### 992. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7428` → after: `L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7551) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7428)

```diff
-   37441: (vv, zv, Pv) => {
+   37767: (TT, kT, cT) => {
```

#### 993. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7435` → after: `L7556-L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7556-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7556-L7557) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7435)

```diff
-       o: () => Ov,
+       l: () => eT,
+       n: () => uT,
```

#### 994. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7438-L7439` → after: `L7560-L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7560-L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7560-L7562) · [Before (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7438-L7439)

```diff
-       s: () => Uv,
-       w: () => Yv
+       u: () => ET,
+       x: () => oT,
+       y: () => PT
```

#### 995. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7441-L7447` → after: `L7564-L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7564-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7564-L7570) · [Before (L7441-L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7441-L7447)

```diff
-     var hv = Pv(4019),
-       Sv = Pv(9101),
-       ev = Pv(185),
-       gv = Pv(1226),
-       pv = Pv(1855),
-       dv = Pv(2934),
-       Nv = Pv(327),
+     var lT = cT(4235),
+       MT = cT(9447),
+       KT = cT(218),
+       OT = cT(1244),
+       yT = cT(1915),
+       fT = cT(3081),
+       xT = cT(350),
```

#### 996. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7449-L7454` → after: `L7572-L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7572-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7572-L7577) · [Before (L7449-L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7449-L7454)

```diff
-       Tv = Pv(2599),
-       Wv = Pv(37397),
-       wv = Pv(36705),
-       av = Pv(36591),
-       sv = Pv(626),
-       Cv = Pv(37445);
+       AT = cT(2790),
+       CT = cT(37725),
+       jT = cT(37041),
+       vT = cT(36885),
+       tT = cT(617),
+       hT = cT(37771);
```

#### 997. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7458` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7581) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7458)

```diff
-       mv = (0, dv.e)("square_particle"),
+       DT = (0, fT.f)("square_particle"),
```

#### 998. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7462-L7464` → after: `L7585-L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7585-L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7585-L7587) · [Before (L7462-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7462-L7464)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.vW = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.vW = vv;
-         const zv = vv.Ma.vV("breakingParticles", 430);
-         this.pSystem = zv, zv.texture = (0, wv.r)(vv.Ma.rD(), mv), zv.blendMode = hv.f.Standard, this.pSystem.addColorGradient(1, (0, Wv.n)(255, 255, 255, jv), (0, Wv.n)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, jv, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.cC = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.cC = TT;
+         const kT = TT.gv.iJ("breakingParticles", 430);
+         this.pSystem = kT, kT.texture = (0, jT.s)(TT.gv.NJ(), DT), kT.blendMode = lT.f.Standard, this.pSystem.addColorGradient(1, (0, CT.l)(255, 255, 255, aT), (0, CT.l)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, aT, 1), this.pSy … [truncated]
```

#### 999. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7467-L7468` → after: `L7590-L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7590-L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7590-L7591) · [Before (L7467-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7467-L7468)

```diff
-         if (!vv || null === this.vW.J9) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const zv = this.vW.J9,
+         if (!TT || null === this.cC.p_) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const kT = this.cC.p_,
```

#### 1000. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7472-L7473` → after: `L7595-L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7595-L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7595-L7596) · [Before (L7472-L7473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7472-L7473)

```diff
-           } = (0, Cv.b)(zv.position, Sv.g[zv.oB].SC, 0, this.boxWidth);
-         (0, Wv.v)(this.pSystem, Pv, hv), this.updateParticleSystemColour();
+           } = (0, hT.d)(kT.position, MT.i[kT.JB].kh, 0, this.boxWidth);
+         (0, CT.q)(this.pSystem, cT, lT), this.updateParticleSystemColour();
```

#### 1001. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7476` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7599) · [Before (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7476)

```diff
-         ev.x = this.vW.J9.normal[0] + 1, ev.y = this.vW.J9.normal[1] + 1, ev.z = this.vW.J9.normal[2] + 1, gv.x = this.vW.J9.normal[0] - 1, gv.y = this.vW.J9.normal[1] - 1, gv.z = this.vW.J9.normal[2] - 1, 0 !== this.vW.J9.normal[0] ? (ev.x = this.vW.J9.normal[0], gv.x = this.vW. … [truncated]
+         KT.x = this.cC.p_.normal[0] + 1, KT.y = this.cC.p_.normal[1] + 1, KT.z = this.cC.p_.normal[2] + 1, OT.x = this.cC.p_.normal[0] - 1, OT.y = this.cC.p_.normal[1] - 1, OT.z = this.cC.p_.normal[2] - 1, 0 !== this.cC.p_.normal[0] ? (KT.x = this.cC.p_.normal[0], OT.x = this.cC. … [truncated]
```

#### 1002. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7479` → after: `L7602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7602) · [Before (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7479)

```diff
-         const vv = this.vW.nG(this.vW.J9.position);
+         const TT = this.cC.Tm(this.cC.p_.position);
```

#### 1003. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7481` → after: `L7604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7604) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7481)

```diff
-         const zv = fv.getUniqueColoursForParticleSystem(this.vW.J9.position);
+         const kT = FT.getUniqueColoursForParticleSystem(this.cC.p_.position);
```

#### 1004. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7491` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7614) · [Before (L7491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7491)

```diff
-         vv.addRampGradient(0, (0, Wv.g)(hv));
+         TT.addRampGradient(0, (0, CT.f)(lT));
```

#### 1005. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7495` → after: `L7618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7618) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7495)

```diff
-           vv.addRampGradient(ev / zv.length - 1e-4, (0, Wv.g)(Pv)), vv.addRampGradient(ev / zv.length, (0, Wv.g)(hv))
+           TT.addRampGradient(KT / kT.length - 1e-4, (0, CT.f)(cT)), TT.addRampGradient(KT / kT.length, (0, CT.f)(lT))
```

#### 1006. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7498` → after: `L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7621) · [Before (L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7498)

```diff
-         vv.addRampGradient(1, (0, Wv.g)(Sv))
+         TT.addRampGradient(1, (0, CT.f)(MT))
```

#### 1007. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7501-L7503` → after: `L7624-L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7624-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7624-L7626) · [Before (L7501-L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7501-L7503)

```diff
-         const zv = (0, Tv.g)().nG(vv);
-         if (0 !== zv) return dv.b.getAverageColours((0, Tv.d)().getMetaInfo(zv).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(vv)}`).stack)
+         const kT = (0, AT.f)().Tm(TT);
+         if (0 !== kT) return fT.e.getAverageColours((0, AT.c)().getMetaInfo(kT).rootName);
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(TT)}`).stack)
```

#### 1008. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7506` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7629) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7506)

```diff
-     const Fv = (0, dv.e)("generic_2");
+     const rT = (0, fT.f)("generic_2");
```

#### 1009. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7508` → after: `L7631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7631) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7508)

```diff
-     const nv = (0, dv.e)("critical_hit");
+     const wT = (0, fT.f)("critical_hit");
```

#### 1010. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7512-L7517` → after: `L7635-L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7635-L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7635-L7640) · [Before (L7512-L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7512-L7517)

```diff
-       const zv = vv.Ma.vV("sprintParticles", 50);
-       zv.texture = (0, wv.r)(vv.Ma.rD(), Fv), zv.blendMode = hv.f.Standard, zv.addColorGradient(0, (0, Wv.n)(213, 237, 255, 1), (0, Wv.n)(109, 170, 238, 1)), zv.addColorGradient(.2, (0, Wv.n)(213, 237, 255, 1), (0, Wv.n)(109, 170, 238, 1)), zv.addColorGradient(1, (0, Wv.n)(213, 2 … [truncated]
-       zv.minLifeTime = .2, zv.maxLifeTime = .4, zv.minEmitPower = 30, zv.maxEmitPower = 50, zv.emitRate = 5, zv.gravity = new av.fa(0, -100, 0), zv.minSize = .15, zv.maxSize = .3, zv.addVelocityGradient(0, .075, .15), zv.addVelocityGradient(1, .075, .15), (0, Wv.y)(vv, zv), zv.cr … [truncated]
-       const Pv = vv.Ma.vV("Dv", 50);
-       Pv.texture = (0, wv.r)(vv.Ma.rD(), nv), Pv.blendMode = hv.f.Standard, Pv.addColorGradient(0, (0, Wv.n)(255, 167, 0, 1), (0, Wv.n)(255, 103, 0, 1)), Pv.addColorGradient(.2, (0, Wv.n)(255, 167, 0, 1), (0, Wv.n)(255, 103, 0, 1)), Pv.addColorGradient(1, (0, Wv.n)(255, 167, 0, 0 … [truncated]
-       Pv.minLifeTime = .15, Pv.maxLifeTime = .3, Pv.minEmitPower = 30, Pv.maxEmitPower = 50, Pv.emitRate = 5, Pv.gravity = new av.fa(0, -100, 0), Pv.minSize = .15, Pv.maxSize = .3, Pv.addVelocityGradient(0, .075, .15), Pv.addVelocityGradient(1, .075, .15), (0, Wv.y)(vv, Pv), Pv.c … [truncated]
+       const kT = TT.gv.iJ("sprintParticles", 50);
+       kT.texture = (0, jT.s)(TT.gv.NJ(), rT), kT.blendMode = lT.f.Standard, kT.addColorGradient(0, (0, CT.l)(213, 237, 255, 1), (0, CT.l)(109, 170, 238, 1)), kT.addColorGradient(.2, (0, CT.l)(213, 237, 255, 1), (0, CT.l)(109, 170, 238, 1)), kT.addColorGradient(1, (0, CT.l)(213, 2 … [truncated]
+       kT.minLifeTime = .2, kT.maxLifeTime = .4, kT.minEmitPower = 30, kT.maxEmitPower = 50, kT.emitRate = 5, kT.gravity = new vT.Fv(0, -100, 0), kT.minSize = .15, kT.maxSize = .3, kT.addVelocityGradient(0, .075, .15), kT.addVelocityGradient(1, .075, .15), (0, CT.t)(TT, kT), kT.cr … [truncated]
+       const cT = TT.gv.iJ("mT", 50);
+       cT.texture = (0, jT.s)(TT.gv.NJ(), wT), cT.blendMode = lT.f.Standard, cT.addColorGradient(0, (0, CT.l)(255, 167, 0, 1), (0, CT.l)(255, 103, 0, 1)), cT.addColorGradient(.2, (0, CT.l)(255, 167, 0, 1), (0, CT.l)(255, 103, 0, 1)), cT.addColorGradient(1, (0, CT.l)(255, 167, 0, 0 … [truncated]
+       cT.minLifeTime = .15, cT.maxLifeTime = .3, cT.minEmitPower = 30, cT.maxEmitPower = 50, cT.emitRate = 5, cT.gravity = new vT.Fv(0, -100, 0), cT.minSize = .15, cT.maxSize = .3, cT.addVelocityGradient(0, .075, .15), cT.addVelocityGradient(1, .075, .15), (0, CT.t)(TT, cT), cT.c … [truncated]
```

#### 1011. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7618` → after: `L7741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7741) · [Before (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7618)

```diff
-         this.pSystem = vv, this.maxLifetimeSecs = zv, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.ea = !1, vv.manualEmitCount = 0
+         this.pSystem = TT, this.maxLifetimeSecs = kT, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.yv = !1, TT.manualEmitCount = 0
```

#### 1012. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7621` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7744) · [Before (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7621)

```diff
-         this.ea || (this.pSystem.manualEmitCount = vv, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.yv || (this.pSystem.manualEmitCount = TT, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 1013. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7624` → after: `L7747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7747) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7624)

```diff
-         this.ea = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.yv = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 1014. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7636` → after: `L7759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7759) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7636)

```diff
-       (0, Wv.y)(vv, zv.pSystem), (0, Wv.w)(zv.pSystem, Pv), zv.emitAmount(hv)
+       (0, CT.t)(TT, kT.pSystem), (0, CT.s)(kT.pSystem, cT), kT.emitAmount(lT)
```

#### 1015. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7638` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7761) · [Before (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7638)

```diff
-     const tv = (0, Sv.i)("Fat Brown Mushroom");
+     const GT = (0, MT.l)("Fat Brown Mushroom");
```

#### 1016. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7642` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7765) · [Before (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7642)

```diff
-       Iv(vv, zv === tv ? gv.f.BounceBrownMushroom : gv.f.BounceRedMushroom, Pv)
+       ET(TT, kT === GT ? OT.e.BounceBrownMushroom : OT.e.BounceRedMushroom, cT)
```

#### 1017. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7646` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7769) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7646)

```diff
-       const hv = zv === gv.f.Bunnyhop || zv === gv.f.JumpPad;
+       const lT = kT === OT.e.Bunnyhop || kT === OT.e.JumpPad;
```

#### 1018. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7648-L7649` → after: `L7771-L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7771-L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7771-L7772) · [Before (L7648-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7648-L7649)

```diff
-       zv === gv.f.Bunnyhop ? (Sv = [213, 237, 255], pv = [109, 170, 238]) : zv === gv.f.BounceRedMushroom ? (Sv = [196, 63, 63], pv = [148, 53, 53]) : zv === gv.f.BounceBrownMushroom ? (Sv = [186, 132, 91], pv = [153, 107, 72]) : zv === gv.f.BunnyhopBounce ? (Sv = [217, 170, 2],  … [truncated]
-       const dv = vv.Rm.yG(vv.sV);
+       kT === OT.e.Bunnyhop ? (MT = [213, 237, 255], yT = [109, 170, 238]) : kT === OT.e.BounceRedMushroom ? (MT = [196, 63, 63], yT = [148, 53, 53]) : kT === OT.e.BounceBrownMushroom ? (MT = [186, 132, 91], yT = [153, 107, 72]) : kT === OT.e.BunnyhopBounce ? (MT = [217, 170, 2],  … [truncated]
+       const fT = TT.oN.kN(TT.jH);
```

#### 1019. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7652` → after: `L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7775) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7652)

```diff
-         const vv = 1 === Pv[1] ? ev.f.lG - .4 : 0;
+         const TT = 1 === cT[1] ? KT.f.Iw - .4 : 0;
```

#### 1020. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7660` → after: `L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7783) · [Before (L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7660)

```diff
-       const Tv = hv ? Kv : Vv;
+       const AT = lT ? zT : JT;
```

#### 1021. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7681` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7804) · [Before (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7681)

```diff
-         this.vW = vv, this.cfg = Pv, this.pool = [], this.currentIndex = 0;
+         this.cC = TT, this.cfg = cT, this.pool = [], this.currentIndex = 0;
```

#### 1022. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7692` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7815) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7692)

```diff
-         const av = this.vW.camera.yG();
+         const vT = this.cC.camera.kN();
```

#### 1023. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7694` → after: `L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7817) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7694)

```diff
-         const sv = null !== (Pv = zv.hideDist) && void 0 !== Pv ? Pv : this.cfg.hideDist;
+         const tT = null !== (cT = kT.hideDist) && void 0 !== cT ? cT : this.cfg.hideDist;
```

#### 1024. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7699` → after: `L7822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7822) · [Before (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7699)

```diff
-         (0, Wv.v)(mv, cv, Gv), mv.minEmitPower = null !== (hv = zv.minEmitPower) && void 0 !== hv ? hv : mv.minEmitPower, mv.maxEmitPower = null !== (Sv = zv.maxEmitPower) && void 0 !== Sv ? Sv : mv.maxEmitPower, mv.minSize = null !== (ev = zv.minSize) && void 0 !== ev ? ev : mv. … [truncated]
+         (0, CT.q)(DT, QT, ST), DT.minEmitPower = null !== (lT = kT.minEmitPower) && void 0 !== lT ? lT : DT.minEmitPower, DT.maxEmitPower = null !== (MT = kT.maxEmitPower) && void 0 !== MT ? MT : DT.maxEmitPower, DT.minSize = null !== (KT = kT.minSize) && void 0 !== KT ? KT : DT. … [truncated]
```

#### 1025. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7703-L7705` → after: `L7826-L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7826-L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7826-L7828) · [Before (L7703-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7703-L7705)

```diff
-           Pv = this.vW.Ma.vV(`particlePool_${vv}`, 50),
-           hv = zv.texture.includes("/") ? zv.texture : (0, dv.e)(zv.texture);
-         Pv.texture = (0, wv.r)(this.vW.Ma.rD(), hv), Pv.blendMode = zv.blendMode, Pv.minLifeTime = zv.minLifeTime, Pv.maxLifeTime = zv.maxLifeTime, Pv.minEmitPower = zv.minEmitPower, Pv.maxEmitPower = zv.maxEmitPower, Pv.minSize = zv.minSize, Pv.maxSize = zv.maxSize, Pv.gravity = … [truncated]
+           cT = this.cC.gv.iJ(`particlePool_${TT}`, 50),
+           lT = kT.texture.includes("/") ? kT.texture : (0, fT.f)(kT.texture);
+         cT.texture = (0, jT.s)(this.cC.gv.NJ(), lT), cT.blendMode = kT.blendMode, cT.minLifeTime = kT.minLifeTime, cT.maxLifeTime = kT.maxLifeTime, cT.minEmitPower = kT.minEmitPower, cT.maxEmitPower = kT.maxEmitPower, cT.minSize = kT.minSize, cT.maxSize = kT.maxSize, cT.gravity = … [truncated]
```

#### 1026. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7707` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7830) · [Before (L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7707)

```diff
-         this.applyColorGradients(Pv, zv.colorGradients), (0, Wv.y)(this.vW, Pv), Pv.createBoxEmitter(new av.fa(Math.min(zv.dir1[0], zv.dir2[0]), Math.min(zv.dir1[1], zv.dir2[1]), Math.min(zv.dir1[2], zv.dir2[2])), new av.fa(Math.max(zv.dir1[0], zv.dir2[0]), Math.max(zv.dir1[1], z … [truncated]
+         this.applyColorGradients(cT, kT.colorGradients), (0, CT.t)(this.cC, cT), cT.createBoxEmitter(new vT.Fv(Math.min(kT.dir1[0], kT.dir2[0]), Math.min(kT.dir1[1], kT.dir2[1]), Math.min(kT.dir1[2], kT.dir2[2])), new vT.Fv(Math.max(kT.dir1[0], kT.dir2[0]), Math.max(kT.dir1[1], k … [truncated]
```

#### 1027. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7717` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7840) · [Before (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7717)

```diff
-             const zv = (0, Wv.n)(ev.color[0], ev.color[1], ev.color[2], 1);
+             const kT = (0, CT.l)(KT.color[0], KT.color[1], KT.color[2], 1);
```

#### 1028. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7721-L7722` → after: `L7844-L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7844-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7844-L7845) · [Before (L7721-L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7721-L7722)

```diff
-             const zv = (0, Wv.n)(ev.minColor[0], ev.minColor[1], ev.minColor[2], null !== (hv = ev.minColor[3]) && void 0 !== hv ? hv : 1),
-               Pv = (0, Wv.n)(ev.maxColor[0], ev.maxColor[1], ev.maxColor[2], null !== (Sv = ev.maxColor[3]) && void 0 !== Sv ? Sv : 1);
+             const kT = (0, CT.l)(KT.minColor[0], KT.minColor[1], KT.minColor[2], null !== (lT = KT.minColor[3]) && void 0 !== lT ? lT : 1),
+               cT = (0, CT.l)(KT.maxColor[0], KT.maxColor[1], KT.maxColor[2], null !== (MT = KT.maxColor[3]) && void 0 !== MT ? MT : 1);
```

#### 1029. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7729` → after: `L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7852) · [Before (L7729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7729)

```diff
-       if (!(0, sv.N)(zv.hideDist)) {
+       if (!(0, tT.R)(kT.hideDist)) {
```

#### 1030. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7732` → after: `L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7855) · [Before (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7732)

```diff
-         const hv = vv.Rm.yG(vv.sV),
+         const lT = TT.oN.kN(TT.jH),
```

#### 1031. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7739` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7862) · [Before (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7739)

```diff
-   37312: (vv, zv, Pv) => {
+   37658: (TT, kT, cT) => {
```

#### 1032. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7741` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7864) · [Before (L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7741)

```diff
-       b: () => iv
+       c: () => NT
```

#### 1033. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7743-L7755` → after: `L7866-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7866-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7866-L7878) · [Before (L7743-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7743-L7755)

```diff
-     var hv = Pv(36685),
-       Sv = Pv(37334),
-       ev = Pv(37375),
-       gv = Pv(36895),
-       pv = Pv(37349),
-       dv = Pv(37384),
-       Nv = Pv(2934),
-       lv = Pv(37326),
-       Tv = Pv(37319),
-       Wv = Pv(36659),
-       wv = Pv(36764),
-       av = Pv(36775),
-       sv = Pv(2599);
+     var lT = cT(37016),
+       MT = cT(37676),
+       KT = cT(37700),
+       OT = cT(37250),
+       yT = cT(37686),
+       fT = cT(37709),
+       xT = cT(3081),
+       IT = cT(37664),
+       AT = cT(37661),
+       CT = cT(36985),
+       jT = cT(37114),
+       vT = cT(37127),
+       tT = cT(2790);
```

#### 1034. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7766-L7767` → after: `L7889-L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7889-L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7889-L7890) · [Before (L7766-L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7766-L7767)

```diff
-           ambientLevel: Tv.c.ambient,
-           diffuseLevel: Tv.c.diffuse
+           ambientLevel: AT.b.ambient,
+           diffuseLevel: AT.b.diffuse
```

#### 1035. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7788` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7911) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7788)

```diff
-           alpha: lv.o
+           alpha: IT.m
```

#### 1036. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7805-L7807` → after: `L7928-L7930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7928-L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7928-L7930) · [Before (L7805-L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7805-L7807)

```diff
-         } = (0, wv.c)({
-           name: `${fv}${Tv}`,
-           Is: zv,
+         } = (0, jT.e)({
+           name: `${FT}${AT}`,
+           et: kT,
```

#### 1037. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7810-L7812` → after: `L7933-L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7933-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7933-L7935) · [Before (L7810-L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7810-L7812)

```diff
-         Cv && (0, hv.M)(Fv);
-         const nv = Nv.b.getBlockAtlasArr().map((vv => (0, Sv.f)(vv, zv, Pv)));
-         if ((0, wv.e)(Yv, {
+         hT && (0, lT.O)(rT);
+         const wT = xT.e.getBlockAtlasArr().map((TT => (0, MT.f)(TT, kT, cT)));
+         if ((0, jT.g)(PT, {
```

#### 1038. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7830` → after: `L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7953) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7830)

```diff
-           }), iv && (0, gv.d)(Fv, (0, sv.g)().Ma), cv && (0, Wv.e)(Fv, !0), nv.length > 0) {
+           }), NT && (0, OT.d)(rT, (0, tT.f)().gv), QT && (0, CT.d)(rT, !0), wT.length > 0) {
```

#### 1039. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7832-L7834` → after: `L7955-L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7955-L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7955-L7957) · [Before (L7832-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7832-L7834)

```diff
-             urls: Nv.b.getBlockAtlasArr(),
-             pixels: Nv.b.getBlockAtlasPixels(),
-             layerWidth: Nv.b.getBlockAtlasWidth()
+             urls: xT.e.getBlockAtlasArr(),
+             pixels: xT.e.getBlockAtlasPixels(),
+             layerWidth: xT.e.getBlockAtlasWidth()
```

#### 1040. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7836` → after: `L7959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7959) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7836)

```diff
-           (0, hv.q)(Fv, pv.g, (0, ev.e)(vv, nv, void 0, this.ra(), !1))
+           (0, lT.t)(rT, yT.g, (0, KT.e)(TT, wT, void 0, this.iv(), !1))
```

#### 1041. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7838` → after: `L7961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7961) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7838)

```diff
-         return (0, av.k)(Yv), vv[fv] = Yv, Yv
+         return (0, vT.q)(PT), TT[FT] = PT, PT
```

#### 1042. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7847` → after: `L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7970) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7847)

```diff
-     (0, dv.l)(Cv);
+     (0, fT.m)(hT);
```

#### 1043. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7850` → after: `L7973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7973) · [Before (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7850)

```diff
-   37617: (vv, zv, Pv) => {
+   37915: (TT, kT, cT) => {
```

#### 1044. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7853` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7976) · [Before (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7853)

```diff
-       i: () => yv
+       g: () => gT
```

#### 1045. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7855` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7978) · [Before (L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7855)

```diff
-     var hv = Pv(36851);
+     var lT = cT(37205);
```

#### 1046. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7876` → after: `L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R7999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L7999) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7876)

```diff
-     var gv = Pv(36633);
+     var OT = cT(36952);
```

#### 1047. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7904-L7905` → after: `L8027-L8028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8027-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8027-L8028) · [Before (L7904-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7904-L7905)

```diff
-             hv = Number.isNaN(hv) ? vv : hv, zv += this.childWeights[Sv], Pv += this.childWeights[Sv] * vv
-           } return zv > 0 ? Pv / zv : Number.isNaN(hv) ? 0 : hv
+             lT = Number.isNaN(lT) ? TT : lT, kT += this.childWeights[MT], cT += this.childWeights[MT] * TT
+           } return kT > 0 ? cT / kT : Number.isNaN(lT) ? 0 : lT
```

#### 1048. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7917` → after: `L8040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8040) · [Before (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7917)

```diff
-         hv = Pv > 0 ? hv / Pv : 1 / Sv;
+         lT = cT > 0 ? lT / cT : 1 / MT;
```

#### 1049. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7932` → after: `L8055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8055) · [Before (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7932)

```diff
-           const vv = this.gaitPhase + this.restGap() * (0, gv.o)(8 * Pv, zv);
+           const TT = this.gaitPhase + this.restGap() * (0, OT.i)(8 * cT, kT);
```

#### 1050. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7949` → after: `L8072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8072) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7949)

```diff
-         gv !== (null !== (hv = null === (Sv = this.current) || void 0 === Sv ? void 0 : Sv.state) && void 0 !== hv ? hv : null) && (this.current = null === gv ? null : this.enter(gv, ev)), this.updateWeights(zv, Pv)
+         OT !== (null !== (lT = null === (MT = this.current) || void 0 === MT ? void 0 : MT.state) && void 0 !== lT ? lT : null) && (this.current = null === OT ? null : this.enter(OT, KT)), this.updateWeights(kT, cT)
```

#### 1051. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7964` → after: `L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8087) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7964)

```diff
-           const vv = this.instances.reduce(((vv, zv) => zv !== hv && (vv === hv || zv.weight < vv.weight) ? zv : vv));
+           const TT = this.instances.reduce(((TT, kT) => kT !== lT && (TT === lT || kT.weight < TT.weight) ? kT : TT));
```

#### 1052. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7979` → after: `L8102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8102) · [Before (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7979)

```diff
-         for (const Tv of this.instances) Tv.weight = Tv === hv ? gv : Tv.weight * Nv, (Tv === hv || Tv.weight > pv) && (this.instances[lv++] = Tv);
+         for (const AT of this.instances) AT.weight = AT === lT ? OT : AT.weight * xT, (AT === lT || AT.weight > yT) && (this.instances[IT++] = AT);
```

#### 1053. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7986` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8109) · [Before (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7986)

```diff
-         this.inputs = new Float64Array(hv.h.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(lT.i.Count), this.states = [], this.sleptSeconds = 0
```

#### 1054. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L7989` → after: `L8112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8112) · [Before (L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L7989)

```diff
-         this.inputs.set(vv.subarray(0, hv.h.Count)), this.states.length = 0, this.states.push(...zv), this.sleptSeconds = 0
+         this.inputs.set(TT.subarray(0, lT.i.Count)), this.states.length = 0, this.states.push(...kT), this.sleptSeconds = 0
```

#### 1055. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8032-L8033` → after: `L8155-L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8155-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8155-L8156) · [Before (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8032-L8033)

```diff
-     var Cv = Pv(36803),
-       iv = Pv(36853);
+     var hT = cT(37167),
+       NT = cT(37211);
```

#### 1056. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8051` → after: `L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8174) · [Before (L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8051)

```diff
-         return null !== (zv = this.indexByLowerName.get(vv.toLowerCase())) && void 0 !== zv ? zv : -1
+         return null !== (kT = this.indexByLowerName.get(TT.toLowerCase())) && void 0 !== kT ? kT : -1
```

#### 1057. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8054-L8055` → after: `L8177-L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8177-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8177-L8178) · [Before (L8054-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8054-L8055)

```diff
-     var mv = Pv(36816),
-       jv = Pv(36823);
+     var DT = cT(37176),
+       aT = cT(37182);
```

#### 1058. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8060` → after: `L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8183) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8060)

```diff
-         this.name = vv, this.clip = zv, this.pool = Pv, this.mode = Sv, this.mask = ev, this.fadeInSeconds = gv, this.fadeOutSeconds = pv, this.speed = dv, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(hv.c.length), this.elapsed =  … [truncated]
+         this.name = TT, this.clip = kT, this.pool = cT, this.mode = MT, this.mask = KT, this.fadeInSeconds = OT, this.fadeOutSeconds = yT, this.speed = fT, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(lT.b.length), this.elapsed =  … [truncated]
```

#### 1059. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8068` → after: `L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8191) · [Before (L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8068)

```diff
-         return vv === jv.i.Once && (Pv > 0 ? this.elapsed >= hv : this.elapsed > hv)
+         return TT === aT.k.Once && (cT > 0 ? this.elapsed >= lT : this.elapsed > lT)
```

#### 1060. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8099` → after: `L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8222) · [Before (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8099)

```diff
-           Pv.elapsed < zv.startDelaySeconds || (Pv.weight = Pv.fadeInSeconds > 0 ? Math.min(1, Pv.weight + vv / Pv.fadeInSeconds) : 1, zv.loop === jv.i.Once && Pv.weight >= 1 && Pv.elapsed >= zv.startDelaySeconds + zv.lengthSeconds - Pv.fadeOutSeconds * Pv.speed && (Pv.stopping = … [truncated]
+           cT.elapsed < kT.startDelaySeconds || (cT.weight = cT.fadeInSeconds > 0 ? Math.min(1, cT.weight + TT / cT.fadeInSeconds) : 1, kT.loop === aT.k.Once && cT.weight >= 1 && cT.elapsed >= kT.startDelaySeconds + kT.lengthSeconds - cT.fadeOutSeconds * cT.speed && (cT.stopping = … [truncated]
```

#### 1061. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8111-L8112` → after: `L8234-L8235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8234-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8234-L8235) · [Before (L8111-L8112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8111-L8112)

```diff
-     var Yv = Pv(36839),
-       nv = Pv(36857);
+     var PT = cT(37194),
+       wT = cT(37217);
```

#### 1062. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8153` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8276) · [Before (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8153)

```diff
-             const Pv = hv && gv > 1 ? zv / gv : zv;
+             const cT = lT && OT > 1 ? kT / OT : kT;
```

#### 1063. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8171` → after: `L8294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8294) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8171)

```diff
-       return Number.isNaN(vv) ? Pv : Math.min(zv, Math.max(-zv, vv))
+       return Number.isNaN(TT) ? cT : Math.min(kT, Math.max(-kT, TT))
```

#### 1064. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8173` → after: `L8296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8296) · [Before (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8173)

```diff
-     var Rv = Pv(36831);
+     var HT = cT(37187);
```

#### 1065. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8180-L8181` → after: `L8303-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8303-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8303-L8304) · [Before (L8180-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8180-L8181)

```diff
-         this.pose = new Kv(Pv), this.accumulator = new Vv(Pv), this.inputs = new Float64Array(hv.h.Count + zv.filters.length), this.layers = zv.layers.map(((zv, Pv) => new Nv(zv, vv.layerMasks[Pv]))), this.runtimes = zv.pools.map((vv => ({
-           queries: new Float64Array(Rv.f.Count),
+         this.pose = new zT(cT), this.accumulator = new JT(cT), this.inputs = new Float64Array(lT.i.Count + kT.filters.length), this.layers = kT.layers.map(((kT, cT) => new xT(kT, TT.layerMasks[cT]))), this.runtimes = kT.pools.map((TT => ({
+           queries: new Float64Array(HT.d.Count),
```

#### 1066. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8185` → after: `L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8308) · [Before (L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8185)

```diff
-           return null !== (Pv = vv.variables.slots.get(zv.name)) && void 0 !== Pv ? Pv : -1
+           return null !== (cT = TT.variables.slots.get(kT.name)) && void 0 !== cT ? cT : -1
```

#### 1067. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8189` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8312) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8189)

```diff
-             const ev = hv.c.indexOf(zv.variables[Sv].input);
+             const KT = lT.b.indexOf(kT.variables[MT].input);
```

#### 1068. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8201` → after: `L8324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8324) · [Before (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8201)

```diff
-         this.inputs[vv] = Number.isFinite(zv) ? zv : 0
+         this.inputs[TT] = Number.isFinite(kT) ? kT : 0
```

#### 1069. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8219` → after: `L8342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8342) · [Before (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8219)

```diff
-         for (let zv = 0; zv < hv.c.length; zv++) vv.heldInputs[zv] = this.inputs[hv.c[zv]];
+         for (let kT = 0; kT < lT.b.length; kT++) TT.heldInputs[kT] = this.inputs[lT.b[kT]];
```

#### 1070. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8228` → after: `L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8351) · [Before (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8228)

```diff
-           pv = (0, Yv.h)(this.rigged.binding.pools, vv);
+           yT = (0, PT.k)(this.rigged.binding.pools, TT);
```

#### 1071. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8233` → after: `L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8356) · [Before (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8233)

```diff
-         } = pv, lv = Qv(Pv, 0, 1), Tv = (lv > 0 || 0 === gv ? dv.startDelaySeconds + lv * dv.lengthSeconds : 0) + Qv(Sv, 0, Iv) * gv, Wv = new fv(xv + dv.id, dv, Nv, mv.i.Add, null, ev, ev, gv, Tv);
+         } = yT, IT = ZT(cT, 0, 1), AT = (IT > 0 || 0 === OT ? fT.startDelaySeconds + IT * fT.lengthSeconds : 0) + ZT(MT, 0, ET) * OT, CT = new FT(eT + fT.id, fT, xT, DT.f.Add, null, KT, KT, OT, AT);
```

#### 1072. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8237` → after: `L8360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8360) · [Before (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8237)

```diff
-         const zv = (0, Yv.h)(this.rigged.binding.pools, vv);
+         const kT = (0, PT.k)(this.rigged.binding.pools, TT);
```

#### 1073. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8241` → after: `L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8364) · [Before (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8241)

```diff
-         const zv = (0, Yv.h)(this.rigged.binding.pools, vv);
+         const kT = (0, PT.k)(this.rigged.binding.pools, TT);
```

#### 1074. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8252` → after: `L8375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8375) · [Before (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8252)

```diff
-         const Pv = Math.max(0, Number.isFinite(vv) ? vv : 0);
+         const cT = Math.max(0, Number.isFinite(TT) ? TT : 0);
```

#### 1075. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8259` → after: `L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8382) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8259)

```diff
-         const ev = this.travelBacklog * (0, gv.o)(20, Pv);
+         const KT = this.travelBacklog * (0, OT.i)(20, cT);
```

#### 1076. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8267` → after: `L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8390) · [Before (L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8267)

```diff
-               for (let Pv = 0; Pv < vv.length; Pv++) zv[hv.h.Count + Pv] = (0, hv.j)(vv[Pv], zv)
+               for (let cT = 0; cT < TT.length; cT++) kT[lT.i.Count + cT] = (0, lT.j)(TT[cT], kT)
```

#### 1077. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8286` → after: `L8409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8409) · [Before (L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8286)

```diff
-               if (Math.abs(zv[hv.h.Count + Pv] - Sv) > 1e-6 * Math.max(1, Math.abs(Sv))) return !1
+               if (Math.abs(kT[lT.i.Count + cT] - MT) > 1e-6 * Math.max(1, Math.abs(MT))) return !1
```

#### 1078. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8300` → after: `L8423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8423) · [Before (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8300)

```diff
-             dv = hv.h.Count + Sv,
+             fT = lT.i.Count + MT,
```

#### 1079. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8303` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8426) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8303)

```diff
-           this.inputs[dv] = zv ? pv : Nv + (pv - Nv) * (0, gv.o)(lv, vv)
+           this.inputs[fT] = kT ? yT : xT + (yT - xT) * (0, OT.i)(IT, TT)
```

#### 1080. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8311` → after: `L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8434) · [Before (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8311)

```diff
-           (0, hv.m)(Sv, this.inputs, this.ageSeconds, vv, this.travelled);
+           (0, lT.n)(MT, this.inputs, this.ageSeconds, TT, this.travelled);
```

#### 1081. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8340` → after: `L8463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8463) · [Before (L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8340)

```diff
-         dv && this.accumulator.applyTo(this.pose, vv.weight, ev.mode === mv.i.Override), this.accumulator.clear()
+         fT && this.accumulator.applyTo(this.pose, TT.weight, KT.mode === DT.f.Override), this.accumulator.clear()
```

#### 1082. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8353` → after: `L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8476) · [Before (L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8353)

```diff
-           hv.strideBlocks > 0 ? wv = vv.gaitPhase * ev.lengthSeconds : (vv.elapsed[Nv] = Wv ? qv(ev, vv.elapsed[Nv], Pv * dv, lv) : vv.elapsed[Nv] + Pv * dv, wv = (0, nv.g)(ev, vv.elapsed[Nv])), vv.childTimes[Nv] = wv, Wv && !Number.isNaN(wv) && this.sampleClip(ev, lv, wv, Tv, zv … [truncated]
+           lT.strideBlocks > 0 ? jT = TT.gaitPhase * KT.lengthSeconds : (TT.elapsed[xT] = CT ? VT(KT, TT.elapsed[xT], cT * fT, IT) : TT.elapsed[xT] + cT * fT, jT = (0, wT.e)(KT, TT.elapsed[xT])), TT.childTimes[xT] = jT, CT && !Number.isNaN(jT) && this.sampleClip(KT, IT, jT, AT, kT … [truncated]
```

#### 1083. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8365` → after: `L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8488) · [Before (L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8365)

```diff
-               Sv = (0, nv.g)(hv.clip, hv.elapsed);
+               MT = (0, wT.e)(lT.clip, lT.elapsed);
```

#### 1084. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8373` → after: `L8496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8496) · [Before (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8373)

```diff
-           this.accumulator.applyTo(this.pose, 1, vv.mode === mv.i.Override, !0), this.accumulator.clear()
+           this.accumulator.applyTo(this.pose, 1, TT.mode === DT.f.Override, !0), this.accumulator.clear()
```

#### 1085. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8377-L8378` → after: `L8500-L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8500-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8500-L8501) · [Before (L8377-L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8377-L8378)

```diff
-         zv.queries[Rv.f.AnimTime] = Pv;
-         const ev = hv * Math.max(0, (0, nv.d)(vv.blendWeight, zv));
+         kT.queries[HT.d.AnimTime] = cT;
+         const KT = lT * Math.max(0, (0, wT.c)(TT.blendWeight, kT));
```

#### 1086. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8381` → after: `L8504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8504) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8381)

```diff
-           dv = vv.loop === jv.i.Loop,
+           fT = TT.loop === aT.k.Loop,
```

#### 1087. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8390` → after: `L8513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8513) · [Before (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8390)

```diff
-             (0, nv.h)(Tv.rotation, Pv, dv, zv, lv);
+             (0, wT.f)(AT.rotation, cT, fT, kT, IT);
```

#### 1088. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8394` → after: `L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8517) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8394)

```diff
-             (0, nv.h)(Tv.position, Pv, dv, zv, lv);
+             (0, wT.f)(AT.position, cT, fT, kT, IT);
```

#### 1089. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8398` → after: `L8521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8521) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8398)

```diff
-             (0, nv.h)(Tv.scale, Pv, dv, zv, lv);
+             (0, wT.f)(AT.scale, cT, fT, kT, IT);
```

#### 1090. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8409` → after: `L8532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8532) · [Before (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8409)

```diff
-         return Pv < 0 ? vv.constant : Pv < hv.h.Count ? zv[Pv] : this.inputs[Pv]
+         return cT < 0 ? TT.constant : cT < lT.i.Count ? kT[cT] : this.inputs[cT]
```

#### 1091. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8423` → after: `L8546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8546) · [Before (L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8423)

```diff
-           inputs: [...[...hv.e].map((vv => {
+           inputs: [...[...lT.f].map((TT => {
```

#### 1092. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8433` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8556) · [Before (L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8433)

```diff
-             value: this.inputs[hv.h.Count + zv]
+             value: this.inputs[lT.i.Count + kT]
```

#### 1093. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8463-L8464` → after: `L8586-L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8586-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8586-L8587) · [Before (L8463-L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8463-L8464)

```diff
-       const Sv = hv.queries[Rv.f.DeltaTime];
-       hv.queries[Rv.f.AnimTime] = zv, hv.queries[Rv.f.DeltaTime] = Pv;
+       const MT = lT.queries[HT.d.DeltaTime];
+       lT.queries[HT.d.AnimTime] = kT, lT.queries[HT.d.DeltaTime] = cT;
```

#### 1094. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8466` → after: `L8589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8589) · [Before (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8466)

```diff
-       return hv.queries[Rv.f.DeltaTime] = Sv, ev
+       return lT.queries[HT.d.DeltaTime] = MT, KT
```

#### 1095. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8472` → after: `L8595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8595) · [Before (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8472)

```diff
-       return Number.isNaN(vv) ? hv : Math.min(Pv, Math.max(zv, vv))
+       return Number.isNaN(TT) ? lT : Math.min(cT, Math.max(kT, TT))
```

#### 1096. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8474-L8475` → after: `L8597-L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8597-L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8597-L8598) · [Before (L8474-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8474-L8475)

```diff
-     var Zv = Pv(36809),
-       Av = Pv(3029);
+     var uT = cT(37174),
+       XT = cT(3202);
```

#### 1097. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8481` → after: `L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8604) · [Before (L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8481)

```diff
-         (Pv.severity === jv.d.Error ? console.error : console.warn)(`Animation for ${vv}: ${Pv.source}: ${Pv.message}`)
+         (cT.severity === aT.e.Error ? console.error : console.warn)(`Animation for ${TT}: ${cT.source}: ${cT.message}`)
```

#### 1098. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8486` → after: `L8609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8609) · [Before (L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8486)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.xR = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.tV = 0
```

#### 1099. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8489` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8612) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8489)

```diff
-           return this.xR
+           return this.tV
```

#### 1100. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8492` → after: `L8615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8615) · [Before (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8492)

```diff
-           this.xR++
+           this.tV++
```

#### 1101. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8515` → after: `L8638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8638) · [Before (L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8515)

```diff
-           return [Pv, hv].some((Pv => null !== Pv && new iv.b(Pv, new Gv(vv, zv)).animatesAnyBone))
+           return [cT, lT].some((cT => null !== cT && new NT.d(cT, new ST(TT, kT)).animatesAnyBone))
```

#### 1102. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8525` → after: `L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8648) · [Before (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8525)

```diff
-             for (const vv of null === Sv ? [] : (0, iv.g)(Sv)) hv.add(vv);
+             for (const TT of null === MT ? [] : (0, NT.h)(MT)) lT.add(TT);
```

#### 1103. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8541` → after: `L8664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8664) · [Before (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8541)

```diff
-               hv = Array.from(Sv, (vv => null !== vv && void 0 !== vv ? vv : "")), Bv.set(Pv, hv)
+               lT = Array.from(MT, (TT => null !== TT && void 0 !== TT ? TT : "")), UT.set(cT, lT)
```

#### 1104. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8558` → after: `L8681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8681) · [Before (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8558)

```diff
-             Sv = new iv.b(zv, new Gv(vv, Pv));
+             MT = new NT.d(kT, new ST(TT, cT));
```

#### 1105. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8560` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8683) · [Before (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8560)

```diff
-             Mv(ev ? `${vv} (texture pack)` : vv, Sv.diagnostics), ev && !Sv.animatesAnyBone && console.error(`Animation for ${vv} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), hv.set(Pv, Sv)
+             RT(KT ? `${TT} (texture pack)` : TT, MT.diagnostics), KT && !MT.animatesAnyBone && console.error(`Animation for ${TT} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), lT.set(cT, MT)
```

#### 1106. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8569-L8571` → after: `L8692-L8694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8692-L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8692-L8694) · [Before (L8569-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8569-L8571)

```diff
-           const zv = (0, Cv.b)(),
-             Pv = Zv.e.has(vv) || this.drawnWithPlayerRig(vv),
-             hv = (0, Zv.l)(zv, Pv ? Hv : vv, []);
+           const kT = (0, hT.c)(),
+             cT = uT.c.has(TT) || this.drawnWithPlayerRig(TT),
+             lT = (0, uT.l)(kT, cT ? LT : TT, []);
```

#### 1107. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8576` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8699) · [Before (L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8576)

```diff
-             Mv(`${vv} (texture pack)`, Pv.diagnostics), Sv = Pv.binding
+             RT(`${TT} (texture pack)`, cT.diagnostics), MT = cT.binding
```

#### 1108. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8584` → after: `L8707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8707) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8584)

```diff
-           null === this.pack && (this.pack = (0, Zv.s)(null !== null ? null : (0, Av.e)(), "texturePack"), Mv("the texture pack", this.pack.diagnostics));
+           null === this.pack && (this.pack = (0, uT.r)(null !== null ? null : (0, XT.d)(), "texturePack"), RT("the texture pack", this.pack.diagnostics));
```

#### 1109. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8590` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8713) · [Before (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8590)

```diff
-   36795: (vv, zv, Pv) => {
+   37159: (TT, kT, cT) => {
```

#### 1110. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8592-L8593` → after: `L8715-L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8715-L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8715-L8716) · [Before (L8592-L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8592-L8593)

```diff
-       d: () => lv,
-       h: () => Nv
+       c: () => IT,
+       f: () => xT
```

#### 1111. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8595-L8599` → after: `L8718-L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8718-L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8718-L8722) · [Before (L8595-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8595-L8599)

```diff
-     var hv = Pv(36803),
-       Sv = Pv(36857),
-       ev = Pv(36823),
-       gv = Pv(36633),
-       pv = Pv(36831);
+     var lT = cT(37167),
+       MT = cT(37217),
+       KT = cT(37182),
+       OT = cT(36952),
+       yT = cT(37187);
```

#### 1112. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8609` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8732) · [Before (L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8609)

```diff
-           null !== zv ? (hv.push(gv.name), Sv.push(gv.rotation), ev.push(zv)) : console.warn(`${vv.id} animates ${gv.name}, which the attachment has no node for`)
+           null !== kT ? (lT.push(OT.name), MT.push(OT.rotation), KT.push(kT)) : console.warn(`${TT.id} animates ${OT.name}, which the attachment has no node for`)
```

#### 1113. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8620` → after: `L8743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8743) · [Before (L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8620)

```diff
-           (0, gv.c)(vv, zv, Pv, hv, dv), this.restEuler.set(dv, 3 * pv)
+           (0, OT.d)(TT, kT, cT, lT, fT), this.restEuler.set(fT, 3 * yT)
```

#### 1114. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8623` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8746) · [Before (L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8623)

```diff
-           queries: new Float64Array(pv.f.Count),
+           queries: new Float64Array(yT.d.Count),
```

#### 1115. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8637-L8639` → after: `L8760-L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8760-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8760-L8762) · [Before (L8637-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8637-L8639)

```diff
-         } = this, Tv = (0, Sv.g)(zv, vv);
-         Pv.queries[pv.f.AnimTime] = Tv, Pv.queries[pv.f.LifeTime] = vv;
-         const Wv = zv.loop === ev.i.Loop;
+         } = this, AT = (0, MT.e)(kT, TT);
+         cT.queries[yT.d.AnimTime] = AT, cT.queries[yT.d.LifeTime] = TT;
+         const CT = kT.loop === KT.k.Loop;
```

#### 1116. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8642` → after: `L8765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8765) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8642)

```diff
-           Number.isNaN(Tv) ? hv.fill(0) : (0, Sv.h)(this.channels[ev], Tv, Wv, Pv, hv), (0, gv.h)(Nv[vv] + hv[0], Nv[vv + 1] + hv[1], Nv[vv + 2] + hv[2], this.trigs[ev], dv), lv.set(dv, 4 * ev)
+           Number.isNaN(AT) ? lT.fill(0) : (0, MT.f)(this.channels[KT], AT, CT, cT, lT), (0, OT.f)(xT[TT] + lT[0], xT[TT + 1] + lT[1], xT[TT + 2] + lT[2], this.trigs[KT], fT), IT.set(fT, 4 * KT)
```

#### 1117. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8650-L8651` → after: `L8773-L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8773-L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8773-L8774) · [Before (L8650-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8650-L8651)

```diff
-       } = (0, hv.b)(), Sv = Pv.find(vv);
-       return null === Sv ? (console.warn(`Cosmetic attachment clip ${vv} is not a built-in clip`), null) : new dv(Sv, Pv.variables.createValues(), zv)
+       } = (0, lT.c)(), MT = cT.find(TT);
+       return null === MT ? (console.warn(`Cosmetic attachment clip ${TT} is not a built-in clip`), null) : new fT(MT, cT.variables.createValues(), kT)
```

#### 1118. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8678` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8801) · [Before (L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8678)

```diff
-   37650: (vv, zv, Pv) => {
+   37967: (TT, kT, cT) => {
```

#### 1119. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8680` → after: `L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8803) · [Before (L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8680)

```diff
-       b: () => dv
+       d: () => fT
```

#### 1120. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8682-L8683` → after: `L8805-L8806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8805-L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8805-L8806) · [Before (L8682-L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8682-L8683)

```diff
-     var hv = Pv(36591),
-       Sv = Pv(36583);
+     var lT = cT(36885),
+       MT = cT(36881);
```

#### 1121. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8686` → after: `L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8809) · [Before (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8686)

```diff
-       pv = new hv.fa;
+       yT = new lT.Fv;
```

#### 1122. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8690` → after: `L8813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8813) · [Before (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8690)

```diff
-       const Nv = vv.Rm.getState(zv, "animator");
+       const xT = TT.oN.getState(kT, "animator");
```

#### 1123. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8694` → after: `L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8817) · [Before (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8694)

```diff
-         NK: Tv
+         mJ: AT
```

#### 1124. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8697` → after: `L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8820) · [Before (L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8697)

```diff
-       const Wv = null !== (dv = Nv.getDrawnNode(ev)) && void 0 !== dv ? dv : Nv.getDrawnNode(gv);
+       const CT = null !== (fT = xT.getDrawnNode(KT)) && void 0 !== fT ? fT : xT.getDrawnNode(OT);
```

#### 1125. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8700` → after: `L8823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8823) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8700)

```diff
-       null !== wv && (hv.fa.TransformNormalFromFloatsToRef(Wv.currentPosX, Wv.currentPosY, Wv.currentPosZ, lv.getNodeWorldMatrix(Tv, wv), pv), Pv[0] += pv.x, Pv[1] += pv.y, Pv[2] += pv.z)
+       null !== jT && (lT.Fv.TransformNormalFromFloatsToRef(CT.currentPosX, CT.currentPosY, CT.currentPosZ, IT.getNodeWorldMatrix(AT, jT), yT), cT[0] += yT.x, cT[1] += yT.y, cT[2] += yT.z)
```

#### 1126. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8703` → after: `L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8826) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8703)

```diff
-   37392: (vv, zv, Pv) => {
+   37712: (TT, kT, cT) => {
```

#### 1127. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8706` → after: `L8829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8829) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8706)

```diff
-       f: () => pv,
+       g: () => yT,
```

#### 1128. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8709-L8710` → after: `L8832-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8832-L8833) · [Before (L8709-L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8709-L8710)

```diff
-     var hv = Pv(2934),
-       Sv = Pv(37312);
+     var lT = cT(3081),
+       MT = cT(37658);
```

#### 1129. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8714` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8837) · [Before (L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8714)

```diff
-       return hv.b.getImagesPerAtlas().length > 1 && Sv.b.ra()
+       return lT.e.getImagesPerAtlas().length > 1 && MT.c.iv()
```

#### 1130. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8719` → after: `L8842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8842) · [Before (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8719)

```diff
-       return Pv ? Sv : (vv + Sv) / hv.b.getImagesPerAtlas()[0]
+       return cT ? MT : (TT + MT) / lT.e.getImagesPerAtlas()[0]
```

#### 1131. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8722` → after: `L8845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8845) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8722)

```diff
-   37410: (vv, zv, Pv) => {
+   37734: (TT, kT, cT) => {
```

#### 1132. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8724-L8725` → after: `L8847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8847) · [Before (L8724-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8724-L8725)

```diff
-       e: () => xv,
-       j: () => qv,
+       c: () => eT,
```

#### 1133. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8728` → after: `L8851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8851) · [Before (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8728)

```diff
-       n: () => Iv
+       o: () => ET
```

#### 1134. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8730-L8744` → after: `L8853-L8867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8853-L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8853-L8867) · [Before (L8730-L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8730-L8744)

```diff
-     var hv = Pv(36591),
-       Sv = Pv(4209),
-       ev = Pv(9101),
-       gv = Pv(626),
-       pv = Pv(36743),
-       dv = Pv(36775),
-       Nv = Pv(37428),
-       lv = Pv(36685),
-       Tv = Pv(37341),
-       Wv = Pv(37426),
-       wv = Pv(2982),
-       av = Pv(37419),
-       sv = Pv(36738),
-       Cv = Pv(2934),
-       iv = Pv(2940);
+     var lT = cT(36885),
+       MT = cT(4445),
+       KT = cT(9447),
+       OT = cT(617),
+       yT = cT(37080),
+       fT = cT(37127),
+       xT = cT(37754),
+       IT = cT(37016),
+       AT = cT(37678),
+       CT = cT(37746),
+       jT = cT(3146),
+       vT = cT(37738),
+       tT = cT(37074),
+       hT = cT(3081),
+       NT = cT(3089);
```

#### 1135. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8762` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8885) · [Before (L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8762)

```diff
-               const hv = [...null !== (zv = vv.extensionsUsed) && void 0 !== zv ? zv : [], ...null !== (Pv = vv.extensionsRequired) && void 0 !== Pv ? Pv : []];
+               const lT = [...null !== (kT = TT.extensionsUsed) && void 0 !== kT ? kT : [], ...null !== (cT = TT.extensionsRequired) && void 0 !== cT ? cT : []];
```

#### 1136. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8765-L8766` → after: `L8888-L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8888-L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8888-L8889) · [Before (L8765-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8765-L8766)

```diff
-           const wv = null !== (zv = Tv.materials) && void 0 !== zv ? zv : [],
-             av = null !== (Pv = Tv.meshes) && void 0 !== Pv ? Pv : [];
+           const jT = null !== (kT = AT.materials) && void 0 !== kT ? kT : [],
+             vT = null !== (cT = AT.meshes) && void 0 !== cT ? cT : [];
```

#### 1137. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8768` → after: `L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8891) · [Before (L8768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8768)

```diff
-           const sv = null !== (hv = av[0].primitives) && void 0 !== hv ? hv : [];
+           const tT = null !== (lT = vT[0].primitives) && void 0 !== lT ? lT : [];
```

#### 1138. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8772` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8895) · [Before (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8772)

```diff
-               const Pv = null !== (zv = vv.nodes) && void 0 !== zv ? zv : [];
+               const cT = null !== (kT = TT.nodes) && void 0 !== kT ? kT : [];
```

#### 1139. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8776` → after: `L8899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8899) · [Before (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8776)

```diff
-             iv = null !== (Sv = Cv.pbrMetallicRoughness) && void 0 !== Sv ? Sv : {},
+             NT = null !== (MT = hT.pbrMetallicRoughness) && void 0 !== MT ? MT : {},
```

#### 1140. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8780` → after: `L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8903) · [Before (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8780)

```diff
-           return JSON.stringify([cv, Gv, null !== (ev = iv.baseColorFactor) && void 0 !== ev ? ev : [1, 1, 1, 1], null !== (gv = Cv.emissiveFactor) && void 0 !== gv ? gv : [0, 0, 0], null !== (pv = Cv.doubleSided) && void 0 !== pv && pv, null !== (dv = Cv.alphaMode) && void 0 !== … [truncated]
+           return JSON.stringify([QT, ST, null !== (KT = NT.baseColorFactor) && void 0 !== KT ? KT : [1, 1, 1, 1], null !== (OT = hT.emissiveFactor) && void 0 !== OT ? OT : [0, 0, 0], null !== (yT = hT.doubleSided) && void 0 !== yT && yT, null !== (fT = hT.alphaMode) && void 0 !== … [truncated]
```

#### 1141. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8809` → after: `L8932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8932) · [Before (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8809)

```diff
-         if ("extensions" === zv && Object.keys(null !== Pv && void 0 !== Pv ? Pv : {}).some((vv => !Fv.has(vv))) || nv(Pv)) return !0
+         if ("extensions" === kT && Object.keys(null !== cT && void 0 !== cT ? cT : {}).some((TT => !rT.has(TT))) || wT(cT)) return !0
```

#### 1142. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8821` → after: `L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8944) · [Before (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8821)

```diff
-       const sv = null !== (gv = av.byteOffset) && void 0 !== gv ? gv : 0,
+       const tT = null !== (OT = vT.byteOffset) && void 0 !== OT ? OT : 0,
```

#### 1143. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8827` → after: `L8950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8950) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8827)

```diff
-       return [(Gv = zv.subarray(sv, sv + Cv), `${Dv(Gv,2166136261).toString(16)}-${Dv(Gv,1867293075).toString(16)}-${Gv.length}`), wv.mimeType, null !== (pv = Pv.texCoord) && void 0 !== pv ? pv : 0, null !== (dv = iv.wrapS) && void 0 !== dv ? dv : jv, null !== (Nv = iv.wrapT) &&  … [truncated]
+       return [(ST = kT.subarray(tT, tT + hT), `${bT(ST,2166136261).toString(16)}-${bT(ST,1867293075).toString(16)}-${ST.length}`), jT.mimeType, null !== (yT = cT.texCoord) && void 0 !== yT ? yT : 0, null !== (fT = NT.wrapS) && void 0 !== fT ? fT : aT, null !== (xT = NT.wrapT) &&  … [truncated]
```

#### 1144. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8835-L8838` → after: `L8958-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8958-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8958-L8961) · [Before (L8835-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8835-L8838)

```diff
-     var Kv = Pv(37421),
-       Vv = Pv(36783),
-       Uv = Pv(36764),
-       Rv = Pv(2599);
+     var zT = cT(37741),
+       JT = cT(37143),
+       oT = cT(37114),
+       HT = cT(2790);
```

#### 1145. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8843` → after: `L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8966) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8843)

```diff
-       return xv * (null !== (zv = vv.modelScale) && void 0 !== zv ? zv : 1)
+       return eT * (null !== (kT = TT.modelScale) && void 0 !== kT ? kT : 1)
```

#### 1146. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8852` → after: `L8975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8975) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8852)

```diff
-       } = null !== (zv = vv.customModelInfo) && void 0 !== zv ? zv : {}, dv = null !== (Pv = null === (hv = vv.model) || void 0 === hv ? void 0 : hv.split("|")) && void 0 !== Pv ? Pv : [], Nv = dv.includes("rotatable") && Sv.f.includes(dv[0]), lv = Nv || "CustomModel" === dv[0];
+       } = null !== (kT = TT.customModelInfo) && void 0 !== kT ? kT : {}, fT = null !== (cT = null === (lT = TT.model) || void 0 === lT ? void 0 : lT.split("|")) && void 0 !== cT ? cT : [], xT = fT.includes("rotatable") && MT.h.includes(fT[0]), IT = xT || "CustomModel" === fT[0];
```

#### 1147. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8855-L8857` → after: `L8978-L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8978-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8978-L8980) · [Before (L8855-L8857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8855-L8857)

```diff
-         yOffset: lv ? ev : 0,
-         yRotation: Nv ? gv : 0,
-         xRotation: Nv ? pv : 0
+         yOffset: IT ? KT : 0,
+         yRotation: xT ? OT : 0,
+         xRotation: xT ? yT : 0
```

#### 1148. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8862-L8863` → after: `L8985-L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R8985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L8985-L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L8985-L8986) · [Before (L8862-L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8862-L8863)

```diff
-       const zv = ev.g[vv.meta.rootName];
-       return (0, gv.N)(vv.blockModel) || vv.blockModel === zv.blockModel ? zv : vv
+       const kT = KT.i[TT.meta.rootName];
+       return (0, OT.R)(TT.blockModel) || TT.blockModel === kT.blockModel ? kT : TT
```

#### 1149. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8890-L8891` → after: `L9013-L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9013-L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9013-L9014) · [Before (L8890-L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8890-L8891)

```diff
-         emissiveColor: null !== (zv = null === (Pv = vv.emissiveColor) || void 0 === Pv ? void 0 : Pv.join(",")) && void 0 !== zv ? zv : "",
-         textureAnimation: vv.textureAnimation ? `${vv.textureAnimation.frames}x${vv.textureAnimation.animationInterval}` : ""
+         emissiveColor: null !== (kT = null === (cT = TT.emissiveColor) || void 0 === cT ? void 0 : cT.join(",")) && void 0 !== kT ? kT : "",
+         textureAnimation: TT.textureAnimation ? `${TT.textureAnimation.frames}x${TT.textureAnimation.animationInterval}` : ""
```

#### 1150. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8902` → after: `L9025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9025) · [Before (L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8902)

```diff
-       if (Cv.b.getModelOverride(zv)) return null;
+       if (hT.e.getModelOverride(kT)) return null;
```

#### 1151. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8906` → after: `L9029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9029) · [Before (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8906)

```diff
-         const Pv = (0, wv.i)(Cv.b.getModel(vv, iv.e.BLOCK).url);
+         const cT = (0, jT.f)(hT.e.getModel(TT, NT.e.BLOCK).url);
```

#### 1152. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8909` → after: `L9032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9032) · [Before (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8909)

```diff
-           hv = Yv((0, wv.e)(Pv.base64))
+           lT = PT((0, jT.d)(cT.base64))
```

#### 1153. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8915` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9038) · [Before (L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8915)

```diff
-       return null === hv ? null : `${hv}|${Hv(Pv)}`
+       return null === lT ? null : `${lT}|${LT(cT)}`
```

#### 1154. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8919` → after: `L9042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9042) · [Before (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8919)

```diff
-       if ((0, av.c)(vv), !zv.blockModel) throw new Error(`"${zv.name}" has a GLB model type ("${zv.model}") but no blockModel`);
+       if ((0, vT.b)(TT), !kT.blockModel) throw new Error(`"${kT.name}" has a GLB model type ("${kT.model}") but no blockModel`);
```

#### 1155. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8957-L8960` → after: `L9080-L9083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9080-L9083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9080-L9083) · [Before (L8957-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8957-L8960)

```diff
-           await Cv.b.requiredAssetsAreGenerated();
-           const av = Cv.b.getModelOverride(ev) ? void 0 : wv.textureAnimation,
-             cv = Cv.b.getModel(ev, iv.e.BLOCK).url,
-             Gv = () => Cv.b.getModelOverride(ev) ? {
+           await hT.e.requiredAssetsAreGenerated();
+           const vT = hT.e.getModelOverride(KT) ? void 0 : jT.textureAnimation,
+             QT = hT.e.getModel(KT, NT.e.BLOCK).url,
+             ST = () => hT.e.getModelOverride(KT) ? {
```

#### 1156. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8963` → after: `L9086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9086) · [Before (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8963)

```diff
-                 rootUrl: Cv.b.getModel(ev, iv.e.BLOCK, !0).url
+                 rootUrl: hT.e.getModel(KT, NT.e.BLOCK, !0).url
```

#### 1157. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8967` → after: `L9090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9090) · [Before (L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8967)

```diff
-           const jv = await (0, Vv.l)("", vv, cv, Gv, (async zv => {
+           const aT = await (0, JT.j)("", TT, QT, ST, (async kT => {
```

#### 1158. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8981-L8983` → after: `L9104-L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9104-L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9104-L9106) · [Before (L8981-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8981-L8983)

```diff
-                 } = (0, Uv.c)({
-                   name: `${ev}BlockModelMeshMat`,
-                   Is: vv,
+                 } = (0, oT.e)({
+                   name: `${KT}BlockModelMeshMat`,
+                   et: TT,
```

#### 1159. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8985` → after: `L9108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9108) · [Before (L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8985)

```diff
-                     ...(0, Kv.c)(zv, Sv, Jv, !!wv.unlit),
+                     ...(0, zT.b)(kT, MT, YT, !!jT.unlit),
```

#### 1160. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8992` → after: `L9115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9115) · [Before (L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8992)

```diff
-                     fillMode: 0 === hv.primitive.mode ? pv.c.PointListDrawMode : pv.c.TriangleFillMode
+                     fillMode: 0 === lT.primitive.mode ? yT.d.PointListDrawMode : yT.d.TriangleFillMode
```

#### 1161. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L8995` → after: `L9118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9118) · [Before (L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L8995)

```diff
-                     (0, lv.q)(vv, Tv.c, (0, Tv.j)(av.frames, av.animationInterval))
+                     (0, IT.t)(TT, AT.b, (0, AT.f)(vT.frames, vT.animationInterval))
```

#### 1162. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9002` → after: `L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9125) · [Before (L9002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9002)

```diff
-             const Wv = (await Promise.allSettled([zv.decodeGeometries(), Nv && (0, dv.t)(Nv)])).find((vv => "rejected" === vv.status));
+             const CT = (await Promise.allSettled([kT.decodeGeometries(), xT && (0, fT.A)(xT)])).find((TT => "rejected" === TT.status));
```

#### 1163. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9012` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9135) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9012)

```diff
-           if (!mv) throw new Error(`"${ev}" imported no renderable mesh`);
+           if (!DT) throw new Error(`"${KT}" imported no renderable mesh`);
```

#### 1164. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9016` → after: `L9139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9139) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9016)

```diff
-           } = mv, Yv = null !== (Sv = mv.material) && void 0 !== Sv ? Sv : await Pv, nv = (0, sv.r)(jv, fv);
+           } = DT, PT = null !== (MT = DT.material) && void 0 !== MT ? MT : await cT, wT = (0, tT.p)(aT, FT);
```

#### 1165. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9019` → after: `L9142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9142) · [Before (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9019)

```diff
-           (0, Wv.d)(nv, jv.worldMatrix(fv, !0, gv.scale), !0);
+           (0, CT.g)(wT, aT.worldMatrix(FT, !0, OT.scale), !0);
```

#### 1166. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9028` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9151) · [Before (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9028)

```diff
-           Ov.isIdentity() || (0, Wv.d)(nv, Ov.m, !0);
+           mT.isIdentity() || (0, CT.g)(wT, mT.m, !0);
```

#### 1167. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9030-L9032` → after: `L9153-L9155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9153-L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9153-L9155) · [Before (L9030-L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9030-L9032)

```diff
-           wv.unlit || Fv || (nv.named.color = (0, sv.p)(nv.positions.length / 3, sv.e, nv.named.color));
-           const Dv = (0, Nv.r)((0, Rv.g)().Ma, `${ev}blockGlbMesh`, nv);
-           return Dv.sideOrientation = pv.c.ClockWiseSideOrientation, Dv.rotationQuaternion = fv.part ? null : hv.Quaternion.Identity(), Dv.hasVertexAlpha = !fv.primitive.draco && (0, Kv.f)(fv.primitive), Dv.material = Yv, Dv.Zs = !1, Dv
+           jT.unlit || rT || (wT.named.color = (0, tT.m)(wT.positions.length / 3, tT.d, wT.named.color));
+           const bT = (0, xT.q)((0, HT.f)().gv, `${KT}blockGlbMesh`, wT);
+           return bT.sideOrientation = yT.d.ClockWiseSideOrientation, bT.rotationQuaternion = FT.part ? null : lT.Quaternion.Identity(), bT.hasVertexAlpha = !FT.primitive.draco && (0, zT.e)(FT.primitive), bT.material = PT, bT.Vt = !1, bT
```

#### 1168. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9051` → after: `L9174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9174) · [Before (L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9051)

```diff
-   37419: (vv, zv, Pv) => {
+   37738: (TT, kT, cT) => {
```

#### 1169. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9053` → after: `L9176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9176) · [Before (L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9053)

```diff
-       c: () => hv
+       b: () => lT
```

#### 1170. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9058` → after: `L9181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9181) · [Before (L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9058)

```diff
-   37445: (vv, zv, Pv) => {
+   37771: (TT, kT, cT) => {
```

#### 1171. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9060` → after: `L9183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9183) · [Before (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9060)

```diff
-       b: () => Sv
+       d: () => MT
```

#### 1172. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9062` → after: `L9185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9185) · [Before (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9062)

```diff
-     var hv = Pv(36990);
+     var lT = cT(37331);
```

#### 1173. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9067` → after: `L9190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9190) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9067)

```diff
-         pv = (0, hv.g)(zv);
+         yT = (0, lT.e)(kT);
```

#### 1174. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9079` → after: `L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9202) · [Before (L9079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9079)

```diff
-   37593: (vv, zv, Pv) => {
+   37893: (TT, kT, cT) => {
```

#### 1175. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9082` → after: `L9205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9205) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9082)

```diff
-       g: () => dv
+       f: () => fT
```

#### 1176. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9084-L9086` → after: `L9207-L9209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9207-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9207-L9209) · [Before (L9084-L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9084-L9086)

```diff
-     var hv = Pv(36990),
-       Sv = Pv(36926),
-       ev = Pv(36738);
+     var lT = cT(37331),
+       MT = cT(37282),
+       KT = cT(37074);
```

#### 1177. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9090-L9095` → after: `L9213-L9218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9213-L9218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9213-L9218) · [Before (L9090-L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9090-L9095)

```diff
-       const pv = vv.Ma.Egv[Pv];
-       pv.uF(!0);
-       const dv = vv.kW.JR(vv.nG(zv)),
-         Nv = (0, hv.g)(dv),
-         lv = zv.map(((zv, Pv) => zv + (Nv[Pv] + Nv[Pv + 3]) / 2 - vv.iW[Pv]));
-       pv.pp.set(Nv[3] - Nv[0], Nv[4] - Nv[1], Nv[5] - Nv[2]);
+       const yT = TT.gv.OyT[cT];
+       yT.PD(!0);
+       const fT = TT.sC.rV(TT.Tm(kT)),
+         xT = (0, lT.e)(fT),
+         IT = kT.map(((kT, cT) => kT + (xT[cT] + xT[cT + 3]) / 2 - TT.QC[cT]));
+       yT.GA.set(xT[3] - xT[0], xT[4] - xT[1], xT[5] - xT[2]);
```

#### 1178. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9103-L9105` → after: `L9226-L9228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9226-L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9226-L9228) · [Before (L9103-L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9103-L9105)

```diff
-             ev = hv ? pv.pp.y : Sv ? pv.pp.z : pv.pp.x,
-             gv = hv ? pv.pp.z : Sv ? pv.pp.x : pv.pp.y;
-           return .5 + (vv - .5) * (zv % 2 === 0 ? ev : gv)
+             KT = lT ? yT.GA.y : MT ? yT.GA.z : yT.GA.x,
+             OT = lT ? yT.GA.z : MT ? yT.GA.x : yT.GA.y;
+           return .5 + (TT - .5) * (kT % 2 === 0 ? KT : OT)
```

#### 1179. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9107` → after: `L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9230) · [Before (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9107)

```diff
-       return (0, ev.y)(pv, (() => {
+       return (0, KT.t)(yT, (() => {
```

#### 1180. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9109` → after: `L9232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9232) · [Before (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9109)

```diff
-       })), (0, Sv.m)(pv, lv[0], lv[1], lv[2]), pv
+       })), (0, MT.r)(yT, IT[0], IT[1], IT[2]), yT
```

#### 1181. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9117` → after: `L9240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9240) · [Before (L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9117)

```diff
-           pp: Pv
+           GA: cT
```

#### 1182. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9119` → after: `L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9242) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9119)

```diff
-         zv[dv].pp.set(Pv.x, 1 / hv, Pv.z), (0, Sv.m)(zv[dv], vv.x, (0 === dv ? 1 : -1) * (ev - gv / (2 * hv)), vv.z)
+         kT[fT].GA.set(cT.x, 1 / lT, cT.z), (0, MT.r)(kT[fT], TT.x, (0 === fT ? 1 : -1) * (KT - OT / (2 * lT)), TT.z)
```

#### 1183. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9124` → after: `L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9247) · [Before (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9124)

```diff
-           pp: Nv
+           GA: xT
```

#### 1184. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L9126` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L9249) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L9126)

```diff
-         zv[dv].pp.set(1 / Pv, (pv * hv - 2 * gv) / ((pv - 2 * gv) * hv), Nv.z), (0, Sv.m)(zv[dv], (2 === dv ? -1 : 1) * (ev - gv / (2 * Pv)), vv.y, vv.z)
+         kT[fT].GA.set(1 / cT, (yT * lT - 2 * OT) / ((yT - 2 * OT) * lT), xT.z), (0, MT.r)(kT[fT], (2 === fT ? -1 : 1) * (KT - OT / (2 * cT)), TT.y, TT.z)
```
