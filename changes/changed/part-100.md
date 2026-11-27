# Changed — Bundle Modifications Report (Part 100 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `100 / 154` (**408** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 099](part-099.md) · [Part 101 →](part-101.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4895 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 2644. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19503-L19516` → after: `L19337-L19384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19337-L19384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19337-L19384) · [Before (L19503-L19516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19503-L19516)

```diff
-           for (TW(WW[SW[13]] = SW[2], WW[-SW[64]] = 'lCBzYE,pR%Tn{;|^W8tgube>P~QI.$v}fM!i"2#3ZKV?:&Ua/]oOHh5[J9c_0=)Aqdw6LF1<SX+x4yjsGm@D7`rNk*(', WW[SW[38]] = "" + (WW[SW[1]] || ""), WW[-SW[41]] = WW[SW[38]].length, WW[SW[15]] = [], WW[SW[32]] = SW[1], WW[SW[56]] = SW[1], WW[SW[ … [truncated]
-             if (WW[SW[6]] = WW[-SW[64]].indexOf(WW[SW[38]][WW[SW[11]]]), WW[SW[6]] !== -SW[2])
-               if (WW[SW[65]] < SW[1]) WW[SW[65]] = WW[SW[6]];
-               else {
-                 TW(WW[SW[65]] += WW[SW[6]] * SW[31], WW[SW[32]] |= WW[SW[65]] << WW[SW[56]], WW[SW[56]] += (WW[SW[65]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
-                 do {
-                   TW(WW[SW[15]].push(WW[SW[32]] & SW[12]), WW[SW[32]] >>= SW[11], WW[SW[56]] -= SW[11])
-                 } while (WW[SW[56]] > SW[23]);
-                 WW[SW[65]] = -SW[2]
-               } return WW[SW[65]] > -SW[2] && WW[SW[15]].push((WW[SW[32]] | WW[SW[65]] << WW[SW[56]]) & SW[12]), YW(WW[SW[15]])
-         }
- 
-         function iW(...iW) {
-           return iW[SW[13]] = SW[2], typeof xW[iW[SW[1]]] === SW[17] ? xW[iW[SW[1]]] = WW(lW[iW[SW[1]]]) : xW[iW[SW[1]]]
+           RR[XR[13]] = XR[1];
+           const JR = require("big-integer");
+           gR(RR[-XR[104]] = class {
+             static randomPrime(...RR) {
+               RR[XR[13]] = XR[2];
+               const GR = JR.one.shiftLeft(RR[XR[1]] - XR[2]),
+                 yR = JR.one.shiftLeft(RR[XR[1]]).prev();
+               for (; XR[50];) {
+                 let RR = JR.randBetween(GR, yR);
+                 if (RR.isProbablePrime(XR[101])) return RR
+               }
+             }
+             static generate(...RR) {
+               RR[XR[13]] = XR[2];
+               const GR = JR(65537);
+               let yR, tR;
+ ... (32 more added lines; see GitHub link above)
```

#### 2645. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19518-L19540` → after: `L19386-L19391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19386-L19391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19386-L19391) · [Before (L19518-L19540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19518-L19540)

```diff
-         let OW = SW[51];
-         TW(setInterval((() => {
-           if (function(...WW) {
-               return WW[SW[13]] = SW[2], typeof xW[WW[SW[1]]] === SW[17] ? xW[WW[SW[1]]] = function(...WW) {
-                 for (TW(WW[SW[13]] = SW[2], WW[SW[5]] = 'HY",dgF^*Nmul9%OJ$bvoV/>q6_EwDG20`(]:iALBzx~yrs74<c&3.18I@QMh?jK=!WPCS;5}ftnZ|pX+[a#kT{RUe)', WW[SW[38]] = "" + (WW[SW[1]] || ""), WW[SW[14]] = WW[SW[38]].length, WW[SW[10]] = [], WW[SW[32]] = SW[1], WW[-SW[7]] = SW[1], WW[ … [truncated]
-                   if (WW[SW[45]] = WW[SW[5]].indexOf(WW[SW[38]][WW[SW[66]]]), WW[SW[45]] !== -SW[2])
-                     if (WW[-SW[67]] < SW[1]) WW[-SW[67]] = WW[SW[45]];
-                     else {
-                       TW(WW[-SW[67]] += WW[SW[45]] * SW[31], WW[SW[32]] |= WW[-SW[67]] << WW[-SW[7]], WW[-SW[7]] += (WW[-SW[67]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
-                       do {
-                         TW(WW[SW[10]].push(WW[SW[32]] & SW[12]), WW[SW[32]] >>= SW[11], WW[-SW[7]] -= SW[11])
-                       } while (WW[-SW[7]] > SW[23]);
-                       WW[-SW[67]] = -SW[2]
-                     } return WW[-SW[67]] > -SW[2] && WW[SW[10]].push((WW[SW[32]] | WW[-SW[67]] << WW[-SW[7]]) & SW[12]), YW(WW[SW[10]])
-               }(lW[WW[SW[1]]]) : xW[WW[SW[1]]]
-             }(117) in yW && function(...WW) {
- ... (7 more removed lines; see GitHub link above)
+         MR(139) + "v" in pR && RR();
+         let JR = XR[47];
+         gR(setInterval(((...RR) => {
+           if (RR[XR[13]] = XR[1], MR(140) in pR && function(...RR) {
+               RR[XR[13]] = XR[1]
+             }(), !JR && (0, nR[XR[59]])()) {
```

#### 2646. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19542-L19544` → after: `L19393-L19395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19393-L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19393-L19395) · [Before (L19542-L19544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19542-L19544)

```diff
-               for (TW(WW[SW[13]] = SW[2], WW[SW[2]] = '$uv~0"/5_|P`1q[,@WR?:e{<gOw^LHtf2B]I4TA8Y+jcS6U)#l=%nodaJGM9E.*!sm}Zk7CKxyiQD&XF;>(3VNbzphr', WW[-SW[70]] = "" + (WW[SW[1]] || ""), WW[SW[71]] = WW[-SW[70]].length, WW[-SW[74]] = [], WW[SW[72]] = SW[1], WW[SW[73]] = SW[1], WW … [truncated]
-                 if (WW[SW[0]] = WW[SW[2]].indexOf(WW[-SW[70]][WW[SW[3]]]), WW[SW[0]] !== -SW[2])
-                   if (WW[SW[30]] < SW[1]) WW[SW[30]] = WW[SW[0]];
+               for (gR(RR[XR[13]] = XR[2], RR[-XR[56]] = 'eRau&8%3`HMASt?Bz/4dr{VChcsD.KYU])xQN0#y:I7i"on|kT2^E(L}XFGPmgZ$<qvJ+p*flj1@wWO=,;!>95_~[6b', RR[XR[21]] = "" + (RR[XR[1]] || ""), RR[XR[107]] = RR[XR[21]].length, RR[XR[48]] = [], RR[XR[108]] = XR[1], RR[XR[109]] = XR[1],  … [truncated]
+                 if (RR[XR[6]] = RR[-XR[56]].indexOf(RR[XR[21]][RR[XR[11]]]), RR[XR[6]] !== -XR[2])
+                   if (RR[XR[32]] < XR[1]) RR[XR[32]] = RR[XR[6]];
```

#### 2647. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19546` → after: `L19397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19397) · [Before (L19546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19546)

```diff
-                     TW(WW[SW[30]] += WW[SW[0]] * SW[31], WW[SW[72]] |= WW[SW[30]] << WW[SW[73]], WW[SW[73]] += (WW[SW[30]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
+                     gR(RR[XR[32]] += RR[XR[6]] * XR[33], RR[XR[108]] |= RR[XR[32]] << RR[XR[109]], RR[XR[109]] += (RR[XR[32]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
```

#### 2648. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19548-L19551` → after: `L19399-L19406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19399-L19406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19399-L19406) · [Before (L19548-L19551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19548-L19551)

```diff
-                       TW(WW[-SW[74]].push(WW[SW[72]] & SW[12]), WW[SW[72]] >>= SW[11], WW[SW[73]] -= SW[11])
-                     } while (WW[SW[73]] > SW[23]);
-                     WW[SW[30]] = -SW[2]
-                   } return WW[SW[30]] > -SW[2] && WW[-SW[74]].push((WW[SW[72]] | WW[SW[30]] << WW[SW[73]]) & SW[12]), YW(WW[-SW[74]])
+                       gR(RR[XR[48]].push(RR[XR[108]] & XR[12]), RR[XR[108]] >>= XR[11], RR[XR[109]] -= XR[11])
+                     } while (RR[XR[109]] > XR[26]);
+                     RR[XR[32]] = -XR[2]
+                   } return RR[XR[32]] > -XR[2] && RR[XR[48]].push((RR[XR[108]] | RR[XR[32]] << RR[XR[109]]) & XR[12]), BR(RR[XR[48]])
+             }
+ 
+             function yR(...RR) {
+               return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = GR(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
```

#### 2649. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19555` → after: `L19410-L19422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19410-L19422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19410-L19422) · [Before (L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19555)

```diff
-               return iW[SW[13]] = SW[2], typeof xW[iW[SW[1]]] === SW[17] ? xW[iW[SW[1]]] = WW(lW[iW[SW[1]]]) : xW[iW[SW[1]]]
+               gR(RR[XR[13]] = XR[1], RR[XR[110]] = function(...JR) {
+                 return JR[XR[13]] = XR[21], RR[-XR[111]]({}, JR[XR[1]], JR[XR[2]])
+               }, RR[-XR[111]] = function(JR, GR, yR) {
+                 var tR, uR, ZR, qR = {};
+                 if (JR[GR + yR] !== XR[19]) return JR[GR + yR];
+                 if (GR === yR) return XR[50];
+                 for (tR = XR[1]; tR < GR.length; tR++) qR[GR[tR]] === XR[19] && (qR[GR[tR]] = XR[1]), qR[yR[tR]] === XR[19] && (qR[yR[tR]] = XR[1]), gR(qR[GR[tR]]++, qR[yR[tR]]--);
+                 for (uR in qR)
+                   if (qR[uR] !== XR[1]) return JR[GR + yR] = XR[47], XR[47];
+                 for (ZR = XR[2]; ZR < GR.length; ZR++)
+                   if (RR[-XR[111]](JR, GR.substr(XR[1], ZR), yR.substr(XR[1], ZR)) && RR[-XR[111]](JR, GR.substr(ZR), yR.substr(ZR)) || RR[-XR[111]](JR, GR.substr(XR[1], ZR), yR.substr(yR.length - ZR)) && RR[-XR[111]](JR, GR.substr(ZR), yR.substr(XR[1], yR.length - ZR))) return J … [truncated]
+                 return JR[GR + yR] = XR[47], XR[47]
+               }, console.log(RR[XR[110]]))
```

#### 2650. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19558-L19560` → after: `L19426-L19428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19426-L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19426-L19428) · [Before (L19558-L19560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19558-L19560)

```diff
-               [iW(118)]: iW(SW[49]),
-               [iW(120)]: iW(121),
-               [iW(122)]: iW(123)
+               [yR(142)]: yR(XR[65]),
+               [yR(144)]: yR(145),
+               [yR(146)]: yR(147)
```

#### 2651. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19562` → after: `L19430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19430) · [Before (L19562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19562)

```diff
-             TW(OW = SW[52], (0, kW[iW(124)])(sW.Ji, mW))
+             gR(JR = XR[50], (0, UR[yR(XR[60])])(WR.$i, uR))
```

#### 2652. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19564-L19578` → after: `L19432-L19458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19432-L19458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19432-L19458) · [Before (L19564-L19578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19564-L19578)

```diff
-         }), 6255), (0, kW[iW(125) + iW(126)])((() => {
-           (function(...WW) {
-             return WW[SW[13]] = SW[2], typeof xW[WW[SW[1]]] === SW[17] ? xW[WW[SW[1]]] = function(WW) {
-               var iW, OW, mW, EW, NW, PW, LW;
-               for (TW(iW = "" + (WW || ""), OW = iW.length, mW = [], EW = SW[1], NW = SW[1], PW = -SW[2]), LW = SW[1]; LW < OW; LW++) {
-                 var cW = 'v#%9]!*86~Q,;OxCH_{j>KfAqatV0|ZJ?hF4mr2c[/@u3DnG=^Lk:YR}E5BI1<"gylie.z`oSWbw)$M7NUs(PX&+pTd'.indexOf(iW[LW]);
-                 if (cW !== -SW[2])
-                   if (PW < SW[1]) PW = cW;
-                   else {
-                     TW(PW += cW * SW[31], EW |= PW << NW, NW += (PW & SW[34]) > SW[35] ? SW[36] : SW[37]);
-                     do {
-                       TW(mW.push(EW & SW[12]), EW >>= SW[11], NW -= SW[11])
-                     } while (NW > SW[23]);
-                     PW = -SW[2]
-                   }
+         }), 3108), (0, UR[MR(149) + MR(150)])(((...RR) => {
+           RR[XR[13]] = XR[1],
+             function(...RR) {
+               return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = function(...RR) {
+                 for (gR(RR[XR[13]] = XR[2], RR[XR[115]] = '.]UuqcHF!nx$jZ%v"e}<415#/GlKhr97{QwOIXb^Y&yJoiVsT8BAptzLW~3f0C,g|:NEa2`_>S(M@mD=+)[6PR?*d;k', RR[XR[30]] = "" + (RR[XR[1]] || ""), RR[XR[114]] = RR[XR[30]].length, RR[XR[16]] = [], RR[XR[34]] = XR[1], RR[-XR[112]] = XR[1] … [truncated]
+                   if (RR[XR[59]] = RR[XR[115]].indexOf(RR[XR[30]][RR[XR[113]]]), RR[XR[59]] !== -XR[2])
+                     if (RR[XR[32]] < XR[1]) RR[XR[32]] = RR[XR[59]];
+                     else {
+                       gR(RR[XR[32]] += RR[XR[59]] * XR[33], RR[XR[34]] |= RR[XR[32]] << RR[-XR[112]], RR[-XR[112]] += (RR[XR[32]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
+                       do {
+                         gR(RR[XR[16]].push(RR[XR[34]] & XR[12]), RR[XR[34]] >>= XR[11], RR[-XR[112]] -= XR[11])
+                       } while (RR[-XR[112]] > XR[26]);
+                       RR[XR[32]] = -XR[2]
+                     } return RR[XR[32]] > -XR[2] && RR[XR[16]].push((RR[XR[34]] | RR[XR[32]] << RR[-XR[112]]) & XR[12]), BR(RR[XR[16]])
+               }(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
+             }(XR[102]) + "4" in pR && function(...RR) {
+ ... (11 more added lines; see GitHub link above)
```

#### 2653. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19580-L19596` → after: `L19460-L19499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19460-L19499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19460-L19499) · [Before (L19580-L19596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19580-L19596)

```diff
-               return PW > -SW[2] && mW.push((EW | PW << NW) & SW[12]), YW(mW)
-             }(lW[WW[SW[1]]]) : xW[WW[SW[1]]]
-           })(SW[75]) in yW && function(...WW) {
-             var iW;
-             TW(WW[SW[13]] = SW[1], iW = function(...WW) {
-               TW(WW[SW[13]] = SW[2], this.aZ = WW[SW[1]], this.length = SW[1], this.map = {}, this.head = SW[68], this.tail = SW[68])
-             }, iW.prototype.get = function(WW) {
-               var iW = this.map[WW];
-               return iW ? (this.remove(iW), this.insert(iW.key, iW.val), iW.val) : -SW[2]
-             }, iW.prototype.put = function(WW, iW) {
-               this.map[WW] ? (this.remove(this.map[WW]), this.insert(WW, iW)) : this.length === this.aZ ? (this.remove(this.head), this.insert(WW, iW)) : (this.insert(WW, iW), this.length++)
-             }, iW.prototype.remove = function(...WW) {
-               TW(WW[SW[13]] = SW[2], WW[SW[71]] = WW[SW[1]].prev, WW[SW[38]] = WW[SW[1]].next), WW[SW[38]] && (WW[SW[38]].prev = WW[SW[71]]), WW[SW[71]] && (WW[SW[71]].next = WW[SW[38]]), this.head === WW[SW[1]] && (this.head = WW[SW[38]]), this.tail === WW[SW[1]] && (this.tail = … [truncated]
-             }, iW.prototype.insert = function(...WW) {
-               TW(WW[SW[13]] = SW[38], WW[SW[38]] = new List(WW[SW[1]], WW[SW[2]]), this.tail ? (this.tail.next = WW[SW[38]], WW[SW[38]].prev = this.tail, this.tail = WW[SW[38]]) : (this.tail = WW[SW[38]], this.head = WW[SW[38]]), this.map[WW[SW[1]]] = WW[SW[38]])
-             }, console.log(iW))
- ... (1 more removed lines; see GitHub link above)
+ 
+               function GR(...RR) {
+                 return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = JR(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
+               }
+ 
+               function yR(RR) {
+                 const JR = {};
+                 for (let GR of RR.replace(/[^w]/g, "").toLowerCase()) JR[GR] = JR[GR] + XR[2] || XR[2];
+                 return JR
+               }
+ 
+               function tR(...RR) {
+                 RR[XR[13]] = XR[21];
+                 const JR = buildCharMap(RR[XR[1]]),
+                   GR = buildCharMap(RR[XR[2]]);
+                 for (let yR in JR)
+ ... (24 more added lines; see GitHub link above)
```

#### 2654. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19600-L19611` → after: `L19503-L19514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19503-L19514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19503-L19514) · [Before (L19600-L19611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19600-L19611)

```diff
-     var JW, hW, HW, nW, uW, oW, dW, eW, vW, gW = OW(39303),
-       DW = OW(39308),
-       VW = OW(38500),
-       pW = OW(38502),
-       fW = OW(38485),
-       CW = OW(39648),
-       XW = OW(4337),
-       BW = OW(4344),
-       qW = OW(38411),
-       RW = OW(38364),
-       GW = OW(38431),
-       IW = OW(38419);
+     var bR, vR, OR, xR, NR, DR, HR, oR, cR, PR = GR(39283),
+       IR = GR(39288),
+       mR = GR(38460),
+       zR = GR(38466),
+       SR = GR(38453),
+       jR = GR(39625),
+       dR = GR(4422),
+       ER = GR(4428),
+       YR = GR(38371),
+       kR = GR(38325),
+       QR = GR(38397),
+       FR = GR(38382);
```

#### 2655. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19617` → after: `L19520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19520) · [Before (L19617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19617)

```diff
-           rb: OW,
+           tL: GR,
```

#### 2656. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19624` → after: `L19527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19527) · [Before (L19624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19624)

```diff
-           } = EW[NW], PW = XW.d.getTexture(`${iW}${NW}_Atlas`, BW.g.LIFEFORM_ATLAS).url, {
+           } = tR[uR], ZR = dR.b.getTexture(`${JR}${uR}_Atlas`, ER.k.LIFEFORM_ATLAS).url, {
```

#### 2657. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19627-L19628` → after: `L19530-L19531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19530-L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19530-L19531) · [Before (L19627-L19628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19627-L19628)

```diff
-             name: `${iW}${NW}SpriteSheet`,
-             rb: OW,
+             name: `${JR}${uR}SpriteSheet`,
+             tL: GR,
```

#### 2658. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19630` → after: `L19533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19533) · [Before (L19630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19630)

```diff
-               transparencyMode: RW.e.MATERIAL_ALPHATEST,
+               transparencyMode: kR.d.MATERIAL_ALPHATEST,
```

#### 2659. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19636` → after: `L19539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19539) · [Before (L19636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19636)

```diff
-                 samplingMode: GW.k.nearestNearestMipLinear,
+                 samplingMode: QR.f.nearestNearestMipLinear,
```

#### 2660. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19645` → after: `L19548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19548) · [Before (L19645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19645)

```diff
-               (0, DW.d)(iW, WW, 1, 1), (0, IW.q)(iW, VW.c), (0, pW.e)(iW, (0, UW.h)().TZ), (0, fW.c)(iW), (0, IW.O)(iW)
+               (0, IR.e)(JR, RR, 1, 1), (0, FR.y)(JR, mR.b), (0, zR.c)(JR, (0, nR.i)().lK), (0, SR.b)(JR), (0, FR.Q)(JR)
```

#### 2661. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19654` → after: `L19557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19557) · [Before (L19654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19654)

```diff
-         if (!mW) return void console.error(`No texture metadata found for variation "${OW}" of mob type "${iW}"`);
+         if (!yR) return void console.error(`No texture metadata found for variation "${GR}" of mob type "${JR}"`);
```

#### 2662. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19670` → after: `L19573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19573) · [Before (L19670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19670)

```diff
-     const rW = [2, 0, 1, 8, "c", 156, 148, 132, 78, 68, 4, 255, "length", 226, 232, 3, "a", "e", "undefined", void 0, 176, 63, 6, "fromCodePoint", 7, 12, "push", 155, 5, "b", "f", 207, "d", 140, 9, 186, 91, 8191, 88, 13, 14, 83, 67, 216, 105, 229, 97, 116, 159, 125, 238, 60, 139, … [truncated]
+     const sR = ["b", 0, 1, "h", "c", "a", "i", 7, "e", 156, "d", 8, 255, "length", 2, 3, 9, 147, "undefined", void 0, 6, 63, "fromCodePoint", 12, "push", 181, 4, "f", null, 5, 10, 201, 92, 91, 187, 8191, 88, 13, 14, 173, !1, 90, 134, 139, 87, 207, 159, 66, 143, 1023, 36, 65536, 5 … [truncated]
```

#### 2663. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19673` → after: `L19576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19576) · [Before (L19673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19673)

```diff
-       return WW[rW[12]] = rW[2], typeof nW !== rW[18] && nW ? (new nW).decode(new uW(WW[rW[1]])) : typeof oW !== rW[18] && oW ? oW.from(WW[rW[1]]).toString("utf-8") : vW(WW[rW[1]])
+       return RR[sR[13]] = sR[2], typeof xR !== sR[18] && xR ? (new xR).decode(new NR(RR[sR[1]])) : typeof DR !== sR[18] && DR ? DR.from(RR[sR[1]]).toString("utf-8") : cR(RR[sR[1]])
```

#### 2664. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19681-L19682` → after: `L19584-L19585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19584-L19585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19584-L19585) · [Before (L19681-L19682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19681-L19682)

```diff
-     QW(JW = {}, hW = ["BCE}AC:]>/", ">I9V(Z>)W6a^{6?/0RO", "H!;71BEc[}wp7CNEC*MX@^?Yt+gM)+I$Tzroj0fH.G!.t^aL[o[oiz2", "8!>~yzT)r@ivSEwiAN)x80Ui`ZE", "2=LxA88O8J~i+d<lU,B,61vFGIgiTw{]3o*g_Yxe!kU)k~%wwZj", "nu{GKvpO", "9uLyY&F)I}t/H,LfZZbn5tk/0R6A+dE5cF3}f|wzaT=+;M.EI5o?4", "~GEt#t … [truncated]
-         QW(WW[rW[12]] = rW[1], WW[rW[16]] = [function() {
+     JJ(bR = {}, vR = ['70kE^;>RLvl)Rt#7R>ZH./CK9w80=a{(.phIzfz"N0$X,Gwh1n7AAwKy_', "CpbmE[dat+p07ZPlkvE?9wX_LA1^Tt28QvtEBXRQ", 'fi.51Ba_""sZ_7jU3}m3Q[g/j', '<2r?y)cM1`p8)aURUOp_#Ub}Q"c0cQq3b4', '"v0>Y]9y^+"88)7ctN,<#Es?MK?g"p0i;tcjZ{^M{"}cypz28w>_DsRQ', "G2i?mg=R2KfhRk=e.=Gmvw*.> … [truncated]
+         JJ(RR[sR[13]] = sR[1], RR[sR[16]] = [function() {
```

#### 2665. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19690` → after: `L19593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19593) · [Before (L19690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19690)

```diff
-         }], WW[rW[13]] = rW[19], WW[-rW[14]] = []);
+         }], RR[sR[2]] = sR[19], RR[sR[14]] = []);
```

#### 2666. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19692` → after: `L19595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19595) · [Before (L19692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19692)

```diff
-           QW(WW[rW[13]] = Object, WW[-rW[14]][rW[26]]("".__proto__.constructor.name))
+           JJ(RR[sR[2]] = Object, RR[sR[14]][sR[24]]("".__proto__.constructor.name))
```

#### 2667. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19694-L19697` → after: `L19597-L19600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19597-L19600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19597-L19600) · [Before (L19694-L19697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19694-L19697)

```diff
-         WW: for (WW[rW[15]] = rW[1]; WW[rW[15]] < WW[rW[16]][rW[12]]; WW[rW[15]]++) try {
-           for (WW[rW[13]] = WW[rW[16]][WW[rW[15]]](), WW[rW[17]] = rW[1]; WW[rW[17]] < WW[-rW[14]][rW[12]]; WW[rW[17]]++)
-             if (typeof WW[rW[13]][WW[-rW[14]][WW[rW[17]]]] === rW[18]) continue WW;
-           return WW[rW[13]]
+         RR: for (RR[sR[15]] = sR[1]; RR[sR[15]] < RR[sR[16]][sR[13]]; RR[sR[15]]++) try {
+           for (RR[sR[2]] = RR[sR[16]][RR[sR[15]]](), RR[-sR[17]] = sR[1]; RR[-sR[17]] < RR[sR[14]][sR[13]]; RR[-sR[17]]++)
+             if (typeof RR[sR[2]][RR[sR[14]][RR[-sR[17]]]] === sR[18]) continue RR;
+           return RR[sR[2]]
```

#### 2668. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19699-L19701` → after: `L19602-L19604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19602-L19604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19602-L19604) · [Before (L19699-L19701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19699-L19701)

```diff
-         return WW[rW[13]] || this
-       }() || {}, nW = HW.TextDecoder, uW = HW.Uint8Array, oW = HW.OZ, dW = HW.String || String, eW = HW.Array || Array, vW = function(...WW) {
-         return QW(WW[rW[12]] = rW[1], WW[-rW[27]] = new eW(128), WW[-rW[28]] = dW[rW[23]] || dW.fromCharCode, WW[rW[0]] = []),
+         return RR[sR[2]] || this
+       }() || {}, xR = OR.TextDecoder, NR = OR.Uint8Array, DR = OR.GK, HR = OR.String || String, oR = OR.Array || Array, cR = function(...RR) {
+         return JJ(RR[sR[13]] = sR[1], RR[-sR[25]] = new oR(sR[57]), RR[sR[2]] = HR[sR[22]] || HR.fromCharCode, RR[-sR[20]] = []),
```

#### 2669. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19703-L19704` → after: `L19606-L19607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19606-L19607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19606-L19607) · [Before (L19703-L19704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19703-L19704)

```diff
-             for (QW(iW[rW[12]] = rW[2], iW[rW[16]] = rW[19], iW[rW[20]] = rW[19], iW[rW[4]] = iW[rW[1]][rW[12]], WW[rW[0]][rW[12]] = rW[1]), iW[rW[10]] = rW[1]; iW[rW[10]] < iW[rW[4]];) QW(iW[rW[20]] = iW[rW[1]][iW[rW[10]]++], iW[rW[20]] <= 127 ? iW[rW[16]] = iW[rW[20]] : iW[rW[2 … [truncated]
-             return WW[rW[0]].join("")
+             for (JJ(JR[sR[13]] = sR[2], JR[sR[5]] = sR[19], JR[sR[0]] = sR[19], JR[sR[15]] = JR[sR[1]][sR[13]], RR[-sR[20]][sR[13]] = sR[1]), JR[sR[10]] = sR[1]; JR[sR[10]] < JR[sR[15]];) JJ(JR[sR[0]] = JR[sR[1]][JR[sR[10]]++], JR[sR[0]] <= 127 ? JR[sR[5]] = JR[sR[0]] : JR[sR[0]] … [truncated]
+             return RR[-sR[20]].join("")
```

#### 2670. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19707-L19711` → after: `L19610-L19614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19610-L19614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19610-L19614) · [Before (L19707-L19711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19707-L19711)

```diff
-       function(...WW) {
-         return WW[rW[12]] = rW[2], typeof JW[WW[rW[1]]] === rW[18] ? JW[WW[rW[1]]] = function(...WW) {
-           for (QW(WW[rW[12]] = rW[2], WW[rW[5]] = '2OQjVnNHTGh@F`M6%$/4J:q5iE,L7ulXgW*]U|9wefrD"aY;C~1o)c}8Rzk+<&Z=sI_.B^d!?pxAvyt0>K[b(PSm{3#', WW[rW[0]] = "" + (WW[rW[1]] || ""), WW[rW[4]] = WW[rW[0]].length, WW[rW[10]] = [], WW[-rW[8]] = rW[1], WW[-rW[9]] = rW[1], WW[rW[7]] =  … [truncated]
-             if (WW[-rW[6]] = WW[rW[5]].indexOf(WW[rW[0]][WW[rW[3]]]), WW[-rW[6]] !== -rW[2])
-               if (WW[rW[7]] < rW[1]) WW[rW[7]] = WW[-rW[6]];
+       function(RR) {
+         return typeof bR[RR] === sR[18] ? bR[RR] = function(...RR) {
+           for (JJ(RR[sR[13]] = sR[2], RR[sR[5]] = '4xQDjk>_5A6@OKpdlzR"2^:iGaq83}TcIY=hetU7(%JNun[yBX;<?{mEgv+*wCr9`0o~1MZf$b/.H&WF]#)LVSs!|,P', RR[sR[0]] = "" + (RR[sR[1]] || ""), RR[sR[4]] = RR[sR[0]].length, RR[sR[10]] = [], RR[sR[8]] = sR[1], RR[-sR[9]] = sR[1], RR[sR[7]] = - … [truncated]
+             if (RR[sR[6]] = RR[sR[5]].indexOf(RR[sR[0]][RR[sR[3]]]), RR[sR[6]] !== -sR[2])
+               if (RR[sR[7]] < sR[1]) RR[sR[7]] = RR[sR[6]];
```

#### 2671. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19713` → after: `L19616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19616) · [Before (L19713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19713)

```diff
-                 QW(WW[rW[7]] += WW[-rW[6]] * rW[36], WW[-rW[8]] |= WW[rW[7]] << WW[-rW[9]], WW[-rW[9]] += (WW[rW[7]] & rW[37]) > rW[38] ? rW[39] : rW[40]);
+                 JJ(RR[sR[7]] += RR[sR[6]] * sR[33], RR[sR[8]] |= RR[sR[7]] << RR[-sR[9]], RR[-sR[9]] += (RR[sR[7]] & sR[35]) > sR[36] ? sR[37] : sR[38]);
```

#### 2672. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19715-L19716` → after: `L19618-L19619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19618-L19619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19618-L19619) · [Before (L19715-L19716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19715-L19716)

```diff
-                   QW(WW[rW[10]].push(WW[-rW[8]] & rW[11]), WW[-rW[8]] >>= rW[3], WW[-rW[9]] -= rW[3])
-                 } while (WW[-rW[9]] > rW[24]);
+                   JJ(RR[sR[10]].push(RR[sR[8]] & sR[12]), RR[sR[8]] >>= sR[11], RR[-sR[9]] -= sR[11])
+                 } while (RR[-sR[9]] > sR[7]);
```

#### 2673. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19718-L19727` → after: `L19621-L19628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19621-L19628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19621-L19628) · [Before (L19718-L19727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19718-L19727)

```diff
-               } return WW[rW[7]] > -rW[2] && WW[rW[10]].push((WW[-rW[8]] | WW[rW[7]] << WW[-rW[9]]) & rW[11]), zW(WW[rW[10]])
-         }(hW[WW[rW[1]]]) : JW[WW[rW[1]]]
-       }(rW[46]) + "X" in FW && function(...WW) {
-         QW(WW[rW[12]] = rW[1], WW[rW[29]] = function(...WW) {
-           for (QW(WW[rW[12]] = rW[2], WW[rW[2]] = rW[1], WW[rW[29]] = {}, WW[-rW[31]] = rW[1], WW[rW[32]] = rW[1], WW[-rW[6]] = rW[1], WW[rW[30]] = WW[rW[1]].length), WW[rW[24]] = rW[1]; WW[rW[24]] < WW[rW[30]]; WW[rW[24]]++) {
-             for (QW(WW[rW[29]] = {}, WW[-rW[31]] = rW[1], WW[rW[32]] = rW[2]), WW[rW[3]] = WW[rW[24]] + rW[2]; WW[rW[3]] < WW[rW[30]]; WW[rW[3]]++) WW[rW[1]][WW[rW[24]]].x !== WW[rW[1]][WW[rW[3]]].x || WW[rW[1]][WW[rW[24]]].y !== WW[rW[1]][WW[rW[3]]].y ? (WW[rW[1]][WW[rW[24]]].y  … [truncated]
-             QW(WW[-rW[31]] += WW[rW[32]], WW[rW[2]] = Math.max(WW[rW[2]], WW[-rW[31]]))
-           }
-           return WW[rW[2]]
-         }, console.log(WW[rW[29]]))
+               } return RR[sR[7]] > -sR[2] && RR[sR[10]].push((RR[sR[8]] | RR[sR[7]] << RR[-sR[9]]) & sR[12]), hR(RR[sR[10]])
+         }(vR[RR]) : bR[RR]
+       }(97) + sR[27] in RJ && function(...RR) {
+         function JR() {}
+         RR[sR[13]] = sR[1], JJ(RR[-sR[31]] = function(...RR) {
+           for (JJ(RR[sR[13]] = sR[14], RR[sR[14]] = sR[1], RR[sR[15]] = sR[1], RR[sR[26]] = new JR(sR[1]), RR[sR[29]] = RR[sR[26]], RR[sR[8]] = RR[sR[1]], RR[sR[27]] = RR[sR[2]]); RR[sR[8]] !== sR[28] || RR[sR[27]] !== sR[28];) JJ(RR[sR[15]] = (RR[sR[8]] ? RR[sR[8]].val : sR[1])  … [truncated]
+           return RR[sR[14]] && (RR[sR[29]].next = new JR(RR[sR[14]])), RR[sR[26]].next
+         }, console.log(RR[-sR[31]]))
```

#### 2674. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19730-L19733` → after: `L19631-L19634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19631-L19634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19631-L19634) · [Before (L19730-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19730-L19733)

```diff
-           return WW[rW[12]] = rW[2], typeof JW[WW[rW[1]]] === rW[18] ? JW[WW[rW[1]]] = function(...WW) {
-             for (QW(WW[rW[12]] = rW[2], WW[rW[16]] = 'GuM}v8WlS0Fz/.aN!@t$`s%1h6f<E(q]oD):C?d&4y^_UkYnLQc|{Z"e;Tig[XwO2=9m3#,*7>jrx5I+B~KRPHVAJpb', WW[-rW[46]] = "" + (WW[rW[1]] || ""), WW[rW[15]] = WW[-rW[46]].length, WW[rW[32]] = [], WW[rW[28]] = rW[1], WW[rW[48]] = rW[1], WW[r … [truncated]
-               if (WW[-rW[47]] = WW[rW[16]].indexOf(WW[-rW[46]][WW[rW[5]]]), WW[-rW[47]] !== -rW[2])
-                 if (WW[rW[24]] < rW[1]) WW[rW[24]] = WW[-rW[47]];
+           return RR[sR[13]] = sR[2], typeof bR[RR[sR[1]]] === sR[18] ? bR[RR[sR[1]]] = function(...RR) {
+             for (JJ(RR[sR[13]] = sR[2], RR[-sR[41]] = '69y517<;:_8GEPecORxqCK*TXrH@ld)"p&?=IjS,`}s#z!Z3>iNBh40g.tQkU]n[o^wVLb+mDM~2vA{/$%FaYuJ|fW(', RR[sR[14]] = "" + (RR[sR[1]] || ""), RR[sR[15]] = RR[sR[14]].length, RR[sR[26]] = [], RR[sR[29]] = sR[1], RR[-sR[43]] = sR[1], RR[s … [truncated]
+               if (RR[-sR[42]] = RR[-sR[41]].indexOf(RR[sR[14]][RR[sR[3]]]), RR[-sR[42]] !== -sR[2])
+                 if (RR[sR[7]] < sR[1]) RR[sR[7]] = RR[-sR[42]];
```

#### 2675. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19735` → after: `L19636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19636) · [Before (L19735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19735)

```diff
-                   QW(WW[rW[24]] += WW[-rW[47]] * rW[36], WW[rW[28]] |= WW[rW[24]] << WW[rW[48]], WW[rW[48]] += (WW[rW[24]] & rW[37]) > rW[38] ? rW[39] : rW[40]);
+                   JJ(RR[sR[7]] += RR[-sR[42]] * sR[33], RR[sR[29]] |= RR[sR[7]] << RR[-sR[43]], RR[-sR[43]] += (RR[sR[7]] & sR[35]) > sR[36] ? sR[37] : sR[38]);
```

#### 2676. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19737-L19740` → after: `L19638-L19641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19638-L19641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19638-L19641) · [Before (L19737-L19740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19737-L19740)

```diff
-                     QW(WW[rW[32]].push(WW[rW[28]] & rW[11]), WW[rW[28]] >>= rW[3], WW[rW[48]] -= rW[3])
-                   } while (WW[rW[48]] > rW[24]);
-                   WW[rW[24]] = -rW[2]
-                 } return WW[rW[24]] > -rW[2] && WW[rW[32]].push((WW[rW[28]] | WW[rW[24]] << WW[rW[48]]) & rW[11]), zW(WW[rW[32]])
+                     JJ(RR[sR[26]].push(RR[sR[29]] & sR[12]), RR[sR[29]] >>= sR[11], RR[-sR[43]] -= sR[11])
+                   } while (RR[-sR[43]] > sR[7]);
+                   RR[sR[7]] = -sR[2]
+                 } return RR[sR[7]] > -sR[2] && RR[sR[26]].push((RR[sR[29]] | RR[sR[7]] << RR[-sR[43]]) & sR[12]), hR(RR[sR[26]])
```

#### 2677. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19743-L19760` → after: `L19644-L19656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19644-L19656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19644-L19656) · [Before (L19743-L19760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19743-L19760)

```diff
-         if (WW(99) + "0" in FW && function(...WW) {
-             WW[rW[12]] = rW[1]
-           }(), rW[56]) {
-           let iW = rW[57];
-           QW(setInterval((() => {
-             if (!iW && (0, UW.h)()) {
-               function WW(...WW) {
-                 for (QW(WW[rW[12]] = rW[2], WW[rW[2]] = 'XP3QEOcdAGeYVSWalCmnRB<JIhxj_5g`vs!ND)>^u9.*6fkKb$1FHwZM%|],zy:iL~=}2T"qtUo4p;@r7#0[+/({&?8', WW[-rW[52]] = "" + (WW[rW[1]] || ""), WW[rW[15]] = WW[-rW[52]].length, WW[rW[32]] = [], WW[-rW[40]] = rW[1], WW[rW[22]] = rW[1],  … [truncated]
-                   if (WW[rW[54]] = WW[rW[2]].indexOf(WW[-rW[52]][WW[-rW[53]]]), WW[rW[54]] !== -rW[2])
-                     if (WW[rW[55]] < rW[1]) WW[rW[55]] = WW[rW[54]];
-                     else {
-                       QW(WW[rW[55]] += WW[rW[54]] * rW[36], WW[-rW[40]] |= WW[rW[55]] << WW[rW[22]], WW[rW[22]] += (WW[rW[55]] & rW[37]) > rW[38] ? rW[39] : rW[40]);
-                       do {
-                         QW(WW[rW[32]].push(WW[-rW[40]] & rW[11]), WW[-rW[40]] >>= rW[3], WW[rW[22]] -= rW[3])
-                       } while (WW[rW[22]] > rW[24]);
-                       WW[rW[55]] = -rW[2]
- ... (2 more removed lines; see GitHub link above)
+         if ([][sR[13]] = sR[1], RR(99) in RJ && function(...JR) {
+             function GR(...RR) {
+               for (JJ(RR[sR[13]] = sR[2], RR[sR[5]] = '=ATbfcdGYBiqRarSIOtWv3:_w#$2^,+z|ULeoZQPnD/X!)K}?]E4y<jm"ClN0uFh9&H[87~;(6J*p>.xk{`V@s1M%g5', RR[sR[0]] = "" + (RR[sR[1]] || ""), RR[sR[4]] = RR[sR[0]].length, RR[sR[26]] = [], RR[sR[29]] = sR[1], RR[sR[20]] = sR[1], RR[sR[7] … [truncated]
+                 if (RR[-sR[45]] = RR[sR[5]].indexOf(RR[sR[0]][RR[sR[44]]]), RR[-sR[45]] !== -sR[2])
+                   if (RR[sR[7]] < sR[1]) RR[sR[7]] = RR[-sR[45]];
+                   else {
+                     JJ(RR[sR[7]] += RR[-sR[45]] * sR[33], RR[sR[29]] |= RR[sR[7]] << RR[sR[20]], RR[sR[20]] += (RR[sR[7]] & sR[35]) > sR[36] ? sR[37] : sR[38]);
+                     do {
+                       JJ(RR[sR[26]].push(RR[sR[29]] & sR[12]), RR[sR[29]] >>= sR[11], RR[sR[20]] -= sR[11])
+                     } while (RR[sR[20]] > sR[7]);
+                     RR[sR[7]] = -sR[2]
+                   } return RR[sR[7]] > -sR[2] && RR[sR[26]].push((RR[sR[29]] | RR[sR[7]] << RR[sR[20]]) & sR[12]), hR(RR[sR[26]])
+             }
```

#### 2678. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19762-L19766` → after: `L19658-L19659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19658-L19659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19658-L19659) · [Before (L19762-L19766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19762-L19766)

```diff
-               function OW(...iW) {
-                 return iW[rW[12]] = rW[2], typeof JW[iW[rW[1]]] === rW[18] ? JW[iW[rW[1]]] = WW(hW[iW[rW[1]]]) : JW[iW[rW[1]]]
-               }
-               let mW = null;
-               QW(iW = rW[56], (0, kW[OW(102)])(sW.Mi, mW))
+             function yR(...RR) {
+               return RR[sR[13]] = sR[2], typeof bR[RR[sR[1]]] === sR[18] ? bR[RR[sR[1]]] = GR(vR[RR[sR[1]]]) : bR[RR[sR[1]]]
```

#### 2679. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19768-L19828` → after: `L19661-L19915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19661-L19915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19661-L19915) · [Before (L19768-L19828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19768-L19828)

```diff
-           }), 6572), (0, kW[WW(103) + WW(104)])((() => {
-             iW = rW[57]
-           })))
-         }
-       })();
-     var Wi = OW(643);
-     const ii = {
-       default: {
-         hat: "hat_none",
-         head: "head_1_2",
-         eyebrows: "eyebrows_1_2",
-         skin: "skin_0_12",
-         back: "back_none",
-         body: "body_4_3",
-         legs: "legs_0_1",
-         shoes: "shoes_0_1",
- ... (45 more removed lines; see GitHub link above)
+             JR[sR[13]] = sR[1],
+               function(...JR) {
+                 function GR(...RR) {
+                   for (JJ(RR[sR[13]] = sR[2], RR[sR[2]] = '16;#+85?/uABgO&Tm>Q7Z*Fv]}JC%nboYWI!Nh{[4|lq^_wk2saXxGdUrLV.DR`iEy~<HczpjPf@et)K9$,=(M:S30"', RR[sR[14]] = "" + (RR[sR[1]] || ""), RR[sR[15]] = RR[sR[14]].length, RR[sR[26]] = [], RR[sR[8]] = sR[1], RR[sR[27]] = sR[1], RR … [truncated]
+                     if (RR[sR[46]] = RR[sR[2]].indexOf(RR[sR[14]][RR[sR[11]]]), RR[sR[46]] !== -sR[2])
+                       if (RR[-sR[47]] < sR[1]) RR[-sR[47]] = RR[sR[46]];
+                       else {
+                         JJ(RR[-sR[47]] += RR[sR[46]] * sR[33], RR[sR[8]] |= RR[-sR[47]] << RR[sR[27]], RR[sR[27]] += (RR[-sR[47]] & sR[35]) > sR[36] ? sR[37] : sR[38]);
+                         do {
+                           JJ(RR[sR[26]].push(RR[sR[8]] & sR[12]), RR[sR[8]] >>= sR[11], RR[sR[27]] -= sR[11])
+                         } while (RR[sR[27]] > sR[7]);
+                         RR[-sR[47]] = -sR[2]
+                       } return RR[-sR[47]] > -sR[2] && RR[sR[26]].push((RR[sR[8]] | RR[-sR[47]] << RR[sR[27]]) & sR[12]), hR(RR[sR[26]])
+                 }
+ 
+                 function yR(...RR) {
+ ... (239 more added lines; see GitHub link above)
```

#### 2680. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19888` → after: `L19975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19975) · [Before (L19888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19888)

```diff
-         if (super(WW), WW.lifeformType !== mi) throw new Error(`NPC Meshes are not supported for lifeform type "${WW.lifeformType}"`)
+         if (super(RR), RR.lifeformType !== uJ) throw new Error(`NPC Meshes are not supported for lifeform type "${RR.lifeformType}"`)
```

#### 2681. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19891` → after: `L19978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19978) · [Before (L19891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19891)

```diff
-         const mW = (0, UW.h)().TZ.nD.getEntityId(WW),
+         const yR = (0, nR.i)().lK.RP.getEntityId(RR),
```

#### 2682. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19912` → after: `L19999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19999) · [Before (L19912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19912)

```diff
-               PW.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", WW)
+               ZR.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", RR)
```

#### 2683. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19920` → after: `L20007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20007) · [Before (L19920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19920)

```diff
-               PW.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", WW)
+               ZR.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", RR)
```

#### 2684. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19928` → after: `L20015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20015) · [Before (L19928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19928)

```diff
-               PW.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", WW)
+               ZR.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", RR)
```

#### 2685. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19937` → after: `L20024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20024) · [Before (L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19937)

```diff
-             super.onChangeClient(WW, iW), "ownerDbId" === WW && this.setCollarVisible(!(0, Wi.K)(iW))
+             super.onChangeClient(RR, JR), "ownerDbId" === RR && this.setCollarVisible(!(0, GJ.I)(JR))
```

#### 2686. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19940` → after: `L20027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20027) · [Before (L19940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19940)

```diff
-             PW.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", WW)
+             ZR.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", RR)
```

#### 2687. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19948` → after: `L20035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20035) · [Before (L19948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19948)

```diff
-       Li = Object.fromEntries(Object.entries(mW.d).map((WW => {
+       fJ = Object.fromEntries(Object.entries(yR.b).map((RR => {
```

#### 2688. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19951-L19952` → after: `L20038-L20039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20038-L20039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20038-L20039) · [Before (L19951-L19952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19951-L19952)

```diff
-         const NW = (0, EW.c)(OW),
-           PW = null !== (iW = Pi[OW]) && void 0 !== iW ? iW : aW,
+         const uR = (0, tR.d)(GR),
+           ZR = null !== (JR = iJ[GR]) && void 0 !== JR ? JR : TR,
```

#### 2689. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19966` → after: `L20053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20053) · [Before (L19966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19966)

```diff
-                 atlas: null === WW.atlasTexture ? XW.d.getArmourAtlas() : XW.d.getTexture(WW.atlasTexture, BW.g.LIFEFORM_ATLAS).url,
+                 atlas: null === RR.atlasTexture ? dR.b.getArmourAtlas() : dR.b.getTexture(RR.atlasTexture, ER.k.LIFEFORM_ATLAS).url,
```

#### 2690. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19975` → after: `L20062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20062) · [Before (L19975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19975)

```diff
-           Qt: Ni[mW.handler],
+           hV: qJ[yR.handler],
```

#### 2691. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19981` → after: `L20068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20068) · [Before (L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19981)

```diff
-   39280: (WW, iW, OW) => {
+   39259: (RR, JR, GR) => {
```

#### 2692. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19983` → after: `L20070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20070) · [Before (L19983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19983)

```diff
-       b: () => EW
+       d: () => tR
```

#### 2693. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19985` → after: `L20072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20072) · [Before (L19985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19985)

```diff
-     var mW = OW(38354);
+     var yR = GR(38309);
```

#### 2694. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19988` → after: `L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20075) · [Before (L19988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19988)

```diff
-       return null !== iW && void 0 !== iW ? iW : mW.b[WW]
+       return null !== JR && void 0 !== JR ? JR : yR.e[RR]
```

#### 2695. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19991` → after: `L20078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20078) · [Before (L19991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19991)

```diff
-   39285: (WW, iW, OW) => {
+   39261: (RR, JR, GR) => {
```

#### 2696. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19993` → after: `L20080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20080) · [Before (L19993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19993)

```diff
-       d: () => mW,
+       e: () => yR,
```

#### 2697. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20002` → after: `L20089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20089) · [Before (L20002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20002)

```diff
-   38480: (WW, iW, OW) => {
+   38444: (RR, JR, GR) => {
```

#### 2698. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20004-L20005` → after: `L20091-L20092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20091-L20092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20091-L20092) · [Before (L20004-L20005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20004-L20005)

```diff
-       e: () => xW,
-       g: () => ZW
+       d: () => wR,
+       e: () => KR
```

#### 2699. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20007-L20012` → after: `L20094-L20099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20094-L20099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20094-L20099) · [Before (L20007-L20012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20007-L20012)

```diff
-     var mW = OW(38419),
-       EW = OW(38526),
-       NW = OW(38502),
-       PW = OW(38485),
-       LW = OW(38500),
-       cW = OW(38333);
+     var yR = GR(38382),
+       tR = GR(38489),
+       uR = GR(38466),
+       ZR = GR(38453),
+       qR = GR(38460),
+       iR = GR(38287);
```

#### 2700. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20017` → after: `L20104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20104) · [Before (L20017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20017)

```diff
-       return wW.get((0, cW.h)(WW, iW))
+       return fR.get((0, iR.i)(RR, JR))
```

#### 2701. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20021` → after: `L20108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20108) · [Before (L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20021)

```diff
-       const xW = (0, cW.h)(iW, OW);
+       const wR = (0, iR.i)(JR, GR);
```

#### 2702. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20024-L20026` → after: `L20111-L20113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20111-L20113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20111-L20113) · [Before (L20024-L20026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20024-L20026)

```diff
-         const tW = await (0, cW.j)(iW, WW.TZ.rb),
-           lW = (0, cW.e)(null !== OW && void 0 !== OW ? OW : iW, WW.TZ.rb, (iW => {
-             (0, mW.q)(iW, LW.c), (0, NW.e)(iW, WW.TZ), (0, PW.c)(iW), (0, mW.O)(iW)
+         const VR = await (0, iR.k)(JR, RR.lK.tL),
+           rR = (0, iR.f)(null !== GR && void 0 !== GR ? GR : JR, RR.lK.tL, (JR => {
+             (0, yR.y)(JR, qR.b), (0, uR.c)(JR, RR.lK), (0, ZR.b)(JR), (0, yR.Q)(JR)
```

#### 2703. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20028` → after: `L20115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20115) · [Before (L20028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20028)

```diff
-         (0, cW.l)(tW, lW, {
+         (0, iR.m)(VR, rR, {
```

#### 2704. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20032` → after: `L20119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20119) · [Before (L20032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20032)

```diff
-             (0, EW.f)(WW) || WW.bD().pD(WW)
+             (0, tR.d)(RR) || RR.jH().vI(RR)
```

#### 2705. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20040` → after: `L20127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20127) · [Before (L20040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20040)

```diff
-   38333: (WW, iW, OW) => {
+   38287: (RR, JR, GR) => {
```

#### 2706. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20043-L20046` → after: `L20130-L20133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20130-L20133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20130-L20133) · [Before (L20043-L20046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20043-L20046)

```diff
-       e: () => MW,
-       h: () => jW,
-       j: () => UW,
-       l: () => KW,
+       f: () => AR,
+       i: () => LR,
+       k: () => nR,
+       m: () => CR,
```

#### 2707. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20048` → after: `L20135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20135) · [Before (L20048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20048)

```diff
-       t: () => yW
+       r: () => BR
```

#### 2708. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20050-L20057` → after: `L20137-L20144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20137-L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20137-L20144) · [Before (L20050-L20057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20050-L20057)

```diff
-     var mW = OW(38336),
-       EW = OW(38358),
-       NW = OW(38369),
-       PW = OW(38364),
-       LW = OW(38431),
-       cW = OW(38419),
-       wW = OW(38464),
-       tW = OW(192);
+     var yR = GR(38296),
+       tR = GR(38317),
+       uR = GR(38329),
+       ZR = GR(38325),
+       qR = GR(38397),
+       iR = GR(38382),
+       fR = GR(38424),
+       VR = GR(216);
```

#### 2709. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20059-L20062` → after: `L20146-L20149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20146-L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20146-L20149) · [Before (L20059-L20062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20059-L20062)

```diff
-     var xW = OW(38235),
-       lW = OW(38376),
-       AW = OW(38411),
-       bW = OW(38454);
+     var wR = GR(38195),
+       rR = GR(38340),
+       eR = GR(38371),
+       aR = GR(38417);
```

#### 2710. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20065` → after: `L20152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20152) · [Before (L20065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20065)

```diff
-       return iW ? `${WW}|${iW}` : WW
+       return JR ? `${RR}|${JR}` : RR
```

#### 2711. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20069-L20070` → after: `L20156-L20157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20156-L20157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20156-L20157) · [Before (L20069-L20070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20069-L20070)

```diff
-       const OW = (0, mW.h)("Player", `${WW}.glb`).replace("model/gltf-binary;", "");
-       return (0, bW.f)("", iW, {
+       const GR = (0, yR.k)("Player", `${RR}.glb`).replace("model/gltf-binary;", "");
+       return (0, aR.g)("", JR, {
```

#### 2712. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20076` → after: `L20163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20163) · [Before (L20076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20076)

```diff
-       WW.position.Z5(0), WW.rotation = xW.fA.Zero(), WW.YZ.Z5(1), WW.dD();
+       RR.position.NRR(0), RR.rotation = wR.Fe.Zero(), RR.MK.NRR(1), RR.yI();
```

#### 2713. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20083` → after: `L20170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20170) · [Before (L20083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20083)

```diff
-         WW.position.Z5(0), WW.rotationQuaternion ? WW.rotationQuaternion.set(0, 0, 0, 1) : WW.rotation.Z5(0), WW.YZ.Z5(1), WW.dD();
+         RR.position.NRR(0), RR.rotationQuaternion ? RR.rotationQuaternion.set(0, 0, 0, 1) : RR.rotation.NRR(0), RR.MK.NRR(1), RR.yI();
```

#### 2714. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20092-L20093` → after: `L20179-L20180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20179-L20180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20179-L20180) · [Before (L20092-L20093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20092-L20093)

```diff
-         name: `${WW}Attachment`,
-         rb: iW,
+         name: `${RR}Attachment`,
+         tL: JR,
```

#### 2715. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20096` → after: `L20183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20183) · [Before (L20096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20096)

```diff
-           transparencyMode: PW.e.MATERIAL_ALPHATEST,
+           transparencyMode: ZR.d.MATERIAL_ALPHATEST,
```

#### 2716. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20099` → after: `L20186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20186) · [Before (L20099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20099)

```diff
-             url: (0, mW.h)("Player", `${WW}.png`),
+             url: (0, yR.k)("Player", `${RR}.png`),
```

#### 2717. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20102` → after: `L20189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20189) · [Before (L20102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20102)

```diff
-             samplingMode: LW.k.nearestNearestMipLinear,
+             samplingMode: qR.f.nearestNearestMipLinear,
```

#### 2718. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20111-L20112` → after: `L20198-L20199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20198-L20199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20198-L20199) · [Before (L20111-L20112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20111-L20112)

```diff
-           (0, cW.q)(iW, lW.b);
-           const mW = (EW = WW, (0, tW.c)(ZW, EW));
+           (0, iR.y)(JR, rR.c);
+           const yR = (tR = RR, (0, VR.b)(KR, tR));
```

#### 2719. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20114` → after: `L20201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20201) · [Before (L20114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20114)

```diff
-           mW && (0, cW.q)(iW, wW.d, (0, wW.e)(mW)), null === OW || void 0 === OW || OW(iW)
+           yR && (0, iR.y)(JR, fR.e, (0, fR.g)(yR)), null === GR || void 0 === GR || GR(JR)
```

#### 2720. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20126` → after: `L20213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20213) · [Before (L20126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20126)

```diff
-         if (LW.getVerticesData("uv")) LW.material = iW, (0, EW.r)(LW) || (0, EW.z)(LW, 1 / 512), SW(LW), LW.sideOrientation = null !== OW && void 0 !== OW && OW.backFaceCulling ? PW.e.ClockWiseSideOrientation : PW.e.CounterClockWiseSideOrientation, null === OW || void 0 === OW || … [truncated]
+         if (qR.getVerticesData("uv")) qR.material = JR, (0, tR.l)(qR) || (0, tR.q)(qR, 1 / 512), XR(qR), qR.sideOrientation = null !== GR && void 0 !== GR && GR.backFaceCulling ? ZR.d.ClockWiseSideOrientation : ZR.d.CounterClockWiseSideOrientation, null === GR || void 0 === GR || … [truncated]
```

#### 2721. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20132` → after: `L20219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20219) · [Before (L20132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20132)

```diff
-       WW.lV("aHueColour", 4), WW.bV.aHueColour = new NW.c(0, 0, 0, 0)
+       RR.Am("aHueColour", 4), RR.Im.aHueColour = new uR.e(0, 0, 0, 0)
```

#### 2722. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20142-L20143` → after: `L20229-L20230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20229-L20230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20229-L20230) · [Before (L20142-L20143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20142-L20143)

```diff
-       const OW = iW ? new NW.c(iW[0] / 255, iW[1] / 255, iW[2] / 255, 1) : new NW.c(0, 0, 0, 0);
-       for (const mW of [WW, ...WW.getChildMeshes()]) mW.bV && (mW.bV.aHueColour = OW)
+       const GR = JR ? new uR.e(JR[0] / 255, JR[1] / 255, JR[2] / 255, 1) : new uR.e(0, 0, 0, 0);
+       for (const yR of [RR, ...RR.getChildMeshes()]) yR.Im && (yR.Im.aHueColour = GR)
```

#### 2723. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20146` → after: `L20233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20233) · [Before (L20146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20146)

```diff
-   38336: (WW, iW, OW) => {
+   38296: (RR, JR, GR) => {
```

#### 2724. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20153-L20155` → after: `L20237-L20242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20237-L20242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20237-L20242) · [Before (L20153-L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20153-L20155)

```diff
-       l: () => bW,
-       p: () => wW,
-       t: () => ZW
+       i: () => iR,
+       j: () => eR,
+       k: () => qR,
+       n: () => aR,
+       q: () => fR,
+       r: () => KR
```

#### 2725. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20157-L20160` → after: `L20244-L20247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20244-L20247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20244-L20247) · [Before (L20157-L20160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20157-L20160)

```diff
-     var mW = OW(27),
-       EW = OW(38354),
-       NW = OW(37575),
-       PW = OW(2365);
+     var yR = GR(32),
+       tR = GR(38309),
+       uR = GR(37494),
+       ZR = GR(2435);
```

#### 2726. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20163` → after: `L20250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20250) · [Before (L20163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20163)

```diff
-       return OW(38345)(`./${WW}/${iW}`)
+       return GR(38301)(`./${RR}/${JR}`)
```

#### 2727. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20172` → after: `L20259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20259) · [Before (L20172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20172)

```diff
-       const NW = mW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|multilineTextBox`, (OW => {
+       const uR = yR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|multilineTextBox`, (GR => {
```

#### 2728. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20175` → after: `L20262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20262) · [Before (L20175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20175)

```diff
-       return tW(WW, iW, null === (OW = WW.sV[WW.Dv]) || void 0 === OW || null === (EW = OW[iW]) || void 0 === EW ? void 0 : EW.multilineTextBox), NW
+       return VR(RR, JR, null === (GR = RR.Qm[RR.WH]) || void 0 === GR || null === (tR = GR[JR]) || void 0 === tR ? void 0 : tR.multilineTextBox), uR
```

#### 2729. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20179-L20180` → after: `L20266-L20267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20266-L20267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20266-L20267) · [Before (L20179-L20180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20179-L20180)

```diff
-       const mW = WW.EY.liW(iW, "entityMultilineTextBox");
-       null === OW || void 0 === OW ? mW && WW.EY.mV(iW, "entityMultilineTextBox") : mW || WW.EY.zD(iW, "entityMultilineTextBox")
+       const yR = RR.zC.RGR(JR, "entityMultilineTextBox");
+       null === GR || void 0 === GR ? yR && RR.zC.Zm(JR, "entityMultilineTextBox") : yR || RR.zC.Jm(JR, "entityMultilineTextBox")
```

#### 2730. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20185` → after: `L20272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20272) · [Before (L20185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20185)

```diff
-         NW = WW.EY.getState(iW, "meshRotation");
+         uR = RR.zC.getState(JR, "meshRotation");
```

#### 2731. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20190-L20193` → after: `L20277-L20280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20277-L20280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20277-L20280) · [Before (L20190-L20193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20190-L20193)

```diff
-       const iW = (0, PW.h)();
-       if (iW.sV[iW.Dv][WW]) return;
-       const OW = (0, NW.b)(WW);
-       iW.sV[iW.Dv][WW] = {}, iW.sV[iW.Dv][OW] = {}, iW.sV[iW.Av][WW] = {}, iW.sV[iW.Av][OW] = {}
+       const JR = (0, ZR.i)();
+       if (JR.Qm[JR.WH][RR]) return;
+       const GR = (0, uR.d)(RR);
+       JR.Qm[JR.WH][RR] = {}, JR.Qm[JR.WH][GR] = {}, JR.Qm[JR.UH][RR] = {}, JR.Qm[JR.UH][GR] = {}
```

#### 2732. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20197-L20199` → after: `L20284-L20286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20284-L20286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20284-L20286) · [Before (L20197-L20199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20197-L20199)

```diff
-       const mW = (0, PW.h)(),
-         EW = (0, NW.b)(WW);
-       mW.sV[mW.Dv][WW][iW] = OW, mW.sV[mW.Dv][EW][iW] = OW, mW.sV[mW.Av][WW][iW] = OW, mW.sV[mW.Av][EW][iW] = OW, AW(WW, iW, OW)
+       const yR = (0, ZR.i)(),
+         tR = (0, uR.d)(RR);
+       yR.Qm[yR.WH][RR][JR] = GR, yR.Qm[yR.WH][tR][JR] = GR, yR.Qm[yR.UH][RR][JR] = GR, yR.Qm[yR.UH][tR][JR] = GR, eR(RR, JR, GR)
```

#### 2733. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20203-L20205` → after: `L20290-L20292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20290-L20292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20290-L20292) · [Before (L20203-L20205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20203-L20205)

```diff
-       const PW = void 0 === OW ? EW.b[iW] : OW,
-         LW = (0, NW.b)(WW);
-       mW.l.iZ(`otherEntitySettings|${iW}`, {
+       const ZR = void 0 === GR ? tR.e[JR] : GR,
+         qR = (0, uR.d)(RR);
+       yR.n.JK(`otherEntitySettings|${JR}`, {
```

#### 2734. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20208` → after: `L20295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20295) · [Before (L20208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20208)

```diff
-       }), mW.l.iZ(`otherEntitySettings|${WW}|${iW}`, PW), mW.l.iZ(`otherEntitySettingsClientifiedEId|${LW}|${iW}`, PW)
+       }), yR.n.JK(`otherEntitySettings|${RR}|${JR}`, ZR), yR.n.JK(`otherEntitySettingsClientifiedEId|${qR}|${JR}`, ZR)
```

#### 2735. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20212-L20213` → after: `L20299-L20300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20299-L20300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20299-L20300) · [Before (L20212-L20213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20212-L20213)

```diff
-       const mW = WW.EY.XiW(iW);
-       mW && (null !== mW.uD ? WW.TZ.nD.WK(mW.uD, OW) : WW.TZ.ocW(mW.mesh, OW))
+       const yR = RR.zC.vGR(JR);
+       yR && (null !== yR.JI ? RR.lK.RP.JA(yR.JI, GR) : RR.lK.UfR(yR.mesh, GR))
```

#### 2736. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20216` → after: `L20303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20303) · [Before (L20216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20216)

```diff
-   39262: (WW, iW, OW) => {
+   39243: (RR, JR, GR) => {
```

#### 2737. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20219` → after: `L20306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20306) · [Before (L20219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20219)

```diff
-       const EW = null === (OW = WW.EY.UOW(iW)) || void 0 === OW ? void 0 : OW.nS;
+       const tR = null === (GR = RR.zC.tyR(JR)) || void 0 === GR ? void 0 : GR.gC;
```

#### 2738. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20223` → after: `L20310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20310) · [Before (L20223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20223)

```diff
-       e: () => mW
+       d: () => yR
```

#### 2739. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20226` → after: `L20313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20313) · [Before (L20226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20226)

```diff
-   39120: (WW, iW, OW) => {
+   39094: (RR, JR, GR) => {
```

#### 2740. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20230` → after: `L20316-L20317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20316-L20317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20316-L20317) · [Before (L20230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20230)

```diff
-       h: () => wW
+       f: () => VR,
+       i: () => fR
```

#### 2741. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20232-L20236` → after: `L20319-L20323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20319-L20323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20319-L20323) · [Before (L20232-L20236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20232-L20236)

```diff
-     var mW = OW(38419),
-       EW = OW(38663),
-       NW = OW(39126),
-       PW = OW(38502),
-       LW = OW(2365);
+     var yR = GR(38382),
+       tR = GR(38648),
+       uR = GR(39101),
+       ZR = GR(38466),
+       qR = GR(2435);
```

#### 2742. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20239` → after: `L20326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20326) · [Before (L20239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20239)

```diff
-       (0, NW.c)(WW, (WW => {
+       (0, uR.d)(RR, (RR => {
```

#### 2743. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20241` → after: `L20328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20328) · [Before (L20241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20241)

```diff
-         iW && !(0, mW.v)(iW, PW.h.name) && (0, PW.e)(iW, (0, LW.h)().TZ)
+         JR && !(0, yR.E)(JR, ZR.e.name) && (0, ZR.c)(JR, (0, qR.i)().lK)
```

#### 2744. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20250` → after: `L20337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20337) · [Before (L20250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20250)

```diff
-       WW.lV("aLightLevels", 4), WW.bV.aLightLevels = (0, EW.m)()
+       RR.Am("aLightLevels", 4), RR.Im.aLightLevels = (0, tR.o)()
```

#### 2745. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20253` → after: `L20340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20340) · [Before (L20253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20253)

```diff
-   38219: (WW, iW, OW) => {
+   38178: (RR, JR, GR) => {
```

#### 2746. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20255-L20257` → after: `L20342-L20344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20342-L20344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20342-L20344) · [Before (L20255-L20257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20255-L20257)

```diff
-       b: () => sW,
-       f: () => UW,
-       h: () => kW
+       d: () => WR,
+       g: () => nR,
+       i: () => UR
```

#### 2747. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20259-L20265` → after: `L20346-L20352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20346-L20352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20346-L20352) · [Before (L20259-L20265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20259-L20265)

```diff
-     var mW = OW(38663),
-       EW = OW(38532),
-       NW = OW(38364),
-       PW = OW(2365),
-       LW = OW(2350),
-       cW = OW(37575),
-       wW = OW(38224),
+     var yR = GR(38648),
+       tR = GR(38496),
+       uR = GR(38325),
+       ZR = GR(2435),
+       qR = GR(2421),
+       iR = GR(37494),
+       fR = GR(38181),
```

#### 2748. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20267-L20271` → after: `L20354-L20358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20354-L20358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20354-L20358) · [Before (L20267-L20271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20267-L20271)

```diff
-       ZW = OW(38789),
-       xW = OW(38235),
-       lW = OW(2937),
-       AW = OW(38797),
-       bW = OW(38314);
+       KR = GR(38796),
+       wR = GR(38195),
+       rR = GR(3017),
+       eR = GR(38800),
+       aR = GR(38267);
```

#### 2749. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20283-L20286` → after: `L20370-L20373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20370-L20373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20370-L20373) · [Before (L20283-L20286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20283-L20286)

```diff
-           Pi: OW,
-           Li: mW,
-           ci: EW
-         } = iW, NW = (0, cW.b)(OW), PW = (0, bW.e)(WW);
+           iJ: GR,
+           fJ: yR,
+           VJ: tR
+         } = JR, uR = (0, iR.d)(GR), ZR = (0, aR.c)(RR);
```

#### 2750. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20288-L20289` → after: `L20375-L20376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20375-L20376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20375-L20376) · [Before (L20288-L20289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20288-L20289)

```diff
-         const LW = WW.EY.XiW(NW);
-         if (LW && null === LW.uD) return;
+         const qR = RR.zC.vGR(uR);
+         if (qR && null === qR.JI) return;
```

#### 2751. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20295` → after: `L20382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20382) · [Before (L20295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20295)

```diff
-       for (const OW of (0, bW.e)(WW).getAttachments(iW)) MW(WW, OW)
+       for (const GR of (0, aR.c)(RR).getAttachments(JR)) AR(RR, GR)
```

#### 2752. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20299` → after: `L20386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20386) · [Before (L20299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20299)

```diff
-       (0, bW.e)((0, PW.h)()).clearAttachments((0, cW.b)(WW))
+       (0, aR.c)((0, ZR.i)()).clearAttachments((0, iR.d)(RR))
```

#### 2753. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20305-L20308` → after: `L20392-L20395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20392-L20395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20392-L20395) · [Before (L20305-L20308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20305-L20308)

```diff
-           Pi: OW,
-           Li: mW,
-           ci: EW
-         } = iW, NW = (0, cW.b)(OW), PW = WW.EY.XiW(NW);
+           iJ: GR,
+           fJ: yR,
+           VJ: tR
+         } = JR, uR = (0, iR.d)(GR), ZR = RR.zC.vGR(uR);
```

#### 2754. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20310-L20312` → after: `L20397-L20399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20397-L20399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20397-L20399) · [Before (L20310-L20312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20310-L20312)

```diff
-         const LW = PW.uD;
-         if (null === LW) return console.error(`attachMeshToEntity: parent ${OW} has no thin instance - not supported`), null;
-         const wW = WW.TZ.nD,
+         const qR = ZR.JI;
+         if (null === qR) return console.error(`attachMeshToEntity: parent ${GR} has no thin instance - not supported`), null;
+         const fR = RR.lK.RP,
```

#### 2755. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20314` → after: `L20401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20401) · [Before (L20314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20314)

```diff
-         return null === tW ? (console.error(`Couldn't find node ${mW} on ${OW} to attach mesh ${EW}`), null) : {
+         return null === VR ? (console.error(`Couldn't find node ${yR} on ${GR} to attach mesh ${tR}`), null) : {
```

#### 2756. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20330` → after: `L20417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20417) · [Before (L20330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20330)

```diff
-       }(WW, OW), iW.ci && function(WW, iW, OW) {
+       }(RR, GR), JR.VJ && function(RR, JR, GR) {
```

#### 2757. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20332-L20336` → after: `L20419-L20423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20419-L20423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20419-L20423) · [Before (L20332-L20336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20332-L20336)

```diff
-           Pi: mW,
-           ci: LW,
-           Li: cW,
-           wi: wW,
-           ti: tW
+           iJ: yR,
+           VJ: qR,
+           fJ: iR,
+           KJ: fR,
+           wJ: VR
```

#### 2758. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20342` → after: `L20429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20429) · [Before (L20342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20342)

```diff
-         } = iW, MW = (0, lW.t)(LW);
+         } = JR, AR = (0, rR.n)(qR);
```

#### 2759. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20347` → after: `L20434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20434) · [Before (L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20347)

```diff
-         } = MW, oW = (0, bW.e)(WW).bumpAttachmentGeneration(sW, cW), dW = {
+         } = AR, xR = (0, aR.c)(RR).bumpAttachmentGeneration(WR, iR), NR = {
```

#### 2760. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20350-L20351` → after: `L20437-L20438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20437-L20438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20437-L20438) · [Before (L20350-L20351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20350-L20351)

```diff
-           wi: wW,
-           ti: tW,
+           KJ: fR,
+           wJ: VR,
```

#### 2761. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20353` → after: `L20440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20440) · [Before (L20353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20353)

```diff
-           Li: cW,
+           fJ: iR,
```

#### 2762. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20362` → after: `L20449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20449) · [Before (L20362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20362)

```diff
-           } = OW, cW = PW.l.itemsClient[EW];
+           } = GR, iR = ZR.k.itemsClient[tR];
```

#### 2763. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20365` → after: `L20452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20452) · [Before (L20365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20365)

```diff
-             [tW, ZW, xW] = Array.isArray(NW) ? NW : [NW, NW, NW],
+             [VR, KR, wR] = Array.isArray(uR) ? uR : [uR, uR, uR],
```

#### 2764. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20372` → after: `L20459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20459) · [Before (L20372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20372)

```diff
-             jW = AW.f.includes(LW) ? LW : void 0;
+             LR = eR.f.includes(qR) ? qR : void 0;
```

#### 2765. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20374` → after: `L20461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20461) · [Before (L20374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20374)

```diff
-             BL: !1,
+             Qq: !1,
```

#### 2766. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20381` → after: `L20468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20468) · [Before (L20381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20381)

```diff
-         const vW = (0, PW.d)().client.meshCreator.getEntityMesh(nW, uW, (iW => {
+         const HR = (0, ZR.e)().client.meshCreator.getEntityMesh(vR, OR, (JR => {
```

#### 2767. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20383` → after: `L20470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20470) · [Before (L20383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20383)

```diff
-             if (EW = OW, !("KD" in EW) || !0 !== EW.KD) return void console.error(`Box attachment ${OW.name} is not an instance`);
+             if (tR = GR, !("sH" in tR) || !0 !== tR.sH) return void console.error(`Box attachment ${GR.name} is not an instance`);
```

#### 2768. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20386` → after: `L20473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20473) · [Before (L20386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20386)

```diff
-               LW = YW(OW.YZ, PW),
+               qR = MR(GR.MK, ZR),
```

#### 2769. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20388-L20390` → after: `L20475-L20477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20475-L20477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20475-L20477) · [Before (L20388-L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20388-L20390)

```diff
-                 const EW = OW.bV.aShaderPackItem,
-                   PW = (0, ZW.i)(mW),
-                   LW = `nodeAttachment|${OW.name}|${OW.uniqueId}|${PW}`;
+                 const tR = GR.Im.aShaderPackItem,
+                   ZR = (0, KR.j)(yR),
+                   qR = `nodeAttachment|${GR.name}|${GR.uniqueId}|${ZR}`;
```

#### 2770. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20392-L20394` → after: `L20479-L20481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20479-L20481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20479-L20481) · [Before (L20392-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20392-L20394)

```diff
-                   const cW = OW.clone(`thinNodeAttachment_${OW.name}|${PW}`, null);
-                   cW.makeGeometryUnique(), mW && (cW.sideOrientation = NW.e.ClockWiseSideOrientation), iW.newObjectType(LW, cW, {
-                     aZ: 4,
+                   const iR = GR.clone(`thinNodeAttachment_${GR.name}|${ZR}`, null);
+                   iR.makeGeometryUnique(), yR && (iR.sideOrientation = uR.d.ClockWiseSideOrientation), JR.newObjectType(qR, iR, {
+                     hK: 4,
```

#### 2771. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20396-L20397` → after: `L20483-L20484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20483-L20484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20483-L20484) · [Before (L20396-L20397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20396-L20397)

```diff
-                     strides: EW ? HW : hW
-                   }), iW.setPickableForType(LW, !1), WW.TZ.qD(cW)
+                     strides: tR ? bR : gR
+                   }), JR.setPickableForType(qR, !1), RR.lK.xI(iR)
```

#### 2772. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20402` → after: `L20489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20489) · [Before (L20402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20402)

```diff
-               }(WW, iW, OW.WNW, yW(LW, PW));
+               }(RR, JR, GR.IuR, BR(qR, ZR));
```

#### 2773. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20409` → after: `L20496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20496) · [Before (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20409)

```diff
-           uD: DW
+           JI: cR
```

#### 2774. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20412-L20414` → after: `L20499-L20501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20499-L20501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20499-L20501) · [Before (L20412-L20414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20412-L20414)

```diff
-         gW && !gW.Ay() && (! function(WW, iW, OW, mW) {
-           (0, EW.q)(iW, OW[0], OW[1], OW[2]), iW.rotation.set(mW[0], mW[1], mW[2])
-         }(WW.TZ, gW, wW, tW), xW.attachTransformNode(gW, UW, kW))
+         oR && !oR.oB() && (! function(RR, JR, GR, yR) {
+           (0, tR.i)(JR, GR[0], GR[1], GR[2]), JR.rotation.set(yR[0], yR[1], yR[2])
+         }(RR.lK, oR, fR, VR), wR.attachTransformNode(oR, nR, UR))
```

#### 2775. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20419` → after: `L20506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20506) · [Before (L20419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20419)

```diff
-       return !iW.has(OW.parentThinObjectId) || (0, bW.e)(WW).getAttachmentGeneration(OW.clientifiedAttachToEId, OW.Li) !== OW.generation
+       return !JR.has(GR.parentThinObjectId) || (0, aR.c)(RR).getAttachmentGeneration(GR.clientifiedAttachToEId, GR.fJ) !== GR.generation
```

#### 2776. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20427` → after: `L20514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20514) · [Before (L20427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20427)

```diff
-       return new xW.fA(iW ? -WW.x : WW.x, WW.y, WW.z)
+       return new wR.Fe(JR ? -RR.x : RR.x, RR.y, RR.z)
```

#### 2777. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20431` → after: `L20518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20518) · [Before (L20431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20431)

```diff
-       return (0, ZW.h)(WW.x * WW.y * WW.z < 0, iW)
+       return (0, KR.f)(RR.x * RR.y * RR.z < 0, JR)
```

#### 2778. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20439-L20440` → after: `L20526-L20527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20526-L20527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20526-L20527) · [Before (L20439-L20440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20439-L20440)

```diff
-         wi: ZW,
-         ti: xW,
+         KJ: KR,
+         wJ: wR,
```

#### 2779. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20443` → after: `L20530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20530) · [Before (L20443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20443)

```diff
-       JW(iW, OW, ZW, xW), iW.setScale(OW, EW.x, EW.y, EW.z), iW.attachThinObject(OW, cW, wW), iW.set(OW, "aOpacity", (0, tW.holderAttachmentOpacity)(WW, lW)), iW.set(OW, "aLightLevels", null !== (PW = null === (LW = WW.EY.ZOW(lW)) || void 0 === LW ? void 0 : LW._lightLevels) && v … [truncated]
+       pR(JR, GR, KR, wR), JR.setScale(GR, tR.x, tR.y, tR.z), JR.attachThinObject(GR, iR, fR), JR.set(GR, "aOpacity", (0, VR.holderAttachmentOpacity)(RR, rR)), JR.set(GR, "aLightLevels", null !== (ZR = null === (qR = RR.zC.sGR(rR)) || void 0 === qR ? void 0 : qR._lightLevels) && v … [truncated]
```

#### 2780. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20449` → after: `L20536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20536) · [Before (L20449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20449)

```diff
-       const WW = (0, PW.h)();
+       const RR = (0, ZR.i)();
```

#### 2781. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20451-L20457` → after: `L20538-L20544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20538-L20544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20538-L20544) · [Before (L20451-L20457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20451-L20457)

```diff
-           Li: OW
-         }] of(0, bW.e)(WW).iterateAttachments()) MW(WW, {
-         Pi: iW,
-         Li: OW,
-         ci: null,
-         wi: [0, 0, 0],
-         ti: [0, 0, 0]
+           fJ: GR
+         }] of(0, aR.c)(RR).iterateAttachments()) AR(RR, {
+         iJ: JR,
+         fJ: GR,
+         VJ: null,
+         KJ: [0, 0, 0],
+         wJ: [0, 0, 0]
```

#### 2782. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20470` → after: `L20557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20557) · [Before (L20470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20470)

```diff
-   39131: (WW, iW, OW) => {
+   39109: (RR, JR, GR) => {
```

#### 2783. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20475-L20477` → after: `L20562-L20564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20562-L20564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20562-L20564) · [Before (L20475-L20477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20475-L20477)

```diff
-     var mW = OW(39126),
-       EW = OW(38485),
-       NW = OW(38419);
+     var yR = GR(39101),
+       tR = GR(38453),
+       uR = GR(38382);
```

#### 2784. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20481` → after: `L20568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20568) · [Before (L20481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20481)

```diff
-       WW.lV("aOpacity", 1), WW.bV.aOpacity = 1, WW.material && (iW = WW.material, (0, mW.c)(iW, (WW => {
+       RR.Am("aOpacity", 1), RR.Im.aOpacity = 1, RR.material && (JR = RR.material, (0, yR.d)(JR, (RR => {
```

#### 2785. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20483` → after: `L20570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20570) · [Before (L20483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20483)

```diff
-         iW && (0, EW.c)(iW, !0)
+         JR && (0, tR.b)(JR, !0)
```

#### 2786. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20496` → after: `L20583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20583) · [Before (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20496)

```diff
-         bV: OW
+         Im: GR
```

#### 2787. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20501` → after: `L20588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20588) · [Before (L20501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20501)

```diff
-   37575: (WW, iW, OW) => {
+   37494: (RR, JR, GR) => {
```

#### 2788. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20505` → after: `L20591-L20592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20591-L20592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20591-L20592) · [Before (L20505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20505)

```diff
-       g: () => PW
+       h: () => iR,
+       l: () => ZR
```

#### 2789. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20507-L20508` → after: `L20594-L20595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20594-L20595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20594-L20595) · [Before (L20507-L20508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20507-L20508)

```diff
-     var mW = OW(643),
-       EW = OW(2365);
+     var yR = GR(679),
+       tR = GR(2435);
```

#### 2790. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20511` → after: `L20598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20598) · [Before (L20511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20511)

```diff
-       return WW === (0, EW.h)().Av ? (0, EW.h)().Dv : WW
+       return RR === (0, tR.i)().UH ? (0, tR.i)().WH : RR
```

#### 2791. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20515` → after: `L20602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20602) · [Before (L20515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20515)

```diff
-       return !(0, mW.K)(WW) && NW(WW) === (0, EW.h)().Dv
+       return !(0, yR.I)(RR) && uR(RR) === (0, tR.i)().WH
```

#### 2792. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20520` → after: `L20607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20607) · [Before (L20520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20520)

```diff
-       return (0, EW.h)().physics[LW][1]
+       return (0, tR.i)().physics[qR][1]
```

#### 2793. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20523` → after: `L20610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20610) · [Before (L20523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20523)

```diff
-   39642: (WW, iW, OW) => {
+   39619: (RR, JR, GR) => {
```

#### 2794. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20525` → after: `L20612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20612) · [Before (L20525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20525)

```diff
-       b: () => tW,
+       e: () => VR,
```

#### 2795. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20527` → after: `L20614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20614) · [Before (L20527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20527)

```diff
-       h: () => EW,
+       g: () => tR,
```

#### 2796. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20530` → after: `L20617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20617) · [Before (L20530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20530)

```diff
-     var mW = OW(2365);
+     var yR = GR(2435);
```

#### 2797. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20534` → after: `L20621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20621) · [Before (L20534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20534)

```diff
-       const iW = (0, mW.d)().client;
+       const JR = (0, yR.e)().client;
```

#### 2798. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20548` → after: `L20635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20635) · [Before (L20548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20548)

```diff
-       (PW = !1, null !== WW && void 0 !== WW && WW.isChargeable()) ? WW.clearChargingPose(): null === (OW = iW.EY.getState(iW.Dv, "playerCameraAdjustment")) || void 0 === OW || OW.fovMultiplier.removeMultiplier("chargeableZoom")
+       (ZR = !1, null !== RR && void 0 !== RR && RR.isChargeable()) ? RR.clearChargingPose(): null === (GR = JR.zC.getState(JR.WH, "playerCameraAdjustment")) || void 0 === GR || GR.fovMultiplier.removeMultiplier("chargeableZoom")
```

#### 2799. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20561` → after: `L20648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20648) · [Before (L20561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20561)

```diff
-       } = OW, ZW = WW.EY.SOW(iW);
+       } = GR, KR = RR.zC.fyR(JR);
```

#### 2800. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20563-L20564` → after: `L20650-L20651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20650-L20651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20650-L20651) · [Before (L20563-L20564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20563-L20564)

```diff
-       const xW = WW.EY.UOW(iW),
-         lW = WW.EY.kOW(iW);
+       const wR = RR.zC.tyR(JR),
+         rR = RR.zC.uyR(JR);
```

#### 2801. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20568` → after: `L20655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20655) · [Before (L20568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20568)

```diff
-         xW.replayUseFirstPersonMesh = mW, WW !== mW && (null === lW || void 0 === lW || lW.qwW())
+         wR.replayUseFirstPersonMesh = yR, RR !== yR && (null === rR || void 0 === rR || rR.DVR())
```

#### 2802. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20570` → after: `L20657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20657) · [Before (L20570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20570)

```diff
-       const bW = WW.EY.ZOW(iW);
+       const aR = RR.zC.sGR(JR);
```

#### 2803. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20580` → after: `L20667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20667) · [Before (L20580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20580)

```diff
-       const OW = WW.EY.SOW(iW);
+       const GR = RR.zC.fyR(JR);
```

#### 2804. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20582-L20585` → after: `L20669-L20672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20669-L20672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20669-L20672) · [Before (L20582-L20585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20582-L20585)

```diff
-       const mW = WW.EY.UOW(iW),
-         EW = WW.EY.kOW(iW);
-       void 0 !== (null === mW || void 0 === mW ? void 0 : mW.replayUseFirstPersonMesh) && (mW.replayUseFirstPersonMesh = void 0, null === EW || void 0 === EW || EW.qwW());
-       const NW = WW.EY.ZOW(iW);
+       const yR = RR.zC.tyR(JR),
+         tR = RR.zC.uyR(JR);
+       void 0 !== (null === yR || void 0 === yR ? void 0 : yR.replayUseFirstPersonMesh) && (yR.replayUseFirstPersonMesh = void 0, null === tR || void 0 === tR || tR.DVR());
+       const uR = RR.zC.sGR(JR);
```

#### 2805. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20589` → after: `L20676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20676) · [Before (L20589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20589)

```diff
-   38460: (WW, iW, OW) => {
+   38421: (RR, JR, GR) => {
```

#### 2806. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20592` → after: `L20679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20679) · [Before (L20592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20592)

```diff
-       f: () => mW
+       d: () => yR
```

#### 2807. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20609` → after: `L20696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20696) · [Before (L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20609)

```diff
-   38454: (WW, iW, OW) => {
+   38417: (RR, JR, GR) => {
```

#### 2808. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20611-L20612` → after: `L20698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20698) · [Before (L20611-L20612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20611-L20612)

```diff
-       e: () => cW,
-       f: () => wW,
+       c: () => iR,
```

#### 2809. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20614` → after: `L20700-L20701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20700-L20701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20700-L20701) · [Before (L20614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20614)

```diff
-       k: () => PW
+       h: () => VR,
+       l: () => ZR
```

#### 2810. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20616` → after: `L20703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20703) · [Before (L20616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20616)

```diff
-     var mW = OW(38460);
+     var yR = GR(38421);
```

#### 2811. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20620` → after: `L20707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20707) · [Before (L20620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20620)

```diff
-       return EW ??= Promise.all([OW.e(233), OW.e(237)]).then((() => OW(53676))).then((WW => WW), (WW => {
+       return tR ??= Promise.all([GR.e(233), GR.e(237)]).then((() => GR(53511))).then((RR => RR), (RR => {
```

#### 2812. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20635` → after: `L20722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20722) · [Before (L20635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20635)

```diff
-         mW.f.failed++;
+         yR.d.failed++;
```

#### 2813. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20645` → after: `L20732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20732) · [Before (L20645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20645)

```diff
-         return WW.loadGlbTree(OW, iW, null !== (EW = mW.rootUrl) && void 0 !== EW ? EW : "", !1, mW.materials)
+         return RR.loadGlbTree(GR, JR, null !== (tR = yR.rootUrl) && void 0 !== tR ? tR : "", !1, yR.materials)
```

#### 2814. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20652` → after: `L20739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20739) · [Before (L20652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20652)

```diff
-         return WW.loadGlbTree(OW, iW, null !== (EW = mW.rootUrl) && void 0 !== EW ? EW : "", !0, mW.materials)
+         return RR.loadGlbTree(GR, JR, null !== (tR = yR.rootUrl) && void 0 !== tR ? tR : "", !0, yR.materials)
```

#### 2815. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20661` → after: `L20748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20748) · [Before (L20661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20661)

```diff
-         return WW.loadGlbAsset(OW, iW, null !== (EW = mW.rootUrl) && void 0 !== EW ? EW : "", NW)
+         return RR.loadGlbAsset(GR, JR, null !== (tR = yR.rootUrl) && void 0 !== tR ? tR : "", uR)
```

#### 2816. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20665` → after: `L20752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20752) · [Before (L20665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20665)

```diff
-   39072: (WW, iW, OW) => {
+   39047: (RR, JR, GR) => {
```

#### 2817. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20667-L20668` → after: `L20754-L20755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20754-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20754-L20755) · [Before (L20667-L20668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20667-L20668)

```diff
-       d: () => wW,
-       g: () => tW
+       b: () => fR,
+       f: () => VR
```

#### 2818. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20670-L20671` → after: `L20757-L20758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20757-L20758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20757-L20758) · [Before (L20670-L20671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20670-L20671)

```diff
-     var mW = OW(38419),
-       EW = OW(38369);
+     var yR = GR(38382),
+       tR = GR(38329);
```

#### 2819. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20682` → after: `L20769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20769) · [Before (L20682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20682)

```diff
-     var LW = OW(38437);
+     var qR = GR(38406);
```

#### 2820. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20699` → after: `L20786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20786) · [Before (L20699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20699)

```diff
-         emissiveTexture: WW.emissionColorTexture ? (0, LW.H)(WW.emissionColorTexture) : null,
+         emissiveTexture: RR.emissionColorTexture ? (0, qR.D)(RR.emissionColorTexture) : null,
```

#### 2821. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20703` → after: `L20790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20790) · [Before (L20703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20703)

```diff
-         ...null !== iW && iW !== mW.n.opaque ? {
+         ...null !== JR && JR !== yR.v.opaque ? {
```

#### 2822. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20718-L20719` → after: `L20805-L20806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20805-L20806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20805-L20806) · [Before (L20718-L20719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20718-L20719)

```diff
-           return mW && (WW.baseColor = EW.Color3.FromArray(mW), WW.geometryOpacity = mW[3]), iW.unlit ? WW.isUnlit = !0 : WW.emissionColor = iW.emissiveFactor ? EW.Color3.FromArray(iW.emissiveFactor) : new EW.Color3(0, 0, 0), iW.doubleSided && (WW.backFaceCulling = !1, WW.twoSide … [truncated]
-         }(wW, iW) : mW.n.opaque;
+           return yR && (RR.baseColor = tR.Color3.FromArray(yR), RR.geometryOpacity = yR[3]), JR.unlit ? RR.isUnlit = !0 : RR.emissionColor = JR.emissiveFactor ? tR.Color3.FromArray(JR.emissiveFactor) : new tR.Color3(0, 0, 0), JR.doubleSided && (RR.backFaceCulling = !1, RR.twoSide … [truncated]
+         }(fR, JR) : yR.v.opaque;
```

#### 2823. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20722` → after: `L20809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20809) · [Before (L20722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20722)

```diff
-         ...cW(wW, tW, OW, LW, null !== iW && void 0 !== iW && iW.pbr && iW.baseColorTexture ? WW.textureDesc(iW.baseColorTexture, tW !== mW.n.opaque) : null)
+         ...iR(fR, VR, GR, qR, null !== JR && void 0 !== JR && JR.pbr && JR.baseColorTexture ? RR.textureDesc(JR.baseColorTexture, VR !== yR.v.opaque) : null)
```

#### 2824. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20740` → after: `L20827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20827) · [Before (L20740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20740)

```diff
-   39366: (WW, iW, OW) => {
+   39341: (RR, JR, GR) => {
```

#### 2825. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20742` → after: `L20829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20829) · [Before (L20742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20742)

```diff
-       b: () => NW
+       e: () => uR
```

#### 2826. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20744` → after: `L20831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20831) · [Before (L20744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20744)

```diff
-     var mW = OW(643);
+     var yR = GR(679);
```

#### 2827. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20747` → after: `L20834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20834) · [Before (L20747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20747)

```diff
-       const mW = iW => WW.Hx.bloxd.getMetaInfo(iW).rootName,
+       const yR = JR => RR.xw.bloxd.getMetaInfo(JR).rootName,
```

#### 2828. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20749` → after: `L20836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20836) · [Before (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20749)

```diff
-       return EW && mW(EW.name) === mW(OW) ? EW : null
+       return tR && yR(tR.name) === yR(GR) ? tR : null
```

#### 2829. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20763` → after: `L20850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20850) · [Before (L20763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20763)

```diff
-         return !(!PW || (null !== (NW = PW.amount) && void 0 !== NW ? NW : 1) < iW) && mW.removeItem(WW, iW)
+         return !(!ZR || (null !== (uR = ZR.amount) && void 0 !== uR ? uR : 1) < JR) && yR.removeItem(RR, JR)
```

#### 2830. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20780` → after: `L20867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20867) · [Before (L20780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20780)

```diff
-       return NW => WW.craftItem(iW, NW.playerInventory, OW, mW, EW).lL === EW
+       return uR => RR.craftItem(JR, uR.playerInventory, GR, yR, tR).Uq === tR
```

#### 2831. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20785` → after: `L20872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20872) · [Before (L20785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20785)

```diff
-         return null !== NW && OW <= (null !== (EW = NW.amount) && void 0 !== EW ? EW : 0) && WW.salvageItem(mW.playerInventory, iW, NW.name, OW)
+         return null !== uR && GR <= (null !== (tR = uR.amount) && void 0 !== tR ? tR : 0) && RR.salvageItem(yR.playerInventory, JR, uR.name, GR)
```

#### 2832. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20800` → after: `L20887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20887) · [Before (L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20800)

```diff
-         return !!PW && (NW.playerInventory.setItemSlot(WW, OW, 1, null !== mW && void 0 !== mW ? mW : PW.attributes), !0)
+         return !!ZR && (uR.playerInventory.setItemSlot(RR, GR, 1, null !== yR && void 0 !== yR ? yR : ZR.attributes), !0)
```

#### 2833. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20806` → after: `L20893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20893) · [Before (L20806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20806)

```diff
-         return (null === LW || void 0 === LW ? void 0 : LW.name) === iW && (1 === LW.amount || null === LW.amount ? (PW.setItemSlot(WW, OW, 1, {}), !0) : !(null === EW || EW < 0 || EW >= mW.o || null !== PW.getItemAtIdx(EW)) && (PW.setItemSlot(WW, iW, LW.amount - 1, {}), PW.setIt … [truncated]
+         return (null === qR || void 0 === qR ? void 0 : qR.name) === JR && (1 === qR.amount || null === qR.amount ? (ZR.setItemSlot(RR, GR, 1, {}), !0) : !(null === tR || tR < 0 || tR >= yR.q || null !== ZR.getItemAtIdx(tR)) && (ZR.setItemSlot(RR, JR, qR.amount - 1, {}), ZR.setIt … [truncated]
```

#### 2834. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20809` → after: `L20896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20896) · [Before (L20809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20809)

```diff
-       return mW => !!EW(mW, iW, OW) && (mW.Hx.bloxd.removeEatenItem(WW, mW.playerInventory, iW), !0)
+       return yR => !!tR(yR, JR, GR) && (yR.xw.bloxd.removeEatenItem(RR, yR.playerInventory, JR), !0)
```

#### 2835. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20818` → after: `L20905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20905) · [Before (L20818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20818)

```diff
-   38973: (WW, iW, OW) => {
+   38963: (RR, JR, GR) => {
```

#### 2836. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20827` → after: `L20914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20914) · [Before (L20827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20827)

```diff
-   39053: (WW, iW, OW) => {
+   39036: (RR, JR, GR) => {
```

#### 2837. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20831` → after: `L20917-L20918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20917-L20918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20917-L20918) · [Before (L20831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20831)

```diff
-       i: () => yW
+       h: () => fR,
+       j: () => BR
```

#### 2838. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20833-L20838` → after: `L20920-L20925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20920-L20925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20920-L20925) · [Before (L20833-L20838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20833-L20838)

```diff
-     var mW = OW(192),
-       EW = OW(5725),
-       NW = OW(2061),
-       PW = OW(2350),
-       LW = OW(27),
-       cW = OW(2365);
+     var yR = GR(216),
+       tR = GR(5844),
+       uR = GR(2163),
+       ZR = GR(2421),
+       qR = GR(32),
+       iR = GR(2435);
```

#### 2839. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20852-L20853` → after: `L20939-L20940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20939-L20940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20939-L20940) · [Before (L20852-L20853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20852-L20853)

```diff
-       const OW = (0, mW.c)(WW, iW);
-       return (null === OW || void 0 === OW ? void 0 : OW.name) === iW ? OW : void 0
+       const GR = (0, yR.b)(RR, JR);
+       return (null === GR || void 0 === GR ? void 0 : GR.name) === JR ? GR : void 0
```

#### 2840. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20861` → after: `L20948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20948) · [Before (L20861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20861)

```diff
-       kW(cW.l.blocksClient, WW)
+       UR(iR.k.blocksClient, RR)
```

#### 2841. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20873` → after: `L20960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20960) · [Before (L20873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20873)

```diff
-       return EW.j[WW.name].ttb
+       return tR.l[RR.name].ttb
```

#### 2842. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20877` → after: `L20964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20964) · [Before (L20877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20877)

```diff
-       if ("droppedItemScale" === WW) xW = "number" === typeof iW && isFinite(iW) ? iW : 1;
+       if ("droppedItemScale" === RR) wR = "number" === typeof JR && isFinite(JR) ? JR : 1;
```

#### 2843. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20881` → after: `L20968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20968) · [Before (L20881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20881)

```diff
-         const OW = UW(cW.l.itemsClient, WW.slice(0, -tW.length));
+         const GR = nR(iR.k.itemsClient, RR.slice(0, -VR.length));
```

#### 2844. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20884` → after: `L20971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20971) · [Before (L20884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20884)

```diff
-         const OW = UW(cW.l.blocksClient, WW.slice(0, -ZW.length));
+         const GR = nR(iR.k.blocksClient, RR.slice(0, -KR.length));
```

#### 2845. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20890` → after: `L20977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20977) · [Before (L20890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20890)

```diff
-       NW.d.subscribeAll((WW => {
+       uR.c.subscribeAll((RR => {
```

#### 2846. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20892` → after: `L20979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20979) · [Before (L20892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20892)

```diff
-       })), LW.l.subscribe("ttbEffectMultiplier", (WW => {
+       })), qR.n.subscribe("ttbEffectMultiplier", (RR => {
```

#### 2847. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20895` → after: `L20982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20982) · [Before (L20895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20895)

```diff
-         xW = 1, lW = !1, AW = 1, bW = 1, kW(cW.l.itemsClient, (WW => {
+         wR = 1, rR = !1, eR = 1, aR = 1, UR(iR.k.itemsClient, (RR => {
```

#### 2848. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20903` → after: `L20990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20990) · [Before (L20903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20903)

```diff
-   38881: (WW, iW, OW) => {
+   38872: (RR, JR, GR) => {
```

#### 2849. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L20905` → after: `L20992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L20992) · [Before (L20905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L20905)

```diff
-       c: () => mW
+       b: () => yR
```

#### 2850. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21005` → after: `L21092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21092) · [Before (L21005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21005)

```diff
-         const mW = Array.isArray(iW) ? iW : null !== (OW = null === iW || void 0 === iW ? void 0 : iW.transfer) && void 0 !== OW ? OW : [];
+         const yR = Array.isArray(JR) ? JR : null !== (GR = null === JR || void 0 === JR ? void 0 : JR.transfer) && void 0 !== GR ? GR : [];
```

#### 2851. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21044` → after: `L21131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21131) · [Before (L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21044)

```diff
-   38806: (WW, iW, OW) => {
+   38808: (RR, JR, GR) => {
```

#### 2852. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21046-L21047` → after: `L21133-L21134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21133-L21134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21133-L21134) · [Before (L21046-L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21046-L21047)

```diff
-       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.EY.uOW(iW);
-       return iW === WW.Dv || (null === OW || void 0 === OW ? void 0 : OW.MA) === WW.Dv && OW.oOW
+       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR.zC.nyR(JR);
+       return JR === RR.WH || (null === GR || void 0 === GR ? void 0 : GR.pe) === RR.WH && GR.UyR
```

#### 2853. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21050` → after: `L21137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21137) · [Before (L21050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21050)

```diff
-       b: () => mW
+       c: () => yR
```

#### 2854. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21053` → after: `L21140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21140) · [Before (L21053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21053)

```diff
-   39126: (WW, iW, OW) => {
+   39101: (RR, JR, GR) => {
```

#### 2855. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21055-L21056` → after: `L21142-L21143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21142-L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21142-L21143) · [Before (L21055-L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21055-L21056)

```diff
-       if ("MWW" in WW && Array.isArray(WW.MWW))
-         for (const OW of WW.MWW) OW && iW(OW);
+       if ("ZJR" in RR && Array.isArray(RR.ZJR))
+         for (const GR of RR.ZJR) GR && JR(GR);
```

#### 2856. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21060` → after: `L21147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21147) · [Before (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21060)

```diff
-       c: () => mW
+       d: () => yR
```

#### 2857. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21063` → after: `L21150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21150) · [Before (L21063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21063)

```diff
-   38358: (WW, iW, OW) => {
+   38317: (RR, JR, GR) => {
```

#### 2858. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21065-L21066` → after: `L21152-L21155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21152-L21155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21152-L21155) · [Before (L21065-L21066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21065-L21066)

```diff
-       A: () => UW,
-       e: () => PW,
+       b: () => ZR,
+       c: () => UR,
+       d: () => eR,
+       g: () => LR,
```

#### 2859. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21072-L21075` → after: `L21162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21162) · [Before (L21072-L21075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21072-L21075)

```diff
-       r: () => xW,
-       v: () => cW,
-       x: () => wW,
-       z: () => ZW
+       t: () => nR
```

#### 2860. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21077-L21079` → after: `L21164-L21166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21164-L21166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21164-L21166) · [Before (L21077-L21079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21077-L21079)

```diff
-     var mW = OW(38235),
-       EW = OW(2012),
-       NW = OW(38364);
+     var yR = GR(38195),
+       tR = GR(2102),
+       uR = GR(38325);
```

#### 2861. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21105` → after: `L21192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21192) · [Before (L21105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21105)

```diff
-         mW = null !== OW && void 0 !== OW && OW.model ? OW : null;
+         yR = null !== GR && void 0 !== GR && GR.model ? GR : null;
```

#### 2862. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21125` → after: `L21212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21212) · [Before (L21125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21125)

```diff
-         indices: null !== (OW = null === (mW = iW.geometry.indexData) || void 0 === mW ? void 0 : mW.slice()) && void 0 !== OW ? OW : [],
+         indices: null !== (GR = null === (yR = JR.geometry.indexData) || void 0 === yR ? void 0 : yR.slice()) && void 0 !== GR ? GR : [],
```

#### 2863. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21140` → after: `L21227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21227) · [Before (L21140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21140)

```diff
-         const OW = NW.e.UVKind,
+         const GR = uR.d.UVKind,
```

#### 2864. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21142` → after: `L21229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21229) · [Before (L21142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21142)

```diff
-         LW(mW, WW.IEW(), iW), WW.setVerticesData(OW, mW)
+         qR(yR, RR.NuR(), JR), RR.setVerticesData(GR, yR)
```

#### 2865. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21148` → after: `L21235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21235) · [Before (L21148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21148)

```diff
-       return !!(null !== (iW = WW.metadata) && void 0 !== iW && null !== (OW = iW.uH) && void 0 !== OW && null !== (mW = OW.extras) && void 0 !== mW && mW.bloxdProcessed || null !== (EW = WW.parent) && void 0 !== EW && null !== (NW = EW.metadata) && void 0 !== NW && null !== (PW  … [truncated]
+       return !!(null !== (JR = RR.metadata) && void 0 !== JR && null !== (GR = JR.dD) && void 0 !== GR && null !== (yR = GR.extras) && void 0 !== yR && yR.bloxdProcessed || null !== (tR = RR.parent) && void 0 !== tR && null !== (uR = tR.metadata) && void 0 !== uR && null !== (ZR  … [truncated]
```

#### 2866. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21164` → after: `L21251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21251) · [Before (L21164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21164)

```diff
-         WW.YZ.set(iW, iW, iW), WW.bakeCurrentTransformIntoVertices(!1)
+         RR.MK.set(JR, JR, JR), RR.bakeCurrentTransformIntoVertices(!1)
```

#### 2867. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21170` → after: `L21257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21257) · [Before (L21170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21170)

```diff
-       return (0, EW.r)(`v${bW}|${JSON.stringify(WW)}|${iW}`)
+       return (0, tR.q)(`v${aR}|${JSON.stringify(RR)}|${JR}`)
```

#### 2868. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21191` → after: `L21278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21278) · [Before (L21191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21191)

```diff
-         }(WW)) || void 0 === OW || null === (mW = OW.extras) || void 0 === mW ? void 0 : mW.bloxdBuildHash) && void 0 !== iW ? iW : null
+         }(RR)) || void 0 === GR || null === (yR = GR.extras) || void 0 === yR ? void 0 : yR.bloxdBuildHash) && void 0 !== JR ? JR : null
```

#### 2869. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21204-L21205` → after: `L21291-L21292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21291-L21292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21291-L21292) · [Before (L21204-L21205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21204-L21205)

```diff
-         OW = mW.fA.One(),
-         EW = new mW.fA;
+         GR = yR.Fe.One(),
+         tR = new yR.Fe;
```

#### 2870. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21212` → after: `L21299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21299) · [Before (L21212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21212)

```diff
-         const WW = mW.Matrix.Compose(OW, mW.Quaternion.RotationYawPitchRoll(xW, lW, 0), new mW.fA(wW, tW, ZW)),
+         const RR = yR.Matrix.Compose(GR, yR.Quaternion.RotationYawPitchRoll(wR, rR, 0), new yR.Fe(fR, VR, KR)),
```

#### 2871. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21214` → after: `L21301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21301) · [Before (L21214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21214)

```diff
-         for (let OW = 0; OW < NW.length; OW += 3) mW.fA.TransformCoordinatesFromFloatsToRef(NW[OW], NW[OW + 1], NW[OW + 2], WW, EW), iW.positions.push(EW.x, EW.y, EW.z), mW.fA.TransformNormalFromFloatsToRef(PW[OW], PW[OW + 1], PW[OW + 2], WW, EW), iW.normals.push(EW.x, EW.y, EW.z … [truncated]
+         for (let GR = 0; GR < uR.length; GR += 3) yR.Fe.TransformCoordinatesFromFloatsToRef(uR[GR], uR[GR + 1], uR[GR + 2], RR, tR), JR.positions.push(tR.x, tR.y, tR.z), yR.Fe.TransformNormalFromFloatsToRef(ZR[GR], ZR[GR + 1], ZR[GR + 2], RR, tR), JR.normals.push(tR.x, tR.y, tR.z … [truncated]
```

#### 2872. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21221` → after: `L21308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21308) · [Before (L21221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21221)

```diff
-   39231: (WW, iW, OW) => {
+   39211: (RR, JR, GR) => {
```

#### 2873. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21224-L21225` → after: `L21312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21312) · [Before (L21224-L21225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21224-L21225)

```diff
-       f: () => Bi,
-       g: () => Vi,
+       i: () => cJ,
```

#### 2874. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21228-L21231` → after: `L21315-L21318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21315-L21318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21315-L21318) · [Before (L21228-L21231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21228-L21231)

```diff
-     var mW = OW(38195),
-       EW = OW(2350),
-       NW = OW(38963),
-       PW = OW(39234),
+     var yR = GR(38150),
+       tR = GR(2421),
+       uR = GR(38950),
+       ZR = GR(39214),
```

#### 2875. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21233-L21239` → after: `L21320-L21326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21320-L21326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21320-L21326) · [Before (L21233-L21239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21233-L21239)

```diff
-       cW = OW(5725),
-       wW = OW(39204),
-       tW = OW(27),
-       ZW = OW(154),
-       xW = OW(4337),
-       lW = OW(38965),
-       AW = OW(4344),
+       iR = GR(5844),
+       fR = GR(39179),
+       VR = GR(32),
+       KR = GR(163),
+       wR = GR(4422),
+       rR = GR(38954),
+       eR = GR(4428),
```

#### 2876. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21241-L21251` → after: `L21328-L21338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21328-L21338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21328-L21338) · [Before (L21241-L21251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21241-L21251)

```diff
-       jW = OW(2365),
-       UW = OW(2478),
-       kW = OW(39062),
-       sW = OW(38411),
-       MW = OW(38454),
-       KW = OW(38235),
-       SW = OW(38431),
-       YW = OW(38364),
-       yW = OW(39083),
-       TW = OW(38694),
-       JW = OW(39070);
+       LR = GR(2435),
+       nR = GR(2532),
+       UR = GR(39039),
+       WR = GR(38371),
+       AR = GR(38417),
+       CR = GR(38195),
+       XR = GR(38397),
+       MR = GR(38325),
+       BR = GR(39055),
+       lR = GR(38682),
+       pR = GR(39041);
```

#### 2877. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21256` → after: `L21343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21343) · [Before (L21256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21256)

```diff
-       const OW = xW.d.getTexture(iW, AW.g.BLOCK).url,
+       const GR = wR.b.getTexture(JR, eR.k.BLOCK).url,
```

#### 2878. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21259` → after: `L21346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21346) · [Before (L21259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21259)

```diff
-       const EW = (0, SW.x)(WW, {
+       const tR = (0, XR.v)(RR, {
```

#### 2879. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21263` → after: `L21350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21350) · [Before (L21263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21263)

```diff
-           samplingMode: SW.k.nearestNearestMipLinear,
+           samplingMode: XR.f.nearestNearestMipLinear,
```

#### 2880. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21265-L21266` → after: `L21352-L21353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21352-L21353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21352-L21353) · [Before (L21265-L21266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21265-L21266)

```diff
-             wrapU: SW.e.clamp,
-             wrapV: SW.e.clamp,
+             wrapU: XR.c.clamp,
+             wrapV: XR.c.clamp,
```

#### 2881. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21273-L21274` → after: `L21360-L21361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21360-L21361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21360-L21361) · [Before (L21273-L21274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21273-L21274)

```diff
-           name: `${iW}BlockModelMeshMat`,
-           rb: WW,
+           name: `${JR}BlockModelMeshMat`,
+           tL: RR,
```

#### 2882. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21277` → after: `L21364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21364) · [Before (L21277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21277)

```diff
-             transparencyMode: YW.e.MATERIAL_ALPHATEST,
+             transparencyMode: MR.d.MATERIAL_ALPHATEST,
```

#### 2883. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21297` → after: `L21384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21384) · [Before (L21297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21297)

```diff
-       return (0, yW.r)((0, jW.h)().TZ, WW, (0, TW.f)({
+       return (0, BR.m)((0, LR.i)().lK, RR, (0, lR.k)({
```

#### 2884. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21312-L21313` → after: `L21399-L21400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21399-L21400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21399-L21400) · [Before (L21312-L21313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21312-L21313)

```diff
-         const OW = uW(`${iW}CstmPlnMdl1`);
-         OW.Fb = !1, OW.rotation.set(...LW.rotation), OW.bakeCurrentTransformIntoVertices();
+         const GR = OR(`${JR}CstmPlnMdl1`);
+         GR.ZL = !1, GR.rotation.set(...qR.rotation), GR.bakeCurrentTransformIntoVertices();
```

#### 2885. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21317-L21318` → after: `L21404-L21405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21404-L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21404-L21405) · [Before (L21317-L21318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21317-L21318)

```diff
-       const PW = (0, yW.q)(EW, NW.size > 1, !1);
-       return PW.Fb = !1, PW
+       const ZR = (0, BR.l)(tR, uR.size > 1, !1);
+       return ZR.ZL = !1, ZR
```

#### 2886. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21349` → after: `L21436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21436) · [Before (L21349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21349)

```diff
-     const vW = new KW.fA(.5, .5, .5);
+     const HR = new CR.Fe(.5, .5, .5);
```

#### 2887. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21353` → after: `L21440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21440) · [Before (L21353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21353)

```diff
-           const OW = KW.Matrix.Compose(KW.fA.One(), KW.Quaternion.RotationYawPitchRoll(WW.rotation[1], WW.rotation[0], WW.rotation[2]), KW.fA.FromArray(WW.position)),
+           const GR = CR.Matrix.Compose(CR.Fe.One(), CR.Quaternion.RotationYawPitchRoll(RR.rotation[1], RR.rotation[0], RR.rotation[2]), CR.Fe.FromArray(RR.position)),
```

#### 2888. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21357` → after: `L21444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21444) · [Before (L21357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21357)

```diff
-               YZ: NW
+               MK: uR
```

#### 2889. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21362-L21364` → after: `L21449-L21451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21449-L21451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21449-L21451) · [Before (L21362-L21364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21362-L21364)

```diff
-         EW = KW.fA.TransformCoordinates(KW.fA.Zero(), mW),
-         NW = KW.fA.TransformNormal(new KW.fA(1, 0, 0), mW),
-         PW = KW.fA.TransformNormal(new KW.fA(0, 1, 0), mW),
+         tR = CR.Fe.TransformCoordinates(CR.Fe.Zero(), yR),
+         uR = CR.Fe.TransformNormal(new CR.Fe(1, 0, 0), yR),
+         ZR = CR.Fe.TransformNormal(new CR.Fe(0, 1, 0), yR),
```

#### 2890. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21370` → after: `L21457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21457) · [Before (L21370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21370)

```diff
-         texture: xW.d.getTexture(iW, AW.g.BLOCK).url
+         texture: wR.b.getTexture(JR, eR.k.BLOCK).url
```

#### 2891. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21380` → after: `L21467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21467) · [Before (L21380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21380)

```diff
-           return dW("CentreCross" === OW ? nW : WW.customPlanesInfo).map((WW => {
+           return NR("CentreCross" === GR ? vR : RR.customPlanesInfo).map((RR => {
```

#### 2892. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21418` → after: `L21505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21505) · [Before (L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21418)

```diff
-       return XW(WW, iW, pW(WW, iW.name, NW.c))
+       return SR(RR, JR, IR(RR, JR.name, uR.d))
```

#### 2893. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21422` → after: `L21509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21509) · [Before (L21422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21422)

```diff
-       return XW(WW, iW, pW(WW, iW.name, NW.g), OW)
+       return SR(RR, JR, IR(RR, JR.name, uR.f), GR)
```

#### 2894. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21426` → after: `L21513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21513) · [Before (L21426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21426)

```diff
-       const EW = lW.b.getBlockAtlasMaterialForPlacement(WW, !!iW.transTex, !!iW.unlitStandaloneMesh),
+       const tR = rR.c.getBlockAtlasMaterialForPlacement(RR, !!JR.transTex, !!JR.unlitStandaloneMesh),
```

#### 2895. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21432` → after: `L21519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21519) · [Before (L21432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21432)

```diff
-       return NW.WK(!0), NW
+       return uR.JA(!0), uR
```

#### 2896. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21434-L21441` → after: `L21521-L21528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21521-L21528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21521-L21528) · [Before (L21434-L21441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21434-L21441)

```diff
-     var BW = OW(5766),
-       qW = OW(1217),
-       RW = OW(39236),
-       GW = OW(39139),
-       IW = OW(5772),
-       aW = OW(5174),
-       rW = OW(39074),
-       zW = OW(38358);
+     var jR = GR(5898),
+       dR = GR(1317),
+       ER = GR(39217),
+       YR = GR(39117),
+       kR = GR(5907),
+       QR = GR(5268),
+       FR = GR(39052),
+       TR = GR(38317);
```

#### 2897. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21445` → after: `L21532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21532) · [Before (L21445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21445)

```diff
-         Am: OW,
+         wy: GR,
```

#### 2898. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21457` → after: `L21544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21544) · [Before (L21457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21457)

```diff
-           Am: OW[1],
+           wy: GR[1],
```

#### 2899. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21462-L21463` → after: `L21549-L21550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21549-L21550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21549-L21550) · [Before (L21462-L21463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21462-L21463)

```diff
-       }(iW((0, IW.j)(WW.postPiece, null))), PW = KW.Matrix.Translation(-EW, -OW, -NW).multiply(KW.Matrix.Scaling(1 / mW, 1 / mW, 1 / mW)).multiply(KW.Matrix.Translation(0, -.5, 0)), LW = (WW, OW) => {
-         const mW = mW => (0, rW.k)((0, rW.d)(iW((0, IW.j)(WW, mW))), OW.m);
+       }(JR((0, kR.n)(RR.postPiece, null))), ZR = CR.Matrix.Translation(-tR, -GR, -uR).multiply(CR.Matrix.Scaling(1 / yR, 1 / yR, 1 / yR)).multiply(CR.Matrix.Translation(0, -.5, 0)), qR = (RR, GR) => {
+         const yR = yR => (0, FR.j)((0, FR.c)(JR((0, kR.n)(RR, yR))), GR.m);
```

#### 2900. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21466` → after: `L21553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21553) · [Before (L21466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21466)

```diff
-           arms: IW.o.map(((WW, iW) => mW(iW)))
+           arms: kR.s.map(((RR, JR) => yR(JR)))
```

#### 2901. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21474` → after: `L21561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21561) · [Before (L21474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21474)

```diff
-           arms: cW.arms.map(((WW, iW) => (0, rW.h)([
+           arms: iR.arms.map(((RR, JR) => (0, FR.f)([
```

#### 2902. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21488` → after: `L21575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21575) · [Before (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21488)

```diff
-       return (0, rW.h)([OW, ...EW].map((WW => [WW, null])))
+       return (0, FR.f)([GR, ...tR].map((RR => [RR, null])))
```

#### 2903. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21500-L21501` → after: `L21587-L21588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21587-L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21587-L21588) · [Before (L21500-L21501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21500-L21501)

```diff
-       if (!mW) throw new Error(`"${OW}" has no node named "${iW}"`);
-       if (!mW.length) throw new Error(`"${OW}" node "${iW}" has no mesh`);
+       if (!yR) throw new Error(`"${GR}" has no node named "${JR}"`);
+       if (!yR.length) throw new Error(`"${GR}" node "${JR}" has no mesh`);
```

#### 2904. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21503-L21504` → after: `L21590-L21591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21590-L21591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21590-L21591) · [Before (L21503-L21504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21503-L21504)

```diff
-         const OW = (0, zW.q)(WW, iW);
-         return (0, rW.k)(OW, WW.worldMatrix(iW, !1)),
+         const GR = (0, TR.k)(RR, JR);
+         return (0, FR.j)(GR, RR.worldMatrix(JR, !1)),
```

#### 2905. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21518` → after: `L21605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21605) · [Before (L21518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21518)

```diff
-       return (0, rW.h)(EW)
+       return (0, FR.f)(tR)
```

#### 2906. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21520` → after: `L21607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21607) · [Before (L21520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21520)

```diff
-     var Oi = OW(39033);
+     var GJ = GR(39013);
```

#### 2907. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21522` → after: `L21609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21609) · [Before (L21522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21522)

```diff
-         fence: IW.r
+         fence: kR.v
```

#### 2908. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21528-L21529` → after: `L21615-L21616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21615-L21616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21615-L21616) · [Before (L21528-L21529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21528-L21529)

```diff
-       const mW = xW.d.getModel(iW, AW.e.BLOCK).url,
-         EW = await (0, MW.g)("", WW, mW, (() => xW.d.getModelOverride(iW) ? {
+       const yR = wR.b.getModel(JR, eR.h.BLOCK).url,
+         tR = await (0, AR.h)("", RR, yR, (() => wR.b.getModelOverride(JR) ? {
```

#### 2909. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21532` → after: `L21619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21619) · [Before (L21532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21532)

```diff
-             rootUrl: xW.d.getModel(iW, AW.e.BLOCK, !0).url
+             rootUrl: wR.b.getModel(JR, eR.h.BLOCK, !0).url
```

#### 2910. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21539` → after: `L21626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21626) · [Before (L21539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21539)

```diff
-       return iW ? OW & IW.e ? WW.stackedPost : WW.post : WW.top
+       return JR ? GR & kR.h ? RR.stackedPost : RR.post : RR.top
```

#### 2911. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21544` → after: `L21631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21631) · [Before (L21544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21544)

```diff
-       const NW = cW.z[(0, aW.l)(iW.textureInfo)];
+       const uR = iR.B[(0, QR.l)(JR.textureInfo)];
```

#### 2912. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21549` → after: `L21636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21636) · [Before (L21549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21549)

```diff
-         const mW = (0, Oi.h)();
+         const yR = (0, GJ.g)();
```

#### 2913. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21556` → after: `L21643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21643) · [Before (L21556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21556)

```diff
-         } = null !== (EW = mW.named) && void 0 !== EW ? EW : {},
+         } = null !== (tR = yR.named) && void 0 !== tR ? tR : {},
```

#### 2914. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21558` → after: `L21645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21645) · [Before (L21558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21558)

```diff
-         ZW = (0, yW.r)((0, jW.h)().TZ, OW, {
+         KR = (0, BR.m)((0, LR.i)().lK, GR, {
```

#### 2915. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21563` → after: `L21650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21650) · [Before (L21563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21563)

```diff
-             color: (0, zW.m)(PW, zW.e, LW)
+             color: (0, TR.i)(ZR, TR.b, qR)
```

#### 2916. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21566` → after: `L21653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21653) · [Before (L21566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21566)

```diff
-       return ZW.material = lW.b.getBlockAtlasMaterialForPlacement(WW, !!iW.transTex, !!iW.unlitStandaloneMesh), ZW.Fb = !1, ZW
+       return KR.material = rR.c.getBlockAtlasMaterialForPlacement(RR, !!JR.transTex, !!JR.unlitStandaloneMesh), KR.ZL = !1, KR
```

#### 2917. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21570` → after: `L21657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21657) · [Before (L21570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21570)

```diff
-       if (!OW) throw new Error(`"${iW.name}" has no connecting model GLB for model "${iW.model}"`);
+       if (!GR) throw new Error(`"${JR.name}" has no connecting model GLB for model "${JR.model}"`);
```

#### 2918. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21575-L21576` → after: `L21662-L21663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21662-L21663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21662-L21663) · [Before (L21575-L21576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21575-L21576)

```diff
-       }(WW, OW), EW = void 0 !== iW.attachedTop, NW = EW ? [...IW.d, ...IW.d.map((WW => WW | IW.e))] : IW.d, PW = new Map;
-       for (const LW of NW) PW.set(LW, (() => wi(WW, iW, `${iW.name}|${LW}ConnectingModel`, QW(ci(mW, EW, LW), LW))));
+       }(RR, GR), tR = void 0 !== JR.attachedTop, uR = tR ? [...kR.g, ...kR.g.map((RR => RR | kR.h))] : kR.g, ZR = new Map;
+       for (const qR of uR) ZR.set(qR, (() => fJ(RR, JR, `${JR.name}|${qR}ConnectingModel`, hR(iJ(yR, tR, qR), qR))));
```

#### 2919. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21582-L21583` → after: `L21669-L21670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21669-L21670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21669-L21670) · [Before (L21582-L21583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21582-L21583)

```diff
-       if (!OW) throw new Error(`"${WW}" variants registered before its connecting meshes were built`);
-       return OW.get((0, IW.l)(iW))
+       if (!GR) throw new Error(`"${RR}" variants registered before its connecting meshes were built`);
+       return GR.get((0, kR.p)(JR))
```

#### 2920. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21585` → after: `L21672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21672) · [Before (L21585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21585)

```diff
-     var xi = OW(5774);
+     var wJ = GR(5912);
```

#### 2921. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21609-L21610` → after: `L21696-L21697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21696-L21697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21696-L21697) · [Before (L21609-L21610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21609-L21610)

```diff
-           left: (0, rW.k)((0, rW.d)(OW), iW.m),
-           right: (0, rW.k)((0, rW.d)(mW), iW.m)
+           left: (0, FR.j)((0, FR.c)(GR), JR.m),
+           right: (0, FR.j)((0, FR.c)(yR), JR.m)
```

#### 2922. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21624` → after: `L21711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21711) · [Before (L21624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21624)

```diff
-       return (0, rW.k)((0, rW.d)(WW), PW.m)
+       return (0, FR.j)((0, FR.c)(RR), ZR.m)
```

#### 2923. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21633` → after: `L21720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21720) · [Before (L21633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21633)

```diff
-         PW = (0, rW.h)([
+         ZR = (0, FR.f)([
```

#### 2924. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21637` → after: `L21724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21724) · [Before (L21637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21637)

```diff
-       return (0, rW.k)(PW, KW.Matrix.RotationY((iW - 1) * Math.PI / 2).m)
+       return (0, FR.j)(ZR, CR.Matrix.RotationY((JR - 1) * Math.PI / 2).m)
```

#### 2925. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21644` → after: `L21731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21731) · [Before (L21644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21644)

```diff
-       return `${WW}|${iW}`
+       return `${RR}|${JR}`
```

#### 2926. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21649` → after: `L21736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21736) · [Before (L21649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21649)

```diff
-       if (!mW) throw new Error(`"${WW}" variants registered before its fence gate meshes were built`);
+       if (!yR) throw new Error(`"${RR}" variants registered before its fence gate meshes were built`);
```

#### 2927. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21652` → after: `L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21739) · [Before (L21652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21652)

```diff
-     var Si = OW(39145);
+     var XJ = GR(39125);
```

#### 2928. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21666` → after: `L21753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21753) · [Before (L21666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21666)

```diff
-         return (iW.endsWith(" Leaves") || OW) && (EW |= Si.d.vegetation), ("Dirt" === iW || iW.endsWith(" Dirt") || iW.endsWith(" Soil") || OW) && (EW |= Si.d.dirt), (Yi.has(iW) || mW) && (EW |= Si.d.sand), (yi.has(iW) || mW || iW.endsWith(" Ore") || Ti.test(iW)) && (EW |= Si.d.r … [truncated]
+         return (JR.endsWith(" Leaves") || GR) && (tR |= XJ.b.vegetation), ("Dirt" === JR || JR.endsWith(" Dirt") || JR.endsWith(" Soil") || GR) && (tR |= XJ.b.dirt), (MJ.has(JR) || yR) && (tR |= XJ.b.sand), (BJ.has(JR) || yR || JR.endsWith(" Ore") || lJ.test(JR)) && (tR |= XJ.b.r … [truncated]
```

#### 2929. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21672` → after: `L21759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21759) · [Before (L21672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21672)

```diff
-             return Si.d.slab;
+             return XJ.b.slab;
```

#### 2930. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21674` → after: `L21761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21761) · [Before (L21674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21674)

```diff
-             return Si.d.stairs
+             return XJ.b.stairs
```

#### 2931. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21676` → after: `L21763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21763) · [Before (L21676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21676)

```diff
-         return OW && Ji.has(OW) ? Si.d.flat | (Hi.has(mW) ? 0 : Si.d.vegetation) : OW && ni.has(mW) ? Si.d.vegetation : 0
+         return GR && pJ.has(GR) ? XJ.b.flat | (gJ.has(yR) ? 0 : XJ.b.vegetation) : GR && bJ.has(yR) ? XJ.b.vegetation : 0
```

#### 2932. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21679-L21683` → after: `L21766-L21770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21766-L21770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21766-L21770) · [Before (L21679-L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21679-L21683)

```diff
-     var oi = OW(38419),
-       di = OW(38437),
-       ei = OW(39244),
-       vi = OW(4454),
-       gi = OW(5371);
+     var OJ = GR(38382),
+       xJ = GR(38406),
+       NJ = GR(39221),
+       DJ = GR(4555),
+       HJ = GR(5474);
```

#### 2933. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21687` → after: `L21774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21774) · [Before (L21687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21687)

```diff
-       return [WW.animTextures.length - 1, 1, null !== (iW = WW.animationInterval) && void 0 !== iW ? iW : 200]
+       return [RR.animTextures.length - 1, 1, null !== (JR = RR.animationInterval) && void 0 !== JR ? JR : 200]
```

#### 2934. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21691` → after: `L21778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21778) · [Before (L21691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21691)

```diff
-       (0, vi.h)(function() {
+       (0, DJ.i)(function() {
```

#### 2935. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21693` → after: `L21780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21780) · [Before (L21693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21693)

```diff
-         for (const iW of [cW.j, mW.t])
+         for (const JR of [iR.l, yR.s])
```

#### 2936. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21698-L21699` → after: `L21785-L21786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21785-L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21785-L21786) · [Before (L21698-L21699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21698-L21699)

```diff
-         return Array.from(WW, (WW => null !== WW && void 0 !== WW ? WW : ""))
-       }()), await (0, gi.m)("block textures");
+         return Array.from(RR, (RR => null !== RR && void 0 !== RR ? RR : ""))
+       }()), await (0, HJ.q)("block textures");
```

#### 2937. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21706-L21707` → after: `L21793-L21794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21793-L21794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21793-L21794) · [Before (L21706-L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21706-L21707)

```diff
-         kW = OW(39252);
-       UW(new window.FontFace("Jetbrains Mono", `url(${kW})`).load().then((WW => {
+         UR = GR(39225);
+       nR(new window.FontFace("Jetbrains Mono", `url(${UR})`).load().then((RR => {
```

#### 2938. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21709` → after: `L21796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21796) · [Before (L21709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21709)

```diff
-       }))), WW.EY.bOW({
+       }))), RR.zC.GyR({
```

#### 2939. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21711-L21712` → after: `L21798-L21799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21798-L21799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21798-L21799) · [Before (L21711-L21712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21711-L21712)

```diff
-       }), (0, MW.k)(), await xW.d.requiredAssetsAreGenerated();
-       const KW = xW.d.getGenerationFailure();
+       }), (0, AR.l)(), await wR.b.requiredAssetsAreGenerated();
+       const CR = wR.b.getGenerationFailure();
```

#### 2940. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21714-L21718` → after: `L21801-L21805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21801-L21805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21801-L21805) · [Before (L21714-L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21714-L21718)

```diff
-       await (0, gi.m)("items object"), (0, NW.u)(), await (0, gi.m)("pick helper"), jW.l.localPlayerPickActionHelper = new wW.b(WW, WW.Dv), await (0, gi.m)("block atlas");
-       const YW = xW.d.getBlockAtlasArr(),
-         JW = xW.d.getBlockAtlasPixels(),
-         hW = xW.d.getBlockAtlasWidth(),
-         HW = cW.y.flatMap((WW => {
+       await (0, HJ.q)("items object"), (0, uR.u)(), await (0, HJ.q)("pick helper"), LR.k.localPlayerPickActionHelper = new fR.c(RR, RR.WH), await (0, HJ.q)("block atlas");
+       const MR = wR.b.getBlockAtlasArr(),
+         pR = wR.b.getBlockAtlasPixels(),
+         gR = wR.b.getBlockAtlasWidth(),
+         bR = iR.z.flatMap((RR => {
```

#### 2941. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21727-L21728` → after: `L21814-L21815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21814-L21815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21814-L21815) · [Before (L21727-L21728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21727-L21728)

```diff
-       const nW = WW.TZ.Ab();
-       lW.b.setUseWebGL2(nW);
+       const vR = RR.lK.Xa();
+       rR.c.setUseWebGL2(vR);
```

#### 2942. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21731-L21732` → after: `L21818-L21819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21818-L21819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21818-L21819) · [Before (L21731-L21732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21731-L21732)

```diff
-       bW.d.get("clientEscMenuOptions").disableTexAtlas && !WW.kA && (uW = !1, oW = "options");
-       let dW = xW.d.getImagesPerAtlas();
+       aR.d.get("clientEscMenuOptions").disableTexAtlas && !RR.Be && (OR = !1, xR = "options");
+       let NR = wR.b.getImagesPerAtlas();
```

#### 2943. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21734` → after: `L21821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21821) · [Before (L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21734)

```diff
-         const WW = `imagesPerAtlas = ${dW}`;
+         const RR = `imagesPerAtlas = ${NR}`;
```

#### 2944. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21737-L21739` → after: `L21824-L21826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21824-L21826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21824-L21826) · [Before (L21737-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21737-L21739)

```diff
-       const eW = WW.TZ.engine.getCaps().texture2DArrayMaxLayerCount;
-       uW && nW && eW < dW[0] && (uW = !1, oW = `maxLayerCount = ${eW}, layerCount = ${dW[0]}`);
-       const vW = WW.TZ.engine.getCaps().maxTextureSize,
+       const DR = RR.lK.engine.getCaps().texture2DArrayMaxLayerCount;
+       OR && vR && DR < NR[0] && (OR = !1, xR = `maxLayerCount = ${DR}, layerCount = ${NR[0]}`);
+       const HR = RR.lK.engine.getCaps().maxTextureSize,
```

#### 2945. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21741-L21742` → after: `L21828-L21829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21828-L21829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21828-L21829) · [Before (L21741-L21742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21741-L21742)

```diff
-       uW && vW < gW && (uW = !1, oW = `maxTextureSize = ${vW}, textureSize = ${gW}`), console.log("Graphics backend", null !== (iW = null === (EW = WW.TZ.Lb) || void 0 === EW ? void 0 : EW.backendName) && void 0 !== iW ? iW : `webgl${WW.TZ.engine.bb}`, "useTexAtlas", uW, "reason" … [truncated]
-       const DW = Math.floor(Object.keys((0, qW.db)(cW.j)).length / 50);
+       OR && HR < oR && (OR = !1, xR = `maxTextureSize = ${HR}, textureSize = ${oR}`), console.log("Graphics backend", null !== (JR = null === (tR = RR.lK.La) || void 0 === tR ? void 0 : tR.backendName) && void 0 !== JR ? JR : `webgl${RR.lK.engine.Ma}`, "useTexAtlas", OR, "reason" … [truncated]
+       const cR = Math.floor(Object.keys((0, dR.Q)(iR.l)).length / 50);
```

#### 2946. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21744-L21745` → after: `L21831-L21832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21831-L21832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21831-L21832) · [Before (L21744-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21744-L21745)

```diff
-         pW += 1, pW % 50 === 0 && (tW.l.iZ("matchmakeAndPlayStepCompleted", {
-           step: ZW.k.REGISTRATION,
+         IR += 1, IR % 50 === 0 && (VR.n.JK("matchmakeAndPlayStepCompleted", {
+           step: KR.j.REGISTRATION,
```

#### 2947. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21749` → after: `L21836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21836) · [Before (L21749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21749)

```diff
-         }))), await (0, gi.m)(`block ${WW}`)
+         }))), await (0, HJ.q)(`block ${RR}`)
```

#### 2948. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21752-L21753` → after: `L21839-L21840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21839-L21840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21839-L21840) · [Before (L21752-L21753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21752-L21753)

```diff
-       for (const OW in (0, qW.db)(cW.j)) {
-         const iW = cW.j[OW],
+       for (const GR in (0, dR.Q)(iR.l)) {
+         const JR = iR.l[GR],
```

#### 2949. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21757` → after: `L21844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21844) · [Before (L21757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21757)

```diff
-           if (ri(cW.j[WW], iW)) {
+           if (kJ(iR.l[RR], JR)) {
```

#### 2950. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21763` → after: `L21850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21850) · [Before (L21763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21763)

```diff
-           await (0, gi.m)(`block ${OW} model`);
+           await (0, HJ.q)(`block ${GR} model`);
```

#### 2951. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21766` → after: `L21853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21853) · [Before (L21766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21766)

```diff
-               P_: await Ii(iW.model).getMesh(WW.TZ.bD(), iW),
+               R7: await EJ(JR.model).getMesh(RR.lK.jH(), JR),
```

#### 2952. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21769-L21775` → after: `L21856-L21862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21856-L21862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21856-L21862) · [Before (L21769-L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21769-L21775)

```diff
-               sj: iW.sj,
-               rY: zi(OW),
-               oA: null !== (EW = iW.oA) && void 0 !== EW ? EW : null,
-               Mj: null !== (NW = iW.Mj) && void 0 !== NW ? NW : null,
-               dA: iW.dA,
-               lD: ui(OW, iW.model),
-               B3: () => Qi(iW, iW)
+               AL: JR.AL,
+               qB: QJ(GR),
+               ze: null !== (tR = JR.ze) && void 0 !== tR ? tR : null,
+               CL: null !== (uR = JR.CL) && void 0 !== uR ? uR : null,
+               Se: JR.Se,
+               mH: vJ(GR, JR.model),
+               X3: () => TJ(JR, JR)
```

#### 2953. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21777` → after: `L21864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21864) · [Before (L21777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21777)

```diff
-             WW.ZZ.nB(iW.id, PW), null !== iW.meta.metaStr && await fi(WW, OW, PW), await VW(OW)
+             RR.KK.Dk(JR.id, ZR), null !== JR.meta.metaStr && await PJ(RR, GR, ZR), await PR(GR)
```

#### 2954. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21783-L21784` → after: `L21870-L21871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21870-L21871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21870-L21871) · [Before (L21783-L21784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21783-L21784)

```diff
-             if ("number" === typeof iW.textureInfo[0]) iW.textureInfo.length > 3 && (EW = !0), WW.ZZ.x_(OW, {
-               I3: [],
+             if ("number" === typeof JR.textureInfo[0]) JR.textureInfo.length > 3 && (tR = !0), RR.KK.E1(GR, {
+               B3: [],
```

#### 2955. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21786` → after: `L21873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21873) · [Before (L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21786)

```diff
-               i_: EW
+               I3: tR
```

#### 2956. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21793-L21794` → after: `L21880-L21885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21880-L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21880-L21885) · [Before (L21793-L21794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21793-L21794)

```diff
-                 const LW = `${OW}${PW}`;
-                 if (uW && void 0 !== iW.atlasIdx[PW]) WW.ZZ.x_(LW, {
+                 const qR = `${GR}${ZR}`;
+                 if (OR && void 0 !== JR.atlasIdx[ZR]) RR.KK.E1(qR, {
+                   B3: MR,
+                   K8: pR,
+                   W8: gR,
+                   Z8: JR.atlasIdx[ZR],
```

#### 2957. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21796-L21800` → after: `L21887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21887) · [Before (L21796-L21800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21796-L21800)

```diff
-                   E_: JW,
-                   N_: hW,
-                   m_: iW.atlasIdx[PW],
-                   i_: EW,
-                   Kj: HW
+                   ML: bR
```

#### 2958. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21805-L21806` → after: `L21892-L21893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21892-L21893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21892-L21893) · [Before (L21805-L21806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21805-L21806)

```diff
-                       I3: [xW.d.getTexture("string" === typeof iW ? iW : LW, AW.g.BLOCK).url],
-                       i_: EW
+                       B3: [wR.b.getTexture("string" === typeof JR ? JR : qR, eR.k.BLOCK).url],
+                       I3: tR
```

#### 2959. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21808` → after: `L21895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21895) · [Before (L21808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21808)

```diff
-                   ("string" === typeof iW ? 0 : iW.animTextures.length) > 0 && (OW.Kj = Di(iW)), WW.ZZ.x_(LW, OW)
+                   ("string" === typeof JR ? 0 : JR.animTextures.length) > 0 && (GR.ML = oJ(JR)), RR.KK.E1(qR, GR)
```

#### 2960. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21814` → after: `L21901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21901) · [Before (L21814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21814)

```diff
-                   const iW = `${OW}${WW}`;
+                   const JR = `${GR}${RR}`;
```

#### 2961. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21820-L21823` → after: `L21907-L21910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21907-L21910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21907-L21910) · [Before (L21820-L21823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21820-L21823)

```diff
-             if (EW ||= iW.transTex, EW ||= (null === (BW = iW.textureInfo.colour) || void 0 === BW ? void 0 : BW.length) > 3, uW && void 0 !== iW.atlasIdx) WW.ZZ.x_(OW, {
-               I3: YW,
-               E_: JW,
-               N_: hW,
+             if (tR ||= JR.transTex, tR ||= (null === (jR = JR.textureInfo.colour) || void 0 === jR ? void 0 : jR.length) > 3, OR && void 0 !== JR.atlasIdx) RR.KK.E1(GR, {
+               B3: MR,
+               K8: pR,
+               W8: gR,
```

#### 2962. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21825-L21828` → after: `L21912-L21915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21912-L21915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21912-L21915) · [Before (L21825-L21828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21825-L21828)

```diff
-               l_: !1,
-               m_: iW.atlasIdx[0],
-               i_: EW,
-               Kj: HW
+               Y1: !1,
+               Z8: JR.atlasIdx[0],
+               I3: tR,
+               ML: bR
```

#### 2963. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21831-L21833` → after: `L21918-L21920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21918-L21920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21918-L21920) · [Before (L21831-L21833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21831-L21833)

```diff
-               const mW = xW.d.getTexture(OW, AW.g.BLOCK).url;
-               WW.ZZ.x_(OW, {
-                 I3: [mW],
+               const yR = wR.b.getTexture(GR, eR.k.BLOCK).url;
+               RR.KK.E1(GR, {
+                 B3: [yR],
```

#### 2964. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21835-L21837` → after: `L21922-L21924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21922-L21924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21922-L21924) · [Before (L21835-L21837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21835-L21837)

```diff
-                 l_: !1,
-                 i_: EW,
-                 Kj: Di(iW.textureInfo)
+                 Y1: !1,
+                 I3: tR,
+                 ML: oJ(JR.textureInfo)
```

#### 2965. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21842` → after: `L21929-L21933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21929-L21933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21929-L21933) · [Before (L21842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21842)

```diff
-             WW.ZZ.x_(OW, {
+             RR.KK.E1(GR, {
+               B3: MR,
+               K8: pR,
+               W8: gR,
+               Z8: yR,
```

#### 2966. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21844-L21848` → after: `L21935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21935) · [Before (L21844-L21848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21844-L21848)

```diff
-               E_: JW,
-               N_: hW,
-               m_: mW,
-               i_: EW,
-               Kj: HW
+               ML: bR
```

#### 2967. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21851-L21854` → after: `L21938-L21941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21938-L21941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21938-L21941) · [Before (L21851-L21854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21851-L21854)

```diff
-             const mW = xW.d.getTexture(iW.textureInfo, AW.g.BLOCK).url;
-             WW.ZZ.x_(OW, {
-               I3: [mW],
-               i_: EW
+             const yR = wR.b.getTexture(JR.textureInfo, eR.k.BLOCK).url;
+             RR.KK.E1(GR, {
+               B3: [yR],
+               I3: tR
```

#### 2968. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21857-L21861` → after: `L21944-L21948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21944-L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21944-L21948) · [Before (L21857-L21861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21857-L21861)

```diff
-           WW.ZZ.nB(iW.id, {
-             material: void 0 === mW ? OW : mW,
-             dl: iW.dl,
-             solid: null !== (fW = iW.solid) && void 0 !== fW ? fW : !iW.dl,
-             sj: iW.sj,
+           RR.KK.Dk(JR.id, {
+             material: void 0 === yR ? GR : yR,
+             Nr: JR.Nr,
+             solid: null !== (mR = JR.solid) && void 0 !== mR ? mR : !JR.Nr,
+             AL: JR.AL,
```

#### 2969. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21863-L21866` → after: `L21950-L21953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21950-L21953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21950-L21953) · [Before (L21863-L21866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21863-L21866)

```diff
-             oA: null !== (CW = iW.oA) && void 0 !== CW ? CW : null,
-             Mj: null !== (XW = iW.Mj) && void 0 !== XW ? XW : null,
-             dA: iW.dA,
-             lD: ui(OW, iW.model)
+             ze: null !== (zR = JR.ze) && void 0 !== zR ? zR : null,
+             CL: null !== (SR = JR.CL) && void 0 !== SR ? SR : null,
+             Se: JR.Se,
+             mH: vJ(GR, JR.model)
```

#### 2970. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21868` → after: `L21955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21955) · [Before (L21868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21868)

```diff
-         }(0, NW.H)(OW, iW.id, WW.TZ.bD(), void 0)
+         }(0, uR.I)(GR, JR.id, RR.lK.jH(), void 0)
```

#### 2971. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21870` → after: `L21957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21957) · [Before (L21870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21870)

```diff
-       for (const OW in mW.t) {
+       for (const GR in yR.s) {
```

#### 2972. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21872-L21873` → after: `L21959-L21960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21959-L21960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21959-L21960) · [Before (L21872-L21873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21872-L21873)

```diff
-         const iW = mW.t[OW];
-         await (0, gi.m)(`item ${OW}`), (0, NW.H)(OW, iW.id, WW.TZ.bD(), iW.type)
+         const JR = yR.s[GR];
+         await (0, HJ.q)(`item ${GR}`), (0, uR.I)(GR, JR.id, RR.lK.jH(), JR.type)
```

#### 2973. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21875` → after: `L21962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21962) · [Before (L21875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21875)

```diff
-       return await (0, gi.m)("block overlays"),
+       return await (0, HJ.q)("block overlays"),
```

#### 2974. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21877` → after: `L21964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21964) · [Before (L21877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21877)

```diff
-           const iW = WW.TZ.bD();
+           const JR = RR.lK.jH();
```

#### 2975. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21880` → after: `L21967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21967) · [Before (L21880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21880)

```diff
-             const EW = xW.d.getTexture(`destroy_stage_${mW}`, AW.g.BLOCK).url,
+             const tR = wR.b.getTexture(`destroy_stage_${yR}`, eR.k.BLOCK).url,
```

#### 2976. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21882-L21883` → after: `L21969-L21970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21969-L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21969-L21970) · [Before (L21882-L21883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21882-L21883)

```diff
-                 wrapU: SW.e.clamp,
-                 wrapV: SW.e.clamp,
+                 wrapU: XR.c.clamp,
+                 wrapV: XR.c.clamp,
```

#### 2977. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21886` → after: `L21973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21973) · [Before (L21886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21886)

```diff
-               PW = (0, SW.x)(iW, {
+               ZR = (0, XR.v)(JR, {
```

#### 2978. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21890` → after: `L21977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21977) · [Before (L21890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21890)

```diff
-                 samplingMode: SW.k.nearestNearestMipLinear,
+                 samplingMode: XR.f.nearestNearestMipLinear,
```

#### 2979. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21894` → after: `L21981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21981) · [Before (L21894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21894)

```diff
-                 transparencyMode: oi.n.alphaTest,
+                 transparencyMode: OJ.v.alphaTest,
```

#### 2980. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21900-L21901` → after: `L21987-L21988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21987-L21988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21987-L21988) · [Before (L21900-L21901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21900-L21901)

```diff
-                 name: `breakingBoxTexture${mW}`,
-                 rb: iW,
+                 name: `breakingBoxTexture${yR}`,
+                 tL: JR,
```

#### 2981. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21905-L21906` → after: `L21992-L21993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21992-L21993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21992-L21993) · [Before (L21905-L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21905-L21906)

```diff
-             null === (OW = WW.TZ.Lb) || void 0 === OW || OW.prepareTexture(PW);
-             const wW = (0, yW.r)(WW.TZ, `breakingBox${mW}`, (0, TW.d)({
+             null === (GR = RR.lK.La) || void 0 === GR || GR.prepareTexture(ZR);
+             const fR = (0, BR.m)(RR.lK, `breakingBox${yR}`, (0, lR.e)({
```

#### 2982. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21911` → after: `L21998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L21998) · [Before (L21911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21911)

```diff
-             wW.material = cW, WW.TZ.Wj(wW), wW.WK(!1), WW.TZ.AcW.push(wW)
+             fR.material = iR, RR.lK.iL(fR), fR.JA(!1), RR.lK.JfR.push(fR)
```

#### 2983. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21916-L21917` → after: `L22003-L22004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22003-L22004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22003-L22004) · [Before (L21916-L21917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21916-L21917)

```diff
-             rb: iW
-           } = WW.TZ, OW = (0, TW.d)({
+             tL: JR
+           } = RR.lK, GR = (0, lR.e)({
```

#### 2984. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21922-L21923` → after: `L22009-L22010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22009-L22010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22009-L22010) · [Before (L21922-L21923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21922-L21923)

```diff
-           for (let xW = 0; xW < mW; xW++) EW[4 * xW + 3] = OW.positions[3 * xW + 2] < 0 ? Ci : ei.h;
-           const NW = (0, yW.r)(WW.TZ, "highlight", {
+           for (let wR = 0; wR < yR; wR++) tR[4 * wR + 3] = GR.positions[3 * wR + 2] < 0 ? IJ : NJ.j;
+           const uR = (0, BR.m)(RR.lK, "highlight", {
```

#### 2985. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21930` → after: `L22017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22017) · [Before (L21930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21930)

```diff
-               ...di.d,
+               ...xJ.e,
```

#### 2986. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21934` → after: `L22021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22021) · [Before (L21934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21934)

```diff
-               transparencyMode: oi.n.alphaBlend
+               transparencyMode: OJ.v.alphaBlend
```

#### 2987. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21938` → after: `L22025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22025) · [Before (L21938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21938)

```diff
-             rb: iW,
+             tL: JR,
```

#### 2988. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21944` → after: `L22031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22031) · [Before (L21944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21944)

```diff
-               rb: iW,
+               tL: JR,
```

#### 2989. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21947` → after: `L22034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22034) · [Before (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21947)

```diff
-             cW = ei.k,
+             iR = NJ.m,
```

#### 2990. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21950` → after: `L22037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22037) · [Before (L21950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21950)

```diff
-               const PW = (0, yW.r)(WW.TZ, iW, (0, TW.f)({
+               const ZR = (0, BR.m)(RR.lK, JR, (0, lR.k)({
```

#### 2991. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21957-L21960` → after: `L22044-L22047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22044-L22047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22044-L22047) · [Before (L21957-L21960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21957-L21960)

```diff
-           for (const xW of ZW) xW.material = LW, xW.parent = NW, xW.Fb = !1, WW.TZ.Wj(xW);
-           NW.Fb = !1, NW.pA = !0, NW.XA = !0, WW.TZ.Wj(NW), NW.metadata.JcW = () => {
-             (0, RW.e)(WW, ZW, NW.YZ.x, NW.YZ.y, ei.k, ei.q)
-           }, NW.WK(!1), WW.TZ.lcW = NW
+           for (const wR of KR) wR.material = qR, wR.parent = uR, wR.ZL = !1, RR.lK.iL(wR);
+           uR.ZL = !1, uR.Qe = !0, uR.se = !0, RR.lK.iL(uR), uR.metadata.rfR = () => {
+             (0, ER.e)(RR, KR, uR.MK.x, uR.MK.y, NJ.m, NJ.q)
+           }, uR.JA(!1), RR.lK.RfR = uR
```

#### 2992. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21964-L21965` → after: `L22051-L22052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22051-L22052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22051-L22052) · [Before (L21964-L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21964-L21965)

```diff
-             rb: iW
-           } = WW.TZ, OW = (0, yW.r)(WW.TZ, "floating", (0, TW.f)({
+             tL: JR
+           } = RR.lK, GR = (0, BR.m)(RR.lK, "floating", (0, lR.k)({
```

#### 2993. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21969` → after: `L22056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22056) · [Before (L21969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21969)

```diff
-             ...di.d,
+             ...xJ.e,
```

#### 2994. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21976` → after: `L22063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22063) · [Before (L21976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21976)

```diff
-             rb: iW,
+             tL: JR,
```

#### 2995. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21979-L21980` → after: `L22066-L22067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22066-L22067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22066-L22067) · [Before (L21979-L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21979-L21980)

```diff
-           }).mirror, OW.rotation.set(-Math.PI / 2, 0, 0), OW.pA = !0, OW.XA = !0, WW.TZ.Wj(OW), OW.Fb = !1, OW.WK(!1), WW.TZ.imW = OW
-         }(WW), tW.l.iZ("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(PW), {
+           }).mirror, GR.rotation.set(-Math.PI / 2, 0, 0), GR.Qe = !0, GR.se = !0, RR.lK.iL(GR), GR.ZL = !1, GR.JA(!1), RR.lK.zyR = GR
+         }(RR), VR.n.JK("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(ZR), {
```

#### 2996. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21987` → after: `L22074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22074) · [Before (L21987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21987)

```diff
-       const EW = cW.x[iW];
+       const tR = iR.y[JR];
```

#### 2997. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21989` → after: `L22076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22076) · [Before (L21989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21989)

```diff
-       const PW = cW.j[iW],
+       const ZR = iR.l[JR],
```

#### 2998. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21995` → after: `L22082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22082) · [Before (L21995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21995)

```diff
-         const mW = cW.j[sW];
+         const yR = iR.l[WR];
```

#### 2999. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21998` → after: `L22085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22085) · [Before (L21998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L21998)

```diff
-           await (0, gi.m)(`block ${sW}`);
+           await (0, HJ.q)(`block ${WR}`);
```

#### 3000. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22000` → after: `L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22087) · [Before (L22000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22000)

```diff
-           let cW = OW.P_;
+           let iR = GR.R7;
```

#### 3001. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22006-L22007` → after: `L22093-L22094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22093-L22094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22093-L22094) · [Before (L22006-L22007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22006-L22007)

```diff
-             } = mW.meta, NW = (0, GW.n)(iW === BW.d.top, OW, null !== EW && void 0 !== EW ? EW : 1);
-             NW !== GW.i && (LW.has(NW.key) || LW.set(NW.key, (() => CW(WW.TZ.bD(), PW, NW))), cW = LW.get(NW.key))
+             } = yR.meta, uR = (0, YR.o)(JR === jR.d.top, GR, null !== tR && void 0 !== tR ? tR : 1);
+             uR !== YR.h && (qR.has(uR.key) || qR.set(uR.key, (() => zR(RR.lK.jH(), ZR, uR))), iR = qR.get(uR.key))
```

#### 3002. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22010-L22012` → after: `L22097-L22099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22097-L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22097-L22099) · [Before (L22010-L22012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22010-L22012)

```diff
-             iW !== ZW && (wW.has(iW) || wW.set(iW, (() => fW(WW.TZ.bD(), mW))), cW = wW.get(iW))
-           } else(0, IW.w)(PW) ? cW = Zi(iW, mW.meta.metaStr) : (0, xi.y)(PW) && (cW = Ki(iW, mW.meta.rot, mW.meta.open));
-           WW.ZZ.nB(mW.id, {
+             JR !== KR && (fR.has(JR) || fR.set(JR, (() => mR(RR.lK.jH(), yR))), iR = fR.get(JR))
+           } else(0, kR.G)(ZR) ? iR = KJ(JR, yR.meta.metaStr) : (0, wJ.x)(ZR) && (iR = CJ(JR, yR.meta.rot, yR.meta.open));
+           RR.KK.Dk(yR.id, {
```

#### 3003. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22014-L22015` → after: `L22101-L22102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22101-L22102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22101-L22102) · [Before (L22014-L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22014-L22015)

```diff
-             P_: cW,
-             rY: EW,
+             R7: iR,
+             qB: tR,
```

#### 3004. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22017-L22023` → after: `L22104-L22110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22104-L22110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22104-L22110) · [Before (L22017-L22023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22017-L22023)

```diff
-             sj: mW.sj,
-             oA: null !== (lW = null !== (AW = mW.oA) && void 0 !== AW ? AW : OW.oA) && void 0 !== lW ? lW : null,
-             Mj: null !== (bW = null !== (jW = mW.Mj) && void 0 !== jW ? jW : OW.Mj) && void 0 !== bW ? bW : null,
-             dA: null !== (UW = mW.dA) && void 0 !== UW ? UW : OW.dA,
-             lD: ui(sW, null !== (kW = mW.model) && void 0 !== kW ? kW : PW.model),
-             B3: () => Qi(PW, mW)
-           }), (0, NW.H)(sW, mW.id, WW.TZ.bD(), void 0)
+             AL: yR.AL,
+             ze: null !== (rR = null !== (eR = yR.ze) && void 0 !== eR ? eR : GR.ze) && void 0 !== rR ? rR : null,
+             CL: null !== (aR = null !== (LR = yR.CL) && void 0 !== LR ? LR : GR.CL) && void 0 !== aR ? aR : null,
+             Se: null !== (nR = yR.Se) && void 0 !== nR ? nR : GR.Se,
+             mH: vJ(WR, null !== (UR = yR.model) && void 0 !== UR ? UR : ZR.model),
+             X3: () => TJ(ZR, yR)
+           }), (0, uR.I)(WR, yR.id, RR.lK.jH(), void 0)
```

#### 3005. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22031` → after: `L22118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22118) · [Before (L22031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22031)

```diff
-         alpha: ei.o
+         alpha: NJ.p
```

#### 3006. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22036` → after: `L22123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22123) · [Before (L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22036)

```diff
-         TZ: iW
+         lK: JR
```

#### 3007. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22038-L22039` → after: `L22125-L22126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22125-L22126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22125-L22126) · [Before (L22038-L22039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22038-L22039)

```diff
-         rb: OW
-       } = iW, mW = (0, yW.r)(iW, "ezBridgeGhost", (0, TW.d)({
+         tL: GR
+       } = JR, yR = (0, BR.m)(JR, "ezBridgeGhost", (0, lR.e)({
```

#### 3008. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22044` → after: `L22131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22131) · [Before (L22044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22044)

```diff
-         ...di.d,
+         ...xJ.e,
```

#### 3009. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22047-L22048` → after: `L22134-L22135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22134-L22135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22134-L22135) · [Before (L22047-L22048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22047-L22048)

```diff
-         transparencyMode: oi.n.alphaBlend,
-         alpha: ei.h,
+         transparencyMode: OJ.v.alphaBlend,
+         alpha: NJ.j,
```

#### 3010. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22054` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22141) · [Before (L22054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22054)

```diff
-         rb: OW,
+         tL: GR,
```

#### 3011. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22058` → after: `L22145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22145) · [Before (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22058)

```diff
-       const NW = (0, yW.r)(iW, "ezBridgeGhostOutline", (0, zW.i)((0, ei.c)().map((WW => {
+       const uR = (0, BR.m)(JR, "ezBridgeGhostOutline", (0, TR.c)((0, NJ.c)().map((RR => {
```

#### 3012. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22060` → after: `L22147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22147) · [Before (L22060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22060)

```diff
-         return [(0, TW.d)({
+         return [(0, lR.e)({
```

#### 3013. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22066` → after: `L22153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22153) · [Before (L22066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22066)

```diff
-       return NW.Fb = !1, NW.pA = !0, NW.XA = !0, NW.material = (0, sW.b)({
+       return uR.ZL = !1, uR.Qe = !0, uR.se = !0, uR.material = (0, WR.b)({
```

#### 3014. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22068` → after: `L22155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22155) · [Before (L22068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22068)

```diff
-         rb: OW,
+         tL: GR,
```

#### 3015. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22070` → after: `L22157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22157) · [Before (L22070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22070)

```diff
-       }).mirror, NW.parent = mW, iW.Wj(NW), mW.Fb = !1, mW.pA = !0, mW.XA = !0, iW.Wj(mW), mW.WK(!1), mW
+       }).mirror, uR.parent = yR, JR.iL(uR), yR.ZL = !1, yR.Qe = !0, yR.se = !0, JR.iL(yR), yR.JA(!1), yR
```

#### 3016. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22072` → after: `L22159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22159) · [Before (L22072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22072)

```diff
-     const qi = Gi(kW.m),
+     const SJ = dJ(UR.i),
```

#### 3017. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22088-L22089` → after: `L22175-L22176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22175-L22176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22175-L22176) · [Before (L22088-L22089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22088-L22089)

```diff
-                 const PW = uW(`${iW.name}BlkMdl${mW<2?1:2}`);
-                 return PW.Fb = !1, PW.rotation.set(...EW), PW.position.set(...NW), PW.bakeCurrentTransformIntoVertices(), PW.material = OW, PW
+                 const ZR = OR(`${JR.name}BlkMdl${yR<2?1:2}`);
+                 return ZR.ZL = !1, ZR.rotation.set(...tR), ZR.position.set(...uR), ZR.bakeCurrentTransformIntoVertices(), ZR.material = GR, ZR
```

#### 3018. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22091-L22092` → after: `L22178-L22179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22178-L22179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22178-L22179) · [Before (L22091-L22092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22091-L22092)

```diff
-               EW = (0, yW.q)(mW, !1, !1);
-             return EW.Fb = !1, EW
+               tR = (0, BR.l)(yR, !1, !1);
+             return tR.ZL = !1, tR
```

#### 3019. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22103` → after: `L22190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22190) · [Before (L22103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22103)

```diff
-             const OW = (0, jW.d)().getMetaInfo(iW).metaStr;
+             const GR = (0, LR.e)().getMetaInfo(JR).metaStr;
```

#### 3020. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22110-L22111` → after: `L22197-L22198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22197-L22198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22197-L22198) · [Before (L22110-L22111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22110-L22111)

```diff
-             const OW = (0, jW.d)().getMetaInfo(iW);
-             WW.rotation.y = (0, GW.p)(OW.rot, OW.stairsCorner)
+             const GR = (0, LR.e)().getMetaInfo(JR);
+             RR.rotation.y = (0, YR.q)(GR.rot, GR.stairsCorner)
```

#### 3021. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22127` → after: `L22214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22214) · [Before (L22127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22127)

```diff
-               Ui ??= Li(WW, xi.e, Ai);
+               nJ ??= qJ(RR, wJ.d, eJ);
```

#### 3022. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22129` → after: `L22216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22216) · [Before (L22129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22129)

```diff
-                 mW = (0, xi.x)(iW) ? OW.gate : OW.top,
+                 yR = (0, wJ.v)(JR) ? GR.gate : GR.top,
```

#### 3023. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22135` → after: `L22222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22222) · [Before (L22135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22135)

```diff
-                 of xi.h) {
+                 of wJ.i) {
```

#### 3024. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22137` → after: `L22224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22224) · [Before (L22137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22137)

```diff
-                 EW.set(OW, (() => wi(WW, iW, `${iW.name}|${OW}FenceGateModel`, ji(mW, NW, PW))))
+                 tR.set(GR, (() => fJ(RR, JR, `${JR.name}|${GR}FenceGateModel`, LJ(yR, uR, ZR))))
```

#### 3025. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22147` → after: `L22234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22234) · [Before (L22147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22147)

```diff
-             (0, jW.d)().getMetaInfo(iW).halfblockPlacement === BW.d.top && (WW.rotation.x = Math.PI)
+             (0, LR.e)().getMetaInfo(JR).halfblockPlacement === jR.d.top && (RR.rotation.x = Math.PI)
```

#### 3026. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22155-L22158` → after: `L22242-L22245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22242-L22245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22242-L22245) · [Before (L22155-L22158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22155-L22158)

```diff
-               NW = cW.j[iW].name,
-               PW = null !== (OW = NW.split("|")[2]) && void 0 !== OW ? OW : "rot1",
-               LW = "open" === (null !== (mW = NW.split("|")[3]) && void 0 !== mW ? mW : "closed");
-             "rot1" === PW && LW ? (WW.position.x += EW, WW.rotation.y += 3 * Math.PI / 2) : "rot1" !== PW || LW ? "rot2" === PW && LW ? WW.position.z -= EW : "rot2" !== PW || LW ? "rot3" === PW && LW ? (WW.position.x -= EW, WW.rotation.y += Math.PI / 2) : "rot3" !== PW || LW ? "r … [truncated]
+               uR = iR.l[JR].name,
+               ZR = null !== (GR = uR.split("|")[2]) && void 0 !== GR ? GR : "rot1",
+               qR = "open" === (null !== (yR = uR.split("|")[3]) && void 0 !== yR ? yR : "closed");
+             "rot1" === ZR && qR ? (RR.position.x += tR, RR.rotation.y += 3 * Math.PI / 2) : "rot1" !== ZR || qR ? "rot2" === ZR && qR ? RR.position.z -= tR : "rot2" !== ZR || qR ? "rot3" === ZR && qR ? (RR.position.x -= tR, RR.rotation.y += Math.PI / 2) : "rot3" !== ZR || qR ? "r … [truncated]
```

#### 3027. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22165-L22166` → after: `L22252-L22253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22252-L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22252-L22253) · [Before (L22165-L22166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22165-L22166)

```diff
-             const mW = cW.j[iW].name,
-               EW = "open" === (null !== (OW = mW.split("|")[3]) && void 0 !== OW ? OW : "closed"),
+             const yR = iR.l[JR].name,
+               tR = "open" === (null !== (GR = yR.split("|")[3]) && void 0 !== GR ? GR : "closed"),
```

#### 3028. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22170-L22171` → after: `L22257-L22258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22257-L22258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22257-L22258) · [Before (L22170-L22171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22170-L22171)

```diff
-               const iW = null !== (PW = mW.split("|")[2]) && void 0 !== PW ? PW : "rot1";
-               "rot4" === iW ? (WW.position.x += NW, WW.rotation.y += 3 * Math.PI / 2) : "rot1" === iW ? WW.position.z -= NW : "rot2" === iW ? (WW.position.x -= NW, WW.rotation.y += Math.PI / 2) : "rot3" === iW && (WW.position.z += NW, WW.rotation.y += Math.PI)
+               const JR = null !== (ZR = yR.split("|")[2]) && void 0 !== ZR ? ZR : "rot1";
+               "rot4" === JR ? (RR.position.x += uR, RR.rotation.y += 3 * Math.PI / 2) : "rot1" === JR ? RR.position.z -= uR : "rot2" === JR ? (RR.position.x -= uR, RR.rotation.y += Math.PI / 2) : "rot3" === JR && (RR.position.z += uR, RR.rotation.y += Math.PI)
```

#### 3029. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22192` → after: `L22279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22279) · [Before (L22192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22192)

```diff
-       if (!OW) throw new Error(`Unknown block mesh type: ${WW}`);
+       if (!GR) throw new Error(`Unknown block mesh type: ${RR}`);
```

#### 3030. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22204` → after: `L22291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22291) · [Before (L22204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22204)

```diff
-       return void 0 !== WW.model && (0, kW.o)(iW) === WW
+       return void 0 !== RR.model && (0, UR.l)(JR) === RR
```

#### 3031. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22208` → after: `L22295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22295) · [Before (L22208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22208)

```diff
-       const iW = cW.j[WW],
+       const JR = iR.l[RR],
```

#### 3032. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22210` → after: `L22297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22297) · [Before (L22210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22210)

```diff
-         EW = cW.j[OW],
+         tR = iR.l[GR],
```

#### 3033. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22219` → after: `L22306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22306) · [Before (L22219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22219)

```diff
-       } = cW.j[iW];
+       } = iR.l[JR];
```

#### 3034. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22227-L22228` → after: `L22314-L22315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22314-L22315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22314-L22315) · [Before (L22227-L22228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22227-L22228)

```diff
-           rotation: KW.fA.Zero(),
-           YZ: KW.fA.One()
+           rotation: CR.Fe.Zero(),
+           MK: CR.Fe.One()
```

#### 3035. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22237-L22239` → after: `L22324-L22326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22324-L22326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22324-L22326) · [Before (L22237-L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22237-L22239)

```diff
-       iO(WW, iW), void 0 !== cW.j[iW].rotatableOffsetAmt && (mW = cW.j[iW].rotatableOffsetAmt);
-       const EW = null !== (OW = cW.j[iW].name.split("|")[2]) && void 0 !== OW ? OW : "rot1";
-       "rot1" === EW ? WW.position.z -= mW : "rot2" === EW ? WW.position.x -= mW : "rot3" === EW ? WW.position.z += mW : "rot4" === EW && (WW.position.x += mW)
+       hJ(RR, JR), void 0 !== iR.l[JR].rotatableOffsetAmt && (yR = iR.l[JR].rotatableOffsetAmt);
+       const tR = null !== (GR = iR.l[JR].name.split("|")[2]) && void 0 !== GR ? GR : "rot1";
+       "rot1" === tR ? RR.position.z -= yR : "rot2" === tR ? RR.position.x -= yR : "rot3" === tR ? RR.position.z += yR : "rot4" === tR && (RR.position.x += yR)
```

#### 3036. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22244-L22245` → after: `L22331-L22332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22331-L22332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22331-L22332) · [Before (L22244-L22245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22244-L22245)

```diff
-       const EW = cW.j[iW],
-         NW = null !== (OW = EW.name.split("|")[2]) && void 0 !== OW ? OW : "rot1",
+       const tR = iR.l[JR],
+         uR = null !== (GR = tR.name.split("|")[2]) && void 0 !== GR ? GR : "rot1",
```

#### 3037. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22250-L22251` → after: `L22337-L22338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22337-L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22337-L22338) · [Before (L22250-L22251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22250-L22251)

```diff
-         } = null !== (mW = EW.customModelInfo) && void 0 !== mW ? mW : {},
-         tW = (0, kW.j)((0, kW.o)(EW));
+         } = null !== (yR = tR.customModelInfo) && void 0 !== yR ? yR : {},
+         VR = (0, UR.g)((0, UR.l)(tR));
```

#### 3038. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22265` → after: `L22352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22352) · [Before (L22265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22265)

```diff
-     const ZO = [0, 1, 8, 255, "d", 177, 3, "c", "length", 4, "undefined", void 0, 123, 63, 6, "fromCodePoint", 7, 12, "push", "a", "b", "h", 5, 204, 2, 31, 209, "g", 91, 8191, 88, 13, 14, 241, 152, 40, "f", !0, "i", 234, 192, 127, "e", 233, !1];
+     const fG = ["b", 0, 1, 8, 3, 87, 2, 7, 5, "f", "d", 255, "length", "undefined", void 0, "c", 233, 180, 63, 6, "fromCodePoint", 12, "push", "a", "g", 91, "e", 187, 8191, 88, 13, 14, 4, 22, 105, "h", 185, 184, 153, 96, 110, 130, "k", 9, 10, 93, 108, 193, 240, 237, !1, !0, 127,  … [truncated]
```

#### 3039. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22268` → after: `L22355-L22366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22355-L22366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22355-L22366) · [Before (L22268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22268)

```diff
-       return WW[ZO[8]] = ZO[1], typeof NO !== ZO[10] && NO ? (new NO).decode(new PO(WW[ZO[0]])) : typeof LO !== ZO[10] && LO ? LO.from(WW[ZO[0]]).toString("utf-8") : tO(WW[ZO[0]])
+       return RR[fG[12]] = fG[2], typeof RG[RR[fG[1]]] === fG[13] ? RG[RR[fG[1]]] = function(...RR) {
+         for (rG(RR[fG[12]] = fG[2], RR[-fG[5]] = 'OZA7.Bzh;eM9g%kRC@f+~?P|n)u#J}tbD8w4*,lNy"EF1d:/v^Y2cx[0T63>`U5QVsi=G{p]HaKo!q&rmSjIL$(_WX<', RR[fG[0]] = "" + (RR[fG[1]] || ""), RR[fG[4]] = RR[fG[0]].length, RR[fG[10]] = [], RR[fG[8]] = fG[1], RR[fG[9]] = fG[1], RR[fG[7]] = -fG … [truncated]
+           if (RR[-fG[6]] = RR[-fG[5]].indexOf(RR[fG[0]][RR[fG[3]]]), RR[-fG[6]] !== -fG[2])
+             if (RR[fG[7]] < fG[1]) RR[fG[7]] = RR[-fG[6]];
+             else {
+               rG(RR[fG[7]] += RR[-fG[6]] * fG[25], RR[fG[8]] |= RR[fG[7]] << RR[fG[9]], RR[fG[9]] += (RR[fG[7]] & fG[28]) > fG[29] ? fG[30] : fG[31]);
+               do {
+                 rG(RR[fG[10]].push(RR[fG[8]] & fG[11]), RR[fG[8]] >>= fG[3], RR[fG[9]] -= fG[3])
+               } while (RR[fG[9]] > fG[7]);
+               RR[fG[7]] = -fG[2]
+             } return RR[fG[7]] > -fG[2] && RR[fG[10]].push((RR[fG[8]] | RR[fG[7]] << RR[fG[9]]) & fG[11]), KG(RR[fG[10]])
+       }(JG[RR[fG[1]]]) : RG[RR[fG[1]]]
```

#### 3040. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22271-L22272` → after: `L22369-L22374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22369-L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22369-L22374) · [Before (L22271-L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22271-L22272)

```diff
-     function lO() {}
- 
+     function KG(...RR) {
+       return RR[fG[12]] = fG[2], typeof yG !== fG[13] && yG ? (new yG).decode(new tG(RR[fG[1]])) : typeof uG !== fG[13] && uG ? uG.from(RR[fG[1]]).toString("utf-8") : iG(RR[fG[1]])
+     }
+ 
+     function wG() {}
+ 
```

#### 3041. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22276-L22277` → after: `L22378-L22379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22378-L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22378-L22379) · [Before (L22276-L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22276-L22277)

```diff
-     AO(OO = {}, mO = ["5=8G1Z>", "$%CZjUzm&M|t.*G}Jg^:J[3LnBd`p^Al", "ejp&b=re>E7T}BB", "]%j/n#(~u@6.d1YpI`{Jm30+Q6KJI_siW[ZRg0=eIM.", ",NDJ*d]O+E<UnPljtA]5jqP?vkHjr`A(", "Kpx{ZE&[SD*rRk^l[30&6@0toBW2y_Yd[N2pkdO~ah9;d(z", "l=<{`Z3?<z8aO85rf>", "3HY/79#M8zprzkUv`}U/W{>", "K)G5Wjuz … [truncated]
-       AO(WW[ZO[8]] = ZO[0], WW[ZO[7]] = [function() {
+     rG(RG = {}, JG = ["teDepxEn}f##3U8ne|V^+l9)~6ez/kelo9_^>::3:T#", "%,$u_/`nR?qxRAM++26DUwOtzV(6.7s|rJpb!5>%.", "mkpcrYJg#~0pnIrNobtJWl!3T%_:JI;+Y[htAw#4q;Vp,C.n", "dwA2VN]2_3GaX.", "Z}/!Q`N+e~v@|ub@VzA", '@RJK_]P*YRSQRuitt}#}+5x"^g?76`u"', "<aBhYp[fiRY{%`bEc~(]:3R+h", '#uSzJ]a … [truncated]
+       var RR, JR, GR, yR = [function() {
```

#### 3042. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22285` → after: `L22387-L22388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22387-L22388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22387-L22388) · [Before (L22285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22285)

```diff
-       }], WW[ZO[4]] = ZO[11], WW[-ZO[5]] = []);
+       }];
+       rG(RR = void 0, JR = []);
```

#### 3043. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22287` → after: `L22390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22390) · [Before (L22287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22287)

```diff
-         AO(WW[ZO[4]] = Object, WW[-ZO[5]][ZO[18]]("".__proto__.constructor.name))
+         rG(RR = Object, JR[fG[22]]("".__proto__.constructor.name))
```

#### 3044. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22289-L22292` → after: `L22392-L22396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22392-L22396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22392-L22396) · [Before (L22289-L22292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22289-L22292)

```diff
-       WW: for (WW[ZO[6]] = ZO[0]; WW[ZO[6]] < WW[ZO[7]][ZO[8]]; WW[ZO[6]]++) try {
-         for (WW[ZO[4]] = WW[ZO[7]][WW[ZO[6]]](), WW[ZO[9]] = ZO[0]; WW[ZO[9]] < WW[-ZO[5]][ZO[8]]; WW[ZO[9]]++)
-           if (typeof WW[ZO[4]][WW[-ZO[5]][WW[ZO[9]]]] === ZO[10]) continue WW;
-         return WW[ZO[4]]
+       RR: for (GR = fG[1]; GR < yR[fG[12]]; GR++) try {
+         var tR;
+         for (RR = yR[GR](), tR = fG[1]; tR < JR[fG[12]]; tR++)
+           if (typeof RR[JR[tR]] === fG[13]) continue RR;
+         return RR
```

#### 3045. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22294-L22296` → after: `L22398-L22400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22398-L22400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22398-L22400) · [Before (L22294-L22296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22294-L22296)

```diff
-       return WW[ZO[4]] || this
-     }() || {}, NO = EO.TextDecoder, PO = EO.Uint8Array, LO = EO.OZ, cO = EO.String || String, wO = EO.Array || Array, tO = function(...WW) {
-       return AO(WW[ZO[8]] = ZO[0], WW[ZO[19]] = new wO(128), WW[ZO[20]] = cO[ZO[15]] || cO.fromCharCode, WW[ZO[7]] = []),
+       return RR || this
+     }() || {}, yG = GG.TextDecoder, tG = GG.Uint8Array, uG = GG.GK, ZG = GG.String || String, qG = GG.Array || Array, iG = function(...RR) {
+       return rG(RR[fG[12]] = fG[1], RR[fG[23]] = new qG(fG[53]), RR[fG[0]] = ZG[fG[20]] || ZG.fromCharCode, RR[fG[15]] = []),
```

#### 3046. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22298-L22299` → after: `L22402-L22403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22402-L22403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22402-L22403) · [Before (L22298-L22299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22298-L22299)

```diff
-           for (AO(iW[ZO[8]] = ZO[1], iW[ZO[1]] = ZO[11], iW[-ZO[12]] = ZO[11], iW[ZO[6]] = iW[ZO[0]][ZO[8]], WW[ZO[7]][ZO[8]] = ZO[0]), iW[ZO[4]] = ZO[0]; iW[ZO[4]] < iW[ZO[6]];) AO(iW[-ZO[12]] = iW[ZO[0]][iW[ZO[4]]++], iW[-ZO[12]] <= ZO[41] ? iW[ZO[1]] = iW[-ZO[12]] : iW[-ZO[12] … [truncated]
-           return WW[ZO[7]].join("")
+           for (rG(JR[fG[12]] = fG[2], JR[-fG[17]] = fG[14], JR[-fG[16]] = fG[14], JR[fG[15]] = JR[fG[1]][fG[12]], RR[fG[15]][fG[12]] = fG[1]), JR[fG[10]] = fG[1]; JR[fG[10]] < JR[fG[15]];) rG(JR[-fG[16]] = JR[fG[1]][JR[fG[10]]++], JR[-fG[16]] <= fG[52] ? JR[-fG[17]] = JR[-fG[16]] … [truncated]
+           return RR[fG[15]].join("")
```

#### 3047. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22302` → after: `L22406-L22424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22406-L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22406-L22424) · [Before (L22302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22302)

```diff
-       if (ZO[37]) {
+       if (VG(94) + "L" in wG && function(...RR) {
+           function JR(...RR) {
+             for (rG(RR[fG[12]] = fG[2], RR[fG[23]] = 'CAsMkPLWdqcGflnoJjIBOhpmXVaHEYew0SFU{gr7RtD;K9^Z8TQviN~/=1)#|_"&:!,2[x.}3@y+z?(>]u4$65%`<*b', RR[fG[6]] = "" + (RR[fG[1]] || ""), RR[fG[4]] = RR[fG[6]].length, RR[fG[32]] = [], RR[fG[26]] = fG[1], RR[-fG[27]] = fG[1], RR[fG[24 … [truncated]
+               if (RR[-fG[21]] = RR[fG[23]].indexOf(RR[fG[6]][RR[fG[3]]]), RR[-fG[21]] !== -fG[2])
+                 if (RR[fG[24]] < fG[1]) RR[fG[24]] = RR[-fG[21]];
+                 else {
+                   rG(RR[fG[24]] += RR[-fG[21]] * fG[25], RR[fG[26]] |= RR[fG[24]] << RR[-fG[27]], RR[-fG[27]] += (RR[fG[24]] & fG[28]) > fG[29] ? fG[30] : fG[31]);
+                   do {
+                     rG(RR[fG[32]].push(RR[fG[26]] & fG[11]), RR[fG[26]] >>= fG[3], RR[-fG[27]] -= fG[3])
+                   } while (RR[-fG[27]] > fG[7]);
+                   RR[fG[24]] = -fG[2]
+                 } return RR[fG[24]] > -fG[2] && RR[fG[32]].push((RR[fG[26]] | RR[fG[24]] << RR[-fG[27]]) & fG[11]), KG(RR[fG[32]])
+           }
+ 
+           function GR(...RR) {
+             return RR[fG[12]] = fG[2], typeof RG[RR[fG[1]]] === fG[13] ? RG[RR[fG[1]]] = JR(JG[RR[fG[1]]]) : RG[RR[fG[1]]]
+ ... (3 more added lines; see GitHub link above)
```

#### 3048. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22304-L22306` → after: `L22426-L22428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22426-L22428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22426-L22428) · [Before (L22304-L22306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22304-L22306)

```diff
-           for (AO(WW[ZO[8]] = ZO[1], WW[ZO[1]] = 'u6F.=(#>@H4lSai+Zw"`!?T3$0gyz[pr<nbLGd,1AB^9x:f~5/sVtN8*72Io}{P)c%QJRKWXhUkqY_Ejv&OCD|m];eM', WW[ZO[24]] = "" + (WW[ZO[0]] || ""), WW[ZO[6]] = WW[ZO[24]].length, WW[ZO[4]] = [], WW[-ZO[25]] = ZO[0], WW[ZO[14]] = ZO[0], WW[ZO[27]]  … [truncated]
-             if (WW[-ZO[26]] = WW[ZO[1]].indexOf(WW[ZO[24]][WW[ZO[23]]]), WW[-ZO[26]] !== -ZO[1])
-               if (WW[ZO[27]] < ZO[0]) WW[ZO[27]] = WW[-ZO[26]];
+           for (rG(RR[fG[12]] = fG[2], RR[fG[23]] = 'U].rD$yL/S[n>v&1OV06Cghq:`oJ9wdx2!#IRf3)Kz@,}Xj_ZP=TNk<WF%p?{Hs^Y~BaiEM|*Qu4b+c587G"lAmte(;', RR[fG[0]] = "" + (RR[fG[1]] || ""), RR[-fG[34]] = RR[fG[0]].length, RR[fG[32]] = [], RR[-fG[37]] = fG[1], RR[-fG[38]] = fG[1], RR[fG[7 … [truncated]
+             if (RR[fG[36]] = RR[fG[23]].indexOf(RR[fG[0]][RR[fG[35]]]), RR[fG[36]] !== -fG[2])
+               if (RR[fG[7]] < fG[1]) RR[fG[7]] = RR[fG[36]];
```

#### 3049. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22308` → after: `L22430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22430) · [Before (L22308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22308)

```diff
-                 AO(WW[ZO[27]] += WW[-ZO[26]] * ZO[28], WW[-ZO[25]] |= WW[ZO[27]] << WW[ZO[14]], WW[ZO[14]] += (WW[ZO[27]] & ZO[29]) > ZO[30] ? ZO[31] : ZO[32]);
+                 rG(RR[fG[7]] += RR[fG[36]] * fG[25], RR[-fG[37]] |= RR[fG[7]] << RR[-fG[38]], RR[-fG[38]] += (RR[fG[7]] & fG[28]) > fG[29] ? fG[30] : fG[31]);
```

#### 3050. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22310-L22313` → after: `L22432-L22435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22432-L22435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22432-L22435) · [Before (L22310-L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22310-L22313)

```diff
-                   AO(WW[ZO[4]].push(WW[-ZO[25]] & ZO[3]), WW[-ZO[25]] >>= ZO[2], WW[ZO[14]] -= ZO[2])
-                 } while (WW[ZO[14]] > ZO[16]);
-                 WW[ZO[27]] = -ZO[1]
-               } return WW[ZO[27]] > -ZO[1] && WW[ZO[4]].push((WW[-ZO[25]] | WW[ZO[27]] << WW[ZO[14]]) & ZO[3]), xO(WW[ZO[4]])
+                   rG(RR[fG[32]].push(RR[-fG[37]] & fG[11]), RR[-fG[37]] >>= fG[3], RR[-fG[38]] -= fG[3])
+                 } while (RR[-fG[38]] > fG[7]);
+                 RR[fG[7]] = -fG[2]
+               } return RR[fG[7]] > -fG[2] && RR[fG[32]].push((RR[-fG[37]] | RR[fG[7]] << RR[-fG[38]]) & fG[11]), KG(RR[fG[32]])
```

#### 3051. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22317` → after: `L22439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L22439) · [Before (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L22317)

```diff
-           return iW[ZO[8]] = ZO[1], typeof OO[iW[ZO[0]]] === ZO[10] ? OO[iW[ZO[0]]] = WW(mO[iW[ZO[0]]]) : OO[iW[ZO[0]]]
+           return JR[fG[12]] = fG[2], typeof RG[JR[fG[1]]] === fG[13] ? RG[JR[fG[1]]] = RR(JG[JR[fG[1]]]) : RG[JR[fG[1]]]
```
