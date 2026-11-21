# Changed — Bundle Modifications Report (Part 007 / 133)

- **Updated at**: `2026-11-21T12:06 JST`
- **Part**: `7 / 133` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (x17cru.159bd7ce → bqoxjr.2558012f · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2763 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 2255. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25109` → after: `L25109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25109) · [Before (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25109)

```diff
-                   '"' === Pd || "'" === Pd ? pd = Pd : "([{".includes(Pd) ? kd++ : ")]}".includes(Pd) ? kd-- : "+" === Pd && 0 === kd && (Jd.push(dd.slice(Nd, Wd).trim()), Nd = Wd + 1)
+                   '"' === DQ || "'" === DQ ? LQ = DQ : "([{".includes(DQ) ? wQ++ : ")]}".includes(DQ) ? wQ-- : "+" === DQ && 0 === wQ && (FQ.push(QQ.slice(qQ, oQ).trim()), qQ = oQ + 1)
```

#### 2256. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25112` → after: `L25112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25112) · [Before (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25112)

```diff
-               return Jd.push(dd.slice(Nd).trim()), Jd.every((dd => "" !== dd)) ? Jd : null
+               return FQ.push(QQ.slice(qQ).trim()), FQ.every((QQ => "" !== QQ)) ? FQ : null
```

#### 2257. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25120-L25121` → after: `L25120-L25121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25120-L25121) · [Before (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25120-L25121)

```diff
-             }))) && void 0 !== Jd ? Jd : null
-           }(null !== (kd = null === pd || void 0 === pd ? void 0 : pd[1]) && void 0 !== kd ? kd : Jd);
+             }))) && void 0 !== FQ ? FQ : null
+           }(null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ[1]) && void 0 !== wQ ? wQ : FQ);
```

#### 2258. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25133` → after: `L25133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25133) · [Before (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25133)

```diff
-       } = Pd[0], Kd = pd.indexOf(Zd, Nd[0].length), od = null !== (Jd = null === (kd = /["']/.exec(Zd)) || void 0 === kd ? void 0 : kd[0]) && void 0 !== Jd ? Jd : '"';
+       } = DQ[0], uQ = LQ.indexOf(kQ, qQ[0].length), HQ = null !== (FQ = null === (wQ = /["']/.exec(kQ)) || void 0 === wQ ? void 0 : wQ[0]) && void 0 !== FQ ? FQ : '"';
```

#### 2259. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25152` → after: `L25152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25152) · [Before (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25152)

```diff
-   return new Set([...dd.callbacks, ...null !== (Jd = dd.functions) && void 0 !== Jd ? Jd : []].map((dd => {
+   return new Set([...QQ.callbacks, ...null !== (FQ = QQ.functions) && void 0 !== FQ ? FQ : []].map((QQ => {
```

#### 2260. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25167` → after: `L25167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25167) · [Before (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25167)

```diff
-   if (null === pd || null === Nd || Kf.test(null !== (kd = Nd[1]) && void 0 !== kd ? kd : "") || dc.test(pd.text)) return null;
+   if (null === LQ || null === qQ || Hz.test(null !== (wQ = qQ[1]) && void 0 !== wQ ? wQ : "") || BV.test(LQ.text)) return null;
```

#### 2261. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25182` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25182) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25182)

```diff
-       const Nd = null !== (Jd = null === (kd = dd.ideaPlace) || void 0 === kd ? void 0 : kd.exec(Pd)) && void 0 !== Jd ? Jd : null;
+       const qQ = null !== (FQ = null === (wQ = QQ.ideaPlace) || void 0 === wQ ? void 0 : wQ.exec(DQ)) && void 0 !== FQ ? FQ : null;
```

#### 2262. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25185` → after: `L25185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25185) · [Before (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25185)

```diff
-         number: null !== (pd = Nd[1]) && void 0 !== pd ? pd : null,
+         number: null !== (LQ = qQ[1]) && void 0 !== LQ ? LQ : null,
```

#### 2263. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25203-L25205` → after: `L25203-L25205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25203-L25205) · [Before (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25203-L25205)

```diff
-   const Od = null === ld ? "" : `at ${od.numberWord} ${ld} `,
-     ed = `hange your ${od.noun} message (${Ld}) so ${Od}it also ${Cd.verb} ${Cd.after}`;
-   return `${pd.head}${/^[A-Z]/.test(pd.text)?"C":"c"}${ed}`
+   const AQ = null === bQ ? "" : `at ${HQ.numberWord} ${bQ} `,
+     tQ = `hange your ${HQ.noun} message (${xQ}) so ${AQ}it also ${mQ.verb} ${mQ.after}`;
+   return `${LQ.head}${/^[A-Z]/.test(LQ.text)?"C":"c"}${tQ}`
```

#### 2264. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25265` → after: `L25265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25265) · [Before (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25265)

```diff
-         player: "broadcastMessage" === Wd[3] ? null : null !== (Jd = Pd[0]) && void 0 !== Jd ? Jd : null,
+         player: "broadcastMessage" === oQ[3] ? null : null !== (FQ = DQ[0]) && void 0 !== FQ ? FQ : null,
```

#### 2265. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25267` → after: `L25267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25267) · [Before (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25267)

```diff
-         condition: null !== (kd = Wd[2]) && void 0 !== kd ? kd : null,
+         condition: null !== (wQ = oQ[2]) && void 0 !== wQ ? wQ : null,
```

#### 2266. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25276-L25277` → after: `L25276-L25277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25276-L25277) · [Before (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25276-L25277)

```diff
-       const pd = null === dd.mention ? "join" === dd.kind && "onPlayerJoin" === Od : dd.mention.test(ed),
-         Nd = (null !== (kd = Jd.messages) && void 0 !== kd ? kd : []).filter((Jd => dd.isMessage(Jd) && DE(Jd.where).includes(Od)));
+       const LQ = null === QQ.mention ? "join" === QQ.kind && "onPlayerJoin" === AQ : QQ.mention.test(tQ),
+         qQ = (null !== (wQ = FQ.messages) && void 0 !== wQ ? wQ : []).filter((FQ => QQ.isMessage(FQ) && jV(FQ.where).includes(AQ)));
```

#### 2267. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25301-L25302` → after: `L25301-L25302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25301-L25302) · [Before (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25301-L25302)

```diff
-     ad = null !== Gd.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${Gd.numberWord}s?\b`, "i").test(ed),
-     Md = null === Gd.numberWord || ad ? new Set : new Set((0, LP.q)(ed).filter((dd => !/\d\s*%/.test(dd))).flatMap((dd => [...dd.matchAll(new RegExp(String.raw`\b${Gd.numberWord}\s*:?\s*(\d{1,3})\b${UE}`, "gi"))].map((dd => dd[1])))));
+     WQ = null !== GQ.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${GQ.numberWord}s?\b`, "i").test(tQ),
+     RQ = null === GQ.numberWord || WQ ? new Set : new Set((0, xD.r)(tQ).filter((QQ => !/\d\s*%/.test(QQ))).flatMap((QQ => [...QQ.matchAll(new RegExp(String.raw`\b${GQ.numberWord}\s*:?\s*(\d{1,3})\b${zV}`, "gi"))].map((QQ => QQ[1])))));
```

#### 2268. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25304` → after: `L25304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25304) · [Before (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25304)

```diff
-   const Fd = null !== (kd = null === sd || void 0 === sd ? void 0 : sd[2]) && void 0 !== kd ? kd : 1 === Md.size ? [...Md][0] : null;
+   const OQ = null !== (wQ = null === iQ || void 0 === iQ ? void 0 : iQ[2]) && void 0 !== wQ ? wQ : 1 === RQ.size ? [...RQ][0] : null;
```

#### 2269. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25313` → after: `L25313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25313) · [Before (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25313)

```diff
-   })) && Wc.test(dd), jd = null !== (pd = Gd.mention) && void 0 !== pd ? pd : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && Lh.test(QQ), NQ = null !== (LQ = GQ.mention) && void 0 !== LQ ? LQ : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2270. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25317-L25319` → after: `L25317-L25319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25317-L25319) · [Before (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25317-L25319)

```diff
-         kd = null === Jd ? dd : dd.slice(Jd[0].length),
-         pd = (null === Jd ? (0, OP.u)(kd, /\s+(?=[A-Z`"])/g, (0, OP.r)(".!?")) : [kd]).some((dd => {
-           const Jd = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(dd) ? `${Xd} ${dd}` : dd;
+         wQ = null === FQ ? QQ : QQ.slice(FQ[0].length),
+         LQ = (null === FQ ? (0, AD.y)(wQ, /\s+(?=[A-Z`"])/g, (0, AD.u)(".!?")) : [wQ]).some((QQ => {
+           const FQ = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(QQ) ? `${TQ} ${QQ}` : QQ;
```

#### 2271. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25333` → after: `L25333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25333) · [Before (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25333)

```diff
-           literal: `${pd}${/[.!?]$/.test(pd)||""===pd?" ":". "}${Jd}`
+           literal: `${LQ}${/[.!?]$/.test(LQ)||""===LQ?" ":". "}${FQ}`
```

#### 2272. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25337` → after: `L25337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25337) · [Before (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25337)

```diff
-         literal: `. ${Jd}`
+         literal: `. ${FQ}`
```

#### 2273. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25348` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25348) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25348)

```diff
-       return kd.map((dd => "literal" in dd ? (0, LP.R)(dd.literal, Jd) : dd.code)).join(" + ")
+       return wQ.map((QQ => "literal" in QQ ? (0, xD.O)(QQ.literal, FQ) : QQ.code)).join(" + ")
```

#### 2274. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25350-L25351` → after: `L25350-L25351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25350-L25351) · [Before (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25350-L25351)

```diff
-     Dd = `${md.line.slice(0,md.start)}${md.isList?`[${yd}]`:yd}${md.line.slice(md.end)}`,
-     Td = null === Fd ? Qd.map((dd => dd === Ld.line ? `${Ld.indent}${Dd}` : dd)) : [`${Ld.indent}if (${null!==(Nd=null===(Wd=Ld.condition)||void 0===Wd?void 0:Wd.trim())&&void 0!==Nd?Nd:`${cE(hE(Bd))} === ${Fd}`}) ${Dd}`, `${Ld.indent}else ${md.line}`],
+     aQ = `${rQ.line.slice(0,rQ.start)}${rQ.isList?`[${jQ}]`:jQ}${rQ.line.slice(rQ.end)}`,
+     XQ = null === OQ ? YQ.map((QQ => QQ === xQ.line ? `${xQ.indent}${aQ}` : QQ)) : [`${xQ.indent}if (${null!==(qQ=null===(oQ=xQ.condition)||void 0===oQ?void 0:oQ.trim())&&void 0!==qQ?qQ:`${fV(VV(SQ))} === ${OQ}`}) ${aQ}`, `${xQ.indent}else ${rQ.line}`],
```

#### 2275. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25353` → after: `L25353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25353) · [Before (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25353)

```diff
-     cd = fd ? `Change your ${Gd.noun} message (${Yd}) to "${Ld.words}"${Ed}` : `Change your ${Gd.noun} message (${Yd}) so ${null===Fd?"":`at ${Gd.numberWord} ${Fd} `}it also says "${Ld.words}"${Ed}`,
+     VQ = KQ ? `Change your ${GQ.noun} message (${sQ}) to "${xQ.words}"${fQ}` : `Change your ${GQ.noun} message (${sQ}) so ${null===OQ?"":`at ${GQ.numberWord} ${OQ} `}it also says "${xQ.words}"${fQ}`,
```

#### 2276. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25372` → after: `L25372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25372) · [Before (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25372)

```diff
-   const pd = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.messages) && void 0 !== kd ? kd : [];
+   const LQ = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.messages) && void 0 !== wQ ? wQ : [];
```

#### 2277. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25397` → after: `L25397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25397) · [Before (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25397)

```diff
-     return oc(null !== Nd && void 0 !== Nd ? Nd : Wd, void 0 === Pd ? gd ? "players coming back" : "keeping players" : gd ? "how many players come back" : "how many players stay")
+     return mh(null !== qQ && void 0 !== qQ ? qQ : oQ, void 0 === DQ ? vQ ? "players coming back" : "keeping players" : vQ ? "how many players come back" : "how many players stay")
```

#### 2278. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25411-L25412` → after: `L25411-L25412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25411-L25412) · [Before (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25411-L25412)

```diff
-       const Nd = null !== (kd = dd.match(Oc)) && void 0 !== kd ? kd : [],
-         Wd = null !== (pd = Jd.match(Oc)) && void 0 !== pd ? pd : [],
+       const qQ = null !== (wQ = QQ.match(Yh)) && void 0 !== wQ ? wQ : [],
+         oQ = null !== (LQ = FQ.match(Yh)) && void 0 !== LQ ? LQ : [],
```

#### 2279. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25425` → after: `L25425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25425) · [Before (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25425)

```diff
-       return "" === gd ? Zd : [...Zd, gd]
+       return "" === vQ ? kQ : [...kQ, vQ]
```

#### 2280. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25450` → after: `L25450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25450) · [Before (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25450)

```diff
-       Nd.set(Kd.name, (null !== (Wd = Nd.get(Kd.name)) && void 0 !== Wd ? Wd : 0) + 1)
+       qQ.set(uQ.name, (null !== (oQ = qQ.get(uQ.name)) && void 0 !== oQ ? oQ : 0) + 1)
```

#### 2281. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25458-L25459` → after: `L25458-L25459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25458-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25458-L25459) · [Before (L25458-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25458-L25459)

```diff
-         ld = null !== (Pd = Kd.usedIn) && void 0 !== Pd ? Pd : "",
-         Qd = void 0 === Wd ? null : null !== (Zd = ul(Wd)) && void 0 !== Zd ? Zd : null;
+         bQ = null !== (DQ = uQ.usedIn) && void 0 !== DQ ? DQ : "",
+         YQ = void 0 === oQ ? null : null !== (kQ = nb(oQ)) && void 0 !== kQ ? kQ : null;
```

#### 2282. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25466` → after: `L25466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25466) · [Before (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25466)

```diff
-         value: null !== (gd = null === Wd || void 0 === Wd ? void 0 : Wd.value) && void 0 !== gd ? gd : dd,
+         value: null !== (vQ = null === oQ || void 0 === oQ ? void 0 : oQ.value) && void 0 !== vQ ? vQ : QQ,
```

#### 2283. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25468` → after: `L25468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25468) · [Before (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25468)

```diff
-         codeKind: null === Od ? Qd : null,
+         codeKind: null === AQ ? YQ : null,
```

#### 2284. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25470` → after: `L25470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25470) · [Before (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25470)

```diff
-         hazard: null !== (Cd = null === Od || void 0 === Od ? void 0 : Od.hazard) && void 0 !== Cd ? Cd : null,
+         hazard: null !== (mQ = null === AQ || void 0 === AQ ? void 0 : AQ.hazard) && void 0 !== mQ ? mQ : null,
```

#### 2285. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25478` → after: `L25478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25478) · [Before (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25478)

```diff
-   }(Wd), Od), Id = BQ(DM(Wd), Od), Gd = null !== (kd = null === Pd || void 0 === Pd ? void 0 : Pd.places) && void 0 !== kd ? kd : Lc, vd = null !== (pd = null === gd || void 0 === gd ? void 0 : gd.grounds) && void 0 !== pd ? pd : null, xd = (() => {
+   }(oQ), AQ), MQ = SY(XO(oQ), AQ), GQ = null !== (wQ = null === DQ || void 0 === DQ ? void 0 : DQ.places) && void 0 !== wQ ? wQ : bh, pQ = null !== (LQ = null === vQ || void 0 === vQ ? void 0 : vQ.grounds) && void 0 !== LQ ? LQ : null, cQ = (() => {
```

#### 2286. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25499` → after: `L25499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25499) · [Before (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25499)

```diff
-             const Jd = (null !== (Nd = pd.get(dd.name)) && void 0 !== Nd ? Nd : []).filter((dd => JSON.stringify(dd.selection) !== JSON.stringify(ed.selection)));
+             const FQ = (null !== (qQ = LQ.get(QQ.name)) && void 0 !== qQ ? qQ : []).filter((QQ => JSON.stringify(QQ.selection) !== JSON.stringify(tQ.selection)));
```

#### 2287. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25511` → after: `L25511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25511) · [Before (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25511)

```diff
-         const [Pd, [Zd]] = Wd[0], gd = new RegExp(`${(0,LP.h)(Pd)}(?![\\w$])`);
+         const [DQ, [kQ]] = oQ[0], vQ = new RegExp(`${(0,xD.j)(DQ)}(?![\\w$])`);
```

#### 2288. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25525` → after: `L25525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25525) · [Before (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25525)

```diff
-           if (Cd || !Kd || /^\s*[#|]/.test(Rd) || VI.test(Rd) || 0 === (0, OP.f)(Rd.replace(/\[\[[^\]\n]+\]\]/g, " "), gd, OP.m).length) continue;
+           if (mQ || !uQ || /^\s*[#|]/.test(eQ) || ZM.test(eQ) || 0 === (0, AD.d)(eQ.replace(/\[\[[^\]\n]+\]\]/g, " "), vQ, AD.m).length) continue;
```

#### 2289. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25530` → after: `L25530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25530) · [Before (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25530)

```diff
-           const Jd = null !== (ld = null === (Qd = tI.exec(Rd)) || void 0 === Qd ? void 0 : Qd[0].length) && void 0 !== ld ? ld : 0,
+           const FQ = null !== (bQ = null === (YQ = PM.exec(eQ)) || void 0 === YQ ? void 0 : YQ[0].length) && void 0 !== bQ ? bQ : 0,
```

#### 2290. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25538` → after: `L25538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25538) · [Before (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25538)

```diff
-             Wd = Nd + (null !== (Ld = null === (Od = pM.exec(Rd.slice(Nd))) || void 0 === Od ? void 0 : Od[0].length) && void 0 !== Ld ? Ld : 0),
+             oQ = qQ + (null !== (xQ = null === (AQ = LO.exec(eQ.slice(qQ))) || void 0 === AQ ? void 0 : AQ[0].length) && void 0 !== xQ ? xQ : 0),
```

#### 2291. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25540-L25541` → after: `L25540-L25541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25540-L25541) · [Before (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25540-L25541)

```diff
-             Id = `${NM(Zd)} [[Heatmap]].`;
-           return od[ed] = `${Rd.slice(0,Wd)}${Pd} ${Id}${Rd.slice(Wd)}`, {
+             MQ = `${qO(kQ)} [[Heatmap]].`;
+           return HQ[tQ] = `${eQ.slice(0,oQ)}${DQ} ${MQ}${eQ.slice(oQ)}`, {
```

#### 2292. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25557` → after: `L25557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25557) · [Before (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25557)

```diff
-       }(gd.markdown, [...null !== ld && void 0 !== ld ? ld : [], ...null !== Qd && void 0 !== Qd ? Qd : []], Wd);
+       }(vQ.markdown, [...null !== bQ && void 0 !== bQ ? bQ : [], ...null !== YQ && void 0 !== YQ ? YQ : []], oQ);
```

#### 2293. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25565-L25567` → after: `L25565-L25567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25565-L25567) · [Before (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25565-L25567)

```diff
-     const dd = [...(null !== od && void 0 !== od ? od : []).flatMap((dd => [dd.reason, dd.typical])), ...xd.repairs.map((dd => dd.to))];
-     return ZI(Cd, null === Kd ? dd : [Kd.change, ...dd])
-   })(), Bd = new Set((null !== od && void 0 !== od ? od : []).flatMap((dd => "good" === dd.verdict ? [dd.key] : []))), sd = ze(Zd), ad = oa(vd, Wd), Md = xd.markdown, Fd = null === gd ? Md : mD(Md, gd, Bd, "young" === Zd, qd).markdown, Yd = sd ? Ui(Fd, (md = Pd, null === md ? []  … [truncated]
+     const QQ = [...(null !== HQ && void 0 !== HQ ? HQ : []).flatMap((QQ => [QQ.reason, QQ.typical])), ...cQ.repairs.map((QQ => QQ.to))];
+     return vM(mQ, null === uQ ? QQ : [uQ.change, ...QQ])
+   })(), SQ = new Set((null !== HQ && void 0 !== HQ ? HQ : []).flatMap((QQ => "good" === QQ.verdict ? [QQ.key] : []))), iQ = yt(kQ), WQ = HR(pQ, oQ), RQ = cQ.markdown, OQ = null === vQ ? RQ : RX(RQ, vQ, SQ, "young" === kQ, CQ).markdown, sQ = iQ ? aW(OQ, (rQ = DQ, null === rQ ? []  … [truncated]
```

#### 2294. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25586` → after: `L25586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25586) · [Before (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25586)

```diff
-         markdown: 0 === Nd.length ? dd : Wd,
+         markdown: 0 === qQ.length ? QQ : oQ,
```

#### 2295. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25615` → after: `L25615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25615) · [Before (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25615)

```diff
-         return `${dd.slice(0,Nd.end)}${Pd}${dd.slice(Wd)}`
+         return `${QQ.slice(0,qQ.end)}${DQ}${QQ.slice(oQ)}`
```

#### 2296. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25653` → after: `L25653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25653) · [Before (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25653)

```diff
-         markdown: 0 === Jd.length ? dd : kd,
+         markdown: 0 === FQ.length ? QQ : wQ,
```

#### 2297. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25670` → after: `L25670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25670) · [Before (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25670)

```diff
-           const Jd = `the ${dd}`;
+           const FQ = `the ${QQ}`;
```

#### 2298. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25681` → after: `L25681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25681) · [Before (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25681)

```diff
-         of kd) Nd = (0, OP.s)(Nd, new RegExp(`(${(0,LP.h)(Wd)})(?![\\w-])`, "gi"), (0, OP.k)("\\w-"), (dd => {
+         of wQ) qQ = (0, AD.x)(qQ, new RegExp(`(${(0,xD.j)(oQ)})(?![\\w-])`, "gi"), (0, AD.i)("\\w-"), (QQ => {
```

#### 2299. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25683` → after: `L25683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25683) · [Before (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25683)

```diff
-         return /^T/.test(Jd) ? `T${Pd.slice(1)}` : Pd
+         return /^T/.test(FQ) ? `T${DQ.slice(1)}` : DQ
```

#### 2300. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25690` → after: `L25690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25690) · [Before (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25690)

```diff
-     nd = [...null !== ld && void 0 !== ld ? ld : [], ...null !== Qd && void 0 !== Qd ? Qd : []].flatMap((dd => "deaths" === dd.kind ? [dd.square] : [])),
+     zQ = [...null !== bQ && void 0 !== bQ ? bQ : [], ...null !== YQ && void 0 !== YQ ? YQ : []].flatMap((QQ => "deaths" === QQ.kind ? [QQ.square] : [])),
```

#### 2301. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25693` → after: `L25693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25693) · [Before (L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25693)

```diff
-       if (null === Jd || void 0 === Jd || dd.length > LP.r) return {
+       if (null === FQ || void 0 === FQ || QQ.length > xD.u) return {
```

#### 2302. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25695` → after: `L25695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25695) · [Before (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25695)

```diff
-         qQ: []
+         iY: []
```

#### 2303. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25721` → after: `L25721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25721) · [Before (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25721)

```diff
-         qQ: []
+         iY: []
```

#### 2304. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25724` → after: `L25724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25724) · [Before (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25724)

```diff
-         qQ: pd
+         iY: LQ
```

#### 2305. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25737` → after: `L25737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25737) · [Before (L25737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25737)

```diff
-       if (null === Jd || void 0 === Jd || dd.length > LP.r) return {
+       if (null === FQ || void 0 === FQ || QQ.length > xD.u) return {
```

#### 2306. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25748` → after: `L25748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25748) · [Before (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25748)

```diff
-         Zd = `${null!==kd&&void 0!==kd?kd:""}\n${Pd}\n${Pd.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         kQ = `${null!==wQ&&void 0!==wQ?wQ:""}\n${DQ}\n${DQ.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2307. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25757` → after: `L25757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25757) · [Before (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25757)

```diff
-     }(yd, Wd, null !== (Nd = null === ad || void 0 === ad ? void 0 : ad.text) && void 0 !== Nd ? Nd : null, Dd).markdown,
+     }(jQ, oQ, null !== (qQ = null === WQ || void 0 === WQ ? void 0 : WQ.text) && void 0 !== qQ ? qQ : null, aQ).markdown,
```

#### 2308. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25761` → after: `L25761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25761) · [Before (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25761)

```diff
-           if (null === Jd || void 0 === Jd || dd.length > LP.r || 0 === (null !== (kd = Jd.messages) && void 0 !== kd ? kd : []).length) return {
+           if (null === FQ || void 0 === FQ || QQ.length > xD.u || 0 === (null !== (wQ = FQ.messages) && void 0 !== wQ ? wQ : []).length) return {
```

#### 2309. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25799` → after: `L25799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25799) · [Before (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25799)

```diff
-         Nd = null === pd || null === Wd ? pd : {
+         qQ = null === LQ || null === oQ ? LQ : {
```

#### 2310. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25824` → after: `L25824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25824) · [Before (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25824)

```diff
-           return null === dd || 0 === kd.length ? dd : {
+           return null === QQ || 0 === wQ.length ? QQ : {
```

#### 2311. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25828` → after: `L25828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25828) · [Before (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25828)

```diff
-         }(null !== (dd = null === gd || void 0 === gd ? void 0 : gd.grounds) && void 0 !== dd ? dd : null, xd.repairs),
+         }(null !== (QQ = null === vQ || void 0 === vQ ? void 0 : vQ.grounds) && void 0 !== QQ ? QQ : null, cQ.repairs),
```

#### 2312. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25836` → after: `L25836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25836) · [Before (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25836)

```diff
-             kd = null === Pd ? Jd : bG(Jd, Pd, qd).markdown;
+             wQ = null === DQ ? FQ : NG(FQ, DQ, CQ).markdown;
```

#### 2313. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25874` → after: `L25874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25874) · [Before (L25874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25874)

```diff
-         layout: 0 === Jd ? Ed : {
+         layout: 0 === FQ ? fQ : {
```

#### 2314. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25909` → after: `L25909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25909) · [Before (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25909)

```diff
-     Ad = null === qd || null === ud || null === Hd || Hd === ud ? qd : ZI(qd, ec(ud, Hd));
+     BQ = null === CQ || null === EQ || null === ZQ || ZQ === EQ ? CQ : vM(CQ, xh(EQ, ZQ));
```

#### 2315. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25953` → after: `L25953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25953) · [Before (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25953)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,LP.h)(Jd)}(?![\\w$])`, "i").test(dd)
+   return new RegExp(`(?:^|[^\\w$])${(0,xD.j)(FQ)}(?![\\w$])`, "i").test(QQ)
```

#### 2316. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25961` → after: `L25961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25961) · [Before (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25961)

```diff
-   return (0, OP.f)(dd, /[A-Za-z_$][\w$]*(?![\w$])/g, OP.m).map((dd => {
+   return (0, AD.d)(QQ, /[A-Za-z_$][\w$]*(?![\w$])/g, AD.m).map((QQ => {
```

#### 2317. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25970` → after: `L25970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25970) · [Before (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25970)

```diff
-     pd = null !== (Jd = new RegExp(String.raw`^\s*${kd}\s*===?\s*(-?\d+)\s*$`).exec(dd)) && void 0 !== Jd ? Jd : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${kd}\s*$`).exec(dd);
+     LQ = null !== (FQ = new RegExp(String.raw`^\s*${wQ}\s*===?\s*(-?\d+)\s*$`).exec(QQ)) && void 0 !== FQ ? FQ : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${wQ}\s*$`).exec(QQ);
```

#### 2318. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25981` → after: `L25981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25981) · [Before (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25981)

```diff
-   const pd = new Set([...Jd.callbacks, ...null !== (kd = Jd.functions) && void 0 !== kd ? kd : []].map((dd => {
+   const LQ = new Set([...FQ.callbacks, ...null !== (wQ = FQ.functions) && void 0 !== wQ ? wQ : []].map((QQ => {
```

#### 2319. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25999` → after: `L25999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L25999) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L25999)

```diff
-         const Wd = new RegExp(`^${(0,LP.h)(Jd)} (\\d{1,4})$`).exec(dd);
+         const oQ = new RegExp(`^${(0,xD.j)(FQ)} (\\d{1,4})$`).exec(QQ);
```

#### 2320. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26006` → after: `L26006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26006) · [Before (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26006)

```diff
-         else if (dd.startsWith(`${Jd}: `) && dd.length > Jd.length + 2) {
+         else if (QQ.startsWith(`${FQ}: `) && QQ.length > FQ.length + 2) {
```

#### 2321. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26036` → after: `L26036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26036) · [Before (L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26036)

```diff
-   if (null === dd || null === Jd || null === pd || void 0 === pd || dd.length > LP.u || "" === dd.trim()) return null;
+   if (null === QQ || null === FQ || null === LQ || void 0 === LQ || QQ.length > xD.v || "" === QQ.trim()) return null;
```

#### 2322. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26038` → after: `L26038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26038) · [Before (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26038)

```diff
-   const Pd = Dc(Nd, `${kd}\n${Jd}`, pd)[0],
+   const DQ = jh(qQ, `${wQ}\n${FQ}`, LQ)[0],
```

#### 2323. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26046` → after: `L26046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26046) · [Before (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26046)

```diff
-       const pd = [...Jd.callbacks, ...null !== (kd = Jd.functions) && void 0 !== kd ? kd : []].filter((Jd => Jd.name === dd));
+       const LQ = [...FQ.callbacks, ...null !== (wQ = FQ.functions) && void 0 !== wQ ? wQ : []].filter((FQ => FQ.name === QQ));
```

#### 2324. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26074` → after: `L26074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26074) · [Before (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26074)

```diff
-       const Cd = null !== (pd = null === (Nd = dd.valueExpression) || void 0 === Nd ? void 0 : Nd.trim()) && void 0 !== pd ? pd : null;
+       const mQ = null !== (LQ = null === (qQ = QQ.valueExpression) || void 0 === qQ ? void 0 : qQ.trim()) && void 0 !== LQ ? LQ : null;
```

#### 2325. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26080` → after: `L26080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26080) · [Before (L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26080)

```diff
-             Nd = ed === ic[0] || ed === ic[3] || pd !== kd || /^[A-Za-z_$][\w$.]*$/.test(null !== kd && void 0 !== kd ? kd : "");
+             qQ = tQ === Sh[0] || tQ === Sh[3] || LQ !== wQ || /^[A-Za-z_$][\w$.]*$/.test(null !== wQ && void 0 !== wQ ? wQ : "");
```

#### 2326. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26082` → after: `L26082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26082) · [Before (L26082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26082)

```diff
-             gd = `${pd} === ${Number(Jd)}`;
+             vQ = `${LQ} === ${Number(FQ)}`;
```

#### 2327. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26087-L26088` → after: `L26087-L26088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26087-L26088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26087-L26088) · [Before (L26087-L26088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26087-L26088)

```diff
-         od = null === Kd ? null : null !== (Wd = null !== (Pd = null !== (Zd = Kd[1]) && void 0 !== Zd ? Zd : Kd[2]) && void 0 !== Pd ? Pd : Kd[3]) && void 0 !== Wd ? Wd : null,
-         ld = null !== od && void 0 !== od ? od : dd.numberExpression,
+         HQ = null === uQ ? null : null !== (oQ = null !== (DQ = null !== (kQ = uQ[1]) && void 0 !== kQ ? kQ : uQ[2]) && void 0 !== DQ ? DQ : uQ[3]) && void 0 !== oQ ? oQ : null,
+         bQ = null !== HQ && void 0 !== HQ ? HQ : QQ.numberExpression,
```

#### 2328. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26095-L26096` → after: `L26095-L26096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26095-L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26095-L26096) · [Before (L26095-L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26095-L26096)

```diff
-           pd = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,LP.h)(dd)}(?![\\w$])`).test(Cd);
-         nc(Cd).includes(dd) && kd >= 0 && (null !== od || !pd) && (gd = `${dd} === ${kd}`)
+           LQ = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,xD.j)(QQ)}(?![\\w$])`).test(mQ);
+         Kh(mQ).includes(QQ) && wQ >= 0 && (null !== HQ || !LQ) && (vQ = `${QQ} === ${wQ}`)
```

#### 2329. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26099` → after: `L26099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26099) · [Before (L26099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26099)

```diff
-       return null !== gd && nc(gd).every((dd => Od.has(dd))) ? gd : null
+       return null !== vQ && Kh(vQ).every((QQ => AQ.has(QQ))) ? vQ : null
```

#### 2330. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26114` → after: `L26114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26114) · [Before (L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26114)

```diff
-   const Bd = (null !== (Wd = pd.messages) && void 0 !== Wd ? Wd : []).filter((dd => {
+   const SQ = (null !== (oQ = LQ.messages) && void 0 !== oQ ? oQ : []).filter((QQ => {
```

#### 2331. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26118` → after: `L26118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26118) · [Before (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26118)

```diff
-     sd = 1 !== Bd.length || Gc.test(`${kd}\n${Jd}`) ? Zd : Bd[0].at;
+     iQ = 1 !== SQ.length || eh.test(`${wQ}\n${FQ}`) ? kQ : SQ[0].at;
```

#### 2332. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26132` → after: `L26132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26132) · [Before (L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26132)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${kd}(?![\\w$])`).test(dd) || (0, OP.f)(dd, new RegExp(`${kd}\\s*=(?![=>])`), OP.m).length > 0 || vL(dd, Jd) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${kd}\\s*\\([^()]*\\)\\s*\\{`, "m").test(dd)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${wQ}(?![\\w$])`).test(QQ) || (0, AD.d)(QQ, new RegExp(`${wQ}\\s*=(?![=>])`), AD.m).length > 0 || px(QQ, FQ) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${wQ}\\s*\\([^()]*\\)\\s*\\{`, "m").test(QQ)
```

#### 2333. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26136` → after: `L26136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26136) · [Before (L26136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26136)

```diff
-   if (null === dd || null === Jd || void 0 === Jd || void 0 === Jd.declaredNames || dd.length > LP.u) return [];
+   if (null === QQ || null === FQ || void 0 === FQ || void 0 === FQ.declaredNames || QQ.length > xD.v) return [];
```

#### 2334. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26141` → after: `L26141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26141) · [Before (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26141)

```diff
-   for (const [, Wd] of(0, OP.f)(pd, hc, OP.m)) {
+   for (const [, oQ] of(0, AD.d)(LQ, Vh, AD.m)) {
```

#### 2335. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26152` → after: `L26152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26152) · [Before (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26152)

```diff
-   if (null === dd || null === Jd || void 0 === Jd || dd.length > LP.u || !dd.includes("/") || ! function(dd) {
+   if (null === QQ || null === FQ || void 0 === FQ || QQ.length > xD.v || !QQ.includes("/") || ! function(QQ) {
```

#### 2336. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26162` → after: `L26162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26162) · [Before (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26162)

```diff
-   const pd = [...Jd.playerText, ...(null !== (kd = Jd.messages) && void 0 !== kd ? kd : []).map((dd => {
+   const LQ = [...FQ.playerText, ...(null !== (wQ = FQ.messages) && void 0 !== wQ ? wQ : []).map((QQ => {
```

#### 2337. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26171-L26172` → after: `L26171-L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26171-L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26171-L26172) · [Before (L26171-L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26171-L26172)

```diff
-     const dd = null !== (Wd = null !== (Pd = null !== (Zd = gd[1]) && void 0 !== Zd ? Zd : gd[2]) && void 0 !== Pd ? Pd : gd[3]) && void 0 !== Wd ? Wd : gd[4];
-     for (const [Jd] of(0, OP.f)(dd, Vc, (0, OP.k)("\\w/:."))) {
+     const QQ = null !== (oQ = null !== (DQ = null !== (kQ = vQ[1]) && void 0 !== kQ ? kQ : vQ[2]) && void 0 !== DQ ? DQ : vQ[3]) && void 0 !== oQ ? oQ : vQ[4];
+     for (const [FQ] of(0, AD.d)(QQ, nh, (0, AD.i)("\\w/:."))) {
```

#### 2338. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26203` → after: `L26203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26203) · [Before (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26203)

```diff
-     for (const Zd of (0, OP.f)(dd, ix, OP.m)) bx(Zd[0], Jd, kd, pd) || (Zd.index > Pd && Wd.push({
+     for (const kQ of (0, AD.d)(QQ, Oc, AD.m)) Tc(kQ[0], FQ, wQ, LQ) || (kQ.index > DQ && oQ.push({
```

#### 2339. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26213` → after: `L26213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26213) · [Before (L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26213)

```diff
-     title: !0 === dd.isApiCall ? Zd : Pd("Not found in your code"),
+     title: !0 === QQ.isApiCall ? kQ : DQ("Not found in your code"),
```

#### 2340. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26215` → after: `L26215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26215) · [Before (L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26215)

```diff
-   }, `${Jd}-name-${kd}`) : dd.text))
+   }, `${FQ}-name-${wQ}`) : QQ.text))
```

#### 2341. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26242` → after: `L26242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26242) · [Before (L26242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26242)

```diff
-   }, `${kd}-number-${Jd}`)] : dh(dd.text, `${kd}-${Jd}`, pd)))
+   }, `${wQ}-number-${FQ}`)] : Bh(QQ.text, `${wQ}-${FQ}`, LQ)))
```

#### 2342. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26246` → after: `L26246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26246) · [Before (L26246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26246)

```diff
-   return null === dd.suggestion ? Jd("Not a Bloxd item") : `${Jd("Not a Bloxd item")}: ${Jd("Bloxd writes it")} "${dd.suggestion}"`
+   return null === QQ.suggestion ? FQ("Not a Bloxd item") : `${FQ("Not a Bloxd item")}: ${FQ("Bloxd writes it")} "${QQ.suggestion}"`
```

#### 2343. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26257` → after: `L26257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26257) · [Before (L26257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26257)

```diff
-   for (const Cd of Pd) Zd.push(...dh(dd.slice(gd, Cd.start), `${Jd}-${gd}`, kd, pd)), Zd.push((0, lJ.jsx)("span", {
+   for (const mQ of DQ) kQ.push(...Bh(QQ.slice(vQ, mQ.start), `${FQ}-${vQ}`, wQ, LQ)), kQ.push((0, HF.jsx)("span", {
```

#### 2344. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26261-L26262` → after: `L26261-L26262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26261-L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26261-L26262) · [Before (L26261-L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26261-L26262)

```diff
-   }, `${Jd}-item-${Cd.start}`)), gd = Cd.end;
-   return Zd.push(...dh(dd.slice(gd), `${Jd}-${gd}`, kd, pd)), Zd
+   }, `${FQ}-item-${mQ.start}`)), vQ = mQ.end;
+   return kQ.push(...Bh(QQ.slice(vQ), `${FQ}-${vQ}`, wQ, LQ)), kQ
```

#### 2345. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26277` → after: `L26277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26277) · [Before (L26277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26277)

```diff
-     ld <= Wd || (Wd > Zd && Pd.push(...Jh(dd.slice(Zd, Wd), Jd + dd.slice(0, Zd), `${pd}-${Zd}`, Nd)), Pd.push((0, lJ.jsx)("span", {
+     bQ <= oQ || (oQ > kQ && DQ.push(...dh(QQ.slice(kQ, oQ), FQ + QQ.slice(0, kQ), `${LQ}-${kQ}`, qQ)), DQ.push((0, HF.jsx)("span", {
```

#### 2346. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26281` → after: `L26281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26281) · [Before (L26281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26281)

```diff
-     }, `${pd}-marked-${Wd}`)), Zd = ld)
+     }, `${LQ}-marked-${oQ}`)), kQ = bQ)
```

#### 2347. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26283` → after: `L26283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26283) · [Before (L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26283)

```diff
-   return 0 === Zd ? Jh(dd, Jd, pd, Nd) : (Zd < dd.length && Pd.push(...Jh(dd.slice(Zd), Jd + dd.slice(0, Zd), `${pd}-${Zd}`, Nd)), Pd)
+   return 0 === kQ ? dh(QQ, FQ, LQ, qQ) : (kQ < QQ.length && DQ.push(...dh(QQ.slice(kQ), FQ + QQ.slice(0, kQ), `${LQ}-${kQ}`, qQ)), DQ)
```

#### 2348. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26294` → after: `L26294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26294) · [Before (L26294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26294)

```diff
-     title: `${kd("What your code says")}: ${Jd.hint}`,
+     title: `${wQ("What your code says")}: ${FQ.hint}`,
```

#### 2349. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26308` → after: `L26308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26308) · [Before (L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26308)

```diff
-     title: `${kd("Worked out by Studio from your code")}:\n${Jd.hint}`,
+     title: `${wQ("Worked out by Studio from your code")}:\n${FQ.hint}`,
```

#### 2350. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26348` → after: `L26348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26348) · [Before (L26348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26348)

```diff
-       }, `${Jd}-note-${Pd}`))
+       }, `${FQ}-note-${DQ}`))
```

#### 2351. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26354-L26355` → after: `L26354-L26355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26354-L26355) · [Before (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26354-L26355)

```diff
-         const gd = Math.min(Cd, Math.max(Kd, null !== (od = null === (ld = Wd[Pd]) || void 0 === ld ? void 0 : ld.end) && void 0 !== od ? od : Cd));
-         gd > Kd && pd.push(...Nh(dd.slice(Kd, gd), dd.slice(0, Kd), Kd, `${Jd}-${Kd}`, kd, Nd)), Kd = gd, Zd(Kd)
+         const vQ = Math.min(mQ, Math.max(uQ, null !== (HQ = null === (bQ = oQ[DQ]) || void 0 === bQ ? void 0 : bQ.end) && void 0 !== HQ ? HQ : mQ));
+         vQ > uQ && LQ.push(...wJ(QQ.slice(uQ, vQ), QQ.slice(0, uQ), uQ, `${FQ}-${uQ}`, wQ, qQ)), uQ = vQ, kQ(uQ)
```

#### 2352. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26359` → after: `L26359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26359) · [Before (L26359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26359)

```diff
-   for (const Qd of dd.matchAll(IS.f)) {
+   for (const YQ of QQ.matchAll(GN.d)) {
```

#### 2353. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26361-L26362` → after: `L26361-L26362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26361-L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26361-L26362) · [Before (L26361-L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26361-L26362)

```diff
-     const [, Wd, Pd, Ld, Od, ed, Rd] = Qd, Id = `${Jd}-${Qd.index}`, Gd = dd.slice(0, Qd.index);
-     if (void 0 !== Wd) pd.push((0, IS.g)(Wd, Pd));
+     const [, oQ, DQ, xQ, AQ, tQ, eQ] = YQ, MQ = `${FQ}-${YQ.index}`, GQ = QQ.slice(0, YQ.index);
+     if (void 0 !== oQ) LQ.push((0, GN.h)(oQ, DQ));
```

#### 2354. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26366` → after: `L26366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26366) · [Before (L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26366)

```diff
-         children: Nh(null !== (Kd = null !== Ld && void 0 !== Ld ? Ld : Od) && void 0 !== Kd ? Kd : "", Gd, Qd.index + 2, Id, kd, Nd)
+         children: wJ(null !== (uQ = null !== xQ && void 0 !== xQ ? xQ : AQ) && void 0 !== uQ ? uQ : "", GQ, YQ.index + 2, MQ, wQ, qQ)
```

#### 2355. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26380` → after: `L26380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26380) · [Before (L26380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26380)

```diff
-           children: ph(null !== Rd && void 0 !== Rd ? Rd : "", Id, kd, "code")
+           children: FJ(null !== eQ && void 0 !== eQ ? eQ : "", MQ, wQ, "code")
```

#### 2356. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26382` → after: `L26382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26382) · [Before (L26382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26382)

```diff
-         Wd = void 0 === dd ? KL(null !== Rd && void 0 !== Rd ? Rd : "") : null;
+         oQ = void 0 === QQ ? ux(null !== eQ && void 0 !== eQ ? eQ : "") : null;
```

#### 2357. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26385` → after: `L26385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26385) · [Before (L26385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26385)

```diff
-         title: (od = Wd, ld = kd.t, `${ld("World Code has no")} ${od}, ${ld("so this code won't run")}`),
+         title: (HQ = oQ, bQ = wQ.t, `${bQ("World Code has no")} ${HQ}, ${bQ("so this code won't run")}`),
```

#### 2358. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26387` → after: `L26387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26387) · [Before (L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26387)

```diff
-       }, Id) : void 0 === dd ? Jd : (0, lJ.jsx)("span", {
+       }, MQ) : void 0 === QQ ? FQ : (0, HF.jsx)("span", {
```

#### 2359. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26412` → after: `L26412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26412) · [Before (L26412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26412)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2360. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26415` → after: `L26415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26415) · [Before (L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26415)

```diff
-     }), void 0 === gd ? Zd : (0, lJ.jsxs)(lJ.Fragment, {
+     }), void 0 === vQ ? kQ : (0, HF.jsxs)(HF.Fragment, {
```

#### 2361. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26438` → after: `L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26438) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26438)

```diff
-   Qh = new RegExp(`${oh}([${String.fromCharCode(lh)}-${String.fromCharCode(63743)}])`, "g");
+   HJ = new RegExp(`${mJ}([${String.fromCharCode(uJ)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2362. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26442` → after: `L26442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26442) · [Before (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26442)

```diff
-     pd = dd.replace(Ch, ((dd, Jd) => Kh.test(Jd) ? dd : Jd.startsWith("[[") && Jd.endsWith("]]") && null !== Zp(Jd.slice(2, -2)) ? Jd : (kd.push(dd), oh + String.fromCharCode(lh + kd.length - 1)))),
+     LQ = QQ.replace(kJ, ((QQ, FQ) => vJ.test(FQ) ? QQ : FQ.startsWith("[[") && FQ.endsWith("]]") && null !== DL(FQ.slice(2, -2)) ? FQ : (wQ.push(QQ), mJ + String.fromCharCode(uJ + wQ.length - 1)))),
```

#### 2363. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26449` → after: `L26449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26449) · [Before (L26449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26449)

```diff
-         "" !== dd && ("text" === (null === kd || void 0 === kd ? void 0 : kd.kind) ? kd.text += dd : Jd.push({
+         "" !== QQ && ("text" === (null === wQ || void 0 === wQ ? void 0 : wQ.kind) ? wQ.text += QQ : FQ.push({
```

#### 2364. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26467` → after: `L26467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26467) · [Before (L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26467)

```diff
-         const ld = null !== (Wd = null === (Pd = Cp.exec(dd.slice(pd))) || void 0 === Pd ? void 0 : Pd[0]) && void 0 !== Wd ? Wd : "";
+         const bQ = null !== (oQ = null === (DQ = vL.exec(QQ.slice(LQ))) || void 0 === DQ ? void 0 : DQ[0]) && void 0 !== oQ ? oQ : "";
```

#### 2365. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26491` → after: `L26491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26491) · [Before (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26491)

```diff
-       const Qd = Ql(Number((null !== (ld = null !== Nd && void 0 !== Nd ? Nd : Pd) && void 0 !== ld ? ld : "").replace(/,/g, "")), null !== Wd && void 0 !== Wd ? Wd : Zd, Number(gd.replace(/,/g, "")), Cd);
+       const YQ = Yb(Number((null !== (bQ = null !== qQ && void 0 !== qQ ? qQ : DQ) && void 0 !== bQ ? bQ : "").replace(/,/g, "")), null !== oQ && void 0 !== oQ ? oQ : kQ, Number(vQ.replace(/,/g, "")), mQ);
```

#### 2366. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26496` → after: `L26496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26496) · [Before (L26496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26496)

```diff
-       return void 0 === Rd ? dd : `${Ol(Rd,Jd)}${dd.slice(Jd.length)}`
+       return void 0 === eQ ? QQ : `${Ab(eQ,FQ)}${QQ.slice(FQ.length)}`
```

#### 2367. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26515` → after: `L26515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26515) · [Before (L26515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26515)

```diff
-   return void 0 === dd[3] || !(0, OP.e)(dd, "*\\w")
+   return void 0 === QQ[3] || !(0, AD.c)(QQ, "*\\w")
```

#### 2368. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26525` → after: `L26525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26525) · [Before (L26525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26525)

```diff
-     return (0, OP.s)(dd, eh, Rh, (dd => {
+     return (0, AD.x)(QQ, xJ, AJ, (QQ => {
```

#### 2369. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26531-L26532` → after: `L26531-L26532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26531-L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26531-L26532) · [Before (L26531-L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26531-L26532)

```diff
-       const Pd = null !== pd && void 0 !== pd ? pd : "*";
-       return (null !== Nd && void 0 !== Nd ? Nd : Wd).split(/(\[\[[^\]\n]+\]\])/).map(((dd, Jd) => {
+       const DQ = null !== LQ && void 0 !== LQ ? LQ : "*";
+       return (null !== qQ && void 0 !== qQ ? qQ : oQ).split(/(\[\[[^\]\n]+\]\])/).map(((QQ, FQ) => {
```

#### 2370. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26536` → after: `L26536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26536) · [Before (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26536)

```diff
-         return `${kd}${Pd}${dd.trim()}${Pd}${pd}`
+         return `${wQ}${DQ}${QQ.trim()}${DQ}${LQ}`
```

#### 2371. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26549-L26550` → after: `L26549-L26550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26549-L26550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26549-L26550) · [Before (L26549-L26550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26549-L26550)

```diff
-         Qd = null === ld || "heatmap" !== dd.link.key ? ld : iP(FP(ld, null === (Cd = kd.checkData) || void 0 === Cd ? void 0 : Cd.heatmapEvents), od),
-         Ld = null !== Qd || "heatmap" !== dd.link.key ? Qd : nb(mP(Zd(pd), Pd(pd + 1, Wd.length) + Nd), {
+         YQ = null === bQ || "heatmap" !== QQ.link.key ? bQ : WD(sD(bQ, null === (mQ = wQ.checkData) || void 0 === mQ ? void 0 : mQ.heatmapEvents), HQ),
+         xQ = null !== YQ || "heatmap" !== QQ.link.key ? YQ : jU(ID(kQ(LQ), DQ(LQ + 1, oQ.length) + qQ), {
```

#### 2372. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26558` → after: `L26558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26558) · [Before (L26558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26558)

```diff
-       }, `${Jd}stat-${pd}`)]
+       }, `${FQ}stat-${LQ}`)]
```

#### 2373. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26560` → after: `L26560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26560) · [Before (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26560)

```diff
-     return Zh(dd.text, `${Jd}${pd}`, kd)
+     return oJ(QQ.text, `${FQ}${LQ}`, wQ)
```

#### 2374. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26572` → after: `L26572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26572) · [Before (L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26572)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2375. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26575` → after: `L26575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26575) · [Before (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26575)

```diff
-     }), null === Jd ? kd("Studio has no data on this: a guess") : `${kd("Only")} ${Jd} ${kd("players so far: a guess")}`]
+     }), null === FQ ? wQ("Studio has no data on this: a guess") : `${wQ("Only")} ${FQ} ${wQ("players so far: a guess")}`]
```

#### 2376. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26588-L26589` → after: `L26588-L26589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26588-L26589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26588-L26589) · [Before (L26588-L26589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26588-L26589)

```diff
-     title: `${kd("What your code says")}: ${Jd.hint}`,
-     children: [(0, lJ.jsx)(vd.e, {
+     title: `${wQ("What your code says")}: ${FQ.hint}`,
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2377. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26617` → after: `L26617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26617) · [Before (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26617)

```diff
-         }), " ", kd("events"), "" === dd.category ? "" : ` ${kd("in")} ${dd.category}`, " ", kd("are at"), " ", dd.text]
+         }), " ", wQ("events"), "" === QQ.category ? "" : ` ${wQ("in")} ${QQ.category}`, " ", wQ("are at"), " ", QQ.text]
```

#### 2378. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26624` → after: `L26624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26624) · [Before (L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26624)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2379. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26646` → after: `L26646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26646) · [Before (L26646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26646)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2380. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26649` → after: `L26649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26649) · [Before (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26649)

```diff
-     }), kd ? `${Jd.from} ${pd("also leads to")} ${Jd.other}, ${pd("so players who didn't get to")} ${Jd.to} ${pd("may have gone there instead")}.` : `${Jd.from} ${pd("also leads on to")} ${Jd.other} (${Jd.otherShare}% ${pd("of its players")}), ${pd("so the")} ${Jd.notTakenShare}% … [truncated]
+     }), wQ ? `${FQ.from} ${LQ("also leads to")} ${FQ.other}, ${LQ("so players who didn't get to")} ${FQ.to} ${LQ("may have gone there instead")}.` : `${FQ.from} ${LQ("also leads on to")} ${FQ.other} (${FQ.otherShare}% ${LQ("of its players")}), ${LQ("so the")} ${FQ.notTakenShare}% … [truncated]
```

#### 2381. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26670` → after: `L26670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26670) · [Before (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26670)

```diff
-           od = (0, LP.O)(dd, Wd.end);
+           HQ = (0, xD.L)(QQ, oQ.end);
```

#### 2382. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26675-L26676` → after: `L26675-L26676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26675-L26676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26675-L26676) · [Before (L26675-L26676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26675-L26676)

```diff
-           text: "turned" === Cd ? `Studio turned this round: in your code ${Kd}.` : `${pd?"Careful":"Check the direction"}: in your code ${Kd}.`,
-           hint: "" === Jd.usedIn ? `its name, ${Jd.name}` : Jd.usedIn
+           text: "turned" === mQ ? `Studio turned this round: in your code ${uQ}.` : `${LQ?"Careful":"Check the direction"}: in your code ${uQ}.`,
+           hint: "" === FQ.usedIn ? `its name, ${FQ.name}` : FQ.usedIn
```

#### 2383. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26695` → after: `L26695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26695) · [Before (L26695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26695)

```diff
-         }, `bump-${Nd}`)
+         }, `bump-${qQ}`)
```

#### 2384. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26702` → after: `L26702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26702) · [Before (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26702)

```diff
-       }, `guess-${kd}`)
+       }, `guess-${wQ}`)
```

#### 2385. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26708` → after: `L26708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26708) · [Before (L26708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26708)

```diff
-       }, `place-${kd}`)
+       }, `place-${wQ}`)
```

#### 2386. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26715` → after: `L26715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26715) · [Before (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26715)

```diff
-       }, `branch-${kd}`)
+       }, `branch-${wQ}`)
```

#### 2387. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26721` → after: `L26721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26721) · [Before (L26721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26721)

```diff
-       }, `constant-${kd}`)
+       }, `constant-${wQ}`)
```

#### 2388. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26727` → after: `L26727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26727) · [Before (L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26727)

```diff
-       }, `goal-${kd}`)
+       }, `goal-${wQ}`)
```

#### 2389. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26730` → after: `L26730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26730) · [Before (L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26730)

```diff
-   for (const pd of dd.matchAll(IS.f)) {
+   for (const LQ of QQ.matchAll(GN.d)) {
```

#### 2390. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26745` → after: `L26745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26745) · [Before (L26745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26745)

```diff
-     const Wd = Ih(gd(Cd, pd), `g${kd}-`, Jd, Oh(gd(0, Cd)), Oh(gd(pd)));
+     const oQ = tJ(vQ(mQ, LQ), `g${wQ}-`, FQ, YJ(vQ(0, mQ)), YJ(vQ(LQ)));
```

#### 2391. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26747` → after: `L26747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26747) · [Before (L26747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26747)

```diff
-   })), ...Ih(gd(Cd), `g${Zd.length}-`, Jd, Oh(gd(0, Cd)))]
+   })), ...tJ(vQ(mQ), `g${kQ.length}-`, FQ, YJ(vQ(0, mQ)))]
```

#### 2392. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26790` → after: `L26790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26790) · [Before (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26790)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2393. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26823` → after: `L26823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26823) · [Before (L26823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26823)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2394. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26841-L26842` → after: `L26841-L26842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26841-L26842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26841-L26842) · [Before (L26841-L26842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26841-L26842)

```diff
-     title: null !== (Jd = kd.line) && void 0 !== Jd ? Jd : `"${kd.text}"`,
-     children: [(0, lJ.jsx)(vd.e, {
+     title: null !== (FQ = wQ.line) && void 0 !== FQ ? FQ : `"${wQ.text}"`,
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2395. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26861` → after: `L26861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26861) · [Before (L26861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26861)

```diff
-       return `"${Jd}"`
+       return `"${FQ}"`
```

#### 2396. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26872` → after: `L26872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26872) · [Before (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26872)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2397. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26875` → after: `L26875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26875) · [Before (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26875)

```diff
-     }), " ", kd ? `${pd("Studio can't find")} ${Nd} ${pd("in your game")}: ${pd(Wd?"use your own place's name":"use one your game has")}.` : `${pd("Is")} ${Nd} ${pd("in your game? If not, use one that is.")}`]
+     }), " ", wQ ? `${LQ("Studio can't find")} ${qQ} ${LQ("in your game")}: ${LQ(oQ?"use your own place's name":"use one your game has")}.` : `${LQ("Is")} ${qQ} ${LQ("in your game? If not, use one that is.")}`]
```

#### 2398. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26885` → after: `L26885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26885) · [Before (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26885)

```diff
-   const Nd = kd ? "badge" === Jd.kind ? `${pd("Your game already has the")} "${Jd.name}" ${pd("badge")}` : `${pd("Your game already sends")} "${Jd.name}"` : "badge" === Jd.kind ? pd("You already have this badge.") : pd("You already have this message.");
+   const qQ = wQ ? "badge" === FQ.kind ? `${LQ("Your game already has the")} "${FQ.name}" ${LQ("badge")}` : `${LQ("Your game already sends")} "${FQ.name}"` : "badge" === FQ.kind ? LQ("You already have this badge.") : LQ("You already have this message.");
```

#### 2399. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26888` → after: `L26888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26888) · [Before (L26888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26888)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2400. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26985` → after: `L26985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26985) · [Before (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26985)

```diff
-   return Xh((0, QI.y)(dd), Jd)
+   return NJ((0, xM.F)(QQ), FQ)
```

#### 2401. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26996` → after: `L26996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L26996) · [Before (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L26996)

```diff
-     children: [kd.includes(Jd.counts) ? "" : `${Jd.counts}. `, pd("Why this number"), ": ", Jd.basis]
+     children: [wQ.includes(FQ.counts) ? "" : `${FQ.counts}. `, LQ("Why this number"), ": ", FQ.basis]
```

#### 2402. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27001` → after: `L27001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27001) · [Before (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27001)

```diff
-   return `${Jd("Target")}: ${dd.change} ${dd.counts}`
+   return `${FQ("Target")}: ${QQ.change} ${QQ.counts}`
```

#### 2403. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27033` → after: `L27033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27033) · [Before (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27033)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2404. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27064` → after: `L27064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27064) · [Before (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27064)

```diff
-       Cd = dd => `${dd}%`,
+       mQ = QQ => `${QQ}%`,
```

#### 2405. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27070` → after: `L27070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27070) · [Before (L27070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27070)

```diff
-         ld = [`${Cd(Wd)} ${kd("of sessions")} ${ex(Nd.minutes,kd)}`], Qd = Cd;
+         bQ = [`${mQ(oQ)} ${wQ("of sessions")} ${Mc(qQ.minutes,wQ)}`], YQ = mQ;
```

#### 2406. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27073` → after: `L27073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27073) · [Before (L27073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27073)

```diff
-         ld = [`${Cd(Wd)} ${kd("of players at")} `, {
+         bQ = [`${mQ(oQ)} ${wQ("of players at")} `, {
```

#### 2407. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27075` → after: `L27075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27075) · [Before (L27075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27075)

```diff
-         }, ` ${kd("reach")} `, {
+         }, ` ${wQ("reach")} `, {
```

#### 2408. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27077` → after: `L27077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27077) · [Before (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27077)

```diff
-         }, Nd.isOrLater ? ` ${kd("or a later one")}` : ""], Qd = Cd;
+         }, qQ.isOrLater ? ` ${wQ("or a later one")}` : ""], YQ = mQ;
```

#### 2409. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27080` → after: `L27080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27080) · [Before (L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27080)

```diff
-         ld = [`${Ox(Nd.toPlayers)} ${kd("of the")} ${Ox(Nd.fromPlayers)} ${kd("players who reached")} ${Nd.from} ${kd("also reached")} ${Nd.to} (${Cd(Wd)})`], Qd = Cd;
+         bQ = [`${ec(qQ.toPlayers)} ${wQ("of the")} ${ec(qQ.fromPlayers)} ${wQ("players who reached")} ${qQ.from} ${wQ("also reached")} ${qQ.to} (${mQ(oQ)})`], YQ = mQ;
```

#### 2410. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27083` → after: `L27083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27083) · [Before (L27083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27083)

```diff
-         ld = [`${Ox(Wd)} ${kd("plays a day")}`], Qd = dd => `${Ox(dd)} ${kd("plays a day")}`;
+         bQ = [`${ec(oQ)} ${wQ("plays a day")}`], YQ = QQ => `${ec(QQ)} ${wQ("plays a day")}`;
```

#### 2411. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27086` → after: `L27086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27086) · [Before (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27086)

```diff
-         ld = [`${kd("an average session lasts")} ${Ox(Wd)} ${kd("minutes")}`], Qd = dd => `${Ox(dd)} ${kd("minutes")}`;
+         bQ = [`${wQ("an average session lasts")} ${ec(oQ)} ${wQ("minutes")}`], YQ = QQ => `${ec(QQ)} ${wQ("minutes")}`;
```

#### 2412. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27089` → after: `L27089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27089) · [Before (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27089)

```diff
-         ld = [`${kd("each player plays")} ${Ox(Wd)} ${kd("times in")} ${Nd.days} ${kd("days")}`], Qd = dd => `${Ox(dd)} ${kd("times")}`
+         bQ = [`${wQ("each player plays")} ${ec(oQ)} ${wQ("times in")} ${qQ.days} ${wQ("days")}`], YQ = QQ => `${ec(QQ)} ${wQ("times")}`
```

#### 2413. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27092` → after: `L27092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27092) · [Before (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27092)

```diff
-       Od = pd ? "" : `${kd("now")} ${Qd(Wd)}`;
+       AQ = LQ ? "" : `${wQ("now")} ${YQ(oQ)}`;
```

#### 2414. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27095-L27097` → after: `L27095-L27097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27095-L27097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27095-L27097) · [Before (L27095-L27097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27095-L27097)

```diff
-       const dd = pd ? "" : `, ${Od}`,
-         Jd = Kd ? `, ${kd("the goal")}` : null === Zd ? "" : `; ${kd("the goal is")} ${Cd(Zd)}`;
-       ed = `${gd.helpedAt} ${kd("above")} ${Ox(gd.helpedPlayers)} (${Cd(Pd)} ${kd("of the new players")}${dd}${Jd}) ${od}.`
+       const QQ = LQ ? "" : `, ${AQ}`,
+         FQ = uQ ? `, ${wQ("the goal")}` : null === kQ ? "" : `; ${wQ("the goal is")} ${mQ(kQ)}`;
+       tQ = `${vQ.helpedAt} ${wQ("above")} ${ec(vQ.helpedPlayers)} (${mQ(DQ)} ${wQ("of the new players")}${QQ}${FQ}) ${HQ}.`
```

#### 2415. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27099-L27100` → after: `L27099-L27100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27099-L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27099-L27100) · [Before (L27099-L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27099-L27100)

```diff
-       const dd = Ld ? ` ${kd("over those")} ${gd.days} ${kd("days")}` : "";
-       ed = `${Kd?`${kd(Ld?"an average of":"reaching")} ${Qd(Pd)}${dd} (${kd("the goal")}${pd?"":`; ${Od}`})`:`${kd(Ld?"an average above":"above")} ${Qd(Pd)}${dd}${pd?"":` (${Od})`}`} ${od}${Kd||null===Zd?"":` (${kd("the goal is")} ${Qd(Zd)})`}.`
+       const QQ = xQ ? ` ${wQ("over those")} ${vQ.days} ${wQ("days")}` : "";
+       tQ = `${uQ?`${wQ(xQ?"an average of":"reaching")} ${YQ(DQ)}${QQ} (${wQ("the goal")}${LQ?"":`; ${AQ}`})`:`${wQ(xQ?"an average above":"above")} ${YQ(DQ)}${QQ}${LQ?"":` (${AQ})`}`} ${HQ}${uQ||null===kQ?"":` (${wQ("the goal is")} ${YQ(kQ)})`}.`
```

#### 2416. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27103` → after: `L27103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27103) · [Before (L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27103)

```diff
-       Id = null !== Rd && Rd.high >= Pd ? ` ${kd("In the last")} ${nv} ${kd("days, single days went from")} ${Ox(Rd.low)} ${kd("to")} ${Qd(Rd.high)}, ${kd("so go by the average")}.` : "";
+       MQ = null !== eQ && eQ.high >= DQ ? ` ${wQ("In the last")} ${ap} ${wQ("days, single days went from")} ${ec(eQ.low)} ${wQ("to")} ${YQ(eQ.high)}, ${wQ("so go by the average")}.` : "";
```

#### 2417. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27108` → after: `L27108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27108) · [Before (L27108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27108)

```diff
-         Gd = [`${kd("In")} ${gd.days} ${kd("days")}, ${kd("check")} `, Rx(dd), "days" !== gd.kind || Ld ? "" : ` ${kd("over those days")}`, `: ${kd("now")} `, ...ld, `, ${kd("and")} ${ed}`];
+         GQ = [`${wQ("In")} ${vQ.days} ${wQ("days")}, ${wQ("check")} `, Gc(QQ), "days" !== vQ.kind || xQ ? "" : ` ${wQ("over those days")}`, `: ${wQ("now")} `, ...bQ, `, ${wQ("and")} ${tQ}`];
```

#### 2418. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27111` → after: `L27111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27111) · [Before (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27111)

```diff
-         Gd = [`${kd("When")} ${gd.at} ${kd("has about")} ${Ox(gd.players)} ${kd("players")}, ${kd("check")} `, Rx(dd), `: ${ed}`]
+         GQ = [`${wQ("When")} ${vQ.at} ${wQ("has about")} ${ec(vQ.players)} ${wQ("players")}, ${wQ("check")} `, Gc(QQ), `: ${tQ}`]
```

#### 2419. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27116` → after: `L27116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27116) · [Before (L27116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27116)

```diff
-           Jd = [`${kd("After your change, wait")} ${gd.days} ${kd("days")} (${kd("about")} ${Ox(gd.count)} `, "plays" === gd.counts ? kd("new plays") : kd("new players at that step"), `), ${kd("for the chart to count only those, then check")} `, Rx(dd), ": "];
+           FQ = [`${wQ("After your change, wait")} ${vQ.days} ${wQ("days")} (${wQ("about")} ${ec(vQ.count)} `, "plays" === vQ.counts ? wQ("new plays") : wQ("new players at that step"), `), ${wQ("for the chart to count only those, then check")} `, Gc(QQ), ": "];
```

#### 2420. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27119` → after: `L27119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27119) · [Before (L27119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27119)

```diff
-           Jd = [`${kd("After your change, wait")} ${gd.days} ${kd("days, then check")} `, Rx(dd), Ld ? ": " : ` ${kd("over those days")}: `];
+           FQ = [`${wQ("After your change, wait")} ${vQ.days} ${wQ("days, then check")} `, Gc(QQ), xQ ? ": " : ` ${wQ("over those days")}: `];
```

#### 2421. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27122` → after: `L27122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27122) · [Before (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27122)

```diff
-           Jd = [`${kd("After your change, wait until")} ${gd.at} ${kd("has about")} ${Ox(gd.players)} ${kd("players")} (${Ox(gd.more)} ${kd("more")}), ${kd("then check")} `, Rx(dd), ": "]
+           FQ = [`${wQ("After your change, wait until")} ${vQ.at} ${wQ("has about")} ${ec(vQ.players)} ${wQ("players")} (${ec(vQ.more)} ${wQ("more")}), ${wQ("then check")} `, Gc(QQ), ": "]
```

#### 2422. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27124` → after: `L27124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27124) · [Before (L27124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27124)

```diff
-       Gd = [`${"sessionsLasting"===Nd.kind&&void 0!==Nd.after?`${kd("Your change starts at")} ${Nd.after} ${kd("minutes, so this checks the")} ${Nd.minutes}${kd("-minute mark")}. `:""}${kd("Now")}: `, ...ld, ". ", ...Jd, ed, Id]
+       GQ = [`${"sessionsLasting"===qQ.kind&&void 0!==qQ.after?`${wQ("Your change starts at")} ${qQ.after} ${wQ("minutes, so this checks the")} ${qQ.minutes}${wQ("-minute mark")}. `:""}${wQ("Now")}: `, ...bQ, ". ", ...FQ, tQ, MQ]
```

#### 2423. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27129` → after: `L27129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27129) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27129)

```diff
-       undo: null === dd.undo ? null : [`${kd("If it got worse, put back")} `, {
+       undo: null === QQ.undo ? null : [`${wQ("If it got worse, put back")} `, {
```

#### 2424. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27131` → after: `L27131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27131) · [Before (L27131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27131)

```diff
-       }, ...null === dd.undo.inside ? [] : [` ${kd("inside")} `, {
+       }, ...null === QQ.undo.inside ? [] : [` ${wQ("inside")} `, {
```

#### 2425. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27145` → after: `L27145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27145) · [Before (L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27145)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2426. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27180` → after: `L27180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27180) · [Before (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27180)

```diff
-   } = (0, Qd.B)(), Ld = null === Zd ? null : lx(kd, Zd, Wd, od.constantLines), Od = function(dd, Jd) {
+   } = (0, YQ.y)(), xQ = null === kQ ? null : xc(wQ, kQ, oQ, HQ.constantLines), AQ = function(QQ, FQ) {
```

#### 2427. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27186` → after: `L27186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27186) · [Before (L27186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27186)

```diff
-   }(Ld, Zd).join("\n"), ed = (0, pd.useMemo)((() => "" === Od ? ch : Od.split("\n")), [Od]), Rd = null !== Ld && null !== Zd && od.isOlder ? yY(Ld, Zd, gd) : null, {
+   }(xQ, kQ).join("\n"), tQ = (0, LQ.useMemo)((() => "" === AQ ? fJ : AQ.split("\n")), [AQ]), eQ = null !== xQ && null !== kQ && HQ.isOlder ? fr(xQ, kQ, vQ) : null, {
```

#### 2428. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27251` → after: `L27251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27251) · [Before (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27251)

```diff
-   }(null !== (Jd = null === qd || void 0 === qd ? void 0 : qd.nextChange) && void 0 !== Jd ? Jd : xd) : {
+   }(null !== (FQ = null === CQ || void 0 === CQ ? void 0 : CQ.nextChange) && void 0 !== FQ ? FQ : cQ) : {
```

#### 2429. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27256-L27257` → after: `L27256-L27257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27256-L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27256-L27257) · [Before (L27256-L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27256-L27257)

```diff
-     return kd.steps.indexOf(null !== (Jd = sd.get(dd)) && void 0 !== Jd ? Jd : dd)
-   }, Yd = Bd.steps.length, md = Bd.steps.filter((dd => ad.includes(Fd(dd)))).length, bd = null !== Wd && null !== Bd.target && UI(Bd.target, Wd.change), Sd = null !== Wd && (null === Ld ? xd : kd).blocks.some((dd => "list" === dd.kind ? dd.items.some((dd => UI(dd.text, Wd.change) … [truncated]
+     return wQ.steps.indexOf(null !== (FQ = iQ.get(QQ)) && void 0 !== FQ ? FQ : QQ)
+   }, sQ = SQ.steps.length, rQ = SQ.steps.filter((QQ => WQ.includes(OQ(QQ)))).length, IQ = null !== oQ && null !== SQ.target && aM(SQ.target, oQ.change), UQ = null !== oQ && (null === xQ ? cQ : wQ).blocks.some((QQ => "list" === QQ.kind ? QQ.items.some((QQ => aM(QQ.text, oQ.change) … [truncated]
```

#### 2430. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27301` → after: `L27301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27301) · [Before (L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27301)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2431. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27306` → after: `L27306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27306) · [Before (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27306)

```diff
-         children: [null === Bd.title ? ld(wK) : `${ld(wK)}:`, null !== Bd.title && (0, lJ.jsxs)("span", {
+         children: [null === SQ.title ? bQ(QH) : `${bQ(QH)}:`, null !== SQ.title && (0, HF.jsxs)("span", {
```

#### 2432. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27314` → after: `L27314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27314) · [Before (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27314)

```diff
-         children: `${md}/${Yd}`
+         children: `${rQ}/${sQ}`
```

#### 2433. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27329` → after: `L27329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27329) · [Before (L27329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27329)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2434. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27348` → after: `L27348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27348) · [Before (L27348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27348)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2435. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27364` → after: `L27364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27364) · [Before (L27364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27364)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2436. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27383` → after: `L27383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27383) · [Before (L27383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27383)

```diff
-     Wd = 1 === Nd ? pd("in the first minute") : Nd < 1 ? pd("this early") : `${pd("in the first")} ${Nd} ${pd("minutes")}`,
+     oQ = 1 === qQ ? LQ("in the first minute") : qQ < 1 ? LQ("this early") : `${LQ("in the first")} ${qQ} ${LQ("minutes")}`,
```

#### 2437. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27388` → after: `L27388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27388) · [Before (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27388)

```diff
-     children: kd ? `${pd("Nobody dies")} ${Wd} ${pd("in your game, so this may not help")}.` : `${pd("Studio sees no deaths")} ${Wd} (${pd("the earliest")}, ${Jd.earliest.name}, ${pd("comes at")} ${Pd} ${pd("min on average")}), ${pd("so this may not be why players leave")}.`
+     children: wQ ? `${LQ("Nobody dies")} ${oQ} ${LQ("in your game, so this may not help")}.` : `${LQ("Studio sees no deaths")} ${oQ} (${LQ("the earliest")}, ${FQ.earliest.name}, ${LQ("comes at")} ${DQ} ${LQ("min on average")}), ${LQ("so this may not be why players leave")}.`
```

#### 2438. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27401` → after: `L27401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27401) · [Before (L27401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27401)

```diff
-   } = (0, Qd.B)(), Cd = Wd.blocks.flatMap((dd => {
+   } = (0, YQ.y)(), mQ = oQ.blocks.flatMap((QQ => {
```

#### 2439. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27403-L27404` → after: `L27403-L27404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27403-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27403-L27404) · [Before (L27403-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27403-L27404)

```diff
-     return "list" === dd.kind ? [null !== (Jd = null === (kd = dd.items[0]) || void 0 === kd ? void 0 : kd.text) && void 0 !== Jd ? Jd : ""] : "paragraph" === dd.kind ? [dd.text] : []
-   }))[0], Kd = null !== (Jd = null !== (kd = null !== (pd = null !== (Nd = Wd.title) && void 0 !== Nd ? Nd : null === Pd ? null : Uh(Pd, gd)) && void 0 !== pd ? pd : Wd.target) && void 0 !== kd ? kd : Cd) && void 0 !== Jd ? Jd : null;
+     return "list" === QQ.kind ? [null !== (FQ = null === (wQ = QQ.items[0]) || void 0 === wQ ? void 0 : wQ.text) && void 0 !== FQ ? FQ : ""] : "paragraph" === QQ.kind ? [QQ.text] : []
+   }))[0], uQ = null !== (FQ = null !== (wQ = null !== (LQ = null !== (qQ = oQ.title) && void 0 !== qQ ? qQ : null === DQ ? null : zJ(DQ, vQ)) && void 0 !== LQ ? LQ : oQ.target) && void 0 !== wQ ? wQ : mQ) && void 0 !== FQ ? FQ : null;
```

#### 2440. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27407` → after: `L27407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27407) · [Before (L27407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27407)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2441. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27444` → after: `L27444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27444) · [Before (L27444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27444)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2442. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27502` → after: `L27502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27502) · [Before (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27502)

```diff
-     return null !== (dd = Ni(Od, ed, Md)) && void 0 !== dd ? dd : function(dd, Jd, kd, pd) {
+     return null !== (QQ = oW(AQ, tQ, RQ)) && void 0 !== QQ ? QQ : function(QQ, FQ, wQ, LQ) {
```

#### 2443. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27506` → after: `L27506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27506) · [Before (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27506)

```diff
-       const Zd = null !== (Nd = mc[Pd[1].toLowerCase()]) && void 0 !== Nd ? Nd : Number(Pd[1]),
+       const kQ = null !== (qQ = sh[DQ[1].toLowerCase()]) && void 0 !== qQ ? qQ : Number(DQ[1]),
```

#### 2444. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27508` → after: `L27508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27508) · [Before (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27508)

```diff
-       if (Zd < 1 || dd.length > LP.u || vc.test(Jd) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(gd)) return null;
+       if (kQ < 1 || QQ.length > xD.v || Mh.test(FQ) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(vQ)) return null;
```

#### 2445. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27512` → after: `L27512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27512) · [Before (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27512)

```diff
-           return null !== (Jd = null === (kd = bc.exec(dd)) || void 0 === kd ? void 0 : kd[1]) && void 0 !== Jd ? Jd : null
+           return null !== (FQ = null === (wQ = rh.exec(QQ)) || void 0 === wQ ? void 0 : wQ[1]) && void 0 !== FQ ? FQ : null
```

#### 2446. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27516` → after: `L27516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27516) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27516)

```diff
-         Qd = null !== (Wd = Jd.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== Wd ? Wd : [],
+         YQ = null !== (oQ = FQ.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== oQ ? oQ : [],
```

#### 2447. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27519` → after: `L27519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27519) · [Before (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27519)

```diff
-       return null !== od && 0 !== Cd.length && Ld && void 0 !== Od ? Ni([`if (Date.now() - ${Od}[${od}] >= ${6e4*Zd}) {`, ...Cd.map((dd => `  ${dd}`)), "}"].join("\n"), "onPlayerJoin", pd) : null
+       return null !== HQ && 0 !== mQ.length && xQ && void 0 !== AQ ? oW([`if (Date.now() - ${AQ}[${HQ}] >= ${6e4*kQ}) {`, ...mQ.map((QQ => `  ${QQ}`)), "}"].join("\n"), "onPlayerJoin", LQ) : null
```

#### 2448. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27535` → after: `L27535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27535) · [Before (L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27535)

```diff
-         }))).size ? Jd[0] : null !== (od = null === (ld = Dc(pd, dd, kd)[0]) || void 0 === ld ? void 0 : ld.event) && void 0 !== od ? od : null,
+         }))).size ? FQ[0] : null !== (HQ = null === (bQ = jh(LQ, QQ, wQ)[0]) || void 0 === bQ ? void 0 : bQ.event) && void 0 !== HQ ? HQ : null,
```

#### 2449. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27549` → after: `L27549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27549) · [Before (L27549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27549)

```diff
-     if (void 0 === Ld || null === Jd || Jd.length > LP.u) return null;
+     if (void 0 === xQ || null === FQ || FQ.length > xD.v) return null;
```

#### 2450. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27551` → after: `L27551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27551) · [Before (L27551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27551)

```diff
-       ed = new Set([...null !== (Wd = Ld.params) && void 0 !== Wd ? Wd : [], ...null !== (Pd = Ld.idNames) && void 0 !== Pd ? Pd : [], ...null !== (Zd = null === (gd = Ld.body) || void 0 === gd ? void 0 : gd.locals) && void 0 !== Zd ? Zd : []]),
+       tQ = new Set([...null !== (oQ = xQ.params) && void 0 !== oQ ? oQ : [], ...null !== (DQ = xQ.idNames) && void 0 !== DQ ? DQ : [], ...null !== (kQ = null === (vQ = xQ.body) || void 0 === vQ ? void 0 : vQ.locals) && void 0 !== kQ ? kQ : []]),
```

#### 2451. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27555-L27556` → after: `L27555-L27556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27555-L27556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27555-L27556) · [Before (L27555-L27556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27555-L27556)

```diff
-           Pd = null !== (Jd = null === (pd = dd.numberExpression) || void 0 === pd ? void 0 : pd.trim()) && void 0 !== Jd ? Jd : "",
-           Zd = null === Wd ? void 0 : (null !== (Nd = kd.functions) && void 0 !== Nd ? Nd : []).find((dd => dd.name === Wd[Wd.length - 1])),
+           DQ = null !== (FQ = null === (LQ = QQ.numberExpression) || void 0 === LQ ? void 0 : LQ.trim()) && void 0 !== FQ ? FQ : "",
+           kQ = null === oQ ? void 0 : (null !== (qQ = wQ.functions) && void 0 !== qQ ? qQ : []).find((QQ => QQ.name === oQ[oQ.length - 1])),
```

#### 2452. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27569` → after: `L27569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27569) · [Before (L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27569)

```diff
-   }(ed, Od, Md, Gd) : null), [md, ed, Od, Md, Gd]), Sd = null !== (Jd = null === md || void 0 === md ? void 0 : md.code) && void 0 !== Jd ? Jd : Od, jd = null !== (kd = null !== (Nd = null === md || void 0 === md ? void 0 : md.where) && void 0 !== Nd ? Nd : null === bd || void 0  … [truncated]
+   }(tQ, AQ, RQ, GQ) : null), [rQ, tQ, AQ, RQ, GQ]), UQ = null !== (FQ = null === rQ || void 0 === rQ ? void 0 : rQ.code) && void 0 !== FQ ? FQ : AQ, NQ = null !== (wQ = null !== (qQ = null === rQ || void 0 === rQ ? void 0 : rQ.where) && void 0 !== qQ ? qQ : null === IQ || void 0  … [truncated]
```

#### 2453. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27574` → after: `L27574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27574) · [Before (L27574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27574)

```diff
-     const Jd = null === Xd ? Sd : Xd.code;
+     const FQ = null === TQ ? UQ : TQ.code;
```

#### 2454. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27578` → after: `L27578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27578) · [Before (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27578)

```diff
-       runnable: null === kd || null === pd ? kd : {
+       runnable: null === wQ || null === LQ ? wQ : {
```

#### 2455. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27584-L27585` → after: `L27584-L27585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27584-L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27584-L27585) · [Before (L27584-L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27584-L27585)

```diff
-   }), [Xd, Sd, jd, Md, Fd, Yd]), Ud = null !== (Wd = null === fd || void 0 === fd ? void 0 : fd.code) && void 0 !== Wd ? Wd : null, yd = (0, pd.useMemo)((() => null === (null === fd || void 0 === fd ? void 0 : fd.once) || null === fd ? [] : [fd.once.name]), [fd]), Dd = (0, pd.use … [truncated]
-     return !(null === dd || dd.length > LP.u) && Cm(dd).split("\n").some((dd => pm.test(dd) && Pm.test(dd)))
+   }), [TQ, UQ, NQ, RQ, OQ, sQ]), lQ = null !== (oQ = null === KQ || void 0 === KQ ? void 0 : KQ.code) && void 0 !== oQ ? oQ : null, jQ = (0, LQ.useMemo)((() => null === (null === KQ || void 0 === KQ ? void 0 : KQ.once) || null === KQ ? [] : [KQ.once.name]), [KQ]), aQ = (0, LQ.use … [truncated]
+     return !(null === QQ || QQ.length > xD.v) && HI(QQ).split("\n").some((QQ => oI.test(QQ) && vI.test(QQ)))
```

#### 2456. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27589` → after: `L27589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27589) · [Before (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27589)

```diff
-     const dd = [...Ga(null !== Sd && void 0 !== Sd ? Sd : "", zd, !0), ...Ga(Id, zd)];
+     const QQ = [...GR(null !== UQ && void 0 !== UQ ? UQ : "", PQ, !0), ...GR(MQ, PQ)];
```

#### 2457. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27611` → after: `L27611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27611) · [Before (L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27611)

```diff
-       const [, od, ld, Qd] = Kd, Ld = cC(ld), Od = null !== (Nd = null === Ld || void 0 === Ld ? void 0 : Ld.key) && void 0 !== Nd ? Nd : ld, ed = `${Od}: ${Qd.trim()},`, Rd = null === Jd || null === (Wd = JK.exec(Jd)) || void 0 === Wd ? void 0 : Wd[1];
+       const [, HQ, bQ, YQ] = uQ, xQ = Em(bQ), AQ = null !== (qQ = null === xQ || void 0 === xQ ? void 0 : xQ.key) && void 0 !== qQ ? qQ : bQ, tQ = `${AQ}: ${YQ.trim()},`, eQ = null === FQ || null === (oQ = Lu.exec(FQ)) || void 0 === oQ ? void 0 : oQ[1];
```

#### 2458. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27622` → after: `L27622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27622) · [Before (L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27622)

```diff
-         code: `${Id[1]} ${ld} = ${Qd.trim()}`,
+         code: `${MQ[1]} ${bQ} = ${YQ.trim()}`,
```

#### 2459. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27638` → after: `L27638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27638) · [Before (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27638)

```diff
-         xd = void 0 !== Gd && Gd.startsWith(`${Od}:`) ? Gd : null !== vd && vd[1] === ld ? `${Od}: ${vd[2].trim()},` : null;
+         cQ = void 0 !== GQ && GQ.startsWith(`${AQ}:`) ? GQ : null !== pQ && pQ[1] === bQ ? `${AQ}: ${pQ[2].trim()},` : null;
```

#### 2460. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27641` → after: `L27641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27641) · [Before (L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27641)

```diff
-         where: `${pd("Replace the line")} \`${xd}\` ${pd("inside")} \`${Ld.object}\``
+         where: `${LQ("Replace the line")} \`${cQ}\` ${LQ("inside")} \`${xQ.object}\``
```

#### 2461. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27644` → after: `L27644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27644) · [Before (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27644)

```diff
-         where: void 0 === Rd ? `${pd("Replace the line starting")} \`${Od}:\` ${pd("inside")} \`${Ld.object}\`` : Jd
+         where: void 0 === eQ ? `${LQ("Replace the line starting")} \`${AQ}:\` ${LQ("inside")} \`${xQ.object}\`` : FQ
```

#### 2462. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27655` → after: `L27655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27655) · [Before (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27655)

```diff
-         Pd = null === Wd ? void 0 : null !== (kd = Jd.get(Wd[1])) && void 0 !== kd ? kd : Jd.get(null !== (pd = null === (Nd = cC(Wd[1])) || void 0 === Nd ? void 0 : Nd.key) && void 0 !== pd ? pd : ""),
+         DQ = null === oQ ? void 0 : null !== (wQ = FQ.get(oQ[1])) && void 0 !== wQ ? wQ : FQ.get(null !== (LQ = null === (qQ = Em(oQ[1])) || void 0 === qQ ? void 0 : qQ.key) && void 0 !== LQ ? LQ : ""),
```

#### 2463. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27665` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27665) · [Before (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27665)

```diff
-     if (null !== nd) return null !== (dd = nd.added) && void 0 !== dd ? dd : {
+     if (null !== zQ) return null !== (QQ = zQ.added) && void 0 !== QQ ? QQ : {
```

#### 2464. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27688` → after: `L27688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27688) · [Before (L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27688)

```diff
-   }), [nd, fd, Ud, jd, Md, yd]), NJ = null === JJ ? Ad : 0 === pJ.top.length ? qd("Paste at the bottom of your World Code") : pJ.join.length > 0 ? qd("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === pJ.top.length ? qd("Paste the line abov … [truncated]
+   }), [zQ, KQ, lQ, NQ, RQ, jQ]), LF = null === QF ? BQ : 0 === wF.top.length ? CQ("Paste at the bottom of your World Code") : wF.join.length > 0 ? CQ("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === wF.top.length ? CQ("Paste the line abov … [truncated]
```

#### 2465. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27690-L27691` → after: `L27690-L27691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27690-L27691) · [Before (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27690-L27691)

```diff
-     return null === JJ ? dd : dd.filter((dd => !JJ.params.includes(dd)))
-   }), [nd, Ud, jd, Md, yd, JJ]), PJ = null === hd && null === rd && 0 === td.length && 0 === ud.length && (null !== nd || 0 === WJ.length) && !Ed, ZJ = PJ && (null === (null === fd || void 0 === fd ? void 0 : fd.once) || null !== (null === fd || void 0 === fd ? void 0 : fd.loopNa … [truncated]
+     return null === QF ? QQ : QQ.filter((QQ => !QF.params.includes(QQ)))
+   }), [zQ, lQ, NQ, RQ, jQ, QF]), oF = null === hQ && null === JQ && 0 === nQ.length && 0 === EQ.length && (null !== zQ || 0 === qF.length) && !fQ, DF = oF && (null === (null === KQ || void 0 === KQ ? void 0 : KQ.once) || null !== (null === KQ || void 0 === KQ ? void 0 : KQ.loopNa … [truncated]
```

#### 2466. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27698` → after: `L27698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27698) · [Before (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27698)

```diff
-       return `${dd.slice(0,Wd)}${Jd.test} && ${pd.cond}${dd.slice(Wd+pd.cond.length)}`
+       return `${QQ.slice(0,oQ)}${FQ.test} && ${LQ.cond}${QQ.slice(oQ+LQ.cond.length)}`
```

#### 2467. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27702` → after: `L27702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27702) · [Before (L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27702)

```diff
-     return null === Wd || /^(?:const|let|var|class|function)\b/.test(Wd) || /;\s*\S/.test(Os(Wd)) ? [`if (${Jd.test}) {`, ...Nd.map((dd => `  ${dd}`)), "}"].join("\n") : `if (${Jd.test}) ${Wd}`
+     return null === oQ || /^(?:const|let|var|class|function)\b/.test(oQ) || /;\s*\S/.test(ti(oQ)) ? [`if (${FQ.test}) {`, ...qQ.map((QQ => `  ${QQ}`)), "}"].join("\n") : `if (${FQ.test}) ${oQ}`
```

#### 2468. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27710` → after: `L27710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27710) · [Before (L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27710)

```diff
-   }(gJ.after, CJ) : KJ ? null : ZJ && null === JJ ? qm(Da(wd, Ad, Md, Id), Id, Md) : null), [gJ, CJ, KJ, ZJ, JJ, wd, Ad, Md, Id]), QJ = null !== (Pd = null === nd || void 0 === nd ? void 0 : nd.added) && void 0 !== Pd ? Pd : null, LJ = (0, pd.useMemo)((() => null === QJ ? null :  … [truncated]
+   }(kF.after, vF) : mF ? null : DF && null === QF ? SI(XR(yQ, BQ, RQ, MQ), MQ, RQ) : null), [kF, vF, mF, DF, QF, yQ, BQ, RQ, MQ]), bF = null !== (DQ = null === zQ || void 0 === zQ ? void 0 : zQ.added) && void 0 !== DQ ? DQ : null, YF = (0, LQ.useMemo)((() => null === bF ? null :  … [truncated]
```

#### 2469. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27721` → after: `L27721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27721) · [Before (L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27721)

```diff
-     ["leftOut", (null !== (Zd = null === Xd || void 0 === Xd ? void 0 : Xd.leftOut.length) && void 0 !== Zd ? Zd : 0) > 0],
+     ["leftOut", (null !== (kQ = null === TQ || void 0 === TQ ? void 0 : TQ.leftOut.length) && void 0 !== kQ ? kQ : 0) > 0],
```

#### 2470. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27727` → after: `L27727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27727) · [Before (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27727)

```diff
-   }))) || void 0 === Cd ? void 0 : Cd[0]) && void 0 !== gd ? gd : null, eJ = dd => !Fd || OJ === dd, RJ = eJ("leftOut") ? Ah(null !== (Kd = null === Xd || void 0 === Xd ? void 0 : Xd.leftOut) && void 0 !== Kd ? Kd : [], Fd) : [], IJ = (0, pd.useMemo)((() => null !== gJ ? {
+   }))) || void 0 === mQ ? void 0 : mQ[0]) && void 0 !== vQ ? vQ : null, AF = QQ => !OQ || xF === QQ, tF = AF("leftOut") ? yJ(null !== (uQ = null === TQ || void 0 === TQ ? void 0 : TQ.leftOut) && void 0 !== uQ ? uQ : [], OQ) : [], eF = (0, LQ.useMemo)((() => null !== kF ? {
```

#### 2471. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27734` → after: `L27734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27734) · [Before (L27734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27734)

```diff
-     if ((null !== (pd = Jd.match(/\([^()]*\)/g)) && void 0 !== pd ? pd : []).some((dd => !Vb.test(dd))) || tb.test(Jd) || ya(dd)) return null;
+     if ((null !== (LQ = FQ.match(/\([^()]*\)/g)) && void 0 !== LQ ? LQ : []).some((QQ => !ZU.test(QQ))) || PU.test(FQ) || aR(QQ)) return null;
```

#### 2472. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27739` → after: `L27739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27739) · [Before (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27739)

```diff
-     return (0, OP.f)(Pd, /return(?![\w$])/, OP.m).length > 0 || Nd.body.locals.some((dd => xL(Pd, dd) && !vL(Pd, dd))) ? null : {
+     return (0, AD.d)(DQ, /return(?![\w$])/, AD.m).length > 0 || qQ.body.locals.some((QQ => cx(DQ, QQ) && !px(DQ, QQ))) ? null : {
```

#### 2473. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27745-L27746` → after: `L27745-L27746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27745-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27745-L27746) · [Before (L27745-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27745-L27746)

```diff
-     const Jd = dd === Ad ? IJ : null,
-       kd = dd === Ad && null !== bd && Ad === bd.name ? bd : null;
+     const FQ = QQ === BQ ? eF : null,
+       wQ = QQ === BQ && null !== IQ && BQ === IQ.name ? IQ : null;
```

#### 2474. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27761` → after: `L27761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27761) · [Before (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27761)

```diff
-           title: `${Jd.after.source}, ${qd("line")} ${Jd.after.line}: ${Jd.after.text}`,
+           title: `${FQ.after.source}, ${CQ("line")} ${FQ.after.line}: ${FQ.after.text}`,
```

#### 2475. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27787` → after: `L27787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27787) · [Before (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27787)

```diff
-           children: [(0, lJ.jsx)(vd.e, {
+           children: [(0, HF.jsx)(pQ.c, {
```

#### 2476. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27792` → after: `L27792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27792) · [Before (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27792)

```diff
-           code: null !== (od = null !== (ld = null === JJ || void 0 === JJ ? void 0 : JJ.code) && void 0 !== ld ? ld : CJ) && void 0 !== od ? od : wd,
+           code: null !== (HQ = null !== (bQ = null === QF || void 0 === QF ? void 0 : QF.code) && void 0 !== bQ ? bQ : vF) && void 0 !== HQ ? HQ : yQ,
```

#### 2477. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27797` → after: `L27797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27797) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27797)

```diff
-           children: ph(null !== (Qd = null !== (Ld = null === JJ || void 0 === JJ ? void 0 : JJ.code) && void 0 !== Ld ? Ld : CJ) && void 0 !== Qd ? Qd : wd, "next-change-code", xd, "pasteCode")
+           children: FJ(null !== (YQ = null !== (xQ = null === QF || void 0 === QF ? void 0 : QF.code) && void 0 !== xQ ? xQ : vF) && void 0 !== YQ ? YQ : yQ, "next-change-code", cQ, "pasteCode")
```

#### 2478. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27836` → after: `L27836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27836) · [Before (L27836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27836)

```diff
-         }), "):", " ", null === Dd.line ? `"${Dd.text}"` : (0, lJ.jsx)("code", {
+         }), "):", " ", null === aQ.line ? `"${aQ.text}"` : (0, HF.jsx)("code", {
```

#### 2479. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27919` → after: `L27919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27919) · [Before (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27919)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2480. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27937` → after: `L27937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27937) · [Before (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27937)

```diff
-       children: [Nd > 0 && (Nd === Jd.length - 1 ? ` ${kd("and")} ` : ", "), (0, lJ.jsx)("code", {
+       children: [qQ > 0 && (qQ === FQ.length - 1 ? ` ${wQ("and")} ` : ", "), (0, HF.jsx)("code", {
```

#### 2481. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27946` → after: `L27946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27946) · [Before (L27946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27946)

```diff
-   return dd.length <= 1 ? null !== (kd = dd[0]) && void 0 !== kd ? kd : "" : `${dd.slice(0,-1).join(", ")} ${Jd("and")} ${dd[dd.length-1]}`
+   return QQ.length <= 1 ? null !== (wQ = QQ[0]) && void 0 !== wQ ? wQ : "" : `${QQ.slice(0,-1).join(", ")} ${FQ("and")} ${QQ[QQ.length-1]}`
```

#### 2482. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27959` → after: `L27959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27959) · [Before (L27959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27959)

```diff
-       children: "gives" === Jd.kind ? `${pd("You already give")} ${Jr(Jd.items,pd)}.` : pd(dd ? "You already have this welcome message." : "You already have this message.")
+       children: "gives" === FQ.kind ? `${LQ("You already give")} ${dJ(FQ.items,LQ)}.` : LQ(QQ ? "You already have this welcome message." : "You already have this message.")
```

#### 2483. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27971` → after: `L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27971) · [Before (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27971)

```diff
-       }), "): ", null === Jd.line ? `"${Jd.text}"` : (0, lJ.jsx)("code", {
+       }), "): ", null === FQ.line ? `"${FQ.text}"` : (0, HF.jsx)("code", {
```

#### 2484. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27987` → after: `L27987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L27987) · [Before (L27987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L27987)

```diff
-       children: `api.${Jd}`
+       children: `api.${FQ}`
```

#### 2485. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28002` → after: `L28002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28002) · [Before (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28002)

```diff
-       children: `const ${Jd} = ${kd}`
+       children: `const ${FQ} = ${wQ}`
```

#### 2486. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28029` → after: `L28029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28029) · [Before (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28029)

```diff
-     of null !== (od = null === kd || void 0 === kd ? void 0 : kd.renames) && void 0 !== od ? od : []) {
+     of null !== (HQ = null === wQ || void 0 === wQ ? void 0 : wQ.renames) && void 0 !== HQ ? HQ : []) {
```

#### 2487. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28035` → after: `L28035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28035) · [Before (L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28035)

```diff
-     }, `young-${ld}`))
+     }, `young-${bQ}`))
```

#### 2488. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28053` → after: `L28053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28053) · [Before (L28053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28053)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2489. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28064` → after: `L28064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28064) · [Before (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28064)

```diff
-   return 1 === kd.length ? `${Jd("line")} ${kd[0]}` : `${Jd("lines")} ${Jr(kd.map(String),Jd)}`
+   return 1 === wQ.length ? `${FQ("line")} ${wQ[0]}` : `${FQ("lines")} ${dJ(wQ.map(String),FQ)}`
```

#### 2490. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28080` → after: `L28080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28080) · [Before (L28080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28080)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2491. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28143` → after: `L28143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28143) · [Before (L28143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28143)

```diff
-     }), " ", pd ? Pd : Zd]
+     }), " ", LQ ? DQ : kQ]
```

#### 2492. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28176` → after: `L28176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28176) · [Before (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28176)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```

#### 2493. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28222` → after: `L28222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28222) · [Before (L28222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28222)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2494. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28266` → after: `L28266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28266) · [Before (L28266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28266)

```diff
-         children: "insert" === Jd.kind ? `  ${dd}` : dd
+         children: "insert" === FQ.kind ? `  ${QQ}` : QQ
```

#### 2495. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28268` → after: `L28268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28268) · [Before (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28268)

```diff
-     }, `added-${kd}`))), "insert" === Jd.kind && Jd.next.map(((dd, Jd) => (0, lJ.jsxs)("span", {
+     }, `added-${wQ}`))), "insert" === FQ.kind && FQ.next.map(((QQ, FQ) => (0, HF.jsxs)("span", {
```

#### 2496. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28274` → after: `L28274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28274) · [Before (L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28274)

```diff
-         children: `  ${dd}`
+         children: `  ${QQ}`
```

#### 2497. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28276` → after: `L28276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28276) · [Before (L28276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28276)

```diff
-     }, `next-${Jd}`))), "insert" === Jd.kind && Jd.next.length >= or && (0, lJ.jsxs)("span", {
+     }, `next-${FQ}`))), "insert" === FQ.kind && FQ.next.length >= mE && (0, HF.jsxs)("span", {
```

#### 2498. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28308` → after: `L28308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28308) · [Before (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28308)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2499. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28368` → after: `L28368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28368) · [Before (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28368)

```diff
-   return [dd, ...Jd.map((dd => "string" === typeof dd ? dd : "code" in dd ? dd.code : ""))].join(" ")
+   return [QQ, ...FQ.map((QQ => "string" === typeof QQ ? QQ : "code" in QQ ? QQ.code : ""))].join(" ")
```

#### 2500. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28381` → after: `L28381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28381) · [Before (L28381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28381)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2501. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28384` → after: `L28384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28384) · [Before (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28384)

```diff
-     }), Nd("Your events"), (0, lJ.jsx)(vd.e, {
+     }), qQ("Your events"), (0, HF.jsx)(pQ.c, {
```

#### 2502. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28392` → after: `L28392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28392) · [Before (L28392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28392)

```diff
-     return void 0 === pd ? null : `${Jd("Only")} ${(0,LP.l)(pd)} ${Jd("players this week, so these are hints.")}`
+     return void 0 === LQ ? null : `${FQ("Only")} ${(0,xD.m)(LQ)} ${FQ("players this week, so these are hints.")}`
```

#### 2503. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28402` → after: `L28402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28402) · [Before (L28402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28402)

```diff
-         Pd = "spot" === Wd.kind && MQ(dd.eventType) && "" !== Wd.value ? `${dd.eventType}: ${Wd.value}` : null,
+         DQ = "spot" === oQ.kind && OY(QQ.eventType) && "" !== oQ.value ? `${QQ.eventType}: ${oQ.value}` : null,
```

#### 2504. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28444` → after: `L28444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28444) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28444)

```diff
-       missing: `${Nd("Want to see what players do? Add one tracking line: see")} "${null!==pd&&void 0!==pd?pd:""}" ${Nd("below.")}`,
+       missing: `${qQ("Want to see what players do? Add one tracking line: see")} "${null!==LQ&&void 0!==LQ?LQ:""}" ${qQ("below.")}`,
```

#### 2505. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28453` → after: `L28453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28453) · [Before (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28453)

```diff
-       const dd = Wd.days < 7 ? ` (${Wd.days} ${1===Wd.days?Nd("day"):Nd("days")})` : "",
+       const QQ = oQ.days < 7 ? ` (${oQ.days} ${1===oQ.days?qQ("day"):qQ("days")})` : "",
```

#### 2506. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28455` → after: `L28455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28455) · [Before (L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28455)

```diff
-       Pd = 0 === Wd.players ? Nd("No players this week, so treat the reasons below as guesses.") : `${Nd("Only")} ${Wd.players} ${Jd}${dd}: ${Nd("too few to tell why people leave, so treat the reasons below as guesses.")}`, Zd = Wd.eventTypes
+       DQ = 0 === oQ.players ? qQ("No players this week, so treat the reasons below as guesses.") : `${qQ("Only")} ${oQ.players} ${FQ}${QQ}: ${qQ("too few to tell why people leave, so treat the reasons below as guesses.")}`, kQ = oQ.eventTypes
```

#### 2507. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28458` → after: `L28458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28458) · [Before (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28458)

```diff
-     0 === Jd.length && Zd.length > 0 ? gd = [`${Nd("You already log")} `, ...pB(Zd.slice(0, NB), Nd), `: ${Nd("they will say more as players come.")}`] : 0 === Jd.length && null !== pd && (gd = [`${Nd("Start with the line under")} "${pd}" ${Nd("below.")}`]);
+     0 === FQ.length && kQ.length > 0 ? vQ = [`${qQ("You already log")} `, ...oS(kQ.slice(0, DS), qQ), `: ${qQ("they will say more as players come.")}`] : 0 === FQ.length && null !== LQ && (vQ = [`${qQ("Start with the line under")} "${LQ}" ${qQ("below.")}`]);
```

#### 2508. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28460` → after: `L28460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28460) · [Before (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28460)

```diff
-     return Jd.length > 0 ? Cd = [`${Nd("Studio shows each one after about")} ${jq} ${Nd("players send it")}: `, {
+     return FQ.length > 0 ? mQ = [`${qQ("Studio shows each one after about")} ${zC} ${qQ("players send it")}: `, {
```

#### 2509. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28462` → after: `L28462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28462) · [Before (L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28462)

```diff
-     }] : "fewPlayers" === Wd.kind && (Cd = [`${Nd("Studio can say why players leave after about")} ${Sq} ${Nd("players a week")}: `, {
+     }] : "fewPlayers" === oQ.kind && (mQ = [`${qQ("Studio can say why players leave after about")} ${KC} ${qQ("players a week")}: `, {
```

#### 2510. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28475` → after: `L28475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28475) · [Before (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28475)

```diff
-   }), Qd = `${kd.length} ${1===kd.length?Zd("event to log"):Zd("events to log")}`;
+   }), YQ = `${wQ.length} ${1===wQ.length?kQ("event to log"):kQ("events to log")}`;
```

#### 2511. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28482` → after: `L28482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28482) · [Before (L28482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28482)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2512. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28497` → after: `L28497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28497) · [Before (L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28497)

```diff
-     }), 0 === kd.length ? ld : (0, lJ.jsxs)("details", {
+     }), 0 === wQ.length ? bQ : (0, HF.jsxs)("details", {
```

#### 2513. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28500` → after: `L28500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28500) · [Before (L28500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28500)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```

#### 2514. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28554` → after: `L28554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28554) · [Before (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28554)

```diff
-               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${dd.verdict}`,
+               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${QQ.verdict}`,
```

#### 2515. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28566` → after: `L28566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28566) · [Before (L28566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28566)

```diff
-         className: `StudioAiJourneyStep StudioAiJourneyStep-${dd.verdict}`,
+         className: `StudioAiJourneyStep StudioAiJourneyStep-${QQ.verdict}`,
```

#### 2516. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28602` → after: `L28602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28602) · [Before (L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28602)

```diff
-     children: [(0, lJ.jsx)(vd.e, {
+     children: [(0, HF.jsx)(pQ.c, {
```

#### 2517. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28653` → after: `L28653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28653) · [Before (L28653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28653)

```diff
-   } = (0, Qd.B)(), [Xd, fd] = (0, pd.useState)(null), nd = null !== Gd && dm(Zd);
+   } = (0, YQ.y)(), [TQ, KQ] = (0, LQ.useState)(null), zQ = null !== GQ && wI(kQ);
```

#### 2518. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28670` → after: `L28670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28670) · [Before (L28670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28670)

```diff
-     Td = (0, pd.useMemo)((() => Li(Zd, null !== ed && void 0 !== ed ? ed : new Set)), [Zd, ed]);
+     XQ = (0, LQ.useMemo)((() => AW(kQ, null !== tQ && void 0 !== tQ ? tQ : new Set)), [kQ, tQ]);
```

#### 2519. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28689` → after: `L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28689) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28689)

```diff
-       journey: null !== ld && void 0 !== ld ? ld : null,
+       journey: null !== bQ && void 0 !== bQ ? bQ : null,
```

#### 2520. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28716` → after: `L28716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28716) · [Before (L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28716)

```diff
-       isCodeInPlaceOpen: null === qd ? !0 === Od : He(qd),
+       isCodeInPlaceOpen: null === CQ ? !0 === AQ : Bt(CQ),
```

#### 2521. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28730` → after: `L28730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28730) · [Before (L28730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28730)

```diff
-     dd.length > 0 && console.info(`The Studio AI answer cited ${dd.length} statistics Studio doesn't have, which are left out`, dd)
+     QQ.length > 0 && console.info(`The Studio AI answer cited ${QQ.length} statistics Studio doesn't have, which are left out`, QQ)
```

#### 2522. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28734` → after: `L28734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28734) · [Before (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28734)

```diff
-       children: 1 === rd ? jd("Studio left out 1 idea that doesn't fit your game.") : `${jd("Studio left out")} ${rd} ${jd("ideas that don't fit your game")}.`
+       children: 1 === JQ ? NQ("Studio left out 1 idea that doesn't fit your game.") : `${NQ("Studio left out")} ${JQ} ${NQ("ideas that don't fit your game")}.`
```

#### 2523. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28738` → after: `L28738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28738) · [Before (L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28738)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2524. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28743` → after: `L28743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28743) · [Before (L28743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28743)

```diff
-     Ad = null !== (Jd = null !== Od && void 0 !== Od ? Od : null === cd || void 0 === cd ? void 0 : cd.sections.some((dd => "fixFirst" === dd.key && dd.heading === Jo("fixFirst", !0)))) && void 0 !== Jd && Jd,
+     BQ = null !== (FQ = null !== AQ && void 0 !== AQ ? AQ : null === VQ || void 0 === VQ ? void 0 : VQ.sections.some((QQ => "fixFirst" === QQ.key && QQ.heading === wH("fixFirst", !0)))) && void 0 !== FQ && FQ,
```

#### 2525. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28750` → after: `L28750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28750) · [Before (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28750)

```diff
-     kJ = dd => 0 === tL(dd).length ? dd : VL(dd),
+     FF = QQ => 0 === gx(QQ).length ? QQ : Px(QQ),
```

#### 2526. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28753` → after: `L28753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28753) · [Before (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28753)

```diff
-     WJ = null !== (kd = null === NJ || void 0 === NJ ? void 0 : NJ.nextChange) && void 0 !== kd ? kd : null,
+     qF = null !== (wQ = null === LF || void 0 === LF ? void 0 : LF.nextChange) && void 0 !== wQ ? wQ : null,
```

#### 2527. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28766` → after: `L28766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28766) · [Before (L28766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28766)

```diff
-   const ZJ = null !== Ld && void 0 !== Ld ? Ld : [],
+   const DF = null !== xQ && void 0 !== xQ ? xQ : [],
```

#### 2528. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28768` → after: `L28768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28768) · [Before (L28768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28768)

```diff
-     CJ = null !== hd && void 0 !== hd ? hd : cd,
+     vF = null !== hQ && void 0 !== hQ ? hQ : VQ,
```

#### 2529. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28770` → after: `L28770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28770) · [Before (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28770)

```diff
-     oJ = void 0 === KJ || KJ === pJ ? NJ : jI(kJ(KJ.markdown)),
+     uF = void 0 === mF || mF === wF ? LF : KM(FF(mF.markdown)),
```

#### 2530. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28772` → after: `L28772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28772) · [Before (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28772)

```diff
-     LJ = null !== (Nd = null === oJ || void 0 === oJ ? void 0 : oJ.nextChange) && void 0 !== Nd ? Nd : WJ,
+     YF = null !== (qQ = null === uF || void 0 === uF ? void 0 : uF.nextChange) && void 0 !== qQ ? qQ : qF,
```

#### 2531. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28777` → after: `L28777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28777) · [Before (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28777)

```diff
-     eJ = null === sd ? [] : Lq(sd, PM(`${cd.summary}\n${null!==(Wd=null===pJ||void 0===pJ?void 0:pJ.markdown)&&void 0!==Wd?Wd:""}`), qd),
+     AF = null === iQ ? [] : tC(iQ, DO(`${VQ.summary}\n${null!==(oQ=null===wF||void 0===wF?void 0:wF.markdown)&&void 0!==oQ?oQ:""}`), CQ),
```

#### 2532. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28788` → after: `L28788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28788) · [Before (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28788)

```diff
-     }(null !== sd && void 0 !== sd ? sd : [], null !== ad && void 0 !== ad ? ad : [], eJ, PM(RJ)) : [],
+     }(null !== iQ && void 0 !== iQ ? iQ : [], null !== WQ && void 0 !== WQ ? WQ : [], AF, DO(tF)) : [],
```

#### 2533. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28796` → after: `L28796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28796) · [Before (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28796)

```diff
-     vJ = null === md ? [] : sB(md, [...eJ, ...IJ], `${RJ}\n${function(dd,Jd,kd,pd,Nd,Wd){if(null===dd||null===Jd||!Wd.isOlder)return"";const Pd=lx(dd,Jd,kd,Wd.constantLines),Zd=null===Pd?null:yY(Pd,Jd,pd);return null===Zd?"":er("",hY(Zd,Wd.t,Nd))}(WJ,xd,od,Fd,Zd,zd)}`, qd),
+     GF = null === rQ ? [] : RS(rQ, [...AF, ...eF], `${tF}\n${function(QQ,FQ,wQ,LQ,qQ,oQ){if(null===QQ||null===FQ||!oQ.isOlder)return"";const DQ=xc(QQ,FQ,wQ,oQ.constantLines),kQ=null===DQ?null:fr(DQ,FQ,LQ);return null===kQ?"":xE("",nr(kQ,oQ.t,qQ))}(qF,cQ,HQ,OQ,kQ,PQ)}`, CQ),
```

#### 2534. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28802-L28803` → after: `L28802-L28803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28802-L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28802-L28803) · [Before (L28802-L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28802-L28803)

```diff
-         Wd = new RegExp(`(?:${(0,LP.l)(dd.players)}|${Math.round(dd.players)})(?![\\d]|[,.]\\d|\\s*%)`),
-         Pd = (0, OP.f)(Jd, Wd, (0, OP.k)("\\d,.")).length > 0;
+         oQ = new RegExp(`(?:${(0,xD.m)(QQ.players)}|${Math.round(QQ.players)})(?![\\d]|[,.]\\d|\\s*%)`),
+         DQ = (0, AD.d)(FQ, oQ, (0, AD.i)("\\d,.")).length > 0;
```

#### 2535. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28811` → after: `L28811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28811) · [Before (L28811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28811)

```diff
-         Nd = (0, LP.l)(dd.players);
+         qQ = (0, xD.m)(QQ.players);
```

#### 2536. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28813` → after: `L28813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28813) · [Before (L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28813)

```diff
-         parts: [`${kd("Of the")} ${(0,LP.l)(dd.fromPlayers)} ${kd("players who got to")} ${dd.step}, ${Nd} ${kd("later had")} `, {
+         parts: [`${wQ("Of the")} ${(0,xD.m)(QQ.fromPlayers)} ${wQ("players who got to")} ${QQ.step}, ${qQ} ${wQ("later had")} `, {
```

#### 2537. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28815` → after: `L28815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28815) · [Before (L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28815)

```diff
-         }, ` ${kd("this week")} `, pd]
+         }, ` ${wQ("this week")} `, LQ]
```

#### 2538. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28819` → after: `L28819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28819) · [Before (L28819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28819)

```diff
-         parts: [`${kd("Of the")} ${(0,LP.l)(dd.fromPlayers)} ${kd("players who reached")} ${dd.step}, ${Nd} ${kd("later had")} `, {
+         parts: [`${wQ("Of the")} ${(0,xD.m)(QQ.fromPlayers)} ${wQ("players who reached")} ${QQ.step}, ${qQ} ${wQ("later had")} `, {
```

#### 2539. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28821` → after: `L28821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28821) · [Before (L28821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28821)

```diff
-         }, ` (${Wd}%, ${kd("past week")}) `, pd]
+         }, ` (${oQ}%, ${wQ("past week")}) `, LQ]
```

#### 2540. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28829` → after: `L28829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28829) · [Before (L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28829)

```diff
-     iJ = [...GJ, ...(null !== (Pd = null === xJ || void 0 === xJ ? void 0 : xJ.rows) && void 0 !== Pd ? Pd : []).map((dd => {
+     iF = [...MF, ...(null !== (DQ = null === pF || void 0 === pF ? void 0 : pF.rows) && void 0 !== DQ ? DQ : []).map((QQ => {
```

#### 2541. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28841` → after: `L28841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28841) · [Before (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28841)

```diff
-       return pd.slice(0, "young" === kd ? fB : XB)
+       return LQ.slice(0, "young" === wQ ? jS : lS)
```

#### 2542. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28864` → after: `L28864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28864) · [Before (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28864)

```diff
-       return null !== (kd = dd.find((dd => !pd.includes(dd.eventType) && !uR(dd, Jd)))) && void 0 !== kd ? kd : null
+       return null !== (wQ = QQ.find((QQ => !LQ.includes(QQ.eventType) && !ge(QQ, FQ)))) && void 0 !== wQ ? wQ : null
```

#### 2543. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28878-L28879` → after: `L28878-L28879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28878-L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28878-L28879) · [Before (L28878-L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28878-L28879)

```diff
-           const Jd = [`${(0,LP.d)(dd.said)} ${kd("in your description")}`],
-             Zd = null === Pd.category ? "" : ` ${kd("in")} ${Pd.category}`;
+           const FQ = [`${(0,xD.e)(QQ.said)} ${wQ("in your description")}`],
+             kQ = null === DQ.category ? "" : ` ${wQ("in")} ${DQ.category}`;
```

#### 2544. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28882` → after: `L28882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28882) · [Before (L28882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28882)

```diff
-             parts: [`${(0,LP.l)(Pd.players)} ${kd("players got to")} ${Pd.step} ${Wd}, ${kd("of")} ${(0,LP.l)(Pd.first.players)} ${kd("who got to")} ${Pd.first.name}${Zd} `, Nd]
+             parts: [`${(0,xD.m)(DQ.players)} ${wQ("players got to")} ${DQ.step} ${oQ}, ${wQ("of")} ${(0,xD.m)(DQ.first.players)} ${wQ("who got to")} ${DQ.first.name}${kQ} `, qQ]
```

#### 2545. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28884` → after: `L28884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28884) · [Before (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28884)

```diff
-           const gd = null === Pd.before ? "" : `, ${(0,LP.l)(Pd.before.players)} \u2192 ${(0,LP.l)(Pd.players)} ${kd("from")} ${Pd.before.name}`;
+           const vQ = null === DQ.before ? "" : `, ${(0,xD.m)(DQ.before.players)} \u2192 ${(0,xD.m)(DQ.players)} ${wQ("from")} ${DQ.before.name}`;
```

#### 2546. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28887` → after: `L28887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28887) · [Before (L28887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28887)

```diff
-             parts: [`${(0,LP.l)(Pd.players)} ${kd("of the")} ${(0,LP.l)(Pd.first.players)} ${kd("players who reached")} ${Pd.first.name} ${kd("got to")} ${Pd.step}${gd}${Zd} (${Wd}) `, Nd]
+             parts: [`${(0,xD.m)(DQ.players)} ${wQ("of the")} ${(0,xD.m)(DQ.first.players)} ${wQ("players who reached")} ${DQ.first.name} ${wQ("got to")} ${DQ.step}${vQ}${kQ} (${oQ}) `, qQ]
```

#### 2547. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28891` → after: `L28891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28891) · [Before (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28891)

```diff
-           const Jd = "" === Pd.category ? "" : ` ${kd("in")} ${Pd.category}`,
+           const FQ = "" === DQ.category ? "" : ` ${wQ("in")} ${DQ.category}`,
```

#### 2548. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28894-L28896` → after: `L28894-L28896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28894-L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28894-L28896) · [Before (L28894-L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28894-L28896)

```diff
-             label: [`${(0,LP.d)((0,LP.I)(Pd.death))} ${kd("in your description")}`],
-             parts: [`${(0,LP.l)(Pd.count)} ${kd("of the")} ${(0,LP.l)(Pd.total)} ${kd("deaths")}${Jd} ${Wd} ${kd("were")} `, {
-               code: `${dd.eventType}: ${Pd.death}`
+             label: [`${(0,xD.e)((0,xD.G)(DQ.death))} ${wQ("in your description")}`],
+             parts: [`${(0,xD.m)(DQ.count)} ${wQ("of the")} ${(0,xD.m)(DQ.total)} ${wQ("deaths")}${FQ} ${oQ} ${wQ("were")} `, {
+               code: `${QQ.eventType}: ${DQ.death}`
```

#### 2549. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28901` → after: `L28901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28901) · [Before (L28901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28901)

```diff
-           const Jd = [`${(0,LP.d)(dd.saidAll.join(` ${kd("and")} `))} ${kd("in your description")}`],
+           const FQ = [`${(0,xD.e)(QQ.saidAll.join(` ${wQ("and")} `))} ${wQ("in your description")}`],
```

#### 2550. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28907` → after: `L28907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28907) · [Before (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28907)

```diff
-               return `${""===Wd?dd.eventType:Wd}: ${(0,LP.l)(Pd)}${0===Nd||pd?` ${kd("players")}`:""}`
+               return `${""===oQ?QQ.eventType:oQ}: ${(0,xD.m)(DQ)}${0===qQ||LQ?` ${wQ("players")}`:""}`
```

#### 2551. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28913` → after: `L28913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28913) · [Before (L28913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28913)

```diff
-             } = Pd.values[0], Cd = pd ? `${(0,LP.l)(gd)} ${kd("players so far")}` : `${(0,LP.l)(gd)} ${kd("players sent it")} ${Wd}`, Kd = "" === Zd ? dd.eventType : `${dd.eventType}: ${Zd}`;
+             } = DQ.values[0], mQ = LQ ? `${(0,xD.m)(vQ)} ${wQ("players so far")}` : `${(0,xD.m)(vQ)} ${wQ("players sent it")} ${oQ}`, uQ = "" === kQ ? QQ.eventType : `${QQ.eventType}: ${kQ}`;
```

#### 2552. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28916` → after: `L28916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28916) · [Before (L28916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28916)

```diff
-               parts: [`${kd("your")} `, {
+               parts: [`${wQ("your")} `, {
```

#### 2553. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28918` → after: `L28918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28918) · [Before (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28918)

```diff
-               }, ` ${kd("event")}: ${Cd} `, Nd]
+               }, ` ${wQ("event")}: ${mQ} `, qQ]
```

#### 2554. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28923` → after: `L28923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28923) · [Before (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28923)

```diff
-             parts: [`${kd("your")} `, {
+             parts: [`${wQ("your")} `, {
```

#### 2555. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28925` → after: `L28925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28925) · [Before (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28925)

```diff
-             }, ` ${kd("event")}: ${Zd.join(", ")} (${Wd}) `, Nd]
+             }, ` ${wQ("event")}: ${kQ.join(", ")} (${oQ}) `, qQ]
```

#### 2556. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28948` → after: `L28948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28948) · [Before (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28948)

```diff
-       return "young" !== pd && ("noEvents" === dd.thin.kind ? Jd.length > 0 || kd : "medium" !== pd)
+       return "young" !== LQ && ("noEvents" === QQ.thin.kind ? FQ.length > 0 || wQ : "medium" !== LQ)
```

#### 2557. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28962` → after: `L28962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L28962) · [Before (L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L28962)

```diff
-         className: `StudioAiAnswerSection StudioAiAnswerSection-${dd.key}`,
+         className: `StudioAiAnswerSection StudioAiAnswerSection-${QQ.key}`,
```

#### 2558. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29008` → after: `L29008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29008) · [Before (L29008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29008)

```diff
-     }(WJ, (0, QI.y)(kJ(uJ.markdown))) : null;
+     }(qF, (0, xM.F)(FF(EF.markdown))) : null;
```

#### 2559. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29017` → after: `L29017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29017) · [Before (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29017)

```diff
-       const dd = um((0, QI.y)(kJ(pd.markdown)));
+       const QQ = gI((0, xM.F)(FF(LQ.markdown)));
```

#### 2560. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29029` → after: `L29029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29029) · [Before (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29029)

```diff
-         then: null !== (HJ = null === tJ || void 0 === tJ ? void 0 : tJ.idea) && void 0 !== HJ ? HJ : null,
+         then: null !== (ZF = null === nF || void 0 === nF ? void 0 : nF.idea) && void 0 !== ZF ? ZF : null,
```

#### 2561. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29031-L29032` → after: `L29031-L29032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29031-L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29031-L29032) · [Before (L29031-L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29031-L29032)

```diff
-       }, null !== dJ && void 0 !== dJ ? dJ : ""), null !== QJ && void 0 !== QJ ? QJ : NJ.rest)
-     } else DJ && "tryNext" === pd.key ? rJ(pd, null, (0, QI.y)(kJ(pd.markdown)), null === tJ) : hJ(TJ(pd, fh(kJ(pd.markdown), zd)));
+       }, null !== dQ && void 0 !== dQ ? dQ : ""), null !== bF && void 0 !== bF ? bF : LF.rest)
+     } else aF && "tryNext" === LQ.key ? JF(LQ, null, (0, xM.F)(FF(LQ.markdown)), null === nF) : hF(XF(LQ, TJ(FF(LQ.markdown), PQ)));
```

#### 2562. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29047` → after: `L29047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29047) · [Before (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29047)

```diff
-           children: [(0, lJ.jsx)(vd.e, {
+           children: [(0, HF.jsx)(pQ.c, {
```

#### 2563. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29066` → after: `L29066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29066) · [Before (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29066)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2564. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29089` → after: `L29089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29089) · [Before (L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29089)

```diff
-       return Li(Jd, null !== (kd = dd.codeNames) && void 0 !== kd ? kd : new Set)
+       return AW(FQ, null !== (wQ = QQ.codeNames) && void 0 !== wQ ? wQ : new Set)
```

#### 2565. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29101` → after: `L29101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29101) · [Before (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29101)

```diff
-   return Jd.length > Mr ? `${Jd.slice(0,Mr).join(" ")}\u2026` : Jd.join(" ")
+   return FQ.length > WE ? `${FQ.slice(0,WE).join(" ")}\u2026` : FQ.join(" ")
```

#### 2566. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29114` → after: `L29114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29114) · [Before (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29114)

```diff
-   const pd = mr(null !== (kd = dd.split("\n")[0]) && void 0 !== kd ? kd : ""),
+   const LQ = sE(null !== (wQ = QQ.split("\n")[0]) && void 0 !== wQ ? wQ : ""),
```

#### 2567. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29121` → after: `L29121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29121) · [Before (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29121)

```diff
-   return -1 === pd ? dd : `${dd} ${pd+1}`
+   return -1 === LQ ? QQ : `${QQ} ${LQ+1}`
```

#### 2568. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29126-L29127` → after: `L29126-L29127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29126-L29127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29126-L29127) · [Before (L29126-L29127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29126-L29127)

```diff
-   const kd = dd.map((dd => `"${dd}"`));
-   return kd.length <= 1 ? null !== (Jd = kd[0]) && void 0 !== Jd ? Jd : "" : `${kd.slice(0,-1).join(", ")} and ${kd[kd.length-1]}`
+   const wQ = QQ.map((QQ => `"${QQ}"`));
+   return wQ.length <= 1 ? null !== (FQ = wQ[0]) && void 0 !== FQ ? FQ : "" : `${wQ.slice(0,-1).join(", ")} and ${wQ[wQ.length-1]}`
```

#### 2569. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29150` → after: `L29150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29150) · [Before (L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29150)

```diff
-     return kd ? pd : dd
+     return wQ ? LQ : QQ
```

#### 2570. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29153` → after: `L29153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29153) · [Before (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29153)

```diff
-     const dd = "direction" === Rd.kind ? `Change \`${Rd.name}\` the other way, or pick another change.` : "unrelated" === Rd.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${Rd.name}\` does, or pick another con … [truncated]
+     const QQ = "direction" === eQ.kind ? `Change \`${eQ.name}\` the other way, or pick another change.` : "unrelated" === eQ.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${eQ.name}\` does, or pick another con … [truncated]
```

#### 2571. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29166` → after: `L29166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29166) · [Before (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29166)

```diff
-     problem: `The game has no ${Xr(Qd.map((dd=>{let{name:Jd}=dd;return Jd})))} that Studio can find in its code, events or description.`,
+     problem: `The game has no ${NE(YQ.map((QQ=>{let{name:FQ}=QQ;return FQ})))} that Studio can find in its code, events or description.`,
```

#### 2572. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29173` → after: `L29173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29173) · [Before (L29173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29173)

```diff
-     problem: "badge" === Ld.kind ? `My game already has the "${Ld.name}" badge.` : `My game already sends "${Ld.name}".`,
+     problem: "badge" === xQ.kind ? `My game already has the "${xQ.name}" badge.` : `My game already sends "${xQ.name}".`,
```

#### 2573. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29180` → after: `L29180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29180) · [Before (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29180)

```diff
-     problem: `My code already does this in \`${Od.where}\`.`,
+     problem: `My code already does this in \`${AQ.where}\`.`,
```

#### 2574. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29186` → after: `L29186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29186) · [Before (L29186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29186)

```diff
-     problem: `It tells players to type \`${Rd}\`, but no code in my game reads chat.`,
+     problem: `It tells players to type \`${eQ}\`, but no code in my game reads chat.`,
```

#### 2575. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29195` → after: `L29195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29195) · [Before (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29195)

```diff
-       problem: `Bloxd has no ${Xr(kd)} item or block.`,
+       problem: `Bloxd has no ${NE(wQ)} item or block.`,
```

#### 2576. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29222` → after: `L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29222) · [Before (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29222)

```diff
-       of dd.hidden) gd(Jd, `My game already ${"event"===kd.kind?"logs":"has"} \`${kd.name}\` (in \`${kd.where}\`).`, "Replace it with something my game doesn't have yet.");
+       of QQ.hidden) vQ(FQ, `My game already ${"event"===wQ.kind?"logs":"has"} \`${wQ.name}\` (in \`${wQ.where}\`).`, "Replace it with something my game doesn't have yet.");
```

#### 2577. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29255` → after: `L29255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29255) · [Before (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29255)

```diff
-   } = dd, Zd = Ni(dd.code, dd.where, Wd), gd = null !== (kd = null === Zd || void 0 === Zd ? void 0 : Zd.code) && void 0 !== kd ? kd : dd.code, Cd = null !== (pd = null === Zd || void 0 === Zd ? void 0 : Zd.where) && void 0 !== pd ? pd : dd.where, Kd = iI(dd), od = [], ld = (dd,  … [truncated]
+   } = QQ, kQ = oW(QQ.code, QQ.where, oQ), vQ = null !== (wQ = null === kQ || void 0 === kQ ? void 0 : kQ.code) && void 0 !== wQ ? wQ : QQ.code, mQ = null !== (LQ = null === kQ || void 0 === kQ ? void 0 : kQ.where) && void 0 !== LQ ? LQ : QQ.where, uQ = RM(QQ), HQ = [], bQ = (QQ,  … [truncated]
```

#### 2578. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29262-L29263` → after: `L29262-L29263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29262-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29262-L29263) · [Before (L29262-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29262-L29263)

```diff
-   }, Qd = Ga(`${null!==gd&&void 0!==gd?gd:""}\n${Kd}`, Jd.knownGameText);
-   Qd.length > 0 && ld(`The game has no ${Xr(Qd.map((dd=>{let{name:Jd}=dd;return Jd})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
+   }, YQ = GR(`${null!==vQ&&void 0!==vQ?vQ:""}\n${uQ}`, FQ.knownGameText);
+   YQ.length > 0 && bQ(`The game has no ${NE(YQ.map((QQ=>{let{name:FQ}=QQ;return FQ})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
```

#### 2579. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29267` → after: `L29267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29267) · [Before (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29267)

```diff
-     ld(`It changes dying early, but the earliest death (${Ld.earliest.name}) comes at ${dd} min on average.`, "Pick a change at the step where players stop instead.")
+     bQ(`It changes dying early, but the earliest death (${xQ.earliest.name}) comes at ${QQ} min on average.`, "Pick a change at the step where players stop instead.")
```

#### 2580. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29271-L29272` → after: `L29271-L29272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29271-L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29271-L29272) · [Before (L29271-L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29271-L29272)

```diff
-     ed = ss(null === Od ? gd : Od.code, Cd, Wd),
-     Rd = null !== (Nd = null === ed || void 0 === ed ? void 0 : ed.code) && void 0 !== Nd ? Nd : gd,
+     tQ = Ri(null === AQ ? vQ : AQ.code, mQ, oQ),
+     eQ = null !== (qQ = null === tQ || void 0 === tQ ? void 0 : tQ.code) && void 0 !== qQ ? qQ : vQ,
```

#### 2581. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29275` → after: `L29275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29275) · [Before (L29275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29275)

```diff
-   null !== Gd ? ld(`My code already does this in \`${Gd.where}\`.`, "Pick a change my game doesn't make yet.") : null !== Od && Od.leftOut.length > 0 && ld(`Some of its lines repeat what \`${Od.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
+   null !== GQ ? bQ(`My code already does this in \`${GQ.where}\`.`, "Pick a change my game doesn't make yet.") : null !== AQ && AQ.leftOut.length > 0 && bQ(`Some of its lines repeat what \`${AQ.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
```

#### 2582. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29277-L29279` → after: `L29277-L29279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29277-L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29277-L29279) · [Before (L29277-L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29277-L29279)

```diff
-   null !== vd && ld("gives" === vd.kind ? `\`${vd.where}\` already gives ${vd.items.join(", ")}.` : "secondMessage" === vd.kind ? `My game already has a welcome message in \`${vd.where}\`.` : `My message in \`${vd.where}\` already says this.`, "secondMessage" === vd.kind ? "Chang … [truncated]
-   const xd = null !== Cd && void 0 !== Cd ? Cd : "tick";
-   !0 === (null === ed || void 0 === ed ? void 0 : ed.repeats) ? ld(`From \`${xd}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== ed && (null !== ed.once || ed.flagNames.length > 0) && ld(`From \`${xd}\` it sends  … [truncated]
+   null !== pQ && bQ("gives" === pQ.kind ? `\`${pQ.where}\` already gives ${pQ.items.join(", ")}.` : "secondMessage" === pQ.kind ? `My game already has a welcome message in \`${pQ.where}\`.` : `My message in \`${pQ.where}\` already says this.`, "secondMessage" === pQ.kind ? "Chang … [truncated]
+   const cQ = null !== mQ && void 0 !== mQ ? mQ : "tick";
+   !0 === (null === tQ || void 0 === tQ ? void 0 : tQ.repeats) ? bQ(`From \`${cQ}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== tQ && (null !== tQ.once || tQ.flagNames.length > 0) && bQ(`From \`${cQ}\` it sends  … [truncated]
```

#### 2583. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29281` → after: `L29281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29281) · [Before (L29281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29281)

```diff
-   null !== qd && ld(`\`${qd.name}\` isn't defined in \`${qd.place}\`.`, null === qd.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${qd.alias}\`, its name for the player there.`);
+   null !== CQ && bQ(`\`${CQ.name}\` isn't defined in \`${CQ.place}\`.`, null === CQ.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${CQ.alias}\`, its name for the player there.`);
```

#### 2584. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29283` → after: `L29283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29283) · [Before (L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29283)

```diff
-   null !== Bd && ld(`World Code has no \`${Bd}\`, so the code won't run.`, "Count time in `tick` instead.");
+   null !== SQ && bQ(`World Code has no \`${SQ}\`, so the code won't run.`, "Count time in `tick` instead.");
```

#### 2585. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29285-L29314` → after: `L29285-L29314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29285-L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29285-L29314) · [Before (L29285-L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29285-L29314)

```diff
-   sd.length > 0 && ld(`It calls ${sd.map((dd=>`\`${dd}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
-   const ad = Qi(Rd, Jd.apiNames);
-   ad.length > 0 && ld(`Bloxd has no ${ad.map((dd=>`\`api.${dd}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
-   const Md = mL(Rd, Cd, Wd, Id);
-   Md.length > 0 && ld(`It reads ${Md.map((dd=>`\`${dd}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), gm(Rd, Cd, Pd) && ld("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
-   for (const Fd of wc(Rd, Wd)) ld(`It tells players to type \`${Fd}\`, but no code in my game reads chat.`, "Don't use a chat command.");
-   return II(Rd).isBalanced || ld("The code leaves a bracket or quote open.", "Close it."), od
- }
- 
- function Tr(dd, Jd) {
-   let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ir;
-   const pd = Oo(dd);
-   if (null === pd) return [];
-   const Nd = SE(pd).layout,
-     Wd = [],
-     Pd = [];
- ... (14 more removed lines; see GitHub link above)
+   iQ.length > 0 && bQ(`It calls ${iQ.map((QQ=>`\`${QQ}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
+   const WQ = xW(eQ, FQ.apiNames);
+   WQ.length > 0 && bQ(`Bloxd has no ${WQ.map((QQ=>`\`api.${QQ}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
+   const RQ = Ix(eQ, mQ, oQ, MQ);
+   RQ.length > 0 && bQ(`It reads ${RQ.map((QQ=>`\`${QQ}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), uI(eQ, mQ, DQ) && bQ("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
+   for (const OQ of Zh(eQ, oQ)) bQ(`It tells players to type \`${OQ}\`, but no code in my game reads chat.`, "Don't use a chat command.");
+   return GM(eQ).isBalanced || bQ("The code leaves a bracket or quote open.", "Close it."), HQ
+ }
+ 
+ function aE(QQ, FQ) {
+   let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SE;
+   const LQ = AH(QQ);
+   if (null === LQ) return [];
+   const qQ = IV(LQ).layout,
+     oQ = [],
+     DQ = [];
+ ... (14 more added lines; see GitHub link above)
```

#### 2586. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29316-L29323` → after: `L29316-L29323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29316-L29323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29316-L29323) · [Before (L29316-L29323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29316-L29323)

```diff
-       od = dd => Kd.some((Jd => Sr(Jd.markdown, dd))),
-       ld = br(pd);
-     if (null !== kd) {
-       Wd.push(...Dr(kd, Jd));
-       for (const dd of kd.blocks) {
-         const kd = "paragraph" === dd.kind ? [dd.text] : br([dd]).map((dd => dd.text));
-         for (const dd of kd) Wd.push(...nr(dd, "Next change", !1, Jd).map((dd => ({
-           ...dd,
+       HQ = QQ => uQ.some((FQ => IE(FQ.markdown, QQ))),
+       bQ = rE(LQ);
+     if (null !== wQ) {
+       oQ.push(...jE(wQ, FQ));
+       for (const QQ of wQ.blocks) {
+         const wQ = "paragraph" === QQ.kind ? [QQ.text] : rE([QQ]).map((QQ => QQ.text));
+         for (const QQ of wQ) oQ.push(...KE(QQ, "Next change", !1, FQ).map((QQ => ({
+           ...QQ,
```

#### 2587. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29328-L29331` → after: `L29328-L29331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29328-L29331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29328-L29331) · [Before (L29328-L29331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29328-L29331)

```diff
-     Pd.push(...Ur(Cd, ld, Jd, od));
-     for (const Wd of pd) "paragraph" === Wd.kind && Pd.push(...nr(Wd.text, Cd.heading, !1, Jd));
-     ld.forEach(((dd, kd) => {
-       od(dd.text) || Pd.push(...nr(dd.text, `${Cd.heading} ${kd+1}`, !0, Jd))
+     DQ.push(...zE(mQ, bQ, FQ, HQ));
+     for (const oQ of LQ) "paragraph" === oQ.kind && DQ.push(...KE(oQ.text, mQ.heading, !1, FQ));
+     bQ.forEach(((QQ, wQ) => {
+       HQ(QQ.text) || DQ.push(...KE(QQ.text, `${mQ.heading} ${wQ+1}`, !0, FQ))
```

#### 2588. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29334-L29338` → after: `L29334-L29338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29334-L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29334-L29338) · [Before (L29334-L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29334-L29338)

```diff
-   const gd = new Set;
-   return [...Wd, ...Pd].filter((dd => {
-     const Jd = `${dd.where}|${dd.problem}`;
-     return !gd.has(Jd) && (gd.add(Jd), !0)
-   })).slice(0, kd)
+   const vQ = new Set;
+   return [...oQ, ...DQ].filter((QQ => {
+     const FQ = `${QQ.where}|${QQ.problem}`;
+     return !vQ.has(FQ) && (vQ.add(FQ), !0)
+   })).slice(0, wQ)
```

#### 2589. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29341-L29344` → after: `L29341-L29344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29341-L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29341-L29344) · [Before (L29341-L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29341-L29344)

```diff
- function Er(dd, Jd) {
-   const kd = new Set,
-     pd = function(dd) {
-       let pd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ function XE(QQ, FQ) {
+   const wQ = new Set,
+     LQ = function(QQ) {
+       let LQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
```

#### 2590. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29346` → after: `L29346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29346) · [Before (L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29346)

```diff
-           name: Nd
+           name: qQ
```

#### 2591. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29348` → after: `L29348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29348) · [Before (L29348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29348)

```diff
-         of Ga(dd, Jd, pd)) kd.add(Nd.toLowerCase())
+         of GR(QQ, FQ, LQ)) wQ.add(qQ.toLowerCase())
```

#### 2592. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29350-L29351` → after: `L29350-L29351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29350-L29351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29350-L29351) · [Before (L29350-L29351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29350-L29351)

```diff
-     Nd = dd => {
-       for (const Jd of dd) pd(Jd.text), Nd(Jd.children)
+     qQ = QQ => {
+       for (const FQ of QQ) LQ(FQ.text), qQ(FQ.children)
```

#### 2593. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29353-L29354` → after: `L29353-L29354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29353-L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29353-L29354) · [Before (L29353-L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29353-L29354)

```diff
-   for (const Wd of (0, QI.y)(dd)) "paragraph" === Wd.kind || "heading" === Wd.kind ? pd(Wd.text) : "list" === Wd.kind ? Nd(Wd.items) : "code" === Wd.kind && pd(Wd.code, !0);
-   return kd
+   for (const oQ of (0, xM.F)(QQ)) "paragraph" === oQ.kind || "heading" === oQ.kind ? LQ(oQ.text) : "list" === oQ.kind ? qQ(oQ.items) : "code" === oQ.kind && LQ(oQ.code, !0);
+   return wQ
```

#### 2594. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29356` → after: `L29356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29356) · [Before (L29356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29356)

```diff
- const cr = /<\s*\/?\s*game-text[^>]*>/gi;
+ const fE = /<\s*\/?\s*game-text[^>]*>/gi;
```

#### 2595. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29358` → after: `L29358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29358) · [Before (L29358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29358)

```diff
- function hr(dd) {
+ function VE(QQ) {
```

#### 2596. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29360-L29376` → after: `L29360-L29376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29360-L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29360-L29376) · [Before (L29360-L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29360-L29376)

```diff
-     where: Jd,
-     quote: kd,
-     problem: pd,
-     fix: Nd
-   } = dd, Wd = ZK(`- ${Jd}${null===kd?"":` ("${kd}")`}: ${pd} Instead: ${Nd}`, 1 / 0);
-   for (let Pd = ""; Wd !== Pd;) Pd = Wd, Wd = Wd.replace(cr, "");
-   return Wd
- }
- 
- function rr(dd) {
-   const Jd = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
-     kd = "Reply with the whole answer again, and nothing else.",
-     pd = [];
-   for (const Nd of dd) {
-     const dd = hr(Nd);
-     if ([Jd, ...pd, dd, kd].join("\n").length > ar) {
- ... (1 more removed lines; see GitHub link above)
+     where: FQ,
+     quote: wQ,
+     problem: LQ,
+     fix: qQ
+   } = QQ, oQ = mu(`- ${FQ}${null===wQ?"":` ("${wQ}")`}: ${LQ} Instead: ${qQ}`, 1 / 0);
+   for (let DQ = ""; oQ !== DQ;) DQ = oQ, oQ = oQ.replace(fE, "");
+   return oQ
+ }
+ 
+ function hE(QQ) {
+   const FQ = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
+     wQ = "Reply with the whole answer again, and nothing else.",
+     LQ = [];
+   for (const qQ of QQ) {
+     const QQ = VE(qQ);
+     if ([FQ, ...LQ, QQ, wQ].join("\n").length > iE) {
+ ... (1 more added lines; see GitHub link above)
```

#### 2597. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29379` → after: `L29379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29379) · [Before (L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29379)

```diff
-     pd.push(dd)
+     LQ.push(QQ)
```

#### 2598. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29381` → after: `L29381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29381) · [Before (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29381)

```diff
-   return [Jd, ...pd, kd].join("\n")
+   return [FQ, ...LQ, wQ].join("\n")
```

#### 2599. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29384-L29388` → after: `L29384-L29388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29384-L29388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29384-L29388) · [Before (L29384-L29388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29384-L29388)

```diff
- function ur(dd) {
-   const Jd = new Map;
-   for (const pd of dd.sections) {
-     var kd;
-     Jd.set(pd.key, (null !== (kd = Jd.get(pd.key)) && void 0 !== kd ? kd : 0) + br((0, QI.y)(pd.markdown)).length)
+ function JE(QQ) {
+   const FQ = new Map;
+   for (const LQ of QQ.sections) {
+     var wQ;
+     FQ.set(LQ.key, (null !== (wQ = FQ.get(LQ.key)) && void 0 !== wQ ? wQ : 0) + rE((0, xM.F)(LQ.markdown)).length)
```

#### 2600. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29390` → after: `L29390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29390) · [Before (L29390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29390)

```diff
-   return Jd
+   return FQ
```

#### 2601. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29392` → after: `L29392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29392) · [Before (L29392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29392)

```diff
- const tr = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
+ const EE = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
```

#### 2602. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29405` → after: `L29405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29405) · [Before (L29405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29405)

```diff
-   const Pd = await (0, sg.e)(Jd.model, function(dd, Jd, kd) {
+   const DQ = await (0, Wv.c)(FQ.model, function(QQ, FQ, wQ) {
```

#### 2603. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29433` → after: `L29433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29433) · [Before (L29433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29433)

```diff
-         if ((null !== (Wd = Zd.get(Nd)) && void 0 !== Wd ? Wd : 0) < gd) return !1
+         if ((null !== (oQ = kQ.get(qQ)) && void 0 !== oQ ? oQ : 0) < vQ) return !1
```

#### 2604. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29451` → after: `L29451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29451) · [Before (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29451)

```diff
-     return console.error(`The Studio AI export couldn't load ${Jd}`, pd), dd.push(Jd), null
+     return console.error(`The Studio AI export couldn't load ${FQ}`, LQ), QQ.push(FQ), null
```

#### 2605. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29457` → after: `L29457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29457) · [Before (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29457)

```diff
-     Pd = Nd.edges.length > 0 ? Nd : null;
+     DQ = qQ.edges.length > 0 ? qQ : null;
```

#### 2606. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29551` → after: `L29551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29551) · [Before (L29551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29551)

```diff
-         events: null !== (pd = null === Zd || void 0 === Zd ? void 0 : Zd.events) && void 0 !== pd ? pd : []
+         events: null !== (LQ = null === kQ || void 0 === kQ ? void 0 : kQ.events) && void 0 !== LQ ? LQ : []
```

#### 2607. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29554` → after: `L29554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29554) · [Before (L29554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29554)

```diff
-   return Wd.length > 0 && dd.push(1 === Wd.length ? Wd[0] : `event heatmaps in ${Wd.length} game categories`), Pd
+   return oQ.length > 0 && QQ.push(1 === oQ.length ? oQ[0] : `event heatmaps in ${oQ.length} game categories`), DQ
```

#### 2608. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29573` → after: `L29573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29573) · [Before (L29573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29573)

```diff
-   return null !== Wd && null === Wd.digest && "isMissing" in Wd && !0 === Wd.isMissing && dd.push(JO), null !== (pd = null === Wd || void 0 === Wd ? void 0 : Wd.digest) && void 0 !== pd ? pd : null
+   return null !== oQ && null === oQ.digest && "isMissing" in oQ && !0 === oQ.isMissing && QQ.push(FA), null !== (LQ = null === oQ || void 0 === oQ ? void 0 : oQ.digest) && void 0 !== LQ ? LQ : null
```

#### 2609. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29590` → after: `L29590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29590) · [Before (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29590)

```diff
-   } = (0, Qd.B)(), [Ld, Od] = (0, pd.useState)(!0), [ed, Rd] = (0, pd.useState)(!1), Id = ed || Ld, Gd = (0, pd.useRef)(null), xd = null === kd;
+   } = (0, YQ.y)(), [xQ, AQ] = (0, LQ.useState)(!0), [tQ, eQ] = (0, LQ.useState)(!1), MQ = tQ || xQ, GQ = (0, LQ.useRef)(null), cQ = null === wQ;
```

#### 2610. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29641` → after: `L29641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29641) · [Before (L29641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29641)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```

#### 2611. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29695` → after: `L29695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29695) · [Before (L29695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29695)

```diff
-     if (Jd.aborted) return void pd((0, Bg.c)(Jd));
+     if (FQ.aborted) return void LQ((0, iv.e)(FQ));
```

#### 2612. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29697` → after: `L29697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29697) · [Before (L29697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29697)

```diff
-         clearTimeout(Wd), pd((0, Bg.c)(Jd))
+         clearTimeout(oQ), LQ((0, iv.e)(FQ))
```

#### 2613. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29709` → after: `L29709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29709) · [Before (L29709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29709)

```diff
-   return `${dd.ageBand}|${dd.gameTier}`
+   return `${QQ.ageBand}|${QQ.gameTier}`
```

#### 2614. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29730` → after: `L29730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29730) · [Before (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29730)

```diff
-   } = (0, Qd.B)(), {
+   } = (0, YQ.y)(), {
```

#### 2615. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29733` → after: `L29733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29733) · [Before (L29733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29733)

```diff
-   } = (0, Ld.c)(), [od, ld] = (0, pd.useState)(null), [Od, ed] = (0, pd.useState)(null), [Rd, Id] = (0, pd.useState)(null), [xd, qd] = (0, pd.useState)(null), [Bd, sd] = (0, pd.useState)(!1), [ad, Md] = (0, pd.useState)(!1), [Fd] = (0, pd.useState)(Nd);
+   } = (0, xQ.e)(), [HQ, bQ] = (0, LQ.useState)(null), [AQ, tQ] = (0, LQ.useState)(null), [eQ, MQ] = (0, LQ.useState)(null), [cQ, CQ] = (0, LQ.useState)(null), [SQ, iQ] = (0, LQ.useState)(!1), [WQ, RQ] = (0, LQ.useState)(!1), [OQ] = (0, LQ.useState)(qQ);
```

#### 2616. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29773` → after: `L29773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29773) · [Before (L29773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29773)

```diff
-     md = null !== Od && void 0 !== Od ? Od : Yd,
+     rQ = null !== AQ && void 0 !== AQ ? AQ : sQ,
```

#### 2617. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29788` → after: `L29788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29788) · [Before (L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29788)

```diff
-         worldCode: null !== (kd = null === dd || void 0 === dd ? void 0 : dd.worldCode) && void 0 !== kd ? kd : null,
+         worldCode: null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.worldCode) && void 0 !== wQ ? wQ : null,
```

#### 2618. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29793` → after: `L29793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29793) · [Before (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29793)

```diff
-         weeklyPlayers: null !== (pd = null === dd || void 0 === dd || null === (Nd = dd.stats) || void 0 === Nd ? void 0 : Nd.rankingWindow.uniquePlayers) && void 0 !== pd ? pd : null,
+         weeklyPlayers: null !== (LQ = null === QQ || void 0 === QQ || null === (qQ = QQ.stats) || void 0 === qQ ? void 0 : qQ.rankingWindow.uniquePlayers) && void 0 !== LQ ? LQ : null,
```

#### 2619. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29805` → after: `L29805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29805) · [Before (L29805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29805)

```diff
-       return `${dd.size}-${kd.toString(36)}`
+       return `${QQ.size}-${wQ.toString(36)}`
```

#### 2620. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29815` → after: `L29815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29815) · [Before (L29815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29815)

```diff
-         checkedNumbers: PI(Jd, null === Wd ? Pd : [Wd.change, ...Pd]),
+         checkedNumbers: kM(FQ, null === oQ ? DQ : [oQ.change, ...DQ]),
```

#### 2621. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29819` → after: `L29819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29819) · [Before (L29819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29819)

```diff
-         deaths: null !== (pd = Ev(dd).deaths) && void 0 !== pd ? pd : [],
+         deaths: null !== (LQ = Jp(QQ).deaths) && void 0 !== LQ ? LQ : [],
```

#### 2622. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29829` → after: `L29829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29829) · [Before (L29829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29829)

```diff
-       return JSON.stringify([De, dd.gameAnalyticsId, dd.name, null !== (kd = dd.genre) && void 0 !== kd ? kd : null, null !== (pd = dd.description) && void 0 !== pd ? pd : null, dd.gameUpdatedAt, null === dd.ranks, null !== Jd && void 0 !== Jd ? Jd : "estimate"])
+       return JSON.stringify([ft, QQ.gameAnalyticsId, QQ.name, null !== (wQ = QQ.genre) && void 0 !== wQ ? wQ : null, null !== (LQ = QQ.description) && void 0 !== LQ ? LQ : null, QQ.gameUpdatedAt, null === QQ.ranks, null !== FQ && void 0 !== FQ ? FQ : "estimate"])
```

#### 2623. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29835` → after: `L29835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29835) · [Before (L29835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29835)

```diff
-       Zd = null !== (dd = null === Pd || void 0 === Pd ? void 0 : Pd.ageBand) && void 0 !== dd ? dd : null,
+       kQ = null !== (QQ = null === DQ || void 0 === DQ ? void 0 : DQ.ageBand) && void 0 !== QQ ? QQ : null,
```

#### 2624. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29839-L29840` → after: `L29839-L29840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29839-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29839-L29840) · [Before (L29839-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29839-L29840)

```diff
-         trackLines: null !== (Jd = Wd.trackLines) && void 0 !== Jd ? Jd : null,
-         numbersKey: null !== (kd = Wd.numbersKey) && void 0 !== kd ? kd : null
+         trackLines: null !== (FQ = oQ.trackLines) && void 0 !== FQ ? FQ : null,
+         numbersKey: null !== (wQ = oQ.numbersKey) && void 0 !== wQ ? wQ : null
```

#### 2625. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29844` → after: `L29844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29844) · [Before (L29844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29844)

```diff
-         return !(void 0 !== dd.ageBand && dd.ageBand !== Jd.ageBand || !0 === dd.isCodeMissing && !Jd.isCodeMissing) && (dd.isFinal || 0 !== (0, sg.i)(dd.model) || dd.numbersKey === Jd.numbersKey)
+         return !(void 0 !== QQ.ageBand && QQ.ageBand !== FQ.ageBand || !0 === QQ.isCodeMissing && !FQ.isCodeMissing) && (QQ.isFinal || 0 !== (0, Wv.j)(QQ.model) || QQ.numbersKey === FQ.numbersKey)
```

#### 2626. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29849` → after: `L29849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29849) · [Before (L29849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29849)

```diff
-       }) ? Wd : null;
+       }) ? oQ : null;
```

#### 2627. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29857` → after: `L29857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29857) · [Before (L29857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29857)

```diff
-         rank: (0, sg.i)(dd.model),
+         rank: (0, Wv.j)(QQ.model),
```

#### 2628. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29873` → after: `L29873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29873) · [Before (L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29873)

```diff
-       Od = null === Kd ? null : Ld(Kd, null !== (pd = Kd.trackLines) && void 0 !== pd ? pd : null, null !== (Nd = Kd.numbersKey) && void 0 !== Nd ? Nd : null);
+       AQ = null === uQ ? null : xQ(uQ, null !== (LQ = uQ.trackLines) && void 0 !== LQ ? LQ : null, null !== (qQ = uQ.numbersKey) && void 0 !== qQ ? qQ : null);
```

#### 2629. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29903` → after: `L29903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29903) · [Before (L29903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29903)

```diff
-           return null !== dd && !dd.isFinal && 0 === (0, sg.i)(dd.model) && dd.numbersKey === Jd
+           return null !== QQ && !QQ.isFinal && 0 === (0, Wv.j)(QQ.model) && QQ.numbersKey === FQ
```

#### 2630. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29945` → after: `L29945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29945) · [Before (L29945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29945)

```diff
-   const cd = null !== (Jd = null === Rd || void 0 === Rd ? void 0 : Rd.text) && void 0 !== Jd ? Jd : null;
+   const VQ = null !== (FQ = null === eQ || void 0 === eQ ? void 0 : eQ.text) && void 0 !== FQ ? FQ : null;
```

#### 2631. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29949` → after: `L29949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29949) · [Before (L29949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29949)

```diff
-   const hd = dd => `${gd(Ae[dd.ageBand])}, ${gd(JR.get(dd.gameTier))}`,
+   const hQ = QQ => `${vQ(Qe[QQ.ageBand])}, ${vQ(we.get(QQ.gameTier))}`,
```

#### 2632. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29958` → after: `L29958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29958) · [Before (L29958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29958)

```diff
-         label: pd ? `${hd(kd)} (${gd("estimate")})` : hd(kd)
+         label: LQ ? `${hQ(wQ)} (${vQ("estimate")})` : hQ(wQ)
```

#### 2633. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29968` → after: `L29968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29968) · [Before (L29968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29968)

```diff
-     text: null !== (kd = null === Rd || void 0 === Rd ? void 0 : Rd.text) && void 0 !== kd ? kd : null,
+     text: null !== (wQ = null === eQ || void 0 === eQ ? void 0 : eQ.text) && void 0 !== wQ ? wQ : null,
```

#### 2634. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29973` → after: `L29973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29973) · [Before (L29973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29973)

```diff
-         trackLines: null !== (kd = null === Rd || void 0 === Rd ? void 0 : Rd.trackLines) && void 0 !== kd ? kd : null,
+         trackLines: null !== (wQ = null === eQ || void 0 === eQ ? void 0 : eQ.trackLines) && void 0 !== wQ ? wQ : null,
```

#### 2635. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29976-L29978` → after: `L29976-L29978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29976-L29978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29976-L29978) · [Before (L29976-L29978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29976-L29978)

```diff
-         ageBand: null !== (pd = null === md || void 0 === md ? void 0 : md.ageBand) && void 0 !== pd ? pd : null,
-         checkedNumbers: td ? Xd : null,
-         numberFacts: td ? nd : null,
+         ageBand: null !== (LQ = null === rQ || void 0 === rQ ? void 0 : rQ.ageBand) && void 0 !== LQ ? LQ : null,
+         checkedNumbers: nQ ? TQ : null,
+         numberFacts: nQ ? zQ : null,
```

#### 2636. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29988` → after: `L29988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29988) · [Before (L29988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29988)

```diff
-     notice: null === xd ? void 0 : (0, lJ.jsxs)(Gd.G, {
+     notice: null === cQ ? void 0 : (0, HF.jsxs)(GQ.L, {
```

#### 2637. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29992` → after: `L29992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29992) · [Before (L29992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29992)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2638. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29999` → after: `L29999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L29999) · [Before (L29999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L29999)

```diff
-         children: (0, lJ.jsx)(Ad.c, {
+         children: (0, HF.jsx)(BQ.d, {
```

#### 2639. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30001` → after: `L30001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30001) · [Before (L30001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30001)

```diff
-           value: null === md ? ud : rd.find((dd => dd.value === ou(md))),
+           value: null === rQ ? EQ : JQ.find((QQ => QQ.value === un(rQ))),
```

#### 2640. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30016` → after: `L30016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30016) · [Before (L30016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30016)

```diff
-           }), `${Dd} - AI prompts.zip`)
+           }), `${aQ} - AI prompts.zip`)
```

#### 2641. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30028` → after: `L30028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30028) · [Before (L30028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30028)

```diff
-           }), `${Dd} - AI prompt.md`), void 0 !== navigator.clipboard && navigator.clipboard.writeText(dd).then((() => {
+           }), `${aQ} - AI prompt.md`), void 0 !== navigator.clipboard && navigator.clipboard.writeText(QQ).then((() => {
```

#### 2642. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30038-L30040` → after: `L30038-L30040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30038-L30040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30038-L30040) · [Before (L30038-L30040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30038-L30040)

```diff
- var Lu = kd(2079),
-   Ou = kd(4799),
-   eu = kd(1569);
+ var Yn = wQ(2050),
+   xn = wQ(4754),
+   An = wQ(1532);
```

#### 2643. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30083` → after: `L30083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30083) · [Before (L30083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30083)

```diff
-   } = (0, Qd.B)(), {
+   } = (0, YQ.y)(), {
```

#### 2644. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30086-L30087` → after: `L30086-L30087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30086-L30087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30086-L30087) · [Before (L30086-L30087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30086-L30087)

```diff
-   } = (0, Ld.c)(), [Cd, Kd] = (0, pd.useState)(!1), [od, Od] = (0, pd.useState)(""), [Rd, Id] = (0, pd.useState)(""), [Bd, sd] = (0, pd.useState)(null), [ad, Md] = (0, pd.useState)(!1), Fd = (0, pd.useRef)(null), Yd = (0, pd.useRef)(null), md = (0, pd.useRef)(0);
-   (0, Lu.e)(Fd, (() => {
+   } = (0, xQ.e)(), [mQ, uQ] = (0, LQ.useState)(!1), [HQ, AQ] = (0, LQ.useState)(""), [eQ, MQ] = (0, LQ.useState)(""), [SQ, iQ] = (0, LQ.useState)(null), [WQ, RQ] = (0, LQ.useState)(!1), OQ = (0, LQ.useRef)(null), sQ = (0, LQ.useRef)(null), rQ = (0, LQ.useRef)(0);
+   (0, Yn.d)(OQ, (() => {
```

#### 2645. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30101` → after: `L30101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30101) · [Before (L30101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30101)

```diff
-     md.current = dd, Md(!1), ed.d.getPublishedGamePreviews(Pd, {
+     rQ.current = QQ, RQ(!1), tQ.b.getPublishedGamePreviews(DQ, {
```

#### 2646. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30122-L30123` → after: `L30122-L30123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30122-L30123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30122-L30123) · [Before (L30122-L30123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30122-L30123)

```diff
-           gameAnalyticsId: (0, Zd.i)(kd, !0),
-           name: (0, eu.p)(kd, Jd),
+           gameAnalyticsId: (0, kQ.h)(wQ, !0),
+           name: (0, An.n)(wQ, FQ),
```

#### 2647. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30135` → after: `L30135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30135) · [Before (L30135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30135)

```diff
-         thumbnail: (0, lJ.jsx)(qd.c, {
+         thumbnail: (0, HF.jsx)(CQ.d, {
```

#### 2648. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30152` → after: `L30152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30152) · [Before (L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30152)

```diff
-       children: (0, lJ.jsxs)(Gd.G, {
+       children: (0, HF.jsxs)(GQ.L, {
```

#### 2649. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30160` → after: `L30160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30160) · [Before (L30160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30160)

```diff
-         }), (0, lJ.jsx)(vd.e, {
+         }), (0, HF.jsx)(pQ.c, {
```

#### 2650. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30172` → after: `L30172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30172) · [Before (L30172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30172)

```diff
-         icon: (0, lJ.jsx)(vd.e, {
+         icon: (0, HF.jsx)(pQ.c, {
```

#### 2651. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30178` → after: `L30178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30178) · [Before (L30178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30178)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```

#### 2652. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30180` → after: `L30180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30180) · [Before (L30180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30180)

```diff
-         }), (0, lJ.jsx)(pJ.e, {
+         }), (0, HF.jsx)(wF.b, {
```

#### 2653. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30190` → after: `L30190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30190) · [Before (L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30190)

```diff
-           children: (0, lJ.jsx)(xd.b, {
+           children: (0, HF.jsx)(cQ.c, {
```

#### 2654. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30228` → after: `L30228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30228) · [Before (L30228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30228)

```diff
-   } = (0, Qd.B)();
+   } = (0, YQ.y)();
```

#### 2655. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30238` → after: `L30238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30238) · [Before (L30238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30238)

```diff
-     }), (0, lJ.jsx)(Ed.e, {
+     }), (0, HF.jsx)(fQ.b, {
```

#### 2656. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30260` → after: `L30260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30260) · [Before (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30260)

```diff
-   return kd >= 1 ? `${kd} day${1===kd?"":"s"}` : Jd >= 1 ? `${Jd} hour${1===Jd?"":"s"}` : "less than an hour"
+   return wQ >= 1 ? `${wQ} day${1===wQ?"":"s"}` : FQ >= 1 ? `${FQ} hour${1===FQ?"":"s"}` : "less than an hour"
```

#### 2657. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30273` → after: `L30273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30273) · [Before (L30273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30273)

```diff
-   } = (0, Qd.B)(), [od, ld] = (0, pd.useState)(null), [Ld, Od] = (0, pd.useState)(!1), [Rd, Id] = (0, pd.useState)(Date.now());
+   } = (0, YQ.y)(), [HQ, bQ] = (0, LQ.useState)(null), [xQ, AQ] = (0, LQ.useState)(!1), [eQ, MQ] = (0, LQ.useState)(Date.now());
```

#### 2658. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30276` → after: `L30276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30276) · [Before (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30276)

```diff
-     return ed.d.getGameBoostStatus(Cd).then((Jd => {
+     return tQ.b.getGameBoostStatus(mQ).then((FQ => {
```

#### 2659. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30284-L30285` → after: `L30284-L30285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30284-L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30284-L30285) · [Before (L30284-L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30284-L30285)

```diff
-   const xd = null !== (Jd = null === od || void 0 === od ? void 0 : od.activeBoost) && void 0 !== Jd ? Jd : null,
-     qd = (null === xd || void 0 === xd ? void 0 : xd.schematicId) === Wd && xd.endsAt > Rd ? xd : null,
+   const cQ = null !== (FQ = null === HQ || void 0 === HQ ? void 0 : HQ.activeBoost) && void 0 !== FQ ? FQ : null,
+     CQ = (null === cQ || void 0 === cQ ? void 0 : cQ.schematicId) === oQ && cQ.endsAt > eQ ? cQ : null,
```

#### 2660. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30303` → after: `L30303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30303) · [Before (L30303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30303)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```

#### 2661. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30320` → after: `L30320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30320) · [Before (L30320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30320)

```diff
-     }), (0, lJ.jsxs)(Gd.d, {
+     }), (0, HF.jsxs)(GQ.f, {
```

#### 2662. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30322` → after: `L30322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30322) · [Before (L30322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30322)

```diff
-       children: [(0, lJ.jsx)(vd.e, {
+       children: [(0, HF.jsx)(pQ.c, {
```

#### 2663. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30334` → after: `L30334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30334) · [Before (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30334)

```diff
-           subtitle: null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.errorMessageForUser) && void 0 !== Jd ? Jd : ""
+           subtitle: null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.errorMessageForUser) && void 0 !== FQ ? FQ : ""
```

#### 2664. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30343` → after: `L30343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30343) · [Before (L30343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30343)

```diff
-     md = null !== (Nd = null === gd || void 0 === gd ? void 0 : gd.rows.filter((dd => !dd.passed))) && void 0 !== Nd ? Nd : [];
+     rQ = null !== (qQ = null === vQ || void 0 === vQ ? void 0 : vQ.rows.filter((QQ => !QQ.passed))) && void 0 !== qQ ? qQ : [];
```

#### 2665. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30352` → after: `L30352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30352) · [Before (L30352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30352)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```

#### 2666. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30403` → after: `L30403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30403) · [Before (L30403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30403)

```diff
-           children: `${dd.label}: ${dd.valueText}`
+           children: `${QQ.label}: ${QQ.valueText}`
```

#### 2667. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30406` → after: `L30406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30406) · [Before (L30406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30406)

```diff
-       children: (0, lJ.jsxs)(Gd.d, {
+       children: (0, HF.jsxs)(GQ.f, {
```

#### 2668. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30423` → after: `L30423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30423) · [Before (L30423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30423)

```diff
-             !0 === dd && ad(ed.d.startGameBoost(Cd, Wd))
+             !0 === QQ && WQ(tQ.b.startGameBoost(mQ, oQ))
```

#### 2669. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30426` → after: `L30426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L30426) · [Before (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L30426)

```diff
-         children: [(0, lJ.jsx)(vd.e, {
+         children: [(0, HF.jsx)(pQ.c, {
```
