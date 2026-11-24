# Changed — Bundle Modifications Report (Part 016 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `16 / 141` (**390** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/106.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/106.js` (2674 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e)

#### 1954. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L21985` → after: `L21985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR21985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L21985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L21985) · [Before (L21985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L21985)

```diff
-     if (kT.set(jT, (null !== (pT = kT.get(jT)) && void 0 !== pT ? pT : 0) + 1), null !== nT && fT > nT.start && fT < nT.end && /^\s*\d+[.)]/.test(TT)) {
+     if (UB.set(aB, (null !== (sB = UB.get(aB)) && void 0 !== sB ? sB : 0) + 1), null !== NB && GB > NB.start && GB < NB.end && /^\s*\d+[.)]/.test(BB)) {
```

#### 1955. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L21992-L21993` → after: `L21992-L21993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR21992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L21992-L21993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L21992-L21993) · [Before (L21992-L21993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L21992-L21993)

```diff
-       qT = null !== (BT = null !== MT && void 0 !== MT ? MT : cT) && void 0 !== BT ? BT : null === vT ? null : "drop",
-       iT = null !== MT ? "drop" === MT ? "welcomeDropped" : "welcomeIdea" : null !== cT ? "drop" === cT ? "shopDropped" : "shopItem" : null !== vT && void 0 !== vT ? vT : "givenDropped";
+       LB = null !== (JB = null !== dB && void 0 !== dB ? dB : yB) && void 0 !== JB ? JB : null === kB ? null : "drop",
+       gB = null !== dB ? "drop" === dB ? "welcomeDropped" : "welcomeIdea" : null !== yB ? "drop" === yB ? "shopDropped" : "shopItem" : null !== kB && void 0 !== kB ? kB : "givenDropped";
```

#### 1956. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22005` → after: `L22005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22005) · [Before (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22005)

```diff
-     if ("drop" === fT.to) cT.set(fT.section, (null !== (vT = cT.get(fT.section)) && void 0 !== vT ? vT : 0) + 1)
+     if ("drop" === GB.to) yB.set(GB.section, (null !== (kB = yB.get(GB.section)) && void 0 !== kB ? kB : 0) + 1)
```

#### 1957. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22057-L22058` → after: `L22057-L22058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22057-L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22057-L22058) · [Before (L22057-L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22057-L22058)

```diff
-   const mT = (0, pg.j)(UT);
-   return new RegExp(`(?:^|[^\\p{L}\\p{N}])${mT}(?![\\p{L}\\p{N}])`, "iu").test(TT)
+   const zB = (0, kI.e)(jB);
+   return new RegExp(`(?:^|[^\\p{L}\\p{N}])${zB}(?![\\p{L}\\p{N}])`, "iu").test(BB)
```

#### 1958. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22071-L22072` → after: `L22071-L22072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22071-L22072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22071-L22072) · [Before (L22071-L22072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22071-L22072)

```diff
-       for (const [gT] of(0, Bg.e)(TT, /\/[a-z][\w-]*/gi, (0, Bg.j)("\\w/"))) WT.push(gT);
-     const zT = (null !== (mT = UT.calls) && void 0 !== mT ? mT : []).flatMap((TT => /^createShopItem/.test(TT.name) && void 0 !== TT.strings[0] ? [TT.strings[0]] : [])),
+       for (const [IB] of(0, GI.h)(BB, /\/[a-z][\w-]*/gi, (0, GI.k)("\\w/"))) QB.push(IB);
+     const nB = (null !== (zB = jB.calls) && void 0 !== zB ? zB : []).flatMap((BB => /^createShopItem/.test(BB.name) && void 0 !== BB.strings[0] ? [BB.strings[0]] : [])),
```

#### 1959. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22086` → after: `L22086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22086) · [Before (L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22086)

```diff
-   return TT.length > Ss ? `${TT.slice(0,Ss-1).trimEnd()}\u2026` : TT
+   return BB.length > xX ? `${BB.slice(0,xX-1).trimEnd()}\u2026` : BB
```

#### 1960. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22090` → after: `L22090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22090) · [Before (L22090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22090)

```diff
-   return /[.!?]$/.test(TT.trim()) ? TT.trim() : `${TT.trim()}.`
+   return /[.!?]$/.test(BB.trim()) ? BB.trim() : `${BB.trim()}.`
```

#### 1961. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22103-L22105` → after: `L22103-L22105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22103-L22105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22103-L22105) · [Before (L22103-L22105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22103-L22105)

```diff
-         gT = MT[1][0] === MT[1][0].toUpperCase() ? `${WT[0].toUpperCase()}${WT.slice(1)}` : WT,
-         nT = `${null!==(mT=MT[2])&&void 0!==mT?mT:""}${MT[3]}`;
-       return `${TT.slice(0,MT.index)}${gT} "${UT}" to your ${nT}${TT.slice(MT.index+MT[0].length)}`
+         IB = dB[1][0] === dB[1][0].toUpperCase() ? `${QB[0].toUpperCase()}${QB.slice(1)}` : QB,
+         NB = `${null!==(zB=dB[2])&&void 0!==zB?zB:""}${dB[3]}`;
+       return `${BB.slice(0,dB.index)}${IB} "${jB}" to your ${NB}${BB.slice(dB.index+dB[0].length)}`
```

#### 1962. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22132` → after: `L22132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22132) · [Before (L22132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22132)

```diff
-     const nT = (null !== (WT = UT.messages) && void 0 !== WT ? WT : []).filter((TT => void 0 !== TT.line && null !== Rs(TT.line, TT.text) && !TT.text.includes("\u2026"))),
+     const NB = (null !== (QB = jB.messages) && void 0 !== QB ? QB : []).filter((BB => void 0 !== BB.line && null !== BZ(BB.line, BB.text) && !BB.text.includes("\u2026"))),
```

#### 1963. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22137` → after: `L22137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22137) · [Before (L22137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22137)

```diff
-       return null !== (kT = nT.find((UT => UT.line.trim().replace(/;\s*$/, "").replace(/\s+/g, "") === TT))) && void 0 !== kT ? kT : null
+       return null !== (UB = NB.find((jB => jB.line.trim().replace(/;\s*$/, "").replace(/\s+/g, "") === BB))) && void 0 !== UB ? UB : null
```

#### 1964. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22141` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22141) · [Before (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22141)

```diff
-     const lT = nT.filter((TT => Wk(TT.where) === jT && new RegExp(`\\bapi\\.${mT}\\s*\\(`).test(TT.line))),
+     const pB = NB.filter((BB => nU(BB.where) === aB && new RegExp(`\\bapi\\.${zB}\\s*\\(`).test(BB.line))),
```

#### 1965. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22149` → after: `L22149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22149) · [Before (L22149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22149)

```diff
-   if (0 === qT.length || !Ns.test(`${vT}\n${fT}`)) return null;
+   if (0 === LB.length || !CX.test(`${kB}\n${GB}`)) return null;
```

#### 1966. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22154` → after: `L22154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22154) · [Before (L22154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22154)

```diff
-       if (null === mT) return `${WF(TT)} ${WF(UT)}`;
+       if (null === zB) return `${nZ(BB)} ${nZ(jB)}`;
```

#### 1967. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22156` → after: `L22156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22156) · [Before (L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22156)

```diff
-       return "" === WT ? `${mT[1]} ${WF(UT)}` : `${mT[1]} ${WF(UT)} ${WT}`
+       return "" === QB ? `${zB[1]} ${nZ(jB)}` : `${zB[1]} ${nZ(jB)} ${QB}`
```

#### 1968. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22160-L22161` → after: `L22160-L22161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22160-L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22160-L22161) · [Before (L22160-L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22160-L22161)

```diff
-     YT = `${cT.line.slice(0,OT.start)}${(0,pg.N)(bT,OT.quote)}${cT.line.slice(OT.end)}`,
-     JT = `Change your ${/\bwelcome\b/i.test(cT.text)?`welcome message ("${mF(cT.text)}")`:`"${mF(cT.text)}" message in ${Wk(cT.where)}`} so it also says "${iT}".`,
+     EB = `${yB.line.slice(0,SB.start)}${(0,kI.M)(tB,SB.quote)}${yB.line.slice(SB.end)}`,
+     iB = `Change your ${/\bwelcome\b/i.test(yB.text)?`welcome message ("${QZ(yB.text)}")`:`"${QZ(yB.text)}" message in ${nU(yB.where)}`} so it also says "${gB}".`,
```

#### 1969. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22170` → after: `L22170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22170) · [Before (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22170)

```diff
-     newCode: [`${eT}${YT}`],
+     newCode: [`${MB}${EB}`],
```

#### 1970. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22178` → after: `L22178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22178) · [Before (L22178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22178)

```diff
-     null !== UT && null !== WT && (TT[wT] = `${UT[0]}${WT[1]}${JT}`)
+     null !== jB && null !== QB && (BB[oB] = `${jB[0]}${QB[1]}${iB}`)
```

#### 1971. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22196` → after: `L22196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22196) · [Before (L22196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22196)

```diff
-   const [, zT, MT, gT, nT, HT] = WT, kT = (null !== (mT = UT.messages) && void 0 !== mT ? mT : []).find((TT => As(TT.text) === As(nT)));
+   const [, nB, dB, IB, NB, uB] = QB, UB = (null !== (zB = jB.messages) && void 0 !== zB ? zB : []).find((BB => OX(BB.text) === OX(NB)));
```

#### 1972. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22201` → after: `L22201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22201) · [Before (L22201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22201)

```diff
-     to: `${zT}${MT}hange your "${nT}" message in ${Wk(kT.where)} so it also says "${gT}"${HT}`,
+     to: `${nB}${dB}hange your "${NB}" message in ${nU(UB.where)} so it also says "${IB}"${uB}`,
```

#### 1973. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22207` → after: `L22207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22207) · [Before (L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22207)

```diff
-   jF = new RegExp(`\\b(?:the|your)\\s+(${[...HF,...kF].join("|")})\\s+(?:(?:\`[^\`\\n]+\`|[A-Za-z-]+)\\s+){0,2}?(?:message|line)\\b`, "gi"),
+   pZ = new RegExp(`\\b(?:the|your)\\s+(${[...UZ,...aZ].join("|")})\\s+(?:(?:\`[^\`\\n]+\`|[A-Za-z-]+)\\s+){0,2}?(?:message|line)\\b`, "gi"),
```

#### 1974. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22236` → after: `L22236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22236) · [Before (L22236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22236)

```diff
-   const WT = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.messageOrders) && void 0 !== mT ? mT : [];
+   const QB = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.messageOrders) && void 0 !== zB ? zB : [];
```

#### 1975. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22313` → after: `L22313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22313) · [Before (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22313)

```diff
-   qF = `(\\d+|${Object.keys(fF).join("|")})`;
+   gZ = `(\\d+|${Object.keys(LZ).join("|")})`;
```

#### 1976. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22317` → after: `L22317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22317) · [Before (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22317)

```diff
-   return null !== (UT = fF[TT.toLowerCase()]) && void 0 !== UT ? UT : Number(TT)
+   return null !== (jB = LZ[BB.toLowerCase()]) && void 0 !== jB ? jB : Number(BB)
```

#### 1977. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22357` → after: `L22357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22357) · [Before (L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22357)

```diff
-     const jT = /^(\d+) min$/.exec(null !== (zT = kT[1]) && void 0 !== zT ? zT : "");
+     const aB = /^(\d+) min$/.exec(null !== (nB = UB[1]) && void 0 !== nB ? nB : "");
```

#### 1978. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22361` → after: `L22361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22361) · [Before (L22361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22361)

```diff
-         const mT = /^(\d+(?:\.\d+)?)%$/.exec(null !== (UT = kT[TT]) && void 0 !== UT ? UT : "");
+         const zB = /^(\d+(?:\.\d+)?)%$/.exec(null !== (jB = UB[BB]) && void 0 !== jB ? jB : "");
```

#### 1979. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22369` → after: `L22369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22369) · [Before (L22369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22369)

```diff
-       left: null !== (MT = lT(WT.left)) && void 0 !== MT ? MT : 100 - LT,
+       left: null !== (dB = pB(QB.left)) && void 0 !== dB ? dB : 100 - rB,
```

#### 1980. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22387` → after: `L22387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22387) · [Before (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22387)

```diff
-   aF = new RegExp(`\\b(?:(${tF})\\s+)?(?:the\\s+)?(first[\\s-]+)?${qF}[\\s-]*(?:minutes?|mins?)\\b(\\s+or\\s+(?:more|longer))?(\\s+mark\\b)?`, "gi");
+   FZ = new RegExp(`\\b(?:(${DZ})\\s+)?(?:the\\s+)?(first[\\s-]+)?${gZ}[\\s-]*(?:minutes?|mins?)\\b(\\s+or\\s+(?:more|longer))?(\\s+mark\\b)?`, "gi");
```

#### 1981. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22390` → after: `L22390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22390) · [Before (L22390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22390)

```diff
-   return void 0 !== TT[1] || void 0 !== TT[2] || /^the\s/i.test(TT[0]) || !(0, Bg.d)(TT, "\\d.,")
+   return void 0 !== BB[1] || void 0 !== BB[2] || /^the\s/i.test(BB[0]) || !(0, GI.e)(BB, "\\d.,")
```

#### 1982. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22392-L22393` → after: `L22392-L22393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22392-L22393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22392-L22393) · [Before (L22392-L22393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22392-L22393)

```diff
- const XF = new RegExp(`\\b(?:(${tF}|during)\\s+)?(?:the\\s+|that\\s+|your\\s+)?first[\\s-]+minute\\b`, "gi"),
-   IF = new RegExp(`\\b(?:(${tF})\\s+)?minute\\s+${qF}\\b(?!\\s?%)`, "gi");
+ const VZ = new RegExp(`\\b(?:(${DZ}|during)\\s+)?(?:the\\s+|that\\s+|your\\s+)?first[\\s-]+minute\\b`, "gi"),
+   hZ = new RegExp(`\\b(?:(${DZ})\\s+)?minute\\s+${gZ}\\b(?!\\s?%)`, "gi");
```

#### 1983. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22402` → after: `L22402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22402) · [Before (L22402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22402)

```diff
-       return (0, Bg.e)(TT, aF, yF)
+       return (0, GI.h)(BB, FZ, YZ)
```

#### 1984. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22405` → after: `L22405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22405) · [Before (L22405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22405)

```diff
-     const TT = null !== (mT = MT[1]) && void 0 !== mT ? mT : "";
+     const BB = null !== (zB = dB[1]) && void 0 !== zB ? zB : "";
```

#### 1985. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22418` → after: `L22418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22418) · [Before (L22418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22418)

```diff
-     const TT = null !== (WT = MT[1]) && void 0 !== WT ? WT : "";
+     const BB = null !== (QB = dB[1]) && void 0 !== QB ? QB : "";
```

#### 1986. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22431` → after: `L22431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22431) · [Before (L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22431)

```diff
-     const TT = null !== (zT = MT[1]) && void 0 !== zT ? zT : "";
+     const BB = null !== (nB = dB[1]) && void 0 !== nB ? nB : "";
```

#### 1987. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22451` → after: `L22451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22451) · [Before (L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22451)

```diff
-   return null !== (mT = null === zT || void 0 === zT ? void 0 : zT[1]) && void 0 !== mT ? mT : null
+   return null !== (zB = null === nB || void 0 === nB ? void 0 : nB[1]) && void 0 !== zB ? zB : null
```

#### 1988. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22468` → after: `L22468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22468) · [Before (L22468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22468)

```diff
-   const [WT] = (0, pg.I)(TT, UT, mT);
+   const [QB] = (0, kI.J)(BB, jB, zB);
```

#### 1989. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22481` → after: `L22481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22481) · [Before (L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22481)

```diff
-   return 0 === UT.size ? [] : (0, Bg.e)(TT, rF, (0, Bg.j)("\\w.,")).flatMap((zT => {
+   return 0 === jB.size ? [] : (0, GI.h)(BB, lZ, (0, GI.k)("\\w.,")).flatMap((nB => {
```

#### 1990. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22487` → after: `L22487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22487) · [Before (L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22487)

```diff
-       lT = kT ? 100 * Number(zT[2]) / jT : Number(zT[1]),
+       pB = UB ? 100 * Number(nB[2]) / aB : Number(nB[1]),
```

#### 1991. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22525` → after: `L22525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22525) · [Before (L22525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22525)

```diff
-     const dT = null !== (MT = null !== (gT = VF(cT, !1)) && void 0 !== gT ? gT : VF(ZT, !0)) && void 0 !== MT ? MT : bT.side;
+     const fB = null !== (dB = null !== (IB = PZ(yB, !1)) && void 0 !== IB ? IB : PZ(mB, !0)) && void 0 !== dB ? dB : tB.side;
```

#### 1992. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22527` → after: `L22527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22527) · [Before (L22527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22527)

```diff
-     const [wT, tT] = (0, pg.I)(TT, nT, HT);
+     const [oB, HB] = (0, kI.J)(BB, NB, uB);
```

#### 1993. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22539` → after: `L22539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22539) · [Before (L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22539)

```diff
-       text: kT ? `${sT} ${zT[0].replace(/^\d+\s+/,"")}` : `${QT}%`
+       text: UB ? `${XB} ${nB[0].replace(/^\d+\s+/,"")}` : `${hB}%`
```

#### 1994. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22545-L22548` → after: `L22545-L22548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22545-L22548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22545-L22548) · [Before (L22545-L22548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22545-L22548)

```diff
-   nP = new RegExp(`\\bthe earliest is (.+?) \\((${MP}) min\\)`),
-   HP = new RegExp(`^(?:and )?(.+?) \\((${MP}) min\\)$`),
-   kP = new RegExp(`\\btook a median (${MP}) min from (.+?) to (.+?)\\.(?:\\s|$)`, "g"),
-   jP = new RegExp(`\\bMedian time between: (${MP}) min\\b`),
+   uA = new RegExp(`\\bthe earliest is (.+?) \\((${IA}) min\\)`),
+   UA = new RegExp(`^(?:and )?(.+?) \\((${IA}) min\\)$`),
+   aA = new RegExp(`\\btook a median (${IA}) min from (.+?) to (.+?)\\.(?:\\s|$)`, "g"),
+   pA = new RegExp(`\\bMedian time between: (${IA}) min\\b`),
```

#### 1995. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22564` → after: `L22564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22564) · [Before (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22564)

```diff
-       const gT = null !== (zT = mT.get(BP(TT))) && void 0 !== zT ? zT : TT.trim();
+       const IB = null !== (nB = zB.get(mA(BB))) && void 0 !== nB ? nB : BB.trim();
```

#### 1996. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22566-L22567` → after: `L22566-L22567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22566-L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22566-L22567) · [Before (L22566-L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22566-L22567)

```diff
-       const nT = null !== (MT = UT.get(gT)) && void 0 !== MT ? MT : [];
-       UT.set(gT, nT.includes(WT) ? nT : [...nT, WT])
+       const NB = null !== (dB = jB.get(IB)) && void 0 !== dB ? dB : [];
+       jB.set(IB, NB.includes(QB) ? NB : [...NB, QB])
```

#### 1997. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22583-L22584` → after: `L22583-L22584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22583-L22584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22583-L22584) · [Before (L22583-L22584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22583-L22584)

```diff
-       const mT = null === gT ? null : new RegExp(`^(${MP})$`).exec(null !== (nT = TT[gT.at]) && void 0 !== nT ? nT : ""),
-         WT = null === gT ? "" : null !== (HT = TT[gT.event]) && void 0 !== HT ? HT : "";
+       const zB = null === IB ? null : new RegExp(`^(${IA})$`).exec(null !== (NB = BB[IB.at]) && void 0 !== NB ? NB : ""),
+         QB = null === IB ? "" : null !== (uB = BB[IB.event]) && void 0 !== uB ? uB : "";
```

#### 1998. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22587-L22588` → after: `L22587-L22588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22587-L22588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22587-L22588) · [Before (L22587-L22588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22587-L22588)

```diff
-         const UT = -1 === gT.value ? "" : null !== (kT = TT[gT.value]) && void 0 !== kT ? kT : "";
-         MT("" === UT || "(none)" === UT ? WT : `${WT}: ${UT}`, Number(mT[1]))
+         const jB = -1 === IB.value ? "" : null !== (UB = BB[IB.value]) && void 0 !== UB ? UB : "";
+         dB("" === jB || "(none)" === jB ? QB : `${QB}: ${jB}`, Number(zB[1]))
```

#### 1999. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22601` → after: `L22601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22601) · [Before (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22601)

```diff
-     for (const zT of pT.matchAll(kP)) WT.set(`${BP(zT[2])} > ${BP(zT[3])}`, {
+     for (const nB of sB.matchAll(aA)) QB.set(`${mA(nB[2])} > ${mA(nB[3])}`, {
```

#### 2000. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22612` → after: `L22612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22612) · [Before (L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22612)

```diff
-         gT = `${BP(TT)} > ${BP(UT)}`;
+         IB = `${mA(BB)} > ${mA(jB)}`;
```

#### 2001. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22616` → after: `L22616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22616) · [Before (L22616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22616)

```diff
-         minutes: null === MT ? null !== (jT = null === (lT = WT.get(gT)) || void 0 === lT ? void 0 : lT.minutes) && void 0 !== jT ? jT : null : Number(MT[1])
+         minutes: null === dB ? null !== (aB = null === (pB = QB.get(IB)) || void 0 === pB ? void 0 : pB.minutes) && void 0 !== aB ? aB : null : Number(dB[1])
```

#### 2002. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22624-L22625` → after: `L22624-L22625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22624-L22625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22624-L22625) · [Before (L22624-L22625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22624-L22625)

```diff
-             WT = (null !== (UT = TT[2]) && void 0 !== UT ? UT : "").split(/,\s*/).map((TT => TT.trim())).filter((TT => "" !== TT && "\u2026" !== TT));
-           return 0 === WT.length ? [mT] : WT.map((TT => `${mT}: ${TT}`))
+             QB = (null !== (jB = BB[2]) && void 0 !== jB ? jB : "").split(/,\s*/).map((BB => BB.trim())).filter((BB => "" !== BB && "\u2026" !== BB));
+           return 0 === QB.length ? [zB] : QB.map((BB => `${zB}: ${BB}`))
```

#### 2003. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22644` → after: `L22644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22644) · [Before (L22644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22644)

```diff
-   return /^-?\d+$/.test(zT) ? [UT, ...(0, pg.E)(WT, zT)] : /[a-z]{3}/i.test(zT) && !cP.test(zT) ? [UT, WT, zT] : [UT, WT]
+   return /^-?\d+$/.test(nB) ? [jB, ...(0, kI.I)(QB, nB)] : /[a-z]{3}/i.test(nB) && !kA.test(nB) ? [jB, QB, nB] : [jB, QB]
```

#### 2004. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22648` → after: `L22648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22648) · [Before (L22648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22648)

```diff
-   return `\`?${(0,pg.A)(TT)}\`?(?![\\w]|\\.\\d)`
+   return `\`?${(0,kI.C)(BB)}\`?(?![\\w]|\\.\\d)`
```

#### 2005. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22653` → after: `L22653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22653) · [Before (L22653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22653)

```diff
-   const zT = 10 ** (null !== (mT = null === (WT = TT.split(".")[1]) || void 0 === WT ? void 0 : WT.length) && void 0 !== mT ? mT : 0);
+   const nB = 10 ** (null !== (zB = null === (QB = BB.split(".")[1]) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0);
```

#### 2006. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22666-L22667` → after: `L22666-L22667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22666-L22667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22666-L22667) · [Before (L22666-L22667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22666-L22667)

```diff
-     nT = null !== (zT = null === gT || void 0 === gT ? void 0 : gT[2]) && void 0 !== zT ? zT : "",
-     HT = "1" === MT ? nT.replace(/s$/i, "") : /^minute$/i.test(nT) ? `${nT}s` : nT;
+     NB = null !== (nB = null === IB || void 0 === IB ? void 0 : IB[2]) && void 0 !== nB ? nB : "",
+     uB = "1" === dB ? NB.replace(/s$/i, "") : /^minute$/i.test(NB) ? `${NB}s` : NB;
```

#### 2007. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22675` → after: `L22675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22675) · [Before (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22675)

```diff
-     text: `${MT}${gT[1]}${HT}`
+     text: `${dB}${IB[1]}${uB}`
```

#### 2008. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22683` → after: `L22683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22683) · [Before (L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22683)

```diff
-     return mT.has(BP(UT)) ? WT : []
+     return zB.has(mA(jB)) ? QB : []
```

#### 2009. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22687` → after: `L22687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22687) · [Before (L22687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22687)

```diff
-   xP = `(?:${JP}+(?:event|events|timing|time|purchase|purchases|rescue|rescues|death|deaths|kill|kills|quickly|early|usually|first|often|only|typically|then|now|already|is|are|was))*`,
+   fA = `(?:${qA}+(?:event|events|timing|time|purchase|purchases|rescue|rescues|death|deaths|kill|kills|quickly|early|usually|first|often|only|typically|then|now|already|is|are|was))*`,
```

#### 2010. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22689-L22690` → after: `L22689-L22690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22689-L22690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22689-L22690) · [Before (L22689-L22690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22689-L22690)

```diff
-   wP = new RegExp(`^${xP}${JP}+(?:happens?|happened|fires?|fired|triggers?|triggered|comes?|came|occurs?|occurred|logged|starts?|started|begins?|began|arrives?|averages?|bought|reached|rescued|collected|shows up)(?:${JP}+(?:quickly|early))?(?:${JP}+(?:at|around|about))?(?:${JP}+a … [truncated]
-   tP = new RegExp(`^${xP}${JP}+(?:at|around|about)${JP}+$`, "i"),
+   HA = new RegExp(`^${fA}${qA}+(?:happens?|happened|fires?|fired|triggers?|triggered|comes?|came|occurs?|occurred|logged|starts?|started|begins?|began|arrives?|averages?|bought|reached|rescued|collected|shows up)(?:${qA}+(?:quickly|early))?(?:${qA}+(?:at|around|about))?(?:${qA}+a … [truncated]
+   DA = new RegExp(`^${fA}${qA}+(?:at|around|about)${qA}+$`, "i"),
```

#### 2011. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22692` → after: `L22692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22692) · [Before (L22692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22692)

```diff
-   yP = new RegExp(`^(?:(${MP})[\\s-]*(?:minutes?|mins?|min)\\b|minute\\s+(${MP})\\b)`, "i"),
+   YA = new RegExp(`^(?:(${IA})[\\s-]*(?:minutes?|mins?|min)\\b|minute\\s+(${IA})\\b)`, "i"),
```

#### 2012. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22694-L22695` → after: `L22694-L22695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22694-L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22694-L22695) · [Before (L22694-L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22694-L22695)

```diff
-   IP = new RegExp(`^(\\s*\\(\\s*(?:(?:avg\\.?|average)(?:\\s+time)?|about|around|at|~)?\\s*)(${MP})\\s*(?:minutes?|mins?|min)\\s*(?:in|into a game|avg|average|on average)?\\s*\\)`, "i"),
-   QP = new RegExp(`(${MP})[\\s-]*(?:minutes?|mins?|min)\\s+(?:to|until)\\s+(?:reach\\s+|get\\s+)?(?:the\\s+)?[*\`]*$`, "i"),
+   hA = new RegExp(`^(\\s*\\(\\s*(?:(?:avg\\.?|average)(?:\\s+time)?|about|around|at|~)?\\s*)(${IA})\\s*(?:minutes?|mins?|min)\\s*(?:in|into a game|avg|average|on average)?\\s*\\)`, "i"),
+   XA = new RegExp(`(${IA})[\\s-]*(?:minutes?|mins?|min)\\s+(?:to|until)\\s+(?:reach\\s+|get\\s+)?(?:the\\s+)?[*\`]*$`, "i"),
```

#### 2013. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22701` → after: `L22701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22701) · [Before (L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22701)

```diff
-   CP = new RegExp(`(${MP})[\\s-]*(?:minutes?|mins?|min)\\b(?:\\s+(?:gap|wait))?\\s+(?:between|from)\\s+$`, "i"),
+   eA = new RegExp(`(${IA})[\\s-]*(?:minutes?|mins?|min)\\b(?:\\s+(?:gap|wait))?\\s+(?:between|from)\\s+$`, "i"),
```

#### 2014. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22703` → after: `L22703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22703) · [Before (L22703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22703)

```diff
-   KP = new RegExp(`^\\s*\\(?\\s*(?:currently|now|is|takes?|took|was|from the current)?\\s*(?:a median of|about|around|roughly)?\\s*(${MP})[\\s-]*(?:minutes?|mins?|min)\\b`, "i");
+   wA = new RegExp(`^\\s*\\(?\\s*(?:currently|now|is|takes?|took|was|from the current)?\\s*(?:a median of|about|around|roughly)?\\s*(${IA})[\\s-]*(?:minutes?|mins?|min)\\b`, "i");
```

#### 2015. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22716` → after: `L22716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22716) · [Before (L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22716)

```diff
-       lT = 1 === (null === HT || void 0 === HT ? void 0 : HT.events.length) ? HT.events[0] : null !== kT && null !== jT ? `${jT[1]}: ${kT[1]}` : null;
+       pB = 1 === (null === uB || void 0 === uB ? void 0 : uB.events.length) ? uB.events[0] : null !== UB && null !== aB ? `${aB[1]}: ${UB[1]}` : null;
```

#### 2016. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22718` → after: `L22718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22718) · [Before (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22718)

```diff
-     const LT = null !== (WT = null === HT || void 0 === HT ? void 0 : HT.end) && void 0 !== WT ? WT : nT + kT[0].length,
+     const rB = null !== (QB = null === uB || void 0 === uB ? void 0 : uB.end) && void 0 !== QB ? QB : NB + UB[0].length,
```

#### 2017. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22750` → after: `L22750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22750) · [Before (L22750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22750)

```diff
- const GP = new RegExp(`^[^.,;:!?()\\d]{0,40}?\\b(${MP})[\\s-]*(?:minutes?|mins?|min)\\s+later\\b`, "i");
+ const KA = new RegExp(`^[^.,;:!?()\\d]{0,40}?\\b(${IA})[\\s-]*(?:minutes?|mins?|min)\\s+later\\b`, "i");
```

#### 2018. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22785` → after: `L22785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22785) · [Before (L22785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22785)

```diff
-     nT = null === gT || UT.isOrdered ? gT : Math.abs(gT);
+     NB = null === IB || jB.isOrdered ? IB : Math.abs(IB);
```

#### 2019. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22787` → after: `L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22787) · [Before (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22787)

```diff
-     step: null !== (mT = null === WT || void 0 === WT ? void 0 : WT.minutes) && void 0 !== mT ? mT : null,
+     step: null !== (zB = null === QB || void 0 === QB ? void 0 : QB.minutes) && void 0 !== zB ? zB : null,
```

#### 2020. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22807-L22808` → after: `L22807-L22808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22807-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22807-L22808) · [Before (L22807-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22807-L22808)

```diff
-     const pT = Number(null !== (WT = null !== (zT = LT[1]) && void 0 !== zT ? zT : LT[3]) && void 0 !== WT ? WT : 0),
-       BT = Number(null !== (MT = null !== (gT = LT[2]) && void 0 !== gT ? gT : LT[4]) && void 0 !== MT ? MT : 1),
+     const sB = Number(null !== (QB = null !== (nB = rB[1]) && void 0 !== nB ? nB : rB[3]) && void 0 !== QB ? QB : 0),
+       JB = Number(null !== (dB = null !== (IB = rB[2]) && void 0 !== IB ? IB : rB[4]) && void 0 !== dB ? dB : 1),
```

#### 2021. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22831-L22832` → after: `L22831-L22832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22831-L22832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22831-L22832) · [Before (L22831-L22832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22831-L22832)

```diff
-             zT = null !== (WT = mT.get(TT)) && void 0 !== WT ? WT : [];
-           mT.set(TT, zT.includes(gT) ? zT : [...zT, gT])
+             nB = null !== (QB = zB.get(BB)) && void 0 !== QB ? QB : [];
+           zB.set(BB, nB.includes(IB) ? nB : [...nB, IB])
```

#### 2022. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22838` → after: `L22838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22838) · [Before (L22838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22838)

```diff
-         for (const UT of (0, Bg.e)(TT, new RegExp(qP(gT), "gi"), (0, Bg.j)("\\w`"))) {
+         for (const jB of (0, GI.h)(BB, new RegExp(gA(IB), "gi"), (0, GI.k)("\\w`"))) {
```

#### 2023. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22856` → after: `L22856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22856) · [Before (L22856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22856)

```diff
-     const nT = null !== mT && void 0 !== mT ? mT : zT;
+     const NB = null !== zB && void 0 !== zB ? zB : nB;
```

#### 2024. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22875` → after: `L22875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22875) · [Before (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22875)

```diff
-           nT = new RegExp(`^${xP}`, "i").exec(gT)[0],
+           NB = new RegExp(`^${fA}`, "i").exec(IB)[0],
```

#### 2025. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22889` → after: `L22889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22889) · [Before (L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22889)

```diff
-         const kT = (0, Bg.e)(TT.slice(0, UT.start), QP, (0, Bg.j)("\\w."))[0];
+         const UB = (0, GI.h)(BB.slice(0, jB.start), XA, (0, GI.k)("\\w."))[0];
```

#### 2026. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22905` → after: `L22905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22905) · [Before (L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22905)

```diff
-           pT = lT || LT ? new RegExp(`^${JP}*`).exec(gT.slice(jT.length))[0] : null,
+           sB = pB || rB ? new RegExp(`^${qA}*`).exec(IB.slice(aB.length))[0] : null,
```

#### 2027. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22908` → after: `L22908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22908) · [Before (L22908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22908)

```diff
-         const ZT = null !== (WT = BT[1]) && void 0 !== WT ? WT : BT[2],
+         const mB = null !== (QB = JB[1]) && void 0 !== QB ? QB : JB[2],
```

#### 2028. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22911` → after: `L22911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22911) · [Before (L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22911)

```diff
-           fT = null !== (zT = null === (MT = XP.exec(TT.slice(cT + BT[0].length))) || void 0 === MT ? void 0 : MT[0]) && void 0 !== zT ? zT : "";
+           GB = null !== (nB = null === (dB = VA.exec(BB.slice(yB + JB[0].length))) || void 0 === dB ? void 0 : dB[0]) && void 0 !== nB ? nB : "";
```

#### 2029. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22935` → after: `L22935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22935) · [Before (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22935)

```diff
-       [jT] = (0, pg.I)(TT, HT.start, HT.end),
+       [aB] = (0, kI.J)(BB, uB.start, uB.end),
```

#### 2030. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22954` → after: `L22954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22954) · [Before (L22954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22954)

```diff
-   return (0, Bg.e)(TT, MV, nV)
+   return (0, GI.h)(BB, IT, uT)
```

#### 2031. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22966` → after: `L22966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22966) · [Before (L22966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22966)

```diff
-     zT = null !== (UT = null === (mT = /^[a-z_]+/i.exec(WT)) || void 0 === mT ? void 0 : mT[0].toLowerCase()) && void 0 !== UT ? UT : "";
+     nB = null !== (jB = null === (zB = /^[a-z_]+/i.exec(QB)) || void 0 === zB ? void 0 : zB[0].toLowerCase()) && void 0 !== jB ? jB : "";
```

#### 2032. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22971` → after: `L22971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22971) · [Before (L22971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22971)

```diff
-   return (0, Bg.e)(TT, UV, (0, Bg.j)("\\w.,:/-")).map((TT => Number(TT[1].replace(/,/g, ""))))
+   return (0, GI.h)(BB, zT, (0, GI.k)("\\w.,:/-")).map((BB => Number(BB[1].replace(/,/g, ""))))
```

#### 2033. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22979` → after: `L22979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22979) · [Before (L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22979)

```diff
-   for (const zT of (0, Bg.e)(TT, lV, Bg.o)) {
+   for (const nB of (0, GI.h)(BB, rT, GI.p)) {
```

#### 2034. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L22998` → after: `L22998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR22998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L22998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L22998) · [Before (L22998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L22998)

```diff
-   for (const ZT of (0, Bg.e)(TT, BV, Bg.o)) {
+   for (const mB of (0, GI.h)(BB, mT, GI.p)) {
```

#### 2035. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23000` → after: `L23000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23000) · [Before (L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23000)

```diff
-     const UT = Number(`${ZT[1].replace(/,/g,"")}${null!==(LT=ZT[2])&&void 0!==LT?LT:""}`);
+     const jB = Number(`${mB[1].replace(/,/g,"")}${null!==(rB=mB[2])&&void 0!==rB?rB:""}`);
```

#### 2036. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23004` → after: `L23004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23004) · [Before (L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23004)

```diff
-         WT = null !== (pT = lT.get(UT)) && void 0 !== pT ? pT : new Set;
+         QB = null !== (sB = pB.get(jB)) && void 0 !== sB ? sB : new Set;
```

#### 2037. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23016` → after: `L23016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23016) · [Before (L23016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23016)

```diff
-         vV(kT.has(zT) ? UT : nT ? mT : WT, cV(TT))
+         GT(UB.has(nB) ? jB : NB ? zB : QB, kT(BB))
```

#### 2038. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23023` → after: `L23023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23023) · [Before (L23023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23023)

```diff
-     for (const zT of (0, Bg.v)(ZT, /\s+(?=[A-Z])/g, (0, Bg.p)(".;"))) mV.test(zT) ? lT = !0 : WV.test(zT) && (lT = !1, nT = !0), lT ? (vV(UT, cV(zT.replace(zV, " "))), vV(mT, [...zT.matchAll(zV)].flatMap((TT => cV(TT[0]))))) : (vV(UT, HV(zT).flatMap((TT => cV(TT[1])))), vV(nT ? m … [truncated]
+     for (const nB of (0, GI.x)(mB, /\s+(?=[A-Z])/g, (0, GI.s)(".;"))) QT.test(nB) ? pB = !0 : nT.test(nB) && (pB = !1, NB = !0), pB ? (GT(jB, kT(nB.replace(dT, " "))), GT(zB, [...nB.matchAll(dT)].flatMap((BB => kT(BB[0]))))) : (GT(jB, UT(nB).flatMap((BB => kT(BB[1])))), GT(NB ? z … [truncated]
```

#### 2039. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23069` → after: `L23069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23069) · [Before (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23069)

```diff
-     jT = 1 === (null !== (MT = TT.match(/\u2192/g)) && void 0 !== MT ? MT : []).length ? aV.exec(TT) : null,
+     aB = 1 === (null !== (dB = BB.match(/\u2192/g)) && void 0 !== dB ? dB : []).length ? FT.exec(BB) : null,
```

#### 2040. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23072` → after: `L23072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23072) · [Before (L23072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23072)

```diff
-       return null !== (TT = null !== (UT = null === (mT = tV.exec(kT)) || void 0 === mT || null === (WT = mT[1]) || void 0 === WT ? void 0 : WT.trim()) && void 0 !== UT ? UT : null === jT || void 0 === jT || null === (zT = jT[1]) || void 0 === zT ? void 0 : zT.trim()) && void 0 ! … [truncated]
+       return null !== (BB = null !== (jB = null === (zB = DT.exec(UB)) || void 0 === zB || null === (QB = zB[1]) || void 0 === QB ? void 0 : QB.trim()) && void 0 !== jB ? jB : null === aB || void 0 === aB || null === (nB = aB[1]) || void 0 === nB ? void 0 : nB.trim()) && void 0 ! … [truncated]
```

#### 2041. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23085` → after: `L23085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23085) · [Before (L23085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23085)

```diff
-     const TT = null !== (pT = null === (BT = [...gT.matchAll(eV)].at(-1)) || void 0 === BT || null === (ZT = BT[1]) || void 0 === ZT ? void 0 : ZT.trim()) && void 0 !== pT ? pT : null;
+     const BB = null !== (sB = null === (JB = [...IB.matchAll(ET)].at(-1)) || void 0 === JB || null === (mB = JB[1]) || void 0 === mB ? void 0 : mB.trim()) && void 0 !== sB ? sB : null;
```

#### 2042. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23100` → after: `L23100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23100) · [Before (L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23100)

```diff
-       from: null !== (vT = null === jT || void 0 === jT || null === (fT = jT[1]) || void 0 === fT ? void 0 : fT.trim()) && void 0 !== vT ? vT : null,
+       from: null !== (kB = null === aB || void 0 === aB || null === (GB = aB[1]) || void 0 === GB ? void 0 : GB.trim()) && void 0 !== kB ? kB : null,
```

#### 2043. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23117` → after: `L23117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23117) · [Before (L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23117)

```diff
-     const TT = null !== (bT = null !== (OT = null === (eT = iT[2]) || void 0 === eT ? void 0 : eT.trim()) && void 0 !== OT ? OT : null === (YT = [...gT.matchAll(eV)].at(-1)) || void 0 === YT || null === (JT = YT[1]) || void 0 === JT ? void 0 : JT.trim()) && void 0 !== bT ? bT : n … [truncated]
+     const BB = null !== (tB = null !== (SB = null === (MB = gB[2]) || void 0 === MB ? void 0 : MB.trim()) && void 0 !== SB ? SB : null === (EB = [...IB.matchAll(ET)].at(-1)) || void 0 === EB || null === (iB = EB[1]) || void 0 === iB ? void 0 : iB.trim()) && void 0 !== tB ? tB : n … [truncated]
```

#### 2044. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23155` → after: `L23155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23155) · [Before (L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23155)

```diff
-       for (const TT of (0, Bg.e)(HT, iV, Bg.o)) {
+       for (const BB of (0, GI.h)(uB, tT, GI.p)) {
```

#### 2045. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23157` → after: `L23157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23157) · [Before (L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23157)

```diff
-         const MT = HT.startsWith("|") && null !== (gT = zT[HT.slice(0, TT.index).split("|").length - 1]) && void 0 !== gT ? gT : "",
+         const dB = uB.startsWith("|") && null !== (IB = nB[uB.slice(0, BB.index).split("|").length - 1]) && void 0 !== IB ? IB : "",
```

#### 2046. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23160` → after: `L23160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23160) · [Before (L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23160)

```diff
-         if (UT.set(jT, [...null !== (nT = UT.get(jT)) && void 0 !== nT ? nT : [], kT]), "players" === kT.noun && null !== kT.step)
+         if (jB.set(aB, [...null !== (NB = jB.get(aB)) && void 0 !== NB ? NB : [], UB]), "players" === UB.noun && null !== UB.step)
```

#### 2047. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23176-L23178` → after: `L23176-L23178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23176-L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23176-L23178) · [Before (L23176-L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23176-L23178)

```diff
-   KV = new RegExp(`^(\\s+of\\s+)(${rV})(players|people)\\b(?!['\u2019])`, "i"),
-   SV = new RegExp(`^(\\s+of\\s+)(${rV})(sessions|plays)\\b(?!['\u2019])`, "i"),
-   GV = new RegExp(`^(\\s+)(${rV})(players|people|kids)\\b(?!['\u2019])`, "i"),
+   wT = new RegExp(`^(\\s+of\\s+)(${lT})(players|people)\\b(?!['\u2019])`, "i"),
+   xT = new RegExp(`^(\\s+of\\s+)(${lT})(sessions|plays)\\b(?!['\u2019])`, "i"),
+   KT = new RegExp(`^(\\s+)(${lT})(players|people|kids)\\b(?!['\u2019])`, "i"),
```

#### 2048. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23184-L23186` → after: `L23184-L23186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23184-L23186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23184-L23186) · [Before (L23184-L23186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23184-L23186)

```diff
-     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stay|play)${NV}`, "i"), "last", "stayed"],
-     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stayed|played)${NV}`, "i"), "lasted", "stayed"],
-     [new RegExp(`^(\\s+)(?:staying|playing|continuing to play)${NV}`, "i"), "lasting", "stayed"],
+     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stay|play)${CT}`, "i"), "last", "stayed"],
+     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stayed|played)${CT}`, "i"), "lasted", "stayed"],
+     [new RegExp(`^(\\s+)(?:staying|playing|continuing to play)${CT}`, "i"), "lasting", "stayed"],
```

#### 2049. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23201-L23215` → after: `L23201-L23215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23201-L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23201-L23215) · [Before (L23201-L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23201-L23215)

```diff
-   return `${TT.split(/[\s:]+/).filter((TT=>""!==TT)).map(pg.j).join("[`:\\s]+")}(?![\\w])`}function mu(TT,UT,mT){return(0,Bg.e)(TT,new RegExp(Uu(UT),mT),(0,Bg.j)("\\w"))}function Wu(TT,UT){return mu(TT,UT,"i").length>0}function zu(TT,UT){const mT=mu(UT,TT,"gi"),WT=mT.find((TT=>!( … [truncated]
-   "===UT[TT.index-1]&&"
-   `"===UT[TT.index+TT[0].length])(TT)));if(void 0!==WT)return WT[0];if(void 0!==mT[0])return`\
-   `${mT[0][0]}\``;
-   const zT = /^(.+?):\s*(\d+)$/.exec(TT);
-   return null === zT ? `\`${TT}\`` : `${zT[1]} ${zT[2]}`
- }
- 
- function Mu(TT, UT) {
-   var mT, WT;
-   const zT = 10 ** (null !== (mT = null === (WT = UT.split(".")[1]) || void 0 === WT ? void 0 : WT.length) && void 0 !== mT ? mT : 0),
-     MT = Math.round(Number(UT) * zT);
-   return [...TT.shares].flatMap((TT => {
-     let [UT, mT] = TT;
-     return Math.round(UT * zT) === MT ? mT : []
+   return `${BB.split(/[\s:]+/).filter((BB=>""!==BB)).map(kI.e).join("[`:\\s]+")}(?![\\w])`}function QP(BB,jB,zB){return(0,GI.h)(BB,new RegExp(zP(jB),zB),(0,GI.k)("\\w"))}function nP(BB,jB){return QP(BB,jB,"i").length>0}function dP(BB,jB){const zB=QP(jB,BB,"gi"),QB=zB.find((BB=>!( … [truncated]
+   "===jB[BB.index-1]&&"
+   `"===jB[BB.index+BB[0].length])(BB)));if(void 0!==QB)return QB[0];if(void 0!==zB[0])return`\
+   `${zB[0][0]}\``;
+   const nB = /^(.+?):\s*(\d+)$/.exec(BB);
+   return null === nB ? `\`${BB}\`` : `${nB[1]} ${nB[2]}`
+ }
+ 
+ function IP(BB, jB) {
+   var zB, QB;
+   const nB = 10 ** (null !== (zB = null === (QB = jB.split(".")[1]) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0),
+     dB = Math.round(Number(jB) * nB);
+   return [...BB.shares].flatMap((BB => {
+     let [jB, zB] = BB;
+     return Math.round(jB * nB) === dB ? zB : []
```

#### 2050. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23219-L23221` → after: `L23219-L23221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23219-L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23219-L23221) · [Before (L23219-L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23219-L23221)

```diff
- function gu(TT) {
-   const UT = new Set(TT.map((TT => TT.noun)));
-   return 1 === UT.size ? [...UT][0] : null
+ function NP(BB) {
+   const jB = new Set(BB.map((BB => BB.noun)));
+   return 1 === jB.size ? [...jB][0] : null
```

#### 2051. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23224-L23225` → after: `L23224-L23225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23224-L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23224-L23225) · [Before (L23224-L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23224-L23225)

```diff
- function nu(TT) {
-   return TT.toLowerCase().replace(/[`:]/g, " ").replace(/\s+/g, " ").trim()
+ function uP(BB) {
+   return BB.toLowerCase().replace(/[`:]/g, " ").replace(/\s+/g, " ").trim()
```

#### 2052. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23228-L23235` → after: `L23228-L23235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23228-L23235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23228-L23235) · [Before (L23228-L23235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23228-L23235)

```diff
- function Hu(TT) {
-   var UT;
-   const mT = TT.flatMap((TT => "players" === TT.noun && null !== TT.step ? [TT.step] : [])),
-     WT = mT[0];
-   if (void 0 === WT || mT.length < TT.length) return null;
-   const zT = TT => new Set(mT.flatMap((UT => {
-       const mT = TT(UT);
-       return null === mT ? [] : [nu(mT)]
+ function UP(BB) {
+   var jB;
+   const zB = BB.flatMap((BB => "players" === BB.noun && null !== BB.step ? [BB.step] : [])),
+     QB = zB[0];
+   if (void 0 === QB || zB.length < BB.length) return null;
+   const nB = BB => new Set(zB.flatMap((jB => {
+       const zB = BB(jB);
+       return null === zB ? [] : [uP(zB)]
```

#### 2053. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23237-L23241` → after: `L23237-L23241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23237-L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23237-L23241) · [Before (L23237-L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23237-L23241)

```diff
-     MT = null === (UT = mT.find((TT => null !== TT.from))) || void 0 === UT ? void 0 : UT.from;
-   return mT.every((TT => TT.isLost === WT.isLost && null !== TT.to)) && 1 === zT((TT => TT.to)).size && zT((TT => TT.from)).size <= 1 ? {
-     from: null !== MT && void 0 !== MT ? MT : null,
-     to: WT.to,
-     isLost: WT.isLost
+     dB = null === (jB = zB.find((BB => null !== BB.from))) || void 0 === jB ? void 0 : jB.from;
+   return zB.every((BB => BB.isLost === QB.isLost && null !== BB.to)) && 1 === nB((BB => BB.to)).size && nB((BB => BB.from)).size <= 1 ? {
+     from: null !== dB && void 0 !== dB ? dB : null,
+     to: QB.to,
+     isLost: QB.isLost
```

#### 2054. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23245-L23249` → after: `L23245-L23249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23245-L23249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23245-L23249) · [Before (L23245-L23249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23245-L23249)

```diff
- function ku(TT, UT) {
-   const mT = TT.filter((TT => "players" === TT.noun && null !== TT.step && [TT.step.from, TT.step.to].some((TT => null !== TT && Wu(UT, TT)))));
-   if (mT.length > 0) return TT.filter((TT => "players" === TT.noun && null !== TT.step && mT.some((UT => {
-     var mT, WT;
-     return "players" === UT.noun && nu(null !== (mT = UT.step.to) && void 0 !== mT ? mT : "") === nu(null !== (WT = TT.step.to) && void 0 !== WT ? WT : "")
+ function aP(BB, jB) {
+   const zB = BB.filter((BB => "players" === BB.noun && null !== BB.step && [BB.step.from, BB.step.to].some((BB => null !== BB && nP(jB, BB)))));
+   if (zB.length > 0) return BB.filter((BB => "players" === BB.noun && null !== BB.step && zB.some((jB => {
+     var zB, QB;
+     return "players" === jB.noun && uP(null !== (zB = jB.step.to) && void 0 !== zB ? zB : "") === uP(null !== (QB = BB.step.to) && void 0 !== QB ? QB : "")
```

#### 2055. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23251-L23253` → after: `L23251-L23253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23251-L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23251-L23253) · [Before (L23251-L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23251-L23253)

```diff
-   if (/\b(?:minutes?|min|seconds?)\b/i.test(UT)) {
-     const UT = TT.filter((TT => "sessions" === TT.noun));
-     return UT.length > 0 ? UT : TT
+   if (/\b(?:minutes?|min|seconds?)\b/i.test(jB)) {
+     const jB = BB.filter((BB => "sessions" === BB.noun));
+     return jB.length > 0 ? jB : BB
```

#### 2056. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23255` → after: `L23255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23255) · [Before (L23255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23255)

```diff
-   return TT
+   return BB
```

#### 2057. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23258-L23259` → after: `L23258-L23259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23258-L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23258-L23259) · [Before (L23258-L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23258-L23259)

```diff
- function ju(TT) {
-   return [...TT.matchAll(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g)].map((TT => [TT.index, TT.index + TT[0].length]))
+ function pP(BB) {
+   return [...BB.matchAll(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g)].map((BB => [BB.index, BB.index + BB[0].length]))
```

#### 2058. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23262-L23265` → after: `L23262-L23265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23262-L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23262-L23265) · [Before (L23262-L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23262-L23265)

```diff
- function lu(TT, UT, mT) {
-   return mT.every((mT => {
-     let [WT, zT] = mT;
-     return zT <= TT || WT >= UT || TT <= WT && zT <= UT
+ function rP(BB, jB, zB) {
+   return zB.every((zB => {
+     let [QB, nB] = zB;
+     return nB <= BB || QB >= jB || BB <= QB && nB <= jB
```

#### 2059. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23269-L23270` → after: `L23269-L23270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23269-L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23269-L23270) · [Before (L23269-L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23269-L23270)

```diff
- function Lu(TT, UT) {
-   return /^[A-Z]/.test(UT) ? TT.charAt(0).toUpperCase() + TT.slice(1) : TT
+ function sP(BB, jB) {
+   return /^[A-Z]/.test(jB) ? BB.charAt(0).toUpperCase() + BB.slice(1) : BB
```

#### 2060. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23273-L23280` → after: `L23273-L23280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23273-L23280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23273-L23280) · [Before (L23273-L23280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23273-L23280)

```diff
- function pu(TT, UT) {
-   let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-   const WT = ju(TT);
-   return (0, Bg.e)(TT, mT ? CV : uV, Bg.o).flatMap((zT => {
-     const MT = zT.index + zT[0].length;
-     if (!WT.every((TT => {
-         let [UT, mT] = TT;
-         return mT <= zT.index || UT >= MT
+ function JP(BB, jB) {
+   let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+   const QB = pP(BB);
+   return (0, GI.h)(BB, zB ? eT : WT, GI.p).flatMap((nB => {
+     const dB = nB.index + nB[0].length;
+     if (!QB.every((BB => {
+         let [jB, zB] = BB;
+         return zB <= nB.index || jB >= dB
```

#### 2061. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23282-L23285` → after: `L23282-L23285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23282-L23285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23282-L23285) · [Before (L23282-L23285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23282-L23285)

```diff
-     const [gT, nT] = (0, pg.I)(TT, zT.index), HT = TT.slice(gT, nT), kT = /[,;:](?=\s)|[.!?](?!\d)/.exec(TT.slice(MT, nT)), jT = TT.slice(Math.max(gT, zT.index - 60), null === kT ? nT : MT + kT.index), lT = mT ? function(TT, UT, mT) {
-       return "100" === mT ? Mu(TT, UT) : [...TT.shares].flatMap((TT => {
-         let [mT, WT] = TT;
-         return Math.round(mT / 10) === Number(UT) ? WT : []
+     const [IB, NB] = (0, kI.J)(BB, nB.index), uB = BB.slice(IB, NB), UB = /[,;:](?=\s)|[.!?](?!\d)/.exec(BB.slice(dB, NB)), aB = BB.slice(Math.max(IB, nB.index - 60), null === UB ? NB : dB + UB.index), pB = zB ? function(BB, jB, zB) {
+       return "100" === zB ? IP(BB, jB) : [...BB.shares].flatMap((BB => {
+         let [zB, QB] = BB;
+         return Math.round(zB / 10) === Number(jB) ? QB : []
```

#### 2062. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23287` → after: `L23287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23287) · [Before (L23287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23287)

```diff
-     }(UT.facts, zT[1], zT[2]) : Mu(UT.facts, zT[1]);
+     }(jB.facts, nB[1], nB[2]) : IP(jB.facts, nB[1]);
```

#### 2063. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23289-L23294` → after: `L23289-L23294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23289-L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23289-L23294) · [Before (L23289-L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23289-L23294)

```diff
-       start: zT.index,
-       end: MT,
-       facts: ku(lT, HT),
-       sentence: HT,
-       before: TT.slice(gT, zT.index),
-       clause: jT
+       start: nB.index,
+       end: dB,
+       facts: aP(pB, uB),
+       sentence: uB,
+       before: BB.slice(IB, nB.index),
+       clause: aB
```

#### 2064. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23299-L23300` → after: `L23299-L23300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23299-L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23299-L23300) · [Before (L23299-L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23299-L23300)

```diff
- function Bu(TT, UT, mT, WT) {
-   var zT, MT, gT;
+ function mP(BB, jB, zB, QB) {
+   var nB, dB, IB;
```

#### 2065. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23302-L23319` → after: `L23302-L23319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23302-L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23302-L23319) · [Before (L23302-L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23302-L23319)

```diff
-     start: nT,
-     end: HT,
-     facts: kT,
-     before: jT,
-     clause: lT
-   } = UT;
-   const LT = gu(kT),
-     pT = TT.slice(HT),
-     BT = "sessions" === LT ? (WT ? GV : KV).exec(pT) : "players" !== LT || WT ? null : SV.exec(pT),
-     ZT = null === BT && "sessions" === LT && /^(?:players|people|kids)$/i.test(null !== (zT = null === (MT = hV.exec(jT)) || void 0 === MT ? void 0 : MT[1]) && void 0 !== zT ? zT : "");
-   if (null === BT && !ZT || null === LT) return [];
-   const cT = null !== BT && void 0 !== BT ? BT : ["", WT ? " " : " of ", ""],
-     vT = /\ball\b/i.test(cT[2]) ? "all " : "",
-     fT = `${cT[1]}${vT}${"sessions"===LT?mT.sessionsWord:LT}`;
-   if ("players" === LT) return [{
-     start: HT,
- ... (2 more removed lines; see GitHub link above)
+     start: NB,
+     end: uB,
+     facts: UB,
+     before: aB,
+     clause: pB
+   } = jB;
+   const rB = NP(UB),
+     sB = BB.slice(uB),
+     JB = "sessions" === rB ? (QB ? KT : wT).exec(sB) : "players" !== rB || QB ? null : xT.exec(sB),
+     mB = null === JB && "sessions" === rB && /^(?:players|people|kids)$/i.test(null !== (nB = null === (dB = bT.exec(aB)) || void 0 === dB ? void 0 : dB[1]) && void 0 !== nB ? nB : "");
+   if (null === JB && !mB || null === rB) return [];
+   const yB = null !== JB && void 0 !== JB ? JB : ["", QB ? " " : " of ", ""],
+     kB = /\ball\b/i.test(yB[2]) ? "all " : "",
+     GB = `${yB[1]}${kB}${"sessions"===rB?zB.sessionsWord:rB}`;
+   if ("players" === rB) return [{
+     start: uB,
+ ... (2 more added lines; see GitHub link above)
```

#### 2066. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23322-L23326` → after: `L23322-L23326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23322-L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23322-L23326) · [Before (L23322-L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23322-L23326)

```diff
-   const qT = Tu.test(lT) || mT.facts.stepNames.some((TT => Wu(lT, TT))) || /^\s*\([^)]*\bplayers\b/i.test(pT.slice(cT[0].length)),
-     iT = pT.slice(cT[0].length),
-     bT = EV.find((TT => {
-       let [UT] = TT;
-       return UT.test(iT)
+   const LB = jP.test(pB) || zB.facts.stepNames.some((BB => nP(pB, BB))) || /^\s*\([^)]*\bplayers\b/i.test(sB.slice(yB[0].length)),
+     gB = sB.slice(yB[0].length),
+     tB = cT.find((BB => {
+       let [jB] = BB;
+       return jB.test(gB)
```

#### 2067. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23328-L23337` → after: `L23328-L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23328-L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23328-L23337) · [Before (L23328-L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23328-L23337)

```diff
-   if (qT || void 0 === bT && (ZT || /^\s+who\b/i.test(iT))) return [];
-   const OT = TT.slice(0, nT),
-     eT = null !== (gT = null === bT || void 0 === bT ? void 0 : bT[2]) && void 0 !== gT ? gT : DV.test(OT) ? "stayed" : oV.test(OT) ? "left" : null;
-   if (WT && null === eT) return [];
-   const YT = kT.map((TT => "sessions" === TT.noun ? TT.side : null));
-   if (!(null === eT || YT.includes(eT) && YT.every((TT => null === TT || TT === eT)))) return [];
-   if (void 0 === bT) return [{
-     start: HT,
-     end: HT + cT[0].length,
-     text: fT,
+   if (LB || void 0 === tB && (mB || /^\s+who\b/i.test(gB))) return [];
+   const SB = BB.slice(0, NB),
+     MB = null !== (IB = null === tB || void 0 === tB ? void 0 : tB[2]) && void 0 !== IB ? IB : vT.test(SB) ? "stayed" : RT.test(SB) ? "left" : null;
+   if (QB && null === MB) return [];
+   const EB = UB.map((BB => "sessions" === BB.noun ? BB.side : null));
+   if (!(null === MB || EB.includes(MB) && EB.every((BB => null === BB || BB === MB)))) return [];
+   if (void 0 === tB) return [{
+     start: uB,
+     end: uB + yB[0].length,
+     text: GB,
```

#### 2068. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23340` → after: `L23340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23340) · [Before (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23340)

```diff
-   const [JT, xT] = bT, dT = JT.exec(iT);
+   const [iB, qB] = tB, fB = iB.exec(gB);
```

#### 2069. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23342-L23344` → after: `L23342-L23344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23342-L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23342-L23344) · [Before (L23342-L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23342-L23344)

```diff
-     start: HT,
-     end: HT + cT[0].length + dT[0].length,
-     text: `${fT}${dT[1]}${/\bwho\b/i.test(dT[0])?"that ":""}${xT}`,
+     start: uB,
+     end: uB + yB[0].length + fB[0].length,
+     text: `${GB}${fB[1]}${/\bwho\b/i.test(fB[0])?"that ":""}${qB}`,
```

#### 2070. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23349-L23352` → after: `L23349-L23352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23349-L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23349-L23352) · [Before (L23349-L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23349-L23352)

```diff
- function Zu(TT) {
-   var UT;
-   const mT = /^(\d[\d,]*)(\.\d+)?([kK])?$/.exec(TT);
-   return null === mT || void 0 !== mT[2] && void 0 === mT[3] ? null : Math.round(Number(`${mT[1].replace(/,/g,"")}${null!==(UT=mT[2])&&void 0!==UT?UT:""}`) * (void 0 === mT[3] ? 1 : 1e3))
+ function yP(BB) {
+   var jB;
+   const zB = /^(\d[\d,]*)(\.\d+)?([kK])?$/.exec(BB);
+   return null === zB || void 0 !== zB[2] && void 0 === zB[3] ? null : Math.round(Number(`${zB[1].replace(/,/g,"")}${null!==(jB=zB[2])&&void 0!==jB?jB:""}`) * (void 0 === zB[3] ? 1 : 1e3))
```

#### 2071. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23354-L23359` → after: `L23354-L23359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23354-L23359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23354-L23359) · [Before (L23354-L23359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23354-L23359)

```diff
- const cu = /\b(?:all[- ]time|ever|total|in total|since logging|altogether|so far)\b/i,
-   vu = /\b(?:(?:this|a|per|past|last|that|each|every)\s+(?:week|7 days)|weekly)\b/i,
-   fu = /\b(?:(?:this|per|past|last|each|every)\s+(?:day|month|\d+\s+days?)|today|yesterday|daily|monthly)\b/i,
-   qu = /^\s*(?:seconds?|secs?|s\b|minutes?|mins?|hours?|days?|blocks?|coins?|gold|hp|damage|times|x\b|y\b|z\b)/i,
-   iu = /\b[xyz]\s*[:=]?\s*-?$/i,
-   bu = /^\s+(?:of\s+(?:your|the|all|these|those|my)\s+)?(?:[A-Za-z_]+\s+)?(?:players?|people|kids|deaths?|kills?)\b/i;
+ const kP = /\b(?:all[- ]time|ever|total|in total|since logging|altogether|so far)\b/i,
+   GP = /\b(?:(?:this|a|per|past|last|that|each|every)\s+(?:week|7 days)|weekly)\b/i,
+   LP = /\b(?:(?:this|per|past|last|each|every)\s+(?:day|month|\d+\s+days?)|today|yesterday|daily|monthly)\b/i,
+   gP = /^\s*(?:seconds?|secs?|s\b|minutes?|mins?|hours?|days?|blocks?|coins?|gold|hp|damage|times|x\b|y\b|z\b)/i,
+   tP = /\b[xyz]\s*[:=]?\s*-?$/i,
+   SP = /^\s+(?:of\s+(?:your|the|all|these|those|my)\s+)?(?:[A-Za-z_]+\s+)?(?:players?|people|kids|deaths?|kills?)\b/i;
```

#### 2072. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23361-L23364` → after: `L23361-L23364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23361-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23361-L23364) · [Before (L23361-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23361-L23364)

```diff
- function Ou(TT, UT, mT) {
-   var WT;
-   const zT = bu.exec(TT.slice(UT)),
-     MT = UT + (null !== (WT = null === zT || void 0 === zT ? void 0 : zT[0].length) && void 0 !== WT ? WT : 0);
+ function MP(BB, jB, zB) {
+   var QB;
+   const nB = SP.exec(BB.slice(jB)),
+     dB = jB + (null !== (QB = null === nB || void 0 === nB ? void 0 : nB[0].length) && void 0 !== QB ? QB : 0);
```

#### 2073. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23366-L23368` → after: `L23366-L23368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23366-L23368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23366-L23368) · [Before (L23366-L23368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23366-L23368)

```diff
-     start: MT,
-     end: MT,
-     text: ")" === TT[MT] ? `, ${mT}` : ` (${mT})`,
+     start: dB,
+     end: dB,
+     text: ")" === BB[dB] ? `, ${zB}` : ` (${zB})`,
```

#### 2074. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23372-L23373` → after: `L23372-L23373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23372-L23373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23372-L23373) · [Before (L23372-L23373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23372-L23373)

```diff
- const eu = /(?:->|\u2192|=>|\bto|\bfrom|\bby|\babout|\baround|\broughly|\bnearly|\balmost|\bover|\bunder|~)[\s*_]*$/i,
-   Yu = /^[\s*_]*(?:->|\u2192|=>|more\b|extra\b|fewer\b|additional\b|less\b)/i;
+ const EP = /(?:->|\u2192|=>|\bto|\bfrom|\bby|\babout|\baround|\broughly|\bnearly|\balmost|\bover|\bunder|~)[\s*_]*$/i,
+   iP = /^[\s*_]*(?:->|\u2192|=>|more\b|extra\b|fewer\b|additional\b|less\b)/i;
```

#### 2075. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23375-L23376` → after: `L23375-L23376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23375-L23376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23375-L23376) · [Before (L23375-L23376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23375-L23376)

```diff
- function Ju(TT, UT) {
-   return UT ? String(TT) : TT.toLocaleString("en-US")
+ function qP(BB, jB) {
+   return jB ? String(BB) : BB.toLocaleString("en-US")
```

#### 2076. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23378` → after: `L23378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23378) · [Before (L23378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23378)

```diff
- const xu = {
+ const fP = {
```

#### 2077. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23388-L23392` → after: `L23388-L23392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23388-L23392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23388-L23392) · [Before (L23388-L23392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23388-L23392)

```diff
-   du = /\b(return|returns|returned|returning|come back|comes back|came back|coming back)(?:\s+to\s+play)?\s+((?:about|around|nearly)\s+)?$/i,
-   wu = /^(\s+)(?:returns|return visits|comebacks)(?=\s+(?:per|a|each|for each)\s+(?:player|person)\b)/i,
-   tu = /^(\s+more\s+)(?:players|people)\s+(?:come back|return)\b/i;
- const au = [function(TT, UT) {
-   return Yy(TT, UT.goodStages).flatMap((mT => {
+   oP = /\b(return|returns|returned|returning|come back|comes back|came back|coming back)(?:\s+to\s+play)?\s+((?:about|around|nearly)\s+)?$/i,
+   HP = /^(\s+)(?:returns|return visits|comebacks)(?=\s+(?:per|a|each|for each)\s+(?:player|person)\b)/i,
+   DP = /^(\s+more\s+)(?:players|people)\s+(?:come back|return)\b/i;
+ const FP = [function(BB, jB) {
+   return fF(BB, jB.goodStages).flatMap((zB => {
```

#### 2078. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23394-L23402` → after: `L23394-L23402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23394-L23402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23394-L23402) · [Before (L23394-L23402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23394-L23402)

```diff
-       start: WT,
-       end: zT
-     } = mT;
-     const MT = TT.slice(WT, zT),
-       gT = /^(?:many|a\s+lot\s+of|lots\s+of)\b/i.exec(MT);
-     if (null !== gT) return [{
-       start: WT,
-       end: WT + gT[0].length,
-       text: Lu("some", MT),
+       start: QB,
+       end: nB
+     } = zB;
+     const dB = BB.slice(QB, nB),
+       IB = /^(?:many|a\s+lot\s+of|lots\s+of)\b/i.exec(dB);
+     if (null !== IB) return [{
+       start: QB,
+       end: QB + IB[0].length,
+       text: sP("some", dB),
```

#### 2079. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23405-L23413` → after: `L23405-L23413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23405-L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23405-L23413) · [Before (L23405-L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23405-L23413)

```diff
-     const nT = /^(?:the\s+)?(?:most|majority)(\s+of)?(.*)$/is.exec(MT);
-     if (null === nT) return [];
-     const HT = nT[2],
-       kT = /^\s*\(\s*(\d+(?:\.\d+)?)%\s*\)/.exec(TT.slice(zT));
-     if (null !== kT && "sessions" === gu(Mu(UT.facts, kT[1])) && function(TT, UT, mT, WT, zT) {
-         const MT = TT.slice(mT),
-           gT = EV.find((TT => {
-             let [UT] = TT;
-             return UT.test(MT)
+     const NB = /^(?:the\s+)?(?:most|majority)(\s+of)?(.*)$/is.exec(dB);
+     if (null === NB) return [];
+     const uB = NB[2],
+       UB = /^\s*\(\s*(\d+(?:\.\d+)?)%\s*\)/.exec(BB.slice(nB));
+     if (null !== UB && "sessions" === NP(IP(jB.facts, UB[1])) && function(BB, jB, zB, QB, nB) {
+         const dB = BB.slice(zB),
+           IB = cT.find((BB => {
+             let [jB] = BB;
+             return jB.test(dB)
```

#### 2080. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23415-L23426` → after: `L23415-L23426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23415-L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23415-L23426) · [Before (L23415-L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23415-L23426)

```diff
-           nT = /[,;:](?=\s)|[.!?](?!\d)/.exec(MT),
-           HT = MT.slice(0, null === nT ? MT.length : nT.index),
-           kT = Tu.test(HT) || zT.facts.stepNames.some((TT => Wu(HT, TT))),
-           jT = Mu(zT.facts, WT).map((TT => "sessions" === TT.noun ? TT.side : null));
-         if (void 0 === gT || kT || !jT.every((TT => null === TT || TT === gT[2]))) return !1;
-         const lT = `${TT.slice(0,UT)}${WT}% of players${TT.slice(mT)}`,
-           LT = pu(lT, zT).find((TT => TT.start === UT));
-         return void 0 !== LT && Bu(lT, LT, zT, !1).length > 0
-       }(TT, WT, zT + kT[0].length, kT[1], UT)) return [{
-       start: WT,
-       end: zT + kT[0].length,
-       text: `${kT[1]}% of players`,
+           NB = /[,;:](?=\s)|[.!?](?!\d)/.exec(dB),
+           uB = dB.slice(0, null === NB ? dB.length : NB.index),
+           UB = jP.test(uB) || nB.facts.stepNames.some((BB => nP(uB, BB))),
+           aB = IP(nB.facts, QB).map((BB => "sessions" === BB.noun ? BB.side : null));
+         if (void 0 === IB || UB || !aB.every((BB => null === BB || BB === IB[2]))) return !1;
+         const pB = `${BB.slice(0,jB)}${QB}% of players${BB.slice(zB)}`,
+           rB = JP(pB, nB).find((BB => BB.start === jB));
+         return void 0 !== rB && mP(pB, rB, nB, !1).length > 0
+       }(BB, QB, nB + UB[0].length, UB[1], jB)) return [{
+       start: QB,
+       end: nB + UB[0].length,
+       text: `${UB[1]}% of players`,
```

#### 2081. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23429-L23433` → after: `L23429-L23433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23429-L23433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23429-L23433) · [Before (L23429-L23433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23429-L23433)

```diff
-     const jT = (0, Bg.e)(function(TT, UT) {
-         return TT.slice(...(0, pg.I)(TT, UT))
-       }(TT, WT), uV, Bg.o).map((TT => Number(TT[1]))),
-       lT = null === kT ? Math.max(...jT) : Number(kT[1]),
-       LT = /^\s+(?:your|the|all|these|those|my|them)\b/i.test(HT);
+     const aB = (0, GI.h)(function(BB, jB) {
+         return BB.slice(...(0, kI.J)(BB, jB))
+       }(BB, QB), WT, GI.p).map((BB => Number(BB[1]))),
+       pB = null === UB ? Math.max(...aB) : Number(UB[1]),
+       rB = /^\s+(?:your|the|all|these|those|my|them)\b/i.test(uB);
```

#### 2082. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23435-L23437` → after: `L23435-L23437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23435-L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23435-L23437) · [Before (L23435-L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23435-L23437)

```diff
-       start: WT,
-       end: zT,
-       text: Lu((lT >= 45 ? "nearly half of" : lT >= 30 ? LT ? "many of" : "many" : LT ? "some of" : "some") + HT, MT),
+       start: QB,
+       end: nB,
+       text: sP((pB >= 45 ? "nearly half of" : pB >= 30 ? rB ? "many of" : "many" : rB ? "some of" : "some") + uB, dB),
```

#### 2083. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23441-L23448` → after: `L23441-L23448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23441-L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23441-L23448) · [Before (L23441-L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23441-L23448)

```diff
- }, function(TT, UT) {
-   const mT = [...UT.facts.shares].flatMap((TT => {
-     let [UT, mT] = TT;
-     return mT.flatMap((TT => {
-       if ("players" !== TT.noun || null === TT.step) return [];
-       const mT = [TT.step.from, TT.step.to].flatMap((TT => {
-         const UT = null === TT || void 0 === TT ? void 0 : TT.split(": ")[1];
-         return null === TT ? [] : void 0 !== UT && /^[a-z_]{4,}$/i.test(UT) ? [TT, UT] : [TT]
+ }, function(BB, jB) {
+   const zB = [...jB.facts.shares].flatMap((BB => {
+     let [jB, zB] = BB;
+     return zB.flatMap((BB => {
+       if ("players" !== BB.noun || null === BB.step) return [];
+       const zB = [BB.step.from, BB.step.to].flatMap((BB => {
+         const jB = null === BB || void 0 === BB ? void 0 : BB.split(": ")[1];
+         return null === BB ? [] : void 0 !== jB && /^[a-z_]{4,}$/i.test(jB) ? [BB, jB] : [BB]
```

#### 2084. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23451-L23452` → after: `L23451-L23452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23451-L23452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23451-L23452) · [Before (L23451-L23452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23451-L23452)

```diff
-         value: UT,
-         names: mT
+         value: jB,
+         names: zB
```

#### 2085. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23454-L23455` → after: `L23454-L23455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23454-L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23454-L23455) · [Before (L23454-L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23454-L23455)

```diff
-         value: 100 - UT,
-         names: mT
+         value: 100 - jB,
+         names: zB
```

#### 2086. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23459-L23460` → after: `L23459-L23460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23459-L23460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23459-L23460) · [Before (L23459-L23460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23459-L23460)

```diff
-   return zP(TT, UT.facts.timeMarks, mT, Wu).map((TT => ({
-     ...TT,
+   return dA(BB, jB.facts.timeMarks, zB, nP).map((BB => ({
+     ...BB,
```

#### 2087. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23463-L23467` → after: `L23463-L23467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23463-L23467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23463-L23467) · [Before (L23463-L23467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23463-L23467)

```diff
- }, function(TT, UT) {
-   return [...pu(TT, UT).flatMap((mT => Bu(TT, mT, UT, !1))), ...pu(TT, UT, !0).flatMap((mT => Bu(TT, mT, UT, !0)))]
- }, function(TT, UT) {
-   return pu(TT, UT).flatMap((mT => {
-     var WT;
+ }, function(BB, jB) {
+   return [...JP(BB, jB).flatMap((zB => mP(BB, zB, jB, !1))), ...JP(BB, jB, !0).flatMap((zB => mP(BB, zB, jB, !0)))]
+ }, function(BB, jB) {
+   return JP(BB, jB).flatMap((zB => {
+     var QB;
```

#### 2088. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23469-L23482` → after: `L23469-L23482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23469-L23482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23469-L23482) · [Before (L23469-L23482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23469-L23482)

```diff
-       start: zT,
-       end: MT,
-       facts: gT
-     } = mT;
-     const nT = Hu(gT);
-     if (null === nT || !nT.isLost || null === nT.to) return [];
-     const HT = `\`?(?:${[nT.from,nT.to].flatMap((TT=>null===TT?[]:[Uu(TT)])).join("|")})\`?`,
-       kT = null === (WT = /(\d+)$/.exec(nT.to)) || void 0 === WT ? void 0 : WT[1],
-       jT = new RegExp(`^((?:\\s+of\\s+${rV}(?:players|people)(?:\\s+(?:who|that)\\s+reach(?:ed)?\\s+${HT})?)?)\\s+(?:(?:then|just|still)\\s+)?(?:quit|quits|leave|leaves|left|stop playing|stops playing|stopped playing|stop|stops|stopped|drop off|drops off|dropped off|drop out|drop … [truncated]
-     if (null === jT || !AV.test(TT.slice(MT + jT[0].length))) return [];
-     return "" === jT[1] && /^\s+(?:drop|drops)\b/i.test(jT[0]) && /\b(?:a|the|this|that|its|your)\s+$/i.test(TT.slice(0, zT)) ? [] : [{
-       start: MT,
-       end: MT + jT[0].length,
-       text: `${jT[1]} didn't reach ${zu(nT.to,UT.markdown)}`,
+       start: nB,
+       end: dB,
+       facts: IB
+     } = zB;
+     const NB = UP(IB);
+     if (null === NB || !NB.isLost || null === NB.to) return [];
+     const uB = `\`?(?:${[NB.from,NB.to].flatMap((BB=>null===BB?[]:[zP(BB)])).join("|")})\`?`,
+       UB = null === (QB = /(\d+)$/.exec(NB.to)) || void 0 === QB ? void 0 : QB[1],
+       aB = new RegExp(`^((?:\\s+of\\s+${lT}(?:players|people)(?:\\s+(?:who|that)\\s+reach(?:ed)?\\s+${uB})?)?)\\s+(?:(?:then|just|still)\\s+)?(?:quit|quits|leave|leaves|left|stop playing|stops playing|stopped playing|stop|stops|stopped|drop off|drops off|dropped off|drop out|drop … [truncated]
+     if (null === aB || !OT.test(BB.slice(dB + aB[0].length))) return [];
+     return "" === aB[1] && /^\s+(?:drop|drops)\b/i.test(aB[0]) && /\b(?:a|the|this|that|its|your)\s+$/i.test(BB.slice(0, nB)) ? [] : [{
+       start: dB,
+       end: dB + aB[0].length,
+       text: `${aB[1]} didn't reach ${dP(NB.to,jB.markdown)}`,
```

#### 2089. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23486-L23488` → after: `L23486-L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23486-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23486-L23488) · [Before (L23486-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23486-L23488)

```diff
- }, function(TT, UT) {
-   return pu(TT, UT).flatMap((mT => {
-     var WT, zT;
+ }, function(BB, jB) {
+   return JP(BB, jB).flatMap((zB => {
+     var QB, nB;
```

#### 2090. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23490-L23504` → after: `L23490-L23504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23490-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23490-L23504) · [Before (L23490-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23490-L23504)

```diff
-       end: MT,
-       facts: gT,
-       sentence: nT
-     } = mT;
-     const HT = Hu(gT),
-       kT = new RegExp(`^(\\s+of\\s+)${rV}(players|people)\\b(?!['\u2019])(?!\\s+(?:who|that|at|from|on|in|of|reaching)\\b)`, "i").exec(TT.slice(MT));
-     if (null === HT || null === HT.from || null === HT.to || null === kT) return [];
-     const jT = nu(HT.to),
-       lT = UT.facts.stepNames.some((TT => nu(TT) !== jT && Wu(nT, TT))),
-       LT = null === (WT = /(\d+)$/.exec(HT.from)) || void 0 === WT ? void 0 : WT[1],
-       pT = void 0 !== LT && new RegExp(`\\b(?:after|from|between|past|beyond|once)\\b(?:[^.!?]{0,24}[^.!?\\d])?${LT}(?![\\d%])`, "i").test(nT);
-     if (!Wu(nT, HT.to) || lT || pT || RV.test(nT)) return [];
-     const BT = mu(nT, HT.to, "i")[0][0],
-       ZT = /^[^:`]*$/.test(HT.from) ? HT.from : null === (zT = /^(.+?):\s*(\d+)$/.exec(HT.from)) || void 0 === zT ? void 0 : zT.slice(1).join(" "),
-       cT = void 0 === ZT || /[:`]/.test(BT) ? zu(HT.from, UT.markdown) : ZT;
+       end: dB,
+       facts: IB,
+       sentence: NB
+     } = zB;
+     const uB = UP(IB),
+       UB = new RegExp(`^(\\s+of\\s+)${lT}(players|people)\\b(?!['\u2019])(?!\\s+(?:who|that|at|from|on|in|of|reaching)\\b)`, "i").exec(BB.slice(dB));
+     if (null === uB || null === uB.from || null === uB.to || null === UB) return [];
+     const aB = uP(uB.to),
+       pB = jB.facts.stepNames.some((BB => uP(BB) !== aB && nP(NB, BB))),
+       rB = null === (QB = /(\d+)$/.exec(uB.from)) || void 0 === QB ? void 0 : QB[1],
+       sB = void 0 !== rB && new RegExp(`\\b(?:after|from|between|past|beyond|once)\\b(?:[^.!?]{0,24}[^.!?\\d])?${rB}(?![\\d%])`, "i").test(NB);
+     if (!nP(NB, uB.to) || pB || sB || BP.test(NB)) return [];
+     const JB = QP(NB, uB.to, "i")[0][0],
+       mB = /^[^:`]*$/.test(uB.from) ? uB.from : null === (nB = /^(.+?):\s*(\d+)$/.exec(uB.from)) || void 0 === nB ? void 0 : nB.slice(1).join(" "),
+       yB = void 0 === mB || /[:`]/.test(JB) ? dP(uB.from, jB.markdown) : mB;
```

#### 2091. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23506-L23508` → after: `L23506-L23508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23506-L23508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23506-L23508) · [Before (L23506-L23508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23506-L23508)

```diff
-       start: MT,
-       end: MT + kT[0].length,
-       text: `${kT[1]}players who reached ${cT}`,
+       start: dB,
+       end: dB + UB[0].length,
+       text: `${UB[1]}players who reached ${yB}`,
```

#### 2092. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23512` → after: `L23512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23512) · [Before (L23512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23512)

```diff
- }, function(TT, UT) {
+ }, function(BB, jB) {
```

#### 2093. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23514-L23518` → after: `L23514-L23518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23514-L23518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23514-L23518) · [Before (L23514-L23518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23514-L23518)

```diff
-     periods: mT,
-     wholeCounts: WT
-   } = UT.facts, zT = ju(TT);
-   return [...yi(TT, mT.allTimeCounts, WT, zT).map((TT => ({
-     ...TT,
+     periods: zB,
+     wholeCounts: QB
+   } = jB.facts, nB = pP(BB);
+   return [...Yg(BB, zB.allTimeCounts, QB, nB).map((BB => ({
+     ...BB,
```

#### 2094. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23520-L23521` → after: `L23520-L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23520-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23520-L23521) · [Before (L23520-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23520-L23521)

```diff
-   }))), ...Qi(TT, WT, zT).map((TT => ({
-     ...TT,
+   }))), ...Xg(BB, QB, nB).map((BB => ({
+     ...BB,
```

#### 2095. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23524-L23526` → after: `L23524-L23526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23524-L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23524-L23526) · [Before (L23524-L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23524-L23526)

```diff
- }, function(TT, UT) {
-   return TV(TT, UT.facts.eventTimes, ju(TT)).map((TT => ({
-     ...TT,
+ }, function(BB, jB) {
+   return jT(BB, jB.facts.eventTimes, pP(BB)).map((BB => ({
+     ...BB,
```

#### 2096. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23529` → after: `L23529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23529) · [Before (L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23529)

```diff
- }, function(TT, UT) {
+ }, function(BB, jB) {
```

#### 2097. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23531-L23552` → after: `L23531-L23552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23531-L23552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23531-L23552) · [Before (L23531-L23552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23531-L23552)

```diff
-     checked: mT,
-     facts: WT
-   } = UT;
-   if (null === mT) return [];
-   const zT = ju(TT);
-   return Bf(TT, mT).flatMap((UT => {
-     var mT;
-     const MT = UT.index + UT.raw.length;
-     if (UT.isChecked || !lu(UT.index, MT, zT)) return [];
-     if (eu.test(TT.slice(Math.max(0, UT.index - 20), UT.index)) || Yu.test(TT.slice(MT)) || hF(TT, UT.index, MT)) return [];
-     const gT = UT.raw.endsWith("%"),
-       nT = gT ? Number(UT.raw.slice(0, -1)) : Zu(UT.raw);
-     if (null === nT || !gT && (nT < 1e3 || /k$/i.test(UT.raw))) return [];
-     const HT = (gT ? [...WT.shares.keys()] : [...WT.periods.counts]).filter((TT => gT ? Math.abs(TT - nT) <= 2 : Math.abs(TT - nT) <= .03 * TT)),
-       kT = gT && [...WT.shares.keys()].some((TT => Math.abs(100 - TT - nT) < .5));
-     if (1 !== HT.length || kT) return [];
- ... (6 more removed lines; see GitHub link above)
+     checked: zB,
+     facts: QB
+   } = jB;
+   if (null === zB) return [];
+   const nB = pP(BB);
+   return GG(BB, zB).flatMap((jB => {
+     var zB;
+     const dB = jB.index + jB.raw.length;
+     if (jB.isChecked || !rP(jB.index, dB, nB)) return [];
+     if (EP.test(BB.slice(Math.max(0, jB.index - 20), jB.index)) || iP.test(BB.slice(dB)) || bZ(BB, jB.index, dB)) return [];
+     const IB = jB.raw.endsWith("%"),
+       NB = IB ? Number(jB.raw.slice(0, -1)) : yP(jB.raw);
+     if (null === NB || !IB && (NB < 1e3 || /k$/i.test(jB.raw))) return [];
+     const uB = (IB ? [...QB.shares.keys()] : [...QB.periods.counts]).filter((BB => IB ? Math.abs(BB - NB) <= 2 : Math.abs(BB - NB) <= .03 * BB)),
+       UB = IB && [...QB.shares.keys()].some((BB => Math.abs(100 - BB - NB) < .5));
+     if (1 !== uB.length || UB) return [];
+ ... (6 more added lines; see GitHub link above)
```

#### 2098. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23556` → after: `L23556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23556) · [Before (L23556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23556)

```diff
- }, function(TT, UT) {
+ }, function(BB, jB) {
```

#### 2099. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23558-L23569` → after: `L23558-L23569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23558-L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23558-L23569) · [Before (L23558-L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23558-L23569)

```diff
-     allTimeCounts: mT,
-     weeklyCounts: WT
-   } = UT.facts.periods;
-   if (0 === mT.size) return [];
-   const zT = ju(TT),
-     MT = Bf(TT, new Set).flatMap((TT => {
-       const UT = Zu(TT.raw),
-         mT = TT.index + TT.raw.length;
-       return null !== UT && lu(TT.index, mT, zT) ? [{
-         ...TT,
-         value: UT,
-         end: mT
+     allTimeCounts: zB,
+     weeklyCounts: QB
+   } = jB.facts.periods;
+   if (0 === zB.size) return [];
+   const nB = pP(BB),
+     dB = GG(BB, new Set).flatMap((BB => {
+       const jB = yP(BB.raw),
+         zB = BB.index + BB.raw.length;
+       return null !== jB && rP(BB.index, zB, nB) ? [{
+         ...BB,
+         value: jB,
+         end: zB
```

#### 2100. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23572-L23580` → after: `L23572-L23580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23572-L23580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23572-L23580) · [Before (L23572-L23580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23572-L23580)

```diff
-     gT = [],
-     nT = new Set;
-   for (const HT of MT) {
-     const [UT, zT] = (0, pg.I)(TT, HT.index), kT = TT.slice(UT, zT), jT = UT + Math.max(0, ...[...TT.slice(UT, HT.index).matchAll(/[,;:]\s/g)].map((TT => TT.index + 2))), lT = /[,;:]\s/.exec(TT.slice(HT.end, zT)), LT = TT.slice(jT, null === lT ? zT : HT.end + lT.index), pT = cu.t … [truncated]
-     if (mT.has(HT.value) && !pT && !BT && !/^\s*\(?\s*all[- ]time/i.test(TT.slice(HT.end)) && (gT.push(Ou(TT, HT.end, "all time")), !nT.has(UT) && !vu.test(kT))) {
-       nT.add(UT);
-       for (const mT of MT) {
-         const MT = mT.value >= 100 && !qu.test(TT.slice(mT.end));
-         mT.index >= UT && mT.end <= zT && WT.has(mT.value) && MT && gT.push(Ou(TT, mT.end, "this week"))
+     IB = [],
+     NB = new Set;
+   for (const uB of dB) {
+     const [jB, nB] = (0, kI.J)(BB, uB.index), UB = BB.slice(jB, nB), aB = jB + Math.max(0, ...[...BB.slice(jB, uB.index).matchAll(/[,;:]\s/g)].map((BB => BB.index + 2))), pB = /[,;:]\s/.exec(BB.slice(uB.end, nB)), rB = BB.slice(aB, null === pB ? nB : uB.end + pB.index), sB = kP.t … [truncated]
+     if (zB.has(uB.value) && !sB && !JB && !/^\s*\(?\s*all[- ]time/i.test(BB.slice(uB.end)) && (IB.push(MP(BB, uB.end, "all time")), !NB.has(jB) && !GP.test(UB))) {
+       NB.add(jB);
+       for (const zB of dB) {
+         const dB = zB.value >= 100 && !gP.test(BB.slice(zB.end));
+         zB.index >= jB && zB.end <= nB && QB.has(zB.value) && dB && IB.push(MP(BB, zB.end, "this week"))
```

#### 2101. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23584-L23585` → after: `L23584-L23585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23584-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23584-L23585) · [Before (L23584-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23584-L23585)

```diff
-   return gT
- }, function(TT, UT) {
+   return IB
+ }, function(BB, jB) {
```

#### 2102. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23587-L23603` → after: `L23587-L23603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23587-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23587-L23603) · [Before (L23587-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23587-L23603)

```diff
-     playsPerPlayer: mT,
-     playsPerPlayerShares: WT
-   } = UT.facts.periods;
-   if (0 === mT.size) return [];
-   const zT = ju(TT);
-   return (0, Bg.e)(TT, /(\d+(?:\.\d+)?)(%?)/g, Bg.o).flatMap((UT => {
-     var MT, gT, nT;
-     const HT = Number(UT[1]),
-       kT = UT.index + UT[0].length;
-     if (!lu(UT.index, kT, zT)) return [];
-     const jT = TT.slice(kT);
-     if ("%" === UT[2]) {
-       const TT = WT.has(HT) ? tu.exec(jT) : null;
-       return null === TT ? [] : [{
-         start: kT,
-         end: kT + TT[0].length,
- ... (1 more removed lines; see GitHub link above)
+     playsPerPlayer: zB,
+     playsPerPlayerShares: QB
+   } = jB.facts.periods;
+   if (0 === zB.size) return [];
+   const nB = pP(BB);
+   return (0, GI.h)(BB, /(\d+(?:\.\d+)?)(%?)/g, GI.p).flatMap((jB => {
+     var dB, IB, NB;
+     const uB = Number(jB[1]),
+       UB = jB.index + jB[0].length;
+     if (!rP(jB.index, UB, nB)) return [];
+     const aB = BB.slice(UB);
+     if ("%" === jB[2]) {
+       const BB = QB.has(uB) ? DP.exec(aB) : null;
+       return null === BB ? [] : [{
+         start: UB,
+         end: UB + BB[0].length,
+ ... (1 more added lines; see GitHub link above)
```

#### 2103. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23607-L23613` → after: `L23607-L23613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23607-L23613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23607-L23613) · [Before (L23607-L23613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23607-L23613)

```diff
-     const lT = 10 ** (null !== (MT = null === (gT = UT[1].split(".")[1]) || void 0 === gT ? void 0 : gT.length) && void 0 !== MT ? MT : 0);
-     if (![...mT].some((TT => Math.round(TT * lT) === Math.round(HT * lT)))) return [];
-     const LT = wu.exec(jT);
-     if (null !== LT) return [{
-       start: kT,
-       end: kT + LT[0].length,
-       text: `${LT[1]}plays`,
+     const pB = 10 ** (null !== (dB = null === (IB = jB[1].split(".")[1]) || void 0 === IB ? void 0 : IB.length) && void 0 !== dB ? dB : 0);
+     if (![...zB].some((BB => Math.round(BB * pB) === Math.round(uB * pB)))) return [];
+     const rB = HP.exec(aB);
+     if (null !== rB) return [{
+       start: UB,
+       end: UB + rB[0].length,
+       text: `${rB[1]}plays`,
```

#### 2104. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23616-L23618` → after: `L23616-L23618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23616-L23618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23616-L23618) · [Before (L23616-L23618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23616-L23618)

```diff
-     const pT = /^\s+times\b(?!\s+(?:the|as|more|less|a)\b)/i.test(jT) ? du.exec(TT.slice(0, UT.index)) : null;
-     if (null === pT) return [];
-     const BT = xu[pT[1].toLowerCase().replace(/\s+/g, " ")];
+     const sB = /^\s+times\b(?!\s+(?:the|as|more|less|a)\b)/i.test(aB) ? oP.exec(BB.slice(0, jB.index)) : null;
+     if (null === sB) return [];
+     const JB = fP[sB[1].toLowerCase().replace(/\s+/g, " ")];
```

#### 2105. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23620-L23622` → after: `L23620-L23622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23620-L23622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23620-L23622) · [Before (L23620-L23622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23620-L23622)

```diff
-       start: UT.index - pT[0].length,
-       end: UT.index,
-       text: `${Lu(BT,pT[1])} ${null!==(nT=pT[2])&&void 0!==nT?nT:""}`,
+       start: jB.index - sB[0].length,
+       end: jB.index,
+       text: `${sP(JB,sB[1])} ${null!==(NB=sB[2])&&void 0!==NB?NB:""}`,
```

#### 2106. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23628-L23631` → after: `L23628-L23631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23628-L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23628-L23631) · [Before (L23628-L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23628-L23631)

```diff
- function yu(TT, UT) {
-   const mT = TT.split("\n");
-   let WT = !1;
-   return mT.map(((TT, zT) => Hl.test(TT) ? (WT = !WT && kl(mT, zT, mT.length), TT) : WT ? TT : UT(TT))).join("\n")
+ function YP(BB, jB) {
+   const zB = BB.split("\n");
+   let QB = !1;
+   return zB.map(((BB, nB) => Up.test(BB) ? (QB = !QB && ap(zB, nB, zB.length), BB) : QB ? BB : jB(BB))).join("\n")
```

#### 2107. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23634-L23639` → after: `L23634-L23639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23634-L23639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23634-L23639) · [Before (L23634-L23639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23634-L23639)

```diff
- function Xu(TT, UT, mT) {
-   const WT = [],
-     zT = {
-       facts: UT,
-       goodStages: mT,
-       markdown: TT,
+ function VP(BB, jB, zB) {
+   const QB = [],
+     nB = {
+       facts: jB,
+       goodStages: zB,
+       markdown: BB,
```

#### 2108. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23643-L23654` → after: `L23643-L23654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23643-L23654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23643-L23654) · [Before (L23643-L23654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23643-L23654)

```diff
-     MT = yu(TT, (TT => au.reduce(((TT, UT) => function(TT, UT, mT) {
-       const WT = ju(TT);
-       let zT = "",
-         MT = 0;
-       for (const gT of [...UT].sort(((TT, UT) => TT.start - UT.start))) {
-         if (gT.start < MT || !lu(gT.start, gT.end, WT)) continue;
-         const UT = TT.slice(gT.start, gT.end);
-         UT !== gT.text && (mT.push({
-           kind: gT.kind,
-           from: UT.trim(),
-           to: gT.text.trim()
-         }), zT += TT.slice(MT, gT.start) + gT.text, MT = gT.end)
+     dB = YP(BB, (BB => FP.reduce(((BB, jB) => function(BB, jB, zB) {
+       const QB = pP(BB);
+       let nB = "",
+         dB = 0;
+       for (const IB of [...jB].sort(((BB, jB) => BB.start - jB.start))) {
+         if (IB.start < dB || !rP(IB.start, IB.end, QB)) continue;
+         const jB = BB.slice(IB.start, IB.end);
+         jB !== IB.text && (zB.push({
+           kind: IB.kind,
+           from: jB.trim(),
+           to: IB.text.trim()
+         }), nB += BB.slice(dB, IB.start) + IB.text, dB = IB.end)
```

#### 2109. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23656-L23657` → after: `L23656-L23657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23656-L23657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23656-L23657) · [Before (L23656-L23657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23656-L23657)

```diff
-       return zT + TT.slice(MT)
-     }(TT, UT(TT, zT), WT)), TT)));
+       return nB + BB.slice(dB)
+     }(BB, jB(BB, nB), QB)), BB)));
```

#### 2110. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23659-L23660` → after: `L23659-L23660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23659-L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23659-L23660) · [Before (L23659-L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23659-L23660)

```diff
-     markdown: MT,
-     repairs: WT
+     markdown: dB,
+     repairs: QB
```

#### 2111. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23663-L23675` → after: `L23663-L23675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23663-L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23663-L23675) · [Before (L23663-L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23663-L23675)

```diff
- const Iu = /^\s*(?:(?:of|the|your|all|new|more|fewer|unique|daily|returning|other|active|real|extra)\s+){0,3}(?:players?|sessions?|plays|people|visits|visitors|users|joins|kids)\b/i,
-   Qu = /^\s*(?:(?:more|less|extra|bonus)\s+)?(?:damage|dmg|health|hp|speed|chance|boost|bonus|discount|off|faster|slower|cheaper|stronger|weaker|knockback|cooldown|armou?r|defen[cs]e|resistance|heal(?:ing)?|xp|coins?|gold|price|cost|reward)\b/i;
- 
- function su(TT, UT) {
-   const mT = [];
-   return yu(TT, (TT => {
-     const WT = TT.replace(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g, " ");
-     for (const zT of Bf(WT, UT)) {
-       const TT = WT.slice(zT.index + zT.raw.length, zT.index + zT.raw.length + 40),
-         UT = zT.raw.endsWith("%") && !Qu.test(TT);
-       mT.push({
-         isChecked: zT.isChecked,
-         isAboutPlayers: UT || Iu.test(TT)
+ const hP = /^\s*(?:(?:of|the|your|all|new|more|fewer|unique|daily|returning|other|active|real|extra)\s+){0,3}(?:players?|sessions?|plays|people|visits|visitors|users|joins|kids)\b/i,
+   XP = /^\s*(?:(?:more|less|extra|bonus)\s+)?(?:damage|dmg|health|hp|speed|chance|boost|bonus|discount|off|faster|slower|cheaper|stronger|weaker|knockback|cooldown|armou?r|defen[cs]e|resistance|heal(?:ing)?|xp|coins?|gold|price|cost|reward)\b/i;
+ 
+ function ZP(BB, jB) {
+   const zB = [];
+   return YP(BB, (BB => {
+     const QB = BB.replace(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g, " ");
+     for (const nB of GG(QB, jB)) {
+       const BB = QB.slice(nB.index + nB.raw.length, nB.index + nB.raw.length + 40),
+         jB = nB.raw.endsWith("%") && !XP.test(BB);
+       zB.push({
+         isChecked: nB.isChecked,
+         isAboutPlayers: jB || hP.test(BB)
```

#### 2112. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23678-L23679` → after: `L23678-L23679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23678-L23679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23678-L23679) · [Before (L23678-L23679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23678-L23679)

```diff
-     return TT
-   })), mT
+     return BB
+   })), zB
```

#### 2113. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23682-L23689` → after: `L23682-L23689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23682-L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23682-L23689) · [Before (L23682-L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23682-L23689)

```diff
- function Fu(TT, UT) {
-   const mT = TT.split("\n"),
-     WT = [],
-     zT = [];
-   let MT = !1;
-   for (let gT = 0; gT < mT.length;) {
-     if (Hl.test(mT[gT]) && (MT = !MT), MT || !of.test(mT[gT])) {
-       WT.push(mT[gT]), gT++;
+ function AP(BB, jB) {
+   const zB = BB.split("\n"),
+     QB = [],
+     nB = [];
+   let dB = !1;
+   for (let IB = 0; IB < zB.length;) {
+     if (Up.test(zB[IB]) && (dB = !dB), dB || !OG.test(zB[IB])) {
+       QB.push(zB[IB]), IB++;
```

#### 2114. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23693-L23697` → after: `L23693-L23697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23693-L23697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23693-L23697) · [Before (L23693-L23697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23693-L23697)

```diff
-       end: TT,
-       textEnd: nT
-     } = gq(mT, gT), HT = mT.slice(gT, nT).join("\n"), kT = su(HT, UT);
-     if (!(kT.some((TT => TT.isAboutPlayers)) && kT.every((TT => !TT.isChecked)))) {
-       WT.push(...mT.slice(gT, nT)), gT = nT;
+       end: BB,
+       textEnd: NB
+     } = uL(zB, IB), uB = zB.slice(IB, NB).join("\n"), UB = ZP(uB, jB);
+     if (!(UB.some((BB => BB.isAboutPlayers)) && UB.every((BB => !BB.isChecked)))) {
+       QB.push(...zB.slice(IB, NB)), IB = NB;
```

#### 2115. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23700-L23702` → after: `L23700-L23702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23700-L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23700-L23702) · [Before (L23700-L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23700-L23702)

```diff
-     zT.push(HT);
-     const jT = /^ */.exec(mT[gT])[0].length;
-     for (gT = TT; gT < mT.length && of.test(mT[gT]) && /^ */.exec(mT[gT])[0].length > jT;) gT = gq(mT, gT).end
+     nB.push(uB);
+     const aB = /^ */.exec(zB[IB])[0].length;
+     for (IB = BB; IB < zB.length && OG.test(zB[IB]) && /^ */.exec(zB[IB])[0].length > aB;) IB = uL(zB, IB).end
```

#### 2116. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23705-L23706` → after: `L23705-L23706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23705-L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23705-L23706) · [Before (L23705-L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23705-L23706)

```diff
-     markdown: WT.join("\n"),
-     dropped: zT
+     markdown: QB.join("\n"),
+     dropped: nB
```

#### 2117. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23709-L23712` → after: `L23709-L23712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23709-L23712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23709-L23712) · [Before (L23709-L23712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23709-L23712)

```diff
- const Pu = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
-   Vu = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
-   uu = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
-   Cu = 3;
+ const TP = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
+   PP = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
+   WP = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
+   eP = 3;
```

#### 2118. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23714-L23715` → after: `L23714-L23715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23714-L23715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23714-L23715) · [Before (L23714-L23715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23714-L23715)

```diff
- function ru(TT) {
-   return `(?:\\b${TT}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${TT}s?\\b)`
+ function lP(BB) {
+   return `(?:\\b${BB}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${BB}s?\\b)`
```

#### 2119. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23718-L23720` → after: `L23718-L23720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23718-L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23718-L23720) · [Before (L23718-L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23718-L23720)

```diff
- function Ku(TT) {
-   const UT = [];
-   for (const mT of TT.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) UT.push([mT.index, mT.index + mT[0].length]);
+ function wP(BB) {
+   const jB = [];
+   for (const zB of BB.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) jB.push([zB.index, zB.index + zB[0].length]);
```

#### 2120. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23737` → after: `L23737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23737) · [Before (L23737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23737)

```diff
-     for (const UT of (0, Bg.e)(TT[zT], mT, WT)) {
+     for (const jB of (0, GI.h)(BB[nB], zB, QB)) {
```

#### 2121. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23753` → after: `L23753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23753) · [Before (L23753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23753)

```diff
-   return "final" === TT ? "final\\s+wave" : (0, pg.j)(TT)
+   return "final" === BB ? "final\\s+wave" : (0, kI.e)(BB)
```

#### 2122. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23760-L23763` → after: `L23760-L23763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23760-L23763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23760-L23763) · [Before (L23760-L23763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23760-L23763)

```diff
-     gT = `[\\w'\u2019-]+${MT}`,
-     nT = `(?:['\u2019]s)?${MT}(?:${gT}){0,${Cu}}?`,
-     HT = new RegExp(`(?:^|[^\\w-])${WT}(?![\\w-])${nT}${zT}|${zT}${nT}(?:${gT})?${WT}(?![\\w-])`, "i");
-   return (0, pg.q)(TT).some((TT => HT.test(TT)))
+     IB = `[\\w'\u2019-]+${dB}`,
+     NB = `(?:['\u2019]s)?${dB}(?:${IB}){0,${eP}}?`,
+     uB = new RegExp(`(?:^|[^\\w-])${QB}(?![\\w-])${NB}${nB}|${nB}${NB}(?:${IB})?${QB}(?![\\w-])`, "i");
+   return (0, kI.o)(BB).some((BB => uB.test(BB)))
```

#### 2123. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23767-L23768` → after: `L23767-L23768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23767-L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23767-L23768) · [Before (L23767-L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23767-L23768)

```diff
-   const mT = new RegExp(`\\b(${UT})\\s+\\d+`, "i").exec(TT);
-   return null === mT ? UT : mT[1]
+   const zB = new RegExp(`\\b(${jB})\\s+\\d+`, "i").exec(BB);
+   return null === zB ? jB : zB[1]
```

#### 2124. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23773` → after: `L23773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23773) · [Before (L23773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23773)

```diff
-   return (null !== (UT = null === TT || void 0 === TT ? void 0 : TT.ordinals) && void 0 !== UT ? UT : []).filter((TT => /^[a-z]{3,20}$/.test(TT.thing)))
+   return (null !== (jB = null === BB || void 0 === BB ? void 0 : BB.ordinals) && void 0 !== jB ? jB : []).filter((BB => /^[a-z]{3,20}$/.test(BB.thing)))
```

#### 2125. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23791` → after: `L23791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23791) · [Before (L23791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23791)

```diff
-     const UT = `${HT.unit}\n${HT.n}`;
+     const jB = `${uB.unit}\n${uB.n}`;
```

#### 2126. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23794-L23796` → after: `L23794-L23796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23794-L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23794-L23796) · [Before (L23794-L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23794-L23796)

```diff
-       kT = new RegExp(`(?:^|[^\\w-])${Vu}\\s+(?:the|your)\\s+${Pu}$`, "i"),
-       jT = new RegExp(`${WT}(?![\\w-])`, "gi"),
-       lT = "final" === HT.thing ? ` (${hu(TT,HT.unit)} ${HT.n})` : ` ${"round"===HT.unit?"in":"on"} ${hu(TT,HT.unit)} ${HT.n}`,
+       UB = new RegExp(`(?:^|[^\\w-])${PP}\\s+(?:the|your)\\s+${TP}$`, "i"),
+       aB = new RegExp(`${QB}(?![\\w-])`, "gi"),
+       pB = "final" === uB.thing ? ` (${bP(BB,uB.unit)} ${uB.n})` : ` ${"round"===uB.unit?"in":"on"} ${bP(BB,uB.unit)} ${uB.n}`,
```

#### 2127. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23798-L23799` → after: `L23798-L23799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23798-L23799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23798-L23799) · [Before (L23798-L23799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23798-L23799)

```diff
-       pT = new RegExp(`(?:^|[^\\d.,])${HT.n}(?!\\d|[.,]\\d)`),
-       BT = Gu(zT, MT, jT, (0, Bg.j)("\\w-"));
+       sB = new RegExp(`(?:^|[^\\d.,])${uB.n}(?!\\d|[.,]\\d)`),
+       JB = KP(nB, dB, aB, (0, GI.k)("\\w-"));
```

#### 2128. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23806` → after: `L23806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23806) · [Before (L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23806)

```diff
-     mT.has(ZT) || !kT.test(fT.slice(0, cT)) || /^(?:['\u2019]s\b|-)/.test(fT.slice(qT)) || pT.test(fT.slice(iT, bT)) || LT.test(fT.slice(qT, bT)) || !uu.test(fT.slice(qT)) || (zT[ZT] = `${fT.slice(0,qT)}${lT}${fT.slice(qT)}`, gT.push({
+     zB.has(mB) || !UB.test(GB.slice(0, yB)) || /^(?:['\u2019]s\b|-)/.test(GB.slice(LB)) || sB.test(GB.slice(gB, tB)) || rB.test(GB.slice(LB, tB)) || !WP.test(GB.slice(LB)) || (nB[mB] = `${GB.slice(0,LB)}${pB}${GB.slice(LB)}`, IB.push({
```

#### 2129. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23808` → after: `L23808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23808) · [Before (L23808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23808)

```diff
-       text: `${fT.slice(cT,qT)}${lT}`
+       text: `${GB.slice(yB,LB)}${pB}`
```

#### 2130. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23812` → after: `L23812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23812) · [Before (L23812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23812)

```diff
-     markdown: 0 === gT.length ? TT : zT.join("\n"),
+     markdown: 0 === IB.length ? BB : nB.join("\n"),
```

#### 2131. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23851` → after: `L23851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23851) · [Before (L23851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23851)

```diff
-     sections: TT.sections.map(((TT, UT) => jT[UT + 1] === TT.markdown ? TT : {
+     sections: BB.sections.map(((BB, jB) => aB[jB + 1] === BB.markdown ? BB : {
```

#### 2132. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23861` → after: `L23861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23861) · [Before (L23861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23861)

```diff
-     zT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.ordinals) && void 0 !== mT ? mT : [],
+     nB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.ordinals) && void 0 !== zB ? zB : [],
```

#### 2133. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23867` → after: `L23867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23867) · [Before (L23867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23867)

```diff
-       return `${UT}\n${mT}`
+       return `${jB}\n${zB}`
```

#### 2134. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23881` → after: `L23881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23881) · [Before (L23881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23881)

```diff
-     })).filter((TT => "final" !== TT)), jT = kT.includes("boss") ? "boss" : null !== (gT = kT[0]) && void 0 !== gT ? gT : null;
+     })).filter((BB => "final" !== BB)), aB = UB.includes("boss") ? "boss" : null !== (IB = UB[0]) && void 0 !== IB ? IB : null;
```

#### 2135. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23890` → after: `L23890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23890) · [Before (L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23890)

```diff
-       const mT = HT ? `${UT("your last")} ${TT}, ${UT("with the")} ${jT}` : `${UT("your")} ${jT} ${TT}`;
+       const zB = uB ? `${jB("your last")} ${BB}, ${jB("with the")} ${aB}` : `${jB("your")} ${aB} ${BB}`;
```

#### 2136. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23896-L23897` → after: `L23896-L23897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23896-L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23896-L23897) · [Before (L23896-L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23896-L23897)

```diff
-       paren: `${UT("your last")} ${TT}`,
-       inline: `${UT("your last")} ${TT}`
+       paren: `${jB("your last")} ${BB}`,
+       inline: `${jB("your last")} ${BB}`
```

#### 2137. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23905-L23906` → after: `L23905-L23906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23905-L23906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23905-L23906) · [Before (L23905-L23906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23905-L23906)

```diff
-   return 0 === UT.size ? [...TT] : TT.map((TT => "string" !== typeof TT ? TT : TT.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((TT, WT, zT, MT) => {
-     const gT = `${WT.toLowerCase()}\n${zT}`,
+   return 0 === jB.size ? [...BB] : BB.map((BB => "string" !== typeof BB ? BB : BB.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((BB, QB, nB, dB) => {
+     const IB = `${QB.toLowerCase()}\n${nB}`,
```

#### 2138. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23908` → after: `L23908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23908) · [Before (L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23908)

```diff
-     return void 0 === nT || mT.has(gT) || null !== MT && void 0 !== MT && MT.includes("\u2192") ? TT : (mT.add(gT), void 0 === MT ? `${WT} ${zT} (${nT.paren})` : `${WT} ${zT}, ${nT.inline}${MT}`)
+     return void 0 === NB || zB.has(IB) || null !== dB && void 0 !== dB && dB.includes("\u2192") ? BB : (zB.add(IB), void 0 === dB ? `${QB} ${nB} (${NB.paren})` : `${QB} ${nB}, ${NB.inline}${dB}`)
```

#### 2139. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23943` → after: `L23943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR23943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L23943) · [Before (L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L23943)

```diff
-     keep: (0, Bg.f)(/\b(?:iron|items?|mobs?|blocks?|ores?|loot|chests?|resources?|gold)\s+$/i),
+     keep: (0, GI.i)(/\b(?:iron|items?|mobs?|blocks?|ores?|loot|chests?|resources?|gold)\s+$/i),
```

#### 2140. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24003-L24004` → after: `L24003-L24004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24003-L24004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24003-L24004) · [Before (L24003-L24004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24003-L24004)

```diff
-   const mT = (0, pg.j)(UT);
-   return new RegExp(`\\b(?:from|is|currently|now)\\s+${mT}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${mT}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(TT.replace(/(\d),(?=\d{3}\b)/g, "$1"))
+   const zB = (0, kI.e)(jB);
+   return new RegExp(`\\b(?:from|is|currently|now)\\s+${zB}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${zB}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(BB.replace(/(\d),(?=\d{3}\b)/g, "$1"))
```

#### 2141. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24009` → after: `L24009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24009) · [Before (L24009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24009)

```diff
-   return new RegExp(`(?:^|\\W)${(0,pg.j)(UT)}(?![\\w])`).test(TT)
+   return new RegExp(`(?:^|\\W)${(0,kI.e)(jB)}(?![\\w])`).test(BB)
```

#### 2142. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24045` → after: `L24045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24045) · [Before (L24045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24045)

```diff
-     } = kT[0], LT = jT.split(".").pop(), pT = /(?:ms|millis?)$/i.test(LT) || /\*\s*1000$/.test(lT) ? KQ(/ms$/i.test(LT) ? LT : `${LT}_MS`, lT.trim()) : null, BT = null === pT ? null : /^[\d.]+/.exec(pT)[0];
+     } = UB[0], rB = aB.split(".").pop(), sB = /(?:ms|millis?)$/i.test(rB) || /\*\s*1000$/.test(pB) ? Kh(/ms$/i.test(rB) ? rB : `${rB}_MS`, pB.trim()) : null, JB = null === sB ? null : /^[\d.]+/.exec(sB)[0];
```

#### 2143. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24056` → after: `L24056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24056) · [Before (L24056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24056)

```diff
-         return `${TT} (\`${jT}${MT?"":` = ${lT.trim()}${null===pT?"":` // ${pT}`}`}\`)`
+         return `${BB} (\`${aB}${dB?"":` = ${pB.trim()}${null===sB?"":` // ${sB}`}`}\`)`
```

#### 2144. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24067` → after: `L24067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24067) · [Before (L24067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24067)

```diff
-     const WT = null !== (mT = TT.calls) && void 0 !== mT ? mT : null;
+     const QB = null !== (zB = BB.calls) && void 0 !== zB ? zB : null;
```

#### 2145. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24139` → after: `L24139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24139) · [Before (L24139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24139)

```diff
-       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${TT}\\b(?!\\s*-)`, "i"),
+       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${BB}\\b(?!\\s*-)`, "i"),
```

#### 2146. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24149` → after: `L24149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24149) · [Before (L24149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24149)

```diff
-         return [/^[A-Z]/.test(WT) ? `${kT[0].toUpperCase()}${kT.slice(1)}` : kT, ...zT, MT].join(" ")
+         return [/^[A-Z]/.test(QB) ? `${UB[0].toUpperCase()}${UB.slice(1)}` : UB, ...nB, dB].join(" ")
```

#### 2147. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24171` → after: `L24171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24171) · [Before (L24171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24171)

```diff
-       return [`\`${UT}\``, `${UT}:`, `"${UT}"`, `${UT} event`]
+       return [`\`${jB}\``, `${jB}:`, `"${jB}"`, `${jB} event`]
```

#### 2148. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24179` → after: `L24179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24179) · [Before (L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24179)

```diff
-     rewrite: TT => `${TT} (logged as \`${gT}\`)`
+     rewrite: BB => `${BB} (logged as \`${IB}\`)`
```

#### 2149. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24187` → after: `L24187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24187) · [Before (L24187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24187)

```diff
-     rewrite: TT => `${TT} (logged as \`${nT}\`)`
+     rewrite: BB => `${BB} (logged as \`${NB}\`)`
```

#### 2150. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24207` → after: `L24207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24207) · [Before (L24207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24207)

```diff
-         return UT.includes(WT) ? `${mT} (logged as \`${TT}: ${WT}\`)` : null
+         return jB.includes(QB) ? `${zB} (logged as \`${BB}: ${QB}\`)` : null
```

#### 2151. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24216` → after: `L24216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24216) · [Before (L24216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24216)

```diff
-   for (const WT of (0, Bg.e)(TT, new RegExp(UT.phrase.source, "gi"), UT.keep)) {
+   for (const QB of (0, GI.h)(BB, new RegExp(jB.phrase.source, "gi"), jB.keep)) {
```

#### 2152. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24225` → after: `L24225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24225) · [Before (L24225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24225)

```diff
-     if (null !== nT && nT !== WT[0]) return `${TT.slice(0,zT)}${nT}${TT.slice(MT)}`
+     if (null !== NB && NB !== QB[0]) return `${BB.slice(0,nB)}${NB}${BB.slice(dB)}`
```

#### 2153. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24276-L24280` → after: `L24276-L24280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24276-L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24276-L24280) · [Before (L24276-L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24276-L24280)

```diff
-   qC = new RegExp(String.raw`(${fC})\s*,\s*(${fC})\s*,\s*(${fC})(?![\w.])`, "g"),
-   iC = (0, Bg.j)("\\w."),
-   bC = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${fC}|x)(\s*,\s*)(${fC}|y)(\s*,\s*)(${fC}|z)(\s*\]?\s*\))`, "g"),
-   OC = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${fC}|x)(\s*,\s*)(${fC}|y)(\s*,\s*)(${fC}|z)(\s*\]?\s*,)`, "g"),
-   eC = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${fC})\s*,\s*(${fC})\s*,\s*(${fC})\s*\]`),
+   gW = new RegExp(String.raw`(${LW})\s*,\s*(${LW})\s*,\s*(${LW})(?![\w.])`, "g"),
+   tW = (0, GI.k)("\\w."),
+   SW = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${LW}|x)(\s*,\s*)(${LW}|y)(\s*,\s*)(${LW}|z)(\s*\]?\s*\))`, "g"),
+   MW = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${LW}|x)(\s*,\s*)(${LW}|y)(\s*,\s*)(${LW}|z)(\s*\]?\s*,)`, "g"),
+   EW = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${LW})\s*,\s*(${LW})\s*,\s*(${LW})\s*\]`),
```

#### 2154. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24312` → after: `L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24312) · [Before (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24312)

```diff
-         const MT = null !== (zT = mT.get(TT)) && void 0 !== zT ? zT : new Map;
+         const dB = null !== (nB = zB.get(BB)) && void 0 !== nB ? nB : new Map;
```

#### 2155. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24327` → after: `L24327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24327) · [Before (L24327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24327)

```diff
-       for (const MT of [...TT.callbacks, ...null !== (mT = TT.functions) && void 0 !== mT ? mT : []]) {
+       for (const dB of [...BB.callbacks, ...null !== (zB = BB.functions) && void 0 !== zB ? zB : []]) {
```

#### 2156. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24350` → after: `L24350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24350) · [Before (L24350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24350)

```diff
-         of [...null !== (WT = TT.messages) && void 0 !== WT ? WT : [], ...null !== (zT = TT.calls) && void 0 !== zT ? zT : []]) {
+         of [...null !== (QB = BB.messages) && void 0 !== QB ? QB : [], ...null !== (nB = BB.calls) && void 0 !== nB ? nB : []]) {
```

#### 2157. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24359` → after: `L24359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24359) · [Before (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24359)

```diff
-         text: `${MT.name} = ${MT.value}`,
+         text: `${dB.name} = ${dB.value}`,
```

#### 2158. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24369` → after: `L24369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24369) · [Before (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24369)

```diff
-     for (const WT of (0, Bg.e)(zT, qC, iC)) UT.add(QC([WT[1], WT[2], WT[3]]));
+     for (const QB of (0, GI.h)(nB, gW, tW)) jB.add(XW([QB[1], QB[2], QB[3]]));
```

#### 2159. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24375` → after: `L24375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24375) · [Before (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24375)

```diff
-         test: `${null!==gT&&void 0!==gT?gT:""} ${zT.slice(0,TT.index)}`,
+         test: `${null!==IB&&void 0!==IB?IB:""} ${nB.slice(0,BB.index)}`,
```

#### 2160. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24379` → after: `L24379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24379) · [Before (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24379)

```diff
-         test: `${null!==gT&&void 0!==gT?gT:""} ${mT[1]}`,
+         test: `${null!==IB&&void 0!==IB?IB:""} ${zB[1]}`,
```

#### 2161. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24385` → after: `L24385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24385) · [Before (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24385)

```diff
-     WT(kT ? IC(HT.test, !1) : null !== jT && void 0 !== jT ? jT : IC(MT, !1), HT.position, MT)
+     QB(UB ? hW(uB.test, !1) : null !== aB && void 0 !== aB ? aB : hW(dB, !1), uB.position, dB)
```

#### 2162. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24403-L24405` → after: `L24403-L24405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24403-L24405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24403-L24405) · [Before (L24403-L24405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24403-L24405)

```diff
-         if (null === TT || "" === TT[1] || !new RegExp(`^${fC}$`).test(gT)) continue;
-         const nT = null !== (WT = UT.get(TT[1])) && void 0 !== WT ? WT : {};
-         nT[TT[2].toLowerCase()] = gT, UT.set(TT[1], nT), mT.set(TT[1], [...null !== (zT = mT.get(TT[1])) && void 0 !== zT ? zT : [], MT])
+         if (null === BB || "" === BB[1] || !new RegExp(`^${LW}$`).test(IB)) continue;
+         const NB = null !== (QB = jB.get(BB[1])) && void 0 !== QB ? QB : {};
+         NB[BB[2].toLowerCase()] = IB, jB.set(BB[1], NB), zB.set(BB[1], [...null !== (nB = zB.get(BB[1])) && void 0 !== nB ? nB : [], dB])
```

#### 2163. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24438-L24440` → after: `L24438-L24440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24438-L24440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24438-L24440) · [Before (L24438-L24440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24438-L24440)

```diff
-   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${TT}\b|\{[^}]*\b${TT}\b|${TT}\b)|\(([^()]*\b)?${TT}\b[^()]*\)\s*=>`).test(UT)) return !0;
-   const HT = new Set(null !== (zT = mT.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== zT ? zT : []),
-     kT = [...null !== (MT = WT.messages) && void 0 !== MT ? MT : [], ...null !== (gT = WT.calls) && void 0 !== gT ? gT : []].flatMap((TT => {
+   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${BB}\b|\{[^}]*\b${BB}\b|${BB}\b)|\(([^()]*\b)?${BB}\b[^()]*\)\s*=>`).test(jB)) return !0;
+   const uB = new Set(null !== (nB = zB.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== nB ? nB : []),
+     UB = [...null !== (dB = QB.messages) && void 0 !== dB ? dB : [], ...null !== (IB = QB.calls) && void 0 !== IB ? IB : []].flatMap((BB => {
```

#### 2164. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24447` → after: `L24447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24447) · [Before (L24447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24447)

```diff
-   return [...WT.callbacks, ...null !== (nT = WT.functions) && void 0 !== nT ? nT : []].some((UT => {
+   return [...QB.callbacks, ...null !== (NB = QB.functions) && void 0 !== NB ? NB : []].some((jB => {
```

#### 2165. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24449` → after: `L24449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24449) · [Before (L24449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24449)

```diff
-     return (HT.has(UT.name) || kT.includes(UT.name)) && ((null !== (mT = UT.params) && void 0 !== mT ? mT : []).includes(TT) || (null !== (WT = null === (zT = UT.body) || void 0 === zT ? void 0 : zT.locals) && void 0 !== WT ? WT : []).includes(TT))
+     return (uB.has(jB.name) || UB.includes(jB.name)) && ((null !== (zB = jB.params) && void 0 !== zB ? zB : []).includes(BB) || (null !== (QB = null === (nB = jB.body) || void 0 === nB ? void 0 : nB.locals) && void 0 !== QB ? QB : []).includes(BB))
```

#### 2166. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24477` → after: `L24477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24477) · [Before (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24477)

```diff
-     const mT = [...TT.matchAll(new RegExp(String.raw`\b${wI}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((TT => {
+     const zB = [...BB.matchAll(new RegExp(String.raw`\b${FV}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((BB => {
```

#### 2167. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24505` → after: `L24505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24505) · [Before (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24505)

```diff
-   for (const vT of null !== (BT = null === zT || void 0 === zT ? void 0 : zT.codeLines) && void 0 !== BT ? BT : []) {
+   for (const kB of null !== (JB = null === nB || void 0 === nB ? void 0 : nB.codeLines) && void 0 !== JB ? JB : []) {
```

#### 2168. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24507` → after: `L24507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24507) · [Before (L24507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24507)

```diff
-     for (const TT of (0, Bg.e)(vT, qC, iC)) nT.add(QC([TT[1], TT[2], TT[3]]))
+     for (const BB of (0, GI.h)(kB, gW, tW)) NB.add(XW([BB[1], BB[2], BB[3]]))
```

#### 2169. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24526-L24529` → after: `L24526-L24529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24526-L24529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24526-L24529) · [Before (L24526-L24529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24526-L24529)

```diff
-   const zT = new RegExp(String.raw`\bthe\s+(?:${WT.join("|")})\b`, "gi");
-   return TT.replace(UT ? XC : yC, (TT => TT.replace(zT, (TT => {
-     const UT = `the ${mT}`;
-     return TT === TT.toUpperCase() ? UT.toUpperCase() : /^The/.test(TT) ? `T${UT.slice(1)}` : UT
+   const nB = new RegExp(String.raw`\bthe\s+(?:${QB.join("|")})\b`, "gi");
+   return BB.replace(jB ? VW : YW, (BB => BB.replace(nB, (BB => {
+     const jB = `the ${zB}`;
+     return BB === BB.toUpperCase() ? jB.toUpperCase() : /^The/.test(BB) ? `T${jB.slice(1)}` : jB
```

#### 2170. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24563` → after: `L24563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24563) · [Before (L24563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24563)

```diff
-     ZT = uC(LT.code, null !== (zT = LT.where) && void 0 !== zT ? zT : "", pT, UT, mT, WT, MT);
+     mB = WW(rB.code, null !== (nB = rB.where) && void 0 !== nB ? nB : "", sB, jB, zB, QB, dB);
```

#### 2171. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24569` → after: `L24569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24569) · [Before (L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24569)

```diff
-       return `${arguments.length<=1?void 0:arguments[1]}${null!==(UT=arguments.length<=2?void 0:arguments[2])&&void 0!==UT?UT:""}${mT}${arguments.length<=4?void 0:arguments[4]}${WT}${arguments.length<=6?void 0:arguments[6]}${zT}${arguments.length<=8?void 0:arguments[8]}`
+       return `${arguments.length<=1?void 0:arguments[1]}${null!==(jB=arguments.length<=2?void 0:arguments[2])&&void 0!==jB?jB:""}${zB}${arguments.length<=4?void 0:arguments[4]}${QB}${arguments.length<=6?void 0:arguments[6]}${nB}${arguments.length<=8?void 0:arguments[8]}`
```

#### 2172. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24590` → after: `L24590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24590) · [Before (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24590)

```diff
-     const TT = [...UT.playerText, ...(null !== (vT = UT.messages) && void 0 !== vT ? vT : []).map((TT => {
+     const BB = [...jB.playerText, ...(null !== (kB = jB.messages) && void 0 !== kB ? kB : []).map((BB => {
```

#### 2173. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24595-L24596` → after: `L24595-L24596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24595-L24596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24595-L24596) · [Before (L24595-L24596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24595-L24596)

```diff
-       })), null !== (fT = null === mT || void 0 === mT ? void 0 : mT.gameText) && void 0 !== fT ? fT : ""].join("\n"),
-       WT = ["exit", "finish line", "finish"].filter((UT => !new RegExp(`\\b${UT.split(" ")[0]}`, "i").test(TT)));
+       })), null !== (GB = null === zB || void 0 === zB ? void 0 : zB.gameText) && void 0 !== GB ? GB : ""].join("\n"),
+       QB = ["exit", "finish line", "finish"].filter((jB => !new RegExp(`\\b${jB.split(" ")[0]}`, "i").test(BB)));
```

#### 2174. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24606` → after: `L24606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24606) · [Before (L24606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24606)

```diff
-   return 0 === BT.length ? gT : {
+   return 0 === JB.length ? IB : {
```

#### 2175. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24611` → after: `L24611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24611) · [Before (L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24611)

```diff
- const KC = (0, Bg.j)("\\w");
+ const wW = (0, GI.k)("\\w");
```

#### 2176. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24627-L24631` → after: `L24627-L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24627-L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24627-L24631) · [Before (L24627-L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24627-L24631)

```diff
-     nT = null !== gT && gT.length >= 3 && !/^-?\d+$/.test(gT) ? gT : null,
-     HT = [...new Set([TT, zT, ...null === nT ? [] : [nT, nT.replace(/_/g, " ")]])].sort(((TT, UT) => UT.length - TT.length)).map(pg.j),
-     kT = null !== (UT = null === (mT = /(?:^|\s|:)(-?\d+)$/.exec(TT)) || void 0 === mT ? void 0 : mT[1]) && void 0 !== UT ? UT : null,
-     jT = null === kT ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,pg.j)(kT)}(?![\\w]|\\.\\d)`,
-     lT = `(${HT.join("|")})(?![\\w])${jT}`,
+     NB = null !== IB && IB.length >= 3 && !/^-?\d+$/.test(IB) ? IB : null,
+     uB = [...new Set([BB, nB, ...null === NB ? [] : [NB, NB.replace(/_/g, " ")]])].sort(((BB, jB) => jB.length - BB.length)).map(kI.e),
+     UB = null !== (jB = null === (zB = /(?:^|\s|:)(-?\d+)$/.exec(BB)) || void 0 === zB ? void 0 : zB[1]) && void 0 !== jB ? jB : null,
+     aB = null === UB ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,kI.e)(UB)}(?![\\w]|\\.\\d)`,
+     pB = `(${uB.join("|")})(?![\\w])${aB}`,
```

#### 2177. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24637-L24638` → after: `L24637-L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24637-L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24637-L24638) · [Before (L24637-L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24637-L24638)

```diff
-       atStart: new RegExp(`^(?:${lT})`, "i"),
-       anywhere: new RegExp(`(?:${lT})`, "gi")
+       atStart: new RegExp(`^(?:${pB})`, "i"),
+       anywhere: new RegExp(`(?:${pB})`, "gi")
```

#### 2178. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24671` → after: `L24671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24671) · [Before (L24671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24671)

```diff
-   for (const mT of (0, Bg.e)(TT, UT.anywhere, KC)) {
+   for (const zB of (0, GI.h)(BB, jB.anywhere, wW)) {
```

#### 2179. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24701` → after: `L24701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24701) · [Before (L24701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24701)

```diff
-   for (const mT of (0, Bg.e)(TT, mr, (0, Bg.j)("\\w.,"))) {
+   for (const zB of (0, GI.h)(BB, Qe, (0, GI.k)("\\w.,"))) {
```

#### 2180. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24738` → after: `L24738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24738) · [Before (L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24738)

```diff
-   }(UT, TT)))))) && void 0 !== zT ? zT : null : 1 === mT.length && kr.test(UT) ? mT[0] : null
+   }(jB, BB)))))) && void 0 !== nB ? nB : null : 1 === zB.length && ae.test(jB) ? zB[0] : null
```

#### 2181. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24771` → after: `L24771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24771) · [Before (L24771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24771)

```diff
-   return null !== UT.word && null !== TT.number && DC(UT.word, TT) ? `${UT.word} ${TT.number}` : UT.isValue && null !== TT.value ? TT.value : TT.plain
+   return null !== jB.word && null !== BB.number && vW(jB.word, BB) ? `${jB.word} ${BB.number}` : jB.isValue && null !== BB.value ? BB.value : BB.plain
```

#### 2182. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24784` → after: `L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24784) · [Before (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24784)

```diff
-   const gT = null === UT.to.number ? null : new RegExp(`^${(0,pg.j)(UT.to.number)}(?![\\w]|\\.\\d)`).exec(zT);
+   const IB = null === jB.to.number ? null : new RegExp(`^${(0,kI.e)(jB.to.number)}(?![\\w]|\\.\\d)`).exec(nB);
```

#### 2183. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24838` → after: `L24838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24838) · [Before (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24838)

```diff
-       yT = null !== (HT = null !== (kT = jr(aT, iT, tT)) && void 0 !== kT ? kT : jr(aT, iT, Yr(tT, xT))) && void 0 !== HT ? HT : dT && 1 === tT.length && 0 === gr(aT).length ? tT[0] : null;
+       FB = null !== (uB = null !== (UB = pe(DB, gB, HB)) && void 0 !== UB ? UB : pe(DB, gB, ie(HB, qB))) && void 0 !== uB ? uB : fB && 1 === HB.length && 0 === Ne(DB).length ? HB[0] : null;
```

#### 2184. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24848-L24849` → after: `L24848-L24849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24848-L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24848-L24849) · [Before (L24848-L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24848-L24849)

```diff
-     })), QT = ir(qr(null === BT || void 0 === BT ? void 0 : BT.toLowerCase(), ZT, cT), WT), sT = fT + pT.indexOf(cT) - (null !== (jT = null === OT || void 0 === OT || null === (lT = OT[1]) || void 0 === lT ? void 0 : lT.length) && void 0 !== jT ? jT : 0);
-     let FT = `${QT} `,
+     })), hB = te(ge(null === JB || void 0 === JB ? void 0 : JB.toLowerCase(), mB, yB), QB), XB = GB + sB.indexOf(yB) - (null !== (aB = null === SB || void 0 === SB || null === (pB = SB[1]) || void 0 === pB ? void 0 : pB.length) && void 0 !== aB ? aB : 0);
+     let ZB = `${hB} `,
```

#### 2185. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24852` → after: `L24852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24852) · [Before (L24852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24852)

```diff
-     if (null !== IT) FT = `${QT} ${IT.text} after ${JT.slice(0,XT.length)}`, PT = qT + YT.length + XT.length + IT.length, VT = PT;
+     if (null !== VB) ZB = `${hB} ${VB.text} after ${iB.slice(0,YB.length)}`, AB = LB + EB.length + YB.length + VB.length, TB = AB;
```

#### 2186. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24859` → after: `L24859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24859) · [Before (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24859)

```diff
-         FT = `${QT} ${UT.slice(mT[0].length,mT[0].length+WT.length)} after ${TT}`, PT = qT + TT.length + mT[0].length + WT.length, VT = PT
+         ZB = `${hB} ${jB.slice(zB[0].length,zB[0].length+QB.length)} after ${BB}`, AB = LB + BB.length + zB[0].length + QB.length, TB = AB
```

#### 2187. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24862` → after: `L24862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24862) · [Before (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24862)

```diff
-         FT = `${QT} ${/^[a-z][a-z_]*$/.test(TT)&&new RegExp(`\\bthe\\s+${(0,pg.j)(TT)}\\b`,"i").test(aT)?"the ":""}${TT} after `, PT = qT
+         ZB = `${hB} ${/^[a-z][a-z_]*$/.test(BB)&&new RegExp(`\\bthe\\s+${(0,kI.e)(BB)}\\b`,"i").test(DB)?"the ":""}${BB} after `, AB = LB
```

#### 2188. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24888` → after: `L24888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24888) · [Before (L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24888)

```diff
-         OT = null === qT ? jr(cT, fT, iT) : null !== (HT = UT.find((TT => bT.some((UT => Hr(UT, TT)))))) && void 0 !== HT ? HT : null;
+         SB = null === LB ? pe(yB, GB, gB) : null !== (uB = jB.find((BB => tB.some((jB => Ue(jB, BB)))))) && void 0 !== uB ? uB : null;
```

#### 2189. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24891-L24893` → after: `L24891-L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24891-L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24891-L24893) · [Before (L24891-L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24891-L24893)

```diff
-         YT = /[_:]/.test(OT.to.plain) ? `\`${OT.step.to}\`` : OT.to.plain,
-         JT = `${ir(qr(void 0,void 0,pT),WT)} ${null===eT?YT:br(OT.to,eT)}`,
-         xT = BT - (null !== (kT = null === qT || void 0 === qT || null === (jT = qT[1]) || void 0 === jT ? void 0 : jT.length) && void 0 !== kT ? kT : 0);
+         EB = /[_:]/.test(SB.to.plain) ? `\`${SB.step.to}\`` : SB.to.plain,
+         iB = `${te(ge(void 0,void 0,sB),QB)} ${null===MB?EB:Se(SB.to,MB)}`,
+         qB = JB - (null !== (UB = null === LB || void 0 === LB || null === (aB = LB[1]) || void 0 === aB ? void 0 : aB.length) && void 0 !== UB ? UB : 0);
```

#### 2190. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24905` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24905) · [Before (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24905)

```diff
-     const mT = (0, Bg.e)(TT, UT.from.anywhere, KC).at(-1);
+     const zB = (0, GI.h)(BB, jB.from.anywhere, wW).at(-1);
```

#### 2191. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24930` → after: `L24930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24930) · [Before (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24930)

```diff
-         lT = wr.test((0, Bg.s)((0, Bg.s)(HT, zT.to.anywhere, KC, SC), zT.from.anywhere, KC, SC));
+         pB = He.test((0, GI.u)((0, GI.u)(uB, nB.to.anywhere, wW, xW), nB.from.anywhere, wW, xW));
```

#### 2192. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24954` → after: `L24954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24954) · [Before (L24954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24954)

```diff
-   return `${UT[1]}${mT.charAt(0).toUpperCase()}${mT.slice(1)}`
+   return `${jB[1]}${zB.charAt(0).toUpperCase()}${zB.slice(1)}`
```

#### 2193. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24983` → after: `L24983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24983) · [Before (L24983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24983)

```diff
-           mT.push(`- ${TT.join(" ")}`), UT++
+           zB.push(`- ${BB.join(" ")}`), jB++
```

#### 2194. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L24992` → after: `L24992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR24992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L24992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L24992) · [Before (L24992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L24992)

```diff
-     layout: 0 === UT ? TT : {
+     layout: 0 === jB ? BB : {
```

#### 2195. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25005` → after: `L25005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25005) · [Before (L25005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25005)

```diff
-       markdown: `${mT.join("\n")}${UT}${TT.markdown}`.trim()
+       markdown: `${zB.join("\n")}${jB}${BB.markdown}`.trim()
```

#### 2196. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25032` → after: `L25032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25032) · [Before (L25032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25032)

```diff
-   const UT = (0, pg.p)(TT, Fr - 1),
+   const jB = (0, kI.l)(BB, Ae - 1),
```

#### 2197. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25034` → after: `L25034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25034) · [Before (L25034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25034)

```diff
-   return `${(mT>Fr/2?UT.slice(0,mT):UT).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+   return `${(zB>Ae/2?jB.slice(0,zB):jB).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 2198. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25058` → after: `L25058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25058) · [Before (L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25058)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${ur}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${We}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
```

#### 2199. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25070` → after: `L25070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25070) · [Before (L25070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25070)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${Vr}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${ur}(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${Pe}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${We}(?!\w)\s*`, "i"),
```

#### 2200. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25082` → after: `L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25082) · [Before (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25082)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Vr}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${Vr}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Pe}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${Pe}dies?)(?!\w)\s*`, "i"),
```

#### 2201. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25095` → after: `L25095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25095) · [Before (L25095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25095)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${Vr}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${Pe}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2202. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25107` → after: `L25107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25107) · [Before (L25107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25107)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Vr}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Pe}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2203. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25119` → after: `L25119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25119) · [Before (L25119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25119)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Vr}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Pe}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2204. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25129` → after: `L25129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25129) · [Before (L25129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25129)

```diff
-   return /[|&?=<>!,]/.test(UT) ? `(${UT})` : UT
+   return /[|&?=<>!,]/.test(jB) ? `(${jB})` : jB
```

#### 2205. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25135` → after: `L25135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25135) · [Before (L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25135)

```diff
-   return null !== (UT = null !== (mT = null === (WT = /^(.+)\.toString\(\)$/.exec(MT)) || void 0 === WT ? void 0 : WT[1]) && void 0 !== mT ? mT : null === (zT = /^String\((.+)\)$/.exec(MT)) || void 0 === zT ? void 0 : zT[1]) && void 0 !== UT ? UT : TT
+   return null !== (jB = null !== (zB = null === (QB = /^(.+)\.toString\(\)$/.exec(dB)) || void 0 === QB ? void 0 : QB[1]) && void 0 !== zB ? zB : null === (nB = /^String\((.+)\)$/.exec(dB)) || void 0 === nB ? void 0 : nB[1]) && void 0 !== jB ? jB : BB
```

#### 2206. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25145` → after: `L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25145) · [Before (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25145)

```diff
-     return "literal" in mT && new RegExp(String.raw`\b${UT}\s*[:#]?\s*$`, "i").test(mT.literal) && void 0 !== zT && "code" in zT
+     return "literal" in zB && new RegExp(String.raw`\b${jB}\s*[:#]?\s*$`, "i").test(zB.literal) && void 0 !== nB && "code" in nB
```

#### 2207. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25170` → after: `L25170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25170) · [Before (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25170)

```diff
-   if (JQ(zT) && /\p{L}{2}/u.test(zT)) return `"${Cr(zT)}"`;
+   if (oh(nB) && /\p{L}{2}/u.test(nB)) return `"${ee(nB)}"`;
```

#### 2208. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25174` → after: `L25174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25174) · [Before (L25174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25174)

```diff
-   }(MT) ? `\`${MT}\`` : null
+   }(dB) ? `\`${dB}\`` : null
```

#### 2209. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25179` → after: `L25179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25179) · [Before (L25179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25179)

```diff
-   const zT = (null !== (WT = TT.messages) && void 0 !== WT ? WT : []).filter((TT => UT.isMessage(TT) && (null === mT || rr(TT.where).includes(mT)))),
+   const nB = (null !== (QB = BB.messages) && void 0 !== QB ? QB : []).filter((BB => jB.isMessage(BB) && (null === zB || le(BB.where).includes(zB)))),
```

#### 2210. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25201` → after: `L25201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25201) · [Before (L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25201)

```diff
-                   '"' === gT || "'" === gT ? WT = gT : "([{".includes(gT) ? mT++ : ")]}".includes(gT) ? mT-- : "+" === gT && 0 === mT && (UT.push(TT.slice(zT, MT).trim()), zT = MT + 1)
+                   '"' === IB || "'" === IB ? QB = IB : "([{".includes(IB) ? zB++ : ")]}".includes(IB) ? zB-- : "+" === IB && 0 === zB && (jB.push(BB.slice(nB, dB).trim()), nB = dB + 1)
```

#### 2211. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25204` → after: `L25204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25204) · [Before (L25204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25204)

```diff
-               return UT.push(TT.slice(zT).trim()), UT.every((TT => "" !== TT)) ? UT : null
+               return jB.push(BB.slice(nB).trim()), jB.every((BB => "" !== BB)) ? jB : null
```

#### 2212. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25212-L25213` → after: `L25212-L25213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25212-L25213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25212-L25213) · [Before (L25212-L25213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25212-L25213)

```diff
-             }))) && void 0 !== UT ? UT : null
-           }(null !== (mT = null === WT || void 0 === WT ? void 0 : WT[1]) && void 0 !== mT ? mT : UT);
+             }))) && void 0 !== jB ? jB : null
+           }(null !== (zB = null === QB || void 0 === QB ? void 0 : QB[1]) && void 0 !== zB ? zB : jB);
```

#### 2213. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25225` → after: `L25225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25225) · [Before (L25225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25225)

```diff
-       } = gT[0], jT = WT.indexOf(nT, zT[0].length), lT = null !== (UT = null === (mT = /["']/.exec(nT)) || void 0 === mT ? void 0 : mT[0]) && void 0 !== UT ? UT : '"';
+       } = IB[0], aB = QB.indexOf(NB, nB[0].length), pB = null !== (jB = null === (zB = /["']/.exec(NB)) || void 0 === zB ? void 0 : zB[0]) && void 0 !== jB ? jB : '"';
```

#### 2214. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25244` → after: `L25244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25244) · [Before (L25244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25244)

```diff
-   return new Set([...TT.callbacks, ...null !== (UT = TT.functions) && void 0 !== UT ? UT : []].map((TT => {
+   return new Set([...BB.callbacks, ...null !== (jB = BB.functions) && void 0 !== jB ? jB : []].map((BB => {
```

#### 2215. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25259` → after: `L25259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25259) · [Before (L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25259)

```diff
-   if (null === WT || null === zT || cs.test(null !== (mT = zT[1]) && void 0 !== mT ? mT : "") || mK.test(WT.text)) return null;
+   if (null === QB || null === nB || GX.test(null !== (zB = nB[1]) && void 0 !== zB ? zB : "") || Ql.test(QB.text)) return null;
```

#### 2216. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25274` → after: `L25274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25274) · [Before (L25274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25274)

```diff
-       const zT = null !== (UT = null === (mT = TT.ideaPlace) || void 0 === mT ? void 0 : mT.exec(gT)) && void 0 !== UT ? UT : null;
+       const nB = null !== (jB = null === (zB = BB.ideaPlace) || void 0 === zB ? void 0 : zB.exec(IB)) && void 0 !== jB ? jB : null;
```

#### 2217. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25277` → after: `L25277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25277) · [Before (L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25277)

```diff
-         number: null !== (WT = zT[1]) && void 0 !== WT ? WT : null,
+         number: null !== (QB = nB[1]) && void 0 !== QB ? QB : null,
```

#### 2218. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25295-L25297` → after: `L25295-L25297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25295-L25297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25295-L25297) · [Before (L25295-L25297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25295-L25297)

```diff
-   const ZT = null === LT ? "" : `at ${lT.numberWord} ${LT} `,
-     cT = `hange your ${lT.noun} message (${BT}) so ${ZT}it also ${kT.verb} ${kT.after}`;
-   return `${WT.head}${/^[A-Z]/.test(WT.text)?"C":"c"}${cT}`
+   const mB = null === rB ? "" : `at ${pB.numberWord} ${rB} `,
+     yB = `hange your ${pB.noun} message (${JB}) so ${mB}it also ${UB.verb} ${UB.after}`;
+   return `${QB.head}${/^[A-Z]/.test(QB.text)?"C":"c"}${yB}`
```

#### 2219. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25357` → after: `L25357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25357) · [Before (L25357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25357)

```diff
-         player: "broadcastMessage" === MT[3] ? null : null !== (UT = gT[0]) && void 0 !== UT ? UT : null,
+         player: "broadcastMessage" === dB[3] ? null : null !== (jB = IB[0]) && void 0 !== jB ? jB : null,
```

#### 2220. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25359` → after: `L25359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25359) · [Before (L25359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25359)

```diff
-         condition: null !== (mT = MT[2]) && void 0 !== mT ? mT : null,
+         condition: null !== (zB = dB[2]) && void 0 !== zB ? zB : null,
```

#### 2221. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25368-L25369` → after: `L25368-L25369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25368-L25369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25368-L25369) · [Before (L25368-L25369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25368-L25369)

```diff
-       const WT = null === TT.mention ? "join" === TT.kind && "onPlayerJoin" === ZT : TT.mention.test(cT),
-         zT = (null !== (mT = UT.messages) && void 0 !== mT ? mT : []).filter((UT => TT.isMessage(UT) && rr(UT.where).includes(ZT)));
+       const QB = null === BB.mention ? "join" === BB.kind && "onPlayerJoin" === mB : BB.mention.test(yB),
+         nB = (null !== (zB = jB.messages) && void 0 !== zB ? zB : []).filter((jB => BB.isMessage(jB) && le(jB.where).includes(mB)));
```

#### 2222. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25393-L25394` → after: `L25393-L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25393-L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25393-L25394) · [Before (L25393-L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25393-L25394)

```diff
-     JT = null !== qT.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${qT.numberWord}s?\b`, "i").test(cT),
-     xT = null === qT.numberWord || JT ? new Set : new Set((0, pg.q)(cT).filter((TT => !/\d\s*%/.test(TT))).flatMap((TT => [...TT.matchAll(new RegExp(String.raw`\b${qT.numberWord}\s*:?\s*(\d{1,3})\b${ur}`, "gi"))].map((TT => TT[1])))));
+     iB = null !== LB.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${LB.numberWord}s?\b`, "i").test(yB),
+     qB = null === LB.numberWord || iB ? new Set : new Set((0, kI.o)(yB).filter((BB => !/\d\s*%/.test(BB))).flatMap((BB => [...BB.matchAll(new RegExp(String.raw`\b${LB.numberWord}\s*:?\s*(\d{1,3})\b${We}`, "gi"))].map((BB => BB[1])))));
```

#### 2223. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25396` → after: `L25396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25396) · [Before (L25396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25396)

```diff
-   const dT = null !== (mT = null === YT || void 0 === YT ? void 0 : YT[2]) && void 0 !== mT ? mT : 1 === xT.size ? [...xT][0] : null;
+   const fB = null !== (zB = null === EB || void 0 === EB ? void 0 : EB[2]) && void 0 !== zB ? zB : 1 === qB.size ? [...qB][0] : null;
```

#### 2224. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25405` → after: `L25405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25405) · [Before (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25405)

```diff
-   })) && nK.test(TT), XT = null !== (WT = qT.mention) && void 0 !== WT ? WT : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && ul.test(BB), YB = null !== (QB = LB.mention) && void 0 !== QB ? QB : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2225. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25409-L25411` → after: `L25409-L25411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25409-L25411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25409-L25411) · [Before (L25409-L25411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25409-L25411)

```diff
-         mT = null === UT ? TT : TT.slice(UT[0].length),
-         WT = (null === UT ? (0, Bg.v)(mT, /\s+(?=[A-Z`"])/g, (0, Bg.p)(".!?")) : [mT]).some((TT => {
-           const UT = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(TT) ? `${IT} ${TT}` : TT;
+         zB = null === jB ? BB : BB.slice(jB[0].length),
+         QB = (null === jB ? (0, GI.x)(zB, /\s+(?=[A-Z`"])/g, (0, GI.s)(".!?")) : [zB]).some((BB => {
+           const jB = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(BB) ? `${VB} ${BB}` : BB;
```

#### 2226. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25425` → after: `L25425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25425) · [Before (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25425)

```diff
-           literal: `${WT}${/[.!?]$/.test(WT)||""===WT?" ":". "}${UT}`
+           literal: `${QB}${/[.!?]$/.test(QB)||""===QB?" ":". "}${jB}`
```

#### 2227. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25429` → after: `L25429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25429) · [Before (L25429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25429)

```diff
-         literal: `. ${UT}`
+         literal: `. ${jB}`
```

#### 2228. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25440` → after: `L25440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25440) · [Before (L25440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25440)

```diff
-       return mT.map((TT => "literal" in TT ? (0, pg.N)(TT.literal, UT) : TT.code)).join(" + ")
+       return zB.map((BB => "literal" in BB ? (0, kI.M)(BB.literal, jB) : BB.code)).join(" + ")
```

#### 2229. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25442-L25443` → after: `L25442-L25443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25442-L25443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25442-L25443) · [Before (L25442-L25443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25442-L25443)

```diff
-     VT = `${tT.line.slice(0,tT.start)}${tT.isList?`[${PT}]`:PT}${tT.line.slice(tT.end)}`,
-     uT = null === dT ? pT.map((TT => TT === BT.line ? `${BT.indent}${VT}` : TT)) : [`${BT.indent}if (${null!==(zT=null===(MT=BT.condition)||void 0===MT?void 0:MT.trim())&&void 0!==zT?zT:`${Gr(Nr(eT))} === ${dT}`}) ${VT}`, `${BT.indent}else ${tT.line}`],
+     TB = `${HB.line.slice(0,HB.start)}${HB.isList?`[${AB}]`:AB}${HB.line.slice(HB.end)}`,
+     PB = null === fB ? sB.map((BB => BB === JB.line ? `${JB.indent}${TB}` : BB)) : [`${JB.indent}if (${null!==(nB=null===(dB=JB.condition)||void 0===dB?void 0:dB.trim())&&void 0!==nB?nB:`${Ke(Ce(MB))} === ${fB}`}) ${TB}`, `${JB.indent}else ${HB.line}`],
```

#### 2230. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25445` → after: `L25445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25445) · [Before (L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25445)

```diff
-     rT = QT ? `Change your ${qT.noun} message (${wT}) to "${BT.words}"${CT}` : `Change your ${qT.noun} message (${wT}) so ${null===dT?"":`at ${qT.numberWord} ${dT} `}it also says "${BT.words}"${CT}`,
+     eB = hB ? `Change your ${LB.noun} message (${oB}) to "${JB.words}"${WB}` : `Change your ${LB.noun} message (${oB}) so ${null===fB?"":`at ${LB.numberWord} ${fB} `}it also says "${JB.words}"${WB}`,
```

#### 2231. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25464` → after: `L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25464) · [Before (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25464)

```diff
-   const WT = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.messages) && void 0 !== mT ? mT : [];
+   const QB = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.messages) && void 0 !== zB ? zB : [];
```

#### 2232. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25489` → after: `L25489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25489) · [Before (L25489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25489)

```diff
-     return pK(null !== zT && void 0 !== zT ? zT : MT, void 0 === gT ? HT ? "players coming back" : "keeping players" : HT ? "how many players come back" : "how many players stay")
+     return Jl(null !== nB && void 0 !== nB ? nB : dB, void 0 === IB ? uB ? "players coming back" : "keeping players" : uB ? "how many players come back" : "how many players stay")
```

#### 2233. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25503-L25504` → after: `L25503-L25504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25503-L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25503-L25504) · [Before (L25503-L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25503-L25504)

```diff
-       const zT = null !== (mT = TT.match(vK)) && void 0 !== mT ? mT : [],
-         MT = null !== (WT = UT.match(vK)) && void 0 !== WT ? WT : [],
+       const nB = null !== (zB = BB.match(Gl)) && void 0 !== zB ? zB : [],
+         dB = null !== (QB = jB.match(Gl)) && void 0 !== QB ? QB : [],
```

#### 2234. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25517` → after: `L25517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25517) · [Before (L25517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25517)

```diff
-       return "" === HT ? nT : [...nT, HT]
+       return "" === uB ? NB : [...NB, uB]
```

#### 2235. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25534` → after: `L25534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25534) · [Before (L25534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25534)

```diff
-   } = UT, BT = Hp(MT), ZT = ep(MT, BT), cT = Yp(tL(MT), ZT), vT = Yp(function(TT) {
+   } = jB, JB = as(dB), mB = qs(dB, JB), yB = fs(Dr(dB), mB), kB = fs(function(BB) {
```

#### 2236. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25542` → after: `L25542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25542) · [Before (L25542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25542)

```diff
-       zT.set(jT.name, (null !== (MT = zT.get(jT.name)) && void 0 !== MT ? MT : 0) + 1)
+       nB.set(aB.name, (null !== (dB = nB.get(aB.name)) && void 0 !== dB ? dB : 0) + 1)
```

#### 2237. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25550-L25551` → after: `L25550-L25551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25550-L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25550-L25551) · [Before (L25550-L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25550-L25551)

```diff
-         LT = null !== (gT = jT.usedIn) && void 0 !== gT ? gT : "",
-         pT = void 0 === MT ? null : null !== (nT = EL(MT)) && void 0 !== nT ? nT : null;
+         rB = null !== (IB = aB.usedIn) && void 0 !== IB ? IB : "",
+         sB = void 0 === dB ? null : null !== (NB = cr(dB)) && void 0 !== NB ? NB : null;
```

#### 2238. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25558` → after: `L25558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25558) · [Before (L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25558)

```diff
-         value: null !== (HT = null === MT || void 0 === MT ? void 0 : MT.value) && void 0 !== HT ? HT : TT,
+         value: null !== (uB = null === dB || void 0 === dB ? void 0 : dB.value) && void 0 !== uB ? uB : BB,
```

#### 2239. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25560` → after: `L25560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25560) · [Before (L25560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25560)

```diff
-         codeKind: null === ZT ? pT : null,
+         codeKind: null === mB ? sB : null,
```

#### 2240. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25562` → after: `L25562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25562) · [Before (L25562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25562)

```diff
-         hazard: null !== (kT = null === ZT || void 0 === ZT ? void 0 : ZT.hazard) && void 0 !== kT ? kT : null,
+         hazard: null !== (UB = null === mB || void 0 === mB ? void 0 : mB.hazard) && void 0 !== UB ? UB : null,
```

#### 2241. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25570` → after: `L25570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25570) · [Before (L25570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25570)

```diff
-   }(MT), ZT), fT = Yp(Sd(MT), ZT), qT = null !== (mT = null === gT || void 0 === gT ? void 0 : gT.places) && void 0 !== mT ? mT : cK, iT = null !== (WT = null === HT || void 0 === HT ? void 0 : HT.grounds) && void 0 !== WT ? WT : null, bT = (() => {
+   }(dB), mB), GB = fs(Kf(dB), mB), LB = null !== (zB = null === IB || void 0 === IB ? void 0 : IB.places) && void 0 !== zB ? zB : kl, gB = null !== (QB = null === uB || void 0 === uB ? void 0 : uB.grounds) && void 0 !== QB ? QB : null, tB = (() => {
```

#### 2242. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25591` → after: `L25591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25591) · [Before (L25591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25591)

```diff
-             const UT = (null !== (zT = WT.get(TT.name)) && void 0 !== zT ? zT : []).filter((TT => JSON.stringify(TT.selection) !== JSON.stringify(cT.selection)));
+             const jB = (null !== (nB = QB.get(BB.name)) && void 0 !== nB ? nB : []).filter((BB => JSON.stringify(BB.selection) !== JSON.stringify(yB.selection)));
```

#### 2243. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25603` → after: `L25603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25603) · [Before (L25603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25603)

```diff
-         const [gT, [nT]] = MT[0], HT = new RegExp(`${(0,pg.j)(gT)}(?![\\w$])`);
+         const [IB, [NB]] = dB[0], uB = new RegExp(`${(0,kI.e)(IB)}(?![\\w$])`);
```

#### 2244. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25617` → after: `L25617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25617) · [Before (L25617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25617)

```diff
-           if (kT || !jT || /^\s*[#|]/.test(vT) || Rf.test(vT) || 0 === (0, Bg.e)(vT.replace(/\[\[[^\]\n]+\]\]/g, " "), HT, Bg.n).length) continue;
+           if (UB || !aB || /^\s*[#|]/.test(kB) || jL.test(kB) || 0 === (0, GI.h)(kB.replace(/\[\[[^\]\n]+\]\]/g, " "), uB, GI.m).length) continue;
```

#### 2245. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25622` → after: `L25622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25622) · [Before (L25622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25622)

```diff
-           const UT = null !== (LT = null === (pT = Af.exec(vT)) || void 0 === pT ? void 0 : pT[0].length) && void 0 !== LT ? LT : 0,
+           const jB = null !== (rB = null === (sB = BL.exec(kB)) || void 0 === sB ? void 0 : sB[0].length) && void 0 !== rB ? rB : 0,
```

#### 2246. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25630` → after: `L25630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25630) · [Before (L25630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25630)

```diff
-             MT = zT + (null !== (BT = null === (ZT = Md.exec(vT.slice(zT))) || void 0 === ZT ? void 0 : ZT[0].length) && void 0 !== BT ? BT : 0),
+             dB = nB + (null !== (JB = null === (mB = uf.exec(kB.slice(nB))) || void 0 === mB ? void 0 : mB[0].length) && void 0 !== JB ? JB : 0),
```

#### 2247. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25632-L25633` → after: `L25632-L25633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25632-L25633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25632-L25633) · [Before (L25632-L25633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25632-L25633)

```diff
-             fT = `${gd(nT)} [[Heatmap]].`;
-           return lT[cT] = `${vT.slice(0,MT)}${gT} ${fT}${vT.slice(MT)}`, {
+             GB = `${Uf(NB)} [[Heatmap]].`;
+           return pB[yB] = `${kB.slice(0,dB)}${IB} ${GB}${kB.slice(dB)}`, {
```

#### 2248. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25649` → after: `L25649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25649) · [Before (L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25649)

```diff
-       }(HT.markdown, [...null !== LT && void 0 !== LT ? LT : [], ...null !== pT && void 0 !== pT ? pT : []], MT);
+       }(uB.markdown, [...null !== rB && void 0 !== rB ? rB : [], ...null !== sB && void 0 !== sB ? sB : []], dB);
```

#### 2249. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25657-L25659` → after: `L25657-L25659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25657-L25659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25657-L25659) · [Before (L25657-L25659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25657-L25659)

```diff
-     const TT = [...(null !== lT && void 0 !== lT ? lT : []).flatMap((TT => [TT.reason, TT.typical])), ...bT.repairs.map((TT => TT.to))];
-     return kf(kT, null === jT ? TT : [jT.change, ...TT])
-   })(), eT = new Set((null !== lT && void 0 !== lT ? lT : []).flatMap((TT => "good" === TT.verdict ? [TT.key] : []))), YT = Ac(nT), JT = px(iT, MT), xT = bT.markdown, dT = null === HT ? xT : Xu(xT, HT, eT, "young" === nT, OT).markdown, wT = YT ? CJ(dT, (tT = gT, null === tT ? []  … [truncated]
+     const BB = [...(null !== pB && void 0 !== pB ? pB : []).flatMap((BB => [BB.reason, BB.typical])), ...tB.repairs.map((BB => BB.to))];
+     return sG(UB, null === aB ? BB : [aB.change, ...BB])
+   })(), MB = new Set((null !== pB && void 0 !== pB ? pB : []).flatMap((BB => "good" === BB.verdict ? [BB.key] : []))), EB = jk(NB), iB = yq(gB, dB), qB = tB.markdown, fB = null === uB ? qB : VP(qB, uB, MB, "young" === NB, SB).markdown, oB = EB ? wi(fB, (HB = IB, null === HB ? []  … [truncated]
```

#### 2250. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25678` → after: `L25678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25678) · [Before (L25678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25678)

```diff
-         markdown: 0 === zT.length ? TT : MT,
+         markdown: 0 === nB.length ? BB : dB,
```

#### 2251. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25707` → after: `L25707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25707) · [Before (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25707)

```diff
-         return `${TT.slice(0,zT.end)}${gT}${TT.slice(MT)}`
+         return `${BB.slice(0,nB.end)}${IB}${BB.slice(dB)}`
```

#### 2252. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25745` → after: `L25745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25745) · [Before (L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25745)

```diff
-         markdown: 0 === UT.length ? TT : mT,
+         markdown: 0 === jB.length ? BB : zB,
```

#### 2253. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25762` → after: `L25762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25762) · [Before (L25762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25762)

```diff
-           const UT = `the ${TT}`;
+           const jB = `the ${BB}`;
```

#### 2254. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25773` → after: `L25773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25773) · [Before (L25773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25773)

```diff
-         of mT) zT = (0, Bg.s)(zT, new RegExp(`(${(0,pg.j)(MT)})(?![\\w-])`, "gi"), (0, Bg.j)("\\w-"), (TT => {
+         of zB) nB = (0, GI.u)(nB, new RegExp(`(${(0,kI.e)(dB)})(?![\\w-])`, "gi"), (0, GI.k)("\\w-"), (BB => {
```

#### 2255. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25775` → after: `L25775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25775) · [Before (L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25775)

```diff
-         return /^T/.test(UT) ? `T${gT.slice(1)}` : gT
+         return /^T/.test(jB) ? `T${IB.slice(1)}` : IB
```

#### 2256. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25782` → after: `L25782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25782) · [Before (L25782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25782)

```diff
-     sT = [...null !== LT && void 0 !== LT ? LT : [], ...null !== pT && void 0 !== pT ? pT : []].flatMap((TT => "deaths" === TT.kind ? [TT.square] : [])),
+     XB = [...null !== rB && void 0 !== rB ? rB : [], ...null !== sB && void 0 !== sB ? sB : []].flatMap((BB => "deaths" === BB.kind ? [BB.square] : [])),
```

#### 2257. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25785` → after: `L25785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25785) · [Before (L25785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25785)

```diff
-       if (null === UT || void 0 === UT || TT.length > pg.r) return {
+       if (null === jB || void 0 === jB || BB.length > kI.p) return {
```

#### 2258. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25787` → after: `L25787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25787) · [Before (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25787)

```diff
-         Jp: []
+         Cs: []
```

#### 2259. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25813` → after: `L25813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25813) · [Before (L25813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25813)

```diff
-         Jp: []
+         Cs: []
```

#### 2260. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25816` → after: `L25816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25816) · [Before (L25816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25816)

```diff
-         Jp: WT
+         Cs: QB
```

#### 2261. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25829` → after: `L25829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25829) · [Before (L25829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25829)

```diff
-       if (null === UT || void 0 === UT || TT.length > pg.r) return {
+       if (null === jB || void 0 === jB || BB.length > kI.p) return {
```

#### 2262. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25840` → after: `L25840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25840) · [Before (L25840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25840)

```diff
-         nT = `${null!==mT&&void 0!==mT?mT:""}\n${gT}\n${gT.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         NB = `${null!==zB&&void 0!==zB?zB:""}\n${IB}\n${IB.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2263. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25849` → after: `L25849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25849) · [Before (L25849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25849)

```diff
-     }(PT, MT, null !== (zT = null === JT || void 0 === JT ? void 0 : JT.text) && void 0 !== zT ? zT : null, VT).markdown,
+     }(AB, dB, null !== (nB = null === iB || void 0 === iB ? void 0 : iB.text) && void 0 !== nB ? nB : null, TB).markdown,
```

#### 2264. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25853` → after: `L25853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25853) · [Before (L25853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25853)

```diff
-           if (null === UT || void 0 === UT || TT.length > pg.r || 0 === (null !== (mT = UT.messages) && void 0 !== mT ? mT : []).length) return {
+           if (null === jB || void 0 === jB || BB.length > kI.p || 0 === (null !== (zB = jB.messages) && void 0 !== zB ? zB : []).length) return {
```

#### 2265. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25891` → after: `L25891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25891) · [Before (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25891)

```diff
-         zT = null === WT || null === MT ? WT : {
+         nB = null === QB || null === dB ? QB : {
```

#### 2266. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25916` → after: `L25916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25916) · [Before (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25916)

```diff
-           return null === TT || 0 === mT.length ? TT : {
+           return null === BB || 0 === zB.length ? BB : {
```

#### 2267. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25920` → after: `L25920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25920) · [Before (L25920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25920)

```diff
-         }(null !== (TT = null === HT || void 0 === HT ? void 0 : HT.grounds) && void 0 !== TT ? TT : null, bT.repairs),
+         }(null !== (BB = null === uB || void 0 === uB ? void 0 : uB.grounds) && void 0 !== BB ? BB : null, tB.repairs),
```

#### 2268. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25928` → after: `L25928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25928) · [Before (L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25928)

```diff
-             mT = null === gT ? UT : sq(UT, gT, OT).markdown;
+             zB = null === IB ? jB : AL(jB, IB, SB).markdown;
```

#### 2269. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L25966` → after: `L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR25966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L25966) · [Before (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L25966)

```diff
-         layout: 0 === UT ? CT : {
+         layout: 0 === jB ? WB : {
```

#### 2270. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26001` → after: `L26001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26001) · [Before (L26001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26001)

```diff
-     AT = null === OT || null === GT || null === DT || DT === GT ? OT : kf(OT, fK(GT, DT));
+     RB = null === SB || null === xB || null === bB || bB === xB ? SB : sG(SB, Ll(xB, bB));
```

#### 2271. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26045` → after: `L26045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26045) · [Before (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26045)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,pg.j)(UT)}(?![\\w$])`, "i").test(TT)
+   return new RegExp(`(?:^|[^\\w$])${(0,kI.e)(jB)}(?![\\w$])`, "i").test(BB)
```

#### 2272. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26053` → after: `L26053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26053) · [Before (L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26053)

```diff
-   return (0, Bg.e)(TT, /[A-Za-z_$][\w$]*(?![\w$])/g, Bg.n).map((TT => {
+   return (0, GI.h)(BB, /[A-Za-z_$][\w$]*(?![\w$])/g, GI.m).map((BB => {
```

#### 2273. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26062` → after: `L26062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26062) · [Before (L26062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26062)

```diff
-     WT = null !== (UT = new RegExp(String.raw`^\s*${mT}\s*===?\s*(-?\d+)\s*$`).exec(TT)) && void 0 !== UT ? UT : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${mT}\s*$`).exec(TT);
+     QB = null !== (jB = new RegExp(String.raw`^\s*${zB}\s*===?\s*(-?\d+)\s*$`).exec(BB)) && void 0 !== jB ? jB : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${zB}\s*$`).exec(BB);
```

#### 2274. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26073` → after: `L26073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26073) · [Before (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26073)

```diff
-   const WT = new Set([...UT.callbacks, ...null !== (mT = UT.functions) && void 0 !== mT ? mT : []].map((TT => {
+   const QB = new Set([...jB.callbacks, ...null !== (zB = jB.functions) && void 0 !== zB ? zB : []].map((BB => {
```

#### 2275. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26091` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26091) · [Before (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26091)

```diff
-         const MT = new RegExp(`^${(0,pg.j)(UT)} (\\d{1,4})$`).exec(TT);
+         const dB = new RegExp(`^${(0,kI.e)(jB)} (\\d{1,4})$`).exec(BB);
```

#### 2276. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26098` → after: `L26098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26098) · [Before (L26098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26098)

```diff
-         else if (TT.startsWith(`${UT}: `) && TT.length > UT.length + 2) {
+         else if (BB.startsWith(`${jB}: `) && BB.length > jB.length + 2) {
```

#### 2277. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26130` → after: `L26130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26130) · [Before (L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26130)

```diff
-   const gT = rK(zT, `${mT}\n${UT}`, WT)[0],
+   const IB = ll(nB, `${zB}\n${jB}`, QB)[0],
```

#### 2278. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26138` → after: `L26138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26138) · [Before (L26138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26138)

```diff
-       const WT = [...UT.callbacks, ...null !== (mT = UT.functions) && void 0 !== mT ? mT : []].filter((UT => UT.name === TT));
+       const QB = [...jB.callbacks, ...null !== (zB = jB.functions) && void 0 !== zB ? zB : []].filter((jB => jB.name === BB));
```

#### 2279. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26166` → after: `L26166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26166) · [Before (L26166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26166)

```diff
-       const kT = null !== (WT = null === (zT = TT.valueExpression) || void 0 === zT ? void 0 : zT.trim()) && void 0 !== WT ? WT : null;
+       const UB = null !== (QB = null === (nB = BB.valueExpression) || void 0 === nB ? void 0 : nB.trim()) && void 0 !== QB ? QB : null;
```

#### 2280. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26172` → after: `L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26172) · [Before (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26172)

```diff
-             zT = cT === dK[0] || cT === dK[3] || WT !== mT || /^[A-Za-z_$][\w$.]*$/.test(null !== mT && void 0 !== mT ? mT : "");
+             nB = yB === ol[0] || yB === ol[3] || QB !== zB || /^[A-Za-z_$][\w$.]*$/.test(null !== zB && void 0 !== zB ? zB : "");
```

#### 2281. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26174` → after: `L26174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26174) · [Before (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26174)

```diff
-             HT = `${WT} === ${Number(UT)}`;
+             uB = `${QB} === ${Number(jB)}`;
```

#### 2282. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26179-L26180` → after: `L26179-L26180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26179-L26180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26179-L26180) · [Before (L26179-L26180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26179-L26180)

```diff
-         lT = null === jT ? null : null !== (MT = null !== (gT = null !== (nT = jT[1]) && void 0 !== nT ? nT : jT[2]) && void 0 !== gT ? gT : jT[3]) && void 0 !== MT ? MT : null,
-         LT = null !== lT && void 0 !== lT ? lT : TT.numberExpression,
+         pB = null === aB ? null : null !== (dB = null !== (IB = null !== (NB = aB[1]) && void 0 !== NB ? NB : aB[2]) && void 0 !== IB ? IB : aB[3]) && void 0 !== dB ? dB : null,
+         rB = null !== pB && void 0 !== pB ? pB : BB.numberExpression,
```

#### 2283. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26187-L26188` → after: `L26187-L26188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26187-L26188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26187-L26188) · [Before (L26187-L26188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26187-L26188)

```diff
-           WT = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,pg.j)(TT)}(?![\\w$])`).test(kT);
-         VK(kT).includes(TT) && mT >= 0 && (null !== lT || !WT) && (HT = `${TT} === ${mT}`)
+           QB = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,kI.e)(BB)}(?![\\w$])`).test(UB);
+         Pl(UB).includes(BB) && zB >= 0 && (null !== pB || !QB) && (uB = `${BB} === ${zB}`)
```

#### 2284. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26191` → after: `L26191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26191) · [Before (L26191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26191)

```diff
-       return null !== HT && VK(HT).every((TT => ZT.has(TT))) ? HT : null
+       return null !== uB && Pl(uB).every((BB => mB.has(BB))) ? uB : null
```

#### 2285. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26206` → after: `L26206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26206) · [Before (L26206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26206)

```diff
-   const eT = (null !== (MT = WT.messages) && void 0 !== MT ? MT : []).filter((TT => {
+   const MB = (null !== (dB = QB.messages) && void 0 !== dB ? dB : []).filter((BB => {
```

#### 2286. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26210` → after: `L26210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26210) · [Before (L26210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26210)

```diff
-     YT = 1 !== eT.length || bK.test(`${mT}\n${UT}`) ? nT : eT[0].at;
+     EB = 1 !== MB.length || Sl.test(`${zB}\n${jB}`) ? NB : MB[0].at;
```

#### 2287. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26224` → after: `L26224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26224) · [Before (L26224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26224)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${mT}(?![\\w$])`).test(TT) || (0, Bg.e)(TT, new RegExp(`${mT}\\s*=(?![=>])`), Bg.n).length > 0 || OB(TT, UT) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${mT}\\s*\\([^()]*\\)\\s*\\{`, "m").test(TT)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${zB}(?![\\w$])`).test(BB) || (0, GI.h)(BB, new RegExp(`${zB}\\s*=(?![=>])`), GI.m).length > 0 || EJ(BB, jB) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${zB}\\s*\\([^()]*\\)\\s*\\{`, "m").test(BB)
```

#### 2288. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26233` → after: `L26233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26233) · [Before (L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26233)

```diff
-   for (const [, MT] of(0, Bg.e)(WT, NK, Bg.n)) {
+   for (const [, dB] of(0, GI.h)(QB, Cl, GI.m)) {
```

#### 2289. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26254` → after: `L26254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26254) · [Before (L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26254)

```diff
-   const WT = [...UT.playerText, ...(null !== (mT = UT.messages) && void 0 !== mT ? mT : []).map((TT => {
+   const QB = [...jB.playerText, ...(null !== (zB = jB.messages) && void 0 !== zB ? zB : []).map((BB => {
```

#### 2290. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26263-L26264` → after: `L26263-L26264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26263-L26264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26263-L26264) · [Before (L26263-L26264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26263-L26264)

```diff
-     const TT = null !== (MT = null !== (gT = null !== (nT = HT[1]) && void 0 !== nT ? nT : HT[2]) && void 0 !== gT ? gT : HT[3]) && void 0 !== MT ? MT : HT[4];
-     for (const [UT] of(0, Bg.e)(TT, oK, (0, Bg.j)("\\w/:."))) {
+     const BB = null !== (dB = null !== (IB = null !== (NB = uB[1]) && void 0 !== NB ? NB : uB[2]) && void 0 !== IB ? IB : uB[3]) && void 0 !== dB ? dB : uB[4];
+     for (const [jB] of(0, GI.h)(BB, Rl, (0, GI.k)("\\w/:."))) {
```

#### 2291. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26295` → after: `L26295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26295) · [Before (L26295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26295)

```diff
-     for (const nT of (0, Bg.e)(TT, yb, Bg.n)) Pb(nT[0], UT, mT, WT) || (nT.index > gT && MT.push({
+     for (const NB of (0, GI.h)(BB, Yt, GI.m)) Tt(NB[0], jB, zB, QB) || (NB.index > IB && dB.push({
```

#### 2292. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26305` → after: `L26305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26305) · [Before (L26305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26305)

```diff
-     title: !0 === TT.isApiCall ? nT : gT("Not found in your code"),
+     title: !0 === BB.isApiCall ? NB : IB("Not found in your code"),
```

#### 2293. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26307` → after: `L26307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26307) · [Before (L26307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26307)

```diff
-   }, `${UT}-name-${mT}`) : TT.text))
+   }, `${jB}-name-${zB}`) : BB.text))
```

#### 2294. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26334` → after: `L26334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26334) · [Before (L26334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26334)

```diff
-   }, `${mT}-number-${UT}`)] : mS(TT.text, `${mT}-${UT}`, WT)))
+   }, `${zB}-number-${jB}`)] : Qw(BB.text, `${zB}-${jB}`, QB)))
```

#### 2295. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26338` → after: `L26338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26338) · [Before (L26338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26338)

```diff
-   return null === TT.suggestion ? UT("Not a Bloxd item") : `${UT("Not a Bloxd item")}: ${UT("Bloxd writes it")} "${TT.suggestion}"`
+   return null === BB.suggestion ? jB("Not a Bloxd item") : `${jB("Not a Bloxd item")}: ${jB("Bloxd writes it")} "${BB.suggestion}"`
```

#### 2296. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26349` → after: `L26349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26349) · [Before (L26349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26349)

```diff
-   for (const kT of gT) nT.push(...mS(TT.slice(HT, kT.start), `${UT}-${HT}`, mT, WT)), nT.push((0, lU.jsx)("span", {
+   for (const UB of IB) NB.push(...Qw(BB.slice(uB, UB.start), `${jB}-${uB}`, zB, QB)), NB.push((0, pj.jsx)("span", {
```

#### 2297. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26353-L26354` → after: `L26353-L26354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26353-L26354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26353-L26354) · [Before (L26353-L26354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26353-L26354)

```diff
-   }, `${UT}-item-${kT.start}`)), HT = kT.end;
-   return nT.push(...mS(TT.slice(HT), `${UT}-${HT}`, mT, WT)), nT
+   }, `${jB}-item-${UB.start}`)), uB = UB.end;
+   return NB.push(...Qw(BB.slice(uB), `${jB}-${uB}`, zB, QB)), NB
```

#### 2298. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26369` → after: `L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26369) · [Before (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26369)

```diff
-     LT <= MT || (MT > nT && gT.push(...WS(TT.slice(nT, MT), UT + TT.slice(0, nT), `${WT}-${nT}`, zT)), gT.push((0, lU.jsx)("span", {
+     rB <= dB || (dB > NB && IB.push(...nw(BB.slice(NB, dB), jB + BB.slice(0, NB), `${QB}-${NB}`, nB)), IB.push((0, pj.jsx)("span", {
```

#### 2299. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26373` → after: `L26373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26373) · [Before (L26373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26373)

```diff
-     }, `${WT}-marked-${MT}`)), nT = LT)
+     }, `${QB}-marked-${dB}`)), NB = rB)
```

#### 2300. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26375` → after: `L26375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26375) · [Before (L26375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26375)

```diff
-   return 0 === nT ? WS(TT, UT, WT, zT) : (nT < TT.length && gT.push(...WS(TT.slice(nT), UT + TT.slice(0, nT), `${WT}-${nT}`, zT)), gT)
+   return 0 === NB ? nw(BB, jB, QB, nB) : (NB < BB.length && IB.push(...nw(BB.slice(NB), jB + BB.slice(0, NB), `${QB}-${NB}`, nB)), IB)
```

#### 2301. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26386` → after: `L26386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26386) · [Before (L26386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26386)

```diff
-     title: `${mT("What your code says")}: ${UT.hint}`,
+     title: `${zB("What your code says")}: ${jB.hint}`,
```

#### 2302. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26400` → after: `L26400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26400) · [Before (L26400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26400)

```diff
-     title: `${mT("Worked out by Studio from your code")}:\n${UT.hint}`,
+     title: `${zB("Worked out by Studio from your code")}:\n${jB.hint}`,
```

#### 2303. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26440` → after: `L26440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26440) · [Before (L26440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26440)

```diff
-       }, `${UT}-note-${gT}`))
+       }, `${jB}-note-${IB}`))
```

#### 2304. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26446-L26447` → after: `L26446-L26447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26446-L26447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26446-L26447) · [Before (L26446-L26447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26446-L26447)

```diff
-         const HT = Math.min(kT, Math.max(jT, null !== (lT = null === (LT = MT[gT]) || void 0 === LT ? void 0 : LT.end) && void 0 !== lT ? lT : kT));
-         HT > jT && WT.push(...gS(TT.slice(jT, HT), TT.slice(0, jT), jT, `${UT}-${jT}`, mT, zT)), jT = HT, nT(jT)
+         const uB = Math.min(UB, Math.max(aB, null !== (pB = null === (rB = dB[IB]) || void 0 === rB ? void 0 : rB.end) && void 0 !== pB ? pB : UB));
+         uB > aB && QB.push(...Nw(BB.slice(aB, uB), BB.slice(0, aB), aB, `${jB}-${aB}`, zB, nB)), aB = uB, NB(aB)
```

#### 2305. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26451` → after: `L26451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26451) · [Before (L26451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26451)

```diff
-   for (const pT of TT.matchAll(eX.d)) {
+   for (const sB of BB.matchAll(qY.g)) {
```

#### 2306. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26453` → after: `L26453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26453) · [Before (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26453)

```diff
-     const [, MT, gT, BT, ZT, cT, vT] = pT, fT = `${UT}-${pT.index}`, qT = TT.slice(0, pT.index);
+     const [, dB, IB, JB, mB, yB, kB] = sB, GB = `${jB}-${sB.index}`, LB = BB.slice(0, sB.index);
```

#### 2307. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26458` → after: `L26458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26458) · [Before (L26458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26458)

```diff
-         children: gS(null !== (jT = null !== BT && void 0 !== BT ? BT : ZT) && void 0 !== jT ? jT : "", qT, pT.index + 2, fT, mT, zT)
+         children: Nw(null !== (aB = null !== JB && void 0 !== JB ? JB : mB) && void 0 !== aB ? aB : "", LB, sB.index + 2, GB, zB, nB)
```

#### 2308. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26472` → after: `L26472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26472) · [Before (L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26472)

```diff
-           children: MS(null !== vT && void 0 !== vT ? vT : "", fT, mT, "code")
+           children: Iw(null !== kB && void 0 !== kB ? kB : "", GB, zB, "code")
```

#### 2309. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26474` → after: `L26474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26474) · [Before (L26474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26474)

```diff
-         MT = void 0 === TT ? LB(null !== vT && void 0 !== vT ? vT : "") : null;
+         dB = void 0 === BB ? JJ(null !== kB && void 0 !== kB ? kB : "") : null;
```

#### 2310. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26477` → after: `L26477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26477) · [Before (L26477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26477)

```diff
-         title: (lT = MT, LT = mT.t, `${LT("World Code has no")} ${lT}, ${LT("so this code won't run")}`),
+         title: (pB = dB, rB = zB.t, `${rB("World Code has no")} ${pB}, ${rB("so this code won't run")}`),
```

#### 2311. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26479` → after: `L26479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26479) · [Before (L26479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26479)

```diff
-       }, fT) : void 0 === TT ? UT : (0, lU.jsx)("span", {
+       }, GB) : void 0 === BB ? jB : (0, pj.jsx)("span", {
```

#### 2312. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26507` → after: `L26507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26507) · [Before (L26507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26507)

```diff
-     }), void 0 === HT ? nT : (0, lU.jsxs)(lU.Fragment, {
+     }), void 0 === uB ? NB : (0, pj.jsxs)(pj.Fragment, {
```

#### 2313. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26530` → after: `L26530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26530) · [Before (L26530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26530)

```diff
-   ZS = new RegExp(`${pS}([${String.fromCharCode(BS)}-${String.fromCharCode(63743)}])`, "g");
+   yw = new RegExp(`${Jw}([${String.fromCharCode(mw)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2314. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26534` → after: `L26534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26534) · [Before (L26534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26534)

```diff
-     WT = TT.replace(lS, ((TT, UT) => LS.test(UT) ? TT : UT.startsWith("[[") && UT.endsWith("]]") && null !== gW(UT.slice(2, -2)) ? UT : (mT.push(TT), pS + String.fromCharCode(BS + mT.length - 1)))),
+     QB = BB.replace(rw, ((BB, jB) => sw.test(jB) ? BB : jB.startsWith("[[") && jB.endsWith("]]") && null !== dQ(jB.slice(2, -2)) ? jB : (zB.push(BB), Jw + String.fromCharCode(mw + zB.length - 1)))),
```

#### 2315. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26541` → after: `L26541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26541) · [Before (L26541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26541)

```diff
-         "" !== TT && ("text" === (null === mT || void 0 === mT ? void 0 : mT.kind) ? mT.text += TT : UT.push({
+         "" !== BB && ("text" === (null === zB || void 0 === zB ? void 0 : zB.kind) ? zB.text += BB : jB.push({
```

#### 2316. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26559` → after: `L26559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26559) · [Before (L26559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26559)

```diff
-         const LT = null !== (MT = null === (gT = HW.exec(TT.slice(WT))) || void 0 === gT ? void 0 : gT[0]) && void 0 !== MT ? MT : "";
+         const rB = null !== (dB = null === (IB = NQ.exec(BB.slice(QB))) || void 0 === IB ? void 0 : IB[0]) && void 0 !== dB ? dB : "";
```

#### 2317. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26583` → after: `L26583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26583) · [Before (L26583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26583)

```diff
-       const pT = BL(Number((null !== (LT = null !== zT && void 0 !== zT ? zT : gT) && void 0 !== LT ? LT : "").replace(/,/g, "")), null !== MT && void 0 !== MT ? MT : nT, Number(HT.replace(/,/g, "")), kT);
+       const sB = mr(Number((null !== (rB = null !== nB && void 0 !== nB ? nB : IB) && void 0 !== rB ? rB : "").replace(/,/g, "")), null !== dB && void 0 !== dB ? dB : NB, Number(uB.replace(/,/g, "")), UB);
```

#### 2318. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26588` → after: `L26588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26588) · [Before (L26588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26588)

```diff
-       return void 0 === vT ? TT : `${cL(vT,UT)}${TT.slice(UT.length)}`
+       return void 0 === kB ? BB : `${kr(kB,jB)}${BB.slice(jB.length)}`
```

#### 2319. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26607` → after: `L26607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26607) · [Before (L26607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26607)

```diff
-   return void 0 === TT[3] || !(0, Bg.d)(TT, "*\\w")
+   return void 0 === BB[3] || !(0, GI.e)(BB, "*\\w")
```

#### 2320. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26617` → after: `L26617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26617) · [Before (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26617)

```diff
-     return (0, Bg.s)(TT, fS, qS, (TT => {
+     return (0, GI.u)(BB, Lw, gw, (BB => {
```

#### 2321. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26623-L26624` → after: `L26623-L26624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26623-L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26623-L26624) · [Before (L26623-L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26623-L26624)

```diff
-       const gT = null !== WT && void 0 !== WT ? WT : "*";
-       return (null !== zT && void 0 !== zT ? zT : MT).split(/(\[\[[^\]\n]+\]\])/).map(((TT, UT) => {
+       const IB = null !== QB && void 0 !== QB ? QB : "*";
+       return (null !== nB && void 0 !== nB ? nB : dB).split(/(\[\[[^\]\n]+\]\])/).map(((BB, jB) => {
```

#### 2322. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26628` → after: `L26628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26628) · [Before (L26628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26628)

```diff
-         return `${mT}${gT}${TT.trim()}${gT}${WT}`
+         return `${zB}${IB}${BB.trim()}${IB}${QB}`
```

#### 2323. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26641-L26642` → after: `L26641-L26642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26641-L26642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26641-L26642) · [Before (L26641-L26642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26641-L26642)

```diff
-         pT = null === LT || "heatmap" !== TT.link.key ? LT : Yg(dg(LT, null === (kT = mT.checkData) || void 0 === kT ? void 0 : kT.heatmapEvents), lT),
-         BT = null !== pT || "heatmap" !== TT.link.key ? pT : ry(tg(nT(WT), gT(WT + 1, MT.length) + zT), {
+         sB = null === rB || "heatmap" !== BB.link.key ? rB : oI(FI(rB, null === (UB = zB.checkData) || void 0 === UB ? void 0 : UB.heatmapEvents), pB),
+         JB = null !== sB || "heatmap" !== BB.link.key ? sB : xF(VI(NB(QB), IB(QB + 1, dB.length) + nB), {
```

#### 2324. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26650` → after: `L26650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26650) · [Before (L26650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26650)

```diff
-       }, `${UT}stat-${WT}`)]
+       }, `${jB}stat-${QB}`)]
```

#### 2325. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26652` → after: `L26652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26652) · [Before (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26652)

```diff
-     return kS(TT.text, `${UT}${WT}`, mT)
+     return aw(BB.text, `${jB}${QB}`, zB)
```

#### 2326. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26667` → after: `L26667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26667) · [Before (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26667)

```diff
-     }), null === UT ? mT("Studio has no data on this: a guess") : `${mT("Only")} ${UT} ${mT("players so far: a guess")}`]
+     }), null === jB ? zB("Studio has no data on this: a guess") : `${zB("Only")} ${jB} ${zB("players so far: a guess")}`]
```

#### 2327. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26680` → after: `L26680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26680) · [Before (L26680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26680)

```diff
-     title: `${mT("What your code says")}: ${UT.hint}`,
+     title: `${zB("What your code says")}: ${jB.hint}`,
```

#### 2328. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26709` → after: `L26709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26709) · [Before (L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26709)

```diff
-         }), " ", mT("events"), "" === TT.category ? "" : ` ${mT("in")} ${TT.category}`, " ", mT("are at"), " ", TT.text]
+         }), " ", zB("events"), "" === BB.category ? "" : ` ${zB("in")} ${BB.category}`, " ", zB("are at"), " ", BB.text]
```

#### 2329. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26741` → after: `L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26741) · [Before (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26741)

```diff
-     }), mT ? `${UT.from} ${WT("also leads to")} ${UT.other}, ${WT("so players who didn't get to")} ${UT.to} ${WT("may have gone there instead")}.` : `${UT.from} ${WT("also leads on to")} ${UT.other} (${UT.otherShare}% ${WT("of its players")}), ${WT("so the")} ${UT.notTakenShare}% … [truncated]
+     }), zB ? `${jB.from} ${QB("also leads to")} ${jB.other}, ${QB("so players who didn't get to")} ${jB.to} ${QB("may have gone there instead")}.` : `${jB.from} ${QB("also leads on to")} ${jB.other} (${jB.otherShare}% ${QB("of its players")}), ${QB("so the")} ${jB.notTakenShare}% … [truncated]
```

#### 2330. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26762` → after: `L26762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26762) · [Before (L26762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26762)

```diff
-           lT = (0, pg.M)(TT, MT.end);
+           pB = (0, kI.K)(BB, dB.end);
```

#### 2331. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26767-L26768` → after: `L26767-L26768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26767-L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26767-L26768) · [Before (L26767-L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26767-L26768)

```diff
-           text: "turned" === kT ? `Studio turned this round: in your code ${jT}.` : `${WT?"Careful":"Check the direction"}: in your code ${jT}.`,
-           hint: "" === UT.usedIn ? `its name, ${UT.name}` : UT.usedIn
+           text: "turned" === UB ? `Studio turned this round: in your code ${aB}.` : `${QB?"Careful":"Check the direction"}: in your code ${aB}.`,
+           hint: "" === jB.usedIn ? `its name, ${jB.name}` : jB.usedIn
```

#### 2332. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26787` → after: `L26787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26787) · [Before (L26787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26787)

```diff
-         }, `bump-${zT}`)
+         }, `bump-${nB}`)
```

#### 2333. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26794` → after: `L26794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26794) · [Before (L26794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26794)

```diff
-       }, `guess-${mT}`)
+       }, `guess-${zB}`)
```

#### 2334. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26800` → after: `L26800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26800) · [Before (L26800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26800)

```diff
-       }, `place-${mT}`)
+       }, `place-${zB}`)
```

#### 2335. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26807` → after: `L26807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26807) · [Before (L26807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26807)

```diff
-       }, `branch-${mT}`)
+       }, `branch-${zB}`)
```

#### 2336. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26813` → after: `L26813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26813) · [Before (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26813)

```diff
-       }, `constant-${mT}`)
+       }, `constant-${zB}`)
```

#### 2337. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26819` → after: `L26819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26819) · [Before (L26819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26819)

```diff
-       }, `goal-${mT}`)
+       }, `goal-${zB}`)
```

#### 2338. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26822` → after: `L26822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26822) · [Before (L26822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26822)

```diff
-   for (const WT of TT.matchAll(eX.d)) {
+   for (const QB of BB.matchAll(qY.g)) {
```

#### 2339. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26837` → after: `L26837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26837) · [Before (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26837)

```diff
-     const MT = iS(HT(kT, WT), `g${mT}-`, UT, vS(HT(0, kT)), vS(HT(WT)));
+     const dB = tw(uB(UB, QB), `g${zB}-`, jB, Gw(uB(0, UB)), Gw(uB(QB)));
```

#### 2340. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26839` → after: `L26839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26839) · [Before (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26839)

```diff
-   })), ...iS(HT(kT), `g${nT.length}-`, UT, vS(HT(0, kT)))]
+   })), ...tw(uB(UB), `g${NB.length}-`, jB, Gw(uB(0, UB)))]
```

#### 2341. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26933` → after: `L26933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26933) · [Before (L26933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26933)

```diff
-     title: null !== (UT = mT.line) && void 0 !== UT ? UT : `"${mT.text}"`,
+     title: null !== (jB = zB.line) && void 0 !== jB ? jB : `"${zB.text}"`,
```

#### 2342. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26953` → after: `L26953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26953) · [Before (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26953)

```diff
-       return `"${UT}"`
+       return `"${jB}"`
```

#### 2343. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L26967` → after: `L26967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR26967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L26967) · [Before (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L26967)

```diff
-     }), " ", mT ? `${WT("Studio can't find")} ${zT} ${WT("in your game")}: ${WT(MT?"use your own place's name":"use one your game has")}.` : `${WT("Is")} ${zT} ${WT("in your game? If not, use one that is.")}`]
+     }), " ", zB ? `${QB("Studio can't find")} ${nB} ${QB("in your game")}: ${QB(dB?"use your own place's name":"use one your game has")}.` : `${QB("Is")} ${nB} ${QB("in your game? If not, use one that is.")}`]
```
