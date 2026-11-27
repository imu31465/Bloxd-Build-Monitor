# Changed — Bundle Modifications Report (Part 033 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `33 / 86` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (400 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 94. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3416-L3482` → after: `L4041-L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4041-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4041-L4060) · [Before (L3416-L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3416-L3482)

```diff
-       const [MB, zB] = (0, YB.useState)(null), lB = BB => Math.max(DB, Math.min(QB, Math.floor(BB))), pB = BB => {
-         const OB = JB.current,
-           YB = "function" === typeof oB ? oB(OB, BB) : oB,
-           DB = lB(OB + YB * BB);
-         JB.current = DB, GB(DB)
-       };
-       (0, YB.useEffect)((() => {
-         if (null === MB) return;
-         let BB;
-         const OB = () => {
-             zB(null)
-           },
-           GB = setTimeout((() => {
-             BB = setInterval((() => {
-               pB(MB);
-               const BB = JB.current;
- ... (51 more removed lines; see GitHub link above)
+       const [nW, uW] = (0, mW.useState)(!1);
+       (0, mW.useEffect)((() => (0, tW.h)("crosshairAccuracy", SW)), []), (0, EW.e)("mouseState", (WW => {
+         let {
+           isDown: iW
+         } = WW;
+         MW.current = iW, sW.current && (sW.current.style.transform = (0, xW.c)(iW, HW.current.growOnClick)), "shapes" === HW.current.style && uW(iW)
+       }));
+       const oW = (0, ZW.d)(iW, OW.touchActionButtons);
+       return (null !== (WW = (0, wW.d)(UW, bW)) && void 0 !== WW ? WW : (0, wW.i)(yW, KW > 1, oW, kW)) ? "movement" === NW || "cursor" === NW ? null : (0, AW.jsxs)(AW.Fragment, {
+         children: [JW && (0, AW.jsx)(TW, {
+           custom: hW.forGuns && "shapes" === hW.style ? hW : null,
+           touch: iW
+         }), !JW && (0, AW.jsx)(xW.b, {
+           settings: hW,
+           touch: iW,
+           pressRef: sW,
+ ... (4 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3484-L3485` → after: `L4062-L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4062-L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4062-L4063) · [Before (L3484-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3484-L3485)

```diff
-     function BQ(BB) {
-       return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, BB))) - 1))
+     function jW() {
+       return NW.gameBridge.lookup("cameraZoom", null)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3487-L3492` → after: `L4065-L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4065-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4065-L4081) · [Before (L3487-L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3487-L3492)

```diff
-     var OQ = GB(34813),
-       GQ = GB(1238);
-     const YQ = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
-     GQ.x, rB.Vc.length;
-     new Map;
-     var DQ = GB(3708);
+     const UW = [{
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }],
+       kW = {
+         current: null
+       },
+       sW = {
+         current: null
+       };
+     let MW = 0,
+ ... (1 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3494-L3496` → after: `L4083-L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4083-L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4083-L4084) · [Before (L3494-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3494-L3496)

```diff
-     function QQ(BB, OB) {
-       var GB;
-       return OB && (null === (GB = BB[OB]) || void 0 === GB ? void 0 : GB.smp) || null
+     function SW(WW) {
+       KW = WW, UW[0].current || kW.current || sW.current ? yW(WW) : MW = WW
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3499-L3510` → after: `L4087-L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4087-L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4087-L4088) · [Before (L3499-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3499-L3510)

```diff
-     function oQ(BB, OB) {
-       const GB = [];
-       for (const DB of ED(BB)) {
-         var YB;
-         const QB = BB[DB];
-         (null === (YB = QB.smp) || void 0 === YB ? void 0 : YB.kind) === OB && GB.push({
-           key: DB,
-           item: QB,
-           meta: QB.smp
-         })
-       }
-       return GB
+     function YW(WW) {
+       return ((0, wW.f)(WW) - (0, wW.f)(0)) * window.innerHeight / 100
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3513` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4091) · [Before (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3513)

```diff
-     function jQ(BB, OB) {
+     function yW(WW) {
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3515` → after: `L4093-L4097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4093-L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4093-L4097) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3515)

```diff
-       return null !== (GB = oQ(BB, OB)[0]) && void 0 !== GB ? GB : null
+       if (null === (iW = sW.current) || void 0 === iW || iW.call(sW, YW(WW)), UW[0].current) {
+         const iW = `${(0,wW.f)(WW)}vh`;
+         UW[0].current.style.transform = `translateX(calc(0px - ${iW}))`, UW[1].current.style.transform = `translateX(calc(0px + ${iW}))`, UW[2].current.style.transform = `translateY(calc(0px - ${iW}))`, UW[3].current.style.transform = `translateY(calc(0px + ${iW}))`
+       }
+       kW.current && (kW.current.style.filter = `blur(${Math.round(WW/10)}px)`)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3533-L3540` → after: `L4101-L4178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4101-L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4101-L4178) · [Before (L3533-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3533-L3540)

```diff
-       const OB = BB - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
-       for (const {
-           divisor: GB,
-           suffix: YB
-         }
-         of JQ)
-         if (OB >= GB) return `${Math.floor(OB/GB)}${YB}`;
-       return "<1s"
+       let {
+         custom: iW,
+         touch: OW
+       } = WW;
+       const NW = (0, EW.g)("aimingOverlay", "none"),
+         PW = "1.2vh",
+         LW = "0.3vh";
+       (0, mW.useEffect)((() => {
+         MW && yW(MW)
+       }), []);
+       const cW = (0, mW.useRef)(null !== iW);
+       return (0, mW.useLayoutEffect)((() => {
+         var WW;
+         iW ? null === (WW = sW.current) || void 0 === WW || WW.call(sW, YW(KW)) : cW.current && yW(KW);
+         cW.current = null !== iW
+       }), [iW]), (0, AW.jsxs)(AW.Fragment, {
+ ... (62 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3543-L3557` → after: `L4192-L4193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4192-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4192-L4193) · [Before (L3543-L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3543-L3557)

```diff
-     function PQ(BB) {
-       const OB = BB.map(dD.f),
-         GB = [];
-       return OB.forEach(((BB, YB) => {
-         const DB = function(BB) {
-             const OB = BB.match(/\d+/);
-             return OB ? Number(OB[0]) : 0
-           }(BB),
-           QB = YB === OB.length - 1;
-         (QB || 1 === DB || 10 === DB || 100 === DB) && GB.push({
-           label: BB,
-           quantity: DB,
-           isAll: QB
-         })
-       })), GB
+     function LW(WW, iW) {
+       return Math.max(1, Math.round(WW * iW))
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3562-L3569` → after: `L4197-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4197-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4197-L4206) · [Before (L3562-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3562-L3569)

```diff
-       const GB = OB.trim().toLowerCase();
-       if (!GB) return [];
-       const YB = BB => {
-           if (BB === GB) return 0;
-           if (BB.startsWith(GB)) return 1;
-           const OB = BB.indexOf(GB);
-           return -1 === OB ? -1 : 2 + OB
-         },
+       const OW = iW * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+         mW = function(WW, iW) {
+           if (WW.lines) return LW(WW.lineThickness, iW) % 2;
+           if (WW.dot) return LW(WW.dotSize, iW) % 2;
+           return wW(WW, iW) % 2
+         }(WW, iW),
+         EW = tW(WW.lineThickness * OW, mW),
+         NW = LW(WW.lineLength, OW),
+         PW = Math.round(WW.gap * OW),
+         cW = WW.outline > 0 ? LW(WW.outline, OW) : 0,
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3571-L3575` → after: `L4208-L4245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4208-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4208-L4245) · [Before (L3571-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3571-L3575)

```diff
-       for (const jB of BB) {
-         const BB = [YB(jB.lowerLabel), YB(jB.lowerName)].filter((BB => -1 !== BB));
-         BB.length && DB.push({
-           item: jB,
-           rank: Math.min(...BB)
+       if (WW.lines && (xW.push({
+           x: EW + PW,
+           y: 0,
+           w: NW,
+           h: EW,
+           arm: "right"
+         }), xW.push({
+           x: -PW - NW,
+           y: 0,
+           w: NW,
+           h: EW,
+           arm: "left"
+         }), xW.push({
+           x: 0,
+           y: EW + PW,
+           w: EW,
+ ... (22 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3578-L3588` → after: `L4248-L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4248-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4248-L4271) · [Before (L3578-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3578-L3588)

```diff
-       if (DB.length > 0) return DB.sort(((BB, OB) => BB.rank - OB.rank)).map((BB => BB.item));
-       const QB = [...GB],
-         oB = BB => {
-           let OB = 0;
-           for (const GB of QB) {
-             if (OB = BB.indexOf(GB, OB), -1 === OB) return !1;
-             OB++
-           }
-           return !0
-         };
-       return BB.filter((BB => oB(BB.lowerLabel) || oB(BB.lowerName)))
+       const lW = xW.map((WW => ({
+         ...WW,
+         x: WW.x - cW,
+         y: WW.y - cW,
+         w: WW.w + 2 * cW,
+         h: WW.h + 2 * cW
+       })));
+       let AW = null,
+         bW = null;
+       if (WW.circle) {
+         const iW = LW(WW.circleThickness, OW),
+           NW = function(WW, iW) {
+             return WW + (WW % 2 === iW ? 0 : 1)
+           }(wW(WW, OW), mW),
+           PW = (EW - NW) / 2;
+         AW = ZW(PW, NW, iW), cW > 0 && (bW = ZW(PW - cW, NW + 2 * cW, iW + 2 * cW))
+ ... (8 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3592-L3593` → after: `L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4275) · [Before (L3592-L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3592-L3593)

```diff
-       var GB;
-       return null !== (GB = null === BB || void 0 === BB ? void 0 : BB[OB]) && void 0 !== GB ? GB : OB
+       return Math.round(WW.circleRadius * iW * 2 + LW(WW.circleThickness, iW))
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3597-L3603` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4279) · [Before (L3597-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3597-L3603)

```diff
-       const GB = BB.userInput;
-       return void 0 !== OB && "dropdown" === (null === GB || void 0 === GB ? void 0 : GB.type) && GB.dropdownOptions.map(dD.f).includes(OB) ? OB : function(BB) {
-         const OB = BB.userInput;
-         if ("dropdown" !== (null === OB || void 0 === OB ? void 0 : OB.type) || 0 === OB.dropdownOptions.length) return null;
-         const GB = OB.dropdownOptions.map(dD.f);
-         return OB.initialValue && GB.includes(OB.initialValue) ? OB.initialValue : GB[GB.length - 1]
-       }(BB)
+       return Math.max(2 - iW, 2 * Math.round((WW - iW) / 2) + iW)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3606-L3607` → after: `L4282-L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4282-L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4282-L4290) · [Before (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3606-L3607)

```diff
-     function ZQ(BB) {
-       return void 0 === BB ? "" : JSON.stringify(BB)
+     function ZW(WW, iW, OW) {
+       const mW = 2 * OW >= iW - 1;
+       return {
+         x: WW,
+         y: WW,
+         size: iW,
+         border: Math.min(OW, Math.floor(iW / 2)),
+         filled: mW
+       }
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3609` → after: `L4292-L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4292-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4292-L4293) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3609)

```diff
-     const NQ = (0, YB.createContext)(null);
+     var xW = OW(1283);
+     const lW = 1.4;
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3611-L3816` → after: `L4295-L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4295-L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4295-L4296) · [Before (L3611-L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3611-L3816)

```diff
-     function RQ() {
-       return (0, YB.useContext)(NQ)
-     }
-     var WQ = GB(2987);
-     const AQ = (0, YB.memo)((function(BB) {
-         let {
-           name: OB,
-           label: GB,
-           onPick: YB
-         } = BB;
-         return (0, PB.jsxs)("button", {
-           type: "button",
-           className: "SmpCatalogueTile",
-           title: GB,
-           onClick: () => {
-             YB(OB)
- ... (190 more removed lines; see GitHub link above)
+     function AW(WW, iW) {
+       return WW && iW ? `scale(${lW})` : "scale(1)"
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3820-L3841` → after: `L4300-L4303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4300-L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4300-L4303) · [Before (L3820-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3820-L3841)

```diff
-       let {
-         browser: OB,
-         recentLabel: GB,
-         children: YB
-       } = BB;
-       const {
-         t: DB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("div", {
-         className: "SmpViewBar",
-         children: [(0, PB.jsx)(sD, {
-           options: [{
-             value: "recent",
-             label: GB
-           }, {
-             value: "browse",
- ... (6 more removed lines; see GitHub link above)
+       return "classic" === WW.settings.style ? (0, xW.jsx)(kW, {
+         ...WW
+       }) : (0, xW.jsx)(TW, {
+         ...WW
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3845-L3873` → after: `L4308-L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4308-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4308-L4319) · [Before (L3845-L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3845-L3873)

```diff
-     function fQ(BB) {
-       let {
-         item: OB,
-         names: GB,
-         summary: YB,
-         onBack: DB,
-         children: QB
-       } = BB;
-       const {
-         t: jB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("div", {
-         className: "SmpItemHeader",
-         children: [(0, PB.jsx)(JB.c, {
-           className: "SmpBackButton",
-           onClick: DB,
- ... (13 more removed lines; see GitHub link above)
+     function UW(WW, iW) {
+       const OW = {};
+       if (WW.color !== PW.g.color && (OW.color = (0, PW.m)(WW.color)), WW.opacity !== PW.g.opacity && (OW.opacity = WW.opacity / 100), WW.outline !== PW.g.outline || WW.outlineColor !== PW.g.outlineColor) {
+         const iW = WW.outline,
+           mW = (0, PW.m)(WW.outlineColor);
+         OW.textShadow = iW > 0 ? `-${iW}px 0 ${mW}, 0 ${iW}px ${mW}, ${iW}px 0 ${mW}, 0 -${iW}px ${mW}` : "none"
+       }
+       if (WW.size !== PW.g.size) {
+         const mW = WW.size / 100;
+         OW.fontSize = iW ? `calc(max(1.3rem, 18px) * ${mW})` : `calc(1.3rem * ${mW})`, OW.marginTop = `-${jW}em`, OW.transformOrigin = `50% calc(50% + ${jW}em)`
+       }
+       return OW
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3878-L3886` → after: `L4324-L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4324-L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4324-L4329) · [Before (L3878-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3878-L3886)

```diff
-         browser: OB,
-         className: GB,
-         action: YB,
-         above: DB,
-         list: oB,
-         summary: jB,
-         recentLabel: yB,
-         listControls: JB,
-         onBack: MB
+         settings: iW,
+         touch: OW,
+         inPreview: mW,
+         inEditor: NW,
+         pressed: PW = !1,
+         pressRef: LW
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3888-L3911` → after: `L4331-L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4331-L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4331-L4342) · [Before (L3888-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3888-L3911)

```diff
-       return (0, PB.jsxs)("div", {
-         className: QB()("SmpScreen", GB),
-         children: [(0, PB.jsx)(nQ, {
-           browser: OB,
-           children: YB
-         }), OB.shown && (0, PB.jsx)(fQ, {
-           item: OB.shown,
-           names: OB.names,
-           summary: !OB.loading && jB,
-           onBack: () => {
-             null === MB || void 0 === MB || MB(), OB.searchFor(null)
-           },
-           children: JB
-         }), DB, OB.shown ? oB : (0, PB.jsxs)(PB.Fragment, {
-           children: [(0, PB.jsx)(UQ, {
-             browser: OB,
- ... (8 more removed lines; see GitHub link above)
+       return (0, xW.jsx)("div", {
+         className: EW()("Crosshair", {
+           Touch: OW,
+           CrosshairInPreview: mW,
+           CrosshairInEditor: NW || mW
+         }),
+         ref: LW,
+         style: {
+           transform: AW(PW, iW.growOnClick),
+           ...UW(iW, OW)
+         },
+         children: "+"
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3916-L3922` → after: `L4347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4347) · [Before (L3916-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3916-L3922)

```diff
-       const GB = BB.map((BB => {
-         let {
-           meta: OB
-         } = BB;
-         return OB.pricePerItem
-       }));
-       return "min" === OB ? Math.min(...GB) : Math.max(...GB)
+       return WW / iW + "px"
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3978-L4004` → after: `L4350-L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4350-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4350-L4356) · [Before (L3978-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3978-L4004)

```diff
-     function mQ(BB) {
-       let {
-         view: OB,
-         onChange: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return (0, PB.jsx)(aD.c, {
-         className: "SmpChoice SmpViewToggle",
-         ariaLabel: YB("smpShop:layout"),
-         options: [{
-           value: "list",
-           label: (0, PB.jsx)(jB.b, {
-             name: "list"
-           }),
- ... (11 more removed lines; see GitHub link above)
+     function MW(WW, iW, OW, mW) {
+       return {
+         ...YW(WW, iW, OW),
+         width: sW(WW.w, OW),
+         height: sW(WW.h, OW),
+         background: mW
+       }
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4007-L4055` → after: `L4359-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4359-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4359-L4368) · [Before (L4007-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4007-L4055)

```diff
-     function IQ(BB) {
-       let {
-         entries: OB,
-         view: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)(), DB = RQ(), QB = "grid" === GB;
-       return (0, PB.jsxs)(PB.Fragment, {
-         children: [!QB && (0, PB.jsxs)("div", {
-           className: "SmpColumns",
-           "aria-hidden": "true",
-           children: [(0, PB.jsx)("span", {}), (0, PB.jsx)("span", {
-             children: YB("smpShop:columnItem")
-           }), (0, PB.jsx)("span", {
-             children: YB("smpShop:columnPriceEach")
- ... (33 more removed lines; see GitHub link above)
+     function KW(WW, iW, OW) {
+       return {
+         left: sW(WW.x, iW),
+         top: sW(WW.y, iW),
+         width: sW(WW.size, iW),
+         height: sW(WW.size, iW),
+         borderWidth: sW(WW.border, iW),
+         borderColor: OW,
+         background: WW.filled ? OW : void 0
+       }
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4057-L4058` → after: `L4370-L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4370-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4370-L4375) · [Before (L4057-L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4057-L4058)

```diff
-     const FQ = [1, 10, 100],
-       iQ = [1, 10, 100, 999];
+     const SW = {
+       left: [-1, 0],
+       right: [1, 0],
+       up: [0, -1],
+       down: [0, 1]
+     };
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4060-L4276` → after: `L4377-L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4377-L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4377-L4382) · [Before (L4060-L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4060-L4276)

```diff
-     function LQ(BB) {
-       var OB, GB, DB, yB, MB, zB, lB, pB, qB, ZB;
-       const {
-         t: NB
-       } = (0, oB.H)(), RB = RQ(), {
-         creator: WB,
-         mode: AB
-       } = BB, [SB, nB] = (0, YB.useState)(null !== (OB = null === WB || void 0 === WB ? void 0 : WB.meta.item) && void 0 !== OB ? OB : null), [UB, fB] = (0, YB.useState)(1), [kB, dB] = (0, YB.useState)(0), [KB, uB] = (0, YB.useState)(""), [mB, IB] = (0, YB.useState)(0), FB = (0,  … [truncated]
-       (0, YB.useEffect)((() => {
-         BB.searching || null === rB || rB === FB.current || (FB.current = rB, iB.current = !1, nB(rB), dB(0), fB("list" === AB ? Math.max(1, XB) : 1))
-       }), [rB, BB.searching]);
-       const wB = !!WB && !!SB && WB.meta.item === SB,
-         EB = wB ? WB.meta.owned : null !== (yB = null === (MB = BB.inventory) || void 0 === MB || null === (zB = MB.find((BB => BB.item === SB))) || void 0 === zB ? void 0 : zB.quantity) && void 0 !== yB ? yB : 0,
-         cB = "list" === AB ? Math.max(1, EB) : 45954,
-         hB = null !== (lB = BB.prices[0]) && void 0 !== lB ? lB : null,
-         aB = BB.prices.length ? Math.round(BB.prices.reduce(((BB, OB) => BB + OB), 0) / BB.prices.length) : null,
- ... (201 more removed lines; see GitHub link above)
+     function YW(WW, iW, OW) {
+       const [mW, EW] = WW.arm ? SW[WW.arm] : [0, 0], NW = Math.round(iW * OW);
+       return {
+         left: sW(WW.x + mW * NW, OW),
+         top: sW(WW.y + EW * NW, OW)
+       }
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4279-L4381` → after: `L4385-L4390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4385-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4385-L4390) · [Before (L4279-L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4279-L4381)

```diff
-     function gQ() {
-       var BB;
-       const {
-         t: OB
-       } = (0, oB.H)(), GB = RQ(), DB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, QB = jQ(DB, "search"), jB = jQ(DB, "creator"), yB = oQ(DB, "enchantedCreator"), MB = oQ(DB, "listing"), zB = jQ(DB, "empty"), lB = SQ(QB, MB.length > 0 || null … [truncated]
-         searched: pB,
-         shown: qB,
-         loading: ZB
-       } = lB, [NB, RB] = (0, YB.useState)(!1), [WB, AB] = function() {
-         const [BB, OB] = (0, KQ.e)("smpMarketView", "list");
-         return ["grid" === BB ? "grid" : "list", OB]
-       }(), VB = "grid" === WB, SB = (0, YB.useMemo)((() => MB.filter((BB => {
-         let {
-           meta: OB
-         } = BB;
-         return null !== OB.seller && OB.item === pB
- ... (87 more removed lines; see GitHub link above)
+     function yW(WW) {
+       return WW.arm ? {
+         "data-arm": WW.arm,
+         "data-x": WW.x,
+         "data-y": WW.y
+       } : {}
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4386` → after: `L4395-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4395-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4395-L4400) · [Before (L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4386)

```diff
-         entries: OB
+         settings: iW,
+         inPreview: OW,
+         inEditor: mW,
+         pressed: LW = !1,
+         spread: wW,
+         spreadRef: tW
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4388-L4390` → after: `L4402-L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4402-L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4402-L4469) · [Before (L4388-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4388-L4390)

```diff
-       const {
-         t: GB
-       } = (0, oB.H)(), DB = RQ(), [QB, jB] = (0, YB.useState)({});
+       const ZW = (0, NW.useRef)(null),
+         {
+           box: AW,
+           dpr: bW
+         } = function(WW) {
+           const [iW, OW] = (0, NW.useState)({
+             box: {
+               left: 0,
+               top: 0,
+               width: 0,
+               height: 0
+             },
+             dpr: 1
+           });
+           return (0, NW.useLayoutEffect)((() => {
+             const iW = WW.current;
+ ... (52 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4392-L4453` → after: `L4471-L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4471-L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4471-L4475) · [Before (L4392-L4453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4392-L4453)

```diff
-         className: "SmpList",
-         children: OB.map((BB => {
-           var OB, YB, oB;
-           let {
-             key: yB,
-             item: MB,
-             meta: zB
-           } = BB;
-           const lB = null !== (OB = QB[yB]) && void 0 !== OB ? OB : 1;
-           return (0, PB.jsxs)("div", {
-             className: "SmpRow",
-             children: [(0, PB.jsx)(TD, {
-               item: zB.item,
-               amount: zB.quantity,
-               tier: null !== (YB = null === (oB = MB.enchant) || void 0 === oB ? void 0 : oB.tier) && void 0 !== YB ? YB : null
-             }), (0, PB.jsxs)("div", {
- ... (46 more removed lines; see GitHub link above)
+         ref: ZW,
+         className: EW()("CrosshairShapes", {
+           CrosshairInPreview: OW,
+           CrosshairInEditor: mW || OW,
+           CrosshairSpreads: void 0 !== tW
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4455-L4486` → after: `L4477-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4477-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4477-L4500) · [Before (L4455-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4455-L4486)

```diff
-         title: GB,
-         onClick: () => {
-           yB(OB)
-         },
-         children: [(0, PB.jsx)(TD, {
-           item: GB,
-           amount: YB,
-           tier: oB
-         }), (0, PB.jsx)(bD, {
-           amount: DB
-         })]
-       })
-     }));
- 
-     function wQ() {
-       var BB;
- ... (16 more removed lines; see GitHub link above)
+         children: (0, xW.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: kW.x,
+             top: kW.y,
+             opacity: iW.opacity / 100
+           },
+           children: (0, xW.jsxs)("div", {
+             className: "CrosshairShapesPress",
+             children: [UW.ringOutline && (0, xW.jsx)("div", {
+               className: "CrosshairRing",
+               style: KW(UW.ringOutline, bW, SW)
+             }), UW.outlines.map(((WW, iW) => (0, xW.jsx)("div", {
+               className: "CrosshairPart",
+               ...yW(WW),
+               style: MW(WW, JW, bW, SW)
+ ... (8 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4532-L4588` → after: `L4522-L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4522-L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4522-L4524) · [Before (L4532-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4532-L4588)

```diff
-       var OB, GB, YB, DB;
-       let {
-         entry: QB,
-         choice: jB,
-         onChoose: yB
-       } = BB;
-       const {
-         t: MB
-       } = (0, oB.H)(), zB = RQ(), {
-         key: lB,
-         item: pB,
-         meta: qB
-       } = QB, ZB = PQ("dropdown" === (null === (OB = pB.userInput) || void 0 === OB ? void 0 : OB.type) ? pB.userInput.dropdownOptions : []), NB = null === jB ? 0 : -(0, dD.b)(pB, jB);
-       return (0, PB.jsxs)(PB.Fragment, {
-         children: [(0, PB.jsx)(TD, {
-           item: qB.item,
- ... (41 more removed lines; see GitHub link above)
+       let iW = 90;
+       for (const OW of WW) iW = 31 * iW + OW & 255;
+       return iW
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4591-L4690` → after: `L4529-L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4529-L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4529-L4539) · [Before (L4591-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4591-L4690)

```diff
-     function cQ() {
-       var BB;
-       const {
-         t: OB
-       } = (0, oB.H)(), GB = RQ(), YB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, DB = oQ(YB, "collect"), QB = oQ(YB, "myListing"), jB = (BB, OB) => GB.isPending(BB) || !1 === OB.canBuy;
-       return (0, PB.jsxs)("div", {
-         className: "SmpScreen",
-         children: [(0, PB.jsx)("h3", {
-           className: "SmpSectionTitle",
-           children: OB("smpShop:readyToCollect")
-         }), DB.length > 0 ? (0, PB.jsx)("div", {
-           className: "SmpList",
-           children: DB.map((BB => {
-             var YB, DB;
-             let {
-               key: QB,
- ... (84 more removed lines; see GitHub link above)
+     function AW(WW, iW) {
+       let OW = 0n;
+       for (const EW of WW) {
+         const WW = xW.indexOf(EW);
+         if (WW < 0) return null;
+         OW = OW * lW + BigInt(WW)
+       }
+       if (OW >> BigInt(8 * iW) !== 0n) return null;
+       const mW = [];
+       for (let EW = 0; EW < iW; EW++) mW.unshift(Number(0xffn & OW)), OW >>= 8n;
+       return mW
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4694-L4705` → after: `L4543-L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4543-L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4543-L4565) · [Before (L4694-L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4694-L4705)

```diff
-       let {
-         done: OB,
-         of: GB
-       } = BB;
-       return (0, PB.jsx)("span", {
-         className: "SmpProgress",
-         children: (0, PB.jsx)("i", {
-           style: {
-             width: `${Math.min(100,OB/Math.max(1,GB)*100)}%`
-           }
-         })
-       })
+       let iW = "shapes" === WW.style ? 1 : 0;
+       NW.forEach(((OW, mW) => {
+         WW[OW] && (iW |= 1 << mW + 1)
+       }));
+       const OW = [iW];
+       for (const EW of LW) {
+         const iW = (0, mW.i)(EW, WW[EW]);
+         OW.push(iW >> 16 & 255, iW >> 8 & 255, 255 & iW)
+       }
+       for (const EW of PW) {
+         const {
+           min: iW,
+           step: NW
+         } = mW.e[EW];
+         OW.push(Math.round(((0, mW.i)(EW, WW[EW]) - iW) / NW))
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4709-L4778` → after: `L4569-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4569-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4569-L4573) · [Before (L4709-L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4709-L4778)

```diff
-       var OB, GB, YB;
-       let {
-         entry: DB,
-         choice: QB,
-         onChoose: jB
-       } = BB;
-       const {
-         t: yB
-       } = (0, oB.H)(), MB = RQ(), {
-         key: zB,
-         item: lB,
-         meta: pB
-       } = DB, qB = "dropdown" === (null === (OB = lB.userInput) || void 0 === OB ? void 0 : OB.type) ? lB.userInput.dropdownOptions : [], ZB = !0 === pB.processing, NB = null !== pB.creator && (pB.owned > 0 || ZB), RB = NB && pB.owned > 0 ? PQ(qB) : [], WB = null === QB ? 0 : nul … [truncated]
-       return (0, PB.jsxs)("div", {
-         className: "SmpRow SmpOrderRow",
-         children: [(0, PB.jsx)(TD, {
- ... (54 more removed lines; see GitHub link above)
+       for (const iW of WW.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${wW}})`, "gi"))) {
+         const WW = UW(AW(iW[1], cW));
+         if (WW) return WW
+       }
+       return null
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4781-L4834` → after: `L4576-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4576-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4576-L4595) · [Before (L4781-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4781-L4834)

```diff
-     function eQ() {
-       var BB;
-       const {
-         t: OB
-       } = (0, oB.H)(), GB = RQ(), DB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, QB = jQ(DB, "search"), jB = jQ(DB, "creator"), yB = oQ(DB, "order"), MB = jQ(DB, "empty"), zB = SQ(QB, yB.length > 0 || null !== MB), [lB, pB] = (0, YB.useStat … [truncated]
-       return (0, PB.jsx)(kQ, {
-         browser: zB,
-         recentLabel: OB("smpShop:recentOrders"),
-         action: (0, PB.jsx)(JB.v, {
-           onClick: () => {
-             pB((BB => !BB))
-           },
-           children: OB("smpShop:createOrder")
-         }),
-         above: lB && (0, PB.jsx)(LQ, {
-           mode: "order",
- ... (38 more removed lines; see GitHub link above)
+     function UW(WW) {
+       if (!WW || WW.length !== cW || ZW(WW.slice(0, -1)) !== WW[WW.length - 1]) return null;
+       const iW = WW[0],
+         OW = {
+           ...mW.g,
+           style: 1 & iW ? "shapes" : "classic"
+         };
+       NW.forEach(((WW, mW) => {
+         OW[WW] = 0 !== (iW & 1 << mW + 1)
+       }));
+       let EW = 1;
+       for (const mW of LW) OW[mW] = WW[EW] << 16 | WW[EW + 1] << 8 | WW[EW + 2], EW += 3;
+       for (const NW of PW) {
+         const {
+           min: iW,
+           step: PW
+ ... (4 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4837` → after: `L4687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4687) · [Before (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4837)

```diff
-     function TQ() {
+     function NW(WW, iW) {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4840-L4896` → after: `L4690-L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4690-L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4690-L4705) · [Before (L4840-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4840-L4896)

```diff
-         t: OB
-       } = (0, oB.H)(), GB = RQ(), YB = oQ(null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, "myOrder");
-       return 0 === YB.length ? (0, PB.jsx)("div", {
-         className: "SmpScreen",
-         children: (0, PB.jsx)(HD, {
-           title: OB("smpShop:noOrders"),
-           children: OB("smpShop:noOrdersHint")
-         })
-       }) : (0, PB.jsx)("div", {
-         className: "SmpScreen",
-         children: (0, PB.jsx)("div", {
-           className: "SmpList",
-           children: YB.map((BB => {
-             let {
-               key: YB,
-               item: DB,
- ... (41 more removed lines; see GitHub link above)
+         min: NW,
+         max: PW,
+         step: LW
+       } = mW[WW];
+       if (!Number.isFinite(iW)) return EW[WW];
+       const cW = (null !== (OW = String(LW).split(".")[1]) && void 0 !== OW ? OW : "").length,
+         wW = Number((Math.round(iW / LW) * LW).toFixed(cW));
+       return Math.min(PW, Math.max(NW, wW))
+     }
+ 
+     function PW(WW, iW, OW) {
+       const mW = "number" === typeof OW ? NW(iW, OW) : OW;
+       return {
+         ...WW,
+         [iW]: mW
+       }
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4908-L4911` → after: `L4709-L4710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4709-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4709-L4710) · [Before (L4908-L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4908-L4911)

```diff
-       let GB = !1;
-       const YB = {};
-       for (const DB in BB) OB(DB, BB[DB]) ? YB[DB] = BB[DB] : GB = !0;
-       return GB ? YB : BB
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       return Object.keys(EW).every((mW => OW.includes(mW) || WW[mW] === iW[mW]))
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4915-L5101` → after: `L4714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4714) · [Before (L4915-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4915-L5101)

```diff
-       var OB, GB, DB, yB;
-       const {
-         show: JB,
-         shopInfo: MB,
-         selectedCategoryKey: zB
-       } = BB, {
-         t: lB
-       } = (0, oB.H)(), pB = null !== zB && void 0 !== zB ? zB : "", qB = QQ(MB, pB), ZB = null === (OB = MB[pB]) || void 0 === OB ? void 0 : OB.items, NB = null !== qB, [RB, WB] = (0, YB.useState)({}), [AB, VB] = (0, YB.useState)([]), [SB, nB] = (0, YB.useState)(!1), [UB, fB] = ( … [truncated]
-         items: ZB,
-         pending: RB,
-         shopInfo: MB,
-         active: NB,
-         canAfford: BB.canAfford,
-         buy: BB.buy
-       });
-       uB.current = {
- ... (171 more removed lines; see GitHub link above)
+       return LW(WW, EW)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5103-L5105` → after: `L4716-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4716-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4716-L4743) · [Before (L5103-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5103-L5105)

```diff
-     class sQ {
-       constructor(BB) {
-         this.info = BB
+ 
+     function wW(WW) {
+       return `#${WW.toString(16).padStart(6,"0")}`
+     }
+ 
+     function tW(WW) {
+       const iW = /^#?([0-9a-f]{6})$/i.exec(WW.trim());
+       return iW ? parseInt(iW[1], 16) : null
+     }
+   },
+   35209: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => ZW,
+       g: () => xW
+     });
+     var mW = OW(62),
+ ... (12 more added lines; see GitHub link above)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5107-L5120` → after: `L4745-L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4745-L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4745-L4792) · [Before (L5107-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5107-L5120)

```diff
-       static fromShopInfo(BB) {
-         const OB = {};
-         for (const GB in BB) {
-           const YB = !0 === BB[GB].redDot && !0 !== BB[GB].forceRemoveRedDot;
-           OB[GB] = {
-             redDot: YB,
-             items: {}
-           };
-           for (const DB in BB[GB].items) {
-             const YB = BB[GB].items[DB],
-               QB = !0 === YB.redDot && !0 !== YB.forceRemoveRedDot;
-             OB[GB].items[DB] = {
-               redDot: QB
-             }
+       return cW
+     }
+ 
+     function ZW(WW) {
+       cW = WW, (0, PW.q)(WW) ? EW.i.removeItem(LW) : EW.i.setItem(LW, (0, NW.h)(WW));
+       for (const iW of wW) iW()
+     }
+ 
+     function xW() {
+       const [WW, iW] = (0, mW.useState)(tW);
+       return (0, mW.useEffect)((() => {
+         const WW = () => {
+           iW(tW())
+         };
+         return WW(), OW = WW, wW.add(OW), () => {
+           wW.delete(OW)
+ ... (32 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5122-L5149` → after: `L4794-L33969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4794-L33969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4794-L33969) · [Before (L5122-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5122-L5149)

```diff
-         }
-         return new sQ(OB)
-       }
-       anyCategoryHasRedDots() {
-         for (const BB in this.info)
-           if (this.categoryHasRedDot(BB)) return !0;
-         return !1
-       }
-       doesCategoryExist(BB) {
-         return !(0, IG.Q)(this.info[BB])
-       }
-       categoryHasRedDot(BB) {
-         return !0 === this.info[BB].redDot
-       }
-       updateCategoryRedDot(BB, OB) {
-         this.info[BB].redDot = OB
- ... (12 more removed lines; see GitHub link above)
+       for (const EW of [-OW, OW])
+         for (const WW of [-OW, OW])
+           for (const mW of [-OW, OW]) PW.push([iW, iW, iW, EW, WW, mW]);
+       return PW
+     }
+   },
+   5424: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW
+     });
+     var mW = OW(25),
+       EW = OW(27),
+       NW = OW(1294),
+       PW = OW(3866);
+     const LW = 3e4,
+       cW = 1e3;
+ ... (29160 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5151-L5683` → after: `L33971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR33971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L33971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L33971) · [Before (L5151-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5151-L5683)

```diff
-     }
- 
-     function xQ(BB, OB) {
-       return `${BB}\x1f${OB}`
-     }
- 
-     function tQ(BB, OB) {
-       return !(0, IG.Q)(OB) && !(0, IG.Q)(BB) && OB in BB
-     }
-     const Bo = (0, YB.memo)((function(BB) {
-       var OB, GB;
-       let {
-         show: DB
-       } = BB;
-       const oB = (0, tO.f)("players", oo),
-         jB = (0, tO.f)("players", jo),
- ... (517 more removed lines; see GitHub link above)
+     };
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5685-L5733` → after: `L33973-L33976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR33973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L33973-L33976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L33973-L33976) · [Before (L5685-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5685-L5733)

```diff
-     function Oo(BB) {
-       let {
-         item: OB,
-         minWidth: GB,
-         minHeight: YB
-       } = BB;
-       const {
-         image: DB,
-         schematicId: QB,
-         imageColour: oB
-       } = OB;
-       if (QB) return (0, PB.jsx)("div", {
-         className: "ShopSchematic",
-         style: {
-           width: `${GB}rem`,
-           height: `${YB}rem`
- ... (33 more removed lines; see GitHub link above)
+     function ZW(WW, iW, OW, mW) {
+       var EW, NW, PW;
+       const LW = tW[WW];
+       return null !== (EW = null === LW || void 0 === LW || null === (NW = LW.isDisabled) || void 0 === NW ? void 0 : NW.call(LW, iW)) && void 0 !== EW && EW || !OW || !mW && null !== (PW = null === LW || void 0 === LW ? void 0 : LW.devOnly) && void 0 !== PW && PW
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5736-L5756` → after: `L33983-L33984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR33983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L33983-L33984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L33983-L33984) · [Before (L5736-L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5736-L5756)

```diff
-     function Go(BB) {
-       let {
-         image: OB,
-         minWidth: GB
-       } = BB;
-       const {
-         gameNameWithVariation: YB
-       } = (0, tO.g)("connectedGame"), DB = OB.endsWith(".jpg");
-       return (0, PB.jsx)("img", {
-         className: QB()({
-           ShopPixelImage: !DB
-         }),
-         style: {
-           width: `${DB?1.6*GB:GB}rem`,
-           height: "auto",
-           fontSize: "1.25rem"
- ... (5 more removed lines; see GitHub link above)
+     function xW() {
+       return Object.fromEntries(NW.t.map((WW => [(0, PW.Zb)(WW), AW(WW, [`Mob ${WW} Spawn Egg`])])))
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5759-L5783` → after: `L33987-L33988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR33987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L33987-L33988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L33987-L33988) · [Before (L5759-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5759-L5783)

```diff
-     function Yo(BB) {
-       let {
-         item: OB,
-         cost: GB,
-         currencyAmounts: YB
-       } = BB;
-       const DB = !isNaN(GB) && 0 !== GB && tQ(YB, OB.currency);
-       let QB = null;
-       return OB.buyButtonText ? QB = OB.buyButtonText : DB ? (QB = GB, OB.sell && (QB = -1 * GB), QB = QB.toString()) : 0 === GB ? QB = "Free" : OB.isRewardedAd && (QB = "Watch ad"), (0, IG.Q)(QB) || " " === QB ? null : (0, PB.jsxs)("div", {
-         className: "BuyItemCostAndIcon",
-         children: [DB && (0, PB.jsx)("div", {
-           style: {
-             color: YB[OB.currency].iconColour
-           },
-           className: "BuyItemIcon",
-           children: (0, PB.jsx)(yo, {
- ... (9 more removed lines; see GitHub link above)
+     function lW() {
+       return Object.fromEntries(NW.t.map((WW => [(0, PW._b)(WW), AW(WW, [`${WW} Mob Spawner Block`])])))
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5786-L5838` → after: `L33991-L33996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR33991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L33991-L33996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L33991-L33996) · [Before (L5786-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5786-L5838)

```diff
-     function Do(BB) {
-       let {
-         item: OB,
-         currInput: GB,
-         updateInput: DB,
-         onSubmit: QB
-       } = BB;
-       const {
-         t: jB
-       } = (0, oB.H)(), yB = (0, YB.useRef)(null);
-       if ((0, YB.useEffect)((() => {
-           const BB = yB.current;
-           BB && BB.value !== GB && document.activeElement !== BB && (BB.value = null !== GB && void 0 !== GB ? GB : "")
-         }), [GB]), !OB.userInput) return null;
-       let JB = OB.userInput;
-       if (NB.featureFlags.sanitizeShopInput && "text" === OB.userInput.type && (JB = {
- ... (37 more removed lines; see GitHub link above)
+     function AW(WW, iW) {
+       const OW = NW.g.includes(WW);
+       return {
+         altNames: iW,
+         showOnlyInSearch: OW,
+         isDisabled: OW ? wW : void 0
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5887-L5892` → after: `L33999-L34086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR33999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L33999-L34086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L33999-L34086) · [Before (L5887-L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5887-L5892)

```diff
- 
-     function oo(BB) {
-       let {
-         ids: OB
-       } = BB;
-       return OB
+   },
+   39185: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => kW,
+       h: () => jW,
+       j: () => UW,
+       k: () => sW
+     });
+     var mW = OW(632),
+       EW = OW(643);
+     const NW = {
+       "Sun Panel": "Solar Panel",
+       "Shaft Hopper": "Forge Hopper"
+     };
+     const PW = {
+         ...NW,
+ ... (72 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5895-L5898` → after: `L34089-L34099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34089-L34099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34089-L34099) · [Before (L5895-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5895-L5898)

```diff
-     function jo(BB) {
-       let {
-         localId: OB
-       } = BB;
+     function wW(WW, iW) {
+       if (WW in PW) return PW[WW];
+       const OW = WW.indexOf("|");
+       if (-1 !== OW) {
+         var mW;
+         const EW = null !== (mW = null === iW || void 0 === iW ? void 0 : iW.rootName) && void 0 !== mW ? mW : WW.substring(0, OW);
+         if (EW in PW) {
+           const mW = iW ? iW.metaStr ? `|${iW.metaStr}` : "" : WW.substring(OW);
+           return `${PW[EW]}${mW}`
+         }
+       }
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5902-L5921` → after: `L34103-L34115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34103-L34115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34103-L34115) · [Before (L5902-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5902-L5921)

```diff
-     function yo(BB) {
-       let {
-         iconName: OB
-       } = BB;
-       return RB.gameBridge.lookup("isItemName", OB) ? (0, PB.jsx)(mD.c, {
-         itemName: OB,
-         amount: 1
-       }) : (0, PB.jsx)(jB.b, {
-         name: OB,
-         className: "2x"
-       })
-     }
-     var Jo = GB(1699);
-     const Mo = (0, GB(1450).h)((BB => BB.PadLobbyShortcuts)),
-       Po = (0, YB.lazy)((() => Promise.resolve().then((() => GB(5082))).then((BB => ({
-         default: BB.Lobbyleaderboard
- ... (4 more removed lines; see GitHub link above)
+     function tW(WW, iW) {
+       if (!iW) return void(WW.amount = null);
+       const OW = WW.amount;
+       null === OW || void 0 === OW ? WW.amount = 1 : Number.isInteger(OW) || (WW.amount = function(WW) {
+         const iW = "number" === typeof WW || "string" === typeof WW || "boolean" === typeof WW ? Number(WW) : NaN;
+         return iW > 0 && iW !== 1 / 0 ? Math.max(1, Math.floor(iW)) : 0
+       }(OW))
+     }
+     var ZW = OW(38195),
+       xW = OW(39189),
+       lW = OW(37992),
+       AW = OW(182),
+       bW = OW(38986);
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5924-L5927` → after: `L34118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34118) · [Before (L5924-L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5924-L5927)

```diff
-       let {
-         show: OB
-       } = BB;
-       return OB ? (0, PB.jsx)(qo, {}) : null
+       return WW && JSON.parse(JSON.stringify(WW))
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5930-L5942` → after: `L34121-L34122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34121-L34122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34121-L34122) · [Before (L5930-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5930-L5942)

```diff
-     function qo() {
-       const BB = (0, XD.b)();
-       return (0, PB.jsxs)(PB.Fragment, {
-         children: [(0, PB.jsx)(Mo, {}), (0, PB.jsxs)(YB.Suspense, {
-           fallback: (0, PB.jsx)("div", {
-             className: "CharacterCustomisationLoading",
-             children: (0, PB.jsx)(SB.b, {})
-           }),
-           children: [BB && (0, PB.jsx)(zo, {
-             leaderboard: (0, PB.jsx)(Po, {})
-           }), !BB && (0, PB.jsx)(Po, {})]
-         })]
-       })
+     function UW(WW, iW) {
+       return (0, xW.c)(ZW.n[WW], iW)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5944-L5965` → after: `L34124-L34126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34124-L34126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34124-L34126) · [Before (L5944-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5944-L5965)

```diff
-     var Zo = GB(1606),
-       No = GB(2524),
-       Ro = GB(1822),
-       Wo = GB(3435),
-       Ao = GB(2965),
-       Vo = GB(1535),
-       So = GB(1493),
-       no = GB(3370),
-       Uo = GB(3380),
-       fo = GB(2505);
-     const ko = "storeRecentGiftRecipients",
-       Ko = new Map;
- 
-     function uo() {
-       try {
-         const BB = ZG.g.getItem(ko);
- ... (6 more removed lines; see GitHub link above)
+     class kW {
+       constructor(WW, iW, OW) {
+         this.Hx = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.Hx = WW, this.state = iW, this.numSlots = OW, this.items = new Array(this.numSlots) … [truncated]
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5967-L5980` → after: `L34128-L34146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34128-L34146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34128-L34146) · [Before (L5967-L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5967-L5980)

```diff
-     }
- 
-     function mo(BB, OB) {
-       var GB;
-       const [DB, QB] = (0, YB.useState)(""), [oB, jB] = (0, YB.useState)("search"), [yB, JB] = (0, YB.useState)(null), [MB, PB] = (0, YB.useState)(null), zB = (0, YB.useRef)(null), lB = (0, YB.useRef)(null);
-       (0, YB.useEffect)((() => () => {
-         zB.current && clearTimeout(zB.current)
-       }), []), (0, YB.useEffect)((() => {
-         OB || ZB()
-       }), [OB]);
-       const pB = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.name) && void 0 !== GB ? GB : null;
- 
-       function qB() {
-         zB.current && (clearTimeout(zB.current), zB.current = null)
+       stringify() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length;
+         const OW = [];
+         for (let EW = WW; EW < iW; EW++)
+           if (this.items[EW]) {
+             var mW;
+             const {
+               name: WW,
+               amount: iW,
+               attributes: NW
+             } = this.items[EW];
+             OW.push({
+               name: null !== (mW = ZW.n[WW]) && void 0 !== mW && mW.keepMetaInChest ? WW : this.Hx.bloxd.getMetaInfo(WW).rootName,
+               amount: iW,
+               attributes: NW
+ ... (3 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5982-L5992` → after: `L34148-L34159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34148-L34159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34148-L34159) · [Before (L5982-L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5982-L5992)

```diff
- 
-       function ZB() {
-         qB(), QB(""), jB("search"), JB(null)
-       }(0, YB.useEffect)((() => {
-         if (null === pB || BB === KB.NULL_USER_CONTEXT) return;
-         const OB = pB.toLowerCase();
-         if (OB === BB.getPlayerName().toLowerCase()) return void PB({
-           name: pB,
-           result: {
-             giftRecipientFound: !1,
-             giftRecipientError: "store:giftRecipientIsYou"
+       loadFromString(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = JSON.parse(WW),
+           EW = OW ? cW : wW,
+           NW = Math.min(mW.length, this.items.length);
+         for (let LW = 0; LW < NW; LW++) {
+           var PW;
+           const WW = mW[LW];
+           if (!WW || "string" !== typeof WW.name) {
+             this.items[LW] = null;
+             continue
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5994-L6014` → after: `L34161-L34164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34161-L34164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34161-L34164) · [Before (L5994-L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L5994-L6014)

```diff
-         });
-         const GB = Ko.get(OB);
-         if (GB) return void PB({
-           name: pB,
-           result: GB
-         });
-         let YB = !1;
-         return async function(BB, OB) {
-           try {
-             const GB = await (0, KB.postJsonWithMetricsCookiesAndJsonResponse)(`${KO.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
-               giftRecipientName: OB
-             }, {
-               retries: 1
-             }, BB.getMetricsCookies());
-             if ("boolean" !== typeof(null === GB || void 0 === GB ? void 0 : GB.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(GB)}`);
-             return GB
- ... (5 more removed lines; see GitHub link above)
+           WW.name = EW(WW.name, null === (PW = this.Hx.bloxd.ZZ.metadatas[WW.name]) || void 0 === PW ? void 0 : PW.meta);
+           if (tW(WW, void 0 !== this.Hx.bloxd.ZZ.metadatas[WW.name] && this.Hx.bloxd.getItemTypeObj(WW.name).stackable), !this.checkItem(WW)) {
+             this.items[LW] = null;
+             continue
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6016-L6020` → after: `L34166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34166) · [Before (L6016-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6016-L6020)

```diff
-         }(BB, pB).catch((BB => (console.error("Gift recipient lookup failed:", BB), {
-           giftRecipientFound: !1,
-           giftRecipientError: "store:giftRecipientLookupFailed"
-         }))).then((BB => {
-           !0 !== BB.giftRecipientFound && "store:giftRecipientLookupFailed" === BB.giftRecipientError || Ko.set(OB, BB), YB || PB({
+           const {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6022-L6025` → after: `L34168-L34175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34168-L34175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34168-L34175) · [Before (L6022-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6022-L6025)

```diff
-             result: BB
-           })
-         })), () => {
-           YB = !0
+             amount: OW
+           } = WW, NW = UW(iW, WW.attributes);
+           NW.customAttributes || (NW.customAttributes = {}), this.items[LW] = {
+             name: iW,
+             amount: OW,
+             attributes: NW,
+             typeObj: this.Hx.bloxd.getItemTypeObj(iW)
+           }
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6027-L6031` → after: `L34177-L34185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34177-L34185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34177-L34185) · [Before (L6027-L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6027-L6031)

```diff
-       }), [pB, BB]);
-       const NB = (0, YB.useMemo)((() => {
-         const BB = DB.trim();
-         if (!BB) return {
-           status: "none"
+         this.update(!0, iW)
+       }
+       cloneZeroAlloc() {
+         const {
+           inventory: WW,
+           items: iW
+         } = this.temporaryClone ??= {
+           inventory: new kW(this.Hx, MW(this.state.rD, null), 0),
+           items: []
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6033-L6035` → after: `L34187-L34205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34187-L34205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34187-L34205) · [Before (L6033-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6033-L6035)

```diff
-         if (!yB || yB.name !== BB || (null === MB || void 0 === MB ? void 0 : MB.name) !== yB.name) return {
-           status: "pending",
-           name: BB
+         WW.Hx = this.Hx, WW.state.rD = this.state.rD, WW.numSlots = this.numSlots, WW._selectedSlotI = this._selectedSlotI, WW.items.length = this.items.length, iW.length > this.items.length && (iW.length = this.items.length);
+         for (let OW = 0; OW < this.items.length; OW++)
+           if (iW.length <= OW && iW.push({
+               name: void 0,
+               amount: void 0,
+               attributes: void 0,
+               typeObj: void 0
+             }), null === this.items[OW]) WW.items[OW] = null;
+           else {
+             const mW = iW[OW];
+             mW.name = this.items[OW].name, mW.amount = this.items[OW].amount, mW.attributes = void 0, mW.typeObj = this.items[OW].typeObj, WW.items[OW] = mW
+           } return WW
+       }
+       pickUpItem(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.d.length;
+         const OW = {
+ ... (3 more added lines; see GitHub link above)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6037-L6047` → after: `L34207-L34274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34207-L34274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34207-L34274) · [Before (L6037-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6037-L6047)

```diff
-         const OB = MB.result;
-         return !1 === OB.giftRecipientFound ? {
-           status: "error",
-           name: yB.name,
-           error: OB.giftRecipientError
-         } : {
-           status: "found",
-           name: OB.giftRecipientName,
-           ownedPacks: OB.giftRecipientOwnedPacks,
-           hasSuperRank: OB.giftRecipientHasSuperRank,
-           isSubscriber: OB.giftRecipientIsSubscriber
+         if (WW.typeObj.stackable) {
+           if (WW.typeObj.stackable && (0 === WW.amount || null === WW.amount)) return console.error(new Error(`Stackable object ${WW.name} is being picked up with amount ${WW.amount}. Nothing will be added to inventory.`).stack), OW;
+           if (WW.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${WW.name} ${WW.amount}`).stack), OW
+         } else WW.amount = null;
+         WW.attributes = UW(WW.name, WW.attributes);
+         let EW = WW.amount,
+           NW = null,
+           PW = 0;
+         if (null !== WW.amount)
+           for (let mW = 0; mW < this.items.length; mW++) {
+             const iW = this.items[mW];
+             if (iW && (0, lW.c)(iW, WW)) {
+               if (iW.amount <= 0 || null === iW.amount) return console.error(new Error(`Found item with different amount type to current item ${WW.name} ${iW.name} ${WW.amount} ${iW.amount}`).stack), OW;
+               if (iW.amount + EW <= AW.f.maxItemStackSize) return iW.amount += EW, this.update(!0), {
+                 amountPickedUp: WW.amount,
+                 slotIdx: mW,
+ ... (52 more added lines; see GitHub link above)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6049-L6074` → after: `L34276-L34289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34276-L34289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34276-L34289) · [Before (L6049-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6049-L6074)

```diff
-       }), [DB, yB, MB]);
-       (0, YB.useEffect)((() => {
-         "found" === NB.status && "typed" === (null === yB || void 0 === yB ? void 0 : yB.source) && lB.current !== NB.name && (lB.current = NB.name, (0, ZO.reportAnalyticsClick)({
-           id: "store.gift_recipient",
-           value: "typed"
-         }))
-       }), [NB, yB]);
-       const RB = (null === MB || void 0 === MB ? void 0 : MB.name) === (null === yB || void 0 === yB ? void 0 : yB.name) ? null === MB || void 0 === MB ? void 0 : MB.result : null,
-         WB = !0 === (null === RB || void 0 === RB ? void 0 : RB.giftRecipientFound) ? RB.giftRecipientCosmetics : null;
-       return {
-         query: DB,
-         via: oB,
-         recipient: NB,
-         recipientCosmetics: WB,
-         type: function(BB) {
-           QB(BB), jB("search"), qB();
- ... (10 more removed lines; see GitHub link above)
+         return this.update(!0), OW - iW
+       }
+       findItem(WW) {
+         for (let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; iW < this.items.length; iW++) {
+           const OW = this.items[iW];
+           if ((null === OW || void 0 === OW ? void 0 : OW.name) === WW) return iW
+         }
+         return null
+       }
+       setItemSlot(WW, iW, OW, mW) {
+         if (this.items[WW] = null, "Air" !== iW) {
+           const EW = this.Hx.bloxd.getItemTypeObj(iW);
+           if (EW.stackable || null === OW || (OW = null), EW.stackable && (OW <= 0 || null === OW)) return void this.update(!0);
+           mW = UW(iW, mW), this.items[WW] = {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6076-L6094` → after: `L34291-L34349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34291-L34349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34291-L34349) · [Before (L6076-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6076-L6094)

```diff
-             source: OB
-           }), "typed" !== OB && "prefilled" !== OB && (0, ZO.reportAnalyticsClick)({
-             id: "store.gift_recipient",
-             value: OB
-           })
-         },
-         clear: ZB,
-         recordGift: function(BB, OB) {
-           ! function(BB) {
-             Ko.delete(BB.toLowerCase())
-           }(BB), PB((GB => {
-             if (!GB || GB.name.toLowerCase() !== BB.toLowerCase() || !0 !== GB.result.giftRecipientFound || "superRank" === OB) return GB;
-             const YB = GB.result.giftRecipientOwnedPacks;
-             return {
-               ...GB,
-               result: {
- ... (3 more removed lines; see GitHub link above)
+             amount: OW,
+             typeObj: EW,
+             attributes: mW
+           }
+         }
+         this.update(!0)
+       }
+       getFreeInventoryPosition() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.d.length;
+         return this.getFreeSlotBoundIdxs(0, this.items.length - WW)
+       }
+       getNumFreeSlots() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.d.length,
+           iW = 0;
+         for (let OW = 0; OW < this.items.length - WW; OW++) null === this.items[OW] && iW++;
+         return iW
+ ... (43 more added lines; see GitHub link above)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6096` → after: `L34351-L34368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34351-L34368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34351-L34368) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6096)

```diff
-           }))
+             if (OW.amount <= 0) {
+               console.error(new Error(`Found item ${OW.name} with amount ${OW.amount}`).stack);
+               continue
+             }
+             iW += OW.amount
+           } return iW
+       }
+       getHotBar() {
+         return this.items.slice(0, 10)
+       }
+       getItems() {
+         return this.items.slice(0, this.items.length)
+       }
+       getFreeSlotCount() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.d.length,
+           iW = 0;
+ ... (2 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6111-L6119` → after: `L34380-L34385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34380-L34385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34380-L34385) · [Before (L6111-L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6111-L6119)

```diff
-       let {
-         cosmetics: OB
-       } = BB;
-       return (0, PB.jsx)("span", {
-         className: "StoreRecipientAvatar",
-         children: (0, PB.jsx)(wo.b, {
-           cosmetics: OB
-         })
-       })
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW.k;
+       return new kW(WW, MW(iW, (WW => {
+         null === OW || void 0 === OW || OW(WW)
+       })), mW)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6123-L6131` → after: `L34389-L35137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34389-L35137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L34389-L35137) · [Before (L6123-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6123-L6131)

```diff
-       var GB, YB;
-       const DB = null !== (GB = BB.friend) && void 0 !== GB ? GB : {
-         isError: !1,
-         name: BB.name,
-         ranks: [],
-         cosmetics: null !== (YB = BB.cosmetics) && void 0 !== YB ? YB : {},
-         nameColour: Xo.b,
-         location: {
-           status: "noGamePlayed"
+       return {
+         rD: WW,
+         selectedItem: null,
+         inventory: null,
+         opWrapper: null,
+         onInventoryUpdate: iW
+       }
+     }
+   },
+   39379: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW
+     });
+     var mW = OW(632),
+       EW = OW(182),
+       NW = OW(39384),
+ ... (733 more added lines; see GitHub link above)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6151-L6187` → after: `L35142-L35156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35142-L35156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35142-L35156) · [Before (L6151-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6151-L6187)

```diff
-       var OB;
-       let {
-         selfName: GB,
-         giftRecipient: DB,
-         suggestionsVersion: yB,
-         pulseSignal: MB,
-         disabled: zB
-       } = BB;
-       const {
-         t: lB
-       } = (0, oB.H)(), pB = (0, CB.h)(), qB = (0, YB.useRef)(null), ZB = (0, YB.useRef)(null), {
-         query: RB,
-         via: WB,
-         recipient: AB,
-         recipientCosmetics: SB
-       } = DB, nB = (0, fo.q)(RB), UB = (0, YB.useMemo)((() => {
- ... (21 more removed lines; see GitHub link above)
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 430,
+           defaultRotationsPerSecond: .35,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null,
+             rotationsPerSecond: LW
+           }],
+           lifeformTypeForModelOverride: WW
+         }
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6349-L6352` → after: `L35162-L35179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35162-L35179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35162-L35179) · [Before (L6349-L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6349-L6352)

```diff
-         ...GB,
-         "aria-label": BB,
-         onKeyDown: BB => {
-           BB.target === BB.currentTarget && (null === OB || void 0 === OB || OB(BB))
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 430,
+           defaultRotationsPerSecond: .35,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: (0, mW.i)(60),
+             hardTolerance: null,
+             rotationsPerSecond: LW
+           }, {
+             nodeName: "LowerBody",
+             softTolerance: (0, mW.i)(60),
+             hardTolerance: null,
+             rotationsPerSecond: .425
+ ... (2 more added lines; see GitHub link above)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6358-L6498` → after: `L35185-L35199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35185-L35199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35185-L35199) · [Before (L6358-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6358-L6498)

```diff
-       let {
-         text: OB
-       } = BB;
-       return (0, PB.jsx)("span", {
-         className: "StoreRainbowText",
-         children: Array.from(OB).map(((BB, OB) => (0, PB.jsx)("span", {
-           style: {
-             color: Bj[OB % Bj.length]
-           },
-           children: BB
-         }, OB)))
-       })
-     }
-     const Dj = {
-       recipientOwns: "store:alreadyOwns",
-       sharesOwned: "store:sharesOwned",
- ... (125 more removed lines; see GitHub link above)
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 490,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null
+           }],
+           meshNamesWithVisibleBackFaces: ["BodyMesh"],
+           lifeformTypeForModelOverride: WW
+         }
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6613-L6654` → after: `L35204-L35219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35204-L35219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35204-L35219) · [Before (L6613-L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6613-L6654)

```diff
-       var OB, GB;
-       let {
-         wearer: DB,
-         active: jB,
-         tryOn: yB = zj,
-         className: JB
-       } = BB;
-       const {
-         t: MB
-       } = (0, oB.H)(), zB = (0, YB.useRef)(null), [lB] = (0, YB.useState)(Lo.h), pB = function(BB) {
-         const [OB, GB] = (0, YB.useState)(!1);
-         return (0, YB.useEffect)((() => {
-           const OB = new IntersectionObserver((BB => {
-             GB(BB[BB.length - 1].isIntersecting)
-           }));
-           return OB.observe(BB.current), () => {
- ... (26 more removed lines; see GitHub link above)
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 490,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null
+           }],
+           meshNamesWithVisibleBackFaces: ["BodyMesh"],
+           lifeformTypeForModelOverride: WW
+         }
+       }
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6658-L6670` → after: `L35223-L35238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35223-L35238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35223-L35238) · [Before (L6658-L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6658-L6670)

```diff
-       let {
-         name: OB,
-         cosmetics: GB,
-         tryOn: DB,
-         onDrawn: QB
-       } = BB;
-       const oB = (0, YB.useRef)(null),
-         jB = (0, YB.useMemo)((() => {
-           var BB;
-           return {
-             name: OB,
-             ranks: [wB.f.rank],
-             nameColour: null !== (BB = GB.nameColour) && void 0 !== BB ? BB : Xo.b
+       return {
+         handler: "CollaredMob",
+         meshMetadata: {
+           type: "fourLeggedMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 350,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: wW,
+           meshGroupsWithDifferentAtlases: {
+             Collar: {
+               numTexturesInAtlas: "default"
+             }
+           },
+           lifeformTypeForModelOverride: WW,
+           heldItemPositionParams: {
+             itemOffset: [0, -.1, 0]
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6672-L6940` → after: `L35240-L35241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35240-L35241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35240-L35241) · [Before (L6672-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6672-L6940)

```diff
-         }), [OB, GB.nameColour]);
-       return (0, PB.jsx)("div", {
-         className: "HyperRankStageLive",
-         children: (0, PB.jsx)(YB.Suspense, {
-           fallback: null,
-           children: (0, PB.jsx)(Co.b, {
-             ref: oB,
-             owner: "storeRank",
-             framing: "store",
-             forcedCosmetics: DB,
-             nametag: jB,
-             onReady: () => {
-               var BB;
-               null === (BB = oB.current) || void 0 === BB || BB.setAllCosmetics(GB)
-             },
-             onDrawn: QB
- ... (253 more removed lines; see GitHub link above)
+         }
+       }
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6944-L6947` → after: `L35244-L35263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35244-L35263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35244-L35263) · [Before (L6944-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6944-L6947)

```diff
-     function dj() {
-       (0, vo.l)(kj, {
-         lowPriority: !1
-       })
+     function SW(WW) {
+       return {
+         handler: "SaddledMob",
+         meshMetadata: {
+           type: "fourLeggedMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 350,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: wW,
+           lifeformTypeForModelOverride: WW,
+           meshGroupsWithDifferentAtlases: {
+             Saddle: {
+               numTexturesInAtlas: 1
+             }
+           },
+           heldItemPositionParams: {
+ ... (4 more added lines; see GitHub link above)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6950-L6969` → after: `L35266-L35280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35266-L35280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35266-L35280) · [Before (L6950-L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6950-L6969)

```diff
-     function Kj() {
-       const {
-         t: BB
-       } = (0, oB.H)(), [OB, GB] = (0, YB.useState)("starting"), DB = (0, YB.useRef)(null), QB = (0, MG.c)(), yB = (0, YB.useRef)(null), MB = (0, YB.useCallback)((() => {
-         const BB = DB.current;
-         null !== BB.error && BB.load();
-         const OB = BB.play();
-         yB.current = OB, OB.catch((BB => {
-           (0, yj.d)("Failed to play Super Rank video", BB), QB.current && yB.current === OB && GB("failed")
-         }))
-       }), [QB]);
-       return (0, YB.useEffect)((() => {
-         const BB = DB.current;
-         let OB;
- 
-         function GB() {
- ... (4 more removed lines; see GitHub link above)
+     function YW(WW) {
+       return {
+         handler: "SaddledMob",
+         meshMetadata: {
+           type: "fourLeggedMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 350,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: wW,
+           lifeformTypeForModelOverride: WW,
+           meshGroupsWithDifferentAtlases: {
+             Saddle: {
+               numTexturesInAtlas: 1
+             }
+           }
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6971-L6981` → after: `L35282-L35299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35282-L35299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35282-L35299) · [Before (L6971-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6971-L6981)

```diff
-       }), [MB]), (0, PB.jsxs)("div", {
-         className: "StoreSuperRankVideo",
-         children: [(0, PB.jsx)("video", {
-           ref: DB,
-           src: `${KO.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
-           poster: kj,
-           muted: !0,
-           playsInline: !0,
-           controls: "playing" === OB,
-           onPlaying: () => {
-             GB("playing")
+       }
+     }
+ 
+     function yW(WW) {
+       return {
+         handler: "SaddledMob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 390,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null
+           }],
+ ... (2 more added lines; see GitHub link above)
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6983-L7000` → after: `L35301-L35308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35301-L35308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35301-L35308) · [Before (L6983-L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L6983-L7000)

```diff
-           onError: () => {
-             GB("failed")
-           }
-         }), ("failed" === OB || "loading" === OB) && (0, PB.jsx)("div", {
-           className: "StoreSuperRankPlay",
-           children: (0, PB.jsx)(JB.f, {
-             ariaLabel: BB("general:play"),
-             loading: "loading" === OB,
-             onClick: () => {
-               GB("loading"), MB()
-             },
-             touchPressOn: "pointerup",
-             children: (0, PB.jsx)(jB.b, {
-               name: "play"
-             })
-           })
- ... (2 more removed lines; see GitHub link above)
+           lifeformTypeForModelOverride: WW,
+           meshGroupsWithDifferentAtlases: {
+             Saddle: {
+               numTexturesInAtlas: 1
+             }
+           }
+         }
+       }
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7004-L7049` → after: `L35336-L35337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35336-L35337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35336-L35337) · [Before (L7004-L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7004-L7049)

```diff
-       let {
-         tierId: OB,
-         wearer: GB,
-         onBack: YB,
-         cta: DB,
-         recipient: jB,
-         afterCta: yB
-       } = BB;
-       const {
-         t: MB
-       } = (0, oB.H)(), zB = "hyper" === (0, EB.m)(OB).look;
-       return (0, PB.jsxs)("div", {
-         className: QB()("StoreSuperRankDetail", {
-           StoreHyperRankDetail: zB
-         }),
-         children: [(0, PB.jsxs)("div", {
- ... (30 more removed lines; see GitHub link above)
+       var iW;
+       return null !== (iW = PW[WW]) && void 0 !== iW ? iW : null
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7051` → after: `L35339-L35389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35339-L35389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35339-L35389) · [Before (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7051)

```diff
-     var mj = GB(3458);
+     const NW = {
+         Player: [{
+           nodeName: "TorsoNode",
+           children: ["BodyMesh", "Body|Armour", "LowerBody|Armour", {
+             nodeName: "Head",
+             collapsesTo: "HeadMesh",
+             children: ["Helmet|Armour"]
+           }, {
+             nodeName: "LeftArm",
+             collapsesTo: "ArmLeftMesh",
+             children: ["ShoulderLeft|Armour", "GauntletLeft|Armour"]
+           }, {
+             nodeName: "RightArm",
+             collapsesTo: "ArmRightMesh",
+             children: ["ShoulderRight|Armour", "GauntletRight|Armour"]
+           }]
+ ... (35 more added lines; see GitHub link above)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7054-L7082` → after: `L35392-L35394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35392-L35394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35392-L35394) · [Before (L7054-L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7054-L7082)

```diff
-       let {
-         price: OB,
-         perks: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("div", {
-         className: "StoreSubscriptionTerms",
-         children: [GB, (0, PB.jsx)("div", {
-           className: "SmallTextLight",
-           children: YB("payments:subscriptionRenewsMonthly", {
-             price: OB
-           })
-         }), (0, PB.jsxs)("div", {
-           className: "StoreSubscriptionTermsLinks SmallTextLight",
- ... (13 more removed lines; see GitHub link above)
+       const iW = {};
+       for (const OW of WW) cW(OW, iW);
+       return iW
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7090-L7139` → after: `L35401-L36068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR35401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L35401-L36068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L35401-L36068) · [Before (L7090-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7090-L7139)

```diff
-         userContext: OB
-       } = (0, pB.d)(), {
-         purchaseUnderWay: GB,
-         notice: DB,
-         subscribe: QB
-       } = (0, Lj.c)(), [oB, jB] = (0, YB.useState)(null), [yB, JB] = (0, YB.useState)(0), MB = (0, MG.c)(), PB = OB !== KB.NULL_USER_CONTEXT, zB = PB && (OB.mayBuy() || (0, aB.guestsMayBuy)()), lB = null !== oB && oB.loadedFor === OB ? oB.offer : null, qB = null === DB || void 0  … [truncated]
- 
-       function NB() {
-         JB((BB => BB + 1))
-       }
-       return (0, YB.useEffect)((() => {
-         void 0 !== ZB.current && void 0 === qB && NB(), ZB.current = qB
-       }), [qB]), (0, YB.useEffect)((() => {
-         if (!PB) return;
-         let GB = !1;
-         return async function(BB, OB) {
- ... (34 more removed lines; see GitHub link above)
+         nodeName: OW,
+         collapsesTo: mW,
+         children: EW
+       } = WW;
+       if (mW && (iW[OW] = mW), EW)
+         for (const NW of EW) cW(NW, iW)
+     }
+   },
+   39648: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     const mW = {
+       Pig: {
+         default: {
+           atlasIdx1: 0,
+ ... (652 more added lines; see GitHub link above)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7141-L7154` → after: `L36070-L36188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36070-L36188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36070-L36188) · [Before (L7141-L7154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7141-L7154)

```diff
-       }), [BB, OB, PB, zB, yB]), {
-         offer: lB,
-         purchaseUnderWay: GB,
-         notice: DB,
-         pendingIntentId: qB,
-         mountedRef: MB,
-         checkOut: async function(BB) {
-           const GB = await QB(BB);
-           MB.current && ("unknownPackage" === GB.kind && jB({
-             loadedFor: OB,
-             offer: {
-               kind: "unavailable"
-             }
-           }), NB())
+       },
+       NPC: null,
+       67: {
+         default: {
+           atlasIdx1: 0,
+           atlasIdx2: 0,
+           atlasIdx3: 0
+         }
+       },
+       "Bobino Musculino": {
+         default: {
+           atlasIdx1: 0,
+           atlasIdx2: 0,
+           atlasIdx3: 0
+         }
+       },
+ ... (103 more added lines; see GitHub link above)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7157-L7250` → after: `L36191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36191) · [Before (L7157-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7157-L7250)

```diff
-     }
- 
-     function rj(BB) {
-       let {
-         onOfferedChange: OB
-       } = BB;
-       return (0, aB.usePurchasesAllowed)() && (0, aB.subscriptionsSold)() ? (0, PB.jsx)(Xj, {
-         onOfferedChange: OB
-       }) : null
-     }
- 
-     function Xj(BB) {
-       let {
-         onOfferedChange: OB
-       } = BB;
-       const {
- ... (78 more removed lines; see GitHub link above)
+     };
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7252-L7279` → after: `L36193-L36194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36193-L36194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36193-L36194) · [Before (L7252-L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7252-L7279)

```diff
-     function wj() {
-       const {
-         t: BB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("ul", {
-         className: "StorePerks",
-         children: [(0, PB.jsxs)("li", {
-           children: [(0, PB.jsx)(jB.b, {
-             name: "check"
-           }), (0, PB.jsx)(Yj, {
-             text: BB("store:colourfulNames")
-           })]
-         }), (0, PB.jsxs)("li", {
-           children: [(0, PB.jsx)(jB.b, {
-             name: "check"
-           }), BB("store:perkCapes")]
- ... (12 more removed lines; see GitHub link above)
+     function EW(WW, iW) {
+       return mW[WW][iW]
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7283-L7286` → after: `L36216-L36274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36216-L36274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36216-L36274) · [Before (L7283-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7283-L7286)

```diff
-       return 1 === OB ? BB("store:oneDayLeft") : BB("store:daysLeft", {
-         days: OB
-       })
-     }
+       const OW = [0, 0, 0];
+       return (0, PW.k)((mW => {
+         const EW = iW(),
+           NW = WW();
+         return mW === NW.EY.jB(NW.Dv) ? function(WW, iW) {
+           const OW = XW(WW, iW);
+           for (let mW = 0; mW < OW.length; mW++) {
+             const iW = OW[mW];
+             if (!WW.JR(iW[0], iW[1], iW[2])) return !0
+           }
+           return !1
+         }(EW, mW) : (OW[0] = Math.floor((mW.Mx.base[0] + mW.Mx.max[0]) / 2), OW[1] = Math.floor(mW.Mx.base[1]), OW[2] = Math.floor((mW.Mx.base[2] + mW.Mx.max[2]) / 2), EW.sF(OW, OW), !EW.JR(OW[0], OW[1], OW[2]))
+       }), "client")
+     }
+     const wW = .05,
+       tW = .2,
+ ... (43 more added lines; see GitHub link above)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7289-L7312` → after: `L36277-L36278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36277-L36278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36277-L36278) · [Before (L7289-L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7289-L7312)

```diff
-       let {
-         daysLeft: OB,
-         totalDays: GB,
-         urgent: YB
-       } = BB;
-       const {
-         t: DB
-       } = (0, oB.H)(), jB = GB > 0 ? Math.min(1, Math.max(.03, OB / GB)) : 1;
-       return (0, PB.jsxs)("div", {
-         className: QB()("StoreSuperRankMeterArea", {
-           StoreSuperRankMeterUrgent: YB
-         }),
-         children: [(0, PB.jsx)("span", {
-           className: "StoreSuperRankDaysLeft",
-           children: Ej(DB, OB)
-         }), (0, PB.jsx)("div", {
- ... (8 more removed lines; see GitHub link above)
+       const iW = uW[WW];
+       return 1 === iW || 2 === iW ? 1 === iW : "trapdoor" === EW.j[WW].model
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7316-L7429` → after: `L36282-L36291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36282-L36291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36282-L36291) · [Before (L7316-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7316-L7429)

```diff
-       var OB;
-       let {
-         state: GB,
-         urgent: DB,
-         daysLeft: jB,
-         totalDays: yB,
-         recipientHasSuperRank: JB,
-         busy: MB,
-         highlight: zB,
-         onOpen: lB,
-         onAct: qB,
-         onNeedRecipient: ZB,
-         onLogin: RB,
-         wearer: WB,
-         live: AB,
-         onWake: VB
- ... (98 more removed lines; see GitHub link above)
+       const iW = WW.ZZ;
+       TW = iW;
+       const OW = yW.length;
+       JW = new Uint8Array(OW), hW = new Int32Array(OW), HW = new Int8Array(OW), nW = new Uint8Array(OW);
+       for (let mW = 0; mW < OW; mW++) {
+         if (0 !== mW && void 0 === iW.metadatas[mW]) continue;
+         const OW = WW.getMetaInfo(mW),
+           EW = null === OW || void 0 === OW ? void 0 : OW.rot;
+         OW && Number.isInteger(OW.rootId) && !(Math.abs(OW.rootId) > 2147483647) && (null == EW || Number.isInteger(EW) && EW >= 0 && EW <= 127) && (JW[mW] = 1, hW[mW] = OW.rootId, HW[mW] = null !== EW && void 0 !== EW ? EW : 0, nW[mW] = OW.open ? 1 : 0)
+       }
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7431-L7433` → after: `L36293-L36310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36293-L36310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36293-L36310) · [Before (L7431-L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7431-L7433)

```diff
-     var aj = GB(1598),
-       ej = GB(1499),
-       Tj = GB(4004);
+     const eW = [!1, !1, !1],
+       vW = [0, 0, 0],
+       gW = [0, 0, 0],
+       DW = [0, 0, 0],
+       VW = [0, 0, 0],
+       pW = {
+         onLadder: !1,
+         goingUpLadderOnAxis: gW,
+         currentCeilingClimbable: 0,
+         collidingOnAxis: eW,
+         bounceOnAxisIds: vW,
+         inCobweb: !1,
+         inFluid: !1,
+         inJumpPad: !1,
+         jumpPadLaunchVelocity: 0,
+         onConveyor: !1,
+ ... (2 more added lines; see GitHub link above)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7435-L7439` → after: `L36312-L36388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36312-L36388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36312-L36388) · [Before (L7435-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7435-L7439)

```diff
-     function bj() {
-       return (0, PB.jsx)("span", {
-         className: "NewBadge",
-         children: "NEW"
-       })
+     function fW(WW, iW, OW) {
+       WW.ZZ !== TW && dW(WW);
+       const EW = WW.Hx.EY.YG(iW).JiW,
+         NW = WW.getPlayerReader(iW),
+         PW = XW(WW, OW, tW, wW),
+         LW = WW.sF(EW, DW),
+         cW = LW[0],
+         ZW = LW[1],
+         xW = LW[2],
+         lW = ZW + mW.f.ZU,
+         AW = .5 * (OW.Mx.max[0] - OW.Mx.base[0]),
+         bW = 1e-4,
+         kW = AW - bW,
+         uW = AW + .25,
+         fW = AW + tW;
+       let CW = 0,
+ ... (61 more added lines; see GitHub link above)
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7441-L7443` → after: `L36390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36390) · [Before (L7441-L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7441-L7443)

```diff
-     var Cj = GB(1398),
-       Hj = GB(1611),
-       vj = GB(34828);
+     const CW = [0, 0, 0, 0, 0, 0];
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7445-L7480` → after: `L36392-L36403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36392-L36403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36392-L36403) · [Before (L7445-L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7445-L7480)

```diff
-     function sj(BB) {
-       let {
-         character: OB,
-         drawn: GB,
-         onDrawn: DB
-       } = BB;
-       const oB = (0, YB.useRef)(null),
-         jB = (0, vj.e)(OB);
-       return (0, PB.jsx)("div", {
-         className: QB()("StoreCharacterLive", {
-           StoreCharacterLiveDrawn: GB
-         }),
-         children: (0, PB.jsx)(YB.Suspense, {
-           fallback: null,
-           children: (0, PB.jsx)(Co.b, {
-             ref: oB,
- ... (20 more removed lines; see GitHub link above)
+     function XW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const EW = iW.Mx.base,
+         NW = iW.Mx.max,
+         PW = CW;
+       return PW[0] = EW[0] - OW, PW[1] = EW[1] - mW, PW[2] = EW[2] - OW, PW[3] = NW[0] + OW, PW[4] = NW[1] + mW, PW[5] = NW[2] + OW, IW(WW.Hx, PW)
+     }
+     const BW = [null, null, null, null].map((() => [0, 0, 0])),
+       qW = [null, null, null, null].map((() => [0, 0, 0])),
+       RW = [null, null, null, null].map((() => [0, 0, 0]));
+     const GW = [];
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7482-L7599` → after: `L36405-L36427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36405-L36427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36405-L36427) · [Before (L7482-L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7482-L7599)

```diff
-     function Oy(BB) {
-       var OB;
-       let {
-         tile: GB,
-         design: DB,
-         canGoLive: yB,
-         live: JB,
-         busy: MB,
-         highlight: zB,
-         onLiveStart: lB,
-         onLiveEnd: pB,
-         onOpen: qB,
-         onAct: ZB,
-         onNeedRecipient: NB,
-         onLogin: RB
-       } = BB;
- ... (102 more removed lines; see GitHub link above)
+     function IW(WW, iW) {
+       const OW = WW.Wl;
+       let mW = 0;
+       const EW = ii(iW),
+         NW = OW[0],
+         PW = OW[1],
+         LW = OW[2],
+         cW = Math.floor(iW[1] + PW),
+         wW = Math.floor(iW[4] + PW),
+         tW = Math.floor(iW[1] + .5 * (iW[4] - iW[1]) + PW),
+         ZW = tW !== cW && tW !== wW;
+       for (let xW = 0; xW < 4; xW++) {
+         const WW = EW[xW],
+           iW = WW[0],
+           OW = WW[1],
+           PW = BW[xW],
+ ... (7 more added lines; see GitHub link above)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7602-L7641` → after: `L36431-L36453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36431-L36453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36431-L36453) · [Before (L7602-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7602-L7641)

```diff
-     function Gy(BB) {
-       let {
-         tiles: OB,
-         busy: GB,
-         highlightItem: DB,
-         onOpen: QB,
-         onAct: oB,
-         onNeedRecipient: jB,
-         onLogin: yB,
-         livePack: JB,
-         setLivePack: MB
-       } = BB;
-       const zB = (0, Tj.q)("storeCharacterCardFoil"),
-         lB = (0, Tj.q)("storeCharacterCardSpotlight"),
-         pB = zB ? "Foil" : lB ? "Spotlight" : "Showcase",
-         [qB] = (0, YB.useState)(Lo.h);
- ... (24 more removed lines; see GitHub link above)
+     function rW(WW, iW, OW) {
+       const mW = OW ? [] : aW;
+       return function(WW, iW, OW, mW) {
+         var EW;
+         const NW = WW.EY.YG(iW),
+           PW = WW.EY.jB(iW);
+         if (!PW || PW.resting[1] >= 0) return mW && (mW.length = 0), OW ? [] : (FW.length = 0, FW);
+         const LW = NW.WmW,
+           cW = null !== (EW = NW.Wl) && void 0 !== EW ? EW : WW.Wl,
+           wW = OW ? [] : FW;
+         let tW = 0;
+         const ZW = ii(LW);
+         for (let AW = 0; AW < 4; AW++) {
+           const iW = OW ? [] : zW[AW],
+             EW = ZW[AW],
+             PW = EW[0],
+ ... (7 more added lines; see GitHub link above)
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7643-L7659` → after: `L36455-L36481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36455-L36481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36455-L36481) · [Before (L7643-L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7643-L7659)

```diff
-         }, BB.pack)))
-       })
-     }
-     var Yy = GB(34834);
- 
-     function Dy(BB) {
-       let {
-         title: OB
-       } = BB;
-       return (0, PB.jsx)("h2", {
-         className: "StoreSectionDivider",
-         children: (0, PB.jsx)("span", {
-           className: "StoreSectionDividerTitle",
-           children: OB
-         })
-       })
- ... (1 more removed lines; see GitHub link above)
+         }
+         wW.length = tW;
+         const xW = OW ? [] : QW;
+         xW.length = 0;
+         let lW = 0;
+         for (let AW = 0; AW < wW.length; AW++) {
+           const WW = wW[AW],
+             iW = null === mW || void 0 === mW ? void 0 : mW[AW];
+           let OW = !0;
+           for (const mW of xW) WW[0] === mW[0] && WW[2] === mW[2] && (OW = !1);
+           if (OW) {
+             const OW = lW++;
+             xW[OW] = WW, mW && (mW[OW] = iW)
+           }
+         }
+         xW.length = lW, mW && (mW.length = lW)
+ ... (11 more added lines; see GitHub link above)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7662-L7676` → after: `L36484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36484) · [Before (L7662-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7662-L7676)

```diff
-       let {
-         mountAtOnce: OB,
-         children: GB
-       } = BB;
-       const DB = (0, YB.useRef)(null),
-         [QB, oB] = (0, YB.useState)(OB),
-         jB = (0, Yy.d)();
-       return (0, YB.useLayoutEffect)((() => {
-         const BB = DB.current;
-         BB && BB.getBoundingClientRect().top < BB.parentElement.getBoundingClientRect().bottom && oB(!0)
-       }), []), QB || jB ? (0, PB.jsx)(PB.Fragment, {
-         children: GB
-       }) : (0, PB.jsx)("div", {
-         ref: DB
-       })
+       return Wi[0][0] = WW[3], Wi[0][1] = WW[2], Wi[1][0] = WW[0], Wi[1][1] = WW[2], Wi[2][0] = WW[3], Wi[2][1] = WW[5], Wi[3][0] = WW[0], Wi[3][1] = WW[5], Wi
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7680-L7784` → after: `L36510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36510) · [Before (L7680-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7680-L7784)

```diff
-       let {
-         layout: OB,
-         mountAtOnce: GB,
-         bundleGift: DB,
-         superRankTotalDays: QB,
-         busy: jB,
-         highlightItem: yB,
-         onOpen: JB,
-         onAct: MB,
-         onNeedRecipient: zB,
-         onLogin: lB,
-         dailyDropTile: pB,
-         dealBanner: qB,
-         rankWearer: ZB
-       } = BB;
-       const {
- ... (89 more removed lines; see GitHub link above)
+       return Math.floor(WW).toLocaleString("en-US")
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7788-L7809` → after: `L36521-L36532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36521-L36532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36521-L36532) · [Before (L7788-L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7788-L7809)

```diff
-       let {
-         giftName: OB,
-         onChooseRecipient: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return OB ? (0, PB.jsxs)("span", {
-         className: "StoreDetailRecipient",
-         title: YB("store:giftFor", {
-           name: OB
-         }),
-         children: [fo.e, " ", YB("store:giftFor", {
-           name: OB
-         })]
-       }) : (0, PB.jsxs)("div", {
- ... (6 more removed lines; see GitHub link above)
+       const iW = WW.split("|")[0];
+       return (0, mW.p)(iW) ? iW === mW.e ? "cryo" : "water" : null
+     }
+     const lW = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 1, 0],
+         [0, -1, 0],
+         [0, 0, 1],
+         [0, 0, -1]
+       ],
+       AW = 63;
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7812-L7816` → after: `L36535-L36552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36535-L36552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36535-L36552) · [Before (L7812-L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7812-L7816)

```diff
-       return (0, XB.c)(Date.now()) ? (0, PB.jsx)(My, {
-         ...BB
-       }) : (0, PB.jsx)(Jy, {
-         ...BB
-       })
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const OW = iW ? function(WW, iW, OW) {
+         const mW = lW.findIndex((mW => {
+           let [EW, NW, PW] = mW;
+           return EW === WW && NW === iW && PW === OW
+         }));
+         return mW < 0 ? 0 : 1 << mW
+       }(iW[0], iW[1], iW[2]) : 0;
+       return "maker" === WW ? {
+         kind: WW,
+         faces: OW
+       } : "user" === WW ? {
+         kind: WW,
+         faces: AW & ~OW
+       } : {
+         kind: WW,
+ ... (2 more added lines; see GitHub link above)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7820-L7869` → after: `L36556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36556) · [Before (L7820-L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7820-L7869)

```diff
-       let {
-         state: OB,
-         wearer: GB,
-         mode: YB,
-         giftName: DB,
-         busy: QB,
-         highlight: jB,
-         purchaseError: yB,
-         onBack: JB,
-         onChooseRecipient: MB,
-         onAct: zB,
-         onLogin: lB
-       } = BB;
-       const {
-         t: pB
-       } = (0, oB.H)(), qB = zO("gift" !== YB);
- ... (34 more removed lines; see GitHub link above)
+       return "pipe" === WW || "tank" === WW || "maker" === WW
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7872-L7928` → after: `L36559-L36615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36559-L36615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36559-L36615) · [Before (L7872-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7872-L7928)

```diff
-     function My(BB) {
-       let {
-         state: OB,
-         daysLeft: GB,
-         wearer: DB,
-         mode: QB,
-         giftName: jB,
-         busy: yB,
-         highlight: JB,
-         purchaseError: MB,
-         onBack: zB,
-         onChooseRecipient: lB,
-         onAct: qB,
-         onLogin: ZB
-       } = BB;
-       const {
- ... (41 more removed lines; see GitHub link above)
+     function UW(WW, iW, OW) {
+       return 0 !== (WW.faces & 1 << OW) && 0 !== (iW.faces & 1 << (1 ^ OW)) && (jW(WW.kind) || jW(iW.kind))
+     }
+     const kW = (WW, iW, OW, mW) => ({
+         input: WW,
+         inputAmount: mW,
+         output: iW,
+         outputAmount: OW
+       }),
+       sW = {
+         Condenser: {
+           kind: "Condenser",
+           opMs: 2e3,
+           inputSlot: null,
+           fuelSlot: null,
+           outputSlots: [],
+ ... (41 more added lines; see GitHub link above)
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7931-L7934` → after: `L36618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36618) · [Before (L7931-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7931-L7934)

```diff
-       const GB = Math.max(1, Math.round(OB / rB.g));
-       return [1 === GB ? `${BB}OneDay` : BB, {
-         days: GB.toLocaleString()
-       }]
+       return 1e3 * (null !== iW && void 0 !== iW ? iW : 0) / WW.opMs
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7937-L7939` → after: `L36621-L36624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36621-L36624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36621-L36624) · [Before (L7937-L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7937-L7939)

```diff
-     function zy() {
-       const BB = (0, aB.usePurchasesAllowed)();
-       return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && BB && (0, aB.subscriptionsSold)() ? (0, PB.jsx)(ly, {}) : null
+     function KW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const OW = MW(sW["Coolant Mixer"], ZW) * iW;
+       return WW <= 0 ? 0 : Math.ceil(WW / OW - 1e-9)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7942-L7972` → after: `L36637-L36646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36637-L36646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36637-L36646) · [Before (L7942-L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7942-L7972)

```diff
-     function ly() {
-       const {
-         t: BB
-       } = (0, oB.H)(), {
-         offer: OB,
-         purchaseUnderWay: GB,
-         notice: DB,
-         pendingIntentId: QB,
-         checkOut: jB
-       } = gj((0, EB.m)(wB.s.id).placementId), [yB, MB] = (0, YB.useState)(!1);
-       if ((0, YB.useEffect)((() => {
-           MB(!1)
-         }), [OB]), null === OB) return null;
-       if ("loaded" !== OB.kind) return (0, PB.jsx)(mj.i, {
-         notice: {
-           kind: "error",
- ... (15 more removed lines; see GitHub link above)
+     function EW(WW, iW) {
+       const OW = {
+           rock: "stone",
+           wood: "wood",
+           granule: "gravel",
+           cuttable: "grass",
+           none1: "glass",
+           none2: "sand",
+           none3: "snow",
+           none4: "cloth"
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L7974-L8015` → after: `L36648-L36725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36648-L36725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36648-L36725) · [Before (L7974-L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L7974-L8015)

```diff
-         className: "StoreTempSubscribe SmallTextBold"
-       });
-       const pB = (0, QO.g)(zB),
-         qB = (0, NB.isMobileApp)() && (0, PB.jsx)(Ij, {
-           price: pB,
-           perks: (0, PB.jsx)(wj, {})
-         });
-       if (yB && "refund" === lB.kind) {
-         const {
-           refundedMs: OB,
-           forfeitedMs: YB,
-           premiumCurrency: DB
-         } = lB, QB = YB + (0 === DB ? OB : 0), [oB, yB] = Py("payments:subscribeRefundsGemRank", OB), [ZB, NB] = Py("payments:subscribeForfeitsGemRank", QB);
-         return (0, PB.jsxs)("div", {
-           className: "StoreTempSubscribe SmallTextBold",
-           children: [(0, PB.jsx)("div", {
- ... (26 more removed lines; see GitHub link above)
+         EW = mW.j[WW].soundType,
+         NW = iW ? "break" : "place";
+       if (void 0 !== (null === EW || void 0 === EW ? void 0 : EW[NW])) return EW[NW];
+       {
+         const EW = mW.j[WW].harvestType;
+         return void 0 === EW ? (console.error("no harvest type for block", mW.j[WW], mW.j[WW].name, iW), "stone") : OW[EW]
+       }
+     }
+     const NW = {
+       gunHeadshot: .96,
+       bulletShellBounce: .18,
+       firstPersonReload: .24,
+       thirdPersonReload: .08,
+       gunShot: .4
+     }
+   },
+ ... (62 more added lines; see GitHub link above)
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8039-L8081` → after: `L36730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36730) · [Before (L8039-L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8039-L8081)

```diff
-       let {
-         state: OB,
-         view: GB,
-         claiming: DB,
-         onOpen: jB
-       } = BB;
-       const {
-         t: MB
-       } = (0, oB.H)(), zB = (0, YB.useRef)(null), lB = "ready" === GB.kind;
-       return (0, Cj.b)(zB, lB), (0, PB.jsxs)("div", {
-         ref: zB,
-         className: QB()("DailyDropTile", {
-           DailyDropTileReady: lB
-         }),
-         children: [lB && (0, PB.jsx)(yB.c, {
-           top: "0.25rem",
- ... (27 more removed lines; see GitHub link above)
+       return 0 === WW.startDelaySeconds && null === WW.animTimeUpdate && null !== xW(WW.blendWeight) && WW.bones.every((WW => ZW(WW.rotation) && ZW(WW.position) && ZW(WW.scale)))
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8087` → after: `L36734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36734) · [Before (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8087)

```diff
-       return BB / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
+       return !tW(WW, (WW => WW.readsClock))
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8091-L8101` → after: `L36738-L36741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36738-L36741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36738-L36741) · [Before (L8091-L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8091-L8101)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
-       const YB = (BB / (2 * Math.PI / GB) % GB + GB) % GB;
-       let DB = null,
-         QB = 1 / 0;
-       for (let oB = 0; oB < GB; oB++) {
-         if (!OB[oB]) continue;
-         const BB = Math.abs(oB - YB),
-           jB = Math.min(BB, GB - BB);
-         jB < QB && (DB = oB, QB = jB)
-       }
-       return DB
+       if (WW.loop === mW.i.Loop || null !== WW.animTimeUpdate) return 1 / 0;
+       if (WW.loop === mW.i.Hold && WW.lengthSeconds > 0) return WW.startDelaySeconds + WW.lengthSeconds;
+       const OW = tW(WW, (WW => WW.readsAnimTime));
+       return OW ? 1 / 0 : WW.startDelaySeconds + iW + 2 * mW.m
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8105-L8109` → after: `L36745-L36746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36745-L36746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36745-L36746) · [Before (L8105-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8105-L8109)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
-       const YB = Wy(BB, OB, GB);
-       if (null === YB) return BB;
-       const DB = Ry(YB, GB) - BB;
-       return BB + DB - 2 * Math.PI * Math.round(DB / (2 * Math.PI))
+       const OW = WW => "number" !== typeof WW && iW(WW);
+       return OW(WW.blendWeight) || WW.bones.some((WW => [WW.rotation, WW.position, WW.scale].some((WW => null !== WW && WW.keyframes.some((WW => [0, 1, 2].some((iW => OW(WW.pre[iW]) || OW(WW.post[iW])))))))))
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8114-L8127` → after: `L36750-L36759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36750-L36759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36750-L36759) · [Before (L8114-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8114-L8127)

```diff
-       if (0 === BB.width || 0 === BB.height) return !0;
-       const OB = document.createElement("canvas");
-       OB.width = Vy, OB.height = Vy;
-       const GB = OB.getContext("2d", {
-         willReadFrequently: !0
-       });
-       if (!GB) return !0;
-       GB.drawImage(BB, 0, 0, Vy, Vy);
-       const {
-         data: YB
-       } = GB.getImageData(0, 0, Vy, Vy);
-       for (let DB = 3; DB < YB.length; DB += 4)
-         if (YB[DB] > 0) return !1;
-       return !0
+       var iW;
+       if (null === WW) return !0;
+       const OW = null === (iW = WW.keyframes[0]) || void 0 === iW ? void 0 : iW.pre;
+       return WW.keyframes.every((WW => {
+         for (let iW = 0; iW < 3; iW++) {
+           const mW = xW(OW[iW]);
+           if (null === mW || xW(WW.pre[iW]) !== mW || xW(WW.post[iW]) !== mW) return !1
+         }
+         return !0
+       }))
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8131-L8135` → after: `L36763-L36778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36763-L36778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36763-L36778) · [Before (L8131-L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8131-L8135)

```diff
-       const OB = document.createElement("canvas");
-       OB.width = BB.width, OB.height = BB.height;
-       const GB = OB.getContext("2d");
-       return GB ? (GB.drawImage(BB, 0, 0), OB) : null
-     }
+       return "number" === typeof WW ? WW : WW.constant
+     }
+     var lW = OW(38745),
+       AW = OW(38717),
+       bW = OW(38728);
+     const jW = ["1.8.0", "1.10.0"],
+       UW = 524288,
+       kW = 1e6,
+       sW = 128,
+       MW = new Map([
+         ["rotation", mW.g.Rotation],
+         ["position", mW.g.Position],
+         ["scale", mW.g.Scale]
+       ]),
+       KW = new Set(["sound_effects", "particle_effects", "timeline"]),
+       SW = new Set(["loop", "animation_length", "override_previous_animation", "anim_time_update", "blend_weight", "start_delay", "loop_delay", "bones"]);
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8137-L8146` → after: `L36780-L36792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36780-L36792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36780-L36792) · [Before (L8137-L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8137-L8146)

```diff
-     function Uy(BB) {
-       let {
-         cosmetics: OB
-       } = BB;
-       return (0, PB.jsx)("div", {
-         className: "DailyDropRevealHead",
-         children: (0, PB.jsx)(wo.b, {
-           cosmetics: OB
-         })
-       })
+     function YW(WW, iW, OW) {
+       if (WW.length > UW) return yW(iW, `file is ${WW.length} characters, over the 524288 limit`);
+       let mW;
+       try {
+         mW = JSON.parse(WW)
+       } catch (EW) {
+         return yW(iW, `invalid JSON: ${EW.message}`)
+       }
+       try {
+         return new TW(iW, OW).compile(mW)
+       } catch (EW) {
+         return yW(iW, `could not be loaded: ${EW.message}`)
+       }
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8149-L8189` → after: `L36795-L36830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36795-L36830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36795-L36830) · [Before (L8149-L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8149-L8189)

```diff
-     function fy(BB) {
-       let {
-         worn: OB,
-         UB: GB,
-         fB: DB,
-         prompting: yB,
-         className: JB
-       } = BB;
-       const {
-         t: MB
-       } = (0, oB.H)(), zB = (0, YB.useRef)(null), [lB, pB] = (0, YB.useState)(null), [qB, ZB] = (0, YB.useState)(!1), [NB, RB] = (0, YB.useState)(!1), WB = (0, YB.useRef)([]), AB = (0, YB.useRef)(null), VB = (0, YB.useRef)(0), nB = (0, YB.useRef)(null), UB = (0, YB.useRef)(!0), f … [truncated]
-         const BB = AB.current,
-           OB = WB.current,
-           GB = Wy(VB.current, OB),
-           YB = null === GB ? null : OB[GB],
-           DB = null === BB || void 0 === BB ? void 0 : BB.getContext("2d");
- ... (25 more removed lines; see GitHub link above)
+     function yW(WW, iW) {
+       return {
+         clips: [],
+         diagnostics: [{
+           severity: mW.e.Error,
+           source: WW,
+           message: iW
+         }]
+       }
+     }
+     class TW {
+       constructor(WW, iW) {
+         this.source = WW, this.variables = iW, this.diagnostics = [], this.suppressedDiagnostics = 0, this.keyframeCount = 0, this.molangChars = 0
+       }
+       compile(WW) {
+         if (!(0, AW.j)(WW)) return yW(this.source, "the file is not a JSON object");
+ ... (20 more added lines; see GitHub link above)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8193-L8194` → after: `L36833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36833) · [Before (L8193-L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8193-L8194)

```diff
- 
-       function dB(BB) {
+       compileClip(WW, iW) {
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8196-L8215` → after: `L36835-L36876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36835-L36876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36835-L36876) · [Before (L8196-L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8196-L8215)

```diff
-         (null === (OB = nB.current) || void 0 === OB ? void 0 : OB.pointerId) === BB.pointerId && (nB.current = null, UB.current || (VB.current = Ay(VB.current, WB.current), fB(), null === (GB = zB.current) || void 0 === GB || GB.turnCamera(VB.current)))
-       }(0, YB.useEffect)((() => {
-         "stills" === lB && fB()
-       }), [lB, fB]), (0, YB.useEffect)((() => () => {
-         for (const BB of WB.current) BB && (BB.width = 0, BB.height = 0);
-         WB.current = []
-       }), []);
-       const KB = yB && !NB,
-         uB = KB ? {
-           onPointerDown: BB => {
-             null === nB.current && (BB.currentTarget.setPointerCapture(BB.pointerId), nB.current = {
-               pointerId: BB.pointerId,
-               startX: BB.clientX,
-               startTurn: VB.current
-             })
-           },
- ... (4 more removed lines; see GitHub link above)
+         if (0 === WW.length || WW.length > sW) throw new AW.c("animation names must be 1-128 characters");
+         if (!(0, AW.j)(iW)) throw new AW.c("is not an object");
+         const NW = Object.keys(iW),
+           LW = NW.filter((WW => KW.has(WW))),
+           cW = NW.filter((WW => !KW.has(WW) && !SW.has(WW)));
+         LW.length > 0 && this.wZ(mW.e.Warning, `${WW}: ${LW.join(", ")} not supported and ignored`), cW.length > 0 && this.wZ(mW.e.Warning, `${WW}: unknown keys ignored: ${cW.slice(0,5).join(", ")}${cW.length>5?", ...":""}`);
+         const wW = null !== (OW = iW.bones) && void 0 !== OW ? OW : {};
+         if (!(0, AW.j)(wW)) throw new AW.c('"bones" is not an object');
+         const tW = Object.keys(wW);
+         if (tW.length > 128) throw new AW.c(`${tW.length} bones, over the 128 limit`);
+         const ZW = [],
+           xW = new Set;
+         let bW = 0;
+         for (const mW of tW) {
+           const WW = mW.toLowerCase();
+           if (0 === mW.length || mW.length > sW) throw new AW.c("bone names must be 1-128 characters");
+ ... (26 more added lines; see GitHub link above)
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8217-L8227` → after: `L36878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36878) · [Before (L8217-L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8217-L8227)

```diff
-           onPointerUp: dB,
-           onPointerCancel: dB
-         } : {};
-       return (0, PB.jsxs)("div", {
-         className: QB()("DailyDropRevealFigures", {
-           DailyDropRevealFiguresTurnable: KB
-         }, JB),
-         children: [(0, PB.jsxs)("div", {
-           className: "DailyDropRevealFigure",
-           children: [(0, PB.jsxs)("div", {
-             className: "DailyDropRevealFigureArt",
+           YW = {
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8229-L8286` → after: `L36880-L36931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36880-L36931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36880-L36931) · [Before (L8229-L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8229-L8286)

```diff
-             children: ["stills" === lB && (0, PB.jsx)("canvas", {
-               ref: AB,
-               className: "DailyDropRevealBeforeStill"
-             }), "head" === lB && (0, PB.jsx)(Uy, {
-               cosmetics: OB
-             }), null === lB && (0, PB.jsx)(SB.b, {})]
-           }), (0, PB.jsx)("span", {
-             className: "DailyDropRevealFigureLabel SmallTextBold",
-             children: MB("dailyDrop:before")
-           })]
-         }), (0, PB.jsx)(jB.b, {
-           name: "arrow-right",
-           className: "DailyDropRevealArrow"
-         }), (0, PB.jsxs)("div", {
-           className: "DailyDropRevealFigure DailyDropRevealAfter",
-           children: [(0, PB.jsxs)("div", {
- ... (42 more removed lines; see GitHub link above)
+             ...PW(MW, bW)
+           },
+           yW = (0, lW.k)(YW);
+         if (yW > lW.e) throw new AW.c(`costs ${yW} to play each frame, over the ${lW.e} limit: animate fewer bones or simplify its Molang`);
+         return YW
+       }
+       compileBone(WW, iW) {
+         if (!(0, AW.j)(iW)) throw new AW.c(`bone "${WW}" is not an object`);
+         const OW = {
+           [mW.g.Rotation]: null,
+           [mW.g.Position]: null,
+           [mW.g.Scale]: null
+         };
+         for (const mW of Object.keys(iW)) {
+           const EW = MW.get(mW);
+           if (void 0 === EW) throw new AW.c(`bone "${WW}": "${mW}" is not supported (only rotation, position and scale)`);
+ ... (36 more added lines; see GitHub link above)
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8288-L8307` → after: `L36933-L36997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36933-L36997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L36933-L36997) · [Before (L8288-L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8288-L8307)

```diff
-             }), NB && (GQ.O.includes(GB) ? (0, PB.jsx)(Uy, {
-               cosmetics: {
-                 ...OB,
-                 [GB]: DB
-               }
-             }) : (0, PB.jsx)("img", {
-               className: "DailyDropRevealAfterPiece",
-               src: `/textures/charSkins/previews/${(0,Zy.n)(GB,DB).previewTex}.png`,
-               alt: "",
-               draggable: !1
-             })), !qB && !NB && (0, PB.jsx)(SB.b, {}), (0, PB.jsx)("div", {
-               className: "DailyDropRevealTurn",
-               ...uB
-             })]
-           }), (0, PB.jsx)("span", {
-             className: "DailyDropRevealFigureLabel SmallTextBold",
- ... (4 more removed lines; see GitHub link above)
+             }
+           }
+         }
+         if (0 === EW.length) throw new AW.c(`${OW} has no keyframes`);
+         if (this.keyframeCount += EW.length, this.keyframeCount > 2e4) throw new AW.c("the file has over 20000 keyframes");
+         EW.sort(((WW, iW) => WW.time - iW.time));
+         for (let NW = 1; NW < EW.length; NW++)
+           if (EW[NW].time - EW[NW - 1].time < mW.m) throw new AW.c(`${OW} has two keyframes at ${EW[NW].time}s`);
+         return (0, AW.h)(EW), {
+           keyframes: EW.map((WW => this.compileKeyframe(WW, OW)))
+         }
+       }
+       compileKeyframe(WW, iW) {
+         const OW = this.compileTriple(WW.dataPoints[0], iW),
+           mW = WW.dataPoints.length > 1 ? this.compileTriple(WW.dataPoints[WW.dataPoints.length - 1], iW) : OW;
+         return {
+ ... (49 more added lines; see GitHub link above)
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8323-L8357` → after: `L37001-L37022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37001-L37022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37001-L37022) · [Before (L8323-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8323-L8357)

```diff
-       let {
-         drop: OB,
-         onClose: GB
-       } = BB;
-       const {
-         t: DB
-       } = (0, oB.H)(), {
-         userContext: yB
-       } = (0, pB.d)(), {
-         state: MB,
-         view: zB
-       } = (0, lG.B)(), [lB, qB] = (0, YB.useState)("closed"), [ZB] = (0, YB.useState)((() => ({
-         ...yB.getPlayerCosmetics()
-       }))), [NB] = (0, YB.useState)((() => (0, lG.k)(OB, ZB))), [RB, WB] = (0, YB.useState)(!1), [AB, VB] = (0, YB.useState)(!1), [SB] = (0, YB.useState)((() => null === MB ? Promise.resolve(null) : RG(MB))), [nB, fB] = (0, YB.useState)(null), kB = (0, MG.c)(), {
-         gameState: dB
-       } = (0, UB.o)(["gameState"]);
- ... (19 more removed lines; see GitHub link above)
+       if (void 0 === WW || !1 === WW) return mW.i.Once;
+       if (!0 === WW) return mW.i.Loop;
+       if ("hold_on_last_frame" === WW) return mW.i.Hold;
+       throw new AW.c(`loop ${JSON.stringify(WW)} is not supported (true, false or "hold_on_last_frame")`)
+     }
+     class HW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !1;
+         this.byId = new Map, this.fileById = new Map, this.byShortName = new Map, this.variables = new NW, this.diagnostics = [];
+         for (const OW of WW) {
+           const WW = YW(OW.text, OW.name, this.variables);
+           this.diagnostics.push(...WW.diagnostics);
+           for (const EW of WW.clips) {
+             const WW = this.fileById.get(EW.id);
+             if (void 0 !== WW && iW(OW.name) && iW(WW)) continue;
+             if (void 0 !== WW) {
+ ... (6 more added lines; see GitHub link above)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8359-L8526` → after: `L37024-L37036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37024-L37036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37024-L37036) · [Before (L8359-L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8359-L8526)

```diff
-           })
-         }(MB)) : ((0, pG.g)(), fB(BB), qB("remind")))
-       }
- 
-       function uB(BB) {
-         null !== nB && function(BB, OB) {
-           ZG.g.setItem(BB.askedKey, !0), (0, JG.g)(), (0, lG.v)("daily_drop.remind", OB ? "yes" : "no"), OB && AG(BB.requester)
-         }(nB, BB), GB()
-       }(0, YB.useEffect)((() => {
-         (0, lG.v)("daily_drop.reveal_step", lB)
-       }), [lB]), (0, YB.useEffect)((() => {
-         const BB = dy[lB];
-         if (void 0 === BB) return;
-         const OB = setTimeout((() => {
-           qB(ky[lB])
-         }), BB);
- ... (152 more removed lines; see GitHub link above)
+             this.byId.set(EW.id, EW), this.fileById.set(EW.id, OW.name);
+             const NW = uW(EW.id);
+             this.byShortName.set(NW, this.byShortName.has(NW) ? null : EW)
+           }
+         }
+       }
+       find(WW) {
+         var iW, OW;
+         return null !== (iW = null !== (OW = this.byId.get(WW)) && void 0 !== OW ? OW : this.byShortName.get(WW)) && void 0 !== iW ? iW : null
+       }
+       isAmbiguousShortName(WW) {
+         return null === this.byShortName.get(WW)
+       }
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8530-L8549` → after: `L37040-L37049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37040-L37049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37040-L37049) · [Before (L8530-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8530-L8549)

```diff
-       const {
-         t: GB
-       } = (0, oB.H)(), DB = function(BB, OB) {
-         const {
-           state: GB,
-           view: DB
-         } = (0, lG.B)(), [QB, oB] = (0, YB.useState)(!1), [jB, yB] = (0, YB.useState)(!1), [JB, MB] = (0, YB.useState)(null), PB = (0, YB.useRef)(null), zB = (0, YB.useRef)(!1), lB = OB && "ready" === (null === DB || void 0 === DB ? void 0 : DB.kind);
-         (0, YB.useEffect)((() => {
-           BB ? lB && !zB.current && (zB.current = !0, (0, lG.v)("daily_drop.shown", "tile")) : zB.current = !1
-         }), [BB, lB]), (0, YB.useEffect)((() => {
-           BB || (NB(), yB(!1))
-         }), [BB]);
-         const pB = BB && null === JB && !(0, lG.t)(DB);
-         (0, YB.useEffect)((() => {
-           pB && UB.c.set({
-             openEverythingMenuName: mO.p.CUSTOMISATION
- ... (4 more removed lines; see GitHub link above)
+       for (let OW = 0; OW < WW.length; OW++) {
+         const mW = WW[OW].find(iW);
+         if (null !== mW) return {
+           clip: mW,
+           pool: OW
+         };
+         if (WW[OW].isAmbiguousShortName(iW)) return "ambiguous"
+       }
+       return "noClip"
+     }
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8551-L8581` → after: `L37051-L37076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37051-L37076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37051-L37076) · [Before (L8551-L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8551-L8581)

```diff
-         function NB() {
-           null !== PB.current && (PB.current = null, MB(null))
-         }
-         return ZB.current = BB, {
-           state: GB,
-           view: DB,
-           claiming: QB,
-           claimFailed: jB,
-           reveal: JB,
-           open: async function() {
-             if (!qB.current) {
-               qB.current = !0, oB(!0), yB(!1);
-               try {
-                 const {
-                   state: BB,
-                   drop: OB
- ... (15 more removed lines; see GitHub link above)
+     function uW(WW) {
+       return WW.slice(WW.lastIndexOf(".") + 1)
+     }
+   },
+   38759: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       e: () => NW,
+       h: () => PW
+     });
+     var mW = OW(38721);
+     const EW = .001;
+ 
+     function NW(WW, iW) {
+       const OW = iW - WW.startDelaySeconds;
+       if (OW < 0) return NaN;
+ ... (10 more added lines; see GitHub link above)
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8603-L8616` → after: `L37081-L37135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37081-L37135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37081-L37135) · [Before (L8603-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8603-L8616)

```diff
-     function my(BB) {
-       let {
-         show: OB
-       } = BB;
-       const GB = uy(OB, OB);
-       return (0, yO.E)(OB && GB.shown, (0, yO.G)(), (BB => {
-         (0, lG.v)("daily_drop.store_only_open", BB)
-       })), OB && GB.shown ? (0, PB.jsxs)("div", {
-         className: "Store StoreDailyDropOnly",
-         children: [GB.claimFailed, GB.tile && (0, PB.jsx)("div", {
-           className: "StoreDailyDropOnlyTile",
-           children: GB.tile
-         }), GB.reveal]
-       }) : null
+     function PW(WW, iW, OW, EW, NW) {
+       const PW = WW.keyframes;
+       if (1 === PW.length) return void wW(PW[0], iW, EW, NW);
+       const LW = function(WW, iW) {
+           let OW = 0,
+             mW = WW.length;
+           for (; OW < mW;) {
+             const EW = OW + mW >>> 1;
+             WW[EW].time < iW ? OW = EW + 1 : mW = EW
+           }
+           return OW - 1
+         }(PW, iW),
+         ZW = LW + 1 < PW.length ? LW + 1 : -1,
+         xW = LW >= 0 ? PW[LW] : null,
+         lW = ZW >= 0 ? PW[ZW] : null;
+       let AW = null;
+ ... (39 more added lines; see GitHub link above)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8618-L8620` → after: `L37137-L37174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37137-L37174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37137-L37174) · [Before (L8618-L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8618-L8620)

```diff
-     var Iy = GB(2807),
-       Fy = GB(34838),
-       iy = GB(34845);
+ 
+     function tW(WW, iW) {
+       return "number" === typeof WW ? WW : WW.evaluate(iW)
+     }
+   },
+   38721: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW,
+       g: () => EW,
+       i: () => NW,
+       m: () => mW
+     });
+     const mW = 1 / 1200;
+     let EW = function(WW) {
+         return WW[WW.Rotation = 0] = "Rotation", WW[WW.Position = 1] = "Position", WW[WW.Scale = 2] = "Scale", WW
+       }({}),
+ ... (22 more added lines; see GitHub link above)
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8623-L8667` → after: `L37177-L37185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37177-L37185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37177-L37185) · [Before (L8623-L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8623-L8667)

```diff
-       let {
-         view: OB,
-         highlight: GB,
-         scrollSignal: DB,
-         onScrolledIntoView: QB
-       } = BB;
-       const {
-         t: jB
-       } = (0, oB.H)(), {
-         purchaseUnderWay: yB,
-         notice: JB,
-         needsLogin: MB,
-         buyPack: zB
-       } = (0, iy.c)("banner");
-       (0, Iy.T)(OB.arm, "banner");
-       const lB = (0, YB.useRef)(null);
- ... (29 more removed lines; see GitHub link above)
+       let iW = tW.get(WW);
+       if (void 0 === iW) {
+         var OW, mW;
+         iW = AW(WW.blendWeight) + (null !== (OW = null === (mW = WW.animTimeUpdate) || void 0 === mW ? void 0 : mW.cost) && void 0 !== OW ? OW : 0);
+         for (const OW of WW.bones)
+           for (const WW of [OW.rotation, OW.position, OW.scale]) null !== WW && (iW += xW(WW));
+         tW.set(WW, iW)
+       }
+       return iW
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8673-L8701` → after: `L37189-L37194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37189-L37194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37189-L37194) · [Before (L8673-L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8673-L8701)

```diff
-       let {
-         wallet: OB,
-         close: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("div", {
-         className: "NewPlayerDealGiftNotice",
-         children: [(0, PB.jsxs)("div", {
-           className: "NewPlayerDealGiftNoticeRows",
-           children: [(0, PB.jsx)("span", {
-             children: YB("newPlayerDeal:giftable")
-           }), (0, PB.jsx)(bo.b, {
-             amount: (0, Ao.b)(OB)
-           }), (0, PB.jsx)("span", {
- ... (13 more removed lines; see GitHub link above)
+       let iW = 0,
+         OW = !1;
+       for (const NW of WW.keyframes) iW = Math.max(iW, lW(NW.pre) + (NW.hasPrePost ? lW(NW.post) : 0)), OW ||= NW.catmullRom;
+       const mW = WW.keyframes.length,
+         EW = Math.ceil(Math.log2(mW));
+       return OW && mW > 1 ? PW + EW + (mW >= 3 ? cW : mW) * iW : NW + EW + Math.min(LW, mW) * iW
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8705-L8712` → after: `L37198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37198) · [Before (L8705-L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8705-L8712)

```diff
-       DO.NotificationProvider.showCustomPopup({
-         body: OB => (0, PB.jsx)(ry, {
-           wallet: BB,
-           close: OB
-         }),
-         middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
-         disableExitButton: !0
-       })
+       return AW(WW[0]) + AW(WW[1]) + AW(WW[2])
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8720-L8909` → after: `L37202-L37203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37202-L37203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37202-L37203) · [Before (L8720-L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8720-L8909)

```diff
-       return "found" === BB.status || "error" === BB.status && "store:giftRecipientLookupFailed" === BB.error ? BB.name : null
-     }(0, yO.x)(xB.prefetchBillingOfferings);
-     const hy = (0, YB.memo)((function(BB) {
-       var OB;
-       let {
-         show: DB
-       } = BB;
-       const {
-         t: jB
-       } = (0, oB.H)(), {
-         userContext: yB
-       } = (0, pB.d)(), JB = (0, aB.usePurchasesAllowed)(), MB = yB !== KB.NULL_USER_CONTEXT, zB = mo(yB, DB), [lB, qB] = (0, ZB.e)(), {
-         page: NB,
-         urlMode: RB,
-         goTo: WB
-       } = (0, Io.f)(), AB = function(BB) {
- ... (174 more removed lines; see GitHub link above)
+       return "number" === typeof WW ? 0 : WW.cost
+     }
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8911-L8912` → after: `L37205-L37210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37205-L37210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37205-L37210) · [Before (L8911-L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8911-L8912)

```diff
-       function AO(BB) {
-         (0, Wo.e)(BB, "gift" === DO ? zB.query.trim() : null)
+     function bW(WW) {
+       let iW = 0;
+       for (const OW of WW.layers) {
+         let WW = null === OW.fallback ? 0 : jW(OW.fallback);
+         for (const iW of OW.states.values()) WW = Math.max(WW, jW(iW));
+         iW += WW
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8915-L8919` → after: `L37215-L37220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37215-L37220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37215-L37220) · [Before (L8915-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8915-L8919)

```diff
-       function VO(BB, OB) {
-         (0, ZO.reportAnalyticsClick)({
-           id: "store.purchase_done",
-           value: `${OB?"gift":"self"}:${BB}`
-         }), OB && (zB.recordGift(OB.name, BB), SO(OB))
+     function jW(WW) {
+       let iW = 0,
+         OW = 0;
+       for (const mW of WW.children) {
+         const WW = ZW(mW.clip.clip);
+         WW > iW ? (OW = iW, iW = WW) : WW > OW && (OW = WW)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8922-L9118` → after: `L37258-L37274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37258-L37274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37258-L37274) · [Before (L8922-L9118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L8922-L9118)

```diff
-       function SO(BB) {
-         ! function(BB) {
-           try {
-             ZG.g.setItem(ko, (0, fo.E)(uo(), BB))
-           } catch {}
-         }({
-           name: BB.name,
-           cosmetics: BB.cosmetics
-         }), WB(wy), LB((OB => {
-           var GB;
-           return {
-             name: BB.name,
-             seq: (null !== (GB = null === OB || void 0 === OB ? void 0 : OB.seq) && void 0 !== GB ? GB : 0) + 1
-           }
-         }))
-       }
- ... (181 more removed lines; see GitHub link above)
+     function wW(WW, iW) {
+       const OW = WW.gate < 0 ? 1 : iW[WW.gate],
+         mW = (iW[WW.from] * WW.scale + WW.offset) * OW;
+       return Math.min(WW.max, Math.max(WW.min, mW))
+     }
+   },
+   38304: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW,
+       f: () => wW,
+       h: () => tW,
+       l: () => PW,
+       n: () => NW,
+       o: () => ZW
+     });
+     const mW = Math.PI / 180,
+ ... (1 more added lines; see GitHub link above)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9120-L9124` → after: `L37276-L37280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37276-L37280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37276-L37280) · [Before (L9120-L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9120-L9124)

```diff
-     function oJ(BB) {
-       let {
-         show: OB
-       } = BB;
-       return OB ? (0, PB.jsx)(jJ, {}) : null
+     function NW(WW, iW, OW, EW) {
+       const NW = WW * mW * .5,
+         PW = iW * mW * .5,
+         cW = OW * mW * .5;
+       LW(Math.cos(NW), Math.sin(NW), Math.cos(PW), Math.sin(PW), Math.cos(cW), Math.sin(cW), EW)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9127-L9166` → after: `L37283-L37294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37283-L37294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37283-L37294) · [Before (L9127-L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9127-L9166)

```diff
-     function jJ() {
-       const {
-         t: BB
-       } = (0, oB.H)(), {
-         followsLeader: OB
-       } = (0, Cy.d)(), {
-         loading: GB,
-         friends: DB,
-         requests: yB,
-         invites: MB
-       } = (0, CB.h)(), {
-         userContext: zB
-       } = (0, pB.d)(), [lB, qB] = (0, YB.useState)(QJ.i);
-       (0, YB.useEffect)((() => {
-         (0, QJ.b)()
-       }), []);
- ... (24 more removed lines; see GitHub link above)
+     function PW(WW, iW, OW, mW, EW) {
+       cW(mW, 0, WW), cW(mW, 3, iW), cW(mW, 6, OW), LW(mW[1], mW[2], mW[4], mW[5], mW[7], mW[8], EW)
+     }
+ 
+     function LW(WW, iW, OW, mW, EW, NW, PW) {
+       PW[0] = iW * OW * EW - WW * mW * NW, PW[1] = WW * mW * EW + iW * OW * NW, PW[2] = WW * OW * NW - iW * mW * EW, PW[3] = WW * OW * EW + iW * mW * NW
+     }
+ 
+     function cW(WW, iW, OW) {
+       if (WW[iW] !== OW) {
+         const EW = OW * mW * .5;
+         WW[iW] = OW, WW[iW + 1] = Math.cos(EW), WW[iW + 2] = Math.sin(EW)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9419-L9423` → after: `L37297-L37341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37297-L37341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37297-L37341) · [Before (L9419-L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9419-L9423)

```diff
-     var yJ = GB(2753),
-       JJ = GB(4065),
-       MJ = GB(1938),
-       PJ = GB(4062),
-       zJ = GB(4067);
+ 
+     function wW(WW, iW, OW, mW, NW) {
+       const PW = 1 - 2 * (iW * iW + OW * OW),
+         LW = 2 * (WW * iW - mW * OW),
+         cW = 2 * (WW * iW + mW * OW),
+         wW = 1 - 2 * (WW * WW + OW * OW),
+         tW = 2 * (WW * OW - mW * iW),
+         ZW = 2 * (iW * OW + mW * WW),
+         xW = 1 - 2 * (WW * WW + iW * iW);
+       NW[1] = Math.asin(-Math.min(1, Math.max(-1, tW))) * EW, Math.abs(tW) < .9999999 ? (NW[0] = Math.atan2(ZW, xW) * EW, NW[2] = Math.atan2(cW, PW) * EW) : (NW[0] = 0, NW[2] = Math.atan2(-LW, wW) * EW)
+     }
+ 
+     function tW(WW, iW, OW) {
+       const mW = WW[0],
+         EW = WW[1],
+         NW = WW[2],
+ ... (29 more added lines; see GitHub link above)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9426-L9444` → after: `L37344-L37347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37344-L37347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37344-L37347) · [Before (L9426-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9426-L9444)

```diff
-       let {
-         count: OB,
-         claiming: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return 0 === OB ? null : (0, PB.jsx)(JB.q, {
-         className: "SeasonPassClaimAllButton",
-         loading: GB,
-         onClick: () => {
-           JJ.g.claimAll().catch((BB => {
-             console.error("Failed to claim all season pass rewards", BB)
-           }))
-         },
-         children: YB("seasonPass:claimAll", {
- ... (3 more removed lines; see GitHub link above)
+       return {
+         constant: WW,
+         input: -1
+       }
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9447-L9544` → after: `L37350-L37351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37350-L37351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37350-L37351) · [Before (L9447-L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9447-L9544)

```diff
-     function pJ(BB) {
-       let {
-         view: OB,
-         claiming: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)(), {
-         userContext: DB
-       } = (0, pB.d)(), {
-         config: QB,
-         state: yB,
-         tier: JB,
-         xpIntoTier: MB,
-         xpForNextTier: zB
-       } = OB, lB = Date.now(), qB = (0, zJ.h)(OB, lB), ZB = JB >= QB.tierCount, NB = qB && !ZB && zB > 0, RB = zB > 0 && !ZB ? Math.min(100, MB / zB * 100) : 100, WB = yB.xpToday >= QB.maxXpPerDay, AB = null !== OB.xpBoost && OB.xpBoost.endsAtMs > lB && !WB ? OB.xpBoost : null;
- ... (82 more removed lines; see GitHub link above)
+     function tW(WW, iW) {
+       return void 0 === WW ? 0 : lW(WW, 0, .001, 1e3, iW)
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9549-L9550` → after: `L37354-L37357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37354-L37357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37354-L37357) · [Before (L9549-L9550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9549-L9550)

```diff
-     function NJ(BB) {
-       return null !== (0, Mj.s)(BB) || null !== (0, Mj.l)(BB)
+     function ZW(WW, iW) {
+       if (void 0 === WW || "add" === WW) return PW.g.Add;
+       if ("override" === WW) return PW.g.Override;
+       throw new cW(`${iW} must be "add" or "override"`)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9554-L9556` → after: `L37360-L37365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37360-L37365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37360-L37365) · [Before (L9554-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9554-L9556)

```diff
-     function WJ() {
-       var BB;
-       null === (BB = RJ) || void 0 === BB || BB.tearDownNotification()
+     function xW(WW, iW) {
+       if (void 0 === WW) return null;
+       if (!Array.isArray(WW) || 0 === WW.length || WW.length > 128) throw new cW(`${iW} must list 1-128 bone names`);
+       for (const OW of WW)
+         if ("string" !== typeof OW || 0 === OW.length || OW.length > 128) throw new cW(`${iW} must list bone names`);
+       return WW
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9559-L9583` → after: `L37368-L37371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37368-L37371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37368-L37371) · [Before (L9559-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9559-L9583)

```diff
-     function AJ(BB) {
-       let {
-         reward: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, oB.H)(), {
-         userContext: YB
-       } = (0, pB.d)(), DB = (0, Mj.s)(OB);
-       return (0, PB.jsxs)("div", {
-         className: "PromptGenericPopup SeasonPassRewardPreview",
-         children: [(0, PB.jsx)("div", {
-           className: "PromptGenericPopupTitle SmallTextBold",
-           children: (0, Mj.g)(OB, GB)
-         }), null !== DB && (0, PB.jsx)("div", {
-           className: "SeasonPassRewardPreviewProfileEffect",
- ... (9 more removed lines; see GitHub link above)
+     function lW(WW, iW, OW, mW, EW) {
+       if (void 0 === WW) return iW;
+       if ("number" !== typeof WW || !Number.isFinite(WW) || WW < OW || WW > mW) throw new cW(`${EW} must be a number from ${OW} to ${mW}`);
+       return WW
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9586-L9615` → after: `L37374-L37416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37374-L37416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37374-L37416) · [Before (L9586-L9615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9586-L9615)

```diff
-     function VJ(BB) {
-       let {
-         reward: OB
-       } = BB;
-       const {
-         userContext: GB
-       } = (0, pB.d)(), DB = (0, YB.useRef)(null), {
-         previewEmote: QB,
-         playEmote: oB
-       } = (0, ZJ.c)(), jB = (0, YB.useMemo)((() => (0, Mj.l)(OB)), [OB]), yB = jB.emote;
-       return (0, PB.jsx)("div", {
-         className: "SeasonPassRewardPreviewCharacter",
-         children: (0, PB.jsx)(YB.Suspense, {
-           fallback: (0, PB.jsx)(SB.b, {}),
-           children: (0, PB.jsx)(Co.b, {
-             ref: DB,
- ... (14 more removed lines; see GitHub link above)
+     function AW(WW, iW) {
+       if (!(0, LW.j)(WW)) throw new cW(`${iW} must be an object`);
+       return WW
+     }
+ 
+     function bW(WW, iW, OW) {
+       for (const mW of Object.keys(WW))
+         if (!iW.includes(mW)) throw new cW(`${OW}: unknown key "${mW}"`)
+     }
+     var jW = OW(38736),
+       UW = OW(38745),
+       kW = OW(38721),
+       sW = OW(38753);
+     const MW = 65536,
+       KW = 1e6,
+       SW = ["clip", "blend", "rate", "stride", "rest"],
+ ... (27 more added lines; see GitHub link above)
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9619-L9630` → after: `L37420-L37514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37420-L37514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37420-L37514) · [Before (L9619-L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9619-L9630)

```diff
-       let {
-         waitingCount: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, oB.H)();
-       return (0, aB.usePurchasesAllowed)() ? (0, PB.jsxs)("div", {
-         className: "SeasonPassHyperUpsell",
-         children: [OB > 0 && (0, PB.jsx)("span", {
-           className: "SeasonPassHyperUpsellText",
-           children: 1 === OB ? GB("seasonPass:hyperRewardWaiting") : GB("seasonPass:hyperRewardsWaiting", {
-             count: OB
+       if (WW.length > MW) return null;
+       try {
+         const iW = JSON.parse(WW);
+         return (0, LW.j)(iW) && "string" === typeof iW.target ? iW.target : null
+       } catch {
+         return null
+       }
+     }
+     class JW {
+       constructor(WW, iW) {
+         this.source = WW, this.options = iW, this.inputIndexByName = new Map;
+         for (const [OW, mW] of sW.g) this.inputIndexByName.set(OW, mW)
+       }
+       compile(WW) {
+         const iW = AW(WW, "the file");
+         if (bW(iW, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), iW.format_version !== PW.c) throw new cW(`format_version must be "${PW.c}"`);
+ ... (79 more added lines; see GitHub link above)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9632-L9649` → after: `L37516-L37676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37516-L37676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37516-L37676) · [Before (L9632-L9649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9632-L9649)

```diff
-         }), (0, PB.jsxs)("span", {
-           className: "SeasonPassHyperUpsellButtonWrapper",
-           children: [(0, PB.jsxs)(JB.w, {
-             className: "SeasonPassHyperUpsellButton",
-             onClick: () => {
-               (0, yO.p)({
-                 mode: "self",
-                 source: "seasonPass",
-                 openItem: "superRank"
-               })
-             },
-             children: [(0, PB.jsx)(EB.c, {}), " ", GB("homePage:getHyperRank")]
-           }), OB > 0 && (0, PB.jsx)("span", {
-             className: "SeasonPassHyperUpsellCount",
-             children: OB
-           })]
- ... (2 more removed lines; see GitHub link above)
+         }
+         return {
+           variables: mW,
+           constants: EW
+         }
+       }
+       compileLayer(WW, iW) {
+         const OW = AW(WW, iW);
+         bW(OW, ["name", "states", ...SW, "mode", "bones", "weight", "transition"], iW);
+         const mW = OW.name;
+         if ("string" !== typeof mW || !YW.test(mW)) throw new cW(`${iW}.name must be an identifier`);
+         iW = `layer "${mW}"`;
+         const EW = new Map;
+         let NW = null;
+         if (void 0 !== OW.states) {
+           var LW;
+ ... (145 more added lines; see GitHub link above)
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9651` → after: `L37678-L37695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37678-L37695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37678-L37695) · [Before (L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9651)

```diff
-     var nJ = GB(34848);
+ 
+     function hW(WW, iW) {
+       return void 0 === WW[iW] ? {} : WW[iW]
+     }
+     var HW = OW(38755);
+     const nW = 64,
+       uW = 2097152,
+       oW = /^[A-Za-z0-9][A-Za-z0-9 _.-]{0,95}\.(animation|binding)\.json$/,
+       dW = ".animation.json",
+       eW = new Set(["Player", "NPC", "Person"]),
+       vW = "crouching",
+       gW = new Set([...mW.h, ...EW.k, vW]),
+       DW = "parked",
+       VW = "occupied",
+       pW = new Set([DW, VW]),
+       fW = new Set(NW.c),
+ ... (2 more added lines; see GitHub link above)
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9654-L9676` → after: `L37698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37698) · [Before (L9654-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9654-L9676)

```diff
-       let {
-         stub: OB,
-         name: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("span", {
-         className: "SeasonPassTrackLabelName",
-         children: [(0, PB.jsx)("span", {
-           className: "SeasonPassTicketStub",
-           children: OB
-         }), (0, PB.jsxs)("span", {
-           className: "SeasonPassTicketBody",
-           children: [(0, PB.jsx)("span", {
-             className: "SeasonPassTicketPass",
- ... (7 more removed lines; see GitHub link above)
+       return fW.has(WW)
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9680-L9703` → after: `L37702-L37704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37702-L37704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37702-L37704) · [Before (L9680-L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9680-L9703)

```diff
-       var OB, GB;
-       let {
-         view: DB,
-         claimingKeys: QB,
-         hyperWaitingCount: yB,
-         onClaim: JB
-       } = BB;
-       const {
-         t: MB
-       } = (0, oB.H)(), zB = (0, YB.useRef)(null), {
-         config: lB,
-         tier: pB,
-         xpIntoTier: qB,
-         xpForNextTier: ZB,
-         state: NB
-       } = DB, RB = (0, zJ.h)(DB), WB = (0, YB.useRef)(!1), AB = null !== (OB = null === (GB = DB.claimable[0]) || void 0 === GB ? void 0 : GB.tier) && void 0 !== OB ? OB : Math.min(pB + 1, lB.tierCount);
- ... (8 more removed lines; see GitHub link above)
+       return BW(WW) ? pW : gW
+     }
+     const RW = new Map([...CW].map((WW => [WW.toLowerCase(), WW])));
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9705-L9777` → after: `L37706-L37714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37706-L37714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37706-L37714) · [Before (L9705-L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9705-L9777)

```diff
-         function OB(OB) {
-           WB.current = !0, Math.abs(OB.deltaY) <= Math.abs(OB.deltaX) || BB.scrollWidth <= BB.clientWidth || (OB.preventDefault(), BB.scrollLeft += OB.deltaY)
-         }
-         return BB.addEventListener("wheel", OB, {
-           passive: !1
-         }), () => {
-           BB.removeEventListener("wheel", OB)
-         }
-       }), []);
-       const VB = ZB > 0 ? qB / ZB : 1;
-       return (0, PB.jsxs)("div", {
-         className: "SeasonPassTrack",
-         children: [(0, PB.jsxs)("div", {
-           className: "SeasonPassTrackLabels",
-           children: [(0, PB.jsxs)("div", {
-             className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
- ... (57 more removed lines; see GitHub link above)
+     function GW(WW, iW) {
+       const OW = "builtIn" === iW,
+         mW = OW ? XW : CW,
+         EW = [],
+         NW = (WW, iW) => {
+           EW.push({
+             severity: kW.e.Error,
+             source: WW,
+             message: iW
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9779-L9780` → after: `L37716-L37770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37716-L37770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37716-L37770) · [Before (L9779-L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9779-L9780)

```diff
-         })]
-       })
+         },
+         PW = Object.keys(WW);
+       let LW = 0;
+       for (const bW of PW) LW += bW.length + ("string" === typeof WW[bW] ? WW[bW].length : 0);
+       if (!OW && (PW.length > nW || LW > uW)) return NW("animations", `${PW.length} files and ${LW} characters, over the ${nW} file or ${uW} character limit`), {
+         pool: new jW.d([]),
+         bindings: new Map,
+         targetClips: new Map,
+         diagnostics: EW
+       };
+       const cW = [],
+         wW = new Map,
+         tW = new Map;
+       for (const bW of PW.sort()) {
+         var ZW;
+         const iW = WW[bW],
+ ... (39 more added lines; see GitHub link above)
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9782-L9839` → after: `L37772-L37780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37772-L37780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37772-L37780) · [Before (L9782-L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9782-L9839)

```diff
-     const kJ = (0, YB.memo)((function(BB) {
-       let {
-         tierRewards: OB,
-         nodeState: GB,
-         progress: YB,
-         freeState: DB,
-         hyperState: oB,
-         freeClaiming: jB,
-         hyperClaiming: yB,
-         hasHyperRank: JB,
-         onClaim: MB
-       } = BB;
-       const {
-         tier: zB
-       } = OB;
-       return (0, PB.jsxs)("div", {
- ... (42 more removed lines; see GitHub link above)
+ 
+     function IW(WW, iW, OW) {
+       const mW = WW.bindings.get(iW);
+       return void 0 === mW ? {
+         binding: null,
+         diagnostics: []
+       } : yW(mW.text, mW.name, {
+         stateNames: qW(iW),
+         pools: [WW.pool, ...OW]
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9841` → after: `L37782-L37783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37782-L37783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37782-L37783) · [Before (L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9841)

```diff
-     }));
+     }
+     const aW = 0;
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9843-L9879` → after: `L37785-L37885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37785-L37885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37785-L37885) · [Before (L9843-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9843-L9879)

```diff
-     function dJ(BB) {
-       let {
-         tier: OB,
-         track: GB,
-         reward: YB,
-         tileState: DB,
-         claiming: QB,
-         padlock: oB,
-         onClaim: jB
-       } = BB;
-       return YB ? (0, PB.jsx)("div", {
-         className: `SeasonPassTrackSlot SeasonPassTrackSlot-${GB}`,
-         children: (0, PB.jsx)(qj.f, {
-           reward: YB,
-           tileState: DB,
-           track: GB,
- ... (21 more removed lines; see GitHub link above)
+     function rW(WW, iW, OW) {
+       const mW = qW(OW),
+         EW = WW.targetClips.get(OW),
+         NW = WW.bindings.get(OW);
+       if (void 0 !== NW) {
+         const OW = void 0 === EW ? [WW.pool, iW.pool] : [EW.pool, WW.pool, iW.pool];
+         return yW(NW.text, NW.name, {
+           stateNames: mW,
+           pools: OW
+         })
+       }
+       if (void 0 === EW) return {
+         binding: null,
+         diagnostics: []
+       };
+       const PW = iW.bindings.get(OW);
+ ... (85 more added lines; see GitHub link above)
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9881-L9883` → after: `L37887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37887) · [Before (L9881-L9883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9881-L9883)

```diff
-       }) : (0, PB.jsx)("div", {
-         className: `SeasonPassTrackSlot SeasonPassTrackSlot-${GB}`
-       })
+       }
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9887-L9890` → after: `L37891-L37902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37891-L37902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37891-L37902) · [Before (L9887-L9890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9887-L9890)

```diff
-       let {
-         show: OB
-       } = BB;
-       return OB ? (0, PB.jsx)(uJ, {}) : null
+       const iW = new Set,
+         OW = (WW, OW) => {
+           const mW = null === OW ? null : new Set(OW.map((WW => WW.toLowerCase())));
+           for (const EW of WW.bones) {
+             const WW = EW.name.toLowerCase();
+             (null === mW || mW.has(WW)) && iW.add(WW)
+           }
+         };
+       for (const mW of WW.layers)
+         for (const WW of LW(mW)) OW(WW, mW.bones);
+       for (const mW of WW.actions.values()) OW(mW.clip.clip, mW.bones);
+       return iW
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9893-L9921` → after: `L37905-L37907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37905-L37907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37905-L37907) · [Before (L9893-L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9893-L9921)

```diff
-     function uJ() {
-       const {
-         t: BB
-       } = (0, oB.H)(), OB = (0, JJ.h)();
-       return (0, YB.useEffect)((() => WJ), []), (0, PB.jsxs)("div", {
-         className: "SeasonPassScreen",
-         children: ["loading" === OB.status && (0, PB.jsx)(SB.b, {}), "error" === OB.status && (0, PB.jsxs)("div", {
-           className: "SeasonPassScreenNotice",
-           children: [(0, PB.jsx)("p", {
-             className: "SeasonPassScreenMessage",
-             children: BB("seasonPass:errorLoad")
-           }), (0, PB.jsx)(JB.f, {
-             className: "SeasonPassScreenRetry",
-             onClick: () => {
-               JJ.g.retry()
-             },
- ... (13 more removed lines; see GitHub link above)
+     function* PW(WW) {
+       for (const iW of WW.layers) yield* cW(iW);
+       for (const iW of WW.actions.values()) yield iW.clip
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9924-L9953` → after: `L37910-L37911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37910-L37911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37910-L37911) · [Before (L9924-L9953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9924-L9953)

```diff
-     function mJ(BB) {
-       let {
-         view: OB,
-         claimingKeys: GB
-       } = BB;
-       const YB = OB.config.tiers.filter((BB => "needsHyper" === OB.tileState({
-           tier: BB.tier,
-           track: "hyper"
-         }))).length,
-         DB = GB.size > 0;
-       return (0, PB.jsxs)("div", {
-         className: "SeasonPassScreenLoaded",
-         children: [(0, PB.jsx)(pJ, {
-           view: OB,
-           claiming: DB
-         }), (0, PB.jsx)(fJ, {
- ... (14 more removed lines; see GitHub link above)
+     function* LW(WW) {
+       for (const iW of cW(WW)) yield iW.clip
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9956-L9994` → after: `L37914-L37916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37914-L37916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37914-L37916) · [Before (L9956-L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9956-L9994)

```diff
-     function IJ(BB) {
-       JJ.g.claim(BB).catch((BB => {
-         console.error("Failed to claim season pass reward", BB)
-       }))
-     }
-     var FJ = GB(5181);
-     var iJ = GB(3299);
-     const LJ = BB => {
-         let {
-           action: OB,
-           padAction: GB
-         } = BB;
-         const {
-           isTouchScreen: YB
-         } = (0, UB.o)(["isTouchScreen"]), DB = (0, CY.s)();
-         return YB && !DB ? null : (0, PB.jsx)(EY.c, {
- ... (23 more removed lines; see GitHub link above)
+     function* cW(WW) {
+       for (const OW of [...WW.states.values(), WW.fallback])
+         for (const WW of null !== (iW = null === OW || void 0 === OW ? void 0 : OW.children) && void 0 !== iW ? iW : []) {
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9996-L10041` → after: `L37918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37918) · [Before (L9996-L10041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L9996-L10041)

```diff
-           const OB = null === (BB = SB.current) || void 0 === BB ? void 0 : BB.querySelector(".EverythingMenuTabActive");
-           null === OB || void 0 === OB || OB.scrollIntoView({
-             block: "nearest",
-             inline: "nearest"
-           })
-         }), [GB]);
-         const nB = {
-             ..."inGame" === OB ? {} : (0, JB.db)({
-               focusOnClick: !1
-             }),
-             ...AD.i
-           },
-           fB = BB => {
-             const OB = (0, VD.g)((OB => {
-               (0, JB.cb)(OB.currentTarget), UB.c.set({
-                 openEverythingMenuName: BB
- ... (30 more removed lines; see GitHub link above)
+           yield WW.clip
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10043-L10256` → after: `L37920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37920) · [Before (L10043-L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10043-L10256)

```diff
-         const mB = (0, YB.useRef)(null),
-           IB = (0, YB.useCallback)((() => null !== mB.current && (0, Ty.f)(mB.current)), []);
- 
-         function FB() {
-           IB() || uB()
-         }(0, YB.useEffect)((() => (0, Jo.w)(IB)), [IB]);
-         const iB = (0, YB.useMemo)((() => "inGame" === OB ? {
-             text: BB("settingsMenu:exitGame"),
-             onClick: () => {
-               (0, ey.c)()
-             }
-           } : (0, dB.isDiscordClient)() ? {
-             text: BB("settingsMenu:exitGame"),
-             onClick: () => {
-               uO.i.discordActivity().then((BB => {
-                 BB.exit("User exited the game")
- ... (198 more removed lines; see GitHub link above)
+     }
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10258` → after: `L37922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37922) · [Before (L10258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10258)

```diff
-   34838: (BB, OB, GB) => {
+   38717: (WW, iW, OW) => {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10260-L10261` → after: `L37924-L37930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37924-L37930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37924-L37930) · [Before (L10260-L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10260-L10261)

```diff
-       d: () => pB,
-       g: () => ZB
+       c: () => lW,
+       f: () => AW,
+       h: () => KW,
+       j: () => YW,
+       n: () => kW,
+       o: () => jW,
+       r: () => UW
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10263-L10274` → after: `L37932-L37936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37932-L37936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37932-L37936) · [Before (L10263-L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10263-L10274)

```diff
-     GB(34842);
-     var YB = GB(56),
-       DB = GB(1090),
-       QB = GB.n(DB),
-       oB = GB(1175),
-       jB = GB(1485),
-       yB = GB(2831),
-       JB = GB(1383),
-       MB = GB(2598),
-       PB = GB(3451),
-       zB = GB(2454),
-       lB = GB(1282);
+     var mW = OW(38721),
+       EW = OW(38728);
+     const NW = /^-?\d+(\.\d+f?)?$/,
+       PW = "{([",
+       LW = "})]";
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10277-L10288` → after: `L37939-L37964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37939-L37964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37939-L37964) · [Before (L10277-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10277-L10288)

```diff
-       let {
-         endsAt: OB,
-         className: GB
-       } = BB;
-       return (0, lB.jsxs)("span", {
-         className: QB()("NewPlayerDealClock", GB),
-         children: [(0, lB.jsx)(JB.b, {
-           name: "hourglass"
-         }), (0, lB.jsx)(yB.e, {
-           toTime: OB
-         })]
-       })
+       return "" === WW || "0" === WW || WW.length > EW.e ? WW : NW.test(WW) ? (-parseFloat(WW)).toString() : function(WW, iW) {
+         if (WW.includes("return ")) return function(WW, iW) {
+           let OW = "",
+             mW = 0,
+             EW = 0;
+           for (;;) {
+             const NW = WW.indexOf("return ", EW);
+             if (-1 === NW) break;
+             const PW = NW + 7,
+               LW = tW(WW, PW);
+             if (-1 !== LW) {
+               if (OW += WW.substring(mW, PW) + iW(WW.substring(PW, LW)), mW = LW, LW === WW.length) break;
+               EW = LW + 1
+             } else EW = ZW(WW, PW) + 1
+           }
+           return OW + WW.substring(mW)
+ ... (10 more added lines; see GitHub link above)
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10292-L10336` → after: `L37968-L38005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR37968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L37968-L38005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L37968-L38005) · [Before (L10292-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10292-L10336)

```diff
-       let {
-         offered: OB,
-         needsLogin: GB,
-         busy: YB,
-         highlight: DB,
-         onBuy: yB
-       } = BB;
-       const {
-         t: JB
-       } = (0, oB.H)(), {
-         pack: pB
-       } = OB, qB = (0, PB.g)(OB.package);
-       return (0, lB.jsxs)("div", {
-         className: QB()("NewPlayerDealPack", {
-           NewPlayerDealPackHighlight: DB
-         }),
- ... (29 more removed lines; see GitHub link above)
+       let iW, OW = !0,
+         mW = 0,
+         EW = "";
+       for (const NW of WW) {
+         if (0 === mW) {
+           let WW, mW = !0;
+           if ("-" === NW && "*" !== iW && "/" !== iW) {
+             OW || iW || (EW += "+"), OW = !1;
+             continue
+           }
+           if (" " === NW || "\n" === NW) mW = !1;
+           else {
+             if ("+" === NW && "*" !== iW && "/" !== iW) {
+               EW += "-", OW = !1;
+               continue
+             }
+ ... (22 more added lines; see GitHub link above)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10340-L10373` → after: `L38009-L38018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38009-L38018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38009-L38018) · [Before (L10340-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10340-L10373)

```diff
-       let {
-         view: OB,
-         needsLogin: GB,
-         busy: DB,
-         highlight: jB,
-         onBuy: yB
-       } = BB;
-       const {
-         t: JB
-       } = (0, oB.H)();
-       return (0, lB.jsxs)("div", {
-         className: QB()("NewPlayerDealPacks", OB.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
-         children: [OB.packs.map(((BB, OB) => (0, lB.jsxs)(YB.Fragment, {
-           children: [OB > 0 && (0, lB.jsx)("div", {
-             className: "NewPlayerDealDivider",
-             "aria-hidden": !0,
- ... (18 more removed lines; see GitHub link above)
+       return "\n" === WW || "\r" === WW || "\u2028" === WW || "\u2029" === WW
+     }
+     class lW extends Error {}
+     const AW = 3600,
+       bW = /^(\d+(\.\d*)?|\.\d+)$/;
+ 
+     function jW(WW, iW) {
+       const OW = bW.test(WW) ? Number(WW) : NaN;
+       if (!(OW >= 0 && OW <= AW)) throw new lW(`${iW}: keyframe time "${WW}" must be a number of seconds from 0 to ${AW}`);
+       return OW
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10404-L10407` → after: `L38022-L38025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38022-L38025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38022-L38025) · [Before (L10404-L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10404-L10407)

```diff
-       null !== BB && (0, NB.p)(BB) || ((0, DB.reportAnalyticsClick)({
-         id: "store.purchase_done",
-         value: `self:${OB.pack.packageId}`
-       }), null !== BB && (0, NB.r)(BB), fB(OB.pack.gems))
+       const OW = WW.lerp_mode;
+       if (void 0 === OW || "linear" === OW) return !1;
+       if ("catmullrom" === OW) return !0;
+       throw new lW(`${iW}: lerp_mode ${JSON.stringify(OW)} is not supported (linear or catmullrom)`)
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10411-L10425` → after: `L38029-L38036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38029-L38036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38029-L38036) · [Before (L10411-L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10411-L10425)

```diff
-       const DB = (0, NB.c)(OB);
-       switch (BB.kind) {
-         case "completed":
-           nB(DB, GB);
-           break;
-         case "pending":
-           QB = BB.intentId, oB = () => {
-             ZB.h.refresh(), nB(DB, GB)
-           }, SB || (SB = !0, VB.listen()), VB.follow(QB, oB);
-           break;
-         case "unknownPackage":
-           (0, NB.M)(OB, null);
-           break;
-         case "failed":
-           BB.errorKey === YB.e.newPlayerDealUnavailable && (0, NB.M)(OB, null)
+       if (YW(WW)) {
+         const mW = WW.pre,
+           EW = WW.post,
+           NW = [];
+         mW && NW.push(sW(mW, iW, OW));
+         const PW = Array.isArray(mW) && Array.isArray(EW) && mW.length === EW.length && mW.every(((WW, iW) => WW === EW[iW]));
+         if (EW && !PW && NW.push(sW(EW, iW, OW)), 0 === NW.length) throw new lW(`${OW}: a keyframe needs "post" and optionally "pre"`);
+         return NW
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10427` → after: `L38038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38038) · [Before (L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10427)

```diff
-       var QB, oB
+       return [sW(WW, iW, OW)]
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10430-L10438` → after: `L38041-L38062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38041-L38062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38041-L38062) · [Before (L10430-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10430-L10438)

```diff
-     function fB(BB) {
-       PB.NotificationProvider.showCustomPopup({
-         body: OB => (0, AB.jsx)(kB, {
-           gems: BB,
-           close: OB
-         }),
-         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
-         disableExitButton: !0
-       })
+     function sW(WW, iW, OW) {
+       if ("number" === typeof WW || "string" === typeof WW) return [WW, WW, WW];
+       if (Array.isArray(WW)) return function(WW, iW) {
+         switch (iW) {
+           case mW.g.Position:
+             return [MW(WW[0]), WW[1], WW[2]];
+           case mW.g.Rotation:
+             return [MW(WW[0]), MW(WW[1]), WW[2]];
+           case mW.g.Scale:
+             return WW
+         }
+       }(function(WW, iW) {
+         for (const OW of WW)
+           if ("number" !== typeof OW && "string" !== typeof OW) throw new lW(`${iW}: vector elements must be numbers or Molang strings`);
+         if (1 === WW.length) {
+           const iW = WW[0];
+ ... (6 more added lines; see GitHub link above)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10442-L10465` → after: `L38066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38066) · [Before (L10442-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10442-L10465)

```diff
-       let {
-         gems: OB,
-         close: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, MB.H)();
-       return (0, AB.jsxs)("div", {
-         className: "NewPlayerDealAdded",
-         children: [(0, AB.jsxs)("div", {
-           className: "NewPlayerDealAddedHead",
-           children: [(0, AB.jsx)(pB.b, {
-             name: "circle-check"
-           }), (0, AB.jsx)(qB.b, {
-             amount: OB
-           }), (0, AB.jsx)("span", {
- ... (8 more removed lines; see GitHub link above)
+       return "number" === typeof WW ? 0 === WW ? 0 : -WW : cW(WW)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10469-L10495` → after: `L38070-L38074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38070-L38074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38070-L38074) · [Before (L10469-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10469-L10495)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.e;
-       const {
-         userContext: GB
-       } = (0, zB.d)(), {
-         purchaseUnderWay: YB,
-         notice: DB,
-         buy: yB
-       } = (0, jB.c)(OB), JB = (0, RB.j)(), MB = GB.mayBuy() || (0, QB.guestsMayBuy)(), PB = null === JB ? !MB : JB.guest && !GB.isLoggedIn();
-       return {
-         purchaseUnderWay: YB,
-         notice: DB,
-         needsLogin: PB,
-         buyPack: function(YB, DB) {
-           (0, NB.D)("new_player_deal.buy", (0, WB.b)(YB.arm, BB, DB.pack.packageId)), null === JB ? yB(function(BB) {
-             return {
-               sku: BB.pack.packageId,
- ... (11 more removed lines; see GitHub link above)
+       let iW = !1;
+       for (let EW = 0; EW < WW.length; EW++) {
+         const NW = WW[EW],
+           PW = WW[EW + 1];
+         void 0 !== PW && 2 === PW.dataPoints.length && (OW = NW.dataPoints[NW.dataPoints.length - 1], mW = PW.dataPoints[0], String(OW[0]) === String(mW[0]) && String(OW[1]) === String(mW[1]) && String(OW[2]) === String(mW[2])) ? (PW.dataPoints.splice(0, 1), SW(NW), iW = !0) : vo … [truncated]
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10499` → after: `L38087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38087) · [Before (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10499)

```diff
-   5377: (BB, OB, GB) => {
+   38708: (WW, iW, OW) => {
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10501` → after: `L38089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38089) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10501)

```diff
-       b: () => ZB
+       d: () => WO
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10503-L10512` → after: `L38091-L38187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38091-L38187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38091-L38187) · [Before (L10503-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10503-L10512)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(5061),
-       oB = GB(1175),
-       jB = GB(1383),
-       yB = GB(1485),
-       JB = GB(1540),
-       MB = GB(1400),
-       PB = GB(2719),
-       zB = GB(1282);
+     const mW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"67","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from":"aiming","sca … [truncated]
+       EW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Armored Car","inputs":{"turn":{"from":"turnRate","scale":1.688,"min":-3.4,"max":3.4,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6},"fwd_lag":{"from":"forwardSpee … [truncated]
+       NW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Armour Collector","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":7.794,"offset":12.665,"min":43.86,"max":68.17,"rise":12,"fall":12},"armsFree":{"from … [truncated]
+       PW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Bear","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12}},"variables":{"swing":"swing","fac … [truncated]
+       LW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Black Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fw … [truncated]
+       cW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Blue Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fwd … [truncated]
+       wW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Bobino Musculino","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from":"ai … [truncated]
+       tW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Brown Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fw … [truncated]
+       ZW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Camel","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12}},"variables":{"swing":"swing","hi … [truncated]
+       xW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Capitano Explovissimo","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from … [truncated]
+       lW = JSON.parse('{"format_version":"1.8.0","animations":{"animation.car.front_roll":{"loop":true,"animation_length":1,"bones":{"FrontLeftWheel":{"rotation":["q.anim_time * 360",0,0]},"FrontRightWheel":{"rotation":["q.anim_time * 360",0,0]}}},"animation.car.back_roll":{"loop … [truncated]
+       AW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Cave Golem","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":7.336,"offset":11.92,"min":41.28,"max":64.16,"rise":12,"fall":12},"armsFree":{"from":"aimi … [truncated]
+       bW = JSON.parse('{"format_version":"1.8.0","animations":{"animation.cosmetic.furry_kitsune_tails":{"loop":true,"animation_length":2,"bones":{"KitsuneTail":{"rotation":{"0.0":{"post":[0,22.5,0],"lerp_mode":"catmullrom"},"1.0":{"post":[0,-22.5,0],"lerp_mode":"catmullrom"},"2. … [truncated]
+       jW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Cow","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12}},"variables":{"swing":"swing","hit_ … [truncated]
+       UW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Crone","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"armsFree":{"from":"aiming","scale":-1,"offset":1,"rise":15,"fall":0}},"variables":{"swing":10,"hit_angle":"hitAngle","arm_ratio":1," … [truncated]
+       kW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Cyan Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fwd … [truncated]
+ ... (81 more added lines; see GitHub link above)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10514-L10538` → after: `L38189-L38284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38189-L38284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38189-L38284) · [Before (L10514-L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10514-L10538)

```diff
-       youtube: {
-         icon: "youtube",
-         color: "#FF0033",
-         name: "YouTube"
-       },
-       tiktok: {
-         icon: "tiktok",
-         color: "#0F0F0F",
-         name: "TikTok"
-       },
-       instagram: {
-         icon: "instagram",
-         color: "#E1306C",
-         name: "Instagram"
-       },
-       twitter: {
- ... (9 more removed lines; see GitHub link above)
+       "67.binding.json": JSON.stringify(mW),
+       "Armored Car.binding.json": JSON.stringify(EW),
+       "Armour Collector.binding.json": JSON.stringify(NW),
+       "Bear.binding.json": JSON.stringify(PW),
+       "Black Kart.binding.json": JSON.stringify(LW),
+       "Blue Kart.binding.json": JSON.stringify(cW),
+       "Bobino Musculino.binding.json": JSON.stringify(wW),
+       "Brown Kart.binding.json": JSON.stringify(tW),
+       "Camel.binding.json": JSON.stringify(ZW),
+       "Capitano Explovissimo.binding.json": JSON.stringify(xW),
+       "Car.animation.json": JSON.stringify(lW),
+       "Cave Golem.binding.json": JSON.stringify(AW),
+       "Cosmetics.animation.json": JSON.stringify(bW),
+       "Cow.binding.json": JSON.stringify(jW),
+       "Crone.binding.json": JSON.stringify(UW),
+       "Cyan Kart.binding.json": JSON.stringify(kW),
+ ... (80 more added lines; see GitHub link above)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10541-L10556` → after: `L38288-L38364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38288-L38364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38288-L38364) · [Before (L10541-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10541-L10556)

```diff
-     function pB(BB) {
-       let {
-         platform: OB
-       } = BB;
-       const GB = "youtube" === OB;
-       return (0, zB.jsxs)("span", {
-         className: DB()("PlayerProfileSocialLinkIcon", {
-           PlayerProfileSocialLinkIconYoutube: GB
-         }),
-         children: [GB && (0, zB.jsx)(PB.c, {
-           variant: "white"
-         }), !GB && (0, zB.jsx)(jB.b, {
-           name: lB[OB].icon,
-           kit: "brands"
-         })]
-       })
+     function WO() {
+       return Qi ??= (0, zi.v)(Fi, "builtIn"), Qi
+     }
+   },
+   38728: (WW, iW, OW) => {
+     function mW(WW, iW, OW) {
+       if ("+" !== WW && "-" !== WW && "*" !== WW && "/" !== WW) return null;
+       const mW = iW.evaluate,
+         EW = OW.evaluate,
+         NW = OW.constant;
+       if (null !== NW) {
+         if ("/" === WW) return 0 === NW ? () => 0 : WW => mW(WW) / NW;
+         if (void 0 !== iW.query) {
+           const OW = iW.query;
+           switch (WW) {
+             case "+":
+ ... (61 more added lines; see GitHub link above)
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10560-L10572` → after: `L38652-L38717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38652-L38717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38652-L38717) · [Before (L10560-L10572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10560-L10572)

```diff
-       let {
-         platform: OB,
-         link: GB,
-         editable: YB,
-         userContext: DB,
-         onLinksUpdated: PB
-       } = BB;
-       const {
-         t: qB
-       } = (0, oB.H)(), ZB = lB[OB];
-       if (!GB && !YB) return null;
- 
-       function NB() {
+       return {
+         constant: WW,
+         readsClock: !1,
+         readsAnimTime: !1,
+         cost: 0,
+         evaluate: () => WW
+       }
+     }
+     class CW {
+       constructor(WW, iW) {
+         this.tokens = WW, this.variableSlots = iW, this.index = 0, this.depth = 0, this.nodeCount = 0, this.readsClock = !1, this.readsAnimTime = !1
+       }
+       get nodes() {
+         return this.nodeCount
+       }
+       parseProgram() {
+ ... (50 more added lines; see GitHub link above)
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10574-L10594` → after: `L38719-L38734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38719-L38734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38719-L38734) · [Before (L10574-L10594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10574-L10594)

```diff
-         if (!DB || !PB) return;
-         MB.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: ZB.name
-             }
-           },
-           prefixText: QB.r[OB],
-           placeholderText: "playBloxd",
-           initialValue: null !== (BB = null === GB || void 0 === GB ? void 0 : GB.handle) && void 0 !== BB ? BB : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: GB ? "general:remove" : void 0
-         }).getResult().then((async BB => {
-           if ("notificationTornDown" !== BB && null !== BB) try {
- ... (5 more removed lines; see GitHub link above)
+         const OW = yW.get(WW.text);
+         if (void 0 !== OW) throw new oW(OW, WW.offset);
+         if ("true" === WW.text || "false" === WW.text) return this.constantNode("true" === WW.text ? 1 : 0);
+         const mW = WW.text.indexOf(".");
+         if (-1 === mW) throw new oW(`unknown identifier '${WW.text}'`, WW.offset);
+         const EW = WW.text.slice(0, mW),
+           NW = WW.text.slice(mW + 1);
+         switch (EW) {
+           case "query":
+           case "q": {
+             const iW = VW.get(NW);
+             if (void 0 === iW) throw new oW(`unknown query '${WW.text}'`, WW.offset);
+             return iW !== gW.LifeTime && iW !== gW.DeltaTime || (this.readsClock = !0), iW === gW.AnimTime && (this.readsAnimTime = !0), this.leafNode({
+               constant: null,
+               query: iW,
+               evaluate: WW => WW.queries[iW]
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10597` → after: `L38737-L38777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38737-L38777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38737-L38777) · [Before (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10597)

```diff
-         }))
+           case "variable":
+           case "v": {
+             const iW = this.variableSlots.get(NW);
+             if (void 0 === iW) throw new oW(`unknown variable '${WW.text}'`, WW.offset);
+             return this.leafNode({
+               constant: null,
+               variable: iW,
+               evaluate: WW => WW.variables[iW]
+             })
+           }
+           case "math":
+             return this.parseMath(NW, WW)
+         }
+         throw new oW(null !== (iW = TW.get(EW)) && void 0 !== iW ? iW : `unknown identifier '${WW.text}'`, WW.offset)
+       }
+       parseMath(WW, iW) {
+ ... (25 more added lines; see GitHub link above)
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10599-L10638` → after: `L38779-L38812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38779-L38812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38779-L38812) · [Before (L10599-L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10599-L10638)

```diff
-       if (GB) {
-         const BB = `@${GB.handle}`;
-         return (0, zB.jsxs)("a", {
-           className: "PlayerProfileSocialLink",
-           style: {
-             background: ZB.color
-           },
-           href: GB.profileUrl,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: [(0, zB.jsxs)("div", {
-             className: "PlayerProfileSocialLinkMain",
-             children: [(0, zB.jsx)(pB, {
-               platform: OB
-             }), (0, zB.jsx)("span", {
-               className: "PlayerProfileSocialLinkText",
- ... (24 more removed lines; see GitHub link above)
+       dynamicNode(WW) {
+         return this.countNode(), {
+           constant: null,
+           evaluate: WW
+         }
+       }
+       leafNode(WW) {
+         return this.countNode(), WW
+       }
+       compositeNode(WW, iW) {
+         return WW.every((WW => null !== WW.constant)) ? (this.countNode(), fW(iW(pW))) : this.dynamicNode(iW)
+       }
+       countNode() {
+         if (this.nodeCount++, this.nodeCount > 512) throw new oW("expression has more than 512 nodes", this.peek().offset)
+       }
+       enterNesting() {
+ ... (18 more added lines; see GitHub link above)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10669-L10692` → after: `L38815-L38822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38815-L38822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38815-L38822) · [Before (L10669-L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10669-L10692)

```diff
- 
-     function ZB(BB) {
-       let {
-         socialLinks: OB,
-         editable: GB = !1,
-         userContext: YB,
-         onLinksUpdated: DB
-       } = BB;
-       if (!GB && 0 === OB.length) return null;
-       const oB = new Map(OB.map((BB => [BB.platform, BB]))),
-         jB = GB ? QB.q : OB.map((BB => BB.platform));
-       return (0, zB.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
-         children: (0, zB.jsx)("div", {
-           className: "PlayerProfileSocialLinksList",
-           children: jB.map((BB => (0, zB.jsx)(qB, {
- ... (8 more removed lines; see GitHub link above)
+     const XW = WW => Number.isFinite(WW) ? WW : 0;
+     class BW {
+       constructor(WW, iW, OW, mW) {
+         this.root = WW, this.readsClock = iW, this.readsAnimTime = OW, this.cost = mW, this.constant = null
+       }
+       evaluate(WW) {
+         return XW(this.root(WW))
+       }
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10702-L10709` → after: `L38825-L38836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38825-L38836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38825-L38836) · [Before (L10702-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10702-L10709)

```diff
-     function QB() {
-       const [BB, OB] = (0, YB.useState)(!1);
-       return (0, YB.useLayoutEffect)((() => {
-         let BB = !0;
-         return (0, DB.e)().then((() => {
-           BB && OB(!0)
-         })), () => {
-           BB = !1
+     function qW(WW, iW) {
+       try {
+         if (WW.length > DW) throw new oW(`expression is longer than ${DW} characters`, DW);
+         if ("" === WW.trim()) return {
+           ok: !0,
+           value: fW(0)
+         };
+         const OW = new CW(eW(WW), iW.variableSlots),
+           mW = OW.parseProgram();
+         return {
+           ok: !0,
+           value: null === mW.constant ? new BW(mW.evaluate, OW.readsClock, OW.readsAnimTime, OW.nodes) : fW(XW(mW.constant))
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10711` → after: `L38838-L38844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38838-L38844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38838-L38844) · [Before (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10711)

```diff
-       }), []), BB
+       } catch (OW) {
+         if (OW instanceof oW) return {
+           ok: !1,
+           error: `${OW.message} at offset ${OW.offset}`
+         };
+         throw OW
+       }
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10714` → after: `L38847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38847) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10714)

```diff
-   34765: (BB, OB, GB) => {
+   39595: (WW, iW, OW) => {
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10717` → after: `L38850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38850) · [Before (L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10717)

```diff
-       g: () => pB
+       f: () => eW
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10719-L10727` → after: `L38852-L38870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38852-L38870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38852-L38870) · [Before (L10719-L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10719-L10727)

```diff
-     GB(34769);
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(56),
-       oB = GB(34757);
- 
-     function jB(BB, OB) {
-       return Math.max(1, Math.round(BB * OB))
-     }
+     var mW = OW(5725),
+       EW = OW(5754);
+     const NW = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var PW = OW(5772),
+       LW = OW(39392),
+       cW = OW(5766);
+     const wW = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (3 more added lines; see GitHub link above)
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10729-L10804` → after: `L38872-L38874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38872-L38874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38872-L38874) · [Before (L10729-L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10729-L10804)

```diff
-     function yB(BB, OB) {
-       const GB = OB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         YB = function(BB, OB) {
-           if (BB.lines) return jB(BB.lineThickness, OB) % 2;
-           if (BB.dot) return jB(BB.dotSize, OB) % 2;
-           return JB(BB, OB) % 2
-         }(BB, OB),
-         DB = MB(BB.lineThickness * GB, YB),
-         QB = jB(BB.lineLength, GB),
-         oB = Math.round(BB.gap * GB),
-         yB = BB.outline > 0 ? jB(BB.outline, GB) : 0,
-         zB = [];
-       if (BB.lines && (zB.push({
-           x: DB + oB,
-           y: 0,
-           w: QB,
- ... (60 more removed lines; see GitHub link above)
+     function tW(WW) {
+       let [iW, OW] = WW;
+       return [-OW, iW]
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10808` → after: `L38878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38878) · [Before (L10808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10808)

```diff
-       return Math.round(BB.circleRadius * OB * 2 + jB(BB.circleThickness, OB))
+       return WW[0] === iW[0] && WW[1] === iW[1]
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10812-L10813` → after: `L38882-L38907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38882-L38907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38882-L38907) · [Before (L10812-L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10812-L10813)

```diff
-       return Math.max(2 - OB, 2 * Math.round((BB - OB) / 2) + OB)
-     }
+       return WW[0] * iW[0] + WW[1] * iW[1] === 0
+     }
+     const lW = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+     var AW = OW(5790);
+ 
+     function bW(WW, iW, OW, mW, EW) {
+       return iW < AW.p || iW >= AW.p + AW.t || Math.floor(WW / AW.A) === Math.floor(mW / AW.A) && Math.floor(OW / AW.A) === Math.floor(EW / AW.A)
+     }
+     const jW = "Splitter",
+       UW = "Sorting Gate",
+       kW = new Set(AW.O),
+ ... (10 more added lines; see GitHub link above)
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10815-L10823` → after: `L38909-L38911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38909-L38911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38909-L38911) · [Before (L10815-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10815-L10823)

```diff
-     function PB(BB, OB, GB) {
-       const YB = 2 * GB >= OB - 1;
-       return {
-         x: BB,
-         y: BB,
-         size: OB,
-         border: Math.min(GB, Math.floor(OB / 2)),
-         filled: YB
-       }
+     function SW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.meta.rootName) && void 0 !== iW ? iW : ""
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10828-L10829` → after: `L38914-L38915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38914-L38915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38914-L38915) · [Before (L10828-L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10828-L10829)

```diff
-     function pB(BB, OB) {
-       return BB && OB ? `scale(${lB})` : "scale(1)"
+     function YW(WW) {
+       return SW(WW) === AW.i && (0, AW.V)(mW.j[WW].name)
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10833-L10837` → after: `L38927-L38932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38927-L38932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38927-L38932) · [Before (L10833-L10837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10833-L10837)

```diff
-       return "classic" === BB.settings.style ? (0, zB.jsx)(RB, {
-         ...BB
-       }) : (0, zB.jsx)(fB, {
-         ...BB
-       })
+       var iW, OW;
+       const EW = null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.meta;
+       return (null === EW || void 0 === EW ? void 0 : EW.rootName) !== TW.i ? null : {
+         rot: null !== (OW = EW.rot) && void 0 !== OW ? OW : 1,
+         half: (0, TW.e)(EW.rootName, EW.metaStr)
+       }
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10841-L10852` → after: `L38935-L38936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38935-L38936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38935-L38936) · [Before (L10841-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10841-L10852)

```diff
-     function NB(BB, OB) {
-       const GB = {};
-       if (BB.color !== oB.d.color && (GB.color = (0, oB.l)(BB.color)), BB.opacity !== oB.d.opacity && (GB.opacity = BB.opacity / 100), BB.outline !== oB.d.outline || BB.outlineColor !== oB.d.outlineColor) {
-         const OB = BB.outline,
-           YB = (0, oB.l)(BB.outlineColor);
-         GB.textShadow = OB > 0 ? `-${OB}px 0 ${YB}, 0 ${OB}px ${YB}, ${OB}px 0 ${YB}, 0 -${OB}px ${YB}` : "none"
-       }
-       if (BB.size !== oB.d.size) {
-         const YB = BB.size / 100;
-         GB.fontSize = OB ? `calc(max(1.3rem, 18px) * ${YB})` : `calc(1.3rem * ${YB})`, GB.marginTop = `-${ZB}em`, GB.transformOrigin = `50% calc(50% + ${ZB}em)`
-       }
-       return GB
+     function HW(WW, iW, OW, mW) {
+       return hW(WW(iW, OW, mW))
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10855` → after: `L38939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38939) · [Before (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10855)

```diff
-     function RB(BB) {
+     function nW(WW, iW, OW, mW, EW) {
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10857-L10862` → after: `L38941-L38942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38941-L38942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38941-L38942) · [Before (L10857-L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10857-L10862)

```diff
-         settings: OB,
-         touch: GB,
-         inPreview: YB,
-         inEditor: QB,
-         pressed: oB = !1,
-         pressRef: jB
+         rot: NW,
+         half: PW
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10864-L10876` → after: `L38944-L38945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR38944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L38944-L38945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L38944-L38945) · [Before (L10864-L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10864-L10876)

```diff
-       return (0, zB.jsx)("div", {
-         className: DB()("Crosshair", {
-           Touch: GB,
-           CrosshairInPreview: YB,
-           CrosshairInEditor: QB || YB
-         }),
-         ref: jB,
-         style: {
-           transform: pB(oB, OB.growOnClick),
-           ...NB(OB, GB)
-         },
-         children: "+"
-       })
+       const [LW, cW] = (0, TW.h)(NW, PW), wW = HW(WW, iW + LW, OW, mW + cW);
+       return null !== wW && wW.rot === NW && wW.half === TW.l[PW]
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10879-L10880` → after: `L39118-L39122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39118-L39122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39118-L39122) · [Before (L10879-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10879-L10880)

```diff
-     function WB(BB, OB) {
-       return BB / OB + "px"
+     function dW(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const PW of oW)
+         if (PW.handles(EW)) return PW.shape(WW, iW, OW, mW, EW, NW);
+       return EW
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10883-L10888` → after: `L39125-L39128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39125-L39128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39125-L39128) · [Before (L10883-L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10883-L10888)

```diff
-     function AB(BB, OB, GB, YB) {
-       return {
-         ...nB(BB, OB, GB),
-         width: WB(BB.w, GB),
-         height: WB(BB.h, GB),
-         background: YB
+     function eW(WW) {
+       for (const mW of oW) {
+         var iW, OW;
+         if (mW.handles(WW)) return null !== (iW = null === (OW = mW.placedBy) || void 0 === OW ? void 0 : OW.call(mW, WW)) && void 0 !== iW ? iW : null
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10894-L10900` → after: `L39152-L39153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39152-L39153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39152-L39153) · [Before (L10894-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10894-L10900)

```diff
-         left: WB(BB.x, OB),
-         top: WB(BB.y, OB),
-         width: WB(BB.size, OB),
-         height: WB(BB.size, OB),
-         borderWidth: WB(BB.border, OB),
-         borderColor: GB,
-         background: BB.filled ? GB : void 0
+         makers: new Set(iW),
+         roots: mW
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10904-L10908` → after: `L39157-L39176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39157-L39176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39157-L39176) · [Before (L10904-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10904-L10908)

```diff
-       left: [-1, 0],
-       right: [1, 0],
-       up: [0, -1],
-       down: [0, 1]
-     };
+         water: xW(!0, ["Condenser"], ["Centrifuge", "Synthesizer", PW.c]),
+         cryo: xW(!1, [PW.c], [])
+       },
+       AW = new Set([...lW.water.roots, ...lW.cryo.roots]),
+       bW = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
+       },
+       jW = EW.g.map((WW => bW[WW])),
+       UW = jW.map((WW => {
+         let [iW, OW, mW] = WW;
+         return PW.x.findIndex((WW => {
+ ... (4 more added lines; see GitHub link above)
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10910-L10915` → after: `L39178-L39202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39178-L39202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39178-L39202) · [Before (L10910-L10915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10910-L10915)

```diff
-     function nB(BB, OB, GB) {
-       const [YB, DB] = BB.arm ? SB[BB.arm] : [0, 0], QB = Math.round(OB * GB);
-       return {
-         left: WB(BB.x + YB * QB, GB),
-         top: WB(BB.y + DB * QB, GB)
-       }
+     function kW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const OW = mW.j[WW],
+         EW = null === OW || void 0 === OW ? void 0 : OW.meta.rootName,
+         xW = lW[iW];
+       if (!EW || !xW.roots.has(EW)) return null;
+       if ((0, NW.p)(EW)) return (0, PW.J)(OW.name) === iW ? cW : null;
+       if (EW === PW.l) return wW;
+       if (EW === ZW) return OW.name.endsWith("|Water") ? tW : null;
+       const [AW, bW] = LW.h[(OW.meta.rot || 1) - 1];
+       return (0, PW.M)(xW.makers.has(EW) ? "maker" : "user", [-AW, 0, -bW])
+     }
+ 
+     function sW(WW, iW, OW, EW) {
+       let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+       const {
+ ... (9 more added lines; see GitHub link above)
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10919-L10923` → after: `L39206-L39207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39206-L39207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39206-L39207) · [Before (L10919-L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10919-L10923)

```diff
-       return BB.arm ? {
-         "data-arm": BB.arm,
-         "data-x": BB.x,
-         "data-y": BB.y
-       } : {}
+       const iW = mW.j[WW];
+       return iW ? (0, PW.J)(iW.name) : null
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10927-L10987` → after: `L39212-L39235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39212-L39235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39212-L39235) · [Before (L10927-L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10927-L10987)

```diff
-       let {
-         settings: OB,
-         inPreview: GB,
-         inEditor: YB,
-         pressed: jB = !1,
-         spread: JB,
-         spreadRef: MB
-       } = BB;
-       const PB = (0, QB.useRef)(null),
-         {
-           box: pB,
-           dpr: qB
-         } = function(BB) {
-           const [OB, GB] = (0, QB.useState)({
-             box: {
-               left: 0,
- ... (45 more removed lines; see GitHub link above)
+       if (!KW) {
+         KW = new Map;
+         for (const WW of ["water", "cryo"])
+           for (let iW = 0; iW < 64; iW++)
+             for (const OW of [!1, !0]) KW.set((0, NW.s)(WW, iW, OW), {
+               dl: WW,
+               mask: iW,
+               full: OW
+             })
+       }
+       return KW.get(WW)
+     }
+     const YW = new Map(Array.from({
+       length: NW.l + 1
+     }, ((WW, iW) => [(0, NW.u)(iW), iW])));
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L10989-L11036` → after: `L39237-L39280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39237-L39280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39237-L39280) · [Before (L10989-L11036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L10989-L11036)

```diff
-           fB.current = BB, null === (OB = PB.current) || void 0 === OB || OB.querySelectorAll("[data-arm]").forEach((OB => {
-             Object.assign(OB.style, nB(function(BB) {
-               return {
-                 x: Number(BB.dataset.x),
-                 y: Number(BB.dataset.y),
-                 arm: BB.dataset.arm
-               }
-             }(OB), BB, ZB.current))
-           }))
-         }, () => {
-           MB.current = null
-         }
-       }), [MB]);
-       const kB = null !== JB && void 0 !== JB ? JB : fB.current;
-       return (0, zB.jsx)("div", {
-         ref: PB,
- ... (32 more removed lines; see GitHub link above)
+           return null !== (iW = YW.get(WW)) && void 0 !== iW ? iW : null
+         }(bW)) && void 0 !== ZW ? ZW : 0) > 0
+       }))
+     }
+     class TW {
+       constructor() {
+         this.reshapeOffsets = jW
+       }
+       handles(WW) {
+         return null !== MW(WW)
+       }
+       affects(WW) {
+         var iW, OW;
+         return AW.has(null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.meta.rootName) && void 0 !== iW ? iW : "")
+       }
+       placedBy(WW) {
+ ... (28 more added lines; see GitHub link above)
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11039` → after: `L39283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39283) · [Before (L11039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11039)

```diff
-   34773: (BB, OB, GB) => {
+   39629: (WW, iW, OW) => {
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11042-L11043` → after: `L39286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39286) · [Before (L11042-L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11042-L11043)

```diff
-       d: () => ZB,
-       g: () => qB
+       d: () => cW
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11045-L11052` → after: `L39288-L39291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39288-L39291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39288-L39291) · [Before (L11045-L11052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11045-L11052)

```diff
-     var YB = GB(34757);
-     const DB = "XH1-",
-       QB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       oB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       jB = ["color", "outlineColor"],
-       yB = 1 + 3 * jB.length + oB.length + 1,
-       JB = Math.ceil(8 * yB / Math.log2(62)),
-       MB = DB.length + JB;
+     var mW = OW(352),
+       EW = OW.n(mW),
+       NW = OW(39638),
+       PW = OW.n(NW);
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11055-L11057` → after: `L39294-L39311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39294-L39311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39294-L39311) · [Before (L11055-L11057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11055-L11057)

```diff
-       let OB = 90;
-       for (const GB of BB) OB = 31 * OB + GB & 255;
-       return OB
+       return {
+         name: "collideEntitiesProjectile",
+         order: 70,
+         state: {
+           callback: null,
+           _lastPos: null
+         },
+         mY: function(WW, iW) {},
+         mH: null,
+         system: function(iW, OW) {
+           ! function(WW) {
+             const iW = WW.EY.RD("collideEntitiesProjectile");
+             if (0 === iW.length) return;
+             const OW = xW(WW);
+             for (const mW of iW) mW && ZW(WW, mW, OW)
+           }(WW)
+ ... (2 more added lines; see GitHub link above)
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11063-L11067` → after: `L39315-L39336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39315-L39336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39315-L39336) · [Before (L11063-L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11063-L11067)

```diff
-       let GB = 0n;
-       for (const DB of BB) {
-         const BB = zB.indexOf(DB);
-         if (BB < 0) return null;
-         GB = GB * lB + BigInt(BB)
+       var OW;
+       const mW = xW(WW),
+         NW = WW.EY.jB(iW),
+         PW = WW.EY.YG(iW),
+         LW = [NW.Mx.base[0] + PW.width / 2, NW.Mx.base[1] + PW.height / 2, NW.Mx.base[2] + PW.width / 2];
+       EW().add(LW, LW, null !== (OW = PW.Wl) && void 0 !== OW ? OW : WW.Wl), ZW(WW, WW.EY.getState(iW, "collideEntitiesProjectile"), mW, LW)
+     }
+     const wW = EW().create(),
+       tW = [];
+ 
+     function ZW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.EY.Vk(iW.rD);
+       if (null === iW._lastPos) return void(iW._lastPos = EW().clone(mW));
+       EW().sub(wW, mW, iW._lastPos);
+       const NW = EW().length(wW);
+       0 === NW && (wW[0] = 1e-4);
+ ... (6 more added lines; see GitHub link above)
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11069-L11072` → after: `L39338-L39339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39338-L39339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39338-L39339) · [Before (L11069-L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11069-L11072)

```diff
-       if (GB >> BigInt(8 * OB) !== 0n) return null;
-       const YB = [];
-       for (let DB = 0; DB < OB; DB++) YB.unshift(Number(0xffn & GB)), GB >>= 8n;
-       return YB
+       var LW, cW;
+       EW().copy(iW._lastPos, mW)
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11076-L11083` → after: `L39343-L39352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39343-L39352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39343-L39352) · [Before (L11076-L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11076-L11083)

```diff
-       let OB = "shapes" === BB.style ? 1 : 0;
-       QB.forEach(((GB, YB) => {
-         BB[GB] && (OB |= 1 << YB + 1)
-       }));
-       const GB = [OB];
-       for (const DB of jB) {
-         const OB = (0, YB.h)(DB, BB[DB]);
-         GB.push(OB >> 16 & 255, OB >> 8 & 255, 255 & OB)
+       const iW = WW.EY.RD("collideEntities");
+       for (let NW = 0; NW < iW.length; NW++) {
+         var OW, mW;
+         const PW = WW.EY.YG(iW[NW].rD),
+           LW = iW[NW].bmW / 2,
+           cW = iW[NW].jmW / 2;
+         tW[NW] = [
+           [PW.WmW[0] - LW, PW.WmW[1] - cW, PW.WmW[2] - LW],
+           [PW.WmW[3] + LW, PW.WmW[4] + cW, PW.WmW[5] + LW]
+         ], EW().add(tW[NW][0], tW[NW][0], null !== (OW = PW.Wl) && void 0 !== OW ? OW : WW.Wl), EW().add(tW[NW][1], tW[NW][1], null !== (mW = PW.Wl) && void 0 !== mW ? mW : WW.Wl)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11085-L11090` → after: `L39354-L39395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39354-L39395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39354-L39395) · [Before (L11085-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11085-L11090)

```diff
-       for (const DB of oB) {
-         const {
-           min: OB,
-           step: QB
-         } = YB.c[DB];
-         GB.push(Math.round(((0, YB.h)(DB, BB[DB]) - OB) / QB))
+       return tW.length = iW.length, iW.slice()
+     }
+   },
+   38862: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => wW,
+       e: () => tW
+     });
+     var mW = OW(38841),
+       EW = OW(7453),
+       NW = OW(7444);
+     class PW {
+       constructor() {
+         this.rD = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
+           type: EW.p.DEFAULT,
+           tier: null
+ ... (26 more added lines; see GitHub link above)
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11102-L11104` → after: `L39401-L39487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39401-L39487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39401-L39487) · [Before (L11102-L11104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11102-L11104)

```diff
-       for (const OB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${JB}})`, "gi"))) {
-         const BB = NB(pB(OB[1], yB));
-         if (BB) return BB
+       const iW = WW.EY.HiW(WW.Dv);
+       return LW && cW && (iW.isInCobweb !== LW || iW.isInFluid !== cW)
+     }
+ 
+     function tW(WW) {
+       return {
+         name: "movement",
+         order: 30,
+         stateConstructor: PW,
+         mY: (iW, OW) => {
+           OW.Hx = WW, LW = OW.isInCobweb, cW = OW.isInFluid
+         },
+         mH: null,
+         system: function(WW, iW) {}
+       }
+     }
+ ... (71 more added lines; see GitHub link above)
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11106` → after: `L39489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39489) · [Before (L11106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11106)

```diff
-       return null
+       return !1
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11110-L11126` → after: `L39496-L39517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39496-L39517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39496-L39517) · [Before (L11110-L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11110-L11126)

```diff
-       if (!BB || BB.length !== yB || PB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
-       const OB = BB[0],
-         GB = {
-           ...YB.d,
-           style: 1 & OB ? "shapes" : "classic"
-         };
-       QB.forEach(((BB, YB) => {
-         GB[BB] = 0 !== (OB & 1 << YB + 1)
-       }));
-       let DB = 1;
-       for (const YB of jB) GB[YB] = BB[DB] << 16 | BB[DB + 1] << 8 | BB[DB + 2], DB += 3;
-       for (const QB of oB) {
-         const {
-           min: OB,
-           step: oB
-         } = YB.c[QB];
- ... (1 more removed lines; see GitHub link above)
+       const iW = EW.j[WW];
+       return !!iW && (!(WW in NW.e) && (iW.model ? "Slab" === iW.model : !iW.twoDBlockItem))
+     }
+ 
+     function lW(WW, iW, OW) {
+       const mW = iW - WW;
+       if (mW <= 0) return tW;
+       const EW = Math.min(1, Math.max(0, (OW - WW) / mW));
+       return wW + (tW - wW) * EW
+     }
+ 
+     function AW(WW, iW, OW) {
+       const mW = lW(WW.startedAtMs, WW.endsAtMs, OW);
+       return lW(iW.startedAtMs, iW.endsAtMs, OW) >= mW ? iW : WW
+     }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11131` → after: `L39523-L39526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39523-L39526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39523-L39526) · [Before (L11131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11131)

```diff
-   34757: (BB, OB, GB) => {
+   38911: (WW, iW, OW) => {
+     function mW(WW) {
+       return "string" !== typeof WW || 2 !== WW.length && ":" !== WW[2] ? null : WW[0] + WW[1]
+     }
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11134-L11135` → after: `L39529-L39530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39529-L39530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39529-L39530) · [Before (L11134-L11135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11134-L11135)

```diff
-       d: () => DB,
-       h: () => QB,
+       g: () => SW,
+       i: () => KW,
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11137-L11138` → after: `L39532-L39534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39532-L39534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39532-L39534) · [Before (L11137-L11138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11137-L11138)

```diff
-       p: () => yB,
-       t: () => MB,
+       o: () => LW,
+       q: () => PW,
+       s: () => NW,
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11140` → after: `L39536-L39537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39536-L39537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39536-L39537) · [Before (L11140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11140)

```diff
-       w: () => oB
+       x: () => UW,
+       y: () => bW
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11142-L11218` → after: `L39539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39539) · [Before (L11142-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11142-L11218)

```diff
-     const YB = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
-         },
-         outline: {
-           min: 0,
-           max: 4,
-           step: .1
-         },
-         size: {
-           min: 25,
-           max: 400,
-           step: 5
-         },
- ... (61 more removed lines; see GitHub link above)
+     const EW = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11220-L11230` → after: `L39541-L39548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39541-L39548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39541-L39548) · [Before (L11220-L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11220-L11230)

```diff
-     function QB(BB, OB) {
-       var GB;
-       const {
-         min: QB,
-         max: oB,
-         step: jB
-       } = YB[BB];
-       if (!Number.isFinite(OB)) return DB[BB];
-       const yB = (null !== (GB = String(jB).split(".")[1]) && void 0 !== GB ? GB : "").length,
-         JB = Number((Math.round(OB / jB) * jB).toFixed(yB));
-       return Math.min(oB, Math.max(QB, JB))
+     function NW(WW) {
+       if (function(WW) {
+           for (let iW = 0; iW < EW.length; iW++)
+             if (WW === EW[iW]) return !0;
+           return !1
+         }(WW)) return !1;
+       const iW = mW(WW);
+       return "op" === iW || "ep" === iW || "wi" === iW || "pp" === iW || "fp:call" === WW || "fp:t" === WW
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11233-L11238` → after: `L39551-L39557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39551-L39557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39551-L39557) · [Before (L11233-L11238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11233-L11238)

```diff
-     function oB(BB, OB, GB) {
-       const YB = "number" === typeof GB ? QB(OB, GB) : GB;
-       return {
-         ...BB,
-         [OB]: YB
-       }
+     function PW(WW) {
+       return "fp" === mW(WW) && !NW(WW)
+     }
+ 
+     function LW(WW) {
+       if ("string" !== typeof WW) return !1;
+       return "o" === WW[0] && "p" === WW[1] && (2 === WW.length || ":" === WW[2]) || "fp:call" === WW || "2" === WW || "t" === WW || "a" === WW
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11242-L11243` → after: `L39561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39561) · [Before (L11242-L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11242-L11243)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(DB).every((YB => GB.includes(YB) || BB[YB] === OB[YB]))
+       return `~${function(WW){return WW.length<2?WW:":"===WW[1]?WW[0]:WW[0]+WW[1]}(iW)}~${WW}`
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11247` → after: `L39566-L39573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39566-L39573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39566-L39573) · [Before (L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11247)

```diff
-       return jB(BB, DB)
+       let iW = WW.length - 1;
+       for (let OW = 0; OW < 2; OW++) {
+         const OW = iW;
+         for (; iW >= 0 && WW[iW] >= "0" && WW[iW] <= "9";) iW--;
+         if (iW < 0 || iW === OW || ":" !== WW[iW]) return -1;
+         iW--
+       }
+       return iW + 1
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11251` → after: `L39577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39577) · [Before (L11251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11251)

```diff
-       return `#${BB.toString(16).padStart(6,"0")}`
+       return "unknown" === WW || tW(WW) >= 0
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11254-L11256` → after: `L39580-L39581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39580-L39581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39580-L39581) · [Before (L11254-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11254-L11256)

```diff
-     function MB(BB) {
-       const OB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
-       return OB ? parseInt(OB[1], 16) : null
+     function xW(WW, iW) {
+       return WW[iW] >= "\ud800" && WW[iW] <= "\udbff" && iW + 1 < WW.length && WW[iW + 1] >= "\udc00" && WW[iW + 1] <= "\udfff" ? 2 : 1
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11272-L11276` → after: `L39584-L39594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39584-L39594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39584-L39594) · [Before (L11272-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11272-L11276)

```diff
-     function MB() {
-       if (null === yB) {
-         var BB;
-         const OB = DB.g.getItem(jB);
-         yB = null !== (BB = "string" === typeof OB ? (0, QB.d)(OB) : null) && void 0 !== BB ? BB : oB.d
+     function lW(WW, iW, OW) {
+       return 2 === OW ? 4 : WW[iW] <= "\x7f" ? 1 : WW[iW] <= "\u07ff" ? 2 : 3
+     }
+ 
+     function AW(WW, iW, OW) {
+       let mW = 0;
+       for (; mW < iW;) {
+         const iW = xW(WW, mW),
+           EW = lW(WW, mW, iW);
+         if (EW > OW) break;
+         OW -= EW, mW += iW
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11282-L11283` → after: `L39600-L39615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39600-L39615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39600-L39615) · [Before (L11282-L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11282-L11283)

```diff
-       yB = BB, (0, oB.p)(BB) ? DB.g.removeItem(jB) : DB.g.setItem(jB, (0, QB.g)(BB));
-       for (const OB of JB) OB()
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
+       if ("string" !== typeof WW || WW.length > wW || !ZW(WW)) return "t";
+       let OW = 2;
+       for (let LW = 0; LW < WW.length;) {
+         const iW = xW(WW, LW);
+         OW += lW(WW, LW, iW), LW += iW
+       }
+       if (OW <= iW) return `t ${WW}`;
+       const mW = tW(WW),
+         EW = iW - 2 - (WW.length - mW);
+       if (EW < 0) return "t";
+       const NW = AW(WW, mW, EW);
+       let PW = "t ";
+       for (let LW = 0; LW < NW; LW++) PW += WW[LW];
+       for (let LW = mW; LW < WW.length; LW++) PW += WW[LW];
+       return PW
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11286-L11296` → after: `L39619-L39630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39619-L39630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39619-L39630) · [Before (L11286-L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11286-L11296)

```diff
-     function zB() {
-       const [BB, OB] = (0, YB.useState)(MB);
-       return (0, YB.useEffect)((() => {
-         const BB = () => {
-           OB(MB())
-         };
-         return BB(), GB = BB, JB.add(GB), () => {
-           JB.delete(GB)
-         };
-         var GB
-       }), []), BB
+     function UW(WW) {
+       let iW = "so:";
+       const OW = AW(WW, WW.length, jW - iW.length);
+       for (let mW = 0; mW < OW; mW++) iW += WW[mW];
+       return iW
+     }
+     const kW = "BABYLON ",
+       sW = "DECODE ",
+       MW = "BABYLON@ ";
+ 
+     function KW(WW) {
+       return UW(kW + WW)
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11307` → after: `L39634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39634) · [Before (L11307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11307)

```diff
-       return BB && !OB
+       return UW(MW + WW + " " + iW)
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11310-L11311` → after: `L39637-L39638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39637-L39638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39637-L39638) · [Before (L11310-L11311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11310-L11311)

```diff
-     function QB() {
-       return DB(YB.c.get("isTouchScreen"), YB.c.get("clientEscMenuOptions").touchActionButtons)
+     function YW(WW) {
+       return UW(sW + WW)
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11314` → after: `L39641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39641) · [Before (L11314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11314)

```diff
-   5181: (BB, OB, GB) => {
+   39359: (WW, iW, OW) => {
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11317-L11318` → after: `L39644-L39645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39644-L39645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39644-L39645) · [Before (L11317-L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11317-L11318)

```diff
-       g: () => QB,
-       k: () => DB
+       e: () => LW,
+       h: () => wW
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11320` → after: `L39647-L39649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39647-L39649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39647-L39649) · [Before (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11320)

```diff
-     let YB = null;
+     var mW = OW(7453),
+       EW = OW(344),
+       NW = OW(643);
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11323` → after: `L39652-L39653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39652-L39653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39652-L39653) · [Before (L11323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11323)

```diff
-       YB = BB
+       var iW;
+       return !0 === (null === WW || void 0 === WW || null === (iW = WW.name) || void 0 === iW ? void 0 : iW.includes("Firecracker"))
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11326-L11327` → after: `L39656-L39659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39656-L39659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39656-L39659) · [Before (L11326-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11326-L11327)

```diff
-     function QB() {
-       return YB
+     function LW(WW) {
+       for (let iW = 0; iW < NW.o; iW++)
+         if (PW(WW.getItemAtIdx(iW))) return iW;
+       return null
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11331` → after: `L39663-L39679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39663-L39679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39663-L39679) · [Before (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11331)

```diff
-       return "bloxd" === BB.site && !BB.isMobileApp && !BB.isTouchScreen
+       let iW = 0;
+       for (let mW = 0; mW < NW.o; mW++) {
+         const EW = WW.getItemAtIdx(mW);
+         var OW;
+         if (PW(EW)) iW += null !== (OW = EW.amount) && void 0 !== OW ? OW : 1
+       }
+       return iW
+     }
+ 
+     function wW(WW, iW, OW, NW) {
+       if (OW !== mW.m.GLIDING && NW !== mW.m.GLIDING) return;
+       const PW = WW.EY.HiW(iW);
+       if (PW.gliderFuelCooldownEnd = 0, OW === mW.m.GLIDING) {
+         var cW;
+         const OW = null === (cW = WW.EY.riW(iW)) || void 0 === cW ? void 0 : cW.inventory;
+         OW && null !== LW(OW) && WW.bloxd.startGliderFuelCooldown(iW, PW, EW.h.getFirecrackerCooldownMultiplier(OW.getItemAtSelectedSlot()))
+ ... (1 more added lines; see GitHub link above)
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11334` → after: `L39682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39682) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11334)

```diff
-   34717: (BB, OB, GB) => {
+   37992: (WW, iW, OW) => {
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11336` → after: `L39684-L39685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39684-L39685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39684-L39685) · [Before (L11336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11336)

```diff
-       return BB && !OB
+       var OW, mW, EW, NW, PW, LW, cW, wW;
+       return WW.name === iW.name && ((null === (OW = WW.attributes) || void 0 === OW || null === (mW = OW.customAttributes) || void 0 === mW ? void 0 : mW.stackKey) === (null === (EW = iW.attributes) || void 0 === EW || null === (NW = EW.customAttributes) || void 0 === NW ? void  … [truncated]
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11339` → after: `L39688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39688) · [Before (L11339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11339)

```diff
-       b: () => YB
+       c: () => mW
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11342` → after: `L39691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39691) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11342)

```diff
-   34737: (BB, OB, GB) => {
+   39191: (WW, iW, OW) => {
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11344` → after: `L39693-L39699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39693-L39699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39693-L39699) · [Before (L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11344)

```diff
-       b: () => QB
+       c: () => NW,
+       f: () => cW,
+       g: () => PW,
+       i: () => wW,
+       j: () => ZW,
+       l: () => tW,
+       n: () => EW
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11346` → after: `L39701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39701) · [Before (L11346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11346)

```diff
-     var YB = GB(1308);
+     var mW = OW(2955);
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11348-L11350` → after: `L39703-L39705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39703-L39705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39703-L39705) · [Before (L11348-L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11348-L11350)

```diff
-     function DB() {
-       var BB, OB;
-       return null !== (BB = null === (OB = screen.orientation) || void 0 === OB ? void 0 : OB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
+     function EW(WW) {
+       const iW = new mW.g(`blockBreakDrop|${WW}`);
+       return () => iW.next()
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11352-L11387` → after: `L39707-L39731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39707-L39731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39707-L39731) · [Before (L11352-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11352-L11387)

```diff
-     const QB = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
-       isHeld() {
-         return this.holding && DB() !== this.heldOrientation && (this.holding = !1), this.holding
-       }
-       hold() {
-         this.heldOrientation = DB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, YB.kq)(new Error("Game view size held for 60 s"))
-         }), 6e4)
-       }
-       release() {
-         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
- ... (20 more removed lines; see GitHub link above)
+ 
+     function NW(WW) {
+       WW.gravityMultiplier = 2, WW.friction = 4, WW.FP = .02, WW.zx = 0, WW.fluidDrag = .2
+     }
+ 
+     function PW(WW, iW) {
+       return [WW[0] + .2 * iW() + .4, WW[1] + .5, WW[2] + .2 * iW() + .4]
+     }
+     const LW = .01;
+ 
+     function cW(WW) {
+       return [LW - WW() * LW * 2, .05, LW - WW() * LW * 2]
+     }
+ 
+     function wW(WW) {
+       const iW = Math.hypot(WW[0], WW[1], WW[2]);
+ ... (9 more added lines; see GitHub link above)
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11390` → after: `L39734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39734) · [Before (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11390)

```diff
-   34683: (BB, OB, GB) => {
+   39352: (WW, iW, OW) => {
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11392-L11395` → after: `L39736-L39737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39736-L39737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39736-L39737) · [Before (L11392-L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11392-L11395)

```diff
-       d: () => RB,
-       e: () => JB,
-       f: () => qB,
-       g: () => pB
+       b: () => mW,
+       e: () => NW
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11397-L11407` → after: `L39739-L39758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39739-L39758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39739-L39758) · [Before (L11397-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11397-L11407)

```diff
-     var YB = GB(162),
-       DB = GB(1262),
-       QB = GB(1186),
-       oB = GB(1121),
-       jB = GB(1813);
-     const yB = {
-       offline: "homePage:onboardingNameNoAccount",
-       outdated: "general:updatedReloading",
-       busy: "homePage:changeNameTooFast",
-       server: "homePage:changeNameFailed"
-     };
+     const mW = ["Chest", "Loot Chest", "Moonstone Chest"],
+       EW = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (4 more added lines; see GitHub link above)
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11410` → after: `L39761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39761) · [Before (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11410)

```diff
-       return yB[BB]
+       return EW.find((iW => iW.exactMatch ? WW === iW.name : WW.includes(iW.name)))
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11412` → after: `L39763-L39764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39763-L39764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39763-L39764) · [Before (L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11412)

```diff
- 
+   },
+   38097: (WW, iW, OW) => {
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11414` → after: `L39766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39766) · [Before (L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11414)

```diff
-       return (0, jB.b)(BB) ? "outdated" : BB instanceof YB.d ? 429 === BB.httpCode ? "busy" : "server" : "offline"
+       return WW.includes("Leaf Bed")
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11417-L11423` → after: `L39769-L39770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39769-L39770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39769-L39770) · [Before (L11417-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11417-L11423)

```diff
-     function PB(BB, OB, GB) {
-       return (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${QB.clientSideServerUrls.indexUrl}${OB}`, GB, {
-         retries: 3
-       }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", OB, BB), {
-         outcome: "failed",
-         failure: MB(BB)
-       })))
+     function EW(WW) {
+       return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11427` → after: `L39774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39774) · [Before (L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11427)

```diff
-       return "outcome" in BB && "failed" === BB.outcome
+       return WW.includes(" Strongbed")
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11431-L11441` → after: `L39778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39778) · [Before (L11431-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11431-L11441)

```diff
-       return console.error("Error when trying to get with new name from DB", BB), {
-         outcome: "refused",
-         message: BB
-       }
-     }
-     async function pB(BB) {
-       const OB = await PB(BB, "/index/name/random", {});
-       return zB(OB) ? OB : "err" in OB ? lB(OB.err) : (BB.setPlayerName(OB.name), {
-         outcome: "changed",
-         name: OB.name
-       })
+       return mW(WW) || EW(WW) || NW(WW)
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11443-L11452` → after: `L39780-L39804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39780-L39804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39780-L39804) · [Before (L11443-L11452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11443-L11452)

```diff
-     async function qB(BB, OB) {
-       const GB = await PB(BB, "/index/name/update", {
-         name: OB
-       });
-       return zB(GB) ? GB : "err" in GB ? lB(GB.err) : GB.nameExists ? {
-         outcome: "taken"
-       } : (BB.setPlayerName(OB), {
-         outcome: "changed",
-         name: OB
-       })
+     OW.d(iW, {
+       d: () => PW,
+       f: () => mW,
+       j: () => NW,
+       l: () => EW
+     })
+   },
+   38088: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => wW
+     });
+     var mW = OW(38097),
+       EW = OW(5725);
+     const NW = [],
+       PW = [],
+       LW = [],
+ ... (9 more added lines; see GitHub link above)
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11456-L11469` → after: `L39821-L39830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39821-L39830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39821-L39830) · [Before (L11456-L11469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11456-L11469)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-       const YB = 1 === OB ? 1 : 10 ** (OB - 1),
-         QB = String(YB + Math.floor(GB() * (10 ** OB - YB)));
-       return `${BB.slice(0,DB.l-OB)}${QB}`
-     }
-     const NB = [1, 2, 3, 4];
-     async function RB(BB, OB) {
-       const GB = await qB(BB, OB);
-       if ("taken" !== GB.outcome) return GB;
-       for (const YB of NB) {
-         const GB = ZB(OB, YB),
-           DB = await qB(BB, GB);
-         if ("taken" !== DB.outcome) return DB
-       }
+       var OW;
+       const tW = (0, mW.c)(iW),
+         ZW = tW.physicsBodyDimensions.width,
+         xW = tW.physicsBodyDimensions.height,
+         lW = tW.hitBoxDimensions.width,
+         AW = tW.hitBoxDimensions.height,
+         bW = Math.min(Math.max(ZW * WW, PW), EW.f),
+         jW = Math.min(Math.max(xW * WW, LW), EW.e),
+         UW = Math.max(lW * Math.min(WW, EW.f / ZW), cW),
+         kW = Math.max(AW * Math.min(WW, EW.e / xW), wW);
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11471` → after: `L39832-L39836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39832-L39836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39832-L39836) · [Before (L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11471)

```diff
-         outcome: "taken"
+         physicsBodyWidth: bW,
+         physicsBodyHeight: jW,
+         collideEntitiesWidthExpand: Math.max(0, UW - bW),
+         collideEntitiesHeightExpand: Math.max(0, kW - jW),
+         shadowSize: NW * WW * (null !== (OW = tW.modelScale) && void 0 !== OW ? OW : 1)
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11475` → after: `L39840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39840) · [Before (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11475)

```diff
-   34722: (BB, OB, GB) => {
+   38895: (WW, iW, OW) => {
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11477-L11478` → after: `L39842-L39844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39842-L39844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39842-L39844) · [Before (L11477-L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11477-L11478)

```diff
-       c: () => jB,
-       e: () => yB
+       e: () => PW,
+       i: () => wW,
+       l: () => LW
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11480-L11483` → after: `L39846-L39848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39846-L39848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39846-L39848) · [Before (L11480-L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11480-L11483)

```diff
-     var YB = GB(16);
-     const DB = 24,
-       QB = "farNametags",
-       oB = 1e5;
+     var mW = OW(38900),
+       EW = OW(3891),
+       NW = OW.n(EW);
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11485-L11487` → after: `L39850-L39851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39850-L39851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39850-L39851) · [Before (L11485-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11485-L11487)

```diff
-     function jB() {
-       var BB;
-       return null === (BB = YB.c.get("showDistantNametags")) || void 0 === BB || BB
+     function PW(WW, iW, OW) {
+       return `${WW}|${iW}|${OW}`
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11490-L11496` → after: `L39854-L39861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39854-L39861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39854-L39861) · [Before (L11490-L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11490-L11496)

```diff
-     function yB() {
-       var BB;
-       return null !== (BB = function() {
-         const BB = new URLSearchParams(window.location.search).get(QB),
-           OB = null === BB || "" === BB ? NaN : Number(BB);
-         return Number.isFinite(OB) && OB >= 0 ? Math.min(OB, oB) : null
-       }()) && void 0 !== BB ? BB : jB() ? 0 : DB
+     function LW(WW) {
+       const [iW, OW, mW] = WW.split("|");
+       return [Number(iW), Number(OW), Number(mW)]
+     }
+     const cW = OW(182).f.jZ;
+ 
+     function wW(WW) {
+       return NW()(WW, [cW, cW, cW])
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11499` → after: `L39866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39866) · [Before (L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11499)

```diff
-   34746: (BB, OB, GB) => {
+   38822: (WW, iW, OW) => {
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11502-L11503` → after: `L39869-L39875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39869-L39875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39869-L39875) · [Before (L11502-L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11502-L11503)

```diff
-       e: () => PB,
-       i: () => MB
+       d: () => yW,
+       l: () => nW,
+       h: () => HW,
+       o: () => uW,
+       r: () => JW,
+       s: () => dW,
+       w: () => oW
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11505-L11510` → after: `L39877-L39991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39877-L39991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39877-L39991) · [Before (L11505-L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11505-L11510)

```diff
-     var YB = GB(258),
-       DB = GB(92),
-       QB = GB(118),
-       oB = GB(116),
-       jB = GB(656);
-     const yB = new Set(["mali_bifrost"]);
+     var mW = OW(7453),
+       EW = OW(38824),
+       NW = OW(344);
+     const PW = {
+         FP: .25,
+         fluidDrag: 2,
+         fluidDragHorizontal: 0,
+         fluidDragVertical: 2,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.2,
+         canRun: !1,
+         jumpMultiplier: 0,
+         canAutoStep: !1,
+         canAutoStepByBlock: Object.fromEntries(NW.nc.map((WW => [WW, !0]))),
+         pose: "sitting",
+ ... (99 more added lines; see GitHub link above)
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11512-L11519` → after: `L39993-L40007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR39993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L39993-L40007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L39993-L40007) · [Before (L11512-L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11512-L11519)

```diff
-     function JB() {
-       if (jB.f) return;
-       const BB = (0, DB.pageOperatingSystem)();
-       if ("android" !== BB && "windows" !== BB || (0, jB.c)("webgl_default")) return;
-       if ("windows" === BB) return BB => "qualcomm" === (0, DB.normaliseGpuVendor)((0, oB.e)(BB).vendor);
-       const OB = (0, QB.o)(),
-         GB = null === OB ? (0, YB.r)() : (0, YB.f)(OB.vendor, OB.renderer);
-       return null !== GB && yB.has(GB) ? BB => (0, YB.m)((0, oB.e)(BB).vendor, GB) : void 0
+     function xW(WW, iW) {
+       return {
+         ...ZW,
+         speedMultiplier: iW,
+         fluidSpeedMultiplier: .02,
+         effect: {
+           name: "Driving",
+           icon: WW
+         },
+         horizontalBounciness: 0,
+         steering: {
+           ...tW,
+           turnRate: 1.65
+         }
+       }
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11522-L11523` → after: `L40072-L40082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40072-L40082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40072-L40082) · [Before (L11522-L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11522-L11523)

```diff
-     function MB(BB, OB) {
-       return BB ? () => !0 : OB()
+     function AW(WW) {
+       return {
+         model: "cameraDirection",
+         maxSpeed: WW,
+         minSpeed: .5,
+         pitchAcceleration: .0125,
+         friction: 0,
+         impulseDecayTicks: 100,
+         biasMagnitude: 1.5,
+         excessVelocityBleedPerTick: .5
+       }
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11525-L11536` → after: `L40084-L40157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40084-L40157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40084-L40157) · [Before (L11525-L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11525-L11536)

```diff
-     async function PB(BB) {
-       try {
-         const OB = MB(BB, JB),
-           GB = navigator.gpu;
-         if (void 0 === OB || void 0 === GB) return !1;
-         const YB = await (0, oB.r)(GB, {
-           seed: !1,
-           compatibility: OB
-         });
-         return "string" !== typeof YB && YB.compatibility && !(0, oB.k)(YB.adapter)
-       } catch (OB) {
-         return console.error("WebGPU compatibility-mode adapter request failed.", OB), !1
+     const bW = {
+         gravityMultiplier: 0,
+         width: .5,
+         height: 1.4,
+         canRun: !0,
+         canAutoStep: !0,
+         pose: "gliding",
+         effect: {
+           name: "Gliding",
+           icon: "Gliding"
+         },
+         airborneMode: {
+           activeMovementType: mW.m.GLIDING,
+           durationMs: null,
+           exitsVehicleOnEnd: !1
+         },
+ ... (58 more added lines; see GitHub link above)
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11539-L11725` → after: `L40160-L40344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40160-L40344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40160-L40344) · [Before (L11539-L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11539-L11725)

```diff
-   },
-   34815: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => DB,
-       g: () => oB
-     });
-     const YB = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
- ... (171 more removed lines; see GitHub link above)
+     const MW = {
+       [mW.s.ROTATION_1]: {
+         fixedHeading: 0
+       },
+       [mW.s.ROTATION_2]: {
+         fixedHeading: Math.PI / 2
+       },
+       [mW.s.ROTATION_3]: {
+         fixedHeading: Math.PI
+       },
+       [mW.s.ROTATION_4]: {
+         fixedHeading: -Math.PI / 2
+       }
+     };
+     var KW = OW(5725),
+       SW = function(WW) {
+ ... (169 more added lines; see GitHub link above)
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11727-L11754` → after: `L40346-L40347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40346-L40347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40346-L40347) · [Before (L11727-L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11727-L11754)

```diff
-     function DB(BB) {
-       let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
-       if ("number" === typeof BB) {
-         if (!Number.isFinite(BB)) return "0";
-         if (Math.abs(BB) < 100) {
-           const OB = BB < 0 ? "-" : "",
-             GB = Math.abs(BB);
-           return GB >= 10 ? `${OB}${GB.toFixed(1).replace(/\.0$/,"")}` : `${OB}${GB.toFixed(2).replace(/\.?0+$/,"")}`
-         }
-         OB = BigInt(Math.floor(BB))
-       } else OB = BB;
-       const DB = OB < 0n ? -OB : OB,
-         QB = OB < 0n ? "-" : "",
-         oB = DB.toString();
-       if (oB.length <= GB) return `${QB}${oB}`;
-       const jB = 3 * Math.floor((oB.length - 1) / 3);
- ... (12 more removed lines; see GitHub link above)
+     function nW(WW, iW) {
+       return hW[WW].getAllSettingsForTier(iW)
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11756-L11763` → after: `L40349-L40353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40349-L40353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40349-L40353) · [Before (L11756-L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11756-L11763)

```diff
-     const QB = YB.map((BB => {
-       let {
-         threshold: OB,
-         suffix: GB
-       } = BB;
-       return {
-         threshold: Number(OB),
-         suffix: GB
+ 
+     function* uW() {
+       for (const WW in hW) {
+         const iW = Number(WW);
+         yield iW
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11765-L11770` → after: `L40355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40355) · [Before (L11765-L11770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11765-L11770)

```diff
-     })).filter((BB => {
-       let {
-         threshold: OB
-       } = BB;
-       return Number.isFinite(OB)
-     }));
+     }
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11772-L11785` → after: `L40357-L40363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40357-L40363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40357-L40363) · [Before (L11772-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11772-L11785)

```diff
-     function oB(BB) {
-       const OB = Math.abs(BB),
-         GB = BB < 0 ? "-" : "";
-       for (const {
-           threshold: YB,
-           suffix: DB
-         }
-         of QB)
-         if (OB >= YB) {
-           const BB = OB / YB;
-           if (BB >= 1e3) return `${GB}${OB.toExponential(2).replace("e+","e")}`;
-           let QB;
-           return QB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${GB}${QB}${DB}`
-         } return `${GB}${OB}`
+     function oW(WW, iW, OW) {
+       const mW = iW ? WW.fluidSpeedMultiplier : OW ? WW.landSpeedMultiplier : WW.airSpeedMultiplier;
+       return WW.speedMultiplier * mW
+     }
+ 
+     function dW(WW, iW, OW) {
+       return null !== WW.fixedHeading ? WW.fixedHeading : WW.steering ? iW : OW
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11788` → after: `L40366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40366) · [Before (L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11788)

```diff
-   34799: (BB, OB, GB) => {
+   38855: (WW, iW, OW) => {
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11790-L11795` → after: `L40368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40368) · [Before (L11790-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11790-L11795)

```diff
-       e: () => MB,
-       f: () => zB,
-       g: () => PB,
-       h: () => oB,
-       i: () => JB,
-       m: () => yB
+       d: () => PW
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11797-L11801` → after: `L40370-L40374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40370-L40374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40370-L40374) · [Before (L11797-L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11797-L11801)

```diff
-     var YB = GB(353);
-     const DB = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       QB = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
+     var mW = OW(5725),
+       EW = OW(344);
+     const NW = {
+         Vines: {
+           upForceScalar: 1.05
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11803-L11804` → after: `L40376-L40377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40376-L40377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40376-L40377) · [Before (L11803-L11804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11803-L11804)

```diff
-         "Attack Speed": {
-           translationKey: "enchantments:attackSpeedDescription"
+         "Maple Ladder": {
+           upForceScalar: 1.05
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11806-L11807` → after: `L40379-L40380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40379-L40380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40379-L40380) · [Before (L11806-L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11806-L11807)

```diff
-         "Critical Damage": {
-           translationKey: "enchantments:criticalDamageDescription"
+         "Pine Ladder": {
+           upForceScalar: 1.05
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11809-L11810` → after: `L40382-L40383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40382-L40383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40382-L40383) · [Before (L11809-L11810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11809-L11810)

```diff
-         Protection: {
-           translationKey: "enchantments:protectionDescription"
+         "Plum Ladder": {
+           upForceScalar: 1.05
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11812-L11813` → after: `L40385-L40386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40385-L40386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40385-L40386) · [Before (L11812-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11812-L11813)

```diff
-         Health: {
-           translationKey: "enchantments:healthDescription"
+         "Cedar Ladder": {
+           upForceScalar: 1.25
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11815-L11816` → after: `L40388-L40389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40388-L40389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40388-L40389) · [Before (L11815-L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11815-L11816)

```diff
-         "Health Regen": {
-           translationKey: "enchantments:healthRegenDescription"
+         "Aspen Ladder": {
+           upForceScalar: 1.05
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11818-L11819` → after: `L40391-L40392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40391-L40392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40391-L40392) · [Before (L11818-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11818-L11819)

```diff
-         "Stomp Damage": {
-           translationKey: "enchantments:stompDamageDescription"
+         "Jungle Ladder": {
+           upForceScalar: 1.25
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11821-L11822` → after: `L40394-L40395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40394-L40395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40394-L40395) · [Before (L11821-L11822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11821-L11822)

```diff
-         "Knockback Resist": {
-           translationKey: "enchantments:knockbackResistDescription"
+         "Palm Ladder": {
+           upForceScalar: 1.25
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11824-L11825` → after: `L40397-L40398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40397-L40398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40397-L40398) · [Before (L11824-L11825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11824-L11825)

```diff
-         "Arrow Speed": {
-           translationKey: "enchantments:arrowSpeedDescription"
+         "Pear Ladder": {
+           upForceScalar: 1.05
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11827-L11828` → after: `L40400-L40401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40400-L40401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40400-L40401) · [Before (L11827-L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11827-L11828)

```diff
-         "Arrow Damage": {
-           translationKey: "enchantments:arrowDamageDescription"
+         "Cherry Ladder": {
+           upForceScalar: 1.05
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11830-L11831` → after: `L40403-L40404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40403-L40404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40403-L40404) · [Before (L11830-L11831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11830-L11831)

```diff
-         "Quick Charge": {
-           translationKey: "enchantments:quickChargeDescription"
+         "Spectral Ladder": {
+           upForceScalar: 1.05
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11833-L11834` → after: `L40406-L40407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40406-L40407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40406-L40407) · [Before (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11833-L11834)

```diff
-         "Break Speed": {
-           translationKey: "enchantments:breakSpeedDescription"
+         "Mango Ladder": {
+           upForceScalar: 1.05
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11836-L11837` → after: `L40409-L40410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40409-L40410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40409-L40410) · [Before (L11836-L11837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11836-L11837)

```diff
-         Momentum: {
-           translationKey: "enchantments:momentumDescription"
+         "Iron Ladder": {
+           upForceScalar: 1.4
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11839-L11840` → after: `L40412-L40413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40412-L40413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40412-L40413) · [Before (L11839-L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11839-L11840)

```diff
-         "Mining Yield": {
-           translationKey: "enchantments:miningYieldDescription"
+         "Maple Trapdoor": {
+           upForceScalar: .95
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11842-L11843` → after: `L40415-L40416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40415-L40416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40415-L40416) · [Before (L11842-L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11842-L11843)

```diff
-         "Farming Yield": {
-           translationKey: "enchantments:farmingYieldDescription"
+         "Pine Trapdoor": {
+           upForceScalar: .95
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11845-L11846` → after: `L40418-L40419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40418-L40419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40418-L40419) · [Before (L11845-L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11845-L11846)

```diff
-         "Mining Aura": {
-           translationKey: "enchantments:miningAuraDescription"
+         "Plum Trapdoor": {
+           upForceScalar: .95
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11848-L11849` → after: `L40421-L40422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40421-L40422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40421-L40422) · [Before (L11848-L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11848-L11849)

```diff
-         "Digging Aura": {
-           translationKey: "enchantments:diggingAuraDescription"
+         "Cedar Trapdoor": {
+           upForceScalar: .95
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11851-L11852` → after: `L40424-L40425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40424-L40425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40424-L40425) · [Before (L11851-L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11851-L11852)

```diff
-         "Lumber Aura": {
-           translationKey: "enchantments:lumberAuraDescription"
+         "Aspen Trapdoor": {
+           upForceScalar: .95
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11854-L11855` → after: `L40427-L40428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40427-L40428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40427-L40428) · [Before (L11854-L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11854-L11855)

```diff
-         "Farming Aura": {
-           translationKey: "enchantments:farmingAuraDescription"
+         "Jungle Trapdoor": {
+           upForceScalar: .95
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11857-L11858` → after: `L40430-L40431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40430-L40431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40430-L40431) · [Before (L11857-L11858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11857-L11858)

```diff
-         "Horizontal Knockback": {
-           translationKey: "enchantments:horizontalKnockbackDescription"
+         "Palm Trapdoor": {
+           upForceScalar: .95
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11860-L11861` → after: `L40433-L40434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40433-L40434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40433-L40434) · [Before (L11860-L11861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11860-L11861)

```diff
-         "Vertical Knockback": {
-           translationKey: "enchantments:verticalKnockbackDescription"
+         "Pear Trapdoor": {
+           upForceScalar: .95
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11863-L11864` → after: `L40436-L40437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40436-L40437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40436-L40437) · [Before (L11863-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11863-L11864)

```diff
-         "Firecracker Cooldown": {
-           translationKey: "enchantments:firecrackerCooldownDescription"
+         "Cherry Trapdoor": {
+           upForceScalar: .95
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11866-L11867` → after: `L40439-L40440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40439-L40440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40439-L40440) · [Before (L11866-L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11866-L11867)

```diff
-         "Firecracker Boost": {
-           translationKey: "enchantments:firecrackerBoostDescription"
+         "Spectral Trapdoor": {
+           upForceScalar: .95
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11869-L11870` → after: `L40442-L40443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR40442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L40442-L40443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L40442-L40443) · [Before (L11869-L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L11869-L11870)

```diff
-         "Gliding Speed": {
-           translationKey: "enchantments:glidingSpeedDescription"
+         "Mango Trapdoor": {
+           upForceScalar: .95
```
