# Changed — Bundle Modifications Report (Part 052 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `52 / 58` (**374** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (933 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074)

#### 494. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4545` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4836) · [Before (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4545)

```diff
-             return navigator[ti[111] + "tSub"]
+             return navigator[WO[181] + "tSub"]
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4553-L4556` → after: `L4844-L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4844-L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4844-L4847) · [Before (L4553-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4553-L4556)

```diff
-           zz[ti[1]] = ti[6], ti[69];
-           const uz = ti[70];
-           Oi(zz[ti[59]] = ti[19], zz[ti[57]] = uz - ti[0]);
-           const bz = TextDecoder[ti[72] + ti[73]][ti[74]],
+           qq[WO[0]] = WO[6];
+           const Eq = WO[149];
+           aO(qq[WO[77]] = WO[10], qq[-WO[76]] = Eq - WO[1]);
+           const gq = TextDecoder[WO[102] + WO[103]][WO[104]],
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4558-L4560` → after: `L4849-L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4849-L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4849-L4906) · [Before (L4558-L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4558-L4560)

```diff
-               zz[ti[57]]++, zz[ti[57]] === uz && (kn((() => Fz(ti[19]))) && (zz[ti[59]] = ti[17]), zz[ti[57]] = ti[6]);
-               for (var Ez = arguments[ti[1]], nz = new Array(Ez), iz = ti[6]; iz < Ez; iz++) nz[iz] = arguments[iz];
-               return (ti[6], rE[ti[37]])(bz, this, nz)
+               qq[-WO[76]]++, qq[-WO[76]] === Eq && (YO((() => Nq(WO[10]))) && (qq[WO[77]] = WO[46]), qq[-WO[76]] = WO[6]);
+               for (var Yq = arguments[WO[0]], lq = new Array(Yq), Oq = WO[6]; Oq < Yq; Oq++) {
+                 function mq() {
+                   ! function(...qq) {
+                     function Eq(...qq) {
+                       for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = [], qq[WO[78]] = WO[6], qq[WO[19]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[78]] < qq[WO[19]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[78]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79]  … [truncated]
+                       return qq[WO[1]]
+                     }
+ 
+                     function gq(...qq) {
+                       if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[106] + WO[107] + WO[108] + WO[14]))
+                     }
+ 
+                     function Yq(...Eq) {
+                       return Eq[WO[0]] = WO[2], qq[WO[1]](Eq[WO[6]] >> Eq[WO[1]] & WO[26] | WO[27])
+                     }
+ ... (42 more added lines; see GitHub link above)
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4563-L4576` → after: `L4909-L4972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4909-L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4909-L4972) · [Before (L4563-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4563-L4576)

```diff
-             TextDecoder[ti[72] + ti[73]][ti[74]] = Ez
-           })), () => zz[ti[59]] ? ti[2] : ui(((...zz) => (zz[ti[1]] = ti[6], "vNBQXh" in Hi && function(...zz) {
-             Oi(zz[ti[1]] = ti[6], zz[ti[75]] = function(...zz) {
-               if (Oi(zz[ti[1]] = ti[0], zz[ti[13]] = zz[ti[6]].length), zz[ti[13]] < ti[2]) return ti[6];
-               if (Oi(zz[ti[12]] = Math.max(...zz[ti[6]]), zz[ti[22]] = Math.min(...zz[ti[6]])), zz[ti[12]] === zz[ti[22]]) return ti[6];
-               for (Oi(zz[ti[18]] = Array(zz[ti[13]] - ti[0]).fill(Number.MAX_SAFE_INTEGER), zz[ti[76]] = Array(zz[ti[13]] - ti[0]).fill(Number.MIN_SAFE_INTEGER), zz[ti[75]] = Math.ceil((zz[ti[12]] - zz[ti[22]]) / (zz[ti[13]] - ti[0])), zz[ti[48]] = ti[6]), zz[ti[45]] = ti[6]; zz[ … [truncated]
-               for (Oi(zz[ti[69]] = Number.MIN_SAFE_INTEGER, zz[ti[37]] = zz[ti[22]]), zz[ti[21]] = ti[6]; zz[ti[21]] < zz[ti[13]] - ti[0]; zz[ti[21]]++) zz[ti[18]][zz[ti[21]]] === Number.MAX_SAFE_INTEGER && zz[ti[76]][zz[ti[21]]] === Number.MIN_SAFE_INTEGER || Oi(zz[ti[69]] = Mat … [truncated]
-               return zz[ti[69]] = Math.max(zz[ti[69]], zz[ti[12]] - zz[ti[37]]), zz[ti[69]]
-             }, console.log(zz[ti[75]]))
-           }(), TextDecoder[ti[72] + ti[73]][ti[74]] !== Ez ? ti[28] : ti[6])))
-         })() : () => ui((() => Qz[ti[109] + ti[110]]())),
-         ez = (ti[6], ru[ti[125]])(),
-         jz = (ti[6], rE[ti[21]])(ti[4]),
-         Iz = (ti[6], rE[ti[21]])(ti[4]);
+             TextDecoder[WO[102] + WO[103]][WO[104]] = Yq
+           })), () => qq[WO[77]] ? WO[2] : OO(((...qq) => (qq[WO[0]] = WO[6], "oTf6Kx" + WO[64] in NO && function() {
+             ! function(...qq) {
+               function Eq(...qq) {
+                 for (aO(qq[WO[0]] = WO[1], qq[-WO[93]] = [], qq[WO[2]] = WO[6], qq[WO[12]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[2]] < qq[WO[12]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79] && qq[W … [truncated]
+                 return qq[-WO[93]]
+               }
+ 
+               function gq(...Eq) {
+                 for (aO(Eq[WO[0]] = WO[1], Eq[WO[1]] = Eq[WO[6]].length, Eq[WO[2]] = -WO[1], Eq[WO[105]] = WO[3], Eq[WO[13]] = ""); ++Eq[WO[2]] < Eq[WO[1]];) Eq[WO[105]] = Eq[WO[6]][Eq[WO[2]]], Eq[WO[105]] > WO[81] && aO(Eq[WO[105]] -= WO[18], Eq[WO[13]] += qq[WO[20]](Eq[WO[105]] … [truncated]
+                 return Eq[WO[13]]
+               }
+ 
+               function Yq(...qq) {
+                 if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[106] + WO[107] + WO[108] + WO[14]))
+               }
+ ... (48 more added lines; see GitHub link above)
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4580-L4581` → after: `L4976-L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4976-L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4976-L4977) · [Before (L4580-L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4580-L4581)

```diff
-       const kz = (ti[6], rE[ti[21]])(ti[4]),
-         zu = (ti[6], rE[ti[21]])(ti[4]);
+       const qE = (WO[6], tY[WO[52]])(WO[4]),
+         EE = (WO[6], tY[WO[52]])(WO[4]);
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4583` → after: `L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4979) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4583)

```diff
-         bu = (ti[6], rE[ti[21]])(ti[4]);
+         YE = (WO[6], tY[WO[52]])(WO[4]);
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4585` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4981) · [Before (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4585)

```diff
-           Oi(zz[ti[1]] = ti[2], jz[Bz] = zz[ti[6]], Iz[Bz] = zz[ti[0]], Bz++)
+           aO(qq[WO[0]] = WO[2], Kq[Iq] = qq[WO[6]], Cq[Iq] = qq[WO[1]], Iq++)
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4587-L4593` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4983) · [Before (L4587-L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4587-L4593)

```diff
-         nu = (...zz) => (zz[ti[1]] = ti[0], "FXCsfo" in Hi && function(...zz) {
-           Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...zz) {
-             for (Oi(zz[ti[1]] = ti[0], zz[ti[13]] = zz[ti[6]].length, zz[ti[12]] = [], zz[ti[5]] = ti[6]), zz[ti[77]] = ti[6]; zz[ti[77]] < zz[ti[13]]; zz[ti[77]]++) zz[ti[12]].push(zz[ti[77]] !== ti[6] && zz[ti[6]][zz[ti[77]]] > zz[ti[6]][zz[ti[77]] - ti[0]] ? zz[ti[12]][zz[ti[7 … [truncated]
-             for (zz[ti[57]] = zz[ti[13]] - ti[0]; zz[ti[57]] >= ti[6]; zz[ti[57]]--) zz[ti[57]] !== zz[ti[13]] - ti[0] && zz[ti[6]][zz[ti[57]]] > zz[ti[6]][zz[ti[57]] + ti[0]] && (zz[ti[12]][zz[ti[57]]] = Math.max(zz[ti[12]][zz[ti[57]]], zz[ti[12]][zz[ti[57]] + ti[0]] + ti[0])),  … [truncated]
-             return zz[ti[5]]
-           }, console.log(zz[ti[13]]))
-         }(), zz[-ti[78]] = ti[3], (zz[-ti[78]] = (Iz[zz[ti[6]]] ? zu : kz)[jz[zz[ti[6]]]]) !== ti[4] && zz[-ti[78]] !== void ti[6] ? zz[-ti[78]] : -ti[0]),
+         OE = (...qq) => (aO(qq[WO[0]] = WO[1], qq[WO[20]] = WO[3]), (qq[WO[20]] = (Cq[qq[WO[6]]] ? EE : qE)[Kq[qq[WO[6]]]]) !== WO[4] && qq[WO[20]] !== void WO[6] ? qq[WO[20]] : -WO[1]),
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4602-L4603` → after: `L4992-L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4992-L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4992-L4993) · [Before (L4602-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4602-L4603)

```diff
-           [(ti[6], rE[ti[7]])(ti[80] + ti[79]), ti[129]],
-           [(ti[6], rE[ti[7]])(ti[80] + "w="), ti[81]]
+           [(WO[6], tY[WO[7]])(WO[117] + WO[115]), WO[116]],
+           [(WO[6], tY[WO[7]])(WO[117] + "w="), "o"]
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4609-L4611` → after: `L4999-L5001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L4999-L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4999-L5001) · [Before (L4609-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4609-L4611)

```diff
-           [(ti[6], rE[ti[7]])("a3NhZmR1"), ti[82]],
-           [(ti[6], rE[ti[7]])("ZGZnYWFzZGFz"), ti[83]],
-           [du, ti[90]],
+           [(WO[6], tY[WO[7]])("a3NhZmR1"), WO[140]],
+           [(WO[6], tY[WO[7]])("ZGZnYWFzZGFz"), WO[118]],
+           [NE, WO[7]],
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4613` → after: `L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5003) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4613)

```diff
-           [(ti[6], rE[ti[7]])("cW16ZjhrM24="), ti[13]]
+           [(WO[6], tY[WO[7]])("cW16ZjhrM24="), WO[20]]
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4616-L4618` → after: `L5006-L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5006-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5006-L5008) · [Before (L4616-L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4616-L4618)

```diff
-           [Ou, ti[118]],
-           [pu, ti[119]],
-           [(ti[6], rE[ti[7]])("bmI3ZnEy"), ti[12]]
+           [BE, WO[188]],
+           [WE, WO[52]],
+           [(WO[6], tY[WO[7]])("bmI3ZnEy"), WO[16]]
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4621` → after: `L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5011) · [Before (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4621)

```diff
-         Ku = (ti[6], rE[ti[7]])("bWtxN3" + ti[79]),
+         jE = (WO[6], tY[WO[7]])("bWtxN3" + WO[115]),
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4624` → after: `L5014-L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5014-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5014-L5151) · [Before (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4624)

```diff
-           zz[ti[1]] = ti[6];
+           qq[WO[0]] = WO[6], "RjG34n" + WO[116] in NO && function(...qq) {
+             aO(qq[WO[0]] = WO[6], qq[-WO[138]] = function(...qq) {
+               function Eq(...qq) {
+                 return qq[WO[0]] = WO[1], xq(Oq(uq(qq[WO[6]])))
+               }
+ 
+               function gq(...qq) {
+                 return qq[WO[0]] = WO[2], xq(mq(uq(qq[WO[6]]), uq(qq[WO[1]])))
+               }
+ 
+               function Yq(...qq) {
+                 return qq[WO[0]] = WO[2], Aq(mq(uq(qq[WO[6]]), uq(qq[WO[1]])))
+               }
+ 
+               function lq(...qq) {
+                 return qq[WO[0]] = WO[5], cq(mq(uq(qq[WO[6]]), uq(qq[WO[1]])), qq[WO[2]])
+ ... (122 more added lines; see GitHub link above)
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4626` → after: `L5153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5153) · [Before (L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4626)

```diff
-             return zz[ti[84]] = ti[3], (zz[ti[84]] = nz[(ti[6], rE[ti[7]])("V2ViU29ja2V0")]) === ti[4] || zz[ti[84]] === void ti[6] ? void ti[6] : zz[ti[84]][ti[72] + ti[73]]
+             return qq[WO[139]] = WO[3], (qq[WO[139]] = lq[(WO[6], tY[WO[7]])("V2ViU29ja2V0")]) === WO[4] || qq[WO[139]] === void WO[6] ? void WO[6] : qq[WO[139]][WO[102] + WO[103]]
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4628-L4631` → after: `L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5155) · [Before (L4628-L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4628-L4631)

```diff
-             function uz(...zz) {
-               zz[ti[1]] = ti[6]
-             }
-             return "vhqmrL" + ti[37] in Hi && uz(), ti[3]
+             return WO[3]
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4634-L4636` → after: `L5158-L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5158-L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5158-L5160) · [Before (L4634-L4636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4634-L4636)

```diff
-         fu = ["send", "close", "addEventListener", "removeEventListener", ti[98] + ti[97] + ti[90]],
-         su = ["onmessage", "onopen", "onclos" + ti[57], "onerro" + ti[82]];
-       let ou = ti[19];
+         PE = ["send", "close", "addEventListener", "removeEventListener", WO[177] + WO[176] + WO[7]],
+         QE = ["onmessage", "onopen", "onclos" + WO[14], "onerro" + WO[140]];
+       let yE = WO[10];
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4638` → after: `L5162-L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5162-L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5162-L5171) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4638)

```diff
-           zz[ti[1]] = ti[6];
+           qq[WO[0]] = WO[6], "E3xyLI" + WO[14] in NO && function(...qq) {
+             aO(qq[WO[0]] = WO[6], qq[WO[77]] = function(...Eq) {
+               return aO(Eq[WO[0]] = WO[2], Eq[WO[2]] = [], Eq[WO[16]] = Eq[WO[6]].length, Eq[WO[6]].sort(((qq, Eq) => qq - Eq)), qq[-WO[141]](Eq[WO[2]], [], WO[6], Eq[WO[16]], Eq[WO[6]], Eq[WO[1]])), Eq[WO[2]]
+             }, qq[-WO[141]] = function(...Eq) {
+               if (aO(Eq[WO[0]] = WO[24], Eq[WO[58]] = WO[4]), !(Eq[WO[50]] < WO[6])) {
+                 if (Eq[WO[50]] === WO[6]) return Eq[WO[6]].push(Eq[WO[1]]);
+                 for (Eq[-WO[132]] = Eq[WO[2]]; Eq[-WO[132]] < Eq[WO[5]] && !(Eq[WO[19]][Eq[-WO[132]]] > Eq[WO[50]]); Eq[-WO[132]]++) Eq[-WO[132]] > Eq[WO[2]] && Eq[WO[19]][Eq[-WO[132]]] === Eq[WO[19]][Eq[-WO[132]] - WO[1]] || aO(Eq[WO[58]] = Array.from(Eq[WO[1]]), Eq[WO[58]].push … [truncated]
+               }
+             }, console.log(qq[WO[77]]))
+           }();
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4641-L4646` → after: `L5174-L5204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5174-L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5174-L5204) · [Before (L4641-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4641-L4646)

```diff
-             if (Xu !== ti[3] && (ti[6], rE.O)(bz) !== Xu) return ti[17];
-             for (let zz = ti[6]; zz < fu[ti[1]]; zz++)
-               if ((ti[6], rE[ti[37]])(rE[ti[91]], bz, [fu[zz]])) return ti[17];
-             for (let zz = ti[6]; zz < su[ti[1]]; zz++)
-               if (bz[su[zz]] !== ti[4] && bz[su[zz]] !== ti[3]) return ti[17];
-             return ti[19]
+             if (oE !== WO[3] && (WO[6], tY.R)(gq) !== oE) return WO[46];
+             for (let qq = WO[6]; qq < PE[WO[0]]; qq++)
+               if ((WO[6], tY[WO[75]])(tY[WO[142]], gq, [PE[qq]])) {
+                 function Eq(...qq) {
+                   aO(qq[WO[0]] = WO[6], qq[WO[143]] = function(...Eq) {
+                     return aO(Eq[WO[0]] = WO[1], Eq[WO[1]] = []), (Eq[WO[6]] === WO[1] || Eq[WO[6]] >= WO[19]) && qq[WO[144]](Eq[WO[1]], [], Eq[WO[6]], WO[6]), Eq[WO[1]]
+                   }, qq[WO[144]] = function(...Eq) {
+                     for (Eq[WO[0]] = WO[19], Eq[-WO[25]] = Eq[WO[5]]; Eq[-WO[25]] < Eq[WO[2]]; Eq[-WO[25]]++) {
+                       if (Eq[WO[1]].length !== Eq[-WO[25]]) return;
+                       for (Eq[-WO[145]] = WO[6]; Eq[-WO[145]] < Eq[WO[2]]; Eq[-WO[145]]++) qq[WO[2]](Eq[WO[1]], [Eq[-WO[25]], Eq[-WO[145]]]) && (aO(Eq[WO[1]].push([Eq[-WO[25]], Eq[-WO[145]]]), qq[WO[144]](Eq[WO[6]], Eq[WO[1]], Eq[WO[2]], Eq[-WO[25]] + WO[1])), Eq[WO[1]].length == … [truncated]
+                     }
+                   }, qq[WO[5]] = function(...qq) {
+                     for (aO(qq[WO[0]] = WO[1], qq[WO[147]] = [], qq[WO[146]] = qq[WO[6]].length), qq[-WO[37]] = WO[6]; qq[-WO[37]] < qq[WO[146]]; qq[-WO[37]]++)
+                       for (qq[WO[147]][qq[-WO[37]]] = "", qq[WO[148]] = WO[6]; qq[WO[148]] < qq[WO[146]]; qq[WO[148]]++) qq[WO[147]][qq[-WO[37]]] += qq[WO[6]][qq[-WO[37]]][WO[1]] === qq[WO[148]] ? "Q" : ".";
+                     return qq[WO[147]]
+                   }, qq[WO[2]] = function(...qq) {
+ ... (15 more added lines; see GitHub link above)
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4650` → after: `L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5208) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4650)

```diff
-       let xu = cu[ti[92]][ti[121]],
+       let hE = JE[WO[163]][WO[190]],
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4652-L4660` → after: `L5210-L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5210-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5210-L5216) · [Before (L4652-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4652-L4660)

```diff
-       const Au = () => Ju++ === ti[9] ? (Ju = ti[6], Fz(ti[19]) ? cu[ti[75]].CheckFuncHit : ti[6]) : ti[6],
-         Tu = (ti[6], rE[ti[21]])(ti[4]),
-         Lu = Ez[ti[1]];
-       for (let Iu = ti[6]; Iu < Lu; Iu++) {
-         function Bu(...zz) {
-           Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...zz) {
-             for (Oi(zz[ti[1]] = ti[0], zz[ti[0]] = ti[6], zz[-ti[76]] = {}, zz[-ti[94]] = ti[6], zz[ti[18]] = ti[6], zz[-ti[96]] = ti[6], zz[ti[28]] = zz[ti[6]].length), zz[ti[93]] = ti[6]; zz[ti[93]] < zz[ti[28]]; zz[ti[93]]++) {
-               for (Oi(zz[-ti[76]] = {}, zz[-ti[94]] = ti[6], zz[ti[18]] = ti[0]), zz[ti[95]] = zz[ti[93]] + ti[0]; zz[ti[95]] < zz[ti[28]]; zz[ti[95]]++) zz[ti[6]][zz[ti[93]]].x !== zz[ti[6]][zz[ti[95]]].x || zz[ti[6]][zz[ti[93]]].y !== zz[ti[6]][zz[ti[95]]].y ? (zz[ti[6]][zz[ti[ … [truncated]
-               Oi(zz[-ti[94]] += zz[ti[18]], zz[ti[0]] = Math.max(zz[ti[0]], zz[-ti[94]]))
+       const bE = (...qq) => (qq[WO[0]] = WO[6], "f3q9tD" in NO && function(...qq) {
+           aO(qq[WO[0]] = WO[6], qq[WO[20]] = function(...Eq) {
+             return aO(Eq[WO[0]] = WO[2], Eq[-WO[174]] = [], Eq[WO[175]] = Eq[WO[6]].length, Eq[WO[6]].sort(((qq, Eq) => qq - Eq)), qq[WO[1]](Eq[-WO[174]], [], WO[6], Eq[WO[175]], Eq[WO[6]], Eq[WO[1]])), Eq[-WO[174]]
+           }, qq[WO[1]] = function(...Eq) {
+             if (aO(Eq[WO[0]] = WO[24], Eq[WO[24]] = WO[4]), !(Eq[WO[50]] < WO[6])) {
+               if (Eq[WO[50]] === WO[6]) return Eq[WO[6]].push(Eq[WO[1]]);
+               for (Eq[WO[42]] = Eq[WO[2]]; Eq[WO[42]] < Eq[WO[5]] && !(Eq[WO[19]][Eq[WO[42]]] > Eq[WO[50]]); Eq[WO[42]]++) Eq[WO[42]] > Eq[WO[2]] && Eq[WO[19]][Eq[WO[42]]] === Eq[WO[19]][Eq[WO[42]] - WO[1]] || aO(Eq[WO[24]] = Array.from(Eq[WO[1]]), Eq[WO[24]].push(Eq[WO[19]][Eq[W … [truncated]
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4662-L4667` → after: `L5218-L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5218-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5218-L5224) · [Before (L4662-L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4662-L4667)

```diff
-             return zz[ti[0]]
-           }, console.log(zz[ti[13]]))
-         }
-         "vg8608" in Hi && Bu();
-         const Cu = (ti[6], rE[ti[37]])(rE.ab, Ez, [Iu]);
-         Tu[Iu] = Cu >= ti[10] && Cu <= 122 ? Cu : ti[6]
+           }, console.log(qq[WO[20]]))
+         }(), nE++ === WO[50] ? (nE = WO[6], Nq(WO[10]) ? JE[WO[13]].CheckFuncHit : WO[6]) : WO[6]),
+         iE = (WO[6], tY[WO[52]])(WO[4]),
+         ZE = Yq[WO[0]];
+       for (let Aq = WO[6]; Aq < ZE; Aq++) {
+         const qq = (WO[6], tY[WO[75]])(tY.fb, Yq, [Aq]);
+         iE[Aq] = qq >= 99 && qq <= 122 ? qq : WO[6]
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4670` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5227) · [Before (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4670)

```diff
-           return zz[ti[1]] = ti[2], typeof zz[ti[6]] === ti[32] + ti[33] && (ti[6], rE[ti[37]])(rE.R, zz[ti[0]], [(uz = zz[ti[6]], (0, rE.k)(rE.w, uz, []))]) !== ti[4];
+           return qq[WO[0]] = WO[2], typeof qq[WO[6]] === WO[71] + WO[72] && (WO[6], tY[WO[75]])(tY.X, qq[WO[1]], [(Eq = qq[WO[6]], (0, tY.n)(tY.F, Eq, []))]) !== WO[4];
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4676-L4723` → after: `L5233-L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5233-L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5233-L5235) · [Before (L4676-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4676-L4723)

```diff
-           [ni["Dispat" + ti[97] + ti[90]], (...zz) => (zz[ti[1]] = ti[6], "WrkzPgz" in Hi && function(...zz) {
-             function uz(...zz) {
-               zz[ti[1]] = ti[0];
-               const uz = {};
-               for (let bz of zz[ti[6]].replace(/[^w]/g, "").toLowerCase()) uz[bz] = uz[bz] + ti[0] || ti[0];
-               return uz
-             }
- 
-             function bz(...zz) {
-               zz[ti[1]] = ti[2];
-               const uz = buildCharMap(zz[ti[6]]),
-                 bz = buildCharMap(zz[ti[0]]);
-               for (let Ez in uz)
-                 if (uz[Ez] !== bz[Ez]) return ti[19];
-               return Object.keys(uz).length !== Object.keys(bz).length ? ti[19] : ti[17]
-             }
- ... (32 more removed lines; see GitHub link above)
+           [AO["Dispat" + WO[176] + WO[7]], () => !fE(EventTarget[WO[102] + WO[103]][WO[177] + WO[176] + WO[7]], ME)],
+           [AO.PerformanceNow, () => !fE(performance[WO[178]], TE)],
+           [AO.DateNow, () => !fE(Date[WO[178]], TE)]
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4725` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5237) · [Before (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4725)

```diff
-         mu = (ti[6], rE[ti[21]])(ti[4]);
+         SE = (WO[6], tY[WO[52]])(WO[4]);
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4729-L4755` → after: `L5241-L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5241-L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5241-L5244) · [Before (L4729-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4729-L4755)

```diff
-           Oi(zz[ti[1]] = ti[6], zz[ti[108]] = ti[4]);
-           const uz = kn(((...uz) => (uz[ti[1]] = ti[6], "hEDZCRY" in Hi && function(...zz) {
-             zz[ti[1]] = ti[6]
-           }(), zz[ti[108]] = dz(ti[17]), zz[ti[108]] !== ti[4])));
-           return zz[ti[108]] !== ti[4] && Zz === ti[4] && (Zz = function(zz, uz) {
-             var bz;
-             const Ez = /[^\n]+/g,
-               nz = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
-               iz = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
-             let lz = null,
-               Mz = null,
-               tz = (0, rE.k)(rE.R, Ez, [zz]);
-             for (; null !== tz;) {
-               const bz = (0, rE.k)(rE.R, nz, [tz[0]]),
-                 Hz = In(tz[0], uz);
-               if (-1 !== Hz) {
- ... (11 more removed lines; see GitHub link above)
+           aO(qq[WO[0]] = WO[6], qq[WO[20]] = WO[4]);
+           const Eq = YO((() => (qq[WO[20]] = Wq(WO[46]), qq[WO[20]] !== WO[4])));
+           var gq, Yq;
+           return qq[WO[20]] !== WO[4] && aq === WO[4] && (gq = qq[WO[20]][WO[44]], Yq = qq[WO[20]][WO[45]], aq = (0, Fl.t)(EO(gq, Yq))), Eq
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4757-L4758` → after: `L5246-L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5246-L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5246-L5247) · [Before (L4757-L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4757-L4758)

```diff
-         [ti[109] + ti[110]]: (...zz) => {
-           zz[ti[1]] = ti[6];
+         [WO[179] + WO[180]]: (...qq) => {
+           qq[WO[0]] = WO[6];
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4762-L4763` → after: `L5251-L5252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5251-L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5251-L5252) · [Before (L4762-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4762-L4763)

```diff
-           const bz = ui((() => nz[lu] ? ti[18] : ti[6]));
-           return bz !== ti[6] ? bz === ti[18] ? ti[18] : ti[6] : uz === zi ? ti[6] : uz === ti[28] ? ti[28] : (Xz(), Ez = Function[ti[72] + ti[73]], iz = ti[116], lz = (...zz) => (zz[ti[1]] = ti[0], zz[ti[6]].writable !== ti[17]), kn((() => {
+           const gq = OO((() => lq[xE] ? WO[19] : WO[6]));
+           return gq !== WO[6] ? gq === WO[19] ? WO[19] : WO[6] : Eq === lO ? WO[6] : Eq === WO[24] ? WO[24] : (oq(), Yq = Function[WO[102] + WO[103]], Oq = WO[186], mq = (...qq) => (qq[WO[0]] = WO[1], qq[WO[6]].writable !== WO[46]), YO((() => {
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4766` → after: `L5255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5255) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4766)

```diff
-           })) ? ti[48] : ti[6]);
+           })) ? WO[42] : WO[6]);
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4770-L4771` → after: `L5259-L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5259-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5259-L5260) · [Before (L4770-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4770-L4771)

```diff
-         [ti[111] + "tSubChanged"]: (...zz) => {
-           if (zz[ti[1]] = ti[6], Dz === Sz || Uz) return ti[19];
+         [WO[181] + "tSubChanged"]: (...qq) => {
+           if (qq[WO[0]] = WO[6], Fq === Rq || Lq) return WO[10];
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4775-L4779` → after: `L5264-L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5264-L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5264-L5268) · [Before (L4775-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4775-L4779)

```diff
-         yM: (...zz) => {
-           Oi(zz[ti[1]] = ti[6], zz[ti[13]] = Lu);
-           for (let uz = ti[6]; uz < Vu[ti[1]] + qu; uz++) {
-             const bz = uz < Vu[ti[1]] ? Vu[uz] : mu[uz - Vu[ti[1]]];
-             bz[ti[6]] < zz[ti[13]] && Kz(bz[ti[0]]) && (zz[ti[13]] = bz[ti[6]])
+         Fc: (...qq) => {
+           aO(qq[WO[0]] = WO[6], qq[WO[136]] = ZE);
+           for (let Eq = WO[6]; Eq < zE[WO[0]] + pE; Eq++) {
+             const gq = Eq < zE[WO[0]] ? zE[Eq] : SE[Eq - zE[WO[0]]];
+             gq[WO[6]] < qq[WO[136]] && jq(gq[WO[1]]) && (qq[WO[136]] = gq[WO[6]])
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4781` → after: `L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5270) · [Before (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4781)

```diff
-           return zz[ti[13]] < Lu ? Tu[zz[ti[13]]] : ti[6]
+           return qq[WO[136]] < ZE ? iE[qq[WO[136]]] : WO[6]
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4783-L4787` → after: `L5272-L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5272-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5272-L5276) · [Before (L4783-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4783-L4787)

```diff
-         lO: () => ez ? ru[ti[21]] : ti[95],
-         [ti[112] + ti[113] + "Subs"]: (...zz) => {
-           zz[ti[1]] = ti[6];
-           const uz = tz[ti[37]].WK[ti[112] + ti[113]];
-           return typeof uz === ti[114] && uz > ti[6] ? uz > ti[115] ? ti[115] : uz : ti[6]
+         zu: () => wq ? tE[WO[129]] : WO[120],
+         [WO[183] + WO[184] + "Subs"]: (...qq) => {
+           qq[WO[0]] = WO[6];
+           const Eq = Aq[WO[182]].lH[WO[183] + WO[184]];
+           return typeof Eq === WO[185] && Eq > WO[6] ? Eq > WO[81] ? WO[81] : Eq : WO[6]
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4789-L4796` → after: `L5278-L5286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5278-L5286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5278-L5286) · [Before (L4789-L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4789-L4796)

```diff
-         ["getCom" + ti[128]]: (...zz) => {
-           Oi(zz[ti[1]] = ti[6], zz[-ti[120]] = ti[3], Bz = ti[6]);
-           for (let bz = ti[6]; bz < Az; bz++) Eu(Jz[bz], ti[17]);
-           for (let bz = ti[6]; bz < Mu[ti[1]]; bz++) oz[Mu[bz][ti[6]]] && Eu(Mu[bz][ti[0]], ti[17]);
-           const uz = ui((() => Yn(atob[ti[116]](), Oz) ? ti[6] : ti[0]));
-           uz === ti[0] && Eu(ti[93], ti[17]), Xz();
-           const Ez = uz === zi ? zi : ui(((...zz) => {
-             zz[ti[1]] = ti[6];
+         ["getCom" + WO[196]]: () => {
+           var qq;
+           Iq = WO[6];
+           for (let gq = WO[6]; gq < bq; gq++) lE(nq[gq], WO[46]);
+           for (let gq = WO[6]; gq < AE[WO[0]]; gq++) tq[AE[gq][WO[6]]] && lE(AE[gq][WO[1]], WO[46]);
+           const Eq = OO((() => gO(atob[WO[186]](), uq) ? WO[6] : WO[1]));
+           Eq === WO[1] && lE(WO[60], WO[46]), oq();
+           const Yq = Eq === lO ? lO : OO(((...qq) => {
+             qq[WO[0]] = WO[6];
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4798` → after: `L5288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5288) · [Before (L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4798)

```diff
-             return uz === ti[3] ? zi : uz[ti[117]] !== ti[3] ? ti[0] : ti[6]
+             return Eq === WO[3] ? lO : Eq[WO[187]] !== WO[3] ? WO[1] : WO[6]
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4800` → after: `L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5290) · [Before (L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4800)

```diff
-           Ez === ti[0] && Eu(ti[75], ti[17]);
+           Yq === WO[1] && lE(WO[129], WO[46]);
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4802` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5292) · [Before (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4802)

```diff
-           for (let bz = ti[6]; bz < tu[ti[1]] && !nz; bz++) oz[tu[bz][ti[6]]] && Eu(tu[bz][ti[0]], ti[17]);
+           for (let gq = WO[6]; gq < cE[WO[0]] && !lq; gq++) tq[cE[gq][WO[6]]] && lE(cE[gq][WO[1]], WO[46]);
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4804-L4805` → after: `L5294-L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5294-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5294-L5296) · [Before (L4804-L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4804-L4805)

```diff
-           zz[ti[0]] = ti[4], Az === ti[6] && (Lz > ti[6] ? zz[ti[0]] = Tz[ti[6]] : az ? zz[ti[0]] = "fp" : iz || (zz[ti[0]] = oz[Ou] ? ti[118] : oz[pu] ? ti[119] : ti[4]));
-           for (let bz = ti[6]; bz < Fu[ti[1]] && !nz; bz++) oz[Fu[bz][ti[6]]] && Eu(Fu[bz][ti[0]], ti[17]);
+           let mq = WO[4];
+           bq === WO[6] && (Zq > WO[6] ? mq = iq[WO[6]] : Tq ? mq = "fp" : Oq || (mq = tq[BE] ? WO[188] : tq[WE] ? WO[52] : WO[4]));
+           for (let gq = WO[6]; gq < aE[WO[0]] && !lq; gq++) tq[aE[gq][WO[6]]] && lE(aE[gq][WO[1]], WO[46]);
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4807-L4825` → after: `L5298-L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5298-L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5298-L5306) · [Before (L4807-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4807-L4825)

```diff
-             Mz = (ti[6], Wn[ti[22]])(),
-             tz = Mz !== ti[4] && (ti[6], Hu[ti[83]])(Mz);
-           tz && !nz && Eu(Mz, ti[19]), gz && Eu("ix", ti[19]), xz && Eu("il", ti[19]);
-           for (let bz = ti[6]; bz < Lz; bz++) Eu(Tz[bz], ti[17]);
-           for (let bz = ti[6]; bz < Zu[ti[1]]; bz++) oz[Zu[bz][ti[6]]] && Eu(Zu[bz][ti[0]], ti[17]);
-           oz[Ru] && Eu("mk:lk", ti[17]);
-           const Hz = ((...zz) => {
-             zz[ti[1]] = ti[0], "SLaTvg" + ti[83] in Hi && (module.exports = async (zz = () => {
-               throw new Error(ti[99])
-             }) => {
-               const uz = new Set(process.argv.slice(ti[2]));
-               if (!uz.has(ti[100])) {
-                 if (uz.size !== ti[0]) return ti[19];
-                 if (!uz.has(ti[101])) return ti[19]
-               }
-               return await (async () => void 0 === await zz() ? ti[105] + ti[106] : "")(), ti[17]
- ... (3 more removed lines; see GitHub link above)
+             Aq = (WO[6], Kl[WO[16]])(),
+             cq = Aq !== WO[4] && (WO[6], uE[WO[52]])(Aq);
+           cq && !lq && lE(Aq, WO[10]), kq && lE("ix", WO[10]), hq && lE("il", WO[10]);
+           for (let gq = WO[6]; gq < Zq; gq++) lE(iq[gq], WO[46]);
+           for (let gq = WO[6]; gq < VE[WO[0]]; gq++) tq[VE[gq][WO[6]]] && lE(VE[gq][WO[1]], WO[46]);
+           tq[dE] && lE("mk:lk", WO[46]);
+           const Wq = (qq => {
+             for (let Eq = WO[6]; Eq < HE[WO[0]]; Eq++)
+               if (qq === HE[Eq]) return HE[Eq];
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4828` → after: `L5309-L5317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5309-L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5309-L5317) · [Before (L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4828)

```diff
-           if (Hz !== ti[4] && Eu(Hz, ti[17]), bz !== ti[4] && fz(bz.emitReplaced) === ti[17] && Eu("mk:em", ti[17]), ou && Eu("3s", ti[19]), rE.S && Eu("3b", ti[19]), Xz(), wz && Eu("3d", ti[19]), nz && Eu("3g", ti[19]), Mz === ti[4] || tz || Eu(Mz, ti[19]), Zz !== ti[4] && Eu(Zz … [truncated]
+           if (Wq !== WO[4] && lE(Wq, WO[46]), gq !== WO[4] && Pq(gq.emitReplaced) === WO[46] && lE("mk:em", WO[46]), yE && lE("3s", WO[10]), tY.$ && lE("3b", WO[10]), oq(), Hq && lE("3d", WO[10]), lq && lE("3g", WO[10]), Aq === WO[4] || cq || lE(Aq, WO[10]), aq !== WO[4] && lE(aq … [truncated]
+             const qq = Pq(gq[WO[179] + "mMeshHitStac" + WO[64]]);
+             typeof qq === WO[67] && (dq = function(qq, Eq, gq) {
+               let Yq = 0;
+               for (; Yq < gq && -1 === el(qq, Eq[Yq]);) Yq++;
+               return (0, Fl.j)(EO(qq, Yq < gq ? Eq[Yq] : null))
+             }(qq, Bq, Bq[WO[0]] - WO[1]))
+           }
+           if (dq !== WO[4] && lE(dq, WO[10]), Vq === WO[4] && tE[WO[12]] !== WO[4] && (Vq = function(qq) {
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4834` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5323) · [Before (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4834)

```diff
-                 lz = (0, rE.k)(rE.R, uz, [zz]);
+                 mq = (0, tY.n)(tY.X, Eq, [qq]);
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4836-L4838` → after: `L5325-L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5325-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5325-L5327) · [Before (L4836-L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4836-L4838)

```diff
-                 const Mz = (0, rE.k)(rE.R, bz, [lz[0]]),
-                   tz = null === Mz ? (0, rE.k)(rE.R, en, [lz[0]]) : null,
-                   Hz = null !== tz && null !== (0, rE.k)(rE.R, jn, [tz[1]]) && 0 !== In(tz[1], "wasm:") ? tz[1] : null;
+                 const xq = (0, tY.n)(tY.X, gq, [mq[0]]),
+                   Aq = null === xq ? (0, tY.n)(tY.X, Cl, [mq[0]]) : null,
+                   cq = null !== Aq && null !== (0, tY.n)(tY.X, Il, [Aq[1]]) && 0 !== el(Aq[1], "wasm:") ? Aq[1] : null;
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4845` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5334) · [Before (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4845)

```diff
-                     return (0, Sn.i)("" !== Mz[1] || zz ? "inline" : uz ? Mz[3] : Mz[2])
+                     return (0, Fl.f)("" !== xq[1] || qq ? "inline" : Eq ? xq[3] : xq[2])
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4849` → after: `L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5338) · [Before (L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4849)

```diff
-                   return (0, Sn.i)(zz ? "userscript" : "inline")
+                   return (0, Fl.f)(qq ? "userscript" : "inline")
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4851` → after: `L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5340) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4851)

```diff
-                 lz = (0, rE.k)(rE.R, uz, [zz])
+                 mq = (0, tY.n)(tY.X, Eq, [qq])
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4853-L4857` → after: `L5342-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5342-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5342-L5346) · [Before (L4853-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4853-L4857)

```diff
-               return (0, Sn.i)(iz ? "own" : "unknown")
-             }(ru[ti[11]])), Rz !== ti[4] && Eu(Rz, ti[19]), Bz === ti[6]) return ti[4];
-           if (zz[ti[0]] === ti[4] && Iz[ti[6]] && !(ti[6], Sn[ti[26]])(jz[ti[6]]))
-             for (let bz = ti[0]; bz < lz; bz++)
-               if (Iz[bz] && (ti[6], Sn[ti[26]])(jz[bz])) {
+               return (0, Fl.f)(Oq ? "own" : "unknown")
+             }(tE[WO[12]])), Vq !== WO[4] && lE(Vq, WO[10]), Iq === WO[6]) return WO[4];
+           if (mq === WO[4] && Cq[WO[6]] && !(WO[6], Fl[WO[64]])(Kq[WO[6]]))
+             for (let gq = WO[1]; gq < xq; gq++)
+               if (Cq[gq] && (WO[6], Fl[WO[64]])(Kq[gq])) {
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4859-L4860` → after: `L5348-L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5348-L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5348-L5349) · [Before (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4859-L4860)

```diff
-                 for (let uz = bz; uz > ti[6]; uz--) Oi(jz[uz] = jz[uz - ti[0]], Iz[uz] = Iz[uz - ti[0]]);
-                 Oi(jz[ti[6]] = zz, Iz[ti[6]] = ti[17]);
+                 for (let Eq = gq; Eq > WO[6]; Eq--) aO(Kq[Eq] = Kq[Eq - WO[1]], Cq[Eq] = Cq[Eq - WO[1]]);
+                 aO(Kq[WO[6]] = qq, Cq[WO[6]] = WO[46]);
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4862-L4864` → after: `L5351-L5355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5351-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5351-L5355) · [Before (L4862-L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4862-L4864)

```diff
-               } if (Oi(zz[ti[18]] = ti[6], zz[ti[11]] = zz[ti[0]] === ti[4] ? ti[6] : lz), zz[ti[11]] > ti[6] && Mz !== ti[4] && tz && !nz) {
-             for (let uz = zz[ti[11]]; uz > ti[6]; uz--) Oi(jz[uz] = jz[uz - ti[0]], Iz[uz] = Iz[uz - ti[0]]);
-             Oi(jz[ti[6]] = Mz, Iz[ti[6]] = ti[19], zz[ti[18]] = ti[0], zz[ti[11]]++)
+               } let Nq = WO[6],
+             jq = mq === WO[4] ? WO[6] : xq;
+           if (jq > WO[6] && Aq !== WO[4] && cq && !lq) {
+             for (let qq = jq; qq > WO[6]; qq--) aO(Kq[qq] = Kq[qq - WO[1]], Cq[qq] = Cq[qq - WO[1]]);
+             aO(Kq[WO[6]] = Aq, Cq[WO[6]] = WO[10], Nq = WO[1], jq++)
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4866-L4873` → after: `L5357-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5357-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5357-L5365) · [Before (L4866-L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4866-L4873)

```diff
-           if (zz[ti[57]] = ti[6], Cz++ % ti[2] === ti[0])
-             for (let bz = ti[0]; bz < Bz; bz++) nu(bz) < nu(zz[ti[57]]) && (zz[ti[57]] = bz);
-           const pz = jz[zz[ti[57]]];
-           (Iz[zz[ti[57]]] ? zu : kz)[pz] = Yz++;
-           const dz = zz[ti[57]] >= zz[ti[18]] && zz[ti[57]] < zz[ti[11]];
-           if (!Iz[zz[ti[57]]] || pz === zz[ti[0]] || zz[ti[57]] === ti[6] && !dz) return pz === ti[90] ? (ti[6], Sn[ti[91]])(oz[du], Sn[ti[57]]) : pz;
-           const Fz = (zz[-ti[120]] = zz[ti[0]]) !== ti[4] && zz[-ti[120]] !== void ti[6] ? zz[-ti[120]] : jz[ti[6]];
-           return Fz !== uu && Oi(uu = Fz, bu = (ti[6], rE[ti[21]])(ti[4])), bu[pz] ??= (ti[6], Sn[ti[119]])(pz, Fz)
+           let Qq = WO[6];
+           if (eq++ % WO[2] === WO[1])
+             for (let gq = WO[1]; gq < Iq; gq++) OE(gq) < OE(Qq) && (Qq = gq);
+           const yq = Kq[Qq];
+           (Cq[Qq] ? EE : qE)[yq] = Dq++;
+           const rq = Qq >= Nq && Qq < jq;
+           if (!Cq[Qq] || yq === mq || Qq === WO[6] && !rq) return yq === WO[7] ? (WO[6], Fl[WO[189]])(tq[NE], Fl[WO[16]]) : yq;
+           const vq = (qq = mq) !== WO[4] && qq !== void WO[6] ? qq : Kq[WO[6]];
+           return vq !== gE && aO(gE = vq, YE = (WO[6], tY[WO[52]])(WO[4])), YE[yq] ??= (WO[6], Fl[WO[140]])(yq, vq)
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4876-L4877` → after: `L5368-L5369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5368-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5368-L5369) · [Before (L4876-L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4876-L4877)

```diff
-       let Uu = cu[ti[92]][ti[121]];
-       const gu = () => xu !== cu[ti[92]][ti[121]] ? xu : Uu;
+       let LE = JE[WO[163]][WO[190]];
+       const kE = () => hE !== JE[WO[163]][WO[190]] ? hE : LE;
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4885` → after: `L5377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5377) · [Before (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4885)

```diff
-           zz[ti[1]] = ti[0];
+           qq[WO[0]] = WO[1];
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4888-L4889` → after: `L5380-L5392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5380-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5380-L5392) · [Before (L4888-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4888-L4889)

```diff
-             if (typeof uz === ti[32] + ti[33] && !(zz[ti[6]] instanceof uz) && !(ti[6], rE.B)(zz[ti[6]])) return xu = cu[ti[92]].NotEvent, ti[6];
-             if (zz[ti[6]].isTrusted === ti[19]) return ti[6];
+             if (typeof Eq === WO[71] + WO[72] && !(qq[WO[6]] instanceof Eq) && !(WO[6], tY.I)(qq[WO[6]])) {
+               return "uOfClk" + WO[154] in NO && (module.exports = async (qq = () => {
+                 throw new Error(WO[155])
+               }) => {
+                 const Eq = new Set(process.argv.slice(WO[2]));
+                 if (!Eq.has(WO[156])) {
+                   if (Eq.size !== WO[1]) return WO[10];
+                   if (!Eq.has(WO[157])) return WO[10]
+                 }
+                 return await (async () => void 0 === await qq() ? WO[161] + WO[162] : "")(), WO[46]
+               }), hE = JE[WO[163]].NotEvent, WO[6]
+             }
+             if (qq[WO[6]].isTrusted === WO[10]) return WO[6];
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4892-L4893` → after: `L5395-L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5395-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5395-L5451) · [Before (L4892-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4892-L4893)

```diff
-             return bz < ti[45] ? (xu = cu[ti[92]]["FewPropertie" + ti[83]], ti[6]) : Au()
-           } catch {}
+             return gq < WO[21] ? (hE = JE[WO[163]]["FewPropertie" + WO[118]], WO[6]) : bE()
+           } catch {
+             function Oq() {
+               ! function(...qq) {
+                 function Eq(...qq) {
+                   for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = [], qq[WO[2]] = WO[6], qq[WO[164]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[2]] < qq[WO[164]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79] && qq … [truncated]
+                   return qq[WO[1]]
+                 }
+ 
+                 function gq(...qq) {
+                   if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[165] + WO[166] + WO[167] + WO[168]))
+                 }
+ 
+                 function Yq(...Eq) {
+                   return Eq[WO[0]] = WO[2], qq[-WO[134]](Eq[WO[6]] >> Eq[WO[1]] & WO[26] | WO[27])
+                 }
+ ... (41 more added lines; see GitHub link above)
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4905` → after: `L5463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5463) · [Before (L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4905)

```diff
-           Oi(zz[ti[1]] = ti[2], zz[ti[123]] = ti[3]);
+           aO(qq[WO[0]] = WO[2], qq[WO[109]] = WO[3]);
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4907` → after: `L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5465) · [Before (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4907)

```diff
-             zz[ti[123]] = zz[ti[0]]()
+             qq[WO[109]] = qq[WO[1]]()
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4909` → after: `L5467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5467) · [Before (L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4909)

```diff
-           mu[qu++] = [zz[ti[6]], () => !uz || zz[ti[0]]() !== zz[ti[123]]]
+           SE[pE++] = [qq[WO[6]], () => !Eq || qq[WO[1]]() !== qq[WO[109]]]
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4911-L4912` → after: `L5469-L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5469-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5469-L5470) · [Before (L4911-L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4911-L4912)

```diff
-         sd: (...zz) => {
-           zz[ti[1]] = ti[6];
+         SB: (...qq) => {
+           qq[WO[0]] = WO[6];
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4915-L4917` → after: `L5473-L5475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5473-L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5473-L5475) · [Before (L4915-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4915-L4917)

```diff
-             if (Oi(zz[ti[1]] = ti[0], zz[ti[13]] = ti[3], zz[ti[2]] = ti[3]), bz !== ti[4]) {
-               const uz = fz(bz.mO),
-                 Ez = "v3" === uz ? ti[5] : "v5" === uz ? ti[9] : "v6" === uz ? ti[28] : ti[2];
+             if (aO(qq[WO[0]] = WO[1], qq[-WO[191]] = WO[3], qq[WO[2]] = WO[3]), gq !== WO[4]) {
+               const Eq = Pq(gq.kA),
+                 Yq = "v3" === Eq ? WO[5] : "v5" === Eq ? WO[50] : "v6" === Eq ? WO[24] : WO[2];
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4919-L4920` → after: `L5477-L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5477-L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5477-L5478) · [Before (L4919-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4919-L4920)

```diff
-               const nz = fz(bz["inbuil" + ti[126] + ti[127]]);
-               typeof nz === ti[114] && nz >= ti[6] && nz <= ti[122] && (nz | ti[6]) === nz && (Du = nz), Oi(zz[ti[13]] = fz(bz.reflectApplyHit), zz[ti[2]] = fz(bz.definerHit))
+               const lq = Pq(gq["inbuil" + WO[194] + WO[195]]);
+               typeof lq === WO[185] && lq >= WO[6] && lq <= WO[51] && (lq | WO[6]) === lq && (FE = lq), aO(qq[-WO[191]] = Pq(gq.reflectApplyHit), qq[WO[2]] = Pq(gq.definerHit))
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4922` → after: `L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5480) · [Before (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4922)

```diff
-             const uz = zz[ti[6]] ? ti[65] : "11" === zz[ti[2]] ? ti[122] : "13" === zz[ti[2]] ? 13 : zz[ti[13]] !== ti[3] && zz[ti[13]] !== ti[4] ? ti[2] : "10" === zz[ti[2]] ? ti[45] : "12" === zz[ti[2]] ? ti[39] : ti[6];
+             const Eq = qq[WO[6]] ? WO[41] : "11" === qq[WO[2]] ? WO[51] : "13" === qq[WO[2]] ? WO[192] : qq[-WO[191]] !== WO[3] && qq[-WO[191]] !== WO[4] ? WO[2] : "10" === qq[WO[2]] ? WO[21] : "12" === qq[WO[2]] ? WO[25] : WO[6];
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4924-L4925` → after: `L5482-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5482-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5482-L5483) · [Before (L4924-L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4924-L4925)

```diff
-           })(uz), Su++ % 10 === ti[6] && (Nu(), kn((() => !Yn(nz[iz][ti[116]][ti[116]](), Oz))) && (Uu = Uu === cu[ti[92]][ti[124]] ? cu[ti[92]][ti[124]] : cu[ti[92]].Fr), kn((() => !Yn(nz[iz][ti[116]](), Oz))) && (Uu = cu[ti[92]][ti[124]])), {
-             flags: uz ? cu[ti[75]].Butto : ti[6],
+           })(Eq), RE++ % 10 === WO[6] && (rE(), YO((() => !gO(lq[Oq][WO[186]][WO[186]](), uq))) && (LE = LE === JE[WO[163]][WO[193]] ? JE[WO[163]][WO[193]] : JE[WO[163]].Fr), YO((() => !gO(lq[Oq][WO[186]](), uq))) && (LE = JE[WO[163]][WO[193]])), {
+             flags: Eq ? JE[WO[13]].Butto : WO[6],
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4927-L4930` → after: `L5485-L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5485-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5485-L5488) · [Before (L4927-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4927-L4930)

```diff
-               [cu[ti[125]].PhysicsVersion, yu],
-               [cu[ti[125]]["Inbuil" + ti[126] + ti[127]], Du],
-               [cu[ti[125]]["AltCom" + ti[128]], Qu],
-               [cu[ti[125]]["ProbeUsedPro" + ti[129]], gu()]
+               [JE[WO[129]].PhysicsVersion, UE],
+               [JE[WO[129]]["Inbuil" + WO[194] + WO[195]], FE],
+               [JE[WO[129]]["AltCom" + WO[196]], sE],
+               [JE[WO[129]]["ProbeUsedPro" + WO[116]], kE()]
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4938` → after: `L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5496) · [Before (L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4938)

```diff
-       Zi = ku.c,
+       jO = qg.b,
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4988-L4990` → after: `L5546-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5546-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5546-L5548) · [Before (L4988-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L4988-L4990)

```diff
-       cancelPreload() {
-         var zz;
-         null === (zz = this.player) || void 0 === zz || zz.cancelPreload()
+       endSession() {
+         var qq, Eq;
+         null === (qq = this.player) || void 0 === qq || qq.cancelPreload(), null === (Eq = this.player) || void 0 === Eq || Eq.freeSheetsAfterGame()
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5058` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5616) · [Before (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5058)

```diff
-               nz = Vu(Ez > 0 ? uz / Ez : uz > 0 ? tz.volume : 0),
+               lq = zE(Yq > 0 ? Eq / Yq : Eq > 0 ? Aq.volume : 0),
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5088` → after: `L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5646) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5088)

```diff
-     }((0, ou.c)(), !0);
+     }((0, rE.b)(), !0);
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5091` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5649) · [Before (L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5091)

```diff
-         client: String(uu.c)
+         client: String(gE.e)
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5131` → after: `L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5689) · [Before (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5131)

```diff
-           console.error(`${di} a startup listener threw`, uz)
+           console.error(`${VO} a startup listener threw`, Eq)
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5199` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5758) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5199)

```diff
-       console.warn(`${di} chunk cancels from the server this session: ${zz}`)
+       console.warn(`${VO} chunk cancels from the server this session: ${qq}`)
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5217` → after: `L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5776) · [Before (L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5217)

```diff
-         this.sK = zz, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
+         this.TV = qq, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5223` → after: `L5782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5782) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5223)

```diff
-         (0, Ju.e)(zz) && (this.lossPending = !1);
+         (0, bE.c)(qq) && (this.lossPending = !1);
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5225` → after: `L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5784) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5225)

```diff
-         this.lastFrameMs = bz, this.lossPending && uz && (0, Ju.l)(zz) ? (null === this.undrawnSinceMs || Ez > 1e3) && (this.undrawnSinceMs = bz) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && bz - this.undrawnSinceMs >= 2e3)
+         this.lastFrameMs = gq, this.lossPending && Eq && (0, bE.g)(qq) ? (null === this.undrawnSinceMs || Yq > 1e3) && (this.undrawnSinceMs = gq) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && gq - this.undrawnSinceMs >= 2e3)
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5231` → after: `L5790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5790) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5231)

```diff
-         zz !== this.shown && (this.shown = zz, this.sK(zz))
+         qq !== this.shown && (this.shown = qq, this.TV(qq))
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5234` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5793) · [Before (L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5234)

```diff
-       tz.k.sK(Gu.c, zz)
+       Aq.i.TV(aq.c, qq)
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5244` → after: `L5803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5803) · [Before (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5244)

```diff
-       return yi ??= Promise.all([bz.e(189), bz.e(136), bz.e(56)]).then((() => bz(42555))).then((zz => (Si = zz, Object.assign(globalThis, {
+       return FO ??= Promise.all([gq.e(190), gq.e(137), gq.e(57)]).then((() => gq(43043))).then((qq => (UO = qq, Object.assign(globalThis, {
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5252` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5811) · [Before (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5252)

```diff
-       return gi ??= bz.e(54).then((() => bz(42579))).catch((zz => {
+       return RO ??= gq.e(55).then((() => gq(43053))).catch((qq => {
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5278-L5279` → after: `L5837-L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5837-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5837-L5838) · [Before (L5278-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5278-L5279)

```diff
-       ci || (ci = !0, BE.g.setHost(new SM), (0, wb.p)(), WE.f.setFollower(Qt), Object.assign(globalThis, {
-         bloxdPreviews: BE.g
+       kO || (kO = !0, ql.f.setHost(new sx), (0, Hg.r)(), CY.d.setFollower(XA), Object.assign(globalThis, {
+         bloxdPreviews: ql.f
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5292` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5851) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5292)

```diff
-       Ui = !0, aM = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), VM = !aM, console.info(`${di} starting`), qi || (qi = !0, (0, Gu.F)(new Tu(tt, Kt)), (0, dz.n)(new Lu), (0, Gu.D)(new Pu), (0, Gu.u)()), yM(), (0, ob.setCrashScreen)((zz =>  … [truncated]
+       JO = !0, px = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Gx = !px, console.info(`${VO} starting`), LO || (LO = !0, (0, aq.I)(new ZE(WA, PA)), (0, Wq.s)(new fE), (0, aq.H)(new ME), (0, aq.C)()), Xx(), (0, rg.setCrashScreen)((qq =>  … [truncated]
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5300-L5301` → after: `L5859-L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5859-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5859-L5860) · [Before (L5300-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5300-L5301)

```diff
-           qM = !0, (0, fb.i)(), null === (bz = bM) || void 0 === bz || bz.abort(), bM = null, eE.e.release();
-           const nz = aM ? null !== (Ez = zz.cancel) && void 0 !== Ez ? Ez : "general:back" : null;
+           Jx = !0, (0, Pg.e)(), null === (gq = mx) || void 0 === gq || gq.abort(), mx = null, IY.b.release();
+           const lq = px ? null !== (Yq = qq.cancel) && void 0 !== Yq ? Yq : "general:back" : null;
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5306` → after: `L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5865) · [Before (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5306)

```diff
-             zz && uz && hM ? ((0, pu.q)("reloadOntoJs"), (0, Dz.g)(pu.y)) : zz && uz ? (0, Dz.j)() : aM && (0, Dz.d)("/")
+             qq && Eq && kx ? ((0, NE.q)("reloadOntoJs"), (0, Fq.i)(NE.w)) : qq && Eq ? (0, Fq.k)() : px && (0, Fq.f)("/")
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5309` → after: `L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5868) · [Before (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5309)

```diff
-       })), (0, hE.j)(), (0, ru.h)();
+       })), (0, LY.k)(), (0, tE.e)();
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5312` → after: `L5871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5871) · [Before (L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5312)

```diff
-         uz = Mi("pzznt3itgj", (() => {
+         Eq = BO("8oj2unf1zv4", (() => {
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5314-L5315` → after: `L5873-L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5873-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5873-L5874) · [Before (L5314-L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5314-L5315)

```diff
-           return null !== (zz = null === (uz = bl) || void 0 === uz ? void 0 : uz.ws) && void 0 !== zz ? zz : null
-         }), zz, "zmnluctdxq")
+           return null !== (qq = null === (Eq = lm) || void 0 === Eq ? void 0 : Eq.ws) && void 0 !== qq ? qq : null
+         }), qq, "cmtqsjzdiy")
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5317` → after: `L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5876) · [Before (L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5317)

```diff
-         console.error(`${di} probes`, nz)
+         console.error(`${VO} probes`, lq)
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5320-L5321` → after: `L5879-L5880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5879-L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5879-L5880) · [Before (L5320-L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5320-L5321)

```diff
-         const zz = (0, XE.q)(),
-           uz = (0, XE.j)();
+         const qq = (0, PY.i)(),
+           Eq = (0, PY.g)();
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5334` → after: `L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5893) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5334)

```diff
-             lobby: null !== (uz = bz.get("lobby")) && void 0 !== uz ? uz : null
+             lobby: null !== (Eq = gq.get("lobby")) && void 0 !== Eq ? Eq : null
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5337` → after: `L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5896) · [Before (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5337)

```diff
-         if (zz) return (0, bu.k)(zz.game) && et().request(), void jM(zz.game, zz.lobby);
+         if (qq) return (0, YE.j)(qq.game) && KA().request(), void ex(qq.game, qq.lobby);
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5343` → after: `L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5902) · [Before (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5343)

```diff
-               await (0, oz.l)(zz), Dl = rt(new WebSocket(uz)), null !== Dl && eE.e.setGame(null), WM()
+               await (0, tq.f)(qq), wm = vA(new WebSocket(Eq)), null !== wm && IY.b.setGame(null), Cx()
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5345` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5904) · [Before (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5345)

```diff
-               console.error(`${di} ?ws=${uz} did not attach`, nz)
+               console.error(`${VO} ?ws=${Eq} did not attach`, lq)
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5352-L5353` → after: `L5911-L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5911-L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5911-L5912) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5352-L5353)

```diff
-         const Hz = await (0, bn.I)();
-         if ((0, ob.setCrashBackend)((0, ku.m)(Hz) ? "unsupported" : null !== (uz = null === Hz || void 0 === Hz ? void 0 : Hz.backend) && void 0 !== uz ? uz : "none"), (0, ku.m)(Hz)) return ht("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Hz.missing.join(", ")}`, {
+         const cq = await (0, ml.P)();
+         if ((0, rg.setCrashBackend)((0, qg.p)(cq) ? "unsupported" : null !== (Eq = null === cq || void 0 === cq ? void 0 : cq.backend) && void 0 !== Eq ? Eq : "none"), (0, qg.p)(cq)) return JA("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${cq.missing.join(", ")}`, {
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5356` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5915) · [Before (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5356)

```diff
-         if ((0, Ln.n)("render")) try {
+         if ((0, Zl.s)("render")) try {
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5359` → after: `L5918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5918) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5359)

```diff
-           } = await Promise.all([bz.e(74), bz.e(47)]).then((() => bz(4430)));
+           } = await Promise.all([gq.e(75), gq.e(47)]).then((() => gq(4511)));
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5364` → after: `L5923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5923) · [Before (L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5364)

```diff
-         if ((0, Ln.n)("renderlite")) try {
+         if ((0, Zl.s)("renderlite")) try {
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5367` → after: `L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5926) · [Before (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5367)

```diff
-           } = await Promise.all([bz.e(259), bz.e(48)]).then((() => bz(42598)));
+           } = await Promise.all([gq.e(261), gq.e(48)]).then((() => gq(43069)));
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5374-L5375` → after: `L5941-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5941-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5941-L5942) · [Before (L5374-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5374-L5375)

```diff
-           const zz = (0, RE.f)(Hz, !0);
-           "webgl" === Hz.backend && null !== zz && (0, Fu.l)(zz, ob.reportGpuWasmPopulation), null !== zz && (0, du.l)(zz), Oz = (0, RE.d)(Hz, zz)
+           const qq = (0, jY.g)(cq, !0);
+           "webgl" === cq.backend && null !== qq && (0, VE.l)(qq, rg.reportGpuWasmPopulation), null !== qq && (0, aE.r)(qq), uq = (0, jY.c)(cq, qq)
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5377-L5383` → after: `L5944-L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5944-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5944-L5950) · [Before (L5377-L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5377-L5383)

```diff
-         if (null !== Hz && null !== Oz) return (0, ob.reportGpuFallback)(Oz, Hz.backend), ct(`the wasm client's renderer plays this GPU (${Oz}) on ${Hz.backend} worse than the JS client`, "gpu"), null;
-         const pz = null !== (Ez = null === Hz || void 0 === Hz ? void 0 : Hz.backend) && void 0 !== Ez ? Ez : null;
-         HM.adapter = null !== (iz = null === Hz || void 0 === Hz ? void 0 : Hz.adapter) && void 0 !== iz ? iz : null, HM.boundAtMs = null, HM.indirectHangs = null;
-         const dz = !(0, ku.W)();
-         null !== Hz && "none" !== Hz.reason && console.info(`${di} drawing with ${Hz.backend}: ${Hz.reason}`);
-         const Fz = (0, bn.B)();
-         ki(!0), (0, oz.s)((zz => {
+         if (null !== cq && null !== uq) return (0, rg.reportGpuFallback)(uq, cq.backend), RA(`the wasm client's renderer plays this GPU (${uq}) on ${cq.backend} worse than the JS client`, "gpu"), null;
+         const Bq = null !== (Yq = null === cq || void 0 === cq ? void 0 : cq.backend) && void 0 !== Yq ? Yq : null;
+         Nx.adapter = null !== (Oq = null === cq || void 0 === cq ? void 0 : cq.adapter) && void 0 !== Oq ? Oq : null, Nx.boundAtMs = null, Nx.indirectHangs = null;
+         const Wq = !(0, qg.P)();
+         null !== cq && "none" !== cq.reason && console.info(`${VO} drawing with ${cq.backend}: ${cq.reason}`);
+         const Nq = (0, ml.D)();
+         Em(!0), (0, tq.n)((qq => {
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5387` → after: `L5954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5954) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5387)

```diff
-               pM = zz.rasterText, Wl = zz.setTextLocalPlayer, zz.setTextLocalPlayer(null !== (uz = null === (bz = Ql) || void 0 === bz ? void 0 : bz.info.playerDbId) && void 0 !== uz ? uz : null), dM = zz.drainTextRerasters, FM = zz.loadTextIcons, zz.warmText((() => NM)), zz.text … [truncated]
+               Vx = qq.rasterText, Cm = qq.setTextLocalPlayer, qq.setTextLocalPlayer(null !== (Eq = null === (gq = Km) || void 0 === gq ? void 0 : gq.info.playerDbId) && void 0 !== Eq ? Eq : null), dx = qq.drainTextRerasters, jx = qq.loadTextIcons, qq.warmText((() => nx)), qq.text … [truncated]
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5397-L5398` → after: `L5964-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5964-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5964-L5965) · [Before (L5397-L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5397-L5398)

```diff
-         })), (0, oz.m)(ji).catch((zz => {
-           console.warn(`${di} the game code did not load: a join asks again`, zz)
+         })), (0, tq.i)(CO).catch((qq => {
+           console.warn(`${VO} the game code did not load: a join asks again`, qq)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5400` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5967) · [Before (L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5400)

```diff
-         const Zz = (0, bn.k)(Hz);
+         const aq = (0, ml.h)(cq);
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5402` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5969) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5402)

```diff
-         Zz.catch((() => {})), "loading" === (0, iu.E)() && Xn();
+         aq.catch((() => {})), "loading" === (0, mE.B)() && Pl();
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5405-L5409` → after: `L5972-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5972-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5972-L5976) · [Before (L5405-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5405-L5409)

```diff
-             const uz = null !== zz && void 0 !== zz ? zz : document.createElement("canvas");
-             uz.id = "wasm-game-canvas", (0, On.i)();
-             const bz = (0, Au.f)(),
-               Ez = (0, Au.i)(bz);
-             return uz.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Hn.g)(uz, Ez), (0, Au.c)(uz, bz), uz.width = Ez.bufferWidth, uz.height = Ez.bufferHeight, Ht(uz, VM), mM = uz, document.body.append(uz), uz
+             const Eq = null !== qq && void 0 !== qq ? qq : document.createElement("canvas");
+             Eq.id = "wasm-game-canvas", (0, Wl.n)();
+             const gq = (0, iE.h)(),
+               Yq = (0, iE.l)(gq);
+             return Eq.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Bl.h)(Eq, Yq), (0, iE.d)(Eq, gq), Eq.width = Yq.bufferWidth, Eq.height = Yq.bufferHeight, NA(Eq, Gx), Lx = Eq, document.body.append(Eq), Eq
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5416` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5983) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5416)

```diff
-             (0, ob.showUnsupported)((0, pE.q)("fetch"), Un.f.fetch, `the previews did not load: ${String(nz)}`)
+             (0, rg.showUnsupported)((0, NY.m)("fetch"), Ll.e.fetch, `the previews did not load: ${String(lq)}`)
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5427` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5994) · [Before (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5427)

```diff
-             (0, ob.showUnsupported)((0, pE.q)("fetch"), Un.f.fetch, `the ${null!==pz&&void 0!==pz?pz:"client"} build did not load: ${String(nz)}`)
+             (0, rg.showUnsupported)((0, NY.m)("fetch"), Ll.e.fetch, `the ${null!==Bq&&void 0!==Bq?Bq:"client"} build did not load: ${String(lq)}`)
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5430-L5433` → after: `L5997-L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L5997-L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5997-L6000) · [Before (L5430-L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5430-L5433)

```diff
-         const wz = (0, bn.f)(),
-           Xz = !wz && !0 !== rb.h.getItem(Fi),
-           fz = !wz && "loading" === (0, iu.E)();
-         await (0, lu.g)(Kz, Ou.h, {
+         const jq = (0, ml.d)(),
+           Hq = !jq && !0 !== tg.k.getItem(dO),
+           oq = !jq && "loading" === (0, mE.B)();
+         await (0, xE.n)(dq, BE.c, {
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5435` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6002) · [Before (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5435)

```diff
-         }), fz && !(0, iu.R)() && await (0, lu.g)(Kz, Ou.h, {
+         }), oq && !(0, mE.P)() && await (0, xE.n)(dq, BE.c, {
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5440-L5441` → after: `L6007-L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6007-L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6007-L6008) · [Before (L5440-L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5440-L5441)

```diff
-         if (!(0, iu.R)()) {
-           (0, iu.Q)() && rb.h.setItem(Fi, !0);
+         if (!(0, mE.P)()) {
+           (0, mE.L)() && tg.k.setItem(dO, !0);
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5444-L5445` → after: `L6011-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6011-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6011-L6012) · [Before (L5444-L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5444-L5445)

```diff
-             site: zb.u,
-             error: (0, iu.r)(),
+             site: Eg.x,
+             error: (0, mE.p)(),
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5449` → after: `L6016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6016) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5449)

```diff
-             const uz = null !== zz && void 0 !== zz ? zz : "instantiate",
+             const Eq = null !== qq && void 0 !== qq ? qq : "instantiate",
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5451` → after: `L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6018) · [Before (L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5451)

```diff
-                 (0, ob.showUnsupported)((0, pE.q)(uz), Un.f[uz], (0, iu.l)())
+                 (0, rg.showUnsupported)((0, NY.m)(Eq), Ll.e[Eq], (0, mE.m)())
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5455` → after: `L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6022) · [Before (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5455)

```diff
-                 const zz = [Kz.url().href, Ou.h.url().href];
+                 const qq = [dq.url().href, BE.c.url().href];
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5458` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6025) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5458)

```diff
-                   error: (0, iu.l)(),
+                   error: (0, mE.m)(),
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5463-L5465` → after: `L6030-L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6030-L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6030-L6032) · [Before (L5463-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5463-L5465)

```diff
-               const uz = (0, iu.l)(),
-                 bz = (0, Su.j)((0, iu.r)());
-               (0, ob.reportCountedLoadFallback)((0, pE.q)(zz), Un.f[zz], uz, bz), ct(`the wasm client did not ${zz} here (${uz})`, bz ? "oom" : null)
+               const Eq = (0, mE.m)(),
+                 gq = (0, RE.l)((0, mE.p)());
+               (0, rg.reportCountedLoadFallback)((0, NY.m)(qq), Ll.e[qq], Eq, gq), RA(`the wasm client did not ${qq} here (${Eq})`, gq ? "oom" : null)
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5469-L5470` → after: `L6036-L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6036-L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6036-L6037) · [Before (L5469-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5469-L5470)

```diff
-         }(0, Mu.H)(Kz.url()) && (0, ob.reportUnstreamedCoreLoad)();
-         const Nz = (0, iu.G)();
+         }(0, AE.V)(dq.url()) && (0, rg.reportUnstreamedCoreLoad)();
+         const Qq = (0, mE.C)();
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5475` → after: `L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6042) · [Before (L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5475)

```diff
-             wasm: Nz.Wp()
+             wasm: Qq.cB()
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5478-L5482` → after: `L6045-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6045-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6045-L6049) · [Before (L5478-L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5478-L5482)

```diff
-             oK: zz
-           } = Kz.bindings, uz = zz.Zbz();
-           if (uz !== cu.w) return XH({
-             site: zb.c,
-             error: `core ABI ${uz}, page ABI ${cu.w}`,
+             Hd: qq
+           } = dq.bindings, Eq = qq.PYq();
+           if (Eq !== JE.q) return Qc({
+             site: Eg.e,
+             error: `core ABI ${Eq}, page ABI ${JE.q}`,
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5485` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6052) · [Before (L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5485)

```diff
-           const [bz, Ez] = (0, cu.ge)();
+           const [gq, Yq] = (0, JE.Be)();
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5489` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6056) · [Before (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5489)

```diff
-             site: zb.c,
+             site: Eg.e,
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5495` → after: `L6062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6062) · [Before (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5495)

```diff
-         const Jz = new zb.h(vz, iu.x, {
+         const hq = new Eg.l(rq, mE.v, {
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5499` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6066) · [Before (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5499)

```diff
-               if ("webgpu" !== uz || (0, bn.e)()) return !1;
+               if ("webgpu" !== Eq || (0, ml.c)()) return !1;
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5501-L5502` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6068-L6069) · [Before (L5501-L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5501-L5502)

```diff
-                 if (zz.site === zb.f && (0, ku.o)(zz.error)) return "frames_refused";
-                 return zz.site === Zi && (0, ku.r)(zz.error) ? "start_failed" : null
+                 if (qq.site === Eg.i && (0, qg.r)(qq.error)) return "frames_refused";
+                 return qq.site === jO && (0, qg.v)(qq.error) ? "start_failed" : null
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5504` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6071) · [Before (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5504)

```diff
-               if (null === Ez || !(0, ku.Q)(Ez)) return !1;
+               if (null === Yq || !(0, qg.M)(Yq)) return !1;
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5521-L5522` → after: `L6088-L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6088-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6088-L6089) · [Before (L5521-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5521-L5522)

```diff
-               return uz === cu.G.RenderDeviceLost
-             })) && ((0, bn.y)(), GM.deviceLost()), null === (bz = sM) || void 0 === bz || bz.coreErrors(zz), (0, ob.reportCoreErrors)(zz, uz, xz, ((zz, uz) => {
+               return Eq === JE.z.RenderDeviceLost
+             })) && ((0, ml.w)(), Sx.deviceLost()), null === (gq = rx) || void 0 === gq || gq.coreErrors(qq), (0, rg.reportCoreErrors)(qq, Eq, vq, ((qq, Eq) => {
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5524` → after: `L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6091) · [Before (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5524)

```diff
-               return null === (bz = OM) || void 0 === bz ? void 0 : bz.Rbz(zz, uz)
+               return null === (gq = ax) || void 0 === gq ? void 0 : gq.QYq(qq, Eq)
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5530-L5533` → after: `L6097-L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6097-L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6097-L6100) · [Before (L5530-L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5530-L5533)

```diff
-               if ((0, bn.e)()) return;
-               const Mz = uz === cu.Qc.WEBGPU,
-                 tz = Ez === cu.Qc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 Hz = (0, ku.S)(OM);
+               if ((0, ml.c)()) return;
+               const xq = Eq === JE.$c.WEBGPU,
+                 Aq = Yq === JE.$c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 cq = (0, qg.O)(ax);
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5535` → after: `L6102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6102) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5535)

```diff
-               const Oz = Mz ? (0, ku.N)(tz, nz) : null;
+               const uq = xq ? (0, qg.K)(Aq, lq) : null;
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5537-L5538` → after: `L6104-L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6104-L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6104-L6105) · [Before (L5537-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5537-L5538)

```diff
-                 const uz = void 0 === Hz ? "" : ` (${Hz.message})`;
-                 return void zz.crash(ob.RENDER_RELOAD_SITE, new Error(`${(0,ob.renderReloadMessage)("webgpu",tz,bz)} and ${Oz}${uz}`))
+                 const Eq = void 0 === cq ? "" : ` (${cq.message})`;
+                 return void qq.crash(rg.RENDER_RELOAD_SITE, new Error(`${(0,rg.renderReloadMessage)("webgpu",Aq,gq)} and ${uq}${Eq}`))
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5541` → after: `L6108-L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6108-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6108-L6109) · [Before (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5541)

```diff
-               "lost" === tz && (0, bn.y)();
+               "lost" === Aq && (0, ml.w)();
+               xq || (0, NE.m)();
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5552` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6120) · [Before (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5552)

```diff
-             zz.kind === cu.V.SkyImages && (null === (uz = wl) || void 0 === uz || uz.onEvent(zz.payload))
+             qq.kind === JE.S.SkyImages && (null === (Eq = om) || void 0 === Eq || Eq.onEvent(qq.payload))
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5574` → after: `L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6142) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5574)

```diff
-                   !1 !== uz || zz.isStopped ? !0 === uz && console.info(`${di} terrain textures handed over again after the renderer lost them`) : console.warn(`${di} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== Eq || qq.isStopped ? !0 === Eq && console.info(`${VO} terrain textures handed over again after the renderer lost them`) : console.warn(`${VO} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5585` → after: `L6153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6153) · [Before (L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5585)

```diff
-           Jz.setAntiCheatProbes(bi(iu.x, zz.checks)), zz.watchHeld(ni.CoreFrame, (() => Jz.frame)), zz.watchHeld(ni.GlueFrame, (() => vz.frame));
+           hq.setAntiCheatProbes(mO(mE.v, qq.checks)), qq.watchHeld(AO.CoreFrame, (() => hq.frame)), qq.watchHeld(AO.GlueFrame, (() => rq.frame));
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5589` → after: `L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6157) · [Before (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5589)

```diff
-               Ez = Jz.rings.input.writeRecord(cu.pb.AntiCheat, zz, uz, bz, 0)
+               Yq = hq.rings.input.writeRecord(JE.sb.AntiCheat, qq, Eq, gq, 0)
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5594` → after: `L6162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6162) · [Before (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5594)

```diff
-         Vi = (zz, uz, bz) => Jz.rings.cmd.writeCmd(zz, uz, bz), mi = zz => Jz.rings.cmd.growForCmd(zz), al = !1, St(), (0, oz.v)(Jz, {
+         pO = (qq, Eq, gq) => hq.rings.cmd.writeCmd(qq, Eq, gq), GO = qq => hq.rings.cmd.growForCmd(qq), Sm = !1, FA(), (0, tq.q)(hq, {
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5596` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6164) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5596)

```diff
-           memory: iu.x,
+           memory: mE.v,
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5605` → after: `L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6173) · [Before (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5605)

```diff
-           options: Zu.b,
+           options: dE.c,
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5618` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6186) · [Before (L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5618)

```diff
-             return null !== (null !== (uz = null === (bz = yt()) || void 0 === bz ? void 0 : bz.modelUrl(zz)) && void 0 !== uz ? uz : null)
+             return null !== (null !== (Eq = null === (gq = sA()) || void 0 === gq ? void 0 : gq.modelUrl(qq)) && void 0 !== Eq ? Eq : null)
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5622` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6190) · [Before (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5622)

```diff
-         }), (0, rz.L)({
+         }), (0, yq.J)({
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5633` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6201) · [Before (L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5633)

```diff
-             (0, vb.b)()
+             (0, hg.e)()
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5639` → after: `L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6207) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5639)

```diff
-         }), Fl = (0, rz.A)((() => {
+         }), Vm = (0, yq.x)((() => {
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5641-L5642` → after: `L6209-L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6209-L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6209-L6210) · [Before (L5641-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5641-L5642)

```diff
-           const uz = (0, oz.j)();
-           null === (zz = (0, oz.q)()) || void 0 === zz || zz.followCursorAim(!0 === (null === uz || void 0 === uz ? void 0 : uz.isSessionLive) ? uz : null)
+           const Eq = (0, tq.e)();
+           null === (qq = (0, tq.k)()) || void 0 === qq || qq.followCursorAim(!0 === (null === Eq || void 0 === Eq ? void 0 : Eq.isSessionLive) ? Eq : null)
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5648-L5651` → after: `L6216-L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6216-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6216-L6219) · [Before (L5648-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5648-L5651)

```diff
-         const Tz = (0, Zb.h)(),
-           Lz = (0, Zb.e)(Jz, Tz);
-         Ol = Tz.basis, (0, sb.i)(null === Lz ? null : (0, Fb.p)(Lz)), Hl = Lz;
-         const Pz = (0, tu.d)();
+         const bq = (0, Vg.e)(),
+           iq = (0, Vg.b)(hq, bq);
+         Wm = bq.basis, (0, yg.j)(null === iq ? null : (0, ag.j)(iq)), Bm = iq;
+         const Zq = (0, cE.e)();
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5655-L5656` → after: `L6223-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6223-L6224) · [Before (L5655-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5655-L5656)

```diff
-         const mz = new qE.c(Pz, (() => vz.LK()), (zz => {
-           Jz.crash(zb.n, zz)
+         const zq = new GY.b(Zq, (() => rq.hd()), (qq => {
+           hq.crash(Eg.r, qq)
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5658` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6226) · [Before (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5658)

```diff
-         Ml = mz, tl = mz, null !== Lz && mz.setCeiling(Math.min((0, qE.q)(Lz), Gz));
+         cm = zq, um = zq, null !== iq && zq.setCeiling(Math.min((0, GY.n)(iq), fq));
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5662` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6230) · [Before (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5662)

```diff
-             return null !== uz && (null === Hl || uz < Hl) && (Hl = uz, (0, sb.i)((0, Fb.p)(uz))), uz
+             return null !== Eq && (null === Bm || Eq < Bm) && (Bm = Eq, (0, yg.j)((0, ag.j)(Eq))), Eq
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5664` → after: `L6232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6232) · [Before (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5664)

```diff
-             1 === uz ? (0, ob.reportMemoryShed)(zz, bz, Ii) : console.warn(`${di} wasm memory: shed again (${zz}): shed ${uz}`, bz.wasmMemoryShed)
+             1 === Eq ? (0, rg.reportMemoryShed)(qq, gq, IO) : console.warn(`${VO} wasm memory: shed again (${qq}): shed ${Eq}`, gq.wasmMemoryShed)
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5666` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6234) · [Before (L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5666)

```diff
-           const zz = (0, ku.E)(Nz);
+           const qq = (0, qg.B)(Qq);
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5668` → after: `L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6236) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5668)

```diff
-             storedChunks: () => vz.Kbz(),
+             storedChunks: () => rq.yYq(),
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5671` → after: `L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6239) · [Before (L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5671)

```diff
-               return null !== (uz = null === zz || void 0 === zz ? void 0 : zz.wbz()) && void 0 !== uz ? uz : 0
+               return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.tYq()) && void 0 !== Eq ? Eq : 0
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5680` → after: `L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6248) · [Before (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5680)

```diff
-         oM = (0, Xb.e)((zz => Jz.setChunkAddDistance(zz.horizontal, zz.vertical)), {
+         hx = (0, og.i)((qq => hq.setChunkAddDistance(qq.horizontal, qq.vertical)), {
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5683-L5684` → after: `L6251-L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6251-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6251-L6252) · [Before (L5683-L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5683-L5684)

```diff
-         }), Jz.setAmbientOcclusion(!0 !== rb.g.getItem("disableAmbientOcclusion")), Jz.setPoseLod(!0 !== rb.g.getItem(nu.W)), (0, Ln.n)("look") && (Jz.setDebugLog(cu.L.Look, !0), (0, Gn.j)("wasm", (() => Jz.takeDebugLog(cu.L.Look))));
-         (0, Ln.n)("remesh") && (Jz.setDebugLog(cu.L.Remesh, !0), Uz = () => Jz.takeDebugLog(cu.L.Remesh), hn = new qn((0, an.m)(), Uz));
+         }), hq.setAmbientOcclusion(!0 !== tg.i.getItem("disableAmbientOcclusion")), hq.setPoseLod(!0 !== tg.i.getItem(OE.O)), (0, Zl.s)("look") && (hq.setDebugLog(JE.H.Look, !0), (0, Ml.k)("wasm", (() => hq.takeDebugLog(JE.H.Look))));
+         (0, Zl.s)("remesh") && (hq.setDebugLog(JE.H.Remesh, !0), Gq = () => hq.takeDebugLog(JE.H.Remesh), Gl = new pl((0, Tl.m)(), Gq));
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5688-L5690` → after: `L6256-L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6256-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6256-L6258) · [Before (L5688-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5688-L5690)

```diff
-             iz = zz => rb.g.getItem(zz);
-           nz.sync(iz, uz), (0, xu.S)();
-           const lz = (0, tz.o)("customBindingsChanged", (() => {
+             Oq = qq => tg.i.getItem(qq);
+           lq.sync(Oq, Eq), (0, nE.P)();
+           const mq = (0, Aq.k)("customBindingsChanged", (() => {
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5693` → after: `L6261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6261) · [Before (L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5693)

```diff
-           (0, xb.l)(uz);
+           (0, ng.p)(Eq);
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5695` → after: `L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6263) · [Before (L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5695)

```diff
-             Hz = (0, rz.A)((() => {
+             cq = (0, yq.x)((() => {
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5697` → after: `L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6265) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5697)

```diff
-               Mz.size > 0 && nE() && !0 === (null === (zz = (0, oz.j)()) || void 0 === zz ? void 0 : zz.localPlayerAlive()) && tz.k.sK("usedKeyboard")
+               xq.size > 0 && mY() && !0 === (null === (qq = (0, tq.e)()) || void 0 === qq ? void 0 : qq.localPlayerAlive()) && Aq.i.TV("usedKeyboard")
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5703` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6271) · [Before (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5703)

```diff
-                 nz.moves(zz) && (Mz.add(zz), nE() && tz.k.sK("usedKeyboard"))
+                 lq.moves(qq) && (xq.add(qq), mY() && Aq.i.TV("usedKeyboard"))
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5712` → after: `L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6280) · [Before (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5712)

```diff
-                 bE.h.measure(zz.getBoundingClientRect()), (0, Wb.m)()
+                 lY.k.measure(qq.getBoundingClientRect()), (0, wg.k)()
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5716` → after: `L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6284) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5716)

```diff
-                 const bz = (0, Au.t)(zz, uz),
+                 const gq = (0, iE.s)(qq, Eq),
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5723` → after: `L6291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6291) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5723)

```diff
-                 bE.h.measure(zz.getBoundingClientRect())
+                 lY.k.measure(qq.getBoundingClientRect())
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5726` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6294) · [Before (L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5726)

```diff
-               touchUiShown: () => Qz.e.get("isTouchScreen"),
+               touchUiShown: () => sq.b.get("isTouchScreen"),
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5733` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6301) · [Before (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5733)

```diff
-             dz = (0, ib.d)(uz);
+             Wq = (0, mg.e)(Eq);
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5735` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6303) · [Before (L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5735)

```diff
-             lz(), Hz(), (0, xb.l)(null), dz(), pz()
+             mq(), cq(), (0, ng.p)(null), Wq(), Bq()
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5741` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6309) · [Before (L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5741)

```diff
-           })), null === (iz = dl) || void 0 === iz || iz.onInput(zz), !Ll && (0, HE.f)(zz, nz) && (0, HE.c)((() => {
+           })), null === (Oq = am) || void 0 === Oq || Oq.onInput(qq), !Mm && (0, BY.c)(qq, lq) && (0, BY.b)((() => {
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5752-L5753` → after: `L6320-L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6320-L6321) · [Before (L5752-L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5752-L5753)

```diff
-         (0, iu.W)((() => {
-           "call" === (0, iu.s)() && Jz.crash(zb.u, (0, iu.r)())
+         (0, mE.R)((() => {
+           "call" === (0, mE.s)() && hq.crash(Eg.x, (0, mE.p)())
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5755` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6323) · [Before (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5755)

```diff
-         const Sz = (0, zb.N)(Jz.rings.worker, (() => {
+         const kq = (0, Eg.S)(hq.rings.worker, (() => {
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5765` → after: `L6333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6333) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5765)

```diff
-             module: (0, iu.A)(),
+             module: (0, mE.x)(),
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5767` → after: `L6335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6335) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5767)

```diff
-               const uz = (0, oz.q)();
+               const Eq = (0, tq.k)();
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5784` → after: `L6352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6352) · [Before (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5784)

```diff
-               (0, ob.reportWorkerLost)(zb.E, zz, Ii)
+               (0, rg.reportWorkerLost)(Eg.G, qq, IO)
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5787` → after: `L6355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6355) · [Before (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5787)

```diff
-               (0, ob.reportWorkerStartTimeout)(zb.E, zz, Ii)
+               (0, rg.reportWorkerStartTimeout)(Eg.G, qq, IO)
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5802` → after: `L6370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6370) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5802)

```diff
-                 zz.rings.worker.writeWorkerRecord(bz, Ez, nz, 0, iz, lz) || zz.crash(zb.E, `a world-gen record of kind ${Ez} did not fit the worker-in ring`)
+                 qq.rings.worker.writeWorkerRecord(gq, Yq, lq, 0, Oq, mq) || qq.crash(Eg.G, `a world-gen record of kind ${Yq} did not fit the worker-in ring`)
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5808` → after: `L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6376) · [Before (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5808)

```diff
-             module: (0, iu.A)(),
+             module: (0, mE.x)(),
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5812` → after: `L6380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6380) · [Before (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5812)

```diff
-               }, uz] = await Promise.all([bz.e(40).then((() => bz(42638))), Promise.resolve().then((() => bz(96))).then((zz => {
+               }, Eq] = await Promise.all([gq.e(40).then((() => gq(43117))), Promise.resolve().then((() => gq(96))).then((qq => {
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5820` → after: `L6388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6388) · [Before (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5820)

```diff
-                 count: (0, su.d)(navigator.hardwareConcurrency, uz)
+                 count: (0, yE.e)(navigator.hardwareConcurrency, Eq)
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5825` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6393) · [Before (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5825)

```diff
-                 zz.rings.worker.writeWorkerRecord(bz, Ez, nz, iz, lz, Mz) || zz.crash(zb.o, `a meshing record of kind ${Ez} did not fit the worker-in ring`)
+                 qq.rings.worker.writeWorkerRecord(gq, Yq, lq, Oq, mq, xq) || qq.crash(Eg.s, `a meshing record of kind ${Yq} did not fit the worker-in ring`)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5829` → after: `L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6397) · [Before (L5829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5829)

```diff
-               (0, ob.reportWorkerLost)(zb.o, zz, Ii)
+               (0, rg.reportWorkerLost)(Eg.s, qq, IO)
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5835` → after: `L6403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6403) · [Before (L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5835)

```diff
-               (0, ob.reportWorkerStartTimeout)(zb.o, zz, Ii)
+               (0, rg.reportWorkerStartTimeout)(Eg.s, qq, IO)
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5847` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6415) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5847)

```diff
-                 zz.crash(zb.o, void 0 === bz ? uz : new Error(uz, {
+                 qq.crash(Eg.s, void 0 === gq ? Eq : new Error(Eq, {
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5852` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6420) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5852)

```diff
-                 site: zb.o,
+                 site: Eg.s,
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5858` → after: `L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6426) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5858)

```diff
-         const Wz = (0, jE.q)(Xu.clientSideServerUrls.staticUrl, {
+         const Rq = (0, eY.s)(PE.clientSideServerUrls.staticUrl, {
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5867` → after: `L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6435) · [Before (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5867)

```diff
-               return null !== (uz = null === (bz = yt()) || void 0 === bz ? void 0 : bz.modelUrl(zz)) && void 0 !== uz ? uz : null
+               return null !== (Eq = null === (gq = sA()) || void 0 === gq ? void 0 : gq.modelUrl(qq)) && void 0 !== Eq ? Eq : null
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5873` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6441) · [Before (L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5873)

```diff
-               return null !== (Ez = null === (nz = uz()) || void 0 === nz ? void 0 : nz.drawnUrl(bz)) && void 0 !== Ez ? Ez : zz.url(bz)
+               return null !== (Yq = null === (lq = Eq()) || void 0 === lq ? void 0 : lq.drawnUrl(gq)) && void 0 !== Yq ? Yq : qq.url(gq)
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5875` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6443) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5875)

```diff
-             return (0, WE.m)((0, UE.n)(Ez), bz)
+             return (0, CY.h)((0, JY.p)(Yq), gq)
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5877-L5878` → after: `L6445-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6445-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6445-L6446) · [Before (L5877-L5878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5877-L5878)

```diff
-           jz = new UE.f(ez, (zz => {
-             console.warn(`${di} image ${zz.key.kind}:${zz.key.index}:${zz.key.word} failed`, zz.error)
+           wq = new JY.g(Xq, (qq => {
+             console.warn(`${VO} image ${qq.key.kind}:${qq.key.index}:${qq.key.word} failed`, qq.error)
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5881` → after: `L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6449) · [Before (L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5881)

```diff
-           void 0 === uz ? console.warn(`${di} ${zz}`) : Wt(zz, uz)
+           void 0 === Eq ? console.warn(`${VO} ${qq}`) : wA(qq, Eq)
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5883` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6451) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5883)

```diff
-         const Iz = new QE.l(Wz, function(zz, uz) {
+         const Kq = new KY.e(Rq, function(qq, Eq) {
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5914` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6482) · [Before (L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5914)

```diff
-             Mz = bz.e(42).then((() => bz(42647))).then((zz => {
+             xq = gq.e(42).then((() => gq(43119))).then((qq => {
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5927-L5928` → after: `L6495-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6495-L6496) · [Before (L5927-L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5927-L5928)

```diff
-             return null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.build(zz, uz)) && void 0 !== Ez ? Ez : (0, IE.p)(zz, "the model workers did not load")
-           })).then((zz => null !== iz && (0, IE.h)(zz) ? iz.then((() => zz)) : zz))
+             return null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.build(qq, Eq)) && void 0 !== Yq ? Yq : (0, DY.s)(qq, "the model workers did not load")
+           })).then((qq => null !== Oq && (0, DY.k)(qq) ? Oq.then((() => qq)) : qq))
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5945` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6513) · [Before (L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5945)

```diff
-             console.warn(`${di} the texture pack's model file ${zz} failed: the shipped one loads`, uz)
+             console.warn(`${VO} the texture pack's model file ${qq} failed: the shipped one loads`, Eq)
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5958` → after: `L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6526) · [Before (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5958)

```diff
-             site: zb.C,
+             site: Eg.D,
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5963` → after: `L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6531) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5963)

```diff
-           null !== zz && (zz || Jz.isStopped || console.warn(`${di} the core refused the terrain textures: terrain draws untextured`), xl(Jz))
+           null !== qq && (qq || hq.isStopped || console.warn(`${VO} the core refused the terrain textures: terrain draws untextured`), bm(hq))
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5966` → after: `L6534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6534) · [Before (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5966)

```diff
-           console.warn(`${di} ${zz}`, ...void 0 === uz ? [] : [uz])
+           console.warn(`${VO} ${qq}`, ...void 0 === Eq ? [] : [Eq])
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5976` → after: `L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6544) · [Before (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5976)

```diff
-               Hz = !0, null === (zz = tz) || void 0 === zz || zz(), null === (uz = Mz) || void 0 === uz || uz(), eE.e.setSettled(null), null !== Bi && eM.clear(Bi)
+               cq = !0, null === (qq = Aq) || void 0 === qq || qq(), null === (Eq = xq) || void 0 === Eq || Eq(), IY.b.setSettled(null), null !== eO && Ix.clear(eO)
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5980` → after: `L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6548) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5980)

```diff
-             null !== tz && Promise.all([bz.e(193), bz.e(45)]).then((() => bz(42603))).then((bz => {
+             null !== Aq && Promise.all([gq.e(194), gq.e(45)]).then((() => gq(43081))).then((gq => {
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5994` → after: `L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6562) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5994)

```diff
-                   (0, WE.j)(nz), lz.feed((() => async function(zz) {
+                   (0, CY.g)(lq), mq.feed((() => async function(qq) {
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5997-L5998` → after: `L6565-L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6565-L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6565-L6566) · [Before (L5997-L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L5997-L5998)

```diff
-                   }(dz.assets))), Dt(dz.iconOverrides()), iz.refresh().then((zz => {
-                     null !== zz && console.info(`${di} texture pack models: ${zz.resent} of ${zz.delivered} files written again, ${zz.refetched} refetched`)
+                   }(Wq.assets))), (0, wY.k)(Wq.files()), Oq.refresh().then((qq => {
+                     null !== qq && console.info(`${VO} texture pack models: ${qq.resent} of ${qq.delivered} files written again, ${qq.refetched} refetched`)
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6003` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6571) · [Before (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6003)

```diff
-                   (eE.e.setSettled({
+                   (IY.b.setSettled({
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6006` → after: `L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6574) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6006)

```diff
-                   }), null === zz.gameSource && (0, Rb.e)(zz.pack, bz), bz) || function(zz) {
+                   }), null === qq.gameSource && (0, dg.b)(qq.pack, gq), gq) || function(qq) {
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6009` → after: `L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6577) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6009)

```diff
-                       uz && zz && console.info(`${di} the texture pack's animations are in (${Object.keys(zz).length} files)`)
+                       Eq && qq && console.info(`${VO} the texture pack's animations are in (${Object.keys(qq).length} files)`)
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6014` → after: `L6582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6582) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6014)

```diff
-                   eE.e.setSettled(null)
+                   IY.b.setSettled(null)
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6017` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6585) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6017)

```diff
-                 maxTextureSize: () => Promise.resolve((0, ku.Y)(document.createElement("canvas")))
+                 maxTextureSize: () => Promise.resolve((0, qg.Q)(document.createElement("canvas")))
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6021` → after: `L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6589) · [Before (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6021)

```diff
-               console.warn(`${di} the texture pack's terrain didn't load: the built atlas stays`, zz)
+               console.warn(`${VO} the texture pack's terrain didn't load: the built atlas stays`, qq)
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6029` → after: `L6597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6597) · [Before (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6029)

```diff
-             (wu ??= bz.e(50).then((() => bz(42656))).then((zz => {
+             (oE ??= gq.e(51).then((() => gq(43123))).then((qq => {
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6037` → after: `L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6605) · [Before (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6037)

```diff
-               Jz.setTextureLayers(zz) || Jz.isStopped || (console.warn(`${di} the core refused the texture names: textured Boxes draw textureNotFound`), Yz())
+               hq.setTextureLayers(qq) || hq.isStopped || (console.warn(`${VO} the core refused the texture names: textured Boxes draw textureNotFound`), eq())
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6045` → after: `L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6613) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6045)

```diff
-                 console.warn(`${di} the texture names didn't load, so textured Boxes draw textureNotFound`, uz), Yz()
+                 console.warn(`${VO} the texture names didn't load, so textured Boxes draw textureNotFound`, Eq), eq()
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6053-L6054` → after: `L6621-L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6621-L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6621-L6622) · [Before (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6053-L6054)

```diff
-             const tz = (0, ku.E)(bz);
-             if (null === tz) return zz.crash(Zi, new Error(`this ${Ez} build has no openRenderer`)), !1;
+             const Aq = (0, qg.B)(gq);
+             if (null === Aq) return qq.crash(jO, new Error(`this ${Yq} build has no openRenderer`)), !1;
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6059-L6060` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6627-L6628) · [Before (L6059-L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6059-L6060)

```diff
-               const nz = null !== (Oz = null === (pz = Si) || void 0 === pz ? void 0 : pz.pagePreviews()) && void 0 !== Oz ? Oz : null,
-                 Mz = null !== (dz = null === (Fz = Si) || void 0 === Fz ? void 0 : Fz.previewModule(bz)) && void 0 !== dz ? dz : null;
+               const lq = null !== (uq = null === (Bq = UO) || void 0 === Bq ? void 0 : Bq.pagePreviews()) && void 0 !== uq ? uq : null,
+                 xq = null !== (Wq = null === (Nq = UO) || void 0 === Nq ? void 0 : Nq.previewModule(gq)) && void 0 !== Wq ? Wq : null;
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6062-L6064` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6630-L6632) · [Before (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6062-L6064)

```diff
-                 null === nz || void 0 === nz || nz.endSession(!1), Hz = (0, Au.f)().sampleCount, await (0, ku.f)(uz, tz, lz, gt, Hz, await iz);
-                 const zz = (0, ku.i)(bz);
-                 null === zz && console.warn(`${di} this ${Ez} build has no image registry: sky and model images won't show`), (0, cE.e)(zz)
+                 null === lq || void 0 === lq || lq.endSession(!1), cq = (0, iE.h)().sampleCount, await (0, qg.e)(Eq, Aq, mq, UA, cq, await Oq);
+                 const qq = (0, qg.l)(gq);
+                 null === qq && console.warn(`${VO} this ${Yq} build has no image registry: sky and model images won't show`), (0, RY.e)(qq)
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6066-L6067` → after: `L6634-L6635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6634-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6634-L6635) · [Before (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6066-L6067)

```diff
-                 (0, bn.e)() && await (0, Dz.l)();
-                 const bz = (0, bn.D)();
+                 (0, ml.c)() && await (0, Fq.o)();
+                 const gq = (0, ml.K)();
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6069-L6070` → after: `L6637-L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6637-L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6637-L6638) · [Before (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6069-L6070)

```diff
-                   const uz = (0, ku.S)(tz);
-                   return zz.crash(ob.RENDER_RELOAD_SITE, new Error(`${bz}${void 0===uz?"":` (${uz.message})`}`)), !1
+                   const Eq = (0, qg.O)(Aq);
+                   return qq.crash(rg.RENDER_RELOAD_SITE, new Error(`${gq}${void 0===Eq?"":` (${Eq.message})`}`)), !1
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6072` → after: `L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6640) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6072)

```diff
-                 Hz = await nz.bindSession(Mz, uz, (async zz => (0, ku.t)(tz, Zi, lz, zz, gt, await iz)))
+                 cq = await lq.bindSession(xq, Eq, (async qq => (0, qg.w)(Aq, jO, mq, qq, UA, await Oq)))
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6089` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6657) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6089)

```diff
-                   return null !== (zz = nz.call(bz)) && void 0 !== zz ? zz : null
+                   return null !== (qq = lq.call(gq)) && void 0 !== qq ? qq : null
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6095` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6663) · [Before (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6095)

```diff
-             return HM.boundAtMs = null !== (Mz = (0, bn.F)()) && void 0 !== Mz ? Mz : Zz, HM.indirectHangs = (0, bn.z)(), console.info(`${di} ${Ez} renderer bound at ${Math.round(Zz)} ms`), !zz.isStopped
+             return Nx.boundAtMs = null !== (xq = (0, ml.L)()) && void 0 !== xq ? xq : aq, Nx.indirectHangs = (0, ml.z)(), console.info(`${VO} ${Yq} renderer bound at ${Math.round(aq)} ms`), !qq.isStopped
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6099` → after: `L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6667) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6099)

```diff
-           (0, Hu.G)(pz);
+           (0, uE.H)(Bq);
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6101` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6669) · [Before (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6101)

```diff
-           bz.e(185).then((() => bz(8886))).then((uz => {
+           gq.e(186).then((() => gq(9160))).then((Eq => {
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6114` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6682) · [Before (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6114)

```diff
-                   "screenshot" === uz && null === iz ? await (0, YE.b)(zz, Ez, nz) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === Eq && null === Oq ? await (0, gl.e)(qq, Yq, lq) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6124` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6692) · [Before (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6124)

```diff
-                   (0, xb.r)(cu.pb.Resize, 0, zz, uz, (0, xb.i)(1))
+                   (0, ng.u)(JE.sb.Resize, 0, qq, Eq, (0, ng.k)(1))
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6128` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6696) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6128)

```diff
-                   null !== uz && (0, xb.r)(cu.pb.Resize, 0, uz.cssWidth, uz.cssHeight, (0, xb.i)(uz.renderScale))
+                   null !== Eq && (0, ng.u)(JE.sb.Resize, 0, Eq.cssWidth, Eq.cssHeight, (0, ng.k)(Eq.renderScale))
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6136` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6704) · [Before (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6136)

```diff
-             console.warn(`${di} the developer tools didn't load: no captures this session`, zz)
+             console.warn(`${VO} the developer tools didn't load: no captures this session`, qq)
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6138` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6706) · [Before (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6138)

```diff
-           const uz = "webgpu" === pz && null !== (zu = null === Hz || void 0 === Hz || null === (uu = Hz.adapter) || void 0 === uu ? void 0 : uu.vendor) && void 0 !== zu ? zu : null;
+           const Eq = "webgpu" === Bq && null !== (qE = null === cq || void 0 === cq || null === (EE = cq.adapter) || void 0 === EE ? void 0 : EE.vendor) && void 0 !== qE ? qE : null;
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6142` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6710) · [Before (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6142)

```diff
-             fallbackReason: null !== (bu = null === Hz || void 0 === Hz ? void 0 : Hz.reason) && void 0 !== bu ? bu : null,
+             fallbackReason: null !== (gE = null === cq || void 0 === cq ? void 0 : cq.reason) && void 0 !== gE ? gE : null,
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6146` → after: `L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6714) · [Before (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6146)

```diff
-             (0, Wb.r)(pz, Rz, uz)
+             (0, wg.s)(Bq, Vq, Eq)
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6148` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6716) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6148)

```diff
-             (0, Wb.v)(), console.error(`${di} the quality steps didn't start`, nz)
+             (0, wg.t)(), console.error(`${VO} the quality steps didn't start`, lq)
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6155-L6157` → after: `L6723-L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6723-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6723-L6725) · [Before (L6155-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6155-L6157)

```diff
-         pu && console.warn(`${di} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const Ru = Eu ? yz.c : (0, yz.g)(Hz, (0, vu.g)());
-         if ((0, Ln.n)("webgpuloss")) {
+         lE && console.warn(`${VO} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const WE = YE ? Uq.d : (0, Uq.h)(cq, (0, hE.f)());
+         if ((0, Zl.s)("webgpuloss")) {
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6161-L6162` → after: `L6729-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6729-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6729-L6730) · [Before (L6161-L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6161-L6162)

```diff
-             reason: null !== (Ku = null === Hz || void 0 === Hz ? void 0 : Hz.reason) && void 0 !== Ku ? Ku : null,
-             source: null !== (fu = null === Hz || void 0 === Hz ? void 0 : Hz.source) && void 0 !== fu ? fu : null,
+             reason: null !== (jE = null === cq || void 0 === cq ? void 0 : cq.reason) && void 0 !== jE ? jE : null,
+             source: null !== (HE = null === cq || void 0 === cq ? void 0 : cq.source) && void 0 !== HE ? HE : null,
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6166` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6734) · [Before (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6166)

```diff
-           (0, Pn.d)((uz => {
+           (0, fl.b)((Eq => {
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6171-L6172` → after: `L6739-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6739-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6739-L6740) · [Before (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6171-L6172)

```diff
-         if (rl = (0, yz.j)(ru ? Jz : null, ru && null !== (lz = null === (Mz = Si) || void 0 === Mz ? void 0 : Mz.pagePreviews().JZ) && void 0 !== lz ? lz : null, Ru, Wt), UM) return null;
-         if (mz.reserveAtJoin((0, qE.n)(null !== Lz && void 0 !== Lz ? Lz : Fb.g)), Jz.isStopped) return null;
+         if (tm = (0, Uq.k)(QE ? hq : null, QE && null !== (mq = null === (xq = UO) || void 0 === xq ? void 0 : xq.pagePreviews().pN) && void 0 !== mq ? mq : null, WE, wA), Rx) return null;
+         if (zq.reserveAtJoin((0, GY.l)(null !== iq && void 0 !== iq ? iq : ag.f)), hq.isStopped) return null;
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6181-L6182` → after: `L6749-L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6749-L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6749-L6756) · [Before (L6181-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6181-L6182)

```diff
-             }(Jz, VM)) return Jz.writePendingInput(), (0, rz.c)(zz, tH), zH(!1, zz), void requestAnimationFrame(ou);
-           MH(Jz, VM, "budget") && ((0, Ju.l)(Jz.lastFrameKind) && dH() && (0, rz.c)(zz, tH), zH(VM && PM, zz), GM.frame(Jz.lastFrameKind, VM && dH(), zz), fH(Jz), mz.afterFrame(), requestAnimationFrame(ou))
+             }(hq, Gx)) {
+             if (hq.writePendingInput(), (0, yq.f)(qq, uc), gc(!1, qq), null !== tx) try {
+               tx.framePaced()
+             } catch (lq) {
+               lc(lq)
+             }
+             requestAnimationFrame(tE)
+           } else cc(hq, Gx, "budget") && ((0, bE.g)(hq.lastFrameKind) && Vc() && (0, yq.f)(qq, uc), gc(Gx && zx, qq), Sx.frame(hq.lastFrameKind, Gx && Vc(), qq), yc(hq), zq.afterFrame(), requestAnimationFrame(tE))
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6186` → after: `L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6760) · [Before (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6186)

```diff
-           if (zz.has("inputLog") && (0, uE.g)((zz => {
+           if (qq.has("inputLog") && (0, YY.h)((qq => {
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6192` → after: `L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6766) · [Before (L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6192)

```diff
-               console.info(`${EE} input ${uz} ${bz?"down":"up"} press ${Ez} at ${performance.now().toFixed(1)}`)
+               console.info(`${OY} input ${Eq} ${gq?"down":"up"} press ${Yq} at ${performance.now().toFixed(1)}`)
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6233` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6807) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6233)

```diff
-         console.warn(`${di} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, zz)
+         console.warn(`${VO} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, qq)
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6238` → after: `L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6812) · [Before (L6238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6238)

```diff
-         this.deps = zz, this.latest = 0, this.yM = null
+         this.deps = qq, this.latest = 0, this.Fc = null
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6248` → after: `L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6822) · [Before (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6248)

```diff
-         if ((null === (Ez = this.yM) || void 0 === Ez ? void 0 : Ez.module) === zz && (0, ju.be)(this.yM.files, uz)) return !1;
+         if ((null === (Yq = this.Fc) || void 0 === Yq ? void 0 : Yq.module) === qq && (0, KE.be)(this.Fc.files, Eq)) return !1;
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6258` → after: `L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6832) · [Before (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6258)

```diff
-           return this.yM = {
+           return this.Fc = {
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6264` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6838) · [Before (L6264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6264)

```diff
-                 ("error" === zz[uz] ? console.error : console.warn)(`Animation for the texture pack: ${zz[uz+1]}: ${zz[uz+2]}`)
+                 ("error" === qq[Eq] ? console.error : console.warn)(`Animation for the texture pack: ${qq[Eq+1]}: ${qq[Eq+2]}`)
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6271-L6272` → after: `L6845-L6846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6845-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6845-L6846) · [Before (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6271-L6272)

```diff
-           const Ez = (null !== (lz = this.deps.retryAfterMs) && void 0 !== lz ? lz : Bu)[bz];
-           return void 0 === Ez || Mz instanceof Cu || (0, Iu.m)(zz) || setTimeout((() => {
+           const Yq = (null !== (mq = this.deps.retryAfterMs) && void 0 !== mq ? mq : IE)[gq];
+           return void 0 === Yq || xq instanceof eE || (0, CE.g)(qq) || setTimeout((() => {
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6279` → after: `L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6853) · [Before (L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6279)

```diff
-           return zz.Fbz(uz)
+           return qq.oYq(Eq)
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6281` → after: `L6855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6855) · [Before (L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6281)

```diff
-           throw (0, Iu.q)(zz, bz), bz
+           throw (0, CE.k)(qq, gq), gq
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6288-L6289` → after: `L6862-L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6862-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6862-L6863) · [Before (L6288-L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6288-L6289)

```diff
-         const uz = this.yM;
-         if (this.yM = null, (null === uz || void 0 === uz ? void 0 : uz.module) === zz && !(0, Iu.m)(zz)) try {
+         const Eq = this.Fc;
+         if (this.Fc = null, (null === Eq || void 0 === Eq ? void 0 : Eq.module) === qq && !(0, CE.g)(qq)) try {
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6294` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6868) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6294)

```diff
-       compiler: Du.b,
+       compiler: FE.d,
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6310` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6884) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6310)

```diff
-           } = await bz.e(342).then((() => bz(42586)));
+           } = await gq.e(343).then((() => gq(43055)));
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6331-L6332` → after: `L6905-L6907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6905-L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6905-L6907) · [Before (L6331-L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6331-L6332)

```diff
-       const Oz = eE.e.rejoinHold(),
-         pz = (0, fb.O)("wasm", oH);
+       const uq = IY.b.rejoinHold();
+       Xm = null;
+       const Bq = (0, Pg.M)("wasm", hc);
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6340` → after: `L6915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6915) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6340)

```diff
-           kind: "ob"
+           kind: "lE"
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6344` → after: `L6919-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6919-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6919-L6920) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6344)

```diff
-         Fz = performance.now();
+         var Vq, dq;
+         if (Nq = performance.now(), !Aq()) vc(null !== (Vq = null === (dq = qq.target.session) || void 0 === dq ? void 0 : dq.gameNameWithVariation) && void 0 !== Vq ? Vq : null);
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6354` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6930) · [Before (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6354)

```diff
-         var Zz;
+         var jq, Hq;
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6357` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6933) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6357)

```diff
-             if (dn.e.markGameEngineConstructed(), wn) return;
+             if (al.b.markGameEngineConstructed(), ol) return;
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6359-L6361` → after: `L6935-L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6935-L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6935-L6942) · [Before (L6359-L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6359-L6361)

```diff
-             const Ez = Math.max(zz, null !== (uz = Zn) && void 0 !== uz ? uz : zz);
-             (0, Fn.e)("ready", Math.max(0, (null !== (bz = Rn) && void 0 !== bz ? bz : Ez) - Ez) / 1e3)
-           }(iz), tz() || (null !== Rn && null !== Kn ? ((0, Gu.l)("wasm_loaded", Rn), (0, Gu.l)("wasm_core_ready", Kn)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Ez, !bz() && !tz()) null === (Zz = Hz) || void 0 === Zz || Zz.r … [truncated]
+             const Yq = Math.max(qq, null !== (Eq = dl) && void 0 !== Eq ? Eq : qq);
+             (0, Vl.l)("ready", Math.max(0, (null !== (gq = jl) && void 0 !== gq ? gq : Yq) - Yq) / 1e3)
+           }(Oq), !Aq())
+           if (null !== jl && null !== Hl ? ((0, aq.q)("wasm_loaded", jl), (0, aq.q)("wasm_core_ready", Hl)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), qq.target.session && function(qq) {
+               const Eq = (0, KE.Yb)(qq);
+               return "classic" !== Eq ? Jl.has(Eq) : !(0, YE.j)(qq) && !kl.has((0, KE.Tb)(qq))
+             }(qq.target.session.gameNameWithVariation)) null === (jq = mm) || void 0 === jq || jq.prestart();
+         if (await Yq, !gq() && !Aq()) null === (Hq = cq) || void 0 === Hq || Hq.rematched(), qq = await Eq(), Nq = performance.now();
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6363` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6944) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6363)

```diff
-           kind: "ob"
+           kind: "lE"
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6377-L6378` → after: `L6958-L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6958-L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6958-L6960) · [Before (L6377-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6377-L6378)

```diff
-           const pz = new AbortController;
-           zt({
+           const Bq = new AbortController,
+             Wq = null !== (Eq = null === (gq = qq.session) || void 0 === gq ? void 0 : gq.gameNameWithVariation) && void 0 !== Eq ? Eq : null;
+           vc(Wq), lA({
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6380` → after: `L6962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6962) · [Before (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6380)

```diff
-             game: null !== (uz = null === (bz = zz.session) || void 0 === bz ? void 0 : bz.gameNameWithVariation) && void 0 !== uz ? uz : null
+             game: Wq
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6383` → after: `L6965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6965) · [Before (L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6383)

```diff
-             (0, fu.h)(pz, (0, fu.g)(nz))
+             (0, QE.h)(Bq, (0, QE.e)(lq))
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6394` → after: `L6976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6976) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6394)

```diff
-               if ((0, Ln.n)("webgpuloss")) {
+               if ((0, Zl.s)("webgpuloss")) {
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6397` → after: `L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6979) · [Before (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6397)

```diff
-                 (0, Pn.d)((zz => zz.noteWasmJoin(bz, uz, Ez)))
+                 (0, fl.b)((qq => qq.noteWasmJoin(gq, Eq, Yq)))
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6399` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6981) · [Before (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6399)

```diff
-               if (null !== uz) throw new yz.f(uz)
+               if (null !== Eq) throw new Uq.g(Eq)
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6403` → after: `L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6985) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6403)

```diff
-             }] = await YM(Promise.all([(0, oz.l)(uz), CM(zz), null === Mz || void 0 === Mz ? void 0 : Mz(), gM()]), pz.signal), Ez = zz.session, nz = Ez ? {
+             }] = await gA(Promise.all([(0, tq.f)(Eq), EA(qq), null === xq || void 0 === xq ? void 0 : xq(), Fx()]), Bq.signal), Yq = qq.session, lq = Yq ? {
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6419-L6420` → after: `L7001-L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7001-L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7001-L7002) · [Before (L6419-L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6419-L6420)

```diff
-                 if (!(zz instanceof az.d)) return zz;
-                 if ("roomError" === zz.stage && null !== iM) return BM(new az.d(zz.message, zz.stage, zz.code, iM), zz);
+                 if (!(qq instanceof Tq.e)) return qq;
+                 if ("roomError" === qq.stage && null !== cx) return qA(new Tq.e(qq.message, qq.stage, qq.code, cx), qq);
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6422` → after: `L7004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7004) · [Before (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6422)

```diff
-                 return void 0 === uz ? zz : BM(new az.d(zz.message, zz.stage, uz.code), zz)
+                 return void 0 === Eq ? qq : qA(new Tq.e(qq.message, qq.stage, Eq.code), qq)
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6434-L6436` → after: `L7016-L7018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7016-L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7016-L7018) · [Before (L6434-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6434-L6436)

```diff
-                 game: null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.gameNameWithVariation) && void 0 !== uz ? uz : zz.roomName,
-                 lobby: String(null !== nz && void 0 !== nz ? nz : null),
-                 postCookies: null !== (bz = zz.postCookies) && void 0 !== bz ? bz : null
+                 game: null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.gameNameWithVariation) && void 0 !== Eq ? Eq : qq.roomName,
+                 lobby: String(null !== lq && void 0 !== lq ? lq : null),
+                 postCookies: null !== (gq = qq.postCookies) && void 0 !== gq ? gq : null
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6444` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7026) · [Before (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6444)

```diff
-                 game: null !== (Zz = null === (Rz = zz.session) || void 0 === Rz ? void 0 : Rz.gameNameWithVariation) && void 0 !== Zz ? Zz : "",
+                 game: null !== (dq = null === (jq = qq.session) || void 0 === jq ? void 0 : jq.gameNameWithVariation) && void 0 !== dq ? dq : "",
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6446` → after: `L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7028) · [Before (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6446)

```diff
-                 rejoinedAt: tz ? dz : null,
+                 rejoinedAt: Aq ? Wq : null,
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6488` → after: `L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7070) · [Before (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6488)

```diff
-                           console.warn(`${di} the held seat of a game left while it reconnected couldn't be released`, nz)
+                           console.warn(`${VO} the held seat of a game left while it reconnected couldn't be released`, lq)
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6493` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7075) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6493)

```diff
-                     ZJ: zz => {
+                     uL: qq => {
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6509-L6510` → after: `L7091-L7092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7091-L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7091-L7092) · [Before (L6509-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6509-L6510)

```diff
-                         console.warn(`${di} gave up reconnecting (${bz.reason}, ${bz.attempts} attempts)`, bz.lastError), (0, ob.reportReconnectGaveUp)(bz, Ii);
-                         const iz = null !== (Ez = null === (nz = el) || void 0 === nz ? void 0 : nz.rejoin) && void 0 !== Ez ? Ez : null;
+                         console.warn(`${VO} gave up reconnecting (${gq.reason}, ${gq.attempts} attempts)`, gq.lastError), (0, rg.reportReconnectGaveUp)(gq, IO);
+                         const Oq = null !== (Yq = null === (lq = Im) || void 0 === lq ? void 0 : lq.rejoin) && void 0 !== Yq ? Yq : null;
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6529-L6531` → after: `L7111-L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7111-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7111-L7113) · [Before (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6529-L6531)

```diff
-               }(Hz, zz.endpoint), performance.mark(Xi), (0, Gu.l)("wasm_joined", dz), setTimeout((() => {
-                 gl === Hz && (0, Gu.e)()
-               }), 0), WM(), console.info(`${di} joined ${zz.roomName} as ${Hz.seat.sessionId} at ${Math.round(performance.now())} ms`);
+               }(cq, qq.endpoint), performance.mark(QO), (0, aq.q)("wasm_joined", Wq), setTimeout((() => {
+                 Um === cq && (0, aq.g)()
+               }), 0), Cx(), console.info(`${VO} joined ${qq.roomName} as ${cq.seat.sessionId} at ${Math.round(performance.now())} ms`);
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6552` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7134) · [Before (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6552)

```diff
-           kind: "ob"
+           kind: "lE"
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6558` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7140) · [Before (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6558)

```diff
-             console.warn(`${di} the cached traffic code could not be dropped`, zz)
+             console.warn(`${VO} the cached traffic code could not be dropped`, qq)
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6562` → after: `L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7144) · [Before (L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6562)

```diff
-         if (Kz instanceof yz.f) return bz(Kz, performance.now() - Fz), {
+         if (Pq instanceof Uq.g) return gq(Pq, performance.now() - Nq), {
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6567` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7149) · [Before (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6567)

```diff
-         if (Kz instanceof az.d && Kz.code === Ez.b.wasmClientNotAllowed.code && aM) return ct("this server refused the wasm client to this account", "refused"), {
+         if (Pq instanceof Tq.e && Pq.code === Yq.b.wasmClientNotAllowed.code && px) return RA("this server refused the wasm client to this account", "refused"), {
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6572` → after: `L7154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7154) · [Before (L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6572)

```diff
-         const zz = Kz instanceof az.d && Kz.code === Ez.b.outdatedVersion.code,
+         const qq = Pq instanceof Tq.e && Pq.code === Yq.b.outdatedVersion.code,
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6588` → after: `L7170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7170) · [Before (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6588)

```diff
-         dz || pz.end(), eE.e.releaseHold(Oz);
+         Wq || Bq.end(), IY.b.releaseHold(uq);
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6599` → after: `L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7181) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6599)

```diff
-       return zz.session ? (0, oz.o)(ji, zz.session.gameNameWithVariation) : Promise.resolve()
+       return qq.session ? (0, tq.j)(CO, qq.session.gameNameWithVariation) : Promise.resolve()
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6603` → after: `L7185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7185) · [Before (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6603)

```diff
-       return (0, fu.l)(uz), new Promise(((bz, Ez) => {
+       return (0, QE.o)(Eq), new Promise(((gq, Yq) => {
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6605` → after: `L7187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7187) · [Before (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6605)

```diff
-           Ez((0, fu.g)(uz))
+           Yq((0, QE.e)(Eq))
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6626` → after: `L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7208) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6626)

```diff
-       }(), null === bl || bl.left) || (bl.left = !0, null === (Ez = (0, oz.j)()) || void 0 === Ez || Ez.socketLeft(), (0, dz.o)({
+       }(), null === lm || lm.left) || (lm.left = !0, null === (Yq = (0, tq.e)()) || void 0 === Yq || Yq.socketLeft(), (0, Wq.w)({
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6631` → after: `L7213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7213) · [Before (L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6631)

```diff
-       null !== zz && eE.e.setGame(zz.game), ut(null, null !== (bz = null === zz || void 0 === zz ? void 0 : zz.controller) && void 0 !== bz ? bz : null), null === nz || void 0 === nz || nz.leave(), Et(0), (0, Ru.h)()
+       null !== qq && IY.b.setGame(qq.game), OA(null, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.controller) && void 0 !== gq ? gq : null), null === lq || void 0 === lq || lq.leave(), xA(0), (0, jE.g)()
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6635` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7217) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6635)

```diff
-       gl = zz, yl = uz, null === gl && null === yl && eE.e.setGame(void 0)
+       Um = qq, sm = Eq, null === Um && null === sm && IY.b.setGame(void 0)
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6644` → after: `L7226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7226) · [Before (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6644)

```diff
-       return null !== Vi && !UM && null !== uz && !uz.isStopped && (!!Vi(az.k, 0, (0, az.E)(zz)) && (al = !0, 0 === zz || Ll || MH(uz, !1, "all"), !0))
+       return null !== pO && !Rx && null !== Eq && !Eq.isStopped && (!!pO(Tq.j, 0, (0, Tq.y)(qq)) && (Sm = !0, 0 === qq || Mm || cc(Eq, !1, "all"), !0))
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6649-L6650` → after: `L7231-L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7231-L7232) · [Before (L6649-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6649-L6650)

```diff
-       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, fb.i)();
-       const bz = null !== (zz = null === (uz = el) || void 0 === uz ? void 0 : uz.overflow) && void 0 !== zz ? zz : null;
+       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Pg.e)();
+       const gq = null !== (qq = null === (Eq = Im) || void 0 === Eq ? void 0 : Eq.overflow) && void 0 !== qq ? qq : null;
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6659` → after: `L7241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7241) · [Before (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6659)

```diff
-       console.warn(`${di} the event buffer refused records in ${uz} frames (categories ${zz})`), UM || (null !== el ? Mt(el, zz, uz) : null !== yl && function(zz, uz, bz) {
+       console.warn(`${VO} the event buffer refused records in ${Eq} frames (categories ${qq})`), Rx || (null !== Im ? BA(Im, qq, Eq) : null !== sm && function(qq, Eq, gq) {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6662-L6663` → after: `L7244-L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7244-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7244-L7245) · [Before (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6662-L6663)

```diff
-           return null === zz ? "drop" : zz.activated ? "keep" : 0 !== (uz & gu.q.NetSession) ? "fail" : "drop"
-         }((null === (Ez = zM) || void 0 === Ez ? void 0 : Ez.join) === zz ? zM : null, uz);
+           return null === qq ? "drop" : qq.activated ? "keep" : 0 !== (Eq & kE.t.NetSession) ? "fail" : "drop"
+         }((null === (Yq = lx) || void 0 === Yq ? void 0 : Yq.join) === qq ? lx : null, Eq);
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6680` → after: `L7262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7262) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6680)

```diff
-         if (0 === (zz & gu.q.NetSession)) return "none";
+         if (0 === (qq & kE.t.NetSession)) return "none";
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6686` → after: `L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7268) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6686)

```diff
-         const uz = "rejoin" === nz && performance.now() - uM >= Gz.h;
+         const Eq = "rejoin" === lq && performance.now() - Ox >= Mq.f;
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6711` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7293) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6711)

```diff
-         Ez = null !== (uz = zz.joinOptions.lobbyName) && void 0 !== uz ? uz : null;
+         Yq = null !== (Eq = qq.joinOptions.lobbyName) && void 0 !== Eq ? Eq : null;
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6718` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7300) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6718)

```diff
-       return bz.e(342).then((() => bz(42586))).then((zz => {
+       return gq.e(343).then((() => gq(43055))).then((qq => {
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6724` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7306) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6724)

```diff
-         console.warn(`${di} the cached traffic code could not be dropped`, zz)
+         console.warn(`${VO} the cached traffic code could not be dropped`, qq)
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6742-L6743` → after: `L7324-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7324-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7324-L7325) · [Before (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6742-L6743)

```diff
-       const Oz = (0, Gz.m)(uz, (0, fE.d)(zz));
-       if (console.info(`${di} the game's connection closed with code ${uz} (${null!==(iz=Oz.name)&&void 0!==iz?iz:"unrecognised"})`), uz === Ez.b.gameOrPluginKick.code || lz || (0, ob.reportDisconnect)(Oz, Ii, {
+       const uq = (0, Mq.j)(Eq, (0, QY.g)(qq));
+       if (console.info(`${VO} the game's connection closed with code ${Eq} (${null!==(Oq=uq.name)&&void 0!==Oq?Oq:"unrecognised"})`), Eq === Yq.b.gameOrPluginKick.code || mq || (0, rg.reportDisconnect)(uq, IO, {
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6749` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7331) · [Before (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6749)

```diff
-           bz = new Error(`the game's connection closed with code ${uz}`),
+           gq = new Error(`the game's connection closed with code ${Eq}`),
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6759-L6760` → after: `L7341-L7342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7341-L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7341-L7342) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6759-L6760)

```diff
-       const pz = Oz.canReconnect ? Mz : null,
-         dz = null !== pz && Oz.automaticallyReconnect && performance.now() - uM >= Gz.h;
+       const Bq = uq.canReconnect ? xq : null,
+         Wq = null !== Bq && uq.automaticallyReconnect && performance.now() - Ox >= Mq.f;
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6771` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7353) · [Before (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6771)

```diff
-       eE.e.unwantedLeave(bz && null !== uz && 0 === EM.size), null === (Ez = bM) || void 0 === Ez || Ez.abort();
+       IY.b.unwantedLeave(gq && null !== Eq && 0 === xx.size), null === (Yq = mx) || void 0 === Yq || Yq.abort();
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6779` → after: `L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7361) · [Before (L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6779)

```diff
-         const zz = setTimeout(lz, Gz.d);
+         const qq = setTimeout(mq, Mq.e);
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6798-L6800` → after: `L7380-L7382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7380-L7382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7380-L7382) · [Before (L6798-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6798-L6800)

```diff
-           console.error(`${di} an unwanted-leave listener threw`, tz)
-         } else ZE((0, pE.l)(zz, null !== lz, bz), iz.signal).then((uz => {
-           uz && (null !== lz ? lz() : zz.requiresRefresh && (0, Dz.j)())
+           console.error(`${VO} an unwanted-leave listener threw`, Aq)
+         } else dY((0, NY.h)(qq, null !== mq, gq), Oq.signal).then((Eq => {
+           Eq && (null !== mq ? mq() : qq.requiresRefresh && (0, Fq.k)())
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6834` → after: `L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7416) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6834)

```diff
-           aux: cu.Vb.AdEnd,
+           aux: JE._b.AdEnd,
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6863` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7445) · [Before (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6863)

```diff
-       if (zz.readyState === WebSocket.CLOSING || zz.readyState === WebSocket.CLOSED) return console.warn(`${di} a closing or closed socket can't be attached`), null;
+       if (qq.readyState === WebSocket.CLOSING || qq.readyState === WebSocket.CLOSED) return console.warn(`${VO} a closing or closed socket can't be attached`), null;
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6865-L6867` → after: `L7447-L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7447-L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7447-L7449) · [Before (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6865-L6867)

```diff
-       if (!nz || nz.isStopped) return console.warn(`${di} no core is running to attach a socket to`), zz.close(), null;
-       if (null === (0, oz.j)()) return console.warn(`${di} the game has not started to attach a socket to`), zz.close(), null;
-       if (Jl > cu.u) return console.warn(`${di} this core has attached all the sockets it can; reload to play on`), zz.close(), null;
+       if (!lq || lq.isStopped) return console.warn(`${VO} no core is running to attach a socket to`), qq.close(), null;
+       if (null === (0, tq.e)()) return console.warn(`${VO} the game has not started to attach a socket to`), qq.close(), null;
+       if (im > JE.p) return console.warn(`${VO} this core has attached all the sockets it can; reload to play on`), qq.close(), null;
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6871-L6872` → after: `L7453-L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7453-L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7453-L7454) · [Before (L6871-L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6871-L6872)

```diff
-       if (!qt(nz, "open", iz, Ez ? cu.Tb.Resume : 0)) return zz.close(), null;
-       Ez || Zu.b.reset(), zM = null === yl ? null : {
+       if (!LA(lq, "open", Oq, Yq ? JE.Wb.Resume : 0)) return qq.close(), null;
+       Yq || dE.c.reset(), lx = null === sm ? null : {
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6877` → after: `L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7459) · [Before (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6877)

```diff
-       const lz = new pb.c((() => {
+       const mq = new Wg.b((() => {
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6899` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7481) · [Before (L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6899)

```diff
-             lz.heard(), Mz.token = null !== (uz = (0, db.b)(bz)) && void 0 !== uz ? uz : Mz.token,
+             mq.heard(), xq.token = null !== (Eq = (0, Ng.e)(gq)) && void 0 !== Eq ? Eq : xq.token,
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6902` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7484) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6902)

```diff
-                   zz.rings.net.writeFrame(uz, bz) || zz.crash(zb.q, `a socket frame of ${bz.byteLength} bytes did not fit the net-in ring`)
+                   qq.rings.net.writeFrame(Eq, gq) || qq.crash(Eg.w, `a socket frame of ${gq.byteLength} bytes did not fit the net-in ring`)
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6910` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7492) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6910)

```diff
-           Ez || (0, Gu.l)("wasm_socket_open", performance.now());
+           Yq || (0, aq.q)("wasm_socket_open", performance.now());
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6920` → after: `L7502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7502) · [Before (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6920)

```diff
-       return zz.addEventListener("message", tz), zz.addEventListener("open", Hz), zz.addEventListener("close", Oz), bl = Mz, null === (uz = (0, oz.j)()) || void 0 === uz || uz.socketAttached(iz), (0, dz.o)({
+       return qq.addEventListener("message", Aq), qq.addEventListener("open", cq), qq.addEventListener("close", uq), lm = xq, null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.socketAttached(Oq), (0, Wq.w)({
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6944-L6945` → after: `L7526-L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7526-L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7526-L7527) · [Before (L6944-L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6944-L6945)

```diff
-         token: `${Ez.roomId}:${uz.token}`
-       }), qt(zz, "close", uz.conn), null === (bz = (0, oz.j)()) || void 0 === bz || bz.socketDetached(uz.conn), !0
+         token: `${Yq.roomId}:${Eq.token}`
+       }), LA(qq, "close", Eq.conn), null === (gq = (0, tq.e)()) || void 0 === gq || gq.socketDetached(Eq.conn), !0
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6954` → after: `L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7536) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6954)

```diff
-         yM: lz,
+         Fc: mq,
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6959-L6960` → after: `L7541-L7542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7541-L7542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7541-L7542) · [Before (L6959-L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6959-L6960)

```diff
-       if (!qt(zz, "close", uz.conn, cu.z.Held)) return !0;
-       console.warn(`${di} the game's connection ${nz?"went silent":`dropped with code ${bz}`}, holding it`);
+       if (!LA(qq, "close", Eq.conn, JE.r.Held)) return !0;
+       console.warn(`${VO} the game's connection ${lq?"went silent":`dropped with code ${gq}`}, holding it`);
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6966` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7548) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6966)

```diff
-       return (0, ob.reportDisconnect)((0, Gz.m)(bz), Ii, Oz, nz ? "silent" : void 0), lz.heldConn = uz.conn, lz.dropCode = bz, lz.pendingHold = {
+       return (0, rg.reportDisconnect)((0, Mq.j)(gq), IO, uq, lq ? "silent" : void 0), mq.heldConn = Eq.conn, mq.dropCode = gq, mq.pendingHold = {
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6968` → after: `L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7550) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6968)

```diff
-         token: `${lz.roomId}:${Mz}`
+         token: `${mq.roomId}:${xq}`
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6977` → after: `L7559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7559) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6977)

```diff
-         yM: bz,
+         Fc: gq,
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6986` → after: `L7568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7568) · [Before (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6986)

```diff
-       null === (bz = (0, oz.j)()) || void 0 === bz || bz.closeGame(zz), (0, En.d)().close(zz), uz || (0, dz.o)({
+       null === (gq = (0, tq.e)()) || void 0 === gq || gq.closeGame(qq), (0, xl.e)().close(qq), Eq || (0, Wq.w)({
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6994-L6995` → after: `L7576-L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7576-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7576-L7577) · [Before (L6994-L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L6994-L6995)

```diff
-       const uz = (0, oz.j)();
-       UM || null === uz || uz.ZJ(zz) ? Cl = null : performance.now() - Vl.pause >= Li && (Vl.pause = performance.now(), console.warn(`${di} the cmd ring had no room for SetPaused(${zz}): written before the next frame`))
+       const Eq = (0, tq.e)();
+       Rx || null === Eq || Eq.uL(qq) ? Ex = null : performance.now() - pm.pause >= MO && (pm.pause = performance.now(), console.warn(`${VO} the cmd ring had no room for SetPaused(${qq}): written before the next frame`))
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7008` → after: `L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7590) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7008)

```diff
-       zz.heldConn = 0, zz.pendingHold = null, jl === zz && (jl = null), "left" === uz ? zz.resume.leave() : zz.resume.dispose(), 0 === Bl || (null === (bz = bl) || void 0 === bz ? void 0 : bz.conn) !== Bl || "left" === uz && (null === (Ez = gl) || void 0 === Ez ? void 0 : Ez.conn … [truncated]
+       qq.heldConn = 0, qq.pendingHold = null, em === qq && (em = null), "left" === Eq ? qq.resume.leave() : qq.resume.dispose(), 0 === qx || (null === (gq = lm) || void 0 === gq ? void 0 : gq.conn) !== qx || "left" === Eq && (null === (Yq = Um) || void 0 === Yq ? void 0 : Yq.conn … [truncated]
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7029` → after: `L7611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7611) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7029)

```diff
-       (null === bz || void 0 === bz ? void 0 : bz.conn) === zz && (bz.left = !0, null === (uz = (0, oz.j)()) || void 0 === uz || uz.socketLeft(), (0, dz.o)({
+       (null === gq || void 0 === gq ? void 0 : gq.conn) === qq && (gq.left = !0, null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.socketLeft(), (0, Wq.w)({
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7043` → after: `L7625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7625) · [Before (L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7043)

```diff
-         nz = "open" === uz ? iz.writeOpen(bz, Ez) : iz.writeClose(bz, Ez), nz || zz.crash(zb.q, `a socket ${uz} did not fit the net-in ring`)
+         lq = "open" === Eq ? Oq.writeOpen(gq, Yq) : Oq.writeClose(gq, Yq), lq || qq.crash(Eg.w, `a socket ${Eq} did not fit the net-in ring`)
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7050-L7051` → after: `L7632-L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7632-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7632-L7633) · [Before (L7050-L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7050-L7051)

```diff
-         const Ez = "browser" === zz && (0, bn.N)() ? "blockedAfterLoss" : "unsupported";
-         return (0, ob.reportUnsupportedFallback)(zz, Ez, uz, bz), void ct(`the wasm client can't run here (${uz}; ${Ez})`, Ez)
+         const Yq = "browser" === qq && (0, ml.U)() ? "blockedAfterLoss" : "unsupported";
+         return (0, rg.reportUnsupportedFallback)(qq, Yq, Eq, gq), void RA(`the wasm client can't run here (${Eq}; ${Yq})`, Yq)
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7056` → after: `L7638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7638) · [Before (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7056)

```diff
-       return aM && "wasm" !== (0, pu.h)(window.location.search)
+       return px && "wasm" !== (0, NE.g)(window.location.search)
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7060` → after: `L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7642) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7060)

```diff
-       console.warn(`${di} ${zz}: reloading on the JS client`), null !== uz && (0, pu.u)(uz), (0, pu.q)(null === uz ? "reloadOntoJs" : "decline");
+       console.warn(`${VO} ${qq}: reloading on the JS client`), null !== Eq && (0, NE.u)(Eq), (0, NE.q)(null === Eq ? "reloadOntoJs" : "decline");
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7062` → after: `L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7644) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7062)

```diff
-         (0, Dz.g)(pu.y)
+         (0, Fq.i)(NE.w)
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7064` → after: `L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7646) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7064)

```diff
-       (0, ob.flushCrashReports)(Dz.c).then(bz, bz)
+       (0, rg.flushCrashReports)(Fq.e).then(gq, gq)
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7077-L7088` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7659) · [Before (L7077-L7088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7077-L7088)

```diff
-       return null !== (zz = null === (uz = Wi) || void 0 === uz || null === (bz = uz.textures) || void 0 === bz ? void 0 : bz.files()) && void 0 !== zz ? zz : null
-     }
- 
-     function Dt(zz) {
-       bz.e(260).then((() => bz(39910))).then((uz => {
-         let {
-           setIconFileOverrides: bz
-         } = uz;
-         bz(zz)
-       }), (zz => {
-         console.warn(`${di} the item icons couldn't take the texture pack's files`, zz)
-       }))
+       return null !== (qq = null === (Eq = wO) || void 0 === Eq || null === (gq = Eq.textures) || void 0 === gq ? void 0 : gq.files()) && void 0 !== qq ? qq : null
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7093` → after: `L7664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7664) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7093)

```diff
-         null !== uz && Promise.all([Promise.all([bz.e(193), bz.e(45)]).then((() => bz(42624))), (0, bn.I)()]).then((zz => {
+         null !== Eq && Promise.all([Promise.all([gq.e(194), gq.e(45)]).then((() => gq(43094))), (0, ml.P)()]).then((qq => {
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7097-L7099` → after: `L7668-L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7668-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7668-L7670) · [Before (L7097-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7097-L7099)

```diff
-           const nz = null === Ez || (0, ku.m)(Ez) ? "webgl" : Ez.backend;
-           bz(uz, WE.f, nz, (zz => {
-             WE.f.setPageFiles(zz)
+           const lq = null === Yq || (0, qg.p)(Yq) ? "webgl" : Yq.backend;
+           gq(Eq, CY.d, lq, (qq => {
+             CY.d.setPageFiles(qq)
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7102` → after: `L7673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7673) · [Before (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7102)

```diff
-           console.warn(`${di} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, uz), zz()
+           console.warn(`${VO} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Eq), qq()
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7108` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7679) · [Before (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7108)

```diff
-       console.warn(`${di} ${zz}`, uz)
+       console.warn(`${VO} ${qq}`, Eq)
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7113` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7684) · [Before (L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7113)

```diff
-         load: zz => Promise.all([bz.e(193), bz.e(51)]).then((() => bz(42628))).then((uz => {
+         load: qq => Promise.all([gq.e(194), gq.e(52)]).then((() => gq(43103))).then((Eq => {
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7119-L7120` → after: `L7690-L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7690-L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7690-L7691) · [Before (L7119-L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7119-L7120)

```diff
-         store: rb.d,
-         xZ: zz => {
+         store: tg.f,
+         SN: qq => {
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7159` → after: `L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7730) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7159)

```diff
-       }((zz => (0, bu.k)(zz) ? et().request() : et().forJoin()), fn.c, Wt),
+       }((qq => (0, YE.j)(qq) ? KA().request() : KA().forJoin()), Ql.d, wA),
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7195` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7766) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7195)

```diff
-             return null !== (zz = null === (uz = rl) || void 0 === uz ? void 0 : uz.reachInJoinedGame()) && void 0 !== zz ? zz : null
+             return null !== (qq = null === (Eq = tm) || void 0 === Eq ? void 0 : Eq.reachInJoinedGame()) && void 0 !== qq ? qq : null
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7201` → after: `L7772-L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7772-L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7772-L7779) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7201)

```diff
-             return null !== (zz = null === (uz = ll) || void 0 === uz ? void 0 : uz.takeFailedMeshJobs()) && void 0 !== zz ? zz : 0
+             return null !== (qq = null === (Eq = Am) || void 0 === Eq ? void 0 : Eq.takeFailedMeshJobs()) && void 0 !== qq ? qq : 0
+           },
+           readLoadCounts: qq => {
+             var Eq, gq;
+             return null !== (Eq = null === (gq = sO) || void 0 === gq ? void 0 : gq.readLoadCounts(qq)) && void 0 !== Eq && Eq
+           },
+           mainStalled: (qq, Eq) => {
+             (0, rg.reportMainStall)(qq, Eq, IO)
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7205` → after: `L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7783) · [Before (L7205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7205)

```diff
-         console.error(`${di} the frame telemetry didn't start`, iz)
+         console.error(`${VO} the frame telemetry didn't start`, Oq)
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7212-L7213` → after: `L7790-L7791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7790-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7790-L7791) · [Before (L7212-L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7212-L7213)

```diff
-         const iz = tM && null !== (bz = null === (Ez = Di) || void 0 === Ez || null === (nz = Ez.lastHeader) || void 0 === nz ? void 0 : nz.renderPending) && void 0 !== bz ? bz : 0;
-         (0, Wb.i)(uz, zz, uH() && !(null !== Mn), iz)
+         const Oq = Wx && null !== (gq = null === (Yq = sO) || void 0 === Yq || null === (lq = Yq.lastHeader) || void 0 === lq ? void 0 : lq.renderPending) && void 0 !== gq ? gq : 0;
+         (0, wg.g)(Eq, qq, Yc() && !(null !== cl), Oq)
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7215` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7793) · [Before (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7215)

```diff
-         (0, Wb.v)(), console.error(`${di} the quality steps stopped`, iz)
+         (0, wg.t)(), console.error(`${VO} the quality steps stopped`, Oq)
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7229` → after: `L7807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7807) · [Before (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7229)

```diff
-       console.error(`${di} the frame telemetry threw: it stops`, zz)
+       console.error(`${VO} the frame telemetry threw: it stops`, qq)
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7234-L7235` → after: `L7812-L7813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7812-L7813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7812-L7813) · [Before (L7234-L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7234-L7235)

```diff
-       if ((0, En.d)().fire(zz), "message" === zz.type) {
-         if (Pl++, zz.zM === cu.Fc.ERROR && null !== yl) {
+       if ((0, xl.e)().fire(qq), "message" === qq.type) {
+         if (Tm++, qq.Hc === JE.Pc.ERROR && null !== sm) {
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7240` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7818) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7240)

```diff
-           } = (0, Gz.r)((new TextDecoder).decode(zz.payload));
+           } = (0, Mq.n)((new TextDecoder).decode(qq.payload));
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7242` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7820) · [Before (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7242)

```diff
-         } else if (zz.zM === gu.Wb.ResumeComplete) {
+         } else if (qq.Hc === kE.ec.ResumeComplete) {
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7248` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7826) · [Before (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7248)

```diff
-       zz.phase === cu.B.Left ? Gl = zz.conn : zz.phase === cu.B.Activated && (null === (uz = zM) || void 0 === uz ? void 0 : uz.conn) === zz.conn ? zM.activated = !0 : zz.phase === cu.B.Resumed ? function(zz) {
+       qq.phase === JE.u.Left ? zm = qq.conn : qq.phase === JE.u.Activated && (null === (Eq = lx) || void 0 === Eq ? void 0 : Eq.conn) === qq.conn ? lx.activated = !0 : qq.phase === JE.u.Resumed ? function(qq) {
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7253` → after: `L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7831) · [Before (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7253)

```diff
-         console.info(`${di} the game resumed on conn ${zz}, waiting for its InitialInfo`);
+         console.info(`${VO} the game resumed on conn ${qq}, waiting for its InitialInfo`);
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7258` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7836) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7258)

```diff
-         }), Zu.b.apply({
+         }), dE.c.apply({
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7260` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7838) · [Before (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7260)

```diff
-           _shopVersion: Eu.d
+           _shopVersion: lE.c
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7262` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7840) · [Before (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7262)

```diff
-       }(zz.conn) : zz.phase === cu.B.Held ? function(zz) {
+       }(qq.conn) : qq.phase === JE.u.Held ? function(qq) {
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7265-L7266` → after: `L7843-L7844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7843-L7844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7843-L7844) · [Before (L7265-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7265-L7266)

```diff
-           Ez = null !== (uz = null === bz || void 0 === bz ? void 0 : bz.pendingHold) && void 0 !== uz ? uz : null;
-         if (null !== bz && null !== Ez && Ez.conn === zz) return bz.pendingHold = null, bz.heldConn = zz, Bl = 0, console.warn(`${di} the core holds the game, reconnecting`), void bz.resume.onDropped(Ez.token);
+           Yq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.pendingHold) && void 0 !== Eq ? Eq : null;
+         if (null !== gq && null !== Yq && Yq.conn === qq) return gq.pendingHold = null, gq.heldConn = qq, qx = 0, console.warn(`${VO} the core holds the game, reconnecting`), void gq.resume.onDropped(Yq.token);
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7270` → after: `L7848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7848) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7270)

```diff
-           null === uz || uz.isStopped || (console.info(`${di} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), qt(uz, "close", zz))
+           null === Eq || Eq.isStopped || (console.info(`${VO} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), LA(Eq, "close", qq))
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7272` → after: `L7850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7850) · [Before (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7272)

```diff
-       }(zz.conn) : zz.phase === cu.B.Closed && (null === (bz = jl) || void 0 === bz || null === (Ez = bz.pendingHold) || void 0 === Ez ? void 0 : Ez.conn) === zz.conn && (jl.heldConn === zz.conn ? function(zz) {
+       }(qq.conn) : qq.phase === JE.u.Closed && (null === (gq = em) || void 0 === gq || null === (Yq = gq.pendingHold) || void 0 === Yq ? void 0 : Yq.conn) === qq.conn && (em.heldConn === qq.conn ? function(qq) {
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7275` → after: `L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7853) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7275)

```diff
-         Pt(zz, "refused"), console.info(`${di} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
+         zA(qq, "refused"), console.info(`${VO} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7279-L7281` → after: `L7857-L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7857-L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7857-L7859) · [Before (L7279-L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7279-L7281)

```diff
-       const Mz = Object.keys(cu.B).find((uz => cu.B[uz] === zz.phase)),
-         tz = 0 === zz.code ? "" : ` (code ${zz.code})`;
-       console.info(`${di} conn ${zz.conn}: ${null!==Mz&&void 0!==Mz?Mz:zz.phase}${tz}, ${Pl} raw messages so far`), (null === (nz = gl) || void 0 === nz ? void 0 : nz.conn) !== zz.conn || zz.phase !== cu.B.Left && zz.phase !== cu.B.Closed || bt(null), Dl !== zz.conn || zz.phase ! … [truncated]
+       const xq = Object.keys(JE.u).find((Eq => JE.u[Eq] === qq.phase)),
+         Aq = 0 === qq.code ? "" : ` (code ${qq.code})`;
+       console.info(`${VO} conn ${qq.conn}: ${null!==xq&&void 0!==xq?xq:qq.phase}${Aq}, ${Tm} raw messages so far`), (null === (lq = Um) || void 0 === lq ? void 0 : lq.conn) !== qq.conn || qq.phase !== JE.u.Left && qq.phase !== JE.u.Closed || mA(null), wm !== qq.conn || qq.phase ! … [truncated]
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7285` → after: `L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7863) · [Before (L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7285)

```diff
-         (0, Su.p)(Hz, `${di} a connection listener threw`)
+         (0, RE.r)(cq, `${VO} a connection listener threw`)
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7290` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7868) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7290)

```diff
-       (0, bn.s)(), queueMicrotask((() => {
+       (0, ml.n)(), queueMicrotask((() => {
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7294-L7295` → after: `L7872-L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7872-L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7872-L7873) · [Before (L7294-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7294-L7295)

```diff
-           console.warn(`${di} stopping before the reload threw`, zz)
-         }(0, ob.flushCrashReports)(Dz.c).then(Dz.j, Dz.j)
+           console.warn(`${VO} stopping before the reload threw`, qq)
+         }(0, rg.flushCrashReports)(Fq.e).then(Fq.k, Fq.k)
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7320` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7898) · [Before (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7320)

```diff
-           Tt(), Al = performance.now(), Gl = null, al = !1, (0, rz.O)(), null === (iz = dl) || void 0 === iz || iz.beforeFrame(), lE(Al, zz), (0, rz.H)(Al, OH), Tl = !0;
+           MA(), Zm = performance.now(), zm = null, Sm = !1, (0, yq.N)(), null === (Oq = am) || void 0 === Oq || Oq.beforeFrame(), AY(Zm, qq), (0, yq.F)(Zm, Wc), fm = !0;
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7329` → after: `L7907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7907) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7329)

```diff
-           KM.observe(null !== (lz = null === (Mz = zz.lastHeader) || void 0 === Mz ? void 0 : Mz.chunksCancelled) && void 0 !== lz ? lz : 0);
+           Px.observe(null !== (mq = null === (xq = qq.lastHeader) || void 0 === xq ? void 0 : xq.chunksCancelled) && void 0 !== mq ? mq : 0);
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7331` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7909) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7331)

```diff
-             dz = (0, Ju.e)(pz);
+             Wq = (0, bE.c)(Bq);
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7335` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7913) · [Before (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7335)

```diff
-           dz && (0, Nu.d)(Al);
+           Wq && (0, vE.e)(Zm);
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7346` → after: `L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7924) · [Before (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7346)

```diff
-           null !== Gl && (null === Fz || void 0 === Fz ? void 0 : Fz.conn) === Gl && KH(Fz, az.o);
+           null !== zm && (null === Nq || void 0 === Nq ? void 0 : Nq.conn) === zm && oc(Nq, Tq.k);
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7352` → after: `L7930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7930) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7352)

```diff
-             null === JM || AM || (AM = !0, (0, Gu.l)("wasm_startup_loaded", JM));
+             null === Zx || fx || (fx = !0, (0, aq.q)("wasm_startup_loaded", Zx));
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7354-L7355` → after: `L7932-L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7932-L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7932-L7933) · [Before (L7354-L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7354-L7355)

```diff
-             null !== gl ? bz = -1 : !0 === (null === (uz = zM) || void 0 === uz ? void 0 : uz.activated) && (bz = ~gu.M.TerrainDrawn);
-             const Ez = zz.headerWord(gu.A.LoadSteps) & bz & ~xM;
+             null !== Um ? gq = -1 : !0 === (null === (Eq = lx) || void 0 === Eq ? void 0 : Eq.activated) && (gq = ~kE.O.TerrainDrawn);
+             const Yq = qq.headerWord(kE.C.LoadSteps) & gq & ~ix;
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7359` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7937) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7359)

```diff
-             for (const [iz, lz] of Object.entries(pH)) 0 !== (Ez & gu.M[iz]) && (0, Gu.l)(lz, nz)
+             for (const [Oq, mq] of Object.entries(ac)) 0 !== (Yq & kE.O[Oq]) && (0, aq.q)(mq, lq)
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7363` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7941) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7363)

```diff
-             null === TM || LM === gl && !TM.frame(Al, 0 !== (zz.headerWord(gu.A.LoadSteps) & gu.M.TerrainDrawn)) || (TM = null);
+             null === Mx || Tx === Um && !Mx.frame(Zm, 0 !== (qq.headerWord(kE.C.LoadSteps) & kE.O.TerrainDrawn)) || (Mx = null);
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7368` → after: `L7946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7946) · [Before (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7368)

```diff
-             const Mz = null !== (uz = null === iz || void 0 === iz ? void 0 : iz.firstView) && void 0 !== uz ? uz : cu.W.NotYet;
+             const xq = null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.firstView) && void 0 !== Eq ? Eq : JE.W.NotYet;
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7370` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7948) · [Before (L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7370)

```diff
-             if (NM && (!0 !== (null === (Ez = (0, oz.j)()) || void 0 === Ez ? void 0 : Ez.isSessionLive) || !lz)) return;
+             if (nx && (!0 !== (null === (Yq = (0, tq.e)()) || void 0 === Yq ? void 0 : Yq.isSessionLive) || !mq)) return;
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7374` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7952) · [Before (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7374)

```diff
-                 gl === tz && (0, Gu.i)()
+                 Um === Aq && (0, aq.j)()
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7385` → after: `L7963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7963) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7385)

```diff
-             NM = !0, performance.mark(fi), (0, Ln.n)("render") && Promise.all([bz.e(74), bz.e(47)]).then((() => bz(4430))).then((zz => {
+             nx = !0, performance.mark(yO), (0, Zl.s)("render") && Promise.all([gq.e(75), gq.e(47)]).then((() => gq(4511))).then((qq => {
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7395-L7396` → after: `L7973-L7977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7973-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7973-L7977) · [Before (L7395-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7395-L7396)

```diff
-               const zz = Mz === cu.W.HeldBackstop ? "held_draws" : "long";
-               if (console.warn(`${di} playable at ${Hz} ms on the first view's ${zz} backstop: it wasn't drawn whole in time`), (0, Gu.l)("wasm_view_backstop", Hz, zz), "long" === zz) {
+               const Eq = xq === JE.W.HeldBackstop ? "held_draws" : "long",
+                 {
+                   cause: gq
+                 } = Nc(qq);
+               if (console.warn(`${VO} playable at ${cq} ms on the first view's ${Eq} backstop, ${gq}: it wasn't drawn whole in time`), (0, aq.q)("wasm_view_backstop", cq, `${Eq}:${gq}`), "long" === Eq) {
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7398-L7400` → after: `L7979-L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7979-L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7979-L7985) · [Before (L7398-L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7398-L7400)

```diff
-                 const zz = null !== (Oz = null === (pz = el) || void 0 === pz ? void 0 : pz.game) && void 0 !== Oz ? Oz : "";
-                 TM = new Nb.d((() => {
-                   (0, ob.reportFirstViewNoTerrain)(zz, Ii)
+                 const Eq = null !== (uq = null === (Bq = Im) || void 0 === Bq ? void 0 : Bq.game) && void 0 !== uq ? uq : "";
+                 Mx = new vg.c((() => {
+                   const {
+                     cause: gq,
+                     census: Yq
+                   } = Nc(qq);
+                   (0, rg.reportFirstViewNoTerrain)(Eq, gq, Yq, IO), (0, WE.x)("noTerrain")
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7403-L7406` → after: `L7988-L7991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7988-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7988-L7991) · [Before (L7403-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7403-L7406)

```diff
-             } else console.info(`${di} playable at ${Hz} ms${tM?"":" (no renderer)"}`);
-             setTimeout(FM, 0), (0, Ku.e)().catch((zz => {
-               console.error(`${di} item sprites didn't load, so item particles show the missing texture`, zz)
-             }))
+             } else console.info(`${VO} playable at ${cq} ms${Wx?"":" (no renderer)"}`);
+             setTimeout(jx, 0), (0, HE.g)().catch((qq => {
+               console.error(`${VO} item sprites didn't load, so item particles show the missing texture`, qq)
+             })), kY.c.warm()
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7408` → after: `L7993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R7993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7993) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7408)

```diff
-           (0, zb.K)(zz, {
+           (0, Eg.O)(qq, {
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7415` → after: `L8000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8000) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7415)

```diff
-               (0, uE.b)(uz)
+               (0, YY.c)(Eq)
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7417-L7418` → after: `L8002-L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8002-L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8002-L8003) · [Before (L7417-L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7417-L7418)

```diff
-               if ((0, Su.h)(Zz)) {
-                 zz.crashOn(zb.j, Zz);
+               if ((0, RE.k)(Vq)) {
+                 qq.crashOn(Eg.p, Vq);
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7421` → after: `L8006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8006) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7421)

```diff
-               console.error(`${EE} an input action listener threw`, Zz)
+               console.error(`${OY} an input action listener threw`, Vq)
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7424` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8009) · [Before (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7424)

```diff
-           }(zz), nz && (0, xu.e)();
+           }(qq), lq && (0, nE.b)();
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7433` → after: `L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8018) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7433)

```diff
-       console.error(`${di} a frame-start listener threw`, zz)
+       console.error(`${VO} a frame-start listener threw`, qq)
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7442` → after: `L8027-L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8027-L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8027-L8037) · [Before (L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7442)

```diff
-       console.error(`${di} a before-frame listener threw`, zz)
+       console.error(`${VO} a before-frame listener threw`, qq)
+     }
+ 
+     function Nc(qq) {
+       const Eq = (0, tq.e)(),
+         gq = (0, tq.k)(),
+         Yq = null === Eq || null === gq ? null : gq.readDrawCensus(Eq.api);
+       return {
+         cause: (0, vg.g)(qq.headerWord(kE.C.LoadSteps), Yq),
+         census: Yq
+       }
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7478` → after: `L8073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8073) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7478)

```diff
-       UM = !0, GM.stop(), (0, Gn.e)(), hn = null, Lt(), (0, rz.M)().unlockPointer(), (0, rz.L)(null), null === (zz = Fl) || void 0 === zz || zz(), Fl = null, null === (uz = (0, oz.q)()) || void 0 === uz || uz.followCursorAim(null), (0, xu.C)(), (0, oz.f)(), ji.stop(), null === (b … [truncated]
+       Rx = !0, Sx.stop(), (0, Ml.d)(), Gl = null, TA(), (0, yq.M)().unlockPointer(), (0, yq.J)(null), null === (qq = Vm) || void 0 === qq || qq(), Vm = null, null === (Eq = (0, tq.k)()) || void 0 === Eq || Eq.followCursorAim(null), (0, nE.A)(), (0, tq.c)(), CO.stop(), null === (g … [truncated]
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7480` → after: `L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8075) · [Before (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7480)

```diff
-       Ml = null, wz && (wz.stop(), NH(wz)), null === (pz = Xl) || void 0 === pz || pz.dispose(), Xl = null, null === (dz = fl) || void 0 === dz || dz.dispose(), fl = null, Zl = null, null === (Fz = Kl) || void 0 === Fz || Fz(), Kl = null, null === (Zz = pl) || void 0 === Zz || Zz … [truncated]
+       cm = null, jq && (jq.stop(), nc(jq)), null === (Bq = Pm) || void 0 === Bq || Bq.dispose(), Pm = null, null === (Wq = Qm) || void 0 === Wq || Wq.dispose(), Qm = null, dm = null, null === (Nq = Hm) || void 0 === Nq || Nq(), Hm = null, null === (aq = Nm) || void 0 === aq || aq … [truncated]
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7486` → after: `L8081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8081) · [Before (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7486)

```diff
-         console.warn(`${di} the sky's images didn't release`, fz)
+         console.warn(`${VO} the sky's images didn't release`, oq)
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7492-L7497` → after: `L8087-L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8087-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8087-L8092) · [Before (L7492-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7492-L7497)

```diff
-       const nz = null !== (bz = null === (Ez = Ml) || void 0 === Ez ? void 0 : Ez.details()) && void 0 !== bz ? bz : {},
-         iz = zz.site === Zi || zz.site === Ri || zz.site === ob.RENDER_RELOAD_SITE || zz.site === Ki ? zz.error instanceof WebAssembly.RuntimeError || zz.error instanceof Iu.e : !(0, ku.o)(zz.error) && (0, zb.H)(zz);
-       iz && zz.error instanceof Error && (0, iu.V)(zz.error);
-       const lz = iz || zz.site === zb.u ? (0, ob.readTrap)(zz.error) : null,
-         Mz = null !== lz && (0, yu.e)(lz.kind, lz.refusedBytes) ? lz.refusedBytes : 0,
-         tz = null === tl ? (0, qE.r)(function() {
+       const lq = null !== (gq = null === (Yq = cm) || void 0 === Yq ? void 0 : Yq.details()) && void 0 !== gq ? gq : {},
+         Oq = qq.site === jO || qq.site === HO || qq.site === rg.RENDER_RELOAD_SITE || qq.site === oO ? qq.error instanceof WebAssembly.RuntimeError || qq.error instanceof CE.c : !(0, qg.r)(qq.error) && (0, Eg.K)(qq);
+       Oq && qq.error instanceof Error && (0, mE.Q)(qq.error);
+       const mq = Oq || qq.site === Eg.x ? (0, rg.readTrap)(qq.error) : null,
+         xq = null !== mq && (0, UE.g)(mq.kind, mq.refusedBytes) ? mq.refusedBytes : 0,
+         Aq = null === um ? (0, GY.q)(function() {
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7499` → after: `L8094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8094) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7499)

```diff
-             return (0, iu.x)().buffer.byteLength
+             return (0, mE.v)().buffer.byteLength
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7506` → after: `L8101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8101) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7506)

```diff
-       if (Hz && ((0, pu.u)("oom"), (0, pu.q)("decline"), hM = !0), wH(), (0, bn.e)()) return console.warn(`${di} the session stopped at ${zz.site} as the page reloads`, zz.error), void((0, ku.o)(zz.error) || (null === (Oz = zz.header) || void 0 === Oz ? void 0 : Oz.lastError) === … [truncated]
+       if (cq && ((0, NE.u)("oom"), (0, NE.q)("decline"), kx = !0), Pc(), (0, ml.c)()) return console.warn(`${VO} the session stopped at ${qq.site} as the page reloads`, qq.error), void((0, qg.r)(qq.error) || (null === (uq = qq.header) || void 0 === uq ? void 0 : uq.lastError) === … [truncated]
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7524-L7525` → after: `L8119-L8120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8119-L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8119-L8120) · [Before (L7524-L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7524-L7525)

```diff
-         return !(bz - Vl[zz] < Li) && (Vl[zz] = bz, console.warn(`${di} ${uz}`), !0)
-       }("dropped", `${iz} records dropped so far (input ${uz.dropped}, options ${nz}, net ${bz.dropped}, worker ${Ez.dropped}, net-out ${ql})`) && (ml = iz)
+         return !(gq - pm[qq] < MO) && (pm[qq] = gq, console.warn(`${VO} ${Eq}`), !0)
+       }("dropped", `${Oq} records dropped so far (input ${Eq.dropped}, options ${lq}, net ${gq.dropped}, worker ${Yq.dropped}, net-out ${Lm})`) && (Gm = Oq)
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7530` → after: `L8125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074R8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-299c0eb7cd76e21c59ecd7f1015053bec16559536b1cb246b2c693e3a68ab074) · [After (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L8125) · [Before (L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmPlay.js#L7530)

```diff
-       const bz = (0, Xb.d)();
+       const gq = (0, og.e)();
```
