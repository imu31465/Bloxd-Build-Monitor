# Changed — Bundle Modifications Report (Part 014 / 141)

- **Updated at**: `2026-11-24T14:21 JST`
- **Part**: `14 / 141` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (31kiid.1299b0d6 → mpd96o.85ad4551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4687 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 704. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5046` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5199) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5046)

```diff
-                     uk(kk[nk[43]] += kk[nk[6]] * nk[36], kk[-nk[44]] |= kk[nk[43]] << kk[nk[24]], kk[nk[24]] += (kk[nk[43]] & nk[37]) > nk[38] ? nk[39] : nk[40]);
+                     Xm(mm[Sm[30]] += mm[-Sm[41]] * Sm[31], mm[Sm[32]] |= mm[Sm[30]] << mm[Sm[24]], mm[Sm[24]] += (mm[Sm[30]] & Sm[33]) > Sm[34] ? Sm[35] : Sm[36]);
```

#### 705. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5048-L5170` → after: `L5201-L5204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5201-L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5201-L5204) · [Before (L5048-L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5048-L5170)

```diff
-                       uk(kk[nk[20]].push(kk[-nk[44]] & nk[11]), kk[-nk[44]] >>= nk[3], kk[nk[24]] -= nk[3])
-                     } while (kk[nk[24]] > nk[26]);
-                     kk[nk[43]] = -nk[2]
-                   } return kk[nk[43]] > -nk[2] && kk[nk[20]].push((kk[-nk[44]] | kk[nk[43]] << kk[nk[24]]) & nk[11]), Gk(kk[nk[20]])
-             }(Qk[kk[nk[1]]]) : Kk[kk[nk[1]]]
-           }(78) in pk && function(...kk) {
-             uk(kk[nk[12]] = nk[1], kk[nk[5]] = function(...Fk) {
-               return uk(Fk[nk[12]] = nk[14], Fk[-nk[45]] = {}), Fk[nk[19]].length !== Fk[nk[1]].length + Fk[nk[2]].length ? nk[46] : kk[nk[2]](Fk[nk[1]], Fk[nk[2]], Fk[nk[19]], nk[1], nk[1], nk[1], Fk[-nk[45]])
-             }, kk[nk[2]] = function(...Fk) {
-               return uk(Fk[nk[12]] = nk[26], Fk[-nk[49]] = nk[46]), Fk[nk[48]] >= Fk[nk[19]].length ? nk[47] : Fk[nk[24]]["" + Fk[nk[14]] + Fk[nk[16]] + Fk[nk[48]]] !== nk[18] ? Fk[nk[24]]["" + Fk[nk[14]] + Fk[nk[16]] + Fk[nk[48]]] : (Fk[nk[19]][Fk[nk[48]]] === Fk[nk[1]][Fk[nk[14 … [truncated]
-             }, console.log(kk[nk[5]]))
-           }(), nk[47]) {
-           function kk(...kk) {
-             for (uk(kk[nk[12]] = nk[2], kk[nk[52]] = 'ueKLC0B]r6TURvyGo4/q",<5XN_a[`~$)7EV:8s{Y31d*|A;Jtmn=QZh!Oc%Sg@WD.b#Mplj>^Hwfi9?z&F+(}2IPxk', kk[nk[19]] = "" + (kk[nk[1]] || ""), kk[nk[51]] = kk[nk[19]].length, kk[nk[53]] = [], kk[nk[48]] = nk[1], kk[nk[9]] = nk[1], kk[nk[2 … [truncated]
-               if (kk[nk[6]] = kk[nk[52]].indexOf(kk[nk[19]][kk[nk[50]]]), kk[nk[6]] !== -nk[2])
-                 if (kk[nk[26]] < nk[1]) kk[nk[26]] = kk[nk[6]];
- ... (107 more removed lines; see GitHub link above)
+                       Xm(mm[Sm[39]].push(mm[Sm[32]] & Sm[12]), mm[Sm[32]] >>= Sm[11], mm[Sm[24]] -= Sm[11])
+                     } while (mm[Sm[24]] > Sm[7]);
+                     mm[Sm[30]] = -Sm[2]
+                   } return mm[Sm[30]] > -Sm[2] && mm[Sm[39]].push((mm[Sm[32]] | mm[Sm[30]] << mm[Sm[24]]) & Sm[12]), Nm(mm[Sm[39]])
```

#### 706. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5172-L5199` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5206) · [Before (L5172-L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5172-L5199)

```diff
-           }), 8979), (0, lk[Fk(107) + Fk(108)])(((...kk) => {
-             kk[nk[12]] = nk[1], Fk(nk[21]) in pk && function(...kk) {
-               uk(kk[nk[12]] = nk[1], kk[nk[0]] = function(...kk) {
-                 for (uk(kk[nk[12]] = nk[2], kk[nk[2]] = kk[nk[1]].length, kk[nk[19]] = [], kk[nk[42]] = nk[1]), kk[nk[20]] = nk[1]; kk[nk[20]] < kk[nk[2]]; kk[nk[20]]++) kk[nk[19]].push(kk[nk[20]] !== nk[1] && kk[nk[1]][kk[nk[20]]] > kk[nk[1]][kk[nk[20]] - nk[2]] ? kk[nk[19]][kk[ … [truncated]
-                 for (kk[nk[8]] = kk[nk[2]] - nk[2]; kk[nk[8]] >= nk[1]; kk[nk[8]]--) kk[nk[8]] !== kk[nk[2]] - nk[2] && kk[nk[1]][kk[nk[8]]] > kk[nk[1]][kk[nk[8]] + nk[2]] && (kk[nk[19]][kk[nk[8]]] = Math.max(kk[nk[19]][kk[nk[8]]], kk[nk[19]][kk[nk[8]] + nk[2]] + nk[2])), kk[nk[4 … [truncated]
-                 return kk[nk[42]]
-               }, console.log(kk[nk[0]]))
-             }(), Xk = nk[46]
-           })))
-         }
-       })(), (() => {
-         function kk(...kk) {
-           return kk[nk[12]] = nk[2], typeof Kk[kk[nk[1]]] === nk[17] ? Kk[kk[nk[1]]] = function(...kk) {
-             for (uk(kk[nk[12]] = nk[2], kk[-nk[65]] = '1,:y#f>CwpEGFsc./$ao4&z9k8^QexDXv]j_q7l<KOUPnu5dMZJ*H}%RtIV6;`m)0h?{~g=SYi2"W+@[3LB(ANb|T!r', kk[-nk[64]] = "" + (kk[nk[1]] || ""), kk[nk[14]] = kk[-nk[64]].length, kk[nk[16]] = [], kk[nk[8]] = nk[1], kk[nk[24]] = nk[1], kk[n … [truncated]
-               if (kk[-nk[19]] = kk[-nk[65]].indexOf(kk[-nk[64]][kk[nk[3]]]), kk[-nk[19]] !== -nk[2])
-                 if (kk[nk[43]] < nk[1]) kk[nk[43]] = kk[-nk[19]];
- ... (12 more removed lines; see GitHub link above)
+ 
```

#### 707. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5201-L5210` → after: `L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5208) · [Before (L5201-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5201-L5210)

```diff
-               for (uk(kk[nk[12]] = nk[2], kk[nk[2]] = 'AldnSsNkLphJoaKmQOZBE$0yCjHr=U^>w8PDI`Yb2?!Wq<:cR;vXGfF,x(i|ztT&g"MV)17.*~4}[3%6u@#_59]e+/{', kk[nk[19]] = "" + (kk[nk[1]] || ""), kk[nk[67]] = kk[nk[19]].length, kk[nk[16]] = [], kk[nk[48]] = nk[1], kk[nk[9]] = nk[1], kk[nk[ … [truncated]
-                 if (kk[nk[6]] = kk[nk[2]].indexOf(kk[nk[19]][kk[nk[66]]]), kk[nk[6]] !== -nk[2])
-                   if (kk[nk[68]] < nk[1]) kk[nk[68]] = kk[nk[6]];
-                   else {
-                     uk(kk[nk[68]] += kk[nk[6]] * nk[36], kk[nk[48]] |= kk[nk[68]] << kk[nk[9]], kk[nk[9]] += (kk[nk[68]] & nk[37]) > nk[38] ? nk[39] : nk[40]);
-                     do {
-                       uk(kk[nk[16]].push(kk[nk[48]] & nk[11]), kk[nk[48]] >>= nk[3], kk[nk[9]] -= nk[3])
-                     } while (kk[nk[9]] > nk[26]);
-                     kk[nk[68]] = -nk[2]
-                   } return kk[nk[68]] > -nk[2] && kk[nk[16]].push((kk[nk[48]] | kk[nk[68]] << kk[nk[9]]) & nk[11]), Gk(kk[nk[16]])
+               return Tm[Sm[13]] = Sm[2], typeof Km[Tm[Sm[1]]] === Sm[18] ? Km[Tm[Sm[1]]] = mm(Qm[Tm[Sm[1]]]) : Km[Tm[Sm[1]]]
```

#### 708. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5214-L5219` → after: `L5212-L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5212-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5212-L5224) · [Before (L5214-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5214-L5219)

```diff
-               return kk[nk[12]] = nk[2], typeof Kk[kk[nk[1]]] === nk[17] ? Kk[kk[nk[1]]] = Ik(Qk[kk[nk[1]]]) : Kk[kk[nk[1]]]
-             }
-             const Tk = new Set(process.argv.slice(nk[19]));
-             if (!Tk.has(Xk(nk[51]))) {
-               if (Tk.size !== nk[2]) return nk[46];
-               if (!Tk.has("-v")) return nk[46]
+               var Tm;
+               Xm(mm[Sm[13]] = Sm[1], Tm = function(...mm) {
+                 Xm(mm[Sm[13]] = Sm[2], this.yp = mm[Sm[1]], this.length = Sm[1], this.map = {}, this.head = Sm[42], this.tail = Sm[42])
+               }, Tm.prototype.get = function(...mm) {
+                 var Tm;
+                 return Xm(mm[Sm[13]] = Sm[2], Tm = this.map[mm[Sm[1]]]), Tm ? (this.remove(Tm), this.insert(Tm.key, Tm.val), Tm.val) : -Sm[2]
+               }, Tm.prototype.put = function(...mm) {
+                 Xm(mm[Sm[13]] = Sm[15], this.map[mm[Sm[1]]] ? (this.remove(this.map[mm[Sm[1]]]), this.insert(mm[Sm[1]], mm[Sm[2]])) : this.length === this.yp ? (this.remove(this.head), this.insert(mm[Sm[1]], mm[Sm[2]])) : (this.insert(mm[Sm[1]], mm[Sm[2]]), this.length++))
+               }, Tm.prototype.remove = function(...mm) {
+                 Xm(mm[Sm[13]] = Sm[2], mm[-Sm[43]] = mm[Sm[1]].prev, mm[Sm[15]] = mm[Sm[1]].next), mm[Sm[15]] && (mm[Sm[15]].prev = mm[-Sm[43]]), mm[-Sm[43]] && (mm[-Sm[43]].next = mm[Sm[15]]), this.head === mm[Sm[1]] && (this.head = mm[Sm[15]]), this.tail === mm[Sm[1]] && (this. … [truncated]
+               }, Tm.prototype.insert = function(...mm) {
+                 Xm(mm[Sm[13]] = Sm[15], mm[Sm[5]] = new List(mm[Sm[1]], mm[Sm[2]]), this.tail ? (this.tail.next = mm[Sm[5]], mm[Sm[5]].prev = this.tail, this.tail = mm[Sm[5]]) : (this.tail = mm[Sm[5]], this.head = mm[Sm[5]]), this.map[mm[Sm[1]]] = mm[Sm[5]])
+               }, console.log(Tm))
```

#### 709. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5221` → after: `L5226-L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5226-L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5226-L5256) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5221)

```diff
-             return await (async (kk, Ik) => {
+             em(92) + Sm[70] in Gm && hm();
+             let Am = {
+               [em(93)]: em(94) + "no",
+               [Tm(95) + "im"]: Tm(96) + Tm(Sm[49]),
+               "1f": Tm(98) + "cg",
+               [Tm(99) + Tm(Sm[27])]: Tm(101) + Tm(102),
+               [Tm(103)]: Tm(104),
+               [Tm(105) + Tm(106) + Tm(107)]: Tm(108) + Tm(109),
+               [Tm(110) + Tm(111)]: Tm(Sm[14]),
+               [Tm(113)]: Tm(114),
+               [Tm(115)]: Tm(116),
+               [Tm(117) + "ct"]: "i8"
+             };
+             Xm(fm = Sm[44], (0, wm[Tm(118)])(im.Ki, Am))
+           }
+         }), 9829), (0, wm[em(Sm[66]) + Tm(120)])(((...mm) => {
+ ... (15 more added lines; see GitHub link above)
```

#### 710. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5223-L5225` → after: `L5258-L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5258-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5258-L5260) · [Before (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5223-L5225)

```diff
-                 for (uk(kk[nk[12]] = nk[2], kk[-nk[38]] = 'yNRUHipE6"hD|xP*I@5+~Fz}qZCw/_B<{Y&g!Ab[)QL;fk$evJrT,MdKOo%S`#nu=?92G]t4l(.>c^s:7V0WXa138jm', kk[nk[0]] = "" + (kk[nk[1]] || ""), kk[nk[69]] = kk[nk[0]].length, kk[nk[16]] = [], kk[nk[48]] = nk[1], kk[nk[9]] = nk[1], kk[n … [truncated]
-                   if (kk[nk[70]] = kk[-nk[38]].indexOf(kk[nk[0]][kk[nk[66]]]), kk[nk[70]] !== -nk[2])
-                     if (kk[nk[26]] < nk[1]) kk[nk[26]] = kk[nk[70]];
+                 for (Xm(mm[Sm[13]] = Sm[2], mm[Sm[5]] = 'w&+34~0?7<="(IGa#JDPN>[5zmCV!:pQ%|^tOB`v;U,]Lr}ex)dy_gF1@AcTWXf6$il/ME*bs9k2Y8HRSqhZu{jno.K', mm[-Sm[49]] = "" + (mm[Sm[1]] || ""), mm[-Sm[50]] = mm[-Sm[49]].length, mm[Sm[21]] = [], mm[Sm[47]] = Sm[1], mm[Sm[24]] = Sm[1],  … [truncated]
+                   if (mm[Sm[51]] = mm[Sm[5]].indexOf(mm[-Sm[49]][mm[Sm[11]]]), mm[Sm[51]] !== -Sm[2])
+                     if (mm[Sm[30]] < Sm[1]) mm[Sm[30]] = mm[Sm[51]];
```

#### 711. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5227` → after: `L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5262) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5227)

```diff
-                       uk(kk[nk[26]] += kk[nk[70]] * nk[36], kk[nk[48]] |= kk[nk[26]] << kk[nk[9]], kk[nk[9]] += (kk[nk[26]] & nk[37]) > nk[38] ? nk[39] : nk[40]);
+                       Xm(mm[Sm[30]] += mm[Sm[51]] * Sm[31], mm[Sm[47]] |= mm[Sm[30]] << mm[Sm[24]], mm[Sm[24]] += (mm[Sm[30]] & Sm[33]) > Sm[34] ? Sm[35] : Sm[36]);
```

#### 712. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5229-L5232` → after: `L5264-L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5264-L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5264-L5267) · [Before (L5229-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5229-L5232)

```diff
-                         uk(kk[nk[16]].push(kk[nk[48]] & nk[11]), kk[nk[48]] >>= nk[3], kk[nk[9]] -= nk[3])
-                       } while (kk[nk[9]] > nk[26]);
-                       kk[nk[26]] = -nk[2]
-                     } return kk[nk[26]] > -nk[2] && kk[nk[16]].push((kk[nk[48]] | kk[nk[26]] << kk[nk[9]]) & nk[11]), Gk(kk[nk[16]])
+                         Xm(mm[Sm[21]].push(mm[Sm[47]] & Sm[12]), mm[Sm[47]] >>= Sm[11], mm[Sm[24]] -= Sm[11])
+                       } while (mm[Sm[24]] > Sm[7]);
+                       mm[Sm[30]] = -Sm[2]
+                     } return mm[Sm[30]] > -Sm[2] && mm[Sm[21]].push((mm[Sm[47]] | mm[Sm[30]] << mm[Sm[24]]) & Sm[12]), Nm(mm[Sm[21]])
```

#### 713. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5236` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5271) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5236)

```diff
-                 return kk[nk[12]] = nk[2], typeof Kk[kk[nk[1]]] === nk[17] ? Kk[kk[nk[1]]] = Xk(Qk[kk[nk[1]]]) : Kk[kk[nk[1]]]
+                 return mm[Sm[13]] = Sm[2], typeof Km[mm[Sm[1]]] === Sm[18] ? Km[mm[Sm[1]]] = Tm(Qm[mm[Sm[1]]]) : Km[mm[Sm[1]]]
```

#### 714. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5280-L5289` → after: `L5275-L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5275-L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5275-L5278) · [Before (L5280-L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5280-L5289)

```diff
-                 for (uk(kk[nk[12]] = nk[2], kk[nk[2]] = '7%]),:&2~.|(=1KSgV_x}kcFwmO<z?H6`BpC;ZnI^DTedyXt#LA9Wj8Y">EuJqvMP!3Gri/{@4b*[QU0ohsRl+$Naf5', kk[nk[0]] = "" + (kk[nk[1]] || ""), kk[nk[78]] = kk[nk[0]].length, kk[nk[20]] = [], kk[-nk[77]] = nk[1], kk[nk[9]] = nk[1], kk[nk … [truncated]
-                   if (kk[nk[58]] = kk[nk[2]].indexOf(kk[nk[0]][kk[nk[3]]]), kk[nk[58]] !== -nk[2])
-                     if (kk[nk[26]] < nk[1]) kk[nk[26]] = kk[nk[58]];
-                     else {
-                       uk(kk[nk[26]] += kk[nk[58]] * nk[36], kk[-nk[77]] |= kk[nk[26]] << kk[nk[9]], kk[nk[9]] += (kk[nk[26]] & nk[37]) > nk[38] ? nk[39] : nk[40]);
-                       do {
-                         uk(kk[nk[20]].push(kk[-nk[77]] & nk[11]), kk[-nk[77]] >>= nk[3], kk[nk[9]] -= nk[3])
-                       } while (kk[nk[9]] > nk[26]);
-                       kk[nk[26]] = -nk[2]
-                     } return kk[nk[26]] > -nk[2] && kk[nk[20]].push((kk[-nk[77]] | kk[nk[26]] << kk[nk[9]]) & nk[11]), Gk(kk[nk[20]])
+                 mm[Sm[13]] = Sm[2];
+                 const Tm = {};
+                 for (let fm of mm[Sm[1]].replace(/[^w]/g, "").toLowerCase()) Tm[fm] = Tm[fm] + Sm[2] || Sm[2];
+                 return Tm
```

#### 715. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5293` → after: `L5282-L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5282-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5282-L5287) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5293)

```diff
-                 return kk[nk[12]] = nk[2], typeof Kk[kk[nk[1]]] === nk[17] ? Kk[kk[nk[1]]] = Fk(Qk[kk[nk[1]]]) : Kk[kk[nk[1]]]
+                 mm[Sm[13]] = Sm[15];
+                 const Tm = buildCharMap(mm[Sm[1]]),
+                   fm = buildCharMap(mm[Sm[2]]);
+                 for (let hm in Tm)
+                   if (Tm[hm] !== fm[hm]) return Sm[52];
+                 return Object.keys(Tm).length !== Object.keys(fm).length ? Sm[52] : Sm[44]
```

#### 716. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5297-L5350` → after: `L5291-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5291-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5291-L5292) · [Before (L5297-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5297-L5350)

```diff
-                 var Fk;
-                 uk(kk[nk[12]] = nk[1], Fk = function(...kk) {
-                   uk(kk[nk[12]] = nk[2], this.St = kk[nk[1]], this.length = nk[1], this.map = {}, this.head = nk[30], this.tail = nk[30])
-                 }, Fk.prototype.get = function(...kk) {
-                   var Fk;
-                   return uk(kk[nk[12]] = nk[2], Fk = this.map[kk[nk[1]]]), Fk ? (this.remove(Fk), this.insert(Fk.key, Fk.val), Fk.val) : -nk[2]
-                 }, Fk.prototype.put = function(...kk) {
-                   uk(kk[nk[12]] = nk[19], this.map[kk[nk[1]]] ? (this.remove(this.map[kk[nk[1]]]), this.insert(kk[nk[1]], kk[nk[2]])) : this.length === this.St ? (this.remove(this.head), this.insert(kk[nk[1]], kk[nk[2]])) : (this.insert(kk[nk[1]], kk[nk[2]]), this.length++))
-                 }, Fk.prototype.remove = function(...kk) {
-                   uk(kk[nk[12]] = nk[2], kk[nk[79]] = kk[nk[1]].prev, kk[nk[0]] = kk[nk[1]].next), kk[nk[0]] && (kk[nk[0]].prev = kk[nk[79]]), kk[nk[79]] && (kk[nk[79]].next = kk[nk[0]]), this.head === kk[nk[1]] && (this.head = kk[nk[0]]), this.tail === kk[nk[1]] && (this.tail =  … [truncated]
-                 }, Fk.prototype.insert = function(...kk) {
-                   uk(kk[nk[12]] = nk[19], kk[nk[5]] = new List(kk[nk[1]], kk[nk[2]]), this.tail ? (this.tail.next = kk[nk[5]], kk[nk[5]].prev = this.tail, this.tail = kk[nk[5]]) : (this.tail = kk[nk[5]], this.head = kk[nk[5]]), this.map[kk[nk[1]]] = kk[nk[5]])
-                 }, console.log(Fk))
-               }
-               Ik(117) in pk && Tk();
-               let ik = {
- ... (38 more removed lines; see GitHub link above)
+                 mm[Sm[13]] = Sm[2];
+                 return xm(mm[Sm[1]]) !== 1 / 0
```

#### 717. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5354` → after: `L5296-L5301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5296-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5296-L5301) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5354)

```diff
-                 return kk[nk[12]] = nk[2], typeof Kk[kk[nk[1]]] === nk[17] ? Kk[kk[nk[1]]] = Ik(Qk[kk[nk[1]]]) : Kk[kk[nk[1]]]
+                 if (mm[Sm[13]] = Sm[2], !mm[Sm[1]]) return -Sm[2];
+                 const Tm = xm(mm[Sm[1]].left),
+                   fm = xm(mm[Sm[1]].right),
+                   hm = Math.abs(Tm - fm);
+                 if (Tm === 1 / 0 || fm === 1 / 0 || hm > Sm[2]) return 1 / 0;
+                 return Math.max(Tm, fm) + Sm[2]
```

#### 718. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5356-L5413` → after: `L5303-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5303-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5303-L5346) · [Before (L5356-L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5356-L5413)

```diff
-               kk[nk[12]] = nk[1],
-                 function(...kk) {
-                   function Ik(...kk) {
-                     for (uk(kk[nk[12]] = nk[2], kk[nk[5]] = 'cw;^+?v9)=5TgV>3PC<S4a$zt7{([},l]BmpxW2s.HEOQfDrenI0kyYAF/M8qU!:NhGXuiJj~%RL*1|@&_Kb#"`doZ6', kk[nk[0]] = "" + (kk[nk[1]] || ""), kk[-nk[33]] = kk[nk[0]].length, kk[nk[16]] = [], kk[nk[8]] = nk[1], kk[nk[9]] = nk[1], kk … [truncated]
-                       if (kk[nk[35]] = kk[nk[5]].indexOf(kk[nk[0]][kk[nk[3]]]), kk[nk[35]] !== -nk[2])
-                         if (kk[nk[26]] < nk[1]) kk[nk[26]] = kk[nk[35]];
-                         else {
-                           uk(kk[nk[26]] += kk[nk[35]] * nk[36], kk[nk[8]] |= kk[nk[26]] << kk[nk[9]], kk[nk[9]] += (kk[nk[26]] & nk[37]) > nk[38] ? nk[39] : nk[40]);
-                           do {
-                             uk(kk[nk[16]].push(kk[nk[8]] & nk[11]), kk[nk[8]] >>= nk[3], kk[nk[9]] -= nk[3])
-                           } while (kk[nk[9]] > nk[26]);
-                           kk[nk[26]] = -nk[2]
-                         } return kk[nk[26]] > -nk[2] && kk[nk[16]].push((kk[nk[8]] | kk[nk[26]] << kk[nk[9]]) & nk[11]), Gk(kk[nk[16]])
-                   }
- 
-                   function Xk(...kk) {
- ... (42 more removed lines; see GitHub link above)
+               mm[Sm[13]] = Sm[1], window[fm(122) + fm(123) + fm(124) + "_"] = {
+                 buildCharacterMap: hm,
+                 isAnagrams: Am,
+                 isBalanced: am,
+                 getHeightBalanced: xm
+               }
+             }(), fm = Sm[52]
+         })))
+       }
+     })(), (() => {
+       if ([][Sm[13]] = Sm[1], function(...mm) {
+           return mm[Sm[13]] = Sm[2], typeof Km[mm[Sm[1]]] === Sm[18] ? Km[mm[Sm[1]]] = function(...mm) {
+             for (Xm(mm[Sm[13]] = Sm[2], mm[Sm[5]] = ',4`.w"yx<#%[v>{!9?]UW3q6JAep}TGaos@0bBjK5RPrYL:~*HI$7MCDdSZkXufE(F&c|2t_ghQn;^18V=N+/mzil)O', mm[Sm[0]] = "" + (mm[Sm[1]] || ""), mm[Sm[53]] = mm[Sm[0]].length, mm[Sm[21]] = [], mm[Sm[54]] = Sm[1], mm[Sm[4]] = Sm[1], mm[Sm[7]]  … [truncated]
+               if (mm[Sm[29]] = mm[Sm[5]].indexOf(mm[Sm[0]][mm[Sm[3]]]), mm[Sm[29]] !== -Sm[2])
+                 if (mm[Sm[7]] < Sm[1]) mm[Sm[7]] = mm[Sm[29]];
+                 else {
+ ... (28 more added lines; see GitHub link above)
```

#### 719. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5415-L5417` → after: `L5348-L5377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5348-L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5348-L5377) · [Before (L5415-L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5415-L5417)

```diff
-                   function qk(...kk) {
-                     for (uk(kk[nk[12]] = nk[2], kk[nk[2]] = Tk(kk[nk[1]]), kk[nk[19]] = kk[nk[2]].length, kk[nk[42]] = -nk[2], kk[nk[20]] = nk[18], kk[nk[48]] = ""); ++kk[nk[42]] < kk[nk[19]];) uk(kk[nk[20]] = kk[nk[2]][kk[nk[42]]], kk[nk[48]] += ak(kk[nk[20]]));
-                     return kk[nk[48]]
+         function Tm(...Tm) {
+           return Tm[Sm[13]] = Sm[2], typeof Km[Tm[Sm[1]]] === Sm[18] ? Km[Tm[Sm[1]]] = mm(Qm[Tm[Sm[1]]]) : Km[Tm[Sm[1]]]
+         }
+         let fm = Sm[52];
+         Xm(setInterval(((...mm) => {
+           function Tm(...mm) {
+             return mm[Sm[13]] = Sm[2], typeof Km[mm[Sm[1]]] === Sm[18] ? Km[mm[Sm[1]]] = function(...mm) {
+               for (Xm(mm[Sm[13]] = Sm[2], mm[Sm[5]] = '6c.<9`u8f~0]1^h/ZE|;2)K}b_"xL=UQqV,IJRo[a7@&tBPA?{gnk5HD+jFOsy#p!vi(lrG$3>:zYeW*wC4NXm%TMdS', mm[Sm[0]] = "" + (mm[Sm[1]] || ""), mm[Sm[22]] = mm[Sm[0]].length, mm[Sm[39]] = [], mm[Sm[64]] = Sm[1], mm[Sm[24]] = Sm[1], mm[Sm[7 … [truncated]
+                 if (mm[Sm[29]] = mm[Sm[5]].indexOf(mm[Sm[0]][mm[Sm[11]]]), mm[Sm[29]] !== -Sm[2])
+                   if (mm[Sm[7]] < Sm[1]) mm[Sm[7]] = mm[Sm[29]];
+                   else {
+                     Xm(mm[Sm[7]] += mm[Sm[29]] * Sm[31], mm[Sm[64]] |= mm[Sm[7]] << mm[Sm[24]], mm[Sm[24]] += (mm[Sm[7]] & Sm[33]) > Sm[34] ? Sm[35] : Sm[36]);
+                     do {
+                       Xm(mm[Sm[39]].push(mm[Sm[64]] & Sm[12]), mm[Sm[64]] >>= Sm[11], mm[Sm[24]] -= Sm[11])
+                     } while (mm[Sm[24]] > Sm[7]);
+                     mm[Sm[7]] = -Sm[2]
+ ... (14 more added lines; see GitHub link above)
```

#### 720. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5419-L5423` → after: `L5379-L5391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5379-L5391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5379-L5391) · [Before (L5419-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5419-L5423)

```diff
- 
-                   function Lk(...Ik) {
-                     if (Ik[nk[12]] = nk[1], kk[nk[75]] >= kk[nk[104]]) throw Error(Fk(nk[105]));
-                     if (uk(Ik[-nk[33]] = kk[nk[20]][kk[nk[75]]] & nk[11], kk[nk[75]]++), (Ik[-nk[33]] & nk[98]) == nk[81]) return Ik[-nk[33]] & nk[23];
-                     throw Error(Fk(153))
+                 }
+                 static generate(...mm) {
+                   mm[Sm[13]] = Sm[2];
+                   const fm = Tm(65537);
+                   let hm, Am;
+                   mm[Sm[5]] = Sm[19];
+                   do {
+                     Xm(hm = this.randomPrime(mm[Sm[1]] / Sm[15]), Am = this.randomPrime(mm[Sm[1]] / Sm[15]), mm[Sm[5]] = Tm.lcm(hm.prev(), Am.prev()))
+                   } while (Tm.gcd(fm, mm[Sm[5]]).notEquals(Sm[2]) || hm.minus(Am).abs().shiftRight(mm[Sm[1]] / Sm[15] - Sm[27]).isZero());
+                   return {
+                     e: fm,
+                     n: hm.multiply(Am),
+                     d: fm.modInv(mm[Sm[5]])
```

#### 721. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5425-L5491` → after: `L5393-L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5393-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5393-L5411) · [Before (L5425-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5425-L5491)

```diff
- 
-                   function tk(...Ik) {
-                     function Xk(...kk) {
-                       for (uk(kk[nk[12]] = nk[2], kk[nk[2]] = 'uGHAOjbTSXoVpJiBdf9+v@2?}l8w5[Ut]c.=k|~$R<3/7QK_MDF!n;%Cz0rq*IN#LhW&ZEg`):6,mY^{sy("P1ae4x>', kk[nk[19]] = "" + (kk[nk[1]] || ""), kk[nk[42]] = kk[nk[19]].length, kk[-nk[99]] = [], kk[nk[48]] = nk[1], kk[nk[102]] = nk … [truncated]
-                         if (kk[-nk[100]] = kk[nk[2]].indexOf(kk[nk[19]][kk[nk[66]]]), kk[-nk[100]] !== -nk[2])
-                           if (kk[-nk[101]] < nk[1]) kk[-nk[101]] = kk[-nk[100]];
-                           else {
-                             uk(kk[-nk[101]] += kk[-nk[100]] * nk[36], kk[nk[48]] |= kk[-nk[101]] << kk[nk[102]], kk[nk[102]] += (kk[-nk[101]] & nk[37]) > nk[38] ? nk[39] : nk[40]);
-                             do {
-                               uk(kk[-nk[99]].push(kk[nk[48]] & nk[11]), kk[nk[48]] >>= nk[3], kk[nk[102]] -= nk[3])
-                             } while (kk[nk[102]] > nk[26]);
-                             kk[-nk[101]] = -nk[2]
-                           } return kk[-nk[101]] > -nk[2] && kk[-nk[99]].push((kk[nk[48]] | kk[-nk[101]] << kk[nk[102]]) & nk[11]), Gk(kk[-nk[99]])
-                     }
- 
-                     function Tk(...kk) {
- ... (51 more removed lines; see GitHub link above)
+                 }
+                 static encrypt(...mm) {
+                   return mm[Sm[13]] = Sm[16], Tm(mm[Sm[1]]).modPow(mm[Sm[15]], mm[Sm[2]])
+                 }
+                 static decrypt(...mm) {
+                   return mm[Sm[13]] = Sm[16], Tm(mm[Sm[1]]).modPow(mm[Sm[2]], mm[Sm[15]])
+                 }
+                 static encode(...mm) {
+                   mm[Sm[13]] = Sm[2];
+                   const fm = mm[Sm[1]].split("").map((mm => mm.charCodeAt())).join("");
+                   return Tm(fm)
+                 }
+                 static decode(...mm) {
+                   mm[Sm[13]] = Sm[2];
+                   const Tm = mm[Sm[1]].toString();
+                   mm[Sm[5]] = "";
+ ... (3 more added lines; see GitHub link above)
```

#### 722. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5494-L5504` → after: `L5430-L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5430-L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5430-L5449) · [Before (L5494-L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5494-L5504)

```diff
-                   function Zk(...Fk) {
-                     for (uk(Fk[nk[12]] = nk[2], kk[nk[20]] = Tk(Fk[nk[1]]), kk[nk[104]] = kk[nk[20]].length, kk[nk[75]] = nk[1], Fk[nk[2]] = [], Fk[nk[0]] = nk[18]);
-                       (Fk[nk[0]] = tk()) !== nk[46];) Fk[nk[2]].push(Fk[nk[0]]);
-                     return ik(Fk[nk[2]])
-                   }
-                   kk[nk[12]] = nk[2], kk[nk[2]] = String.fromCharCode, uk(kk[nk[20]] = nk[18], kk[nk[104]] = nk[18], kk[nk[75]] = nk[18]), uk(kk[nk[1]].version = Xk(157), kk[nk[1]].encode = qk, kk[nk[1]].decode = Zk)
-                 }(typeof exports === Xk(158) + Xk(nk[22]) ? this.utf8 = {} : exports)
-             }(), Xk = nk[46]
-           })))
-         }
-       })()
+             function Am(...mm) {
+               return mm[Sm[13]] = Sm[2], typeof Km[mm[Sm[1]]] === Sm[18] ? Km[mm[Sm[1]]] = hm(Qm[mm[Sm[1]]]) : Km[mm[Sm[1]]]
+             }
+             let am = {
+               [Tm(Sm[68]) + Am(Sm[69])]: Am(129),
+               [Am(130) + "jj"]: Am(131) + "jk",
+               [Am(132) + Am(133)]: Am(134),
+               [Am(135) + Am(136)]: Am(Sm[56]),
+               [Am(138)]: Am(Sm[41]) + Am(140),
+               [Am(141) + Am(142)]: Am(143) + Am(144),
+               [Am(145) + Am(146) + "49"]: Am(147),
+               [Am(148)]: Am(149) + Am(150) + Sm[70]
+             };
+             Xm(fm = Sm[44], (0, wm[Am(151)])(im.Mi, am))
+           }
+         }), 11461), (0, wm[Tm(152) + Tm(Sm[65])])((() => {
+ ... (4 more added lines; see GitHub link above)
```

#### 723. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5506` → after: `L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5451) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5506)

```diff
-   38161: (kk, Fk, Ik) => {
+   38250: (mm, Tm, fm) => {
```

#### 724. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5510-L5511` → after: `L5455-L5457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5455-L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5455-L5457) · [Before (L5510-L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5510-L5511)

```diff
-       G: () => ak,
-       d: () => Zk,
+       F: () => qm,
+       J: () => Dm,
+       e: () => Em,
```

#### 725. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5514-L5516` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5460) · [Before (L5514-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5514-L5516)

```diff
-       m: () => wk,
-       o: () => lk,
-       p: () => qk,
+       n: () => Ym,
```

#### 726. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5518-L5519` → after: `L5462-L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5462-L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5462-L5464) · [Before (L5518-L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5518-L5519)

```diff
-       t: () => xk,
-       w: () => Jk
+       u: () => im,
+       w: () => Im,
+       x: () => Vm
```

#### 727. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5521-L5524` → after: `L5466-L5469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5466-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5466-L5469) · [Before (L5521-L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5521-L5524)

```diff
-     var Xk = Ik(38169),
-       Tk = Ik(6475),
-       ik = Ik(38174),
-       yk = Ik(4202);
+     var hm = fm(38254),
+       Am = fm(6451),
+       am = fm(38261),
+       xm = fm(4168);
```

#### 728. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5527` → after: `L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5472) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5527)

```diff
-       return Xk.c.includes(kk)
+       return hm.e.includes(mm)
```

#### 729. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5539` → after: `L5484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5484) · [Before (L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5539)

```diff
-       return kk.physicsState.type === Tk.n.GLIDER && kk.movementType === Tk.m.GLIDING && qk(Fk)
+       return mm.physicsState.type === Am.m.GLIDER && mm.movementType === Am.l.GLIDING && im(Tm)
```

#### 730. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5548-L5550` → after: `L5493-L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5493-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5493-L5495) · [Before (L5548-L5550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5548-L5550)

```diff
-       const Ik = kk.MJ.QFk(kk.oR),
-         Xk = kk.MJ.FFk(kk.oR);
-       return kk.gJ.canAltAction && void 0 !== Ik && void 0 !== Xk && Lk(Xk, null === (Fk = Ik.selectedItem) || void 0 === Fk ? void 0 : Fk.name) ? (0, ik.e)(Ik.inventory) : 0
+       const fm = mm.qI.KTm(mm.xH),
+         hm = mm.qI.mTm(mm.xH);
+       return mm.xI.canAltAction && void 0 !== fm && void 0 !== hm && Rm(hm, null === (Tm = fm.selectedItem) || void 0 === Tm ? void 0 : Tm.name) ? (0, am.e)(fm.inventory) : 0
```

#### 731. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5566` → after: `L5511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5511) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5566)

```diff
-       } = Ik, Lk = (null !== lk && void 0 !== lk ? lk : []).map((kk => {
+       } = fm, Rm = (null !== wm && void 0 !== wm ? wm : []).map((mm => {
```

#### 732. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5574` → after: `L5519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5519) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5574)

```diff
-         food: new Set([...null !== Tk && void 0 !== Tk ? Tk : [], ...null !== ik && void 0 !== ik ? ik : [], ...null !== yk && void 0 !== yk ? yk : [], ...Lk]),
+         food: new Set([...null !== Am && void 0 !== Am ? Am : [], ...null !== am && void 0 !== am ? am : [], ...null !== xm && void 0 !== xm ? xm : [], ...Rm]),
```

#### 733. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5576` → after: `L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5521) · [Before (L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5576)

```diff
-         saddle: ak ? null !== qk && void 0 !== qk ? qk : "Saddle" : null
+         saddle: Dm ? null !== im && void 0 !== im ? im : "Saddle" : null
```

#### 734. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5606` → after: `L5551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5551) · [Before (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5606)

```diff
-   37794: (kk, Fk, Ik) => {
+   37836: (mm, Tm, fm) => {
```

#### 735. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5611` → after: `L5556-L5557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5556-L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5556-L5557) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5611)

```diff
-       m: () => VF,
+       k: () => nT,
+       o: () => VT,
```

#### 736. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5613` → after: `L5559-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5559-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5559-L5560) · [Before (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5613)

```diff
-       u: () => zF,
+       s: () => Tf,
+       t: () => MT,
```

#### 737. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5615-L5620` → after: `L5562-L5565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5562-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5562-L5565) · [Before (L5615-L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5615-L5620)

```diff
-       B: () => BF,
-       E: () => XI,
-       H: () => sF,
-       I: () => lI,
-       L: () => fF,
-       N: () => SF
+       A: () => QT,
+       C: () => xf,
+       F: () => lT,
+       G: () => cT
```

#### 738. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5622-L5625` → after: `L5567-L5570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5567-L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5567-L5570) · [Before (L5622-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5622-L5625)

```diff
-     var Xk = Ik(9183),
-       Tk = Ik(37811);
-     const ik = Xk.g.Water.id,
-       yk = Xk.g.Ice.id,
+     var hm = fm(9141),
+       Am = fm(37858);
+     const am = hm.i.Water.id,
+       xm = hm.i.Ice.id,
```

#### 739. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5636` → after: `L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5581) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5636)

```diff
-       return (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootId) === ik
+       return (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta.rootId) === am
```

#### 740. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5638-L5651` → after: `L5583-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5583-L5586) · [Before (L5638-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5638-L5651)

```diff
-     var qk = Ik(37992),
-       Lk = Ik(187),
-       tk = Ik(37995),
-       Zk = Ik(38005),
-       jk = Ik(337),
-       ek = Ik(1217),
-       wk = Ik(37079),
-       Hk = Ik(4449),
-       Jk = Ik(4489),
-       xk = Ik(3089),
-       Pk = Ik(37797),
-       Kk = Ik(37843),
-       Qk = Ik(37801),
-       sk = Ik(37848),
+     var im = fm(38045),
+       Rm = fm(198),
+       pm = fm(38054),
+       Em = fm(38067),
```

#### 741. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5654-L5666` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5599) · [Before (L5654-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5654-L5666)

```diff
-       Sk = Ik(3631),
-       vk = Ik(37855),
-       Ek = Ik(36772),
-       Ok = Ik(36764),
-       nk = Ik(37863),
-       Gk = Ik(3702),
-       pk = Ik(34),
-       uk = Ik(37866),
-       bk = Ik(37875),
-       Rk = Ik(37373),
-       Uk = Ik(37909),
-       Ck = Ik(3096),
-       Nk = Ik(1194),
+       zm = fm(3672),
```

#### 742. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5668-L5671` → after: `L5601-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5601-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5601-L5616) · [Before (L5668-L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5668-L5671)

```diff
-       Wk = Ik(37932),
-       fk = Ik(37236),
-       Bk = Ik(37835),
-       dk = Ik(38010);
+       km = fm(36846),
+       bm = fm(36843),
+       Sm = fm(37929),
+       em = fm(3729),
+       Nm = fm(31),
+       Gm = fm(37938),
+       Xm = fm(37944),
+       Pm = fm(37373),
+       Hm = fm(37974),
+       ym = fm(3151),
+       Cm = fm(1214),
+       rm = fm(37989),
+       sm = fm(37997),
+       lm = fm(37250),
+       Mm = fm(37905),
+       um = fm(38070);
```

#### 743. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5674-L5695` → after: `L5619-L5640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5619-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5619-L5640) · [Before (L5674-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5674-L5695)

```diff
-     var gk = Ik(37361),
-       mk = Ik(37352),
-       hk = Ik(37930),
-       rk = Ik(37319),
-       Dk = Ik(37657),
-       Mk = Ik(37623);
-     var kF = Ik(37954),
-       FF = Ik(37324),
-       IF = Ik(37896),
-       XF = Ik(37479),
-       TF = Ik(37455),
-       iF = Ik(37259),
-       yF = Ik(37488),
-       lF = Ik(37277),
-       aF = Ik(37652),
-       qF = Ik(2700),
- ... (6 more removed lines; see GitHub link above)
+     var tm = fm(37348),
+       Um = fm(37345),
+       dm = fm(37994),
+       gm = fm(37320),
+       Wm = fm(37688),
+       Fm = fm(37661);
+     var mT = fm(38014),
+       TT = fm(37327),
+       fT = fm(37967),
+       hT = fm(37510),
+       AT = fm(37470),
+       aT = fm(37276),
+       xT = fm(37517),
+       wT = fm(37290),
+       DT = fm(37686),
+       iT = fm(2760),
+ ... (6 more added lines; see GitHub link above)
```

#### 744. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5697-L5701` → after: `L5642-L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5642-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5642-L5646) · [Before (L5697-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5697-L5701)

```diff
-         Helmet: Ik(37960),
-         Chestplate: Ik(37968),
-         Leggings: Ik(37975),
-         Boots: Ik(37984),
-         Gauntlets: Ik(37990)
+         Helmet: fm(38016),
+         Chestplate: fm(38020),
+         Leggings: fm(38025),
+         Boots: fm(38032),
+         Gauntlets: fm(38038)
```

#### 745. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5706` → after: `L5651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5651) · [Before (L5706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5706)

```diff
-       pk.g.GL("localBlockMined");
+       Nm.j.gp("localBlockMined");
```

#### 746. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5708` → after: `L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5653) · [Before (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5708)

```diff
-         qk = Ik.QJ(kk[0], kk[1], kk[2]);
+         im = fm.XV(mm[0], mm[1], mm[2]);
```

#### 747. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5711` → after: `L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5656) · [Before (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5711)

```diff
-         tk = null === (Fk = Xk.g[Lk].solid) || void 0 === Fk || Fk,
+         pm = null === (Tm = hm.i[Rm].solid) || void 0 === Tm || Tm,
```

#### 748. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5713-L5714` → after: `L5658-L5659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5658-L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5658-L5659) · [Before (L5713-L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5713-L5714)

```diff
-       Uk.i.emit(50, {
-         ...(0, ZF.b)(kk, Xk.g[qk].Re, .05, .95),
+       Hm.f.emit(50, {
+         ...(0, ET.d)(mm, hm.i[im].AO, .05, .95),
```

#### 749. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5721-L5723` → after: `L5666-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5666-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5666-L5668) · [Before (L5721-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5721-L5723)

```diff
-       const jk = Ik.getClientPredictedOption((0, qF.e)().oR, "fillBrokenBlocksWithWater") ? function(kk, Fk, Ik, qk, Lk) {
-           const tk = Xk.g[Lk];
-           if (0 === Lk || tk.qj || Lk in Tk.b) return 0;
+       const om = fm.getClientPredictedOption((0, iT.d)().xH, "fillBrokenBlocksWithWater") ? function(mm, Tm, fm, im, Rm) {
+           const pm = hm.i[Rm];
+           if (0 === Rm || pm.Qo || Rm in Am.c) return 0;
```

#### 750. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5729` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5674) · [Before (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5729)

```diff
-           return Zk || jk ? ik : 0
+           return Em || om ? am : 0
```

#### 751. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5733-L5740` → after: `L5678-L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5678-L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5678-L5685) · [Before (L5733-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5733-L5740)

```diff
-           return (0, Sk.sendColyMessage)(Gk.Rf, {
-             Qy: 0,
-             Ky: zk().copy([], kk),
-             sy: xF(),
-             Vy: !1,
-             zy: !1,
-             Sy: Fk,
-             Ly: Ik
+           return (0, zm.sendColyMessage)(em.ng, {
+             Sx: 0,
+             bx: cm().copy([], mm),
+             Nx: VT(),
+             Gx: !1,
+             Xx: !1,
+             Px: Tm,
+             jx: fm
```

#### 752. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5744-L5745` → after: `L5689-L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5689-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5689-L5690) · [Before (L5744-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5744-L5745)

```diff
-           oR: wk
-         } = (0, qF.e)();
+           xH: Ym
+         } = (0, iT.d)();
```

#### 753. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5748` → after: `L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5693) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5748)

```diff
-         const Fk = Ik.getBlockBreakDrop(wk, qk, null !== (Hk = null === (Jk = Ik.getInvenHeldItem(wk)) || void 0 === Jk ? void 0 : Jk.name) && void 0 !== Hk ? Hk : null);
+         const Tm = fm.getBlockBreakDrop(Ym, im, null !== (qm = null === (jm = fm.getInvenHeldItem(Ym)) || void 0 === jm ? void 0 : jm.name) && void 0 !== qm ? qm : null);
```

#### 754. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5751` → after: `L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5696) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5751)

```diff
-       Ik.lG(kk[0], kk[1], kk[2], jk), (0, jF.j)(kk[0], kk[1], kk[2]), Ik.client.triggerGameCallback("onPlayerChangeBlock", (0, qF.e)().oR, kk[0], kk[1], kk[2], (0, Xk.f)(qk), "Air")
+       fm.zN(mm[0], mm[1], mm[2], om), (0, oT.d)(mm[0], mm[1], mm[2]), fm.client.triggerGameCallback("onPlayerChangeBlock", (0, iT.d)().xH, mm[0], mm[1], mm[2], (0, hm.f)(im), "Air")
```

#### 755. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5754-L5756` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5699) · [Before (L5754-L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5754-L5756)

```diff
-     const PF = ["length", 0, 1, "a"];
- 
-     function KF() {}
+     const IT = ["length", 0, "a"];
```

#### 756. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5763-L5764` → after: `L5706-L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5706-L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5706-L5707) · [Before (L5763-L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5763-L5764)

```diff
-       const Ik = (0, Ek.f)((0, qk.d)(kk, Fk));
-       Ok.d.play(Ik, 1)
+       const fm = (0, km.g)((0, im.c)(mm, Tm));
+       bm.e.play(fm, 1)
```

#### 757. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5766` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5709) · [Before (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5766)

```diff
-     "aVzYIU" in KF && function(...kk) {
+     "P3QXms5" in function() {} && function(...mm) {
```

#### 758. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5782-L5795` → after: `L5725-L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5725-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5725-L5726) · [Before (L5782-L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5782-L5795)

```diff
-     }(), (() => {
-       "m2htQr" in KF && function(...kk) {
-         QF(kk[PF[0]] = PF[1], kk[PF[3]] = function(kk) {
-           var Fk, Ik, Xk, Tk, ik, yk, lk = PF[1];
-           for (QF(Fk = {}, Ik = PF[1], Xk = PF[1], Tk = PF[1], ik = kk.length), yk = PF[1]; yk < ik; yk++) {
-             var ak;
-             for (QF(Fk = {}, Ik = PF[1], Xk = PF[2]), ak = yk + PF[2]; ak < ik; ak++) kk[yk].x !== kk[ak].x || kk[yk].y !== kk[ak].y ? (Fk[Tk = kk[yk].y === kk[ak].y ? Number.MAX_SAFE_INTEGER : (kk[yk].x - kk[ak].x) / (kk[yk].y - kk[ak].y)] || (Fk[Tk] = PF[1]), QF(Fk[Tk]++, Ik =  … [truncated]
-             QF(Ik += Xk, lk = Math.max(lk, Ik))
-           }
-           return lk
-         }, console.log(kk[PF[3]]))
-       }();
-       let kk = PF[1];
-       xF = () => (kk++, 5 === kk ? (kk = PF[1], "es") : nk.g)
+     }(), ((...mm) => {
+       KT(mm[IT[0]] = IT[1], mm[IT[2]] = IT[1], VT = () => (mm[IT[2]]++, 5 === mm[IT[2]] ? (mm[IT[2]] = IT[1], "es") : Sm.f))
```

#### 759. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5802` → after: `L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5733) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5802)

```diff
-         tF: lk = !1,
+         pT: wm = !1,
```

#### 760. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5811` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5742) · [Before (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5811)

```diff
-       if (Fk ??= String(kk.MJ.qY([])), kk.MJ.add([Ik[0], Ik[1], Ik[2]], Hk, Hk, null, null, void 0 !== qk, !1, Fk), kk.MJ.Tu(Fk, "autoRemoveMesh"), kk.MJ.Tu(Fk, "itemState", {
+       if (Tm ??= String(mm.qI.lB([])), mm.qI.add([fm[0], fm[1], fm[2]], qm, qm, null, null, void 0 !== im, !1, Tm), mm.qI.vG(Tm, "autoRemoveMesh"), mm.qI.vG(Tm, "itemState", {
```

#### 761. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5815-L5817` → after: `L5746-L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5746-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5746-L5748) · [Before (L5815-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5815-L5817)

```diff
-           attributes: (0, tk.g)(wk, yk),
-           tF: lk,
-           creationTime: null !== jk && void 0 !== jk ? jk : Date.now(),
+           attributes: (0, pm.j)(Ym, xm),
+           pT: wm,
+           creationTime: null !== om && void 0 !== om ? om : Date.now(),
```

#### 762. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5820-L5822` → after: `L5751-L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5751-L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5751-L5753) · [Before (L5820-L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5820-L5822)

```diff
-         const Ik = kk.MJ.aN(Fk);
-         (0, Zk.b)(Ik), Ik.applyImpulse(qk)
-       } else kk.MJ.Tu(Fk, "smoothToServerPos", {
+         const fm = mm.qI.WC(Tm);
+         (0, Em.c)(fm), fm.applyImpulse(im)
+       } else mm.qI.vG(Tm, "smoothToServerPos", {
```

#### 763. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5830-L5831` → after: `L5761-L5762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5761-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5761-L5762) · [Before (L5830-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5830-L5831)

```diff
-       const Tk = null === (Ik = kk.MJ.getState(Fk, "autoRotate")) || void 0 === Ik ? void 0 : Ik.heading,
-         ik = null === (Xk = kk.MJ.eFk(Fk)) || void 0 === Xk ? void 0 : Xk.offset;
+       const Am = null === (fm = mm.qI.getState(Tm, "autoRotate")) || void 0 === fm ? void 0 : fm.heading,
+         am = null === (hm = mm.qI.oTm(Tm)) || void 0 === hm ? void 0 : hm.offset;
```

#### 764. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5844` → after: `L5775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5775) · [Before (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5844)

```diff
-       } = kk.MJ.getState(Fk, "itemState"), qk = (0, uk.e)() * ak, tk = yk.droppedMeshTypeScale * qk;
+       } = mm.qI.getState(Tm, "itemState"), im = (0, Gm.d)() * Dm, pm = xm.droppedMeshTypeScale * im;
```

#### 765. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5846` → after: `L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5777) · [Before (L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5846)

```diff
-       kk.MJ.Tu(Fk, "hidingMeshManager", {
+       mm.qI.vG(Tm, "hidingMeshManager", {
```

#### 766. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5852` → after: `L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5783) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5852)

```diff
-             const lk = kk.Xw.kp;
+             const wm = mm.qY.YG;
```

#### 767. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5854` → after: `L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5785) · [Before (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5854)

```diff
-             lk.setEntityId(Xk, Fk), lk.setScale(Xk, tk, tk, tk), lk.Av(Xk, !0);
+             wm.setEntityId(hm, Tm), wm.setScale(hm, pm, pm, pm), wm.Dk(hm, !0);
```

#### 768. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5856` → after: `L5787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5787) · [Before (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5856)

```diff
-               MJ: ak
+               qI: Dm
```

#### 769. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5858-L5862` → after: `L5789-L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5789-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5789-L5793) · [Before (L5858-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5858-L5862)

```diff
-             ak.Tu(Fk, ak.names.mesh, {
-               Ip: Xk,
-               vIk: lk.XXk(Xk, 0),
-               offset: zk().ek(0, null !== (ik = null === Ik || void 0 === Ik ? void 0 : Ik.yOffset) && void 0 !== ik ? ik : yk.droppedMeshOffset * qk + .05 * Math.random(), 0)
-             }), ak.Tu(Fk, "autoRotate"), Ik && (ak.getState(Fk, "autoRotate").heading = Ik.heading)
+             Dm.vG(Tm, Dm.names.mesh, {
+               QG: hm,
+               kfm: wm.hhm(hm, 0),
+               offset: cm().tm(0, null !== (am = null === fm || void 0 === fm ? void 0 : fm.yOffset) && void 0 !== am ? am : xm.droppedMeshOffset * im + .05 * Math.random(), 0)
+             }), Dm.vG(Tm, "autoRotate"), fm && (Dm.getState(Tm, "autoRotate").heading = fm.heading)
```

#### 770. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5868` → after: `L5799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5799) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5868)

```diff
-             MJ: Ik
+             qI: fm
```

#### 771. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5870` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5801) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5870)

```diff
-           Ik.Eu(Fk, Ik.names.mesh), Ik.Eu(Fk, "autoRotate")
+           fm.WG(Tm, fm.names.mesh), fm.WG(Tm, "autoRotate")
```

#### 772. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5874` → after: `L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5805) · [Before (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5874)

```diff
-         canSee: !1 !== (null === (Tk = kk.xR[kk.oR]) || void 0 === Tk || null === (ik = Tk[Fk]) || void 0 === ik ? void 0 : ik.canSee),
+         canSee: !1 !== (null === (Am = mm.mH[mm.xH]) || void 0 === Am || null === (am = Am[Tm]) || void 0 === am ? void 0 : am.canSee),
```

#### 773. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5880` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5811) · [Before (L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5880)

```diff
-       (0, qF.e)().ke && (kk.jR("aShaderPackItem", 4), kk.JR.aShaderPackItem = tF.Vector4.FromArray(Fk))
+       (0, iT.d)().KO && (mm.FX("aShaderPackItem", 4), mm.RP.aShaderPackItem = pT.Vector4.FromArray(Tm))
```

#### 774. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5892` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5823) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5892)

```diff
-         ...Qk.b,
+         ...Qm.c,
```

#### 775. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5897` → after: `L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5828) · [Before (L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5897)

```diff
-         eq: !1,
+         ni: !1,
```

#### 776. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5903-L5906` → after: `L5834-L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5834-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5834-L5837) · [Before (L5903-L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5903-L5906)

```diff
-       const Tk = (0, qF.e)();
-       Ik && (Fk.sideOrientation = FF.d.ClockWiseSideOrientation);
-       const ik = Tk.Xw.kp,
-         yk = Tk.ke ? {
+       const Am = (0, iT.d)();
+       fm && (Tm.sideOrientation = TT.b.ClockWiseSideOrientation);
+       const am = Am.qY.YG,
+         xm = Am.KO ? {
```

#### 777. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5910` → after: `L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5841) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5910)

```diff
-         St: 16,
+         yp: 16,
```

#### 778. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5917` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5848) · [Before (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5917)

```diff
-       }), ik.setPickableForType(kk, !1), Tk.Xw.mp(Fk), kk
+       }), am.setPickableForType(mm, !1), Am.qY.rG(Tm), mm
```

#### 779. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5931` → after: `L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5862) · [Before (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5931)

```diff
-       return Tk && (yk.color = (0, rk.m)(ik.positions.length / 3, rk.b)), (0, IF.m)((0, qF.e)().Xw, kk, {
+       return Am && (xm.color = (0, gm.m)(am.positions.length / 3, gm.b)), (0, fT.l)((0, iT.d)().qY, mm, {
```

#### 780. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5939` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5870) · [Before (L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5939)

```diff
-       }, (() => new tF.Vector4(0, 1 - Kk.d, 1, Kk.d)));
+       }, (() => new pT.Vector4(0, 1 - Km.b, 1, Km.b)));
```

#### 781. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5942` → after: `L5873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5873) · [Before (L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5942)

```diff
-       return !kk || "object" !== typeof kk || Array.isArray(kk) ? null : "animTextures" in kk ? kk : null
+       return !mm || "object" !== typeof mm || Array.isArray(mm) ? null : "animTextures" in mm ? mm : null
```

#### 782. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5947-L5950` → after: `L5878-L5881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5878-L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5878-L5881) · [Before (L5947-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5947-L5950)

```diff
-       const Xk = `cuboidBlock|${Ik.name}|${Fk.key}|${(0,Dk.h)(kk)}`;
-       if ((0, qF.e)().Xw.kp.hasType(Xk)) return Xk;
-       const Tk = uF(Xk, Fk, RF, (0, eF.t)(Fk, bF));
-       return Tk.material = Ik, (0, ck.k)(Tk), Tk.Av(!1), Tk.gw = !1, CF.set(Xk, Tk), GF(Xk, Tk, kk, pF)
+       const hm = `cuboidBlock|${fm.name}|${Tm.key}|${(0,Wm.m)(mm)}`;
+       if ((0, iT.d)().qY.YG.hasType(hm)) return hm;
+       const Am = GT(hm, Tm, PT, (0, OT.u)(Tm, XT));
+       return Am.material = fm, (0, rm.k)(Am), Am.Dk(!1), Am.xq = !1, yT.set(hm, Am), eT(hm, Am, mm, NT)
```

#### 783. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5955-L5958` → after: `L5886-L5889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5886-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5886-L5889) · [Before (L5955-L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5955-L5958)

```diff
-       if (kk.Xw.Tw || !(0, Kk.g)()) return !0;
-       const Fk = Pk.d.getBlockAtlasMaterial(kk.Xw.mG(), !1, !1),
-         Ik = CF.get(NF(!1, eF.d, Fk));
-       return !(Ik && !(0, XF.i)(Ik)) || function(kk) {
+       if (mm.qY.jY || !(0, Km.g)()) return !0;
+       const Tm = Im.c.getBlockAtlasMaterial(mm.qY.wG(), !1, !1),
+         fm = yT.get(CT(!1, OT.e, Tm));
+       return !(fm && !(0, hT.h)(fm)) || function(mm) {
```

#### 784. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5960-L5961` → after: `L5891-L5892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5891-L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5891-L5892) · [Before (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5960-L5961)

```diff
-         if (!Fk || kk.Hs()) return !1;
-         const Ik = new((0, Mk.b)().SubMesh)(0, 0, 0, 0, 0, kk, void 0, !1, !1),
+         if (!Tm || mm.aJ()) return !1;
+         const fm = new((0, Fm.e)().SubMesh)(0, 0, 0, 0, 0, mm, void 0, !1, !1),
```

#### 785. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5975-L5976` → after: `L5906-L5907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5906-L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5906-L5907) · [Before (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5975-L5976)

```diff
-         kk.once("Dt", (() => {
-           const Xk = kk.Xw.mG().onAfterRenderObservable;
+         mm.once("DE", (() => {
+           const hm = mm.qY.wG().onAfterRenderObservable;
```

#### 786. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5996` → after: `L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5927) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L5996)

```diff
-       return Array.isArray(kk) ? tF.Ge.FromArray(kk) : new tF.Ge(kk, kk, kk)
+       return Array.isArray(mm) ? pT.WO.FromArray(mm) : new pT.WO(mm, mm, mm)
```

#### 787. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6001-L6002` → after: `L5932-L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5932-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5932-L5933) · [Before (L6001-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6001-L6002)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.Yw = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const lk = (0, qF.c)().yj.metadatas[kk];
+         this.bakeInScaling = void 0, this.name = void 0, this.Aq = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
+         const wm = (0, iT.c)().Vo.metadatas[mm];
```

#### 788. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6004` → after: `L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5935) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6004)

```diff
-         this.bakeInScaling = 1, this.name = kk, this.Yw = Fk, this.weight = null !== (Ik = lk.weight) && void 0 !== Ik ? Ik : 1, this.heldItemScale = null !== (Xk = lk.heldItemScale) && void 0 !== Xk ? Xk : 1, this.stackable = null === (Tk = lk.stackable) || void 0 === Tk || Tk,  … [truncated]
+         this.bakeInScaling = 1, this.name = mm, this.Aq = Tm, this.weight = null !== (fm = wm.weight) && void 0 !== fm ? fm : 1, this.heldItemScale = null !== (hm = wm.heldItemScale) && void 0 !== hm ? hm : 1, this.stackable = null === (Am = wm.stackable) || void 0 === Am || Am,  … [truncated]
```

#### 789. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6006-L6007` → after: `L5937-L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5937-L5938) · [Before (L6006-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6006-L6007)

```diff
-           type: Ck.h.ITEM
-         }, this.modelSource = xk.b.getModel(this.modelDefault.name, Ck.h.ITEM), this.displayName = kk
+           type: ym.g.ITEM
+         }, this.modelSource = Vm.b.getModel(this.modelDefault.name, ym.g.ITEM), this.displayName = mm
```

#### 790. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6030` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5961) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6030)

```diff
-         return (0, Dk.h)(kk.flippedWinding)
+         return (0, Wm.m)(mm.flippedWinding)
```

#### 791. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6034-L6036` → after: `L5965-L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5965-L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5965-L5967) · [Before (L6034-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6034-L6036)

```diff
-           const ik = `item|${kk}|${Fk}|${Ik.uniqueId}`;
-           Ik.material || console.error(`${kk} thin base has no material`);
-           const yk = Ik.clone(`${kk}ThinBase|${Fk}`, null);
+           const am = `item|${mm}|${Tm}|${fm.uniqueId}`;
+           fm.material || console.error(`${mm} thin base has no material`);
+           const xm = fm.clone(`${mm}ThinBase|${Tm}`, null);
```

#### 792. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6043` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5974) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6043)

```diff
-         const Xk = (0, qF.e)().Xw.kp,
+         const hm = (0, iT.d)().qY.YG,
```

#### 793. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6045-L6046` → after: `L5976-L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5976-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5976-L5977) · [Before (L6045-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6045-L6046)

```diff
-         if (Xk.set(Tk, "aLightLevels", TF.b), Xk.set(Tk, "aOpacity", 1), (0, qF.e)().ke) {
-           const Ik = kk.eq ? kF.d.eq : kk.dropped ? kF.d.dropped : 0;
+         if (hm.set(Am, "aLightLevels", AT.d), hm.set(Am, "aOpacity", 1), (0, iT.d)().KO) {
+           const fm = mm.ni ? mT.c.ni : mm.dropped ? mT.c.dropped : 0;
```

#### 794. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6055` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5986) · [Before (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6055)

```diff
-         return [(0, kF.o)(this.YG() | kk, (0, sk.e)(Fk)), ...this.shaderPackLocalFrame()]
+         return [(0, mT.n)(this.xG() | mm, (0, nm.e)(Tm)), ...this.shaderPackLocalFrame()]
```

#### 795. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6058-L6059` → after: `L5989-L5990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5989-L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5989-L5990) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6058-L6059)

```diff
-         const kk = Xk.g[this.name];
-         if (null === kk || void 0 === kk || !kk.blockModelItem) return [bk.b / this.bakeInScaling, 0, 0];
+         const mm = hm.i[this.name];
+         if (null === mm || void 0 === mm || !mm.blockModelItem) return [Xm.e / this.bakeInScaling, 0, 0];
```

#### 796. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6065-L6066` → after: `L5996-L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5996-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L5996-L5997) · [Before (L6065-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6065-L6066)

```diff
-         } = (0, bk.j)((0, bk.r)(kk));
-         return [Fk / this.bakeInScaling, Ik, (0, kF.m)(Tk, ik)]
+         } = (0, Xm.l)((0, Xm.o)(mm));
+         return [Tm / this.bakeInScaling, fm, (0, mT.k)(Am, am)]
```

#### 797. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6069` → after: `L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6000) · [Before (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6069)

```diff
-         (0, qF.e)().ke && (kk.JR.aShaderPackItem = tF.Vector4.FromArray(this.shaderPackItem(Fk, Ik)))
+         (0, iT.d)().KO && (mm.RP.aShaderPackItem = pT.Vector4.FromArray(this.shaderPackItem(Tm, fm)))
```

#### 798. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6078` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6009) · [Before (L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6078)

```diff
-         const Fk = Xk.g[this.name],
+         const Tm = hm.i[this.name],
```

#### 799. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6080` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6011) · [Before (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6080)

```diff
-         return Ik && Fk.blockModelItem ? Ik * this.bakeInScaling / (0, bk.f)(Fk) : 0
+         return fm && Tm.blockModelItem ? fm * this.bakeInScaling / (0, Xm.h)(Tm) : 0
```

#### 800. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6087-L6089` → after: `L6018-L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6018-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6018-L6020) · [Before (L6087-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6087-L6089)

```diff
-         const ik = (0, qF.e)().Xw.kp,
-           yk = null !== (Xk = vk.p[Fk]) && void 0 !== Xk ? Xk : vk.p.None;
-         ik.set(kk, "aEnchantmentColour", yk.r, yk.g, yk.b), ik.set(kk, "aEnchantmentSpeed", null !== (Tk = jk.ob[Fk]) && void 0 !== Tk ? Tk : jk.ob.None)
+         const am = (0, iT.d)().qY.YG,
+           xm = null !== (hm = Zm.t[Tm]) && void 0 !== hm ? hm : Zm.t.None;
+         am.set(mm, "aEnchantmentColour", xm.r, xm.g, xm.b), am.set(mm, "aEnchantmentSpeed", null !== (Am = om.hb[Tm]) && void 0 !== Am ? Am : om.hb.None)
```

#### 801. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6097` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6028) · [Before (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6097)

```diff
-           Ik.JR.aEnchantmentColour = null !== (Xk = vk.p[kk]) && void 0 !== Xk ? Xk : vk.p.None, Ik.JR.aEnchantmentSpeed = null !== (Tk = jk.ob[kk]) && void 0 !== Tk ? Tk : jk.ob.None, this._markForShaderPack(Ik, wF, kk)
+           fm.RP.aEnchantmentColour = null !== (hm = Zm.t[mm]) && void 0 !== hm ? hm : Zm.t.None, fm.RP.aEnchantmentSpeed = null !== (Am = om.hb[mm]) && void 0 !== Am ? Am : om.hb.None, this._markForShaderPack(fm, YT, mm)
```

#### 802. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6107-L6108` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6038-L6039) · [Before (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6107-L6108)

```diff
-           const Ik = (0, IF.n)((0, qF.e)().Xw, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return Ik.ci = dF(kk), this._attachNewMeshInstanceToParent(Ik, Fk), Ik
+           const fm = (0, fT.n)((0, iT.d)().qY, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return fm.fi = uT(mm), this._attachNewMeshInstanceToParent(fm, Tm), fm
```

#### 803. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6111-L6112` → after: `L6042-L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6042-L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6042-L6043) · [Before (L6111-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6111-L6112)

```diff
-           const Ik = (0, IF.n)((0, qF.e)().Xw, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return Ik.ci = dF(kk), this._sourceMeshLoadFailed || this._meshParents.push({
+           const fm = (0, fT.n)((0, iT.d)().qY, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return fm.fi = uT(mm), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 804. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6119` → after: `L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6050) · [Before (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6119)

```diff
-         kk.jR("aEnchantmentColour", 3), kk.jR("aEnchantmentSpeed", 1), kk.JR.aEnchantmentColour = (0, vk.j)(0, 0, 0), kk.JR.aEnchantmentSpeed = 0, (0, ck.k)(kk), (0, Wk.b)(kk), oF(kk, this.shaderPackItem(0, void 0))
+         mm.FX("aEnchantmentColour", 3), mm.FX("aEnchantmentSpeed", 1), mm.RP.aEnchantmentColour = (0, Zm.j)(0, 0, 0), mm.RP.aEnchantmentSpeed = 0, (0, rm.k)(mm), (0, sm.c)(mm), zT(mm, this.shaderPackItem(0, void 0))
```

#### 805. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6127` → after: `L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6058) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6127)

```diff
-           const Tk = Xk === Ck.k.BASE64;
+           const Am = hm === ym.o.BASE64;
```

#### 806. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6129` → after: `L6060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6060) · [Before (L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6129)

```diff
-             source: Tk ? Ik : "",
+             source: Am ? fm : "",
```

#### 807. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6156-L6157` → after: `L6087-L6088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6087-L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6087-L6088) · [Before (L6156-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6156-L6157)

```diff
-         const yk = (0, IF.j)(ik, !Fk, !1);
-         return yk.name = `${this.name}GlbModel`, yk.gw = !1, (0, rk.g)(yk, this.bakeInScaling), yk
+         const xm = (0, fT.k)(am, !Tm, !1);
+         return xm.name = `${this.name}GlbModel`, xm.xq = !1, (0, gm.g)(xm, this.bakeInScaling), xm
```

#### 808. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6162` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6093) · [Before (L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6162)

```diff
-         this.loadModel(this.Yw, !!Fk).then((kk => {
+         this.loadModel(this.Aq, !!Tm).then((mm => {
```

#### 809. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6165-L6168` → after: `L6096-L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6096-L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6096-L6099) · [Before (L6165-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6165-L6168)

```diff
-             for (const Fk of kk.material.W8) Fk.name = `${this.name}ItemMat`;
-           (0, hk.b)(kk.material, (kk => {
-             (0, iF.N)((0, iF.X)(kk)), (0, gk.b)(kk, (() => {
-               (0, iF.v)((0, iF.X)(kk), Bk.e)
+             for (const Tm of mm.material.B3) Tm.name = `${this.name}ItemMat`;
+           (0, dm.c)(mm.material, (mm => {
+             (0, aT.K)((0, aT.cb)(mm)), (0, tm.e)(mm, (() => {
+               (0, aT.w)((0, aT.cb)(mm), Mm.f)
```

#### 810. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6170` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6101) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6170)

```diff
-           })), kk.Av(!1), this._registerSourceMeshBuffers(kk), (0, hk.b)(kk.material, gk.d), this._sourceMesh = kk;
+           })), mm.Dk(!1), this._registerSourceMeshBuffers(mm), (0, dm.c)(mm.material, tm.i), this._sourceMesh = mm;
```

#### 811. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6175` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6106) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6175)

```diff
-             of this._meshParents) Fk.Hs() || this._attachNewMeshInstanceToParent(Fk, Xk);
+             of this._meshParents) Tm.aJ() || this._attachNewMeshInstanceToParent(Tm, hm);
```

#### 812. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6196-L6198` → after: `L6127-L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6127-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6127-L6129) · [Before (L6196-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6196-L6198)

```diff
-           Xw: Xk
-         } = (0, qF.e)();
-         Xk.hw(Ik, !1), (0, yF.q)(Ik, 0, 0, 0), null === Fk || void 0 === Fk || Fk(kk, Ik)
+           qY: hm
+         } = (0, iT.d)();
+         hm.Dq(fm, !1), (0, xT.q)(fm, 0, 0, 0), null === Tm || void 0 === Tm || Tm(mm, fm)
```

#### 813. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6204` → after: `L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6135) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6204)

```diff
-               Xk = Ik.yj.metadatas;
+               hm = fm.Vo.metadatas;
```

#### 814. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6207` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6138) · [Before (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6207)

```diff
-               for (const Fk in (0, ek.X)(wk.o)) {
+               for (const Tm in (0, Om.O)(Ym.v)) {
```

#### 815. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6217` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6148) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6217)

```diff
-             return null !== (Fk = AF.byRoot.get(kk)) && void 0 !== Fk ? Fk : gF
+             return null !== (Tm = LT.byRoot.get(mm)) && void 0 !== Tm ? Tm : vT
```

#### 816. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6229` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6160) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6229)

```diff
-         const Ik = (0, qF.c)().yj.metadatas[kk];
+         const fm = (0, iT.c)().Vo.metadatas[mm];
```

#### 817. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6234` → after: `L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6165) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6234)

```diff
-         return null !== (kk = (0, qF.e)().yj.J_(this.id)) && void 0 !== kk ? kk : 0
+         return null !== (mm = (0, iT.d)().Vo.R_(this.id)) && void 0 !== mm ? mm : 0
```

#### 818. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6239-L6240` → after: `L6170-L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6170-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6170-L6171) · [Before (L6239-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6239-L6240)

```diff
-         super(kk, Fk), this.cuboidShape = eF.d, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const Ik = Xk.g[kk];
+         super(mm, Tm), this.cuboidShape = OT.e, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         const fm = hm.i[mm];
```

#### 819. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6256` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6187) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6256)

```diff
-         if (this.usesBlockAtlasMaterial()) Xk = Pk.d.getBlockAtlasMaterial(kk, this.transTex, null !== (Tk = this.unlitStandaloneMesh) && void 0 !== Tk && Tk);
+         if (this.usesBlockAtlasMaterial()) hm = Im.c.getBlockAtlasMaterial(mm, this.transTex, null !== (Am = this.unlitStandaloneMesh) && void 0 !== Am && Am);
```

#### 820. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6259-L6261` → after: `L6190-L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6190-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6190-L6192) · [Before (L6259-L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6259-L6261)

```diff
-           Xk = (0, mk.e)({
-             name: `${Fk}BlockMaterial`,
-             Yw: kk,
+           hm = (0, Um.b)({
+             name: `${Tm}BlockMaterial`,
+             Aq: mm,
```

#### 821. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6267` → after: `L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6198) · [Before (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6267)

```diff
-                 transparencyMode: iF.r.alphaTest,
+                 transparencyMode: aT.s.alphaTest,
```

#### 822. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6273` → after: `L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6204) · [Before (L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6273)

```diff
-               (0, fk.c)(kk, !0), (0, iF.N)(kk)
+               (0, lm.b)(mm, !0), (0, aT.K)(mm)
```

#### 823. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6288` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6219) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6288)

```diff
-           eq: !0
+           ni: !0
```

#### 824. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6293` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6224) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6293)

```diff
-         return this._needsHeldBase(kk) ? `${Fk}|held` : Fk
+         return this._needsHeldBase(mm) ? `${Tm}|held` : Tm
```

#### 825. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6296` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6227) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6296)

```diff
-         if (!kk.eq || this._canShareThinBase()) return !1;
+         if (!mm.ni || this._canShareThinBase()) return !1;
```

#### 826. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6313-L6314` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6244-L6245) · [Before (L6313-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6313-L6314)

```diff
-         const Xk = this._perFaceAtlasIdx(Ik.eq),
-           Tk = (0, qF.e)().Xw.kp;
+         const hm = this._perFaceAtlasIdx(fm.ni),
+           Am = (0, iT.d)().qY.YG;
```

#### 827. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6318` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6249) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6318)

```diff
-         const Fk = kk ? Ak : Yk,
+         const Tm = mm ? Lm : Bm,
```

#### 828. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6325` → after: `L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6256) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6325)

```diff
-           return Fk.map((kk => Xk.x[(0, Hk.i)(Ik[Tk[kk]])]))
+           return Tm.map((mm => hm.z[(0, qm.k)(fm[Am[mm]])]))
```

#### 829. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6327` → after: `L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6258) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6327)

```diff
-         const ik = "string" === typeof Ik ? Ik : UF(Ik);
+         const am = "string" === typeof fm ? fm : HT(fm);
```

#### 830. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6329` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6260) · [Before (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6329)

```diff
-           const kk = Xk.x[(0, Hk.i)(ik)];
+           const mm = hm.z[(0, qm.k)(am)];
```

#### 831. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6345-L6347` → after: `L6276-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6276-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6276-L6278) · [Before (L6345-L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6345-L6347)

```diff
-             Xw: Tk
-           } = (0, qF.e)();
-         Tk.hw(Xk, !1);
+             qY: Am
+           } = (0, iT.d)();
+         Am.Dq(hm, !1);
```

#### 832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6349` → after: `L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6280) · [Before (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6349)

```diff
-         return (0, yF.q)(Xk, 0, 0, 0), Xk.ci.set(ik.x, ik.y, ik.z), Xk.JR.aLightLevels === (null === (kk = this._sourceMesh.JR) || void 0 === kk ? void 0 : kk.aLightLevels) && (Xk.JR.aLightLevels = (0, TF.l)()), null === Ik || void 0 === Ik || Ik(Xk, Xk), Xk
+         return (0, xT.q)(hm, 0, 0, 0), hm.fi.set(am.x, am.y, am.z), hm.RP.aLightLevels === (null === (mm = this._sourceMesh.RP) || void 0 === mm ? void 0 : mm.aLightLevels) && (hm.RP.aLightLevels = (0, AT.p)()), null === fm || void 0 === fm || fm(hm, hm), hm
```

#### 833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6355` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6286) · [Before (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6355)

```diff
-           const Fk = (0, qF.e)().Xw.mG();
+           const Tm = (0, iT.d)().qY.wG();
```

#### 834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6357` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6288) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6357)

```diff
-             materialOverride: Pk.d.getBlockAtlasMaterialForGrowing(Fk, this.transTex, null !== (kk = this.unlitStandaloneMesh) && void 0 !== kk && kk)
+             materialOverride: Im.c.getBlockAtlasMaterialForGrowing(Tm, this.transTex, null !== (mm = this.unlitStandaloneMesh) && void 0 !== mm && mm)
```

#### 835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6362-L6364` → after: `L6293-L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6293-L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6293-L6295) · [Before (L6362-L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6362-L6364)

```diff
-             Xw: Ik
-           } = (0, qF.e)();
-         return Ik.hw(Fk, !1), (0, yF.q)(Fk, 0, 0, 0), Fk
+             qY: fm
+           } = (0, iT.d)();
+         return fm.Dq(Tm, !1), (0, xT.q)(Tm, 0, 0, 0), Tm
```

#### 836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6369` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6300) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6369)

```diff
-           eq: Ik = !1,
+           ni: fm = !1,
```

#### 837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6372` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6303) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6372)

```diff
-         } = null !== kk && void 0 !== kk ? kk : {}, ik = [], yk = (0, Kk.g)(), lk = this._perFaceAtlasIdx(Ik);
+         } = null !== mm && void 0 !== mm ? mm : {}, am = [], xm = (0, Km.g)(), wm = this._perFaceAtlasIdx(fm);
```

#### 838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6376-L6377` → after: `L6307-L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6307-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6307-L6308) · [Before (L6376-L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6376-L6377)

```diff
-               Fk = (0, Kk.e)(kk, 0, yk),
-               Ik = (0, Kk.e)(kk, 1, yk);
+               Tm = (0, Km.d)(mm, 0, xm),
+               fm = (0, Km.d)(mm, 1, xm);
```

#### 839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6381-L6383` → after: `L6312-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6312-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6312-L6314) · [Before (L6381-L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6381-L6383)

```diff
-         const ak = lk ? (0, eF.t)(Xk, lk) : void 0,
-           qk = uF(`${this.name}${Ik?"Held":""}Block`, Xk, ik, ak, Tk);
-         return qk.material = null !== Fk && void 0 !== Fk ? Fk : this.meshMaterial, Fk || ((0, ck.k)(qk), (0, Wk.b)(qk), oF(qk, this.shaderPackItem(0, void 0))), qk.Av(!1), qk.gw = !1, qk
+         const Dm = wm ? (0, OT.u)(hm, wm) : void 0,
+           im = GT(`${this.name}${fm?"Held":""}Block`, hm, am, Dm, Am);
+         return im.material = null !== Tm && void 0 !== Tm ? Tm : this.meshMaterial, Tm || ((0, rm.k)(im), (0, sm.c)(im), zT(im, this.shaderPackItem(0, void 0))), im.Dk(!1), im.xq = !1, im
```

#### 840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6388` → after: `L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6319) · [Before (L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6388)

```diff
-         super(kk, Fk), this.type = "SlabBlock", this.cuboidShape = eF.h
+         super(mm, Tm), this.type = "SlabBlock", this.cuboidShape = OT.g
```

#### 841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6393` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6324) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6393)

```diff
-         super(kk, Fk), this.type = "StairsBlock", this.cuboidShape = eF.i
+         super(mm, Tm), this.type = "StairsBlock", this.cuboidShape = OT.h
```

#### 842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6399-L6401` → after: `L6330-L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6330-L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6330-L6332) · [Before (L6399-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6399-L6401)

```diff
-         super(kk, Fk), this.droppedMeshTypeScale = .8 * Lk.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * Lk.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (Ik = this.heldItemScale) && void 0 !== Ik ? Ik : 1);
-         const Tk = Xk.g[kk];
-         Tk.blockModelItem && (console.assert(void 0 !== Tk.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${kk}`), this.modelDefault = {
+         super(mm, Tm), this.droppedMeshTypeScale = .8 * Rm.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * Rm.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (fm = this.heldItemScale) && void 0 !== fm ? fm : 1);
+         const Am = hm.i[mm];
+         Am.blockModelItem && (console.assert(void 0 !== Am.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${mm}`), this.modelDefault = {
```

#### 843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6403-L6404` → after: `L6334-L6335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6334-L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6334-L6335) · [Before (L6403-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6403-L6404)

```diff
-           type: Ck.h.BLOCK
-         }, this.modelSource = xk.b.getModel(this.modelDefault.name, Ck.h.BLOCK)), this.type = "TwoDBlock"
+           type: ym.g.BLOCK
+         }, this.modelSource = Vm.b.getModel(this.modelDefault.name, ym.g.BLOCK)), this.type = "TwoDBlock"
```

#### 844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6410` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6341) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6410)

```diff
-         super(kk, Fk), this.droppedMeshTypeScale = .8 * Lk.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * Lk.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (Ik = this.heldItemScale) && void 0 !== Ik ? Ik : 1), this.type = "TwoDItem"
+         super(mm, Tm), this.droppedMeshTypeScale = .8 * Rm.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * Rm.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (fm = this.heldItemScale) && void 0 !== fm ? fm : 1), this.type = "TwoDItem"
```

#### 845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6415` → after: `L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6346) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6415)

```diff
-         super(kk, Fk), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = wk.j[kk].armourReduction
+         super(mm, Tm), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = Ym.p[mm].armourReduction
```

#### 846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6420` → after: `L6351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6351) · [Before (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6420)

```diff
-       (0, uk.j)(), qF.f.itemsClient = XI, qF.f.blocksClient = TI, qF.f.nonBlocksClient = iI
+       (0, Gm.i)(), iT.f.itemsClient = ff, iT.f.blocksClient = hf, iT.f.nonBlocksClient = Af
```

#### 847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6429-L6434` → after: `L6360-L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6360-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6360-L6365) · [Before (L6429-L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6429-L6434)

```diff
-             super(kk, Fk), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
-             const ak = wk.j[kk];
-             this.gunType = ak.gunType, this.scopeType = ak.scopeType, this.fireRate = ak.fireRate, this.fireRateWithHeldTouch = ak.fireRateWithHeldTouch, this.equipDelay = ak.equipDelay, this.damage = ak.damage, this.shotPelletCount = ak.shotPelletCount, this.msPerRound = ak.msPe … [truncated]
-             const qk = (0, mk.e)({
-                 name: `${kk}BulletMeshMaterial`,
-                 Yw: Fk,
+             super(mm, Tm), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             const Dm = Ym.p[mm];
+             this.gunType = Dm.gunType, this.scopeType = Dm.scopeType, this.fireRate = Dm.fireRate, this.fireRateWithHeldTouch = Dm.fireRateWithHeldTouch, this.equipDelay = Dm.equipDelay, this.damage = Dm.damage, this.shotPelletCount = Dm.shotPelletCount, this.msPerRound = Dm.msPe … [truncated]
+             const im = (0, Um.b)({
+                 name: `${mm}BulletMeshMaterial`,
+                 Aq: Tm,
```

#### 848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6443-L6445` → after: `L6374-L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6374-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6374-L6376) · [Before (L6443-L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6443-L6445)

```diff
-                 Xw: Lk
-               } = (0, qF.e)();
-             this.bulletCasingMesh = (0, IF.m)(Lk, `${this.name}BulletCasingMesh`, (0, aF.e)({
+                 qY: Rm
+               } = (0, iT.d)();
+             this.bulletCasingMesh = (0, fT.l)(Rm, `${this.name}BulletCasingMesh`, (0, DT.c)({
```

#### 849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6449-L6452` → after: `L6380-L6383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6380-L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6380-L6383) · [Before (L6449-L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6449-L6452)

```diff
-             })), this.bulletCasingMesh.material = qk, this.bulletCasingMesh.gw = !1;
-             const tk = (0, mk.e)({
-               name: `${kk}BulletHitBillboard`,
-               Yw: Fk,
+             })), this.bulletCasingMesh.material = im, this.bulletCasingMesh.xq = !1;
+             const pm = (0, Um.b)({
+               name: `${mm}BulletHitBillboard`,
+               Aq: Tm,
```

#### 850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6459` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6390) · [Before (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6459)

```diff
-             this.bulletHitBillboardPlane = (0, IF.m)(Lk, `${this.name}BulletHitBillboardPlane`, (0, aF.i)({
+             this.bulletHitBillboardPlane = (0, fT.l)(Rm, `${this.name}BulletHitBillboardPlane`, (0, DT.h)({
```

#### 851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6462-L6465` → after: `L6393-L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6393-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6393-L6396) · [Before (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6462-L6465)

```diff
-             })), this.bulletHitBillboardPlane.gw = !1, this.bulletHitBillboardPlane.material = tk;
-             const Zk = (0, mk.e)({
-               name: `${kk}BulletMeshMaterial`,
-               Yw: Fk,
+             })), this.bulletHitBillboardPlane.xq = !1, this.bulletHitBillboardPlane.material = pm;
+             const Em = (0, Um.b)({
+               name: `${mm}BulletMeshMaterial`,
+               Aq: Tm,
```

#### 852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6474` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6405) · [Before (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6474)

```diff
-             this.movingBulletMesh = (0, IF.m)(Lk, `${this.name}MovingBulletMesh`, (0, aF.e)({
+             this.movingBulletMesh = (0, fT.l)(Rm, `${this.name}MovingBulletMesh`, (0, DT.c)({
```

#### 853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6478` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6409) · [Before (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6478)

```diff
-             })), this.movingBulletMesh.material = Zk, this.movingBulletMesh.gw = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = Em, this.movingBulletMesh.xq = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6497` → after: `L6428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6428) · [Before (L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6497)

```diff
-             super(kk, Fk), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = wk.j[kk].harvests, this.multiplier = wk.j[kk].multiplier, this.level = wk.j[kk].level
+             super(mm, Tm), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = Ym.p[mm].harvests, this.multiplier = Ym.p[mm].multiplier, this.level = Ym.p[mm].level
```

#### 855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6504-L6505` → after: `L6435-L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6435-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6435-L6436) · [Before (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6504-L6505)

```diff
-             super(kk, Fk), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (Ik = (0, Jk.i)(kk)) && void 0 !== Ik ? Ik : [255, 255, 255];
-             const Xk = `Wood ${(0,jk.Gb)(kk)}`;
+             super(mm, Tm), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (fm = (0, jm.h)(mm)) && void 0 !== fm ? fm : [255, 255, 255];
+             const hm = `Wood ${(0,om.wb)(mm)}`;
```

#### 856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6507-L6508` → after: `L6438-L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6438-L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6438-L6439) · [Before (L6507-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6507-L6508)

```diff
-               type: Ck.k.HTTP,
-               url: this.isCustom ? `${Nk.clientSideServerUrls.staticUrl}/models/${(0,jk.dc)((0,LF.d)().gameNameWithVariation)}/${Xk}.glb` : `${Nk.clientSideServerUrls.staticUrl}/models/${Xk}.glb`
+               type: ym.o.HTTP,
+               url: this.isCustom ? `${Cm.clientSideServerUrls.staticUrl}/models/${(0,om.Pb)((0,RT.d)().gameNameWithVariation)}/${hm}.glb` : `${Cm.clientSideServerUrls.staticUrl}/models/${hm}.glb`
```

#### 857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6514` → after: `L6445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6445) · [Before (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6514)

```diff
-               Yw: Fk
+               Aq: Tm
```

#### 858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6518-L6519` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6449-L6450) · [Before (L6518-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6518-L6519)

```diff
-             } = Qk.b;
-             return (0, mk.e)({
+             } = Qm.c;
+             return (0, Um.b)({
```

#### 859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6521` → after: `L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6452) · [Before (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6521)

```diff
-               Yw: Fk,
+               Aq: Tm,
```

#### 860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6525` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6456) · [Before (L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6525)

```diff
-                   url: HF[(0, jk.Gb)(kk)],
+                   url: qT[(0, om.wb)(mm)],
```

#### 861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6528` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6459) · [Before (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6528)

```diff
-                   samplingMode: lF.i.nearestNearestMipLinear,
+                   samplingMode: wT.e.nearestNearestMipLinear,
```

#### 862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6530-L6531` → after: `L6461-L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6461-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6461-L6462) · [Before (L6530-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6530-L6531)

```diff
-                     wrapU: lF.d.clamp,
-                     wrapV: lF.d.clamp
+                     wrapU: wT.b.clamp,
+                     wrapV: wT.b.clamp
```

#### 863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6539` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6470) · [Before (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6539)

```diff
-                 (0, iF.v)(kk, dk.d, {
+                 (0, aT.w)(mm, um.b, {
```

#### 864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6546` → after: `L6477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6477) · [Before (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6546)

```diff
-             super._registerSourceMeshBuffers(kk), kk.jR("aArmourTint", 4), kk.jR("aAtlasIdx1", 1), kk.JR.aArmourTint = (0, vk.o)(...this._armourTint, 0), kk.JR.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(mm), mm.FX("aArmourTint", 4), mm.FX("aAtlasIdx1", 1), mm.RP.aArmourTint = (0, Zm.p)(...this._armourTint, 0), mm.RP.aAtlasIdx1 = 0
```

#### 865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6557` → after: `L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6488) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6557)

```diff
-             const Xk = (0, qF.e)().Xw.kp,
+             const hm = (0, iT.d)().qY.YG,
```

#### 866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6578` → after: `L6509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6509) · [Before (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6578)

```diff
-       if (kk in Xk.g) {
+       if (mm in hm.i) {
```

#### 867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6580-L6581` → after: `L6511-L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6511-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6511-L6512) · [Before (L6580-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6580-L6581)

```diff
-         const Tk = null === (yk = Xk.g[kk].model) || void 0 === yk ? void 0 : yk.split("|")[0];
-         ik = Xk.g[kk].model || Xk.g[kk].twoDBlockItem ? yI[Tk] ? new yI[Tk](kk, Ik) : new MF(kk, Ik) : new hF(kk, Ik), TI[kk] = ik, TI[Fk] = ik
+         const Am = null === (xm = hm.i[mm].model) || void 0 === xm ? void 0 : xm.split("|")[0];
+         am = hm.i[mm].model || hm.i[mm].twoDBlockItem ? af[Am] ? new af[Am](mm, fm) : new WT(mm, fm) : new UT(mm, fm), hf[mm] = am, hf[Tm] = am
```

#### 868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6586` → after: `L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6517) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6586)

```diff
-   38140: (kk, Fk, Ik) => {
+   38210: (mm, Tm, fm) => {
```

#### 869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6588-L6590` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6519-L6521) · [Before (L6588-L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6588-L6590)

```diff
-       b: () => xk,
-       e: () => ak,
-       g: () => Jk
+       d: () => Vm,
+       f: () => Dm,
+       j: () => jm
```

#### 870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6592-L6596` → after: `L6523-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6523-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6523-L6527) · [Before (L6592-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6592-L6596)

```diff
-     var Xk = Ik(37144),
-       Tk = Ik(37479),
-       ik = Ik(37896),
-       yk = Ik(37623),
-       lk = Ik(37319);
+     var hm = fm(37181),
+       Am = fm(37510),
+       am = fm(37967),
+       xm = fm(37661),
+       wm = fm(37320);
```

#### 871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6599` → after: `L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6530) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6599)

```diff
-         this.modelUrl = kk, this.container = Fk, this.adoptedNodes = Ik, this.Yw = Xk
+         this.modelUrl = mm, this.container = Tm, this.adoptedNodes = fm, this.Aq = hm
```

#### 872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6604` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6535) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6604)

```diff
-         if (!Tk) throw new Error(`Could not find root node in model: ${Xk}`);
+         if (!Am) throw new Error(`Could not find root node in model: ${hm}`);
```

#### 873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6606` → after: `L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6537) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6606)

```diff
-         Tk.ci.set(-Tk.ci.x, Tk.ci.y, Tk.ci.z), tk(Tk, ik);
+         Am.fi.set(-Am.fi.x, Am.fi.y, Am.fi.z), pm(Am, am);
```

#### 874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6616` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6547) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6616)

```diff
-         return ik.ci.set(-ik.ci.x, ik.ci.y, ik.ci.z), {
+         return am.fi.set(-am.fi.x, am.fi.y, am.fi.z), {
```

#### 875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6627` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6558) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6627)

```diff
-         if (0 === Xk.length) return void console.warn(`Mesh "${Ik}" not found in model: ${this.modelUrl}`);
+         if (0 === hm.length) return void console.warn(`Mesh "${fm}" not found in model: ${this.modelUrl}`);
```

#### 876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6629` → after: `L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6560) · [Before (L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6629)

```diff
-         if (!Tk) throw new Error(`Could not merge the meshes named ${Ik} in model: ${this.modelUrl}`);
+         if (!Am) throw new Error(`Could not merge the meshes named ${fm} in model: ${this.modelUrl}`);
```

#### 877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6643` → after: `L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6574) · [Before (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6643)

```diff
-             const kk = Zk(Ik, ik, this.Yw),
+             const mm = Em(fm, am, this.Aq),
```

#### 878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6648` → after: `L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6579) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6648)

```diff
-         else console.warn(`Node "${Ik}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${fm}" not found in model: ${this.modelUrl}`)
```

#### 879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6658` → after: `L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6589) · [Before (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6658)

```diff
-             const kk = "string" === typeof lk ? lk : lk.nodeName;
+             const mm = "string" === typeof wm ? wm : wm.nodeName;
```

#### 880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6664` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6595) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6664)

```diff
-         if (0 === qk.length) return void console.warn(`No descendant meshes under "${Xk}" to merge in model: ${this.modelUrl}`);
+         if (0 === im.length) return void console.warn(`No descendant meshes under "${hm}" to merge in model: ${this.modelUrl}`);
```

#### 881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6678` → after: `L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6609) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6678)

```diff
-         if (!wk) return void console.warn(`Merge failed for "${Xk}" in model: ${this.modelUrl}`);
+         if (!Ym) return void console.warn(`Merge failed for "${hm}" in model: ${this.modelUrl}`);
```

#### 882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6684-L6685` → after: `L6615-L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6615-L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6615-L6616) · [Before (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6684-L6685)

```diff
-           of Zk) null === jk || jk.Hs() || (jk.computeWorldMatrix(!0), ek(lk, jk), Lk(lk, Hk.multiply(jk.getWorldMatrix().clone().invert())));
-         wk.name = Tk, (0, lk.s)(wk, (() => {
+           of Em) null === om || om.aJ() || (om.computeWorldMatrix(!0), Om(wm, om), Rm(wm, qm.multiply(om.getWorldMatrix().clone().invert())));
+         Ym.name = Am, (0, wm.t)(Ym, (() => {
```

#### 883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6694` → after: `L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6625) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6694)

```diff
-         return null !== (Fk = null !== (Ik = this.container.transformNodes.find((Fk => Fk.name === kk))) && void 0 !== Ik ? Ik : this.container.meshes.find((Fk => Fk.name === kk))) && void 0 !== Fk ? Fk : null
+         return null !== (Tm = null !== (fm = this.container.transformNodes.find((Tm => Tm.name === mm))) && void 0 !== fm ? fm : this.container.meshes.find((Tm => Tm.name === mm))) && void 0 !== Tm ? Tm : null
```

#### 884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6703` → after: `L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6634) · [Before (L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6703)

```diff
-         for (const Fk of [...kk]) Fk.Hs() || this.adoptedNodes.has(Fk) || Fk.dispose()
+         for (const Tm of [...mm]) Tm.aJ() || this.adoptedNodes.has(Tm) || Tm.dispose()
```

#### 885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6712` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6643) · [Before (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6712)

```diff
-       const Ik = new Xk.Ge,
+       const fm = new hm.WO,
```

#### 886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6714-L6715` → after: `L6645-L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6645-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6645-L6646) · [Before (L6714-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6714-L6715)

```diff
-         ik = new Xk.Ge;
-       Fk.decompose(ik, Tk, Ik), kk.position = Ik, kk.rotationQuaternion = Tk, kk.ci = ik
+         am = new hm.WO;
+       Tm.decompose(am, Am, fm), mm.position = fm, mm.rotationQuaternion = Am, mm.fi = am
```

#### 887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6720` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6651) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6720)

```diff
-       Fk.position = kk.position.clone(), Ik ? Fk.rotationQuaternion = new Xk.Quaternion(Ik.x, Ik.y, Ik.z, Ik.w) : Fk.rotation = kk.rotation.clone(), Fk.ci = kk.ci.clone()
+       Tm.position = mm.position.clone(), fm ? Tm.rotationQuaternion = new hm.Quaternion(fm.x, fm.y, fm.z, fm.w) : Tm.rotation = mm.rotation.clone(), Tm.fi = mm.fi.clone()
```

#### 888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6724` → after: `L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6655) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6724)

```diff
-       return (0, Tk.i)(Fk) ? (0, ik.n)(Fk.Xw, kk) : new((0, yk.b)().TransformNode)(kk, Ik)
+       return (0, Am.h)(Tm) ? (0, am.n)(Tm.qY, mm) : new((0, xm.e)().TransformNode)(mm, fm)
```

#### 889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6728` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6659) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6728)

```diff
-       return (0, Tk.i)(kk[0]) ? (0, ik.j)(kk, !1) : (0, lk.t)(kk)
+       return (0, Am.h)(mm[0]) ? (0, am.k)(mm, !1) : (0, wm.w)(mm)
```

#### 890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6736` → after: `L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6667) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6736)

```diff
-       return ["Mesh", "LiteMesh"].includes(kk.getClassName()) && kk.getTotalVertices() > 0 ? kk : null
+       return ["Mesh", "LiteMesh"].includes(mm.getClassName()) && mm.getTotalVertices() > 0 ? mm : null
```

#### 891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6756` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6687) · [Before (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6756)

```diff
-   37909: (kk, Fk, Ik) => {
+   37974: (mm, Tm, fm) => {
```

#### 892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6760-L6764` → after: `L6692-L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6692-L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6692-L6696) · [Before (L6760-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6760-L6764)

```diff
-       i: () => Ek,
-       k: () => uk,
-       o: () => Nk,
-       s: () => vk,
-       t: () => Rk,
+       f: () => km,
+       g: () => Gm,
+       j: () => Cm,
+       n: () => Zm,
+       q: () => Pm,
```

#### 893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6766-L6767` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6698) · [Before (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6766-L6767)

```diff
-       v: () => Gk,
-       z: () => zk
+       y: () => em
```

#### 894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6769-L6775` → after: `L6700-L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6700-L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6700-L6706) · [Before (L6769-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6769-L6775)

```diff
-     var Xk = Ik(4210),
-       Tk = Ik(9183),
-       ik = Ik(187),
-       yk = Ik(1231),
-       lk = Ik(1844),
-       ak = Ik(3089),
-       qk = Ik(354),
+     var hm = fm(4171),
+       Am = fm(9141),
+       am = fm(198),
+       xm = fm(1247),
+       wm = fm(1877),
+       Dm = fm(3148),
+       im = fm(362),
```

#### 895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6777-L6782` → after: `L6708-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6708-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6708-L6713) · [Before (L6777-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6777-L6782)

```diff
-       tk = Ik(2700),
-       Zk = Ik(37855),
-       jk = Ik(37277),
-       ek = Ik(37144),
-       wk = Ik(628),
-       Hk = Ik(37913);
+       pm = fm(2760),
+       Em = fm(37922),
+       om = fm(37290),
+       Om = fm(37181),
+       Ym = fm(653),
+       qm = fm(37982);
```

#### 896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6790-L6792` → after: `L6721-L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6721-L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6721-L6723) · [Before (L6790-L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6790-L6792)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.qZ = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.qZ = kk;
-         const Fk = kk.Xw.kR("breakingParticles", 430);
-         this.pSystem = Fk, Fk.texture = (0, jk.t)(kk.Xw.mG(), Kk), Fk.blendMode = Xk.d.Standard, this.pSystem.addColorGradient(1, (0, Zk.o)(255, 255, 255, Qk), (0, Zk.o)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, Qk, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.IE = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.IE = mm;
+         const Tm = mm.qY.yX("breakingParticles", 430);
+         this.pSystem = Tm, Tm.texture = (0, om.q)(mm.qY.wG(), Km), Tm.blendMode = hm.g.Standard, this.pSystem.addColorGradient(1, (0, Em.p)(255, 255, 255, Qm), (0, Em.p)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, Qm, 1), this.pSy … [truncated]
```

#### 897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6795-L6796` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6726-L6727) · [Before (L6795-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6795-L6796)

```diff
-         if (!kk || null === this.qZ.vkk) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const Fk = this.qZ.vkk,
+         if (!mm || null === this.IE.zmm) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const Tm = this.IE.zmm,
```

#### 898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6800-L6801` → after: `L6731-L6732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6731-L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6731-L6732) · [Before (L6800-L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6800-L6801)

```diff
-           } = (0, Hk.b)(Fk.position, Tk.g[Fk.YM].Re, 0, this.boxWidth);
-         (0, Zk.q)(this.pSystem, Ik, Xk), this.updateParticleSystemColour();
+           } = (0, qm.d)(Tm.position, Am.i[Tm.XF].AO, 0, this.boxWidth);
+         (0, Em.u)(this.pSystem, fm, hm), this.updateParticleSystemColour();
```

#### 899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6804` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6735) · [Before (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6804)

```diff
-         ik.x = this.qZ.vkk.normal[0] + 1, ik.y = this.qZ.vkk.normal[1] + 1, ik.z = this.qZ.vkk.normal[2] + 1, yk.x = this.qZ.vkk.normal[0] - 1, yk.y = this.qZ.vkk.normal[1] - 1, yk.z = this.qZ.vkk.normal[2] - 1, 0 !== this.qZ.vkk.normal[0] ? (ik.x = this.qZ.vkk.normal[0], yk.x =  … [truncated]
+         am.x = this.IE.zmm.normal[0] + 1, am.y = this.IE.zmm.normal[1] + 1, am.z = this.IE.zmm.normal[2] + 1, xm.x = this.IE.zmm.normal[0] - 1, xm.y = this.IE.zmm.normal[1] - 1, xm.z = this.IE.zmm.normal[2] - 1, 0 !== this.IE.zmm.normal[0] ? (am.x = this.IE.zmm.normal[0], xm.x =  … [truncated]
```

#### 900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6807` → after: `L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6738) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6807)

```diff
-         const kk = this.qZ.QJ(this.qZ.vkk.position);
+         const mm = this.IE.XV(this.IE.zmm.position);
```

#### 901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6809` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6740) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6809)

```diff
-         const Fk = sk.getUniqueColoursForParticleSystem(this.qZ.vkk.position);
+         const Tm = nm.getUniqueColoursForParticleSystem(this.IE.zmm.position);
```

#### 902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6819` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6750) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6819)

```diff
-         kk.addRampGradient(0, (0, Zk.f)(Xk));
+         mm.addRampGradient(0, (0, Em.g)(hm));
```

#### 903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6823` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6754) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6823)

```diff
-           kk.addRampGradient(ik / Fk.length - 1e-4, (0, Zk.f)(Ik)), kk.addRampGradient(ik / Fk.length, (0, Zk.f)(Xk))
+           mm.addRampGradient(am / Tm.length - 1e-4, (0, Em.g)(fm)), mm.addRampGradient(am / Tm.length, (0, Em.g)(hm))
```

#### 904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6826` → after: `L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6757) · [Before (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6826)

```diff
-         kk.addRampGradient(1, (0, Zk.f)(Tk))
+         mm.addRampGradient(1, (0, Em.g)(Am))
```

#### 905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6829` → after: `L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6760) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6829)

```diff
-         const Fk = (0, tk.e)().QJ(kk);
+         const Tm = (0, pm.d)().XV(mm);
```

#### 906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6831` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6762) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6831)

```diff
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(kk)}`).stack)
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(mm)}`).stack)
```

#### 907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6840-L6845` → after: `L6771-L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6771-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6771-L6776) · [Before (L6840-L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6840-L6845)

```diff
-       const Fk = kk.Xw.kR("sprintParticles", 50);
-       Fk.texture = (0, jk.t)(kk.Xw.mG(), Vk), Fk.blendMode = Xk.d.Standard, Fk.addColorGradient(0, (0, Zk.o)(213, 237, 255, 1), (0, Zk.o)(109, 170, 238, 1)), Fk.addColorGradient(.2, (0, Zk.o)(213, 237, 255, 1), (0, Zk.o)(109, 170, 238, 1)), Fk.addColorGradient(1, (0, Zk.o)(213, 2 … [truncated]
-       Fk.minLifeTime = .2, Fk.maxLifeTime = .4, Fk.minEmitPower = 30, Fk.maxEmitPower = 50, Fk.emitRate = 5, Fk.gravity = new ek.Ge(0, -100, 0), Fk.minSize = .15, Fk.maxSize = .3, Fk.addVelocityGradient(0, .075, .15), Fk.addVelocityGradient(1, .075, .15), (0, Zk.w)(kk, Fk), Fk.cr … [truncated]
-       const Ik = kk.Xw.kR("Gi", 50);
-       Ik.texture = (0, jk.t)(kk.Xw.mG(), Sk), Ik.blendMode = Xk.d.Standard, Ik.addColorGradient(0, (0, Zk.o)(255, 167, 0, 1), (0, Zk.o)(255, 103, 0, 1)), Ik.addColorGradient(.2, (0, Zk.o)(255, 167, 0, 1), (0, Zk.o)(255, 103, 0, 1)), Ik.addColorGradient(1, (0, Zk.o)(255, 167, 0, 0 … [truncated]
-       Ik.minLifeTime = .15, Ik.maxLifeTime = .3, Ik.minEmitPower = 30, Ik.maxEmitPower = 50, Ik.emitRate = 5, Ik.gravity = new ek.Ge(0, -100, 0), Ik.minSize = .15, Ik.maxSize = .3, Ik.addVelocityGradient(0, .075, .15), Ik.addVelocityGradient(1, .075, .15), (0, Zk.w)(kk, Ik), Ik.c … [truncated]
+       const Tm = mm.qY.yX("sprintParticles", 50);
+       Tm.texture = (0, om.q)(mm.qY.wG(), Jm), Tm.blendMode = hm.g.Standard, Tm.addColorGradient(0, (0, Em.p)(213, 237, 255, 1), (0, Em.p)(109, 170, 238, 1)), Tm.addColorGradient(.2, (0, Em.p)(213, 237, 255, 1), (0, Em.p)(109, 170, 238, 1)), Tm.addColorGradient(1, (0, Em.p)(213, 2 … [truncated]
+       Tm.minLifeTime = .2, Tm.maxLifeTime = .4, Tm.minEmitPower = 30, Tm.maxEmitPower = 50, Tm.emitRate = 5, Tm.gravity = new Om.WO(0, -100, 0), Tm.minSize = .15, Tm.maxSize = .3, Tm.addVelocityGradient(0, .075, .15), Tm.addVelocityGradient(1, .075, .15), (0, Em.z)(mm, Tm), Tm.cr … [truncated]
+       const fm = mm.qY.yX("ra", 50);
+       fm.texture = (0, om.q)(mm.qY.wG(), zm), fm.blendMode = hm.g.Standard, fm.addColorGradient(0, (0, Em.p)(255, 167, 0, 1), (0, Em.p)(255, 103, 0, 1)), fm.addColorGradient(.2, (0, Em.p)(255, 167, 0, 1), (0, Em.p)(255, 103, 0, 1)), fm.addColorGradient(1, (0, Em.p)(255, 167, 0, 0 … [truncated]
+       fm.minLifeTime = .15, fm.maxLifeTime = .3, fm.minEmitPower = 30, fm.maxEmitPower = 50, fm.emitRate = 5, fm.gravity = new Om.WO(0, -100, 0), fm.minSize = .15, fm.maxSize = .3, fm.addVelocityGradient(0, .075, .15), fm.addVelocityGradient(1, .075, .15), (0, Em.z)(mm, fm), fm.c … [truncated]
```

#### 908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6867` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6798) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6867)

```diff
-         blendMode: Xk.d.Standard
+         blendMode: hm.g.Standard
```

#### 909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6904` → after: `L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6835) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6904)

```diff
-         blendMode: Xk.d.Standard
+         blendMode: hm.g.Standard
```

#### 910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6941` → after: `L6872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6872) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6941)

```diff
-         blendMode: Xk.d.Standard
+         blendMode: hm.g.Standard
```

#### 911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6946` → after: `L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6877) · [Before (L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6946)

```diff
-         this.pSystem = kk, this.maxLifetimeSecs = Fk, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.ee = !1, kk.manualEmitCount = 0
+         this.pSystem = mm, this.maxLifetimeSecs = Tm, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.PO = !1, mm.manualEmitCount = 0
```

#### 912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6949` → after: `L6880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6880) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6949)

```diff
-         this.ee || (this.pSystem.manualEmitCount = kk, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.PO || (this.pSystem.manualEmitCount = mm, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6952` → after: `L6883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6883) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6952)

```diff
-         this.ee = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.PO = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6964` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6895) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6964)

```diff
-       (0, Zk.w)(kk, Fk.pSystem), (0, Zk.s)(Fk.pSystem, Ik), Fk.emitAmount(Xk)
+       (0, Em.z)(mm, Tm.pSystem), (0, Em.y)(Tm.pSystem, fm), Tm.emitAmount(hm)
```

#### 915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6966` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6897) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6966)

```diff
-     const bk = (0, Tk.j)("Fat Brown Mushroom");
+     const Xm = (0, Am.k)("Fat Brown Mushroom");
```

#### 916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6977` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6908) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6977)

```diff
-       const ak = kk.MJ.OJ(kk.oR);
+       const Dm = mm.qI.rV(mm.xH);
```

#### 917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6980` → after: `L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6911) · [Before (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6980)

```diff
-         const kk = 1 === Ik[1] ? ik.f.NH - .4 : 0;
+         const mm = 1 === fm[1] ? am.f.gq - .4 : 0;
```

#### 918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6988` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6919) · [Before (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L6988)

```diff
-       const tk = Xk ? Ok : nk;
+       const pm = hm ? bm : Sm;
```

#### 919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7009` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6940) · [Before (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7009)

```diff
-         this.qZ = kk, this.cfg = Ik, this.pool = [], this.currentIndex = 0;
+         this.IE = mm, this.cfg = fm, this.pool = [], this.currentIndex = 0;
```

#### 920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7020` → after: `L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6951) · [Before (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7020)

```diff
-         const ek = this.qZ.camera.OJ();
+         const Om = this.IE.camera.rV();
```

#### 921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7022` → after: `L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6953) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7022)

```diff
-         const wk = null !== (Ik = Fk.hideDist) && void 0 !== Ik ? Ik : this.cfg.hideDist;
+         const Ym = null !== (fm = Tm.hideDist) && void 0 !== fm ? fm : this.cfg.hideDist;
```

#### 922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7027` → after: `L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6958) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7027)

```diff
-         (0, Zk.q)(Kk, xk, Pk), Kk.minEmitPower = null !== (Xk = Fk.minEmitPower) && void 0 !== Xk ? Xk : Kk.minEmitPower, Kk.maxEmitPower = null !== (Tk = Fk.maxEmitPower) && void 0 !== Tk ? Tk : Kk.maxEmitPower, Kk.minSize = null !== (ik = Fk.minSize) && void 0 !== ik ? ik : Kk. … [truncated]
+         (0, Em.u)(Km, Vm, Im), Km.minEmitPower = null !== (hm = Tm.minEmitPower) && void 0 !== hm ? hm : Km.minEmitPower, Km.maxEmitPower = null !== (Am = Tm.maxEmitPower) && void 0 !== Am ? Am : Km.maxEmitPower, Km.minSize = null !== (am = Tm.minSize) && void 0 !== am ? am : Km. … [truncated]
```

#### 923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7031` → after: `L6962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6962) · [Before (L7031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7031)

```diff
-           Ik = this.qZ.Xw.kR(`particlePool_${kk}`, 50),
+           fm = this.IE.qY.yX(`particlePool_${mm}`, 50),
```

#### 924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7033` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6964) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7033)

```diff
-         Ik.texture = (0, jk.t)(this.qZ.Xw.mG(), Xk), Ik.blendMode = Fk.blendMode, Ik.minLifeTime = Fk.minLifeTime, Ik.maxLifeTime = Fk.maxLifeTime, Ik.minEmitPower = Fk.minEmitPower, Ik.maxEmitPower = Fk.maxEmitPower, Ik.minSize = Fk.minSize, Ik.maxSize = Fk.maxSize, Ik.gravity = … [truncated]
+         fm.texture = (0, om.q)(this.IE.qY.wG(), hm), fm.blendMode = Tm.blendMode, fm.minLifeTime = Tm.minLifeTime, fm.maxLifeTime = Tm.maxLifeTime, fm.minEmitPower = Tm.minEmitPower, fm.maxEmitPower = Tm.maxEmitPower, fm.minSize = Tm.minSize, fm.maxSize = Tm.maxSize, fm.gravity = … [truncated]
```

#### 925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7035` → after: `L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6966) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7035)

```diff
-         this.applyColorGradients(Ik, Fk.colorGradients), (0, Zk.w)(this.qZ, Ik), Ik.createBoxEmitter(new ek.Ge(Math.min(Fk.dir1[0], Fk.dir2[0]), Math.min(Fk.dir1[1], Fk.dir2[1]), Math.min(Fk.dir1[2], Fk.dir2[2])), new ek.Ge(Math.max(Fk.dir1[0], Fk.dir2[0]), Math.max(Fk.dir1[1], F … [truncated]
+         this.applyColorGradients(fm, Tm.colorGradients), (0, Em.z)(this.IE, fm), fm.createBoxEmitter(new Om.WO(Math.min(Tm.dir1[0], Tm.dir2[0]), Math.min(Tm.dir1[1], Tm.dir2[1]), Math.min(Tm.dir1[2], Tm.dir2[2])), new Om.WO(Math.max(Tm.dir1[0], Tm.dir2[0]), Math.max(Tm.dir1[1], T … [truncated]
```

#### 926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7045` → after: `L6976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6976) · [Before (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7045)

```diff
-             const Fk = (0, Zk.o)(ik.color[0], ik.color[1], ik.color[2], 1);
+             const Tm = (0, Em.p)(am.color[0], am.color[1], am.color[2], 1);
```

#### 927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7049-L7050` → after: `L6980-L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6980-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6980-L6981) · [Before (L7049-L7050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7049-L7050)

```diff
-             const Fk = (0, Zk.o)(ik.minColor[0], ik.minColor[1], ik.minColor[2], null !== (Xk = ik.minColor[3]) && void 0 !== Xk ? Xk : 1),
-               Ik = (0, Zk.o)(ik.maxColor[0], ik.maxColor[1], ik.maxColor[2], null !== (Tk = ik.maxColor[3]) && void 0 !== Tk ? Tk : 1);
+             const Tm = (0, Em.p)(am.minColor[0], am.minColor[1], am.minColor[2], null !== (hm = am.minColor[3]) && void 0 !== hm ? hm : 1),
+               fm = (0, Em.p)(am.maxColor[0], am.maxColor[1], am.maxColor[2], null !== (Am = am.maxColor[3]) && void 0 !== Am ? Am : 1);
```

#### 928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7057` → after: `L6988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6988) · [Before (L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7057)

```diff
-       if (!(0, wk.Q)(Fk.hideDist)) {
+       if (!(0, Ym.H)(Tm.hideDist)) {
```

#### 929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7059-L7060` → after: `L6990-L6991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6990-L6991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6990-L6991) · [Before (L7059-L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7059-L7060)

```diff
-         for (let kk = 0; kk < 3; kk++) Ik.push((0, lk.u)(Fk.pos1[kk], Fk.pos2[kk], .5));
-         const Xk = kk.MJ.OJ(kk.oR),
+         for (let mm = 0; mm < 3; mm++) fm.push((0, wm.z)(Tm.pos1[mm], Tm.pos2[mm], .5));
+         const hm = mm.qI.rV(mm.xH),
```

#### 930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7067` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L6998) · [Before (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7067)

```diff
-   37797: (kk, Fk, Ik) => {
+   37841: (mm, Tm, fm) => {
```

#### 931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7069` → after: `L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7000) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7069)

```diff
-       d: () => Jk
+       c: () => jm
```

#### 932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7071-L7083` → after: `L7002-L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7002-L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7002-L7014) · [Before (L7071-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7071-L7083)

```diff
-     var Xk = Ik(37259),
-       Tk = Ik(37813),
-       ik = Ik(37832),
-       yk = Ik(37457),
-       lk = Ik(37821),
-       ak = Ik(37835),
-       qk = Ik(3089),
-       Lk = Ik(37805),
-       tk = Ik(37801),
-       Zk = Ik(37236),
-       jk = Ik(37352),
-       ek = Ik(37365),
-       wk = Ik(2700);
+     var hm = fm(37276),
+       Am = fm(37864),
+       am = fm(37903),
+       xm = fm(37479),
+       wm = fm(37880),
+       Dm = fm(37905),
+       im = fm(3148),
+       Rm = fm(37856),
+       pm = fm(37850),
+       Em = fm(37250),
+       om = fm(37345),
+       Om = fm(37357),
+       Ym = fm(2760);
```

#### 933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7094-L7095` → after: `L7025-L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7025-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7025-L7026) · [Before (L7094-L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7094-L7095)

```diff
-           ambientLevel: tk.b.ambient,
-           diffuseLevel: tk.b.diffuse
+           ambientLevel: pm.c.ambient,
+           diffuseLevel: pm.c.diffuse
```

#### 934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7116` → after: `L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7047) · [Before (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7116)

```diff
-           alpha: Lk.h
+           alpha: Rm.l
```

#### 935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7133-L7135` → after: `L7064-L7066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7064-L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7064-L7066) · [Before (L7133-L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7133-L7135)

```diff
-         } = (0, jk.e)({
-           name: `${sk}${tk}`,
-           Yw: Fk,
+         } = (0, om.b)({
+           name: `${nm}${pm}`,
+           Aq: Tm,
```

#### 936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7138-L7140` → after: `L7069-L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7069-L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7069-L7071) · [Before (L7138-L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7138-L7140)

```diff
-         Hk && (0, Xk.N)(Vk);
-         const Sk = qk.b.getBlockAtlasArr().map((kk => (0, Tk.h)(kk, Fk, Ik)));
-         if ((0, jk.g)(zk, {
+         qm && (0, hm.K)(Jm);
+         const zm = im.b.getBlockAtlasArr().map((mm => (0, Am.g)(mm, Tm, fm)));
+         if ((0, om.e)(cm, {
```

#### 937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7142` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7073) · [Before (L7142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7142)

```diff
-               transparencyMode: Xk.r.alphaTest,
+               transparencyMode: hm.s.alphaTest,
```

#### 938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7156` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7087) · [Before (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7156)

```diff
-               transparencyMode: Xk.r.alphaBlend
+               transparencyMode: hm.s.alphaBlend
```

#### 939. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7158` → after: `L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7089) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7158)

```diff
-           }), Jk && (0, yk.c)(Vk, (0, wk.e)().Xw), xk && (0, Zk.c)(Vk, !0), Sk.length > 0) {
+           }), jm && (0, xm.e)(Jm, (0, Ym.d)().qY), Vm && (0, Em.b)(Jm, !0), zm.length > 0) {
```

#### 940. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7164` → after: `L7095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7095) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7164)

```diff
-           (0, Xk.v)(Vk, lk.l, (0, ik.f)(kk, Sk, void 0, this.Lw(), !1))
+           (0, hm.w)(Jm, wm.j, (0, am.e)(mm, zm, void 0, this.cY(), !1))
```

#### 941. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7166` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7097) · [Before (L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7166)

```diff
-         return (0, ek.n)(zk), kk[sk] = zk, zk
+         return (0, Om.q)(cm), mm[nm] = cm, cm
```

#### 942. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7175` → after: `L7106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7106) · [Before (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7175)

```diff
-     (0, ak.g)(Hk);
+     (0, Dm.k)(qm);
```

#### 943. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7178` → after: `L7109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7109) · [Before (L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7178)

```diff
-   38088: (kk, Fk, Ik) => {
+   38140: (mm, Tm, fm) => {
```

#### 944. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7180-L7181` → after: `L7111-L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7111-L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7111-L7112) · [Before (L7180-L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7180-L7181)

```diff
-       d: () => fk,
-       h: () => dk
+       b: () => lm,
+       f: () => um
```

#### 945. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7183` → after: `L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7114) · [Before (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7183)

```diff
-     var Xk = Ik(37424);
+     var hm = fm(37437);
```

#### 946. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7204` → after: `L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7135) · [Before (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7204)

```diff
-     var yk = Ik(37209);
+     var xm = fm(37230);
```

#### 947. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7232-L7233` → after: `L7163-L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7163-L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7163-L7164) · [Before (L7232-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7232-L7233)

```diff
-             Xk = Number.isNaN(Xk) ? kk : Xk, Fk += this.childWeights[Tk], Ik += this.childWeights[Tk] * kk
-           } return Fk > 0 ? Ik / Fk : Number.isNaN(Xk) ? 0 : Xk
+             hm = Number.isNaN(hm) ? mm : hm, Tm += this.childWeights[Am], fm += this.childWeights[Am] * mm
+           } return Tm > 0 ? fm / Tm : Number.isNaN(hm) ? 0 : hm
```

#### 948. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7245` → after: `L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7176) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7245)

```diff
-         Xk = Ik > 0 ? Xk / Ik : 1 / Tk;
+         hm = fm > 0 ? hm / fm : 1 / Am;
```

#### 949. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7277` → after: `L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7208) · [Before (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7277)

```diff
-         yk !== (null !== (Xk = null === (Tk = this.current) || void 0 === Tk ? void 0 : Tk.state) && void 0 !== Xk ? Xk : null) && (this.current = null === yk ? null : this.enter(yk, ik)), this.updateWeights(Fk, Ik)
+         xm !== (null !== (hm = null === (Am = this.current) || void 0 === Am ? void 0 : Am.state) && void 0 !== hm ? hm : null) && (this.current = null === xm ? null : this.enter(xm, am)), this.updateWeights(Tm, fm)
```

#### 950. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7292` → after: `L7223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7223) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7292)

```diff
-           const kk = this.instances.reduce(((kk, Fk) => Fk !== Xk && (kk === Xk || Fk.weight < kk.weight) ? Fk : kk));
+           const mm = this.instances.reduce(((mm, Tm) => Tm !== hm && (mm === hm || Tm.weight < mm.weight) ? Tm : mm));
```

#### 951. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7307` → after: `L7238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7238) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7307)

```diff
-         for (const tk of this.instances) tk.weight = tk === Xk ? yk : tk.weight * qk, (tk === Xk || tk.weight > lk) && (this.instances[Lk++] = tk);
+         for (const pm of this.instances) pm.weight = pm === hm ? xm : pm.weight * im, (pm === hm || pm.weight > wm) && (this.instances[Rm++] = pm);
```

#### 952. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7314` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7245) · [Before (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7314)

```diff
-         this.inputs = new Float64Array(Xk.l.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(hm.h.Count), this.states = [], this.sleptSeconds = 0
```

#### 953. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7317` → after: `L7248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7248) · [Before (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7317)

```diff
-         for (let Ik = 0; Ik < Xk.l.Count; Ik++) this.inputs[Ik] = kk[Ik];
+         for (let fm = 0; fm < hm.h.Count; fm++) this.inputs[fm] = mm[fm];
```

#### 954. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7363` → after: `L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7294) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7363)

```diff
-       Jk = Ik(37427);
+       jm = fm(37441);
```

#### 955. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7381` → after: `L7312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7312) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7381)

```diff
-         return null !== (Fk = this.indexByLowerName.get(kk.toLowerCase())) && void 0 !== Fk ? Fk : -1
+         return null !== (Tm = this.indexByLowerName.get(mm.toLowerCase())) && void 0 !== Tm ? Tm : -1
```

#### 956. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7385` → after: `L7316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7316) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7385)

```diff
-       Qk = Ik(37409);
+       Qm = fm(37411);
```

#### 957. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7398` → after: `L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7329) · [Before (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7398)

```diff
-         return kk === Qk.g.Once && (Ik > 0 ? this.elapsed >= Xk : this.elapsed > Xk)
+         return mm === Qm.i.Once && (fm > 0 ? this.elapsed >= hm : this.elapsed > hm)
```

#### 958. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7429` → after: `L7360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7360) · [Before (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7429)

```diff
-           Ik.elapsed < Fk.startDelaySeconds || (Ik.weight = Ik.fadeInSeconds > 0 ? Math.min(1, Ik.weight + kk / Ik.fadeInSeconds) : 1, Fk.loop === Qk.g.Once && Ik.weight >= 1 && Ik.elapsed >= Fk.startDelaySeconds + Fk.lengthSeconds - Ik.fadeOutSeconds * Ik.speed && (Ik.stopping = … [truncated]
+           fm.elapsed < Tm.startDelaySeconds || (fm.weight = fm.fadeInSeconds > 0 ? Math.min(1, fm.weight + mm / fm.fadeInSeconds) : 1, Tm.loop === Qm.i.Once && fm.weight >= 1 && fm.elapsed >= Tm.startDelaySeconds + Tm.lengthSeconds - fm.fadeOutSeconds * fm.speed && (fm.stopping = … [truncated]
```

#### 959. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7441-L7442` → after: `L7372-L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7372-L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7372-L7373) · [Before (L7441-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7441-L7442)

```diff
-     var zk = Ik(37417),
-       Sk = Ik(37429);
+     var cm = fm(37423),
+       zm = fm(37446);
```

#### 960. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7483` → after: `L7414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7414) · [Before (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7483)

```diff
-             const Ik = Xk && yk > 1 ? Fk / yk : Fk;
+             const fm = hm && xm > 1 ? Tm / xm : Tm;
```

#### 961. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7501` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7432) · [Before (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7501)

```diff
-       return Number.isNaN(kk) ? Ik : Math.min(Fk, Math.max(-Fk, kk))
+       return Number.isNaN(mm) ? fm : Math.min(Tm, Math.max(-Tm, mm))
```

#### 962. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7503` → after: `L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7434) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7503)

```diff
-     var pk = Ik(37415);
+     var Nm = fm(37417);
```

#### 963. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7510-L7511` → after: `L7441-L7442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7441-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7441-L7442) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7510-L7511)

```diff
-         this.pose = new Ok(Ik), this.accumulator = new nk(Ik), this.inputs = new Float64Array(Xk.l.Count + Fk.filters.length), this.layers = Fk.layers.map(((Fk, Ik) => new qk(Fk, kk.layerMasks[Ik]))), this.runtimes = Fk.pools.map((kk => ({
-           queries: new Float64Array(pk.i.Count),
+         this.pose = new bm(fm), this.accumulator = new Sm(fm), this.inputs = new Float64Array(hm.h.Count + Tm.filters.length), this.layers = Tm.layers.map(((Tm, fm) => new im(Tm, mm.layerMasks[fm]))), this.runtimes = Tm.pools.map((mm => ({
+           queries: new Float64Array(Nm.e.Count),
```

#### 964. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7515` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7446) · [Before (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7515)

```diff
-           return null !== (Ik = kk.variables.slots.get(Fk.name)) && void 0 !== Ik ? Ik : -1
+           return null !== (fm = mm.variables.slots.get(Tm.name)) && void 0 !== fm ? fm : -1
```

#### 965. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7531` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7462) · [Before (L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7531)

```diff
-         this.inputs[kk] = Number.isFinite(Fk) ? Fk : 0
+         this.inputs[mm] = Number.isFinite(Tm) ? Tm : 0
```

#### 966. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7563` → after: `L7494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7494) · [Before (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7563)

```diff
-         } = lk, Lk = Ck(Ik, 0, 1), tk = (Lk > 0 || 0 === yk ? ak.startDelaySeconds + Lk * ak.lengthSeconds : 0) + Ck(Tk, 0, Uk) * yk, Zk = new sk(uk + ak.id, ak, qk, Kk.j.Add, null, ik, ik, yk, tk);
+         } = wm, Rm = ym(fm, 0, 1), pm = (Rm > 0 || 0 === xm ? Dm.startDelaySeconds + Rm * Dm.lengthSeconds : 0) + ym(Am, 0, Hm) * xm, Em = new nm(Gm + Dm.id, Dm, im, Km.e.Add, null, am, am, xm, pm);
```

#### 967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7582` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7513) · [Before (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7582)

```diff
-         const Ik = Math.max(0, Number.isFinite(kk) ? kk : 0);
+         const fm = Math.max(0, Number.isFinite(mm) ? mm : 0);
```

#### 968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7597` → after: `L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7528) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7597)

```diff
-               for (let Ik = 0; Ik < kk.length; Ik++) Fk[Xk.l.Count + Ik] = (0, Xk.n)(kk[Ik], Fk)
+               for (let fm = 0; fm < mm.length; fm++) Tm[hm.h.Count + fm] = (0, hm.k)(mm[fm], Tm)
```

#### 969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7615-L7616` → after: `L7546-L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7546-L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7546-L7547) · [Before (L7615-L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7615-L7616)

```diff
-               const Tk = (0, Xk.n)(kk[Ik], Fk);
-               if (Math.abs(Fk[Xk.l.Count + Ik] - Tk) > 1e-6 * Math.max(1, Math.abs(Tk))) return !1
+               const Am = (0, hm.k)(mm[fm], Tm);
+               if (Math.abs(Tm[hm.h.Count + fm] - Am) > 1e-6 * Math.max(1, Math.abs(Am))) return !1
```

#### 970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7629-L7630` → after: `L7560-L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7560-L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7560-L7561) · [Before (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7629-L7630)

```diff
-             lk = (0, Xk.n)(ik, this.inputs),
-             ak = Xk.l.Count + Tk,
+             wm = (0, hm.k)(am, this.inputs),
+             Dm = hm.h.Count + Am,
```

#### 971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7633` → after: `L7564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7564) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7633)

```diff
-           this.inputs[ak] = Fk ? lk : qk + (lk - qk) * (0, yk.n)(Lk, kk)
+           this.inputs[Dm] = Tm ? wm : im + (wm - im) * (0, xm.n)(Rm, mm)
```

#### 972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7641` → after: `L7572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7572) · [Before (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7641)

```diff
-           (0, Xk.p)(Tk, this.inputs, this.ageSeconds, kk, this.travelled);
+           (0, hm.o)(Am, this.inputs, this.ageSeconds, mm, this.travelled);
```

#### 973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7670` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7601) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7670)

```diff
-         ak && this.accumulator.applyTo(this.pose, kk.weight, ik.mode === Kk.j.Override), this.accumulator.clear()
+         Dm && this.accumulator.applyTo(this.pose, mm.weight, am.mode === Km.e.Override), this.accumulator.clear()
```

#### 974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7703` → after: `L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7634) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7703)

```diff
-           this.accumulator.applyTo(this.pose, 1, kk.mode === Kk.j.Override, !0), this.accumulator.clear()
+           this.accumulator.applyTo(this.pose, 1, mm.mode === Km.e.Override, !0), this.accumulator.clear()
```

#### 975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7707-L7708` → after: `L7638-L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7638-L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7638-L7639) · [Before (L7707-L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7707-L7708)

```diff
-         Fk.queries[pk.i.AnimTime] = Ik;
-         const ik = Xk * Math.max(0, (0, Sk.b)(kk.blendWeight, Fk));
+         Tm.queries[Nm.e.AnimTime] = fm;
+         const am = hm * Math.max(0, (0, zm.d)(mm.blendWeight, Tm));
```

#### 976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7711` → after: `L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7642) · [Before (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7711)

```diff
-           ak = kk.loop === Qk.g.Loop,
+           Dm = mm.loop === Qm.i.Loop,
```

#### 977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7720` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7651) · [Before (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7720)

```diff
-             (0, Sk.j)(tk.rotation, Ik, ak, Fk, Lk);
+             (0, zm.i)(pm.rotation, fm, Dm, Tm, Rm);
```

#### 978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7724` → after: `L7655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7655) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7724)

```diff
-             (0, Sk.j)(tk.position, Ik, ak, Fk, Lk);
+             (0, zm.i)(pm.position, fm, Dm, Tm, Rm);
```

#### 979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7728` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7659) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7728)

```diff
-             (0, Sk.j)(tk.scale, Ik, ak, Fk, Lk);
+             (0, zm.i)(pm.scale, fm, Dm, Tm, Rm);
```

#### 980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7739` → after: `L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7670) · [Before (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7739)

```diff
-         return Ik < 0 ? kk.constant : Ik < Xk.l.Count ? Fk[Ik] : this.inputs[Ik]
+         return fm < 0 ? mm.constant : fm < hm.h.Count ? Tm[fm] : this.inputs[fm]
```

#### 981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7753` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7684) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7753)

```diff
-           inputs: [...[...Xk.i].map((kk => {
+           inputs: [...[...hm.f].map((mm => {
```

#### 982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7762-L7763` → after: `L7693-L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7693-L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7693-L7694) · [Before (L7762-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7762-L7763)

```diff
-             raw: (0, Xk.n)(kk, this.inputs),
-             value: this.inputs[Xk.l.Count + Fk]
+             raw: (0, hm.k)(mm, this.inputs),
+             value: this.inputs[hm.h.Count + Tm]
```

#### 983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7793-L7794` → after: `L7724-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7724-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7724-L7725) · [Before (L7793-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7793-L7794)

```diff
-       const Tk = Xk.queries[pk.i.DeltaTime];
-       Xk.queries[pk.i.AnimTime] = Fk, Xk.queries[pk.i.DeltaTime] = Ik;
+       const Am = hm.queries[Nm.e.DeltaTime];
+       hm.queries[Nm.e.AnimTime] = Tm, hm.queries[Nm.e.DeltaTime] = fm;
```

#### 984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7796` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7727) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7796)

```diff
-       return Xk.queries[pk.i.DeltaTime] = Tk, ik
+       return hm.queries[Nm.e.DeltaTime] = Am, am
```

#### 985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7802` → after: `L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7733) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7802)

```diff
-       return Number.isNaN(kk) ? Xk : Math.min(Ik, Math.max(Fk, kk))
+       return Number.isNaN(mm) ? hm : Math.min(fm, Math.max(Tm, mm))
```

#### 986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7805` → after: `L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7736) · [Before (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7805)

```diff
-       ck = Ik(3206);
+       rm = fm(3281);
```

#### 987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7811` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7742) · [Before (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7811)

```diff
-         (Ik.severity === Qk.d.Error ? console.error : console.warn)(`Animation for ${kk}: ${Ik.source}: ${Ik.message}`)
+         (fm.severity === Qm.b.Error ? console.error : console.warn)(`Animation for ${mm}: ${fm.source}: ${fm.message}`)
```

#### 988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7816` → after: `L7747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7747) · [Before (L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7816)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.kN = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.rC = 0
```

#### 989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7819` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7750) · [Before (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7819)

```diff
-           return this.kN
+           return this.rC
```

#### 990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7822` → after: `L7753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7753) · [Before (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7822)

```diff
-           this.kN++
+           this.rC++
```

#### 991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7845` → after: `L7776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7776) · [Before (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7845)

```diff
-           return [Ik, Xk].some((Ik => null !== Ik && new Jk.e(Ik, new Pk(kk, Fk)).animatesAnyBone))
+           return [fm, hm].some((fm => null !== fm && new jm.d(fm, new Im(mm, Tm)).animatesAnyBone))
```

#### 992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7855` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7786) · [Before (L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7855)

```diff
-             for (const kk of null === Tk ? [] : (0, Jk.j)(Tk)) Xk.add(kk);
+             for (const mm of null === Am ? [] : (0, jm.i)(Am)) hm.add(mm);
```

#### 993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7871` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7802) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7871)

```diff
-               Xk = Array.from(Tk, (kk => null !== kk && void 0 !== kk ? kk : "")), Yk.set(Ik, Xk)
+               hm = Array.from(Am, (mm => null !== mm && void 0 !== mm ? mm : "")), Bm.set(fm, hm)
```

#### 994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7888` → after: `L7819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7819) · [Before (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7888)

```diff
-             Tk = new Jk.e(Fk, new Pk(kk, Ik));
+             Am = new jm.d(Tm, new Im(mm, fm));
```

#### 995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7890` → after: `L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7821) · [Before (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7890)

```diff
-             Bk(ik ? `${kk} (texture pack)` : kk, Tk.diagnostics), ik && !Tk.animatesAnyBone && console.error(`Animation for ${kk} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Xk.set(Ik, Tk)
+             Mm(am ? `${mm} (texture pack)` : mm, Am.diagnostics), am && !Am.animatesAnyBone && console.error(`Animation for ${mm} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), hm.set(fm, Am)
```

#### 996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7899-L7901` → after: `L7830-L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7830-L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7830-L7832) · [Before (L7899-L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7899-L7901)

```diff
-           const Fk = (0, Hk.c)(),
-             Ik = Nk.g.has(kk) || this.drawnWithPlayerRig(kk),
-             Xk = (0, Nk.o)(Fk, Ik ? fk : kk, []);
+           const Tm = (0, qm.d)(),
+             fm = Cm.e.has(mm) || this.drawnWithPlayerRig(mm),
+             hm = (0, Cm.i)(Tm, fm ? lm : mm, []);
```

#### 997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7905-L7906` → after: `L7836-L7837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7836-L7837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7836-L7837) · [Before (L7905-L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7905-L7906)

```diff
-             const Ik = (0, Nk.p)(this.getPack(), Fk, kk);
-             Bk(`${kk} (texture pack)`, Ik.diagnostics), Tk = Ik.binding
+             const fm = (0, Cm.l)(this.getPack(), Tm, mm);
+             Mm(`${mm} (texture pack)`, fm.diagnostics), Am = fm.binding
```

#### 998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7914` → after: `L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7845) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7914)

```diff
-           null === this.pack && (this.pack = (0, Nk.v)(null !== null ? null : (0, ck.b)(), "texturePack"), Bk("the texture pack", this.pack.diagnostics));
+           null === this.pack && (this.pack = (0, Cm.q)(null !== null ? null : (0, rm.c)(), "texturePack"), Mm("the texture pack", this.pack.diagnostics));
```

#### 999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7920` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7851) · [Before (L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7920)

```diff
-   37383: (kk, Fk, Ik) => {
+   37382: (mm, Tm, fm) => {
```

#### 1000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7926-L7929` → after: `L7857-L7860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7857-L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7857-L7860) · [Before (L7926-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7926-L7929)

```diff
-       Tk = Ik(37429),
-       ik = Ik(37409),
-       yk = Ik(37209),
-       lk = Ik(37415);
+       Am = fm(37446),
+       am = fm(37411),
+       xm = fm(37230),
+       wm = fm(37417);
```

#### 1001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7939` → after: `L7870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7870) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7939)

```diff
-           null !== Fk ? (Xk.push(yk.name), Tk.push(yk.rotation), ik.push(Fk)) : console.warn(`${kk.id} animates ${yk.name}, which the attachment has no node for`)
+           null !== Tm ? (hm.push(xm.name), Am.push(xm.rotation), am.push(Tm)) : console.warn(`${mm.id} animates ${xm.name}, which the attachment has no node for`)
```

#### 1002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7950` → after: `L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7881) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7950)

```diff
-           (0, yk.d)(kk, Fk, Ik, Xk, ak), this.restEuler.set(ak, 3 * lk)
+           (0, xm.e)(mm, Tm, fm, hm, Dm), this.restEuler.set(Dm, 3 * wm)
```

#### 1003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7953` → after: `L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7884) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7953)

```diff
-           queries: new Float64Array(lk.i.Count),
+           queries: new Float64Array(wm.e.Count),
```

#### 1004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7968-L7969` → after: `L7899-L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7899-L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7899-L7900) · [Before (L7968-L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7968-L7969)

```diff
-         Ik.queries[lk.i.AnimTime] = tk, Ik.queries[lk.i.LifeTime] = kk;
-         const Zk = Fk.loop === ik.g.Loop;
+         fm.queries[wm.e.AnimTime] = pm, fm.queries[wm.e.LifeTime] = mm;
+         const Em = Tm.loop === am.i.Loop;
```

#### 1005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7972` → after: `L7903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7903) · [Before (L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7972)

```diff
-           Number.isNaN(tk) ? Xk.fill(0) : (0, Tk.j)(this.channels[ik], tk, Zk, Ik, Xk), (0, yk.h)(qk[kk] + Xk[0], qk[kk + 1] + Xk[1], qk[kk + 2] + Xk[2], this.trigs[ik], ak), Lk.set(ak, 4 * ik)
+           Number.isNaN(pm) ? hm.fill(0) : (0, Am.i)(this.channels[am], pm, Em, fm, hm), (0, xm.i)(im[mm] + hm[0], im[mm + 1] + hm[1], im[mm + 2] + hm[2], this.trigs[am], Dm), Rm.set(Dm, 4 * am)
```

#### 1006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7980-L7981` → after: `L7911-L7912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7911-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7911-L7912) · [Before (L7980-L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L7980-L7981)

```diff
-       } = (0, Xk.c)(), Tk = Ik.find(kk);
-       return null === Tk ? (console.warn(`Cosmetic attachment clip ${kk} is not a built-in clip`), null) : new ak(Tk, Ik.variables.createValues(), Fk)
+       } = (0, hm.d)(), Am = fm.find(mm);
+       return null === Am ? (console.warn(`Cosmetic attachment clip ${mm} is not a built-in clip`), null) : new Dm(Am, fm.variables.createValues(), Tm)
```

#### 1007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8008` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7939) · [Before (L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8008)

```diff
-   38116: (kk, Fk, Ik) => {
+   38179: (mm, Tm, fm) => {
```

#### 1008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8010` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7941) · [Before (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8010)

```diff
-       b: () => ak
+       e: () => Dm
```

#### 1009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8012-L8013` → after: `L7943-L7944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7943-L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7943-L7944) · [Before (L8012-L8013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8012-L8013)

```diff
-     var Xk = Ik(37144),
-       Tk = Ik(37139);
+     var hm = fm(37181),
+       Am = fm(37175);
```

#### 1010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8016` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7947) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8016)

```diff
-       lk = new Xk.Ge;
+       wm = new hm.WO;
```

#### 1011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8020` → after: `L7951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7951) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8020)

```diff
-       const qk = kk.MJ.getState(Fk, "animator");
+       const im = mm.qI.getState(Tm, "animator");
```

#### 1012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8024` → after: `L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7955) · [Before (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8024)

```diff
-         Ip: tk
+         QG: pm
```

#### 1013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8027` → after: `L7958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7958) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8027)

```diff
-       const Zk = null !== (ak = qk.getDrawnNode(ik)) && void 0 !== ak ? ak : qk.getDrawnNode(yk);
+       const Em = null !== (Dm = im.getDrawnNode(am)) && void 0 !== Dm ? Dm : im.getDrawnNode(xm);
```

#### 1014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8030` → after: `L7961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7961) · [Before (L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8030)

```diff
-       null !== jk && (Xk.Ge.TransformNormalFromFloatsToRef(Zk.currentPosX, Zk.currentPosY, Zk.currentPosZ, Lk.getNodeWorldMatrix(tk, jk), lk), Ik[0] += lk.x, Ik[1] += lk.y, Ik[2] += lk.z)
+       null !== om && (hm.WO.TransformNormalFromFloatsToRef(Em.currentPosX, Em.currentPosY, Em.currentPosZ, Rm.getNodeWorldMatrix(pm, om), wm), fm[0] += wm.x, fm[1] += wm.y, fm[2] += wm.z)
```

#### 1015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8033` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7964) · [Before (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8033)

```diff
-   37843: (kk, Fk, Ik) => {
+   37912: (mm, Tm, fm) => {
```

#### 1016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8039-L8040` → after: `L7970-L7971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7970-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7970-L7971) · [Before (L8039-L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8039-L8040)

```diff
-     var Xk = Ik(3089),
-       Tk = Ik(37797);
+     var hm = fm(3148),
+       Am = fm(37841);
```

#### 1017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8044` → after: `L7975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7975) · [Before (L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8044)

```diff
-       return Xk.b.getImagesPerAtlas().length > 1 && Tk.d.Lw()
+       return hm.b.getImagesPerAtlas().length > 1 && Am.c.cY()
```

#### 1018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8049` → after: `L7980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7980) · [Before (L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8049)

```diff
-       return Ik ? Tk : (kk + Tk) / Xk.b.getImagesPerAtlas()[0]
+       return fm ? Am : (mm + Am) / hm.b.getImagesPerAtlas()[0]
```

#### 1019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8052` → after: `L7983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7983) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8052)

```diff
-   37875: (kk, Fk, Ik) => {
+   37944: (mm, Tm, fm) => {
```

#### 1020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8054-L8058` → after: `L7985-L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7985-L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7985-L7989) · [Before (L8054-L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8054-L8058)

```diff
-       b: () => uk,
-       j: () => Rk,
-       f: () => bk,
-       n: () => Yk,
-       r: () => Uk
+       e: () => Gm,
+       l: () => Pm,
+       h: () => Xm,
+       m: () => Bm,
+       o: () => Hm
```

#### 1021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8060-L8074` → after: `L7991-L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7991-L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L7991-L8005) · [Before (L8060-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8060-L8074)

```diff
-     var Xk = Ik(37144),
-       Tk = Ik(4449),
-       ik = Ik(9183),
-       yk = Ik(628),
-       lk = Ik(37324),
-       ak = Ik(37365),
-       qk = Ik(37896),
-       Lk = Ik(37259),
-       tk = Ik(37815),
-       Zk = Ik(37887),
-       jk = Ik(3147),
-       ek = Ik(37878),
-       wk = Ik(37319),
-       Hk = Ik(3089),
-       Jk = Ik(3096);
+     var hm = fm(37181),
+       Am = fm(4399),
+       am = fm(9141),
+       xm = fm(653),
+       wm = fm(37327),
+       Dm = fm(37357),
+       im = fm(37967),
+       Rm = fm(37276),
+       pm = fm(37872),
+       Em = fm(37960),
+       om = fm(3197),
+       Om = fm(37946),
+       Ym = fm(37320),
+       qm = fm(3148),
+       jm = fm(3151);
```

#### 1022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8092` → after: `L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8023) · [Before (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8092)

```diff
-               const Xk = [...null !== (Fk = kk.extensionsUsed) && void 0 !== Fk ? Fk : [], ...null !== (Ik = kk.extensionsRequired) && void 0 !== Ik ? Ik : []];
+               const hm = [...null !== (Tm = mm.extensionsUsed) && void 0 !== Tm ? Tm : [], ...null !== (fm = mm.extensionsRequired) && void 0 !== fm ? fm : []];
```

#### 1023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8095-L8096` → after: `L8026-L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8026-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8026-L8027) · [Before (L8095-L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8095-L8096)

```diff
-           const jk = null !== (Fk = tk.materials) && void 0 !== Fk ? Fk : [],
-             ek = null !== (Ik = tk.meshes) && void 0 !== Ik ? Ik : [];
+           const om = null !== (Tm = pm.materials) && void 0 !== Tm ? Tm : [],
+             Om = null !== (fm = pm.meshes) && void 0 !== fm ? fm : [];
```

#### 1024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8098` → after: `L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8029) · [Before (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8098)

```diff
-           const wk = null !== (Xk = ek[0].primitives) && void 0 !== Xk ? Xk : [];
+           const Ym = null !== (hm = Om[0].primitives) && void 0 !== hm ? hm : [];
```

#### 1025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8102` → after: `L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8033) · [Before (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8102)

```diff
-               const Ik = null !== (Fk = kk.nodes) && void 0 !== Fk ? Fk : [];
+               const fm = null !== (Tm = mm.nodes) && void 0 !== Tm ? Tm : [];
```

#### 1026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8106` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8037) · [Before (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8106)

```diff
-             Jk = null !== (Tk = Hk.pbrMetallicRoughness) && void 0 !== Tk ? Tk : {},
+             jm = null !== (Am = qm.pbrMetallicRoughness) && void 0 !== Am ? Am : {},
```

#### 1027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8110` → after: `L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8041) · [Before (L8110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8110)

```diff
-           return JSON.stringify([xk, Pk, null !== (ik = Jk.baseColorFactor) && void 0 !== ik ? ik : [1, 1, 1, 1], null !== (yk = Hk.emissiveFactor) && void 0 !== yk ? yk : [0, 0, 0], null !== (lk = Hk.doubleSided) && void 0 !== lk && lk, null !== (ak = Hk.alphaMode) && void 0 !== … [truncated]
+           return JSON.stringify([Vm, Im, null !== (am = jm.baseColorFactor) && void 0 !== am ? am : [1, 1, 1, 1], null !== (xm = qm.emissiveFactor) && void 0 !== xm ? xm : [0, 0, 0], null !== (wm = qm.doubleSided) && void 0 !== wm && wm, null !== (Dm = qm.alphaMode) && void 0 !== … [truncated]
```

#### 1028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8139` → after: `L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8070) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8139)

```diff
-         if ("extensions" === Fk && Object.keys(null !== Ik && void 0 !== Ik ? Ik : {}).some((kk => !Vk.has(kk))) || Sk(Ik)) return !0
+         if ("extensions" === Tm && Object.keys(null !== fm && void 0 !== fm ? fm : {}).some((mm => !Jm.has(mm))) || zm(fm)) return !0
```

#### 1029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8151` → after: `L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8082) · [Before (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8151)

```diff
-       const wk = null !== (yk = ek.byteOffset) && void 0 !== yk ? yk : 0,
+       const Ym = null !== (xm = Om.byteOffset) && void 0 !== xm ? xm : 0,
```

#### 1030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8157` → after: `L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8088) · [Before (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8157)

```diff
-       return [(Pk = Fk.subarray(wk, wk + Hk), `${Ek(Pk,2166136261).toString(16)}-${Ek(Pk,1867293075).toString(16)}-${Pk.length}`), jk.mimeType, null !== (lk = Ik.texCoord) && void 0 !== lk ? lk : 0, null !== (ak = Jk.wrapS) && void 0 !== ak ? ak : Qk, null !== (qk = Jk.wrapT) &&  … [truncated]
+       return [(Im = Tm.subarray(Ym, Ym + qm), `${km(Im,2166136261).toString(16)}-${km(Im,1867293075).toString(16)}-${Im.length}`), om.mimeType, null !== (wm = fm.texCoord) && void 0 !== wm ? wm : 0, null !== (Dm = jm.wrapS) && void 0 !== Dm ? Dm : Qm, null !== (im = jm.wrapT) &&  … [truncated]
```

#### 1031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8165` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8096) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8165)

```diff
-     var Ok = Ik(37884),
+     var bm = fm(37955),
```

#### 1032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8167-L8168` → after: `L8098-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8098-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8098-L8099) · [Before (L8167-L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8167-L8168)

```diff
-       Gk = Ik(37352),
-       pk = Ik(2700);
+       em = fm(37345),
+       Nm = fm(2760);
```

#### 1033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8173` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8104) · [Before (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8173)

```diff
-       return uk * (null !== (Fk = kk.modelScale) && void 0 !== Fk ? Fk : 1)
+       return Gm * (null !== (Tm = mm.modelScale) && void 0 !== Tm ? Tm : 1)
```

#### 1034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8182` → after: `L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8113) · [Before (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8182)

```diff
-       } = null !== (Fk = kk.customModelInfo) && void 0 !== Fk ? Fk : {}, ak = null !== (Ik = null === (Xk = kk.model) || void 0 === Xk ? void 0 : Xk.split("|")) && void 0 !== Ik ? Ik : [], qk = ak.includes("rotatable") && Tk.d.includes(ak[0]), Lk = qk || "CustomModel" === ak[0];
+       } = null !== (Tm = mm.customModelInfo) && void 0 !== Tm ? Tm : {}, Dm = null !== (fm = null === (hm = mm.model) || void 0 === hm ? void 0 : hm.split("|")) && void 0 !== fm ? fm : [], im = Dm.includes("rotatable") && Am.e.includes(Dm[0]), Rm = im || "CustomModel" === Dm[0];
```

#### 1035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8185-L8187` → after: `L8116-L8118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8116-L8118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8116-L8118) · [Before (L8185-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8185-L8187)

```diff
-         yOffset: Lk ? ik : 0,
-         yRotation: qk ? yk : 0,
-         xRotation: qk ? lk : 0
+         yOffset: Rm ? am : 0,
+         yRotation: im ? xm : 0,
+         xRotation: im ? wm : 0
```

#### 1036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8192-L8193` → after: `L8123-L8124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8123-L8124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8123-L8124) · [Before (L8192-L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8192-L8193)

```diff
-       const Fk = ik.g[kk.meta.rootName];
-       return (0, yk.Q)(kk.blockModel) || kk.blockModel === Fk.blockModel ? Fk : kk
+       const Tm = am.i[mm.meta.rootName];
+       return (0, xm.H)(mm.blockModel) || mm.blockModel === Tm.blockModel ? Tm : mm
```

#### 1037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8220-L8221` → after: `L8151-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8151-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8151-L8152) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8220-L8221)

```diff
-         emissiveColor: null !== (Fk = null === (Ik = kk.emissiveColor) || void 0 === Ik ? void 0 : Ik.join(",")) && void 0 !== Fk ? Fk : "",
-         textureAnimation: kk.textureAnimation ? `${kk.textureAnimation.frames}x${kk.textureAnimation.animationInterval}` : ""
+         emissiveColor: null !== (Tm = null === (fm = mm.emissiveColor) || void 0 === fm ? void 0 : fm.join(",")) && void 0 !== Tm ? Tm : "",
+         textureAnimation: mm.textureAnimation ? `${mm.textureAnimation.frames}x${mm.textureAnimation.animationInterval}` : ""
```

#### 1038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8236` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8167) · [Before (L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8236)

```diff
-         const Ik = (0, jk.h)(Hk.b.getModel(kk, Jk.h.BLOCK).url);
+         const fm = (0, om.h)(qm.b.getModel(mm, jm.g.BLOCK).url);
```

#### 1039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8239` → after: `L8170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8170) · [Before (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8239)

```diff
-           Xk = zk((0, jk.b)(Ik.base64))
+           hm = cm((0, om.d)(fm.base64))
```

#### 1040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8245` → after: `L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8176) · [Before (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8245)

```diff
-       return null === Xk ? null : `${Xk}|${fk(Ik)}`
+       return null === hm ? null : `${hm}|${lm(fm)}`
```

#### 1041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8249` → after: `L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8180) · [Before (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8249)

```diff
-       if ((0, ek.b)(kk), !Fk.blockModel) throw new Error(`"${Fk.name}" has a GLB model type ("${Fk.model}") but no blockModel`);
+       if ((0, Om.b)(mm), !Tm.blockModel) throw new Error(`"${Tm.name}" has a GLB model type ("${Tm.model}") but no blockModel`);
```

#### 1042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8289` → after: `L8220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8220) · [Before (L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8289)

```diff
-             xk = Hk.b.getModel(ik, Jk.h.BLOCK).url,
+             Vm = qm.b.getModel(am, jm.g.BLOCK).url,
```

#### 1043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8293` → after: `L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8224) · [Before (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8293)

```diff
-                 rootUrl: Hk.b.getModel(ik, Jk.h.BLOCK, !0).url
+                 rootUrl: qm.b.getModel(am, jm.g.BLOCK, !0).url
```

#### 1044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8311-L8313` → after: `L8242-L8244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8242-L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8242-L8244) · [Before (L8311-L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8311-L8313)

```diff
-                 } = (0, Gk.e)({
-                   name: `${ik}BlockModelMeshMat`,
-                   Yw: kk,
+                 } = (0, em.b)({
+                   name: `${am}BlockModelMeshMat`,
+                   Aq: mm,
```

#### 1045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8315` → after: `L8246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8246) · [Before (L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8315)

```diff
-                     ...(0, Ok.d)(Fk, Tk, Ak, !!jk.unlit),
+                     ...(0, bm.e)(Tm, Am, Lm, !!om.unlit),
```

#### 1046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8322` → after: `L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8253) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8322)

```diff
-                     fillMode: 0 === Xk.primitive.mode ? lk.d.PointListDrawMode : lk.d.TriangleFillMode
+                     fillMode: 0 === hm.primitive.mode ? wm.b.PointListDrawMode : wm.b.TriangleFillMode
```

#### 1047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8325` → after: `L8256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8256) · [Before (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8325)

```diff
-                     (0, Lk.v)(kk, tk.b, (0, tk.f)(ek.frames, ek.animationInterval))
+                     (0, Rm.w)(mm, pm.e, (0, pm.h)(Om.frames, Om.animationInterval))
```

#### 1048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8332` → after: `L8263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8263) · [Before (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8332)

```diff
-             const Zk = (await Promise.allSettled([Fk.decodeGeometries(), qk && (0, ak.x)(qk)])).find((kk => "rejected" === kk.status));
+             const Em = (await Promise.allSettled([Tm.decodeGeometries(), im && (0, Dm.A)(im)])).find((mm => "rejected" === mm.status));
```

#### 1049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8342` → after: `L8273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8273) · [Before (L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8342)

```diff
-           if (!Kk) throw new Error(`"${ik}" imported no renderable mesh`);
+           if (!Km) throw new Error(`"${am}" imported no renderable mesh`);
```

#### 1050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8346` → after: `L8277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8277) · [Before (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8346)

```diff
-           } = Kk, zk = null !== (Tk = Kk.material) && void 0 !== Tk ? Tk : await Ik, Sk = (0, wk.n)(Qk, sk);
+           } = Km, cm = null !== (Am = Km.material) && void 0 !== Am ? Am : await fm, zm = (0, Ym.n)(Qm, nm);
```

#### 1051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8349` → after: `L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8280) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8349)

```diff
-           (0, Zk.j)(Sk, Qk.worldMatrix(sk, !0, yk.scale), !0);
+           (0, Em.e)(zm, Qm.worldMatrix(nm, !0, xm.scale), !0);
```

#### 1052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8358` → after: `L8289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8289) · [Before (L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8358)

```diff
-           vk.isIdentity() || (0, Zk.j)(Sk, vk.m, !0);
+           Zm.isIdentity() || (0, Em.e)(zm, Zm.m, !0);
```

#### 1053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8361-L8362` → after: `L8292-L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8292-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8292-L8293) · [Before (L8361-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8361-L8362)

```diff
-           const Ek = (0, qk.m)((0, pk.e)().Xw, `${ik}blockGlbMesh`, Sk);
-           return Ek.sideOrientation = lk.d.ClockWiseSideOrientation, Ek.rotationQuaternion = sk.part ? null : Xk.Quaternion.Identity(), Ek.hasVertexAlpha = !sk.primitive.draco && (0, Ok.f)(sk.primitive), Ek.material = zk, Ek.gw = !1, Ek
+           const km = (0, im.l)((0, Nm.d)().qY, `${am}blockGlbMesh`, zm);
+           return km.sideOrientation = wm.b.ClockWiseSideOrientation, km.rotationQuaternion = nm.part ? null : hm.Quaternion.Identity(), km.hasVertexAlpha = !nm.primitive.draco && (0, bm.i)(nm.primitive), km.material = cm, km.xq = !1, km
```

#### 1054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8381` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8312) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8381)

```diff
-   37878: (kk, Fk, Ik) => {
+   37946: (mm, Tm, fm) => {
```

#### 1055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8388` → after: `L8319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8319) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8388)

```diff
-   37913: (kk, Fk, Ik) => {
+   37982: (mm, Tm, fm) => {
```

#### 1056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8390` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8321) · [Before (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8390)

```diff
-       b: () => Tk
+       d: () => Am
```

#### 1057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8392` → after: `L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8323) · [Before (L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8392)

```diff
-     var Xk = Ik(37537);
+     var hm = fm(37559);
```

#### 1058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8409` → after: `L8340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8340) · [Before (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8409)

```diff
-   38066: (kk, Fk, Ik) => {
+   38116: (mm, Tm, fm) => {
```

#### 1059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8412` → after: `L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8343) · [Before (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8412)

```diff
-       d: () => ak
+       g: () => Dm
```

#### 1060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8414-L8416` → after: `L8345-L8347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8345-L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8345-L8347) · [Before (L8414-L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8414-L8416)

```diff
-     var Xk = Ik(37537),
-       Tk = Ik(37488),
-       ik = Ik(37319);
+     var hm = fm(37559),
+       Am = fm(37517),
+       am = fm(37320);
```

#### 1061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8420-L8422` → after: `L8351-L8353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8351-L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8351-L8353) · [Before (L8420-L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8420-L8422)

```diff
-       const lk = kk.Xw.Glk[Ik];
-       lk.Av(!0);
-       const ak = kk.yj.XN(kk.QJ(Fk)),
+       const wm = mm.qY.rwm[fm];
+       wm.Dk(!0);
+       const Dm = mm.Vo.lC(mm.XV(Tm)),
```

#### 1062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8424-L8425` → after: `L8355-L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8355-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8355-L8356) · [Before (L8424-L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8424-L8425)

```diff
-         Lk = Fk.map(((Fk, Ik) => Fk + (qk[Ik] + qk[Ik + 3]) / 2 - kk.SZ[Ik]));
-       lk.ci.set(qk[3] - qk[0], qk[4] - qk[1], qk[5] - qk[2]);
+         Rm = Tm.map(((Tm, fm) => Tm + (im[fm] + im[fm + 3]) / 2 - mm.HE[fm]));
+       wm.fi.set(im[3] - im[0], im[4] - im[1], im[5] - im[2]);
```

#### 1063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8433-L8435` → after: `L8364-L8366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8364-L8366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8364-L8366) · [Before (L8433-L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8433-L8435)

```diff
-             ik = Xk ? lk.ci.y : Tk ? lk.ci.z : lk.ci.x,
-             yk = Xk ? lk.ci.z : Tk ? lk.ci.x : lk.ci.y;
-           return .5 + (kk - .5) * (Fk % 2 === 0 ? ik : yk)
+             am = hm ? wm.fi.y : Am ? wm.fi.z : wm.fi.x,
+             xm = hm ? wm.fi.z : Am ? wm.fi.x : wm.fi.y;
+           return .5 + (mm - .5) * (Tm % 2 === 0 ? am : xm)
```

#### 1064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8437` → after: `L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8368) · [Before (L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8437)

```diff
-       return (0, ik.s)(lk, (() => {
+       return (0, am.t)(wm, (() => {
```

#### 1065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8447` → after: `L8378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8378) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8447)

```diff
-           ci: Ik
+           fi: fm
```

#### 1066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8449` → after: `L8380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8380) · [Before (L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8449)

```diff
-         Fk[ak].ci.set(Ik.x, 1 / Xk, Ik.z), (0, Tk.q)(Fk[ak], kk.x, (0 === ak ? 1 : -1) * (ik - yk / (2 * Xk)), kk.z)
+         Tm[Dm].fi.set(fm.x, 1 / hm, fm.z), (0, Am.q)(Tm[Dm], mm.x, (0 === Dm ? 1 : -1) * (am - xm / (2 * hm)), mm.z)
```

#### 1067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8454` → after: `L8385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8385) · [Before (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8454)

```diff
-           ci: qk
+           fi: im
```

#### 1068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8456` → after: `L8387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8387) · [Before (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8456)

```diff
-         Fk[ak].ci.set(1 / Ik, (lk * Xk - 2 * yk) / ((lk - 2 * yk) * Xk), qk.z), (0, Tk.q)(Fk[ak], (2 === ak ? -1 : 1) * (ik - yk / (2 * Ik)), kk.y, kk.z)
+         Tm[Dm].fi.set(1 / fm, (wm * hm - 2 * xm) / ((wm - 2 * xm) * hm), im.z), (0, Am.q)(Tm[Dm], (2 === Dm ? -1 : 1) * (am - xm / (2 * fm)), mm.y, mm.z)
```

#### 1069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8460` → after: `L8391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8391) · [Before (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8460)

```diff
-   37139: (kk, Fk, Ik) => {
+   37175: (mm, Tm, fm) => {
```

#### 1070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8468-L8473` → after: `L8399-L8404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8399-L8404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8399-L8404) · [Before (L8468-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8468-L8473)

```diff
-     var Xk = Ik(337),
-       Tk = Ik(1844),
-       ik = Ik(37215),
-       yk = Ik(37227),
-       lk = Ik(37144),
-       ak = Ik(37209);
+     var hm = fm(354),
+       Am = fm(1877),
+       am = fm(37233),
+       xm = fm(37245),
+       wm = fm(37181),
+       Dm = fm(37230);
```

#### 1071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8489` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8420) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8489)

```diff
-         this.restQuat.set([Fk, Ik, Xk, Tk]), (0, ak.d)(Fk, Ik, Xk, Tk, this.restEuler)
+         this.restQuat.set([Tm, fm, hm, Am]), (0, Dm.e)(Tm, fm, hm, Am, this.restEuler)
```

#### 1072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8511` → after: `L8442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8442) · [Before (L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8511)

```diff
-           } = Lk, Zk = tk.currentAnimationType, jk = null !== Zk && Zk !== ik.c.Movement;
+           } = Rm, Em = pm.currentAnimationType, om = null !== Em && Em !== am.h.Movement;
```

#### 1073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8535` → after: `L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8466) · [Before (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8535)

```diff
-         sk || (0, ak.h)(yk[0] + xk, yk[1] + Pk, yk[2] + Kk, kk.eulerTrig, Zk);
+         nm || (0, Dm.i)(xm[0] + Vm, xm[1] + Im, xm[2] + Km, mm.eulerTrig, Em);
```

#### 1074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8542` → after: `L8473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8473) · [Before (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8542)

```diff
-             jk[0] = -Hk[0], jk[1] = -Hk[1], jk[2] = -Hk[2], jk[3] = Hk[3], kk.takeoverRotation.set([Fk.x, Fk.y, Fk.z, Fk.w]), (0, ak.e)(jk, kk.takeoverRotation, kk.takeoverRotation), kk.takeoverPosition.set([ik.currentPosX, ik.currentPosY, ik.currentPosZ]);
+             om[0] = -qm[0], om[1] = -qm[1], om[2] = -qm[2], om[3] = qm[3], mm.takeoverRotation.set([Tm.x, Tm.y, Tm.z, Tm.w]), (0, Dm.g)(om, mm.takeoverRotation, mm.takeoverRotation), mm.takeoverPosition.set([am.currentPosX, am.currentPosY, am.currentPosZ]);
```

#### 1075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8569` → after: `L8500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8500) · [Before (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8569)

```diff
-           (0, ak.e)(Hk, Zk, Zk);
+           (0, Dm.g)(qm, Em, Em);
```

#### 1076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8586` → after: `L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8517) · [Before (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8586)

```diff
-         return (Xk[0] !== Fk.baseRotX || Xk[1] !== Fk.baseRotY || Xk[2] !== Fk.baseRotZ) && (Xk[0] = Fk.baseRotX, Xk[1] = Fk.baseRotY, Xk[2] = Fk.baseRotZ, lk.Quaternion.RotationYawPitchRollToRef(Fk.baseRotY, Fk.baseRotX, Fk.baseRotZ, ek), Ik[0] = ek.x, Ik[1] = ek.y, Ik[2] = ek.z … [truncated]
+         return (hm[0] !== Tm.baseRotX || hm[1] !== Tm.baseRotY || hm[2] !== Tm.baseRotZ) && (hm[0] = Tm.baseRotX, hm[1] = Tm.baseRotY, hm[2] = Tm.baseRotZ, wm.Quaternion.RotationYawPitchRollToRef(Tm.baseRotY, Tm.baseRotX, Tm.baseRotZ, Om), fm[0] = Om.x, fm[1] = Om.y, fm[2] = Om.z … [truncated]
```

#### 1077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8611-L8612` → after: `L8542-L8543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8542-L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8542-L8543) · [Before (L8611-L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8611-L8612)

```diff
-         const [yk, lk, ak] = Xk.e.eulerYXZFromQuaternion(ik.thinNode.rotationQuat);
-         ik.currentRotX = Xk.e.computeShortestRotation(ik.baseRotX, yk), ik.currentRotY = Xk.e.computeShortestRotation(ik.baseRotY, lk), ik.currentRotZ = Xk.e.computeShortestRotation(ik.baseRotZ, ak), Tk ? (kk.heldForClip = !0, ik.rotX = ik.currentRotX, ik.rotY = ik.currentRotY, i … [truncated]
+         const [xm, wm, Dm] = hm.c.eulerYXZFromQuaternion(am.thinNode.rotationQuat);
+         am.currentRotX = hm.c.computeShortestRotation(am.baseRotX, xm), am.currentRotY = hm.c.computeShortestRotation(am.baseRotY, wm), am.currentRotZ = hm.c.computeShortestRotation(am.baseRotZ, Dm), Am ? (mm.heldForClip = !0, am.rotX = am.currentRotX, am.rotY = am.currentRotY, a … [truncated]
```

#### 1078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8628` → after: `L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8559) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8628)

```diff
-     var xk = Ik(37217);
+     var Vm = fm(37238);
```

#### 1079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8632` → after: `L8563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8563) · [Before (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8632)

```diff
-       const ik = kk.Xw.kp,
+       const am = mm.qY.YG,
```

#### 1080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8634` → after: `L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8565) · [Before (L8634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8634)

```diff
-           oR: yk
+           xH: xm
```

#### 1081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8636` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8567) · [Before (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8636)

```diff
-       return ik.has(Ik) && ik.getCulledForEntity(Ik, Fk) && Fk !== yk && (null === (Xk = kk.MJ.XIk(Fk)) || void 0 === Xk ? void 0 : Xk.le) !== yk && (null === (Tk = kk.MJ.XIk(yk)) || void 0 === Tk ? void 0 : Tk.le) !== Fk
+       return am.has(fm) && am.getCulledForEntity(fm, Tm) && Tm !== xm && (null === (hm = mm.qI.hfm(Tm)) || void 0 === hm ? void 0 : hm.kO) !== xm && (null === (Am = mm.qI.hfm(xm)) || void 0 === Am ? void 0 : Am.kO) !== Tm
```

#### 1082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8640` → after: `L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8571) · [Before (L8640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8640)

```diff
-         this.Xu = void 0, this.qZ = void 0, this.thinInstMgr = void 0, this.Ip = null, this.vIk = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = kk => {
+         this.lG = void 0, this.IE = void 0, this.thinInstMgr = void 0, this.QG = null, this.kfm = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = mm => {
```

#### 1083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8650` → after: `L8581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8581) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8650)

```diff
-           Ii: Tk
+           oa: Am
```

#### 1084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8652` → after: `L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8583) · [Before (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8652)

```diff
-         Tk && this.updateNodeAnimations(Tk, Fk, ik.b.Start)
+         Am && this.updateNodeAnimations(Am, Tm, am.d.Start)
```

#### 1085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8659` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8590) · [Before (L8659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8659)

```diff
-           Ii: Xk
+           oa: hm
```

#### 1086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8661` → after: `L8592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8592) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8661)

```diff
-         Fk.reset(), Xk && this.updateNodeAnimations(Xk, kk, ik.b.Stop)
+         Tm.reset(), hm && this.updateNodeAnimations(hm, mm, am.d.Stop)
```

#### 1087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8671` → after: `L8602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8602) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8671)

```diff
-         (null === (Fk = this.rigPose) || void 0 === Fk ? void 0 : Fk.controller) !== kk && (null === (Ik = this.rigPose) || void 0 === Ik || Ik.releaseAll(this.thinInstMgr, this.Ip), this.rigPose = null === kk ? null : new Hk(kk, ((kk, Fk) => this.getRigNodeTransform(kk, Fk)), (( … [truncated]
+         (null === (Tm = this.rigPose) || void 0 === Tm ? void 0 : Tm.controller) !== mm && (null === (fm = this.rigPose) || void 0 === fm || fm.releaseAll(this.thinInstMgr, this.QG), this.rigPose = null === mm ? null : new qm(mm, ((mm, Tm) => this.getRigNodeTransform(mm, Tm)), (( … [truncated]
```

#### 1088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8677` → after: `L8608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8608) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8677)

```diff
-         return null !== (kk = null === (Fk = this.rigPose) || void 0 === Fk ? void 0 : Fk.controller) && void 0 !== kk ? kk : null
+         return null !== (mm = null === (Tm = this.rigPose) || void 0 === Tm ? void 0 : Tm.controller) && void 0 !== mm ? mm : null
```

#### 1089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8681` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8612) · [Before (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8681)

```diff
-         return null !== (Fk = this.nodeTransforms[this.getAliasedNodeName(kk)]) && void 0 !== Fk ? Fk : null
+         return null !== (Tm = this.nodeTransforms[this.getAliasedNodeName(mm)]) && void 0 !== Tm ? Tm : null
```

#### 1090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8685-L8686` → after: `L8616-L8617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8616-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8616-L8617) · [Before (L8685-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8685-L8686)

```diff
-           if (this.thinInstMgr.getNamedNodeOrNull(this.Ip, Ek) !== Fk) return null;
-           const kk = `${Ek}#${Fk}`;
+           if (this.thinInstMgr.getNamedNodeOrNull(this.QG, km) !== Tm) return null;
+           const mm = `${km}#${Tm}`;
```

#### 1091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8689-L8690` → after: `L8620-L8621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8620-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8620-L8621) · [Before (L8689-L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8689-L8690)

```diff
-         const Ik = this.getOrCreateTransformIfNodeExists(Fk === Ok ? Ek : kk);
-         return (null === Ik || void 0 === Ik ? void 0 : Ik.thinNodeIndex) === Fk ? Ik : null
+         const fm = this.getOrCreateTransformIfNodeExists(Tm === bm ? km : mm);
+         return (null === fm || void 0 === fm ? void 0 : fm.thinNodeIndex) === Tm ? fm : null
```

#### 1092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8693` → after: `L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8624) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8693)

```diff
-         if (this.thinInstMgr.has(this.Ip))
+         if (this.thinInstMgr.has(this.QG))
```

#### 1093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8705` → after: `L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8636) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8705)

```diff
-             Ik || this.thinInstMgr.setNodePosition(this.Ip, Fk, Xk, Tk, ik), this.thinInstMgr.setNodeRotationEuler(this.Ip, Fk, yk, lk, ak)
+             fm || this.thinInstMgr.setNodePosition(this.QG, Tm, hm, Am, am), this.thinInstMgr.setNodeRotationEuler(this.QG, Tm, xm, wm, Dm)
```

#### 1094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8723` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8654) · [Before (L8723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8723)

```diff
-           if (!this.vIk.EIk) return;
+           if (!this.kfm.bfm) return;
```

#### 1095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8727` → after: `L8658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8658) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8727)

```diff
-         if (!this.vIk.EIk) return;
+         if (!this.kfm.bfm) return;
```

#### 1096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8731` → after: `L8662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8662) · [Before (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8731)

```diff
-         null !== ik && (this.rigFrame++, yk = ik.apply((kk + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.Ip, this.writeRigNodePosition, Fk)), this.paused = !1, this.pausedDt = 0;
+         null !== am && (this.rigFrame++, xm = am.apply((mm + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.QG, this.writeRigNodePosition, Tm)), this.paused = !1, this.pausedDt = 0;
```

#### 1097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8735` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8666) · [Before (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8735)

```diff
-           if (!Tk.thinNode.EIk) {
+           if (!Am.thinNode.bfm) {
```

#### 1098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8756` → after: `L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8687) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8756)

```diff
-           if (Xk.Dt(kk), !Xk.hasCurrentAnimationFinished()) {
+           if (hm.DE(mm), !hm.hasCurrentAnimationFinished()) {
```

#### 1099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8761` → after: `L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8692) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8761)

```diff
-           Tk.Fi !== ik.k.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(Tk, Ik), this.stopAnimation(Ik)) : (Xk.rewindPastLoops(), this.rewindNodeAnimationTimelines(Tk, Ik), Fk = !0)
+           Am.Ea !== am.k.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(Am, fm), this.stopAnimation(fm)) : (hm.rewindPastLoops(), this.rewindNodeAnimationTimelines(Am, fm), Tm = !0)
```

#### 1100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8767` → after: `L8698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8698) · [Before (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8767)

```diff
-           Ii: Ik
+           oa: fm
```

#### 1101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8777` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8708) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8777)

```diff
-           Ii: Ik
+           oa: fm
```

#### 1102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8798` → after: `L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8729) · [Before (L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8798)

```diff
-           Ik = Fk ? Ek : this.getAliasedNodeName(kk);
+           fm = Tm ? km : this.getAliasedNodeName(mm);
```

#### 1103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8802` → after: `L8733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8733) · [Before (L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8802)

```diff
-         const Tk = Fk ? Ok : this.thinInstMgr.getNamedNodeOrNull(this.Ip, Ik);
+         const Am = Tm ? bm : this.thinInstMgr.getNamedNodeOrNull(this.QG, fm);
```

#### 1104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8814` → after: `L8745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L8745) · [Before (L8814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L8814)

```diff
-             return [yk, null === Xk ? null : null !== (Fk = null === lk || void 0 === lk || null === (Ik = lk.Ii) || void 0 === Ik ? void 0 : Ik[Xk]) && void 0 !== Fk ? Fk : null]
+             return [xm, null === hm ? null : null !== (Tm = null === wm || void 0 === wm || null === (fm = wm.oa) || void 0 === fm ? void 0 : fm[hm]) && void 0 !== Tm ? Tm : null]
```
