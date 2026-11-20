# Changed — Bundle Modifications Report (Part 009 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `9 / 58` (**318** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/191.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/191.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff)

#### 72. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L615` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/191.js#L781) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/191.js#L615)

```diff
-       return nz.d.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
+       return 1 + .002 * eq(qq)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L618-L619` → after: `L784-L10341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L784-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/191.js#L784-L10341) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/191.js#L618-L619)

```diff
-     function rz(zz, uz) {
-       return Math.abs(nz.d.computeShortestRotation(zz[0], uz[0])) + Math.abs(nz.d.computeShortestRotation(zz[1], uz[1])) + Math.abs(nz.d.computeShortestRotation(zz[2], uz[2]))
+     function OE(qq) {
+       return Math.round(10 * qq) / 10
+     }
+ 
+     function mE(qq, Eq) {
+       switch (qq) {
+         case "foraging":
+           return {
+             translationKey: "skyblockGame:foragingBenefit", percent: OE(100 * (qE(Eq) - 1))
+           };
+         case "combat":
+           return {
+             translationKey: "skyblockGame:combatBenefit", percent: OE(100 * (Dq(Eq) - 1))
+           };
+         case "mining":
+           return {
+ ... (9542 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L621` → after: `L10343-L10885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L10343-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/191.js#L10343-L10885) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/191.js#L621)

```diff
-     const oz = new tz
+     var qA = gq(1893),
+       EA = gq(38619);
+     const gA = {
+       "Grey Portal": "Gray"
+     };
+     for (const AA of lq.Tc) gA[`${AA} Portal`] = AA;
+     const YA = Object.keys(gA),
+       lA = Object.fromEntries(YA.map((qq => [qq, (0, lq.bb)(lq.M[`${(0,lq.ue)(gA[qq])}Team`])])));
+     Object.fromEntries(YA.map((qq => [qq, lq.M[`${(0,lq.ue)(gA[qq])}UiText`]])));
+     class OA {
+       constructor(qq, Eq) {
+         this.presentation = qq, this.portal = Eq, this.unlocked = void 0
+       }
+       ga(qq) {
+         const Eq = !1 === this.unlocked && qq;
+         this.unlocked = qq, this.SB();
+ ... (527 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L623` → after: `L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR10887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/191.js#L10887) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/191.js#L623)

```diff
-   36577: (zz, uz, bz) => {
+   9304: (qq, Eq, gq) => {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L626-L628` → after: `L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/191.js#L10890) · [Before (L626-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/191.js#L626-L628)

```diff
-       g: () => iz,
-       j: () => Ez,
-       m: () => nz
+       d: () => mq
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L630-L641` → after: `L10892-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR10892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L10892-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/191.js#L10892-L11196) · [Before (L630-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/191.js#L630-L641)

```diff
-     let Ez = function(zz) {
-         return zz[zz.Linear = 0] = "Linear", zz[zz.CatmullRomSpline = 1] = "CatmullRomSpline", zz
-       }({}),
-       nz = function(zz) {
-         return zz[zz.NoLoop = 0] = "NoLoop", zz[zz.LoopOnLastFrame = 1] = "LoopOnLastFrame", zz[zz.HoldOnLastFrame = 2] = "HoldOnLastFrame", zz
-       }({}),
-       iz = function(zz) {
-         return zz[zz.Movement = 0] = "Movement", zz[zz.Action = 1] = "Action", zz[zz.Emote = 2] = "Emote", zz[zz.Custom = 3] = "Custom", zz
-       }({}),
-       lz = function(zz) {
-         return zz[zz.Start = 0] = "Start", zz[zz.Stop = 1] = "Stop", zz
-       }({})
+     const Yq = [{
+       threshold: 10n ** 180n,
+       suffix: "NoQig"
+     }, {
+       threshold: 10n ** 177n,
+       suffix: "OcQig"
+     }, {
+       threshold: 10n ** 174n,
+       suffix: "SpQig"
+     }, {
+       threshold: 10n ** 171n,
+       suffix: "SQig"
+     }, {
+       threshold: 10n ** 168n,
+       suffix: "QiQig"
+     }, {
+ ... (289 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/192.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/192.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07)

#### 1. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L38` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L4) · [Before (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L4-L38)

```diff
-   40739: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       MobPreview: () => pz
-     });
-     var Ez = bz(56),
-       nz = bz(1038),
-       iz = bz.n(nz),
-       lz = bz(40742),
-       Mz = bz(9020),
-       tz = bz(40744),
-       Hz = bz(1089);
- 
-     function Oz(zz) {
-       return Mz.j.openMob(zz)
-     }
-     const pz = (0, Ez.memo)((function(zz) {
- ... (19 more removed lines; see GitHub link above)
+   41279: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L42-L43` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L8-L9) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L42-L43)

```diff
-     var Ez = bz(56),
-       nz = bz(2602);
+     var Yq = gq(57),
+       lq = gq(2660);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L63` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L29) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L63)

```diff
-   40744: (zz, uz, bz) => {
+   41285: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L67-L70` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L33-L36) · [Before (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L67-L70)

```diff
-       h: () => tz
-     });
-     var Ez = bz(36588),
-       nz = bz(38017);
+       j: () => Aq
+     });
+     var Yq = gq(37195),
+       lq = gq(38611);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L77-L78` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L43-L44) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L77-L78)

```diff
-           Qi: "catmull-rom-spline",
-           point: [bz, Ez, nz + (.5 === zz ? uz : 0)]
+           oq: "catmull-rom-spline",
+           point: [gq, Yq, lq + (.5 === qq ? Eq : 0)]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L85` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L51) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L85)

```diff
-         Ui: 3200,
+         aq: 3200,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L87` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L53) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L87)

```diff
-         Si: {
+         dq: {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L92` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L58) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L92)

```diff
-                 Qi: "catmull-rom-spline",
+                 oq: "catmull-rom-spline",
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L101` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L67) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L101)

```diff
-                 Qi: "catmull-rom-spline",
+                 oq: "catmull-rom-spline",
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L116` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L82) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L116)

```diff
-       tz = (0, nz.c)((0, Ez.f)(Mz), "mobIdle"),
+       Aq = (0, lq.b)((0, Yq.g)(xq), "mobIdle"),
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L119-L120` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L85-L86) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L119-L120)

```diff
-       pz = (0, nz.c)((0, Ez.f)(Hz), "gunReady"),
-       dz = (0, nz.c)((0, Ez.f)(Oz), "gunAimed")
+       Bq = (0, lq.b)((0, Yq.g)(cq), "gunReady"),
+       Wq = (0, lq.b)((0, Yq.g)(uq), "gunAimed")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L122` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L88) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L122)

```diff
-   9028: (zz, uz, bz) => {
+   38611: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L125-L128` → after: `L91-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L91-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L91-L110) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L125-L128)

```diff
-       e: () => nz,
-       g: () => Oz
-     });
-     var Ez = bz(1531);
+       f: () => Oq
+     });
+     const Yq = new WeakMap;
+ 
+     function lq(qq, Eq) {
+       return Yq.set(qq, Eq), qq
+     }
+ 
+     function Oq(qq) {
+       var Eq;
+       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
+     }
+   },
+   9321: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq,
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L134` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L116) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L134)

```diff
-         yaw: lz.store.yaw + (null !== (uz = Ez.c[zz].previewYaw) && void 0 !== uz ? uz : 0)
+         yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L255` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L237) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L255)

```diff
-   9020: (zz, uz, bz) => {
+   9313: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L257-L261` → after: `L239-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L239-L243) · [Before (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L257-L261)

```diff
-       c: () => Ez.b,
-       g: () => Ez.e,
-       j: () => Ez.g
-     });
-     var Ez = bz(9028);
+       c: () => Yq.c,
+       f: () => Yq.d,
+       i: () => Yq.f
+     });
+     var Yq = gq(9321);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L274` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L256) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L274)

```diff
-         this.mobScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz. … [truncated]
+         this.mobScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L289` → after: `L271-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L271-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/192.js#L271-L641) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/192.js#L289)

```diff
-     Ez.g.setDefaultHost((() => new iz))
+     Yq.f.setDefaultHost((() => new Oq))
+   },
+   41509: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       FrontlineMvpLineup: () => Bq
+     });
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(9313),
+       xq = gq(41285),
+       Aq = gq(41279),
+       cq = gq(1070);
+ 
+     function uq(qq) {
+       return mq.i.openMobLineup(qq)
+ ... (355 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/193.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/193.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081)

#### 1. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L23` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L4-L14) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L4-L23)

```diff
-   9047: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => nz,
-       e: () => iz
-     });
-     var Ez = bz(3027);
- 
-     function nz() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const zz = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const uz = new BroadcastChannel(Ez.l);
-         uz.postMessage({
-           stored: zz
-         }), uz.close()
-       } catch {
- ... (4 more removed lines; see GitHub link above)
+   41277: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       MobPreview: () => Bq
+     });
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(41279),
+       xq = gq(9313),
+       Aq = gq(41285),
+       cq = gq(1070);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L26-L32` → after: `L17-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L17-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L17-L65) · [Before (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L26-L32)

```diff
-       const uz = "object" === typeof zz && null !== zz ? zz.stored : null;
-       return "string" === typeof uz ? uz : null
-     }
-   },
-   9043: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz,
+       return xq.i.openMob(qq)
+     }
+     const Bq = (0, Yq.memo)((function(qq) {
+       let {
+         mobType: Eq,
+         variation: gq = null,
+         animation: lq = Aq.j,
+         className: xq
+       } = qq;
+       const Bq = (0, Yq.useRef)(null),
+         Wq = (0, Yq.useMemo)((() => ({
+           mobType: Eq,
+           variation: gq,
+           animation: lq
+         })), [Eq, gq, lq]);
+       return (0, mq.d)(Bq, uq, Wq), (0, cq.jsx)("div", {
+ ... (33 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L36-L48` → after: `L69-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L69-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L69-L128) · [Before (L36-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L36-L48)

```diff
-     var Ez = bz(3027);
-     async function nz(zz, uz, bz) {
-       let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const iz = lz(await zz.getItem(Ez.g, uz));
-       if (null === iz || nz()) return null;
-       const Mz = await zz.getItem(Ez.k, uz);
-       return nz() ? null : (await async function(zz) {
-         await Promise.all([zz.removeItem(Ez.g), zz.removeItem(Ez.k)])
-       }(zz).catch(bz), {
-         pack: iz,
-         source: "string" === typeof Mz ? Mz : null
-       })
-     }
+     var Yq = gq(37195),
+       lq = gq(38611);
+ 
+     function Oq(qq, Eq) {
+       let [gq, Yq, lq] = qq;
+       return [0, .5, 1].map((qq => ({
+         timeFraction: qq,
+         rotation: {
+           oq: "catmull-rom-spline",
+           point: [gq, Yq, lq + (.5 === qq ? Eq : 0)]
+         }
+       })))
+     }
+ 
+     function mq(qq, Eq, gq) {
+       return {
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L51-L118` → after: `L131-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L131-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L131-L150) · [Before (L51-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L51-L118)

```diff
-       return (0, Ez.u)() ? Promise.resolve(null) : nz(zz, !1, (zz => {
-         console.error("Error removing temporary texture pack: ", zz)
-       }), Ez.u)
-     }
- 
-     function lz(zz) {
-       if ("object" !== typeof zz || null === zz) return null;
-       const uz = zz.metaData;
-       return "object" !== typeof uz || null === uz || "string" !== typeof uz.id ? null : zz
-     }
-   },
-   42612: (zz, uz, bz) => {
-     function Ez(zz) {
-       return null === zz.gameSource ? "player" : "customGame"
-     }
-     bz.d(uz, {
- ... (52 more removed lines; see GitHub link above)
+       var Eq;
+       return {
+         ...mq.store,
+         yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
+       }
+     }
+     const Oq = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       mq = {
+         player: Oq,
+         store: {
+           ...Oq,
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L121-L182` → after: `L153-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L153-L156) · [Before (L121-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L121-L182)

```diff
-       if (null === zz || "player" === uz || !Zz(zz)) return zz;
-       const bz = {
-         ...zz
-       };
-       return zz.textureOverrides && (bz.textureOverrides = wz(zz.textureOverrides, iz, "texture")), zz.modelOverrides && (bz.modelOverrides = wz(zz.modelOverrides, iz, "model")), zz.skyBoxes && (bz.skyBoxes = wz(zz.skyBoxes, lz, "sky")), zz.customCss && (bz.customCss = function(z … [truncated]
-         const uz = zz => wz(zz, (zz => "string" === typeof zz && !Fz(zz)), "CSS"),
-           {
-             fontFaces: bz,
-             classStyles: Ez
-           } = Kz(zz) ? zz : {},
-           nz = {};
-         for (const [iz, lz] of Object.entries(Kz(Ez) ? Ez : {})) nz[iz] = uz(lz);
-         return {
-           fontFaces: (Array.isArray(bz) ? bz : []).map(uz),
-           classStyles: nz
-         }
- ... (46 more removed lines; see GitHub link above)
+       qq instanceof Promise ? qq.then(Eq).catch((qq => {
+         console.error("Couldn't open the preview", qq)
+       })) : Eq(qq)
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L185-L190` → after: `L159-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L159-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L159-L232) · [Before (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L185-L190)

```diff
-         this.host = zz, this.ready = void 0, this.state = Fz, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
-       }
-       readyWithin(zz) {
-         return Promise.race([this.ready, new Promise((uz => {
-           setTimeout(uz, zz)
-         }))])
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
+           this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
+         }))
+       }
+       show(qq) {
+         var Eq;
+         this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
+       }
+       resize(qq, Eq) {
+         var gq;
+         this.size = {
+           width: qq,
+           height: Eq
+         }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
+       }
+       close() {
+ ... (58 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L193-L438` → after: `L235-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L235-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/193.js#L235-L289) · [Before (L193-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/193.js#L193-L438)

```diff
-         return this.state
-       }
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
-         }
-       }
-       onPlayerPackChange(zz) {
-         return this.ownListeners.add(zz), () => {
-           this.ownListeners.delete(zz)
-         }
-       }
-       isUsingCustomGameTexturePack(zz) {
-         return (0, pz.g)(this.state, zz)
-       }
- ... (230 more removed lines; see GitHub link above)
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
+       }
+       openMob(qq) {
+         return new Aq(this.current().openMob(qq))
+       }
+       openPet(qq) {
+         return new Aq(this.current().openPet(qq))
+       }
+       openMobLineup(qq) {
+         return new Aq(this.current().openMobLineup(qq))
+       }
+       openCharacter(qq, Eq) {
+ ... (39 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/194.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/194.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L4-L9)

```diff
-   9052: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       packDisplayName: () => Zz,
-       packModelMessage: () => Rz,
-       packModelSummary: () => wz,
-       refusedPackModels: () => Kz
+   9343: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq,
+       e: () => Oq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L11-L39` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L9-L13) · [Before (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L11-L39)

```diff
-     var Ez = bz(9058),
-       nz = bz(9063);
-     const iz = "DRACO",
-       lz = 0,
-       Mz = 1,
-       tz = 0,
-       Hz = 1,
-       Oz = 32768;
- 
-     function pz(zz) {
-       const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
-       let bz = 0;
-       const Ez = () => {
-           if (bz >= zz.byteLength) throw new RangeError("past the stream");
-           return zz[bz++]
-         },
- ... (13 more removed lines; see GitHub link above)
+     var Yq = gq(3150);
+ 
+     function lq() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const qq = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L41-L88` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L15-L18) · [Before (L41-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L41-L88)

```diff
-         for (let zz = 0; zz < iz.length; zz++)
-           if (Ez() !== iz.charCodeAt(zz)) return null;
-         const uz = Ez(),
-           dz = Ez(),
-           Fz = Ez(),
-           Zz = Ez(),
-           Rz = Ez() | Ez() << 8;
-         if (2 !== uz) return null;
-         0 !== (Rz & Oz) && function(zz, uz, bz) {
-           const Ez = () => {
-               uz(bz())
-             },
-             nz = () => {
-               let bz = 1,
-                 nz = !0;
-               for (; bz > 0;) {
- ... (32 more removed lines; see GitHub link above)
+         const Eq = new BroadcastChannel(Yq.n);
+         Eq.postMessage({
+           stored: qq
+         }), Eq.close()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L95-L97` → after: `L145-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L145-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L145-L323) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L95-L97)

```diff
-       var Ez, nz;
-       if (null === (Ez = null === (nz = zz.extensionsUsed) || void 0 === nz ? void 0 : nz.includes("KHR_draco_mesh_compression")) || void 0 === Ez || !Ez) return null;
-       for (const Zz of null !== (iz = zz.meshes) && void 0 !== iz ? iz : []) {
+       const Yq = Object.entries(dq(qq) ? qq : {}),
+         lq = Yq.filter((qq => {
+           let [, gq] = qq;
+           return !Eq(gq)
+         }));
+       if (lq.length > 0) {
+         const qq = lq.map((qq => {
+           let [Eq] = qq;
+           return Eq
+         }));
+         console.warn(`Ignoring a custom game texture pack's ${gq} files that name another site: ${qq.join(", ")}`)
+       }
+       return Object.fromEntries(Yq.filter((qq => {
+         let [, gq] = qq;
+         return Eq(gq)
+       })))
+ ... (163 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L99-L132` → after: `L325-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L325-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L325-L344) · [Before (L99-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L99-L132)

```diff
-         for (const Ez of Zz.primitives) {
-           var lz, Mz, tz, Hz, Oz, dz;
-           const nz = null === (lz = Ez.extensions) || void 0 === lz ? void 0 : lz.KHR_draco_mesh_compression;
-           if ("object" !== typeof nz || null === nz) continue;
-           const iz = null === (Mz = zz.bufferViews) || void 0 === Mz ? void 0 : Mz[nz.bufferView];
-           if (null === uz || void 0 === iz) return Fz;
-           const Zz = null !== (tz = iz.byteOffset) && void 0 !== tz ? tz : 0,
-             Rz = pz(uz.subarray(Zz, Zz + iz.byteLength));
-           if (null === Rz && !bz) continue;
-           const Kz = null !== (Hz = zz.accessors) && void 0 !== Hz ? Hz : [],
-             wz = null === (Oz = Kz[Ez.attributes.POSITION]) || void 0 === Oz ? void 0 : Oz.count,
-             Xz = void 0 === Ez.indices ? 0 : null === (dz = Kz[Ez.indices]) || void 0 === dz ? void 0 : dz.count;
-           if (null === Rz || void 0 === wz || void 0 === Xz || 3 * Rz.faces !== Xz || Rz.vertices > wz) return Fz
-         }
-       }
-       return null
- ... (18 more removed lines; see GitHub link above)
+         null === qq || this.eN || this.changes > 0 || this.picks > 0 || ((0, cq.j)(qq.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
+           pack: qq.pack,
+           gameSource: null !== (Eq = qq.source) && void 0 !== Eq ? Eq : ""
+         }))
+       }
+       takeStoredOwn(qq) {
+         if (this.playerPicked || this.eN) return;
+         if (this.ownChanges++, this.setOwn(jq(qq)), this.onGamePack) return;
+         const Eq = {
+           pack: this.playerPack,
+           gameSource: null
+         };
+         0 === this.changes ? this.state = Eq : this.change(Eq, !1)
+       }
+       async update() {
+         const qq = this.playerPack,
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L134-L141` → after: `L346-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L346-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L346-L393) · [Before (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L134-L141)

```diff
-         if (tz.startsWith("data:")) try {
-           const zz = new Uint8Array((0, nz.q)(tz));
-           if (uz = (0, Ez.b)(zz), null === uz) {
-             const {
-               json: bz,
-               bin: Ez
-             } = (0, nz.z)(zz);
-             uz = dz(bz, Ez, iz)
+         try {
+           Yq = jq(await this.host.fetchLatest(Eq))
+         } catch (Oq) {
+           return void this.host.warn(`texture pack ${Eq} didn't update to version ${gq}`, Oq)
+         }
+         null === Yq || this.eN || this.playerPack !== qq || (this.ownChanges++, this.setOwn(Yq), this.onGamePack || this.change({
+           pack: Yq,
+           gameSource: null
+         }, !1), await this.storePlayerPack(Yq) && this.announce())
+       }
+       announce() {
+         const qq = (0, xq.b)();
+         null !== qq && this.ownAnnouncements.add(qq)
+       }
+       setOwn(qq) {
+         this.playerPack = qq;
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L143-L156` → after: `L395-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L395-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/194.js#L395-L437) · [Before (L143-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/194.js#L143-L156)

```diff
-         } catch {
-           uz = "is not a binary glTF 2.0 file"
-         } else uz = "loads data from outside the file";
-         uz && (lz[Mz] = uz, bz && console.warn(Rz(zz, Mz, uz)))
-       }
-       return lz
-     }
- 
-     function wz(zz, uz) {
-       const bz = Object.keys(uz);
-       if (0 === bz.length) return null;
-       if (1 === bz.length) return Rz(zz, bz[0], uz[bz[0]]);
-       const Ez = bz.map((zz => `"${zz}" ${uz[zz]}`)).join("; ");
-       return `Texture pack "${zz}": ${bz.length} models were not loaded (${Ez}). The default models are used instead.`
+         }
+       }
+     }
+     async function Vq(qq, Eq, gq) {
+       const Yq = (0, Aq.c)(await gq.fetchPack(Eq));
+       if (null !== Yq) return {
+         pack: Yq,
+         key: Eq
+       };
+       const lq = await gq.packKey(qq);
+       if (null === lq) return null;
+       const Oq = (0, Aq.c)(await gq.fetchPack(lq));
+       if (null === Oq) throw new Error(`no texture pack at ${lq}`);
+       return {
+         pack: Oq,
+         key: lq
+ ... (27 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/195.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/195.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359)

#### 1. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L8` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/195.js#L4-L9) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/195.js#L4-L8)

```diff
-   9058: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Gz,
-       d: () => Pz,
-       h: () => Lz
+   9348: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       packDisplayName: () => aq,
+       packModelMessage: () => Vq,
+       packModelSummary: () => jq,
+       refusedPackModels: () => dq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10-L67` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/195.js#L11-L18) · [Before (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/195.js#L10-L67)

```diff
-     var Ez = bz(9063);
-     const nz = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       iz = {
-         items: 1024,
-         perFile: 1024,
- ... (42 more removed lines; see GitHub link above)
+     var Yq = gq(9351),
+       lq = gq(9358);
+     const Oq = "DRACO",
+       mq = 0,
+       xq = 1,
+       Aq = 0,
+       cq = 1,
+       uq = 32768;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L70-L116` → after: `L21-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L21-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/195.js#L21-L91) · [Before (L70-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/195.js#L70-L116)

```diff
-       return zz.toLocaleString("en-US")
-     }
- 
-     function wz(zz, uz, bz) {
-       return zz > uz ? `has ${Kz(zz)} ${bz} (the limit is ${Kz(uz)})` : null
-     }
- 
-     function Xz(zz, uz) {
-       return Number.isInteger(zz) && zz >= 0 && zz < (null !== uz && void 0 !== uz ? uz : 0)
-     }
- 
-     function fz(zz) {
-       return Number.isInteger(zz) && zz >= 0
-     }
- 
-     function sz(zz, uz) {
- ... (31 more removed lines; see GitHub link above)
+       const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
+       let gq = 0;
+       const Yq = () => {
+           if (gq >= qq.byteLength) throw new RangeError("past the stream");
+           return qq[gq++]
+         },
+         lq = () => {
+           if (gq + 4 > qq.byteLength) throw new RangeError("past the stream");
+           const Yq = Eq.getUint32(gq, !0);
+           return gq += 4, Yq
+         },
+         Bq = () => {
+           let qq = 0;
+           for (let Eq = 0; Eq < 35; Eq += 7) {
+             const gq = Yq();
+             if (qq += (127 & gq) * 2 ** Eq, 0 === (128 & gq)) return qq
+ ... (55 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L121-L124` → after: `L96-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L96-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/195.js#L96-L148) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/195.js#L121-L124)

```diff
-       const iz = null === (Ez = zz.bufferViews) || void 0 === Ez ? void 0 : Ez[bz];
-       if (!iz || !uz || 0 !== iz.buffer) return null;
-       const lz = null !== (nz = iz.byteOffset) && void 0 !== nz ? nz : 0;
-       return !fz(lz) || !fz(iz.byteLength) || lz + iz.byteLength > uz.byteLength ? null : uz.subarray(lz, lz + iz.byteLength)
+       if (null === (Yq = null === (lq = qq.extensionsUsed) || void 0 === lq ? void 0 : lq.includes("KHR_draco_mesh_compression")) || void 0 === Yq || !Yq) return null;
+       for (const aq of null !== (Oq = qq.meshes) && void 0 !== Oq ? Oq : []) {
+         var Oq;
+         for (const Yq of aq.primitives) {
+           var mq, xq, Aq, cq, uq, Wq;
+           const lq = null === (mq = Yq.extensions) || void 0 === mq ? void 0 : mq.KHR_draco_mesh_compression;
+           if ("object" !== typeof lq || null === lq) continue;
+           const Oq = null === (xq = qq.bufferViews) || void 0 === xq ? void 0 : xq[lq.bufferView];
+           if (null === Eq || void 0 === Oq) return Nq;
+           const aq = null !== (Aq = Oq.byteOffset) && void 0 !== Aq ? Aq : 0,
+             Vq = Bq(Eq.subarray(aq, aq + Oq.byteLength));
+           if (null === Vq && !gq) continue;
+           const dq = null !== (cq = qq.accessors) && void 0 !== cq ? cq : [],
+             jq = null === (uq = dq[Yq.attributes.POSITION]) || void 0 === uq ? void 0 : uq.count,
+             Hq = void 0 === Yq.indices ? 0 : null === (Wq = dq[Yq.indices]) || void 0 === Wq ? void 0 : Wq.count;
+           if (null === Vq || void 0 === jq || void 0 === Hq || 3 * Vq.faces !== Hq || Vq.vertices > jq) return Nq
+ ... (37 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L128-L554` → after: `L152-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/195.js#L152-L156) · [Before (L128-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/195.js#L128-L554)

```diff
-       var bz, nz, iz;
-       const lz = Ez.n[uz.type],
-         Mz = Ez.c[uz.componentType];
-       if (!lz || !Mz || !Number.isInteger(uz.count) || uz.count < 0) return !1;
-       if (void 0 === uz.bufferView) return !0;
-       const tz = null === (bz = zz.bufferViews) || void 0 === bz ? void 0 : bz[uz.bufferView],
-         Hz = null !== (nz = uz.byteOffset) && void 0 !== nz ? nz : 0;
-       if (!tz || !fz(Hz) || Hz % Mz !== 0) return !1;
-       const Oz = lz * Mz,
-         pz = null !== (iz = tz.byteStride) && void 0 !== iz ? iz : Oz;
-       if (pz < Oz) return !1;
-       return (0 === uz.count ? 0 : Hz + pz * (uz.count - 1) + Oz) <= tz.byteLength
-     }
- 
-     function Lz(zz) {
-       return zz > nz.fileBytes ? `is ${(zz/lz).toFixed(1)} MiB (the limit is ${nz.fileBytes/lz} MiB)` : null
- ... (411 more removed lines; see GitHub link above)
+       const gq = Object.keys(Eq);
+       if (0 === gq.length) return null;
+       if (1 === gq.length) return Vq(qq, gq[0], Eq[gq[0]]);
+       const Yq = gq.map((qq => `"${qq}" ${Eq[qq]}`)).join("; ");
+       return `Texture pack "${qq}": ${gq.length} models were not loaded (${Yq}). The default models are used instead.`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/196.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/196.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/196.js#L4)

```diff
-   9165: (zz, uz, bz) => {
+   9351: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/196.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/196.js#L6-L7)

```diff
-       b: () => nz,
-       c: () => iz
+       d: () => fq,
+       f: () => Zq,
+       h: () => iq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L9-L1367` → after: `L10-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L10-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/196.js#L10-L555) · [Before (L9-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/196.js#L9-L1367)

```diff
-     var Ez = bz(9125);
-     const nz = "Air",
-       iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   26880: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   32966: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   32968: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   26889: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1343 more removed lines; see GitHub link above)
+     var Yq = gq(9358);
+     const lq = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       Oq = {
+         items: 1024,
+         perFile: 1024,
+ ... (530 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/197.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/197.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L4-L335` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/197.js#L4) · [Before (L4-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/197.js#L4-L335)

```diff
-   37204: (zz, uz, bz) => {
-     var Ez = bz(37213);
- 
-     function nz(zz) {
-       for (var uz, bz, nz = 0, iz = zz.length, lz = 0; lz < zz.length;) {
-         for (uz = zz[lz], bz = 0; lz < iz && zz[lz] === uz;) ++lz, ++bz;
-         nz += Ez.log2(bz) / 7 | 0, nz += Ez.log2(uz >>> 0) / 7 | 0, nz += 2
-       }
-       return nz
-     }
-     uz.size = nz, uz.encode = function(zz, uz) {
-       uz || (uz = new Uint8Array(nz(zz)));
-       for (var bz, Ez, iz = 0, lz = uz.length, Mz = 0; Mz < zz.length;) {
-         for (bz = zz[Mz], Ez = 0; Mz < zz.length && zz[Mz] === bz;) ++Mz, ++Ez;
-         for (; iz < lz && Ez >= 128;) uz[iz++] = 128 + (127 & Ez), Ez >>>= 7;
-         if (iz >= lz) throw new Error("RLE buffer overflow");
- ... (316 more removed lines; see GitHub link above)
+   9464: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L338` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/197.js#L7) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/197.js#L338)

```diff
-       c: () => iz
+       d: () => Oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L340` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/197.js#L9) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/197.js#L340)

```diff
-     var Ez = bz(9125);
+     var Yq = gq(9433);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L342` → after: `L11-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L11-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/197.js#L11-L1367) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/197.js#L342)

```diff
-       iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   27551: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   33537: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   33540: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   27554: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   27560: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAHHUlEQVR4nO3dP2vkRhgGcDX7YVxsYzfTuDl3Smdz1ZKwgnQGE8xyMTHxBULOcezjmgSTS2PwQbKBI80Rc+Ai5AO4MiFNiu2uSLmFmzBBy84yO9Y7mpFmpJHmKZ7Ca2lW0vx2RtLoTzJ+up+IDDc2a0Uuy2V56ZNdJ2Fb … [truncated]
+ ... (1341 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/198.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/198.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L4` → after: `L4-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L4-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L91) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L4)

```diff
-   39645: (zz, uz, bz) => {
+   37725: (qq, Eq, gq) => {
+     var Yq = gq(37734);
+ 
+     function lq(qq) {
+       for (var Eq, gq, lq = 0, Oq = qq.length, mq = 0; mq < qq.length;) {
+         for (Eq = qq[mq], gq = 0; mq < Oq && qq[mq] === Eq;) ++mq, ++gq;
+         lq += Yq.log2(gq) / 7 | 0, lq += Yq.log2(Eq >>> 0) / 7 | 0, lq += 2
+       }
+       return lq
+     }
+     Eq.size = lq, Eq.encode = function(qq, Eq) {
+       Eq || (Eq = new Uint8Array(lq(qq)));
+       for (var gq, Yq, Oq = 0, mq = Eq.length, xq = 0; xq < qq.length;) {
+         for (gq = qq[xq], Yq = 0; xq < qq.length && qq[xq] === gq;) ++xq, ++Yq;
+         for (; Oq < mq && Yq >= 128;) Eq[Oq++] = 128 + (127 & Yq), Yq >>>= 7;
+         if (Oq >= mq) throw new Error("RLE buffer overflow");
+ ... (72 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L6-L8` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L93-L95) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L6-L8)

```diff
-       FORMER_BLOCK_IMAGE_NAMES: () => Ez.d,
-       textureAnimationData: () => nz.t,
-       textureNameToIndex: () => nz.w
+       emptyColumnHeight: () => Pq,
+       loadHeatmapSchematic: () => Qq,
+       readSchematicBlocks: () => yq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L10-L11` → after: `L97-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L97-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L97-L333) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L10-L11)

```diff
-     var Ez = bz(38108),
-       nz = bz(9078)
+     var Yq = gq(3600),
+       lq = gq.n(Yq),
+       Oq = gq(3584),
+       mq = gq(37725),
+       xq = gq(190),
+       Aq = gq(9379);
+     const cq = [{
+         name: "x",
+         type: "int"
+       }, {
+         name: "y",
+         type: "int"
+       }, {
+         name: "z",
+         type: "int"
+       }],
+ ... (221 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L13` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L335) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L13)

```diff
-   9165: (zz, uz, bz) => {
+   9464: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L16` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L338) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L16)

```diff
-       c: () => iz
+       d: () => Oq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L18` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L340) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L18)

```diff
-     var Ez = bz(9125);
+     var Yq = gq(9433);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L20-L32` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/198.js#L342) · [Before (L20-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/198.js#L20-L32)

```diff
-       iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   38108: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez,
-       f: () => nz
-     });
-     const Ez = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((zz => [zz, `${zz}_block`])));
- 
-     function nz(zz) {
-       var uz;
-       return null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : zz
-     }
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/199.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/199.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df)

#### 1. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/199.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/199.js#L4)

```diff
-   39779: (zz, uz, bz) => {
+   40244: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       FORMER_BLOCK_IMAGE_NAMES: () => Yq.c,
+       textureAnimationData: () => lq.x,
+       textureNameToIndex: () => lq.y
+     });
+     var Yq = gq(38689),
+       lq = gq(9379)
+   },
+   9464: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L6-L8` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/199.js#L15-L16) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/199.js#L6-L8)

```diff
-       e: () => tz,
-       i: () => Mz,
-       l: () => lz
+       b: () => lq,
+       d: () => Oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L10-L12` → after: `L18-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/199.js#L18-L27) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/199.js#L10-L12)

```diff
-     var Ez = bz(39784),
-       nz = bz(4560),
-       iz = bz(39792);
+     var Yq = gq(9433);
+     const lq = "Air",
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   38689: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Yq,
+       e: () => lq
+     });
+     const Yq = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((qq => [qq, `${qq}_block`])));
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L15-L1351` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/199.js#L30-L31) · [Before (L15-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/199.js#L15-L1351)

```diff
-       return zz.payloadKind === nz.bc.Msgpack ? (0, Ez.b)(zz.payload) : void 0
-     }
- 
-     function Mz(zz, uz) {
-       if (uz.payloadKind === nz.bc.Bytes || uz.payloadKind === nz.bc.MsgpackBin) return (0, iz.d)(zz, uz.payload)
-     }
- 
-     function tz(zz) {
-       return null !== zz && "object" === typeof zz
-     }
-   },
-   39798: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => pz,
-       d: () => dz,
-       h: () => Fz,
- ... (1321 more removed lines; see GitHub link above)
+       var Eq;
+       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/200.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/200.js` (120 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L4)

```diff
-   38482: (zz, uz, bz) => {
+   40350: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L6)

```diff
-       b: () => Ez
+       b: () => Aq,
+       d: () => xq,
+       e: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L8-L32` → after: `L10-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L10-L23) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L8-L32)

```diff
-     class Ez {
-       constructor(zz, uz) {
-         this.read = zz, this.apply = uz, this.release = null
-       }
-       turn(zz, uz) {
-         const bz = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: uz,
-           forcedCameraDirection: [zz[0], zz[1], zz[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
-           }), uz + 100),
-           transitionMs: bz
-         }
-       }
- ... (9 more removed lines; see GitHub link above)
+     var Yq = gq(40353),
+       lq = gq(4622),
+       Oq = gq(40359);
+ 
+     function mq(qq) {
+       return qq.payloadKind === lq.hc.Msgpack ? (0, Yq.e)(qq.payload) : void 0
+     }
+ 
+     function xq(qq, Eq) {
+       if (Eq.payloadKind === lq.hc.Bytes || Eq.payloadKind === lq.hc.MsgpackBin) return (0, Oq.e)(qq, Eq.payload)
+     }
+ 
+     function Aq(qq) {
+       return null !== qq && "object" === typeof qq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L35` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L26) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L35)

```diff
-   38026: (zz, uz, bz) => {
+   40366: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L38` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L30-L32) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L38)

```diff
-       h: () => nz
+       h: () => Nq,
+       l: () => uq,
+       o: () => dq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L40` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L34-L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L40)

```diff
-     const Ez = new Map;
+     var Yq = gq(4622),
+       lq = gq(40369);
+     const Oq = new Map,
+       mq = new Set,
+       xq = new Set;
+     let Aq = 0,
+       cq = 0;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L43` → after: `L43-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L43-L50) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L43)

```diff
-       Ez.set(zz, uz)
+       let gq = Oq.get(qq);
+       return gq || (gq = new Set, Oq.set(qq, gq)), gq.add(Eq), () => {
+         gq.delete(Eq)
+       }
+     }
+ 
+     function Bq() {
+       return 0 !== Aq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L47` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L54-L56) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L47)

```diff
-       return zz ? Ez.get(zz) : void 0
+       return mq.add(qq), () => {
+         mq.delete(qq)
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L56-L68` → after: `L59-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L59-L61) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L56-L68)

```diff
-     function nz(zz, uz, bz) {
-       var nz, iz, lz, Mz, tz, Hz, Oz;
-       const pz = (0, Ez.b)(zz, uz, bz[0], bz[1], bz[2]),
-         dz = pz ? null !== (nz = pz.textCell) && void 0 !== nz ? nz : pz.rect.anchor : bz,
-         Fz = uz(dz[0], dz[1], dz[2]);
-       return {
-         pos: [bz[0], bz[1], bz[2]],
-         noticeboardSpan: pz && {
-           width: pz.rect.width,
-           height: pz.rect.height
-         },
-         text: null !== (iz = null === Fz || void 0 === Fz || null === (lz = Fz.persisted) || void 0 === lz || null === (Mz = lz.shared) || void 0 === Mz ? void 0 : Mz.text) && void 0 !== iz ? iz : "",
-         textSize: null !== (tz = null === Fz || void 0 === Fz || null === (Hz = Fz.persisted) || void 0 === Hz || null === (Oz = Hz.shared) || void 0 === Oz ? void 0 : Oz.textSize) && void 0 !== tz ? tz : null
+     function Nq(qq) {
+       return xq.add(qq), () => {
+         xq.delete(qq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L71-L72` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L64-L65) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L71-L72)

```diff
-   },
-   37890: (zz, uz, bz) => {
+     const aq = "A raw message listener threw";
+ 
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L74-L80` → after: `L67-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L67-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L67-L90) · [Before (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L74-L80)

```diff
-       switch (zz.kind) {
-         case void 0:
-         case "flatEmissive":
-           return !1;
-         case "chevronPath":
-         case "furnaceFire":
-           return !0
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq;
+       for (const Yq of Eq) try {
+         Yq()
+       } catch (gq) {
+         qq ? (0, lq.r)(gq, aq) : console.error(aq, gq)
+       }
+     }
+     const dq = {
+       fire: function(qq) {
+         if ("connection" === qq.type) {
+           const Eq = qq.phase === Yq.u.Activated && qq.conn !== Aq && qq.conn > cq,
+             gq = (qq.phase === Yq.u.Left || qq.phase === Yq.u.Closed) && qq.conn === Aq;
+           return void(Eq || gq ? (Aq = Eq ? qq.conn : 0, Vq(!0)) : qq.phase === Yq.u.Resumed && 0 !== Aq && qq.conn > cq && (Aq = qq.conn, Vq(!0, xq)))
+         }
+         const Eq = Oq.get(qq.Hc);
+         if (Eq && qq.conn === Aq && 0 !== Aq)
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L85-L86` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L97-L98) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L85-L86)

```diff
-       h: () => iz,
-       l: () => Ez
+       e: () => Aq,
+       f: () => xq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L88-L89` → after: `L100-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L100-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L100-L127) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L88-L89)

```diff
-     const nz = 4,
-       iz = 3
+     var Yq = gq(1261),
+       lq = gq(40318);
+     const Oq = new TextDecoder,
+       mq = new TextEncoder;
+ 
+     function xq(qq, Eq) {
+       const gq = qq.queries.entityName(Eq);
+       if (gq === lq.Nc) return;
+       const mq = qq.memoryData(qq.scratch(), 4 + gq, 4, "entity_name's answer");
+       if (!mq) return;
+       const xq = mq.getUint32(0, !0),
+         Aq = Oq.decode(new Uint8Array(mq.buffer, mq.byteOffset + 4, gq));
+       return (0, Yq.e)(Aq, !1, xq === lq._d ? null : xq)
+     }
+ 
+     function Aq(qq, Eq, gq) {
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L91` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L129) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L91)

```diff
-   38498: (zz, uz, bz) => {
+   40353: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L93-L94` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L131-L132) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L93-L94)

```diff
-       d: () => nz,
-       g: () => iz
+       e: () => lq,
+       h: () => uq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L96-L97` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L134-L141) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L96-L97)

```diff
-     var Ez = bz(328);
-     const nz = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
+     const Yq = new TextDecoder;
+ 
+     function lq(qq) {
+       const Eq = new Oq(qq),
+         gq = Eq.value();
+       if (Eq.at !== qq.length) throw new Error(`msgpack: ${qq.length-Eq.at} bytes after the value`);
+       return gq
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L100-L119` → after: `L144-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L144-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L144-L295) · [Before (L100-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L100-L119)

```diff
-         this.importGame = zz, this.loads = new Map, this.loaded = new Map
-       }
-       load(zz) {
-         const uz = (0, Ez.Sb)(zz);
-         if (!nz.has(uz)) return Promise.resolve(void 0);
-         let bz = this.loads.get(uz);
-         return bz || (bz = this.importGame(uz).then((zz => {
-           const bz = zz.default;
-           if ("function" !== typeof bz) throw new Error(`${uz}'s client code has no default-exported factory`);
-           return this.loaded.set(uz, bz), bz
-         })).catch((zz => {
-           throw this.loads.delete(uz), zz
-         })), this.loads.set(uz, bz)), bz
-       }
-       loadedFactory(zz) {
-         const uz = (0, Ez.Sb)(zz);
- ... (4 more removed lines; see GitHub link above)
+         this.bytes = qq, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(qq.buffer, qq.byteOffset, qq.byteLength)
+       }
+       value() {
+         const qq = this.u8();
+         if (qq <= 127) return qq;
+         if (qq >= 224) return qq - 256;
+         if (qq >= 128 && qq <= 143) return this.map(15 & qq);
+         if (qq >= 144 && qq <= 159) return this.array(15 & qq);
+         if (qq >= 160 && qq <= 191) return this.str(31 & qq);
+         switch (qq) {
+           case 192:
+             return null;
+           case 194:
+             return !1;
+           case 195:
+             return !0;
+ ... (136 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L122-L129` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L298-L301) · [Before (L122-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L122-L129)

```diff
-   },
-   38961: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(9165),
-       nz = bz(9007),
-       iz = bz(3043);
+     const mq = new TextEncoder,
+       xq = -(2n ** 63n),
+       Aq = 2n ** 63n - 1n,
+       cq = 2n ** 64n - 1n;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L132-L137` → after: `L304-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L304-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L304-L377) · [Before (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L132-L137)

```diff
-       if (zz === Ez.b) return 0;
-       const uz = (0, iz.e)(zz);
-       if (void 0 !== uz && uz <= nz.MAX_BLOCK_ID) return uz;
-       const bz = (0, iz.e)(zz.split("|")[0]);
-       if (void 0 !== bz && bz <= nz.MAX_BLOCK_ID && (0, nz.rootMetaDescOf)(bz) === zz) return bz;
-       throw new Error(`Invalid block name. You sent ${zz}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+       const Eq = new Bq;
+       return Eq.value(qq, 0), Eq.bytes()
+     }
+     class Bq {
+       constructor() {
+         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
+       }
+       bytes() {
+         return this.buf.subarray(0, this.at)
+       }
+       value(qq, Eq) {
+         if (Eq > 512) throw new Error("msgpack: nested too deep");
+         switch (typeof qq) {
+           case "undefined":
+             return this.u8(212), this.u8(0), void this.u8(0);
+           case "boolean":
+ ... (58 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L140` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L380) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L140)

```diff
-   38560: (zz, uz, bz) => {
+   40359: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L142` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L382-L386) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L142)

```diff
-       c: () => nz
+       e: () => mq
+     });
+     var Yq = gq(40343);
+     const lq = new TextDecoder("utf-8", {
+       ignoreBOM: !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L147` → after: `L390-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L390-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L390-L426) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L147)

```diff
-         this.screen = zz, this.hidesHud = !1
+         this.buf = qq, this.at = 0, this.view = null
+       }
+       bool() {
+         return 0 !== this.u8()
+       }
+       long() {
+         let qq = this.u8(),
+           Eq = 127 & qq,
+           gq = 128;
+         for (; 128 & qq;) {
+           if (gq > 2 ** 63) throw new RangeError("avro: varint too long");
+           qq = this.u8(), Eq += (127 & qq) * gq, gq *= 128
+         }
+         return Eq % 2 === 1 ? -(Eq + 1) / 2 : Eq / 2
+       }
+       float() {
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L149-L150` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L428-L429) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L149-L150)

```diff
-       show(zz, uz) {
-         this.screen.setFade(zz.colour, zz.alpha), this.screen.setLetterbox(!0 === uz.letterbox, zz.alpha < 1), this.setHudHidden(!0 === uz.hideHud)
+       bytes() {
+         return this.fixed(this.size())
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L152-L153` → after: `L431-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L431-L433) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L152-L153)

```diff
-       clear() {
-         this.screen.clear(), this.setHudHidden(!1)
+       fixed(qq) {
+         const Eq = this.take(qq);
+         return this.buf.slice(Eq, Eq + qq)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L155-L158` → after: `L435-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L435-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L435-L446) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L155-L158)

```diff
-       setHudHidden(zz) {
-         this.hidesHud !== zz && (this.hidesHud = zz, Ez.e.set({
-           isUiHiddenByCamera: zz
-         }))
+       index(qq) {
+         const Eq = this.long();
+         if (!(Eq >= 0 && Eq < qq)) throw new RangeError(`avro: index ${Eq} of ${qq}`);
+         return Eq
+       }
+       DN(qq) {
+         const Eq = [];
+         for (let gq = this.long(); 0 !== gq; gq = this.long()) {
+           gq = this.block(gq);
+           for (let Yq = 0; Yq < gq; Yq++) Eq.push(qq(this))
+         }
+         return Eq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L162` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L492) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L162)

```diff
-   38518: (zz, uz, bz) => {
+   40343: (qq, Eq, gq) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L165` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L509) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L165)

```diff
-       f: () => dz,
+       h: () => jq,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L169` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L512) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L169)

```diff
-       o: () => tz,
+       p: () => Yq,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L173` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L519) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L173)

```diff
-       y: () => Oz
+       z: () => lq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L175-L177` → after: `L521-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L521-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L521-L545) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L175-L177)

```diff
-     const Ez = Math.PI / 2 - .001,
-       nz = 2 * Math.PI,
-       iz = 1e-9;
+     const Yq = 2,
+       lq = 12,
+       Oq = 27,
+       mq = 40,
+       xq = 52,
+       Aq = 59,
+       cq = 63,
+       uq = 83,
+       Bq = 84,
+       Wq = 89,
+       Nq = 91,
+       aq = 93,
+       Vq = 94,
+       dq = 95,
+       jq = 97,
+       Hq = 101,
+ ... (9 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L180-L189` → after: `L548-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L548-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L548-L710) · [Before (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L180-L189)

```diff
-       uz.heading = zz.heading, uz.pitch = zz.pitch
-     }
- 
-     function Mz(zz, uz) {
-       const bz = uz - zz;
-       return bz - nz * Math.floor((bz + Math.PI) / nz)
-     }
- 
-     function tz(zz, uz, bz) {
-       return zz + Mz(zz, uz) * bz
+       switch (qq) {
+         case Yq:
+           return function(qq) {
+             return {
+               tg: Kq(qq),
+               hg: qq.float(),
+               ng: qq.long()
+             }
+           }(Eq);
+         case lq:
+           return function(qq) {
+             return {
+               Oq: Tq(qq),
+               mq: Tq(qq)
+             }
+           }(Eq);
+ ... (147 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L193-L195` → after: `L714-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L714-L716) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L193-L195)

```diff
-       if (!Number.isFinite(zz)) return zz;
-       const uz = zz - nz * Math.floor(zz / nz);
-       return uz < nz ? uz : 0
+       return {
+         entityName: qq.str()
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L198-L199` → after: `L719-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L719-L721) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L198-L199)

```diff
-     function Oz(zz, uz) {
-       return zz + Mz(zz, uz)
+     function Zq(qq) {
+       const Eq = qq.index(4);
+       return 0 === Eq ? qq.str() : 1 === Eq ? qq.long() : 2 === Eq ? qq.bool() : iq(qq)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L203` → after: `L725-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L725-L727) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L203)

```diff
-       return Math.max(-Ez, Math.min(Ez, zz))
+       return 0 === qq.index(2) ? null : function(qq) {
+         return qq.map(Zq)
+       }(qq)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L206-L208` → after: `L730-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L730-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L730-L734) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L206-L208)

```diff
-     function dz(zz, uz, bz) {
-       const Ez = Math.cos(uz);
-       return bz[0] = Ez * Math.sin(zz), bz[1] = -Math.sin(uz), bz[2] = Ez * Math.cos(zz), bz
+     function Mq(qq) {
+       return {
+         translationKey: qq.str(),
+         params: fq(qq)
+       }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L211-L213` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L737-L738) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L211-L213)

```diff
-     function Fz(zz, uz, bz, Ez) {
-       const nz = Math.sqrt(zz * zz + bz * bz);
-       return nz < iz && Math.abs(uz) < iz || (nz >= iz && (Ez.heading = Math.atan2(zz, bz)), Ez.pitch = pz(Math.atan2(-uz, nz) + 0)), Ez
+     function Tq(qq) {
+       return 0 === qq.index(2) ? null : qq.str()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L216-L217` → after: `L741-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L741-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L741-L748) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L216-L217)

```diff
-     function Zz(zz, uz) {
-       return Fz(zz[0], zz[1], zz[2], uz)
+     function zq(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           color: Tq(qq),
+           colour: Tq(qq),
+           fontSize: Tq(qq)
+         }
+       }(qq)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L220-L221` → after: `L751-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L751-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L751-L755) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L220-L221)

```diff
-     function Rz(zz, uz, bz) {
-       return Fz(uz[0] - zz[0], uz[1] - zz[1], uz[2] - zz[2], bz)
+     function Sq(qq) {
+       return {
+         icon: qq.str(),
+         style: zq(qq)
+       }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L232-L236` → after: `L759-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L759-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L759-L763) · [Before (L232-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L232-L236)

```diff
-       var uz;
-       const bz = "default" === zz.mode ? "movement" : null !== (uz = zz.playerFacing) && void 0 !== uz ? uz : "movement";
-       return "cursor" === bz ? {
-         facing: bz,
-         mouseTurns: null
+       const Eq = qq.index(3);
+       return 0 === Eq ? {
+         string: qq.str()
+       } : 1 === Eq ? {
+         styledEntityName: iq(qq)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L238-L239` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L765) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L238-L239)

```diff
-         facing: bz,
-         mouseTurns: "default" !== zz.mode && void 0 !== zz.playerLook ? "look" : "view"
+         styledTranslatedText: Mq(qq)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L243-L244` → after: `L769-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L769-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L769-L771) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L243-L244)

```diff
-     function iz(zz, uz, bz, nz, iz, lz) {
-       return lz.QJ = 0, lz.eJ = 0, lz.pointedAt = void 0, void 0 !== nz ? iz ? (lz.pointedAt = nz, zz) : (0, Ez.t)(nz.heading) : iz ? (lz.QJ = uz, lz.eJ = bz, zz) : (0, Ez.t)(zz + uz)
+     function Gq(qq) {
+       const Eq = qq.index(3);
+       return 0 === Eq ? null : 1 === Eq ? qq.str() : qq.long()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L255-L258` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L774-L775) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L255-L258)

```diff
-     function lz(zz, uz, bz, Ez) {
-       if (!(Ez > 0)) return uz;
-       const nz = uz > zz ? Math.min(uz, zz + bz / Ez) : Math.max(uz, zz - bz / Ez);
-       return Math.abs(uz - nz) < 1e-9 ? uz : nz
+     function Lq(qq) {
+       return 0 === qq.index(2) ? null : qq.float()
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L260-L314` → after: `L777-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L777-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L777-L786) · [Before (L260-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L260-L314)

```diff
-     class Mz {
-       constructor() {
-         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
-           colour: Ez.f,
-           alpha: 0
-         }
-       }
-       getScreen() {
-         return this.screen
-       }
-       fadeOut(zz) {
-         !this.isGoingOut() && this.sinceTurnMs < Ez.m.minFadeTurnMs ? this.waiting = {
-           turn: "out",
-           transition: zz
-         } : (this.waiting = null, this.startOut(zz))
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function Jq(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           color: Tq(qq),
+           colour: Tq(qq),
+           fontWeight: Gq(qq),
+           fontStyle: Tq(qq),
+           fontSize: Tq(qq),
+           opacity: Lq(qq)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L316` → after: `L788-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L788-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L788-L795) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L316)

```diff
-         return "in" === this.phase && (uz.alpha = lz(uz.alpha, 0, iz, this.inMs), uz.alpha <= 0 && (this.phase = null, this.clearMs = 0)), bz
+       }(qq)
+     }
+ 
+     function kq(qq) {
+       return {
+         str: pq(qq),
+         style: Jq(qq),
+         clickableUrl: Tq(qq)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L324-L325` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L799-L800) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L324-L325)

```diff
-     function dz(zz, uz) {
-       for (let bz = 0; bz < uz.length; bz++) uz[bz] = zz[bz]
+     function Rq(qq) {
+       return qq.str()
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L328-L330` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L803-L804) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L328-L330)

```diff
-     function Fz(zz, uz) {
-       var bz;
-       return null !== (bz = zz.fov) && void 0 !== bz ? bz : uz.getDefaultFov()
+     function Uq(qq) {
+       return qq.DN(Rq)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L333-L340` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L807-L808) · [Before (L333-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L333-L340)

```diff
-     function Zz(zz, uz, bz, Ez, nz) {
-       const iz = 2 / Ez,
-         lz = Math.exp(-iz * nz);
-       for (let Mz = 0; Mz < zz.length; Mz++) {
-         const Ez = zz[Mz] - bz[Mz],
-           tz = (uz[Mz] + iz * Ez) * nz;
-         zz[Mz] = bz[Mz] + (Ez + tz) * lz, uz[Mz] = (uz[Mz] - iz * tz) * lz
-       }
+     function Fq(qq) {
+       return 0 === qq.index(2) ? null : Uq(qq)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L342-L407` → after: `L810-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L810-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L810-L818) · [Before (L342-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L342-L407)

```diff
-     class Rz {
-       constructor(zz, uz, bz, Ez) {
-         var iz, lz, Mz, tz, Hz;
-         this.settings = zz, this.xd = uz, this.targets = bz, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.ht = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
-           heading: 0,
-           pitch: 0
-         }, this.points = [], this.forward = [0, 0, 0], this.base = {
-           heading: (0, nz.t)((0, Oz.j)(null !== (iz = zz.viewHeading) && void 0 !== iz ? iz : 0)),
-           pitch: (0, nz.i)((0, Oz.j)(null !== (lz = zz.viewElevation) && void 0 !== lz ? lz : 45))
-         }, this.closestDistance = null !== (Mz = zz.closestDistance) && void 0 !== Mz ? Mz : Math.min(6, null !== (tz = zz.furthestDistance) && void 0 !== tz ? tz : 1 / 0), this.furthestDistance = null !== (Hz = zz.furthestDistance) && void 0 !== Hz ? Hz : Math.max(64, this.close … [truncated]
-         const pz = (0, nz.f)(this.base.heading, this.base.pitch, this.forward),
-           dz = Ez.position,
-           Fz = this.closestDistance;
-         this.goal = [dz[0] + pz[0] * Fz, dz[1] + pz[1] * Fz, dz[2] + pz[2] * Fz, Fz, this.base.heading, this.base.pitch]
-       }
-       update(zz, uz, bz) {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function sq(qq) {
+       return {
+         type: qq.str(),
+         progress: qq.float(),
+         width: Tq(qq),
+         height: Tq(qq),
+         colours: Fq(qq),
+         backgroundColour: Tq(qq)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L410-L448` → after: `L821-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L821-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L821-L826) · [Before (L410-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L410-L448)

```diff
-     class Kz {
-       constructor(zz) {
-         this.limits = zz, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
-       }
-       continueFrom(zz) {
-         this.limits && (this.yawOffset = zz.yawOffset, this.pitchOffset = zz.pitchOffset, this.idleMs = zz.idleMs)
-       }
-       update(zz, uz) {
-         const bz = this.limits;
-         if (!bz) return;
-         const Ez = Number.isFinite(uz.QJ) ? uz.QJ : 0,
-           nz = Number.isFinite(uz.eJ) ? uz.eJ : 0;
-         if (uz.pointedAt) this.idleMs = 0, this.pointedAt = {
-           heading: uz.pointedAt.heading,
-           pitch: uz.pointedAt.pitch
-         };
- ... (23 more removed lines; see GitHub link above)
+ 
+     function Xq(qq) {
+       return {
+         type: qq.str(),
+         action: qq.str(),
+         style: Jq(qq)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L450-L451` → after: `L828-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L828-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L828-L845) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L450-L451)

```diff
-       unapply(zz, uz) {
-         uz.heading = (0, nz.t)(zz.heading - this.yawOffset), uz.pitch = (0, nz.i)(zz.pitch - this.pitchOffset)
+     }
+ 
+     function wq(qq) {
+       const Eq = qq.index(7);
+       return 0 === Eq ? {
+         string: qq.str()
+       } : 1 === Eq ? {
+         entityName: iq(qq)
+       } : 2 === Eq ? {
+         translatedText: Mq(qq)
+       } : 3 === Eq ? {
+         styledIcon: Sq(qq)
+       } : 4 === Eq ? {
+         rg: kq(qq)
+       } : 5 === Eq ? {
+         styledProgressBar: sq(qq)
+ ... (2 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L457` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L850) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L457)

```diff
-       return Math.sqrt(zz[0] * zz[0] + zz[1] * zz[1] + zz[2] * zz[2])
+       return qq.DN(wq)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L460-L463` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L854-L855) · [Before (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L460-L463)

```diff
-     function fz(zz, uz, bz, Ez, nz) {
-       const iz = nz * nz,
-         lz = iz * nz;
-       return (2 * lz - 3 * iz + 1) * zz + (lz - 2 * iz + nz) * uz + (-2 * lz + 3 * iz) * bz + (lz - iz) * Ez
+     function Iq(qq) {
+       return Cq[qq.index(5)]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L466-L468` → after: `L858-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L858-L859) · [Before (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L466-L468)

```diff
-     function sz(zz, uz, bz, Ez, nz) {
-       const iz = nz * nz;
-       return (6 * iz - 6 * nz) * zz + (3 * iz - 4 * nz + 1) * uz + (-6 * iz + 6 * nz) * bz + (3 * iz - 2 * nz) * Ez
+     function eq(qq) {
+       return 0 === qq.index(2) ? null : qq.double()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L471-L484` → after: `L862-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L862-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L862-L872) · [Before (L471-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L471-L484)

```diff
-     function rz(zz, uz) {
-       const bz = uz[0] - zz[0],
-         Ez = uz[1] - zz[1],
-         nz = uz[2] - zz[2];
-       return Math.sqrt(bz * bz + Ez * Ez + nz * nz)
-     }
- 
-     function oz(zz, uz, bz, Ez, nz, iz) {
-       for (let lz = 0; lz < 3; lz++) iz[lz] = nz ? zz[lz] * Ez : bz[lz] - uz[lz];
-       return nz && function(zz, uz) {
-         const bz = Xz(zz);
-         if (bz > uz) {
-           const Ez = uz / bz;
-           zz[0] *= Ez, zz[1] *= Ez, zz[2] *= Ez
+     function Dq(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           ZY: eq(qq),
+           fY: qq.double(),
+           MY: qq.double(),
+           TY: qq.bool(),
+           description: Kq(qq),
+           zY: qq.str(),
+           scale: eq(qq),
+           rotation: eq(qq)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L486` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L874) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L486)

```diff
-       }(iz, 3 * rz(uz, bz)), iz
+       }(qq)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L489-L493` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L877-L878) · [Before (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L489-L493)

```diff
-     function Nz(zz, uz, bz, Ez) {
-       for (let nz = 0; nz < 3; nz++) Ez[nz] = 6 * (uz[nz] - zz[nz]) - 2 * bz[nz];
-       if (Xz(Ez) < wz)
-         for (let nz = 0; nz < 3; nz++) Ez[nz] = uz[nz] - zz[nz];
-       return Ez
+     function qE(qq) {
+       return 0 === qq.index(2) ? null : qq.bool()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L496-L497` → after: `L881-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L881-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L881-L892) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L496-L497)

```diff
-     function vz(zz, uz) {
-       return [2 * uz[0] - zz[0], 2 * uz[1] - zz[1], 2 * uz[2] - zz[2]]
+     function EE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           pY: qq.double(),
+           icon: qq.str(),
+           label: Kq(qq),
+           GY: qq.bool(),
+           scale: eq(qq),
+           rotation: eq(qq),
+           LY: qE(qq)
+         }
+       }(qq)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L500-L511` → after: `L895-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L895-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L895-L910) · [Before (L500-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L500-L511)

```diff
-     function xz(zz, uz, bz, Ez, nz, iz, lz) {
-       if (!iz && !lz) return 0;
-       const Mz = iz ? zz : 2 * uz - bz,
-         tz = lz ? bz : 2 * uz - zz,
-         Hz = iz ? Ez : nz,
-         Oz = lz ? nz : Ez,
-         pz = (uz - Mz) / Hz,
-         dz = (tz - uz) / Oz;
-       if (pz * dz <= 0) return 0;
-       const Fz = (tz - Mz) / (Hz + Oz),
-         Zz = 3 * Math.min(Math.abs(pz), Math.abs(dz));
-       return Math.max(-Zz, Math.min(Zz, Fz))
+     function gE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           ZY: eq(qq),
+           kY: qq.double(),
+           RY: qq.double(),
+           UY: qq.double(),
+           gravity: qq.double(),
+           FY: qq.double(),
+           sY: qq.double(),
+           XY: qq.double(),
+           TY: qq.bool(),
+           description: Kq(qq),
+           icon: Tq(qq)
+         }
+       }(qq)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L514-L520` → after: `L913-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L913-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L913-L923) · [Before (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L514-L520)

```diff
-     function Jz(zz, uz, bz, Ez, nz, iz, lz) {
-       const {
-         u: Mz,
-         segmentMs: tz
-       } = zz;
-       if (!zz.curved) return bz + (Ez - bz) * Mz;
-       return fz(bz, xz(uz, bz, Ez, zz.beforeMs, tz, iz, !0) * tz, Ez, xz(bz, Ez, nz, tz, zz.afterMs, !0, lz) * tz, Mz)
+     function YE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           speed: qq.double(),
+           KY: qq.double(),
+           label: Kq(qq),
+           icon: Tq(qq),
+           scale: eq(qq),
+           rotation: eq(qq)
+         }
+       }(qq)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L524` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L927) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L524)

```diff
-       return Math.abs(zz.pitch) >= nz.e
+       return 0 === qq.index(2) ? null : qq.long()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L526-L574` → after: `L929-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L929-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L929-L938) · [Before (L526-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L526-L574)

```diff
-     class Tz {
-       constructor(zz, uz, bz, Ez, nz) {
-         this.nodes = zz, this.prevNodes = bz, this.nextNodes = Ez, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.fromAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.toAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.afterAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.borrowedAngles = {
-           heading: 0,
- ... (33 more removed lines; see GitHub link above)
+ 
+     function OE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           IY: qq.long(),
+           eY: qq.double(),
+           DY: qq.double(),
+           ql: lE(qq),
+           label: Kq(qq),
+           icon: Tq(qq)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L576-L605` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L940) · [Before (L576-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L576-L605)

```diff
-         const lz = this.tangents[zz];
-         return lz ? ((0, nz.j)(lz, Ez), "tangent") : "none"
-       }
-       liveTangent(zz, uz) {
-         const bz = this.nodes[zz.index].position,
-           Ez = this.nodes[zz.toIndex].position,
-           iz = this.derivative;
-         for (let nz = 0; nz < 3; nz++) iz[nz] = sz(bz[nz], zz.fromTangent[nz], Ez[nz], zz.toTangent[nz], zz.u);
-         return Xz(iz) > 1e-9 ? ((0, nz.m)(iz, uz), !0) : !(rz(bz, Ez) < wz) && ((0, nz.m)(Nz(bz, Ez, zz.u < .5 ? zz.toTangent : zz.fromTangent, iz), uz), !0)
-       }
-       nodeTangent(zz, uz, bz) {
-         var Ez;
-         const iz = zz[bz];
-         if (Xz(iz) > 1e-9) return (0, nz.m)(iz, {
-           heading: 0,
-           pitch: 0
- ... (14 more removed lines; see GitHub link above)
+       }(qq)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L608-L723` → after: `L943-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L943-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L943-L950) · [Before (L608-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L608-L723)

```diff
-     function Lz(zz, uz) {
-       const bz = zz.lookDirection || uz.lookDirection ? function(zz, uz) {
-         if (!zz || !uz) return zz === uz;
-         const bz = Xz(zz),
-           Ez = Xz(uz);
-         return Math.hypot(zz[0] / bz - uz[0] / Ez, zz[1] / bz - uz[1] / Ez, zz[2] / bz - uz[2] / Ez) < wz
-       }(zz.lookDirection, uz.lookDirection) : (Ez = zz.lookAt, nz = uz.lookAt, "object" !== typeof Ez || "object" !== typeof nz ? Ez === nz : rz(Ez, nz) < wz);
-       var Ez, nz;
-       return rz(zz.position, uz.position) < wz && zz.fov === uz.fov && bz
-     }
-     class Pz {
-       constructor(zz, uz, bz) {
-         if (this.smooth = uz, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
-             index: 0,
-             toIndex: 0,
-             u: 0,
- ... (100 more removed lines; see GitHub link above)
+     function mE(qq) {
+       return {
+         type: Iq(qq),
+         progressBar: Dq(qq),
+         timedClick: EE(qq),
+         gravityBar: gE(qq),
+         precisionBar: YE(qq),
+         rhythmClick: OE(qq)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L726-L750` → after: `L953-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L953-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L953-L955) · [Before (L726-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L726-L750)

```diff
-     class Gz {
-       constructor(zz) {
-         this.xd = zz, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = uz => zz.getEntityPosition(uz), this.readAimPoint = uz => zz.getEntityAimPoint(uz)
-       }
-       aimPoint(zz) {
-         return "string" !== typeof zz ? (0, tz.r)(zz, 3) ? zz : null : this.resolve(zz, this.readAimPoint, this.lastAimPoints)
-       }
-       currentAimPoint(zz) {
-         const uz = "string" === typeof zz ? this.xd.getEntityAimPoint(zz) : zz;
-         return uz && (0, tz.r)(uz, 3) ? uz : null
-       }
-       feetPosition(zz) {
-         return this.resolve(zz, this.readFeet, this.lastFeet)
-       }
-       heading(zz) {
-         const uz = this.xd.getEntityHeading(zz);
- ... (9 more removed lines; see GitHub link above)
+ 
+     function xE(qq) {
+       return qq.float()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L754-L757` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L959) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L754-L757)

```diff
-       return {
-         heading: zz.heading,
-         pitch: zz.pitch
-       }
+       return qq.DN(xE)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L760-L761` → after: `L962-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L962-L963) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L760-L761)

```diff
-     function Vz(zz, uz) {
-       Number.isFinite(zz.heading) && Number.isFinite(zz.pitch) || (0, nz.j)(uz, zz)
+     function cE(qq) {
+       return 0 === qq.index(2) ? null : AE(qq)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L764-L767` → after: `L966-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L966-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L966-L967) · [Before (L764-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L764-L767)

```diff
-     function mz(zz, uz, bz, Ez, iz) {
-       if (uz) return void(0, nz.m)(uz, iz);
-       const lz = Ez.aimPoint(bz);
-       lz && (0, nz.s)(zz, lz, iz)
+     function uE(qq) {
+       return 0 === qq.index(2) ? null : Kq(qq)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L769-L783` → after: `L969-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L969-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L969-L971) · [Before (L769-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L769-L783)

```diff
-     class qz {
-       constructor(zz, uz, bz, Ez) {
-         this.settings = zz, this.xd = uz, this.targets = bz, this.base = void 0, this.base = az(Ez)
-       }
-       update(zz, uz, bz) {
-         var Ez;
-         const nz = this.settings;
-         (0, tz.i)(nz.position, bz.position), mz(nz.position, nz.lookDirection, null !== (Ez = nz.lookAt) && void 0 !== Ez ? Ez : this.xd.localPlayerId, this.targets, this.base), uz.apply(this.base, bz), bz.fov = Fz(nz, this.xd)
-       }
-       continueFrom(zz) {
-         zz instanceof qz && (0, nz.j)(zz.base, this.base)
-       }
-       reset(zz) {
-         Vz(this.base, zz)
-       }
+ 
+     function BE(qq) {
+       return qq.long()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L785-L840` → after: `L973-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L973-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L973-L984) · [Before (L785-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L785-L840)

```diff
-     class hz {
-       constructor(zz, uz, bz, Ez) {
-         this.settings = zz, this.xd = uz, this.targets = bz, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.ht = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
-       }
-       update(zz, uz, bz) {
-         var Ez, nz, iz;
-         const lz = this.settings,
-           Mz = null !== (Ez = lz.target) && void 0 !== Ez ? Ez : this.xd.localPlayerId,
-           Hz = this.targets.feetPosition(Mz);
-         let Oz = !1;
-         Hz && (Oz = this.foundFeet && rz(this.lastFeet, Hz) > 32 + .1 * zz, (0, tz.i)(Hz, this.lastFeet), this.foundFeet = !0, this.placeGoal(Hz, Mz));
-         const pz = null !== (nz = lz.smoothMs) && void 0 !== nz ? nz : 0;
-         !this.started || pz < 1 || Oz ? ((0, tz.i)(this.goal, this.smoothed), this.ht.fill(0), this.started = !0) : Zz(this.smoothed, this.ht, this.goal, pz, zz), Oz && (this.distance = -1), (0, tz.i)(this.smoothed, bz.position);
-         const dz = !0 === lz.avoidTerrain ? this.pullIn(Mz, zz, bz) : 1;
-         let Rz = this.goal;
-         if ("target" === lz.offsetSpace) Rz = bz.position;
- ... (40 more removed lines; see GitHub link above)
+ 
+     function WE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return qq.DN(BE)
+       }(qq)
+     }
+ 
+     function NE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           Iq: qq.str(),
+           eq: qq.long()
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L842-L843` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L986) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L842-L843)

```diff
-         this.goal[0] = zz[0] + Ez, this.goal[1] = zz[1] + bz[1], this.goal[2] = zz[2] + nz
-       }
+       }(qq)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L845-L856` → after: `L988-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L988-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L988-L998) · [Before (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L845-L856)

```diff
-     class Uz {
-       constructor(zz, uz, bz, Ez) {
-         var nz, iz;
-         this.settings = zz, this.xd = uz, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = zz.keyframes.length > 0 ? new Pz(zz.keyframes, null === (nz = zz.smooth) || void 0 === nz || nz, null !== (iz = zz.loop) && void 0  … [truncated]
-       }
-       update(zz, uz, bz) {
-         this.elapsedMs += zz;
-         const Ez = Fz(this.settings, this.xd);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Ez, this.base) : this.base.fov = Ez, (0, tz.i)(this.base.position, bz.position), bz.fov = this.base.fov, uz.apply(this.base, bz)
-       }
-       continueFrom(zz) {
-         zz instanceof Uz && (0, Ez.w)(zz.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = zz.elapsedMs, (0, tz.g)(zz.base, this.base))
+ 
+     function aE(qq) {
+       const Eq = qq.index(3);
+       return 0 === Eq ? null : 1 === Eq ? qq.str() : Mq(qq)
+     }
+ 
+     function VE(qq) {
+       return {
+         yY: qq.str(),
+         tY: qq.str(),
+         rY: qq.str()
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L858-L859` → after: `L1000-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1000-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1000-L1007) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L858-L859)

```diff
-       reset(zz) {
-         Vz(this.base, zz), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+     }
+ 
+     function dE(qq) {
+       return {
+         Ag: qq.str(),
+         cg: Tq(qq),
+         ug: Tq(qq),
+         Bg: Uq(qq)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L863-L864` → after: `L1011-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1011-L1012) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L863-L864)

```diff
-     function cz(zz, uz) {
-       return (0, Ez.x)(zz, uz)
+     function jE(qq) {
+       return qq.DN(dE)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L866-L888` → after: `L1014-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1014-L1020) · [Before (L866-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L866-L888)

```diff
-     class gz {
-       constructor(zz, uz, bz) {
-         var Ez;
-         this.settings = zz, this.xd = uz, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
-         const nz = null !== bz && bz.settings.mode === zz.mode,
-           iz = nz ? bz.pose : uz.getDefaultPose();
-         this.pose = (0, tz.g)(iz, (0, tz.m)()), this.lastGoodPose = (0, tz.g)(nz ? bz.lastGoodPose : iz, (0, tz.m)()), this.look = new Kz(zz.playerLook), this.targets = null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.targets) && void 0 !== Ez ? Ez : new Gz(uz);
-         const lz = (0, tz.g)(iz, (0, tz.m)());
-         nz && bz.look.unapply(lz, lz), this.mode = function(zz, uz, bz, Ez) {
-           switch (zz.mode) {
-             case "fixed":
-               return new qz(zz, uz, bz, Ez);
-             case "follow":
-               return new hz(zz, uz, bz, Ez);
-             case "path":
-               return new Uz(zz, uz, bz, Ez);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function HE(qq) {
+       return {
+         sl: qq.str(),
+         x: qq.long(),
+         y: qq.long(),
+         z: qq.long()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L893` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1025) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L893)

```diff
-       return [0, 0, zz[2], zz[3]]
+       return qq.DN(HE)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L895-L975` → after: `L1027-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1027-L1033) · [Before (L895-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L895-L975)

```diff
-     class yz {
-       constructor(zz) {
-         this.xd = zz, this.settings = {
-           mode: "default"
-         }, this.pending = null, this.fade = new Mz, this.shot = null, this.blend = null, this.mixed = (0, tz.m)(), this.output = (0, tz.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
-           length: 3
-         }, (() => [0, 0, 0]))
-       }
-       setSettings(zz) {
-         const uz = (0, Hz.d)(zz);
-         if ((0, Ez.w)(uz, this.pending ? this.pending.settings : this.settings)) return;
-         const bz = cz(this.settings, uz);
-         if (void 0 !== uz.transition && !bz) return this.pending = {
-           settings: uz,
-           shot: "default" === uz.mode ? null : new gz(uz, this.xd, null)
-         }, void this.fade.fadeOut(uz.transition);
- ... (65 more removed lines; see GitHub link above)
+ 
+     function PE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           aO: qq.float(),
+           VO: qq.long(),
+           dO: qq.long()
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L978-L985` → after: `L1049-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1049-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1049-L1060) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L978-L985)

```diff
-       writeOutput(zz) {
-         const uz = this.output;
-         (0, tz.n)(zz) ? (0, tz.g)(zz, uz) : this.hasOutput || (0, tz.g)(this.xd.getDefaultPose(), uz), uz.pitch = (0, nz.i)(uz.pitch);
-         const bz = this.xd.getDefaultFov(),
-           iz = Number.isFinite(bz) && bz > 0 && bz < 180,
-           lz = iz ? Math.min(Ez.m.minFov, bz) : Ez.m.minFov,
-           Mz = iz ? Math.max(Ez.m.maxFov, bz) : Ez.m.maxFov;
-         return uz.fov = Number.isFinite(uz.fov) ? Math.min(Mz, Math.max(lz, uz.fov)) : Mz, this.hasOutput = !0, uz
+     }
+ 
+     function yE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return qq.DN(QE)
+       }(qq)
+     }
+ 
+     function tE(qq) {
+       return {
+         gO: qq.str(),
+         YO: yE(qq)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1005` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1064) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1005)

```diff
-     function iz() {
+     function rE(qq) {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1007-L1010` → after: `L1066-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1066-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1066-L1067) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1007-L1010)

```diff
-         position: [0, 0, 0],
-         heading: 0,
-         pitch: 0,
-         fov: 0
+         blockName: qq.str(),
+         frequency: qq.float()
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1014-L1015` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1071-L1072) · [Before (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1014-L1015)

```diff
-     function lz(zz, uz) {
-       return uz[0] = zz[0], uz[1] = zz[1], uz[2] = zz[2], uz
+     function vE(qq) {
+       return qq.DN(rE)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1018-L1019` → after: `L1075-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1075-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1075-L1081) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1018-L1019)

```diff
-     function Mz(zz, uz) {
-       return lz(zz.position, uz.position), uz.heading = zz.heading, uz.pitch = zz.pitch, uz.fov = zz.fov, uz
+     function hE(qq) {
+       return {
+         oO: qq.str(),
+         PO: qq.str(),
+         frequency: qq.float(),
+         QO: vE(qq)
+       }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1022-L1023` → after: `L1084-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1084-L1085) · [Before (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1022-L1023)

```diff
-     function tz(zz, uz) {
-       return Array.isArray(zz) && zz.length === uz && zz.every(Number.isFinite)
+     function nE(qq) {
+       return qq.DN(hE)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1027` → after: `L1089-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1089-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1089-L1096) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1027)

```diff
-       return tz(zz.position, 3) && Number.isFinite(zz.heading) && Number.isFinite(zz.pitch) && Number.isFinite(zz.fov)
+       return {
+         blockName: qq.str(),
+         radius: qq.long(),
+         vO: qq.long(),
+         Cl: qq.long(),
+         Il: qq.long(),
+         hO: qq.float()
+       }
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1030-L1032` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1099-L1100) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1030-L1032)

```diff
-     function Oz(zz, uz, bz, nz, iz) {
-       for (let Ez = 0; Ez < 3; Ez++) iz.position[Ez] = zz.position[Ez] + (uz.position[Ez] - zz.position[Ez]) * nz;
-       return iz.heading = (0, Ez.t)(zz.heading + bz * nz), iz.pitch = zz.pitch + (uz.pitch - zz.pitch) * nz, iz.fov = zz.fov + (uz.fov - zz.fov) * nz, iz
+     function iE(qq) {
+       return qq.DN(bE)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1045-L1046` → after: `L1103-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1103-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1103-L1112) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1045-L1046)

```diff
-     function Mz(zz, uz, bz, Ez) {
-       return Number.isFinite(zz) ? Math.min(bz, Math.max(uz, zz)) : Ez
+     function ZE(qq) {
+       return {
+         Cl: qq.long(),
+         Il: qq.long(),
+         el: qq.long(),
+         Dl: qq.bool(),
+         qO: tE(qq),
+         jO: nE(qq),
+         tO: iE(qq)
+       }
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1049-L1050` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1115-L1116) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1049-L1050)

```diff
-     function tz(zz, uz, bz) {
-       return void 0 !== zz && Number.isFinite(zz) ? Math.min(bz, Math.max(uz, zz)) : void 0
+     function fE(qq) {
+       return qq.DN(ZE)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1054-L1055` → after: `L1120-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1120-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1120-L1125) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1054-L1055)

```diff
-       const uz = Ez.m.maxCoordinate;
-       return [Math.min(uz, Math.max(-uz, zz[0])), Math.min(uz, Math.max(-uz, zz[1])), Math.min(uz, Math.max(-uz, zz[2]))]
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           name: qq.str(),
+           ZO: Tq(qq)
+         }
+       }(qq)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1059` → after: `L1129-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1129-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1129-L1134) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1059)

```diff
-       return "string" === typeof zz ? zz : (0, nz.r)(zz, 3) ? Hz(zz) : void 0
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           terrain: ME(qq),
+           fO: iE(qq)
+         }
+       }(qq)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1064` → after: `L1138-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1138-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1138-L1202) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1064)

```diff
-       return "string" === typeof zz && pz.test(zz)
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           layers: fE(qq),
+           nO: TE(qq)
+         }
+       }(qq)
+     }
+   },
+   40329: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       C: () => iq,
+       G: () => Pq,
+       H: () => Qq,
+       I: () => dq,
+       M: () => hq,
+       O: () => fq,
+ ... (49 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1068-L1072` → after: `L1206-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1206-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1206-L1209) · [Before (L1068-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1068-L1072)

```diff
-       const uz = [];
-       if (!Array.isArray(zz)) return uz;
-       for (const bz of zz.slice(0, Ez.m.maxFrameTargets)) {
-         const zz = Oz(bz);
-         void 0 === zz || "string" === typeof zz && !dz(zz) || uz.push(zz)
+       if ("string" !== typeof qq) return qq;
+       for (let Eq = 0; Eq < qq.length; Eq++) {
+         const gq = qq.charCodeAt(Eq);
+         if (gq >= 55296 && gq <= 57343) return Aq.decode(xq.encode(qq))
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1078-L1081` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1217) · [Before (L1078-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1078-L1081)

```diff
-       if (!(0, nz.r)(zz, 3)) return;
-       const uz = Math.max(Math.abs(zz[0]), Math.abs(zz[1]), Math.abs(zz[2])),
-         bz = Math.hypot(zz[0] / uz, zz[1] / uz, zz[2] / uz);
-       return 0 === uz || uz * bz < Ez.m.minDirectionLength ? void 0 : [zz[0] / uz / bz, zz[1] / uz / bz, zz[2] / uz / bz]
+       return qq
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1085` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1222) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1085)

```diff
-       if (void 0 !== zz) return "string" === typeof zz ? iz.includes(zz) ? zz : void 0 : (0, nz.r)(zz, 4) ? [Mz(zz[0], 0, 1, 0), Mz(zz[1], Ez.m.minEasingY, Ez.m.maxEasingY, 0), Mz(zz[2], 0, 1, 1), Mz(zz[3], Ez.m.minEasingY, Ez.m.maxEasingY, 1)] : "linear"
+       return null === qq || "object" !== typeof qq ? qq : [mq(qq.Oc), mq(qq.mc)]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1089-L1093` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1226) · [Before (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1089-L1093)

```diff
-       if (zz) return {
-         maxYaw: Mz(zz.maxYaw, 0, Ez.m.maxPlayerLook, 0),
-         maxPitch: Mz(zz.maxPitch, 0, Ez.m.maxPlayerLook, 0),
-         returnMs: tz(zz.returnMs, 0, Ez.m.maxReturnMs)
-       }
+       return null === qq || "object" !== typeof qq ? qq : [Oq(qq.Uq, cq), Oq(qq.Nu, cq)]
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1098-L1107` → after: `L1230-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1230-L1231) · [Before (L1098-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1098-L1107)

```diff
-       var uz;
-       if ("object" !== typeof zz || null === zz) return;
-       const bz = Ez.m.maxTransitionMs,
-         nz = Ez.m.minTransitionFadeMs;
-       return {
-         colour: "string" === typeof zz.colour && wz.test(zz.colour) ? zz.colour : Ez.f,
-         outMs: Mz(zz.outMs, nz, bz, nz),
-         holdMs: Mz(null !== (uz = zz.holdMs) && void 0 !== uz ? uz : 0, 0, bz, 0),
-         inMs: Mz(zz.inMs, nz, bz, nz)
-       }
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Hc), mq(Eq.oc)];
+       var Eq
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1111` → after: `L1235-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1235-L1236) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1111)

```diff
-       return !0 === zz || void 0
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.id, Eq.xu];
+       var Eq
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1115-L1117` → after: `L1240-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1240-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1240-L1241) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1115-L1117)

```diff
-       if ("object" !== typeof zz || null === zz) return !1;
-       const uz = zz.lookAt;
-       return Number.isFinite(zz.timeMs) && (0, nz.r)(zz.position, 3) && (void 0 === uz || "string" === typeof uz || (0, nz.r)(uz, 3))
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.nE, mq(Eq.bE), Eq.iE, mq(Eq.ME), Eq.pE, Eq.GE, Eq.Wm, mq(Eq.Nm), mq(Eq.am)];
+       var Eq
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1121-L1129` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1245-L1246) · [Before (L1121-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1121-L1129)

```diff
-       return {
-         ...zz,
-         timeMs: Mz(zz.timeMs, 0, Ez.m.maxPathMs, 0),
-         position: Hz(zz.position),
-         lookAt: Oz(zz.lookAt),
-         lookDirection: Zz(zz.lookDirection),
-         fov: tz(zz.fov, Ez.m.minFov, Ez.m.maxFov),
-         easing: Rz(zz.easing)
-       }
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Yc, cq), Eq.lc];
+       var Eq
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1133-L1140` → after: `L1250-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1250-L1251) · [Before (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1133-L1140)

```diff
-       const uz = [];
-       if (!Array.isArray(zz)) return uz;
-       for (const bz of zz.slice(0, Ez.m.maxKeyframes)) {
-         if (!sz(bz)) continue;
-         const zz = rz(bz);
-         (0 === uz.length || zz.timeMs > uz[uz.length - 1].timeMs) && uz.push(zz)
-       }
-       return uz
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.tc, (qq => mq(qq))), mq(Eq.vc), Eq.hc];
+       var Eq
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1144-L1185` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1255-L1256) · [Before (L1144-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1144-L1185)

```diff
-       if ("object" !== typeof zz || null === zz) return {
-         mode: "default"
-       };
-       const uz = {
-           blendInMs: tz(zz.blendInMs, 0, Ez.m.maxBlendInMs),
-           blendEasing: Rz(zz.blendEasing),
-           transition: Xz(zz.transition),
-           letterbox: fz(zz.letterbox),
-           hideHud: fz(zz.hideHud)
-         },
-         bz = {
-           mode: "default",
-           ...uz
-         };
-       if ("default" === zz.mode || "fixed" === zz.mode && !(0, nz.r)(zz.position, 3)) return bz;
-       const iz = {
- ... (26 more removed lines; see GitHub link above)
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Au, cq), mq(Eq.cu), Eq.uu];
+       var Eq
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1195-L1196` → after: `L1260-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1260-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1260-L1261) · [Before (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1195-L1196)

```diff
-       const uz = /(\d*\.?\d+)px/.exec(zz);
-       return uz ? Number(uz[1]) : null
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.tY), mq(Eq.rY)];
+       var Eq
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1200` → after: `L1265-L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1265-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1265-L1266) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1200)

```diff
-       return zz.split(/[\s,]+/).pop()
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Dc)];
+       var Eq
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1202-L1328` → after: `L1268-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1268-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1268-L1270) · [Before (L1202-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1202-L1328)

```diff
-     let lz = !1;
-     const Mz = {
-       debug: !1,
-       align: "center",
-       vAlign: "middle",
-       fontSize: 14,
-       fontWeight: "",
-       fontStyle: "",
-       fontVariant: "",
-       font: "Arial",
-       lineHeight: null,
-       justify: !1,
-       drawText: function(zz, uz, Ez, Mz, tz, Hz) {
-         if (tz <= 0 || Hz <= 0 || this.fontSize <= 0) return {
-           height: 0
-         };
- ... (111 more removed lines; see GitHub link above)
+ 
+     function Qq(qq) {
+       return mq(qq)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1330-L1333` → after: `L1272-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1272-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1272-L1275) · [Before (L1330-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1330-L1333)

```diff
-   },
-   38474: (zz, uz, bz) => {
-     function Ez(zz, uz) {
-       return uz.set(zz), uz
+ 
+     function yq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Sc), mq(Eq.Gc), mq(Eq.Oc), mq(Eq.mc)];
+       var Eq
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1357-L1364` → after: `L1278-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1278-L1279) · [Before (L1357-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1357-L1364)

```diff
-     function Oz(zz, uz, bz) {
-       if ("string" !== typeof zz) return uz;
-       try {
-         const bz = JSON.parse(zz);
-         return bz && "object" === typeof bz ? bz : uz
-       } catch (Ez) {
-         return void 0 !== bz && console.error(`Couldn't parse ${bz}`, Ez), uz
-       }
+     function tq(qq) {
+       return Bq(qq)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1368` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1283) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1368)

```diff
-       return Oz(zz, null, "a leaderboard's rows")
+       return Bq(qq)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1371-L1376` → after: `L1286-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1286-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1286-L1288) · [Before (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1371-L1376)

```diff
-     function dz(zz, uz) {
-       var bz, Ez;
-       return null !== uz && void 0 !== uz ? uz : {
-         status: null !== (bz = zz.status) && void 0 !== bz ? bz : "loading",
-         entries: null !== (Ez = zz.entries) && void 0 !== Ez ? Ez : []
-       }
+     function vq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.um)];
+       var Eq
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1379-L1380` → after: `L1291-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1291-L1292) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1379-L1380)

```diff
-     function Fz(zz, uz) {
-       return "number" === typeof zz && Number.isFinite(zz) && zz > 0 ? zz : uz
+     function hq(qq) {
+       return qq
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1383-L1495` → after: `L1295-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1295-L1297) · [Before (L1383-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1383-L1495)

```diff
-     function Zz(zz, uz) {
-       const bz = Fz(zz.size, 1);
-       let Ez = Fz(zz.width, Fz(2.5 * bz, 2.5)),
-         nz = Fz(zz.height, Fz(3.75 * bz, 3.75));
-       Number.isFinite(iz * nz / Ez) && Number.isFinite(lz * Ez / nz) || (Ez = 2.5, nz = 3.75);
-       const Mz = nz / Ez,
-         tz = Math.max(1, Math.min(iz, uz / Mz));
-       return {
-         width: Ez,
-         height: nz,
-         layoutWidth: Math.max(iz, lz / Mz),
-         layoutHeight: Math.max(lz, iz * Mz),
-         pixelWidth: Math.round(tz),
-         pixelHeight: Math.round(Math.max(1, Math.min(uz, tz * Mz)))
-       }
-     }
- ... (97 more removed lines; see GitHub link above)
+     function nq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.KA), mq(Eq.CA)];
+       var Eq
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1498-L1499` → after: `L1300-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1300-L1301) · [Before (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1498-L1499)

```diff
-     function Kz(zz, uz) {
-       return Array.isArray(zz) ? zz.slice(0, uz).filter((zz => zz && Number.isFinite(zz.rank) && Number.isFinite(zz.value))) : []
+     function bq(qq) {
+       return mq(qq)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1502-L1509` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1304-L1305) · [Before (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1502-L1509)

```diff
-     function wz(zz, uz) {
-       const bz = [];
-       let Ez = !1;
-       return zz.forEach(((nz, iz) => {
-         if (null !== uz && nz.value === uz.value) return void bz.push(uz.rank);
-         const lz = iz > 0 && nz.value === zz[iz - 1].value;
-         lz || (Ez = 0 === iz && 1 !== nz.rank), bz.push(lz && !Ez ? bz[iz - 1] : nz.rank)
-       })), bz
+     function iq(qq) {
+       return Wq(qq)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1520` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1309) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1520)

```diff
-       return Array.from(zz).length
+       return Wq(qq)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1524-L1538` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1313-L1314) · [Before (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1524-L1538)

```diff
-       const uz = [""];
-       let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         nz = "";
-       const iz = () => {
-         uz.push(""), bz = 0, nz = ""
-       };
-       for (const lz of zz.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(lz)) iz();
-         else if (/^\s+$/.test(lz)) nz += lz;
-       else if (lz.length > 0) {
-         const zz = Array.from(lz);
-         bz > 0 && bz + nz.length + zz.length > Ez && iz(), uz[uz.length - 1] += nz, bz += nz.length, nz = "";
-         for (const nz of zz) bz >= Ez && iz(), uz[uz.length - 1] += nz, bz++
-       }
-       return uz[uz.length - 1] += nz, uz
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Bm)];
+       var Eq
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1550-L1556` → after: `L1318-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1318-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1318-L1326) · [Before (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1550-L1556)

```diff
-       if (!zz) return [...iz];
-       try {
-         const [uz, bz, Ez] = nz()(zz).rgb().array();
-         return [uz / 255, bz / 255, Ez / 255]
-       } catch (uz) {
-         return console.warn(`Invalid groundArrowPath colour "${zz}":`, uz), [...iz]
-       }
+       return (uq ??= (0, Yq.e)().map((qq => qq.name)), uq).map((Eq => {
+         return "string" === typeof(gq = qq[Eq]) ? mq(gq) : Oq(gq, cq);
+         var gq
+       }))
+     }
+ 
+     function Tq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.ou, Eq.Pu, Eq.Qu];
+       var Eq
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1559` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1329) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1559)

```diff
-   33745: (zz, uz, bz) => {
+   9464: (qq, Eq, gq) => {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1562-L1565` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1332) · [Before (L1562-L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1562-L1565)

```diff
-       f: () => Mz,
-       i: () => lz,
-       k: () => nz,
-       o: () => Ez
+       d: () => Oq
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1567-L1657` → after: `L1334-L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1334-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1334-L1336) · [Before (L1567-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1567-L1657)

```diff
-     const Ez = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
-         },
-         interstellar: {
-           type: "custom",
- ... (75 more removed lines; see GitHub link above)
+     var Yq = gq(9433);
+     const lq = "Air",
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1659` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1338) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1659)

```diff
-   38540: (zz, uz, bz) => {
+   39174: (qq, Eq, gq) => {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1662-L1668` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1341) · [Before (L1662-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1662-L1668)

```diff
-       f: () => pz,
-       i: () => Ez,
-       m: () => tz,
-       q: () => nz,
-       u: () => Hz,
-       w: () => Mz,
-       x: () => lz
+       c: () => xq
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1670-L1672` → after: `L1343-L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1343-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1343-L1346) · [Before (L1670-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1670-L1672)

```diff
-     const Ez = ["linear", "easeIn", "easeOut", "easeInOut"],
-       nz = ["movement", "camera", "cursor"],
-       iz = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];
+     var Yq = gq(307),
+       lq = gq(4283);
+     const Oq = new Set(lq.o),
+       mq = new Map;
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L1675` → after: `L1349-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1349-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/200.js#L1349-L1352) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/200.js#L1675)

```diff
-       return Mz(zz, uz, iz)
+       let gq = mq.get(Eq);
+       void 0 === gq && (gq = new Map, mq.set(Eq, gq));
+       let lq = gq.get(qq);
+       return void 0 === lq && (lq = `${qq}${(0,Yq.E)(Eq)}`, gq.set(qq, lq)), lq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/201.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/201.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/201.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/201.js#L4-L15)

```diff
-   33750: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       animatedBlockTextures: () => tz,
-       armourAtlasUrl: () => lz,
-       averageColors: () => Hz,
-       blockAtlasUrls: () => iz,
-       blockAtlasWidth: () => Ez,
-       buildHash: () => pz,
-       builtTextureIndexFingerprint: () => Oz,
-       imagesPerAtlas: () => nz,
-       outputHash: () => dz,
-       rotatedBlockTextures: () => Mz
+   39082: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L17-L305` → after: `L8-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L8-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/201.js#L8-L1259) · [Before (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/201.js#L17-L305)

```diff
-     const Ez = 8,
-       nz = [256, 256, 256, 256, 256, 256, 114],
-       iz = [bz(33753), bz(33762), bz(33768), bz(33771), bz(33778), bz(33783), bz(33788)],
-       lz = bz(33797),
-       Mz = {
-         "alloy_kiln_top[rot[1": bz(33804),
-         "alloy_kiln_top[rot[2": bz(33811),
-         "alloy_kiln_top[rot[3": bz(33814),
-         "alloy_kiln_top[rot[4": bz(33818),
-         "auto_bench_top[rot[1": bz(33822),
-         "auto_bench_top[rot[2": bz(33824),
-         "auto_bench_top[rot[3": bz(33829),
-         "auto_bench_top[rot[4": bz(33831),
-         "belt_tunnel_exit_top[rot[1": bz(33839),
-         "belt_tunnel_exit_top[rot[2": bz(33841),
-         "belt_tunnel_exit_top[rot[3": bz(33844),
- ... (273 more removed lines; see GitHub link above)
+     class Yq {
+       constructor(qq, Eq) {
+         this.read = qq, this.apply = Eq, this.release = null
+       }
+       turn(qq, Eq) {
+         const gq = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: Eq,
+           forcedCameraDirection: [qq[0], qq[1], qq[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+           }), Eq + 100),
+           transitionMs: gq
+         }
+       }
+ ... (1236 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L307-L521` → after: `L1261-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L1261-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/201.js#L1261-L1303) · [Before (L307-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/201.js#L307-L521)

```diff
-       tz = {
-         "Active Radar2": bz(35354),
-         "Active Radar3": bz(35358),
-         "Active Radar4": bz(35363),
-         "Active Radar5": bz(35365),
-         "Active Radar|meta|rot22": bz(35354),
-         "Active Radar|meta|rot23": bz(35358),
-         "Active Radar|meta|rot24": bz(35363),
-         "Active Radar|meta|rot25": bz(35365),
-         "Active Radar|meta|rot32": bz(35354),
-         "Active Radar|meta|rot33": bz(35358),
-         "Active Radar|meta|rot34": bz(35363),
-         "Active Radar|meta|rot35": bz(35365),
-         "Active Radar|meta|rot42": bz(35354),
-         "Active Radar|meta|rot43": bz(35358),
-         "Active Radar|meta|rot44": bz(35363),
- ... (199 more removed lines; see GitHub link above)
+       drawLines: function(qq, Eq, gq, lq, Oq, mq, xq) {
+         const Aq = gq + Oq,
+           cq = lq + mq;
+         let uq, Bq = lq + mq / 2 + xq / 2;
+         "right" === this.align ? (uq = Aq, qq.textAlign = "right") : "left" === this.align ? (uq = gq, qq.textAlign = "left") : (uq = gq + Oq / 2, qq.textAlign = "center");
+         for (const Yq of Eq) {
+           qq.measureText(Yq).width >= Oq && (Eq = Eq.replace(Yq, ""))
+         }
+         Eq = (0, Yq.W)(Eq);
+         const Wq = [],
+           Nq = Eq.split("\n"),
+           aq = this.justify ? qq.measureText("\u200a").width : 0;
+         Nq.forEach((Eq => {
+           let gq = qq.measureText(Eq).width;
+           if (gq <= Oq) Wq.push(Eq);
+           else {
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L523-L9828` → after: `L1305-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L1305-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/201.js#L1305-L1311) · [Before (L523-L9828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/201.js#L523-L9828)

```diff
-       Hz = {
-         Unloaded: [
-           [244, 0, 255],
-           [0, 0, 0]
-         ],
-         Dirt: [
-           [133, 98, 77],
-           [139, 102, 80],
-           [127, 92, 74]
-         ],
-         "Messy Dirt": [
-           [123, 87, 59],
-           [129, 90, 62],
-           [118, 81, 57]
-         ],
-         "Grass Block": [
- ... (9290 more removed lines; see GitHub link above)
+       getTextHeight: function(qq, Eq) {
+         const gq = qq.textBaseline;
+         qq.textBaseline = "bottom";
+         const {
+           actualBoundingBoxAscent: Yq
+         } = qq.measureText(Eq);
+         return qq.textBaseline = gq, Yq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L9830-L10900` → after: `L1313-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L1313-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/201.js#L1313-L1712) · [Before (L9830-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/201.js#L9830-L10900)

```diff
-       Oz = "32451195",
-       pz = "84e1e38bd20a637b8ffd875c089f7c145b9c82379a201b95c154d18ffae87e5f",
-       dz = "67231c1c2e54042429a99af9811187cf2ead2b95e3f6763f2cff2df08688c359"
-   },
-   35354: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tWVsQrCQAyG+ziCqBR9J8FNF0FxFJ0ddHEsjoKbm+DsO1W+QsIlUlu5Q3RISf/+10v+JHfZbLEuscl0aUzwjMfpMSo3l3453ncqwwerCLABVkXPGBjfKgKrPAEsEYFAwsDCgDWLxjQbCfxyXnRVB3ww1QHA … [truncated]
-   },
-   35358: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR42q1VvQrCMBDu4wiiUvSdBDddBMVRdHbQxbE4Cm5ugrPvFPkqF+7Say7EDNeQy0e/n6NptdrsHWqx3IqifoXH/DwQdXiM3e0z+wGARmPXjEShh7MWAHQIwJvSAVEKU2SSTROwbobta4mC9j4HNI73iTs9ay8S … [truncated]
-   },
-   35363: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tVVMQrCQBDMcwRRCfonwU4bQbEUrS20sQyWgp2dYO2fInMwy+4aL4YcosUcd5shmZ1MNtlssS6ByXRpwHqGZbzvlJtLvzw9RgHYoxYIYOOwKnoGqOFaIgKe6QmoBQKEaGFasHRR22YtYV50A3BrgGfxAcXt … [truncated]
-   },
-   35365: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR42q1VuwrCQBDM5wiiEvSfBDttBMVStLbQxjJYCnZ2grX/dDIHc9x7w+WKTcjusDszS+6aze6oEKv13gnmGzwev4U6vaZqeR05oQFAo3joJk4gh5oGAO0D0LU/IDtCJNlLpghA+203Nq35bXzAB8ld3q06P2c6 … [truncated]
-   },
- ... (1055 more removed lines; see GitHub link above)
+       justifyLine: function(qq, Eq, gq, Yq, lq) {
+         const Oq = Eq.trim(),
+           mq = qq.measureText(Oq).width,
+           xq = Oq.split(/\s+/).length - 1,
+           Aq = Math.floor((lq - mq) / gq);
+         if (xq <= 0 || Aq <= 0) return Oq;
+         const cq = Math.floor(Aq / xq);
+         let uq = Aq - xq * cq,
+           Bq = [];
+         for (let Wq = 0; Wq < cq; Wq++) Bq.push(Yq);
+         Bq = Bq.join("");
+         return Oq.replace(/\s+/g, (qq => {
+           const Eq = uq > 0 ? Bq + Yq : Bq;
+           return uq--, qq + Eq
+         }))
+       }
+ ... (384 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/202.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/202.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783)

#### 1. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/202.js#L4)

```diff
-   35762: (zz, uz, bz) => {
+   34302: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/202.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/202.js#L6)

```diff
-       WasmTextureWorker: () => Xz
+       animatedBlockTextures: () => Aq,
+       armourAtlasUrl: () => mq,
+       averageColors: () => cq,
+       blockAtlasUrls: () => Oq,
+       blockAtlasWidth: () => Yq,
+       buildHash: () => Bq,
+       builtTextureIndexFingerprint: () => uq,
+       imagesPerAtlas: () => lq,
+       outputHash: () => Wq,
+       rotatedBlockTextures: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L8-L308` → after: `L17-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/202.js#L17-L10900) · [Before (L8-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/202.js#L8-L308)

```diff
-     var Ez = bz(584),
-       nz = bz(2946),
-       iz = bz(35766),
-       lz = bz.n(iz);
- 
-     function Mz() {
-       return lz()('(()=>{var zz={d:(uz,bz)=>{for(var Ez in bz)zz.o(bz,Ez)&&!zz.o(uz,Ez)&&Object.defineProperty(uz,Ez,{enumerable:!0,get:bz[Ez]})},o:(zz,uz)=>Object.prototype.hasOwnProperty.call(zz,uz),r:zz=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(z … [truncated]
-     }
-     var tz = bz(35773),
-       Hz = bz(2979),
-       Oz = bz(3016),
-       pz = bz(3013),
-       dz = bz(2958);
- 
-     function Fz(zz) {
-       return "" === zz ? [] : zz.split("\0")
- ... (285 more removed lines; see GitHub link above)
+     const Yq = 8,
+       lq = [256, 256, 256, 256, 256, 256, 114],
+       Oq = [gq(34305), gq(34314), gq(34317), gq(34324), gq(34330), gq(34333), gq(34336)],
+       mq = gq(34343),
+       xq = {
+         "alloy_kiln_top[rot[1": gq(34345),
+         "alloy_kiln_top[rot[2": gq(34351),
+         "alloy_kiln_top[rot[3": gq(34355),
+         "alloy_kiln_top[rot[4": gq(34364),
+         "auto_bench_top[rot[1": gq(34373),
+         "auto_bench_top[rot[2": gq(34381),
+         "auto_bench_top[rot[3": gq(34387),
+         "auto_bench_top[rot[4": gq(34390),
+         "belt_tunnel_exit_top[rot[1": gq(34394),
+         "belt_tunnel_exit_top[rot[2": gq(34401),
+         "belt_tunnel_exit_top[rot[3": gq(34407),
+ ... (10868 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/203.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/203.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L4)

```diff
-   40710: (zz, uz, bz) => {
+   36325: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L6-L7)

```diff
-       loadGlbAsset: () => fu,
-       loadGlbTree: () => Xu
+       WasmTextureWorker: () => Hq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L9-L11` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L8-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L9-L11)

```diff
-     var Ez = bz(37335),
-       nz = bz(40719),
-       iz = bz(35766),
+     var Yq = gq(583),
+       lq = gq(3086),
+       Oq = gq(36328),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L15-L355` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L14) · [Before (L15-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L15-L355)

```diff
-       return lz()('(()=>{class zz extends Error{}function uz(uz,bz){const Ez=uz._malloc(bz);if(0===Ez)throw new zz(`Draco: the decoder\'s heap refused ${bz} bytes`);return Ez}function bz(zz){return{[zz.DT_FLOAT32]:[Float32Array,5126],[zz.DT_INT8]:[Int8Array,5120],[zz.DT_INT16]:[I … [truncated]
-     }
-     var tz = bz(96);
-     const Hz = 1e3;
-     let Oz = null,
-       pz = null;
-     const dz = [],
-       Fz = [];
-     let Zz = 0;
-     const Rz = {
-         decodes: 0,
-         workersStarted: 0,
-         mostWorkers: 0
-       },
-       Kz = function(zz, uz) {
-         const bz = zz ? Math.max(1, Math.min(Math.floor(.5 * zz), 4)) : 1;
- ... (325 more removed lines; see GitHub link above)
+       return mq()('(()=>{var qq={d:(Eq,gq)=>{for(var Yq in gq)qq.o(gq,Yq)&&!qq.o(Eq,Yq)&&Object.defineProperty(Eq,Yq,{enumerable:!0,get:gq[Yq]})},o:(qq,Eq)=>Object.prototype.hasOwnProperty.call(qq,Eq),r:qq=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(q … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L359-L375` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L23) · [Before (L359-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L359-L375)

```diff
-       const uz = zz.bufferView,
-         bz = 5125 === zz.componentType ? Uint32Array : Uint16Array,
-         Ez = uz.bytes.buffer,
-         nz = uz.bytes.byteOffset + (zz.byteOffset || 0);
-       return nz % bz.BYTES_PER_ELEMENT !== 0 ? new bz(Ez.slice(nz, nz + zz.count * bz.BYTES_PER_ELEMENT), 0) : new bz(Ez, nz, zz.count)
-     }
- 
-     function az(zz, uz) {
-       if (zz.min && zz.max) return [new Float64Array(zz.min), new Float64Array(zz.max)];
-       const bz = uz.find((zz => {
-           let {
-             kind: uz
-           } = zz;
-           return "position" === uz
-         })),
-         Ez = bz ? (0, Nz.g)(bz, zz.count) : new Float32Array(0);
- ... (1 more removed lines; see GitHub link above)
+       return "" === qq ? [] : qq.split("\0")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L379-L414` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L27-L28) · [Before (L379-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L379-L414)

```diff
-       const uz = zz.attributes.map((zz => {
-           var uz, bz;
-           let {
-             kind: Ez,
-             accessor: nz
-           } = zz;
-           const {
-             bufferView: iz,
-             numComponents: lz
-           } = nz;
-           if (!iz) {
-             return {
-               kind: Ez,
-               data: Pz(nz, (() => new Float32Array(lz * nz.count))),
-               offset: 0,
-               stride: 4 * lz,
- ... (20 more removed lines; see GitHub link above)
+       if ("" !== qq)
+         for (const Eq of qq.split("\n")) console.error(Eq)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L419-L544` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L32-L37) · [Before (L419-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L419-L544)

```diff
-       const bz = uz.attributes.map((zz => {
-         let {
-           kind: uz,
-           data: bz,
-           size: Ez,
-           byteOffset: nz,
-           byteStride: iz,
-           normalized: lz
-         } = zz;
-         return {
-           kind: uz,
-           data: bz,
-           offset: nz,
-           stride: iz,
-           components: Ez,
-           glType: 5120 + mz.indexOf(bz.constructor),
- ... (110 more removed lines; see GitHub link above)
+       return async function(qq, Eq) {
+         const gq = Object.keys(qq),
+           Yq = [],
+           lq = new Map,
+           Oq = new Uint32Array(gq.length);
+         for (const [mq, xq] of gq.entries()) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L546-L561` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L39-L41) · [Before (L546-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L546-L561)

```diff
-             primitive: bz
-           } = uz, Ez = bz.draco;
-           let nz = Ez ? zz.get(Ez.bufferView.index) : Promise.resolve(Vz(bz));
-           nz || (nz = Tz(bz, this.decode).then((zz => qz(bz, zz))), zz.set(Ez.bufferView.index, nz)), uz.geometry = await nz
-         })))
-       }
-       parentOf(zz) {
-         var uz;
-         return null !== (uz = this.parents.get(zz)) && void 0 !== uz ? uz : null
-       }
-       meshesUnder(zz) {
-         const uz = this.model.nodes.filter((zz => this.uses.has(zz)));
-         for (const Ez of uz) {
-           const uz = this.uses.get(Ez),
-             bz = uz.find((uz => uz.name === zz));
-           if (bz) return 1 === uz.length ? this.subtree(Ez) : this.own.get(Ez).includes(bz) ? [bz] : []
+             url: Eq
+           } = qq[xq];
+           lq.has(Eq) || (lq.set(Eq, Yq.length), Yq.push(Eq)), Oq[mq] = lq.get(Eq)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L621-L637` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L44-L46) · [Before (L621-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L621-L637)

```diff
-           url: this.imageUrl(lz),
-           noMipmap: ez(iz),
-           invertY: !1,
-           samplingMode: Dz(iz),
-           data: {
-             bytes: Mz.bytes,
-             mimeType: tz,
-             label: Hz,
-             context: `/textures/${Ez}`
-           },
-           sets: {
-             wrapU: Wz(iz.wrapS),
-             wrapV: Wz(iz.wrapT),
-             ...Oz,
-             coordinatesIndex: null !== (bz = null === nz || void 0 === nz ? void 0 : nz.texCoord) && void 0 !== bz ? bz : 0,
-             hasAlpha: uz
- ... (1 more removed lines; see GitHub link above)
+           sources: await Eq(Yq),
+           names: gq.join("\0"),
+           sourceOfName: Oq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L639-L663` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L48-L69) · [Before (L639-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L639-L663)

```diff
-       }
-     }
-     async function Cz(zz, uz, bz, Ez, nz, iz) {
-       let lz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const Mz = function(zz, uz, bz) {
-           return "string" !== typeof uz ? {
-             url: "",
-             rootUrl: zz,
-             name: bz()
-           } : uz ? uz.startsWith("data:") ? {
-             url: uz,
-             rootUrl: zz,
-             name: ""
-           } : zz ? {
-             url: zz + uz,
-             rootUrl: zz,
- ... (9 more removed lines; see GitHub link above)
+       }(qq, (async qq => {
+         const gq = await async function(qq, Eq) {
+           const gq = new AbortController,
+             Yq = () => {
+               gq.abort()
+             };
+           Eq.addEventListener("abort", Yq);
+           try {
+             const Eq = await Promise.all(qq.map((async qq => {
+               try {
+                 const Eq = await fetch(qq, {
+                   signal: gq.signal
+                 });
+                 if (!Eq.ok) throw new Error(`HTTP ${Eq.status}`);
+                 return [qq, await Eq.blob()]
+               } catch (Eq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L665-L682` → after: `L71-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L71-L76) · [Before (L665-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L665-L682)

```diff
-         }(bz, zz, nz),
-         tz = {};
-       uz.addPendingData(tz);
-       try {
-         const bz = Az(await async function(zz, uz) {
-             return "string" !== typeof uz ? uz : zz.url.startsWith("data:") ? (0, vz.q)(zz.url) : await (0, vz.t)(zz.url)
-           }(Mz, zz)),
-           tz = new Bz(bz, Ez, Mz, function(zz, uz) {
-             let {
-               rootUrl: bz,
-               name: Ez
-             } = zz;
-             return !bz.startsWith("file:") && Ez ? bz : `${bz}${uz()}/`
-           }(Mz, nz));
-         return await iz(tz), uz.importedMeshesFiles && (uz.loadingPluginName = "JA", lz && uz.importedMeshesFiles.push(Mz.url)), tz
-       } finally {
- ... (2 more removed lines; see GitHub link above)
+         }(qq.filter((qq => !qq.startsWith("data:"))), Eq);
+         return Promise.all(qq.map((qq => {
+           var Eq;
+           return (0, Wq.c)(null !== (Eq = gq.get(qq)) && void 0 !== Eq ? Eq : qq)
+         })))
+       }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L688-L694` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L79-L81) · [Before (L688-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L688-L694)

```diff
-     function uu(zz) {
-       if (null === zz || void 0 === zz || !zz.min || !zz.max) return null;
-       const [uz, bz, Ez] = zz.min, [nz, iz, lz] = zz.max, {
-         BoundingInfo: Mz,
-         ER: tz
-       } = (0, Yz.c)();
-       return new Mz(new tz(uz, bz, Ez), new tz(nz, iz, lz))
+     function dq(qq, Eq) {
+       let gq;
+       return qq instanceof uq.m ? gq = qq : (gq = new uq.m(Eq ? uq.k.Optional : uq.k.Error, (0, Bq.c)(qq)), qq instanceof Error && (gq.stack = `${gq.name}: ${gq.message}\n${qq.stack}`)), gq.code !== uq.k.Fetch && gq.code !== uq.k.Error && (0, cq.d)(gq.message), gq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L698` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L85) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L698)

```diff
-       (0, kz.c)(zz) || (zz.geometry && zz.geometry.useBoundingInfoFromGeometry ? zz._updateBoundingInfo() : zz.refreshBoundingInfo(!0, !0))
+       return qq.message ? new Error(`the texture worker failed: ${qq.message}`) : new uq.m(uq.k.Load, "the texture worker failed to start")
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L701-L734` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L88-L91) · [Before (L701-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L701-L734)

```diff
-       constructor(zz, uz) {
-         this.tK = zz, this.decode = uz, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(zz) {
-         let uz = this.viewData.get(zz.index);
-         return uz || (uz = this.bufferData.then((() => zz.bytes)), this.viewData.set(zz.index, uz)), uz
-       }
-       viewBuffer(zz) {
-         let uz = this.viewBuffers.get(zz.index);
-         return uz || (uz = this.viewBytes(zz).then((zz => new((0, Yz.c)().gZ)(this.tK.uR(), zz, !1))), this.viewBuffers.set(zz.index, uz)), uz
-       }
-       vertexBuffer(zz, uz) {
-         const {
-           kind: bz,
-           data: Ez
-         } = uz, nz = `${zz.index}:${bz}`;
- ... (18 more removed lines; see GitHub link above)
+       constructor(qq) {
+         this.worker = qq, this.failure = void 0, this.abandonStep = null, qq.addEventListener("error", (qq => {
+           qq.preventDefault(), this.failure ??= jq(qq)
+         }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L736-L746` → after: `L93-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L93-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L93-L101) · [Before (L736-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L736-L746)

```diff
-       load(zz, uz, bz) {
-         const Ez = (0, kz.c)(bz),
-           nz = zz => {
-             Ez || (bz._delayInfo = bz._delayInfo || [], -1 === bz._delayInfo.indexOf(zz) && bz._delayInfo.push(zz))
-           },
-           iz = uz.draco;
-         if (iz) {
-           for (const zz in iz.attributeIds) nz(zz);
-           let lz = this.dracoGeometry.get(iz.bufferView.index);
-           return lz || (lz = this.viewBytes(iz.bufferView).then((async () => {
-             let nz;
+       static async generateRequired(qq, Eq, gq, Oq) {
+         let mq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uq.d,
+           cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const Wq = (0, Aq.i)();
+         if (null !== Wq) throw dq(new uq.m(uq.k.Load, Wq), !1);
+         let Nq;
+         const jq = new AbortController;
+         try {
+           Nq = new Hq(function() {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L748` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L103) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L748)

```diff
-               nz = await Tz(uz, this.decode)
+               return new xq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L750` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L105) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L750)

```diff
-               throw new vz.j(`${zz}: ${tz instanceof Error?tz.message:String(tz)}`)
+               throw new uq.m(uq.k.Load, `the texture worker failed to start: ${(0,Bq.c)(qq)}`)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L752-L814` → after: `L107-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L107-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L107-L111) · [Before (L752-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L752-L814)

```diff
-             const iz = qz(uz, nz);
-             if (Ez) return iz;
-             const lz = uu(uz.position),
-               Mz = new((0, Yz.c)().MirroredGeometry)(bz.name, this.tK);
-             lz && (Mz._boundingInfo = lz, Mz.useBoundingInfoFromGeometry = !0), iz.indexData && Mz.setIndices(iz.indexData);
-             for (const zz of iz.vertexAttributes) Mz.setVerticesBuffer(this.layoutVertexBuffer(zz.data, zz), iz.vertexCount);
-             return Mz.link(iz), Mz
-           })), this.dracoGeometry.set(iz.bufferView.index, lz)), lz
-         }
-         const lz = [],
-           Mz = Vz(uz);
-         if (Ez) return bz.isUnIndexed = !Mz.indexData, bz.hasVertexAlpha = (0, zu.h)(uz), Promise.resolve(Mz);
-         const tz = new((0, Yz.c)().MirroredGeometry)(bz.name, this.tK),
-           {
-             indexData: Hz
-           } = Mz;
- ... (47 more removed lines; see GitHub link above)
+           }());
+           const Wq = (0, Aq.b)().catch((qq => {
+               throw new uq.m(uq.k.Load, function(qq) {
+                 return `the texture module didn't load (${(0,Bq.c)(qq)})`
+               }(qq))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L816-L817` → after: `L113-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L113-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L113-L185) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L816-L817)

```diff
-             Ez = uz.onContextRestoredObservable.add((() => {
-               for (const zz of [...this.geometries, ...this.meshes, ...this.textures]) zz._rebuild()
+             dq = (async () => {
+               const Oq = function(qq, Eq, gq) {
+                 const Yq = [],
+                   lq = new Map,
+                   Oq = qq => {
+                     let Eq = lq.get(qq);
+                     return void 0 === Eq && (Eq = Yq.length, Yq.push(qq), lq.set(qq, Eq)), Eq
+                   },
+                   mq = [],
+                   xq = [],
+                   Aq = new Map,
+                   cq = (qq, Eq) => {
+                     const gq = "object" === typeof qq && null !== qq && "animTextures" in qq ? qq.animTextures : void 0;
+                     if (!Array.isArray(gq) || !gq.every((qq => "string" === typeof qq))) throw new Error(`Block ${Eq} has textureInfo the encoding doesn't cover`);
+                     mq.push(gq.length, ...gq.map(Oq))
+                   };
+ ... (57 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L819-L820` → after: `L187-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L187-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L187-L198) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L819-L820)

```diff
-           this.release = () => {
-             zz.aT.remove(bz), uz.onContextRestoredObservable.remove(Ez)
+           return cq > 0 && (rq.blockAtlasPixels = function(qq, Eq) {
+             const gq = [];
+             for (let Yq = 0; Yq < Eq; Yq++) {
+               const lq = qq[Yq];
+               if (void 0 === lq) throw new Error(`the texture worker's sheet ${Yq} of ${Eq} didn't arrive`);
+               gq.push(lq)
+             }
+             return gq
+           }(tq, rq.imagesPerAtlas.length)), aq(hq), {
+             assets: rq,
+             layerCap: vq,
+             worker: Nq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L824-L853` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L205-L206) · [Before (L824-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L824-L853)

```diff
-       getNodes() {
-         return [...this.meshes, ...this.transformNodes]
-       }
-       addAllToScene() {
-         if (this.release) {
-           this.release(), this.release = null;
-           for (const zz of this.meshes) this.tK.vbz(zz);
-           for (const zz of this.materials) this.tK.addMaterial(zz);
-           for (const zz of this.geometries) this.tK.addGeometry(zz);
-           for (const zz of this.transformNodes) this.tK.addTransformNode(zz);
-           for (const zz of this.textures) this.tK.addTexture(zz)
-         }
-       }
-       dispose() {
-         var zz;
-         for (const uz of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
- ... (14 more removed lines; see GitHub link above)
+       async generateOptional() {
+         let qq;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L855-L856` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L208-L212) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L855-L856)

```diff
-           const uz = zz();
-           return this.container && (uz._parentContainer = this.container), uz
+           qq = await this.request({
+             type: "optional"
+           }, [])
+         } catch (Eq) {
+           throw dq(Eq, !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L858` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L214) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L858)

```diff
-           uz._blockEntityCollection = !1
+           this.terminate()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L861-L864` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L233) · [Before (L861-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L861-L864)

```diff
-       node(zz, uz) {
-         return this.create((() => this.lite ? uz ? (0, Mu.i)(this.lite, zz) : (0, Mu.t)(this.lite, zz) : uz ? new((0, Yz.c)().Mesh)(zz, this.tK) : new((0, Yz.c)().TransformNode)(zz, this.tK)))
-       }
-       async load() {
+       terminate() {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L866-L885` → after: `L235-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L235-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L235-L243) · [Before (L866-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L866-L885)

```diff
-         this.asset.model.json.nodes && this.createRoot();
-         const uz = this.lite ? null : this.tK,
-           bz = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.blockMaterialDirtyMechanism) && void 0 !== zz && zz;
-         let Ez;
-         uz && (uz.blockMaterialDirtyMechanism = !0);
-         try {
-           Ez = this.loadScene()
-         } finally {
-           null === uz || void 0 === uz || uz._forceBlockMaterialDirtyMechanism(bz)
-         }
-         await Ez;
-         const {
-           root: nz,
-           tree: iz
-         } = this;
-         nz && (nz.Zx(!0), iz.meshes.push(nz), iz.rootNodes.push(nz));
- ... (4 more removed lines; see GitHub link above)
+         this.worker.terminate(), null === (qq = this.abandonStep) || void 0 === qq || qq.call(this)
+       }
+       request(qq, Eq, gq) {
+         return new Promise(((Yq, lq) => {
+           if (void 0 !== this.failure) return void lq(this.failure);
+           let Oq = uq.q.None,
+             mq = 0,
+             xq = null;
+           const Aq = () => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L887-L919` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L245) · [Before (L887-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L887-L919)

```diff
-             iz.meshes.push(uz);
-             const zz = uz.geometry;
-             zz && !iz.geometries.includes(zz) && iz.geometries.push(zz)
-           }
-         }
-       }
-       createRoot() {
-         const zz = this.node("__root__", !0);
-         this.root = zz, zz.Zx(!1), this.tK.useRightHandedSystem || Zu(gz, zz)
-       }
-       loadScene() {
-         const zz = [];
-         for (const uz of this.asset.model.rootNodes) zz.push(this.loadNode(this.asset.model.nodes[uz], (zz => {
-           zz.parent = this.root
-         })));
-         return zz.push(Promise.resolve()), Promise.all(zz).then((() => {}))
- ... (17 more removed lines; see GitHub link above)
+             null === (qq = xq) || void 0 === qq || qq.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L921-L929` → after: `L247-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L247-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L247-L252) · [Before (L921-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L921-L929)

```diff
-         if (null === zz.mesh) {
-           const uz = this.node(cz(zz), !1);
-           this.nodeObjects.set(zz.index, uz), nz(uz)
-         } else {
-           const uz = this.asset.model.meshes[zz.mesh];
-           Ez.push(this.loadMesh(`/meshes/${uz.index}`, zz, uz, nz))
-         }
-         return Promise.all(Ez).then((() => {
-           for (const bz of null !== (uz = this.nodePrimitives.get(zz.index)) && void 0 !== uz ? uz : []) {
+           this.abandonStep = () => {
+             Aq(), lq(new Error("the texture worker was terminated"))
+           }, this.worker.onmessage = Eq => {
+             let {
+               data: cq
+             } = Eq;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L931` → after: `L254-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L254-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L254-L276) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L931)

```diff
-             bu(bz)
+             if ("progress" === cq.type) return Oq = cq.stage, mq = cq.wasmBytes, void(null === (Bq = xq) || void 0 === Bq || Bq.restart(Oq === uq.q.Generating ? uq.g : uq.j));
+             "sheet" === cq.type && gq ? gq(cq.sheet, cq.pixels) : (Aq(), "failed" === cq.type ? lq(cq.moduleLoad ? new uq.m(uq.k.Load, cq.reason) : function(qq, Eq) {
+               let {
+                 reason: gq,
+                 stack: Yq
+               } = qq;
+               const lq = new Error(oq(gq, Eq));
+               void 0 !== Yq && (lq.stack = Yq);
+               return lq
+             }(cq, mq)) : cq.type !== qq.type ? lq(new Error(`the texture worker answered ${cq.type} to ${qq.type}`)) : Yq(cq))
+           }, this.worker.onerror = qq => {
+             Aq(), lq(jq(qq))
+           }, this.worker.onmessageerror = () => {
+             Aq(), lq(new Error("the texture worker's answer couldn't be read"))
+           };
+           try {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1017-L1039` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L282-L283) · [Before (L1017-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1017-L1039)

```diff
-     function wu() {
-       iu.g.dracoDecodes = Rz.decodes, iu.g.dracoWorkersStarted = Rz.workersStarted, iu.g.dracoMostWorkers = Rz.mostWorkers
-     }
-     async function Xu(zz, uz, bz, nz, iz) {
-       try {
-         return await async function(zz, uz, bz, nz, iz, lz) {
-           var Mz;
-           let tz;
-           const Hz = null === (Mz = (0, Ou.g)()) || void 0 === Mz ? void 0 : Mz.oR,
-             Oz = null !== Hz && void 0 !== Hz && Hz.NR && uz === Hz.XT() ? Hz : null,
-             pz = iz && !Oz;
-           return await Cz(zz, uz, bz, nz, Ez.c, (zz => (tz = new Ru(uz, pz), new Ku(zz, uz, tz, pz, new Eu(uz, nz), lz, Oz).load())), !iz), tz
-         }(zz, uz, bz, rz, nz, iz)
-       } finally {
-         wu()
-       }
- ... (7 more removed lines; see GitHub link above)
+     function oq(qq, Eq) {
+       return Eq > 0 ? `${qq}, its module's memory ${Math.round(Eq/2**20)} MiB` : qq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1046` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L286) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1046)

```diff
-   40719: (zz, uz, bz) => {
+   36350: (qq, Eq, gq) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1048` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L288-L291) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1048)

```diff
-       e: () => lz
+       d: () => Yq,
+       g: () => lq,
+       j: () => Oq,
+       k: () => mq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1050-L1051` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L293-L294) · [Before (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1050-L1051)

```diff
-     var Ez = bz(128),
-       nz = bz(1197);
+     const Yq = 1024,
+       lq = 1024 * Yq;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1054` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L297) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1054)

```diff
-       return (0, Ez.d)() ? `https://${nz.c.discordDomain}/${zz.href}` : zz.href
+       return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1056-L1058` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L299-L301) · [Before (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1056-L1058)

```diff
-     const lz = {
-       scriptUrl: iz(new bz.U(bz(40723))),
-       wasmBinaryUrl: iz(new bz.U(bz(40729)))
+ 
+     function mq(qq) {
+       return (qq / lq).toFixed(1)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1061` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/203.js#L304) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/203.js#L1061)

```diff
-   35766: zz => {
+   36328: qq => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/204.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/204.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/204.js#L4)

```diff
-   40731: (zz, uz, bz) => {
+   41244: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/204.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/204.js#L6)

```diff
-       default: () => iz
+       loadGlbAsset: () => oE,
+       loadGlbTree: () => HE
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L8` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/204.js#L9-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/204.js#L8)

```diff
-     var Ez = bz(35766),
+     var Yq = gq(37872),
+       lq = gq(41246),
+       Oq = gq(36328),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L12` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/204.js#L15) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/204.js#L12)

```diff
-       return nz()('/*! For license information please see ad2avs.procGen.worker.c2d8040c.worker.js.LICENSE.txt */\n(()=>{var zz={65:zz=>{const uz="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,bz=()=>uz.now(),Ez=zz=>zz===1/0||(zz= … [truncated]
+       return mq()('(()=>{class qq extends Error{}function Eq(Eq,gq){const Yq=Eq._malloc(gq);if(0===Yq)throw new qq(`Draco: the decoder\'s heap refused ${gq} bytes`);return Yq}function gq(qq){return{[qq.DT_FLOAT32]:[Float32Array,5126],[qq.DT_INT8]:[Int8Array,5120],[qq.DT_INT16]:[I … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L15` → after: `L1046-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L1046-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/204.js#L1046-L1061) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/204.js#L15)

```diff
-   35766: zz => {
+   41246: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+     });
+     var Yq = gq(136),
+       lq = gq(1201);
+ 
+     function Oq(qq) {
+       return (0, Yq.c)() ? `https://${lq.d.discordDomain}/${qq.href}` : qq.href
+     }
+     const mq = {
+       scriptUrl: Oq(new gq.U(gq(41253))),
+       wasmBinaryUrl: Oq(new gq.U(gq(41259)))
+     }
+   },
+   36328: qq => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/205.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/205.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530)

#### 1. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/205.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/205.js#L4)

```diff
-   40747: (zz, uz, bz) => {
+   41268: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/205.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/205.js#L8)

```diff
-     var Ez = bz(35766),
+     var Yq = gq(36328),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/205.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/205.js#L12)

```diff
-       return nz()('(()=>{var zz={8:(zz,uz,bz)=>{zz.exports=bz.p+"static/media/bloxd_wasm_bg.7b2ccf15d47fe750ebaa.wasm"},10:(zz,uz,bz)=>{zz.exports=bz.p+"static/media/bloxd_wasm_textures_bg.1b960bdce49997a87938.wasm"}},uz={};function bz(Ez){var nz=uz[Ez];if(void 0!==nz)return nz.e … [truncated]
+       return lq()('/*! For license information please see bbb6l5.procGen.worker.4fe4d14a.worker.js.LICENSE.txt */\n(()=>{var qq={54:qq=>{const Eq="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,gq=()=>Eq.now(),Yq=qq=>qq===1/0||(qq= … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/205.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/205.js#L15)

```diff
-   35766: zz => {
+   36328: qq => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/206.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/206.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L2)

```diff
- export const ids = [206, 207];
+ export const ids = [206];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L4-L93` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L4) · [Before (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L93)

```diff
-   35777: (zz, uz, bz) => {
-     bz.d(uz, {
-       reportCappedWasmFailure: () => lz,
-       reportWasmFailure: () => iz
-     });
-     var Ez = bz(2982);
-     const nz = Ez.b - 4;
- 
-     function iz(zz, uz, bz) {
-       (0, Ez.f)(zz, uz, bz, !1)
-     }
- 
-     function lz(zz, uz, bz) {
-       (0, Ez.f)(zz, uz, bz, !1, nz)
-     }
-   },
- ... (74 more removed lines; see GitHub link above)
+   41291: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L95-L125` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L6) · [Before (L95-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L95-L125)

```diff
-       Kp: () => nz,
-       EnvelopeKind: () => iz,
-       wp: () => lz,
-       PhysicsEngine: () => Mz,
-       Xp: () => tz,
-       sp: () => Hz,
-       rp: () => Oz,
-       Np: () => pz,
-       vp: () => dz,
-       xp: () => Fz,
-       Jp: () => Zz,
-       Ap: () => Rz,
-       Tp: () => Kz,
-       Lp: () => wz,
-       default: () => vu,
-       initSync: () => Nu,
- ... (15 more removed lines; see GitHub link above)
+       default: () => Oq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L127-L862` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L8-L9) · [Before (L127-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L127-L862)

```diff
-     class nz {
-       __destroy_into_raw() {
-         const zz = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, mz.unregister(this), zz
-       }
-       free() {
-         const zz = this.__destroy_into_raw();
-         su.mbKP(zz, 0)
-       }
-       Ip() {
-         const zz = su.Ofqg(this.__wbg_ptr);
-         if (zz[2]) throw Fu(zz[1]);
-         return zz[0] >>> 0
-       }
-       Bp() {
-         return su.aq63(this.__wbg_ptr) >>> 0
- ... (720 more removed lines; see GitHub link above)
+     var Yq = gq(36328),
+       lq = gq.n(Yq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L865` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L12) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L865)

```diff
-       return su.Ykgy() >>> 0
+       return lq()('(()=>{var qq={11:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/bloxd_wasm_bg.567100f455f46cbfa6a7.wasm"},20:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/bloxd_wasm_textures_bg.6d9847a3dd7a203a52fe.wasm"},9:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/zstdDecodeWorker. … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L867-L899` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L14-L17) · [Before (L867-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L867-L899)

```diff
- 
-     function xz() {
-       return 0 !== su.wCQB()
-     }
- 
-     function Jz() {
-       const zz = su.CkEM();
-       var uz = ez(zz[0], zz[1]).slice();
-       return su.oxRF(zz[0], 4 * zz[1], 4), uz
-     }
- 
-     function Az() {
-       const zz = su.KdNS();
-       var uz = ez(zz[0], zz[1]).slice();
-       return su.oxRF(zz[0], 4 * zz[1], 4), uz
-     }
- ... (17 more removed lines; see GitHub link above)
+   },
+   36328: qq => {
+     qq.exports = function(qq, Eq, gq, Yq) {
+       var lq = self || window;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L901-L1125` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L19-L22) · [Before (L901-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L901-L1125)

```diff
-         const bz = su.h4co();
-         return zz = bz[0], uz = bz[1], Yz(bz[0], bz[1])
-       } finally {
-         su.oxRF(zz, uz, 1)
-       }
-     }
- 
-     function az(zz) {
-       su.jrWW(Dz(zz))
-     }
- 
-     function Vz() {
-       return {
-         __proto__: null,
-         D5mQ: {
-           __proto__: null,
- ... (209 more removed lines; see GitHub link above)
+         try {
+           var Oq;
+           try {
+             Oq = new lq.Blob([qq])
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L1127-L1136` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L24) · [Before (L1127-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L1127-L1136)

```diff
-             if (! function(zz) {
-                 switch (zz) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
-               }(zz.type) || "application/wasm" === zz.headers.get("Content-Type")) throw bz;
-             console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", bz)
+             (Oq = new(lq.BlobBuilder || lq.WebKitBlobBuilder || lq.MozBlobBuilder || lq.MSBlobBuilder)).append(qq), Oq = Oq.getBlob()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L1138-L1145` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L26-L31) · [Before (L1138-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L1138-L1145)

```diff
-           const Ez = await zz.arrayBuffer();
-           return await WebAssembly.instantiate(Ez, uz)
-         } {
-           const bz = await WebAssembly.instantiate(zz, uz);
-           return bz instanceof WebAssembly.Instance ? {
-             instance: bz,
-             module: zz
-           } : bz
+           var mq = lq.URL || lq.webkitURL,
+             xq = mq.createObjectURL(Oq),
+             Aq = new lq[Eq](xq, gq);
+           return mq.revokeObjectURL(xq), Aq
+         } catch (cq) {
+           return new lq[Eq]("data:application/javascript,".concat(encodeURIComponent(qq)), gq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L1147-L1197` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/206.js#L33-L36) · [Before (L1147-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/206.js#L1147-L1197)

```diff
-       }(await zz, uz);
-       return ou(bz, Ez)
-     }
-     var xu = bz(3468),
-       Ju = bz(35811);
-     const Au = {
-       name: xu.e,
-       url: () => new bz.U(bz(35815)),
-       init: vu,
-       bindings: Ez
-     };
- 
-     function Tu() {
-       let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Au,
-         uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Au,
-         bz = arguments.length > 2 ? arguments[2] : void 0;
- ... (35 more removed lines; see GitHub link above)
+       } catch (cq) {
+         if (!Yq) throw Error("Inline worker is not supported");
+         return new lq[Eq](Yq, gq)
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/207.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/207.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/207.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/207.js#L2)

```diff
- export const ids = [207];
+ export const ids = [207, 208];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/207.js#L4)

```diff
-   35777: (zz, uz, bz) => {
+   36339: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L9` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/207.js#L11) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/207.js#L9)

```diff
-     var Ez = bz(2982);
+     var Yq = gq(2853);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L13` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/207.js#L15) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/207.js#L13)

```diff
-       (0, Ez.f)(zz, uz, bz, !1)
+       (0, Yq.d)(qq, Eq, gq, !1)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L17` → after: `L19-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L19-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/207.js#L19-L1227) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/207.js#L17)

```diff
-       (0, Ez.f)(zz, uz, bz, !1, nz)
+       (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
+     }
+ 
+     function xq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1, lq)
+     }
+   },
+   36331: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Qq,
+       f: () => rq,
+       h: () => vq,
+       i: () => yq
+     });
+     var Yq = gq(36359),
+       lq = gq(2797),
+ ... (1193 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/208.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/208.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L4-L10` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L9) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L10)

```diff
-   35817: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       ITEM_FILES_WITHOUT_SPRITE: () => Mz,
-       ITEM_SPRITES: () => iz,
-       ITEM_SPRITES_WITHOUT_FILE: () => lz,
-       ITEM_SPRITE_RUNS: () => nz,
-       MAX_SPRITE_ITEM_ID: () => Ez
+   36339: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => lq,
+       reportCappedWasmFailure: () => xq,
+       reportUncappedWasmFailure: () => mq,
+       reportWasmFailure: () => Oq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L12-L16` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/208.js#L11-L24) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/208.js#L12-L16)

```diff
-     const Ez = 10090,
-       nz = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       iz = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       lz = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       Mz = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var Yq = gq(2853);
+     const lq = Yq.b - 4;
+ 
+     function Oq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1)
+     }
+ 
+     function mq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
+     }
+ 
+     function xq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1, lq)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/209.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/209.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/209.js#L4)

```diff
-   35829: (zz, uz, bz) => {
+   36389: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/209.js#L6)

```diff
-       CreateCustomLobby: () => Lz
+       ITEM_FILES_WITHOUT_SPRITE: () => xq,
+       ITEM_SPRITES: () => Oq,
+       ITEM_SPRITES_WITHOUT_FILE: () => mq,
+       ITEM_SPRITE_RUNS: () => lq,
+       MAX_SPRITE_ITEM_ID: () => Yq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L8-L705` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/209.js#L12-L17) · [Before (L8-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/209.js#L8-L705)

```diff
-     bz(35838);
-     var Ez = bz(4385),
-       nz = bz(56),
-       iz = bz(1628),
-       lz = bz(1038),
-       Mz = bz.n(lz),
-       tz = bz(2882),
-       Hz = bz(1118),
-       Oz = bz(1195),
-       pz = bz(4335),
-       dz = bz(1419),
-       Fz = bz(35840),
-       Zz = bz(1181),
-       Rz = bz(1298),
-       Kz = bz(1482),
-       wz = bz(20),
- ... (682 more removed lines; see GitHub link above)
+     const Yq = 10090,
+       lq = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       Oq = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       mq = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       xq = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L4` → after: `L4-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L4-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L478) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L4)

```diff
-   35840: (zz, uz, bz) => {
+   36397: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       CreateCustomLobby: () => iq
+     });
+     gq(36406);
+     var Yq = gq(4456),
+       lq = gq(57),
+       Oq = gq(1659),
+       mq = gq(1018),
+       xq = gq.n(mq),
+       Aq = gq(3040),
+       cq = gq(1109),
+       uq = gq(1195),
+       Bq = gq(4413),
+       Wq = gq(1422),
+       Nq = gq(36415),
+ ... (459 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L6-L7` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L480) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L6-L7)

```diff
-       b: () => Oz,
-       d: () => dz
+       c: () => Aq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L9-L15` → after: `L482-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L482-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L482-L517) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L9-L15)

```diff
-     var Ez = bz(56),
-       nz = bz(1322),
-       iz = bz(1181),
-       lz = bz(1305),
-       Mz = bz(3230),
-       tz = bz(4690),
-       Hz = bz(1089);
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(57),
+       mq = gq(4405),
+       xq = gq(1070);
+ 
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
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L27` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L529) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L27)

```diff
-       } = (0, iz.F)();
+       } = (0, Oq.v)();
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L30` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L532) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L30)

```diff
-         children: [uz && (0, Hz.jsx)(lz.c, {}), !uz && 0 === bz.length && (0, Hz.jsx)("div", {
+         children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L33` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L535) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L33)

```diff
-         }), !uz && bz.map((zz => (0, Hz.jsx)(Mz.i, {
+         }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L62` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L564) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L62)

```diff
-       } = (0, iz.F)(), [Mz, pz] = (0, Ez.useState)(null);
+       } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L114-L116` → after: `L616-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L616-L619) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L114-L116)

```diff
-   40949: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       runClientGameMessage: () => Tz
+   36424: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => cq,
+       i: () => uq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L118-L123` → after: `L621-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L621-L622) · [Before (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L118-L123)

```diff
-     var Ez = bz(3509),
-       nz = bz(3521),
-       iz = bz(1296),
-       lz = bz(35840),
-       Mz = bz(4706),
-       tz = bz(1038),
+     gq(57);
+     var Yq = gq(1018),
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L125-L131` → after: `L624-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L624-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L624-L627) · [Before (L125-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L125-L131)

```diff
-       Oz = bz(56),
-       pz = bz(1322),
-       dz = bz(1419),
-       Fz = bz(328),
-       Zz = bz(1181),
-       Rz = bz(1047),
-       Kz = bz(1089);
+       Oq = gq(4456),
+       mq = gq(296),
+       xq = gq(1183),
+       Aq = gq(1070);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L135` → after: `L631-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L631-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L631-L634) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L135)

```diff
-         onFilePicked: uz
+         value: Eq,
+         onChange: gq,
+         showAll: Yq,
+         disabled: cq = !1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L139-L148` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L638) · [Before (L139-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L139-L148)

```diff
-       } = (0, Zz.F)(), [Ez, nz] = (0, Oz.useState)(null), {
-         getRootProps: iz,
-         getInputProps: lz,
-         isDragActive: tz
-       } = (0, Mz.b)({
-         onDrop: zz => {
-           zz.length > 0 && nz(zz[0])
-         },
-         useFsAccessApi: !1
-       }), pz = Ez && Ez.size > 1024 * Fz.id;
+       } = (0, xq.v)();
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L150-L192` → after: `L640-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L640-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L640-L661) · [Before (L150-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L150-L192)

```diff
-         className: "SchematicUploadContainer",
-         children: [(0, Kz.jsxs)("div", {
-           ...iz({
-             className: Hz()("SchematicUpload", {
-               ActiveDrag: tz
-             })
-           }),
-           children: [(0, Kz.jsx)("input", {
-             ...lz({
-               accept: ".bloxdschem"
-             })
-           }), !tz && Ez ? (0, Kz.jsxs)(Kz.Fragment, {
-             children: [(0, Kz.jsx)("div", {
-               className: Hz()("SchematicUploadIcon", "Active", {
-                 TooBig: pz
-               }),
- ... (27 more removed lines; see GitHub link above)
+         className: lq()("BloxdForm GamemodeForm", {
+           BasicOptions: !Yq
+         }),
+         children: [(0, Aq.jsx)("div", {
+           className: "SectionTitle",
+           children: uq("classic:defaultGamemode")
+         }), (0, Aq.jsx)("div", {
+           className: "SectionBody",
+           children: Oq.A.map((qq => Yq || (0, Oq.w)(qq) ? (0, Aq.jsx)("button", {
+             type: "button",
+             className: lq()("WorldGamemode", {
+               Selected: Eq === qq
+             }),
+             disabled: cq,
+             onClick: () => {
+               gq(qq)
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L199-L202` → after: `L668-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L668-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L668-L673) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L199-L202)

```diff
-         ownedSchematics: uz,
-         onClose: bz,
-         onChosenPreset: Ez,
-         onChosenFile: nz
+         mapTypes: Eq,
+         value: gq,
+         onChange: Yq,
+         showAll: cq,
+         disabled: uq = !1,
+         children: Bq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L206-L213` → after: `L677-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L677-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L677-L684) · [Before (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L206-L213)

```diff
-       } = (0, Zz.F)();
-       return (0, Kz.jsxs)(Kz.Fragment, {
-         children: [(0, Kz.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: iz("worldBuilder:loadSchematic")
-         }), (0, Kz.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: iz("worldBuilder:chooseOneOfYourSchematics")
+       } = (0, xq.v)();
+       return (0, Aq.jsxs)("div", {
+         className: lq()("BloxdForm MapTypeForm", {
+           BasicOptions: !cq
+         }),
+         children: [(0, Aq.jsx)("div", {
+           className: "SectionTitle",
+           children: Wq("customLobby:mapType")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L215-L219` → after: `L686-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L686-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L686-L694) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L215-L219)

```diff
-           className: "SchematicPopupSchematicListContainer",
-           children: (0, Kz.jsx)(lz.b, {
-             schematics: uz,
-             onSchematicPicked: zz => {
-               Ez(zz.schematicId), bz()
+           className: "SectionBody",
+           children: Eq.map((qq => cq || (0, Oq.x)(qq) ? (0, Aq.jsx)("button", {
+             type: "button",
+             className: lq()("MapType", {
+               Selected: gq === qq
+             }),
+             disabled: uq,
+             onClick: () => {
+               Yq(qq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L221-L237` → after: `L696-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L696-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L696-L701) · [Before (L221-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L221-L237)

```diff
-             loading: !1,
-             disableAutoExport: !0
-           })
-         }), (0, Kz.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: iz("worldBuilder:uploadNewSchematic")
-         }), (0, Kz.jsx)(wz, {
-           onFilePicked: async zz => {
-             try {
-               await nz(zz)
-             } catch (uz) {
-               console.warn("Schematic upload failed", uz)
-             } finally {
-               bz()
-             }
-           }
- ... (1 more removed lines; see GitHub link above)
+             style: {
+               "--background-image": `url(${mq.o[qq]})`
+             },
+             children: mq.k[qq]
+           }, qq) : null))
+         }), Bq]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L240-L544` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/210.js#L704-L705) · [Before (L240-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/210.js#L240-L544)

```diff
-     var fz = bz(4690),
-       sz = bz(1628),
-       rz = bz(4144),
-       oz = bz(1212);
- 
-     function Nz(zz) {
-       var uz;
-       let {
-         ownedSchematics: bz,
-         onClose: Ez,
-         onChosenEdit: nz,
-         onChosenNew: iz,
-         onChosenDownload: Mz
-       } = zz;
-       const {
-         t: tz
- ... (289 more removed lines; see GitHub link above)
+   },
+   36406: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L4-L114) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L4)

```diff
-   35870: (zz, uz, bz) => {
+   36415: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => uq,
+       g: () => Wq
+     });
+     var Yq = gq(57),
+       lq = gq(1336),
+       Oq = gq(1183),
+       mq = gq(1326),
+       xq = gq(3358),
+       Aq = gq(4764),
+       cq = gq(1070);
+ 
+     function uq(qq) {
+       let {
+         loading: Eq,
+ ... (95 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L6` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L116) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L6)

```diff
-       default: () => vz
+       runClientGameMessage: () => bq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L8` → after: `L118-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L118-L123) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L8)

```diff
-     var Ez = bz(1038),
+     var Yq = gq(3584),
+       lq = gq(3595),
+       Oq = gq(1308),
+       mq = gq(36415),
+       xq = gq(4792),
+       Aq = gq(1018),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L10-L49` → after: `L125-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L125-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L125-L243) · [Before (L10-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L10-L49)

```diff
-       iz = bz(1490),
-       lz = bz(1030),
-       Mz = bz(738),
-       tz = bz(1181),
-       Hz = bz(1419),
-       Oz = bz(1482),
-       pz = bz(3313),
-       dz = bz(1047),
-       Fz = bz(3230),
-       Zz = bz(2442),
-       Rz = bz(1089);
-     const Kz = 2;
- 
-     function wz(zz) {
-       return "firstPartyGame" === zz.type ? {
-         type: "game",
- ... (24 more removed lines; see GitHub link above)
+       uq = gq(57),
+       Bq = gq(1336),
+       Wq = gq(1422),
+       Nq = gq(307),
+       aq = gq(1183),
+       Vq = gq(1025),
+       dq = gq(1070);
+ 
+     function jq(qq) {
+       let {
+         onFilePicked: Eq
+       } = qq;
+       const {
+         t: gq
+       } = (0, aq.v)(), [Yq, lq] = (0, uq.useState)(null), {
+         getRootProps: Oq,
+ ... (103 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L54-L59` → after: `L248-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L248-L252) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L54-L59)

```diff
-         category: bz,
-         title: Ez,
-         tintColour: nz,
-         layout: iz,
-         games: lz,
-         landscape: Mz = !1
+         ownedSchematics: gq,
+         onClose: Yq,
+         onChosenEdit: lq,
+         onChosenNew: Oq,
+         onChosenDownload: xq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L62-L64` → after: `L255-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L255-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L255-L323) · [Before (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L62-L64)

```diff
-         followsLeader: tz
-       } = (0, Zz.f)(), Hz = null !== (uz = null === lz || void 0 === lz ? void 0 : lz.slice(0, iz.gameCount)) && void 0 !== uz ? uz : [], pz = {
-         "--custom-game-place-tint": nz
+         t: Aq
+       } = (0, aq.v)(), [cq, Bq] = (0, uq.useState)("choose"), [Nq, Vq] = (0, uq.useState)(null), [jq, Hq] = (0, uq.useState)(null);
+       return (0, dq.jsxs)(dq.Fragment, {
+         children: [(0, dq.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: Aq("worldBuilder:saveSchematic")
+         }), "choose" === cq && (0, dq.jsxs)(dq.Fragment, {
+           children: [(0, dq.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: Aq("worldBuilder:overwriteOneOfYourSchematics")
+           }), (0, dq.jsx)("div", {
+             className: "SchematicPopupSchematicListContainer",
+             children: (0, dq.jsx)(mq.d, {
+               schematics: gq,
+               onSchematicPicked: qq => {
+                 Vq(qq.schematicId), Hq("existing"), Bq("save")
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L67-L68` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L326) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L67-L68)

```diff
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: pz,
+         className: "SaveSchematicWindow",
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L70-L78` → after: `L328-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L328-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L328-L414) · [Before (L70-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L70-L78)

```diff
-           className: "CustomGamePlacePanelHeading",
-           children: (0, Rz.jsxs)(Oz.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(bz)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
-             children: [(0, Rz.jsx)("span", {
-               children: Ez
-             }), (0, Rz.jsx)(dz.c, {
-               name: "arrow-up"
-             })]
+           className: "SchematicPopupSubtitle",
+           children: mq("general:name")
+         }), (0, dq.jsx)(Pq.b, {
+           className: cq()("SaveSchematicName", {
+             Error: Vq
+           }),
+           forcedText: gq,
+           onValueChange: qq => {
+             Aq(qq), tq(qq)
+           },
+           placeholderText: mq("worldBuilder:schematicNamePlaceholder"),
+           maxLength: yq.zb
+         }), (0, dq.jsx)("h2", {
+           className: cq()("SaveSchematicError", {
+             Hidden: !Vq
+           }),
+ ... (71 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L80-L109` → after: `L416-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L416-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/211.js#L416-L541) · [Before (L80-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/211.js#L80-L109)

```diff
-         }), (0, Rz.jsx)("div", {
-           className: "CustomGamePlacePanelGames",
-           style: {
-             gridTemplateColumns: `repeat(${Mz?iz.columnCount:Kz}, ${Mz?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
-           },
-           children: Array.from({
-             length: iz.gameCount
-           }, ((zz, uz) => {
-             var bz;
-             return (0, Rz.jsx)(Xz, {
-               game: null !== (bz = Hz[uz]) && void 0 !== bz ? bz : null,
-               disabled: tz,
-               showPlaceholder: !lz
-             }, uz)
-           }))
-         })]
- ... (14 more removed lines; see GitHub link above)
+         };
+         if ("Plugin|WorldBuilder|SaveSchematic" === qq) ! function(qq) {
+           let {
+             ownedSchematics: Eq,
+             onChosenDownload: gq,
+             onChosenEdit: Yq,
+             onChosenNew: lq,
+             onClose: Oq
+           } = qq;
+           Bq.NotificationProvider.showCustomPopup({
+             body: qq => (0, dq.jsx)(tq, {
+               ownedSchematics: Eq,
+               onChosenDownload: gq,
+               onChosenEdit: Yq,
+               onChosenNew: lq,
+               onClose: qq
+ ... (110 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L7)

```diff
-   38441: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => iz,
-       d: () => lz
+   36433: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => rq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L9-L10` → after: `L8-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L8-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/212.js#L8-L155) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/212.js#L9-L10)

```diff
-     var Ez = bz(22);
-     let nz = !1;
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(1512),
+       mq = gq(1015),
+       xq = gq(729),
+       Aq = gq(1183),
+       cq = gq(1422),
+       uq = gq(1498),
+       Bq = gq(3440),
+       Wq = gq(1025),
+       Nq = gq(3358),
+       aq = gq(2506),
+       Vq = gq(1070);
+     const dq = 2;
+ 
+     function jq(qq) {
+ ... (132 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L13-L87` → after: `L158-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L158-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/212.js#L158-L183) · [Before (L13-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/212.js#L13-L87)

```diff
-       return nz
-     }
- 
-     function lz(zz) {
-       nz !== zz && (nz = zz, Ez.k.sK("replayViewer|videoExportChanged"))
-     }
-   },
-   35952: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => dz,
-       c: () => Oz,
-       g: () => Fz,
-       j: () => pz
-     });
-     var Ez = bz(328),
-       nz = bz(621),
- ... (59 more removed lines; see GitHub link above)
+       var qq;
+       const {
+         t: Eq
+       } = (0, Aq.v)(), gq = (0, Oq.v)(), Yq = (0, tq.l)(), Wq = (0, Bq.d)({
+         refresh: !0
+       }), Nq = gq.customGamePlace;
+       if (!(0, mq.m)(Nq)) return (0, Vq.jsx)(uq.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const aq = xq.c[Nq],
+         dq = mq.e[Nq],
+         jq = null !== (qq = null === Wq || void 0 === Wq ? void 0 : Wq[Nq]) && void 0 !== qq ? qq : null,
+         Hq = [];
+       for (let lq = 0; lq < dq.length; lq++) {
+         var rq;
+         const qq = Qq[lq];
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L89-L100` → after: `L185-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L185-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/212.js#L185-L212) · [Before (L89-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/212.js#L89-L100)

```diff
-     }
- 
-     function lz() {
-       return null === nz ? null : {
-         ...nz
-       }
-     }
- 
-     function Mz(zz) {
-       var uz;
-       null !== (uz = Ez) && void 0 !== uz && uz(zz) && (nz = {
-         ...zz
+       return (0, Vq.jsxs)("div", {
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, Vq.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${Nq}/${aq.largePicture}.png)`
+           }
+         }), (0, Vq.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: Eq(aq.title)
+         }), (0, Vq.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, Vq.jsx)(cq.d, {
+             onClick: () => (0, uq.navigatePreserveSearch)("/"),
+             children: Eq("homePage:backToGames")
+           })
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/213.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/213.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L5-L74)

```diff
-   38917: (zz, uz, bz) => {
-     zz.exports = nz;
-     var Ez = bz(332);
- 
-     function nz(zz, uz) {
-       if (!(this instanceof nz)) return new nz(zz, uz);
-       var bz = Ez.create();
-       Ez.add(bz, zz, uz), this.base = Ez.min(Ez.create(), zz, bz), this.vec = Ez.clone(uz), this.max = Ez.max(Ez.create(), zz, bz), this.mag = Ez.length(this.vec)
-     }
-     var iz = nz.prototype;
-     iz.width = function() {
-       return this.vec[0]
-     }, iz.height = function() {
-       return this.vec[1]
-     }, iz.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   39024: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L77` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L7) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L77)

```diff
-       f: () => iz
+       c: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L79-L84` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L9-L10) · [Before (L79-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L79-L84)

```diff
-     var Ez = bz(3874);
-     let nz = null;
- 
-     function iz(zz) {
-       return null !== nz && zz === nz
-     }
+     var Yq = gq(31);
+     let lq = !1;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L87-L134` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L13) · [Before (L87-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L87-L134)

```diff
-       this.PU = !1, this.stopPropagation = !1, this.aU = !1, this.disabled = !1
-     }
-     class Mz {
-       constructor(zz, uz) {
-         this.version = "0.7.0";
-         var bz = Object.assign({}, new lz, uz || {});
-         this.element = zz || document, this.PU = !!bz.PU, this.stopPropagation = !!bz.stopPropagation, this.aU = !!bz.aU, this.disabled = !!bz.disabled, this.filterEvents = (zz, uz) => !0, this.down = new Ez.EventEmitter, this.up = new Ez.EventEmitter, this.state = {}, this.WU =  … [truncated]
-           dx: 0,
-           dy: 0,
-           dzz: 0,
-           Fzz: 0,
-           Rzz: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
-           currID: null
- ... (32 more removed lines; see GitHub link above)
+       return lq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L138-L167` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L17) · [Before (L138-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L138-L167)

```diff
-       for (var uz in zz) zz[uz] = 0
-     }
- 
-     function Hz(zz) {
-       window.addEventListener("keydown", Kz.bind(null, zz, !0), !1), window.addEventListener("keyup", Kz.bind(null, zz, !1), !1);
-       var uz = {
-         passive: !0
-       };
-       zz.element.addEventListener("touchstart", Fz.bind(void 0, zz), {
-         passive: !1
-       }), zz.element.addEventListener("touchend", Rz.bind(void 0, zz), uz), zz.element.addEventListener("mousedown", wz.bind(null, zz, !0), uz), window.document.addEventListener("mouseup", wz.bind(null, zz, !1), uz), zz.element.addEventListener("touchmove", Xz.bind(null, zz), uz) … [truncated]
-     }
-     var Oz = 0,
-       pz = 0,
-       dz = null;
- 
- ... (14 more removed lines; see GitHub link above)
+       lq !== qq && (lq = qq, Yq.i.TV("replayViewer|videoExportChanged"))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L170-L171` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L39-L41) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L170-L171)

```diff
-     function Rz(zz, uz) {
-       for (var bz = uz.changedTouches, Ez = 0; Ez < bz.length; ++Ez) bz[Ez].identifier === dz && (dz = null)
+     function uq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
+       (0, Oq.f)(qq, xq)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L174-L179` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L44-L45) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L174-L179)

```diff
-     function Kz(zz, uz, bz) {
-       try {
-         vz(zz, bz), uz && bz.isTrusted && !bz.repeat && zz._keyStates[bz.code] && xz(zz, bz.code)
-       } finally {
-         Jz(bz.code, uz, zz, bz)
-       }
+     function Bq() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).setItem(cq, !0)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L182-L197` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L48-L50) · [Before (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L182-L197)

```diff
-     function wz(zz, uz, bz) {
-       try {
-         vz(zz, bz)
-       } finally {
-         ! function(zz, uz, bz) {
-           if ("pointerId" in bz)
-             if (uz) {
-               if (null !== zz._touches.currID) return;
-               zz._touches.currID = bz.pointerId
-             } else {
-               if (zz._touches.currID !== bz.pointerId) return;
-               zz._touches.currID = null
-             } var Ez = "button" in bz ? bz.button + 1 : 1;
-           Jz("Mouse" + Ez, uz, zz, bz)
-         }(zz, uz, bz)
-       }
+     function Wq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
+       return (0, Oq.c)(qq, xq)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L200-L211` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L53-L61) · [Before (L200-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L200-L211)

```diff
-     function Xz(zz, uz) {
-       var bz = uz.movementX || uz.mozMovementX || 0,
-         Ez = uz.movementY || uz.mozMovementY || 0;
-       if (uz.touches && 0 === (bz | Ez)) {
-         var nz = function(zz) {
-           Zz(zz);
-           for (let uz = 0; uz < zz.changedTouches.length; ++uz)
-             if (zz.changedTouches[uz].identifier == dz) {
-               const bz = zz.changedTouches[uz],
-                 Ez = [bz.clientX - Oz, bz.clientY - pz];
-               return Oz = bz.clientX, pz = bz.clientY, Ez
-             } return console.error(`Did not find touch id ${dz}`), [0, 0]
+     function Nq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
+       const gq = (0, Oq.c)(Eq, xq),
+         uq = function(qq) {
+           const Eq = qq.getItem(Aq);
+           return "string" !== typeof Eq ? null : Eq
+         }(Eq),
+         Bq = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L213-L215` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L63-L73) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L213-L215)

```diff
-         bz = nz[0], Ez = nz[1]
-       }
-       zz.WU.dx += bz, zz.WU.dy += Ez
+       let Wq;
+       return Wq = null !== gq && null !== uq && (0, Oq.d)(Eq, xq) && function(qq, Eq, gq) {
+           const lq = (0, Yq.Yb)(qq),
+             Oq = (0, Yq.Yb)(Eq),
+             mq = (0, Yq.Tb)(qq),
+             xq = (0, Yq.Tb)(Eq);
+           return !(lq !== Oq || !gq) || lq === Oq && mq === xq
+         }(uq, qq, Bq) ? gq : (0, lq.d)(), (0, Oq.h)(Eq, xq, Wq), Eq.setItem(Aq, qq),
+         function() {
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).removeItem(cq)
+         }(Eq), Wq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L219-L229` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L86-L87) · [Before (L219-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L219-L229)

```diff
-       vz(zz, uz);
-       var bz = 1;
-       switch (uz.deltaMode) {
-         case 0:
-           bz = 1;
-           break;
-         case 1:
-           bz = 12;
-           break;
-         case 2:
-           bz = zz.element.clientHeight || window.innerHeight
+       return Yq = qq, lq = null, xq(Eq), () => {
+         Yq === qq && (Yq = null, lq = null)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L252-L283` → after: `L91-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L91-L93) · [Before (L252-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L252-L283)

```diff
-     function Nz(zz, uz) {
-       for (var bz in zz._modifiersHeldThroughBlur = {}, rz) zz._keyStates[bz] && (zz._modifiersHeldThroughBlur[bz] = !0);
-       uz && uz.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (zz) {
-           return !0
-         }
-       }() && (clearTimeout(zz._blurRelease), zz._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var uz in zz._modifiersHeldThroughBlur = {}, zz._keyStates) zz._keyStates[uz] && !/^Mouse\d/.test(uz) && xz(zz, uz)
-       }), 0))
-     }
- 
-     function vz(zz, uz) {
-       var bz = zz._modifiersHeldThroughBlur;
- ... (16 more removed lines; see GitHub link above)
+     function mq() {
+       return null === lq ? null : {
+         ...lq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L312-L318` → after: `L98-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L98-L101) · [Before (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L312-L318)

```diff
-       if (zz && "object" === typeof zz) {
-         var uz = zz.which || zz.keyCode || zz.charCode;
-         uz && (zz = uz)
-       }
-       if ("number" === typeof zz) return lz[zz];
-       var bz, iz = String(zz);
-       return (bz = Ez[iz.toLowerCase()]) ? bz : (bz = nz[iz.toLowerCase()]) || (1 === iz.length ? iz.charCodeAt(0) : void 0)
+       var Eq;
+       null !== (Eq = Yq) && void 0 !== Eq && Eq(qq) && (lq = {
+         ...qq
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L407` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L104) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L407)

```diff
-   38903: (zz, uz, bz) => {
+   40440: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L409` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L106-L107) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L409)

```diff
-       d: () => Ez
+       c: () => lq,
+       g: () => Oq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L411-L482` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L109) · [Before (L411-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L411-L482)

```diff
-     class Ez {
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.WG = !1, this.YG = !1, this.pT = 30, this.mG = 0, this.zV = 100, this.AK = !1, this.fullscreen = !1, this.Hs = function(zz) {}, this.bV = function(zz, uz, bz) {}, this.HV = function() {}, this.Fs = function() {}, this.lV = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(zz) {
-             if ("loading" === document.readyState) {
-               var uz = () => {
-                 document.removeEventListener("readystatechange", uz), zz()
-               };
-               document.addEventListener("readystatechange", uz)
-             } else setTimeout(zz, 0)
-           }((() => {
-             ! function(zz) {
-               var uz = zz._data,
-                 bz = uz.nowObject.now();
- ... (56 more removed lines; see GitHub link above)
+     let Yq = null;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L484-L486` → after: `L111-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L111-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L111-L115) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L484-L486)

```diff
-     function nz() {
-       let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = zz, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     function lq(qq, Eq) {
+       Yq = {
+         conn: qq,
+         reason: Eq
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L492-L496` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L119-L121) · [Before (L492-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L492-L496)

```diff
-       for (var uz = zz._data, bz = 1e3 / zz.pT, Ez = uz.nowObject.now() + lz, nz = 0; uz.nowObject.now() >= uz.lastTickStarted + bz && uz.nowObject.now() < Ez && ++nz <= iz;) zz.Hs(bz), uz.lastTickStarted += bz;
-       var Mz = 5 * (bz + 5),
-         tz = uz.nowObject.now();
-       if (tz - uz.lastTickStarted > Mz)
-         for (; tz >= uz.lastTickStarted + bz;) uz.lastTickStarted += bz
+       var Eq;
+       const gq = (null === (Eq = Yq) || void 0 === Eq ? void 0 : Eq.conn) === qq ? Yq.reason : null;
+       return Yq = null, gq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L499-L709` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L124) · [Before (L499-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L499-L709)

```diff
-   36179: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(56);
-     const nz = Ez.useLayoutEffect;
-     const iz = function(zz) {
-       var uz = (0, Ez.useRef)(zz);
-       return nz((function() {
-         uz.current = zz
-       })), uz
-     };
-     var lz = function(zz) {
-       var uz = iz(zz);
-       (0, Ez.useEffect)((function() {
-         var zz = function(zz) {
- ... (195 more removed lines; see GitHub link above)
+   40415: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L712-L714` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L127) · [Before (L712-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L712-L714)

```diff
-       f: () => iz,
-       j: () => lz,
-       k: () => Mz
+       h: () => lq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L716-L966` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L129-L135) · [Before (L716-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L716-L966)

```diff
-     var Ez = bz(36715);
-     class nz {
-       constructor(zz, uz, bz) {
-         this.gradient = zz, this.color1 = uz, this.color2 = bz
-       }
-       getColorToRef(zz) {
-         this.color2 ? Ez.g.LerpToRef(this.color1, this.color2, Math.random(), zz) : zz.euz(this.color1)
-       }
-     }
-     class iz {
-       constructor(zz, uz) {
-         this.gradient = zz, this.color = uz
-       }
-     }
-     class lz {
-       constructor(zz, uz, bz) {
- ... (235 more removed lines; see GitHub link above)
+     let Yq = {
+       fire: () => {},
+       close: () => {}
+     };
+ 
+     function lq(qq) {
+       Yq = qq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L968-L1191` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/213.js#L137-L139) · [Before (L968-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/213.js#L968-L1191)

```diff
-   },
-   38159: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => pz
-     });
-     const Ez = .5 * (Math.sqrt(3) - 1),
-       nz = (3 - Math.sqrt(3)) / 6,
-       iz = 1 / 3,
-       lz = 1 / 6,
-       Mz = (Math.sqrt(5) - 1) / 4,
-       tz = (5 - Math.sqrt(5)) / 20,
-       Hz = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       Oz = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const pz = class {
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
- ... (208 more removed lines; see GitHub link above)
+ 
+     function Oq() {
+       return Yq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L165` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L5-L7) · [Before (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L165)

```diff
-   36118: zz => {
-     zz.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (146 more removed lines; see GitHub link above)
+   39476: (qq, Eq, gq) => {
+     qq.exports = lq;
+     var Yq = gq(317);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L167-L168` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L12) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L167-L168)

```diff
-     function Hz(zz, uz, bz) {
-       return Math.min(Math.max(uz, zz), bz)
+     function lq(qq, Eq) {
+       if (!(this instanceof lq)) return new lq(qq, Eq);
+       var gq = Yq.create();
+       Yq.add(gq, qq, Eq), this.base = Yq.min(Yq.create(), qq, gq), this.vec = Yq.clone(Eq), this.max = Yq.max(Yq.create(), qq, gq), this.mag = Yq.length(this.vec)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L170-L173` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L14-L51) · [Before (L170-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L170-L173)

```diff
- 
-     function Oz(zz) {
-       var uz = Math.round(zz).toString(16).toUpperCase();
-       return uz.length < 2 ? "0" + uz : uz
+     var Oq = lq.prototype;
+     Oq.width = function() {
+       return this.vec[0]
+     }, Oq.height = function() {
+       return this.vec[1]
+     }, Oq.depth = function() {
+       return this.vec[2]
+     }, Oq.x0 = function() {
+       return this.base[0]
+     }, Oq.y0 = function() {
+       return this.base[1]
+     }, Oq.z0 = function() {
+       return this.base[2]
+     }, Oq.x1 = function() {
+       return this.max[0]
+     }, Oq.y1 = function() {
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L175-L197` → after: `L53-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L53-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L53-L68) · [Before (L175-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L175-L197)

```diff
-     tz.get = function(zz) {
-       var uz, bz;
-       switch (zz.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           uz = tz.get.hsl(zz), bz = "hsl";
-           break;
-         case "hwb":
-           uz = tz.get.hwb(zz), bz = "hwb";
-           break;
-         default:
-           uz = tz.get.rgb(zz), bz = "rgb"
-       }
-       return uz ? {
-         model: bz,
-         value: uz
-       } : null
- ... (7 more removed lines; see GitHub link above)
+   },
+   39468: qq => {
+     qq.exports = function(qq, Eq, gq, Yq, lq, Oq) {
+       var mq = +Eq[0],
+         xq = +Eq[1],
+         Aq = +Eq[2],
+         cq = +gq[0],
+         uq = +gq[1],
+         Bq = +gq[2],
+         Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
+       if (0 === Wq) throw new Error("Can't raycast along a zero vector");
+       return function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
+         for (var uq = 0, Bq = Math.floor, Wq = 0 | Bq(Eq), Nq = 0 | Bq(gq), aq = 0 | Bq(Yq), Vq = lq > 0 ? 1 : -1, dq = Oq > 0 ? 1 : -1, jq = mq > 0 ? 1 : -1, Hq = Math.abs(1 / lq), oq = Math.abs(1 / Oq), Pq = Math.abs(1 / mq), Qq = Hq < 1 / 0 ? Hq * (Vq > 0 ? Wq + 1 - Eq : Eq -  … [truncated]
+           var vq = qq(Wq, Nq, aq);
+           if (vq) return Aq && (Aq[0] = Eq + uq * lq, Aq[1] = gq + uq * Oq, Aq[2] = Yq + uq * mq), cq && (cq[0] = cq[1] = cq[2] = 0, 0 === rq && (cq[0] = -Vq), 1 === rq && (cq[1] = -dq), 2 === rq && (cq[2] = -jq)), vq;
+           Qq < yq ? Qq < tq ? (Wq += Vq, uq = Qq, Qq += Hq, rq = 0) : (aq += jq, uq = tq, tq += Pq, rq = 2) : yq < tq ? (Nq += dq, uq = yq, yq += oq, rq = 1) : (aq += jq, uq = tq, tq += Pq, rq = 2)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L199-L249` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L70-L71) · [Before (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L199-L249)

```diff
-         nz && (lz[3] = parseInt(nz, 16) / 255)
-       } else if (uz = zz.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (nz = (uz = uz[1])[3], bz = 0; bz < 3; bz++) lz[bz] = parseInt(uz[bz] + uz[bz], 16);
-         nz && (lz[3] = parseInt(nz + nz, 16) / 255)
-       } else if (uz = zz.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
-         for (bz = 0; bz < 3; bz++) lz[bz] = parseInt(uz[bz + 1], 0);
-         uz[4] && (uz[5] ? lz[3] = .01 * parseFloat(uz[4]) : lz[3] = parseFloat(uz[4]))
-       } else {
-         if (!(uz = zz.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (uz = zz.match(/^(\w+)$/)) ? "transparent" === uz[1] ? [0, 0, 0, 0] : iz.call(Ez, uz[1]) ? ((lz = Ez[uz[1]])[3] = 1, lz) :  … [truncated]
-         for (bz = 0; bz < 3; bz++) lz[bz] = Math.round(2.55 * parseFloat(uz[bz + 1]));
-         uz[4] && (uz[5] ? lz[3] = .01 * parseFloat(uz[4]) : lz[3] = parseFloat(uz[4]))
-       }
-       for (bz = 0; bz < 3; bz++) lz[bz] = Hz(lz[bz], 0, 255);
-       return lz[3] = Hz(lz[3], 0, 1), lz
-     }, tz.get.hsl = function(zz) {
-       if (!zz) return null;
- ... (35 more removed lines; see GitHub link above)
+         return Aq && (Aq[0] = Eq + uq * lq, Aq[1] = gq + uq * Oq, Aq[2] = Yq + uq * mq), cq && (cq[0] = cq[1] = cq[2] = 0), 0
+       }(qq, mq, xq, Aq, cq /= Wq, uq /= Wq, Bq /= Wq, Yq = "undefined" === typeof Yq ? 64 : +Yq, lq, Oq)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L252-L258` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L74-L80) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L252-L258)

```diff
-   36106: (zz, uz, bz) => {
-     const Ez = bz(36112),
-       nz = bz(36136),
-       iz = ["keyword", "gray", "hex"],
-       lz = {};
-     for (const Fz of Object.keys(nz)) lz[[...nz[Fz].labels].sort().join("")] = Fz;
-     const Mz = {};
+   39064: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => xq,
+       g: () => Oq
+     });
+     var Yq = gq(3933);
+     let lq = null;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L260-L286` → after: `L82-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L82-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L82-L107) · [Before (L260-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L260-L286)

```diff
-     function tz(zz, uz) {
-       if (!(this instanceof tz)) return new tz(zz, uz);
-       if (uz && uz in iz && (uz = null), uz && !(uz in nz)) throw new Error("Unknown model: " + uz);
-       let bz, Hz;
-       if (null == zz) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (zz instanceof tz) this.model = zz.model, this.color = [...zz.color], this.valpha = zz.valpha;
-       else if ("string" === typeof zz) {
-         const uz = Ez.get(zz);
-         if (null === uz) throw new Error("Unable to parse color from string: " + zz);
-         this.model = uz.model, Hz = nz[this.model].channels, this.color = uz.value.slice(0, Hz), this.valpha = "number" === typeof uz.value[Hz] ? uz.value[Hz] : 1
-       } else if (zz.length > 0) {
-         this.model = uz || "rgb", Hz = nz[this.model].channels;
-         const bz = Array.prototype.slice.call(zz, 0, Hz);
-         this.color = dz(bz, Hz), this.valpha = "number" === typeof zz[Hz] ? zz[Hz] : 1
-       } else if ("number" === typeof zz) this.model = "rgb", this.color = [zz >> 16 & 255, zz >> 8 & 255, 255 & zz], this.valpha = 1;
-       else {
- ... (11 more removed lines; see GitHub link above)
+     function Oq(qq) {
+       return null !== lq && qq === lq
+     }
+ 
+     function mq() {
+       this.IK = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
+     }
+     class xq {
+       constructor(qq, Eq) {
+         this.version = "0.7.0";
+         var gq = Object.assign({}, new mq, Eq || {});
+         this.element = qq || document, this.IK = !!gq.IK, this.stopPropagation = !!gq.stopPropagation, this.gC = !!gq.gC, this.disabled = !!gq.disabled, this.filterEvents = (qq, Eq) => !0, this.ignoreEvent = qq => !1, this.down = new Yq.EventEmitter, this.up = new Yq.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           hEq: 0,
+           nEq: 0,
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L288-L291` → after: `L109-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L109-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L109-L120) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L288-L291)

```diff
-       if (Mz[this.model])
-         for (Hz = nz[this.model].channels, bz = 0; bz < Hz; bz++) {
-           const zz = Mz[this.model][bz];
-           zz && (this.color[bz] = zz(this.color[bz]))
+       bind(qq) {
+         for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
+         gq.forEach((Eq => {
+           var gq = this._keyBindmap[Eq] || [];
+           gq.includes(qq) || (gq.push(qq), this._keyBindmap[Eq] = gq)
+         })), this.state[qq] = !!this.state[qq], this.pressCount[qq] = this.pressCount[qq] || 0, this.releaseCount[qq] = this.releaseCount[qq] || 0
+       }
+       unbind(qq) {
+         for (var Eq in this._keyBindmap) {
+           var gq = this._keyBindmap[Eq],
+             Yq = gq.indexOf(qq);
+           Yq > -1 && gq.splice(Yq, 1)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L293-L384` → after: `L122-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L122-L128) · [Before (L293-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L293-L384)

```diff
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
-     }
-     tz.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(zz) {
-         let uz = this.model in Ez.to ? this : this.rgb();
-         uz = uz.round("number" === typeof zz ? zz : 1);
-         const bz = 1 === uz.valpha ? uz.color : [...uz.color, this.valpha];
-         return Ez.to[uz.model](bz)
-       },
-       percentString(zz) {
- ... (76 more removed lines; see GitHub link above)
+       }
+       getBindings() {
+         var qq = {};
+         for (var Eq in this._keyBindmap) {
+           this._keyBindmap[Eq].forEach((gq => {
+             qq[gq] = qq[gq] || [], qq[gq].push(Eq)
+           }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L460-L474` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L132-L133) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L460-L474)

```diff
-     };
-     for (const Fz of Object.keys(nz)) {
-       if (iz.includes(Fz)) continue;
-       const {
-         channels: zz
-       } = nz[Fz];
-       tz.prototype[Fz] = function() {
-         if (this.model === Fz) return new tz(this);
-         for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-         return uz.length > 0 ? new tz(uz, Fz) : new tz([...(Ez = nz[this.model][Fz].raw(this.color), Array.isArray(Ez) ? Ez : [Ez]), this.valpha], Fz);
-         var Ez
-       }, tz[Fz] = function() {
-         for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
-         let nz = bz[0];
-         return "number" === typeof nz && (nz = dz(bz, zz)), new tz(nz, Fz)
+       SB() {
+         Aq(this.lC), Aq(this.pressCount), Aq(this.releaseCount)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L479-L483` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L138) · [Before (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L479-L483)

```diff
-       return function(uz) {
-         return function(zz, uz) {
-           return Number(zz.toFixed(uz))
-         }(uz, zz)
-       }
+       for (var Eq in qq) qq[Eq] = 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L486-L493` → after: `L141-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L141-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L141-L155) · [Before (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L486-L493)

```diff
-     function Oz(zz, uz, bz) {
-       zz = Array.isArray(zz) ? zz : [zz];
-       for (const Ez of zz)(Mz[Ez] || (Mz[Ez] = []))[uz] = bz;
-       return zz = zz[0],
-         function(Ez) {
-           let nz;
-           return void 0 !== Ez ? (bz && (Ez = bz(Ez)), nz = this[zz](), nz.color[uz] = Ez, nz) : (nz = this[zz]().color[uz], bz && (nz = bz(nz)), nz)
-         }
+     function cq(qq) {
+       window.addEventListener("keydown", dq.bind(null, qq, !0), !1), window.addEventListener("keyup", dq.bind(null, qq, !1), !1);
+       var Eq = {
+         passive: !0
+       };
+       qq.element.addEventListener("touchstart", Nq.bind(void 0, qq), {
+         passive: !1
+       }), qq.element.addEventListener("touchend", Vq.bind(void 0, qq), Eq), qq.element.addEventListener("mousedown", jq.bind(null, qq, !0), Eq), window.document.addEventListener("mouseup", jq.bind(null, qq, !1), Eq), qq.element.addEventListener("touchmove", Hq.bind(null, qq), Eq) … [truncated]
+     }
+     var uq = 0,
+       Bq = 0,
+       Wq = null;
+ 
+     function Nq(qq, Eq) {
+       Eq.preventDefault(), aq(Eq)
```
