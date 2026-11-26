# Changed — Bundle Modifications Report (Part 010 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `10 / 115` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (4031 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 2117. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18022` → after: `L18045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18045) · [Before (L18022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18022)

```diff
-                   FU = XU.getBoundingClientRect().width - 2 * (null !== (UU = null === QU || void 0 === QU ? void 0 : QU.getBoundingClientRect().width) && void 0 !== UU ? UU : 0),
+                   tH = BH.getBoundingClientRect().width - 2 * (null !== (HH = null === SH || void 0 === SH ? void 0 : SH.getBoundingClientRect().width) && void 0 !== HH ? HH : 0),
```

#### 2118. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18026` → after: `L18049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18049) · [Before (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18026)

```diff
-                   NU = Math.min(DU - EU, YU - DU) - qU.d - FU / 2,
+                   GH = Math.min(CH - EH, XH - CH) - fH.e - tH / 2,
```

#### 2119. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18028-L18029` → after: `L18051-L18052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18051-L18052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18051-L18052) · [Before (L18028-L18029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18028-L18029)

```diff
-                   pU = IU ? (window.innerWidth - FU) / 2 - qU.d : NU;
-                 XU.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(pU,14*AU)))}px`), cU(IU)
+                   uH = YH ? (window.innerWidth - tH) / 2 - fH.e : GH;
+                 BH.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(uH,14*hH)))}px`), AH(YH)
```

#### 2120. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18088` → after: `L18111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18111) · [Before (L18088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18088)

```diff
-       } = (0, OU.I)(), AU = String(zU).padStart(3, "0"), FU = AU.search(/[1-9]/), oU = -1 === FU ? AU : AU.slice(0, FU), DU = Math.min(20, Math.floor(zU / cU * 20));
+       } = (0, lH.B)(), hH = String(LH).padStart(3, "0"), tH = hH.search(/[1-9]/), zH = -1 === tH ? hH : hH.slice(0, tH), CH = Math.min(20, Math.floor(LH / AH * 20));
```

#### 2121. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18090` → after: `L18113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18113) · [Before (L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18090)

```diff
-         className: CU()("FrontlineTeamScore", yU, `Team-${XU}`),
+         className: oH()("FrontlineTeamScore", rH, `Team-${BH}`),
```

#### 2122. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18131` → after: `L18154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18154) · [Before (L18131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18131)

```diff
-       const zU = (0, rU.i)(XU);
+       const LH = (0, cH.h)(BH);
```

#### 2123. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18136` → after: `L18159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18159) · [Before (L18136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18136)

```diff
-         children: (0, rU.e)(zU)
+         children: (0, cH.c)(LH)
```

#### 2124. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18149` → after: `L18172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18172) · [Before (L18149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18149)

```diff
-     var hU = zU(40281);
+     var yH = LH(40419);
```

#### 2125. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18152` → after: `L18175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18175) · [Before (L18152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18152)

```diff
-         this.hud = UU, this.points = new hU.d({
+         this.hud = HH, this.points = new yH.b({
```

#### 2126. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18164-L18165` → after: `L18187-L18188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18187-L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18187-L18188) · [Before (L18164-L18165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18164-L18165)

```diff
-     var XX = zU(7029),
-       zX = zU(2858);
+     var BB = LH(6981),
+       LB = LH(2864);
```

#### 2127. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18184` → after: `L18207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18207) · [Before (L18184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18184)

```diff
-         }, DU.k.UY(cX, this.view, !0)
+         }, CH.k.AX(AB, this.view, !0)
```

#### 2128. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18187` → after: `L18210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18210) · [Before (L18187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18187)

```diff
-     const QX = (0, yU.lazy)((() => (0, zX.d)(Promise.all([zU.e(253), zU.e(216)]).then((() => zU(44450))), (UU => UU.FrontlineMvpLineup)))),
+     const SB = (0, rH.lazy)((() => (0, LB.d)(Promise.all([LH.e(261), LH.e(222)]).then((() => LH(45236))), (HH => HH.FrontlineMvpLineup)))),
```

#### 2129. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18201-L18202` → after: `L18224-L18225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18224-L18225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18224-L18225) · [Before (L18201-L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18201-L18202)

```diff
-       const zU = (0, SU.j)(cX, XU.getView()),
-         cU = (0, rU.h)(zU.endsAt);
+       const LH = (0, KH.e)(AB, BH.getView()),
+         AH = (0, cH.g)(LH.endsAt);
```

#### 2130. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18215` → after: `L18238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18238) · [Before (L18215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18215)

```diff
-       } = (0, OU.I)(), [, AU, FU, oU, DU, , EU, YU] = XU, NU = (0, yU.useMemo)((() => FX.filter((UU => UU < YU.length))), [YU]), IU = (0, yU.useMemo)((() => NU.map((UU => {
+       } = (0, lH.B)(), [, hH, tH, zH, CH, , EH, XH] = BH, GH = (0, rH.useMemo)((() => tB.filter((HH => HH < XH.length))), [XH]), YH = (0, rH.useMemo)((() => GH.map((HH => {
```

#### 2131. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18228` → after: `L18251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18251) · [Before (L18228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18228)

```diff
-         className: CU()("FrontlineRoundEnd", `Result-${AU}`),
+         className: oH()("FrontlineRoundEnd", `Result-${hH}`),
```

#### 2132. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18242` → after: `L18265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18265) · [Before (L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18242)

```diff
-             }), (pU = QU(oX[AU]), /\p{Script=Arabic}/u.test(pU) ? [pU] : (0, XX.e)(pU)).map(((UU, XU) => (0, HU.jsx)("span", {
+             }), (uH = SH(zB[hH]), /\p{Script=Arabic}/u.test(uH) ? [uH] : (0, BB.d)(uH)).map(((HH, BH) => (0, NH.jsx)("span", {
```

#### 2133. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18297-L18298` → after: `L18320-L18321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18320-L18321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18320-L18321) · [Before (L18297-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18297-L18298)

```diff
-       } = (0, OU.I)(), [yU, QU, AU, FU, oU] = XU, [DU, EU] = cU(function(UU, XU) {
-         return 1 === XU && "damage" !== UU ? `frontlineRoundEnd:${UU}One` : `frontlineRoundEnd:${UU}`
+       } = (0, lH.B)(), [rH, SH, hH, tH, zH] = BH, [CH, EH] = AH(function(HH, BH) {
+         return 1 === BH && "damage" !== HH ? `frontlineRoundEnd:${HH}One` : `frontlineRoundEnd:${HH}`
```

#### 2134. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18304` → after: `L18327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18327) · [Before (L18304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18304)

```diff
-         className: CU()("FrontlineMvpCard", `Place-${zU+1}`, `Team-${QU}`),
+         className: oH()("FrontlineMvpCard", `Place-${LH+1}`, `Team-${SH}`),
```

#### 2135. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18306` → after: `L18329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18329) · [Before (L18306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18306)

```diff
-           "--revealMs": `${AX[zU]}ms`
+           "--revealMs": `${hB[LH]}ms`
```

#### 2136. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18342` → after: `L18365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18365) · [Before (L18342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18342)

```diff
-         null === (UU = EU) || void 0 === UU || UU.YC(!zU), null === (XU = YU) || void 0 === XU || XU.YC(!cU)
+         null === (HH = EH) || void 0 === HH || HH.vI(!LH), null === (BH = XH) || void 0 === BH || BH.vI(!AH)
```

#### 2137. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18346` → after: `L18369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18369) · [Before (L18346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18346)

```diff
-           DU = UU, EU = new GU(UU, AU), YU = new PU(UU, AU), NU = new UX(FU), aU(), IU = (0, QU.u)((0, yU.createElement)(yU.Fragment, null, (0, yU.createElement)(mU, {
+           CH = HH, EH = new vH(HH, hH), XH = new VH(HH, hH), GH = new HB(tH), QH(), YH = (0, SH.v)((0, rH.createElement)(rH.Fragment, null, (0, rH.createElement)(wH, {
```

#### 2138. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18361` → after: `L18384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18384) · [Before (L18361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18361)

```diff
-           null === (zU = EU) || void 0 === zU || zU.frame(UU, XU.tanHalfFovY), null === (cU = YU) || void 0 === cU || cU.frame(XU.cameraHeading), null === (yU = NU) || void 0 === yU || yU.frame(XU, null !== (QU = null === (FU = DU) || void 0 === FU ? void 0 : FU.getPositionView(A … [truncated]
+           null === (LH = EH) || void 0 === LH || LH.frame(HH, BH.tanHalfFovY), null === (AH = XH) || void 0 === AH || AH.frame(BH.cameraHeading), null === (rH = GH) || void 0 === rH || rH.frame(BH, null !== (SH = null === (tH = CH) || void 0 === tH ? void 0 : tH.getPositionView(h … [truncated]
```

#### 2139. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18364` → after: `L18387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18387) · [Before (L18364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18364)

```diff
-           "frontlineHud" === UU ? FU.PY(XU) : "frontlineScoreboard" === UU ? FU.receiveScoreboard(XU) : "frontlineRoundEnd" === UU ? oU.PY(XU) : "frontlinePrefs" === UU && (pU = XU, aU())
+           "frontlineHud" === HH ? tH.kX(BH) : "frontlineScoreboard" === HH ? tH.receiveScoreboard(BH) : "frontlineRoundEnd" === HH ? zH.kX(BH) : "frontlinePrefs" === HH && (uH = BH, QH())
```

#### 2140. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18369` → after: `L18392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18392) · [Before (L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18369)

```diff
-   40288: (UU, XU, zU) => {
+   40421: (HH, BH, LH) => {
```

#### 2141. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18428` → after: `L18451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18451) · [Before (L18428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18428)

```diff
-             "ballState" === UU ? (oU = null !== (zU = XU.eId) && void 0 !== zU ? zU : null, oU || aU()) : "frozen" === UU ? FU = XU.frozen : "pitchInfo" === UU && (DU = XU.goalZRed, EU = XU.goalZBlue, YU = Math.abs(EU - DU) / 2)
+             "ballState" === HH ? (zH = null !== (LH = BH.eId) && void 0 !== LH ? LH : null, zH || QH()) : "frozen" === HH ? tH = BH.frozen : "pitchInfo" === HH && (CH = BH.goalZRed, EH = BH.goalZBlue, XH = Math.abs(EH - CH) / 2)
```

#### 2142. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18430` → after: `L18453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18453) · [Before (L18430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18430)

```diff
-           LY: UU => {
+           IX: HH => {
```

#### 2143. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18436` → after: `L18459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18459) · [Before (L18436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18436)

```diff
-   40324: (UU, XU, zU) => {
+   40454: (HH, BH, LH) => {
```

#### 2144. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18446` → after: `L18469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18469) · [Before (L18446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18446)

```diff
-   40328: (UU, XU, zU) => {
+   40463: (HH, BH, LH) => {
```

#### 2145. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18460-L18462` → after: `L18483-L18485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18483-L18485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18483-L18485) · [Before (L18460-L18462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18460-L18462)

```diff
-     var yU = zU(61),
-       QU = zU(38782),
-       AU = zU(344);
+     var rH = LH(45),
+       SH = LH(38905),
+       hH = LH(317);
```

#### 2146. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18466` → after: `L18489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18489) · [Before (L18466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18466)

```diff
-       return `${"Basic"===XU?"":`${XU} `}${"Simple"===UU?"":`${UU} `}Lucky Block`
+       return `${"Basic"===BH?"":`${BH} `}${"Simple"===HH?"":`${HH} `}Lucky Block`
```

#### 2147. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18479` → after: `L18502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18502) · [Before (L18479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18479)

```diff
-       IU = [...["Red", "Blue", "Green", "Yellow"].map((UU => `${(0,AU._)(UU)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", YU, ...NU];
+       YH = [...["Red", "Blue", "Green", "Yellow"].map((HH => `${(0,hH.X)(HH)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", XH, ...GH];
```

#### 2148. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18484` → after: `L18507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18507) · [Before (L18484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18484)

```diff
-     var aU = zU(646);
+     var QH = LH(619);
```

#### 2149. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18500-L18502` → after: `L18523-L18525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18523-L18525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18523-L18525) · [Before (L18500-L18502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18500-L18502)

```diff
-       length: aU.s - aU.o
-     }, ((UU, XU) => aU.o + XU)), ...Array.from({
-       length: aU.o
+       length: QH.p - QH.m
+     }, ((HH, BH) => QH.m + BH)), ...Array.from({
+       length: QH.m
```

#### 2150. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18512` → after: `L18535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18535) · [Before (L18512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18512)

```diff
-         (null === cU || void 0 === cU ? void 0 : cU.name) === UU && (null !== (XU = cU.amount) && void 0 !== XU ? XU : 1) <= 1 && GU(UU) && this.pending.set(zU, UU)
+         (null === AH || void 0 === AH ? void 0 : AH.name) === HH && (null !== (BH = AH.amount) && void 0 !== BH ? BH : 1) <= 1 && vH(HH) && this.pending.set(LH, HH)
```

#### 2151. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18515` → after: `L18538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18538) · [Before (L18515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18515)

```diff
-         XU < aU.o && null === this.inventory.itemAt(XU) && GU(UU) && this.refill(XU, UU)
+         BH < QH.m && null === this.inventory.itemAt(BH) && vH(HH) && this.refill(BH, HH)
```

#### 2152. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18528` → after: `L18551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18551) · [Before (L18528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18528)

```diff
-             if (!FU || AU < aU.o && XU !== zU) continue;
+             if (!tH || hH < QH.m && BH !== LH) continue;
```

#### 2153. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18541-L18543` → after: `L18564-L18566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18564-L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18564-L18566) · [Before (L18541-L18543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18541-L18543)

```diff
-     var BU = zU(37325),
-       ZU = zU(73),
-       RU = zU(1106),
+     var PH = LH(37474),
+       TH = LH(69),
+       UH = LH(1038),
```

#### 2154. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18559-L18566` → after: `L18582-L18589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18582-L18589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18582-L18589) · [Before (L18559-L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18559-L18566)

```diff
-     var CU = zU(320),
-       wU = zU(2616),
-       qU = zU(27),
-       OU = zU(2827),
-       SU = zU(1993),
-       rU = zU(37318),
-       uU = zU(1390);
-     var fU = zU(1305);
+     var oH = LH(304),
+       IH = LH(2628),
+       fH = LH(15),
+       lH = LH(2817),
+       KH = LH(1986),
+       cH = LH(37472),
+       eH = LH(1315);
+     var qH = LH(1225);
```

#### 2155. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18568-L18570` → after: `L18591-L18593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18591-L18593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18591-L18593) · [Before (L18568-L18570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18568-L18570)

```diff
-       Basic: AU.H.whiteUiText,
-       Rare: AU.H.goldUiText,
-       Super: AU.H.cyanUiText
+       Basic: hH.K.whiteUiText,
+       Rare: hH.K.goldUiText,
+       Super: hH.K.cyanUiText
```

#### 2156. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18575` → after: `L18598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18598) · [Before (L18575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18575)

```diff
-       const UU = (0, wU.f)("currencyAmounts"),
+       const HH = (0, IH.j)("currencyAmounts"),
```

#### 2157. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18591` → after: `L18614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18614) · [Before (L18591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18591)

```diff
-       } = (0, qU.q)(["openEverythingMenuName"]), DU = (0, OU.e)(), [EU, YU] = (0, yU.useState)(QU), [NU, IU] = (0, yU.useState)(null), [pU, aU] = (0, yU.useState)(0), [tU, gU] = (0, yU.useState)([]), kU = (0, yU.useRef)(QU), GU = (0, yU.useRef)(!1), BU = (0, yU.useRef)(null), RU  … [truncated]
+       } = (0, fH.m)(["openEverythingMenuName"]), CH = (0, lH.b)(), [EH, XH] = (0, rH.useState)(SH), [GH, YH] = (0, rH.useState)(null), [uH, QH] = (0, rH.useState)(0), [WH, MH] = (0, rH.useState)([]), xH = (0, rH.useRef)(SH), vH = (0, rH.useRef)(!1), PH = (0, rH.useRef)(null), UH  … [truncated]
```

#### 2158. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18624` → after: `L18647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18647) · [Before (L18624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18624)

```diff
-           const zU = null !== (XU = FU.find((XU => UU < LU(XU)))) && void 0 !== XU ? XU : "Super";
+           const LH = null !== (BH = tH.find((BH => HH < kH(BH)))) && void 0 !== BH ? BH : "Super";
```

#### 2159. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18644` → after: `L18667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18667) · [Before (L18644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18644)

```diff
-                 transform: `scaleX(${dU.progress})`
+                 transform: `scaleX(${bH.progress})`
```

#### 2160. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18649` → after: `L18672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18672) · [Before (L18649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18649)

```diff
-                 animationDelay: `${null!==(XU=null===NU||void 0===NU?void 0:NU.delayMs)&&void 0!==XU?XU:0}ms`
+                 animationDelay: `${null!==(BH=null===GH||void 0===GH?void 0:GH.delayMs)&&void 0!==BH?BH:0}ms`
```

#### 2161. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18655` → after: `L18678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18678) · [Before (L18655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18655)

```diff
-                 animationDelay: `${null!==(cU=null===NU||void 0===NU?void 0:NU.delayMs)&&void 0!==cU?cU:0}ms`
+                 animationDelay: `${null!==(AH=null===GH||void 0===GH?void 0:GH.delayMs)&&void 0!==AH?AH:0}ms`
```

#### 2162. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18657` → after: `L18680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18680) · [Before (L18657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18657)

```diff
-               children: (0, fU.jsx)(SU.c, {
+               children: (0, qH.jsx)(KH.e, {
```

#### 2163. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18661` → after: `L18684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18684) · [Before (L18661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18661)

```diff
-             }, null !== (zU = null === NU || void 0 === NU ? void 0 : NU.id) && void 0 !== zU ? zU : 0), (0, fU.jsx)("span", {
+             }, null !== (LH = null === GH || void 0 === GH ? void 0 : GH.id) && void 0 !== LH ? LH : 0), (0, qH.jsx)("span", {
```

#### 2164. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18664` → after: `L18687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18687) · [Before (L18664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18664)

```diff
-             }), wU && (0, fU.jsx)(uU.d, {
+             }), IH && (0, qH.jsx)(eH.c, {
```

#### 2165. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18694` → after: `L18717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18717) · [Before (L18694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18694)

```diff
-           transform: `translate(${AU}px, ${FU}px) scale(0.3)`,
+           transform: `translate(${hH}px, ${tH}px) scale(0.3)`,
```

#### 2166. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18697` → after: `L18720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18720) · [Before (L18697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18697)

```diff
-           transform: `translate(${oU}px, ${DU}px) scale(1.3)`,
+           transform: `translate(${zH}px, ${CH}px) scale(1.3)`,
```

#### 2167. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18701` → after: `L18724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18724) · [Before (L18701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18701)

```diff
-           transform: `translate(${yU.left}px, ${yU.top}px) scale(0.8)`,
+           transform: `translate(${rH.left}px, ${rH.top}px) scale(0.8)`,
```

#### 2168. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18715` → after: `L18738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18738) · [Before (L18715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18715)

```diff
-         children: (0, fU.jsx)(SU.c, {
+         children: (0, qH.jsx)(KH.e, {
```

#### 2169. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18721` → after: `L18744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18744) · [Before (L18721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18721)

```diff
-     var sU = zU(31);
+     var FH = LH(18);
```

#### 2170. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18733` → after: `L18756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18756) · [Before (L18733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18733)

```diff
-       return null !== (XU = mU[UU.split(" ")[0]]) && void 0 !== XU ? XU : "#e07bff"
+       return null !== (BH = wH[HH.split(" ")[0]]) && void 0 !== BH ? BH : "#e07bff"
```

#### 2171. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18756` → after: `L18779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18779) · [Before (L18756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18756)

```diff
-         this.UY()
+         this.AX()
```

#### 2172. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18771` → after: `L18794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18794) · [Before (L18771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18771)

```diff
-         zU && this.UY()
+         LH && this.AX()
```

#### 2173. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18777` → after: `L18800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18800) · [Before (L18777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18777)

```diff
-         }, sU.k.UY(nU, this.view)
+         }, FH.k.AX(DH, this.view)
```

#### 2174. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18780` → after: `L18803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18803) · [Before (L18780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18780)

```diff
-     var JU = zU(1492);
+     var aH = LH(1450);
```

#### 2175. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18783` → after: `L18806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18806) · [Before (L18783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18783)

```diff
-       return document.querySelector(`.HotBar [data-inven-idx="${UU}"]`)
+       return document.querySelector(`.HotBar [data-inven-idx="${HH}"]`)
```

#### 2176. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18793` → after: `L18816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18816) · [Before (L18793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18793)

```diff
-         cU(null !== (UU = null === (zU = jU(XU.slot)) || void 0 === zU ? void 0 : zU.getBoundingClientRect()) && void 0 !== UU ? UU : null)
+         AH(null !== (HH = null === (LH = sH(BH.slot)) || void 0 === LH ? void 0 : LH.getBoundingClientRect()) && void 0 !== HH ? HH : null)
```

#### 2177. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18834` → after: `L18857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18857) · [Before (L18834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18834)

```diff
-       const zU = (0, JU.j)(nU, XU.getView());
+       const LH = (0, aH.e)(DH, BH.getView());
```

#### 2178. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18861` → after: `L18884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18884) · [Before (L18861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18861)

```diff
-           placeAgainstBeds: (0, QU.d)()
+           placeAgainstBeds: (0, SH.e)()
```

#### 2179. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18864` → after: `L18887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18887) · [Before (L18864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18864)

```diff
-           FU = UU, DU = (0, BU.u)((0, yU.createElement)(yU.Fragment, null, (0, yU.createElement)(MU), (0, yU.createElement)(TU, {
+           tH = HH, CH = (0, PH.v)((0, rH.createElement)(rH.Fragment, null, (0, rH.createElement)(RH), (0, rH.createElement)(pH, {
```

#### 2180. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18872-L18873` → after: `L18895-L18896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18895-L18896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18895-L18896) · [Before (L18872-L18873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18872-L18873)

```diff
-         LY: () => {
-           EU.LY(), YU.LY()
+         IX: () => {
+           EH.IX(), XH.IX()
```

#### 2181. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18876` → after: `L18899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18899) · [Before (L18876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18876)

```diff
-           "luckyGearUpgrade" === UU && YU.PY(XU)
+           "luckyGearUpgrade" === HH && XH.kX(BH)
```

#### 2182. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18893` → after: `L18916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18916) · [Before (L18893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18893)

```diff
-   40333: (UU, XU, zU) => {
+   40472: (HH, BH, LH) => {
```

#### 2183. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18903` → after: `L18926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18926) · [Before (L18903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18903)

```diff
-   40338: (UU, XU, zU) => {
+   40476: (HH, BH, LH) => {
```

#### 2184. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18907` → after: `L18930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18930) · [Before (L18907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18907)

```diff
-     var cU = zU(31);
+     var AH = LH(18);
```

#### 2185. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18915` → after: `L18938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18938) · [Before (L18915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18915)

```diff
-           XU || "Workbench" !== yU.getMetaInfo(FU).rootName || cU.k.UY("toggleMenu", "inventory|Workbench")
+           BH || "Workbench" !== rH.getMetaInfo(tH).rootName || AH.k.AX("toggleMenu", "inventory|Workbench")
```

#### 2186. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18920` → after: `L18943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18943) · [Before (L18920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18920)

```diff
-   40342: (UU, XU, zU) => {
+   40484: (HH, BH, LH) => {
```

#### 2187. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18946` → after: `L18969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18969) · [Before (L18946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18946)

```diff
-         LY: () => {
+         IX: () => {
```

#### 2188. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18972` → after: `L18995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18995) · [Before (L18972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18972)

```diff
-   40349: (UU, XU, zU) => {
+   40486: (HH, BH, LH) => {
```

#### 2189. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18978-L18984` → after: `L19001-L19007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19001-L19007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19001-L19007) · [Before (L18978-L18984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18978-L18984)

```diff
-     var QU = zU(61),
-       AU = zU(37325),
-       FU = zU(27),
-       oU = zU(1492),
-       DU = zU(2058),
-       EU = zU(1193),
-       YU = zU(1106),
+     var SH = LH(45),
+       hH = LH(37474),
+       tH = LH(15),
+       zH = LH(1450),
+       CH = LH(2064),
+       EH = LH(1123),
+       XH = LH(1038),
```

#### 2190. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18986-L18993` → after: `L19009-L19016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19009-L19016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19009-L19016) · [Before (L18986-L18993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18986-L18993)

```diff
-       IU = zU(1680),
-       pU = zU(40357),
-       aU = zU(37318),
-       tU = zU(1390),
-       gU = zU(1993),
-       kU = zU(2053),
-       GU = zU(3805),
-       BU = zU(1800);
+       YH = LH(1659),
+       uH = LH(40495),
+       QH = LH(37472),
+       WH = LH(1315),
+       MH = LH(1986),
+       xH = LH(2059),
+       vH = LH(3779),
+       PH = LH(1789);
```

#### 2191. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19002` → after: `L19025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19025) · [Before (L19002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19002)

```diff
-     var PU = zU(31);
+     var VH = LH(18);
```

#### 2192. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19092` → after: `L19115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19115) · [Before (L19092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19092)

```diff
-       return null !== (XU = CU.get(UU)) && void 0 !== XU ? XU : null
+       return null !== (BH = oH.get(HH)) && void 0 !== BH ? BH : null
```

#### 2193. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19156` → after: `L19179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19179) · [Before (L19156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19156)

```diff
-           this.placement.stop(), this.oY(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+           this.placement.stop(), this.XX(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
```

#### 2194. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19158` → after: `L19181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19181) · [Before (L19158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19158)

```diff
-           this.placement.start(UU), (0, AU.j)()
+           this.placement.start(HH), (0, hH.g)()
```

#### 2195. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19160` → after: `L19183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19183) · [Before (L19160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19160)

```diff
-           this.api.sendCommand(`${yU} cancel`)
+           this.api.sendCommand(`${rH} cancel`)
```

#### 2196. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19168` → after: `L19191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19191) · [Before (L19168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19168)

```diff
-         this.pages = OU(XU, zU), PU.k.UY(SU, this.pages, !0)
+         this.pages = lH(BH, LH), VH.k.AX(KH, this.pages, !0)
```

#### 2197. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19172` → after: `L19195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19195) · [Before (L19172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19172)

```diff
-         this.openRequested = XU, this.LY()
+         this.openRequested = BH, this.IX()
```

#### 2198. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19176` → after: `L19199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19199) · [Before (L19176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19176)

```diff
-         null === UU || FU.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, IU.p)() || (0, BU.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = UU, (0, AU.r)()))
+         null === HH || tH.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, YH.t)() || (0, PH.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = HH, (0, hH.t)()))
```

#### 2199. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19179` → after: `L19202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19202) · [Before (L19179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19179)

```diff
-         this.reported.has(UU) || (this.reported.add(UU), this.api.sendCommand(`${yU} report ${UU}`))
+         this.reported.has(HH) || (this.reported.add(HH), this.api.sendCommand(`${rH} report ${HH}`))
```

#### 2200. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19182` → after: `L19205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19205) · [Before (L19182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19182)

```diff
-     var uU = zU(1305);
+     var eH = LH(1225);
```

#### 2201. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19189` → after: `L19212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19212) · [Before (L19189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19189)

```diff
-       const zU = (0, oU.j)(SU, XU.getPages()),
+       const LH = (0, zH.e)(KH, BH.getPages()),
```

#### 2202. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19192` → after: `L19215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19215) · [Before (L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19192)

```diff
-         } = (0, FU.q)(["isTouchScreen"]),
+         } = (0, tH.m)(["isTouchScreen"]),
```

#### 2203. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19195` → after: `L19218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19218) · [Before (L19195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19195)

```diff
-         } = (0, EU.I)(),
+         } = (0, EH.B)(),
```

#### 2204. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19198-L19199` → after: `L19221-L19222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19221-L19222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19221-L19222) · [Before (L19198-L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19198-L19199)

```diff
-       return (0, QU.useEffect)((() => YU ? (0, pU.d)(fU) : void 0), [YU]), (0, GU.d)((UU => YU && UU.code === fU && !UU.repeat && !(0, BU.isTypingInInput)()), (UU => {
-         (0, IU.C)(UU, !0, AU.r)
+       return (0, SH.useEffect)((() => XH ? (0, uH.b)(qH) : void 0), [XH]), (0, vH.c)((HH => XH && HH.code === qH && !HH.repeat && !(0, PH.isTypingInInput)()), (HH => {
+         (0, YH.H)(HH, !0, hH.t)
```

#### 2205. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19210` → after: `L19233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19233) · [Before (L19210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19210)

```diff
-             onClick: AU.r,
+             onClick: hH.t,
```

#### 2206. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19213` → after: `L19236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19236) · [Before (L19213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19213)

```diff
-               children: (0, uU.jsx)(gU.c, {
+               children: (0, eH.jsx)(MH.e, {
```

#### 2207. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19217` → after: `L19240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19240) · [Before (L19217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19217)

```diff
-             }), yU("plotsGame:journalButton"), !cU && (0, uU.jsx)(kU.c, {
+             }), rH("plotsGame:journalButton"), !AH && (0, eH.jsx)(xH.b, {
```

#### 2208. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19220` → after: `L19243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19243) · [Before (L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19220)

```diff
-             }), "openJournal" === DU.hint && (0, uU.jsx)(tU.d, {
+             }), "openJournal" === CH.hint && (0, eH.jsx)(WH.c, {
```

#### 2209. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19228` → after: `L19251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19251) · [Before (L19228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19228)

```diff
-     var HU = zU(9782);
+     var NH = LH(9940);
```

#### 2210. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19259` → after: `L19282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19282) · [Before (L19259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19259)

```diff
-         return `r${UU}|m${Number(XU)}`
+         return `r${HH}|m${Number(BH)}`
```

#### 2211. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19293` → after: `L19316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19316) · [Before (L19293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19293)

```diff
-         const [, IU, pU] = null !== (yU = sU.exec(YU)) && void 0 !== yU ? yU : [];
+         const [, YH, uH] = null !== (rH = FH.exec(XH)) && void 0 !== rH ? rH : [];
```

#### 2212. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19296` → after: `L19319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19319) · [Before (L19296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19296)

```diff
-           NU = null !== (aU = null === (tU = QU[`${EU}|meta|${[VU.split("").filter(((UU,XU)=>IU.split("").some((UU=>{const zU=VU.indexOf(UU);return((cU?3-zU:zU)+AU)%4===XU})))).join(""),pU].filter(Boolean).join("|")}`]) || void 0 === tU ? void 0 : tU.id) && void 0 !== aU ? aU : F … [truncated]
+           GH = null !== (QH = null === (WH = SH[`${EH}|meta|${[nH.split("").filter(((HH,BH)=>YH.split("").some((HH=>{const LH=nH.indexOf(HH);return((AH?3-LH:LH)+hH)%4===BH})))).join(""),uH].filter(Boolean).join("|")}`]) || void 0 === WH ? void 0 : WH.id) && void 0 !== QH ? QH : t … [truncated]
```

#### 2213. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19301` → after: `L19324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19324) · [Before (L19301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19301)

```diff
-           let XU = YU.replace(`rot${DU}`, `rot${UU}`);
+           let BH = XH.replace(`rot${CH}`, `rot${HH}`);
```

#### 2214. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19306` → after: `L19329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19329) · [Before (L19306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19306)

```diff
-             XU = `${yU[1]}|${UU.join("")}`
+             BH = `${rH[1]}|${HH.join("")}`
```

#### 2215. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19308-L19309` → after: `L19331-L19332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19331-L19332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19331-L19332) · [Before (L19308-L19309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19308-L19309)

```diff
-           const AU = `${EU}|${XU}`;
-           if (NU = null !== (gU = null === (kU = QU[AU]) || void 0 === kU ? void 0 : kU.id) && void 0 !== gU ? gU : null, null === NU) {
+           const hH = `${EH}|${BH}`;
+           if (GH = null !== (MH = null === (xH = SH[hH]) || void 0 === xH ? void 0 : xH.id) && void 0 !== MH ? MH : null, null === GH) {
```

#### 2216. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19323-L19324` → after: `L19346-L19347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19346-L19347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19346-L19347) · [Before (L19323-L19324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19323-L19324)

```diff
-       const QU = yU ? XU : UU;
-       return null === cU ? QU : cU - QU
+       const SH = rH ? BH : HH;
+       return null === AH ? SH : AH - SH
```

#### 2217. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19332-L19333` → after: `L19355-L19356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19355-L19356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19355-L19356) · [Before (L19332-L19333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19332-L19333)

```diff
-       const QU = yU ? UU : XU;
-       return null === cU ? QU : cU - QU
+       const SH = rH ? HH : BH;
+       return null === AH ? SH : AH - SH
```

#### 2218. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19400` → after: `L19423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19423) · [Before (L19400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19400)

```diff
-       const zU = `${UU}|${XU}`;
+       const LH = `${HH}|${BH}`;
```

#### 2219. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19424` → after: `L19447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19447) · [Before (L19424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19424)

```diff
-               throw new Error(`Invalid rotation: ${UU}`)
+               throw new Error(`Invalid rotation: ${HH}`)
```

#### 2220. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19431` → after: `L19454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19454) · [Before (L19431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19431)

```diff
-         }(XU, oU, DU), YU = mU.for(HU.h), NU = QU.map((UU => (0, HU.f)(YU.turnBlockId((0, HU.j)(UU), XU, !1)))), IU = [];
+         }(BH, zH, CH), XH = wH.for(NH.g), GH = SH.map((HH => (0, NH.d)(XH.turnBlockId((0, NH.h)(HH), BH, !1)))), YH = [];
```

#### 2221. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19465` → after: `L19488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19488) · [Before (L19465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19465)

```diff
-             cU[XU[1]] = (null !== (zU = cU[XU[1]]) && void 0 !== zU ? zU : 0) + 1
+             AH[BH[1]] = (null !== (LH = AH[BH[1]]) && void 0 !== LH ? LH : 0) + 1
```

#### 2222. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19486` → after: `L19509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19509) · [Before (L19486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19486)

```diff
-         this.shown = UU, this.topOpen = 0, null === UU && this.UY(null)
+         this.shown = HH, this.topOpen = 0, null === HH && this.AX(null)
```

#### 2223. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19490` → after: `L19513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19513) · [Before (L19490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19490)

```diff
-         null !== cU && (UU >= XU && (this.topOpen = zU), this.UY(hU(cU.id, XU - cU.y, UU >= XU ? zU : this.topOpen + zU)))
+         null !== AH && (HH >= BH && (this.topOpen = LH), this.AX(yH(AH.id, BH - AH.y, HH >= BH ? LH : this.topOpen + LH)))
```

#### 2224. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19494` → after: `L19517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19517) · [Before (L19494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19494)

```diff
-         (null === UU || void 0 === UU ? void 0 : UU.id) === (null === XU || void 0 === XU ? void 0 : XU.id) && (null === UU || void 0 === UU ? void 0 : UU.filled) === (null === XU || void 0 === XU ? void 0 : XU.filled) && (null === UU || void 0 === UU ? void 0 : UU.total) === (nu … [truncated]
+         (null === HH || void 0 === HH ? void 0 : HH.id) === (null === BH || void 0 === BH ? void 0 : BH.id) && (null === HH || void 0 === HH ? void 0 : HH.filled) === (null === BH || void 0 === BH ? void 0 : BH.filled) && (null === HH || void 0 === HH ? void 0 : HH.total) === (nu … [truncated]
```

#### 2225. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19508` → after: `L19531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19531) · [Before (L19508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19508)

```diff
-         this.plot = UU, PU.k.UY(XX, UU, !0)
+         this.plot = HH, VH.k.AX(BB, HH, !0)
```

#### 2226. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19514` → after: `L19537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19537) · [Before (L19514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19514)

```diff
-         this.guide = UU, PU.k.UY(zX, UU, !0)
+         this.guide = HH, VH.k.AX(LB, HH, !0)
```

#### 2227. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19517` → after: `L19540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19540) · [Before (L19517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19517)

```diff
-         PU.k.UY(cX, void 0, !0)
+         VH.k.AX(AB, void 0, !0)
```

#### 2228. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19520-L19523` → after: `L19543-L19546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19543-L19546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19543-L19546) · [Before (L19520-L19523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19520-L19523)

```diff
-     var QX = zU(1294),
-       AX = zU(39348),
-       FX = zU(37604),
-       oX = zU(1515);
+     var SB = LH(1214),
+       hB = LH(39448),
+       tB = LH(37747),
+       zB = LH(1471);
```

#### 2229. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19532` → after: `L19555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19555) · [Before (L19532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19532)

```diff
-       } = (0, EU.I)();
+       } = (0, EH.B)();
```

#### 2230. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19536` → after: `L19559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19559) · [Before (L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19536)

```diff
-         ...(0, oX.f)(XU, "pointerup"),
+         ...(0, zB.c)(BH, "pointerup"),
```

#### 2231. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19550-L19551` → after: `L19573-L19574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19573-L19574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19573-L19574) · [Before (L19550-L19551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19550-L19551)

```diff
-       } = (0, EU.I)(), FU = (0, QU.useRef)(XU);
-       return FU.current = XU, (0, QX.t)("popup", FU, null === cU ? null : cU.onSkip, null !== cU, null, "controller:menusSkipTutorial"), (0, uU.jsxs)(FX.d, {
+       } = (0, EH.B)(), tH = (0, SH.useRef)(BH);
+       return tH.current = BH, (0, SB.r)("popup", tH, null === AH ? null : AH.onSkip, null !== AH, null, "controller:menusSkipTutorial"), (0, eH.jsxs)(tB.g, {
```

#### 2232. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19591` → after: `L19614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19614) · [Before (L19591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19591)

```diff
-           children: (0, uU.jsx)(tU.d, {
+           children: (0, eH.jsx)(WH.c, {
```

#### 2233. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19621` → after: `L19644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19644) · [Before (L19621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19621)

```diff
-               transform: `scaleX(${cU/zU})`
+               transform: `scaleX(${AH/LH})`
```

#### 2234. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19638` → after: `L19661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19661) · [Before (L19638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19638)

```diff
-       } = (0, EU.I)(), {
+       } = (0, EH.B)(), {
```

#### 2235. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19640` → after: `L19663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19663) · [Before (L19640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19640)

```diff
-       } = (0, FU.q)(["isTouchScreen"]), QU = XU.filled < 5;
+       } = (0, tH.m)(["isTouchScreen"]), SH = BH.filled < 5;
```

#### 2236. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19647` → after: `L19670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19670) · [Before (L19647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19647)

```diff
-             children: (0, uU.jsx)(tU.d, {
+             children: (0, eH.jsx)(WH.c, {
```

#### 2237. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19679` → after: `L19702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19702) · [Before (L19679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19679)

```diff
-         children: (0, uU.jsx)(tU.d, {
+         children: (0, eH.jsx)(WH.c, {
```

#### 2238. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19685-L19693` → after: `L19708-L19716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19708-L19716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19708-L19716) · [Before (L19685-L19693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19685-L19693)

```diff
-     var tX = zU(1310),
-       gX = zU(2827),
-       kX = zU(39196),
-       GX = zU(38938),
-       BX = zU(37659),
-       ZX = zU(9821),
-       RX = zU(9836),
-       PX = zU(344),
-       WX = zU(38557);
+     var WB = LH(1241),
+       MB = LH(2817),
+       xB = LH(39279),
+       vB = LH(39058),
+       PB = LH(37793),
+       TB = LH(9965),
+       UB = LH(9982),
+       VB = LH(317),
+       OB = LH(38667);
```

#### 2239. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19714` → after: `L19737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19737) · [Before (L19714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19714)

```diff
-       LX = [...BX.b.blockRemoveActionRoots, ...GX.e, ...ZX.e, "Board", "Code Block", "Custom Lobby Block"],
+       kB = [...PB.d.blockRemoveActionRoots, ...vB.d, ...TB.j, "Board", "Code Block", "Custom Lobby Block"],
```

#### 2240. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19721` → after: `L19744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19744) · [Before (L19721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19721)

```diff
-           XU = Math.max(...UU.map((UU => HU.h[UU].id))) + 1,
+           BH = Math.max(...HH.map((HH => NH.g[HH].id))) + 1,
```

#### 2241. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19741` → after: `L19764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19764) · [Before (L19741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19741)

```diff
-           } = HU.h[NU];
+           } = NH.g[GH];
```

#### 2242. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19747` → after: `L19770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19770) · [Before (L19747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19747)

```diff
-             cU[UU] = DU(`${XU.rootName}|rot${zU?XU.rot%4+1:XU.rot}|${XU.halfblockPlacement}|${pU.replace("Right","Left")}`)
+             AH[HH] = CH(`${BH.rootName}|rot${LH?BH.rot%4+1:BH.rot}|${BH.halfblockPlacement}|${uH.replace("Right","Left")}`)
```

#### 2243. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19749` → after: `L19772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19772) · [Before (L19749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19749)

```diff
-           yU[UU] = IU ? 1 : 0, QU[UU] = oU || null !== XU.open || NU in WX.c || EU.has(XU.rootName) || void 0 !== (0, GX.g)(XU.rootName) ? 1 : 0;
+           rH[HH] = YH ? 1 : 0, SH[HH] = zH || null !== BH.open || GH in OB.c || EH.has(BH.rootName) || void 0 !== (0, vB.h)(BH.rootName) ? 1 : 0;
```

#### 2244. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19753` → after: `L19776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19776) · [Before (L19753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19753)

```diff
-           AU[UU] = null !== XU.open || GX.e.includes(aU) || aU.includes("Bookshelf") || aU.includes("Mailbox") ? 1 : 0, FU[UU] = null !== (YU = (0, kX.i)(UU)) && void 0 !== YU ? YU : aU
+           hH[HH] = null !== BH.open || vB.d.includes(QH) || QH.includes("Bookshelf") || QH.includes("Mailbox") ? 1 : 0, tH[HH] = null !== (XH = (0, xB.e)(HH)) && void 0 !== XH ? XH : QH
```

#### 2245. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19767` → after: `L19790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19790) · [Before (L19767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19767)

```diff
-       return Object.keys(HU.h).filter((UU => HU.h[UU].name === UU))
+       return Object.keys(NH.g).filter((HH => NH.g[HH].name === HH))
```

#### 2246. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19772` → after: `L19795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19795) · [Before (L19772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19772)

```diff
-       const zU = HU.h[UU],
+       const LH = NH.g[HH],
```

#### 2247. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19777-L19779` → after: `L19800-L19802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19800-L19802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19800-L19802) · [Before (L19777-L19779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19777-L19779)

```diff
-         [, ...QU] = (null !== (XU = zU.rootMetaDesc) && void 0 !== XU ? XU : UU).split("|"),
-         AU = QU.filter((UU => !("meta" === UU || eX.test(UU) || (0, RX.A)(zU) && /^[nesw]+$/.test(UU) || ZX.e.includes(cU) && /^[lrud]+$/.test(UU) || PX.E.includes(cU) && /^(left|right)$/.test(UU))));
-       return [cU, ...AU].map((UU => "fenceGate" === zU.model && UU === `rot${yU}` ? "rot" + ((yU - 1) % 2 + 1) : UU)).join("|")
+         [, ...SH] = (null !== (BH = LH.rootMetaDesc) && void 0 !== BH ? BH : HH).split("|"),
+         hH = SH.filter((HH => !("meta" === HH || mB.test(HH) || (0, UB.H)(LH) && /^[nesw]+$/.test(HH) || TB.j.includes(AH) && /^[lrud]+$/.test(HH) || VB.J.includes(AH) && /^(left|right)$/.test(HH))));
+       return [AH, ...hH].map((HH => "fenceGate" === LH.model && HH === `rot${rH}` ? "rot" + ((rH - 1) % 2 + 1) : HH)).join("|")
```

#### 2248. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19799` → after: `L19822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19822) · [Before (L19799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19799)

```diff
-       return dX.get(HU.h[UU].meta.rootName)
+       return bB.get(NH.g[HH].meta.rootName)
```

#### 2249. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19801-L19802` → after: `L19824-L19825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19824-L19825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19824-L19825) · [Before (L19801-L19802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19801-L19802)

```diff
-     var iX = zU(9814),
-       HX = zU(9834);
+     var gB = LH(9957),
+       NB = LH(9979);
```

#### 2250. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19813` → after: `L19836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19836) · [Before (L19813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19813)

```diff
-       nX = [0, 1, 2, 3].map((UU => (0, iX.b)((0, iX.n)([
+       DB = [0, 1, 2, 3].map((HH => (0, gB.b)((0, gB.l)([
```

#### 2251. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19819` → after: `L19842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19842) · [Before (L19819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19819)

```diff
-         Ft: XU,
+         hW: BH,
```

#### 2252. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19823-L19824` → after: `L19846-L19847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19846-L19847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19846-L19847) · [Before (L19823-L19824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19823-L19824)

```diff
-       } = HU.h[UU];
-       return void 0 !== XU ? XU : "CentreCross" === zU ? vX : null !== cU && void 0 !== cU && cU.startsWith("torch") ? yU.halfblockPlacement === HX.e.side ? nX[yU.rot - 1] : yU.halfblockPlacement === HX.e.top ? sX : VX : MX
+       } = NH.g[HH];
+       return void 0 !== BH ? BH : "CentreCross" === LH ? jB : null !== AH && void 0 !== AH && AH.startsWith("torch") ? rH.halfblockPlacement === NB.c.side ? DB[rH.rot - 1] : rH.halfblockPlacement === NB.c.top ? FB : nB : RB
```

#### 2253. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19826` → after: `L19849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19849) · [Before (L19826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19826)

```diff
-     var lX = zU(212);
+     var ZB = LH(176);
```

#### 2254. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19832` → after: `L19855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19855) · [Before (L19832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19832)

```diff
-         const XU = lX.f.aY;
+         const BH = ZB.g.xX;
```

#### 2255. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19859` → after: `L19882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19882) · [Before (L19859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19859)

```diff
-     var JX = zU(39299);
+     var aB = LH(39396);
```

#### 2256. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19926` → after: `L19949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19949) · [Before (L19926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19926)

```diff
-           (0, JX.g)(UU, XU, cU, zU.size + .01, .12)
+           (0, aB.h)(HH, BH, AH, LH.size + .01, .12)
```

#### 2257. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19952` → after: `L19975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R19975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L19975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L19975) · [Before (L19952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19952)

```diff
-         (0, JX.c)(UU, XU, FU, oU, QU)
+         (0, aB.d)(HH, BH, tH, zH, SH)
```

#### 2258. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L19990` → after: `L20013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20013) · [Before (L19990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L19990)

```diff
-         XU.set(AU, (null !== (zU = XU.get(AU)) && void 0 !== zU ? zU : 0) + 1)
+         BH.set(hH, (null !== (LH = BH.get(hH)) && void 0 !== LH ? LH : 0) + 1)
```

#### 2259. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20032` → after: `L20055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20055) · [Before (L20032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20032)

```diff
-           const AU = null !== (XU = null === (zU = this.placing) || void 0 === zU ? void 0 : zU.rotation) && void 0 !== XU ? XU : 0,
+           const hH = null !== (BH = null === (LH = this.placing) || void 0 === LH ? void 0 : LH.rotation) && void 0 !== BH ? BH : 0,
```

#### 2260. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20036` → after: `L20059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20059) · [Before (L20036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20036)

```diff
-             oU = this.api.wG(this.localPlayerId),
+             zH = this.api.hT(this.localPlayerId),
```

#### 2261. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20062` → after: `L20085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20085) · [Before (L20062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20062)

```diff
-             }(this.api, FU, oU, this.camera.forward)) && void 0 !== QU ? QU : this.cornerOnTarget(FU)) && void 0 !== cU ? cU : [Math.floor(oU[0]) + 2, Math.floor(oU[2])];
+             }(this.api, tH, zH, this.camera.forward)) && void 0 !== SH ? SH : this.cornerOnTarget(tH)) && void 0 !== AH ? AH : [Math.floor(zH[0]) + 2, Math.floor(zH[2])];
```

#### 2262. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20073` → after: `L20096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20096) · [Before (L20073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20073)

```diff
-           }, this.update(), this.api.sendCommand(`${yU} preview`)
+           }, this.update(), this.api.sendCommand(`${rH} preview`)
```

#### 2263. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20115` → after: `L20138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20138) · [Before (L20115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20115)

```diff
-           UU.waiting || (UU.blocked ? this.UY({
+           HH.waiting || (HH.blocked ? this.AX({
```

#### 2264. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20126` → after: `L20149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20149) · [Before (L20126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20126)

```diff
-           this.api.sendCommand(`${yU} place ${XU} ${cU.join(" ")} ${zU}`), UU.sent = {
+           this.api.sendCommand(`${rH} place ${BH} ${AH.join(" ")} ${LH}`), HH.sent = {
```

#### 2265. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20133` → after: `L20156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20156) · [Before (L20133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20133)

```diff
-           null !== this.placing && (this.close(), this.api.sendCommand(`${yU} preview off`))
+           null !== this.placing && (this.close(), this.api.sendCommand(`${rH} preview off`))
```

#### 2266. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20174` → after: `L20197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20197) · [Before (L20174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20174)

```diff
-         const [XU, zU, cU] = this.api.wG(this.localPlayerId);
+         const [BH, LH, AH] = this.api.hT(this.localPlayerId);
```

#### 2267. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20215` → after: `L20238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20238) · [Before (L20215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20215)

```diff
-         this.placing = null, this.meshes.dispose(), this.UY(null)
+         this.placing = null, this.meshes.dispose(), this.AX(null)
```

#### 2268. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20242` → after: `L20265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20265) · [Before (L20242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20242)

```diff
-         (null === oU || void 0 === oU ? void 0 : oU.id) === UU && oU.blocked === AU && oU.toClear === FU && oU.waiting === DU && oU.refusals === cU && oU.settled === EU || this.UY({
+         (null === zH || void 0 === zH ? void 0 : zH.id) === HH && zH.blocked === hH && zH.toClear === tH && zH.waiting === CH && zH.refusals === AH && zH.settled === EH || this.AX({
```

#### 2269. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20252` → after: `L20275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20275) · [Before (L20252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20252)

```diff
-         this.view = UU, PU.k.UY(oz, UU, !0)
+         this.view = HH, VH.k.AX(zL, HH, !0)
```

#### 2270. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20270` → after: `L20293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20293) · [Before (L20270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20270)

```diff
-     var Iz = zU(4982);
+     var YL = LH(4951);
```

#### 2271. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20322` → after: `L20345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20345) · [Before (L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20322)

```diff
-       return null === (0, oU.j)(oz, XU.getView()) ? null : (0, uU.jsx)(gz, {
+       return null === (0, zH.e)(zL, BH.getView()) ? null : (0, eH.jsx)(ML, {
```

#### 2272. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20376` → after: `L20399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20399) · [Before (L20376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20376)

```diff
-       return (0, tX.p)().some((UU => UU !== tX.c && UU !== az))
+       return (0, WB.p)().some((HH => HH !== WB.d && HH !== QL))
```

#### 2273. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20390` → after: `L20413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20413) · [Before (L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20390)

```diff
-       } = (0, EU.I)(), {
+       } = (0, EH.B)(), {
```

#### 2274. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20392` → after: `L20415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20415) · [Before (L20392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20392)

```diff
-       } = (0, FU.q)(["isTouchScreen"]), IU = (0, oU.j)(zX, XU.getGuide()), pU = (0, oU.j)(XX, XU.getPlot()), aU = (0, oU.j)(bU, cU.get()), tU = function(UU) {
+       } = (0, tH.m)(["isTouchScreen"]), YH = (0, zH.e)(LB, BH.getGuide()), uH = (0, zH.e)(BB, BH.getPlot()), QH = (0, zH.e)(iH, AH.get()), WH = function(HH) {
```

#### 2275. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20397` → after: `L20420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20420) · [Before (L20397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20397)

```diff
-         } = (0, FU.q)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), yU = (0, gX.e)(), [AU, DU] = (0, QU.useState)(Gz);
+         } = (0, tH.m)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), rH = (0, MB.b)(), [hH, CH] = (0, SH.useState)(vL);
```

#### 2276. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20403` → after: `L20426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20426) · [Before (L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20403)

```diff
-           const XU = (0, tX.m)(UU),
+           const BH = (0, WB.l)(HH),
```

#### 2277. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20409` → after: `L20432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20432) · [Before (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20409)

```diff
-         const EU = (0, oU.j)(oz, UU.getView()),
+         const EH = (0, zH.e)(zL, HH.getView()),
```

#### 2278. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20421` → after: `L20444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20444) · [Before (L20421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20421)

```diff
-         return (0, oU.f)(cX, (() => {
+         return (0, zH.d)(AB, (() => {
```

#### 2279. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20463` → after: `L20486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20486) · [Before (L20463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20463)

```diff
-           target: NU ? LU : WU,
+           target: GH ? kH : OH,
```

#### 2280. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20476-L20477` → after: `L20499-L20500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20499-L20500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20499-L20500) · [Before (L20476-L20477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20476-L20477)

```diff
-     var Rz = zU(39278),
-       Pz = zU(39283);
+     var UL = LH(39370),
+       VL = LH(39374);
```

#### 2281. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20490-L20491` → after: `L20513-L20514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20513-L20514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20513-L20514) · [Before (L20490-L20491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20490-L20491)

```diff
-         if (null === zU) return void(0, Rz.g)(XU, !0);
-         const cU = (0, Pz.b)(XU, UU, this.api.getPositionView(this.localPlayerId), zU, 1, 40);
+         if (null === LH) return void(0, UL.e)(BH, !0);
+         const AH = (0, VL.e)(BH, HH, this.api.getPositionView(this.localPlayerId), LH, 1, 40);
```

#### 2282. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20495-L20497` → after: `L20518-L20520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20518-L20520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20518-L20520) · [Before (L20495-L20497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20495-L20497)

```diff
-     var dz = zU(1494),
-       Lz = zU(4968),
-       ez = zU(1124);
+     var bL = LH(1455),
+       kL = LH(4941),
+       mL = LH(1056);
```

#### 2283. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20527` → after: `L20550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20550) · [Before (L20527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20527)

```diff
-       } = (0, EU.I)();
+       } = (0, EH.B)();
```

#### 2284. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20582` → after: `L20605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20605) · [Before (L20582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20582)

```diff
-                   }), (0, uU.jsx)(dz.l, {
+                   }), (0, eH.jsx)(bL.u, {
```

#### 2285. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20604` → after: `L20627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20627) · [Before (L20604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20604)

```diff
-       } = (0, EU.I)();
+       } = (0, EH.B)();
```

#### 2286. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20607` → after: `L20630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20630) · [Before (L20607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20607)

```diff
-         children: (0, uU.jsx)(dz.f, {
+         children: (0, eH.jsx)(bL.i, {
```

#### 2287. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20613` → after: `L20636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20636) · [Before (L20613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20613)

```diff
-           children: (0, uU.jsx)(tU.d, {
+           children: (0, eH.jsx)(WH.c, {
```

#### 2288. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20634` → after: `L20657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20657) · [Before (L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20634)

```diff
-       } = (0, EU.I)(), {
+       } = (0, EH.B)(), {
```

#### 2289. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20637` → after: `L20660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20660) · [Before (L20637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20637)

```diff
-       } = eU(XU.id), oU = KU(XU.id, 0).cells.length, DU = "locked" === XU.state, YU = zU ? dz.f : dz.l;
+       } = mH(BH.id), zH = JH(BH.id, 0).cells.length, CH = "locked" === BH.state, XH = LH ? bL.i : bL.u;
```

#### 2290. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20664` → after: `L20687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20687) · [Before (L20664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20664)

```diff
-             children: (0, uU.jsx)(tU.d, {
+             children: (0, eH.jsx)(WH.c, {
```

#### 2291. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20682` → after: `L20705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20705) · [Before (L20682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20682)

```diff
-             }), (0, uU.jsx)(dz.j, {
+             }), (0, eH.jsx)(bL.m, {
```

#### 2292. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20719` → after: `L20742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20742) · [Before (L20719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20719)

```diff
-     var iz = zU(1974);
+     var gL = LH(1962);
```

#### 2293. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20722` → after: `L20745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20745) · [Before (L20722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20722)

```diff
-       return Math.cos((0, iz.l)(UU))
+       return Math.cos((0, gL.h)(HH))
```

#### 2294. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20726` → after: `L20749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20749) · [Before (L20726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20726)

```diff
-       return (0, iz.D)(Math.acos(PX.d.clamp(UU, -1, 1)))
+       return (0, gL.t)(Math.acos(VB.d.clamp(HH, -1, 1)))
```

#### 2295. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20731` → after: `L20754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20754) · [Before (L20731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20731)

```diff
-         AU = (0, iz.D)(yU / (zU * Math.abs(Math.sin((0, iz.l)(UU))))),
+         hH = (0, gL.t)(rH / (LH * Math.abs(Math.sin((0, gL.h)(HH))))),
```

#### 2296. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20733` → after: `L20756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20756) · [Before (L20733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20733)

```diff
-         oU = AU > 0 ? 3 * QU / AU : 1 / 0;
+         zH = hH > 0 ? 3 * SH / hH : 1 / 0;
```

#### 2297. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20758` → after: `L20781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20781) · [Before (L20758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20758)

```diff
-       UU.style.transform = `rotateY(${-XU}deg)`, UU.classList.add("Turning")
+       HH.style.transform = `rotateY(${-BH}deg)`, HH.classList.add("Turning")
```

#### 2298. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20767` → after: `L20790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20790) · [Before (L20767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20767)

```diff
-         return null === UU ? YU : (FU.current = null, UU.animation.cancel(), (XU = oU.current[UU.direction]).style.transform = "", XU.classList.remove("Turning"), null === UU.next ? YU : (yU(UU.next), UU.next));
+         return null === HH ? XH : (tH.current = null, HH.animation.cancel(), (BH = zH.current[HH.direction]).style.transform = "", BH.classList.remove("Turning"), null === HH.next ? XH : (rH(HH.next), HH.next));
```

#### 2299. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20772` → after: `L20795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20795) · [Before (L20772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20772)

```diff
-           AU = XU === ("Forward" === UU) ? EU : 0;
+           hH = BH === ("Forward" === HH) ? EH : 0;
```

#### 2300. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20775` → after: `L20798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20798) · [Before (L20775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20775)

```diff
-           transform: `rotateY(${-QU}deg)`
+           transform: `rotateY(${-SH}deg)`
```

#### 2301. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20777` → after: `L20800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20800) · [Before (L20777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20777)

```diff
-           transform: `rotateY(${-AU}deg)`
+           transform: `rotateY(${-hH}deg)`
```

#### 2302. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20779` → after: `L20802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20802) · [Before (L20779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20779)

```diff
-           duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : vz(QU, AU, yU.offsetWidth, EU, AU > QU ? -zU : zU),
+           duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : jL(SH, hH, rH.offsetWidth, EH, hH > SH ? -LH : LH),
```

#### 2303. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20785` → after: `L20808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20808) · [Before (L20785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20785)

```diff
-           next: XU ? cU + ("Forward" === UU ? DU : -DU) : null
+           next: BH ? AH + ("Forward" === HH ? CH : -CH) : null
```

#### 2304. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20793` → after: `L20816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20816) · [Before (L20793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20793)

```diff
-         ("Forward" === XU ? zU + DU < UU : zU > 0) && aU(XU, !0, 0, zU)
+         ("Forward" === BH ? LH + CH < HH : LH > 0) && QH(BH, !0, 0, LH)
```

#### 2305. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20809` → after: `L20832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20832) · [Before (L20809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20809)

```diff
-             return (UU < 0 ? zU : cU) ? PX.d.clampAbs(UU, XU) : Math.sign(UU) * XU * (1 - 1 / (.55 * Math.abs(UU) / XU + 1))
+             return (HH < 0 ? LH : AH) ? VB.d.clampAbs(HH, BH) : Math.sign(HH) * BH * (1 - 1 / (.55 * Math.abs(HH) / BH + 1))
```

#### 2306. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20822` → after: `L20845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20845) · [Before (L20822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20822)

```diff
-             return ("Forward" === QU ? cU : yU) ? QU : null
+             return ("Forward" === SH ? AH : rH) ? SH : null
```

#### 2307. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20839` → after: `L20862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20862) · [Before (L20839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20839)

```diff
-                 return (UU < 0 ? zU : cU) ? UU : Math.sign(UU) * XU * (1 / (1 - Math.min(Math.abs(UU) / XU, .99)) - 1) / .55
+                 return (HH < 0 ? LH : AH) ? HH : Math.sign(HH) * BH * (1 / (1 - Math.min(Math.abs(HH) / BH, .99)) - 1) / .55
```

#### 2308. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20851` → after: `L20874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20874) · [Before (L20851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20851)

```diff
-               direction: null !== (XU = null === yU || void 0 === yU ? void 0 : yU.direction) && void 0 !== XU ? XU : null,
+               direction: null !== (BH = null === rH || void 0 === rH ? void 0 : rH.direction) && void 0 !== BH ? BH : null,
```

#### 2309. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20899` → after: `L20922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20922) · [Before (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20899)

```diff
-       } = (0, EU.I)(), FU = (0, oU.j)(SU, XU.getPages()), DU = (0, oU.j)(zX, zU.getGuide()), YU = FU.find((UU => UU.active)), IU = (pU = DU, aU = void 0 === YU ? null : YU.id, "active" === pU[0] && null === aU);
+       } = (0, EH.B)(), tH = (0, zH.e)(KH, BH.getPages()), CH = (0, zH.e)(LB, LH.getGuide()), XH = tH.find((HH => HH.active)), YH = (uH = CH, QH = void 0 === XH ? null : XH.id, "active" === uH[0] && null === QH);
```

#### 2310. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20901` → after: `L20924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20924) · [Before (L20901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20901)

```diff
-       const tU = (0, ez.l)(lz),
+       const WH = (0, mL.n)(ZL),
```

#### 2311. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20912` → after: `L20935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20935) · [Before (L20912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20912)

```diff
-           return -1 !== XU ? XU : Math.max(0, UU.findIndex((UU => "open" === UU.state)))
+           return -1 !== BH ? BH : Math.max(0, HH.findIndex((HH => "open" === HH.state)))
```

#### 2312. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20916` → after: `L20939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20939) · [Before (L20916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20916)

```diff
-       }), [XU]), (0, GU.d)((UU => !IU && ("ArrowLeft" === UU.code || "ArrowRight" === UU.code) && !(0, BU.isTypingInInput)()), (UU => {
+       }), [BH]), (0, vH.c)((HH => !YH && ("ArrowLeft" === HH.code || "ArrowRight" === HH.code) && !(0, PH.isTypingInInput)()), (HH => {
```

#### 2313. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20927-L20928` → after: `L20950-L20951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20950-L20951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20950-L20951) · [Before (L20927-L20928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20927-L20928)

```diff
-       return (0, uU.jsx)(Lz.c, {
-         close: AU.l,
+       return (0, eH.jsx)(kL.b, {
+         close: hH.j,
```

#### 2314. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20938` → after: `L20961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20961) · [Before (L20938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20938)

```diff
-           children: [(0, uU.jsx)(dz.k, {
+           children: [(0, eH.jsx)(bL.q, {
```

#### 2315. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20940` → after: `L20963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L20963) · [Before (L20940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20940)

```diff
-             onClick: AU.l
+             onClick: hH.j
```

#### 2316. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20986` → after: `L21009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21009) · [Before (L20986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20986)

```diff
-       } = XU, DU = [XU.dir[0] / QU, XU.dir[1] / QU, XU.dir[2] / QU], EU = null === oU ? FU : Math.min(FU, function(UU, XU, zU) {
+       } = BH, CH = [BH.dir[0] / SH, BH.dir[1] / SH, BH.dir[2] / SH], EH = null === zH ? tH : Math.min(tH, function(HH, BH, LH) {
```

#### 2317. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L20996` → after: `L21019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21019) · [Before (L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L20996)

```diff
-           QU = yU(pU) ? FU : EU;
+           SH = rH(uH) ? tH : EH;
```

#### 2318. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21021` → after: `L21044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21044) · [Before (L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21021)

```diff
-       return cU <= yU ? cU : 1 / 0
+       return AH <= rH ? AH : 1 / 0
```

#### 2319. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21023-L21024` → after: `L21046-L21047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21046-L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21046-L21047) · [Before (L21023-L21024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21023-L21024)

```diff
-     var Kz = zU(37624),
-       bz = zU(38809);
+     var JL = LH(37761),
+       iL = LH(38935);
```

#### 2320. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21031` → after: `L21054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21054) · [Before (L21031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21031)

```diff
-         if (!(0, Kz.h)(UU, this.shown))
+         if (!(0, JL.g)(HH, this.shown))
```

#### 2321. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21040-L21041` → after: `L21063-L21064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21063-L21064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21063-L21064) · [Before (L21040-L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21040-L21041)

```diff
-           const XU = [bz.f, bz.f, bz.f, 0, 0, 0];
-           this.meshes = [this.build([XU], bz.j, UU), this.build((0, bz.c)(), bz.o, UU)]
+           const BH = [iL.d, iL.d, iL.d, 0, 0, 0];
+           this.meshes = [this.build([BH], iL.g, HH), this.build((0, iL.c)(), iL.l, HH)]
```

#### 2322. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21045` → after: `L21068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21068) · [Before (L21045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21045)

```diff
-         for (const XU of null !== (UU = this.meshes) && void 0 !== UU ? UU : []) {
+         for (const BH of null !== (HH = this.meshes) && void 0 !== HH ? HH : []) {
```

#### 2323. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21054` → after: `L21077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21077) · [Before (L21054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21054)

```diff
-         for (const [QU, AU, FU, oU, DU, EU] of UU)(0, JX.d)(cU, yU, [oU + .5, DU + .5, EU + .5], [QU, AU, FU]);
+         for (const [SH, hH, tH, zH, CH, EH] of HH)(0, aB.g)(AH, rH, [zH + .5, CH + .5, EH + .5], [SH, hH, tH]);
```

#### 2324. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21067-L21068` → after: `L21090-L21091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21090-L21091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21090-L21091) · [Before (L21067-L21068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21067-L21068)

```diff
-       const zU = lX.f.zg / 2;
-       return UU[0] < XU[0] + zU && UU[0] + 1 > XU[0] - zU && UU[1] < XU[1] + lX.f.cg && UU[1] + 1 > XU[1] && UU[2] < XU[2] + zU && UU[2] + 1 > XU[2] - zU
+       const LH = ZB.g.JW / 2;
+       return HH[0] < BH[0] + LH && HH[0] + 1 > BH[0] - LH && HH[1] < BH[1] + ZB.g.iW && HH[1] + 1 > BH[1] && HH[2] < BH[2] + LH && HH[2] + 1 > BH[2] - LH
```

#### 2325. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21093` → after: `L21116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21116) · [Before (L21093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21093)

```diff
-           cU = [zU[0], zU[1] + lX.f.cg * lX.f.playerEyeToHeightRatio, zU[2]],
+           AH = [LH[0], LH[1] + ZB.g.iW * ZB.g.playerEyeToHeightRatio, LH[2]],
```

#### 2326. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21122-L21123` → after: `L21145-L21146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21145-L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21145-L21146) · [Before (L21122-L21123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21122-L21123)

```diff
-       const yU = lX.f.zg / 2;
-       return [Math.floor(XU), Math.floor(zU), Math.floor(cU), Math.floor(XU - yU), Math.floor(XU + yU), Math.floor(zU + lX.f.cg), Math.floor(cU - yU), Math.floor(cU + yU)]
+       const rH = ZB.g.JW / 2;
+       return [Math.floor(BH), Math.floor(LH), Math.floor(AH), Math.floor(BH - rH), Math.floor(BH + rH), Math.floor(LH + ZB.g.iW), Math.floor(AH - rH), Math.floor(AH + rH)]
```

#### 2327. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21158` → after: `L21181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21181) · [Before (L21158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21158)

```diff
-         return (0, Kz.h)(zU.next, UU) || zU.lines.some((UU => {
+         return (0, JL.g)(LH.next, HH) || LH.lines.some((HH => {
```

#### 2328. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21182` → after: `L21205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21205) · [Before (L21182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21182)

```diff
-         const zU = this.pickNext((0, Kz.e)(XU.from), (UU => (0, Kz.h)(UU, XU.from)));
+         const LH = this.pickNext((0, JL.e)(BH.from), (HH => (0, JL.g)(HH, BH.from)));
```

#### 2329. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21188` → after: `L21211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21211) · [Before (L21188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21188)

```diff
-         if (null !== cU && UU < cU.endMs && (0, Kz.h)(cU.to, zU)) return;
+         if (null !== AH && HH < AH.endMs && (0, JL.g)(AH.to, LH)) return;
```

#### 2330. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21207` → after: `L21230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21230) · [Before (L21207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21207)

```diff
-         const XU = "active" === UU[0] ? `${UU[1]}|${UU[3]}|${UU[4]}|${UU[5]}|${UU[6]}` : "";
+         const BH = "active" === HH[0] ? `${HH[1]}|${HH[3]}|${HH[4]}|${HH[5]}|${HH[6]}` : "";
```

#### 2331. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21235` → after: `L21258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21258) · [Before (L21235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21235)

```diff
-         for (let yU = 0; yU < UU.length; yU += 4) XU.add(`${UU[yU]},${UU[yU+1]},${UU[yU+2]}`);
+         for (let rH = 0; rH < HH.length; rH += 4) BH.add(`${HH[rH]},${HH[rH+1]},${HH[rH+2]}`);
```

#### 2332. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21241` → after: `L21264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21264) · [Before (L21241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21241)

```diff
-           const UU = `${cU[yU]},${cU[yU+1]},${cU[yU+2]}`;
+           const HH = `${AH[rH]},${AH[rH+1]},${AH[rH+2]}`;
```

#### 2333. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21254` → after: `L21277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21277) · [Before (L21254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21254)

```diff
-           const [zU, DU, EU, YU] = [UU[oU], UU[oU + 1], UU[oU + 2], UU[oU + 3]], NU = this.api.getBlockId(zU, DU, EU), IU = `${zU},${DU},${EU}`, pU = SX(this.blockIds[YU], NU);
+           const [LH, CH, EH, XH] = [HH[zH], HH[zH + 1], HH[zH + 2], HH[zH + 3]], GH = this.api.getBlockId(LH, CH, EH), YH = `${LH},${CH},${EH}`, uH = KB(this.blockIds[XH], GH);
```

#### 2334. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21287` → after: `L21310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21310) · [Before (L21287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21287)

```diff
-         this.outline.show(null !== (UU = this.aimed) && void 0 !== UU ? UU : this.nextCell.DI(this.lastFilled))
+         this.outline.show(null !== (HH = this.aimed) && void 0 !== HH ? HH : this.nextCell.XY(this.lastFilled))
```

#### 2335. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21293` → after: `L21316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21316) · [Before (L21293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21293)

```diff
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === zU ? null : zU.position), this.outline.show(null !== (XU = this.aimed) && void 0 !== XU ? XU : this.nextCell.get())
+         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === LH ? null : LH.position), this.outline.show(null !== (BH = this.aimed) && void 0 !== BH ? BH : this.nextCell.get())
```

#### 2336. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21314` → after: `L21337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21337) · [Before (L21314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21314)

```diff
-           const FU = UU.HzU(XU),
+           const tH = HH.yLH(BH),
```

#### 2337. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21352` → after: `L21375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21375) · [Before (L21352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21352)

```diff
-         this.sent || FU.e.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
+         this.sent || tH.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
```

#### 2338. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21355-L21356` → after: `L21378-L21379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21378-L21379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21378-L21379) · [Before (L21355-L21356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21355-L21356)

```diff
-     var oc = zU(4608),
-       Dc = zU(39988);
+     var zA = LH(4617),
+       CA = LH(40100);
```

#### 2339. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21363-L21365` → after: `L21386-L21388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21386-L21388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21386-L21388) · [Before (L21363-L21365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21363-L21365)

```diff
-         xY: 48,
-         minLifeTime: .3 / Dc.d,
-         maxLifeTime: .55 / Dc.d,
+         aX: 48,
+         minLifeTime: .3 / CA.b,
+         maxLifeTime: .55 / CA.b,
```

#### 2340. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21371` → after: `L21394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21394) · [Before (L21371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21371)

```diff
-         gravity: [0, -14 * Dc.d * Dc.d, 0],
+         gravity: [0, -14 * CA.b * CA.b, 0],
```

#### 2341. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21387-L21389` → after: `L21410-L21412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21410-L21412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21410-L21412) · [Before (L21387-L21389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21387-L21389)

```diff
-       xY: 96,
-       minLifeTime: .5 / Dc.d,
-       maxLifeTime: .9 / Dc.d,
+       aX: 96,
+       minLifeTime: .5 / CA.b,
+       maxLifeTime: .9 / CA.b,
```

#### 2342. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21395` → after: `L21418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21418) · [Before (L21395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21395)

```diff
-       gravity: [0, 2 * Dc.d * Dc.d, 0],
+       gravity: [0, 2 * CA.b * CA.b, 0],
```

#### 2343. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21413` → after: `L21436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21436) · [Before (L21413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21413)

```diff
-             const UU = `${yU},${QU},${AU}`;
+             const HH = `${rH},${SH},${hH}`;
```

#### 2344. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21455` → after: `L21478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21478) · [Before (L21455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21455)

```diff
-       const zU = (0, oU.j)(oz, XU.getView()),
+       const LH = (0, zH.e)(zL, BH.getView()),
```

#### 2345. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21458` → after: `L21481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21481) · [Before (L21458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21458)

```diff
-         } = (0, EU.I)(),
+         } = (0, EH.B)(),
```

#### 2346. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21461` → after: `L21484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21484) · [Before (L21461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21461)

```diff
-         } = (0, FU.q)(["isTouchScreen"]),
+         } = (0, tH.m)(["isTouchScreen"]),
```

#### 2347. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21465` → after: `L21488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21488) · [Before (L21465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21465)

```diff
-       if ((0, GU.d)((UU => YU && !UU.repeat && !(0, BU.isTypingInInput)() && !(0, IU.p)() && !yU), (UU => {
+       if ((0, vH.c)((HH => XH && !HH.repeat && !(0, PH.isTypingInInput)() && !(0, YH.t)() && !rH), (HH => {
```

#### 2348. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21489` → after: `L21512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21512) · [Before (L21489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21489)

```diff
-             children: [(0, uU.jsxs)(dz.f, {
+             children: [(0, eH.jsxs)(bL.i, {
```

#### 2349. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21494` → after: `L21517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21517) · [Before (L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21494)

```diff
-             }), (0, uU.jsxs)(dz.G, {
+             }), (0, eH.jsxs)(bL.O, {
```

#### 2350. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21504` → after: `L21527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21527) · [Before (L21504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21504)

```diff
-               children: (0, uU.jsxs)(dz.l, {
+               children: (0, eH.jsxs)(bL.u, {
```

#### 2351. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21518` → after: `L21541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21541) · [Before (L21518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21518)

```diff
-       return (0, uU.jsx)(kU.c, {
+       return (0, eH.jsx)(xH.b, {
```

#### 2352. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21525-L21528` → after: `L21548-L21551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21548-L21551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21548-L21551) · [Before (L21525-L21528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21525-L21528)

```diff
-     var Gc = zU(2500),
-       Bc = zU(37418),
-       Zc = zU(2047),
-       Rc = zU(1274);
+     var vA = LH(2530),
+       PA = LH(37569),
+       TA = LH(2051),
+       UA = LH(1204);
```

#### 2353. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21539` → after: `L21562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21562) · [Before (L21539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21539)

```diff
-       const zU = (0, oU.j)(XX, XU.getPlot()),
+       const LH = (0, zH.e)(BB, BH.getPlot()),
```

#### 2354. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21541` → after: `L21564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21564) · [Before (L21541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21541)

```diff
-         AU = (0, Bc.j)(cU);
+         hH = (0, PA.k)(AH);
```

#### 2355. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21555` → after: `L21578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21578) · [Before (L21555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21555)

```diff
-         }, `${FU},${DU}`)
+         }, `${tH},${CH}`)
```

#### 2356. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21571` → after: `L21594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21594) · [Before (L21571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21571)

```diff
-       } = (0, EU.I)(), YU = (0, Zc.i)("hiddenPlayerNames"), IU = (0, Zc.i)("players"), pU = null === AU ? null : null !== (XU = null === (zU = IU.byId[AU]) || void 0 === zU ? void 0 : zU.cosmetics) && void 0 !== XU ? XU : null, aU = DU("plotsGame:plotBannerCoords", {
+       } = (0, EH.B)(), XH = (0, TA.e)("hiddenPlayerNames"), YH = (0, TA.e)("players"), uH = null === hH ? null : null !== (BH = null === (LH = YH.byId[hH]) || void 0 === LH ? void 0 : LH.cosmetics) && void 0 !== BH ? BH : null, QH = CH("plotsGame:plotBannerCoords", {
```

#### 2357. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21586` → after: `L21609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21609) · [Before (L21586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21586)

```diff
-           children: [null !== pU && (0, uU.jsx)(Gc.b, {
+           children: [null !== uH && (0, eH.jsx)(vA.c, {
```

#### 2358. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21588` → after: `L21611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21611) · [Before (L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21588)

```diff
-           }), null === pU && (0, uU.jsx)(tU.d, {
+           }), null === uH && (0, eH.jsx)(WH.c, {
```

#### 2359. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21596` → after: `L21619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21619) · [Before (L21596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21596)

```diff
-               name: (0, Rc.c)(QU, YU)
+               name: (0, UA.f)(SH, XH)
```

#### 2360. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21624` → after: `L21647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21647) · [Before (L21624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21624)

```diff
-           DU = new Qc(UU, yU, oU, XU), EU = new Ez(UU, yU), YU = new rU(UU, EU), NU = new Wz(UU, yU, DU.nextCell), IU = new Fc(UU), pU.push((0, AU.u)((0, QU.createElement)(Zz, {
+           CH = new SA(HH, rH, zH, BH), EH = new EL(HH, rH), XH = new cH(HH, EH), GH = new OL(HH, rH, CH.nextCell), YH = new tA(HH), uH.push((0, hH.v)((0, SH.createElement)(TL, {
```

#### 2361. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21645-L21646` → after: `L21668-L21669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21668-L21669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21668-L21669) · [Before (L21645-L21646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21645-L21646)

```diff
-         LY: () => {
-           IU.LY(), DU.LY(), EU.LY(), YU.LY()
+         IX: () => {
+           YH.IX(), CH.IX(), EH.IX(), XH.IX()
```

#### 2362. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21667-L21668` → after: `L21690-L21691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21690-L21691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21690-L21691) · [Before (L21667-L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21667-L21668)

```diff
-             DU.PY(UU), EU.PY(UU)
-           } else "plotsJournal" === UU ? YU.PY(XU) : "plotsJournalOpen" === UU ? YU.openFromServer(XU) : "plotsPreviewEnd" === UU ? EU.endFromServer() : "plotsGuide" === UU ? FU.receiveGuide(XU) : "plotsGuideDone" === UU && FU.receiveGuideDone()
+             CH.kX(HH), EH.kX(HH)
+           } else "plotsJournal" === HH ? XH.kX(BH) : "plotsJournalOpen" === HH ? XH.openFromServer(BH) : "plotsPreviewEnd" === HH ? EH.endFromServer() : "plotsGuide" === HH ? tH.receiveGuide(BH) : "plotsGuideDone" === HH && tH.receiveGuideDone()
```

#### 2363. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21673` → after: `L21696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21696) · [Before (L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21673)

```diff
-   40416: (UU, XU, zU) => {
+   40571: (HH, BH, LH) => {
```

#### 2364. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21689` → after: `L21712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21712) · [Before (L21689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21689)

```diff
-   40422: (UU, XU, zU) => {
+   40580: (HH, BH, LH) => {
```

#### 2365. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21693-L21708` → after: `L21716-L21720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21716-L21720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21716-L21720) · [Before (L21693-L21708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21693-L21708)

```diff
-     var cU = zU(212);
-     const yU = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"],
-       QU = {
-         gingerbreadLane: "\ud83c\udf6a",
-         toyRow: "\ud83e\uddf8",
-         iceRink: "\u26f8\ufe0f",
-         carousel: "\ud83c\udfa0",
-         greatTree: "\ud83c\udf84",
-         cocoaCorner: "\u2615",
-         lanternWalk: "\ud83c\udfee",
-         marketGate: "\ud83d\udeaa",
-         santasGrotto: "\ud83c\udf85"
-       };
-     var AU = zU(61),
-       FU = zU(37325),
-       oU = zU(1106),
+     var AH = LH(176);
+     const rH = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
+     var SH = LH(45),
+       hH = LH(37474),
+       tH = LH(1038),
```

#### 2366. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21710-L21720` → after: `L21722-L21731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21722-L21731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21722-L21731) · [Before (L21710-L21720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21710-L21720)

```diff
-       EU = zU(27),
-       YU = zU(1444),
-       NU = zU(42),
-       IU = zU(1193),
-       pU = zU(37222),
-       aU = zU(1492),
-       tU = zU(31),
-       gU = zU(39315),
-       kU = zU(39311);
-     const GU = 400,
-       BU = 2 * Math.PI * 17;
+       CH = LH(15),
+       EH = LH(1390),
+       XH = LH(30),
+       GH = LH(1123),
+       YH = LH(37390),
+       uH = LH(1450),
+       QH = LH(18);
+     var WH = LH(39415),
+       MH = LH(39408);
+     const xH = 2 * Math.PI * 17;
```

#### 2367. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21728` → after: `L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21739) · [Before (L21728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21728)

```diff
-       return (0, kU.e)(XU, zU, {
+       return (0, MH.c)(BH, LH, {
```

#### 2368. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21744-L21745` → after: `L21814-L21815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21814-L21815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21814-L21815) · [Before (L21744-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21744-L21745)

```diff
-         const AU = Math.max(0, XU.awaySpeed) * ((null !== (cU = this.averageRoundTrip) && void 0 !== cU ? cU : 300) / 1e3);
-         return XU.distance + AU > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = UU, this.ownRing = !0, this.faded = !1, 500 + (null !== (yU = this.averageRoundTrip) && void 0 !== yU ? yU : 0))
+         const hH = Math.max(0, BH.awaySpeed) * ((null !== (AH = this.averageRoundTrip) && void 0 !== AH ? AH : 300) / 1e3);
+         return BH.distance + hH > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = HH, this.ownRing = !0, this.faded = !1, 500 + (null !== (rH = this.averageRoundTrip) && void 0 !== rH ? rH : 0))
```

#### 2369. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21749` → after: `L21819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21819) · [Before (L21749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21749)

```diff
-         const cU = 4 * (this.averageRoundTrip + 150) / 1e3;
+         const AH = 4.6 * (this.averageRoundTrip + 150) / 1e3;
```

#### 2370. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21768` → after: `L21838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21838) · [Before (L21768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21768)

```diff
-         return !("predicted" !== this.state || UU - this.predictedAt < 1200 + (null !== (XU = this.averageRoundTrip) && void 0 !== XU ? XU : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(UU, UU - this.predictedAt), !this.faded)
+         return !("predicted" !== this.state || HH - this.predictedAt < 1200 + (null !== (BH = this.averageRoundTrip) && void 0 !== BH ? BH : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(HH, HH - this.predictedAt), !this.faded)
```

#### 2371. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21780` → after: `L21850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21850) · [Before (L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21780)

```diff
-         }), null !== (UU = this.averageRoundTrip) && void 0 !== UU ? UU : 0);
+         }), null !== (HH = this.averageRoundTrip) && void 0 !== HH ? HH : 0);
```

#### 2372. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21791` → after: `L21861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21861) · [Before (L21791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21791)

```diff
-         this.averageRoundTrip = null === this.averageRoundTrip ? zU : this.averageRoundTrip + .3 * (zU - this.averageRoundTrip), this.recentRoundTrips.push({
+         this.averageRoundTrip = null === this.averageRoundTrip ? LH : this.averageRoundTrip + .3 * (LH - this.averageRoundTrip), this.recentRoundTrips.push({
```

#### 2373. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21808` → after: `L21879-L21882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21879-L21882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21879-L21882) · [Before (L21808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21808)

```diff
-         pulse: 0
+         treeLitAt: 0,
+         nextHintAt: 0,
+         pulse: 0,
+         bells: 0
```

#### 2374. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21812-L21813` → after: `L21886-L21887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21886-L21887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21886-L21887) · [Before (L21812-L21813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21812-L21813)

```diff
-         this.onWrapStart = UU, this.view = eU, this.nextHintAt = 0, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this … [truncated]
-           this.map = UU, this.drawnInDistrict = !1, this.drawnInCircle = !1
+         this.onWrapStart = HH, this.view = fH, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = n … [truncated]
+           this.map = HH, this.drawnInCircle = !1, this.district.unbind()
```

#### 2375. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21821` → after: `L21895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21895) · [Before (L21821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21821)

```diff
-           this.stopRing(), this.ring = UU, this.ringFill = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".SecretSantaRingFill")) && void 0 !== XU ? XU : null;
+           this.stopRing(), this.ring = HH, this.ringFill = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".SecretSantaRingFill")) && void 0 !== BH ? BH : null;
```

#### 2376. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21833` → after: `L21907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21907) · [Before (L21833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21833)

```diff
-         this.UY({
+         this.district.reset(), this.AX({
```

#### 2377. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21835` → after: `L21909-L21916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21909-L21916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21909-L21916) · [Before (L21835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21835)

```diff
-           market: UU
+           market: HH,
+           bells: 0
+         })
+       }
+       receiveBells(HH) {
+         HH !== this.view.bells && this.AX({
+           ...this.view,
+           bells: HH
```

#### 2378. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21840-L21845` → after: `L21921-L21925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21921-L21925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21921-L21925) · [Before (L21840-L21845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21840-L21845)

```diff
-           zU = wU(this.nextHintAt, performance.now() + UU.santaHintNextInMs),
-           cU = zU > this.nextHintAt,
-           yU = !XU || XU.santaHintContract !== UU.santaHintContract || XU.santaHintDistrict !== UU.santaHintDistrict || XU.santaHintCircleX !== UU.santaHintCircleX || XU.santaHintCircleZ !== UU.santaHintCircleZ;
-         this.nextHintAt = zU;
-         const QU = "hunting" === UU.santaHintState && (cU || yU) ? this.view.pulse + 1 : this.view.pulse;
-         this.UY({
+           LH = KH(this.view.nextHintAt, performance.now() + HH.santaHintNextInMs, 1e3),
+           AH = LH > this.view.nextHintAt,
+           rH = !BH || BH.santaHintContract !== HH.santaHintContract || BH.santaHintDistrict !== HH.santaHintDistrict || BH.santaHintCircleX !== HH.santaHintCircleX || BH.santaHintCircleZ !== HH.santaHintCircleZ,
+           SH = "hunting" === HH.santaHintState && (AH || rH) ? this.view.pulse + 1 : this.view.pulse;
+         this.AX({
```

#### 2379. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21852` → after: `L21933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21933) · [Before (L21852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21852)

```diff
-         var XU;
+         var BH, LH;
```

#### 2380. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21856-L21857` → after: `L21937-L21940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21937-L21940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21937-L21940) · [Before (L21856-L21857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21856-L21857)

```diff
-           QU = 0 !== yU && 0 === this.view.naughtyEndsAt;
-         this.UY({
+           hH = 0 !== SH && 0 === this.view.naughtyEndsAt,
+           tH = null !== (BH = HH.santaStatusTreeLitInMs) && void 0 !== BH ? BH : null,
+           zH = null === tH ? 0 : KH(this.view.treeLitAt, AH + tH);
+         this.AX({
```

#### 2381. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21875` → after: `L21959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21959) · [Before (L21875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21875)

```diff
-         const zU = this.wrap.PY(performance.now(), UU, XU);
+         const LH = this.wrap.kX(performance.now(), HH, BH);
```

#### 2382. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21891` → after: `L21975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21975) · [Before (L21891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21891)

```diff
-         })) && void 0 !== XU ? XU : null
+         })) && void 0 !== BH ? BH : null
```

#### 2383. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21901-L21904` → after: `L21985-L21988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21985-L21988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21985-L21988) · [Before (L21901-L21904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21901-L21904)

```diff
-           return UU - gU.g
-         }(UU) / Math.PI), YU = `${oU.toFixed(1)}% ${DU.toFixed(1)}% ${EU}`;
-         YU !== this.drawnArrow && (this.drawnArrow = YU, this.arrow.style.left = `${oU.toFixed(1)}%`, this.arrow.style.top = `${DU.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${EU}deg)`);
-         const NU = "hunting" === (null === cU || void 0 === cU ? void 0 : cU.santaHintState) ? cU : null,
+           return HH - WH.f
+         }(HH) / Math.PI), XH = `${zH.toFixed(1)}% ${CH.toFixed(1)}% ${EH}`;
+         XH !== this.drawnArrow && (this.drawnArrow = XH, this.arrow.style.left = `${zH.toFixed(1)}%`, this.arrow.style.top = `${CH.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${EH}deg)`), this.district.update(LH, hH, tH, PH(LH, BH[0], BH[2]), this.ma … [truncated]
+         const GH = "hunting" === (null === AH || void 0 === AH ? void 0 : AH.santaHintState) ? AH : null,
```

#### 2384. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21906-L21918` → after: `L21990-L21997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21990-L21997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L21990-L21997) · [Before (L21906-L21918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21906-L21918)

```diff
-             const zU = UU => Math.min(2, Math.max(0, Math.floor(UU / (100 / 3))));
-             return 3 * zU(XU) + zU(UU)
-           }(AU, FU) === NU.santaHintDistrict;
-         IU !== this.drawnInDistrict && (this.drawnInDistrict = IU, this.map.toggleAttribute("data-in-district", IU));
-         const pU = null !== NU && function(UU, XU) {
-           let [zU, , cU] = XU;
-           const {
-             santaHintCircleX: yU,
-             santaHintCircleZ: QU,
-             santaHintCircleR: AU
-           } = UU;
-           return null !== yU && null !== QU && AU > 0 && Math.hypot(zU - yU, cU - QU) <= AU
-         }(NU, XU);
+             let [LH, , AH] = BH;
+             const {
+               santaHintCircleX: rH,
+               santaHintCircleZ: SH,
+               santaHintCircleR: hH
+             } = HH;
+             return null !== rH && null !== SH && hH > 0 && Math.hypot(LH - rH, AH - SH) <= hH
+           }(GH, BH);
```

#### 2385. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21923` → after: `L22002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22002) · [Before (L21923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21923)

```diff
-         null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(dU), null === (UU = this.countdownAnimation) || void 0 === UU || UU.cancel(), this.countdownAnimation = null, this.stopRing(), null  … [truncated]
+         null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(mH), null === (HH = this.countdownAnimation) || void 0 === HH || HH.cancel(), this.countdownAnimation = null, this.stopRing(), null  … [truncated]
```

#### 2386. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21926` → after: `L22005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22005) · [Before (L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21926)

```diff
-         this.view = UU, document.body.classList.toggle(WU, UU.shown), UU.shown && (this.clearFinishEnd(), document.body.classList.add(dU)), tU.k.UY(PU, UU, !0)
+         this.view = HH, document.body.classList.toggle(kH, HH.shown), document.body.classList.toggle(oH, HH.shown && 0 !== HH.naughtyEndsAt), HH.shown && (this.clearFinishEnd(), document.body.classList.add(mH)), QH.k.AX(bH, HH, !0)
```

#### 2387. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21930` → after: `L22009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22009) · [Before (L21930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21930)

```diff
-           this.endTimer = null, this.wrap.stop(), this.UY({
+           this.endTimer = null, this.wrap.stop(), this.AX({
```

#### 2388. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21933` → after: `L22012-L22015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22012-L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22012-L22015) · [Before (L21933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21933)

```diff
-             naughtyEndsAt: 0
+             endsAt: 0,
+             naughtyEndsAt: 0,
+             treeLitAt: 0,
+             bells: 0
```

#### 2389. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21945` → after: `L22027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22027) · [Before (L21945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21945)

```diff
-         const zU = this.nextHintAt - performance.now();
+         const LH = this.view.nextHintAt - performance.now();
```

#### 2390. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21947` → after: `L22029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22029) · [Before (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21947)

```diff
-         const cU = GU * (1 - Math.min(1, zU / 1e4));
+         const AH = 1 - Math.min(1, LH / 1e4);
```

#### 2391. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21951` → after: `L22033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22033) · [Before (L21951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L21951)

```diff
-           strokeDashoffset: GU
+           strokeDashoffset: 1
```

#### 2392. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22003` → after: `L22085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22085) · [Before (L22003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22003)

```diff
-       return 0 !== UU && Math.abs(XU - UU) < 1e3 ? Math.min(UU, XU) : XU
+       return 0 === HH || BH - HH > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? BH : Math.min(HH, BH)
```

#### 2393. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22005` → after: `L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22087) · [Before (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22005)

```diff
-     var qU = zU(1305);
+     var cH = LH(1225);
```

#### 2394. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22013` → after: `L22095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22095) · [Before (L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22013)

```diff
-         } = (0, EU.q)(["isTouchScreen"]), cU = (0, YU.F)(), {
+         } = (0, CH.m)(["isTouchScreen"]), AH = (0, EH.y)(), {
```

#### 2395. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22015` → after: `L22097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22097) · [Before (L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22015)

```diff
-         } = (0, IU.I)(), QU = (0, aU.j)(PU, XU.getView()).shown, FU = (0, pU.i)(), [oU] = (0, AU.useState)((() => {
+         } = (0, GH.B)(), hH = (0, uH.e)(bH, BH.getView()).shown, tH = (0, YH.m)(), [QH] = (0, SH.useState)((() => {
```

#### 2396. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22017` → after: `L22099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22099) · [Before (L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22017)

```diff
-           return null !== (UU = NU.k.getItem(OU)) && void 0 !== UU ? UU : 0
+           return null !== (HH = XH.e.getItem(eH)) && void 0 !== HH ? HH : 0
```

#### 2397. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22028-L22029` → after: `L22110-L22111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22110-L22111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22110-L22111) · [Before (L22028-L22029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22028-L22029)

```diff
-           !ZU || FU || BU.current || (BU.current = !0, NU.k.setItem(OU, oU + 1))
-         }), [ZU, FU, oU]), (0, pU.m)(ZU ? "secretSanta" : null, FU, (() => {
+           !TH || tH || PH.current || (PH.current = !0, XH.e.setItem(eH, QH + 1))
+         }), [TH, tH, QH]), (0, YH.n)(TH ? "secretSanta" : null, tH, (() => {
```

#### 2398. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22035` → after: `L22117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22117) · [Before (L22035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22035)

```diff
-           children: [(0, qU.jsx)(pU.h, {}), (0, qU.jsx)(pU.c, {
+           children: [(0, cH.jsx)(YH.j, {}), (0, cH.jsx)(YH.d, {
```

#### 2399. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22038` → after: `L22120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22120) · [Before (L22038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22038)

```diff
-           }), (0, qU.jsx)(pU.c, {
+           }), (0, cH.jsx)(YH.d, {
```

#### 2400. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22041` → after: `L22123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22123) · [Before (L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22041)

```diff
-           }), cU && (0, qU.jsx)(pU.c, {
+           }), AH && (0, cH.jsx)(YH.d, {
```

#### 2401. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22047-L22050` → after: `L22129-L22134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22129-L22134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22129-L22134) · [Before (L22047-L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22047-L22050)

```diff
-     var rU = zU(37318),
-       uU = zU(3796),
-       fU = zU(37418),
-       iU = zU(40278);
+     var gH = LH(37472),
+       NH = LH(3770),
+       RH = LH(37569),
+       jH = LH(1049),
+       nH = LH(1315),
+       FH = LH(40413);
```

#### 2402. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22089` → after: `L22173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22173) · [Before (L22089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22089)

```diff
-       } = (0, IU.I)(), cU = (0, iU.i)(XU);
+       } = (0, GH.B)(), AH = (0, FH.h)(BH);
```

#### 2403. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22092` → after: `L22176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22176) · [Before (L22092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22092)

```diff
-         children: [(0, qU.jsx)("span", {
+         children: [(0, cH.jsxs)("span", {
```

#### 2404. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22094` → after: `L22178-L22181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22178-L22181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22178-L22181) · [Before (L22094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22094)

```diff
-           children: zU("secretSantaHud:naughty")
+           children: [(0, cH.jsx)(nH.c, {
+             name: "ban",
+             "aria-hidden": "true"
+           }), " ", LH("secretSantaHud:naughty")]
```

#### 2405. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22104` → after: `L22473-L22525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22473-L22525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22473-L22525) · [Before (L22104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22104)

```diff
-       return UU && QU[UU] || "\u2744\ufe0f"
+       let {
+         kind: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, GH.B)(), {
+         icon: AH,
+         text: rH
+       } = zB[BH];
+       return (0, cH.jsxs)("div", {
+         className: zH()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${BH}`),
+         children: [(0, cH.jsx)("span", {
+           className: "SecretSantaClueNoteIcon",
+           children: (0, cH.jsx)(nH.c, {
+             name: AH
+           })
+ ... (37 more added lines; see GitHub link above)
```

#### 2406. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22113` → after: `L22533-L22534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22533-L22534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22533-L22534) · [Before (L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22113)

```diff
-         pulse: FU
+         pulse: tH,
+         treeLightsOn: CH
```

#### 2407. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22117` → after: `L22538-L22555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22538-L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22538-L22555) · [Before (L22117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22117)

```diff
-       } = (0, IU.I)(), EU = null !== (XU = null === AU || void 0 === AU ? void 0 : AU.santaHintState) && void 0 !== XU ? XU : "none", YU = "hunting" === EU && AU ? AU.santaHintDistrict : -1, NU = null !== (zU = null === QU || void 0 === QU ? void 0 : QU.santaMarketDistricts) && v … [truncated]
+       } = (0, GH.B)(), XH = null !== (BH = null === hH || void 0 === hH ? void 0 : hH.santaHintState) && void 0 !== BH ? BH : "none", YH = "hunting" === XH && hH ? hH.santaHintDistrict : -1, uH = null !== (LH = null === SH || void 0 === SH ? void 0 : SH.santaMarketDistricts) && v … [truncated]
+         const {
+           santaHintCircleX: LH,
+           santaHintCircleZ: AH,
+           santaHintCircleR: rH,
+           santaHintContract: SH
+         } = BH;
+         if (null === LH || null === AH || rH <= 0) return null;
+         const [hH, tH] = vH(HH, LH, AH), zH = 200 * rH / HH.santaMarketSize, CH = WB(hH), EH = Math.sqrt(Math.max(0, (zH / 2) ** 2 - (CH - hH) ** 2)), XH = WB(tH - EH >= 9 ? tH - EH : tH + EH);
+         return {
+           left: hH,
+           top: tH,
+           size: zH,
+           contract: SH,
+           badgeLeft: CH,
+           badgeTop: XH
+ ... (2 more added lines; see GitHub link above)
```

#### 2408. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22120-L22121` → after: `L22558-L22566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22558-L22566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22558-L22566) · [Before (L22120-L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22120-L22121)

```diff
-         className: DU()("SecretSantaMinimap", `State-${EU}`),
-         children: [(0, qU.jsx)("div", {
+         className: zH()("SecretSantaMinimap", `State-${XH}`, {
+           WithCircle: null !== QH
+         }),
+         children: [(0, cH.jsx)("img", {
+           className: "SecretSantaMinimapTerrain",
+           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAACAASURBVHictZx5XJTV9/jfAzOAwKCmKeASZBjuioqofbSEQBFZRDQR17TcklKzj2buS7lUVGqmWeaWogKCbEIu5YZK7qamgMKgmBujCAwwvz8enofnmRnQvr/v97xe87rz3Oeeu5x77rnnnnPuo8opLDZiAm … [truncated]
+           alt: "",
+           draggable: !1
+         }), (0, cH.jsx)("div", {
```

#### 2409. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22124` → after: `L22569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22569) · [Before (L22124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22124)

```diff
-             className: DU()("SecretSantaDistrict", `District-${UU}`, {
+             className: zH()("SecretSantaDistrict", `District-${HH}`, {
```

#### 2410. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22129` → after: `L22575-L22577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22575-L22577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22575-L22577) · [Before (L22129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22129)

```diff
-               children: vU(UU)
+               children: (0, cH.jsx)(nH.c, {
+                 name: sH(HH)
+               })
```

#### 2411. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22132` → after: `L22580-L22582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22580-L22582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22580-L22582) · [Before (L22132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22132)

```diff
-               children: oU(`secretSantaHud:district_${UU}`)
+               children: EH(`secretSantaHud:district_${HH}`)
+             }), "greatTree" === HH && (0, cH.jsx)(uB, {
+               on: CH
```

#### 2412. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22141` → after: `L22591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22591) · [Before (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22141)

```diff
-         }, FU), QU && AU && "hunting" === EU && (0, qU.jsx)("div", {
+         }, tH), QH && (0, cH.jsxs)("div", {
```

#### 2413. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22143-L22146` → after: `L22593-L22610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22593-L22610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22593-L22610) · [Before (L22143-L22146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22143-L22146)

```diff
-           children: (0, qU.jsx)(nU, {
-             market: QU,
-             hint: AU
-           })
+           children: [(0, cH.jsx)("div", {
+             className: "SecretSantaCircle",
+             style: {
+               left: `${QH.left}%`,
+               top: `${QH.top}%`,
+               width: `${QH.size}%`,
+               height: `${QH.size}%`
+             }
+           }, QH.contract), (0, cH.jsx)("span", {
+             className: "SecretSantaCircleBadge",
+             style: {
+               left: `${QH.badgeLeft}%`,
+               top: `${QH.badgeTop}%`
+             },
+             children: (0, cH.jsx)(nH.c, {
+               name: ZH
+ ... (2 more added lines; see GitHub link above)
```

#### 2414. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22187` → after: `L22638-L22640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22638-L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22638-L22640) · [Before (L22187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22187)

```diff
-             children: "\u2744\ufe0f"
+             children: (0, cH.jsx)(nH.c, {
+               name: "snowflake"
+             })
```

#### 2415. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22198-L22199` → after: `L22655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22655) · [Before (L22198-L22199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22198-L22199)

```diff
-         market: XU,
-         hint: zU
+         bells: BH
```

#### 2416. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22214-L22230` → after: `L22658-L22661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22658-L22661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22658-L22661) · [Before (L22214-L22230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22214-L22230)

```diff
-         className: "SecretSantaCircle",
-         style: {
-           left: `${DU}%`,
-           top: `${EU}%`,
-           width: `${YU}%`,
-           height: `${YU}%`
-         },
-         children: (0, qU.jsxs)("svg", {
-           viewBox: "0 0 100 100",
-           preserveAspectRatio: "none",
-           children: [(0, qU.jsx)("path", {
-             className: "SecretSantaCircleShadow",
-             d: oU
-           }), (0, qU.jsx)("path", {
-             className: "SecretSantaCircleDashes",
-             d: oU
- ... (1 more removed lines; see GitHub link above)
+         className: zH()("SecretSantaFrost", `Bells-${BH}`),
+         "aria-hidden": "true",
+         children: (0, cH.jsx)("div", {
+           className: "SecretSantaFrostPulse"
```

#### 2417. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22234` → after: `L22665-L22682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22665-L22682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22665-L22682) · [Before (L22234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22234)

```diff
-     const mU = "\x01";
+ 
+     function xB(HH) {
+       let {
+         bells: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, GH.B)();
+       return (0, cH.jsxs)("span", {
+         className: zH()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${BH}`),
+         children: [(0, cH.jsx)("span", {
+           className: "SecretSantaBell",
+           children: (0, cH.jsx)(nH.c, {
+             name: "bell"
+           })
+         }), " ", LH(2 === BH ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
+ ... (2 more added lines; see GitHub link above)
```

#### 2418. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22240` → after: `L22688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22688) · [Before (L22240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22240)

```diff
-       const zU = (0, aU.j)(PU, XU.getView());
+       const LH = (0, uH.e)(bH, BH.getView());
```

#### 2419. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22242` → after: `L22690-L22692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22690-L22692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22690-L22692) · [Before (L22242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22242)

```diff
-         children: [(0, qU.jsx)("div", {
+         children: [LH.shown && (0, cH.jsx)(MB, {
+           bells: LH.bells
+         }), (0, cH.jsx)("div", {
```

#### 2420. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22252` → after: `L22703-L22705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22703-L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22703-L22705) · [Before (L22252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22252)

```diff
-             endsAt: zU.endsAt
+             endsAt: LH.endsAt,
+             bells: LH.bells,
+             treeLitAt: LH.treeLitAt
```

#### 2421. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22257` → after: `L22710-L22711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22710-L22711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22710-L22711) · [Before (L22257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22257)

```diff
-             pulse: zU.pulse
+             pulse: LH.pulse,
+             treeLightsOn: 0 !== LH.treeLitAt
```

#### 2422. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22261` → after: `L22716-L22718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22716-L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22716-L22718) · [Before (L22261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22261)

```diff
-               hint: zU.hint
+               hint: LH.hint,
+               nextHintAt: LH.nextHintAt,
+               pulse: LH.pulse
```

#### 2423. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22273` → after: `L22730-L22731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22730-L22731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22730-L22731) · [Before (L22273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22273)

```diff
-         pulse: yU
+         pulse: rH,
+         treeLightsOn: hH
```

#### 2424. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22276` → after: `L22734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22734) · [Before (L22276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22276)

```diff
-       return (0, uU.m)(QU, JU), (0, qU.jsx)("div", {
+       return (0, NH.i)(tH, TB), (0, cH.jsx)("div", {
```

#### 2425. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22283` → after: `L22741-L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22741-L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22741-L22742) · [Before (L22283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22283)

```diff
-           pulse: yU
+           pulse: rH,
+           treeLightsOn: hH
```

#### 2426. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22293-L22294` → after: `L22752-L22753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22752-L22753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22752-L22753) · [Before (L22293-L22294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22293-L22294)

```diff
-         const cU = (0, uU.j)(XU.left, XU.right, zU);
-         jU(UU, "--ss-map-top", zU + 6), jU(UU, "--ss-map-bottom", null === cU ? null : (0, uU.g)(UU) - cU + 6)
+         const AH = (0, NH.e)(BH.left, BH.right, LH);
+         UB(HH, "--ss-map-top", LH + 6), UB(HH, "--ss-map-bottom", null === AH ? null : (0, NH.d)(HH) - AH + 6)
```

#### 2427. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22307` → after: `L22766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22766) · [Before (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22307)

```diff
-       const cU = null === zU ? "" : `${Math.ceil(zU)}px`;
+       const AH = null === LH ? "" : `${Math.ceil(LH)}px`;
```

#### 2428. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22312` → after: `L22771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22771) · [Before (L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22312)

```diff
-       const XU = document.querySelector(`.${fU.h}`),
+       const BH = document.querySelector(`.${RH.i}`),
```

#### 2429. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22314` → after: `L22773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22773) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22314)

```diff
-       for (const QU of [document.querySelector(`.${fU.f}`), XU]) QU && zU.observe(QU);
+       for (const SH of [document.querySelector(`.${RH.f}`), BH]) SH && LH.observe(SH);
```

#### 2430. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22327-L22328` → after: `L22786-L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22786-L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22786-L22787) · [Before (L22327-L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22327-L22328)

```diff
-       const UU = `.${fU.h}`,
-         XU = document.querySelectorAll(`.${fU.f}, ${UU} .TopRightIcon:not(.TopRightTray *), ${UU} .CondensedSocialBarInner`);
+       const HH = `.${RH.i}`,
+         BH = document.querySelectorAll(`.${RH.f}, ${HH} .TopRightIcon:not(.TopRightTray *), ${HH} .CondensedSocialBarInner`);
```

#### 2431. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22334` → after: `L22794-L22796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22794-L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22794-L22796) · [Before (L22334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22334)

```diff
-         endsAt: zU
+         endsAt: AH,
+         bells: rH,
+         treeLitAt: hH
```

#### 2432. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22338` → after: `L22800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22800) · [Before (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22338)

```diff
-       } = (0, IU.I)(), [yU, QU] = (0, AU.useState)(null);
+       } = (0, GH.B)(), [zH, CH] = (0, SH.useState)(null);
```

#### 2433. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22343-L22357` → after: `L22808-L22838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22808-L22838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22808-L22838) · [Before (L22343-L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22343-L22357)

```diff
-             UU.style.removeProperty("top");
-             const XU = bU(),
-               zU = Array.from(UU.children, (UU => UU.getBoundingClientRect()));
-             let cU = 0;
-             for (let UU = 0; UU < XU.length; UU++) {
-               let UU = cU;
-               for (const yU of zU)
-                 for (const zU of XU) {
-                   yU.left < zU.right + fU.d && yU.right > zU.left - fU.d && yU.top + cU < zU.bottom + 4 && yU.bottom + cU > zU.top && (UU = Math.max(UU, Math.ceil(zU.bottom + 4 - yU.top)))
-                 }
-               if (UU === cU) break;
-               cU = UU
-             }
-             cU > 0 && (UU.style.top = `${UU.getBoundingClientRect().top+cU}px`)
-           };
+               HH.style.removeProperty("top");
+               const AH = OB(),
+                 rH = Array.from(HH.children).filter((HH => HH instanceof HTMLElement && !HH.classList.contains(JH))),
+                 SH = HH.getBoundingClientRect(),
+                 hH = rH.map((HH => {
+                   const BH = SH.left + HH.offsetLeft,
+                     LH = SH.top + HH.offsetTop;
+                   return {
+                     left: BH,
+                     right: BH + HH.offsetWidth,
+                     top: LH,
+                     bottom: LH + HH.offsetHeight
+                   }
+                 }));
+               let tH = 0;
+               for (let HH = 0; HH < AH.length; HH++) {
+ ... (15 more added lines; see GitHub link above)
```

#### 2434. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22368` → after: `L22849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22849) · [Before (L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22368)

```diff
-           return yU.observe(UU, {
+           zH.observe(HH, {
```

#### 2435. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22373` → after: `L22863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22863) · [Before (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22373)

```diff
-             zU.disconnect(), cU(), yU.disconnect(), window.removeEventListener("resize", XU)
+             hH.disconnect(), tH(), zH.disconnect(), CH.disconnect(), window.removeEventListener("resize", SH), BH.style.removeProperty("--ss-top-bar-bottom")
```

#### 2436. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22387` → after: `L22877-L22879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22877-L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22877-L22879) · [Before (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22387)

```diff
-               children: ["\u2b50 ", XU.santaStatusPoints]
+               children: [(0, cH.jsx)(nH.c, {
+                 name: "star"
+               }), " ", LH.santaStatusPoints]
```

#### 2437. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22397` → after: `L22889-L22893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22889-L22893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22889-L22893) · [Before (L22397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22397)

```diff
-           status: XU
+           status: LH,
+           bells: rH,
+           treeLitAt: hH
+         }), (0, cH.jsx)(pH, {
+           controller: BH
```

#### 2438. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22406` → after: `L22902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22902) · [Before (L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22406)

```diff
-       const zU = (0, iU.i)(XU);
+       const LH = (0, FH.h)(BH);
```

#### 2439. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22413-L22416` → after: `L22909-L22913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22909-L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22909-L22913) · [Before (L22413-L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22413-L22416)

```diff
-         children: [(0, qU.jsx)("span", {
-           "aria-hidden": "true",
-           children: "\u23f1"
-         }), (0, iU.e)(zU)]
+         children: [(0, cH.jsx)(nH.c, {
+           name: "stopwatch",
+           className: "SecretSantaClockIcon",
+           "aria-hidden": "true"
+         }), (0, FH.c)(LH)]
```

#### 2440. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22495` → after: `L22918-L22920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22918-L22920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22918-L22920) · [Before (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22495)

```diff
-         scarf: XU
+         status: BH,
+         bells: LH,
+         treeLitAt: AH
```

#### 2441. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22499-L22514` → after: `L22924-L22965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22924-L22965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L22924-L22965) · [Before (L22499-L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22499-L22514)

```diff
-       } = (0, IU.I)();
-       return (0, qU.jsxs)("span", {
-         className: DU()("SecretSantaScarf", `Scarf-${XU}`),
-         children: [(0, qU.jsx)("span", {
-           className: "SecretSantaScarfSwatch"
-         }), zU(`secretSantaHud:scarfName_${XU}`)]
-       })
-     }
- 
-     function cX(UU, XU) {
-       const [zU, cU = ""] = UU.split(mU);
-       return (0, qU.jsxs)(qU.Fragment, {
-         children: [zU, XU, cU]
-       })
-     }
-     var yX = zU(4608);
+       } = (0, GH.B)(), SH = Math.min(2, Math.max(0, BH.santaStatusHunters)), hH = BH.santaStatusScarf, tH = (0, cH.jsx)(hB, {
+         scarf: hH,
+         hat: BH.santaStatusHat
+       });
+       let zH = (0, cH.jsx)("span", {
+         children: tB(rH("secretSantaHud:youWearLook", {
+           look: BB
+         }), tH)
+       });
+       if (BH.santaStatusKnown) {
+         const HH = BH.santaStatusHatKnown ? tB(rH("secretSantaHud:spottedLook", {
+           look: BB
+         }), tH) : tB(rH("secretSantaHud:spottedScarf", {
+           scarf: BB
+         }), (0, cH.jsx)(AB, {
+           scarf: hH
+ ... (26 more added lines; see GitHub link above)
```

#### 2442. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22649` → after: `L23100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23100) · [Before (L22649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22649)

```diff
-     var tX = zU(97);
+     var nB = LH(81);
```

#### 2443. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22679` → after: `L23134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23134) · [Before (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22679)

```diff
-       return 1 === XU ? UU : {
+       return 1 === BH ? HH : {
```

#### 2444. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22696` → after: `L23151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23151) · [Before (L22696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22696)

```diff
-         }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.lastFrameAt = 0, this.particleShare = (0, tX.isMobile)() ? .6 : 1, UU.preloadSounds([gX, RX, kX])
+         }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, nB.isMobile)() ? .6 : 1, HH.preloadSounds([FB, sB, DB])
```

#### 2445. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22699` → after: `L23154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23154) · [Before (L22699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22699)

```diff
-         this.hint = null, this.spotted = !1, this.setBells(0)
+         this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
```

#### 2446. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22703` → after: `L23158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23158) · [Before (L22703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22703)

```diff
-         this.hint = UU, "none" !== UU.santaHintState && (XU && XU.santaHintContract === UU.santaHintContract ? null === XU.santaHintScarf && null !== UU.santaHintScarf && this.play(BX) : this.play(GX))
+         this.hint = HH, "none" !== HH.santaHintState && (BH && BH.santaHintContract === HH.santaHintContract ? null === BH.santaHintScarf && null !== HH.santaHintScarf ? this.play(ZB) : null === BH.santaHintHat && null !== HH.santaHintHat && this.play(dB) : this.play(wB))
```

#### 2447. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22706` → after: `L23161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23161) · [Before (L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22706)

```diff
-         UU.santaStatusKnown && !this.spotted && this.play(ZX), this.spotted = UU.santaStatusKnown
+         (HH.santaStatusKnown && !this.spotted || HH.santaStatusHatKnown && !this.hatSpotted) && this.play(aB), this.spotted = HH.santaStatusKnown, this.hatSpotted = HH.santaStatusHatKnown
```

#### 2448. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22715` → after: `L23170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23170) · [Before (L22715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22715)

```diff
-           const [yU, QU] = null !== (cU = XU[zU]) && void 0 !== cU ? cU : [0, UU.rate];
+           const [rH, SH] = null !== (AH = BH[LH]) && void 0 !== AH ? AH : [0, HH.rate];
```

#### 2449. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22819` → after: `L23274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23274) · [Before (L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22819)

```diff
-         const AU = cU.f.aY,
+         const hH = AH.g.xX,
```

#### 2450. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22834` → after: `L23289-L23326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23289-L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23289-L23326) · [Before (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22834)

```diff
-     var eX = zU(39988);
+     var HL = LH(39811),
+       BL = LH(1253),
+       LL = LH(39461);
+     class AL {
+       constructor(HH) {
+         this.api = HH, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
+           this.XX()
+         }), 5e3), this.pacer = new LL.c({
+           limit: 2,
+           spacingMs: 3e3
+         }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
+           null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
+             this.timer = null, this.XX()
+           }), 400)
+         }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
+           this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.XX())
+ ... (22 more added lines; see GitHub link above)
```

#### 2451. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22844` → after: `L23336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23336) · [Before (L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22844)

```diff
-         xY: 900,
+         aX: 900,
```

#### 2452. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22848` → after: `L23340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23340) · [Before (L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22848)

```diff
-         xY: 360,
+         aX: 360,
```

#### 2453. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22853` → after: `L23345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23345) · [Before (L22853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22853)

```diff
-         this.api = UU, this.tier = (0, tX.isMobile)() ? fX : uX, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
+         this.api = HH, this.tier = (0, nB.isMobile)() ? GL : XL, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
```

#### 2454. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22866` → after: `L23358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23358) · [Before (L22866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22866)

```diff
-         }), QU = Math.floor(this.tier.xY / 2)), QU > 0 && (this.system.moveTo(yU, CX), this.system.emit(QU))
+         }), SH = Math.floor(this.tier.aX / 2)), SH > 0 && (this.system.moveTo(rH, SL), this.system.emit(SH))
```

#### 2455. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22885-L22889` → after: `L23377-L23381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23377-L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23377-L23381) · [Before (L22885-L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22885-L22889)

```diff
-           xY: this.tier.xY,
-           minLifeTime: wX[0] / eX.d,
-           maxLifeTime: wX[1] / eX.d,
-           minEmitPower: 1.1 * eX.d * .8,
-           maxEmitPower: 1.1 * eX.d * 1.2,
+           aX: this.tier.aX,
+           minLifeTime: hL[0] / rL.b,
+           maxLifeTime: hL[1] / rL.b,
+           minEmitPower: 1.1 * rL.b * .8,
+           maxEmitPower: 1.1 * rL.b * 1.2,
```

#### 2456. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22913` → after: `L23405-L23461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23405-L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23405-L23461) · [Before (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22913)

```diff
-     var HX = zU(37281);
+     var uL = LH(37442);
+     const QL = [{
+         icon: "gift",
+         key: "secretSantaHud:introFind"
+       }, {
+         icon: "coins",
+         key: "secretSantaHud:introCoal"
+       }, {
+         icon: "eyes",
+         key: "secretSantaHud:introWatched"
+       }],
+       WL = (0, SH.memo)((function() {
+         const {
+           t: HH
+         } = (0, GH.B)();
+         return (0, cH.jsxs)("div", {
+ ... (41 more added lines; see GitHub link above)
```

#### 2457. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22916` → after: `L23464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23464) · [Before (L22916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22916)

```diff
-         this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.bind = UU => {
+         this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = HH => {
```

#### 2458. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22926` → after: `L23476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23476) · [Before (L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22926)

```diff
-         if (zU <= 0) return null !== this.shownAt && (this.armedUntil = 0), this.shownAt = null, void this.draw(0);
+         if (this.drawIntro(BH, LH), LH <= 0) return null !== this.shownAt && (BH < this.armedUntil && this.startIntro(BH), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
```

#### 2459. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22935` → after: `L23495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23495) · [Before (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22935)

```diff
-         (null === (XU = this.fade) || void 0 === XU || !XU.isConnected) && UU - this.fadeLookedAt >= 250 && (this.fadeLookedAt = UU, this.fade = document.querySelector(`[${HX.e}]`));
+         (null === (BH = this.fade) || void 0 === BH || !BH.isConnected) && HH - this.fadeLookedAt >= 250 && (this.fadeLookedAt = HH, this.fade = document.querySelector(`[${uL.c}]`));
```

#### 2460. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22938` → after: `L23498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23498) · [Before (L22938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22938)

```diff
-         const AU = null !== (cU = null === (yU = QU.backgroundColor.match(/\d+/g)) || void 0 === yU ? void 0 : yU.slice(0, 3).map(Number)) && void 0 !== cU ? cU : [];
+         const hH = null !== (AH = null === (rH = SH.backgroundColor.match(/\d+/g)) || void 0 === rH ? void 0 : rH.slice(0, 3).map(Number)) && void 0 !== AH ? AH : [];
```

#### 2461. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22952` → after: `L23512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23512) · [Before (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22952)

```diff
-         } = (0, IU.I)();
+         } = (0, GH.B)();
```

#### 2462. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22962-L22964` → after: `L23522-L23524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23522-L23524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23522-L23524) · [Before (L22962-L22964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22962-L22964)

```diff
-               children: [(0, qU.jsx)("span", {
-                 className: "SecretSantaSnowTitleIcon",
-                 children: "\ud83c\udf85"
+               children: [(0, cH.jsx)(nH.c, {
+                 name: "hat-santa",
+                 className: "SecretSantaSnowTitleIcon"
```

#### 2463. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22966-L22969` → after: `L23526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23526) · [Before (L22966-L22969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22966-L22969)

```diff
-             }), (0, qU.jsx)("div", {
-               className: "SecretSantaSnowTitleLine",
-               children: zU("secretSantaHud:titleLine")
-             })]
+             }), (0, cH.jsx)(WL, {})]
```

#### 2464. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22974` → after: `L23531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23531) · [Before (L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L22974)

```diff
-       sX = cU.f.cg * cU.f.playerEyeToHeightRatio;
+       UL = AH.g.iW * AH.g.playerEyeToHeightRatio;
```

#### 2465. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23018` → after: `L23576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23576) · [Before (L23018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23018)

```diff
-             const FU = QU > 0 ? (cU * XU[0] + yU * XU[2]) / QU : 0;
+             const tH = SH > 0 ? (AH * BH[0] + rH * BH[2]) / SH : 0;
```

#### 2466. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23049` → after: `L23607-L23609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23607-L23609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23607-L23609) · [Before (L23049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23049)

```diff
-           IU = UU, document.body.classList.add(VX), aU = new dX(UU, yU), tU = new iX(UU), gU = new LX(UU), pU = (0, FU.u)((0, AU.createElement)(AU.Fragment, null, (0, AU.createElement)(lU, {
+           YH = HH, document.body.classList.add(TL), QH = new pB(HH, rH), WH = new YL(HH), MH = new yB(HH), xH = new AL(HH), uH = (0, hH.v)((0, SH.createElement)(SH.Fragment, null, (0, SH.createElement)(vB, {
+             controller: tH
+           }), (0, SH.createElement)(qH, {
```

#### 2467. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23058-L23059` → after: `L23618-L23619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23618-L23619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23618-L23619) · [Before (L23058-L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23058-L23059)

```diff
-           var UU, XU, zU;
-           document.body.classList.remove(VX), nX(!1), null === (UU = pU) || void 0 === UU || UU(), pU = null, QU.dispose(), null === (XU = aU) || void 0 === XU || XU.dispose(), aU = null, null === (zU = tU) || void 0 === zU || zU.dispose(), tU = null, gU = null, IU = null
+           var HH, BH, LH, AH;
+           document.body.classList.remove(TL), VL(!1), null === (HH = uH) || void 0 === HH || HH(), uH = null, tH.dispose(), null === (BH = QH) || void 0 === BH || BH.dispose(), QH = null, null === (LH = WH) || void 0 === LH || LH.dispose(), WH = null, MH = null, null === (AH = xH … [truncated]
```

#### 2468. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23069` → after: `L23629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23629) · [Before (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23069)

```diff
-           const EU = null !== (zU = IU) && void 0 !== zU && zU.readDrawnPosition(yU, DU) ? DU : null;
+           const EH = null !== (LH = YH) && void 0 !== LH && LH.readDrawnPosition(rH, CH) ? CH : null;
```

#### 2469. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23090` → after: `L23650-L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23650-L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23650-L23653) · [Before (L23090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23090)

```diff
-             null === (AU = aU) || void 0 === AU || AU.setBells(XU.santaBellsLevel)
+             const {
+               santaBellsLevel: HH
+             } = BH;
+             tH.receiveBells(HH), null === (SH = QH) || void 0 === SH || SH.setBells(HH)
```

#### 2470. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23097-L23098` → after: `L23660-L23667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23660-L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23660-L23667) · [Before (L23097-L23098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23097-L23098)

```diff
-             null === (DU = gU) || void 0 === DU || DU.PY(XU), oU.receiveFlyover(XU.santaFlyoverWaitMs)
-           } else "secretSantaPodium" === UU && nX(XU.santaPodiumShown)
+             null === (CH = MH) || void 0 === CH || CH.kX(BH), zH.receiveFlyover(BH.santaFlyoverWaitMs)
+           } else if ("secretSantaPodium" === HH) {
+             const {
+               santaPodiumShown: HH
+             } = BH;
+             var EH;
+             if (VL(HH), !HH) null === (EH = xH) || void 0 === EH || EH.resend()
+           }
```

#### 2471. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23103` → after: `L23672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23672) · [Before (L23103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23103)

```diff
-   40427: (UU, XU, zU) => {
+   40588: (HH, BH, LH) => {
```

#### 2472. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23121` → after: `L23690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23690) · [Before (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23121)

```diff
-   40435: (UU, XU, zU) => {
+   40597: (HH, BH, LH) => {
```

#### 2473. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23125` → after: `L23694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23694) · [Before (L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23125)

```diff
-     var cU = zU(34891);
+     var AH = LH(35008);
```

#### 2474. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23129-L23131` → after: `L23698-L23700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23698-L23700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23698-L23700) · [Before (L23129-L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23129-L23131)

```diff
-       if ("parenthetical-seconds" === XU) return ` (${UU}s)`;
-       const cU = `${Math.floor(UU/60)}:${(UU%60).toString().padStart(2,"0")}`;
-       return zU ? `${zU}${cU}` : cU
+       if ("parenthetical-seconds" === BH) return ` (${HH}s)`;
+       const AH = `${Math.floor(HH/60)}:${(HH%60).toString().padStart(2,"0")}`;
+       return LH ? `${LH}${AH}` : AH
```

#### 2475. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23139` → after: `L23708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23708) · [Before (L23139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23139)

```diff
-       FU.content = [...null !== (AU = yU.baseNametag.content) && void 0 !== AU ? AU : [], {
+       tH.content = [...null !== (hH = rH.baseNametag.content) && void 0 !== hH ? hH : [], {
```

#### 2476. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23144` → after: `L23713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23713) · [Before (L23144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23144)

```diff
-         str: `: ${(0,cU.e)(QU)}`
+         str: `: ${(0,AH.c)(SH)}`
```

#### 2477. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23159` → after: `L23728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23728) · [Before (L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23159)

```diff
-         LY: UU => {
+         IX: HH => {
```

#### 2478. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23174` → after: `L23743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23743) · [Before (L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23174)

```diff
-             if ("content" === yU.location) YU.content = [...null !== (zU = yU.baseNametag.content) && void 0 !== zU ? zU : [], EU];
+             if ("content" === rH.location) XH.content = [...null !== (LH = rH.baseNametag.content) && void 0 !== LH ? LH : [], EH];
```

#### 2479. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23225` → after: `L23794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23794) · [Before (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23225)

```diff
-   9291: (UU, XU, zU) => {
+   9426: (HH, BH, LH) => {
```

#### 2480. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23227-L23228` → after: `L23796-L23797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23796-L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23796-L23797) · [Before (L23227-L23228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23227-L23228)

```diff
-       b: () => QU,
-       f: () => yU
+       d: () => SH,
+       g: () => rH
```

#### 2481. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23230` → after: `L23799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23799) · [Before (L23230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23230)

```diff
-     var cU = zU(31);
+     var AH = LH(18);
```

#### 2482. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23236` → after: `L23805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23805) · [Before (L23236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23236)

```diff
-           "Air" === FU && cU.k.UY(yU)
+           "Air" === tH && AH.k.AX(rH)
```

#### 2483. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23241` → after: `L23810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23810) · [Before (L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23241)

```diff
-   38782: (UU, XU, zU) => {
+   38905: (HH, BH, LH) => {
```

#### 2484. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23243` → after: `L23812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23812) · [Before (L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23243)

```diff
-       d: () => FU
+       e: () => tH
```

#### 2485. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23245-L23248` → after: `L23814-L23817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23814-L23817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23814-L23817) · [Before (L23245-L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23245-L23248)

```diff
-     var cU = zU(344),
-       yU = zU(37662),
-       QU = zU(4909);
-     const AU = ["Leaf Bed", "_Leaf Bed Head", ...cU.Oc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];
+     var AH = LH(317),
+       rH = LH(37798),
+       SH = LH(4879);
+     const hH = ["Leaf Bed", "_Leaf Bed Head", ...AH.Mc.flatMap((HH => [`${HH} Bed`, `_${HH} Bed Head`, `${HH} Strongbed`, `_${HH} Strongbed Head`]))];
```

#### 2486. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23259` → after: `L23828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23828) · [Before (L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23259)

```diff
-           if ((0, yU.b)(UU.getMetaInfo(FU).rootName) && !UU.isEntityInteractable(oU) && (0, QU.d)(null === (DU = UU.HzU(XU)) || void 0 === DU ? void 0 : DU.typeObj.type)) return "preventAction"
+           if ((0, rH.d)(HH.getMetaInfo(tH).rootName) && !HH.isEntityInteractable(zH) && (0, SH.e)(null === (CH = HH.yLH(BH)) || void 0 === CH ? void 0 : CH.typeObj.type)) return "preventAction"
```

#### 2487. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23264` → after: `L23833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23833) · [Before (L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23264)

```diff
-   39988: (UU, XU, zU) => {
+   40100: (HH, BH, LH) => {
```

#### 2488. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23266-L23267` → after: `L23835-L23836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23835-L23836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23835-L23836) · [Before (L23266-L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23266-L23267)

```diff
-       d: () => cU,
-       f: () => QU
+       b: () => AH,
+       d: () => SH
```

#### 2489. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23275` → after: `L23844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23844) · [Before (L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23275)

```diff
-         this.style = UU, this.xY = XU, this.half = zU, this.particles = null, this.lastFrame = -1
+         this.style = HH, this.aX = BH, this.half = LH, this.particles = null, this.lastFrame = -1
```

#### 2490. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23285-L23286` → after: `L23854-L23855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23854-L23855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23854-L23855) · [Before (L23285-L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23285-L23286)

```diff
-             texture: UU.soft ? yU : "square_particle",
-             xY: XU,
+             texture: HH.soft ? rH : "square_particle",
+             aX: BH,
```

#### 2491. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23308` → after: `L23877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23877) · [Before (L23308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23308)

```diff
-         }(this.style, this.xY), {
+         }(this.style, this.aX), {
```

#### 2492. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23319` → after: `L23888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23888) · [Before (L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23319)

```diff
-   39962: (UU, XU, zU) => {
+   40075: (HH, BH, LH) => {
```

#### 2493. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23321` → after: `L23890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23890) · [Before (L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23321)

```diff
-       e: () => QU
+       b: () => SH
```

#### 2494. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23323-L23324` → after: `L23892-L23893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23892-L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23892-L23893) · [Before (L23323-L23324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23323-L23324)

```diff
-     var cU = zU(37814),
-       yU = zU(38610);
+     var AH = LH(37961),
+       rH = LH(38729);
```

#### 2495. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23329-L23331` → after: `L23898-L23900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23898-L23900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23898-L23900) · [Before (L23329-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23329-L23331)

```diff
-       const QU = null !== (zU = XU.gravity) && void 0 !== zU ? zU : [0, 0, 0];
-       UU.gravity = new cU.Sp(QU[0], QU[1], QU[2]);
-       for (const cU of XU.colorGradients) UU.addColorGradient(cU.timeFraction, (0, yU.k)(cU.minColor), cU.maxColor ? (0, yU.k)(cU.maxColor) : void 0)
+       const SH = null !== (LH = BH.gravity) && void 0 !== LH ? LH : [0, 0, 0];
+       HH.gravity = new AH.lu(SH[0], SH[1], SH[2]);
+       for (const AH of BH.colorGradients) HH.addColorGradient(AH.timeFraction, (0, rH.g)(AH.minColor), AH.maxColor ? (0, rH.g)(AH.maxColor) : void 0)
```

#### 2496. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23334` → after: `L23903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23903) · [Before (L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23334)

```diff
-   39646: (UU, XU, zU) => {
+   39760: (HH, BH, LH) => {
```

#### 2497. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23340` → after: `L23909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23909) · [Before (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23340)

```diff
-           LY: 0
+           IX: 0
```

#### 2498. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23342-L23343` → after: `L23911-L23912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23911-L23912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23911-L23912) · [Before (L23342-L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23342-L23343)

```diff
-         lG: function(UU, XU) {},
-         Cw: null,
+         aT: function(HH, BH) {},
+         bq: null,
```

#### 2499. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23345-L23346` → after: `L23914-L23915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23914-L23915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23914-L23915) · [Before (L23345-L23346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23345-L23346)

```diff
-           if (zU[0] && 100 !== zU[0].LY++) return;
-           const cU = UU.xG.wG(UU.pM);
+           if (LH[0] && 100 !== LH[0].IX++) return;
+           const AH = HH.pT.hT(HH.lF);
```

#### 2500. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23348` → after: `L23917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23917) · [Before (L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23348)

```diff
-             const XU = UU.xG.wG(yU.iH);
+             const BH = HH.pT.hT(rH.pR);
```

#### 2501. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23351` → after: `L23920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23920) · [Before (L23351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23351)

```diff
-             zU > 500 && UU.xG.deleteEntity(yU.iH), yU.LY = 0
+             LH > 500 && HH.pT.deleteEntity(rH.pR), rH.IX = 0
```

#### 2502. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23367` → after: `L23936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23936) · [Before (L23367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23367)

```diff
-   39604: (UU, XU, zU) => {
+   39706: (HH, BH, LH) => {
```

#### 2503. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23372` → after: `L23941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23941) · [Before (L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23372)

```diff
-     var cU = zU(3043);
+     var AH = LH(3038);
```

#### 2504. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23382` → after: `L23951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23951) · [Before (L23382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23382)

```diff
-         lG: function(UU, XU) {
+         aT: function(HH, BH) {
```

#### 2505. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23385-L23387` → after: `L23954-L23956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23954-L23956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23954-L23956) · [Before (L23385-L23387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23385-L23387)

```diff
-         Cw: null,
-         JG: function(XU, zU) {
-           const QU = (0, cU.e)().WY.DH,
+         bq: null,
+         rU: function(BH, LH) {
+           const SH = (0, AH.c)().mX.bR,
```

#### 2506. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23391-L23392` → after: `L23960-L23961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23960-L23961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23960-L23961) · [Before (L23391-L23392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23391-L23392)

```diff
-             const XU = UU.xG.DzU(cU.iH);
-             null === XU.YH ? XU.mesh.rotation.set(XU.mesh.rotation.x, cU.heading, XU.mesh.rotation.z) : QU.getCulledForEntity(XU.YH, cU.iH) || QU.setRotationEuler(XU.YH, 0, cU.heading, 0)
+             const BH = HH.pT.VLH(AH.pR);
+             null === BH.kR ? BH.mesh.rotation.set(BH.mesh.rotation.x, AH.heading, BH.mesh.rotation.z) : SH.getCulledForEntity(BH.kR, AH.pR) || SH.setRotationEuler(BH.kR, 0, AH.heading, 0)
```

#### 2507. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23400-L23401` → after: `L23969-L23970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23969-L23970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23969-L23970) · [Before (L23400-L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23400-L23401)

```diff
-       const yU = UU.xG.getState(XU, "autoRotate");
-       yU && (null === (cU = UU.xG.DzU(XU)) || void 0 === cU ? void 0 : cU.YH) === zU && UU.WY.DH.setRotationEuler(zU, 0, yU.heading, 0)
+       const rH = HH.pT.getState(BH, "autoRotate");
+       rH && (null === (AH = HH.pT.VLH(BH)) || void 0 === AH ? void 0 : AH.kR) === LH && HH.mX.bR.setRotationEuler(LH, 0, rH.heading, 0)
```

#### 2508. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23404` → after: `L23973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23973) · [Before (L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23404)

```diff
-   39652: (UU, XU, zU) => {
+   39762: (HH, BH, LH) => {
```

#### 2509. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23408` → after: `L23977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23977) · [Before (L23408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23408)

```diff
-     var cU = zU(352),
+     var AH = LH(330),
```

#### 2510. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23410` → after: `L23979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23979) · [Before (L23410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23410)

```diff
-       QU = zU(38090);
+       SH = LH(38229);
```

#### 2511. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23422-L23424` → after: `L23991-L23993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23991-L23993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23991-L23993) · [Before (L23422-L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23422-L23424)

```diff
-         lG: function(UU, XU) {},
-         Cw: function(UU) {},
-         JG: function(XU, zU) {
+         aT: function(HH, BH) {},
+         bq: function(HH) {},
+         rU: function(BH, LH) {
```

#### 2512. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23428` → after: `L23997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L23997) · [Before (L23428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23428)

```diff
-               cU.onEnd(), UU.xG.deleteEntity(cU.iH);
+               AH.onEnd(), HH.pT.deleteEntity(AH.pR);
```

#### 2513. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23432` → after: `L24001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24001) · [Before (L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23432)

```diff
-             const zU = UU.xG.wG(cU.iH);
+             const LH = HH.pT.hT(AH.pR);
```

#### 2514. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23434-L23435` → after: `L24003-L24004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24003-L24004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24003-L24004) · [Before (L23434-L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23434-L23435)

```diff
-             UU.xG.setPosition(cU.iH, zU);
-             const AU = UU.xG.DzU(cU.iH);
+             HH.pT.setPosition(AH.pR, LH);
+             const hH = HH.pT.VLH(AH.pR);
```

#### 2515. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23438` → after: `L24007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24007) · [Before (L23438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23438)

```diff
-                 [zU, yU, FU] = UU.xG.F_(cU.iH),
+                 [LH, rH, tH] = HH.pT.h_(AH.pR),
```

#### 2516. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23440` → after: `L24009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24009) · [Before (L23440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23440)

```diff
-               (0, QU.o)(XU, zU + oU - XU.position.x, yU + DU - XU.position.y, FU + EU - XU.position.z), cU._updatedLookAt = !0
+               (0, SH.m)(BH, LH + zH - BH.position.x, rH + CH - BH.position.y, tH + EH - BH.position.z), AH._updatedLookAt = !0
```

#### 2517. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23447` → after: `L24016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24016) · [Before (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23447)

```diff
-   39661: (UU, XU, zU) => {
+   39769: (HH, BH, LH) => {
```

#### 2518. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23451` → after: `L24020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24020) · [Before (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23451)

```diff
-     var cU, yU, QU, AU, FU, oU, DU, EU, YU, NU = zU(352),
+     var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH = LH(330),
```

#### 2519. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23453-L23456` → after: `L24022-L24025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24022-L24025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24022-L24025) · [Before (L23453-L23456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23453-L23456)

```diff
-       pU = zU(38614),
-       aU = zU(39670),
-       tU = zU(38494),
-       gU = zU(1236);
+       uH = LH(38736),
+       QH = LH(39771),
+       WH = LH(38596),
+       MH = LH(1168);
```

#### 2520. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23469-L23471` → after: `L24038-L24040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24038-L24040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24038-L24040) · [Before (L23469-L23471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23469-L23471)

```diff
-         Cw: function(UU, XU) {},
-         JG: function(XU, zU) {
-           for (const cU of zU) cU.iH === UU.pM && (cU.targetRotationOffset[0] = cU.frontFacing ? Math.PI : 0, cU.targetRotationOffset[1] = 0, cU.targetRotationOffset[2] = cU.frontFacing ? Math.PI : 0, cU.shakeTime > 0 && (cU.targetRotationOffset[0] += .2 * cU.shakePower * Math.co … [truncated]
+         bq: function(HH, BH) {},
+         rU: function(BH, LH) {
+           for (const AH of LH) AH.pR === HH.lF && (AH.targetRotationOffset[0] = AH.frontFacing ? Math.PI : 0, AH.targetRotationOffset[1] = 0, AH.targetRotationOffset[2] = AH.frontFacing ? Math.PI : 0, AH.shakeTime > 0 && (AH.targetRotationOffset[0] += .2 * AH.shakePower * Math.co … [truncated]
```

#### 2521. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23475` → after: `L24044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24044) · [Before (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23475)

```diff
-     const GU = ["b", 0, 1, "h", 3, "a", 9, "g", 5, 6, 121, 8, 255, "length", 68, 179, "d", 4, "undefined", "c", 63, "fromCodePoint", 7, 12, "push", 2, 122, 224, 91, 8191, 88, 13, 14, 79, 145, 53, 112, 41, 155, 243, !1, 191, "e", 127, 245, 105, 126, "Q", ".", !0];
+     const vH = ["b", 0, 1, 186, 3, "a", 9, 7, 5, "f", 230, 8, 255, "length", 214, "c", "d", 173, "e", "undefined", void 0, 2, 231, 81, 209, 63, 6, "fromCodePoint", 12, "push", 188, 118, "g", 91, 96, 8191, 88, 13, 14, 226, 219, 216, "k", 98, 217, 36, 94, 30, "i", 163, 4, null, 10, … [truncated]
```

#### 2522. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23478` → after: `L24047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24047) · [Before (L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23478)

```diff
-       return UU[GU[13]] = GU[2], typeof AU !== GU[18] && AU ? (new AU).decode(new FU(UU[GU[1]])) : typeof oU !== GU[18] && oU ? oU.from(UU[GU[1]]).toString("utf-8") : YU(UU[GU[1]])
+       return HH[vH[13]] = vH[2], typeof hH !== vH[19] && hH ? (new hH).decode(new tH(HH[vH[1]])) : typeof zH !== vH[19] && zH ? zH.from(HH[vH[1]]).toString("utf-8") : XH(HH[vH[1]])
```

#### 2523. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23486-L23487` → after: `L24055-L24056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24055-L24056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L24055-L24056) · [Before (L23486-L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L23486-L23487)

```diff
-     RU(cU = {}, yU = ['7PF?2<="sP%S~S8;o,I%&I&Dw8', "US*cy32", "&P1Wz,_9izfSw3<BR:oA", "A:*r[w[uOP([16z", "pUXDXtPRHP>!j{!G4oIqJ", "pP^gs5^g#>uvQ<b|#/cD*+Z,?8", 'a;rWNU@9!9tBZbLZu"]tfF5[)zf&|n{;!cvk4Y@g(,OPR', "=Nr}VFWw$EgQH;:KxD.kBOnMS", 'b9P:PC$Rf`r"eS', "05(E;r:WS,S!dM^<Yc3g6= … [truncated]
-       RU(UU[GU[13]] = GU[1], UU[GU[5]] = [function() {
+     UH(AH = {}, rH = ["yNY5FOPR/r}O_LJ", 'bHH^HO9{Uz@^s0wV<rfn,4x^m!KhuIBR*rdz}+Ee?4"jPS3(', "vB^Ot3S~Hi]bZ?]RIZlN:G1Lv", "Z6Ey9+I%", "/FS/(c#=_Zk$gb}&tjDO(kTAC=blU?](#@V/70P%", "p)wFWCO+H{E^1", "k)}vP?wA;oL):57V8uPBd]CugZU%^X2", "U*uDl?eeHeuD2p?Lx@~V&", '3u!Non"u)A8.X2>~@rmDKpAu … [truncated]
+       UH(HH[vH[13]] = vH[1], HH[-vH[17]] = [function() {
```
