# Changed — Bundle Modifications Report (Part 026 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `26 / 126` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (2840 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 2220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24293` → after: `L24293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24293) · [Before (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24293)

```diff
-     for (const RR of (0, zu.d)(nR, jm, dm)) qR.add(uz([RR[1], RR[2], RR[3]]))
+     for (const rr of (0, Aa.e)(zr, kA, AA)) Ir.add(SV([rr[1], rr[2], rr[3]]))
```

#### 2221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24312-L24315` → after: `L24312-L24315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24312-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24312-L24315) · [Before (L24312-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24312-L24315)

```diff
-   const tR = new RegExp(String.raw`\bthe\s+(?:${yR.join("|")})\b`, "gi");
-   return RR.replace(JR ? yz : Gz, (RR => RR.replace(tR, (RR => {
-     const JR = `the ${GR}`;
-     return RR === RR.toUpperCase() ? JR.toUpperCase() : /^The/.test(RR) ? `T${JR.slice(1)}` : JR
+   const Wr = new RegExp(String.raw`\bthe\s+(?:${Zr.join("|")})\b`, "gi");
+   return rr.replace(Sr ? uA : sA, (rr => rr.replace(Wr, (rr => {
+     const Sr = `the ${Qr}`;
+     return rr === rr.toUpperCase() ? Sr.toUpperCase() : /^The/.test(rr) ? `T${Sr.slice(1)}` : Sr
```

#### 2222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24349` → after: `L24349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24349) · [Before (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24349)

```diff
-     aR = Vz(wR.code, null !== (tR = wR.where) && void 0 !== tR ? tR : "", rR, JR, GR, yR, uR);
+     tr = jV(mr.code, null !== (Wr = mr.where) && void 0 !== Wr ? Wr : "", Nr, Sr, Qr, Zr, ar);
```

#### 2223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24355` → after: `L24355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24355) · [Before (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24355)

```diff
-       return `${arguments.length<=1?void 0:arguments[1]}${null!==(JR=arguments.length<=2?void 0:arguments[2])&&void 0!==JR?JR:""}${GR}${arguments.length<=4?void 0:arguments[4]}${yR}${arguments.length<=6?void 0:arguments[6]}${tR}${arguments.length<=8?void 0:arguments[8]}`
+       return `${arguments.length<=1?void 0:arguments[1]}${null!==(Sr=arguments.length<=2?void 0:arguments[2])&&void 0!==Sr?Sr:""}${Qr}${arguments.length<=4?void 0:arguments[4]}${Zr}${arguments.length<=6?void 0:arguments[6]}${Wr}${arguments.length<=8?void 0:arguments[8]}`
```

#### 2224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24376` → after: `L24376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24376) · [Before (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24376)

```diff
-     const RR = [...JR.playerText, ...(null !== (nR = JR.messages) && void 0 !== nR ? nR : []).map((RR => {
+     const rr = [...Sr.playerText, ...(null !== (zr = Sr.messages) && void 0 !== zr ? zr : []).map((rr => {
```

#### 2225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24381-L24382` → after: `L24381-L24382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24381-L24382) · [Before (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24381-L24382)

```diff
-       })), null !== (UR = null === GR || void 0 === GR ? void 0 : GR.gameText) && void 0 !== UR ? UR : ""].join("\n"),
-       yR = ["exit", "finish line", "finish"].filter((JR => !new RegExp(`\\b${JR.split(" ")[0]}`, "i").test(RR)));
+       })), null !== (Yr = null === Qr || void 0 === Qr ? void 0 : Qr.gameText) && void 0 !== Yr ? Yr : ""].join("\n"),
+       Zr = ["exit", "finish line", "finish"].filter((Sr => !new RegExp(`\\b${Sr.split(" ")[0]}`, "i").test(rr)));
```

#### 2226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24392` → after: `L24392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24392) · [Before (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24392)

```diff
-   return 0 === eR.length ? ZR : {
+   return 0 === Ur.length ? jr : {
```

#### 2227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24413-L24417` → after: `L24413-L24417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24413-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24413-L24417) · [Before (L24413-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24413-L24417)

```diff
-     qR = null !== ZR && ZR.length >= 3 && !/^-?\d+$/.test(ZR) ? ZR : null,
-     iR = [...new Set([RR, tR, ...null === qR ? [] : [qR, qR.replace(/_/g, " ")]])].sort(((RR, JR) => JR.length - RR.length)).map(mu.k),
-     fR = null !== (JR = null === (GR = /(?:^|\s|:)(-?\d+)$/.exec(RR)) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : null,
-     VR = null === fR ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,mu.k)(fR)}(?![\\w]|\\.\\d)`,
-     KR = `(${iR.join("|")})(?![\\w])${VR}`,
+     Ir = null !== jr && jr.length >= 3 && !/^-?\d+$/.test(jr) ? jr : null,
+     fr = [...new Set([rr, Wr, ...null === Ir ? [] : [Ir, Ir.replace(/_/g, " ")]])].sort(((rr, Sr) => Sr.length - rr.length)).map(ka.i),
+     Er = null !== (Sr = null === (Qr = /(?:^|\s|:)(-?\d+)$/.exec(rr)) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : null,
+     pr = null === Er ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,ka.i)(Er)}(?![\\w]|\\.\\d)`,
+     xr = `(${fr.join("|")})(?![\\w])${pr}`,
```

#### 2228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24422-L24424` → after: `L24422-L24424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24422-L24424) · [Before (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24422-L24424)

```diff
-       parts: (0, mu.A)(RR),
-       atStart: new RegExp(`^(?:${KR})`, "i"),
-       anywhere: new RegExp(`(?:${KR})`, "gi")
+       parts: (0, ka.D)(rr),
+       atStart: new RegExp(`^(?:${xr})`, "i"),
+       anywhere: new RegExp(`(?:${xr})`, "gi")
```

#### 2229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24457` → after: `L24457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24457) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24457)

```diff
-   for (const GR of (0, zu.d)(RR, JR.anywhere, rz)) {
+   for (const Qr of (0, Aa.e)(rr, Sr.anywhere, EV)) {
```

#### 2230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24478` → after: `L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24478) · [Before (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24478)

```diff
-   return [RR, ...JR.flowSteps].some((JR => JR.from === RR.from && (0, mu.A)(JR.to).some((RR => Lz.test(RR)))))
+   return [rr, ...Sr.flowSteps].some((Sr => Sr.from === rr.from && (0, ka.D)(Sr.to).some((rr => mV.test(rr)))))
```

#### 2231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24487` → after: `L24487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24487) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24487)

```diff
-   for (const GR of (0, zu.d)(RR, lz, (0, zu.k)("\\w.,"))) {
+   for (const Qr of (0, Aa.e)(rr, KV, (0, Aa.k)("\\w.,"))) {
```

#### 2232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24524` → after: `L24524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24524) · [Before (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24524)

```diff
-   }(JR, RR)))))) && void 0 !== tR ? tR : null : 1 === GR.length && Nz.test(JR) ? GR[0] : null
+   }(Sr, rr)))))) && void 0 !== Wr ? Wr : null : 1 === Qr.length && lV.test(Sr) ? Qr[0] : null
```

#### 2233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24557` → after: `L24557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24557) · [Before (L24557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24557)

```diff
-   return null !== JR.word && null !== RR.number && Wz(JR.word, RR) ? `${JR.word} ${RR.number}` : JR.isValue && null !== RR.value ? RR.value : RR.plain
+   return null !== Sr.word && null !== rr.number && tV(Sr.word, rr) ? `${Sr.word} ${rr.number}` : Sr.isValue && null !== rr.value ? rr.value : rr.plain
```

#### 2234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24570` → after: `L24570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24570) · [Before (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24570)

```diff
-   const ZR = null === JR.to.number ? null : new RegExp(`^${(0,mu.k)(JR.to.number)}(?![\\w]|\\.\\d)`).exec(tR);
+   const jr = null === Sr.to.number ? null : new RegExp(`^${(0,ka.i)(Sr.to.number)}(?![\\w]|\\.\\d)`).exec(Wr);
```

#### 2235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24624` → after: `L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24624) · [Before (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24624)

```diff
-       xR = null !== (iR = null !== (fR = Dz(OR, AR, vR)) && void 0 !== fR ? fR : Dz(OR, AR, Qz(vR, pR))) && void 0 !== iR ? iR : gR && 1 === vR.length && 0 === vz(OR).length ? vR[0] : null;
+       Hr = null !== (fr = null !== (Er = XV(Pr, er, Xr)) && void 0 !== Er ? Er : XV(Pr, er, cV(Xr, Or))) && void 0 !== fr ? fr : Lr && 1 === Xr.length && 0 === vV(Pr).length ? Xr[0] : null;
```

#### 2236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24634-L24635` → after: `L24634-L24635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24634-L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24634-L24635) · [Before (L24634-L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24634-L24635)

```diff
-     })), HR = dz(jz(null === eR || void 0 === eR ? void 0 : eR.toLowerCase(), aR, LR), yR), oR = UR + rR.indexOf(LR) - (null !== (VR = null === XR || void 0 === XR || null === (KR = XR[1]) || void 0 === KR ? void 0 : KR.length) && void 0 !== VR ? VR : 0);
-     let cR = `${HR} `,
+     })), gr = AV(kV(null === Ur || void 0 === Ur ? void 0 : Ur.toLowerCase(), tr, hr), Zr), Cr = Yr + Nr.indexOf(hr) - (null !== (pr = null === yr || void 0 === yr || null === (xr = yr[1]) || void 0 === xr ? void 0 : xr.length) && void 0 !== pr ? pr : 0);
+     let Mr = `${gr} `,
```

#### 2237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24638` → after: `L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24638) · [Before (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24638)

```diff
-     if (null !== DR) cR = `${HR} ${DR.text} after ${lR.slice(0,NR.length)}`, PR = WR + BR.length + NR.length + DR.length, IR = PR;
+     if (null !== Rr) Mr = `${gr} ${Rr.text} after ${vr.slice(0,qr.length)}`, Gr = nr + Tr.length + qr.length + Rr.length, kr = Gr;
```

#### 2238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24645` → after: `L24645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24645) · [Before (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24645)

```diff
-         cR = `${HR} ${JR.slice(GR[0].length,GR[0].length+yR.length)} after ${RR}`, PR = WR + RR.length + GR[0].length + yR.length, IR = PR
+         Mr = `${gr} ${Sr.slice(Qr[0].length,Qr[0].length+Zr.length)} after ${rr}`, Gr = nr + rr.length + Qr[0].length + Zr.length, kr = Gr
```

#### 2239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24648` → after: `L24648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24648) · [Before (L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24648)

```diff
-         cR = `${HR} ${/^[a-z][a-z_]*$/.test(RR)&&new RegExp(`\\bthe\\s+${(0,mu.k)(RR)}\\b`,"i").test(OR)?"the ":""}${RR} after `, PR = WR
+         Mr = `${gr} ${/^[a-z][a-z_]*$/.test(rr)&&new RegExp(`\\bthe\\s+${(0,ka.i)(rr)}\\b`,"i").test(Pr)?"the ":""}${rr} after `, Gr = nr
```

#### 2240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24674` → after: `L24674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24674) · [Before (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24674)

```diff
-         XR = null === WR ? Dz(LR, UR, AR) : null !== (iR = JR.find((RR => CR.some((JR => xz(JR, RR)))))) && void 0 !== iR ? iR : null;
+         yr = null === nr ? XV(hr, Yr, er) : null !== (fr = Sr.find((rr => Kr.some((Sr => LV(Sr, rr)))))) && void 0 !== fr ? fr : null;
```

#### 2241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24677-L24679` → after: `L24677-L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24677-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24677-L24679) · [Before (L24677-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24677-L24679)

```diff
-         BR = /[_:]/.test(XR.to.plain) ? `\`${XR.step.to}\`` : XR.to.plain,
-         lR = `${dz(jz(void 0,void 0,rR),yR)} ${null===MR?BR:Ez(XR.to,MR)}`,
-         pR = eR - (null !== (fR = null === WR || void 0 === WR || null === (VR = WR[1]) || void 0 === VR ? void 0 : VR.length) && void 0 !== fR ? fR : 0);
+         Tr = /[_:]/.test(yr.to.plain) ? `\`${yr.step.to}\`` : yr.to.plain,
+         vr = `${AV(kV(void 0,void 0,Nr),Zr)} ${null===Br?Tr:VV(yr.to,Br)}`,
+         Or = Ur - (null !== (Er = null === nr || void 0 === nr || null === (pr = nr[1]) || void 0 === pr ? void 0 : pr.length) && void 0 !== Er ? Er : 0);
```

#### 2242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24691` → after: `L24691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24691) · [Before (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24691)

```diff
-     const GR = (0, zu.d)(RR, JR.from.anywhere, rz).at(-1);
+     const Qr = (0, Aa.e)(rr, Sr.from.anywhere, EV).at(-1);
```

#### 2243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24716` → after: `L24716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24716) · [Before (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24716)

```diff
-         KR = hz.test((0, zu.s)((0, zu.s)(iR, tR.to.anywhere, rz, ez), tR.from.anywhere, rz, ez));
+         xr = JV.test((0, Aa.t)((0, Aa.t)(fr, Wr.to.anywhere, EV, pV), Wr.from.anywhere, EV, pV));
```

#### 2244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24740` → after: `L24740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24740) · [Before (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24740)

```diff
-   return `${JR[1]}${GR.charAt(0).toUpperCase()}${GR.slice(1)}`
+   return `${Sr[1]}${Qr.charAt(0).toUpperCase()}${Qr.slice(1)}`
```

#### 2245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24769` → after: `L24769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24769) · [Before (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24769)

```diff
-           GR.push(`- ${RR.join(" ")}`), JR++
+           Qr.push(`- ${rr.join(" ")}`), Sr++
```

#### 2246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24778` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24778) · [Before (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24778)

```diff
-     layout: 0 === JR ? RR : {
+     layout: 0 === Sr ? rr : {
```

#### 2247. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24791` → after: `L24791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24791) · [Before (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24791)

```diff
-       markdown: `${GR.join("\n")}${JR}${RR.markdown}`.trim()
+       markdown: `${Qr.join("\n")}${Sr}${rr.markdown}`.trim()
```

#### 2248. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24818` → after: `L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24818) · [Before (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24818)

```diff
-   const JR = (0, mu.n)(RR, qS - 1),
+   const Sr = (0, ka.m)(rr, Zi - 1),
```

#### 2249. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24820` → after: `L24820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24820) · [Before (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24820)

```diff
-   return `${(GR>qS/2?JR.slice(0,GR):JR).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+   return `${(Qr>Zi/2?Sr.slice(0,Qr):Sr).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 2250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24844` → after: `L24844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24844) · [Before (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24844)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${VS}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${ji}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
```

#### 2251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24856` → after: `L24856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24856) · [Before (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24856)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${fS}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${VS}(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${ai}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${ji}(?!\w)\s*`, "i"),
```

#### 2252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24868` → after: `L24868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24868) · [Before (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24868)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${fS}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${fS}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${ai}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${ai}dies?)(?!\w)\s*`, "i"),
```

#### 2253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24881` → after: `L24881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24881) · [Before (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24881)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${fS}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${ai}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24893` → after: `L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24893) · [Before (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24893)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${fS}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${ai}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24905` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24905) · [Before (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24905)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${fS}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${ai}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24915` → after: `L24915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24915) · [Before (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24915)

```diff
-   return /[|&?=<>!,]/.test(JR) ? `(${JR})` : JR
+   return /[|&?=<>!,]/.test(Sr) ? `(${Sr})` : Sr
```

#### 2257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24921` → after: `L24921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24921) · [Before (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24921)

```diff
-   return null !== (JR = null !== (GR = null === (yR = /^(.+)\.toString\(\)$/.exec(uR)) || void 0 === yR ? void 0 : yR[1]) && void 0 !== GR ? GR : null === (tR = /^String\((.+)\)$/.exec(uR)) || void 0 === tR ? void 0 : tR[1]) && void 0 !== JR ? JR : RR
+   return null !== (Sr = null !== (Qr = null === (Zr = /^(.+)\.toString\(\)$/.exec(ar)) || void 0 === Zr ? void 0 : Zr[1]) && void 0 !== Qr ? Qr : null === (Wr = /^String\((.+)\)$/.exec(ar)) || void 0 === Wr ? void 0 : Wr[1]) && void 0 !== Sr ? Sr : rr
```

#### 2258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24931` → after: `L24931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24931) · [Before (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24931)

```diff
-     return "literal" in GR && new RegExp(String.raw`\b${JR}\s*[:#]?\s*$`, "i").test(GR.literal) && void 0 !== tR && "code" in tR
+     return "literal" in Qr && new RegExp(String.raw`\b${Sr}\s*[:#]?\s*$`, "i").test(Qr.literal) && void 0 !== Wr && "code" in Wr
```

#### 2259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24956` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24956) · [Before (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24956)

```diff
-   if (QD(tR) && /\p{L}{2}/u.test(tR)) return `"${KS(tR)}"`;
+   if (oR(Wr) && /\p{L}{2}/u.test(Wr)) return `"${Ii(Wr)}"`;
```

#### 2260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24960` → after: `L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24960) · [Before (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24960)

```diff
-   }(uR) ? `\`${uR}\`` : null
+   }(ar) ? `\`${ar}\`` : null
```

#### 2261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24965` → after: `L24965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24965) · [Before (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24965)

```diff
-   const tR = (null !== (yR = RR.messages) && void 0 !== yR ? yR : []).filter((RR => JR.isMessage(RR) && (null === GR || wS(RR.where).includes(GR)))),
+   const Wr = (null !== (Zr = rr.messages) && void 0 !== Zr ? Zr : []).filter((rr => Sr.isMessage(rr) && (null === Qr || fi(rr.where).includes(Qr)))),
```

#### 2262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24987` → after: `L24987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24987) · [Before (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24987)

```diff
-                   '"' === ZR || "'" === ZR ? yR = ZR : "([{".includes(ZR) ? GR++ : ")]}".includes(ZR) ? GR-- : "+" === ZR && 0 === GR && (JR.push(RR.slice(tR, uR).trim()), tR = uR + 1)
+                   '"' === jr || "'" === jr ? Zr = jr : "([{".includes(jr) ? Qr++ : ")]}".includes(jr) ? Qr-- : "+" === jr && 0 === Qr && (Sr.push(rr.slice(Wr, ar).trim()), Wr = ar + 1)
```

#### 2263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24990` → after: `L24990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24990) · [Before (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24990)

```diff
-               return JR.push(RR.slice(tR).trim()), JR.every((RR => "" !== RR)) ? JR : null
+               return Sr.push(rr.slice(Wr).trim()), Sr.every((rr => "" !== rr)) ? Sr : null
```

#### 2264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24998-L24999` → after: `L24998-L24999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24998-L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L24998-L24999) · [Before (L24998-L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L24998-L24999)

```diff
-             }))) && void 0 !== JR ? JR : null
-           }(null !== (GR = null === yR || void 0 === yR ? void 0 : yR[1]) && void 0 !== GR ? GR : JR);
+             }))) && void 0 !== Sr ? Sr : null
+           }(null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr[1]) && void 0 !== Qr ? Qr : Sr);
```

#### 2265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25011` → after: `L25011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25011) · [Before (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25011)

```diff
-       } = ZR[0], VR = yR.indexOf(qR, tR[0].length), KR = null !== (JR = null === (GR = /["']/.exec(qR)) || void 0 === GR ? void 0 : GR[0]) && void 0 !== JR ? JR : '"';
+       } = jr[0], pr = Zr.indexOf(Ir, Wr[0].length), xr = null !== (Sr = null === (Qr = /["']/.exec(Ir)) || void 0 === Qr ? void 0 : Qr[0]) && void 0 !== Sr ? Sr : '"';
```

#### 2266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25030` → after: `L25030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25030) · [Before (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25030)

```diff
-   return new Set([...RR.callbacks, ...null !== (JR = RR.functions) && void 0 !== JR ? JR : []].map((RR => {
+   return new Set([...rr.callbacks, ...null !== (Sr = rr.functions) && void 0 !== Sr ? Sr : []].map((rr => {
```

#### 2267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25045` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25045) · [Before (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25045)

```diff
-   if (null === yR || null === tR || PH.test(null !== (GR = tR[1]) && void 0 !== GR ? GR : "") || lS.test(yR.text)) return null;
+   if (null === Zr || null === Wr || Cg.test(null !== (Qr = Wr[1]) && void 0 !== Qr ? Qr : "") || Bi.test(Zr.text)) return null;
```

#### 2268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25060` → after: `L25060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25060) · [Before (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25060)

```diff
-       const tR = null !== (JR = null === (GR = RR.ideaPlace) || void 0 === GR ? void 0 : GR.exec(ZR)) && void 0 !== JR ? JR : null;
+       const Wr = null !== (Sr = null === (Qr = rr.ideaPlace) || void 0 === Qr ? void 0 : Qr.exec(jr)) && void 0 !== Sr ? Sr : null;
```

#### 2269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25063` → after: `L25063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25063) · [Before (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25063)

```diff
-         number: null !== (yR = tR[1]) && void 0 !== yR ? yR : null,
+         number: null !== (Zr = Wr[1]) && void 0 !== Zr ? Zr : null,
```

#### 2270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25081-L25083` → after: `L25081-L25083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25081-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25081-L25083) · [Before (L25081-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25081-L25083)

```diff
-   const aR = null === wR ? "" : `at ${KR.numberWord} ${wR} `,
-     LR = `hange your ${KR.noun} message (${eR}) so ${aR}it also ${fR.verb} ${fR.after}`;
-   return `${yR.head}${/^[A-Z]/.test(yR.text)?"C":"c"}${LR}`
+   const tr = null === mr ? "" : `at ${xr.numberWord} ${mr} `,
+     hr = `hange your ${xr.noun} message (${Ur}) so ${tr}it also ${Er.verb} ${Er.after}`;
+   return `${Zr.head}${/^[A-Z]/.test(Zr.text)?"C":"c"}${hr}`
```

#### 2271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25143` → after: `L25143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25143) · [Before (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25143)

```diff
-         player: "broadcastMessage" === uR[3] ? null : null !== (JR = ZR[0]) && void 0 !== JR ? JR : null,
+         player: "broadcastMessage" === ar[3] ? null : null !== (Sr = jr[0]) && void 0 !== Sr ? Sr : null,
```

#### 2272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25145` → after: `L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25145) · [Before (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25145)

```diff
-         condition: null !== (GR = uR[2]) && void 0 !== GR ? GR : null,
+         condition: null !== (Qr = ar[2]) && void 0 !== Qr ? Qr : null,
```

#### 2273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25154-L25155` → after: `L25154-L25155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25154-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25154-L25155) · [Before (L25154-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25154-L25155)

```diff
-       const yR = null === RR.mention ? "join" === RR.kind && "onPlayerJoin" === aR : RR.mention.test(LR),
-         tR = (null !== (GR = JR.messages) && void 0 !== GR ? GR : []).filter((JR => RR.isMessage(JR) && wS(JR.where).includes(aR)));
+       const Zr = null === rr.mention ? "join" === rr.kind && "onPlayerJoin" === tr : rr.mention.test(hr),
+         Wr = (null !== (Qr = Sr.messages) && void 0 !== Qr ? Qr : []).filter((Sr => rr.isMessage(Sr) && fi(Sr.where).includes(tr)));
```

#### 2274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25179-L25180` → after: `L25179-L25180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25179-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25179-L25180) · [Before (L25179-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25179-L25180)

```diff
-     lR = null !== WR.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${WR.numberWord}s?\b`, "i").test(LR),
-     pR = null === WR.numberWord || lR ? new Set : new Set((0, mu.p)(LR).filter((RR => !/\d\s*%/.test(RR))).flatMap((RR => [...RR.matchAll(new RegExp(String.raw`\b${WR.numberWord}\s*:?\s*(\d{1,3})\b${VS}`, "gi"))].map((RR => RR[1])))));
+     vr = null !== nr.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${nr.numberWord}s?\b`, "i").test(hr),
+     Or = null === nr.numberWord || vr ? new Set : new Set((0, ka.p)(hr).filter((rr => !/\d\s*%/.test(rr))).flatMap((rr => [...rr.matchAll(new RegExp(String.raw`\b${nr.numberWord}\s*:?\s*(\d{1,3})\b${ji}`, "gi"))].map((rr => rr[1])))));
```

#### 2275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25182` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25182) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25182)

```diff
-   const gR = null !== (GR = null === BR || void 0 === BR ? void 0 : BR[2]) && void 0 !== GR ? GR : 1 === pR.size ? [...pR][0] : null;
+   const Lr = null !== (Qr = null === Tr || void 0 === Tr ? void 0 : Tr[2]) && void 0 !== Qr ? Qr : 1 === Or.size ? [...Or][0] : null;
```

#### 2276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25191` → after: `L25191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25191) · [Before (L25191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25191)

```diff
-   })) && OS.test(RR), NR = null !== (yR = WR.mention) && void 0 !== yR ? yR : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && li.test(rr), qr = null !== (Zr = nr.mention) && void 0 !== Zr ? Zr : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25195-L25197` → after: `L25195-L25197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25195-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25195-L25197) · [Before (L25195-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25195-L25197)

```diff
-         GR = null === JR ? RR : RR.slice(JR[0].length),
-         yR = (null === JR ? (0, zu.v)(GR, /\s+(?=[A-Z`"])/g, (0, zu.r)(".!?")) : [GR]).some((RR => {
-           const JR = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(RR) ? `${DR} ${RR}` : RR;
+         Qr = null === Sr ? rr : rr.slice(Sr[0].length),
+         Zr = (null === Sr ? (0, Aa.u)(Qr, /\s+(?=[A-Z`"])/g, (0, Aa.s)(".!?")) : [Qr]).some((rr => {
+           const Sr = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(rr) ? `${Rr} ${rr}` : rr;
```

#### 2278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25211` → after: `L25211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25211) · [Before (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25211)

```diff
-           literal: `${yR}${/[.!?]$/.test(yR)||""===yR?" ":". "}${JR}`
+           literal: `${Zr}${/[.!?]$/.test(Zr)||""===Zr?" ":". "}${Sr}`
```

#### 2279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25215` → after: `L25215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25215) · [Before (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25215)

```diff
-         literal: `. ${JR}`
+         literal: `. ${Sr}`
```

#### 2280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25226` → after: `L25226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25226) · [Before (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25226)

```diff
-       return GR.map((RR => "literal" in RR ? (0, mu.N)(RR.literal, JR) : RR.code)).join(" + ")
+       return Qr.map((rr => "literal" in rr ? (0, ka.Y)(rr.literal, Sr) : rr.code)).join(" + ")
```

#### 2281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25228-L25229` → after: `L25228-L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25228-L25229) · [Before (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25228-L25229)

```diff
-     IR = `${vR.line.slice(0,vR.start)}${vR.isList?`[${PR}]`:PR}${vR.line.slice(vR.end)}`,
-     mR = null === gR ? rR.map((RR => RR === eR.line ? `${eR.indent}${IR}` : RR)) : [`${eR.indent}if (${null!==(tR=null===(uR=eR.condition)||void 0===uR?void 0:uR.trim())&&void 0!==tR?tR:`${aS(LS(MR))} === ${gR}`}) ${IR}`, `${eR.indent}else ${vR.line}`],
+     kr = `${Xr.line.slice(0,Xr.start)}${Xr.isList?`[${Gr}]`:Gr}${Xr.line.slice(Xr.end)}`,
+     Ar = null === Lr ? Nr.map((rr => rr === Ur.line ? `${Ur.indent}${kr}` : rr)) : [`${Ur.indent}if (${null!==(Wr=null===(ar=Ur.condition)||void 0===ar?void 0:ar.trim())&&void 0!==Wr?Wr:`${mi(Ni(Br))} === ${Lr}`}) ${kr}`, `${Ur.indent}else ${Xr.line}`],
```

#### 2282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25231` → after: `L25231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25231) · [Before (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25231)

```diff
-     SR = HR ? `Change your ${WR.noun} message (${bR}) to "${eR.words}"${zR}` : `Change your ${WR.noun} message (${bR}) so ${null===gR?"":`at ${WR.numberWord} ${gR} `}it also says "${eR.words}"${zR}`,
+     ir = gr ? `Change your ${nr.noun} message (${lr}) to "${Ur.words}"${Vr}` : `Change your ${nr.noun} message (${lr}) so ${null===Lr?"":`at ${nr.numberWord} ${Lr} `}it also says "${Ur.words}"${Vr}`,
```

#### 2283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25250` → after: `L25250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25250) · [Before (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25250)

```diff
-   const yR = null !== (GR = null === JR || void 0 === JR ? void 0 : JR.messages) && void 0 !== GR ? GR : [];
+   const Zr = null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.messages) && void 0 !== Qr ? Qr : [];
```

#### 2284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25275` → after: `L25275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25275) · [Before (L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25275)

```diff
-     return cS(null !== tR && void 0 !== tR ? tR : uR, void 0 === ZR ? iR ? "players coming back" : "keeping players" : iR ? "how many players come back" : "how many players stay")
+     return gi(null !== Wr && void 0 !== Wr ? Wr : ar, void 0 === jr ? fr ? "players coming back" : "keeping players" : fr ? "how many players come back" : "how many players stay")
```

#### 2285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25289-L25290` → after: `L25289-L25290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25289-L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25289-L25290) · [Before (L25289-L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25289-L25290)

```diff
-       const tR = null !== (GR = RR.match(zS)) && void 0 !== GR ? GR : [],
-         uR = null !== (yR = JR.match(zS)) && void 0 !== yR ? yR : [],
+       const Wr = null !== (Qr = rr.match(ki)) && void 0 !== Qr ? Qr : [],
+         ar = null !== (Zr = Sr.match(ki)) && void 0 !== Zr ? Zr : [],
```

#### 2286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25303` → after: `L25303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25303) · [Before (L25303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25303)

```diff
-       return "" === iR ? qR : [...qR, iR]
+       return "" === fr ? Ir : [...Ir, fr]
```

#### 2287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25328` → after: `L25328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25328) · [Before (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25328)

```diff
-       tR.set(VR.name, (null !== (uR = tR.get(VR.name)) && void 0 !== uR ? uR : 0) + 1)
+       Wr.set(pr.name, (null !== (ar = Wr.get(pr.name)) && void 0 !== ar ? ar : 0) + 1)
```

#### 2288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25335-L25337` → after: `L25335-L25337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25335-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25335-L25337) · [Before (L25335-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25335-L25337)

```diff
-         KR = (0, mu.v)(VR.name),
-         wR = null !== (ZR = VR.usedIn) && void 0 !== ZR ? ZR : "",
-         rR = void 0 === uR ? null : null !== (qR = Aw(uR)) && void 0 !== qR ? qR : null;
+         xr = (0, ka.y)(pr.name),
+         mr = null !== (jr = pr.usedIn) && void 0 !== jr ? jr : "",
+         Nr = void 0 === ar ? null : null !== (Ir = Ym(ar)) && void 0 !== Ir ? Ir : null;
```

#### 2289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25344` → after: `L25344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25344) · [Before (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25344)

```diff
-         value: null !== (iR = null === uR || void 0 === uR ? void 0 : uR.value) && void 0 !== iR ? iR : RR,
+         value: null !== (fr = null === ar || void 0 === ar ? void 0 : ar.value) && void 0 !== fr ? fr : rr,
```

#### 2290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25346` → after: `L25346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25346) · [Before (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25346)

```diff
-         codeKind: null === aR ? rR : null,
+         codeKind: null === tr ? Nr : null,
```

#### 2291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25348` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25348) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25348)

```diff
-         hazard: null !== (fR = null === aR || void 0 === aR ? void 0 : aR.hazard) && void 0 !== fR ? fR : null,
+         hazard: null !== (Er = null === tr || void 0 === tr ? void 0 : tr.hazard) && void 0 !== Er ? Er : null,
```

#### 2292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25356` → after: `L25356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25356) · [Before (L25356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25356)

```diff
-   }(uR), aR), UR = hw(ag(uR), aR), WR = null !== (GR = null === ZR || void 0 === ZR ? void 0 : ZR.places) && void 0 !== GR ? GR : mS, AR = null !== (yR = null === iR || void 0 === iR ? void 0 : iR.grounds) && void 0 !== yR ? yR : null, CR = (() => {
+   }(ar), tr), Yr = dm(NL(ar), tr), nr = null !== (Qr = null === jr || void 0 === jr ? void 0 : jr.places) && void 0 !== Qr ? Qr : Gi, er = null !== (Zr = null === fr || void 0 === fr ? void 0 : fr.grounds) && void 0 !== Zr ? Zr : null, Kr = (() => {
```

#### 2293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25377` → after: `L25377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25377) · [Before (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25377)

```diff
-             const JR = (null !== (tR = yR.get(RR.name)) && void 0 !== tR ? tR : []).filter((RR => JSON.stringify(RR.selection) !== JSON.stringify(LR.selection)));
+             const Sr = (null !== (Wr = Zr.get(rr.name)) && void 0 !== Wr ? Wr : []).filter((rr => JSON.stringify(rr.selection) !== JSON.stringify(hr.selection)));
```

#### 2294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25389` → after: `L25389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25389) · [Before (L25389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25389)

```diff
-         const [ZR, [qR]] = uR[0], iR = new RegExp(`${(0,mu.k)(ZR)}(?![\\w$])`);
+         const [jr, [Ir]] = ar[0], fr = new RegExp(`${(0,ka.i)(jr)}(?![\\w$])`);
```

#### 2295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25403` → after: `L25403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25403) · [Before (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25403)

```diff
-           if (fR || !VR || /^\s*[#|]/.test(nR) || pU.test(nR) || 0 === (0, zu.d)(nR.replace(/\[\[[^\]\n]+\]\]/g, " "), iR, zu.n).length) continue;
+           if (Er || !pr || /^\s*[#|]/.test(zr) || yY.test(zr) || 0 === (0, Aa.e)(zr.replace(/\[\[[^\]\n]+\]\]/g, " "), fr, Aa.o).length) continue;
```

#### 2296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25408` → after: `L25408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25408) · [Before (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25408)

```diff
-           const JR = null !== (wR = null === (rR = lU.exec(nR)) || void 0 === rR ? void 0 : rR[0].length) && void 0 !== wR ? wR : 0,
+           const Sr = null !== (mr = null === (Nr = KY.exec(zr)) || void 0 === Nr ? void 0 : Nr[0].length) && void 0 !== mr ? mr : 0,
```

#### 2297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25416` → after: `L25416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25416) · [Before (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25416)

```diff
-             uR = tR + (null !== (eR = null === (aR = xp.exec(nR.slice(tR))) || void 0 === aR ? void 0 : aR[0].length) && void 0 !== eR ? eR : 0),
+             ar = Wr + (null !== (Ur = null === (tr = XO.exec(zr.slice(Wr))) || void 0 === tr ? void 0 : tr[0].length) && void 0 !== Ur ? Ur : 0),
```

#### 2298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25418-L25419` → after: `L25418-L25419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25418-L25419) · [Before (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25418-L25419)

```diff
-             UR = `${Np(qR)} [[Heatmap]].`;
-           return KR[LR] = `${nR.slice(0,uR)}${ZR} ${UR}${nR.slice(uR)}`, {
+             Yr = `${PO(Ir)} [[Heatmap]].`;
+           return xr[hr] = `${zr.slice(0,ar)}${jr} ${Yr}${zr.slice(ar)}`, {
```

#### 2299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25435` → after: `L25435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25435) · [Before (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25435)

```diff
-       }(iR.markdown, [...null !== wR && void 0 !== wR ? wR : [], ...null !== rR && void 0 !== rR ? rR : []], uR);
+       }(fr.markdown, [...null !== mr && void 0 !== mr ? mr : [], ...null !== Nr && void 0 !== Nr ? Nr : []], ar);
```

#### 2300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25443-L25445` → after: `L25443-L25445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25443-L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25443-L25445) · [Before (L25443-L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25443-L25445)

```diff
-     const RR = [...(null !== KR && void 0 !== KR ? KR : []).flatMap((RR => [RR.reason, RR.typical])), ...CR.repairs.map((RR => RR.to))];
-     return In(fR, null === VR ? RR : [VR.change, ...RR])
-   })(), MR = new Set((null !== KR && void 0 !== KR ? KR : []).flatMap((RR => "good" === RR.verdict ? [RR.key] : []))), BR = BL(qR), lR = Il(AR, uR), pR = CR.markdown, gR = null === iR ? pR : Gm(pR, iR, MR, "young" === qR, XR).markdown, bR = BR ? rl(gR, (vR = ZR, null === vR ? []  … [truncated]
+     const rr = [...(null !== xr && void 0 !== xr ? xr : []).flatMap((rr => [rr.reason, rr.typical])), ...Kr.repairs.map((rr => rr.to))];
+     return gz(Er, null === pr ? rr : [pr.change, ...rr])
+   })(), Br = new Set((null !== xr && void 0 !== xr ? xr : []).flatMap((rr => "good" === rr.verdict ? [rr.key] : []))), Tr = Bh(Ir), vr = Gv(er, ar), Or = Kr.markdown, Lr = null === fr ? Or : uk(Or, fr, Br, "young" === Ir, yr).markdown, lr = Tr ? mv(Lr, (Xr = jr, null === Xr ? []  … [truncated]
```

#### 2301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25464` → after: `L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25464) · [Before (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25464)

```diff
-         markdown: 0 === tR.length ? RR : uR,
+         markdown: 0 === Wr.length ? rr : ar,
```

#### 2302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25493` → after: `L25493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25493) · [Before (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25493)

```diff
-         return `${RR.slice(0,tR.end)}${ZR}${RR.slice(uR)}`
+         return `${rr.slice(0,Wr.end)}${jr}${rr.slice(ar)}`
```

#### 2303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25531` → after: `L25531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25531) · [Before (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25531)

```diff
-         markdown: 0 === JR.length ? RR : GR,
+         markdown: 0 === Sr.length ? rr : Qr,
```

#### 2304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25548` → after: `L25548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25548) · [Before (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25548)

```diff
-           const JR = `the ${RR}`;
+           const Sr = `the ${rr}`;
```

#### 2305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25559` → after: `L25559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25559) · [Before (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25559)

```diff
-         of GR) tR = (0, zu.s)(tR, new RegExp(`(${(0,mu.k)(uR)})(?![\\w-])`, "gi"), (0, zu.k)("\\w-"), (RR => {
+         of Qr) Wr = (0, Aa.t)(Wr, new RegExp(`(${(0,ka.i)(ar)})(?![\\w-])`, "gi"), (0, Aa.k)("\\w-"), (rr => {
```

#### 2306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25561` → after: `L25561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25561) · [Before (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25561)

```diff
-         return /^T/.test(JR) ? `T${ZR.slice(1)}` : ZR
+         return /^T/.test(Sr) ? `T${jr.slice(1)}` : jr
```

#### 2307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25568` → after: `L25568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25568) · [Before (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25568)

```diff
-     oR = [...null !== wR && void 0 !== wR ? wR : [], ...null !== rR && void 0 !== rR ? rR : []].flatMap((RR => "deaths" === RR.kind ? [RR.square] : [])),
+     Cr = [...null !== mr && void 0 !== mr ? mr : [], ...null !== Nr && void 0 !== Nr ? Nr : []].flatMap((rr => "deaths" === rr.kind ? [rr.square] : [])),
```

#### 2308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25573` → after: `L25573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25573) · [Before (L25573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25573)

```diff
-         tK: []
+         sp: []
```

#### 2309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25599` → after: `L25599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25599) · [Before (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25599)

```diff
-         tK: []
+         sp: []
```

#### 2310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25602` → after: `L25602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25602) · [Before (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25602)

```diff
-         tK: yR
+         sp: Zr
```

#### 2311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25626` → after: `L25626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25626) · [Before (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25626)

```diff
-         qR = `${null!==GR&&void 0!==GR?GR:""}\n${ZR}\n${ZR.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         Ir = `${null!==Qr&&void 0!==Qr?Qr:""}\n${jr}\n${jr.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25635` → after: `L25635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25635) · [Before (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25635)

```diff
-     }(PR, uR, null !== (tR = null === lR || void 0 === lR ? void 0 : lR.text) && void 0 !== tR ? tR : null, IR).markdown,
+     }(Gr, ar, null !== (Wr = null === vr || void 0 === vr ? void 0 : vr.text) && void 0 !== Wr ? Wr : null, kr).markdown,
```

#### 2313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25639` → after: `L25639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25639) · [Before (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25639)

```diff
-           if (null === JR || void 0 === JR || RR.length > mu.q || 0 === (null !== (GR = JR.messages) && void 0 !== GR ? GR : []).length) return {
+           if (null === Sr || void 0 === Sr || rr.length > ka.q || 0 === (null !== (Qr = Sr.messages) && void 0 !== Qr ? Qr : []).length) return {
```

#### 2314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25677` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25677) · [Before (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25677)

```diff
-         tR = null === yR || null === uR ? yR : {
+         Wr = null === Zr || null === ar ? Zr : {
```

#### 2315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25702` → after: `L25702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25702) · [Before (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25702)

```diff
-           return null === RR || 0 === GR.length ? RR : {
+           return null === rr || 0 === Qr.length ? rr : {
```

#### 2316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25706` → after: `L25706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25706) · [Before (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25706)

```diff
-         }(null !== (RR = null === iR || void 0 === iR ? void 0 : iR.grounds) && void 0 !== RR ? RR : null, CR.repairs),
+         }(null !== (rr = null === fr || void 0 === fr ? void 0 : fr.grounds) && void 0 !== rr ? rr : null, Kr.repairs),
```

#### 2317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25714` → after: `L25714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25714) · [Before (L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25714)

```diff
-             GR = null === ZR ? JR : VW(JR, ZR, XR).markdown;
+             Qr = null === jr ? Sr : jn(Sr, jr, yr).markdown;
```

#### 2318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25752` → after: `L25752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25752) · [Before (L25752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25752)

```diff
-         layout: 0 === JR ? zR : {
+         layout: 0 === Sr ? Vr : {
```

#### 2319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25787` → after: `L25787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25787) · [Before (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25787)

```diff
-     sR = null === XR || null === ER || null === FR || FR === ER ? XR : In(XR, SS(ER, FR));
+     sr = null === yr || null === Fr || null === Dr || Dr === Fr ? yr : gz(yr, Ai(Fr, Dr));
```

#### 2320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25831` → after: `L25831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25831) · [Before (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25831)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,mu.k)(JR)}(?![\\w$])`, "i").test(RR)
+   return new RegExp(`(?:^|[^\\w$])${(0,ka.i)(Sr)}(?![\\w$])`, "i").test(rr)
```

#### 2321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25839` → after: `L25839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25839) · [Before (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25839)

```diff
-   return (0, zu.d)(RR, /[A-Za-z_$][\w$]*(?![\w$])/g, zu.n).map((RR => {
+   return (0, Aa.e)(rr, /[A-Za-z_$][\w$]*(?![\w$])/g, Aa.o).map((rr => {
```

#### 2322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25848` → after: `L25848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25848) · [Before (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25848)

```diff
-     yR = null !== (JR = new RegExp(String.raw`^\s*${GR}\s*===?\s*(-?\d+)\s*$`).exec(RR)) && void 0 !== JR ? JR : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${GR}\s*$`).exec(RR);
+     Zr = null !== (Sr = new RegExp(String.raw`^\s*${Qr}\s*===?\s*(-?\d+)\s*$`).exec(rr)) && void 0 !== Sr ? Sr : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${Qr}\s*$`).exec(rr);
```

#### 2323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25859` → after: `L25859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25859) · [Before (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25859)

```diff
-   const yR = new Set([...JR.callbacks, ...null !== (GR = JR.functions) && void 0 !== GR ? GR : []].map((RR => {
+   const Zr = new Set([...Sr.callbacks, ...null !== (Qr = Sr.functions) && void 0 !== Qr ? Qr : []].map((rr => {
```

#### 2324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25877` → after: `L25877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25877) · [Before (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25877)

```diff
-         const uR = new RegExp(`^${(0,mu.k)(JR)} (\\d{1,4})$`).exec(RR);
+         const ar = new RegExp(`^${(0,ka.i)(Sr)} (\\d{1,4})$`).exec(rr);
```

#### 2325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25884` → after: `L25884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25884) · [Before (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25884)

```diff
-         else if (RR.startsWith(`${JR}: `) && RR.length > JR.length + 2) {
+         else if (rr.startsWith(`${Sr}: `) && rr.length > Sr.length + 2) {
```

#### 2326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25914` → after: `L25914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25914) · [Before (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25914)

```diff
-   if (null === RR || null === JR || null === yR || void 0 === yR || RR.length > mu.t || "" === RR.trim()) return null;
+   if (null === rr || null === Sr || null === Zr || void 0 === Zr || rr.length > ka.u || "" === rr.trim()) return null;
```

#### 2327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25916` → after: `L25916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25916) · [Before (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25916)

```diff
-   const ZR = wj(tR, `${GR}\n${JR}`, yR)[0],
+   const jr = pw(Wr, `${Qr}\n${Sr}`, Zr)[0],
```

#### 2328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25924` → after: `L25924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25924) · [Before (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25924)

```diff
-       const yR = [...JR.callbacks, ...null !== (GR = JR.functions) && void 0 !== GR ? GR : []].filter((JR => JR.name === RR));
+       const Zr = [...Sr.callbacks, ...null !== (Qr = Sr.functions) && void 0 !== Qr ? Qr : []].filter((Sr => Sr.name === rr));
```

#### 2329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25952` → after: `L25952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25952) · [Before (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25952)

```diff
-       const fR = null !== (yR = null === (tR = RR.valueExpression) || void 0 === tR ? void 0 : tR.trim()) && void 0 !== yR ? yR : null;
+       const Er = null !== (Zr = null === (Wr = rr.valueExpression) || void 0 === Wr ? void 0 : Wr.trim()) && void 0 !== Zr ? Zr : null;
```

#### 2330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25958` → after: `L25958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25958) · [Before (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25958)

```diff
-             tR = LR === sS[0] || LR === sS[3] || yR !== GR || /^[A-Za-z_$][\w$.]*$/.test(null !== GR && void 0 !== GR ? GR : "");
+             Wr = hr === Di[0] || hr === Di[3] || Zr !== Qr || /^[A-Za-z_$][\w$.]*$/.test(null !== Qr && void 0 !== Qr ? Qr : "");
```

#### 2331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25960` → after: `L25960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25960) · [Before (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25960)

```diff
-             iR = `${yR} === ${Number(JR)}`;
+             fr = `${Zr} === ${Number(Sr)}`;
```

#### 2332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25965-L25966` → after: `L25965-L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25965-L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25965-L25966) · [Before (L25965-L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25965-L25966)

```diff
-         KR = null === VR ? null : null !== (uR = null !== (ZR = null !== (qR = VR[1]) && void 0 !== qR ? qR : VR[2]) && void 0 !== ZR ? ZR : VR[3]) && void 0 !== uR ? uR : null,
-         wR = null !== KR && void 0 !== KR ? KR : RR.numberExpression,
+         xr = null === pr ? null : null !== (ar = null !== (jr = null !== (Ir = pr[1]) && void 0 !== Ir ? Ir : pr[2]) && void 0 !== jr ? jr : pr[3]) && void 0 !== ar ? ar : null,
+         mr = null !== xr && void 0 !== xr ? xr : rr.numberExpression,
```

#### 2333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25973-L25974` → after: `L25973-L25974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25973-L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25973-L25974) · [Before (L25973-L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25973-L25974)

```diff
-           yR = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,mu.k)(RR)}(?![\\w$])`).test(fR);
-         fj(fR).includes(RR) && GR >= 0 && (null !== KR || !yR) && (iR = `${RR} === ${GR}`)
+           Zr = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,ka.i)(rr)}(?![\\w$])`).test(Er);
+         Iw(Er).includes(rr) && Qr >= 0 && (null !== xr || !Zr) && (fr = `${rr} === ${Qr}`)
```

#### 2334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25977` → after: `L25977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25977) · [Before (L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25977)

```diff
-       return null !== iR && fj(iR).every((RR => aR.has(RR))) ? iR : null
+       return null !== fr && Iw(fr).every((rr => tr.has(rr))) ? fr : null
```

#### 2335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25992` → after: `L25992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25992) · [Before (L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25992)

```diff
-   const MR = (null !== (uR = yR.messages) && void 0 !== uR ? uR : []).filter((RR => {
+   const Br = (null !== (ar = Zr.messages) && void 0 !== ar ? ar : []).filter((rr => {
```

#### 2336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L25996` → after: `L25996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R25996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L25996) · [Before (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L25996)

```diff
-     BR = 1 !== MR.length || ES.test(`${GR}\n${JR}`) ? qR : MR[0].at;
+     Tr = 1 !== Br.length || wi.test(`${Qr}\n${Sr}`) ? Ir : Br[0].at;
```

#### 2337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26010` → after: `L26010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26010) · [Before (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26010)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${GR}(?![\\w$])`).test(RR) || (0, zu.d)(RR, new RegExp(`${GR}\\s*=(?![=>])`), zu.n).length > 0 || Fr(RR, JR) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${GR}\\s*\\([^()]*\\)\\s*\\{`, "m").test(RR)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${Qr}(?![\\w$])`).test(rr) || (0, Aa.e)(rr, new RegExp(`${Qr}\\s*=(?![=>])`), Aa.o).length > 0 || bN(rr, Sr) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${Qr}\\s*\\([^()]*\\)\\s*\\{`, "m").test(rr)
```

#### 2338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26014` → after: `L26014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26014) · [Before (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26014)

```diff
-   if (null === RR || null === JR || void 0 === JR || void 0 === JR.declaredNames || RR.length > mu.t) return [];
+   if (null === rr || null === Sr || void 0 === Sr || void 0 === Sr.declaredNames || rr.length > ka.u) return [];
```

#### 2339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26019` → after: `L26019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26019) · [Before (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26019)

```diff
-   for (const [, uR] of(0, zu.d)(yR, Lj, zu.n)) {
+   for (const [, ar] of(0, Aa.e)(Zr, Uw, Aa.o)) {
```

#### 2340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26030` → after: `L26030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26030) · [Before (L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26030)

```diff
-   if (null === RR || null === JR || void 0 === JR || RR.length > mu.t || !RR.includes("/") || ! function(RR) {
+   if (null === rr || null === Sr || void 0 === Sr || rr.length > ka.u || !rr.includes("/") || ! function(rr) {
```

#### 2341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26040` → after: `L26040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26040) · [Before (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26040)

```diff
-   const yR = [...JR.playerText, ...(null !== (GR = JR.messages) && void 0 !== GR ? GR : []).map((RR => {
+   const Zr = [...Sr.playerText, ...(null !== (Qr = Sr.messages) && void 0 !== Qr ? Qr : []).map((rr => {
```

#### 2342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26049-L26050` → after: `L26049-L26050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26049-L26050) · [Before (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26049-L26050)

```diff
-     const RR = null !== (uR = null !== (ZR = null !== (qR = iR[1]) && void 0 !== qR ? qR : iR[2]) && void 0 !== ZR ? ZR : iR[3]) && void 0 !== uR ? uR : iR[4];
-     for (const [JR] of(0, zu.d)(RR, Aj, (0, zu.k)("\\w/:."))) {
+     const rr = null !== (ar = null !== (jr = null !== (Ir = fr[1]) && void 0 !== Ir ? Ir : fr[2]) && void 0 !== jr ? jr : fr[3]) && void 0 !== ar ? ar : fr[4];
+     for (const [Sr] of(0, Aa.e)(rr, Yw, (0, Aa.k)("\\w/:."))) {
```

#### 2343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26081` → after: `L26081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26081) · [Before (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26081)

```diff
-     for (const qR of (0, zu.d)(RR, tC, zu.n)) VC(qR[0], JR, GR, yR) || (qR.index > ZR && uR.push({
+     for (const Ir of (0, Aa.e)(rr, ZK, Aa.o)) EK(Ir[0], Sr, Qr, Zr) || (Ir.index > jr && ar.push({
```

#### 2344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26091` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26091) · [Before (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26091)

```diff
-     title: !0 === RR.isApiCall ? qR : ZR("Not found in your code"),
+     title: !0 === rr.isApiCall ? Ir : jr("Not found in your code"),
```

#### 2345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26093` → after: `L26093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26093) · [Before (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26093)

```diff
-   }, `${JR}-name-${GR}`) : RR.text))
+   }, `${Sr}-name-${Qr}`) : rr.text))
```

#### 2346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26120` → after: `L26120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26120) · [Before (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26120)

```diff
-   }, `${GR}-number-${JR}`)] : lj(RR.text, `${GR}-${JR}`, yR)))
+   }, `${Qr}-number-${Sr}`)] : Bw(rr.text, `${Qr}-${Sr}`, Zr)))
```

#### 2347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26124` → after: `L26124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26124) · [Before (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26124)

```diff
-   return null === RR.suggestion ? JR("Not a Bloxd item") : `${JR("Not a Bloxd item")}: ${JR("Bloxd writes it")} "${RR.suggestion}"`
+   return null === rr.suggestion ? Sr("Not a Bloxd item") : `${Sr("Not a Bloxd item")}: ${Sr("Bloxd writes it")} "${rr.suggestion}"`
```

#### 2348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26135` → after: `L26135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26135) · [Before (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26135)

```diff
-   for (const fR of ZR) qR.push(...lj(RR.slice(iR, fR.start), `${JR}-${iR}`, GR, yR)), qR.push((0, vR.jsx)("span", {
+   for (const Er of jr) Ir.push(...Bw(rr.slice(fr, Er.start), `${Sr}-${fr}`, Qr, Zr)), Ir.push((0, Xr.jsx)("span", {
```

#### 2349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26139-L26140` → after: `L26139-L26140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26139-L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26139-L26140) · [Before (L26139-L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26139-L26140)

```diff
-   }, `${JR}-item-${fR.start}`)), iR = fR.end;
-   return qR.push(...lj(RR.slice(iR), `${JR}-${iR}`, GR, yR)), qR
+   }, `${Sr}-item-${Er.start}`)), fr = Er.end;
+   return Ir.push(...Bw(rr.slice(fr), `${Sr}-${fr}`, Qr, Zr)), Ir
```

#### 2350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26155` → after: `L26155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26155) · [Before (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26155)

```diff
-     wR <= uR || (uR > qR && ZR.push(...pj(RR.slice(qR, uR), JR + RR.slice(0, qR), `${yR}-${qR}`, tR)), ZR.push((0, vR.jsx)("span", {
+     mr <= ar || (ar > Ir && jr.push(...Tw(rr.slice(Ir, ar), Sr + rr.slice(0, Ir), `${Zr}-${Ir}`, Wr)), jr.push((0, Xr.jsx)("span", {
```

#### 2351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26159` → after: `L26159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26159) · [Before (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26159)

```diff
-     }, `${yR}-marked-${uR}`)), qR = wR)
+     }, `${Zr}-marked-${ar}`)), Ir = mr)
```

#### 2352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26161` → after: `L26161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26161) · [Before (L26161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26161)

```diff
-   return 0 === qR ? pj(RR, JR, yR, tR) : (qR < RR.length && ZR.push(...pj(RR.slice(qR), JR + RR.slice(0, qR), `${yR}-${qR}`, tR)), ZR)
+   return 0 === Ir ? Tw(rr, Sr, Zr, Wr) : (Ir < rr.length && jr.push(...Tw(rr.slice(Ir), Sr + rr.slice(0, Ir), `${Zr}-${Ir}`, Wr)), jr)
```

#### 2353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26172` → after: `L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26172) · [Before (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26172)

```diff
-     title: `${GR("What your code says")}: ${JR.hint}`,
+     title: `${Qr("What your code says")}: ${Sr.hint}`,
```

#### 2354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26186` → after: `L26186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26186) · [Before (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26186)

```diff
-     title: `${GR("Worked out by Studio from your code")}:\n${JR.hint}`,
+     title: `${Qr("Worked out by Studio from your code")}:\n${Sr.hint}`,
```

#### 2355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26226` → after: `L26226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26226) · [Before (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26226)

```diff
-       }, `${JR}-note-${ZR}`))
+       }, `${Sr}-note-${jr}`))
```

#### 2356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26232-L26233` → after: `L26232-L26233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26232-L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26232-L26233) · [Before (L26232-L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26232-L26233)

```diff
-         const iR = Math.min(fR, Math.max(VR, null !== (KR = null === (wR = uR[ZR]) || void 0 === wR ? void 0 : wR.end) && void 0 !== KR ? KR : fR));
-         iR > VR && yR.push(...vj(RR.slice(VR, iR), RR.slice(0, VR), VR, `${JR}-${VR}`, GR, tR)), VR = iR, qR(VR)
+         const fr = Math.min(Er, Math.max(pr, null !== (xr = null === (mr = ar[jr]) || void 0 === mr ? void 0 : mr.end) && void 0 !== xr ? xr : Er));
+         fr > pr && Zr.push(...Lw(rr.slice(pr, fr), rr.slice(0, pr), pr, `${Sr}-${pr}`, Qr, Wr)), pr = fr, Ir(pr)
```

#### 2357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26239` → after: `L26239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26239) · [Before (L26239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26239)

```diff
-     const [, uR, ZR, eR, aR, LR, nR] = rR, UR = `${JR}-${rR.index}`, WR = RR.slice(0, rR.index);
+     const [, ar, jr, Ur, tr, hr, zr] = Nr, Yr = `${Sr}-${Nr.index}`, nr = rr.slice(0, Nr.index);
```

#### 2358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26244` → after: `L26244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26244) · [Before (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26244)

```diff
-         children: vj(null !== (VR = null !== eR && void 0 !== eR ? eR : aR) && void 0 !== VR ? VR : "", WR, rR.index + 2, UR, GR, tR)
+         children: Lw(null !== (pr = null !== Ur && void 0 !== Ur ? Ur : tr) && void 0 !== pr ? pr : "", nr, Nr.index + 2, Yr, Qr, Wr)
```

#### 2359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26258` → after: `L26258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26258) · [Before (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26258)

```diff
-           children: bj(null !== nR && void 0 !== nR ? nR : "", UR, GR, "code")
+           children: Ow(null !== zr && void 0 !== zr ? zr : "", Yr, Qr, "code")
```

#### 2360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26260` → after: `L26260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26260) · [Before (L26260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26260)

```diff
-         uR = void 0 === RR ? Ir(null !== nR && void 0 !== nR ? nR : "") : null;
+         ar = void 0 === rr ? MN(null !== zr && void 0 !== zr ? zr : "") : null;
```

#### 2361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26263` → after: `L26263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26263) · [Before (L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26263)

```diff
-         title: (KR = uR, wR = GR.t, `${wR("World Code has no")} ${KR}, ${wR("so this code won't run")}`),
+         title: (xr = ar, mr = Qr.t, `${mr("World Code has no")} ${xr}, ${mr("so this code won't run")}`),
```

#### 2362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26265` → after: `L26265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26265) · [Before (L26265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26265)

```diff
-       }, UR) : void 0 === RR ? JR : (0, vR.jsx)("span", {
+       }, Yr) : void 0 === rr ? Sr : (0, Xr.jsx)("span", {
```

#### 2363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26290` → after: `L26290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26290) · [Before (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26290)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26293` → after: `L26293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26293) · [Before (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26293)

```diff
-     }), void 0 === iR ? qR : (0, vR.jsxs)(vR.Fragment, {
+     }), void 0 === fr ? Ir : (0, Xr.jsxs)(Xr.Fragment, {
```

#### 2365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26316` → after: `L26316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26316) · [Before (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26316)

```diff
-   Ij = new RegExp(`${cj}([${String.fromCharCode(Pj)}-${String.fromCharCode(63743)}])`, "g");
+   Mw = new RegExp(`${gw}([${String.fromCharCode(Cw)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26320` → after: `L26320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26320) · [Before (L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26320)

```diff
-     yR = RR.replace(Hj, ((RR, JR) => oj.test(JR) ? RR : JR.startsWith("[[") && JR.endsWith("]]") && null !== vG(JR.slice(2, -2)) ? JR : (GR.push(RR), cj + String.fromCharCode(Pj + GR.length - 1)))),
+     Zr = rr.replace(qw, ((rr, Sr) => Rw.test(Sr) ? rr : Sr.startsWith("[[") && Sr.endsWith("]]") && null !== XQ(Sr.slice(2, -2)) ? Sr : (Qr.push(rr), gw + String.fromCharCode(Cw + Qr.length - 1)))),
```

#### 2367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26327` → after: `L26327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26327) · [Before (L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26327)

```diff
-         "" !== RR && ("text" === (null === GR || void 0 === GR ? void 0 : GR.kind) ? GR.text += RR : JR.push({
+         "" !== rr && ("text" === (null === Qr || void 0 === Qr ? void 0 : Qr.kind) ? Qr.text += rr : Sr.push({
```

#### 2368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26345` → after: `L26345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26345) · [Before (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26345)

```diff
-         const wR = null !== (uR = null === (ZR = xG.exec(RR.slice(yR))) || void 0 === ZR ? void 0 : ZR[0]) && void 0 !== uR ? uR : "";
+         const mr = null !== (ar = null === (jr = HQ.exec(rr.slice(Zr))) || void 0 === jr ? void 0 : jr[0]) && void 0 !== ar ? ar : "";
```

#### 2369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26369` → after: `L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26369) · [Before (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26369)

```diff
-       const rR = zK(Number((null !== (wR = null !== tR && void 0 !== tR ? tR : ZR) && void 0 !== wR ? wR : "").replace(/,/g, "")), null !== uR && void 0 !== uR ? uR : qR, Number(iR.replace(/,/g, "")), fR);
+       const Nr = kx(Number((null !== (mr = null !== Wr && void 0 !== Wr ? Wr : jr) && void 0 !== mr ? mr : "").replace(/,/g, "")), null !== ar && void 0 !== ar ? ar : Ir, Number(fr.replace(/,/g, "")), Er);
```

#### 2370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26374` → after: `L26374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26374) · [Before (L26374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26374)

```diff
-       return void 0 === nR ? RR : `${jK(nR,JR)}${RR.slice(JR.length)}`
+       return void 0 === zr ? rr : `${Vx(zr,Sr)}${rr.slice(Sr.length)}`
```

#### 2371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26403` → after: `L26403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26403) · [Before (L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26403)

```diff
-     return (0, zu.s)(RR, Sj, jj, (RR => {
+     return (0, Aa.t)(rr, Aw, Vw, (rr => {
```

#### 2372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26409-L26410` → after: `L26409-L26410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26409-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26409-L26410) · [Before (L26409-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26409-L26410)

```diff
-       const ZR = null !== yR && void 0 !== yR ? yR : "*";
-       return (null !== tR && void 0 !== tR ? tR : uR).split(/(\[\[[^\]\n]+\]\])/).map(((RR, JR) => {
+       const jr = null !== Zr && void 0 !== Zr ? Zr : "*";
+       return (null !== Wr && void 0 !== Wr ? Wr : ar).split(/(\[\[[^\]\n]+\]\])/).map(((rr, Sr) => {
```

#### 2373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26414` → after: `L26414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26414) · [Before (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26414)

```diff
-         return `${GR}${ZR}${RR.trim()}${ZR}${yR}`
+         return `${Qr}${jr}${rr.trim()}${jr}${Zr}`
```

#### 2374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26427-L26428` → after: `L26427-L26428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26427-L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26427-L26428) · [Before (L26427-L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26427-L26428)

```diff
-         rR = null === wR || "heatmap" !== RR.link.key ? wR : su(JZ(wR, null === (fR = GR.checkData) || void 0 === fR ? void 0 : fR.heatmapEvents), KR),
-         eR = null !== rR || "heatmap" !== RR.link.key ? rR : Kx(yZ(qR(yR), ZR(yR + 1, uR.length) + tR), {
+         Nr = null === mr || "heatmap" !== rr.link.key ? mr : da(rj(mr, null === (Er = Qr.checkData) || void 0 === Er ? void 0 : Er.heatmapEvents), xr),
+         Ur = null !== Nr || "heatmap" !== rr.link.key ? Nr : EH(Qj(Ir(Zr), jr(Zr + 1, ar.length) + Wr), {
```

#### 2375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26436` → after: `L26436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26436) · [Before (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26436)

```diff
-       }, `${JR}stat-${yR}`)]
+       }, `${Sr}stat-${Zr}`)]
```

#### 2376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26438` → after: `L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26438) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26438)

```diff
-     return Nj(RR.text, `${JR}${yR}`, GR)
+     return Pw(rr.text, `${Sr}${Zr}`, Qr)
```

#### 2377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26450` → after: `L26450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26450) · [Before (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26450)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2378. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26453` → after: `L26453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26453) · [Before (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26453)

```diff
-     }), null === JR ? GR("Studio has no data on this: a guess") : `${GR("Only")} ${JR} ${GR("players so far: a guess")}`]
+     }), null === Sr ? Qr("Studio has no data on this: a guess") : `${Qr("Only")} ${Sr} ${Qr("players so far: a guess")}`]
```

#### 2379. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26466-L26467` → after: `L26466-L26467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26466-L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26466-L26467) · [Before (L26466-L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26466-L26467)

```diff
-     title: `${GR("What your code says")}: ${JR.hint}`,
-     children: [(0, vR.jsx)(AR.d, {
+     title: `${Qr("What your code says")}: ${Sr.hint}`,
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2380. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26495` → after: `L26495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26495) · [Before (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26495)

```diff
-         }), " ", GR("events"), "" === RR.category ? "" : ` ${GR("in")} ${RR.category}`, " ", GR("are at"), " ", RR.text]
+         }), " ", Qr("events"), "" === rr.category ? "" : ` ${Qr("in")} ${rr.category}`, " ", Qr("are at"), " ", rr.text]
```

#### 2381. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26502` → after: `L26502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26502) · [Before (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26502)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2382. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26524` → after: `L26524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26524) · [Before (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26524)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2383. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26527` → after: `L26527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26527) · [Before (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26527)

```diff
-     }), GR ? `${JR.from} ${yR("also leads to")} ${JR.other}, ${yR("so players who didn't get to")} ${JR.to} ${yR("may have gone there instead")}.` : `${JR.from} ${yR("also leads on to")} ${JR.other} (${JR.otherShare}% ${yR("of its players")}), ${yR("so the")} ${JR.notTakenShare}% … [truncated]
+     }), Qr ? `${Sr.from} ${Zr("also leads to")} ${Sr.other}, ${Zr("so players who didn't get to")} ${Sr.to} ${Zr("may have gone there instead")}.` : `${Sr.from} ${Zr("also leads on to")} ${Sr.other} (${Sr.otherShare}% ${Zr("of its players")}), ${Zr("so the")} ${Sr.notTakenShare}% … [truncated]
```

#### 2384. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26548` → after: `L26548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26548) · [Before (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26548)

```diff
-           KR = (0, mu.L)(RR, uR.end);
+           xr = (0, ka.U)(rr, ar.end);
```

#### 2385. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26553-L26554` → after: `L26553-L26554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26553-L26554) · [Before (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26553-L26554)

```diff
-           text: "turned" === fR ? `Studio turned this round: in your code ${VR}.` : `${yR?"Careful":"Check the direction"}: in your code ${VR}.`,
-           hint: "" === JR.usedIn ? `its name, ${JR.name}` : JR.usedIn
+           text: "turned" === Er ? `Studio turned this round: in your code ${pr}.` : `${Zr?"Careful":"Check the direction"}: in your code ${pr}.`,
+           hint: "" === Sr.usedIn ? `its name, ${Sr.name}` : Sr.usedIn
```

#### 2386. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26573` → after: `L26573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26573) · [Before (L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26573)

```diff
-         }, `bump-${tR}`)
+         }, `bump-${Wr}`)
```

#### 2387. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26580` → after: `L26580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26580) · [Before (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26580)

```diff
-       }, `guess-${GR}`)
+       }, `guess-${Qr}`)
```

#### 2388. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26586` → after: `L26586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26586) · [Before (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26586)

```diff
-       }, `place-${GR}`)
+       }, `place-${Qr}`)
```

#### 2389. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26593` → after: `L26593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26593) · [Before (L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26593)

```diff
-       }, `branch-${GR}`)
+       }, `branch-${Qr}`)
```

#### 2390. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26599` → after: `L26599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26599) · [Before (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26599)

```diff
-       }, `constant-${GR}`)
+       }, `constant-${Qr}`)
```

#### 2391. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26605` → after: `L26605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26605) · [Before (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26605)

```diff
-       }, `goal-${GR}`)
+       }, `goal-${Qr}`)
```

#### 2392. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26623` → after: `L26623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26623) · [Before (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26623)

```diff
-     const uR = dj(iR(fR, yR), `g${GR}-`, JR, zj(iR(0, fR)), zj(iR(yR)));
+     const ar = iw(fr(Er, Zr), `g${Qr}-`, Sr, kw(fr(0, Er)), kw(fr(Zr)));
```

#### 2393. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26625` → after: `L26625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26625) · [Before (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26625)

```diff
-   })), ...dj(iR(fR), `g${qR.length}-`, JR, zj(iR(0, fR)))]
+   })), ...iw(fr(Er), `g${Ir.length}-`, Sr, kw(fr(0, Er)))]
```

#### 2394. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26668` → after: `L26668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26668) · [Before (L26668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26668)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2395. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26701` → after: `L26701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26701) · [Before (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26701)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2396. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26719-L26720` → after: `L26719-L26720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26719-L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26719-L26720) · [Before (L26719-L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26719-L26720)

```diff
-     title: null !== (JR = GR.line) && void 0 !== JR ? JR : `"${GR.text}"`,
-     children: [(0, vR.jsx)(AR.d, {
+     title: null !== (Sr = Qr.line) && void 0 !== Sr ? Sr : `"${Qr.text}"`,
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2397. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26739` → after: `L26739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26739) · [Before (L26739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26739)

```diff
-       return `"${JR}"`
+       return `"${Sr}"`
```

#### 2398. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26750` → after: `L26750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26750) · [Before (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26750)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2399. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26753` → after: `L26753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26753) · [Before (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26753)

```diff
-     }), " ", GR ? `${yR("Studio can't find")} ${tR} ${yR("in your game")}: ${yR(uR?"use your own place's name":"use one your game has")}.` : `${yR("Is")} ${tR} ${yR("in your game? If not, use one that is.")}`]
+     }), " ", Qr ? `${Zr("Studio can't find")} ${Wr} ${Zr("in your game")}: ${Zr(ar?"use your own place's name":"use one your game has")}.` : `${Zr("Is")} ${Wr} ${Zr("in your game? If not, use one that is.")}`]
```

#### 2400. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26763` → after: `L26763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26763) · [Before (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26763)

```diff
-   const tR = GR ? "badge" === JR.kind ? `${yR("Your game already has the")} "${JR.name}" ${yR("badge")}` : `${yR("Your game already sends")} "${JR.name}"` : "badge" === JR.kind ? yR("You already have this badge.") : yR("You already have this message.");
+   const Wr = Qr ? "badge" === Sr.kind ? `${Zr("Your game already has the")} "${Sr.name}" ${Zr("badge")}` : `${Zr("Your game already sends")} "${Sr.name}"` : "badge" === Sr.kind ? Zr("You already have this badge.") : Zr("You already have this message.");
```

#### 2401. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26766` → after: `L26766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26766) · [Before (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26766)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2402. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26863` → after: `L26863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26863) · [Before (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26863)

```diff
-   return qd((0, En.A)(RR), JR)
+   return jc((0, Vz.v)(rr), Sr)
```

#### 2403. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26874` → after: `L26874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26874) · [Before (L26874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26874)

```diff
-     children: [GR.includes(JR.counts) ? "" : `${JR.counts}. `, yR("Why this number"), ": ", JR.basis]
+     children: [Qr.includes(Sr.counts) ? "" : `${Sr.counts}. `, Zr("Why this number"), ": ", Sr.basis]
```

#### 2404. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26879` → after: `L26879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26879) · [Before (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26879)

```diff
-   return `${JR("Target")}: ${RR.change} ${RR.counts}`
+   return `${Sr("Target")}: ${rr.change} ${rr.counts}`
```

#### 2405. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26911` → after: `L26911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26911) · [Before (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26911)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2406. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26942` → after: `L26942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26942) · [Before (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26942)

```diff
-       fR = RR => `${RR}%`,
+       Er = rr => `${rr}%`,
```

#### 2407. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26948` → after: `L26948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26948) · [Before (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26948)

```diff
-         wR = [`${fR(uR)} ${GR("of sessions")} ${QA(tR.minutes,GR)}`], rR = fR;
+         mr = [`${Er(ar)} ${Qr("of sessions")} ${be(Wr.minutes,Qr)}`], Nr = Er;
```

#### 2408. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26951` → after: `L26951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26951) · [Before (L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26951)

```diff
-         wR = [`${fR(uR)} ${GR("of players at")} `, {
+         mr = [`${Er(ar)} ${Qr("of players at")} `, {
```

#### 2409. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26953` → after: `L26953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26953) · [Before (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26953)

```diff
-         }, ` ${GR("reach")} `, {
+         }, ` ${Qr("reach")} `, {
```

#### 2410. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26955` → after: `L26955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26955) · [Before (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26955)

```diff
-         }, tR.isOrLater ? ` ${GR("or a later one")}` : ""], rR = fR;
+         }, Wr.isOrLater ? ` ${Qr("or a later one")}` : ""], Nr = Er;
```

#### 2411. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26958` → after: `L26958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26958) · [Before (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26958)

```diff
-         wR = [`${kA(tR.toPlayers)} ${GR("of the")} ${kA(tR.fromPlayers)} ${GR("players who reached")} ${tR.from} ${GR("also reached")} ${tR.to} (${fR(uR)})`], rR = fR;
+         mr = [`${oe(Wr.toPlayers)} ${Qr("of the")} ${oe(Wr.fromPlayers)} ${Qr("players who reached")} ${Wr.from} ${Qr("also reached")} ${Wr.to} (${Er(ar)})`], Nr = Er;
```

#### 2412. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26961` → after: `L26961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26961) · [Before (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26961)

```diff
-         wR = [`${kA(uR)} ${GR("plays a day")}`], rR = RR => `${kA(RR)} ${GR("plays a day")}`;
+         mr = [`${oe(ar)} ${Qr("plays a day")}`], Nr = rr => `${oe(rr)} ${Qr("plays a day")}`;
```

#### 2413. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26964` → after: `L26964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26964) · [Before (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26964)

```diff
-         wR = [`${GR("an average session lasts")} ${kA(uR)} ${GR("minutes")}`], rR = RR => `${kA(RR)} ${GR("minutes")}`;
+         mr = [`${Qr("an average session lasts")} ${oe(ar)} ${Qr("minutes")}`], Nr = rr => `${oe(rr)} ${Qr("minutes")}`;
```

#### 2414. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26967` → after: `L26967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26967) · [Before (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26967)

```diff
-         wR = [`${GR("each player plays")} ${kA(uR)} ${GR("times in")} ${tR.days} ${GR("days")}`], rR = RR => `${kA(RR)} ${GR("times")}`
+         mr = [`${Qr("each player plays")} ${oe(ar)} ${Qr("times in")} ${Wr.days} ${Qr("days")}`], Nr = rr => `${oe(rr)} ${Qr("times")}`
```

#### 2415. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26970` → after: `L26970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26970) · [Before (L26970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26970)

```diff
-       aR = yR ? "" : `${GR("now")} ${rR(uR)}`;
+       tr = Zr ? "" : `${Qr("now")} ${Nr(ar)}`;
```

#### 2416. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26973-L26975` → after: `L26973-L26975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26973-L26975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26973-L26975) · [Before (L26973-L26975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26973-L26975)

```diff
-       const RR = yR ? "" : `, ${aR}`,
-         JR = VR ? `, ${GR("the goal")}` : null === qR ? "" : `; ${GR("the goal is")} ${fR(qR)}`;
-       LR = `${iR.helpedAt} ${GR("above")} ${kA(iR.helpedPlayers)} (${fR(ZR)} ${GR("of the new players")}${RR}${JR}) ${KR}.`
+       const rr = Zr ? "" : `, ${tr}`,
+         Sr = pr ? `, ${Qr("the goal")}` : null === Ir ? "" : `; ${Qr("the goal is")} ${Er(Ir)}`;
+       hr = `${fr.helpedAt} ${Qr("above")} ${oe(fr.helpedPlayers)} (${Er(jr)} ${Qr("of the new players")}${rr}${Sr}) ${xr}.`
```

#### 2417. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26977-L26978` → after: `L26977-L26978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26977-L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26977-L26978) · [Before (L26977-L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26977-L26978)

```diff
-       const RR = eR ? ` ${GR("over those")} ${iR.days} ${GR("days")}` : "";
-       LR = `${VR?`${GR(eR?"an average of":"reaching")} ${rR(ZR)}${RR} (${GR("the goal")}${yR?"":`; ${aR}`})`:`${GR(eR?"an average above":"above")} ${rR(ZR)}${RR}${yR?"":` (${aR})`}`} ${KR}${VR||null===qR?"":` (${GR("the goal is")} ${rR(qR)})`}.`
+       const rr = Ur ? ` ${Qr("over those")} ${fr.days} ${Qr("days")}` : "";
+       hr = `${pr?`${Qr(Ur?"an average of":"reaching")} ${Nr(jr)}${rr} (${Qr("the goal")}${Zr?"":`; ${tr}`})`:`${Qr(Ur?"an average above":"above")} ${Nr(jr)}${rr}${Zr?"":` (${tr})`}`} ${xr}${pr||null===Ir?"":` (${Qr("the goal is")} ${Nr(Ir)})`}.`
```

#### 2418. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26981` → after: `L26981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26981) · [Before (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26981)

```diff
-       UR = null !== nR && nR.high >= ZR ? ` ${GR("In the last")} ${aA} ${GR("days, single days went from")} ${kA(nR.low)} ${GR("to")} ${rR(nR.high)}, ${GR("so go by the average")}.` : "";
+       Yr = null !== zr && zr.high >= jr ? ` ${Qr("In the last")} ${Ue} ${Qr("days, single days went from")} ${oe(zr.low)} ${Qr("to")} ${Nr(zr.high)}, ${Qr("so go by the average")}.` : "";
```

#### 2419. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26986` → after: `L26986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26986) · [Before (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26986)

```diff
-         WR = [`${GR("In")} ${iR.days} ${GR("days")}, ${GR("check")} `, FA(RR), "days" !== iR.kind || eR ? "" : ` ${GR("over those days")}`, `: ${GR("now")} `, ...wR, `, ${GR("and")} ${LR}`];
+         nr = [`${Qr("In")} ${fr.days} ${Qr("days")}, ${Qr("check")} `, Je(rr), "days" !== fr.kind || Ur ? "" : ` ${Qr("over those days")}`, `: ${Qr("now")} `, ...mr, `, ${Qr("and")} ${hr}`];
```

#### 2420. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26989` → after: `L26989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26989) · [Before (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26989)

```diff
-         WR = [`${GR("When")} ${iR.at} ${GR("has about")} ${kA(iR.players)} ${GR("players")}, ${GR("check")} `, FA(RR), `: ${LR}`]
+         nr = [`${Qr("When")} ${fr.at} ${Qr("has about")} ${oe(fr.players)} ${Qr("players")}, ${Qr("check")} `, Je(rr), `: ${hr}`]
```

#### 2421. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26994` → after: `L26994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26994) · [Before (L26994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26994)

```diff
-           JR = [`${GR("After your change, wait")} ${iR.days} ${GR("days")} (${GR("about")} ${kA(iR.count)} `, "plays" === iR.counts ? GR("new plays") : GR("new players at that step"), `), ${GR("for the chart to count only those, then check")} `, FA(RR), ": "];
+           Sr = [`${Qr("After your change, wait")} ${fr.days} ${Qr("days")} (${Qr("about")} ${oe(fr.count)} `, "plays" === fr.counts ? Qr("new plays") : Qr("new players at that step"), `), ${Qr("for the chart to count only those, then check")} `, Je(rr), ": "];
```

#### 2422. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L26997` → after: `L26997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L26997) · [Before (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L26997)

```diff
-           JR = [`${GR("After your change, wait")} ${iR.days} ${GR("days, then check")} `, FA(RR), eR ? ": " : ` ${GR("over those days")}: `];
+           Sr = [`${Qr("After your change, wait")} ${fr.days} ${Qr("days, then check")} `, Je(rr), Ur ? ": " : ` ${Qr("over those days")}: `];
```

#### 2423. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27000` → after: `L27000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27000) · [Before (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27000)

```diff
-           JR = [`${GR("After your change, wait until")} ${iR.at} ${GR("has about")} ${kA(iR.players)} ${GR("players")} (${kA(iR.more)} ${GR("more")}), ${GR("then check")} `, FA(RR), ": "]
+           Sr = [`${Qr("After your change, wait until")} ${fr.at} ${Qr("has about")} ${oe(fr.players)} ${Qr("players")} (${oe(fr.more)} ${Qr("more")}), ${Qr("then check")} `, Je(rr), ": "]
```

#### 2424. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27002` → after: `L27002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27002) · [Before (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27002)

```diff
-       WR = [`${"sessionsLasting"===tR.kind&&void 0!==tR.after?`${GR("Your change starts at")} ${tR.after} ${GR("minutes, so this checks the")} ${tR.minutes}${GR("-minute mark")}. `:""}${GR("Now")}: `, ...wR, ". ", ...JR, LR, UR]
+       nr = [`${"sessionsLasting"===Wr.kind&&void 0!==Wr.after?`${Qr("Your change starts at")} ${Wr.after} ${Qr("minutes, so this checks the")} ${Wr.minutes}${Qr("-minute mark")}. `:""}${Qr("Now")}: `, ...mr, ". ", ...Sr, hr, Yr]
```

#### 2425. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27007` → after: `L27007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27007) · [Before (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27007)

```diff
-       undo: null === RR.undo ? null : [`${GR("If it got worse, put back")} `, {
+       undo: null === rr.undo ? null : [`${Qr("If it got worse, put back")} `, {
```

#### 2426. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27009` → after: `L27009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27009) · [Before (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27009)

```diff
-       }, ...null === RR.undo.inside ? [] : [` ${GR("inside")} `, {
+       }, ...null === rr.undo.inside ? [] : [` ${Qr("inside")} `, {
```

#### 2427. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27023` → after: `L27023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27023) · [Before (L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27023)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2428. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27058` → after: `L27058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27058) · [Before (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27058)

```diff
-   } = (0, rR.A)(), eR = null === qR ? null : dA(GR, qR, uR, KR.constantLines), aR = function(RR, JR) {
+   } = (0, Nr.E)(), Ur = null === Ir ? null : we(Qr, Ir, ar, xr.constantLines), tr = function(rr, Sr) {
```

#### 2429. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27064` → after: `L27064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27064) · [Before (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27064)

```diff
-   }(eR, qR).join("\n"), LR = (0, yR.useMemo)((() => "" === aR ? nd : aR.split("\n")), [aR]), nR = null !== eR && null !== qR && KR.isOlder ? ev(eR, qR, iR) : null, {
+   }(Ur, Ir).join("\n"), hr = (0, Zr.useMemo)((() => "" === tr ? Uc : tr.split("\n")), [tr]), zr = null !== Ur && null !== Ir && xr.isOlder ? mX(Ur, Ir, fr) : null, {
```

#### 2430. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27129` → after: `L27129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27129) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27129)

```diff
-   }(null !== (JR = null === XR || void 0 === XR ? void 0 : XR.nextChange) && void 0 !== JR ? JR : CR) : {
+   }(null !== (Sr = null === yr || void 0 === yr ? void 0 : yr.nextChange) && void 0 !== Sr ? Sr : Kr) : {
```

#### 2431. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27134-L27135` → after: `L27134-L27135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27134-L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27134-L27135) · [Before (L27134-L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27134-L27135)

```diff
-     return GR.steps.indexOf(null !== (JR = BR.get(RR)) && void 0 !== JR ? JR : RR)
-   }, bR = MR.steps.length, OR = MR.steps.filter((RR => lR.includes(gR(RR)))).length, xR = null !== uR && null !== MR.target && LU(MR.target, uR.change), NR = null !== uR && (null === eR ? CR : GR).blocks.some((RR => "list" === RR.kind ? RR.items.some((RR => LU(RR.text, uR.change) … [truncated]
+     return Qr.steps.indexOf(null !== (Sr = Tr.get(rr)) && void 0 !== Sr ? Sr : rr)
+   }, lr = Br.steps.length, Pr = Br.steps.filter((rr => vr.includes(Lr(rr)))).length, Hr = null !== ar && null !== Br.target && mY(Br.target, ar.change), qr = null !== ar && (null === Ur ? Kr : Qr).blocks.some((rr => "list" === rr.kind ? rr.items.some((rr => mY(rr.text, ar.change) … [truncated]
```

#### 2432. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27179` → after: `L27179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27179) · [Before (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27179)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2433. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27184` → after: `L27184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27184) · [Before (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27184)

```diff
-         children: [null === MR.title ? wR(gV) : `${wR(gV)}:`, null !== MR.title && (0, vR.jsxs)("span", {
+         children: [null === Br.title ? mr(Tp) : `${mr(Tp)}:`, null !== Br.title && (0, Xr.jsxs)("span", {
```

#### 2434. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27192` → after: `L27192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27192) · [Before (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27192)

```diff
-         children: `${OR}/${bR}`
+         children: `${Pr}/${lr}`
```

#### 2435. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27207` → after: `L27207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27207) · [Before (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27207)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2436. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27226` → after: `L27226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27226) · [Before (L27226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27226)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2437. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27242` → after: `L27242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27242) · [Before (L27242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27242)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2438. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27261` → after: `L27261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27261) · [Before (L27261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27261)

```diff
-     uR = 1 === tR ? yR("in the first minute") : tR < 1 ? yR("this early") : `${yR("in the first")} ${tR} ${yR("minutes")}`,
+     ar = 1 === Wr ? Zr("in the first minute") : Wr < 1 ? Zr("this early") : `${Zr("in the first")} ${Wr} ${Zr("minutes")}`,
```

#### 2439. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27266` → after: `L27266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27266) · [Before (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27266)

```diff
-     children: GR ? `${yR("Nobody dies")} ${uR} ${yR("in your game, so this may not help")}.` : `${yR("Studio sees no deaths")} ${uR} (${yR("the earliest")}, ${JR.earliest.name}, ${yR("comes at")} ${ZR} ${yR("min on average")}), ${yR("so this may not be why players leave")}.`
+     children: Qr ? `${Zr("Nobody dies")} ${ar} ${Zr("in your game, so this may not help")}.` : `${Zr("Studio sees no deaths")} ${ar} (${Zr("the earliest")}, ${Sr.earliest.name}, ${Zr("comes at")} ${jr} ${Zr("min on average")}), ${Zr("so this may not be why players leave")}.`
```

#### 2440. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27279` → after: `L27279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27279) · [Before (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27279)

```diff
-   } = (0, rR.A)(), fR = uR.blocks.flatMap((RR => {
+   } = (0, Nr.E)(), Er = ar.blocks.flatMap((rr => {
```

#### 2441. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27281-L27282` → after: `L27281-L27282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27281-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27281-L27282) · [Before (L27281-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27281-L27282)

```diff
-     return "list" === RR.kind ? [null !== (JR = null === (GR = RR.items[0]) || void 0 === GR ? void 0 : GR.text) && void 0 !== JR ? JR : ""] : "paragraph" === RR.kind ? [RR.text] : []
-   }))[0], VR = null !== (JR = null !== (GR = null !== (yR = null !== (tR = uR.title) && void 0 !== tR ? tR : null === ZR ? null : Kd(ZR, iR)) && void 0 !== yR ? yR : uR.target) && void 0 !== GR ? GR : fR) && void 0 !== JR ? JR : null;
+     return "list" === rr.kind ? [null !== (Sr = null === (Qr = rr.items[0]) || void 0 === Qr ? void 0 : Qr.text) && void 0 !== Sr ? Sr : ""] : "paragraph" === rr.kind ? [rr.text] : []
+   }))[0], pr = null !== (Sr = null !== (Qr = null !== (Zr = null !== (Wr = ar.title) && void 0 !== Wr ? Wr : null === jr ? null : Ec(jr, fr)) && void 0 !== Zr ? Zr : ar.target) && void 0 !== Qr ? Qr : Er) && void 0 !== Sr ? Sr : null;
```

#### 2442. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27285` → after: `L27285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27285) · [Before (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27285)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2443. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27322` → after: `L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27322) · [Before (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27322)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2444. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27380` → after: `L27380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27380) · [Before (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27380)

```diff
-     return null !== (RR = NB(aR, LR, pR)) && void 0 !== RR ? RR : function(RR, JR, GR, yR) {
+     return null !== (rr = HT(tr, hr, Or)) && void 0 !== rr ? rr : function(rr, Sr, Qr, Zr) {
```

#### 2445. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27384` → after: `L27384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27384) · [Before (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27384)

```diff
-       const qR = null !== (tR = yj[ZR[1].toLowerCase()]) && void 0 !== tR ? tR : Number(ZR[1]),
+       const Ir = null !== (Wr = Sw[jr[1].toLowerCase()]) && void 0 !== Wr ? Wr : Number(jr[1]),
```

#### 2446. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27386` → after: `L27386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27386) · [Before (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27386)

```diff
-       if (qR < 1 || RR.length > mu.t || YS.test(JR) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(iR)) return null;
+       if (Ir < 1 || rr.length > ka.u || ci.test(Sr) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(fr)) return null;
```

#### 2447. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27390` → after: `L27390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27390) · [Before (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27390)

```diff
-           return null !== (JR = null === (GR = tj.exec(RR)) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : null
+           return null !== (Sr = null === (Qr = Qw.exec(rr)) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : null
```

#### 2448. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27394` → after: `L27394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27394) · [Before (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27394)

```diff
-         rR = null !== (uR = JR.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== uR ? uR : [],
+         Nr = null !== (ar = Sr.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== ar ? ar : [],
```

#### 2449. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27397` → after: `L27397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27397) · [Before (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27397)

```diff
-       return null !== KR && 0 !== fR.length && eR && void 0 !== aR ? NB([`if (Date.now() - ${aR}[${KR}] >= ${6e4*qR}) {`, ...fR.map((RR => `  ${RR}`)), "}"].join("\n"), "onPlayerJoin", yR) : null
+       return null !== xr && 0 !== Er.length && Ur && void 0 !== tr ? HT([`if (Date.now() - ${tr}[${xr}] >= ${6e4*Ir}) {`, ...Er.map((rr => `  ${rr}`)), "}"].join("\n"), "onPlayerJoin", Zr) : null
```

#### 2450. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27413` → after: `L27413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27413) · [Before (L27413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27413)

```diff
-         }))).size ? JR[0] : null !== (KR = null === (wR = wj(yR, RR, GR)[0]) || void 0 === wR ? void 0 : wR.event) && void 0 !== KR ? KR : null,
+         }))).size ? Sr[0] : null !== (xr = null === (mr = pw(Zr, rr, Qr)[0]) || void 0 === mr ? void 0 : mr.event) && void 0 !== xr ? xr : null,
```

#### 2451. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27427` → after: `L27427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27427) · [Before (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27427)

```diff
-     if (void 0 === eR || null === JR || JR.length > mu.t) return null;
+     if (void 0 === Ur || null === Sr || Sr.length > ka.u) return null;
```

#### 2452. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27429` → after: `L27429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27429) · [Before (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27429)

```diff
-       LR = new Set([...null !== (uR = eR.params) && void 0 !== uR ? uR : [], ...null !== (ZR = eR.idNames) && void 0 !== ZR ? ZR : [], ...null !== (qR = null === (iR = eR.body) || void 0 === iR ? void 0 : iR.locals) && void 0 !== qR ? qR : []]),
+       hr = new Set([...null !== (ar = Ur.params) && void 0 !== ar ? ar : [], ...null !== (jr = Ur.idNames) && void 0 !== jr ? jr : [], ...null !== (Ir = null === (fr = Ur.body) || void 0 === fr ? void 0 : fr.locals) && void 0 !== Ir ? Ir : []]),
```

#### 2453. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27433-L27434` → after: `L27433-L27434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27433-L27434) · [Before (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27433-L27434)

```diff
-           ZR = null !== (JR = null === (yR = RR.numberExpression) || void 0 === yR ? void 0 : yR.trim()) && void 0 !== JR ? JR : "",
-           qR = null === uR ? void 0 : (null !== (tR = GR.functions) && void 0 !== tR ? tR : []).find((RR => RR.name === uR[uR.length - 1])),
+           jr = null !== (Sr = null === (Zr = rr.numberExpression) || void 0 === Zr ? void 0 : Zr.trim()) && void 0 !== Sr ? Sr : "",
+           Ir = null === ar ? void 0 : (null !== (Wr = Qr.functions) && void 0 !== Wr ? Wr : []).find((rr => rr.name === ar[ar.length - 1])),
```

#### 2454. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27447` → after: `L27447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27447) · [Before (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27447)

```diff
-   }(LR, aR, pR, WR) : null), [OR, LR, aR, pR, WR]), NR = null !== (JR = null === OR || void 0 === OR ? void 0 : OR.code) && void 0 !== JR ? JR : aR, DR = null !== (GR = null !== (tR = null === OR || void 0 === OR ? void 0 : OR.where) && void 0 !== tR ? tR : null === xR || void 0  … [truncated]
+   }(hr, tr, Or, nr) : null), [Pr, hr, tr, Or, nr]), qr = null !== (Sr = null === Pr || void 0 === Pr ? void 0 : Pr.code) && void 0 !== Sr ? Sr : tr, Rr = null !== (Qr = null !== (Wr = null === Pr || void 0 === Pr ? void 0 : Pr.where) && void 0 !== Wr ? Wr : null === Hr || void 0  … [truncated]
```

#### 2455. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27452` → after: `L27452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27452) · [Before (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27452)

```diff
-     const JR = null === HR ? NR : HR.code;
+     const Sr = null === gr ? qr : gr.code;
```

#### 2456. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27456` → after: `L27456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27456) · [Before (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27456)

```diff
-       runnable: null === GR || null === yR ? GR : {
+       runnable: null === Qr || null === Zr ? Qr : {
```

#### 2457. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27462-L27463` → after: `L27462-L27463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27462-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27462-L27463) · [Before (L27462-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27462-L27463)

```diff
-   }), [HR, NR, DR, pR, gR, bR]), PR = null !== (uR = null === oR || void 0 === oR ? void 0 : oR.code) && void 0 !== uR ? uR : null, IR = (0, yR.useMemo)((() => null === (null === oR || void 0 === oR ? void 0 : oR.once) || null === oR ? [] : [oR.once.name]), [oR]), mR = (0, yR.use … [truncated]
-     return !(null === RR || RR.length > mu.t) && Pv(RR).split("\n").some((RR => xv.test(RR) && Hv.test(RR)))
+   }), [gr, qr, Rr, Or, Lr, lr]), Gr = null !== (ar = null === Cr || void 0 === Cr ? void 0 : Cr.code) && void 0 !== ar ? ar : null, kr = (0, Zr.useMemo)((() => null === (null === Cr || void 0 === Cr ? void 0 : Cr.once) || null === Cr ? [] : [Cr.once.name]), [Cr]), Ar = (0, Zr.use … [truncated]
+     return !(null === rr || rr.length > ka.u) && CX(rr).split("\n").some((rr => XX.test(rr) && qX.test(rr)))
```

#### 2458. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27467` → after: `L27467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27467) · [Before (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27467)

```diff
-     const RR = [...kl(null !== NR && void 0 !== NR ? NR : "", FR, !0), ...kl(UR, FR)];
+     const rr = [...ov(null !== qr && void 0 !== qr ? qr : "", Dr, !0), ...ov(Yr, Dr)];
```

#### 2459. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27489` → after: `L27489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27489) · [Before (L27489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27489)

```diff
-       const [, KR, wR, rR] = VR, eR = Uf(wR), aR = null !== (tR = null === eR || void 0 === eR ? void 0 : eR.key) && void 0 !== tR ? tR : wR, LR = `${aR}: ${rR.trim()},`, nR = null === JR || null === (uR = vf.exec(JR)) || void 0 === uR ? void 0 : uR[1];
+       const [, xr, mr, Nr] = pr, Ur = hE(mr), tr = null !== (Wr = null === Ur || void 0 === Ur ? void 0 : Ur.key) && void 0 !== Wr ? Wr : mr, hr = `${tr}: ${Nr.trim()},`, zr = null === Sr || null === (ar = LE.exec(Sr)) || void 0 === ar ? void 0 : ar[1];
```

#### 2460. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27500` → after: `L27500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27500) · [Before (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27500)

```diff
-         code: `${UR[1]} ${wR} = ${rR.trim()}`,
+         code: `${Yr[1]} ${mr} = ${Nr.trim()}`,
```

#### 2461. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27516` → after: `L27516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27516) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27516)

```diff
-         CR = void 0 !== WR && WR.startsWith(`${aR}:`) ? WR : null !== AR && AR[1] === wR ? `${aR}: ${AR[2].trim()},` : null;
+         Kr = void 0 !== nr && nr.startsWith(`${tr}:`) ? nr : null !== er && er[1] === mr ? `${tr}: ${er[2].trim()},` : null;
```

#### 2462. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27519` → after: `L27519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27519) · [Before (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27519)

```diff
-         where: `${yR("Replace the line")} \`${CR}\` ${yR("inside")} \`${eR.object}\``
+         where: `${Zr("Replace the line")} \`${Kr}\` ${Zr("inside")} \`${Ur.object}\``
```

#### 2463. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27522` → after: `L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27522) · [Before (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27522)

```diff
-         where: void 0 === nR ? `${yR("Replace the line starting")} \`${aR}:\` ${yR("inside")} \`${eR.object}\`` : JR
+         where: void 0 === zr ? `${Zr("Replace the line starting")} \`${tr}:\` ${Zr("inside")} \`${Ur.object}\`` : Sr
```

#### 2464. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27533` → after: `L27533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27533) · [Before (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27533)

```diff
-         ZR = null === uR ? void 0 : null !== (GR = JR.get(uR[1])) && void 0 !== GR ? GR : JR.get(null !== (yR = null === (tR = Uf(uR[1])) || void 0 === tR ? void 0 : tR.key) && void 0 !== yR ? yR : ""),
+         jr = null === ar ? void 0 : null !== (Qr = Sr.get(ar[1])) && void 0 !== Qr ? Qr : Sr.get(null !== (Zr = null === (Wr = hE(ar[1])) || void 0 === Wr ? void 0 : Wr.key) && void 0 !== Zr ? Zr : ""),
```

#### 2465. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27543` → after: `L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27543) · [Before (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27543)

```diff
-     if (null !== cR) return null !== (RR = cR.added) && void 0 !== RR ? RR : {
+     if (null !== Mr) return null !== (rr = Mr.added) && void 0 !== rr ? rr : {
```

#### 2466. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27566` → after: `L27566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27566) · [Before (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27566)

```diff
-   }), [cR, oR, PR, DR, pR, IR]), tJ = null === JJ ? hR : 0 === yJ.top.length ? XR("Paste at the bottom of your World Code") : yJ.join.length > 0 ? XR("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === yJ.top.length ? XR("Paste the line abov … [truncated]
+   }), [Mr, Cr, Gr, Rr, Or, kr]), WS = null === SS ? ur : 0 === ZS.top.length ? yr("Paste at the bottom of your World Code") : ZS.join.length > 0 ? yr("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === ZS.top.length ? yr("Paste the line abov … [truncated]
```

#### 2467. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27568-L27569` → after: `L27568-L27569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27568-L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27568-L27569) · [Before (L27568-L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27568-L27569)

```diff
-     return null === JJ ? RR : RR.filter((RR => !JJ.params.includes(RR)))
-   }), [cR, PR, DR, pR, IR, JJ]), ZJ = null === dR && null === ER && 0 === kR.length && 0 === YR.length && (null !== cR || 0 === uJ.length) && !SR, qJ = ZJ && (null === (null === oR || void 0 === oR ? void 0 : oR.once) || null !== (null === oR || void 0 === oR ? void 0 : oR.loopNa … [truncated]
+     return null === SS ? rr : rr.filter((rr => !SS.params.includes(rr)))
+   }), [Mr, Gr, Rr, Or, kr, SS]), jS = null === cr && null === Fr && 0 === br.length && 0 === or.length && (null !== Mr || 0 === aS.length) && !ir, IS = jS && (null === (null === Cr || void 0 === Cr ? void 0 : Cr.once) || null !== (null === Cr || void 0 === Cr ? void 0 : Cr.loopNa … [truncated]
```

#### 2468. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27576` → after: `L27576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27576) · [Before (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27576)

```diff
-       return `${RR.slice(0,uR)}${JR.test} && ${yR.cond}${RR.slice(uR+yR.cond.length)}`
+       return `${rr.slice(0,ar)}${Sr.test} && ${Zr.cond}${rr.slice(ar+Zr.cond.length)}`
```

#### 2469. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27580` → after: `L27580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27580) · [Before (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27580)

```diff
-     return null === uR || /^(?:const|let|var|class|function)\b/.test(uR) || /;\s*\S/.test(YM(uR)) ? [`if (${JR.test}) {`, ...tR.map((RR => `  ${RR}`)), "}"].join("\n") : `if (${JR.test}) ${uR}`
+     return null === ar || /^(?:const|let|var|class|function)\b/.test(ar) || /;\s*\S/.test(FB(ar)) ? [`if (${Sr.test}) {`, ...Wr.map((rr => `  ${rr}`)), "}"].join("\n") : `if (${Sr.test}) ${ar}`
```

#### 2470. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27588` → after: `L27588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27588) · [Before (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27588)

```diff
-   }(iJ.after, fJ) : VJ ? null : qJ && null === JJ ? Tv(ap(sR, hR, pR, UR), UR, pR) : null), [iJ, fJ, VJ, qJ, JJ, sR, hR, pR, UR]), wJ = null !== (ZR = null === cR || void 0 === cR ? void 0 : cR.added) && void 0 !== ZR ? ZR : null, rJ = (0, yR.useMemo)((() => null === wJ ? null :  … [truncated]
+   }(fS.after, ES) : pS ? null : IS && null === SS ? JX(NO(sr, ur, Or, Yr), Yr, Or) : null), [fS, ES, pS, IS, SS, sr, ur, Or, Yr]), mS = null !== (jr = null === Mr || void 0 === Mr ? void 0 : Mr.added) && void 0 !== jr ? jr : null, NS = (0, Zr.useMemo)((() => null === mS ? null :  … [truncated]
```

#### 2471. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27599` → after: `L27599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27599) · [Before (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27599)

```diff
-     ["leftOut", (null !== (qR = null === HR || void 0 === HR ? void 0 : HR.leftOut.length) && void 0 !== qR ? qR : 0) > 0],
+     ["leftOut", (null !== (Ir = null === gr || void 0 === gr ? void 0 : gr.leftOut.length) && void 0 !== Ir ? Ir : 0) > 0],
```

#### 2472. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27605` → after: `L27605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27605) · [Before (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27605)

```diff
-   }))) || void 0 === fR ? void 0 : fR[0]) && void 0 !== iR ? iR : null, aJ = RR => !gR || eJ === RR, LJ = aJ("leftOut") ? pd(null !== (VR = null === HR || void 0 === HR ? void 0 : HR.leftOut) && void 0 !== VR ? VR : [], gR) : [], nJ = (0, yR.useMemo)((() => null !== iJ ? {
+   }))) || void 0 === Er ? void 0 : Er[0]) && void 0 !== fr ? fr : null, tS = rr => !Lr || US === rr, hS = tS("leftOut") ? Bc(null !== (pr = null === gr || void 0 === gr ? void 0 : gr.leftOut) && void 0 !== pr ? pr : [], Lr) : [], zS = (0, Zr.useMemo)((() => null !== fS ? {
```

#### 2473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27612` → after: `L27612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27612) · [Before (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27612)

```diff
-     if ((null !== (yR = JR.match(/\([^()]*\)/g)) && void 0 !== yR ? yR : []).some((RR => !Xx.test(RR))) || Cx.test(JR) || ep(RR)) return null;
+     if ((null !== (Zr = Sr.match(/\([^()]*\)/g)) && void 0 !== Zr ? Zr : []).some((rr => !eH.test(rr))) || nH.test(Sr) || mO(rr)) return null;
```

#### 2474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27617` → after: `L27617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27617) · [Before (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27617)

```diff
-     return (0, zu.d)(ZR, /return(?![\w$])/, zu.n).length > 0 || tR.body.locals.some((RR => Tr(ZR, RR) && !Fr(ZR, RR))) ? null : {
+     return (0, Aa.e)(jr, /return(?![\w$])/, Aa.o).length > 0 || Wr.body.locals.some((rr => JN(jr, rr) && !bN(jr, rr))) ? null : {
```

#### 2475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27623-L27624` → after: `L27623-L27624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27623-L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27623-L27624) · [Before (L27623-L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27623-L27624)

```diff
-     const JR = RR === hR ? nJ : null,
-       GR = RR === hR && null !== xR && hR === xR.name ? xR : null;
+     const Sr = rr === ur ? zS : null,
+       Qr = rr === ur && null !== Hr && ur === Hr.name ? Hr : null;
```

#### 2476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27639` → after: `L27639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27639) · [Before (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27639)

```diff
-           title: `${JR.after.source}, ${XR("line")} ${JR.after.line}: ${JR.after.text}`,
+           title: `${Sr.after.source}, ${yr("line")} ${Sr.after.line}: ${Sr.after.text}`,
```

#### 2477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27665` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27665) · [Before (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27665)

```diff
-           children: [(0, vR.jsx)(AR.d, {
+           children: [(0, Xr.jsx)(er.c, {
```

#### 2478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27670` → after: `L27670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27670) · [Before (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27670)

```diff
-           code: null !== (KR = null !== (wR = null === JJ || void 0 === JJ ? void 0 : JJ.code) && void 0 !== wR ? wR : fJ) && void 0 !== KR ? KR : sR,
+           code: null !== (xr = null !== (mr = null === SS || void 0 === SS ? void 0 : SS.code) && void 0 !== mr ? mr : ES) && void 0 !== xr ? xr : sr,
```

#### 2479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27675` → after: `L27675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27675) · [Before (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27675)

```diff
-           children: bj(null !== (rR = null !== (eR = null === JJ || void 0 === JJ ? void 0 : JJ.code) && void 0 !== eR ? eR : fJ) && void 0 !== rR ? rR : sR, "next-change-code", CR, "pasteCode")
+           children: Ow(null !== (Nr = null !== (Ur = null === SS || void 0 === SS ? void 0 : SS.code) && void 0 !== Ur ? Ur : ES) && void 0 !== Nr ? Nr : sr, "next-change-code", Kr, "pasteCode")
```

#### 2480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27714` → after: `L27714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27714) · [Before (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27714)

```diff
-         }), "):", " ", null === mR.line ? `"${mR.text}"` : (0, vR.jsx)("code", {
+         }), "):", " ", null === Ar.line ? `"${Ar.text}"` : (0, Xr.jsx)("code", {
```

#### 2481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27797` → after: `L27797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27797) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27797)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27815` → after: `L27815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27815) · [Before (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27815)

```diff
-       children: [tR > 0 && (tR === JR.length - 1 ? ` ${GR("and")} ` : ", "), (0, vR.jsx)("code", {
+       children: [Wr > 0 && (Wr === Sr.length - 1 ? ` ${Qr("and")} ` : ", "), (0, Xr.jsx)("code", {
```

#### 2483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27824` → after: `L27824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27824) · [Before (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27824)

```diff
-   return RR.length <= 1 ? null !== (GR = RR[0]) && void 0 !== GR ? GR : "" : `${RR.slice(0,-1).join(", ")} ${JR("and")} ${RR[RR.length-1]}`
+   return rr.length <= 1 ? null !== (Qr = rr[0]) && void 0 !== Qr ? Qr : "" : `${rr.slice(0,-1).join(", ")} ${Sr("and")} ${rr[rr.length-1]}`
```

#### 2484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27837` → after: `L27837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27837) · [Before (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27837)

```diff
-       children: "gives" === JR.kind ? `${yR("You already give")} ${bd(JR.items,yR)}.` : yR(RR ? "You already have this welcome message." : "You already have this message.")
+       children: "gives" === Sr.kind ? `${Zr("You already give")} ${vc(Sr.items,Zr)}.` : Zr(rr ? "You already have this welcome message." : "You already have this message.")
```

#### 2485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27849` → after: `L27849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27849) · [Before (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27849)

```diff
-       }), "): ", null === JR.line ? `"${JR.text}"` : (0, vR.jsx)("code", {
+       }), "): ", null === Sr.line ? `"${Sr.text}"` : (0, Xr.jsx)("code", {
```

#### 2486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27865` → after: `L27865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27865) · [Before (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27865)

```diff
-       children: `api.${JR}`
+       children: `api.${Sr}`
```

#### 2487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27880` → after: `L27880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27880) · [Before (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27880)

```diff
-       children: `const ${JR} = ${GR}`
+       children: `const ${Sr} = ${Qr}`
```

#### 2488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27907` → after: `L27907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27907) · [Before (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27907)

```diff
-     of null !== (KR = null === GR || void 0 === GR ? void 0 : GR.renames) && void 0 !== KR ? KR : []) {
+     of null !== (xr = null === Qr || void 0 === Qr ? void 0 : Qr.renames) && void 0 !== xr ? xr : []) {
```

#### 2489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27913` → after: `L27913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27913) · [Before (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27913)

```diff
-     }, `young-${wR}`))
+     }, `young-${mr}`))
```

#### 2490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27931` → after: `L27931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27931) · [Before (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27931)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27942` → after: `L27942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27942) · [Before (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27942)

```diff
-   return 1 === GR.length ? `${JR("line")} ${GR[0]}` : `${JR("lines")} ${bd(GR.map(String),JR)}`
+   return 1 === Qr.length ? `${Sr("line")} ${Qr[0]}` : `${Sr("lines")} ${vc(Qr.map(String),Sr)}`
```

#### 2492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27958` → after: `L27958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L27958) · [Before (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L27958)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28021` → after: `L28021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28021) · [Before (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28021)

```diff
-     }), " ", yR ? ZR : qR]
+     }), " ", Zr ? jr : Ir]
```

#### 2494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28054` → after: `L28054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28054) · [Before (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28054)

```diff
-         children: [(0, vR.jsx)(AR.d, {
+         children: [(0, Xr.jsx)(er.c, {
```

#### 2495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28100` → after: `L28100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28100) · [Before (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28100)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28144` → after: `L28144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28144) · [Before (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28144)

```diff
-         children: "insert" === JR.kind ? `  ${RR}` : RR
+         children: "insert" === Sr.kind ? `  ${rr}` : rr
```

#### 2497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28146` → after: `L28146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28146) · [Before (L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28146)

```diff
-     }, `added-${GR}`))), "insert" === JR.kind && JR.next.map(((RR, JR) => (0, vR.jsxs)("span", {
+     }, `added-${Qr}`))), "insert" === Sr.kind && Sr.next.map(((rr, Sr) => (0, Xr.jsxs)("span", {
```

#### 2498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28152` → after: `L28152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28152) · [Before (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28152)

```diff
-         children: `  ${RR}`
+         children: `  ${rr}`
```

#### 2499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28154` → after: `L28154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28154) · [Before (L28154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28154)

```diff
-     }, `next-${JR}`))), "insert" === JR.kind && JR.next.length >= Id && (0, vR.jsxs)("span", {
+     }, `next-${Sr}`))), "insert" === Sr.kind && Sr.next.length >= Cc && (0, Xr.jsxs)("span", {
```

#### 2500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28186` → after: `L28186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28186) · [Before (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28186)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28246` → after: `L28246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28246) · [Before (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28246)

```diff
-   return [RR, ...JR.map((RR => "string" === typeof RR ? RR : "code" in RR ? RR.code : ""))].join(" ")
+   return [rr, ...Sr.map((rr => "string" === typeof rr ? rr : "code" in rr ? rr.code : ""))].join(" ")
```

#### 2502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28259` → after: `L28259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28259) · [Before (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28259)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28262` → after: `L28262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28262) · [Before (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28262)

```diff
-     }), tR("Your events"), (0, vR.jsx)(AR.d, {
+     }), Wr("Your events"), (0, Xr.jsx)(er.c, {
```

#### 2504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28270` → after: `L28270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28270) · [Before (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28270)

```diff
-     return void 0 === yR ? null : `${JR("Only")} ${(0,mu.l)(yR)} ${JR("players this week, so these are hints.")}`
+     return void 0 === Zr ? null : `${Sr("Only")} ${(0,ka.k)(Zr)} ${Sr("players this week, so these are hints.")}`
```

#### 2505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28280` → after: `L28280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28280) · [Before (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28280)

```diff
-         ZR = "spot" === uR.kind && yr(RR.eventType) && "" !== uR.value ? `${RR.eventType}: ${uR.value}` : null,
+         jr = "spot" === ar.kind && SN(rr.eventType) && "" !== ar.value ? `${rr.eventType}: ${ar.value}` : null,
```

#### 2506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28322` → after: `L28322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28322) · [Before (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28322)

```diff
-       missing: `${tR("Want to see what players do? Add one tracking line: see")} "${null!==yR&&void 0!==yR?yR:""}" ${tR("below.")}`,
+       missing: `${Wr("Want to see what players do? Add one tracking line: see")} "${null!==Zr&&void 0!==Zr?Zr:""}" ${Wr("below.")}`,
```

#### 2507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28331` → after: `L28331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28331) · [Before (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28331)

```diff
-       const RR = uR.days < 7 ? ` (${uR.days} ${1===uR.days?tR("day"):tR("days")})` : "",
+       const rr = ar.days < 7 ? ` (${ar.days} ${1===ar.days?Wr("day"):Wr("days")})` : "",
```

#### 2508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28333` → after: `L28333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28333) · [Before (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28333)

```diff
-       ZR = 0 === uR.players ? tR("No players this week, so treat the reasons below as guesses.") : `${tR("Only")} ${uR.players} ${JR}${RR}: ${tR("too few to tell why people leave, so treat the reasons below as guesses.")}`, qR = uR.eventTypes
+       jr = 0 === ar.players ? Wr("No players this week, so treat the reasons below as guesses.") : `${Wr("Only")} ${ar.players} ${Sr}${rr}: ${Wr("too few to tell why people leave, so treat the reasons below as guesses.")}`, Ir = ar.eventTypes
```

#### 2509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28336` → after: `L28336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28336) · [Before (L28336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28336)

```diff
-     0 === JR.length && qR.length > 0 ? iR = [`${tR("You already log")} `, ...HX(qR.slice(0, oX), tR), `: ${tR("they will say more as players come.")}`] : 0 === JR.length && null !== yR && (iR = [`${tR("Start with the line under")} "${yR}" ${tR("below.")}`]);
+     0 === Sr.length && Ir.length > 0 ? fr = [`${Wr("You already log")} `, ...Ry(Ir.slice(0, gy), Wr), `: ${Wr("they will say more as players come.")}`] : 0 === Sr.length && null !== Zr && (fr = [`${Wr("Start with the line under")} "${Zr}" ${Wr("below.")}`]);
```

#### 2510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28338` → after: `L28338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28338) · [Before (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28338)

```diff
-     return JR.length > 0 ? fR = [`${tR("Studio shows each one after about")} ${wX} ${tR("players send it")}: `, {
+     return Sr.length > 0 ? Er = [`${Wr("Studio shows each one after about")} ${xy} ${Wr("players send it")}: `, {
```

#### 2511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28340` → after: `L28340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28340) · [Before (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28340)

```diff
-     }] : "fewPlayers" === uR.kind && (fR = [`${tR("Studio can say why players leave after about")} ${KX} ${tR("players a week")}: `, {
+     }] : "fewPlayers" === ar.kind && (Er = [`${Wr("Studio can say why players leave after about")} ${py} ${Wr("players a week")}: `, {
```

#### 2512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28353` → after: `L28353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28353) · [Before (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28353)

```diff
-   }), rR = `${GR.length} ${1===GR.length?qR("event to log"):qR("events to log")}`;
+   }), Nr = `${Qr.length} ${1===Qr.length?Ir("event to log"):Ir("events to log")}`;
```

#### 2513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28360` → after: `L28360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28360) · [Before (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28360)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28375` → after: `L28375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28375) · [Before (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28375)

```diff
-     }), 0 === GR.length ? wR : (0, vR.jsxs)("details", {
+     }), 0 === Qr.length ? mr : (0, Xr.jsxs)("details", {
```

#### 2515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28378` → after: `L28378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28378) · [Before (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28378)

```diff
-         children: [(0, vR.jsx)(AR.d, {
+         children: [(0, Xr.jsx)(er.c, {
```

#### 2516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28432` → after: `L28432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28432) · [Before (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28432)

```diff
-               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${RR.verdict}`,
+               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${rr.verdict}`,
```

#### 2517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28444` → after: `L28444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28444) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28444)

```diff
-         className: `StudioAiJourneyStep StudioAiJourneyStep-${RR.verdict}`,
+         className: `StudioAiJourneyStep StudioAiJourneyStep-${rr.verdict}`,
```

#### 2518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28480` → after: `L28480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28480) · [Before (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28480)

```diff
-     children: [(0, vR.jsx)(AR.d, {
+     children: [(0, Xr.jsx)(er.c, {
```

#### 2519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28531` → after: `L28531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28531) · [Before (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28531)

```diff
-   } = (0, rR.A)(), [HR, oR] = (0, yR.useState)(null), cR = null !== WR && bv(qR);
+   } = (0, Nr.E)(), [gr, Cr] = (0, Zr.useState)(null), Mr = null !== nr && OX(Ir);
```

#### 2520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28548` → after: `L28548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28548) · [Before (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28548)

```diff
-     zR = (0, yR.useMemo)((() => jB(qR, null !== LR && void 0 !== LR ? LR : new Set)), [qR, LR]);
+     Vr = (0, Zr.useMemo)((() => iT(Ir, null !== hr && void 0 !== hr ? hr : new Set)), [Ir, hr]);
```

#### 2521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28567` → after: `L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28567) · [Before (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28567)

```diff
-       journey: null !== wR && void 0 !== wR ? wR : null,
+       journey: null !== mr && void 0 !== mr ? mr : null,
```

#### 2522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28594` → after: `L28594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28594) · [Before (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28594)

```diff
-       isCodeInPlaceOpen: null === XR ? !0 === aR : lL(XR),
+       isCodeInPlaceOpen: null === yr ? !0 === tr : Th(yr),
```

#### 2523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28608` → after: `L28608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28608) · [Before (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28608)

```diff
-     RR.length > 0 && console.info(`The Studio AI answer cited ${RR.length} statistics Studio doesn't have, which are left out`, RR)
+     rr.length > 0 && console.info(`The Studio AI answer cited ${rr.length} statistics Studio doesn't have, which are left out`, rr)
```

#### 2524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28612` → after: `L28612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28612) · [Before (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28612)

```diff
-       children: 1 === ER ? DR("Studio left out 1 idea that doesn't fit your game.") : `${DR("Studio left out")} ${ER} ${DR("ideas that don't fit your game")}.`
+       children: 1 === Fr ? Rr("Studio left out 1 idea that doesn't fit your game.") : `${Rr("Studio left out")} ${Fr} ${Rr("ideas that don't fit your game")}.`
```

#### 2525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28616` → after: `L28616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28616) · [Before (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28616)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28621` → after: `L28621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28621) · [Before (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28621)

```diff
-     hR = null !== (JR = null !== aR && void 0 !== aR ? aR : null === jR || void 0 === jR ? void 0 : jR.sections.some((RR => "fixFirst" === RR.key && RR.heading === vV("fixFirst", !0)))) && void 0 !== JR && JR,
+     ur = null !== (Sr = null !== tr && void 0 !== tr ? tr : null === wr || void 0 === wr ? void 0 : wr.sections.some((rr => "fixFirst" === rr.key && rr.heading === Op("fixFirst", !0)))) && void 0 !== Sr && Sr,
```

#### 2527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28628` → after: `L28628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28628) · [Before (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28628)

```diff
-     GJ = RR => 0 === Xe(RR).length ? RR : Me(RR),
+     QS = rr => 0 === eU(rr).length ? rr : KU(rr),
```

#### 2528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28631` → after: `L28631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28631) · [Before (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28631)

```diff
-     uJ = null !== (GR = null === tJ || void 0 === tJ ? void 0 : tJ.nextChange) && void 0 !== GR ? GR : null,
+     aS = null !== (Qr = null === WS || void 0 === WS ? void 0 : WS.nextChange) && void 0 !== Qr ? Qr : null,
```

#### 2529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28644` → after: `L28644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28644) · [Before (L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28644)

```diff
-   const qJ = null !== eR && void 0 !== eR ? eR : [],
+   const IS = null !== Ur && void 0 !== Ur ? Ur : [],
```

#### 2530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28646` → after: `L28646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28646) · [Before (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28646)

```diff
-     fJ = null !== dR && void 0 !== dR ? dR : jR,
+     ES = null !== cr && void 0 !== cr ? cr : wr,
```

#### 2531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28648` → after: `L28648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28648) · [Before (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28648)

```diff
-     KJ = void 0 === VJ || VJ === yJ ? tJ : wU(GJ(VJ.markdown)),
+     xS = void 0 === pS || pS === ZS ? WS : fY(QS(pS.markdown)),
```

#### 2532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28650` → after: `L28650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28650) · [Before (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28650)

```diff
-     rJ = null !== (tR = null === KJ || void 0 === KJ ? void 0 : KJ.nextChange) && void 0 !== tR ? tR : uJ,
+     NS = null !== (Wr = null === xS || void 0 === xS ? void 0 : xS.nextChange) && void 0 !== Wr ? Wr : aS,
```

#### 2533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28655` → after: `L28655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28655) · [Before (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28655)

```diff
-     aJ = null === BR ? [] : YC(BR, Hp(`${jR.summary}\n${null!==(uR=null===yJ||void 0===yJ?void 0:yJ.markdown)&&void 0!==uR?uR:""}`), XR),
+     tS = null === Tr ? [] : FK(Tr, qO(`${wr.summary}\n${null!==(ar=null===ZS||void 0===ZS?void 0:ZS.markdown)&&void 0!==ar?ar:""}`), yr),
```

#### 2534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28666` → after: `L28666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28666) · [Before (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28666)

```diff
-     }(null !== BR && void 0 !== BR ? BR : [], null !== lR && void 0 !== lR ? lR : [], aJ, Hp(LJ)) : [],
+     }(null !== Tr && void 0 !== Tr ? Tr : [], null !== vr && void 0 !== vr ? vr : [], tS, qO(hS)) : [],
```

#### 2535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28674` → after: `L28674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28674) · [Before (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28674)

```diff
-     WJ = null === OR ? [] : yM(OR, [...aJ, ...nJ], `${LJ}\n${function(RR,JR,GR,yR,tR,uR){if(null===RR||null===JR||!uR.isOlder)return"";const ZR=dA(RR,JR,GR,uR.constantLines),qR=null===ZR?null:ev(ZR,JR,yR);return null===qR?"":dd("",Wv(qR,uR.t,tR))}(uJ,CR,KR,gR,qR,FR)}`, XR),
+     nS = null === Pr ? [] : QB(Pr, [...tS, ...zS], `${hS}\n${function(rr,Sr,Qr,Zr,Wr,ar){if(null===rr||null===Sr||!ar.isOlder)return"";const jr=we(rr,Sr,Qr,ar.constantLines),Ir=null===jr?null:mX(jr,Sr,Zr);return null===Ir?"":Vc("",zX(Ir,ar.t,Wr))}(aS,Kr,xr,Lr,Ir,Dr)}`, yr),
```

#### 2536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28680-L28681` → after: `L28680-L28681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28680-L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28680-L28681) · [Before (L28680-L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28680-L28681)

```diff
-         uR = new RegExp(`(?:${(0,mu.l)(RR.players)}|${Math.round(RR.players)})(?![\\d]|[,.]\\d|\\s*%)`),
-         ZR = (0, zu.d)(JR, uR, (0, zu.k)("\\d,.")).length > 0;
+         ar = new RegExp(`(?:${(0,ka.k)(rr.players)}|${Math.round(rr.players)})(?![\\d]|[,.]\\d|\\s*%)`),
+         jr = (0, Aa.e)(Sr, ar, (0, Aa.k)("\\d,.")).length > 0;
```

#### 2537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28689` → after: `L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28689) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28689)

```diff
-         tR = (0, mu.l)(RR.players);
+         Wr = (0, ka.k)(rr.players);
```

#### 2538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28691` → after: `L28691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28691) · [Before (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28691)

```diff
-         parts: [`${GR("Of the")} ${(0,mu.l)(RR.fromPlayers)} ${GR("players who got to")} ${RR.step}, ${tR} ${GR("later had")} `, {
+         parts: [`${Qr("Of the")} ${(0,ka.k)(rr.fromPlayers)} ${Qr("players who got to")} ${rr.step}, ${Wr} ${Qr("later had")} `, {
```

#### 2539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28693` → after: `L28693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28693) · [Before (L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28693)

```diff
-         }, ` ${GR("this week")} `, yR]
+         }, ` ${Qr("this week")} `, Zr]
```

#### 2540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28697` → after: `L28697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28697) · [Before (L28697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28697)

```diff
-         parts: [`${GR("Of the")} ${(0,mu.l)(RR.fromPlayers)} ${GR("players who reached")} ${RR.step}, ${tR} ${GR("later had")} `, {
+         parts: [`${Qr("Of the")} ${(0,ka.k)(rr.fromPlayers)} ${Qr("players who reached")} ${rr.step}, ${Wr} ${Qr("later had")} `, {
```

#### 2541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28699` → after: `L28699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28699) · [Before (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28699)

```diff
-         }, ` (${uR}%, ${GR("past week")}) `, yR]
+         }, ` (${ar}%, ${Qr("past week")}) `, Zr]
```

#### 2542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28707` → after: `L28707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28707) · [Before (L28707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28707)

```diff
-     BJ = [...UJ, ...(null !== (ZR = null === AJ || void 0 === AJ ? void 0 : AJ.rows) && void 0 !== ZR ? ZR : []).map((RR => {
+     TS = [...YS, ...(null !== (jr = null === eS || void 0 === eS ? void 0 : eS.rows) && void 0 !== jr ? jr : []).map((rr => {
```

#### 2543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28719` → after: `L28719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28719) · [Before (L28719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28719)

```diff
-       return yR.slice(0, "young" === GR ? eM : rM)
+       return Zr.slice(0, "young" === Qr ? NB : mB)
```

#### 2544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28742` → after: `L28742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28742) · [Before (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28742)

```diff
-       return null !== (GR = RR.find((RR => !yR.includes(RR.eventType) && !Xn(RR, JR)))) && void 0 !== GR ? GR : null
+       return null !== (Qr = rr.find((rr => !Zr.includes(rr.eventType) && !ez(rr, Sr)))) && void 0 !== Qr ? Qr : null
```

#### 2545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28756-L28757` → after: `L28756-L28757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28756-L28757) · [Before (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28756-L28757)

```diff
-           const JR = [`${(0,mu.c)(RR.said)} ${GR("in your description")}`],
-             qR = null === ZR.category ? "" : ` ${GR("in")} ${ZR.category}`;
+           const Sr = [`${(0,ka.b)(rr.said)} ${Qr("in your description")}`],
+             Ir = null === jr.category ? "" : ` ${Qr("in")} ${jr.category}`;
```

#### 2546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28760` → after: `L28760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28760) · [Before (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28760)

```diff
-             parts: [`${(0,mu.l)(ZR.players)} ${GR("players got to")} ${ZR.step} ${uR}, ${GR("of")} ${(0,mu.l)(ZR.first.players)} ${GR("who got to")} ${ZR.first.name}${qR} `, tR]
+             parts: [`${(0,ka.k)(jr.players)} ${Qr("players got to")} ${jr.step} ${ar}, ${Qr("of")} ${(0,ka.k)(jr.first.players)} ${Qr("who got to")} ${jr.first.name}${Ir} `, Wr]
```

#### 2547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28762` → after: `L28762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28762) · [Before (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28762)

```diff
-           const iR = null === ZR.before ? "" : `, ${(0,mu.l)(ZR.before.players)} \u2192 ${(0,mu.l)(ZR.players)} ${GR("from")} ${ZR.before.name}`;
+           const fr = null === jr.before ? "" : `, ${(0,ka.k)(jr.before.players)} \u2192 ${(0,ka.k)(jr.players)} ${Qr("from")} ${jr.before.name}`;
```

#### 2548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28765` → after: `L28765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28765) · [Before (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28765)

```diff
-             parts: [`${(0,mu.l)(ZR.players)} ${GR("of the")} ${(0,mu.l)(ZR.first.players)} ${GR("players who reached")} ${ZR.first.name} ${GR("got to")} ${ZR.step}${iR}${qR} (${uR}) `, tR]
+             parts: [`${(0,ka.k)(jr.players)} ${Qr("of the")} ${(0,ka.k)(jr.first.players)} ${Qr("players who reached")} ${jr.first.name} ${Qr("got to")} ${jr.step}${fr}${Ir} (${ar}) `, Wr]
```

#### 2549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28769` → after: `L28769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28769) · [Before (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28769)

```diff
-           const JR = "" === ZR.category ? "" : ` ${GR("in")} ${ZR.category}`,
+           const Sr = "" === jr.category ? "" : ` ${Qr("in")} ${jr.category}`,
```

#### 2550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28772-L28774` → after: `L28772-L28774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28772-L28774) · [Before (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28772-L28774)

```diff
-             label: [`${(0,mu.c)((0,mu.H)(ZR.death))} ${GR("in your description")}`],
-             parts: [`${(0,mu.l)(ZR.count)} ${GR("of the")} ${(0,mu.l)(ZR.total)} ${GR("deaths")}${JR} ${uR} ${GR("were")} `, {
-               code: `${RR.eventType}: ${ZR.death}`
+             label: [`${(0,ka.b)((0,ka.K)(jr.death))} ${Qr("in your description")}`],
+             parts: [`${(0,ka.k)(jr.count)} ${Qr("of the")} ${(0,ka.k)(jr.total)} ${Qr("deaths")}${Sr} ${ar} ${Qr("were")} `, {
+               code: `${rr.eventType}: ${jr.death}`
```

#### 2551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28779` → after: `L28779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28779) · [Before (L28779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28779)

```diff
-           const JR = [`${(0,mu.c)(RR.saidAll.join(` ${GR("and")} `))} ${GR("in your description")}`],
+           const Sr = [`${(0,ka.b)(rr.saidAll.join(` ${Qr("and")} `))} ${Qr("in your description")}`],
```

#### 2552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28785` → after: `L28785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28785) · [Before (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28785)

```diff
-               return `${""===uR?RR.eventType:uR}: ${(0,mu.l)(ZR)}${0===tR||yR?` ${GR("players")}`:""}`
+               return `${""===ar?rr.eventType:ar}: ${(0,ka.k)(jr)}${0===Wr||Zr?` ${Qr("players")}`:""}`
```

#### 2553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28791` → after: `L28791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28791) · [Before (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28791)

```diff
-             } = ZR.values[0], fR = yR ? `${(0,mu.l)(iR)} ${GR("players so far")}` : `${(0,mu.l)(iR)} ${GR("players sent it")} ${uR}`, VR = "" === qR ? RR.eventType : `${RR.eventType}: ${qR}`;
+             } = jr.values[0], Er = Zr ? `${(0,ka.k)(fr)} ${Qr("players so far")}` : `${(0,ka.k)(fr)} ${Qr("players sent it")} ${ar}`, pr = "" === Ir ? rr.eventType : `${rr.eventType}: ${Ir}`;
```

#### 2554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28794` → after: `L28794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28794) · [Before (L28794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28794)

```diff
-               parts: [`${GR("your")} `, {
+               parts: [`${Qr("your")} `, {
```

#### 2555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28796` → after: `L28796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28796) · [Before (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28796)

```diff
-               }, ` ${GR("event")}: ${fR} `, tR]
+               }, ` ${Qr("event")}: ${Er} `, Wr]
```

#### 2556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28801` → after: `L28801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28801) · [Before (L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28801)

```diff
-             parts: [`${GR("your")} `, {
+             parts: [`${Qr("your")} `, {
```

#### 2557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28803` → after: `L28803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28803) · [Before (L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28803)

```diff
-             }, ` ${GR("event")}: ${qR.join(", ")} (${uR}) `, tR]
+             }, ` ${Qr("event")}: ${Ir.join(", ")} (${ar}) `, Wr]
```

#### 2558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28826` → after: `L28826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28826) · [Before (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28826)

```diff
-       return "young" !== yR && ("noEvents" === RR.thin.kind ? JR.length > 0 || GR : "medium" !== yR)
+       return "young" !== Zr && ("noEvents" === rr.thin.kind ? Sr.length > 0 || Qr : "medium" !== Zr)
```

#### 2559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28840` → after: `L28840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28840) · [Before (L28840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28840)

```diff
-         className: `StudioAiAnswerSection StudioAiAnswerSection-${RR.key}`,
+         className: `StudioAiAnswerSection StudioAiAnswerSection-${rr.key}`,
```

#### 2560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28886` → after: `L28886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28886) · [Before (L28886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28886)

```diff
-     }(uJ, (0, En.A)(GJ(EJ.markdown))) : null;
+     }(aS, (0, Vz.v)(QS(FS.markdown))) : null;
```

#### 2561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28895` → after: `L28895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28895) · [Before (L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28895)

```diff
-       const RR = AO((0, En.A)(GJ(yR.markdown)));
+       const rr = YP((0, Vz.v)(QS(Zr.markdown)));
```

#### 2562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28907` → after: `L28907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28907) · [Before (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28907)

```diff
-         then: null !== (FJ = null === YJ || void 0 === YJ ? void 0 : YJ.idea) && void 0 !== FJ ? FJ : null,
+         then: null !== (DS = null === oS || void 0 === oS ? void 0 : oS.idea) && void 0 !== DS ? DS : null,
```

#### 2563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28909-L28910` → after: `L28909-L28910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28909-L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28909-L28910) · [Before (L28909-L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28909-L28910)

```diff
-       }, null !== RJ && void 0 !== RJ ? RJ : ""), null !== wJ && void 0 !== wJ ? wJ : tJ.rest)
-     } else IJ && "tryNext" === yR.key ? dJ(yR, null, (0, En.A)(GJ(yR.markdown)), null === YJ) : jJ(mJ(yR, fd(GJ(yR.markdown), FR)));
+       }, null !== rS && void 0 !== rS ? rS : ""), null !== mS && void 0 !== mS ? mS : WS.rest)
+     } else kS && "tryNext" === Zr.key ? cS(Zr, null, (0, Vz.v)(QS(Zr.markdown)), null === oS) : wS(AS(Zr, Ic(QS(Zr.markdown), Dr)));
```

#### 2564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28925` → after: `L28925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28925) · [Before (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28925)

```diff
-           children: [(0, vR.jsx)(AR.d, {
+           children: [(0, Xr.jsx)(er.c, {
```

#### 2565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28944` → after: `L28944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28944) · [Before (L28944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28944)

```diff
-       children: [(0, vR.jsx)(AR.d, {
+       children: [(0, Xr.jsx)(er.c, {
```

#### 2566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28967` → after: `L28967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28967) · [Before (L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28967)

```diff
-       return jB(JR, null !== (GR = RR.codeNames) && void 0 !== GR ? GR : new Set)
+       return iT(Sr, null !== (Qr = rr.codeNames) && void 0 !== Qr ? Qr : new Set)
```

#### 2567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28979` → after: `L28979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28979) · [Before (L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28979)

```diff
-   return JR.length > GE ? `${JR.slice(0,GE).join(" ")}\u2026` : JR.join(" ")
+   return Sr.length > uc ? `${Sr.slice(0,uc).join(" ")}\u2026` : Sr.join(" ")
```

#### 2568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28992` → after: `L28992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28992) · [Before (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28992)

```diff
-   const yR = uE(null !== (GR = RR.split("\n")[0]) && void 0 !== GR ? GR : ""),
+   const Zr = QF(null !== (Qr = rr.split("\n")[0]) && void 0 !== Qr ? Qr : ""),
```

#### 2569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28999` → after: `L28999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L28999) · [Before (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L28999)

```diff
-   return -1 === yR ? RR : `${RR} ${yR+1}`
+   return -1 === Zr ? rr : `${rr} ${Zr+1}`
```

#### 2570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29004-L29005` → after: `L29004-L29005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29004-L29005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29004-L29005) · [Before (L29004-L29005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29004-L29005)

```diff
-   const GR = RR.map((RR => `"${RR}"`));
-   return GR.length <= 1 ? null !== (JR = GR[0]) && void 0 !== JR ? JR : "" : `${GR.slice(0,-1).join(", ")} and ${GR[GR.length-1]}`
+   const Qr = rr.map((rr => `"${rr}"`));
+   return Qr.length <= 1 ? null !== (Sr = Qr[0]) && void 0 !== Sr ? Sr : "" : `${Qr.slice(0,-1).join(", ")} and ${Qr[Qr.length-1]}`
```

#### 2571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29028` → after: `L29028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29028) · [Before (L29028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29028)

```diff
-     return GR ? yR : RR
+     return Qr ? Zr : rr
```

#### 2572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29031` → after: `L29031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29031) · [Before (L29031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29031)

```diff
-     const RR = "direction" === nR.kind ? `Change \`${nR.name}\` the other way, or pick another change.` : "unrelated" === nR.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${nR.name}\` does, or pick another con … [truncated]
+     const rr = "direction" === zr.kind ? `Change \`${zr.name}\` the other way, or pick another change.` : "unrelated" === zr.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${zr.name}\` does, or pick another con … [truncated]
```

#### 2573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29044` → after: `L29044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29044) · [Before (L29044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29044)

```diff
-     problem: `The game has no ${fE(rR.map((RR=>{let{name:JR}=RR;return JR})))} that Studio can find in its code, events or description.`,
+     problem: `The game has no ${jF(Nr.map((rr=>{let{name:Sr}=rr;return Sr})))} that Studio can find in its code, events or description.`,
```

#### 2574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29051` → after: `L29051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29051) · [Before (L29051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29051)

```diff
-     problem: "badge" === eR.kind ? `My game already has the "${eR.name}" badge.` : `My game already sends "${eR.name}".`,
+     problem: "badge" === Ur.kind ? `My game already has the "${Ur.name}" badge.` : `My game already sends "${Ur.name}".`,
```

#### 2575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29058` → after: `L29058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29058) · [Before (L29058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29058)

```diff
-     problem: `My code already does this in \`${aR.where}\`.`,
+     problem: `My code already does this in \`${tr.where}\`.`,
```

#### 2576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29064` → after: `L29064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29064) · [Before (L29064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29064)

```diff
-     problem: `It tells players to type \`${nR}\`, but no code in my game reads chat.`,
+     problem: `It tells players to type \`${zr}\`, but no code in my game reads chat.`,
```

#### 2577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29073` → after: `L29073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29073) · [Before (L29073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29073)

```diff
-       problem: `Bloxd has no ${fE(GR)} item or block.`,
+       problem: `Bloxd has no ${jF(Qr)} item or block.`,
```

#### 2578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29100` → after: `L29100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29100) · [Before (L29100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29100)

```diff
-       of RR.hidden) iR(JR, `My game already ${"event"===GR.kind?"logs":"has"} \`${GR.name}\` (in \`${GR.where}\`).`, "Replace it with something my game doesn't have yet.");
+       of rr.hidden) fr(Sr, `My game already ${"event"===Qr.kind?"logs":"has"} \`${Qr.name}\` (in \`${Qr.where}\`).`, "Replace it with something my game doesn't have yet.");
```

#### 2579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29133` → after: `L29133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29133) · [Before (L29133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29133)

```diff
-   } = RR, qR = NB(RR.code, RR.where, uR), iR = null !== (GR = null === qR || void 0 === qR ? void 0 : qR.code) && void 0 !== GR ? GR : RR.code, fR = null !== (yR = null === qR || void 0 === qR ? void 0 : qR.where) && void 0 !== yR ? yR : RR.where, VR = tU(RR), KR = [], wR = (RR,  … [truncated]
+   } = rr, Ir = HT(rr.code, rr.where, ar), fr = null !== (Qr = null === Ir || void 0 === Ir ? void 0 : Ir.code) && void 0 !== Qr ? Qr : rr.code, Er = null !== (Zr = null === Ir || void 0 === Ir ? void 0 : Ir.where) && void 0 !== Zr ? Zr : rr.where, pr = rY(rr), xr = [], mr = (rr,  … [truncated]
```

#### 2580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29140-L29141` → after: `L29140-L29141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29140-L29141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29140-L29141) · [Before (L29140-L29141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29140-L29141)

```diff
-   }, rR = kl(`${null!==iR&&void 0!==iR?iR:""}\n${VR}`, JR.knownGameText);
-   rR.length > 0 && wR(`The game has no ${fE(rR.map((RR=>{let{name:JR}=RR;return JR})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
+   }, Nr = ov(`${null!==fr&&void 0!==fr?fr:""}\n${pr}`, Sr.knownGameText);
+   Nr.length > 0 && mr(`The game has no ${jF(Nr.map((rr=>{let{name:Sr}=rr;return Sr})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
```

#### 2581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29145` → after: `L29145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29145) · [Before (L29145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29145)

```diff
-     wR(`It changes dying early, but the earliest death (${eR.earliest.name}) comes at ${RR} min on average.`, "Pick a change at the step where players stop instead.")
+     mr(`It changes dying early, but the earliest death (${Ur.earliest.name}) comes at ${rr} min on average.`, "Pick a change at the step where players stop instead.")
```

#### 2582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29149-L29150` → after: `L29149-L29150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29149-L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29149-L29150) · [Before (L29149-L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29149-L29150)

```diff
-     LR = GB(null === aR ? iR : aR.code, fR, uR),
-     nR = null !== (tR = null === LR || void 0 === LR ? void 0 : LR.code) && void 0 !== tR ? tR : iR,
+     hr = ST(null === tr ? fr : tr.code, Er, ar),
+     zr = null !== (Wr = null === hr || void 0 === hr ? void 0 : hr.code) && void 0 !== Wr ? Wr : fr,
```

#### 2583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29153` → after: `L29153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29153) · [Before (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29153)

```diff
-   null !== WR ? wR(`My code already does this in \`${WR.where}\`.`, "Pick a change my game doesn't make yet.") : null !== aR && aR.leftOut.length > 0 && wR(`Some of its lines repeat what \`${aR.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
+   null !== nr ? mr(`My code already does this in \`${nr.where}\`.`, "Pick a change my game doesn't make yet.") : null !== tr && tr.leftOut.length > 0 && mr(`Some of its lines repeat what \`${tr.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
```

#### 2584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29155-L29157` → after: `L29155-L29157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29155-L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29155-L29157) · [Before (L29155-L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29155-L29157)

```diff
-   null !== AR && wR("gives" === AR.kind ? `\`${AR.where}\` already gives ${AR.items.join(", ")}.` : "secondMessage" === AR.kind ? `My game already has a welcome message in \`${AR.where}\`.` : `My message in \`${AR.where}\` already says this.`, "secondMessage" === AR.kind ? "Chang … [truncated]
-   const CR = null !== fR && void 0 !== fR ? fR : "tick";
-   !0 === (null === LR || void 0 === LR ? void 0 : LR.repeats) ? wR(`From \`${CR}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== LR && (null !== LR.once || LR.flagNames.length > 0) && wR(`From \`${CR}\` it sends  … [truncated]
+   null !== er && mr("gives" === er.kind ? `\`${er.where}\` already gives ${er.items.join(", ")}.` : "secondMessage" === er.kind ? `My game already has a welcome message in \`${er.where}\`.` : `My message in \`${er.where}\` already says this.`, "secondMessage" === er.kind ? "Chang … [truncated]
+   const Kr = null !== Er && void 0 !== Er ? Er : "tick";
+   !0 === (null === hr || void 0 === hr ? void 0 : hr.repeats) ? mr(`From \`${Kr}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== hr && (null !== hr.once || hr.flagNames.length > 0) && mr(`From \`${Kr}\` it sends  … [truncated]
```

#### 2585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29159` → after: `L29159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29159) · [Before (L29159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29159)

```diff
-   null !== XR && wR(`\`${XR.name}\` isn't defined in \`${XR.place}\`.`, null === XR.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${XR.alias}\`, its name for the player there.`);
+   null !== yr && mr(`\`${yr.name}\` isn't defined in \`${yr.place}\`.`, null === yr.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${yr.alias}\`, its name for the player there.`);
```

#### 2586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29161` → after: `L29161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29161) · [Before (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29161)

```diff
-   null !== MR && wR(`World Code has no \`${MR}\`, so the code won't run.`, "Count time in `tick` instead.");
+   null !== Br && mr(`World Code has no \`${Br}\`, so the code won't run.`, "Count time in `tick` instead.");
```

#### 2587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29163-L29192` → after: `L29163-L29192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29163-L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29163-L29192) · [Before (L29163-L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29163-L29192)

```diff
-   BR.length > 0 && wR(`It calls ${BR.map((RR=>`\`${RR}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
-   const lR = SB(nR, JR.apiNames);
-   lR.length > 0 && wR(`Bloxd has no ${lR.map((RR=>`\`api.${RR}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
-   const pR = Ze(nR, fR, uR, UR);
-   pR.length > 0 && wR(`It reads ${pR.map((RR=>`\`${RR}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), cv(nR, fR, ZR) && wR("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
-   for (const gR of Mj(nR, uR)) wR(`It tells players to type \`${gR}\`, but no code in my game reads chat.`, "Don't use a chat command.");
-   return Tn(nR).isBalanced || wR("The code leaves a bracket or quote open.", "Close it."), KR
- }
- 
- function aE(RR, JR) {
-   let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RE;
-   const yR = jV(RR);
-   if (null === yR) return [];
-   const tR = uS(yR).layout,
-     uR = [],
-     ZR = [];
- ... (14 more removed lines; see GitHub link above)
+   Tr.length > 0 && mr(`It calls ${Tr.map((rr=>`\`${rr}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
+   const vr = VT(zr, Sr.apiNames);
+   vr.length > 0 && mr(`Bloxd has no ${vr.map((rr=>`\`api.${rr}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
+   const Or = WU(zr, Er, ar, Yr);
+   Or.length > 0 && mr(`It reads ${Or.map((rr=>`\`${rr}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), gX(zr, Er, jr) && mr("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
+   for (const Lr of Kw(zr, ar)) mr(`It tells players to type \`${Lr}\`, but no code in my game reads chat.`, "Don't use a chat command.");
+   return oz(zr).isBalanced || mr("The code leaves a bracket or quote open.", "Close it."), xr
+ }
+ 
+ function mF(rr, Sr) {
+   let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dc;
+   const Zr = Ap(rr);
+   if (null === Zr) return [];
+   const Wr = Si(Zr).layout,
+     ar = [],
+     jr = [];
+ ... (14 more added lines; see GitHub link above)
```

#### 2588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29194-L29201` → after: `L29194-L29201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29194-L29201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29194-L29201) · [Before (L29194-L29201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29194-L29201)

```diff
-       KR = RR => VR.some((JR => qE(JR.markdown, RR))),
-       wR = ZE(yR);
-     if (null !== GR) {
-       uR.push(...eE(GR, JR));
-       for (const RR of GR.blocks) {
-         const GR = "paragraph" === RR.kind ? [RR.text] : ZE([RR]).map((RR => RR.text));
-         for (const RR of GR) uR.push(...KE(RR, "Next change", !1, JR).map((RR => ({
-           ...RR,
+       xr = rr => pr.some((Sr => WF(Sr.markdown, rr))),
+       mr = ZF(Zr);
+     if (null !== Qr) {
+       ar.push(...xF(Qr, Sr));
+       for (const rr of Qr.blocks) {
+         const Qr = "paragraph" === rr.kind ? [rr.text] : ZF([rr]).map((rr => rr.text));
+         for (const rr of Qr) ar.push(...fF(rr, "Next change", !1, Sr).map((rr => ({
+           ...rr,
```

#### 2589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29206-L29209` → after: `L29206-L29209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29206-L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29206-L29209) · [Before (L29206-L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29206-L29209)

```diff
-     ZR.push(...wE(fR, wR, JR, KR));
-     for (const uR of yR) "paragraph" === uR.kind && ZR.push(...KE(uR.text, fR.heading, !1, JR));
-     wR.forEach(((RR, GR) => {
-       KR(RR.text) || ZR.push(...KE(RR.text, `${fR.heading} ${GR+1}`, !0, JR))
+     jr.push(...EF(Er, mr, Sr, xr));
+     for (const ar of Zr) "paragraph" === ar.kind && jr.push(...fF(ar.text, Er.heading, !1, Sr));
+     mr.forEach(((rr, Qr) => {
+       xr(rr.text) || jr.push(...fF(rr.text, `${Er.heading} ${Qr+1}`, !0, Sr))
```

#### 2590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29212-L29216` → after: `L29212-L29216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29212-L29216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29212-L29216) · [Before (L29212-L29216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29212-L29216)

```diff
-   const iR = new Set;
-   return [...uR, ...ZR].filter((RR => {
-     const JR = `${RR.where}|${RR.problem}`;
-     return !iR.has(JR) && (iR.add(JR), !0)
-   })).slice(0, GR)
+   const fr = new Set;
+   return [...ar, ...jr].filter((rr => {
+     const Sr = `${rr.where}|${rr.problem}`;
+     return !fr.has(Sr) && (fr.add(Sr), !0)
+   })).slice(0, Qr)
```

#### 2591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29219-L29222` → after: `L29219-L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29219-L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29219-L29222) · [Before (L29219-L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29219-L29222)

```diff
- function LE(RR, JR) {
-   const GR = new Set,
-     yR = function(RR) {
-       let yR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ function NF(rr, Sr) {
+   const Qr = new Set,
+     Zr = function(rr) {
+       let Zr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
```

#### 2592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29224` → after: `L29224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29224) · [Before (L29224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29224)

```diff
-           name: tR
+           name: Wr
```

#### 2593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29226` → after: `L29226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29226) · [Before (L29226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29226)

```diff
-         of kl(RR, JR, yR)) GR.add(tR.toLowerCase())
+         of ov(rr, Sr, Zr)) Qr.add(Wr.toLowerCase())
```

#### 2594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29228-L29229` → after: `L29228-L29229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29228-L29229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29228-L29229) · [Before (L29228-L29229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29228-L29229)

```diff
-     tR = RR => {
-       for (const JR of RR) yR(JR.text), tR(JR.children)
+     Wr = rr => {
+       for (const Sr of rr) Zr(Sr.text), Wr(Sr.children)
```

#### 2595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29231-L29232` → after: `L29231-L29232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29231-L29232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29231-L29232) · [Before (L29231-L29232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29231-L29232)

```diff
-   for (const uR of (0, En.A)(RR)) "paragraph" === uR.kind || "heading" === uR.kind ? yR(uR.text) : "list" === uR.kind ? tR(uR.items) : "code" === uR.kind && yR(uR.code, !0);
-   return GR
+   for (const ar of (0, Vz.v)(rr)) "paragraph" === ar.kind || "heading" === ar.kind ? Zr(ar.text) : "list" === ar.kind ? Wr(ar.items) : "code" === ar.kind && Zr(ar.code, !0);
+   return Qr
```

#### 2596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29234` → after: `L29234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29234) · [Before (L29234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29234)

```diff
- const nE = /<\s*\/?\s*game-text[^>]*>/gi;
+ const UF = /<\s*\/?\s*game-text[^>]*>/gi;
```

#### 2597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29236` → after: `L29236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29236) · [Before (L29236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29236)

```diff
- function UE(RR) {
+ function tF(rr) {
```

#### 2598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29238-L29254` → after: `L29238-L29254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29238-L29254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29238-L29254) · [Before (L29238-L29254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29238-L29254)

```diff
-     where: JR,
-     quote: GR,
-     problem: yR,
-     fix: tR
-   } = RR, uR = of(`- ${JR}${null===GR?"":` ("${GR}")`}: ${yR} Instead: ${tR}`, 1 / 0);
-   for (let ZR = ""; uR !== ZR;) ZR = uR, uR = uR.replace(nE, "");
-   return uR
- }
- 
- function WE(RR) {
-   const JR = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
-     GR = "Reply with the whole answer again, and nothing else.",
-     yR = [];
-   for (const tR of RR) {
-     const RR = UE(tR);
-     if ([JR, ...yR, RR, GR].join("\n").length > JE) {
- ... (1 more removed lines; see GitHub link above)
+     where: Sr,
+     quote: Qr,
+     problem: Zr,
+     fix: Wr
+   } = rr, ar = RE(`- ${Sr}${null===Qr?"":` ("${Qr}")`}: ${Zr} Instead: ${Wr}`, 1 / 0);
+   for (let jr = ""; ar !== jr;) jr = ar, ar = ar.replace(UF, "");
+   return ar
+ }
+ 
+ function hF(rr) {
+   const Sr = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
+     Qr = "Reply with the whole answer again, and nothing else.",
+     Zr = [];
+   for (const Wr of rr) {
+     const rr = tF(Wr);
+     if ([Sr, ...Zr, rr, Qr].join("\n").length > sc) {
+ ... (1 more added lines; see GitHub link above)
```

#### 2599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29257` → after: `L29257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29257) · [Before (L29257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29257)

```diff
-     yR.push(RR)
+     Zr.push(rr)
```

#### 2600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29259` → after: `L29259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29259) · [Before (L29259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29259)

```diff
-   return [JR, ...yR, GR].join("\n")
+   return [Sr, ...Zr, Qr].join("\n")
```

#### 2601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29262-L29266` → after: `L29262-L29266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29262-L29266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29262-L29266) · [Before (L29262-L29266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29262-L29266)

```diff
- function AE(RR) {
-   const JR = new Map;
-   for (const yR of RR.sections) {
-     var GR;
-     JR.set(yR.key, (null !== (GR = JR.get(yR.key)) && void 0 !== GR ? GR : 0) + ZE((0, En.A)(yR.markdown)).length)
+ function zF(rr) {
+   const Sr = new Map;
+   for (const Zr of rr.sections) {
+     var Qr;
+     Sr.set(Zr.key, (null !== (Qr = Sr.get(Zr.key)) && void 0 !== Qr ? Qr : 0) + ZF((0, Vz.v)(Zr.markdown)).length)
```

#### 2602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29268` → after: `L29268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29268) · [Before (L29268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29268)

```diff
-   return JR
+   return Sr
```

#### 2603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29270` → after: `L29270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29270) · [Before (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29270)

```diff
- const CE = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
+ const YF = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
```

#### 2604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29311` → after: `L29311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29311) · [Before (L29311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29311)

```diff
-         if ((null !== (uR = qR.get(tR)) && void 0 !== uR ? uR : 0) < iR) return !1
+         if ((null !== (ar = Ir.get(Wr)) && void 0 !== ar ? ar : 0) < fr) return !1
```

#### 2605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29329` → after: `L29329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29329) · [Before (L29329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29329)

```diff
-     return console.error(`The Studio AI export couldn't load ${JR}`, yR), RR.push(JR), null
+     return console.error(`The Studio AI export couldn't load ${Sr}`, Zr), rr.push(Sr), null
```

#### 2606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29335` → after: `L29335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29335) · [Before (L29335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29335)

```diff
-     ZR = tR.edges.length > 0 ? tR : null;
+     jr = Wr.edges.length > 0 ? Wr : null;
```

#### 2607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29370` → after: `L29370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29370) · [Before (L29370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29370)

```diff
-         qR = await pE(RR, "the order players got events in", (() => mR.d.getGameEventPairCounts(JR, {
+         Ir = await BF(rr, "the order players got events in", (() => Ar.c.getGameEventPairCounts(Sr, {
```

#### 2608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29389` → after: `L29389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29389) · [Before (L29389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29389)

```diff
-     iR = await pE(RR, "the event flow's counts", (() => mR.d.getGameEventFlow(JR, {
+     fr = await BF(rr, "the event flow's counts", (() => Ar.c.getGameEventFlow(Sr, {
```

#### 2609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29415` → after: `L29415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29415) · [Before (L29415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29415)

```diff
-   const yR = await pE(RR, "player heatmaps", (() => mR.d.getGamePlayerHeatmap(JR, GR)));
+   const Zr = await BF(rr, "player heatmaps", (() => Ar.c.getGamePlayerHeatmap(Sr, Qr)));
```

#### 2610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29425` → after: `L29425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29425) · [Before (L29425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29425)

```diff
-       const qR = await pE(uR, "event heatmaps in " + ("" === tR ? "the default game category" : "a game category"), (() => mR.d.getGameEventHeatmaps(JR, GR, tR)));
+       const Ir = await BF(ar, "event heatmaps in " + ("" === Wr ? "the default game category" : "a game category"), (() => Ar.c.getGameEventHeatmaps(Sr, Qr, Wr)));
```

#### 2611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29429` → after: `L29429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29429) · [Before (L29429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29429)

```diff
-         events: null !== (yR = null === qR || void 0 === qR ? void 0 : qR.events) && void 0 !== yR ? yR : []
+         events: null !== (Zr = null === Ir || void 0 === Ir ? void 0 : Ir.events) && void 0 !== Zr ? Zr : []
```

#### 2612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29432` → after: `L29432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29432) · [Before (L29432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29432)

```diff
-   return uR.length > 0 && RR.push(1 === uR.length ? uR[0] : `event heatmaps in ${uR.length} game categories`), ZR
+   return ar.length > 0 && rr.push(1 === ar.length ? ar[0] : `event heatmaps in ${ar.length} game categories`), jr
```

#### 2613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29443` → after: `L29443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29443) · [Before (L29443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29443)

```diff
-     const RR = await mR.d.getGameCustomEvents(JR, GR);
+     const rr = await Ar.c.getGameCustomEvents(Sr, Qr);
```

#### 2614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29449-L29450` → after: `L29449-L29450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29449-L29450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29449-L29450) · [Before (L29449-L29450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29449-L29450)

```diff
-     playerTotals: vE((await mR.d.getGameCustomEventsPlayerTotals(JR, GR)).playerTotals)
-   }))), pE(RR, "the numbers custom events carry", (() => mR.d.getGameEventValues(JR, GR))), pE(RR, "each player's latest number in custom events", (() => mR.d.getGamePlayerEventValues(JR, GR))), bE(RR, JR, GR)]);
+     playerTotals: OF((await Ar.c.getGameCustomEventsPlayerTotals(Sr, Qr)).playerTotals)
+   }))), BF(rr, "the numbers custom events carry", (() => Ar.c.getGameEventValues(Sr, Qr))), BF(rr, "each player's latest number in custom events", (() => Ar.c.getGamePlayerEventValues(Sr, Qr))), vF(rr, Sr, Qr)]);
```

#### 2615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29463` → after: `L29463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29463) · [Before (L29463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29463)

```diff
-   if (null === (0, qR.g)(tR)) return null;
+   if (null === (0, Ir.f)(Wr)) return null;
```

#### 2616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29465-L29466` → after: `L29465-L29466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29465-L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29465-L29466) · [Before (L29465-L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29465-L29466)

```diff
-   const uR = await pE(RR, ve, (() => mR.d.getGameWorldCodeDigest(JR, tR)));
-   return null !== uR && null === uR.digest && "isMissing" in uR && !0 === uR.isMissing && RR.push(ve), null !== (yR = null === uR || void 0 === uR ? void 0 : uR.digest) && void 0 !== yR ? yR : null
+   const ar = await BF(rr, LU, (() => Ar.c.getGameWorldCodeDigest(Sr, Wr)));
+   return null !== ar && null === ar.digest && "isMissing" in ar && !0 === ar.isMissing && rr.push(LU), null !== (Zr = null === ar || void 0 === ar ? void 0 : ar.digest) && void 0 !== Zr ? Zr : null
```

#### 2617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29483` → after: `L29483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29483) · [Before (L29483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29483)

```diff
-   } = (0, rR.A)(), [eR, aR] = (0, yR.useState)(!0), [LR, nR] = (0, yR.useState)(!1), UR = LR || eR, WR = (0, yR.useRef)(null), CR = null === GR;
+   } = (0, Nr.E)(), [Ur, tr] = (0, Zr.useState)(!0), [hr, zr] = (0, Zr.useState)(!1), Yr = hr || Ur, nr = (0, Zr.useRef)(null), Kr = null === Qr;
```

#### 2618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29534` → after: `L29534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29534) · [Before (L29534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29534)

```diff
-         children: [(0, vR.jsx)(AR.d, {
+         children: [(0, Xr.jsx)(er.c, {
```

#### 2619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29588` → after: `L29588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29588) · [Before (L29588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29588)

```diff
-     if (JR.aborted) return void yR((0, Fq.g)(JR));
+     if (Sr.aborted) return void Zr((0, JI.f)(Sr));
```

#### 2620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29590` → after: `L29590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29590) · [Before (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29590)

```diff
-         clearTimeout(uR), yR((0, Fq.g)(JR))
+         clearTimeout(ar), Zr((0, JI.f)(Sr))
```

#### 2621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29602` → after: `L29602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29602) · [Before (L29602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29602)

```diff
-   return `${RR.ageBand}|${RR.gameTier}`
+   return `${rr.ageBand}|${rr.gameTier}`
```

#### 2622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29623` → after: `L29623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29623) · [Before (L29623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29623)

```diff
-   } = (0, rR.A)(), {
+   } = (0, Nr.E)(), {
```

#### 2623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29626` → after: `L29626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29626) · [Before (L29626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29626)

```diff
-   } = (0, eR.d)(), [KR, wR] = (0, yR.useState)(null), [aR, LR] = (0, yR.useState)(null), [nR, UR] = (0, yR.useState)(null), [CR, XR] = (0, yR.useState)(null), [MR, BR] = (0, yR.useState)(!1), [lR, pR] = (0, yR.useState)(!1), [gR] = (0, yR.useState)(tR);
+   } = (0, Ur.c)(), [xr, mr] = (0, Zr.useState)(null), [tr, hr] = (0, Zr.useState)(null), [zr, Yr] = (0, Zr.useState)(null), [Kr, yr] = (0, Zr.useState)(null), [Br, Tr] = (0, Zr.useState)(!1), [vr, Or] = (0, Zr.useState)(!1), [Lr] = (0, Zr.useState)(Wr);
```

#### 2624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29633` → after: `L29633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29633) · [Before (L29633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29633)

```diff
-         [tR, uR, ZR, qR, iR] = await Promise.all([pE(GR, "the game's daily stats", (() => mR.d.getGameStats(RR, yR))), pE(GR, "the median custom game's figures", (() => mR.d.getCustomGameBaseline(RR))), pE(GR, "concurrent players", (() => mR.d.getGameCcu(RR, yR, "30d"))), OE(GR,  … [truncated]
+         [Wr, ar, jr, Ir, fr] = await Promise.all([BF(Qr, "the game's daily stats", (() => Ar.c.getGameStats(rr, Zr))), BF(Qr, "the median custom game's figures", (() => Ar.c.getCustomGameBaseline(rr))), BF(Qr, "concurrent players", (() => Ar.c.getGameCcu(rr, Zr, "30d"))), LF(Qr,  … [truncated]
```

#### 2625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29666` → after: `L29666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29666) · [Before (L29666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29666)

```diff
-     OR = null !== aR && void 0 !== aR ? aR : bR,
+     Pr = null !== tr && void 0 !== tr ? tr : lr,
```

#### 2626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29681` → after: `L29681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29681) · [Before (L29681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29681)

```diff
-         worldCode: null !== (GR = null === RR || void 0 === RR ? void 0 : RR.worldCode) && void 0 !== GR ? GR : null,
+         worldCode: null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.worldCode) && void 0 !== Qr ? Qr : null,
```

#### 2627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29686` → after: `L29686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29686) · [Before (L29686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29686)

```diff
-         weeklyPlayers: null !== (yR = null === RR || void 0 === RR || null === (tR = RR.stats) || void 0 === tR ? void 0 : tR.rankingWindow.uniquePlayers) && void 0 !== yR ? yR : null,
+         weeklyPlayers: null !== (Zr = null === rr || void 0 === rr || null === (Wr = rr.stats) || void 0 === Wr ? void 0 : Wr.rankingWindow.uniquePlayers) && void 0 !== Zr ? Zr : null,
```

#### 2628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29698` → after: `L29698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29698) · [Before (L29698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29698)

```diff
-       return `${RR.size}-${GR.toString(36)}`
+       return `${rr.size}-${Qr.toString(36)}`
```

#### 2629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29708` → after: `L29708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/119.js#L29708) · [Before (L29708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/119.js#L29708)

```diff
-         checkedNumbers: Pn(JR, null === uR ? ZR : [uR.change, ...ZR]),
+         checkedNumbers: Rz(Sr, null === ar ? jr : [ar.change, ...jr]),
```
