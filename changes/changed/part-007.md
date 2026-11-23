# Changed — Bundle Modifications Report (Part 007 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `7 / 104` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/104.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/104.js` (2768 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9)

#### 2194. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24184-L24188` → after: `L24276-L24280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24276-L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24276-L24280) · [Before (L24184-L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24184-L24188)

```diff
-   lX = new RegExp(String.raw`(${wX})\s*,\s*(${wX})\s*,\s*(${wX})(?![\w.])`, "g"),
-   pX = (0, lb.h)("\\w."),
-   yX = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${wX}|x)(\s*,\s*)(${wX}|y)(\s*,\s*)(${wX}|z)(\s*\]?\s*\))`, "g"),
-   YX = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${wX}|x)(\s*,\s*)(${wX}|y)(\s*,\s*)(${wX}|z)(\s*\]?\s*,)`, "g"),
-   LX = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${wX})\s*,\s*(${wX})\s*,\s*(${wX})\s*\]`),
+   GT = new RegExp(String.raw`(${PT})\s*,\s*(${PT})\s*,\s*(${PT})(?![\w.])`, "g"),
+   RT = (0, Sn.l)("\\w."),
+   AT = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${PT}|x)(\s*,\s*)(${PT}|y)(\s*,\s*)(${PT}|z)(\s*\]?\s*\))`, "g"),
+   xT = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${PT}|x)(\s*,\s*)(${PT}|y)(\s*,\s*)(${PT}|z)(\s*\]?\s*,)`, "g"),
+   JT = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${PT})\s*,\s*(${PT})\s*,\s*(${PT})\s*\]`),
```

#### 2195. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24220` → after: `L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24312) · [Before (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24220)

```diff
-         const Sk = null !== (fk = ik.get(kk)) && void 0 !== fk ? fk : new Map;
+         const bC = null !== (wC = ZC.get(CC)) && void 0 !== wC ? wC : new Map;
```

#### 2196. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24235` → after: `L24327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24327) · [Before (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24235)

```diff
-       for (const Sk of [...kk.callbacks, ...null !== (ik = kk.functions) && void 0 !== ik ? ik : []]) {
+       for (const bC of [...CC.callbacks, ...null !== (ZC = CC.functions) && void 0 !== ZC ? ZC : []]) {
```

#### 2197. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24258` → after: `L24350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24350) · [Before (L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24258)

```diff
-         of [...null !== (Dk = kk.messages) && void 0 !== Dk ? Dk : [], ...null !== (fk = kk.calls) && void 0 !== fk ? fk : []]) {
+         of [...null !== (QC = CC.messages) && void 0 !== QC ? QC : [], ...null !== (wC = CC.calls) && void 0 !== wC ? wC : []]) {
```

#### 2198. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24267` → after: `L24359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24359) · [Before (L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24267)

```diff
-         text: `${Sk.name} = ${Sk.value}`,
+         text: `${bC.name} = ${bC.value}`,
```

#### 2199. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24277` → after: `L24369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24369) · [Before (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24277)

```diff
-     for (const Dk of (0, lb.e)(fk, lX, pX)) ek.add(zX([Dk[1], Dk[2], Dk[3]]));
+     for (const QC of (0, Sn.f)(wC, GT, RT)) zC.add(ET([QC[1], QC[2], QC[3]]));
```

#### 2200. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24283` → after: `L24375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24375) · [Before (L24283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24283)

```diff
-         test: `${null!==bk&&void 0!==bk?bk:""} ${fk.slice(0,kk.index)}`,
+         test: `${null!==nC&&void 0!==nC?nC:""} ${wC.slice(0,CC.index)}`,
```

#### 2201. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24287` → after: `L24379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24379) · [Before (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24287)

```diff
-         test: `${null!==bk&&void 0!==bk?bk:""} ${ik[1]}`,
+         test: `${null!==nC&&void 0!==nC?nC:""} ${ZC[1]}`,
```

#### 2202. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24293` → after: `L24385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24385) · [Before (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24293)

```diff
-     Dk(mk ? IX(Pk.test, !1) : null !== Mk && void 0 !== Mk ? Mk : IX(Sk, !1), Pk.position, Sk)
+     QC(qC ? HT(oC.test, !1) : null !== FC && void 0 !== FC ? FC : HT(bC, !1), oC.position, bC)
```

#### 2203. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24311-L24313` → after: `L24403-L24405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24403-L24405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24403-L24405) · [Before (L24311-L24313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24311-L24313)

```diff
-         if (null === kk || "" === kk[1] || !new RegExp(`^${wX}$`).test(bk)) continue;
-         const rk = null !== (Dk = ek.get(kk[1])) && void 0 !== Dk ? Dk : {};
-         rk[kk[2].toLowerCase()] = bk, ek.set(kk[1], rk), ik.set(kk[1], [...null !== (fk = ik.get(kk[1])) && void 0 !== fk ? fk : [], Sk])
+         if (null === CC || "" === CC[1] || !new RegExp(`^${PT}$`).test(nC)) continue;
+         const fC = null !== (QC = zC.get(CC[1])) && void 0 !== QC ? QC : {};
+         fC[CC[2].toLowerCase()] = nC, zC.set(CC[1], fC), ZC.set(CC[1], [...null !== (wC = ZC.get(CC[1])) && void 0 !== wC ? wC : [], bC])
```

#### 2204. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24346-L24348` → after: `L24438-L24440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24438-L24440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24438-L24440) · [Before (L24346-L24348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24346-L24348)

```diff
-   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${kk}\b|\{[^}]*\b${kk}\b|${kk}\b)|\(([^()]*\b)?${kk}\b[^()]*\)\s*=>`).test(ek)) return !0;
-   const Pk = new Set(null !== (fk = ik.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== fk ? fk : []),
-     mk = [...null !== (Sk = Dk.messages) && void 0 !== Sk ? Sk : [], ...null !== (bk = Dk.calls) && void 0 !== bk ? bk : []].flatMap((kk => {
+   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${CC}\b|\{[^}]*\b${CC}\b|${CC}\b)|\(([^()]*\b)?${CC}\b[^()]*\)\s*=>`).test(zC)) return !0;
+   const oC = new Set(null !== (wC = ZC.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== wC ? wC : []),
+     qC = [...null !== (bC = QC.messages) && void 0 !== bC ? bC : [], ...null !== (nC = QC.calls) && void 0 !== nC ? nC : []].flatMap((CC => {
```

#### 2205. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24355` → after: `L24447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24447) · [Before (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24355)

```diff
-   return [...Dk.callbacks, ...null !== (rk = Dk.functions) && void 0 !== rk ? rk : []].some((ek => {
+   return [...QC.callbacks, ...null !== (fC = QC.functions) && void 0 !== fC ? fC : []].some((zC => {
```

#### 2206. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24357` → after: `L24449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24449) · [Before (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24357)

```diff
-     return (Pk.has(ek.name) || mk.includes(ek.name)) && ((null !== (ik = ek.params) && void 0 !== ik ? ik : []).includes(kk) || (null !== (Dk = null === (fk = ek.body) || void 0 === fk ? void 0 : fk.locals) && void 0 !== Dk ? Dk : []).includes(kk))
+     return (oC.has(zC.name) || qC.includes(zC.name)) && ((null !== (ZC = zC.params) && void 0 !== ZC ? ZC : []).includes(CC) || (null !== (QC = null === (wC = zC.body) || void 0 === wC ? void 0 : wC.locals) && void 0 !== QC ? QC : []).includes(CC))
```

#### 2207. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24385` → after: `L24477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24477) · [Before (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24385)

```diff
-     const ik = [...kk.matchAll(new RegExp(String.raw`\b${VQ}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((kk => {
+     const ZC = [...CC.matchAll(new RegExp(String.raw`\b${hE}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((CC => {
```

#### 2208. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24413` → after: `L24505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24505) · [Before (L24413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24413)

```diff
-   for (const lk of null !== (Uk = null === fk || void 0 === fk ? void 0 : fk.codeLines) && void 0 !== Uk ? Uk : []) {
+   for (const PC of null !== (gC = null === wC || void 0 === wC ? void 0 : wC.codeLines) && void 0 !== gC ? gC : []) {
```

#### 2209. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24415` → after: `L24507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24507) · [Before (L24415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24415)

```diff
-     for (const kk of (0, lb.e)(lk, lX, pX)) rk.add(zX([kk[1], kk[2], kk[3]]))
+     for (const CC of (0, Sn.f)(PC, GT, RT)) fC.add(ET([CC[1], CC[2], CC[3]]))
```

#### 2210. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24434-L24437` → after: `L24526-L24529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24526-L24529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24526-L24529) · [Before (L24434-L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24434-L24437)

```diff
-   const fk = new RegExp(String.raw`\bthe\s+(?:${Dk.join("|")})\b`, "gi");
-   return kk.replace(ek ? qX : uX, (kk => kk.replace(fk, (kk => {
-     const ek = `the ${ik}`;
-     return kk === kk.toUpperCase() ? ek.toUpperCase() : /^The/.test(kk) ? `T${ek.slice(1)}` : ek
+   const wC = new RegExp(String.raw`\bthe\s+(?:${QC.join("|")})\b`, "gi");
+   return CC.replace(zC ? mT : dT, (CC => CC.replace(wC, (CC => {
+     const zC = `the ${ZC}`;
+     return CC === CC.toUpperCase() ? zC.toUpperCase() : /^The/.test(CC) ? `T${zC.slice(1)}` : zC
```

#### 2211. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24471` → after: `L24563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24563) · [Before (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24471)

```diff
-     Hk = aX(xk.code, null !== (fk = xk.where) && void 0 !== fk ? fk : "", nk, ek, ik, Dk, Sk);
+     SC = rT(NC.code, null !== (wC = NC.where) && void 0 !== wC ? wC : "", MC, zC, ZC, QC, bC);
```

#### 2212. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24477` → after: `L24569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24569) · [Before (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24477)

```diff
-       return `${arguments.length<=1?void 0:arguments[1]}${null!==(ek=arguments.length<=2?void 0:arguments[2])&&void 0!==ek?ek:""}${ik}${arguments.length<=4?void 0:arguments[4]}${Dk}${arguments.length<=6?void 0:arguments[6]}${fk}${arguments.length<=8?void 0:arguments[8]}`
+       return `${arguments.length<=1?void 0:arguments[1]}${null!==(zC=arguments.length<=2?void 0:arguments[2])&&void 0!==zC?zC:""}${ZC}${arguments.length<=4?void 0:arguments[4]}${QC}${arguments.length<=6?void 0:arguments[6]}${wC}${arguments.length<=8?void 0:arguments[8]}`
```

#### 2213. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24498` → after: `L24590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24590) · [Before (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24498)

```diff
-     const kk = [...ek.playerText, ...(null !== (lk = ek.messages) && void 0 !== lk ? lk : []).map((kk => {
+     const CC = [...zC.playerText, ...(null !== (PC = zC.messages) && void 0 !== PC ? PC : []).map((CC => {
```

#### 2214. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24503-L24504` → after: `L24595-L24596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24595-L24596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24595-L24596) · [Before (L24503-L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24503-L24504)

```diff
-       })), null !== (pk = null === ik || void 0 === ik ? void 0 : ik.gameText) && void 0 !== pk ? pk : ""].join("\n"),
-       Dk = ["exit", "finish line", "finish"].filter((ek => !new RegExp(`\\b${ek.split(" ")[0]}`, "i").test(kk)));
+       })), null !== (GC = null === ZC || void 0 === ZC ? void 0 : ZC.gameText) && void 0 !== GC ? GC : ""].join("\n"),
+       QC = ["exit", "finish line", "finish"].filter((zC => !new RegExp(`\\b${zC.split(" ")[0]}`, "i").test(CC)));
```

#### 2215. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24514` → after: `L24606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24606) · [Before (L24514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24514)

```diff
-   return 0 === Uk.length ? bk : {
+   return 0 === gC.length ? nC : {
```

#### 2216. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24519` → after: `L24611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24611) · [Before (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24519)

```diff
- const XX = (0, lb.h)("\\w");
+ const aT = (0, Sn.l)("\\w");
```

#### 2217. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24535-L24539` → after: `L24627-L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24627-L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24627-L24631) · [Before (L24535-L24539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24535-L24539)

```diff
-     rk = null !== bk && bk.length >= 3 && !/^-?\d+$/.test(bk) ? bk : null,
-     Pk = [...new Set([kk, fk, ...null === rk ? [] : [rk, rk.replace(/_/g, " ")]])].sort(((kk, ek) => ek.length - kk.length)).map(wb.e),
-     mk = null !== (ek = null === (ik = /(?:^|\s|:)(-?\d+)$/.exec(kk)) || void 0 === ik ? void 0 : ik[1]) && void 0 !== ek ? ek : null,
-     Mk = null === mk ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,wb.e)(mk)}(?![\\w]|\\.\\d)`,
-     Kk = `(${Pk.join("|")})(?![\\w])${Mk}`,
+     fC = null !== nC && nC.length >= 3 && !/^-?\d+$/.test(nC) ? nC : null,
+     oC = [...new Set([CC, wC, ...null === fC ? [] : [fC, fC.replace(/_/g, " ")]])].sort(((CC, zC) => zC.length - CC.length)).map(gn.d),
+     qC = null !== (zC = null === (ZC = /(?:^|\s|:)(-?\d+)$/.exec(CC)) || void 0 === ZC ? void 0 : ZC[1]) && void 0 !== zC ? zC : null,
+     FC = null === qC ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,gn.d)(qC)}(?![\\w]|\\.\\d)`,
+     WC = `(${oC.join("|")})(?![\\w])${FC}`,
```

#### 2218. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24544-L24546` → after: `L24636-L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24636-L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24636-L24638) · [Before (L24544-L24546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24544-L24546)

```diff
-       parts: (0, wb.u)(kk),
-       atStart: new RegExp(`^(?:${Kk})`, "i"),
-       anywhere: new RegExp(`(?:${Kk})`, "gi")
+       parts: (0, gn.D)(CC),
+       atStart: new RegExp(`^(?:${WC})`, "i"),
+       anywhere: new RegExp(`(?:${WC})`, "gi")
```

#### 2219. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24579` → after: `L24671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24671) · [Before (L24579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24579)

```diff
-   for (const ik of (0, lb.e)(kk, ek.anywhere, XX)) {
+   for (const ZC of (0, Sn.f)(CC, zC.anywhere, aT)) {
```

#### 2220. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24600` → after: `L24692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24692) · [Before (L24600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24600)

```diff
-   return [kk, ...ek.flowSteps].some((ek => ek.from === kk.from && (0, wb.u)(ek.to).some((kk => TX.test(kk)))))
+   return [CC, ...zC.flowSteps].some((zC => zC.from === CC.from && (0, gn.D)(zC.to).some((CC => jT.test(CC)))))
```

#### 2221. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24609` → after: `L24701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24701) · [Before (L24609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24609)

```diff
-   for (const ik of (0, lb.e)(kk, kB, (0, lb.h)("\\w.,"))) {
+   for (const ZC of (0, Sn.f)(CC, za, (0, Sn.l)("\\w.,"))) {
```

#### 2222. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24646` → after: `L24738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24738) · [Before (L24646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24646)

```diff
-   }(ek, kk)))))) && void 0 !== fk ? fk : null : 1 === ik.length && rB.test(ek) ? ik[0] : null
+   }(zC, CC)))))) && void 0 !== wC ? wC : null : 1 === ZC.length && oa.test(zC) ? ZC[0] : null
```

#### 2223. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24679` → after: `L24771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24771) · [Before (L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24679)

```diff
-   return null !== ek.word && null !== kk.number && OX(ek.word, kk) ? `${ek.word} ${kk.number}` : ek.isValue && null !== kk.value ? kk.value : kk.plain
+   return null !== zC.word && null !== CC.number && UT(zC.word, CC) ? `${zC.word} ${CC.number}` : zC.isValue && null !== CC.value ? CC.value : CC.plain
```

#### 2224. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24692` → after: `L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24784) · [Before (L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24692)

```diff
-   const bk = null === ek.to.number ? null : new RegExp(`^${(0,wb.e)(ek.to.number)}(?![\\w]|\\.\\d)`).exec(fk);
+   const nC = null === zC.to.number ? null : new RegExp(`^${(0,gn.d)(zC.to.number)}(?![\\w]|\\.\\d)`).exec(wC);
```

#### 2225. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24746` → after: `L24838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24838) · [Before (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24746)

```diff
-       Ik = null !== (Pk = null !== (mk = PB(qk, Yk, uk)) && void 0 !== mk ? mk : PB(qk, Yk, CB(uk, dk))) && void 0 !== Pk ? Pk : Vk && 1 === uk.length && 0 === fB(qk).length ? uk[0] : null;
+       mC = null !== (oC = null !== (qC = qa(dC, AC, YC)) && void 0 !== qC ? qC : qa(dC, AC, Ia(YC, eC))) && void 0 !== oC ? oC : hC && 1 === YC.length && 0 === ba(dC).length ? YC[0] : null;
```

#### 2226. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24756-L24757` → after: `L24848-L24849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24848-L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24848-L24849) · [Before (L24756-L24757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24756-L24757)

```diff
-     })), vk = pB(lB(null === Uk || void 0 === Uk ? void 0 : Uk.toLowerCase(), Hk, wk), Dk), Ek = pk + nk.indexOf(wk) - (null !== (Mk = null === Ck || void 0 === Ck || null === (Kk = Ck[1]) || void 0 === Kk ? void 0 : Kk.length) && void 0 !== Mk ? Mk : 0);
-     let hk = `${vk} `,
+     })), lC = Ra(Ga(null === gC || void 0 === gC ? void 0 : gC.toLowerCase(), SC, pC), QC), XC = GC + MC.indexOf(pC) - (null !== (FC = null === JC || void 0 === JC || null === (WC = JC[1]) || void 0 === WC ? void 0 : WC.length) && void 0 !== FC ? FC : 0);
+     let cC = `${lC} `,
```

#### 2227. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24760` → after: `L24852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24852) · [Before (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24760)

```diff
-     if (null !== Qk) hk = `${vk} ${Qk.text} after ${sk.slice(0,zk.length)}`, ak = yk + jk.length + zk.length + Qk.length, Wk = ak;
+     if (null !== EC) cC = `${lC} ${EC.text} after ${vC.slice(0,HC.length)}`, uC = RC + iC.length + HC.length + EC.length, rC = uC;
```

#### 2228. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24767` → after: `L24859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24859) · [Before (L24767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24767)

```diff
-         hk = `${vk} ${ek.slice(ik[0].length,ik[0].length+Dk.length)} after ${kk}`, ak = yk + kk.length + ik[0].length + Dk.length, Wk = ak
+         cC = `${lC} ${zC.slice(ZC[0].length,ZC[0].length+QC.length)} after ${CC}`, uC = RC + CC.length + ZC[0].length + QC.length, rC = uC
```

#### 2229. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24770` → after: `L24862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24862) · [Before (L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24770)

```diff
-         hk = `${vk} ${/^[a-z][a-z_]*$/.test(kk)&&new RegExp(`\\bthe\\s+${(0,wb.e)(kk)}\\b`,"i").test(qk)?"the ":""}${kk} after `, ak = yk
+         cC = `${lC} ${/^[a-z][a-z_]*$/.test(CC)&&new RegExp(`\\bthe\\s+${(0,gn.d)(CC)}\\b`,"i").test(dC)?"the ":""}${CC} after `, uC = RC
```

#### 2230. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24796` → after: `L24888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24888) · [Before (L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24796)

```diff
-         Ck = null === yk ? PB(wk, pk, Yk) : null !== (Pk = ek.find((kk => Lk.some((ek => bB(ek, kk)))))) && void 0 !== Pk ? Pk : null;
+         JC = null === RC ? qa(pC, GC, AC) : null !== (oC = zC.find((CC => xC.some((zC => fa(zC, CC)))))) && void 0 !== oC ? oC : null;
```

#### 2231. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24799-L24801` → after: `L24891-L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24891-L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24891-L24893) · [Before (L24799-L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24799-L24801)

```diff
-         jk = /[_:]/.test(Ck.to.plain) ? `\`${Ck.step.to}\`` : Ck.to.plain,
-         sk = `${pB(lB(void 0,void 0,nk),Dk)} ${null===Ak?jk:yB(Ck.to,Ak)}`,
-         dk = Uk - (null !== (mk = null === yk || void 0 === yk || null === (Mk = yk[1]) || void 0 === Mk ? void 0 : Mk.length) && void 0 !== mk ? mk : 0);
+         iC = /[_:]/.test(JC.to.plain) ? `\`${JC.step.to}\`` : JC.to.plain,
+         vC = `${Ra(Ga(void 0,void 0,MC),QC)} ${null===IC?iC:Aa(JC.to,IC)}`,
+         eC = gC - (null !== (qC = null === RC || void 0 === RC || null === (FC = RC[1]) || void 0 === FC ? void 0 : FC.length) && void 0 !== qC ? qC : 0);
```

#### 2232. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24813` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24905) · [Before (L24813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24813)

```diff
-     const ik = (0, lb.e)(kk, ek.from.anywhere, XX).at(-1);
+     const ZC = (0, Sn.f)(CC, zC.from.anywhere, aT).at(-1);
```

#### 2233. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24838` → after: `L24930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24930) · [Before (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24838)

```diff
-         Kk = dB.test((0, lb.p)((0, lb.p)(Pk, fk.to.anywhere, XX, BX), fk.from.anywhere, XX, BX));
+         WC = ha.test((0, Sn.v)((0, Sn.v)(oC, wC.to.anywhere, aT, tT), wC.from.anywhere, aT, tT));
```

#### 2234. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24862` → after: `L24954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24954) · [Before (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24862)

```diff
-   return `${ek[1]}${ik.charAt(0).toUpperCase()}${ik.slice(1)}`
+   return `${zC[1]}${ZC.charAt(0).toUpperCase()}${ZC.slice(1)}`
```

#### 2235. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24891` → after: `L24983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24983) · [Before (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24891)

```diff
-           ik.push(`- ${kk.join(" ")}`), ek++
+           ZC.push(`- ${CC.join(" ")}`), zC++
```

#### 2236. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24900` → after: `L24992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R24992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L24992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L24992) · [Before (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24900)

```diff
-     layout: 0 === ek ? kk : {
+     layout: 0 === zC ? CC : {
```

#### 2237. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24913` → after: `L25005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25005) · [Before (L24913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24913)

```diff
-       markdown: `${ik.join("\n")}${ek}${kk.markdown}`.trim()
+       markdown: `${ZC.join("\n")}${zC}${CC.markdown}`.trim()
```

#### 2238. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24940` → after: `L25032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25032) · [Before (L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24940)

```diff
-   const ek = (0, wb.j)(kk, vB - 1),
+   const zC = (0, gn.l)(CC, Xa - 1),
```

#### 2239. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24942` → after: `L25034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25034) · [Before (L24942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24942)

```diff
-   return `${(ik>vB/2?ek.slice(0,ik):ek).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+   return `${(ZC>Xa/2?zC.slice(0,ZC):zC).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 2240. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24966` → after: `L25058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25058) · [Before (L24966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24966)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${aB}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${ra}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
```

#### 2241. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24978` → after: `L25070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25070) · [Before (L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24978)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${hB}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${aB}(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${ua}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${ra}(?!\w)\s*`, "i"),
```

#### 2242. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L24990` → after: `L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25082) · [Before (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L24990)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${hB}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${hB}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${ua}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${ua}dies?)(?!\w)\s*`, "i"),
```

#### 2243. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25003` → after: `L25095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25095) · [Before (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25003)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${hB}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${ua}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2244. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25015` → after: `L25107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25107) · [Before (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25015)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${hB}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${ua}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2245. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25027` → after: `L25119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25119) · [Before (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25027)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${hB}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${ua}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2246. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25037` → after: `L25129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25129) · [Before (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25037)

```diff
-   return /[|&?=<>!,]/.test(ek) ? `(${ek})` : ek
+   return /[|&?=<>!,]/.test(zC) ? `(${zC})` : zC
```

#### 2247. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25043` → after: `L25135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25135) · [Before (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25043)

```diff
-   return null !== (ek = null !== (ik = null === (Dk = /^(.+)\.toString\(\)$/.exec(Sk)) || void 0 === Dk ? void 0 : Dk[1]) && void 0 !== ik ? ik : null === (fk = /^String\((.+)\)$/.exec(Sk)) || void 0 === fk ? void 0 : fk[1]) && void 0 !== ek ? ek : kk
+   return null !== (zC = null !== (ZC = null === (QC = /^(.+)\.toString\(\)$/.exec(bC)) || void 0 === QC ? void 0 : QC[1]) && void 0 !== ZC ? ZC : null === (wC = /^String\((.+)\)$/.exec(bC)) || void 0 === wC ? void 0 : wC[1]) && void 0 !== zC ? zC : CC
```

#### 2248. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25053` → after: `L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25145) · [Before (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25053)

```diff
-     return "literal" in ik && new RegExp(String.raw`\b${ek}\s*[:#]?\s*$`, "i").test(ik.literal) && void 0 !== fk && "code" in fk
+     return "literal" in ZC && new RegExp(String.raw`\b${zC}\s*[:#]?\s*$`, "i").test(ZC.literal) && void 0 !== wC && "code" in wC
```

#### 2249. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25078` → after: `L25170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25170) · [Before (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25078)

```diff
-   if (jv(fk) && /\p{L}{2}/u.test(fk)) return `"${WB(fk)}"`;
+   if (il(wC) && /\p{L}{2}/u.test(wC)) return `"${sa(wC)}"`;
```

#### 2250. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25082` → after: `L25174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25174) · [Before (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25082)

```diff
-   }(Sk) ? `\`${Sk}\`` : null
+   }(bC) ? `\`${bC}\`` : null
```

#### 2251. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25087` → after: `L25179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25179) · [Before (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25087)

```diff
-   const fk = (null !== (Dk = kk.messages) && void 0 !== Dk ? Dk : []).filter((kk => ek.isMessage(kk) && (null === ik || tB(kk.where).includes(ik)))),
+   const wC = (null !== (QC = CC.messages) && void 0 !== QC ? QC : []).filter((CC => zC.isMessage(CC) && (null === ZC || Ta(CC.where).includes(ZC)))),
```

#### 2252. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25109` → after: `L25201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25201) · [Before (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25109)

```diff
-                   '"' === bk || "'" === bk ? Dk = bk : "([{".includes(bk) ? ik++ : ")]}".includes(bk) ? ik-- : "+" === bk && 0 === ik && (ek.push(kk.slice(fk, Sk).trim()), fk = Sk + 1)
+                   '"' === nC || "'" === nC ? QC = nC : "([{".includes(nC) ? ZC++ : ")]}".includes(nC) ? ZC-- : "+" === nC && 0 === ZC && (zC.push(CC.slice(wC, bC).trim()), wC = bC + 1)
```

#### 2253. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25112` → after: `L25204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25204) · [Before (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25112)

```diff
-               return ek.push(kk.slice(fk).trim()), ek.every((kk => "" !== kk)) ? ek : null
+               return zC.push(CC.slice(wC).trim()), zC.every((CC => "" !== CC)) ? zC : null
```

#### 2254. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25120-L25121` → after: `L25212-L25213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25212-L25213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25212-L25213) · [Before (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25120-L25121)

```diff
-             }))) && void 0 !== ek ? ek : null
-           }(null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk[1]) && void 0 !== ik ? ik : ek);
+             }))) && void 0 !== zC ? zC : null
+           }(null !== (ZC = null === QC || void 0 === QC ? void 0 : QC[1]) && void 0 !== ZC ? ZC : zC);
```

#### 2255. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25133` → after: `L25225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25225) · [Before (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25133)

```diff
-       } = bk[0], Mk = Dk.indexOf(rk, fk[0].length), Kk = null !== (ek = null === (ik = /["']/.exec(rk)) || void 0 === ik ? void 0 : ik[0]) && void 0 !== ek ? ek : '"';
+       } = nC[0], FC = QC.indexOf(fC, wC[0].length), WC = null !== (zC = null === (ZC = /["']/.exec(fC)) || void 0 === ZC ? void 0 : ZC[0]) && void 0 !== zC ? zC : '"';
```

#### 2256. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25152` → after: `L25244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25244) · [Before (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25152)

```diff
-   return new Set([...kk.callbacks, ...null !== (ek = kk.functions) && void 0 !== ek ? ek : []].map((kk => {
+   return new Set([...CC.callbacks, ...null !== (zC = CC.functions) && void 0 !== zC ? zC : []].map((CC => {
```

#### 2257. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25167` → after: `L25259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25259) · [Before (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25167)

```diff
-   if (null === Dk || null === fk || UE.test(null !== (ik = fk[1]) && void 0 !== ik ? ik : "") || kc.test(Dk.text)) return null;
+   if (null === QC || null === wC || gX.test(null !== (ZC = wC[1]) && void 0 !== ZC ? ZC : "") || zt.test(QC.text)) return null;
```

#### 2258. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25182` → after: `L25274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25274) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25182)

```diff
-       const fk = null !== (ek = null === (ik = kk.ideaPlace) || void 0 === ik ? void 0 : ik.exec(bk)) && void 0 !== ek ? ek : null;
+       const wC = null !== (zC = null === (ZC = CC.ideaPlace) || void 0 === ZC ? void 0 : ZC.exec(nC)) && void 0 !== zC ? zC : null;
```

#### 2259. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25185` → after: `L25277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25277) · [Before (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25185)

```diff
-         number: null !== (Dk = fk[1]) && void 0 !== Dk ? Dk : null,
+         number: null !== (QC = wC[1]) && void 0 !== QC ? QC : null,
```

#### 2260. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25203-L25205` → after: `L25295-L25297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25295-L25297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25295-L25297) · [Before (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25203-L25205)

```diff
-   const Hk = null === xk ? "" : `at ${Kk.numberWord} ${xk} `,
-     wk = `hange your ${Kk.noun} message (${Uk}) so ${Hk}it also ${mk.verb} ${mk.after}`;
-   return `${Dk.head}${/^[A-Z]/.test(Dk.text)?"C":"c"}${wk}`
+   const SC = null === NC ? "" : `at ${WC.numberWord} ${NC} `,
+     pC = `hange your ${WC.noun} message (${gC}) so ${SC}it also ${qC.verb} ${qC.after}`;
+   return `${QC.head}${/^[A-Z]/.test(QC.text)?"C":"c"}${pC}`
```

#### 2261. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25265` → after: `L25357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25357) · [Before (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25265)

```diff
-         player: "broadcastMessage" === Sk[3] ? null : null !== (ek = bk[0]) && void 0 !== ek ? ek : null,
+         player: "broadcastMessage" === bC[3] ? null : null !== (zC = nC[0]) && void 0 !== zC ? zC : null,
```

#### 2262. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25267` → after: `L25359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25359) · [Before (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25267)

```diff
-         condition: null !== (ik = Sk[2]) && void 0 !== ik ? ik : null,
+         condition: null !== (ZC = bC[2]) && void 0 !== ZC ? ZC : null,
```

#### 2263. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25276-L25277` → after: `L25368-L25369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25368-L25369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25368-L25369) · [Before (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25276-L25277)

```diff
-       const Dk = null === kk.mention ? "join" === kk.kind && "onPlayerJoin" === Hk : kk.mention.test(wk),
-         fk = (null !== (ik = ek.messages) && void 0 !== ik ? ik : []).filter((ek => kk.isMessage(ek) && tB(ek.where).includes(Hk)));
+       const QC = null === CC.mention ? "join" === CC.kind && "onPlayerJoin" === SC : CC.mention.test(pC),
+         wC = (null !== (ZC = zC.messages) && void 0 !== ZC ? ZC : []).filter((zC => CC.isMessage(zC) && Ta(zC.where).includes(SC)));
```

#### 2264. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25301-L25302` → after: `L25393-L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25393-L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25393-L25394) · [Before (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25301-L25302)

```diff
-     sk = null !== yk.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${yk.numberWord}s?\b`, "i").test(wk),
-     dk = null === yk.numberWord || sk ? new Set : new Set((0, wb.l)(wk).filter((kk => !/\d\s*%/.test(kk))).flatMap((kk => [...kk.matchAll(new RegExp(String.raw`\b${yk.numberWord}\s*:?\s*(\d{1,3})\b${aB}`, "gi"))].map((kk => kk[1])))));
+     vC = null !== RC.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${RC.numberWord}s?\b`, "i").test(pC),
+     eC = null === RC.numberWord || vC ? new Set : new Set((0, gn.o)(pC).filter((CC => !/\d\s*%/.test(CC))).flatMap((CC => [...CC.matchAll(new RegExp(String.raw`\b${RC.numberWord}\s*:?\s*(\d{1,3})\b${ra}`, "gi"))].map((CC => CC[1])))));
```

#### 2265. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25304` → after: `L25396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25396) · [Before (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25304)

```diff
-   const Vk = null !== (ik = null === jk || void 0 === jk ? void 0 : jk[2]) && void 0 !== ik ? ik : 1 === dk.size ? [...dk][0] : null;
+   const hC = null !== (ZC = null === iC || void 0 === iC ? void 0 : iC[2]) && void 0 !== ZC ? ZC : 1 === eC.size ? [...eC][0] : null;
```

#### 2266. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25313` → after: `L25405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25405) · [Before (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25313)

```diff
-   })) && Sc.test(kk), zk = null !== (Dk = yk.mention) && void 0 !== Dk ? Dk : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && nt.test(CC), HC = null !== (QC = RC.mention) && void 0 !== QC ? QC : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2267. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25317-L25319` → after: `L25409-L25411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25409-L25411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25409-L25411) · [Before (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25317-L25319)

```diff
-         ik = null === ek ? kk : kk.slice(ek[0].length),
-         Dk = (null === ek ? (0, lb.r)(ik, /\s+(?=[A-Z`"])/g, (0, lb.l)(".!?")) : [ik]).some((kk => {
-           const ek = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(kk) ? `${Qk} ${kk}` : kk;
+         ZC = null === zC ? CC : CC.slice(zC[0].length),
+         QC = (null === zC ? (0, Sn.z)(ZC, /\s+(?=[A-Z`"])/g, (0, Sn.s)(".!?")) : [ZC]).some((CC => {
+           const zC = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(CC) ? `${EC} ${CC}` : CC;
```

#### 2268. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25333` → after: `L25425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25425) · [Before (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25333)

```diff
-           literal: `${Dk}${/[.!?]$/.test(Dk)||""===Dk?" ":". "}${ek}`
+           literal: `${QC}${/[.!?]$/.test(QC)||""===QC?" ":". "}${zC}`
```

#### 2269. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25337` → after: `L25429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25429) · [Before (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25337)

```diff
-         literal: `. ${ek}`
+         literal: `. ${zC}`
```

#### 2270. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25348` → after: `L25440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25440) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25348)

```diff
-       return ik.map((kk => "literal" in kk ? (0, wb.M)(kk.literal, ek) : kk.code)).join(" + ")
+       return ZC.map((CC => "literal" in CC ? (0, gn.U)(CC.literal, zC) : CC.code)).join(" + ")
```

#### 2271. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25350-L25351` → after: `L25442-L25443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25442-L25443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25442-L25443) · [Before (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25350-L25351)

```diff
-     Wk = `${uk.line.slice(0,uk.start)}${uk.isList?`[${ak}]`:ak}${uk.line.slice(uk.end)}`,
-     tk = null === Vk ? nk.map((kk => kk === Uk.line ? `${Uk.indent}${Wk}` : kk)) : [`${Uk.indent}if (${null!==(fk=null===(Sk=Uk.condition)||void 0===Sk?void 0:Sk.trim())&&void 0!==fk?fk:`${cB(TB(Ak))} === ${Vk}`}) ${Wk}`, `${Uk.indent}else ${uk.line}`],
+     rC = `${YC.line.slice(0,YC.start)}${YC.isList?`[${uC}]`:uC}${YC.line.slice(YC.end)}`,
+     sC = null === hC ? MC.map((CC => CC === gC.line ? `${gC.indent}${rC}` : CC)) : [`${gC.indent}if (${null!==(wC=null===(bC=gC.condition)||void 0===bC?void 0:bC.trim())&&void 0!==wC?wC:`${Da(ja(IC))} === ${hC}`}) ${rC}`, `${gC.indent}else ${YC.line}`],
```

#### 2272. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25353` → after: `L25445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25445) · [Before (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25353)

```diff
-     Bk = vk ? `Change your ${yk.noun} message (${Fk}) to "${Uk.words}"${Xk}` : `Change your ${yk.noun} message (${Fk}) so ${null===Vk?"":`at ${yk.numberWord} ${Vk} `}it also says "${Uk.words}"${Xk}`,
+     aC = lC ? `Change your ${RC.noun} message (${KC}) to "${gC.words}"${TC}` : `Change your ${RC.noun} message (${KC}) so ${null===hC?"":`at ${RC.numberWord} ${hC} `}it also says "${gC.words}"${TC}`,
```

#### 2273. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25372` → after: `L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25464) · [Before (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25372)

```diff
-   const Dk = null !== (ik = null === ek || void 0 === ek ? void 0 : ek.messages) && void 0 !== ik ? ik : [];
+   const QC = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.messages) && void 0 !== ZC ? ZC : [];
```

#### 2274. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25397` → after: `L25489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25489) · [Before (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25397)

```diff
-     return Kc(null !== fk && void 0 !== fk ? fk : Sk, void 0 === bk ? Pk ? "players coming back" : "keeping players" : Pk ? "how many players come back" : "how many players stay")
+     return Nt(null !== wC && void 0 !== wC ? wC : bC, void 0 === nC ? oC ? "players coming back" : "keeping players" : oC ? "how many players come back" : "how many players stay")
```

#### 2275. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25411-L25412` → after: `L25503-L25504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25503-L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25503-L25504) · [Before (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25411-L25412)

```diff
-       const fk = null !== (ik = kk.match(Hc)) && void 0 !== ik ? ik : [],
-         Sk = null !== (Dk = ek.match(Hc)) && void 0 !== Dk ? Dk : [],
+       const wC = null !== (ZC = CC.match(pt)) && void 0 !== ZC ? ZC : [],
+         bC = null !== (QC = zC.match(pt)) && void 0 !== QC ? QC : [],
```

#### 2276. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25425` → after: `L25517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25517) · [Before (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25425)

```diff
-       return "" === Pk ? rk : [...rk, Pk]
+       return "" === oC ? fC : [...fC, oC]
```

#### 2277. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25450` → after: `L25542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25542) · [Before (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25450)

```diff
-       fk.set(Mk.name, (null !== (Sk = fk.get(Mk.name)) && void 0 !== Sk ? Sk : 0) + 1)
+       wC.set(FC.name, (null !== (bC = wC.get(FC.name)) && void 0 !== bC ? bC : 0) + 1)
```

#### 2278. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25457-L25459` → after: `L25549-L25551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25549-L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25549-L25551) · [Before (L25457-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25457-L25459)

```diff
-         Kk = (0, wb.p)(Mk.name),
-         xk = null !== (bk = Mk.usedIn) && void 0 !== bk ? bk : "",
-         nk = void 0 === Sk ? null : null !== (rk = Ox(Sk)) && void 0 !== rk ? rk : null;
+         WC = (0, gn.y)(FC.name),
+         NC = null !== (nC = FC.usedIn) && void 0 !== nC ? nC : "",
+         MC = void 0 === bC ? null : null !== (fC = ON(bC)) && void 0 !== fC ? fC : null;
```

#### 2279. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25466` → after: `L25558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25558) · [Before (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25466)

```diff
-         value: null !== (Pk = null === Sk || void 0 === Sk ? void 0 : Sk.value) && void 0 !== Pk ? Pk : kk,
+         value: null !== (oC = null === bC || void 0 === bC ? void 0 : bC.value) && void 0 !== oC ? oC : CC,
```

#### 2280. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25468` → after: `L25560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25560) · [Before (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25468)

```diff
-         codeKind: null === Hk ? nk : null,
+         codeKind: null === SC ? MC : null,
```

#### 2281. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25470` → after: `L25562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25562) · [Before (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25470)

```diff
-         hazard: null !== (mk = null === Hk || void 0 === Hk ? void 0 : Hk.hazard) && void 0 !== mk ? mk : null,
+         hazard: null !== (qC = null === SC || void 0 === SC ? void 0 : SC.hazard) && void 0 !== qC ? qC : null,
```

#### 2282. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25478` → after: `L25570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25570) · [Before (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25478)

```diff
-   }(Sk), Hk), pk = dn(oV(Sk), Hk), yk = null !== (ik = null === bk || void 0 === bk ? void 0 : bk.places) && void 0 !== ik ? ik : Uc, Yk = null !== (Dk = null === Pk || void 0 === Pk ? void 0 : Pk.grounds) && void 0 !== Dk ? Dk : null, Lk = (() => {
+   }(bC), SC), GC = hM(th(bC), SC), RC = null !== (ZC = null === nC || void 0 === nC ? void 0 : nC.places) && void 0 !== ZC ? ZC : St, AC = null !== (QC = null === oC || void 0 === oC ? void 0 : oC.grounds) && void 0 !== QC ? QC : null, xC = (() => {
```

#### 2283. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25499` → after: `L25591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25591) · [Before (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25499)

```diff
-             const ek = (null !== (fk = Dk.get(kk.name)) && void 0 !== fk ? fk : []).filter((kk => JSON.stringify(kk.selection) !== JSON.stringify(wk.selection)));
+             const zC = (null !== (wC = QC.get(CC.name)) && void 0 !== wC ? wC : []).filter((CC => JSON.stringify(CC.selection) !== JSON.stringify(pC.selection)));
```

#### 2284. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25511` → after: `L25603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25603) · [Before (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25511)

```diff
-         const [bk, [rk]] = Sk[0], Pk = new RegExp(`${(0,wb.e)(bk)}(?![\\w$])`);
+         const [nC, [fC]] = bC[0], oC = new RegExp(`${(0,gn.d)(nC)}(?![\\w$])`);
```

#### 2285. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25525` → after: `L25617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25617) · [Before (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25525)

```diff
-           if (mk || !Mk || /^\s*[#|]/.test(lk) || ey.test(lk) || 0 === (0, lb.e)(lk.replace(/\[\[[^\]\n]+\]\]/g, " "), Pk, lb.i).length) continue;
+           if (qC || !FC || /^\s*[#|]/.test(PC) || CR.test(PC) || 0 === (0, Sn.f)(PC.replace(/\[\[[^\]\n]+\]\]/g, " "), oC, Sn.n).length) continue;
```

#### 2286. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25530` → after: `L25622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25622) · [Before (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25530)

```diff
-           const ek = null !== (xk = null === (nk = ky.exec(lk)) || void 0 === nk ? void 0 : nk[0].length) && void 0 !== xk ? xk : 0,
+           const zC = null !== (NC = null === (MC = VG.exec(PC)) || void 0 === MC ? void 0 : MC[0].length) && void 0 !== NC ? NC : 0,
```

#### 2287. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25538` → after: `L25630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25630) · [Before (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25538)

```diff
-             Sk = fk + (null !== (Uk = null === (Hk = PV.exec(lk.slice(fk))) || void 0 === Hk ? void 0 : Hk[0].length) && void 0 !== Uk ? Uk : 0),
+             bC = wC + (null !== (gC = null === (SC = nh.exec(PC.slice(wC))) || void 0 === SC ? void 0 : SC[0].length) && void 0 !== gC ? gC : 0),
```

#### 2288. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25540-L25541` → after: `L25632-L25633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25632-L25633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25632-L25633) · [Before (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25540-L25541)

```diff
-             pk = `${mV(rk)} [[Heatmap]].`;
-           return Kk[wk] = `${lk.slice(0,Sk)}${bk} ${pk}${lk.slice(Sk)}`, {
+             GC = `${fh(fC)} [[Heatmap]].`;
+           return WC[pC] = `${PC.slice(0,bC)}${nC} ${GC}${PC.slice(bC)}`, {
```

#### 2289. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25557` → after: `L25649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25649) · [Before (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25557)

```diff
-       }(Pk.markdown, [...null !== xk && void 0 !== xk ? xk : [], ...null !== nk && void 0 !== nk ? nk : []], Sk);
+       }(oC.markdown, [...null !== NC && void 0 !== NC ? NC : [], ...null !== MC && void 0 !== MC ? MC : []], bC);
```

#### 2290. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25565-L25567` → after: `L25657-L25659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25657-L25659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25657-L25659) · [Before (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25565-L25567)

```diff
-     const kk = [...(null !== Kk && void 0 !== Kk ? Kk : []).flatMap((kk => [kk.reason, kk.typical])), ...Lk.repairs.map((kk => kk.to))];
-     return xp(mk, null === Mk ? kk : [Mk.change, ...kk])
-   })(), Ak = new Set((null !== Kk && void 0 !== Kk ? Kk : []).flatMap((kk => "good" === kk.verdict ? [kk.key] : []))), jk = el(rk), sk = wd(Yk, Sk), dk = Lk.markdown, Vk = null === Pk ? dk : ut(dk, Pk, Ak, "young" === rk, Ck).markdown, Fk = jk ? Bs(Vk, (uk = bk, null === uk ? []  … [truncated]
+     const CC = [...(null !== WC && void 0 !== WC ? WC : []).flatMap((CC => [CC.reason, CC.typical])), ...xC.repairs.map((CC => CC.to))];
+     return NG(qC, null === FC ? CC : [FC.change, ...CC])
+   })(), IC = new Set((null !== WC && void 0 !== WC ? WC : []).flatMap((CC => "good" === CC.verdict ? [CC.key] : []))), iC = zP(fC), vC = ge(AC, bC), eC = xC.markdown, hC = null === oC ? eC : ds(eC, oC, IC, "young" === fC, JC).markdown, KC = iC ? av(hC, (YC = nC, null === YC ? []  … [truncated]
```

#### 2291. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25586` → after: `L25678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25678) · [Before (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25586)

```diff
-         markdown: 0 === fk.length ? kk : Sk,
+         markdown: 0 === wC.length ? CC : bC,
```

#### 2292. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25615` → after: `L25707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25707) · [Before (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25615)

```diff
-         return `${kk.slice(0,fk.end)}${bk}${kk.slice(Sk)}`
+         return `${CC.slice(0,wC.end)}${nC}${CC.slice(bC)}`
```

#### 2293. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25653` → after: `L25745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25745) · [Before (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25653)

```diff
-         markdown: 0 === ek.length ? kk : ik,
+         markdown: 0 === zC.length ? CC : ZC,
```

#### 2294. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25670` → after: `L25762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25762) · [Before (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25670)

```diff
-           const ek = `the ${kk}`;
+           const zC = `the ${CC}`;
```

#### 2295. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25681` → after: `L25773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25773) · [Before (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25681)

```diff
-         of ik) fk = (0, lb.p)(fk, new RegExp(`(${(0,wb.e)(Sk)})(?![\\w-])`, "gi"), (0, lb.h)("\\w-"), (kk => {
+         of ZC) wC = (0, Sn.v)(wC, new RegExp(`(${(0,gn.d)(bC)})(?![\\w-])`, "gi"), (0, Sn.l)("\\w-"), (CC => {
```

#### 2296. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25683` → after: `L25775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25775) · [Before (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25683)

```diff
-         return /^T/.test(ek) ? `T${bk.slice(1)}` : bk
+         return /^T/.test(zC) ? `T${nC.slice(1)}` : nC
```

#### 2297. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25690` → after: `L25782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25782) · [Before (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25690)

```diff
-     Ek = [...null !== xk && void 0 !== xk ? xk : [], ...null !== nk && void 0 !== nk ? nk : []].flatMap((kk => "deaths" === kk.kind ? [kk.square] : [])),
+     XC = [...null !== NC && void 0 !== NC ? NC : [], ...null !== MC && void 0 !== MC ? MC : []].flatMap((CC => "deaths" === CC.kind ? [CC.square] : [])),
```

#### 2298. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25693` → after: `L25785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25785) · [Before (L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25693)

```diff
-       if (null === ek || void 0 === ek || kk.length > wb.m) return {
+       if (null === zC || void 0 === zC || CC.length > gn.r) return {
```

#### 2299. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25695` → after: `L25787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25787) · [Before (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25695)

```diff
-         fU: []
+         lM: []
```

#### 2300. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25721` → after: `L25813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25813) · [Before (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25721)

```diff
-         fU: []
+         lM: []
```

#### 2301. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25724` → after: `L25816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25816) · [Before (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25724)

```diff
-         fU: Dk
+         lM: QC
```

#### 2302. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25737` → after: `L25829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25829) · [Before (L25737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25737)

```diff
-       if (null === ek || void 0 === ek || kk.length > wb.m) return {
+       if (null === zC || void 0 === zC || CC.length > gn.r) return {
```

#### 2303. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25748` → after: `L25840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25840) · [Before (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25748)

```diff
-         rk = `${null!==ik&&void 0!==ik?ik:""}\n${bk}\n${bk.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         fC = `${null!==ZC&&void 0!==ZC?ZC:""}\n${nC}\n${nC.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2304. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25757` → after: `L25849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25849) · [Before (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25757)

```diff
-     }(ak, Sk, null !== (fk = null === sk || void 0 === sk ? void 0 : sk.text) && void 0 !== fk ? fk : null, Wk).markdown,
+     }(uC, bC, null !== (wC = null === vC || void 0 === vC ? void 0 : vC.text) && void 0 !== wC ? wC : null, rC).markdown,
```

#### 2305. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25761` → after: `L25853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25853) · [Before (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25761)

```diff
-           if (null === ek || void 0 === ek || kk.length > wb.m || 0 === (null !== (ik = ek.messages) && void 0 !== ik ? ik : []).length) return {
+           if (null === zC || void 0 === zC || CC.length > gn.r || 0 === (null !== (ZC = zC.messages) && void 0 !== ZC ? ZC : []).length) return {
```

#### 2306. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25799` → after: `L25891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25891) · [Before (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25799)

```diff
-         fk = null === Dk || null === Sk ? Dk : {
+         wC = null === QC || null === bC ? QC : {
```

#### 2307. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25824` → after: `L25916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25916) · [Before (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25824)

```diff
-           return null === kk || 0 === ik.length ? kk : {
+           return null === CC || 0 === ZC.length ? CC : {
```

#### 2308. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25828` → after: `L25920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25920) · [Before (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25828)

```diff
-         }(null !== (kk = null === Pk || void 0 === Pk ? void 0 : Pk.grounds) && void 0 !== kk ? kk : null, Lk.repairs),
+         }(null !== (CC = null === oC || void 0 === oC ? void 0 : oC.grounds) && void 0 !== CC ? CC : null, xC.repairs),
```

#### 2309. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25836` → after: `L25928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25928) · [Before (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25836)

```diff
-             ik = null === bk ? ek : ay(ek, bk, Ck).markdown;
+             ZC = null === nC ? zC : cR(zC, nC, JC).markdown;
```

#### 2310. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25874` → after: `L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R25966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L25966) · [Before (L25874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25874)

```diff
-         layout: 0 === ek ? Xk : {
+         layout: 0 === zC ? TC : {
```

#### 2311. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25909` → after: `L26001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26001) · [Before (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25909)

```diff
-     Jk = null === Ck || null === Zk || null === Nk || Nk === Zk ? Ck : xp(Ck, wc(Zk, Nk));
+     kC = null === JC || null === jC || null === BC || BC === jC ? JC : NG(JC, Pt(jC, BC));
```

#### 2312. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25953` → after: `L26045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26045) · [Before (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25953)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,wb.e)(ek)}(?![\\w$])`, "i").test(kk)
+   return new RegExp(`(?:^|[^\\w$])${(0,gn.d)(zC)}(?![\\w$])`, "i").test(CC)
```

#### 2313. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25961` → after: `L26053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26053) · [Before (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25961)

```diff
-   return (0, lb.e)(kk, /[A-Za-z_$][\w$]*(?![\w$])/g, lb.i).map((kk => {
+   return (0, Sn.f)(CC, /[A-Za-z_$][\w$]*(?![\w$])/g, Sn.n).map((CC => {
```

#### 2314. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25970` → after: `L26062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26062) · [Before (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25970)

```diff
-     Dk = null !== (ek = new RegExp(String.raw`^\s*${ik}\s*===?\s*(-?\d+)\s*$`).exec(kk)) && void 0 !== ek ? ek : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${ik}\s*$`).exec(kk);
+     QC = null !== (zC = new RegExp(String.raw`^\s*${ZC}\s*===?\s*(-?\d+)\s*$`).exec(CC)) && void 0 !== zC ? zC : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${ZC}\s*$`).exec(CC);
```

#### 2315. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25981` → after: `L26073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26073) · [Before (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25981)

```diff
-   const Dk = new Set([...ek.callbacks, ...null !== (ik = ek.functions) && void 0 !== ik ? ik : []].map((kk => {
+   const QC = new Set([...zC.callbacks, ...null !== (ZC = zC.functions) && void 0 !== ZC ? ZC : []].map((CC => {
```

#### 2316. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L25999` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26091) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L25999)

```diff
-         const Sk = new RegExp(`^${(0,wb.e)(ek)} (\\d{1,4})$`).exec(kk);
+         const bC = new RegExp(`^${(0,gn.d)(zC)} (\\d{1,4})$`).exec(CC);
```

#### 2317. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26006` → after: `L26098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26098) · [Before (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26006)

```diff
-         else if (kk.startsWith(`${ek}: `) && kk.length > ek.length + 2) {
+         else if (CC.startsWith(`${zC}: `) && CC.length > zC.length + 2) {
```

#### 2318. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26036` → after: `L26128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26128) · [Before (L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26036)

```diff
-   if (null === kk || null === ek || null === Dk || void 0 === Dk || kk.length > wb.o || "" === kk.trim()) return null;
+   if (null === CC || null === zC || null === QC || void 0 === QC || CC.length > gn.u || "" === CC.trim()) return null;
```

#### 2319. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26038` → after: `L26130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26130) · [Before (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26038)

```diff
-   const bk = tc(fk, `${ik}\n${ek}`, Dk)[0],
+   const nC = Tt(wC, `${ZC}\n${zC}`, QC)[0],
```

#### 2320. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26046` → after: `L26138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26138) · [Before (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26046)

```diff
-       const Dk = [...ek.callbacks, ...null !== (ik = ek.functions) && void 0 !== ik ? ik : []].filter((ek => ek.name === kk));
+       const QC = [...zC.callbacks, ...null !== (ZC = zC.functions) && void 0 !== ZC ? ZC : []].filter((zC => zC.name === CC));
```

#### 2321. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26074` → after: `L26166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26166) · [Before (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26074)

```diff
-       const mk = null !== (Dk = null === (fk = kk.valueExpression) || void 0 === fk ? void 0 : fk.trim()) && void 0 !== Dk ? Dk : null;
+       const qC = null !== (QC = null === (wC = CC.valueExpression) || void 0 === wC ? void 0 : wC.trim()) && void 0 !== QC ? QC : null;
```

#### 2322. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26080` → after: `L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26172) · [Before (L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26080)

```diff
-             fk = wk === sc[0] || wk === sc[3] || Dk !== ik || /^[A-Za-z_$][\w$.]*$/.test(null !== ik && void 0 !== ik ? ik : "");
+             wC = pC === et[0] || pC === et[3] || QC !== ZC || /^[A-Za-z_$][\w$.]*$/.test(null !== ZC && void 0 !== ZC ? ZC : "");
```

#### 2323. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26082` → after: `L26174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26174) · [Before (L26082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26082)

```diff
-             Pk = `${Dk} === ${Number(ek)}`;
+             oC = `${QC} === ${Number(zC)}`;
```

#### 2324. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26087-L26088` → after: `L26179-L26180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26179-L26180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26179-L26180) · [Before (L26087-L26088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26087-L26088)

```diff
-         Kk = null === Mk ? null : null !== (Sk = null !== (bk = null !== (rk = Mk[1]) && void 0 !== rk ? rk : Mk[2]) && void 0 !== bk ? bk : Mk[3]) && void 0 !== Sk ? Sk : null,
-         xk = null !== Kk && void 0 !== Kk ? Kk : kk.numberExpression,
+         WC = null === FC ? null : null !== (bC = null !== (nC = null !== (fC = FC[1]) && void 0 !== fC ? fC : FC[2]) && void 0 !== nC ? nC : FC[3]) && void 0 !== bC ? bC : null,
+         NC = null !== WC && void 0 !== WC ? WC : CC.numberExpression,
```

#### 2325. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26095-L26096` → after: `L26187-L26188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26187-L26188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26187-L26188) · [Before (L26095-L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26095-L26096)

```diff
-           Dk = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,wb.e)(kk)}(?![\\w$])`).test(mk);
-         hc(mk).includes(kk) && ik >= 0 && (null !== Kk || !Dk) && (Pk = `${kk} === ${ik}`)
+           QC = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,gn.d)(CC)}(?![\\w$])`).test(qC);
+         ut(qC).includes(CC) && ZC >= 0 && (null !== WC || !QC) && (oC = `${CC} === ${ZC}`)
```

#### 2326. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26099` → after: `L26191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26191) · [Before (L26099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26099)

```diff
-       return null !== Pk && hc(Pk).every((kk => Hk.has(kk))) ? Pk : null
+       return null !== oC && ut(oC).every((CC => SC.has(CC))) ? oC : null
```

#### 2327. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26114` → after: `L26206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26206) · [Before (L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26114)

```diff
-   const Ak = (null !== (Sk = Dk.messages) && void 0 !== Sk ? Sk : []).filter((kk => {
+   const IC = (null !== (bC = QC.messages) && void 0 !== bC ? bC : []).filter((CC => {
```

#### 2328. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26118` → after: `L26210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26210) · [Before (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26118)

```diff
-     jk = 1 !== Ak.length || yc.test(`${ik}\n${ek}`) ? rk : Ak[0].at;
+     iC = 1 !== IC.length || At.test(`${ZC}\n${zC}`) ? fC : IC[0].at;
```

#### 2329. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26132` → after: `L26224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26224) · [Before (L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26132)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${ik}(?![\\w$])`).test(kk) || (0, lb.e)(kk, new RegExp(`${ik}\\s*=(?![=>])`), lb.i).length > 0 || jU(kk, ek) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${ik}\\s*\\([^()]*\\)\\s*\\{`, "m").test(kk)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${ZC}(?![\\w$])`).test(CC) || (0, Sn.f)(CC, new RegExp(`${ZC}\\s*=(?![=>])`), Sn.n).length > 0 || ig(CC, zC) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${ZC}\\s*\\([^()]*\\)\\s*\\{`, "m").test(CC)
```

#### 2330. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26136` → after: `L26228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26228) · [Before (L26136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26136)

```diff
-   if (null === kk || null === ek || void 0 === ek || void 0 === ek.declaredNames || kk.length > wb.o) return [];
+   if (null === CC || null === zC || void 0 === zC || void 0 === zC.declaredNames || CC.length > gn.u) return [];
```

#### 2331. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26141` → after: `L26233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26233) · [Before (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26141)

```diff
-   for (const [, Sk] of(0, lb.e)(Dk, Tc, lb.i)) {
+   for (const [, bC] of(0, Sn.f)(QC, yt, Sn.n)) {
```

#### 2332. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26152` → after: `L26244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26244) · [Before (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26152)

```diff
-   if (null === kk || null === ek || void 0 === ek || kk.length > wb.o || !kk.includes("/") || ! function(kk) {
+   if (null === CC || null === zC || void 0 === zC || CC.length > gn.u || !CC.includes("/") || ! function(CC) {
```

#### 2333. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26162` → after: `L26254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26254) · [Before (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26162)

```diff
-   const Dk = [...ek.playerText, ...(null !== (ik = ek.messages) && void 0 !== ik ? ik : []).map((kk => {
+   const QC = [...zC.playerText, ...(null !== (ZC = zC.messages) && void 0 !== ZC ? ZC : []).map((CC => {
```

#### 2334. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26171-L26172` → after: `L26263-L26264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26263-L26264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26263-L26264) · [Before (L26171-L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26171-L26172)

```diff
-     const kk = null !== (Sk = null !== (bk = null !== (rk = Pk[1]) && void 0 !== rk ? rk : Pk[2]) && void 0 !== bk ? bk : Pk[3]) && void 0 !== Sk ? Sk : Pk[4];
-     for (const [ek] of(0, lb.e)(kk, gc, (0, lb.h)("\\w/:."))) {
+     const CC = null !== (bC = null !== (nC = null !== (fC = oC[1]) && void 0 !== fC ? fC : oC[2]) && void 0 !== nC ? nC : oC[3]) && void 0 !== bC ? bC : oC[4];
+     for (const [zC] of(0, Sn.f)(CC, Ot, (0, Sn.l)("\\w/:."))) {
```

#### 2335. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26203` → after: `L26295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26295) · [Before (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26203)

```diff
-     for (const rk of (0, lb.e)(kk, IL, lb.i)) aL(rk[0], ek, ik, Dk) || (rk.index > bk && Sk.push({
+     for (const fC of (0, Sn.f)(CC, dx, Sn.n)) cx(fC[0], zC, ZC, QC) || (fC.index > nC && bC.push({
```

#### 2336. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26213` → after: `L26305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26305) · [Before (L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26213)

```diff
-     title: !0 === kk.isApiCall ? rk : bk("Not found in your code"),
+     title: !0 === CC.isApiCall ? fC : nC("Not found in your code"),
```

#### 2337. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26215` → after: `L26307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26307) · [Before (L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26215)

```diff
-   }, `${ek}-name-${ik}`) : kk.text))
+   }, `${zC}-name-${ZC}`) : CC.text))
```

#### 2338. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26242` → after: `L26334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26334) · [Before (L26242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26242)

```diff
-   }, `${ik}-number-${ek}`)] : kT(kk.text, `${ik}-${ek}`, Dk)))
+   }, `${ZC}-number-${zC}`)] : ZD(CC.text, `${ZC}-${zC}`, QC)))
```

#### 2339. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26246` → after: `L26338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26338) · [Before (L26246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26246)

```diff
-   return null === kk.suggestion ? ek("Not a Bloxd item") : `${ek("Not a Bloxd item")}: ${ek("Bloxd writes it")} "${kk.suggestion}"`
+   return null === CC.suggestion ? zC("Not a Bloxd item") : `${zC("Not a Bloxd item")}: ${zC("Bloxd writes it")} "${CC.suggestion}"`
```

#### 2340. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26257` → after: `L26349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26349) · [Before (L26257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26257)

```diff
-   for (const mk of bk) rk.push(...kT(kk.slice(Pk, mk.start), `${ek}-${Pk}`, ik, Dk)), rk.push((0, xe.jsx)("span", {
+   for (const qC of nC) fC.push(...ZD(CC.slice(oC, qC.start), `${zC}-${oC}`, ZC, QC)), fC.push((0, Wz.jsx)("span", {
```

#### 2341. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26261-L26262` → after: `L26353-L26354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26353-L26354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26353-L26354) · [Before (L26261-L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26261-L26262)

```diff
-   }, `${ek}-item-${mk.start}`)), Pk = mk.end;
-   return rk.push(...kT(kk.slice(Pk), `${ek}-${Pk}`, ik, Dk)), rk
+   }, `${zC}-item-${qC.start}`)), oC = qC.end;
+   return fC.push(...ZD(CC.slice(oC), `${zC}-${oC}`, ZC, QC)), fC
```

#### 2342. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26277` → after: `L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26369) · [Before (L26277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26277)

```diff
-     xk <= Sk || (Sk > rk && bk.push(...eT(kk.slice(rk, Sk), ek + kk.slice(0, rk), `${Dk}-${rk}`, fk)), bk.push((0, xe.jsx)("span", {
+     NC <= bC || (bC > fC && nC.push(...QD(CC.slice(fC, bC), zC + CC.slice(0, fC), `${QC}-${fC}`, wC)), nC.push((0, Wz.jsx)("span", {
```

#### 2343. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26281` → after: `L26373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26373) · [Before (L26281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26281)

```diff
-     }, `${Dk}-marked-${Sk}`)), rk = xk)
+     }, `${QC}-marked-${bC}`)), fC = NC)
```

#### 2344. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26283` → after: `L26375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26375) · [Before (L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26283)

```diff
-   return 0 === rk ? eT(kk, ek, Dk, fk) : (rk < kk.length && bk.push(...eT(kk.slice(rk), ek + kk.slice(0, rk), `${Dk}-${rk}`, fk)), bk)
+   return 0 === fC ? QD(CC, zC, QC, wC) : (fC < CC.length && nC.push(...QD(CC.slice(fC), zC + CC.slice(0, fC), `${QC}-${fC}`, wC)), nC)
```

#### 2345. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26294` → after: `L26386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26386) · [Before (L26294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26294)

```diff
-     title: `${ik("What your code says")}: ${ek.hint}`,
+     title: `${ZC("What your code says")}: ${zC.hint}`,
```

#### 2346. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26308` → after: `L26400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26400) · [Before (L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26308)

```diff
-     title: `${ik("Worked out by Studio from your code")}:\n${ek.hint}`,
+     title: `${ZC("Worked out by Studio from your code")}:\n${zC.hint}`,
```

#### 2347. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26348` → after: `L26440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26440) · [Before (L26348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26348)

```diff
-       }, `${ek}-note-${bk}`))
+       }, `${zC}-note-${nC}`))
```

#### 2348. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26354-L26355` → after: `L26446-L26447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26446-L26447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26446-L26447) · [Before (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26354-L26355)

```diff
-         const Pk = Math.min(mk, Math.max(Mk, null !== (Kk = null === (xk = Sk[bk]) || void 0 === xk ? void 0 : xk.end) && void 0 !== Kk ? Kk : mk));
-         Pk > Mk && Dk.push(...fT(kk.slice(Mk, Pk), kk.slice(0, Mk), Mk, `${ek}-${Mk}`, ik, fk)), Mk = Pk, rk(Mk)
+         const oC = Math.min(qC, Math.max(FC, null !== (WC = null === (NC = bC[nC]) || void 0 === NC ? void 0 : NC.end) && void 0 !== WC ? WC : qC));
+         oC > FC && QC.push(...nD(CC.slice(FC, oC), CC.slice(0, FC), FC, `${zC}-${FC}`, ZC, wC)), FC = oC, fC(FC)
```

#### 2349. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26359` → after: `L26451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26451) · [Before (L26359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26359)

```diff
-   for (const nk of kk.matchAll(Cz.e)) {
+   for (const MC of CC.matchAll(JH.d)) {
```

#### 2350. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26361-L26362` → after: `L26453-L26454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26453-L26454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26453-L26454) · [Before (L26361-L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26361-L26362)

```diff
-     const [, Sk, bk, Uk, Hk, wk, lk] = nk, pk = `${ek}-${nk.index}`, yk = kk.slice(0, nk.index);
-     if (void 0 !== Sk) Dk.push((0, Cz.i)(Sk, bk));
+     const [, bC, nC, gC, SC, pC, PC] = MC, GC = `${zC}-${MC.index}`, RC = CC.slice(0, MC.index);
+     if (void 0 !== bC) QC.push((0, JH.g)(bC, nC));
```

#### 2351. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26366` → after: `L26458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26458) · [Before (L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26366)

```diff
-         children: fT(null !== (Mk = null !== Uk && void 0 !== Uk ? Uk : Hk) && void 0 !== Mk ? Mk : "", yk, nk.index + 2, pk, ik, fk)
+         children: nD(null !== (FC = null !== gC && void 0 !== gC ? gC : SC) && void 0 !== FC ? FC : "", RC, MC.index + 2, GC, ZC, wC)
```

#### 2352. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26380` → after: `L26472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26472) · [Before (L26380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26380)

```diff
-           children: DT(null !== lk && void 0 !== lk ? lk : "", pk, ik, "code")
+           children: bD(null !== PC && void 0 !== PC ? PC : "", GC, ZC, "code")
```

#### 2353. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26382` → after: `L26474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26474) · [Before (L26382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26382)

```diff
-         Sk = void 0 === kk ? UU(null !== lk && void 0 !== lk ? lk : "") : null;
+         bC = void 0 === CC ? gg(null !== PC && void 0 !== PC ? PC : "") : null;
```

#### 2354. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26385` → after: `L26477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26477) · [Before (L26385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26385)

```diff
-         title: (Kk = Sk, xk = ik.t, `${xk("World Code has no")} ${Kk}, ${xk("so this code won't run")}`),
+         title: (WC = bC, NC = ZC.t, `${NC("World Code has no")} ${WC}, ${NC("so this code won't run")}`),
```

#### 2355. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26387` → after: `L26479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26479) · [Before (L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26387)

```diff
-       }, pk) : void 0 === kk ? ek : (0, xe.jsx)("span", {
+       }, GC) : void 0 === CC ? zC : (0, Wz.jsx)("span", {
```

#### 2356. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26412` → after: `L26504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26504) · [Before (L26412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26412)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2357. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26415` → after: `L26507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26507) · [Before (L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26415)

```diff
-     }), void 0 === Pk ? rk : (0, xe.jsxs)(xe.Fragment, {
+     }), void 0 === oC ? fC : (0, Wz.jsxs)(Wz.Fragment, {
```

#### 2358. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26438` → after: `L26530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26530) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26438)

```diff
-   nT = new RegExp(`${KT}([${String.fromCharCode(xT)}-${String.fromCharCode(63743)}])`, "g");
+   SD = new RegExp(`${MD}([${String.fromCharCode(gD)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2359. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26442` → after: `L26534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26534) · [Before (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26442)

```diff
-     Dk = kk.replace(mT, ((kk, ek) => MT.test(ek) ? kk : ek.startsWith("[[") && ek.endsWith("]]") && null !== PD(ek.slice(2, -2)) ? ek : (ik.push(kk), KT + String.fromCharCode(xT + ik.length - 1)))),
+     QC = CC.replace(WD, ((CC, zC) => ND.test(zC) ? CC : zC.startsWith("[[") && zC.endsWith("]]") && null !== bQ(zC.slice(2, -2)) ? zC : (ZC.push(CC), MD + String.fromCharCode(gD + ZC.length - 1)))),
```

#### 2360. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26449` → after: `L26541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26541) · [Before (L26449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26449)

```diff
-         "" !== kk && ("text" === (null === ik || void 0 === ik ? void 0 : ik.kind) ? ik.text += kk : ek.push({
+         "" !== CC && ("text" === (null === ZC || void 0 === ZC ? void 0 : ZC.kind) ? ZC.text += CC : zC.push({
```

#### 2361. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26467` → after: `L26559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26559) · [Before (L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26467)

```diff
-         const xk = null !== (Sk = null === (bk = MD.exec(kk.slice(Dk))) || void 0 === bk ? void 0 : bk[0]) && void 0 !== Sk ? Sk : "";
+         const NC = null !== (bC = null === (nC = fQ.exec(CC.slice(QC))) || void 0 === nC ? void 0 : nC[0]) && void 0 !== bC ? bC : "";
```

#### 2362. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26491` → after: `L26583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26583) · [Before (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26491)

```diff
-       const nk = Ux(Number((null !== (xk = null !== fk && void 0 !== fk ? fk : bk) && void 0 !== xk ? xk : "").replace(/,/g, "")), null !== Sk && void 0 !== Sk ? Sk : rk, Number(Pk.replace(/,/g, "")), mk);
+       const MC = PN(Number((null !== (NC = null !== wC && void 0 !== wC ? wC : nC) && void 0 !== NC ? NC : "").replace(/,/g, "")), null !== bC && void 0 !== bC ? bC : fC, Number(oC.replace(/,/g, "")), qC);
```

#### 2363. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26496` → after: `L26588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26588) · [Before (L26496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26496)

```diff
-       return void 0 === lk ? kk : `${wx(lk,ek)}${kk.slice(ek.length)}`
+       return void 0 === PC ? CC : `${RN(PC,zC)}${CC.slice(zC.length)}`
```

#### 2364. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26525` → after: `L26617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26617) · [Before (L26525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26525)

```diff
-     return (0, lb.p)(kk, wT, lT, (kk => {
+     return (0, Sn.v)(CC, GD, RD, (CC => {
```

#### 2365. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26531-L26532` → after: `L26623-L26624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26623-L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26623-L26624) · [Before (L26531-L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26531-L26532)

```diff
-       const bk = null !== Dk && void 0 !== Dk ? Dk : "*";
-       return (null !== fk && void 0 !== fk ? fk : Sk).split(/(\[\[[^\]\n]+\]\])/).map(((kk, ek) => {
+       const nC = null !== QC && void 0 !== QC ? QC : "*";
+       return (null !== wC && void 0 !== wC ? wC : bC).split(/(\[\[[^\]\n]+\]\])/).map(((CC, zC) => {
```

#### 2366. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26536` → after: `L26628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26628) · [Before (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26536)

```diff
-         return `${ik}${bk}${kk.trim()}${bk}${Dk}`
+         return `${ZC}${nC}${CC.trim()}${nC}${QC}`
```

#### 2367. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26549-L26550` → after: `L26641-L26642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26641-L26642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26641-L26642) · [Before (L26549-L26550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26549-L26550)

```diff
-         nk = null === xk || "heatmap" !== kk.link.key ? xk : Vb(qb(xk, null === (mk = ik.checkData) || void 0 === mk ? void 0 : mk.heatmapEvents), Kk),
-         Uk = null !== nk || "heatmap" !== kk.link.key ? nk : XI(zb(rk(Dk), bk(Dk + 1, Sk.length) + fk), {
+         MC = null === NC || "heatmap" !== CC.link.key ? NC : en(Yn(NC, null === (qC = ZC.checkData) || void 0 === qC ? void 0 : qC.heatmapEvents), WC),
+         gC = null !== MC || "heatmap" !== CC.link.key ? MC : Tm(mn(fC(QC), nC(QC + 1, bC.length) + wC), {
```

#### 2368. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26558` → after: `L26650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26650) · [Before (L26558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26558)

```diff
-       }, `${ek}stat-${Dk}`)]
+       }, `${zC}stat-${QC}`)]
```

#### 2369. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26560` → after: `L26652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26652) · [Before (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26560)

```diff
-     return rT(kk.text, `${ek}${Dk}`, ik)
+     return qD(CC.text, `${zC}${QC}`, ZC)
```

#### 2370. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26572` → after: `L26664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26664) · [Before (L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26572)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2371. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26575` → after: `L26667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26667) · [Before (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26575)

```diff
-     }), null === ek ? ik("Studio has no data on this: a guess") : `${ik("Only")} ${ek} ${ik("players so far: a guess")}`]
+     }), null === zC ? ZC("Studio has no data on this: a guess") : `${ZC("Only")} ${zC} ${ZC("players so far: a guess")}`]
```

#### 2372. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26588-L26589` → after: `L26680-L26681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26680-L26681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26680-L26681) · [Before (L26588-L26589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26588-L26589)

```diff
-     title: `${ik("What your code says")}: ${ek.hint}`,
-     children: [(0, xe.jsx)(Yk.d, {
+     title: `${ZC("What your code says")}: ${zC.hint}`,
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2373. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26617` → after: `L26709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26709) · [Before (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26617)

```diff
-         }), " ", ik("events"), "" === kk.category ? "" : ` ${ik("in")} ${kk.category}`, " ", ik("are at"), " ", kk.text]
+         }), " ", ZC("events"), "" === CC.category ? "" : ` ${ZC("in")} ${CC.category}`, " ", ZC("are at"), " ", CC.text]
```

#### 2374. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26624` → after: `L26716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26716) · [Before (L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26624)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2375. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26646` → after: `L26738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26738) · [Before (L26646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26646)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2376. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26649` → after: `L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26741) · [Before (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26649)

```diff
-     }), ik ? `${ek.from} ${Dk("also leads to")} ${ek.other}, ${Dk("so players who didn't get to")} ${ek.to} ${Dk("may have gone there instead")}.` : `${ek.from} ${Dk("also leads on to")} ${ek.other} (${ek.otherShare}% ${Dk("of its players")}), ${Dk("so the")} ${ek.notTakenShare}% … [truncated]
+     }), ZC ? `${zC.from} ${QC("also leads to")} ${zC.other}, ${QC("so players who didn't get to")} ${zC.to} ${QC("may have gone there instead")}.` : `${zC.from} ${QC("also leads on to")} ${zC.other} (${zC.otherShare}% ${QC("of its players")}), ${QC("so the")} ${zC.notTakenShare}% … [truncated]
```

#### 2377. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26670` → after: `L26762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26762) · [Before (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26670)

```diff
-           Kk = (0, wb.J)(kk, Sk.end);
+           WC = (0, gn.S)(CC, bC.end);
```

#### 2378. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26675-L26676` → after: `L26767-L26768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26767-L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26767-L26768) · [Before (L26675-L26676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26675-L26676)

```diff
-           text: "turned" === mk ? `Studio turned this round: in your code ${Mk}.` : `${Dk?"Careful":"Check the direction"}: in your code ${Mk}.`,
-           hint: "" === ek.usedIn ? `its name, ${ek.name}` : ek.usedIn
+           text: "turned" === qC ? `Studio turned this round: in your code ${FC}.` : `${QC?"Careful":"Check the direction"}: in your code ${FC}.`,
+           hint: "" === zC.usedIn ? `its name, ${zC.name}` : zC.usedIn
```

#### 2379. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26695` → after: `L26787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26787) · [Before (L26695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26695)

```diff
-         }, `bump-${fk}`)
+         }, `bump-${wC}`)
```

#### 2380. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26702` → after: `L26794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26794) · [Before (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26702)

```diff
-       }, `guess-${ik}`)
+       }, `guess-${ZC}`)
```

#### 2381. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26708` → after: `L26800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26800) · [Before (L26708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26708)

```diff
-       }, `place-${ik}`)
+       }, `place-${ZC}`)
```

#### 2382. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26715` → after: `L26807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26807) · [Before (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26715)

```diff
-       }, `branch-${ik}`)
+       }, `branch-${ZC}`)
```

#### 2383. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26721` → after: `L26813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26813) · [Before (L26721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26721)

```diff
-       }, `constant-${ik}`)
+       }, `constant-${ZC}`)
```

#### 2384. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26727` → after: `L26819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26819) · [Before (L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26727)

```diff
-       }, `goal-${ik}`)
+       }, `goal-${ZC}`)
```

#### 2385. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26730` → after: `L26822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26822) · [Before (L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26730)

```diff
-   for (const Dk of kk.matchAll(Cz.e)) {
+   for (const QC of CC.matchAll(JH.d)) {
```

#### 2386. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26745` → after: `L26837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26837) · [Before (L26745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26745)

```diff
-     const Sk = pT(Pk(mk, Dk), `g${ik}-`, ek, HT(Pk(0, mk)), HT(Pk(Dk)));
+     const bC = AD(oC(qC, QC), `g${ZC}-`, zC, PD(oC(0, qC)), PD(oC(QC)));
```

#### 2387. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26747` → after: `L26839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26839) · [Before (L26747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26747)

```diff
-   })), ...pT(Pk(mk), `g${rk.length}-`, ek, HT(Pk(0, mk)))]
+   })), ...AD(oC(qC), `g${fC.length}-`, zC, PD(oC(0, qC)))]
```

#### 2388. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26790` → after: `L26882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26882) · [Before (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26790)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2389. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26823` → after: `L26915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26915) · [Before (L26823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26823)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2390. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26841-L26842` → after: `L26933-L26934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26933-L26934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26933-L26934) · [Before (L26841-L26842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26841-L26842)

```diff
-     title: null !== (ek = ik.line) && void 0 !== ek ? ek : `"${ik.text}"`,
-     children: [(0, xe.jsx)(Yk.d, {
+     title: null !== (zC = ZC.line) && void 0 !== zC ? zC : `"${ZC.text}"`,
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2391. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26861` → after: `L26953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26953) · [Before (L26861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26861)

```diff
-       return `"${ek}"`
+       return `"${zC}"`
```

#### 2392. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26872` → after: `L26964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26964) · [Before (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26872)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2393. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26875` → after: `L26967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26967) · [Before (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26875)

```diff
-     }), " ", ik ? `${Dk("Studio can't find")} ${fk} ${Dk("in your game")}: ${Dk(Sk?"use your own place's name":"use one your game has")}.` : `${Dk("Is")} ${fk} ${Dk("in your game? If not, use one that is.")}`]
+     }), " ", ZC ? `${QC("Studio can't find")} ${wC} ${QC("in your game")}: ${QC(bC?"use your own place's name":"use one your game has")}.` : `${QC("Is")} ${wC} ${QC("in your game? If not, use one that is.")}`]
```

#### 2394. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26885` → after: `L26977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26977) · [Before (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26885)

```diff
-   const fk = ik ? "badge" === ek.kind ? `${Dk("Your game already has the")} "${ek.name}" ${Dk("badge")}` : `${Dk("Your game already sends")} "${ek.name}"` : "badge" === ek.kind ? Dk("You already have this badge.") : Dk("You already have this message.");
+   const wC = ZC ? "badge" === zC.kind ? `${QC("Your game already has the")} "${zC.name}" ${QC("badge")}` : `${QC("Your game already sends")} "${zC.name}"` : "badge" === zC.kind ? QC("You already have this badge.") : QC("You already have this message.");
```

#### 2395. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26888` → after: `L26980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L26980) · [Before (L26888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26888)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2396. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26985` → after: `L27077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27077) · [Before (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26985)

```diff
-   return vT((0, pp.w)(kk), ek)
+   return cD((0, GG.u)(CC), zC)
```

#### 2397. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L26996` → after: `L27088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27088) · [Before (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L26996)

```diff
-     children: [ik.includes(ek.counts) ? "" : `${ek.counts}. `, Dk("Why this number"), ": ", ek.basis]
+     children: [ZC.includes(zC.counts) ? "" : `${zC.counts}. `, QC("Why this number"), ": ", zC.basis]
```

#### 2398. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27001` → after: `L27093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27093) · [Before (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27001)

```diff
-   return `${ek("Target")}: ${kk.change} ${kk.counts}`
+   return `${zC("Target")}: ${CC.change} ${CC.counts}`
```

#### 2399. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27033` → after: `L27125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27125) · [Before (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27033)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2400. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27064` → after: `L27156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27156) · [Before (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27064)

```diff
-       mk = kk => `${kk}%`,
+       qC = CC => `${CC}%`,
```

#### 2401. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27070` → after: `L27162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27162) · [Before (L27070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27070)

```diff
-         xk = [`${mk(Sk)} ${ik("of sessions")} ${CL(fk.minutes,ik)}`], nk = mk;
+         NC = [`${qC(bC)} ${ZC("of sessions")} ${xx(wC.minutes,ZC)}`], MC = qC;
```

#### 2402. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27073` → after: `L27165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27165) · [Before (L27073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27073)

```diff
-         xk = [`${mk(Sk)} ${ik("of players at")} `, {
+         NC = [`${qC(bC)} ${ZC("of players at")} `, {
```

#### 2403. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27075` → after: `L27167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27167) · [Before (L27075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27075)

```diff
-         }, ` ${ik("reach")} `, {
+         }, ` ${ZC("reach")} `, {
```

#### 2404. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27077` → after: `L27169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27169) · [Before (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27077)

```diff
-         }, fk.isOrLater ? ` ${ik("or a later one")}` : ""], nk = mk;
+         }, wC.isOrLater ? ` ${ZC("or a later one")}` : ""], MC = qC;
```

#### 2405. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27080` → after: `L27172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27172) · [Before (L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27080)

```diff
-         xk = [`${LL(fk.toPlayers)} ${ik("of the")} ${LL(fk.fromPlayers)} ${ik("players who reached")} ${fk.from} ${ik("also reached")} ${fk.to} (${mk(Sk)})`], nk = mk;
+         NC = [`${Ax(wC.toPlayers)} ${ZC("of the")} ${Ax(wC.fromPlayers)} ${ZC("players who reached")} ${wC.from} ${ZC("also reached")} ${wC.to} (${qC(bC)})`], MC = qC;
```

#### 2406. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27083` → after: `L27175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27175) · [Before (L27083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27083)

```diff
-         xk = [`${LL(Sk)} ${ik("plays a day")}`], nk = kk => `${LL(kk)} ${ik("plays a day")}`;
+         NC = [`${Ax(bC)} ${ZC("plays a day")}`], MC = CC => `${Ax(CC)} ${ZC("plays a day")}`;
```

#### 2407. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27086` → after: `L27178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27178) · [Before (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27086)

```diff
-         xk = [`${ik("an average session lasts")} ${LL(Sk)} ${ik("minutes")}`], nk = kk => `${LL(kk)} ${ik("minutes")}`;
+         NC = [`${ZC("an average session lasts")} ${Ax(bC)} ${ZC("minutes")}`], MC = CC => `${Ax(CC)} ${ZC("minutes")}`;
```

#### 2408. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27089` → after: `L27181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27181) · [Before (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27089)

```diff
-         xk = [`${ik("each player plays")} ${LL(Sk)} ${ik("times in")} ${fk.days} ${ik("days")}`], nk = kk => `${LL(kk)} ${ik("times")}`
+         NC = [`${ZC("each player plays")} ${Ax(bC)} ${ZC("times in")} ${wC.days} ${ZC("days")}`], MC = CC => `${Ax(CC)} ${ZC("times")}`
```

#### 2409. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27092` → after: `L27184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27184) · [Before (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27092)

```diff
-       Hk = Dk ? "" : `${ik("now")} ${nk(Sk)}`;
+       SC = QC ? "" : `${ZC("now")} ${MC(bC)}`;
```

#### 2410. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27095-L27097` → after: `L27187-L27189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27187-L27189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27187-L27189) · [Before (L27095-L27097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27095-L27097)

```diff
-       const kk = Dk ? "" : `, ${Hk}`,
-         ek = Mk ? `, ${ik("the goal")}` : null === rk ? "" : `; ${ik("the goal is")} ${mk(rk)}`;
-       wk = `${Pk.helpedAt} ${ik("above")} ${LL(Pk.helpedPlayers)} (${mk(bk)} ${ik("of the new players")}${kk}${ek}) ${Kk}.`
+       const CC = QC ? "" : `, ${SC}`,
+         zC = FC ? `, ${ZC("the goal")}` : null === fC ? "" : `; ${ZC("the goal is")} ${qC(fC)}`;
+       pC = `${oC.helpedAt} ${ZC("above")} ${Ax(oC.helpedPlayers)} (${qC(nC)} ${ZC("of the new players")}${CC}${zC}) ${WC}.`
```

#### 2411. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27099-L27100` → after: `L27191-L27192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27191-L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27191-L27192) · [Before (L27099-L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27099-L27100)

```diff
-       const kk = Uk ? ` ${ik("over those")} ${Pk.days} ${ik("days")}` : "";
-       wk = `${Mk?`${ik(Uk?"an average of":"reaching")} ${nk(bk)}${kk} (${ik("the goal")}${Dk?"":`; ${Hk}`})`:`${ik(Uk?"an average above":"above")} ${nk(bk)}${kk}${Dk?"":` (${Hk})`}`} ${Kk}${Mk||null===rk?"":` (${ik("the goal is")} ${nk(rk)})`}.`
+       const CC = gC ? ` ${ZC("over those")} ${oC.days} ${ZC("days")}` : "";
+       pC = `${FC?`${ZC(gC?"an average of":"reaching")} ${MC(nC)}${CC} (${ZC("the goal")}${QC?"":`; ${SC}`})`:`${ZC(gC?"an average above":"above")} ${MC(nC)}${CC}${QC?"":` (${SC})`}`} ${WC}${FC||null===fC?"":` (${ZC("the goal is")} ${MC(fC)})`}.`
```

#### 2412. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27103` → after: `L27195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27195) · [Before (L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27103)

```diff
-       pk = null !== lk && lk.high >= bk ? ` ${ik("In the last")} ${cY} ${ik("days, single days went from")} ${LL(lk.low)} ${ik("to")} ${nk(lk.high)}, ${ik("so go by the average")}.` : "";
+       GC = null !== PC && PC.high >= nC ? ` ${ZC("In the last")} ${aA} ${ZC("days, single days went from")} ${Ax(PC.low)} ${ZC("to")} ${MC(PC.high)}, ${ZC("so go by the average")}.` : "";
```

#### 2413. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27108` → after: `L27200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27200) · [Before (L27108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27108)

```diff
-         yk = [`${ik("In")} ${Pk.days} ${ik("days")}, ${ik("check")} `, AL(kk), "days" !== Pk.kind || Uk ? "" : ` ${ik("over those days")}`, `: ${ik("now")} `, ...xk, `, ${ik("and")} ${wk}`];
+         RC = [`${ZC("In")} ${oC.days} ${ZC("days")}, ${ZC("check")} `, Jx(CC), "days" !== oC.kind || gC ? "" : ` ${ZC("over those days")}`, `: ${ZC("now")} `, ...NC, `, ${ZC("and")} ${pC}`];
```

#### 2414. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27111` → after: `L27203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27203) · [Before (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27111)

```diff
-         yk = [`${ik("When")} ${Pk.at} ${ik("has about")} ${LL(Pk.players)} ${ik("players")}, ${ik("check")} `, AL(kk), `: ${wk}`]
+         RC = [`${ZC("When")} ${oC.at} ${ZC("has about")} ${Ax(oC.players)} ${ZC("players")}, ${ZC("check")} `, Jx(CC), `: ${pC}`]
```

#### 2415. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27116` → after: `L27208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27208) · [Before (L27116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27116)

```diff
-           ek = [`${ik("After your change, wait")} ${Pk.days} ${ik("days")} (${ik("about")} ${LL(Pk.count)} `, "plays" === Pk.counts ? ik("new plays") : ik("new players at that step"), `), ${ik("for the chart to count only those, then check")} `, AL(kk), ": "];
+           zC = [`${ZC("After your change, wait")} ${oC.days} ${ZC("days")} (${ZC("about")} ${Ax(oC.count)} `, "plays" === oC.counts ? ZC("new plays") : ZC("new players at that step"), `), ${ZC("for the chart to count only those, then check")} `, Jx(CC), ": "];
```

#### 2416. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27119` → after: `L27211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27211) · [Before (L27119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27119)

```diff
-           ek = [`${ik("After your change, wait")} ${Pk.days} ${ik("days, then check")} `, AL(kk), Uk ? ": " : ` ${ik("over those days")}: `];
+           zC = [`${ZC("After your change, wait")} ${oC.days} ${ZC("days, then check")} `, Jx(CC), gC ? ": " : ` ${ZC("over those days")}: `];
```

#### 2417. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27122` → after: `L27214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27214) · [Before (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27122)

```diff
-           ek = [`${ik("After your change, wait until")} ${Pk.at} ${ik("has about")} ${LL(Pk.players)} ${ik("players")} (${LL(Pk.more)} ${ik("more")}), ${ik("then check")} `, AL(kk), ": "]
+           zC = [`${ZC("After your change, wait until")} ${oC.at} ${ZC("has about")} ${Ax(oC.players)} ${ZC("players")} (${Ax(oC.more)} ${ZC("more")}), ${ZC("then check")} `, Jx(CC), ": "]
```

#### 2418. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27124` → after: `L27216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27216) · [Before (L27124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27124)

```diff
-       yk = [`${"sessionsLasting"===fk.kind&&void 0!==fk.after?`${ik("Your change starts at")} ${fk.after} ${ik("minutes, so this checks the")} ${fk.minutes}${ik("-minute mark")}. `:""}${ik("Now")}: `, ...xk, ". ", ...ek, wk, pk]
+       RC = [`${"sessionsLasting"===wC.kind&&void 0!==wC.after?`${ZC("Your change starts at")} ${wC.after} ${ZC("minutes, so this checks the")} ${wC.minutes}${ZC("-minute mark")}. `:""}${ZC("Now")}: `, ...NC, ". ", ...zC, pC, GC]
```

#### 2419. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27129` → after: `L27221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27221) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27129)

```diff
-       undo: null === kk.undo ? null : [`${ik("If it got worse, put back")} `, {
+       undo: null === CC.undo ? null : [`${ZC("If it got worse, put back")} `, {
```

#### 2420. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27131` → after: `L27223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27223) · [Before (L27131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27131)

```diff
-       }, ...null === kk.undo.inside ? [] : [` ${ik("inside")} `, {
+       }, ...null === CC.undo.inside ? [] : [` ${ZC("inside")} `, {
```

#### 2421. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27145` → after: `L27237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27237) · [Before (L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27145)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2422. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27180` → after: `L27272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27272) · [Before (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27180)

```diff
-   } = (0, nk.D)(), Uk = null === rk ? null : pL(ik, rk, Sk, Kk.constantLines), Hk = function(kk, ek) {
+   } = (0, MC.y)(), gC = null === fC ? null : Px(ZC, fC, bC, WC.constantLines), SC = function(CC, zC) {
```

#### 2423. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27186` → after: `L27278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27278) · [Before (L27186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27186)

```diff
-   }(Uk, rk).join("\n"), wk = (0, Dk.useMemo)((() => "" === Hk ? cT : Hk.split("\n")), [Hk]), lk = null !== Uk && null !== rk && Kk.isOlder ? Tu(Uk, rk, Pk) : null, {
+   }(gC, fC).join("\n"), pC = (0, QC.useMemo)((() => "" === SC ? jD : SC.split("\n")), [SC]), PC = null !== gC && null !== fC && WC.isOlder ? aY(gC, fC, oC) : null, {
```

#### 2424. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27251` → after: `L27343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27343) · [Before (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27251)

```diff
-   }(null !== (ek = null === Ck || void 0 === Ck ? void 0 : Ck.nextChange) && void 0 !== ek ? ek : Lk) : {
+   }(null !== (zC = null === JC || void 0 === JC ? void 0 : JC.nextChange) && void 0 !== zC ? zC : xC) : {
```

#### 2425. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27256-L27257` → after: `L27348-L27349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27348-L27349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27348-L27349) · [Before (L27256-L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27256-L27257)

```diff
-     return ik.steps.indexOf(null !== (ek = jk.get(kk)) && void 0 !== ek ? ek : kk)
-   }, Fk = Ak.steps.length, uk = Ak.steps.filter((kk => sk.includes(Vk(kk)))).length, qk = null !== Sk && null !== Ak.target && Tp(Ak.target, Sk.change), Ik = null !== Sk && (null === Uk ? Lk : ik).blocks.some((kk => "list" === kk.kind ? kk.items.some((kk => Tp(kk.text, Sk.change) … [truncated]
+     return ZC.steps.indexOf(null !== (zC = iC.get(CC)) && void 0 !== zC ? zC : CC)
+   }, KC = IC.steps.length, YC = IC.steps.filter((CC => vC.includes(hC(CC)))).length, dC = null !== bC && null !== IC.target && tG(IC.target, bC.change), mC = null !== bC && (null === gC ? xC : ZC).blocks.some((CC => "list" === CC.kind ? CC.items.some((CC => tG(CC.text, bC.change) … [truncated]
```

#### 2426. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27301` → after: `L27393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27393) · [Before (L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27301)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2427. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27306` → after: `L27398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27398) · [Before (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27306)

```diff
-         children: [null === Ak.title ? xk(eK) : `${xk(eK)}:`, null !== Ak.title && (0, xe.jsxs)("span", {
+         children: [null === IC.title ? NC(wW) : `${NC(wW)}:`, null !== IC.title && (0, Wz.jsxs)("span", {
```

#### 2428. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27314` → after: `L27406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27406) · [Before (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27314)

```diff
-         children: `${uk}/${Fk}`
+         children: `${YC}/${KC}`
```

#### 2429. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27329` → after: `L27421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27421) · [Before (L27329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27329)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2430. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27348` → after: `L27440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27440) · [Before (L27348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27348)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2431. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27364` → after: `L27456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27456) · [Before (L27364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27364)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2432. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27383` → after: `L27475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27475) · [Before (L27383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27383)

```diff
-     Sk = 1 === fk ? Dk("in the first minute") : fk < 1 ? Dk("this early") : `${Dk("in the first")} ${fk} ${Dk("minutes")}`,
+     bC = 1 === wC ? QC("in the first minute") : wC < 1 ? QC("this early") : `${QC("in the first")} ${wC} ${QC("minutes")}`,
```

#### 2433. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27388` → after: `L27480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27480) · [Before (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27388)

```diff
-     children: ik ? `${Dk("Nobody dies")} ${Sk} ${Dk("in your game, so this may not help")}.` : `${Dk("Studio sees no deaths")} ${Sk} (${Dk("the earliest")}, ${ek.earliest.name}, ${Dk("comes at")} ${bk} ${Dk("min on average")}), ${Dk("so this may not be why players leave")}.`
+     children: ZC ? `${QC("Nobody dies")} ${bC} ${QC("in your game, so this may not help")}.` : `${QC("Studio sees no deaths")} ${bC} (${QC("the earliest")}, ${zC.earliest.name}, ${QC("comes at")} ${nC} ${QC("min on average")}), ${QC("so this may not be why players leave")}.`
```

#### 2434. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27401` → after: `L27493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27493) · [Before (L27401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27401)

```diff
-   } = (0, nk.D)(), mk = Sk.blocks.flatMap((kk => {
+   } = (0, MC.y)(), qC = bC.blocks.flatMap((CC => {
```

#### 2435. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27403-L27404` → after: `L27495-L27496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27495-L27496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27495-L27496) · [Before (L27403-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27403-L27404)

```diff
-     return "list" === kk.kind ? [null !== (ek = null === (ik = kk.items[0]) || void 0 === ik ? void 0 : ik.text) && void 0 !== ek ? ek : ""] : "paragraph" === kk.kind ? [kk.text] : []
-   }))[0], Mk = null !== (ek = null !== (ik = null !== (Dk = null !== (fk = Sk.title) && void 0 !== fk ? fk : null === bk ? null : aT(bk, Pk)) && void 0 !== Dk ? Dk : Sk.target) && void 0 !== ik ? ik : mk) && void 0 !== ek ? ek : null;
+     return "list" === CC.kind ? [null !== (zC = null === (ZC = CC.items[0]) || void 0 === ZC ? void 0 : ZC.text) && void 0 !== zC ? zC : ""] : "paragraph" === CC.kind ? [CC.text] : []
+   }))[0], FC = null !== (zC = null !== (ZC = null !== (QC = null !== (wC = bC.title) && void 0 !== wC ? wC : null === nC ? null : sD(nC, oC)) && void 0 !== QC ? QC : bC.target) && void 0 !== ZC ? ZC : qC) && void 0 !== zC ? zC : null;
```

#### 2436. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27407` → after: `L27499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27499) · [Before (L27407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27407)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2437. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27444` → after: `L27536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27536) · [Before (L27444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27444)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2438. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27502` → after: `L27594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27594) · [Before (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27502)

```diff
-     return null !== (kk = rs(Hk, wk, dk)) && void 0 !== kk ? kk : function(kk, ek, ik, Dk) {
+     return null !== (CC = ov(SC, pC, eC)) && void 0 !== CC ? CC : function(CC, zC, ZC, QC) {
```

#### 2439. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27506` → after: `L27598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27598) · [Before (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27506)

```diff
-       const rk = null !== (fk = qc[bk[1].toLowerCase()]) && void 0 !== fk ? fk : Number(bk[1]),
+       const fC = null !== (wC = mt[nC[1].toLowerCase()]) && void 0 !== wC ? wC : Number(nC[1]),
```

#### 2440. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27508` → after: `L27600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27600) · [Before (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27508)

```diff
-       if (rk < 1 || kk.length > wb.o || Yc.test(ek) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(Pk)) return null;
+       if (fC < 1 || CC.length > gn.u || xt.test(zC) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(oC)) return null;
```

#### 2441. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27512` → after: `L27604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27604) · [Before (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27512)

```diff
-           return null !== (ek = null === (ik = Ic.exec(kk)) || void 0 === ik ? void 0 : ik[1]) && void 0 !== ek ? ek : null
+           return null !== (zC = null === (ZC = Ht.exec(CC)) || void 0 === ZC ? void 0 : ZC[1]) && void 0 !== zC ? zC : null
```

#### 2442. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27516` → after: `L27608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27608) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27516)

```diff
-         nk = null !== (Sk = ek.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== Sk ? Sk : [],
+         MC = null !== (bC = zC.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== bC ? bC : [],
```

#### 2443. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27519` → after: `L27611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27611) · [Before (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27519)

```diff
-       return null !== Kk && 0 !== mk.length && Uk && void 0 !== Hk ? rs([`if (Date.now() - ${Hk}[${Kk}] >= ${6e4*rk}) {`, ...mk.map((kk => `  ${kk}`)), "}"].join("\n"), "onPlayerJoin", Dk) : null
+       return null !== WC && 0 !== qC.length && gC && void 0 !== SC ? ov([`if (Date.now() - ${SC}[${WC}] >= ${6e4*fC}) {`, ...qC.map((CC => `  ${CC}`)), "}"].join("\n"), "onPlayerJoin", QC) : null
```

#### 2444. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27535` → after: `L27627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27627) · [Before (L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27535)

```diff
-         }))).size ? ek[0] : null !== (Kk = null === (xk = tc(Dk, kk, ik)[0]) || void 0 === xk ? void 0 : xk.event) && void 0 !== Kk ? Kk : null,
+         }))).size ? zC[0] : null !== (WC = null === (NC = Tt(QC, CC, ZC)[0]) || void 0 === NC ? void 0 : NC.event) && void 0 !== WC ? WC : null,
```

#### 2445. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27549` → after: `L27641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27641) · [Before (L27549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27549)

```diff
-     if (void 0 === Uk || null === ek || ek.length > wb.o) return null;
+     if (void 0 === gC || null === zC || zC.length > gn.u) return null;
```

#### 2446. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27551` → after: `L27643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27643) · [Before (L27551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27551)

```diff
-       wk = new Set([...null !== (Sk = Uk.params) && void 0 !== Sk ? Sk : [], ...null !== (bk = Uk.idNames) && void 0 !== bk ? bk : [], ...null !== (rk = null === (Pk = Uk.body) || void 0 === Pk ? void 0 : Pk.locals) && void 0 !== rk ? rk : []]),
+       pC = new Set([...null !== (bC = gC.params) && void 0 !== bC ? bC : [], ...null !== (nC = gC.idNames) && void 0 !== nC ? nC : [], ...null !== (fC = null === (oC = gC.body) || void 0 === oC ? void 0 : oC.locals) && void 0 !== fC ? fC : []]),
```

#### 2447. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27555-L27556` → after: `L27647-L27648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27647-L27648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27647-L27648) · [Before (L27555-L27556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27555-L27556)

```diff
-           bk = null !== (ek = null === (Dk = kk.numberExpression) || void 0 === Dk ? void 0 : Dk.trim()) && void 0 !== ek ? ek : "",
-           rk = null === Sk ? void 0 : (null !== (fk = ik.functions) && void 0 !== fk ? fk : []).find((kk => kk.name === Sk[Sk.length - 1])),
+           nC = null !== (zC = null === (QC = CC.numberExpression) || void 0 === QC ? void 0 : QC.trim()) && void 0 !== zC ? zC : "",
+           fC = null === bC ? void 0 : (null !== (wC = ZC.functions) && void 0 !== wC ? wC : []).find((CC => CC.name === bC[bC.length - 1])),
```

#### 2448. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27569` → after: `L27661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27661) · [Before (L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27569)

```diff
-   }(wk, Hk, dk, yk) : null), [uk, wk, Hk, dk, yk]), Ik = null !== (ek = null === uk || void 0 === uk ? void 0 : uk.code) && void 0 !== ek ? ek : Hk, zk = null !== (ik = null !== (fk = null === uk || void 0 === uk ? void 0 : uk.where) && void 0 !== fk ? fk : null === qk || void 0  … [truncated]
+   }(pC, SC, eC, RC) : null), [YC, pC, SC, eC, RC]), mC = null !== (zC = null === YC || void 0 === YC ? void 0 : YC.code) && void 0 !== zC ? zC : SC, HC = null !== (ZC = null !== (wC = null === YC || void 0 === YC ? void 0 : YC.where) && void 0 !== wC ? wC : null === dC || void 0  … [truncated]
```

#### 2449. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27574` → after: `L27666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27666) · [Before (L27574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27574)

```diff
-     const ek = null === Qk ? Ik : Qk.code;
+     const zC = null === EC ? mC : EC.code;
```

#### 2450. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27578` → after: `L27670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27670) · [Before (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27578)

```diff
-       runnable: null === ik || null === Dk ? ik : {
+       runnable: null === ZC || null === QC ? ZC : {
```

#### 2451. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27584-L27585` → after: `L27676-L27677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27676-L27677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27676-L27677) · [Before (L27584-L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27584-L27585)

```diff
-   }), [Qk, Ik, zk, dk, Vk, Fk]), hk = null !== (Sk = null === vk || void 0 === vk ? void 0 : vk.code) && void 0 !== Sk ? Sk : null, ak = (0, Dk.useMemo)((() => null === (null === vk || void 0 === vk ? void 0 : vk.once) || null === vk ? [] : [vk.once.name]), [vk]), Wk = (0, Dk.use … [truncated]
-     return !(null === kk || kk.length > wb.o) && Uq(kk).split("\n").some((kk => Pq.test(kk) && Kq.test(kk)))
+   }), [EC, mC, HC, eC, hC, KC]), cC = null !== (bC = null === lC || void 0 === lC ? void 0 : lC.code) && void 0 !== bC ? bC : null, uC = (0, QC.useMemo)((() => null === (null === lC || void 0 === lC ? void 0 : lC.once) || null === lC ? [] : [lC.once.name]), [lC]), rC = (0, QC.use … [truncated]
+     return !(null === CC || CC.length > gn.u) && Nd(CC).split("\n").some((CC => nd.test(CC) && qd.test(CC)))
```

#### 2452. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27589` → after: `L27681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27681) · [Before (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27589)

```diff
-     const kk = [...jd(null !== Ik && void 0 !== Ik ? Ik : "", Gk, !0), ...jd(pk, Gk)];
+     const CC = [...Je(null !== mC && void 0 !== mC ? mC : "", UC, !0), ...Je(GC, UC)];
```

#### 2453. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27611` → after: `L27703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27703) · [Before (L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27611)

```diff
-       const [, Kk, xk, nk] = Mk, Uk = Zm(xk), Hk = null !== (fk = null === Uk || void 0 === Uk ? void 0 : Uk.key) && void 0 !== fk ? fk : xk, wk = `${Hk}: ${nk.trim()},`, lk = null === ek || null === (Sk = fM.exec(ek)) || void 0 === Sk ? void 0 : Sk[1];
+       const [, WC, NC, MC] = FC, gC = Bq(NC), SC = null !== (wC = null === gC || void 0 === gC ? void 0 : gC.key) && void 0 !== wC ? wC : NC, pC = `${SC}: ${MC.trim()},`, PC = null === zC || null === (bC = fF.exec(zC)) || void 0 === bC ? void 0 : bC[1];
```

#### 2454. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27622` → after: `L27714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27714) · [Before (L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27622)

```diff
-         code: `${pk[1]} ${xk} = ${nk.trim()}`,
+         code: `${GC[1]} ${NC} = ${MC.trim()}`,
```

#### 2455. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27638` → after: `L27730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27730) · [Before (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27638)

```diff
-         Lk = void 0 !== yk && yk.startsWith(`${Hk}:`) ? yk : null !== Yk && Yk[1] === xk ? `${Hk}: ${Yk[2].trim()},` : null;
+         xC = void 0 !== RC && RC.startsWith(`${SC}:`) ? RC : null !== AC && AC[1] === NC ? `${SC}: ${AC[2].trim()},` : null;
```

#### 2456. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27641` → after: `L27733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27733) · [Before (L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27641)

```diff
-         where: `${Dk("Replace the line")} \`${Lk}\` ${Dk("inside")} \`${Uk.object}\``
+         where: `${QC("Replace the line")} \`${xC}\` ${QC("inside")} \`${gC.object}\``
```

#### 2457. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27644` → after: `L27736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27736) · [Before (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27644)

```diff
-         where: void 0 === lk ? `${Dk("Replace the line starting")} \`${Hk}:\` ${Dk("inside")} \`${Uk.object}\`` : ek
+         where: void 0 === PC ? `${QC("Replace the line starting")} \`${SC}:\` ${QC("inside")} \`${gC.object}\`` : zC
```

#### 2458. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27655` → after: `L27747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27747) · [Before (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27655)

```diff
-         bk = null === Sk ? void 0 : null !== (ik = ek.get(Sk[1])) && void 0 !== ik ? ik : ek.get(null !== (Dk = null === (fk = Zm(Sk[1])) || void 0 === fk ? void 0 : fk.key) && void 0 !== Dk ? Dk : ""),
+         nC = null === bC ? void 0 : null !== (ZC = zC.get(bC[1])) && void 0 !== ZC ? ZC : zC.get(null !== (QC = null === (wC = Bq(bC[1])) || void 0 === wC ? void 0 : wC.key) && void 0 !== QC ? QC : ""),
```

#### 2459. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27665` → after: `L27757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27757) · [Before (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27665)

```diff
-     if (null !== Ek) return null !== (kk = Ek.added) && void 0 !== kk ? kk : {
+     if (null !== XC) return null !== (CC = XC.added) && void 0 !== CC ? CC : {
```

#### 2460. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27688` → after: `L27780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27780) · [Before (L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27688)

```diff
-   }), [Ek, vk, hk, zk, dk, ak]), fe = null === ee ? Jk : 0 === De.top.length ? Ck("Paste at the bottom of your World Code") : De.join.length > 0 ? Ck("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === De.top.length ? Ck("Paste the line abov … [truncated]
+   }), [XC, lC, cC, HC, eC, uC]), Qz = null === Cz ? kC : 0 === Zz.top.length ? JC("Paste at the bottom of your World Code") : Zz.join.length > 0 ? JC("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === Zz.top.length ? JC("Paste the line abov … [truncated]
```

#### 2461. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27690-L27691` → after: `L27782-L27783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27782-L27783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27782-L27783) · [Before (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27690-L27691)

```diff
-     return null === ee ? kk : kk.filter((kk => !ee.params.includes(kk)))
-   }), [Ek, hk, zk, dk, ak, ee]), be = null === ck && null === Tk && 0 === Ok.length && 0 === Zk.length && (null !== Ek || 0 === Se.length) && !Xk, re = be && (null === (null === vk || void 0 === vk ? void 0 : vk.once) || null !== (null === vk || void 0 === vk ? void 0 : vk.loopNa … [truncated]
+     return null === Cz ? CC : CC.filter((CC => !Cz.params.includes(CC)))
+   }), [XC, cC, HC, eC, uC, Cz]), bz = null === tC && null === DC && 0 === yC.length && 0 === jC.length && (null !== XC || 0 === wz.length) && !TC, nz = bz && (null === (null === lC || void 0 === lC ? void 0 : lC.once) || null !== (null === lC || void 0 === lC ? void 0 : lC.loopNa … [truncated]
```

#### 2462. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27698` → after: `L27790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27790) · [Before (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27698)

```diff
-       return `${kk.slice(0,Sk)}${ek.test} && ${Dk.cond}${kk.slice(Sk+Dk.cond.length)}`
+       return `${CC.slice(0,bC)}${zC.test} && ${QC.cond}${CC.slice(bC+QC.cond.length)}`
```

#### 2463. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27702` → after: `L27794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27794) · [Before (L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27702)

```diff
-     return null === Sk || /^(?:const|let|var|class|function)\b/.test(Sk) || /;\s*\S/.test(Yj(Sk)) ? [`if (${ek.test}) {`, ...fk.map((kk => `  ${kk}`)), "}"].join("\n") : `if (${ek.test}) ${Sk}`
+     return null === bC || /^(?:const|let|var|class|function)\b/.test(bC) || /;\s*\S/.test(Ai(bC)) ? [`if (${zC.test}) {`, ...wC.map((CC => `  ${CC}`)), "}"].join("\n") : `if (${zC.test}) ${bC}`
```

#### 2464. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27710` → after: `L27802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27802) · [Before (L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27710)

```diff
-   }(Pe.after, me) : Me ? null : re && null === ee ? dq(od(Rk, Jk, dk, pk), pk, dk) : null), [Pe, me, Me, re, ee, Rk, Jk, dk, pk]), ne = null !== (bk = null === Ek || void 0 === Ek ? void 0 : Ek.added) && void 0 !== bk ? bk : null, Ue = (0, Dk.useMemo)((() => null === ne ? null :  … [truncated]
+   }(fz.after, oz) : qz ? null : nz && null === Cz ? vd(te(OC, kC, eC, GC), GC, eC) : null), [fz, oz, qz, nz, Cz, OC, kC, eC, GC]), Nz = null !== (nC = null === XC || void 0 === XC ? void 0 : XC.added) && void 0 !== nC ? nC : null, Mz = (0, QC.useMemo)((() => null === Nz ? null :  … [truncated]
```

#### 2465. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27721` → after: `L27813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27813) · [Before (L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27721)

```diff
-     ["leftOut", (null !== (rk = null === Qk || void 0 === Qk ? void 0 : Qk.leftOut.length) && void 0 !== rk ? rk : 0) > 0],
+     ["leftOut", (null !== (fC = null === EC || void 0 === EC ? void 0 : EC.leftOut.length) && void 0 !== fC ? fC : 0) > 0],
```

#### 2466. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27727` → after: `L27819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27819) · [Before (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27727)

```diff
-   }))) || void 0 === mk ? void 0 : mk[0]) && void 0 !== Pk ? Pk : null, we = kk => !Vk || He === kk, le = we("leftOut") ? JT(null !== (Mk = null === Qk || void 0 === Qk ? void 0 : Qk.leftOut) && void 0 !== Mk ? Mk : [], Vk) : [], pe = (0, Dk.useMemo)((() => null !== Pe ? {
+   }))) || void 0 === qC ? void 0 : qC[0]) && void 0 !== oC ? oC : null, Sz = CC => !hC || gz === CC, pz = Sz("leftOut") ? zj(null !== (FC = null === EC || void 0 === EC ? void 0 : EC.leftOut) && void 0 !== FC ? FC : [], hC) : [], Pz = (0, QC.useMemo)((() => null !== fz ? {
```

#### 2467. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27734` → after: `L27826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27826) · [Before (L27734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27734)

```diff
-     if ((null !== (Dk = ek.match(/\([^()]*\)/g)) && void 0 !== Dk ? Dk : []).some((kk => !JI.test(kk))) || RI.test(ek) || Td(kk)) return null;
+     if ((null !== (QC = zC.match(/\([^()]*\)/g)) && void 0 !== QC ? QC : []).some((CC => !Vm.test(CC))) || km.test(zC) || ae(CC)) return null;
```

#### 2468. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27739` → after: `L27831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27831) · [Before (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27739)

```diff
-     return (0, lb.e)(bk, /return(?![\w$])/, lb.i).length > 0 || fk.body.locals.some((kk => sU(bk, kk) && !jU(bk, kk))) ? null : {
+     return (0, Sn.f)(nC, /return(?![\w$])/, Sn.n).length > 0 || wC.body.locals.some((CC => vg(nC, CC) && !ig(nC, CC))) ? null : {
```

#### 2469. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27745-L27746` → after: `L27837-L27838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27837-L27838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27837-L27838) · [Before (L27745-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27745-L27746)

```diff
-     const ek = kk === Jk ? pe : null,
-       ik = kk === Jk && null !== qk && Jk === qk.name ? qk : null;
+     const zC = CC === kC ? Pz : null,
+       ZC = CC === kC && null !== dC && kC === dC.name ? dC : null;
```

#### 2470. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27761` → after: `L27853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27853) · [Before (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27761)

```diff
-           title: `${ek.after.source}, ${Ck("line")} ${ek.after.line}: ${ek.after.text}`,
+           title: `${zC.after.source}, ${JC("line")} ${zC.after.line}: ${zC.after.text}`,
```

#### 2471. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27787` → after: `L27879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27879) · [Before (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27787)

```diff
-           children: [(0, xe.jsx)(Yk.d, {
+           children: [(0, Wz.jsx)(AC.c, {
```

#### 2472. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27792` → after: `L27884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27884) · [Before (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27792)

```diff
-           code: null !== (Kk = null !== (xk = null === ee || void 0 === ee ? void 0 : ee.code) && void 0 !== xk ? xk : me) && void 0 !== Kk ? Kk : Rk,
+           code: null !== (WC = null !== (NC = null === Cz || void 0 === Cz ? void 0 : Cz.code) && void 0 !== NC ? NC : oz) && void 0 !== WC ? WC : OC,
```

#### 2473. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27797` → after: `L27889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27889) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27797)

```diff
-           children: DT(null !== (nk = null !== (Uk = null === ee || void 0 === ee ? void 0 : ee.code) && void 0 !== Uk ? Uk : me) && void 0 !== nk ? nk : Rk, "next-change-code", Lk, "pasteCode")
+           children: bD(null !== (MC = null !== (gC = null === Cz || void 0 === Cz ? void 0 : Cz.code) && void 0 !== gC ? gC : oz) && void 0 !== MC ? MC : OC, "next-change-code", xC, "pasteCode")
```

#### 2474. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27836` → after: `L27928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R27928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L27928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L27928) · [Before (L27836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27836)

```diff
-         }), "):", " ", null === Wk.line ? `"${Wk.text}"` : (0, xe.jsx)("code", {
+         }), "):", " ", null === rC.line ? `"${rC.text}"` : (0, Wz.jsx)("code", {
```

#### 2475. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27919` → after: `L28011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28011) · [Before (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27919)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2476. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27937` → after: `L28029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28029) · [Before (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27937)

```diff
-       children: [fk > 0 && (fk === ek.length - 1 ? ` ${ik("and")} ` : ", "), (0, xe.jsx)("code", {
+       children: [wC > 0 && (wC === zC.length - 1 ? ` ${ZC("and")} ` : ", "), (0, Wz.jsx)("code", {
```

#### 2477. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27946` → after: `L28038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28038) · [Before (L27946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27946)

```diff
-   return kk.length <= 1 ? null !== (ik = kk[0]) && void 0 !== ik ? ik : "" : `${kk.slice(0,-1).join(", ")} ${ek("and")} ${kk[kk.length-1]}`
+   return CC.length <= 1 ? null !== (ZC = CC[0]) && void 0 !== ZC ? ZC : "" : `${CC.slice(0,-1).join(", ")} ${zC("and")} ${CC[CC.length-1]}`
```

#### 2478. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27959` → after: `L28051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28051) · [Before (L27959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27959)

```diff
-       children: "gives" === ek.kind ? `${Dk("You already give")} ${eo(ek.items,Dk)}.` : Dk(kk ? "You already have this welcome message." : "You already have this message.")
+       children: "gives" === zC.kind ? `${QC("You already give")} ${Qj(zC.items,QC)}.` : QC(CC ? "You already have this welcome message." : "You already have this message.")
```

#### 2479. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27971` → after: `L28063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28063) · [Before (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27971)

```diff
-       }), "): ", null === ek.line ? `"${ek.text}"` : (0, xe.jsx)("code", {
+       }), "): ", null === zC.line ? `"${zC.text}"` : (0, Wz.jsx)("code", {
```

#### 2480. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L27987` → after: `L28079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28079) · [Before (L27987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L27987)

```diff
-       children: `api.${ek}`
+       children: `api.${zC}`
```

#### 2481. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28002` → after: `L28094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28094) · [Before (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28002)

```diff
-       children: `const ${ek} = ${ik}`
+       children: `const ${zC} = ${ZC}`
```

#### 2482. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28029` → after: `L28121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28121) · [Before (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28029)

```diff
-     of null !== (Kk = null === ik || void 0 === ik ? void 0 : ik.renames) && void 0 !== Kk ? Kk : []) {
+     of null !== (WC = null === ZC || void 0 === ZC ? void 0 : ZC.renames) && void 0 !== WC ? WC : []) {
```

#### 2483. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28035` → after: `L28127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28127) · [Before (L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28035)

```diff
-     }, `young-${xk}`))
+     }, `young-${NC}`))
```

#### 2484. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28053` → after: `L28145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28145) · [Before (L28053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28053)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2485. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28064` → after: `L28156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28156) · [Before (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28064)

```diff
-   return 1 === ik.length ? `${ek("line")} ${ik[0]}` : `${ek("lines")} ${eo(ik.map(String),ek)}`
+   return 1 === ZC.length ? `${zC("line")} ${ZC[0]}` : `${zC("lines")} ${Qj(ZC.map(String),zC)}`
```

#### 2486. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28080` → after: `L28172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28172) · [Before (L28080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28080)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2487. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28143` → after: `L28235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28235) · [Before (L28143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28143)

```diff
-     }), " ", Dk ? bk : rk]
+     }), " ", QC ? nC : fC]
```

#### 2488. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28176` → after: `L28268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28268) · [Before (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28176)

```diff
-         children: [(0, xe.jsx)(Yk.d, {
+         children: [(0, Wz.jsx)(AC.c, {
```

#### 2489. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28222` → after: `L28314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28314) · [Before (L28222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28222)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2490. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28266` → after: `L28358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28358) · [Before (L28266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28266)

```diff
-         children: "insert" === ek.kind ? `  ${kk}` : kk
+         children: "insert" === zC.kind ? `  ${CC}` : CC
```

#### 2491. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28268` → after: `L28360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28360) · [Before (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28268)

```diff
-     }, `added-${ik}`))), "insert" === ek.kind && ek.next.map(((kk, ek) => (0, xe.jsxs)("span", {
+     }, `added-${ZC}`))), "insert" === zC.kind && zC.next.map(((CC, zC) => (0, Wz.jsxs)("span", {
```

#### 2492. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28274` → after: `L28366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28366) · [Before (L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28274)

```diff
-         children: `  ${kk}`
+         children: `  ${CC}`
```

#### 2493. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28276` → after: `L28368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28368) · [Before (L28276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28276)

```diff
-     }, `next-${ek}`))), "insert" === ek.kind && ek.next.length >= Ko && (0, xe.jsxs)("span", {
+     }, `next-${zC}`))), "insert" === zC.kind && zC.next.length >= Mj && (0, Wz.jsxs)("span", {
```

#### 2494. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28308` → after: `L28400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28400) · [Before (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28308)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2495. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28368` → after: `L28460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28460) · [Before (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28368)

```diff
-   return [kk, ...ek.map((kk => "string" === typeof kk ? kk : "code" in kk ? kk.code : ""))].join(" ")
+   return [CC, ...zC.map((CC => "string" === typeof CC ? CC : "code" in CC ? CC.code : ""))].join(" ")
```

#### 2496. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28381` → after: `L28473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28473) · [Before (L28381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28381)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2497. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28384` → after: `L28476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28476) · [Before (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28384)

```diff
-     }), fk("Your events"), (0, xe.jsx)(Yk.d, {
+     }), wC("Your events"), (0, Wz.jsx)(AC.c, {
```

#### 2498. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28392` → after: `L28484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28484) · [Before (L28392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28392)

```diff
-     return void 0 === Dk ? null : `${ek("Only")} ${(0,wb.i)(Dk)} ${ek("players this week, so these are hints.")}`
+     return void 0 === QC ? null : `${zC("Only")} ${(0,gn.h)(QC)} ${zC("players this week, so these are hints.")}`
```

#### 2499. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28402` → after: `L28494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28494) · [Before (L28402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28402)

```diff
-         bk = "spot" === Sk.kind && qn(kk.eventType) && "" !== Sk.value ? `${kk.eventType}: ${Sk.value}` : null,
+         nC = "spot" === bC.kind && mM(CC.eventType) && "" !== bC.value ? `${CC.eventType}: ${bC.value}` : null,
```

#### 2500. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28444` → after: `L28536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28536) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28444)

```diff
-       missing: `${fk("Want to see what players do? Add one tracking line: see")} "${null!==Dk&&void 0!==Dk?Dk:""}" ${fk("below.")}`,
+       missing: `${wC("Want to see what players do? Add one tracking line: see")} "${null!==QC&&void 0!==QC?QC:""}" ${wC("below.")}`,
```

#### 2501. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28453` → after: `L28545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28545) · [Before (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28453)

```diff
-       const kk = Sk.days < 7 ? ` (${Sk.days} ${1===Sk.days?fk("day"):fk("days")})` : "",
+       const CC = bC.days < 7 ? ` (${bC.days} ${1===bC.days?wC("day"):wC("days")})` : "",
```

#### 2502. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28455` → after: `L28547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28547) · [Before (L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28455)

```diff
-       bk = 0 === Sk.players ? fk("No players this week, so treat the reasons below as guesses.") : `${fk("Only")} ${Sk.players} ${ek}${kk}: ${fk("too few to tell why people leave, so treat the reasons below as guesses.")}`, rk = Sk.eventTypes
+       nC = 0 === bC.players ? wC("No players this week, so treat the reasons below as guesses.") : `${wC("Only")} ${bC.players} ${zC}${CC}: ${wC("too few to tell why people leave, so treat the reasons below as guesses.")}`, fC = bC.eventTypes
```

#### 2503. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28458` → after: `L28550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28550) · [Before (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28458)

```diff
-     0 === ek.length && rk.length > 0 ? Pk = [`${fk("You already log")} `, ...mA(rk.slice(0, MA), fk), `: ${fk("they will say more as players come.")}`] : 0 === ek.length && null !== Dk && (Pk = [`${fk("Start with the line under")} "${Dk}" ${fk("below.")}`]);
+     0 === zC.length && fC.length > 0 ? oC = [`${wC("You already log")} `, ...oI(fC.slice(0, qI), wC), `: ${wC("they will say more as players come.")}`] : 0 === zC.length && null !== QC && (oC = [`${wC("Start with the line under")} "${QC}" ${wC("below.")}`]);
```

#### 2504. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28460` → after: `L28552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28552) · [Before (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28460)

```diff
-     return ek.length > 0 ? mk = [`${fk("Studio shows each one after about")} ${tC} ${fk("players send it")}: `, {
+     return zC.length > 0 ? qC = [`${wC("Studio shows each one after about")} ${rJ} ${wC("players send it")}: `, {
```

#### 2505. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28462` → after: `L28554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28554) · [Before (L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28462)

```diff
-     }] : "fewPlayers" === Sk.kind && (mk = [`${fk("Studio can say why players leave after about")} ${WC} ${fk("players a week")}: `, {
+     }] : "fewPlayers" === bC.kind && (qC = [`${wC("Studio can say why players leave after about")} ${uJ} ${wC("players a week")}: `, {
```

#### 2506. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28475` → after: `L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28567) · [Before (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28475)

```diff
-   }), nk = `${ik.length} ${1===ik.length?rk("event to log"):rk("events to log")}`;
+   }), MC = `${ZC.length} ${1===ZC.length?fC("event to log"):fC("events to log")}`;
```

#### 2507. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28482` → after: `L28574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28574) · [Before (L28482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28482)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2508. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28497` → after: `L28589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28589) · [Before (L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28497)

```diff
-     }), 0 === ik.length ? xk : (0, xe.jsxs)("details", {
+     }), 0 === ZC.length ? NC : (0, Wz.jsxs)("details", {
```

#### 2509. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28500` → after: `L28592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28592) · [Before (L28500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28500)

```diff
-         children: [(0, xe.jsx)(Yk.d, {
+         children: [(0, Wz.jsx)(AC.c, {
```

#### 2510. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28554` → after: `L28646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28646) · [Before (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28554)

```diff
-               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${kk.verdict}`,
+               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${CC.verdict}`,
```

#### 2511. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28566` → after: `L28658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28658) · [Before (L28566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28566)

```diff
-         className: `StudioAiJourneyStep StudioAiJourneyStep-${kk.verdict}`,
+         className: `StudioAiJourneyStep StudioAiJourneyStep-${CC.verdict}`,
```

#### 2512. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28602` → after: `L28694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28694) · [Before (L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28602)

```diff
-     children: [(0, xe.jsx)(Yk.d, {
+     children: [(0, Wz.jsx)(AC.c, {
```

#### 2513. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28653` → after: `L28745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28745) · [Before (L28653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28653)

```diff
-   } = (0, nk.D)(), [Qk, vk] = (0, Dk.useState)(null), Ek = null !== yk && Sq(rk);
+   } = (0, MC.y)(), [EC, lC] = (0, QC.useState)(null), XC = null !== RC && Qd(fC);
```

#### 2514. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28670` → after: `L28762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28762) · [Before (L28670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28670)

```diff
-     tk = (0, Dk.useMemo)((() => ls(rk, null !== wk && void 0 !== wk ? wk : new Set)), [rk, wk]);
+     sC = (0, QC.useMemo)((() => Gv(fC, null !== pC && void 0 !== pC ? pC : new Set)), [fC, pC]);
```

#### 2515. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28689` → after: `L28781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28781) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28689)

```diff
-       journey: null !== xk && void 0 !== xk ? xk : null,
+       journey: null !== NC && void 0 !== NC ? NC : null,
```

#### 2516. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28716` → after: `L28808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28808) · [Before (L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28716)

```diff
-       isCodeInPlaceOpen: null === Ck ? !0 === Hk : il(Ck),
+       isCodeInPlaceOpen: null === JC ? !0 === SC : ZP(JC),
```

#### 2517. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28730` → after: `L28822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28822) · [Before (L28730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28730)

```diff
-     kk.length > 0 && console.info(`The Studio AI answer cited ${kk.length} statistics Studio doesn't have, which are left out`, kk)
+     CC.length > 0 && console.info(`The Studio AI answer cited ${CC.length} statistics Studio doesn't have, which are left out`, CC)
```

#### 2518. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28734` → after: `L28826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28826) · [Before (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28734)

```diff
-       children: 1 === Tk ? zk("Studio left out 1 idea that doesn't fit your game.") : `${zk("Studio left out")} ${Tk} ${zk("ideas that don't fit your game")}.`
+       children: 1 === DC ? HC("Studio left out 1 idea that doesn't fit your game.") : `${HC("Studio left out")} ${DC} ${HC("ideas that don't fit your game")}.`
```

#### 2519. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28738` → after: `L28830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28830) · [Before (L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28738)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2520. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28743` → after: `L28835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28835) · [Before (L28743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28743)

```diff
-     Jk = null !== (ek = null !== Hk && void 0 !== Hk ? Hk : null === Bk || void 0 === Bk ? void 0 : Bk.sections.some((kk => "fixFirst" === kk.key && kk.heading === DK("fixFirst", !0)))) && void 0 !== ek && ek,
+     kC = null !== (zC = null !== SC && void 0 !== SC ? SC : null === aC || void 0 === aC ? void 0 : aC.sections.some((CC => "fixFirst" === CC.key && CC.heading === nW("fixFirst", !0)))) && void 0 !== zC && zC,
```

#### 2521. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28750` → after: `L28842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28842) · [Before (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28750)

```diff
-     ie = kk => 0 === RU(kk).length ? kk : JU(kk),
+     zz = CC => 0 === kg(CC).length ? CC : Vg(CC),
```

#### 2522. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28753` → after: `L28845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28845) · [Before (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28753)

```diff
-     Se = null !== (ik = null === fe || void 0 === fe ? void 0 : fe.nextChange) && void 0 !== ik ? ik : null,
+     wz = null !== (ZC = null === Qz || void 0 === Qz ? void 0 : Qz.nextChange) && void 0 !== ZC ? ZC : null,
```

#### 2523. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28766` → after: `L28858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28858) · [Before (L28766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28766)

```diff
-   const re = null !== Uk && void 0 !== Uk ? Uk : [],
+   const nz = null !== gC && void 0 !== gC ? gC : [],
```

#### 2524. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28768` → after: `L28860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28860) · [Before (L28768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28768)

```diff
-     me = null !== ck && void 0 !== ck ? ck : Bk,
+     oz = null !== tC && void 0 !== tC ? tC : aC,
```

#### 2525. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28770` → after: `L28862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28862) · [Before (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28770)

```diff
-     Ke = void 0 === Me || Me === De ? fe : tp(ie(Me.markdown)),
+     Fz = void 0 === qz || qz === Zz ? Qz : rG(zz(qz.markdown)),
```

#### 2526. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28772` → after: `L28864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28864) · [Before (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28772)

```diff
-     Ue = null !== (fk = null === Ke || void 0 === Ke ? void 0 : Ke.nextChange) && void 0 !== fk ? fk : Se,
+     Mz = null !== (wC = null === Fz || void 0 === Fz ? void 0 : Fz.nextChange) && void 0 !== wC ? wC : wz,
```

#### 2527. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28777` → after: `L28869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28869) · [Before (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28777)

```diff
-     we = null === jk ? [] : YC(jk, KV(`${Bk.summary}\n${null!==(Sk=null===De||void 0===De?void 0:De.markdown)&&void 0!==Sk?Sk:""}`), Ck),
+     Sz = null === iC ? [] : RJ(iC, qh(`${aC.summary}\n${null!==(bC=null===Zz||void 0===Zz?void 0:Zz.markdown)&&void 0!==bC?bC:""}`), JC),
```

#### 2528. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28788` → after: `L28880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28880) · [Before (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28788)

```diff
-     }(null !== jk && void 0 !== jk ? jk : [], null !== sk && void 0 !== sk ? sk : [], we, KV(le)) : [],
+     }(null !== iC && void 0 !== iC ? iC : [], null !== vC && void 0 !== vC ? vC : [], Sz, qh(pz)) : [],
```

#### 2529. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28796` → after: `L28888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28888) · [Before (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28796)

```diff
-     Ye = null === uk ? [] : qA(uk, [...we, ...pe], `${le}\n${function(kk,ek,ik,Dk,fk,Sk){if(null===kk||null===ek||!Sk.isOlder)return"";const bk=pL(kk,ek,ik,Sk.constantLines),rk=null===bk?null:Tu(bk,ek,Dk);return null===rk?"":wo("",Gu(rk,Sk.t,fk))}(Se,Lk,Kk,Vk,rk,Gk)}`, Ck),
+     Rz = null === YC ? [] : YI(YC, [...Sz, ...Pz], `${pz}\n${function(CC,zC,ZC,QC,wC,bC){if(null===CC||null===zC||!bC.isOlder)return"";const nC=Px(CC,zC,ZC,bC.constantLines),fC=null===nC?null:aY(nC,zC,QC);return null===fC?"":Gj("",LY(fC,bC.t,wC))}(wz,xC,WC,hC,fC,UC)}`, JC),
```

#### 2530. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28802-L28803` → after: `L28894-L28895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28894-L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28894-L28895) · [Before (L28802-L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28802-L28803)

```diff
-         Sk = new RegExp(`(?:${(0,wb.i)(kk.players)}|${Math.round(kk.players)})(?![\\d]|[,.]\\d|\\s*%)`),
-         bk = (0, lb.e)(ek, Sk, (0, lb.h)("\\d,.")).length > 0;
+         bC = new RegExp(`(?:${(0,gn.h)(CC.players)}|${Math.round(CC.players)})(?![\\d]|[,.]\\d|\\s*%)`),
+         nC = (0, Sn.f)(zC, bC, (0, Sn.l)("\\d,.")).length > 0;
```

#### 2531. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28811` → after: `L28903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28903) · [Before (L28811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28811)

```diff
-         fk = (0, wb.i)(kk.players);
+         wC = (0, gn.h)(CC.players);
```

#### 2532. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28813` → after: `L28905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28905) · [Before (L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28813)

```diff
-         parts: [`${ik("Of the")} ${(0,wb.i)(kk.fromPlayers)} ${ik("players who got to")} ${kk.step}, ${fk} ${ik("later had")} `, {
+         parts: [`${ZC("Of the")} ${(0,gn.h)(CC.fromPlayers)} ${ZC("players who got to")} ${CC.step}, ${wC} ${ZC("later had")} `, {
```

#### 2533. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28815` → after: `L28907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28907) · [Before (L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28815)

```diff
-         }, ` ${ik("this week")} `, Dk]
+         }, ` ${ZC("this week")} `, QC]
```

#### 2534. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28819` → after: `L28911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28911) · [Before (L28819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28819)

```diff
-         parts: [`${ik("Of the")} ${(0,wb.i)(kk.fromPlayers)} ${ik("players who reached")} ${kk.step}, ${fk} ${ik("later had")} `, {
+         parts: [`${ZC("Of the")} ${(0,gn.h)(CC.fromPlayers)} ${ZC("players who reached")} ${CC.step}, ${wC} ${ZC("later had")} `, {
```

#### 2535. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28821` → after: `L28913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28913) · [Before (L28821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28821)

```diff
-         }, ` (${Sk}%, ${ik("past week")}) `, Dk]
+         }, ` (${bC}%, ${ZC("past week")}) `, QC]
```

#### 2536. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28829` → after: `L28921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28921) · [Before (L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28829)

```diff
-     se = [...ye, ...(null !== (bk = null === Le || void 0 === Le ? void 0 : Le.rows) && void 0 !== bk ? bk : []).map((kk => {
+     iz = [...Gz, ...(null !== (nC = null === Az || void 0 === Az ? void 0 : Az.rows) && void 0 !== nC ? nC : []).map((CC => {
```

#### 2537. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28841` → after: `L28933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28933) · [Before (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28841)

```diff
-       return Dk.slice(0, "young" === ik ? BA : XA)
+       return QC.slice(0, "young" === ZC ? TI : sI)
```

#### 2538. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28864` → after: `L28956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28956) · [Before (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28864)

```diff
-       return null !== (ik = kk.find((kk => !Dk.includes(kk.eventType) && !Rl(kk, ek)))) && void 0 !== ik ? ik : null
+       return null !== (ZC = CC.find((CC => !QC.includes(CC.eventType) && !kP(CC, zC)))) && void 0 !== ZC ? ZC : null
```

#### 2539. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28878-L28879` → after: `L28970-L28971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28970-L28971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28970-L28971) · [Before (L28878-L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28878-L28879)

```diff
-           const ek = [`${(0,wb.b)(kk.said)} ${ik("in your description")}`],
-             rk = null === bk.category ? "" : ` ${ik("in")} ${bk.category}`;
+           const zC = [`${(0,gn.b)(CC.said)} ${ZC("in your description")}`],
+             fC = null === nC.category ? "" : ` ${ZC("in")} ${nC.category}`;
```

#### 2540. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28882` → after: `L28974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28974) · [Before (L28882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28882)

```diff
-             parts: [`${(0,wb.i)(bk.players)} ${ik("players got to")} ${bk.step} ${Sk}, ${ik("of")} ${(0,wb.i)(bk.first.players)} ${ik("who got to")} ${bk.first.name}${rk} `, fk]
+             parts: [`${(0,gn.h)(nC.players)} ${ZC("players got to")} ${nC.step} ${bC}, ${ZC("of")} ${(0,gn.h)(nC.first.players)} ${ZC("who got to")} ${nC.first.name}${fC} `, wC]
```

#### 2541. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28884` → after: `L28976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28976) · [Before (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28884)

```diff
-           const Pk = null === bk.before ? "" : `, ${(0,wb.i)(bk.before.players)} \u2192 ${(0,wb.i)(bk.players)} ${ik("from")} ${bk.before.name}`;
+           const oC = null === nC.before ? "" : `, ${(0,gn.h)(nC.before.players)} \u2192 ${(0,gn.h)(nC.players)} ${ZC("from")} ${nC.before.name}`;
```

#### 2542. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28887` → after: `L28979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28979) · [Before (L28887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28887)

```diff
-             parts: [`${(0,wb.i)(bk.players)} ${ik("of the")} ${(0,wb.i)(bk.first.players)} ${ik("players who reached")} ${bk.first.name} ${ik("got to")} ${bk.step}${Pk}${rk} (${Sk}) `, fk]
+             parts: [`${(0,gn.h)(nC.players)} ${ZC("of the")} ${(0,gn.h)(nC.first.players)} ${ZC("players who reached")} ${nC.first.name} ${ZC("got to")} ${nC.step}${oC}${fC} (${bC}) `, wC]
```

#### 2543. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28891` → after: `L28983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28983) · [Before (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28891)

```diff
-           const ek = "" === bk.category ? "" : ` ${ik("in")} ${bk.category}`,
+           const zC = "" === nC.category ? "" : ` ${ZC("in")} ${nC.category}`,
```

#### 2544. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28894-L28896` → after: `L28986-L28988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28986-L28988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28986-L28988) · [Before (L28894-L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28894-L28896)

```diff
-             label: [`${(0,wb.b)((0,wb.A)(bk.death))} ${ik("in your description")}`],
-             parts: [`${(0,wb.i)(bk.count)} ${ik("of the")} ${(0,wb.i)(bk.total)} ${ik("deaths")}${ek} ${Sk} ${ik("were")} `, {
-               code: `${kk.eventType}: ${bk.death}`
+             label: [`${(0,gn.b)((0,gn.I)(nC.death))} ${ZC("in your description")}`],
+             parts: [`${(0,gn.h)(nC.count)} ${ZC("of the")} ${(0,gn.h)(nC.total)} ${ZC("deaths")}${zC} ${bC} ${ZC("were")} `, {
+               code: `${CC.eventType}: ${nC.death}`
```

#### 2545. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28901` → after: `L28993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28993) · [Before (L28901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28901)

```diff
-           const ek = [`${(0,wb.b)(kk.saidAll.join(` ${ik("and")} `))} ${ik("in your description")}`],
+           const zC = [`${(0,gn.b)(CC.saidAll.join(` ${ZC("and")} `))} ${ZC("in your description")}`],
```

#### 2546. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28907` → after: `L28999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R28999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L28999) · [Before (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28907)

```diff
-               return `${""===Sk?kk.eventType:Sk}: ${(0,wb.i)(bk)}${0===fk||Dk?` ${ik("players")}`:""}`
+               return `${""===bC?CC.eventType:bC}: ${(0,gn.h)(nC)}${0===wC||QC?` ${ZC("players")}`:""}`
```

#### 2547. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28913` → after: `L29005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29005) · [Before (L28913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28913)

```diff
-             } = bk.values[0], mk = Dk ? `${(0,wb.i)(Pk)} ${ik("players so far")}` : `${(0,wb.i)(Pk)} ${ik("players sent it")} ${Sk}`, Mk = "" === rk ? kk.eventType : `${kk.eventType}: ${rk}`;
+             } = nC.values[0], qC = QC ? `${(0,gn.h)(oC)} ${ZC("players so far")}` : `${(0,gn.h)(oC)} ${ZC("players sent it")} ${bC}`, FC = "" === fC ? CC.eventType : `${CC.eventType}: ${fC}`;
```

#### 2548. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28916` → after: `L29008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29008) · [Before (L28916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28916)

```diff
-               parts: [`${ik("your")} `, {
+               parts: [`${ZC("your")} `, {
```

#### 2549. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28918` → after: `L29010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29010) · [Before (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28918)

```diff
-               }, ` ${ik("event")}: ${mk} `, fk]
+               }, ` ${ZC("event")}: ${qC} `, wC]
```

#### 2550. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28923` → after: `L29015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29015) · [Before (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28923)

```diff
-             parts: [`${ik("your")} `, {
+             parts: [`${ZC("your")} `, {
```

#### 2551. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28925` → after: `L29017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29017) · [Before (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28925)

```diff
-             }, ` ${ik("event")}: ${rk.join(", ")} (${Sk}) `, fk]
+             }, ` ${ZC("event")}: ${fC.join(", ")} (${bC}) `, wC]
```

#### 2552. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28948` → after: `L29040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29040) · [Before (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28948)

```diff
-       return "young" !== Dk && ("noEvents" === kk.thin.kind ? ek.length > 0 || ik : "medium" !== Dk)
+       return "young" !== QC && ("noEvents" === CC.thin.kind ? zC.length > 0 || ZC : "medium" !== QC)
```

#### 2553. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L28962` → after: `L29054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29054) · [Before (L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L28962)

```diff
-         className: `StudioAiAnswerSection StudioAiAnswerSection-${kk.key}`,
+         className: `StudioAiAnswerSection StudioAiAnswerSection-${CC.key}`,
```

#### 2554. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29008` → after: `L29100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29100) · [Before (L29008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29008)

```diff
-     }(Se, (0, pp.w)(ie(Ze.markdown))) : null;
+     }(wz, (0, GG.u)(zz(jz.markdown))) : null;
```

#### 2555. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29017` → after: `L29109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29109) · [Before (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29017)

```diff
-       const kk = Nq((0, pp.w)(ie(Dk.markdown)));
+       const CC = Bd((0, GG.u)(zz(QC.markdown)));
```

#### 2556. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29029` → after: `L29121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29121) · [Before (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29029)

```diff
-         then: null !== (Ne = null === Oe || void 0 === Oe ? void 0 : Oe.idea) && void 0 !== Ne ? Ne : null,
+         then: null !== (Bz = null === yz || void 0 === yz ? void 0 : yz.idea) && void 0 !== Bz ? Bz : null,
```

#### 2557. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29031-L29032` → after: `L29123-L29124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29123-L29124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29123-L29124) · [Before (L29031-L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29031-L29032)

```diff
-       }, null !== ke && void 0 !== ke ? ke : ""), null !== ne && void 0 !== ne ? ne : fe.rest)
-     } else te && "tryNext" === Dk.key ? oe(Dk, null, (0, pp.w)(ie(Dk.markdown)), null === Oe) : Te(Xe(Dk, ET(ie(Dk.markdown), Gk)));
+       }, null !== VC && void 0 !== VC ? VC : ""), null !== Nz && void 0 !== Nz ? Nz : Qz.rest)
+     } else rz && "tryNext" === QC.key ? Dz(QC, null, (0, GG.u)(zz(QC.markdown)), null === yz) : tz(sz(QC, uD(zz(QC.markdown), UC)));
```

#### 2558. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29047` → after: `L29139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29139) · [Before (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29047)

```diff
-           children: [(0, xe.jsx)(Yk.d, {
+           children: [(0, Wz.jsx)(AC.c, {
```

#### 2559. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29066` → after: `L29158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29158) · [Before (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29066)

```diff
-       children: [(0, xe.jsx)(Yk.d, {
+       children: [(0, Wz.jsx)(AC.c, {
```

#### 2560. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29089` → after: `L29181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29181) · [Before (L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29089)

```diff
-       return ls(ek, null !== (ik = kk.codeNames) && void 0 !== ik ? ik : new Set)
+       return Gv(zC, null !== (ZC = CC.codeNames) && void 0 !== ZC ? ZC : new Set)
```

#### 2561. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29101` → after: `L29193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29193) · [Before (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29101)

```diff
-   return ek.length > uo ? `${ek.slice(0,uo).join(" ")}\u2026` : ek.join(" ")
+   return zC.length > Yj ? `${zC.slice(0,Yj).join(" ")}\u2026` : zC.join(" ")
```

#### 2562. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29114` → after: `L29206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29206) · [Before (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29114)

```diff
-   const Dk = zo(null !== (ik = kk.split("\n")[0]) && void 0 !== ik ? ik : ""),
+   const QC = Hj(null !== (ZC = CC.split("\n")[0]) && void 0 !== ZC ? ZC : ""),
```

#### 2563. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29121` → after: `L29213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29213) · [Before (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29121)

```diff
-   return -1 === Dk ? kk : `${kk} ${Dk+1}`
+   return -1 === QC ? CC : `${CC} ${QC+1}`
```

#### 2564. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29126-L29127` → after: `L29218-L29219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29218-L29219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29218-L29219) · [Before (L29126-L29127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29126-L29127)

```diff
-   const ik = kk.map((kk => `"${kk}"`));
-   return ik.length <= 1 ? null !== (ek = ik[0]) && void 0 !== ek ? ek : "" : `${ik.slice(0,-1).join(", ")} and ${ik[ik.length-1]}`
+   const ZC = CC.map((CC => `"${CC}"`));
+   return ZC.length <= 1 ? null !== (zC = ZC[0]) && void 0 !== zC ? zC : "" : `${ZC.slice(0,-1).join(", ")} and ${ZC[ZC.length-1]}`
```

#### 2565. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29150` → after: `L29242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29242) · [Before (L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29150)

```diff
-     return ik ? Dk : kk
+     return ZC ? QC : CC
```

#### 2566. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29153` → after: `L29245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29245) · [Before (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29153)

```diff
-     const kk = "direction" === lk.kind ? `Change \`${lk.name}\` the other way, or pick another change.` : "unrelated" === lk.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${lk.name}\` does, or pick another con … [truncated]
+     const CC = "direction" === PC.kind ? `Change \`${PC.name}\` the other way, or pick another change.` : "unrelated" === PC.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${PC.name}\` does, or pick another con … [truncated]
```

#### 2567. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29166` → after: `L29258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29258) · [Before (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29166)

```diff
-     problem: `The game has no ${ho(nk.map((kk=>{let{name:ek}=kk;return ek})))} that Studio can find in its code, events or description.`,
+     problem: `The game has no ${cj(MC.map((CC=>{let{name:zC}=CC;return zC})))} that Studio can find in its code, events or description.`,
```

#### 2568. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29173` → after: `L29265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29265) · [Before (L29173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29173)

```diff
-     problem: "badge" === Uk.kind ? `My game already has the "${Uk.name}" badge.` : `My game already sends "${Uk.name}".`,
+     problem: "badge" === gC.kind ? `My game already has the "${gC.name}" badge.` : `My game already sends "${gC.name}".`,
```

#### 2569. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29180` → after: `L29272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29272) · [Before (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29180)

```diff
-     problem: `My code already does this in \`${Hk.where}\`.`,
+     problem: `My code already does this in \`${SC.where}\`.`,
```

#### 2570. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29186` → after: `L29278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29278) · [Before (L29186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29186)

```diff
-     problem: `It tells players to type \`${lk}\`, but no code in my game reads chat.`,
+     problem: `It tells players to type \`${PC}\`, but no code in my game reads chat.`,
```

#### 2571. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29195` → after: `L29287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29287) · [Before (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29195)

```diff
-       problem: `Bloxd has no ${ho(ik)} item or block.`,
+       problem: `Bloxd has no ${cj(ZC)} item or block.`,
```

#### 2572. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29222` → after: `L29314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29314) · [Before (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29222)

```diff
-       of kk.hidden) Pk(ek, `My game already ${"event"===ik.kind?"logs":"has"} \`${ik.name}\` (in \`${ik.where}\`).`, "Replace it with something my game doesn't have yet.");
+       of CC.hidden) oC(zC, `My game already ${"event"===ZC.kind?"logs":"has"} \`${ZC.name}\` (in \`${ZC.where}\`).`, "Replace it with something my game doesn't have yet.");
```

#### 2573. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29255` → after: `L29347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29347) · [Before (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29255)

```diff
-   } = kk, rk = rs(kk.code, kk.where, Sk), Pk = null !== (ik = null === rk || void 0 === rk ? void 0 : rk.code) && void 0 !== ik ? ik : kk.code, mk = null !== (Dk = null === rk || void 0 === rk ? void 0 : rk.where) && void 0 !== Dk ? Dk : kk.where, Mk = Ip(kk), Kk = [], xk = (kk,  … [truncated]
+   } = CC, fC = ov(CC.code, CC.where, bC), oC = null !== (ZC = null === fC || void 0 === fC ? void 0 : fC.code) && void 0 !== ZC ? ZC : CC.code, qC = null !== (QC = null === fC || void 0 === fC ? void 0 : fC.where) && void 0 !== QC ? QC : CC.where, FC = dG(CC), WC = [], NC = (CC,  … [truncated]
```

#### 2574. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29262-L29263` → after: `L29354-L29355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29354-L29355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29354-L29355) · [Before (L29262-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29262-L29263)

```diff
-   }, nk = jd(`${null!==Pk&&void 0!==Pk?Pk:""}\n${Mk}`, ek.knownGameText);
-   nk.length > 0 && xk(`The game has no ${ho(nk.map((kk=>{let{name:ek}=kk;return ek})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
+   }, MC = Je(`${null!==oC&&void 0!==oC?oC:""}\n${FC}`, zC.knownGameText);
+   MC.length > 0 && NC(`The game has no ${cj(MC.map((CC=>{let{name:zC}=CC;return zC})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
```

#### 2575. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29267` → after: `L29359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29359) · [Before (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29267)

```diff
-     xk(`It changes dying early, but the earliest death (${Uk.earliest.name}) comes at ${kk} min on average.`, "Pick a change at the step where players stop instead.")
+     NC(`It changes dying early, but the earliest death (${gC.earliest.name}) comes at ${CC} min on average.`, "Pick a change at the step where players stop instead.")
```

#### 2576. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29271-L29272` → after: `L29363-L29364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29363-L29364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29363-L29364) · [Before (L29271-L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29271-L29272)

```diff
-     wk = uj(null === Hk ? Pk : Hk.code, mk, Sk),
-     lk = null !== (fk = null === wk || void 0 === wk ? void 0 : wk.code) && void 0 !== fk ? fk : Pk,
+     pC = di(null === SC ? oC : SC.code, qC, bC),
+     PC = null !== (wC = null === pC || void 0 === pC ? void 0 : pC.code) && void 0 !== wC ? wC : oC,
```

#### 2577. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29275` → after: `L29367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29367) · [Before (L29275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29275)

```diff
-   null !== yk ? xk(`My code already does this in \`${yk.where}\`.`, "Pick a change my game doesn't make yet.") : null !== Hk && Hk.leftOut.length > 0 && xk(`Some of its lines repeat what \`${Hk.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
+   null !== RC ? NC(`My code already does this in \`${RC.where}\`.`, "Pick a change my game doesn't make yet.") : null !== SC && SC.leftOut.length > 0 && NC(`Some of its lines repeat what \`${SC.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
```

#### 2578. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29277-L29279` → after: `L29369-L29371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29369-L29371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29369-L29371) · [Before (L29277-L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29277-L29279)

```diff
-   null !== Yk && xk("gives" === Yk.kind ? `\`${Yk.where}\` already gives ${Yk.items.join(", ")}.` : "secondMessage" === Yk.kind ? `My game already has a welcome message in \`${Yk.where}\`.` : `My message in \`${Yk.where}\` already says this.`, "secondMessage" === Yk.kind ? "Chang … [truncated]
-   const Lk = null !== mk && void 0 !== mk ? mk : "tick";
-   !0 === (null === wk || void 0 === wk ? void 0 : wk.repeats) ? xk(`From \`${Lk}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== wk && (null !== wk.once || wk.flagNames.length > 0) && xk(`From \`${Lk}\` it sends  … [truncated]
+   null !== AC && NC("gives" === AC.kind ? `\`${AC.where}\` already gives ${AC.items.join(", ")}.` : "secondMessage" === AC.kind ? `My game already has a welcome message in \`${AC.where}\`.` : `My message in \`${AC.where}\` already says this.`, "secondMessage" === AC.kind ? "Chang … [truncated]
+   const xC = null !== qC && void 0 !== qC ? qC : "tick";
+   !0 === (null === pC || void 0 === pC ? void 0 : pC.repeats) ? NC(`From \`${xC}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== pC && (null !== pC.once || pC.flagNames.length > 0) && NC(`From \`${xC}\` it sends  … [truncated]
```

#### 2579. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29281` → after: `L29373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29373) · [Before (L29281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29281)

```diff
-   null !== Ck && xk(`\`${Ck.name}\` isn't defined in \`${Ck.place}\`.`, null === Ck.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${Ck.alias}\`, its name for the player there.`);
+   null !== JC && NC(`\`${JC.name}\` isn't defined in \`${JC.place}\`.`, null === JC.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${JC.alias}\`, its name for the player there.`);
```

#### 2580. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29283` → after: `L29375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29375) · [Before (L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29283)

```diff
-   null !== Ak && xk(`World Code has no \`${Ak}\`, so the code won't run.`, "Count time in `tick` instead.");
+   null !== IC && NC(`World Code has no \`${IC}\`, so the code won't run.`, "Count time in `tick` instead.");
```

#### 2581. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29285-L29314` → after: `L29377-L29406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29377-L29406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29377-L29406) · [Before (L29285-L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29285-L29314)

```diff
-   jk.length > 0 && xk(`It calls ${jk.map((kk=>`\`${kk}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
-   const sk = ws(lk, ek.apiNames);
-   sk.length > 0 && xk(`Bloxd has no ${sk.map((kk=>`\`api.${kk}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
-   const dk = vU(lk, mk, Sk, pk);
-   dk.length > 0 && xk(`It reads ${dk.map((kk=>`\`${kk}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), nq(lk, mk, bk) && xk("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
-   for (const Vk of Rc(lk, Sk)) xk(`It tells players to type \`${Vk}\`, but no code in my game reads chat.`, "Don't use a chat command.");
-   return Ap(lk).isBalanced || xk("The code leaves a bracket or quote open.", "Close it."), Kk
- }
- 
- function co(kk, ek) {
-   let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vo;
-   const Dk = wK(kk);
-   if (null === Dk) return [];
-   const fk = zB(Dk).layout,
-     Sk = [],
-     bk = [];
- ... (14 more removed lines; see GitHub link above)
+   iC.length > 0 && NC(`It calls ${iC.map((CC=>`\`${CC}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
+   const vC = Pv(PC, zC.apiNames);
+   vC.length > 0 && NC(`Bloxd has no ${vC.map((CC=>`\`api.${CC}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
+   const eC = lg(PC, qC, bC, GC);
+   eC.length > 0 && NC(`It reads ${eC.map((CC=>`\`${CC}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), Wd(PC, qC, nC) && NC("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
+   for (const hC of CD(PC, bC)) NC(`It tells players to type \`${hC}\`, but no code in my game reads chat.`, "Don't use a chat command.");
+   return IG(PC).isBalanced || NC("The code leaves a bracket or quote open.", "Close it."), WC
+ }
+ 
+ function tj(CC, zC) {
+   let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hj;
+   const QC = RW(CC);
+   if (null === QC) return [];
+   const wC = Ea(QC).layout,
+     bC = [],
+     nC = [];
+ ... (14 more added lines; see GitHub link above)
```

#### 2582. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29316-L29323` → after: `L29408-L29415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29408-L29415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29408-L29415) · [Before (L29316-L29323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29316-L29323)

```diff
-       Kk = kk => Mk.some((ek => vo(ek.markdown, kk))),
-       xk = Qo(Dk);
-     if (null !== ik) {
-       Sk.push(...Bo(ik, ek));
-       for (const kk of ik.blocks) {
-         const ik = "paragraph" === kk.kind ? [kk.text] : Qo([kk]).map((kk => kk.text));
-         for (const kk of ik) Sk.push(...Wo(kk, "Next change", !1, ek).map((kk => ({
-           ...kk,
+       WC = CC => FC.some((zC => lj(zC.markdown, CC))),
+       NC = Ej(QC);
+     if (null !== ZC) {
+       bC.push(...aj(ZC, zC));
+       for (const CC of ZC.blocks) {
+         const ZC = "paragraph" === CC.kind ? [CC.text] : Ej([CC]).map((CC => CC.text));
+         for (const CC of ZC) bC.push(...rj(CC, "Next change", !1, zC).map((CC => ({
+           ...CC,
```

#### 2583. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29328-L29331` → after: `L29420-L29423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29420-L29423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29420-L29423) · [Before (L29328-L29331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29328-L29331)

```diff
-     bk.push(...to(mk, xk, ek, Kk));
-     for (const Sk of Dk) "paragraph" === Sk.kind && bk.push(...Wo(Sk.text, mk.heading, !1, ek));
-     xk.forEach(((kk, ik) => {
-       Kk(kk.text) || bk.push(...Wo(kk.text, `${mk.heading} ${ik+1}`, !0, ek))
+     nC.push(...sj(qC, NC, zC, WC));
+     for (const bC of QC) "paragraph" === bC.kind && nC.push(...rj(bC.text, qC.heading, !1, zC));
+     NC.forEach(((CC, ZC) => {
+       WC(CC.text) || nC.push(...rj(CC.text, `${qC.heading} ${ZC+1}`, !0, zC))
```

#### 2584. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29334-L29338` → after: `L29426-L29430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29426-L29430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29426-L29430) · [Before (L29334-L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29334-L29338)

```diff
-   const Pk = new Set;
-   return [...Sk, ...bk].filter((kk => {
-     const ek = `${kk.where}|${kk.problem}`;
-     return !Pk.has(ek) && (Pk.add(ek), !0)
-   })).slice(0, ik)
+   const oC = new Set;
+   return [...bC, ...nC].filter((CC => {
+     const zC = `${CC.where}|${CC.problem}`;
+     return !oC.has(zC) && (oC.add(zC), !0)
+   })).slice(0, ZC)
```

#### 2585. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29341-L29344` → after: `L29433-L29436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29433-L29436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29433-L29436) · [Before (L29341-L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29341-L29344)

```diff
- function To(kk, ek) {
-   const ik = new Set,
-     Dk = function(kk) {
-       let Dk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ function Dj(CC, zC) {
+   const ZC = new Set,
+     QC = function(CC) {
+       let QC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
```

#### 2586. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29346` → after: `L29438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29438) · [Before (L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29346)

```diff
-           name: fk
+           name: wC
```

#### 2587. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29348` → after: `L29440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29440) · [Before (L29348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29348)

```diff
-         of jd(kk, ek, Dk)) ik.add(fk.toLowerCase())
+         of Je(CC, zC, QC)) ZC.add(wC.toLowerCase())
```

#### 2588. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29350-L29351` → after: `L29442-L29443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29442-L29443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29442-L29443) · [Before (L29350-L29351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29350-L29351)

```diff
-     fk = kk => {
-       for (const ek of kk) Dk(ek.text), fk(ek.children)
+     wC = CC => {
+       for (const zC of CC) QC(zC.text), wC(zC.children)
```

#### 2589. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29353-L29354` → after: `L29445-L29446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29445-L29446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29445-L29446) · [Before (L29353-L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29353-L29354)

```diff
-   for (const Sk of (0, pp.w)(kk)) "paragraph" === Sk.kind || "heading" === Sk.kind ? Dk(Sk.text) : "list" === Sk.kind ? fk(Sk.items) : "code" === Sk.kind && Dk(Sk.code, !0);
-   return ik
+   for (const bC of (0, GG.u)(CC)) "paragraph" === bC.kind || "heading" === bC.kind ? QC(bC.text) : "list" === bC.kind ? wC(bC.items) : "code" === bC.kind && QC(bC.code, !0);
+   return ZC
```

#### 2590. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29356` → after: `L29448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29448) · [Before (L29356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29356)

```diff
- const oo = /<\s*\/?\s*game-text[^>]*>/gi;
+ const jj = /<\s*\/?\s*game-text[^>]*>/gi;
```

#### 2591. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29358` → after: `L29450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29450) · [Before (L29358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29358)

```diff
- function Zo(kk) {
+ function yj(CC) {
```

#### 2592. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29360-L29376` → after: `L29452-L29468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29452-L29468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29452-L29468) · [Before (L29360-L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29360-L29376)

```diff
-     where: ek,
-     quote: ik,
-     problem: Dk,
-     fix: fk
-   } = kk, Sk = MM(`- ${ek}${null===ik?"":` ("${ik}")`}: ${Dk} Instead: ${fk}`, 1 / 0);
-   for (let bk = ""; Sk !== bk;) bk = Sk, Sk = Sk.replace(oo, "");
-   return Sk
- }
- 
- function Oo(kk) {
-   const ek = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
-     ik = "Reply with the whole answer again, and nothing else.",
-     Dk = [];
-   for (const fk of kk) {
-     const kk = Zo(fk);
-     if ([ek, ...Dk, kk, ik].join("\n").length > Fo) {
- ... (1 more removed lines; see GitHub link above)
+     where: zC,
+     quote: ZC,
+     problem: QC,
+     fix: wC
+   } = CC, bC = MF(`- ${zC}${null===ZC?"":` ("${ZC}")`}: ${QC} Instead: ${wC}`, 1 / 0);
+   for (let nC = ""; bC !== nC;) nC = bC, bC = bC.replace(jj, "");
+   return bC
+ }
+ 
+ function Lj(CC) {
+   const zC = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
+     ZC = "Reply with the whole answer again, and nothing else.",
+     QC = [];
+   for (const wC of CC) {
+     const CC = yj(wC);
+     if ([zC, ...QC, CC, ZC].join("\n").length > Kj) {
+ ... (1 more added lines; see GitHub link above)
```

#### 2593. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29379` → after: `L29471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29471) · [Before (L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29379)

```diff
-     Dk.push(kk)
+     QC.push(CC)
```

#### 2594. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29381` → after: `L29473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29473) · [Before (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29381)

```diff
-   return [ek, ...Dk, ik].join("\n")
+   return [zC, ...QC, ZC].join("\n")
```

#### 2595. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29384-L29388` → after: `L29476-L29480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29476-L29480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29476-L29480) · [Before (L29384-L29388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29384-L29388)

```diff
- function go(kk) {
-   const ek = new Map;
-   for (const Dk of kk.sections) {
-     var ik;
-     ek.set(Dk.key, (null !== (ik = ek.get(Dk.key)) && void 0 !== ik ? ik : 0) + Qo((0, pp.w)(Dk.markdown)).length)
+ function Uj(CC) {
+   const zC = new Map;
+   for (const QC of CC.sections) {
+     var ZC;
+     zC.set(QC.key, (null !== (ZC = zC.get(QC.key)) && void 0 !== ZC ? ZC : 0) + Ej((0, GG.u)(QC.markdown)).length)
```

#### 2596. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29390` → after: `L29482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29482) · [Before (L29390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29390)

```diff
-   return ek
+   return zC
```

#### 2597. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29392` → after: `L29484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29484) · [Before (L29392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29392)

```diff
- const Go = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
+ const Bj = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
```

#### 2598. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29405` → after: `L29497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29497) · [Before (L29405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29405)

```diff
-   const bk = await (0, dP.i)(ek.model, function(kk, ek, ik) {
+   const nC = await (0, Ko.f)(zC.model, function(CC, zC, ZC) {
```

#### 2599. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29433` → after: `L29525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29525) · [Before (L29433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29433)

```diff
-         if ((null !== (Sk = rk.get(fk)) && void 0 !== Sk ? Sk : 0) < Pk) return !1
+         if ((null !== (bC = fC.get(wC)) && void 0 !== bC ? bC : 0) < oC) return !1
```

#### 2600. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29451` → after: `L29543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29543) · [Before (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29451)

```diff
-     return console.error(`The Studio AI export couldn't load ${ek}`, Dk), kk.push(ek), null
+     return console.error(`The Studio AI export couldn't load ${zC}`, QC), CC.push(zC), null
```

#### 2601. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29457` → after: `L29549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29549) · [Before (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29457)

```diff
-     bk = fk.edges.length > 0 ? fk : null;
+     nC = wC.edges.length > 0 ? wC : null;
```

#### 2602. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29498` → after: `L29590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R29590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/104.js#L29590) · [Before (L29498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/104.js#L29498)

```diff
-       const Pk = of(rk, bk).map((kk => {
+       const oC = aw(fC, nC).map((CC => {
```
