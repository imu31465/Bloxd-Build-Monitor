# Changed — Bundle Modifications Report (Part 060 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `60 / 65` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 059](part-059.md) · [Part 061 →](part-061.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (955 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 847. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7903` → after: `L7991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L7991) · [Before (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7903)

```diff
-                   AL === gD && (0, ID.k)()
+                   dx === Yp && (0, yp.j)()
```

#### 848. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7914` → after: `L8002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8002) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7914)

```diff
-               YL = !0, performance.mark(kK), (0, es.t)("render") && Promise.all([wD.e(77), wD.e(48)]).then((() => wD(4710))).then((DD => {
+               DL = !0, performance.mark(sI), (0, Vo.r)("render") && Promise.all([cp.e(78), cp.e(49)]).then((() => cp(4776))).then((pp => {
```

#### 849. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7924-L7926` → after: `L8012-L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8012-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8012-L8018) · [Before (L7924-L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7924-L7926)

```diff
-               null !== AD && (0, ID.o)("wasm_view_links", RD, (0, rz.ib)(AD));
-               if (iL && cD !== kz.W.Drawn) {
-                 const zD = cD === kz.W.HeldBackstop ? "held_draws" : "long",
+               null !== Ap && (0, yp.n)("wasm_view_links", Dp, (0, wi.pb)(Ap));
+               const Pp = null === UL || null === WL ? 0 : Math.max(0, WL - UL),
+                 Wp = null === UL ? 0 : Math.max(0, Dp - UL),
+                 Up = Zx ? pp.readFirstViewWait(Pp, Wp) : null;
+               null !== Up && (0, yp.l)(Up);
+               if (Zx && Lp !== Ki.fb.Drawn) {
+                 const ip = Lp === Ki.fb.HeldBackstop ? "held_draws" : "long",
```

#### 850. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7930` → after: `L8022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8022) · [Before (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7930)

```diff
-                 if (console.warn(`${SK} playable at ${RD} ms on the first view's ${zD} backstop, ${wD}: it wasn't drawn whole in time`), (0, ID.o)("wasm_view_backstop", RD, `${zD}:${wD}`), "long" === zD) {
+                 if (console.warn(`${nI} playable at ${Dp} ms on the first view's ${ip} backstop, ${cp}: it wasn't drawn whole in time`), (0, yp.n)("wasm_view_backstop", Dp, `${ip}:${cp}`), "long" === ip) {
```

#### 851. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7932` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8024) · [Before (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7932)

```diff
-                   const zD = null !== (UD = null === (fD = ML) || void 0 === fD ? void 0 : fD.game) && void 0 !== UD ? UD : "";
+                   const ip = null !== (wp = null === (vp = Mx) || void 0 === vp ? void 0 : vp.game) && void 0 !== wp ? wp : "";
```

#### 852. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7938` → after: `L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8030) · [Before (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7938)

```diff
-                     (0, Qw.reportFirstViewNoTerrain)(zD, wD, pD, Ir), (0, Uz.u)("noTerrain")
+                     (0, Qc.reportFirstViewNoTerrain)(ip, cp, Op, jS), (0, ui.q)("noTerrain")
```

#### 853. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7941-L7944` → after: `L8033-L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8033-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8033-L8036) · [Before (L7941-L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7941-L7944)

```diff
-               } else console.info(`${SK} playable at ${RD} ms${iL?"":" (no renderer)"}`);
-               setTimeout(yL, 0), (0, nz.g)().catch((DD => {
-                 console.error(`${SK} item sprites didn't load, so item particles show the missing texture`, DD)
-               })), Yp.d.warm()
+               } else console.info(`${nI} playable at ${Dp} ms${Zx?"":" (no renderer)"}`);
+               setTimeout(pL, 0), (0, qi.e)().catch((pp => {
+                 console.error(`${nI} item sprites didn't load, so item particles show the missing texture`, pp)
+               })), Wo.b.warm()
```

#### 854. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7946` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8038) · [Before (L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7946)

```diff
-           (0, pw.M)(DD, {
+           (0, yc.J)(pp, {
```

#### 855. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7953` → after: `L8045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8045) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7953)

```diff
-               (0, Up.e)(zD)
+               (0, kO.b)(ip)
```

#### 856. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7955-L7956` → after: `L8047-L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8047-L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8047-L8048) · [Before (L7955-L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7955-L7956)

```diff
-               if ((0, ez.d)(BD)) {
-                 DD.crashOn(pw.k, BD);
+               if ((0, pc.f)(Up)) {
+                 pp.crashOn(yc.i, Up);
```

#### 857. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7959` → after: `L8051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8051) · [Before (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7959)

```diff
-               console.error(`${Ip} an input action listener threw`, BD)
+               console.error(`${RO} an input action listener threw`, Up)
```

#### 858. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7962` → after: `L8054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8054) · [Before (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7962)

```diff
-           }(DD), sD && (0, Cz.c)();
+           }(pp), op && (0, Ni.d)();
```

#### 859. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7971` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8063) · [Before (L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7971)

```diff
-       console.error(`${SK} a frame-start listener threw`, DD)
+       console.error(`${nI} a frame-start listener threw`, pp)
```

#### 860. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7980` → after: `L8072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8072) · [Before (L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7980)

```diff
-       console.error(`${SK} a before-frame listener threw`, DD)
+       console.error(`${nI} a before-frame listener threw`, pp)
```

#### 861. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7984-L7985` → after: `L8076-L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8076-L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8076-L8077) · [Before (L7984-L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7984-L7985)

```diff
-       const zD = (0, QD.i)(),
-         wD = (0, QD.t)(),
+       const ip = (0, lp.k)(),
+         cp = (0, lp.u)(),
```

#### 862. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7988` → after: `L8080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8080) · [Before (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L7988)

```diff
-         cause: (0, Sw.k)(DD.headerWord(mz.G.LoadSteps), pD),
+         cause: (0, Gc.i)(pp.headerWord(Vi.x.LoadSteps), Op),
```

#### 863. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8003-L8004` → after: `L8095-L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8095-L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8095-L8096) · [Before (L8003-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8003-L8004)

```diff
-       if (null === Dc && mg() && (Dc = performance.now()), null === fL && null === AL) return;
-       null === Dc || zc || (zc = !0, (0, ID.o)("wasm_startup_loaded", Dc));
+       if (null === WL && SD() && (WL = performance.now()), null === dx || 0 === (pp.headerWord(Vi.x.LoadSteps) & Vi.I.PlayerBound) ? UL = null : UL ??= performance.now(), null === ux && null === dx) return;
+       null === WL || yL || (yL = !0, (0, yp.n)("wasm_startup_loaded", WL));
```

#### 864. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8006-L8007` → after: `L8098-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8098-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8098-L8099) · [Before (L8006-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8006-L8007)

```diff
-       null !== AL ? wD = -1 : !0 === (null === (zD = PL) || void 0 === zD ? void 0 : zD.activated) && (wD = ~mz.V.TerrainDrawn);
-       const pD = DD.headerWord(mz.G.LoadSteps) & wD & ~qL;
+       null !== dx ? cp = -1 : !0 === (null === (ip = bx) || void 0 === ip ? void 0 : ip.activated) && (cp = ~Vi.L.TerrainDrawn);
+       const Op = pp.headerWord(Vi.x.LoadSteps) & cp & ~PL;
```

#### 865. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8011` → after: `L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8103) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8011)

```diff
-       for (const [KD, rD] of Object.entries(Zg)) 0 !== (pD & mz.V[KD]) && (0, ID.o)(rD, sD)
+       for (const [Ip, Sp] of Object.entries(OD)) 0 !== (Op & Vi.L[Ip]) && (0, yp.n)(Sp, op)
```

#### 866. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8040` → after: `L8132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8132) · [Before (L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8040)

```diff
-       Ac = !0, Kc.stop(), (0, as.b)(), Ys = null, sg(), (0, ED.G)().unlockPointer(), (0, ED.C)(null), null === (DD = dr) || void 0 === DD || DD(), dr = null, null === (zD = (0, QD.t)()) || void 0 === zD || zD.followCursorAim(null), (0, Cz.z)(), (0, QD.f)(), fr.stop(), null === (w … [truncated]
+       mL = !0, HL.stop(), (0, iI.endLookDebugTake)(), SI = null, tY(), (0, Xp.H)().unlockPointer(), (0, Xp.D)(null), null === (pp = aS) || void 0 === pp || pp(), aS = null, null === (ip = (0, lp.u)()) || void 0 === ip || ip.followCursorAim(null), (0, Ni.H)(), (0, lp.i)(), uS.stop … [truncated]
```

#### 867. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8042` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8134) · [Before (L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8042)

```diff
-       Pr = null, hD && (hD.stop(), zR(hD)), null === (AD = Zr) || void 0 === AD || AD.dispose(), Zr = null, null === (UD = yr) || void 0 === UD || UD.dispose(), yr = null, Sr = null, null === (fD = lr) || void 0 === fD || fD(), lr = null, null === (ID = br) || void 0 === ID || ID … [truncated]
+       BS = null, vp && (vp.stop(), tD(vp)), null === (Ap = ZS) || void 0 === Ap || Ap.dispose(), ZS = null, null === (Pp = zS) || void 0 === Pp || Pp.dispose(), zS = null, nS = null, null === (Wp = gS) || void 0 === Wp || Wp(), gS = null, null === (yp = bS) || void 0 === yp || yp … [truncated]
```

#### 868. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8048-L8049` → after: `L8140-L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8140-L8141) · [Before (L8048-L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8048-L8049)

```diff
-         console.warn(`${SK} the sky's images didn't release`, MD)
-       }(0, Hp.f)(null), null === (GD = Lr) || void 0 === GD || GD.pagePreviews().endSession(null === (0, Lz.m)())
+         console.warn(`${nI} the sky's images didn't release`, Hp)
+       }(0, yo.h)(null), null === (wp = wS) || void 0 === wp || wp.pagePreviews().endSession(null === (0, vi.r)())
```

#### 869. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8054-L8057` → after: `L8146-L8149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8146-L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8146-L8149) · [Before (L8054-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8054-L8057)

```diff
-       const sD = null !== (wD = null === (pD = Pr) || void 0 === pD ? void 0 : pD.details()) && void 0 !== wD ? wD : {},
-         KD = DD.site === lK || DD.site === WK || DD.site === Qw.RENDER_RELOAD_SITE || DD.site === NK ? DD.error instanceof WebAssembly.RuntimeError || DD.error instanceof Hz.d : !(0, ww.o)(DD.error) && (0, pw.J)(DD);
-       KD && DD.error instanceof Error && (0, Lz.T)(DD.error);
-       const rD = KD || DD.site === pw.w ? (0, Qw.readTrap)(DD.error) : null,
+       const op = null !== (cp = null === (Op = BS) || void 0 === Op ? void 0 : Op.details()) && void 0 !== cp ? cp : {},
+         Ip = pp.site === gI || pp.site === GI || pp.site === Qc.RENDER_RELOAD_SITE || pp.site === rI ? pp.error instanceof WebAssembly.RuntimeError || pp.error instanceof Lc.b : !(0, Pc.w)(pp.error) && (0, yc.C)(pp);
+       Ip && pp.error instanceof Error && (0, vi.Y)(pp.error);
+       const Sp = Ip || pp.site === yc.p ? (0, Qc.readTrap)(pp.error) : null,
```

#### 870. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8059-L8060` → after: `L8151-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8151-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8151-L8152) · [Before (L8059-L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8059-L8060)

```diff
-         cD = (0, Mw.o)(),
-         gD = null === Cr ? (0, vp.r)(function() {
+         Lp = (0, Cc.p)(),
+         Yp = null === NS ? (0, Do.t)(function() {
```

#### 871. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8062` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8154) · [Before (L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8062)

```diff
-             return (0, Lz.r)().buffer.byteLength
+             return (0, vi.z)().buffer.byteLength
```

#### 872. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8069` → after: `L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8161) · [Before (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8069)

```diff
-       if (RD && ((0, fz.t)("oom"), (0, fz.s)("decline"), Rc = !0), ug(), (0, Bs.b)()) return console.warn(`${SK} the session stopped at ${DD.site} as the page reloads`, DD.error), void((0, ww.o)(DD.error) || (null === (AD = DD.header) || void 0 === AD ? void 0 : AD.lastError) === … [truncated]
+       if (Dp && ((0, ji.w)("oom"), (0, ji.v)("decline"), kL = !0), DD(), (0, Qo.b)()) return console.warn(`${nI} the session stopped at ${pp.site} as the page reloads`, pp.error), void((0, Pc.w)(pp.error) || (null === (Ap = pp.header) || void 0 === Ap ? void 0 : Ap.lastError) === … [truncated]
```

#### 873. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8081` → after: `L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8173) · [Before (L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8081)

```diff
-       return !(wD - KL[DD] < YK) && (KL[DD] = wD, console.warn(`${SK} ${zD}`), !0)
+       return !(cp - yx[pp] < SS) && (yx[pp] = cp, console.warn(`${nI} ${ip}`), !0)
```

#### 874. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8090` → after: `L8182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8182) · [Before (L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8090)

```diff
-       KD !== rL && tg("dropped", `${KD} records dropped so far (input ${zD.dropped}, options ${sD}, net ${wD.dropped}, worker ${pD.dropped}, net-out ${LL})`) && (rL = KD)
+       Ip !== Ux && PD("dropped", `${Ip} records dropped so far (input ${ip.dropped}, options ${op}, net ${cp.dropped}, worker ${Op.dropped}, net-out ${wx})`) && (Ux = Ip)
```

#### 875. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8095` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8187) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8095)

```diff
-       const wD = (0, xw.c)();
+       const cp = (0, fc.e)();
```

#### 876. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8097` → after: `L8189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8189) · [Before (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8097)

```diff
-       const pD = (0, jw.l)(wD);
+       const Op = (0, nc.s)(cp);
```

#### 877. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8100` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8192) · [Before (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8100)

```diff
-         horizontal: Math.min(pD.horizontal, null !== (DD = null === (zD = Pr) || void 0 === zD ? void 0 : zD.shedDistanceInUse()) && void 0 !== DD ? DD : 1 / 0)
+         horizontal: Math.min(Op.horizontal, null !== (pp = null === (ip = BS) || void 0 === ip ? void 0 : ip.shedDistanceInUse()) && void 0 !== pp ? pp : 1 / 0)
```

#### 878. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8109` → after: `L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8201) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8109)

```diff
-         renderDistance: null !== (zD = null === (wD = Yg()) || void 0 === wD ? void 0 : wD.horizontal) && void 0 !== zD ? zD : null
+         renderDistance: null !== (ip = null === (cp = yD()) || void 0 === cp ? void 0 : cp.horizontal) && void 0 !== ip ? ip : null
```

#### 879. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8114` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8206) · [Before (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8114)

```diff
-       IL = DD, (0, Tw.N)()
+       jx = pp, (0, bc.M)()
```

#### 880. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8122-L8123` → after: `L8214-L8215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8214-L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8214-L8215) · [Before (L8122-L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8122-L8123)

```diff
-         renderDistance: null !== (zD = null === pD || void 0 === pD ? void 0 : pD.horizontal) && void 0 !== zD ? zD : null,
-         renderDistanceVertical: null !== (wD = null === pD || void 0 === pD ? void 0 : pD.vertical) && void 0 !== wD ? wD : null,
+         renderDistance: null !== (ip = null === Op || void 0 === Op ? void 0 : Op.horizontal) && void 0 !== ip ? ip : null,
+         renderDistanceVertical: null !== (cp = null === Op || void 0 === Op ? void 0 : Op.vertical) && void 0 !== cp ? cp : null,
```

#### 881. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8126` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8218) · [Before (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8126)

```diff
-         renderBackend: (0, Bs.A)(),
+         renderBackend: (0, Qo.C)(),
```

#### 882. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8128` → after: `L8220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8220) · [Before (L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8128)

```diff
-         ...(0, bw.c)(IL)
+         ...(0, hc.d)(jx)
```

#### 883. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8133` → after: `L8225-L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8225-L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8225-L8241) · [Before (L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8133)

```diff
-       console.info(`${SK} wasm memory at the session's end`, DD.details())
+       var ip;
+       console.info(`${nI} wasm memory at the session's end`, pp.details());
+       const {
+         wasmMainMiB: cp,
+         wasmWorkersMiB: Op,
+         peakStoredChunks: op
+       } = pp.pageKillSnapshot(), Ip = navigator.deviceMemory;
+       (0, Uc.logClientMeasurement)("wasm_memory_end", {
+         wasmMainMiB: cp,
+         wasmWorkersMiB: Op,
+         peakStoredChunks: op
+       }, {
+         client: "wasm",
+         renderBackend: null !== (ip = (0, Qo.C)()) && void 0 !== ip ? ip : "none",
+         os: (0, ac.getOperatingSystem)(),
+         deviceMemory: String(null !== Ip && void 0 !== Ip ? Ip : "unreported")
+ ... (1 more added lines; see GitHub link above)
```

#### 884. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8140` → after: `L8248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8248) · [Before (L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8140)

```diff
-         DD.crash(pw.y, wD)
+         pp.crash(yc.s, cp)
```

#### 885. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8145` → after: `L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8253) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8145)

```diff
-       return Xr ??= wD.e(71).then((() => wD(50822))).catch((DD => {
+       return QS ??= cp.e(72).then((() => cp(51244))).catch((pp => {
```

#### 886. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8190` → after: `L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8298) · [Before (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8190)

```diff
-         const rD = await (0, Tp.k)(DD, {
+         const Sp = await (0, rO.i)(pp, {
```

#### 887. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8193` → after: `L8301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8301) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8193)

```diff
-             pD(), await Promise.all([(0, Qw.flushCrashReports)(oD.d), null === KD || void 0 === KD ? void 0 : KD()])
+             Op(), await Promise.all([(0, Qc.flushCrashReports)(ii.b), null === Ip || void 0 === Ip ? void 0 : Ip()])
```

#### 888. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8195` → after: `L8303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8303) · [Before (L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8195)

```diff
-           reload: oD.j
+           reload: ii.i
```

#### 889. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8209` → after: `L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8317) · [Before (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8209)

```diff
-         } = await wD.e(271).then((() => wD(40972)));
+         } = await cp.e(276).then((() => cp(41273)));
```

#### 890. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8237` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8345) · [Before (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8237)

```diff
-       fR || (fR = !0, hc("play", mD), (0, UD.o)(new TR), LD.gameBridge.attach(jD), QR().catch((() => {})), (0, QD.w)((DD => {
+       ED || (ED = !0, XL("play", Kp), (0, Pp.o)(new rD), xp.gameBridge.attach(hp), hD().catch((() => {})), (0, lp.y)((pp => {
```

#### 891. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8247-L8249` → after: `L8355-L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8355-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8355-L8357) · [Before (L8247-L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8247-L8249)

```diff
-       booted: KD.n.INITIALISE_NOA,
-       texturesIn: KD.n.REGISTRATION,
-       modelsIn: KD.n.SETUP_LIFEFORMS
+       booted: Ip.k.INITIALISE_NOA,
+       texturesIn: Ip.k.REGISTRATION,
+       modelsIn: Ip.k.SETUP_LIFEFORMS
```

#### 892. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8253` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8361) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8253)

```diff
-       cD.l.KG("matchmakeAndPlayStepCompleted", {
+       Lp.m.GA("matchmakeAndPlayStepCompleted", {
```

#### 893. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8264` → after: `L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8372) · [Before (L8264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8264)

```diff
-       } = (0, UD.c)();
+       } = (0, Pp.d)();
```

#### 894. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8266` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8374) · [Before (L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8266)

```diff
-       cD.l.KG("unwantedLeftGame", {
+       Lp.m.GA("unwantedLeftGame", {
```

#### 895. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8280` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8388) · [Before (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8280)

```diff
-       } : "gameOrPluginKick" === DD.name ? DD.reason : `You have disconnected from the server.\n${DD.reason}`
+       } : "gameOrPluginKick" === pp.name ? pp.reason : `You have disconnected from the server.\n${pp.reason}`
```

#### 896. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8285` → after: `L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8393) · [Before (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8285)

```diff
-       pD = (0, gD.z)(DD, zD), Promise.resolve().then((() => wD(1511))).then((DD => {
+       Op = (0, Yp.E)(pp, ip), Promise.resolve().then((() => cp(1538))).then((pp => {
```

#### 897. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8296` → after: `L8404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8404) · [Before (L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8296)

```diff
-       return IR ??= Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(89), wD.e(86), wD.e(269), wD.e(189), wD.e(223), wD.e(247), wD.e(218), wD.e(46)]).then((() => wD(40914))).then((DD => {
+       return XD ??= Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(90), cp.e(87), cp.e(273), cp.e(191), cp.e(228), cp.e(252), cp.e(275), cp.e(47)]).then((() => cp(41212))).then((pp => {
```

#### 898. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8303` → after: `L8411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8411) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8303)

```diff
-                 null === zD || zD.isStopped || Ac ? console.warn(`${SK} the play sources threw as they attached, after the client stopped`, DD) : vg({
+                 null === ip || ip.isStopped || mL ? console.warn(`${nI} the play sources threw as they attached, after the client stopped`, pp) : AD({
```

#### 899. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8312` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8420) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8312)

```diff
-         throw IR = null, new QD.c(DD)
+         throw XD = null, new lp.e(pp)
```

#### 900. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8322` → after: `L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8430) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8322)

```diff
-       const LD = (0, AD.e)();
+       const xp = (0, Ap.d)();
```

#### 901. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8337` → after: `L8445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8445) · [Before (L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8337)

```diff
-             target: await (0, lD.e)(DD.userContext, zD.place, Jg(), LD),
+             target: await (0, gp.c)(pp.userContext, ip.place, fY(), xp),
```

#### 902. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8339` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8447) · [Before (L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8339)

```diff
-             freshMs: lD.d
+             freshMs: gp.b
```

#### 903. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8361-L8362` → after: `L8472-L8473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8472-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8472-L8473) · [Before (L8361-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8361-L8362)

```diff
-             (0, AD.n)((() => {
-               DD.endJoinAd() && (0, ID.l)()
+             (0, Ap.o)((() => {
+               pp.endJoinAd() && ((0, yp.k)(), jp.adEnded())
```

#### 904. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8365` → after: `L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8476) · [Before (L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8365)

```diff
-           return GR || (GR = !0, (0, GD.c)()), BR ? (MR(KD.n.CONNECT_TO_GAME_SERVER), MR(KD.n.SHADER_PACK), function() {
+           return QD || (QD = !0, (0, mp.c)()), lD ? (ND(Ip.k.CONNECT_TO_GAME_SERVER), ND(Ip.k.SHADER_PACK), function() {
```

#### 905. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8368` → after: `L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8479) · [Before (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8368)

```diff
-           }() && (0, BD.d)(DD.userContext, rD).catch((DD => {
+           }() && (0, kp.c)(pp.userContext, Sp).catch((pp => {
```

#### 906. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8373` → after: `L8484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8484) · [Before (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8373)

```diff
-               return null !== (DD = null === (zD = mr) || void 0 === zD ? void 0 : zD.couldntRunInJoinedGame()) && void 0 !== DD ? DD : null
+               return null !== (pp = null === (ip = KS) || void 0 === ip ? void 0 : ip.couldntRunInJoinedGame()) && void 0 !== pp ? pp : null
```

#### 907. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8375-L8376` → after: `L8486-L8487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8486-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8486-L8487) · [Before (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8375-L8376)

```diff
-             null !== DD && (0, BD.c)(DD)
-           }(), sD.e.value(void 0)) : xR("The server ended the game as it joined");
+             null !== pp && (0, kp.b)(pp)
+           }(), op.d.value(void 0)) : GD("The server ended the game as it joined");
```

#### 908. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8380` → after: `L8491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8491) · [Before (L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8380)

```diff
-             if ((gD.error instanceof SD.l || gD.error instanceof SD.c) && gD.error.code === pD.e.serverUpdating.code) {
+             if ((Yp.error instanceof np.r || Yp.error instanceof np.d) && Yp.error.code === Op.e.serverUpdating.code) {
```

#### 909. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8385` → after: `L8496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8496) · [Before (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8385)

```diff
-               } = (0, UD.c)();
+               } = (0, Pp.d)();
```

#### 910. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8388` → after: `L8499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8499) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8388)

```diff
-             return gD.error instanceof eD.e ? sD.e.errorWithCode(gD.error.messageKey, KD.n.SHADER_PACK, {
+             return Yp.error instanceof Vp.e ? op.d.errorWithCode(Yp.error.messageKey, Ip.k.SHADER_PACK, {
```

#### 911. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8390-L8392` → after: `L8501-L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8501-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8501-L8503) · [Before (L8390-L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8390-L8392)

```diff
-             }) : sD.e.errorWithCode(function(DD) {
-               if (DD instanceof SD.u || DD instanceof OD.c) return DD.message;
-               if (VR(DD)) return (0, dD.n)(DD.code, DD.serverText);
+             }) : op.d.errorWithCode(function(pp) {
+               if (pp instanceof np.D || pp instanceof Cp.f) return pp.message;
+               if (nD(pp)) return (0, ap.k)(pp.code, pp.serverText);
```

#### 912. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8394` → after: `L8505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8505) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8394)

```diff
-             }(gD.error), KD.n.CONNECT_TO_GAME_SERVER, {
+             }(Yp.error), Ip.k.CONNECT_TO_GAME_SERVER, {
```

#### 913. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8397-L8400` → after: `L8508-L8511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8508-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8508-L8511) · [Before (L8397-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8397-L8400)

```diff
-               gameServerUnreachable: (0, iD.e)(gD.error),
-               joinFailure: (0, iD.m)(gD.error),
-               rematch: (0, nD.e)(gD.error),
-               gameRefused: (0, MD.e)(gD.error)
+               gameServerUnreachable: (0, Fp.c)(Yp.error),
+               joinFailure: (0, Fp.j)(Yp.error),
+               rematch: (0, qp.c)(Yp.error),
+               gameRefused: (0, Mp.b)(Yp.error)
```

#### 914. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8406` → after: `L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8517) · [Before (L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8406)

```diff
-         case "sw":
+         case "OO":
```

#### 915. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8412` → after: `L8523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8523) · [Before (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8412)

```diff
-       return DD instanceof SD.l || DD instanceof SD.c && "attach" !== DD.stage
+       return pp instanceof np.r || pp instanceof np.d && "attach" !== pp.stage
```

#### 916. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8416` → after: `L8527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8527) · [Before (L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8416)

```diff
-       return !(DD instanceof SD.u) && !VR(DD) && void 0 === (0, iD.e)(DD)
+       return !(pp instanceof np.D) && !nD(pp) && void 0 === (0, Fp.c)(pp)
```

#### 917. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8420` → after: `L8531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8531) · [Before (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8420)

```diff
-       return VR(DD) ? DD instanceof SD.c && (0, dD.j)(DD.code).requiresRefresh ? "medium" : "low" : PR(DD) || DD instanceof SD.u ? "medium" : "low"
+       return nD(pp) ? pp instanceof np.d && (0, ap.h)(pp.code).requiresRefresh ? "medium" : "low" : FD(pp) || pp instanceof np.D ? "medium" : "low"
```

#### 918. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8424` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8535) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8424)

```diff
-       return sD.e.errorWithCode(DD, KD.n.CONNECT_TO_GAME_SERVER, {
+       return op.d.errorWithCode(pp, Ip.k.CONNECT_TO_GAME_SERVER, {
```

#### 919. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8426` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8537) · [Before (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8426)

```diff
-         sw: !0
+         OO: !0
```

#### 920. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8431` → after: `L8542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8542) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8431)

```diff
-         if ((0, JD.d)()) {
+         if ((0, Ep.b)()) {
```

#### 921. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8433-L8434` → after: `L8544-L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8544-L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8544-L8545) · [Before (L8433-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8433-L8434)

```diff
-           if ((0, rD.e)()) return;
-           (0, fD.e)(!0 === (null === (zD = (0, JD.m)()) || void 0 === zD || null === (wD = zD.currentViewer) || void 0 === wD ? void 0 : wD.unsavedChanges), DD)
+           if ((0, Sp.c)()) return;
+           (0, Wp.c)(!0 === (null === (ip = (0, Ep.i)()) || void 0 === ip || null === (cp = ip.currentViewer) || void 0 === cp ? void 0 : cp.unsavedChanges), pp)
```

#### 922. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8441` → after: `L8552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8552) · [Before (L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8441)

```diff
-         BR = !1, (0, hD.f)();
+         lD = !1, (0, Rp.e)();
```

#### 923. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8444` → after: `L8555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8555) · [Before (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8444)

```diff
-           null === (zD = (0, QD.t)()) || void 0 === zD || zD.clearWasmCameraScreen()
+           null === (ip = (0, lp.u)()) || void 0 === ip || ip.clearWasmCameraScreen()
```

#### 924. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8450` → after: `L8561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8561) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8450)

```diff
-         } = (0, UD.c)();
+         } = (0, Pp.d)();
```

#### 925. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8454` → after: `L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8565) · [Before (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8454)

```diff
-           (0, UD.q)({
+           (0, Pp.p)({
```

#### 926. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8456` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8567) · [Before (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8456)

```diff
-           }), cD.l.KG("leaveGame", {
+           }), Lp.m.GA("leaveGame", {
```

#### 927. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8458` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8569) · [Before (L8458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8458)

```diff
-           }), (0, RD.O)()
+           }), (0, Dp.I)()
```

#### 928. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8462` → after: `L8573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8573) · [Before (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8462)

```diff
-         return (0, JD.d)()
+         return (0, Ep.b)()
```

#### 929. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8466` → after: `L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8577) · [Before (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8466)

```diff
-   40850: (DD, zD, wD) => {
+   41125: (pp, ip, cp) => {
```

#### 930. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8468-L8471` → after: `L8579-L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8579-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8579-L8582) · [Before (L8468-L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8468-L8471)

```diff
-       e: () => sD,
-       f: () => pD,
-       i: () => LD,
-       m: () => rD
+       c: () => op,
+       d: () => Op,
+       g: () => xp,
+       j: () => Sp
```

#### 931. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8483` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8594) · [Before (L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8483)

```diff
-       return `it sent no start within ${Math.round(DD)} ms`
+       return `it sent no start within ${Math.round(pp)} ms`
```

#### 932. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8526` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8637) · [Before (L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8526)

```diff
-   39597: (DD, zD, wD) => {
+   39849: (pp, ip, cp) => {
```

#### 933. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8530-L8531` → after: `L8641-L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8641-L8642) · [Before (L8530-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8530-L8531)

```diff
-     var pD = wD(351),
-       sD = wD(1008);
+     var Op = cp(337),
+       op = cp(1014);
```

#### 934. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8536-L8537` → after: `L8647-L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8647-L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8647-L8648) · [Before (L8536-L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8536-L8537)

```diff
-       const zD = (0, pD.Tb)(DD);
-       return "classic" !== zD ? KD.has(zD) : !(0, sD.l)(DD) && !rD.has((0, pD.Ob)(DD))
+       const ip = (0, Op.Mb)(pp);
+       return "classic" !== ip ? Ip.has(ip) : !(0, op.j)(pp) && !Sp.has((0, Op.Ib)(pp))
```

#### 935. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8540` → after: `L8651-L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8651-L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8651-L8654) · [Before (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8540)

```diff
-   40752: (DD, zD, wD) => {
+   37964: (pp, ip, cp) => {
+     function Op(pp) {
+       return "string" !== typeof pp || 2 !== pp.length && ":" !== pp[2] ? null : pp[0] + pp[1]
+     }
```

#### 936. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8542` → after: `L8656-L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8656-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8656-L8771) · [Before (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8542)

```diff
-       b: () => pD
+       b: () => wp,
+       f: () => jp,
+       h: () => ep,
+       i: () => kp,
+       l: () => xp,
+       o: () => Sp,
+       r: () => Ip,
+       t: () => Lp,
+       w: () => vp,
+       z: () => Up
+     });
+     const op = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];
+ 
+     function Ip(pp) {
+       if (function(pp) {
+           for (let ip = 0; ip < op.length; ip++)
+ ... (100 more added lines; see GitHub link above)
```

#### 937. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8568` → after: `L8797-L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8797-L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8797-L8812) · [Before (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8568)

```diff
-   38704: (DD, zD, wD) => {
+   38200: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
+   },
+   38190: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
+   },
+   38206: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
+   },
+   38183: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
+   },
+   38198: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
+   },
+   38960: (pp, ip, cp) => {
```

#### 938. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8570` → after: `L8814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8814) · [Before (L8570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8570)

```diff
-       e: () => KD
+       c: () => Ip
```

#### 939. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8572` → after: `L8816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8816) · [Before (L8572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8572)

```diff
-     var pD = wD(2861);
+     var Op = cp(2963);
```

#### 940. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8576` → after: `L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8820) · [Before (L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8576)

```diff
-       const DD = () => (0, pD.z)();
+       const pp = () => (0, Op.H)();
```

#### 941. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8578-L8580` → after: `L8822-L8824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8822-L8824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8822-L8824) · [Before (L8578-L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8578-L8580)

```diff
-         memoryBytes: () => (0, pD.r)().buffer.byteLength,
-         reserveUpFront: zD => DD().hA(zD),
-         reserveAhead: zD => DD().BA(zD),
+         memoryBytes: () => (0, Op.z)().buffer.byteLength,
+         reserveUpFront: ip => pp().kA(ip),
+         reserveAhead: ip => pp().jA(ip),
```

#### 942. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8582` → after: `L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8826) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8582)

```diff
-           DD().nA(zD)
+           pp().mA(ip)
```

#### 943. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8584` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8828) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8584)

```diff
-         lowWater: () => sD[DD().IA()] ?? "none",
+         lowWater: () => op[pp().uA()] ?? "none",
```

#### 944. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8586` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8830) · [Before (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8586)

```diff
-           const zD = new Uint32Array((0, pD.r)().buffer, DD, 17),
+           const ip = new Uint32Array((0, Op.z)().buffer, pp, 17),
```

#### 945. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8607-L8609` → after: `L8851-L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8851-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8851-L8853) · [Before (L8607-L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8607-L8609)

```diff
-         }(DD().MA()),
-         takeBallast: () => DD().OA(),
-         takePressure: () => DD().JA()
+         }(pp().RA()),
+         takeBallast: () => pp().qA(),
+         takePressure: () => pp().MA()
```

#### 946. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8613` → after: `L8857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8857) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8613)

```diff
-   5084: (DD, zD, wD) => {
+   5167: (pp, ip, cp) => {
```

#### 947. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8615-L8616` → after: `L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8859) · [Before (L8615-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8615-L8616)

```diff
-       A: () => UD,
-       d: () => LD,
+       c: () => xp,
```

#### 948. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8618` → after: `L8861-L8862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8861-L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8861-L8862) · [Before (L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8618)

```diff
-       i: () => pD,
+       f: () => Op,
+       j: () => Up,
```

#### 949. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8620-L8622` → after: `L8864-L8866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8864-L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8864-L8866) · [Before (L8620-L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8620-L8622)

```diff
-       n: () => AD,
-       q: () => sD,
-       r: () => KD,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
```

#### 950. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8643` → after: `L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8887) · [Before (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8643)

```diff
-         if ("string" !== typeof pD) return `${wD} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 951. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8652` → after: `L8896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8896) · [Before (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8652)

```diff
-           if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 952. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8660` → after: `L8904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8904) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8660)

```diff
-             if (zD.has(wD)) return `The pack has two files at ${wD}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 953. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8663` → after: `L8907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8907) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8663)

```diff
-           return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 954. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8688-L8691` → after: `L8932-L8935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8932-L8935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8932-L8935) · [Before (L8688-L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8688-L8691)

```diff
-       if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
-       if (DD.length > cD) return `A file path is over ${cD} characters.`;
-       if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
-       return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 955. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8724` → after: `L8968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmPlay.js#L8968) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmPlay.js#L8724)

```diff
-           return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmRecorder.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/wasmRecorder.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864)

#### 1. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L1-L2)

```diff
- export const id = 64;
- export const ids = [64];
+ export const id = 65;
+ export const ids = [65];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5)

```diff
-   61237: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/bloxd_wasm_recorder_bg.4bf4734a838cd40dc552.wasm"
+   61576: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/bloxd_wasm_recorder_bg.a17fd283244fec08ee33.wasm"
```

#### 3. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7)

```diff
-   61231: (DD, zD, wD) => {
+   61572: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21)

```diff
-       UKD: () => sD,
-       KLD: () => TD,
-       UA: () => KD,
+       lIp: () => op,
+       kxp: () => Ep,
+       dA: () => Ip,
```

#### 5. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L24-L26` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26)

```diff
-       fA: () => rD,
-       gKD: () => LD,
-       wKD: () => cD
+       eA: () => Sp,
+       EIp: () => xp,
+       jIp: () => Lp
```

#### 6. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35)

```diff
-         XD.ptsP(DD, 0)
+         mp.AZgg(pp, 0)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38)

```diff
-         return 0 !== XD.Hlnc(this.__wbg_ptr)
+         return 0 !== mp.z75w(this.__wbg_ptr)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L41-L59` → after: `L41-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59)

```diff
-         return 0 !== XD.K4m9(this.__wbg_ptr, DD, zD)
-       }
-       pKD(DD) {
-         return XD.UDZQ(this.__wbg_ptr, DD) >>> 0
-       }
-       zKD() {
-         XD.rPF3(this.__wbg_ptr)
-       }
-       DKD() {
-         return XD.BI1U(this.__wbg_ptr) >>> 0
-       }
-       qsD() {
-         return XD.T5Nx(this.__wbg_ptr)
-       }
-       rKD() {
-         return XD.LcIZ(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         return 0 !== mp.wGU5(this.__wbg_ptr, pp, ip)
+       }
+       kIp(pp) {
+         return mp.By1P(this.__wbg_ptr, pp) >>> 0
+       }
+       uIp() {
+         mp.XG0B(this.__wbg_ptr)
+       }
+       eIp() {
+         return mp.qedR(this.__wbg_ptr) >>> 0
+       }
+       dIp() {
+         return mp.QAgo(this.__wbg_ptr)
+       }
+       qIp() {
+         return mp.kzJQ(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62)

```diff
-         return XD.C0YT(this.__wbg_ptr, DD) >>> 0
+         return mp.nj9i(this.__wbg_ptr, pp) >>> 0
```

#### 10. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65)

```diff
-         const DD = XD.ocwy();
+         const pp = mp.yf38();
```

#### 11. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L68-L75` → after: `L68-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75)

```diff
-       KKD() {
-         return XD.yCPj(this.__wbg_ptr) >>> 0
-       }
-       rLD() {
-         return XD.Bvgw(this.__wbg_ptr) >>> 0
-       }
-       HsD(DD, zD, wD) {
-         return 0 !== XD.WIPF(this.__wbg_ptr, DD, zD, wD)
+       RIp() {
+         return mp.l8rH(this.__wbg_ptr) >>> 0
+       }
+       mxp() {
+         return mp.WF0y(this.__wbg_ptr) >>> 0
+       }
+       HIp(pp, ip, cp) {
+         return 0 !== mp.M1ov(this.__wbg_ptr, pp, ip, cp)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78)

```diff
-         return XD.mvrN(this.__wbg_ptr, DD) >>> 0
+         return mp.AWM1(this.__wbg_ptr, pp) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81)

```diff
-         return XD.TmYe(this.__wbg_ptr) >>> 0
+         return mp.yxRE(this.__wbg_ptr) >>> 0
```

#### 14. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107)

```diff
-         }(DD, XD.H0Jp, XD.EUj3),
+         }(pp, mp.pARf, mp.KBSS),
```

#### 15. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109)

```diff
-         sD = XD.Xp0E(wD, pD, zD);
+         op = mp.Zzvn(cp, Op, ip);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L114-L122` → after: `L114-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122) · [Before (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122)

```diff
-       XD.xnRY()
-     }
- 
-     function LD() {
-       return XD.cIIF() >>> 0
-     }
- 
-     function cD() {
-       return hD(XD.B1NR())
+       mp.P1jE()
+     }
+ 
+     function xp() {
+       return mp.P2m9() >>> 0
+     }
+ 
+     function Lp() {
+       return vp(mp.nG0g())
```

#### 17. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128)

```diff
-         fDmI: {
+         oySu: {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130)

```diff
-           euV9: function(DD, zD) {
+           YYw2: function(pp, ip) {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133)

```diff
-           eEN4: function() {
+           isAq: function() {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136)

```diff
-           pU4f: function(DD, zD) {
+           j52B: function(pp, ip) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139)

```diff
-           Ojhh: function(DD, zD) {
+           JGLJ: function(pp, ip) {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142)

```diff
-           DV3E: function() {
+           AWS0: function() {
```

#### 23. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204)

```diff
-       return QD = DD, XD = DD.exports, ED = zD, fD = null, XD.ftse(), XD
+       return kp = pp, mp = pp.exports, jp = ip, Wp = null, mp.SiTI(), mp
```

#### 24. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228)

```diff
-           if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
+           if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260)

```diff
-     var bD = wD(2868),
-       jD = wD(6653);
+     var Xp = cp(2970),
+       lp = cp(6762);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265)

```diff
-         super((0, bD.A)(DD, zD), {
+         super((0, Xp.B)(pp, ip), {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279)

```diff
-           return wD = zD ??= (0, bD.B)(DD.url(), (0, jD.d)(DD.name)), await wD
+           return cp = ip ??= (0, Xp.C)(pp.url(), (0, lp.e)(pp.name)), await cp
```

#### 28. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281)

```diff
-           throw zD === wD && (zD = null), DD.error((0, bD.G)(pD), pD)
+           throw ip === cp && (ip = null), pp.error((0, Xp.J)(Op), Op)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315)

```diff
-       url: () => new wD.U(wD(61237)),
+       url: () => new cp.U(cp(61576)),
```

#### 30. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348)

```diff
-   6653: (DD, zD, wD) => {
+   6762: (pp, ip, cp) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L350-L352` → after: `L350-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L350-L352) · [Before (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L350-L352)

```diff
-       d: () => rD
-     });
-     var pD = wD(2868);
+       e: () => Sp
+     });
+     var Op = cp(2970);
```

#### 32. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L354-L365` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365) · [Before (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365)

```diff
-       bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
-       bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
-       bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
-       bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
-       bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
-       bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
-       bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
-       bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
-       bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
-       bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
-       bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
-       bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
+       bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
+       bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
+       bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
+       bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
+       bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
+       bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
+       bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
+       bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
+       bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
+       bloxd_wasm_anim: () => "12c4beb6cacfbdea124da1b78d9d3bb64d476f26a1d82ae9031fb1eb6b45b89d",
+       bloxd_wasm_textures: () => "8da34a927a2e21429dd7b220d476b1d909f2b62d3b85d0f3e892b23b3c44d36f",
+       bloxd_wasm_shader_pack: () => "5e1ab13681c364aca3fb9e7bad689eb7302538f98091c87c0994a7538b0e884b"
```

#### 33. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367)

```diff
-     var KD = wD(4722);
+     var Ip = cp(4791);
```

#### 34. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373)

```diff
-         onMismatch: KD.B
+         onMismatch: Ip.v
```

#### 35. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375)

```diff
-       throw new pD.l(`${DD} has no release digest, so this build refuses it`)
+       throw new Op.g(`${pp} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplay.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplay.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L1-L2)

```diff
- export const id = 65;
- export const ids = [65];
+ export const id = 66;
+ export const ids = [66];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5)

```diff
-   61252: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/bloxd_wasm_replay_bg.71161e5e13d388d8b3b1.wasm"
+   61588: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/bloxd_wasm_replay_bg.953da97fb97beebebe51.wasm"
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L7)

```diff
-   6653: (DD, zD, wD) => {
+   6762: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L9-L11)

```diff
-       d: () => rD
-     });
-     var pD = wD(2868);
+       e: () => Sp
+     });
+     var Op = cp(2970);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24)

```diff
-       bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
-       bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
-       bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
-       bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
-       bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
-       bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
-       bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
-       bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
-       bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
-       bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
-       bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
-       bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
+       bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
+       bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
+       bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
+       bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
+       bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
+       bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
+       bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
+       bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
+       bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
+       bloxd_wasm_anim: () => "12c4beb6cacfbdea124da1b78d9d3bb64d476f26a1d82ae9031fb1eb6b45b89d",
+       bloxd_wasm_textures: () => "8da34a927a2e21429dd7b220d476b1d909f2b62d3b85d0f3e892b23b3c44d36f",
+       bloxd_wasm_shader_pack: () => "5e1ab13681c364aca3fb9e7bad689eb7302538f98091c87c0994a7538b0e884b"
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L26)

```diff
-     var KD = wD(4722);
+     var Ip = cp(4791);
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L32)

```diff
-         onMismatch: KD.B
+         onMismatch: Ip.v
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L34)

```diff
-       throw new pD.l(`${DD} has no release digest, so this build refuses it`)
+       throw new Op.g(`${pp} has no release digest, so this build refuses it`)
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L37)

```diff
-   61246: (DD, zD, wD) => {
+   61579: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49)

```diff
-       IKD: () => sD,
-       KLD: () => bD,
-       UA: () => KD,
+       JIp: () => op,
+       kxp: () => Xp,
+       dA: () => Ip,
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L52-L54` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54)

```diff
-       fA: () => rD,
-       gKD: () => LD,
-       BKD: () => cD
+       eA: () => Sp,
+       EIp: () => xp,
+       BIp: () => Lp
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L63-L66` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66)

```diff
-         VD.xm4J(DD, 0)
-       }
-       OKD(DD, zD, wD, pD, sD, KD) {
-         VD.sEhO(this.__wbg_ptr, DD, zD, wD, pD, sD, KD)
+         Rp.rWdw(pp, 0)
+       }
+       bIp(pp, ip, cp, Op, op, Ip) {
+         Rp.jFob(this.__wbg_ptr, pp, ip, cp, Op, op, Ip)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L69)

```diff
-         VD.Bs6N(this.__wbg_ptr)
+         Rp.PLeH(this.__wbg_ptr)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L72-L90` → after: `L72-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90) · [Before (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90)

```diff
-         VD.gKGi(this.__wbg_ptr, DD, zD)
-       }
-       QKD(DD, zD) {
-         VD.nlMP(this.__wbg_ptr, DD, zD)
-       }
-       VKD() {
-         return VD.Nxsh(this.__wbg_ptr) >>> 0
-       }
-       XKD() {
-         return VD.rajl(this.__wbg_ptr) >>> 0
-       }
-       PKD() {
-         return VD.ISbK(this.__wbg_ptr) >>> 0
-       }
-       CKD() {
-         return VD.W5ld(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         Rp.nzm2(this.__wbg_ptr, pp, ip)
+       }
+       nIp(pp, ip) {
+         Rp.W8qI(this.__wbg_ptr, pp, ip)
+       }
+       gIp() {
+         return Rp.LWx4(this.__wbg_ptr) >>> 0
+       }
+       FIp() {
+         return Rp.HyIm(this.__wbg_ptr) >>> 0
+       }
+       GIp() {
+         return Rp.Z5VL(this.__wbg_ptr) >>> 0
+       }
+       rIp() {
+         return Rp.n9vO(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L93)

```diff
-         const DD = VD.BNeU();
+         const pp = Rp.B8Xg();
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L97-L100` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100)

```diff
-         VD.GJMt(this.__wbg_ptr)
-       }
-       KKD() {
-         return VD.mMPu(this.__wbg_ptr) >>> 0
+         Rp.wCln(this.__wbg_ptr)
+       }
+       RIp() {
+         return Rp.geHd(this.__wbg_ptr) >>> 0
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L103)

```diff
-         VD.m8LD(this.__wbg_ptr)
+         Rp.zn7v(this.__wbg_ptr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L106)

```diff
-         VD.oai2(this.__wbg_ptr)
+         Rp.IDTI(this.__wbg_ptr)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L109-L112` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112)

```diff
-         return VD.pKFg(this.__wbg_ptr) >>> 0
-       }
-       xKD() {
-         VD.pqI2(this.__wbg_ptr)
+         return Rp.LrRe(this.__wbg_ptr) >>> 0
+       }
+       ZIp() {
+         Rp.cep7(this.__wbg_ptr)
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L115-L120` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120)

```diff
-         VD.VU9I(this.__wbg_ptr, DD, zD)
-       }
-       bKD(DD) {
-         VD.lOPV(this.__wbg_ptr, DD)
-       }
-       JKD(DD, zD) {
+         Rp.Pwlg(this.__wbg_ptr, pp, ip)
+       }
+       sIp(pp) {
+         Rp.V0PN(this.__wbg_ptr, pp)
+       }
+       hIp(pp, ip) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L127)

```diff
-           }(zD, VD.iguB),
+           }(ip, Rp.nkde),
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L129-L135` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135)

```diff
-         VD.S92l(this.__wbg_ptr, DD, wD, pD)
-       }
-       nKD(DD, zD) {
-         VD.rj97(this.__wbg_ptr, DD, zD)
-       }
-       TKD(DD) {
-         VD.nk5G(this.__wbg_ptr, DD)
+         Rp.GcpZ(this.__wbg_ptr, pp, cp, Op)
+       }
+       fIp(pp, ip) {
+         Rp.uKW6(this.__wbg_ptr, pp, ip)
+       }
+       zIp(pp) {
+         Rp.ShPy(this.__wbg_ptr, pp)
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L138)

```diff
-         return VD.mfFK(this.__wbg_ptr, DD) >>> 0
+         return Rp.tCSB(this.__wbg_ptr, pp) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L141)

```diff
-         return VD.PXm2(this.__wbg_ptr, DD, zD) >>> 0
+         return Rp.JWaX(this.__wbg_ptr, pp, ip) >>> 0
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L167)

```diff
-         }(DD, VD.iguB, VD.UqE8),
+         }(pp, Rp.nkde, Rp.ljWH),
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L169)

```diff
-         sD = VD.HKU1(wD, pD, zD);
+         op = Rp.nYFq(cp, Op, ip);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L174-L182` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182) · [Before (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182)

```diff
-       VD.T89V()
-     }
- 
-     function LD() {
-       return VD.s9gt() >>> 0
-     }
- 
-     function cD() {
-       return nD(VD.NRPP())
+       Rp.wMGg()
+     }
+ 
+     function xp() {
+       return Rp.ldeY() >>> 0
+     }
+ 
+     function Lp() {
+       return tp(Rp.fVrc())
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L188)

```diff
-         VlEM: {
+         Rj2u: {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L190)

```diff
-           hFRU: function(DD, zD) {
+           Qy1X: function(pp, ip) {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L193)

```diff
-           s10s: function() {
+           BM4s: function() {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L196)

```diff
-           Pchc: function(DD, zD) {
+           vPjQ: function(pp, ip) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L199)

```diff
-           BZJj: function(DD, zD) {
+           GzdH: function(pp, ip) {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L202)

```diff
-           bojE: function() {
+           MWkm: function() {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L265)

```diff
-       return XD = DD, VD = DD.exports, QD = zD, UD = null, ID = null, VD.F06e(), VD
+       return mp = pp, Rp = pp.exports, kp = ip, Pp = null, yp = null, Rp.eGkn(), Rp
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L289)

```diff
-           if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
+           if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321)

```diff
-     var jD = wD(2868),
-       dD = wD(6653);
+     var lp = cp(2970),
+       Qp = cp(6762);
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L325)

```diff
-         super((0, jD.A)(DD, zD), {
+         super((0, lp.B)(pp, ip), {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L344)

```diff
-           await zD, iD ??= (0, jD.B)(new wD.U(wD(61252)), (0, dD.d)("bloxd_wasm_replay"));
+           await ip, Bp ??= (0, lp.C)(new cp.U(cp(61588)), (0, Qp.e)("bloxd_wasm_replay"));
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplay.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplay.js#L348)

```diff
-             throw iD = null, new SD((0, jD.G)(KD), KD)
+             throw Bp = null, new Jp((0, lp.J)(Ip), Ip)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1-L2)

```diff
- export const id = 66;
- export const ids = [60, 66, 93];
+ export const id = 67;
+ export const ids = [61, 67, 95];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4)

```diff
-   36964: (DD, zD, wD) => {
+   37201: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6)

```diff
-       c: () => AD,
+       d: () => Ap,
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11)

```diff
-     var pD = wD(619),
-       sD = wD(35),
-       KD = wD(36910);
+     var Op = cp(640),
+       op = cp(44),
+       Ip = cp(37156);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24)

```diff
-         gD = await Promise.race([(async () => await sD.g.setItem(LD, wD) && sD.g.setItem(rD, KD))(), (0, pD.H)(RD).then((() => !1))]);
+         Yp = await Promise.race([(async () => await op.g.setItem(xp, cp) && op.g.setItem(Sp, Ip))(), (0, Op.M)(Dp).then((() => !1))]);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28)

```diff
-         Nf: gD
+         aW: Yp
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30)

```diff
-       sD.k.setItem(cD, AD)
+       op.l.setItem(Lp, Ap)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35)

```diff
-       const zD = sD.k.getItem(cD);
-       null !== zD && sD.k.removeItem(cD);
+       const ip = op.l.getItem(Lp);
+       null !== ip && op.l.removeItem(Lp);
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41-L42)

```diff
-       if (null !== pD && (AD || ("number" !== typeof pD || wD - pD > gD)) && (UD = RD && AD && zD.Nf ? await sD.g.getItem(rD) : null, await Promise.all([sD.g.removeItem(LD), sD.g.removeItem(rD)])), !RD) return null;
-       if ((null === (DD = UD) || void 0 === DD ? void 0 : DD.at) !== zD.at) throw new Error(KD.e.replayNotKept.text);
+       if (null !== Op && (Ap || ("number" !== typeof Op || cp - Op > Yp)) && (Pp = Dp && Ap && ip.aW ? await op.g.getItem(Sp) : null, await Promise.all([op.g.removeItem(xp), op.g.removeItem(Sp)])), !Dp) return null;
+       if ((null === (pp = Pp) || void 0 === pp ? void 0 : pp.at) !== ip.at) throw new Error(Ip.c.replayNotKept.text);
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49)

```diff
-   36956: (DD, zD, wD) => {
+   37192: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L51-L53)

```diff
-       e: () => pD,
-       f: () => KD,
-       j: () => sD
+       d: () => Op,
+       g: () => Ip,
+       h: () => op
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65)

```diff
-   36910: (DD, zD, wD) => {
+   37156: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L67)

```diff
-       e: () => rD,
+       c: () => Sp,
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L69)

```diff
-       g: () => cD
+       i: () => Lp
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71)

```diff
-     var pD = wD(25);
+     var Op = cp(34);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174)

```diff
-       const wD = null !== (zD = DD.timeoutMs) && void 0 !== zD ? zD : "Error" === DD.type ? sD : KD;
-       pD.l.KG("showBottomMessage", {
+       const cp = null !== (ip = pp.timeoutMs) && void 0 !== ip ? ip : "Error" === pp.type ? op : Ip;
+       Op.m.GA("showBottomMessage", {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181)

```diff
-   36975: (DD, zD, wD) => {
+   37209: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184)

```diff
-       e: () => pD,
-       f: () => sD
+       d: () => Op,
+       h: () => op
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237)

```diff
-   36981: (DD, zD, wD) => {
+   37215: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239)

```diff
-       c: () => gD,
+       b: () => Yp,
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245)

```diff
-     var pD = wD(20),
-       sD = wD(25),
-       KD = wD(36975);
+     var Op = cp(25),
+       op = cp(34),
+       Ip = cp(37209);
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252)

```diff
-         of KD.f) DD[zD] = !0;
+         of Ip.h) pp[ip] = !0;
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258)

```diff
-       sD.l.KG("replayViewer|uiVisibilityChanged")
+       op.m.GA("replayViewer|uiVisibilityChanged")
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269)

```diff
-       }, "nametag" === DD && pD.e.set({
+       }, "nametag" === pp && Op.c.set({
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275)

```diff
-       LD = rD(), pD.e.set({
+       xp = Sp(), Op.c.set({
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280)

```diff
-   39216: (DD, zD, wD) => {
+   39440: (pp, ip, cp) => {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282)

```diff
-       c: () => TD
+       b: () => Ep
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L284-L287` → after: `L284-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287) · [Before (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287)

```diff
-     var pD = wD(1753),
-       sD = wD(1355),
-       KD = wD(58),
-       rD = wD(1044),
+     var Op = cp(1779),
+       op = cp(1372),
+       Ip = cp(62),
+       Sp = cp(1049),
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290)

```diff
-       cD = wD(1447),
-       gD = wD(103);
+       Lp = cp(1480),
+       Yp = cp(104);
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295)

```diff
-       return "webm" === DD ? RD : AD
+       return "webm" === pp ? Dp : Ap
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307)

```diff
-     var BD = wD(1096);
+     var Up = cp(1112);
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${DD}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${pp}.`
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379)

```diff
-             children: (0, BD.jsx)(cD.R, {
+             children: (0, Up.jsx)(Lp.K, {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461)

```diff
-           }), (0, BD.jsx)(cD.R, {
+           }), (0, Up.jsx)(Lp.K, {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L471-L473` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473) · [Before (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473)

```diff
-     var OD = wD(4875),
-       JD = wD(36975),
-       ED = wD(36981);
+     var dp = cp(4974),
+       ep = cp(37209),
+       jp = cp(37215);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478)

```diff
-         const DD = (0, ED.c)();
+         const pp = (0, jp.b)();
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483)

```diff
-           of JD.f)
+           of ep.h)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512)

```diff
-     var PD = wD(39055);
+     var qp = cp(39261);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516)

```diff
-       DD.holdInput(!1), (0, PD.h)(!1)
+       pp.holdInput(!1), (0, qp.e)(!1)
```

#### 40. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520)

```diff
-       if ((0, PD.e)() || CD) return;
+       if ((0, qp.c)() || Mp) return;
```

#### 41. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562)

```diff
-       const RD = null !== (zD = null === (wD = KD.startFailure) || void 0 === wD ? void 0 : wD.call(KD)) && void 0 !== zD ? zD : null;
+       const Dp = null !== (ip = null === (cp = Ip.startFailure) || void 0 === cp ? void 0 : cp.call(Ip)) && void 0 !== ip ? ip : null;
```

#### 42. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568)

```diff
-           return !(0, PD.e)() && ((0, PD.h)(!0), DD.holdInput(!0), !0)
+           return !(0, qp.c)() && ((0, qp.e)(!0), pp.holdInput(!0), !0)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572)

```diff
-         AD = await VD(rD.includeUi, (() => KD.canvas()), KD.Rl)
+         Ap = await Rp(Sp.includeUi, (() => Ip.canvas()), Ip.Bl)
```

#### 44. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585)

```diff
-         ID = KD.playbackSpeed(), KD.closeViewer(), KD.setPlaybackSpeed(1), KD.pause(), KD.seekToTick(null !== LD && void 0 !== LD ? LD : 0);
+         yp = Ip.playbackSpeed(), Ip.closeViewer(), Ip.setPlaybackSpeed(1), Ip.pause(), Ip.seekToTick(null !== xp && void 0 !== xp ? xp : 0);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593)

```diff
-           return null !== wD && void 0 !== wD ? wD : null
+           return null !== cp && void 0 !== cp ? cp : null
```

#### 46. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600)

```diff
-           if (!zD) throw new Error(`No MediaRecorder mime type available for ${DD}`);
+           if (!ip) throw new Error(`No MediaRecorder mime type available for ${pp}`);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643)

```diff
-         const RD = null !== (ED = null === (TD = KD.playbackFailure) || void 0 === TD ? void 0 : TD.call(KD)) && void 0 !== ED ? ED : null;
+         const Dp = null !== (jp = null === (Ep = Ip.playbackFailure) || void 0 === Ep ? void 0 : Ep.call(Ip)) && void 0 !== jp ? jp : null;
```

#### 48. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646)

```diff
-           subtitle: `${RD} Nothing was saved.`
+           subtitle: `${Dp} Nothing was saved.`
```

#### 49. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L651)

```diff
-         BD.size > 0 ? (0, pD.b)(BD, function(DD, zD) {
+         Up.size > 0 ? (0, Op.c)(Up, function(pp, ip) {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L655-L656` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656)

```diff
-           if (DD) return `${DD.replace(/\.bloxdreplay$/i,"")}.${wD}`;
-           return `bloxd-replay-${Date.now()}.${wD}`
+           if (pp) return `${pp.replace(/\.bloxdreplay$/i,"")}.${cp}`;
+           return `bloxd-replay-${Date.now()}.${cp}`
```

#### 51. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689)

```diff
-   4875: (DD, zD, wD) => {
+   4974: (pp, ip, cp) => {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L696-L698` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698)

```diff
-     var pD, sD = wD(4877),
-       KD = wD(3444),
-       rD = wD(4682);
+     var Op, op = cp(4977),
+       Ip = cp(3546),
+       Sp = cp(4743);
```

#### 53. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703)

```diff
-       if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
+       if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
```

#### 54. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715)

```diff
-       sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
+       op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
```

#### 55. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742)

```diff
-     }, (0, rD.l)() && (LD._unlockAudio = () => {
+     }, (0, Sp.f)() && (xp._unlockAudio = () => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767)

```diff
-           } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
+           } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775)

```diff
-       for (const KD of rD.d) document.addEventListener(KD, gD, {
+       for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809)

```diff
-   42450: (DD, zD, wD) => {
+   42875: (pp, ip, cp) => {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L811` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811)

```diff
-       c: () => pD,
+       b: () => Op,
```

#### 60. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821)

```diff
-   60390: (DD, zD, wD) => {
+   60725: (pp, ip, cp) => {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L826-L831` → after: `L826-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831) · [Before (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831)

```diff
-     var pD = wD(36910),
-       sD = wD(36964),
-       KD = wD(36956),
-       rD = wD(36981),
-       LD = wD(4817),
-       cD = wD(42450);
+     var Op = cp(37156),
+       op = cp(37201),
+       Ip = cp(37192),
+       Sp = cp(37215),
+       xp = cp(4903),
+       Lp = cp(42875);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833)

```diff
-       RD = new Set(["KI"]);
+       Dp = new Set(["Dy"]);
```

#### 63. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837)

```diff
-         this.deps = DD, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = pp, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846)

```diff
-         return null !== this.lastView && this.lastView.state !== LD.nd.None
+         return null !== this.lastView && this.lastView.state !== xp.jd.None
```

#### 65. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L858)

```diff
-         return this.cropping ? pD.e.cropBusy.text : null
+         return this.cropping ? Op.c.cropBusy.text : null
```

#### 66. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L869)

```diff
-           if (!gD.setPlayback(!0)) throw new Error(pD.e.cantOpen.text);
+           if (!Yp.setPlayback(!0)) throw new Error(Op.c.cantOpen.text);
```

#### 67. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876)

```diff
-           AD = await gD.open(DD, (() => (0, sD.c)(DD, zD)))
+           Ap = await Yp.open(pp, (() => (0, op.d)(pp, ip)))
```

#### 68. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L880)

```diff
-         if (RD !== this.epoch && "reloading" !== AD) throw new Error(pD.e.coreStopped.text);
+         if (Dp !== this.epoch && "reloading" !== Ap) throw new Error(Op.c.coreStopped.text);
```

#### 69. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L888-L893` → after: `L888-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L888-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888-L893) · [Before (L888-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888-L893)

```diff
-               case LD.fd.ModuleTrap:
-                 return pD.e.coreStopped;
-               case LD.fd.ModuleLoad:
-                 return pD.e.viewerLoadFailed;
-               case LD.fd.TooLarge:
-                 return pD.e.cantOpen
+               case xp._c.ModuleTrap:
+                 return Op.c.coreStopped;
+               case xp._c.ModuleLoad:
+                 return Op.c.viewerLoadFailed;
+               case xp._c.TooLarge:
+                 return Op.c.cantOpen
```

#### 70. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899)

```diff
-         return this.rejectSave(new Error(pD.e.saveClosed.text)), this.fileName = null !== (wD = null !== (KD = zD.fileName) && void 0 !== KD ? KD : null === (rD = zD.fileHandle) || void 0 === rD ? void 0 : rD.name) && void 0 !== wD ? wD : null, this.fileHandle = null !== (cD = zD … [truncated]
+         return this.rejectSave(new Error(Op.c.saveClosed.text)), this.fileName = null !== (cp = null !== (Ip = ip.fileName) && void 0 !== Ip ? Ip : null === (Sp = ip.fileHandle) || void 0 === Sp ? void 0 : Sp.name) && void 0 !== cp ? cp : null, this.fileHandle = null !== (Lp = ip … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907)

```diff
-         this.holds.has("KI") || this.deps.client.play()
+         this.holds.has("Dy") || this.deps.client.play()
```

#### 72. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913)

```diff
-         this.isOpen && this.pause(), this.hold("KI")
+         this.isOpen && this.pause(), this.hold("Dy")
```

#### 73. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918)

```diff
-         null !== wD && (zD || DD < wD.DU) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(DD, zD)
+         null !== cp && (ip || pp < cp.LP) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(pp, ip)
```

#### 74. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928)

```diff
-         null !== DD && DD.state !== LD.nd.None && this.setCameraMode(cD.c[(cD.c.indexOf(DD.cameraMode) + 1) % cD.c.length])
+         null !== pp && pp.state !== xp.jd.None && this.setCameraMode(Lp.b[(Lp.b.indexOf(pp.cameraMode) + 1) % Lp.b.length])
```

#### 75. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L946)

```diff
-         return !(zD <= DD) && (null !== this.pendingSave ? (this.deps.notify(pD.e.saveBusy), !1) : !!this.deps.client.crop(DD, zD) && (this.cropAsked = !0, this.hold("crop"), !0))
+         return !(ip <= pp) && (null !== this.pendingSave ? (this.deps.notify(Op.c.saveBusy), !1) : !!this.deps.client.crop(pp, ip) && (this.cropAsked = !0, this.hold("crop"), !0))
```

#### 76. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L949)

```diff
-         return null !== this.pendingSave ? Promise.reject(new Error(pD.e.saveBusy.text)) : new Promise(((DD, zD) => {
+         return null !== this.pendingSave ? Promise.reject(new Error(Op.c.saveBusy.text)) : new Promise(((pp, ip) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957)

```diff
-             this.pendingSave === wD && this.rejectSave(DD instanceof Error ? DD : new Error(String(DD)))
+             this.pendingSave === cp && this.rejectSave(pp instanceof Error ? pp : new Error(String(pp)))
```

#### 78. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975)

```diff
-         this.fileHandle = DD, this.fileName = null !== (wD = null !== (pD = null === DD || void 0 === DD ? void 0 : DD.name) && void 0 !== pD ? pD : zD) && void 0 !== wD ? wD : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = pp, this.fileName = null !== (cp = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.name) && void 0 !== Op ? Op : ip) && void 0 !== cp ? cp : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L978)

```diff
-         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(pD.e.coreStopped.text)), this.rejectSave(new Error(pD.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
+         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Op.c.coreStopped.text)), this.rejectSave(new Error(Op.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
```

#### 80. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L984-L985` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985)

```diff
-         this.lastView = pD, this.opening && null !== pD && pD.state !== LD.nd.None && pD.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, rD.f)()), this.cropAsked ? (this.cropAsked = !1, null !== pD && pD.state === LD.nd.Cropping ? this.crop … [truncated]
-         const KD = 0 === this.settleFrames && 0 === (null !== (DD = null === (zD = (wD = this.deps).meshPending) || void 0 === zD ? void 0 : zD.call(wD)) && void 0 !== DD ? DD : 0);
+         this.lastView = Op, this.opening && null !== Op && Op.state !== xp.jd.None && Op.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Sp.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Op && Op.state === xp.jd.Cropping ? this.crop … [truncated]
+         const Ip = 0 === this.settleFrames && 0 === (null !== (pp = null === (ip = (cp = this.deps).meshPending) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : 0);
```

#### 81. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996)

```diff
-           case LD.fd.TooLarge:
+           case xp._c.TooLarge:
```

#### 82. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L998-L999` → after: `L998-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999) · [Before (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999)

```diff
-           case LD.fd.Open:
-           case LD.fd.NothingStaged: {
+           case xp._c.Open:
+           case xp._c.NothingStaged: {
```

#### 83. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001)

```diff
-             const zD = (0, KD.f)(DD.version) ? pD.e.replayTooOld : pD.e.cantOpen;
+             const ip = (0, Ip.g)(pp.version) ? Op.c.replayTooOld : Op.c.cantOpen;
```

#### 84. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1005-L1006` → after: `L1005-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006)

```diff
-           case LD.fd.Crop:
-             if (DD.code === LD.bd.Busy) {
+           case xp._c.Crop:
+             if (pp.code === xp.Zc.Busy) {
```

#### 85. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1014)

```diff
-             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(pD.e.cropFailed);
+             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Op.c.cropFailed);
```

#### 86. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1016-L1019` → after: `L1016-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019) · [Before (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019)

```diff
-           case LD.fd.ModuleTrap:
-           case LD.fd.ModuleLoad:
-           case LD.fd.Port:
-             this.moduleEnded(DD.reason === LD.fd.ModuleTrap ? pD.e.coreStopped : pD.e.cantOpen);
+           case xp._c.ModuleTrap:
+           case xp._c.ModuleLoad:
+           case xp._c.Port:
+             this.moduleEnded(pp.reason === xp._c.ModuleTrap ? Op.c.coreStopped : Op.c.cantOpen);
```

#### 87. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021)

```diff
-           case LD.fd.NotLive:
+           case xp._c.NotLive:
```

#### 88. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${DD.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${pp.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 89. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1037)

```diff
-         this.rejectSave(new Error(DD ? pD.e.saveBusy.text : "The replay couldn't be saved"))
+         this.rejectSave(new Error(pp ? Op.c.saveBusy.text : "The replay couldn't be saved"))
```

#### 90. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1043)

```diff
-         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(pD.e.cropBusy.text)) : this.deps.notify(pD.e.cropBusy)
+         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Op.c.cropBusy.text)) : this.deps.notify(Op.c.cropBusy)
```

#### 91. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068)

```diff
-   60386: (DD, zD, wD) => {
+   60722: (pp, ip, cp) => {
```

#### 92. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1074-L1077` → after: `L1074-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077) · [Before (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077)

```diff
-     var pD = wD(39216),
-       sD = wD(60390),
-       KD = wD(4817),
-       rD = wD(2394);
+     var Op = cp(39440),
+       op = cp(60725),
+       Ip = cp(4903),
+       Sp = cp(2468);
```

#### 93. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084)

```diff
-       return (null === (zD = DD.view) || void 0 === zD ? void 0 : zD.state) === KD.nd.Cropping || DD.Qg.includes("crop")
+       return (null === (ip = pp.view) || void 0 === ip ? void 0 : ip.state) === Ip.jd.Cropping || pp.sx.includes("crop")
```

#### 94. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088)

```diff
-       return (0, pD.c)((() => function(DD) {
+       return (0, Op.b)((() => function(pp) {
```

#### 95. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091)

```diff
-           ID = null !== (zD = null === fD || void 0 === fD ? void 0 : fD.view) && void 0 !== zD ? zD : null,
+           yp = null !== (ip = null === Wp || void 0 === Wp ? void 0 : Wp.view) && void 0 !== ip ? ip : null,
```

#### 96. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1093-L1094` → after: `L1093-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094) · [Before (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094)

```diff
-         if (!fD || !ID || ID.state === KD.nd.None || 0 === ID.totalTicks || !BD || RD(fD)) return null;
-         const GD = null !== (wD = DD.now) && void 0 !== wD ? wD : () => performance.now(),
+         if (!Wp || !yp || yp.state === Ip.jd.None || 0 === yp.totalTicks || !Up || Dp(Wp)) return null;
+         const wp = null !== (cp = pp.now) && void 0 !== cp ? cp : () => performance.now(),
```

#### 97. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098)

```diff
-             return zD === fD && zD.id === hD && zD.isOpen ? zD : null
+             return ip === Wp && ip.id === vp && ip.isOpen ? ip : null
```

#### 98. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100)

```diff
-           MD = Math.min(null !== (pD = null === (sD = ID.mark) || void 0 === sD ? void 0 : sD.outTick) && void 0 !== pD ? pD : 1 / 0, ID.totalTicks - 1);
+           Hp = Math.min(null !== (Op = null === (op = yp.mark) || void 0 === op ? void 0 : op.outTick) && void 0 !== Op ? Op : 1 / 0, yp.totalTicks - 1);
```

#### 99. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105)

```diff
-           return (null === (DD = nD()) || void 0 === DD || null === (zD = DD.view) || void 0 === zD ? void 0 : zD.state) === KD.nd.Playing
+           return (null === (pp = tp()) || void 0 === pp || null === (ip = pp.view) || void 0 === ip ? void 0 : ip.state) === Ip.jd.Playing
```

#### 100. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1108-L1109` → after: `L1108-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109)

```diff
-           Rl: KD.Ed,
-           playbackMarkInTick: null !== (AD = null === (UD = ID.mark) || void 0 === UD ? void 0 : UD.inTick) && void 0 !== AD ? AD : null,
+           Bl: Ip.xd,
+           playbackMarkInTick: null !== (Ap = null === (Pp = yp.mark) || void 0 === Pp ? void 0 : Pp.inTick) && void 0 !== Ap ? Ap : null,
```

#### 101. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116)

```diff
-             return null !== (DD = null === (zD = nD()) || void 0 === zD ? void 0 : zD.fileName) && void 0 !== DD ? DD : null
+             return null !== (pp = null === (ip = tp()) || void 0 === ip ? void 0 : ip.fileName) && void 0 !== pp ? pp : null
```

#### 102. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120)

```diff
-             return null !== (DD = null === (zD = nD()) || void 0 === zD || null === (wD = zD.view) || void 0 === wD ? void 0 : wD.speed) && void 0 !== DD ? DD : 1
+             return null !== (pp = null === (ip = tp()) || void 0 === ip || null === (cp = ip.view) || void 0 === cp ? void 0 : cp.speed) && void 0 !== pp ? pp : 1
```

#### 103. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141)

```diff
-               null === wD ? (clearInterval(zD), DD()) : wD.Qg.includes("seek") || (clearInterval(zD), setTimeout(DD, gD))
+               null === cp ? (clearInterval(ip), pp()) : cp.sx.includes("seek") || (clearInterval(ip), setTimeout(pp, Yp))
```

#### 104. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1146` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146)

```diff
-             return null !== OD && null !== nD() && (!!ED() || !JD && (null !== (DD = null === (zD = nD()) || void 0 === zD || null === (wD = zD.view) || void 0 === wD ? void 0 : wD.DU) && void 0 !== DD ? DD : 0) < MD && GD() - OD < LD)
+             return null !== dp && null !== tp() && (!!jp() || !ep && (null !== (pp = null === (ip = tp()) || void 0 === ip || null === (cp = ip.view) || void 0 === cp ? void 0 : cp.LP) && void 0 !== pp ? pp : 0) < Hp && wp() - dp < xp)
```

#### 105. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160)

```diff
-             return null === wD ? "The replay closed before the video finished." : (null !== (DD = null === (zD = wD.view) || void 0 === zD ? void 0 : zD.DU) && void 0 !== DD ? DD : 0) >= MD ? null : JD ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
+             return null === cp ? "The replay closed before the video finished." : (null !== (pp = null === (ip = cp.view) || void 0 === ip ? void 0 : ip.LP) && void 0 !== pp ? pp : 0) >= Hp ? null : ep ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1169)

```diff
-           holdInput: rD.f
+           holdInput: Sp.g
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445)

#### 1. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L81)

```diff
-         const ID = cD ? 1 << cD : sD,
+         const yp = Lp ? 1 << Lp : op,
```

#### 2. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L89)

```diff
-         const hD = new wD((1 == zD ? BD || GD : zD ? 0 : GD) + 12);
+         const vp = new cp((1 == ip ? Up || wp : ip ? 0 : wp) + 12);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L95)

```diff
-           w: zD && 1 != zD ? zD : hD.subarray(12),
+           w: ip && 1 != ip ? ip : vp.subarray(12),
```

#### 4. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L295)

```diff
-             (PD ? QD : ED)(DD.subarray(KD, KD += VD), CD.subarray(xD), sD)
+             (qp ? kp : jp)(pp.subarray(Ip, Ip += Rp), Mp.subarray(Cp), op)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L360)

```diff
-             sD ? zD.y += PD : CD = rD(CD, 0, PD)
+             op ? ip.y += qp : Mp = Sp(Mp, 0, qp)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L384)

```diff
-       if (this.parts.push(DD), this.Qg += DD.length, this.Qg < this.needed) return;
+       if (this.parts.push(pp), this.sx += pp.length, this.sx < this.needed) return;
```

#### 7. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L393)

```diff
-       })(this.parts, this.Qg);
+       })(this.parts, this.sx);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L422)

```diff
-       this.parts = sD.length ? [sD] : [], this.Qg = sD.length, pD.b = 0
+       this.parts = op.length ? [op] : [], this.sx = op.length, Op.b = 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438)

```diff
-         this.stop(wD instanceof RangeError ? `out of memory decoding ${this.href}: ${DD(wD)}` : `${this.href} did not decode: ${DD(wD)}`)
+         this.stop(cp instanceof RangeError ? `out of memory decoding ${this.href}: ${pp(cp)}` : `${this.href} did not decode: ${pp(cp)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L442)

```diff
-       if (null === this.cI) {
+       if (null === this.Wy) {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L444)

```diff
-         return this.href = zD, void(this.cI = new VD(wD))
+         return this.href = ip, void(this.Wy = new Rp(cp))
```

#### 12. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L447)

```diff
-       const zD = this.cI;
+       const ip = this.Wy;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89)

#### 1. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L1-L2)

```diff
- export const id = 68;
- export const ids = [68];
+ export const id = 69;
+ export const ids = [69];
```

#### 2. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4)

```diff
-   36420: (DD, zD, wD) => {
+   36647: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L13-L26` → after: `L13-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L13-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L28) · [Before (L13-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L26)

```diff
-     var pD = wD(338),
-       sD = wD(20),
-       KD = wD(2779),
-       rD = wD(3462),
-       LD = wD(638),
-       cD = wD(103),
-       gD = wD(113),
-       RD = wD(2788),
-       AD = wD(35),
-       UD = wD(119),
-       fD = wD(323),
-       ID = wD(2811),
-       BD = wD(351),
-       GD = wD(34145);
+     var Op = cp(322),
+       op = cp(25),
+       Ip = cp(2860),
+       Sp = cp(3564),
+       xp = cp(657),
+       Lp = cp(104),
+       Yp = cp(108),
+       Dp = cp(2865),
+       Ap = cp(44),
+       Pp = cp(118),
+       Wp = cp(314),
+       yp = cp(650),
+       Up = cp(2908),
+       wp = cp(337),
+       vp = cp(335),
+       tp = cp(34354);
```

#### 4. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L31` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L33) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L31)

```diff
-       return `"${(DD.length>zD?`${DD.slice(0,zD)}...`:DD).replace(/[^ -~]|["\\]/g,"?")}"`
+       return `"${(pp.length>ip?`${pp.slice(0,ip)}...`:pp).replace(/[^ -~]|["\\]/g,"?")}"`
```

#### 5. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L41` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L43) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L41)

```diff
-       return [`loss holds ${OD(DD.lossHolds)}`, `stops packs ${OD(DD.lossStopsPack)}`, `any loss ${OD(DD.anyLoss)}`, `old intel ${OD(DD.oldIntelDriver)}`, `default off for packs ${OD(DD.defaultOffForPacks)}`, `default off reason ${null!==(zD=DD.defaultOffReason)&&void 0!==zD?zD:" … [truncated]
+       return [`loss holds ${jp(pp.lossHolds)}`, `stops packs ${jp(pp.lossStopsPack)}`, `any loss ${jp(pp.anyLoss)}`, `old intel ${jp(pp.oldIntelDriver)}`, `default off for packs ${jp(pp.defaultOffForPacks)}`, `default off reason ${null!==(ip=pp.defaultOffReason)&&void 0!==ip?ip:" … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L52` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L54) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L52)

```diff
-       return `renderer requested ${zD}, runs ${wD}, from ${pD}${null===sD?"":`, fell back: ${MD(sD,80)}`}`
+       return `renderer requested ${ip}, runs ${cp}, from ${Op}${null===op?"":`, fell back: ${ep(op,80)}`}`
```

#### 7. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L56` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L58) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L56)

```diff
-       return DD ? `stopping packs: iOS, ${null!==zD&&void 0!==zD?zD:1} losses in a row within a day` : "stopping packs"
+       return pp ? `stopping packs: iOS, ${null!==ip&&void 0!==ip?ip:1} losses in a row within a day` : "stopping packs"
```

#### 8. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L61-L65` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L63-L67) · [Before (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L61-L65)

```diff
-       return `pick (wasm): backend ${null!==(zD=DD.backend)&&void 0!==zD?zD:"none"}, webgpu fallback ${null!==(wD=DD.reason)&&void 0!==wD?wD:"none"}, from ${null!==(pD=DD.source)&&void 0!==pD?pD:"none"}, storage pull breaks ${OD(DD.storagePullBreaks)}; packs run ${OD("webgpu"===D … [truncated]
-     }
- 
-     function VD(DD, zD, wD) {
-       return `pack ${null===DD?"(name not read)":MD(DD,hD)} ${zD}${null===wD?"":`, ${wD} variants`}`
+       return `pick (wasm): backend ${null!==(ip=pp.backend)&&void 0!==ip?ip:"none"}, webgpu fallback ${null!==(cp=pp.reason)&&void 0!==cp?cp:"none"}, from ${null!==(Op=pp.source)&&void 0!==Op?Op:"none"}, storage pull breaks ${jp(pp.storagePullBreaks)}; packs run ${jp("webgpu"===p … [truncated]
+     }
+ 
+     function Mp(pp, ip, cp) {
+       return `pack ${null===pp?"(name not read)":ep(pp,Hp)} ${ip}${null===cp?"":`, ${cp} variants`}`
```

#### 9. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L88` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L90) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L88)

```diff
-       (0, ID.l)("webgpuloss", DD)
+       (0, Up.n)("webgpuloss", pp)
```

#### 10. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L93-L102` → after: `L95-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L95-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L95-L104) · [Before (L93-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L93-L102)

```diff
-         lossHolds: (0, fD.A)(),
-         lossStopsPack: (0, fD.G)(),
-         anyLoss: (0, fD.i)(),
-         oldIntelDriver: !0 === AD.h.getItem(UD.G),
-         defaultOffForPacks: sD.e.isWebGpuDefaultOff(),
-         defaultOffReason: sD.e.webGpuDefaultOffReason(),
-         settingStored: AD.h.getItem(pD.Zb),
-         setting: sD.e.get("clientEscMenuOptions").useWebGpu,
-         urlRenderer: gD.currentUrl.getSearchParam(RD.b),
-         storedRenderer: AD.h.getItem(RD.c)
+         lossHolds: (0, Wp.y)(),
+         lossStopsPack: (0, Wp.E)(),
+         anyLoss: (0, Wp.f)(),
+         oldIntelDriver: !0 === Ap.h.getItem(Pp.D),
+         defaultOffForPacks: op.c.isWebGpuDefaultOff(),
+         defaultOffReason: op.c.webGpuDefaultOffReason(),
+         settingStored: Ap.h.getItem(Op.tc),
+         setting: op.c.get("clientEscMenuOptions").useWebGpu,
+         urlRenderer: Yp.currentUrl.getSearchParam(Dp.c),
+         storedRenderer: Ap.h.getItem(Dp.g)
```

#### 11. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L109` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L111) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L109)

```diff
-         if ("object" !== typeof DD) return `unreadable (${typeof DD})`;
+         if ("object" !== typeof pp) return `unreadable (${typeof pp})`;
```

#### 12. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L111-L112` → after: `L113-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L113-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L113-L119) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L111-L112)

```diff
-           sD = "number" === typeof pD.at ? pD.at : null;
-         return ["browser " + (zD ? "this one" : "another"), null === sD ? "no time" : `set ${((wD-sD)/BD.j).toFixed(1)} h ago`, `losses ${"number"===typeof pD.losses?pD.losses:"unset (1)"}${null!==sD&&wD-sD<BD.f?", the last within a day":""}`, `first page ${"hidden"===pD.firstPag … [truncated]
+           op = "number" === typeof Op.at ? Op.at : null,
+           Ip = ["browser " + (ip ? "this one" : "another"), null === op ? "no time" : `set ${((cp-op)/wp.m).toFixed(1)} h ago`, `losses ${"number"===typeof Op.losses?Op.losses:"unset (1)"}${null!==op&&cp-op<wp.i?", the last within a day":""}`, `first page ${"hidden"===Op.firstPag … [truncated]
+         if (void 0 !== Op.reason || void 0 !== Op.message) {
+           const pp = "string" === typeof Op.reason ? ep(Op.reason, vp.d) : "no reason";
+           Ip.push(`cause ${pp} ${!0===Op.causeSent?"reported":"unreported"}`)
+         }
+         return Ip.join(", ")
```

#### 13. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L115` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L122) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L115)

```diff
-           return "object" === typeof DD && null !== DD && DD.browser === (0, fD.f)()
+           return "object" === typeof pp && null !== pp && pp.browser === (0, Wp.c)()
```

#### 14. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L123` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L130) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L123)

```diff
-       const DD = (0, fD.o)().now;
+       const pp = (0, Wp.p)().now;
```

#### 15. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L132-L133` → after: `L139-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L139-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L139-L150) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L132-L133)

```diff
-       } = (0, fD.o)(), pD = JSON.stringify(DD) === JSON.stringify(zD) ? "Nf" : `now ${SD(zD)}`;
-       jD(`load (${LD.v?"wasm":"js"}, os ${(0,cD.getOperatingSystem)()}): stored loss ${SD(DD)}; ${pD}; unreported ${function(DD,zD){if(null===DD||void 0===DD||"object"!==typeof DD)return"none";const wD=DD;return zD.map((DD=>`${DD} ${"number"===typeof wD[DD]?wD[DD]:0}`)).join(", " … [truncated]
+       } = (0, Wp.p)(), Op = JSON.stringify(pp) === JSON.stringify(ip) ? "aW" : `now ${Np(ip)}`;
+       Jp(`load (${xp.z?"wasm":"js"}, os ${(0,Lp.getOperatingSystem)()}): stored loss ${Np(pp)}; ${Op}; cause kept apart ${function(pp,ip){if(null===pp||void 0===pp)return"none";const{reason:cp,at:Op}="object"===typeof pp?pp:{},op="number"===typeof Op?`
+         set $ {
+           ((ip - Op) / wp.m).toFixed(1)
+         }
+         h ago`:"no time";return`
+         $ {
+           "string" === typeof cp ? ep(cp, vp.d) : "no reason"
+         }, $ {
+           op
+         }
+         `}((0,yp.f)(),Date.now())}; unreported ${function(pp,ip){if(null===pp||void 0===pp||"object"!==typeof pp)return"none";const cp=pp;return ip.map((pp=>`${pp} ${"number"===typeof cp[pp]?cp[pp]:0}`)).join(", ")}(cp,Wp.b)}; webgpu_loss_page ${Wp.C}`), Jp(`load: ${kp(Bp())}; pa … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L139` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L156) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L139)

```diff
-         return `engine (js): useWebGpu ${OD(DD.useWebGpu)} (${pD}); ${ED(zD)}; webgpu fallback ${null!==wD&&void 0!==wD?wD:"unset"}`
+         return `engine (js): useWebGpu ${jp(pp.useWebGpu)} (${Op}); ${mp(ip)}; webgpu fallback ${null!==cp&&void 0!==cp?cp:"unset"}`
```

#### 17. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L157` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L174) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L157)

```diff
-           }] = await Promise.all([wD.e(115).then((() => wD(39186))), wD.e(91).then((() => wD(41179))), wD.e(138).then((() => wD(41183)))]), cD = await sD.load();
+           }] = await Promise.all([cp.e(117).then((() => cp(39396))), cp.e(93).then((() => cp(41507))), cp.e(141).then((() => cp(41515)))]), Lp = await op.load();
```

#### 18. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L159` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L176) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L159)

```diff
-           const gD = null !== (zD = KD()) && void 0 !== zD ? zD : rD(DD),
+           const Yp = null !== (ip = Ip()) && void 0 !== ip ? ip : Sp(pp),
```

#### 19. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L163` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L180) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L163)

```diff
-             text: `${"active"===cD.status?VD(cD.pack.name,"active",RD.length):VD(null,`blocked (${cD.messageKey})`,null!==(pD=null===RD||void 0===RD?void 0:RD.length)&&void 0!==pD?pD:null)}; game policy ${gD}, runs in it ${AD?"yes":"no"}`,
+             text: `${"active"===Lp.status?Mp(Lp.pack.name,"active",Dp.length):Mp(null,`blocked (${Lp.messageKey})`,null!==(Op=null===Dp||void 0===Dp?void 0:Dp.length)&&void 0!==Op?Op:null)}; game policy ${Yp}, runs in it ${Ap?"yes":"no"}`,
```

#### 20. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L167` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L184) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L167)

```diff
-       if (null === rD) return void(CD.noPack() && jD(`join ${KD}: no shader pack on this page (further joins without one not logged)`));
+       if (null === Sp) return void(Ep.noPack() && Jp(`join ${Ip}: no shader pack on this page (further joins without one not logged)`));
```

#### 21. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L170` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L187) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L170)

```diff
-       if ("cap" === LD) return void jD(`join ${KD}: further joins not logged`);
+       if ("cap" === xp) return void Jp(`join ${Ip}: further joins not logged`);
```

#### 22. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L174-L176` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L191-L193) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L174-L176)

```diff
-               return void 0 === DD.couldntRun ? "joined" : `joined without the pack: ${DD.couldntRun}`;
-             case "sw":
-               return "sw";
+               return void 0 === pp.couldntRun ? "joined" : `joined without the pack: ${pp.couldntRun}`;
+             case "OO":
+               return "OO";
```

#### 23. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L178` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L195) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L178)

```diff
-               return `failed: ${DD.messageKey}`
+               return `failed: ${pp.messageKey}`
```

#### 24. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L181-L182` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L198-L199) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L181-L182)

```diff
-         gD = ("ok" === zD.status ? zD.couldntRun : "failed" === zD.status ? zD.messageKey : void 0) === PD ? `; cause: ${sD()}` : "";
-       "outcome" !== LD ? (jD(`join ${KD}: ${rD.text}`), rD.runs && (jD(`join ${KD}: needs WebGPU; ${pD()}`), jD(`join ${KD}: ${JD(dD())}`)), jD(`join ${KD}: ${cD}${gD}`)) : jD(`join ${KD}: ${cD}${gD}`)
+         Yp = ("ok" === ip.status ? ip.couldntRun : "failed" === ip.status ? ip.messageKey : void 0) === Cp ? `; cause: ${op()}` : "";
+       "outcome" !== xp ? (Jp(`join ${Ip}: ${Sp.text}`), Sp.runs && (Jp(`join ${Ip}: needs WebGPU; ${Op()}`), Jp(`join ${Ip}: ${kp(Bp())}`)), Jp(`join ${Ip}: ${Lp}${Yp}`)) : Jp(`join ${Ip}: ${Lp}${Yp}`)
```

#### 25. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L188-L189` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L205-L206) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L188-L189)

```diff
-       return ZD(DD, wD, (() => `Lite runtime ${null===zD?"no":"yes, running "+(sD?"yes":"no")}; ${ED((0,KD.j)())}`), (() => {
-         return DD = xD, zD = dD(), wD = "ios" === (0, cD.getOperatingSystem)(), pD = iD(), null === DD ? "engine choice not seen" : DD.packActive ? (0, GD.c)(DD.packActive, DD.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : zD.lossSt … [truncated]
+       return ap(pp, cp, (() => `Lite runtime ${null===ip?"no":"yes, running "+(op?"yes":"no")}; ${mp((0,Ip.j)())}`), (() => {
+         return pp = Xp, ip = Bp(), cp = "ios" === (0, Lp.getOperatingSystem)(), Op = Tp(), null === pp ? "engine choice not seen" : pp.packActive ? (0, tp.c)(pp.packActive, pp.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : ip.lossSt … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L200` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L217) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L200)

```diff
-         couldntRun: null !== wD && void 0 !== wD ? wD : void 0
+         couldntRun: null !== cp && void 0 !== cp ? cp : void 0
```

#### 27. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L203` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L220) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L203)

```diff
-         return null === DD ? "pick not seen" : "off_after_loss" === DD.reason ? `off after a loss, ${"pack"===DD.source?QD(wD,pD):`from ${null!==(LD=DD.source)&&void 0!==LD?LD:"none"}`}` : "not_requested" === DD.reason ? `not requested, from ${null!==(rD=DD.source)&&void 0!==rD?r … [truncated]
+         return null === pp ? "pick not seen" : "off_after_loss" === pp.reason ? `off after a loss, ${"pack"===pp.source?Rp(cp,Op):`from ${null!==(xp=pp.source)&&void 0!==xp?xp:"none"}`}` : "not_requested" === pp.reason ? `not requested, from ${null!==(Sp=pp.source)&&void 0!==Sp?S … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L213-L214` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L230-L231) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L213-L214)

```diff
-         return `loss (${DD}): ${zD}${null===wD?"":` ${MD(wD,nD)}`}; ${pD}`
-       }(DD, zD, wD, `stored ${SD((0,fD.o)().now)}; holds ${sD.lossHolds?"yes":"no"}, stops packs ${sD.lossStopsPack?"yes":"no"}`))
+         return `loss (${pp}): ${ip}${null===cp?"":` ${ep(cp,dp)}`}; ${Op}`
+       }(pp, ip, cp, `stored ${Np((0,Wp.p)().now)}; holds ${op.lossHolds?"yes":"no"}, stops packs ${op.lossStopsPack?"yes":"no"}`))
```

#### 29. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L217` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L234) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L217)

```diff
-   34145: (DD, zD, wD) => {
+   34354: (pp, ip, cp) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (890 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1)

```diff
- /*! For license information please see tz47m9.worldgenWorker.f9aa61a5.chunk.js.LICENSE.txt */
+ /*! For license information please see sn3sfj.worldgenWorker.98fc8e5b.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4)

```diff
-       1661: DD => {
+       1664: pp => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82)

```diff
-             return zD === 1 / 0 ? zD : void 0 !== zD ? Math.max(0, Math.ceil(zD - wD())) : 0
+             return ip === 1 / 0 ? ip : void 0 !== ip ? Math.max(0, Math.ceil(ip - cp())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151)

```diff
-       2842: DD => {
+       2944: pp => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157)

```diff
-       2846: DD => {
+       2947: pp => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167)

```diff
-       39690: DD => {
+       39965: pp => {
```

#### 7. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171)

```diff
-             for (var rD = sD[KD] = new Array(zD), LD = KD < pD / 2 ? KD : KD + 1, cD = 1; cD <= zD; cD++) {
+             for (var Sp = op[Ip] = new Array(ip), xp = Ip < Op / 2 ? Ip : Ip + 1, Lp = 1; Lp <= ip; Lp++) {
```

#### 8. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L178-L180` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180)

```diff
-       2839: (DD, zD, wD) => {
-         var pD = wD(2842),
-           sD = wD(2846),
+       2937: (pp, ip, cp) => {
+         var Op = cp(2944),
+           op = cp(2947),
```

#### 9. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L325-L328` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328)

```diff
-       39666: (DD, zD, wD) => {
-         var pD = wD(39671).integer,
-           sD = wD(39679),
-           KD = wD(39686);
+       39942: (pp, ip, cp) => {
+         var Op = cp(39947).integer,
+           op = cp(39953),
+           Ip = cp(39962);
```

#### 10. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L392-L395` → after: `L392-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395) · [Before (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395)

```diff
-       39693: (DD, zD, wD) => {
-         var pD = wD(39671).array,
-           sD = wD(39679),
-           KD = wD(39686);
+       39973: (pp, ip, cp) => {
+         var Op = cp(39947).array,
+           op = cp(39953),
+           Ip = cp(39962);
```

#### 11. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L478-L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479)

```diff
-       39686: (DD, zD, wD) => {
-         var pD = wD(39690);
+       39962: (pp, ip, cp) => {
+         var Op = cp(39965);
```

#### 12. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L498-L500` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500)

```diff
-       39659: (DD, zD, wD) => {
-         var pD = wD(39666),
-           sD = wD(39693);
+       39936: (pp, ip, cp) => {
+         var Op = cp(39942),
+           op = cp(39973);
```

#### 13. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521)

```diff
-       39679: DD => {
+       39953: pp => {
```

#### 14. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535)

```diff
-       39671: DD => {
+       39947: pp => {
```

#### 15. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L561-L562` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562)

```diff
-       37713: (DD, zD, wD) => {
-         var pD = wD(37718);
+       37951: (pp, ip, cp) => {
+         var Op = cp(37956);
```

#### 16. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594)

```diff
-       37718: (DD, zD) => {
+       37956: (pp, ip) => {
```

#### 17. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648)

```diff
-       39613: (DD, zD, wD) => {
+       39873: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L650)

```diff
-           b: () => Rz
+           e: () => Pi
```

#### 19. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L652-L654` → after: `L652-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654) · [Before (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654)

```diff
-         var pD = wD(39635),
-           sD = wD(39625),
-           KD = wD(39701);
+         var Op = cp(39903),
+           op = cp(39890),
+           Ip = cp(39978);
```

#### 20. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663)

```diff
-           return rD(`${DD}Wasteland`)
+           return Sp(`${pp}Wasteland`)
```

#### 21. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698)

```diff
-           return 36 * (1 === pD ? DD : zD) + 2 + Math.floor(32 * cD(DD, zD, wD ^ UD ^ pD))
+           return 36 * (1 === Op ? pp : ip) + 2 + Math.floor(32 * Lp(pp, ip, cp ^ Pp ^ Op))
```

#### 22. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L700-L701` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701)

```diff
-         var GD = wD(39616),
-           hD = wD(39633);
+         var wp = cp(39881),
+           vp = cp(39894);
```

#### 23. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L728)

```diff
-             DD !== VD && (VD = DD, PD = (0, GD.i)(DD), CD = LD(DD))
+             pp !== Rp && (Rp = pp, qp = (0, wp.h)(pp), Mp = xp(pp))
```

#### 24. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777)

```diff
-               return pD > wD && (KD = .25 - KD), DD < 0 && (KD = .5 - KD), zD < 0 ? 1 - KD : KD
+               return Op > cp && (Ip = .25 - Ip), pp < 0 && (Ip = .5 - Ip), ip < 0 ? 1 - Ip : Ip
```

#### 25. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810)

```diff
-             return wD && jD(wD, DD, zD) ? wD : null
+             return cp && lp(cp, pp, ip) ? cp : null
```

#### 26. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817)

```diff
-                 if (KD && sD >= KD.floorY - hD.f && pD <= KD.topY + MD) {
+                 if (Ip && op >= Ip.floorY - vp.i && Op <= Ip.topY + Hp) {
```

#### 27. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842)

```diff
-         var ZD = wD(39653);
+         var bp = cp(39924);
```

#### 28. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846)

```diff
-             this.CI = zD, this.chances = sD, this.mound = KD, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = wD.salt ^ rD(pD), this.sinkholes = wD.sinkholes;
+             this.Qy = ip, this.chances = op, this.mound = Ip, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = cp.salt ^ Sp(Op), this.sinkholes = cp.sinkholes;
```

#### 29. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867)

```diff
-               for (let sD = 0; sD < LD.height && cD + sD < this.CI; sD++) cD + sD >= 0 && DD.set(pD - zD, cD + sD, KD - wD, LD.block);
+               for (let op = 0; op < xp.height && Lp + op < this.Qy; op++) Lp + op >= 0 && pp.set(Op - ip, Lp + op, Ip - cp, xp.block);
```

#### 30. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874)

```diff
-               if (RD += null !== (AD = this.chances[UD]) && void 0 !== AD ? AD : 0, gD < RD) return void(yD.has(UD) && this.sinkholes.taking(pD, KD) || this.place(DD, pD - zD, rD + 1 - sD, KD - wD, UD, cD(pD, KD, 1540483477 ^ this.salt)))
+               if (Dp += null !== (Ap = this.chances[Pp]) && void 0 !== Ap ? Ap : 0, Yp < Dp) return void(hp.has(Pp) && this.sinkholes.taking(Op, Ip) || this.place(pp, Op - ip, Sp + 1 - op, Ip - cp, Pp, Lp(Op, Ip, 1540483477 ^ this.salt)))
```

#### 31. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L879` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879) · [Before (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879)

```diff
-                 wD + sD >= 0 && wD + sD < this.CI && DD.set(zD, wD + sD, pD, KD)
+                 cp + op >= 0 && cp + op < this.Qy && pp.set(ip, cp + op, Op, Ip)
```

#### 32. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L888)

```diff
-         class mD extends ZD.g {
+         class np extends bp.j {
```

#### 33. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896)

```diff
-             super.init(), this.floraGenerator = new kD(this.blockMetadata, this.CI, this.noise, this.seed, this.floraChances, ((DD, zD) => this.mound(DD, zD)))
+             super.init(), this.floraGenerator = new ap(this.blockMetadata, this.Qy, this.noise, this.seed, this.floraChances, ((pp, ip) => this.mound(pp, ip)))
```

#### 34. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934)

```diff
-               return 0 === pD || 1 === pD && cD(DD, zD, wD ^ UD ^ 3) < .5 ? 2 - pD : 0
+               return 0 === Op || 1 === Op && Lp(pp, ip, cp ^ Pp ^ 3) < .5 ? 2 - Op : 0
```

#### 35. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966)

```diff
-             }], `${DD}WastelandCanyon`), this.canyonWarp = new sD.j([{
+             }], `${pp}WastelandCanyon`), this.canyonWarp = new op.j([{
```

#### 36. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969)

```diff
-             }], `${DD}WastelandCanyonWarp`), this.canyonMask = new sD.j([{
+             }], `${pp}WastelandCanyonWarp`), this.canyonMask = new op.j([{
```

#### 37. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972)

```diff
-             }], `${DD}WastelandCanyonMask`), this.patchNoise = new sD.j([{
+             }], `${pp}WastelandCanyonMask`), this.patchNoise = new op.j([{
```

#### 38. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978)

```diff
-             }], `${DD}WastelandPatch`), this.fineNoise = new sD.j([{
+             }], `${pp}WastelandPatch`), this.fineNoise = new op.j([{
```

#### 39. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984)

```diff
-             }], `${DD}WastelandFine`)
+             }], `${pp}WastelandFine`)
```

#### 40. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1007-L1010` → after: `L1007-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010)

```diff
-         var aD = wD(4263),
-           uD = wD(619),
-           vD = wD(39104),
-           tD = wD(39647);
+         var Gp = cp(4346),
+           rp = cp(640),
+           Zp = cp(39317),
+           zp = cp(39910);
```

#### 41. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1020-L1021` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1020-L1021) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1020-L1021)

```diff
-             const DD = new vD.d;
-             return DD.set(0, 0, 0, YD("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             const pp = new Zp.e;
+             return pp.set(0, 0, 0, Kp("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061)

```diff
-               qualityDistribution: new aD.e([{
+               qualityDistribution: new Gp.f([{
```

#### 43. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076)

```diff
-               mobTypeDistribution: new aD.e([{
+               mobTypeDistribution: new Gp.f([{
```

#### 44. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084)

```diff
-           return (0, ZD.hb)(DD, [{
+           return (0, bp.gb)(pp, [{
```

#### 45. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1087` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1087) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1087)

```diff
-           }, ...ZD.d.map((DD => ({
+           }, ...bp.i.map((pp => ({
```

#### 46. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094)

```diff
-             super(DD, zD, wD, `${KD}DustFlats`, rD, LD, pz(pD.l.MEDIUM, 1.25, Dz)), this.key = "dustFlats", this.floraChances = {
+             super(pp, ip, cp, `${Ip}DustFlats`, Sp, xp, Ii(Op.l.MEDIUM, 1.25, ci)), this.key = "dustFlats", this.floraChances = {
```

#### 47. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104)

```diff
-             }], `${KD}DustFlatsHeight`)
+             }], `${Ip}DustFlatsHeight`)
```

#### 48. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119)

```diff
-             super(DD, zD, wD, `${pD}ScorchedMesa`, KD, rD), this.key = "scorchedMesa", this.floraChances = {
+             super(pp, ip, cp, `${Op}ScorchedMesa`, Ip, Sp), this.key = "scorchedMesa", this.floraChances = {
```

#### 49. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1129` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129)

```diff
-             }], `${pD}ScorchedMesaHeight`);
+             }], `${Op}ScorchedMesaHeight`);
```

#### 50. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161)

```diff
-             super(DD, zD, wD, `${pD}ShatteredHighlands`, KD, rD), this.key = "shatteredHighlands", this.floraChances = {
+             super(pp, ip, cp, `${Op}ShatteredHighlands`, Ip, Sp), this.key = "shatteredHighlands", this.floraChances = {
```

#### 51. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1167` → after: `L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167)

```diff
-             }], `${pD}HighlandsRidge1`), this.ridge2 = new sD.j([{
+             }], `${Op}HighlandsRidge1`), this.ridge2 = new op.j([{
```

#### 52. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170)

```diff
-             }], `${pD}HighlandsRidge2`), this.bumps = new sD.j([{
+             }], `${Op}HighlandsRidge2`), this.bumps = new op.j([{
```

#### 53. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1173` → after: `L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173)

```diff
-             }], `${pD}HighlandsBumps`)
+             }], `${Op}HighlandsBumps`)
```

#### 54. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184)

```diff
-             return 0 !== sD ? sD : zD > 50 ? this.ids.Stone : zD > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== op ? op : ip > 50 ? this.ids.Stone : ip > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 55. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195)

```diff
-               return null === rD || gD(DD >> 2, zD, wD >> 2, sD) >= .25 ? null : gD(DD, zD, wD, sD) < .65 ? rD : null
+               return null === Sp || Yp(pp >> 2, ip, cp >> 2, op) >= .25 ? null : Yp(pp, ip, cp, op) < .65 ? Sp : null
```

#### 56. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202)

```diff
-             super(DD, zD, wD, `${KD}RuinFields`, rD, LD, pz(pD.l.HIGH, 2.25, zz)), this.key = "ruinFields", this.floraChances = {
+             super(pp, ip, cp, `${Ip}RuinFields`, Sp, xp, Ii(Op.l.HIGH, 2.25, Oi)), this.key = "ruinFields", this.floraChances = {
```

#### 57. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1213)

```diff
-             }], `${KD}RuinFieldsHeight`)
+             }], `${Ip}RuinFieldsHeight`)
```

#### 58. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1225)

```diff
-             super(DD, zD, wD, `${pD}SaltFlats`, KD, rD), this.key = "saltFlats", this.floraChances = {
+             super(pp, ip, cp, `${Op}SaltFlats`, Ip, Sp), this.key = "saltFlats", this.floraChances = {
```

#### 59. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1234)

```diff
-             }], `${pD}SaltFlatsHeight`)
+             }], `${Op}SaltFlatsHeight`)
```

#### 60. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1252)

```diff
-             super(DD, zD, wD, `${pD}SurvivorGrove`, KD, rD), this.key = "survivorGrove", this.floraChances = {
+             super(pp, ip, cp, `${Op}SurvivorGrove`, Ip, Sp), this.key = "survivorGrove", this.floraChances = {
```

#### 61. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1262)

```diff
-             }], `${pD}SurvivorGroveHeight`)
+             }], `${Op}SurvivorGroveHeight`)
```

#### 62. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1277)

```diff
-               CI: zD,
+               Qy: ip,
```

#### 63. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1293)

```diff
-               AD = (0, KD.j)(wD);
+               Ap = (0, Ip.o)(cp);
```

#### 64. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1303)

```diff
-       596: (DD, zD, wD) => {
+       616: (pp, ip, cp) => {
```

#### 65. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1305)

```diff
-           e: () => pD
+           d: () => Op
```

#### 66. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1313-L1314` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1313-L1314) · [Before (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1313-L1314)

```diff
-               if (void 0 !== wD[DD]) throw new Error(`Duplicate value found in bi-directional table: ${String(DD)}`);
-               wD[DD] = "string" === zD ? pD : Number(pD)
+               if (void 0 !== cp[pp]) throw new Error(`Duplicate value found in bi-directional table: ${String(pp)}`);
+               cp[pp] = "string" === ip ? Op : Number(Op)
```

#### 67. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1326)

```diff
-       39647: (DD, zD, wD) => {
+       39910: (pp, ip, cp) => {
```

#### 68. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1328)

```diff
-           e: () => sD
+           b: () => op
```

#### 69. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1330)

```diff
-         var pD = wD(39104);
+         var Op = cp(39317);
```

#### 70. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1333)

```diff
-             let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pD.d,
+             let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Op.e,
```

#### 71. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1359)

```diff
-       39104: (DD, zD, wD) => {
+       39317: (pp, ip, cp) => {
```

#### 72. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1361)

```diff
-           d: () => pD
+           e: () => Op
```

#### 73. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1486)

```diff
-             super(`${pD.name} has been mutated during iteration`)
+             super(`${Op.name} has been mutated during iteration`)
```

#### 74. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1490)

```diff
-       39698: (DD, zD, wD) => {
+       39975: (pp, ip, cp) => {
```

#### 75. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1492)

```diff
-           e: () => pD,
+           b: () => Op,
```

#### 76. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1560` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1560) · [Before (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1560)

```diff
-           return DD > -KD && DD < KD && zD > -KD && zD < KD ? DD * (2 * KD) + zD : `${DD}|${zD}`
+           return pp > -Ip && pp < Ip && ip > -Ip && ip < Ip ? pp * (2 * Ip) + ip : `${pp}|${ip}`
```

#### 77. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1572)

```diff
-       39650: (DD, zD, wD) => {
+       39919: (pp, ip, cp) => {
```

#### 78. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1583)

```diff
-       39653: (DD, zD, wD) => {
+       39924: (pp, ip, cp) => {
```

#### 79. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1585-L1587` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1585) · [Before (L1585-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1585-L1587)

```diff
-           c: () => mD,
-           d: () => PD,
-           g: () => TD,
+           e: () => np,
```

#### 80. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1589` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1587) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1589)

```diff
-           k: () => vD,
+           j: () => Ep,
```

#### 81. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1591-L1600` → after: `L1589-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1589-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1589-L1600) · [Before (L1591-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1591-L1600)

```diff
-           p: () => bD,
-           s: () => ZD,
-           v: () => HD,
-           x: () => YD,
-           y: () => eD,
-           C: () => jD,
-           G: () => WD,
-           H: () => dD,
-           L: () => kD,
-           P: () => oD,
+           m: () => Zp,
+           o: () => ii,
+           q: () => Xp,
+           t: () => bp,
+           w: () => Vp,
+           z: () => Kp,
+           A: () => Fp,
+           B: () => lp,
+           F: () => Tp,
+           J: () => Qp,
+           K: () => ap,
+           M: () => gp,
```

#### 82. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1602` → after: `L1602-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1602-L1603) · [Before (L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1602)

```diff
-           S: () => yD,
+           U: () => hp,
+           V: () => Jp,
```

#### 83. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1608-L1609` → after: `L1608-L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1608-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1608-L1609) · [Before (L1608-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1608-L1609)

```diff
-           fb: () => lD,
-           hb: () => xD
+           eb: () => Np,
+           gb: () => Cp
```

#### 84. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1611-L1614` → after: `L1611-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1611-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1611-L1614) · [Before (L1611-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1611-L1614)

```diff
-         var pD = wD(39625),
-           sD = wD(619),
-           KD = wD(39657),
-           rD = wD(4263);
+         var Op = cp(39890),
+           op = cp(640),
+           Ip = cp(39927),
+           Sp = cp(4346);
```

#### 85. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1621` → after: `L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1621) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1621)

```diff
-             this.columnRandom = new rD.g(""), this.flowerPatchRandom = new rD.g(""), this.cactusRandom = new rD.g(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
+             this.columnRandom = new Sp.h(""), this.flowerPatchRandom = new Sp.h(""), this.cactusRandom = new Sp.h(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
```
