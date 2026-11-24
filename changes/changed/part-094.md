# Changed — Bundle Modifications Report (Part 094 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `94 / 137` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 093](part-093.md) · [Part 095 →](part-095.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (910 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 336. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6942-L6943` → after: `L6942-L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6942-L6943) · [Before (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6942-L6943)

```diff
-       const NB = Zd.find((BB => IB.includes(BB)));
-       throw new Ad(null !== NB && void 0 !== NB ? NB : "failed")
+       const vB = jo.find((BB => GB.includes(BB)));
+       throw new Po(null !== vB && void 0 !== vB ? vB : "failed")
```

#### 337. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6945)

```diff
-     const BI = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const Ko = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 338. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6947-L6949` → after: `L6947-L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6947-L6949) · [Before (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6947-L6949)

```diff
-     function jI(BB) {
-       const jB = BB.trim();
-       return jB.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(jB) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(jB) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function Vo(BB) {
+       const IB = BB.trim();
+       return IB.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(IB) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(IB) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 339. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6956` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6956) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6956)

```diff
-         }(zB, null !== (IB = BB.callFormat) && void 0 !== IB ? IB : "simple")) return zB;
+         }(ZB, null !== (GB = BB.callFormat) && void 0 !== GB ? GB : "simple")) return ZB;
```

#### 340. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6964` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6964) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6964)

```diff
-         UB = (0, GB.b)(NB, QB);
+         cB = (0, UB.c)(vB, TB);
```

#### 341. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6967)

```diff
-         return xd(jB) && "" !== jB.answer.trim() ? jB : zB
+         return uo(IB) && "" !== IB.answer.trim() ? IB : ZB
```

#### 342. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6970)

```diff
-         return Sd.JJ(BB.name, UB.signal.aborted ? "timeout" : "network"), zB
+         return Uo.JN(BB.name, cB.signal.aborted ? "timeout" : "network"), ZB
```

#### 343. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7005` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7005) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7005)

```diff
-       const QB = (0, GB.b)(2e4, zB);
+       const TB = (0, UB.c)(2e4, ZB);
```

#### 344. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7023-L7024` → after: `L7023-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7023-L7024) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7023-L7024)

```diff
-         if (Ld(BB, zB), 429 === zB.status) return Sd.JJ(BB, zB), "busy";
-         if (!zB.ok) return Sd.JJ(BB, zB), null;
+         if (go(BB, ZB), 429 === ZB.status) return Uo.JN(BB, ZB), "busy";
+         if (!ZB.ok) return Uo.JN(BB, ZB), null;
```

#### 345. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7026)

```diff
-           UB = String(null !== (nB = null === (dB = uB.choices) || void 0 === dB || null === (IB = dB[0]) || void 0 === IB || null === (NB = IB.message) || void 0 === NB ? void 0 : NB.content) && void 0 !== nB ? nB : "");
+           cB = String(null !== (JB = null === (oB = kB.choices) || void 0 === oB || null === (GB = oB[0]) || void 0 === GB || null === (vB = GB.message) || void 0 === vB ? void 0 : vB.content) && void 0 !== JB ? JB : "");
```

#### 346. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7030)

```diff
-           }(UB) ? UB : null
+           }(cB) ? cB : null
```

#### 347. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7033)

```diff
-         return Sd.JJ(BB, QB.signal.aborted ? "timeout" : "network"), null
+         return Uo.JN(BB, TB.signal.aborted ? "timeout" : "network"), null
```

#### 348. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7038` → after: `L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7038) · [Before (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7038)

```diff
-     var uI = zB(41);
+     var oG = ZB(36);
```

#### 349. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7042` → after: `L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7042) · [Before (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7042)

```diff
-       const BB = uI.j.getItem(UI);
+       const BB = oG.m.getItem(GG);
```

#### 350. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7053` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7053) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7053)

```diff
-         return null === this.player ? null : null !== (BB = null !== (jB = this.unsaved.get(this.player)) && void 0 !== jB ? jB : aI()[this.player]) && void 0 !== BB ? BB : null
+         return null === this.player ? null : null !== (BB = null !== (IB = this.unsaved.get(this.player)) && void 0 !== IB ? IB : vG()[this.player]) && void 0 !== BB ? BB : null
```

#### 351. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7064` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7064) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7064)

```diff
-           } = await Promise.resolve().then((() => zB(1173)));
+           } = await Promise.resolve().then((() => ZB(1186)));
```

#### 352. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7070` → after: `L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7070) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7070)

```diff
-         null !== this.player && (uI.j.setItem(UI, {
+         null !== this.player && (oG.m.setItem(GG, {
```

#### 353. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7093` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7093) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7093)

```diff
-       const zB = `\n[... ${BB.length-jB} more characters cut]`;
+       const ZB = `\n[... ${BB.length-IB} more characters cut]`;
```

#### 354. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7098-L7099` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7098-L7099) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7098-L7099)

```diff
-     var LI = zB(667),
-       gI = zB(4503);
+     var qG = ZB(671),
+       yG = ZB(4566);
```

#### 355. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7136` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7136) · [Before (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7136)

```diff
-         this.JJ = BB, this.chatId = (0, gI.d)(12), this.open = new Map
+         this.JN = BB, this.chatId = (0, yG.d)(12), this.open = new Map
```

#### 356. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7140` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7140) · [Before (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7140)

```diff
-         zB && (clearTimeout(zB.timer), jB || (this.open.delete(BB), this.send(zB.JJ)))
+         ZB && (clearTimeout(ZB.timer), IB || (this.open.delete(BB), this.send(ZB.JN)))
```

#### 357. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7145)

```diff
-         if (QB) return void(QB.JJ.responses.length < yI && QB.JJ.responses.push(MI(zB)));
+         if (TB) return void(TB.JN.responses.length < FG && TB.JN.responses.push(dG(ZB)));
```

#### 358. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7148` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7148) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7148)

```diff
-           JJ: nB
+           JN: JB
```

#### 359. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7158)

```diff
-           this.open.delete(BB), this.send(jB.JJ)
+           this.open.delete(BB), this.send(IB.JN)
```

#### 360. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7164` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7164) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7164)

```diff
-         })(BB) && this.JJ(BB)
+         })(BB) && this.JN(BB)
```

#### 361. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7179` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7179) · [Before (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7179)

```diff
-             JJ: jB
+             JN: IB
```

#### 362. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7190` → after: `L7190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7190) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7190)

```diff
-       "yes" === BB && zB.length > 0 && DI(zB.map((BB => BB.JJ)))
+       "yes" === BB && ZB.length > 0 && iG(ZB.map((BB => BB.JN)))
```

#### 363. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7193` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7193) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7193)

```diff
-       const jB = Promise.resolve().then((() => zB(41577)));
+       const IB = Promise.resolve().then((() => ZB(41505)));
```

#### 364. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7203-L7204` → after: `L7203-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7203-L7204) · [Before (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7203-L7204)

```diff
-     var FI = zB(376),
-       YI = zB(174);
+     var pG = ZB(360),
+       aG = ZB(168);
```

#### 365. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7261)

```diff
-       return "https:" !== jB.protocol && ("http:" !== jB.protocol || !zB) || jB.username || jB.password || jB.search ? null : `${jB.origin}${jB.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== IB.protocol && ("http:" !== IB.protocol || !ZB) || IB.username || IB.password || IB.search ? null : `${IB.origin}${IB.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 366. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7282)

```diff
-           return `${zB} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${ZB} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 367. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7286)

```diff
-           return `${zB} can't find that model. Check its name.`;
+           return `${ZB} can't find that model. Check its name.`;
```

#### 368. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7288` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7288) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7288)

```diff
-           return "anthropic" === jB ? "Claude didn't accept your key: check it, or make a new one." : "custom" === jB ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === IB ? "Claude didn't accept your key: check it, or make a new one." : "custom" === IB ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 369. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7290` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7290) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7290)

```diff
-           return "custom" === jB ? "That server stopped your key for now: it has used all it can." : `${zB} stopped your key for now: it has used all it can. Check it on ${zB}'s website.`;
+           return "custom" === IB ? "That server stopped your key for now: it has used all it can." : `${ZB} stopped your key for now: it has used all it can. Check it on ${ZB}'s website.`;
```

#### 370. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7292)

```diff
-           return `${zB} doesn't work from where you are.`;
+           return `${ZB} doesn't work from where you are.`;
```

#### 371. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7296)

```diff
-           return `${zB} had a problem with that. Try again in a minute.`
+           return `${ZB} had a problem with that. Try again in a minute.`
```

#### 372. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7331)

```diff
-         throw console.warn(`AI key request: ${BB} answered ${nB.status}`), new WI(function(BB, jB, zB) {
+         throw console.warn(`AI key request: ${BB} answered ${JB.status}`), new XG(function(BB, IB, ZB) {
```

#### 373. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7338)

```diff
-           return Number.isFinite(zB) ? 1e3 * zB : Math.max(0, Date.parse(jB) - Date.now()) || void 0
+           return Number.isFinite(ZB) ? 1e3 * ZB : Math.max(0, Date.parse(IB) - Date.now()) || void 0
```

#### 374. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7345` → after: `L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7345) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7345)

```diff
-             zB = "string" === typeof nB ? nB : BB
+             ZB = "string" === typeof JB ? JB : BB
```

#### 375. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7359` → after: `L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7359) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7359)

```diff
-       const QB = (0, GB.b)(BB, jB);
+       const TB = (0, UB.c)(BB, IB);
```

#### 376. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7394)

```diff
-         UQB: IB,
+         rTB: GB,
```

#### 377. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7402)

```diff
-         const IB = null !== (zB = null === (QB = BB.match(/```/g)) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0,
+         const GB = null !== (ZB = null === (TB = BB.match(/```/g)) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0,
```

#### 378. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7415)

```diff
-         written: NB ? pB : void 0,
+         written: vB ? hB : void 0,
```

#### 379. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7427` → after: `L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7427) · [Before (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7427)

```diff
-       const QB = null !== (zB = jB.tools) && void 0 !== zB ? zB : [];
+       const TB = null !== (ZB = IB.tools) && void 0 !== ZB ? ZB : [];
```

#### 380. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7478` → after: `L7478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7478) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7478)

```diff
-             models: (null !== (jB = (await zB.json()).data) && void 0 !== jB ? jB : []).map((BB => ({
+             models: (null !== (IB = (await ZB.json()).data) && void 0 !== IB ? IB : []).map((BB => ({
```

#### 381. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7505)

```diff
-           return await ld(null !== (nB = dB.body) && void 0 !== nB ? nB : new ReadableStream, (jB => {
+           return await Lo(null !== (JB = oB.body) && void 0 !== JB ? JB : new ReadableStream, (IB => {
```

#### 382. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7510-L7511)

```diff
-             NB += null !== (nB = null !== (dB = null === kB || void 0 === kB || null === (pB = kB.delta) || void 0 === pB ? void 0 : pB.reasoning) && void 0 !== dB ? dB : null === kB || void 0 === kB || null === (rB = kB.delta) || void 0 === rB ? void 0 : rB.reasoning_content) && … [truncated]
-             for (const BB of null !== (GB = null === kB || void 0 === kB || null === (LB = kB.delta) || void 0 === LB ? void 0 : LB.tool_calls) && void 0 !== GB ? GB : []) {
+             vB += null !== (JB = null !== (oB = null === yB || void 0 === yB || null === (hB = yB.delta) || void 0 === hB ? void 0 : hB.reasoning) && void 0 !== oB ? oB : null === yB || void 0 === yB || null === (zB = yB.delta) || void 0 === zB ? void 0 : zB.reasoning_content) && … [truncated]
+             for (const BB of null !== (UB = null === yB || void 0 === yB || null === (WB = yB.delta) || void 0 === WB ? void 0 : WB.tool_calls) && void 0 !== UB ? UB : []) {
```

#### 383. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7524` → after: `L7524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7524) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7524)

```diff
-             UQB: uB,
+             rTB: kB,
```

#### 384. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7544)

```diff
-         return await bI(xI, BB, (async BB => cI("openrouter", `${VI.openrouter.baseUrl}/key`, {
+         return await bG(fG, BB, (async BB => tG("openrouter", `${HG.openrouter.baseUrl}/key`, {
```

#### 385. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7565` → after: `L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7565) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7565)

```diff
-             models: (null !== (jB = (await zB.json()).data) && void 0 !== jB ? jB : []).map((BB => ({
+             models: (null !== (IB = (await ZB.json()).data) && void 0 !== IB ? IB : []).map((BB => ({
```

#### 386. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7598` → after: `L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7598) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7598)

```diff
-           await ld(null !== (dB = IB.body) && void 0 !== dB ? dB : new ReadableStream, (jB => {
+           await Lo(null !== (oB = GB.body) && void 0 !== oB ? oB : new ReadableStream, (IB => {
```

#### 387. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7603-L7604` → after: `L7603-L7604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7603-L7604) · [Before (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7603-L7604)

```diff
-             if ("content_block_start" === dB.type && "tool_use" === (null === (QB = dB.content_block) || void 0 === QB ? void 0 : QB.type)) pB.set(null !== (sB = dB.index) && void 0 !== sB ? sB : pB.size, {
-               name: null !== (JB = dB.content_block.name) && void 0 !== JB ? JB : "",
+             if ("content_block_start" === oB.type && "tool_use" === (null === (TB = oB.content_block) || void 0 === TB ? void 0 : TB.type)) hB.set(null !== (FB = oB.index) && void 0 !== FB ? FB : hB.size, {
+               name: null !== (NB = oB.content_block.name) && void 0 !== NB ? NB : "",
```

#### 388. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7609-L7610` → after: `L7609-L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7609-L7610) · [Before (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7609-L7610)

```diff
-               NB += null !== (mB = null === (yB = dB.delta) || void 0 === yB ? void 0 : yB.text) && void 0 !== mB ? mB : "", uB += null !== (kB = null === (GB = dB.delta) || void 0 === GB ? void 0 : GB.thinking) && void 0 !== kB ? kB : "";
-               const BB = pB.get(null !== (LB = dB.index) && void 0 !== LB ? LB : -1);
+               vB += null !== (gB = null === (qB = oB.delta) || void 0 === qB ? void 0 : qB.text) && void 0 !== gB ? gB : "", kB += null !== (yB = null === (UB = oB.delta) || void 0 === UB ? void 0 : UB.thinking) && void 0 !== yB ? yB : "";
+               const BB = hB.get(null !== (WB = oB.index) && void 0 !== WB ? WB : -1);
```

#### 389. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7612` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7612) · [Before (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7612)

```diff
-               if (BB && "input_json_delta" === (null === (gB = dB.delta) || void 0 === gB ? void 0 : gB.type)) BB.args += null !== (tB = dB.delta.partial_json) && void 0 !== tB ? tB : ""
+               if (BB && "input_json_delta" === (null === (dB = oB.delta) || void 0 === dB ? void 0 : dB.type)) BB.args += null !== (CB = oB.delta.partial_json) && void 0 !== CB ? CB : ""
```

#### 390. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7628)

```diff
-             UQB: UB,
+             rTB: cB,
```

#### 391. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7654` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7654) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7654)

```diff
-             models: (null !== (jB = (await zB.json()).models) && void 0 !== jB ? jB : []).filter((BB => {
+             models: (null !== (IB = (await ZB.json()).models) && void 0 !== IB ? IB : []).filter((BB => {
```

#### 392. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7696)

```diff
-           return await ld(null !== (dB = IB.body) && void 0 !== dB ? dB : new ReadableStream, (jB => {
+           return await Lo(null !== (oB = GB.body) && void 0 !== oB ? oB : new ReadableStream, (IB => {
```

#### 393. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7700)

```diff
-             for (const BB of null !== (sB = null === rB || void 0 === rB || null === (JB = rB.content) || void 0 === JB ? void 0 : JB.parts) && void 0 !== sB ? sB : []) {
+             for (const BB of null !== (FB = null === zB || void 0 === zB || null === (NB = zB.content) || void 0 === NB ? void 0 : NB.parts) && void 0 !== FB ? FB : []) {
```

#### 394. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703-L7704` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7703-L7704)

```diff
-                 name: null !== (mB = BB.functionCall.name) && void 0 !== mB ? mB : "",
-                 args: JSON.stringify(null !== (yB = BB.functionCall.args) && void 0 !== yB ? yB : {})
+                 name: null !== (gB = BB.functionCall.name) && void 0 !== gB ? gB : "",
+                 args: JSON.stringify(null !== (qB = BB.functionCall.args) && void 0 !== qB ? qB : {})
```

#### 395. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7708)

```diff
-                 uB += null !== (kB = BB.text) && void 0 !== kB ? kB : ""
+                 kB += null !== (yB = BB.text) && void 0 !== yB ? yB : ""
```

#### 396. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7711` → after: `L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7711) · [Before (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7711)

```diff
-                 NB += null !== (GB = BB.text) && void 0 !== GB ? GB : ""
+                 vB += null !== (UB = BB.text) && void 0 !== UB ? UB : ""
```

#### 397. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7723)

```diff
-             UQB: UB,
+             rTB: cB,
```

#### 398. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7748` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7748)

```diff
-           return new jN("custom", null !== zB && void 0 !== zB ? zB : "", jB)
+           return new VG("custom", null !== ZB && void 0 !== ZB ? ZB : "", IB)
```

#### 399. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7876)

```diff
-         name: null !== (QB = null === nB || void 0 === nB ? void 0 : nB.name) && void 0 !== QB ? QB : jB,
+         name: null !== (TB = null === JB || void 0 === JB ? void 0 : JB.name) && void 0 !== TB ? TB : IB,
```

#### 400. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7900` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7900) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7900)

```diff
-       return null !== (jB = BB.find((BB => "smart" === BB.tier))) && void 0 !== jB ? jB : BB[0]
+       return null !== (IB = BB.find((BB => "smart" === BB.tier))) && void 0 !== IB ? IB : BB[0]
```

#### 401. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7906` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7906) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7906)

```diff
-       return null !== (jB = BB.name) && void 0 !== jB ? jB : PI(BB.provider, BB.baseUrl, zB)
+       return null !== (IB = BB.name) && void 0 !== IB ? IB : mG(BB.provider, BB.baseUrl, ZB)
```

#### 402. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7923` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7923)

```diff
-         return new URL(null !== (jB = BB.baseUrl) && void 0 !== jB ? jB : "").protocol.startsWith("http")
+         return new URL(null !== (IB = BB.baseUrl) && void 0 !== IB ? IB : "").protocol.startsWith("http")
```

#### 403. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-         this.state = null !== QB && void 0 !== QB && QB.remember ? null !== nB && void 0 !== nB && nB.remember ? nB : {
+         this.state = null !== TB && void 0 !== TB && TB.remember ? null !== JB && void 0 !== JB && JB.remember ? JB : {
```

#### 404. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7948)

```diff
-         } : null !== (zB = null !== QB && void 0 !== QB ? QB : nB) && void 0 !== zB ? zB : mN, this.ownsRemembered = this.state.remember && null !== nB
+         } : null !== (ZB = null !== TB && void 0 !== TB ? TB : JB) && void 0 !== ZB ? ZB : zv, this.ownsRemembered = this.state.remember && null !== JB
```

#### 405. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7965-L7966` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7965-L7966)

```diff
-           NB = "custom" !== BB.provider ? BB.provider : null !== (QB = null === IB || void 0 === IB ? void 0 : IB.id) && void 0 !== QB ? QB : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           uB = void 0 === jB ? rN(BB.models) : null !== (nB = BB.models.find((BB => BB.id === jB))) && void 0 !== nB ? nB : BB.models[0],
+           vB = "custom" !== BB.provider ? BB.provider : null !== (TB = null === GB || void 0 === GB ? void 0 : GB.id) && void 0 !== TB ? TB : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           kB = void 0 === IB ? cv(BB.models) : null !== (JB = BB.models.find((BB => BB.id === IB))) && void 0 !== JB ? JB : BB.models[0],
```

#### 406. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7981` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L7981) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L7981)

```diff
-           sB = rB ? this.state.keys.filter((BB => BB.id !== NB)).map((BB => BB.id === zB ? aB : BB)) : pB ? [...this.state.keys, aB] : this.state.keys.map((BB => BB.id === NB ? aB : BB)),
+           FB = zB ? this.state.keys.filter((BB => BB.id !== vB)).map((BB => BB.id === ZB ? nB : BB)) : hB ? [...this.state.keys, nB] : this.state.keys.map((BB => BB.id === vB ? nB : BB)),
```

#### 407. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8000` → after: `L8000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8000) · [Before (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8000)

```diff
-             return "" === zB ? nB : {
+             return "" === ZB ? JB : {
```

#### 408. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8095` → after: `L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8095) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8095)

```diff
-           QB = (null !== (jB = null === zB || void 0 === zB ? void 0 : zB.keys) && void 0 !== jB ? jB : []).filter((BB => this.state.keys.every((jB => !yN(jB, BB)))));
+           TB = (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.keys) && void 0 !== IB ? IB : []).filter((BB => this.state.keys.every((IB => !Fv(IB, BB)))));
```

#### 409. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8139)

```diff
-           return Array.isArray(jB.keys) && jB.keys.every(kN) ? jB : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(IB.keys) && IB.keys.every(Nv) ? IB : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 410. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8181` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8181) · [Before (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8181)

```diff
-       const NB = null !== (zB = null === IB || void 0 === IB ? void 0 : IB.trim()) && void 0 !== zB ? zB : "";
+       const vB = null !== (ZB = null === GB || void 0 === GB ? void 0 : GB.trim()) && void 0 !== ZB ? ZB : "";
```

#### 411. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8211` → after: `L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8211) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8211)

```diff
-               return 0 !== (null !== (zB = null === (QB = jB.tools) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0) && BB instanceof WI && "failed" === BB.problem && (400 === BB.status || 404 === BB.status && /\btool/i.test(null !== (nB = BB.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (ZB = null === (TB = IB.tools) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0) && BB instanceof XG && "failed" === BB.problem && (400 === BB.status || 404 === BB.status && /\btool/i.test(null !== (JB = BB.detail) && void 0 != … [truncated]
```

#### 412. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8226` → after: `L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8226) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8226)

```diff
-         return await (uB = Math.min(null !== (IB = null !== (NB = pB.retryAfterMs) && void 0 !== NB ? NB : zB.retryWaitMs) && void 0 !== IB ? IB : 3e3, 2e4), UB = zB.signal, new Promise(((BB, jB) => {
+         return await (kB = Math.min(null !== (GB = null !== (vB = hB.retryAfterMs) && void 0 !== vB ? vB : ZB.retryWaitMs) && void 0 !== GB ? GB : 3e3, 2e4), cB = ZB.signal, new Promise(((BB, IB) => {
```

#### 413. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8238` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8238) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8238)

```diff
-     var MN = zB(3749);
+     var dv = ZB(3816);
```

#### 414. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8355)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${WN((null!==(jB=BB.availableFrom)&&void 0!==jB?jB:zB)-zB)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${Xv((null!==(IB=BB.availableFrom)&&void 0!==IB?IB:ZB)-ZB)} to go.`;
```

#### 415. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8357` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8357) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8357)

```diff
-           return BB.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(BB,jB){const zB=Math.ceil((BB-jB)/36e5);if(zB<=24)return zB<=1?"within the hour":`in ${zB} hours`;return`in ${WN(BB-jB)}`}(BB.resetsAt,zB)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return BB.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(BB,IB){const ZB=Math.ceil((BB-IB)/36e5);if(ZB<=24)return ZB<=1?"within the hour":`in ${ZB} hours`;return`in ${Xv(BB-IB)}`}(BB.resetsAt,ZB)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 416. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8392-L8393` → after: `L8392-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8392-L8393) · [Before (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8392-L8393)

```diff
-       const jB = Math.max(1, Math.ceil(BB / FI.d));
-       return 1 === jB ? "1 day" : `${jB} days`
+       const IB = Math.max(1, Math.ceil(BB / pG.l));
+       return 1 === IB ? "1 day" : `${IB} days`
```

#### 417. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8398)

```diff
-       if (zB) return `${zB} Bot.xd is answering instead.`;
+       if (ZB) return `${ZB} Bot.xd is answering instead.`;
```

#### 418. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8417` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8417) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8417)

```diff
-           return BB.messages.length > 12 || BB.messages.some((BB => BB.content.length > Qd)) || (null !== (jB = null === (zB = BB.toolsJson) || void 0 === zB ? void 0 : zB.length) && void 0 !== jB ? jB : 0) > 1e5 || (null !== (QB = null === (nB = BB.request) || void 0 === nB ? vo … [truncated]
+           return BB.messages.length > 12 || BB.messages.some((BB => BB.content.length > Bo)) || (null !== (IB = null === (ZB = BB.toolsJson) || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : 0) > 1e5 || (null !== (TB = null === (JB = BB.request) || void 0 === JB ? vo … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8424` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8424) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8424)

```diff
-         if (jB instanceof YI.c && 413 === jB.httpCode) return {
+         if (IB instanceof aG.d && 413 === IB.httpCode) return {
```

#### 420. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8442-L8444` → after: `L8442-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8442-L8444) · [Before (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8442-L8444)

```diff
-     var xN = zB(31),
-       KN = zB(28),
-       CN = zB(2338);
+     var fv = ZB(24),
+       lv = ZB(20),
+       Av = ZB(2369);
```

#### 421. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8448` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8448) · [Before (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8448)

```diff
-       cN ??= Promise.resolve().then((() => zB(2346))), cN.then((BB => {
+       tv ??= Promise.resolve().then((() => ZB(2374))), tv.then((BB => {
```

#### 422. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8470)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => zB(1381))), zB.e(359).then((() => zB(61453)))]);
+         }] = await Promise.all([Promise.resolve().then((() => ZB(1403))), ZB.e(359).then((() => ZB(61324)))]);
```

#### 423. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8477` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8477) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8477)

```diff
-                   xN.n.Ly("OpenStoreFromCodeEditor"), (0, CN.p)({
+                   fv.l.Gq("OpenStoreFromCodeEditor"), (0, Av.n)({
```

#### 424. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8482-L8483` → after: `L8482-L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8482-L8483) · [Before (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8482-L8483)

```diff
-                   const BB = xN.n.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === KN.c.get("openEverythingMenuName") && (xN.n.unsubscribe(BB), DN.refresh())
+                   const BB = fv.l.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === lv.d.get("openEverythingMenuName") && (fv.l.unsubscribe(BB), iv.refresh())
```

#### 425. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8682` → after: `L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8682) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8682)

```diff
-         nB = Uu(jB ? BB : (0, mj.u)(BB, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, mj.m, (() => "projectRequire"))),
+         JB = vk(IB ? BB : (0, gI.s)(BB, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, gI.o, (() => "projectRequire"))),
```

#### 426. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8685)

```diff
-         for (const nB of (0, mj.h)(BB, /(global|window|document|process|require)\b\s*[.([]/g, mj.m)) QB.has(nB[1]) || dB.has(nB[1]) || (QB.add(nB[1]), zB.push(`Line ${jB+1} uses "${nB[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const JB of (0, gI.f)(BB, /(global|window|document|process|require)\b\s*[.([]/g, gI.o)) TB.has(JB[1]) || oB.has(JB[1]) || (TB.add(JB[1]), ZB.push(`Line ${IB+1} uses "${JB[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 427. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8700) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8700)

```diff
-         const sB = [null !== (dB = jB[QB - 2]) && void 0 !== dB ? dB : "", null !== (IB = jB[QB - 1]) && void 0 !== IB ? IB : "", BB.slice(0, UB)].join(" ");
+         const FB = [null !== (oB = IB[TB - 2]) && void 0 !== oB ? oB : "", null !== (GB = IB[TB - 1]) && void 0 !== GB ? GB : "", BB.slice(0, cB)].join(" ");
```

#### 428. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702-L8703` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8702-L8703) · [Before (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8702-L8703)

```diff
-         const JB = null !== (NB = null === (uB = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(pB)) || void 0 === uB ? void 0 : uB[1]) && void 0 !== NB ? NB : "coins";
-         zB.push(`Line ${QB+1} sets the saved "${JB}" back to ${rB} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${JB}") is null.`)
+         const NB = null !== (vB = null === (kB = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(hB)) || void 0 === kB ? void 0 : kB[1]) && void 0 !== vB ? vB : "coins";
+         ZB.push(`Line ${TB+1} sets the saved "${NB}" back to ${zB} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${NB}") is null.`)
```

#### 429. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8709)

```diff
-       const QB = null !== (jB = null === (zB = BB.split("### Parameters:")[1]) || void 0 === zB ? void 0 : zB.split("###")[0]) && void 0 !== jB ? jB : "",
+       const TB = null !== (IB = null === (ZB = BB.split("### Parameters:")[1]) || void 0 === ZB ? void 0 : ZB.split("###")[0]) && void 0 !== IB ? IB : "",
```

#### 430. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8757-L8759` → after: `L8757-L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8757-L8759) · [Before (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8757-L8759)

```diff
-         nB = `\\((?:[^()]*[\\s,])?${QB}(?![\\w$])[^()]*\\)`,
-         dB = new RegExp(`(?:const|let|var)\\s+${QB}(?![\\w$])|${QB}\\s*(?:\\+?=(?![=>])|=>)|${nB}\\s*=>|function\\s*[\\w$]*\\s*${nB}`, "g");
-       return 1 === (0, mj.h)(BB, dB, mj.m).length ? null === (zB = new RegExp(`\\b(?:const|let|var)\\s+${QB}\\s*=\\s*${Ju}\\s*(?:;|//|$)`, "m").exec(BB)) || void 0 === zB ? void 0 : zB[1] : void 0
+         JB = `\\((?:[^()]*[\\s,])?${TB}(?![\\w$])[^()]*\\)`,
+         oB = new RegExp(`(?:const|let|var)\\s+${TB}(?![\\w$])|${TB}\\s*(?:\\+?=(?![=>])|=>)|${JB}\\s*=>|function\\s*[\\w$]*\\s*${JB}`, "g");
+       return 1 === (0, gI.f)(BB, oB, gI.o).length ? null === (ZB = new RegExp(`\\b(?:const|let|var)\\s+${TB}\\s*=\\s*${zk}\\s*(?:;|//|$)`, "m").exec(BB)) || void 0 === ZB ? void 0 : ZB[1] : void 0
```

#### 431. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8768-L8769` → after: `L8768-L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8768-L8769) · [Before (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8768-L8769)

```diff
-           QB = -1 === zB ? jB : jB.slice(0, zB + 1);
-         return QB.length > 110 ? `${QB.slice(0,107)}...` : QB
+           TB = -1 === ZB ? IB : IB.slice(0, ZB + 1);
+         return TB.length > 110 ? `${TB.slice(0,107)}...` : TB
```

#### 432. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8771)

```diff
-       return QB = "api" === BB ? `api.${jB}(${su(zB).join(", ")})${nB?` \u2014 ${nB}`:""}` : "callback" === BB ? `${jB}(${su(zB).join(", ")})${nB?` \u2014 ${nB}`:""}` : "clientOption" === BB ? `${jB}: ${function(BB){var jB,zB;return null!==(jB=null===(zB=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return TB = "api" === BB ? `api.${IB}(${hk(ZB).join(", ")})${JB?` \u2014 ${JB}`:""}` : "callback" === BB ? `${IB}(${hk(ZB).join(", ")})${JB?` \u2014 ${JB}`:""}` : "clientOption" === BB ? `${IB}: ${function(BB){var IB,ZB;return null!==(IB=null===(ZB=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 433. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8775` → after: `L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8775) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8775)

```diff
-       The closest name is "${jB[0]}", which may be something
+       The closest name is "${IB[0]}", which may be something
```

#### 434. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8777)

```diff
-       `}function tu(BB){return BB.split("\n").slice(1).map((BB=>BB.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((BB=>""!==BB&&!BB.startsWith("#")))}class Su{constructor(BB){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function Wk(BB){return BB.split("\n").slice(1).map((BB=>BB.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((BB=>""!==BB&&!BB.startsWith("#")))}class dk{constructor(BB){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8781)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();jB.push({name:zB,text:nB})}return jB}(zB))jB.push(ku(BB,QB,nB))};zB("api",BB.apiReference),zB("callback",BB.callbacks),zB("clientOption",BB.clientOptions),zB("snippet",BB.snippets),zB("howTo",BB.howTo);const QB=function(){const BB … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();IB.push({name:ZB,text:JB})}return IB}(ZB))IB.push(gk(BB,TB,JB))};ZB("api",BB.apiReference),ZB("callback",BB.callbacks),ZB("clientOption",BB.clientOptions),ZB("snippet",BB.snippets),ZB("howTo",BB.howTo);const TB=function(){const BB … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8793` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8793) · [Before (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8793)

```diff
-   jB = GQ.map((BB => `## ${BB.name}\nPrefab (${BB.kind}, ${BB.category}): put in with use_prefab. ${VQ(BB,!1)}`));
+   IB = UT.map((BB => `## ${BB.name}\nPrefab (${BB.kind}, ${BB.category}): put in with use_prefab. ${PT(BB,!1)}`));
```

#### 437. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8796` → after: `L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8796) · [Before (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8796)

```diff
-     prefabs: `# Prefabs\n\n${jB.join("\n\n")}\n`
+     prefabs: `# Prefabs\n\n${IB.join("\n\n")}\n`
```

#### 438. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8804)

```diff
-     this.wordCounts.set(BB, (null !== (nB = this.wordCounts.get(BB)) && void 0 !== nB ? nB : 0) + 1)
+     this.wordCounts.set(BB, (null !== (JB = this.wordCounts.get(BB)) && void 0 !== JB ? JB : 0) + 1)
```

#### 439. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8809` → after: `L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8809) · [Before (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8809)

```diff
-   const QB = null !== (jB = null === (zB = BB.split("## Mob Variations")[1]) || void 0 === zB ? void 0 : zB.split("```")[1]) && void 0 !== jB ? jB : "",
+   const TB = null !== (IB = null === (ZB = BB.split("## Mob Variations")[1]) || void 0 === ZB ? void 0 : ZB.split("```")[1]) && void 0 !== IB ? IB : "",
```

#### 440. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8832` → after: `L8832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8832) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8832)

```diff
-       return null !== (jB = BB[1]) && void 0 !== jB ? jB : BB[2]
+       return null !== (IB = BB[1]) && void 0 !== IB ? IB : BB[2]
```

#### 441. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8839)

```diff
-     for (const nB of (0, mj.h)(BB, /([\w$]+)\s*\(/g, mj.m)) {
+     for (const JB of (0, gI.f)(BB, /([\w$]+)\s*\(/g, gI.o)) {
```

#### 442. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8843` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8843) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8843)

```diff
-       dB.has(IB) || QB.has(IB) || NB || "api" !== (null === (zB = this.byName.get(IB)) || void 0 === zB ? void 0 : zB.kind) || dB.set(IB, `Line ${jB+1} calls ${IB} without "api.", so it throws there. Did you mean api.${IB}?`)
+       oB.has(GB) || TB.has(GB) || vB || "api" !== (null === (ZB = this.byName.get(GB)) || void 0 === ZB ? void 0 : ZB.kind) || oB.set(GB, `Line ${IB+1} calls ${GB} without "api.", so it throws there. Did you mean api.${GB}?`)
```

#### 443. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8853` → after: `L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8853) · [Before (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8853)

```diff
-     return `api.${BB} doesn't exist.${jB.length?` Did you mean ${jB.join(" or ")}?`:""}`
+     return `api.${BB} doesn't exist.${IB.length?` Did you mean ${IB.join(" or ")}?`:""}`
```

#### 444. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8873)

```diff
-         rB = pB ? null === (uB = new RegExp(`(?:^|[{,])\\s*${pB.replaceAll("$","\\$")}\\s*:\\s*${Ju}`, "m").exec(BB)) || void 0 === uB ? void 0 : uB[1] : void 0,
+         zB = hB ? null === (kB = new RegExp(`(?:^|[{,])\\s*${hB.replaceAll("$","\\$")}\\s*:\\s*${zk}`, "m").exec(BB)) || void 0 === kB ? void 0 : kB[1] : void 0,
```

#### 445. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8875-L8876` → after: `L8875-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8875-L8876) · [Before (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8875-L8876)

```diff
-         JB = null !== (UB = null === (aB = new RegExp(`\\?\\s*${Ju}\\s*:\\s*${Ju}$`).exec(QB)) || void 0 === aB ? void 0 : aB.slice(1)) && void 0 !== UB ? UB : [];
-       for (const BB of [null !== (mB = null !== rB && void 0 !== rB ? rB : sB) && void 0 !== mB ? mB : QB, ...JB]) {
+         NB = null !== (cB = null === (nB = new RegExp(`\\?\\s*${zk}\\s*:\\s*${zk}$`).exec(TB)) || void 0 === nB ? void 0 : nB.slice(1)) && void 0 !== cB ? cB : [];
+       for (const BB of [null !== (gB = null !== zB && void 0 !== zB ? zB : FB) && void 0 !== gB ? gB : TB, ...NB]) {
```

#### 446. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8884` → after: `L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8884) · [Before (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8884)

```diff
-   return [...zB].map((BB => `"${BB}" isn't an item or block name.${gu(this.suggestNames(BB))}`))
+   return [...ZB].map((BB => `"${BB}" isn't an item or block name.${Uk(this.suggestNames(BB))}`))
```

#### 447. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8897` → after: `L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8897) · [Before (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8897)

```diff
-     return `"${jB}" isn't an item or block name, so giving or selling it fails. Did you mean "${zB}"?`
+     return `"${IB}" isn't an item or block name, so giving or selling it fails. Did you mean "${ZB}"?`
```

#### 448. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8913` → after: `L8913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8913) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8913)

```diff
-       return `"${jB}" isn't a block or item name, so comparing with it is never true. Did you mean "${zB}"?`
+       return `"${IB}" isn't a block or item name, so comparing with it is never true. Did you mean "${ZB}"?`
```

#### 449. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8918-L8919` → after: `L8918-L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8918-L8919) · [Before (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8918-L8919)

```diff
-       zB = this.blockNames.has(jB) || !this.itemAndBlockNames.includes(jB) ? void 0 : [`Block of ${jB}`, `${jB} Block`].find((BB => this.blockNames.has(BB)));
-     !zB || BB.includes(`"${zB}"`) || BB.includes(`'${zB}'`) || IB.set(jB, zB)
+       ZB = this.blockNames.has(IB) || !this.itemAndBlockNames.includes(IB) ? void 0 : [`Block of ${IB}`, `${IB} Block`].find((BB => this.blockNames.has(BB)));
+     !ZB || BB.includes(`"${ZB}"`) || BB.includes(`'${ZB}'`) || GB.set(IB, ZB)
```

#### 450. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8923` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8923) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8923)

```diff
-     return `"${jB}" is an item, not a block, so no block is ever called that. Did you mean "${zB}"?`
+     return `"${IB}" is an item, not a block, so no block is ever called that. Did you mean "${ZB}"?`
```

#### 451. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8940-L8941` → after: `L8940-L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8940-L8941) · [Before (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8940-L8941)

```diff
-       } : QB.names.length > 0 || QB.isDecided ? QB : {
-         names: zB.length <= 2 ? zB : [],
+       } : TB.names.length > 0 || TB.isDecided ? TB : {
+         names: ZB.length <= 2 ? ZB : [],
```

#### 452. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8945` → after: `L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8945) · [Before (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8945)

```diff
-     return `"${BB}" isn't a block or item name, so comparing a block with it is never true.${gu(nB)}`
+     return `"${BB}" isn't a block or item name, so comparing a block with it is never true.${Uk(JB)}`
```

#### 453. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8960-L8961` → after: `L8960-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8960-L8961) · [Before (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8960-L8961)

```diff
-           name: null !== (nB = zB[1]) && void 0 !== nB ? nB : zB[2],
-           body: BB.slice(zB.index, null !== (dB = null === (IB = jB[QB + 1]) || void 0 === IB ? void 0 : IB.index) && void 0 !== dB ? dB : BB.length)
+           name: null !== (JB = ZB[1]) && void 0 !== JB ? JB : ZB[2],
+           body: BB.slice(ZB.index, null !== (oB = null === (GB = IB[TB + 1]) || void 0 === GB ? void 0 : GB.index) && void 0 !== oB ? oB : BB.length)
```

#### 454. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8969` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8969) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8969)

```diff
-         if (BB.text.includes(`"${QB}"`)) continue;
+         if (BB.text.includes(`"${TB}"`)) continue;
```

#### 455. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8971-L8972` → after: `L8971-L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8971-L8972) · [Before (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8971-L8972)

```diff
-           IB = dB.length > 0 ? `Did you mean ${dB.map((BB=>`"${BB}"`)).join(" or ")}?` : /Return false/i.test(BB.text) ? `To stop it, return false instead of "${QB}".` : "Check Show Docs for what it can return.";
-         jB.add(`${zB} can't use "${QB}" to stop anything. ${IB}`)
+           GB = oB.length > 0 ? `Did you mean ${oB.map((BB=>`"${BB}"`)).join(" or ")}?` : /Return false/i.test(BB.text) ? `To stop it, return false instead of "${TB}".` : "Check Show Docs for what it can return.";
+         IB.add(`${ZB} can't use "${TB}" to stop anything. ${GB}`)
```

#### 456. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8982` → after: `L8982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8982) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8982)

```diff
-     return !zB.some((BB => BB.startsWith(`${jB} `)))
+     return !ZB.some((BB => BB.startsWith(`${IB} `)))
```

#### 457. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8998` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L8998) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L8998)

```diff
-     dB = null !== (jB = this.namesByLowerCase.get(zB)) && void 0 !== jB ? jB : this.namesByLowerCase.get(nB);
+     oB = null !== (IB = this.namesByLowerCase.get(ZB)) && void 0 !== IB ? IB : this.namesByLowerCase.get(JB);
```

#### 458. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9030` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9030) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9030)

```diff
-       BB && QB.set(BB, (null !== (zB = QB.get(BB)) && void 0 !== zB ? zB : 0) + jB)
+       BB && TB.set(BB, (null !== (ZB = TB.get(BB)) && void 0 !== ZB ? ZB : 0) + IB)
```

#### 459. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9036)

```diff
-   for (const pB of `${BB}\n${jB}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const hB of `${BB}\n${IB}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 460. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9038` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9038) · [Before (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9038)

```diff
-     nB(this.byName.get(null !== (NB = null !== (uB = pB[1]) && void 0 !== uB ? uB : pB[2]) && void 0 !== NB ? NB : pB[3]), pB[1] || pB[2] ? 4 : 2)
+     JB(this.byName.get(null !== (vB = null !== (kB = hB[1]) && void 0 !== kB ? kB : hB[2]) && void 0 !== vB ? vB : hB[3]), hB[1] || hB[2] ? 4 : 2)
```

#### 461. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9040) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9040)

```diff
-   for (const pB of (0, mj.h)(jB, /([A-Za-z_$][\w$]*)\s*\(/g, mj.m)) {
+   for (const hB of (0, gI.f)(IB, /([A-Za-z_$][\w$]*)\s*\(/g, gI.o)) {
```

#### 462. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9049-L9050` → after: `L9049-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9049-L9050) · [Before (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9049-L9050)

```diff
-       const zB = 1 / Math.log2(2 + (null !== (aB = this.wordCounts.get(jB)) && void 0 !== aB ? aB : 0));
-       pB.nameWords.has(jB) ? BB += 3 * zB : pB.textWords.has(jB) && (BB += zB)
+       const ZB = 1 / Math.log2(2 + (null !== (nB = this.wordCounts.get(IB)) && void 0 !== nB ? nB : 0));
+       hB.nameWords.has(IB) ? BB += 3 * ZB : hB.textWords.has(IB) && (BB += ZB)
```

#### 463. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9066` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9066) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9066)

```diff
-   return null !== (jB = null !== (zB = this.byName.get(QB)) && void 0 !== zB ? zB : this.sections.find((BB => BB.name.toLowerCase() === nB))) && void 0 !== jB ? jB : null
+   return null !== (IB = null !== (ZB = this.byName.get(TB)) && void 0 !== ZB ? ZB : this.sections.find((BB => BB.name.toLowerCase() === JB))) && void 0 !== IB ? IB : null
```

#### 464. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9103` → after: `L9103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9103) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9103)

```diff
-         QB = new RegExp(`(^|[^\\w$.])${zB}\\s*\\(`),
+         TB = new RegExp(`(^|[^\\w$.])${ZB}\\s*\\(`),
```

#### 465. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9129` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9129) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9129)

```diff
-         when: `in ${zB[1]}`,
+         when: `in ${ZB[1]}`,
```

#### 466. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9136)

```diff
-     NB = dB && jB ? ` ${dB}` : "",
+     vB = oB && IB ? ` ${oB}` : "",
```

#### 467. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9140-L9141` → after: `L9140-L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9140-L9141) · [Before (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9140-L9141)

```diff
-     const BB = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (UB = null === (aB = nB[0]) || void 0 === aB ? void 0 : aB.trim()) && void 0 !== UB ? UB : ""),
-       jB = null === (pB = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (rB = null === (sB = nB[1]) || void 0 === sB ? void 0 : sB.trim()) && void 0 !== rB ? rB : "")) || void 0 === pB ? void 0 : pB[1],
+     const BB = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (cB = null === (nB = JB[0]) || void 0 === nB ? void 0 : nB.trim()) && void 0 !== cB ? cB : ""),
+       IB = null === (hB = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (zB = null === (FB = JB[1]) || void 0 === FB ? void 0 : FB.trim()) && void 0 !== zB ? zB : "")) || void 0 === hB ? void 0 : hB[1],
```

#### 468. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9144` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9144) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9144)

```diff
-         return /^(a|an|the)\s/i.test(jB) || !/^[a-z]/i.test(jB) ? jB : `${/^[aeiou]/i.test(jB)?"an":"a"} ${jB}`
+         return /^(a|an|the)\s/i.test(IB) || !/^[a-z]/i.test(IB) ? IB : `${/^[aeiou]/i.test(IB)?"an":"a"} ${IB}`
```

#### 469. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9146` → after: `L9146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9146) · [Before (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9146)

```diff
-     return zB && null !== BB && void 0 !== BB && BB[3] ? `api.${uB[1]} needs ${zB}, but it got ${BB[3]}${NB}.` : BB ? `api.${uB[1]} couldn't use its ${JB=Number(BB[1]),1===JB?"first":2===JB?"second":3===JB?"third":4===JB?"fourth":`#${JB}`} argument${NB}.${zB?` It needs ${zB}.`:"" … [truncated]
+     return ZB && null !== BB && void 0 !== BB && BB[3] ? `api.${kB[1]} needs ${ZB}, but it got ${BB[3]}${vB}.` : BB ? `api.${kB[1]} couldn't use its ${NB=Number(BB[1]),1===NB?"first":2===NB?"second":3===NB?"third":4===NB?"fourth":`#${NB}`} argument${vB}.${ZB?` It needs ${ZB}.`:"" … [truncated]
```

#### 470. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9150` → after: `L9150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9150) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9150)

```diff
-   if (mB) return mB[1] ? `${mB[1]} isn't a function${NB}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${NB}. Check each name it calls is spelt exactly right.`;
+   if (gB) return gB[1] ? `${gB[1]} isn't a function${vB}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${vB}. Check each name it calls is spelt exactly right.`;
```

#### 471. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9152)

```diff
-   if (yB) return `${yB[1]} isn't defined${NB}. Check the spelling, or create it before using it.`;
+   if (qB) return `${qB[1]} isn't defined${vB}. Check the spelling, or create it before using it.`;
```

#### 472. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9156-L9157` → after: `L9156-L9157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9156-L9157) · [Before (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9156-L9157)

```diff
-     const BB = null !== (GB = kB[1]) && void 0 !== GB ? GB : kB[3];
-     return `Your code tried to read${BB?` .${BB}`:" something"} from ${kB[2]}${NB}: a value it expected wasn't there.`
+     const BB = null !== (UB = yB[1]) && void 0 !== UB ? UB : yB[3];
+     return `Your code tried to read${BB?` .${BB}`:" something"} from ${yB[2]}${vB}: a value it expected wasn't there.`
```

#### 473. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9159)

```diff
-   return `Your code hit an error${NB}: ${IB.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${vB}: ${GB.replace(/^\w*Error:\s*/,"")}`
```

#### 474. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9245` → after: `L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9245) · [Before (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9245)

```diff
-   return BB.replaceAll(`"${jB}"`, `"${zB}"`).replaceAll(`'${jB}'`, `'${zB}'`)
+   return BB.replaceAll(`"${IB}"`, `"${ZB}"`).replaceAll(`'${IB}'`, `'${ZB}'`)
```

#### 475. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9249` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9249) · [Before (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9249)

```diff
-   const zB = BB => iB().isIdentifier(BB) ? BB.text === jB : BB.elements.some((BB => !iB().isOmittedExpression(BB) && zB(BB.name))),
+   const ZB = BB => OB().isIdentifier(BB) ? BB.text === IB : BB.elements.some((BB => !OB().isOmittedExpression(BB) && ZB(BB.name))),
```

#### 476. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9262` → after: `L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9262) · [Before (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9262)

```diff
-       return (null === BB || void 0 === BB || null === (zB = BB.name) || void 0 === zB ? void 0 : zB.text) === jB || void 0 !== QB && (iB().isNamespaceImport(QB) ? QB.name.text === jB : QB.elements.some((BB => BB.name.text === jB)))
+       return (null === BB || void 0 === BB || null === (ZB = BB.name) || void 0 === ZB ? void 0 : ZB.text) === IB || void 0 !== TB && (OB().isNamespaceImport(TB) ? TB.name.text === IB : TB.elements.some((BB => BB.name.text === IB)))
```

#### 477. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9276` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9276) · [Before (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9276)

```diff
-             text: `${zB}${jB}${zB}`
+             text: `${ZB}${IB}${ZB}`
```

#### 478. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9288` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9288) · [Before (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9288)

```diff
-                 edit: dB(nB, iB().isShorthandPropertyAssignment(BB) ? `${QB}: ${zB}` : QB),
+                 edit: oB(JB, OB().isShorthandPropertyAssignment(BB) ? `${TB}: ${ZB}` : TB),
```

#### 479. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9290` → after: `L9290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9290) · [Before (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9290)

```diff
-                 Cs: NB
+                 XF: vB
```

#### 480. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9303)

```diff
-         return Fz(BB, IB.flatMap((BB => BB.depth !== jB || BB.Cs ? [] : [BB.edit])))
+         return MZ(BB, GB.flatMap((BB => BB.depth !== IB || BB.XF ? [] : [BB.edit])))
```

#### 481. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9328)

```diff
-           jB && iB().isIdentifier(jB) ? (iB().isVariableDeclaration(BB) && BQ(BB.initializer, QB) ? nB : dB).add(jB.text) : iB().isIdentifier(BB) && jQ(BB) && dB.add(BB.text), iB().forEachChild(BB, IB)
+           IB && OB().isIdentifier(IB) ? (OB().isVariableDeclaration(BB) && BT(BB.initializer, TB) ? JB : oB).add(IB.text) : OB().isIdentifier(BB) && IT(BB) && oB.add(BB.text), OB().forEachChild(BB, GB)
```

#### 482. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9337` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9337) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9337)

```diff
-           text: `{ customAttributes: ${jB.getText(QB)} }`
+           text: `{ customAttributes: ${IB.getText(TB)} }`
```

#### 483. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9360)

```diff
-               text: iB().isShorthandPropertyAssignment(UB) ? `${jB}: ${zB}` : zB
+               text: OB().isShorthandPropertyAssignment(cB) ? `${IB}: ${ZB}` : ZB
```

#### 484. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9370-L9371` → after: `L9370-L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9370-L9371) · [Before (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9370-L9371)

```diff
-       const jB = `(["'])${function(BB){return BB.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(zB)}\\1`;
-       return ("comparedBlock" === nB ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${jB}`, `${jB}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${jB}`, `${jB}\\s*[!=]==?`, `\\bcase\\s+${jB}\\s*:`, `\\.includes\\(\\s*${jB}\\s*\\)`]).reduce(((BB, jB) => BB.replace(new RegExp(jB, "g"), … [truncated]
+       const IB = `(["'])${function(BB){return BB.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ZB)}\\1`;
+       return ("comparedBlock" === JB ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${IB}`, `${IB}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${IB}`, `${IB}\\s*[!=]==?`, `\\bcase\\s+${IB}\\s*:`, `\\.includes\\(\\s*${IB}\\s*\\)`]).reduce(((BB, IB) => BB.replace(new RegExp(IB, "g"), … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9383)

```diff
- var wu = zB(41567);
+ var fk = ZB(41488);
```

#### 486. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9443` → after: `L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9443) · [Before (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9443)

```diff
-       return nB ? `${QB} didn't accept your key: it may be wrong or deleted.` : `${QB} didn't accept your key: it may be wrong or deleted. Check it on ${QB}'s website.`;
+       return JB ? `${TB} didn't accept your key: it may be wrong or deleted.` : `${TB} didn't accept your key: it may be wrong or deleted. Check it on ${TB}'s website.`;
```

#### 487. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9445` → after: `L9445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9445) · [Before (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9445)

```diff
-       return nB ? `${QB} stopped your key for now: it has used all it can.` : `${QB} stopped your key for now: it has used all it can. Check it on ${QB}'s website.`;
+       return JB ? `${TB} stopped your key for now: it has used all it can.` : `${TB} stopped your key for now: it has used all it can. Check it on ${TB}'s website.`;
```

#### 488. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9447)

```diff
-       return `Too many requests to ${zB} right now. Wait a minute and try again.`;
+       return `Too many requests to ${ZB} right now. Wait a minute and try again.`;
```

#### 489. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9449)

```diff
-       return `${QB} can't find ${zB}. Pick another model, or press Check for new models in AI settings.`;
+       return `${TB} can't find ${ZB}. Pick another model, or press Check for new models in AI settings.`;
```

#### 490. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9451` → after: `L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9451) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9451)

```diff
-       return `${zB} took too long to answer.`;
+       return `${ZB} took too long to answer.`;
```

#### 491. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9453)

```diff
-       return nB ? `Couldn't reach ${QB}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${QB}. Check your internet and your key.`;
+       return JB ? `Couldn't reach ${TB}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${TB}. Check your internet and your key.`;
```

#### 492. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9455)

```diff
-       return `${QB} doesn't work from where you are.`;
+       return `${TB} doesn't work from where you are.`;
```

#### 493. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9459)

```diff
-       return `${zB} can't be used right now. Try again in a minute.`
+       return `${ZB} can't be used right now. Try again in a minute.`
```

#### 494. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9477` → after: `L9477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9477) · [Before (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9477)

```diff
-       ...wu.g,
+       ...fk.c,
```

#### 495. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9553` → after: `L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9553) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9553)

```diff
-       }, jB] = await Promise.all([Promise.resolve().then((() => zB(1381))), this.popup.notice()]), QB = BB.showPromptPopup({
+       }, IB] = await Promise.all([Promise.resolve().then((() => ZB(1403))), this.popup.notice()]), TB = BB.showPromptPopup({
```

#### 496. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9641` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9641) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9641)

```diff
-       return "" === BB ? "no key needed" : BB.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === jB ? `key \u2026${BB.slice(-4)}` : `${(null!==(zB=null===(QB=/^[a-zA-Z]+-/.exec(BB))||void 0===QB?void 0:QB[0])&&void 0!==zB?zB:BB.slice(0,4)).slice(0,6)}\u2026${BB.slice(-4)}`
+       return "" === BB ? "no key needed" : BB.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === IB ? `key \u2026${BB.slice(-4)}` : `${(null!==(ZB=null===(TB=/^[a-zA-Z]+-/.exec(BB))||void 0===TB?void 0:TB[0])&&void 0!==ZB?ZB:BB.slice(0,4)).slice(0,6)}\u2026${BB.slice(-4)}`
```

#### 497. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9663` → after: `L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9663) · [Before (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9663)

```diff
-         "aria-label": `Edit ${dB} key`,
+         "aria-label": `Edit ${oB} key`,
```

#### 498. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9668)

```diff
-         "aria-label": `Rename ${dB} key`,
+         "aria-label": `Rename ${oB} key`,
```

#### 499. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9689)

```diff
-     kB = `${rB}-${null!==(jB=null===aB||void 0===aB?void 0:aB.keyId)&&void 0!==jB?jB:"botxd"}-${null!==(zB=null===aB||void 0===aB?void 0:aB.modelId)&&void 0!==zB?zB:"botxd"}`.replace(/[^\w-]/g, "_"),
+     yB = `${zB}-${null!==(IB=null===nB||void 0===nB?void 0:nB.keyId)&&void 0!==IB?IB:"botxd"}-${null!==(ZB=null===nB||void 0===nB?void 0:nB.modelId)&&void 0!==ZB?ZB:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 500. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9693-L9695` → after: `L9693-L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9693-L9695) · [Before (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9693-L9695)

```diff
-     "data-key-id": null !== (nB = null === aB || void 0 === aB ? void 0 : aB.keyId) && void 0 !== nB ? nB : "botxd",
-     "data-model-id": null !== (NB = null === aB || void 0 === aB ? void 0 : aB.modelId) && void 0 !== NB ? NB : "botxd",
-     title: null !== mB && void 0 !== mB ? mB : void 0,
+     "data-key-id": null !== (JB = null === nB || void 0 === nB ? void 0 : nB.keyId) && void 0 !== JB ? JB : "botxd",
+     "data-model-id": null !== (vB = null === nB || void 0 === nB ? void 0 : nB.modelId) && void 0 !== vB ? vB : "botxd",
+     title: null !== gB && void 0 !== gB ? gB : void 0,
```

#### 501. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9703` → after: `L9703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9703) · [Before (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9703)

```diff
-       "aria-describedby": UB ? kB : void 0,
+       "aria-describedby": cB ? yB : void 0,
```

#### 502. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9730` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9730) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9730)

```diff
-     ZD: NB,
+     nH: vB,
```

#### 503. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9753` → after: `L9753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9753) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9753)

```diff
-           at: null !== (zB = BB.usedAt) && void 0 !== zB ? zB : 0,
+           at: null !== (ZB = BB.usedAt) && void 0 !== ZB ? ZB : 0,
```

#### 504. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9776` → after: `L9776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9776) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9776)

```diff
-     oB = `${jB}-model`,
+     pB = `${IB}-model`,
```

#### 505. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9789)

```diff
-       }, null !== (nB = null === QB || void 0 === QB ? void 0 : QB.modelId) && void 0 !== nB ? nB : "botxd")
+       }, null !== (JB = null === TB || void 0 === TB ? void 0 : TB.modelId) && void 0 !== JB ? JB : "botxd")
```

#### 506. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9797` → after: `L9797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9797) · [Before (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9797)

```diff
-       hint: null !== yB && void 0 !== yB ? yB : `Bloxd's better AI. ${mB.status?PN(mB.status):""}`.trim(),
+       hint: null !== qB && void 0 !== qB ? qB : `Bloxd's better AI. ${gB.status?mv(gB.status):""}`.trim(),
```

#### 507. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9803` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9803) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9803)

```diff
-         oN(null !== (BB = null === (jB = mB.status) || void 0 === jB ? void 0 : jB.provider) && void 0 !== BB ? BB : "ovh") && DN.zs()
+         Ov(null !== (BB = null === (IB = gB.status) || void 0 === IB ? void 0 : IB.provider) && void 0 !== BB ? BB : "ovh") && iv.TF()
```

#### 508. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9808)

```diff
-           if (oN(null !== (jB = null === BB || void 0 === BB ? void 0 : BB.provider) && void 0 !== jB ? jB : "ovh") || await aU.ask()) return DN.zs(), !0;
+           if (Ov(null !== (IB = null === BB || void 0 === BB ? void 0 : BB.provider) && void 0 !== IB ? IB : "ovh") || await kc.ask()) return iv.TF(), !0;
```

#### 509. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9819-L9820` → after: `L9819-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9819-L9820) · [Before (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9819-L9820)

```diff
-         DB = oB ? null !== (jB = BB.models.find((jB => jB.id === BB.usedModelId))) && void 0 !== jB ? jB : rN(BB.models) : void 0,
-         FB = null !== (zB = null === (QB = tB[BB.id]) || void 0 === QB ? void 0 : QB.trim().toLowerCase()) && void 0 !== zB ? zB : "",
+         HB = pB ? null !== (IB = BB.models.find((IB => IB.id === BB.usedModelId))) && void 0 !== IB ? IB : cv(BB.models) : void 0,
+         MB = null !== (ZB = null === (TB = CB[BB.id]) || void 0 === TB ? void 0 : TB.trim().toLowerCase()) && void 0 !== ZB ? ZB : "",
```

#### 510. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9833` → after: `L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9833) · [Before (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9833)

```diff
-             keyName: null !== (sB = BB.name) && void 0 !== sB ? sB : "",
+             keyName: null !== (FB = BB.name) && void 0 !== FB ? FB : "",
```

#### 511. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9849` → after: `L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9849) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9849)

```diff
-             "aria-label": `Check ${yB} for new models`,
+             "aria-label": `Check ${qB} for new models`,
```

#### 512. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9857` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9857) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9857)

```diff
-             "aria-label": `Remove ${yB} key`,
+             "aria-label": `Remove ${qB} key`,
```

#### 513. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9865` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9865) · [Before (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9865)

```diff
-             "aria-label": `Remove ${yB} key?`,
+             "aria-label": `Remove ${qB} key?`,
```

#### 514. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9871` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9871) · [Before (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9871)

```diff
-               "aria-label": `Yes, remove ${yB} key`,
+               "aria-label": `Yes, remove ${qB} key`,
```

#### 515. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9878)

```diff
-               "aria-label": `No, keep ${yB} key`,
+               "aria-label": `No, keep ${qB} key`,
```

#### 516. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9892` → after: `L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9892) · [Before (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9892)

```diff
-           "aria-label": `Find a model from ${yB}`,
+           "aria-label": `Find a model from ${qB}`,
```

#### 517. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9894` → after: `L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9894) · [Before (L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9894)

```diff
-           value: null !== (mB = tB[BB.id]) && void 0 !== mB ? mB : "",
+           value: null !== (gB = CB[BB.id]) && void 0 !== gB ? gB : "",
```

#### 518. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9910` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9910) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9910)

```diff
-           "aria-label": `Show all ${yB} models`,
+           "aria-label": `Show all ${qB} models`,
```

#### 519. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9934)

```diff
-     } = await zB.e(125).then((() => zB(6474)));
+     } = await ZB.e(125).then((() => ZB(6685)));
```

#### 520. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9958` → after: `L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L9958) · [Before (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L9958)

```diff
-         children: jB ? nB : dB
+         children: IB ? JB : oB
```

#### 521. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10078` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10078) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10078)

```diff
-           children: [1 === NB.length ? "Forget your key" : `Forget all ${NB.length} keys`, " in this browser?", (0, IB.jsx)("button", {
+           children: [1 === vB.length ? "Forget your key" : `Forget all ${vB.length} keys`, " in this browser?", (0, GB.jsx)("button", {
```

#### 522. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10142` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10142) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10142)

```diff
-                 text: `${jB} listed no models, so your models stay as they were.`
+                 text: `${IB} listed no models, so your models stay as they were.`
```

#### 523. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10148` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10148) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10148)

```diff
-                 text: `${jB}'s models are up to date.`
+                 text: `${IB}'s models are up to date.`
```

#### 524. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10162` → after: `L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10162) · [Before (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10162)

```diff
-         ZD: BB => {
+         nH: BB => {
```

#### 525. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10217)

```diff
-         null === (zB = null !== QB && void 0 !== QB ? QB : NB.current) || void 0 === zB || zB.scrollIntoView({
+         null === (ZB = null !== TB && void 0 !== TB ? TB : vB.current) || void 0 === ZB || ZB.scrollIntoView({
```

#### 526. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10237)

```diff
-         children: uB ? `An API key works like a password for ${uB.shortName}'s AI (it isn't your ${uB.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: kB ? `An API key works like a password for ${kB.shortName}'s AI (it isn't your ${kB.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 527. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10239` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10239) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10239)

```diff
-         children: ["You make it on ", uB ? `${uB.shortName}'s website` : (0, IB.jsx)(kU, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", kB ? `${kB.shortName}'s website` : (0, GB.jsx)(gc, {}), ", and see how much you've used or delete it there."]
```

#### 528. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10241` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10241) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10241)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (jB = null === uB || void 0 === uB ? void 0 : uB.shortName) && void 0 !== jB ? jB : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (IB = null === kB || void 0 === kB ? void 0 : kB.shortName) && void 0 !== IB ? IB : "that company", ", never to Bloxd."]
```

#### 529. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10300` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10300) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10300)

```diff
-   } = gN(), [rB, sB] = (0, QB.useState)(null !== (jB = null === uB || void 0 === uB ? void 0 : uB.provider) && void 0 !== jB ? jB : null), [JB, mB] = (0, QB.useState)(!!uB), [yB, kB] = (0, QB.useState)(""), GB = null !== (zB = null === uB || void 0 === uB ? void 0 : uB.key) && vo … [truncated]
+   } = yv(), [zB, FB] = (0, TB.useState)(null !== (IB = null === kB || void 0 === kB ? void 0 : kB.provider) && void 0 !== IB ? IB : null), [NB, gB] = (0, TB.useState)(!!kB), [qB, yB] = (0, TB.useState)(""), UB = null !== (ZB = null === kB || void 0 === kB ? void 0 : kB.key) && vo … [truncated]
```

#### 530. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10302` → after: `L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10302) · [Before (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10302)

```diff
-     return BB === (null === uB || void 0 === uB ? void 0 : uB.provider) && ("custom" !== BB || (null !== (jB = TI(tB)) && void 0 !== jB ? jB : "") === (null !== (zB = uB.baseUrl) && void 0 !== zB ? zB : ""))
+     return BB === (null === kB || void 0 === kB ? void 0 : kB.provider) && ("custom" !== BB || (null !== (IB = rG(CB)) && void 0 !== IB ? IB : "") === (null !== (ZB = kB.baseUrl) && void 0 !== ZB ? ZB : ""))
```

#### 531. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10305-L10306` → after: `L10305-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10305-L10306) · [Before (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10305-L10306)

```diff
-     return "" === jB && "" !== GB && MB(BB) ? GB : jB
-   }, [qB, fB] = (0, QB.useState)(""), [oB, HB] = (0, QB.useState)(null !== (dB = null === uB || void 0 === uB ? void 0 : uB.name) && void 0 !== dB ? dB : ""), [DB, FB] = (0, QB.useState)(!1), [YB, VB] = (0, QB.useState)(null), [hB, XB] = (0, QB.useState)(""), [ZB, AB] = (0, QB.us … [truncated]
+     return "" === IB && "" !== UB && sB(BB) ? UB : IB
+   }, [YB, iB] = (0, TB.useState)(""), [pB, aB] = (0, TB.useState)(null !== (oB = null === kB || void 0 === kB ? void 0 : kB.name) && void 0 !== oB ? oB : ""), [HB, MB] = (0, TB.useState)(!1), [jB, PB] = (0, TB.useState)(null), [RB, rB] = (0, TB.useState)(""), [mB, XB] = (0, TB.us … [truncated]
```

#### 532. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10344)

```diff
-         const zB = null !== rB && void 0 !== rB ? rB : AI(jB),
+         const ZB = null !== zB && void 0 !== zB ? zB : RG(IB),
```

#### 533. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10359-L10360` → after: `L10359-L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10359-L10360) · [Before (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10359-L10360)

```diff
-             baseUrl: null !== nB && void 0 !== nB ? nB : void 0,
-             modelName: DB ? qB : void 0
+             baseUrl: null !== JB && void 0 !== JB ? JB : void 0,
+             modelName: HB ? YB : void 0
```

#### 534. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10366` → after: `L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10366) · [Before (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10366)

```diff
-           XB(null !== (IB = null === (NB = null !== UB && void 0 !== UB ? UB : rN(BB)) || void 0 === NB ? void 0 : NB.id) && void 0 !== IB ? IB : "")
+           rB(null !== (GB = null === (vB = null !== cB && void 0 !== cB ? cB : cv(BB)) || void 0 === vB ? void 0 : vB.id) && void 0 !== GB ? GB : "")
```

#### 535. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10372-L10373` → after: `L10372-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10372-L10373) · [Before (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10372-L10373)

```diff
-           const IB = "badKey" !== nB || JB ? "" : ` If it isn't from ${VI[zB].shortName}, pick the company it's from.`;
-           PB(`${lI(nB,zB)}${IB}`)
+           const GB = "badKey" !== JB || NB ? "" : ` If it isn't from ${HG[ZB].shortName}, pick the company it's from.`;
+           eB(`${eG(JB,ZB)}${GB}`)
```

#### 536. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10383)

```diff
-         value: null !== rB && void 0 !== rB ? rB : "",
+         value: null !== zB && void 0 !== zB ? zB : "",
```

#### 537. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10411` → after: `L10411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10411) · [Before (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10411)

```diff
-       }), (!uB || tB !== (null !== (NB = uB.baseUrl) && void 0 !== NB ? NB : "")) && (0, IB.jsx)(LU, {})]
+       }), (!kB || CB !== (null !== (vB = kB.baseUrl) && void 0 !== vB ? vB : "")) && (0, GB.jsx)(yc, {})]
```

#### 538. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10483` → after: `L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10483) · [Before (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10483)

```diff
-           keyId: null !== rB && void 0 !== rB ? rB : "",
+           keyId: null !== zB && void 0 !== zB ? zB : "",
```

#### 539. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10507` → after: `L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10507) · [Before (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10507)

```diff
-         placeholder: rB && "custom" !== rB ? `Like My ${VI[rB].shortName}` : "Like Home server",
+         placeholder: zB && "custom" !== zB ? `Like My ${HG[zB].shortName}` : "Like Home server",
```

#### 540. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10533` → after: `L10533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10533) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10533)

```diff
-         children: ZB ? lB ? "Testing the connection\u2026" : "Testing your key\u2026" : cB ? `Save and use ${cB.name}` : lB ? "Test connection" : "Test key"
+         children: mB ? lB ? "Testing the connection\u2026" : "Testing your key\u2026" : EB ? `Save and use ${EB.name}` : lB ? "Test connection" : "Test key"
```

#### 541. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10538-L10540` → after: `L10538-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10538-L10540) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10538-L10540)

```diff
- var SU = zB(1240),
-   MU = zB(36955),
-   EU = zB(36946);
+ var dc = ZB(1248),
+   Cc = ZB(36916),
+   Qc = ZB(36909);
```

#### 542. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10551-L10552` → after: `L10551-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10551-L10552) · [Before (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10551-L10552)

```diff
-   } = (0, SU.D)();
-   return (0, IB.jsx)(EU.h, {
+   } = (0, dc.G)();
+   return (0, GB.jsx)(Qc.f, {
```

#### 543. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10555` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10555) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10555)

```diff
-     text: dB(`codeEditorAiTutorial:${jB}`),
+     text: oB(`codeEditorAiTutorial:${IB}`),
```

#### 544. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10603` → after: `L10603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10603) · [Before (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10603)

```diff
-   return BB.model.name.toLowerCase().startsWith(jB.toLowerCase()) ? BB.model.name : `${jB} \xb7 ${BB.model.name}`
+   return BB.model.name.toLowerCase().startsWith(IB.toLowerCase()) ? BB.model.name : `${IB} \xb7 ${BB.model.name}`
```

#### 545. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10653` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10653) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10653)

```diff
-     LB = GB ? "Bot.xd (free) \xb7 once" : UB ? oU(UB) : pB ? EN : "Bot.xd (free)";
+     WB = UB ? "Bot.xd (free) \xb7 once" : cB ? Yc(cB) : hB ? Cv : "Bot.xd (free)";
```

#### 546. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10665` → after: `L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10665) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10665)

```diff
-       "aria-label": `AI model: ${LB}`,
+       "aria-label": `AI model: ${WB}`,
```

#### 547. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10683)

```diff
-         title: `Allow AI to make edits to my code is ${zB?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${ZB?"on":"off"}, in AI settings`,
```

#### 548. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10751` → after: `L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10751) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10751)

```diff
-       zB(null !== (jB = BB.error) && void 0 !== jB ? jB : new Error("IndexedDB transaction failed"))
+       ZB(null !== (IB = BB.error) && void 0 !== IB ? IB : new Error("IndexedDB transaction failed"))
```

#### 549. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10754)

```diff
-       zB(null !== (jB = BB.error) && void 0 !== jB ? jB : new Error("IndexedDB transaction aborted"))
+       ZB(null !== (IB = BB.error) && void 0 !== IB ? IB : new Error("IndexedDB transaction aborted"))
```

#### 550. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10758` → after: `L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10758) · [Before (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10758)

```diff
- var YU = zB(36986);
+ var Hc = ZB(36943);
```

#### 551. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10789` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10789) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10789)

```diff
-           if (jB) return BB.includes(`"${jB}"`) ? `"${jB}"` : BB.includes(jB) ? jB : void 0
+           if (IB) return BB.includes(`"${IB}"`) ? `"${IB}"` : BB.includes(IB) ? IB : void 0
```

#### 552. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10856` → after: `L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10856) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10856)

```diff
-   return nB(BB) === nB(jB) ? QB : nB(BB) === nB(jB - 864e5) ? `yesterday ${QB}` : function(BB, jB) {
+   return JB(BB) === JB(IB) ? TB : JB(BB) === JB(IB - 864e5) ? `yesterday ${TB}` : function(BB, IB) {
```

#### 553. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10859)

```diff
-     if (zB < 60) return `${zB} min ago`;
+     if (ZB < 60) return `${ZB} min ago`;
```

#### 554. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10861` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10861) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10861)

```diff
-     if (QB < 24) return `${QB} h ago`;
+     if (TB < 24) return `${TB} h ago`;
```

#### 555. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10863` → after: `L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10863) · [Before (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10863)

```diff
-     return 1 === nB ? "1 day ago" : `${nB} days ago`
+     return 1 === JB ? "1 day ago" : `${JB} days ago`
```

#### 556. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10870-L10871` → after: `L10870-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10870-L10871) · [Before (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10870-L10871)

```diff
-     const dB = null !== (QB = BB.files[zB]) && void 0 !== QB ? QB : "";
-     return (null !== (nB = jB[zB]) && void 0 !== nB ? nB : "") === dB ? [] : [{
+     const oB = null !== (TB = BB.files[ZB]) && void 0 !== TB ? TB : "";
+     return (null !== (JB = IB[ZB]) && void 0 !== JB ? JB : "") === oB ? [] : [{
```

#### 557. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10883)

```diff
-   return `${(QB>jB/2?zB.slice(0,QB):zB).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(TB>IB/2?ZB.slice(0,TB):ZB).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 558. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10894` → after: `L10894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10894) · [Before (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10894)

```diff
-   const [UB, aB] = (0, QB.useState)(!1), [pB, rB] = (0, QB.useState)(!1), sB = jB.did ? `Before: ${jB.did}` : jB.label, JB = PU(sB), mB = jB.did && jB.label.startsWith('Before "') ? jB.label.slice(7) : null, yB = null === mB ? null : PU(mB, 50), kB = null !== yB && null !== mB && … [truncated]
+   const [cB, nB] = (0, TB.useState)(!1), [hB, zB] = (0, TB.useState)(!1), FB = IB.did ? `Before: ${IB.did}` : IB.label, NB = Xc(FB), gB = IB.did && IB.label.startsWith('Before "') ? IB.label.slice(7) : null, qB = null === gB ? null : Xc(gB, 50), yB = null !== qB && null !== gB && … [truncated]
```

#### 559. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10919-L10920` → after: `L10919-L10920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10919-L10920) · [Before (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10919-L10920)

```diff
-     const dB = null !== (QB = jB.files[BB]) && void 0 !== QB ? QB : "",
-       IB = null !== (nB = zB[BB]) && void 0 !== nB ? nB : "";
+     const oB = null !== (TB = IB.files[BB]) && void 0 !== TB ? TB : "",
+       GB = null !== (JB = ZB[BB]) && void 0 !== JB ? JB : "";
```

#### 560. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10934` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10934) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10934)

```diff
-         children: [pB || !JB ? sB : JB, (JB || kB) && (0, IB.jsx)("button", {
+         children: [hB || !NB ? FB : NB, (NB || yB) && (0, GB.jsx)("button", {
```

#### 561. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10946` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L10946) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L10946)

```diff
-           children: ["You asked: ", pB || !kB ? mB : kB]
+           children: ["You asked: ", hB || !yB ? gB : yB]
```

#### 562. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11027` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11027) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11027)

```diff
-     xG: nB,
+     cW: JB,
```

#### 563. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11190` → after: `L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11190) · [Before (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11190)

```diff
-       }, `${jB}:${BB}`)))
+       }, `${IB}:${BB}`)))
```

#### 564. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11193` → after: `L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11193) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11193)

```diff
-       children: ["Apply ", zB - QB > 1 ? `steps ${QB+1} to ${zB}` : `step ${zB}`, " to your code and try it, then build step ", zB + 1, "."]
+       children: ["Apply ", ZB - TB > 1 ? `steps ${TB+1} to ${ZB}` : `step ${ZB}`, " to your code and try it, then build step ", ZB + 1, "."]
```

#### 565. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11195` → after: `L11195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11195) · [Before (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11195)

```diff
-       ...wu.g,
+       ...fk.c,
```

#### 566. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11200` → after: `L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11200) · [Before (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11200)

```diff
-       children: QB < zB ? `Build step ${zB+1} anyway` : `Build step ${zB+1}`
+       children: TB < ZB ? `Build step ${ZB+1} anyway` : `Build step ${ZB+1}`
```

#### 567. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11212` → after: `L11212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11212) · [Before (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11212)

```diff
-   return `${BB}\n\nYou asked me: "${jB}" ${null===zB?"I don't mind: choose what works best.":`My answer: ${zB.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${BB}\n\nYou asked me: "${IB}" ${null===ZB?"I don't mind: choose what works best.":`My answer: ${ZB.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 568. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11231-L11232` → after: `L11231-L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11231-L11232) · [Before (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11231-L11232)

```diff
-           ...wu.g,
-           key: `${jB}:${BB}`,
+           ...fk.c,
+           key: `${IB}:${BB}`,
```

#### 569. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11265` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11265) · [Before (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11265)

```diff
-         ...wu.g,
+         ...fk.c,
```

#### 570. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11438` → after: `L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11438) · [Before (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11438)

```diff
-       tB = null !== LB && void 0 !== LB ? LB : nB;
+       CB = null !== WB && void 0 !== WB ? WB : JB;
```

#### 571. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11442-L11444` → after: `L11442-L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11442-L11444) · [Before (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11442-L11444)

```diff
-       raw: null !== (uB = null === gB || void 0 === gB ? void 0 : gB.text) && void 0 !== uB ? uB : "",
-       start: null !== (UB = null === gB || void 0 === gB ? void 0 : gB.start) && void 0 !== UB ? UB : 0,
-       end: null !== (aB = null === gB || void 0 === gB ? void 0 : gB.end) && void 0 !== aB ? aB : 0,
+       raw: null !== (kB = null === dB || void 0 === dB ? void 0 : dB.text) && void 0 !== kB ? kB : "",
+       start: null !== (cB = null === dB || void 0 === dB ? void 0 : dB.start) && void 0 !== cB ? cB : 0,
+       end: null !== (nB = null === dB || void 0 === dB ? void 0 : dB.end) && void 0 !== nB ? nB : 0,
```

#### 572. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11487)

```diff
-     dB = zB, nB = `${IB=zB.includes(BB)&&!zB.includes(QB)?QB:BB}${dB.slice(0,200).replace(/\\/g,"\\\\").replace('"'===IB?/"/g:/'/g,`\\${IB}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     oB = ZB, JB = `${GB=ZB.includes(BB)&&!ZB.includes(TB)?TB:BB}${oB.slice(0,200).replace(/\\/g,"\\\\").replace('"'===GB?/"/g:/'/g,`\\${GB}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 573. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11496` → after: `L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11496) · [Before (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11496)

```diff
-     const zB = Math.min(3, (null !== (jB = String(BB).split(".")[1]) && void 0 !== jB ? jB : "").length);
+     const ZB = Math.min(3, (null !== (IB = String(BB).split(".")[1]) && void 0 !== IB ? IB : "").length);
```

#### 574. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11516)

```diff
-   if (0 === BB.length) return `Before ${jB} settings`;
+   if (0 === BB.length) return `Before ${IB} settings`;
```

#### 575. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11519-L11520` → after: `L11519-L11520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11519-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11519-L11520) · [Before (L11519-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11519-L11520)

```diff
-     nB = BB.length > zB ? ` and ${BB.length-zB} more` : "";
-   return `Before ${jB} settings: ${QB.join(", ")}${nB}`
+     JB = BB.length > ZB ? ` and ${BB.length-ZB} more` : "";
+   return `Before ${IB} settings: ${TB.join(", ")}${JB}`
```

#### 576. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11528` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11528) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11528)

```diff
-     jB.add(null !== (zB = null !== (QB = nB[1]) && void 0 !== QB ? QB : nB[2]) && void 0 !== zB ? zB : nB[3])
+     IB.add(null !== (ZB = null !== (TB = JB[1]) && void 0 !== TB ? TB : JB[2]) && void 0 !== ZB ? ZB : JB[3])
```

#### 577. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11571` → after: `L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11571) · [Before (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11571)

```diff
-     const dB = null !== (nB = Na.get(jB)) && void 0 !== nB ? nB : [];
+     const oB = null !== (JB = Gn.get(IB)) && void 0 !== JB ? JB : [];
```

#### 578. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11623` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11623) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11623)

```diff
-   return null !== (jB = ra.get(BB)) && void 0 !== jB ? jB : "CONFIG" === BB ? "Settings" : void 0
+   return null !== (IB = hn.get(BB)) && void 0 !== IB ? IB : "CONFIG" === BB ? "Settings" : void 0
```

#### 579. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11649)

```diff
-         name: void 0 === dB ? null : null !== (nB = ga(dB)) && void 0 !== nB ? nB : null,
+         name: void 0 === oB ? null : null !== (JB = Wn(oB)) && void 0 !== JB ? JB : null,
```

#### 580. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11701` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11701) · [Before (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11701)

```diff
-   return NB.every((BB => ya(BB.removed) && ya(BB.added))) ? NB : [BB]
+   return vB.every((BB => gn(BB.removed) && gn(BB.added))) ? vB : [BB]
```

#### 581. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11753` → after: `L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11753) · [Before (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11753)

```diff
-   return QB ? null !== (jB = null !== (zB = QB[1]) && void 0 !== zB ? zB : QB[2]) && void 0 !== jB ? jB : QB[3] : void 0
+   return TB ? null !== (IB = null !== (ZB = TB[1]) && void 0 !== ZB ? ZB : TB[2]) && void 0 !== IB ? IB : TB[3] : void 0
```

#### 582. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11781` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11781) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11781)

```diff
-   return BB.length <= 1 ? null !== (jB = BB[0]) && void 0 !== jB ? jB : "" : `${BB.slice(0,-1).join(", ")} and ${BB[BB.length-1]}`
+   return BB.length <= 1 ? null !== (IB = BB[0]) && void 0 !== IB ? IB : "" : `${BB.slice(0,-1).join(", ")} and ${BB[BB.length-1]}`
```

#### 583. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11796` → after: `L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11796) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11796)

```diff
-     return (0, mj.h)(jB, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, mj.m).map((BB => BB[0])).filter((BB => !fa.has(BB)))
+     return (0, gI.f)(IB, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, gI.o).map((BB => BB[0])).filter((BB => !Yn.has(BB)))
```

#### 584. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11802` → after: `L11802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11802) · [Before (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11802)

```diff
-   const QB = (null !== (zB = BB.parts) && void 0 !== zB ? zB : []).map((BB => {
+   const TB = (null !== (ZB = BB.parts) && void 0 !== ZB ? ZB : []).map((BB => {
```

#### 585. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11850)

```diff
-               return zB ? [null !== (jB = zB[1]) && void 0 !== jB ? jB : zB[2]] : []
+               return ZB ? [null !== (IB = ZB[1]) && void 0 !== IB ? IB : ZB[2]] : []
```

#### 586. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11854` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11854) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11854)

```diff
-               return pB.has(BB) ? `"${jB}"` : jB
+               return hB.has(BB) ? `"${IB}"` : IB
```

#### 587. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11862)

```diff
-                   return null !== (jB = uB.get(BB)) && void 0 !== jB ? jB : BB
+                   return null !== (IB = kB.get(BB)) && void 0 !== IB ? IB : BB
```

#### 588. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11865` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11865) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11865)

```diff
-               jB = [dB.length > 0 ? `${BB(dB)} \u2014 changed` : "", IB.length > 0 ? `${BB(IB)} \u2014 added` : "", NB.length > 0 ? `${BB(NB)} \u2014 taken out` : ""].filter(Boolean),
+               IB = [oB.length > 0 ? `${BB(oB)} \u2014 changed` : "", GB.length > 0 ? `${BB(GB)} \u2014 added` : "", vB.length > 0 ? `${BB(vB)} \u2014 taken out` : ""].filter(Boolean),
```

#### 589. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11876` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11876) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11876)

```diff
-           const JB = [dB.length > 0 ? `changes ${Ea(dB.map(rB))}` : "", IB.length > 0 ? `adds ${Ea(IB.map(rB))}` : "", NB.length > 0 ? `takes out ${Ea(NB.map(rB))}` : ""].filter(Boolean);
+           const NB = [oB.length > 0 ? `changes ${sn(oB.map(zB))}` : "", GB.length > 0 ? `adds ${sn(GB.map(zB))}` : "", vB.length > 0 ? `takes out ${sn(vB.map(zB))}` : ""].filter(Boolean);
```

#### 590. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11892)

```diff
-                 named: `${zB} \u2014 changed`,
+                 named: `${ZB} \u2014 changed`,
```

#### 591. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11898)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(BB)?`"${ia(jB)}"`:ia(jB)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(BB)?`"${wn(IB)}"`:wn(IB)}`,
```

#### 592. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11907)

```diff
-             named: 0 === BB.added.length ? `Takes out lines from line ${zB}` : `Changes line ${zB}`,
+             named: 0 === BB.added.length ? `Takes out lines from line ${ZB}` : `Changes line ${ZB}`,
```

#### 593. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11932` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11932) · [Before (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11932)

```diff
-           return QB[jB] && null !== (zB = BB.uses) && void 0 !== zB ? zB : []
+           return TB[IB] && null !== (ZB = BB.uses) && void 0 !== ZB ? ZB : []
```

#### 594. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11936)

```diff
-           return QB[jB] || (null !== (zB = BB.uses) && void 0 !== zB ? zB : []).some((BB => nB.has(BB)))
+           return TB[IB] || (null !== (ZB = BB.uses) && void 0 !== ZB ? ZB : []).some((BB => JB.has(BB)))
```

#### 595. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11943` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11943) · [Before (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11943)

```diff
-           const QB = (null !== (NB = BB.takesOut) && void 0 !== NB ? NB : []).filter((BB => ("CONFIG" === BB || Na.has(BB)) && !IB.has(BB)));
+           const TB = (null !== (vB = BB.takesOut) && void 0 !== vB ? vB : []).filter((BB => ("CONFIG" === BB || Gn.has(BB)) && !GB.has(BB)));
```

#### 596. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11947` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11947) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11947)

```diff
-           }, jB, zB) || void 0 !== BB.why && aa(zB, Ua(BB.why)) || (null !== (uB = BB.removedUses) && void 0 !== uB ? uB : []).some((BB => nB.has(BB))) ? void 0 : "takesOut"
+           }, IB, ZB) || void 0 !== BB.why && cn(ZB, kn(BB.why)) || (null !== (kB = BB.removedUses) && void 0 !== kB ? kB : []).some((BB => JB.has(BB))) ? void 0 : "takesOut"
```

#### 597. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11966` → after: `L11966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11966) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11966)

```diff
-         aB = !nB && UB ? UB : zB,
+         nB = !JB && cB ? cB : ZB,
```

#### 598. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11983` → after: `L11983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11983) · [Before (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11983)

```diff
-       return `${null!==(jB=BB.also)&&void 0!==jB?jB:""}|${BB.label}|${null!==(zB=BB.detail)&&void 0!==zB?zB:""}`
+       return `${null!==(IB=BB.also)&&void 0!==IB?IB:""}|${BB.label}|${null!==(ZB=BB.detail)&&void 0!==ZB?ZB:""}`
```

#### 599. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L11992)

```diff
-       label: `${zB.label} (line ${jB})`
+       label: `${ZB.label} (line ${IB})`
```

#### 600. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12014` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12014) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12014)

```diff
-   return !/^['\u2018]/.test(BB[0]) || !(0, mj.e)(BB, "\\w\u2019'")
+   return !/^['\u2018]/.test(BB[0]) || !(0, gI.b)(BB, "\\w\u2019'")
```

#### 601. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12020` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12020) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12020)

```diff
-       return (0, mj.h)(BB, ha, Xa).map((BB => [BB.index, BB.index + BB[0].length]))
+       return (0, gI.f)(BB, Rn, rn).map((BB => [BB.index, BB.index + BB[0].length]))
```

#### 602. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12027` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12027) · [Before (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12027)

```diff
-   for (const dB of BB.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${Fa})\\b`, "g"))) {
+   for (const oB of BB.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${Mn})\\b`, "g"))) {
```

#### 603. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12037` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12037) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12037)

```diff
-         words: `${dB[2]?"It also":"This"} ${Da[dB[3]]}`
+         words: `${oB[2]?"It also":"This"} ${Hn[oB[3]]}`
```

#### 604. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12039` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12039) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12039)

```diff
-       for (const BB of uB.matchAll(new RegExp(`\\b(and|then|also) (${Fa})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) zB(nB + BB.index) || QB.push({
+       for (const BB of kB.matchAll(new RegExp(`\\b(and|then|also) (${Mn})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ZB(JB + BB.index) || TB.push({
```

#### 605. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12042` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12042) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12042)

```diff
-         words: `${BB[1]} ${Da[BB[2]]}`
+         words: `${BB[1]} ${Hn[BB[2]]}`
```

#### 606. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12055` → after: `L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12055) · [Before (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12055)

```diff
-       words: `will ${nB=dB[1],"has"===nB?"have":nB.endsWith("ies")?`${nB.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(nB)?nB.slice(0,-2):nB.slice(0,-1)}`
+       words: `will ${JB=oB[1],"has"===JB?"have":JB.endsWith("ies")?`${JB.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(JB)?JB.slice(0,-2):JB.slice(0,-1)}`
```

#### 607. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12093` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12093) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12093)

```diff
-   }, kB = `WorldCodeAiSetting-${jB}-${zB.key}`;
+   }, yB = `WorldCodeAiSetting-${IB}-${ZB.key}`;
```

#### 608. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12121` → after: `L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12121) · [Before (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12121)

```diff
-         "aria-label": `Less ${pB}`,
+         "aria-label": `Less ${hB}`,
```

#### 609. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12133)

```diff
-         value: null !== NB && void 0 !== NB ? NB : String(zB.value),
+         value: null !== vB && void 0 !== vB ? vB : String(ZB.value),
```

#### 610. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12144` → after: `L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12144) · [Before (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12144)

```diff
-         "aria-label": `More ${pB}`,
+         "aria-label": `More ${hB}`,
```

#### 611. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12235` → after: `L12235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12235) · [Before (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12235)

```diff
-   return jB >= 60 ? "It starts in about a minute." : `It starts in about ${jB} seconds.`
+   return IB >= 60 ? "It starts in about a minute." : `It starts in about ${IB} seconds.`
```

#### 612. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12237` → after: `L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12237) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12237)

```diff
- var xa = zB(1253);
+ var bn = ZB(1261);
```

#### 613. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12243` → after: `L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12243) · [Before (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12243)

```diff
-     zB.set(nB, (null !== (QB = zB.get(nB)) && void 0 !== QB ? QB : 0) + 1)
+     ZB.set(JB, (null !== (TB = ZB.get(JB)) && void 0 !== TB ? TB : 0) + 1)
```

#### 614. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12247` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12247) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12247)

```diff
-     const QB = null !== (jB = zB.get(BB)) && void 0 !== jB ? jB : 0;
+     const TB = null !== (IB = ZB.get(BB)) && void 0 !== IB ? IB : 0;
```

#### 615. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12254` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12254) · [Before (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12254)

```diff
-     if (null !== jB && void 0 !== jB && jB.aborted) return void QB((0, xa.f)(jB));
+     if (null !== IB && void 0 !== IB && IB.aborted) return void TB((0, bn.e)(IB));
```

#### 616. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12257` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12257) · [Before (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12257)

```diff
-       clearTimeout(nB), QB((0, xa.f)(jB))
+       clearTimeout(JB), TB((0, bn.e)(IB))
```

#### 617. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12274)

```diff
-     const UB = null !== (IB = NB.find((BB => md.freeAt(BB) <= Date.now()))) && void 0 !== IB ? IB : NB[0],
+     const cB = null !== (GB = vB.find((BB => ho.freeAt(BB) <= Date.now()))) && void 0 !== GB ? GB : vB[0],
```

#### 618. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12291` → after: `L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12291) · [Before (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12291)

```diff
-       return [...null !== (jB = BB.why) && void 0 !== jB ? jB : [], ...(null !== (zB = BB.parts) && void 0 !== zB ? zB : []).map((BB => BB.why)), ...Ka(BB.before, BB.after)]
+       return [...null !== (IB = BB.why) && void 0 !== IB ? IB : [], ...(null !== (ZB = BB.parts) && void 0 !== ZB ? ZB : []).map((BB => BB.why)), ...xn(BB.before, BB.after)]
```

#### 619. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12316-L12318` → after: `L12316-L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12316-L12318) · [Before (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12316-L12318)

```diff
-   const QB = jB && null !== (zB = BB[jB]) && void 0 !== zB ? zB : [],
-     nB = QB.length >= 2 ? QB : Object.values(BB).flat();
-   return nB.length < 2 ? "Usually under a minute." : `Usually ${function(BB){const jB=Math.max(5,5*Math.round(BB/5e3));if(jB<60)return`about ${jB} seconds`;const zB=10*Math.round(BB/1e4),QB=Math.floor(zB/60),nB=zB%60,dB=`${QB} ${1===QB?"minute":"minutes"}`;return 0===nB?`about ${ … [truncated]
+   const TB = IB && null !== (ZB = BB[IB]) && void 0 !== ZB ? ZB : [],
+     JB = TB.length >= 2 ? TB : Object.values(BB).flat();
+   return JB.length < 2 ? "Usually under a minute." : `Usually ${function(BB){const IB=Math.max(5,5*Math.round(BB/5e3));if(IB<60)return`about ${IB} seconds`;const ZB=10*Math.round(BB/1e4),TB=Math.floor(ZB/60),JB=ZB%60,oB=`${TB} ${1===TB?"minute":"minutes"}`;return 0===JB?`about ${ … [truncated]
```

#### 620. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12320-L12322` → after: `L12320-L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12320-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12320-L12322) · [Before (L12320-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12320-L12322)

```diff
- var Oa = zB(1514),
-   Bp = zB(4921);
- var jp = zB(6479);
+ var Bh = ZB(1542),
+   Ih = ZB(4999);
+ var Zh = ZB(6694);
```

#### 621. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12325` → after: `L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12325) · [Before (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12325)

```diff
-     uI.j.setItem(zp, !0)
+     oG.m.setItem(Th, !0)
```

#### 622. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12332)

```diff
-       } = await zB.e(125).then((() => zB(6474)));
+       } = await ZB.e(125).then((() => ZB(6685)));
```

#### 623. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12372` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12372) · [Before (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12372)

```diff
-             return !(0, mB.f)(jB)
+             return !(0, gB.c)(IB)
```

#### 624. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12401-L12405` → after: `L12401-L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12401-L12405) · [Before (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12401-L12405)

```diff
-           aB = zB ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${mn}` : "It is World Code: JavaScript that runs on the game server for one world.",
-           pB = [...new Set(lB(null !== (jB = QB[IB]) && void 0 !== jB ? jB : "").map((BB => BB.name)))],
-           rB = NB ? `, except to add a new callback or function to ${IB} by its name with replace_function${pB.length>0?` (not ${pB.join(", ")}, which it has already)`:""}` : "",
-           sB = dB ? `\nYou can see only the open file's code: change only that file${rB}, and never write the other files listed.\n` : "";
-         return `Help me with the code of my game in Bloxd, a voxel game. ${aB}\n\n${Bp.h} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
+           nB = ZB ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${gJ}` : "It is World Code: JavaScript that runs on the game server for one world.",
+           hB = [...new Set(lB(null !== (IB = TB[GB]) && void 0 !== IB ? IB : "").map((BB => BB.name)))],
+           zB = vB ? `, except to add a new callback or function to ${GB} by its name with replace_function${hB.length>0?` (not ${hB.join(", ")}, which it has already)`:""}` : "",
+           FB = oB ? `\nYou can see only the open file's code: change only that file${zB}, and never write the other files listed.\n` : "";
+         return `Help me with the code of my game in Bloxd, a voxel game. ${nB}\n\n${Ih.j} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
```

#### 625. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12410` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12410) · [Before (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12410)

```diff
-       } = (0, Bp.g)(jB),
+       } = (0, Ih.h)(IB),
```

#### 626. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12436)

```diff
-         !0 !== uI.j.getItem(zp) ? Qp.ask().then((BB => {
+         !0 !== oG.m.getItem(Th) ? Jh.ask().then((BB => {
```

#### 627. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12444)

```diff
-         children: [np[NB.how].hint, " ", (0, IB.jsx)(jp.c, {
+         children: [oh[vB.how].hint, " ", (0, GB.jsx)(Zh.e, {
```

#### 628. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12466)

```diff
-         }), (0, IB.jsx)(aB.m, {
+         }), (0, GB.jsx)(nB.p, {
```

#### 629. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12476` → after: `L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12476) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12476)

```diff
-           children: (0, IB.jsx)(rB.c, {
+           children: (0, GB.jsx)(zB.d, {
```

#### 630. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12484-L12485` → after: `L12484-L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12484-L12485) · [Before (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12484-L12485)

```diff
- var Ip = zB(106),
-   Np = zB(36988);
+ var vh = ZB(105),
+   kh = ZB(36947);
```

#### 631. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12511` → after: `L12511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12511) · [Before (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12511)

```diff
-   return `The part I picked (${BB.path}, ${rp(BB)}):\n\`\`\`\n${jB}\n\`\`\``
+   return `The part I picked (${BB.path}, ${zh(BB)}):\n\`\`\`\n${IB}\n\`\`\``
```

#### 632. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12518` → after: `L12518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12518) · [Before (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12518)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${sp(BB)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${Fh(BB)}`;
```

#### 633. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12520)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${sp(BB)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${Fh(BB)}`;
```

#### 634. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12522` → after: `L12522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12522) · [Before (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12522)

```diff
-       return `${jB.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${sp(BB)}`
+       return `${IB.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${Fh(BB)}`
```

#### 635. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12531` → after: `L12531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12531) · [Before (L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12531)

```diff
-       return `Explain ${zB}`;
+       return `Explain ${ZB}`;
```

#### 636. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12533` → after: `L12533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12533) · [Before (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12533)

```diff
-       return `Fix ${zB}`;
+       return `Fix ${ZB}`;
```

#### 637. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12535` → after: `L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12535) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12535)

```diff
-       return `${jB.trim()} (${zB})`
+       return `${IB.trim()} (${ZB})`
```

#### 638. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12538-L12542` → after: `L12538-L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12538-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12538-L12542) · [Before (L12538-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12538-L12542)

```diff
- var yp = zB(41491),
-   kp = zB(4853),
-   Gp = zB(41474),
-   Lp = zB(41486),
-   gp = zB(41480);
+ var qh = ZB(41421),
+   yh = ZB(4937),
+   Uh = ZB(41405),
+   Wh = ZB(41417),
+   dh = ZB(41409);
```

#### 639. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12560-L12561` → after: `L12560-L12561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12560-L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12560-L12561) · [Before (L12560-L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12560-L12561)

```diff
-         ["/globals.d.ts", Gp.e],
-         ["/lib.d.ts", Lp.c]
+         ["/globals.d.ts", Uh.b],
+         ["/lib.d.ts", Wh.b]
```

#### 640. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12565-L12566` → after: `L12565-L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12565-L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12565-L12566) · [Before (L12565-L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12565-L12566)

```diff
-         ["/globals.d.ts", gp.e],
-         ["/lib.d.ts", Lp.c]
+         ["/globals.d.ts", dh.d],
+         ["/lib.d.ts", Wh.b]
```

#### 641. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12568` → after: `L12568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12568) · [Before (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12568)

```diff
-     zB = yp.g(yp.c(nB), [...nB.keys()], iB(), {
+     ZB = qh.h(qh.d(JB), [...JB.keys()], OB(), {
```

#### 642. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12590` → after: `L12590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12590) · [Before (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12590)

```diff
-   return nB(BB), QB && Kz(QB, BB) ? QB : void 0
+   return JB(BB), TB && bZ(TB, BB) ? TB : void 0
```

#### 643. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12609` → after: `L12609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12609) · [Before (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12609)

```diff
-   if (QB) return `"${QB}"`;
+   if (TB) return `"${TB}"`;
```

#### 644. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12624` → after: `L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12624) · [Before (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12624)

```diff
-   return IB ? `"${IB.option}"` : void 0
+   return GB ? `"${GB.option}"` : void 0
```

#### 645. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12650-L12651` → after: `L12650-L12651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12650-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12650-L12651) · [Before (L12650-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12650-L12651)

```diff
-       zB = null !== (aB = null === (pB = BB.split("\n")[jB]) || void 0 === pB ? void 0 : pB.trim()) && void 0 !== aB ? aB : "",
-       QB = zB.length > 40 ? `${zB.slice(0,37)}...` : zB,
+       ZB = null !== (nB = null === (hB = BB.split("\n")[IB]) || void 0 === hB ? void 0 : hB.trim()) && void 0 !== nB ? nB : "",
+       TB = ZB.length > 40 ? `${ZB.slice(0,37)}...` : ZB,
```

#### 646. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12653` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12653) · [Before (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12653)

```diff
-     uB.add(`Line ${jB+1} stops all of this code from running: "${QB}" (${nB}).`)
+     kB.add(`Line ${IB+1} stops all of this code from running: "${TB}" (${JB}).`)
```

#### 647. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12661-L12663` → after: `L12661-L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12661-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12661-L12663) · [Before (L12661-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12661-L12663)

```diff
-         zB = null !== (SB = null === (EB = BB.split("\n")[jB]) || void 0 === EB ? void 0 : EB.trim()) && void 0 !== SB ? SB : "",
-         QB = zB.length > 40 ? `${zB.slice(0,37)}...` : zB;
-       uB.add(`Line ${jB+1} never runs: "${QB}" comes after a return, which ends the function first.`);
+         ZB = null !== (QB = null === (wB = BB.split("\n")[IB]) || void 0 === wB ? void 0 : wB.trim()) && void 0 !== QB ? QB : "",
+         TB = ZB.length > 40 ? `${ZB.slice(0,37)}...` : ZB;
+       kB.add(`Line ${IB+1} never runs: "${TB}" comes after a return, which ends the function first.`);
```

#### 648. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12668` → after: `L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12668) · [Before (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12668)

```diff
-       const jB = AB.start + (null !== (qB = AB.length) && void 0 !== qB ? qB : 0),
+       const IB = XB.start + (null !== (YB = XB.length) && void 0 !== YB ? YB : 0),
```

#### 649. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12671` → after: `L12671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12671) · [Before (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12671)

```diff
-         nB = new RegExp(`^${zB.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(BB),
+         JB = new RegExp(`^${ZB.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(BB),
```

#### 650. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12674-L12675` → after: `L12674-L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12674-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12674-L12675) · [Before (L12674-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12674-L12675)

```diff
-         aB = new RegExp(`//\\s*(?:const|let|var)\\s+${zB.replaceAll("$","\\$")}\\b`).test(BB),
-         pB = new RegExp(`typeof\\s+${zB.replaceAll("$","\\$")}\\b`).test(BB);
+         nB = new RegExp(`//\\s*(?:const|let|var)\\s+${ZB.replaceAll("$","\\$")}\\b`).test(BB),
+         hB = new RegExp(`typeof\\s+${ZB.replaceAll("$","\\$")}\\b`).test(BB);
```

#### 651. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12680)

```diff
-       uB.add(JB ? `Line ${sB+1} uses "${zB}", which is never set, so it throws there. Did you mean "${JB}"?` : `Line ${sB+1} uses "${zB}", which isn't set there, so it throws when that line runs.`);
+       kB.add(NB ? `Line ${FB+1} uses "${ZB}", which is never set, so it throws there. Did you mean "${NB}"?` : `Line ${FB+1} uses "${ZB}", which isn't set there, so it throws when that line runs.`);
```

#### 652. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12686` → after: `L12686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12686) · [Before (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12686)

```diff
-     const zB = AB.start + (null !== (sB = AB.length) && void 0 !== sB ? sB : 0),
+     const ZB = XB.start + (null !== (FB = XB.length) && void 0 !== FB ? FB : 0),
```

#### 653. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12693` → after: `L12693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12693) · [Before (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12693)

```diff
-       TB = pB.length > 40 ? `${pB.slice(0,37)}...` : pB;
+       LB = hB.length > 40 ? `${hB.slice(0,37)}...` : hB;
```

#### 654. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12697-L12699` → after: `L12697-L12699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12697-L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12697-L12699) · [Before (L12697-L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12697-L12699)

```diff
-         zB = null !== (oB = null === BB || void 0 === BB || null === (HB = BB[1]) || void 0 === HB ? void 0 : HB.replace("-", " to ")) && void 0 !== oB ? oB : "a different number of",
-         nB = Number(null !== (DB = null === BB || void 0 === BB ? void 0 : BB[2]) && void 0 !== DB ? DB : QB.arguments.length);
-       uB.add(`${dB} needs ${zB} ${"1"===zB?"value":"values"}, but this line gives it ${nB}.`);
+         ZB = null !== (pB = null === BB || void 0 === BB || null === (aB = BB[1]) || void 0 === aB ? void 0 : aB.replace("-", " to ")) && void 0 !== pB ? pB : "a different number of",
+         JB = Number(null !== (HB = null === BB || void 0 === BB ? void 0 : BB[2]) && void 0 !== HB ? HB : TB.arguments.length);
+       kB.add(`${oB} needs ${ZB} ${"1"===ZB?"value":"values"}, but this line gives it ${JB}.`);
```

#### 655. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12708` → after: `L12708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12708) · [Before (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12708)

```diff
-         UB = (null !== (FB = null === BB || void 0 === BB ? void 0 : BB.properties) && void 0 !== FB ? FB : []).flatMap((BB => BB.name && (iB().isIdentifier(BB.name) || iB().isStringLiteral(BB.name)) ? [{
+         cB = (null !== (MB = null === BB || void 0 === BB ? void 0 : BB.properties) && void 0 !== MB ? MB : []).flatMap((BB => BB.name && (OB().isIdentifier(BB.name) || OB().isStringLiteral(BB.name)) ? [{
```

#### 656. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12712` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12712) · [Before (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12712)

```diff
-         aB = null !== (YB = null === (VB = jB.match(/'([^']*)' does not exist/)) || void 0 === VB ? void 0 : VB[1]) && void 0 !== YB ? YB : TB,
+         nB = null !== (jB = null === (PB = IB.match(/'([^']*)' does not exist/)) || void 0 === PB ? void 0 : PB[1]) && void 0 !== jB ? jB : LB,
```

#### 657. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12714` → after: `L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12714) · [Before (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12714)

```diff
-         rB = pB.length > 0 ? pB : [{
+         zB = hB.length > 0 ? hB : [{
```

#### 658. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12718` → after: `L12718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12718) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12718)

```diff
-         sB = zB ? ` It takes ${bz(NB,zB)}.` : " Check Show Docs for its settings.";
+         FB = ZB ? ` It takes ${DZ(vB,ZB)}.` : " Check Show Docs for its settings.";
```

#### 659. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12724-L12725` → after: `L12724-L12725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12724-L12725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12724-L12725) · [Before (L12724-L12725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12724-L12725)

```diff
-         const BB = (0, MB.b)(zu, jB),
-           zB = void 0 !== BB && IB.includes(BB) && !UB.some((zB => zB.name === BB || zB.name !== jB && (0, MB.b)(zu, zB.name) === BB));
+         const BB = (0, sB.e)(Sv, IB),
+           ZB = void 0 !== BB && GB.includes(BB) && !cB.some((ZB => ZB.name === BB || ZB.name !== IB && (0, sB.e)(Sv, ZB.name) === BB));
```

#### 660. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12727` → after: `L12727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12727) · [Before (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12727)

```diff
-         void 0 !== nB && NB.getTypeAtLocation(nB).getCallSignatures().length > 0 || IB.includes(jB) || (QB = zB ? `"${BB}"` : Dp(jB, IB)), uB.add(`${dB} has no setting called "${jB}".${QB?` Did you mean ${QB}?`:sB}`)
+         void 0 !== JB && vB.getTypeAtLocation(JB).getCallSignatures().length > 0 || GB.includes(IB) || (TB = ZB ? `"${BB}"` : Hh(IB, GB)), kB.add(`${oB} has no setting called "${IB}".${TB?` Did you mean ${TB}?`:FB}`)
```

#### 661. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12731` → after: `L12731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12731) · [Before (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12731)

```diff
-     const PB = null !== (JB = null === aB || void 0 === aB ? void 0 : aB.initializer) && void 0 !== JB ? JB : nB,
+     const eB = null !== (NB = null === nB || void 0 === nB ? void 0 : nB.initializer) && void 0 !== NB ? NB : JB,
```

#### 662. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12736` → after: `L12736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12736) · [Before (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12736)

```diff
-       wB = null !== (mB = null === PB || void 0 === PB ? void 0 : PB.getText(IB)) && void 0 !== mB ? mB : pB,
+       AB = null !== (gB = null === eB || void 0 === eB ? void 0 : eB.getText(GB)) && void 0 !== gB ? gB : hB,
```

#### 663. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12740` → after: `L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12740) · [Before (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12740)

```diff
-       const jB = null === (hB = new RegExp(`(?:^|[{,])\\s*${xB.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(BB)) || void 0 === hB ? void 0 : hB[2];
+       const IB = null === (RB = new RegExp(`(?:^|[{,])\\s*${tB.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(BB)) || void 0 === RB ? void 0 : RB[2];
```

#### 664. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12743` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12743) · [Before (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12743)

```diff
-         uB.add(`${dB} has no ${lB} called "${jB}" (${wB}).${BB?` Did you mean ${BB}?`:""}`)
+         kB.add(`${oB} has no ${lB} called "${IB}" (${AB}).${BB?` Did you mean ${BB}?`:""}`)
```

#### 665. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12749` → after: `L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12749) · [Before (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12749)

```diff
-       const BB = PB && iB().isStringLiteral(PB) ? PB : void 0,
+       const BB = eB && OB().isStringLiteral(eB) ? eB : void 0,
```

#### 666. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12751-L12752` → after: `L12751-L12752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12751-L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12751-L12752) · [Before (L12751-L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12751-L12752)

```diff
-         zB = BB && !aB ? `${dB} has no ${lB} called ${XB=TB,XB.startsWith('"')?XB:`"${XB}"`}.` : `${dB} can't take ${TB} there.`;
-       uB.add(`${zB}${jB?` Did you mean ${jB}?`:" Check Show Docs for what it takes."}`);
+         ZB = BB && !nB ? `${oB} has no ${lB} called ${rB=LB,rB.startsWith('"')?rB:`"${rB}"`}.` : `${oB} can't take ${LB} there.`;
+       kB.add(`${ZB}${IB?` Did you mean ${IB}?`:" Check Show Docs for what it takes."}`);
```

#### 667. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12757` → after: `L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12757) · [Before (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12757)

```diff
-       uB.add(`${dB} needs ${KB} in ${TB}: it takes ${bz(NB,WB)}.`);
+       kB.add(`${oB} needs ${bB} in ${LB}: it takes ${DZ(vB,uB)}.`);
```

#### 668. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12761` → after: `L12761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12761) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12761)

```diff
-       uB.add(`${dB} can't take ${TB} there: it takes ${bz(NB,WB)}.`);
+       kB.add(`${oB} can't take ${LB} there: it takes ${DZ(vB,uB)}.`);
```

#### 669. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12767` → after: `L12767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12767) · [Before (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12767)

```diff
-       uB.add(`${dB} needs settings in { } there${BB?`, like ${BB}`:""}, not ${TB}.`);
+       kB.add(`${oB} needs settings in { } there${BB?`, like ${BB}`:""}, not ${LB}.`);
```

#### 670. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12772` → after: `L12772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12772) · [Before (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12772)

```diff
-       vB = null !== (LB = null === (gB = NB.getResolvedSignature(QB)) || void 0 === gB || null === (tB = gB.parameters[bB]) || void 0 === tB ? void 0 : tB.name) && void 0 !== LB ? LB : "that part",
+       KB = null !== (WB = null === (dB = vB.getResolvedSignature(TB)) || void 0 === dB || null === (CB = dB.parameters[DB]) || void 0 === CB ? void 0 : CB.name) && void 0 !== WB ? WB : "that part",
```

#### 671. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12775)

```diff
-     "string" === cB ? uB.add(`${dB} needs ${vB} as text, but ${TB} is ${OB} here.`) : "number" === cB ? uB.add(`${dB} needs ${vB} as a number, but ${TB} is ${OB} here.`) : uB.add(`${dB} can't take ${TB} there${WB?`: it takes ${bz(NB,WB)}`:". Check Show Docs for what it takes"}.`)
+     "string" === EB ? kB.add(`${oB} needs ${KB} as text, but ${LB} is ${SB} here.`) : "number" === EB ? kB.add(`${oB} needs ${KB} as a number, but ${LB} is ${SB} here.`) : kB.add(`${oB} can't take ${LB} there${uB?`: it takes ${DZ(vB,uB)}`:". Check Show Docs for what it takes"}.`)
```

#### 672. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12790` → after: `L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12790) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12790)

```diff
-       dB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB[1]) && void 0 !== zB ? zB : null === BB || void 0 === BB ? void 0 : BB[2];
+       oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB[1]) && void 0 !== ZB ? ZB : null === BB || void 0 === BB ? void 0 : BB[2];
```

#### 673. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12792` → after: `L12792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12792) · [Before (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12792)

```diff
-     if (dB) jB.set(dB, (null !== (QB = jB.get(dB)) && void 0 !== QB ? QB : 0) + 1)
+     if (oB) IB.set(oB, (null !== (TB = IB.get(oB)) && void 0 !== TB ? TB : 0) + 1)
```

#### 674. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12796` → after: `L12796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12796) · [Before (L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12796)

```diff
-     return zB > 1 ? [`${jB} is in the code ${zB} times, so only the last one runs. Put them together in one ${jB}.`] : []
+     return ZB > 1 ? [`${IB} is in the code ${ZB} times, so only the last one runs. Put them together in one ${IB}.`] : []
```

#### 675. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12805` → after: `L12805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12805) · [Before (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12805)

```diff
-       const QB = null !== (jB = null === (zB = IB[BB]) || void 0 === zB ? void 0 : zB.trim()) && void 0 !== jB ? jB : "";
+       const TB = null !== (IB = null === (ZB = GB[BB]) || void 0 === ZB ? void 0 : ZB.trim()) && void 0 !== IB ? IB : "";
```

#### 676. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12808` → after: `L12808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12808) · [Before (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12808)

```diff
-         text: QB.length > 50 ? `${QB.slice(0,47)}...` : QB
+         text: TB.length > 50 ? `${TB.slice(0,47)}...` : TB
```

#### 677. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12820` → after: `L12820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12820) · [Before (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12820)

```diff
-   const aB = null !== (zB = null === (QB = /"([^"]+)"/.exec(BB)) || void 0 === QB ? void 0 : QB[1]) && void 0 !== zB ? zB : null === (nB = /^api\.[\w$]+/.exec(BB)) || void 0 === nB ? void 0 : nB[0];
+   const nB = null !== (ZB = null === (TB = /"([^"]+)"/.exec(BB)) || void 0 === TB ? void 0 : TB[1]) && void 0 !== ZB ? ZB : null === (JB = /^api\.[\w$]+/.exec(BB)) || void 0 === JB ? void 0 : JB[0];
```

#### 678. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12824` → after: `L12824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12824) · [Before (L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12824)

```diff
-     sB = null !== (dB = rB.find((BB => !pB.has(IB[BB])))) && void 0 !== dB ? dB : rB[0];
+     FB = null !== (oB = zB.find((BB => !hB.has(GB[BB])))) && void 0 !== oB ? oB : zB[0];
```

#### 679. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12869` → after: `L12869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12869) · [Before (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12869)

```diff
-     return [`Line ${jB.getLineAndCharacterOfPosition(BB.at).line+1} uses "CONFIG.${BB.name}", but CONFIG has no ${BB.name}, so it is undefined there. Add ${BB.name} to CONFIG.`]
+     return [`Line ${IB.getLineAndCharacterOfPosition(BB.at).line+1} uses "CONFIG.${BB.name}", but CONFIG has no ${BB.name}, so it is undefined there. Add ${BB.name} to CONFIG.`]
```

#### 680. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12875` → after: `L12875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12875) · [Before (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12875)

```diff
-   const QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== jB.path && (0, mB.f)(jB.path)),
+   const TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== IB.path && (0, gB.c)(IB.path)),
```

#### 681. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12958` → after: `L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12958) · [Before (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12958)

```diff
-           uB = zB(void 0 === UB.result ? QB : UB.result), NB.put(uB, jB)
+           kB = ZB(void 0 === cB.result ? TB : cB.result), vB.put(kB, IB)
```

#### 682. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12962` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12962) · [Before (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12962)

```diff
-   }(uI.g),
+   }(oG.i),
```

#### 683. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12965` → after: `L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12965) · [Before (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12965)

```diff
-       this.store = BB, this.signal = jB, this.Cs = new Map
+       this.store = BB, this.signal = IB, this.XF = new Map
```

#### 684. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12972-L12973` → after: `L12972-L12973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12972-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12972-L12973) · [Before (L12972-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12972-L12973)

```diff
-         this.Cs.set(BB, QB), QB.then(jB)
-       }))) && void 0 !== zB ? zB : () => {}
+         this.XF.set(BB, TB), TB.then(IB)
+       }))) && void 0 !== ZB ? ZB : () => {}
```

#### 685. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13002` → after: `L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13002) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13002)

```diff
-       this.Cs.set(BB, IB.then((BB => {
+       this.XF.set(BB, GB.then((BB => {
```

#### 686. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13021` → after: `L13021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13021) · [Before (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13021)

```diff
-       this.Cs.set(BB, QB.then((BB => {
+       this.XF.set(BB, TB.then((BB => {
```

#### 687. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13052-L13053` → after: `L13052-L13053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13052-L13053) · [Before (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13052-L13053)

```diff
-       let jB = this.Cs.get(BB);
-       return jB || (jB = this.store.getItem(this.storeKey(BB)).then((BB => XU(BB) ? BB : [])).catch((() => [])), this.Cs.set(BB, jB)), jB
+       let IB = this.XF.get(BB);
+       return IB || (IB = this.store.getItem(this.storeKey(BB)).then((BB => Pc(BB) ? BB : [])).catch((() => [])), this.XF.set(BB, IB)), IB
```

#### 688. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13061` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13061) · [Before (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13061)

```diff
-       this.store = BB, this.signal = jB, this.Cs = new Map
+       this.store = BB, this.signal = IB, this.XF = new Map
```

#### 689. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13069` → after: `L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13069) · [Before (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13069)

```diff
-           return null !== (zB = await this.read(BB)) && void 0 !== zB ? zB : jB
+           return null !== (ZB = await this.read(BB)) && void 0 !== ZB ? ZB : IB
```

#### 690. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13071-L13072` → after: `L13071-L13072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13071-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13071-L13072) · [Before (L13071-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13071-L13072)

```diff
-         this.Cs.set(BB, QB), QB.then(jB)
-       }))) && void 0 !== zB ? zB : () => {}
+         this.XF.set(BB, TB), TB.then(IB)
+       }))) && void 0 !== ZB ? ZB : () => {}
```

#### 691. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13090` → after: `L13090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13090) · [Before (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13090)

```diff
-         const nB = jB(null !== (QB = await this.read(BB)) && void 0 !== QB ? QB : zB);
+         const JB = IB(null !== (TB = await this.read(BB)) && void 0 !== TB ? TB : ZB);
```

#### 692. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13093` → after: `L13093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13093) · [Before (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13093)

```diff
-       this.Cs.set(BB, QB);
+       this.XF.set(BB, TB);
```

#### 693. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13101-L13102` → after: `L13101-L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13101-L13102) · [Before (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13101-L13102)

```diff
-       let jB = this.Cs.get(BB);
-       return jB || (jB = this.read(BB).then((BB => null !== BB && void 0 !== BB ? BB : [])), this.Cs.set(BB, jB)), jB
+       let IB = this.XF.get(BB);
+       return IB || (IB = this.read(BB).then((BB => null !== BB && void 0 !== BB ? BB : [])), this.XF.set(BB, IB)), IB
```

#### 694. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13114` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13114) · [Before (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13114)

```diff
-     const nB = BB => sB.c.find((jB => jB.id === BB)),
+     const JB = BB => FB.b.find((IB => IB.id === BB)),
```

#### 695. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13117` → after: `L13117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13117) · [Before (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13117)

```diff
-         return null !== (jB = null === (zB = nB(BB)) || void 0 === zB ? void 0 : zB.content) && void 0 !== jB ? jB : ""
+         return null !== (IB = null === (ZB = JB(BB)) || void 0 === ZB ? void 0 : ZB.content) && void 0 !== IB ? IB : ""
```

#### 696. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13126` → after: `L13126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13126) · [Before (L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13126)

```diff
-       blockNames: null !== (zB = null === (QB = nB("blockNames")) || void 0 === QB ? void 0 : QB.raw) && void 0 !== zB ? zB : "",
+       blockNames: null !== (ZB = null === (TB = JB("blockNames")) || void 0 === TB ? void 0 : TB.raw) && void 0 !== ZB ? ZB : "",
```

#### 697. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13168` → after: `L13168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13168) · [Before (L13168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13168)

```diff
-       ...wu.g,
+       ...fk.c,
```

#### 698. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13209` → after: `L13209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13209) · [Before (L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13209)

```diff
-   return Object.entries(null !== (zB = BB.leftFiles) && void 0 !== zB ? zB : {}).every((BB => {
+   return Object.entries(null !== (ZB = BB.leftFiles) && void 0 !== ZB ? ZB : {}).every((BB => {
```

#### 699. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13212` → after: `L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13212) · [Before (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13212)

```diff
-     return (null !== (zB = jB[QB]) && void 0 !== zB ? zB : "") === nB
+     return (null !== (ZB = IB[TB]) && void 0 !== ZB ? ZB : "") === JB
```

#### 700. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13221-L13222` → after: `L13221-L13222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13221-L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13221-L13222) · [Before (L13221-L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13221-L13222)

```diff
-     return zB.length > 0 && zB.every((BB => void 0 !== BB && (void 0 === jB || jB.some((jB => eu(jB, [BB]) !== jB))))) ? zB : void 0
-   }(null !== (jB = BB.warnings) && void 0 !== jB ? jB : [], BB.changes.map((BB => BB.after)))
+     return ZB.length > 0 && ZB.every((BB => void 0 !== BB && (void 0 === IB || IB.some((IB => ek(IB, [BB]) !== IB))))) ? ZB : void 0
+   }(null !== (IB = BB.warnings) && void 0 !== IB ? IB : [], BB.changes.map((BB => BB.after)))
```

#### 701. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13248` → after: `L13248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13248) · [Before (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13248)

```diff
-     VB = null !== (jB = rB.warnings) && void 0 !== jB ? jB : [],
+     PB = null !== (IB = zB.warnings) && void 0 !== IB ? IB : [],
```

#### 702. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13251` → after: `L13251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13251) · [Before (L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13251)

```diff
-     ZB = null !== (zB = null === (nB = rB.swappedTo) || void 0 === nB ? void 0 : nB[0]) && void 0 !== zB ? zB : hB ? null !== (uB = null === (UB = /"([^"]+)"/.exec(VB[0])) || void 0 === UB ? void 0 : UB[1]) && void 0 !== uB ? uB : null === (aB = /^api\.[\w$]+/.exec(VB[0])) || voi … [truncated]
+     mB = null !== (ZB = null === (JB = zB.swappedTo) || void 0 === JB ? void 0 : JB[0]) && void 0 !== ZB ? ZB : RB ? null !== (kB = null === (cB = /"([^"]+)"/.exec(PB[0])) || void 0 === cB ? void 0 : cB[1]) && void 0 !== kB ? kB : null === (nB = /^api\.[\w$]+/.exec(PB[0])) || voi … [truncated]
```

#### 703. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13260` → after: `L13260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13260) · [Before (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13260)

```diff
-       return null !== (jB = null === (zB = TB.get(BB)) || void 0 === zB ? void 0 : zB.line) && void 0 !== jB ? jB : BB
+       return null !== (IB = null === (ZB = LB.get(BB)) || void 0 === ZB ? void 0 : ZB.line) && void 0 !== IB ? IB : BB
```

#### 704. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13281` → after: `L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13281) · [Before (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13281)

```diff
-         const zB = new Set((null !== (jB = CB.get(BB.path)) && void 0 !== jB ? jB : []).filter((jB => !lB.has(`${BB.path}:${jB.index}`))).map((BB => BB.index))),
+         const ZB = new Set((null !== (IB = xB.get(BB.path)) && void 0 !== IB ? IB : []).filter((IB => !lB.has(`${BB.path}:${IB.index}`))).map((BB => BB.index))),
```

#### 705. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13287` → after: `L13287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13287) · [Before (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13287)

```diff
-             return `${QB.join("\n")}${nB}`
+             return `${TB.join("\n")}${JB}`
```

#### 706. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13309` → after: `L13309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13309) · [Before (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13309)

```diff
-       title: Qj ? `Editing code: ${nj}` : `Code change: ${nj}`,
+       title: TI ? `Editing code: ${JI}` : `Code change: ${JI}`,
```

#### 707. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13329` → after: `L13329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13329) · [Before (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13329)

```diff
-           }(jj ? null !== (jB = jj.find((jB => jB.path === BB.path))) && void 0 !== jB ? jB : {
+           }(II ? null !== (IB = II.find((IB => IB.path === BB.path))) && void 0 !== IB ? IB : {
```

#### 708. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13332` → after: `L13332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13332) · [Before (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13332)

```diff
-           } : BB), dB = null !== (zB = CB.get(BB.path)) && void 0 !== zB ? zB : [], NB = "offered" !== oB && "applied" !== oB || "" === BB.before ? [] : function(BB, jB) {
+           } : BB), oB = null !== (ZB = xB.get(BB.path)) && void 0 !== ZB ? ZB : [], vB = "offered" !== pB && "applied" !== pB || "" === BB.before ? [] : function(BB, IB) {
```

#### 709. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13345` → after: `L13345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13345) · [Before (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13345)

```diff
-                 children: 1 === QB ? "1 line added" : `${QB} lines added`
+                 children: 1 === TB ? "1 line added" : `${TB} lines added`
```

#### 710. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13353-L13355` → after: `L13353-L13355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13353-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13353-L13355) · [Before (L13353-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13353-L13355)

```diff
-                 const zB = `${BB.path}:${jB.index}`,
-                   QB = [jB.added.length > 0 ? `+${jB.added.length}` : "", jB.removed.length > 0 ? `\u2212${jB.removed.length}` : ""].filter(Boolean).join(" "),
-                   nB = [jB.added.length > 0 ? `${jB.added.length} ${1===jB.added.length?"line":"lines"} added` : "", jB.removed.length > 0 ? `${jB.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                 const ZB = `${BB.path}:${IB.index}`,
+                   TB = [IB.added.length > 0 ? `+${IB.added.length}` : "", IB.removed.length > 0 ? `\u2212${IB.removed.length}` : ""].filter(Boolean).join(" "),
+                   JB = [IB.added.length > 0 ? `${IB.added.length} ${1===IB.added.length?"line":"lines"} added` : "", IB.removed.length > 0 ? `${IB.removed.length} taken out` : ""].filter(Boolean).join(", ");
```

#### 711. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13381` → after: `L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13381) · [Before (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13381)

```diff
-                       children: `${QB} ${jB.added.length+jB.removed.length===1?"line":"lines"}`
+                       children: `${TB} ${IB.added.length+IB.removed.length===1?"line":"lines"}`
```

#### 712. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13397` → after: `L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13397) · [Before (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13397)

```diff
-               children: vB ? `Hide the ${dB.length} parts` : `Show the ${dB.length} parts that went in`
+               children: KB ? `Hide the ${oB.length} parts` : `Show the ${oB.length} parts that went in`
```

#### 713. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13410` → after: `L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13410) · [Before (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13410)

```diff
-               }, `${BB.path}:${jB.index}`)))
+               }, `${BB.path}:${IB.index}`)))
```

#### 714. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13420` → after: `L13420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13420) · [Before (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13420)

```diff
-                 const zB = null !== (jB = sa(BB)) && void 0 !== jB ? jB : ia(BB);
+                 const ZB = null !== (IB = zn(BB)) && void 0 !== IB ? IB : wn(BB);
```

#### 715. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13422` → after: `L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13422) · [Before (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13422)

```diff
-               })).join(", "), NB.length > 6 ? ` and ${NB.length-6} more` : "", ".", " ", (0, IB.jsx)("code", {
+               })).join(", "), vB.length > 6 ? ` and ${vB.length-6} more` : "", ".", " ", (0, GB.jsx)("code", {
```

#### 716. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13447-L13448` → after: `L13447-L13448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13447-L13448) · [Before (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13447-L13448)

```diff
-           children: AB ? 1 === PB ? `${WB?`Line ${WB.line}`:"This line"} ${XB?"will":"would"} never work:` : `${PB} lines ${XB?"will":"would"} never work:` : 1 === PB ? `${WB?`Line ${WB.line}`:"This line"} ${XB?"will":"would"} break:` : `${PB} lines ${XB?"will":"would"} break:`
-         }), (FB ? VB : VB.slice(0, 1)).map(((BB, jB, zB) => {
+           children: XB ? 1 === eB ? `${uB?`Line ${uB.line}`:"This line"} ${rB?"will":"would"} never work:` : `${eB} lines ${rB?"will":"would"} never work:` : 1 === eB ? `${uB?`Line ${uB.line}`:"This line"} ${rB?"will":"would"} break:` : `${eB} lines ${rB?"will":"would"} break:`
+         }), (MB ? PB : PB.slice(0, 1)).map(((BB, IB, ZB) => {
```

#### 717. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13455` → after: `L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13455) · [Before (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13455)

```diff
-               children: [PB > 1 && `Line ${dB.line}: `, (0, IB.jsx)("code", {
+               children: [eB > 1 && `Line ${oB.line}: `, (0, GB.jsx)("code", {
```

#### 718. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13470` → after: `L13470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13470) · [Before (L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13470)

```diff
-         ...eB ? {} : wu.g,
+         ...fB ? {} : fk.c,
```

#### 719. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13482` → after: `L13482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13482) · [Before (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13482)

```diff
-         children: qB ? qB.codeBlock ? "Apply in that code block" : "Apply in World Code" : bB && Bj < cB ? `Apply ${Bj} of ${cB} changes` : hB ? "Apply anyway" : "Apply to my code"
+         children: YB ? YB.codeBlock ? "Apply in that code block" : "Apply in World Code" : DB && BI < EB ? `Apply ${BI} of ${EB} changes` : RB ? "Apply anyway" : "Apply to my code"
```

#### 720. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13496` → after: `L13496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13496) · [Before (L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13496)

```diff
-           ...wu.g,
+           ...fk.c,
```

#### 721. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13597` → after: `L13597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13597) · [Before (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13597)

```diff
-       title: QB ? "That change didn't work, so your code is the same." : 1 === zB.length ? "One part didn't work, so it's left out." : `${zB.length} parts didn't work, so they're left out.`,
+       title: TB ? "That change didn't work, so your code is the same." : 1 === ZB.length ? "One part didn't work, so it's left out." : `${ZB.length} parts didn't work, so they're left out.`,
```

#### 722. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13605` → after: `L13605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13605) · [Before (L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13605)

```diff
-           children: UB.text.split("\n").length > 4 ? `${UB.text.split("\n").slice(0,4).join("\n")}\n\u2026` : UB.text
+           children: cB.text.split("\n").length > 4 ? `${cB.text.split("\n").slice(0,4).join("\n")}\n\u2026` : cB.text
```

#### 723. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13613` → after: `L13613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13613) · [Before (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13613)

```diff
-         ...wu.g,
+         ...fk.c,
```

#### 724. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13659` → after: `L13659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13659) · [Before (L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13659)

```diff
-         return `Not answered: ${QB} didn't accept your key.`;
+         return `Not answered: ${TB} didn't accept your key.`;
```

#### 725. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13661` → after: `L13661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13661) · [Before (L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13661)

```diff
-         return `Not answered: ${QB} couldn't find ${zB}.`;
+         return `Not answered: ${TB} couldn't find ${ZB}.`;
```

#### 726. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13663` → after: `L13663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13663) · [Before (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13663)

```diff
-         return `Not answered: ${QB} stopped your key for now.`;
+         return `Not answered: ${TB} stopped your key for now.`;
```

#### 727. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13665` → after: `L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13665) · [Before (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13665)

```diff
-         return `Not answered: too many requests to ${zB}.`;
+         return `Not answered: too many requests to ${ZB}.`;
```

#### 728. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13667` → after: `L13667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13667) · [Before (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13667)

```diff
-         return `Not answered: ${zB} took too long.`;
+         return `Not answered: ${ZB} took too long.`;
```

#### 729. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13669` → after: `L13669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13669) · [Before (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13669)

```diff
-         return `Not answered: couldn't reach ${QB}.`;
+         return `Not answered: couldn't reach ${TB}.`;
```

#### 730. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13671` → after: `L13671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13671) · [Before (L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13671)

```diff
-         return `Not answered: ${QB} doesn't work from where you are.`;
+         return `Not answered: ${TB} doesn't work from where you are.`;
```

#### 731. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13675` → after: `L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13675) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13675)

```diff
-         return `Not answered: ${zB} couldn't be used.`
+         return `Not answered: ${ZB} couldn't be used.`
```

#### 732. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13686` → after: `L13686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13686) · [Before (L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13686)

```diff
-   return `${Math.floor(jB/60)}:${String(jB%60).padStart(2,"0")}`
+   return `${Math.floor(IB/60)}:${String(IB%60).padStart(2,"0")}`
```

#### 733. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13698` → after: `L13698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13698) · [Before (L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13698)

```diff
-   const QB = (nB = zB.phase, NB = null !== (jB = zB.reasoningChars) && void 0 !== jB ? jB : 0, "screening" === nB ? 3 : "writing" === nB ? 2 : "thinking" === nB && NB >= 400 ? 1 : 0);
+   const TB = (JB = ZB.phase, vB = null !== (IB = ZB.reasoningChars) && void 0 !== IB ? IB : 0, "screening" === JB ? 3 : "writing" === JB ? 2 : "thinking" === JB && vB >= 400 ? 1 : 0);
```

#### 734. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13702` → after: `L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13702) · [Before (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13702)

```diff
-     children: (uB = !zB.skipsSafetyCheck, uB ? la : la.filter((BB => "Safety check" !== BB))).map(((BB, jB) => (0, IB.jsx)("li", {
+     children: (kB = !ZB.skipsSafetyCheck, kB ? An : An.filter((BB => "Safety check" !== BB))).map(((BB, IB) => (0, GB.jsx)("li", {
```

#### 735. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13755` → after: `L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13755) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13755)

```diff
-     const [aj, pj] = (0, QB.useState)(null), [rj, sj] = (0, QB.useState)([]), [Jj, mj] = (0, QB.useState)(!1), [yj, kj] = (0, QB.useState)([]), [Gj, Lj] = (0, QB.useState)(!1), [gj, tj] = (0, QB.useState)(!1), [Sj, Mj] = (0, QB.useState)(null), [Ej, ij] = (0, QB.useState)(!1), [q … [truncated]
+     const [nI, hI] = (0, TB.useState)(null), [zI, FI] = (0, TB.useState)([]), [NI, gI] = (0, TB.useState)(!1), [qI, yI] = (0, TB.useState)([]), [UI, WI] = (0, TB.useState)(!1), [dI, CI] = (0, TB.useState)(!1), [QI, sI] = (0, TB.useState)(null), [wI, OI] = (0, TB.useState)(!1), [Y … [truncated]
```

#### 736. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13775` → after: `L13775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13775) · [Before (L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13775)

```diff
-       [Cj, cj] = (0, QB.useState)(null !== (jB = Qj.dismissedErrorCounts.get(WB.key)) && void 0 !== jB ? jB : 0),
+       [xI, EI] = (0, TB.useState)(null !== (IB = TI.dismissedErrorCounts.get(uB.key)) && void 0 !== IB ? IB : 0),
```

#### 737. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13783-L13784` → after: `L13783-L13784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13783-L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13783-L13784) · [Before (L13783-L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13783-L13784)

```diff
-       Nz = (0, YU.s)(eB),
-       uz = null !== dz && void 0 !== dz ? dz : null === Nz || void 0 === Nz ? void 0 : Nz.entryId,
+       vZ = (0, Hc.r)(fB),
+       kZ = null !== oZ && void 0 !== oZ ? oZ : null === vZ || void 0 === vZ ? void 0 : vZ.entryId,
```

#### 738. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13836` → after: `L13836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13836) · [Before (L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13836)

```diff
-           nB = Math.max(nB, Math.min(IB, jB ? QB(jB) - zB : QB(uB)))
+           JB = Math.max(JB, Math.min(GB, IB ? TB(IB) - ZB : TB(kB)))
```

#### 739. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13897` → after: `L13897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13897) · [Before (L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13897)

```diff
-     const Mz = null !== (nB = null === (sB = dj.findLast((BB => BB.target.key === WB.key))) || void 0 === sB ? void 0 : sB.retryAt) && void 0 !== nB ? nB : 0,
+     const sZ = null !== (JB = null === (FB = oI.findLast((BB => BB.target.key === uB.key))) || void 0 === FB ? void 0 : FB.retryAt) && void 0 !== JB ? JB : 0,
```

#### 740. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13927` → after: `L13927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13927) · [Before (L13927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13927)

```diff
-         return null !== (zB = QB) && void 0 !== zB ? zB : Mu(BB)
+         return null !== (ZB = TB) && void 0 !== ZB ? ZB : Ck(BB)
```

#### 741. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13967` → after: `L13967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13967) · [Before (L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13967)

```diff
-           about: IB = (null !== jB && void 0 !== jB ? jB : BB.trim()),
+           about: GB = (null !== IB && void 0 !== IB ? IB : BB.trim()),
```

#### 742. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13992` → after: `L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L13992) · [Before (L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L13992)

```diff
-             } = await Promise.resolve().then((() => zB(1381)));
+             } = await Promise.resolve().then((() => ZB(1403)));
```

#### 743. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14007` → after: `L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14007) · [Before (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14007)

```diff
-         const oB = null !== sB && void 0 !== sB ? sB : Ej && !pB && void 0 === yB && void 0 === kB;
+         const pB = null !== FB && void 0 !== FB ? FB : wI && !hB && void 0 === qB && void 0 === yB;
```

#### 744. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14011` → after: `L14011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14011) · [Before (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14011)

```diff
-         const HB = null !== (QB = null !== EB && void 0 !== EB ? EB : null === qB || void 0 === qB ? void 0 : qB.openPath) && void 0 !== QB ? QB : FB;
+         const aB = null !== (TB = null !== wB && void 0 !== wB ? wB : null === YB || void 0 === YB ? void 0 : YB.openPath) && void 0 !== TB ? TB : MB;
```

#### 745. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14016` → after: `L14016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14016) · [Before (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14016)

```diff
-           ZB = XB && !JB.g.get(),
+           mB = rB && !NB.c.get(),
```

#### 746. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14029` → after: `L14029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14029) · [Before (L14029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14029)

```diff
-           bB = (CB < 0 ? dj : dj.slice(0, CB)).filter((BB => !BB.isNotice && !BB.leftOut && Hz(BB) && (ZB || !BB.isUnchecked))).slice(-4).map((BB => ({
+           DB = (xB < 0 ? oI : oI.slice(0, xB)).filter((BB => !BB.isNotice && !BB.leftOut && aZ(BB) && (mB || !BB.isUnchecked))).slice(-4).map((BB => ({
```

#### 747. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14034` → after: `L14034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14034) · [Before (L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14034)

```diff
-           RB = void 0 === UB ? void 0 === jB ? fB : void 0 : null !== UB && void 0 !== UB ? UB : void 0,
+           VB = void 0 === cB ? void 0 === IB ? iB : void 0 : null !== cB && void 0 !== cB ? cB : void 0,
```

#### 748. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14037` → after: `L14037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14037) · [Before (L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14037)

```diff
-           zj = OB ? Bj : void 0;
+           ZI = SB ? BI : void 0;
```

#### 749. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14050` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14050) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14050)

```diff
-             text: BB ? fB : null !== jB && void 0 !== jB ? jB : fB,
+             text: BB ? iB : null !== IB && void 0 !== IB ? IB : iB,
```

#### 750. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14123` → after: `L14123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14123) · [Before (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14123)

```diff
-               if (!lB && !hB || ZB) return null !== iB && void 0 !== iB ? iB : fB;
+               if (!lB && !RB || mB) return null !== OB && void 0 !== OB ? OB : iB;
```

#### 751. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14165` → after: `L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14165) · [Before (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14165)

```diff
-           let UB = KB || AB ? null !== iB && void 0 !== iB ? iB : fB : await dB();
+           let cB = bB || XB ? null !== OB && void 0 !== OB ? OB : iB : await oB();
```

#### 752. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14167` → after: `L14167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14167) · [Before (L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14167)

```diff
-           const rB = null !== (mj = null === qB || void 0 === qB ? void 0 : qB.files) && void 0 !== mj ? mj : Gz.current,
+           const zB = null !== (gI = null === YB || void 0 === YB ? void 0 : YB.files) && void 0 !== gI ? gI : UZ.current,
```
