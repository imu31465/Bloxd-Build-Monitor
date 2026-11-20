# Changed — Bundle Modifications Report (Part 007 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `7 / 133` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2778 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 2258. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24990` → after: `L24990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L24990) · [Before (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L24990)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${IM}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${IM}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${oR}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${oR}dies?)(?!\w)\s*`, "i"),
```

#### 2259. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25003` → after: `L25003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25003) · [Before (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25003)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${IM}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${oR}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2260. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25015` → after: `L25015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25015) · [Before (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25015)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${IM}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${oR}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2261. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25027` → after: `L25027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25027) · [Before (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25027)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${IM}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${oR}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2262. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25037` → after: `L25037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25037) · [Before (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25037)

```diff
-   return /[|&?=<>!,]/.test(zv) ? `(${zv})` : zv
+   return /[|&?=<>!,]/.test(kT) ? `(${kT})` : kT
```

#### 2263. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25043` → after: `L25043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25043) · [Before (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25043)

```diff
-   return null !== (zv = null !== (Pv = null === (hv = /^(.+)\.toString\(\)$/.exec(ev)) || void 0 === hv ? void 0 : hv[1]) && void 0 !== Pv ? Pv : null === (Sv = /^String\((.+)\)$/.exec(ev)) || void 0 === Sv ? void 0 : Sv[1]) && void 0 !== zv ? zv : vv
+   return null !== (kT = null !== (cT = null === (lT = /^(.+)\.toString\(\)$/.exec(KT)) || void 0 === lT ? void 0 : lT[1]) && void 0 !== cT ? cT : null === (MT = /^String\((.+)\)$/.exec(KT)) || void 0 === MT ? void 0 : MT[1]) && void 0 !== kT ? kT : TT
```

#### 2264. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25053` → after: `L25053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25053) · [Before (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25053)

```diff
-     return "literal" in Pv && new RegExp(String.raw`\b${zv}\s*[:#]?\s*$`, "i").test(Pv.literal) && void 0 !== Sv && "code" in Sv
+     return "literal" in cT && new RegExp(String.raw`\b${kT}\s*[:#]?\s*$`, "i").test(cT.literal) && void 0 !== MT && "code" in MT
```

#### 2265. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25078` → after: `L25078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25078) · [Before (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25078)

```diff
-   if (Yq(Sv) && /\p{L}{2}/u.test(Sv)) return `"${ZM(Sv)}"`;
+   if (QV(MT) && /\p{L}{2}/u.test(MT)) return `"${eR(MT)}"`;
```

#### 2266. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25082` → after: `L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25082) · [Before (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25082)

```diff
-   }(ev) ? `\`${ev}\`` : null
+   }(KT) ? `\`${KT}\`` : null
```

#### 2267. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25087` → after: `L25087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25087) · [Before (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25087)

```diff
-   const Sv = (null !== (hv = vv.messages) && void 0 !== hv ? hv : []).filter((vv => zv.isMessage(vv) && (null === Pv || AM(vv.where).includes(Pv)))),
+   const MT = (null !== (lT = TT.messages) && void 0 !== lT ? lT : []).filter((TT => kT.isMessage(TT) && (null === cT || GR(TT.where).includes(cT)))),
```

#### 2268. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25109` → after: `L25109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25109) · [Before (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25109)

```diff
-                   '"' === gv || "'" === gv ? hv = gv : "([{".includes(gv) ? Pv++ : ")]}".includes(gv) ? Pv-- : "+" === gv && 0 === Pv && (zv.push(vv.slice(Sv, ev).trim()), Sv = ev + 1)
+                   '"' === OT || "'" === OT ? lT = OT : "([{".includes(OT) ? cT++ : ")]}".includes(OT) ? cT-- : "+" === OT && 0 === cT && (kT.push(TT.slice(MT, KT).trim()), MT = KT + 1)
```

#### 2269. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25112` → after: `L25112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25112) · [Before (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25112)

```diff
-               return zv.push(vv.slice(Sv).trim()), zv.every((vv => "" !== vv)) ? zv : null
+               return kT.push(TT.slice(MT).trim()), kT.every((TT => "" !== TT)) ? kT : null
```

#### 2270. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25120-L25121` → after: `L25120-L25121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25120-L25121) · [Before (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25120-L25121)

```diff
-             }))) && void 0 !== zv ? zv : null
-           }(null !== (Pv = null === hv || void 0 === hv ? void 0 : hv[1]) && void 0 !== Pv ? Pv : zv);
+             }))) && void 0 !== kT ? kT : null
+           }(null !== (cT = null === lT || void 0 === lT ? void 0 : lT[1]) && void 0 !== cT ? cT : kT);
```

#### 2271. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25133` → after: `L25133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25133) · [Before (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25133)

```diff
-       } = gv[0], lv = hv.indexOf(pv, Sv[0].length), Tv = null !== (zv = null === (Pv = /["']/.exec(pv)) || void 0 === Pv ? void 0 : Pv[0]) && void 0 !== zv ? zv : '"';
+       } = OT[0], IT = lT.indexOf(yT, MT[0].length), AT = null !== (kT = null === (cT = /["']/.exec(yT)) || void 0 === cT ? void 0 : cT[0]) && void 0 !== kT ? kT : '"';
```

#### 2272. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25152` → after: `L25152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25152) · [Before (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25152)

```diff
-   return new Set([...vv.callbacks, ...null !== (zv = vv.functions) && void 0 !== zv ? zv : []].map((vv => {
+   return new Set([...TT.callbacks, ...null !== (kT = TT.functions) && void 0 !== kT ? kT : []].map((TT => {
```

#### 2273. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25167` → after: `L25167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25167) · [Before (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25167)

```diff
-   if (null === hv || null === Sv || aI.test(null !== (Pv = Sv[1]) && void 0 !== Pv ? Pv : "") || uM.test(hv.text)) return null;
+   if (null === lT || null === MT || fE.test(null !== (cT = MT[1]) && void 0 !== cT ? cT : "") || WR.test(lT.text)) return null;
```

#### 2274. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25182` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25182) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25182)

```diff
-       const Sv = null !== (zv = null === (Pv = vv.ideaPlace) || void 0 === Pv ? void 0 : Pv.exec(gv)) && void 0 !== zv ? zv : null;
+       const MT = null !== (kT = null === (cT = TT.ideaPlace) || void 0 === cT ? void 0 : cT.exec(OT)) && void 0 !== kT ? kT : null;
```

#### 2275. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25185` → after: `L25185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25185) · [Before (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25185)

```diff
-         number: null !== (hv = Sv[1]) && void 0 !== hv ? hv : null,
+         number: null !== (lT = MT[1]) && void 0 !== lT ? lT : null,
```

#### 2276. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25203-L25205` → after: `L25203-L25205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25203-L25205) · [Before (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25203-L25205)

```diff
-   const sv = null === Wv ? "" : `at ${Tv.numberWord} ${Wv} `,
-     Cv = `hange your ${Tv.noun} message (${av}) so ${sv}it also ${Nv.verb} ${Nv.after}`;
-   return `${hv.head}${/^[A-Z]/.test(hv.text)?"C":"c"}${Cv}`
+   const tT = null === CT ? "" : `at ${AT.numberWord} ${CT} `,
+     hT = `hange your ${AT.noun} message (${vT}) so ${tT}it also ${xT.verb} ${xT.after}`;
+   return `${lT.head}${/^[A-Z]/.test(lT.text)?"C":"c"}${hT}`
```

#### 2277. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25265` → after: `L25265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25265) · [Before (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25265)

```diff
-         player: "broadcastMessage" === ev[3] ? null : null !== (zv = gv[0]) && void 0 !== zv ? zv : null,
+         player: "broadcastMessage" === KT[3] ? null : null !== (kT = OT[0]) && void 0 !== kT ? kT : null,
```

#### 2278. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25267` → after: `L25267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25267) · [Before (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25267)

```diff
-         condition: null !== (Pv = ev[2]) && void 0 !== Pv ? Pv : null,
+         condition: null !== (cT = KT[2]) && void 0 !== cT ? cT : null,
```

#### 2279. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25276-L25277` → after: `L25276-L25277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25276-L25277) · [Before (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25276-L25277)

```diff
-       const hv = null === vv.mention ? "join" === vv.kind && "onPlayerJoin" === sv : vv.mention.test(Cv),
-         Sv = (null !== (Pv = zv.messages) && void 0 !== Pv ? Pv : []).filter((zv => vv.isMessage(zv) && AM(zv.where).includes(sv)));
+       const lT = null === TT.mention ? "join" === TT.kind && "onPlayerJoin" === tT : TT.mention.test(hT),
+         MT = (null !== (cT = kT.messages) && void 0 !== cT ? cT : []).filter((kT => TT.isMessage(kT) && GR(kT.where).includes(tT)));
```

#### 2280. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25301-L25302` → after: `L25301-L25302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25301-L25302) · [Before (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25301-L25302)

```diff
-     nv = null !== Gv.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${Gv.numberWord}s?\b`, "i").test(Cv),
-     Ov = null === Gv.numberWord || nv ? new Set : new Set((0, Tg.t)(Cv).filter((vv => !/\d\s*%/.test(vv))).flatMap((vv => [...vv.matchAll(new RegExp(String.raw`\b${Gv.numberWord}\s*:?\s*(\d{1,3})\b${QM}`, "gi"))].map((vv => vv[1])))));
+     wT = null !== ST.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${ST.numberWord}s?\b`, "i").test(hT),
+     mT = null === ST.numberWord || wT ? new Set : new Set((0, CO.q)(hT).filter((TT => !/\d\s*%/.test(TT))).flatMap((TT => [...TT.matchAll(new RegExp(String.raw`\b${ST.numberWord}\s*:?\s*(\d{1,3})\b${HR}`, "gi"))].map((TT => TT[1])))));
```

#### 2281. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25304` → after: `L25304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25304) · [Before (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25304)

```diff
-   const Dv = null !== (Pv = null === Yv || void 0 === Yv ? void 0 : Yv[2]) && void 0 !== Pv ? Pv : 1 === Ov.size ? [...Ov][0] : null;
+   const bT = null !== (cT = null === PT || void 0 === PT ? void 0 : PT[2]) && void 0 !== cT ? cT : 1 === mT.size ? [...mT][0] : null;
```

#### 2282. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25313` → after: `L25313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25313) · [Before (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25313)

```diff
-   })) && Sy.test(vv), xv = null !== (hv = Gv.mention) && void 0 !== hv ? hv : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && sR.test(TT), eT = null !== (lT = ST.mention) && void 0 !== lT ? lT : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2283. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25317-L25319` → after: `L25317-L25319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25317-L25319) · [Before (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25317-L25319)

```diff
-         Pv = null === zv ? vv : vv.slice(zv[0].length),
-         hv = (null === zv ? (0, Wg.t)(Pv, /\s+(?=[A-Z`"])/g, (0, Wg.q)(".!?")) : [Pv]).some((vv => {
-           const zv = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(vv) ? `${tv} ${vv}` : vv;
+         cT = null === kT ? TT : TT.slice(kT[0].length),
+         lT = (null === kT ? (0, jO.x)(cT, /\s+(?=[A-Z`"])/g, (0, jO.r)(".!?")) : [cT]).some((TT => {
+           const kT = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(TT) ? `${GT} ${TT}` : TT;
```

#### 2284. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25333` → after: `L25333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25333) · [Before (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25333)

```diff
-           literal: `${hv}${/[.!?]$/.test(hv)||""===hv?" ":". "}${zv}`
+           literal: `${lT}${/[.!?]$/.test(lT)||""===lT?" ":". "}${kT}`
```

#### 2285. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25337` → after: `L25337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25337) · [Before (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25337)

```diff
-         literal: `. ${zv}`
+         literal: `. ${kT}`
```

#### 2286. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25348` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25348) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25348)

```diff
-       return Pv.map((vv => "literal" in vv ? (0, Tg.W)(vv.literal, zv) : vv.code)).join(" + ")
+       return cT.map((TT => "literal" in TT ? (0, CO.T)(TT.literal, kT) : TT.code)).join(" + ")
```

#### 2287. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25350-L25351` → after: `L25350-L25351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25350-L25351) · [Before (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25350-L25351)

```diff
-     Av = `${Vv.line.slice(0,Vv.start)}${Vv.isList?`[${Zv}]`:Zv}${Vv.line.slice(Vv.end)}`,
-     Lv = null === Dv ? wv.map((vv => vv === av.line ? `${av.indent}${Av}` : vv)) : [`${av.indent}if (${null!==(Sv=null===(ev=av.condition)||void 0===ev?void 0:ev.trim())&&void 0!==Sv?Sv:`${MM(yM(Fv))} === ${Dv}`}) ${Av}`, `${av.indent}else ${Vv.line}`],
+     XT = `${JT.line.slice(0,JT.start)}${JT.isList?`[${uT}]`:uT}${JT.line.slice(JT.end)}`,
+     dT = null === bT ? jT.map((TT => TT === vT.line ? `${vT.indent}${XT}` : TT)) : [`${vT.indent}if (${null!==(MT=null===(KT=vT.condition)||void 0===KT?void 0:KT.trim())&&void 0!==MT?MT:`${ZR(uR(rT))} === ${bT}`}) ${XT}`, `${vT.indent}else ${JT.line}`],
```

#### 2288. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25353` → after: `L25353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25353) · [Before (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25353)

```diff
-     Mv = qv ? `Change your ${Gv.noun} message (${Kv}) to "${av.words}"${Hv}` : `Change your ${Gv.noun} message (${Kv}) so ${null===Dv?"":`at ${Gv.numberWord} ${Dv} `}it also says "${av.words}"${Hv}`,
+     RT = VT ? `Change your ${ST.noun} message (${zT}) to "${vT.words}"${LT}` : `Change your ${ST.noun} message (${zT}) so ${null===bT?"":`at ${ST.numberWord} ${bT} `}it also says "${vT.words}"${LT}`,
```

#### 2289. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25372` → after: `L25372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25372) · [Before (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25372)

```diff
-   const hv = null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.messages) && void 0 !== Pv ? Pv : [];
+   const lT = null !== (cT = null === kT || void 0 === kT ? void 0 : kT.messages) && void 0 !== cT ? cT : [];
```

#### 2290. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25397` → after: `L25397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25397) · [Before (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25397)

```diff
-     return ly(null !== Sv && void 0 !== Sv ? Sv : ev, void 0 === gv ? dv ? "players coming back" : "keeping players" : dv ? "how many players come back" : "how many players stay")
+     return Kg(null !== MT && void 0 !== MT ? MT : KT, void 0 === OT ? fT ? "players coming back" : "keeping players" : fT ? "how many players come back" : "how many players stay")
```

#### 2291. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25411-L25412` → after: `L25411-L25412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25411-L25412) · [Before (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25411-L25412)

```diff
-       const Sv = null !== (Pv = vv.match(ay)) && void 0 !== Pv ? Pv : [],
-         ev = null !== (hv = zv.match(ay)) && void 0 !== hv ? hv : [],
+       const MT = null !== (cT = TT.match(xg)) && void 0 !== cT ? cT : [],
+         KT = null !== (lT = kT.match(xg)) && void 0 !== lT ? lT : [],
```

#### 2292. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25425` → after: `L25425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25425) · [Before (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25425)

```diff
-       return "" === dv ? pv : [...pv, dv]
+       return "" === fT ? yT : [...yT, fT]
```

#### 2293. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25450` → after: `L25450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25450) · [Before (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25450)

```diff
-       Sv.set(lv.name, (null !== (ev = Sv.get(lv.name)) && void 0 !== ev ? ev : 0) + 1)
+       MT.set(IT.name, (null !== (KT = MT.get(IT.name)) && void 0 !== KT ? KT : 0) + 1)
```

#### 2294. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25457-L25459` → after: `L25457-L25459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25457-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25457-L25459) · [Before (L25457-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25457-L25459)

```diff
-         Tv = (0, Tg.C)(lv.name),
-         Wv = null !== (gv = lv.usedIn) && void 0 !== gv ? gv : "",
-         wv = void 0 === ev ? null : null !== (pv = yW(ev)) && void 0 !== pv ? pv : null;
+         AT = (0, CO.y)(IT.name),
+         CT = null !== (OT = IT.usedIn) && void 0 !== OT ? OT : "",
+         jT = void 0 === KT ? null : null !== (yT = UC(KT)) && void 0 !== yT ? yT : null;
```

#### 2295. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25466` → after: `L25466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25466) · [Before (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25466)

```diff
-         value: null !== (dv = null === ev || void 0 === ev ? void 0 : ev.value) && void 0 !== dv ? dv : vv,
+         value: null !== (fT = null === KT || void 0 === KT ? void 0 : KT.value) && void 0 !== fT ? fT : TT,
```

#### 2296. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25468` → after: `L25468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25468) · [Before (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25468)

```diff
-         codeKind: null === sv ? wv : null,
+         codeKind: null === tT ? jT : null,
```

#### 2297. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25470` → after: `L25470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25470) · [Before (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25470)

```diff
-         hazard: null !== (Nv = null === sv || void 0 === sv ? void 0 : sv.hazard) && void 0 !== Nv ? Nv : null,
+         hazard: null !== (xT = null === tT || void 0 === tT ? void 0 : tT.hazard) && void 0 !== xT ? xT : null,
```

#### 2298. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25478` → after: `L25478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25478) · [Before (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25478)

```diff
-   }(ev), sv), cv = jw(BD(ev), sv), Gv = null !== (Pv = null === gv || void 0 === gv ? void 0 : gv.places) && void 0 !== Pv ? Pv : wy, mv = null !== (hv = null === dv || void 0 === dv ? void 0 : dv.grounds) && void 0 !== hv ? hv : null, jv = (() => {
+   }(KT), tT), QT = aj(Zb(KT), tT), ST = null !== (cT = null === OT || void 0 === OT ? void 0 : OT.places) && void 0 !== cT ? cT : fg, DT = null !== (lT = null === fT || void 0 === fT ? void 0 : fT.grounds) && void 0 !== lT ? lT : null, aT = (() => {
```

#### 2299. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25499` → after: `L25499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25499) · [Before (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25499)

```diff
-             const zv = (null !== (Sv = hv.get(vv.name)) && void 0 !== Sv ? Sv : []).filter((vv => JSON.stringify(vv.selection) !== JSON.stringify(Cv.selection)));
+             const kT = (null !== (MT = lT.get(TT.name)) && void 0 !== MT ? MT : []).filter((TT => JSON.stringify(TT.selection) !== JSON.stringify(hT.selection)));
```

#### 2300. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25511` → after: `L25511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25511) · [Before (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25511)

```diff
-         const [gv, [pv]] = ev[0], dv = new RegExp(`${(0,Tg.l)(gv)}(?![\\w$])`);
+         const [OT, [yT]] = KT[0], fT = new RegExp(`${(0,CO.j)(OT)}(?![\\w$])`);
```

#### 2301. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25525` → after: `L25525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25525) · [Before (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25525)

```diff
-           if (Nv || !lv || /^\s*[#|]/.test(iv) || kc.test(iv) || 0 === (0, Wg.f)(iv.replace(/\[\[[^\]\n]+\]\]/g, " "), dv, Wg.l).length) continue;
+           if (xT || !IT || /^\s*[#|]/.test(NT) || WQ.test(NT) || 0 === (0, jO.h)(NT.replace(/\[\[[^\]\n]+\]\]/g, " "), fT, jO.p).length) continue;
```

#### 2302. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25530` → after: `L25530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25530) · [Before (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25530)

```diff
-           const zv = null !== (Wv = null === (wv = rc.exec(iv)) || void 0 === wv ? void 0 : wv[0].length) && void 0 !== Wv ? Wv : 0,
+           const kT = null !== (CT = null === (jT = BQ.exec(NT)) || void 0 === jT ? void 0 : jT[0].length) && void 0 !== CT ? CT : 0,
```

#### 2303. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25538` → after: `L25538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25538) · [Before (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25538)

```diff
-             ev = Sv + (null !== (av = null === (sv = pD.exec(iv.slice(Sv))) || void 0 === sv ? void 0 : sv[0].length) && void 0 !== av ? av : 0),
+             KT = MT + (null !== (vT = null === (tT = Tb.exec(NT.slice(MT))) || void 0 === tT ? void 0 : tT[0].length) && void 0 !== vT ? vT : 0),
```

#### 2304. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25540-L25541` → after: `L25540-L25541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25540-L25541) · [Before (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25540-L25541)

```diff
-             cv = `${dD(pv)} [[Heatmap]].`;
-           return Tv[Cv] = `${iv.slice(0,ev)}${gv} ${cv}${iv.slice(ev)}`, {
+             QT = `${kb(yT)} [[Heatmap]].`;
+           return AT[hT] = `${NT.slice(0,KT)}${OT} ${QT}${NT.slice(KT)}`, {
```

#### 2305. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25557` → after: `L25557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25557) · [Before (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25557)

```diff
-       }(dv.markdown, [...null !== Wv && void 0 !== Wv ? Wv : [], ...null !== wv && void 0 !== wv ? wv : []], ev);
+       }(fT.markdown, [...null !== CT && void 0 !== CT ? CT : [], ...null !== jT && void 0 !== jT ? jT : []], KT);
```

#### 2306. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25565-L25567` → after: `L25565-L25567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25565-L25567) · [Before (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25565-L25567)

```diff
-     const vv = [...(null !== Tv && void 0 !== Tv ? Tv : []).flatMap((vv => [vv.reason, vv.typical])), ...jv.repairs.map((vv => vv.to))];
-     return Nc(Nv, null === lv ? vv : [lv.change, ...vv])
-   })(), Fv = new Set((null !== Tv && void 0 !== Tv ? Tv : []).flatMap((vv => "good" === vv.verdict ? [vv.key] : []))), Yv = rC(pv), nv = sO(mv, ev), Ov = jv.markdown, Dv = null === dv ? Ov : VL(Ov, dv, Fv, "young" === pv, fv).markdown, Kv = Yv ? Mn(Dv, (Vv = gv, null === Vv ? []  … [truncated]
+     const TT = [...(null !== AT && void 0 !== AT ? AT : []).flatMap((TT => [TT.reason, TT.typical])), ...aT.repairs.map((TT => TT.to))];
+     return OQ(xT, null === IT ? TT : [IT.change, ...TT])
+   })(), rT = new Set((null !== AT && void 0 !== AT ? AT : []).flatMap((TT => "good" === TT.verdict ? [TT.key] : []))), PT = nh(yT), wT = ym(DT, KT), mT = aT.markdown, bT = null === fT ? mT : rd(mT, fT, rT, "young" === yT, FT).markdown, zT = PT ? Vw(bT, (JT = OT, null === JT ? []  … [truncated]
```

#### 2307. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25586` → after: `L25586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25586) · [Before (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25586)

```diff
-         markdown: 0 === Sv.length ? vv : ev,
+         markdown: 0 === MT.length ? TT : KT,
```

#### 2308. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25615` → after: `L25615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25615) · [Before (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25615)

```diff
-         return `${vv.slice(0,Sv.end)}${gv}${vv.slice(ev)}`
+         return `${TT.slice(0,MT.end)}${OT}${TT.slice(KT)}`
```

#### 2309. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25653` → after: `L25653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25653) · [Before (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25653)

```diff
-         markdown: 0 === zv.length ? vv : Pv,
+         markdown: 0 === kT.length ? TT : cT,
```

#### 2310. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25670` → after: `L25670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25670) · [Before (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25670)

```diff
-           const zv = `the ${vv}`;
+           const kT = `the ${TT}`;
```

#### 2311. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25681` → after: `L25681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25681) · [Before (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25681)

```diff
-         of Pv) Sv = (0, Wg.s)(Sv, new RegExp(`(${(0,Tg.l)(ev)})(?![\\w-])`, "gi"), (0, Wg.h)("\\w-"), (vv => {
+         of cT) MT = (0, jO.v)(MT, new RegExp(`(${(0,CO.j)(KT)})(?![\\w-])`, "gi"), (0, jO.m)("\\w-"), (TT => {
```

#### 2312. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25683` → after: `L25683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25683) · [Before (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25683)

```diff
-         return /^T/.test(zv) ? `T${gv.slice(1)}` : gv
+         return /^T/.test(kT) ? `T${OT.slice(1)}` : OT
```

#### 2313. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25690` → after: `L25690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25690) · [Before (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25690)

```diff
-     Iv = [...null !== Wv && void 0 !== Wv ? Wv : [], ...null !== wv && void 0 !== wv ? wv : []].flatMap((vv => "deaths" === vv.kind ? [vv.square] : [])),
+     ET = [...null !== CT && void 0 !== CT ? CT : [], ...null !== jT && void 0 !== jT ? jT : []].flatMap((TT => "deaths" === TT.kind ? [TT.square] : [])),
```

#### 2314. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25693` → after: `L25693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25693) · [Before (L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25693)

```diff
-       if (null === zv || void 0 === zv || vv.length > Tg.v) return {
+       if (null === kT || void 0 === kT || TT.length > CO.s) return {
```

#### 2315. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25695` → after: `L25695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25695) · [Before (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25695)

```diff
-         Yw: []
+         wj: []
```

#### 2316. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25721` → after: `L25721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25721) · [Before (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25721)

```diff
-         Yw: []
+         wj: []
```

#### 2317. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25724` → after: `L25724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25724) · [Before (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25724)

```diff
-         Yw: hv
+         wj: lT
```

#### 2318. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25737` → after: `L25737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25737) · [Before (L25737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25737)

```diff
-       if (null === zv || void 0 === zv || vv.length > Tg.v) return {
+       if (null === kT || void 0 === kT || TT.length > CO.s) return {
```

#### 2319. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25748` → after: `L25748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25748) · [Before (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25748)

```diff
-         pv = `${null!==Pv&&void 0!==Pv?Pv:""}\n${gv}\n${gv.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         yT = `${null!==cT&&void 0!==cT?cT:""}\n${OT}\n${OT.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2320. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25757` → after: `L25757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25757) · [Before (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25757)

```diff
-     }(Zv, ev, null !== (Sv = null === nv || void 0 === nv ? void 0 : nv.text) && void 0 !== Sv ? Sv : null, Av).markdown,
+     }(uT, KT, null !== (MT = null === wT || void 0 === wT ? void 0 : wT.text) && void 0 !== MT ? MT : null, XT).markdown,
```

#### 2321. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25761` → after: `L25761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25761) · [Before (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25761)

```diff
-           if (null === zv || void 0 === zv || vv.length > Tg.v || 0 === (null !== (Pv = zv.messages) && void 0 !== Pv ? Pv : []).length) return {
+           if (null === kT || void 0 === kT || TT.length > CO.s || 0 === (null !== (cT = kT.messages) && void 0 !== cT ? cT : []).length) return {
```

#### 2322. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25799` → after: `L25799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25799) · [Before (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25799)

```diff
-         Sv = null === hv || null === ev ? hv : {
+         MT = null === lT || null === KT ? lT : {
```

#### 2323. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25824` → after: `L25824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25824) · [Before (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25824)

```diff
-           return null === vv || 0 === Pv.length ? vv : {
+           return null === TT || 0 === cT.length ? TT : {
```

#### 2324. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25828` → after: `L25828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25828) · [Before (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25828)

```diff
-         }(null !== (vv = null === dv || void 0 === dv ? void 0 : dv.grounds) && void 0 !== vv ? vv : null, jv.repairs),
+         }(null !== (TT = null === fT || void 0 === fT ? void 0 : fT.grounds) && void 0 !== TT ? TT : null, aT.repairs),
```

#### 2325. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25836` → after: `L25836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25836) · [Before (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25836)

```diff
-             Pv = null === gv ? zv : tG(zv, gv, fv).markdown;
+             cT = null === OT ? kT : oS(kT, OT, FT).markdown;
```

#### 2326. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25874` → after: `L25874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25874) · [Before (L25874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25874)

```diff
-         layout: 0 === zv ? Hv : {
+         layout: 0 === kT ? LT : {
```

#### 2327. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25909` → after: `L25909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25909) · [Before (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25909)

```diff
-     Xv = null === fv || null === Jv || null === rv || rv === Jv ? fv : Nc(fv, sy(Jv, rv));
+     qT = null === FT || null === YT || null === pT || pT === YT ? FT : OQ(FT, Ig(YT, pT));
```

#### 2328. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25953` → after: `L25953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25953) · [Before (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25953)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,Tg.l)(zv)}(?![\\w$])`, "i").test(vv)
+   return new RegExp(`(?:^|[^\\w$])${(0,CO.j)(kT)}(?![\\w$])`, "i").test(TT)
```

#### 2329. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25961` → after: `L25961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25961) · [Before (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25961)

```diff
-   return (0, Wg.f)(vv, /[A-Za-z_$][\w$]*(?![\w$])/g, Wg.l).map((vv => {
+   return (0, jO.h)(TT, /[A-Za-z_$][\w$]*(?![\w$])/g, jO.p).map((TT => {
```

#### 2330. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25970` → after: `L25970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25970) · [Before (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25970)

```diff
-     hv = null !== (zv = new RegExp(String.raw`^\s*${Pv}\s*===?\s*(-?\d+)\s*$`).exec(vv)) && void 0 !== zv ? zv : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${Pv}\s*$`).exec(vv);
+     lT = null !== (kT = new RegExp(String.raw`^\s*${cT}\s*===?\s*(-?\d+)\s*$`).exec(TT)) && void 0 !== kT ? kT : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${cT}\s*$`).exec(TT);
```

#### 2331. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25981` → after: `L25981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25981) · [Before (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25981)

```diff
-   const hv = new Set([...zv.callbacks, ...null !== (Pv = zv.functions) && void 0 !== Pv ? Pv : []].map((vv => {
+   const lT = new Set([...kT.callbacks, ...null !== (cT = kT.functions) && void 0 !== cT ? cT : []].map((TT => {
```

#### 2332. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25999` → after: `L25999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L25999) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L25999)

```diff
-         const ev = new RegExp(`^${(0,Tg.l)(zv)} (\\d{1,4})$`).exec(vv);
+         const KT = new RegExp(`^${(0,CO.j)(kT)} (\\d{1,4})$`).exec(TT);
```

#### 2333. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26006` → after: `L26006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26006) · [Before (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26006)

```diff
-         else if (vv.startsWith(`${zv}: `) && vv.length > zv.length + 2) {
+         else if (TT.startsWith(`${kT}: `) && TT.length > kT.length + 2) {
```

#### 2334. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26036` → after: `L26036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26036) · [Before (L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26036)

```diff
-   if (null === vv || null === zv || null === hv || void 0 === hv || vv.length > Tg.y || "" === vv.trim()) return null;
+   if (null === TT || null === kT || null === lT || void 0 === lT || TT.length > CO.u || "" === TT.trim()) return null;
```

#### 2335. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26038` → after: `L26038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26038) · [Before (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26038)

```diff
-   const gv = Ay(Sv, `${Pv}\n${zv}`, hv)[0],
+   const OT = Gg(MT, `${cT}\n${kT}`, lT)[0],
```

#### 2336. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26046` → after: `L26046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26046) · [Before (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26046)

```diff
-       const hv = [...zv.callbacks, ...null !== (Pv = zv.functions) && void 0 !== Pv ? Pv : []].filter((zv => zv.name === vv));
+       const lT = [...kT.callbacks, ...null !== (cT = kT.functions) && void 0 !== cT ? cT : []].filter((kT => kT.name === TT));
```

#### 2337. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26074` → after: `L26074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26074) · [Before (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26074)

```diff
-       const Nv = null !== (hv = null === (Sv = vv.valueExpression) || void 0 === Sv ? void 0 : Sv.trim()) && void 0 !== hv ? hv : null;
+       const xT = null !== (lT = null === (MT = TT.valueExpression) || void 0 === MT ? void 0 : MT.trim()) && void 0 !== lT ? lT : null;
```

#### 2338. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26080` → after: `L26080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26080) · [Before (L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26080)

```diff
-             Sv = Cv === Yy[0] || Cv === Yy[3] || hv !== Pv || /^[A-Za-z_$][\w$.]*$/.test(null !== Pv && void 0 !== Pv ? Pv : "");
+             MT = hT === Sg[0] || hT === Sg[3] || lT !== cT || /^[A-Za-z_$][\w$.]*$/.test(null !== cT && void 0 !== cT ? cT : "");
```

#### 2339. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26082` → after: `L26082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26082) · [Before (L26082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26082)

```diff
-             dv = `${hv} === ${Number(zv)}`;
+             fT = `${lT} === ${Number(kT)}`;
```

#### 2340. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26087-L26088` → after: `L26087-L26088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26087-L26088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26087-L26088) · [Before (L26087-L26088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26087-L26088)

```diff
-         Tv = null === lv ? null : null !== (ev = null !== (gv = null !== (pv = lv[1]) && void 0 !== pv ? pv : lv[2]) && void 0 !== gv ? gv : lv[3]) && void 0 !== ev ? ev : null,
-         Wv = null !== Tv && void 0 !== Tv ? Tv : vv.numberExpression,
+         AT = null === IT ? null : null !== (KT = null !== (OT = null !== (yT = IT[1]) && void 0 !== yT ? yT : IT[2]) && void 0 !== OT ? OT : IT[3]) && void 0 !== KT ? KT : null,
+         CT = null !== AT && void 0 !== AT ? AT : TT.numberExpression,
```

#### 2341. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26095-L26096` → after: `L26095-L26096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26095-L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26095-L26096) · [Before (L26095-L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26095-L26096)

```diff
-           hv = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,Tg.l)(vv)}(?![\\w$])`).test(Nv);
-         Iy(Nv).includes(vv) && Pv >= 0 && (null !== Tv || !hv) && (dv = `${vv} === ${Pv}`)
+           lT = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,CO.j)(TT)}(?![\\w$])`).test(xT);
+         og(xT).includes(TT) && cT >= 0 && (null !== AT || !lT) && (fT = `${TT} === ${cT}`)
```

#### 2342. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26099` → after: `L26099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26099) · [Before (L26099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26099)

```diff
-       return null !== dv && Iy(dv).every((vv => sv.has(vv))) ? dv : null
+       return null !== fT && og(fT).every((TT => tT.has(TT))) ? fT : null
```

#### 2343. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26114` → after: `L26114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26114) · [Before (L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26114)

```diff
-   const Fv = (null !== (ev = hv.messages) && void 0 !== ev ? ev : []).filter((vv => {
+   const rT = (null !== (KT = lT.messages) && void 0 !== KT ? KT : []).filter((TT => {
```

#### 2344. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26118` → after: `L26118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26118) · [Before (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26118)

```diff
-     Yv = 1 !== Fv.length || cy.test(`${Pv}\n${zv}`) ? pv : Fv[0].at;
+     PT = 1 !== rT.length || jg.test(`${cT}\n${kT}`) ? yT : rT[0].at;
```

#### 2345. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26132` → after: `L26132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26132) · [Before (L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26132)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${Pv}(?![\\w$])`).test(vv) || (0, Wg.f)(vv, new RegExp(`${Pv}\\s*=(?![=>])`), Wg.l).length > 0 || ca(vv, zv) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${Pv}\\s*\\([^()]*\\)\\s*\\{`, "m").test(vv)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${cT}(?![\\w$])`).test(TT) || (0, jO.h)(TT, new RegExp(`${cT}\\s*=(?![=>])`), jO.p).length > 0 || Qv(TT, kT) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${cT}\\s*\\([^()]*\\)\\s*\\{`, "m").test(TT)
```

#### 2346. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26136` → after: `L26136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26136) · [Before (L26136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26136)

```diff
-   if (null === vv || null === zv || void 0 === zv || void 0 === zv.declaredNames || vv.length > Tg.y) return [];
+   if (null === TT || null === kT || void 0 === kT || void 0 === kT.declaredNames || TT.length > CO.u) return [];
```

#### 2347. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26141` → after: `L26141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26141) · [Before (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26141)

```diff
-   for (const [, ev] of(0, Wg.f)(hv, yy, Wg.l)) {
+   for (const [, KT] of(0, jO.h)(lT, ug, jO.p)) {
```

#### 2348. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26152` → after: `L26152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26152) · [Before (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26152)

```diff
-   if (null === vv || null === zv || void 0 === zv || vv.length > Tg.y || !vv.includes("/") || ! function(vv) {
+   if (null === TT || null === kT || void 0 === kT || TT.length > CO.u || !TT.includes("/") || ! function(TT) {
```

#### 2349. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26162` → after: `L26162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26162) · [Before (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26162)

```diff
-   const hv = [...zv.playerText, ...(null !== (Pv = zv.messages) && void 0 !== Pv ? Pv : []).map((vv => {
+   const lT = [...kT.playerText, ...(null !== (cT = kT.messages) && void 0 !== cT ? cT : []).map((TT => {
```

#### 2350. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26171-L26172` → after: `L26171-L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26171-L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26171-L26172) · [Before (L26171-L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26171-L26172)

```diff
-     const vv = null !== (ev = null !== (gv = null !== (pv = dv[1]) && void 0 !== pv ? pv : dv[2]) && void 0 !== gv ? gv : dv[3]) && void 0 !== ev ? ev : dv[4];
-     for (const [zv] of(0, Wg.f)(vv, oy, (0, Wg.h)("\\w/:."))) {
+     const TT = null !== (KT = null !== (OT = null !== (yT = fT[1]) && void 0 !== yT ? yT : fT[2]) && void 0 !== OT ? OT : fT[3]) && void 0 !== KT ? KT : fT[4];
+     for (const [kT] of(0, jO.h)(TT, Rg, (0, jO.m)("\\w/:."))) {
```

#### 2351. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26203` → after: `L26203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26203) · [Before (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26203)

```diff
-     for (const pv of (0, Wg.f)(vv, Kj, Wg.l)) qj(pv[0], zv, Pv, hv) || (pv.index > gv && ev.push({
+     for (const yT of (0, jO.h)(TT, Pa, jO.p)) oa(yT[0], kT, cT, lT) || (yT.index > OT && KT.push({
```

#### 2352. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26213` → after: `L26213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26213) · [Before (L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26213)

```diff
-     title: !0 === vv.isApiCall ? pv : gv("Not found in your code"),
+     title: !0 === TT.isApiCall ? yT : OT("Not found in your code"),
```

#### 2353. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26215` → after: `L26215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26215) · [Before (L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26215)

```diff
-   }, `${zv}-name-${Pv}`) : vv.text))
+   }, `${kT}-name-${cT}`) : TT.text))
```

#### 2354. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26242` → after: `L26242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26242) · [Before (L26242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26242)

```diff
-   }, `${Pv}-number-${zv}`)] : uy(vv.text, `${Pv}-${zv}`, hv)))
+   }, `${cT}-number-${kT}`)] : Wg(TT.text, `${cT}-${kT}`, lT)))
```

#### 2355. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26246` → after: `L26246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26246) · [Before (L26246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26246)

```diff
-   return null === vv.suggestion ? zv("Not a Bloxd item") : `${zv("Not a Bloxd item")}: ${zv("Bloxd writes it")} "${vv.suggestion}"`
+   return null === TT.suggestion ? kT("Not a Bloxd item") : `${kT("Not a Bloxd item")}: ${kT("Bloxd writes it")} "${TT.suggestion}"`
```

#### 2356. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26257` → after: `L26257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26257) · [Before (L26257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26257)

```diff
-   for (const Nv of gv) pv.push(...uy(vv.slice(dv, Nv.start), `${zv}-${dv}`, Pv, hv)), pv.push((0, Tz.jsx)("span", {
+   for (const xT of OT) yT.push(...Wg(TT.slice(fT, xT.start), `${kT}-${fT}`, cT, lT)), yT.push((0, Ak.jsx)("span", {
```

#### 2357. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26261-L26262` → after: `L26261-L26262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26261-L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26261-L26262) · [Before (L26261-L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26261-L26262)

```diff
-   }, `${zv}-item-${Nv.start}`)), dv = Nv.end;
-   return pv.push(...uy(vv.slice(dv), `${zv}-${dv}`, Pv, hv)), pv
+   }, `${kT}-item-${xT.start}`)), fT = xT.end;
+   return yT.push(...Wg(TT.slice(fT), `${kT}-${fT}`, cT, lT)), yT
```

#### 2358. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26277` → after: `L26277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26277) · [Before (L26277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26277)

```diff
-     Wv <= ev || (ev > pv && gv.push(...vB(vv.slice(pv, ev), zv + vv.slice(0, pv), `${hv}-${pv}`, Sv)), gv.push((0, Tz.jsx)("span", {
+     CT <= KT || (KT > yT && OT.push(...ng(TT.slice(yT, KT), kT + TT.slice(0, yT), `${lT}-${yT}`, MT)), OT.push((0, Ak.jsx)("span", {
```

#### 2359. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26281` → after: `L26281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26281) · [Before (L26281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26281)

```diff
-     }, `${hv}-marked-${ev}`)), pv = Wv)
+     }, `${lT}-marked-${KT}`)), yT = CT)
```

#### 2360. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26283` → after: `L26283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26283) · [Before (L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26283)

```diff
-   return 0 === pv ? vB(vv, zv, hv, Sv) : (pv < vv.length && gv.push(...vB(vv.slice(pv), zv + vv.slice(0, pv), `${hv}-${pv}`, Sv)), gv)
+   return 0 === yT ? ng(TT, kT, lT, MT) : (yT < TT.length && OT.push(...ng(TT.slice(yT), kT + TT.slice(0, yT), `${lT}-${yT}`, MT)), OT)
```

#### 2361. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26294` → after: `L26294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26294) · [Before (L26294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26294)

```diff
-     title: `${Pv("What your code says")}: ${zv.hint}`,
+     title: `${cT("What your code says")}: ${kT.hint}`,
```

#### 2362. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26308` → after: `L26308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26308) · [Before (L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26308)

```diff
-     title: `${Pv("Worked out by Studio from your code")}:\n${zv.hint}`,
+     title: `${cT("Worked out by Studio from your code")}:\n${kT.hint}`,
```

#### 2363. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26348` → after: `L26348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26348) · [Before (L26348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26348)

```diff
-       }, `${zv}-note-${gv}`))
+       }, `${kT}-note-${OT}`))
```

#### 2364. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26354-L26355` → after: `L26354-L26355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26354-L26355) · [Before (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26354-L26355)

```diff
-         const dv = Math.min(Nv, Math.max(lv, null !== (Tv = null === (Wv = ev[gv]) || void 0 === Wv ? void 0 : Wv.end) && void 0 !== Tv ? Tv : Nv));
-         dv > lv && hv.push(...hB(vv.slice(lv, dv), vv.slice(0, lv), lv, `${zv}-${lv}`, Pv, Sv)), lv = dv, pv(lv)
+         const fT = Math.min(xT, Math.max(IT, null !== (AT = null === (CT = KT[OT]) || void 0 === CT ? void 0 : CT.end) && void 0 !== AT ? AT : xT));
+         fT > IT && lT.push(...qg(TT.slice(IT, fT), TT.slice(0, IT), IT, `${kT}-${IT}`, cT, MT)), IT = fT, yT(IT)
```

#### 2365. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26361-L26362` → after: `L26361-L26362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26361-L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26361-L26362) · [Before (L26361-L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26361-L26362)

```diff
-     const [, ev, gv, av, sv, Cv, iv] = wv, cv = `${zv}-${wv.index}`, Gv = vv.slice(0, wv.index);
-     if (void 0 !== ev) hv.push((0, jx.j)(ev, gv));
+     const [, KT, OT, vT, tT, hT, NT] = jT, QT = `${kT}-${jT.index}`, ST = TT.slice(0, jT.index);
+     if (void 0 !== KT) lT.push((0, he.i)(KT, OT));
```

#### 2366. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26366` → after: `L26366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26366) · [Before (L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26366)

```diff
-         children: hB(null !== (lv = null !== av && void 0 !== av ? av : sv) && void 0 !== lv ? lv : "", Gv, wv.index + 2, cv, Pv, Sv)
+         children: qg(null !== (IT = null !== vT && void 0 !== vT ? vT : tT) && void 0 !== IT ? IT : "", ST, jT.index + 2, QT, cT, MT)
```

#### 2367. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26380` → after: `L26380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26380) · [Before (L26380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26380)

```diff
-           children: PB(null !== iv && void 0 !== iv ? iv : "", cv, Pv, "code")
+           children: ig(null !== NT && void 0 !== NT ? NT : "", QT, cT, "code")
```

#### 2368. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26382` → after: `L26382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26382) · [Before (L26382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26382)

```diff
-         ev = void 0 === vv ? da(null !== iv && void 0 !== iv ? iv : "") : null;
+         KT = void 0 === TT ? fv(null !== NT && void 0 !== NT ? NT : "") : null;
```

#### 2369. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26385` → after: `L26385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26385) · [Before (L26385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26385)

```diff
-         title: (Tv = ev, Wv = Pv.t, `${Wv("World Code has no")} ${Tv}, ${Wv("so this code won't run")}`),
+         title: (AT = KT, CT = cT.t, `${CT("World Code has no")} ${AT}, ${CT("so this code won't run")}`),
```

#### 2370. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26387` → after: `L26387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26387) · [Before (L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26387)

```diff
-       }, cv) : void 0 === vv ? zv : (0, Tz.jsx)("span", {
+       }, QT) : void 0 === TT ? kT : (0, Ak.jsx)("span", {
```

#### 2371. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26412` → after: `L26412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26412) · [Before (L26412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26412)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2372. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26415` → after: `L26415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26415) · [Before (L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26415)

```diff
-     }), void 0 === dv ? pv : (0, Tz.jsxs)(Tz.Fragment, {
+     }), void 0 === fT ? yT : (0, Ak.jsxs)(Ak.Fragment, {
```

#### 2373. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26438` → after: `L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26438) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26438)

```diff
-   WB = new RegExp(`${lB}([${String.fromCharCode(TB)}-${String.fromCharCode(63743)}])`, "g");
+   yU = new RegExp(`${KU}([${String.fromCharCode(OU)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2374. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26442` → after: `L26442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26442) · [Before (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26442)

```diff
-     hv = vv.replace(dB, ((vv, zv) => NB.test(zv) ? vv : zv.startsWith("[[") && zv.endsWith("]]") && null !== eh(zv.slice(2, -2)) ? zv : (Pv.push(vv), lB + String.fromCharCode(TB + Pv.length - 1)))),
+     lT = TT.replace(lU, ((TT, kT) => MU.test(kT) ? TT : kT.startsWith("[[") && kT.endsWith("]]") && null !== Ol(kT.slice(2, -2)) ? kT : (cT.push(TT), KU + String.fromCharCode(OU + cT.length - 1)))),
```

#### 2375. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26449` → after: `L26449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26449) · [Before (L26449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26449)

```diff
-         "" !== vv && ("text" === (null === Pv || void 0 === Pv ? void 0 : Pv.kind) ? Pv.text += vv : zv.push({
+         "" !== TT && ("text" === (null === cT || void 0 === cT ? void 0 : cT.kind) ? cT.text += TT : kT.push({
```

#### 2376. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26467` → after: `L26467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26467) · [Before (L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26467)

```diff
-         const Wv = null !== (ev = null === (gv = ph.exec(vv.slice(hv))) || void 0 === gv ? void 0 : gv[0]) && void 0 !== ev ? ev : "";
+         const CT = null !== (KT = null === (OT = fl.exec(TT.slice(lT))) || void 0 === OT ? void 0 : OT[0]) && void 0 !== KT ? KT : "";
```

#### 2377. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26491` → after: `L26491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26491) · [Before (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26491)

```diff
-       const wv = lW(Number((null !== (Wv = null !== Sv && void 0 !== Sv ? Sv : gv) && void 0 !== Wv ? Wv : "").replace(/,/g, "")), null !== ev && void 0 !== ev ? ev : pv, Number(dv.replace(/,/g, "")), Nv);
+       const jT = AC(Number((null !== (CT = null !== MT && void 0 !== MT ? MT : OT) && void 0 !== CT ? CT : "").replace(/,/g, "")), null !== KT && void 0 !== KT ? KT : yT, Number(fT.replace(/,/g, "")), xT);
```

#### 2378. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26496` → after: `L26496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26496) · [Before (L26496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26496)

```diff
-       return void 0 === iv ? vv : `${WW(iv,zv)}${vv.slice(zv.length)}`
+       return void 0 === NT ? TT : `${jC(NT,kT)}${TT.slice(kT.length)}`
```

#### 2379. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26515` → after: `L26515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26515) · [Before (L26515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26515)

```diff
-   return void 0 === vv[3] || !(0, Wg.c)(vv, "*\\w")
+   return void 0 === TT[3] || !(0, jO.d)(TT, "*\\w")
```

#### 2380. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26525` → after: `L26525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26525) · [Before (L26525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26525)

```diff
-     return (0, Wg.s)(vv, sB, CB, (vv => {
+     return (0, jO.v)(TT, IU, AU, (TT => {
```

#### 2381. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26531-L26532` → after: `L26531-L26532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26531-L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26531-L26532) · [Before (L26531-L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26531-L26532)

```diff
-       const gv = null !== hv && void 0 !== hv ? hv : "*";
-       return (null !== Sv && void 0 !== Sv ? Sv : ev).split(/(\[\[[^\]\n]+\]\])/).map(((vv, zv) => {
+       const OT = null !== lT && void 0 !== lT ? lT : "*";
+       return (null !== MT && void 0 !== MT ? MT : KT).split(/(\[\[[^\]\n]+\]\])/).map(((TT, kT) => {
```

#### 2382. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26536` → after: `L26536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26536) · [Before (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26536)

```diff
-         return `${Pv}${gv}${vv.trim()}${gv}${hv}`
+         return `${cT}${OT}${TT.trim()}${OT}${lT}`
```

#### 2383. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26549-L26550` → after: `L26549-L26550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26549-L26550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26549-L26550) · [Before (L26549-L26550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26549-L26550)

```diff
-         wv = null === Wv || "heatmap" !== vv.link.key ? Wv : fg(ng(Wv, null === (Nv = Pv.checkData) || void 0 === Nv ? void 0 : Nv.heatmapEvents), Tv),
-         av = null !== wv || "heatmap" !== vv.link.key ? wv : LR(Dg(pv(hv), gv(hv + 1, ev.length) + Sv), {
+         jT = null === CT || "heatmap" !== TT.link.key ? CT : rO(mO(CT, null === (xT = cT.checkData) || void 0 === xT ? void 0 : xT.heatmapEvents), AT),
+         vT = null !== jT || "heatmap" !== TT.link.key ? jT : VH(zO(yT(lT), OT(lT + 1, KT.length) + MT), {
```

#### 2384. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26558` → after: `L26558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26558) · [Before (L26558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26558)

```diff
-       }, `${zv}stat-${hv}`)]
+       }, `${kT}stat-${lT}`)]
```

#### 2385. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26560` → after: `L26560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26560) · [Before (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26560)

```diff
-     return gB(vv.text, `${zv}${hv}`, Pv)
+     return kU(TT.text, `${kT}${lT}`, cT)
```

#### 2386. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26572` → after: `L26572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26572) · [Before (L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26572)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2387. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26575` → after: `L26575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26575) · [Before (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26575)

```diff
-     }), null === zv ? Pv("Studio has no data on this: a guess") : `${Pv("Only")} ${zv} ${Pv("players so far: a guess")}`]
+     }), null === kT ? cT("Studio has no data on this: a guess") : `${cT("Only")} ${kT} ${cT("players so far: a guess")}`]
```

#### 2388. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26588-L26589` → after: `L26588-L26589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26588-L26589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26588-L26589) · [Before (L26588-L26589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26588-L26589)

```diff
-     title: `${Pv("What your code says")}: ${zv.hint}`,
-     children: [(0, Tz.jsx)(mv.b, {
+     title: `${cT("What your code says")}: ${kT.hint}`,
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2389. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26617` → after: `L26617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26617) · [Before (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26617)

```diff
-         }), " ", Pv("events"), "" === vv.category ? "" : ` ${Pv("in")} ${vv.category}`, " ", Pv("are at"), " ", vv.text]
+         }), " ", cT("events"), "" === TT.category ? "" : ` ${cT("in")} ${TT.category}`, " ", cT("are at"), " ", TT.text]
```

#### 2390. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26624` → after: `L26624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26624) · [Before (L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26624)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2391. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26646` → after: `L26646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26646) · [Before (L26646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26646)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2392. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26649` → after: `L26649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26649) · [Before (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26649)

```diff
-     }), Pv ? `${zv.from} ${hv("also leads to")} ${zv.other}, ${hv("so players who didn't get to")} ${zv.to} ${hv("may have gone there instead")}.` : `${zv.from} ${hv("also leads on to")} ${zv.other} (${zv.otherShare}% ${hv("of its players")}), ${hv("so the")} ${zv.notTakenShare}% … [truncated]
+     }), cT ? `${kT.from} ${lT("also leads to")} ${kT.other}, ${lT("so players who didn't get to")} ${kT.to} ${lT("may have gone there instead")}.` : `${kT.from} ${lT("also leads on to")} ${kT.other} (${kT.otherShare}% ${lT("of its players")}), ${lT("so the")} ${kT.notTakenShare}% … [truncated]
```

#### 2393. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26670` → after: `L26670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26670) · [Before (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26670)

```diff
-           Tv = (0, Tg.V)(vv, ev.end);
+           AT = (0, CO.S)(TT, KT.end);
```

#### 2394. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26675-L26676` → after: `L26675-L26676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26675-L26676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26675-L26676) · [Before (L26675-L26676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26675-L26676)

```diff
-           text: "turned" === Nv ? `Studio turned this round: in your code ${lv}.` : `${hv?"Careful":"Check the direction"}: in your code ${lv}.`,
-           hint: "" === zv.usedIn ? `its name, ${zv.name}` : zv.usedIn
+           text: "turned" === xT ? `Studio turned this round: in your code ${IT}.` : `${lT?"Careful":"Check the direction"}: in your code ${IT}.`,
+           hint: "" === kT.usedIn ? `its name, ${kT.name}` : kT.usedIn
```

#### 2395. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26695` → after: `L26695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26695) · [Before (L26695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26695)

```diff
-         }, `bump-${Sv}`)
+         }, `bump-${MT}`)
```

#### 2396. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26702` → after: `L26702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26702) · [Before (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26702)

```diff
-       }, `guess-${Pv}`)
+       }, `guess-${cT}`)
```

#### 2397. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26708` → after: `L26708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26708) · [Before (L26708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26708)

```diff
-       }, `place-${Pv}`)
+       }, `place-${cT}`)
```

#### 2398. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26715` → after: `L26715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26715) · [Before (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26715)

```diff
-       }, `branch-${Pv}`)
+       }, `branch-${cT}`)
```

#### 2399. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26721` → after: `L26721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26721) · [Before (L26721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26721)

```diff
-       }, `constant-${Pv}`)
+       }, `constant-${cT}`)
```

#### 2400. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26727` → after: `L26727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26727) · [Before (L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26727)

```diff
-       }, `goal-${Pv}`)
+       }, `goal-${cT}`)
```

#### 2401. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26745` → after: `L26745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26745) · [Before (L26745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26745)

```diff
-     const ev = iB(dv(Nv, hv), `g${Pv}-`, zv, aB(dv(0, Nv)), aB(dv(hv)));
+     const KT = CU(fT(xT, lT), `g${cT}-`, kT, xU(fT(0, xT)), xU(fT(lT)));
```

#### 2402. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26747` → after: `L26747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26747) · [Before (L26747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26747)

```diff
-   })), ...iB(dv(Nv), `g${pv.length}-`, zv, aB(dv(0, Nv)))]
+   })), ...CU(fT(xT), `g${yT.length}-`, kT, xU(fT(0, xT)))]
```

#### 2403. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26790` → after: `L26790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26790) · [Before (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26790)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2404. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26823` → after: `L26823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26823) · [Before (L26823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26823)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2405. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26841-L26842` → after: `L26841-L26842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26841-L26842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26841-L26842) · [Before (L26841-L26842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26841-L26842)

```diff
-     title: null !== (zv = Pv.line) && void 0 !== zv ? zv : `"${Pv.text}"`,
-     children: [(0, Tz.jsx)(mv.b, {
+     title: null !== (kT = cT.line) && void 0 !== kT ? kT : `"${cT.text}"`,
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2406. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26861` → after: `L26861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26861) · [Before (L26861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26861)

```diff
-       return `"${zv}"`
+       return `"${kT}"`
```

#### 2407. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26872` → after: `L26872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26872) · [Before (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26872)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2408. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26875` → after: `L26875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26875) · [Before (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26875)

```diff
-     }), " ", Pv ? `${hv("Studio can't find")} ${Sv} ${hv("in your game")}: ${hv(ev?"use your own place's name":"use one your game has")}.` : `${hv("Is")} ${Sv} ${hv("in your game? If not, use one that is.")}`]
+     }), " ", cT ? `${lT("Studio can't find")} ${MT} ${lT("in your game")}: ${lT(KT?"use your own place's name":"use one your game has")}.` : `${lT("Is")} ${MT} ${lT("in your game? If not, use one that is.")}`]
```

#### 2409. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26885` → after: `L26885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26885) · [Before (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26885)

```diff
-   const Sv = Pv ? "badge" === zv.kind ? `${hv("Your game already has the")} "${zv.name}" ${hv("badge")}` : `${hv("Your game already sends")} "${zv.name}"` : "badge" === zv.kind ? hv("You already have this badge.") : hv("You already have this message.");
+   const MT = cT ? "badge" === kT.kind ? `${lT("Your game already has the")} "${kT.name}" ${lT("badge")}` : `${lT("Your game already sends")} "${kT.name}"` : "badge" === kT.kind ? lT("You already have this badge.") : lT("You already have this message.");
```

#### 2410. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26888` → after: `L26888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26888) · [Before (L26888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26888)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2411. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26985` → after: `L26985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26985) · [Before (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26985)

```diff
-   return tB((0, sc.z)(vv), zv)
+   return zU((0, CQ.v)(TT), kT)
```

#### 2412. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26996` → after: `L26996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR26996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L26996) · [Before (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L26996)

```diff
-     children: [Pv.includes(zv.counts) ? "" : `${zv.counts}. `, hv("Why this number"), ": ", zv.basis]
+     children: [cT.includes(kT.counts) ? "" : `${kT.counts}. `, lT("Why this number"), ": ", kT.basis]
```

#### 2413. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27001` → after: `L27001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27001) · [Before (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27001)

```diff
-   return `${zv("Target")}: ${vv.change} ${vv.counts}`
+   return `${kT("Target")}: ${TT.change} ${TT.counts}`
```

#### 2414. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27033` → after: `L27033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27033) · [Before (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27033)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2415. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27064` → after: `L27064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27064) · [Before (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27064)

```diff
-       Nv = vv => `${vv}%`,
+       xT = TT => `${TT}%`,
```

#### 2416. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27070` → after: `L27070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27070) · [Before (L27070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27070)

```diff
-         Wv = [`${Nv(ev)} ${Pv("of sessions")} ${Gj(Sv.minutes,Pv)}`], wv = Nv;
+         CT = [`${xT(KT)} ${cT("of sessions")} ${ta(MT.minutes,cT)}`], jT = xT;
```

#### 2417. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27073` → after: `L27073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27073) · [Before (L27073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27073)

```diff
-         Wv = [`${Nv(ev)} ${Pv("of players at")} `, {
+         CT = [`${xT(KT)} ${cT("of players at")} `, {
```

#### 2418. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27075` → after: `L27075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27075) · [Before (L27075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27075)

```diff
-         }, ` ${Pv("reach")} `, {
+         }, ` ${cT("reach")} `, {
```

#### 2419. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27077` → after: `L27077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27077) · [Before (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27077)

```diff
-         }, Sv.isOrLater ? ` ${Pv("or a later one")}` : ""], wv = Nv;
+         }, MT.isOrLater ? ` ${cT("or a later one")}` : ""], jT = xT;
```

#### 2420. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27080` → after: `L27080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27080) · [Before (L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27080)

```diff
-         Wv = [`${cj(Sv.toPlayers)} ${Pv("of the")} ${cj(Sv.fromPlayers)} ${Pv("players who reached")} ${Sv.from} ${Pv("also reached")} ${Sv.to} (${Nv(ev)})`], wv = Nv;
+         CT = [`${va(MT.toPlayers)} ${cT("of the")} ${va(MT.fromPlayers)} ${cT("players who reached")} ${MT.from} ${cT("also reached")} ${MT.to} (${xT(KT)})`], jT = xT;
```

#### 2421. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27083` → after: `L27083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27083) · [Before (L27083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27083)

```diff
-         Wv = [`${cj(ev)} ${Pv("plays a day")}`], wv = vv => `${cj(vv)} ${Pv("plays a day")}`;
+         CT = [`${va(KT)} ${cT("plays a day")}`], jT = TT => `${va(TT)} ${cT("plays a day")}`;
```

#### 2422. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27086` → after: `L27086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27086) · [Before (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27086)

```diff
-         Wv = [`${Pv("an average session lasts")} ${cj(ev)} ${Pv("minutes")}`], wv = vv => `${cj(vv)} ${Pv("minutes")}`;
+         CT = [`${cT("an average session lasts")} ${va(KT)} ${cT("minutes")}`], jT = TT => `${va(TT)} ${cT("minutes")}`;
```

#### 2423. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27089` → after: `L27089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27089) · [Before (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27089)

```diff
-         Wv = [`${Pv("each player plays")} ${cj(ev)} ${Pv("times in")} ${Sv.days} ${Pv("days")}`], wv = vv => `${cj(vv)} ${Pv("times")}`
+         CT = [`${cT("each player plays")} ${va(KT)} ${cT("times in")} ${MT.days} ${cT("days")}`], jT = TT => `${va(TT)} ${cT("times")}`
```

#### 2424. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27092` → after: `L27092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27092) · [Before (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27092)

```diff
-       sv = hv ? "" : `${Pv("now")} ${wv(ev)}`;
+       tT = lT ? "" : `${cT("now")} ${jT(KT)}`;
```

#### 2425. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27095-L27097` → after: `L27095-L27097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27095-L27097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27095-L27097) · [Before (L27095-L27097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27095-L27097)

```diff
-       const vv = hv ? "" : `, ${sv}`,
-         zv = lv ? `, ${Pv("the goal")}` : null === pv ? "" : `; ${Pv("the goal is")} ${Nv(pv)}`;
-       Cv = `${dv.helpedAt} ${Pv("above")} ${cj(dv.helpedPlayers)} (${Nv(gv)} ${Pv("of the new players")}${vv}${zv}) ${Tv}.`
+       const TT = lT ? "" : `, ${tT}`,
+         kT = IT ? `, ${cT("the goal")}` : null === yT ? "" : `; ${cT("the goal is")} ${xT(yT)}`;
+       hT = `${fT.helpedAt} ${cT("above")} ${va(fT.helpedPlayers)} (${xT(OT)} ${cT("of the new players")}${TT}${kT}) ${AT}.`
```

#### 2426. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27099-L27100` → after: `L27099-L27100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27099-L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27099-L27100) · [Before (L27099-L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27099-L27100)

```diff
-       const vv = av ? ` ${Pv("over those")} ${dv.days} ${Pv("days")}` : "";
-       Cv = `${lv?`${Pv(av?"an average of":"reaching")} ${wv(gv)}${vv} (${Pv("the goal")}${hv?"":`; ${sv}`})`:`${Pv(av?"an average above":"above")} ${wv(gv)}${vv}${hv?"":` (${sv})`}`} ${Tv}${lv||null===pv?"":` (${Pv("the goal is")} ${wv(pv)})`}.`
+       const TT = vT ? ` ${cT("over those")} ${fT.days} ${cT("days")}` : "";
+       hT = `${IT?`${cT(vT?"an average of":"reaching")} ${jT(OT)}${TT} (${cT("the goal")}${lT?"":`; ${tT}`})`:`${cT(vT?"an average above":"above")} ${jT(OT)}${TT}${lT?"":` (${tT})`}`} ${AT}${IT||null===yT?"":` (${cT("the goal is")} ${jT(yT)})`}.`
```

#### 2427. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27103` → after: `L27103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27103) · [Before (L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27103)

```diff
-       cv = null !== iv && iv.high >= gv ? ` ${Pv("In the last")} ${Lm} ${Pv("days, single days went from")} ${cj(iv.low)} ${Pv("to")} ${wv(iv.high)}, ${Pv("so go by the average")}.` : "";
+       QT = null !== NT && NT.high >= OT ? ` ${cT("In the last")} ${ED} ${cT("days, single days went from")} ${va(NT.low)} ${cT("to")} ${jT(NT.high)}, ${cT("so go by the average")}.` : "";
```

#### 2428. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27108` → after: `L27108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27108) · [Before (L27108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27108)

```diff
-         Gv = [`${Pv("In")} ${dv.days} ${Pv("days")}, ${Pv("check")} `, mj(vv), "days" !== dv.kind || av ? "" : ` ${Pv("over those days")}`, `: ${Pv("now")} `, ...Wv, `, ${Pv("and")} ${Cv}`];
+         ST = [`${cT("In")} ${fT.days} ${cT("days")}, ${cT("check")} `, ha(TT), "days" !== fT.kind || vT ? "" : ` ${cT("over those days")}`, `: ${cT("now")} `, ...CT, `, ${cT("and")} ${hT}`];
```

#### 2429. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27111` → after: `L27111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27111) · [Before (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27111)

```diff
-         Gv = [`${Pv("When")} ${dv.at} ${Pv("has about")} ${cj(dv.players)} ${Pv("players")}, ${Pv("check")} `, mj(vv), `: ${Cv}`]
+         ST = [`${cT("When")} ${fT.at} ${cT("has about")} ${va(fT.players)} ${cT("players")}, ${cT("check")} `, ha(TT), `: ${hT}`]
```

#### 2430. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27116` → after: `L27116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27116) · [Before (L27116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27116)

```diff
-           zv = [`${Pv("After your change, wait")} ${dv.days} ${Pv("days")} (${Pv("about")} ${cj(dv.count)} `, "plays" === dv.counts ? Pv("new plays") : Pv("new players at that step"), `), ${Pv("for the chart to count only those, then check")} `, mj(vv), ": "];
+           kT = [`${cT("After your change, wait")} ${fT.days} ${cT("days")} (${cT("about")} ${va(fT.count)} `, "plays" === fT.counts ? cT("new plays") : cT("new players at that step"), `), ${cT("for the chart to count only those, then check")} `, ha(TT), ": "];
```

#### 2431. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27119` → after: `L27119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27119) · [Before (L27119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27119)

```diff
-           zv = [`${Pv("After your change, wait")} ${dv.days} ${Pv("days, then check")} `, mj(vv), av ? ": " : ` ${Pv("over those days")}: `];
+           kT = [`${cT("After your change, wait")} ${fT.days} ${cT("days, then check")} `, ha(TT), vT ? ": " : ` ${cT("over those days")}: `];
```

#### 2432. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27122` → after: `L27122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27122) · [Before (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27122)

```diff
-           zv = [`${Pv("After your change, wait until")} ${dv.at} ${Pv("has about")} ${cj(dv.players)} ${Pv("players")} (${cj(dv.more)} ${Pv("more")}), ${Pv("then check")} `, mj(vv), ": "]
+           kT = [`${cT("After your change, wait until")} ${fT.at} ${cT("has about")} ${va(fT.players)} ${cT("players")} (${va(fT.more)} ${cT("more")}), ${cT("then check")} `, ha(TT), ": "]
```

#### 2433. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27124` → after: `L27124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27124) · [Before (L27124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27124)

```diff
-       Gv = [`${"sessionsLasting"===Sv.kind&&void 0!==Sv.after?`${Pv("Your change starts at")} ${Sv.after} ${Pv("minutes, so this checks the")} ${Sv.minutes}${Pv("-minute mark")}. `:""}${Pv("Now")}: `, ...Wv, ". ", ...zv, Cv, cv]
+       ST = [`${"sessionsLasting"===MT.kind&&void 0!==MT.after?`${cT("Your change starts at")} ${MT.after} ${cT("minutes, so this checks the")} ${MT.minutes}${cT("-minute mark")}. `:""}${cT("Now")}: `, ...CT, ". ", ...kT, hT, QT]
```

#### 2434. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27129` → after: `L27129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27129) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27129)

```diff
-       undo: null === vv.undo ? null : [`${Pv("If it got worse, put back")} `, {
+       undo: null === TT.undo ? null : [`${cT("If it got worse, put back")} `, {
```

#### 2435. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27131` → after: `L27131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27131) · [Before (L27131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27131)

```diff
-       }, ...null === vv.undo.inside ? [] : [` ${Pv("inside")} `, {
+       }, ...null === TT.undo.inside ? [] : [` ${cT("inside")} `, {
```

#### 2436. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27145` → after: `L27145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27145) · [Before (L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27145)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2437. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27180` → after: `L27180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27180) · [Before (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27180)

```diff
-   } = (0, wv.x)(), av = null === pv ? null : sj(Pv, pv, ev, Tv.constantLines), sv = function(vv, zv) {
+   } = (0, jT.B)(), vT = null === yT ? null : Aa(cT, yT, KT, AT.constantLines), tT = function(TT, kT) {
```

#### 2438. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27186` → after: `L27186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27186) · [Before (L27186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27186)

```diff
-   }(av, pv).join("\n"), Cv = (0, hv.useMemo)((() => "" === sv ? MB : sv.split("\n")), [sv]), iv = null !== av && null !== pv && Tv.isOlder ? yV(av, pv, dv) : null, {
+   }(vT, yT).join("\n"), hT = (0, lT.useMemo)((() => "" === tT ? ZU : tT.split("\n")), [tT]), NT = null !== vT && null !== yT && AT.isOlder ? EJ(vT, yT, fT) : null, {
```

#### 2439. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27251` → after: `L27251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27251) · [Before (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27251)

```diff
-   }(null !== (zv = null === fv || void 0 === fv ? void 0 : fv.nextChange) && void 0 !== zv ? zv : jv) : {
+   }(null !== (kT = null === FT || void 0 === FT ? void 0 : FT.nextChange) && void 0 !== kT ? kT : aT) : {
```

#### 2440. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27256-L27257` → after: `L27256-L27257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27256-L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27256-L27257) · [Before (L27256-L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27256-L27257)

```diff
-     return Pv.steps.indexOf(null !== (zv = Yv.get(vv)) && void 0 !== zv ? zv : vv)
-   }, Kv = Fv.steps.length, Vv = Fv.steps.filter((vv => nv.includes(Dv(vv)))).length, Uv = null !== ev && null !== Fv.target && Lc(Fv.target, ev.change), Rv = null !== ev && (null === av ? jv : Pv).blocks.some((vv => "list" === vv.kind ? vv.items.some((vv => Lc(vv.text, ev.change) … [truncated]
+     return cT.steps.indexOf(null !== (kT = PT.get(TT)) && void 0 !== kT ? kT : TT)
+   }, zT = rT.steps.length, JT = rT.steps.filter((TT => wT.includes(bT(TT)))).length, oT = null !== KT && null !== rT.target && ZQ(rT.target, KT.change), HT = null !== KT && (null === vT ? aT : cT).blocks.some((TT => "list" === TT.kind ? TT.items.some((TT => ZQ(TT.text, KT.change) … [truncated]
```

#### 2441. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27301` → after: `L27301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27301) · [Before (L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27301)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2442. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27306` → after: `L27306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27306) · [Before (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27306)

```diff
-         children: [null === Fv.title ? Wv(kl) : `${Wv(kl)}:`, null !== Fv.title && (0, Tz.jsxs)("span", {
+         children: [null === rT.title ? CT(qI) : `${CT(qI)}:`, null !== rT.title && (0, Ak.jsxs)("span", {
```

#### 2443. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27314` → after: `L27314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27314) · [Before (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27314)

```diff
-         children: `${Vv}/${Kv}`
+         children: `${JT}/${zT}`
```

#### 2444. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27329` → after: `L27329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27329) · [Before (L27329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27329)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2445. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27348` → after: `L27348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27348) · [Before (L27348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27348)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2446. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27364` → after: `L27364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27364) · [Before (L27364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27364)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2447. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27383` → after: `L27383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27383) · [Before (L27383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27383)

```diff
-     ev = 1 === Sv ? hv("in the first minute") : Sv < 1 ? hv("this early") : `${hv("in the first")} ${Sv} ${hv("minutes")}`,
+     KT = 1 === MT ? lT("in the first minute") : MT < 1 ? lT("this early") : `${lT("in the first")} ${MT} ${lT("minutes")}`,
```

#### 2448. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27388` → after: `L27388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27388) · [Before (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27388)

```diff
-     children: Pv ? `${hv("Nobody dies")} ${ev} ${hv("in your game, so this may not help")}.` : `${hv("Studio sees no deaths")} ${ev} (${hv("the earliest")}, ${zv.earliest.name}, ${hv("comes at")} ${gv} ${hv("min on average")}), ${hv("so this may not be why players leave")}.`
+     children: cT ? `${lT("Nobody dies")} ${KT} ${lT("in your game, so this may not help")}.` : `${lT("Studio sees no deaths")} ${KT} (${lT("the earliest")}, ${kT.earliest.name}, ${lT("comes at")} ${OT} ${lT("min on average")}), ${lT("so this may not be why players leave")}.`
```

#### 2449. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27401` → after: `L27401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27401) · [Before (L27401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27401)

```diff
-   } = (0, wv.x)(), Nv = ev.blocks.flatMap((vv => {
+   } = (0, jT.B)(), xT = KT.blocks.flatMap((TT => {
```

#### 2450. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27403-L27404` → after: `L27403-L27404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27403-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27403-L27404) · [Before (L27403-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27403-L27404)

```diff
-     return "list" === vv.kind ? [null !== (zv = null === (Pv = vv.items[0]) || void 0 === Pv ? void 0 : Pv.text) && void 0 !== zv ? zv : ""] : "paragraph" === vv.kind ? [vv.text] : []
-   }))[0], lv = null !== (zv = null !== (Pv = null !== (hv = null !== (Sv = ev.title) && void 0 !== Sv ? Sv : null === gv ? null : QB(gv, dv)) && void 0 !== hv ? hv : ev.target) && void 0 !== Pv ? Pv : Nv) && void 0 !== zv ? zv : null;
+     return "list" === TT.kind ? [null !== (kT = null === (cT = TT.items[0]) || void 0 === cT ? void 0 : cT.text) && void 0 !== kT ? kT : ""] : "paragraph" === TT.kind ? [TT.text] : []
+   }))[0], IT = null !== (kT = null !== (cT = null !== (lT = null !== (MT = KT.title) && void 0 !== MT ? MT : null === OT ? null : HU(OT, fT)) && void 0 !== lT ? lT : KT.target) && void 0 !== cT ? cT : xT) && void 0 !== kT ? kT : null;
```

#### 2451. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27407` → after: `L27407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27407) · [Before (L27407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27407)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2452. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27444` → after: `L27444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27444) · [Before (L27444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27444)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2453. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27502` → after: `L27502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27502) · [Before (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27502)

```diff
-     return null !== (vv = gn(sv, Cv, Ov)) && void 0 !== vv ? vv : function(vv, zv, Pv, hv) {
+     return null !== (TT = Tw(tT, hT, mT)) && void 0 !== TT ? TT : function(TT, kT, cT, lT) {
```

#### 2454. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27506` → after: `L27506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27506) · [Before (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27506)

```diff
-       const pv = null !== (Sv = Vy[gv[1].toLowerCase()]) && void 0 !== Sv ? Sv : Number(gv[1]),
+       const yT = null !== (MT = Pg[OT[1].toLowerCase()]) && void 0 !== MT ? MT : Number(OT[1]),
```

#### 2455. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27508` → after: `L27508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27508) · [Before (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27508)

```diff
-       if (pv < 1 || vv.length > Tg.y || Gy.test(zv) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(dv)) return null;
+       if (yT < 1 || TT.length > CO.u || vg.test(kT) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(fT)) return null;
```

#### 2456. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27512` → after: `L27512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27512) · [Before (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27512)

```diff
-           return null !== (zv = null === (Pv = Uy.exec(vv)) || void 0 === Pv ? void 0 : Pv[1]) && void 0 !== zv ? zv : null
+           return null !== (kT = null === (cT = wg.exec(TT)) || void 0 === cT ? void 0 : cT[1]) && void 0 !== kT ? kT : null
```

#### 2457. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27516` → after: `L27516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27516) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27516)

```diff
-         wv = null !== (ev = zv.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== ev ? ev : [],
+         jT = null !== (KT = kT.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== KT ? KT : [],
```

#### 2458. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27519` → after: `L27519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27519) · [Before (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27519)

```diff
-       return null !== Tv && 0 !== Nv.length && av && void 0 !== sv ? gn([`if (Date.now() - ${sv}[${Tv}] >= ${6e4*pv}) {`, ...Nv.map((vv => `  ${vv}`)), "}"].join("\n"), "onPlayerJoin", hv) : null
+       return null !== AT && 0 !== xT.length && vT && void 0 !== tT ? Tw([`if (Date.now() - ${tT}[${AT}] >= ${6e4*yT}) {`, ...xT.map((TT => `  ${TT}`)), "}"].join("\n"), "onPlayerJoin", lT) : null
```

#### 2459. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27535` → after: `L27535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27535) · [Before (L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27535)

```diff
-         }))).size ? zv[0] : null !== (Tv = null === (Wv = Ay(hv, vv, Pv)[0]) || void 0 === Wv ? void 0 : Wv.event) && void 0 !== Tv ? Tv : null,
+         }))).size ? kT[0] : null !== (AT = null === (CT = Gg(lT, TT, cT)[0]) || void 0 === CT ? void 0 : CT.event) && void 0 !== AT ? AT : null,
```

#### 2460. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27549` → after: `L27549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27549) · [Before (L27549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27549)

```diff
-     if (void 0 === av || null === zv || zv.length > Tg.y) return null;
+     if (void 0 === vT || null === kT || kT.length > CO.u) return null;
```

#### 2461. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27551` → after: `L27551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27551) · [Before (L27551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27551)

```diff
-       Cv = new Set([...null !== (ev = av.params) && void 0 !== ev ? ev : [], ...null !== (gv = av.idNames) && void 0 !== gv ? gv : [], ...null !== (pv = null === (dv = av.body) || void 0 === dv ? void 0 : dv.locals) && void 0 !== pv ? pv : []]),
+       hT = new Set([...null !== (KT = vT.params) && void 0 !== KT ? KT : [], ...null !== (OT = vT.idNames) && void 0 !== OT ? OT : [], ...null !== (yT = null === (fT = vT.body) || void 0 === fT ? void 0 : fT.locals) && void 0 !== yT ? yT : []]),
```

#### 2462. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27555-L27556` → after: `L27555-L27556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27555-L27556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27555-L27556) · [Before (L27555-L27556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27555-L27556)

```diff
-           gv = null !== (zv = null === (hv = vv.numberExpression) || void 0 === hv ? void 0 : hv.trim()) && void 0 !== zv ? zv : "",
-           pv = null === ev ? void 0 : (null !== (Sv = Pv.functions) && void 0 !== Sv ? Sv : []).find((vv => vv.name === ev[ev.length - 1])),
+           OT = null !== (kT = null === (lT = TT.numberExpression) || void 0 === lT ? void 0 : lT.trim()) && void 0 !== kT ? kT : "",
+           yT = null === KT ? void 0 : (null !== (MT = cT.functions) && void 0 !== MT ? MT : []).find((TT => TT.name === KT[KT.length - 1])),
```

#### 2463. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27569` → after: `L27569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27569) · [Before (L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27569)

```diff
-   }(Cv, sv, Ov, Gv) : null), [Vv, Cv, sv, Ov, Gv]), Rv = null !== (zv = null === Vv || void 0 === Vv ? void 0 : Vv.code) && void 0 !== zv ? zv : sv, xv = null !== (Pv = null !== (Sv = null === Vv || void 0 === Vv ? void 0 : Vv.where) && void 0 !== Sv ? Sv : null === Uv || void 0  … [truncated]
+   }(hT, tT, mT, ST) : null), [JT, hT, tT, mT, ST]), HT = null !== (kT = null === JT || void 0 === JT ? void 0 : JT.code) && void 0 !== kT ? kT : tT, eT = null !== (cT = null !== (MT = null === JT || void 0 === JT ? void 0 : JT.where) && void 0 !== MT ? MT : null === oT || void 0  … [truncated]
```

#### 2464. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27574` → after: `L27574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27574) · [Before (L27574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27574)

```diff
-     const zv = null === tv ? Rv : tv.code;
+     const kT = null === GT ? HT : GT.code;
```

#### 2465. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27578` → after: `L27578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27578) · [Before (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27578)

```diff
-       runnable: null === Pv || null === hv ? Pv : {
+       runnable: null === cT || null === lT ? cT : {
```

#### 2466. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27584-L27585` → after: `L27584-L27585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27584-L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27584-L27585) · [Before (L27584-L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27584-L27585)

```diff
-   }), [tv, Rv, xv, Ov, Dv, Kv]), Qv = null !== (ev = null === qv || void 0 === qv ? void 0 : qv.code) && void 0 !== ev ? ev : null, Zv = (0, hv.useMemo)((() => null === (null === qv || void 0 === qv ? void 0 : qv.once) || null === qv ? [] : [qv.once.name]), [qv]), Av = (0, hv.use … [truncated]
-     return !(null === vv || vv.length > Tg.y) && wU(vv).split("\n").some((vv => pU.test(vv) && lU.test(vv)))
+   }), [GT, HT, eT, mT, bT, zT]), ZT = null !== (KT = null === VT || void 0 === VT ? void 0 : VT.code) && void 0 !== KT ? KT : null, uT = (0, lT.useMemo)((() => null === (null === VT || void 0 === VT ? void 0 : VT.once) || null === VT ? [] : [VT.once.name]), [VT]), XT = (0, lT.use … [truncated]
+     return !(null === TT || TT.length > CO.u) && yo(TT).split("\n").some((TT => To.test(TT) && Mo.test(TT)))
```

#### 2467. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27589` → after: `L27589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27589) · [Before (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27589)

```diff
-     const vv = [...FO(null !== Rv && void 0 !== Rv ? Rv : "", bv, !0), ...FO(cv, bv)];
+     const TT = [...hm(null !== HT && void 0 !== HT ? HT : "", nT, !0), ...hm(QT, nT)];
```

#### 2468. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27611` → after: `L27611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27611) · [Before (L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27611)

```diff
-       const [, Tv, Wv, wv] = lv, av = MN(Wv), sv = null !== (Sv = null === av || void 0 === av ? void 0 : av.key) && void 0 !== Sv ? Sv : Wv, Cv = `${sv}: ${wv.trim()},`, iv = null === zv || null === (ev = vl.exec(zv)) || void 0 === ev ? void 0 : ev[1];
+       const [, AT, CT, jT] = IT, vT = gx(CT), tT = null !== (MT = null === vT || void 0 === vT ? void 0 : vT.key) && void 0 !== MT ? MT : CT, hT = `${tT}: ${jT.trim()},`, NT = null === kT || null === (KT = kI.exec(kT)) || void 0 === KT ? void 0 : KT[1];
```

#### 2469. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27622` → after: `L27622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27622) · [Before (L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27622)

```diff
-         code: `${cv[1]} ${Wv} = ${wv.trim()}`,
+         code: `${QT[1]} ${CT} = ${jT.trim()}`,
```

#### 2470. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27638` → after: `L27638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27638) · [Before (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27638)

```diff
-         jv = void 0 !== Gv && Gv.startsWith(`${sv}:`) ? Gv : null !== mv && mv[1] === Wv ? `${sv}: ${mv[2].trim()},` : null;
+         aT = void 0 !== ST && ST.startsWith(`${tT}:`) ? ST : null !== DT && DT[1] === CT ? `${tT}: ${DT[2].trim()},` : null;
```

#### 2471. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27641` → after: `L27641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27641) · [Before (L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27641)

```diff
-         where: `${hv("Replace the line")} \`${jv}\` ${hv("inside")} \`${av.object}\``
+         where: `${lT("Replace the line")} \`${aT}\` ${lT("inside")} \`${vT.object}\``
```

#### 2472. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27644` → after: `L27644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27644) · [Before (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27644)

```diff
-         where: void 0 === iv ? `${hv("Replace the line starting")} \`${sv}:\` ${hv("inside")} \`${av.object}\`` : zv
+         where: void 0 === NT ? `${lT("Replace the line starting")} \`${tT}:\` ${lT("inside")} \`${vT.object}\`` : kT
```

#### 2473. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27655` → after: `L27655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27655) · [Before (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27655)

```diff
-         gv = null === ev ? void 0 : null !== (Pv = zv.get(ev[1])) && void 0 !== Pv ? Pv : zv.get(null !== (hv = null === (Sv = MN(ev[1])) || void 0 === Sv ? void 0 : Sv.key) && void 0 !== hv ? hv : ""),
+         OT = null === KT ? void 0 : null !== (cT = kT.get(KT[1])) && void 0 !== cT ? cT : kT.get(null !== (lT = null === (MT = gx(KT[1])) || void 0 === MT ? void 0 : MT.key) && void 0 !== lT ? lT : ""),
```

#### 2474. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27665` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27665) · [Before (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27665)

```diff
-     if (null !== Iv) return null !== (vv = Iv.added) && void 0 !== vv ? vv : {
+     if (null !== ET) return null !== (TT = ET.added) && void 0 !== TT ? TT : {
```

#### 2475. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27688` → after: `L27688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27688) · [Before (L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27688)

```diff
-   }), [Iv, qv, Qv, xv, Ov, Zv]), hz = null === vz ? Xv : 0 === Pz.top.length ? fv("Paste at the bottom of your World Code") : Pz.join.length > 0 ? fv("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === Pz.top.length ? fv("Paste the line abov … [truncated]
+   }), [ET, VT, ZT, eT, mT, uT]), lk = null === Tk ? qT : 0 === ck.top.length ? FT("Paste at the bottom of your World Code") : ck.join.length > 0 ? FT("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === ck.top.length ? FT("Paste the line abov … [truncated]
```

#### 2476. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27690-L27691` → after: `L27690-L27691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27690-L27691) · [Before (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27690-L27691)

```diff
-     return null === vz ? vv : vv.filter((vv => !vz.params.includes(vv)))
-   }), [Iv, Qv, xv, Ov, Zv, vz]), ez = null === yv && null === Bv && 0 === Ev.length && 0 === Jv.length && (null !== Iv || 0 === Sz.length) && !Hv, gz = ez && (null === (null === qv || void 0 === qv ? void 0 : qv.once) || null !== (null === qv || void 0 === qv ? void 0 : qv.loopNa … [truncated]
+     return null === Tk ? TT : TT.filter((TT => !Tk.params.includes(TT)))
+   }), [ET, ZT, eT, mT, uT, Tk]), Kk = null === gT && null === UT && 0 === BT.length && 0 === YT.length && (null !== ET || 0 === Mk.length) && !LT, Ok = Kk && (null === (null === VT || void 0 === VT ? void 0 : VT.once) || null !== (null === VT || void 0 === VT ? void 0 : VT.loopNa … [truncated]
```

#### 2477. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27698` → after: `L27698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27698) · [Before (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27698)

```diff
-       return `${vv.slice(0,ev)}${zv.test} && ${hv.cond}${vv.slice(ev+hv.cond.length)}`
+       return `${TT.slice(0,KT)}${kT.test} && ${lT.cond}${TT.slice(KT+lT.cond.length)}`
```

#### 2478. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27702` → after: `L27702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27702) · [Before (L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27702)

```diff
-     return null === ev || /^(?:const|let|var|class|function)\b/.test(ev) || /;\s*\S/.test(GY(ev)) ? [`if (${zv.test}) {`, ...Sv.map((vv => `  ${vv}`)), "}"].join("\n") : `if (${zv.test}) ${ev}`
+     return null === KT || /^(?:const|let|var|class|function)\b/.test(KT) || /;\s*\S/.test(jP(KT)) ? [`if (${kT.test}) {`, ...MT.map((TT => `  ${TT}`)), "}"].join("\n") : `if (${kT.test}) ${KT}`
```

#### 2479. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27710` → after: `L27710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27710) · [Before (L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27710)

```diff
-   }(pz.after, dz) : Nz ? null : gz && null === vz ? nU(BO(kv, Xv, Ov, cv), cv, Ov) : null), [pz, dz, Nz, gz, vz, kv, Xv, Ov, cv]), Wz = null !== (gv = null === Iv || void 0 === Iv ? void 0 : Iv.added) && void 0 !== gv ? gv : null, wz = (0, hv.useMemo)((() => null === Wz ? null :  … [truncated]
+   }(yk.after, fk) : xk ? null : Ok && null === Tk ? So(Zm(iT, qT, mT, QT), QT, mT) : null), [yk, fk, xk, Ok, Tk, iT, qT, mT, QT]), Ck = null !== (OT = null === ET || void 0 === ET ? void 0 : ET.added) && void 0 !== OT ? OT : null, jk = (0, lT.useMemo)((() => null === Ck ? null :  … [truncated]
```

#### 2480. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27721` → after: `L27721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27721) · [Before (L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27721)

```diff
-     ["leftOut", (null !== (pv = null === tv || void 0 === tv ? void 0 : tv.leftOut.length) && void 0 !== pv ? pv : 0) > 0],
+     ["leftOut", (null !== (yT = null === GT || void 0 === GT ? void 0 : GT.leftOut.length) && void 0 !== yT ? yT : 0) > 0],
```

#### 2481. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27727` → after: `L27727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27727) · [Before (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27727)

```diff
-   }))) || void 0 === Nv ? void 0 : Nv[0]) && void 0 !== dv ? dv : null, sz = vv => !Dv || az === vv, Cz = sz("leftOut") ? XB(null !== (lv = null === tv || void 0 === tv ? void 0 : tv.leftOut) && void 0 !== lv ? lv : [], Dv) : [], iz = (0, hv.useMemo)((() => null !== pz ? {
+   }))) || void 0 === xT ? void 0 : xT[0]) && void 0 !== fT ? fT : null, tk = TT => !bT || vk === TT, hk = tk("leftOut") ? BU(null !== (IT = null === GT || void 0 === GT ? void 0 : GT.leftOut) && void 0 !== IT ? IT : [], bT) : [], Nk = (0, lT.useMemo)((() => null !== yk ? {
```

#### 2482. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27734` → after: `L27734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27734) · [Before (L27734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27734)

```diff
-     if ((null !== (hv = zv.match(/\([^()]*\)/g)) && void 0 !== hv ? hv : []).some((vv => !XR.test(vv))) || kR.test(zv) || yO(vv)) return null;
+     if ((null !== (lT = kT.match(/\([^()]*\)/g)) && void 0 !== lT ? lT : []).some((TT => !BH.test(TT))) || YH.test(kT) || Em(TT)) return null;
```

#### 2483. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27739` → after: `L27739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27739) · [Before (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27739)

```diff
-     return (0, Wg.f)(gv, /return(?![\w$])/, Wg.l).length > 0 || Sv.body.locals.some((vv => Ga(gv, vv) && !ca(gv, vv))) ? null : {
+     return (0, jO.h)(OT, /return(?![\w$])/, jO.p).length > 0 || MT.body.locals.some((TT => Sv(OT, TT) && !Qv(OT, TT))) ? null : {
```

#### 2484. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27745-L27746` → after: `L27745-L27746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27745-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27745-L27746) · [Before (L27745-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27745-L27746)

```diff
-     const zv = vv === Xv ? iz : null,
-       Pv = vv === Xv && null !== Uv && Xv === Uv.name ? Uv : null;
+     const kT = TT === qT ? Nk : null,
+       cT = TT === qT && null !== oT && qT === oT.name ? oT : null;
```

#### 2485. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27761` → after: `L27761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27761) · [Before (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27761)

```diff
-           title: `${zv.after.source}, ${fv("line")} ${zv.after.line}: ${zv.after.text}`,
+           title: `${kT.after.source}, ${FT("line")} ${kT.after.line}: ${kT.after.text}`,
```

#### 2486. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27787` → after: `L27787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27787) · [Before (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27787)

```diff
-           children: [(0, Tz.jsx)(mv.b, {
+           children: [(0, Ak.jsx)(DT.e, {
```

#### 2487. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27792` → after: `L27792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27792) · [Before (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27792)

```diff
-           code: null !== (Tv = null !== (Wv = null === vz || void 0 === vz ? void 0 : vz.code) && void 0 !== Wv ? Wv : dz) && void 0 !== Tv ? Tv : kv,
+           code: null !== (AT = null !== (CT = null === Tk || void 0 === Tk ? void 0 : Tk.code) && void 0 !== CT ? CT : fk) && void 0 !== AT ? AT : iT,
```

#### 2488. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27797` → after: `L27797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27797) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27797)

```diff
-           children: PB(null !== (wv = null !== (av = null === vz || void 0 === vz ? void 0 : vz.code) && void 0 !== av ? av : dz) && void 0 !== wv ? wv : kv, "next-change-code", jv, "pasteCode")
+           children: ig(null !== (jT = null !== (vT = null === Tk || void 0 === Tk ? void 0 : Tk.code) && void 0 !== vT ? vT : fk) && void 0 !== jT ? jT : iT, "next-change-code", aT, "pasteCode")
```

#### 2489. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27836` → after: `L27836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27836) · [Before (L27836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27836)

```diff
-         }), "):", " ", null === Av.line ? `"${Av.text}"` : (0, Tz.jsx)("code", {
+         }), "):", " ", null === XT.line ? `"${XT.text}"` : (0, Ak.jsx)("code", {
```

#### 2490. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27919` → after: `L27919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27919) · [Before (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27919)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2491. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27937` → after: `L27937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27937) · [Before (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27937)

```diff
-       children: [Sv > 0 && (Sv === zv.length - 1 ? ` ${Pv("and")} ` : ", "), (0, Tz.jsx)("code", {
+       children: [MT > 0 && (MT === kT.length - 1 ? ` ${cT("and")} ` : ", "), (0, Ak.jsx)("code", {
```

#### 2492. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27946` → after: `L27946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27946) · [Before (L27946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27946)

```diff
-   return vv.length <= 1 ? null !== (Pv = vv[0]) && void 0 !== Pv ? Pv : "" : `${vv.slice(0,-1).join(", ")} ${zv("and")} ${vv[vv.length-1]}`
+   return TT.length <= 1 ? null !== (cT = TT[0]) && void 0 !== cT ? cT : "" : `${TT.slice(0,-1).join(", ")} ${kT("and")} ${TT[TT.length-1]}`
```

#### 2493. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27959` → after: `L27959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27959) · [Before (L27959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27959)

```diff
-       children: "gives" === zv.kind ? `${hv("You already give")} ${vJ(zv.items,hv)}.` : hv(vv ? "You already have this welcome message." : "You already have this message.")
+       children: "gives" === kT.kind ? `${lT("You already give")} ${nU(kT.items,lT)}.` : lT(TT ? "You already have this welcome message." : "You already have this message.")
```

#### 2494. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27971` → after: `L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27971) · [Before (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27971)

```diff
-       }), "): ", null === zv.line ? `"${zv.text}"` : (0, Tz.jsx)("code", {
+       }), "): ", null === kT.line ? `"${kT.text}"` : (0, Ak.jsx)("code", {
```

#### 2495. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L27987` → after: `L27987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L27987) · [Before (L27987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L27987)

```diff
-       children: `api.${zv}`
+       children: `api.${kT}`
```

#### 2496. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28002` → after: `L28002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28002) · [Before (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28002)

```diff
-       children: `const ${zv} = ${Pv}`
+       children: `const ${kT} = ${cT}`
```

#### 2497. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28029` → after: `L28029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28029) · [Before (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28029)

```diff
-     of null !== (Tv = null === Pv || void 0 === Pv ? void 0 : Pv.renames) && void 0 !== Tv ? Tv : []) {
+     of null !== (AT = null === cT || void 0 === cT ? void 0 : cT.renames) && void 0 !== AT ? AT : []) {
```

#### 2498. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28035` → after: `L28035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28035) · [Before (L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28035)

```diff
-     }, `young-${Wv}`))
+     }, `young-${CT}`))
```

#### 2499. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28053` → after: `L28053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28053) · [Before (L28053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28053)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2500. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28064` → after: `L28064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28064) · [Before (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28064)

```diff
-   return 1 === Pv.length ? `${zv("line")} ${Pv[0]}` : `${zv("lines")} ${vJ(Pv.map(String),zv)}`
+   return 1 === cT.length ? `${kT("line")} ${cT[0]}` : `${kT("lines")} ${nU(cT.map(String),kT)}`
```

#### 2501. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28080` → after: `L28080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28080) · [Before (L28080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28080)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2502. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28143` → after: `L28143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28143) · [Before (L28143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28143)

```diff
-     }), " ", hv ? gv : pv]
+     }), " ", lT ? OT : yT]
```

#### 2503. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28176` → after: `L28176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28176) · [Before (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28176)

```diff
-         children: [(0, Tz.jsx)(mv.b, {
+         children: [(0, Ak.jsx)(DT.e, {
```

#### 2504. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28222` → after: `L28222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28222) · [Before (L28222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28222)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2505. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28266` → after: `L28266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28266) · [Before (L28266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28266)

```diff
-         children: "insert" === zv.kind ? `  ${vv}` : vv
+         children: "insert" === kT.kind ? `  ${TT}` : TT
```

#### 2506. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28268` → after: `L28268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28268) · [Before (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28268)

```diff
-     }, `added-${Pv}`))), "insert" === zv.kind && zv.next.map(((vv, zv) => (0, Tz.jsxs)("span", {
+     }, `added-${cT}`))), "insert" === kT.kind && kT.next.map(((TT, kT) => (0, Ak.jsxs)("span", {
```

#### 2507. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28274` → after: `L28274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28274) · [Before (L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28274)

```diff
-         children: `  ${vv}`
+         children: `  ${TT}`
```

#### 2508. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28276` → after: `L28276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28276) · [Before (L28276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28276)

```diff
-     }, `next-${zv}`))), "insert" === zv.kind && zv.next.length >= lJ && (0, Tz.jsxs)("span", {
+     }, `next-${kT}`))), "insert" === kT.kind && kT.next.length >= KY && (0, Ak.jsxs)("span", {
```

#### 2509. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28308` → after: `L28308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28308) · [Before (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28308)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2510. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28368` → after: `L28368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28368) · [Before (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28368)

```diff
-   return [vv, ...zv.map((vv => "string" === typeof vv ? vv : "code" in vv ? vv.code : ""))].join(" ")
+   return [TT, ...kT.map((TT => "string" === typeof TT ? TT : "code" in TT ? TT.code : ""))].join(" ")
```

#### 2511. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28381` → after: `L28381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28381) · [Before (L28381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28381)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2512. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28384` → after: `L28384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28384) · [Before (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28384)

```diff
-     }), Sv("Your events"), (0, Tz.jsx)(mv.b, {
+     }), MT("Your events"), (0, Ak.jsx)(DT.e, {
```

#### 2513. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28392` → after: `L28392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28392) · [Before (L28392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28392)

```diff
-     return void 0 === hv ? null : `${zv("Only")} ${(0,Tg.n)(hv)} ${zv("players this week, so these are hints.")}`
+     return void 0 === lT ? null : `${kT("Only")} ${(0,CO.m)(lT)} ${kT("players this week, so these are hints.")}`
```

#### 2514. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28402` → after: `L28402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28402) · [Before (L28402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28402)

```diff
-         gv = "spot" === ev.kind && nw(vv.eventType) && "" !== ev.value ? `${vv.eventType}: ${ev.value}` : null,
+         OT = "spot" === KT.kind && wj(TT.eventType) && "" !== KT.value ? `${TT.eventType}: ${KT.value}` : null,
```

#### 2515. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28444` → after: `L28444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28444) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28444)

```diff
-       missing: `${Sv("Want to see what players do? Add one tracking line: see")} "${null!==hv&&void 0!==hv?hv:""}" ${Sv("below.")}`,
+       missing: `${MT("Want to see what players do? Add one tracking line: see")} "${null!==lT&&void 0!==lT?lT:""}" ${MT("below.")}`,
```

#### 2516. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28453` → after: `L28453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28453) · [Before (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28453)

```diff
-       const vv = ev.days < 7 ? ` (${ev.days} ${1===ev.days?Sv("day"):Sv("days")})` : "",
+       const TT = KT.days < 7 ? ` (${KT.days} ${1===KT.days?MT("day"):MT("days")})` : "",
```

#### 2517. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28455` → after: `L28455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28455) · [Before (L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28455)

```diff
-       gv = 0 === ev.players ? Sv("No players this week, so treat the reasons below as guesses.") : `${Sv("Only")} ${ev.players} ${zv}${vv}: ${Sv("too few to tell why people leave, so treat the reasons below as guesses.")}`, pv = ev.eventTypes
+       OT = 0 === KT.players ? MT("No players this week, so treat the reasons below as guesses.") : `${MT("Only")} ${KT.players} ${kT}${TT}: ${MT("too few to tell why people leave, so treat the reasons below as guesses.")}`, yT = KT.eventTypes
```

#### 2518. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28458` → after: `L28458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28458) · [Before (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28458)

```diff
-     0 === zv.length && pv.length > 0 ? dv = [`${Sv("You already log")} `, ...dF(pv.slice(0, NF), Sv), `: ${Sv("they will say more as players come.")}`] : 0 === zv.length && null !== hv && (dv = [`${Sv("Start with the line under")} "${hv}" ${Sv("below.")}`]);
+     0 === kT.length && yT.length > 0 ? fT = [`${MT("You already log")} `, ...cr(yT.slice(0, lr), MT), `: ${MT("they will say more as players come.")}`] : 0 === kT.length && null !== lT && (fT = [`${MT("Start with the line under")} "${lT}" ${MT("below.")}`]);
```

#### 2519. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28460` → after: `L28460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28460) · [Before (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28460)

```diff
-     return zv.length > 0 ? Nv = [`${Sv("Studio shows each one after about")} ${Af} ${Sv("players send it")}: `, {
+     return kT.length > 0 ? xT = [`${MT("Studio shows each one after about")} ${eF} ${MT("players send it")}: `, {
```

#### 2520. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28462` → after: `L28462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28462) · [Before (L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28462)

```diff
-     }] : "fewPlayers" === ev.kind && (Nv = [`${Sv("Studio can say why players leave after about")} ${Zf} ${Sv("players a week")}: `, {
+     }] : "fewPlayers" === KT.kind && (xT = [`${MT("Studio can say why players leave after about")} ${HF} ${MT("players a week")}: `, {
```

#### 2521. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28475` → after: `L28475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28475) · [Before (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28475)

```diff
-   }), wv = `${Pv.length} ${1===Pv.length?pv("event to log"):pv("events to log")}`;
+   }), jT = `${cT.length} ${1===cT.length?yT("event to log"):yT("events to log")}`;
```

#### 2522. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28482` → after: `L28482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28482) · [Before (L28482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28482)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2523. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28497` → after: `L28497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28497) · [Before (L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28497)

```diff
-     }), 0 === Pv.length ? Wv : (0, Tz.jsxs)("details", {
+     }), 0 === cT.length ? CT : (0, Ak.jsxs)("details", {
```

#### 2524. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28500` → after: `L28500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28500) · [Before (L28500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28500)

```diff
-         children: [(0, Tz.jsx)(mv.b, {
+         children: [(0, Ak.jsx)(DT.e, {
```

#### 2525. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28554` → after: `L28554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28554) · [Before (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28554)

```diff
-               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${vv.verdict}`,
+               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${TT.verdict}`,
```

#### 2526. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28566` → after: `L28566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28566) · [Before (L28566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28566)

```diff
-         className: `StudioAiJourneyStep StudioAiJourneyStep-${vv.verdict}`,
+         className: `StudioAiJourneyStep StudioAiJourneyStep-${TT.verdict}`,
```

#### 2527. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28602` → after: `L28602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28602) · [Before (L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28602)

```diff
-     children: [(0, Tz.jsx)(mv.b, {
+     children: [(0, Ak.jsx)(DT.e, {
```

#### 2528. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28653` → after: `L28653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28653) · [Before (L28653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28653)

```diff
-   } = (0, wv.x)(), [tv, qv] = (0, hv.useState)(null), Iv = null !== Gv && SU(pv);
+   } = (0, jT.B)(), [GT, VT] = (0, lT.useState)(null), ET = null !== ST && iJ(yT);
```

#### 2529. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28670` → after: `L28670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28670) · [Before (L28670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28670)

```diff
-     Lv = (0, hv.useMemo)((() => cn(pv, null !== Cv && void 0 !== Cv ? Cv : new Set)), [pv, Cv]);
+     dT = (0, lT.useMemo)((() => Aw(yT, null !== hT && void 0 !== hT ? hT : new Set)), [yT, hT]);
```

#### 2530. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28689` → after: `L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28689) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28689)

```diff
-       journey: null !== Wv && void 0 !== Wv ? Wv : null,
+       journey: null !== CT && void 0 !== CT ? CT : null,
```

#### 2531. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28716` → after: `L28716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28716) · [Before (L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28716)

```diff
-       isCodeInPlaceOpen: null === fv ? !0 === sv : kC(fv),
+       isCodeInPlaceOpen: null === FT ? !0 === tT : ph(FT),
```

#### 2532. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28730` → after: `L28730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28730) · [Before (L28730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28730)

```diff
-     vv.length > 0 && console.info(`The Studio AI answer cited ${vv.length} statistics Studio doesn't have, which are left out`, vv)
+     TT.length > 0 && console.info(`The Studio AI answer cited ${TT.length} statistics Studio doesn't have, which are left out`, TT)
```

#### 2533. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28734` → after: `L28734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28734) · [Before (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28734)

```diff
-       children: 1 === Bv ? xv("Studio left out 1 idea that doesn't fit your game.") : `${xv("Studio left out")} ${Bv} ${xv("ideas that don't fit your game")}.`
+       children: 1 === UT ? eT("Studio left out 1 idea that doesn't fit your game.") : `${eT("Studio left out")} ${UT} ${eT("ideas that don't fit your game")}.`
```

#### 2534. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28738` → after: `L28738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28738) · [Before (L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28738)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2535. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28743` → after: `L28743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28743) · [Before (L28743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28743)

```diff
-     Xv = null !== (zv = null !== sv && void 0 !== sv ? sv : null === Mv || void 0 === Mv ? void 0 : Mv.sections.some((vv => "fixFirst" === vv.key && vv.heading === ul("fixFirst", !0)))) && void 0 !== zv && zv,
+     qT = null !== (kT = null !== tT && void 0 !== tT ? tT : null === RT || void 0 === RT ? void 0 : RT.sections.some((TT => "fixFirst" === TT.key && TT.heading === TA("fixFirst", !0)))) && void 0 !== kT && kT,
```

#### 2536. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28750` → after: `L28750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28750) · [Before (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28750)

```diff
-     zz = vv => 0 === Ja(vv).length ? vv : Ea(vv),
+     kk = TT => 0 === Yv(TT).length ? TT : Bv(TT),
```

#### 2537. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28753` → after: `L28753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28753) · [Before (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28753)

```diff
-     Sz = null !== (Pv = null === hz || void 0 === hz ? void 0 : hz.nextChange) && void 0 !== Pv ? Pv : null,
+     Mk = null !== (cT = null === lk || void 0 === lk ? void 0 : lk.nextChange) && void 0 !== cT ? cT : null,
```

#### 2538. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28766` → after: `L28766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28766) · [Before (L28766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28766)

```diff
-   const gz = null !== av && void 0 !== av ? av : [],
+   const Ok = null !== vT && void 0 !== vT ? vT : [],
```

#### 2539. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28768` → after: `L28768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28768) · [Before (L28768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28768)

```diff
-     dz = null !== yv && void 0 !== yv ? yv : Mv,
+     fk = null !== gT && void 0 !== gT ? gT : RT,
```

#### 2540. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28770` → after: `L28770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28770) · [Before (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28770)

```diff
-     lz = void 0 === Nz || Nz === Pz ? hz : Ic(zz(Nz.markdown)),
+     Ik = void 0 === xk || xk === ck ? lk : eQ(kk(xk.markdown)),
```

#### 2541. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28772` → after: `L28772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28772) · [Before (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28772)

```diff
-     wz = null !== (Sv = null === lz || void 0 === lz ? void 0 : lz.nextChange) && void 0 !== Sv ? Sv : Sz,
+     jk = null !== (MT = null === Ik || void 0 === Ik ? void 0 : Ik.nextChange) && void 0 !== MT ? MT : Mk,
```

#### 2542. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28777` → after: `L28777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28777) · [Before (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28777)

```diff
-     sz = null === Yv ? [] : Gf(Yv, lD(`${Mv.summary}\n${null!==(ev=null===Pz||void 0===Pz?void 0:Pz.markdown)&&void 0!==ev?ev:""}`), fv),
+     tk = null === PT ? [] : jF(PT, lb(`${RT.summary}\n${null!==(KT=null===ck||void 0===ck?void 0:ck.markdown)&&void 0!==KT?KT:""}`), FT),
```

#### 2543. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28788` → after: `L28788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28788) · [Before (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28788)

```diff
-     }(null !== Yv && void 0 !== Yv ? Yv : [], null !== nv && void 0 !== nv ? nv : [], sz, lD(Cz)) : [],
+     }(null !== PT && void 0 !== PT ? PT : [], null !== wT && void 0 !== wT ? wT : [], tk, lb(hk)) : [],
```

#### 2544. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28796` → after: `L28796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28796) · [Before (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28796)

```diff
-     Gz = null === Vv ? [] : VF(Vv, [...sz, ...iz], `${Cz}\n${function(vv,zv,Pv,hv,Sv,ev){if(null===vv||null===zv||!ev.isOlder)return"";const gv=sj(vv,zv,Pv,ev.constantLines),pv=null===gv?null:yV(gv,zv,hv);return null===pv?"":sJ("",bV(pv,ev.t,Sv))}(Sz,jv,Tv,Dv,pv,bv)}`, fv),
+     Sk = null === JT ? [] : rr(JT, [...tk, ...Nk], `${hk}\n${function(TT,kT,cT,lT,MT,KT){if(null===TT||null===kT||!KT.isOlder)return"";const OT=Aa(TT,kT,cT,KT.constantLines),yT=null===OT?null:EJ(OT,kT,lT);return null===yT?"":IY("",LJ(yT,KT.t,MT))}(Mk,aT,AT,bT,yT,nT)}`, FT),
```

#### 2545. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28802-L28803` → after: `L28802-L28803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28802-L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28802-L28803) · [Before (L28802-L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28802-L28803)

```diff
-         ev = new RegExp(`(?:${(0,Tg.n)(vv.players)}|${Math.round(vv.players)})(?![\\d]|[,.]\\d|\\s*%)`),
-         gv = (0, Wg.f)(zv, ev, (0, Wg.h)("\\d,.")).length > 0;
+         KT = new RegExp(`(?:${(0,CO.m)(TT.players)}|${Math.round(TT.players)})(?![\\d]|[,.]\\d|\\s*%)`),
+         OT = (0, jO.h)(kT, KT, (0, jO.m)("\\d,.")).length > 0;
```

#### 2546. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28811` → after: `L28811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28811) · [Before (L28811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28811)

```diff
-         Sv = (0, Tg.n)(vv.players);
+         MT = (0, CO.m)(TT.players);
```

#### 2547. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28813` → after: `L28813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28813) · [Before (L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28813)

```diff
-         parts: [`${Pv("Of the")} ${(0,Tg.n)(vv.fromPlayers)} ${Pv("players who got to")} ${vv.step}, ${Sv} ${Pv("later had")} `, {
+         parts: [`${cT("Of the")} ${(0,CO.m)(TT.fromPlayers)} ${cT("players who got to")} ${TT.step}, ${MT} ${cT("later had")} `, {
```

#### 2548. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28815` → after: `L28815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28815) · [Before (L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28815)

```diff
-         }, ` ${Pv("this week")} `, hv]
+         }, ` ${cT("this week")} `, lT]
```

#### 2549. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28819` → after: `L28819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28819) · [Before (L28819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28819)

```diff
-         parts: [`${Pv("Of the")} ${(0,Tg.n)(vv.fromPlayers)} ${Pv("players who reached")} ${vv.step}, ${Sv} ${Pv("later had")} `, {
+         parts: [`${cT("Of the")} ${(0,CO.m)(TT.fromPlayers)} ${cT("players who reached")} ${TT.step}, ${MT} ${cT("later had")} `, {
```

#### 2550. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28821` → after: `L28821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28821) · [Before (L28821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28821)

```diff
-         }, ` (${ev}%, ${Pv("past week")}) `, hv]
+         }, ` (${KT}%, ${cT("past week")}) `, lT]
```

#### 2551. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28829` → after: `L28829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28829) · [Before (L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28829)

```diff
-     Yz = [...cz, ...(null !== (gv = null === mz || void 0 === mz ? void 0 : mz.rows) && void 0 !== gv ? gv : []).map((vv => {
+     Pk = [...Qk, ...(null !== (OT = null === Dk || void 0 === Dk ? void 0 : Dk.rows) && void 0 !== OT ? OT : []).map((TT => {
```

#### 2552. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28841` → after: `L28841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28841) · [Before (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28841)

```diff
-       return hv.slice(0, "young" === Pv ? HF : LF)
+       return lT.slice(0, "young" === cT ? Vr : Gr)
```

#### 2553. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28864` → after: `L28864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28864) · [Before (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28864)

```diff
-       return null !== (Pv = vv.find((vv => !hv.includes(vv.eventType) && !bi(vv, zv)))) && void 0 !== Pv ? Pv : null
+       return null !== (cT = TT.find((TT => !lT.includes(TT.eventType) && !YN(TT, kT)))) && void 0 !== cT ? cT : null
```

#### 2554. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28878-L28879` → after: `L28878-L28879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28878-L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28878-L28879) · [Before (L28878-L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28878-L28879)

```diff
-           const zv = [`${(0,Tg.e)(vv.said)} ${Pv("in your description")}`],
-             pv = null === gv.category ? "" : ` ${Pv("in")} ${gv.category}`;
+           const kT = [`${(0,CO.e)(TT.said)} ${cT("in your description")}`],
+             yT = null === OT.category ? "" : ` ${cT("in")} ${OT.category}`;
```

#### 2555. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28882` → after: `L28882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28882) · [Before (L28882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28882)

```diff
-             parts: [`${(0,Tg.n)(gv.players)} ${Pv("players got to")} ${gv.step} ${ev}, ${Pv("of")} ${(0,Tg.n)(gv.first.players)} ${Pv("who got to")} ${gv.first.name}${pv} `, Sv]
+             parts: [`${(0,CO.m)(OT.players)} ${cT("players got to")} ${OT.step} ${KT}, ${cT("of")} ${(0,CO.m)(OT.first.players)} ${cT("who got to")} ${OT.first.name}${yT} `, MT]
```

#### 2556. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28884` → after: `L28884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28884) · [Before (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28884)

```diff
-           const dv = null === gv.before ? "" : `, ${(0,Tg.n)(gv.before.players)} \u2192 ${(0,Tg.n)(gv.players)} ${Pv("from")} ${gv.before.name}`;
+           const fT = null === OT.before ? "" : `, ${(0,CO.m)(OT.before.players)} \u2192 ${(0,CO.m)(OT.players)} ${cT("from")} ${OT.before.name}`;
```

#### 2557. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28887` → after: `L28887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28887) · [Before (L28887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28887)

```diff
-             parts: [`${(0,Tg.n)(gv.players)} ${Pv("of the")} ${(0,Tg.n)(gv.first.players)} ${Pv("players who reached")} ${gv.first.name} ${Pv("got to")} ${gv.step}${dv}${pv} (${ev}) `, Sv]
+             parts: [`${(0,CO.m)(OT.players)} ${cT("of the")} ${(0,CO.m)(OT.first.players)} ${cT("players who reached")} ${OT.first.name} ${cT("got to")} ${OT.step}${fT}${yT} (${KT}) `, MT]
```

#### 2558. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28891` → after: `L28891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28891) · [Before (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28891)

```diff
-           const zv = "" === gv.category ? "" : ` ${Pv("in")} ${gv.category}`,
+           const kT = "" === OT.category ? "" : ` ${cT("in")} ${OT.category}`,
```

#### 2559. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28894-L28896` → after: `L28894-L28896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28894-L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28894-L28896) · [Before (L28894-L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28894-L28896)

```diff
-             label: [`${(0,Tg.e)((0,Tg.M)(gv.death))} ${Pv("in your description")}`],
-             parts: [`${(0,Tg.n)(gv.count)} ${Pv("of the")} ${(0,Tg.n)(gv.total)} ${Pv("deaths")}${zv} ${ev} ${Pv("were")} `, {
-               code: `${vv.eventType}: ${gv.death}`
+             label: [`${(0,CO.e)((0,CO.J)(OT.death))} ${cT("in your description")}`],
+             parts: [`${(0,CO.m)(OT.count)} ${cT("of the")} ${(0,CO.m)(OT.total)} ${cT("deaths")}${kT} ${KT} ${cT("were")} `, {
+               code: `${TT.eventType}: ${OT.death}`
```

#### 2560. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28901` → after: `L28901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28901) · [Before (L28901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28901)

```diff
-           const zv = [`${(0,Tg.e)(vv.saidAll.join(` ${Pv("and")} `))} ${Pv("in your description")}`],
+           const kT = [`${(0,CO.e)(TT.saidAll.join(` ${cT("and")} `))} ${cT("in your description")}`],
```

#### 2561. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28907` → after: `L28907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28907) · [Before (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28907)

```diff
-               return `${""===ev?vv.eventType:ev}: ${(0,Tg.n)(gv)}${0===Sv||hv?` ${Pv("players")}`:""}`
+               return `${""===KT?TT.eventType:KT}: ${(0,CO.m)(OT)}${0===MT||lT?` ${cT("players")}`:""}`
```

#### 2562. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28913` → after: `L28913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28913) · [Before (L28913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28913)

```diff
-             } = gv.values[0], Nv = hv ? `${(0,Tg.n)(dv)} ${Pv("players so far")}` : `${(0,Tg.n)(dv)} ${Pv("players sent it")} ${ev}`, lv = "" === pv ? vv.eventType : `${vv.eventType}: ${pv}`;
+             } = OT.values[0], xT = lT ? `${(0,CO.m)(fT)} ${cT("players so far")}` : `${(0,CO.m)(fT)} ${cT("players sent it")} ${KT}`, IT = "" === yT ? TT.eventType : `${TT.eventType}: ${yT}`;
```

#### 2563. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28916` → after: `L28916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28916) · [Before (L28916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28916)

```diff
-               parts: [`${Pv("your")} `, {
+               parts: [`${cT("your")} `, {
```

#### 2564. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28918` → after: `L28918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28918) · [Before (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28918)

```diff
-               }, ` ${Pv("event")}: ${Nv} `, Sv]
+               }, ` ${cT("event")}: ${xT} `, MT]
```

#### 2565. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28923` → after: `L28923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28923) · [Before (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28923)

```diff
-             parts: [`${Pv("your")} `, {
+             parts: [`${cT("your")} `, {
```

#### 2566. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28925` → after: `L28925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28925) · [Before (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28925)

```diff
-             }, ` ${Pv("event")}: ${pv.join(", ")} (${ev}) `, Sv]
+             }, ` ${cT("event")}: ${yT.join(", ")} (${KT}) `, MT]
```

#### 2567. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28948` → after: `L28948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28948) · [Before (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28948)

```diff
-       return "young" !== hv && ("noEvents" === vv.thin.kind ? zv.length > 0 || Pv : "medium" !== hv)
+       return "young" !== lT && ("noEvents" === TT.thin.kind ? kT.length > 0 || cT : "medium" !== lT)
```

#### 2568. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L28962` → after: `L28962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR28962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L28962) · [Before (L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L28962)

```diff
-         className: `StudioAiAnswerSection StudioAiAnswerSection-${vv.key}`,
+         className: `StudioAiAnswerSection StudioAiAnswerSection-${TT.key}`,
```

#### 2569. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29008` → after: `L29008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29008) · [Before (L29008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29008)

```diff
-     }(Sz, (0, sc.z)(zz(Jz.markdown))) : null;
+     }(Mk, (0, CQ.v)(kk(Bk.markdown))) : null;
```

#### 2570. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29017` → after: `L29017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29017) · [Before (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29017)

```diff
-       const vv = rU((0, sc.z)(zz(hv.markdown)));
+       const TT = Uo((0, CQ.v)(kk(lT.markdown)));
```

#### 2571. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29029` → after: `L29029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29029) · [Before (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29029)

```diff
-         then: null !== (rz = null === Ez || void 0 === Ez ? void 0 : Ez.idea) && void 0 !== rz ? rz : null,
+         then: null !== (ik = null === Wk || void 0 === Wk ? void 0 : Wk.idea) && void 0 !== ik ? ik : null,
```

#### 2572. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29031-L29032` → after: `L29031-L29032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29031-L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29031-L29032) · [Before (L29031-L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29031-L29032)

```diff
-       }, null !== uv && void 0 !== uv ? uv : ""), null !== Wz && void 0 !== Wz ? Wz : hz.rest)
-     } else Az && "tryNext" === hv.key ? Bz(hv, null, (0, sc.z)(zz(hv.markdown)), null === Ez) : yz(Lz(hv, qB(zz(hv.markdown), bv)));
+       }, null !== sT && void 0 !== sT ? sT : ""), null !== Ck && void 0 !== Ck ? Ck : lk.rest)
+     } else dk && "tryNext" === lT.key ? Yk(lT, null, (0, CQ.v)(kk(lT.markdown)), null === Wk) : Uk(Lk(lT, JU(kk(lT.markdown), nT)));
```

#### 2573. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29047` → after: `L29047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29047) · [Before (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29047)

```diff
-           children: [(0, Tz.jsx)(mv.b, {
+           children: [(0, Ak.jsx)(DT.e, {
```

#### 2574. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29066` → after: `L29066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29066) · [Before (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29066)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2575. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29089` → after: `L29089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29089) · [Before (L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29089)

```diff
-       return cn(zv, null !== (Pv = vv.codeNames) && void 0 !== Pv ? Pv : new Set)
+       return Aw(kT, null !== (cT = TT.codeNames) && void 0 !== cT ? cT : new Set)
```

#### 2576. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29101` → after: `L29101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29101) · [Before (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29101)

```diff
-   return zv.length > OJ ? `${zv.slice(0,OJ).join(" ")}\u2026` : zv.join(" ")
+   return kT.length > aY ? `${kT.slice(0,aY).join(" ")}\u2026` : kT.join(" ")
```

#### 2577. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29114` → after: `L29114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29114) · [Before (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29114)

```diff
-   const hv = VJ(null !== (Pv = vv.split("\n")[0]) && void 0 !== Pv ? Pv : ""),
+   const lT = PY(null !== (cT = TT.split("\n")[0]) && void 0 !== cT ? cT : ""),
```

#### 2578. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29121` → after: `L29121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29121) · [Before (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29121)

```diff
-   return -1 === hv ? vv : `${vv} ${hv+1}`
+   return -1 === lT ? TT : `${TT} ${lT+1}`
```

#### 2579. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29126-L29127` → after: `L29126-L29127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29126-L29127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29126-L29127) · [Before (L29126-L29127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29126-L29127)

```diff
-   const Pv = vv.map((vv => `"${vv}"`));
-   return Pv.length <= 1 ? null !== (zv = Pv[0]) && void 0 !== zv ? zv : "" : `${Pv.slice(0,-1).join(", ")} and ${Pv[Pv.length-1]}`
+   const cT = TT.map((TT => `"${TT}"`));
+   return cT.length <= 1 ? null !== (kT = cT[0]) && void 0 !== kT ? kT : "" : `${cT.slice(0,-1).join(", ")} and ${cT[cT.length-1]}`
```

#### 2580. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29150` → after: `L29150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29150) · [Before (L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29150)

```diff
-     return Pv ? hv : vv
+     return cT ? lT : TT
```

#### 2581. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29153` → after: `L29153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29153) · [Before (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29153)

```diff
-     const vv = "direction" === iv.kind ? `Change \`${iv.name}\` the other way, or pick another change.` : "unrelated" === iv.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${iv.name}\` does, or pick another con … [truncated]
+     const TT = "direction" === NT.kind ? `Change \`${NT.name}\` the other way, or pick another change.` : "unrelated" === NT.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${NT.name}\` does, or pick another con … [truncated]
```

#### 2582. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29166` → after: `L29166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29166) · [Before (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29166)

```diff
-     problem: `The game has no ${tJ(wv.map((vv=>{let{name:zv}=vv;return zv})))} that Studio can find in its code, events or description.`,
+     problem: `The game has no ${zY(jT.map((TT=>{let{name:kT}=TT;return kT})))} that Studio can find in its code, events or description.`,
```

#### 2583. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29173` → after: `L29173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29173) · [Before (L29173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29173)

```diff
-     problem: "badge" === av.kind ? `My game already has the "${av.name}" badge.` : `My game already sends "${av.name}".`,
+     problem: "badge" === vT.kind ? `My game already has the "${vT.name}" badge.` : `My game already sends "${vT.name}".`,
```

#### 2584. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29180` → after: `L29180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29180) · [Before (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29180)

```diff
-     problem: `My code already does this in \`${sv.where}\`.`,
+     problem: `My code already does this in \`${tT.where}\`.`,
```

#### 2585. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29186` → after: `L29186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29186) · [Before (L29186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29186)

```diff
-     problem: `It tells players to type \`${iv}\`, but no code in my game reads chat.`,
+     problem: `It tells players to type \`${NT}\`, but no code in my game reads chat.`,
```

#### 2586. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29195` → after: `L29195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29195) · [Before (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29195)

```diff
-       problem: `Bloxd has no ${tJ(Pv)} item or block.`,
+       problem: `Bloxd has no ${zY(cT)} item or block.`,
```

#### 2587. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29222` → after: `L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29222) · [Before (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29222)

```diff
-       of vv.hidden) dv(zv, `My game already ${"event"===Pv.kind?"logs":"has"} \`${Pv.name}\` (in \`${Pv.where}\`).`, "Replace it with something my game doesn't have yet.");
+       of TT.hidden) fT(kT, `My game already ${"event"===cT.kind?"logs":"has"} \`${cT.name}\` (in \`${cT.where}\`).`, "Replace it with something my game doesn't have yet.");
```

#### 2588. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29255` → after: `L29255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29255) · [Before (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29255)

```diff
-   } = vv, pv = gn(vv.code, vv.where, ev), dv = null !== (Pv = null === pv || void 0 === pv ? void 0 : pv.code) && void 0 !== Pv ? Pv : vv.code, Nv = null !== (hv = null === pv || void 0 === pv ? void 0 : pv.where) && void 0 !== hv ? hv : vv.where, lv = Dc(vv), Tv = [], Wv = (vv,  … [truncated]
+   } = TT, yT = Tw(TT.code, TT.where, KT), fT = null !== (cT = null === yT || void 0 === yT ? void 0 : yT.code) && void 0 !== cT ? cT : TT.code, xT = null !== (lT = null === yT || void 0 === yT ? void 0 : yT.where) && void 0 !== lT ? lT : TT.where, IT = PQ(TT), AT = [], CT = (TT,  … [truncated]
```

#### 2589. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29262-L29263` → after: `L29262-L29263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29262-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29262-L29263) · [Before (L29262-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29262-L29263)

```diff
-   }, wv = FO(`${null!==dv&&void 0!==dv?dv:""}\n${lv}`, zv.knownGameText);
-   wv.length > 0 && Wv(`The game has no ${tJ(wv.map((vv=>{let{name:zv}=vv;return zv})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
+   }, jT = hm(`${null!==fT&&void 0!==fT?fT:""}\n${IT}`, kT.knownGameText);
+   jT.length > 0 && CT(`The game has no ${zY(jT.map((TT=>{let{name:kT}=TT;return kT})))} that Studio can find in its code, events or description.`, "Use a place or thing from my data or code, or leave the name out.");
```

#### 2590. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29267` → after: `L29267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29267) · [Before (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29267)

```diff
-     Wv(`It changes dying early, but the earliest death (${av.earliest.name}) comes at ${vv} min on average.`, "Pick a change at the step where players stop instead.")
+     CT(`It changes dying early, but the earliest death (${vT.earliest.name}) comes at ${TT} min on average.`, "Pick a change at the step where players stop instead.")
```

#### 2591. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29271-L29272` → after: `L29271-L29272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29271-L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29271-L29272) · [Before (L29271-L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29271-L29272)

```diff
-     Cv = KY(null === sv ? dv : sv.code, Nv, ev),
-     iv = null !== (Sv = null === Cv || void 0 === Cv ? void 0 : Cv.code) && void 0 !== Sv ? Sv : dv,
+     hT = FP(null === tT ? fT : tT.code, xT, KT),
+     NT = null !== (MT = null === hT || void 0 === hT ? void 0 : hT.code) && void 0 !== MT ? MT : fT,
```

#### 2592. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29275` → after: `L29275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29275) · [Before (L29275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29275)

```diff
-   null !== Gv ? Wv(`My code already does this in \`${Gv.where}\`.`, "Pick a change my game doesn't make yet.") : null !== sv && sv.leftOut.length > 0 && Wv(`Some of its lines repeat what \`${sv.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
+   null !== ST ? CT(`My code already does this in \`${ST.where}\`.`, "Pick a change my game doesn't make yet.") : null !== tT && tT.leftOut.length > 0 && CT(`Some of its lines repeat what \`${tT.leftOut[0].done.where}\` already does.`, "Leave those lines out.");
```

#### 2593. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29277-L29279` → after: `L29277-L29279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29277-L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29277-L29279) · [Before (L29277-L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29277-L29279)

```diff
-   null !== mv && Wv("gives" === mv.kind ? `\`${mv.where}\` already gives ${mv.items.join(", ")}.` : "secondMessage" === mv.kind ? `My game already has a welcome message in \`${mv.where}\`.` : `My message in \`${mv.where}\` already says this.`, "secondMessage" === mv.kind ? "Chang … [truncated]
-   const jv = null !== Nv && void 0 !== Nv ? Nv : "tick";
-   !0 === (null === Cv || void 0 === Cv ? void 0 : Cv.repeats) ? Wv(`From \`${jv}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== Cv && (null !== Cv.once || Cv.flagNames.length > 0) && Wv(`From \`${jv}\` it sends  … [truncated]
+   null !== DT && CT("gives" === DT.kind ? `\`${DT.where}\` already gives ${DT.items.join(", ")}.` : "secondMessage" === DT.kind ? `My game already has a welcome message in \`${DT.where}\`.` : `My message in \`${DT.where}\` already says this.`, "secondMessage" === DT.kind ? "Chang … [truncated]
+   const aT = null !== xT && void 0 !== xT ? xT : "tick";
+   !0 === (null === hT || void 0 === hT ? void 0 : hT.repeats) ? CT(`From \`${aT}\` it sends this many times a second.`, "Send it once, as each player reaches the step, not every tick.") : null !== hT && (null !== hT.once || hT.flagNames.length > 0) && CT(`From \`${aT}\` it sends  … [truncated]
```

#### 2594. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29281` → after: `L29281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29281) · [Before (L29281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29281)

```diff
-   null !== fv && Wv(`\`${fv.name}\` isn't defined in \`${fv.place}\`.`, null === fv.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${fv.alias}\`, its name for the player there.`);
+   null !== FT && CT(`\`${FT.name}\` isn't defined in \`${FT.place}\`.`, null === FT.alias ? "Put the code where the player is a parameter, or loop over `api.getPlayerIds()`." : `Use \`${FT.alias}\`, its name for the player there.`);
```

#### 2595. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29283` → after: `L29283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29283) · [Before (L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29283)

```diff
-   null !== Fv && Wv(`World Code has no \`${Fv}\`, so the code won't run.`, "Count time in `tick` instead.");
+   null !== rT && CT(`World Code has no \`${rT}\`, so the code won't run.`, "Count time in `tick` instead.");
```

#### 2596. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29285-L29314` → after: `L29285-L29314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29285-L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29285-L29314) · [Before (L29285-L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29285-L29314)

```diff
-   Yv.length > 0 && Wv(`It calls ${Yv.map((vv=>`\`${vv}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
-   const nv = Cn(iv, zv.apiNames);
-   nv.length > 0 && Wv(`Bloxd has no ${nv.map((vv=>`\`api.${vv}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
-   const Ov = Ka(iv, Nv, ev, cv);
-   Ov.length > 0 && Wv(`It reads ${Ov.map((vv=>`\`${vv}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), WU(iv, Nv, gv) && Wv("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
-   for (const Dv of ky(iv, ev)) Wv(`It tells players to type \`${Dv}\`, but no code in my game reads chat.`, "Don't use a chat command.");
-   return mc(iv).isBalanced || Wv("The code leaves a bracket or quote open.", "Close it."), Tv
- }
- 
- function LJ(vv, zv) {
-   let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YJ;
-   const hv = WT(vv);
-   if (null === hv) return [];
-   const Sv = RM(hv).layout,
-     ev = [],
-     gv = [];
- ... (14 more removed lines; see GitHub link above)
+   PT.length > 0 && CT(`It calls ${PT.map((TT=>`\`${TT}()\``)).join(", ")}, which the game's code doesn't have.`, "Use only functions the game's code or the api has.");
+   const wT = Iw(NT, kT.apiNames);
+   wT.length > 0 && CT(`Bloxd has no ${wT.map((TT=>`\`api.${TT}\``)).join(", ")}.`, "Use only api calls from my code or the prompt.");
+   const mT = zv(NT, xT, KT, QT);
+   mT.length > 0 && CT(`It reads ${mT.map((TT=>`\`${TT}\``)).join(", ")}, which nothing in the game's code defines.`, "Use names the game's code has, or include the line creating it."), Oo(NT, xT, OT) && CT("It is timed code in `onPlayerJoin`, which runs once as a player joins, so … [truncated]
+   for (const bT of Yg(NT, KT)) CT(`It tells players to type \`${bT}\`, but no code in my game reads chat.`, "Don't use a chat command.");
+   return NQ(NT).isBalanced || CT("The code leaves a bracket or quote open.", "Close it."), AT
+ }
+ 
+ function VY(TT, kT) {
+   let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SY;
+   const lT = jA(TT);
+   if (null === lT) return [];
+   const MT = mR(lT).layout,
+     KT = [],
+     OT = [];
+ ... (14 more added lines; see GitHub link above)
```

#### 2597. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29316-L29323` → after: `L29316-L29323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29316-L29323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29316-L29323) · [Before (L29316-L29323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29316-L29323)

```diff
-       Tv = vv => lv.some((zv => RJ(zv.markdown, vv))),
-       Wv = UJ(hv);
-     if (null !== Pv) {
-       ev.push(...AJ(Pv, zv));
-       for (const vv of Pv.blocks) {
-         const Pv = "paragraph" === vv.kind ? [vv.text] : UJ([vv]).map((vv => vv.text));
-         for (const vv of Pv) ev.push(...IJ(vv, "Next change", !1, zv).map((vv => ({
-           ...vv,
+       AT = TT => IT.some((kT => mY(kT.markdown, TT))),
+       CT = wY(lT);
+     if (null !== cT) {
+       KT.push(...GY(cT, kT));
+       for (const TT of cT.blocks) {
+         const cT = "paragraph" === TT.kind ? [TT.text] : wY([TT]).map((TT => TT.text));
+         for (const TT of cT) KT.push(...oY(TT, "Next change", !1, kT).map((TT => ({
+           ...TT,
```

#### 2598. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29328-L29331` → after: `L29328-L29331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29328-L29331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29328-L29331) · [Before (L29328-L29331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29328-L29331)

```diff
-     gv.push(...QJ(Nv, Wv, zv, Tv));
-     for (const ev of hv) "paragraph" === ev.kind && gv.push(...IJ(ev.text, Nv.heading, !1, zv));
-     Wv.forEach(((vv, Pv) => {
-       Tv(vv.text) || gv.push(...IJ(vv.text, `${Nv.heading} ${Pv+1}`, !0, zv))
+     OT.push(...HY(xT, CT, kT, AT));
+     for (const KT of lT) "paragraph" === KT.kind && OT.push(...oY(KT.text, xT.heading, !1, kT));
+     CT.forEach(((TT, cT) => {
+       AT(TT.text) || OT.push(...oY(TT.text, `${xT.heading} ${cT+1}`, !0, kT))
```

#### 2599. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29334-L29338` → after: `L29334-L29338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29334-L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29334-L29338) · [Before (L29334-L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29334-L29338)

```diff
-   const dv = new Set;
-   return [...ev, ...gv].filter((vv => {
-     const zv = `${vv.where}|${vv.problem}`;
-     return !dv.has(zv) && (dv.add(zv), !0)
-   })).slice(0, Pv)
+   const fT = new Set;
+   return [...KT, ...OT].filter((TT => {
+     const kT = `${TT.where}|${TT.problem}`;
+     return !fT.has(kT) && (fT.add(kT), !0)
+   })).slice(0, cT)
```

#### 2600. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29341-L29344` → after: `L29341-L29344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29341-L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29341-L29344) · [Before (L29341-L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29341-L29344)

```diff
- function HJ(vv, zv) {
-   const Pv = new Set,
-     hv = function(vv) {
-       let hv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ function EY(TT, kT) {
+   const cT = new Set,
+     lT = function(TT) {
+       let lT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
```

#### 2601. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29346` → after: `L29346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29346) · [Before (L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29346)

```diff
-           name: Sv
+           name: MT
```

#### 2602. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29348` → after: `L29348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29348) · [Before (L29348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29348)

```diff
-         of FO(vv, zv, hv)) Pv.add(Sv.toLowerCase())
+         of hm(TT, kT, lT)) cT.add(MT.toLowerCase())
```

#### 2603. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29350-L29351` → after: `L29350-L29351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29350-L29351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29350-L29351) · [Before (L29350-L29351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29350-L29351)

```diff
-     Sv = vv => {
-       for (const zv of vv) hv(zv.text), Sv(zv.children)
+     MT = TT => {
+       for (const kT of TT) lT(kT.text), MT(kT.children)
```

#### 2604. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29353-L29354` → after: `L29353-L29354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29353-L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29353-L29354) · [Before (L29353-L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29353-L29354)

```diff
-   for (const ev of (0, sc.z)(vv)) "paragraph" === ev.kind || "heading" === ev.kind ? hv(ev.text) : "list" === ev.kind ? Sv(ev.items) : "code" === ev.kind && hv(ev.code, !0);
-   return Pv
+   for (const KT of (0, CQ.v)(TT)) "paragraph" === KT.kind || "heading" === KT.kind ? lT(KT.text) : "list" === KT.kind ? MT(KT.items) : "code" === KT.kind && lT(KT.code, !0);
+   return cT
```

#### 2605. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29356` → after: `L29356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29356) · [Before (L29356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29356)

```diff
- const MJ = /<\s*\/?\s*game-text[^>]*>/gi;
+ const ZY = /<\s*\/?\s*game-text[^>]*>/gi;
```

#### 2606. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29358` → after: `L29358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29358) · [Before (L29358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29358)

```diff
- function yJ(vv) {
+ function uY(TT) {
```

#### 2607. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29360-L29376` → after: `L29360-L29376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29360-L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29360-L29376) · [Before (L29360-L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29360-L29376)

```diff
-     where: zv,
-     quote: Pv,
-     problem: hv,
-     fix: Sv
-   } = vv, ev = gl(`- ${zv}${null===Pv?"":` ("${Pv}")`}: ${hv} Instead: ${Sv}`, 1 / 0);
-   for (let gv = ""; ev !== gv;) gv = ev, ev = ev.replace(MJ, "");
-   return ev
- }
- 
- function BJ(vv) {
-   const zv = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
-     Pv = "Reply with the whole answer again, and nothing else.",
-     hv = [];
-   for (const Sv of vv) {
-     const vv = yJ(Sv);
-     if ([zv, ...hv, vv, Pv].join("\n").length > nJ) {
- ... (1 more removed lines; see GitHub link above)
+     where: kT,
+     quote: cT,
+     problem: lT,
+     fix: MT
+   } = TT, KT = yI(`- ${kT}${null===cT?"":` ("${cT}")`}: ${lT} Instead: ${MT}`, 1 / 0);
+   for (let OT = ""; KT !== OT;) OT = KT, KT = KT.replace(ZY, "");
+   return KT
+ }
+ 
+ function XY(TT) {
+   const kT = "Studio checked your answer against the game. Fix only these, keep everything else, same format:",
+     cT = "Reply with the whole answer again, and nothing else.",
+     lT = [];
+   for (const MT of TT) {
+     const TT = uY(MT);
+     if ([kT, ...lT, TT, cT].join("\n").length > DY) {
+ ... (1 more added lines; see GitHub link above)
```

#### 2608. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29379` → after: `L29379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29379) · [Before (L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29379)

```diff
-     hv.push(vv)
+     lT.push(TT)
```

#### 2609. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29381` → after: `L29381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29381) · [Before (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29381)

```diff
-   return [zv, ...hv, Pv].join("\n")
+   return [kT, ...lT, cT].join("\n")
```

#### 2610. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29384-L29388` → after: `L29384-L29388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29384-L29388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29384-L29388) · [Before (L29384-L29388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29384-L29388)

```diff
- function JJ(vv) {
-   const zv = new Map;
-   for (const hv of vv.sections) {
-     var Pv;
-     zv.set(hv.key, (null !== (Pv = zv.get(hv.key)) && void 0 !== Pv ? Pv : 0) + UJ((0, sc.z)(hv.markdown)).length)
+ function dY(TT) {
+   const kT = new Map;
+   for (const lT of TT.sections) {
+     var cT;
+     kT.set(lT.key, (null !== (cT = kT.get(lT.key)) && void 0 !== cT ? cT : 0) + wY((0, CQ.v)(lT.markdown)).length)
```

#### 2611. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29390` → after: `L29390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29390) · [Before (L29390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29390)

```diff
-   return zv
+   return kT
```

#### 2612. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29392` → after: `L29392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29392) · [Before (L29392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29392)

```diff
- const EJ = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
+ const LY = /^\s*(?:sure|okay|ok|certainly|of course|absolutely|got it|here(?:'s| is| are)\b[^.!?\n]*\b(?:answer|fix(?:es|ed)?|version))\b/i;
```

#### 2613. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29405` → after: `L29405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29405) · [Before (L29405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29405)

```diff
-   const gv = await (0, Fd.f)(zv.model, function(vv, zv, Pv) {
+   const OT = await (0, rf.h)(kT.model, function(TT, kT, cT) {
```

#### 2614. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29433` → after: `L29433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29433) · [Before (L29433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29433)

```diff
-         if ((null !== (ev = pv.get(Sv)) && void 0 !== ev ? ev : 0) < dv) return !1
+         if ((null !== (KT = yT.get(MT)) && void 0 !== KT ? KT : 0) < fT) return !1
```

#### 2615. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29451` → after: `L29451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29451) · [Before (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29451)

```diff
-     return console.error(`The Studio AI export couldn't load ${zv}`, hv), vv.push(zv), null
+     return console.error(`The Studio AI export couldn't load ${kT}`, lT), TT.push(kT), null
```

#### 2616. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29457` → after: `L29457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29457) · [Before (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29457)

```diff
-     gv = Sv.edges.length > 0 ? Sv : null;
+     OT = MT.edges.length > 0 ? MT : null;
```

#### 2617. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29551` → after: `L29551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29551) · [Before (L29551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29551)

```diff
-         events: null !== (hv = null === pv || void 0 === pv ? void 0 : pv.events) && void 0 !== hv ? hv : []
+         events: null !== (lT = null === yT || void 0 === yT ? void 0 : yT.events) && void 0 !== lT ? lT : []
```

#### 2618. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29554` → after: `L29554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29554) · [Before (L29554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29554)

```diff
-   return ev.length > 0 && vv.push(1 === ev.length ? ev[0] : `event heatmaps in ${ev.length} game categories`), gv
+   return KT.length > 0 && TT.push(1 === KT.length ? KT[0] : `event heatmaps in ${KT.length} game categories`), OT
```

#### 2619. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29573` → after: `L29573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29573) · [Before (L29573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29573)

```diff
-   return null !== ev && null === ev.digest && "isMissing" in ev && !0 === ev.isMissing && vv.push(ua), null !== (hv = null === ev || void 0 === ev ? void 0 : ev.digest) && void 0 !== hv ? hv : null
+   return null !== KT && null === KT.digest && "isMissing" in KT && !0 === KT.isMissing && TT.push(sv), null !== (lT = null === KT || void 0 === KT ? void 0 : KT.digest) && void 0 !== lT ? lT : null
```

#### 2620. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29590` → after: `L29590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29590) · [Before (L29590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29590)

```diff
-   } = (0, wv.x)(), [av, sv] = (0, hv.useState)(!0), [Cv, iv] = (0, hv.useState)(!1), cv = Cv || av, Gv = (0, hv.useRef)(null), jv = null === Pv;
+   } = (0, jT.B)(), [vT, tT] = (0, lT.useState)(!0), [hT, NT] = (0, lT.useState)(!1), QT = hT || vT, ST = (0, lT.useRef)(null), aT = null === cT;
```

#### 2621. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29641` → after: `L29641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29641) · [Before (L29641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29641)

```diff
-         children: [(0, Tz.jsx)(mv.b, {
+         children: [(0, Ak.jsx)(DT.e, {
```

#### 2622. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29695` → after: `L29695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29695) · [Before (L29695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29695)

```diff
-     if (zv.aborted) return void hv((0, fd.g)(zv));
+     if (kT.aborted) return void lT((0, Ff.e)(kT));
```

#### 2623. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29697` → after: `L29697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29697) · [Before (L29697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29697)

```diff
-         clearTimeout(ev), hv((0, fd.g)(zv))
+         clearTimeout(KT), lT((0, Ff.e)(kT))
```

#### 2624. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29709` → after: `L29709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29709) · [Before (L29709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29709)

```diff
-   return `${vv.ageBand}|${vv.gameTier}`
+   return `${TT.ageBand}|${TT.gameTier}`
```

#### 2625. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29730` → after: `L29730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29730) · [Before (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29730)

```diff
-   } = (0, wv.x)(), {
+   } = (0, jT.B)(), {
```

#### 2626. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29733` → after: `L29733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29733) · [Before (L29733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29733)

```diff
-   } = (0, av.d)(), [Tv, Wv] = (0, hv.useState)(null), [sv, Cv] = (0, hv.useState)(null), [iv, cv] = (0, hv.useState)(null), [jv, fv] = (0, hv.useState)(null), [Fv, Yv] = (0, hv.useState)(!1), [nv, Ov] = (0, hv.useState)(!1), [Dv] = (0, hv.useState)(Sv);
+   } = (0, vT.b)(), [AT, CT] = (0, lT.useState)(null), [tT, hT] = (0, lT.useState)(null), [NT, QT] = (0, lT.useState)(null), [aT, FT] = (0, lT.useState)(null), [rT, PT] = (0, lT.useState)(!1), [wT, mT] = (0, lT.useState)(!1), [bT] = (0, lT.useState)(MT);
```

#### 2627. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29773` → after: `L29773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29773) · [Before (L29773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29773)

```diff
-     Vv = null !== sv && void 0 !== sv ? sv : Kv,
+     JT = null !== tT && void 0 !== tT ? tT : zT,
```

#### 2628. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29788` → after: `L29788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29788) · [Before (L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29788)

```diff
-         worldCode: null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.worldCode) && void 0 !== Pv ? Pv : null,
+         worldCode: null !== (cT = null === TT || void 0 === TT ? void 0 : TT.worldCode) && void 0 !== cT ? cT : null,
```

#### 2629. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29793` → after: `L29793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29793) · [Before (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29793)

```diff
-         weeklyPlayers: null !== (hv = null === vv || void 0 === vv || null === (Sv = vv.stats) || void 0 === Sv ? void 0 : Sv.rankingWindow.uniquePlayers) && void 0 !== hv ? hv : null,
+         weeklyPlayers: null !== (lT = null === TT || void 0 === TT || null === (MT = TT.stats) || void 0 === MT ? void 0 : MT.rankingWindow.uniquePlayers) && void 0 !== lT ? lT : null,
```

#### 2630. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29805` → after: `L29805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29805) · [Before (L29805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29805)

```diff
-       return `${vv.size}-${Pv.toString(36)}`
+       return `${TT.size}-${cT.toString(36)}`
```

#### 2631. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29815` → after: `L29815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29815) · [Before (L29815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29815)

```diff
-         checkedNumbers: dc(zv, null === ev ? gv : [ev.change, ...gv]),
+         checkedNumbers: KQ(kT, null === KT ? OT : [KT.change, ...OT]),
```

#### 2632. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29819` → after: `L29819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29819) · [Before (L29819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29819)

```diff
-         deaths: null !== (hv = Jm(vv).deaths) && void 0 !== hv ? hv : [],
+         deaths: null !== (lT = LD(TT).deaths) && void 0 !== lT ? lT : [],
```

#### 2633. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29829` → after: `L29829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29829) · [Before (L29829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29829)

```diff
-       return JSON.stringify([LC, vv.gameAnalyticsId, vv.name, null !== (Pv = vv.genre) && void 0 !== Pv ? Pv : null, null !== (hv = vv.description) && void 0 !== hv ? hv : null, vv.gameUpdatedAt, null === vv.ranks, null !== zv && void 0 !== zv ? zv : "estimate"])
+       return JSON.stringify([Xh, TT.gameAnalyticsId, TT.name, null !== (cT = TT.genre) && void 0 !== cT ? cT : null, null !== (lT = TT.description) && void 0 !== lT ? lT : null, TT.gameUpdatedAt, null === TT.ranks, null !== kT && void 0 !== kT ? kT : "estimate"])
```

#### 2634. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29835` → after: `L29835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29835) · [Before (L29835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29835)

```diff
-       pv = null !== (vv = null === gv || void 0 === gv ? void 0 : gv.ageBand) && void 0 !== vv ? vv : null,
+       yT = null !== (TT = null === OT || void 0 === OT ? void 0 : OT.ageBand) && void 0 !== TT ? TT : null,
```

#### 2635. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29839-L29840` → after: `L29839-L29840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29839-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29839-L29840) · [Before (L29839-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29839-L29840)

```diff
-         trackLines: null !== (zv = ev.trackLines) && void 0 !== zv ? zv : null,
-         numbersKey: null !== (Pv = ev.numbersKey) && void 0 !== Pv ? Pv : null
+         trackLines: null !== (kT = KT.trackLines) && void 0 !== kT ? kT : null,
+         numbersKey: null !== (cT = KT.numbersKey) && void 0 !== cT ? cT : null
```

#### 2636. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29849` → after: `L29849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29849) · [Before (L29849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29849)

```diff
-       }) ? ev : null;
+       }) ? KT : null;
```

#### 2637. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29873` → after: `L29873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29873) · [Before (L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29873)

```diff
-       sv = null === lv ? null : av(lv, null !== (hv = lv.trackLines) && void 0 !== hv ? hv : null, null !== (Sv = lv.numbersKey) && void 0 !== Sv ? Sv : null);
+       tT = null === IT ? null : vT(IT, null !== (lT = IT.trackLines) && void 0 !== lT ? lT : null, null !== (MT = IT.numbersKey) && void 0 !== MT ? MT : null);
```

#### 2638. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29945` → after: `L29945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29945) · [Before (L29945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29945)

```diff
-   const Mv = null !== (zv = null === iv || void 0 === iv ? void 0 : iv.text) && void 0 !== zv ? zv : null;
+   const RT = null !== (kT = null === NT || void 0 === NT ? void 0 : NT.text) && void 0 !== kT ? kT : null;
```

#### 2639. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29949` → after: `L29949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29949) · [Before (L29949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29949)

```diff
-   const yv = vv => `${dv(uC[vv.ageBand])}, ${dv(zi.get(vv.gameTier))}`,
+   const gT = TT => `${fT(qh[TT.ageBand])}, ${fT(TN.get(TT.gameTier))}`,
```

#### 2640. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29958` → after: `L29958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29958) · [Before (L29958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29958)

```diff
-         label: hv ? `${yv(Pv)} (${dv("estimate")})` : yv(Pv)
+         label: lT ? `${gT(cT)} (${fT("estimate")})` : gT(cT)
```

#### 2641. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29968` → after: `L29968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29968) · [Before (L29968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29968)

```diff
-     text: null !== (Pv = null === iv || void 0 === iv ? void 0 : iv.text) && void 0 !== Pv ? Pv : null,
+     text: null !== (cT = null === NT || void 0 === NT ? void 0 : NT.text) && void 0 !== cT ? cT : null,
```

#### 2642. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29973` → after: `L29973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29973) · [Before (L29973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29973)

```diff
-         trackLines: null !== (Pv = null === iv || void 0 === iv ? void 0 : iv.trackLines) && void 0 !== Pv ? Pv : null,
+         trackLines: null !== (cT = null === NT || void 0 === NT ? void 0 : NT.trackLines) && void 0 !== cT ? cT : null,
```

#### 2643. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29976-L29978` → after: `L29976-L29978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29976-L29978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29976-L29978) · [Before (L29976-L29978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29976-L29978)

```diff
-         ageBand: null !== (hv = null === Vv || void 0 === Vv ? void 0 : Vv.ageBand) && void 0 !== hv ? hv : null,
-         checkedNumbers: Ev ? tv : null,
-         numberFacts: Ev ? Iv : null,
+         ageBand: null !== (lT = null === JT || void 0 === JT ? void 0 : JT.ageBand) && void 0 !== lT ? lT : null,
+         checkedNumbers: BT ? GT : null,
+         numberFacts: BT ? ET : null,
```

#### 2644. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29988` → after: `L29988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29988) · [Before (L29988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29988)

```diff
-     notice: null === jv ? void 0 : (0, Tz.jsxs)(Gv.K, {
+     notice: null === aT ? void 0 : (0, Ak.jsxs)(ST.P, {
```

#### 2645. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29992` → after: `L29992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29992) · [Before (L29992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29992)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2646. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L29999` → after: `L29999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR29999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L29999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L29999) · [Before (L29999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L29999)

```diff
-         children: (0, Tz.jsx)(Xv.e, {
+         children: (0, Ak.jsx)(qT.d, {
```

#### 2647. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30001` → after: `L30001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30001) · [Before (L30001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30001)

```diff
-           value: null === Vv ? Jv : Bv.find((vv => vv.value === lE(Vv))),
+           value: null === JT ? YT : UT.find((TT => TT.value === KB(JT))),
```

#### 2648. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30016` → after: `L30016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30016) · [Before (L30016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30016)

```diff
-           }), `${Av} - AI prompts.zip`)
+           }), `${XT} - AI prompts.zip`)
```

#### 2649. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30028` → after: `L30028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30028) · [Before (L30028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30028)

```diff
-           }), `${Av} - AI prompt.md`), void 0 !== navigator.clipboard && navigator.clipboard.writeText(vv).then((() => {
+           }), `${XT} - AI prompt.md`), void 0 !== navigator.clipboard && navigator.clipboard.writeText(TT).then((() => {
```

#### 2650. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30038-L30040` → after: `L30038-L30040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30038-L30040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30038-L30040) · [Before (L30038-L30040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30038-L30040)

```diff
- var wE = Pv(2048),
-   aE = Pv(4668),
-   sE = Pv(1529);
+ var fB = cT(2140),
+   xB = cT(4867),
+   IB = cT(1554);
```

#### 2651. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30083` → after: `L30083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30083) · [Before (L30083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30083)

```diff
-   } = (0, wv.x)(), {
+   } = (0, jT.B)(), {
```

#### 2652. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30086` → after: `L30086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30086) · [Before (L30086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30086)

```diff
-   } = (0, av.d)(), [Nv, lv] = (0, hv.useState)(!1), [Tv, sv] = (0, hv.useState)(""), [iv, cv] = (0, hv.useState)(""), [Fv, Yv] = (0, hv.useState)(null), [nv, Ov] = (0, hv.useState)(!1), Dv = (0, hv.useRef)(null), Kv = (0, hv.useRef)(null), Vv = (0, hv.useRef)(0);
+   } = (0, vT.b)(), [xT, IT] = (0, lT.useState)(!1), [AT, tT] = (0, lT.useState)(""), [NT, QT] = (0, lT.useState)(""), [rT, PT] = (0, lT.useState)(null), [wT, mT] = (0, lT.useState)(!1), bT = (0, lT.useRef)(null), zT = (0, lT.useRef)(null), JT = (0, lT.useRef)(0);
```

#### 2653. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30101` → after: `L30101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30101) · [Before (L30101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30101)

```diff
-     Vv.current = vv, Ov(!1), Cv.e.getPublishedGamePreviews(gv, {
+     JT.current = TT, mT(!1), hT.d.getPublishedGamePreviews(OT, {
```

#### 2654. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30111` → after: `L30111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30111) · [Before (L30111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30111)

```diff
-       firstPartyGameNames: Uv ? Wv.c : void 0
+       firstPartyGameNames: oT ? CT.b : void 0
```

#### 2655. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30122-L30124` → after: `L30122-L30124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30122-L30124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30122-L30124) · [Before (L30122-L30124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30122-L30124)

```diff
-           gameAnalyticsId: (0, pv.i)(Pv, !0),
-           name: (0, sE.n)(Pv, zv),
-           thumbnail: (0, Tz.jsx)(aE.e, {
+           gameAnalyticsId: (0, yT.h)(cT, !0),
+           name: (0, IB.m)(cT, kT),
+           thumbnail: (0, Ak.jsx)(xB.b, {
```

#### 2656. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30152` → after: `L30152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30152) · [Before (L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30152)

```diff
-       children: (0, Tz.jsxs)(Gv.K, {
+       children: (0, Ak.jsxs)(ST.P, {
```

#### 2657. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30160` → after: `L30160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30160) · [Before (L30160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30160)

```diff
-         }), (0, Tz.jsx)(mv.b, {
+         }), (0, Ak.jsx)(DT.e, {
```

#### 2658. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30172` → after: `L30172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30172) · [Before (L30172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30172)

```diff
-         icon: (0, Tz.jsx)(mv.b, {
+         icon: (0, Ak.jsx)(DT.e, {
```

#### 2659. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30178` → after: `L30178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30178) · [Before (L30178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30178)

```diff
-         children: [(0, Tz.jsx)(mv.b, {
+         children: [(0, Ak.jsx)(DT.e, {
```

#### 2660. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30180` → after: `L30180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30180) · [Before (L30180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30180)

```diff
-         }), (0, Tz.jsx)(Pz.c, {
+         }), (0, Ak.jsx)(ck.b, {
```

#### 2661. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30190` → after: `L30190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30190) · [Before (L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30190)

```diff
-           children: (0, Tz.jsx)(jv.c, {
+           children: (0, Ak.jsx)(aT.d, {
```

#### 2662. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30228` → after: `L30228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30228) · [Before (L30228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30228)

```diff
-   } = (0, wv.x)();
+   } = (0, jT.B)();
```

#### 2663. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30238` → after: `L30238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30238) · [Before (L30238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30238)

```diff
-     }), (0, Tz.jsx)(Hv.d, {
+     }), (0, Ak.jsx)(LT.b, {
```

#### 2664. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30260` → after: `L30260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30260) · [Before (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30260)

```diff
-   return Pv >= 1 ? `${Pv} day${1===Pv?"":"s"}` : zv >= 1 ? `${zv} hour${1===zv?"":"s"}` : "less than an hour"
+   return cT >= 1 ? `${cT} day${1===cT?"":"s"}` : kT >= 1 ? `${kT} hour${1===kT?"":"s"}` : "less than an hour"
```

#### 2665. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30273` → after: `L30273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30273) · [Before (L30273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30273)

```diff
-   } = (0, wv.x)(), [Tv, Wv] = (0, hv.useState)(null), [av, sv] = (0, hv.useState)(!1), [iv, cv] = (0, hv.useState)(Date.now());
+   } = (0, jT.B)(), [AT, CT] = (0, lT.useState)(null), [vT, tT] = (0, lT.useState)(!1), [NT, QT] = (0, lT.useState)(Date.now());
```

#### 2666. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30276` → after: `L30276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30276) · [Before (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30276)

```diff
-     return Cv.e.getGameBoostStatus(Nv).then((zv => {
+     return hT.d.getGameBoostStatus(xT).then((kT => {
```

#### 2667. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30284-L30285` → after: `L30284-L30285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30284-L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30284-L30285) · [Before (L30284-L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30284-L30285)

```diff
-   const jv = null !== (zv = null === Tv || void 0 === Tv ? void 0 : Tv.activeBoost) && void 0 !== zv ? zv : null,
-     fv = (null === jv || void 0 === jv ? void 0 : jv.schematicId) === ev && jv.endsAt > iv ? jv : null,
+   const aT = null !== (kT = null === AT || void 0 === AT ? void 0 : AT.activeBoost) && void 0 !== kT ? kT : null,
+     FT = (null === aT || void 0 === aT ? void 0 : aT.schematicId) === KT && aT.endsAt > NT ? aT : null,
```

#### 2668. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30303` → after: `L30303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30303) · [Before (L30303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30303)

```diff
-         children: [(0, Tz.jsx)(mv.b, {
+         children: [(0, Ak.jsx)(DT.e, {
```

#### 2669. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30320` → after: `L30320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30320) · [Before (L30320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30320)

```diff
-     }), (0, Tz.jsxs)(Gv.d, {
+     }), (0, Ak.jsxs)(ST.e, {
```

#### 2670. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30322` → after: `L30322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30322) · [Before (L30322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30322)

```diff
-       children: [(0, Tz.jsx)(mv.b, {
+       children: [(0, Ak.jsx)(DT.e, {
```

#### 2671. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L30334` → after: `L30334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR30334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/103.js#L30334) · [Before (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/103.js#L30334)

```diff
-           subtitle: null !== (zv = null === vv || void 0 === vv ? void 0 : vv.errorMessageForUser) && void 0 !== zv ? zv : ""
+           subtitle: null !== (kT = null === TT || void 0 === TT ? void 0 : TT.errorMessageForUser) && void 0 !== kT ? kT : ""
```
