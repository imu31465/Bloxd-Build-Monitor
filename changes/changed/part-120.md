# Changed — Bundle Modifications Report (Part 120 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `120 / 133` (**404** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 119](part-119.md) · [Part 121 →](part-121.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (362 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 110. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L816-L817` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L816-L817) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L816-L817)

```diff
-           if (0 !== (mv.t.playerFlags(hv.apiView, 0) & mv.Gd.Crouching)) return !1;
-           const Sv = hv.queries.directorEntity(hv.localId) >= mv.pb.BYTES ? hv.memoryData(hv.scratch(), mv.pb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (DT.A.playerFlags(lT.apiView, 0) & DT.Od.Crouching)) return !1;
+           const MT = lT.queries.directorEntity(lT.localId) >= DT.Cb.BYTES ? lT.memoryData(lT.scratch(), DT.Cb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 111. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L819-L820` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L819-L820) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L819-L820)

```diff
-           for (let ev = 0; ev < 3; ev++) fv[ev] = mv.pb.feet(Sv, 0, ev);
-           return fv[1] += mv.pb.eyeHeight(Sv, 0), (0, jv.e)(fv, vv, null !== (zv = Gv.c.get("blockReach")) && void 0 !== zv ? zv : cv.f.aG)
+           for (let KT = 0; KT < 3; KT++) FT[KT] = DT.Cb.feet(MT, 0, KT);
+           return FT[1] += DT.Cb.eyeHeight(MT, 0), (0, aT.d)(FT, TT, null !== (kT = ST.b.get("blockReach")) && void 0 !== kT ? kT : QT.f.mw)
```

#### 112. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L826)

```diff
-           null === (zv = (0, gv.h)()) || void 0 === zv || zv.clickCodeBlock(vv)
+           null === (kT = (0, OT.g)()) || void 0 === kT || kT.clickCodeBlock(TT)
```

#### 113. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L829-L836` → after: `L829-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L829-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L829-L836) · [Before (L829-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L829-L836)

```diff
-     var nv = Pv(39911),
-       Ov = Pv(40007),
-       Dv = Pv(1002),
-       Kv = Pv(38566),
-       Vv = Pv(4525),
-       Uv = Pv(39927),
-       Rv = Pv(39907),
-       xv = Pv(39933);
+     var wT = cT(40222),
+       mT = cT(40329),
+       bT = cT(1018),
+       zT = cT(38856),
+       JT = cT(4745),
+       oT = cT(40239),
+       HT = cT(40219),
+       eT = cT(40246);
```

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L843)

```diff
-         if ("Wv" === vv) {
+         if ("AT" === TT) {
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L848)

```diff
-           } = Pv.Wv, ev = Object.keys(vv)[0], gv = vv[ev];
+           } = cT.AT, KT = Object.keys(TT)[0], OT = TT[KT];
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L861)

```diff
-         return null !== (zv = null === (Pv = (0, gv.h)()) || void 0 === Pv ? void 0 : Pv.renderFrame.projectWorldPosToScreenPos(vv)) && void 0 !== zv ? zv : {
+         return null !== (kT = null === (cT = (0, OT.g)()) || void 0 === cT ? void 0 : cT.renderFrame.projectWorldPosToScreenPos(TT)) && void 0 !== kT ? kT : {
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L871-L878` → after: `L871-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L871-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L878) · [Before (L871-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L878)

```diff
-         const zv = (0, xv.j)(vv);
-         (0, xv.d)(zv) && Nv.j.zC("progressBarUpdate", zv, !0)
-       })), (0, sv.m)(Uv.D, (vv => {
-         const zv = (0, xv.f)(Uv.D, vv);
-         zv && Nv.j.zC("middleScreenBarInitiate", {
-           duration: zv.Rv,
-           xv: zv.xv,
-           horizBarRemOffset: zv.tv
+         const kT = (0, eT.g)(TT);
+         (0, eT.b)(kT) && xT.k.nt("progressBarUpdate", kT, !0)
+       })), (0, tT.m)(oT.w, (TT => {
+         const kT = (0, eT.e)(oT.w, TT);
+         kT && xT.k.nt("middleScreenBarInitiate", {
+           duration: kT.oT,
+           HT: kT.HT,
+           horizBarRemOffset: kT.eT
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L881-L883` → after: `L881-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L881-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L883) · [Before (L881-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L883)

```diff
-         Nv.j.zC("middleScreenBarRemove")
-       })), (0, sv.m)(Uv.mb, (vv => {
-         const zv = (0, xv.f)(Uv.mb, vv);
+         xT.k.nt("middleScreenBarRemove")
+       })), (0, tT.m)(oT.lb, (TT => {
+         const kT = (0, eT.e)(oT.lb, TT);
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L886-L888` → after: `L886-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L886-L888) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L886-L888)

```diff
-           const vv = zv.nv ? null === (Pv = (0, gv.h)()) || void 0 === Pv ? void 0 : Pv.renderFrame.projectDirectionToScreenPos(zv.nv) : void 0;
-           Nv.j.zC("sendHitmarker", {
-             WP: zv.WP,
+           const TT = kT.PT ? null === (cT = (0, OT.g)()) || void 0 === cT ? void 0 : cT.renderFrame.projectDirectionToScreenPos(kT.PT) : void 0;
+           xT.k.nt("sendHitmarker", {
+             Ac: kT.Ac,
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L892-L893` → after: `L892-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L892-L893) · [Before (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L892-L893)

```diff
-       })), (0, sv.m)(Uv.tb, (vv => {
-         const zv = (0, xv.f)(Uv.tb, vv);
+       })), (0, tT.m)(oT.qb, (TT => {
+         const kT = (0, eT.e)(oT.qb, TT);
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L899-L900` → after: `L899-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L899-L900) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L899-L900)

```diff
-             Tv: Sv,
-             sv: ev
+             IT: MT,
+             vT: KT
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L902)

```diff
-           Nv.j.zC("setDirectionArrow", {
+           xT.k.nt("setDirectionArrow", {
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L907)

```diff
-             sv: ev
+             vT: KT
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L911-L912` → after: `L911-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L911-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L911-L912) · [Before (L911-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L911-L912)

```diff
-         const zv = (0, xv.f)(Uv.g, vv);
-         zv && Nv.j.zC("clearDirectionArrow", {
+         const kT = (0, eT.e)(oT.g, TT);
+         kT && xT.k.nt("clearDirectionArrow", {
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L915-L920` → after: `L915-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L915-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L915-L920) · [Before (L915-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L915-L920)

```diff
-       })), (0, sv.m)(Uv.t, (vv => {
-         const zv = (0, xv.f)(Uv.t, vv);
-         zv && Nv.j.zC("flyingMiddleMessage", {
-           content: tv(zv.wP),
-           aP: zv.aP,
-           sP: zv.sP
+       })), (0, tT.m)(oT.o, (TT => {
+         const kT = (0, eT.e)(oT.o, TT);
+         kT && xT.k.nt("flyingMiddleMessage", {
+           content: GT(kT.Cc),
+           jc: kT.jc,
+           vc: kT.vc
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L923)

```diff
-         const zv = (0, xv.j)(vv);
+         const kT = (0, eT.g)(TT);
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L925-L926` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L925-L926) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L925-L926)

```diff
-           const vv = zv === Dv.g ? null : {
-             message: `Currently loaded as variation: ${zv}`,
+           const TT = kT === bT.d ? null : {
+             message: `Currently loaded as variation: ${kT}`,
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L929)

```diff
-           Nv.j.zC("showPermanentBottomMessage", vv, !0)
+           xT.k.nt("showPermanentBottomMessage", TT, !0)
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L931-L932` → after: `L931-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L931-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L931-L932) · [Before (L931-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L931-L932)

```diff
-       })), (0, sv.m)(Uv.U, (vv => {
-         const zv = (0, xv.f)(Uv.U, vv);
+       })), (0, tT.m)(oT.L, (TT => {
+         const kT = (0, eT.e)(oT.L, TT);
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L937)

```diff
-           } = (0, Kv.f)(zv), Sv = {
+           } = (0, zT.e)(kT), MT = {
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L943)

```diff
-             "boolean" === typeof zv && (null === (Pv = (0, gv.h)()) || void 0 === Pv || Pv.send(Rv.d.QteResponse, {
+             "boolean" === typeof kT && (null === (cT = (0, OT.g)()) || void 0 === cT || cT.send(HT.b.QteResponse, {
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L948-L950` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L948-L950) · [Before (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L948-L950)

```diff
-         }(zv.id, zv.qz)
-       })), (0, sv.m)(Uv.gb, (vv => {
-         const zv = (0, xv.f)(Uv.gb, vv);
+         }(kT.id, kT.Vk)
+       })), (0, tT.m)(oT.ab, (TT => {
+         const kT = (0, eT.e)(oT.ab, TT);
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L952-L953)

```diff
-       })), (0, sv.i)((() => {
-         Vv.d.reset(), Nv.j.zC("showPermanentBottomMessage", null, !0)
+       })), (0, tT.h)((() => {
+         JT.d.reset(), xT.k.nt("showPermanentBottomMessage", null, !0)
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L957-L958` → after: `L957-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L957-L958) · [Before (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L957-L958)

```diff
-         const zv = (0, xv.j)(vv);
-         (0, xv.d)(zv) && Nv.j.zC("craftingRecipesEdited", {
+         const kT = (0, eT.g)(TT);
+         (0, eT.b)(kT) && xT.k.nt("craftingRecipesEdited", {
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L962-L965` → after: `L962-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L965) · [Before (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L965)

```diff
-       })), (0, sv.m)(Uv.cb, (vv => {
-         const zv = (0, xv.f)(Uv.cb, vv);
-         zv && Nv.j.zC("craftingRecipesEdited", {
-           itemName: zv.DP,
+       })), (0, tT.m)(oT.Y, (TT => {
+         const kT = (0, eT.e)(oT.Y, TT);
+         kT && xT.k.nt("craftingRecipesEdited", {
+           itemName: kT.bc,
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L970)

```diff
-     var Zv = Pv(22);
+     var uT = cT(31);
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L986)

```diff
-       return mv.t.playerFlags(vv.api.apiView, 0)
+       return DT.A.playerFlags(TT.api.apiView, 0)
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L990-L991` → after: `L990-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L990-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L990-L991) · [Before (L990-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L990-L991)

```diff
-           const zv = vv.isSessionLive && 0 !== (Lv(vv) & mv.Gd.FreeCamMoves),
-             Pv = vv.freeCameraAllowed() && null === Zv.c.get("scriptedCameraFacing");
+           const kT = TT.isSessionLive && 0 !== (dT(TT) & DT.Od.FreeCamMoves),
+             cT = TT.freeCameraAllowed() && null === uT.e.get("scriptedCameraFacing");
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L993)

```diff
-         }), Av[0], (vv => (0, ev.o)(vv)))
+         }), XT[0], (TT => (0, KT.q)(TT)))
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L998)

```diff
-           null === (zv = (0, gv.h)()) || void 0 === zv || zv.setFreeCameraMovesFly(vv)
+           null === (kT = (0, OT.g)()) || void 0 === kT || kT.setFreeCameraMovesFly(TT)
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1003-L1004)

```diff
-           const vv = (0, gv.h)();
-           return null !== vv && void 0 !== vv && vv.isSessionLive && vv.renderFrame.hasView && 0 !== (Lv(vv) & mv.Gd.FreeCam) ? vv.renderFrame.cameraPosition : null
+           const TT = (0, OT.g)();
+           return null !== TT && void 0 !== TT && TT.isSessionLive && TT.renderFrame.hasView && 0 !== (dT(TT) & DT.Od.FreeCam) ? TT.renderFrame.cameraPosition : null
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1007)

```diff
-     var Bv = Pv(38685);
+     var UT = cT(38974);
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1012)

```diff
-       const vv = (0, gv.h)();
+       const TT = (0, OT.g)();
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1014-L1021` → after: `L1014-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1014-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1021) · [Before (L1014-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1021)

```diff
-       const zv = 0 !== (mv.t.playerFlags(vv.api.apiView, 0) & mv.Gd.FreeCam);
-       zv !== Jv && (Jv = zv, (0, Bv.b)(zv))
-     }
-     var bv = Pv(312),
-       rv = Pv(36542),
-       kv = Pv(1915);
-     var Xv = Pv(40015),
-       uv = Pv(39961);
+       const kT = 0 !== (DT.A.playerFlags(TT.api.apiView, 0) & DT.Od.FreeCam);
+       kT !== YT && (YT = kT, (0, UT.c)(kT))
+     }
+     var nT = cT(339),
+       pT = cT(36845),
+       iT = cT(1990);
+     var qT = cT(40335),
+       sT = cT(40281);
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1032)

```diff
-         label: null !== (zv = (0, Xv.e)(vv, "interactionPrompt")) && void 0 !== zv ? zv : null
+         label: null !== (kT = (0, qT.e)(TT, "interactionPrompt")) && void 0 !== kT ? kT : null
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1036-L1037` → after: `L1036-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1036-L1037) · [Before (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1036-L1037)

```diff
-       [mv.vc.Open, {
-         label: dv.i.open
+       [DT.Cc.Open, {
+         label: fT.f.open
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1039-L1040` → after: `L1039-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1039-L1040) · [Before (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1039-L1040)

```diff
-       [mv.vc.Close, {
-         label: dv.i.close
+       [DT.Cc.Close, {
+         label: fT.f.close
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1042-L1043` → after: `L1042-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043)

```diff
-       [mv.vc.Milk, {
-         label: dv.i.milk
+       [DT.Cc.Milk, {
+         label: fT.f.milk
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1045-L1046` → after: `L1045-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1045-L1046) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1045-L1046)

```diff
-       [mv.vc.Shear, {
-         label: dv.i.shear
+       [DT.Cc.Shear, {
+         label: fT.f.shear
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1048-L1049` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1049) · [Before (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1049)

```diff
-       [mv.vc.Tame, {
-         label: dv.i.tame
+       [DT.Cc.Tame, {
+         label: fT.f.tame
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1051-L1052)

```diff
-       [mv.vc.Feed, {
-         label: dv.i.feed
+       [DT.Cc.Feed, {
+         label: fT.f.feed
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1054-L1055` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1054-L1055) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1054-L1055)

```diff
-       [mv.vc.Ride, {
-         label: dv.i.ride
+       [DT.Cc.Ride, {
+         label: fT.f.ride
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1060)

```diff
-         this.target = vz, this.yN = mv.dd, this.optionName = null, this.pickaxe = new dv.e
+         this.target = Tk, this.Rx = DT.dd, this.optionName = null, this.pickaxe = new fT.d
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1064-L1066)

```diff
-         const Pv = mv.t.targetBlockId(vv.api.apiView, 0);
-         Pv !== this.yN && (this.yN = Pv, this.optionName = Pv === mv.dd ? null : `${vv.tables.getMetaInfo(Pv).rootName}CrosshairText`);
-         const hv = null === this.optionName ? null : null !== (zv = vv.tables.getClientOption(this.optionName)) && void 0 !== zv ? zv : null;
+         const cT = DT.A.targetBlockId(TT.api.apiView, 0);
+         cT !== this.Rx && (this.Rx = cT, this.optionName = cT === DT.dd ? null : `${TT.tables.getMetaInfo(cT).rootName}CrosshairText`);
+         const lT = null === this.optionName ? null : null !== (kT = TT.tables.getClientOption(this.optionName)) && void 0 !== kT ? kT : null;
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1069)

```diff
-           if (0 === (mv.t.playerFlags(vv.api.apiView, 0) & mv.Gd.Breaking) || zv === mv.dd || 0 === zv) return null;
+           if (0 === (DT.A.playerFlags(TT.api.apiView, 0) & DT.Od.Breaking) || kT === DT.dd || 0 === kT) return null;
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1075-L1077` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1075-L1077) · [Before (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1075-L1077)

```diff
-             pv = null === (Pv = vv.items.Vp()) || void 0 === Pv ? void 0 : Pv.name,
-             dv = null !== (hv = ev.getItemStat(gv, "harvestLevel")) && void 0 !== hv ? hv : 0;
-           return (0, bv.tc)({
+             yT = null === (cT = TT.items.ty()) || void 0 === cT ? void 0 : cT.name,
+             fT = null !== (lT = KT.getItemStat(OT, "harvestLevel")) && void 0 !== lT ? lT : 0;
+           return (0, nT.wc)({
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1083` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1083) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1083)

```diff
-           }) && null !== (Sv = rv.t[dv]) && void 0 !== Sv ? Sv : null
+           }) && null !== (MT = pT.r[fT]) && void 0 !== MT ? MT : null
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1088-L1090` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1090) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1090)

```diff
-           return Pv === mv.vc.Entity ? Pz(vv.promptEntity) : Pv === mv.vc.TameWith ? {
-             label: (0, dv.w)(vv.tables.nameOfId(vv.interactIcon))
-           } : null !== (zv = hz.get(Pv)) && void 0 !== zv ? zv : null
+           return cT === DT.Cc.Entity ? ck(TT.promptEntity) : cT === DT.Cc.TameWith ? {
+             label: (0, fT.r)(TT.tables.nameOfId(TT.interactIcon))
+           } : null !== (kT = lk.get(cT)) && void 0 !== kT ? kT : null
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1092)

```diff
-         return this.target = (0, kv.p)(this.target, {
+         return this.target = (0, iT.m)(this.target, {
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1103)

```diff
-         return null !== (vv = null === (zv = ez) || void 0 === zv ? void 0 : zv.target) && void 0 !== vv ? vv : vz
+         return null !== (TT = null === (kT = Kk) || void 0 === kT ? void 0 : kT.target) && void 0 !== TT ? TT : Tk
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1108` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1108) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1108)

```diff
-         const Pv = (0, wv.f)((Pv => {
+         const cT = (0, jT.h)((cT => {
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1111)

```diff
-           const Sv = (0, ev.q)((() => {
+           const MT = (0, KT.s)((() => {
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1127-L1128` → after: `L1127-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1127-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1128) · [Before (L1127-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1128)

```diff
-         health: dv.s,
-         aura: dv.l,
+         health: fT.o,
+         aura: fT.g,
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1132)

```diff
-           const zv = () => 0 !== (mv.t.playerFlags(vv.apiView, 0) & mv.Gd.Crouching);
+           const kT = () => 0 !== (DT.A.playerFlags(TT.apiView, 0) & DT.Od.Crouching);
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1137` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1137) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1137)

```diff
-               return (0, ev.o)((() => {
+               return (0, KT.q)((() => {
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1143` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1143) · [Before (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1143)

```diff
-         }(vv.api).current), !1, (vv => (0, ev.o)(vv))),
+         }(TT.api).current), !1, (TT => (0, KT.q)(TT))),
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1145-L1148` → after: `L1145-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1145-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1145-L1148) · [Before (L1145-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1145-L1148)

```diff
-           const zv = mv.t.playerFlags(vv.apiView, 0);
-           return (0, dv.q)(0 !== (zv & mv.Gd.CanFly), 0 !== (zv & mv.Gd.Flying))
-         }(vv.api)), (0, dv.q)(!1, !1), (vv => (0, ev.o)(vv))),
-         gliderBoostFuel: (0, wv.b)((vv => () => mv.t.gliderBoostFuel(vv.api.apiView, 0)), 0, (vv => (0, ev.o)(vv))),
+           const kT = DT.A.playerFlags(TT.apiView, 0);
+           return (0, fT.m)(0 !== (kT & DT.Od.CanFly), 0 !== (kT & DT.Od.Flying))
+         }(TT.api)), (0, fT.m)(!1, !1), (TT => (0, KT.q)(TT))),
+         gliderBoostFuel: (0, jT.b)((TT => () => DT.A.gliderBoostFuel(TT.api.apiView, 0)), 0, (TT => (0, KT.q)(TT))),
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1155)

```diff
-         shotDamageToShow: (0, dv.t)((vv => !0 === (0, Xv.e)(vv, "showDamageAmounts")))
+         shotDamageToShow: (0, fT.p)((TT => !0 === (0, qT.e)(TT, "showDamageAmounts")))
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1166` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1166) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1166)

```diff
-           const hv = (0, gv.h)(),
+           const lT = (0, OT.g)(),
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1168-L1169` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1168-L1169) · [Before (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1168-L1169)

```diff
-             ev = null === hv || void 0 === hv || null === (vv = hv.items.Vp()) || void 0 === vv || null === (zv = vv.attributes) || void 0 === zv || null === (Pv = zv.customAttributes) || void 0 === Pv ? void 0 : Pv.enchantments;
-           return pz = null !== hv && null !== ev && void 0 !== ev && ev.Momentum ? 0 !== (mv.t.playerFlags(hv.api.apiView, 0) & mv.Gd.Breaking) ? Math.max(0, mv.t.momentumFrac(hv.api.apiView, 0)) : Math.max(0, pz - (Sv - dz) / 1500) : 0, dz = Sv, pz
+             KT = null === lT || void 0 === lT || null === (TT = lT.items.ty()) || void 0 === TT || null === (kT = TT.attributes) || void 0 === kT || null === (cT = kT.customAttributes) || void 0 === cT ? void 0 : cT.enchantments;
+           return yk = null !== lT && null !== KT && void 0 !== KT && KT.Momentum ? 0 !== (DT.A.playerFlags(lT.api.apiView, 0) & DT.Od.Breaking) ? Math.max(0, DT.A.momentumFrac(lT.api.apiView, 0)) : Math.max(0, yk - (MT - fk) / 1500) : 0, fk = MT, yk
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1172)

```diff
-     var wz = Pv(39894);
+     var jk = cT(40210);
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1176` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1176) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1176)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.LobbyManage, vv)
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.LobbyManage, TT)
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1179-L1184` → after: `L1179-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1179-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1184) · [Before (L1179-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1184)

```diff
-     var sz = Pv(1226),
-       Cz = Pv(36031),
-       iz = Pv(8487),
-       cz = Pv(1610),
-       Gz = Pv(2304),
-       mz = Pv(4550);
+     var tk = cT(1244),
+       hk = cT(36310),
+       Nk = cT(8825),
+       Qk = cT(1654),
+       Sk = cT(2435),
+       Dk = cT(4773);
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1192)

```diff
-       "inGame" !== Zv.c.get("gameState") || (0, cz.p)() || Nv.j.zC("ctrlCrouchWithoutFullscreen")
+       "inGame" !== uT.e.get("gameState") || (0, Qk.u)() || xT.k.nt("ctrlCrouchWithoutFullscreen")
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1198)

```diff
-             Yz && (Yz = !1, Nv.j.zC("requestEmoteWheelHoldOpen"))
+             Pk && (Pk = !1, xT.k.nt("requestEmoteWheelHoldOpen"))
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1202)

```diff
-           Nv.j.zC("toggleFullCoordinateOverlay")
+           xT.k.nt("toggleFullCoordinateOverlay")
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1205)

```diff
-           (0, Cz.b)() || Nv.j.zC("YKeyPressed")
+           (0, hk.b)() || xT.k.nt("YKeyPressed")
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1208)

```diff
-           (0, Cz.b)() || Nv.j.zC("XKeyPressed")
+           (0, hk.b)() || xT.k.nt("XKeyPressed")
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1212-L1213` → after: `L1212-L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1212-L1213) · [Before (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1212-L1213)

```diff
-           Nv.j.zC("mouseState", {
-             Gp: sz.d.DownFirePrimary,
+           xT.k.nt("mouseState", {
+             Ky: tk.c.DownFirePrimary,
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1218-L1219` → after: `L1218-L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1218-L1219) · [Before (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1218-L1219)

```diff
-           Nv.j.zC("mouseState", {
-             Gp: sz.d.DownFireSecondary,
+           xT.k.nt("mouseState", {
+             Ky: tk.c.DownFireSecondary,
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1224-L1225` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1224-L1225) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1224-L1225)

```diff
-           Nv.j.zC("mouseState", {
-             Gp: sz.d.TouchDownLong,
+           xT.k.nt("mouseState", {
+             Ky: tk.c.TouchDownLong,
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1232` → after: `L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1232) · [Before (L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1232)

```diff
-           fz(!1), Yz ? (Yz = !1, (0, iz.c)() || Nv.j.zC("requestEmoteWheelHoldOpen")) : Nv.j.zC("requestEmoteWheelHoldRelease")
+           Fk(!1), Pk ? (Pk = !1, (0, Nk.e)() || xT.k.nt("requestEmoteWheelHoldOpen")) : xT.k.nt("requestEmoteWheelHoldRelease")
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1236-L1237` → after: `L1236-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1236-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1236-L1237) · [Before (L1236-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1236-L1237)

```diff
-           Nv.j.zC("mouseState", {
-             Gp: sz.d.UpFirePrimary,
+           xT.k.nt("mouseState", {
+             Ky: tk.c.UpFirePrimary,
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1242-L1243` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1242-L1243) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1242-L1243)

```diff
-           Nv.j.zC("mouseState", {
-             Gp: sz.d.UpFireSecondary,
+           xT.k.nt("mouseState", {
+             Ky: tk.c.UpFireSecondary,
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1248-L1249` → after: `L1248-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1248-L1249) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1248-L1249)

```diff
-           Nv.j.zC("mouseState", {
-             Gp: sz.d.UpFirePrimary,
+           xT.k.nt("mouseState", {
+             Ky: tk.c.UpFirePrimary,
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1258-L1259` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1258-L1259) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1258-L1259)

```diff
-         if ((0, Sv.e)()) return;
-         const zv = (0, mz.g)(vv) ? "primary-fire" : vv.action;
+         if ((0, MT.d)()) return;
+         const kT = (0, Dk.e)(TT) ? "primary-fire" : TT.action;
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1262)

```diff
-           if (0 === (vv.flags & Gz.c.Synthetic)) {
+           if (0 === (TT.flags & Sk.b.Synthetic)) {
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1269-L1274` → after: `L1269-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1269-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1269-L1274) · [Before (L1269-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1269-L1274)

```diff
-     var Vz = Pv(302),
-       Uz = Pv(73),
-       Rz = Pv(39),
-       xz = Pv(40019),
-       tz = Pv(1306),
-       qz = Pv(38515);
+     var Jk = cT(328),
+       Hk = cT(118),
+       ek = cT(47),
+       Gk = cT(40339),
+       Vk = cT(1327),
+       Ek = cT(38819);
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1279)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.CodeCollab, (0, Rv.k)(vv), (0, qz.g)(vv))
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.CodeCollab, (0, HT.i)(TT), (0, Ek.d)(TT))
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1282)

```diff
-     var Zz = Pv(38629);
+     var Xk = cT(38914);
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1288` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1288) · [Before (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1288)

```diff
-       return "inGame" === Zv.c.get("gameState") && !(0, Cz.b)()
+       return "inGame" === uT.e.get("gameState") && !(0, hk.b)()
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1292)

```diff
-           (0, cz.v)(vv, "inventory", (0, wz.n)())
+           (0, Qk.A)(TT, "inventory", (0, jk.q)())
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1295` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1295) · [Before (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1295)

```diff
-           Az && Mz() && (0, cz.u)(vv, Vz.o.SHOP, !Az.shopIsEmpty(Gv.c.get("shopInfo")))
+           dk && gk() && (0, Qk.z)(TT, Jk.o.SHOP, !dk.shopIsEmpty(ST.b.get("shopInfo")))
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1298-L1300` → after: `L1298-L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1298-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1298-L1300) · [Before (L1298-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1298-L1300)

```diff
-           Mz() && (0, cz.u)(vv, Vz.o.LOBBY_LEADERBOARD, (0, Zz.d)({
-             lobbyLeaderboardInfo: Gv.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: Gv.c.get("lobbyManage")
+           gk() && (0, Qk.z)(TT, Jk.o.LOBBY_LEADERBOARD, (0, Xk.b)({
+             lobbyLeaderboardInfo: ST.b.get("lobbyLeaderboardInfo"),
+             lobbyManage: ST.b.get("lobbyManage")
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1306)

```diff
-           Pv ? (0, cz.w)(vv, !0, Pv) : (0, cz.v)(vv, "retentionFeatures", !(!Gv.c.get("_tasks") && !Gv.c.get("_availableLeaderboards")))
+           cT ? (0, Qk.D)(TT, !0, cT) : (0, Qk.A)(TT, "retentionFeatures", !(!ST.b.get("_tasks") && !ST.b.get("_availableLeaderboards")))
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1309)

```diff
-           (0, cz.v)(vv, "inviteLink", Uz.featureFlags.canUseInviteLinks)
+           (0, Qk.A)(TT, "inviteLink", Hk.featureFlags.canUseInviteLinks)
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1314)

```diff
-             const Pv = (0, gv.h)(),
+             const cT = (0, OT.g)(),
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1316-L1319` → after: `L1316-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1316-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1316-L1319) · [Before (L1316-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1316-L1319)

```diff
-               Sv = hv ? hv.yG(hv.localId) : null,
-               ev = null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.map((vv => Math.floor(vv)))) && void 0 !== zv ? zv : null;
-             (0, cz.w)(vv, null !== ev && (0, qz.c)((0, tz.c)()), (() => {
-               Nv.j.zC("EditLobbyCode", ev)
+               MT = lT ? lT.kN(lT.localId) : null,
+               KT = null !== (kT = null === MT || void 0 === MT ? void 0 : MT.map((TT => Math.floor(TT)))) && void 0 !== kT ? kT : null;
+             (0, Qk.D)(TT, null !== KT && (0, Ek.c)((0, Vk.b)()), (() => {
+               xT.k.nt("EditLobbyCode", KT)
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1324)

```diff
-           Nv.j.zC("showUi", !1)
+           xT.k.nt("showUi", !1)
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1329)

```diff
-           Nv.j.zC("showUi", !0)
+           xT.k.nt("showUi", !0)
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1334)

```diff
-       Lz || (Lz = !0, Pv.e(152).then((() => Pv(41931))).then((vv => {
+       Lk || (Lk = !0, cT.e(152).then((() => cT(42149))).then((TT => {
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1338-L1339` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1338-L1339) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1338-L1339)

```diff
-       })), (0, xz.x)((vv => {
-         vv || !(0, xz.i)() || (0, Uz.isMobile)() || !Rz.h.getItem("disableFullscreen") || (0, cz.o)() || Zv.c.set({
+       })), (0, Gk.w)((TT => {
+         TT || !(0, Gk.k)() || (0, Hk.isMobile)() || !ek.e.getItem("disableFullscreen") || (0, Qk.s)() || uT.e.set({
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1349` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1349) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1349)

```diff
-         (0, Sv.e)() || (Pv ? null === (ev = yz[zv]) || void 0 === ev || ev.call(yz, function(vv) {
+         (0, MT.d)() || (cT ? null === (KT = Uk[kT]) || void 0 === KT || KT.call(Uk, function(TT) {
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1364-L1366` → after: `L1364-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1364-L1366) · [Before (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1364-L1366)

```diff
-     var Ez = Pv(38489),
-       oz = Pv(38505),
-       bz = Pv(38496);
+     var Wk = cT(38796),
+       nk = cT(38808),
+       pk = cT(38799);
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1370` → after: `L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1370) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1370)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.CompleteTask, (0, Rv.m)(vv))
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.CompleteTask, (0, HT.k)(TT))
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1378-L1380` → after: `L1378-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1378-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1378-L1380) · [Before (L1378-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1378-L1380)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.GeneralCookieSet, (0, Rv.q)({
-           Pl: Pv,
-           hl: hv
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.GeneralCookieSet, (0, HT.p)({
+           cI: cT,
+           lI: lT
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1387)

```diff
-           Nl: hv
+           xI: lT
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1389-L1392` → after: `L1389-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1389-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1392) · [Before (L1389-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1392)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.UiRequestResp, (0, Rv.K)({
-           Al: Pv,
-           Ll: hv,
-           Hl: 5
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.UiRequestResp, (0, HT.S)({
+           dI: cT,
+           LI: lT,
+           RI: 5
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1399` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1399) · [Before (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1399)

```diff
-           Nl: hv
+           xI: lT
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1401` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1401) · [Before (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1401)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.UiRequestResponded, (0, Rv.J)({
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.UiRequestResponded, (0, HT.Q)({
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1403` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1403) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1403)

```diff
-           Nl: hv
+           xI: lT
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1413)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.LeaderboardRequest, {
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.LeaderboardRequest, {
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1421)

```diff
-     const Xz = cv.f.pG / 2,
+     const sk = QT.f.Ow / 2,
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1432)

```diff
-         const vv = (0, gv.h)();
+         const TT = (0, OT.g)();
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1448)

```diff
-           const Wv = Pv.yN(ev, dv, Tv);
+           const CT = cT.Rx(KT, fT, AT);
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1454-L1455` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1454-L1455) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1454-L1455)

```diff
-         const vv = (0, gv.h)();
-         return null !== vv && 0 !== (mv.t.playerFlags(vv.api.apiView, 0) & mv.Gd.DropAhead)
+         const TT = (0, OT.g)();
+         return null !== TT && 0 !== (DT.A.playerFlags(TT.api.apiView, 0) & DT.Od.DropAhead)
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1458-L1461` → after: `L1458-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1458-L1461) · [Before (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1458-L1461)

```diff
-     var hP = Pv(36456),
-       SP = Pv(38613),
-       eP = Pv(1336),
-       gP = Pv(39973);
+     var Mc = cT(36769),
+       Kc = cT(38888),
+       Oc = cT(1363),
+       yc = cT(40290);
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1483)

```diff
-       const gv = () => (Pv = (0, kv.p)(Pv, vv()), Pv);
+       const OT = () => (cT = (0, iT.m)(cT, TT()), cT);
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1487)

```diff
-           const zv = (0, av.b)((zv => {
+           const kT = (0, vT.e)((kT => {
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1491-L1493` → after: `L1491-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1491-L1493) · [Before (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1491-L1493)

```diff
-           let Pv = (0, wv.c)();
-           const pv = (0, ev.q)((() => {
-             const zv = (0, wv.c)();
+           let cT = (0, jT.d)();
+           const yT = (0, KT.s)((() => {
+             const kT = (0, jT.d)();
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1504)

```diff
-           const vv = av.e.ids(),
+           const TT = vT.h.ids(),
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1509-L1511` → after: `L1509-L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1509-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1511) · [Before (L1509-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1511)

```diff
-               name: null !== (Pv = av.e.getName(ev)) && void 0 !== Pv ? Pv : null,
-               ranks: null !== (hv = av.e.getSetting(ev, "ranks")) && void 0 !== hv ? hv : lP,
-               cosmetics: null !== (Sv = (0, av.i)(ev)) && void 0 !== Sv ? Sv : null
+               name: null !== (cT = vT.h.getName(KT)) && void 0 !== cT ? cT : null,
+               ranks: null !== (lT = vT.h.getSetting(KT, "ranks")) && void 0 !== lT ? lT : Ac,
+               cosmetics: null !== (MT = (0, vT.j)(KT)) && void 0 !== MT ? MT : null
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1517)

```diff
-             localId: (0, wv.c)()
+             localId: (0, jT.d)()
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1525)

```diff
-           for (const Sv of av.e.ids()) {
+           for (const MT of vT.h.ids()) {
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1528-L1530` → after: `L1528-L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1528-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1528-L1530) · [Before (L1528-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1528-L1530)

```diff
-               colour: null !== (zv = av.e.getSetting(Sv, "colorInLobbyLeaderboard")) && void 0 !== zv ? zv : null,
-               values: null !== (Pv = av.e.getSetting(Sv, "lobbyLeaderboardValues")) && void 0 !== Pv ? Pv : null,
-               tags: null !== (hv = av.e.getSetting(Sv, "lobbyLeaderboardTags")) && void 0 !== hv ? hv : null
+               colour: null !== (kT = vT.h.getSetting(MT, "colorInLobbyLeaderboard")) && void 0 !== kT ? kT : null,
+               values: null !== (cT = vT.h.getSetting(MT, "lobbyLeaderboardValues")) && void 0 !== cT ? cT : null,
+               tags: null !== (lT = vT.h.getSetting(MT, "lobbyLeaderboardTags")) && void 0 !== lT ? lT : null
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1548)

```diff
-           watch: vv => (0, av.b)((zv => {
+           watch: TT => (0, vT.e)((kT => {
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1550` → after: `L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1550) · [Before (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1550)

```diff
-             const Pv = (0, wv.c)();
+             const cT = (0, jT.d)();
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1553-L1555` → after: `L1553-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1553-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1553-L1555) · [Before (L1553-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1553-L1555)

```diff
-                 cP: zv,
-                 GP: hv,
-                 mP: Sv
+                 Nc: kT,
+                 Qc: lT,
+                 Sc: MT
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1559-L1560` → after: `L1559-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1559-L1560) · [Before (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1559-L1560)

```diff
-                 GP: hv,
-                 mP: Sv
+                 Qc: lT,
+                 Sc: MT
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1566-L1569` → after: `L1566-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1566-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1566-L1569) · [Before (L1566-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1566-L1569)

```diff
-     var aP = Pv(2702),
-       sP = Pv(1692),
-       CP = Pv(650),
-       iP = Pv(40021);
+     var tc = cT(2873),
+       hc = cT(1741),
+       Nc = cT(651),
+       Qc = cT(40348);
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1575)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.ShopMenuChanged, (0, Rv.H)(vv))
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.ShopMenuChanged, (0, HT.K)(TT))
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1584` → after: `L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1584) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1584)

```diff
-         null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.ItemBought, {
+         null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.ItemBought, {
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1587)

```diff
-           shopVersion: Gv.c.get("_shopVersion"),
+           shopVersion: ST.b.get("_shopVersion"),
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1593-L1594` → after: `L1593-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1593-L1594) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1593-L1594)

```diff
-     var fP = Pv(4561);
-     const FP = Gz.u.LookFrozen | Gz.u.ClicksSuppressed;
+     var rc = cT(4787);
+     const Pc = Sk.s.LookFrozen | Sk.s.ClicksSuppressed;
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1598-L1601` → after: `L1598-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1598-L1601) · [Before (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1598-L1601)

```diff
-       null !== (Pv = (0, gv.h)()) && void 0 !== Pv && Pv.send(vv, zv) || console.warn(`[bloxd-wasm-client] message ${vv} not sent: no live game or the core's command ring is full`)
-     }(0, sv.m)(Uv.vb, (vv => {
-       const zv = (0, xv.f)(Uv.vb, vv);
-       void 0 !== zv && Nv.j.zC("setDiscordReportKey", zv)
+       null !== (cT = (0, OT.g)()) && void 0 !== cT && cT.send(TT, kT) || console.warn(`[bloxd-wasm-client] message ${TT} not sent: no live game or the core's command ring is full`)
+     }(0, tT.m)(oT.tb, (TT => {
+       const kT = (0, eT.e)(oT.tb, TT);
+       void 0 !== kT && xT.k.nt("setDiscordReportKey", kT)
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1605-L1606` → after: `L1605-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1605-L1606) · [Before (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1605-L1606)

```diff
-         YP(Rv.d.IgnoreUser, (0, Rv.r)({
-           Zl: vv
+         wc(HT.b.IgnoreUser, (0, HT.q)({
+           XI: TT
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1613` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1613) · [Before (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1613)

```diff
-           ug: hv,
+           dO: lT,
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1616-L1620` → after: `L1616-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1616-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1616-L1620) · [Before (L1616-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1616-L1620)

```diff
-         YP(Rv.d.UserReport, (0, Rv.V)({
-           kg: zv,
-           Xg: Pv,
-           ug: hv,
-           vp: Sv
+         wc(HT.b.UserReport, (0, HT.$)({
+           uO: kT,
+           XO: cT,
+           dO: lT,
+           LO: MT
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1626)

```diff
-           ug: Pv,
+           dO: cT,
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1629-L1633` → after: `L1629-L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1629-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1629-L1633) · [Before (L1629-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1629-L1633)

```diff
-         YP(Rv.d.UserReport, (0, Rv.V)({
-           kg: "",
-           Xg: zv,
-           ug: Pv,
-           vp: hv
+         wc(HT.b.UserReport, (0, HT.$)({
+           uO: "",
+           XO: kT,
+           dO: cT,
+           LO: lT
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1637)

```diff
-         YP(Rv.d.ReqDiscordReportKey, (0, Rv.E)(vv))
+         wc(HT.b.ReqDiscordReportKey, (0, HT.F)(TT))
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1642)

```diff
-           ug: Pv,
+           dO: cT,
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1645-L1650` → after: `L1645-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1645-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1645-L1650) · [Before (L1645-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1645-L1650)

```diff
-         "customGame" === zv ? YP(Rv.d.CustomGameReport, (0, Rv.o)({
-           ug: Pv,
-           vp: hv
-         })) : YP(Rv.d.LobbyReport, (0, Rv.u)({
-           ug: Pv,
-           vp: hv
+         "customGame" === kT ? wc(HT.b.CustomGameReport, (0, HT.n)({
+           dO: cT,
+           LO: lT
+         })) : wc(HT.b.LobbyReport, (0, HT.t)({
+           dO: cT,
+           LO: lT
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1654)

```diff
-         YP(Rv.d.UpdateMyCosmetic, (0, Rv.T)(vv))
+         wc(HT.b.UpdateMyCosmetic, (0, HT.Y)(TT))
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1657)

```diff
-         !vv || jz ? (0, fP.g)(FP, vv ? FP : 0) : Nv.j.zC("requestEmoteWheelHoldRelease")
+         !TT || ak ? (0, rc.h)(Pc, TT ? Pc : 0) : xT.k.nt("requestEmoteWheelHoldRelease")
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1660-L1662` → after: `L1660-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1660-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1660-L1662) · [Before (L1660-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1660-L1662)

```diff
-     var OP = Pv(40025),
-       DP = Pv(9101),
-       KP = Pv(39074);
+     var bc = cT(40356),
+       zc = cT(9447),
+       Jc = cT(39388);
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1672` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1672) · [Before (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1672)

```diff
-           const hv = (0, gv.h)();
+           const lT = (0, OT.g)();
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1680` → after: `L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1680) · [Before (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1680)

```diff
-           return (0, KP.g)(((vv, zv, Pv) => (dv = ev.getBlockId(vv, zv, Pv), 0 !== dv)), Sv.cameraPosition, (0, KP.i)((vv => mv.t.viewProj(pv.apiView, 0, vv)), zv, Pv, VP), KP.c, UP, RP) ? {
+           return (0, Jc.f)(((TT, kT, cT) => (fT = KT.getBlockId(TT, kT, cT), 0 !== fT)), MT.cameraPosition, (0, Jc.h)((TT => DT.A.viewProj(yT.apiView, 0, TT)), kT, cT, oc), Jc.b, Hc, ec) ? {
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1683)

```diff
-             name: (0, DP.d)(dv)
+             name: (0, zc.g)(fT)
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1690)

```diff
-           null === (zv = (0, gv.h)()) || void 0 === zv || zv.setBlockHighlight(vv)
+           null === (kT = (0, OT.g)()) || void 0 === kT || kT.setBlockHighlight(TT)
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1693-L1700` → after: `L1693-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1693-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1693-L1700) · [Before (L1693-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1693-L1700)

```diff
-     var qP = Pv(1889),
-       IP = Pv(40029),
-       QP = Pv(40038),
-       ZP = Pv(4247),
-       AP = Pv(4217),
-       LP = Pv(40040),
-       HP = Pv(3037),
-       MP = Pv(3039);
+     var Ec = cT(1964),
+       Zc = cT(40365),
+       uc = cT(40369),
+       Xc = cT(4472),
+       dc = cT(4448),
+       Lc = cT(40375),
+       Rc = cT(3214),
+       gc = cT(3222);
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1705-L1706)

```diff
-       const zv = vv.startsWith(MP.j),
-         [Pv, hv = Pv, Sv = Pv] = (zv ? vv.slice(MP.j.length) : vv).split(MP.f);
+       const kT = TT.startsWith(gc.k),
+         [cT, lT = cT, MT = cT] = (kT ? TT.slice(gc.k.length) : TT).split(gc.j);
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1716)

```diff
-       const zv = null === yP ? void 0 : (0, HP.c)(vv),
+       const kT = null === Uc ? void 0 : (0, Rc.e)(TT),
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1720-L1724` → after: `L1720-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1720-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1720-L1724) · [Before (L1720-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1720-L1724)

```diff
-     var oP = Pv(3033),
-       bP = Pv(4206),
-       rP = Pv(4242),
-       kP = Pv(40042),
-       XP = Pv(40047);
+     var nc = cT(3210),
+       pc = cT(4442),
+       ic = cT(4465),
+       qc = cT(40380),
+       sc = cT(40389);
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1734-L1736` → after: `L1734-L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1734-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1734-L1736) · [Before (L1734-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1734-L1736)

```diff
-       return eh || (eh = !0, (0, rP.g)().then((vv => {
-         vv && (0, qP.e)()
-       }))), Ph ??= Promise.all([(0, oP.i)(), (BP ??= Pv.e(1).then((() => Pv(41950))).then((vv => {
+       return Ol || (Ol = !0, (0, ic.l)().then((TT => {
+         TT && (0, Ec.b)()
+       }))), ll ??= Promise.all([(0, nc.f)(), (Yc ??= cT.e(1).then((() => cT(42158))).then((TT => {
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1743-L1744` → after: `L1743-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1743-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1743-L1744) · [Before (L1743-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1743-L1744)

```diff
-           codes: (0, MP.t)(zv, hv + 1),
-           pool: Pv.split(MP.n).map(JP)
+           codes: (0, gc.D)(kT, lT + 1),
+           pool: cT.split(gc.s).map(Bc)
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1748)

```diff
-       })), BP), (0, XP.e)(), Pv.e(189).then((() => Pv(9019)))]).then((vv => {
+       })), Yc), (0, sc.f)(), cT.e(189).then((() => cT(9384)))]).then((TT => {
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1750)

```diff
-         zv.followBundledTextures(), vh = zv, zh = Pv, (0, qP.e)()
+         kT.followBundledTextures(), kl = kT, cl = cT, (0, Ec.b)()
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1758)

```diff
-       return null !== (zv = null === (Pv = (0, kP.d)()) || void 0 === Pv ? void 0 : Pv.textureUrl(vv)) && void 0 !== zv ? zv : vh.itemSpriteUrl(vv)
+       return null !== (kT = null === (cT = (0, qc.g)()) || void 0 === cT ? void 0 : cT.textureUrl(TT)) && void 0 !== kT ? kT : kl.itemSpriteUrl(TT)
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1763` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1763) · [Before (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1763)

```diff
-       return null !== (zv = null === (Pv = (0, kP.d)()) || void 0 === Pv ? void 0 : Pv.textureUrl(vv)) && void 0 !== zv ? zv : vh.blockTextureUrl(vv)
+       return null !== (kT = null === (cT = (0, qc.g)()) || void 0 === cT ? void 0 : cT.textureUrl(TT)) && void 0 !== kT ? kT : kl.blockTextureUrl(TT)
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1768)

```diff
-       return null !== (zv = (0, oP.e)(vv)) && void 0 !== zv ? zv : vv
+       return null !== (kT = (0, nc.d)(TT)) && void 0 !== kT ? kT : TT
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1773` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1773) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1773)

```diff
-       return null !== (Pv = null !== (hv = null !== (Sv = dh(vv)) && void 0 !== Sv ? Sv : null === zv || void 0 === zv ? void 0 : zv.rotated[vv]) && void 0 !== hv ? hv : null === zv || void 0 === zv ? void 0 : zv.animated[vv]) && void 0 !== Pv ? Pv : vh.notFoundUrl()
+       return null !== (cT = null !== (lT = null !== (MT = xl(TT)) && void 0 !== MT ? MT : null === kT || void 0 === kT ? void 0 : kT.rotated[TT]) && void 0 !== lT ? lT : null === kT || void 0 === kT ? void 0 : kT.animated[TT]) && void 0 !== cT ? cT : kl.notFoundUrl()
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1777)

```diff
-       return void 0 !== (0, HP.c)(vv) ? vv : /^[1-9][0-9]*$/.test(vv) ? (0, HP.e)(Number(vv)) : void 0
+       return void 0 !== (0, Rc.e)(TT) ? TT : /^[1-9][0-9]*$/.test(TT) ? (0, Rc.i)(Number(TT)) : void 0
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1784-L1785` → after: `L1784-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1784-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1784-L1785) · [Before (L1784-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1784-L1785)

```diff
-         const zv = (0, oP.e)(vv.slice(5));
-         return null !== (Pv = void 0 === zv ? null : ph(zv)) && void 0 !== Pv ? Pv : vh.notFoundUrl()
+         const kT = (0, nc.d)(TT.slice(5));
+         return null !== (cT = void 0 === kT ? null : fl(kT)) && void 0 !== cT ? cT : kl.notFoundUrl()
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1787)

```diff
-       return null !== (zv = vh.particleUrl(vv)) && void 0 !== zv ? zv : vh.notFoundUrl()
+       return null !== (kT = kl.particleUrl(TT)) && void 0 !== kT ? kT : kl.notFoundUrl()
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1791)

```diff
-       return "StairsBlock" === vv ? vv : zv ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === TT ? TT : kT ? "SlabBlock" : "CubeBlock"
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1802-L1803` → after: `L1802-L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1802-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1802-L1803) · [Before (L1802-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1802-L1803)

```diff
-           const gv = null !== (zv = Th(hv)) && void 0 !== zv ? zv : hv,
-             pv = (0, rP.b)(gv, Sv, ev);
+           const OT = null !== (kT = Cl(lT)) && void 0 !== kT ? kT : lT,
+             yT = (0, ic.d)(OT, MT, KT);
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1806)

```diff
-             Nv = (0, HP.c)(gv),
+             xT = (0, Rc.e)(OT),
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1810)

```diff
-             Wv = Tv ? await (hh ??= Pv.e(201).then((() => Pv(33871))).then((vv => (Sh && (Sh = !1, (0, qP.e)()), {
+             CT = AT ? await (Ml ??= cT.e(201).then((() => cT(34029))).then((TT => (Kl && (Kl = !1, (0, Ec.b)()), {
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1821-L1823` → after: `L1821-L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1821-L1823) · [Before (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1821-L1823)

```diff
-             av = (0, kP.c)(),
-             sv = 0 === av ? gv : `${gv}#${av}`;
-           return (await (0, bP.b)()).drawBlockIconUrl(sv, Sv, ev, (() => wv))
+             vT = (0, qc.d)(),
+             tT = 0 === vT ? OT : `${OT}#${vT}`;
+           return (await (0, pc.e)()).drawBlockIconUrl(tT, MT, KT, (() => jT))
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1830)

```diff
-           if ((0, AP.m)(vv)) return {
+           if ((0, dc.k)(TT)) return {
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1832)

```diff
-             url: null !== (Pv = null !== (Sv = null === (ev = (0, kP.d)()) || void 0 === ev ? void 0 : ev.textureUrl(vv)) && void 0 !== Sv ? Sv : vh.ingameIconUrl(vv)) && void 0 !== Pv ? Pv : vh.notFoundUrl()
+             url: null !== (cT = null !== (MT = null === (KT = (0, qc.g)()) || void 0 === KT ? void 0 : KT.textureUrl(TT)) && void 0 !== MT ? MT : kl.ingameIconUrl(TT)) && void 0 !== cT ? cT : kl.notFoundUrl()
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1838-L1840` → after: `L1838-L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1838-L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1838-L1840) · [Before (L1838-L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1838-L1840)

```diff
-           if (0 === (0, HP.f)()) return (0, LP.e)(), hv.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(vv);
-           const gv = null !== (zv = Th(vv)) && void 0 !== zv ? zv : vv,
-             pv = (0, HP.c)(gv),
+           if (0 === (0, Rc.k)()) return (0, Lc.c)(), lT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
+           const OT = null !== (kT = Cl(TT)) && void 0 !== kT ? kT : TT,
+             yT = (0, Rc.e)(OT),
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1847)

```diff
-             return null !== (zv = ph(Nh(vv))) && void 0 !== zv ? zv : vh.notFoundUrl()
+             return null !== (kT = fl(Il(TT))) && void 0 !== kT ? kT : kl.notFoundUrl()
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1849-L1850` → after: `L1849-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1849-L1850) · [Before (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1849-L1850)

```diff
-           if ((0, rP.c)(gv) && ! function(vv) {
-               const zv = (0, kP.d)();
+           if ((0, ic.h)(OT) && ! function(TT) {
+               const kT = (0, qc.g)();
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1862` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1862) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1862)

```diff
-             const zv = null !== (lv = (0, ZP.g)(vv)) && void 0 !== lv ? lv : (0, ZP.g)(gv);
+             const kT = null !== (IT = (0, Xc.f)(TT)) && void 0 !== IT ? IT : (0, Xc.f)(OT);
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1875` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1875) · [Before (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1875)

```diff
-           return void 0 !== Th(vv) || (0, AP.m)(vv) || vv.startsWith(AP.e)
+           return void 0 !== Cl(TT) || (0, dc.k)(TT) || TT.startsWith(dc.e)
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1881-L1882` → after: `L1881-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1881-L1882) · [Before (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1881-L1882)

```diff
-     var Ch = Pv(609),
-       ih = Pv(39079);
+     var Nl = cT(606),
+       Ql = cT(39393);
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1894-L1895` → after: `L1894-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1894-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1894-L1895) · [Before (L1894-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1894-L1895)

```diff
-           const vv = zv.yG(zv.localId);
-           return null !== vv && void 0 !== vv && vv.every(Number.isFinite) ? vv : null
+           const TT = kT.kN(kT.localId);
+           return null !== TT && void 0 !== TT && TT.every(Number.isFinite) ? TT : null
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1897)

```diff
-         chunkBlocks: vv => Pv.isLoaded(vv[0], vv[1], vv[2]) ? (vv, zv, hv) => Pv.yN(vv, zv, hv) : null,
+         chunkBlocks: TT => cT.isLoaded(TT[0], TT[1], TT[2]) ? (TT, kT, lT) => cT.Rx(TT, kT, lT) : null,
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913-L1915` → after: `L1913-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1913-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1913-L1915) · [Before (L1913-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1913-L1915)

```diff
-             if (null === ev || zv.isLocal(gv) || pv >>> mv.b !== mv.s.Lifeform) continue;
-             const dv = zv.yG(gv),
-               Nv = Ch.i[pv & mv.c];
+             if (null === KT || kT.isLocal(OT) || yT >>> DT.e !== DT.w.Lifeform) continue;
+             const fT = kT.kN(OT),
+               xT = Nl.i[yT & DT.i];
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1918)

```diff
-               name: null !== (hv = vv.clientApi.getEntityName(ev)) && void 0 !== hv ? hv : null,
+               name: null !== (lT = TT.clientApi.getEntityName(KT)) && void 0 !== lT ? lT : null,
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1926)

```diff
-           for (let Pv = 0; Pv < zv.idStr.length; Pv++) null !== zv.idStr[Pv] && zv.kinds[Pv] >>> mv.b === mv.s.Item && vv++;
+           for (let cT = 0; cT < kT.idStr.length; cT++) null !== kT.idStr[cT] && kT.kinds[cT] >>> DT.e === DT.w.Item && TT++;
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1932-L1933` → after: `L1932-L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933)

```diff
-         worldCodeAiChunk: vv => Promise.resolve((0, ih.e)(ch((0, gv.h)()), vv)),
-         worldCodeAiGameState: () => Promise.resolve((0, ih.g)(ch((0, gv.h)())))
+         worldCodeAiChunk: TT => Promise.resolve((0, Ql.d)(Sl((0, OT.g)()), TT)),
+         worldCodeAiGameState: () => Promise.resolve((0, Ql.g)(Sl((0, OT.g)())))
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1942)

```diff
-             return null !== (zv = null === (Pv = vv.runtime()) || void 0 === Pv ? void 0 : Pv.currentViewer) && void 0 !== zv ? zv : null
+             return null !== (kT = null === (cT = TT.runtime()) || void 0 === cT ? void 0 : cT.currentViewer) && void 0 !== kT ? kT : null
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1964)

```diff
-             zv && Pv && zv.seek(Math.max(0, Math.min(Pv.totalTicks - 1, Pv.MT + vv * Tv.Rd)))
+             kT && cT && kT.seek(Math.max(0, Math.min(cT.totalTicks - 1, cT.UA + TT * AT.sd)))
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1970-L1971` → after: `L1970-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1970-L1971) · [Before (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1970-L1971)

```diff
-                 Pv = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null;
-               return null === zv || null === Pv || Pv.state === Tv.Cd.None ? (pv = null, null) : (pv = (0, kv.p)(pv, {
+                 cT = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null;
+               return null === kT || null === cT || cT.state === AT.kd.None ? (yT = null, null) : (yT = (0, iT.m)(yT, {
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1973` → after: `L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1973) · [Before (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1973)

```diff
-                 MT: Pv.MT,
+                 UA: cT.UA,
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1975-L1976` → after: `L1975-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1975-L1976) · [Before (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1975-L1976)

```diff
-                 ZD: Tv.Rd,
-                 playing: Pv.state === Tv.Cd.Playing,
+                 xJ: AT.sd,
+                 playing: cT.state === AT.kd.Playing,
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1985-L1986` → after: `L1985-L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1985-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1985-L1986) · [Before (L1985-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1985-L1986)

```diff
-                 Pv = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null;
-               return null === zv || null === Pv || Pv.state === Tv.Cd.None ? (dv = null, null) : (dv = (0, kv.p)(dv, {
+                 cT = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null;
+               return null === kT || null === cT || cT.state === AT.kd.None ? (fT = null, null) : (fT = (0, iT.m)(fT, {
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1996)

```diff
-               return null !== (zv = null === (Pv = vv.runtime()) || void 0 === Pv ? void 0 : Pv.recorder.current) && void 0 !== zv ? zv : gP.c.states.replayRecorder.current()
+               return null !== (kT = null === (cT = TT.runtime()) || void 0 === cT ? void 0 : cT.recorder.current) && void 0 !== kT ? kT : yc.b.states.replayRecorder.current()
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1999-L2001` → after: `L1999-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1999-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L1999-L2001) · [Before (L1999-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L1999-L2001)

```diff
-               current: SP.c,
-               watch: vv => (0, Nv.l)("replayViewer|videoExportChanged", (() => {
-                 vv((0, SP.c)())
+               current: Kc.e,
+               watch: TT => (0, xT.m)("replayViewer|videoExportChanged", (() => {
+                 TT((0, Kc.e)())
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2014)

```diff
-             !0 === (null === (hv = gv()) || void 0 === hv ? void 0 : hv.isOpen) && Promise.all([Pv.e(95), Pv.e(64)]).then((() => Pv(41937))).then((Pv => {
+             !0 === (null === (lT = OT()) || void 0 === lT ? void 0 : lT.isOpen) && Promise.all([cT.e(95), cT.e(64)]).then((() => cT(42154))).then((cT => {
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2022)

```diff
-                   return null !== (zv = null === (Pv = vv.canvas) || void 0 === Pv ? void 0 : Pv.call(vv)) && void 0 !== zv ? zv : null
+                   return null !== (kT = null === (cT = TT.canvas) || void 0 === cT ? void 0 : cT.call(TT)) && void 0 !== kT ? kT : null
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2038` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2038) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2038)

```diff
-               if ((0, SP.c)()) return;
+               if ((0, Kc.e)()) return;
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2057` → after: `L2057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2057) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2057)

```diff
-               (0, SP.c)() || (vv ? null === (zv = gv()) || void 0 === zv || zv.play() : null === (Pv = gv()) || void 0 === Pv || Pv.pause())
+               (0, Kc.e)() || (TT ? null === (kT = OT()) || void 0 === kT || kT.play() : null === (cT = OT()) || void 0 === cT || cT.pause())
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2062)

```diff
-                 MT: Pv,
+                 UA: cT,
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2102` → after: `L2102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2102) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2102)

```diff
-               return !(0, SP.c)() && (null !== (zv = null === (Pv = gv()) || void 0 === Pv ? void 0 : Pv.crop(hv, Sv)) && void 0 !== zv && zv)
+               return !(0, Kc.e)() && (null !== (kT = null === (cT = OT()) || void 0 === cT ? void 0 : cT.crop(lT, MT)) && void 0 !== kT && kT)
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2107)

```diff
-                 Pv.e(129).then((() => Pv(38715))).then((zv => {
+                 cT.e(129).then((() => cT(39e3))).then((kT => {
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2144)

```diff
-                 aP: Sv,
+                 jc: MT,
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2146)

```diff
-                 sP: gv
+                 vc: OT
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2166)

```diff
-                 Vp: Sv
+                 ty: MT
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2174)

```diff
-               hv = null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.view) && void 0 !== zv ? zv : null;
+               lT = null !== (kT = null === cT || void 0 === cT ? void 0 : cT.view) && void 0 !== kT ? kT : null;
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2177` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2177) · [Before (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2177)

```diff
-             })(vv) : dP.has(vv) ? cv.replayAction(vv) : "replayPlayPause" === vv ? Pv && hv && hv.state !== Tv.Cd.None && cv.setReplayPlaying(hv.state !== Tv.Cd.Playing) : "replayChangeCameraMode" === vv ? null === Pv || void 0 === Pv || Pv.cycleCameraMode() : "replayExit" === vv … [truncated]
+             })(TT) : xc.has(TT) ? QT.replayAction(TT) : "replayPlayPause" === TT ? cT && lT && lT.state !== AT.kd.None && QT.setReplayPlaying(lT.state !== AT.kd.Playing) : "replayChangeCameraMode" === TT ? null === cT || void 0 === cT || cT.cycleCameraMode() : "replayExit" === TT … [truncated]
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2187)

```diff
-               return !0 !== (null === (zv = gv()) || void 0 === zv ? void 0 : zv.isOpen) ? null : null !== (Pv = null === (hv = vv.cameraView) || void 0 === hv ? void 0 : hv.call(vv)) && void 0 !== Pv ? Pv : null
+               return !0 !== (null === (kT = OT()) || void 0 === kT ? void 0 : kT.isOpen) ? null : null !== (cT = null === (lT = TT.cameraView) || void 0 === lT ? void 0 : lT.call(TT)) && void 0 !== cT ? cT : null
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2198)

```diff
-               Pv !== mv && (mv = Pv, Nv.j.zC("connectedGameChanged")), zv.fire()
+               cT !== DT && (DT = cT, xT.k.nt("connectedGameChanged")), kT.fire()
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2208` → after: `L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2208) · [Before (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2208)

```diff
-               }(0, SP.c)() || ("replayViewerOpen" !== vv ? vv.startsWith("replay") && ((0, Cz.b)() || !0 === (null === (zv = gv()) || void 0 === zv ? void 0 : zv.inPlayback)) && Gv(vv) : Cv("toggle"))
+               }(0, Kc.e)() || ("replayViewerOpen" !== TT ? TT.startsWith("replay") && ((0, hk.b)() || !0 === (null === (kT = OT()) || void 0 === kT ? void 0 : kT.inPlayback)) && ST(TT) : hT("toggle"))
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2213` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2213) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2213)

```diff
-         runtime: Sv.o,
+         runtime: MT.h,
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2216)

```diff
-           const zv = null === (vv = (0, gv.h)()) || void 0 === vv ? void 0 : vv.renderFrame;
+           const kT = null === (TT = (0, OT.g)()) || void 0 === TT ? void 0 : TT.renderFrame;
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2226` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2226) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2226)

```diff
-           return null !== (vv = null === (zv = (Pv = (0, ev.B)()).canvas) || void 0 === zv ? void 0 : zv.call(Pv)) && void 0 !== vv ? vv : null
+           return null !== (TT = null === (kT = (cT = (0, KT.G)()).canvas) || void 0 === kT ? void 0 : kT.call(cT)) && void 0 !== TT ? TT : null
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2228)

```diff
-         freecam: Sv.k
+         freecam: MT.g
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2233` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2233) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2233)

```diff
-           ...wz.l,
+           ...jk.n,
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2241-L2243` → after: `L2241-L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2241-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2241-L2243) · [Before (L2241-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2241-L2243)

```diff
-           ...wz.h,
-           ...Ov.e,
-           ...OP.g,
+           ...jk.i,
+           ...mT.c,
+           ...bc.i,
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2246` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2246) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2246)

```diff
-           ...nv.h
+           ...wT.g
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2255)

```diff
-           ...nv.f,
+           ...wT.e,
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2270` → after: `L2270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2270) · [Before (L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2270)

```diff
-           ...OP.k,
+           ...bc.j,
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2280-L2282` → after: `L2280-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2280-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2280-L2282) · [Before (L2280-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2280-L2282)

```diff
-       (0, pv.i)(sv.o), (0, Sv.p)(mh.feed), (0, Ov.h)(), kz || (kz = !0, (0, sv.m)(Uv.l, (vv => {
-         const zv = (0, xv.f)(Uv.l, vv);
-         "string" === typeof zv && Promise.resolve().then((() => Pv(3407))).then((vv => {
+       (0, yT.f)(tT.n), (0, MT.i)(al.feed), (0, mT.f)(), qk || (qk = !0, (0, tT.m)(oT.j, (TT => {
+         const kT = (0, eT.e)(oT.j, TT);
+         "string" === typeof kT && Promise.resolve().then((() => cT(3615))).then((TT => {
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2288-L2293` → after: `L2288-L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2288-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2288-L2293) · [Before (L2288-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2288-L2293)

```diff
-       })), (0, sv.m)(Uv.pb, (vv => {
-         const zv = (0, xv.f)(Uv.pb, vv);
-         "number" === typeof zv && Nv.j.zC("serverUpdating", Date.now() + zv, !0)
-       })), (0, sv.m)(Uv.Q, (vv => {
-         const zv = (0, xv.f)(Uv.Q, vv);
-         if ((0, xv.d)(zv)) {
+       })), (0, tT.m)(oT.mb, (TT => {
+         const kT = (0, eT.e)(oT.mb, TT);
+         "number" === typeof kT && xT.k.nt("serverUpdating", Date.now() + kT, !0)
+       })), (0, tT.m)(oT.H, (TT => {
+         const kT = (0, eT.e)(oT.H, TT);
+         if ((0, eT.b)(kT)) {
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2295-L2296` → after: `L2295-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2295-L2296) · [Before (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2295-L2296)

```diff
-             CP: vv,
-             iP: Pv
+             tc: TT,
+             hc: cT
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2298-L2300` → after: `L2298-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2298-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2298-L2300) · [Before (L2298-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2298-L2300)

```diff
-           (0, oz.c)({
-             CP: "string" === typeof vv ? vv : null,
-             iP: "string" === typeof Pv ? Pv : null
+           (0, nk.e)({
+             tc: "string" === typeof TT ? TT : null,
+             hc: "string" === typeof cT ? cT : null
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2304-L2311` → after: `L2304-L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2304-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2304-L2311) · [Before (L2304-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2304-L2311)

```diff
-         const zv = (0, xv.j)(vv);
-         (0, xv.d)(zv) && "number" === typeof zv.id && (0, xv.d)(zv.clientParameters) && (0, bz.d)(zv.id, zv.clientParameters)
-       })), (0, sv.m)(Uv.hb, (vv => {
-         const zv = (0, xv.f)(Uv.hb, vv);
-         "number" === typeof zv && (0, bz.g)(zv)
-       })), (0, sv.l)(bz.b), (0, sv.m)(lv.Xb.UiRequestPopup, (vv => {
-         const zv = (0, xv.j)(vv);
-         if ((0, xv.d)(zv) && "number" === typeof zv.id && "string" === typeof zv.text) {
+         const kT = (0, eT.g)(TT);
+         (0, eT.b)(kT) && "number" === typeof kT.id && (0, eT.b)(kT.clientParameters) && (0, pk.g)(kT.id, kT.clientParameters)
+       })), (0, tT.m)(oT.eb, (TT => {
+         const kT = (0, eT.e)(oT.eb, TT);
+         "number" === typeof kT && (0, pk.h)(kT)
+       })), (0, tT.l)(pk.d), (0, tT.m)(IT.Xb.UiRequestPopup, (TT => {
+         const kT = (0, eT.g)(TT);
+         if ((0, eT.b)(kT) && "number" === typeof kT.id && "string" === typeof kT.text) {
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2316` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2316) · [Before (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2316)

```diff
-               Nl: zv
+               xI: kT
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2321-L2322` → after: `L2321-L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2321-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2321-L2322) · [Before (L2321-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2321-L2322)

```diff
-         const zv = (0, xv.j)(vv);
-         void 0 !== zv && Nv.j.zC("TopRightHelper", zv, !0)
+         const kT = (0, eT.g)(TT);
+         void 0 !== kT && xT.k.nt("TopRightHelper", kT, !0)
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2324-L2325` → after: `L2324-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2324-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2324-L2325) · [Before (L2324-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2324-L2325)

```diff
-         const zv = (0, xv.j)(vv);
-         (0, xv.d)(zv) && "string" === typeof zv.taskId && "number" === typeof zv.progress && (0, Ez.b)({
+         const kT = (0, eT.g)(TT);
+         (0, eT.b)(kT) && "string" === typeof kT.taskId && "number" === typeof kT.progress && (0, Wk.b)({
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2329-L2333` → after: `L2329-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2329-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2329-L2333) · [Before (L2329-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2329-L2333)

```diff
-       }))), jP || (jP = !0, (0, sv.m)(Uv.w, (vv => {
-         const zv = (0, xv.f)(Uv.w, vv);
-         (0, xv.d)(zv) && Nv.j.zC("showShopFromServer", {
-           toggle: zv.gz,
-           pz: zv.pz
+       }))), Fc || (Fc = !0, (0, tT.m)(oT.q, (TT => {
+         const kT = (0, eT.e)(oT.q, TT);
+         (0, eT.b)(kT) && xT.k.nt("showShopFromServer", {
+           toggle: kT.Kk,
+           Ok: kT.Ok
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2336-L2337` → after: `L2336-L2337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2336-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2336-L2337) · [Before (L2336-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2336-L2337)

```diff
-         const zv = (0, xv.j)(vv);
-         (0, xv.d)(zv) && Nv.j.zC("overShopInfo", zv.info, !0)
+         const kT = (0, eT.g)(TT);
+         (0, eT.b)(kT) && xT.k.nt("overShopInfo", kT.info, !0)
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2339-L2340` → after: `L2339-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2340) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2340)

```diff
-         Nv.j.zC("showShopTutorial", null, !0)
-       }))), cP || (cP = !0, (0, sv.i)((() => {
+         xT.k.nt("showShopTutorial", null, !0)
+       }))), Sc || (Sc = !0, (0, tT.h)((() => {
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2342)

```diff
-         (0, aP.J)(), null === (vv = GP) || void 0 === vv || vv(), GP = (0, sv.e)() ? (0, CP.h)(sv.e) : null
+         (0, tc.E)(), null === (TT = Dc) || void 0 === TT || TT(), Dc = (0, tT.d)() ? (0, Nc.e)(tT.d) : null
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2344-L2346` → after: `L2344-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2344-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2344-L2346) · [Before (L2344-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2344-L2346)

```diff
-         const zv = (0, xv.j)(vv),
-           Pv = (0, tz.c)().gameNameWithVariation;
-         (0, xv.d)(zv) && "string" === typeof zv.key && null !== Pv && (0, sP.setCookie)(Pv, zv.key, zv.value)
+         const kT = (0, eT.g)(TT),
+           cT = (0, Vk.b)().gameNameWithVariation;
+         (0, eT.b)(kT) && "string" === typeof kT.key && null !== cT && (0, hc.setCookie)(cT, kT.key, kT.value)
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2348-L2349` → after: `L2348-L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2348-L2349) · [Before (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2348-L2349)

```diff
-         const zv = (0, xv.j)(vv);
-         if ((0, xv.d)(zv) && "string" === typeof zv.leaveEventType) {
+         const kT = (0, eT.g)(TT);
+         if ((0, eT.b)(kT) && "string" === typeof kT.leaveEventType) {
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2356` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2356) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2356)

```diff
-           (0, aP.M)({
+           (0, tc.K)({
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2364-L2365` → after: `L2364-L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2364-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2364-L2365) · [Before (L2364-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2364-L2365)

```diff
-         const zv = (0, xv.j)(vv);
-         if ((0, xv.d)(zv) && "string" === typeof zv.cat1) {
+         const kT = (0, eT.g)(TT);
+         if ((0, eT.b)(kT) && "string" === typeof kT.cat1) {
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2372` → after: `L2372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2372) · [Before (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2372)

```diff
-           (0, aP.t)({
+           (0, tc.n)({
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2380-L2381` → after: `L2380-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2380-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2381) · [Before (L2380-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2381)

```diff
-         const zv = (0, xv.j)(vv);
-         if ((0, xv.d)(zv)) {
+         const kT = (0, eT.g)(TT);
+         if ((0, eT.b)(kT)) {
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2389)

```diff
-           (0, aP.z)({
+           (0, tc.v)({
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2398-L2399` → after: `L2398-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2398-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2398-L2399) · [Before (L2398-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2398-L2399)

```diff
-         const zv = (0, xv.j)(vv);
-         if ((0, xv.d)(zv)) {
+         const kT = (0, eT.g)(TT);
+         if ((0, eT.b)(kT)) {
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2407)

```diff
-           (0, aP.D)({
+           (0, tc.y)({
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2416-L2417` → after: `L2416-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2416-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2416-L2417) · [Before (L2416-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2416-L2417)

```diff
-         const zv = (0, xv.j)(vv);
-         if ((0, xv.d)(zv)) {
+         const kT = (0, eT.g)(TT);
+         if ((0, eT.b)(kT)) {
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2423` → after: `L2423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2423) · [Before (L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2423)

```diff
-           Nv.j.zC("leaderboardResponse", {
+           xT.k.nt("leaderboardResponse", {
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2429-L2438` → after: `L2429-L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2429-L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2429-L2438) · [Before (L2429-L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2429-L2438)

```diff
-       })), (0, sv.m)(Uv.G, (vv => {
-         const zv = (0, xv.f)(Uv.G, vv);
-         "string" === typeof zv && (0, iP.c)(vv.conn, zv)
-       })), (0, sv.m)(Uv.I, (vv => {
-         const zv = (0, xv.f)(Uv.I, vv);
-         "string" === typeof zv && console.error(`[logErrorToConsole]: ${zv}`)
-       }))), Qv(), (0, OP.b)(), Iz || (Iz = !0, (0, sv.m)(Uv.h, (vv => {
-         const zv = (0, xv.f)(Uv.h, vv);
-         void 0 !== zv && (0, qz.h)(zv)
-       }))), Jz(), Kz(), Ev || (Ev = !0, (0, ev.o)(ov)), hv.gameBridge.attach(jh), (0, hv.installPageSources)({
+       })), (0, tT.m)(oT.A, (TT => {
+         const kT = (0, eT.e)(oT.A, TT);
+         "string" === typeof kT && (0, Qc.e)(TT.conn, kT)
+       })), (0, tT.m)(oT.D, (TT => {
+         const kT = (0, eT.e)(oT.D, TT);
+         "string" === typeof kT && console.error(`[logErrorToConsole]: ${kT}`)
+       }))), ZT(), (0, bc.d)(), Zk || (Zk = !0, (0, tT.m)(oT.h, (TT => {
+         const kT = (0, eT.e)(oT.h, TT);
+         void 0 !== kT && (0, Ek.g)(kT)
+       }))), Bk(), zk(), BT || (BT = !0, (0, KT.q)(WT)), lT.gameBridge.attach(Fl), (0, lT.installPageSources)({
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2441` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2441) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2441)

```diff
-           setChunkAddDistance: IP.g
+           setChunkAddDistance: Zc.f
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2447-L2448` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2447-L2448) · [Before (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2447-L2448)

```diff
-           Wm: IP.e,
-           drawCallStats: QP.g
+           fD: Zc.b,
+           drawCallStats: uc.k
```

#### 343. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2450` → after: `L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2450) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2450)

```diff
-       }), (0, qP.e)(), gh()
+       }), (0, Ec.b)(), yl()
```

#### 344. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2453)

```diff
-   40042: (vv, zv, Pv) => {
+   40380: (TT, kT, cT) => {
```

#### 345. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2458` → after: `L2457-L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2457-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2457-L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2458)

```diff
-       g: () => Nv
+       g: () => yT,
+       k: () => xT
```

#### 346. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2460` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2460) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2460)

```diff
-     var hv = Pv(1889);
+     var lT = cT(1964);
```

#### 347. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2474)

```diff
-       Sv = vv, ev++, (0, hv.e)();
+       MT = TT, KT++, (0, lT.b)();
```

#### 348. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2482` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2482) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2482)

```diff
-   40047: (vv, zv, Pv) => {
+   40389: (TT, kT, cT) => {
```

#### 349. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2485)

```diff
-       e: () => pv
+       f: () => yT
```

#### 350. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2487` → after: `L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2487) · [Before (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2487)

```diff
-     var hv = Pv(40054);
+     var lT = cT(40396);
```

#### 351. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2492)

```diff
-       return Sv ??= Pv.e(59).then((() => Pv(41959))).catch((vv => {
+       return MT ??= cT.e(59).then((() => cT(42161))).catch((TT => {
```

#### 352. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2498` → after: `L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2498) · [Before (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2498)

```diff
-       return ev ??= Promise.all([gv(), (0, hv.h)()]).then((vv => {
+       return KT ??= Promise.all([OT(), (0, lT.g)()]).then((TT => {
```

#### 353. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2506)

```diff
-   36568: (vv, zv, Pv) => {
+   36864: (TT, kT, cT) => {
```

#### 354. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2508` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2508) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2508)

```diff
-       d: () => hv
+       b: () => lT
```

#### 355. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2670` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2670) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2670)

```diff
-   36372: (vv, zv, Pv) => {
+   36693: (TT, kT, cT) => {
```

#### 356. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2676-L2678` → after: `L2675-L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2675-L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2675-L2677) · [Before (L2676-L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2676-L2678)

```diff
-       j: () => dv,
-       n: () => Nv,
-       r: () => Tv,
+       h: () => yT,
+       l: () => fT,
+       o: () => xT,
```

#### 357. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2680` → after: `L2679-L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2679-L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2679-L2680) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2680)

```diff
-       v: () => gv
+       t: () => IT,
+       w: () => OT
```

#### 358. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2682` → after: `L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2682) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2682)

```diff
-     var hv = Pv(1226);
+     var lT = cT(1244);
```

#### 359. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2691` → after: `L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2691) · [Before (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2691)

```diff
-       return "lobby" === vv.kind ? `lobby:${vv.path}` : `codeBlock:${vv.pos[0]},${vv.pos[1]},${vv.pos[2]}`
+       return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
```

#### 360. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2697` → after: `L2697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2697) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2697)

```diff
-         path: hv.i
+         path: lT.g
```

#### 361. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2736` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2736) · [Before (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2736)

```diff
-   38566: (vv, zv, Pv) => {
+   38856: (TT, kT, cT) => {
```

#### 362. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2739` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/playGameSources.js#L2739) · [Before (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/playGameSources.js#L2739)

```diff
-       f: () => Sv
+       e: () => MT
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderDebug.js` (qepqb8.0352199c → bcgkc.38229551)

- **File**: `bundles/bloxd.io/chunks/js/renderDebug.js` (119 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9)

#### 1. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L4)

```diff
-   4448: (vv, zv, Pv) => {
+   4673: (TT, kT, cT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L6)

```diff
-       d: () => lv
+       c: () => IT
```

#### 3. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L8-L11)

```diff
-     var hv = Pv(22),
-       Sv = Pv(26),
-       ev = Pv(1272),
-       gv = Pv(2682);
+     var lT = cT(31),
+       MT = cT(36),
+       KT = cT(1292),
+       OT = cT(2853);
```

#### 4. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L16)

```diff
-       return "visible" === document.visibilityState && "inGame" === hv.c.get("gameState") && (0, ev.u)()
+       return "visible" === document.visibilityState && "inGame" === lT.e.get("gameState") && (0, KT.q)()
```

#### 5. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L20)

```diff
-       (0, gv.s)() || function(vv, zv, Pv) {
+       (0, OT.q)() || function(TT, kT, cT) {
```

#### 6. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L27)

```diff
-           vv(`saved for the player after ${pv/1e3} s of play`), (0, gv.x)(), Sv.j.zC("chat", {
+           TT(`saved for the player after ${yT/1e3} s of play`), (0, OT.y)(), MT.k.nt("chat", {
```

#### 7. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L39)

```diff
-   4446: (vv, zv, Pv) => {
+   4670: (TT, kT, cT) => {
```

#### 8. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L46-L48` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48)

```diff
-     var hv = Pv(1773),
-       Sv = Pv(4448),
-       ev = Pv(2682);
+     var lT = cT(1828),
+       MT = cT(4673),
+       KT = cT(2853);
```

#### 9. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66)

```diff
-         return zv + (1 === (22 >>> vv & 1) ? 4 - Pv : Pv) & 3
-       }(Sv, dv(hv), zv), gv = Sv >>> 1, [lv, Tv] = Nv(Pv), Wv = 1 === ev || 2 === ev ? lv : 0, wv = ev >= 2 ? Tv : 0, av = [63 & Pv, Pv >>> 6 & 63, Pv >>> 12 & 63];
+         return kT + (1 === (22 >>> TT & 1) ? 4 - cT : cT) & 3
+       }(MT, fT(lT), kT), OT = MT >>> 1, [IT, AT] = xT(cT), CT = 1 === KT || 2 === KT ? IT : 0, jT = KT >= 2 ? AT : 0, vT = [63 & cT, cT >>> 6 & 63, cT >>> 12 & 63];
```

#### 10. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L89)

```diff
-         ev.push(gv === zv ? `[${Pv}]` : Pv)
+         KT.push(OT === kT ? `[${cT}]` : cT)
```

#### 11. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L185)

```diff
-       return null === vv.name ? `#${vv.id}` : `#${vv.id} ${vv.name}`
+       return null === TT.name ? `#${TT.id}` : `#${TT.id} ${TT.name}`
```

#### 12. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L207)

```diff
-         this.print = vv, this.now = zv, this.shown = 0, this.Vp = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Yw = [], this.dropped = 0
+         this.print = TT, this.now = kT, this.shown = 0, this.ty = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.wj = [], this.dropped = 0
```

#### 13. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212)

```diff
-         if (zv - this.second >= 1e3 && (this.second = zv, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Vp++, void this.store(vv);
-         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${vv} (the last line here: the rest go to bloxdDebug.save())` : vv)
+         if (kT - this.second >= 1e3 && (this.second = kT, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.ty++, void this.store(TT);
+         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${TT} (the last line here: the rest go to bloxdDebug.save())` : TT)
```

#### 14. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L218)

```diff
-         this.Yw.push(`${new Date(Date.now()).toISOString()} ${vv}`), this.Yw.length > 2e4 && (this.Yw.shift(), this.dropped++)
+         this.wj.push(`${new Date(Date.now()).toISOString()} ${TT}`), this.wj.length > 2e4 && (this.wj.shift(), this.dropped++)
```

#### 15. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L221)

```diff
-         return [`${this.shown} lines logged (above); kept here: ${this.Vp} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Yw].join("\n")
+         return [`${this.shown} lines logged (above); kept here: ${this.ty} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.wj].join("\n")
```

#### 16. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L229)

```diff
-           (0, ev.i)("render", vv)
+           (0, KT.k)("render", TT)
```

#### 17. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L231)

```diff
-         (0, ev.f)("render", (() => vv.dump())), Zv = vv
+         (0, KT.j)("render", (() => TT.dump())), uT = TT
```

#### 18. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L246)

```diff
-       return vv.length <= zv ? vv : `${vv.slice(0,zv)}... (${vv.length-zv} more characters)`
+       return TT.length <= kT ? TT : `${TT.slice(0,kT)}... (${TT.length-kT} more characters)`
```

#### 19. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L257)

```diff
-           PC: Sv,
+           qt: MT,
```

#### 20. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L282)

```diff
-             }), zv.push(`@${Sv} buf#${Iv(hv)} +${ev} stride ${gv} ${pv}x0x${dv.toString(16)}${Nv?" int":""} div ${lv}`)
+             }), kT.push(`@${MT} buf#${ET(lT)} +${KT} stride ${OT} ${yT}x0x${fT.toString(16)}${xT?" int":""} div ${IT}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L296)

```diff
-               ev = hv ? `+${hv.offset}` : Sv ? Array.from(Sv).slice(0, 3).join(",") : "?";
+               KT = lT ? `+${lT.offset}` : MT ? Array.from(MT).slice(0, 3).join(",") : "?";
```

#### 22. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L315)

```diff
-             const Nv = Math.min(Sv, Yv, Fv - (null !== dv && void 0 !== dv ? dv : 0));
+             const xT = Math.min(MT, PT, rT - (null !== fT && void 0 !== fT ? fT : 0));
```

#### 23. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L345)

```diff
-             gv.parts.set(ev, (null !== dv && void 0 !== dv ? dv : 0) + Nv);
+             OT.parts.set(KT, (null !== fT && void 0 !== fT ? fT : 0) + xT);
```

#### 24. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L350)

```diff
-               av && (gv.fed.records++, Pv.some(((vv, Pv) => vv !== zv[Pv])) && (gv.fed.differing++, gv.fed.first.length < 8 && gv.fed.first.push(`part ${ev} instance ${sv}: fed ${Pv.map(Sz).join(" ")} buffer ${zv.map(Sz).join(" ")}`)));
+               vT && (OT.fed.records++, cT.some(((TT, cT) => TT !== kT[cT])) && (OT.fed.differing++, OT.fed.first.length < 8 && OT.fed.first.push(`part ${KT} instance ${tT}: fed ${cT.map(Mk).join(" ")} buffer ${kT.map(Mk).join(" ")}`)));
```

#### 25. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L396)

```diff
-                 ev.parts.set(Sv[Pv + 3], (null !== (Wv = ev.parts.get(Sv[Pv + 3])) && void 0 !== Wv ? Wv : 0) + (vv % 6 === 0 ? 1 : 0)), ev.vertices.push({
+                 KT.parts.set(MT[cT + 3], (null !== (CT = KT.parts.get(MT[cT + 3])) && void 0 !== CT ? CT : 0) + (TT % 6 === 0 ? 1 : 0)), KT.vertices.push({
```

#### 26. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L407)

```diff
-         Lv(`decode probe failed on program ${Kv(Pv)}: ${String(lv)}`)
+         dT(`decode probe failed on program ${zT(cT)}: ${String(IT)}`)
```

#### 27. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L416)

```diff
-           return Jv(vv, zv.vertex, zv.fragment, Cv, `program ${Kv(zv)}'s twin`)
+           return YT(TT, kT.vertex, kT.fragment, hT, `program ${zT(kT)}'s twin`)
```

#### 28. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L433)

```diff
-       return vv.getProgramParameter(gv, sv.LINK_STATUS) ? gv : (Lv(`decode probe: ${Sv} failed to link: ${Mv(null!==(pv=vv.getProgramInfoLog(gv))&&void 0!==pv?pv:"",300)}`), vv.deleteProgram(gv), null)
+       return TT.getProgramParameter(OT, tT.LINK_STATUS) ? OT : (dT(`decode probe: ${MT} failed to link: ${RT(null!==(yT=TT.getProgramInfoLog(OT))&&void 0!==yT?yT:"",300)}`), TT.deleteProgram(OT), null)
```

#### 29. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L452)

```diff
-           const gv = hv.size > 1 ? `${Sv}[${ev}]` : hv.name,
+           const OT = lT.size > 1 ? `${MT}[${KT}]` : lT.name,
```

#### 30. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L507)

```diff
-         ev !== sv.NO_ERROR && Lv(`GL error 0x${ev.toString(16)} pending before the decode probe (the renderer's)`), vv.useProgram(zv), vv.bindTransformFeedback(sv.TRANSFORM_FEEDBACK, lv), vv.bindBuffer(sv.TRANSFORM_FEEDBACK_BUFFER, Tv), vv.bufferData(sv.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
+         KT !== tT.NO_ERROR && dT(`GL error 0x${KT.toString(16)} pending before the decode probe (the renderer's)`), TT.useProgram(kT), TT.bindTransformFeedback(tT.TRANSFORM_FEEDBACK, IT), TT.bindBuffer(tT.TRANSFORM_FEEDBACK_BUFFER, AT), TT.bufferData(tT.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L509)

```diff
-         if (gv !== sv.NO_ERROR) return Lv(`${Sv}: GL error 0x${gv.toString(16)} on the feedback draw`), null;
+         if (OT !== tT.NO_ERROR) return dT(`${MT}: GL error 0x${OT.toString(16)} on the feedback draw`), null;
```

#### 32. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L522)

```diff
-     const kv = `#version 300 es\nlayout(location = ${iv}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
+     const iT = `#version 300 es\nlayout(location = ${NT}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
```

#### 33. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L573)

```diff
-       const ev = `${vv} ${zv.bytes.length} B cpu ${wv(zv.bytes).toString(16)} gpu ${wv(Pv).toString(16)}, ${Sv}/${hv} blocks differ${zv.missed?`, ${zv.missed} GPU-side writes uncopied`:""}`;
+       const KT = `${TT} ${kT.bytes.length} B cpu ${jT(kT.bytes).toString(16)} gpu ${jT(cT).toString(16)}, ${MT}/${lT} blocks differ${kT.missed?`, ${kT.missed} GPU-side writes uncopied`:""}`;
```

#### 34. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L589)

```diff
-       return Hv([`${ev}: ${gv} bytes differ`, ...pv.map((vv => `  +${vv}: cpu ${av(zv.bytes,vv)} | gpu ${av(Pv,vv)}`))].join("\n")), `${ev}: ${gv} bytes differ, first at ${pv.join(", ")} (context in the saved file)`
+       return LT([`${KT}: ${OT} bytes differ`, ...yT.map((TT => `  +${TT}: cpu ${vT(kT.bytes,TT)} | gpu ${vT(cT,TT)}`))].join("\n")), `${KT}: ${OT} bytes differ, first at ${yT.join(", ")} (context in the saved file)`
```

#### 35. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L593)

```diff
-       if (0 === vv.vertices.length) return void Lv(`decode probe (${vv.reason}): no terrain draw probed (${vv.draws.length} seen)`);
+       if (0 === TT.vertices.length) return void dT(`decode probe (${TT.reason}): no terrain draw probed (${TT.draws.length} seen)`);
```

#### 36. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L633)

```diff
-               Pv.byBand[Nv] = (null !== (Sv = Pv.byBand[Nv]) && void 0 !== Sv ? Sv : 0) + 1, Pv.first.length < Wv && Pv.first.push({
+               cT.byBand[xT] = (null !== (MT = cT.byBand[xT]) && void 0 !== MT ? MT : 0) + 1, cT.first.length < CT && cT.first.push({
```

#### 37. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L641)

```diff
-         Pv = zv.byDirection.map(((vv, zv) => vv ? `${gv[zv]} ${vv}` : "")).filter(Boolean).join(" "),
+         cT = kT.byDirection.map(((TT, kT) => TT ? `${OT[kT]} ${TT}` : "")).filter(Boolean).join(" "),
```

#### 38. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L644)

```diff
-           return `${zv}: ${Pv}`
+           return `${kT}: ${cT}`
```

#### 39. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L646-L648` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L646-L648) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L646-L648)

```diff
-       if (Lv(`decode probe (${vv.reason}): ${zv.mismatches}/${zv.vertices} vertices differ from the CPU decode over ${vv.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (zv.mismatches ? ` by direction [${Pv}] diagonal [0: ${zv … [truncated]
-         Lv(`decode probe input: ${vv.fed.differing}/${vv.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (vv.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (vv.fed.fa … [truncated]
-         for (const zv of vv.fed.first) Lv(`  ${zv}`)
+       if (dT(`decode probe (${TT.reason}): ${kT.mismatches}/${kT.vertices} vertices differ from the CPU decode over ${TT.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (kT.mismatches ? ` by direction [${cT}] diagonal [0: ${kT … [truncated]
+         dT(`decode probe input: ${TT.fed.differing}/${TT.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (TT.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (TT.fed.fa … [truncated]
+         for (const kT of TT.fed.first) dT(`  ${kT}`)
```

#### 40. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L652)

```diff
-         Lv(`  mismatch part ${Sv.group} r0 ${vv.toString(16)} r1 ${zv.toString(16)} r2 ${Pv.toString(16)} slot ${Sv.slot} (${gv[pv(Pv)]}): expected ${Sv.expected.map(ez).join(",")} gpu ${Sv.gpu.map(ez).join(",")}`)
+         dT(`  mismatch part ${MT.group} r0 ${TT.toString(16)} r1 ${kT.toString(16)} r2 ${cT.toString(16)} slot ${MT.slot} (${OT[yT(cT)]}): expected ${MT.expected.map(Kk).join(",")} gpu ${MT.gpu.map(Kk).join(",")}`)
```

#### 41. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L654)

```diff
-       Hv(`decode probe translations: ${[...zv.translations].map((vv=>{let[zv,Pv]=vv;return`${zv}: ${Pv.map(ez).join(",")}`})).join("; ")}`)
+       LT(`decode probe translations: ${[...kT.translations].map((TT=>{let[kT,cT]=TT;return`${kT}: ${cT.map(Kk).join(",")}`})).join("; ")}`)
```

#### 42. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L687)

```diff
-                 Lv(`draw ranges (${vv.reason}): ${vv.terrainDraws} terrain draws in the frame, the first ${vv.draws.length} here`);
+                 dT(`draw ranges (${TT.reason}): ${TT.terrainDraws} terrain draws in the frame, the first ${TT.draws.length} here`);
```

#### 43. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L689)

```diff
-                   const vv = zv.PC.slice(0, 8).map((vv => {
+                   const TT = kT.qt.slice(0, 8).map((TT => {
```

#### 44. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L691)

```diff
-                       return `${zv}+${Pv}`
+                       return `${kT}+${cT}`
```

#### 45. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L693-L694` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L693-L694) · [Before (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L693-L694)

```diff
-                     Pv = zv.PC.length > 8 ? ` (+${zv.PC.length-8} ranges)` : "";
-                   Lv(`  ${Kv(zv.program)} ${zv.program.terrain} ${zv.call} ${vv}${Pv} x${zv.instances}${zv.group>=0?` part ${zv.group} chunk ${zv.chunk}`:""} | ${zv.attributes.join(" | ")}`)
+                     cT = kT.qt.length > 8 ? ` (+${kT.qt.length-8} ranges)` : "";
+                   dT(`  ${zT(kT.program)} ${kT.program.terrain} ${kT.call} ${TT}${cT} x${kT.instances}${kT.group>=0?` part ${kT.group} chunk ${kT.chunk}`:""} | ${kT.attributes.join(" | ")}`)
```

#### 46. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L712)

```diff
-                     zv.push(`${Sv.kind}#${Iv(hv)}: no CPU copy (${xv.uncopied} pages over the copy budget)`);
+                     kT.push(`${MT.kind}#${ET(lT)}: no CPU copy (${eT.uncopied} pages over the copy budget)`);
```

#### 47. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L716)

```diff
-                     zv.push(Pz(`buf#${vv.id}`, vv, rv(ev, Sv.buffer, 0, vv.bytes.length)));
+                     kT.push(ck(`buf#${TT.id}`, TT, pT(KT, MT.buffer, 0, TT.bytes.length)));
```

#### 48. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L721)

```diff
-                   zv.push(Pz(`tex#${vv.id} (${16===vv.texelBytes?"records":"light"})`, vv, gv))
+                   kT.push(ck(`tex#${TT.id} (${16===TT.texelBytes?"records":"light"})`, TT, OT))
```

#### 49. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L723)

```diff
-                 for (const hv of zv) Lv(`page readback ${hv}`)
+                 for (const lT of kT) dT(`page readback ${lT}`)
```

#### 50. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L726)

```diff
-               Lv(`check failed: ${String(vv)}`)
+               dT(`check failed: ${String(TT)}`)
```

#### 51. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L739)

```diff
-     var pz = Pv(4451);
+     var yk = cT(4681);
```

#### 52. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L749)

```diff
-         vv[zv] = Sv, (0, pz.x)(Sv, hv)
+         TT[kT] = MT, (0, yk.u)(MT, lT)
```

#### 53. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L787)

```diff
-         ev = Pv ? Pv * hv : vv.byteLength - zv * hv;
+         KT = cT ? cT * lT : TT.byteLength - kT * lT;
```

#### 54. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L845)

```diff
-           gv = null !== (zv = az.get(ev)) && void 0 !== zv ? zv : [];
+           OT = null !== (kT = vk.get(KT)) && void 0 !== kT ? kT : [];
```

#### 55. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L856` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L856) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L856)

```diff
-               Cz.lost < dz && (Cz.lost++, Lv(`${zv}${"statusMessage"in vv?`: ${String(vv.statusMessage)}`:""}`))
+               hk.lost < fk && (hk.lost++, dT(`${kT}${"statusMessage"in TT?`: ${String(TT.statusMessage)}`:""}`))
```

#### 56. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L860)

```diff
-           const ev = null !== (Pv = az.get(zv)) && void 0 !== Pv ? Pv : [];
+           const KT = null !== (cT = vk.get(kT)) && void 0 !== cT ? cT : [];
```

#### 57. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L865-L866` → after: `L865-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L865-L866) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L865-L866)

```diff
-             const vv = null !== (dv = wz.get(lv)) && void 0 !== dv ? dv : "";
-             /\bgl_Position\b/.test(vv) ? gv = vv : pv = vv
+             const TT = null !== (fT = jk.get(IT)) && void 0 !== fT ? fT : "";
+             /\bgl_Position\b/.test(TT) ? OT = TT : yT = TT
```

#### 58. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L870)

```diff
-             name: null !== (hv = null === (Sv = Dv.exec(gv)) || void 0 === Sv ? void 0 : Sv[1]) && void 0 !== hv ? hv : null,
+             name: null !== (lT = null === (MT = bT.exec(OT)) || void 0 === MT ? void 0 : MT[1]) && void 0 !== lT ? lT : null,
```

#### 59. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L881)

```diff
-               return null !== (Pv = vv.getShaderInfoLog(zv)) && void 0 !== Pv ? Pv : ""
+               return null !== (cT = TT.getShaderInfoLog(kT)) && void 0 !== cT ? cT : ""
```

#### 60. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L883)

```diff
-             zv.length > 0 && Hv(`program ${Kv(Nv)} (${Nv.terrain}) shader logs:\n${Mv(zv.join("\n"))}`)
+             kT.length > 0 && LT(`program ${zT(xT)} (${xT.terrain}) shader logs:\n${RT(kT.join("\n"))}`)
```

#### 61. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L893)

```diff
-             const zv = "number" === typeof Pv[1] ? null : mz(Pv[1], null !== (ev = Pv[3]) && void 0 !== ev ? ev : 0, null !== (gv = Pv[4]) && void 0 !== gv ? gv : 0);
+             const kT = "number" === typeof cT[1] ? null : Dk(cT[1], null !== (KT = cT[3]) && void 0 !== KT ? KT : 0, null !== (OT = cT[4]) && void 0 !== OT ? OT : 0);
```

#### 62. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L895)

```diff
-             if (Fz(vv, "number" === typeof Pv[1] ? Pv[1] : null !== (pv = null === zv || void 0 === zv ? void 0 : zv.length) && void 0 !== pv ? pv : 0), zv) null === (dv = Uv.get(vv)) || void 0 === dv || dv.bytes.set(zv)
+             if (rk(TT, "number" === typeof cT[1] ? cT[1] : null !== (yT = null === kT || void 0 === kT ? void 0 : kT.length) && void 0 !== yT ? yT : 0), kT) null === (fT = oT.get(TT)) || void 0 === fT || fT.bytes.set(kT)
```

#### 63. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L906)

```diff
-             hv = mz(Pv[2], null !== (ev = Pv[3]) && void 0 !== ev ? ev : 0, null !== (gv = Pv[4]) && void 0 !== gv ? gv : 0);
+             lT = Dk(cT[2], null !== (KT = cT[3]) && void 0 !== KT ? KT : 0, null !== (OT = cT[4]) && void 0 !== OT ? OT : 0);
```

#### 64. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L940)

```diff
-           let Nv = mz(zv[8], null !== (Pv = zv[9]) && void 0 !== Pv ? Pv : 0);
+           let xT = Dk(kT[8], null !== (cT = kT[9]) && void 0 !== cT ? cT : 0);
```

#### 65. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L992)

```diff
-       cz[vv] += hv, Gz < 32 && zv.bytes.length >= 1 << 20 && (Gz++, Hv(`upload ${vv} #${zv.id} +${Pv} ${hv} B`))
+       Qk[TT] += lT, Sk < 32 && kT.bytes.length >= 1 << 20 && (Sk++, LT(`upload ${TT} #${kT.id} +${cT} ${lT} B`))
```

#### 66. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1005` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1005) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1005)

```diff
-         ev = (null !== (hv = vv.getProgramInfoLog(zv)) && void 0 !== hv ? hv : "").trim();
+         KT = (null !== (lT = TT.getProgramInfoLog(kT)) && void 0 !== lT ? lT : "").trim();
```

#### 67. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1007)

```diff
-       null === Pv.terrain && Sv || (Lv(`program ${Kv(Pv)} ${null!==(gv=Pv.terrain)&&void 0!==gv?gv:"other"} link ${Sv?"ok":"FAILED"}${ev?`: ${Mv(ev,300)}`:""}`), ev && Hv(`program ${Kv(Pv)} link log:\n${Mv(ev)}`))
+       null === cT.terrain && MT || (dT(`program ${zT(cT)} ${null!==(OT=cT.terrain)&&void 0!==OT?OT:"other"} link ${MT?"ok":"FAILED"}${KT?`: ${RT(KT,300)}`:""}`), KT && LT(`program ${zT(cT)} link log:\n${RT(KT)}`))
```

#### 68. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1015)

```diff
-       const gv = null !== (hv = ev.terrain) && void 0 !== hv ? hv : "other",
+       const OT = null !== (lT = KT.terrain) && void 0 !== lT ? lT : "other",
```

#### 69. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1017` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1017) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1017)

```diff
-           PC: pv,
+           qt: yT,
```

#### 70. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1023)

```diff
-                 PC: [
+                 qt: [
```

#### 71. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1030)

```diff
-                 PC: [
+                 qt: [
```

#### 72. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1036)

```diff
-                 PC: [
+                 qt: [
```

#### 73. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1043)

```diff
-                 PC: [
+                 qt: [
```

#### 74. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1055)

```diff
-                 PC: ev,
+                 qt: KT,
```

#### 75. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1061)

```diff
-                 PC: [], instances: 0
+                 qt: [], instances: 0
```

#### 76. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1065)

```diff
-         Nv = "inst" === ev.terrain ? dv : pv.reduce(((vv, zv) => {
+         xT = "inst" === KT.terrain ? fT : yT.reduce(((TT, kT) => {
```

#### 77. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1085` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1085) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1085)

```diff
-             Sv = zv.getFramebufferAttachmentParameter(sv.DRAW_FRAMEBUFFER, sv.DEPTH_ATTACHMENT, sv.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(zv.getFramebufferAttachmentParameter(sv.DRAW_FRAMEBUFFER,sv.DEPTH_ATTACHMENT,sv.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
+             MT = kT.getFramebufferAttachmentParameter(tT.DRAW_FRAMEBUFFER, tT.DEPTH_ATTACHMENT, tT.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(kT.getFramebufferAttachmentParameter(tT.DRAW_FRAMEBUFFER,tT.DEPTH_ATTACHMENT,tT.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1088)

```diff
-           return `depth ${null!==(zv=hv[Pv])&&void 0!==zv?zv:`0x${Pv.toString(16)}`} clear ${ev}${516===Pv||518===Pv?" (reverse-Z)":""}, samples ${String(vv.getParameter(sv.SAMPLES))}, ${Sv}`
+           return `depth ${null!==(kT=lT[cT])&&void 0!==kT?kT:`0x${cT.toString(16)}`} clear ${KT}${516===cT||518===cT?" (reverse-Z)":""}, samples ${String(TT.getParameter(tT.SAMPLES))}, ${MT}`
```

#### 79. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1091)

```diff
-         Pv !== sv.NO_ERROR && Cz.gl < dz && (Cz.gl++, Lv(`GL error 0x${Pv.toString(16)} after program ${Kv(ev)}'s first terrain draw (${zv})`))
+         cT !== tT.NO_ERROR && hk.gl < fk && (hk.gl++, dT(`GL error 0x${cT.toString(16)} after program ${zT(KT)}'s first terrain draw (${kT})`))
```

#### 80. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1098-L1099` → after: `L1098-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1098-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1098-L1099) · [Before (L1098-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1098-L1099)

```diff
-     var Rz = Pv(4264),
-       xz = Pv(4456);
+     var ek = cT(4491),
+       Gk = cT(4688);
```

#### 81. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1128-L1130` → after: `L1128-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1128-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1128-L1130) · [Before (L1128-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1128-L1130)

```diff
-       const Pv = null !== vv && void 0 !== vv ? vv : {},
-         hv = null !== zv && void 0 !== zv ? zv : Object.keys(Object.getPrototypeOf(Pv)).concat(Object.keys(Pv));
-       return [...new Set(hv)].filter((vv => "number" === typeof Pv[vv])).map((vv => `${vv} ${String(Pv[vv])}`)).join(", ")
+       const cT = null !== TT && void 0 !== TT ? TT : {},
+         lT = null !== kT && void 0 !== kT ? kT : Object.keys(Object.getPrototypeOf(cT)).concat(Object.keys(cT));
+       return [...new Set(lT)].filter((TT => "number" === typeof cT[TT])).map((TT => `${TT} ${String(cT[TT])}`)).join(", ")
```

#### 82. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1135` → after: `L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1135) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1135)

```diff
-       const hv = null !== (Pv = zv.vertex) && void 0 !== Pv ? Pv : {};
+       const lT = null !== (cT = kT.vertex) && void 0 !== cT ? cT : {};
```

#### 83. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1138` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1138) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1138)

```diff
-         const Pv = String(null !== (Sv = hv.entryPoint) && void 0 !== Sv ? Sv : "");
+         const cT = String(null !== (MT = lT.entryPoint) && void 0 !== MT ? MT : "");
```

#### 84. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1142-L1145` → after: `L1142-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1142-L1145) · [Before (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1142-L1145)

```diff
-           const vv = null !== (ev = zv.depthStencil) && void 0 !== ev ? ev : {},
-             hv = null !== (gv = zv.multisample) && void 0 !== gv ? gv : {},
-             Sv = String(null !== (pv = vv.depthCompare) && void 0 !== pv ? pv : "");
-           Lv(`WebGPU terrain pipeline ${Pv}: depth ${String(null!==(dv=vv.format)&&void 0!==dv?dv:"none")} ${Sv}${Sv.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Nv=hv.count)&&void 0!==Nv?Nv:1)}`)
+           const TT = null !== (KT = kT.depthStencil) && void 0 !== KT ? KT : {},
+             lT = null !== (OT = kT.multisample) && void 0 !== OT ? OT : {},
+             MT = String(null !== (yT = TT.depthCompare) && void 0 !== yT ? yT : "");
+           dT(`WebGPU terrain pipeline ${cT}: depth ${String(null!==(fT=TT.format)&&void 0!==fT?fT:"none")} ${MT}${MT.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(xT=lT.count)&&void 0!==xT?xT:1)}`)
```

#### 85. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1165` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1165) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1165)

```diff
-       (yz.draws++, "draw" === vv || "drawIndexed" === vv) && (yz.faces += Pv[0] * (null !== (hv = Pv[1]) && void 0 !== hv ? hv : 1) / 6);
+       (Uk.draws++, "draw" === TT || "drawIndexed" === TT) && (Uk.faces += cT[0] * (null !== (lT = cT[1]) && void 0 !== lT ? lT : 1) / 6);
```

#### 86. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1169)

```diff
-           return `${zv} ${String(null!==Sv&&void 0!==Sv?Sv:"instances"===zv?1:0)}`
+           return `${kT} ${String(null!==MT&&void 0!==MT?MT:"instances"===kT?1:0)}`
```

#### 87. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1171)

```diff
-         Mz.push(`  ${zv} ${vv} ${hv.join(" ")}`)
+         gk.push(`  ${kT} ${TT} ${lT.join(" ")}`)
```

#### 88. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1183-L1185` → after: `L1183-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1183-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1183-L1185) · [Before (L1183-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1183-L1185)

```diff
-             const Pv = null !== (zv = vv.info) && void 0 !== zv ? zv : {};
-             Lv(`WebGPU adapter ${["vendor","architecture","device","description"].map((vv=>{var zv;return`${vv} "${String(null!==(zv=Pv[vv])&&void 0!==zv?zv:"")}"`})).join(" ")}${vv.isFallbackAdapter?" (fallback)":""}`), Lv(`WebGPU adapter features ${Jz(vv.features)}`), Lv(`WebGP … [truncated]
-           }(vv) : Lv(`WebGPU requestAdapter(${JSON.stringify(null!==(zv=Pv[0])&&void 0!==zv?zv:{})}) gave none`);
+             const cT = null !== (kT = TT.info) && void 0 !== kT ? kT : {};
+             dT(`WebGPU adapter ${["vendor","architecture","device","description"].map((TT=>{var kT;return`${TT} "${String(null!==(kT=cT[TT])&&void 0!==kT?kT:"")}"`})).join(" ")}${TT.isFallbackAdapter?" (fallback)":""}`), dT(`WebGPU adapter features ${Bk(TT.features)}`), dT(`WebGP … [truncated]
+           }(TT) : dT(`WebGPU requestAdapter(${JSON.stringify(null!==(kT=cT[0])&&void 0!==kT?kT:{})}) gave none`);
```

#### 89. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1191)

```diff
-           Lv(`WebGPU device features ${Jz(vv.features)}`), Lv(`WebGPU device limits ${Ez(vv.limits,tz)}`), vv.addEventListener("uncapturederror", (vv => {
+           dT(`WebGPU device features ${Bk(TT.features)}`), dT(`WebGPU device limits ${Wk(TT.limits,Vk)}`), TT.addEventListener("uncapturederror", (TT => {
```

#### 90. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1196` → after: `L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1196) · [Before (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1196)

```diff
-               Lv(`WebGPU uncaptured ${null!==(zv=null===Sv||void 0===Sv||null===(Pv=Sv.constructor)||void 0===Pv?void 0:Pv.name)&&void 0!==zv?zv:"error"}: ${Mv(String(null!==(hv=null===Sv||void 0===Sv?void 0:Sv.message)&&void 0!==hv?hv:""),600)}`)
+               dT(`WebGPU uncaptured ${null!==(kT=null===MT||void 0===MT||null===(cT=MT.constructor)||void 0===cT?void 0:cT.name)&&void 0!==kT?kT:"error"}: ${RT(String(null!==(lT=null===MT||void 0===MT?void 0:MT.message)&&void 0!==lT?lT:""),600)}`)
```

#### 91. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1202)

```diff
-             Lv(`WebGPU device lost (${String(vv.reason)}): ${Mv(String(null!==(zv=vv.message)&&void 0!==zv?zv:""),600)}`)
+             dT(`WebGPU device lost (${String(TT.reason)}): ${RT(String(null!==(kT=TT.message)&&void 0!==kT?kT:""),600)}`)
```

#### 92. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1205)

```diff
-           throw Lv(`WebGPU requestDevice failed: ${String(vv)}`), vv
+           throw dT(`WebGPU requestDevice failed: ${String(TT)}`), TT
```

#### 93. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1221)

```diff
-               zv[String(Pv.type)] = (null !== (hv = zv[String(Pv.type)]) && void 0 !== hv ? hv : 0) + 1
+               kT[String(cT.type)] = (null !== (lT = kT[String(cT.type)]) && void 0 !== lT ? lT : 0) + 1
```

#### 94. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1223-L1224` → after: `L1223-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1223-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1223-L1224) · [Before (L1223-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1223-L1224)

```diff
-             const Sv = vv.messages.map((vv => `${String(vv.type)} ${String(vv.lineNum)}:${String(vv.linePos)} ${String(vv.message)}`)).join("\n");
-             Az.compile < dz && (Az.compile++, Lv(`WebGPU ${Pv?"terrain ":""}shader module compiled: ${JSON.stringify(zv)}${Sv?` first: ${Mv(Sv.split("\n")[0],300)}`:""}`)), Sv && Hv(`WebGPU shader module messages:\n${Mv(Sv)}`)
+             const MT = TT.messages.map((TT => `${String(TT.type)} ${String(TT.lineNum)}:${String(TT.linePos)} ${String(TT.message)}`)).join("\n");
+             dk.compile < fk && (dk.compile++, dT(`WebGPU ${cT?"terrain ":""}shader module compiled: ${JSON.stringify(kT)}${MT?` first: ${RT(MT.split("\n")[0],300)}`:""}`)), MT && LT(`WebGPU shader module messages:\n${RT(MT)}`)
```

#### 95. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1226)

```diff
-         }(gv, String(null !== (zv = (null !== (Pv = Sv[0]) && void 0 !== Pv ? Pv : {}).code) && void 0 !== zv ? zv : "")), gv
+         }(OT, String(null !== (kT = (null !== (cT = MT[0]) && void 0 !== cT ? cT : {}).code) && void 0 !== kT ? kT : "")), OT
```

#### 96. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1230)

```diff
-         return oz(ev, null !== (zv = hv[0]) && void 0 !== zv ? zv : {}), ev
+         return nk(KT, null !== (kT = lT[0]) && void 0 !== kT ? kT : {}), KT
```

#### 97. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1235` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1235) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1235)

```diff
-           return oz(vv, null !== (zv = Pv[0]) && void 0 !== zv ? zv : {}), vv
+           return nk(TT, null !== (kT = cT[0]) && void 0 !== kT ? kT : {}), TT
```

#### 98. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1245-L1247` → after: `L1245-L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1245-L1247) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1245-L1247)

```diff
-             } = null !== zv && void 0 !== zv ? zv : {}, pv = String(null !== (Pv = (null !== (hv = vv.vertex) && void 0 !== hv ? hv : {}).entryPoint) && void 0 !== Pv ? Pv : "");
-             Lv(`WebGPU pipeline "${String(null!==(Sv=vv.label)&&void 0!==Sv?Sv:"")}" ${pv} rejected (${String(null!==ev&&void 0!==ev?ev:"no reason")}): ${Mv(String(null!==gv&&void 0!==gv?gv:zv),600)}`)
-           }(null !== (zv = Pv[0]) && void 0 !== zv ? zv : {}, vv), vv
+             } = null !== kT && void 0 !== kT ? kT : {}, yT = String(null !== (cT = (null !== (lT = TT.vertex) && void 0 !== lT ? lT : {}).entryPoint) && void 0 !== cT ? cT : "");
+             dT(`WebGPU pipeline "${String(null!==(MT=TT.label)&&void 0!==MT?MT:"")}" ${yT} rejected (${String(null!==KT&&void 0!==KT?KT:"no reason")}): ${RT(String(null!==OT&&void 0!==OT?OT:kT),600)}`)
+           }(null !== (kT = cT[0]) && void 0 !== kT ? kT : {}, TT), TT
```

#### 99. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1251)

```diff
-         const ev = null !== (zv = hv[0]) && void 0 !== zv ? zv : {};
+         const KT = null !== (kT = lT[0]) && void 0 !== kT ? kT : {};
```

#### 100. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1253` → after: `L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1253) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1253)

```diff
-         Lz++ < 3 && Lv(`WebGPU canvas ${String(ev.format)} ${String(null!==(gv=ev.colorSpace)&&void 0!==gv?gv:"srgb")} alpha ${String(null!==(pv=ev.alphaMode)&&void 0!==pv?pv:"opaque")}`);
+         Lk++ < 3 && dT(`WebGPU canvas ${String(KT.format)} ${String(null!==(OT=KT.colorSpace)&&void 0!==OT?OT:"srgb")} alpha ${String(null!==(yT=KT.alphaMode)&&void 0!==yT?yT:"opaque")}`);
```

#### 101. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1280-L1282` → after: `L1280-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1280-L1282) · [Before (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1280-L1282)

```diff
-         faceCull: "0" === (0, ev.l)("faceCull") ? "0" : "1",
-         adrenoProbe: null !== (vv = (0, ev.l)("adrenoProbe")) && void 0 !== vv ? vv : ""
-       }), Lv("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Wz || "undefined" === typeof window || (Wz = !0, "undefined" !== typeof WebGL2RenderingContext && Yz(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
+         faceCull: "0" === (0, KT.m)("faceCull") ? "0" : "1",
+         adrenoProbe: null !== (TT = (0, KT.m)("adrenoProbe")) && void 0 !== TT ? TT : ""
+       }), dT("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Ck || "undefined" === typeof window || (Ck = !0, "undefined" !== typeof WebGL2RenderingContext && Pk(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1289-L1291` → after: `L1289-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1289-L1291) · [Before (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1289-L1291)

```diff
-       TP(), hP = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.backend) && void 0 !== zv ? zv : null;
-       const hv = `, renderer param ${null!==(Pv=(0,ev.l)("renderer"))&&void 0!==Pv?Pv:"none"}, faceCull ${"0"===eP.faceCull?"off (whole parts)":"on"}, adrenoProbe ${eP.adrenoProbe||"none"}`;
-       Lv(`${(0,xz.b)(vv)}${null===vv?"":hv}`)
+       Cc(), Mc = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.backend) && void 0 !== kT ? kT : null;
+       const lT = `, renderer param ${null!==(cT=(0,KT.m)("renderer"))&&void 0!==cT?cT:"none"}, faceCull ${"0"===Oc.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Oc.adrenoProbe||"none"}`;
+       dT(`${(0,Gk.e)(TT)}${null===TT?"":lT}`)
```

#### 103. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1296-L1297` → after: `L1296-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1296-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1296-L1297) · [Before (L1296-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1296-L1297)

```diff
-         zv = aP(lP, Xz, uz).then((zv => iP(`${Math.round((performance.now()-vv)/1e3)} s after playable${zv?"":", no terrain drawn yet"}`)));
-       (0, Sv.d)(Lv, (async () => {
+         kT = tc(Ac, sk, Tc).then((kT => Qc(`${Math.round((performance.now()-TT)/1e3)} s after playable${kT?"":", no terrain drawn yet"}`)));
+       (0, MT.c)(dT, (async () => {
```

#### 104. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1302-L1303` → after: `L1302-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1302-L1303) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1302-L1303)

```diff
-       const Sv = (0, hv.b)(Pv).then((() => !1));
-       return await (0, hv.b)(zv), Promise.race([vv.then((() => !0)), Sv])
+       const MT = (0, lT.e)(cT).then((() => !1));
+       return await (0, lT.e)(kT), Promise.race([TT.then((() => !0)), MT])
```

#### 105. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1315)

```diff
-       (gP = !0, Lv(`renderer caps ${null!==(vv=eP.caps)&&void 0!==vv?vv:"(not noted)"}; terrain fetch ${null!==(zv=eP.fetch)&&void 0!==zv?zv:"(not noted)"}`), eP.adrenoProbe) && Lv(`adrenoProbe ${eP.adrenoProbe} asked; in force (storage fetch only): ${null!==(Pv=eP.probe)&&void 0 … [truncated]
+       (yc = !0, dT(`renderer caps ${null!==(TT=Oc.caps)&&void 0!==TT?TT:"(not noted)"}; terrain fetch ${null!==(kT=Oc.fetch)&&void 0!==kT?kT:"(not noted)"}`), Oc.adrenoProbe) && dT(`adrenoProbe ${Oc.adrenoProbe} asked; in force (storage fetch only): ${null!==(cT=Oc.probe)&&void 0 … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1324)

```diff
-             Pv.push(`GL ${String(vv.getParameter(vv.VERSION))} | ${String(vv.getParameter(vv.SHADING_LANGUAGE_VERSION))} | ${String(vv.getParameter(vv.VENDOR))} / ${String(vv.getParameter(vv.RENDERER))}`), Pv.push(`GL unmasked ${Sv} / ${ev}`);
+             cT.push(`GL ${String(TT.getParameter(TT.VERSION))} | ${String(TT.getParameter(TT.SHADING_LANGUAGE_VERSION))} | ${String(TT.getParameter(TT.VENDOR))} / ${String(TT.getParameter(TT.RENDERER))}`), cT.push(`GL unmasked ${MT} / ${KT}`);
```

#### 107. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1334)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in vv && gv.push(["MAX_UNIFORM_BLOCK_SIZE", vv.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", vv.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", vv.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", vv.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in TT && OT.push(["MAX_UNIFORM_BLOCK_SIZE", TT.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", TT.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", TT.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", TT.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1338)

```diff
-               return `${Pv} highp float ${hv?`${hv.rangeMin}/${hv.rangeMax}/${hv.precision}`:"?"} int ${Sv?`${Sv.rangeMin}/${Sv.rangeMax}/${Sv.precision}`:"?"}`
+               return `${cT} highp float ${lT?`${lT.rangeMin}/${lT.rangeMax}/${lT.precision}`:"?"} int ${MT?`${MT.rangeMin}/${MT.rangeMax}/${MT.precision}`:"?"}`
```

#### 109. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1340` → after: `L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1340) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1340)

```diff
-             Pv.push(`GL precision ${pv(vv.VERTEX_SHADER,"VS")}, ${pv(vv.FRAGMENT_SHADER,"FS")}`);
+             cT.push(`GL precision ${yT(TT.VERTEX_SHADER,"VS")}, ${yT(TT.FRAGMENT_SHADER,"FS")}`);
```

#### 110. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1342)

```diff
-             return Pv.push(`GL context ${JSON.stringify(dv)} drawingBuffer ${vv.drawingBufferWidth}x${vv.drawingBufferHeight}${"drawingBufferFormat"in vv?` format 0x${Number(vv.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in vv?` ${String(vv.drawingBufferColo … [truncated]
+             return cT.push(`GL context ${JSON.stringify(fT)} drawingBuffer ${TT.drawingBufferWidth}x${TT.drawingBufferHeight}${"drawingBufferFormat"in TT?` format 0x${Number(TT.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in TT?` ${String(TT.drawingBufferColo … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1349` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1349) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1349)

```diff
-           Lv(`programs: ${zv} live of ${Vv.length} linked, ${vv} packed terrain; CPU page copies ${Math.round(xv.shadowBytes/1048576)} MiB (${xv.uncopied} over budget)`)
+           dT(`programs: ${kT} live of ${JT.length} linked, ${TT} packed terrain; CPU page copies ${Math.round(eT.shadowBytes/1048576)} MiB (${eT.uncopied} over budget)`)
```

#### 112. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1362)

```diff
-                 Mz = null, Lv(`WebGPU draw ranges (${vv}): ${zv.length} terrain draws recorded in a second (first ${Nz}; bundles replay without new ones)`);
+                 gk = null, dT(`WebGPU draw ranges (${TT}): ${kT.length} terrain draws recorded in a second (first ${xk}; bundles replay without new ones)`);
```

#### 113. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1368)

```diff
-             if (await (0, Rz.g)(eP, "slotCheck", ["1"], zP, PP), "1" === eP.slotCheck) return void Lv(`slot check: no answer in ${zP} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, ek.h)(Oc, "slotCheck", ["1"], cc, lc), "1" === Oc.slotCheck) return void dT(`slot check: no answer in ${cc} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 114. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1371)

```diff
-         Lv(`check (${vv}) done: bloxdDebug.save() downloads it all`)
+         dT(`check (${TT}) done: bloxdDebug.save() downloads it all`)
```

#### 115. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1373)

```diff
-         Lv(`check (${vv}) failed: ${String(zv)}`)
+         dT(`check (${TT}) failed: ${String(kT)}`)
```

#### 116. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1417-L1418` → after: `L1417-L1418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1417-L1418) · [Before (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1417-L1418)

```diff
-       const Sv = "webgpu" === hP ? [`terrain ${vv(zv.draws)} draws ${vv(zv.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((vv => Pv[vv].draws > 0)).map((zv => `${zv} ${vv(Pv[zv].draws)} draws ${vv(Pv[zv].faces)} faces a frame`));
-       Lv(`${dP} frames: ${Sv.join(", ")||"no draws"}; uploaded ${Math.round(hv.buffer/1024)} KiB to buffers, ${Math.round(hv.texture/1024)} KiB to data textures`), dP = 0
+       const MT = "webgpu" === Mc ? [`terrain ${TT(kT.draws)} draws ${TT(kT.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((TT => cT[TT].draws > 0)).map((kT => `${kT} ${TT(cT[kT].draws)} draws ${TT(cT[kT].faces)} faces a frame`));
+       dT(`${xc} frames: ${MT.join(", ")||"no draws"}; uploaded ${Math.round(lT.buffer/1024)} KiB to buffers, ${Math.round(lT.texture/1024)} KiB to data textures`), xc = 0
```

#### 117. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1421)

```diff
-   4456: (vv, zv, Pv) => {
+   4688: (TT, kT, cT) => {
```

#### 118. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1424-L1425` → after: `L1424-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1424-L1425) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1424-L1425)

```diff
-       const zv = vv.adapter ? `${vv.adapter.vendor}/${vv.adapter.architecture}` : "none";
-       return `backend ${vv.backend}: reason ${vv.reason}, source ${vv.source}, adapter ${zv}`
+       const kT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
+       return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${kT}`
```

#### 119. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderDebug.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderDebug.js#L1428)

```diff
-       b: () => hv
+       e: () => lT
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (qepqb8.0352199c → bcgkc.38229551)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 1. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   42707: (vv, zv, Pv) => {
+   42812: (TT, kT, cT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L8-L18)

```diff
-     var hv = Pv(3466),
-       Sv = Pv(635),
-       ev = Pv(101),
-       gv = Pv(4542),
-       pv = Pv(40038),
-       dv = Pv(4535),
-       Nv = Pv(40078),
-       lv = Pv(39898),
-       Tv = Pv(40244),
-       Wv = Pv(2682),
-       wv = Pv(4264);
+     var lT = cT(3679),
+       MT = cT(636),
+       KT = cT(150),
+       OT = cT(4769),
+       yT = cT(40369),
+       fT = cT(4761),
+       xT = cT(40426),
+       IT = cT(40215),
+       AT = cT(40569),
+       CT = cT(2853),
+       jT = cT(4491);
```

#### 3. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L31-L32)

```diff
-             const [Pv, hv] = vv.split(":"), Sv = null !== (zv = av.get(Pv.slice(-1))) && void 0 !== zv ? zv : "";
-             return `gl link failed: program row ${parseInt(Pv)}${Sv}, read ${hv} ms after issue`
+             const [cT, lT] = TT.split(":"), MT = null !== (kT = vT.get(cT.slice(-1))) && void 0 !== kT ? kT : "";
+             return `gl link failed: program row ${parseInt(cT)}${MT}, read ${lT} ms after issue`
```

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L38-L41` → after: `L38-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L38-L41) · [Before (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L38-L41)

```diff
-         return void 0 === vv || vv === this.summary || zv - this.summaryAtMs < Pv ? null : (this.summary = vv, this.summaries++, this.summaryAtMs = zv, `gl links: ${vv}`)
-       }
-     }
-     var Cv = Pv(4456);
+         return void 0 === TT || TT === this.summary || kT - this.summaryAtMs < cT ? null : (this.summary = TT, this.summaries++, this.summaryAtMs = kT, `gl links: ${TT}`)
+       }
+     }
+     var hT = cT(4688);
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L80)

```diff
-         return this.logged >= 20 || this.seen.has(vv) ? (this.unlogged++, null) : (this.seen.add(vv), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${vv}` : vv)
+         return this.logged >= 20 || this.seen.has(TT) ? (this.unlogged++, null) : (this.seen.add(TT), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${TT}` : TT)
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L89)

```diff
-       (0, Wv.i)("renderlite", vv)
+       (0, CT.k)("renderlite", TT)
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L93)

```diff
-         this.frames = new iv, this.events = new Gv, this.links = new sv, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = ( … [truncated]
+         this.frames = new NT, this.events = new ST, this.links = new tT, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L95)

```diff
-         }, this.MT = () => {
+         }, this.UA = () => {
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L98)

```diff
-             Sv = (0, lv.h)(),
+             MT = (0, IT.g)(),
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L100)

```diff
-           if (this.logLinks(ev), null === Pv || Pv.isStopped || !0 !== (null === Sv || void 0 === Sv ? void 0 : Sv.isCoreRunning)) return void this.restartWindow(ev);
+           if (this.logLinks(KT), this.logGrid(), null === cT || cT.isStopped || !0 !== (null === MT || void 0 === MT ? void 0 : MT.isCoreRunning)) return void this.restartWindow(KT);
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L107-L108)

```diff
-           const dv = Pv.headerWord(gv.A.GpuTimed),
-             Tv = Pv.headerWord(gv.A.GpuFrameUs),
+           const fT = cT.headerWord(OT.B.GpuTimed),
+             AT = cT.headerWord(OT.B.GpuFrameUs),
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L114)

```diff
-           const wv = null !== (vv = null === (zv = (0, Nv.G)((0, hv.C)())) || void 0 === zv ? void 0 : zv.PPv()) && void 0 !== vv ? vv : 0;
+           const jT = null !== (TT = null === (kT = (0, xT.D)((0, lT.x)())) || void 0 === kT ? void 0 : kT.hcT()) && void 0 !== TT ? TT : 0;
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L117-L118` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118)

```diff
-               hv = [`${Math.round(Pv)}s: ${vv.drawn} drawn (${(vv.drawn/Pv).toFixed(1)}/s), ${vv.paced} paced, ${vv.frames-vv.drawn-vv.paced} skipped`, `gap max ${Math.round(vv.gapMaxMs)} ms, ${vv.longGaps} over 50 ms`, `render cpu ${vv.drawn?(vv.renderUs/vv.drawn/1e3).toFixed(2) … [truncated]
-             null !== zv.gpu && hv.push(`gpu ${zv.gpu.timed?(zv.gpu.us/zv.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${zv.gpu.timed} timed`);
+               lT = [`${Math.round(cT)}s: ${TT.drawn} drawn (${(TT.drawn/cT).toFixed(1)}/s), ${TT.paced} paced, ${TT.frames-TT.drawn-TT.paced} skipped`, `gap max ${Math.round(TT.gapMaxMs)} ms, ${TT.longGaps} over 50 ms`, `render cpu ${TT.drawn?(TT.renderUs/TT.drawn/1e3).toFixed(2) … [truncated]
+             null !== kT.gpu && lT.push(`gpu ${kT.gpu.timed?(kT.gpu.us/kT.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${kT.gpu.timed} timed`);
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L120-L122` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122)

```diff
-             hv.push(null === Sv ? "draws none yet" : `draws ${(0,pv.b)(Sv)} (terrain ${Sv.terrainOpaque}+${Sv.terrainTransparent}, pack ${Sv.terrainPack}, meshes ${Sv.regular+Sv.thin+Sv.line+Sv.text}, sky ${Sv.earthSky+Sv.skyMeshes}, particles ${Sv.particles})`);
-             const ev = null === zv.gpuBytesBefore ? "" : ` (${zv.gpuBytes>=zv.gpuBytesBefore?"+":"-"}${cv(Math.abs(zv.gpuBytes-zv.gpuBytesBefore))})`;
-             return hv.push(`gpu mem ${cv(zv.gpuBytes)} MiB${ev}`), hv.push(`pending ${zv.pending}`, "terrain " + (zv.terrainDrawn ? "drawn" : "not drawn yet")), zv.eventsUnlogged > 0 && hv.push(`${zv.eventsUnlogged} events unlogged`), hv.join("; ")
+             lT.push(null === MT ? "draws none yet" : `draws ${(0,yT.d)(MT)} (terrain ${MT.terrainOpaque}+${MT.terrainTransparent}, pack ${MT.terrainPack}, meshes ${MT.regular+MT.thin+MT.line+MT.text}, sky ${MT.earthSky+MT.skyMeshes}, particles ${MT.particles})`);
+             const KT = null === kT.gpuBytesBefore ? "" : ` (${kT.gpuBytes>=kT.gpuBytesBefore?"+":"-"}${QT(Math.abs(kT.gpuBytes-kT.gpuBytesBefore))})`;
+             return lT.push(`gpu mem ${QT(kT.gpuBytes)} MiB${KT}`), lT.push(`pending ${kT.pending}`, "terrain " + (kT.terrainDrawn ? "drawn" : "not drawn yet")), kT.eventsUnlogged > 0 && lT.push(`${kT.eventsUnlogged} events unlogged`), lT.join("; ")
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L126)

```diff
-             census: (0, pv.c)(Sv.api),
+             census: (0, yT.g)(MT.api),
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L129-L130` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L129-L130) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L129-L130)

```diff
-             pending: Pv.headerWord(gv.A.RenderPending),
-             terrainDrawn: 0 !== (Pv.headerWord(gv.A.LoadSteps) & gv.I.TerrainDrawn),
+             pending: cT.headerWord(OT.B.RenderPending),
+             terrainDrawn: 0 !== (cT.headerWord(OT.B.LoadSteps) & OT.H.TerrainDrawn),
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L133)

```diff
-         }, mv(`${(0,Cv.b)(vv)}; client ${Sv.m.client} (${Sv.m.reason})`), setInterval(this.MT, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+         }, DT(`${(0,hT.e)(TT)}; client ${MT.k.client} (${MT.k.reason})`), setInterval(this.UA, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L136)

```diff
-         this.session = vv, this.frames.frame(zv, Pv, "drawn" === Pv ? vv.headerWord(gv.A.RenderUs) : 0)
+         this.session = TT, this.frames.frame(kT, cT, "drawn" === cT ? TT.headerWord(OT.B.RenderUs) : 0)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L145)

```diff
-           if (hv >= gv.f.RenderDeviceLost && hv <= gv.f.RenderSerialLinks) this.event(`render error ${(0,dv.qe)(hv)}${null!==(zv=null===(Pv=(0,Tv.c)(hv,Sv))||void 0===Pv?void 0:Pv.words)&&void 0!==zv?zv:""} (detail ${Sv})`)
+           if (lT >= OT.e.RenderDeviceLost && lT <= OT.e.RenderSerialLinks) this.event(`render error ${(0,fT.Vd)(lT)}${null!==(kT=null===(cT=(0,AT.c)(lT,MT))||void 0===cT?void 0:cT.words)&&void 0!==kT?kT:""} (detail ${MT})`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L149)

```diff
-         this.event(`render reload: ${vv?"webgpu":"gl"} ${Pv}, losses ${zv}${void 0===hv?"":`: ${hv}`}`)
+         this.event(`render reload: ${TT?"webgpu":"gl"} ${cT}, losses ${kT}${void 0===lT?"":`: ${lT}`}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L157-L159` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159)

```diff
-         const Sv = null !== hv && 0 !== hv.lastError ? `, last error ${(0,dv.qe)(hv.lastError)} (detail ${hv.lastErrorDetail})` : "",
-           ev = Pv instanceof Error ? `${Pv.name}: ${Pv.message}` : null === Pv || void 0 === Pv ? "" : String(Pv);
-         this.event(`core stopped at ${zv}${Sv}${ev&&`: ${ev}`}`)
+         const MT = null !== lT && 0 !== lT.lastError ? `, last error ${(0,fT.Vd)(lT.lastError)} (detail ${lT.lastErrorDetail})` : "",
+           KT = cT instanceof Error ? `${cT.name}: ${cT.message}` : null === cT || void 0 === cT ? "" : String(cT);
+         this.event(`core stopped at ${kT}${MT}${KT&&`: ${KT}`}`)
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L168)

```diff
-         null === zv || zv.isStopped ? this.sampled = null : (this.sampled = zv, this.gpuTimed = zv.headerWord(gv.A.GpuTimed), this.gpuUs = zv.headerWord(gv.A.GpuFrameUs))
+         null === kT || kT.isStopped ? this.sampled = null : (this.sampled = kT, this.gpuTimed = kT.headerWord(OT.B.GpuTimed), this.gpuUs = kT.headerWord(OT.B.GpuFrameUs))
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L181-L183` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L186-L188) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L181-L183)

```diff
-           hv = (0, ev.s)(),
-           Sv = void 0 === (null === Pv || void 0 === Pv ? void 0 : Pv.parallelCompile) ? "" : `; parallel compile ${Pv.parallelCompile}`;
-         mv(`renderer gl ${hv?`${hv.vendor} / ${hv.renderer}`:"(not read)"}; terrain fetch ${null!==(vv=null===Pv||void 0===Pv?void 0:Pv.fetch)&&void 0!==vv?vv:"(not noted)"}${Sv}`), mv(`renderer caps ${null!==(zv=null===Pv||void 0===Pv?void 0:Pv.caps)&&void 0!==zv?zv:"(not noted) … [truncated]
+           lT = (0, KT.q)(),
+           MT = void 0 === (null === cT || void 0 === cT ? void 0 : cT.parallelCompile) ? "" : `; parallel compile ${cT.parallelCompile}`;
+         DT(`renderer gl ${lT?`${lT.vendor} / ${lT.renderer}`:"(not read)"}; terrain fetch ${null!==(TT=null===cT||void 0===cT?void 0:cT.fetch)&&void 0!==TT?TT:"(not noted)"}${MT}`), DT(`renderer caps ${null!==(kT=null===cT||void 0===cT?void 0:cT.caps)&&void 0!==kT?kT:"(not noted) … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L189` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L194) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L189)

```diff
-       return (0, wv.f)(), fv ??= new jv(vv), fv
+       return (0, jT.g)(), FT ??= new aT(TT), FT
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L192` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L197) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L192)

```diff
-   4456: (vv, zv, Pv) => {
+   4688: (TT, kT, cT) => {
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L195-L196` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L200-L201) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L195-L196)

```diff
-       const zv = vv.adapter ? `${vv.adapter.vendor}/${vv.adapter.architecture}` : "none";
-       return `backend ${vv.backend}: reason ${vv.reason}, source ${vv.source}, adapter ${zv}`
+       const kT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
+       return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${kT}`
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L199` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L204) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L199)

```diff
-       b: () => hv
+       e: () => lT
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L202` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L207) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L202)

```diff
-   40038: (vv, zv, Pv) => {
+   40369: (TT, kT, cT) => {
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L204-L206` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L209-L211) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L204-L206)

```diff
-       b: () => gv,
-       c: () => ev,
-       g: () => pv
+       d: () => OT,
+       g: () => KT,
+       k: () => yT
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L208-L213` → after: `L213-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L213-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L213-L218) · [Before (L208-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L208-L213)

```diff
-     var hv = Pv(39889),
-       Sv = Pv(39898);
- 
-     function ev(vv) {
-       if (vv.queries.drawCensus() < hv.zb.BYTES) return null;
-       const zv = vv.memoryData(vv.scratch(), hv.zb.BYTES, 4, "the draw census");
+     var lT = cT(40204),
+       MT = cT(40215);
+ 
+     function KT(TT) {
+       if (TT.queries.drawCensus() < lT.Kb.BYTES) return null;
+       const kT = TT.memoryData(TT.scratch(), lT.Kb.BYTES, 4, "the draw census");
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L215-L226` → after: `L220-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L220-L231) · [Before (L215-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L215-L226)

```diff
-         terrainOpaque: hv.zb.terrainOpaque(zv, 0),
-         terrainTransparent: hv.zb.terrainTransparent(zv, 0),
-         terrainPack: hv.zb.terrainPack(zv, 0),
-         earthSky: hv.zb.earthSky(zv, 0),
-         skyMeshes: hv.zb.skyMeshes(zv, 0),
-         regular: hv.zb.regular(zv, 0),
-         thin: hv.zb.thin(zv, 0),
-         line: hv.zb.line(zv, 0),
-         text: hv.zb.text(zv, 0),
-         particles: hv.zb.particles(zv, 0),
-         terrainParts: hv.zb.terrainParts(zv, 0),
-         terrainCompiling: hv.zb.terrainCompiling(zv, 0)
+         terrainOpaque: lT.Kb.terrainOpaque(kT, 0),
+         terrainTransparent: lT.Kb.terrainTransparent(kT, 0),
+         terrainPack: lT.Kb.terrainPack(kT, 0),
+         earthSky: lT.Kb.earthSky(kT, 0),
+         skyMeshes: lT.Kb.skyMeshes(kT, 0),
+         regular: lT.Kb.regular(kT, 0),
+         thin: lT.Kb.thin(kT, 0),
+         line: lT.Kb.line(kT, 0),
+         text: lT.Kb.text(kT, 0),
+         particles: lT.Kb.particles(kT, 0),
+         terrainParts: lT.Kb.terrainParts(kT, 0),
+         terrainCompiling: lT.Kb.terrainCompiling(kT, 0)
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L246` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/renderLite.js#L251) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/renderLite.js#L246)

```diff
-       const vv = (0, Sv.h)();
+       const TT = (0, MT.g)();
```
