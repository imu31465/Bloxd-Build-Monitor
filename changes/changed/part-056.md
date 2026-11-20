# Changed — Bundle Modifications Report (Part 056 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `56 / 115` (**439** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 055](part-055.md) · [Part 057 →](part-057.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/76.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/76.js` (408 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5)

#### 97. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1735)

```diff
-                                 fT = [gc(KT[0], OT[0], yT) / 255, gc(KT[1], OT[1], yT) / 255, gc(KT[2], OT[2], yT) / 255, gc(null !== (lT = KT[3]) && void 0 !== lT ? lT : 1, null !== (MT = OT[3]) && void 0 !== MT ? MT : 1, yT)];
+                                 Aq = [Rg(Oq[0], mq[0], xq) / 255, Rg(Oq[1], mq[1], xq) / 255, Rg(Oq[2], mq[2], xq) / 255, Rg(null !== (Yq = Oq[3]) && void 0 !== Yq ? Yq : 1, null !== (lq = mq[3]) && void 0 !== lq ? lq : 1, xq)];
```

#### 98. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1766)

```diff
-                                 return lT(cT(MT), cT(MT + 1), KT > 0 ? (kT - TT[MT].at) / KT : 1)
+                                 return Yq(gq(lq), gq(lq + 1), Oq > 0 ? (Eq - qq[lq].at) / Oq : 1)
```

#### 99. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1781)

```diff
-                               TT.pos[KT] += TT.dir[KT] * lT, TT.dir[KT] += (null !== (MT = kT[KT]) && void 0 !== MT ? MT : 0) * cT
+                               qq.pos[Oq] += qq.dir[Oq] * Yq, qq.dir[Oq] += (null !== (lq = Eq[Oq]) && void 0 !== lq ? lq : 0) * gq
```

#### 100. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1791)

```diff
-                             return `[${TT.map(ic).join(", ")}]`
+                             return `[${qq.map(Cg).join(", ")}]`
```

#### 101. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1795-L1796` → after: `L1795-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1795-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1795-L1796) · [Before (L1795-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1795-L1796)

```diff
-                             const cT = `${kT}    `;
-                             return `[\n${(Uc(TT)?TT.map((TT=>{const kT=[`${cT}    timeFraction: ${ic(TT.timeFraction)},`,`${cT}    minColor: ${qc(TT.minColor)},`];return TT.maxColor&&kT.push(`${cT}    maxColor: ${qc(TT.maxColor)},`),`${cT}{\n${kT.join("\n")}\n${cT}},`})):TT.map(( … [truncated]
+                             const gq = `${Eq}    `;
+                             return `[\n${(Ug(qq)?qq.map((qq=>{const Eq=[`${gq}    timeFraction: ${Cg(qq.timeFraction)},`,`${gq}    minColor: ${Ig(qq.minColor)},`];return qq.maxColor&&Eq.push(`${gq}    maxColor: ${Ig(qq.maxColor)},`),`${gq}{\n${Eq.join("\n")}\n${gq}},`})):qq.map(( … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1803)

```diff
-                             }, `))).join("\n")}\n${kT}]`
+                             }, `))).join("\n")}\n${Eq}]`
```

#### 103. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1810)

```diff
-                             return `${kT?"song":"sound"}:${TT}`
+                             return `${Eq?"song":"sound"}:${qq}`
```

#### 104. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1872)

```diff
-                             }), Promise.all([cT.e(216), cT.e(241)]).then((() => cT(39432))).then((cT => {
+                             }), Promise.all([gq.e(217), gq.e(241)]).then((() => gq(39569))).then((gq => {
```

#### 105. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1887)

```diff
-                                   }) : (yl = null !== (kT = null === (cT = Ml.track) || void 0 === cT ? void 0 : cT.duration) && void 0 !== kT ? kT : 0, Il({
+                                   }) : (mY = null !== (Eq = null === (gq = YY.track) || void 0 === gq ? void 0 : gq.duration) && void 0 !== Eq ? Eq : 0, cY({
```

#### 106. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1893` → after: `L1893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1893) · [Before (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1893)

```diff
-                               console.error(`Could not play docs sound ${TT}`, kT), MT === Ol && xl({
+                               console.error(`Could not play docs sound ${qq}`, Eq), lq === OY && AY({
```

#### 107. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1904` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1904) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1904)

```diff
-                             if ("playing" === TT.status && Kl) return yl = Kl.kN(), Kl.pause(), void Il({
+                             if ("playing" === qq.status && lY) return mY = lY.Py(), lY.pause(), void cY({
```

#### 108. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1917` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1917) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1917)

```diff
-                             return Kl && "playing" === (null === (TT = Ml.track) || void 0 === TT ? void 0 : TT.status) ? Kl.kN() : yl
+                             return lY && "playing" === (null === (qq = YY.track) || void 0 === qq ? void 0 : qq.status) ? lY.Py() : mY
```

#### 109. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1939)

```diff
-                               return Sl ??= Promise.all([cT.e(70), cT.e(73), cT.e(72), cT.e(71), cT.e(196), cT.e(97), cT.e(221)]).then((() => cT(39426))), Sl.then((cT => {
+                               return HY ??= Promise.all([gq.e(70), gq.e(73), gq.e(72), gq.e(71), gq.e(197), gq.e(97), gq.e(221)]).then((() => gq(39563))), HY.then((gq => {
```

#### 110. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1955` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1955) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1955)

```diff
-                                 return `${TT}-${kT}`
+                                 return `${qq}-${Eq}`
```

#### 111. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1958` → after: `L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1958) · [Before (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1958)

```diff
-                             return null === cT ? null : `${Ec}/${cT}.webp`
+                             return null === gq ? null : `${zg}/${gq}.webp`
```

#### 112. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1971` → after: `L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1971) · [Before (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1971)

```diff
-                             if ("icons" === kT && dk(yT)) return (0, vT.jsx)(ac.e, {
+                             if ("icons" === Eq && LE(xq)) return (0, aq.jsx)(Pg.d, {
```

#### 113. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1977)

```diff
-                             if ("icons" === kT) IT = null !== (AT = null === MT || void 0 === MT ? void 0 : MT.getIngameIconUrl(yT)) && void 0 !== AT ? AT : null;
+                             if ("icons" === Eq) uq = null !== (Bq = null === lq || void 0 === lq ? void 0 : lq.getIngameIconUrl(xq)) && void 0 !== Bq ? Bq : null;
```

#### 114. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1980-L1981` → after: `L1980-L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1980-L1981) · [Before (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1980-L1981)

```diff
-                               IT = null !== (CT = null === MT || void 0 === MT ? void 0 : MT.getParticleTextureUrl(null !== (jT = null === (tT = dc(yT)) || void 0 === tT ? void 0 : tT.texture) && void 0 !== jT ? jT : yT)) && void 0 !== CT ? CT : null
-                             } else "skins" === kT && (IT = null !== OT && void 0 !== OT ? OT : Fl.test(yT) ? `/textures/charSkins/previews/${yT}_preview.png` : null);
+                               uq = null !== (Wq = null === lq || void 0 === lq ? void 0 : lq.getParticleTextureUrl(null !== (Nq = null === (Vq = Lg(xq)) || void 0 === Vq ? void 0 : Vq.texture) && void 0 !== Nq ? Nq : xq)) && void 0 !== Wq ? Wq : null
+                             } else "skins" === Eq && (uq = null !== mq && void 0 !== mq ? mq : QY.test(xq) ? `/textures/charSkins/previews/${xq}_preview.png` : null);
```

#### 115. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1990)

```diff
-                               srcSet: IT === OT ? `${IT} 2x` : void 0,
+                               srcSet: uq === mq ? `${uq} 2x` : void 0,
```

#### 116. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1994` → after: `L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L1994) · [Before (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L1994)

```diff
-                                 console.warn(`Docs gallery: could not load ${IT}`), xT(!0)
+                                 console.warn(`Docs gallery: could not load ${uq}`), cq(!0)
```

#### 117. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2018` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2018) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2018)

```diff
-                               "aria-label": MT ? `Pause ${kT.name}` : `Play ${kT.name}`,
+                               "aria-label": lq ? `Pause ${Eq.name}` : `Play ${Eq.name}`,
```

#### 118. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2055)

```diff
-                                 placeholder: `Filter ${cT.length} names\u2026`,
+                                 placeholder: `Filter ${gq.length} names\u2026`,
```

#### 119. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2063` → after: `L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2063) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2063)

```diff
-                                 className: KT()("DocsGalleryGrid", `Kind-${kT}`, {
+                                 className: Oq()("DocsGalleryGrid", `Kind-${Eq}`, {
```

#### 120. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2077)

```diff
-                                     title: `Play "${TT.name}" in the playground and copy its name`,
+                                     title: `Play "${qq.name}" in the playground and copy its name`,
```

#### 121. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2106` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2106) · [Before (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2106)

```diff
-                                     title: `Copy "${TT.name}"`,
+                                     title: `Copy "${qq.name}"`,
```

#### 122. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2179)

```diff
-                                 return (0, vT.jsxs)(OT.e, {
+                                 return (0, aq.jsxs)(mq.c, {
```

#### 123. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2213` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2213) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2213)

```diff
-                                   backgroundImage: `url("${kT.top}")`
+                                   backgroundImage: `url("${Eq.top}")`
```

#### 124. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2218)

```diff
-                                   backgroundImage: `url("${kT.left}")`
+                                   backgroundImage: `url("${Eq.left}")`
```

#### 125. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2223` → after: `L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2223) · [Before (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2223)

```diff
-                                   backgroundImage: `url("${kT.right}")`
+                                   backgroundImage: `url("${Eq.right}")`
```

#### 126. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2239)

```diff
-                                 console.warn(`Docs catalogue: could not load ${kT}`), MT(!0)
+                                 console.warn(`Docs catalogue: could not load ${Eq}`), lq(!0)
```

#### 127. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2250)

```diff
-                               OT = (0, yT.s)(),
+                               mq = (0, xq.q)(),
```

#### 128. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2258` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2258) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2258)

```diff
-                               const TT = (0, PT.o)(OT.hash),
+                               const qq = (0, rq.s)(mq.hash),
```

#### 129. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2302)

```diff
-                                           title: `Show only ${kT} with ${TT.meaning} variants`,
+                                           title: `Show only ${Eq} with ${qq.meaning} variants`,
```

#### 130. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2325-L2326` → after: `L2325-L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2325-L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2325-L2326) · [Before (L2325-L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2325-L2326)

```diff
-                                 placeholder: `Search ${cT.entries.length} ${kT}\u2026`,
-                                 label: `Search ${kT}`,
+                                 placeholder: `Search ${gq.entries.length} ${Eq}\u2026`,
+                                 label: `Search ${Eq}`,
```

#### 131. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2388-L2390` → after: `L2388-L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2388-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2388-L2390) · [Before (L2388-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2388-L2390)

```diff
-                           var Vl = cT(4789),
-                             El = cT(1602);
-                           const Zl = .95 * Vl.b;
+                           var TY = gq(4643),
+                             zY = gq(1566);
+                           const SY = .95 * TY.e;
```

#### 132. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2406)

```diff
-                             const cT = `${"#".repeat(kT)} `,
+                             const gq = `${"#".repeat(Eq)} `,
```

#### 133. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2409` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2409) · [Before (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2409)

```diff
-                             for (const KT of TT.split("\n")) ul(KT) ? MT = !MT : !MT && KT.startsWith(cT) && lT.push(KT.slice(cT.length).trim());
+                             for (const Oq of qq.split("\n")) pY(Oq) ? lq = !lq : !lq && Oq.startsWith(gq) && Yq.push(Oq.slice(gq.length).trim());
```

#### 134. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2434` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2434) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2434)

```diff
-                                       const lT = null !== (cT = dl(TT, 2)[0]) && void 0 !== cT ? cT : "";
+                                       const Yq = null !== (gq = LY(qq, 2)[0]) && void 0 !== gq ? gq : "";
```

#### 135. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2448` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2448) · [Before (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2448)

```diff
-                                         return KT = null !== (kT = cT.at(-1)) && void 0 !== kT ? kT : KT, {
+                                         return Oq = null !== (Eq = gq.at(-1)) && void 0 !== Eq ? Eq : Oq, {
```

#### 136. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2457` → after: `L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2457) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2457)

```diff
-                                   groups: cT.length > 1 ? cT : []
+                                   groups: gq.length > 1 ? gq : []
```

#### 137. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2465` → after: `L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2465) · [Before (L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2465)

```diff
-                                 const cT = (0, Vl.t)(lT.slug, kT);
+                                 const gq = (0, TY.u)(Yq.slug, Eq);
```

#### 138. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2467)

```diff
-                                   const TT = `${lT.id}#${(0,PT.p)(MT)}`;
+                                   const qq = `${Yq.id}#${(0,rq.t)(lq)}`;
```

#### 139. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2478-L2479` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2478-L2479) · [Before (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2478-L2479)

```diff
-                                   path: (0, Vl.p)(kT.slug),
-                                   markdown: `# ${kT.title}\n\n${this.resolveLinks(kT,Ll(kT))}\n`,
+                                   path: (0, TY.s)(Eq.slug),
+                                   markdown: `# ${Eq.title}\n\n${this.resolveLinks(Eq,JY(Eq))}\n`,
```

#### 140. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2485)

```diff
-                               return `${this.origin}${TT}`
+                               return `${this.origin}${qq}`
```

#### 141. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2495` → after: `L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2495) · [Before (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2495)

```diff
-                               }]).filter((TT => TT.markdown.length > Vl.b))))
+                               }]).filter((qq => qq.markdown.length > TY.e))))
```

#### 142. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2498-L2499` → after: `L2498-L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2498-L2499) · [Before (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2498-L2499)

```diff
-                               const cT = kT && this.partPaths.get(`${TT.id}#${kT}`) || (0, Vl.p)(TT.slug);
-                               return this.url(kT ? `${cT}#${kT}` : cT)
+                               const gq = Eq && this.partPaths.get(`${qq.id}#${Eq}`) || (0, TY.s)(qq.slug);
+                               return this.url(Eq ? `${gq}#${Eq}` : gq)
```

#### 143. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2504-L2505` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2504-L2505) · [Before (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2504-L2505)

```diff
-                                 const MT = null !== (lT = RT(cT)) && void 0 !== lT ? lT : this.samePageTarget(TT, cT);
-                                 return MT ? `](${this.markdownUrl(MT.page,MT.anchor)})` : kT
+                                 const lq = null !== (Yq = Rq(gq)) && void 0 !== Yq ? Yq : this.samePageTarget(qq, gq);
+                                 return lq ? `](${this.markdownUrl(lq.page,lq.anchor)})` : Eq
```

#### 144. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2509)

```diff
-                               const cT = (0, PT.p)(kT.slice(1));
+                               const gq = (0, rq.t)(Eq.slice(1));
```

#### 145. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2521)

```diff
-                                   return cT === lT ? cT : `${cT} to ${lT}`
+                                   return gq === Yq ? gq : `${gq} to ${Yq}`
```

#### 146. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2524-L2525` → after: `L2524-L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2524-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2524-L2525) · [Before (L2524-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2524-L2525)

```diff
-                                 OT = MT ? `It covers ${MT}. ` : "",
-                                 yT = `Part ${cT+1} of ${lT} of [${TT.title}](${this.url((0,Vl.p)(TT.slug))}). ${OT}[llms.txt](${this.url(Vl.e)}) lists every part.`;
+                                 mq = lq ? `It covers ${lq}. ` : "",
+                                 xq = `Part ${gq+1} of ${Yq} of [${qq.title}](${this.url((0,TY.s)(qq.slug))}). ${mq}[llms.txt](${this.url(TY.i)}) lists every part.`;
```

#### 147. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2527` → after: `L2527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2527) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2527)

```diff
-                                 path: (0, Vl.t)(TT.slug, cT),
+                                 path: (0, TY.u)(qq.slug, gq),
```

#### 148. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2529)

```diff
-                                 markdown: `# ${TT.title}, part ${cT+1} of ${lT}\n\n${yT}\n\n${this.resolveLinks(TT,KT)}\n`
+                                 markdown: `# ${qq.title}, part ${gq+1} of ${Yq}\n\n${xq}\n\n${this.resolveLinks(qq,Oq)}\n`
```

#### 149. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2533)

```diff
-                               const kT = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that … [truncated]
+                               const Eq = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2535` → after: `L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2535) · [Before (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2535)

```diff
-                                 kT.push("", `## ${cT.title}`, "");
+                                 Eq.push("", `## ${gq.title}`, "");
```

#### 151. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2542-L2544` → after: `L2542-L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2542-L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2542-L2544) · [Before (L2542-L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2542-L2544)

```diff
-                                     KT = `About ${gl(cT.markdown.length)} tokens${MT.length>0?`, in ${MT.length} parts:`:"."}`;
-                                   kT.push(`- [${lT.title}](${this.url(cT.path)}): ${lT.summary} ${KT}`), MT.forEach(((TT, cT) => {
-                                     kT.push(`  - [Part ${cT+1}${TT.label?`: ${TT.label}`:""}](${this.url(TT.path)})`)
+                                     Oq = `About ${RY(gq.markdown.length)} tokens${lq.length>0?`, in ${lq.length} parts:`:"."}`;
+                                   Eq.push(`- [${Yq.title}](${this.url(gq.path)}): ${Yq.summary} ${Oq}`), lq.forEach(((qq, gq) => {
+                                     Eq.push(`  - [Part ${gq+1}${qq.label?`: ${qq.label}`:""}](${this.url(qq.path)})`)
```

#### 152. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2548)

```diff
-                               return kT.push("", "## Optional", "", `- [Every page in one file](${this.url(Vl.c)}): About ${gl(TT.length)} tokens, for a model with a large context window.`, ""), kT.join("\n")
+                               return Eq.push("", "## Optional", "", `- [Every page in one file](${this.url(TY.g)}): About ${RY(qq.length)} tokens, for a model with a large context window.`, ""), Eq.join("\n")
```

#### 153. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2558-L2559` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2559) · [Before (L2558-L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2558-L2559)

```diff
-                                   [Vl.e, kT],
-                                   [Vl.c, TT]
+                                   [TY.g, qq]
```

#### 154. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2570` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2570) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2570)

```diff
-                             return `${Math.max(1,Math.round(TT/4e3))}K`
+                             return `${Math.max(1,Math.round(qq/4e3))}K`
```

#### 155. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2575)

```diff
-                             return Ul ??= new Rl(ET, El.b), Ul
+                             return UY ??= new kY(Sq, zY.c), UY
```

#### 156. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2586` → after: `L2586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2586) · [Before (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2586)

```diff
-                             return Yl().getPage(TT.id).parts.length > 0 ? `Read ${Vl.g}, then the parts of the Bloxd Code API's ${TT.title} page it lists, so I can ask questions about it.` : `Read ${El.b}${(0,Vl.p)(TT.slug)} so I can ask questions about it. ${Vl.g} lists every pa … [truncated]
+                             return FY().getPage(qq.id).parts.length > 0 ? `Read ${TY.l}, then the parts of the Bloxd Code API's ${qq.title} page it lists, so I can ask questions about it.` : `Read ${zY.c}${(0,TY.s)(qq.slug)} so I can ask questions about it. ${TY.l} lists every pa … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2609` → after: `L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2609) · [Before (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2609)

```diff
-                                 href: `${TT.url}${encodeURIComponent(Wl(kT))}`,
+                                 href: `${qq.url}${encodeURIComponent(XY(Eq))}`,
```

#### 158. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2622` → after: `L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2622) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2622)

```diff
-                             return `#${[0,1,2].map((kT=>Math.round(Math.min(255,Math.max(0,TT[kT]))).toString(16).padStart(2,"0"))).join("")}`
+                             return `#${[0,1,2].map((Eq=>Math.round(Math.min(255,Math.max(0,qq[Eq]))).toString(16).padStart(2,"0"))).join("")}`
```

#### 159. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2647)

```diff
-                                   children: KT === OT ? KT : `${KT}\u2013${OT}`
+                                   children: Oq === mq ? Oq : `${Oq}\u2013${mq}`
```

#### 160. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2657` → after: `L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2657) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2657)

```diff
-                                   "aria-label": `Minimum ${kT.toLowerCase()}`,
+                                   "aria-label": `Minimum ${Eq.toLowerCase()}`,
```

#### 161. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2668)

```diff
-                                   "aria-label": `Maximum ${kT.toLowerCase()}`,
+                                   "aria-label": `Maximum ${Eq.toLowerCase()}`,
```

#### 162. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2730` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2730) · [Before (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2730)

```diff
-                                   "aria-label": `Colour ${kT+1}`,
+                                   "aria-label": `Colour ${Eq+1}`,
```

#### 163. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2756` → after: `L2756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2756) · [Before (L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2756)

```diff
-                                 const lT = null !== (cT = TT.maxColor) && void 0 !== cT ? cT : TT.minColor;
+                                 const Yq = null !== (gq = qq.maxColor) && void 0 !== gq ? gq : qq.minColor;
```

#### 164. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2765)

```diff
-                                       background: `linear-gradient(90deg, ${pl(TT.minColor)}, ${pl(lT)})`
+                                       background: `linear-gradient(90deg, ${KY(qq.minColor)}, ${KY(Yq)})`
```

#### 165. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2770` → after: `L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2770) · [Before (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2770)

```diff
-                                     "aria-label": `Minimum colour at ${Math.round(100*TT.timeFraction)}%`,
+                                     "aria-label": `Minimum colour at ${Math.round(100*qq.timeFraction)}%`,
```

#### 166. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2780` → after: `L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2780) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2780)

```diff
-                                     "aria-label": `Maximum colour at ${Math.round(100*TT.timeFraction)}%`,
+                                     "aria-label": `Maximum colour at ${Math.round(100*qq.timeFraction)}%`,
```

#### 167. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2802` → after: `L2802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2802) · [Before (L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2802)

```diff
-                                 yT = `${MT}|${KT}|${OT}`;
+                                 xq = `${lq}|${Oq}|${mq}`;
```

#### 168. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2809` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2809) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2809)

```diff
-                               return IT ? (IT.imageSmoothingEnabled = !1, IT.drawImage(TT, 0, 0, xT.width, xT.height), IT.globalCompositeOperation = "multiply", IT.fillStyle = `rgb(${MT/31*255}, ${KT/31*255}, ${OT/31*255})`, IT.fillRect(0, 0, xT.width, xT.height), IT.globalCompos … [truncated]
+                               return uq ? (uq.imageSmoothingEnabled = !1, uq.drawImage(qq, 0, 0, cq.width, cq.height), uq.globalCompositeOperation = "multiply", uq.fillStyle = `rgb(${lq/31*255}, ${Oq/31*255}, ${mq/31*255})`, uq.fillRect(0, 0, cq.width, cq.height), uq.globalCompos … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2847` → after: `L2847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2847) · [Before (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2847)

```diff
-                                 console.warn(`Particle preview: could not load the texture ${cT}`)
+                                 console.warn(`Particle preview: could not load the texture ${gq}`)
```

#### 170. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2936` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2936) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2936)

```diff
-                                       case Xc.f.OneOne:
+                                       case Gg.h.OneOne:
```

#### 171. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2941` → after: `L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2941) · [Before (L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2941)

```diff
-                                       case Xc.f.Add:
+                                       case Gg.h.Add:
```

#### 172. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2946` → after: `L2946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2946) · [Before (L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2946)

```diff
-                                       case Xc.f.Multiply:
+                                       case Gg.h.Multiply:
```

#### 173. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2951` → after: `L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2951) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2951)

```diff
-                                       case Xc.f.MultiplyAdd:
+                                       case Gg.h.MultiplyAdd:
```

#### 174. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L2973)

```diff
-                                     kT.globalAlpha = TT.usesAlpha ? Math.min(1, Math.max(0, fT)) : 1, wT ? kT.drawImage(cT.get(wT, KT, OT, yT), MT.x - xT / 2, MT.y - xT / 2, xT, xT) : (kT.fillStyle = `rgb(${255*KT}, ${255*OT}, ${255*yT})`, kT.fillRect(MT.x - xT / 2, MT.y - xT / 2 … [truncated]
+                                     Eq.globalAlpha = qq.usesAlpha ? Math.min(1, Math.max(0, Aq)) : 1, vq ? Eq.drawImage(gq.get(vq, Oq, mq, xq), lq.x - cq / 2, lq.y - cq / 2, cq, cq) : (Eq.fillStyle = `rgb(${255*Oq}, ${255*mq}, ${255*xq})`, Eq.fillRect(lq.x - cq / 2, lq.y - cq / 2 … [truncated]
```

#### 175. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3000` → after: `L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3000) · [Before (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3000)

```diff
-                               "aria-label": `Preview of a ${kT.texture} particle effect. Drag to turn the view.`
+                               "aria-label": `Preview of a ${Eq.texture} particle effect. Drag to turn the view.`
```

#### 176. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3005` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3005) · [Before (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3005)

```diff
-                               mode: Xc.f.OneOne,
+                               mode: Gg.h.OneOne,
```

#### 177. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3008` → after: `L3008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3008) · [Before (L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3008)

```diff
-                               mode: Xc.f.Standard,
+                               mode: Gg.h.Standard,
```

#### 178. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3011` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3011) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3011)

```diff
-                               mode: Xc.f.Add,
+                               mode: Gg.h.Add,
```

#### 179. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3014)

```diff
-                               mode: Xc.f.Multiply,
+                               mode: Gg.h.Multiply,
```

#### 180. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3017` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3017) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3017)

```diff
-                               mode: Xc.f.MultiplyAdd,
+                               mode: Gg.h.MultiplyAdd,
```

#### 181. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3032)

```diff
-                                   const kT = "example" === TT ? Lc : dc(TT);
+                                   const Eq = "example" === qq ? Jg : Lg(qq);
```

#### 182. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3051-L3054` → after: `L3051-L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3051-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3051-L3054) · [Before (L3051-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3051-L3054)

```diff
-                                   if (null !== kT) return `${Tl}    presetId: "${kT}",\n${kl}\n})`;
-                                   const cT = TT.velocityGradients.map((TT => `        {\n            timeFraction: ${ic(TT.timeFraction)},\n            factor: ${ic(TT.factor)},\n            factor2: ${ic(TT.factor2)},\n        },`)),
-                                     lT = [`    dir1: ${qc(TT.dir1)},`, `    dir2: ${qc(TT.dir2)},`, kl, `    texture: "${TT.texture}",`, `    minLifeTime: ${ic(TT.minLifeTime)},`, `    maxLifeTime: ${ic(TT.maxLifeTime)},`, `    minEmitPower: ${ic(TT.minEmitPower)},`, `    maxEmit … [truncated]
-                                   return void 0 !== TT.hideDist && lT.push(`    hideDist: ${ic(TT.hideDist)},`), `${Tl}${lT.join("\n")}\n})`
+                                   if (null !== Eq) return `${Dg}    presetId: "${Eq}",\n${qY}\n})`;
+                                   const gq = qq.velocityGradients.map((qq => `        {\n            timeFraction: ${Cg(qq.timeFraction)},\n            factor: ${Cg(qq.factor)},\n            factor2: ${Cg(qq.factor2)},\n        },`)),
+                                     Yq = [`    dir1: ${Ig(qq.dir1)},`, `    dir2: ${Ig(qq.dir2)},`, qY, `    texture: "${qq.texture}",`, `    minLifeTime: ${Cg(qq.minLifeTime)},`, `    maxLifeTime: ${Cg(qq.maxLifeTime)},`, `    minEmitPower: ${Cg(qq.minEmitPower)},`, `    maxEmit … [truncated]
+                                   return void 0 !== qq.hideDist && Yq.push(`    hideDist: ${Cg(qq.hideDist)},`), `${Dg}${Yq.join("\n")}\n})`
```

#### 183. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3056` → after: `L3056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3056) · [Before (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3056)

```diff
-                                 PT = OT.includes(xT.texture) ? OT : [...OT, xT.texture];
+                                 rq = mq.includes(cq.texture) ? mq : [...mq, cq.texture];
```

#### 184. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3097` → after: `L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3097) · [Before (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3097)

```diff
-                                     value: null !== AT && void 0 !== AT ? AT : "custom",
+                                     value: null !== Bq && void 0 !== Bq ? Bq : "custom",
```

#### 185. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3108` → after: `L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3108) · [Before (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3108)

```diff
-                                     }), uc.c.map((TT => (0, vT.jsx)("option", {
+                                     }), pg.d.map((qq => (0, aq.jsx)("option", {
```

#### 186. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3119` → after: `L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3119) · [Before (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3119)

```diff
-                                       textureUrl: null !== (cT = null === yT || void 0 === yT ? void 0 : yT.getParticleTextureUrl(xT.texture)) && void 0 !== cT ? cT : null,
+                                       textureUrl: null !== (gq = null === xq || void 0 === xq ? void 0 : xq.getParticleTextureUrl(cq.texture)) && void 0 !== gq ? gq : null,
```

#### 187. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3165` → after: `L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3165) · [Before (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3165)

```diff
-                                           const cT = null !== (kT = null === yT || void 0 === yT ? void 0 : yT.getParticleTextureUrl(TT)) && void 0 !== kT ? kT : null;
+                                           const gq = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.getParticleTextureUrl(qq)) && void 0 !== Eq ? Eq : null;
```

#### 188. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3243` → after: `L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3243) · [Before (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3243)

```diff
-                                       value: null !== (MT = xT.gravity[1]) && void 0 !== MT ? MT : 0,
+                                       value: null !== (lq = cq.gravity[1]) && void 0 !== lq ? lq : 0,
```

#### 189. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3247` → after: `L3247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3247) · [Before (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3247)

```diff
-                                           gravity: [null !== (kT = xT.gravity[0]) && void 0 !== kT ? kT : 0, TT, null !== (cT = xT.gravity[2]) && void 0 !== cT ? cT : 0]
+                                           gravity: [null !== (Eq = cq.gravity[0]) && void 0 !== Eq ? Eq : 0, qq, null !== (gq = cq.gravity[2]) && void 0 !== gq ? gq : 0]
```

#### 190. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3292-L3293` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3292-L3293) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3292-L3293)

```diff
-                           var xM = cT(4450),
-                             IM = cT(1921);
+                           var Al = gq(4294),
+                             cl = gq(1876);
```

#### 191. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3306-L3307` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3306-L3307) · [Before (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3306-L3307)

```diff
-                               fT = null !== (kT = null === (cT = MT.style) || void 0 === cT ? void 0 : cT.fontSize) && void 0 !== kT ? kT : "1.8em",
-                               xT = (0, uk.Jb)(MT.style);
+                               Aq = null !== (Eq = null === (gq = lq.style) || void 0 === gq ? void 0 : gq.fontSize) && void 0 !== Eq ? Eq : "1.8em",
+                               cq = (0, pE.Tb)(lq.style);
```

#### 192. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3317` → after: `L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3317) · [Before (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3317)

```diff
-                               title: yT ? void 0 : `No Bloxd icon, item or block is called "${MT.icon}"`,
+                               title: xq ? void 0 : `No Bloxd icon, item or block is called "${lq.icon}"`,
```

#### 193. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3322-L3323` → after: `L3322-L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3322-L3323) · [Before (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3322-L3323)

```diff
-                                   maskImage: `url("${yT}")`,
-                                   WebkitMaskImage: `url("${yT}")`
+                                   maskImage: `url("${xq}")`,
+                                   WebkitMaskImage: `url("${xq}")`
```

#### 194. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3346` → after: `L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3346) · [Before (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3346)

```diff
-                               OT.length > 0 && (MT.push((0, vT.jsx)(IM.b, {
+                               mq.length > 0 && (lq.push((0, aq.jsx)(cl.c, {
```

#### 195. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3348` → after: `L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3348) · [Before (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3348)

```diff
-                               }, `run-${TT}`)), OT = [])
+                               }, `run-${qq}`)), mq = [])
```

#### 196. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3354` → after: `L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3354) · [Before (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3354)

```diff
-                               }, `icon-${kT}`)))
+                               }, `icon-${Eq}`)))
```

#### 197. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3367)

```diff
-                             return kT.startsWith("#") ? kT : "#000000"
+                             return Eq.startsWith("#") ? Eq : "#000000"
```

#### 198. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3381` → after: `L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3381) · [Before (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3381)

```diff
-                                 "aria-label": `${cT} picker`,
+                                 "aria-label": `${gq} picker`,
```

#### 199. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3437` → after: `L3437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3437) · [Before (L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3437)

```diff
-                                     children: "bloxd" === TT ? `Bloxd icons (${xM.e.length})` : `Font Awesome (${cT.length})`
+                                     children: "bloxd" === qq ? `Bloxd icons (${Al.e.length})` : `Font Awesome (${gq.length})`
```

#### 200. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3464` → after: `L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3464) · [Before (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3464)

```diff
-                                     children: "fontAwesome" === yT ? (0, vT.jsx)(ac.e, {
+                                     children: "fontAwesome" === xq ? (0, aq.jsx)(Pg.d, {
```

#### 201. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3491)

```diff
-                             } = kT, yT = TT => "" !== TT || kT.isRequired ? TT : void 0;
+                             } = Eq, xq = qq => "" !== qq || Eq.isRequired ? qq : void 0;
```

#### 202. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3495` → after: `L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3495) · [Before (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3495)

```diff
-                                   value: String(null !== cT && void 0 !== cT ? cT : ""),
+                                   value: String(null !== gq && void 0 !== gq ? gq : ""),
```

#### 203. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3503` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3503) · [Before (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3503)

```diff
-                                   value: String(null !== cT && void 0 !== cT ? cT : ""),
+                                   value: String(null !== gq && void 0 !== gq ? gq : ""),
```

#### 204. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3512` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3512) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3512)

```diff
-                                   value: String(null !== cT && void 0 !== cT ? cT : ""),
+                                   value: String(null !== gq && void 0 !== gq ? gq : ""),
```

#### 205. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3523` → after: `L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3523) · [Before (L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3523)

```diff
-                                   value: String(null !== cT && void 0 !== cT ? cT : ""),
+                                   value: String(null !== gq && void 0 !== gq ? gq : ""),
```

#### 206. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3530` → after: `L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3530) · [Before (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3530)

```diff
-                                 const TT = Array.isArray(cT) ? cT : [],
+                                 const qq = Array.isArray(gq) ? gq : [],
```

#### 207. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3532` → after: `L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3532) · [Before (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3532)

```diff
-                                     MT(TT.length > 0 ? TT : void 0)
+                                     lq(qq.length > 0 ? qq : void 0)
```

#### 208. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3540` → after: `L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3540) · [Before (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3540)

```diff
-                                       label: `${OT} ${lT+1}`,
+                                       label: `${mq} ${Yq+1}`,
```

#### 209. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3542` → after: `L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3542) · [Before (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3542)

```diff
-                                         kT(TT.map(((TT, kT) => kT === lT ? cT : TT)))
+                                         Eq(qq.map(((qq, Eq) => Eq === Yq ? gq : qq)))
```

#### 210. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3547` → after: `L3547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3547) · [Before (L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3547)

```diff
-                                       "aria-label": `Remove colour ${lT+1}`,
+                                       "aria-label": `Remove colour ${Yq+1}`,
```

#### 211. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3560` → after: `L3560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3560) · [Before (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3560)

```diff
-                                       kT([...TT, null !== (cT = TT.at(-1)) && void 0 !== cT ? cT : "#ffffff"])
+                                       Eq([...qq, null !== (gq = qq.at(-1)) && void 0 !== gq ? gq : "#ffffff"])
```

#### 212. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3570` → after: `L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3570) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3570)

```diff
-                                 const TT = "number" === typeof cT ? cT : Number(null !== (fT = kT.defaultText) && void 0 !== fT ? fT : 0);
+                                 const qq = "number" === typeof gq ? gq : Number(null !== (Aq = Eq.defaultText) && void 0 !== Aq ? Aq : 0);
```

#### 213. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3590` → after: `L3590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3590) · [Before (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3590)

```diff
-                                   value: String(null !== cT && void 0 !== cT ? cT : ""),
+                                   value: String(null !== gq && void 0 !== gq ? gq : ""),
```

#### 214. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3605` → after: `L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3605) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3605)

```diff
-                                   value: String(null !== cT && void 0 !== cT ? cT : ""),
+                                   value: String(null !== gq && void 0 !== gq ? gq : ""),
```

#### 215. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3619` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3619) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3619)

```diff
-                                 error: `Not valid JSON yet: ${cT.message}`
+                                 error: `Not valid JSON yet: ${gq.message}`
```

#### 216. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3637` → after: `L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3637) · [Before (L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3637)

```diff
-                               Om: OT,
+                               OJ: mq,
```

#### 217. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3660` → after: `L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3660) · [Before (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3660)

```diff
-                                 "aria-label": `Edit part ${cT+1}: ${Lk[CT]}`,
+                                 "aria-label": `Edit part ${gq+1}: ${JE[Wq]}`,
```

#### 218. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3728)

```diff
-                                           "aria-label": `Reset ${TT.label.toLowerCase()} to default`,
+                                           "aria-label": `Reset ${qq.label.toLowerCase()} to default`,
```

#### 219. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3830` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3830) · [Before (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3830)

```diff
-                                   return null === (kT = DT.current) || void 0 === kT ? void 0 : kT.querySelector(`[data-focus-key="${TT}"]`)
+                                   return null === (Eq = Pq.current) || void 0 === Eq ? void 0 : Eq.querySelector(`[data-focus-key="${qq}"]`)
```

#### 220. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3833)

```diff
-                               null === (TT = cT && !cT.disabled ? cT : kT(QT.fallback)) || void 0 === TT || TT.focus(), ST(null)
+                               null === (qq = gq && !gq.disabled ? gq : Eq(Hq.fallback)) || void 0 === qq || qq.focus(), oq(null)
```

#### 221. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3840)

```diff
-                                   key: `edit-${Math.min(TT,cT.length-2)}`,
+                                   key: `edit-${Math.min(qq,gq.length-2)}`,
```

#### 222. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3849-L3850` → after: `L3849-L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3849-L3850) · [Before (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3849-L3850)

```diff
-                                   key: `${kT<0?"up":"down"}-${TT+kT}`,
-                                   fallback: `edit-${TT+kT}`
+                                   key: `${Eq<0?"up":"down"}-${qq+Eq}`,
+                                   fallback: `edit-${qq+Eq}`
```

#### 223. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3899-L3900` → after: `L3899-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3899-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3899-L3900) · [Before (L3899-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3899-L3900)

```diff
-                                           "data-focus-key": `edit-${kT}`,
-                                           "aria-label": `Edit part ${kT+1}, ${Lk[lT]}`,
+                                           "data-focus-key": `edit-${Eq}`,
+                                           "aria-label": `Edit part ${Eq+1}, ${JE[Yq]}`,
```

#### 224. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3919-L3920` → after: `L3919-L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3919-L3920) · [Before (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3919-L3920)

```diff
-                                             "aria-label": `Move part ${kT+1} up`,
-                                             "data-focus-key": `up-${kT}`,
+                                             "aria-label": `Move part ${Eq+1} up`,
+                                             "data-focus-key": `up-${Eq}`,
```

#### 225. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3931-L3932` → after: `L3931-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3931-L3932) · [Before (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3931-L3932)

```diff
-                                             "aria-label": `Move part ${kT+1} down`,
-                                             "data-focus-key": `down-${kT}`,
+                                             "aria-label": `Move part ${Eq+1} down`,
+                                             "data-focus-key": `down-${Eq}`,
```

#### 226. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L3943` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L3943) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L3943)

```diff
-                                             "aria-label": `Remove part ${kT+1}`,
+                                             "aria-label": `Remove part ${Eq+1}`,
```

#### 227. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4027` → after: `L4027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4027) · [Before (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4027)

```diff
-                                     code: `api.sendMessage(playerId, ${aT})`
+                                     code: `api.sendMessage(playerId, ${Qq})`
```

#### 228. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4036` → after: `L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4036) · [Before (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4036)

```diff
-                                     FT(cT.map(((cT, lT) => lT === TT ? kT : cT)))
+                                     yq(gq.map(((gq, Yq) => Yq === qq ? Eq : gq)))
```

#### 229. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4039` → after: `L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4039) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4039)

```diff
-                                 Om: () => {
+                                 OJ: () => {
```

#### 230. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4044` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4044) · [Before (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4044)

```diff
-                                     key: `edit-${CT}`,
+                                     key: `edit-${Wq}`,
```

#### 231. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4051-L4054` → after: `L4051-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4051-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4051-L4054) · [Before (L4051-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4051-L4054)

```diff
-                           var wM = cT(4813),
-                             mM = cT(4798),
-                             bM = cT(4806),
-                             zM = cT(4815);
+                           var rl = gq(4671),
+                             vl = gq(4648),
+                             hl = gq(4662),
+                             nl = gq(4679);
```

#### 232. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4070)

```diff
-                             return `${TT} ms`
+                             return `${qq} ms`
```

#### 233. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4074` → after: `L4074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4074) · [Before (L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4074)

```diff
-                             return `${TT} st`
+                             return `${qq} st`
```

#### 234. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4099` → after: `L4099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4099) · [Before (L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4099)

```diff
-                             const lT = (0, wM.j)(kT);
+                             const Yq = (0, rl.i)(Eq);
```

#### 235. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4116` → after: `L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4116) · [Before (L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4116)

```diff
-                                     children: wM.f.map((TT => (0, vT.jsx)("button", {
+                                     children: rl.d.map((qq => (0, aq.jsx)("button", {
```

#### 236. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4136)

```diff
-                                   format: () => `${kT.pitchHz} Hz`,
+                                   format: () => `${Eq.pitchHz} Hz`,
```

#### 237. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4226` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4226) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4226)

```diff
-                                         lowpassHz: TT.target.checked ? GM : null
+                                         lowpassHz: qq.target.checked ? Ml : null
```

#### 238. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4238` → after: `L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4238) · [Before (L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4238)

```diff
-                                   format: () => `${kT.lowpassHz} Hz`,
+                                   format: () => `${Eq.lowpassHz} Hz`,
```

#### 239. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4276` → after: `L4276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4276) · [Before (L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4276)

```diff
-                           const LM = Object.keys(wM.h),
+                           const Jl = Object.keys(rl.f),
```

#### 240. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4281-L4282` → after: `L4281-L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4281-L4282) · [Before (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4281-L4282)

```diff
-                             const cT = JSON.stringify((0, wM.j)(TT));
-                             return null !== (kT = LM.find((TT => JSON.stringify((0, wM.j)(wM.h[TT])) === cT))) && void 0 !== kT ? kT : null
+                             const gq = JSON.stringify((0, rl.i)(qq));
+                             return null !== (Eq = Jl.find((qq => JSON.stringify((0, rl.i)(rl.f[qq])) === gq))) && void 0 !== Eq ? Eq : null
```

#### 241. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4288` → after: `L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4288) · [Before (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4288)

```diff
-                             return `{\n${Object.entries(TT).map((TT=>{let[cT,lT]=TT;return`${kT}    ${cT}: ${UM(lT,`${kT}    `)},`})).join("\n")}\n${kT}}`
+                             return `{\n${Object.entries(qq).map((qq=>{let[gq,Yq]=qq;return`${Eq}    ${gq}: ${Ul(Yq,`${Eq}    `)},`})).join("\n")}\n${Eq}}`
```

#### 242. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4293-L4294` → after: `L4293-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4293-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4293-L4294) · [Before (L4293-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4293-L4294)

```diff
-                               MT = [`    line: ${JSON.stringify(kT)},`];
-                             return cT && MT.push(`    speakerName: ${JSON.stringify(cT)},`), MT.push("    voice,"), `const voice = ${lT?JSON.stringify(lT):UM((0,wM.j)(TT))}\n\napi.setClientOption(playerId, "dialogue", {\n${MT.join("\n")}\n})`
+                               lq = [`    line: ${JSON.stringify(Eq)},`];
+                             return gq && lq.push(`    speakerName: ${JSON.stringify(gq)},`), lq.push("    voice,"), `const voice = ${Yq?JSON.stringify(Yq):Ul((0,rl.i)(qq))}\n\napi.setClientOption(playerId, "dialogue", {\n${lq.join("\n")}\n})`
```

#### 243. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4305` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4305) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4305)

```diff
-                             const [TT, kT] = (0, lT.useState)(wM.h.regular), [cT, MT] = (0, lT.useState)(RM[0]), [OT, yT] = (0, lT.useState)("Innkeeper"), [fT, xT] = (0, lT.useState)(0), IT = Al((TT => TT.volume)), AT = (0, lT.useRef)(null), CT = (0, lT.useRef)(0), jT = (0, lT.us … [truncated]
+                             const [qq, Eq] = (0, Yq.useState)(rl.f.regular), [gq, lq] = (0, Yq.useState)(kl[0]), [mq, xq] = (0, Yq.useState)("Innkeeper"), [Aq, cq] = (0, Yq.useState)(0), uq = uY((qq => qq.volume)), Bq = (0, Yq.useRef)(null), Wq = (0, Yq.useRef)(0), Nq = (0, Yq.us … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4326` → after: `L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4326) · [Before (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4326)

```diff
-                                 } = (0, bM.e)(TT);
+                                 } = (0, hl.f)(qq);
```

#### 245. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4357` → after: `L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4357) · [Before (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4357)

```diff
-                                       const cT = wM.h[TT];
+                                       const gq = rl.f[qq];
```

#### 246. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4442-L4443` → after: `L4442-L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4442-L4443) · [Before (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4442-L4443)

```diff
-                                       const TT = (0, bM.e)(MT).plan.blips[0];
-                                       TT && (AT.current = pM((0, wM.j)(lT), [{
+                                       const qq = (0, hl.f)(lq).plan.blips[0];
+                                       qq && (Bq.current = Kl((0, rl.i)(Yq), [{
```

#### 247. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4459` → after: `L4459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4459) · [Before (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4459)

```diff
-                           var qM = cT(4831);
+                           var Il = gq(4701);
```

#### 248. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4463` → after: `L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4463) · [Before (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4463)

```diff
-                               [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${TK}`, "g"), qM.p],
+                               [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Dl}`, "g"), Il.l],
```

#### 249. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4465` → after: `L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4465) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4465)

```diff
-                               [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, qM.p]
+                               [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Il.l]
```

#### 250. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4469)

```diff
-                             return `${TT.pageId}#${TT.anchor}`
+                             return `${qq.pageId}#${qq.anchor}`
```

#### 251. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4476` → after: `L4476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4476) · [Before (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4476)

```diff
-                             for (const [, , lT] of kT.matchAll(PT.e)) {
+                             for (const [, , Yq] of Eq.matchAll(rq.d)) {
```

#### 252. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4501` → after: `L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4501) · [Before (L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4501)

```diff
-                               for (const [, TT] of(0, qM.h)(lT, MT, KT)) kT.has(TT) && cT.add(TT);
+                               for (const [, qq] of(0, Il.d)(Yq, lq, Oq)) Eq.has(qq) && gq.add(qq);
```

#### 253. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4517` → after: `L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4517) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4517)

```diff
-                             return kT ? `${TT.name} = (${cT}) => {\n\t\n}` : `api.${TT.name}(${cT})`
+                             return Eq ? `${qq.name} = (${gq}) => {\n\t\n}` : `api.${qq.name}(${gq})`
```

#### 254. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4554` → after: `L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4554) · [Before (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4554)

```diff
-                                     href: `#${kT.name}-${IK(TT)}`,
+                                     href: `#${Eq.name}-${cO(qq)}`,
```

#### 255. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4587` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4587) · [Before (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4587)

```diff
-                               }), cT.map((TT => (0, vT.jsx)(OT.e, {
+                               }), gq.map((qq => (0, aq.jsx)(mq.c, {
```

#### 256. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4590` → after: `L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4590) · [Before (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4590)

```diff
-                               }, `${TT.pageId}#${TT.anchor}`)))]
+                               }, `${qq.pageId}#${qq.anchor}`)))]
```

#### 257. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4610` → after: `L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4610) · [Before (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4610)

```diff
-                                       for (const KT of (0, PT.q)(dT(MT)))
+                                       for (const Oq of (0, rq.u)(Jq(lq)))
```

#### 258. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4614` → after: `L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4614) · [Before (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4614)

```diff
-                                           of(0, PT.k)(KT.blocks))
+                                           of(0, rq.n)(Oq.blocks))
```

#### 259. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4621-L4622` → after: `L4621-L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4621-L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4621-L4622) · [Before (L4621-L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4621-L4622)

```diff
-                                                 anchor: null !== (TT = null === (kT = KT.heading) || void 0 === kT ? void 0 : kT.anchor) && void 0 !== TT ? TT : "",
-                                                 label: null !== (cT = MT.navTitle) && void 0 !== cT ? cT : MT.title
+                                                 anchor: null !== (qq = null === (Eq = Oq.heading) || void 0 === Eq ? void 0 : Eq.anchor) && void 0 !== qq ? qq : "",
+                                                 label: null !== (gq = lq.navTitle) && void 0 !== gq ? gq : lq.title
```

#### 260. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4629` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4629) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4629)

```diff
-                               }().get(KT)) && void 0 !== kT ? kT : [],
+                               }().get(Oq)) && void 0 !== Eq ? Eq : [],
```

#### 261. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4647` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4647) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4647)

```diff
-                               }().get(KT)) && void 0 !== cT ? cT : [];
+                               }().get(Oq)) && void 0 !== gq ? gq : [];
```

#### 262. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4668` → after: `L4668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4668) · [Before (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4668)

```diff
-                               OT = kT.description.length > 0 || null === KT || void 0 === KT || !KT.description ? kT.description : (0, PT.v)(KT.description);
+                               mq = Eq.description.length > 0 || null === Oq || void 0 === Oq || !Oq.description ? Eq.description : (0, rq.A)(Oq.description);
```

#### 263. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4692` → after: `L4692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4692) · [Before (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4692)

```diff
-                                     text: (yT = KT.deprecation, (0, qM.v)(yT, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, qM.m)("`\\w"), (TT => {
+                                     text: (xq = Oq.deprecation, (0, Il.t)(xq, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Il.i)("`\\w"), (qq => {
```

#### 264. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4694` → after: `L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4694) · [Before (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4694)

```diff
-                                       return Ak().has(kT) ? `\`${kT}\`` : kT
+                                       return BE().has(Eq) ? `\`${Eq}\`` : Eq
```

#### 265. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4711` → after: `L4711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4711) · [Before (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4711)

```diff
-                                     id: `${kT.name}-${IK(TT)}`,
+                                     id: `${Eq.name}-${cO(qq)}`,
```

#### 266. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4753` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4753) · [Before (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4753)

```diff
-                             return null !== TT.defaultValue && "undefined" !== TT.defaultValue ? TT.defaultValue : null !== (kT = TT.example) && void 0 !== kT ? kT : "value"
+                             return null !== qq.defaultValue && "undefined" !== qq.defaultValue ? qq.defaultValue : null !== (Eq = qq.example) && void 0 !== Eq ? Eq : "value"
```

#### 267. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4893-L4894` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4893-L4894) · [Before (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4893-L4894)

```diff
-                                   const MT = null !== (cT = Fc(TT[2])) && void 0 !== cT ? cT : TT[2];
-                                   "Type" === TT[1] ? kT.type = MT : "Default" === TT[1] ? kT.defaultValue = MT : "" !== MT && (kT.example = MT)
+                                   const lq = null !== (gq = Qg(qq[2])) && void 0 !== gq ? gq : qq[2];
+                                   "Type" === qq[1] ? Eq.type = lq : "Default" === qq[1] ? Eq.defaultValue = lq : "" !== lq && (Eq.example = lq)
```

#### 268. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4896)

```diff
-                                 return kT.type ? kT : null
+                                 return Eq.type ? Eq : null
```

#### 269. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4963` → after: `L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L4963) · [Before (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L4963)

```diff
-                                   return (null !== (kT = Jc(TT)) && void 0 !== kT ? kT : []).flatMap((TT => dk(TT.name) ? [TT.name] : []))
+                                   return (null !== (Eq = bg(qq)) && void 0 !== Eq ? Eq : []).flatMap((qq => LE(qq.name) ? [qq.name] : []))
```

#### 270. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5018` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5018) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5018)

```diff
-                                   value: kT.hasParticlePlayground ? CT : null,
+                                   value: Eq.hasParticlePlayground ? Wq : null,
```

#### 271. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5037-L5038` → after: `L5037-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5037-L5038) · [Before (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5037-L5038)

```diff
-                                 placeholder: `Filter ${MT.sections.length} ${DK[kT.layout]}\u2026`,
-                                 label: `Filter ${DK[kT.layout]}`,
+                                 placeholder: `Filter ${lq.sections.length} ${oO[Eq.layout]}\u2026`,
+                                 label: `Filter ${oO[Eq.layout]}`,
```

#### 272. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5045` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5045) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5045)

```diff
-                                 className: `DocsSections Layout-${kT.layout}`,
+                                 className: `DocsSections Layout-${Eq.layout}`,
```

#### 273. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5067` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5067) · [Before (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5067)

```diff
-                               href: `#${kT.anchor}`,
+                               href: `#${Eq.anchor}`,
```

#### 274. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5069)

```diff
-                               className: KT()(`Level${kT.level}`, {
+                               className: Oq()(`Level${Eq.level}`, {
```

#### 275. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5113` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5113) · [Before (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5113)

```diff
-                                     month: `${kT[2]} ${kT[3]}`
+                                     month: `${Eq[2]} ${Eq[3]}`
```

#### 276. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5116` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5116) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5116)

```diff
-                                 OT = null !== (cT = null === KT || void 0 === KT ? void 0 : KT.month) && void 0 !== cT ? cT : null;
+                                 mq = null !== (gq = null === Oq || void 0 === Oq ? void 0 : Oq.month) && void 0 !== gq ? gq : null;
```

#### 277. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5122` → after: `L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5122) · [Before (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5122)

```diff
-                                 day: null !== (MT = null === KT || void 0 === KT ? void 0 : KT.day) && void 0 !== MT ? MT : null,
+                                 day: null !== (lq = null === Oq || void 0 === Oq ? void 0 : Oq.day) && void 0 !== lq ? lq : null,
```

#### 278. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5157` → after: `L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5157) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5157)

```diff
-                                             children: null !== cT && void 0 !== cT ? cT : kT.text
+                                             children: null !== gq && void 0 !== gq ? gq : Eq.text
```

#### 279. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5231-L5232` → after: `L5231-L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5231-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5231-L5232) · [Before (L5231-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5231-L5232)

```diff
-                             return (0, PT.q)(cT).flatMap((lT => {
-                               const MT = lT.heading ? `${TT.title} \u203a ${lT.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : TT.title;
+                             return (0, rq.u)(gq).flatMap((Yq => {
+                               const lq = Yq.heading ? `${qq.title} \u203a ${Yq.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : qq.title;
```

#### 280. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5258` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5258) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5258)

```diff
-                             return MT - Math.min(lT.length / 10, 9) + ("Page" === TT.kind ? 8 : "Method" === TT.kind ? 3 : 0) - (TT.listedUnder ? JK : 0)
+                             return lq - Math.min(Yq.length / 10, 9) + ("Page" === qq.kind ? 8 : "Method" === qq.kind ? 3 : 0) - (qq.listedUnder ? bO : 0)
```

#### 281. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5264` → after: `L5264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5264) · [Before (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5264)

```diff
-                             return `${lT>0?"\u2026":""}${TT.slice(lT,lT+eK)}${lT+eK<TT.length?"\u2026":""}`
+                             return `${Yq>0?"\u2026":""}${qq.slice(Yq,Yq+fO)}${Yq+fO<qq.length?"\u2026":""}`
```

#### 282. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5287` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5287) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5287)

```diff
-                             const MT = (0, yT.t)(),
+                             const lq = (0, xq.r)(),
```

#### 283. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5376` → after: `L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5376) · [Before (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5376)

```diff
-                                     "aria-activedescendant": tT.length > 0 ? `DocsSearchResult-${xT}` : void 0,
+                                     "aria-activedescendant": Vq.length > 0 ? `DocsSearchResult-${cq}` : void 0,
```

#### 284. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5401` → after: `L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5401) · [Before (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5401)

```diff
-                                       id: `DocsSearchResult-${kT}`,
+                                       id: `DocsSearchResult-${Eq}`,
```

#### 285. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5432)

```diff
-                                         children: "Page" === TT.kind ? "Page" : null !== (cT = TT.listedUnder) && void 0 !== cT ? cT : `${TT.kind} \xb7 ${TT.page.title}`
+                                         children: "Page" === qq.kind ? "Page" : null !== (gq = qq.listedUnder) && void 0 !== gq ? gq : `${qq.kind} \xb7 ${qq.page.title}`
```

#### 286. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5434` → after: `L5434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5434) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5434)

```diff
-                                     }, `${TT.page.id}#${TT.anchor}`)
+                                     }, `${qq.page.id}#${qq.anchor}`)
```

#### 287. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5445` → after: `L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5445) · [Before (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5445)

```diff
-                             if (kT < 10) return `${TT.toFixed(1)}s`;
+                             if (Eq < 10) return `${qq.toFixed(1)}s`;
```

#### 288. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5447` → after: `L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5447) · [Before (L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5447)

```diff
-                             return `${Math.floor(cT/60)}:${String(cT%60).padStart(2,"0")}`
+                             return `${Math.floor(gq/60)}:${String(gq%60).padStart(2,"0")}`
```

#### 289. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5476` → after: `L5476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5476) · [Before (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5476)

```diff
-                                   "aria-label": yT ? `Pause ${TT.name}` : `Play ${TT.name}`,
+                                   "aria-label": xq ? `Pause ${qq.name}` : `Play ${qq.name}`,
```

#### 290. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5502` → after: `L5502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5502) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5502)

```diff
-                                       "aria-valuetext": `${dK(fT,TT.duration)} of ${dK(TT.duration,TT.duration)}`,
+                                       "aria-valuetext": `${LO(Aq,qq.duration)} of ${LO(qq.duration,qq.duration)}`,
```

#### 291. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5545` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5545) · [Before (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5545)

```diff
-                                     null === (kT = document.querySelector(`[data-docs-track="${CSS.escape(ll(TT.name,TT.isSong))}"]`)) || void 0 === kT || kT.focus(), Nl()
+                                     null === (Eq = document.querySelector(`[data-docs-track="${CSS.escape(gY(qq.name,qq.isSong))}"]`)) || void 0 === Eq || Eq.focus(), dY()
```

#### 292. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5554` → after: `L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5554) · [Before (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5554)

```diff
-                           var RK = cT(47);
+                           var kO = gq(38);
```

#### 293. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5567-L5568` → after: `L5567-L5568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5567-L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5567-L5568) · [Before (L5567-L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5567-L5568)

```diff
-                               "aria-label": `Switch to ${lT} theme`,
-                               title: `Switch to ${lT} theme`,
+                               "aria-label": `Switch to ${Yq} theme`,
+                               title: `Switch to ${Yq} theme`,
```

#### 294. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5599` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5599) · [Before (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5599)

```diff
-                                   return (0, vT.jsxs)(OT.e, {
+                                   return (0, aq.jsxs)(mq.c, {
```

#### 295. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5609` → after: `L5609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5609) · [Before (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5609)

```diff
-                                       children: null !== (MT = yT.navTitle) && void 0 !== MT ? MT : yT.title
+                                       children: null !== (lq = xq.navTitle) && void 0 !== lq ? lq : xq.title
```

#### 296. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5629` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5629) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5629)

```diff
-                               children: [KT ? (0, vT.jsxs)(OT.e, {
+                               children: [Oq ? (0, aq.jsxs)(mq.c, {
```

#### 297. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5639)

```diff
-                               }) : (0, vT.jsx)("span", {}), yT && (0, vT.jsxs)(OT.e, {
+                               }) : (0, aq.jsx)("span", {}), xq && (0, aq.jsxs)(mq.c, {
```

#### 298. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5660` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5660) · [Before (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5660)

```diff
-                             } = (0, yT.v)(), xT = (0, yT.s)(), IT = (0, yT.t)(), AT = (CT = MT, ET.find((TT => TT.slug === CT)));
+                             } = (0, xq.v)(), cq = (0, xq.q)(), uq = (0, xq.r)(), Bq = (Wq = lq, Sq.find((qq => qq.slug === Wq)));
```

#### 299. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5664-L5665` → after: `L5664-L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5664-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5664-L5665) · [Before (L5664-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5664-L5665)

```diff
-                                 const TT = RK.e.getItem(gK);
-                                 return "dark" === TT || "light" === TT ? TT : null
+                                 const qq = kO.i.getItem(RO);
+                                 return "dark" === qq || "light" === qq ? qq : null
```

#### 300. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5674-L5675` → after: `L5674-L5675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5674-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5674-L5675) · [Before (L5674-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5674-L5675)

```diff
-                               }), []), [null !== TT && void 0 !== TT ? TT : cT, TT => {
-                                 RK.e.setItem(gK, TT), kT(TT)
+                               }), []), [null !== qq && void 0 !== qq ? qq : gq, qq => {
+                                 kO.i.setItem(RO, qq), Eq(qq)
```

#### 301. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5686` → after: `L5686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5686) · [Before (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5686)

```diff
-                                     let yT = null !== (lT = null === (KT = TT[0]) || void 0 === KT ? void 0 : KT.anchor) && void 0 !== lT ? lT : "";
+                                     let xq = null !== (Yq = null === (Oq = qq[0]) || void 0 === Oq ? void 0 : Oq.anchor) && void 0 !== Yq ? Yq : "";
```

#### 302. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5703` → after: `L5703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5703) · [Before (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5703)

```diff
-                               const kT = (0, PT.o)(TT);
+                               const Eq = (0, rq.s)(qq);
```

#### 303. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5714` → after: `L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5714) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5714)

```diff
-                               } : RT(`#${kT}`)
+                               } : Rq(`#${Eq}`)
```

#### 304. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5716` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5716) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5716)

```diff
-                             (0, lT.useEffect)((() => (fT.e.set({
+                             (0, Yq.useEffect)((() => (Aq.b.set({
```

#### 305. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5719` → after: `L5719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5719) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5719)

```diff
-                               fT.e.set({
+                               Aq.b.set({
```

#### 306. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5739)

```diff
-                               const lT = (0, PT.o)(xT.hash),
+                               const Yq = (0, rq.s)(cq.hash),
```

#### 307. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5744` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5744) · [Before (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5744)

```diff
-                                 (null !== (KT = MT.closest(".DocsChangelogEntry")) && void 0 !== KT ? KT : MT).scrollIntoView({
+                                 (null !== (Oq = lq.closest(".DocsChangelogEntry")) && void 0 !== Oq ? Oq : lq).scrollIntoView({
```

#### 308. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5760` → after: `L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5760) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5760)

```diff
-                             if (bT) return (0, vT.jsx)(yT.e, {
+                             if (nq) return (0, aq.jsx)(xq.c, {
```

#### 309. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5764)

```diff
-                             if (!AT) return (0, vT.jsx)(yT.e, {
+                             if (!Bq) return (0, aq.jsx)(xq.c, {
```

#### 310. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5793` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5793) · [Before (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5793)

```diff
-                                     }), (0, vT.jsxs)(OT.e, {
+                                     }), (0, aq.jsxs)(mq.c, {
```

#### 311. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5844` → after: `L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5844) · [Before (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5844)

```diff
-                                       }), !cT && (0, vT.jsxs)(OT.e, {
+                                       }), !gq && (0, aq.jsxs)(mq.c, {
```

#### 312. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5900` → after: `L5900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5900) · [Before (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5900)

```diff
-                         }, 4707: (TT, kT, cT) => {
+                         }, 4565: (qq, Eq, gq) => {
```

#### 313. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5902` → after: `L5902-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5902-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5902-L5903) · [Before (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5902)

```diff
-                             e: () => lT,
+                             A: () => Wq,
+                             d: () => Yq,
```

#### 314. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5905-L5907` → after: `L5906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5906) · [Before (L5905-L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5905-L5907)

```diff
-                             k: () => tT,
-                             l: () => yT,
-                             o: () => MT,
+                             n: () => Vq,
```

#### 315. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5911` → after: `L5909-L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5909-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5909-L5911) · [Before (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5911)

```diff
-                             v: () => CT
+                             t: () => Oq,
+                             u: () => aq,
+                             w: () => Nq
```

#### 316. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5926` → after: `L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5926) · [Before (L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5926)

```diff
-                           const OT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${lT.source}`, "g");
+                           const mq = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Yq.source}`, "g");
```

#### 317. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5938)

```diff
-                             for (const cT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) kT.length > 0 && kT[kT.length - 1].endsWith("\\") ? kT[kT.length - 1] += `|${cT}` : kT.push(cT);
+                             for (const gq of qq.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Eq.length > 0 && Eq[Eq.length - 1].endsWith("\\") ? Eq[Eq.length - 1] += `|${gq}` : Eq.push(gq);
```

#### 318. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L5953` → after: `L5953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R5953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L5953) · [Before (L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L5953)

```diff
-                                 lT && (lT.text += ` ${MT.trim()}`);
+                                 Yq && (Yq.text += ` ${lq.trim()}`);
```

#### 319. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6058-L6059` → after: `L6058-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6058-L6059) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6058-L6059)

```diff
-                                 const TT = (null !== (yT = OT.get(xT.anchor)) && void 0 !== yT ? yT : 0) + 1;
-                                 OT.set(xT.anchor, TT), TT > 1 && (xT.anchor = `${xT.anchor}-${TT}`)
+                                 const qq = (null !== (xq = mq.get(cq.anchor)) && void 0 !== xq ? xq : 0) + 1;
+                                 mq.set(cq.anchor, qq), qq > 1 && (cq.anchor = `${cq.anchor}-${qq}`)
```

#### 320. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6115` → after: `L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6115) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6115)

```diff
-                                 const kT = TT => TT.map((TT => `${TT.text} ${kT(TT.children)}`)).join(" ");
+                                 const Eq = qq => qq.map((qq => `${qq.text} ${Eq(qq.children)}`)).join(" ");
```

#### 321. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6124` → after: `L6124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6124) · [Before (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6124)

```diff
-                         }, 4800: (TT, kT, cT) => {
+                         }, 4656: (qq, Eq, gq) => {
```

#### 322. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6128-L6131` → after: `L6128-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6128-L6131) · [Before (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6128-L6131)

```diff
-                           var lT = cT(71),
-                             MT = cT(328),
-                             KT = cT(1943),
-                             OT = cT(1099);
+                           var Yq = gq(57),
+                             lq = gq(296),
+                             Oq = gq(1895),
+                             mq = gq(1070);
```

#### 323. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6139-L6140` → after: `L6139-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6139-L6140) · [Before (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6139-L6140)

```diff
-                             return (0, MT.Pb)(kT).forEach(((TT, kT) => {
-                               if ("string" === typeof TT || !(0, KT.e)(TT.icon)) return void(yT += "string" === typeof TT ? TT : TT.icon);
+                             return (0, lq.Zb)(Eq).forEach(((qq, Eq) => {
+                               if ("string" === typeof qq || !(0, Oq.i)(qq.icon)) return void(xq += "string" === typeof qq ? qq : qq.icon);
```

#### 324. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6149` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6149) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6149)

```diff
-                                     children: (0, OT.jsx)(KT.d, {
+                                     children: (0, mq.jsx)(Oq.e, {
```

#### 325. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6160` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6160) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6160)

```diff
-                         }, 4730: (TT, kT, cT) => {
+                         }, 4588: (qq, Eq, gq) => {
```

#### 326. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6162-L6163` → after: `L6162-L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6162-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6162-L6163) · [Before (L6162-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6162-L6163)

```diff
-                             g: () => QT,
-                             e: () => NT
+                             f: () => Hq,
+                             d: () => jq
```

#### 327. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6165-L6169` → after: `L6165-L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6165-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6165-L6169) · [Before (L6165-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6165-L6169)

```diff
-                           var lT = cT(71),
-                             MT = cT(1461),
-                             KT = cT(1921),
-                             OT = cT(4739),
-                             yT = cT(1099);
+                           var Yq = gq(57),
+                             lq = gq(1416),
+                             Oq = gq(1876),
+                             mq = gq(4597),
+                             xq = gq(1070);
```

#### 328. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6179` → after: `L6179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6179) · [Before (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6179)

```diff
-                               AT = kT.Uk,
+                               Bq = Eq.zY,
```

#### 329. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6183-L6184` → after: `L6183-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6183-L6184) · [Before (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6183-L6184)

```diff
-                               } = null !== kT && void 0 !== kT ? kT : {},
-                               vT = (0, OT.g)();
+                               } = null !== Eq && void 0 !== Eq ? Eq : {},
+                               aq = (0, mq.f)();
```

#### 330. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6209` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6209) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6209)

```diff
-                                     "--rotation": `${jT}deg`
+                                     "--rotation": `${Nq}deg`
```

#### 331. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6220` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6220) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6220)

```diff
-                                   children: (0, yT.jsx)(KT.b, {
+                                   children: (0, xq.jsx)(Oq.c, {
```

#### 332. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6227` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6227) · [Before (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6227)

```diff
-                                   children: (0, yT.jsx)(KT.b, {
+                                   children: (0, xq.jsx)(Oq.c, {
```

#### 333. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6234)

```diff
-                           var xT = cT(1046),
+                           var cq = gq(1018),
```

#### 334. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6246)

```diff
-                                 jT = kT.Wk,
+                                 Nq = Eq.GY,
```

#### 335. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6250-L6252` → after: `L6250-L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6250-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6250-L6252) · [Before (L6250-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6250-L6252)

```diff
-                                   nk: hT
-                                 } = null !== kT && void 0 !== kT ? kT : {},
-                                 NT = (0, OT.g)();
+                                   LY: dq
+                                 } = null !== Eq && void 0 !== Eq ? Eq : {},
+                                 jq = (0, mq.f)();
```

#### 336. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6259-L6260` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6259-L6260) · [Before (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6259-L6260)

```diff
-                                     OT = null !== (TT = KT.timeRemaining) && void 0 !== TT ? TT : 0,
-                                     yT = null !== (kT = KT.Bk) && void 0 !== kT ? kT : 1,
+                                     mq = null !== (qq = Oq.timeRemaining) && void 0 !== qq ? qq : 0,
+                                     xq = null !== (Eq = Oq.pY) && void 0 !== Eq ? Eq : 1,
```

#### 337. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6262)

```diff
-                                   MT.current.style.strokeDashoffset = `${xT}`, cT.current && (cT.current.style.opacity = OT > 0 ? "1" : "0"), fT.current && jT && (fT.current.textContent = `${(OT/1e3).toFixed(1)}s`)
+                                   lq.current.style.strokeDashoffset = `${cq}`, gq.current && (gq.current.style.opacity = mq > 0 ? "1" : "0"), Aq.current && Nq && (Aq.current.textContent = `${(mq/1e3).toFixed(1)}s`)
```

#### 338. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6275` → after: `L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6275) · [Before (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6275)

```diff
-                                     "--rotation": `${tT}deg`
+                                     "--rotation": `${Vq}deg`
```

#### 339. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6303` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6303) · [Before (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6303)

```diff
-                                     children: (0, yT.jsx)(KT.b, {
+                                     children: (0, xq.jsx)(Oq.c, {
```

#### 340. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6314)

```diff
-                                   children: [(0, yT.jsx)(KT.b, {
+                                   children: [(0, xq.jsx)(Oq.c, {
```

#### 341. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6334` → after: `L6334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6334) · [Before (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6334)

```diff
-                                 CT = (0, OT.g)();
+                                 Wq = (0, mq.f)();
```

#### 342. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6341-L6342` → after: `L6341-L6342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6341-L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6341-L6342) · [Before (L6341-L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6341-L6342)

```diff
-                                     const TT = 100 * (kT.catchZonePosition - kT.qk / 2);
-                                     cT.current.style.left = `${TT}%`, cT.current.style.width = 100 * kT.qk + "%", kT.isCatching !== xT.current && (xT.current = kT.isCatching, kT.isCatching ? cT.current.classList.add("catching") : cT.current.classList.remove("catching"))
+                                     const qq = 100 * (Eq.catchZonePosition - Eq.kY / 2);
+                                     gq.current.style.left = `${qq}%`, gq.current.style.width = 100 * Eq.kY + "%", Eq.isCatching !== cq.current && (cq.current = Eq.isCatching, Eq.isCatching ? gq.current.classList.add("catching") : gq.current.classList.remove("catching"))
```

#### 343. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6353` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6353) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6353)

```diff
-                                   children: (0, yT.jsx)(KT.b, {
+                                   children: (0, xq.jsx)(Oq.c, {
```

#### 344. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6369)

```diff
-                                       children: AT && (0, yT.jsx)(KT.b, {
+                                       children: Bq && (0, xq.jsx)(Oq.c, {
```

#### 345. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6382` → after: `L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6382) · [Before (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6382)

```diff
-                           var vT = cT(617);
+                           var aq = gq(598);
```

#### 346. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6389` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6389) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6389)

```diff
-                                 fT = kT.Kc,
+                                 Aq = Eq.KY,
```

#### 347. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6394` → after: `L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6394) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6394)

```diff
-                                 } = null !== kT && void 0 !== kT ? kT : {},
+                                 } = null !== Eq && void 0 !== Eq ? Eq : {},
```

#### 348. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6397` → after: `L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6397) · [Before (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6397)

```diff
-                                 tT = (0, OT.g)();
+                                 Vq = (0, mq.f)();
```

#### 349. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6411` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6411) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6411)

```diff
-                                   ...!(0, vT.R)(IT) && {
+                                   ...!(0, aq.H)(uq) && {
```

#### 350. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6414-L6415` → after: `L6414-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6414-L6415) · [Before (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6414-L6415)

```diff
-                                   ...!(0, vT.R)(AT) && {
-                                     "--rotation": `${AT}deg`
+                                   ...!(0, aq.H)(Bq) && {
+                                     "--rotation": `${Bq}deg`
```

#### 351. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6418` → after: `L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6418) · [Before (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6418)

```diff
-                                 children: [xT && (0, yT.jsx)(KT.b, {
+                                 children: [cq && (0, xq.jsx)(Oq.c, {
```

#### 352. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6428-L6429` → after: `L6428-L6429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6428-L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6428-L6429) · [Before (L6428-L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6428-L6429)

```diff
-                                       left: `${CT}%`,
-                                       width: `${jT}%`
+                                       left: `${Wq}%`,
+                                       width: `${Nq}%`
```

#### 353. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6437)

```diff
-                                   children: (0, yT.jsx)(KT.b, {
+                                   children: (0, xq.jsx)(Oq.c, {
```

#### 354. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6448` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6448) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6448)

```diff
-                                 [MT, fT] = (0, lT.useState)((() => new Array(kT.yc).fill("pending"))),
+                                 [lq, Aq] = (0, Yq.useState)((() => new Array(Eq.IY).fill("pending"))),
```

#### 355. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6450-L6451` → after: `L6450-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6450-L6451) · [Before (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6450-L6451)

```diff
-                                   const TT = kT.Ic;
-                                   return (0, vT.R)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
+                                   const qq = Eq.ql;
+                                   return (0, aq.H)(qq) || qq <= 0 ? [] : new Array(qq).fill("pending")
```

#### 356. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6460` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6460) · [Before (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6460)

```diff
-                                 NT = (0, OT.g)();
+                                 jq = (0, mq.f)();
```

#### 357. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6484` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6484) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6484)

```diff
-                                     for (let lT = 0; lT < kT.yc; lT++) cT[lT] = lT < kT.successes ? "success" : "pending";
+                                     for (let Yq = 0; Yq < Eq.IY; Yq++) gq[Yq] = Yq < Eq.successes ? "success" : "pending";
```

#### 358. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6524)

```diff
-                                     children: (0, yT.jsx)(KT.b, {
+                                     children: (0, xq.jsx)(Oq.c, {
```

#### 359. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6538` → after: `L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6538) · [Before (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6538)

```diff
-                                   children: (0, yT.jsx)(KT.b, {
+                                   children: (0, xq.jsx)(Oq.c, {
```

#### 360. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6581` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6581) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6581)

```diff
-                             return (0, MT.g)("qteStateUpdated", (TT => {
+                             return (0, lq.f)("qteStateUpdated", (qq => {
```

#### 361. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6591` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6591) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6591)

```diff
-                         }, 4739: (TT, kT, cT) => {
+                         }, 4597: (qq, Eq, gq) => {
```

#### 362. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6593-L6594` → after: `L6593-L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6593-L6594) · [Before (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6593-L6594)

```diff
-                             d: () => yT,
-                             g: () => fT
+                             b: () => xq,
+                             f: () => Aq
```

#### 363. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6596-L6598` → after: `L6596-L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6596-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6596-L6598) · [Before (L6596-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6596-L6598)

```diff
-                           var lT = cT(71),
-                             MT = cT(1303),
-                             KT = cT(4745);
+                           var Yq = gq(57),
+                             lq = gq(1283),
+                             Oq = gq(4606);
```

#### 364. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6600-L6601` → after: `L6600-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6600-L6601) · [Before (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6600-L6601)

```diff
-                               getState: () => KT.d.getCurrentState(),
-                               onFrame: MT.o
+                               getState: () => Oq.b.getCurrentState(),
+                               onFrame: lq.s
```

#### 365. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6608` → after: `L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6608) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6608)

```diff
-                         }, 4806: (TT, kT, cT) => {
+                         }, 4662: (qq, Eq, gq) => {
```

#### 366. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6611` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6611) · [Before (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6611)

```diff
-                             e: () => eT
+                             f: () => Mq
```

#### 367. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6613-L6614` → after: `L6613-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6613-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6613-L6614) · [Before (L6613-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6613-L6614)

```diff
-                           var lT = cT(4813),
-                             MT = cT(328);
+                           var Yq = gq(4671),
+                             lq = gq(296);
```

#### 368. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6625-L6627` → after: `L6625-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6625-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6625-L6627) · [Before (L6625-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6625-L6627)

```diff
-                             tT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${vT}$`),
-                             hT = new RegExp(`[?\uff1f]${vT}$`),
-                             NT = new RegExp(`[!\uff01]${vT}$`),
+                             Vq = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${aq}$`),
+                             dq = new RegExp(`[?\uff1f]${aq}$`),
+                             jq = new RegExp(`[!\uff01]${aq}$`),
```

#### 369. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6630-L6631` → after: `L6630-L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6630-L6631) · [Before (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6630-L6631)

```diff
-                             DT = new RegExp(`[${ST}]`),
-                             aT = new RegExp(`[${ST}]|[^${ST}]+`, "g"),
+                             Pq = new RegExp(`[${oq}]`),
+                             Qq = new RegExp(`[${oq}]|[^${oq}]+`, "g"),
```

#### 370. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6646` → after: `L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6646) · [Before (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6646)

```diff
-                             const MT = null !== (kT = cT.match(FT)) && void 0 !== kT ? kT : [];
+                             const lq = null !== (Eq = gq.match(yq)) && void 0 !== Eq ? Eq : [];
```

#### 371. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6649` → after: `L6649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6649) · [Before (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6649)

```diff
-                               const TT = null !== (KT = null === (OT = cT.match(/\p{L}/gu)) || void 0 === OT ? void 0 : OT.length) && void 0 !== KT ? KT : 0;
+                               const qq = null !== (Oq = null === (mq = gq.match(/\p{L}/gu)) || void 0 === mq ? void 0 : mq.length) && void 0 !== Oq ? Oq : 0;
```

#### 372. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6668-L6669` → after: `L6668-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6668-L6669) · [Before (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6668-L6669)

```diff
-                             const jT = kT && (0, lT.j)(kT),
-                               vT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.syllableMs) && void 0 !== cT ? cT : lT.b,
+                             const Nq = Eq && (0, Yq.i)(Eq),
+                               aq = null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.syllableMs) && void 0 !== gq ? gq : Yq.b,
```

#### 373. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6672` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6672) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6672)

```diff
-                                 for (const lT of (0, MT.Pb)(TT))
+                                 for (const Yq of (0, lq.Zb)(qq))
```

#### 374. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6692` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6692) · [Before (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6692)

```diff
-                                       for (const MT of null !== (cT = TT.match(aT)) && void 0 !== cT ? cT : []) {
+                                       for (const lq of null !== (gq = qq.match(Qq)) && void 0 !== gq ? gq : []) {
```

#### 375. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6719` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6719) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6719)

```diff
-                               const TT = null !== (oT = null === (HT = lT.at(-1)) || void 0 === HT ? void 0 : HT.text) && void 0 !== oT ? oT : "",
+                               const qq = null !== (Zq = null === (fq = Yq.at(-1)) || void 0 === fq ? void 0 : fq.text) && void 0 !== Zq ? Zq : "",
```

#### 376. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6733)

```diff
-                                   OT += rT(`${wT(NT.text)}|${MT}`) * KT.variationSemitones;
+                                   mq += tq(`${vq(jq.text)}|${lq}`) * Oq.variationSemitones;
```

#### 377. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6745` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6745) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6745)

```diff
-                                 JT += lT * vT + (tT.test(NT.text) ? OT : QT.test(NT.text) ? KT : 0)
+                                 iq += Yq * aq + (Vq.test(jq.text) ? mq : Hq.test(jq.text) ? Oq : 0)
```

#### 378. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6749` → after: `L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6749) · [Before (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6749)

```diff
-                               pieces: ST.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
+                               pieces: oq.map((qq => "space" === qq.kind ? qq : "icon" === qq.kind ? {
```

#### 379. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6761-L6763` → after: `L6761-L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6761-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6761-L6763) · [Before (L6761-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6761-L6763)

```diff
-                           var zT = cT(1195),
-                             JT = cT(1261),
-                             oT = cT(1960);
+                           var bq = gq(1183),
+                             iq = gq(1241),
+                             Zq = gq(1906);
```

#### 380. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6767-L6768` → after: `L6767-L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6767-L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6767-L6768) · [Before (L6767-L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6767-L6768)

```diff
-                             const kT = JT.f.get().getCurrentLanguageCode();
-                             return (0, zT.p)(kT, TT.translationKey, (0, zT.m)(TT.params, oT.c.shown))
+                             const Eq = iq.h.get().getCurrentLanguageCode();
+                             return (0, bq.n)(Eq, qq.translationKey, (0, bq.j)(qq.params, Zq.d.shown))
```

#### 381. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6773` → after: `L6773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6773) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6773)

```diff
-                               cT = kT && (0, lT.j)(kT);
+                               gq = Eq && (0, Yq.i)(Eq);
```

#### 382. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6789` → after: `L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6789) · [Before (L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6789)

```diff
-                         }, 4815: (TT, kT, cT) => {
+                         }, 4679: (qq, Eq, gq) => {
```

#### 383. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6794-L6795` → after: `L6794-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6794-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6794-L6795) · [Before (L6794-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6794-L6795)

```diff
-                           var lT = cT(4820),
-                             MT = cT(31);
+                           var Yq = gq(4684),
+                             lq = gq(24);
```

#### 384. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6852` → after: `L6852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6852) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6852)

```diff
-                             if (!KT || !OT || !MT.e.get("soundOnFromAd")) return () => {};
+                             if (!Oq || !mq || !lq.b.get("soundOnFromAd")) return () => {};
```

#### 385. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6854` → after: `L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6854) · [Before (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6854)

```diff
-                             return null === (cT = yT._autoResume) || void 0 === cT || cT.call(yT), IT(KT, OT, TT, kT, MT.e.get("soundVolume"), (() => {
+                             return null === (gq = xq._autoResume) || void 0 === gq || gq.call(xq), uq(Oq, mq, qq, Eq, lq.b.get("soundVolume"), (() => {
```

#### 386. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6859` → after: `L6859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6859) · [Before (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6859)

```diff
-                         }, 4820: (TT, kT, cT) => {
+                         }, 4684: (qq, Eq, gq) => {
```

#### 387. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6866-L6867` → after: `L6866-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6866-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6866-L6867) · [Before (L6866-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6866-L6867)

```diff
-                           var lT, MT = cT(4825),
-                             KT = cT(4641);
+                           var Yq, lq = gq(4692),
+                             Oq = gq(4477);
```

#### 388. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6884` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6884) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6884)

```diff
-                             MT.gain.setValueAtTime(OT._muted ? 0 : null !== (TT = OT._volume) && void 0 !== TT ? TT : 1, lT.currentTime), MT.connect(lT.destination), OT.ctx = lT, OT.masterGain = MT, null === (kT = OT._setup) || void 0 === kT || kT.call(OT)
+                             lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
```

#### 389. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6926` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6926) · [Before (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6926)

```diff
-                         }, 4831: (TT, kT, cT) => {
+                         }, 4701: (qq, Eq, gq) => {
```

#### 390. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6934-L6936` → after: `L6935-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6935-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6935-L6937) · [Before (L6934-L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6934-L6936)

```diff
-                             h: () => xT,
-                             k: () => yT,
-                             m: () => lT,
+                             f: () => xq,
+                             i: () => Yq,
+                             l: () => lq,
```

#### 391. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6938-L6940` → after: `L6939-L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6939-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6939-L6940) · [Before (L6938-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6938-L6940)

```diff
-                             q: () => KT,
-                             r: () => OT,
-                             v: () => IT,
+                             s: () => mq,
+                             t: () => uq,
```

#### 392. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6955` → after: `L6955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6955) · [Before (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6955)

```diff
-                             return TT.index > 0 && new RegExp(`[${kT}]`).test(TT.input[TT.index - 1])
+                             return qq.index > 0 && new RegExp(`[${Eq}]`).test(qq.input[qq.index - 1])
```

#### 393. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6963` → after: `L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6963) · [Before (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6963)

```diff
-                                 MT = new RegExp(`[^${cT}](?:${kT.source})`, `${lT}g`),
+                                 lq = new RegExp(`[^${gq}](?:${Eq.source})`, `${Yq}g`),
```

#### 394. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6969` → after: `L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6969) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6969)

```diff
-                                 yT = new RegExp(`(?:${kT.source})`, `${lT}y`).exec(TT);
+                                 xq = new RegExp(`(?:${Eq.source})`, `${Yq}y`).exec(qq);
```

#### 395. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L6981` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L6981) · [Before (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L6981)

```diff
-                               const lT = new RegExp(kT.source, `${kT.flags.replace(/[gy]/g,"")}g`),
+                               const Yq = new RegExp(Eq.source, `${Eq.flags.replace(/[gy]/g,"")}g`),
```

#### 396. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7008)

```diff
-                             return cT + (kT.unicode && (null !== (lT = TT.codePointAt(cT)) && void 0 !== lT ? lT : 0) > 65535 ? 2 : 1)
+                             return gq + (Eq.unicode && (null !== (Yq = qq.codePointAt(gq)) && void 0 !== Yq ? Yq : 0) > 65535 ? 2 : 1)
```

#### 397. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7010` → after: `L7010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7010) · [Before (L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7010)

```diff
-                         }, 4789: (TT, kT, cT) => {
+                         }, 4643: (qq, Eq, gq) => {
```

#### 398. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7012-L7013` → after: `L7012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7012) · [Before (L7012-L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7012-L7013)

```diff
-                             b: () => MT,
-                             c: () => fT,
+                             B: () => Nq,
```

#### 399. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7017-L7019` → after: `L7016-L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7016-L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7016-L7019) · [Before (L7017-L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7017-L7019)

```diff
-                             m: () => hT,
-                             p: () => IT,
-                             t: () => AT,
+                             l: () => mq,
+                             o: () => xq,
+                             q: () => dq,
+                             s: () => uq,
```

#### 400. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7021` → after: `L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7021) · [Before (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7021)

```diff
-                             x: () => jT
+                             y: () => Vq
```

#### 401. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7023` → after: `L7023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7023) · [Before (L7023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7023)

```diff
-                           var lT = cT(1602);
+                           var Yq = gq(1566);
```

#### 402. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7026)

```diff
-                             OT = `${lT.b}${KT}`,
+                             mq = `${Yq.c}${Oq}`,
```

#### 403. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7035` → after: `L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7035) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7035)

```diff
-                             return `/docs/${xT(TT)}.md`
+                             return `/docs/${cq(qq)}.md`
```

#### 404. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7039` → after: `L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7039) · [Before (L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7039)

```diff
-                             return `/docs/${xT(TT)}/${kT+1}.md`
+                             return `/docs/${cq(qq)}/${Eq+1}.md`
```

#### 405. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7060` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7060) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7060)

```diff
-                             return `/docsHtml/${xT(TT)}.html`
+                             return `/docsHtml/${cq(qq)}.html`
```

#### 406. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7062` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7062) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7062)

```diff
-                         }, 4813: (TT, kT, cT) => {
+                         }, 4671: (qq, Eq, gq) => {
```

#### 407. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7066-L7067` → after: `L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7067) · [Before (L7066-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7066-L7067)

```diff
-                             h: () => KT,
-                             j: () => fT,
+                             i: () => Aq,
```

#### 408. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/76.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/76.js#L7212)

```diff
-                             return "string" !== typeof TT ? TT : Object.hasOwn(KT, TT) ? KT[TT] : null
+                             return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (131 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L4)

```diff
-   4700: TT => {
+   4546: qq => {
```

#### 2. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L54)

```diff
-             return [`${cT}${kT.shift()}`, ...kT.map(((TT, kT) => `${TT}${"_".repeat(kT+1)}`))].join(" ")
+             return [`${gq}${Eq.shift()}`, ...Eq.map(((qq, Eq) => `${qq}${"_".repeat(Eq+1)}`))].join(" ")
```

#### 3. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L56)

```diff
-           return `${cT}${TT}`
+           return `${gq}${qq}`
```

#### 4. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L69)

```diff
-         this.buffer += `<span class="${TT}">`
+         this.buffer += `<span class="${qq}">`
```

#### 5. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L81)

```diff
-         this.mN = yT(), this.stack = [this.mN]
+         this.jy = xq(), this.stack = [this.jy]
```

#### 6. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L87)

```diff
-         return this.mN
+         return this.jy
```

#### 7. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L105)

```diff
-         return JSON.stringify(this.mN, null, 4)
+         return JSON.stringify(this.jy, null, 4)
```

#### 8. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L108)

```diff
-         return this.constructor._walk(TT, this.mN)
+         return this.constructor._walk(qq, this.jy)
```

#### 9. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L134)

```diff
-         kT && (cT.scope = `language:${kT}`), this.add(cT)
+         Eq && (gq.scope = `language:${Eq}`), this.add(gq)
```

#### 10. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L145)

```diff
-       return TT ? "string" === typeof TT ? TT : TT.source : null
+       return qq ? "string" === typeof qq ? qq : qq.source : null
```

#### 11. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L197)

```diff
-       })).map((TT => `(${TT})`)).join(cT)
+       })).map((qq => `(${qq})`)).join(gq)
```

#### 12. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L205)

```diff
-         Ij: "\\\\[\\s\\S]",
+         gN: "\\\\[\\s\\S]",
```

#### 13. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L210)

```diff
-         Ij: "'",
+         gN: "'",
```

#### 14. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L217)

```diff
-         Ij: '"',
+         gN: '"',
```

#### 15. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L225)

```diff
-           Ij: TT,
+           gN: qq,
```

#### 16. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L231)

```diff
-           Ij: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
+           gN: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
```

#### 17. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L238)

```diff
-           Ij: vT(/[ ]+/, "(", lT, /[.]?[:]?([.][ ]|[ ])/, "){3}")
+           gN: aq(/[ ]+/, "(", Yq, /[.]?[:]?([.][ ]|[ ])/, "){3}")
```

#### 18. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L246)

```diff
-         Ij: aT,
+         gN: Qq,
```

#### 19. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L251)

```diff
-         Ij: FT,
+         gN: yq,
```

#### 20. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L256)

```diff
-         Ij: rT,
+         gN: tq,
```

#### 21. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L261)

```diff
-         Ij: /\/(?=[^/\n]*\/)/,
+         gN: /\/(?=[^/\n]*\/)/,
```

#### 22. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L264)

```diff
-           Ij: /\[/,
+           gN: /\[/,
```

#### 23. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L272)

```diff
-         Ij: ST,
+         gN: oq,
```

#### 24. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L277)

```diff
-         Ij: DT,
+         gN: Pq,
```

#### 25. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L281)

```diff
-         Ij: "\\.\\s*" + DT,
+         gN: "\\.\\s*" + Pq,
```

#### 26. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L312)

```diff
-         Ij: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
+         gN: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
```

#### 27. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L320)

```diff
-         return TT.binary && (TT.Ij = vT(kT, /.*\b/, TT.binary, /\b.*/)), MT({
+         return qq.binary && (qq.gN = aq(Eq, /.*\b/, qq.binary, /\b.*/)), lq({
```

#### 28. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L322)

```diff
-           Ij: kT,
+           gN: Eq,
```

#### 29. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L344)

```diff
-       kT && TT.beginKeywords && (TT.Ij = "\\b(" + TT.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", TT.__beforeBegin = dT, TT.keywords = TT.keywords || TT.beginKeywords, delete TT.beginKeywords, void 0 === TT.relevance && (TT.relevance = 0))
+       Eq && qq.beginKeywords && (qq.gN = "\\b(" + qq.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", qq.__beforeBegin = Jq, qq.keywords = qq.keywords || qq.beginKeywords, delete qq.beginKeywords, void 0 === qq.relevance && (qq.relevance = 0))
```

#### 30. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L353-L354` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L353-L354) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L353-L354)

```diff
-         if (TT.Ij || TT.end) throw new Error("begin & end are not supported with match");
-         TT.Ij = TT.match, delete TT.match
+         if (qq.gN || qq.end) throw new Error("begin & end are not supported with match");
+         qq.gN = qq.match, delete qq.match
```

#### 31. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L367)

```diff
-         })), TT.keywords = cT.keywords, TT.Ij = vT(cT.beforeMatch, AT(cT.Ij)), TT.starts = {
+         })), qq.keywords = gq.keywords, qq.gN = aq(gq.beforeMatch, Bq(gq.gN)), qq.starts = {
```

#### 32. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L402)

```diff
-         console.log(`WARN: ${TT}`, ...cT)
+         console.log(`WARN: ${qq}`, ...gq)
```

#### 33. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L405)

```diff
-         iT[`${TT}/${kT}`] || (console.log(`Deprecated as of ${TT}. ${kT}`), iT[`${TT}/${kT}`] = !0)
+         Iq[`${qq}/${Eq}`] || (console.log(`Deprecated as of ${qq}. ${Eq}`), Iq[`${qq}/${Eq}`] = !0)
```

#### 34. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L429)

```diff
-           if (Array.isArray(TT.Ij)) {
+           if (Array.isArray(qq.gN)) {
```

#### 35. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L432)

```diff
-             ck(TT, TT.Ij, {
+             gE(qq, qq.gN, {
```

#### 36. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L434)

```diff
-             }), TT.Ij = QT(TT.Ij, {
+             }), qq.gN = Hq(qq.gN, {
```

#### 37. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L498)

```diff
-           this.rules.push([TT, kT]), "Ij" === kT.type && this.count++
+           this.rules.push([qq, Eq]), "gN" === Eq.type && this.count++
```

#### 38. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L519)

```diff
-           return "object" === typeof KT.keywords && KT.keywords.$pattern && (KT.keywords = Object.assign({}, KT.keywords), fT = KT.keywords.$pattern, delete KT.keywords.$pattern), fT = fT || /\w+/, KT.keywords && (KT.keywords = nT(KT.keywords, TT.case_insensitive)), yT.keywordPat … [truncated]
+           return "object" === typeof Oq.keywords && Oq.keywords.$pattern && (Oq.keywords = Object.assign({}, Oq.keywords), Aq = Oq.keywords.$pattern, delete Oq.keywords.$pattern), Aq = Aq || /\w+/, Oq.keywords && (Oq.keywords = Kq(Oq.keywords, qq.case_insensitive)), xq.keywordPat … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L532)

```diff
-             }("self" === TT ? KT : TT)
+             }("self" === qq ? Oq : qq)
```

#### 40. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L537)

```diff
-             return TT.contains.forEach((TT => kT.addRule(TT.Ij, {
+             return qq.contains.forEach((qq => Eq.addRule(qq.gN, {
```

#### 41. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L539)

```diff
-               type: "Ij"
+               type: "gN"
```

#### 42. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L692)

```diff
-             mT.endScope && mT.endScope._wrap ? (AT(), CT(cT, mT.endScope._wrap)) : mT.endScope && mT.endScope._multi ? (AT(), jT(mT.endScope, TT)) : KT.skip ? JT += cT : (KT.returnEnd || KT.excludeEnd || (JT += cT), AT(), KT.excludeEnd && (JT = cT));
+             hq.endScope && hq.endScope._wrap ? (Bq(), Wq(gq, hq.endScope._wrap)) : hq.endScope && hq.endScope._multi ? (Bq(), Nq(hq.endScope, qq)) : Oq.skip ? iq += gq : (Oq.returnEnd || Oq.excludeEnd || (iq += gq), Bq(), Oq.excludeEnd && (iq = gq));
```

#### 43. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L703)

```diff
-             if ("Ij" === DT.type && "end" === KT.type && DT.index === KT.index && "" === yT) {
+             if ("gN" === Pq.type && "end" === Oq.type && Pq.index === Oq.index && "" === xq) {
```

#### 44. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L705)

```diff
-                 const kT = new Error(`0 width match regex (${TT})`);
+                 const Eq = new Error(`0 width match regex (${qq})`);
```

#### 45. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L710)

```diff
-             if (DT = KT, "Ij" === KT.type) return function(TT) {
+             if (Pq = Oq, "gN" === Oq.type) return function(qq) {
```

#### 46. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L717)

```diff
-               return lT.skip ? JT += kT : (lT.excludeBegin && (JT += kT), AT(), lT.returnBegin || lT.excludeBegin || (JT = kT)), vT(lT, TT), lT.returnBegin ? 0 : kT.length
+               return Yq.skip ? iq += Eq : (Yq.excludeBegin && (iq += Eq), Bq(), Yq.returnBegin || Yq.excludeBegin || (iq = Eq)), aq(Yq, qq), Yq.returnBegin ? 0 : Eq.length
```

#### 47. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L854` → after: `L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L854) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L854)

```diff
-               TT.classList.add("hljs"), TT.classList.add(`language-${lT}`)
+               qq.classList.add("hljs"), qq.classList.add(`language-${Yq}`)
```

#### 48. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L974` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L974) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L974)

```diff
-   4698: (TT, kT, cT) => {
+   4540: (qq, Eq, gq) => {
```

#### 49. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L976)

```diff
-       d: () => lT
+       b: () => Yq
```

#### 50. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L978)

```diff
-     const lT = cT(4700)
+     const Yq = gq(4546)
```

#### 51. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L980)

```diff
-   4702: (TT, kT, cT) => {
+   4553: (qq, Eq, gq) => {
```

#### 52. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L982` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L982) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L982)

```diff
-       b: () => AT
+       e: () => Bq
```

#### 53. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L999` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L999) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L999)

```diff
-           Ij: /<[A-Za-z0-9\\._:-]+/,
+           gN: /<[A-Za-z0-9\\._:-]+/,
```

#### 54. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1027)

```diff
-         hT = `\\.(${tT})`,
+         dq = `\\.(${Vq})`,
```

#### 55. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1032)

```diff
-             Ij: `(\\b(${NT})((${hT})|\\.)?|(${hT}))[eE][+-]?(${tT})\\b`
+             gN: `(\\b(${jq})((${dq})|\\.)?|(${dq}))[eE][+-]?(${Vq})\\b`
```

#### 56. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1034` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1034) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1034)

```diff
-             Ij: `\\b(${NT})\\b((${hT})\\b|\\.)?|(${hT})\\b`
+             gN: `\\b(${jq})\\b((${dq})\\b|\\.)?|(${dq})\\b`
```

#### 57. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1036)

```diff
-             Ij: "\\b(0|[1-9](_?[0-9])*)n\\b"
+             gN: "\\b(0|[1-9](_?[0-9])*)n\\b"
```

#### 58. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1038` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1038) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1038)

```diff
-             Ij: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
+             gN: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
```

#### 59. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1040` → after: `L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1040) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1040)

```diff
-             Ij: "\\b0[bB][0-1](_?[0-1])*n?\\b"
+             gN: "\\b0[bB][0-1](_?[0-1])*n?\\b"
```

#### 60. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1042)

```diff
-             Ij: "\\b0[oO][0-7](_?[0-7])*n?\\b"
+             gN: "\\b0[oO][0-7](_?[0-7])*n?\\b"
```

#### 61. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1044)

```diff
-             Ij: "\\b0[0-7]+n?\\b"
+             gN: "\\b0[0-7]+n?\\b"
```

#### 62. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1050)

```diff
-           Ij: "\\$\\{",
+           gN: "\\$\\{",
```

#### 63. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1056` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1056) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1056)

```diff
-           Ij: ".?html`",
+           gN: ".?html`",
```

#### 64. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1066)

```diff
-           Ij: ".?css`",
+           gN: ".?css`",
```

#### 65. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1076)

```diff
-           Ij: ".?gql`",
+           gN: ".?gql`",
```

#### 66. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1087` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1087) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1087)

```diff
-           Ij: "`",
+           gN: "`",
```

#### 67. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1096` → after: `L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1096) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1096)

```diff
-               Ij: "(?=@[A-Za-z]+)",
+               gN: "(?=@[A-Za-z]+)",
```

#### 68. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1100)

```diff
-                 Ij: "@[A-Za-z]+"
+                 gN: "@[A-Za-z]+"
```

#### 69. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1103)

```diff
-                 Ij: "\\{",
+                 gN: "\\{",
```

#### 70. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1110)

```diff
-                 Ij: cT + "(?=\\s*(-)|$)",
+                 gN: gq + "(?=\\s*(-)|$)",
```

#### 71. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1114)

```diff
-                 Ij: /(?=[^\n])\s/,
+                 gN: /(?=[^\n])\s/,
```

#### 72. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1124` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1124) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1124)

```diff
-         Ij: /\{/,
+         gN: /\{/,
```

#### 73. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1131)

```diff
-           Ij: /(\s*)\(/,
+           gN: /(\s*)\(/,
```

#### 74. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1138` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1138) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1138)

```diff
-           Ij: /(\s*)\(/,
+           gN: /(\s*)\(/,
```

#### 75. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1185)

```diff
-         match: kT.concat(/\b/, (GT = [...fT, "super", "import"].map((TT => `${TT}\\s*\\(`)), kT.concat("(?!", GT.join("|"), ")")), cT, kT.lookahead(/\s*\(/)),
+         match: Eq.concat(/\b/, (Tq = [...Aq, "super", "import"].map((qq => `${qq}\\s*\\(`)), Eq.concat("(?!", Tq.join("|"), ")")), gq, Eq.lookahead(/\s*\(/)),
```

#### 76. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1191)

```diff
-           Ij: kT.concat(/\./, kT.lookahead(kT.concat(cT, /(?![0-9A-Za-z$_(])/))),
+           gN: Eq.concat(/\./, Eq.lookahead(Eq.concat(gq, /(?![0-9A-Za-z$_(])/))),
```

#### 77. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1205)

```diff
-             Ij: /\(\)/
+             gN: /\(\)/
```

#### 78. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1235` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1235) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1235)

```diff
-           Ij: /^\s*['"]use (strict|asm)['"]/
+           gN: /^\s*['"]use (strict|asm)['"]/
```

#### 79. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1243)

```diff
-           Ij: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
+           gN: "(" + qq.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
```

#### 80. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1248)

```diff
-             Ij: ZT,
+             gN: pq,
```

#### 81. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1254)

```diff
-                 Ij: TT.UNDERSCORE_IDENT_RE,
+                 gN: qq.UNDERSCORE_IDENT_RE,
```

#### 82. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1258` → after: `L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1258) · [Before (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1258)

```diff
-                 Ij: /\(\s*\)/,
+                 gN: /\(\s*\)/,
```

#### 83. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1261` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1261) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1261)

```diff
-                 Ij: /(\s*)\(/,
+                 gN: /(\s*)\(/,
```

#### 84. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1270` → after: `L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1270) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1270)

```diff
-             Ij: /,/,
+             gN: /,/,
```

#### 85. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1277)

```diff
-               Ij: AT,
+               gN: Bq,
```

#### 86. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1282)

```diff
-               Ij: jT.Ij,
+               gN: Nq.gN,
```

#### 87. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1288` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1288) · [Before (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1288)

```diff
-               Ij: jT.Ij,
+               gN: Nq.gN,
```

#### 88. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1297` → after: `L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1297) · [Before (L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1297)

```diff
-           Ij: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
+           gN: "\\b(?!function)" + qq.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
```

#### 89. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1301)

```diff
-             Ij: cT,
+             gN: gq,
```

#### 90. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1326)

```diff
-   4705: (TT, kT, cT) => {
+   4562: (qq, Eq, gq) => {
```

#### 91. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1328)

```diff
-       d: () => CT
+       b: () => Wq
```

#### 92. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1345)

```diff
-           Ij: /<[A-Za-z0-9\\._:-]+/,
+           gN: /<[A-Za-z0-9\\._:-]+/,
```

#### 93. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1373)

```diff
-         hT = `\\.(${tT})`,
+         dq = `\\.(${Vq})`,
```

#### 94. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1378` → after: `L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1378) · [Before (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1378)

```diff
-             Ij: `(\\b(${NT})((${hT})|\\.)?|(${hT}))[eE][+-]?(${tT})\\b`
+             gN: `(\\b(${jq})((${dq})|\\.)?|(${dq}))[eE][+-]?(${Vq})\\b`
```

#### 95. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1380)

```diff
-             Ij: `\\b(${NT})\\b((${hT})\\b|\\.)?|(${hT})\\b`
+             gN: `\\b(${jq})\\b((${dq})\\b|\\.)?|(${dq})\\b`
```

#### 96. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1382)

```diff
-             Ij: "\\b(0|[1-9](_?[0-9])*)n\\b"
+             gN: "\\b(0|[1-9](_?[0-9])*)n\\b"
```

#### 97. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1384` → after: `L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1384) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1384)

```diff
-             Ij: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
+             gN: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
```

#### 98. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1386)

```diff
-             Ij: "\\b0[bB][0-1](_?[0-1])*n?\\b"
+             gN: "\\b0[bB][0-1](_?[0-1])*n?\\b"
```

#### 99. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1388` → after: `L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1388) · [Before (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1388)

```diff
-             Ij: "\\b0[oO][0-7](_?[0-7])*n?\\b"
+             gN: "\\b0[oO][0-7](_?[0-7])*n?\\b"
```

#### 100. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1390)

```diff
-             Ij: "\\b0[0-7]+n?\\b"
+             gN: "\\b0[0-7]+n?\\b"
```

#### 101. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1396` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1396) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1396)

```diff
-           Ij: "\\$\\{",
+           gN: "\\$\\{",
```

#### 102. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1402` → after: `L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1402) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1402)

```diff
-           Ij: ".?html`",
+           gN: ".?html`",
```

#### 103. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1412` → after: `L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1412) · [Before (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1412)

```diff
-           Ij: ".?css`",
+           gN: ".?css`",
```

#### 104. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1422)

```diff
-           Ij: ".?gql`",
+           gN: ".?gql`",
```

#### 105. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1433` → after: `L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1433) · [Before (L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1433)

```diff
-           Ij: "`",
+           gN: "`",
```

#### 106. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1442` → after: `L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1442) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1442)

```diff
-               Ij: "(?=@[A-Za-z]+)",
+               gN: "(?=@[A-Za-z]+)",
```

#### 107. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1446` → after: `L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1446) · [Before (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1446)

```diff
-                 Ij: "@[A-Za-z]+"
+                 gN: "@[A-Za-z]+"
```

#### 108. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1449)

```diff
-                 Ij: "\\{",
+                 gN: "\\{",
```

#### 109. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1456)

```diff
-                 Ij: cT + "(?=\\s*(-)|$)",
+                 gN: gq + "(?=\\s*(-)|$)",
```

#### 110. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1460` → after: `L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1460) · [Before (L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1460)

```diff
-                 Ij: /(?=[^\n])\s/,
+                 gN: /(?=[^\n])\s/,
```

#### 111. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1470)

```diff
-         Ij: /\{/,
+         gN: /\{/,
```

#### 112. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1477)

```diff
-           Ij: /(\s*)\(/,
+           gN: /(\s*)\(/,
```

#### 113. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1484` → after: `L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1484) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1484)

```diff
-           Ij: /(\s*)\(/,
+           gN: /(\s*)\(/,
```

#### 114. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1531)

```diff
-         match: kT.concat(/\b/, (GT = [...fT, "super", "import"].map((TT => `${TT}\\s*\\(`)), kT.concat("(?!", GT.join("|"), ")")), cT, kT.lookahead(/\s*\(/)),
+         match: Eq.concat(/\b/, (Tq = [...Aq, "super", "import"].map((qq => `${qq}\\s*\\(`)), Eq.concat("(?!", Tq.join("|"), ")")), gq, Eq.lookahead(/\s*\(/)),
```

#### 115. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1537)

```diff
-           Ij: kT.concat(/\./, kT.lookahead(kT.concat(cT, /(?![0-9A-Za-z$_(])/))),
+           gN: Eq.concat(/\./, Eq.lookahead(Eq.concat(gq, /(?![0-9A-Za-z$_(])/))),
```

#### 116. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1551)

```diff
-             Ij: /\(\)/
+             gN: /\(\)/
```

#### 117. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1581)

```diff
-           Ij: /^\s*['"]use (strict|asm)['"]/
+           gN: /^\s*['"]use (strict|asm)['"]/
```

#### 118. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1589)

```diff
-           Ij: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
+           gN: "(" + qq.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
```

#### 119. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1594` → after: `L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1594) · [Before (L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1594)

```diff
-             Ij: ZT,
+             gN: pq,
```

#### 120. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1600)

```diff
-                 Ij: TT.UNDERSCORE_IDENT_RE,
+                 gN: qq.UNDERSCORE_IDENT_RE,
```

#### 121. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1604` → after: `L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1604) · [Before (L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1604)

```diff
-                 Ij: /\(\s*\)/,
+                 gN: /\(\s*\)/,
```

#### 122. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1607)

```diff
-                 Ij: /(\s*)\(/,
+                 gN: /(\s*)\(/,
```

#### 123. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1616)

```diff
-             Ij: /,/,
+             gN: /,/,
```

#### 124. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1623)

```diff
-               Ij: AT,
+               gN: Bq,
```

#### 125. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1628` → after: `L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1628) · [Before (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1628)

```diff
-               Ij: jT.Ij,
+               gN: Nq.gN,
```

#### 126. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1634)

```diff
-               Ij: jT.Ij,
+               gN: Nq.gN,
```

#### 127. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/77.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/77.js#L1643)

```diff
-           Ij: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
+           gN: "\\b(?!function)" + qq.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
```
