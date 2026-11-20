# Changed — Bundle Modifications Report (Part 002 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `2 / 58` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/100.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/100.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3)

#### 17. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L359-L379` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L114) · [Before (L359-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L359-L379)

```diff
-                 children: (0, Jz.jsx)(Nz.f, {
-                   thumbnail: zz.thumbnail,
-                   name: zz.name
-                 })
-               }), (0, Jz.jsxs)("td", {
-                 className: "StudioLeaderboardOwner",
-                 children: [null === zz.owner && "-", null !== zz.owner && (0, Jz.jsx)(Rz.i, {
-                   playerSocialPreview: zz.owner,
-                   showLocation: !1,
-                   opensProfileCard: !1
-                 })]
-               }), null === yz && (0, Jz.jsx)("td", {
-                 children: (0, lz.nb)(zz.category)
-               }), Bz && (0, Jz.jsx)(hz, {
-                 discoverability: zz.discoverability
-               }), (0, Jz.jsx)(qz, {
- ... (5 more removed lines; see GitHub link above)
+                 children: (0, Aq.S)(null !== (lq = (0, Pq.c)(Yq, gq)) && void 0 !== lq ? lq : 0)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L398` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L229) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L398)

```diff
-   4680: (zz, uz, bz) => {
+   4753: (qq, Eq, gq) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L400-L401` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L231-L232) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L400-L401)

```diff
-       b: () => lz,
-       f: () => iz
+       c: () => mq,
+       d: () => Oq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L403-L404` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L234-L235) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L403-L404)

```diff
-     var Ez = bz(1513),
-       nz = bz(1089);
+     var Yq = gq(1529),
+       lq = gq(1070);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L429` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L260) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L429)

```diff
-         src: (0, Ez.m)(uz),
+         src: (0, Yq.g)(Eq),
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L434` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L265) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L434)

```diff
-   6136: (zz, uz, bz) => {
+   4748: (qq, Eq, gq) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L438-L449` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L269-L270) · [Before (L438-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L438-L449)

```diff
-     const Ez = {
-       1: bz(6145),
-       2: bz(6154),
-       3: bz(6163)
-     }
-   },
-   4678: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Mz
-     });
-     var Ez = bz(56),
-       nz = bz(1038),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L451` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L272) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L451)

```diff
-       lz = bz(1089);
+       mq = gq(1070);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/100.js` (Changed code · before: `L477-L486` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e394b9a31c58f773482e6a42ba7154c75510aece1fb2911d87819a0ce44a1dd3) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/100.js#L298) · [Before (L477-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/100.js#L477-L486)

```diff
-   4665: () => {},
-   6145: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
-   },
-   6154: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
-   },
-   6163: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15 … [truncated]
-   }
+   4735: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/101.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/101.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L4)

```diff
-   4670: (zz, uz, bz) => {
+   4739: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L6)

```diff
-       b: () => dz
+       d: () => Wq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L8)

```diff
-     var Ez = bz(1038),
+     var Yq = gq(1018),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L10-L16` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L10-L16) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L10-L16)

```diff
-       iz = bz(1047),
-       lz = bz(1305),
-       Mz = bz(3248),
-       tz = bz(128),
-       Hz = bz(3298),
-       Oz = bz(3286),
-       pz = bz(1089);
+       Oq = gq(1025),
+       mq = gq(1326),
+       xq = gq(3383),
+       Aq = gq(136),
+       cq = gq(3428),
+       uq = gq(3416),
+       Bq = gq(1070);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L22)

```diff
-       const bz = (0, tz.o)() ? "large" : "small",
+       const gq = (0, Aq.i)() ? "large" : "small",
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L24)

```diff
-         dz = (0, Mz.f)(Ez),
+         Wq = (0, xq.e)(Yq),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L28)

```diff
-         children: [dz.isLoading && !Fz && (0, pz.jsx)(lz.c, {
+         children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L34)

```diff
-           style: (0, Oz.f)(dz),
+           style: (0, uq.e)(Wq),
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L40)

```diff
-           children: (0, pz.jsx)(iz.c, {
+           children: (0, Bq.jsx)(Oq.d, {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L47` → after: `L47-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L47-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L47-L444) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L47)

```diff
-   4780: (zz, uz, bz) => {
+   6381: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => Gq
+     });
+     gq(4735);
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(296),
+       xq = gq(997),
+       Aq = gq(1214),
+       cq = gq(985),
+       uq = gq(1183),
+       Bq = gq(1477),
+       Wq = gq(3438),
+       Nq = gq(1101),
+ ... (382 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L51-L52` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L448-L449) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L51-L52)

```diff
-     var Ez = bz(56),
-       nz = bz(1038),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L54-L163` → after: `L451-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L451-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L451-L472) · [Before (L54-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L54-L163)

```diff
-       lz = bz(4706),
-       Mz = bz(1305),
-       tz = bz(1181),
-       Hz = bz(2907),
-       Oz = bz(3059),
-       pz = bz(1047),
-       dz = bz(1089);
- 
-     function Fz(zz) {
-       let {
-         folderName: uz,
-         onTexturePackUpdated: nz,
-         disabled: Fz = !1,
-         maxFileSizeMb: Zz,
-         packOwner: Rz
-       } = zz;
- ... (94 more removed lines; see GitHub link above)
+       mq = gq(1070);
+ 
+     function xq(qq) {
+       let {
+         columns: Eq,
+         rows: gq,
+         getRowKey: lq,
+         renderRow: xq,
+         className: Aq
+       } = qq;
+       return (0, mq.jsxs)("table", {
+         className: Oq()("Table", Aq),
+         children: [(0, mq.jsx)("thead", {
+           children: (0, mq.jsx)("tr", {
+             children: Eq.map((qq => (0, mq.jsx)("th", {
+               children: qq.header
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L168-L665` → after: `L477-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L477-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/101.js#L477-L485) · [Before (L168-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/101.js#L168-L665)

```diff
-   4746: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Zz,
-       e: () => fz,
-       f: () => Rz,
-       j: () => Xz
-     });
-     var Ez = bz(56),
-       nz = bz(4753),
-       iz = bz(4144),
-       lz = bz(1332),
-       Mz = bz(4770),
-       tz = bz(1038),
-       Hz = bz.n(tz),
-       Oz = bz(1322),
-       pz = bz(1673),
- ... (482 more removed lines; see GitHub link above)
+   4735: () => {},
+   6295: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   6297: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   6299: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/102.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/102.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860)

#### 1. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L4)

```diff
-   6231: (zz, uz, bz) => {
+   4739: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L8-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L8) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L8-L16)

```diff
-     var Ez = bz(56),
-       nz = bz(1419),
-       iz = bz(1473),
-       lz = bz(3238),
-       Mz = bz(1114),
-       tz = bz(1305),
-       Hz = bz(1332),
-       Oz = bz(1047),
-       pz = bz(1038),
+     var Yq = gq(1018),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L18` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L10-L16) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L18)

```diff
-       Fz = bz(1089);
+       Oq = gq(1025),
+       mq = gq(1326),
+       xq = gq(3383),
+       Aq = gq(136),
+       cq = gq(3428),
+       uq = gq(3416),
+       Bq = gq(1070);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L22-L23` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L20) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L22-L23)

```diff
-         info: uz,
-         className: bz
+         game: Eq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L26-L50` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L27-L42) · [Before (L26-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L26-L50)

```diff
-         className: dz()("GameApprovalInfoDetails", bz),
-         children: [(0, Fz.jsxs)("div", {
-           className: dz()("GameApprovalInfoSummary", uz.overallPassed ? "Passed" : "Failed"),
-           children: [(0, Fz.jsx)(Oz.c, {
-             name: uz.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, Fz.jsx)("span", {
-             children: uz.summary
-           })]
-         }), uz.rows.length > 0 && (0, Fz.jsx)("div", {
-           className: "GameApprovalInfoRows",
-           children: uz.rows.map((zz => (0, Fz.jsxs)("div", {
-             className: dz()("GameApprovalInfoRow", zz.passed ? "Passed" : "Failed"),
-             children: [(0, Fz.jsx)(Oz.c, {
-               name: zz.passed ? "check" : "xmark"
-             }), (0, Fz.jsxs)("div", {
-               className: "GameApprovalInfoRowText",
- ... (9 more removed lines; see GitHub link above)
+         className: "SchematicImageContainer",
+         children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
+           loaderType: "Secondary"
+         }), !Wq.failed && (null !== Wq.src || Nq) && (0, Bq.jsx)("div", {
+           className: lq()("SchematicImage", uq.i, {
+             SchematicImageFadeIn: Wq.fadeIn && !Nq
+           }),
+           style: (0, uq.e)(Wq),
+           children: (0, Bq.jsx)(uq.d, {
+             image: Wq
+           })
+         }), Wq.failed && (0, Bq.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, Bq.jsx)(Oq.d, {
+             name: "face-dizzy"
+           })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L54-L66` → after: `L46-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L46-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L46-L60) · [Before (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L54-L66)

```diff
-     var Rz = bz(1181),
-       Kz = bz(1322);
- 
-     function wz(zz) {
-       Kz.NotificationProvider.showCustomPopup({
-         body: () => (0, Fz.jsx)(Xz, {
-           ...zz
-         }),
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
-       })
-     }
+   },
+   4875: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Nq
+     });
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(4792),
+       xq = gq(1326),
+       Aq = gq(1183),
+       cq = gq(3059),
+       uq = gq(3174),
+       Bq = gq(1025),
+       Wq = gq(1070);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L70-L72` → after: `L64-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L64-L68) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L70-L72)

```diff
-         schematicId: uz,
-         canOverride: bz,
-         onApprovalChanged: pz
+         folderName: Eq,
+         onTexturePackUpdated: lq,
+         disabled: Nq = !1,
+         maxFileSizeMb: aq,
+         packOwner: Vq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L76-L96` → after: `L72-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L72-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L72-L112) · [Before (L76-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L76-L96)

```diff
-       } = (0, Rz.F)(), {
-         userContext: Kz
-       } = (0, Mz.c)(), wz = (0, lz.e)(), [Xz, fz] = (0, Ez.useState)(null), [sz, rz] = (0, Ez.useState)(null), [oz, Nz] = (0, Ez.useState)(!1), vz = (0, Ez.useCallback)((() => {
-         rz(null), iz.c.getGameApprovalInfo(Kz, uz).then((zz => {
-           wz.current && fz(zz)
-         })).catch((zz => {
-           console.error("Failed to get game approval info", zz), wz.current && rz(dz("studio:approvalLoadFailed"))
-         }))
-       }), [Kz, uz, wz, dz]);
-       (0, Ez.useEffect)((() => {
-         vz()
-       }), [vz]);
-       const xz = zz => {
-         oz || (Nz(!0), iz.c.setGameApproval(Kz, uz, zz).then((() => {
-           null === pz || void 0 === pz || pz(), wz.current && vz()
-         })).catch((zz => {
- ... (5 more removed lines; see GitHub link above)
+       } = (0, Aq.v)(), [jq, Hq] = (0, Yq.useState)(!1), [oq, Pq] = (0, Yq.useState)(null), [Qq, yq] = (0, Yq.useState)(null), tq = (0, Yq.useRef)(null);
+       const {
+         getRootProps: rq,
+         getInputProps: vq,
+         isDragActive: hq
+       } = (0, mq.e)({
+         onDrop: async function(qq) {
+           Hq(!0);
+           try {
+             const Eq = await (0, cq.o)(qq);
+             if ("customGame" === Vq && (0, uq.k)(Eq)) return void Pq(dq(uq.b));
+             if (void 0 !== aq) {
+               const qq = JSON.stringify(Eq).length / 1048576;
+               if (qq > aq) return void Pq(`File size is too large. Max size is ${aq}MB. Current size is ${qq}MB.`)
+             }
+             Pq(null), yq(null), lq(Eq), tq.current = Eq,
+ ... (25 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L98-L104` → after: `L114-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L114-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L114-L125) · [Before (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L98-L104)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, Fz.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: dz("studio:approvalTitle")
-         }), !Xz && !sz && (0, Fz.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, Fz.jsx)(tz.c, {})
+         className: "CustomTexturePackContainer",
+         children: [(0, Wq.jsxs)("div", {
+           className: "CustomTextureWarning",
+           children: [dq("settingsMenu:customTextureWarning"), ".", (0, Wq.jsx)("br", {}), dq("settingsMenu:viewDocumentation"), ":", " ", (0, Wq.jsx)("a", {
+             href: "https://github.com/Bloxdy/texturePacks",
+             target: "_blank",
+             rel: "noreferrer",
+             children: "github.com/Bloxdy/texturePacks"
+           })]
+         }), oq && (0, Wq.jsxs)("div", {
+           className: "CustomTextureError",
+           children: [dq("general:error"), ": ", oq]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L106` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L127) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L106)

```diff
-           className: "ApprovalInfoPopupError",
+           className: "CustomTextureError",
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L108-L139` → after: `L129-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L129-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L129-L147) · [Before (L108-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L108-L139)

```diff
-         }), Xz && (0, Fz.jsxs)(Fz.Fragment, {
-           children: [(0, Fz.jsx)(Zz, {
-             info: Xz
-           }), bz && (0, Fz.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== Xz.manualOverride && (0, Fz.jsx)(Hz.f, {
-               tooltipInner: (0, Fz.jsx)("div", {
-                 children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
-               }),
-               children: (0, Fz.jsxs)(nz.q, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   xz(!0)
-                 },
-                 disabled: oz,
-                 children: [(0, Fz.jsx)(Oz.c, {
- ... (16 more removed lines; see GitHub link above)
+         }), (0, Wq.jsxs)("div", {
+           ...rq({
+             className: Oq()("CustomTextureFolderUpload", {
+               ActiveDrag: hq,
+               Disabled: Nq
+             })
+           }),
+           children: [(0, Wq.jsx)("input", {
+             ...vq({
+               webkitdirectory: "true"
+             })
+           }), jq && (0, Wq.jsx)("div", {
+             className: "CustomTextureFolderUploadLoading",
+             children: (0, Wq.jsx)(xq.e, {})
+           }), !jq && !hq && Eq && (0, Wq.jsxs)(Wq.Fragment, {
+             children: [(0, Wq.jsx)("div", {
+ ... (3 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L141-L153` → after: `L149-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L149-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L149-L157) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L141-L153)

```diff
-             }), null !== Xz.manualOverride && (0, Fz.jsx)(Hz.f, {
-               tooltipInner: (0, Fz.jsx)("div", {
-                 children: "Remove the manual override and revert the game to the auto-approval criteria."
-               }),
-               children: (0, Fz.jsxs)(nz.f, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   xz(null)
-                 },
-                 disabled: oz,
-                 children: [(0, Fz.jsx)(Oz.c, {
-                   name: "arrows-rotate"
-                 }), " Clear Override"]
+             }), (0, Wq.jsx)("div", {
+               className: "CustomTextureFolderUploadInstructions Active",
+               children: Eq
+             })]
+           }), !jq && (hq || !Eq) && (0, Wq.jsxs)(Wq.Fragment, {
+             children: [(0, Wq.jsx)("div", {
+               className: "CustomTextureFolderUploadIcon",
+               children: (0, Wq.jsx)(Bq.d, {
+                 name: "up-from-bracket"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L161-L163` → after: `L168-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L168-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L168-L173) · [Before (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L161-L163)

```diff
-   4682: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       default: () => Qe
+   4828: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => aq,
+       f: () => oq,
+       h: () => Vq,
+       l: () => Hq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L165-L167` → after: `L175-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L175-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L175-L180) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L165-L167)

```diff
-     var Ez = bz(56),
-       nz = bz(1490),
-       iz = bz(1038),
+     var Yq = gq(57),
+       lq = gq(4837),
+       Oq = gq(4195),
+       mq = gq(1341),
+       xq = gq(4858),
+       Aq = gq(1018),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L169-L421` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L182-L185) · [Before (L169-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L169-L421)

```diff
-       Mz = bz(1009),
-       tz = bz(1212),
-       Hz = bz(994),
-       Oz = bz(328),
-       pz = bz(1519),
-       dz = bz(987),
-       Fz = bz(1181),
-       Zz = bz(1114),
-       Rz = bz(316),
-       Kz = bz(1473),
-       wz = bz(20),
-       Xz = bz(1871),
-       fz = bz(1419),
-       sz = bz(1047),
-       rz = bz(1305),
-       oz = bz(4670),
- ... (237 more removed lines; see GitHub link above)
+       uq = gq(1336),
+       Bq = gq(1710),
+       Wq = gq(4866),
+       Nq = gq(1070);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L424` → after: `L188-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L188-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L188-L231) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L424)

```diff
-       return zz.replace(tu, "").replace(/ {2,}/g, " ").trim()
+       let {
+         label: Eq,
+         onClick: gq,
+         checked: Yq,
+         circleInfoText: lq,
+         className: xq,
+         disabled: Aq,
+         note: uq
+       } = qq;
+       return (0, Nq.jsxs)("div", {
+         "aria-disabled": Aq || void 0,
+         "data-pad-focusable": !0,
+         className: cq()("SettingBox CheckboxContainer", {
+           [xq]: xq,
+           SettingBoxDisabled: Aq
+         }),
+ ... (28 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L431-L433` → after: `L236-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L236-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L236-L245) · [Before (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L431-L433)

```diff
-         icon: uz,
-         label: bz,
-         onClick: Ez,
+         name: Eq,
+         onChange: gq,
+         min: lq,
+         max: Oq,
+         step: xq,
+         initValue: Aq,
+         circleInfoText: uq,
+         format: Bq,
+         className: Wq,
+         padStep: aq,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L435-L436` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L247-L249) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L435-L436)

```diff
-         active: iz = !1,
-         small: lz = !1
+         selectableMax: dq,
+         cappedNote: Hq,
+         onChangeComplete: oq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L438-L451` → after: `L251-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L251-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L251-L270) · [Before (L438-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L438-L451)

```diff
-       return (0, pu.jsx)(Sz.f, {
-         tooltipInner: bz,
-         placement: "top",
-         delayShow: 0,
-         children: (0, pu.jsxs)(fz.V, {
-           className: lz ? "StudioSmallIconButton" : void 0,
-           active: iz,
-           disabled: nz,
-           onClick: Ez,
-           children: [(0, pu.jsx)(sz.c, {
-             name: uz
-           }), (0, pu.jsx)("span", {
-             className: "VisuallyHidden",
-             children: bz
+       const [Pq, Qq] = (0, Yq.useState)(Aq), yq = (0, Yq.useRef)(Aq);
+       (0, Yq.useEffect)((() => {
+         yq.current = Aq, Qq(Aq)
+       }), [Aq]);
+       const tq = void 0 !== dq && dq < Oq,
+         rq = tq ? {
+           "--slider-selectable": (dq - lq) / (Oq - lq)
+         } : void 0;
+       return (0, Nq.jsxs)("div", {
+         className: cq()("SettingBox SettingsSliderDiv", {
+           [Wq]: Wq,
+           SettingBoxDisabled: Vq,
+           SliderCapped: tq
+         }),
+         style: rq,
+         children: [(0, Nq.jsxs)("div", {
+ ... (4 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L453` → after: `L272-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L272-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L272-L294) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L453)

```diff
-         })
+         }), (0, Nq.jsx)("div", {
+           className: "SliderDiv",
+           children: (0, Nq.jsx)(jq, {
+             value: Pq,
+             min: lq,
+             max: Oq,
+             step: xq,
+             onChange: qq => {
+               if (tq && qq >= dq && Pq === dq) return;
+               const Eq = tq ? Math.min(qq, dq) : qq;
+               yq.current = Eq, Qq(Eq), gq(Eq)
+             },
+             onChangeComplete: oq && (() => {
+               oq(yq.current)
+             }),
+             format: Bq,
+ ... (7 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L456` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L297) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L456)

```diff
-     const Fu = String.fromCharCode(65279);
+     const dq = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L460-L461` → after: `L302-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L302-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L302-L316) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L460-L461)

```diff
-         fileNameParts: uz,
-         getTable: bz,
+         value: gq,
+         min: Oq,
+         max: mq,
+         step: xq,
+         onChange: Aq,
+         orientation: cq,
+         reverse: uq,
+         setIsChanging: Bq,
+         tooltip: aq,
+         labels: Vq,
+         handleLabel: jq,
+         format: Hq,
+         onChangeStart: oq,
+         onChangeComplete: Pq,
+         padStep: Qq,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L464-L479` → after: `L319-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L319-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L319-L360) · [Before (L464-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L464-L479)

```diff
-       const {
-         t: nz
-       } = (0, Fz.F)();
-       return (0, pu.jsx)(du, {
-         small: !0,
-         icon: "download",
-         label: nz("Export Data"),
-         disabled: Ez,
-         onClick: () => {
-           const zz = bz().map((zz => zz.map(lu).join(","))).join("\r\n");
-           (0, Ou.downloadBlob)(new Blob([`${Fu}${zz}`], {
-             type: "text/csv;charset=utf-8"
-           }), function(zz) {
-             const uz = zz.map(Hu).filter((zz => "" !== zz)).join(" - ");
-             return `${""===uz?"export":uz}.csv`
-           }(uz))
+       const tq = (0, Yq.useRef)(null),
+         rq = (0, Yq.useRef)(null);
+       (0, Yq.useLayoutEffect)((() => {
+         var qq, Eq, gq;
+         const Yq = null !== (qq = null === (Eq = tq.current) || void 0 === Eq ? void 0 : Eq.querySelector(".rangeslider")) && void 0 !== qq ? qq : null;
+         null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-slider", ""), null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-focusable", ""), null === Yq || void 0 === Yq || null === (gq = Yq.querySelector(".rangeslider__handle")) || void 0 === gq || gq.setAttribute( … [truncated]
+       }), []), (0, Yq.useLayoutEffect)((() => {
+         var qq, Eq;
+         yq ? null === (qq = rq.current) || void 0 === qq || qq.setAttribute("aria-disabled", "true") : null === (Eq = rq.current) || void 0 === Eq || Eq.removeAttribute("aria-disabled")
+       }), [yq]);
+       const vq = (null !== (Eq = String(xq).split(".")[1]) && void 0 !== Eq ? Eq : "").length,
+         hq = qq => {
+           const Eq = Number((Math.round((qq - Oq) / xq) * xq + Oq).toFixed(vq));
+           return Math.min(mq, Math.max(Oq, Eq))
+         },
+         nq = (0, Yq.useRef)(Pq);
+ ... (26 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L483-L495` → after: `L388-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L388-L399) · [Before (L483-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L483-L495)

```diff
-     const Ru = {
-       hour: "2-digit",
-       minute: "2-digit",
-       hourCycle: "h23"
-     };
- 
-     function Ku(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       return new Date(zz).toLocaleDateString(void 0, {
-         day: "numeric",
-         month: "short",
-         timeZone: uz ? "UTC" : void 0
-       })
+     async function Hq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+       const Eq = uq.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: "",
+         unlockPointerKey: qq
+       });
+       !0 === await Eq.getResult() && (0, Bq.reloadBloxd)()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L499` → after: `L403-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L403-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L403-L424) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L499)

```diff
-       return new Date(zz).toLocaleTimeString(void 0, Ru)
+       let {
+         label: Eq,
+         options: gq,
+         value: Yq,
+         onChange: lq,
+         circleInfoText: Oq
+       } = qq;
+       return (0, Nq.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, Nq.jsxs)("div", {
+           className: "SliderText",
+           children: [Eq, Oq && (0, Nq.jsx)(mq.c, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: Oq
+           })]
+         }), (0, Nq.jsx)(xq.c, {
+ ... (6 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L501-L502` → after: `L426-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L426-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L426-L444) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L501-L502)

```diff
-     const Xu = 6e4,
-       fu = 1440 * Xu;
+   },
+   4826: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => jq,
+       d: () => Hq
+     });
+     var Yq = gq(3059),
+       lq = gq(3067),
+       Oq = gq(57),
+       mq = gq(1018),
+       xq = gq.n(mq),
+       Aq = gq(1326),
+       cq = gq(3056),
+       uq = gq(1336),
+       Bq = gq(4828),
+       Wq = gq(4875),
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L504-L505` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L446-L447) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L504-L505)

```diff
-     function su(zz, uz) {
-       return null === zz || null === uz || 0 === uz ? null : zz / uz
+     function dq() {
+       (0, Bq.l)("texturePackPickReload")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L509-L543` → after: `L451-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L451-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L451-L455) · [Before (L509-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L509-L543)

```diff
-       const uz = zz.plays.data.length,
-         bz = Date.parse(`${zz.endDay}T00:00:00Z`);
-       return zz.plays.data.map(((Ez, nz) => {
-         const iz = zz.totalDurationMs.data[nz],
-           lz = zz.playtimeSamples.data[nz];
-         return {
-           dateMs: bz - (uz - 1 - nz) * fu,
-           plays: Ez,
-           uniquePlayers: zz.uniquePlayers.data[nz],
-           avgSessionMs: su(iz, lz),
-           totalDurationMs: iz,
-           playtimeSamples: lz,
-           sessionsPerPlayer: zz.sessionsPerPlayer.data[nz]
-         }
-       }))
-     }
- ... (19 more removed lines; see GitHub link above)
+       var Eq;
+       let {
+         setApplySettingsCallback: gq
+       } = qq;
+       const [, mq] = (0, Oq.useReducer)((qq => qq + 1), 0), xq = (0, Oq.useRef)(!1), Aq = (0, Oq.useRef)(null);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L545-L556` → after: `L457-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L457-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L457-L466) · [Before (L545-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L545-L556)

```diff
-     function Tu(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Ez = zz.reduce(((zz, uz) => {
-         var bz, Ez, nz, iz;
-         const lz = Math.max(null !== (bz = uz.value) && void 0 !== bz ? bz : 0, null !== (Ez = uz.comparisonValue) && void 0 !== Ez ? Ez : 0, null !== (nz = null === (iz = uz.comparisonBand) || void 0 === iz ? void 0 : iz[1]) && void 0 !== nz ? nz : 0);
-         return Math.max(zz, lz)
-       }), 0);
-       let nz = 0;
-       for (let iz = 0; iz <= Au; iz++) {
-         const zz = 1.1 * Ez * iz / Au,
-           lz = bz ? zz : Math.round(zz);
-         nz = Math.max(nz, uz(lz).length)
+       function jq(qq, Eq) {
+         cq.c.setFromJson(qq, "player");
+         const Yq = cq.c.saveTexturePack();
+         if (Nq.v) {
+           const qq = cq.c.toJson();
+           Yq.then((Eq => {
+             Eq && (0, aq.f)(qq, dq)
+           }))
+         } else xq.current ||= Eq, Aq.current !== cq.c.getId() || cq.c.getId() === lq.n.CUSTOM && xq.current ? gq((() => Bq.l)) : gq(null);
+         mq()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L558-L562` → after: `L468-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L468-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L468-L507) · [Before (L558-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L558-L562)

```diff
-       return Pu(nz)
-     }
- 
-     function Lu(zz, uz) {
-       return Pu(Math.max(0, ...zz.map((zz => uz(zz).length))))
+       async function oq(qq) {
+         if (cq.c.getId() !== qq.metaData.id) {
+           if (cq.c.getId() === lq.n.CUSTOM && cq.c.getFromFolderName()) {
+             const qq = uq.NotificationProvider.showPromptPopup({
+               title: "settingsMenu:loseChangesTitle",
+               subtitle: "settingsMenu:loseChangesSubtitle",
+               confirmText: "general:continue",
+               destructive: !0,
+               confirmTooltip: "",
+               cancelText: "general:cancel",
+               cancelTooltip: ""
+             });
+             if (!0 !== await qq.getResult()) return
+           }
+           jq(qq, !1)
+         }
+ ... (24 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L566-L589` → after: `L511-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L511-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L511-L515) · [Before (L566-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L566-L589)

```diff
-       return Math.max(Ju, Math.ceil(zz * vu) + xu)
-     }
-     const Gu = [1, 2, 5],
-       au = 6;
- 
-     function Vu(zz, uz) {
-       if (!(zz > 0)) return;
-       const bz = 10 ** Math.floor(Math.log10(zz / au)),
-         Ez = uz ? bz : Math.max(1, bz);
-       let nz;
-       for (const Mz of [Ez, 10 * Ez])
-         for (const bz of Gu) {
-           const Ez = bz * Mz;
-           if (!uz && !Number.isInteger(Ez)) continue;
-           const iz = Math.ceil(zz / Ez - 1e-9);
-           iz > au || (void 0 === nz || iz * Ez < nz.intervals * nz.step) && (nz = {
- ... (8 more removed lines; see GitHub link above)
+       let {
+         id: Eq,
+         isSelected: gq,
+         setSelected: mq,
+         disabled: cq = !1
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L591-L29895` → after: `L517-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L517-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L517-L521) · [Before (L591-L29895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L591-L29895)

```diff
-       return Array.from({
-         length: lz + 1
-       }, ((zz, uz) => Number((uz * iz).toPrecision(12))))
-     }
- 
-     function mu(zz, uz) {
-       const bz = zz.reduce(((zz, uz) => zz + uz), 0);
-       if (0 === bz) return null;
-       let Ez = bz;
-       const nz = zz.map(((zz, uz) => {
-         const nz = {
-           minute: uz,
-           percent: Ez / bz * 100,
-           sessions: Ez
-         };
-         return Ez -= zz, nz
- ... (29289 more removed lines; see GitHub link above)
+       const [uq, Bq] = (0, Oq.useState)(!0), [Wq, Nq] = (0, Oq.useState)(""), [aq, dq] = (0, Oq.useState)(""), [jq, Hq] = (0, Oq.useState)(""), oq = (0, Oq.useRef)({});
+       return (0, Oq.useEffect)((() => {
+         (0, Yq.m)(Eq).then((qq => {
+           var Eq;
+           qq && (oq.current = qq, Bq(!1), Nq(oq.current.metaData.name), dq(oq.current.metaData.author), Hq(null !== (Eq = oq.current.metaData.previewImage) && void 0 !== Eq ? Eq : ""))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L29897` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L523) · [Before (L29897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L29897)

```diff
-           dz.signal.aborted || (console.warn("Studio AI couldn't repair its answer, so the first one stays", uz), Kz === zz && (sz = zz))
+           console.warn(`Failed to fetch texture pack ${Eq}`, qq)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L29899-L30152` → after: `L525-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L525-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L525-L532) · [Before (L29899-L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L29899-L30152)

```diff
-       };
-     return (async () => {
-       if (Uz && await pe(Oe, dz.signal), null !== Rz && function(zz, uz) {
-           return null !== zz && !zz.isFinal && 0 === (0, Jt.l)(zz.model) && zz.numbersKey === uz
-         }(Oz, mz)) {
-         if (Nz(Rz), await fz, dz.signal.aborted) return;
-         null !== Kz && Kz !== Rz ? Pw(Sz, {
-           ...Kz.answer,
-           isFinal: !0
-         }) : sz !== Rz && Lw(Sz)
-       } else
-         for (sz = Rz;;) {
-           try {
-             const zz = await (0, Jt.k)(az, (zz => {
-               const uz = Zz(zz, Fz, mz);
-               !dz.signal.aborted && Aw(uz.rank, null === Kz ? null : {
- ... (238 more removed lines; see GitHub link above)
+       }), [Eq]), (0, Vq.jsxs)("div", {
+         "data-pad-focusable": !0,
+         "aria-disabled": cq || void 0,
+         className: xq()("TexturePack", {
+           Selected: gq,
+           Custom: Eq === lq.n.CUSTOM,
+           Disabled: cq
+         }),
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30154-L30169` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L534) · [Before (L30154-L30169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30154-L30169)

```diff
-           Oz((zz => !zz))
-         },
-         children: [(0, pu.jsx)("span", {
-           className: "StudioComparisonPickerValue",
-           children: Vz
-         }), (0, pu.jsx)(sz.c, {
-           name: Hz ? "caret-up" : "caret-down"
-         })]
-       })
-     }), Hz && (0, pu.jsxs)("div", {
-       className: "StudioComparisonPickerPanel",
-       ref: Az,
-       children: [(0, pu.jsx)(se, {
-         isSelected: mb(uz, az),
-         onSelect: () => {
-           mz(az)
+           uq || cq || mq(oq.current)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30171-L30182` → after: `L536-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L536-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L536-L539) · [Before (L30171-L30182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30171-L30182)

```diff
-         icon: (0, pu.jsx)(sz.c, {
-           name: "globe"
-         }),
-         name: iz("studio:comparisonCustomGamePercentiles")
-       }), (0, pu.jsxs)("div", {
-         className: "StudioComparisonPickerSearch",
-         children: [(0, pu.jsx)(sz.c, {
-           name: "magnifying-glass"
-         }), (0, pu.jsx)(bu.d, {
-           placeholderText: iz("studio:comparisonSearchGames"),
-           onValueChange: zz => {
-             Rz(zz)
+         children: [(0, Vq.jsx)("div", {
+           className: "TexturePackBg",
+           style: {
+             backgroundImage: jq ? `url(${jq})` : void 0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30193-L30354` → after: `L542-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L542-L549) · [Before (L30193-L30354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30193-L30354)

```diff
-           className: "StudioComparisonPickerMessage SmallTextLight",
-           children: iz("studio:comparisonSearchFailed")
-         }), !xz && null !== Gz && 0 === Gz.length && (0, pu.jsx)("div", {
-           className: "StudioComparisonPickerMessage SmallTextLight",
-           children: iz("general:noResults")
-         }), !xz && null !== Gz && Gz.map((zz => {
-           const bz = {
-             type: "game",
-             gameAnalyticsId: zz.gameAnalyticsId,
-             name: zz.name
-           };
-           return (0, pu.jsx)(se, {
-             isSelected: mb(uz, bz),
-             onSelect: () => {
-               mz(bz)
-             },
- ... (146 more removed lines; see GitHub link above)
+           className: "TexturePackName",
+           children: (0, Vq.jsx)(Aq.e, {})
+         }), !uq && Wq && (0, Vq.jsx)("div", {
+           className: "TexturePackName",
+           children: Wq
+         }), !uq && aq && (0, Vq.jsx)("div", {
+           className: "TexturePackAuthor",
+           children: aq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30537-L30596` → after: `L553-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L553-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L553-L560) · [Before (L30537-L30596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30537-L30596)

```diff
-   }))
- }
- 
- function qe(zz, uz) {
-   var bz;
-   return me(uz.playerHasRank("developer") ? ["bloxd", "playerSchematic", zz.gameCategory] : ["playerSchematic", zz.gameCategory], null !== (bz = zz.rankCategories) && void 0 !== bz ? bz : [])
- }
- 
- function he(zz, uz) {
-   return null === uz ? null : me(["bloxd", (0, we.e)(zz)], uz)
- }
- 
- function Ue(zz, uz, bz) {
-   return {
-     gameAnalyticsId: (0, Mz.d)(zz, !0),
-     name: (0, we.q)(zz, bz),
- ... (44 more removed lines; see GitHub link above)
+   },
+   4858: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(1070);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30598-L30636` → after: `L562-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L562-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L562-L590) · [Before (L30598-L30636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30598-L30636)

```diff
- function Se(zz) {
-   let {
-     title: uz,
-     thumbnail: bz,
-     playUrl: Ez,
-     category: nz,
-     ccu: iz,
-     favourites: Mz,
-     publishedAt: Hz,
-     gameUpdatedAt: Oz,
-     published: pz,
-     approvalChip: dz,
-     actions: Zz
-   } = zz;
-   const {
-     t: Kz
- ... (23 more removed lines; see GitHub link above)
+     function mq(qq) {
+       let {
+         options: Eq,
+         value: gq,
+         onChange: Yq,
+         ariaLabel: mq,
+         className: xq,
+         reselectable: Aq = !1,
+         keepsFocus: cq = !1,
+         padTabs: uq
+       } = qq;
+       const Bq = void 0 !== uq;
+       return (0, Oq.jsx)("div", {
+         className: lq()("SegmentedToggle", xq),
+         role: "group",
+         "aria-label": mq,
+ ... (13 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30638-L30735` → after: `L592-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L592-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L592-L599) · [Before (L30638-L30735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30638-L30735)

```diff
-             children: Kz(pz ? "general:published" : "general:draft")
-           }), dz]
-         })]
-       }), (0, pu.jsxs)("div", {
-         className: "StudioGamePageHeaderMeta",
-         children: [(0, pu.jsxs)("div", {
-           className: "StudioGamePageCategory",
-           children: [Kz("general:category"), ": ", (0, pu.jsx)("span", {
-             children: (0, Rz.nb)(nz)
-           })]
-         }), null !== Mz && (0, pu.jsxs)("div", {
-           className: "StudioGamePageFavourites",
-           title: Kz("general:favourites"),
-           children: [(0, pu.jsx)(sz.c, {
-             name: "heart"
-           }), (0, pu.jsx)("span", {
- ... (82 more removed lines; see GitHub link above)
+             onMouseDown: cq ? qq => {
+               qq.preventDefault()
+             } : void 0,
+             onClick: () => {
+               Eq && !Aq || Yq(qq.value)
+             },
+             children: qq.label
+           }, qq.value)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30862-L30887` → after: `L602-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L602-L607) · [Before (L30862-L30887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30862-L30887)

```diff
-     })]
-   })
- }
- 
- function Qe() {
-   const {
-     t: zz
-   } = (0, Fz.F)(), {
-     gameAnalyticsId: uz
-   } = (0, nz.D)(), bz = (0, Jz.useNavigatePreserveSearch)(), {
-     userContext: iz,
-     isUserContextUpdating: lz
-   } = (0, Zz.c)();
-   (0, Tz.k)();
-   const tz = (0, Tz.m)(),
-     [Hz, pz] = (0, Ez.useState)({
- ... (10 more removed lines; see GitHub link above)
+     }
+   },
+   4866: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Oq,
+       i: () => mq
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30889-L30917` → after: `L609-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L609-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L609-L629) · [Before (L30889-L30917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30889-L30917)

```diff
-     const zz = (0, Mz.e)(uz);
-     if (null === zz) {
-       const zz = (0, dz.e)(uz);
-       if (!zz) return (0, Oz.Fc)(uz) ? void bz((0, we.t)((0, Mz.c)(uz)), {
-         replace: !0
-       }) : void pz({
-         status: "error"
-       });
-       if (!iz.playerHasRank("developer")) return void pz({
-         status: "notAuthorised"
-       });
-       let Ez = !1;
-       pz({
-         status: "loaded",
-         game: {
-           type: "firstPartyGame",
- ... (13 more removed lines; see GitHub link above)
+     var Yq = gq(57);
+     const lq = new WeakMap,
+       Oq = qq => {
+         var Eq;
+         const gq = qq.closest("[data-pad-slider]");
+         return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
+       },
+       mq = (qq, Eq) => {
+         const gq = (0, Yq.useRef)(Eq);
+         gq.current = Eq, (0, Yq.useEffect)((() => {
+           if (qq.current) return ((qq, Eq) => (lq.set(qq, Eq), () => {
+             lq.get(qq) === Eq && lq.delete(qq)
+           }))(qq.current, {
+             adjust: qq => {
+               gq.current.adjust(qq)
+             },
+ ... (5 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30919-L30924` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L631-L632) · [Before (L30919-L30924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30919-L30924)

```diff
-           }
-         }))
-       })).catch((zz => {
-         console.error("Failed to load first party game ranks", zz)
-       })), () => {
-         Ez = !0
+           })
+         }), [qq])
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L30926-L31098` → after: `L634-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L634-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L634-L642) · [Before (L30926-L31098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L30926-L31098)

```diff
-     }
-     const Ez = iz.playerHasRank("developer") || iz.playerHasRank("admin");
-     let nz = !1;
-     return pz({
-       status: "loading"
-     }), Kz.c.getGame(iz, zz, !0).then((zz => {
-       if (nz) return;
-       const uz = iz.getPlayerName() === zz.owner.name;
-       pz({
-         status: "loaded",
-         game: {
-           type: "customGame",
-           game: zz,
-           canManage: uz || Ez,
-           isOwner: uz
-         }
- ... (157 more removed lines; see GitHub link above)
+   },
+   4883: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => xq,
+       f: () => mq
+     });
+     var Yq = gq(3067),
+       lq = gq(4890);
+     let Oq = null;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L31100-L31152` → after: `L644-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L644-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L644-L647) · [Before (L31100-L31152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L31100-L31152)

```diff
-   function iz(zz, uz, bz) {
-     let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nz;
-     const iz = uz.length;
-     if (0 === iz) return null;
-     const lz = new Array(bz).fill(1 / 0),
-       Mz = new Array(bz).fill(-1 / 0),
-       tz = Array.from({
-         length: bz
-       }, (() => new Map)),
-       Hz = Array.from({
-         length: bz
-       }, (() => new Map));
-     let Oz = 0;
-     for (let nz = 0; nz < iz; nz++) {
-       Oz += uz[nz];
-       for (let Ez = 0; Ez < bz; Ez++) {
- ... (37 more removed lines; see GitHub link above)
+     function mq(qq, Eq) {
+       Oq = {
+         pack: qq.metaData.id === Yq.c ? null : qq,
+         prompt: Eq
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L31220-L31238` → after: `L651-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L651-L653) · [Before (L31220-L31238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L31220-L31238)

```diff
-   function dz(zz) {
-     const uz = Float64Array.from(zz).filter((zz => zz > 0));
-     if (0 === uz.length) return {
-       max: 0,
-       median: 0,
-       hiddenBelow: 0
-     };
-     uz.sort();
-     let bz = 0,
-       Ez = Oz(uz, bz);
-     for (;;) {
-       const zz = pz(uz, Ez * Hz);
-       if (zz === bz) break;
-       bz = zz, Ez = Oz(uz, bz)
-     }
-     return {
- ... (3 more removed lines; see GitHub link above)
+     function xq(qq, Eq) {
+       const gq = Oq;
+       null !== gq && (0, lq.c)(gq.pack, qq) && (Oq = null, Eq && gq.prompt())
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L31240-L31409` → after: `L655-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L655-L658) · [Before (L31240-L31409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L31240-L31409)

```diff
-   }
- 
-   function Fz(zz, uz) {
-     return uz.max <= 0 || zz <= 0 ? 0 : Math.sqrt(Math.min(1, zz / uz.max))
-   }
-   const Zz = [
-       [60, 15, 100],
-       [130, 30, 160],
-       [215, 45, 100],
-       [250, 130, 25],
-       [255, 215, 0]
-     ],
-     Rz = [200, 228, 248],
-     Kz = `rgb(${Rz.join(", ")})`;
- 
-   function wz(zz) {
- ... (154 more removed lines; see GitHub link above)
+   },
+   4890: (qq, Eq, gq) => {
+     function Yq(qq, Eq) {
+       return lq(qq, Eq)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L31436-L31450` → after: `L661-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L661-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/102.js#L661-L667) · [Before (L31436-L31450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/102.js#L31436-L31450)

```diff
-   function nz(zz, uz) {
-     return zz && uz === Ez.m.DEFAULT
-   }
-   const iz = 150,
-     lz = 1.6,
-     Mz = 65,
-     tz = 500,
-     Hz = .6,
-     Oz = .5;
-   class pz {
-     constructor() {
-       this.li = 0, this.Mi = 0, this.yVelocity = 0
-     }
-     reset() {
-       this.li = 0, this.Mi = 0, this.yVelocity = 0
+     function lq(qq, Eq) {
+       if (qq === Eq) return !0;
+       if ("object" !== typeof qq || "object" !== typeof Eq || null === qq || null === Eq || Array.isArray(qq) !== Array.isArray(Eq)) return !1;
+       const gq = qq,
+         Yq = Eq,
+         Oq = Object.keys(gq);
+       return Oq.length === Object.keys(Yq).length && Oq.every((qq => Object.prototype.hasOwnProperty.call(Yq, qq) && lq(gq[qq], Yq[qq])))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/103.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/103.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78)

#### 1. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L4)

```diff
-   4696: (zz, uz, bz) => {
+   6373: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L6-L8)

```diff
-       b: () => pz,
-       d: () => Oz,
-       e: () => dz
+       c: () => jq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L10-L12` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L8-L16) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L10-L12)

```diff
-     bz(4700);
-     var Ez = bz(1181),
-       nz = bz(1038),
+     var Yq = gq(57),
+       lq = gq(1422),
+       Oq = gq(1477),
+       mq = gq(3369),
+       xq = gq(1101),
+       Aq = gq(1326),
+       cq = gq(1341),
+       uq = gq(1025),
+       Bq = gq(1018),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L14-L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L18) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L14-L17)

```diff
-       lz = bz(1332),
-       Mz = (bz(56), bz(4144)),
-       tz = bz(1047),
-       Hz = bz(1089);
+       Nq = gq(1070);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L21-L26` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L22-L23) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L21-L26)

```diff
-         children: uz,
-         label: bz,
-         className: nz,
-         circleInfoText: Mz,
-         disabled: Oz,
-         onLabelClick: pz
+         info: Eq,
+         className: gq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L40-L95` → after: `L26-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L26-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L26-L51) · [Before (L40-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L40-L95)

```diff
-         className: iz()("LabeledInput", {
-           [nz]: nz,
-           DisabledLabelInput: Oz
-         }),
-         children: [Mz && (0, Hz.jsx)(lz.f, {
-           tooltipInner: (0, Hz.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: dz(Mz)
-           }),
-           children: Fz
-         }), !Mz && Fz, uz]
-       })
-     }
- 
-     function pz(zz) {
-       let {
- ... (40 more removed lines; see GitHub link above)
+         className: Wq()("GameApprovalInfoDetails", gq),
+         children: [(0, Nq.jsxs)("div", {
+           className: Wq()("GameApprovalInfoSummary", Eq.overallPassed ? "Passed" : "Failed"),
+           children: [(0, Nq.jsx)(uq.d, {
+             name: Eq.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, Nq.jsx)("span", {
+             children: Eq.summary
+           })]
+         }), Eq.rows.length > 0 && (0, Nq.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: Eq.rows.map((qq => (0, Nq.jsxs)("div", {
+             className: Wq()("GameApprovalInfoRow", qq.passed ? "Passed" : "Failed"),
+             children: [(0, Nq.jsx)(uq.d, {
+               name: qq.passed ? "check" : "xmark"
+             }), (0, Nq.jsxs)("div", {
+               className: "GameApprovalInfoRowText",
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L98-L108` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L54-L55) · [Before (L98-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L98-L108)

```diff
-   },
-   4702: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Hz
-     });
-     var Ez = bz(1038),
-       nz = bz.n(Ez),
-       iz = bz(4385),
-       lz = bz(1181),
-       Mz = bz(1089);
-     const tz = [...iz.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+     var Vq = gq(1183),
+       dq = gq(1336);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L111-L118` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L58-L60) · [Before (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L111-L118)

```diff
-       const {
-         disabled: uz,
-         hideWrapper: bz
-       } = zz, {
-         t: Ez
-       } = (0, lz.F)(), Hz = zz.advancedMode ? tz.map((uz => [uz, zz.callbacks[uz]])) : iz.l.map((uz => [uz, zz.callbacks[uz]])), pz = (0, Mz.jsx)("div", {
-         className: nz()("PluginsGrid", {
-           SectionBody: !bz
+       dq.NotificationProvider.showCustomPopup({
+         body: () => (0, Nq.jsx)(Hq, {
+           ...qq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L120-L134` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L62-L64) · [Before (L120-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L120-L134)

```diff
-         children: Hz.map((zz => {
-           let [bz, Ez] = zz;
-           return (0, Mz.jsx)(Oz, {
-             plugin: bz,
-             callbacks: Ez,
-             disabled: uz
-           }, bz)
-         }))
-       });
-       return bz ? pz : (0, Mz.jsxs)("div", {
-         className: "BloxdForm",
-         children: [(0, Mz.jsx)("div", {
-           className: "SectionTitle",
-           children: Ez("worldBuilder:pluginsSection")
-         }), pz]
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L140-L145` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L70-L72) · [Before (L140-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L140-L145)

```diff
-         plugin: uz,
-         callbacks: {
-           isEnabled: bz,
-           Zx: Ez
-         },
-         disabled: iz
+         schematicId: Eq,
+         canOverride: gq,
+         onApprovalChanged: Bq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L149` → after: `L76-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L76-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L76-L96) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L149)

```diff
-       } = (0, lz.F)(), Hz = bz();
+       } = (0, Vq.v)(), {
+         userContext: dq
+       } = (0, xq.c)(), jq = (0, mq.c)(), [Hq, oq] = (0, Yq.useState)(null), [Pq, Qq] = (0, Yq.useState)(null), [yq, tq] = (0, Yq.useState)(!1), rq = (0, Yq.useCallback)((() => {
+         Qq(null), Oq.e.getGameApprovalInfo(dq, Eq).then((qq => {
+           jq.current && oq(qq)
+         })).catch((qq => {
+           console.error("Failed to get game approval info", qq), jq.current && Qq(Wq("studio:approvalLoadFailed"))
+         }))
+       }), [dq, Eq, jq, Wq]);
+       (0, Yq.useEffect)((() => {
+         rq()
+       }), [rq]);
+       const vq = qq => {
+         yq || (tq(!0), Oq.e.setGameApproval(dq, Eq, qq).then((() => {
+           null === Bq || void 0 === Bq || Bq(), jq.current && rq()
+         })).catch((qq => {
+ ... (5 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L151-L173` → after: `L98-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L98-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L98-L155) · [Before (L151-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L151-L173)

```diff
-         className: nz()("PluginCard", {
-           PluginCardEnabled: Hz,
-           PluginCardDisabledForm: iz
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": iz || void 0,
-         onClick: () => {
-           iz || Ez(!Hz)
-         },
-         children: [(0, Mz.jsx)("div", {
-           className: "PluginCardIcon",
-           children: (0, Mz.jsx)("img", {
-             src: `/textures/games/classic/customGames/${uz}.png`,
-             alt: uz
-           })
-         }), (0, Mz.jsxs)("div", {
- ... (7 more removed lines; see GitHub link above)
+         className: "ApprovalInfoPopupBody",
+         children: [(0, Nq.jsx)("h1", {
+           className: "ApprovalInfoPopupTitle",
+           children: Wq("studio:approvalTitle")
+         }), !Hq && !Pq && (0, Nq.jsx)("div", {
+           className: "ApprovalInfoPopupLoader",
+           children: (0, Nq.jsx)(Aq.e, {})
+         }), Pq && (0, Nq.jsx)("div", {
+           className: "ApprovalInfoPopupError",
+           children: Pq
+         }), Hq && (0, Nq.jsxs)(Nq.Fragment, {
+           children: [(0, Nq.jsx)(aq, {
+             info: Hq
+           }), gq && (0, Nq.jsxs)("div", {
+             className: "ApprovalInfoPopupActions",
+             children: [!0 !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
+ ... (42 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L182-L188` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L193-L196) · [Before (L182-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L182-L188)

```diff
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+         "1h": 60,
+         "24h": 1440,
+         "7d": 10080,
+         "30d": 43200
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L191-L197` → after: `L199-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L199-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L199-L220) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L191-L197)

```diff
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
+         minute: {
+           stepMinutes: 1,
+           untilMinutes: 20
+         },
+         fiveMinutes: {
+           stepMinutes: 5,
+           untilMinutes: 60
+         }
+       };
+ 
+     function Mq(qq, Eq) {
+       const gq = gq => qq.percentiles[Eq.indexOf(gq)];
+       return {
+         count: qq.count,
+         playerCount: qq.playerCount,
+         sum: qq.sum,
+ ... (6 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L199-L224` → after: `L222-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L222-L227) · [Before (L199-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L199-L224)

```diff
-   },
-   4690: (zz, uz, bz) => {
-     bz.d(uz, {
-       i: () => nu,
-       d: () => Eu,
-       g: () => bu,
-       k: () => iu
-     });
-     var Ez = bz(56),
-       nz = bz(1322),
-       iz = bz(1419),
-       lz = bz(1628),
-       Mz = bz(1181),
-       tz = bz(1305),
-       Hz = bz(1332),
-       Oz = bz(1047),
- ... (10 more removed lines; see GitHub link above)
+     }
+     var Tq = gq(3438),
+       zq = gq(1195),
+       Sq = gq(1109);
+     const pq = ["plays", "uniquePlayers", "totalDurationMs", "playtimeSamples", "sessionsPerPlayer"];
+     const Gq = ["plays", "uniquePlayers", "sessionMs", "gamesWithData"];
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L227-L256` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L230) · [Before (L227-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L227-L256)

```diff
-       let {
-         icon: uz,
-         title: bz,
-         disabled: Ez,
-         children: nz
-       } = zz;
-       return (0, sz.jsxs)("div", {
-         className: Fz()("ManageCard", {
-           ManageCardDisabled: Ez
-         }),
-         children: [(0, sz.jsxs)("div", {
-           className: "ManageCardHead",
-           children: [(0, sz.jsx)("div", {
-             className: "ManageCardIcon",
-             children: (0, sz.jsx)(Oz.c, {
-               name: uz
- ... (14 more removed lines; see GitHub link above)
+       return null !== qq && "object" === typeof qq && "p20" in qq && "p50" in qq && "p80" in qq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L260-L274` → after: `L411-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L411-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L411-L424) · [Before (L260-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L260-L274)

```diff
-       let {
-         label: uz,
-         caption: bz,
-         children: Ez
-       } = zz;
-       return (0, sz.jsxs)("div", {
-         className: "ManageStackedField",
-         children: [(0, sz.jsx)("div", {
-           className: "ManageStackedFieldLabel",
-           children: uz
-         }), Ez, bz && (0, sz.jsx)("div", {
-           className: "ManageStackedFieldCaption",
-           children: bz
-         })]
-       })
+       if (null === qq) return "";
+       if ("number" === typeof qq) return Number.isFinite(qq) ? String(qq) : "";
+       const Eq = OE.test(qq) ? `'${qq}` : qq;
+       return /[",\r\n]/.test(Eq) ? `"${Eq.replace(/"/g,'""')}"` : Eq
+     }
+ 
+     function xE(qq, Eq) {
+       const gq = new Date(qq).toISOString();
+       return "1d" === Eq ? gq.slice(0, 10) : gq.replace(/\.\d{3}Z$/, "Z")
+     }
+     const AE = /[\\/:*?"<>|\u0000-\u001f]/g;
+ 
+     function cE(qq) {
+       return qq.replace(AE, "").replace(/ {2,}/g, " ").trim()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L280-L282` → after: `L433-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L433-L436) · [Before (L280-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L280-L282)

```diff
-         caption: bz,
-         disabled: Ez,
-         children: nz
+         onClick: Yq,
+         disabled: lq = !1,
+         active: Oq = !1,
+         small: mq = !1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L284-L294` → after: `L438-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L438-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L438-L450) · [Before (L284-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L284-L294)

```diff
-       return (0, sz.jsxs)("div", {
-         className: Fz()("ManageField", {
-           ManageFieldDisabled: Ez
-         }),
-         children: [(0, sz.jsxs)("div", {
-           className: "ManageFieldText",
-           children: [(0, sz.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: uz
-           }), (0, sz.jsx)("div", {
-             className: "ManageFieldCaption",
+       return (0, BE.jsx)(kq.e, {
+         tooltipInner: gq,
+         placement: "top",
+         delayShow: 0,
+         children: (0, BE.jsxs)(oq.Q, {
+           className: mq ? "StudioSmallIconButton" : void 0,
+           active: Oq,
+           disabled: lq,
+           onClick: Yq,
+           children: [(0, BE.jsx)(Pq.d, {
+             name: Eq
+           }), (0, BE.jsx)("span", {
+             className: "VisuallyHidden",
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L297-L300` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L453) · [Before (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L297-L300)

```diff
-         }), (0, sz.jsx)("div", {
-           className: "ManageFieldControl",
-           children: nz
-         })]
+         })
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L307-L310` → after: `L460-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L460-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L460-L462) · [Before (L307-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L307-L310)

```diff
-         schematicData: Ez,
-         updateSchematicData: nz,
-         publishFormEnabled: iz,
-         formEnabled: lz
+         fileNameParts: Eq,
+         getTable: gq,
+         disabled: Yq = !1
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L314-L341` → after: `L466-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L466-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L466-L479) · [Before (L314-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L314-L341)

```diff
-       } = (0, Mz.F)(), Hz = !iz, Oz = {
-         tpRequests: {
-           isEnabled: () => !Ez.disableTpRequests,
-           Zx: zz => nz("disableTpRequests", !zz)
-         },
-         spawnProtection: {
-           isEnabled: () => !Ez.disableSpawnProtection,
-           Zx: zz => nz("disableSpawnProtection", !zz)
-         },
-         spawnReset: {
-           isEnabled: () => !!Ez.enableSpawnReset,
-           Zx: zz => nz("enableSpawnReset", zz)
-         },
-         smpMarketplace: {
-           isEnabled: () => !!Ez.enableSmpMarketplace,
-           Zx: zz => nz("enableSmpMarketplace", zz)
- ... (12 more removed lines; see GitHub link above)
+       } = (0, Nq.v)();
+       return (0, BE.jsx)(WE, {
+         small: !0,
+         icon: "download",
+         label: lq("Export Data"),
+         disabled: Yq,
+         onClick: () => {
+           const qq = gq().map((qq => qq.map(mE).join(","))).join("\r\n");
+           (0, uE.downloadBlob)(new Blob([`${NE}${qq}`], {
+             type: "text/csv;charset=utf-8"
+           }), function(qq) {
+             const Eq = qq.map(cE).filter((qq => "" !== qq)).join(" - ");
+             return `${""===Eq?"export":Eq}.csv`
+           }(Eq))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L485-L525` → after: `L483-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L483-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L483-L623) · [Before (L485-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L485-L525)

```diff
-     var xz = bz(4704),
-       Jz = bz(4144),
-       Az = bz(1473),
-       Tz = bz(3238),
-       Lz = bz(1114),
-       Pz = bz(4670),
-       Gz = bz(4706),
-       az = bz(1424);
-     const Vz = 50,
-       mz = .3;
-     async function qz(zz) {
-       const uz = await
-       function(zz) {
-         return new Promise(((uz, bz) => {
-           const Ez = new FileReader;
-           Ez.onload = () => uz(Ez.result), Ez.onerror = bz, Ez.readAsDataURL(zz)
- ... (25 more removed lines; see GitHub link above)
+     const VE = {
+       hour: "2-digit",
+       minute: "2-digit",
+       hourCycle: "h23"
+     };
+ 
+     function dE(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       return new Date(qq).toLocaleDateString(void 0, {
+         day: "numeric",
+         month: "short",
+         timeZone: Eq ? "UTC" : void 0
+       })
+     }
+ 
+     function jE(qq) {
+ ... (125 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L527-L528` → after: `L625-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L625-L627) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L527-L528)

```diff
-         base64Jpg: nz,
-         heavilyCompressed: iz < mz
+         percentStayedSessions: GE(qq.points, SE),
+         percentLongSessions: GE(qq.points, pE),
+         medianMinute: -1 === Eq ? qq.maxBucketMinute : Eq
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L538` → after: `L632-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L632-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L632-L680) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L538)

```diff
-       var uz;
+       return `${Math.round(qq)}%`
+     }
+ 
+     function kE(qq) {
+       return `${qq.toFixed(1)}%`
+     }
+ 
+     function RE(qq, Eq) {
+       return qq >= Eq ? `${qq}m+` : `${qq}m`
+     }
+ 
+     function UE(qq) {
+       return Math.round(qq).toLocaleString("en-US")
+     }
+ 
+     function FE(qq) {
+ ... (33 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L540-L543` → after: `L682-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L682-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L682-L685) · [Before (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L540-L543)

```diff
-         schematicId: bz,
-         hasReadUploadPolicy: nz,
-         onPolicyValidationError: tz,
-         onThumbnailReady: Hz
+         point: Eq,
+         label: gq,
+         formatValue: Yq,
+         noDataLabel: lq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L547-L571` → after: `L689-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L689-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L689-L732) · [Before (L547-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L547-L571)

```diff
-       } = (0, Mz.F)(), [Zz, Rz] = (0, Ez.useState)(null), [Kz, wz] = (0, Ez.useState)(""), [Xz, fz] = (0, Ez.useState)(""), [rz, oz] = (0, Ez.useState)(!0), [Nz, vz] = (0, Ez.useState)(!1), xz = (0, Ez.useRef)(!1), [Jz, Az] = (0, Ez.useState)(null), [Tz, Lz] = (0, Ez.useState)(!1 … [truncated]
-         getRootProps: mz,
-         getInputProps: cz,
-         isDragActive: gz
-       } = (0, Gz.b)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
-         },
-         multiple: !1,
-         onDrop: async zz => {
-           if (0 === zz.length) return;
-           const uz = zz[0],
-             bz = ++Vz.current;
-           Az(null), Lz(!1), Rz(null), wz(uz.name);
-           try {
-             const zz = await qz(uz);
- ... (9 more removed lines; see GitHub link above)
+       } = (0, Nq.v)(), mq = qq => null === qq || void 0 === qq ? lq : Yq(qq), xq = Eq.comparisonBand;
+       return xq ? (0, BE.jsxs)(BE.Fragment, {
+         children: [(0, BE.jsx)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: gq
+         }), (0, BE.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [Oq("studio:comparisonPercentile80"), ": ", mq(xq[1])]
+         }), (0, BE.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [Oq("studio:comparisonPercentile50"), ": ", mq(Eq.comparisonValue)]
+         }), (0, BE.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [Oq("studio:comparisonPercentile20"), ": ", mq(xq[0])]
+         })]
+       }) : (0, BE.jsxs)("div", {
+ ... (28 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L573-L661` → after: `L734-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L734-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L734-L737) · [Before (L573-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L573-L661)

```diff
-         className: "ThumbnailUploadContainer",
-         children: [(0, sz.jsxs)("div", {
-           ...mz({
-             className: Fz()("ThumbnailUploadDropzone", {
-               ActiveDrag: gz,
-               ValidationError: Wz
-             })
-           }),
-           children: [(0, sz.jsx)("input", {
-             ...cz()
-           }), !gz && yz ? (0, sz.jsxs)(sz.Fragment, {
-             children: [(0, sz.jsxs)("div", {
-               className: "ThumbnailAspectPreviews",
-               children: [(0, sz.jsxs)("div", {
-                 className: "ThumbnailAspectPreview",
-                 children: [(0, sz.jsx)("div", {
- ... (73 more removed lines; see GitHub link above)
+         className: "StudioStatsChartTooltip",
+         children: [(0, BE.jsx)("div", {
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: KE(Yq, lq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L663-L680` → after: `L739-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L739-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L739-L757) · [Before (L663-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L663-L680)

```diff
-           className: "ThumbnailUploadError",
-           children: Jz
-         }), (0, sz.jsx)(iz.q, {
-           disabled: Nz,
-           className: "ThumbnailUploadButton",
-           onClick: async () => {
-             if (az(!0), !xz.current && Zz && Qz && nz) {
-               xz.current = !0, vz(!0), Az(null);
-               try {
-                 await Hz(Zz.base64Jpg, Dz, rz ? bz : null)
-               } catch (zz) {
-                 Az(zz.errorMessageForUser ? dz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : dz("thumbnail:failedToUploadImage"))
-               } finally {
-                 xz.current = !1, vz(!1)
-               }
-             } else nz || tz()
- ... (2 more removed lines; see GitHub link above)
+           className: "StudioStatsChartTooltipValue",
+           children: null === uq.value ? mq : Oq(uq.value)
+         }), null === cq || void 0 === cq ? void 0 : cq.map(((qq, Eq) => {
+           var gq;
+           const Yq = null === (gq = uq.lineValues) || void 0 === gq ? void 0 : gq[Eq];
+           return (0, BE.jsxs)("div", {
+             className: "StudioStatsChartTooltipLine SmallTextLight",
+             children: [(0, BE.jsx)("span", {
+               className: "StudioStatsChartTooltipLineSwatch",
+               style: {
+                 backgroundColor: qq.colour
+               }
+             }), qq.label, ": ", null === Yq || void 0 === Yq ? mq : Oq(Yq)]
+           }, `StudioStatsChartTooltipLine-${Eq}`)
+         })), void 0 !== xq && (0, BE.jsx)(CE, {
+           point: uq,
+ ... (3 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L684` → after: `L761-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L761-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L761-L775) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L684)

```diff
-     const Sz = 2e3;
+     const qg = .6;
+ 
+     function Eg(qq, Eq, gq, Yq) {
+       if (!qq || 0 === gq.length || Yq <= 0) return null;
+       const lq = "1d" === Eq ? function(qq) {
+           const Eq = new Date(qq);
+           return Eq.setUTCHours(0, 0, 0, 0), Eq.getTime()
+         }(qq.dateMs) : qq.dateMs,
+         Oq = (lq - gq[0].dateMs) / Yq;
+       return Oq < 0 || Oq > 1 ? null : {
+         dateMs: lq,
+         label: qq.label,
+         alignLeft: Oq > qg
+       }
+     }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L688-L691` → after: `L779-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L779-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L779-L806) · [Before (L688-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L688-L691)

```diff
-         schematicId: uz,
-         ownedThumbnailCount: bz,
-         onClose: nz,
-         onThumbnailReady: iz
+         viewBox: Eq,
+         text: gq,
+         alignLeft: Yq
+       } = qq;
+       return void 0 === (null === Eq || void 0 === Eq ? void 0 : Eq.x) || void 0 === Eq.y ? null : (0, BE.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: Eq.x + (Yq ? -5 : 5),
+         y: Eq.y + 10,
+         textAnchor: Yq ? "end" : "start",
+         children: gq
+       })
+     }
+ 
+     function Yg(qq) {
+       const Eq = new Set;
+       return qq.forEach(((gq, Yq) => {
+ ... (12 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L695-L714` → after: `L810-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L810-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L810-L818) · [Before (L695-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L695-L714)

```diff
-       } = (0, Mz.F)(), {
-         userContext: tz
-       } = (0, Lz.c)(), [Hz, dz] = (0, Ez.useState)(!1), [Zz, Rz] = (0, Ez.useState)(!1), [Kz, wz] = (0, Ez.useState)(!1), Xz = (0, Ez.useRef)();
-       (0, Ez.useEffect)((() => () => {
-         clearTimeout(Xz.current)
-       }), []);
-       const fz = function(zz, uz) {
-         const bz = [];
-         return zz.isLoggedIn() || bz.push(cz.NOT_LOGGED_IN), uz >= pz.X && bz.push(cz.THUMBNAIL_LIMIT_REACHED), bz
-       }(tz, bz);
-       if (fz.length > 0) {
-         const zz = {
-           [cz.NOT_LOGGED_IN]: {
-             key: "thumbnail:mustBeLoggedInToUpload"
-           },
-           [cz.THUMBNAIL_LIMIT_REACHED]: {
- ... (4 more removed lines; see GitHub link above)
+       } = (0, Nq.v)();
+       return (0, BE.jsxs)("span", {
+         className: "StudioStatsChartLegendEntry",
+         children: [(0, BE.jsx)("span", {
+           className: mq()("StudioStatsChartLegendSwatch", Eq),
+           style: Yq ? {
+             backgroundColor: gq
+           } : {
+             color: gq
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L716-L734` → after: `L820-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L820-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L820-L843) · [Before (L716-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L716-L734)

```diff
-         };
-         return (0, sz.jsxs)("div", {
-           className: "ThumbnailUploaderInner",
-           children: [(0, sz.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: lz("thumbnail:cannotUploadThumbnail")
-           }), fz.map(((uz, bz) => {
-             const Ez = zz[uz];
-             return (0, sz.jsxs)("div", {
-               className: "CannotUploadThumbnailItem",
-               children: [(0, sz.jsx)(Oz.c, {
-                 name: "triangle-exclamation"
-               }), (0, sz.jsx)("span", {
-                 children: lz(Ez.key, Ez.params)
-               })]
-             }, bz)
- ... (3 more removed lines; see GitHub link above)
+         }), lq, void 0 !== Oq && (0, BE.jsx)("span", {
+           ...(0, oq.V)(),
+           className: "StudioStatsChartLegendRemove",
+           title: xq("general:remove"),
+           "aria-label": xq("general:remove"),
+           onClick: Oq,
+           children: (0, BE.jsx)(Pq.d, {
+             name: "x"
+           })
+         })]
+       })
+     }
+ 
+     function Og(qq) {
+       let {
+         seriesLabel: Eq,
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L736-L843` → after: `L845-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L845-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L845-L867) · [Before (L736-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L736-L843)

```diff
-         className: Fz()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: Hz
-         }),
-         children: [Hz && (0, sz.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, sz.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, sz.jsx)(Oz.c, {
-               name: "check"
-             }), (0, sz.jsx)(az.c, {})]
-           }), (0, sz.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: lz("thumbnail:thumbnailUploaded")
-           })]
-         }), (0, sz.jsx)("h1", {
-           className: "SchematicPopupTitle",
- ... (92 more removed lines; see GitHub link above)
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== Eq && void 0 !== gq && (0, BE.jsx)(lg, {
+           colour: gq,
+           isFill: !0,
+           label: Eq
+         }), null === Oq || void 0 === Oq ? void 0 : Oq.map(((qq, Eq) => (0, BE.jsx)(lg, {
+           colour: qq.colour,
+           isFill: !0,
+           label: qq.label,
+           OJ: qq.OJ
+         }, `StudioChartLegendLine-${Eq}`))), void 0 !== Yq && lq && (0, BE.jsxs)(BE.Fragment, {
+           children: [(0, BE.jsx)(lg, {
+             swatchClassName: "StudioStatsChartLegendSwatchComparisonBand",
+             colour: YE.comparison,
+             isFill: !1,
+             label: mq("studio:comparisonLegendBand", {
+ ... (7 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L883-L886` → after: `L880-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L880-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L880-L892) · [Before (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L883-L886)

```diff
-         schematicData: lz,
-         updateSchematicData: Hz,
-         publishFormEnabled: pz,
-         onClose: dz
+         title: Eq,
+         hoverInfo: gq,
+         anchorId: Yq,
+         status: lq,
+         hasData: Oq,
+         headerActions: xq,
+         filters: Aq,
+         legend: cq,
+         csvExport: uq,
+         footerActions: Bq,
+         className: Wq,
+         cardRef: aq,
+         children: Vq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L890-L964` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L896-L900) · [Before (L890-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L890-L964)

```diff
-       } = (0, Mz.F)(), {
-         userContext: Rz,
-         isUserContextUpdating: Kz
-       } = (0, Lz.c)(), wz = (0, Tz.e)(), [Xz, fz] = (0, Ez.useState)([]), [rz, oz] = (0, Ez.useState)([]), [Nz, vz] = (0, Ez.useState)(!0), [xz, Jz] = (0, Ez.useState)(null !== (uz = lz.customThumbnailId) && void 0 !== uz ? uz : null), [Gz, az] = (0, Ez.useState)(null), Vz = (0,  … [truncated]
- 
-       function gz(zz, uz) {
-         Uz.current && (clearTimeout(Uz.current), Uz.current = null), az(zz), null !== zz && uz && (Uz.current = setTimeout((() => {
-           az(null), Uz.current = null
-         }), 5e3))
-       }(0, Ez.useEffect)((() => () => {
-         clearTimeout(hz.current), clearTimeout(Uz.current)
-       }), []);
-       const Sz = (0, Ez.useCallback)((() => {
-         vz(!0), Az.c.getOwnedThumbnails(Rz).then((zz => {
-           const uz = [],
-             bz = [];
- ... (59 more removed lines; see GitHub link above)
+       } = (0, Nq.v)(), jq = void 0 !== uq || void 0 !== Bq;
+       return (0, BE.jsxs)("div", {
+         ref: aq,
+         id: Yq,
+         className: mq()("StudioStatsChart", Wq),
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L966-L969` → after: `L902-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L902-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L902-L911) · [Before (L966-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L966-L969)

```diff
-           className: "SectionTitle",
-           children: [Zz("thumbnail:gameThumbnail"), Gz && (0, sz.jsx)("span", {
-             className: Fz()("ThumbnailActionMsg", `ThumbnailActionMsg--${Gz.type}`),
-             children: Gz.text
+           className: "StudioStatsChartHeader",
+           children: [(0, BE.jsxs)("div", {
+             className: "StudioStatsChartTitle",
+             children: [Eq, (0, BE.jsx)(kq.c, {
+               hoverInfo: gq,
+               placement: "top"
+             })]
+           }), void 0 !== xq && (0, BE.jsx)("div", {
+             className: "StudioStatsChartHeaderActions",
+             children: xq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L971-L1081` → after: `L913-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L913-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L913-L933) · [Before (L971-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L971-L1081)

```diff
-         }), (0, sz.jsx)("div", {
-           className: "SectionBody",
-           children: (0, sz.jsxs)("div", {
-             className: "ThumbnailGrid",
-             children: [(0, sz.jsxs)("div", {
-               className: Fz()("ThumbnailGridItem ThumbnailGridItemDefault", {
-                 ThumbnailGridItemSelected: null === xz
-               }),
-               onClick: () => Iz(null),
-               children: [(0, sz.jsx)(Pz.b, {
-                 game: {
-                   schematicId: lz.schematicId,
-                   imageBlurhash: lz.imageBlurhash
-                 }
-               }), (0, sz.jsx)("div", {
-                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
- ... (95 more removed lines; see GitHub link above)
+         }), void 0 !== Aq && (0, BE.jsx)("div", {
+           className: "StudioStatsChartFilters",
+           children: Aq
+         }), "loading" === lq && (0, BE.jsx)("div", {
+           className: "StudioStatsChartPlaceholder",
+           children: (0, BE.jsx)(Qq.e, {})
+         }), "error" === lq && (0, BE.jsx)("div", {
+           className: "StudioStatsChartPlaceholder SmallTextLight",
+           children: dq("studio:statsUnavailable")
+         }), "ready" === lq && !Oq && (0, BE.jsx)("div", {
+           className: "StudioStatsChartPlaceholder SmallTextLight",
+           children: dq("studio:noDataForRange")
+         }), "ready" === lq && Oq && (0, BE.jsx)("div", {
+           className: "StudioStatsChartCanvas",
+           children: Vq
+         }), "ready" === lq && Oq && (void 0 !== cq || jq) && (0, BE.jsxs)("div", {
+ ... (5 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1083` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L935) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1083)

```diff
-           })
+           })]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1090-L1093` → after: `L942-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L942-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L942-L956) · [Before (L1090-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1090-L1093)

```diff
-         rejectedThumbnails: uz,
-         userContext: bz,
-         isMountedRef: nz,
-         onAcknowledged: lz
+         title: Eq,
+         hoverInfo: gq,
+         anchorId: Yq,
+         status: lq,
+         points: Oq,
+         interval: mq,
+         colour: xq,
+         formatValue: Aq,
+         headerActions: cq,
+         markers: uq,
+         comparisonLabel: Bq,
+         seriesLabel: Wq,
+         allowDecimals: aq = !1,
+         lines: Vq,
+         filters: dq
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1097-L1102` → after: `L960-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L960-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L960-L1008) · [Before (L1097-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1097-L1102)

```diff
-       } = (0, Mz.F)(), [pz, dz] = (0, Ez.useState)(!1), [Fz, Zz] = (0, Ez.useState)(!1), Rz = function(zz) {
-         const uz = new Map;
-         for (const bz of zz) {
-           const zz = bz.rejectionPolicyId,
-             Ez = uz.get(zz);
-           Ez ? Ez.push(bz) : uz.set(zz, [bz])
+       } = (0, Nq.v)(), Hq = null !== Vq && void 0 !== Vq ? Vq : [], oq = Oq.filter((qq => null !== qq.value)).length, Pq = Hq.some((qq => qq.values.some((qq => null !== qq)))), Qq = void 0 !== Bq && Oq.some((qq => null !== qq.comparisonValue && void 0 !== qq.comparisonValue)), yq … [truncated]
+         const gq = Eq.values.map(((qq, Eq) => {
+           var gq, Yq;
+           return {
+             dateMs: null !== (gq = null === (Yq = Oq[Eq]) || void 0 === Yq ? void 0 : Yq.dateMs) && void 0 !== gq ? gq : 0,
+             value: qq
+           }
+         }));
+         return Math.max(qq, bE(gq, Aq, aq))
+       }), bE(Oq, Aq, aq));
+       let nq = Oq;
+       Hq.length > 0 && (nq = Oq.map(((qq, Eq) => ({
+         ...qq,
+         lineValues: Hq.map((qq => {
+           var gq;
+           return null !== (gq = qq.values[Eq]) && void 0 !== gq ? gq : null
+ ... (33 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1104-L1109` → after: `L1010-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1010-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1010-L1311) · [Before (L1104-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1104-L1109)

```diff
-         return uz
-       }(uz);
-       return (0, sz.jsxs)("div", {
-         className: "ThumbnailRejectionNotice",
-         children: [(0, sz.jsxs)("div", {
-           className: "ThumbnailRejectionNoticeTitle",
+       };
+       return (0, BE.jsx)(mg, {
+         title: Eq,
+         hoverInfo: gq,
+         anchorId: Yq,
+         status: lq,
+         hasData: oq > 0 || Pq,
+         headerActions: cq,
+         filters: dq,
+         legend: iq,
+         csvExport: Zq,
+         children: (0, BE.jsx)(Rq.d, {
+           width: "100%",
+           height: "100%",
+           children: (0, BE.jsxs)(Uq.e, {
+             data: nq,
+ ... (286 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1111-L1113` → after: `L1313-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1313-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1313-L1352) · [Before (L1111-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1111-L1113)

```diff
-             name: "triangle-exclamation"
-           }), " ", Hz("thumbnail:thumbnailsRejected"), " ", (0, sz.jsx)(Oz.c, {
-             name: "triangle-exclamation"
+             stroke: YE.grid,
+             strokeOpacity: .3,
+             strokeDasharray: "3 3",
+             vertical: !1
+           }), (0, BE.jsx)(sq.b, {
+             dataKey: "label",
+             stroke: YE.axis,
+             interval: 0,
+             height: Pq.xAxisHeight,
+             SB: qq => (0, BE.jsx)(Qg, {
+               ...qq,
+               layout: Pq,
+               labels: oq,
+               openedIndex: tq
+             })
+           }), (0, BE.jsx)(Xq.e, {
+ ... (24 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1116-L1149` → after: `L1372-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1372-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1372-L1514) · [Before (L1116-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1116-L1149)

```diff
-           className: "ThumbnailRejectionNoticeSubtitle",
-           children: Hz("thumbnail:thumbnailsRejectedDescription")
-         }), (0, sz.jsx)("div", {
-           className: "ThumbnailRejectionNoticeList",
-           children: [...Rz.entries()].map((zz => {
-             let [uz, bz] = zz;
-             const Ez = Qz[uz];
-             return (0, sz.jsxs)("div", {
-               className: "ThumbnailRejectionNoticeGroup",
-               children: [(0, sz.jsx)("div", {
-                 className: "ThumbnailRejectionNoticeItems",
-                 children: bz.map((zz => (0, sz.jsxs)("div", {
-                   className: "ThumbnailRejectionNoticeItem",
-                   children: [(0, sz.jsx)("div", {
-                     className: "ThumbnailRejectionNoticeItemIcon",
-                     children: (0, sz.jsx)(Oz.c, {
- ... (18 more removed lines; see GitHub link above)
+           className: "StudioStatsChartTooltipValue",
+           children: Yq(lq.value)
+         })]
+       })
+     }
+ 
+     function rg(qq) {
+       if (!(qq.target instanceof Element)) return;
+       const Eq = qq.target.closest(".Dropdown-root");
+       if (!(Eq instanceof HTMLElement)) return;
+       let gq = 0;
+       const Yq = Eq.closest(".StudioStatsChart");
+       null !== Yq && (gq = Yq.getBoundingClientRect().left + parseFloat(getComputedStyle(Yq).paddingLeft)), Eq.style.setProperty("--studio-filter-menu-max-width", Eq.getBoundingClientRect().right - gq + "px")
+     }
+ 
+     function vg(qq) {
+ ... (127 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1151-L1154` → after: `L1516-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1516-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1516-L1523) · [Before (L1151-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1151-L1154)

```diff
-             }, uz)
-           }))
-         }), (0, sz.jsxs)("label", {
-           className: "ThumbnailRejectionNoticeCheckbox",
+             })
+           }
+         }(vq, uq),
+         bq = void 0 === hq ? bE(vq.map((qq => ({
+           dateMs: 0,
+           value: qq.value
+         }))), cq, uq) : iE(hq, cq),
+         iq = (0, BE.jsxs)(vg, {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1156-L1173` → after: `L1525-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1525-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1525-L1568) · [Before (L1156-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1156-L1173)

```diff
-             checked: pz,
-             onChange: zz => dz(zz.target.checked),
-             disabled: Fz
-           }), (0, sz.jsx)("span", {
-             children: Hz("thumbnail:haveReadRejectionReasons")
-           })]
-         }), (0, sz.jsx)(iz.q, {
-           onClick: async function() {
-             Zz(!0);
-             const zz = await Promise.allSettled(uz.map((zz => Az.c.deleteSchematicThumbnail(bz, zz.id))));
-             if (!nz.current) return;
-             const Ez = zz.filter((zz => "rejected" === zz.status));
-             Ez.length > 0 && console.error("Some rejected thumbnails failed to delete:", Ez), lz()
-           },
-           disabled: !pz || Fz,
-           className: "ThumbnailRejectionNoticeAcceptButton",
- ... (2 more removed lines; see GitHub link above)
+             className: "StudioStatsBarChartNameFilter",
+             placeholderText: dq("Filter by name"),
+             onValueChange: Hq
+           }), oq.map(((qq, Eq) => function(qq) {
+             return qq.length > 0
+           }(qq) ? (0, BE.jsx)(eq.d, {
+             options: qq,
+             value: Pq[Eq],
+             onChange: qq => {
+               const gq = [...Bq];
+               gq[Eq] = qq.value, Wq(gq)
+             }
+           }, Eq) : null))]
+         }),
+         Zq = {
+           fileNameParts: [Eq, ...Pq.map((qq => {
+ ... (28 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1179-L1181` → after: `L1589-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1589-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1589-L1594) · [Before (L1179-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1179-L1181)

```diff
-         thumbnailId: uz,
-         thumbnailName: bz,
-         onClose: Ez
+         active: Eq,
+         payload: gq,
+         maxBucketMinute: Yq,
+         totalSessions: lq,
+         comparisonLabel: Oq,
+         lines: mq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1185` → after: `L1598-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1598-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1598-L1600) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1185)

```diff
-       } = (0, Mz.F)();
+       } = (0, Nq.v)();
+       if (!Eq || !gq || 0 === gq.length) return null;
+       const cq = gq[0].payload;
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1187` → after: `L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1602) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1187)

```diff
-         className: "ThumbnailDeleteConfirm",
+         className: "StudioStatsChartTooltip",
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1189-L1198` → after: `L1604-L30628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L1604-L30628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L1604-L30628) · [Before (L1189-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1189-L1198)

```diff
-           className: "ThumbnailDeleteConfirmTitle",
-           children: nz("thumbnail:deleteThumbnail")
-         }), (0, sz.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
-           children: [(0, sz.jsx)("img", {
-             className: "ThumbnailDeleteConfirmImage",
-             src: `${Dz.clientSideServerUrls.s3Url}/customThumbnails/${uz}.jpg`,
-             alt: "Thumbnail to delete"
-           }), (0, sz.jsx)("div", {
-             className: "ThumbnailGridItemLabel",
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: xq("studio:dropoffTooltipMinute", {
+             minutes: RE(cq.minute, Yq)
+           })
+         }), null !== cq.percent && (0, BE.jsx)("div", {
+           className: "StudioStatsChartTooltipValue",
+           children: kE(cq.percent)
+         }), mq.map(((qq, Eq) => {
+           const gq = cq.lineValues[Eq];
+           return (0, BE.jsxs)("div", {
+             className: "StudioStatsChartTooltipLine SmallTextLight",
+             children: [(0, BE.jsx)("span", {
+               className: "StudioStatsChartTooltipLineSwatch",
+               style: {
+                 backgroundColor: qq.colour
+               }
+ ... (29009 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1205-L1215` → after: `L30634-L30655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30634-L30655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30634-L30655) · [Before (L1205-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1205-L1215)

```diff
-           className: "ThumbnailDeleteConfirmButtons",
-           children: [(0, sz.jsxs)(iz.K, {
-             className: "ThumbnailDeleteConfirmButton",
-             onClick: () => Ez(!0),
-             children: [(0, sz.jsx)(Oz.c, {
-               name: "trash-can"
-             }), " ", nz("general:delete")]
-           }), (0, sz.jsx)(iz.j, {
-             className: "ThumbnailDeleteConfirmButton",
-             onClick: () => Ez(!1),
-             children: nz("general:cancel")
+           className: "StudioGamePageStatusChips",
+           children: [null !== Bq && (0, BE.jsx)("span", {
+             className: mq()("StudioGamePageStatusChip", {
+               StudioGamePageStatusChipPublished: Bq
+             }),
+             children: dq(Bq ? "general:published" : "general:draft")
+           }), Wq]
+         })]
+       }), (0, BE.jsxs)("div", {
+         className: "StudioGamePageHeaderMeta",
+         children: [(0, BE.jsxs)("div", {
+           className: "StudioGamePageCategory",
+           children: [dq("general:category"), ": ", (0, BE.jsx)("span", {
+             children: (0, Vq.eb)(lq)
+           })]
+         }), null !== xq && (0, BE.jsxs)("div", {
+ ... (6 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1218-L1223` → after: `L30669-L30675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30669-L30675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30669-L30675) · [Before (L1218-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1218-L1223)

```diff
-       })
-     }
-     var Iz = bz(2916),
-       Bz = bz(4737),
-       Cz = bz(4744),
-       Yz = bz(4780);
+       }), void 0 !== aq && (0, BE.jsx)("div", {
+         className: "StudioGamePageHeaderActions",
+         children: aq
+       })]
+     })]
+   })
+ }
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1225-L1234` → after: `L30677-L30703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30677-L30703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30677-L30703) · [Before (L1225-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1225-L1234)

```diff
-     function kz(zz) {
-       let {
-         schematicData: uz,
-         setTexturePack: bz,
-         initializeTexturePack: nz,
-         publishFormEnabled: iz
-       } = zz;
-       const {
-         t: lz
-       } = (0, Mz.F)(), [tz, Hz] = (0, Ez.useState)(null), [Oz, pz] = (0, Ez.useState)(null), [dz, Zz] = (0, Ez.useState)(!1), Rz = (0, Tz.e)(), Kz = iz && !dz, wz = uz.customTexturePackKey;
+ function RX(qq) {
+   let {
+     schematicId: Eq,
+     approvalInfo: gq,
+     canOverride: Yq,
+     onApprovalChanged: lq
+   } = qq;
+   const {
+     t: Oq
+   } = (0, Nq.v)(), xq = gq.overallPassed;
+   return (0, BE.jsxs)("button", {
+     type: "button",
+     className: mq()("StudioGamePageApprovalChip", {
+       StudioGamePageApprovalChipPassed: xq
+     }),
+     onClick: () => {
+ ... (11 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1236-L1243` → after: `L30705-L30734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30705-L30734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30705-L30734) · [Before (L1236-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1236-L1243)

```diff
-       function Xz(zz) {
-         var uz;
-         Hz(zz.metaData.id), pz(null !== (uz = zz.metaData.fromFolderName) && void 0 !== uz ? uz : null), (zz.metaData.id !== Iz.r.CUSTOM || zz.metaData.fromFolderName) && bz(zz)
-       }
-       return (0, Ez.useEffect)((() => {
-         wz && (Zz(!0), (0, Bz.c)(wz).then((zz => {
-           var uz;
-           Rz.current && (zz ? (Hz(zz.metaData.id), pz(null !== (uz = zz.metaData.fromFolderName) && void 0 !== uz ? uz : null), nz(zz)) : console.error(`No texture pack at ${wz}`))
+ function UX(qq) {
+   let {
+     game: Eq,
+     canManage: gq,
+     isOwner: lq,
+     userContext: Oq
+   } = qq;
+   const {
+     t: mq
+   } = (0, Nq.v)(), Aq = (0, vq.b)(Eq), uq = Oq.playerHasRank("developer"), [Wq, aq] = ZX(), jq = Jm(Eq.schematicId), Hq = Rm(aq, jq.onRequest), Pq = gq ? Wq : iX, Qq = function(qq, Eq) {
+     const [gq, lq] = (0, Yq.useState)({
+       ccu: qq.ccu,
+       favourites: qq.favourites,
+       publishedAt: qq.publishedAt,
+       gameUpdatedAt: qq.gameUpdatedAt,
+       gameBoostHistory: qq.gameBoostHistory
+ ... (14 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1245-L1250` → after: `L30736-L30853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30736-L30853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30736-L30853) · [Before (L1245-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1245-L1250)

```diff
-           console.error("Error fetching texture pack: ", zz)
-         })).finally((() => {
-           Zz(!1)
-         })))
-       }), [wz, nz, Rz]), (0, sz.jsxs)("div", {
-         className: "BloxdForm TexturePackSection",
+           console.error("Failed to refresh studio game stats", qq)
+         }))
+       }), MX);
+       return () => {
+         qq = !0, clearInterval(gq)
+       }
+     }), [Oq, Eq]), gq
+   }(Eq, Oq), {
+     schematicData: hq
+   } = Aq, {
+     approvalInfo: nq,
+     reloadApprovalInfo: bq
+   } = function(qq, Eq, gq) {
+     const [lq, Oq] = (0, Yq.useState)(null), [mq, xq] = (0, Yq.useState)(0);
+     return (0, Yq.useEffect)((() => {
+       Oq(null)
+ ... (102 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1252-L1279` → after: `L30855-L30860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30855-L30860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30855-L30860) · [Before (L1252-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1252-L1279)

```diff
-           className: "SectionTitle",
-           children: lz("customTexturePack:customTexturePack")
-         }), (0, sz.jsxs)("div", {
-           className: "TexturePackList",
-           children: [(0, sz.jsx)("div", {
-             className: Fz()("TexturePack", {
-               Selected: null === tz && !dz,
-               Disabled: !Kz
-             }),
-             onClick: () => {
-               Kz && (Hz(null), bz(null), pz(null))
-             },
-             children: (0, sz.jsx)("div", {
-               className: "TexturePackName",
-               children: "No Override"
-             })
- ... (12 more removed lines; see GitHub link above)
+           className: "SchematicPageBody",
+           children: (0, BE.jsx)(tq.e, {
+             editor: Aq
+           })
+         }), (0, BE.jsx)(tq.c, {
+           editor: Aq
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1282-L1283` → after: `L30863-L30865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30863-L30865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30863-L30865) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1282-L1283)

```diff
-     }
-     var zu = bz(4792);
+     })]
+   })
+ }
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1285-L1306` → after: `L30867-L30918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30867-L30918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30867-L30918) · [Before (L1285-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1285-L1306)

```diff
-     function uu(zz) {
-       var uz;
-       let {
-         gameCategory: bz,
-         setGameCategory: Ez,
-         disabled: nz
-       } = zz;
-       const lz = null !== (uz = (0, Zz.rb)(bz)) && void 0 !== uz ? uz : "other";
-       return (0, sz.jsxs)("div", {
-         className: "GameCategoryPicker",
-         children: [(0, sz.jsx)(wz.d, {
-           label: "worldBuilder:gameCategoryGroup",
-           className: "GameCategoryGroup",
-           disabled: nz,
-           children: (0, sz.jsx)(Xz.d, {
-             options: Zz.eb.map((zz => ({
- ... (6 more removed lines; see GitHub link above)
+ function FX() {
+   const {
+     t: qq
+   } = (0, Nq.v)(), {
+     gameAnalyticsId: Eq
+   } = (0, lq.v)(), gq = (0, hq.useNavigatePreserveSearch)(), {
+     userContext: Oq,
+     isUserContextUpdating: mq
+   } = (0, aq.c)();
+   (0, bq.e)();
+   const Aq = (0, bq.j)(),
+     [cq, Bq] = (0, Yq.useState)({
+       status: "loading"
+     }),
+     [Vq, jq] = ZX(),
+     Hq = Jm(Eq),
+ ... (36 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1308-L1323` → after: `L30920-L30942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30920-L30942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30920-L30942) · [Before (L1308-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1308-L1323)

```diff
-           })
-         }), (0, sz.jsx)(wz.d, {
-           label: "worldBuilder:gameCategory",
-           className: "GameCategory",
-           disabled: nz,
-           children: (0, sz.jsx)("div", {
-             className: "GameCategoryOptions",
-             children: Zz.Z[lz].map((zz => (0, sz.jsx)(iz.V, {
-               active: zz === bz,
-               onClick: () => {
-                 Ez(zz)
-               },
-               children: (0, Zz.nb)(zz)
-             }, zz)))
-           })
-         })]
+           }
+         }))
+       })).catch((qq => {
+         console.error("Failed to load first party game ranks", qq)
+       })), () => {
+         Yq = !0
+       }
+     }
+     const Yq = Oq.playerHasRank("developer") || Oq.playerHasRank("admin");
+     let lq = !1;
+     return Bq({
+       status: "loading"
+     }), dq.e.getGame(Oq, qq, !0).then((qq => {
+       if (lq) return;
+       const Eq = Oq.getPlayerName() === qq.owner.name;
+       Bq({
+ ... (7 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1326-L1391` → after: `L30951-L31005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R30951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L30951-L31005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L30951-L31005) · [Before (L1326-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1326-L1391)

```diff
- 
-     function bu(zz) {
-       let {
-         editor: uz,
-         onClose: bz
-       } = zz;
-       const {
-         t: Ez
-       } = (0, Mz.F)(), {
-         schematicData: nz,
-         updateSchematicData: iz,
-         publishFormEnabled: tz,
-         formEnabled: Hz
-       } = uz;
-       return (0, sz.jsxs)(sz.Fragment, {
-         children: [(0, sz.jsxs)(rz, {
- ... (50 more removed lines; see GitHub link above)
+   }), [mq, Eq, Oq, gq]);
+   const rq = "loaded" === cq.status ? cq.game : null;
+   return (0, BE.jsxs)("div", {
+     className: "StudioGamePage",
+     children: ["loading" === cq.status && (0, BE.jsx)("div", {
+       className: "StudioGamePageCentredMessage",
+       children: (0, BE.jsx)(Qq.e, {})
+     }), "error" === cq.status && (0, BE.jsxs)("div", {
+       className: "StudioGamePageCentredMessage StudioGamePageError",
+       children: [(0, BE.jsx)(Pq.d, {
+         name: "face-dizzy"
+       }), (0, BE.jsx)("div", {
+         children: qq("studio:failedToLoadGame")
+       })]
+     }), "notAuthorised" === cq.status && (0, BE.jsxs)("div", {
+       className: "StudioGamePageCentredMessage StudioGamePageError",
+ ... (39 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1393` → after: `L31007-L31069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31007-L31069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31007-L31069) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1393)

```diff
-       })
+       }), (0, BE.jsx)(fX, {
+         tab: tq,
+         game: GX(rq.game, rq.rankCategories, qq),
+         statRequests: Hq,
+         ai: (0, BE.jsx)(aX, {
+           game: GX(rq.game, rq.rankCategories, qq),
+           canOverride: !0,
+           onOpenStat: yq,
+           onAnswerShown: Hq.onAnswerShown
+         }, `${rq.game}|${null===rq.rankCategories}`),
+         manage: null
+       })]
+     })]
+   })
+ }
+ }, 4753: (qq, Eq, gq) => {
+ ... (47 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1396-L1399` → after: `L31101-L31140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31101-L31140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31101-L31140) · [Before (L1396-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1396-L1399)

```diff
-     function Eu(zz) {
-       let {
-         editor: uz
-       } = zz;
+   function Oq(qq, Eq, gq) {
+     let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lq;
+     const Oq = Eq.length;
+     if (0 === Oq) return null;
+     const mq = new Array(gq).fill(1 / 0),
+       xq = new Array(gq).fill(-1 / 0),
+       Aq = Array.from({
+         length: gq
+       }, (() => new Map)),
+       cq = Array.from({
+         length: gq
+       }, (() => new Map));
+     let uq = 0;
+     for (let lq = 0; lq < Oq; lq++) {
+       uq += Eq[lq];
+       for (let Yq = 0; Yq < gq; Yq++) {
+ ... (24 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1401-L1431` → after: `L31142-L31159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31142-L31159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31142-L31159) · [Before (L1401-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1401-L1431)

```diff
-         t: bz
-       } = (0, Mz.F)(), {
-         schematicData: Ez,
-         formEnabled: nz,
-         hasUnsavedChanges: lz
-       } = uz, pz = nz && lz;
-       return (0, sz.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [nz && lz && (0, sz.jsxs)("div", {
-           className: "SchematicPageFooterStatus",
-           children: [(0, sz.jsx)("span", {
-             className: "SchematicPageFooterStatusDot"
-           }), bz("worldBuilder:unsavedChanges")]
-         }), (0, sz.jsx)(Hz.f, {
-           tooltipInner: (0, sz.jsx)("div", {
-             className: "SaveButtonTooltip",
- ... (15 more removed lines; see GitHub link above)
+         axis: Oq,
+         isLow: Bq
+       } = lq, dq = Bq ? mq[Oq] : xq[Oq];
+       for (const Yq of null !== (Vq = cq[Oq].get(dq)) && void 0 !== Vq ? Vq : []) {
+         var Vq;
+         if (!Wq[Yq]) {
+           Wq[Yq] = 1, Nq -= Eq[Yq];
+           for (let lq = 0; lq < gq; lq++) {
+             const Oq = qq[Yq * gq + lq];
+             Aq[lq].set(Oq, Aq[lq].get(Oq) - Eq[Yq])
+           }
+         }
+       }
+       Bq ? mq[Oq]++ : xq[Oq]--
+     }
+     return {
+ ... (2 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1434-L1443` → after: `L31163-L31180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31163-L31180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31163-L31180) · [Before (L1434-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1434-L1443)

```diff
-     function nu(zz) {
-       let {
-         schematic: uz,
-         onSchematicUpdate: bz,
-         onClose: nz,
-         inSourceWorld: lz
-       } = zz;
-       const {
-         t: tz
-       } = (0, Mz.F)();
+   function mq(qq) {
+     const Eq = [],
+       gq = [];
+     for (const [lq, Oq] of Object.entries(qq.values))
+       for (const [qq, Yq] of Object.entries(Oq)) Yq > 0 && (Eq.push(Number(lq), Number(qq)), gq.push(Yq));
+     const Yq = Oq(Eq, gq, 2);
+     return null === Yq ? {
+       minX: qq.minX,
+       maxX: qq.maxX,
+       minZ: qq.minZ,
+       maxZ: qq.maxZ
+     } : {
+       minX: Yq.min[0],
+       maxX: Yq.max[0],
+       minZ: Yq.min[1],
+       maxZ: Yq.max[1]
+ ... (2 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1445-L1475` → after: `L31182-L31194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31182-L31194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31182-L31194) · [Before (L1445-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1445-L1475)

```diff
-       function Hz() {
-         null === nz || void 0 === nz || nz()
-       }
-       const Oz = (0, zu.c)(uz, {
-         onNavigateAway: Hz,
-         inSourceWorld: lz
-       });
-       return (0, Ez.useEffect)((() => {
-         null === bz || void 0 === bz || bz(Oz.schematicData)
-       }), [Oz.schematicData, bz]), (0, sz.jsxs)("div", {
-         className: "SchematicPage SchematicPagePopupVariant",
-         children: [(0, sz.jsxs)("div", {
-           className: "SchematicPageBody",
-           children: [(0, sz.jsx)(iz.d, {
-             onClick: Hz,
-             children: tz("worldBuilder:back")
- ... (15 more removed lines; see GitHub link above)
+   function xq(qq) {
+     const Eq = [],
+       gq = [];
+     for (const [lq, Oq] of Object.entries(qq.frequencies))
+       for (const [qq, Yq] of Object.entries(Oq))
+         for (const [Oq, mq] of Object.entries(Yq)) mq > 0 && (Eq.push(Number(lq), Number(qq), Number(Oq)), gq.push(mq));
+     const Yq = Oq(Eq, gq, 3);
+     return null === Yq ? {
+       min: qq.min,
+       max: qq.max
+     } : {
+       min: Yq.min,
+       max: Yq.max
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1478-L1495` → after: `L31198-L31216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31198-L31216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31198-L31216) · [Before (L1478-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1478-L1495)

```diff
-     function iu(zz) {
-       let {
-         schematic: uz,
-         onSchematicUpdate: bz,
-         onClose: Ez,
-         inSourceWorld: iz
-       } = zz;
-       nz.NotificationProvider.showCustomPopup({
-         body: zz => (0, sz.jsx)(nu, {
-           schematic: uz,
-           onSchematicUpdate: bz,
-           onClose: zz,
-           inSourceWorld: iz
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: Ez,
- ... (2 more removed lines; see GitHub link above)
+   function Aq(qq) {
+     const Eq = Math.pow(10, Math.floor(Math.log10(Math.max(1, qq)))),
+       gq = [1, 2, 5, 10].find((gq => gq * Eq >= qq));
+     return Math.max(1, gq * Eq)
+   }
+   const cq = .05;
+ 
+   function uq(qq, Eq) {
+     const gq = qq.length - Eq,
+       Yq = Eq + Math.floor(gq / 2);
+     return gq % 2 === 1 ? qq[Yq] : (qq[Yq - 1] + qq[Yq]) / 2
+   }
+ 
+   function Bq(qq, Eq) {
+     let gq = 0,
+       Yq = qq.length;
+ ... (3 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1497-L1509` → after: `L31218-L31219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31218-L31219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31218-L31219) · [Before (L1497-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1497-L1509)

```diff
-   },
-   4704: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => pz
-     });
-     var Ez = bz(1038),
-       nz = bz.n(Ez),
-       iz = bz(1181),
-       lz = bz(1047),
-       Mz = bz(1419),
-       tz = bz(1332),
-       Hz = bz(1305),
-       Oz = bz(1089);
+     return gq
+   }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1511-L1570` → after: `L31221-L31234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31221-L31234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31221-L31234) · [Before (L1511-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1511-L1570)

```diff
-     function pz(zz) {
-       let {
-         editor: uz,
-         className: bz
-       } = zz;
-       const {
-         t: Ez
-       } = (0, iz.F)(), {
-         schematicData: pz,
-         formEnabled: dz,
-         publishFormEnabled: Fz
-       } = uz, Zz = !dz || !Fz;
-       return (0, Oz.jsxs)("div", {
-         className: nz()("PublishButtonContainer", bz),
-         children: [uz.canEditSourceWorld && (0, Oz.jsxs)(Mz.f, {
-           onClick: uz.editSourceWorld,
- ... (44 more removed lines; see GitHub link above)
+   function Wq(qq) {
+     const Eq = Float64Array.from(qq).filter((qq => qq > 0));
+     if (0 === Eq.length) return {
+       max: 0,
+       median: 0,
+       hiddenBelow: 0
+     };
+     Eq.sort();
+     let gq = 0,
+       Yq = uq(Eq, gq);
+     for (;;) {
+       const qq = Bq(Eq, Yq * cq);
+       if (qq === gq) break;
+       gq = qq, Yq = uq(Eq, gq)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1572-L1586` → after: `L31236-L31239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31236-L31239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31236-L31239) · [Before (L1572-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1572-L1586)

```diff
-   },
-   4737: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => nz
-     });
-     var Ez = bz(1195);
-     async function nz(zz) {
-       const uz = await fetch(`${Ez.clientSideServerUrls.s3Url}/${zz}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === uz.status || 403 === uz.status) return null;
-       if (!uz.ok) throw new Error(`Failed to download the texture pack (${uz.status})`);
-       return await uz.json()
+     return {
+       max: Eq[Eq.length - 1],
+       median: Yq,
+       hiddenBelow: Yq * cq
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1588-L1604` → after: `L31241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31241) · [Before (L1588-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1588-L1604)

```diff
-   },
-   4792: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Kz
-     });
-     var Ez = bz(56),
-       nz = bz(1298),
-       iz = bz(994),
-       lz = bz(158),
-       Mz = bz(1519),
-       tz = bz(20),
-       Hz = bz(1871),
-       Oz = bz(1473),
-       pz = bz(4335),
-       dz = bz(1322),
-       Fz = bz(1114),
- ... (1 more removed lines; see GitHub link above)
+   }
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1606-L1641` → after: `L31243-L31254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31243-L31254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31243-L31254) · [Before (L1606-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1606-L1641)

```diff
-     function Rz(zz, uz) {
-       return {
-         schematicId: zz.schematicId,
-         name: zz.name,
-         description: zz.description,
-         gamePublished: uz,
-         gameCategory: zz.gameCategory,
-         defaultGamemode: zz.defaultGamemode,
-         voidDeathHeight: zz.voidDeathHeight,
-         disableKeepInventory: zz.disableKeepInventory,
-         disableTpRequests: zz.disableTpRequests,
-         disableLobbySpawn: zz.disableLobbySpawn,
-         disableMobs: zz.disableMobs,
-         disableSpawnProtection: zz.disableSpawnProtection,
-         disableFallDamage: zz.disableFallDamage,
-         worldBorder: zz.worldBorder,
- ... (20 more removed lines; see GitHub link above)
+   function Nq(qq, Eq) {
+     return Eq.max <= 0 || qq <= 0 ? 0 : Math.sqrt(Math.min(1, qq / Eq.max))
+   }
+   const aq = [
+       [60, 15, 100],
+       [130, 30, 160],
+       [215, 45, 100],
+       [250, 130, 25],
+       [255, 215, 0]
+     ],
+     Vq = [200, 228, 248],
+     dq = `rgb(${Vq.join(", ")})`;
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1643-L1651` → after: `L31256-L31266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31256-L31266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31256-L31266) · [Before (L1643-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1643-L1651)

```diff
-       function Lz(zz, uz) {
-         fz((bz => ({
-           ...bz,
-           [zz]: uz
-         })))
-       }
-       const Pz = (0, Ez.useCallback)((zz => {
-         xz.current = zz, Nz(zz)
-       }), []);
+   function jq(qq) {
+     const Eq = Math.max(0, Math.min(1, qq)) * (aq.length - 1),
+       gq = Math.min(aq.length - 2, Math.floor(Eq)),
+       Yq = Eq - gq,
+       lq = aq[gq],
+       Oq = aq[gq + 1];
+     return [0, 1, 2].map((qq => Math.round(lq[qq] + (Oq[qq] - lq[qq]) * Yq)))
+   }
+   const Hq = .2,
+     oq = .5,
+     Pq = .03;
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1653-L1677` → after: `L31268-L31362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31268-L31362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31268-L31362) · [Before (L1653-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1653-L1677)

```diff
-       function Gz(zz) {
-         rz("Loading");
-         const uz = Rz(Xz, zz),
-           bz = oz !== xz.current ? oz : void 0;
-         Oz.c.updateSchematic(Kz, uz, bz).then((bz => {
-           let {
-             customTexturePackKey: Ez
-           } = bz;
-           rz("Success"), Lz("customTexturePackKey", Ez), vz.current = uz, xz.current = void 0, Nz(void 0), setTimeout((() => {
-             Lz("gamePublished", zz), rz("Enter")
-           }), 1e3)
-         })).catch((zz => {
-           var uz;
-           (console.error("Failed to save schematic:", zz), rz("Error"), zz instanceof lz.c && zz.errorMessageForUser) && dz.NotificationProvider.showAlertPopup({
-             title: "worldBuilder:changesNotSaved",
-             subtitle: zz.errorMessageForUser,
- ... (9 more removed lines; see GitHub link above)
+   function Qq(qq) {
+     return Object.values(qq.values).flatMap((qq => Object.values(qq)))
+   }
+ 
+   function yq(qq) {
+     return Object.values(qq.frequencies).flatMap((qq => Object.values(qq).flatMap((qq => Object.values(qq)))))
+   }
+ 
+   function tq(qq, Eq, gq) {
+     if (qq <= 0 || qq < Eq.hiddenBelow) return 0;
+     if (gq <= 0) return 1;
+     const Yq = Math.min(1, Nq(qq, Eq) / gq),
+       lq = Yq * Yq;
+     return lq < Pq ? 0 : lq
+   }
+   const rq = [62, 82, 106],
+ ... (79 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1679-L1700` → after: `L31364-L31400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31364-L31400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31364-L31400) · [Before (L1679-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1679-L1700)

```diff
-       return {
-         schematicData: Xz,
-         updateSchematicData: Lz,
-         setTexturePack: Nz,
-         initializeTexturePack: Pz,
-         updateState: sz,
-         formEnabled: Jz,
-         publishFormEnabled: Az,
-         hasUnsavedChanges: Tz,
-         canEditSourceWorld: !bz,
-         saveSchematic: Gz,
-         unpublishSchematic: function() {
-           dz.NotificationProvider.showPromptPopup({
-             icon: "rocket-launch",
-             title: "worldBuilder:unpublishAsGameConfirmTitle",
-             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
- ... (6 more removed lines; see GitHub link above)
+     }), []), (0, Yq.useEffect)((() => {
+       Eq || (aq.current.Fc.clear(), Aq(!1))
+     }), [Eq, Aq]);
+     const Vq = qq => {
+       const Eq = aq.current,
+         gq = Math.min(Bq, Math.max(0, (qq - Eq.lastTimeMs) / 1e3));
+       Eq.lastTimeMs = qq;
+       const {
+         Fc: Yq,
+         flyAccel: xq
+       } = Eq, Aq = (Yq.has("forward") ? 1 : 0) - (Yq.has("backward") ? 1 : 0), Wq = (Yq.has("right") ? 1 : 0) - (Yq.has("left") ? 1 : 0), Nq = 0 !== Aq || 0 !== Wq;
+       Nq ? Yq.has("sprint") && (Eq.isRunning = !0) : Eq.isRunning = !1;
+       const dq = Yq.has("jump") ? 1 : Yq.has("crouch") ? -1 : 0,
+         jq = 0 !== dq && dq !== Eq.verticalDirection;
+       Eq.verticalDirection = dq;
+       const Hq = (0, lq.j)(xq, Nq, dq, jq, gq * Oq.c.clientTicksPerSecond);
+ ... (21 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1702-L1711` → after: `L31402-L31405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31402-L31405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31402-L31405) · [Before (L1702-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1702-L1711)

```diff
-         editSourceWorld: function() {
-           rz("Loading"), pz.e.getSourceWorld(Xz.schematicId).then((zz => {
-             Hz.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), (0, tz.k)("other"), wz((0, nz.c)("classic", zz)), null === uz || void 0 === uz || uz()
-           })).catch((zz => {
-             console.error("Failed to get source world:", zz), rz("Error"), setTimeout((() => {
-               rz("Enter")
-             }), 1e3)
-           }))
+         onKeyUp: qq => {
+           if (Wq("Zoom", qq.code)) return void Aq(!1);
+           const Eq = Nq(qq.code, gq);
+           null !== Eq && (qq.preventDefault(), aq.current.Fc.delete(Eq))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1713-L1716` → after: `L31407-L31408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31407-L31408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31407-L31408) · [Before (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1713-L1716)

```diff
-         playGame: function() {
-           Hz.gameBridge.send("leaveGame", {
-             reloadPath: "/"
-           }), wz((0, Mz.C)((0, iz.s)(Xz.schematicId), Xz)), null === uz || void 0 === uz || uz()
+         onBlur: () => {
+           aq.current.Fc.clear(), Aq(!1)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L1720-L1721` → after: `L31412-L31500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R31412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L31412-L31500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/103.js#L31412-L31500) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/103.js#L1720-L1721)

```diff
-   },
-   4700: () => {}
+   }
+ }, 6310: (qq, Eq, gq) => {
+   gq.d(Eq, {
+     b: () => lq
+   });
+   const Yq = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
+     granularity: "grapheme"
+   }) : null;
+ 
+   function lq(qq) {
+     return null === Yq ? Array.from(qq) : Array.from(Yq.segment(qq), (qq => {
+       let {
+         segment: Eq
+       } = qq;
+       return Eq
+     }))
+ ... (73 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/104.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/104.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864)

#### 1. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L4)

```diff
-   35852: (zz, uz, bz) => {
+   4773: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L6)

```diff
-       e: () => tz
+       b: () => Bq,
+       c: () => uq,
+       d: () => Wq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L8` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L10-L12) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L8)

```diff
-     var Ez = bz(1038),
+     gq(4781);
+     var Yq = gq(1183),
+       lq = gq(1018),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L10-L12` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L14-L17) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L10-L12)

```diff
-       iz = bz(56),
-       lz = bz(4327),
-       Mz = bz(1089);
+       mq = gq(1341),
+       xq = (gq(57), gq(4195)),
+       Aq = gq(1025),
+       cq = gq(1070);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L16-L17` → after: `L21-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L21-L26) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L16-L17)

```diff
-         locked: uz,
-         children: bz
+         children: Eq,
+         label: gq,
+         className: lq,
+         circleInfoText: xq,
+         disabled: uq,
+         onLabelClick: Bq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L19-L25` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L28-L32) · [Before (L19-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L19-L25)

```diff
-       const Ez = (0, iz.useRef)(null),
-         tz = (0, lz.e)(Ez, "y");
-       return (0, Mz.jsx)("div", {
-         ref: Ez,
-         className: nz()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: tz.before,
-           CreateCustomLobbyBodyMoreBelow: tz.after
+       const {
+         t: Wq
+       } = (0, Yq.v)(), Nq = (0, cq.jsxs)("div", {
+         className: Oq()("Label", {
+           ClickableLabel: void 0 !== Bq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L27-L28` → after: `L34-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L34-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L34-L50) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L27-L28)

```diff
-         "data-pad-ignore": uz || void 0,
-         children: bz
+         onClick: Bq,
+         children: [Wq(gq), xq && (0, cq.jsx)(Aq.d, {
+           name: "circle-info"
+         })]
+       });
+       return (0, cq.jsxs)("div", {
+         className: Oq()("LabeledInput", {
+           [lq]: lq,
+           DisabledLabelInput: uq
+         }),
+         children: [xq && (0, cq.jsx)(mq.e, {
+           tooltipInner: (0, cq.jsx)("div", {
+             className: "LabeledInputTooltip",
+             children: Wq(xq)
+           }),
+           children: Nq
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L51-L64` → after: `L55-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L55-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L55-L71) · [Before (L51-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L51-L64)

```diff
-       const uz = {
-         requested: !1,
-         closed: !1
-       };
-       Mz.NotificationProvider.showCustomPopup({
-         body: bz => (0, Zz.jsx)(Kz, {
-           flow: uz,
-           close: bz,
-           ...zz
-         }),
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           uz.closed = !0, uz.requested || (0, Fz.f)()
-         }
+       let {
+         checked: Eq,
+         setChecked: gq
+       } = qq;
+       return (0, cq.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         onClick: qq => {
+           gq(!Eq)
+         },
+         children: (0, cq.jsx)(xq.b, {
+           checked: Eq,
+           onChange: qq => {
+             gq(qq.target.checked)
+           },
+           disabled: !1
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L70-L75` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L77-L79) · [Before (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L70-L75)

```diff
-         flow: uz,
-         close: bz,
-         onCreating: Mz,
-         onCreated: Rz,
-         onFailedClosed: Kz,
-         join: wz
+         checked: Eq,
+         setChecked: gq,
+         disabled: Yq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L77-L166` → after: `L81-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L81-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L81-L95) · [Before (L77-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L77-L166)

```diff
-       const {
-         t: Xz
-       } = (0, lz.F)(), [fz, sz] = (0, nz.useState)(Ez.A), [rz, oz] = (0, nz.useState)(!1), [Nz, vz] = (0, nz.useState)(""), xz = (0, pz.e)();
-       (0, nz.useEffect)((() => {
-         (0, Fz.n)()
-       }), []);
-       const Jz = zz => ({
-         isEnabled: () => fz.plugins[zz],
-         Zx: uz => {
-           (0, Fz.i)({
-             plugin: zz,
-             enabled: uz
-           }), sz({
-             ...fz,
-             plugins: {
-               ...fz.plugins,
- ... (74 more removed lines; see GitHub link above)
+       return (0, cq.jsx)("div", {
+         className: Oq()("SwitchContainer", {
+           SwitchContainerDisabled: Yq
+         }),
+         onClick: () => {
+           Yq || gq(!Eq)
+         },
+         children: (0, cq.jsx)(xq.b, {
+           className: "SwitchCheckbox",
+           checked: Eq,
+           onChange: qq => {
+             gq(qq.target.checked)
+           },
+           disabled: !!Yq
+         })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L170` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L99) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L170)

```diff
-   4702: (zz, uz, bz) => {
+   4786: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L172` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L101) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L172)

```diff
-       b: () => Hz
+       e: () => cq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L174` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L103) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L174)

```diff
-     var Ez = bz(1038),
+     var Yq = gq(1018),
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L176-L179` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L105-L108) · [Before (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L176-L179)

```diff
-       iz = bz(4385),
-       lz = bz(1181),
-       Mz = bz(1089);
-     const tz = [...iz.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+       Oq = gq(4456),
+       mq = gq(1183),
+       xq = gq(1070);
+     const Aq = [...Oq.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L187` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L116) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L187)

```diff
-       } = (0, lz.F)(), Hz = zz.advancedMode ? tz.map((uz => [uz, zz.callbacks[uz]])) : iz.l.map((uz => [uz, zz.callbacks[uz]])), pz = (0, Mz.jsx)("div", {
+       } = (0, mq.v)(), cq = qq.advancedMode ? Aq.map((Eq => [Eq, qq.callbacks[Eq]])) : Oq.i.map((Eq => [Eq, qq.callbacks[Eq]])), Bq = (0, xq.jsx)("div", {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L200` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L129) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L200)

```diff
-       return bz ? pz : (0, Mz.jsxs)("div", {
+       return gq ? Bq : (0, xq.jsxs)("div", {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L214` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L143) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L214)

```diff
-           Zx: Ez
+           hG: Yq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L220` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L149) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L220)

```diff
-       } = (0, lz.F)(), Hz = bz();
+       } = (0, mq.v)(), cq = gq();
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L234` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L163) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L234)

```diff
-             src: `/textures/games/classic/customGames/${uz}.png`,
+             src: `/textures/games/classic/customGames/${Eq}.png`,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L271` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L200) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L271)

```diff
-   35845: (zz, uz, bz) => {
+   4764: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L273-L274` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L202-L205) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L273-L274)

```diff
-       d: () => Hz,
-       f: () => Oz
+       i: () => lE,
+       c: () => YE,
+       e: () => gE,
+       m: () => OE
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L276-L277` → after: `L207-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L207-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L207-L216) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L276-L277)

```diff
-     bz(56);
-     var Ez = bz(1038),
+     var Yq = gq(57),
+       lq = gq(1336),
+       Oq = gq(1422),
+       mq = gq(1659),
+       xq = gq(1183),
+       Aq = gq(1326),
+       cq = gq(1341),
+       uq = gq(1025),
+       Bq = gq(1214),
+       Wq = gq(1018),
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L279-L282` → after: `L218-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L218-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L218-L224) · [Before (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L279-L282)

```diff
-       iz = bz(4385),
-       lz = bz(316),
-       Mz = bz(1181),
-       tz = bz(1089);
+       aq = gq(296),
+       Vq = gq(4456),
+       dq = gq(1226),
+       jq = gq(4773),
+       Hq = gq(3040),
+       oq = gq(4786),
+       Pq = gq(1070);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L286-L289` → after: `L228-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L228-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L228-L231) · [Before (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L286-L289)

```diff
-         value: uz,
-         onChange: bz,
-         showAll: Ez,
-         disabled: Hz = !1
+         icon: Eq,
+         title: gq,
+         disabled: Yq,
+         children: lq
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L295-L296` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L234-L235) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L295-L296)

```diff
-         className: nz()("BloxdForm GamemodeForm", {
-           BasicOptions: !Ez
+         className: Nq()("ManageCard", {
+           ManageCardDisabled: Yq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L299-L300` → after: `L268-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L268-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L268-L296) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L299-L300)

```diff
-           className: "SectionTitle",
-           children: Oz("classic:defaultGamemode")
+           className: "ManageStackedFieldLabel",
+           children: Eq
+         }), Yq, gq && (0, Pq.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: gq
+         })]
+       })
+     }
+ 
+     function tq(qq) {
+       let {
+         label: Eq,
+         caption: gq,
+         disabled: Yq,
+         children: lq
+       } = qq;
+ ... (13 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L302-L307` → after: `L298-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L298-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L298-L477) · [Before (L302-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L302-L307)

```diff
-           className: "SectionBody",
-           children: iz.I.map((zz => Ez || (0, iz.C)(zz) ? (0, tz.jsx)("button", {
-             type: "button",
-             className: nz()("WorldGamemode", {
-               Selected: uz === zz
-             }),
+           className: "ManageFieldControl",
+           children: lq
+         })]
+       })
+     }
+ 
+     function rq(qq) {
+       var Eq, gq;
+       let {
+         schematicData: Yq,
+         updateSchematicData: lq,
+         publishFormEnabled: Oq,
+         formEnabled: mq
+       } = qq;
+       const {
+         t: Aq
+ ... (164 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L309-L316` → after: `L479-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L479-L481) · [Before (L309-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L309-L316)

```diff
-             onClick: () => {
-               bz(zz)
-             },
-             style: {
-               "--background-image": `url(${lz.y[zz]})`
-             },
-             children: lz.u[zz]
-           }, zz) : null))
+             advancedMode: !0,
+             hideWrapper: !0
+           })
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L323-L328` → after: `L540-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L540-L543) · [Before (L323-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L323-L328)

```diff
-         mapTypes: uz,
-         value: bz,
-         onChange: Ez,
-         showAll: Hz,
-         disabled: Oz = !1,
-         children: pz
+         schematicId: gq,
+         hasReadUploadPolicy: lq,
+         onPolicyValidationError: Aq,
+         onThumbnailReady: cq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L332` → after: `L547-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L547-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L547-L571) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L332)

```diff
-       } = (0, Mz.F)();
+       } = (0, xq.v)(), [aq, Vq] = (0, Yq.useState)(null), [dq, jq] = (0, Yq.useState)(""), [Hq, oq] = (0, Yq.useState)(""), [Qq, yq] = (0, Yq.useState)(!0), [tq, rq] = (0, Yq.useState)(!1), vq = (0, Yq.useRef)(!1), [hq, nq] = (0, Yq.useState)(null), [bq, iq] = (0, Yq.useState)(!1 … [truncated]
+         getRootProps: zq,
+         getInputProps: Lq,
+         isDragActive: Jq
+       } = (0, fq.e)({
+         accept: {
+           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+         },
+         multiple: !1,
+         onDrop: async qq => {
+           if (0 === qq.length) return;
+           const Eq = qq[0],
+             gq = ++Tq.current;
+           nq(null), iq(!1), Vq(null), jq(Eq.name);
+           try {
+             const qq = await Sq(Eq);
+ ... (9 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L334-L335` → after: `L573-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L573-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L573-L737) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L334-L335)

```diff
-         className: nz()("BloxdForm MapTypeForm", {
-           BasicOptions: !Hz
+         className: "ThumbnailUploadContainer",
+         children: [(0, Pq.jsxs)("div", {
+           ...zq({
+             className: Nq()("ThumbnailUploadDropzone", {
+               ActiveDrag: Jq,
+               ValidationError: sq
+             })
+           }),
+           children: [(0, Pq.jsx)("input", {
+             ...Lq()
+           }), !Jq && Rq ? (0, Pq.jsxs)(Pq.Fragment, {
+             children: [(0, Pq.jsxs)("div", {
+               className: "ThumbnailAspectPreviews",
+               children: [(0, Pq.jsxs)("div", {
+                 className: "ThumbnailAspectPreview",
+                 children: [(0, Pq.jsx)("div", {
+ ... (149 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L337` → after: `L739-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L739-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L739-L965) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L337)

```diff
-         children: [(0, tz.jsx)("div", {
+         children: [cq && (0, Pq.jsxs)("div", {
+           className: "ThumbnailUploadSuccessOverlay",
+           children: [(0, Pq.jsxs)("div", {
+             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
+             children: [(0, Pq.jsx)(uq.d, {
+               name: "check"
+             }), (0, Pq.jsx)(Mq.b, {})]
+           }), (0, Pq.jsx)("div", {
+             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
+             children: mq("thumbnail:thumbnailUploaded")
+           })]
+         }), (0, Pq.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: mq("thumbnail:uploadThumbnail")
+         }), (0, Pq.jsxs)("div", {
+           className: "ThumbnailUploaderBody",
+ ... (211 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L339` → after: `L967-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L967-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L967-L970) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L339)

```diff
-           children: dz("customLobby:mapType")
+           children: [aq("thumbnail:gameThumbnail"), fq && (0, Pq.jsx)("span", {
+             className: Nq()("ThumbnailActionMsg", `ThumbnailActionMsg--${fq.type}`),
+             children: fq.text
+           })]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L342-L345` → after: `L973-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L973-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L973-L1259) · [Before (L342-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L342-L345)

```diff
-           children: uz.map((zz => Hz || (0, iz.E)(zz) ? (0, tz.jsx)("button", {
-             type: "button",
-             className: nz()("MapType", {
-               Selected: bz === zz
+           children: (0, Pq.jsxs)("div", {
+             className: "ThumbnailGrid",
+             children: [(0, Pq.jsxs)("div", {
+               className: Nq()("ThumbnailGridItem ThumbnailGridItemDefault", {
+                 ThumbnailGridItemSelected: null === vq
+               }),
+               onClick: () => Kq(null),
+               children: [(0, Pq.jsx)(Zq.d, {
+                 game: {
+                   schematicId: mq.schematicId,
+                   imageBlurhash: mq.imageBlurhash
+                 }
+               }), (0, Pq.jsx)("div", {
+                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
+                 children: aq("general:default")
+               })]
+ ... (271 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L349-L352` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L1262) · [Before (L349-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L349-L352)

```diff
-               Ez(zz)
-             },
-             style: {
-               "--background-image": `url(${lz.n[zz]})`
+               dq && (cq(null), gq(null), Bq(null))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L354-L356` → after: `L1264-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L1264-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L1264-L1474) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L354-L356)

```diff
-             children: lz.j[zz]
-           }, zz) : null))
-         }), pz]
+             children: (0, Pq.jsx)("div", {
+               className: "TexturePackName",
+               children: "No Override"
+             })
+           }), Object.values(Kq.n).map((qq => (0, Pq.jsx)(Iq.d, {
+             id: qq,
+             isSelected: qq === Aq,
+             setSelected: Hq,
+             disabled: !dq
+           }, qq)))]
+         }), Aq === Kq.n.CUSTOM && (0, Pq.jsx)(eq.e, {
+           folderName: uq,
+           onTexturePackUpdated: Hq,
+           disabled: !dq,
+           maxFileSizeMb: 25,
+           packOwner: "customGame"
+ ... (195 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L360-L361` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/104.js#L1721) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/104.js#L360-L361)

```diff
-   4700: () => {},
-   35838: () => {}
+   4781: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/105.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/105.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L4-L19)

```diff
-   4735: (zz, uz) => {
-     uz.c = function(zz, uz) {
-       if (zz && uz) {
-         var bz = Array.isArray(uz) ? uz : uz.split(","),
-           Ez = zz.name || "",
-           nz = (zz.type || "").toLowerCase(),
-           iz = nz.replace(/\/.*$/, "");
-         return bz.some((function(zz) {
-           var uz = zz.trim().toLowerCase();
-           return "." === uz.charAt(0) ? Ez.toLowerCase().endsWith(uz) : uz.endsWith("/*") ? iz === uz.replace(/\/.*$/, "") : nz === uz
-         }))
-       }
-       return !0
-     }
-   },
-   4706: (zz, uz, bz) => {
+   36428: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L21` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L6) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L21)

```diff
-       b: () => Fu
+       c: () => Aq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L23-L35` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L8-L12) · [Before (L23-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L23-L35)

```diff
-     var Ez = bz(56),
-       nz = bz(4714),
-       iz = bz.n(nz);
- 
-     function lz(zz, uz, bz, Ez) {
-       return new(bz || (bz = Promise))((function(nz, iz) {
-         function lz(zz) {
-           try {
-             tz(Ez.next(zz))
-           } catch (uz) {
-             iz(uz)
-           }
-         }
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(57),
+       mq = gq(4405),
+       xq = gq(1070);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L37-L52` → after: `L14-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L14-L29) · [Before (L37-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L37-L52)

```diff
-         function Mz(zz) {
-           try {
-             tz(Ez.throw(zz))
-           } catch (uz) {
-             iz(uz)
-           }
-         }
- 
-         function tz(zz) {
-           var uz;
-           zz.done ? nz(zz.value) : (uz = zz.value, uz instanceof bz ? uz : new bz((function(zz) {
-             zz(uz)
-           }))).then(lz, Mz)
-         }
-         tz((Ez = Ez.apply(zz, uz || [])).next())
-       }))
+     function Aq(qq) {
+       let {
+         locked: Eq,
+         children: gq
+       } = qq;
+       const Yq = (0, Oq.useRef)(null),
+         Aq = (0, mq.c)(Yq, "y");
+       return (0, xq.jsx)("div", {
+         ref: Yq,
+         className: lq()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: Aq.before,
+           CreateCustomLobbyBodyMoreBelow: Aq.after
+         }),
+         "data-pad-ignore": Eq || void 0,
+         children: gq
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L55-L63` → after: `L50-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L50-L53) · [Before (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L55-L63)

```diff
-     function Mz(zz, uz) {
-       var bz, Ez, nz, iz, lz = {
-         label: 0,
-         sent: function() {
-           if (1 & nz[0]) throw nz[1];
-           return nz[1]
-         },
-         trys: [],
-         ops: []
+     function Vq(qq) {
+       const Eq = {
+         requested: !1,
+         closed: !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L65-L148` → after: `L55-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L55-L63) · [Before (L65-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L65-L148)

```diff
-       return iz = {
-         next: Mz(0),
-         throw: Mz(1),
-         return: Mz(2)
-       }, "function" === typeof Symbol && (iz[Symbol.iterator] = function() {
-         return this
-       }), iz;
- 
-       function Mz(Mz) {
-         return function(tz) {
-           return function(Mz) {
-             if (bz) throw new TypeError("Generator is already executing.");
-             for (; iz && (iz = 0, Mz[0] && (lz = 0)), lz;) try {
-               if (bz = 1, Ez && (nz = 2 & Mz[0] ? Ez.return : Mz[0] ? Ez.throw || ((nz = Ez.return) && nz.call(Ez), 0) : Ez.next) && !(nz = nz.call(Ez, Mz[1])).done) return nz;
-               switch (Ez = 0, nz && (Mz = [2 & Mz[0], nz.value]), Mz[0]) {
-                 case 0:
- ... (68 more removed lines; see GitHub link above)
+       xq.NotificationProvider.showCustomPopup({
+         body: gq => (0, aq.jsx)(dq, {
+           flow: Eq,
+           close: gq,
+           ...qq
+         }),
+         middleScreenPopupClassName: "CreateCustomLobbyPopup",
+         onClose: () => {
+           Eq.closed = !0, Eq.requested || (0, Nq.h)()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L150-L157` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L65) · [Before (L150-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L150-L157)

```diff
-       }
-       return lz
-     }
- 
-     function Hz(zz, uz, bz) {
-       if (bz || 2 === arguments.length)
-         for (var Ez, nz = 0, iz = uz.length; nz < iz; nz++) !Ez && nz in uz || (Ez || (Ez = Array.prototype.slice.call(uz, 0, nz)), Ez[nz] = uz[nz]);
-       return zz.concat(Ez || Array.prototype.slice.call(uz))
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L244-L254` → after: `L68-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L68-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L68-L94) · [Before (L244-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L244-L254)

```diff
-     function pz(zz, uz) {
-       var bz = function(zz) {
-         var uz = zz.name;
-         if (uz && -1 !== uz.lastIndexOf(".") && !zz.type) {
-           var bz = uz.split(".").pop().toLowerCase(),
-             Ez = Oz.get(bz);
-           Ez && Object.defineProperty(zz, "type", {
-             value: Ez,
-             writable: !1,
-             configurable: !1,
-             enumerable: !0
+     function dq(qq) {
+       let {
+         flow: Eq,
+         close: gq,
+         onCreating: xq,
+         onCreated: Vq,
+         onFailedClosed: dq,
+         join: jq
+       } = qq;
+       const {
+         t: Hq
+       } = (0, mq.v)(), [oq, Pq] = (0, lq.useState)(Yq.u), [Qq, yq] = (0, lq.useState)(!1), [tq, rq] = (0, lq.useState)(""), vq = (0, Bq.c)();
+       (0, lq.useEffect)((() => {
+         (0, Nq.o)()
+       }), []);
+       const hq = qq => ({
+ ... (11 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L257-L387` → after: `L97-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L97-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L97-L158) · [Before (L257-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L257-L387)

```diff
-         return zz
-       }(zz);
-       if ("string" !== typeof bz.path) {
-         var Ez = zz.webkitRelativePath;
-         Object.defineProperty(bz, "path", {
-           value: "string" === typeof uz ? uz : "string" === typeof Ez && Ez.length > 0 ? Ez : zz.name,
-           writable: !1,
-           configurable: !1,
-           enumerable: !0
-         })
-       }
-       return bz
-     }
-     var dz = [".DS_Store", "Thumbs.db"];
- 
-     function Fz(zz) {
- ... (115 more removed lines; see GitHub link above)
+       });
+       return (0, aq.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, aq.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, aq.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: Hq("homePage:myWorld")
+           })
+         }), (0, aq.jsx)(Aq.c, {
+           locked: Qq,
+           children: (0, aq.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, aq.jsx)(Wq.e, {
+               value: oq.defaultGamemode,
+               onChange: qq => {
+ ... (46 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L389-L394` → after: `L160-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L160-L167) · [Before (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L389-L394)

```diff
-             }))
-           }), (function(zz) {
-             bz(zz)
-           }))
-         }()
-       }))
+             },
+             children: Hq("general:play")
+           }), tq && (0, aq.jsx)("div", {
+             className: "CreateCustomLobbyError AnimFadeInScaleUp",
+             children: tq
+           })]
+         })]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L398-L407` → after: `L182-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L182-L197) · [Before (L398-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L398-L407)

```diff
-       return lz(this, void 0, void 0, (function() {
-         return Mz(this, (function(uz) {
-           return [2, new Promise((function(uz, bz) {
-             zz.file((function(bz) {
-               var Ez = pz(bz, zz.fullPath);
-               uz(Ez)
-             }), (function(zz) {
-               bz(zz)
-             }))
-           }))]
+       const {
+         disabled: Eq,
+         hideWrapper: gq
+       } = qq, {
+         t: Yq
+       } = (0, mq.v)(), cq = qq.advancedMode ? Aq.map((Eq => [Eq, qq.callbacks[Eq]])) : Oq.i.map((Eq => [Eq, qq.callbacks[Eq]])), Bq = (0, xq.jsx)("div", {
+         className: lq()("PluginsGrid", {
+           SectionBody: !gq
+         }),
+         children: cq.map((qq => {
+           let [gq, Yq] = qq;
+           return (0, xq.jsx)(uq, {
+             plugin: gq,
+             callbacks: Yq,
+             disabled: Eq
+           }, gq)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L409-L431` → after: `L199-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L199-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L199-L206) · [Before (L409-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L409-L431)

```diff
-       }))
-     }
-     var xz = bz(4735);
- 
-     function Jz(zz) {
-       return function(zz) {
-         if (Array.isArray(zz)) return az(zz)
-       }(zz) || function(zz) {
-         if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
-       }(zz) || Gz(zz) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function Az(zz, uz) {
-       var bz = Object.keys(zz);
- ... (7 more removed lines; see GitHub link above)
+       });
+       return gq ? Bq : (0, xq.jsxs)("div", {
+         className: "BloxdForm",
+         children: [(0, xq.jsx)("div", {
+           className: "SectionTitle",
+           children: Yq("worldBuilder:pluginsSection")
+         }), Bq]
+       })
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L435-L492` → after: `L210-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L210-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L210-L250) · [Before (L435-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L435-L492)

```diff
-       for (var uz = 1; uz < arguments.length; uz++) {
-         var bz = null != arguments[uz] ? arguments[uz] : {};
-         uz % 2 ? Az(Object(bz), !0).forEach((function(uz) {
-           Lz(zz, uz, bz[uz])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : Az(Object(bz)).forEach((function(uz) {
-           Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
-         }))
-       }
-       return zz
-     }
- 
-     function Lz(zz, uz, bz) {
-       return uz in zz ? Object.defineProperty(zz, uz, {
-         value: bz,
-         enumerable: !0,
-         configurable: !0,
- ... (42 more removed lines; see GitHub link above)
+       let {
+         plugin: Eq,
+         callbacks: {
+           isEnabled: gq,
+           hG: Yq
+         },
+         disabled: Oq
+       } = qq;
+       const {
+         t: Aq
+       } = (0, mq.v)(), cq = gq();
+       return (0, xq.jsxs)("div", {
+         className: lq()("PluginCard", {
+           PluginCardEnabled: cq,
+           PluginCardDisabledForm: Oq
+         }),
+ ... (25 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L494-L516` → after: `L252-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L252-L259) · [Before (L494-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L494-L516)

```diff
-     var Vz = "file-invalid-type",
-       mz = "file-too-large",
-       qz = "file-too-small",
-       hz = "too-many-files",
-       Uz = function(zz) {
-         zz = Array.isArray(zz) && 1 === zz.length ? zz[0] : zz;
-         var uz = Array.isArray(zz) ? "one of ".concat(zz.join(", ")) : zz;
-         return {
-           code: Vz,
-           message: "File type must be ".concat(uz)
-         }
-       },
-       cz = function(zz) {
-         return {
-           code: mz,
-           message: "File is larger than ".concat(zz, " ").concat(1 === zz ? "byte" : "bytes")
- ... (7 more removed lines; see GitHub link above)
+     const Bq = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L519-L563` → after: `L262-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L262-L268) · [Before (L519-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L519-L563)

```diff
-         code: hz,
-         message: "Too many files"
-       };
- 
-     function yz(zz, uz) {
-       var bz = "application/x-moz-file" === zz.type || (0, xz.c)(zz, uz);
-       return [bz, bz ? null : Uz(uz)]
-     }
- 
-     function Dz(zz, uz, bz) {
-       if (Qz(zz.size))
-         if (Qz(uz) && Qz(bz)) {
-           if (zz.size > bz) return [!1, cz(bz)];
-           if (zz.size < uz) return [!1, gz(uz)]
-         } else {
-           if (Qz(uz) && zz.size < uz) return [!1, gz(uz)];
- ... (29 more removed lines; see GitHub link above)
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L565-L577` → after: `L270-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L270-L282) · [Before (L565-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L565-L577)

```diff
-     }
- 
-     function Bz(zz) {
-       return "audio/*" === zz || "video/*" === zz || "image/*" === zz || "text/*" === zz || /\w+\/[-+.\w]+/g.test(zz)
-     }
- 
-     function Cz(zz) {
-       return /^.*\.[\w]+$/.test(zz)
-     }
-     var Yz = ["children"],
-       kz = ["open"],
-       zu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
-       uu = ["refKey", "onChange", "onClick"];
+   },
+   36424: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => cq,
+       i: () => uq
+     });
+     gq(57);
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(4456),
+       mq = gq(296),
+       xq = gq(1183),
+       Aq = gq(1070);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L580-L637` → after: `L285-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L285-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L285-L318) · [Before (L580-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L580-L637)

```diff
-       return function(zz) {
-         if (Array.isArray(zz)) return iu(zz)
-       }(zz) || function(zz) {
-         if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
-       }(zz) || nu(zz) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function Eu(zz, uz) {
-       return function(zz) {
-         if (Array.isArray(zz)) return zz
-       }(zz) || function(zz, uz) {
-         var bz = null == zz ? null : "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
-         if (null == bz) return;
-         var Ez, nz, iz = [],
- ... (42 more removed lines; see GitHub link above)
+       let {
+         value: Eq,
+         onChange: gq,
+         showAll: Yq,
+         disabled: cq = !1
+       } = qq;
+       const {
+         t: uq
+       } = (0, xq.v)();
+       return (0, Aq.jsxs)("div", {
+         className: lq()("BloxdForm GamemodeForm", {
+           BasicOptions: !Yq
+         }),
+         children: [(0, Aq.jsx)("div", {
+           className: "SectionTitle",
+           children: uq("classic:defaultGamemode")
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L641-L653` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L322-L323) · [Before (L641-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L641-L653)

```diff
-       for (var uz = 1; uz < arguments.length; uz++) {
-         var bz = null != arguments[uz] ? arguments[uz] : {};
-         uz % 2 ? lu(Object(bz), !0).forEach((function(uz) {
-           tu(zz, uz, bz[uz])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : lu(Object(bz)).forEach((function(uz) {
-           Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
-         }))
-       }
-       return zz
-     }
- 
-     function tu(zz, uz, bz) {
-       return uz in zz ? Object.defineProperty(zz, uz, {
+       let {
+         mapTypes: Eq,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L655-L1075` → after: `L325-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L325-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L325-L356) · [Before (L655-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L655-L1075)

```diff
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : zz[uz] = bz, zz
-     }
- 
-     function Hu(zz, uz) {
-       if (null == zz) return {};
-       var bz, Ez, nz = function(zz, uz) {
-         if (null == zz) return {};
-         var bz, Ez, nz = {},
-           iz = Object.keys(zz);
-         for (Ez = 0; Ez < iz.length; Ez++) bz = iz[Ez], uz.indexOf(bz) >= 0 || (nz[bz] = zz[bz]);
-         return nz
-       }(zz, uz);
-       if (Object.getOwnPropertySymbols) {
- ... (405 more removed lines; see GitHub link above)
+         onChange: Yq,
+         showAll: cq,
+         disabled: uq = !1,
+         children: Bq
+       } = qq;
+       const {
+         t: Wq
+       } = (0, xq.v)();
+       return (0, Aq.jsxs)("div", {
+         className: lq()("BloxdForm MapTypeForm", {
+           BasicOptions: !cq
+         }),
+         children: [(0, Aq.jsx)("div", {
+           className: "SectionTitle",
+           children: Wq("customLobby:mapType")
+         }), (0, Aq.jsx)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1078-L1116` → after: `L359-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/105.js#L359-L361) · [Before (L1078-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/105.js#L1078-L1116)

```diff
- 
-     function Zu(zz, uz) {
-       switch (uz.type) {
-         case "focus":
-           return Mu(Mu({}, zz), {}, {
-             yJ: !0
-           });
-         case "blur":
-           return Mu(Mu({}, zz), {}, {
-             yJ: !1
-           });
-         case "openDialog":
-           return Mu(Mu({}, du), {}, {
-             isFileDialogActive: !0
-           });
-         case "closeDialog":
- ... (23 more removed lines; see GitHub link above)
+   },
+   4781: () => {},
+   36406: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/106.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/106.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L4-L48` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L4-L14) · [Before (L4-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L4-L48)

```diff
-   4755: (zz, uz, bz) => {
-     function Ez(zz) {
-       return Ez = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
-         return typeof zz
-       } : function(zz) {
-         return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
-       }, Ez(zz)
-     }
-     Object.defineProperty(uz, "__esModule", {
-       value: !0
-     }), uz.default = void 0;
-     var nz = pz(bz(1038)),
-       iz = function(zz, uz) {
-         if (!uz && zz && zz.__esModule) return zz;
-         if (null === zz || "object" !== Ez(zz) && "function" !== typeof zz) return {
-           default: zz
- ... (29 more removed lines; see GitHub link above)
+   4815: (qq, Eq) => {
+     Eq.c = function(qq, Eq) {
+       if (qq && Eq) {
+         var gq = Array.isArray(Eq) ? Eq : Eq.split(","),
+           Yq = qq.name || "",
+           lq = (qq.type || "").toLowerCase(),
+           Oq = lq.replace(/\/.*$/, "");
+         return gq.some((function(qq) {
+           var Eq = qq.trim().toLowerCase();
+           return "." === Eq.charAt(0) ? Yq.toLowerCase().endsWith(Eq) : Eq.endsWith("/*") ? Oq === Eq.replace(/\/.*$/, "") : lq === Eq
+         }))
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L52-L79` → after: `L27-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L27-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L27-L33) · [Before (L52-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L52-L79)

```diff
-     function dz(zz, uz) {
-       var bz = "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
-       if (!bz) {
-         if (Array.isArray(zz) || (bz = function(zz, uz) {
-             if (!zz) return;
-             if ("string" === typeof zz) return Fz(zz, uz);
-             var bz = Object.prototype.toString.call(zz).slice(8, -1);
-             "Object" === bz && zz.constructor && (bz = zz.constructor.name);
-             if ("Map" === bz || "Set" === bz) return Array.from(zz);
-             if ("Arguments" === bz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(bz)) return Fz(zz, uz)
-           }(zz)) || uz && zz && "number" === typeof zz.length) {
-           bz && (zz = bz);
-           var Ez = 0,
-             nz = function() {};
-           return {
-             s: nz,
- ... (12 more removed lines; see GitHub link above)
+     function mq(qq, Eq, gq, Yq) {
+       return new(gq || (gq = Promise))((function(lq, Oq) {
+         function mq(qq) {
+           try {
+             Aq(Yq.next(qq))
+           } catch (Eq) {
+             Oq(Eq)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L82-L97` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L36-L37) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L82-L97)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var iz, lz = !0,
-         Mz = !1;
-       return {
-         s: function() {
-           bz = bz.call(zz)
-         },
-         n: function() {
-           var zz = bz.next();
-           return lz = zz.done, zz
-         },
-         e: function(zz) {
-           Mz = !0, iz = zz
-         },
-         f: function() {
+ 
+         function xq(qq) {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L99-L101` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L39-L41) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L99-L101)

```diff
-             lz || null == bz.return || bz.return()
-           } finally {
-             if (Mz) throw iz
+             Aq(Yq.throw(qq))
+           } catch (Eq) {
+             Oq(Eq)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L108-L109` → after: `L133-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L133-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L133-L150) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L108-L109)

```diff
-       (null == uz || uz > zz.length) && (uz = zz.length);
-       for (var bz = 0, Ez = new Array(uz); bz < uz; bz++) Ez[bz] = zz[bz];
+       var gq = "function" === typeof Symbol && qq[Symbol.iterator];
+       if (!gq) return qq;
+       var Yq, lq, Oq = gq.call(qq),
+         mq = [];
+       try {
+         for (;
+           (void 0 === Eq || Eq-- > 0) && !(Yq = Oq.next()).done;) mq.push(Yq.value)
+       } catch (xq) {
+         lq = {
+           error: xq
+         }
+       } finally {
+         try {
+           Yq && !Yq.done && (gq = Oq.return) && gq.call(Oq)
+         } finally {
+           if (lq) throw lq.error
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L114-L116` → after: `L245-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L245-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L245-L266) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L114-L116)

```diff
-       for (var bz = 0; bz < uz.length; bz++) {
-         var Ez = uz[bz];
-         Ez.enumerable = Ez.enumerable || !1, Ez.configurable = !0, "value" in Ez && (Ez.writable = !0), Object.defineProperty(zz, Ez.key, Ez)
+       var gq = function(qq) {
+         var Eq = qq.name;
+         if (Eq && -1 !== Eq.lastIndexOf(".") && !qq.type) {
+           var gq = Eq.split(".").pop().toLowerCase(),
+             Yq = uq.get(gq);
+           Yq && Object.defineProperty(qq, "type", {
+             value: Yq,
+             writable: !1,
+             configurable: !1,
+             enumerable: !0
+           })
+         }
+         return qq
+       }(qq);
+       if ("string" !== typeof gq.path) {
+         var Yq = qq.webkitRelativePath;
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L121-L123` → after: `L300-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L300-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L300-L316) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L121-L123)

```diff
-       return Rz = Object.setPrototypeOf || function(zz, uz) {
-         return zz.__proto__ = uz, zz
-       }, Rz(zz, uz)
+       return mq(this, void 0, void 0, (function() {
+         var gq;
+         return xq(this, (function(Yq) {
+           switch (Yq.label) {
+             case 0:
+               return qq.items ? (gq = Hq(qq.items).filter((function(qq) {
+                 return "file" === qq.kind
+               })), "drop" !== Eq ? [2, gq] : [4, Promise.all(gq.map(oq))]) : [3, 2];
+             case 1:
+               return [2, jq(Pq(Yq.sent()))];
+             case 2:
+               return [2, jq(Hq(qq.files).map((function(qq) {
+                 return Bq(qq)
+               })))]
+           }
+         }))
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L127-L147` → after: `L320-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L320-L329) · [Before (L127-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L127-L147)

```diff
-       var uz = function() {
-         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
-         if (Reflect.construct.sham) return !1;
-         if ("function" === typeof Proxy) return !0;
-         try {
-           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
-         } catch (zz) {
-           return !1
-         }
-       }();
-       return function() {
-         var bz, nz = Xz(zz);
-         if (uz) {
-           var iz = Xz(this).constructor;
-           bz = Reflect.construct(nz, arguments, iz)
-         } else bz = nz.apply(this, arguments);
- ... (5 more removed lines; see GitHub link above)
+       return qq.filter((function(qq) {
+         return -1 === Wq.indexOf(qq.name)
+       }))
+     }
+ 
+     function Hq(qq) {
+       if (null === qq) return [];
+       for (var Eq = [], gq = 0; gq < qq.length; gq++) {
+         var Yq = qq[gq];
+         Eq.push(Yq)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L152` → after: `L341-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L341-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L341-L430) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L152)

```diff
-       if (void 0 === zz) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return qq.reduce((function(qq, Eq) {
+         return cq(cq([], Aq(qq), !1), Aq(Array.isArray(Eq) ? Pq(Eq) : [Eq]), !1)
+       }), [])
+     }
+ 
+     function Qq(qq) {
+       var Eq = qq.getAsFile();
+       if (!Eq) return Promise.reject("".concat(qq, " is not a File"));
+       var gq = Bq(Eq);
+       return Promise.resolve(gq)
+     }
+ 
+     function yq(qq) {
+       return mq(this, void 0, void 0, (function() {
+         return xq(this, (function(Eq) {
+           return [2, qq.isDirectory ? tq(qq) : rq(qq)]
+ ... (74 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L157-L159` → after: `L435-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L435-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L435-L443) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L157-L159)

```diff
-       return Xz = Object.setPrototypeOf ? Object.getPrototypeOf : function(zz) {
-         return zz.__proto__ || Object.getPrototypeOf(zz)
-       }, Xz(zz)
+       for (var Eq = 1; Eq < arguments.length; Eq++) {
+         var gq = null != arguments[Eq] ? arguments[Eq] : {};
+         Eq % 2 ? nq(Object(gq), !0).forEach((function(Eq) {
+           iq(qq, Eq, gq[Eq])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : nq(Object(gq)).forEach((function(Eq) {
+           Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
+         }))
+       }
+       return qq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L202-L417` → after: `L455-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L455-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L455-L472) · [Before (L202-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L202-L417)

```diff
-         function lz(zz, uz) {
-           var bz;
-           return function(zz, uz) {
-             if (!(zz instanceof uz)) throw new TypeError("Cannot call a class as a function")
-           }(this, lz), fz(wz(bz = iz.call(this, zz, uz)), "handleFormat", (function(zz) {
-             var uz = bz.props.format;
-             return uz ? uz(zz) : zz
-           })), fz(wz(bz), "handleUpdate", (function() {
-             if (bz.slider) {
-               var zz = bz.props.orientation,
-                 uz = (0, tz.capitalize)(sz.orientation[zz].dimension),
-                 Ez = bz.slider["offset".concat(uz)],
-                 nz = bz.handle["offset".concat(uz)];
-               bz.setState({
-                 limit: Ez - nz,
-                 grab: nz / 2
- ... (200 more removed lines; see GitHub link above)
+     function Zq(qq, Eq) {
+       return function(qq) {
+         if (Array.isArray(qq)) return qq
+       }(qq) || function(qq, Eq) {
+         var gq = null == qq ? null : "undefined" !== typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
+         if (null == gq) return;
+         var Yq, lq, Oq = [],
+           mq = !0,
+           xq = !1;
+         try {
+           for (gq = gq.call(qq); !(mq = (Yq = gq.next()).done) && (Oq.push(Yq.value), !Eq || Oq.length !== Eq); mq = !0);
+         } catch (Aq) {
+           xq = !0, lq = Aq
+         } finally {
+           try {
+             mq || null == gq.return || gq.return()
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L484-L509` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L476-L478) · [Before (L484-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L484-L509)

```diff
-       }
-       zz.isRequired = zz;
-       var bz = {
-         array: zz,
-         bigint: zz,
-         bool: zz,
-         func: zz,
-         number: zz,
-         object: zz,
-         string: zz,
-         symbol: zz,
-         any: zz,
-         arrayOf: uz,
-         element: zz,
-         elementType: zz,
-         instanceOf: uz,
- ... (10 more removed lines; see GitHub link above)
+       }(qq, Eq) || fq(qq, Eq) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L585-L587` → after: `L481-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L481-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L481-L487) · [Before (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L585-L587)

```diff
-             function Mz() {
-               lz(iz)
-             }
+     function fq(qq, Eq) {
+       if (qq) {
+         if ("string" === typeof qq) return Mq(qq, Eq);
+         var gq = Object.prototype.toString.call(qq).slice(8, -1);
+         return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? Mq(qq, Eq) : void 0
+       }
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L589-L598` → after: `L489-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L489-L503) · [Before (L589-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L589-L598)

```diff
-             function tz() {
-               var zz = Date.now();
-               if (bz) {
-                 if (zz - nz < 2) return;
-                 Ez = !0
-               } else bz = !0, Ez = !1, setTimeout(Mz, uz);
-               nz = zz
-             }
-             return tz
-           }(this.refresh.bind(this), 20)
+     function Mq(qq, Eq) {
+       (null == Eq || Eq > qq.length) && (Eq = qq.length);
+       for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
+       return Yq
+     }
+     var Tq = "file-invalid-type",
+       zq = "file-too-large",
+       Sq = "file-too-small",
+       pq = "too-many-files",
+       Gq = function(qq) {
+         qq = Array.isArray(qq) && 1 === qq.length ? qq[0] : qq;
+         var Eq = Array.isArray(qq) ? "one of ".concat(qq.join(", ")) : qq;
+         return {
+           code: Tq,
+           message: "File type must be ".concat(Eq)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L600-L642` → after: `L505-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L505-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L505-L509) · [Before (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L600-L642)

```diff
-         return zz.prototype.addObserver = function(zz) {
-           ~this.observers_.indexOf(zz) || this.observers_.push(zz), this.connected_ || this.connect_()
-         }, zz.prototype.removeObserver = function(zz) {
-           var uz = this.observers_,
-             bz = uz.indexOf(zz);
-           ~bz && uz.splice(bz, 1), !uz.length && this.connected_ && this.disconnect_()
-         }, zz.prototype.refresh = function() {
-           this.updateObservers_() && this.refresh()
-         }, zz.prototype.updateObservers_ = function() {
-           var zz = this.observers_.filter((function(zz) {
-             return zz.gatherActive(), zz.hasActive()
-           }));
-           return zz.forEach((function(zz) {
-             return zz.broadcastActive()
-           })), zz.length > 0
-         }, zz.prototype.connect_ = function() {
- ... (27 more removed lines; see GitHub link above)
+       },
+       Lq = function(qq) {
+         return {
+           code: zq,
+           message: "File is larger than ".concat(qq, " ").concat(1 === qq ? "byte" : "bytes")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L647` → after: `L513-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L513-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L513-L516) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L647)

```diff
-         return zz && zz.ownerDocument && zz.ownerDocument.defaultView || iz
+         return {
+           code: Sq,
+           message: "File is smaller than ".concat(qq, " ").concat(1 === qq ? "byte" : "bytes")
+         }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L649` → after: `L518-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L518-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L518-L537) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L649)

```diff
-       dz = Xz(0, 0, 0, 0);
+       kq = {
+         code: pq,
+         message: "Too many files"
+       };
+ 
+     function Rq(qq, Eq) {
+       var gq = "application/x-moz-file" === qq.type || (0, vq.c)(qq, Eq);
+       return [gq, gq ? null : Gq(Eq)]
+     }
+ 
+     function Uq(qq, Eq, gq) {
+       if (Fq(qq.size))
+         if (Fq(Eq) && Fq(gq)) {
+           if (qq.size > gq) return [!1, Lq(gq)];
+           if (qq.size < Eq) return [!1, Jq(Eq)]
+         } else {
+ ... (4 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L652` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L540) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L652)

```diff
-       return parseFloat(zz) || 0
+       return void 0 !== qq && null !== qq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L656-L659` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L544) · [Before (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L656-L659)

```diff
-       for (var uz = [], bz = 1; bz < arguments.length; bz++) uz[bz - 1] = arguments[bz];
-       return uz.reduce((function(uz, bz) {
-         return uz + Fz(zz["border-" + bz + "-width"])
-       }), 0)
+       return "function" === typeof qq.isPropagationStopped ? qq.isPropagationStopped() : "undefined" !== typeof qq.cancelBubble && qq.cancelBubble
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L663-L671` → after: `L548-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L548-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L548-L606) · [Before (L663-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L663-L671)

```diff
-       var uz = zz.clientWidth,
-         bz = zz.clientHeight;
-       if (!uz && !bz) return dz;
-       var Ez = pz(zz).getComputedStyle(zz),
-         nz = function(zz) {
-           for (var uz = {}, bz = 0, Ez = ["top", "right", "bottom", "left"]; bz < Ez.length; bz++) {
-             var nz = Ez[bz],
-               iz = zz["padding-" + nz];
-             uz[nz] = Fz(iz)
+       return qq.dataTransfer ? Array.prototype.some.call(qq.dataTransfer.types, (function(qq) {
+         return "Files" === qq || "application/x-moz-file" === qq
+       })) : !!qq.target && !!qq.target.files
+     }
+ 
+     function wq(qq) {
+       qq.preventDefault()
+     }
+ 
+     function Kq() {
+       for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+       return function(qq) {
+         for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
+         return Eq.some((function(Eq) {
+           return !sq(qq) && Eq && Eq.apply(void 0, [qq].concat(Yq)), sq(qq)
+         }))
+ ... (43 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L673-L684` → after: `L608-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L608-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L608-L619) · [Before (L673-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L673-L684)

```diff
-           return uz
-         }(Ez),
-         iz = nz.left + nz.right,
-         lz = nz.top + nz.bottom,
-         Mz = Fz(Ez.width),
-         tz = Fz(Ez.height);
-       if ("border-box" === Ez.boxSizing && (Math.round(Mz + iz) !== uz && (Mz -= Zz(Ez, "left", "right") + iz), Math.round(tz + lz) !== bz && (tz -= Zz(Ez, "top", "bottom") + lz)), ! function(zz) {
-           return zz === pz(zz).document.documentElement
-         }(zz)) {
-         var Hz = Math.round(Mz + iz) - uz,
-           Oz = Math.round(tz + lz) - bz;
-         1 !== Math.abs(Hz) && (Mz -= Hz), 1 !== Math.abs(Oz) && (tz -= Oz)
+         }
+         return Oq
+       }(qq, Eq) || lE(qq, Eq) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function lE(qq, Eq) {
+       if (qq) {
+         if ("string" === typeof qq) return OE(qq, Eq);
+         var gq = Object.prototype.toString.call(qq).slice(8, -1);
+         return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? OE(qq, Eq) : void 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L688-L692` → after: `L622-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L622-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L622-L638) · [Before (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L688-L692)

```diff
-     var Kz = "undefined" !== typeof SVGGraphicsElement ? function(zz) {
-       return zz instanceof pz(zz).SVGGraphicsElement
-     } : function(zz) {
-       return zz instanceof pz(zz).SVGElement && "function" === typeof zz.getBBox
-     };
+ 
+     function OE(qq, Eq) {
+       (null == Eq || Eq > qq.length) && (Eq = qq.length);
+       for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
+       return Yq
+     }
+ 
+     function mE(qq, Eq) {
+       var gq = Object.keys(qq);
+       if (Object.getOwnPropertySymbols) {
+         var Yq = Object.getOwnPropertySymbols(qq);
+         Eq && (Yq = Yq.filter((function(Eq) {
+           return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
+         }))), gq.push.apply(gq, Yq)
+       }
+       return gq
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L695-L698` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L641-L649) · [Before (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L695-L698)

```diff
-       return nz ? Kz(zz) ? function(zz) {
-         var uz = zz.getBBox();
-         return Xz(0, 0, uz.width, uz.height)
-       }(zz) : Rz(zz) : dz
+       for (var Eq = 1; Eq < arguments.length; Eq++) {
+         var gq = null != arguments[Eq] ? arguments[Eq] : {};
+         Eq % 2 ? mE(Object(gq), !0).forEach((function(Eq) {
+           AE(qq, Eq, gq[Eq])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : mE(Object(gq)).forEach((function(Eq) {
+           Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
+         }))
+       }
+       return qq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L701-L706` → after: `L652-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L652-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L652-L672) · [Before (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L701-L706)

```diff
-     function Xz(zz, uz, bz, Ez) {
-       return {
-         x: zz,
-         y: uz,
-         width: bz,
-         height: Ez
+     function AE(qq, Eq, gq) {
+       return Eq in qq ? Object.defineProperty(qq, Eq, {
+         value: gq,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : qq[Eq] = gq, qq
+     }
+ 
+     function cE(qq, Eq) {
+       if (null == qq) return {};
+       var gq, Yq, lq = function(qq, Eq) {
+         if (null == qq) return {};
+         var gq, Yq, lq = {},
+           Oq = Object.keys(qq);
+         for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || (lq[gq] = qq[gq]);
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L709-L711` → after: `L676-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L676-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L676-L683) · [Before (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L709-L711)

```diff
-     var fz = function() {
-         function zz(zz) {
-           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Xz(0, 0, 0, 0), this.target = zz
+     var uE = (0, Yq.forwardRef)((function(qq, Eq) {
+       var gq = qq.children,
+         lq = NE(cE(qq, eq)),
+         Oq = lq.open,
+         mq = cE(lq, Dq);
+       return (0, Yq.useImperativeHandle)(Eq, (function() {
+         return {
+           open: Oq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L713-L743` → after: `L685-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L685-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L685-L701) · [Before (L713-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L713-L743)

```diff
-         return zz.prototype.isActive = function() {
-           var zz = wz(this.target);
-           return this.contentRect_ = zz, zz.width !== this.broadcastWidth || zz.height !== this.broadcastHeight
-         }, zz.prototype.broadcastRect = function() {
-           var zz = this.contentRect_;
-           return this.broadcastWidth = zz.width, this.broadcastHeight = zz.height, zz
-         }, zz
-       }(),
-       sz = function(zz, uz) {
-         var bz = function(zz) {
-           var uz = zz.x,
-             bz = zz.y,
-             Ez = zz.width,
-             nz = zz.height,
-             iz = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
-             lz = Object.create(iz.prototype);
- ... (15 more removed lines; see GitHub link above)
+       }), [Oq]), Yq.createElement(Yq.Fragment, null, gq(xE(xE({}, mq), {}, {
+         open: Oq
+       })))
+     }));
+     uE.displayName = "Dropzone";
+     var BE = {
+       disabled: !1,
+       getFilesFromEvent: function(qq) {
+         return mq(this, void 0, void 0, (function() {
+           return xq(this, (function(Eq) {
+             return Nq(qq) && Nq(qq.dataTransfer) ? [2, dq(qq.dataTransfer, qq.type)] : function(qq) {
+               return Nq(qq) && Nq(qq.target)
+             }(qq) ? [2, aq(qq)] : Array.isArray(qq) && qq.every((function(qq) {
+               return "getFile" in qq && "function" === typeof qq.getFile
+             })) ? [2, Vq(qq)] : [2, []]
+           }))
+ ... (1 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L745-L755` → after: `L703-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L703-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L703-L835) · [Before (L745-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L745-L755)

```diff
-       rz = function() {
-         function zz(zz, uz, bz) {
-           if (this.activeObservations_ = [], this.observations_ = new Ez, "function" !== typeof zz) throw new TypeError("The callback provided as parameter 1 is not a function.");
-           this.callback_ = zz, this.controller_ = uz, this.callbackCtx_ = bz
-         }
-         return zz.prototype.observe = function(zz) {
-           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-           if ("undefined" !== typeof Element && Element instanceof Object) {
-             if (!(zz instanceof pz(zz).Element)) throw new TypeError('parameter 1 is not of type "Element".');
-             var uz = this.observations_;
-             uz.has(zz) || (uz.set(zz, new fz(zz)), this.controller_.addObserver(this), this.controller_.refresh())
+       maxSize: 1 / 0,
+       minSize: 0,
+       multiple: !0,
+       maxFiles: 0,
+       preventDropOnDocument: !0,
+       noClick: !1,
+       noKeyboard: !1,
+       noDrag: !1,
+       noDragEventsBubbling: !1,
+       validator: null,
+       useFsAccessApi: !0,
+       autoFocus: !1
+     };
+     uE.defaultProps = BE, uE.propTypes = {
+       children: Oq().func,
+       accept: Oq().objectOf(Oq().arrayOf(Oq().string)),
+ ... (117 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L757-L762` → after: `L837-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L837-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L837-L845) · [Before (L757-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L757-L762)

```diff
-         }, zz.prototype.unobserve = function(zz) {
-           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-           if ("undefined" !== typeof Element && Element instanceof Object) {
-             if (!(zz instanceof pz(zz).Element)) throw new TypeError('parameter 1 is not of type "Element".');
-             var uz = this.observations_;
-             uz.has(zz) && (uz.delete(zz), uz.size || this.controller_.removeObserver(this))
+       }), [pq, Dq, zq, lE]);
+       var mE = (0, Yq.useRef)([]),
+         uE = function(qq) {
+           Sq.current && Sq.current.contains(qq.target) || (qq.preventDefault(), mE.current = [])
+         };
+       (0, Yq.useEffect)((function() {
+         return Pq && (document.addEventListener("dragover", wq, !1), document.addEventListener("drop", uE, !1)),
+           function() {
+             Pq && (document.removeEventListener("dragover", wq), document.removeEventListener("drop", uE))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L764-L769` → after: `L847-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L847-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L847-L889) · [Before (L764-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L764-L769)

```diff
-         }, zz.prototype.disconnect = function() {
-           this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
-         }, zz.prototype.gatherActive = function() {
-           var zz = this;
-           this.clearActive(), this.observations_.forEach((function(uz) {
-             uz.isActive() && zz.activeObservations_.push(uz)
+       }), [Sq, Pq]), (0, Yq.useEffect)((function() {
+         return !lq && oq && Sq.current && Sq.current.focus(),
+           function() {}
+       }), [Sq, oq, lq]);
+       var NE = (0, Yq.useCallback)((function(qq) {
+           vq ? vq(qq) : console.error(qq)
+         }), [vq]),
+         dE = (0, Yq.useCallback)((function(qq) {
+           qq.preventDefault(), qq.persist(), iE(qq), mE.current = [].concat(gE(mE.current), [qq.target]), Xq(qq) && Promise.resolve(Oq(qq)).then((function(Eq) {
+             if (!sq(qq) || rq) {
+               var gq = Eq.length,
+                 Yq = gq > 0 && function(qq) {
+                   var Eq = qq.files,
+                     gq = qq.accept,
+                     Yq = qq.minSize,
+                     lq = qq.maxSize,
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L771-L777` → after: `L891-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L891-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L891-L1042) · [Before (L771-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L771-L777)

```diff
-         }, zz.prototype.broadcastActive = function() {
-           if (this.hasActive()) {
-             var zz = this.callbackCtx_,
-               uz = this.activeObservations_.map((function(zz) {
-                 return new sz(zz.target, zz.broadcastRect())
-               }));
-             this.callback_.call(zz, uz, zz), this.clearActive()
+         }), [Oq, uq, NE, rq, fq, xq, mq, Aq, cq, nq]),
+         jE = (0, Yq.useCallback)((function(qq) {
+           qq.preventDefault(), qq.persist(), iE(qq);
+           var Eq = Xq(qq);
+           if (Eq && qq.dataTransfer) try {
+             qq.dataTransfer.dropEffect = "copy"
+           } catch (gq) {}
+           return Eq && Wq && Wq(qq), !1
+         }), [Wq, rq]),
+         HE = (0, Yq.useCallback)((function(qq) {
+           qq.preventDefault(), qq.persist(), iE(qq);
+           var Eq = mE.current.filter((function(qq) {
+               return Sq.current && Sq.current.contains(qq)
+             })),
+             gq = Eq.indexOf(qq.target); - 1 !== gq && Eq.splice(gq, 1), mE.current = Eq, Eq.length > 0 || (Jq({
+             type: "setDraggedFiles",
+ ... (136 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L779-L796` → after: `L1044-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L1044-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L1044-L1111) · [Before (L779-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L779-L796)

```diff
-         }, zz.prototype.clearActive = function() {
-           this.activeObservations_.splice(0)
-         }, zz.prototype.hasActive = function() {
-           return this.activeObservations_.length > 0
-         }, zz
-       }(),
-       oz = "undefined" !== typeof WeakMap ? new WeakMap : new Ez,
-       Nz = function zz(uz) {
-         if (!(this instanceof zz)) throw new TypeError("Cannot call a class as a function.");
-         if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-         var bz = Hz.getInstance(),
-           Ez = new rz(uz, bz, this);
-         oz.set(this, Ez)
-       };
-     ["observe", "unobserve", "disconnect"].forEach((function(zz) {
-       Nz.prototype[zz] = function() {
- ... (2 more removed lines; see GitHub link above)
+         }), [Sq, yE, tE, rE, vE, dE, jE, HE, PE, yq, tq, lq]),
+         fE = (0, Yq.useCallback)((function(qq) {
+           qq.stopPropagation()
+         }), []),
+         ME = (0, Yq.useMemo)((function() {
+           return function() {
+             var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+               Eq = qq.refKey,
+               gq = void 0 === Eq ? "ref" : Eq,
+               Yq = qq.onChange,
+               lq = qq.onClick,
+               Oq = cE(qq, EE);
+             return xE(xE({}, AE({
+               accept: fq,
+               multiple: Aq,
+               type: "file",
+ ... (52 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L798-L799` → after: `L1113-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L1113-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/106.js#L1113-L1115) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/106.js#L798-L799)

```diff
-     }));
-     const vz = "undefined" !== typeof iz.ResizeObserver ? iz.ResizeObserver : Nz
+     }
+ 
+     function VE() {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L2)

```diff
- export const ids = [107, 124];
+ export const ids = [107];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4-L5` → after: `L4-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L4-L469) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L4-L5)

```diff
-   4722: (zz, uz, bz) => {
-     var Ez = bz(4726);
+   4845: (qq, Eq, gq) => {
+     function Yq(qq) {
+       return Yq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
+         return typeof qq
+       } : function(qq) {
+         return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
+       }, Yq(qq)
+     }
+     Object.defineProperty(Eq, "__esModule", {
+       value: !0
+     }), Eq.default = void 0;
+     var lq = Bq(gq(1018)),
+       Oq = function(qq, Eq) {
+         if (!Eq && qq && qq.__esModule) return qq;
+         if (null === qq || "object" !== Yq(qq) && "function" !== typeof qq) return {
+           default: qq
+ ... (450 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L48-L49` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L512-L513) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L48-L49)

```diff
-   4714: (zz, uz, bz) => {
-     zz.exports = bz(4722)()
+   4800: (qq, Eq, gq) => {
+     qq.exports = gq(4807)()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L51` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L515) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L51)

```diff
-   4726: zz => {
+   4811: qq => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L54` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L518) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L54)

```diff
-   6301: (zz, uz, bz) => {
+   4853: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L56` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L520) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L56)

```diff
-       ShaderPackPublishForm: () => fz
+       default: () => rq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L58-L106` → after: `L522-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L522-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L522-L529) · [Before (L58-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L58-L106)

```diff
-     var Ez = bz(56),
-       nz = bz(6283),
-       iz = bz(199),
-       lz = bz(6307),
-       Mz = bz(1047),
-       tz = bz(1419),
-       Hz = bz(1628),
-       Oz = bz(1114),
-       pz = bz(6316),
-       dz = bz(6337),
-       Fz = bz(1473),
-       Zz = bz(1181),
-       Rz = bz(6340),
-       Kz = bz(6371),
-       wz = bz(6274),
-       Xz = bz(1089);
- ... (33 more removed lines; see GitHub link above)
+     var Yq = function() {
+         if ("undefined" !== typeof Map) return Map;
+ 
+         function qq(qq, Eq) {
+           var gq = -1;
+           return qq.some((function(qq, Yq) {
+             return qq[0] === Eq && (gq = Yq, !0)
+           })), gq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L108-L123` → after: `L531-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L531-L533) · [Before (L108-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L108-L123)

```diff
-       })), jz = !xz && !vz.isLoggedIn() && !iz.e.offlineMode, Iz = Pz.trim(), Bz = Iz.length < nz.z, Cz = null !== Jz && !1 !== (null === (pz = Jz.validation) || void 0 === pz ? void 0 : pz.ok) && !Dz && !Bz && !jz && !xz;
-       return (0, Xz.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, Xz.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: fz ? Nz("shaderPackListing:uploadIntro", {
-             minutes: String(nz.D / 6e4)
-           }) : Nz("shaderPackListing:publishIntro")
-         }), (0, Xz.jsx)(oz, {}), jz && (0, Xz.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: Nz("shaderPackListing:publishNeedsLogin")
-         }), (0, Xz.jsx)(dz.c, {
-           busy: Dz,
-           disabled: Dz || Sz,
-           onFiles: zz => {
-             Az(null), ez(zz)
+         return function() {
+           function Eq() {
+             this.__entries__ = []
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L125-L299` → after: `L535-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L535-L537) · [Before (L125-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L125-L299)

```diff
-         }), Jz && (0, Xz.jsxs)("div", {
-           className: "ShaderPackPublishSummary",
-           children: [(0, Xz.jsx)("div", {
-             className: "ShaderPackPublishPackName",
-             children: Jz.pack.manifest.name
-           }), (0, Xz.jsxs)("div", {
-             className: "ShaderPackPublishPackSize",
-             children: [Nz("shaderPackListing:sizeValue", {
-               kilobytes: String((0, wz.N)(Jz.sourceBytes))
-             }), " \xb7", " ", Nz("shaderPackListing:filesValue", {
-               files: String(Jz.pack.files.length)
-             })]
-           }), (0, Xz.jsx)(sz, {
-             picked: Jz
-           })]
-         }), !fz && (0, Xz.jsxs)(Xz.Fragment, {
- ... (159 more removed lines; see GitHub link above)
+           return Object.defineProperty(Eq.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L301-L369` → after: `L539-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L539-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L539-L598) · [Before (L301-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L301-L369)

```diff
-             children: zz("shaderPackListing:backToPacks")
-           })
-         }), (0, Hz.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: zz("shaderPackListing:publishTitle")
-         }), (0, Hz.jsx)(lz.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: zz => {
-             uz((0, tz.W)(zz.packId), {
-               replace: !0
-             })
-           }
-         })]
-       })
-     }
-   },
- ... (53 more removed lines; see GitHub link above)
+             enumerable: !0,
+             configurable: !0
+           }), Eq.prototype.get = function(Eq) {
+             var gq = qq(this.__entries__, Eq),
+               Yq = this.__entries__[gq];
+             return Yq && Yq[1]
+           }, Eq.prototype.set = function(Eq, gq) {
+             var Yq = qq(this.__entries__, Eq);
+             ~Yq ? this.__entries__[Yq][1] = gq : this.__entries__.push([Eq, gq])
+           }, Eq.prototype.delete = function(Eq) {
+             var gq = this.__entries__,
+               Yq = qq(gq, Eq);
+             ~Yq && gq.splice(Yq, 1)
+           }, Eq.prototype.has = function(Eq) {
+             return !!~qq(this.__entries__, Eq)
+           }, Eq.prototype.clear = function() {
+ ... (44 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L371-L381` → after: `L600-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L600-L642) · [Before (L371-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L371-L381)

```diff
-       }), [zz, uz]), {
-         isFavourite: zz => null === bz ? null : bz.has(zz),
-         toggle: function(uz) {
-           if (null === bz || lz.current.has(uz)) return;
-           lz.current.add(uz);
-           const Ez = !bz.has(uz);
-           Mz(uz, Ez), (Ez ? iz.c.favouriteShaderPack(zz, uz) : iz.c.unfavouriteShaderPack(zz, uz)).catch((zz => {
-             console.error("Failed to change a favourite shader pack", zz), Mz(uz, !Ez)
-           })).finally((() => {
-             lz.current.delete(uz)
-           }))
+         return qq.prototype.addObserver = function(qq) {
+           ~this.observers_.indexOf(qq) || this.observers_.push(qq), this.connected_ || this.connect_()
+         }, qq.prototype.removeObserver = function(qq) {
+           var Eq = this.observers_,
+             gq = Eq.indexOf(qq);
+           ~gq && Eq.splice(gq, 1), !Eq.length && this.connected_ && this.disconnect_()
+         }, qq.prototype.refresh = function() {
+           this.updateObservers_() && this.refresh()
+         }, qq.prototype.updateObservers_ = function() {
+           var qq = this.observers_.filter((function(qq) {
+             return qq.gatherActive(), qq.hasActive()
+           }));
+           return qq.forEach((function(qq) {
+             return qq.broadcastActive()
+           })), qq.length > 0
+         }, qq.prototype.connect_ = function() {
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L383-L451` → after: `L644-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L644-L649) · [Before (L383-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L383-L451)

```diff
-       }
-     }
-   },
-   6274: (zz, uz, bz) => {
-     bz.d(uz, {
-       D: () => wz,
-       F: () => Az,
-       G: () => Oz,
-       J: () => Lz,
-       M: () => Rz,
-       N: () => Uz,
-       O: () => qz,
-       P: () => lz,
-       T: () => hz,
-       W: () => tz,
-       _: () => Mz,
- ... (53 more removed lines; see GitHub link above)
+         return qq
+       },
+       Bq = function(qq) {
+         return qq && qq.ownerDocument && qq.ownerDocument.defaultView || Oq
+       },
+       Wq = Hq(0, 0, 0, 0);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L454` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L652) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L454)

```diff
-       return null === zz ? "with" : "with" === zz ? "without" : null
+       return parseFloat(qq) || 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L458` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L656-L659) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L458)

```diff
-       return "with" === zz ? "only" : null === zz ? "include" : void 0
+       for (var Eq = [], gq = 1; gq < arguments.length; gq++) Eq[gq - 1] = arguments[gq];
+       return Eq.reduce((function(Eq, gq) {
+         return Eq + Nq(qq["border-" + gq + "-width"])
+       }), 0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L478-L489` → after: `L663-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L663-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L663-L684) · [Before (L478-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L478-L489)

```diff
-       var uz, bz, nz;
-       const lz = zz.get(sz),
-         Mz = (null !== (uz = zz.get(oz)) && void 0 !== uz ? uz : Jz).split(","),
-         tz = zz.get(vz);
-       return {
-         section: "favourites" === lz || "mine" === lz ? lz : "explore",
-         sort: null !== (bz = Ez.u.find((uz => uz === zz.get(rz)))) && void 0 !== bz ? bz : xz,
-         withFeatures: Zz.filter((zz => Mz.includes(zz) && !Mz.includes(`-${zz}`))),
-         withoutFeatures: Zz.filter((zz => Mz.includes(`-${zz}`))),
-         searchQuery: (null === (nz = zz.get(Nz)) || void 0 === nz ? void 0 : nz.slice(0, Ez.G)) || null,
-         pageNumber: (0, iz.h)(zz.get(iz.e)),
-         banned: "only" === tz ? "with" : "include" === tz ? null : "without"
+       var Eq = qq.clientWidth,
+         gq = qq.clientHeight;
+       if (!Eq && !gq) return Wq;
+       var Yq = Bq(qq).getComputedStyle(qq),
+         lq = function(qq) {
+           for (var Eq = {}, gq = 0, Yq = ["top", "right", "bottom", "left"]; gq < Yq.length; gq++) {
+             var lq = Yq[gq],
+               Oq = qq["padding-" + lq];
+             Eq[lq] = Nq(Oq)
+           }
+           return Eq
+         }(Yq),
+         Oq = lq.left + lq.right,
+         mq = lq.top + lq.bottom,
+         xq = Nq(Yq.width),
+         Aq = Nq(Yq.height);
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L492-L537` → after: `L688-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L688-L692) · [Before (L492-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L492-L537)

```diff
- 
-     function Tz(zz, uz) {
-       var bz;
-       const Ez = az(uz);
-       (0, iz.k)(zz, sz, "explore" === uz.section ? null : uz.section), (0, iz.k)(zz, rz, uz.sort === xz ? null : uz.sort), (0, iz.k)(zz, oz, Ez === Jz ? null : Ez), (0, iz.k)(zz, Nz, uz.searchQuery), (0, iz.k)(zz, vz, null !== (bz = Xz(uz.banned)) && void 0 !== bz ? bz : null), ( … [truncated]
-     }
- 
-     function Lz(zz) {
-       const uz = new URLSearchParams;
-       return Tz(uz, {
-         section: "explore",
-         sort: xz,
-         withFeatures: "strict" === zz ? [zz] : [zz, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
- ... (30 more removed lines; see GitHub link above)
+     var dq = "undefined" !== typeof SVGGraphicsElement ? function(qq) {
+       return qq instanceof Bq(qq).SVGGraphicsElement
+     } : function(qq) {
+       return qq instanceof Bq(qq).SVGElement && "function" === typeof qq.getBBox
+     };
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L540` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L695-L698) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L540)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / zz))
+       return lq ? dq(qq) ? function(qq) {
+         var Eq = qq.getBBox();
+         return Hq(0, 0, Eq.width, Eq.height)
+       }(qq) : Vq(qq) : Wq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L544-L572` → after: `L702-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L702-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L702-L706) · [Before (L544-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L544-L572)

```diff
-       const iz = [];
-       zz.isBanned && iz.push({
-         tone: "warning",
-         text: nz("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: lz
-       } = zz;
-       if (null === zz.brokenError || lz && !lz.error || iz.push({
-           tone: "warning",
-           text: nz("shaderPackListing:ownerBroken"),
-           detail: zz.brokenError
-         }), null !== lz && void 0 !== lz && lz.error) iz.push({
-         tone: "warning",
-         text: nz(uz ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
- ... (13 more removed lines; see GitHub link above)
+       return {
+         x: qq,
+         y: Eq,
+         width: gq,
+         height: Yq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L616-L649` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L709-L711) · [Before (L616-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L616-L649)

```diff
-   },
-   6283: (zz, uz, bz) => {
-     bz.d(uz, {
-       B: () => Ez,
-       D: () => dz,
-       G: () => Oz,
-       K: () => fz,
-       M: () => pz,
-       O: () => Hz,
-       b: () => Fz,
-       e: () => Rz,
-       f: () => Zz,
-       g: () => Xz,
-       i: () => rz,
-       l: () => tz,
-       m: () => nz,
- ... (18 more removed lines; see GitHub link above)
+     var oq = function() {
+         function qq(qq) {
+           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Hq(0, 0, 0, 0), this.target = qq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L652-L687` → after: `L745-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L745-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/107.js#L745-L799) · [Before (L652-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/107.js#L652-L687)

```diff
-       iz = ["popular", "updated", "newest"],
-       lz = 3,
-       Mz = 32,
-       tz = 300;
- 
-     function Hz(zz, uz) {
-       return zz.slice(0, uz).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const Oz = 64,
-       pz = 512,
-       dz = 18e5;
-     const Fz = "Bloxdhub",
-       Zz = "https://bloxdhub.com/shaders";
- 
-     function Rz(zz) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
- ... (20 more removed lines; see GitHub link above)
+       Qq = function() {
+         function qq(qq, Eq, gq) {
+           if (this.activeObservations_ = [], this.observations_ = new Yq, "function" !== typeof qq) throw new TypeError("The callback provided as parameter 1 is not a function.");
+           this.callback_ = qq, this.controller_ = Eq, this.callbackCtx_ = gq
+         }
+         return qq.prototype.observe = function(qq) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(qq instanceof Bq(qq).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var Eq = this.observations_;
+             Eq.has(qq) || (Eq.set(qq, new oq(qq)), this.controller_.addObserver(this), this.controller_.refresh())
+           }
+         }, qq.prototype.unobserve = function(qq) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(qq instanceof Bq(qq).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+ ... (39 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/108.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/108.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L2)

```diff
- export const ids = [108];
+ export const ids = [108, 125];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L4-L20` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L4-L5) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L4-L20)

```diff
-   8567: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       default: () => Ou
-     });
-     var Ez = bz(1490),
-       nz = bz(20),
-       iz = bz(4407),
-       lz = bz(56),
-       Mz = bz(1417);
-     var tz = bz(1871),
-       Hz = bz(1482),
-       Oz = bz(1322),
-       pz = bz(1181),
-       dz = bz(158),
-       Fz = bz(1212),
-       Zz = bz(2258),
- ... (1 more removed lines; see GitHub link above)
+   4807: (qq, Eq, gq) => {
+     var Yq = gq(4811);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L22-L37` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L7) · [Before (L22-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L22-L37)

```diff
-     function Kz(zz, uz) {
-       const bz = !0 === uz.debugResult.gameRefused,
-         Ez = bz || uz.code === dz.k.REQUEST_TO_MATCHMAKING ? (0, Rz.g)(uz.message) : null;
-       return null !== Ez ? (wz(zz, zz((0, Rz.l)(Ez)), zz(Rz.i[Ez])), !0) : !!bz && (async function(zz) {
-         const {
-           gameNameWithVariation: uz,
-           lobbyName: bz,
-           shownLobbyName: Ez
-         } = tz.gameBridge.latest("connectedGame"), nz = "classic" === uz && (0, Fz.H)(bz) ? Ez : await (0, Zz.e)(zz, uz, bz);
-         return "" !== nz ? zz("general:cantJoinGame", {
-           game: nz
-         }) : zz("general:cantJoinThisGame")
-       }(zz).then((bz => {
-         wz(zz, bz, uz.message)
-       })), !0)
-     }
+     function lq() {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L39-L46` → after: `L9-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L9-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L9-L45) · [Before (L39-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L39-L46)

```diff
-     function wz(zz, uz, bz) {
-       Oz.NotificationProvider.showPromptPopup({
-         icon: "lock",
-         title: uz,
-         subtitle: bz,
-         confirmText: zz("general:ok"),
-         cancelText: ""
-       })
+     function Oq() {}
+     Oq.resetWarningCache = lq, qq.exports = function() {
+       function qq(qq, Eq, gq, lq, Oq, mq) {
+         if (mq !== Yq) {
+           var xq = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw xq.name = "Invariant Violation", xq
+         }
+       }
+ 
+       function Eq() {
+         return qq
+       }
+       qq.isRequired = qq;
+       var gq = {
+         array: qq,
+         bigint: qq,
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L48-L60` → after: `L47-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L47-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L47-L73) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L48-L60)

```diff
-     var Xz = bz(4335),
-       fz = bz(1118),
-       sz = bz(22),
-       rz = bz(1232),
-       oz = bz(1673),
-       Nz = bz(96),
-       vz = bz(1283),
-       xz = bz(1405),
-       Jz = bz(4288),
-       Az = bz(4132),
-       Tz = bz(3016),
-       Lz = bz(1089);
-     const Pz = "https://discord.gg/playbloxd";
+   },
+   4800: (qq, Eq, gq) => {
+     qq.exports = gq(4807)()
+   },
+   4811: qq => {
+     qq.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
+   },
+   6456: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       ShaderPackPublishForm: () => oq
+     });
+     var Yq = gq(57),
+       lq = gq(6424),
+       Oq = gq(195),
+       mq = gq(6458),
+       xq = gq(1025),
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L64` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L78-L79) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L64)

```diff
-         failure: uz
+         existing: oq,
+         onPublished: Qq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L68-L80` → after: `L83-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L83-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L83-L206) · [Before (L68-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L68-L80)

```diff
-       } = (0, pz.F)(), Ez = "chosen" === uz.packSource, nz = Nz.featureFlags.useDiscord ? Ez ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Ez ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
-       return (0, Lz.jsxs)(Lz.Fragment, {
-         children: [bz(nz, {
-           code: uz.code
-         }), "default" !== uz.packSource && uz.code === Tz.m.Error && (0, Lz.jsxs)("div", {
-           style: {
-             paddingTop: "1rem",
-             overflowWrap: "anywhere"
-           },
-           children: [bz("texturePackLoad:details"), " ", uz.reason]
-         }), Nz.featureFlags.useDiscord && (0, Lz.jsx)("div", {
-           style: {
-             paddingTop: "1rem"
+       } = (0, aq.v)(), {
+         userContext: rq,
+         isUserContextUpdating: vq
+       } = (0, uq.c)(), [hq, nq] = (0, Yq.useState)(null), [bq, iq] = (0, Yq.useState)(0), [Zq, fq] = (0, Yq.useState)(null !== (Eq = null === oq || void 0 === oq ? void 0 : oq.name) && void 0 !== Eq ? Eq : ""), Mq = (0, Yq.useRef)(Zq), Tq = (0, Yq.useRef)(""), zq = qq => {
+         Mq.current = qq, fq(qq)
+       }, [Sq, pq] = (0, Yq.useState)(null !== (gq = null === oq || void 0 === oq ? void 0 : oq.description) && void 0 !== gq ? gq : ""), Gq = (0, Yq.useRef)(Sq), Lq = (0, Yq.useRef)(""), Jq = qq => {
+         Gq.current = qq, pq(qq)
+       }, [kq, Rq] = (0, Yq.useState)(!1), {
+         loading: Uq,
+         error: Fq,
+         setError: sq,
+         onFiles: Xq
+       } = (0, Wq.c)((async qq => {
+         const Eq = await (0, Vq.loadPageShaderPackCompiler)();
+         if (!Eq) return void sq(tq("shaderPack:compilerUnavailable"));
+         const gq = await (0, dq.e)(Eq, qq.files);
+ ... (108 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L82-L87` → after: `L208-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L208-L210) · [Before (L82-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L82-L87)

```diff
-           children: (0, Lz.jsx)("a", {
-             href: Pz,
-             target: "_blank",
-             rel: "noreferrer",
-             children: bz("texturePackLoad:reportOnDiscord")
-           })
+           children: [(0, Hq.jsx)(xq.d, {
+             name: "upload"
+           }), " ", tq(oq ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L106-L107` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L217) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L106-L107)

```diff
-         onApply: uz,
-         onSkip: bz
+         picked: Eq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L111-L124` → after: `L221-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L221-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L221-L241) · [Before (L111-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L111-L124)

```diff
-       } = (0, pz.F)();
-       return (0, lz.useEffect)((() => {
-         Qz.g.skipPlayWait()
-       }), []), (0, Lz.jsx)(gz.g, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, Lz.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [Ez("customTexturePack:downloadPrompt"), (0, Lz.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
-             children: Ez("customTexturePack:authorWarning")
-           }), (0, Lz.jsx)("div", {
-             className: "CustomTexturePackDownloaderSecondaryText",
-             children: Ez("customTexturePack:existingPackSaved")
+       } = (0, aq.v)(), {
+         validation: Yq
+       } = Eq;
+       return null === Yq ? (0, Hq.jsx)("div", {
+         className: "ShaderPackPublishNote",
+         children: gq("shaderPackListing:publishUnchecked")
+       }) : Yq.ok ? (0, Hq.jsxs)(Hq.Fragment, {
+         children: [(0, Hq.jsxs)("div", {
+           className: "ShaderPackPublishNote Ready",
+           children: [(0, Hq.jsx)(xq.d, {
+             name: "circle-check"
+           }), " ", gq("shaderPackListing:publishReady")]
+         }), Yq.offInStrict.length > 0 && (0, Hq.jsxs)(Hq.Fragment, {
+           children: [(0, Hq.jsxs)("div", {
+             className: "ShaderPackPublishNote Warning",
+             children: [(0, Hq.jsx)(xq.d, {
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L126-L134` → after: `L243-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L243-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L243-L254) · [Before (L126-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L126-L134)

```diff
-         }),
-         confirm: {
-           text: "general:apply",
-           onClick: uz
-         },
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: bz
-         }
+         })]
+       }) : (0, Hq.jsxs)(Hq.Fragment, {
+         children: [(0, Hq.jsxs)("div", {
+           className: "ShaderPackPublishNote Error",
+           children: [(0, Hq.jsx)(xq.d, {
+             name: "triangle-exclamation"
+           }), " ", gq("shaderPackListing:publishHasErrors")]
+         }), (0, Hq.jsx)(Bq.b, {
+           diagnostics: Yq.errors,
+           more: Yq.moreErrors,
+           t: gq
+         })]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L137-L154` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L257) · [Before (L137-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L137-L154)

```diff
-     async function ez() {
-       let zz = !1;
-       const uz = Oz.NotificationProvider.showCustomPopup({
-         body: uz => (0, Lz.jsx)(Wz, {
-           onApply: () => {
-             zz = !0, uz()
-           },
-           onSkip: uz
-         }),
-         disableExitButton: !0,
-         disablePressBackgroundToClose: !0
-       });
-       return await uz.getResult(), zz
-     }
-     let jz = {
-       wanted: !1
- ... (2 more removed lines; see GitHub link above)
+     const Qq = "\0";
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L156-L157` → after: `L259-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L259-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L259-L274) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L156-L157)

```diff
-     function Bz(zz) {
-       zz.setGamePackConfirm(ez), Iz = zz
+     function yq() {
+       const {
+         t: qq
+       } = (0, aq.v)(), [Eq, gq] = qq("shaderPackListing:bloxdhubHelp", {
+         site: Qq
+       }).split(Qq);
+       return (0, Hq.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [Eq, (0, Hq.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: lq.i,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: lq.e
+         }), gq]
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L159-L167` → after: `L276-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L276-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L276-L287) · [Before (L159-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L159-L167)

```diff
-     var Cz = bz(3238);
- 
-     function Yz(zz) {
-       let {
-         schematicId: uz,
-         texturePackKey: bz,
-         onClose: Ez
-       } = zz;
-       const [nz, iz] = (0, lz.useState)("prompt"), [Mz, tz] = (0, lz.useState)(null), Hz = (0, Cz.e)();
+   },
+   6447: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => uq
+     });
+     var Yq = gq(1498),
+       lq = gq(1422),
+       Oq = gq(1183),
+       mq = gq(6456),
+       xq = gq(6431),
+       Aq = gq(6422),
+       cq = gq(1070);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L169-L207` → after: `L289-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L289-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L289-L301) · [Before (L169-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L169-L207)

```diff
-       function Oz() {
-         Ez()
-       }
-       return "prompt" === nz ? (0, Lz.jsx)(Wz, {
-         onApply: async function() {
-           iz("downloading");
-           try {
-             const zz = await async function(zz, uz) {
-               const bz = await (0, yz.c)(uz);
-               if (bz) return {
-                 pack: bz,
-                 key: uz
-               };
-               const Ez = await fz.userContextManager.getCurrentUserContext(),
-                 nz = (await hz.c.getGame(Ez, zz, !0)).customTexturePackKey;
-               if (!nz) return null;
- ... (23 more removed lines; see GitHub link above)
+     function uq() {
+       const {
+         t: qq
+       } = (0, Oq.v)(), Eq = (0, Yq.useNavigatePreserveSearch)();
+       return (0, xq.e)(), (0, cq.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, cq.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, cq.jsx)(lq.d, {
+             onClick: () => {
+               Eq(Aq.V)
+             },
+             children: qq("shaderPackListing:backToPacks")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L209-L217` → after: `L303-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L303-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L303-L311) · [Before (L209-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L209-L217)

```diff
-         })
-       }) : "error" === nz ? (0, Lz.jsx)(gz.g, {
-         icon: "face-worried",
-         title: "customTexturePack:errorTitle",
-         subtitle: Mz,
-         confirm: {
-           text: "customTexturePack:refreshPage",
-           onClick: () => {
-             window.location.reload()
+         }), (0, cq.jsx)("h1", {
+           className: "ShaderPackPublishTitle",
+           children: qq("shaderPackListing:publishTitle")
+         }), (0, cq.jsx)(mq.ShaderPackPublishForm, {
+           existing: null,
+           onPublished: qq => {
+             Eq((0, Aq.$)(qq.packId), {
+               replace: !0
+             })
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L219-L242` → after: `L313-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L313-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L313-L331) · [Before (L219-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L219-L242)

```diff
-         },
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: Oz
-         }
-       }) : "refused" === nz ? (0, Lz.jsx)(gz.g, {
-         icon: "face-worried",
-         title: "customTexturePack:cantApplyTitle",
-         subtitle: "customTexturePack:gamePackHasExternalUrls",
-         confirm: {
-           text: "general:continue",
-           onClick: Oz
-         }
-       }) : null
-     }
-     var kz = bz(8584),
- ... (8 more removed lines; see GitHub link above)
+         })]
+       })
+     }
+   },
+   6431: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Wq,
+       h: () => Nq,
+       l: () => Bq,
+       m: () => aq
+     });
+     var Yq = gq(57),
+       lq = gq(6424),
+       Oq = gq(1477),
+       mq = gq(6422),
+       xq = gq(6434),
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L245-L342` → after: `L334-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L334-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L334-L346) · [Before (L245-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L245-L342)

```diff
-       const zz = nz.e.get("clientEscMenuOptions");
-       tz.gameBridge.send("setLookSensitivity", nz.e.get("isTouchScreen") ? (0, Mu.n)(zz) : zz.mouseSensitivity)
-     }
-     async function Hu(zz, uz, bz) {
-       const Ez = (0, nu.I)(uz);
-       async function lz(zz, uz, bz, Ez) {
-         var lz;
-         if (Ez.aborted) return null;
-         null === nz.e.get("gameEntrySource") && (0, nz.k)("directPlayUrl"), lu.x && (0, Dz.d)().catch((() => {})), nz.e.set({
-           gameState: "findingLobby"
-         }), sz.k.sK("loadingScreenState", "loadingPage:findingLobby");
-         const Mz = await fz.userContextManager.getCurrentUserContext();
-         tz.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: uz,
-           discordContext: zz instanceof mz.h ? zz.getSerialisableParams() : null
-         }), (0, uu.e)();
- ... (82 more removed lines; see GitHub link above)
+       var qq;
+       const [Eq, gq] = (0, xq.b)(cq, lq.E[0]);
+       return [null !== (qq = lq.E.find((qq => qq === Eq))) && void 0 !== qq ? qq : lq.E[0], gq]
+     }
+ 
+     function Wq() {
+       (0, Yq.useEffect)((() => () => {
+         window.location.pathname.startsWith(mq.V) || (0, mq.g)()
+       }), [])
+     }
+ 
+     function Nq() {
+       return (0, xq.b)(uq, !1)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L347-L441` → after: `L351-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L351-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L351-L362) · [Before (L347-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L347-L441)

```diff
-         t: zz
-       } = (0, pz.F)(), uz = (0, Hz.useNavigatePreserveSearch)(), bz = (0, Ez.v)(), Rz = (0, Ez.D)(), wz = (0, lz.useRef)({
-         t: zz,
-         navigate: uz
-       });
-       wz.current = {
-         t: zz,
-         navigate: uz
-       };
-       const sz = (0, lz.useRef)("");
-       sz.current = bz.pathname + bz.search;
-       const {
-         gameState: rz,
-         clientEscMenuOptions: Pz
-       } = (0, nz.m)(["gameState", "clientEscMenuOptions"]), Vz = (0, lz.useRef)(null), mz = (0, lz.useRef)(null);
-       var Uz;
- ... (79 more removed lines; see GitHub link above)
+         userContext: qq,
+         isUserContextUpdating: Eq
+       } = (0, Aq.c)(), [gq, lq] = (0, Yq.useState)(null), mq = (0, Yq.useRef)(new Set);
+ 
+       function xq(qq, Eq) {
+         lq((gq => {
+           const Yq = new Set(gq);
+           return Eq ? Yq.add(qq) : Yq.delete(qq), Yq
+         }))
+       }
+       return (0, Yq.useEffect)((() => {
+         if (Eq) return;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L443-L542` → after: `L364-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L364-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L364-L367) · [Before (L443-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L443-L542)

```diff
-         const xz = bz.pathname + bz.search,
-           Pz = () => !rz && sz.current === xz;
-         return Mz.then((zz => {
-           let {
-             shouldMatchmake: bz,
-             discordContext: iz
-           } = zz;
-           Pz() && (bz ? Hu(null !== iz && void 0 !== iz ? iz : lz.lobbyName, iz ? "classic" : lz.gameNameWithVariation, lz.directJoinVmUrl).then((zz => {
-             var bz;
-             if (null !== zz && Pz())
-               if (zz.isError()) {
-                 var iz;
-                 const Mz = zz.asError(),
-                   Hz = null !== (iz = Mz.debugResult.severity) && void 0 !== iz ? iz : "high";
-                 if (Mz.code === dz.k.SHADER_PACK) return void(0, zu.c)(Mz.message, Ez);
-                 const pz = nz.e.get("gameEntrySource"),
- ... (84 more removed lines; see GitHub link above)
+         return Oq.e.getFavouriteShaderPacks(qq).then((qq => {
+           gq || lq(new Set(qq))
+         })).catch((qq => {
+           console.error("Failed to get favourite shader packs", qq), gq || lq(new Set)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L546-L568` → after: `L371-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L371-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L371-L381) · [Before (L546-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L546-L568)

```diff
-       }), [Rz, bz.search, bz.pathname]), (0, lz.useEffect)((() => {
-         Pz.disableFullscreen && (0, xz.e)() ? (0, xz.k)() : !Pz.disableFullscreen && (0, xz.g)() && (0, xz.u)()
-       }), [rz, Pz]), (0, lz.useEffect)((() => {
-         "inGame" === rz && tu()
-       }), [rz, Pz]), (0, lz.useEffect)((() => {
-         "inGame" !== rz && nz.e.set({
-           openInGameMenuName: null
-         })
-       }), [rz]);
-       const gz = function(zz) {
-         const uz = (0, nz.g)(zz),
-           [bz, Ez] = (0, lz.useState)(0),
-           [iz, tz] = (0, lz.useState)(!1);
-         (0, Mz.g)("gameJoined", (() => {
-           (0, nz.g)(nz.e.get("gameState")) && (Ez((zz => zz + 1)), tz(!0))
-         })), (0, lz.useEffect)((() => {
- ... (7 more removed lines; see GitHub link above)
+       }), [qq, Eq]), {
+         isFavourite: qq => null === gq ? null : gq.has(qq),
+         toggle: function(Eq) {
+           if (null === gq || mq.current.has(Eq)) return;
+           mq.current.add(Eq);
+           const Yq = !gq.has(Eq);
+           xq(Eq, Yq), (Yq ? Oq.e.favouriteShaderPack(qq, Eq) : Oq.e.unfavouriteShaderPack(qq, Eq)).catch((qq => {
+             console.error("Failed to change a favourite shader pack", qq), xq(Eq, !Yq)
+           })).finally((() => {
+             mq.current.delete(Eq)
+           }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L570-L575` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L383) · [Before (L570-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L570-L575)

```diff
-       }(rz);
-       return (0, Lz.jsx)(Lz.Fragment, {
-         children: gz.mounted && (0, Lz.jsx)(iz.InGameUi, {
-           shown: gz.shown
-         }, gz.key)
-       })
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L578` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L386) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L578)

```diff
-   4737: (zz, uz, bz) => {
+   6422: (qq, Eq, gq) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L580` → after: `L388-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L388-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L388-L412) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L580)

```diff
-       c: () => nz
+       $: () => Aq,
+       B: () => nq,
+       C: () => uq,
+       G: () => iq,
+       K: () => Vq,
+       O: () => Gq,
+       R: () => Sq,
+       V: () => mq,
+       X: () => pq,
+       ab: () => xq,
+       b: () => Hq,
+       c: () => vq,
+       db: () => Tq,
+       f: () => dq,
+       fb: () => zq,
+       g: () => Wq,
+ ... (9 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L582-L591` → after: `L414-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L414-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L414-L421) · [Before (L582-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L582-L591)

```diff
-     var Ez = bz(1195);
-     async function nz(zz) {
-       const uz = await fetch(`${Ez.clientSideServerUrls.s3Url}/${zz}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === uz.status || 403 === uz.status) return null;
-       if (!uz.ok) throw new Error(`Failed to download the texture pack (${uz.status})`);
-       return await uz.json()
+     var Yq = gq(6424),
+       lq = gq(163),
+       Oq = gq(4387);
+     const mq = "/shader-packs",
+       xq = `${mq}/publish`;
+ 
+     function Aq(qq) {
+       return `${mq}/${encodeURIComponent(qq)}`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L593-L600` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L423) · [Before (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L593-L600)

```diff
-   },
-   8584: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(1298),
-       nz = bz(1212),
-       iz = bz(588);
+     let cq = null;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L603-L624` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L426) · [Before (L603-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L603-L624)

```diff
-       return zz = function(zz, uz) {
-         var bz;
-         const Ez = new URLSearchParams(uz),
-           nz = Ez.get("lobby"),
-           iz = Ez.get("vm"),
-           lz = null !== (bz = nz) && void 0 !== bz ? bz : zz.lobbyName,
-           Mz = null !== iz && void 0 !== iz ? iz : zz.directJoinVmUrl;
-         if (lz === zz.lobbyName && Mz === zz.directJoinVmUrl) return zz;
-         return {
-           ...zz,
-           lobbyName: lz,
-           directJoinVmUrl: Mz
-         }
-       }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), zz = function(zz) {
-         if ((0, iz.F)(zz.directJoinVmUrl)) return zz;
-         const uz = (0, nz.cb)(zz.directJoinVmUrl);
- ... (6 more removed lines; see GitHub link above)
+       cq = qq
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L635` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L430) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L635)

```diff
-       Ez = !0
+       return cq
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L639` → after: `L434-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L434-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L434-L586) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L639)

```diff
-       return Ez
+       cq = null
+     }
+ 
+     function Nq(qq) {
+       return qq.playerHasRank("developer") || qq.playerHasRank("admin")
+     }
+     const aq = ["terrain", "water", "models", "sunShadows", "strict"],
+       Vq = {
+         terrain: "shaderPackListing:filterTerrain",
+         water: "shaderPackListing:filterWater",
+         models: "shaderPackListing:filterModels",
+         sunShadows: "shaderPackListing:filterShadows",
+         strict: "shaderPackListing:filterAllGames"
+       };
+ 
+     function dq(qq, Eq) {
+ ... (137 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L642` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L589) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L642)

```diff
-   8572: (zz, uz, bz) => {
+   6434: (qq, Eq, gq) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L644-L645` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L591) · [Before (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L644-L645)

```diff
-       d: () => Oz,
-       h: () => pz
+       b: () => Oq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L647-L653` → after: `L593-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L593-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L593-L594) · [Before (L647-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L647-L653)

```diff
-     var Ez = bz(2899),
-       nz = bz(2181),
-       iz = bz(2954),
-       lz = bz(4400),
-       Mz = bz(3248),
-       tz = bz(8581);
-     let Hz = null;
+     var Yq = gq(57),
+       lq = gq(38);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L655-L665` → after: `L596-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L596-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L596-L601) · [Before (L655-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L655-L665)

```diff
-     function Oz() {
-       return lz.b.cancelDownloadForJoin(), (0, Mz.d)(), (0, nz.h)(), (0, tz.g)(), (0, iz.f)(), Promise.all([bz.e(69), bz.e(72), bz.e(71), bz.e(70), bz.e(83), bz.e(259), bz.e(199), bz.e(216), bz.e(237), bz.e(212), bz.e(46)]).then((() => bz(39840))).catch((() => {})), Promise.all([ … [truncated]
-         let {
-           startJoinLoad: uz
-         } = zz;
-         uz()
-       }), (() => {})), Hz ??= Promise.all([bz.e(71), bz.e(74), bz.e(129), bz.e(73), bz.e(132), bz.e(262), bz.e(186), bz.e(87), bz.e(86), bz.e(85), bz.e(212), bz.e(60)]).then((() => bz(40042))).then((zz => (zz.startWasmPlay(), zz.followPageUiPack((zz => {
-         Ez.e.showGamePack(zz)
-       })), zz)), (zz => {
-         throw Hz = null, zz
-       })), Hz
+     function Oq(qq, Eq) {
+       var gq;
+       const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
+       return [Oq, Eq => {
+         lq.i.setItem(qq, Eq), mq(Eq)
+       }]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L667-L671` → after: `L603-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L603-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L603-L614) · [Before (L667-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L667-L671)

```diff
- 
-     function pz() {
-       return Promise.all([bz.e(71), bz.e(74), bz.e(129), bz.e(73), bz.e(132), bz.e(262), bz.e(186), bz.e(87), bz.e(86), bz.e(85), bz.e(212), bz.e(60)]).then((() => bz(40042))).then((zz => {
-         zz.startWasmPreviews(), zz.prefetchWasmPreviews()
-       }))
+   },
+   6535: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq,
+       d: () => Oq
+     });
+     var Yq = gq(38);
+     const lq = "shaderPack";
+     async function Oq() {
+       var qq;
+       let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L674` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L617) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L674)

```diff
-   8569: (zz, uz, bz) => {
+   6424: (qq, Eq, gq) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L676` → after: `L619-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L619-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L619-L625) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L676)

```diff
-       d: () => iz,
+       D: () => mq,
+       E: () => Yq,
+       G: () => Wq,
+       I: () => uq,
+       K: () => oq,
+       N: () => Bq,
+       R: () => cq,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L680` → after: `L629-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L629-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L629-L635) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L680)

```diff
-       l: () => tz
+       k: () => Hq,
+       m: () => Qq,
+       n: () => Aq,
+       p: () => lq,
+       r: () => Pq,
+       v: () => Oq,
+       z: () => xq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L682-L683` → after: `L637-L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L637-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/108.js#L637-L655) · [Before (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/108.js#L682-L683)

```diff
-     var Ez = bz(195),
-       nz = bz(4385);
+     const Yq = ["forest", "desert", "water", "night", "cave"];
+     const lq = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       Oq = ["popular", "updated", "newest"],
+ ... (3 more added lines; see GitHub link above)
```
